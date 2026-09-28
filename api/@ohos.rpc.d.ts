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
 * @file RPC
 * @kit IPCKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * The **RPC** module implements communication between processes, including inter-process communication (IPC) on a
 *     single device and remote procedure call (RPC) between processes on difference devices. IPC is implemented based
 *     on the Binder driver, and RPC is based on the DSoftBus driver.
 *
 * This module supports return of error codes since API version 9.
 *
 * @syscap SystemCapability.Communication.IPC.Core
 * @atomicservice [since 26.0.0]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace rpc {
  /**
   * The APIs of this module return exceptions since API version 9. The following table lists the error codes.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 9 dynamic
   * @since 23 static
   */
  enum ErrorCode {
    /**
     * Parameter check failed.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    CHECK_PARAM_ERROR = 401,

    /**
     * Failed to call mmap.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    OS_MMAP_ERROR = 1900001,

    /**
     * Failed to call **ioctl** with the shared memory file descriptor.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    OS_IOCTL_ERROR = 1900002,

    /**
     * Failed to write data to the shared memory.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WRITE_TO_ASHMEM_ERROR = 1900003,

    /**
     * Failed to read data from the shared memory.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    READ_FROM_ASHMEM_ERROR = 1900004,

    /**
     * This operation is allowed only on the proxy object.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    ONLY_PROXY_OBJECT_PERMITTED_ERROR = 1900005,

    /**
     * This operation is allowed only on the remote object.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    ONLY_REMOTE_OBJECT_PERMITTED_ERROR = 1900006,

    /**
     * Failed to communicate with the remote object over IPC.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    COMMUNICATION_ERROR = 1900007,

    /**
     * Invalid proxy or remote object.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    PROXY_OR_REMOTE_OBJECT_INVALID_ERROR = 1900008,

    /**
     * Failed to write data to MessageSequence.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR = 1900009,

    /**
     * Failed to read data from MessageSequence.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    READ_DATA_FROM_MESSAGE_SEQUENCE_ERROR = 1900010,

    /**
     * Failed to allocate memory during serialization.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    PARCEL_MEMORY_ALLOC_ERROR = 1900011,

    /**
     * Failed to invoke the JS callback.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    CALL_JS_METHOD_ERROR = 1900012,

    /**
     * Failed to call dup.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    OS_DUP_ERROR = 1900013
  }

  /**
   * Since API version 12,
   *     [writeArrayBuffer]{@link rpc.MessageSequence#writeArrayBuffer(buf: ArrayBuffer, typeCode: TypeCode)} and
   *     [readArrayBuffer]{@link rpc.MessageSequence#readArrayBuffer(typeCode: TypeCode)} are added to pass ArrayBuffer
   *     data. The specific TypedArray type is determined by the **TypeCode** defined as follows.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum TypeCode {
    /**
     * The TypedArray type is INT8_ARRAY. Data is read and written in 8-bit signed integer format, with each element
     *     occupying 1 byte.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    INT8_ARRAY = 0,

    /**
     * The TypedArray type is UINT8_ARRAY. Data is read and written in 8-bit unsigned integer format, with each element
     *     occupying 1 byte.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    UINT8_ARRAY = 1,

    /**
     * The TypedArray type is INT16_ARRAY. Data is read and written in 16-bit signed integer format, with each element
     *     occupying 2 bytes.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    INT16_ARRAY = 2,

    /**
     * The TypedArray type is UINT16_ARRAY. Data is read and written in 16-bit unsigned integer format, with each
     *     element occupying 2 bytes.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    UINT16_ARRAY = 3,

    /**
     * The TypedArray type is INT32_ARRAY. Data is read and written in 32-bit signed integer format, with each element
     *     occupying 4 bytes.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    INT32_ARRAY = 4,

    /**
     * The TypedArray type is UINT32_ARRAY. Data is read and written in 32-bit unsigned integer format, with each
     *     element occupying 4 bytes.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    UINT32_ARRAY = 5,

    /**
     * The TypedArray type is FLOAT32_ARRAY. Data is read and written in 32-bit single-precision floating-point format,
     *     with each element occupying 4 bytes.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    FLOAT32_ARRAY = 6,

    /**
     * The TypedArray type is FLOAT64_ARRAY. Data is read and written in 64-bit double-precision floating-point format,
     *     with each element occupying 8 bytes.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    FLOAT64_ARRAY = 7,

    /**
     * The TypedArray type is BIGINT64_ARRAY. Data is read and written in 64-bit big integer format, with each element
     *     occupying 8 bytes.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BIGINT64_ARRAY = 8,

    /**
     * The TypedArray type is BIGUINT64_ARRAY. Data is read and written in 64-bit unsigned big integer format, with each
     *     element occupying 8 bytes.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BIGUINT64_ARRAY = 9
  }

  /**
   * Provides APIs for reading and writing data in specific format. During RPC, the sender can use the **write()**
   *     method provided by **MessageParcel** to write data in specific format to a **MessageParcel** object. The
   *     receiver can use the **read()** method provided by **MessageParcel** to read data in specific format from a
   *     **MessageParcel** object. The data formats include basic data types and arrays, IPC objects, interface tokens,
   *     and custom sequenceable objects.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead rpc.MessageSequence
   */
  class MessageParcel {
    /**
     * Creates a **MessageParcel** object. This method is a static method.
     *
     * @returns { MessageParcel } Created **MessageParcel** object, which is used to encapsulate request and response
     *     data during IPC.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence.create()
     */
    static create(): MessageParcel;

    /**
     * Reclaims the **MessageParcel** object that is no longer used.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#reclaim()
     */
    reclaim(): void;

    /**
     * Serializes a remote object and writes it to this **MessageParcel** object.
     *
     * @param { IRemoteObject } object - Remote object to serialize and write to the **MessageParcel** object.
     * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeRemoteObject(obj: IRemoteObject)
     */
    writeRemoteObject(object: IRemoteObject): boolean;

    /**
     * Reads the remote object from this **MessageParcel** object. You can use this method to deserialize the
     *     **MessageParcel** object to generate an **IRemoteObject**. The remote objects are read in the order in which
     *     they are written to this **MessageParcel** object.
     *
     * @returns { IRemoteObject } Remote object read, which is used for IPC/RPC communication.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readRemoteObject()
     */
    readRemoteObject(): IRemoteObject;

    /**
     * Writes an interface token to this **MessageParcel** object. The remote object can use this interface token to
     *     verify the communication.
     *
     * @param { string } token - Interface token of the string type. The length of the string must be less than 40960.
     * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeInterfaceToken(token: string)
     */
    writeInterfaceToken(token: string): boolean;

    /**
     * Reads the interface token from this **MessageParcel** object. The interface token is read in the sequence in
     *     which it is written to the **MessageParcel** object. The local object can use it to verify the communication.
     *
     * @returns { string } Interface token obtained.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readInterfaceToken()
     */
    readInterfaceToken(): string;

    /**
     * Obtains the data size of this **MessageParcel** object.
     *
     * @returns { number } Size of the **MessageParcel** object obtained, in bytes.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#getSize()
     */
    getSize(): number;

    /**
     * Obtains the capacity of this **MessageParcel** object.
     *
     * @returns { number } **MessageParcel** capacity obtained, in bytes.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#getCapacity()
     */
    getCapacity(): number;

    /**
     * Sets the size of data contained in this **MessageParcel** object.
     *
     * @param { number } size - Data size to set, in bytes.
     * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#setSize(size: int)
     */
    setSize(size: number): boolean;

    /**
     * Sets the storage capacity of this **MessageParcel** object.
     *
     * @param { number } size - Storage capacity to set, in bytes.
     * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#setCapacity(size: int)
     */
    setCapacity(size: number): boolean;

    /**
     * Obtains the writable capacity of this **MessageParcel** object.
     *
     * @returns { number } **MessageParcel** writable capacity obtained, in bytes.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#getWritableBytes()
     */
    getWritableBytes(): number;

    /**
     * Obtains the readable capacity of this **MessageParcel** object.
     *
     * @returns { number } **MessageParcel** object readable capacity, in bytes.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#getReadableBytes()
     */
    getReadableBytes(): number;

    /**
     * Obtains the read position of this **MessageParcel** object.
     *
     * @returns { number } Current read position of the **MessageParcel** object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#getReadPosition()
     */
    getReadPosition(): number;

    /**
     * Obtains the write position of this **MessageParcel** object.
     *
     * @returns { number } Current write position of the **MessageParcel** object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#getWritePosition()
     */
    getWritePosition(): number;

    /**
     * Moves the read pointer to the specified position.
     *
     * @param { number } pos - Position from which data is to read.
     * @returns { boolean } Returns **true** if the read position changes; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#rewindRead(pos: int)
     */
    rewindRead(pos: number): boolean;

    /**
     * Moves the write pointer to the specified position.
     *
     * @param { number } pos - Position from which data is to write.
     * @returns { boolean } Returns **true** if the write position changes; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#rewindWrite(pos: int)
     */
    rewindWrite(pos: number): boolean;

    /**
     * Writes information to this **MessageParcel** object indicating that no exception occurred.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeNoException()
     */
    writeNoException(): void;

    /**
     * Reads the exception information from this **MessageParcel** object.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readException()
     */
    readException(): void;

    /**
     * Writes a Byte value to this **MessageParcel** object.
     *
     * @param { number } val - Byte value to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeByte(val: int)
     */
    writeByte(val: number): boolean;

    /**
     * Writes a short int value to this **MessageParcel** object.
     *
     * @param { number } val - Short integer to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeShort(val: int)
     */
    writeShort(val: number): boolean;

    /**
     * Writes an int value to this **MessageParcel** object.
     *
     * @param { number } val - Integer to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeInt(val: int)
     */
    writeInt(val: number): boolean;

    /**
     * Writes a long int value to this **MessageParcel** object.
     *
     * @param { number } val - Long integer to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeLong(val: long)
     */
    writeLong(val: number): boolean;

    /**
     * Writes a double value to this **MessageParcel** object.
     *
     * @param { number } val - Double value to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeFloat(val: double)
     */
    writeFloat(val: number): boolean;

    /**
     * Writes a double value to this **MessageParcel** object.
     *
     * @param { number } val - Double value to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeDouble(val: double)
     */
    writeDouble(val: number): boolean;

    /**
     * Writes a Boolean value to this **MessageParcel** object.
     *
     * @param { boolean } val - Boolean value to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeBoolean(val: boolean)
     */
    writeBoolean(val: boolean): boolean;

    /**
     * Writes a single character value to this **MessageParcel** object.
     *
     * @param { number } val - **Char** value to write. The value range is [0, 65535], which corresponds to the Unicode
     *     character encoding range. Values outside this range may cause character encoding errors.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeChar(val: int)
     */
    writeChar(val: number): boolean;

    /**
     * Writes a string to this **MessageParcel** object.
     *
     * @param { string } val - String to write. The length of the string must be less than 40960.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeString(val: string)
     */
    writeString(val: string): boolean;

    /**
     * Writes a **Sequenceable** object to this **MessageParcel** object.
     *
     * @param { Sequenceable } val - **Sequenceable** object to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeParcelable(val: Parcelable)
     */
    writeSequenceable(val: Sequenceable): boolean;

    /**
     * Writes a byte array to this **MessageParcel** object.
     *
     * @param { number[] } byteArray - Byte array to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeByteArray(byteArray: int[])
     */
    writeByteArray(byteArray: number[]): boolean;

    /**
     * Writes a short array to this **MessageParcel** object.
     *
     * @param { number[] } shortArray - Short array to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeShortArray(shortArray: int[])
     */
    writeShortArray(shortArray: number[]): boolean;

    /**
     * Writes an integer array to this **MessageParcel** object.
     *
     * @param { number[] } intArray - Integer array to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeIntArray(intArray: int[])
     */
    writeIntArray(intArray: number[]): boolean;

    /**
     * Writes a long array to this **MessageParcel** object.
     *
     * @param { number[] } longArray - Long array to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeLongArray(longArray: long[])
     */
    writeLongArray(longArray: number[]): boolean;

    /**
     * Writes a double array to this **MessageParcel** object.
     *
     * @param { number[] } floatArray - Double array to write. The system processes float data as that of the double
     *     type. Therefore, the total number of bytes occupied by a float array must be calculated as the double type.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeFloatArray(floatArray: double[])
     */
    writeFloatArray(floatArray: number[]): boolean;

    /**
     * Writes a double array to this **MessageParcel** object.
     *
     * @param { number[] } doubleArray - Double array to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeDoubleArray(doubleArray: double[])
     */
    writeDoubleArray(doubleArray: number[]): boolean;

    /**
     * Writes a Boolean array to this **MessageParcel** object.
     *
     * @param { boolean[] } booleanArray - Boolean array to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeBooleanArray(booleanArray: boolean[])
     */
    writeBooleanArray(booleanArray: boolean[]): boolean;

    /**
     * Writes a single character array to this **MessageParcel** object.
     *
     * @param { number[] } charArray - Character array to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeCharArray(charArray: int[])
     */
    writeCharArray(charArray: number[]): boolean;

    /**
     * Writes a string array to this **MessageParcel** object.
     *
     * @param { string[] } stringArray - String array to write. Each string element must be less than 40960 in length.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeStringArray(stringArray: string[])
     */
    writeStringArray(stringArray: string[]): boolean;

    /**
     * Writes a **Sequenceable** array to this **MessageParcel** object.
     *
     * @param { Sequenceable[] } sequenceableArray - **Sequenceable** array to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeParcelableArray(parcelableArray: Parcelable[])
     */
    writeSequenceableArray(sequenceableArray: Sequenceable[]): boolean;

    /**
     * Writes an **IRemoteObject** array to this **MessageParcel** object.
     *
     * @param { IRemoteObject[] } objectArray - **IRemoteObject** array to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeRemoteObjectArray(objectArray: IRemoteObject[])
     */
    writeRemoteObjectArray(objectArray: IRemoteObject[]): boolean;

    /**
     * Reads the byte value from this **MessageParcel** object.
     *
     * @returns { number } Byte value read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readByte()
     */
    readByte(): number;

    /**
     * Reads the short integer from this **MessageParcel** object.
     *
     * @returns { number } Short integer read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readShort()
     */
    readShort(): number;

    /**
     * Reads the integer from this **MessageParcel** object.
     *
     * @returns { number } Integer read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readInt()
     */
    readInt(): number;

    /**
     * Reads the long int value from this **MessageParcel** object.
     *
     * @returns { number } Long integer read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readLong()
     */
    readLong(): number;

    /**
     * Reads the double value from this **MessageParcel** object.
     *
     * @returns { number } Double value read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readFloat()
     */
    readFloat(): number;

    /**
     * Reads the double value from this **MessageParcel** object.
     *
     * @returns { number } Double value read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readDouble()
     */
    readDouble(): number;

    /**
     * Reads the Boolean value from this **MessageParcel** object.
     *
     * @returns { boolean } Boolean value read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readBoolean()
     */
    readBoolean(): boolean;

    /**
     * Reads the single character value from this **MessageParcel** object.
     *
     * @returns { number } **Char** value read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readChar()
     */
    readChar(): number;

    /**
     * Reads the string from this **MessageParcel** object.
     *
     * @returns { string } String read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readString()
     */
    readString(): string;

    /**
     * Reads member variables from this **MessageParcel** object.
     *
     * @param { Sequenceable } dataIn - Object that reads member variables from the **MessageParcel** object.
     * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readParcelable(dataIn: Parcelable)
     */
    readSequenceable(dataIn: Sequenceable): boolean;

    /**
     * Reads the byte array from this **MessageParcel** object and writes it to the created empty array.
     *
     * @param { number[] } dataIn - Byte array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readByteArray(dataIn: int[])
     */
    readByteArray(dataIn: number[]): void;

    /**
     * Reads the byte array from this **MessageParcel** object.
     *
     * @returns { number[] } Byte array read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readByteArray()
     */
    readByteArray(): number[];

    /**
     * Reads the short array from this **MessageParcel** object and writes it to the created empty array.
     *
     * @param { number[] } dataIn - Short array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readShortArray(dataIn: int[])
     */
    readShortArray(dataIn: number[]): void;

    /**
     * Reads the short array from this **MessageParcel** object.
     *
     * @returns { number[] } Short array read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readShortArray()
     */
    readShortArray(): number[];

    /**
     * Reads the integer array from this **MessageParcel** object and writes it to the created empty array.
     *
     * @param { number[] } dataIn - Integer array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readIntArray(dataIn: int[])
     */
    readIntArray(dataIn: number[]): void;

    /**
     * Reads the integer array from this **MessageParcel** object.
     *
     * @returns { number[] } Integer array read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readIntArray()
     */
    readIntArray(): number[];

    /**
     * Reads the long array from this **MessageParcel** object and writes it to the created empty array.
     *
     * @param { number[] } dataIn - Long array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readLongArray(dataIn: long[])
     */
    readLongArray(dataIn: number[]): void;

    /**
     * Reads the long array from this **MessageParcel** object.
     *
     * @returns { number[] } Long array read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readLongArray()
     */
    readLongArray(): number[];

    /**
     * Reads the double array from this **MessageParcel** object and writes it to the created empty array.
     *
     * @param { number[] } dataIn - Double array to read. The system processes float data as that of the double type.
     *     Therefore, the total number of bytes occupied by a float array must be calculated as the double type.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readFloatArray(dataIn: double[])
     */
    readFloatArray(dataIn: number[]): void;

    /**
     * Reads the double array from this **MessageParcel** object.
     *
     * @returns { number[] } Double array read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readFloatArray()
     */
    readFloatArray(): number[];

    /**
     * Reads the double array from this **MessageParcel** object and writes it to the created empty array.
     *
     * @param { number[] } dataIn - Double array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readDoubleArray(dataIn: double[])
     */
    readDoubleArray(dataIn: number[]): void;

    /**
     * Reads the double array from this **MessageParcel** object.
     *
     * @returns { number[] } Double array read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readDoubleArray()
     */
    readDoubleArray(): number[];

    /**
     * Reads the Boolean array from this **MessageParcel** object and writes it to the created empty array.
     *
     * @param { boolean[] } dataIn - Boolean array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readBooleanArray(dataIn: boolean[])
     */
    readBooleanArray(dataIn: boolean[]): void;

    /**
     * Reads the Boolean array from this **MessageParcel** object.
     *
     * @returns { boolean[] } Boolean array read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readBooleanArray()
     */
    readBooleanArray(): boolean[];

    /**
     * Reads the character array from this **MessageParcel** object and writes it to the created empty array.
     *
     * @param { number[] } dataIn - Character array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readCharArray(dataIn: int[])
     */
    readCharArray(dataIn: number[]): void;

    /**
     * Reads the single character array from this **MessageParcel** object.
     *
     * @returns { number[] } Character array read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readCharArray()
     */
    readCharArray(): number[];

    /**
     * Reads the string array from this **MessageParcel** object and writes it to the created empty array.
     *
     * @param { string[] } dataIn - String array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readStringArray(dataIn: string[])
     */
    readStringArray(dataIn: string[]): void;

    /**
     * Reads the string array from this **MessageParcel** object.
     *
     * @returns { string[] } String array read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readStringArray()
     */
    readStringArray(): string[];

    /**
     * Reads the **Sequenceable** array from this **MessageParcel** object.
     *
     * @param { Sequenceable[] } sequenceableArray - **Sequenceable** array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readParcelableArray(parcelableArray: Parcelable[])
     */
    readSequenceableArray(sequenceableArray: Sequenceable[]): void;

    /**
     * Reads the **IRemoteObject** array from this **MessageParcel** object and writes it to the created empty array.
     *
     * @param { IRemoteObject[] } objects - **IRemoteObject** array to read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readRemoteObjectArray(objects: IRemoteObject[])
     */
    readRemoteObjectArray(objects: IRemoteObject[]): void;

    /**
     * Reads the **IRemoteObject** array from this **MessageParcel** object.
     *
     * @returns { IRemoteObject[] } **IRemoteObject** object array obtained.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readRemoteObjectArray(objects: IRemoteObject[])
     */
    readRemoteObjectArray(): IRemoteObject[];

    /**
     * Closes a file descriptor. This API is a static method.
     *
     * @param { number } fd - File descriptor to close.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence.closeFileDescriptor(fd: int)
     */
    static closeFileDescriptor(fd: number): void;

    /**
     * Duplicates a file descriptor. This API is a static method.
     *
     * @param { number } fd - File descriptor to duplicate.
     * @returns { number } New file descriptor.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence.dupFileDescriptor(fd: int)
     */
    static dupFileDescriptor(fd: number): number;

    /**
     * Checks whether this **MessageParcel** object contains file descriptors.
     *
     * @returns { boolean } Returns **true** if the **MessageParcel** object contains file descriptors; returns
     *     **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#containFileDescriptors()
     */
    containFileDescriptors(): boolean;

    /**
     * Writes a file descriptor to this **MessageParcel** object.
     *
     * @param { number } fd - File descriptor to write.
     * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeFileDescriptor(fd: int)
     */
    writeFileDescriptor(fd: number): boolean;

    /**
     * Reads the file descriptor from this **MessageParcel** object.
     *
     * @returns { number } File descriptor read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readFileDescriptor()
     */
    readFileDescriptor(): number;

    /**
     * Writes an anonymous shared object to this **MessageParcel** object.
     *
     * @param { Ashmem } ashmem - Anonymous shared object to write.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeAshmem(ashmem: Ashmem)
     */
    writeAshmem(ashmem: Ashmem): boolean;

    /**
     * Reads the anonymous shared object from this **MessageParcel** object.
     *
     * @returns { Ashmem } Anonymous share object obtained.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readAshmem()
     */
    readAshmem(): Ashmem;

    /**
     * Obtains the maximum amount of raw data that can be held by this **MessageParcel** object.
     *
     * @returns { number } Maximum amount of raw data that **MessageParcel** can hold, that is, 128 MB.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#getRawDataCapacity()
     */
    getRawDataCapacity(): number;

    /**
     * Writes raw data to this **MessageParcel** object.
     *
     * @param { number[] } rawData - Raw data to write. The size cannot exceed 128 MB.
     * @param { number } size - Size of the raw data, in bytes.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#writeRawDataBuffer(rawData: ArrayBuffer, size: int)
     */
    writeRawData(rawData: number[], size: number): boolean;

    /**
     * Reads raw data from this **MessageParcel** object.
     *
     * @param { number } size - Size of the raw data to read.
     * @returns { number[] } Raw data obtained, in bytes.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.MessageSequence#readRawDataBuffer(size: int)
     */
    readRawData(size: number): number[];
  }

  /**
   * Provides APIs for reading and writing data in specific format. During RPC or IPC, the sender can use the
   *     **write()** method provided by **MessageSequence** to write data in specific format to a **MessageSequence**
   *     object. The receiver can use the **read()** method provided by **MessageSequence** to read data in specific
   *     format from a **MessageSequence** object. The data formats include basic data types and arrays, IPC objects,
   *     interface tokens, and custom sequenceable objects. The read sequence must be the same as the write sequence.
   *     Otherwise, data parsing errors occurs.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @atomicservice [since 26.0.0]
   * @since 9 dynamic
   * @since 23 static
   */
  class MessageSequence {
    /**
     * Creates a **MessageSequence** object. This API is a static method. After this method is called, the system
     *     allocates a contiguous buffer in memory for storing the serialized data to be transmitted. This object is
     *     used to encapsulate request and response data in IPC/RPC communication.
     *
     * - The created **MessageSequence** object must be released by calling **reclaim()** after use; otherwise,
     *     memory leaks may occur.
     * - An **MessageSequence** object cannot be used across threads.
     * - You are advised to create the object on demand when IPC/RPC communication is required, and to avoid
     *     frequent creation and release.
     *
     * **Paired calling**: For the **MessageSequence** object created via **create()**, you must call **reclaim()**
     *     to release its resources after use. Otherwise, memory resource leaks occur.
     *
     * @returns { MessageSequence } **MessageSequence** object created.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    static create(): MessageSequence;

    /**
     * Reclaims the **MessageSequence** object that is no longer used.
     *
     * - This method and the **create ()** method must be used in pairs. For the **MessageSequence** object created via
     *     **create()**, you must call **reclaim()** to release its resources after use. If **reclaim()** is not called
     *     in a timely manner, memory resources leaks occur.
     * - After this method is called, the object cannot be used anymore.
     * - It is advised to call this method in a finally block or at the end of a task to ensure resource release.
     * - Do not release the object across threads in asynchronous operations.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    reclaim(): void;

    /**
     * Serializes the remote object and writes it to the [MessageSequence]{@link rpc.MessageSequence} object. After this
     *     method is called, the **IRemoteObject** object is serialized into a specific format and stored in the buffer
     *     of **MessageSequence**. The internal write pointer position is updated accordingly. The serialized object can
     *     be deserialized and read on the receiving side via the **readRemoteObject** method.
     *
     * - Only a valid **IRemoteObject** object can be written. Passing an invalid object will cause an exception to be
     *     thrown.
     * - The serialized object occupies a fixed amount of buffer space.
     * - This method and the **readRemoteObject** method must be used in pairs.
     *
     * @param { IRemoteObject } obj - Remote object to serialize and write to the **MessageSequence** object.
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
     * Reads the remote object from **MessageSequence**. You can use this API to deserialize the **MessageSequence**
     *     object to generate an **IRemoteObject**. The remote object is read in the order in which it is written to
     *     this **MessageSequence** object. After this method is called, the serialized remote object data is read from
     *     the **MessageSequence** buffer and deserialized into an **IRemoteObject** instance. The read operation
     *     updates the internal read pointer position.
     *
     * - Before reading, ensure that there is readable data available in the buffer.
     * - If a **RemoteObject** was written, the read result will be a **RemoteProxy**.
     * - If the read operation fails, an exception will be thrown. It is advised to use a try-catch block to catch it.
     *
     * @returns { IRemoteObject } Remote object read, which is used for IPC/RPC communication.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readRemoteObject(): IRemoteObject;

    /**
     * Writes an interface token to this **MessageSequence** object. The remote object can use this interface token to
     *     verify the communication. This method is applicable to scenarios where the consistency of communication
     *     interfaces between both parties needs to be verified, such as cross-process service calls, secure
     *     communication verification, and identifying the interface type provided by the server. It is advised to use a
     *     unique and meaningful string as the interface token, such as **com.example.service**, and avoid including
     *     sensitive information. The length of the token should be less than 40960. After this method is called, the
     *     interface token string is serialized and stored in the **MessageSequence** buffer. Upon receiving a
     *     communication request, the remote side can read the interface token to verify the legitimacy of the request
     *     source.
     *
     * - This method and the [readInterfaceToken]{@link rpc.MessageSequence#readInterfaceToken} method must be used in
     *     pairs.
     * - If the length limit is exceeded, a parameter error exception will be thrown.
     *
     * @param { string } token - Interface token of the string type. It is used to verify the interface identity for the
     *     current communication. The remote object can use this information to verify the validity of the
     *     communication. The value length must be less than 40960.
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
     * Reads the interface token from this **MessageSequence** object. The interface token is read in the sequence in
     *     which it is written to the **MessageSequence** object. The local object can use it to verify the
     *     communication.
     *
     * - This method and the [writeInterfaceToken]{@link rpc.MessageSequence#writeInterfaceToken} method must be used in
     *     pairs.
     * - Before reading, ensure that there is readable data available in the buffer.
     * - It is advised to read and verify the interface token immediately after receiving an IPC request.
     *
     * @returns { string } Interface token obtained.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readInterfaceToken(): string;

    /**
     * Obtains the data size of this **MessageSequence** object.
     *
     * - Check the total size of written data.
     * - Check the buffer usage.
     * - Check the data size before data transmission.
     *
     * @returns { int } Size of the **MessageSequence** instance obtained, in bytes. It is used to adjust the data read
     *     range. You are advised to set this parameter to the actual size of the written data.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getSize(): int;

    /**
     * Obtains the capacity of this **MessageSequence** object.
     *
     * @returns { int } Capacity of the obtained **MessageSequence** object, in bytes.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getCapacity(): int;

    /**
     * Sets the size of the data contained in this **MessageSequence** object.
     *
     * @param { int } size - Data size to set, in bytes.
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
     * Sets the storage capacity of this **MessageSequence** object.
     *
     * @param { int } size - Storage capacity of the **MessageSequence** object to set, in bytes. It is used to restrict
     *     the maximum number of bytes that can be written. You are advised to set this parameter based on the actual
     *     data volume.
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
     * Obtains the writable capacity (in bytes) of this **MessageSequence** object.
     *
     * @returns { int } Writable capacity of the **MessageSequence** instance, in bytes.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getWritableBytes(): int;

    /**
     * Obtains the readable capacity of this **MessageSequence** object.
     *
     * @returns { int } Readable capacity of the **MessageSequence** instance, in bytes.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getReadableBytes(): int;

    /**
     * Obtains the read position of this **MessageSequence** object.
     *
     * @returns { int } Read position obtained.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getReadPosition(): int;

    /**
     * Obtains the write position of this **MessageSequence** object.
     *
     * @returns { int } Write position obtained.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getWritePosition(): int;

    /**
     * Moves the read pointer to the specified position.
     *
     * @param { int } pos - Target position from which to start reading data, in bytes. It is used to reposition the
     *     read pointer of the **MessageSequence**. The value must be within the range of
     *     [0, [getSize]{@link rpc.MessageSequence#getSize}].
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
     * Moves the write pointer to the specified position.
     *
     * @param { int } pos - Target position from which to start writing data, in bytes. It is used to reposition the
     *     write pointer of the **MessageSequence**. The value must be within the range of
     *     [0, [getSize]{@link rpc.MessageSequence#getSize}].
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
     * Writes information to this **MessageSequence** object indicating that no exception occurred. This method is
     *     typically called in the server-side implementation of IPC/RPC communication and within the
     *     **onRemoteMessageRequest** callback.
     *
     * - This method must be used in pairs with the [readException]{@link rpc.MessageSequence#readException} method.
     * - After processing a request, the server should call **writeNoException()** to write information indicating that
     *     no exception occurred.
     * - After receiving the response, the client should call [readException]{@link rpc.MessageSequence#readException}
     *     to retrieve exception information.
     * - If the server does not call **writeNoException()**, the client's call to
     *     [readException]{@link rpc.MessageSequence#readException} will fail.
     *
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    writeNoException(): void;

    /**
     * Reads the exception information from this **MessageSequence** object. This method is applicable to scenarios
     *     where the exception status needs to be checked after a response from the remote service is received.
     *
     * - This method is used on the client side in IPC/RPC communication.
     * - This method is called after the response to a **sendMessageRequest** API call is received.
     * - It is advised to call this method first after each IPC/RPC call.
     * - If an exception is detected, handle it immediately and stop subsequent data reading. After exception handling,
     *     it is advised to call **reclaim()** to release the **MessageSequence** object.
     * - This method must be used in pairs with the [writeNoException]{@link rpc.MessageSequence#writeNoException}
     *     method.
     * - Calling sequence: the server processes a request → call
     *     [writeNoException]{@link rpc.MessageSequence#writeNoException} → the client receives the response → call
     *     [readException]{@link rpc.MessageSequence#readException}. If the server does not call
     *     [writeNoException]{@link rpc.MessageSequence#writeNoException}, calling this method will fail.
     *
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readException(): void;

    /**
     * Writes a byte value to this **MessageSequence** object. After this method is called, the byte value is stored as
     *     an 8-bit unsigned integer at the current write pointer position in the buffer, and the write pointer is
     *     automatically updated. This method is suitable for transmitting small-range integers or flag data.
     *
     * - Storage range: 0 to 255 (unsigned) or -128 to 127 (signed).
     * - Data alignment is byte-aligned.
     * - The value must be within the byte range. Values outside this range may cause data truncation.
     * - This method and the [readByte]{@link rpc.MessageSequence#readByte} method must be used in pairs.
     * - This method is not suitable for transmitting large-range values. For large-range values, it is advised to use
     *     [writeInt]{@link rpc.MessageSequence#writeInt} or [writeLong]{@link rpc.MessageSequence#writeLong}.
     *
     * @param { int } val - Byte value to write. The value range is [0, 255]. If the value exceeds this range, it will
     *     be automatically truncated to 8 bits, which may result in loss of data precision. It is advised to check the
     *     value range before passing it.
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
     * Writes a short integer to this **MessageSequence** object.
     *
     * - Values out of range will be truncated.
     * - This API must be used together with [readShort]{@link rpc.MessageSequence#readShort}.
     * - One write corresponds to one read.
     *
     * @param { int } val - Short integer to write. The value range is [-2^15, 2^15-1]. This is suitable for
     *     transmitting small-range integer data (such as port numbers and IDs). Values outside this range will cause
     *     data truncation or write failure. For values in the 0–255 range, it is advised to use **writeByte**. For
     *     standard integers, use **writeInt**. For large integers, use **writeLong**.
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
     * Writes an integer to this **MessageSequence** object. After this method is called, the integer is stored as an
     *     32-bit signed integer at the current write pointer position in the buffer, and the write pointer is
     *     automatically updated. This method is suitable for transmitting standard integer data. For small-range
     *     values, it is advised to use [writeByte]{@link rpc.MessageSequence#writeByte} or
     *     [writeShort]{@link rpc.MessageSequence#writeShort} to improve efficiency. For large-range values, it is
     *     advised to use [writeLong]{@link rpc.MessageSequence#writeLong}.
     *
     * - This API must be used in pairs with [readInt]{@link rpc.MessageSequence#readInt}.
     * - One write corresponds to one read.
     * - 4 bytes (32 bits) of storage space are occupied.
     * - The data is stored in the system default byte order.
     * - Values outside this range will cause data truncation or write failure.
     *
     * @param { int } val - Integer to write. The value range is [-2^31, 2^31-1]. This parameter is suitable for
     *     transmitting standard integer data (such as counters, index values, and configuration parameters). Values
     *     outside this range will cause data truncation or write failure. For small-range values (0-255 or -128-127),
     *     it is advised to use **writeByte** to improve efficiency. For small-range integers (-32768-32767), it is
     *     advised to use **writeShort**. For large integers, it is advised to use **writeLong**.
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
     * Writes a long integer to this **MessageSequence** object.
     *
     * - This method and the [readLong]{@link rpc.MessageSequence#readLong} method must be used in pairs.
     * - One write corresponds to one read.
     *
     * @param { long } val - Long integer to write. The value range is [-2^63, 2^63-1]. Values outside this range will
     *     cause data truncation or write failure. You are advised to select a proper method
     *     (writeByte/writeShort/writeInt/writeLong) based on the value range to improve transmission
     *      efficiency.
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
     * Writes a double value to this **MessageSequence** object. Since the system internally processes float data as
     *     double, the data actually written is stored in double-precision format.
     *
     * @param { double } val - Double value to write. It is applicable to the transmission of floating-point data (such
     *     as coordinates, ratios, and measurement values). This method and the
     *     [readFloat]{@link rpc.MessageSequence#readFloat} method must be used in pairs.
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
     * Writes a double value to this **MessageSequence** object.
     *
     * - This method and the [readDouble]{@link rpc.MessageSequence#readDouble} method must be used in pairs.
     * - One write corresponds to one read.
     *
     * @param { double } val - Double value to write.
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
     * Writes a Boolean value to this **MessageSequence** object.
     *
     * - This method and the [readBoolean]{@link rpc.MessageSequence#readBoolean} method must be used in pairs.
     * - One write corresponds to one read.
     *
     * @param { boolean } val - Boolean value to write. The value **true** indicates logical true, and the value
     *     **false** indicates logical false. The value occupies 1 byte of storage space after being written.
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
     * Writes a character to this **MessageSequence** object.
     *
     * - This method and the [readChar]{@link rpc.MessageSequence#readChar} method must be used in pairs.
     * - One write corresponds to one read.
     *
     * @param { int } val - **Char** value to write. The value range is [0, 65535], which corresponds to the Unicode
     *     character encoding range. Values outside this range may cause character encoding errors.
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
     * Writes a string to this **MessageSequence** object. After this method is called, the string is serialized and
     *     stored to the buffer. During the write operation, the string length is stored first, followed by the byte
     *     data.
     *
     * - This method must be used in pairs with the [readString]{@link rpc.MessageSequence#readString} method.
     * - The length is written first, followed by the content.
     * - Multilingual character sets are supported.
     * - The length information helps [readString]{@link rpc.MessageSequence#readString} determine the read boundary.
     * - Note the difference between the number of characters and the number of bytes. Chinese characters occupy more
     *     bytes.
     * - Long strings consume more buffer space.
     * - An empty string can also be written normally.
     *
     * @param { string } val - String to write. The length of the string must be less than 40960.
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
     * Writes a **Parcelable** object to this **MessageSequence** object. After this method is called, the
     *     **marshalling** method of the **Parcelable** object is called to serialize the member variables of the object
     *     one by one and write them to **MessageSequence**. This method supports the transmission of custom data
     *     structure objects. It is applicable to scenarios such as transmitting complex data structures, service
     *     objects, and configuration information.
     *
     * - The **Parcelable** API defines standard methods for serialization and deserialization.
     * - The **marshalling** method is responsible for writing the object state to **MessageSequence**.
     * - The **unmarshalling** method is responsible for restoring the object state from **MessageSequence**.
     * - The service must implement the specific serialization logic itself.
     * - Only objects that implement the **Parcelable** API can be passed.
     * - The **marshalling** method must correctly implement the writing of all member variables.
     * - The serialization order must be consistent with the deserialization order.
     * - It is advised to handle exceptions within the **marshalling** method.
     * - Complex objects may occupy a significant amount of buffer space.
     *
     * @param { Parcelable } val - **Parcelable** object to write.
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
     * Writes a byte array to this **MessageSequence** object.
     *
     * - This method and the [readByteArray]{@link rpc.MessageSequence#readByteArray(dataIn: int[])} method must be used
     *     in pairs.
     * - The length of the array to be read must match the length of the array that was written.
     *
     * @param { int[] } byteArray - Byte array to be written, which is used to transfer byte sequence data in batches.
     *     The array cannot be empty, and each element must be within the range of [0, 255]. Values out of range may be
     *     truncated.
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
     * Writes a short array to this **MessageSequence** object.
     *
     * - This method and the [readShortArray]{@link rpc.MessageSequence#readShortArray(dataIn: int[])} method must be
     *     used in pairs.
     * - The length of the array to be read must match the length of the array that was written.
     *
     * @param { int[] } shortArray - Short array to write. The value range of array elements is [-2^15, 2^15-1].
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
     * Writes an integer array to this **MessageSequence** object.
     *
     * - This API must be used together with [readIntArray]{@link rpc.MessageSequence#readIntArray(dataIn: int[])}.
     * - The length of the array to be read must match the length of the array that was written.
     *
     * @param { int[] } intArray - Integer array to write. The value range of array elements is [-2^31, 2^31-1]. Values
     *     outside this range will cause data truncation or write failure.
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
     * Writes a long array to this **MessageSequence** object.
     *
     * - This method and the [readLongArray]{@link rpc.MessageSequence#readLongArray(dataIn: long[])} method must be
     *     used in pairs.
     * - The length of the array to be read must match the length of the array that was written.
     *
     * @param { long[] } longArray - Long integer array to write. Each element is a 64-bit integer. Values out of range
     *     will be truncated. You are advised to use **BigInt** to process ultra-large values.
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
     * Writes a double array to this **MessageSequence** object.
     *
     * - This method and the [readFloatArray]{@link rpc.MessageSequence#readFloatArray(dataIn: double[])} method must be
     *     used in pairs.
     * - The length of the array to be read must match the length of the array that was written.
     *
     * @param { double[] } floatArray - Double array to write. The system processes float data as that of the double
     *     type. Therefore, the total number of bytes occupied by a float array must be calculated as the double type.
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
     * Writes a double array to this **MessageSequence** object.
     *
     * - This method and the [readDoubleArray]{@link rpc.MessageSequence#readDoubleArray(dataIn: double[])} method must
     *     be used in pairs.
     * - The length of the array to be read must match the length of the array that was written.
     *
     * @param { double[] } doubleArray - Double array to write.
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
     * Writes a Boolean array to this **MessageSequence** object.
     *
     * - This method and the [readBooleanArray]{@link rpc.MessageSequence#readBooleanArray(dataIn: boolean[])} method
     *     must be used in pairs.
     * - The length of the array to be read must match the length of the array that was written.
     *
     * @param { boolean[] } booleanArray - Boolean array to write.
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
     * Writes a character array to this **MessageSequence** object.
     *
     * - This API must be used together with [readCharArray]{@link rpc.MessageSequence#readCharArray(dataIn: int[])}.
     * - The length of the array to be read must match the length of the array that was written.
     *
     * @param { int[] } charArray - Character array to write.
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
     * Writes a string array to this **MessageSequence** object.
     *
     * - This method and the [readStringArray]{@link rpc.MessageSequence#readStringArray(dataIn: string[])} method must
     *     be used in pairs.
     * - The length of the array to be read must match the length of the array that was written.
     *
     * @param { string[] } stringArray - String array to write. Each string element must be less than 40960 in length.
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
     * Writes the **Parcelable** array to this **MessageSequence** object. This method is applicable to scenarios where
     *     multiple custom data structure objects need to be transmitted in batch, such as transmitting multiple service
     *     records, batch configuration information, or multiple entity objects.
     *
     * - This method and the [readParcelableArray]{@link rpc.MessageSequence#readParcelableArray} method must be used in
     *     pairs.
     * - The length of the array to be read must match the length of the array that was written.
     *
     * @param { Parcelable[] } parcelableArray - **Parcelable** array to write.
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
     * Writes an **IRemoteObject** array to this **MessageSequence** object. This method is applicable to scenarios
     *     where multiple remote objects need to be passed, such as registering multiple service proxies in batches,
     *     passing multiple callback APIs, and managing multiple service endpoints.
     *
     * - This method and the
     *     [readRemoteObjectArray]{@link rpc.MessageSequence#readRemoteObjectArray(objects: IRemoteObject[])} method
     *     must be used in pairs.
     * - The length of the array to be read must match the length of the array that was written.
     *
     * @param { IRemoteObject[] } objectArray - **IRemoteObject** array to write.
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
     * Reads the byte value from this **MessageSequence** object.
     *
     * - This method and the [writeByte]{@link rpc.MessageSequence#writeByte} method must be used in pairs.
     * - One write corresponds to one read.
     *
     * @returns { int } Byte value read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readByte(): int;

    /**
     * Reads the short integer from this **MessageSequence** object.
     *
     * - This method and the [writeShort]{@link rpc.MessageSequence#writeShort} method must be used in pairs.
     * - Note that the value range for writing is [-2^15, 2^15 - 1]. Values outside this range will cause data
     *     truncation.
     *
     * @returns { int } Short integer read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readShort(): int;

    /**
     * Reads the integer from this **MessageSequence** object.
     *
     * - The integer occupies 4 bytes of storage space.
     * - Storage range: –2^31 to 2^31 – 1.
     *
     * @returns { int } Integer read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    readInt(): int;

    /**
     * Reads the long integer from this **MessageSequence** object.
     *
     * - The value range is [-2^63, 2^63-1].
     * - The long integer occupies 8 bytes of storage space.
     *
     * @returns { long } Long integer read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readLong(): long;

    /**
     * Reads a float value from this **MessageSequence** instance. Since the system internally processes float data as
     *     double, the read data is returned with double precision.
     *
     * @returns { double } Double value read. Since the system internally processes float data as double, the read data
     *     is returned with double precision.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readFloat(): double;

    /**
     * Reads the double value from this **MessageSequence** object.
     *
     * - This API returns a newly created array. It is not necessary to pre-allocate the array.
     * - The array elements are double-precision floating-point numbers.
     *
     * @returns { double } Double value read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readDouble(): double;

    /**
     * Reads the Boolean value from this **MessageSequence** object.
     *
     * @returns { boolean } Boolean value read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readBoolean(): boolean;

    /**
     * Reads the character from this **MessageSequence** object.
     *
     * @returns { int } **Char** value read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readChar(): int;

    /**
     * Reads the string from this **MessageSequence** object.
     *
     * - The length is read first, followed by the content.
     *
     * @returns { string } String read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    readString(): string;

    /**
     * Reads the **Parcelable** object from this **MessageSequence** object to the specified object (**dataIn**).
     *
     * - The **dataIn** parameter must be an instantiated **Parcelable** object.
     * - The **unmarshalling** method must read data in the same sequence as the **marshalling** method.
     * - The deserialization order must be consistent with the serialization order.
     * - It is advised to handle exceptions within the **unmarshalling** method.
     *
     * @param { Parcelable } dataIn - Object that reads member variables from the **MessageSequence** object.
     *     Instantiate the serializable object before using it.
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
     * Reads the byte array from this **MessageSequence** object and writes it to the created empty array. After
     *     reading, the **dataIn** array will be filled with the read byte data, and the read pointer advances by the
     *     corresponding number of bytes.
     *
     * @param { int[] } dataIn - Stores the byte array read from **MessageSequence**. It must be pre-allocated as an
     *     empty array, and its length must match the length of the array that was written.
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
     * Reads the byte array from this **MessageSequence** object. After the read operation, the byte array data is
     *     returned, the read pointer advances by the number of bytes read.
     *
     * @returns { int[] } Byte array read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readByteArray(): int[];

    /**
     * Reads the short array from this **MessageSequence** object and writes it to the created empty array.
     *
     * @param { int[] } dataIn - Stores the short integer array read from the MessageSequence. A pre-allocated empty
     *     array is required, and its length must match the length of the array that was written.
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
     * Reads the short array from this **MessageSequence** object.
     *
     * @returns { int[] } Short array read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readShortArray(): int[];

    /**
     * Reads the integer array from this **MessageSequence** object and writes it to the created empty array.
     *
     * - An empty array must be created in advance, and its length must be the same as that of the array written.
     * - The value range of array elements is [-2^31, 2^31-1].
     *
     * @param { int[] } dataIn - Stores the integer array read from **MessageSequence**. It must be pre-allocated as an
     *     empty array, and its length must match the length of the array that was written.
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
     * Reads the integer array from this **MessageSequence** object.
     *
     * @returns { int[] } Integer array read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readIntArray(): int[];

    /**
     * Reads a long array from this **MessageSequence** object and writes it to a created empty array.
     *
     * @param { long[] } dataIn - Stores the long integer array read from **MessageSequence**. It must be pre-allocated
     *     as an empty array, and its length must match the length of the array that was written.
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
     * Reads a long array from this **MessageSequence** object.
     *
     * @returns { long[] } Long array read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readLongArray(): long[];

    /**
     * Reads the double array from this **MessageSequence** object and writes it to the created empty array.
     *
     * @param { double[] } dataIn - Stores the double-precision floating-point number array read from
     *     **MessageSequence**. It must be pre-allocated as an empty array, and its length must match the length of the
     *     array that was written. The system processes float data as that of the double type. Therefore, the total
     *     number of bytes occupied by a float array must be calculated as the double type.
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
     * Reads the double array from this **MessageSequence** object. The system processes float data as that of the
     *     double type. Therefore, the total number of bytes occupied by a float array must be calculated as the double
     *     type.
     *
     * @returns { double[] } Double array read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readFloatArray(): double[];

    /**
     * Reads the double array from this **MessageSequence** object and writes it to the created empty array.
     *
     * @param { double[] } dataIn - Stores the double-precision floating-point number array read from
     *     **MessageSequence**. It must be pre-allocated as an empty array, and its length must match the length of the
     *     array that was written.
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
     * Reads the double array from this **MessageSequence** object. The system processes float data as that of the
     *     double type. Therefore, the total number of bytes occupied by a float array must be calculated as the double
     *     type.
     *
     * @returns { double[] } Double array read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readDoubleArray(): double[];

    /**
     * Reads the Boolean array from this **MessageSequence** object and writes it to the created empty array.
     *
     * @param { boolean[] } dataIn - Boolean array read from the message sequence. An empty array must be created in
     *     advance, and the length of the array must be the same as that of the array written.
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
     * Reads a boolean array from this MessageSequence instance.
     *
     * - This API returns a newly created array. It is not necessary to pre-allocate the array.
     * - The array elements are of the boolean type.
     *
     * @returns { boolean[] } Boolean array read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readBooleanArray(): boolean[];

    /**
     * Reads the character array from this **MessageSequence** object and writes it to the created empty array.
     *
     * @param { int[] } dataIn - Stores the character array read from **MessageSequence**. It must be pre-allocated as
     *     an empty array, and its length must match the length of the array that was written.
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
     * Reads the character array from this **MessageSequence** object.
     *
     * - This API returns a newly created array. It is not necessary to pre-allocate the array.
     * - The array elements are character codes, with a value range of [0, 65535].
     *
     * @returns { int[] } Character array read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readCharArray(): int[];

    /**
     * Reads the string array from this **MessageSequence** object and writes it to the created empty array.
     *
     * - An empty array must be created in advance, and its length must be the same as that of the array written.
     * - After the read operation, the **dataIn** array will be filled with the read byte data.
     * - The read pointer advances by the corresponding number of bytes.
     *
     * @param { string[] } dataIn - String array to read.
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
     * Reads the string array from this **MessageSequence** object.
     *
     * - This API returns a newly created array. It is not necessary to pre-allocate the array.
     * - The length of a single element in the array ranges from 0 to 40959 bytes.
     *
     * @returns { string[] } String array read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readStringArray(): string[];

    /**
     * Reads the **Parcelable** array from this **MessageSequence** object. This method is applicable to scenarios where
     *     multiple custom data structure objects that are transmitted in batches need to be received, such as reading
     *     multiple service records, batch configuration information, or multiple entity objects.
     *
     * @param { Parcelable[] } parcelableArray - Array of **Parcelable** objects to read. Instantiate the objects before
     *     use. The lengths of the serialized and deserialized arrays must be consistent.
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
     * Reads the **IRemoteObject** array from this **MessageSequence** object and writes it to the created empty array.
     *     This method is applicable to scenarios where multiple remote objects that are passed in batches need to be
     *     passed, such as obtaining multiple service proxies in batches, receiving multiple callback APIs, and managing
     *     multiple service endpoints.
     *
     * - An empty array must be created in advance, and its length must be the same as that of the array written.
     * - If the read operation fails, an exception will be thrown. It is advised to use a try-catch block to catch it.
     *
     * @param { IRemoteObject[] } objects - Array of **IRemoteObject** objects read from **MessageSequence**, which is
     *     used for IPC/RPC communication and stores multiple remote objects.
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
     * Reads the **IRemoteObject** array from this **MessageSequence** object.
     *
     * @returns { IRemoteObject[] } **IRemoteObject** object array. If an empty array is written, **nullptr** is
     *     returned.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readRemoteObjectArray(): IRemoteObject[];

    /**
     * Closes a file descriptor. This API is a static method.
     *
     * - After the file is no longer needed, close the file descriptor in a timely manner to avoid resource leaks.
     * - Ensure that the file operations are complete before closing the file descriptor.
     * - Do not close a file descriptor that has already been closed.
     * - After the file descriptor is closed, the file cannot be read or written.
     *
     * @param { int } fd - File descriptor to close.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    static closeFileDescriptor(fd: int): void;

    /**
     * Duplicates a file descriptor. This API is a static method.
     *
     * - The file descriptor should be duplicated before IPC transmission to prevent the original descriptor from being
     *     closed.
     * - Multiple processes can share the same file.
     * - The file offset needs to be managed independently.
     * - After duplication, both the original and the duplicated descriptors must be closed separately.
     * - An invalid file descriptor should not be duplicated.
     * - The lifecycle of each descriptor must be managed independently after duplication.
     *
     * @param { int } fd - File descriptor to duplicate.
     * @returns { int } New file descriptor.
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
     * Checks whether this **MessageSequence** object contains file descriptors. This method is applicable to scenarios
     *     where you need to determine whether to process file descriptors during file transfer or check the data type
     *     before receiving data to determine the processing method.
     *
     * @returns { boolean } Returns **true** if the **MessageSequence** object contains file descriptors; returns
     *     **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    containFileDescriptors(): boolean;

    /**
     * Writes a file descriptor to this **MessageSequence** object. After this method is called, the file descriptor is
     *     encapsulated and transmitted across processes through the Binder mechanism. The receiving side can obtain the
     *     file descriptor via **readFileDescriptor** and perform file operations accordingly.
     *
     * - The file descriptor is transmitted across processes through Binder's FD passing mechanism.
     * - The receiving side obtains a new mapped file descriptor.
     * - Both descriptors actually point to the same file resource.
     * - Various descriptor types, such as regular files, pipes, and sockets, are supported.
     * - The file descriptor must be valid and already opened.
     * - After the write operation, the original descriptor remains valid and must be managed by the service itself.
     * - It is advised to duplicate the file descriptor using **dupFileDescriptor** before transmission.
     * - After transmission, the receiving side should use the descriptor promptly to avoid resource waste.
     * - After reading, it is advised to close the descriptor in a timely manner to prevent resource leaks.
     *
     * @param { int } fd - File descriptor, which is usually obtained through a file operation API (such as
     *     **fileIo.open**).
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
     * Reads the file descriptor from this **MessageSequence** object. The receiver reads the mapped new file descriptor
     *     ID, which is different from the descriptor ID written by the sender but points to the same file resource.
     *     After reading, it is advised to use and close the descriptor in a timely manner to prevent resource leaks. If
     *     the descriptor needs to be used for a long time, you can call **dupFileDescriptor** to duplicate the
     *     descriptor.
     *
     * - This method and the [writeFileDescriptor]{@link rpc.MessageSequence#writeFileDescriptor} method must be used in
     *     pairs.
     * - Do not rely on the fd ID of the source end.
     * - After the read operation, the lifecycle of the file descriptor needs to be managed.
     * - You are advised to use the descriptor promptly to avoid resource waste.
     * - Close the file descriptor in a timely manner after use.
     *
     * @returns { int } File descriptor read.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readFileDescriptor(): int;

    /**
     * Writes an anonymous shared object to this **MessageSequence** object.
     *
     * - Create an **Ashmem** object: Ashmem.create()
     * - Perform memory map and write data: [mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem} +
     *     [writeDataToAshmem]{@link rpc.Ashmem#writeDataToAshmem}
     * - Write **Ashmem** to **MessageSequence**: writeAshmem()
     * - Read **Ashmem** by the receiving side: [readAshmem]{@link rpc.MessageSequence#readAshmem}
     * - Perform memory mapping and read data by the receiving side: mapReadWriteAshmem() + readDataFromAshmem()
     * - This method must be used in pairs with the **readAshmem()** method.
     * - Call sequence: writeAshmem() → transmit **MessageSequence** →
     *     [readAshmem]{@link rpc.MessageSequence#readAshmem} →
     *     [mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem} →
     *     [readDataFromAshmem]{@link rpc.Ashmem#readDataFromAshmem}
     * - Before using this method, create an **Ashmem** object and write data to it.
     *
     * @param { Ashmem } ashmem - Anonymous shared object to write.
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
     * Reads the anonymous shared object from this **MessageSequence** object. Before using this method, call
     *     [mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem} to perform memory mapping.
     *
     * - readAshmem(): obtains an object.
     * - [mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem}: performs memory mapping.
     * - [readDataFromAshmem]{@link rpc.Ashmem#readDataFromAshmem}: reads data.
     * - unmapAshmem(): cancels mapping.
     * - closeAshmem(): closes an object.
     * - Data can be read only after memory mapping.
     * - Mapping needs to be canceled after data is read.
     * - The object needs to be closed in a timely manner to avoid memory leaks.
     *
     * @returns { Ashmem } Anonymous shared object for memory data sharing across processes. Before reading data, call
     *     [mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem} to perform memory mapping.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    readAshmem(): Ashmem;

    /**
     * Obtains the maximum amount of raw data that can be held by this **MessageSequence** object. This method is
     *     applicable to scenarios where you need to check whether the capacity meets the requirements before large-data
     *     transmission, or to estimate the data size in advance before processing large batches of data.
     *
     * @returns { int } Maximum amount of raw data that **MessageSequence** can hold, that is, 128 MB.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getRawDataCapacity(): int;

    /**
     * Writes raw data to this **MessageSequence** object.
     *
     * > **NOTE**
     * >
     * > This API cannot be called for multiple times in one parcel communication.
     * >
     * > When the data volume is large (greater than 32 KB), the shared memory is used to transmit data. In this case,
     * >     pay attention to the SELinux configuration.
     *
     * @param { number[] } rawData - Raw data to write. The size cannot exceed 128 MB.
     * @param { number } size - Size of the raw data, in bytes.
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
     * Writes raw data to this **MessageSequence** object.
     *
     * > **NOTE**
     * >
     * > This API cannot be called for multiple times in one parcel communication.
     * >
     * > When the data volume is large (greater than 32 KB), the shared memory is used to transmit data. In this case,
     * >     pay attention to the SELinux configuration.
     *
     * @param { ArrayBuffer } rawData - Raw data to write. The size cannot exceed 128 MB.
     * @param { int } size - Size of the raw data, in bytes.
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
     * Reads raw data from this **MessageSequence** object.
     *
     * @param { number } size - Size of the original data to read, in bytes.
     * @returns { number[] } Raw data obtained, in bytes.
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
     * Reads raw data from this **MessageSequence** object.
     *
     * - The size must match the size of the data written.
     * - This API must not be called multiple times within a single parcel communication.
     * - When transmitting large data volumes, be mindful of system resource usage.
     * - This method and the [writeRawDataBuffer]{@link rpc.MessageSequence#writeRawDataBuffer} method must be used in
     *     pairs.
     *
     * @param { int } size - Size of the original data to read, in bytes. The value must match the size of the data
     *     written.
     * @returns { ArrayBuffer } Raw data obtained, in bytes.
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
     * Writes data of the ArrayBuffer type to this **MessageSequence** object.
     *
     * - This method must be used in pairs with the [readArrayBuffer]{@link rpc.MessageSequence#readArrayBuffer} method.
     * - **typeCode** written must be consistent with **typeCode** read. Otherwise, data exceptions may occur.
     * - Calling sequence: call **writeArrayBuffer()** to write the data → call
     *     [readArrayBuffer]{@link rpc.MessageSequence#readArrayBuffer} to read the data
     * - The **typeCode** parameter determines the data write and read methods.
     * - A mismatch between the write and read **typeCode** values will cause data parsing errors.
     * - You must select the correct [TypeCode]{@link rpc.TypeCode} enumeration value based on the actual data type.
     *
     * @param { ArrayBuffer } buf - ArrayBuffer data to be written. The data is formatted and written based on the
     *     TypedArray type specified by **typeCode**.
     * @param { TypeCode } typeCode - TypedArray type of the ArrayBuffer data.
     *     <br>The underlying write mode is determined based on the enum value of **TypeCode** passed by the service.
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
     * Reads data of the ArrayBuffer type from this **MessageSequence**.
     *
     * - This method and the [writeArrayBuffer]{@link rpc.MessageSequence#writeArrayBuffer} method must be used in
     *     pairs.
     * - The read **typeCode** must be consistent with the write **typeCode**, and the order must also match.
     * - A mismatch in **typeCode** values may cause data exception or errors. It is advised to select an appropriate
     *     [TypeCode]{@link rpc.TypeCode} value based on the service type.
     *
     * @param { TypeCode } typeCode - TypedArray type of the ArrayBuffer data.
     *     <br>The underlying read mode is determined based on the enum value of **TypeCode** passed by the service.
     * @returns { ArrayBuffer } ArrayBuffer data, which is used to store the binary data read from **MessageSequence**.
     *     The data can be accessed and operated using a TypedArray.
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
   * Writes objects of classes to a **MessageParcel** and reads them from the **MessageParcel** during IPC.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead rpc.Parcelable
   */
  interface Sequenceable {
    /**
     * Marshals the sequenceable object into a **MessageParcel** object.
     *
     * @param { MessageParcel } dataOut - **MessageParcel** object to which the sequenceable object is to be marshaled.
     * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.Parcelable#marshalling(dataOut: MessageSequence)
     */
    marshalling(dataOut: MessageParcel): boolean;

    /**
     * Unmarshals this sequenceable object from a **MessageParcel** object.
     *
     * @param { MessageParcel } dataIn - **MessageParcel** object in which the sequenceable object is to be unmarshaled.
     * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.Parcelable#unmarshalling(dataIn: MessageSequence)
     */
    unmarshalling(dataIn: MessageParcel): boolean;
  }

  /**
   * Writes an object to a **MessageSequence** and reads it from the **MessageSequence** during IPC.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 9 dynamic
   * @since 23 static
   */
  interface Parcelable {
    /**
     * Marshals this **Parcelable** object into a **MessageSequence** object.
     *
     * @param { MessageSequence } dataOut - **MessageSequence** object to which the **Parcelable** object is to be
     *     marshaled.
     * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    marshalling(dataOut: MessageSequence): boolean;

    /**
     * Unmarshals this **Parcelable** object from a **MessageSequence** object.
     *
     * @param { MessageSequence } dataIn - **MessageSequence** object from which the **Parcelable** object is to be
     *     unmarshaled.
     * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    unmarshalling(dataIn: MessageSequence): boolean;
  }

  /**
   * Defines the response to the request.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead rpc.RequestResult
   */
  interface SendRequestResult {
    /**
     * Error code.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.RequestResult#errCode
     */
    errCode: number;

    /**
     * Message code.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.RequestResult#code
     */
    code: number;

    /**
     * **MessageParcel** object sent to the remote process.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.RequestResult#data
     */
    data: MessageParcel;

    /**
     * **MessageParcel** object returned by the remote process.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.RequestResult#reply
     */
    reply: MessageParcel;
  }

  /**
   * Defines the response to the request.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 9 dynamic
   * @since 23 static
   */
  interface RequestResult {
    /**
     * Error code.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    errCode: int;

    /**
     * Message code.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    code: int;

    /**
     * **MessageSequence** object sent to the remote process.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    data: MessageSequence;

    /**
     * **MessageSequence** object returned by the remote process.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    reply: MessageSequence;
  }

  /**
   * Provides methods to query or obtain interface descriptors, add or delete death notifications, dump object status to
   *     specific files, and send messages.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7 dynamic
   * @since 23 static
   */
  abstract class IRemoteObject {
    /**
     * Obtains the string of the interface descriptor.
     *
     * @param { string } descriptor - Interface descriptor.
     * @returns { IRemoteBroker } **IRemoteBroker** object bound to the specified interface descriptor.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead getLocalInterface(descriptor: string)
     */
    queryLocalInterface(descriptor: string): IRemoteBroker;

    /**
     * Obtains the string of the interface descriptor.
     *
     * @param { string } descriptor - String of the interface descriptor. The length of the string must be less than
     *     40960.
     * @returns { IRemoteBroker } **IRemoteBroker** object bound to the specified interface descriptor.
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
     * Sends a **MessageParcel** message to the remote process in synchronous or asynchronous mode. If the asynchronous
     *     mode is set in **options**, the API returns immediately and **reply** is empty. If the synchronous mode is
     *     set in **options**, the response is returned when **sendRequest** returns, and **reply** contains the
     *     response content.
     *
     * @param { number } code - Message code [1-16777215] called by the request, which is determined by the
     *     communication parties. If the method is generated by an IDL tool, the message code is automatically generated
     *     by the IDL tool.
     * @param { MessageParcel } data - **MessageParcel** object holding the data to send.
     * @param { MessageParcel } reply - **MessageParcel** object that receives the response.
     * @param { MessageOption } options - Request sending mode, which can be synchronous (default) or asynchronous.
     * @returns { boolean } Returns **true** if the message is sent successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead sendMessageRequest(code: int, data: MessageSequence, reply: MessageSequence, options: MessageOption)
     */
    sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean;

    /**
     * Sends a **MessageParcel** message to the remote process in synchronous or asynchronous mode. If the asynchronous
     *     mode is set in **options**, the response result is returned immediately and **reply** is empty. The specific
     *     response needs to be obtained from the callback on the service side. If the synchronous mode is set in
     *     **options**, the response result is returned when **sendRequest** returns, and **reply** contains the
     *     response content. This API returns the result asynchronously through a promise.
     *
     * @param { number } code - Message code [1-16777215] called by the request, which is determined by the
     *     communication parties. If the method is generated by an IDL tool, the message code is automatically generated
     *     by the IDL tool.
     * @param { MessageParcel } data - **MessageParcel** object holding the data to send.
     * @param { MessageParcel } reply - **MessageParcel** object that receives the response.
     * @param { MessageOption } options - Request sending mode, which can be synchronous (default) or asynchronous.
     * @returns { Promise<SendRequestResult> } Promise used to return the response to the request.
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
     * Sends a **MessageSequence** message to the remote process in synchronous or asynchronous mode. If the
     *     asynchronous mode is set in **options**, the response result is returned immediately and **reply** is empty.
     *     The specific response needs to be obtained from the callback on the service side. If the synchronous mode is
     *     set in **options**, the response result is returned when **sendMessageRequest** returns, and **reply**
     *     contains the response content. This API returns the result asynchronously through a promise.
     *
     * @param { int } code - Message code [1-16777215] called by the request, which is determined by the communication
     *     parties. If the method is generated by an IDL tool, the message code is automatically generated by the IDL
     *     tool.
     * @param {MessageSequence } data - **MessageSequence** object that stores the data to be sent. It can be used only
     *     after being created via the **create()** method and data is written into it.
     * @param {MessageSequence } reply - **MessageSequence** object that receives the response. In asynchronous mode,
     *     **reply** does not contain any content. The specific response needs to be obtained from the callback on the
     *     service side. In synchronous mode, **reply** contains the response content.
     * @param { MessageOption } options - Request sending mode, which can be synchronous (default) or asynchronous.
     * @returns { Promise<RequestResult> } Promise used to return the response to the request.
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
     * Sends a **MessageParcel** message to the remote process in synchronous or asynchronous mode. This API uses an
     *     asynchronous callback to return the result. If asynchronous mode is set in **options**, a callback will be
     *     called immediately, and the reply message is empty. The specific response needs to be obtained from the
     *     callback on the service side. If synchronous mode is set in **options**, a callback will be invoked when the
     *     response to **sendRequest** is returned, and the reply message contains the returned information.
     *
     * @param { number } code - Message code [1-16777215] called by the request, which is determined by the
     *     communication parties. If the method is generated by an IDL tool, the message code is automatically generated
     *     by the IDL tool.
     * @param { MessageParcel } data - **MessageParcel** object holding the data to send.
     * @param { MessageParcel } reply - **MessageParcel** object that receives the response.
     * @param { MessageOption } options - Request sending mode, which can be synchronous (default) or asynchronous.
     * @param { AsyncCallback<SendRequestResult> } callback - Callback for receiving the sending result.
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
     * Sends a **MessageSequence** message to the remote process in synchronous or asynchronous mode. If asynchronous
     *     mode is set in **options**, a callback will be called immediately, and the reply message is empty. The
     *     specific reply needs to be obtained from the callback on the service side. If synchronous mode is set in
     *     **options**, a callback will be invoked when the response to **sendRequest** is returned, and the reply
     *     message contains the returned information.
     *
     * @param {int } code - Message code [1-16777215] called by the request, which is determined by the communication
     *     parties. If the method is generated by an IDL tool, the message code is automatically generated by the IDL
     *     tool.
     * @param { MessageSequence } data - **MessageSequence** object holding the data to send.
     * @param { MessageSequence } reply - **MessageSequence** object that receives the response.
     * @param { MessageOption } options - Request sending mode, which can be synchronous (default) or asynchronous.
     * @param { AsyncCallback<RequestResult> } callback - Callback for receiving the sending result.
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
     * Adds a callback for receiving death notifications of the remote object.
     *
     * @param { DeathRecipient } recipient - Callback to register.
     * @param { number } flags - Flag of the death notification.
     * @returns { boolean } Returns **true** if the callback is added successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead registerDeathRecipient(recipient: DeathRecipient, flags: int)
     */
    addDeathRecipient(recipient: DeathRecipient, flags: number): boolean;

    /**
     * Registers a callback for receiving death notifications of the remote object.
     *
     * @param { DeathRecipient } recipient - Callback to register.
     * @param { int } flags - Flag of the death notification. This is a reserved parameter. Set it to **0**.
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
     * Removes the callback used to receive death notifications of the remote object.
     *
     * @param { DeathRecipient } recipient - Callback to unregister.
     * @param { number } flags - Flag of the death notification.
     * @returns { boolean } Returns **true** if the callback is removed; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead unregisterDeathRecipient(recipient: DeathRecipient, flags: int)
     */
    removeDeathRecipient(recipient: DeathRecipient, flags: number): boolean;

    /**
     * Unregisters from the callback used to receive death notifications of the remote object.
     *
     * @param { DeathRecipient } recipient - Callback to unregister.
     * @param { int } flags - Flag of the death notification. This is a reserved parameter. Set it to **0**.
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
     * Obtains the interface descriptor (which is a string) of this object.
     *
     * @returns { string } Interface descriptor obtained.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead getDescriptor()
     */
    getInterfaceDescriptor(): string;

    /**
     * Obtains the interface descriptor (which is a string) of this object.
     *
     * @returns { string } Interface descriptor obtained.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getDescriptor(): string;

    /**
     * Checks whether this object is dead.
     *
     * @returns { boolean } Returns **true** if the object is dead; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    isObjectDead(): boolean;
  }

  /**
   * Represents the holder of a remote proxy object. It is used to obtain a proxy object.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7 dynamic
   * @since 23 static
   */
  interface IRemoteBroker {
    /**
     * Obtains a proxy or remote object. This API must be implemented by its derived classes.
     *
     * @returns { IRemoteObject } Returns the **RemoteObject** if it is the caller; returns the
     *     [IRemoteObject]{@link rpc.IRemoteObject}, the holder of this **RemoteProxy** object, if the caller is a
     *     [RemoteProxy]{@link rpc.RemoteProxy} object.
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
   * Subscribes to death notifications of a remote object. When the remote object is dead, the local end will receive a
   *     notification and **[onRemoteDied]{@link rpc.DeathRecipient.onRemoteDied()}** will be called. A remote object is
   *     dead when the process holding the object is terminated or the device of the remote object is shut down or
   *     restarted. If the local and remote objects belong to different devices, the remote object is dead when the
   *     device holding the remote object is detached from the network.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7 dynamic
   * @since 23 static
   */
  interface DeathRecipient {
    /**
     * Called to perform subsequent operations when a death notification of the remote object is received.
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
   * Defines the options used to construct the **MessageOption** object.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @atomicservice [since 26.0.0]
   * @since 7 dynamic
   * @since 23 static
   */
  class MessageOption {
    /**
     * Synchronous call.
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
     * Asynchronous call.
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
     * Whether the
     *     [sendMessageRequest]{@link rpc.IRemoteObject#sendMessageRequest(code: int, data: MessageSequence,
     *     reply: MessageSequence, options: MessageOption)} API can transfer the file descriptor.
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
     * RPC wait time, in seconds. This parameter cannot be used in IPC. The default waiting time is 8 seconds. You are
     *     advised not to change the waiting time.
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
     * A constructor used to create a **MessageOption** object.
     *
     * @param { number } [syncFlags] - Synchronous or asynchronous call flag. The value range is {0, 1}. The value **0**
     *     indicates synchronous call (use this value when you need to obtain the response immediately), and the value
     *     **1** indicates asynchronous call (use this value when you do not need to obtain the response immediately).
     *     If this parameter is not specified, **0** (synchronous call) is used by default.
     * @param { number } [waitTime] - Maximum wait time for an RPC call, in seconds.
     *     <br>Default value: **8**
     *     <br>Value range: (0, 3000]. If an RPC call takes a long time, you can increase the wait time. If a quick
     *     response is required, you can reduce the wait time. If this parameter is not specified, the default wait time
     *     of 8 seconds is used.
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 7 dynamic
     */
    constructor(syncFlags?: number, waitTime?: number);

    /**
     * A constructor used to create a **MessageOption** object.
     *
     * @param { boolean } [async] - Whether the call is asynchronous. **true** indicates an asynchronous call (use this
     *     value when you do not need to obtain the response immediately), and **false** indicates a synchronous call
     *     (use this value when you need to obtain the response immediately). If this parameter is not specified, the
     *     default value is **false** (synchronous call).
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
     * @param { int } waitTime - Maximum wait time for a RPC call, in seconds. <br>Default value: **8**
     *     <br>Value range: (0, 3000]
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 23 static
     */
    constructor(syncFlags: int, waitTime: int);

    /**
     * Obtains the call flag, which can be synchronous or asynchronous.
     *
     * @returns { int } Call flag obtained. **0**: synchronous call flag; **1**: asynchronous call flag.
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 7 dynamic
     * @since 23 static
     */
    getFlags(): int;

    /**
     * Sets the call flag, which can be synchronous or asynchronous.
     *
     * @param { int } flags - Call flag to set. The value range is {0, 1}. **0**: synchronous call flag; **1**:
     *     asynchronous call flag.
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 7 dynamic
     * @since 23 static
     */
    setFlags(flags: int): void;

    /**
     * Checks whether
     *     [sendMessageRequest]{@link rpc.IRemoteObject#sendMessageRequest(code: int, data: MessageSequence, reply:
     *     MessageSequence, options: MessageOption)} is called asynchronously.
     *
     * @returns { boolean } Returns **true** if **SendMessageRequest** is called asynchronously; returns **false**
     *     if it is called synchronously.
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    isAsync(): boolean;

    /**
     * Sets whether to call
     *     [sendMessageRequest]{@link rpc.IRemoteObject#sendMessageRequest(code: int, data: MessageSequence,
     *     reply: MessageSequence, options: MessageOption)} asynchronously.
     *
     * @param { boolean } isAsync - Whether to execute the call asynchronously. The value **true** means to execute the
     *     call asynchronously; the value **false** means to execute the call synchronously.
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 9 dynamic
     * @since 23 static
     */
    setAsync(isAsync: boolean): void;

    /**
     * Obtains the maximum wait time for an RPC call.
     *
     * @returns { int } Maximum wait time for an RPC call, in seconds.
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 7 dynamic
     * @since 23 static
     */
    getWaitTime(): int;

    /**
     * Sets the maximum wait time for an RPC call.
     *
     * @param { int } waitTime - Maximum wait time for an RPC call, in seconds. The value range is (0, 3000].
     * @syscap SystemCapability.Communication.IPC.Core
     * @atomicservice [since 26.0.0]
     * @since 7 dynamic
     * @since 23 static
     */
    setWaitTime(waitTime: int): void;
  }

  /**
   * Defines the IPC context, including the PID and UID, local and remote device IDs, and whether the API is invoked on
   *     the same device.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 23 dynamic
   * @since 23 static
   */
  class CallingInfo {
    /**
     * PID of the caller, which is valid only in the IPC scenario.
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
     * UID of the caller, which is valid only in the IPC scenario.
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
     * Token ID of the caller, which is valid only in the IPC scenario.
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
     * Remote device ID. This parameter is valid only in RPC scenarios.
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
     * Local device ID. This parameter is valid only in RPC scenarios.
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
     * Whether the peer end of the current communication is a process on the local device. The value **true** indicates
     *     that the local and peer processes are on the same device (IPC scenario), and the value **false** indicates
     *     that they are not on the same device (RPC scenario).
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
   * Provides methods to implement **RemoteObject**. The service provider must inherit from this class.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @atomicservice [since 26.0.0]
   * @since 7 dynamic
   * @since 23 static
   */
  class RemoteObject extends IRemoteObject {
    /**
     * A constructor used to create a **RemoteObject** object.
     *
     * @param { string } descriptor - Interface descriptor. Its length must be less than 40960.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    constructor(descriptor: string);

    /**
     * Checks whether the remote object corresponding to the specified interface token exists.
     *
     * @param { string } descriptor - Interface descriptor.
     * @returns { IRemoteBroker } Returns the remote object if a match is found; returns **Null** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.IRemoteObject#getLocalInterface(descriptor: string)
     */
    queryLocalInterface(descriptor: string): IRemoteBroker;

    /**
     * Obtains the string of the interface descriptor.
     *
     * @param { string } descriptor - String of the interface descriptor. The length of the string must be less than
     *     40960.
     * @returns { IRemoteBroker } **IRemoteBroker** object bound to the specified interface descriptor.
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
     * Obtains the interface descriptor.
     *
     * @returns { string } Interface descriptor obtained.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.IRemoteObject#getDescriptor()
     */
    getInterfaceDescriptor(): string;

    /**
     * Obtains the interface descriptor of this object. The interface descriptor is a string.
     *
     * @returns { string } Interface descriptor obtained.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getDescriptor(): string;

    /**
     * Called to return a response to **sendMessageRequest()**. The server processes the request synchronously or
     *     asynchronously and returns the result in this API.
     *
     * > **NOTE**
     * >
     * > You are advised to override **onRemoteMessageRequest** preferentially, which can implement synchronous and
     * >     asynchronous message processing.
     * >
     * > If both **onRemoteRequest** and **onRemoteMessageRequest** are overridden, only **onRemoteMessageRequest**
     * >     takes effect.
     *
     * @param { int } code - Service request code sent by the remote end.
     * @param { MessageSequence } data - **MessageSequence** object that holds the parameters called by the client.
     * @param { MessageSequence } reply - **MessageSequence** object to which the result is written.
     * @param { MessageOption } options - Whether the operation is synchronous or asynchronous.
     * @returns { boolean | Promise<boolean> } - If the request is processed synchronously in
     *     **onRemoteMessageRequest**, a Boolean value is returned. The value **true** means that the operation is
     *     successful, and **false** means the opposite.
     *     <br>- If the request is processed asynchronously in **onRemoteMessageRequest**, a promise object is returned.
     *     The value **true** means that the operation is successful, and **false** means the opposite.
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
     * Provides a response to **sendMessageRequest()**. The server processes the request and returns a response in this
     *     API. The IPC context can be obtained from the input parameter **callingInfo**.
     *
     * > **NOTE**
     * >
     * > You are advised to override the **onRemoteMessageRequest** method with the **CallingInfo** parameter to
     * >     implement synchronous and asynchronous message processing.
     * >
     * > If both **onRemoteRequest** and **onRemoteMessageRequest** are overridden, only **onRemoteMessageRequest**
     * >     takes effect.
     *
     * @param { int } code - Service request code sent by the remote end.
     * @param { MessageSequence } data - **MessageSequence** object that holds the parameters called by the client.
     * @param { MessageSequence } reply - **MessageSequence** object to which the result is written.
     * @param { MessageOption } options - Whether the operation is synchronous or asynchronous.
     * @param { CallingInfo } [callingInfo] - IPC context. If this parameter is not specified, it defaults to
     *     **undefined**. Pass this parameter when you need to obtain information such as the caller's PID, UID, token
     *     ID, or device ID. You can obtain this information via **callingInfo.callerPid** and similar properties. If
     *     this parameter is not passed, IPC context information cannot be obtained directly, and you need to use other
     *     methods of **rpc.IPCSkeleton**, such as **getCallingPid** and **getCallingUid**
     * @returns { boolean | Promise<boolean> } - If the request is processed synchronously in
     *     **onRemoteMessageRequest**, a Boolean value is returned. The value **true** means that the operation is
     *     successful, and **false** means the opposite.
     *     <br>- If the request is processed asynchronously in **onRemoteMessageRequest**, a promise object is returned.
     *     The value **true** means that the operation is successful, and **false** means the opposite.
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
     * Called to return a response to **sendRequest()**. The server processes the request and returns a response in this
     *     function.
     *
     * @param { number } code - Service request code sent by the remote end.
     * @param { MessageParcel } data - **MessageParcel** object that holds the parameters called by the client.
     * @param { MessageParcel } reply - **MessageParcel** object carrying the result.
     * @param { MessageOption } options - Whether the operation is synchronous or asynchronous.
     * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead onRemoteMessageRequest(code: int, data: MessageSequence, reply: MessageSequence,
     *     options: MessageOption)
     */
    onRemoteRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean;

    /**
     * Sends a **MessageParcel** message to the remote process in synchronous or asynchronous mode. If the asynchronous
     *     mode is set in **options**, the API returns immediately and **reply** is empty. The specific response needs
     *     to be obtained from the callback on the service side. If the synchronous mode is set in **options**, the
     *     response is returned when **sendRequest** returns, and **reply** contains the response content.
     *
     * @param { number } code - Message code [1-16777215] called by the request, which is determined by the
     *     communication parties. If the method is generated by an IDL tool, the message code is automatically generated
     *     by the IDL tool.
     * @param { MessageParcel } data - **MessageParcel** object holding the data to send.
     * @param { MessageParcel } reply - **MessageParcel** object that receives the response.
     * @param { MessageOption } options - Request sending mode, which can be synchronous (default) or asynchronous.
     * @returns { boolean } Returns **true** if the message is sent successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 8
     * @useinstead rpc.IRemoteObject#sendMessageRequest(code: int, data: MessageSequence, reply: MessageSequence,
     *     options: MessageOption)
     */
    sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean;

    /**
     * Sends a **MessageParcel** message to the remote process in synchronous or asynchronous mode. If the asynchronous
     *     mode is set in **options**, the response result is returned immediately and **reply** is empty. The specific
     *     response needs to be obtained from the callback on the service side. If the synchronous mode is set in
     *     **options**, the response result is returned when **sendRequest** returns, and **reply** contains the
     *     response content. This API returns the result asynchronously through a promise.
     *
     * @param { number } code - Message code [1-16777215] called by the request, which is determined by the
     *     communication parties. If the method is generated by an IDL tool, the message code is automatically generated
     *     by the IDL tool.
     * @param { MessageParcel } data - **MessageParcel** object holding the data to send.
     * @param { MessageParcel } reply - **MessageParcel** object that receives the response.
     * @param { MessageOption } options - Request sending mode, which can be synchronous (default) or asynchronous.
     * @returns { Promise<SendRequestResult> } Promise used to return the response to the request.
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
     * Sends a **MessageSequence** message to the remote process in synchronous or asynchronous mode. If the
     *     asynchronous mode is set in **options**, the response result is returned immediately and **reply** is empty.
     *     The specific response needs to be obtained from the callback on the service side. If the synchronous mode is
     *     set in **options**, the response result is returned when **sendMessageRequest** returns, and **reply**
     *     contains the response content. This API returns the result asynchronously through a promise.
     *
     * @param { int } code - Message code [1-16777215] called by the request, which is determined by the communication
     *     parties. If the method is generated by an IDL tool, the message code is automatically generated by the IDL
     *     tool.
     * @param { MessageSequence } data - **MessageSequence** object holding the data to send.
     * @param { MessageSequence } reply - **MessageSequence** object that receives the response.
     * @param { MessageOption } options - Request sending mode, which can be synchronous (default) or asynchronous.
     * @returns { Promise<RequestResult> } Promise used to return the response to the request.
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
     * Sends a **MessageParcel** message to the remote process in synchronous or asynchronous mode. This API uses an
     *     asynchronous callback to return the result. If asynchronous mode is set in **options**, a callback will be
     *     called immediately, and the reply message is empty. The specific response needs to be obtained from the
     *     callback on the service side. If synchronous mode is set in **options**, a callback will be invoked when the
     *     response to **sendRequest** is returned, and the reply message contains the returned information.
     *
     * @param { number } code - Message code [1-16777215] called by the request, which is determined by the
     *     communication parties. If the method is generated by an IDL tool, the message code is automatically generated
     *     by the IDL tool.
     * @param { MessageParcel } data - **MessageParcel** object holding the data to send.
     * @param { MessageParcel} reply - **MessageParcel** object that receives the response.
     * @param { MessageOption } options - Request sending mode, which can be synchronous (default) or asynchronous.
     * @param { AsyncCallback<SendRequestResult> } callback - Callback for receiving the sending result.
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
     * Sends a **MessageSequence** message to the remote process in synchronous or asynchronous mode. This API uses an
     *     asynchronous callback to return the result. If asynchronous mode is set in **options**, a callback will be
     *     called immediately, and the reply message is empty. The specific response needs to be obtained from the
     *     callback on the service side. If synchronous mode is set in **options**, a callback will be invoked when the
     *     response to **sendMessageRequest** is returned, and the reply message contains the returned information.
     *
     * @param { int } code - Message code [1-16777215] called by the request, which is determined by the communication
     *     parties. If the method is generated by an IDL tool, the message code is automatically generated by the IDL
     *     tool.
     * @param { MessageSequence } data - **MessageSequence** object holding the data to send.
     * @param { MessageSequence } reply - **MessageSequence** object that receives the response.
     * @param { MessageOption } options - Request sending mode, which can be synchronous (default) or asynchronous.
     * @param { AsyncCallback<RequestResult> } callback - Callback used to return the result. When the message is sent
     *     successfully, the data returned by the server can be read from **RequestResult**.
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
     * Obtains the PID of the remote process.
     *
     * @returns { int } PID of the remote process obtained.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    getCallingPid(): int;

    /**
     * Obtains the UID of the remote process.
     *
     * @returns { int } Return the UID of the {@link RemoteProxy} object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    getCallingUid(): int;

    /**
     * Binds an interface descriptor to an **IRemoteBroker** object.
     *
     * @param { IRemoteBroker } localInterface - **IRemoteBroker** object.
     * @param { string } descriptor - Interface descriptor.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead modifyLocalInterface(localInterface: IRemoteBroker, descriptor: string)
     */
    attachLocalInterface(localInterface: IRemoteBroker, descriptor: string): void;

    /**
     * Binds an interface descriptor to an **IRemoteBroker** object.
     *
     * @param { IRemoteBroker } localInterface - **IRemoteBroker** object.
     * @param { string } descriptor - Descriptor used for binding with the **IRemoteBroker** object. Its length should
     *     be less than 40960.
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
   * Provides APIs to implement **IRemoteObject**.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7 dynamic
   * @since 23 static
   */
  class RemoteProxy extends IRemoteObject {
    /**
     * Internal instruction code used to test whether the IPC service is normal.
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
     * Internal instruction code used to obtain IPC service status information.
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
     * Internal instruction code used to obtain the remote interface token.
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
     * Minimum valid instruction code.
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
     * Maximum valid instruction code.
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
     * Obtains the **LocalInterface** object of an interface token.
     *
     * @param { string } interface - Interface descriptor.
     * @returns { IRemoteBroker } Returns **Null** by default, which indicates a proxy interface.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.IRemoteObject#getLocalInterface(descriptor: string)
     */
    queryLocalInterface(interface: string): IRemoteBroker;

    /**
     * Obtains the **LocalInterface** object of an interface token.
     *
     * @param { string } interfaceDes - Interface token to be queried. Its length must be less than 40960.
     * @returns { IRemoteBroker } Returns **Null** by default, which indicates a proxy interface.
     * @throws { BusinessError } 401 - check param failed
     * @throws { BusinessError } 1900006 - Operation allowed only for the remote object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getLocalInterface(interfaceDes: string): IRemoteBroker;

    /**
     * Adds a callback for receiving death notifications of the remote object.
     *
     * @param { DeathRecipient } recipient - Callback to add.
     * @param { number } flags - Flag of the death notification. This parameter is reserved. It is set to **0**.
     * @returns { boolean } Returns **true** if the callback is added successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.IRemoteObject#registerDeathRecipient(recipient: DeathRecipient, flags: int)
     */
    addDeathRecipient(recipient: DeathRecipient, flags: number): boolean;

    /**
     * Registers a callback for receiving death notifications of the remote object.
     *
     * @param { DeathRecipient } recipient - Callback to register.
     * @param { int } flags - Flag of the death notification.
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
     * Removes the callback used to receive death notifications of the remote object.
     *
     * @param { DeathRecipient } recipient - Callback to remove.
     * @param { number } flags - Flag of the death notification. This parameter is reserved. It is set to **0**.
     * @returns { boolean } Returns **true** if the callback is removed; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.IRemoteObject#unregisterDeathRecipient(recipient: DeathRecipient, flags: int)
     */
    removeDeathRecipient(recipient: DeathRecipient, flags: number): boolean;

    /**
     * Unregisters from the callback used to receive death notifications of the remote object.
     *
     * @param { DeathRecipient } recipient - Callback to unregister.
     * @param { int } flags - Flag of the death notification.
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
     * Obtains the interface descriptor of this proxy object.
     *
     * @returns { string } Interface descriptor obtained.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead rpc.IRemoteObject#getDescriptor()
     */
    getInterfaceDescriptor(): string;

    /**
     * Obtains the interface descriptor (which is a string) of this object.
     *
     * @returns { string } Interface descriptor obtained.
     * @throws { BusinessError } 1900007 - communication failed.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    getDescriptor(): string;

    /**
     * Sends a **MessageParcel** message to the remote process in synchronous or asynchronous mode. If the asynchronous
     *     mode is set in **options**, the API returns immediately and **reply** is empty. The specific response need
     *     to be obtained from the callback on the service side. If the synchronous mode is set in **options**, the
     *     response is returned when **sendRequest** returns, and **reply** contains the response content.
     *
     * @param { number } code - Message code [1-16777215] called by the request, which is determined by the
     *     communication parties. If the method is generated by an IDL tool, the message code is automatically generated
     *     by the IDL tool.
     * @param { MessageParcel } data - **MessageParcel** object holding the data to send.
     * @param { MessageParcel } reply - **MessageParcel** object that receives the response.
     * @param { MessageOption } options - Request sending mode, which can be synchronous (default) or asynchronous.
     * @returns { boolean } Returns **true** if the message is sent successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 8
     * @useinstead rpc.IRemoteObject#sendMessageRequest(code: int, data: MessageSequence, reply: MessageSequence,
     *     options: MessageOption)
     */
    sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean;

    /**
     * Sends a **MessageParcel** message to the remote process in synchronous or asynchronous mode. If the asynchronous
     *     mode is set in **options**, the response result is returned immediately and **reply** is empty. The specific
     *     response needs to be obtained from the callback on the service side. If the synchronous mode is set in
     *     **options**, the response result is returned when **sendRequest** returns, and **reply** contains the
     *     response content. This API returns the result asynchronously through a promise.
     *
     * @param { number } code - Message code [1-16777215] called by the request, which is determined by the
     *     communication parties. If the method is generated by an IDL tool, the message code is automatically generated
     *     by the IDL tool.
     * @param { MessageParcel } data - **MessageParcel** object holding the data to send.
     * @param { MessageParcel} reply - **MessageParcel** object that receives the response.
     * @param { MessageOption } options - Request sending mode, which can be synchronous (default) or asynchronous.
     * @returns { Promise<SendRequestResult> } Promise used to return the response to the request.
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
     * Sends a **MessageSequence** message to the remote process in synchronous or asynchronous mode. If the
     *     asynchronous mode is set in **options**, the response result is returned immediately and **reply** is empty.
     *     The specific response needs to be obtained from the callback on the service side. If the synchronous mode is
     *     set in **options**, the response result is returned when **sendMessageRequest** returns, and **reply**
     *     contains the response content. This API returns the result asynchronously through a promise.
     *
     * @param { int } code - Message code [1-16777215] called by the request, which is determined by the communication
     *     parties. If the method is generated by an IDL tool, the message code is automatically generated by the IDL
     *     tool.
     * @param { MessageSequence } data - **MessageSequence** object holding the data to send.
     * @param { MessageSequence } reply - **MessageSequence** object that receives the response.
     * @param { MessageOption } options - Request sending mode, which can be synchronous (default) or asynchronous.
     * @returns { Promise<RequestResult> } Promise used to return the response to the request.
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
     * Sends a **MessageParcel** message to the remote process in synchronous or asynchronous mode. If asynchronous mode
     *     is set in **options**, a callback will be called immediately, and the reply message is empty. The specific
     *     response needs to be obtained from the callback on the service side. If synchronous mode is set in
     *     **options**, a callback will be invoked when the response to **sendRequest** is returned, and the reply
     *     message contains the returned information.
     *
     * @param { number } code - Message code [1-16777215] called by the request, which is determined by the
     *     communication parties. If the method is generated by an IDL tool, the message code is automatically generated
     *     by the IDL tool.
     * @param { MessageParcel } data - **MessageParcel** object holding the data to send.
     * @param { MessageParcel } reply - **MessageParcel** object that receives the response.
     * @param { MessageOption } options - Request sending mode, which can be synchronous (default) or asynchronous.
     * @param { AsyncCallback<SendRequestResult> } callback - Callback for receiving the sending result.
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
     * Sends a **MessageSequence** message to the remote process in synchronous or asynchronous mode. This API uses an
     *     asynchronous callback to return the result. If asynchronous mode is set in **options**, a callback will be
     *     called immediately, and the reply message is empty. The specific response needs to be obtained from the
     *     callback on the service side. If the synchronous mode is set in **options**, the callback is executed after
     *     [sendMessageRequest]{@link rpc.IRemoteObject#sendMessageRequest(code: int, data: MessageSequence,
     *     reply: MessageSequence, options: MessageOption)} returns and the server finishes processing the request. You
     *     can read [RequestResult]{@link rpc.RequestResult} in the callback to obtain the data returned by the server.
     *
     * @param { int } code - Message code [1-16777215] called by the request, which is determined by the communication
     *     parties. If the method is generated by an IDL tool, the message code is automatically generated by the IDL
     *     tool.
     * @param { MessageSequence } data - **MessageSequence** object holding the data to send.
     * @param { MessageSequence } reply - **MessageSequence** object that receives the response.
     * @param { MessageOption } options - Request sending mode, which can be synchronous (default) or asynchronous.
     * @param { AsyncCallback<RequestResult> } callback - Callback used to return the result. When the message is sent
     *     successfully, the data returned by the server can be read from **RequestResult**.
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
     * Checks whether the **RemoteObject** is dead.
     *
     * @returns { boolean } Returns **true** if **RemoteObject** is dead; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    isObjectDead(): boolean;
  }

  /**
   * Obtains IPC context, including the UID and PID, local and remote device IDs, and whether the method is invoked on
   *     the same device.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 7 dynamic
   * @since 23 static
   */
  class IPCSkeleton {
    /**
     * Obtains the system service manager (SAMGR) object. This method is static method.
     *
     * @returns { IRemoteObject } System capability manager obtained.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static getContextObject(): IRemoteObject;

    /**
     * Obtains the PID of the caller. This API is a static method, which is called by the
     *     [RemoteObject]{@link rpc.RemoteObject} object in the IPC context
     *     [onRemoteMessageRequest]{@link rpc.RemoteObject#onRemoteMessageRequest(code: int, data: MessageSequence,
     *     reply: MessageSequence, options: MessageOption )}. If the method is not called in the IPC context, the PID of
     *     the current process is returned.
     * @returns { int } PID of the caller.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static getCallingPid(): int;

    /**
     * Obtains the UID of the caller. This API is a static method, which is called by the
     *     [RemoteObject]{@link rpc.RemoteObject} object in the IPC context
     *     [onRemoteMessageRequest]{@link rpc.RemoteObject#onRemoteMessageRequest( code: int, data: MessageSequence,
     *     reply: MessageSequence, options: MessageOption)}. If the method is not called in the IPC context, the UID of
     *     the current process is returned.
     * @returns { int } UID of the caller.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static getCallingUid(): int;

    /**
     * Obtains the caller's token ID, which is used to verify the caller identity.
     *
     * @returns { long } Token ID of the caller obtained.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     * @since 23 static
     */
    static getCallingTokenId(): long;

    /**
     * Obtains the ID of the device hosting the caller's process. This API is a static method.
     *
     * @returns { string } Device ID obtained.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static getCallingDeviceID(): string;

    /**
     * Obtains the local device ID. This API is a static method.
     *
     * @returns { string } Local device ID obtained.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static getLocalDeviceID(): string;

    /**
     * Checks whether the peer process is a process of the local device. This API is a static method.
     *
     * @returns { boolean } Returns **true** if the local and peer processes are on the same device; returns **false**
     *     otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static isLocalCalling(): boolean;

    /**
     * Flushes all suspended commands from the specified **RemoteProxy** to the corresponding **RemoteObject**. This API
     *     is a static method. You are advised to call this API before performing any sensitive operation.
     *
     * @param { IRemoteObject } object - **RemoteProxy** specified.
     * @returns { number } Returns **0** if the operation is successful; returns an error code if the input object is
     *     null or a **RemoteObject**, or if the operation fails.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead static flushCmdBuffer(object: IRemoteObject)
     */
    static flushCommands(object: IRemoteObject): number;

    /**
     * Flushes all suspended commands from the specified **RemoteProxy** to the corresponding **RemoteObject**. This API
     *     is a static method. You are advised to call this API before performing any sensitive operation.
     *
     * @param { IRemoteObject } object - **RemoteProxy** specified.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    static flushCmdBuffer(object: IRemoteObject): void;

    /**
     * Resets the UID and PID of the remote user to those of the local user. This API is a static method and is used in
     *     scenarios such as identity authentication.
     *
     * @returns { string } String containing the UID and PID of the remote user.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamic
     * @since 23 static
     */
    static resetCallingIdentity(): string;

    /**
     * Sets the UID and PID to those of the remote user. This API is a static method. It is usually called after
     *    **resetCallingIdentity**, and the UID and PID of the remote user returned by **resetCallingIdentity** are
     *    required.
     *
     * @param { string } identity - String containing the remote user's UID and PID, which are returned by
     *     **resetCallingIdentity**.
     * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead static restoreCallingIdentity(identity: string)
     */
    static setCallingIdentity(identity: string): boolean;

    /**
     * Restores the UID and PID to those of the remote user. This API is a static method. It is usually called after
     *     **resetCallingIdentity**, and the UID and PID of the remote user returned by **resetCallingIdentity** are
     *     required. This API is supported only in the IPC context
     *     [onRemoteMessageRequest]{@link rpc.RemoteObject#onRemoteMessageRequest(code: int, data: MessageSequence,
     *     reply: MessageSequence, options: MessageOption)}; otherwise, it returns directly.
     *
     * @param { string } identity - String that contains the remote user UID and PID. Its length must be less than
     *     40960. are returned by **resetCallingIdentity**.
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
   * Provides methods related to anonymous shared memory objects, including creating, closing, mapping, and unmapping an
   *     **Ashmem** object, reading data from and writing data to an **Ashmem** object, obtaining the **Ashmem** size,
   *     and setting **Ashmem** protection.
   *
   * The shared memory applies only to cross-process communication within the local device.
   *
   * - Large data transmission: When transmitting large amounts of data (such as images or files), shared memory can be
   *     used to improve efficiency.
   * - Cross-process data sharing: Multiple processes need to share access to the same block of memory data.
   * - Transmission efficiency: Transmitting large data via shared memory avoids serialization overhead and improves
   *     transmission efficiency.
   * - Memory reuse: Multiple processes can share access to the same memory, avoiding data duplication.
   * - Improved transmission performance: The shared memory mechanism significantly improves the efficiency of large
   *     data transmission.
   * - Reduced memory usage: Avoiding multiple data copies helps save memory resources.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 8 dynamic
   * @since 23 static
   */
  class Ashmem {
    /**
     * Mapped memory protection type, indicating that the mapped memory is executable.
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
     * Mapped memory protection type, indicating that the mapped memory cannot be accessed.
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
     * Mapped memory protection type, indicating that the mapped memory is readable.
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
     * Mapped memory protection type, indicating that the mapped memory is writable.
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
     * Creates an **Ashmem** object with the specified name and size. This API is a static method.
     *
     * @param { string } name - Name of the **Ashmem** object to create.
     * @param { number } size - Size (in bytes) of the **Ashmem** object to create.
     * @returns { Ashmem } Returns the **Ashmem** object if it is created successfully; returns null otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead create()
     */
    static createAshmem(name: string, size: number): Ashmem;

    /**
     * Creates an **Ashmem** object with the specified name and size. This API is a static method.
     *
     * @param { string } name - Name of the **Ashmem** object to create. The length of the Ashmem name cannot be 0.
     * @param { int } size - Size of the **Ashmem** object, in bytes. The value must be greater than 0.
     * @returns { Ashmem } Returns the **Ashmem** object if it is created successfully; returns null otherwise.
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
     * Creates an **Ashmem** object by copying the file descriptor of an existing **Ashmem** object. The two **Ashmem**
     *     objects point to the same shared memory region.
     *
     * @param { Ashmem } ashmem - Existing **Ashmem** object.
     * @returns { Ashmem } **Ashmem** object created.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead create()
     */
    static createAshmemFromExisting(ashmem: Ashmem): Ashmem;

    /**
     * Creates an **Ashmem** object by copying the file descriptor of an existing **Ashmem** object. The two **Ashmem**
     *     objects point to the same shared memory region.
     *
     * @param { Ashmem } ashmem - Existing **Ashmem** object.
     * @returns { Ashmem } **Ashmem** object created.
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
     * Closes this **Ashmem** object.
     *
     * > **NOTE**
     * >
     * > Before closing the **Ashmem** object, you need to remove the address mapping.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     * @since 23 static
     */
    closeAshmem(): void;

    /**
     * Deletes the mappings for the specified address range of this **Ashmem** object.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     * @since 23 static
     */
    unmapAshmem(): void;

    /**
     * Obtains the memory size of this **Ashmem** object.
     *
     * @returns { int } **Ashmem** size obtained.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamic
     * @since 23 static
     */
    getAshmemSize(): int;

    /**
     * Creates the shared file mapping on the virtual address space of this process. The size of the mapping region is
     *     specified by this **Ashmem** object.
     *
     * @param { number } mapType - Protection level of the memory region to which the shared file is mapped.
     * @returns { boolean } Returns **true** if the mapping is created; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead mapTypedAshmem(mapType: int)
     */
    mapAshmem(mapType: number): boolean;

    /**
     * Creates the shared file mapping on the virtual address space of this process. The size of the mapping region is
     *     specified by this **Ashmem** object.
     *
     * @param { int } mapType - Protection level of the memory region to which the shared file is mapped.
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
     * Maps the shared file to the readable and writable virtual address space of the process.
     *
     * @returns { boolean } Returns **true** if the mapping is created; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead mapReadWriteAshmem()
     */
    mapReadAndWriteAshmem(): boolean;

    /**
     * Maps the shared file to the readable and writable virtual address space of the process.
     *
     * @throws { BusinessError } 1900001 - Failed to call mmap.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    mapReadWriteAshmem(): void;

    /**
     * Maps the shared file to the read-only virtual address space of the process.
     *
     * @returns { boolean } Returns **true** if the mapping is created; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead mapReadonlyAshmem()
     */
    mapReadOnlyAshmem(): boolean;

    /**
     * Maps the shared file to the read-only virtual address space of the process.
     *
     * @throws { BusinessError } 1900001 - Failed to call mmap.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 9 dynamic
     * @since 23 static
     */
    mapReadonlyAshmem(): void;

    /**
     * Sets the protection level of the memory region to which the shared file is mapped.
     *
     * @param { number } protectionType - Protection type to set.
     * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead setProtectionType(protectionType: int)
     */
    setProtection(protectionType: number): boolean;

    /**
     * Sets the protection level of the memory region to which the shared file is mapped.
     *
     * @param { int } protectionType - Protection type to set.
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
     * Writes data to the shared file associated with this **Ashmem** object.
     *
     * > **NOTE**
     * >
     * > - Before writing an **Ashmem** object, you need to call
     * >     [mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem()} for mapping.
     *
     * @param { number[] } buf - Data to write.
     * @param { number } size - Size of the data to write, in bytes.
     * @param { number } offset - Start position of the data to write in the memory region associated with this
     *     **Ashmem** object.
     * @returns { boolean } Returns **true** if the data is written successfully; returns **false** otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead writeDataToAshmem(buf: ArrayBuffer, size: int, offset: int)
     */
    writeToAshmem(buf: number[], size: number, offset: number): boolean;

    /**
     * Writes data to the shared file associated with this **Ashmem** object.
     *
     * > **NOTE**
     * >
     * > - Before writing an **Ashmem** object, you need to call
     * >     [mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem()} for mapping.
     *
     * @param { number[] } buf - Data to write.
     * @param { number } size - Size of the data to write, in bytes.
     * @param { number } offset - Start position of the data to write in the memory region associated with this
     *     **Ashmem** object.
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
     * Writes data to the shared file associated with this **Ashmem** object.
     *
     * > **NOTE**
     * >
     * > Before writing an **Ashmem** object, you need to call
     * >     [mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem()} for mapping.
     *
     * @param { ArrayBuffer } buf - Data to write.
     * @param { int } size - Size of the data to write, in bytes.
     * @param { int } offset - Start position of the data to write in the memory region associated with this **Ashmem**
     *     object.
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
     * Reads data from the shared file associated with this **Ashmem** object.
     *
     * > **NOTE**
     * >
     * > - Before writing an **Ashmem** object, you need to call
     * > [mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem()} for mapping.
     *
     * @param { number } size - Size of the data to read.
     * @param { number } offset - Start position of the data to read in the memory region associated with this
     *     **Ashmem** object.
     * @returns { number[] } Data read.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead readDataFromAshmem(size: int, offset: int)
     */
    readFromAshmem(size: number, offset: number): number[];

    /**
     * Reads data from the shared file associated with this **Ashmem** object.
     *
     * > **NOTE**
     * >
     * > - Before writing an **Ashmem** object, you need to call
     * > [mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem()} for mapping.
     *
     * @param { number } size - Size of the data to read.
     * @param { number } offset - Start position of the data to read in the memory region associated with this
     *     **Ashmem** object.
     * @returns { number[] } Data read.
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
     * Reads data from the shared file associated with this **Ashmem** object.
     *
     * > **NOTE**
     * >
     * > Before writing an **Ashmem** object, you need to call
     * >     [mapReadWriteAshmem]{@link rpc.Ashmem#mapReadWriteAshmem()} for mapping.
     *
     * @param { int } size - Size of the data to read, in bytes.
     * @param { int } offset - Start position of the data to read in the memory region associated with this **Ashmem**
     *     object.
     * @returns { ArrayBuffer } Data read.
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