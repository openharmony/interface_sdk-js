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
 * Interface representing a view of an ArrayBuffer.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface ArrayBufferView {
    /**
     * The ArrayBuffer instance referenced by the array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    readonly buffer: ArrayBuffer;

    /**
     * The length in bytes of the array.
     * The value must be an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    readonly byteLength: int;

    /**
     * The offset in bytes of the array.
     * The value must be an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    readonly byteOffset: int;
}

/**
 * JS ArrayBuffer API-compatible class.
 * Used to represent a generic, fixed-length raw binary data buffer.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class ArrayBuffer {

    /**
     * Creates an ArrayBuffer with size equal to the length parameter.
     *
     * @param { int } length - The size of the ArrayBuffer in bytes.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } [maxByteLength] - Optional maximum size the ArrayBuffer can be resized to.
     *     <br>The value must be an integer greater than or equal to 0.
     * @throws { RangeError } Throws - if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(length: int, maxByteLength?: int);

    /**
     * Creates an ArrayBuffer with size equal to the length parameter.
     *
     * @param { double } length - The size of the ArrayBuffer in bytes.
     *     <br>The value must be greater than or equal to 0.
     * @param { double } [maxByteLength] - Optional maximum size the ArrayBuffer can be resized to.
     *     <br>The value must be greater than or equal to 0.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double, maxByteLength?: double);

    /**
     * Checks if the passed object is one of the ArrayBuffer views.
     *
     * @param { Object } obj - The object to check.
     * @returns { boolean } Returns true if the object is a view; otherwise false.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static isView(obj: Object): boolean;

    /**
     * Atomically adds a value to the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { byte } value - The value to add.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddI8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically performs a bitwise AND operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { byte } value - The value to AND with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndI8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically compares and exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { byte } expectedValue - The expected value.
     * @param { byte } replacementValue - The replacement value.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeI8(index: int, byteOffset: int, expectedValue: byte, replacementValue: byte): long;

    /**
     * Atomically exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { byte } value - The value to exchange.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeI8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically loads the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadI8(index: int, byteOffset: int): long;

    /**
     * Atomically performs a bitwise OR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { byte } value - The value to OR with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrI8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically stores a value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { byte } value - The value to store.
     * @returns { long } The stored value.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreI8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically subtracts a value from the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { byte } value - The value to subtract.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubI8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically performs a bitwise XOR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { byte } value - The value to XOR with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorI8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically adds a value to the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { short } value - The value to add.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddI16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically performs a bitwise AND operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { short } value - The value to AND with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndI16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically compares and exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { short } expectedValue - The expected value.
     * @param { short } replacementValue - The replacement value.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeI16(index: int, byteOffset: int, expectedValue: short, replacementValue: short): long;

    /**
     * Atomically exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { short } value - The value to exchange.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeI16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically loads the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadI16(index: int, byteOffset: int): long;

    /**
     * Atomically performs a bitwise OR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { short } value - The value to OR with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrI16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically stores a value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { short } value - The value to store.
     * @returns { long } The stored value.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreI16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically subtracts a value from the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { short } value - The value to subtract.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubI16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically performs a bitwise XOR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { short } value - The value to XOR with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorI16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically adds a value to the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } value - The value to add.
     *     <br>The value should be an integer.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddI32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically performs a bitwise AND operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } value - The value to AND with.
     *     <br>The value should be an integer.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndI32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically compares and exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } expectedValue - The expected value.
     *     <br>The value should be an integer.
     * @param { int } replacementValue - The replacement value.
     *     <br>The value should be an integer.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeI32(index: int, byteOffset: int, expectedValue: int, replacementValue: int): long;

    /**
     * Atomically exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } value - The value to exchange.
     *     <br>The value should be an integer.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeI32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically loads the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadI32(index: int, byteOffset: int): long;

    /**
     * Atomically performs a bitwise OR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } value - The value to OR with.
     *     <br>The value should be an integer.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrI32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically stores a value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } value - The value to store.
     *     <br>The value should be an integer.
     * @returns { long } The stored value.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreI32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically subtracts a value from the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } value - The value to subtract.
     *     <br>The value should be an integer.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubI32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically performs a bitwise XOR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } value - The value to XOR with.
     *     <br>The value should be an integer.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorI32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically adds a value to the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { long } value - The value to add.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddI64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically performs a bitwise AND operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { long } value - The value to AND with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndI64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically compares and exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { long } expectedValue - The expected value.
     * @param { long } replacementValue - The replacement value.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeI64(index: int, byteOffset: int, expectedValue: long, replacementValue: long): long;

    /**
     * Atomically exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { long } value - The value to exchange.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeI64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically loads the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadI64(index: int, byteOffset: int): long;

    /**
     * Atomically performs a bitwise OR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { long } value - The value to OR with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrI64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically stores a value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { long } value - The value to store.
     * @returns { long } The stored value.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreI64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically subtracts a value from the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { long } value - The value to subtract.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubI64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically performs a bitwise XOR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { long } value - The value to XOR with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorI64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically adds a value to the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { byte } value - The value to add.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddU8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically performs a bitwise AND operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { byte } value - The value to AND with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndU8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically compares and exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { byte } expectedValue - The expected value.
     * @param { byte } replacementValue - The replacement value.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeU8(index: int, byteOffset: int, expectedValue: byte, replacementValue: byte): long;

    /**
     * Atomically exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { byte } value - The value to exchange.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeU8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically loads the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadU8(index: int, byteOffset: int): long;

    /**
     * Atomically performs a bitwise OR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { byte } value - The value to OR with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrU8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically stores a value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { byte } value - The value to store.
     * @returns { long } The stored value.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreU8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically subtracts a value from the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { byte } value - The value to subtract.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubU8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically performs a bitwise XOR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { byte } value - The value to XOR with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorU8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically adds a value to the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { short } value - The value to add.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddU16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically performs a bitwise AND operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { short } value - The value to AND with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndU16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically compares and exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { short } expectedValue - The expected value.
     * @param { short } replacementValue - The replacement value.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeU16(index: int, byteOffset: int, expectedValue: short, replacementValue: short): long;

    /**
     * Atomically exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { short } value - The value to exchange.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeU16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically loads the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadU16(index: int, byteOffset: int): long;

    /**
     * Atomically performs a bitwise OR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { short } value - The value to OR with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrU16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically stores a value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { short } value - The value to store.
     * @returns { long } The stored value.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreU16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically subtracts a value from the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { short } value - The value to subtract.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubU16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically performs a bitwise XOR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { short } value - The value to XOR with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorU16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically adds a value to the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } value - The value to add.
     *     <br>The value should be an integer.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddU32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically performs a bitwise AND operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } value - The value to AND with.
     *     <br>The value should be an integer.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndU32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically compares and exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } expectedValue - The expected value.
     *     <br>The value should be an integer.
     * @param { int } replacementValue - The replacement value.
     *     <br>The value should be an integer.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeU32(index: int, byteOffset: int, expectedValue: int, replacementValue: int): long;

    /**
     * Atomically exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } value - The value to exchange.
     *     <br>The value should be an integer.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeU32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically loads the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadU32(index: int, byteOffset: int): long;

    /**
     * Atomically performs a bitwise OR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } value - The value to OR with.
     *     <br>The value should be an integer.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrU32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically stores a value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } value - The value to store.
     *     <br>The value should be an integer.
     * @returns { long } The stored value.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreU32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically subtracts a value from the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } value - The value to subtract.
     *     <br>The value should be an integer.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubU32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically performs a bitwise XOR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } value - The value to XOR with.
     *     <br>The value should be an integer.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorU32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically adds a value to the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { long } value - The value to add.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddU64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically performs a bitwise AND operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { long } value - The value to AND with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndU64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically compares and exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { long } expectedValue - The expected value.
     * @param { long } replacementValue - The replacement value.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeU64(index: int, byteOffset: int, expectedValue: long, replacementValue: long): long;

    /**
     * Atomically exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { long } value - The value to exchange.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeU64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically loads the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadU64(index: int, byteOffset: int): long;

    /**
     * Atomically performs a bitwise OR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { long } value - The value to OR with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrU64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically stores a value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { long } value - The value to store.
     * @returns { long } The stored value.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreU64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically subtracts a value from the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { long } value - The value to subtract.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubU64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically performs a bitwise XOR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } byteOffset - The byte offset within the ArrayBuffer (unit: byte).
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { long } value - The value to XOR with.
     * @returns { long } The value after the operation.
     * @throws { IndexOutOfBoundsError } if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorU64(index: int, byteOffset: int, value: long): long;

    /**
     * Returns the string representation of the ArrayBuffer.
     *
     * @returns { string } The string representation of the ArrayBuffer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * Returns the byte at the specified index.
     *
     * @param { int } pos - The position in the buffer.
     *     <br>The value should be an integer.
     * @returns { byte } The byte value.
     * @throws { IndexOutOfBoundsError } Throws - if pos is out of bounds.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(pos: int): byte;

    /**
     * Sets the byte value at the specified index.
     *
     * @param { int } pos - The position in the buffer.
     *     <br>The value should be an integer.
     * @param { byte } val - The byte value to set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(pos: int, val: byte): void;

    /**
     * Returns the length of the ArrayBuffer in bytes.
     *
     * @returns { int } The byte length.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getByteLength(): int;

    /**
     * Resizes the ArrayBuffer to the specified length.
     *
     * @param { int } newLen - The new byte length.
     *     <br>The value must be an integer greater than or equal to 0.
     * @throws { TypeError } Throws - if the buffer is detached or not resizable.
     * @throws { RangeError } Throws - if the new length is invalid.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public resize(newLen : int): void;

    /**
     * Read-only property for the byte length of the ArrayBuffer.
     *
     * @returns { int } The byte length.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get byteLength(): int;

    /**
     * Returns true if the ArrayBuffer has been detached.
     *
     * @returns { boolean } True if the ArrayBuffer has been detached.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get detached(): boolean;

    /**
     * Returns true if the ArrayBuffer can be resized.
     *
     * @returns { boolean } True if the ArrayBuffer can be resized.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get resizable(): boolean;

    /**
     * Creates a new ArrayBuffer from an array of bytes.
     *
     * @param { FixedArray<byte> } arr - Source byte array.
     * @returns { ArrayBuffer } The new ArrayBuffer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<byte>): ArrayBuffer;

    /**
     * Creates a new ArrayBuffer from a Uint8Array.
     *
     * @param { Uint8Array } u8arr - Source typed array.
     * @returns { ArrayBuffer } The new ArrayBuffer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(u8arr: Uint8Array): ArrayBuffer;

    /**
     * Creates a new ArrayBuffer from an array of numbers.
     *
     * @param { double[] } array - Source number array.
     * @returns { ArrayBuffer } The new ArrayBuffer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(array: double[]): ArrayBuffer;

    /**
     * Creates a new ArrayBuffer from a string with specific encoding.
     *
     * @param { string } str - Source string.
     * @param { string } encoding - String encoding (e.g., "utf8").
     * @returns { ArrayBuffer } The new ArrayBuffer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(str: string, encoding: string): ArrayBuffer;

    /**
     * Creates a new ArrayBuffer from a segment of an existing ArrayBuffer.
     *
     * @param { ArrayBuffer } buff - Source buffer.
     * @param { int } byteOffset - Start offset in source.
     *     <br>The value should be an integer.
     * @param { int } length - Number of bytes to copy.
     *     <br>The value should be an integer.
     * @returns { ArrayBuffer } The new ArrayBuffer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(buff: ArrayBuffer, byteOffset: int, length: int): ArrayBuffer;

    /**
     * Creates a new ArrayBuffer from a segment of an existing ArrayBuffer with number parameters.
     *
     * @param { ArrayBuffer } buffer - Source buffer.
     * @param { double } [byteOffset] - Start offset.
     * @param { double } [length] - Byte length.
     * @returns { ArrayBuffer } The new ArrayBuffer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(buffer: ArrayBuffer, byteOffset?: double, length?: double): ArrayBuffer;

    /**
     * Creates a new ArrayBuffer from an object.
     *
     * @param { Object } obj - Source object (string or ArrayBuffer).
     * @param { int | string } byteOffsetOrEncoding - Byte offset or encoding string.
     * @param { int } length - Length to copy.
     *     <br>The value should be an integer.
     * @returns { ArrayBuffer } The new ArrayBuffer.
     * @throws { Error } Throws - if arguments are incorrect.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static fromObject(obj: Object, byteOffsetOrEncoding: int | string, length: int): ArrayBuffer;

    /**
     * Returns the byte length of a string in a given encoding.
     *
     * @param { string } text - Source string.
     * @param { string } encoding - Encoding type.
     * @returns { int } Calculated byte length.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static bytesLength(text: string, encoding: string): int;

    /**
     * Converts a segment of an ArrayBuffer to a string.
     *
     * @param { ArrayBuffer } buffer - Source buffer.
     * @param { string } encoding - Encoding to use.
     * @param { int } start - Start index.
     *     <br>The value should be an integer.
     * @param { int } end - End index.
     *     <br>The value should be an integer.
     * @returns { string } Decoded string.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static stringify(buffer: ArrayBuffer, encoding: string, start: int, end: int): string;

    /**
     * Creates a new ArrayBuffer with a copy of bytes in the range [begin, end).
     *
     * @param { int } begin - An inclusive index to start copying from.
     *     <br>The value should be an integer.
     * @param { int } [end] - An exclusive index to stop copying.
     *     <br>The value should be an integer.
     * @returns { ArrayBuffer } The new ArrayBuffer.
     * @throws { TypeError } Throws - if the ArrayBuffer is detached.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int, end?: int): ArrayBuffer;

    /**
     * Creates a new ArrayBuffer with a copy of bytes in the range [begin, end).
     *
     * @param { double } begin - An inclusive index to start copying from.
     * @param { double } [end] - An exclusive index to stop copying.
     * @returns { ArrayBuffer } The new ArrayBuffer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: double, end?: double): ArrayBuffer;
}

/**
 * Define the alias ArrayBufferLike on ArrayBuffer.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type ArrayBufferLike = ArrayBuffer;
