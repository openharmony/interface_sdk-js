'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit ArkTS
 */

/**
 * class DataView
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class DataView {
    /**
     * Read-only property for the byte length of the DataView.
     *
     * @returns { int } The byte length of the DataView.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteLength(): int;

    /**
     * Read-only property for the byte offset of the DataView.
     *
     * @returns { int } The byte offset of the DataView.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteOffset(): int;

    /**
     * Creates a new DataView object.
     *
     * @param { ArrayBuffer } buffer - The underlying ArrayBuffer for this DataView.
     * @param { int } [byteOffset] - The byte offset within the ArrayBuffer.
     *     <br>The value should be an integer.
     * @param { int } [byteLength] - The byte length of the DataView.
     *     <br>The value should be an integer.
     * @throws { RangeError } If - the byte offset or length is out of range.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buffer: ArrayBuffer, byteOffset?: int, byteLength?: int);

    /**
     * Read bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to read
     *     <br>The value should be an integer.
     * @returns { int } return byteOffset's Int8 value
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getInt8(byteOffset: int): int;

    /**
     * Sets bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to write
     *     <br>The value should be an integer.
     * @param { int } value - <br>The value should be an integer.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setInt8(byteOffset: int, value: int): void;

    /**
     * Read bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to read
     *     <br>The value should be an integer.
     * @returns { int } return byteOffset's Uint8 value
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUint8(byteOffset: int): int;

    /**
     * Sets bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to write
     *     <br>The value should be an integer.
     * @param { int } value - <br>The value should be an integer.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUint8(byteOffset: int, value: int): void;

    /**
     * Read bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to read
     *     <br>The value should be an integer.
     * @returns { int } return byteOffset's Int16 value
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getInt16(byteOffset: int): int;

    /**
     * Sets bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to write
     *     <br>The value should be an integer.
     * @param { int } value - <br>The value should be an integer.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setInt16(byteOffset: int, value: int): void;

    /**
     * Sets bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to write
     *     <br>The value should be an integer.
     * @param { int } value - <br>The value should be an integer.
     * @param { boolean } littleEndian - read as little or big endian
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setInt16(byteOffset: int, value: int, littleEndian: boolean): void;

    /**
     * Read bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to read
     *     <br>The value should be an integer.
     * @param { boolean } [littleEndian] - read as little or big endian
     * @returns { int } byteOffset's Int16 value.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getInt16(byteOffset: int, littleEndian?: boolean): int;

    /**
     * Read bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to read
     *     <br>The value should be an integer.
     * @returns { int } return byteOffset's Uint16 value
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUint16(byteOffset: int): int;

    /**
     * Sets bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to write
     *     <br>The value should be an integer.
     * @param { int } value - <br>The value should be an integer.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUint16(byteOffset: int, value: int): void;

    /**
     * Sets bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to write
     *     <br>The value should be an integer.
     * @param { int } value - <br>The value should be an integer.
     * @param { boolean } littleEndian - read as little or big endian
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUint16(byteOffset: int, value: int, littleEndian: boolean): void;

    /**
     * Read bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to read.
     *     <br>The value should be an integer.
     * @param { boolean } [littleEndian] - read as little or big endian
     * @returns { int } byteOffset's Uint16 value.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUint16(byteOffset: int, littleEndian?: boolean): int;

    /**
     * Read bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to read
     *     <br>The value should be an integer.
     * @returns { int } return byteOffset's Int32 value.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getInt32(byteOffset: int): int;

    /**
     * Sets bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to write
     *     <br>The value should be an integer.
     * @param { int } value - <br>The value should be an integer.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setInt32(byteOffset: int, value: int): void;

    /**
     * Sets bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to write
     *     <br>The value should be an integer.
     * @param { int } value - <br>The value should be an integer.
     * @param { boolean } littleEndian - read as little or big endian
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setInt32(byteOffset: int, value: int, littleEndian: boolean): void;

    /**
     * Read bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to read
     *     <br>The value should be an integer.
     * @param { boolean } [littleEndian] - read as little or big endian
     * @returns { int } return byteOffset's Int32 value.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getInt32(byteOffset: int, littleEndian?: boolean): int;

    /**
     * Sets bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to write.
     *     <br>The value should be an integer.
     * @param { long } value - the long value to write.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUint32(byteOffset: int, value: long): void;

    /**
     * Sets bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to write
     *     <br>The value should be an integer.
     * @param { long } value - the long value to write.
     * @param { boolean } littleEndian - read as little or big endian
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUint32(byteOffset: int, value: long, littleEndian: boolean): void;

    /**
     * Sets bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to write
     *     <br>The value should be an integer.
     * @param { float } value - the float value to write.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setFloat32(byteOffset: int, value: float): void;

    /**
     * Sets bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to write
     *     <br>The value should be an integer.
     * @param { float } value - the float value to write.
     * @param { boolean } littleEndian - read as little or big endian
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setFloat32(byteOffset: int, value: float, littleEndian: boolean): void;

    /**
     * Sets bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to write
     *     <br>The value should be an integer.
     * @param { bigint } value - the bigint value to write.
     * @param { boolean } [littleEndian] - read as little or big endian
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setBigInt64(byteOffset: int, value: bigint, littleEndian?: boolean): void;

    /**
     * Read bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to read
     *     <br>The value should be an integer.
     * @param { boolean } [littleEndian] - read as little or big endian
     * @returns { bigint } byteOffset's BigInt64 value.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getBigInt64(byteOffset: int, littleEndian?: boolean): bigint;

    /**
     * Sets bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to write
     *     <br>The value should be an integer.
     * @param { long } value - the long value to write.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setBigUint64(byteOffset: int, value: long): void;

    /**
     * Sets bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to write
     *     <br>The value should be an integer.
     * @param { long } value - the long value to write.
     * @param { boolean } littleEndian - read as little or big endian
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setBigUint64(byteOffset: int, value: long, littleEndian: boolean): void;

    /**
     * Sets bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to write
     *     <br>The value should be an integer.
     * @param { bigint } value
     * @param { boolean } [littleEndian] - read as little or big endian
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setBigUint64(byteOffset: int, value: bigint, littleEndian?: boolean): void;

    /**
     * Read bytes as they represent given type
     *
     * @param { int } byteOffset - zero index to read
     *     <br>The value should be an integer.
     * @param { boolean } [littleEndian] - read as little or big endian
     * @returns { bigint } byteOffset's BigUint64 value.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getBigUint64(byteOffset: int, littleEndian?: boolean): bigint;

    /**
     * Underlying buffer.
     *
     * @returns { ArrayBuffer }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get buffer(): ArrayBuffer;

    /**
     * Sets bytes as int8 value.
     *
     * @param { int } byteOffset - zero index to write.
     * @param { double } value - value to write.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setInt8(byteOffset: int, value: double): void;

    /**
     * Sets bytes as uint8 value.
     *
     * @param { int } byteOffset - zero index to write.
     * @param { double } value - value to write.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUint8(byteOffset: int, value: double): void;

    /**
     * Sets bytes as int16 value.
     *
     * @param { int } byteOffset - zero index to write.
     * @param { double } value - value to write.
     * @param { boolean } [littleEndian] - true for little endian, false for big endian.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setInt16(byteOffset: int, value: double, littleEndian?: boolean): void;

    /**
     * Sets bytes as uint16 value.
     *
     * @param { int } byteOffset - zero index to write.
     * @param { double } value - the double value to write.
     * @param { boolean } [littleEndian] - true for little endian, false for big endian.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUint16(byteOffset: int, value: double, littleEndian?: boolean): void;

    /**
     * Sets bytes as int32 value.
     *
     * @param { int } byteOffset - zero index to write.
     * @param { double } value - value to write.
     * @param { boolean } [littleEndian] - true for little endian, false for big endian.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setInt32(byteOffset: int, value: double, littleEndian?: boolean): void;

    /**
     * Read bytes as uint32 value.
     *
     * @param { int } byteOffset - zero index to read.
     * @returns { double } read value (big endian).
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUint32(byteOffset: int): double;

    /**
     * Read bytes as uint32 value.
     *
     * @param { int } byteOffset - zero index to read.
     * @param { boolean } [littleEndian] - true for little endian, false for big endian.
     * @returns { double } read value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUint32(byteOffset: int, littleEndian?: boolean): double;

    /**
     * Sets bytes as uint32 value.
     *
     * @param { int } byteOffset - zero index to write.
     * @param { double } value - value to write.
     * @param { boolean } [littleEndian] - true for little endian, false for big endian.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUint32(byteOffset: int, value: double, littleEndian?: boolean): void;

    /**
     * Read bytes as float32 value.
     *
     * @param { int } byteOffset - zero index to read.
     * @returns { double } read value (big endian).
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getFloat32(byteOffset: int): double;

    /**
     * Read bytes as float32 value.
     *
     * @param { int } byteOffset - zero index to read.
     * @param { boolean } [littleEndian] - true for little endian, false for big endian.
     * @returns { double } read value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getFloat32(byteOffset: int, littleEndian?: boolean): double;

    /**
     * Sets bytes as float32 value.
     *
     * @param { int } byteOffset - zero index to write.
     * @param { double } value - the double value to write.
     * @param { boolean } [littleEndian] - true for little endian, false for big endian.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setFloat32(byteOffset: int, value: double, littleEndian?: boolean): void;

    /**
     * Read bytes as bigint64 value.
     *
     * @param { int } byteOffset - zero index to read.
     *     <br>The value should be an integer.
     * @returns { bigint } read value (big endian).
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getBigInt64(byteOffset: int): bigint;

    /**
     * Sets bytes as bigint64 value.
     *
     * @param { int } byteOffset - zero index to write.
     *     <br>The value should be an integer.
     * @param { long } value - the long value to write.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setBigInt64(byteOffset: int, value: long): void;

    /**
     * Sets bytes as bigint64 value.
     *
     * @param { int } byteOffset - zero index to write.
     *     <br>The value should be an integer.
     * @param { long } value - the long value to write.
     * @param { boolean } littleEndian - true for little endian, false for big endian.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setBigInt64(byteOffset: int, value: long, littleEndian: boolean): void;

    /**
     * Read bytes as biguint64 value.
     *
     * @param { int } byteOffset - zero index to read.
     *     <br>The value should be an integer.
     * @returns { bigint } read value (big endian).
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getBigUint64(byteOffset: int): bigint;

    /**
     * Read bytes as float64 value.
     *
     * @param { int } byteOffset - zero index to read.
     * @returns { double } read value (big endian).
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getFloat64(byteOffset: int): double;

    /**
     * Read bytes as float64 value.
     *
     * @param { int } byteOffset - zero index to read.
     * @param { boolean } [littleEndian] - true for little endian, false for big endian.
     * @returns { double } read value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getFloat64(byteOffset: int, littleEndian?: boolean): double;

    /**
     * Sets bytes as float64 value.
     *
     * @param { int } byteOffset - zero index to write.
     * @param { double } value - the double value to write.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setFloat64(byteOffset: int, value: double): void;

    /**
     * Sets bytes as float64 value.
     *
     * @param { int } byteOffset - zero index to write.
     * @param { double } value - the double value to write.
     * @param { boolean } [littleEndian] - true for little endian, false for big endian.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setFloat64(byteOffset: int, value: double, littleEndian?: boolean): void;
}
