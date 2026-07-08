/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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
 * system.request部件主要给应用提供上传下载文件的基础能力。
 * 
 * > **说明：**
 * >
 * > - 从API Version 9开始所有接口不再维护，推荐使用新接口[@ohos.request]{@link @ohos.request:request}。
 *
 * @file 上传下载
 * @kit BasicServicesKit
 */

/**
 *
 * @syscap SystemCapability.MiscServices.Upload
 * @since 3 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.request:request.UploadConfig
 */
export interface UploadResponse {
  /**
   * 服务器返回的HTTP状态码。
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.HttpResponse.statusCode
   */
  code: number;

  /**
   * 服务器返回的内容。根据返回头内容中的type决定该值的类型。
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Progress.extras
   */
  data: string;

  /**
   * 服务器返回的返回头内容。
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.HttpResponse.headers
   */
  headers: Object;
}

/**
 *
 * @syscap SystemCapability.MiscServices.Download
 * @since 3 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.request:request.UploadConfig
 */
export interface DownloadResponse {
  /**
   * 表示下载的token，获取下载状态的依据。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Task.tid
   */
  token: string;
}

/**
 *
 * @syscap SystemCapability.MiscServices.Download
 * @since 3 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.request.agent.Task.on
 */
export interface OnDownloadCompleteResponse {
  /**
   * 表示下载文件的uri。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Task.config.saveas
   */
  uri: string;
}

/**
 *
 * @syscap SystemCapability.MiscServices.Upload
 * @since 3 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.request:request.File
 */
export interface RequestFile {
  /**
   * multipart 提交时，请求头中的文件名。
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.FileSpec.filename
   */
  filename?: string;

  /**
   * multipart 提交时，表单项目的名称，缺省为file。
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.FormItem.name
   */
  name?: string;

  /**
   * 文件的本地存储路径。
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.FileSpec.path
   */
  uri: string;

  /**
   * 文件的内容类型，默认根据文件名或路径的后缀获取。
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.FileSpec.contentType
   */
  type?: string;
}

/**
 *
 * @syscap SystemCapability.MiscServices.Upload
 * @since 3 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.request:request.RequestData
 */
export interface RequestData {
  /**
   * 表示form 元素的名称。
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.FormItem.name
   */
  name: string;

  /**
   * 表示form 元素的值。
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.FormItem.value
   */
  value: string;
}

/**
 *
 * @syscap SystemCapability.MiscServices.Upload
 * @since 3 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.request:request.UploadConfig
 */
export interface UploadRequestOptions {
  /**
   * Resource URL.
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Config.url
   */
  url: string;

  /**
   * Form data in the request body.
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Config.data
   */
  data?: Array<RequestData>;

  /**
   * List of files to upload, which is submitted through multipart/form-data.
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Config.data
   */
  files: Array<RequestFile>;

  /**
   * Request header.
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Config.headers
   */
  header?: Object;

  /**
   * Request methods available: POST and PUT. The default value is POST.
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Config.method
   */
  method?: string;

  /**
   * Called when the files are uploaded successfully.
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Task.on
   */
  success?: (data: UploadResponse) => void;

  /**
   * Called when uploading fails.
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Task.on
   */
  fail?: (data: any, code: number) => void;

  /**
   * Called when the execution is completed.
   *
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Task.on
   */
  complete?: () => void;
}

/**
 *
 * @syscap SystemCapability.MiscServices.Download
 * @since 3 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.request:request.UploadConfig
 */
export interface DownloadRequestOptions {
  /**
   * Resource URL.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Config.url
   */
  url: string;

  /**
   * Name of the file to downloaded.
   * The value is obtained from the current request or resource URL by default.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Config.saveas
   */
  filename?: string;

  /**
   * Request header.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Config.headers
   */
  header?: string;

  /**
   * Download description.
   * The default value is the file name.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Config.description
   */
  description?: string;

  /**
   * Called when the files are successfully downloaded.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Task.on
   */
  success?: (data: DownloadResponse) => void;

  /**
   * Called when downloading fails.
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Task.on
   */
  fail?: (data: any, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Task.on
   */
  complete?: () => void;
}

/**
 *
 * @syscap SystemCapability.MiscServices.Download
 * @since 3 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.request.agent.Task.on
 */
export interface OnDownloadCompleteOptions {
  /**
   * download 接口返回的结果 token。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Task.tid
   */
  token: string;

  /**
   * 接口调用成功的回调函数。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Task.on
   */
  success?: (data: OnDownloadCompleteResponse) => void;

  /**
   * 接口调用失败的回调函数。返回header信息与HTTP状态码。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Task.on
   */
  fail?: (data: any, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.MiscServices.Download
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Task.on
   */
  complete?: () => void;
}

/**
 *
 * @syscap SystemCapability.MiscServices.Download
 * @since 3 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.request:request
 */
export default class Request {
  /**
   * 上传文件，无返回值。
   *
   * @param { UploadRequestOptions } options - 上传的配置信息。
   * @syscap SystemCapability.MiscServices.Upload
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.request:request.uploadFile(context: BaseContext, config: UploadConfig)
   */
  static upload(options: UploadRequestOptions): void;

  /**
   * 下载文件，无返回值。
   *
   * @param { DownloadRequestOptions } options - 下载的配置信息。
   * @syscap SystemCapability.MiscServices.Download
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.request:request.downloadFile(context: BaseContext, config: DownloadConfig)
   */
  static download(options: DownloadRequestOptions): void;

  /**
   * 获取下载任务状态，无返回值。
   *
   * @param { OnDownloadCompleteOptions } options - 监听下载任务的配置信息。
   * @syscap SystemCapability.MiscServices.Download
   * @since 3 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.request.agent.Task.show(id: string)
   */
  static onDownloadComplete(options: OnDownloadCompleteOptions): void;
}