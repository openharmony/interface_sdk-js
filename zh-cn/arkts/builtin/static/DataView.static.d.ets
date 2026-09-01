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
 * DataView类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class DataView {
    /**
     * 只读属性，表示DataView的byte长度。
     *
     * @returns { int } DataView的byte长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteLength(): int;

    /**
     * 只读属性，表示DataView的byte偏移量。
     *
     * @returns { int } DataView的byte偏移量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteOffset(): int;

    /**
     * 创建新的DataView对象。
     *
     * @param { ArrayBuffer } buffer - 该DataView的底层ArrayBuffer。
     * @param { int } [byteOffset] - 在ArrayBuffer中的byte偏移量。
     *     <br>取值约束：应为整数。
     * @param { int } [byteLength] - DataView的byte长度。
     *     <br>取值约束：应为整数。
     * @throws { RangeError } 当byte偏移量或长度超出范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buffer: ArrayBuffer, byteOffset?: int, byteLength?: int);

    /**
     * 按指定类型从字节序列中读取值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     *     <br>取值约束：应为整数。
     * @returns { int } byteOffset处的Int8值。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getInt8(byteOffset: int): int;

    /**
     * 按指定类型将值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { int } value - <br>取值约束：应为整数。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setInt8(byteOffset: int, value: int): void;

    /**
     * 按指定类型从字节序列中读取值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     *     <br>取值约束：应为整数。
     * @returns { int } byteOffset处的Uint8值。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUint8(byteOffset: int): int;

    /**
     * 按指定类型将值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { int } value - <br>取值约束：应为整数。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUint8(byteOffset: int, value: int): void;

    /**
     * 按指定类型从字节序列中读取值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     *     <br>取值约束：应为整数。
     * @returns { int } byteOffset处的Int16值。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getInt16(byteOffset: int): int;

    /**
     * 按指定类型将值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { int } value - <br>取值约束：应为整数。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setInt16(byteOffset: int, value: int): void;

    /**
     * 按指定类型将值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { int } value - <br>取值约束：应为整数。
     * @param { boolean } littleEndian - 是否按小端序读取，true表示小端序，false表示大端序。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setInt16(byteOffset: int, value: int, littleEndian: boolean): void;

    /**
     * 按指定类型从字节序列中读取值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { boolean } [littleEndian] - 是否按小端序读取，true表示小端序，false表示大端序。
     * @returns { int } byteOffset处的Int16值。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getInt16(byteOffset: int, littleEndian?: boolean): int;

    /**
     * 按指定类型从字节序列中读取值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     *     <br>取值约束：应为整数。
     * @returns { int } byteOffset处的Uint16值。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUint16(byteOffset: int): int;

    /**
     * 按指定类型将值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { int } value - <br>取值约束：应为整数。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUint16(byteOffset: int, value: int): void;

    /**
     * 按指定类型将值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { int } value - <br>取值约束：应为整数。
     * @param { boolean } littleEndian - 是否按小端序读取，true表示小端序，false表示大端序。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUint16(byteOffset: int, value: int, littleEndian: boolean): void;

    /**
     * 按指定类型从字节序列中读取值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { boolean } [littleEndian] - 是否按小端序读取，true表示小端序，false表示大端序。
     * @returns { int } byteOffset处的Uint16值。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUint16(byteOffset: int, littleEndian?: boolean): int;

    /**
     * 按指定类型从字节序列中读取值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     *     <br>取值约束：应为整数。
     * @returns { int } byteOffset处的Int32值。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getInt32(byteOffset: int): int;

    /**
     * 按指定类型将值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { int } value - <br>取值约束：应为整数。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setInt32(byteOffset: int, value: int): void;

    /**
     * 按指定类型将值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { int } value - <br>取值约束：应为整数。
     * @param { boolean } littleEndian - 是否按小端序读取，true表示小端序，false表示大端序。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setInt32(byteOffset: int, value: int, littleEndian: boolean): void;

    /**
     * 按指定类型从字节序列中读取值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { boolean } [littleEndian] - 是否按小端序读取，true表示小端序，false表示大端序。
     * @returns { int } byteOffset处的Int32值。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getInt32(byteOffset: int, littleEndian?: boolean): int;

    /**
     * 按指定类型将值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { long } value - 待写入的long值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUint32(byteOffset: int, value: long): void;

    /**
     * 按指定类型将值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { long } value - 待写入的long值。
     * @param { boolean } littleEndian - 是否按小端序读取，true表示小端序，false表示大端序。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUint32(byteOffset: int, value: long, littleEndian: boolean): void;

    /**
     * 按指定类型将值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { float } value - 待写入的float值。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setFloat32(byteOffset: int, value: float): void;

    /**
     * 按指定类型将值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { float } value - 待写入的float值。
     * @param { boolean } littleEndian - 是否按小端序读取，true表示小端序，false表示大端序。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setFloat32(byteOffset: int, value: float, littleEndian: boolean): void;

    /**
     * 按指定类型将值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { bigint } value - 待写入的bigint值。
     * @param { boolean } [littleEndian] - 是否按小端序读取，true表示小端序，false表示大端序。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setBigInt64(byteOffset: int, value: bigint, littleEndian?: boolean): void;

    /**
     * 按指定类型从字节序列中读取值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { boolean } [littleEndian] - 是否按小端序读取，true表示小端序，false表示大端序。
     * @returns { bigint } byteOffset处的BigInt64值。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getBigInt64(byteOffset: int, littleEndian?: boolean): bigint;

    /**
     * 按指定类型将值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { long } value - 待写入的long值。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setBigUint64(byteOffset: int, value: long): void;

    /**
     * 按指定类型将值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { long } value - 待写入的long值。
     * @param { boolean } littleEndian - 是否按小端序读取，true表示小端序，false表示大端序。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setBigUint64(byteOffset: int, value: long, littleEndian: boolean): void;

    /**
     * 按指定类型将值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { bigint } value
     * @param { boolean } [littleEndian] - 是否按小端序读取，true表示小端序，false表示大端序。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setBigUint64(byteOffset: int, value: bigint, littleEndian?: boolean): void;

    /**
     * 按指定类型从字节序列中读取值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { boolean } [littleEndian] - 是否按小端序读取，true表示小端序，false表示大端序。
     * @returns { bigint } byteOffset处的BigUint64值。
     * @throws { RangeError } - 输入参数错误。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getBigUint64(byteOffset: int, littleEndian?: boolean): bigint;

    /**
     * 底层缓冲区。
     *
     * @returns { ArrayBuffer }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get buffer(): ArrayBuffer;

    /**
     * 将int8值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     * @param { double } value - 待写入的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setInt8(byteOffset: int, value: double): void;

    /**
     * 将uint8值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     * @param { double } value - 待写入的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUint8(byteOffset: int, value: double): void;

    /**
     * 将int16值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     * @param { double } value - 待写入的值。
     * @param { boolean } [littleEndian] - true表示小端序，false表示大端序。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setInt16(byteOffset: int, value: double, littleEndian?: boolean): void;

    /**
     * 将uint16值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     * @param { double } value - 待写入的double值。
     * @param { boolean } [littleEndian] - true表示小端序，false表示大端序。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUint16(byteOffset: int, value: double, littleEndian?: boolean): void;

    /**
     * 将int32值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     * @param { double } value - 待写入的值。
     * @param { boolean } [littleEndian] - true表示小端序，false表示大端序。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setInt32(byteOffset: int, value: double, littleEndian?: boolean): void;

    /**
     * 从字节序列中读取uint32值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     * @returns { double } 读取到的值（大端序）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUint32(byteOffset: int): double;

    /**
     * 从字节序列中读取uint32值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     * @param { boolean } [littleEndian] - true表示小端序，false表示大端序。
     * @returns { double } 读取到的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getUint32(byteOffset: int, littleEndian?: boolean): double;

    /**
     * 将uint32值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     * @param { double } value - 待写入的值。
     * @param { boolean } [littleEndian] - true表示小端序，false表示大端序。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setUint32(byteOffset: int, value: double, littleEndian?: boolean): void;

    /**
     * 从字节序列中读取float32值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     * @returns { double } 读取到的值（大端序）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getFloat32(byteOffset: int): double;

    /**
     * 从字节序列中读取float32值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     * @param { boolean } [littleEndian] - true表示小端序，false表示大端序。
     * @returns { double } 读取到的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getFloat32(byteOffset: int, littleEndian?: boolean): double;

    /**
     * 将float32值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     * @param { double } value - 待写入的double值。
     * @param { boolean } [littleEndian] - true表示小端序，false表示大端序。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setFloat32(byteOffset: int, value: double, littleEndian?: boolean): void;

    /**
     * 从字节序列中读取bigint64值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     *     <br>取值约束：应为整数。
     * @returns { bigint } 读取到的值（大端序）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getBigInt64(byteOffset: int): bigint;

    /**
     * 将bigint64值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { long } value - 待写入的long值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setBigInt64(byteOffset: int, value: long): void;

    /**
     * 将bigint64值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     *     <br>取值约束：应为整数。
     * @param { long } value - 待写入的long值。
     * @param { boolean } littleEndian - true表示小端序，false表示大端序。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setBigInt64(byteOffset: int, value: long, littleEndian: boolean): void;

    /**
     * 从字节序列中读取biguint64值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     *     <br>取值约束：应为整数。
     * @returns { bigint } 读取到的值（大端序）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getBigUint64(byteOffset: int): bigint;

    /**
     * 从字节序列中读取float64值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     * @returns { double } 读取到的值（大端序）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getFloat64(byteOffset: int): double;

    /**
     * 从字节序列中读取float64值。
     *
     * @param { int } byteOffset - 读取位置的起始索引。
     * @param { boolean } [littleEndian] - true表示小端序，false表示大端序。
     * @returns { double } 读取到的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getFloat64(byteOffset: int, littleEndian?: boolean): double;

    /**
     * 将float64值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     * @param { double } value - 待写入的double值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setFloat64(byteOffset: int, value: double): void;

    /**
     * 将float64值写入字节序列。
     *
     * @param { int } byteOffset - 写入位置的起始索引。
     * @param { double } value - 待写入的double值。
     * @param { boolean } [littleEndian] - true表示小端序，false表示大端序。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public setFloat64(byteOffset: int, value: double, littleEndian?: boolean): void;
}
