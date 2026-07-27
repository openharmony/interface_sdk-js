/*
 * Copyright (C) 2021-2026 Huawei Device Co., Ltd.
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
 * @file RPC通信
 * @kit IPCKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * 本模块提供进程间通信能力，包括设备内的进程间通信（IPC）和设备间的进程间通信（RPC），前者基于Binder驱动，后者基于软总线驱动。
 *
 * @syscap SystemCapability.Communication.IPC.Core
 * @atomicservice [since 26.0.0]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace rpc {
  /**
   * 从API version 9起，IPC支持异常返回功能。错误码对应数值及含义如下，详细说明请参见[ohos.rpc错误码](docroot://reference/apis-ipc-kit/errorcode-rpc.md)。
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 9 dynamic
   * @since 23 static
   */
  enum ErrorCode {
    /**
     * 检查参数失败。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    CHECK_PARAM_ERROR = 401,

    /**
     * 执行系统调用mmap失败。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    OS_MMAP_ERROR = 1900001,

    /**
     * 在共享内存文件描述符上执行系统调用ioctl失败。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    OS_IOCTL_ERROR = 1900002,

    /**
     * 向共享内存写数据失败。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WRITE_TO_ASHMEM_ERROR = 1900003,

    /**
     * 从共享内存读数据失败。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    READ_FROM_ASHMEM_ERROR = 1900004,

    /**
     * 只有proxy对象允许该操作。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    ONLY_PROXY_OBJECT_PERMITTED_ERROR = 1900005,

    /**
     * 只有remote对象允许该操作。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    ONLY_REMOTE_OBJECT_PERMITTED_ERROR = 1900006,

    /**
     * 和远端对象进行进程间通信失败。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    COMMUNICATION_ERROR = 1900007,

    /**
     * 非法的代理对象或者远端对象。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    PROXY_OR_REMOTE_OBJECT_INVALID_ERROR = 1900008,

    /**
     * 向MessageSequence写数据失败。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR = 1900009,

    /**
     * 读取MessageSequence数据失败。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    READ_DATA_FROM_MESSAGE_SEQUENCE_ERROR = 1900010,

    /**
     * 序列化过程中内存分配失败。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    PARCEL_MEMORY_ALLOC_ERROR = 1900011,

    /**
     * 执行JS回调方法失败。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    CALL_JS_METHOD_ERROR = 1900012,

    /**
     * 执行系统调用dup失败。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    OS_DUP_ERROR = 1900013
  }

  /**
   * 从API version 12起，IPC新增[writeArrayBuffer]{@link rpc.MessageSequence#writeArrayBuffer}和
   * [readArrayBuffer]{@link rpc.MessageSequence#readArrayBuffer}方法传递ArrayBuffer数据，传递数据时通过具体类型值来分辨业务是以哪一种TypedArray去进行数据
   * 的读写。类型码对应数值及含义如下。
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum TypeCode {
    /**
     * TypedArray类型为INT8_ARRAY，数据将以8位有符号整数格式进行读写，每个元素占用1字节。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    INT8_ARRAY = 0,

    /**
     * TypedArray类型为UINT8_ARRAY，数据将以8位无符号整数格式进行读写，每个元素占用1字节。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    UINT8_ARRAY = 1,

    /**
     * TypedArray类型为INT16_ARRAY，数据将以16位有符号整数格式进行读写，每个元素占用2字节。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    INT16_ARRAY = 2,

    /**
     * TypedArray类型为UINT16_ARRAY，数据将以16位无符号整数格式进行读写，每个元素占用2字节。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    UINT16_ARRAY = 3,

    /**
     * TypedArray类型为INT32_ARRAY，数据将以32位有符号整数格式进行读写，每个元素占用4字节。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    INT32_ARRAY = 4,

    /**
     * TypedArray类型为UINT32_ARRAY，数据将以32位无符号整数格式进行读写，每个元素占用4字节。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    UINT32_ARRAY = 5,

    /**
     * TypedArray类型为FLOAT32_ARRAY，数据将以32位单精度浮点数格式进行读写，每个元素占用4字节。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    FLOAT32_ARRAY = 6,

    /**
     * TypedArray类型为FLOAT64_ARRAY，数据将以64位双精度浮点数格式进行读写，每个元素占用8字节。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    FLOAT64_ARRAY = 7,

    /**
     * TypedArray类型为BIGINT64_ARRAY，数据将以64位大整数格式进行读写，每个元素占用8字节。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BIGINT64_ARRAY = 8,

    /**
     * TypedArray类型为BIGUINT64_ARRAY，数据将以64位无符号大整数格式进行读写，每个元素占用8字节。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BIGUINT64_ARRAY = 9
  }

  /**
   * 在RPC过程中，发送方可以使用MessageParcel提供的写方法，将待发送的数据以特定格式写入该对象。接收方可以使用MessageParcel提供的读方法从该对象中读取特定格式的数据。数据格式包括：基础类型及数组、IPC对象、
   * 接口描述符和自定义序列化对象。
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead rpc.MessageSequence
   */
  class MessageParcel {
    /**
     * 静态方法，创建MessageParcel对象。
     *
     * @returns { MessageParcel } 返回创建的MessageParcel对象，用于在IPC过程中封装请求和响应数据。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence.create()
     */
    static create(): MessageParcel;

    /**
     * 释放不再使用的MessageParcel对象。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#reclaim()
     */
    reclaim(): void;

    /**
     * 序列化远程对象并将其写入MessageParcel对象。
     *
     * @param { IRemoteObject } object - 要序列化并写入MessageParcel的远程对象。
     * @returns { boolean } true：操作成功，false：操作失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeRemoteObject(obj: IRemoteObject)
     */
    writeRemoteObject(object: IRemoteObject): boolean;

    /**
     * 从MessageParcel读取远程对象。此方法用于反序列化MessageParcel对象以生成IRemoteObject。远程对象按写入MessageParcel的顺序读取。
     *
     * @returns { IRemoteObject } 读取到的远程对象，用于IPC/RPC通信。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readRemoteObject()
     */
    readRemoteObject(): IRemoteObject;

    /**
     * 将接口描述符写入MessageParcel对象，远端对象可使用该信息校验本次通信。
     *
     * @param { string } token - 字符串类型描述符，其长度应小于40960。
     * @returns { boolean } true：操作成功，false：操作失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeInterfaceToken(token: string)
     */
    writeInterfaceToken(token: string): boolean;

    /**
     * 从MessageParcel中读取接口描述符，接口描述符按写入MessageParcel的顺序读取，本地对象可使用该信息检验本次通信。
     *
     * @returns { string } 返回读取到的接口描述符。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readInterfaceToken()
     */
    readInterfaceToken(): string;

    /**
     * 获取当前MessageParcel的数据大小。
     *
     * @returns { number } 获取的MessageParcel的数据大小。以字节为单位。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#getSize()
     */
    getSize(): number;

    /**
     * 获取当前MessageParcel的容量。
     *
     * @returns { number } 获取的MessageParcel的容量大小。以字节为单位。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#getCapacity()
     */
    getCapacity(): number;

    /**
     * 设置MessageParcel实例中包含的数据大小。
     *
     * @param { number } size - MessageParcel实例的数据大小。以字节为单位。
     * @returns { boolean } true：设置成功，false：设置失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#setSize(size: int)
     */
    setSize(size: number): boolean;

    /**
     * 设置MessageParcel实例的存储容量。
     *
     * @param { number } size - MessageParcel实例的存储容量。以字节为单位。
     * @returns { boolean } true：设置成功，false：设置失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#setCapacity(size: int)
     */
    setCapacity(size: number): boolean;

    /**
     * 获取MessageParcel的可写字节空间。
     *
     * @returns { number } 获取到的MessageParcel的可写字节空间。以字节为单位。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#getWritableBytes()
     */
    getWritableBytes(): number;

    /**
     * 获取MessageParcel的可读字节空间。
     *
     * @returns { number } 获取到的MessageParcel的可读字节空间。以字节为单位。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#getReadableBytes()
     */
    getReadableBytes(): number;

    /**
     * 获取MessageParcel的读位置。
     *
     * @returns { number } 返回MessageParcel实例中的当前读取位置。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#getReadPosition()
     */
    getReadPosition(): number;

    /**
     * 获取MessageParcel的写位置。
     *
     * @returns { number } 返回MessageParcel实例中的当前写入位置。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#getWritePosition()
     */
    getWritePosition(): number;

    /**
     * 重新偏移读取位置到指定的位置。
     *
     * @param { number } pos - 开始读取数据的目标位置。
     * @returns { boolean } true：读取位置发生更改，false：读取位置未发生更改。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#rewindRead(pos: int)
     */
    rewindRead(pos: number): boolean;

    /**
     * 重新偏移写位置到指定的位置。
     *
     * @param { number } pos - 开始写入数据的目标位置。
     * @returns { boolean } true：写入位置发生更改，false：写入位置未发生更改。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#rewindWrite(pos: int)
     */
    rewindWrite(pos: number): boolean;

    /**
     * 向MessageParcel写入“指示未发生异常”的信息。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeNoException()
     */
    writeNoException(): void;

    /**
     * 从MessageParcel中读取异常。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readException()
     */
    readException(): void;

    /**
     * 将字节值写入MessageParcel实例。
     *
     * @param { number } val - 要写入的字节值。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeByte(val: int)
     */
    writeByte(val: number): boolean;

    /**
     * 将短整数值写入MessageParcel实例。
     *
     * @param { number } val - 要写入的短整数值。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeShort(val: int)
     */
    writeShort(val: number): boolean;

    /**
     * 将整数值写入MessageParcel实例。
     *
     * @param { number } val - 要写入的整数值。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeInt(val: int)
     */
    writeInt(val: number): boolean;

    /**
     * 将长整数值写入MessageParcel实例。
     *
     * @param { number } val - 要写入的长整数值。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeLong(val: long)
     */
    writeLong(val: number): boolean;

    /**
     * 将双精度浮点值写入MessageParcel实例。
     *
     * @param { number } val - 要写入的双精度浮点值。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeFloat(val: double)
     */
    writeFloat(val: number): boolean;

    /**
     * 将双精度浮点值写入MessageParcel实例。
     *
     * @param { number } val - 要写入的双精度浮点值。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeDouble(val: double)
     */
    writeDouble(val: number): boolean;

    /**
     * 将布尔值写入MessageParcel实例。
     *
     * @param { boolean } val - 要写入的布尔值。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeBoolean(val: boolean)
     */
    writeBoolean(val: boolean): boolean;

    /**
     * 将单个字符值写入MessageParcel实例。
     *
     * @param { number } val - 要写入的单个字符值。取值范围：[0, 65535]，对应Unicode字符编码范围。超出此范围可能导致字符编码异常。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeChar(val: int)
     */
    writeChar(val: number): boolean;

    /**
     * 将字符串值写入MessageParcel实例。
     *
     * @param { string } val - 要写入的字符串值，其长度应小于40960。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeString(val: string)
     */
    writeString(val: string): boolean;

    /**
     * 将自定义序列化对象写入MessageParcel实例。
     *
     * @param { Sequenceable } val - 要写入的可序列对象。建议实现marshalling和unmarshalling方法时确保数据完整性，序列化与反序列化的数据结构应保持一致。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeParcelable(val: Parcelable)
     */
    writeSequenceable(val: Sequenceable): boolean;

    /**
     * 将字节数组写入MessageParcel实例。
     *
     * @param { number[] } byteArray - 要写入的字节数组。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeByteArray(byteArray: int[])
     */
    writeByteArray(byteArray: number[]): boolean;

    /**
     * 将短整数数组写入MessageParcel实例。
     *
     * @param { number[] } shortArray - 要写入的短整数数组。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeShortArray(shortArray: int[])
     */
    writeShortArray(shortArray: number[]): boolean;

    /**
     * 将整数数组写入MessageParcel实例。
     *
     * @param { number[] } intArray - 要写入的整数数组。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeIntArray(intArray: int[])
     */
    writeIntArray(intArray: number[]): boolean;

    /**
     * 将长整数数组写入MessageParcel实例。
     *
     * @param { number[] } longArray - 要写入的长整数数组。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeLongArray(longArray: long[])
     */
    writeLongArray(longArray: number[]): boolean;

    /**
     * 将双精度浮点数组写入MessageParcel实例。
     *
     * @param { number[] } floatArray - 要写入的双精度浮点数组。由于系统内部对float类型的数据是按照double处理的，使用时对于数组所占的总字节数应按照double类型来计算。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeFloatArray(floatArray: double[])
     */
    writeFloatArray(floatArray: number[]): boolean;

    /**
     * 将双精度浮点数组写入MessageParcel实例。
     *
     * @param { number[] } doubleArray - 要写入的双精度浮点数组。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeDoubleArray(doubleArray: double[])
     */
    writeDoubleArray(doubleArray: number[]): boolean;

    /**
     * 将布尔数组写入MessageParcel实例。
     *
     * @param { boolean[] } booleanArray - 要写入的布尔数组。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeBooleanArray(booleanArray: boolean[])
     */
    writeBooleanArray(booleanArray: boolean[]): boolean;

    /**
     * 将单个字符数组写入MessageParcel实例。
     *
     * @param { number[] } charArray - 要写入的单个字符数组。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeCharArray(charArray: int[])
     */
    writeCharArray(charArray: number[]): boolean;

    /**
     * 将字符串数组写入MessageParcel实例。
     *
     * @param { string[] } stringArray - 要写入的字符串数组，数组单个元素的长度应小于40960。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeStringArray(stringArray: string[])
     */
    writeStringArray(stringArray: string[]): boolean;

    /**
     * 将可序列化对象数组写入MessageParcel实例。
     *
     * @param { Sequenceable[] } sequenceableArray - 要写入的可序列化对象数组。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeParcelableArray(parcelableArray: Parcelable[])
     */
    writeSequenceableArray(sequenceableArray: Sequenceable[]): boolean;

    /**
     * 将IRemoteObject对象数组写入MessageParcel。
     *
     * @param { IRemoteObject[] } objectArray - 要写入MessageParcel的IRemoteObject对象数组。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeRemoteObjectArray(objectArray: IRemoteObject[])
     */
    writeRemoteObjectArray(objectArray: IRemoteObject[]): boolean;

    /**
     * 从MessageParcel实例中读取字节值。
     *
     * @returns { number } 返回字节值。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readByte()
     */
    readByte(): number;

    /**
     * 从MessageParcel实例中读取短整数值。
     *
     * @returns { number } 返回短整数值。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readShort()
     */
    readShort(): number;

    /**
     * 从MessageParcel实例中读取整数值。
     *
     * @returns { number } 返回整数值。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readInt()
     */
    readInt(): number;

    /**
     * 从MessageParcel实例中读取长整数值。
     *
     * @returns { number } 返回长整数值。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readLong()
     */
    readLong(): number;

    /**
     * 从MessageParcel实例中读取双精度浮点值。
     *
     * @returns { number } 返回双精度浮点值。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readFloat()
     */
    readFloat(): number;

    /**
     * 从MessageParcel实例中读取双精度浮点值。
     *
     * @returns { number } 返回双精度浮点值。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readDouble()
     */
    readDouble(): number;

    /**
     * 从MessageParcel实例中读取布尔值。
     *
     * @returns { boolean } 返回读取到的布尔值。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readBoolean()
     */
    readBoolean(): boolean;

    /**
     * 从MessageParcel实例中读取单个字符值。
     *
     * @returns { number } 返回单个字符值。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readChar()
     */
    readChar(): number;

    /**
     * 从MessageParcel实例中读取字符串值。
     *
     * @returns { string } 返回字符串值。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readString()
     */
    readString(): string;

    /**
     * 从MessageParcel实例中读取成员变量到指定的对象（dataIn）。
     *
     * @param { Sequenceable } dataIn - 需要从MessageParcel读取成员变量的对象。
     * @returns { boolean } true：反序列化成功，false：反序列化失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readParcelable(dataIn: Parcelable)
     */
    readSequenceable(dataIn: Sequenceable): boolean;

    /**
     * 从MessageParcel实例中读取字节数组，并将其写入到创建的空数组中。
     *
     * @param { number[] } dataIn - 要读取的字节数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readByteArray(dataIn: int[])
     */
    readByteArray(dataIn: number[]): void;

    /**
     * 从MessageParcel实例中读取字节数组。
     *
     * @returns { number[] } 返回字节数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readByteArray()
     */
    readByteArray(): number[];

    /**
     * 从MessageParcel实例中读取短整数数组，并将其写入到创建的空数组中。
     *
     * @param { number[] } dataIn - 要读取的短整数数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readShortArray(dataIn: int[])
     */
    readShortArray(dataIn: number[]): void;

    /**
     * 从MessageParcel实例中读取短整数数组。
     *
     * @returns { number[] } 返回短整数数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readShortArray()
     */
    readShortArray(): number[];

    /**
     * 从MessageParcel实例中读取整数数组，并将其写入到创建的空数组中。
     *
     * @param { number[] } dataIn - 要读取的整数数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readIntArray(dataIn: int[])
     */
    readIntArray(dataIn: number[]): void;

    /**
     * 从MessageParcel实例中读取整数数组。
     *
     * @returns { number[] } 返回整数数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readIntArray()
     */
    readIntArray(): number[];

    /**
     * 从MessageParcel实例中读取长整数数组，并将其写入到创建的空数组中。
     *
     * @param { number[] } dataIn - 要读取的长整数数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readLongArray(dataIn: long[])
     */
    readLongArray(dataIn: number[]): void;

    /**
     * 从MessageParcel实例中读取长整数数组。
     *
     * @returns { number[] } 返回长整数数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readLongArray()
     */
    readLongArray(): number[];

    /**
     * 从MessageParcel实例中读取双精度浮点数组，并将其写入到创建的空数组中。
     *
     * @param { number[] } dataIn - 要读取的双精度浮点数组。由于系统内部对float类型的数据是按照double处理的，使用时对于数组所占的总字节数应按照double类型来计算。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readFloatArray(dataIn: double[])
     */
    readFloatArray(dataIn: number[]): void;

    /**
     * 从MessageParcel实例中读取双精度浮点数组。
     *
     * @returns { number[] } 返回双精度浮点数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readFloatArray()
     */
    readFloatArray(): number[];

    /**
     * 从MessageParcel实例中读取双精度浮点数组，并将其写入到创建的空数组中。
     *
     * @param { number[] } dataIn - 要读取的双精度浮点数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readDoubleArray(dataIn: double[])
     */
    readDoubleArray(dataIn: number[]): void;

    /**
     * 从MessageParcel实例中读取双精度浮点数组。
     *
     * @returns { number[] } 返回双精度浮点数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readDoubleArray()
     */
    readDoubleArray(): number[];

    /**
     * 从MessageParcel实例中读取布尔数组，并将其写入到创建的空数组中。
     *
     * @param { boolean[] } dataIn - 要读取的布尔数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readBooleanArray(dataIn: boolean[])
     */
    readBooleanArray(dataIn: boolean[]): void;

    /**
     * 从MessageParcel实例中读取布尔数组。
     *
     * @returns { boolean[] } 返回布尔数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readBooleanArray()
     */
    readBooleanArray(): boolean[];

    /**
     * 从MessageParcel实例中读取单个字符数组，并将其写入到创建的空数组中。
     *
     * @param { number[] } dataIn - 要读取的单个字符数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readCharArray(dataIn: int[])
     */
    readCharArray(dataIn: number[]): void;

    /**
     * 从MessageParcel实例中读取单个字符数组。
     *
     * @returns { number[] } 返回单个字符数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readCharArray()
     */
    readCharArray(): number[];

    /**
     * 从MessageParcel实例中读取字符串数组，并将其写入到创建的空数组中。
     *
     * @param { string[] } dataIn - 要读取的字符串数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readStringArray(dataIn: string[])
     */
    readStringArray(dataIn: string[]): void;

    /**
     * 从MessageParcel实例中读取字符串数组。
     *
     * @returns { string[] } 返回字符串数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readStringArray()
     */
    readStringArray(): string[];

    /**
     * 从MessageParcel实例中读取可序列化对象数组。
     *
     * @param { Sequenceable[] } sequenceableArray - 要读取的可序列化对象数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readParcelableArray(parcelableArray: Parcelable[])
     */
    readSequenceableArray(sequenceableArray: Sequenceable[]): void;

    /**
     * 从MessageParcel读取IRemoteObject对象数组，并将其写入到创建的空数组中。
     *
     * @param { IRemoteObject[] } objects - 从MessageParcel读取的IRemoteObject对象数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readRemoteObjectArray(objects: IRemoteObject[])
     */
    readRemoteObjectArray(objects: IRemoteObject[]): void;

    /**
     * 从MessageParcel读取IRemoteObject对象数组。
     *
     * @returns { IRemoteObject[] } 返回IRemoteObject对象数组。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readRemoteObjectArray(objects: IRemoteObject[])
     */
    readRemoteObjectArray(): IRemoteObject[];

    /**
     * 静态方法，关闭给定的文件描述符。
     *
     * @param { number } fd - 要关闭的文件描述符。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence.closeFileDescriptor(fd: int)
     */
    static closeFileDescriptor(fd: number): void;

    /**
     * 静态方法，复制给定的文件描述符。
     *
     * @param { number } fd - 表示已存在的文件描述符。
     * @returns { number } 返回新的文件描述符。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence.dupFileDescriptor(fd: int)
     */
    static dupFileDescriptor(fd: number): number;

    /**
     * 检查此MessageParcel对象是否包含文件描述符。
     *
     * @returns { boolean } true：包含文件描述符，false：未包含文件描述符。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#containFileDescriptors()
     */
    containFileDescriptors(): boolean;

    /**
     * 写入文件描述符到MessageParcel。
     *
     * @param { number } fd - 文件描述符。
     * @returns { boolean } true：操作成功，false：操作失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeFileDescriptor(fd: int)
     */
    writeFileDescriptor(fd: number): boolean;

    /**
     * 从MessageParcel中读取文件描述符。
     *
     * @returns { number } 返回文件描述符。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readFileDescriptor()
     */
    readFileDescriptor(): number;

    /**
     * 将指定的匿名共享对象写入此MessageParcel。
     *
     * @param { Ashmem } ashmem - 要写入MessageParcel的匿名共享对象。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeAshmem(ashmem: Ashmem)
     */
    writeAshmem(ashmem: Ashmem): boolean;

    /**
     * 从MessageParcel读取匿名共享对象。
     *
     * @returns { Ashmem } 返回匿名共享对象。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readAshmem()
     */
    readAshmem(): Ashmem;

    /**
     * 获取MessageParcel可以容纳的最大原始数据量。
     *
     * @returns { number } 返回MessageParcel可以容纳的最大原始数据量，即128MB。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#getRawDataCapacity()
     */
    getRawDataCapacity(): number;

    /**
     * 将原始数据写入MessageParcel对象。
     *
     * @param { number[] } rawData - 要写入的原始数据，大小不能超过128MB。
     * @param { number } size - 发送的原始数据大小，以字节为单位。
     * @returns { boolean } true：写入成功，false：写入失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeRawDataBuffer(rawData: ArrayBuffer, size: int)
     */
    writeRawData(rawData: number[], size: number): boolean;

    /**
     * 从MessageParcel读取原始数据。
     *
     * @param { number } size - 要读取的原始数据的大小，以字节为单位。
     * @returns { number[] } 返回原始数据（以字节为单位）。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readRawDataBuffer(size: int)
     */
    readRawData(size: number): number[];
  }

  /**
   * 在RPC或IPC过程中，发送方可以使用MessageSequence提供的写方法，将待发送的数据以特定格式写入该对象。接收方可以使用MessageSequence提供的读方法从该对象中读取特定格式的数据。数据格式包括：基础类型及数
   * 组、IPC对象、接口描述符和自定义序列化对象。读取顺序必须与写入顺序一致，否则会导致数据解析错误。
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @atomicservice [since 26.0.0]
   * @since 9 dynamic
   * @since 23 static
   */
  class MessageSequence {
    /**
     * 静态方法，创建MessageSequence对象。调用此方法后，系统会在内存中分配一块连续的缓冲区空间，用于存储待传输的序列化数据。该对象在IPC/RPC通信中用于封装请求和响应数据。
     * 
     * - 创建的MessageSequence对象必须在使用完毕后调用reclaim()释放资源，否则会导致内存泄漏。
     * - MessageSequence对象不能跨线程使用。
     * - 建议在需要IPC/RPC通信时按需创建，避免频繁创建和释放。
     *
     * @returns { MessageSequence } 返回创建的MessageSequence对象。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    static create(): MessageSequence;

    /**
     * 释放不再使用的MessageSequence对象。
     * 
     * - 必须与create()方法配对使用，调用create()创建MessageSequence对象后，必须在使用完毕后调用reclaim()释放资源。未及时调用reclaim()会导致内存资源泄漏。
     * - 调用后对象不能再被使用。
     * - 建议在finally块或任务结束时调用，确保资源释放。
     * - 不要在异步操作中跨线程释放。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    reclaim(): void;

    /**
     * 序列化远程对象并将其写入[MessageSequence]{@link rpc.MessageSequence}对象。调用此方法后，IRemoteObject对象会被序列化为特定格式并存入MessageSequence的缓冲区
     * 中，同时会更新内部写指针位置。该序列化对象可在接收端通过readRemoteObject方法反序列化读取。
     * 
     * - 只能写入有效的IRemoteObject对象，传入无效对象会抛出异常。
     * - 序列化后的对象占用固定大小的缓冲区空间。
     * - 写入的对象必须与对应的readRemoteObject方法配对使用。
     *
     * @param { IRemoteObject } obj - 要序列化并写入MessageSequence的远程对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeRemoteObject(obj: IRemoteObject): void;

    /**
     * 从MessageSequence读取远程对象。此方法用于反序列化MessageSequence对象以生成IRemoteObject。远程对象按写入MessageSequence的顺序读取。调用此方法后，会从
     * MessageSequence缓冲区中读取已序列化的远程对象数据，并反序列化为IRemoteObject实例。读取操作会更新内部读指针位置。
     * 
     * - 读取前应确保缓冲区中有可读数据。
     * - 如果写入的是RemoteObject，读取得到的是RemoteProxy。
     * - 读取失败时会抛出异常，建议使用try-catch捕获。
     *
     * @returns { IRemoteObject } 读取到的远程对象，用于IPC/RPC通信。
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readRemoteObject(): IRemoteObject;

    /**
     * 将接口描述符写入MessageSequence对象，远端对象可使用该信息校验本次通信。适用于需要验证通信双方接口一致性的场景，如跨进程服务调用、安全通信验证以及标识服务端提供的接口类型。建议使用唯一且有意义的描述符字符串（如"
     * com.example.service"），避免使用敏感信息，长度应小于40960。调用此方法后，接口描述符字符串会被序列化并存入MessageSequence缓冲区。远端在接收到通信请求后，可读取该描述符来验证请求来源的合法
     * 性。
     * 
     * - 必须与[readInterfaceToken]{@link rpc.MessageSequence#readInterfaceToken}配对使用。
     * - 长度超过限制会抛出参数错误异常。
     *
     * @param { string } token - 字符串类型描述符，用于本次通信的接口身份校验。远端对象可使用该信息验证本次通信的合法性。其长度应小于40960。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The string length is greater than or equal to 40960;
     *     4.The number of bytes copied to the buffer is different from the length of the obtained string.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeInterfaceToken(token: string): void;

    /**
     * 从MessageSequence对象中读取接口描述符，接口描述符按写入MessageSequence的顺序读取，本地对象可使用该信息检验本次通信。
     * 
     * - 必须与[writeInterfaceToken]{@link rpc.MessageSequence#writeInterfaceToken}配对使用。
     * - 读取前应确保缓冲区中有可读数据。
     * - 建议在收到IPC请求后立即读取校验。
     *
     * @returns { string } 返回读取到的接口描述符。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readInterfaceToken(): string;

    /**
     * 获取当前创建的MessageSequence对象的数据大小。
     * 
     * - 查看已写入数据的总大小。
     * - 判断缓冲区使用情况。
     * - 在数据传输前检查数据大小。
     *
     * @returns { int } 获取的MessageSequence实例的数据大小。以字节为单位。用于调整数据读取范围，建议设置为实际写入数据的大小。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getSize(): int;

    /**
     * 获取当前MessageSequence对象的容量大小。
     *
     * @returns { int } 获取的MessageSequence实例的容量大小。以字节为单位。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getCapacity(): int;

    /**
     * 设置MessageSequence对象中包含的数据大小。
     *
     * @param { int } size - MessageSequence实例的数据大小。以字节为单位。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    setSize(size: int): void;

    /**
     * 设置MessageSequence对象的存储容量。
     *
     * @param { int } size - MessageSequence实例的存储容量。以字节为单位。用于限制可写入数据的最大字节数，建议根据实际数据量合理设置。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @throws { BusinessError } 1900011 - Memory allocation failed.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    setCapacity(size: int): void;

    /**
     * 获取MessageSequence的可写字节空间大小。
     *
     * @returns { int } 获取到的MessageSequence实例的可写字节空间。以字节为单位。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getWritableBytes(): int;

    /**
     * 获取MessageSequence的可读字节空间。
     *
     * @returns { int } 获取到的MessageSequence实例的可读字节空间。以字节为单位。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getReadableBytes(): int;

    /**
     * 获取MessageSequence的读位置。
     *
     * @returns { int } 返回MessageSequence实例中的当前读取位置。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getReadPosition(): int;

    /**
     * 获取MessageSequence的写位置。
     *
     * @returns { int } 返回MessageSequence实例中的当前写入位置。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getWritePosition(): int;

    /**
     * 重新偏移读取位置到指定的位置。
     *
     * @param { int } pos - 开始读取数据的目标位置，以字节为单位。用于重新定位MessageSequence的读指针，值应在
     *     [0, [getSize]{@link rpc.MessageSequence#getSize}]范围内。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    rewindRead(pos: int): void;

    /**
     * 重新偏移写位置到指定的位置。
     *
     * @param { int } pos - 开始写入数据的目标位置，以字节为单位。用于重新定位MessageSequence的写指针，值应在
     *     [0, [getSize]{@link rpc.MessageSequence#getSize}]范围内。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    rewindWrite(pos: int): void;

    /**
     * 向MessageSequence写入“指示未发生异常”的信息。通常在IPC/RPC通信的服务端实现以及onRemoteMessageRequest回调中调用。
     * 
     * - 此方法与[readException]{@link rpc.MessageSequence#readException}方法配对使用。
     * - 服务端在处理请求完成后，应调用writeNoException()写入未发生异常的信息。
     * - 客户端在收到响应后，应调用[readException]{@link rpc.MessageSequence#readException}读取异常信息。
     * - 如果服务端未调用writeNoException()，客户端调用[readException]{@link rpc.MessageSequence#readException}会读取失败。
     *
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeNoException(): void;

    /**
     * 从MessageSequence中读取异常。适用于接收远端服务响应后检查异常状态的场景。
     * 
     * - 在IPC/RPC通信的客户端使用。
     * - 在调用sendMessageRequest收到响应后调用。
     * - 在每次IPC/RPC调用后优先调用此方法。
     * - 如有异常立即处理并终止后续数据读取，异常处理后建议调用reclaim()释放MessageSequence对象。
     * - 此方法与[writeNoException]{@link rpc.MessageSequence#writeNoException}方法配对使用。
     * - 调用顺序：服务端处理请求 → [writeNoException]{@link rpc.MessageSequence#writeNoException} → 客户端收到响应 → 
     * [readException]{@link rpc.MessageSequence#readException} - 如果服务端未调用
     * [writeNoException]{@link rpc.MessageSequence#writeNoException}，调用此方法会失败。
     *
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readException(): void;

    /**
     * 将字节值写入MessageSequence实例。调用此方法后，字节值会被以8位无符号整数形式存入缓冲区当前写指针位置，并自动更新写指针。该方法适用于传输小范围整数或标志位数据。
     * 
     * - 存储范围:0-255(无符号)或-128-127(有符号)。
     * - 数据对齐方式为字节对齐。
     * - 数值必须在字节范围内，超出范围可能导致数据截断。
     * - 读取时必须使用[readByte]{@link rpc.MessageSequence#readByte}方法配对读取。
     * - 不适合传输大范围数值，大范围数值建议使用[writeInt]{@link rpc.MessageSequence#writeInt}/
     * [writeLong]{@link rpc.MessageSequence#writeLong}等。
     *
     * @param { int } val - 要写入的字节值。取值范围[0, 255]。超出此范围时，数值会被自动截断为8位，可能导致数据精度丢失。建议传入前先检查数值范围。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeByte(val: int): void;

    /**
     * 将短整数值写入MessageSequence实例。
     * 
     * - 超出范围会导致数据截断。
     * - 必须与[readShort]{@link rpc.MessageSequence#readShort}配对使用。
     * - 一次写入对应一次读取。
     *
     * @param { int } val - 要写入的短整数值。取值范围：[-2^15, 2^15-1]。适用于传输小范围整数数据(如端口号、标识ID等)。超出此范围会导致数据截断或写入失败。对于0-255范围建议使用
     *     writeByte，对于标准整数建议使用writeInt，对于大整数建议使用writeLong。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeShort(val: int): void;

    /**
     * 将整数值写入MessageSequence实例。 调用此方法后，整数值会被以32位有符号整数形式存入缓冲区当前写指针位置，并自动更新写指针。该方法适用于传输标准整数数据。对于小范围数值建议使用
     * [writeByte]{@link rpc.MessageSequence#writeByte}/[writeShort]{@link rpc.MessageSequence#writeShort}提高效率；对于大范围数值建议
     * 使用[writeLong]{@link rpc.MessageSequence#writeLong}。
     * 
     * - 必须与[readInt]{@link rpc.MessageSequence#readInt}配对使用。
     * - 一次写入对应一次读取
     * - 占用4字节(32位)存储空间。
     * - 采用系统默认字节序存储。
     * - 超出范围会导致数据截断或写入失败。
     *
     * @param { int } val - 要写入的整数值。取值范围：[-2^31, 2^31-1]。适用于传输标准整数数据(如计数器、索引值、配置参数等)。超出此范围会导致数据截断或写入失败。对于小范围数值(0-255或-12
     *     8-127)建议使用writeByte提高效率，对于小范围整数(-32768-32767)建议使用writeShort，对于大整数建议使用writeLong。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    writeInt(val: int): void;

    /**
     * 将长整数值写入MessageSequence实例。
     * 
     * - 必须与[readLong]{@link rpc.MessageSequence#readLong}配对使用。
     * - 一次写入对应一次读取。
     *
     * @param { long } val - 要写入的长整数值。取值范围：[-2^63, 2^63-1]。超出此范围会导致数据截断或写入失败。建议根据数值范围选择合适的类型(writeByte/writeShort/
     *     writeInt/writeLong)以提高传输效率。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeLong(val: long): void;

    /**
     * 将双精度浮点值写入MessageSequence实例。由于系统内部对float类型的数据是按照double处理的，实际写入的数据按双精度格式存储。
     *
     * @param { double } val - 要写入的双精度浮点值。适用于传输浮点数据(如坐标、比例、测量值等)。必须与[readFloat]{@link rpc.MessageSequence#readFloat}配对使
     *     用。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeFloat(val: double): void;

    /**
     * 将双精度浮点值写入MessageSequence实例。
     *
     * - 必须与[readDouble]{@link rpc.MessageSequence#readDouble}配对使用。
     * - 一次写入对应一次读取。
     *
     * @param { double } val - 要写入的双精度浮点值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeDouble(val: double): void;

    /**
     * 将布尔值写入MessageSequence实例。
     * 
     * - 必须与[readBoolean]{@link rpc.MessageSequence#readBoolean}配对使用。
     * - 一次写入对应一次读取。
     *
     * @param { boolean } val - 要写入的布尔值，true表示逻辑真，false表示逻辑假，写入后将占用1字节存储空间。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeBoolean(val: boolean): void;

    /**
     * 将单个字符值写入MessageSequence实例。
     * 
     * - 必须与[readChar]{@link rpc.MessageSequence#readChar}配对使用。
     * - 一次写入对应一次读取。
     *
     * @param { int } val - 要写入的单个字符值。取值范围：[0, 65535]，对应Unicode字符编码范围。超出此范围可能导致字符编码异常。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeChar(val: int): void;

    /**
     * 将字符串值写入MessageSequence实例。调用此方法后，字符串会被序列化存入缓冲区。写入时会先存储字符串长度，再存储字节数据。
     * 
     * - 此方法与[readString]{@link rpc.MessageSequence#readString}方法配对使用。
     * - 先写入长度，再写入内容。
     * - 支持多语言字符集。
     * - 长度信息便于[readString]{@link rpc.MessageSequence#readString}确定读取边界。
     * - 注意区分字符数和字节数，中文字符占用更多字节。
     * - 长字符串会占用较多缓冲区空间。
     * - 空字符串也可以正常写入。
     *
     * @param { string } val - 要写入的字符串值，其长度应小于40960。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The string length is greater than or equal to 40960;
     *     4.The number of bytes copied to the buffer is different from the length of the obtained string.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    writeString(val: string): void;

    /**
     * 将自定义序列化对象写入MessageSequence实例。调用此方法后，会调用Parcelable对象的marshalling方法，将对象的成员变量逐个序列化写入MessageSequence。该方法支持传输自定义数据结构对象
     * 适用于传输复杂数据结构、业务对象、配置信息等场景。
     * 
     * - Parcelable接口定义了序列化和反序列化的标准方法。
     * - marshalling负责将对象状态写入MessageSequence。
     * - unmarshalling负责从MessageSequence恢复对象状态。
     * - 业务需自行实现具体的序列化逻辑。
     * - 必须传入实现了Parcelable接口的对象。
     * - marshalling方法必须正确实现所有成员变量的写入。
     * - 序列化顺序必须与反序列化顺序一致。
     * - 建议在marshalling中处理异常情况。
     * - 复杂对象可能占用较多缓冲区空间。
     *
     * @param { Parcelable } val - 要写入的可序列对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeParcelable(val: Parcelable): void;

    /**
     * 将字节数组写入MessageSequence实例。
     * 
     * - 必须与[readByteArray]{@link rpc.MessageSequence#readByteArray(dataIn: int[])}配对使用。
     * - 读取数组长度必须与写入数组长度一致。
     *
     * @param { int[] } byteArray - 要写入的字节数组，用于批量传输字节序列数据。数组不能为空，每个元素取值范围[0, 255]。超出范围可能导致数据截断。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array.
     *     5.The type of the element in the array is incorrect.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeByteArray(byteArray: int[]): void;

    /**
     * 将短整数数组写入MessageSequence实例。
     * 
     * - 必须与[readShortArray]{@link rpc.MessageSequence#readShortArray(dataIn: int[])}配对使用。
     * - 读取数组长度必须与写入数组长度一致。
     *
     * @param { int[] } shortArray - 要写入的短整数数组。数组元素取值范围[-2^15, 2^15-1]。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array;
     *     5.The type of the element in the array is incorrect.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeShortArray(shortArray: int[]): void;

    /**
     * 将整数数组写入MessageSequence实例。
     * 
     * - 必须与[readIntArray]{@link rpc.MessageSequence#readIntArray(dataIn: int[])}配对使用。
     * - 读取数组长度必须与写入数组长度一致。
     *
     * @param { int[] } intArray - 要写入的整数数组。数组元素的取值范围：[-2^31, 2^31-1]，超出此范围会导致数据截断或写入失败。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array;
     *     5.The type of the element in the array is incorrect.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeIntArray(intArray: int[]): void;

    /**
     * 将长整数数组写入MessageSequence实例。
     * 
     * - 必须与[readLongArray]{@link rpc.MessageSequence#readLongArray(dataIn: long[])}配对使用。
     * - 读取数组长度必须与写入数组长度一致。
     *
     * @param { long[] } longArray - 要写入的长整数数组，每个元素为64位整数。超出范围会导致数据截断。建议使用BigInt处理超大数值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array;
     *     5.The type of the element in the array is incorrect.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeLongArray(longArray: long[]): void;

    /**
     * 将双精度浮点数组写入MessageSequence实例。
     * 
     * - 必须与[readFloatArray]{@link rpc.MessageSequence#readFloatArray(dataIn: double[])}配对使用。
     * - 读取数组长度必须与写入数组长度一致。
     *
     * @param { double[] } floatArray - 要写入的双精度浮点数组。由于系统内部对float类型的数据是按照double处理的，使用时对于数组所占的总字节数应按照double类型来计算。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array;
     *     5.The type of the element in the array is incorrect.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeFloatArray(floatArray: double[]): void;

    /**
     * 将双精度浮点数组写入MessageSequence实例。
     * 
     * - 必须与[readDoubleArray]{@link rpc.MessageSequence#readDoubleArray(dataIn: double[])}配对使用。
     * - 读取数组长度必须与写入数组长度一致。
     *
     * @param { double[] } doubleArray - 要写入的双精度浮点数组。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array;
     *     5.The type of the element in the array is incorrect.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeDoubleArray(doubleArray: double[]): void;

    /**
     * 将布尔数组写入MessageSequence实例。
     * 
     * - 必须与[readBooleanArray]{@link rpc.MessageSequence#readBooleanArray(dataIn: boolean[])}配对使用。
     * - 读取数组长度必须与写入数组长度一致。
     *
     * @param { boolean[] } booleanArray - 要写入的布尔数组。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeBooleanArray(booleanArray: boolean[]): void;

    /**
     * 将单个字符数组写入MessageSequence实例。
     * 
     * - 必须与[readCharArray]{@link rpc.MessageSequence#readCharArray(dataIn: int[])}配对使用。
     * - 读取数组长度必须与写入数组长度一致。
     *
     * @param { int[] } charArray - 要写入的单个字符数组。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeCharArray(charArray: int[]): void;

    /**
     * 将字符串数组写入MessageSequence实例。
     * 
     * - 必须与[readStringArray]{@link rpc.MessageSequence#readStringArray(dataIn: string[])}配对使用。
     * - 读取数组长度必须与写入数组长度一致。
     *
     * @param { string[] } stringArray - 要写入的字符串数组，数组单个元素的长度应小于40960。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The string length is greater than or equal to 40960;
     *     5.The number of bytes copied to the buffer is different from the length of the obtained string.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeStringArray(stringArray: string[]): void;

    /**
     * 将可序列化对象数组写入MessageSequence实例。适用于批量传输多个自定义数据结构对象的场景，如传输多条业务记录、批量配置信息、多个实体对象等。
     * 
     * - 必须与[readParcelableArray]{@link rpc.MessageSequence#readParcelableArray}配对使用。
     * - 读取数组长度必须与写入数组长度一致。
     *
     * @param { Parcelable[] } parcelableArray - 要写入的可序列化对象数组。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeParcelableArray(parcelableArray: Parcelable[]): void;

    /**
     * 将IRemoteObject对象数组写入MessageSequence。适用于需要传递多个远程对象的场景，如批量注册多个服务代理、传递多个回调接口、多服务端点管理等。
     * 
     * - 必须与[readRemoteObjectArray]{@link rpc.MessageSequence#readRemoteObjectArray(objects: IRemoteObject[])}配对使用。
     * - 读取数组长度必须与写入数组长度一致。
     *
     * @param { IRemoteObject[] } objectArray - 要写入MessageSequence的IRemoteObject对象数组。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The element does not exist in the array;
     *     5.The obtained remoteObject is null.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeRemoteObjectArray(objectArray: IRemoteObject[]): void;

    /**
     * 从MessageSequence实例中读取字节值。
     * 
     * - 必须与[writeByte]{@link rpc.MessageSequence#writeByte}配对使用。
     * - 一次写入对应一次读取。
     *
     * @returns { int } 返回字节值。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readByte(): int;

    /**
     * 从MessageSequence实例中读取短整数值。
     * 
     * - 必须与[writeShort]{@link rpc.MessageSequence#writeShort}配对使用。
     * - 注意写入时的取值范围[-2^15, 2^15-1]，超出此范围会导致数据截断。
     *
     * @returns { int } 返回短整数值。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readShort(): int;

    /**
     * 从MessageSequence实例中读取整数值。
     * 
     * - 整数值占用4字节存储空间。
     * - 存储范围：-2^31到2^31-1。
     *
     * @returns { int } 返回整数值。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    readInt(): int;

    /**
     * 从MessageSequence实例中读取长整数值。
     * 
     * - 取值范围：[-2^63, 2^63-1]。
     * - 长整数占用8字节存储空间。
     *
     * @returns { long } 返回长整数值。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readLong(): long;

    /**
     * 从MessageSequence实例中读取浮点值。由于系统内部对float类型的数据是按照double处理的，读取的数据按double精度返回。
     *
     * @returns { double } 返回双精度浮点值。由于系统内部对float类型的数据是按照double处理的，读取的数据按double精度返回。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readFloat(): double;

    /**
     * 从MessageSequence实例中读取双精度浮点值。
     * 
     * - 返回新创建的数组，无需预先创建。
     * - 数组元素为双精度浮点数。
     *
     * @returns { double } 返回双精度浮点值。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readDouble(): double;

    /**
     * 从MessageSequence实例中读取布尔值。
     *
     * @returns { boolean } 返回读取到的布尔值。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readBoolean(): boolean;

    /**
     * 从MessageSequence实例中读取单个字符值。
     *
     * @returns { int } 返回单个字符值。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readChar(): int;

    /**
     * 从MessageSequence实例中读取字符串值。
     * 
     * - 先读取长度，再读取内容。
     *
     * @returns { string } 返回字符串值。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    readString(): string;

    /**
     * 从MessageSequence实例中读取成员变量到指定的对象（dataIn）。
     * 
     * - dataIn参数必须为已实例化的Parcelable对象。
     * - unmarshalling方法必须按与marshalling相同的顺序读取。
     * - 反序列化顺序必须与序列化顺序一致。
     * - 建议在unmarshalling中处理异常情况。
     *
     * @param { Parcelable } dataIn - 需要从MessageSequence读取成员变量的对象，使用前请先实例化可序列化对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @throws { BusinessError } 1900012 - Failed to call the JS callback function.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readParcelable(dataIn: Parcelable): void;

    /**
     * 从MessageSequence实例中读取字节数组，并将其写入到创建的空数组中。读取后dataIn数组会被填充读取的字节数据，读指针向后移动相应字节数。
     *
     * @param { int[] } dataIn - 用于存储从MessageSequence读取的字节数组，需预先创建空数组且长度应与写入时的数组长度一致。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readByteArray(dataIn: int[]): void;

    /**
     * 从MessageSequence实例中读取字节数组。读取后返回字节数组数据，读指针向后移动相应字节数。
     *
     * @returns { int[] } 返回字节数组。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readByteArray(): int[];

    /**
     * 从MessageSequence实例中读取短整数数组，并将其写入到创建的空数组中。
     *
     * @param { int[] } dataIn - 用于存储从MessageSequence读取的短整数数组，需预先创建空数组且长度应与写入时的数组长度一致。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readShortArray(dataIn: int[]): void;

    /**
     * 从MessageSequence实例中读取短整数数组。
     *
     * @returns { int[] } 返回短整数数组。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readShortArray(): int[];

    /**
     * 从MessageSequence实例中读取整数数组，并将其写入到创建的空数组中。
     * 
     * - 需预先创建空数组且长度应与写入时的数组长度一致。
     * - 数组元素取值范围:[-2^31, 2^31-1]。
     *
     * @param { int[] } dataIn - 用于存储从MessageSequence读取的整数数组，需预先创建空数组且长度应与写入时的数组长度一致。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readIntArray(dataIn: int[]): void;

    /**
     * 从MessageSequence实例中读取整数数组。
     *
     * @returns { int[] } 返回整数数组。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readIntArray(): int[];

    /**
     * 从MessageSequence实例中读取长整数数组，并将其写入到创建的空数组中。
     *
     * @param { long[] } dataIn - 用于存储从MessageSequence读取的长整数数组，需预先创建空数组且长度应与写入时的数组长度一致。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readLongArray(dataIn: long[]): void;

    /**
     * 从MessageSequence实例中读取长整数数组。
     *
     * @returns { long[] } 返回长整数数组。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readLongArray(): long[];

    /**
     * 从MessageSequence实例中读取双精度浮点数组，并将其写入到创建的空数组中。
     *
     * @param { double[] } dataIn - 用于存储从MessageSequence读取的双精度浮点数组，需预先创建空数组且长度应与写入时的数组长度一致。由于系统内部对float类型的数据是按照double处理
     *     的，使用时对于数组所占的总字节数应按照double类型来计算。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readFloatArray(dataIn: double[]): void;

    /**
     * 从MessageSequence实例中读取双精度浮点数组。由于系统内部对float类型的数据是按照double处理的，使用时对于数组所占的总字节数应按照double类型来计算。
     *
     * @returns { double[] } 返回双精度浮点数组。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readFloatArray(): double[];

    /**
     * 从MessageSequence实例中读取双精度浮点数组，并将其写入到创建的空数组中。
     *
     * @param { double[] } dataIn - 用于存储从MessageSequence读取的双精度浮点数组，需预先创建空数组且长度应与写入时的数组长度一致。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readDoubleArray(dataIn: double[]): void;

    /**
     * 从MessageSequence实例中读取双精度浮点数组。由于系统内部对float类型的数据是按照double处理的，使用时对于数组所占的总字节数应按照double类型来计算。
     *
     * @returns { double[] } 返回双精度浮点数组。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readDoubleArray(): double[];

    /**
     * 从MessageSequence实例中读取布尔数组，并将其写入到创建的空数组中。
     *
     * @param { boolean[] } dataIn - 用于存储从MessageSequence读取的布尔数组，需预先创建空数组且长度应与写入时的数组长度一致。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readBooleanArray(dataIn: boolean[]): void;

    /**
     * 从MessageSequence实例中读取布尔数组。
     * 
     * - 返回新创建的数组，无需预先创建。
     * - 数组元素为布尔值。
     *
     * @returns { boolean[] } 返回布尔数组。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readBooleanArray(): boolean[];

    /**
     * 从MessageSequence实例中读取单个字符数组，并将其写入到创建的空数组中。
     *
     * @param { int[] } dataIn - 用于存储从MessageSequence读取的单个字符数组，需预先创建空数组且长度应与写入时的数组长度一致。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readCharArray(dataIn: int[]): void;

    /**
     * 从MessageSequence实例中读取单个字符数组。
     * 
     * - 返回新创建的数组，无需预先创建。
     * - 数组元素为字符编码，取值范围[0, 65535]。
     *
     * @returns { int[] } 返回单个字符数组。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readCharArray(): int[];

    /**
     * 从MessageSequence实例中读取字符串数组，并将其写入到创建的空数组中。
     * 
     * - 需预先创建空数组且长度应与写入时的数组长度一致。
     * - 读取后dataIn数组会被填充读取的字节数据。
     * - 读指针向后移动相应字节数。
     *
     * @param { string[] } dataIn - 要读取的字符串数组。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readStringArray(dataIn: string[]): void;

    /**
     * 从MessageSequence实例中读取字符串数组。
     * 
     * - 返回新创建的数组，无需预先创建。
     * - 数组单个元素的长度范围0-40959字节。
     *
     * @returns { string[] } 返回字符串数组。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readStringArray(): string[];

    /**
     * 从MessageSequence实例中读取可序列化对象数组。适用于接收批量传输的多个自定义数据结构对象的场景，如读取多条业务记录、批量配置信息、多个实体对象等。
     *
     * @param { Parcelable[] } parcelableArray - 要读取的可序列化对象数组，使用前请先实例化可序列化对象，且序列化与反序列化数组长度须一致。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The length of the array passed when reading is not equal to the length passed when writing to the array;
     *     5.The element does not exist in the array.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @throws { BusinessError } 1900012 - Failed to call the JS callback function.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readParcelableArray(parcelableArray: Parcelable[]): void;

    /**
     * 从MessageSequence读取IRemoteObject对象数组，并将其写入到创建的空数组中。适用于接收批量传递的多个远程对象的场景，如批量获取服务代理、接收多个回调接口、多服务端点管理等。
     * 
     * - 需预先创建空数组且长度应与写入时的数组长度一致。
     * - 读取失败时会抛出异常，建议使用try-catch捕获。
     *
     * @param { IRemoteObject[] } objects - 从MessageSequence读取的IRemoteObject对象数组，用于IPC/RPC通信，存储多个远程对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The length of the array passed when reading is not equal to the length passed when writing to the array.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readRemoteObjectArray(objects: IRemoteObject[]): void;

    /**
     * 从MessageSequence读取IRemoteObject对象数组。
     *
     * @returns { IRemoteObject[] } 返回IRemoteObject对象数组；当写入的是空数组时，返回的是nullptr。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readRemoteObjectArray(): IRemoteObject[];

    /**
     * 静态方法，关闭给定的文件描述符。
     * 
     * - 文件使用完毕后及时关闭，避免资源泄漏。
     * - 关闭前确保文件操作已完成。
     * - 不要关闭已关闭的文件描述符。
     * - 关闭后不能再读写文件。
     *
     * @param { int } fd - 要关闭的文件描述符。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    static closeFileDescriptor(fd: int): void;

    /**
     * 静态方法，复制给定的文件描述符。
     * 
     * - IPC传输前复制，避免原描述符被关闭。
     * - 多进程共享同一文件。
     * - 需要独立管理文件偏移量。
     * - 复制后两个描述符需要分别关闭。
     * - 不要复制无效的文件描述符。
     * - 复制后独立管理生命周期。
     *
     * @param { int } fd - 表示已存在的文件描述符。
     * @returns { int } 返回新的文件描述符。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900013 - Failed to call dup.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    static dupFileDescriptor(fd: int): int;

    /**
     * 检查此MessageSequence对象是否包含文件描述符。适用于文件传输场景中判断是否需要处理文件描述符，或在接收数据前检查数据类型以决定处理方式的场景。
     *
     * @returns { boolean } true：包含文件描述符，false：不包含文件描述符。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    containFileDescriptors(): boolean;

    /**
     * 写入文件描述符到MessageSequence。 调用此方法后，文件描述符会被封装并通过Binder机制跨进程传递。接收端可通过readFileDescriptor获取文件描述符并进行文件操作。
     * 
     * - 文件描述符通过Binder的FD传递机制跨进程传输。
     * - 接收端获得的是映射后的新文件描述符。
     * - 实际指向同一个文件资源。
     * - 支持普通文件、管道、socket等多种描述符。
     * - 文件描述符必须是有效的、已打开的描述符。
     * - 写入后原描述符仍然有效，需要业务自行管理。
     * - 建议使用dupFileDescriptor复制后再传递。
     * - 传递后接收端应及时使用，避免资源浪费。
     * - 读取后建议及时关闭，防止资源泄漏。
     *
     * @param { int } fd - 文件描述符，通常通过文件操作接口（如fileIo.open）获取。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeFileDescriptor(fd: int): void;

    /**
     * 从MessageSequence中读取文件描述符。接收端读取到的是映射后的新文件描述符编号，与发送端写入的描述符编号不同，但指向同一个文件资源。读取后建议及时使用并关闭，防止资源泄漏。如需长期使用，可调用
     * dupFileDescriptor复制描述符。
     * 
     * - 必须与[writeFileDescriptor]{@link rpc.MessageSequence#writeFileDescriptor}配对使用。
     * - 不要依赖源端的fd编号。
     * - 读取后需要管理生命周期。
     * - 建议及时使用避免资源浪费。
     * - 使用完毕后及时关闭。
     *
     * @returns { int } 返回文件描述符。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readFileDescriptor(): int;

    /**
     * 将指定的匿名共享对象写入此MessageSequence。
     * 
     * - 创建Ashmem对象：Ashmem.create()。
     * - 映射内存并写入数据：[mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem} + 
     * [writeDataToAshmem]{@link rpc.Ashmem#writeDataToAshmem}。
     * - 将Ashmem写入MessageSequence：writeAshmem()。
     * - 接收端读取Ashmem：[readAshmem]{@link rpc.MessageSequence#readAshmem}。
     * - 接收端映射内存并读取数据：mapReadWriteAshmem() + readDataFromAshmem()。
     * - 此方法与readAshmem()方法配对使用。
     * - 调用顺序：writeAshmem() → 传输MessageSequence → [readAshmem]{@link rpc.MessageSequence#readAshmem} → 
     * [mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem} → 
     * [readDataFromAshmem]{@link rpc.Ashmem#readDataFromAshmem}。
     * - 使用前需先创建Ashmem对象并写入数据。
     *
     * @param { Ashmem } ashmem - 要写入MessageSequence的匿名共享对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter is not an instance of the Ashmem object.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeAshmem(ashmem: Ashmem): void;

    /**
     * 从MessageSequence读取匿名共享对象。使用前需先调用[mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem}方法进行内存映射。
     * 
     * - readAshmem()获取对象。
     * - [mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem}映射内存。
     * - [readDataFromAshmem]{@link rpc.Ashmem#readDataFromAshmem}读取数据。
     * - unmapAshmem()取消映射。
     * - closeAshmem()关闭对象。
     * - 必须先映射才能读取数据。
     * - 数据读取后需要取消映射。
     * - 及时关闭避免内存泄漏。
     *
     * @returns { Ashmem } 返回匿名共享对象，用于跨进程共享内存数据。读取数据前需先调用[mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem}方法进行内存
     *     映射。
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readAshmem(): Ashmem;

    /**
     * 获取MessageSequence可以容纳的最大原始数据量。适用于大数据传输前检查容量是否满足需求，或在处理大批量数据时预先判断数据大小的场景。
     *
     * @returns { int } 返回MessageSequence可以容纳的最大原始数据量，即128MB。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getRawDataCapacity(): int;

    /**
     * 将原始数据写入MessageSequence对象。
     *
     * > **说明：**
     * >
     * > 该接口是一次性接口，不允许在一次parcel通信中多次调用该接口。
     * >
     * > 该接口在传输数据时，当数据量较大时（超过32KB），会使用共享内存传输数据，此时需注意selinux配置。
     *
     * @param { number[] } rawData - 要写入的原始数据，大小不能超过128MB。
     * @param { number } size - 发送的原始数据大小，以字节为单位。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The transferred size cannot be obtained;
     *     5.The transferred size is less than or equal to 0;
     *     6.The element does not exist in the array;
     *     7.Failed to obtain typedArray information;
     *     8.The array is not of type int32;
     *     9.The length of typedarray is smaller than the size of the original data sent.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead writeRawDataBuffer(rawData: ArrayBuffer, size: int)
     */
    writeRawData(rawData: number[], size: number): void;

    /**
     * 将原始数据写入MessageSequence对象。
     *
     * > **说明：**
     * >
     * > 该接口是一次性接口，不允许在一次parcel通信中多次调用该接口。
     * >
     * > 该接口在传输数据时，当数据量较大时（超过32KB），会使用共享内存传输数据，此时需注意selinux配置。
     *
     * @param { ArrayBuffer } rawData - 要写入的原始数据，大小不能超过128MB。
     * @param { int } size - 发送的原始数据大小，以字节为单位。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.Failed to obtain arrayBuffer information;
     *     4.The transferred size cannot be obtained;
     *     5.The transferred size is less than or equal to 0;
     *     6.The transferred size is greater than the byte length of ArrayBuffer.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 11 dynamic
     * @since 23 static
     */
    writeRawDataBuffer(rawData: ArrayBuffer, size: int): void;

    /**
     * 从MessageSequence读取原始数据。
     *
     * @param { number } size - 要读取的原始数据的大小，以字节为单位。
     * @returns { number[] } 返回原始数据（以字节为单位）。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead readRawDataBuffer(size: int)
     */
    readRawData(size: number): number[];

    /**
     * 从MessageSequence读取原始数据。
     * 
     * - 需与写入时的数据大小匹配。
     * - 该接口是一次性接口,不允许在一次parcel通信中多次调用。
     * - 大数据量传输时注意系统资源占用。
     * - 必须与[writeRawDataBuffer]{@link rpc.MessageSequence#writeRawDataBuffer}配对使用。
     *
     * @param { int } size - 要读取的原始数据的大小，以字节为单位，需与写入时的数据大小匹配。
     * @returns { ArrayBuffer } 返回原始数据（以字节为单位）。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 11 dynamic
     * @since 23 static
     */
    readRawDataBuffer(size: int): ArrayBuffer;

    /**
     * 将ArrayBuffer类型数据写入MessageSequence对象。
     * 
     * - 此方法与[readArrayBuffer]{@link rpc.MessageSequence#readArrayBuffer}方法配对使用。
     * - 写入的typeCode必须与读取的typeCode一致，否则会导致数据异常。
     * - 调用顺序：先调用writeArrayBuffer()写入数据 → 再调用[readArrayBuffer]{@link rpc.MessageSequence#readArrayBuffer}读取数据。
     * - typeCode参数决定了数据的写入和读取方式。
     * - 读写typeCode不匹配会导致数据解析错误。
     * - 必须根据实际数据类型选择正确的[TypeCode]{@link rpc.TypeCode}枚举值。
     *
     * @param { ArrayBuffer } buf - 要写入的ArrayBuffer数据，数据将根据typeCode指定的TypedArray类型进行格式化写入。
     * @param { TypeCode } typeCode - ArrayBuffer数据具体是以哪一种TypedArray来访问和操作(会根据业务传递的类型枚举值去决定底层的写入方式，需要业务正确传递枚举值。)
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The parameter is an empty array;
     *     2.The number of parameters is incorrect;
     *     3.The parameter type does not match;
     *     4.The obtained value of typeCode is incorrect;
     *     5.Failed to obtain arrayBuffer information.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    writeArrayBuffer(buf: ArrayBuffer, typeCode: TypeCode): void;

    /**
     * 从MessageSequence读取ArrayBuffer类型数据。
     * 
     * - 必须与[writeArrayBuffer]{@link rpc.MessageSequence#writeArrayBuffer}配对使用。
     * - 读取typeCode必须与写入typeCode一致，顺序必须匹配。
     * - typeCode必须正确匹配，不匹配会导致数据异常或错误，建议根据业务类型选择合适的[TypeCode]{@link rpc.TypeCode}。
     *
     * @param { TypeCode } typeCode - ArrayBuffer数据具体是以哪一种TypedArray来访问和操作(会根据业务传递的类型枚举值去决定底层的读取方式，需要业务正确传递枚举值，读写枚举值不匹配会
     *     导致数据异常。)
     * @returns { ArrayBuffer } 返回ArrayBuffer类型数据，用于存储从MessageSequence读取的二进制数据，可通过TypedArray进行访问和操作。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The obtained value of typeCode is incorrect;
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    readArrayBuffer(typeCode: TypeCode): ArrayBuffer;
  }

  /**
   * 在进程间通信（IPC）期间，将类的对象写入MessageParcel并从MessageParcel中恢复它们。
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead rpc.Parcelable
   */
  interface Sequenceable {
    /**
     * 将此可序列对象封送到MessageParcel中。
     *
     * @param { MessageParcel } dataOut - 可序列对象将被封送到的MessageParcel对象。
     * @returns { boolean } true：封送成功，false：封送失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.Parcelable#marshalling(dataOut: MessageSequence)
     */
    marshalling(dataOut: MessageParcel): boolean;

    /**
     * 从MessageParcel中解封此可序列对象。
     *
     * @param { MessageParcel } dataIn - 已将可序列对象封送到其中的MessageParcel对象。
     * @returns { boolean } true：反序列化成功，false：反序列化失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.Parcelable#unmarshalling(dataIn: MessageSequence)
     */
    unmarshalling(dataIn: MessageParcel): boolean;
  }

  /**
   * 在进程间通信（IPC）期间，将类的对象写入MessageSequence并从MessageSequence中恢复它们。
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 9 dynamic
   * @since 23 static
   */
  interface Parcelable {
    /**
     * 将此可序列对象封送到MessageSequence中。
     *
     * @param { MessageSequence } dataOut - 可序列对象将被封送到的MessageSequence对象。
     * @returns { boolean } true：封送成功，false：封送失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    marshalling(dataOut: MessageSequence): boolean;

    /**
     * 从MessageSequence中解封此可序列对象。
     *
     * @param { MessageSequence } dataIn - 已将可序列对象封送到其中的MessageSequence对象。
     * @returns { boolean } true：反序列化成功，false：反序列化失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    unmarshalling(dataIn: MessageSequence): boolean;
  }

  /**
   * 发送请求的响应结果。
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead rpc.RequestResult
   */
  interface SendRequestResult {
    /**
     * 错误码。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.RequestResult#errCode
     */
    errCode: number;

    /**
     * 消息代码。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.RequestResult#code
     */
    code: number;

    /**
     * 发送给对端进程的MessageParcel对象。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.RequestResult#data
     */
    data: MessageParcel;

    /**
     * 对端进程返回的MessageParcel对象。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.RequestResult#reply
     */
    reply: MessageParcel;
  }

  /**
   * 发送请求的响应结果。
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 9 dynamic
   * @since 23 static
   */
  interface RequestResult {
    /**
     * 错误码。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    errCode: int;

    /**
     * 消息代码。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    code: int;

    /**
     * 发送给对端进程的MessageSequence对象。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    data: MessageSequence;

    /**
     * 对端进程返回的MessageSequence对象。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    reply: MessageSequence;
  }

  /**
   * 该接口可用于查询或获取接口描述符、添加或删除死亡通知、转储对象状态到特定文件、发送消息。
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7 dynamic
   * @since 23 static
   */
  abstract class IRemoteObject {
    /**
     * 查询接口描述符的字符串。
     *
     * @param { string } descriptor - 接口描述符的字符串。
     * @returns { IRemoteBroker } 返回绑定到指定接口描述符的IRemoteBroker对象。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead getLocalInterface(descriptor: string)
     */
    queryLocalInterface(descriptor: string): IRemoteBroker;

    /**
     * 查询接口描述符的字符串。
     *
     * @param { string } descriptor - 接口描述符的字符串，其长度应小于40960。
     * @returns { IRemoteBroker } 返回绑定到指定接口描述符的IRemoteBroker对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The string length is greater than or equal to 40960;
     *     4.The number of bytes copied to the buffer is different from the length of the obtained string.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getLocalInterface(descriptor: string): IRemoteBroker;

    /**
     * 以同步或异步方式向对端进程发送MessageParcel消息。如果为选项设置了异步模式，则立即返回，reply报文里没有内容。如果为选项设置了同步模式，则将在sendRequest返回时收到回复，回复内容在reply报文里。
     *
     * @param { number } code - 本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。
     * @param { MessageParcel } data - 保存待发送数据的MessageParcel对象。
     * @param { MessageParcel } reply - 接收应答数据的MessageParcel对象。
     * @param { MessageOption } options - 本次请求的同异步模式，默认同步调用。
     * @returns { boolean } true：发送成功，false：发送失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead sendMessageRequest(code: int, data: MessageSequence, reply: MessageSequence, options: MessageOption)
     */
    sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean;

    /**
     * 以同步或异步方式向对端进程发送MessageParcel消息。如果为选项设置了异步模式，则发送请求的响应结果立即返回，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则发送请求的响应结果将
     * 在sendRequest返回时返回，回复内容在reply报文里。使用Promise异步回调。
     *
     * @param { number } code - 本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。
     * @param { MessageParcel } data - 保存待发送数据的MessageParcel对象。
     * @param { MessageParcel } reply - 接收应答数据的MessageParcel对象。
     * @param { MessageOption } options - 本次请求的同异步模式，默认同步调用。
     * @returns { Promise<SendRequestResult> } Promise对象，返回发送请求的响应结果。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sendMessageRequest(code: int, data: MessageSequence, reply: MessageSequence, options: MessageOption)
     */
    sendRequest(
      code: number,
      data: MessageParcel,
      reply: MessageParcel,
      options: MessageOption
    ): Promise<SendRequestResult>;

    /**
     * 以同步或异步方式向对端进程发送MessageSequence消息。如果为选项设置了异步模式，则发送请求的响应结果立即返回，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则发送请求的响应结
     * 果将在sendMessageRequest返回时返回，回复内容在reply报文里。使用Promise异步回调。
     *
     * @param { int } code - 本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。
     * @param {MessageSequence } data - 保存待发送数据的MessageSequence对象，需先通过create()方法创建并写入数据后方可使用。
     * @param {MessageSequence } reply - 接收应答数据的MessageSequence对象。异步模式下reply报文里没有内容，具体回复需在业务侧回调中获取；同步模式下回复内容在reply报文里。
     * @param { MessageOption } options - 本次请求的同异步模式，默认同步调用。
     * @returns { Promise<RequestResult> } Promise对象，返回发送请求的响应结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.Failed to obtain the passed object instance.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    sendMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption
    ): Promise<RequestResult>;

    /**
     * 以同步或异步方式向对端进程发送MessageParcel消息。使用callback异步回调。如果为选项设置了异步模式，则立即收到回调，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则将在
     * sendRequest返回时收到回调，回复内容在reply报文里。
     *
     * @param { number } code - 本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。
     * @param { MessageParcel } data - 保存待发送数据的MessageParcel对象。
     * @param { MessageParcel } reply - 接收应答数据的MessageParcel对象。
     * @param { MessageOption } options - 本次请求的同异步模式，默认同步调用。
     * @param { AsyncCallback<SendRequestResult> } callback - 接收发送结果的回调。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead sendMessageRequest(code: int, data: MessageSequence, reply: MessageSequence,
     *     options: MessageOption, callback: AsyncCallback<RequestResult>)
     */
    sendRequest(
      code: number,
      data: MessageParcel,
      reply: MessageParcel,
      options: MessageOption,
      callback: AsyncCallback<SendRequestResult>
    ): void;

    /**
     * 以同步或异步方式向对端进程发送MessageSequence消息。如果为选项设置了异步模式，则立即收到回调，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则将在sendRequest返回
     * 时收到回调，回复内容在reply报文里。
     *
     * @param {int } code - 本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。
     * @param { MessageSequence } data - 保存待发送数据的MessageSequence对象。
     * @param { MessageSequence } reply - 接收应答数据的MessageSequence对象。
     * @param { MessageOption } options - 本次请求的同异步模式，默认同步调用。
     * @param { AsyncCallback<RequestResult> } callback - 回调函数。当消息发送成功时，可从RequestResult中读取服务端返回的数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.Failed to obtain the passed object instance.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    sendMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption,
      callback: AsyncCallback<RequestResult>
    ): void;

    /**
     * 注册用于接收远程对象死亡通知的回调。
     *
     * @param { DeathRecipient } recipient - 要注册的回调。
     * @param { number } flags - 死亡通知标志。
     * @returns { boolean } true：回调注册成功，false：回调注册失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead registerDeathRecipient(recipient: DeathRecipient, flags: int)
     */
    addDeathRecipient(recipient: DeathRecipient, flags: number): boolean;

    /**
     * 注册用于接收远程对象死亡通知的回调。
     *
     * @param { DeathRecipient } recipient - 要注册的回调。
     * @param { int } flags - 死亡通知标志。保留参数，设置为0。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The callback used to receive remote object death notifications is empty.
     * @throws { BusinessError } 1900005 - Operation allowed only for the proxy object.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    registerDeathRecipient(recipient: DeathRecipient, flags: int): void;

    /**
     * 注销用于接收远程对象死亡通知的回调。
     *
     * @param { DeathRecipient } recipient - 要注销的回调。
     * @param { number } flags - 死亡通知标志。
     * @returns { boolean } true：回调注销成功，false：回调注销失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead unregisterDeathRecipient(recipient: DeathRecipient, flags: int)
     */
    removeDeathRecipient(recipient: DeathRecipient, flags: number): boolean;

    /**
     * 注销用于接收远程对象死亡通知的回调。
     *
     * @param { DeathRecipient } recipient - 要注销的回调。
     * @param { int } flags - 死亡通知标志。保留参数，设置为0。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The callback used to receive remote object death notifications is empty.
     * @throws { BusinessError } 1900005 - Operation allowed only for the proxy object.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    unregisterDeathRecipient(recipient: DeathRecipient, flags: int): void;

    /**
     * 获取对象的接口描述符，接口描述符为字符串。
     *
     * @returns { string } 返回接口描述符。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead getDescriptor()
     */
    getInterfaceDescriptor(): string;

    /**
     * 获取对象的接口描述符，接口描述符为字符串。
     *
     * @returns { string } 返回接口描述符。
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getDescriptor(): string;

    /**
     * 检查当前对象是否死亡。
     *
     * @returns { boolean } true：对象死亡，false：对象未死亡。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    isObjectDead(): boolean;
  }

  /**
   * 远端对象的代理持有者。用于获取代理对象。
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7 dynamic
   * @since 23 static
   */
  interface IRemoteBroker {
    /**
     * 需派生类实现，获取代理或远端对象。
     *
     * @returns { IRemoteObject } 如果调用者是RemoteObject对象，则直接返回本身；如果调用者是[RemoteProxy]{@link rpc.RemoteProxy}对象，则返回它的持有者
     *     [IRemoteObject]{@link rpc.IRemoteObject}。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    asObject(): IRemoteObject;
  }

  /**
   * Called to perform subsequent operations when a death notification of the remote object is received.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 23 static
   */
  type OnRemoteDiedFunc = () => void;

  /**
   * 用于订阅远端对象的死亡通知。当被订阅该通知的远端对象死亡时，本端可收到消息，调用[onRemoteDied]{@link rpc.DeathRecipient.onRemoteDied()}接口。远端对象死亡可以为远端对象所在进程
   * 死亡，远端对象所在设备关机或重启，当远端对象与本端对象属于不同设备时，也可为远端对象离开组网时。
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7 dynamic
   * @since 23 static
   */
  interface DeathRecipient {
    /**
     * 在成功添加死亡通知订阅后，当远端对象死亡时，将自动调用本方法。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     */
    onRemoteDied(): void;

    /**
     * Called to perform subsequent operations when a death notification of the remote object is received.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    onRemoteDied: OnRemoteDiedFunc;
  }

  /**
   * 公共消息选项，使用指定的标志类型，构造指定的MessageOption对象。
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @atomicservice [since 26.0.0]
   * @since 7 dynamic
   * @since 23 static
   */
  class MessageOption {
    /**
     * 同步调用标识。
     *
     * @default 0
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 7 dynamic
     */
    static readonly TF_SYNC: number;

    /**
     * Indicates synchronous call.
     *
     * @returns { int } Return vaule indicating synchronous call.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get TF_SYNC(): int;

    /**
     * 异步调用标识。
     *
     * @default 1
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 7 dynamic
     */
    static readonly TF_ASYNC: number;

    /**
     * Indicates asynchronous call.
     *
     * @returns { int } Return vaule indicating asynchronous call.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get TF_ASYNC(): int;

    /**
     * 指示
     * [sendMessageRequest]{@link rpc.IRemoteObject#sendMessageRequest( code: int, data: MessageSequence, reply: MessageSequence, options: MessageOption )}
     * 接口可以传递文件描述符。
     *
     * @default 16
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 7 dynamic
     */
    static readonly TF_ACCEPT_FDS: number;

    /**
     * Indicates the sendRequest API for returning the file descriptor.
     *
     * @returns { int } Return vaule indicating the sendRequest API for returning the file descriptor.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get TF_ACCEPT_FDS(): int;

    /**
     * RPC等待时间（单位：秒），IPC场景下无效。默认等待为8秒（不建议修改等待时间）。
     *
     * @default 4 [since 7 - 10]
     * @default 8 [since 11]
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 7 dynamic
     */
    static readonly TF_WAIT_TIME: number;

    /**
     * Indicates the wait time for RPC, in seconds. It is NOT used in IPC case.
     *
     * @returns { int } Return vaule indicating the wait time for RPC, in seconds. It is NOT used in IPC case.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get TF_WAIT_TIME(): int;

    /**
     * MessageOption构造函数。
     *
     * @param { number } syncFlags - 同步调用或异步调用标志。取值范围：{0, 1}。同步调用标志：0（当需要立即获取响应结果时选择）；异步调用标志：1（当不需要立即获取响应结果时选择）。不传入时默认为0
     *     （同步调用）。
     * @param { number } waitTime - 调用rpc最长等待时间（单位：秒）。<br/>默认值：8<br/>取值范围：(0, 3000]。当RPC调用耗时较长时，可适当增加等待时间；当需要快速响应时，可适当减少
     *     等待时间。不传入时使用默认等待时间8秒。
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 7 dynamic
     */
    constructor(syncFlags?: number, waitTime?: number);

    /**
     * MessageOption构造函数。
     *
     * @param { boolean } async - 是否异步调用。true表示异步调用（当不需要立即获取响应结果时选择），false表示同步调用（当需要立即获取响应结果时选择）。不传入时默认为false（同步调用）。
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 9 dynamic
     */
    constructor(async?: boolean);

    /**
     * A constructor used to create a MessageOption instance.
     *
     * @param { boolean } isAsync - Specifies whether the SendRequest is called synchronously (default) or
     *     asynchronously.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    constructor(isAsync: boolean);

    /**
     * A constructor used to create a MessageOption instance.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    constructor();

    /**
     * A constructor used to create a MessageOption instance.
     *
     * @param { int } syncFlags - Specifies whether the SendRequest is called synchronously (default) or asynchronously.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    constructor(syncFlags: int);

    /**
     * A constructor used to create a MessageOption instance.
     *
     * @param { int } syncFlags - Specifies whether the SendRequest is called synchronously (default) or asynchronously.
     * @param { int } waitTime - Maximum wait time for a RPC call, in seconds. The default value is **TF_WAIT_TIME**.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    constructor(syncFlags: int, waitTime: int);

    /**
     * 获取同步调用或异步调用标志。
     *
     * @returns { int } 调用成功返回同步调用或异步调用标志。同步调用标志：0，异步调用标志：1。
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 7 dynamic
     * @since 23 static
     */
    getFlags(): int;

    /**
     * 设置同步调用或异步调用标志。
     *
     * @param { int } flags - 同步调用或异步调用标志。取值范围：{0, 1}。同步调用标志：0；异步调用标志：1。
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 7 dynamic
     * @since 23 static
     */
    setFlags(flags: int): void;

    /**
     * 获取
     * [sendMessageRequest]{@link rpc.IRemoteObject#sendMessageRequest( code: int, data: MessageSequence, reply: MessageSequence, options: MessageOption )}
     * 调用中确定同步或是异步的标志。
     *
     * @returns { boolean } true：异步调用成功，false：同步调用成功。
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    isAsync(): boolean;

    /**
     * 设置
     * [sendMessageRequest]{@link rpc.IRemoteObject#sendMessageRequest( code: int, data: MessageSequence, reply: MessageSequence, options: MessageOption )}
     * 调用中确定同步或是异步的标志。
     *
     * @param { boolean } isAsync - true：表示异步调用标志，false：表示同步调用标志。
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    setAsync(isAsync: boolean): void;

    /**
     * 获取rpc调用的最长等待时间。
     *
     * @returns { int } rpc最长等待时间（单位：秒）。
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 7 dynamic
     * @since 23 static
     */
    getWaitTime(): int;

    /**
     * 设置rpc调用最长等待时间。
     *
     * @param { int } waitTime - rpc调用最长等待时间（单位：秒），取值范围：(0，3000]
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 7 dynamic
     * @since 23 static
     */
    setWaitTime(waitTime: int): void;
  }

  /**
   * IPC上下文信息，包括PID和UID、本端和对端设备ID、检查接口调用是否在同一设备上。
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 23 dynamic
   * @since 23 static
   */
  class CallingInfo {
    /**
     * 调用者的PID，仅IPC场景有效。
     *
     * @default -1
     * @syscap SystemCapability.Communication.IPC.Core
     * @FaAndStageModel
     * @since 23 dynamic
     */
    readonly callerPid: number;
    /**
     * Indicates the pid of caller.
     * callerPid is valid only when the {@link isLocalCalling} is true. Otherwise callerPid is invalid.
     *
     * @returns { int } Return the pid of caller.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    get callerPid(): int;

    /**
     * 调用者的UID，仅IPC场景有效。
     *
     * @default -1
     * @syscap SystemCapability.Communication.IPC.Core
     * @FaAndStageModel
     * @since 23 dynamic
     */
    readonly callerUid: number;
    /**
     * Indicates the uid of caller.
     * callerUid is valid only when the {@link isLocalCalling} is true. Otherwise callerUid is invalid.
     *
     * @returns { int } Return the uid of caller.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    get callerUid(): int;

    /**
     * 调用者的TokenId，仅IPC场景有效。
     *
     * @default -1
     * @syscap SystemCapability.Communication.IPC.Core
     * @FaAndStageModel
     * @since 23 dynamic
     */
    readonly callerTokenId: number;
    /**
     * Indicates the tokenId of caller.
     * callerTokenId is valid only when the {@link isLocalCalling} is true. Otherwise callerTokenId is invalid.
     *
     * @returns { long } Return the tokenId of caller.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    get callerTokenId(): long;

    /**
     * 对端设备的设备ID，仅RPC场景有效。
     *
     * @default
     * @syscap SystemCapability.Communication.IPC.Core
     * @FaAndStageModel
     * @since 23 dynamic
     */
    readonly remoteDeviceId: string;
    /**
     * Indicates the DeviceId of remote device.
     * remoteDeviceId is valid only when the {@link isLocalCalling} is false. Otherwise remoteDeviceId is invalid.
     *
     * @returns { string } Return the DeviceId of caller.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    get remoteDeviceId(): string;

    /**
     * 本端设备的设备ID，仅RPC场景有效。
     *
     * @default
     * @syscap SystemCapability.Communication.IPC.Core
     * @FaAndStageModel
     * @since 23 dynamic
     */
    readonly localDeviceId: string;
    /**
     * Indicates the DeviceId of local device.
     * localDeviceId is valid only when the {@link isLocalCalling} is false. Otherwise localDeviceId is invalid.
     *
     * @returns { string } Return the DeviceId of local device.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    get localDeviceId(): string;

    /**
     * 当前通信对端是否为本设备进程。true：调用在同一台设备（IPC场景），false：调用未在同一台设备（RPC场景）。
     *
     * @default true
     * @syscap SystemCapability.Communication.IPC.Core
     * @FaAndStageModel
     * @since 23 dynamic
     */
    readonly isLocalCalling: boolean;

    /**
     * Indicates whether the peer process is a process of the local device.
     *
     * @returns { boolean } Return {@code true} if the call is made on the same device; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    get isLocalCalling(): boolean;
  }

  /**
   * 实现远程对象。服务提供者必须继承此类。
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @atomicservice [since 26.0.0]
   * @since 7 dynamic
   * @since 23 static
   */
  class RemoteObject extends IRemoteObject {
    /**
     * RemoteObject构造函数。
     *
     * @param { string } descriptor - 接口描述符，其长度应小于40960。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    constructor(descriptor: string);

    /**
     * 查询并获取当前接口描述符对应的远端对象是否已经存在。
     *
     * @param { string } descriptor - 需要查询的接口描述符。
     * @returns { IRemoteBroker } 如果接口描述符对应的远端对象存在，则返回该远端对象，否则返回Null。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.IRemoteObject#getLocalInterface(descriptor: string)
     */
    queryLocalInterface(descriptor: string): IRemoteBroker;

    /**
     * 查询接口描述符的字符串。
     *
     * @param { string } descriptor - 接口描述符的字符串，其长度应小于40960。
     * @returns { IRemoteBroker } 返回绑定到指定接口描述符的IRemoteBroker对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The string length is greater than or equal to 40960;
     *     4.The number of bytes copied to the buffer is different from the length of the obtained string.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getLocalInterface(descriptor: string): IRemoteBroker;

    /**
     * 查询接口描述符。
     *
     * @returns { string } 返回接口描述符。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.IRemoteObject#getDescriptor()
     */
    getInterfaceDescriptor(): string;

    /**
     * 获取对象的接口描述符。接口描述符为字符串。
     *
     * @returns { string } 返回接口描述符。
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getDescriptor(): string;

    /**
     * sendMessageRequest请求的响应处理函数，服务端在该函数里同步或异步地处理请求，回复结果。
     * 
     * > **说明：**
     * >
     * >开发者应优先选择重写onRemoteMessageRequest方法，其中可以自由实现同步和异步的消息处理。
     * >
     * >开发者同时重写onRemoteRequest和onRemoteMessageRequest方法时，仅onRemoteMessageRequest方法生效。
     *
     * @param { int } code - 对端发送的服务请求码。
     * @param { MessageSequence } data - 携带客户端调用参数的MessageSequence对象。
     * @param { MessageSequence } reply - 写入结果的MessageSequence对象。
     * @param { MessageOption } options - 指示操作是同步还是异步。
     * @returns { boolean | Promise<boolean> } - 若在onRemoteMessageRequest中同步处理请求，则返回一个布尔值。返回true表示操作成功，返回false表示操作失败。
     * <br/>- 若在onRemoteMessageRequest中异步处理请求，则返回一个Promise对象。返回true表示操作成功，返回false表示操作失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    onRemoteMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption
    ): boolean | Promise<boolean>;

    /**
     * sendMessageRequest请求的响应处理函数，服务端在该函数里同步或异步地处理请求，回复结果，该接口可从入参callingInfo中获取IPC上下文信息。
     *
     * > **说明：**
     * >
     * > 开发者应优先选择重写带有CallingInfo参数的onRemoteMessageRequest方法，其中可以自由实现同步和异步的消息处理。
     * >
     * > 开发者同时重写onRemoteRequest和onRemoteMessageRequest方法时，仅onRemoteMessageRequest方法生效。
     *
     * @param { int } code - 对端发送的服务请求码。
     * @param { MessageSequence } data - 携带客户端调用参数的MessageSequence对象。
     * @param { MessageSequence } reply - 写入结果的MessageSequence对象。
     * @param { MessageOption } options - 指示操作是同步还是异步。
     * @param { CallingInfo } [callingInfo] - 获取IPC上下文信息。不传此参数时，默认为undefined。当需要获取调用者的PID、UID、TokenId或设备ID等信息时传入此参数，可通过
     *     callingInfo.callerPid等方式获取。不传入时无法直接获取IPC上下文信息，需通过rpc.IPCSkeleton其他方法（如getCallingPid、getCallingUid等）获取。
     * @returns { boolean | Promise<boolean> } - 若在onRemoteMessageRequest中同步处理请求，则返回一个布尔值。返回true表示操作成功，返回false表示操作失败。
     * <br/>- 若在onRemoteMessageRequest中异步处理请求，则返回一个Promise对象。返回true表示操作成功，返回false表示操作失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    onRemoteMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption,
      callingInfo?: CallingInfo
    ): boolean | Promise<boolean>;

    /**
     * sendRequest请求的响应处理函数，服务端在该函数里处理请求，回复结果。
     *
     * @param { number } code - 对端发送的服务请求码。
     * @param { MessageParcel } data - 携带客户端调用参数的MessageParcel对象。
     * @param { MessageParcel } reply - 写入结果的MessageParcel对象。
     * @param { MessageOption } options - 指示操作是同步还是异步。
     * @returns { boolean } true：操作成功，false：操作失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead onRemoteMessageRequest(code: int, data: MessageSequence, reply: MessageSequence,
     *     options: MessageOption)
     */
    onRemoteRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean;

    /**
     * 以同步或异步方式向对端进程发送MessageParcel消息。如果为选项设置了异步模式，则立即返回，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则将在sendRequest返回时收到回
     * 复，回复内容在reply报文里。
     *
     * @param { number } code - 本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。
     * @param { MessageParcel } data - 保存待发送数据的MessageParcel对象。
     * @param { MessageParcel } reply - 接收应答数据的MessageParcel对象。
     * @param { MessageOption } options - 本次请求的同异步模式，默认同步调用。
     * @returns { boolean } true：发送成功，false：发送失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 8
     * @useinstead rpc.IRemoteObject#sendMessageRequest(code: int, data: MessageSequence, reply: MessageSequence,
     *     options: MessageOption)
     */
    sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean;

    /**
     * 以同步或异步方式向对端进程发送MessageParcel消息。如果为选项设置了异步模式，则发送请求的响应结果立即返回，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则发送请求的响应结果将
     * 在sendRequest返回时返回，回复内容在reply报文里。使用Promise异步回调。
     *
     * @param { number } code - 本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。
     * @param { MessageParcel } data - 保存待发送数据的MessageParcel对象。
     * @param { MessageParcel } reply - 接收应答数据的MessageParcel对象。
     * @param { MessageOption } options - 本次请求的同异步模式，默认同步调用。
     * @returns { Promise<SendRequestResult> } Promise对象，返回发送请求的响应结果。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.IRemoteObject#sendMessageRequest(code: int, data: MessageSequence, reply: MessageSequence,
     *     options: MessageOption)
     */
    sendRequest(
      code: number,
      data: MessageParcel,
      reply: MessageParcel,
      options: MessageOption
    ): Promise<SendRequestResult>;

    /**
     * 以同步或异步方式向对端进程发送MessageSequence消息。如果为选项设置了异步模式，则发送请求的响应结果立即返回，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则发送请求的响应结
     * 果将在sendRequest返回时返回，回复内容在reply报文里。使用Promise异步回调。
     *
     * @param { int } code - 本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。
     * @param { MessageSequence } data - 保存待发送数据的MessageSequence对象。
     * @param { MessageSequence } reply - 接收应答数据的MessageSequence对象。
     * @param { MessageOption } options - 本次请求的同异步模式，默认同步调用。
     * @returns { Promise<RequestResult> } Promise对象，返回发送请求的响应结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.Failed to obtain the passed object instance.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    sendMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption
    ): Promise<RequestResult>;

    /**
     * 以同步或异步方式向对端进程发送MessageParcel消息。使用callback异步回调。如果为选项设置了异步模式，则立即收到回调，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则将在
     * sendRequest返回时收到回调，回复内容在reply报文里。
     *
     * @param { number } code - 本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。
     * @param { MessageParcel } data - 保存待发送数据的MessageParcel对象。
     * @param { MessageParcel} reply - 接收应答数据的MessageParcel对象。
     * @param { MessageOption } options - 本次请求的同异步模式，默认同步调用。
     * @param { AsyncCallback<SendRequestResult> } callback - 接收发送结果的回调。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.IRemoteObject#sendMessageRequest(code: int, data: MessageSequence, reply: MessageSequence,
     *     options: MessageOption, callback: AsyncCallback<RequestResult>)
     */
    sendRequest(
      code: number,
      data: MessageParcel,
      reply: MessageParcel,
      options: MessageOption,
      callback: AsyncCallback<SendRequestResult>
    ): void;

    /**
     * 以同步或异步方式向对端进程发送MessageSequence消息。使用callback异步回调。如果为选项设置了异步模式，则立即收到回调，reply报文里没有内容，具体回复需要在业务侧的回调函数中获取。如果为选项设置了同步模式，则
     * 将在sendMessageRequest返回时收到回调，回复内容在reply报文里。
     * 
     * @param { int } code - 本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。
     * @param { MessageSequence } data - 保存待发送数据的MessageSequence对象。
     * @param { MessageSequence } reply - 接收应答数据的MessageSequence对象。
     * @param { MessageOption } options - 本次请求的同异步模式，默认同步调用。
     * @param { AsyncCallback<RequestResult> } callback - 回调函数。当消息发送成功时，可从RequestResult中读取服务端返回的数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.Failed to obtain the passed object instance.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    sendMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption,
      callback: AsyncCallback<RequestResult>
    ): void;

    /**
     * 获取通信对端的进程Pid。
     *
     * @returns { int } 返回通信对端的进程Pid。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    getCallingPid(): int;

    /**
     * 获取通信对端的进程Uid。
     *
     * @returns { int } Return the UID of the {@link RemoteProxy} object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    getCallingUid(): int;

    /**
     * 此接口用于把接口描述符和IRemoteBroker对象绑定。
     *
     * @param { IRemoteBroker } localInterface - 将与描述符绑定的IRemoteBroker对象。
     * @param { string } descriptor - 用于与IRemoteBroker对象绑定的描述符。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead modifyLocalInterface(localInterface: IRemoteBroker, descriptor: string)
     */
    attachLocalInterface(localInterface: IRemoteBroker, descriptor: string): void;

    /**
     * 此接口用于把接口描述符和IRemoteBroker对象绑定。
     *
     * @param { IRemoteBroker } localInterface - 将与描述符绑定的IRemoteBroker对象。
     * @param { string } descriptor - 用于与IRemoteBroker对象绑定的描述符，其长度应小于40960。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The string length is greater than or equal to 40960;
     *     4.The number of bytes copied to the buffer is different from the length of the obtained string.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    modifyLocalInterface(localInterface: IRemoteBroker, descriptor: string): void;
  }

  /**
   * 实现IRemoteObject代理对象。
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7 dynamic
   * @since 23 static
   */
  class RemoteProxy extends IRemoteObject {
    /**
     * 内部指令码，用于测试IPC服务是否正常。
     *
     * @default 1599098439
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     */
    static readonly PING_TRANSACTION: number;

    /**
     * Indicates the message code for a Ping operation.
     *
     * @returns { int } Return vaule indicating the message code for a Ping operation.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get PING_TRANSACTION(): int;

    /**
     * 内部指令码，获取IPC服务相关的状态信息。
     *
     * @default 1598311760
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     */
    static readonly DUMP_TRANSACTION: number;

    /**
     * Indicates the message code for a dump operation.
     *
     * @returns { int } Return vaule indicating the message code for a dump operation.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get DUMP_TRANSACTION(): int;

    /**
     * 内部指令码，获取对端接口描述符。
     *
     * @default 1598968902
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     */
    static readonly INTERFACE_TRANSACTION: number;

    /**
     * Indicates the message code for a transmission.
     *
     * @returns { int } Return vaule indicating the message code for a transmission.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get INTERFACE_TRANSACTION(): int;

    /**
     * 最小有效指令码。
     *
     * @default 0x1
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     */
    static readonly MIN_TRANSACTION_ID: number;

    /**
     * Indicates the minimum value of a valid message code.
     * 
     * <p>This constant is used to check the validity of an operation.
     *
     * @returns { int } Return vaule indicating the minimum value of a valid message code.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get MIN_TRANSACTION_ID(): int;

    /**
     * 最大有效指令码。
     *
     * @default 0x00FFFFFF
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     */
    static readonly MAX_TRANSACTION_ID: number;

    /**
     * Indicates the maximum value of a valid message code.
     * 
     * <p>This constant is used to check the validity of an operation.
     *
     * @returns { int } Return vaule indicating the maximum value of a valid message code.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get MAX_TRANSACTION_ID(): int;

    /**
     * 查询并获取当前接口描述符对应的本地接口对象。
     *
     * @param { string } interface - 需要查询的接口描述符。
     * @returns { IRemoteBroker } 默认返回Null，标识该接口是一个代理侧接口。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.IRemoteObject#getLocalInterface(descriptor: string)
     */
    queryLocalInterface(interface: string): IRemoteBroker;

    /**
     * 查询并获取当前接口描述符对应的本地接口对象。
     *
     * @param { string } interfaceDes - 需要查询的接口描述符，其长度应小于40960。
     * @returns { IRemoteBroker } 默认返回Null，标识该接口是一个代理侧接口。
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 1900006 - Operation allowed only for the remote object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getLocalInterface(interfaceDes: string): IRemoteBroker;

    /**
     * 注册用于接收远程对象死亡通知的回调。
     *
     * @param { DeathRecipient } recipient - 收件人表示要注册的回调。
     * @param { number } flags - 死亡通知标志。保留参数。设置为0。
     * @returns { boolean } true：回调注册成功，false：回调注册失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.IRemoteObject#registerDeathRecipient(recipient: DeathRecipient, flags: int)
     */
    addDeathRecipient(recipient: DeathRecipient, flags: number): boolean;

    /**
     * 注册用于接收远程对象死亡通知的回调。
     *
     * @param { DeathRecipient } recipient - 要注册的回调。
     * @param { int } flags - 死亡通知标志。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The callback used to receive remote object death notifications is empty.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    registerDeathRecipient(recipient: DeathRecipient, flags: int): void;

    /**
     * 注销用于接收远程对象死亡通知的回调。
     *
     * @param { DeathRecipient } recipient - 要注销的死亡回调。
     * @param { number } flags - 死亡通知标志。保留参数。设置为0。
     * @returns { boolean } true：回调注销成功，false：回调注销失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.IRemoteObject#unregisterDeathRecipient(recipient: DeathRecipient, flags: int)
     */
    removeDeathRecipient(recipient: DeathRecipient, flags: number): boolean;

    /**
     * 注销用于接收远程对象死亡通知的回调。
     *
     * @param { DeathRecipient } recipient - 要注销的回调。
     * @param { int } flags - 死亡通知标志。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The callback used to receive remote object death notifications is empty.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    unregisterDeathRecipient(recipient: DeathRecipient, flags: int): void;

    /**
     * 查询当前代理对象接口的描述符。
     *
     * @returns { string } 当前的接口描述符。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.IRemoteObject#getDescriptor()
     */
    getInterfaceDescriptor(): string;

    /**
     * 获取对象的接口描述符，接口描述符为字符串。
     *
     * @returns { string } 返回接口描述符。
     * @throws { BusinessError } 1900007 - communication failed.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getDescriptor(): string;

    /**
     * 以同步或异步方式向对端进程发送MessageParcel消息。如果为选项设置了异步模式，则立即返回，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则将在sendRequest返回时收到回
     * 复，回复内容在reply报文里。
     *
     * @param { number } code - 本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。
     * @param { MessageParcel } data - 保存待发送数据的MessageParcel对象。
     * @param { MessageParcel } reply - 接收应答数据的MessageParcel对象。
     * @param { MessageOption } options - 本次请求的同异步模式，默认同步调用。
     * @returns { boolean } true：发送成功，false：发送失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 8
     * @useinstead rpc.IRemoteObject#sendMessageRequest(code: int, data: MessageSequence, reply: MessageSequence,
     *     options: MessageOption)
     */
    sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean;

    /**
     * 以同步或异步方式向对端进程发送MessageParcel消息。如果为选项设置了异步模式，则发送请求的响应结果立即返回，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则发送请求的响应结果将
     * 在sendRequest返回时返回，回复内容在reply报文里。使用Promise异步回调。
     *
     * @param { number } code - 本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。
     * @param { MessageParcel } data - 保存待发送数据的MessageParcel对象。
     * @param { MessageParcel} reply - 接收应答数据的MessageParcel对象。
     * @param { MessageOption } options - 本次请求的同异步模式，默认同步调用。
     * @returns { Promise<SendRequestResult> } Promise对象，返回发送请求的响应结果。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.IRemoteObject#sendMessageRequest(code: int, data: MessageSequence, reply: MessageSequence,
     *     options: MessageOption)
     */
    sendRequest(
      code: number,
      data: MessageParcel,
      reply: MessageParcel,
      options: MessageOption
    ): Promise<SendRequestResult>;

    /**
     * 以同步或异步方式向对端进程发送MessageSequence消息。如果为选项设置了异步模式，则发送请求的响应结果立即返回，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则发送请求的响应结
     * 果将在sendMessageRequest返回时返回，回复内容在reply报文里。使用Promise异步回调。
     *
     * @param { int } code - 本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。
     * @param { MessageSequence } data - 保存待发送数据的MessageSequence对象。
     * @param { MessageSequence } reply - 接收应答数据的MessageSequence对象。
     * @param { MessageOption } options - 本次请求的同异步模式，默认同步调用。
     * @returns { Promise<RequestResult> } Promise对象，返回发送请求的响应结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.Failed to obtain the passed object instance.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    sendMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption
    ): Promise<RequestResult>;

    /**
     * 以同步或异步方式向对端进程发送MessageParcel消息。如果为选项设置了异步模式，则立即收到回调，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，则将在sendRequest返回时收
     * 到回调，回复内容在reply报文里。
     *
     * @param { number } code - 本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。
     * @param { MessageParcel } data - 保存待发送数据的MessageParcel对象。
     * @param { MessageParcel } reply - 接收应答数据的MessageParcel对象。
     * @param { MessageOption } options - 本次请求的同异步模式，默认同步调用。
     * @param { AsyncCallback<SendRequestResult> } callback - 接收发送结果的回调。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.IRemoteObject#sendMessageRequest(code: int, data: MessageSequence, reply: MessageSequence,
     *     options: MessageOption, callback: AsyncCallback<RequestResult>)
     */
    sendRequest(
      code: number,
      data: MessageParcel,
      reply: MessageParcel,
      options: MessageOption,
      callback: AsyncCallback<SendRequestResult>
    ): void;

    /**
     * 以同步或异步方式向对端进程发送MessageSequence消息。使用callback异步回调。如果为选项设置了异步模式，则立即收到回调，reply报文里没有内容，具体回复需要在业务侧的回调中获取。如果为选项设置了同步模式，将
     * 在
     *  [sendMessageRequest]{@link rpc.IRemoteObject#sendMessageRequest( code: int, data: MessageSequence, reply: MessageSequence, options: MessageOption )}
     * 返回后、服务端处理请求完成时执行回调，回调中可读取[RequestResult]{@link rpc.RequestResult}获取服务端返回的数据。
     *
     * @param { int } code - 本次请求调用的消息码[1-16777215]，由通信双方确定。如果接口由IDL工具生成，则消息代码由IDL自动生成。
     * @param { MessageSequence } data - 保存待发送数据的MessageSequence对象。
     * @param { MessageSequence } reply - 接收应答数据的MessageSequence对象。
     * @param { MessageOption } options - 本次请求的同异步模式，默认同步调用。
     * @param { AsyncCallback<RequestResult> } callback - 回调函数。当消息发送成功时，可从RequestResult中读取服务端返回的数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.Failed to obtain the passed object instance.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    sendMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption,
      callback: AsyncCallback<RequestResult>
    ): void;

    /**
     * 指示对应的RemoteObject是否死亡。
     *
     * @returns { boolean } true：对应的对象已经死亡，false：对应的对象未死亡。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    isObjectDead(): boolean;
  }

  /**
   * 用于获取IPC上下文信息，包括获取UID和PID、获取本端和对端设备ID、检查接口调用是否在同一设备上。
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7 dynamic
   * @since 23 static
   */
  class IPCSkeleton {
    /**
     * 静态方法，获取系统服务管理器（SAMGR）对象。
     *
     * @returns { IRemoteObject } 返回系统能力管理者。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static getContextObject(): IRemoteObject;

    /**
     * 静态方法，获取调用者的PID。此方法由[RemoteObject]{@link rpc.RemoteObject}对象在IPC上下文环境（
     * [onRemoteMessageRequest]{@link rpc.RemoteObject#onRemoteMessageRequest( code: int, data: MessageSequence, 
     * reply: MessageSequence, options: MessageOption )}）中使用，否则直接返回。
     *
     * @returns { int } 返回调用者的PID。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static getCallingPid(): int;

    /**
     * 静态方法，获取调用者的UID。此方法由[RemoteObject]{@link rpc.RemoteObject}对象在IPC上下文环境（
     * [onRemoteMessageRequest]{@link rpc.RemoteObject#onRemoteMessageRequest( code: int, data: MessageSequence, 
     * reply: MessageSequence, options: MessageOption )}）中使用，否则直接返回。
     *
     * @returns { int } 返回调用者的UID。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static getCallingUid(): int;

    /**
     * 静态方法，获取调用者的TokenId，用于被调用方对调用方的身份校验。
     *
     * @returns { long } 返回调用者的TokenId。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     * @since 23 static
     */
    static getCallingTokenId(): long;

    /**
     * 静态方法，获取调用者进程所在的设备ID。
     *
     * @returns { string } 返回调用者进程所在的设备ID。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static getCallingDeviceID(): string;

    /**
     * 静态方法，获取本端设备ID。
     *
     * @returns { string } 返回本地设备的ID。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static getLocalDeviceID(): string;

    /**
     * 静态方法，检查当前通信对端是否是本设备的进程。
     *
     * @returns { boolean } true：调用在同一台设备，false：调用未在同一台设备。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static isLocalCalling(): boolean;

    /**
     * 静态方法，将所有挂起的命令从指定的RemoteProxy刷新到相应的RemoteObject。建议在任何时间执行敏感操作之前调用此方法。
     *
     * @param { IRemoteObject } object - 指定的RemoteProxy。
     * @returns { number } 如果操作成功，返回0；如果输入对象为空或RemoteObject，或者操作失败，返回错误代码。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead static flushCmdBuffer(object: IRemoteObject)
     */
    static flushCommands(object: IRemoteObject): number;

    /**
     * 静态方法，将所有挂起的命令从指定的RemoteProxy刷新到相应的RemoteObject。建议在任何时间执行敏感操作之前调用此方法。
     *
     * @param { IRemoteObject } object - 指定的RemoteProxy。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    static flushCmdBuffer(object: IRemoteObject): void;

    /**
     * 静态方法，将远程用户的UID和PID替换为本地用户的UID和PID。它可以用于身份验证等场景。
     *
     * @returns { string } 返回包含远程用户的UID和PID的字符串。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static resetCallingIdentity(): string;

    /**
     * 静态方法，将UID和PID恢复为远程用户的UID和PID。它通常在使用resetCallingIdentity后调用，需要resetCallingIdentity返回的远程用户的UID和PID。
     *
     * @param { string } identity - 标识表示包含远程用户UID和PID的字符串。由resetCallingIdentity返回。
     * @returns { boolean } true：设置成功，false：设置失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead static restoreCallingIdentity(identity: string)
     */
    static setCallingIdentity(identity: string): boolean;

    /**
     * 静态方法，将UID和PID恢复为远程用户的UID和PID。它通常在使用resetCallingIdentity后调用，需要resetCallingIdentity返回的远程用户的UID和PID。该接口仅支持在IPC上下文（
     * [onRemoteMessageRequest]{@link rpc.RemoteObject#onRemoteMessageRequest( code: int, data: MessageSequence, 
     * reply: MessageSequence, options: MessageOption )}）中使用，否则直接返回。
     *
     * @param { string } identity - 标识表示包含远程用户UID和PID的字符串，其长度应小于40960。由resetCallingIdentity返回。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The string length is greater than or equal to 40960;
     *     4.The number of bytes copied to the buffer is different from the length of the obtained string.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    static restoreCallingIdentity(identity: string): void;
  }

  /**
   * 提供与匿名共享内存对象相关的方法，包括创建、关闭、映射和取消映射Ashmem、从Ashmem读取数据和写入数据、获取Ashmem大小、设置Ashmem保护。
   * 
   * 共享内存只适用与本设备内跨进程通信。
   * 
   * - 大数据传输：传输大量数据(如图片、文件)时使用共享内存提升效率。
   * - 跨进程数据共享：多个进程需要共享访问同一块内存数据。
   * - 传输效率问题：大数据通过共享内存传输避免序列化开销，提升传输效率。
   * - 内存复用问题：多进程可共享访问同一内存，避免数据拷贝。
   * - 提升传输性能：共享内存机制大幅提升大数据传输效率。
   * - 减少内存占用：避免数据多次拷贝，节省内存资源。
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 8 dynamic
   * @since 23 static
   */
  class Ashmem {
    /**
     * 映射内存保护类型，代表映射的内存可执行。
     *
     * @default 4
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     */
    static readonly PROT_EXEC: number;

    /**
     * The mapped memory is executable.
     *
     * @returns { int } Return vaule indicating the mapped memory is executable.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get PROT_EXEC(): int;

    /**
     * 映射内存保护类型，代表映射的内存不可访问。
     *
     * @default 0
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     */
    static readonly PROT_NONE: number;

    /**
     * The mapped memory is inaccessible.
     *
     * @returns { int } Return vaule indicating the mapped memory is inaccessible.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get PROT_NONE(): int;

    /**
     * 映射内存保护类型，代表映射的内存可读。
     *
     * @default 1
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     */
    static readonly PROT_READ: number;

    /**
     * The mapped memory is readable.
     *
     * @returns { int } Return vaule indicating the mapped memory is readable.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get PROT_READ(): int;

    /**
     * 映射内存保护类型，代表映射的内存可写。
     *
     * @default 2
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     */
    static readonly PROT_WRITE: number;

    /**
     * The mapped memory is writable.
     *
     * @returns { int } Return vaule indicating the mapped memory is writable.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    static get PROT_WRITE(): int;

    /**
     * 静态方法，根据指定的名称和大小创建Ashmem对象。
     *
     * @param { string } name - 名称，用于查询Ashmem信息。
     * @param { number } size - Ashmem的大小，以字节为单位。
     * @returns { Ashmem } 返回创建的Ashmem对象；如果创建失败，返回null。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead create()
     */
    static createAshmem(name: string, size: number): Ashmem;

    /**
     * 静态方法，根据指定的名称和大小创建Ashmem对象。
     *
     * @param { string } name - Ashmem名称，用于查询Ashmem信息，其长度不能为0。
     * @param { int } size - Ashmem的大小，其大小应大于0，以字节为单位。
     * @returns { Ashmem } 返回创建的Ashmem对象；如果创建失败，返回null。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The Ashmem name passed is empty;
     *     4.The Ashmem size passed is less than or equal to 0.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    static create(name: string, size: int): Ashmem;

    /**
     * 静态方法，通过复制现有Ashmem对象的文件描述符(fd)来创建Ashmem对象。两个Ashmem对象指向同一个共享内存区域。
     *
     * @param { Ashmem } ashmem - 已存在的Ashmem对象。
     * @returns { Ashmem } 返回创建的Ashmem对象。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead create()
     */
    static createAshmemFromExisting(ashmem: Ashmem): Ashmem;

    /**
     * 静态方法，通过复制现有Ashmem对象的文件描述符(fd)来创建Ashmem对象。两个Ashmem对象指向同一个共享内存区域。
     *
     * @param { Ashmem } ashmem - 已存在的Ashmem对象。
     * @returns { Ashmem } 返回创建的Ashmem对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The passed parameter is not an Ashmem object;
     *     3.The ashmem instance for obtaining packaging is empty.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    static create(ashmem: Ashmem): Ashmem;

    /**
     * 关闭这个Ashmem。
     * 
     * > **说明：**
     * >
     * > 关闭Ashmem对象前需要先解除地址映射。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     * @since 23 static
     */
    closeAshmem(): void;

    /**
     * 删除该Ashmem对象的地址映射。
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     * @since 23 static
     */
    unmapAshmem(): void;

    /**
     * 获取Ashmem对象的内存大小。
     *
     * @returns { int } 返回Ashmem对象的内存大小。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     * @since 23 static
     */
    getAshmemSize(): int;

    /**
     * 在此进程的虚拟地址空间上创建共享文件映射，映射区域大小由此Ashmem对象指定。
     *
     * @param { number } mapType - 指定映射的内存区域的保护等级。
     * @returns { boolean } true：映射成功，false：映射失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead mapTypedAshmem(mapType: int)
     */
    mapAshmem(mapType: number): boolean;

    /**
     * 在此进程的虚拟地址空间上创建共享文件映射，映射区域大小由此Ashmem对象指定。
     *
     * @param { int } mapType - 指定映射的内存区域的保护等级。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The passed mapType exceeds the maximum protection level.
     * @throws { BusinessError } 1900001 - Failed to call mmap.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    mapTypedAshmem(mapType: int): void;

    /**
     * 在此进程虚拟地址空间上创建可读写的共享文件映射。
     *
     * @returns { boolean } true：映射成功，false：映射失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead mapReadWriteAshmem()
     */
    mapReadAndWriteAshmem(): boolean;

    /**
     * 在此进程虚拟地址空间上创建可读写的共享文件映射。
     *
     * @throws { BusinessError } 1900001 - Failed to call mmap.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    mapReadWriteAshmem(): void;

    /**
     * 在此进程虚拟地址空间上创建只读的共享文件映射。
     *
     * @returns { boolean } true：映射成功，false：映射失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead mapReadonlyAshmem()
     */
    mapReadOnlyAshmem(): boolean;

    /**
     * 在此进程虚拟地址空间上创建只读的共享文件映射。
     *
     * @throws { BusinessError } 1900001 - Failed to call mmap.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    mapReadonlyAshmem(): void;

    /**
     * 设置映射内存区域的保护等级。
     *
     * @param { number } protectionType - 要设置的保护类型。
     * @returns { boolean } true：设置成功，false：设置失败。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead setProtectionType(protectionType: int)
     */
    setProtection(protectionType: number): boolean;

    /**
     * 设置映射内存区域的保护等级。
     *
     * @param { int } protectionType - 要设置的保护类型。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900002 - Failed to call ioctl.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    setProtectionType(protectionType: int): void;

    /**
     * 将数据写入此Ashmem对象关联的共享文件。
     *
     * > **说明：**
     * >
     * > 对Ashmem对象进行写操作时，需要先调用[mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem}进行映射。
     *
     * @param { number[] } buf - 写入Ashmem对象的数据。
     * @param { number } size - 要写入的数据大小，以字节为单位。
     * @param { number } offset - 要写入的数据在此Ashmem对象关联的内存区间的起始位置。
     * @returns { boolean } true：如果数据写入成功，false：在其他情况下，如数据写入越界或未获得写入权限。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead writeDataToAshmem(buf: ArrayBuffer, size: int, offset: int)
     */
    writeToAshmem(buf: number[], size: number, offset: number): boolean;

    /**
     * 将数据写入此Ashmem对象关联的共享文件。
     *
     * > **说明：**
     * >
     * > 对Ashmem对象进行写操作时，需要先调用[mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem}进行映射。
     *
     * @param { number[] } buf - 写入Ashmem对象的数据。
     * @param { number } size - 要写入的数据大小，以字节为单位。
     * @param { number } offset - 要写入的数据在此Ashmem对象关联的内存区间的起始位置。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The element does not exist in the array.
     * @throws { BusinessError } 1900003 - Failed to write data to the shared memory.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead writeDataToAshmem(buf: ArrayBuffer, size: int, offset: int)
     */
    writeAshmem(buf: number[], size: number, offset: number): void;

    /**
     * 将数据写入此Ashmem对象关联的共享文件。
     *
     * > **说明：**
     * >
     * > 对Ashmem对象进行写操作时，需要先调用[mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem}进行映射。
     *
     * @param { ArrayBuffer } buf - 写入Ashmem对象的数据。
     * @param { int } size - 要写入的数据大小，以字节为单位。
     * @param { int } offset - 要写入的数据在此Ashmem对象关联的内存区间的起始位置。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.Failed to obtain arrayBuffer information.
     * @throws { BusinessError } 1900003 - Failed to write data to the shared memory.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 11 dynamic
     * @since 23 static
     */
    writeDataToAshmem(buf: ArrayBuffer, size: int, offset: int): void;

    /**
     * 从此Ashmem对象关联的共享文件中读取数据。
     *
     * > **说明：**
     * >
     * > 对Ashmem对象进行写操作时，需要先调用[mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem}进行映射。
     *
     * @param { number } size - 要读取的数据的大小，以字节为单位。
     * @param { number } offset - 要读取的数据在此Ashmem对象关联的内存区间的起始位置。
     * @returns { number[] } 返回读取的数据。
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead readDataFromAshmem(size: int, offset: int)
     */
    readFromAshmem(size: number, offset: number): number[];

    /**
     * 从此Ashmem对象关联的共享文件中读取数据。
     *
     * > **说明：**
     * >
     * > 对Ashmem对象进行写操作时，需要先调用[mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem}进行映射。
     *
     * @param { number } size - 要读取的数据的大小，以字节为单位。
     * @param { number } offset - 要读取的数据在此Ashmem对象关联的内存区间的起始位置。
     * @returns { number[] } 返回读取的数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900004 - Failed to read data from the shared memory.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead readDataFromAshmem(size: int, offset: int)
     */
    readAshmem(size: number, offset: number): number[];

    /**
     * 从此Ashmem对象关联的共享文件中读取数据。
     *
     * > **说明：**
     * >
     * > 对Ashmem对象进行写操作时，需要先调用[mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem}进行映射。
     *
     * @param { int } size - 要读取的数据的大小，以字节为单位。
     * @param { int } offset - 要读取的数据在此Ashmem对象关联的内存区间的起始位置。
     * @returns { ArrayBuffer } 返回读取的数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900004 - Failed to read data from the shared memory.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 11 dynamic
     * @since 23 static
     */
    readDataFromAshmem(size: int, offset: int): ArrayBuffer;
  }
}

export default rpc;