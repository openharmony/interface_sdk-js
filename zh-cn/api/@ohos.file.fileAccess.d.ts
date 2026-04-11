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

import type { AsyncCallback, Callback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import Context from './application/Context';
import { Filter } from './@ohos.file.fs';

/**
 * fileAccess模块是基于[extension](docroot://application-models/extensionability-overview.md)机制实现的一个对公共文件访问和操作的框架。该模块一方面对接各类文
 * 件管理服务，如存储管理服务等；另一方面为系统应用提供一套统一的文件访问管理接口。存储管理服务可以管理内置存储部分目录，以及共享盘、U盘、SD卡等设备上的资源。
 * 
 * > **说明：**
 * >
 * > - 当前只支持FilePicker、文件管理器调用。
 *
 * @syscap SystemCapability.FileManagement.UserFileService
 * @since 9 dynamiconly
 * @deprecated since 23
 * @useinstead @ohos.file.fs:fileIo
 */
declare namespace fileAccess {
  /**
   * 以异步方法获取系统内extension配置为fileAccess类型的所有Want信息。使用callback异步回调。
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
   * 以异步方法获取系统内extension配置为fileAccess类型的所有Want信息。使用Promise异步回调。
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
   * 以同步方法创建连接当前系统内所有文件管理服务的helper对象。
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
   * 以同步方法创建连接指定wants的helper对象。
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
   * 表示文件(夹)属性信息和接口能力。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  interface FileInfo {
    /**
     * 文件(夹)的uri。
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
     * 文件(夹)的相对路径。
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
     * 文件(夹)的名称。
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
     * 文件(夹)的权限信息。
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
     * 文件(夹)的大小。（单位：字节）
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
     * 文件(夹)的修改时间。自1970年1月1日起至目标时间的毫秒数。
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
     * 文件(夹)的媒体资源类型。
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
     * 以同步方法从某个目录，基于过滤器，获取下一级符合条件的文件(夹)信息的迭代器对象FileIterator，然后通过[next]{@link fileAccess.FileIterator.next}方法返回
     * [FileInfo]{@link fileAccess.FileInfo}。目前仅支持内置存储设备过滤，外置存储设备不支持过滤。
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
     * 以同步方法从某个目录，基于过滤器，递归获取符合条件的文件信息的迭代器对象FileIterator，然后通过[next]{@link fileAccess.FileIterator.next}方法返回
     * [FileInfo]{@link fileAccess.FileInfo}。目前仅支持内置存储设备。
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
   * 表示文件夹的迭代器对象。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  interface FileIterator {
    /**
     * 可以通过next同步方法获取下一级文件(夹)信息。
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
   * 表示设备的根属性信息和接口能力。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  interface RootInfo {
    /**
     * 设备支持的能力。
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
     * 设备支持的能力。
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
     * 根目录的相对路径。
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
     * 设备支持的能力。
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
     * 设备支持的能力。
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
     * 以同步方法从某个目录，基于过滤器，获取下一级符合条件的文件(夹)信息的迭代器对象FileIterator，然后通过[next]{@link fileAccess.FileIterator.next}方法返回
     * [FileInfo]{@link fileAccess.FileInfo}。目前仅支持内置存储设备过滤，外置存储设备不支持过滤。
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
     * 以同步方法从某设备根节点开始，基于过滤器，递归获取符合条件的文件信息的迭代器对象FileIterator，然后通过[next]{@link fileAccess.FileIterator.next}方法返回
     * [FileInfo]{@link fileAccess.FileInfo}。目前仅支持内置存储设备。
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
   * 表示设备根目录的迭代器对象。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  interface RootIterator {
    /**
     * 通过next同步方法获取下一级设备根目录。
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
   * 表示复制操作失败时的返回信息，复制成功时则没有返回信息。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamiconly
   * @deprecated since 23
   */
  interface CopyResult {
    /**
     * 源文件(夹) uri。
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
     * 产生冲突的目标文件的 uri。如果非冲突导致的错误，则为空。
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
     * 错误码。
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
     * 错误信息。
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
   * 枚举，目前支持的文件打开的标志位。
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
     * 读模式。
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
     * 写模式。
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
     * 读写模式。
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
   * 枚举，通知类型。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamiconly
   * @deprecated since 23
   */
  enum NotifyType {
    /**
     * 表示新增文件（详见registerObserver接口的示例2、示例3）。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    NOTIFY_ADD = 0,

    /**
     * 表示删除文件（详见unregisterObserver(uri: string, callback: Callback<NotifyMessage>)接口的示例1、示例2）。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    NOTIFY_DELETE = 1,

    /**
     * 表示移动至该文件（对目录下子文件或目录执行rename操作，或外部文件或目录执行move操作到本文件。详见registerObserver接口的示例1，及unregisterObserver(uri: string)接口的示例
     * 1）。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    NOTIFY_MOVED_TO = 2,

    /**
     * 表示自该文件移出（对目录下子文件或目录执行rename操作，或子文件（夹）执行move操作从该文件夹内移出。详见registerObserver接口的示例1，及unregisterObserver(uri: string)接口
     * 的示例1）。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    NOTIFY_MOVED_FROM = 3,

    /**
     * 表示本文件被移动（如对文件或文件夹执行rename或move操作时，监听该文件（夹）的callback收到该事件，详见registerObserver接口的示例1）。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    NOTIFY_MOVE_SELF = 4,

    /**
     * 表示设备上线。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 11 dynamiconly
     * @deprecated since 23
     */
    NOTIFY_DEVICE_ONLINE = 5,

    /**
     * 表示设备下线。
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
   * 通知回调函数的值。
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
     * 变更的通知类型。
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
     * 所变更文件的uri集合，目前仅支持单条通知，后序支持多条通知。
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
   * 表示移动操作失败时的返回信息，移动成功时则没有返回信息。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamiconly
   * @deprecated since 23
   */
  interface MoveResult {
    /**
     * 源文件(夹) uri。
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
     * 产生冲突的目标文件的 uri。如果非冲突导致的错误，则为空。
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
     * 错误码。接口抛出错误码的详细介绍请参见[文件管理错误码](docroot://reference/apis-core-file-kit/errorcode-filemanagement.md)。
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
     * 错误信息。
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
   * 监听设备上线，下线通知，作为注册监听的URI。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 11 dynamiconly
   * @deprecated since 23
   */
  const DEVICES_URI = 'file://docs';

  /**
   * FileAccessHelper对象。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 23
   */
  interface FileAccessHelper {
    /**
     * 以异步方法打开文件，返回文件描述符。使用Promise异步回调。
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
     * 以异步方法打开文件，返回文件描述符。使用callback异步回调。
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
     * 以异步方法创建文件到指定目录，返回新文件uri。使用Promise异步回调。
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
     * 以异步方法创建文件到指定目录，返回新文件uri。使用callback异步回调。
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
     * 以异步方法创建文件夹到指定目录，返回文件夹uri。使用Promise异步回调。
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
     * 以异步方法创建文件夹到指定目录，返回文件夹uri。使用callback异步回调。
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
     * 以异步方法删除文件(夹)，返回错误码。使用Promise异步回调。
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
     * 以异步方法删除文件(夹)，返回错误码。使用callback异步回调。
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
     * 以异步方法移动文件(夹)，返回移动后文件(夹)的uri。使用Promise异步回调。目前仅支持设备内移动，跨设备不支持移动。
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceFile Indicates the file or directory to be moved.
     * @param { string } destFile Represents the destination folder.
     * @returns { Promise<string> } 新路径下的文件(夹)的uri。
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
     * 以异步方法移动文件(夹)，返回移动后文件(夹)的uri。使用callback异步回调。目前仅支持设备内移动，跨设备不支持移动。
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
     * 复制文件或目录，使用 Promise 异步回调。
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - 待拷贝的源文件(夹)的 uri。例如：file://docs/storage/Users/currentUser/Download/1.txt。
     * @param { string } destUri - 目标文件夹的 uri。例如：file://docs/storage/Users/currentUser/Download/test。
     * @param { boolean } force - 含有同名文件时是否强制覆盖文件。force 为 true 时强制覆盖文件；force 为空或 false 时不强制覆盖文件。该参数不填，默认为false。
     * @returns { Promise<Array<CopyResult>> } 返回 copyresult 数组。copyResult 为复制操作失败的返回信息；复制成功无返回信息。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.copy(srcUri: string, destUri: string, options?: CopyOptions)
     */
    copy(sourceUri: string, destUri: string, force?: boolean): Promise<Array<CopyResult>>;

    /**
     * 复制文件或目录，使用 callback 异步回调。
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - 待拷贝的源文件(夹)的 uri。例如：file://docs/storage/Users/currentUser/Download/1.txt。
     * @param { string } destUri - 目标文件夹的 uri。例如：file://docs/storage/Users/currentUser/Download/test。
     * @param { AsyncCallback<Array<CopyResult>> } callback - 返回 copyresult 数组。copyResult 为复制操作失败的返回信息；复制成功无返回信息。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.copy(srcUri: string, destUri: string, callback: AsyncCallback<void>)
     */
    copy(sourceUri: string, destUri: string, callback: AsyncCallback<Array<CopyResult>>): void;

    /**
     * 复制文件或目录，含有同名文件时可以选择是否强制覆盖原文件，使用 callback 异步回调。
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - 待拷贝的源文件(夹)的 uri。例如：file://docs/storage/Users/currentUser/Download/1.txt。
     * @param { string } destUri - 目标文件夹的 uri。例如：file://docs/storage/Users/currentUser/Download/test。
     * @param { boolean } force - 含有同名文件时是否强制覆盖原文件。force 为 true 时强制覆盖原文件；force 为空或 false 时不覆盖原文件。
     * @param { AsyncCallback<Array<CopyResult>> } callback - 返回 copyresult 数组。copyResult 为复制操作失败的返回信息；复制成功无返回信息。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.copy(srcUri: string, destUri: string, options: CopyOptions, callback: AsyncCallback<void>)
     */
    copy(sourceUri: string, destUri: string, force: boolean, callback: AsyncCallback<Array<CopyResult>>): void;

    /**
     * 复制文件并传入备用文件名，使用Promise异步回调。
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - 待拷贝的源文件(夹)的 uri。例如：file://docs/storage/Users/currentUser/Download/1.txt。
     * @param { string } destUri - 目标文件夹的 uri。例如：file://docs/storage/Users/currentUser/Download/test。
     * @param { string } fileName - 如果目标目录中有1.txt文件，就是用fileName 作为文件名进行复制。
     * @returns { Promise<string> } 返回一个复制成功的文件的uri。
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
     * 复制文件并传入备用文件名，使用callback异步回调。
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - 待拷贝的源文件(夹)的 uri。例如：file://docs/storage/Users/currentUser/Download/1.txt。
     * @param { string } destUri - 目标文件夹的 uri。例如：file://docs/storage/Users/currentUser/Download/test。
     * @param { string } fileName - 如果目标目录中有1.txt文件。就是用fileName 作为文件名进行复制。
     * @param { AsyncCallback<string> } callback - 返回一个复制成功的文件的uri。
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
     * 以异步方法重命名文件(夹)，返回重命名后的文件(夹)的Uri。使用Promise异步回调。
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
     * 以异步方法重命名文件(夹)，返回重命名后的文件(夹)的Uri。使用callback异步回调。
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
     * 以异步方法判断文件(夹)是否存在。使用Promise异步回调。
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
     * 以异步方法判断文件(夹)是否存在。使用callback异步回调。
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
     * 通过uri查询文件或目录的相关信息，使用Promise异步回调。
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri - 所选文件或目录的uri（从[FileInfo]{@link fileAccess.FileInfo}中获取）。
     * @param { string } metaJson - json字符串，包含查询属性[FILEKEY]{@link fileAccess.FileKey} 。
     * @returns { Promise<string> } 返回json字符串，包括查询属性和值。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.stat(file: string | number)
     */
    query(uri: string, metaJson: string) : Promise<string>;

    /**
     * 通过uri查询文件或目录的相关信息，使用callback异步回调。
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri - 所选文件或目录的uri（从[FileInfo]{@link fileAccess.FileInfo}中获取）。
     * @param { string } metaJson - json字符串，包含查询属性[FILEKEY]{@link fileAccess.FileKey}。
     * @param { AsyncCallback<string> } callback - 返回json字符串，包括查询属性和值。
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.stat(file: string | number, callback: AsyncCallback<Stat>)
     */
    query(uri: string, metaJson: string, callback: AsyncCallback<string>) : void;

    /**
     * 以异步方法获取uri对应的FileInfo对象。使用promise异步回调。
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
     * 以异步方法获取uri对应的FileInfo对象。使用callback异步回调。
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
     * 以异步方法获取relativePath对应的FileInfo对象。使用promise异步回调。
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
     * 以异步方法获取relativePath对应的FileInfo对象。使用callback异步回调。
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
     * 以异步方法获取helper对象连接的文件管理服务类的设备根节点信息。使用Promise异步回调。
     * 该方法返回迭代器对象RootIterator，然后通过[next]{@link fileAccess.FileIterator.next}方法返回[RootInfo]{@link fileAccess.RootInfo}。
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
     * 以异步方法获取helper对象连接的文件管理服务类的设备根节点信息。使用callback异步回调。
     * callback带回迭代器对象RootIterator，然后通过[next]{@link fileAccess.FileIterator.next}方法返回
     * [RootInfo]{@link fileAccess.RootInfo}。
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
     * 注册指定uri的callback。uri与callback可以为多对多的关系，推荐使用一个callback监听一个uri。
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri - 文件或目录的uri。
     * @param { boolean } notifyForDescendants - 监听目录时，是否监听子文件变化。true为监听；false为不监听。
     * @param { Callback<NotifyMessage> } callback - 返回通知信息。
     * @throws { BusinessError } 14300002 - Invalid uri
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     * @useinstead @ohos.file.fs:fileIo.createWatcher
     */
    registerObserver(uri: string, notifyForDescendants: boolean, callback: Callback<NotifyMessage>): void;

    /**
     * 取消注册指定的uri和callback。
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } uri - 文件或目录的uri。
     * @param { Callback<NotifyMessage> } callback - 解注册uri下对应的callback。如果该参数不填，则解注册对应的所有callbackback。
     * @throws { BusinessError } 14300002 - Invalid uri
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    unregisterObserver(uri: string, callback?: Callback<NotifyMessage>): void;

    /**
     * 以异步方法移动文件(夹)，返回移动后文件(夹)的uri。使用Promise异步回调。
     * 当存在同名文件时，可以选择强制覆盖文件。
     * 目前仅支持设备内移动，跨设备不支持移动。
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - 待移动的源文件(夹)的uri。
     * @param { string } destUri - 目标文件夹的uri。
     * @param { boolean } [force] - 选择当存在同名文件时，是否强制覆盖文件。当force为true时，强制覆盖文件；为false时不强制覆盖文件。该参数不填，默认为false。
     * @returns { Promise<Array<MoveResult>> } 返回 moveresult 数组。moveResult 为移动操作失败的返回信息；复制成功无返回信息。
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
     * 以异步方法移动文件(夹)，返回移动后文件(夹)的uri。使用callback异步回调。
     * 当前仅支持设备内移动，不支持跨设备移动。
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - 待移动的源文件(夹)的uri。
     * @param { string } destUri - 目标文件夹的uri。
     * @param { AsyncCallback<Array<MoveResult>> } callback - 回调返回MoveResult数组。MoveResult为移动操作失败的返回信息；移动成功无返回信息。
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
     * 以异步方法移动文件(夹)，返回移动后文件(夹)的uri。使用callback异步回调。
     * 当存在同名文件时，可以选择强制覆盖文件。
     * 当前仅支持设备内移动，不支持跨设备移动。
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - 待移动的源文件(夹)的uri。
     * @param { string } destUri - 目标文件夹的uri。
     * @param { boolean } force - 选择当存在同名文件时，是否强制覆盖文件。当force为true时，强制覆盖文件；为false时不强制覆盖文件。该参数不填，默认为false。
     * @param { AsyncCallback<Array<MoveResult>> } callback - 回调返回MoveResult数组。MoveResult为移动操作失败的返回信息；移动成功无返回信息。
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
     * 以异步方法移动文件，返回移动后文件的uri。使用Promise异步回调。
     * 当存在同名文件时（即发生文件移动冲突时），可以重命名待移动的文件，再保存到目标文件夹。
     * 目前仅支持设备内移动，跨设备不支持移动。
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - 待移动源文件的uri。
     * @param { string } destUri - 目标文件夹的uri。
     * @param { string } fileName - 冲突文件的新名称。
     * @returns { Promise<string> } 新路径下的文件uri。
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
     * 以异步方法移动文件，返回移动后文件的uri。使用callback异步回调。
     * 当存在同名文件时（即发生文件移动冲突时），可以重命名待移动的文件，再保存到目标文件夹。
     * 当前仅支持设备内移动，不支持跨设备移动。
     *
     * @permission ohos.permission.FILE_ACCESS_MANAGER
     * @param { string } sourceUri - 待移动的源文件的uri。
     * @param { string } destUri - 目标文件夹的uri。
     * @param { string } fileName - 冲突文件的新名称。
     * @param { AsyncCallback<string> } callback - 新路径下的文件uri。
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
