/*
 * Copyright (c) 2020-2023 Huawei Device Co., Ltd.
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
 * @kit API10LessDeprecatedModules
 */

/**
 * 文件返回。包含文件的信息。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO.Lite
 * @since 3
 * @deprecated since 10
 * @reserved ["liteWearable"]
 */
export interface FileResponse {
  /**
   * 文件的URI。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  uri: string;

  /**
   * 文件长度，单位为Byte。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  length: number;

  /**
   * 文件保存时的时间戳，从1970/01/01?00:00:00到当前时间的毫秒数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  lastModifiedTime: number;

  /**
   * 文件类型，可选值为：
   * -dir：目录；
   * -file：文件。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  type: 'dir' | 'file';

  /**
   * 文件列表。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  subFiles?: Array<FileResponse>;
}

/**
 * 可选项类型，支持move接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO.Lite
 * @since 3
 * @deprecated since 10
 * @reserved ["liteWearable"]
 */
export interface FileMoveOption {
  /**
   * 要移动的文件的URI。由于轻量级穿戴设备底层文件系统的限制，该值必须满足以下要求：
   * 1、URI 中不得包含以下特殊字符：“\"*+,:;<=>?[]\
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  srcUri: string;

  /**
   * 文件要移动到的位置的URI。由于轻量级穿戴设备底层文件系统的限制，该值必须满足以下要求：
   * 1、URI 中不得包含以下特殊字符：\"*+,:;<=>?[]\
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  dstUri: string;

  /**
   * 接口调用成功的回调函数，返回文件要移动到的位置的URI。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  success?: (uri: string) => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 文件列表返回，包含文件列表信息。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO.Lite
 * @since 3
 * @deprecated since 10
 * @reserved ["liteWearable"]
 */
export interface FileListResponse {
  /**
   * 获取的文件列表，其中每个文件的信息的格式为：
   * {
   * uri:'file1',
   * lastModifiedTime:1589965924479,
   * length:10240,
   * type:?'file'
   * }
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  fileList: Array<FileResponse>;
}

/**
 * 可选项类型，支持list接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO.Lite
 * @since 3
 * @deprecated since 10
 * @reserved ["liteWearable"]
 */
export interface FileListOption {
  /**
   * 目录URI。由于轻量级穿戴设备底层文件系统的限制，该值必须满足以下要求：
   * 1、URI 中不得包含以下特殊字符：\"*+,:;<=>?[]\
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  uri: string;

  /**
   * 接口调用成功的回调函数。返回[FileListResponse]{@link FileListResponse}。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  success?: (data: FileListResponse) => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 可选项类型，支持copy接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO.Lite
 * @since 3
 * @deprecated since 10
 * @reserved ["liteWearable"]
 */
export interface FileCopyOption {
  /**
   * 要拷贝的文件的URI。由于轻量级穿戴设备底层文件系统的限制，该值必须满足以下要求：
   * 1、URI 中不得包含以下特殊字符：\"*+,:;<=>?[]\
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  srcUri: string;

  /**
   * 文件要移动到的位置的URI。由于轻量级穿戴设备底层文件系统的限制，该值必须满足以下要求：
   * 1、URI 中不得包含以下特殊字符：\"*+,:;<=>?[]\
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  dstUri: string;

  /**
   * 接口调用成功的回调函数，返回文件要移动到的位置的URI。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  success?: (uri: string) => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 可选项类型，支持get接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO.Lite
 * @since 3
 * @deprecated since 10
 * @reserved ["liteWearable"]
 */
export interface FileGetOption {
  /**
   * 文件的URI。由于轻量级穿戴设备底层文件系统的限制，该值必须满足以下要求：
   * 1、URI 中不得包含以下特殊字符：\"*+,:;<=>?[]\
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  uri: string;

  /**
   * 是否进行递归获取子目录文件列表，true为进行该操作，缺省为false。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  recursive?: boolean;

  /**
   * 接口调用成功的回调函数。 返回[FileResponse]{@link FileResponse}。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  success?: (file: FileResponse) => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 可选项类型，支持delete接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO.Lite
 * @since 3
 * @deprecated since 10
 * @reserved ["liteWearable"]
 */
export interface FileDeleteOption {
  /**
   * 删除文件的URI，不能是应用资源路径。由于轻量级穿戴设备底层文件系统的限制，该值必须满足以下要求：
   * 1、URI 中不得包含以下特殊字符：\"*+,:;<=>?[]\
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  uri: string;

  /**
   * 接口调用成功的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  success?: () => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 可选项类型，支持writeText接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO.Lite
 * @since 3
 * @deprecated since 10
 * @reserved ["liteWearable"]
 */
export interface FileWriteTextOption {
  /**
   * 本地文件URI，如果文件不存在会创建文件。由于轻量级穿戴设备底层文件系统的限制，该值必须满足以下要求：
   * 1、URI 中不得包含以下特殊字符：\"*+,:;<=>?[]\
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  uri: string;

  /**
   * 写入的字符串。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  text: string;

  /**
   * 编码格式，默认为UTF-8。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  encoding?: string;

  /**
   * 是否追加模式，默认为false。true为追加，false为不追加。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  append?: boolean;

  /**
   * 接口调用成功的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  success?: () => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 文本读取返回，包含读取到的文本内容。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO.Lite
 * @since 3
 * @deprecated since 10
 * @reserved ["liteWearable"]
 */
export interface FileReadTextResponse {
  /**
   * 获取的文件列表，其中每个文件的信息的格式为：
   * {
   * uri:'file1',
   * lastModifiedTime:1589965924479,
   * length:10240,
   * type:?'file'
   * }
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  text: string;
}

/**
 * 可选项类型，支持readText接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO.Lite
 * @since 3
 * @deprecated since 10
 * @reserved ["liteWearable"]
 */
export interface FileReadTextOption {
  /**
   * 本地文件URI。由于轻量级穿戴设备底层文件系统的限制，该值必须满足以下要求：
   * 1、URI 中不得包含以下特殊字符：\"*+,:;<=>?[]\
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  uri: string;

  /**
   * 编码格式，默认为UTF-8。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  encoding?: string;

  /**
   * 读取的起始位置，单位为Byte，默认为文件的起始位置。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  position?: number;

  /**
   * 读取的长度，单位为Byte，默认值为4096。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  length?: number;

  /**
   * 接口调用成功的回调函数。返回[FileReadTextResponse]{@link FileReadTextResponse}。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  success?: (data: FileReadTextResponse) => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 可选项类型，支持writeArrayBuffer接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO.Lite
 * @since 3
 * @deprecated since 10
 * @reserved ["liteWearable"]
 */
export interface FileWriteArrayBufferOption {
  /**
   * 本地文件URI，如果文件不存在会创建文件。由于轻量级穿戴设备底层文件系统的限制，该值必须满足以下要求：
   * 1、URI 中不得包含以下特殊字符：\"*+,:;<=>?[]\
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  uri: string;

  /**
   * 写入的Buffer。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  buffer: Uint8Array;

  /**
   * 文件写入的起始偏移位置，单位为Byte，默认为0。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  position?: number;

  /**
   * 是否追加模式，默认为false。当设置为true时，position参数无效。true为追加，false为不追加。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  append?: boolean;

  /**
   * 接口调用成功的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  success?: () => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 文件读取返回，包含读取到的文件内容。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO.Lite
 * @since 3
 * @deprecated since 10
 * @reserved ["liteWearable"]
 */
export interface FileReadArrayBufferResponse {
  /**
   * 获取的文件列表，其中每个文件的信息的格式为：
   * {
   * uri:'file1',
   * lastModifiedTime:1589965924479,
   * length:10240,
   * type:?'file'
   * }
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  buffer: Uint8Array;
}

/**
 * 可选项类型，支持readArrayBuffer接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO.Lite
 * @since 3
 * @deprecated since 10
 * @reserved ["liteWearable"]
 */
export interface FileReadArrayBufferOption {
  /**
   * 本地文件URI。由于轻量级穿戴设备底层文件系统的限制，该值必须满足以下要求：
   * 1、URI 中不得包含以下特殊字符：\"*+,:;<=>?[]\
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  uri: string;

  /**
   * 读取的起始位置，单位为Byte，默认为文件的起始位置。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  position?: number;

  /**
   * 读取的长度，单位为Byte，默认值为4096。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  length?: number;

  /**
   * 接口调用成功的回调函数。返回[FileReadArrayBufferResponse]{@link FileReadArrayBufferResponse}。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  success?: (data: FileReadArrayBufferResponse) => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 可选项类型，支持access接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO.Lite
 * @since 3
 * @deprecated since 10
 * @reserved ["liteWearable"]
 */
export interface FileAccessOption {
  /**
   * 目录或文件URI。由于轻量级穿戴设备底层文件系统的限制，该值必须满足以下要求：
   * 1、URI 中不得包含以下特殊字符：\"*+,:;<=>?[]\
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  uri: string;

  /**
   * 接口调用成功的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  success?: () => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 可选项类型，支持mkdir接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO.Lite
 * @since 3
 * @deprecated since 10
 * @reserved ["liteWearable"]
 */
export interface FileMkdirOption {
  /**
   * 目录URI。由于轻量级穿戴设备底层文件系统的限制，该值必须满足以下要求：
   * 1、URI 中不得包含以下特殊字符：\"*+,:;<=>?[]\
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  uri: string;

  /**
   * 是否递归创建该目录的上级目录，缺省为false。true为递归创建，false是不递归创建。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  recursive?: boolean;

  /**
   * 接口调用成功的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  success?: () => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 可选项类型，支持rmdir接口使用。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO.Lite
 * @since 3
 * @deprecated since 10
 * @reserved ["liteWearable"]
 */
export interface FileRmdirOption {
  /**
   * 目录URI。由于轻量级穿戴设备底层文件系统的限制，该值必须满足以下要求：
   * 1、URI 中不得包含以下特殊字符：\"*+,:;<=>?[]\
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  uri: string;

  /**
   * 是否递归删除子文件和子目录，缺省为false。true为递归删除，false为不递归删除。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  recursive?: boolean;

  /**
   * 接口调用成功的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  success?: () => void;

  /**
   * 接口调用失败的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  fail?: (data: string, code: number) => void;

  /**
   * 接口调用结束的回调函数。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   */
  complete?: () => void;
}

/**
 * 文件类。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO.Lite
 * @since 3
 * @deprecated since 10
 * @reserved ["liteWearable"]
 */
export default class File {
  /**
   * 将指定文件移动到其他指定位置。
   *
   * @param { FileMoveOption } options - 文件过滤选项。默认不进行过滤。
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   * @useinstead @ohos.file.fs:moveFile
   */
  static move(options: FileMoveOption): void;

  /**
   * 将指定文件拷贝并存储到指定位置。
   *
   * @param { FileCopyOption } options - 接口选项。
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   * @useinstead @ohos.file.fs:copyFile
   */
  static copy(options: FileCopyOption): void;

  /**
   * 获取指定路径下全部文件的列表。
   *
   * @param { FileListOption } options - 接口选项。
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   * @useinstead @ohos.file.fs:listFile
   */
  static list(options: FileListOption): void;

  /**
   * 获取指定本地文件的信息。
   *
   * @param { FileGetOption } options - 接口选项。
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   * @useinstead @ohos.file.fs:stat
   */
  static get(options: FileGetOption): void;

  /**
   * 删除本地文件。
   *
   * @param { FileDeleteOption } options - 接口选项。
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   * @useinstead @ohos.file.fs:unlink
   */
  static delete(options: FileDeleteOption): void;

  /**
   * 写文本内容到指定文件。仅支持文本文档读写。
   *
   * @param { FileWriteTextOption } options - 接口选项。
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   * @useinstead @ohos.file.fs:write
   */
  static writeText(options: FileWriteTextOption): void;

  /**
   * 从指定文件中读取文本内容。仅支持文本文档读写。
   *
   * @param { FileReadTextOption } options - 接口选项。
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   * @useinstead @ohos.file.fs:readText
   */
  static readText(options: FileReadTextOption): void;

  /**
   * 写Buffer内容到指定文件。仅支持文本文档读写。
   *
   * @param { FileWriteArrayBufferOption } options - 接口选项。
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   * @useinstead @ohos.file.fs:write
   */
  static writeArrayBuffer(options: FileWriteArrayBufferOption): void;

  /**
   * 从指定文件中读取Buffer内容。仅支持文本文档读写。
   *
   * @param { FileReadArrayBufferOption } options - 接口选项。
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   * @useinstead @ohos.file.fs:read
   */
  static readArrayBuffer(options: FileReadArrayBufferOption): void;

  /**
   * 判断指定文件或目录是否存在。
   *
   * @param { FileAccessOption } options - 接口选项。
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   * @useinstead @ohos.file.fs:access
   */
  static access(options: FileAccessOption): void;

  /**
   * 创建指定目录。
   *
   * @param { FileMkdirOption } options - 接口选项。
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   * @useinstead @ohos.file.fs:mkdir
   */
  static mkdir(options: FileMkdirOption): void;

  /**
   * 删除指定目录。
   *
   * @param { FileRmdirOption } options - 接口选项。
   * @syscap SystemCapability.FileManagement.File.FileIO.Lite
   * @since 3
   * @deprecated since 10
   * @reserved ["liteWearable"]
   * @useinstead @ohos.file.fs:rmdir
   */
  static rmdir(options: FileRmdirOption): void;
}