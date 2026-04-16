/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

import type { AsyncCallback, Callback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import Context from './application/Context';
import { Filter } from './@ohos.file.fs';

/**
 * The **fileAccess** module provides a framework for accessing and operating user files based on 
 * [extension](docroot://application-models/extensionability-overview.md). This module interacts with a variety of file 
 * management services, such as the storage management service, and provides a set of unified file access and management
 * APIs for system applications. The storage management service manages both the directories of the built-in storage and
 * resources on external devices, such as shared disks, USB flash drives, and SD cards.
 * 
 * > **NOTE**
 * >
 * > - Currently, the APIs of this module can be called only by **FilePicker** and **FileManager**.
 *
 * @syscap SystemCapability.FileManagement.UserFileService
 * @since 9 dynamiconly
 * @deprecated since 23
 * @useinstead @ohos.file.fs:fileIo
 */
declare namespace fileAccess {
  /**
   * Obtains information about all Wants with **extension** set to **fileAccess** in the system. A Want contains 
   * information for starting an ability. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { AsyncCallback<Array<Want>> } callback - The callback is used to return a Array<Want> object.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900006 - No such device or address
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900014 - Device or resource busy
   * @throws { BusinessError } 13900015 - File exists
   * @throws { BusinessError } 13900017 - No such device
   * @throws { BusinessError } 13900018 - Not a directory
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900022 - Too many open files
   * @throws { BusinessError } 13900023 - Text file busy
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900027 - Read-only file system
   * @throws { BusinessError } 13900029 - Resource deadlock would occur
   * @throws { BusinessError } 13900030 - File name too long
   * @throws { BusinessError } 13900033 - Too many symbolic links encountered
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900038 - Value too large for defined data type
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14300001 - IPC error
   * @throws { BusinessError } 14300002 - Invalid uri
   * @throws { BusinessError } 14300003 - Fail to get fileextension info
   * @throws { BusinessError } 14300004 - Get wrong result
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  function getFileAccessAbilityInfo(callback: AsyncCallback<Array<Want>>): void;

  /**
   * Obtains information about all Wants with **extension** set to **fileAccess** in the system. A Want contains 
   * information for starting an ability. This API uses a promise to return the result.
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<Array<Want>> } Returns the wants.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900006 - No such device or address
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900014 - Device or resource busy
   * @throws { BusinessError } 13900015 - File exists
   * @throws { BusinessError } 13900017 - No such device
   * @throws { BusinessError } 13900018 - Not a directory
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900022 - Too many open files
   * @throws { BusinessError } 13900023 - Text file busy
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900027 - Read-only file system
   * @throws { BusinessError } 13900029 - Resource deadlock would occur
   * @throws { BusinessError } 13900030 - File name too long
   * @throws { BusinessError } 13900033 - Too many symbolic links encountered
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900038 - Value too large for defined data type
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14300001 - IPC error
   * @throws { BusinessError } 14300002 - Invalid uri
   * @throws { BusinessError } 14300003 - Fail to get fileextension info
   * @throws { BusinessError } 14300004 - Get wrong result
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  function getFileAccessAbilityInfo(): Promise<Array<Want>>;

  /**
   * Creates a **Helper** object to bind with all file management services in the system. This API returns the result 
   * synchronously.
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Context } context Indicates the application context.
   * @returns { FileAccessHelper } Returns the fileAccessHelper.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900006 - No such device or address
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900014 - Device or resource busy
   * @throws { BusinessError } 13900015 - File exists
   * @throws { BusinessError } 13900017 - No such device
   * @throws { BusinessError } 13900018 - Not a directory
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900022 - Too many open files
   * @throws { BusinessError } 13900023 - Text file busy
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900027 - Read-only file system
   * @throws { BusinessError } 13900029 - Resource deadlock would occur
   * @throws { BusinessError } 13900030 - File name too long
   * @throws { BusinessError } 13900033 - Too many symbolic links encountered
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900038 - Value too large for defined data type
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14300001 - IPC error
   * @throws { BusinessError } 14300002 - Invalid uri
   * @throws { BusinessError } 14300003 - Fail to get fileextension info
   * @throws { BusinessError } 14300004 - Get wrong result
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  function createFileAccessHelper(context: Context): FileAccessHelper;

  /**
   * Creates a **Helper** object to bind with the specified Wants. This API returns the result synchronously. The 
   * **Helper** object provides file access and management capabilities.
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Context } context Indicates the application context.
   * @param { Array<Want> } wants Represents the connected data provider.
   * @returns { FileAccessHelper } Returns the fileAccessHelper.
   * @throws { BusinessError } 13900001 - Operation not permitted
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900006 - No such device or address
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900014 - Device or resource busy
   * @throws { BusinessError } 13900015 - File exists
   * @throws { BusinessError } 13900017 - No such device
   * @throws { BusinessError } 13900018 - Not a directory
   * @throws { BusinessError } 13900019 - Is a directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900022 - Too many open files
   * @throws { BusinessError } 13900023 - Text file busy
   * @throws { BusinessError } 13900024 - File too large
   * @throws { BusinessError } 13900025 - No space left on device
   * @throws { BusinessError } 13900027 - Read-only file system
   * @throws { BusinessError } 13900029 - Resource deadlock would occur
   * @throws { BusinessError } 13900030 - File name too long
   * @throws { BusinessError } 13900033 - Too many symbolic links encountered
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900038 - Value too large for defined data type
   * @throws { BusinessError } 13900041 - Quota exceeded
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14300001 - IPC error
   * @throws { BusinessError } 14300002 - Invalid uri
   * @throws { BusinessError } 14300003 - Fail to get fileextension info
   * @throws { BusinessError } 14300004 - Get wrong result
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  function createFileAccessHelper(context: Context, wants: Array<Want>): FileAccessHelper;

  /**
   * Provides APIs for managing file or directory attribute information.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  interface FileInfo {
    /**
     * URI of the file or directory.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    uri: string;
    /**
     * Relative path of the file or directory.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    relativePath: string;
    /**
     * Name of the file or directory.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    fileName: string;
    /**
     * Permissions on the file or directory.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    mode: number;
    /**
     * Size of the file or directory.
     * <br>Unit: Byte.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    size: number;
    /**
     * Time when the file or directory was last modified.
     * <br>Unit: ms.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    mtime: number;
    /**
     * Multipurpose Internet Mail Extensions (MIME) type of the file or directory.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    mimeType: string;

    /**
     * Obtains a **FileIterator** object that lists the next-level files or directories matching the specified 
     * conditions of this directory. This API returns the result synchronously. [FileInfo]{@link fileAccess.FileInfo} is
     * returned by [next()]{@link fileAccess.FileIterator.next}. Currently, only built-in storage devices support the 
     * file filter.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { Filter } filter Indicates the filter of file.
     * @returns { FileIterator } Returns the FileIterator Object.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.listFile
     */
    listFile(filter?: Filter): FileIterator;

    /**
     * Obtains a **FileIterator** object that recursively retrieves the files matching the specified conditions of this 
     * directory. This API returns the result synchronously. [FileInfo]{@link fileAccess.FileInfo} is returned by 
     * [next()]{@link fileAccess.FileIterator.next}. Currently, this API supports only built-in storage devices.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { Filter } filter Indicates the filter of file.
     * @returns { FileIterator } Returns the FileIterator Object.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    scanFile(filter?: Filter): FileIterator;
  }

  /**
   * Provides the **FileIterator** object.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  interface FileIterator {
    /**
     * Obtains information about the next-level files or directories.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @returns { object } Returns FileInfo Object and boolean flag.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    next(): { value: FileInfo, done: boolean };
  }

  /**
   * Provides APIs for managing the device's root attribute information.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  interface RootInfo {
    /**
     * Capabilities supported by the device.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    deviceType: number;
    /**
     * Capabilities supported by the device.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    uri: string;
    /**
     * Relative path of the root directory.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    relativePath: string;
    /**
     * Capabilities supported by the device.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    displayName: string;
    /**
     * Capabilities supported by the device.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    deviceFlags: number;

    /**
     * Obtains a **FileIterator** object that lists the next-level files or directories matching the specified 
     * conditions of this directory. This API returns the result synchronously. [FileInfo]{@link fileAccess.FileInfo} is
     * returned by [next()]{@link fileAccess.FileIterator.next}. Currently, only built-in storage devices support the 
     * file filter.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { Filter } filter Indicates the filter of file.
     * @returns { FileIterator } Returns the FileIterator Object.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.listFile
     */
    listFile(filter?: Filter): FileIterator;

    /**
     * Obtains a **FileIterator** object that recursively retrieves the files matching the specified conditions from the
     * device root directory. This API returns the result synchronously. [FileInfo]{@link fileAccess.FileInfo} is 
     * returned by [next]{@link fileAccess.FileIterator.next}. Currently, this API supports only built-in storage 
     * devices.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { Filter } filter Indicates the filter of file.
     * @returns { FileIterator } Returns the RootIterator Object.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    scanFile(filter?: Filter): FileIterator;
  }

  /**
   * Provides an iterator object of the device root directory.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  interface RootIterator {
    /**
     * Obtains the next-level root directory.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @returns { object } Returns RootInfo Object and boolean flag.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    next(): { value: RootInfo, done: boolean };
  }

  /**
   * Defines the information returned when the file copy operation fails. If the copy operation is successful, no 
   * information is returned.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamiconly
   * @deprecated since 23
   */
  interface CopyResult {
    /**
     * URI of the source file or directory.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    sourceUri: string;
    /**
     * URI of the conflicting file. If the error is not caused by a file conflict, **destUri** is empty.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    destUri: string;
    /**
     * Error code.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    errCode: number;
    /**
     * Error message.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    errMsg: string;
  }

  /**
   * Enumerates the file open modes.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamiconly
   * @deprecated since 23
   * @useinstead @ohos.file.fs:fileIo.OpenMode
   */
  enum OPENFLAGS {
    /**
     * Read mode.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.OpenMode
     */
    READ = 0o0,

    /**
     * Write mode.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.OpenMode
     */
    WRITE = 0o1,

    /**
     * Read/Write mode.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.OpenMode
     */
    WRITE_READ = 0o2
  }

  /**
   * Property elements that support the file queries.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamiconly
   * @deprecated since 23
   */
  enum FileKey {
    /**
     * The key represents the file name.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    DISPLAY_NAME = 'display_name',

    /**
     * The key represents the date of the file creation.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    DATE_ADDED = 'date_added',

    /**
     * The key represents the modify date of the file.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    DATE_MODIFIED = 'date_modified',

    /**
     * The key represents the relative path.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    RELATIVE_PATH = 'relative_path',

    /**
     * The key represents the file size.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    FILE_SIZE = 'size'
  }

  /**
   * Enumerates the notification types.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamiconly
   * @deprecated since 23
   */
  enum NotifyType {
    /**
     * File added.
     * 
     * See examples 2 and 3 of **registerObserver**.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    NOTIFY_ADD = 0,

    /**
     * File deleted.
     * 
     * See examples 1 and 2 of **unregisterObserver(uri: string, callback: Callback<NotifyMessage>)**.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    NOTIFY_DELETE = 1,

    /**
     * File or directory moved in (for example, **rename()** is performed on a file or directory in this directory or a 
     * file or directory is moved to this directory). 
     * 
     * See example 1 of **registerObserver** and example 1 of **unregisterObserver(uri: string)**.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    NOTIFY_MOVED_TO = 2,

    /**
     * File or directory moved out (for example, **rename()** is performed on a file or directory in this directory or a
     * file or directory is moved out from this directory). 
     * 
     * See example 1 of **registerObserver** and example 1 of **unregisterObserver(uri: string)**.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    NOTIFY_MOVED_FROM = 3,

    /**
     * File moved (for example, the target file or directory is renamed or moved).
     * 
     * See example 1 of **registerObserver**.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    NOTIFY_MOVE_SELF = 4,

    /**
     * Device goes online.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamiconly
     * @deprecated since 23
     */
    NOTIFY_DEVICE_ONLINE = 5,

    /**
     * Device goes offline.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamiconly
     * @deprecated since 23
     */
    NOTIFY_DEVICE_OFFLINE = 6
  }

  /**
   * Represents the notification message.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamiconly
   * @deprecated since 23
   * @useinstead @ohos.file.fs:fileIo.WatchEvent
   */
  interface NotifyMessage {
    /**
     * Notification type.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    type: NotifyType;

    /**
     * URIs of the changed files. Currently, only one notification is supported. A collection of multiple notifications 
     * will be supported in later versions.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    uris: Array<string>;
  }

  /**
   * Represents the information returned when the move operation fails. If the operation is successful, no information 
   * is returned.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamiconly
   * @deprecated since 23
   */
  interface MoveResult {
    /**
     * URI of the source file or directory.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamiconly
     * @deprecated since 23
     */
    sourceUri: string;

    /**
     * URI of the conflicting file. If the error is not caused by a file conflict, **destUri** is empty.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamiconly
     * @deprecated since 23
     */
    destUri: string;

    /**
     * Error code. For details about the error codes, see 
     * [File Management Error Codes](docroot://reference/apis-core-file-kit/errorcode-filemanagement.md).
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamiconly
     * @deprecated since 23
     */
    errCode: number;

    /**
     * Error message.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamiconly
     * @deprecated since 23
     */
    errMsg: string;
  }

  /**
   * Indicates the root uri of the device
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamiconly
   * @deprecated since 23
   */
  const DEVICES_URI = 'file://docs';

  /**
   * Provides a **FileAccessHelper** object.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  interface FileAccessHelper {
    /**
     * Opens a file. This API uses a promise to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri Indicates the path of the file to open.
     * @param { OPENFLAGS } flags Indicate options of opening a file. The default value is read-only.
     * @returns { Promise<number> } Returns the file descriptor.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.open(path: string, mode?: number)
     */
    openFile(uri: string, flags: OPENFLAGS) : Promise<number>;

    /**
     * Opens a file. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri Indicates the path of the file to open.
     * @param { OPENFLAGS } flags Indicate options of opening a file. The default value is read-only.
     * @param { AsyncCallback<number> } callback - The callback is used to return the file descriptor.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.open(path: string, callback: AsyncCallback<File>)
     */
    openFile(uri: string, flags: OPENFLAGS, callback: AsyncCallback<number>): void;

    /**
     * Creates a file in a directory. This API uses a promise to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri Represents a specific parent directory.
     * @param { string } displayName Indicates the new file name, and supports with suffix.
     * @returns { Promise<string> } Returns the new file's URI.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.createRandomAccessFile(file: string | File, mode?: number, options?: RandomAccessFileOptions)
     */
    createFile(uri: string, displayName: string) : Promise<string>;

    /**
     * Creates a file in a directory. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri Represents a specific parent directory.
     * @param { string } displayName Indicates the new file name, and supports with suffix.
     * @param { AsyncCallback<string> } callback - The callback is used to return the new file's URI.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.createRandomAccessFile(file: string | File, callback: AsyncCallback<RandomAccessFile>)
     */
    createFile(uri: string, displayName: string, callback: AsyncCallback<string>): void;

    /**
     * Creates a directory in a specified directory. This API uses a promise to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } parentUri Represents a specific parent directory.
     * @param { string } displayName Indicates the new directory name.
     * @returns { Promise<string> } Returns the new directory's URI.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.mkdir(path: string)
     */
    mkDir(parentUri: string, displayName: string) : Promise<string>;

    /**
     * Creates a directory in a specified directory. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } parentUri Represents a specific parent directory.
     * @param { string } displayName Indicates the new directory name.
     * @param { AsyncCallback<string> } callback - The callback is used to return the new directory's URI.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.mkdir(path: string, callback: AsyncCallback<void>)
     */
    mkDir(parentUri: string, displayName: string, callback: AsyncCallback<string>): void;

    /**
     * Deletes a file or directory. This API uses a promise to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri Indicates the file or directory to be deleted.
     * @returns { Promise<number> }
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:AtomicFile#delete
     */
    delete(uri: string) : Promise<number>;

    /**
     * Deletes a file or directory. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri Indicates the file or directory to be deleted.
     * @param { AsyncCallback<number> } callback
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:AtomicFile#delete
     */
    delete(uri: string, callback: AsyncCallback<number>): void;

    /**
     * Moves a file or directory. This API uses a promise to return the result. Currently, this API does not support 
     * move of files or directories across devices.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceFile Indicates the file or directory to be moved.
     * @param { string } destFile Represents the destination folder.
     * @returns { Promise<string> } Promise used to return the URI of the file or directory in the destination 
     *     directory.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.moveFile(src: string, dest: string, mode?: number)
     */
    move(sourceFile: string, destFile: string) : Promise<string>;

    /**
     * Moves a file or directory. This API uses an asynchronous callback to return the result. Currently, this API does 
     * not support move of files or directories across devices.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceFile Indicates the file or directory to be moved.
     * @param { string } destFile Represents the destination folder.
     * @param { AsyncCallback<string> } callback - The callback is used to return the generated new file or directory.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.moveFile(src: string, dest: string, callback: AsyncCallback<void>)
     */
    move(sourceFile: string, destFile: string, callback: AsyncCallback<string>): void;

    /**
     * Copies a file or directory. This API uses a promise to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - URI of the source file or directory to copy. For example, 
     *     **file://docs/storage/Users/currentUser/Download/1.txt**.
     * @param { string } destUri - URI of the destination directory, to which the file or directory is moved. For 
     *     example, **file://docs/storage/Users/currentUser/Download/test**.
     * @param { boolean } force - Whether to forcibly overwrite the file with the same name. If **force** is **true**, 
     *     the file with the same name will be overwritten. If **force** is **false** or not specified, the file with 
     *     the same name will not be overwritten. The default value is **false**.
     * @returns { Promise<Array<CopyResult>> } Promise used to return the result. If the file or directory is copied 
     *     successfully, no information is returned. If the file copy fails, a **copyResult** array is returned.
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.copy(srcUri: string, destUri: string, options?: CopyOptions)
     */
    copy(sourceUri: string, destUri: string, force?: boolean): Promise<Array<CopyResult>>;

    /**
     * Copies a file or directory. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - URI of the source file or directory to copy. For example, 
     *     **file://docs/storage/Users/currentUser/Download/1.txt**.
     * @param { string } destUri - URI of the destination directory, to which the file or directory is moved. For 
     *     example, **file://docs/storage/Users/currentUser/Download/test**.
     * @param { AsyncCallback<Array<CopyResult>> } callback - Callback invoked to return the result. If the file or 
     *     directory is copied successfully, no information is returned. If the copy fails, a **copyResult** array is 
     *     returned.
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.copy(srcUri: string, destUri: string, callback: AsyncCallback<void>)
     */
    copy(sourceUri: string, destUri: string, callback: AsyncCallback<Array<CopyResult>>): void;

    /**
     * Copies a file or directory. If a file with the same name already exists, you can choose whether to forcibly 
     * overwrite the original file. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - URI of the source file or directory to copy. For example, 
     *     **file://docs/storage/Users/currentUser/Download/1.txt**.
     * @param { string } destUri - URI of the destination directory, to which the file or directory is moved. For 
     *     example, **file://docs/storage/Users/currentUser/Download/test**.
     * @param { boolean } force - Whether to forcibly overwrite the original file with the same name. If **force** is 
     *     set to **true**, the original file is forcibly overwritten. If **force** is left empty or set to **false**, 
     *     the original file is not overwritten.
     * @param { AsyncCallback<Array<CopyResult>> } callback - Callback invoked to return the result. If the file or 
     *     directory is copied successfully, no information is returned. If the copy fails, a **copyResult** array is 
     *     returned.
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.copy(srcUri: string, destUri: string, options: CopyOptions, callback: AsyncCallback<void>)
     */
    copy(sourceUri: string, destUri: string, force: boolean, callback: AsyncCallback<Array<CopyResult>>): void;

    /**
     * Copies a file with an alternative file name. This API uses a promise to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - URI of the source file or directory to copy. For example, 
     *     **file://docs/storage/Users/currentUser/Download/1.txt**.
     * @param { string } destUri - URI of the destination directory, to which the file or directory is moved. For 
     *     example, **file://docs/storage/Users/currentUser/Download/test**.
     * @param { string } fileName - File name to use if there is a file with the same name as the source file in the 
     *     destination directory.
     * @returns { Promise<string> } URI of the file generated.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.copyFile(src: string | number, dest: string | number, mode?: number)
     */
    copyFile(sourceUri: string, destUri: string, fileName: string): Promise<string>;

    /**
     * Copies a file with an alternative file name. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - URI of the source file or directory to copy. For example, 
     *     **file://docs/storage/Users/currentUser/Download/1.txt**.
     * @param { string } destUri - URI of the destination directory, to which the file or directory is moved. For 
     *     example, **file://docs/storage/Users/currentUser/Download/test**.
     * @param { string } fileName - File name to use if there is a file with the same name as the source file in the 
     *     destination directory.
     * @param { AsyncCallback<string> } callback - URI of the file generated.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.copyFile(src: string | number, dest: string | number, callback: AsyncCallback<void>)
     */
    copyFile(sourceUri: string, destUri: string, fileName: string, callback: AsyncCallback<string>): void;

    /**
     * Renames a file or directory. This API uses a promise to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri Indicates the selected file or directory.
     * @param { string } displayName Indicates the new directory or file name.
     * @returns { Promise<string> } Returns a URI representing the new file or directory.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.rename(oldPath: string, newPath: string)
     */
    rename(uri: string, displayName: string) : Promise<string>;

    /**
     * Renames a file or directory. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri Indicates the selected file or directory.
     * @param { string } displayName Indicates the new directory or file name.
     * @param { AsyncCallback<string> } callback - The callback is used to return a URI representing the new file or
     *     directory.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.rename(oldPath: string, newPath: string, callback: AsyncCallback<void>)
     */
    rename(uri: string, displayName: string, callback: AsyncCallback<string>): void;

    /**
     * Checks whether a file or directory exists. This API uses a promise to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceFileUri Indicates the selected file or directory.
     * @returns { Promise<boolean> } Returns whether it exists.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.access(path: string, mode?: AccessModeType)
     */
    access(sourceFileUri: string) : Promise<boolean>;

    /**
     * Checks whether a file or directory exists. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceFileUri Indicates the selected file or directory.
     * @param { AsyncCallback<boolean> } callback - The callback is used to return whether it exists.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.access(path: string, callback: AsyncCallback<boolean>)
     */
    access(sourceFileUri: string, callback: AsyncCallback<boolean>): void;

    /**
     * Queries the attribute information about a file or directory based on a URI. This API uses a promise to return the
     * result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri - File or directory URI obtained from [FileInfo]{@link fileAccess.FileInfo}.
     * @param { string } metaJson - Attribute [FILEKEY]{@link fileAccess.FileKey} to query.
     * @returns { Promise<string> } Promise used to return a JSON string that contains the file attribute and the value 
     *     obtained.
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.stat(file: string | number)
     */
    query(uri: string, metaJson: string) : Promise<string>;

    /**
     * Queries the attribute information about a file or directory based on a URI. This API uses an asynchronous 
     * callback to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri - File or directory URI obtained from [FileInfo]{@link fileAccess.FileInfo}.
     * @param { string } metaJson - Attribute [FILEKEY]{@link fileAccess.FileKey} to query.
     * @param { AsyncCallback<string> } callback - Callback used to return a JSON string that contains the file 
     *     attribute and the value obtained.
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.stat(file: string | number, callback: AsyncCallback<Stat>)
     */
    query(uri: string, metaJson: string, callback: AsyncCallback<string>) : void;

    /**
     * Obtains a **FileInfo** object based on a URI. This API uses a promise to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri - Indicates the selected file or directory.
     * @returns { Promise<FileInfo> } Returns a FileInfo.
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.stat(file: string | number)
     */
    getFileInfoFromUri(uri: string) : Promise<FileInfo>;

    /**
     * Obtains a **FileInfo** object based on a URI. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri - Indicates the selected file or directory.
     * @param { AsyncCallback<FileInfo> } callback - The callback is used to return a fileinfo object.
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.stat(file: string | number, callback: AsyncCallback<Stat>)
     */
    getFileInfoFromUri(uri: string, callback: AsyncCallback<FileInfo>) : void;

    /**
     * Obtains a **FileInfo** object based on a relative path. This API uses a promise to return the result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } relativePath - Indicates the selected file or directory.
     * @returns { Promise<FileInfo> } Returns a FileInfo.
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.stat(file: string | number)
     */
    getFileInfoFromRelativePath(relativePath: string) : Promise<FileInfo>;

    /**
     * Obtains a **FileInfo** object based on a relative path. This API uses an asynchronous callback to return the 
     * result.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } relativePath - Indicates the selected file or directory.
     * @param { AsyncCallback<FileInfo> } callback - The callback is used to return a fileinfo object.
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.stat(file: string | number, callback: AsyncCallback<Stat>)
     */
    getFileInfoFromRelativePath(relativePath: string, callback: AsyncCallback<FileInfo>) : void;

    /**
     * Obtains information about the device root nodes of the file management services associated with the **Helper** 
     * object.  
     * This API uses a promise to return a **RootIterator** object. You can use 
     * [next]{@link fileAccess.FileIterator.next} to return [RootInfo]{@link fileAccess.RootInfo}.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @returns { Promise<RootIterator> } Returns a RootIterator.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    getRoots(): Promise<RootIterator>;

    /**
     * Obtains information about the device root nodes of the file management services associated with the **Helper** 
     * object.  
     * This API uses an asynchronous callback to return a **RootIterator** object. You can use 
     * [next]{@link fileAccess.FileIterator.next} to return [RootInfo]{@link fileAccess.RootInfo}.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { AsyncCallback<RootIterator> } callback - The callback is used to return a RootIterator.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900006 - No such device or address
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900013 - Bad address
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900017 - No such device
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900029 - Resource deadlock would occur
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900033 - Too many symbolic links encountered
     * @throws { BusinessError } 13900034 - Operation would block
     * @throws { BusinessError } 13900038 - Value too large for defined data type
     * @throws { BusinessError } 13900041 - Quota exceeded
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000002 - Invalid uri
     * @throws { BusinessError } 14000003 - Invalid file extension
     * @throws { BusinessError } 14000004 - File has been put into trash bin
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 9 dynamiconly
     * @deprecated since 23
     */
    getRoots(callback: AsyncCallback<RootIterator>): void;

    /**
     * Registers a callback to listen for a URI. URIs and callbacks can be in many-to-many relationships. You are 
     * advised to use one callback to listen for one URI.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri - URI of the file or directory.
     * @param { boolean } notifyForDescendants - Whether to observe changes of the files in the directory. The value 
     *     **true** means to observe changes of the files in the directory; the value **false** means the opposite.
     * @param { Callback<NotifyMessage> } callback - Callback invoked to return the notification.
     * @throws { BusinessError } 14300002 - Invalid uri
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.createWatcher
     */
    registerObserver(uri: string, notifyForDescendants: boolean, callback: Callback<NotifyMessage>): void;

    /**
     * Unregisters a callback that is used to listen for the specified URI.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri - URI of the file or directory.
     * @param { Callback<NotifyMessage> } callback - Callback to unregister. If this parameter is not specified, all 
     *     callbacks of the specified URI will be unregistered.
     * @throws { BusinessError } 14300002 - Invalid uri
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    unregisterObserver(uri: string, callback?: Callback<NotifyMessage>): void;

    /**
     * Moves a file or directory. This API uses a promise to return the result.
     * You can forcibly overwrite the file with the same name in the destination directory.
     * Currently, this API does not support move of files or directories across devices.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - URI of the source file or directory to move.
     * @param { string } destUri - URI of the destination directory, to which the file or directory is moved.
     * @param { boolean } [force] - Whether to forcibly overwrite the file with the same name. The value **true** means 
     *     to overwrite the file forcibly; the value **false** means the opposite. The default value is **false**.
     * @returns { Promise<Array<MoveResult>> } Promise used to return the result. If the operation is successful, no 
     *     information is returned. If the operation fails, a **MoveResult** array is returned.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.moveFile(src: string, dest: string, mode?: number)
     */
    moveItem(sourceUri: string, destUri: string, force?: boolean): Promise<Array<MoveResult>>;

    /**
     * Moves a file or directory. This API uses an asynchronous callback to return the result.
     * Currently, this API does not support move of files or directories across devices.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - URI of the source file or directory to move.
     * @param { string } destUri - URI of the destination directory, to which the file or directory is moved.
     * @param { AsyncCallback<Array<MoveResult>> } callback - Callback invoked to return the result. If the operation is
     *     successful, no information is returned. If the operation fails, a **MoveResult** array is returned.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.moveFile(src: string, dest: string, callback: AsyncCallback<void>)
     */
    moveItem(sourceUri: string, destUri: string, callback: AsyncCallback<Array<MoveResult>>): void;

    /**
     * Moves a file or directory. This API uses an asynchronous callback to return the result.
     * You can forcibly overwrite the file with the same name in the destination directory.
     * Currently, this API does not support move of files or directories across devices.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - URI of the source file or directory to move.
     * @param { string } destUri - URI of the destination directory, to which the file or directory is moved.
     * @param { boolean } force - Whether to forcibly overwrite the file with the same name. The value **true** means to
     *     overwrite the file forcibly; the value **false** means the opposite. The default value is **false**.
     * @param { AsyncCallback<Array<MoveResult>> } callback - Callback invoked to return the result. If the operation is
     *     successful, no information is returned. If the operation fails, a **MoveResult** array is returned.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.moveFile(src: string, dest: string, mode: number, callback: AsyncCallback<void>)
     */
    moveItem(sourceUri: string, destUri: string, force: boolean, callback: AsyncCallback<Array<MoveResult>>): void;

    /**
     * Moves a file, and renames it if a file with the same name already exists in the destination directory. This API 
     * uses a promise to return the result.
     * If a file with the same name exists (that is, a file moving conflict occurs), you can rename the file to be moved
     * and save it to the destination directory.
     * Currently, this API does not support move of files across devices.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - URI of the source file to move.
     * @param { string } destUri - URI of the destination directory, to which the file is moved.
     * @param { string } fileName - New name of the file.
     * @returns { Promise<string> } Promise used to return the URI of the file in the destination directory.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.moveFile(src: string, dest: string, mode?: number)
     */
    moveFile(sourceUri: string, destUri: string, fileName: string): Promise<string>;

    /**
     * Moves a file, and renames it if a file with the same name already exists in the destination directory. This API 
     * uses an asynchronous callback to return the result.
     * If a file with the same name exists (that is, a file moving conflict occurs), you can rename the file to be moved
     * and save it to the destination directory.
     * Currently, this API does not support move of files across devices.
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - URI of the source file to move.
     * @param { string } destUri - URI of the destination directory, to which the file is moved.
     * @param { string } fileName - New name of the file.
     * @param { AsyncCallback<string> } callback - Callback invoked to return the URI of the file in the destination 
     *     directory.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 13900001 - Operation not permitted
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900004 - Interrupted system call
     * @throws { BusinessError } 13900008 - Bad file descriptor
     * @throws { BusinessError } 13900011 - Out of memory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900014 - Device or resource busy
     * @throws { BusinessError } 13900015 - File exists
     * @throws { BusinessError } 13900018 - Not a directory
     * @throws { BusinessError } 13900019 - Is a directory
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900022 - Too many open files
     * @throws { BusinessError } 13900023 - Text file busy
     * @throws { BusinessError } 13900024 - File too large
     * @throws { BusinessError } 13900025 - No space left on device
     * @throws { BusinessError } 13900027 - Read-only file system
     * @throws { BusinessError } 13900030 - File name too long
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14300001 - IPC error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @throws { BusinessError } 14300003 - Fail to get fileextension info
     * @throws { BusinessError } 14300004 - Get wrong result
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.moveFile(src: string, dest: string, mode: number, callback: AsyncCallback<void>)
     */
    moveFile(sourceUri: string, destUri: string, fileName: string, callback: AsyncCallback<string>): void;
  }
}

export default fileAccess;
