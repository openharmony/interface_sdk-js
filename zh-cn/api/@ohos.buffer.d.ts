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
 * Buffer对象用于表示固定长度的字节序列，是专门存放二进制数据的缓存区。
 * **推荐使用场景**：适用于处理大量二进制数据，如图片处理和文件接收上传等。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace buffer {
  /**
   * 表示支持的编码格式类型。
   *
   * @unionmember { 'ascii' } 表示ascii格式。
   * @unionmember { 'utf8' } 表示utf8格式。
   * @unionmember { 'utf-8' } 表示utf8格式。
   * @unionmember { 'utf16le' } 表示utf16小端序格式。
   * @unionmember { 'ucs2' } utf16le的别名。
   * @unionmember { 'ucs-2' } utf16le的别名。
   * @unionmember { 'base64' } 表示base64格式。
   * @unionmember { 'base64url' } 表示base64url格式。
   * @unionmember { 'latin1' } iso-8859-1的别名，向下兼容ascii格式。
   * @unionmember { 'binary' } 表示二进制格式。
   * @unionmember { 'hex' } 表示十六进制格式。
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
   * TypedArray继承Int8Array的特性与方法。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface TypedArray extends Int8Array {  }
  /**
   * TypedArray的特性与方法。
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
   * ArrayUnionType的特性与方法。
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
   * 创建指定字节长度的Buffer对象并初始化。
   *
   * @param { int } size - 指定的Buffer对象长度，单位：字节。
   * @param { string | Buffer | int | double | long } [fill] - 填充至新缓存区的值。默认值：0。[since 11]
   * @param { string | Buffer | number } [fill] - 填充至新缓存区的值。默认值：0。[since 9 - 10]
   * @param { BufferEncoding } [encoding] - 编码格式（当fill为string时，才有意义）。默认值：'utf8'。
   * @returns { Buffer } 返回一个Buffer对象。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function alloc(size: int, fill?: string | Buffer | int | double | long, encoding?: BufferEncoding): Buffer;

  /**
   * 创建指定大小未初始化的Buffer对象。内存从缓冲池分配。
   * 创建的Buffer内容未知，需要使用[fill()]{@link buffer.Buffer#fill}函数来初始化Buffer对象。
   *
   * @param { int } size - 指定的Buffer对象长度，单位：字节。
   * @returns { Buffer } 未初始化的Buffer实例。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function allocUninitializedFromPool(size: int): Buffer;

  /**
   * 创建指定大小未初始化的Buffer对象。内存不从缓冲池分配。
   * 创建的Buffer内容未知，需要使用[fill()]{@link buffer.Buffer#fill}函数来初始化Buffer对象。
   *
   * @param { int } size - 指定的Buffer对象长度，单位：字节。
   * @returns { Buffer } 未初始化的Buffer实例。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function allocUninitialized(size: int): Buffer;

  /**
   * 根据不同的编码格式，返回指定字符串的字节数。
   *
   * @param { string | Buffer | TypedArray | DataView | ArrayBuffer | SharedArrayBuffer } string - 指定字符串。
   * @param { BufferEncoding } [encoding] - 编码格式。默认值：'utf8'。
   * @returns { number } 返回指定字符串的字节数。
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
   * 根据不同的编码格式，返回指定字符串的字节数。
   *
   * @param { string | Buffer | TypedArray | DataView | ArrayBuffer } doc - 指定字符串。
   * @param { BufferEncoding } [encoding] - 编码格式。默认值：'utf8'。
   * @returns { int } 字符串的字节数。
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
   * 将数组中的内容复制指定字节长度到新的Buffer对象中并返回。
   *
   * @param { Buffer[] | Uint8Array[] } list - 实例数组。
   * @param { int } [totalLength] - 需要复制的总字节长度。默认值：0。
   * @returns { Buffer } 返回新的Buffer对象。
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
   * 根据指定数组创建新的Buffer对象。
   *
   * @param { double[] } array - 指定数组。
   * @returns { Buffer } 新的Buffer对象。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function from(array: double[]): Buffer;

  /**
   * 创建与arrayBuffer共享内存的指定长度的Buffer对象。
   *
   * @param { ArrayBuffer | SharedArrayBuffer } arrayBuffer - 实例对象，用于共享内存。
   * @param { number } [byteOffset] - 字节偏移量。默认值：0。
   * @param { number } [length] - 字节长度。默认值：（arrayBuffer.byteLength - byteOffset）。在传入null时字节长度为0。
   * @returns { Buffer } 返回一个Buffer对象，该对象与入参对象arrayBuffer共享相同的内存区域。
   * @throws { BusinessError } 10200001 - The value of "[byteOffset/length]" is out of range.
   *     It must be >= [left range] and <= [right range]. Received value is: [byteOffset/length]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function from(arrayBuffer: ArrayBuffer | SharedArrayBuffer, byteOffset?: number, length?: number): Buffer;

  /**
   * 创建ArrayBuffer的视图，不复制底层内存。
   *
   * @param { ArrayBuffer } arrayBuffer - 用于创建视图的ArrayBuffer。
   * @param { int } [byteOffset] - byteOffset [byteOffset = 0] 暴露的第一个字节的索引。
   *     该值应为整数。
   * @param { int } [length] - length [length = arrayBuffer.byteLength - byteOffset] 暴露的字节数。
   *     该值应为整数。
   * @returns { Buffer } 返回ArrayBuffer的视图。
   * @throws { BusinessError } 10200001 - The value of "[byteOffset/length]" is out of range.
   *     It must be >= [left range] and <= [right range]. Received value is: [byteOffset/length]
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function from(arrayBuffer: ArrayBuffer, byteOffset?: int, length?: int): Buffer;

  /**
   * 当入参为Buffer对象时，创建新的Buffer对象并复制入参Buffer对象的数据，然后返回新对象。
   * 当入参为Uint8Array对象时，基于Uint8Array对象的内存创建新的Buffer对象并返回，保持数据的内存关联。
   *
   * @param { Buffer | Uint8Array } buffer - 对象数据。
   * @returns { Buffer } 新的Buffer对象。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function from(buffer: Buffer | Uint8Array): Buffer;

  /**
   * 根据指定的object类型数据，创建新的Buffer对象。
   *
   * @param { Object } object - 支持Symbol.toPrimitive或valueOf()的对象。
   * @param { int | string } offsetOrEncoding - 字节偏移量或编码格式。
   * @param { int } length - 字节长度（此入参仅在object的valueOf()返回值为ArrayBuffer时生效，
   *     取值范围：0 <= length <= ArrayBuffer.byteLength，超出范围时报错: 10200001）。
   *     其他情况下可填任意number类型值，该参数不会对结果产生影响。
   * @returns { Buffer } 新的Buffer对象。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function from(object: Object, offsetOrEncoding: int | string, length: int): Buffer;

  /**
   * 根据指定编码格式的字符串，创建新的Buffer对象。
   *
   * @param { String } string - 字符串。
   * @param { BufferEncoding } [encoding] - 编码格式。默认值：'utf8'。
   * @returns { Buffer } 新的Buffer对象。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function from(string: String, encoding?: BufferEncoding): Buffer;

  /**
   * 判断obj是否为Buffer。
   *
   * @param { Object } obj - 判断对象。
   * @returns { boolean } 如果obj是Buffer，则返回true，否则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function isBuffer(obj: Object): boolean;

  /**
   * 判断encoding是否为支持的编码格式。
   *
   * @param { string } encoding - 编码格式。
   * @returns { boolean } 是支持的编码格式返回true，反之则返回false。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function isEncoding(encoding: string): boolean;

  /**
   * 返回两个Buffer对象的比较结果，通常用于对Buffer对象数组进行排序。
   *
   * @param { Buffer | Uint8Array } buf1 - 待比较数组。
   * @param { Buffer | Uint8Array } buf2 - 待比较数组。
   * @returns { -1 | 0 | 1 } 如果buf1与buf2相同，则返回0。
   *     <br/>如果排序时buf1位于buf2之后，则返回1。
   *     <br/>如果排序时buf1位于buf2之前，则返回-1。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function compare(buf1: Buffer | Uint8Array, buf2: Buffer | Uint8Array): -1 | 0 | 1;

  /**
   * 比较buf1与buf2。
   *
   * @param { Buffer | Uint8Array } buf1 - 用于比较的第一个Buffer对象。
   * @param { Buffer | Uint8Array } buf2 - 用于比较的第二个Buffer对象。
   * @returns { int } 如果buf1与buf2相同，则返回0；
   *     如果排序时buf1位于buf2之前，则返回1；
   *     如果排序时buf1位于buf2之后，则返回-1。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function compare(buf1: Buffer | Uint8Array, buf2: Buffer | Uint8Array): int;

  /**
   * 将Buffer或Uint8Array对象从一种字符编码重新编码为另一种。
   *
   * @param { Buffer | Uint8Array } source - 实例对象。
   * @param { string } fromEnc - 当前编码。支持的格式范围为[BufferEncoding]{@link buffer.BufferEncoding}。
   * @param { string } toEnc - 目标编码。支持的格式范围为[BufferEncoding]{@link buffer.BufferEncoding}。
   * @returns { Buffer } 将当前编码转换成目标编码，并返回一个新的Buffer对象。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function transcode(source: Buffer | Uint8Array, fromEnc: string, toEnc: string): Buffer;


  /**
   * Buffer对象是处理二进制数据的缓存区。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  class Buffer {
    /**
     * Buffer对象的字节长度。
     *
     * @throws { BusinessError } 10200013 - Length  cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    length: number;

    /**
     * 获取Buffer对象的元素个数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get length(): int;

    /**
     * ArrayBuffer对象。
     *
     * @throws { BusinessError } 10200013 - Buffer cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    buffer: ArrayBuffer;

    /**
     * 创建此Buffer对象所基于的底层ArrayBuffer对象。
     *
     * @throws { BusinessError } 10200013 - Buffer cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get buffer(): ArrayBuffer;

    /**
     * 当前Buffer所在内存池的偏移量。
     * 当Buffer通过内存池创建时（如使用[allocUninitializedFromPool]{@link buffer.allocUninitializedFromPool}创建Buffer，
     * 或使用buffer.from()传入字符串，且字符串长度加当前内存池偏移量小于4kb），返回相对于内存池的偏移量。
     * 当Buffer直接分配内存时（如使用[alloc]{@link buffer.alloc}），返回值为0。
     *
     * @throws { BusinessError } 10200013 - ByteOffset  cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    byteOffset: number;

    /**
     * Buffer对象底层ArrayBuffer对象的字节偏移量。
     *
     * @throws { BusinessError } 10200013 - ByteOffset  cannot be set for the buffer that has only a getter.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get byteOffset(): int;

    /**
     * 使用value填充当前对象指定位置的数据，默认为循环填充，并返回填充后的Buffer对象。
     *
     * @param { string | Buffer | Uint8Array | number } value - 用于填充的值。[since 9 - 10]
     * @param { string | Buffer | Uint8Array | int | double | long } value - 用于填充的值。[since 11]
     * @param { int } [offset] - 起始偏移量。默认值：0。
     * @param { int } [end] - 结束偏移量（不包含结束位置）。默认值：当前对象的字节长度。
     * @param { BufferEncoding } [encoding] - 字符编码格式（value为string才有意义）。默认值：'utf8'。
     * @returns { Buffer } 返回填充后的Buffer对象。
     * @throws { BusinessError } 10200001 - The value of "[offset/end]" is out of range. It must be >= 0 and <=
     *     [right range]. Received value is: [offset/end]
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
     * 比较当前Buffer对象与目标Buffer对象，并返回Buffer在排序中的结果。
     *
     * @param { Buffer | Uint8Array } target - 要比较的实例对象。
     * @param { number } [targetStart] - target实例中开始的偏移量。默认值：0。
     * @param { number } [targetEnd] - target实例中结束的偏移量（不包含结束位置）。默认值：目标对象的字节长度。
     * @param { number } [sourceStart] - this实例中开始的偏移量。默认值：0。
     * @param { number } [sourceEnd] - this实例中结束的偏移量（不包含结束位置）。默认值：当前对象的字节长度。
     * @returns { -1 | 0 | 1 } 比较结果。如果两个Buffer对象相同，则返回0；如果当前对象在排序时位于目标对象之后，则返回1；
     *     如果当前对象在排序时位于目标对象之前，则返回-1。
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
     * 将buf与target进行比较，返回一个数字，指示buf在排序中位于target之前、之后还是相同位置。
     * 比较基于每个Buffer中实际的字节序列。
     *
     * @param { Buffer | Uint8Array } target - 用于与此Buffer进行比较的Buffer对象。
     * @param { int } [targetStart] - targetStart [targetStart = 0] target中开始比较的偏移量。
     * @param { int } [targetEnd] - targetEnd [targetEnd = target.length] target中结束比较的偏移量（不包含结束位置）。
     * @param { int } [sourceStart] - sourceStart [sourceStart = 0] buf中开始比较的偏移量。
     * @param { int } [sourceEnd] - sourceEnd [sourceEnd = buf.length] buf中结束比较的偏移量（不包含结束位置）。
     * @returns { int } 如果buf与target相同，则返回0；如果buf在排序中位于target之前或之后，则返回相应数字。
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
     * 将this实例中指定位置的数据复制到target的指定位置上，并返回复制的字节总长度。
     *
     * @param { Buffer | Uint8Array } target - 要复制到的Buffer或Uint8Array实例。
     * @param { int } [targetStart] - target实例中开始写入的偏移量。默认值：0。
     * @param { int } [sourceStart] - this实例中开始复制的偏移量。默认值：0。
     * @param { int } [sourceEnd] - this实例中结束复制的偏移量（不包含结束位置）。默认值：当前对象的字节长度。
     * @returns { int } 复制的字节总长度。
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
     * 比较this实例和otherBuffer实例是否相等。
     *
     * @param { Uint8Array | Buffer } otherBuffer - 比较的目标对象。
     * @returns { boolean } 相等则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    equals(otherBuffer: Uint8Array | Buffer): boolean;

    /**
     * 检查Buffer对象是否包含value值。
     *
     * @param { string | number | Buffer | Uint8Array } value - 要搜索的内容。[since 9 - 10]
     * @param { string | int | double | long | Buffer | Uint8Array } value - 要搜索的内容。[since 11]
     * @param { int } [byteOffset] - 字节偏移量。如果为负数，则从末尾开始计算偏移量。默认值：0。
     * @param { BufferEncoding } [encoding] - 字符编码格式（value为string才有意义）。默认值：'utf8'。
     * @returns { boolean } 存在返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    includes(value: string | int | double | long | Buffer | Uint8Array, byteOffset?: int, encoding?: BufferEncoding): boolean;

    /**
     * 返回当前对象中首次出现value的索引，如果不包含value，则返回-1。
     *
     * @param { string | number | Buffer | Uint8Array } value - 要查找的内容。[since 9 - 10]
     * @param { string | int | double | long | Buffer | Uint8Array } value - 要查找的内容。[since 11]
     * @param { int } [byteOffset] - 字节偏移量。如果为负数，则从末尾开始计算偏移量。默认值：0。
     * @param { BufferEncoding } [encoding] - 字符编码格式（value为string才有意义）。默认值：'utf8'。
     * @returns { int } 第一次出现位置。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    indexOf(value: string | int | double | long | Buffer | Uint8Array, byteOffset?: int, encoding?: BufferEncoding): int;

    /**
     * 返回包含key值的迭代器。
     *
     * @returns { IterableIterator<int> } 返回一个包含key值的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    keys(): IterableIterator<int>;

    /**
     * 返回一个包含value的迭代器。
     *
     * @returns { IterableIterator<long> } 迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    values(): IterableIterator<long>;

    /**
     * 返回一个包含key和value的迭代器。
     *
     * @returns { IterableIterator<[number, number]> } 包含key和value的迭代器，同时两者皆为number类型。[since 9 - 10]
     * @returns { IterableIterator<[int, long]> } [since 11]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    entries(): IterableIterator<[int, long]>;

    /**
     * 返回this实例中最后一次出现value的索引，如果对象不包含value，则返回-1。
     *
     * @param { string | number | Buffer | Uint8Array } value - 要搜索的内容。[since 9 - 10]
     * @param { string | int | double | long | Buffer | Uint8Array } value - 要搜索的内容。[since 11]
     * @param { int } [byteOffset] - 字节偏移量。如果为负数，则从末尾开始计算偏移量。默认值：Buffer.length。
     * @param { BufferEncoding } [encoding] - 字符编码格式（value为string才有意义）。默认值：'utf8'。
     * @returns { int } 最后一次出现value值的索引。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    lastIndexOf(value: string | int | double | long | Buffer | Uint8Array, byteOffset?: int, encoding?: BufferEncoding): int;

    /**
     * 从指定的offset处读取有符号的大端序64位整数。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 8。
     * @returns { bigint } 读取出的内容。
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
     * 从指定的offset处读取有符号的小端序64位整数。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 8。
     * @returns { bigint } 读取出的内容。
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
     * 从指定的offset处读取无符号的大端序64位整数。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 8。
     * @returns { bigint } 读取出的内容。
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
     * 从指定的offset处读取无符号的小端序64位整数。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 8。
     * @returns { bigint } 读取出的内容。
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
     * 从指定的offset处读取64位大端序双精度值。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 8。
     * @returns { double } 读取出的内容。
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
     * 从指定的offset处读取64位小端序双精度值。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 8。
     * @returns { double } 读取出的内容。
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
     * 从指定的offset处读取32位大端序浮点数。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 4。
     * @returns { double } 读取出的内容。
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
     * 从指定的offset处读取32位小端序浮点数。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 4。
     * @returns { double } 读取出的内容。
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
     * 从指定的offset处读取有符号的8位整数。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 1。
     * @returns { long } 读取出的内容。
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
     * 从指定的offset处读取有符号的大端序16位整数。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 2。
     * @returns { long } 读取出的内容。
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
     * 从指定的offset处读取有符号的小端序16位整数。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 2。
     * @returns { long } 读取出的内容。
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
     * 从指定的offset处读取有符号的大端序32位整数。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 4。
     * @returns { long } 读取出的内容。
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
     * 从指定的offset处读取有符号的小端序32位整数。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 4。
     * @returns { long } 读取出的内容。
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
     * 从指定的offset处读取byteLength个字节，并将结果解释为支持最高48位精度的大端序、二进制补码有符号值。
     *
     * @param { int } offset - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - byteLength。
     * @param { int } byteLength - 读取的字节数。取值范围：1 <= byteLength <= 6。
     * @returns { long } 读取的内容。当offset为小数时，返回undefined。
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
     * 从指定的offset处读取byteLength个字节，并将结果解释为支持最高48位精度的小端序、二进制补码有符号值。
     *
     * @param { int } offset - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - byteLength。
     * @param { int } byteLength - 读取的字节数。取值范围：1 <= byteLength <= 6。
     * @returns { long } 读取出的内容。当offset为小数时，返回undefined。
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
     * 从offset处读取8位无符号整型数。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 1。
     * @returns { long } 读取出的内容。
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
     * 从指定的offset处读取无符号的大端序16位整数。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 2。
     * @returns { long } 读取出的内容。
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
     * 从指定的offset处的buf读取无符号的小端序16位整数。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 2。
     * @returns { long } 读取出的内容。
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
     * 从指定的offset处的buf读取无符号的大端序32位整数。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 4。
     * @returns { long } 读取出的内容。
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
     * 从指定的offset处的buf读取无符号的小端序32位整数。
     *
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 4。
     * @returns { long } 读取出的内容。
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
     * 从指定的offset处的buf读取byteLength个字节，并将结果解释为支持最高48位精度的无符号大端序整数。
     *
     * @param { int } offset - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - byteLength。
     * @param { int } byteLength - 要读取的字节数。取值范围：1 <= byteLength <= 6。
     * @returns { long } 读取出的内容。当offset为小数时，返回undefined。
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
     * 从指定的offset处的buf读取byteLength个字节，并将结果解释为支持最高48位精度的无符号小端序整数。
     *
     * @param { int } offset - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - byteLength。
     * @param { int } byteLength - 读取的字节数。取值范围：1 <= byteLength <= 6。
     * @returns { long } 读取出的内容。当offset为小数时，返回undefined。
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
     * 截取当前对象指定位置的数据并返回。
     *
     * @param { int } [start] - 截取开始位置。默认值：0。
     * @param { int } [end] - 截取结束位置（不包含结束位置）。默认值：当前对象的字节长度。在传入null时返回空Buffer。
     * @returns { Buffer } 返回新的Buffer对象。当start < 0或end < 0时返回空Buffer。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    subarray(start?: int, end?: int): Buffer;

    /**
     * 将当前对象转换为无符号的16位整数数组，并交换字节顺序。
     *
     * @returns { Buffer } 交换之后的Buffer对象。
     * @throws { BusinessError } 10200009 - The buffer size must be a multiple of 16-bits
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    swap16(): Buffer;

    /**
     * 将当前对象转换为无符号的32位整数数组，并交换字节顺序。
     *
     * @returns { Buffer } 交换之后的Buffer对象。
     * @throws { BusinessError } 10200009 - The buffer size must be a multiple of 32-bits
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    swap32(): Buffer;

    /**
     * 将当前对象转换为无符号的64位整数数组，并交换字节顺序。
     *
     * @returns { Buffer } 交换之后的Buffer对象。
     * @throws { BusinessError } 10200009 - The buffer size must be a multiple of 64-bits
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    swap64(): Buffer;

    /**
     * 将Buffer转为JSON并返回。
     *
     * @returns { Object } JSON对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    toJSON(): Object;

    /**
     * 将此Buffer实例转换为JsonElement。
     *
     * @returns { jsonx.JsonElement } 新的JsonElement对象，包含此Buffer的内容。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    toJSON(): jsonx.JsonElement;

    /**
     * 将当前对象中指定位置的数据转成指定编码格式的字符串并返回。
     *
     * @param { string } [encoding] - 字符编码格式（value为string才有意义）。默认值：'utf8'。
     * @param { number } [start] - 开始位置。默认值：0。
     * @param { number } [end] - 结束位置。默认值：Buffer.length。
     * @returns { string } 字符串。当start >= Buffer.length或start > end时返回空字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    toString(encoding?: string, start?: number, end?: number): string;

    /**
     * 按照encoding指定的字符编码将buf解码为字符串。
     *
     * @returns { string } 解码后的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 static
     */
    toString(): string;

    /**
     * 按照encoding指定的字符编码将buf解码为字符串。
     *
     * @param { BufferEncoding } [encoding] - encoding [encoding='utf8'] 使用的字符编码。
     * @param { int } [start] - start [start = 0] 开始解码的字节偏移量。
     *     该值应为整数。
     * @param { int } [end] - end [end = buf.length] 结束解码的字节偏移量（不包含结束位置）。
     *     该值应为整数。
     * @returns { string } 解码后的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    toString(encoding?: BufferEncoding, start?: int, end?: int): string;

    /**
     * 在Buffer对象的offset偏移处写入指定编码的字符串，写入的字节长度为length。
     *
     * @param { string } str - 要写入Buffer的字符串。
     * @param { int } [offset] - 偏移量。默认值：0。
     * @param { int } [length] - 最大字节长度。默认值：（Buffer.length - offset）。
     * @param { string } [encoding] - 字符编码。默认值：'utf8'。
     * @returns { int } 写入的字节数。
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
     * 在Buffer对象的offset偏移处写入有符号的大端序64位BigInt型数据。
     *
     * @param { bigint } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 8。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入有符号的小端序64位BigInt型数据。
     *
     * @param { bigint } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 8。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入无符号的大端序64位BigUInt型数据。
     *
     * @param { bigint } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 8。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入无符号的小端序64位BigUInt型数据。
     *
     * @param { bigint } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 8。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入大端序的64位双浮点型数据。
     *
     * @param { double } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 8。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入小端序的64位双浮点型数据。
     *
     * @param { double } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 8。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入大端序的32位浮点型数据。
     *
     * @param { double } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 4。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入小端序的32位浮点型数据。
     *
     * @param { double } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 4。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入8位有符号整型数据。
     *
     * @param { long } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 1。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入大端序的16位有符号整型数据。
     *
     * @param { long } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 2。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入小端序的16位有符号整型数据。
     *
     * @param { long } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 2。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入大端序的32位有符号整型数据。
     *
     * @param { long } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 4。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入小端序的32位有符号整型数据。
     *
     * @param { long } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 4。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入大端序的有符号数据，字节长度为byteLength。
     *
     * @param { long } value - 写入Buffer的数据。
     * @param { int } offset - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - byteLength。
     * @param { int } byteLength - 要写入的字节数。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入小端序的有符号数据，字节长度为byteLength。
     *
     * @param { long } value - 写入Buffer的数据。
     * @param { int } offset - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - byteLength。
     * @param { int } byteLength - 要写入的字节数。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入8位无符号整型数据。
     *
     * @param { long } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 1。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入大端序的16位无符号整型数据。
     *
     * @param { long } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 2。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入小端序的16位无符号整型数据。
     *
     * @param { long } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 2。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入大端序的32位无符号整型数据。
     *
     * @param { long } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 4。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入小端序的32位无符号整型数据。
     *
     * @param { long } value - 写入Buffer的数据。
     * @param { int } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - 4。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入大端序的无符号数据，字节长度为byteLength。
     *
     * @param { long } value - 写入Buffer的数据。
     * @param { int } offset - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - byteLength。
     * @param { int } byteLength - 要写入的字节数。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 在Buffer对象的offset偏移处写入小端序的无符号数据，字节长度为byteLength。
     *
     * @param { long } value - 写入Buffer的数据。
     * @param { int } offset - 偏移量。默认值：0。取值范围：0 <= offset <= Buffer.length - byteLength。
     * @param { int } byteLength - 要写入的字节数。
     * @returns { int } 偏移量offset加上写入的字节数。
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
     * 返回指定索引处的元素。
     *
     * @param { int } index - 期望元素的从零开始的索引。
     *     当index < 0或index >= buffer.length时报错。
     *     该值应为整数。
     * @returns { long } Buffer中匹配给定索引的元素。
     * @throws { BusinessError } 10200001 - The value of index is out of range.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    [index: int]: long;
  }

  /**
   * 定义Blob相关的options参数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  interface BlobOptions {
    /**
     * Blob内容类型。默认值：''。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    type?: string;

    /**
     * 以'\n'结尾的字符串如何输出，值为transparent或native。默认值：transparent。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    endings?: string;
  }

  /**
   * 将数据处理为blob类型。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  class Blob {
    /**
     * Blob的构造函数。
     *
     * @param { string[] | ArrayBuffer[] | TypedArray[] | DataView[] | Blob[] } sources - Blob实例的数据源。
     * @param { Object } [options] - options：<br/>- **endings**：含义为结束符'\n'的字符串如何被输出，值为'native'或'transparent'。
     *     'native'代表行结束符会跟随系统。'transparent'代表会保持Blob中保存的结束符不变。默认值：'transparent'。<br/>
     *     - **type**：Blob内容类型。其目的是让类型传达数据的MIME媒体类型，但是不执行类型格式的验证。默认值：''。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    constructor(sources: string[] | ArrayBuffer[] | TypedArray[] | DataView[] | Blob[], options?: Object);

    /**
     * 创建一个新的Blob对象，包含给定sources的拼接结果。
     *
     * @param { ArrayUnionType } sources - 存储在Blob中的数据源。
     * @param { BlobOptions } [options] - Blob选项 {endings: string, type: string}。
     *     endings：值为'transparent'或'native'。
     *     type：Blob内容类型。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    constructor(sources: ArrayUnionType, options?: BlobOptions);

    /**
     * Blob实例的总字节大小。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    get size(): int;

    /**
     * Blob实例的内容类型。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    get type(): string;

    /**
     * 将Blob数据放入ArrayBuffer中返回，使用Promise进行异步回调。
     *
     * @returns { Promise<ArrayBuffer> } Promise对象，返回包含Blob数据的ArrayBuffer。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    arrayBuffer(): Promise<ArrayBuffer>;

    /**
     * 创建并返回一个包含原Blob对象中指定长度数据的新Blob对象。
     *
     * @param { int } [start] - 起始位置。默认值：0。
     * @param { int } [end] - 结束位置。默认值：原Blob对象中的数据长度。
     * @param { string } [type] - 内容类型。默认值：''。
     * @returns { Blob } 新的Blob实例对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    slice(start?: int, end?: int, type?: string): Blob;

    /**
     * 使用utf8解码并返回字符串。使用Promise进行异步回调。
     *
     * @returns { Promise<string> } Promise对象，返回以utf8解码后的字符串。
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
