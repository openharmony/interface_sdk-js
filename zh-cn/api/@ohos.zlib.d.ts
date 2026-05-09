/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * 本模块提供压缩解压缩文件的能力。
 *
 * @syscap SystemCapability.BundleManager.Zlib
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace zlib {
  /**
   * 错误码。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  export enum ErrorCode {
    /**
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    ERROR_CODE_OK = 0,
    /**
     * @syscap SystemCapability.BundleManager.Zlib
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    ERROR_CODE_ERRNO = -1
  }

  /**
   * 压缩等级。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  export enum CompressLevel {
    /**
     * 压缩率为0压缩等级。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    COMPRESS_LEVEL_NO_COMPRESSION = 0,
    /**
     * 最佳速度压缩等级。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    COMPRESS_LEVEL_BEST_SPEED = 1,
    /**
     * 最佳压缩等级。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    COMPRESS_LEVEL_BEST_COMPRESSION = 9,
    /**
     * 默认压缩等级。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    COMPRESS_LEVEL_DEFAULT_COMPRESSION = -1
  }

  /**
   * CompressStrategy作为[Options]{@link zlib.Options}的一个属性，用于指定压缩时的压缩策略。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  export enum CompressStrategy {
    /**
     * 常规数据策略。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    COMPRESS_STRATEGY_DEFAULT_STRATEGY = 0,
    /**
     * 过滤器产生的数据压缩策略。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    COMPRESS_STRATEGY_FILTERED = 1,
    /**
     * 霍夫曼编码格式压缩策略。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    COMPRESS_STRATEGY_HUFFMAN_ONLY = 2,
    /**
     * 游标编码压缩策略。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    COMPRESS_STRATEGY_RLE = 3,
    /**
     * 固定的压缩策略。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    COMPRESS_STRATEGY_FIXED = 4
  }

  /**
   * ParallelStrategy作为[Options]{@link zlib.Options}的一个属性，用于指定压缩或解压时的串行或并行策略。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  export enum ParallelStrategy {
    /**
     * 默认值，串行压缩/解压策略。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    PARALLEL_STRATEGY_SEQUENTIAL = 0,
    /**
     * 并行解压策略。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    PARALLEL_STRATEGY_PARALLEL_DECOMPRESSION = 1
  }

  /**
   * PathSeparatorStrategy作为[Options]{@link zlib.Options}的一个属性，用于指定解压时目标压缩包内文件路径中分隔符的处理策略。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  export enum PathSeparatorStrategy {
    /**
     * 默认值，压缩包内文件路径中的分隔符不做处理。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    PATH_SEPARATOR_STRATEGY_DEFAULT = 0,
    /**
     * 压缩包内文件路径中的反斜杠'\'替换为斜杠'/'。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    PATH_SEPARATOR_STRATEGY_REPLACE_BACKSLASH = 1
  }

  /**
   * 内存等级。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  export enum MemLevel {
    /**
     * zlib接口在压缩过程中最小使用内存。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    MEM_LEVEL_MIN = 1,
    /**
     * zlib接口在压缩过程中最大使用内存。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    MEM_LEVEL_MAX = 9,
    /**
     * zlib接口在压缩过程中默认使用内存。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    MEM_LEVEL_DEFAULT = 8
  }

  /**
   * 压缩刷新模式。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum CompressFlushMode {
    /**
     * 默认值，表示正常操作。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NO_FLUSH = 0,
    /**
     * 在流中生成部分刷新点。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    PARTIAL_FLUSH = 1,
    /**
     * 在保持压缩流状态的同时强制输出所有压缩数据。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SYNC_FLUSH = 2,
    /**
     * 重置压缩状态。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FULL_FLUSH = 3,
    /**
     * 压缩或解压缩过程结束。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FINISH = 4,
    /**
     * 允许更精确的控制。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    BLOCK = 5,
    /**
     * 实施过程中有特殊目的。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    TREES = 6
  }

  /**
   * 压缩/解压缩函数的返回代码。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum ReturnStatus {
    /**
     * 函数调用成功。该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    OK = 0,
    /**
     * 函数调用成功，表示已处理了整个数据。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_END = 1,
    /**
     * 函数调用成功，表示需要预设字典才能继续解压缩。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    NEED_DICT = 2,
    /**
     * 函数调用失败，表示文件操作错误。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 23 dynamic&static
     */
    ERRNO = -1,
    /**
     * 函数调用失败，表示压缩或解压缩流错误。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 23 dynamic&static
     */
    STREAM_ERROR = -2,
    /**
     * 函数调用失败，表示输入数据不正确。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 23 dynamic&static
     */
    DATA_ERROR = -3,
    /**
     * 函数调用失败，表示内存分配失败。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 23 dynamic&static
     */
    MEM_ERROR = -4,
    /**
     * 函数调用失败，表示输入缓冲区不正确。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 23 dynamic&static
     */
    BUF_ERROR = -5
  }

  /**
   * 压缩模式。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum CompressMethod {
    /**
     * 压缩模式。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DEFLATED = 8
  }

  /**
   * 偏移参考点。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export enum OffsetReferencePoint {
    /**
     * 从文件开头查找。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SEEK_SET = 0,

    /**
     * 从当前位置查找。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SEEK_CUR = 1
  }

  /**
   * Options用于指定在压缩或解压Zip文件时的选项。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface Options {
    /**
     * 压缩或解压时指定的压缩等级。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    level?: CompressLevel;
    /**
     * 压缩时指定的使用内存等级。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    memLevel?: MemLevel;
    /**
     * 压缩时指定的压缩策略。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    strategy?: CompressStrategy;
    /**
     * 压缩策略。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    parallel?: ParallelStrategy;
    /**
     * 并行策略。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    pathSeparatorStrategy?: PathSeparatorStrategy;
  }

  /**
   * 处理所有用于压缩和解压缩所需的信息。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface ZStream {
    /**
     * 需要压缩的输入字节。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    nextIn?: ArrayBuffer;

    /**
     * nextIn可用的字节数。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    availableIn?: int;

    /**
     * 到目前为止读取的输入字节总数。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    totalIn?: long;

    /**
     * 压缩后的输出字节。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    nextOut?: ArrayBuffer;

    /**
     * nextOut的剩余可用字节数。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    availableOut?: int;

    /**
     * 到目前为止输出字节总数。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    totalOut?: long;

    /**
     * 关于数据类型的最佳猜测：deflate的二进制或文本，或inflate的解码状态。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    dataType?: int;

    /**
     * 未压缩数据的Adler-32或CRC-32值。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    adler?: long;
  }

  /**
   * 传递从zlib例程中获取的Gzip头部信息。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface GzHeader {
    /**
     * 如果压缩数据被认为是文本，则为True。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isText?: boolean;

    /**
     * 操作系统。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    os?: int;

    /**
     * 修改时间。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    time?: long;

    /**
     * 额外标志。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    xflags?: int;

    /**
     * 额外字段。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    extra?: ArrayBuffer;

    /**
     * 额外字段的长度。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    extraLen?: int;

    /**
     * 文件名。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    name?: ArrayBuffer;

    /**
     * 注释。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    comment?: ArrayBuffer;

    /**
     * 如果存在crc标头，则为True。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    hcrc?: boolean;

    /**
     * 读取gzip标头后为True。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    done?: boolean;
  }

  /**
   * 压缩和解压缩的返回值信息。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface ZipOutputInfo {
    /**
     * 参考[ReturnStatus枚举定义]{@link zlib.ReturnStatus}。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    status: ReturnStatus;

    /**
     * 目标缓冲区的总长度。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    destLen: long;
  }

  /**
   * InflateGetDictionary和deflateGetDictionary这两个函数会返回值的相关信息。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface DictionaryOutputInfo {
    /**
     * 参考[ReturnStatus枚举定义]{@link zlib.ReturnStatus}。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    status: ReturnStatus;

    /**
     * 字典的长度。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    dictionaryLength: int;
  }

  /**
   * 解压缩返回信息。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface DecompressionOutputInfo {
    /**
     * 参考[ReturnStatus枚举定义]{@link zlib.ReturnStatus}。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    status: ReturnStatus;

    /**
     * 目标缓冲区的总长度。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    destLength: long;

    /**
     * 源缓冲区的长度。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    sourceLength: long;
  }

  /**
   * 压缩等待返回信息。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface DeflatePendingOutputInfo {
    /**
     * 参考[ReturnStatus枚举定义]{@link zlib.ReturnStatus}。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    status: ReturnStatus;

    /**
     * 已生成的输出字节数。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    pending: int;

    /**
     * 已生成的输出位数。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    bits: int;
  }

  /**
   * GzError返回信息。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface GzErrorOutputInfo {
    /**
     * 返回zlib文件状态码，参考ReturnStatus的定义。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    status: ReturnStatus;

    /**
     * zlib文件上发生的最后一个状态的状态消息。
     *
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    statusMsg: string;
  }

  /**
   * 一个用于读取用户提供的输入数据的回调函数。当解压缩过程需要更多输入数据时，zlib 将调用此函数。此函数应从数据源读取数据并将其写入缓冲区中。
   *
   * @param { object } inDesc - A universal user-defined data object.
   *     The specific type and content depend on the actual application scenario, which can include configuration data,
   *     file handles, etc.
   * @returns { ArrayBuffer } Return the buffer successfully read by the data source through the input descriptor.
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   */
  type InflateBackInputCallback = (inDesc: object) => ArrayBuffer;

  /**
   * 一个用于读取用户提供的输入数据的回调函数。当解压缩过程需要更多输入数据时，zlib 将调用此函数。此函数应从数据源读取数据并将其写入缓冲区中。
   *
   * @param { RecordData } inDesc - A universal user-defined data object.
   *     The specific type and content depend on the actual application scenario, which can include configuration data,
   *     file handles, etc.
   * @returns { ArrayBuffer } Return the buffer successfully read by the data source through the input descriptor.
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 23 static
   */
  type InflateBackInputCallback = (inDesc: RecordData) => ArrayBuffer;

  /**
   * 用户提供的输出数据会被写入回调函数中。每当解压后的数据准备好进行输出时，zlib 就会调用此函数将缓冲区中的数据写入目标位置。
   *
   * @param { object } outDesc - Object passed to output function. Object dependency requirement implementation.
   * @param { ArrayBuffer } buf - Used to store data to be written.
   * @param { int } length - Write the length of the output buffer.
   * @returns { int } Return the number of bytes output.
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   */
  type InflateBackOutputCallback = (outDesc: object, buf: ArrayBuffer, length: int) => int;

  /**
   * 用户提供的输出数据会被写入回调函数中。每当解压后的数据准备好进行输出时，zlib 就会调用此函数将缓冲区中的数据写入目标位置。
   *
   * @param { RecordData } outDesc - Object passed to output function. Object dependency requirement implementation.
   * @param { ArrayBuffer } buf - Used to store data to be written.
   * @param { int } length - Write the length of the output buffer.
   * @returns { int } Return the number of bytes output.
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 23 static
   */
  type InflateBackOutputCallback = (outDesc: RecordData, buf: ArrayBuffer, length: int) => int;

  /**
   * 压缩接口，压缩完成后返回执行结果。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。建议使用
   * > [zlib.compressFile]{@link zlib.compressFile(inFile: string, outFile: string, options: Options, callback: AsyncCallback<void>)}
   * > 替代。
   *
   * @param { string } inFile - 指定压缩的文件夹路径或者文件路径，路径必须为沙箱路径，沙箱路径可以通过context获取，可参考[FA模型]{@link ./app/context}，
   *     [Stage模型]{@link ./app/context}。
   * @param { string } outFile - 指定压缩结果的文件路径（文件的扩展名zip）。
   * @param { Options } options - 压缩的可选参数。
   * @returns { Promise<void> } Promise对象，无返回值。
   * @syscap SystemCapability.BundleManager.Zlib
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead zlib.compressFile(inFile: string, outFile: string, options: Options, callback: AsyncCallback<void>)
   */
  function zipFile(inFile: string, outFile: string, options: Options): Promise<void>;

  /**
   * 解压文件，解压完成后返回执行结果。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。建议使用
   * > [zlib.decompressFile]{@link zlib.decompressFile(inFile: string, outFile: string, options: Options, callback: AsyncCallback<void>)}
   * > 替代。
   * >
   * > 传入的压缩包内部文件或者文件夹名称不能包含“../”，否则会返回-1错误码。
   *
   * @param { string } inFile - 指定的待解压缩文件的文件路径，路径必须为沙箱路径，沙箱路径可以通过context获取，可参考[FA模型]{@link ./app/context}，
   *     [Stage模型]{@link ./app/context}。如果待解压的.zip文件中包含中文的文件名或目录名，需使用UTF8进行编码，避免解压时文件名或目录名出现中文乱码。
   * @param { string } outFile - 指定的解压文件路径。
   * @param { Options } options - 解压的可选参数。
   * @returns { Promise<void> } Promise对象，无返回值。
   * @syscap SystemCapability.BundleManager.Zlib
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead zlib.decompressFile(inFile: string, outFile: string, options: Options, callback: AsyncCallback<void>)
   */
  function unzipFile(inFile: string, outFile: string, options: Options): Promise<void>;

  /**
   * 压缩文件，压缩的结果。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 为了避免路径穿越，从API version 13开始，inFile和outFile传入的参数不允许包含“../”，否则会返回900001、900002错误码。
   *
   * @param { string } inFile - 指定压缩的文件夹路径或者文件路径，路径必须为沙箱路径，沙箱路径可以通过context获取，可参考[FA模型]{@link ./app/context}，
   *     [Stage模型]{@link ./app/context}。待压缩的文件夹不可为空，否则使用
   *     [decompressFile]{@link zlib.decompressFile(inFile: string, outFile: string, options: Options,
   *     callback: AsyncCallback<void>)}对压缩后的文件解压时会报错。
   * @param { string } outFile - 指定的压缩结果的文件路径。多个线程同时压缩文件时，outFile不能相同。
   * @param { Options } options - 压缩的配置参数。
   * @param { AsyncCallback<void> } callback - 异步获取压缩结果之后的回调。成功返回null，失败返回错误码。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function compressFile(inFile: string, outFile: string, options: Options, callback: AsyncCallback<void>): void;

  /**
   * 压缩文件，压缩的结果。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 为了避免路径穿越，从API version 13开始，inFile和outFile传入的参数不允许包含“../”，否则会返回900001、900002错误码。
   *
   * @param { string } inFile - 指定压缩的文件夹路径或者文件路径，路径必须为沙箱路径，沙箱路径可以通过context获取，可参考[FA模型]{@link ./app/context}，
   *     [Stage模型]{@link ./app/context}。待压缩的文件夹不可为空，否则使用
   *     [decompressFile]{@link zlib.decompressFile(inFile: string, outFile: string, options: Options,
   *     callback: AsyncCallback<void>)}对压缩后的文件解压时会报错。
   * @param { string } outFile - 指定的压缩结果的文件路径。多个线程同时压缩文件时，outFile不能相同。
   * @param { Options } options - 压缩的配置参数。
   * @returns { Promise<void> } Promise对象，无返回值。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function compressFile(inFile: string, outFile: string, options: Options): Promise<void>;

  /**
   * 压缩指定的多个文件。使用Promise异步回调。
   *
   * @param { Array<string> } inFiles - 指定压缩的文件夹路径或者文件路径，路径必须为沙箱路径，沙箱路径可以通过context获取，可参考[FA模型]{@link ./app/context}，
   *     [Stage模型]{@link ./app/context}。待压缩的文件夹不可为空，否则使用
   *     [decompressFile]{@link zlib.decompressFile(inFile: string, outFile: string, options: Options,
   *     callback: AsyncCallback<void>)}对压缩后的文件解压时会报错。
   * @param { string } outFile - 指定的压缩结果的文件路径。多个线程同时压缩文件时，outFile不能相同。
   * @param { Options } options - 压缩的配置参数。
   * @returns { Promise<void> } Promise对象，无返回值。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function compressFiles(inFiles: Array<string>, outFile: string, options: Options): Promise<void>;

  /**
   * 解压文件，解压的结果。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 为了避免路径穿越，从API version 13开始，inFile和outFile传入的参数不允许包含“../”，否则会返回900001、900002错误码。
   * >
   * > 传入的压缩包内部文件或者文件夹名称不能包含“../”，否则会返回900003错误码。
   *
   * @param { string } inFile - 指定的待解压缩文件的文件路径，文件后缀需要以.zip结尾。文件路径必须为沙箱路径，沙箱路径可以通过context获取，可参考
   *     [FA模型]{@link ./app/context}，[Stage模型]{@link ./app/context}。如果待解压的.zip文件中包含中文的文件名或目录名，需使用UTF8进行编码，避免解压时文件名或目录名出现
   *     中文乱码。
   * @param { string } outFile - 指定的解压后的文件夹路径，文件夹目录路径需要在系统中存在，不存在则会解压失败。路径必须为沙箱路径，沙箱路径可以通过context获取，具体方法可参考
   *     [application/context（Stage模型）]{@link ./app/context}或 [app/context（FA模型）]{@link ./app/context}。如果待解压的文件或文件夹在解压后的
   *     路径下已经存在，则会直接覆盖同名文件或同名文件夹中的同名文件。多个线程同时解压文件时，outFile不能相同。
   * @param { Options } options - 解压的配置参数。
   * @param { AsyncCallback<void> } callback - 异步获取解压结果之后的回调。成功返回null，失败返回错误码。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @throws { BusinessError } 900003 - The input source file is not in ZIP format or is damaged. [since 10]
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function decompressFile(inFile: string, outFile: string, options: Options, callback: AsyncCallback<void>): void;

  /**
   * 解压文件，解压的结果。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 为了避免路径穿越，从API version 13开始，inFile和outFile传入的参数不允许包含“../”，否则会返回900001、900002错误码。
   * >
   * > 传入的压缩包内部文件或者文件夹名称不能包含“../”，否则会返回900003错误码。
   *
   * @param { string } inFile - 指定的待解压缩文件的文件路径，文件后缀需要以.zip结尾。文件路径必须为沙箱路径，沙箱路径可以通过context获取，可参考
   *     [FA模型]{@link ./app/context}，[Stage模型]{@link ./app/context}。如果待解压的.zip文件中包含中文的文件名或目录名，需使用UTF8进行编码，避免解压时文件名或目录名出现
   *     中文乱码。
   * @param { string } outFile - 指定的解压后的文件夹路径，文件夹目录路径需要在系统中存在，不存在则会解压失败。路径必须为沙箱路径，沙箱路径可以通过context获取，具体方法可参考
   *     [application/context（Stage模型）]{@link ./app/context}或 [app/context（FA模型）]{@link ./app/context}。如果待解压的文件或文件夹在解压后的
   *     路径下已经存在，则会直接覆盖同名文件或同名文件夹中的同名文件。多个线程同时解压文件时，outFile不能相同。
   * @param { AsyncCallback<void> } callback - 异步获取解压结果之后的回调。成功返回null，失败返回错误码。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @throws { BusinessError } 900003 - The input source file is not in ZIP format or is damaged.
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function decompressFile(inFile: string, outFile: string, callback: AsyncCallback<void>): void;

  /**
   * 解压文件，解压的结果。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 为了避免路径穿越，从API version 13开始，inFile和outFile传入的参数不允许包含“../”，否则会返回900001、900002错误码。
   * >
   * > 传入的压缩包内部文件或者文件夹名称不能包含“../”，否则会返回900003错误码。
   *
   * @param { string } inFile - 指定的待解压缩文件的文件路径，文件后缀需要以.zip结尾。文件路径必须为沙箱路径，沙箱路径可以通过context获取，可参考
   *     [FA模型]{@link ./app/context}，[Stage模型]{@link ./app/context}。如果待解压的.zip文件中包含中文的文件名或目录名，需使用UTF8进行编码，避免解压时文件名或目录名出现
   *     中文乱码。
   * @param { string } outFile - 指定的解压后的文件夹路径，文件夹目录路径需要在系统中存在，不存在则会解压失败。路径必须为沙箱路径，沙箱路径可以通过context获取，具体方法可参考
   *     [application/context（Stage模型）]{@link ./app/context}或 [app/context（FA模型）]{@link ./app/context}。如果待解压的文件或文件夹在解压后的
   *     路径下已经存在，则会直接覆盖同名文件或同名文件夹中的同名文件。多个线程同时解压文件时，outFile不能相同。
   * @param { Options } options - 解压时的配置参数。
   * @returns { Promise<void> } Promise对象，无返回值。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900002 - The input destination file is invalid.
   * @throws { BusinessError } 900003 - The input source file is not in ZIP format or is damaged. [since 10]
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function decompressFile(inFile: string, outFile: string, options?: Options): Promise<void>;

  /**
   * 获取压缩文件的原始大小。使用Promise异步回调。
   *
   * @param { string } compressedFile - 指定的压缩文件的文件路径，只支持zip格式压缩文件。文件路径必须为沙箱路径，沙箱路径可以通过context获取，可参考
   *     [FA模型]{@link ./app/context}，[Stage模型]{@link ./app/context}。
   * @returns { Promise<long> } Promise对象，返回压缩文件的原始大小，单位字节。
   * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
   *     unspecified; 2. Incorrect parameter types.
   * @throws { BusinessError } 900001 - The input source file is invalid.
   * @throws { BusinessError } 900003 - The input source file is not in ZIP format or is damaged.
   * @syscap SystemCapability.BundleManager.Zlib
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getOriginalSize(compressedFile: string): Promise<long>;

  /**
   * 创建校验对象。使用Promise异步回调。
   *
   * @returns { Promise<Checksum> } Promise对象。返回校验对象实例。
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function createChecksum(): Promise<Checksum>;

  /**
   * 创建校验对象。成功时返回Checksum对象实例。
   *
   * @returns { Checksum } 校验对象实例。
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function createChecksumSync(): Checksum;

  /**
   * 创建压缩解压缩对象实例。使用Promise异步回调。
   *
   * @returns { Promise<Zip> } Promise对象。返回压缩解压缩对象实例。
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function createZip(): Promise<Zip>;

  /**
   * 创建压缩解压缩对象实例，成功时返回压缩解压缩对象实例。
   *
   * @returns { Zip } 返回压缩解压缩对象实例。
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function createZipSync(): Zip;

  /**
   * 创建GZip对象。使用Promise异步回调。
   *
   * @returns { Promise<GZip> } Promise对象。返回GZip对象实例。
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function createGZip(): Promise<GZip>;

  /**
   * 创建GZip对象。成功时返回GZip对象实例。
   *
   * @returns { GZip } GZip对象实例。
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function createGZipSync(): GZip;

  /**
   * 校验对象。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface Checksum {
    /**
     * 计算Adler-32校验和。使用Promise异步回调。
     *
     * @param { long } adler - Adler-32校验和的初始值。
     * @param { ArrayBuffer } buf - 计算校验和数据缓冲区。
     * @returns { Promise<long> } Promise对象。返回计算后的Adler-32校验和。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    adler32(adler: long, buf: ArrayBuffer): Promise<long>;

    /**
     * 将两个Adler-32校验和合并。使用Promise异步回调。
     *
     * @param { long } adler1 - 第一个要合并的Adler-32校验和。
     * @param { long } adler2 - 第二个要合并的Adler-32校验和。
     * @param { long } len2 - 第二个Adler-32校验和的数据块的长度。
     * @returns { Promise<long> } Promise对象。返回合并后的Adler-32校验和。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    adler32Combine(adler1: long, adler2: long, len2: long): Promise<long>;

    /**
     * 更新CRC-32校验。使用Promise异步回调。
     *
     * @param { long } crc - CRC-32校验的初始值。
     * @param { ArrayBuffer } buf - 计算校验数据缓冲区。
     * @returns { Promise<long> } Promise对象。返回更新后的CRC-32校验。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    crc32(crc: long, buf: ArrayBuffer): Promise<long>;

    /**
     * 将两个CRC-32校验合并。使用Promise异步回调。
     *
     * @param { long } crc1 - 第一个要合并的CRC-32校验。
     * @param { long } crc2 - 第二个要合并的CRC-32校验。
     * @param { long } len2 - 第二个CRC-32校验的数据块的长度。
     * @returns { Promise<long> } Promise对象。返回合并后的CRC-32校验。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    crc32Combine(crc1: long, crc2: long, len2: long): Promise<long>;

    /**
     * 更新CRC-64校验。使用Promise异步回调。
     *
     * @param { long } crc - CRC-64校验的初始值。
     * @param { ArrayBuffer } buf - 计算校验数据缓冲区。
     * @returns { Promise<long> } Promise对象。返回更新后的CRC-64校验。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    crc64(crc: long, buf: ArrayBuffer): Promise<long>;

    /**
     * 输出CRC-32校验表。使用Promise异步回调。
     *
     * @returns { Promise<Array<long>> } Promise对象。返回CRC-32校验表。
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getCrcTable(): Promise<Array<long>>;

    /**
     * 输出CRC-64校验表。使用Promise异步回调。
     *
     * @returns { Promise<Array<long>> } Promise对象。返回CRC-64校验表。
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getCrc64Table(): Promise<Array<long>>;
  }

  /**
   * 压缩解压缩对象实例，支持以zlib、deflate、gzip格式对数据进行压缩与解压。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface Zip {
    /**
     * 输出流。使用Promise异步回调。
     *
     * @returns { Promise<ZStream> } Promise对象。返回ZStream流。
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     */
    getZStream(): Promise<ZStream>;

    /**
     * Get ZStream.
     *
     * @returns { Promise<ZStream | undefined> } Return the required ZStream for compression or decompression.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 23 static
     */
    getZStream(): Promise<ZStream | undefined>;

    /**
     * 获取当前链接的zlib库的版本信息。使用Promise异步回调。
     *
     * @returns { Promise<string> } Promise对象。返回当前zlib库的版本信息。
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    zlibVersion(): Promise<string>;

    /**
     * 返回指示编译时选项的标志。使用Promise异步回调。
     *
     * @returns { Promise<int> } Promise对象。返回指示编译时选项的标志。
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    zlibCompileFlags(): Promise<int>;

    /**
     * 将源缓冲区压缩到目标缓冲区。使用Promise异步回调。
     *
     * @param { ArrayBuffer } dest - 目标缓冲区。
     * @param { ArrayBuffer } source - 源数据缓冲区。
     * @param { long } sourceLen - 源数据长度。默认值为0。
     * @returns { Promise<ZipOutputInfo> } Promise对象。返回结果状态和目标缓冲区的总大小。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800007 - The input buffer is incorrect, and the output buffer is too small to
     *     accommodate the compressed or decompressed data.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    compress(dest: ArrayBuffer, source: ArrayBuffer, sourceLen?: long): Promise<ZipOutputInfo>;

    /**
     * 将源缓冲区压缩到目标缓冲区。使用Promise异步回调。
     *
     * @param { ArrayBuffer } dest - 目标缓冲区。
     * @param { ArrayBuffer } source - 源数据缓冲区。
     * @param { CompressLevel } level - 参考[CompressLevel枚举定义]{@link zlib.CompressLevel}。
     * @param { long } sourceLen - 源数据长度。默认值为0。
     * @returns { Promise<ZipOutputInfo> } Promise对象。返回结果状态和目标缓冲区的总大小。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @throws { BusinessError } 17800007 - The input buffer is incorrect, and the output buffer is too small to
     *     accommodate the compressed or decompressed data.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    compress2(dest: ArrayBuffer, source: ArrayBuffer, level: CompressLevel, sourceLen?: long,): Promise<ZipOutputInfo>;

    /**
     * 计算返回压缩大小的上限。使用Promise异步回调。
     *
     * @param { int } sourceLen - 源数据长度。
     * @returns { Promise<int> } Promise对象。返回压缩大小的上限。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    compressBound(sourceLen: int): Promise<int>;

    /**
     * 将压缩后的数据解压缩为原始的未压缩形式。使用Promise异步回调。
     *
     * @param { ArrayBuffer } dest - 目标缓冲区。
     * @param { ArrayBuffer } source - 源数据缓冲区。
     * @param { long } sourceLen - 源数据长度。默认值为0。
     * @returns { Promise<ZipOutputInfo> } Promise对象。返回结果状态和目标缓冲区的总大小。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800005 - The input data is incorrect. For example, the data does not conform to the
     *     zlib compression format, the compressed data is corrupted, or the data is not compressed.
     * @throws { BusinessError } 17800007 - The input buffer is incorrect, and the output buffer is too small to
     *     accommodate the compressed or decompressed data.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    uncompress(dest:ArrayBuffer, source: ArrayBuffer, sourceLen?: long): Promise<ZipOutputInfo>;

    /**
     * 将压缩后的数据解压缩为原始的未压缩形式。使用Promise异步回调。
     *
     * @param { ArrayBuffer } dest - 目标缓冲区。
     * @param { ArrayBuffer } source - 源数据缓冲区。
     * @param { long } sourceLen - 源数据长度。默认值为0。
     * @returns { Promise<DecompressionOutputInfo> } Promise对象。返回结果状态、目标缓冲区的总大小和源数据长度。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800005 - The input data is incorrect. For example, the data does not conform to the
     *     zlib compression format, the compressed data is corrupted, or the data is not compressed.
     * @throws { BusinessError } 17800007 - The input buffer is incorrect, and the output buffer is too small to
     *     accommodate the compressed or decompressed data.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    uncompress2(dest: ArrayBuffer, source: ArrayBuffer, sourceLen?: long): Promise<DecompressionOutputInfo>;

    /**
     * 验证压缩流结构内部的校验和。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { int } check - 预期的校验和。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflateValidate(strm: ZStream, check: int): Promise<ReturnStatus>;

    /**
     * 查找当前解压缩流的同步点。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflateSyncPoint(strm: ZStream): Promise<ReturnStatus>;

    /**
     * 跳过无效的压缩数据，直到找到一个可能的完整刷新点为止。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @throws { BusinessError } 17800005 - The input data is incorrect. For example, the data does not conform to the
     *     zlib compression format, the compressed data is corrupted, or the data is not compressed.
     * @throws { BusinessError } 17800007 - The input buffer is incorrect, and the output buffer is too small to
     *     accommodate the compressed or decompressed data.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflateSync(strm: ZStream): Promise<ReturnStatus>;

    /**
     * 使用给定的字典数据初始化当前解压缩流的字典内容。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { ArrayBuffer } dictionary - 字典数据。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @throws { BusinessError } 17800005 - The input data is incorrect. For example, the data does not conform to the
     *     zlib compression format, the compressed data is corrupted, or the data is not compressed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflateSetDictionary(strm: ZStream, dictionary: ArrayBuffer): Promise<ReturnStatus>;

    /**
     * 重置解压缩流的状态，以保留分配的霍夫曼解码树和预设字典。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflateResetKeep(strm: ZStream): Promise<ReturnStatus>;

    /**
     * 重置指定解压缩流的状态并更新窗口大小配置，以重新开始新的解压操作。不会释放或重新分配内部缓冲区。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { int } windowBits - 控制内存窗口的大小，并指定数据的格式（zlib、gzip、raw deflate）。取值如下：<br />zlib格式：[1, 15]。<br />gzip格式：大于15
     *     。<br />raw deflate格式：[-15, -1]。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflateReset2(strm: ZStream, windowBits: int): Promise<ReturnStatus>;

    /**
     * 重置指定解压缩流的状态，使其恢复到初始化状态以重新开始新的解压操作。不会释放或重新分配内部缓冲区。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflateReset(strm: ZStream): Promise<ReturnStatus>;

    /**
     * 在指定解压缩流中设置初始比特数和比特值，用于在解压流开始时预填充比特缓冲区，以正确处理流起始位置的数据。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { int } bits - 指定要写入比特缓冲区的比特数。
     * @param { int } value - 用于填充比特缓冲区的比特值。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflatePrime(strm: ZStream, bits: int, value: int): Promise<ReturnStatus>;

    /**
     * 用于标记输入数据中的位置以供随机访问。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @returns { Promise<int> } Promise对象。返回位置信息。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflateMark(strm: ZStream): Promise<int>;

    /**
     * 初始化解压缩流并设置指定的 windowBits 参数。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { int } windowBits - 控制内存窗口的大小，并指定数据的格式（zlib、gzip、raw deflate）。取值如下：<br />zlib格式：[1, 15]。<br />gzip格式：大于15
     *     。<br />raw deflate格式：[-15, -1]。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflateInit2(strm: ZStream, windowBits: int): Promise<ReturnStatus>;

    /**
     * 初始化解压缩流。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflateInit(strm: ZStream): Promise<ReturnStatus>;

    /**
     * 用于在解压缩数据前设置gzip文件头部信息。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { GzHeader } header - 从压缩数据流中提取的gzip头信息。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflateGetHeader(strm: ZStream, header: GzHeader): Promise<ReturnStatus>;

    /**
     * 获取当前解压缩流中使用的解压缩字典内容及其长度。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { ArrayBuffer } dictionary - 接收解压缩字典的实际内容。
     * @returns { Promise<DictionaryOutputInfo> } Promise对象。返回结果状态和字典的长度。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflateGetDictionary(strm: ZStream, dictionary: ArrayBuffer): Promise<DictionaryOutputInfo>;

    /**
     * 解压流的所有动态分配的数据结构都被释放。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflateEnd(strm: ZStream): Promise<ReturnStatus>;

    /**
     * 复制解压流。使用Promise异步回调。
     *
     * @param { Zip } source - 参考[Zip定义]{@link zlib.Zip}。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflateCopy(source: Zip): Promise<ReturnStatus>;

    /**
     * 当前解压缩流中使用的霍夫曼编码树的数量。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @returns { Promise<long> } Promise对象。返回已使用的霍夫曼编码树的数量。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflateCodesUsed(strm: ZStream): Promise<long>;

    /**
     * 使用inflateBack()函数前初始化内部流状态以进行解压缩。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { long } windowBits - 控制内存窗口的大小，并指定数据的格式（zlib、gzip、raw deflate）。取值如下：<br />zlib格式：[1, 15]。<br />gzip格式：大于1
     *     5。<br />raw deflate格式：[-15, -1]。
     * @param { ArrayBuffer } window - 预设的窗口缓冲区。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflateBackInit(strm: ZStream, windowBits: long, window: ArrayBuffer): Promise<ReturnStatus>;

    /**
     * inflateBackInit()函数分配的所有内存都被释放。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflateBackEnd(strm: ZStream): Promise<ReturnStatus>;

    /**
     * 实现原始解压缩，采用回调接口来处理输入和输出。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { InflateBackInputCallback } backIn - 一种函数，用于从末尾解压缩数据，以从输入源读取原始压缩数据。
     * @param { object } inDesc - 通用对象。
     * @param { InflateBackOutputCallback } backOut - 将解压缩的数据写入目标输出。
     * @param { object } outDesc - 通用对象。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     */
    inflateBack(strm: ZStream, backIn: InflateBackInputCallback, inDesc: object, backOut: InflateBackOutputCallback, outDesc: object): Promise<ReturnStatus>;

    /**
     * 通过单一调用实现完全初始化，同时使用回调接口进行输入和输出操作。
     *
     * @param { ZStream } strm - Object to structure z_stream.
     * @param { InflateBackInputCallback } backIn - A function that decompresses data from the end to read the raw
     *     compressed data from the input source.
     * @param { RecordData } inDesc - Universal object.
     * @param { InflateBackOutputCallback } backOut - Write the decompressed data to the target output.
     * @param { RecordData } outDesc - Universal object.
     * @returns { Promise<ReturnStatus> } Return ReturnStatus the specific meaning is defined as enum.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by
     *     an initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 23 static
     */
    inflateBack(strm: ZStream, backIn: InflateBackInputCallback, inDesc: RecordData, backOut: InflateBackOutputCallback, outDesc: RecordData): Promise<ReturnStatus>;

    /**
     * 解压数据。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { CompressFlushMode } flush - 参考[CompressFlushMode定义]{@link zlib.CompressFlushMode}。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @throws { BusinessError } 17800005 - The input data is incorrect. For example, the data does not conform to the
     *     zlib compression format, the compressed data is corrupted, or the data is not compressed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    inflate(strm: ZStream, flush: CompressFlushMode): Promise<ReturnStatus>;

    /**
     * 初始化压缩流并设置指定压缩级别。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { CompressLevel } level - 参考[CompressLevel枚举定义]{@link zlib.CompressLevel}。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deflateInit(strm: ZStream, level: CompressLevel): Promise<ReturnStatus>;

    /**
     * 初始化压缩流并设置压缩级别、压缩方法、窗口大小、内存级别和压缩策略。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { CompressLevel } level - 参考[CompressLevel枚举定义]{@link zlib.CompressLevel}。
     * @param { CompressMethod } method - 参考[CompressMethod枚举定义]{@link zlib.CompressMethod}。
     * @param { int } windowBits - 控制内存窗口的大小，并指定数据的格式（zlib、gzip、raw deflate）。取值如下：<br />zlib格式：[1, 15]。<br />gzip格式：大于15
     *     。<br />raw deflate格式：[-15, -1]。
     * @param { MemLevel } memLevel - 参考[MemLevel枚举定义]{@link zlib.MemLevel}。
     * @param { CompressStrategy } strategy - 参考[CompressStrategy枚举定义]{@link zlib.CompressStrategy}。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deflateInit2(strm: ZStream, level: CompressLevel, method: CompressMethod, windowBits: int,
        memLevel: MemLevel, strategy: CompressStrategy): Promise<ReturnStatus>;

    /**
     * 压缩数据。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { CompressFlushMode } flush - 参考[CompressFlushMode定义]{@link zlib.CompressFlushMode}。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @throws { BusinessError } 17800007 - The input buffer is incorrect, and the output buffer is too small to
     *     accommodate the compressed or decompressed data.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deflate(strm: ZStream, flush: CompressFlushMode): Promise<ReturnStatus>;

    /**
     * 解压流的所有动态分配的数据结构都被释放。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deflateEnd(strm: ZStream): Promise<ReturnStatus>;

    /**
     * 计算压缩大小的上限。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { long } sourceLength - 源数据长度。
     * @returns { Promise<int> } Promise对象。返回压缩大小的上限。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deflateBound(strm: ZStream, sourceLength: long): Promise<int>;

    /**
     * 当deflateInit2()请求gzip流时，提供gzip标头信息。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { GzHeader } head - 从压缩数据流中提取的gzip头信息。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deflateSetHeader(strm: ZStream, head: GzHeader): Promise<ReturnStatus>;

    /**
     * 复制压缩流。使用Promise异步回调。
     *
     * @param { Zip } source - 参考[Zip定义]{@link zlib.Zip}。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deflateCopy(source: Zip): Promise<ReturnStatus>;

    /**
     * 从给定的字节序列初始化压缩字典。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { ArrayBuffer } dictionary - 字典数据。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deflateSetDictionary(strm: ZStream, dictionary: ArrayBuffer): Promise<ReturnStatus>;

    /**
     * 获取当前压缩流中使用的解压缩字典内容及其长度。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { ArrayBuffer } dictionary - 接收压缩字典的实际内容。
     * @returns { Promise<DictionaryOutputInfo> } Promise对象。返回结果状态和字典的长度。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deflateGetDictionary(strm: ZStream, dictionary: ArrayBuffer): Promise<DictionaryOutputInfo>;

    /**
     * 微调deflate的内部压缩参数。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { int } goodLength - 匹配的长度阈值。
     * @param { int } maxLazy - 压缩算法在构建哈夫曼树时的延迟匹配策略，取值范围为0到4的整数。1到4，值越大，算法越‘懒’，匹配过程越慢，但可能生成更优的压缩结果。0：禁用懒惰匹配，
     *     算法会尽快构建哈夫曼树，压缩速度快，但压缩率低。
     * @param { int } niceLength - 适合的延迟长度阈值。
     * @param { int } maxChain - 最大链条长度。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deflateTune(strm: ZStream, goodLength: int, maxLazy: int, niceLength: int, maxChain: int): Promise<ReturnStatus>;

    /**
     * 这个函数相当于先调用deflateEnd再调用deflateInit，但是并不会释放和重新分配内部解压缩状态。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deflateReset(strm: ZStream): Promise<ReturnStatus>;

    /**
     * 重置初始化的deflate压缩流，但保留其设置的压缩参数和字典。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deflateResetKeep(strm: ZStream): Promise<ReturnStatus>;

    /**
     * 返回已生成但尚未在可用输出中提供的输出的字节数和位数。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @returns { Promise<DeflatePendingOutputInfo> } Promise对象。返回结果状态、输出位数和输出字节数。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deflatePending(strm: ZStream): Promise<DeflatePendingOutputInfo>;

    /**
     * 动态更新压缩级别和压缩策略。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { CompressLevel } level - 参考[CompressLevel枚举定义]{@link zlib.CompressLevel}。
     * @param { CompressStrategy } strategy - 参考[CompressStrategy枚举定义]{@link zlib.CompressStrategy}。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deflateParams(strm: ZStream, level: CompressLevel, strategy: CompressStrategy): Promise<ReturnStatus>;

    /**
     * 在压缩流中插入位和值。使用Promise异步回调。
     *
     * @param { ZStream } strm - 参考[ZStream定义]{@link zlib.ZStream}。
     * @param { int } bits - 要插入的位数，取值范围在0~16。
     * @param { int } value - 与位数相对应的位值。
     * @returns { Promise<ReturnStatus> } Promise对象。返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deflatePrime(strm: ZStream, bits: int, value: int): Promise<ReturnStatus>;
  }

  /**
   * Gzip相关接口。
   *
   * @syscap SystemCapability.BundleManager.Zlib
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface GZip {

    /**
     * 将gzFile与文件描述符fd相关联，打开文件，用于进行读取并解压缩，或者压缩并写入。使用Promise异步回调。
     *
     * @param { int } fd - 文件描述符。通常情况下，通过系统调用“open”或其他方法获得的。
     * @param { string } mode - 用于指定访问模式。详情与[gzopen]{@link zlib.GZip.gzopen}一致。
     * @returns { Promise<void> } Promise对象，无返回值。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800002 - No such file or access mode error.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzdopen(fd: int, mode: string): Promise<void>;

    /**
     * 为当前库函数设置内部缓冲区尺寸。
     *
     * @param { long } size - 需要设置的内部缓冲区尺寸。
     * @returns { Promise<int> } Promise对象，成功时，返回0。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800009 - Internal structure error.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzbuffer(size: long): Promise<int>;

    /**
     * 打开位于指定路径的gzip(.gz)文件，用于进行读取并解压缩，或者压缩并写入。使用Promise异步回调。
     *
     * @param { string } path - 需要打开的文件路径。
     * @param { string } mode - 指定文件打开方法。<br>基础模式（必须三选一）：<br/>-?“r”或“rb”：读取模式，自动检测并解压gzip文件（若非gzip格式则直接读取原始数据）。<br/>-?
     *     “w”或“wb”：写入模式，创建新文件并压缩数据。<br/>-?“a”或“ab”：追加模式，在现有文件末尾追加新的gzip流（不校验原文件格式）。<br/>可选功能参数（可组合使用）：<br/>-?压缩级别：0（不压
     *     缩）至9（最佳压缩），默认压缩级别为6，需要配合写入模式或者追加模式使用。<br/>-?压缩策略：“f”（过滤策略）、“h”（霍夫曼策略）、“R”（游标编码策略）、“F”（固定编码策略），只能选取一种压缩策略。
     *     <br/>- 透明模式：“T”，写入时不压缩且不生成gzip头（生成普通文件），与压缩策略互斥。<br/>-?独占创建：“x”，如果文件存在则打开失败，需要配合写入模式或者追加模式使用<br/>-?
     *     close-on-exec标志：“e”，设置文件描述符的FD_CLOEXEC属性（依赖系统支持）。<br/>模式字符串示例：<br/>-?“r”：读取模式，读取时以二进制形式读取。<br/>-?“rb”：读取模式，读
     *     取时以二进制形式读取。<br/>-“wb6”：写入模式，压缩时以二进制形式写入，压缩级别为6。<br/>-?“wb9f”：写入模式，压缩时以二进制形式写入，压缩级别为最佳压缩，压缩策略采用过滤策略。<br/>-?
     *     “wbT”：写入模式，不压缩，生成普通文件。<br/>-?“wbx”：写入模式，压缩时以二进制形式写入，采用独占创建的方式写入文件。<br/>-?“abx”：追加模式，压缩时以二进制形式追加并写入，采用独占创建的方式
     *     写入文件。
     * @returns { Promise<void> } Promise对象，无返回值。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800002 - No such file or access mode error.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzopen(path: string, mode: string): Promise<void>;

    /**
     * 检查gzip压缩文件的读取位置是否已到达文件的末尾。使用Promise异步回调。
     *
     * @returns { Promise<int> } Promise对象，如果在读取时设置了文件的文件结束指示符，则返回1。
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzeof(): Promise<int>;

    /**
     * 检查指定的gzip文件句柄文件是否直接访问原始未压缩数据，重新分配缓冲区。使用Promise异步回调。
     *
     * @returns { Promise<int> } Promise对象，如果直接访问原始未压缩数据，则返回1。
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzdirect(): Promise<int>;

    /**
     * 清除文件的所有挂起输出，如有必要，关闭文件和释放（解）压缩状态。使用Promise异步回调。
     *
     * @returns { Promise<ReturnStatus> } Promise对象，返回结果状态。
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @throws { BusinessError } 17800006 - Memory allocation failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzclose(): Promise<ReturnStatus>;

    /**
     * 清除文件的错误和文件结束标志。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回值。
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzclearerr(): Promise<void>;

    /**
     * 文件上发生的最后一个错误的错误消息。使用Promise异步回调。
     *
     * @returns { Promise<GzErrorOutputInfo> } Promise对象，返回结果状态和出现的最后一个状态的状态消息。
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzerror(): Promise<GzErrorOutputInfo>;

    /**
     * 从文件中读取并解压缩一个字节。使用Promise异步回调。
     *
     * @returns { Promise<int> } Promise对象，返回读取字符的ASCII值。
     * @throws { BusinessError } 17800009 - Internal structure error.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzgetc(): Promise<int>;

    /**
     * 将所有挂起的输出刷新到文件中。使用Promise异步回调。
     *
     * @param { CompressFlushMode } flush - 控制刷新操作的行为，参考[CompressFlushMode枚举]{@link zlib.CompressFlushMode}的定义。
     * @returns { Promise<ReturnStatus> } Promise对象，返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzflush(flush: CompressFlushMode): Promise<ReturnStatus>;

    /**
     * 将大小为size，数量为nitems的数据块从buf压缩并写入文件。使用Promise异步回调。
     *
     * @param { ArrayBuffer } buf - 要将数据写入的缓冲区。
     * @param { long } size - 单个数据块中的字节数。
     * @param { long } nitems - 要写入的数据块数。
     * @returns { Promise<long> } Promise对象，返回写入大小为size的完整数据块的数目。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800009 - Internal structure error.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzfwrite(buf: ArrayBuffer, size: long, nitems: long): Promise<long>;

    /**
     * 从gzip压缩文件中解压缩并读取数据。使用Promise异步回调。
     *
     * @param { ArrayBuffer } buf - 用于存储读取结果的目标缓冲区。
     * @param { long } size - 单个数据块中的字节数。
     * @param { long } nitems - 要写入的数据块数。
     * @returns { Promise<long> } Promise对象，返回读取大小为size的完整数据块的数目。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800009 - Internal structure error.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzfread(buf: ArrayBuffer, size: long, nitems: long): Promise<long>;

    /**
     * 与gzclose()功能相同，仅适用于写入或追加时。使用Promise异步回调。
     *
     * @returns { Promise<ReturnStatus> } Promise对象，返回结果状态。
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @throws { BusinessError } 17800006 - Memory allocation failed.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzclosew(): Promise<ReturnStatus>;

    /**
     * 与gzclose()功能相同，仅适用于读取时。使用Promise异步回调。
     *
     * @returns { Promise<ReturnStatus> } Promise对象，返回结果状态。
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzcloser(): Promise<ReturnStatus>;

    /**
     * 将buf中的len长度的未压缩字节进行压缩并将其写入文件。使用Promise异步回调。
     *
     * @param { ArrayBuffer } buf - 对象指向要写入的数据缓冲区。
     * @param { long } len - 未压缩字节长度。
     * @returns { Promise<long> } Promise对象，返回写入的未压缩字节数。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800009 - Internal structure error.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzwrite(buf: ArrayBuffer, len: long): Promise<long>;

    /**
     * 将c推回到流中，以便在下次读取文件时将作为第一个字符读取。使用Promise异步回调。
     *
     * @param { int } c - 回退到输入流之前的字符。
     * @returns { Promise<int> } Promise对象，返回推送的字符。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800009 - Internal structure error.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzungetc(c: int): Promise<int>;

    /**
     * 返回文件中下一个gzread或gzwrite的起始位置。使用Promise异步回调。
     *
     * @returns { Promise<long> } Promise对象，返回文件种下一个gzread或gzwrite的起始位置。
     * @throws { BusinessError } 17800009 - Internal structure error.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gztell(): Promise<long>;

    /**
     * 动态更新文件的压缩级别和压缩策略。使用Promise异步回调。
     *
     * @param { CompressLevel } level - 压缩级别，参考[CompressLevel枚举定义]{@link zlib.CompressLevel}。
     * @param { CompressStrategy } strategy - 压缩策略，参考[CompressStrategy枚举定义]{@link zlib.CompressStrategy}。
     * @returns { Promise<ReturnStatus> } Promise对象，返回结果状态。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzsetparams(level: CompressLevel, strategy: CompressStrategy): Promise<ReturnStatus>;

    /**
     * 将起始位置设置为相对于文件中下一个gzread或gzwrite的偏移位置。使用Promise异步回调。
     *
     * @param { long } offset - 目标偏移位置。
     * @param { OffsetReferencePoint } whence - 定义偏移的参考点，参考[OffsetReferencePoint枚举定义]{@link zlib.OffsetReferencePoint}。
     * @returns { Promise<long> } Promise对象，返回从未压缩流开始以字节为单位测量的结果偏移位置。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800009 - Internal structure error.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzseek(offset: long, whence: OffsetReferencePoint): Promise<long>;

    /**
     * 将文件指针重新定位到文件的开头，此功能仅用于读取。使用Promise异步回调。
     *
     * @returns { Promise<ReturnStatus> } Promise对象，返回结果状态。
     * @throws { BusinessError } 17800009 - Internal structure error.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzrewind(): Promise<ReturnStatus>;

    /**
     * 从文件中读取最多len个未压缩字节并将其解压缩到buf中。使用Promise异步回调。
     *
     * @param { ArrayBuffer } buf - 目标偏移位置。
     * @returns { Promise<long> } Promise对象，返回实际读取的未压缩字节数。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800009 - Internal structure error.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzread(buf: ArrayBuffer): Promise<long>;

    /**
     * 压缩给定的以null结尾的字符串并将其写入文件，不包括终止的null字符。使用Promise异步回调。
     *
     * @param { string } str - 格式化描述符和纯文本。
     * @returns { Promise<int> } Promise对象，返回写入的字符数。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800009 - Internal structure error.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzputs(str: string): Promise<int>;

    /**
     * 将转换为无符号字符的c压缩并写入文件。使用Promise异步回调。
     *
     * @param { int } ch - 写入字符ASCII。
     * @returns { Promise<int> } Promise对象，返回已写入的值。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800009 - Internal structure error.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzputc(ch: int): Promise<int>;

    /**
     * 在字符串格式的控制下，将参数转换和格式化后，压缩并写入文件，如fprintf中所示。使用Promise异步回调。
     *
     * @param { string } format - 格式化描述符和纯文本。
     * @param { Array<string | double> } args - Variable argument lists.
     * @returns { Promise<int> } Return the number of uncompressed bytes actually written.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800004 - Compression or decompression stream error, which may be caused by an
     *     initialization error in the zlib stream structure or a modified structure.
     * @throws { BusinessError } 17800009 - Internal structure error.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzprintf(format: string, ...args: Array<string | double>): Promise<int>;

    /**
     * 返回文件的当前压缩（实际）读或写偏移量。使用Promise异步回调。
     *
     * @returns { Promise<long> } Promise对象，返回文件的当前压缩（实际）读或写偏移量。
     * @throws { BusinessError } 17800009 - Internal structure error.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzoffset(): Promise<long>;

    /**
     * 从文件中读取字节并将其解压缩到buf中，直到读取len-1字符，或者直到读取换行符并将其传输到buf，或者遇到文件结束条件。使用Promise异步回调。
     *
     * @param { ArrayBuffer } buf - 存储读取的行数据。
     * @returns { Promise<string> } Promise对象，返回以null结尾的字符串。
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes: 1. Mandatory parameters are left
     *     unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 17800009 - Internal structure error.
     * @syscap SystemCapability.BundleManager.Zlib
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    gzgets(buf: ArrayBuffer): Promise<string>;
  }
}

export default zlib;