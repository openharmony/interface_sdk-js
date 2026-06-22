/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * FastBuffer对象是更高效的Buffer容器，用于表示固定长度的字节序列，是专门存放二进制数据的缓存区。
 *
 * @namespace fastbuffer
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 20 dynamiconly
 */
declare namespace fastbuffer {
    /**
     * 表示支持的编码格式类型。
     *
     * @typedef { 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex' }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    type BufferEncoding = 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex';
    /**
     * TypedArray 继承 Int8Array 的特性与方法。
     *
     * @extends Int8Array
     * @typedef TypedArray
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    interface TypedArray extends Int8Array {
    }
    /**
     * 创建指定字节长度的FastBuffer对象并初始化。
     *
     * @param { number } size - 指定的FastBuffer对象长度，单位：字节。取值范围：0 <= size <= UINT32_MAX。
     * @param { string | FastBuffer | number } [fill] - 填充至新缓存区的值，默认值：0。
     * @param { BufferEncoding } [encoding] - 编码格式（当`fill`为string时，才有意义）。默认值：'utf8'。传入无法识别的encoding会抛出TypeError。
     * @returns { FastBuffer } 返回一个FastBuffer对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    function alloc(size: number, fill?: string | FastBuffer | number, encoding?: BufferEncoding): FastBuffer;
    /**
     * 从缓冲池中创建指定大小未初始化的FastBuffer对象，需要使用fill函数来初始化FastBuffer对象。
     *
     * @param { number } size - 指定的FastBuffer对象长度，单位：字节。取值范围：0 <= size <= UINT32_MAX。
     * @returns { FastBuffer } 未初始化的Buffer实例。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    function allocUninitializedFromPool(size: number): FastBuffer;
    /**
     * 创建指定大小未初始化的FastBuffer对象，需要使用fill函数来初始化FastBuffer对象。
     *
     * @param { number } size - 指定的FastBuffer对象长度，单位：字节。取值范围：0 <= size <= UINT32_MAX。
     * @returns { FastBuffer } 未初始化的FastBuffer实例。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    function allocUninitialized(size: number): FastBuffer;
    /**
     * 根据不同的编码格式，返回指定字符串的字节数。
     *
     * @param { string | FastBuffer | TypedArray | DataView | ArrayBuffer | SharedArrayBuffer } value - 指定字符串。
     * @param { BufferEncoding } [encoding] - 编码格式。默认值：'utf8'。传入无法识别的encoding会抛出TypeError。
     * @returns { number } 返回指定字符串的字节数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    function byteLength(value: string | FastBuffer | TypedArray | DataView | ArrayBuffer | SharedArrayBuffer, encoding?: BufferEncoding): number;
    /**
     * 将数组中指定字节长度的内容复制到新的FastBuffer对象中并返回拼接后的FastBuffer对象。
     *
     * @param { FastBuffer[] | Uint8Array[] } list - 实例数组。
     * @param { number } [totalLength] - 需要复制的总字节长度，默认值为0。
     * @returns { FastBuffer } 返回新的FastBuffer对象。
     * @throws { BusinessError } 10200001 - Range error. Possible causes:
     * The value of the parameter is not within the specified range.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    function concat(list: FastBuffer[] | Uint8Array[], totalLength?: number): FastBuffer;
    /**
     * 根据指定数组创建新的FastBuffer对象。
     *
     * @param { number[] } array - 指定数组，数组内各元素的取值范围为[0, 255]。
     * @returns { FastBuffer } 新的FastBuffer对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    function from(array: number[]): FastBuffer;
    /**
     * 创建与`arrayBuffer`共享内存的指定长度的FastBuffer对象。
     *
     * @param { ArrayBuffer | SharedArrayBuffer } arrayBuffer - 实例对象。
     * @param { number } [byteOffset] - 字节偏移量，默认值：0。
     * @param { number } [length] - 字节长度，默认值：（arrayBuffer.byteLength - byteOffset）。取值范围：0 <= length <= arrayBuffer.byteLength - byteOffset。传入null时返回空FastBuffer。
     * @returns { FastBuffer } 返回一个FastBuffer对象，该对象与入参对象`arrayBuffer`共享相同的内存区域。
     * @throws { BusinessError } 10200001 - Range error. Possible causes:
     * The value of the parameter is not within the specified range.
     * @throws { BusinessError } 10200068 - The underlying ArrayBuffer is null or detach.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    function from(arrayBuffer: ArrayBuffer | SharedArrayBuffer, byteOffset?: number, length?: number): FastBuffer;
    /**
     * 当入参为FastBuffer对象时，创建新的FastBuffer对象并复制入参FastBuffer对象的数据，然后返回新对象。
     *
     * 当入参为Uint8Array对象时，基于Uint8Array对象的内存创建新的FastBuffer对象并返回，保持数据的内存关联。
     *
     * @param { FastBuffer | Uint8Array } buffer - 对象数据。
     * @returns { FastBuffer } 返回新的FastBuffer对象。
     * @throws { BusinessError } 10200068 - The underlying ArrayBuffer is null or detach.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    function from(buffer: FastBuffer | Uint8Array): FastBuffer;
    /**
     * 根据指定编码格式的字符串，创建新的FastBuffer对象。
     *
     * @param { string } value - 字符串。
     * @param { BufferEncoding } [encoding] - 编码格式。默认值：'utf8'。传入无法识别的encoding会抛出TypeError。
     * @returns { FastBuffer } 返回新的FastBuffer对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    function from(value: string, encoding?: BufferEncoding): FastBuffer;
    /**
     * 判断`obj`是否为FastBuffer。
     *
     * @param { Object } obj - 判断对象。
     * @returns { boolean } 如果obj是FastBuffer，则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    function isBuffer(obj: Object): boolean;
    /**
     * 判断`encoding`是否为支持的编码格式。
     *
     * @param { string } encoding - 编码格式。
     *
     * @returns { boolean } 是支持的编码格式返回true，反之则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    function isEncoding(encoding: string): boolean;
    /**
     * 返回两个FastBuffer对象的比较结果，通常用于对FastBuffer对象数组进行排序。
     *
     * @param { FastBuffer | Uint8Array } buf1 - 待比较的第一个对象。
     * @param { FastBuffer | Uint8Array } buf2 - 待比较的第二个对象。
     * @returns { -1 | 0 | 1 } 如果buf1与buf2相同，则返回0。<br/>如果排序时buf1位于buf2之后，则返回1。<br/>如果排序时buf1位于buf2之前，则返回-1。
     * @throws { BusinessError } 10200068 - The underlying ArrayBuffer is null or detach.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    function compare(buf1: FastBuffer | Uint8Array, buf2: FastBuffer | Uint8Array): -1 | 0 | 1;
    /**
     * 将FastBuffer或Uint8Array对象从fromEnc编码转换为toEnc编码。
     *
     * @param { FastBuffer | Uint8Array } source - 实例对象。
     * @param { string } fromEnc - 当前编码格式。支持的格式范围为BufferEncoding。传入空字符串时，表示使用编码格式'utf8'。
     * @param { string } toEnc - 目标编码。支持的格式范围为BufferEncoding。
     * @returns { FastBuffer } 将当前编码转换成目标编码，并返回一个新的FastBuffer对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    function transcode(source: FastBuffer | Uint8Array, fromEnc: string, toEnc: string): FastBuffer;
    /**
     * FastBuffer对象是更高效的Buffer容器，用于表示固定长度的字节序列，是专门存放二进制数据的缓存区。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamiconly
     */
    class FastBuffer {
        /**
         * FastBuffer对象的字节长度。
         *
         * @type { number }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        length: number;
        /**
         * ArrayBuffer对象。
         *
         * @type { ArrayBuffer }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        buffer: ArrayBuffer;
        /**
         * 当前Buffer所在内存池的偏移量。
         *
         * @type { number }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        byteOffset: number;
        /**
         * 使用`value`填充当前对象指定位置的数据，默认为循环填充，并返回填充后的FastBuffer对象。
         *
         * @param { string | FastBuffer | Uint8Array | number } value - 用于填充的值。
         * @param { number } [offset] - 起始偏移量。默认值：0。取值范围：0 <= offset <= this.length。
         * @param { number } [end] - 结束偏移量（不包含结束位置）。默认值：当前对象的字节长度。取值范围：0 <= end <= this.length。
         * @param { BufferEncoding } [encoding] - 字符编码格式（`value`为string才有意义）。默认值：'utf8'。传入无法识别的encoding会抛出TypeError。
         * @returns { FastBuffer } 返回填充后的FastBuffer对象。
         * @throws { BusinessError } 10200001 - Range error. Possible causes:
         * The value of the parameter is not within the specified range.
         * @throws { BusinessError } 10200068 - The underlying ArrayBuffer is null or detach.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        fill(value: string | FastBuffer | Uint8Array | number, offset?: number, end?: number, encoding?: BufferEncoding): FastBuffer;
        /**
         * 比较当前对象this与目标对象target，并返回比较结果。
         *
         * @param { FastBuffer | Uint8Array } target - 要比较的实例对象。
         * @param { number } [targetStart] - `target`实例中开始的偏移量。默认值：0。取值范围：0 <= targetStart <= target.length。
         * @param { number } [targetEnd] - `target`实例中结束的偏移量（不包含结束位置）。默认值：目标对象的字节长度。取值范围：0 <= targetEnd <= target.length。
         * @param { number } [sourceStart] - `this`实例中开始的偏移量。默认值：0。取值范围：0 <= sourceStart <= this.length。
         * @param { number } [sourceEnd] - `this`实例中结束的偏移量（不包含结束位置）。默认值：当前对象的字节长度。取值范围：0 <= sourceEnd <= this.length。
         * @returns { -1 | 0 | 1 } 返回比较结果。<br/>-1：当前排列在目标前；<br/>0：当前与目标相同；<br/>1：当前排列在目标后。
         * @throws { BusinessError } 10200001 - Range error. Possible causes:
         * The value of the parameter is not within the specified range.
         * @throws { BusinessError } 10200068 - The underlying ArrayBuffer is null or detach.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        compare(target: FastBuffer | Uint8Array, targetStart?: number, targetEnd?: number, sourceStart?: number, sourceEnd?: number): -1 | 0 | 1;
        /**
         * 将`this`实例中指定位置的数据复制到`target`的指定位置上，并返回复制的字节总长度。
         *
         * 如果sourceEnd大于target的长度，则以target的长度为准，超出部分不会被覆盖。
         *
         * @param { FastBuffer | Uint8Array } target - 要复制到的Buffer或Uint8Array实例。
         * @param { number } [targetStart] - `target`实例中开始写入的偏移量。默认值：0。取值范围：0 <= targetStart <= UINT32_MAX。
         * @param { number } [sourceStart] - `this`实例中开始复制的偏移量。默认值：0。取值范围：0 <= sourceStart <= UINT32_MAX。
         * @param { number } [sourceEnd] - `this`实例中结束复制的偏移量（不包含结束位置）。默认值：当前对象的字节长度。取值范围：0 <= sourceEnd <= this.length。
         * @returns { number } 复制的字节总长度。
         * @throws { BusinessError } 10200001 - Range error. Possible causes:
         * The value of the parameter is not within the specified range.
         * @throws { BusinessError } 10200068 - The underlying ArrayBuffer is null or detach.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        copy(target: FastBuffer | Uint8Array, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
        /**
         * 逐字节比较`this`和otherBuffer是否相等。
         *
         * @param { Uint8Array | FastBuffer } otherBuffer - 比较的目标对象。
         * @returns { boolean } 若`this`和otherBuffer逐字节相等则返回true，否则返回false。
         * @throws { BusinessError } 10200068 - The underlying ArrayBuffer is null or detach.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        equals(otherBuffer: Uint8Array | FastBuffer): boolean;
        /**
         * 检查FastBuffer对象是否包含`value`值。
         *
         * @param { string | number | FastBuffer | Uint8Array } value - 要搜索的内容。
         * @param { number } [byteOffset] - 字节偏移量。若为正数，则从0开始计算偏移量；若为负数，则从末尾开始计算偏移量。默认值：0。
         * @param { BufferEncoding } [encoding] - 字符编码格式。默认值：'utf8'。传入无法识别的encoding会抛出TypeError。
         * @returns { boolean } 若FastBuffer对象包含`value`值时返回true，否则为false。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        includes(value: string | number | FastBuffer | Uint8Array, byteOffset?: number, encoding?: BufferEncoding): boolean;
        /**
         * 返回当前对象中首次出现`value`的索引，如果不包含`value`，则返回-1。
         *
         * @param { string | number | FastBuffer | Uint8Array } value - 要查找的内容。
         * @param { number } [byteOffset] - 字节偏移量。若byteOffset为正数，则从0开始计算偏移量；如果为负数，则从末尾开始计算偏移量。默认值：0。
         * @param { BufferEncoding } [encoding] - 字符编码格式。默认值：'utf8'。传入无法识别的encoding会抛出TypeError。
         * @returns { number } 返回第一次出现的位置。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        indexOf(value: string | number | FastBuffer | Uint8Array, byteOffset?: number, encoding?: BufferEncoding): number;
        /**
         * 返回一个包含key值的迭代器。
         *
         * @returns { IterableIterator<number> }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        keys(): IterableIterator<number>;
        /**
         * 返回一个包含value的迭代器。
         *
         * @returns { IterableIterator<number> }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        values(): IterableIterator<number>;
        /**
         * 返回一个包含key值和value值的迭代器。
         *
         * @returns { IterableIterator<[number, number]> }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        entries(): IterableIterator<[
            number,
            number
        ]>;
        /**
         * 返回当前对象中最后一次出现`value`的索引，如果对象不包含`value`，则返回-1。
         *
         * @param { string | number | FastBuffer | Uint8Array } value - 要搜索的内容。
         * @param { number } [byteOffset] - 字节偏移量。若byteOffset为正数，则从0开始计算偏移量；如果为负数，则从末尾开始计算偏移量。默认值：this.length - 1。
         * @param { BufferEncoding } [encoding] - 字符编码格式。默认值：'utf8'。
         * @returns { number } 最后一次出现`value`值的索引。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        lastIndexOf(value: string | number | FastBuffer | Uint8Array, byteOffset?: number, encoding?: BufferEncoding): number;
        /**
         * 从指定的`offset`处读取有符号的大端序64位整数。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 8。
         * @returns { bigint } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readBigInt64BE(offset?: number): bigint;
        /**
         * 从指定的`offset`处读取有符号的小端序64位整数。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 8。
         * @returns { bigint } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readBigInt64LE(offset?: number): bigint;
        /**
         * 从指定的`offset`处读取无符号的大端序64位整数。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 8。
         * @returns { bigint } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readBigUInt64BE(offset?: number): bigint;
        /**
         * 从指定的`offset`处读取无符号的小端序64位整数。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 8。
         * @returns { bigint } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readBigUInt64LE(offset?: number): bigint;
        /**
         * 从指定的`offset`处读取64位大端序双精度值。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 8。
         * @returns { number } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readDoubleBE(offset?: number): number;
        /**
         * 从指定的`offset`处读取64位小端序双精度值。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 8。
         * @returns { number } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readDoubleLE(offset?: number): number;
        /**
         * 从指定的`offset`处读取32位大端序浮点数。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 4。
         * @returns { number } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readFloatBE(offset?: number): number;
        /**
         * 从指定的`offset`处读取32位小端序浮点数。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 4。
         * @returns { number } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readFloatLE(offset?: number): number;
        /**
         * 从指定的`offset`处读取有符号的8位整数。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 1。
         * @returns { number } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 1. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readInt8(offset?: number): number;
        /**
         * 从指定的`offset`处读取有符号的大端序16位整数。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 2。
         * @returns { number } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readInt16BE(offset?: number): number;
        /**
         * 从指定的`offset`处读取有符号的小端序16位整数。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 2。
         * @returns { number } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readInt16LE(offset?: number): number;
        /**
         * 从指定的`offset`处读取有符号的大端序32位整数。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 4。
         * @returns { number } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readInt32BE(offset?: number): number;
        /**
         * 从指定的`offset`处读取有符号的小端序32位整数。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 4。
         * @returns { number } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readInt32LE(offset?: number): number;
        /**
         * 从指定的`offset`处读取byteLength个字节，并将结果解释为支持最高48位精度的大端序、二进制补码有符号值。
         *
         * @param { number } offset - 偏移量。取值范围：0 <= offset <= this.length - byteLength，默认值：0。
         * @param { number } byteLength - 读取的字节数。取值范围：1 <= byteLength <= 6。
         * @returns { number } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readIntBE(offset: number, byteLength: number): number;
        /**
         * 从指定的`offset`处读取`byteLength`个字节，并将结果解释为支持最高48位精度的小端序、二进制补码有符号值。
         *
         * @param { number } offset - 偏移量。取值范围：0 <= offset <= this.length - byteLength，默认值：0。
         * @param { number } byteLength - 读取的字节数。取值范围：1 <= byteLength <= 6。
         * @returns { number } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readIntLE(offset: number, byteLength: number): number;
        /**
         * 从`offset`处读取8位无符号整型数。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 1。
         * @returns { number } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 1. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readUInt8(offset?: number): number;
        /**
         * 从指定的`offset`处读取无符号的大端序16位整数。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 2。
         * @returns { number } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readUInt16BE(offset?: number): number;
        /**
         * 从指定的`offset`处的buf读取无符号的小端序16位整数。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 2。
         * @returns { number } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 2. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readUInt16LE(offset?: number): number;
        /**
         * 从指定的`offset`处的buf读取无符号的大端序32位整数。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 4。
         * @returns { number } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readUInt32BE(offset?: number): number;
        /**
         * 从指定的`offset`处的buf读取无符号的小端序32位整数。
         *
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 4。
         * @returns { number } 读取出的内容。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readUInt32LE(offset?: number): number;
        /**
         * 从指定的`offset`处的buf读取`byteLength`个字节，并将结果解释为支持最高48位精度的无符号大端序整数。
         *
         * @param { number } offset - 偏移量。取值范围：0 <= offset <= this.length - byteLength，默认值：0。
         * @param { number } byteLength - 要读取的字节数。取值范围：1 <= byteLength <= 6。
         * @returns { number } 读取出的内容。当offset为小数时，返回undefined。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readUIntBE(offset: number, byteLength: number): number;
        /**
         * 从指定的`offset`处的buf读取`byteLength`个字节，并将结果解释为支持最高48位精度的无符号小端序整数。
         *
         * @param { number } offset - 偏移量。取值范围：0 <= offset <= this.length - byteLength，默认值：0。
         * @param { number } byteLength - 读取的字节数。取值范围：1 <= byteLength <= 6。
         * @returns { number } 读取出的内容。当offset为小数时，返回undefined。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        readUIntLE(offset: number, byteLength: number): number;
        /**
         * 截取当前对象指定位置的数据并返回。
         *
         * @param { number } [start] - 截取开始位置。默认值：0。
         * @param { number } [end] - 截取结束位置（不包含结束位置）。默认值：当前对象的字节长度。取值范围：start <= end <= this.length。传入null时返回空FastBuffer。
         * @returns { FastBuffer } 返回新的FastBuffer对象。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        subarray(start?: number, end?: number): FastBuffer;
        /**
         * 将当前对象转换为无符号的16位整数数组，并交换字节顺序。
         *
         * @returns { FastBuffer } 交换之后的FastBuffer对象。
         * @throws { BusinessError } 10200009 - The fastbuffer size must be a multiple of 16-bits
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        swap16(): FastBuffer;
        /**
         * 将当前对象转换为无符号的32位整数数组，并交换字节顺序。
         *
         * @returns { FastBuffer } 交换之后的FastBuffer对象。
         * @throws { BusinessError } 10200009 - The fastbuffer size must be a multiple of 32-bits
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        swap32(): FastBuffer;
        /**
         * 将当前对象转换为无符号的64位整数数组，并交换字节顺序。
         *
         * @returns { FastBuffer } 交换之后的FastBuffer对象。
         * @throws { BusinessError } 10200009 - The fastbuffer size must be a multiple of 64-bits
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        swap64(): FastBuffer;
        /**
         * 将Buffer转为JSON并返回。
         *
         * @returns { Object } JSON对象。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        toJSON(): Object;
        /**
         * 将当前对象中指定位置的数据转成指定编码格式的字符串并返回。
         *
         * @param { string } [encoding] - 字符编码格式。默认值：'utf8'。
         * @param { number } [start] - 开始位置。默认值：0。
         * @param { number } [end] - 结束位置。默认值：Buffer.length。
         * @returns { string } 字符串。当start >= this.length或start > end时返回空字符串。
         * @throws { BusinessError } 10200068 - The underlying ArrayBuffer is null or detach.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        toString(encoding?: string, start?: number, end?: number): string;
        /**
         * 在FastBuffer对象的offset偏移处写入指定编码的字符串，写入的字节长度为length。
         *
         * @param { string } str - 要写入Buffer的字符串。
         * @param { number } [offset] - 偏移量。默认值：0。
         * @param { number } [length] - 最大字节长度。默认值：（this.length - offset）。
         * @param { string } [encoding] - 字符编码。默认值：'utf8'。
         * @returns { number } 写入的字节数。
         * @throws { BusinessError } 10200001 - Range error. Possible causes:
         * The value of the parameter is not within the specified range.
         * @throws { BusinessError } 10200068 - The underlying ArrayBuffer is null or detach.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        write(str: string, offset?: number, length?: number, encoding?: string): number;
        /**
         * 在FastBuffer对象的offset偏移处写入有符号的大端序64位BigInt型数据。
         *
         * @param { bigint } value - 写入Buffer的数据。取值范围：-INT64_MAX <= value <= INT64_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 8。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeBigInt64BE(value: bigint, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入有符号的小端序64位BigInt型数据。
         *
         * @param { bigint } value - 写入Buffer的数据。取值范围：-INT64_MAX <= value <= INT64_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 8。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeBigInt64LE(value: bigint, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入无符号的大端序64位BigUInt型数据。
         *
         * @param { bigint } value - 写入Buffer的数据。取值范围：0 <= value <= UINT64_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 8。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeBigUInt64BE(value: bigint, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入无符号的小端序64位BigUInt型数据。
         *
         * @param { bigint } value - 写入Buffer的数据。取值范围：0 <= value <= UINT64_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 8。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeBigUInt64LE(value: bigint, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入大端序的64位双浮点型数据。
         *
         * @param { number } value - 写入Buffer的数据。取值范围：-DOUBLE_MAX <= value <= DOUBLE_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 8。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeDoubleBE(value: number, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入小端序的64位双浮点型数据。
         *
         * @param { number } value - 写入Buffer的数据。取值范围：-DOUBLE_MAX <= value <= DOUBLE_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 8。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 8. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeDoubleLE(value: number, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入大端序的32位浮点型数据。
         *
         * @param { number } value - 写入Buffer的数据。取值范围：-FLOAT_MAX <= value <= FLOAT_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 4。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeFloatBE(value: number, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入小端序的32位浮点型数据。
         *
         * @param { number } value - 写入Buffer的数据。取值范围：-FLOAT_MAX <= value <= FLOAT_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 4。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "offset" is out of range. It must be >= 0 and <= buf.length - 4. Received value is: [offset]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeFloatLE(value: number, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入8位有符号整型数据。
         *
         * @param { number } value - 写入Buffer的数据。取值范围：-INT8_MAX <= value <= INT8_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 1。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeInt8(value: number, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入大端序的16位有符号整型数据。
         *
         * @param { number } value - 写入Buffer的数据。取值范围：-INT16_MAX <= value <= INT16_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 2。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeInt16BE(value: number, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入小端序的16位有符号整型数据。
         *
         * @param { number } value - 写入Buffer的数据。取值范围：-INT16_MAX <= value <= INT16_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 2。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeInt16LE(value: number, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入大端序的32位有符号整型数据。
         *
         * @param { number } value - 写入Buffer的数据。取值范围：-INT32_MAX <= value <= INT32_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 4。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeInt32BE(value: number, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入小端序的32位有符号整型数据。
         *
         * @param { number } value - 写入Buffer的数据。取值范围：-INT32_MAX <= value <= INT32_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 4。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeInt32LE(value: number, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入大端序的有符号数据，字节长度为byteLength。
         *
         * @param { number } value - 写入Buffer的数据。取值范围取决于byteLength。
         * @param { number } offset - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - byteLength。传入null或undefined时偏移量为0。
         * @param { number } byteLength - 要写入的字节数。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeIntBE(value: number, offset: number, byteLength: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入小端序的有符号数据，字节长度为byteLength。
         *
         * @param { number } value - 写入Buffer的数据。取值范围取决于byteLength。
         * @param { number } offset - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - byteLength。传入null或undefined时偏移量为0。
         * @param { number } byteLength - 要写入的字节数。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeIntLE(value: number, offset: number, byteLength: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入8位无符号整型数据。
         *
         * @param { number } value - 写入Buffer的数据。取值范围：0 <= value <= UINT8_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 1。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeUInt8(value: number, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入大端序的16位无符号整型数据。
         *
         * @param { number } value - 写入Buffer的数据。取值范围：0 <= value <= UINT16_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 2。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeUInt16BE(value: number, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入小端序的16位无符号整型数据。
         *
         * @param { number } value - 写入Buffer的数据。取值范围：0 <= value <= UINT16_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 2。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeUInt16LE(value: number, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入大端序的32位无符号整型数据。
         *
         * @param { number } value - 写入Buffer的数据。取值范围：0 <= value <= UINT32_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 4。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeUInt32BE(value: number, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入小端序的32位无符号整型数据。
         *
         * @param { number } value - 写入FastBuffer对象的数据。取值范围：0 <= value <= UINT32_MAX。
         * @param { number } [offset] - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - 4。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeUInt32LE(value: number, offset?: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入大端序的无符号数据，字节长度为byteLength。
         *
         * @param { number } value - 写入Buffer的数据。取值范围取决于byteLength。
         * @param { number } offset - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - byteLength。传入null或undefined时偏移量为0。
         * @param { number } byteLength - 要写入的字节数。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeUIntBE(value: number, offset: number, byteLength: number): number;
        /**
         * 在FastBuffer对象的offset偏移处写入小端序的无符号数据，字节长度为byteLength。
         *
         * @param { number } value - 写入Buffer的数据。取值范围取决于byteLength。
         * @param { number } offset - 偏移量。默认值：0。取值范围：0 <= offset <= this.length - byteLength。传入null或undefined时偏移量为0。
         * @param { number } byteLength - 要写入的字节数。
         * @returns { number } 偏移量offset加上写入的字节数。
         * @throws { BusinessError } 10200001 - The value of "[param]" is out of range. It must be >= [left range] and <= [right range]. Received value is: [param]
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20 dynamiconly
         */
        writeUIntLE(value: number, offset: number, byteLength: number): number;
    }
}
export default fastbuffer;
