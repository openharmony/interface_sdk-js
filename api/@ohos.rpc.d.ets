/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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
 * This module provides inter process communication capability.
 *
 * @namespace rpc
 * @syscap SystemCapability.Communication.IPC.Core
 * @since 20
 */
declare namespace rpc {
  /**
   * Enumerates the types of the TypedArray object converted from an ArrayBuffer object.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  enum TypeCode {
    /**
     * The TypedArray type is Int8Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    INT8_ARRAY = 0,

    /**
     * The TypedArray type is Uint8Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    UINT8_ARRAY = 1,

    /**
     * The TypedArray type is Int16Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    INT16_ARRAY = 2,

    /**
     * The TypedArray type is Uint16Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    UINT16_ARRAY = 3,

    /**
     * The TypedArray type is Int32Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    INT32_ARRAY = 4,

    /**
     * The TypedArray type is Uint32Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    UINT32_ARRAY = 5,

    /**
     * The TypedArray type is Float32Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    FLOAT32_ARRAY = 6,

    /**
     * The TypedArray type is Float64Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    FLOAT64_ARRAY = 7,

    /**
     * The TypedArray type is BigInt64Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    BIGINT64_ARRAY = 8,

    /**
     * The TypedArray type is BigUint64Array.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    BIGUINT64_ARRAY = 9
  }

  /**
   * A data object used for remote procedure call (RPC).
   * <p>
   * During RPC, the sender can use the write methods provided by {@link MessageSequence} to
   * write the to-be-sent data into a {@link MessageSequence} object in a specific format, and the receiver can use the
   * read methods provided by {@link MessageSequence} to read data of the specific format from
   * the {@link MessageSequence} object.
   * <p>
   * <p>
   * The default capacity of a {@link MessageSequence} instance is 200KB. If you want more or less,
   * use {@link #setCapacity(int)} to change it.
   * </p>
   * <b>Note</b>: Only data of the following data types can be written into or read from a {@link MessageSequence}:
   * byte, byteArray, short, shortArray, int, intArray, long, longArray, float, floatArray, double, doubleArray,
   * boolean, booleanArray, char, charArray, String, StringArray, {@link IRemoteObject}, IRemoteObjectArray,
   * {@link Parcelable}, and ParcelableArray.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  export class MessageSequence {
    /**
     * Reads an interface token from the {@link MessageSequence} object.
     *
     * @returns { string } Return a string value.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    readInterfaceToken(): string;

    /**
     * Writes a string value into the {@link MessageSequence} object.
     *
     * @param { string } val - Indicates the string value to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The string length exceeds 40960 bytes;
     *     4.The number of bytes copied to the buffer is different from the length of the obtained string.
     * @throws { BusinessError } 1900009 - Failed to write data to the message sequence. 
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    writeString(val: string): void;

    /**
     * Reads a string value from the {@link MessageSequence} object.
     *
     * @returns { string } Return a string value.
     * @throws { BusinessError } 1900010 - Failed to read data from the message sequence.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    readString(): string;
  }

  /**
   * @typedef Parcelable
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  /**
   * During inter-process communication, objects of the class are written to the {@link MessageSequence} and
   * they are recovered from the {@link MessageSequence}.
   * 
   * @typedef Parcelable
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  export interface Parcelable {
    /**
     * Marshal this {@code Parcelable} object into a {@link MessageSequence}.
     *
     * @param { MessageSequence } dataOut - Indicates the {@link MessageSequence} object to which the {@code Parcelable}
     *                            object will be marshalled.
     * @returns { boolean } Return {@code true} if the marshalling is successful; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    marshalling(dataOut: MessageSequence): boolean;

    /**
     * Unmarshal this {@code Parcelable} object from a {@link MessageSequence}.
     *
     * @param { MessageSequence } dataIn - Indicates the {@link MessageSequence} object into
     *                            which the {@code Parcelable} object has been marshalled.
     * @returns { boolean } Return {@code true} if the unmarshalling is successful; return {@code false} otherwise.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    unmarshalling(dataIn: MessageSequence): boolean;
  }

  /**
   * Defines the response to the request.
   * <p> SendRequestResult object contains four members, namely error code of this operation, request code, data parcel
   * and reply parcel.
   *
   * @typedef RequestResult
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  interface RequestResult {
    /**
     * Error code. 0 indicates successful, otherwise it is failed.
     *
     * @type { number }
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    errCode: number;

    /**
     * Message code. It is same as the code in {@link SendRequest} method.
     *
     * @type { number }
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    code: number;

    /**
     * MessageSequence object sent to the peer process.
     * It is the same object in {@link SendRequest} method.
     *
     * @type { MessageSequence }
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    data: MessageSequence;

    /**
     * MessageSequence object returned by the peer process.
     * It is the same object in {@link SendRequest} method.
     *
     * @type { MessageSequence }
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    reply: MessageSequence;
  }

  /**
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  /**
   * Used to query or get interface descriptors, add or remove death notifications, dump object status to
   * a specific file, and send messages.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  export abstract class IRemoteObject {
    /**
     * Obtains the interface descriptor of an object.
     * <p>The interface descriptor is a character string.
     *
     * @returns { string } Return the interface descriptor.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    getDescriptor(): string;
  }

  /**
   * @typedef IRemoteBroker
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  /**
   * Used to define the communication interface of the IPC communication objects.
   * 
   * @typedef IRemoteBroker
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  interface IRemoteBroker {
    /**
     * Obtains a proxy or remote object. This method must be implemented by its derived classes.
     *
     * @returns { IRemoteObject } Return the RemoteObject if the caller is a RemoteObject; return the IRemoteObject,
     * that is, the holder of this RemoteProxy object, if the caller is a RemoteProxy object.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    asObject(): IRemoteObject;
  }

  /**
   * @typedef DeathRecipient
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  /**
   * Used to subscribe to death notifications for remote objects. 
   * <p>
   * When a remote object subscribed to the notification dies, the local end can receive a message and call
   * the onRemoteDied operation. The death of a remote object can be caused by the death of the process to which the
   * remote object belongs, the shutdown or restart of the device to which the remote object belongs,
   * or the death of the remote object when the remote object and the local object belong to different devices,
   * and when the remote object leaves the network.
   * </p>
   * 
   * @typedef DeathRecipient
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  interface DeathRecipient {
    /**
     * Called to perform subsequent operations when a death notification of the remote object is received.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    onRemoteDied(): void;
  }

  /**
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  /**
   * Public Message Option, using the specified flag type, constructs the specified MessageOption object.
   * 
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  class MessageOption {
    /**
     * A constructor used to create a MessageOption instance.
     *
     * @param { number } syncFlags - Specifies whether the SendRequest is called synchronously (default) or asynchronously.
     * @param { number } waitTime - Maximum wait time for a RPC call. The default value is TF_WAIT_TIME.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    constructor(syncFlags?: number, waitTime?: number);

    /**
     * A constructor used to create a MessageOption instance.
     *
     * @param { boolean } async - Specifies whether the SendRequest is called synchronously (default) or asynchronously.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    constructor(isAsync: boolean);
  }

  /**
   * @extends IRemoteObject
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  /**
   * Implement remote objects. The service provider must inherit this class.
   *
   * @extends IRemoteObject
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  export class RemoteObject extends IRemoteObject {
    /**
     * A constructor to create a RemoteObject instance.
     *
     * @param { string } descriptor - Specifies interface descriptor.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    constructor(descriptor: string);

    /**
     * Queries an interface descriptor.
     *
     * @returns { string } Return the interface descriptor.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    getDescriptor(): string;

    /**
     * Sets an entry for receiving requests.
     * <p>This method is implemented by the remote service provider. You need to override this method with
     * your own service logic when you are using IPC.
     *
     * @param { number } code - Indicates the service request code sent from the peer end.
     * @param { MessageSequence } data - Indicates the {@link MessageParcel} object sent from the peer end.
     * @param { MessageSequence } reply - Indicates the response message object sent from the remote service.
     * The local service writes the response data to the {@link MessageParcel} object.
     * @param { MessageOption } options - Indicates whether the operation is synchronous or asynchronous.
     * @returns { boolean | Promise<boolean> }
     * Return a simple boolean which is {@code true} if the operation succeeds;
     * {{@code false} otherwise} when the function call is synchronous.
     * Return a promise object with a boolean when the function call is asynchronous.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    onRemoteMessageRequest(
      code: number,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption
    ): boolean | Promise<boolean>;
  }

  /**
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  /**
   * Implement the IRemoteObject proxy object.
   *
   * @extends IRemoteObject
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  class RemoteProxy extends IRemoteObject {
    /**
     * Queries the interface descriptor of remote object.
     *
     * @returns { string } Return the interface descriptor.
     * @throws { BusinessError } 1900007 - communication failed.
     * @throws { BusinessError } 1900008 - The proxy or remote object is invalid.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    getDescriptor(): string;
  }

  /**
   * Provides methods related to anonymous shared memory objects,
   * including creating, closing, mapping, and unmapping an Ashmem object,
   * reading data from and writing data to an Ashmem object,
   * obtaining the Ashmem size, and setting Ashmem protection.
   *
   * @syscap SystemCapability.Communication.IPC.Core
   * @since 20
   */
  class Ashmem {
    /**
     * The mapped memory is executable.
     *
     * @type { number }
     * @default 4
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    PROT_EXEC: number;

    /**
     * The mapped memory is inaccessible.
     *
     * @type { number }
     * @default 0
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    PROT_NONE: number;

    /**
     * The mapped memory is readable.
     *
     * @type { number }
     * @default 1
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    PROT_READ: number;

    /**
     * The mapped memory is writable.
     *
     * @type { number }
     * @default 2
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    PROT_WRITE: number;

    /**
     * Creates an Ashmem object with the specified name and size.
     *
     * @param { string } name - Name of the Ashmem object to create.
     * @param { number } size - Size (in bytes) of the Ashmem object to create.
     * @returns { Ashmem } Return the Ashmem object if it is created successfully; return null otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The Ashmem name passed is empty;
     *     4.The Ashmem size passed is less than or equal to 0.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    static create(name: string, size: number): Ashmem;

    /**
     * Creates an Ashmem object by copying the file descriptor (FD) of an existing Ashmem object.
     * The two Ashmem objects point to the same shared memory region.
     *
     * @param { Ashmem } ashmem - Existing Ashmem object.
     * @returns { Ashmem } Ashmem object created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The passed parameter is not an Ahmem object;
     *     3.The ashmem instance for obtaining packaging is empty.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    static create(ashmem: Ashmem): Ashmem;

    /**
     * Closes this Ashmem object.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    closeAshmem(): void;

    /**
     * Deletes the mappings for the specified address range of this Ashmem object.
     *
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    unmapAshmem(): void;

    /**
     * Obtains the mapped memory size of this Ashmem object.
     *
     * @returns { number } Memory size mapped.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    getAshmemSize(): number;

    /**
     * Creates the shared file mapping on the virtual address space of this process.
     * The size of the mapping region is specified by this Ashmem object.
     *
     * @param { number } mapType - Protection level of the memory region to which the shared file is mapped.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.The passed mapType exceeds the maximum protection level.
     * @throws { BusinessError } 1900001 - Failed to call mmap.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    mapTypedAshmem(mapType: number): void;

    /**
     * Maps the shared file to the readable and writable virtual address space of the process.
     *
     * @throws { BusinessError } 1900001 - Failed to call mmap.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    mapReadWriteAshmem(): void;

    /**
     * Maps the shared file to the read-only virtual address space of the process.
     *
     * @throws { BusinessError } 1900001 - Failed to call mmap.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    mapReadonlyAshmem(): void;

    /**
     * Sets the protection level of the memory region to which the shared file is mapped.
     *
     * @param { number } protectionType - Protection type to set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900002 - Failed to call ioctl.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    setProtectionType(protectionType: number): void;

    /**
     * Writes data to the shared file associated with this Ashmem object.
     *
     * @param { ArrayBuffer } buf - Data to write
     * @param { number } size - Size of the data to write
     * @param { number } offset - Start position of the data to write in the memory region associated
     *                   with this Ashmem object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match;
     *     3.Failed to obtain arrayBuffer information.
     * @throws { BusinessError } 1900003 - Failed to write data to the shared memory.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    writeDataToAshmem(buf: ArrayBuffer, size: number, offset: number): void;

    /**
     * Reads data from the shared file associated with this Ashmem object.
     *
     * @param { number } size - Size of the data to read.
     * @param { number } offset - Start position of the data to read in the memory region associated
     *                   with this Ashmem object.
     * @returns { ArrayBuffer } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.The number of parameters is incorrect;
     *     2.The parameter type does not match.
     * @throws { BusinessError } 1900004 - Failed to read data from the shared memory.
     * @syscap SystemCapability.Communication.IPC.Core
     * @since 20
     */
    readDataFromAshmem(size: number, offset: number): ArrayBuffer;
  }
}

export default rpc;