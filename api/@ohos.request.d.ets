/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';
import { Callback } from './@ohos.base';
import BaseContext from './application/BaseContext';

/**
 * upload and download
 *
 * @namespace request
 * @syscap SystemCapability.Request.FileTransferAgent
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare namespace request {
  /**
   * The request agent api.
   * Supports "background" and "frontend" tasks as while.
   * Though "background" and "frontend" here do not the same with process's concept.
   * All tasks will be executed at request manager service and recorded.
   * Background tasks is for concurrent transfer, such as caching videos for a later play.
   * Frontend tasks is for instant transfer, such as submitting forms for a consumption bill.
   * Background tasks use notification to tell user tasks' status information.
   * Frontend tasks use callback to tell caller tasks' status information.
   * Background has some automatically restore mechanism.
   * Frontend tasks controlled by caller.
   * Uses `multipart/form-data` in client request for upload.
   * A `Content-Disposition: attachment; filename=<filename>` response from server leads to download.
   * More details, please see the architecture documents of the request subsystem.
   * Only front-end mode is supported in cross-platform scenarios.
   *
   * @namespace agent
   * @syscap SystemCapability.Request.FileTransferAgent
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  namespace agent {
    /**
     * The action options.
     *
     * @enum { number } Action
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enum Action {
      /**
       * Indicates download task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      DOWNLOAD,
      /**
       * Indicates upload task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      UPLOAD
    }

    /**
     * The mode options.
     *
     * @enum { number } Mode
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enum Mode {
      /**
       * Indicates background task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20
       */
      /**
       * Indicates background task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice
       * @since 20
       */
      BACKGROUND,
      /**
       * Indicates foreground task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20
       */
      /**
       * Indicates foreground task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      FOREGROUND
    }

    /**
     * The network options.
     *
     * @enum { number } Network
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enum Network {
      /**
       * Indicates no restriction on network type.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      ANY,
      /**
       * Indicates Wi-Fi only.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      WIFI,
      /**
       * Indicates cellular only.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      CELLULAR
    }

    /**
     * Broadcast events for the request.
     *
     * @enum { string } BroadcastEvent
     * @syscap SystemCapability.Request.FileTransferAgent
     * @since 20
     */
    enum BroadcastEvent {
      /**
       * Completion event for the task.
       * The code in the commonEventData can only be "0x40"(COMPLETE) or "0x41"(FAILED), same as "State".
       * The data in the commonEventData contains the id of the task.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20
       */
      COMPLETE = 'ohos.request.event.COMPLETE'
    }

    /**
     * The file information for a form item.
     *
     * @typedef FileSpec
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    interface FileSpec {
      /**
       * The path to save the uploaded file.
       * Currently support:
       * 1: relative path, like "./xxx/yyy/zzz.html", "xxx/yyy/zzz.html", under caller's cache folder.
       * 2: internal protocol path, starting with "internal://", like "internal://cache/path/to/file.txt".
       * 3: application storage path, only the base directory and its subdirectories are supported, like "/data/storage/el1/base/path/to/file.txt".
       * 4: file protocol path with self bundle name, only the base directory and its subdirectories are supported, like "file://com.example.test/data/storage/el2/base/file.txt".
       * 5: user file url, like "file://media/Photo/path/to/file.png".
       *
       * @type { string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      path: string;
      /**
       * The MIME type of the file.
       * The default is obtained by the suffix of the filename.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      mimeType?: string;
      /**
       * The filename, the default is obtained by path.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      filename?: string;
      /**
       * The extras for the file information.
       *
       * @type { ?object }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      extras?: object;
    }

    /**
     * The form item information for a task.
     *
     * @typedef FormItem
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    interface FormItem {
      /**
       * The item's name.
       *
       * @type { string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      name: string;
      /**
       * The item's value.
       *
       * @type { string | FileSpec | Array<FileSpec> }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      value: string | FileSpec | Array<FileSpec>;
    }

    /**
     * The configurations for a task.
     * Using a flexible configuration for clear upload and download functions.
     * If without emphasis, an option is for any task.
     *
     * @typedef Config
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    interface Config {
      /**
       * The task action, upload or download.
       *
       * @type { Action }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      action: Action;
      /**
       * The Universal Resource Locator for a task.
       * The maximum length is 2048 characters.
       * Using raw `url` option, even url parameters in it.
       *
       * @type { string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      url: string;
      /**
       * The title for a task, give a meaningful title please.
       * The maximum length is 256 characters.
       * The default is upload or download, consistent with its action.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      title?: string;
      /**
       * The details for a task.
       * The maximum length is 1024 characters.
       * The default is empty string.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      description?: string;
      /**
       * Indicates task's mode.
       * The default is BACKGROUND.
       * For frontend task, it has callbacks.
       * For background task, it has notifications and fallback.
       * The cross-platform default is FOREGROUND.
       *
       * @type { ?Mode }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */

      mode?: Mode;
      /**
       * The solution choice when path already exists during download.
       * The default is false.
       * Currently support:
       * true, rewrite the existed file.
       * false, go to fail.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      overwrite?: boolean;
      /**
       * The HTTP standard method for upload or download: GET/POST/PUT.
       * Case insensitive.
       * For upload, use PUT/POST, the default is PUT.
       * For download, use GET/POST, the default is GET.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      method?: string;
      /**
       * The HTTP headers.
       * For upload request, the `Content-Type` is forced to `multipart/form-data`.
       * For download request, the default `Content-Type` is `application/json`.
       *
       * @type { ?object }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      headers?: object;
      /**
       * The arguments, it can be any text, uses json usually.
       * For download, it can be raw string, the default is empty string.
       * For upload, it can be form items, the default is a empty form.
       * there must be one `FileSpec` item at least or will be a parameter error.
       *
       * @type { ?(string | Array<FormItem>) }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      data?: string | Array<FormItem>;
      /**
       * The path to save the downloaded file, the default is "./".
       * Currently support:
       * 1: relative path, like "./xxx/yyy/zzz.html", "xxx/yyy/zzz.html", under caller's cache folder.
       * 2: internal protocol path, starting with "internal://", like "internal://cache/path/to/file.txt".
       * 3: application storage path, only the base directory and its subdirectories are supported, like "/data/storage/el1/base/path/to/file.txt".
       * 4: file protocol path with self bundle name, only the base directory and its subdirectories are supported, like "file://com.example.test/data/storage/el2/base/file.txt".
       *
       * @type { ?string }
       * @default ./
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      saveas?: string;
      /**
       * The network.
       *
       * @type { ?Network }
       * @default Network.ANY
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      network?: Network;
      /**
       * Allows work in metered network or not.
       * The default is false.
       *
       * @type { ?boolean }
       * @default false
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      metered?: boolean;
      /**
       * Allows work in roaming network or not.
       * The default is true.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      roaming?: boolean;
      /**
       * Enable automatic retry or not for the background task.
       * The frontend task is always fast-fail.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice
       * @since 20
       */
      retry?: boolean;
      /**
       * Allows redirect or not.
       * The default is true.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      redirect?: boolean;
      /**
       * The proxy url for the task.
       * Only this format is supported: http://<domain or IP-address>:<port>
       * Username and password are not supported.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20
       */
      proxy?: string;
      /**
       * The index of paths for a task.
       * Usually used for a continuous job.
       * The default is 0.
       *
       * @type { ?number }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      index?: number;
      /**
       * The start point of a file.
       * Usually used for a continuous job.
       * It will set the "Range" header in download.
       * It will start read at the point in upload.
       * The default is 0.
       *
       * @type { ?number }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      begins?: number;
      /**
       * The end point of a file.
       * Usually used for a continuous job.
       * It will set The "Range" header in download.
       * It will end read at the point in upload.
       * The default is -1 indicating the end of the data for upload or download.
       *
       * @type { ?number }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      ends?: number;
      /**
       * The policy of the progress notification for background task.
       * If false: only completed or failed notification, the default.
       * If true, emits every progress, completed or failed notifications.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice
       * @since 20
       */
      gauge?: boolean;
      /**
       * Breaks when fail to fetch filesize before upload/download or not.
       * Uses filesize for a precise gauge.
       * The default is false, set size as -1 indicating the case.
       *
       * @type { ?boolean }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      precise?: boolean;
      /**
       * For in-application layer isolation.
       * If given:
       *   the minimum is 8 bytes.
       *   the maximum is 2048 bytes.
       * Creates a task with token, then must provide it during normal query.
       * So saves the token carefully, it can not be retrieved by query.
       * Or leave it empty.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      token?: string;
      /**
       * The priority of this task.
       * Front-end tasks have higher priority than back-end tasks.
       * In tasks of the same mode, the smaller the number, the higher the priority.
       * The default is 0.
       *
       * @type { ?number }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20
       */
      priority?: number;
      /**
       * The extras for the configuration.
       *
       * @type { ?object }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      extras?: object;
    }

    /**
     * Indicate the current state of the task.
     *
     * @enum { number } State
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enum State {
      /**
       * Indicates a task created by `new Task(Config)`.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      INITIALIZED = 0x00,
      /**
       * Indicates a task lack of resources or conditions to run or retry.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      WAITING = 0x10,
      /**
       * Indicates a task in processing now.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      RUNNING = 0x20,
      /**
       * Indicates a task failed once at least and in processing again now.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      RETRYING = 0x21,
      /**
       * Indicates a paused task which tends to be resumed for continuous work.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      PAUSED = 0x30,
      /**
       * Indicates a stopped task which must be started again.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      STOPPED = 0x31,
      /**
       * Indicates a completed task which finish its data transfer.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      COMPLETED = 0x40,
      /**
       * Indicates a failed task which interrupted by some error.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      FAILED = 0x41,
      /**
       * Indicates a removed task which can not be processed again.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      REMOVED = 0x50
    }

    /**
     * The progress data structure.
     * Upload allows multiple files per upload task.
     * Only one file in a download task.
     * So using a unified data structure for progress.
     * Generally:
     * 1: sum(sizes) is total files size of the task.
     * 2: float(processed)/sizes[counter] is the progress for the current processing file.
     * 3: float(sum(sizes[:index])+processed)/sum(sizes) is the summary progress for a task.
     * If fetch file size in failure, the size of the file in sizes will be set as -1.
     *
     * @typedef Progress
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    interface Progress {
      /**
       * The current state of the task.
       *
       * @type { State }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      readonly state: State;
      /**
       * The current processing file index in a task.
       *
       * @type { number }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      readonly index: number;
      /**
       * The processed data size for the current file in a task.
       *
       * @type { number }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      readonly processed: number;
      /**
       * The sizes of files in a task.
       *
       * @type { Array<number> }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      readonly sizes: Array<number>;
      /**
       * The extras for an interaction.
       * Such as headers and body of response from server.
       * But when the Content-Disposition header responded, the body will be into the uri of its attachment only, the body here is empty.
       * {"headers": {"key": v}, "body": "contents"}.
       * The "body" field is not supported in cross-platform scenarios.
       *
       * @type { ?object }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      readonly extras?: object;
    }

    /**
     * Indicates the reason for the failure.
     *
     * @enum { number }
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enum Faults {
      /**
       * Indicates others failure.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      OTHERS = 0xFF,
      /**
       * Indicates network disconnection.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      DISCONNECTED = 0x00,
      /**
       * Indicates task timeout.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      TIMEOUT = 0x10,
      /**
       * Indicates protocol error, such as 5xx response from server.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      PROTOCOL = 0x20,
      /**
       * Indicates parameter error, such as url format error.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      PARAM = 0x30,
      /**
       * Indicates filesystem io error, such as open/seek/read/write/close.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      FSIO = 0x40,
      /**
       * Indicates DNS resolution error.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      DNS = 0x50,
      /**
       * Indicates TCP connection error.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      TCP = 0x60,
      /**
       * Indicates SSL connection error, such as a certificate error or certificate verification failure.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      SSL = 0x70,
      /**
       * Indicates redirect error.
       *
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      REDIRECT = 0x80
    }

    /**
     * The task information data structure for query results.
     * Provides common query and advanced query, visible range of fields is different.
     *
     * @typedef TaskInfo
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @since 20
     */
    interface TaskInfo {
      /**
       * The UID of an application.
       * For system query only.
       *
       * @type { ?string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @systemapi Hide this for inner system use.
       * @since 20
       */
      readonly uid?: string;
      /**
       * The bundle name.
       * For system query only.
       *
       * @type { ?string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @systemapi Hide this for inner system use.
       * @since 20
       */
      readonly bundle?: string;
      /**
       * The path to save the downloaded file.
       *
       * @type { ?string }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20
       */
      /**
       * The path to save the downloaded file.
       *
       * @type { ?string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20
       */
      readonly saveas?: string;
      /**
       * The url of a task.
       * For `${ show }` and `${ touch }`.
       * It is empty string in `${ query }`.
       *
       * @type { ?string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20
       */
      /**
       * The url of a task.
       * For `${ show }` and `${ touch }`.
       *
       * @type { ?string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20
       */
      readonly url?: string;
      /**
       * The arguments.
       * For `${ show }` and `${ touch }`.
       * It is empty string in `${ query }`.
       *
       * @type { ?(string | Array<FormItem>) }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20
       */
      /**
       * The arguments.
       * For `${ show }` and `${ touch }`.
       *
       * @type { ?(string | Array<FormItem>) }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20
       */
      readonly data?: string | Array<FormItem>;
      /**
       * The task id.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20
       */
      /**
       * The task id.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20
       */
      readonly tid: string;
      /**
       * The task title.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20
       */
      /**
       * The task title.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20
       */
      readonly title: string;
      /**
       * The task details.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20
       */
      /**
       * The task details.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20
       */
      readonly description: string;
      /**
       * The task action.
       *
       * @type { Action }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20
       */
      /**
       * The task action.
       *
       * @type { Action }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20
       */
      readonly action: Action;
      /**
       * Specify task mode.
       * The default is frontend and background.
       *
       * @type { Mode }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20
       */
      /**
       * Specify task mode.
       * The default is frontend.
       *
       * @type { Mode }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20
       */
      readonly mode: Mode;
      /**
       * The priority of this task.
       * Front-end tasks have higher priority than back-end tasks.
       * In tasks of the same mode, the smaller the number, the higher the priority.
       * The default is 0.
       *
       * @type { number }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20
       */
      readonly priority: number;
      /**
       * The MIME type in the configuration of the task.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20
       */
      readonly mimeType: string;
      /**
       * An instance of `Progress` for a task.
       *
       * @type { Progress }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20
       */
      readonly progress: Progress;
      /**
       * The progress notification policy of a background task.
       *
       * @type { boolean }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20
       */
      readonly gauge: boolean;
      /**
       * The creating date and time of a task in Unix timestamp.
       * It is generated by system of current device.
       *
       * @type { number }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20
       */
      readonly ctime: number;
      /**
       * The modified date and time of a task in Unix timestamp.
       * It is generated by system of current device.
       *
       * @type { number }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20
       */
      readonly mtime: number;
      /**
       * The retry switch of a task.
       * Just for background, frontend always disabled.
       *
       * @type { boolean }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20
       */
      readonly retry: boolean;
      /**
       * The tried times of a task.
       *
       * @type { number }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @since 20
       */
      readonly tries: number;
      /**
       * The faults case of a task.
       *
       * @type { Faults }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20
       */
      readonly faults: Faults;
      /**
       * The reason of a waiting/failed/stopped/paused task.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20
       */
      readonly reason: string;
      /**
       * The extras of a task.
       * For frontend, nothing now.
       *
       * @type { ?object }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @since 20
       */
      readonly extras?: object;
    }

    /**
     * The HTTP response.
     *
     * @interface HttpResponse
     * @syscap SystemCapability.Request.FileTransferAgent
     * @atomicservice
     * @since 20
     */
    interface HttpResponse {
      /**
       * The version of the HTTP response.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice
       * @since 20
       */
      readonly version: string,
      /**
       * The status code of the HTTP response.
       *
       * @type { number }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice
       * @since 20
       */
      readonly statusCode: number,
      /**
       * The reason of the HTTP response.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice
       * @since 20
       */
      readonly reason: string,
      /**
       * The headers of the HTTP response.
       *
       * @type { Map<string, Array<string>> }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @atomicservice
       * @since 20
       */
      readonly headers: Map<string, Array<string>>,
    }

    /**
     * The task entry.
     * New task' status is "initialized" and enqueue.
     * Can `start` a initialized task.
     * Can `pause` a waiting/running/retrying background task.
     * Can `resume` a paused background task.
     * Can `stop` a running/waiting/retrying task and dequeue it.
     *
     * @typedef Task
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    interface Task {
      /**
       * The task id, unique on system.
       * Generated automatically by system.
       *
       * @type { string }
       * @readonly
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      readonly tid: string;
      /**
       * The configurations for the task.
       *
       * @type { Config }
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      config: Config;
      /**
       * Starts the task. The following tasks can be started:
       * 1. Tasks just created.
       * 2. Download tasks that are stopped or become FAILED.
       *
       * @permission ohos.permission.INTERNET
       * @param { AsyncCallback<void> } callback callback function with a boolean argument indicating the calling result.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - task service ability error.
       * @throws { BusinessError } 21900007 - task state error.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      start(callback: AsyncCallback<void>): void;
      /**
       * Starts the task. The following tasks can be started:
       * 1. Tasks just created.
       * 2. Download tasks that are stopped or become FAILED.
       *
       * @permission ohos.permission.INTERNET
       * @returns { Promise<void> } the promise returned by the function.
       * @throws { BusinessError } 201 - Permission denied.
       * @throws { BusinessError } 13400003 - task service ability error.
       * @throws { BusinessError } 21900007 - task state error.
       * @syscap SystemCapability.Request.FileTransferAgent
       * @crossplatform
       * @atomicservice
       * @since 20
       */
      start(): Promise<void>;
    }

    /**
     * Creates a task for upload or download and enqueue it.
     * When an application enters the background, the frontend tasks associated.
     * with it will gradually be paused until the application returns to the foreground. 
     *
     * @permission ohos.permission.INTERNET
     * @param { BaseContext } context context of the caller.
     * @param { Config } config configurations for a task.
     * @param { AsyncCallback<Task> } callback indicate the callback function to receive Task.
     * @throws { BusinessError } 201 - permission denied.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @throws { BusinessError } 13400001 - file operation error.
     * @throws { BusinessError } 13400003 - task service ability error.
     * @throws { BusinessError } 21900004 - the application task queue is full.
     * @throws { BusinessError } 21900005 - task mode error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    function create(context: BaseContext, config: Config, callback: AsyncCallback<Task>): void;

    /**
     * Creates a task for upload or download and enqueue it.
     * When an application enters the background, the frontend tasks associated.
     * with it will gradually be paused until the application returns to the foreground.
     *
     * @permission ohos.permission.INTERNET
     * @param { BaseContext } context context of the caller.
     * @param { Config } config configurations for a task.
     * @returns { Promise<Task> } the promise returned by the function.
     * @throws { BusinessError } 201 - permission denied.
     * @throws { BusinessError } 401 - parameter error. Possible causes: 1. Missing mandatory parameters.
     * <br>2. Incorrect parameter type. 3. Parameter verification failed.
     * @throws { BusinessError } 13400001 - file operation error.
     * @throws { BusinessError } 13400003 - task service ability error.
     * @throws { BusinessError } 21900004 - the application task queue is full.
     * @throws { BusinessError } 21900005 - task mode error.
     * @syscap SystemCapability.Request.FileTransferAgent
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    function create(context: BaseContext, config: Config): Promise<Task>;
  }
}

export default request;
