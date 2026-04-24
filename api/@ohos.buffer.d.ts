/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (The type of "License");
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
 * @kit ArkTS
 */

/**
 * A **Buffer** object represents a byte sequence of a fixed length. It is used to store binary data.
 * **Recommended use case**: Use Buffer when you need to process images and a large amount of binary data, and receive
 * or upload files.
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace buffer {
  /**
   * Enumerates the supported encoding formats.
   *
   * @unionmember { 'ascii' } ASCII format.
   * @unionmember { 'utf8' } UTF-8 format.
   * @unionmember { 'utf-8' } UTF-8 format.
   * @unionmember { 'utf16le' } UTF-16LE format.
   * @unionmember { 'ucs2' } Alias of UTF-16LE.
   * @unionmember { 'ucs-2' } Alias of UTF-16LE.
   * @unionmember { 'base64' } Base64 format.
   * @unionmember { 'base64url' } Base64URL format.
   * @unionmember { 'latin1' } Alias of iso-8859-1, which is backward compatible with the ASCII format.
   * @unionmember { 'binary' } Binary format.
   * @unionmember { 'hex' } Hexadecimal format.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  type BufferEncoding =
    | 'ascii'
    | 'utf8'
    | 'utf-8'
    | 'utf16le'
    | 'ucs2'
    | 'ucs-2'
    | 'base64'
    | 'base64url'
    | 'latin1'
    | 'binary'
    | 'hex';
  /**
   * TypedArray inherits the features and methods of Int8Array
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface TypedArray extends Int8Array {  }
  /**
   * TypedArray  features and methods
   *
   * @unionmember { Int8Array }
   * @unionmember { Uint8Array }
   * @unionmember { Uint8ClampedArray }
   * @unionmember { Int16Array }
   * @unionmember { Uint16Array }
   * @unionmember { Int32Array }
   * @unionmember { Uint32Array }
   * @unionmember { Float32Array }
   * @unionmember { Float64Array }
   * @unionmember { BigInt64Array }
   * @unionmember { BigUint64Array }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  type TypedArray = Int8Array
    | Uint8Array
    | Uint8ClampedArray
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Float32Array
    | Float64Array
    | BigInt64Array
    | BigUint64Array;

  /**
   * ArrayUnionType features and methods
   *
   * @unionmember { Array<Int8Array> }
   * @unionmember { Array<Uint8Array> }
   * @unionmember { Uint8ClampedArray }
   * @unionmember { Array<Uint16Array> }
   * @unionmember { Array<Int16Array> }
   * @unionmember { Array<Int32Array> }
   * @unionmember { Array<Uint32Array> }
   * @unionmember { Array<Float32Array> }
   * @unionmember { Array<Float64Array> }
   * @unionmember { Array<BigInt64Array> }
   * @unionmember { Array<BigUint64Array> }
   * @unionmember { Array<string> }
   * @unionmember { Array<ArrayBuffer> }
   * @unionmember { Array<DataView> }
   * @unionmember { Array<Blob> }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  type ArrayUnionType =  Array<Int8Array>
    | Array<Uint8Array>
    | Array<Uint8ClampedArray>
    | Array<Int16Array>
    | Array<Uint16Array>
    | Array<Int32Array>
    | Array<Uint32Array>
    | Array<Float32Array>
    | Array<Float64Array>
    | Array<BigInt64Array>
    | Array<BigUint64Array>
    | Array<string>
    | Array<ArrayBuffer>
    | Array<DataView>
    | Array<Blob>;

  /**
   * Creates and initializes a **Buffer** object of the specified length.
   *
   * @param { int } size - Size of the **Buffer** object to create, in bytes.
   * @param { string | Buffer | int | double | long } [fill] - Value to be filled in the buffer. The default value is
   *     **0**. [since 11]
   * @param { string | Buffer | number } [fill] - Value to be filled in the buffer. The default value is **0**.
   *     [since 9 - 10]
   * @param { BufferEncoding } [encoding] - Encoding format (valid only when **fill** is a string). The default value is
   *     **'utf8'**.
   * @returns { Buffer } **Buffer** object created.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;
   *     3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function alloc(size: int, fill?: string | Buffer | int | double | long, encoding?: BufferEncoding): Buffer;

  /**
   * Creates a **Buffer** object of the specified size from the buffer pool, without initializing it.
   * You need to use [fill()]{@link buffer.Buffer#fill} to initialize the **Buffer** object created.
   *
   * @param { int } size - Size of the **Buffer** object to create, in bytes.
   * @returns { Buffer } Uninitialized **Buffer** object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;
   *     3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function allocUninitializedFromPool(size: int): Buffer;

  /**
   * Creates a **Buffer** object of the specified size, without initializing it. This API does not allocate memory from
   * the buffer pool.
   * You need to use [fill()]{@link buffer.Buffer#fill} to initialize the **Buffer** object created.
   *
   * @param { int } size - Size of the **Buffer** object to create, in bytes.
   * @returns { Buffer } Uninitialized **Buffer** object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;
   *     3.Parameter verification failed.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function allocUninitialized(size: int): Buffer;

  /**
   * Obtains the number of bytes of a string based on the encoding format.
   *
   * @param { string | Buffer | TypedArray | DataView | ArrayBuffer | SharedArrayBuffer } string - Target string.
   * @param { BufferEncoding } [encoding] - Encoding format. The default value is **'utf8'**.
   * @returns { number } Number of bytes of the string.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function byteLength(
    string: string | Buffer | TypedArray | DataView | ArrayBuffer | SharedArrayBuffer,
    encoding?: BufferEncoding
  ): number;

  /**
   * Obtains the number of bytes of a string based on the encoding format.
   *
   * @param { string | Buffer | TypedArray | DataView | ArrayBuffer } doc - Target string.
   * @param { BufferEncoding } [encoding] - Encoding format of the string. The default value is 'utf8'.
   * @returns { int } The number of bytes contained within `string`
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function byteLength(
    doc: string | Buffer | TypedArray | DataView | ArrayBuffer,
    encoding?: BufferEncoding
  ): int;

  /**
   * Concatenates an array of **Buffer** objects of the specified length into a new object.
   *
   * @param { Buffer[] | Uint8Array[] } list - Array of objects to concatenate.
   * @param { int } [totalLength] - Total length of bytes to be copied. The default value is **0**.
   * @returns { Buffer } **Buffer** object created.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;
   *     3.Parameter verification failed.
   * @throws { BusinessError } 10200001 - The value of "length" is out of range. It must be >= 0 and <= uint32 max.
   *     Received value is: [length]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function concat(list: Buffer[] | Uint8Array[], totalLength?: int): Buffer;

  /**
   * Creates a **Buffer** object with the specified array.
   *
   * @param { double[] } array - Array to create a **Buffer** object.
   * @returns { Buffer } **Buffer** object created.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function from(array: double[]): Buffer;

  /**
   * Creates a **Buffer** object of the specified length that shares memory with ArrayBuffer.
   *
   * @param { ArrayBuffer | SharedArrayBuffer } arrayBuffer - **ArrayBuffer** or **SharedArrayBuffer** object whose
   *     memory is to be shared.
   * @param { number } [byteOffset] - Byte offset. The default value is **0**.
   * @param { number } [length] - Length of the **Buffer** object to create, in bytes. The default value is
   *     **arrayBuffer.byteLength** minus **byteOffset**.
   * @returns { Buffer } **Buffer** object created.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 10200001 - The value of "[byteOffset/length]" is out of range.
   *     It must be >= [left range] and <= [right range]. Received value is: [byteOffset/length]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function from(arrayBuffer: ArrayBuffer | SharedArrayBuffer, byteOffset?: number, length?: number): Buffer;

  /**
   * This creates a view of the ArrayBuffer without copying the underlying memory.
   *
   * @param { ArrayBuffer } arrayBuffer - arrayBuffer arrayBuffer An ArrayBuffer,
   * @param { int } [byteOffset] - byteOffset [byteOffset = 0] Index of first byte to expose
   *     The value should be an integer.
   * @param { int } [length] - length [length = arrayBuffer.byteLength - byteOffset] Number of bytes to expose
   *     The value should be an integer.
   * @returns { Buffer } Return a view of the ArrayBuffer
   * @throws { BusinessError } 10200001 - The value of "[byteOffset/length]" is out of range.
   *     It must be >= [left range] and <= [right range]. Received value is: [byteOffset/length]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function from(arrayBuffer: ArrayBuffer, byteOffset?: int, length?: int): Buffer;

  /**
   * Copies the data of a passed **Buffer** object to create a new **Buffer** object and returns the new one.
   * Creates a **Buffer** object based on the memory of a passed **Uint8Array** object and returns the new object,
   * maintaining the memory association of the data.
   *
   * @param { Buffer | Uint8Array } buffer - Target object.
   * @returns { Buffer } **Buffer** object created.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function from(buffer: Buffer | Uint8Array): Buffer;

  /**
   * Creates a **Buffer** object based on the specified object.
   *
   * @param { Object } object - Object that supports **Symbol.toPrimitive** or **valueOf()**.
   * @param { int | string } offsetOrEncoding - Byte offset or encoding format.
   * @param { int } length - Length of the **Buffer** object to create, in bytes. This parameter is valid only when the
   *     return value of **valueOf()** of **object** is **ArrayBuffer**. Value range: 0 <= length <=
   *     ArrayBuffer.byteLength. Error 10200001 is reported if a value outside this range is reported. In other cases,
   *     you can set this parameter to any value of the number type. This parameter does not affect the result.
   * @returns { Buffer } **Buffer** object created.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function from(object: Object, offsetOrEncoding: int | string, length: int): Buffer;

  /**
   * Creates a **Buffer** object based on a string in the given encoding format.
   *
   * @param { String } string - String.
   * @param { BufferEncoding } [encoding] - Encoding format. The default value is **'utf8'**.
   * @returns { Buffer } **Buffer** object created.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function from(string: String, encoding?: BufferEncoding): Buffer;

  /**
   * Checks whether the specified object is a **Buffer** object.
   *
   * @param { Object } obj - Object to check.
   * @returns { boolean } Check result. The value **true** is returned if the object is a **Buffer** object; otherwise,
   *     **false** is returned.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function isBuffer(obj: Object): boolean;

  /**
   * Checks whether the encoding format is supported.
   *
   * @param { string } encoding - Encoding format.
   * @returns { boolean } Check result. The value **true** is returned if the encoding format is supported; otherwise,
   *     **false** is returned.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function isEncoding(encoding: string): boolean;

  /**
   * Compares two **Buffer** objects. This API is used for sorting **Buffer** objects.
   *
   * @param { Buffer | Uint8Array } buf1 - **Buffer** object to compare.
   * @param { Buffer | Uint8Array } buf2 - **Buffer** object to compare.
   * @returns { -1 | 0 | 1 } Returns **0** if **buf1** is the same as **buf2**.
   *     <br>Returns **1** if **buf1** comes after **buf2** when sorted.
   *     <br>Returns **-1** if **buf1** comes before **buf2** when sorted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function compare(buf1: Buffer | Uint8Array, buf2: Buffer | Uint8Array): -1 | 0 | 1;

  /**
   * Compares buf1 to buf2
   *
   * @param { Buffer | Uint8Array } buf1 - buf1 buf1 A Buffer or Uint8Array instance.
   * @param { Buffer | Uint8Array } buf2 - buf2 buf2 A Buffer or Uint8Array instance.
   * @returns { int } 0 is returned if target is the same as buf
   *     1 is returned if target should come before buf when sorted.
   *     -1 is returned if target should come after buf when sorted.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function compare(buf1: Buffer | Uint8Array, buf2: Buffer | Uint8Array): int;

  /**
   * Transcodes a **Buffer** or **Uint8Array** object from one encoding format to another.
   *
   * @param { Buffer | Uint8Array } source - Instance object.
   * @param { string } fromEnc - Current encoding format. For details about the supported formats, see
   *     [BufferEncoding]{@link buffer.BufferEncoding}.
   * @param { string } toEnc - Target encoding format. For details about the supported formats, see
   *     [BufferEncoding]{@link buffer.BufferEncoding}.
   * @returns { Buffer } New **Buffer** object in the target encoding format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function transcode(source: Buffer | Uint8Array, fromEnc: string, toEnc: string): Buffer;


  /**
   * The Buffer object is a method of handling buffers dedicated to binary data.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  class Buffer {
    /**
     * Length of the **Buffer** object, in bytes.
     *
     * @throws { BusinessError } 10200013 - Length  cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    length: number;

    /**
     * Gets the element number of the buffer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get length(): int;

    /**
     * **ArrayBuffer** object.
     *
     * @throws { BusinessError } 10200013 - Buffer cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    buffer: ArrayBuffer;

    /**
     * The underlying ArrayBuffer object based on which this Buffer object is created.
     *
     * @throws { BusinessError } 10200013 - Buffer cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get buffer(): ArrayBuffer;

    /**
     * Offset of the **Buffer** object in the memory pool.
     *
     * @throws { BusinessError } 10200013 - ByteOffset  cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    byteOffset: number;

    /**
     * The byteOffset of the Buffers underlying ArrayBuffer object
     *
     * @throws { BusinessError } 10200013 - ByteOffset  cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get byteOffset(): int;

    /**
     * Fills this **Buffer** object at the specified position. By default, data is filled cyclically.
     *
     * @param { string | Buffer | Uint8Array | number } value - Value to fill. [since 9 - 10]
     * @param { string | Buffer | Uint8Array | int | double | long } value - Value to fill. [since 11]
     * @param { int } [offset] - Offset to the start position in this **Buffer** object where data is filled. The
     *     default value is **0**.
     * @param { int } [end] - Offset to the end position in this **Buffer** object (not inclusive). The default value is
     *     the length of this **Buffer** object.
     * @param { BufferEncoding } [encoding] - Encoding format (valid only when **value** is a string). The default value
     *     is **'utf8'**.
     * @returns { Buffer } **Buffer** object filled with the specified value.
     * @throws { BusinessError } 10200001 - The value of "[offset/end]" is out of range. It must be >= 0 and <=
     *     [right range]. Received value is: [offset/end]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Incorrect parameter types;
     *     2.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    fill(
      value: string | Buffer | Uint8Array | int | double | long,
      offset?: int,
      end?: int,
      encoding?: BufferEncoding
    ): Buffer;

    /**
     * Compares this **Buffer** object with another object.
     *
     * @param { Buffer | Uint8Array } target - Target **Buffer** object to compare.
     * @param { number } [targetStart] - Offset to the start of the data to compare in the target **Buffer** object. The
     *     default value is **0**.
     * @param { number } [targetEnd] - Offset to the end of the data to compare in the target **Buffer** object (not
     *     inclusive). The default value is the length of the target **Buffer** object.
     * @param { number } [sourceStart] - Offset to the start of the data to compare in this **Buffer** object. The
     *     default value is **0**.
     * @param { number } [sourceEnd] - Offset to the end of the data to compare in this **Buffer** object (not inclusive
     *     ). The default value is the length of this **Buffer** object.
     * @returns { -1 | 0 | 1 } Comparison result. The value **0** is returned if the two **Buffer** objects are the same
     *     ; **1** is returned if this object comes after the target object when sorted; **-1** is returned if this
     *     object comes before the target object when sorted.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[targetStart/targetEnd/sourceStart/sourceEnd]" is out of
     *     range.
     *     It must be >= 0 and <= [right range]. Received value is: [targetStart/targetEnd/sourceStart/sourceEnd]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    compare(
      target: Buffer | Uint8Array,
      targetStart?: number,
      targetEnd?: number,
      sourceStart?: number,
      sourceEnd?: number
    ): -1 | 0 | 1;

    /**
     * Compares buf with target and returns a number indicating whether buf comes before, after,
     * or is the same as target in sort order. Comparison is based on the actual sequence of bytes in each Buffer.
     *
     * @param { Buffer | Uint8Array } target - target target A Buffer or Uint8Array with which to compare buf
     * @param { int } [targetStart] - targetStart [targetStart = 0] The offset within target at which to begin
     *     comparison
     * @param { int } [targetEnd] - targetEnd [targetEnd = target.length] The offset within target at which to end
     *     comparison (not inclusive)
     * @param { int } [sourceStart] - sourceStart [sourceStart = 0] The offset within buf at which to begin comparison
     * @param { int } [sourceEnd] - sourceEnd [sourceEnd = buf.length] The offset within buf at which to end comparison
     *     (not inclusive)
     * @returns { int } number is returned if target is the same as buf
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[targetStart/targetEnd/sourceStart/sourceEnd]" is out of
     *     range.
     *     It must be >= 0 and <= [right range]. Received value is: [targetStart/targetEnd/sourceStart/sourceEnd]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    compare(
      target: Buffer | Uint8Array,
      targetStart?: int,
      targetEnd?: int,
      sourceStart?: int,
      sourceEnd?: int
    ): int;

    /**
     * Copies data at the specified position in this **Buffer** object to the specified position in another **Buffer**
     * object.
     *
     * @param { Buffer | Uint8Array } target - **Buffer** or **Uint8Array** object to which data is copied.
     * @param { int } [targetStart] - Offset to the start position in the target object where data is copied. The
     *     default value is **0**.
     * @param { int } [sourceStart] - Offset to the start position in this **Buffer** object where data is copied. The
     *     default value is **0**.
     * @param { int } [sourceEnd] - Offset to the end position in this **Buffer** object (not inclusive). The default
     *     value is the length of this **Buffer** object.
     * @returns { int } Total length of the data copied, in bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[targetStart/sourceStart/sourceEnd]" is out of range. It must
     *     be >= 0.
     *     Received value is: [targetStart/sourceStart/sourceEnd]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    copy(target: Buffer | Uint8Array, targetStart?: int, sourceStart?: int, sourceEnd?: int): int;

    /**
     * Checks whether this **Buffer** object is the same as another **Buffer** object.
     *
     * @param { Uint8Array | Buffer } otherBuffer - **Buffer** object to compare.
     * @returns { boolean } Check result. The value **true** is returned if the two objects are the same; otherwise,
     *     **false** is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2
     *     .Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    equals(otherBuffer: Uint8Array | Buffer): boolean;

    /**
     * Checks whether this **Buffer** object contains the specified value.
     *
     * @param { string | number | Buffer | Uint8Array } value - Value to match. [since 9 - 10]
     * @param { string | int | double | long | Buffer | Uint8Array } value - Value to match. [since 11]
     * @param { int } [byteOffset] - Number of bytes to skip before starting to check data. If the offset is a negative
     *     number, data is checked from the end of the **Buffer** object. The default value is **0**.
     * @param { BufferEncoding } [encoding] - Encoding format (valid only when **value** is a string). The default value
     *     is **'utf8'**.
     * @returns { boolean } Check result. The value **true** is returned if the object contains the specified value;
     *     otherwise, **false** is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    includes(value: string | int | double | long | Buffer | Uint8Array, byteOffset?: int, encoding?: BufferEncoding): boolean;

    /**
     * Obtains the index of the first occurrence of the specified value in this **Buffer** object. If no match is found,
     * **-1** is returned.
     *
     * @param { string | number | Buffer | Uint8Array } value - Value to match. [since 9 - 10]
     * @param { string | int | double | long | Buffer | Uint8Array } value - Value to match. [since 11]
     * @param { int } [byteOffset] - Number of bytes to skip before starting to check data. If the offset is a negative
     *     number, data is checked from the end of the **Buffer** object. The default value is **0**.
     * @param { BufferEncoding } [encoding] - Encoding format (valid only when **value** is a string). The default value
     *     is **'utf8'**.
     * @returns { int } Index obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    indexOf(value: string | int | double | long | Buffer | Uint8Array, byteOffset?: int, encoding?: BufferEncoding): int;

    /**
     * Creates and returns an iterator that contains the keys of this **Buffer** object.
     *
     * @returns { IterableIterator<int> } Iterator created.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    keys(): IterableIterator<int>;

    /**
     * Creates and returns an iterator that contains the values of this **Buffer** object.
     *
     * @returns { IterableIterator<long> } Iterator.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    values(): IterableIterator<long>;

    /**
     * Creates and returns an iterator that contains key-value pairs of this **Buffer** object.
     *
     * @returns { IterableIterator<[number, number]> } Iterator that contains the key and value, both of which are of
     *     the number type. [since 9 - 10]
     * @returns { IterableIterator<[int, long]> } [since 11]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    entries(): IterableIterator<[int, long]>;

    /**
     * Obtains the index of the last occurrence of the specified value in this **Buffer** object. If no match is found,
     * **-1** is returned.
     *
     * @param { string | number | Buffer | Uint8Array } value - Value to match. [since 9 - 10]
     * @param { string | int | double | long | Buffer | Uint8Array } value - Value to match. [since 11]
     * @param { int } [byteOffset] - Number of bytes to skip before starting to check data. If the offset is a negative
     *     number, data is checked from the end of the **Buffer** object. The default value is the length of this
     *     **Buffer** object.
     * @param { BufferEncoding } [encoding] - Encoding format (valid only when **value** is a string). The default value
     *     is **'utf8'**.
     * @returns { int } Index obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    lastIndexOf(value: string | int | double | long | Buffer | Uint8Array, byteOffset?: int, encoding?: BufferEncoding): int;

    /**
     * Reads a 64-bit, big-endian, signed big integer from this **Buffer** object at the specified offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 8
     * @returns { bigint } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readBigInt64BE(offset?: int): bigint;

    /**
     * Reads a 64-bit, little-endian, signed big integer from this **Buffer** object at the specified offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 8
     * @returns { bigint } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readBigInt64LE(offset?: int): bigint;

    /**
     * Reads a 64-bit, big-endian, unsigned big integer from this **Buffer** object at the specified offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 8
     * @returns { bigint } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readBigUInt64BE(offset?: int): bigint;

    /**
     * Reads a 64-bit, little-endian, unsigned big integer from this **Buffer** object at the specified offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 8
     * @returns { bigint } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readBigUInt64LE(offset?: int): bigint;

    /**
     * Reads a 64-bit, big-endian, double-precision floating-point number from this **Buffer** object at the specified
     * offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 8
     * @returns { double } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readDoubleBE(offset?: int): double;

    /**
     * Reads a 64-bit, little-endian, double-precision floating-point number from this **Buffer** object at the
     * specified offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 8
     * @returns { double } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readDoubleLE(offset?: int): double;

    /**
     * Reads a 32-bit, big-endian, single-precision floating-point number from this **Buffer** object at the specified
     * offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 4
     * @returns { double } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readFloatBE(offset?: int): double;

    /**
     * Reads a 32-bit, little-endian, single-precision floating-point number from this **Buffer** object at the
     * specified offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 4
     * @returns { double } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readFloatLE(offset?: int): double;

    /**
     * Reads an 8-bit signed integer from this **Buffer** object at the specified offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 1
     * @returns { long } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 1
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readInt8(offset?: int): long;

    /**
     * Reads a 16-bit, big-endian, signed integer from this **Buffer** object at the specified offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 2
     * @returns { long } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readInt16BE(offset?: int): long;

    /**
     * Reads a 16-bit, little-endian, signed integer from this **Buffer** object at the specified offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 2
     * @returns { long } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readInt16LE(offset?: int): long;

    /**
     * Reads a 32-bit, big-endian, signed integer from this **Buffer** object at the specified offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 4
     * @returns { long } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readInt32BE(offset?: int): long;

    /**
     * Reads a 32-bit, little-endian, signed integer from this **Buffer** object at the specified offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 4
     * @returns { long } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readInt32LE(offset?: int): long;

    /**
     * Reads the specified number of bytes from this **Buffer** object at the specified offset, and interprets the
     * result as a big-endian, two's complement signed value that supports up to 48 bits of precision.
     *
     * @param { int } offset - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length -
     *     byteLength
     * @param { int } byteLength - Number of bytes to read. Value range: 1 <= byteLength <= 6
     * @returns { long } Data read. If the offset is a decimal, undefined is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readIntBE(offset: int, byteLength: int): long;

    /**
     * Reads the specified number of bytes from this **Buffer** object at the specified offset and interprets the result
     * as a little-endian, two's complement signed value that supports up to 48 bits of precision.
     *
     * @param { int } offset - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length -
     *     byteLength
     * @param { int } byteLength - Number of bytes to read. Value range: 1 <= byteLength <= 6
     * @returns { long } Data read. If the offset is a decimal, undefined is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readIntLE(offset: int, byteLength: int): long;

    /**
     * Reads an 8-bit unsigned integer from this **Buffer** object at the specified offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 1
     * @returns { long } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 1
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readUInt8(offset?: int): long;

    /**
     * Reads a 16-bit, big-endian, unsigned integer from this **Buffer** object at the specified offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 2
     * @returns { long } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readUInt16BE(offset?: int): long;

    /**
     * Reads a 16-bit, little-endian, unsigned integer from this **Buffer** object at the specified offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 2
     * @returns { long } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readUInt16LE(offset?: int): long;

    /**
     * Reads a 32-bit, big-endian, unsigned integer from this **Buffer** object at the specified offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 4
     * @returns { long } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readUInt32BE(offset?: int): long;

    /**
     * Reads a 32-bit, little-endian, unsigned integer from this **Buffer** object at the specified offset.
     *
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 4
     * @returns { long } Data read.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readUInt32LE(offset?: int): long;

    /**
     * Reads the specified number of bytes from this **Buffer** object at the specified offset, and interprets the
     * result as an unsigned, big-endian integer that supports up to 48 bits of precision.
     *
     * @param { int } offset - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length -
     *     byteLength
     * @param { int } byteLength - Number of bytes to read.  Value range: 1 <= byteLength <= 6
     * @returns { long } Data read. If the offset is a decimal, undefined is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readUIntBE(offset: int, byteLength: int): long;

    /**
     * Reads the specified number of bytes from this **Buffer** object at the specified offset, and interprets the
     * result as an unsigned, little-endian integer that supports up to 48 bits of precision.
     *
     * @param { int } offset - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length -
     *     byteLength
     * @param { int } byteLength - Number of bytes to read. Value range: 1 <= byteLength <= 6
     * @returns { long } Data read. If the offset is a decimal, undefined is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readUIntLE(offset: int, byteLength: int): long;

    /**
     * Truncates this **Buffer** object from the specified position to create a new **Buffer** object.
     *
     * @param { int } [start] - Offset to the start position in this **Buffer** object where data is truncated. The
     *     default value is **0**.
     * @param { int } [end] - Offset to the end position in this **Buffer** object (not inclusive). The default value is
     *     the length of this **Buffer** object.
     * @returns { Buffer } **Buffer** object created. When the value of **start** or **end** is less than **0**, an
     *     empty buffer is returned.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    subarray(start?: int, end?: int): Buffer;

    /**
     * Converts this **Buffer** object into an array of unsigned 16-bit integers and swaps the byte order in place.
     *
     * @returns { Buffer } **Buffer** object swapped.
     * @throws { BusinessError } 10200009 - The buffer size must be a multiple of 16-bits
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    swap16(): Buffer;

    /**
     * Converts this **Buffer** object into an array of unsigned 32-bit integers and swaps the byte order in place.
     *
     * @returns { Buffer } **Buffer** object swapped.
     * @throws { BusinessError } 10200009 - The buffer size must be a multiple of 32-bits
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    swap32(): Buffer;

    /**
     * Converts this **Buffer** object into an array of unsigned 64-bit integers and swaps the byte order in place.
     *
     * @returns { Buffer } **Buffer** object swapped.
     * @throws { BusinessError } 10200009 - The buffer size must be a multiple of 64-bits
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    swap64(): Buffer;

    /**
     * Converts this **Buffer** object into a JSON object.
     *
     * @returns { Object } JSON object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    toJSON(): Object;

    /**
     * Converts this Buffer instance into a JsonElement.
     *
     * @returns { jsonx.JsonElement } A new JsonElement containing the Buffer
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    toJSON(): jsonx.JsonElement;

    /**
     * Converts the data at the specified position in this **Buffer** object into a string in the specified encoding
     * format.
     *
     * @param { string } [encoding] - Encoding format (valid only when **value** is a string). The default value is
     *     **'utf8'**.
     * @param { number } [start] - Offset to the start position of the data to convert. The default value is **0**.
     * @param { number } [end] - Offset to the end position of data. The default value is the length of this **Buffer**
     *     object.
     * @returns { string } String. When the value of **start** is greater than or equal to **Buffer.length** or
     *     **start** is greater than **end**, an empty string is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    toString(encoding?: string, start?: number, end?: number): string;

    /**
     * Decodes buf to a string according to the specified character encoding in encoding
     *
     * @param { BufferEncoding } [encoding] - encoding [encoding='utf8'] The character encoding to use
     * @param { int } [start] - start [start = 0] The byte offset to start decoding at
     *     The value should be an integer.
     * @param { int } [end] - end [end = buf.length] The byte offset to stop decoding at (not inclusive)
     *     The value should be an integer.
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    toString(encoding?: BufferEncoding, start?: int, end?: int): string;

    /**
     * Writes a string of the specified length to this **Buffer** object at the specified position in the given encoding
     * format.
     *
     * @param { string } str - String to write.
     * @param { int } [offset] - Offset. The default value is **0**.
     * @param { int } [length] - Maximum number of bytes to write. The default value is **Buffer.length** minus
     *     **offset**.
     * @param { string } [encoding] - Encoding format of the string. The default value is **'utf8'**.
     * @returns { int } Number of bytes written.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[offset/length]" is out of range. It must be >= 0 and <=
     *     buf.length. Received value is: [offset/length]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    write(str: string, offset?: int, length?: int, encoding?: string): int;

    /**
     * Writes a 64-bit, big-endian, signed big integer to this **Buffer** object at the specified offset.
     *
     * @param { bigint } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 8
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeBigInt64BE(value: bigint, offset?: int): int;

    /**
     * Writes a 64-bit, little-endian, signed big integer to this **Buffer** object at the specified offset.
     *
     * @param { bigint } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 8
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeBigInt64LE(value: bigint, offset?: int): int;

    /**
     * Writes a 64-bit, big-endian, signed big integer to this **Buffer** object at the specified offset.
     *
     * @param { bigint } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 8
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeBigUInt64BE(value: bigint, offset?: int): int;

    /**
     * Writes a 64-bit, little-endian, unsigned big integer to this **Buffer** object at the specified offset.
     *
     * @param { bigint } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 8
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeBigUInt64LE(value: bigint, offset?: int): int;

    /**
     * Writes a 64-bit, big-endian, double-precision floating-point number to this **Buffer** object at the specified
     * offset.
     *
     * @param { double } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 8
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeDoubleBE(value: double, offset?: int): int;

    /**
     * Writes a 64-bit, little-endian, double-precision floating-point number to this **Buffer** object at the specified
     * offset.
     *
     * @param { double } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 8
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeDoubleLE(value: double, offset?: int): int;

    /**
     * Writes a 32-bit, big-endian, single-precision floating-point number to this **Buffer** object at the specified
     * offset.
     *
     * @param { double } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 4
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeFloatBE(value: double, offset?: int): int;

    /**
     * Writes a 32-bit, little-endian, single-precision floating-point number to this **Buffer** object at the specified
     * offset.
     *
     * @param { double } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 4
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4
     *     . Received value is: [offset]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeFloatLE(value: double, offset?: int): int;

    /**
     * Writes an 8-bit signed integer to this **Buffer** object at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 1
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeInt8(value: long, offset?: int): int;

    /**
     * Writes a 16-bit, big-endian, signed integer to this **Buffer** object at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 2
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeInt16BE(value: long, offset?: int): int;

    /**
     * Writes a 16-bit, little-endian, signed integer to this **Buffer** object at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 2
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeInt16LE(value: long, offset?: int): int;

    /**
     * Writes a 32-bit, big-endian, signed integer to this **Buffer** object at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 4
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeInt32BE(value: long, offset?: int): int;

    /**
     * Writes a 32-bit, little-endian, signed integer to this **Buffer** object at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 4
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeInt32LE(value: long, offset?: int): int;

    /**
     * Writes a big-endian signed value of the specified length to this **Buffer** object at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } offset - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length -
     *     byteLength
     * @param { int } byteLength - Number of bytes to write.
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeIntBE(value: long, offset: int, byteLength: int): int;

    /**
     * Writes a little-endian signed value of the specified length to this **Buffer** object at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } offset - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length -
     *     byteLength
     * @param { int } byteLength - Number of bytes to write.
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeIntLE(value: long, offset: int, byteLength: int): int;

    /**
     * Writes an 8-bit unsigned integer to this **Buffer** object at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 1
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeUInt8(value: long, offset?: int): int;

    /**
     * Writes a 16-bit, big-endian, unsigned integer to this **Buffer** object at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 2
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeUInt16BE(value: long, offset?: int): int;

    /**
     * Writes a 16-bit, little-endian, unsigned integer to this **Buffer** object at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 2
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeUInt16LE(value: long, offset?: int): int;

    /**
     * Writes a 32-bit, big-endian, unsigned integer to this **Buffer** object at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 4
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeUInt32BE(value: long, offset?: int): int;

    /**
     * Writes a 32-bit, little-endian, unsigned integer to this **Buffer** object at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } [offset] - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length - 4
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeUInt32LE(value: long, offset?: int): int;

    /**
     * Writes an unsigned big-endian value of the specified length to this **Buffer** object at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } offset - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length -
     *     byteLength
     * @param { int } byteLength - Number of bytes to write.
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeUIntBE(value: long, offset: int, byteLength: int): int;

    /**
     * Writes an unsigned little-endian value of the specified length to this **Buffer** object at the specified offset.
     *
     * @param { long } value - Data to write.
     * @param { int } offset - Offset. The default value is **0**. Value range: 0 <= offset <= Buffer.length -
     *     byteLength
     * @param { int } byteLength - Number of bytes to write.
     * @returns { int } Offset plus the number of written bytes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <=
     *     [right range]. Received value is: [param]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    writeUIntLE(value: long, offset: int, byteLength: int): int;

    /**
     * Returns the item at that index.
     *
     * @param { int } index - The zero-based index of the desired code unit.
     *     Throws error if index < 0 or index >= buffer.length.
     *     The value should be an integer.
     * @returns { long } The element in the buffer matching the given index.
     * @throws { BusinessError } 10200001 - The value of index is out of range.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    [index: int]: long;
  }

  /**
   * Defines the Blob related options parameters.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  interface BlobOptions {
    /**
     * Blob content type. The default parameter is' '.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    type?: string;

    /**
     * How to output a string ending with '\ n' as' transparent or native . The default value is transparent.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    endings?: string;
  }

  /**
   * Process data as blob type
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  class Blob {
    /**
     * A constructor used to create a **Blob** object.
     *
     * @param { string[] | ArrayBuffer[] | TypedArray[] | DataView[] | Blob[] } sources - Data sources of the **Blob**
     *     object.
     * @param { Object } [options] - options:<br>- **endings**: specifies how the terminator **'\n'** is output. The
     *     value can be **'native'** or **'transparent'**. **'native'** means that the terminator follows the system.
     *     **'transparent'** means that the terminator stored in the **Blob** object remains unchanged. The default
     *     value is **'transparent'**.<br>- **type**: type of the data in the **Blob** object. This type represents the
     *     MIME type of the data. However, it is not used for type format validation. The default value is **''**.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    constructor(sources: string[] | ArrayBuffer[] | TypedArray[] | DataView[] | Blob[], options?: Object);

    /**
     * Creates a new Blob object containing a concatenation of the given sources.
     *
     * @param { ArrayUnionType } sources - sources sources ArrayUnionType will be stored within the Blob.
     * @param { BlobOptions } [options] - options options {endings: string, type: string}
     *     endings:  One of either 'transparent' or 'native'.
     *     type: The Blob content-type
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    constructor(sources: ArrayUnionType, options?: BlobOptions);

    /**
     * Total size of the Blob instance, in bytes.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    get size(): int;

    /**
     * Type of the data in the Blob instance.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    get type(): string;

    /**
     * Puts the **Blob** data into an **ArrayBuffer** object. This API uses a promise to return the result.
     *
     * @returns { Promise<ArrayBuffer> }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    arrayBuffer(): Promise<ArrayBuffer>;

    /**
     * Creates and returns a **Blob** object that contains specified data from this **Blob** object.
     *
     * @param { int } [start] - Offset to the start position of data. The default value is **0**.
     * @param { int } [end] - Offset to the end position of data. The default value is the data length in the original
     *     **Blob** object.
     * @param { string } [type] - Type of the data in the new **Blob** object. The default value is **''**.
     * @returns { Blob }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    slice(start?: int, end?: int, type?: string): Blob;

    /**
     * Decodes data using UTF-8 and returns a string. This API uses a promise to return the result.
     *
     * @returns { Promise<string> }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    text(): Promise<string>;
  }
}

export default buffer;