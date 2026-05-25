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
 * JS ArrayBuffer API-compatible class.
 * Used to represent a generic, fixed-length raw binary data buffer.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
class ArrayBuffer {

    /**
     * Creates an ArrayBuffer with size equal to the length parameter.
     *
     * @param { int } length - The size of the ArrayBuffer in bytes
     *     <br>The value range is all integers.
     * @param { int } [maxByteLength] - Optional maximum size the ArrayBuffer can be resized to
     *     <br>The value range is all integers.
     * @throws { RangeError } Throws - if length or maxByteLength is negative, or length > maxByteLength.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(length: int, maxByteLength?: int);

    /**
     * Atomically adds a value to the element at the specified index.
     *
     * @param { int } index - The index to access
     *     <br>The value range is all integers.
     * @param { int } byteOffset - The byte offset
     *     <br>The value range is all integers.
     * @param { byte } value - The value to add.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddI8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically performs a bitwise AND operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { byte } value - The value to AND with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndI8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically compares and exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { byte } expectedValue - The expected value.
     * @param { byte } replacementValue - The replacement value.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeI8(index: int, byteOffset: int, expectedValue: byte, replacementValue: byte): long;

    /**
     * Atomically exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { byte } value - The value to exchange.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeI8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically loads the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @returns { long } The loaded value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadI8(index: int, byteOffset: int): long;

    /**
     * Atomically performs a bitwise OR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { byte } value - The value to OR with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrI8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically stores a value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { byte } value - The value to store.
     * @returns { long } The stored value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreI8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically subtracts a value from the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { byte } value - The value to subtract.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubI8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically performs a bitwise XOR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { byte } value - The value to XOR with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorI8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically adds a value to the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { short } value - The value to add.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddI16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically performs a bitwise AND operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { short } value - The value to AND with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndI16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically compares and exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { short } expectedValue - The expected value.
     * @param { short } replacementValue - The replacement value.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeI16(index: int, byteOffset: int, expectedValue: short, replacementValue: short): long;

    /**
     * Atomically exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { short } value - The value to exchange.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeI16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically loads the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @returns { long } The loaded value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadI16(index: int, byteOffset: int): long;

    /**
     * Atomically performs a bitwise OR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { short } value - The value to OR with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrI16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically stores a value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { short } value - The value to store.
     * @returns { long } The stored value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreI16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically subtracts a value from the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { short } value - The value to subtract.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubI16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically performs a bitwise XOR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { short } value - The value to XOR with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorI16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically adds a value to the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { int } value - The value to add.
     *     <br>The value should be an integer.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddI32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically performs a bitwise AND operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { int } value - The value to AND with.
     *     <br>The value should be an integer.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndI32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically compares and exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { int } expectedValue - The expected value.
     *     <br>The value should be an integer.
     * @param { int } replacementValue - The replacement value.
     *     <br>The value should be an integer.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeI32(index: int, byteOffset: int, expectedValue: int, replacementValue: int): long;

    /**
     * Atomically exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { int } value - The value to exchange.
     *     <br>The value should be an integer.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeI32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically loads the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @returns { long } The loaded value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadI32(index: int, byteOffset: int): long;

    /**
     * Atomically performs a bitwise OR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { int } value - The value to OR with.
     *     <br>The value should be an integer.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrI32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically stores a value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { int } value - The value to store.
     *     <br>The value should be an integer.
     * @returns { long } The stored value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreI32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically subtracts a value from the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { int } value - The value to subtract.
     *     <br>The value should be an integer.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubI32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically performs a bitwise XOR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { int } value - The value to XOR with.
     *     <br>The value should be an integer.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorI32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically adds a value to the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { long } value - The value to add.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddI64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically performs a bitwise AND operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { long } value - The value to AND with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndI64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically compares and exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { long } expectedValue - The expected value.
     * @param { long } replacementValue - The replacement value.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeI64(index: int, byteOffset: int, expectedValue: long, replacementValue: long): long;

    /**
     * Atomically exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { long } value - The value to exchange.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeI64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically loads the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @returns { long } The loaded value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadI64(index: int, byteOffset: int): long;

    /**
     * Atomically performs a bitwise OR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { long } value - The value to OR with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrI64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically stores a value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { long } value - The value to store.
     * @returns { long } The stored value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreI64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically subtracts a value from the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { long } value - The value to subtract.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubI64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically performs a bitwise XOR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { long } value - The value to XOR with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorI64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically adds a value to the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { byte } value - The value to add.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddU8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically performs a bitwise AND operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { byte } value - The value to AND with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndU8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically compares and exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { byte } expectedValue - The expected value.
     * @param { byte } replacementValue - The replacement value.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeU8(index: int, byteOffset: int, expectedValue: byte, replacementValue: byte): long;

    /**
     * Atomically exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { byte } value - The value to exchange.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeU8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically loads the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @returns { long } The loaded value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadU8(index: int, byteOffset: int): long;

    /**
     * Atomically performs a bitwise OR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { byte } value - The value to OR with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrU8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically stores a value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { byte } value - The value to store.
     * @returns { long } The stored value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreU8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically subtracts a value from the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { byte } value - The value to subtract.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubU8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically performs a bitwise XOR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { byte } value - The value to XOR with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorU8(index: int, byteOffset: int, value: byte): long;

    /**
     * Atomically adds a value to the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { short } value - The value to add.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddU16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically performs a bitwise AND operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { short } value - The value to AND with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndU16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically compares and exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { short } expectedValue - The expected value.
     * @param { short } replacementValue - The replacement value.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeU16(index: int, byteOffset: int, expectedValue: short, replacementValue: short): long;

    /**
     * Atomically exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { short } value - The value to exchange.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeU16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically loads the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @returns { long } The loaded value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadU16(index: int, byteOffset: int): long;

    /**
     * Atomically performs a bitwise OR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { short } value - The value to OR with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrU16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically stores a value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { short } value - The value to store.
     * @returns { long } The stored value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreU16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically subtracts a value from the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { short } value - The value to subtract.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubU16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically performs a bitwise XOR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { short } value - The value to XOR with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorU16(index: int, byteOffset: int, value: short): long;

    /**
     * Atomically adds a value to the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { int } value - The value to add.
     *     <br>The value should be an integer.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddU32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically performs a bitwise AND operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { int } value - The value to AND with.
     *     <br>The value should be an integer.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndU32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically compares and exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { int } expectedValue - The expected value.
     *     <br>The value should be an integer.
     * @param { int } replacementValue - The replacement value.
     *     <br>The value should be an integer.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeU32(index: int, byteOffset: int, expectedValue: int, replacementValue: int): long;

    /**
     * Atomically exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { int } value - The value to exchange.
     *     <br>The value should be an integer.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeU32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically loads the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @returns { long } The loaded value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadU32(index: int, byteOffset: int): long;

    /**
     * Atomically performs a bitwise OR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { int } value - The value to OR with.
     *     <br>The value should be an integer.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrU32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically stores a value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { int } value - The value to store.
     *     <br>The value should be an integer.
     * @returns { long } The stored value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreU32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically subtracts a value from the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { int } value - The value to subtract.
     *     <br>The value should be an integer.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubU32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically performs a bitwise XOR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { int } value - The value to XOR with.
     *     <br>The value should be an integer.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorU32(index: int, byteOffset: int, value: int): long;

    /**
     * Atomically adds a value to the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { long } value - The value to add.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAddU64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically performs a bitwise AND operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { long } value - The value to AND with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicAndU64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically compares and exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { long } expectedValue - The expected value.
     * @param { long } replacementValue - The replacement value.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicCompareExchangeU64(index: int, byteOffset: int, expectedValue: long, replacementValue: long): long;

    /**
     * Atomically exchanges the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { long } value - The value to exchange.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicExchangeU64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically loads the value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @returns { long } The loaded value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicLoadU64(index: int, byteOffset: int): long;

    /**
     * Atomically performs a bitwise OR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { long } value - The value to OR with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicOrU64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically stores a value at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { long } value - The value to store.
     * @returns { long } The stored value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicStoreU64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically subtracts a value from the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { long } value - The value to subtract.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicSubU64(index: int, byteOffset: int, value: long): long;

    /**
     * Atomically performs a bitwise XOR operation on the element at the specified index.
     *
     * @param { int } index - The index to access.
     *     <br>The value should be an integer.
     * @param { int } byteOffset - The byte offset.
     *     <br>The value should be an integer.
     * @param { long } value - The value to XOR with.
     * @returns { long } The result of the operation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public atomicXorU64(index: int, byteOffset: int, value: long): long;
}
