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
 * @file TypedArrays static methods declaration
 * @kit ArkTS
 */

/**
 * class Int8Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Int8Array {
    /**
     * Number of bytes occupied by each element
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 1

    /**
     * Creates an empty Int8Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * Creates an Int8Array with respect to length.
     *
     * @param { int } length - Number of elements
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * Creates an Int8Array with respect to length.
     *
     * @param { double } length - Number of elements
     * @throws { RangeError } - If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * Creates a copy of Int8Array.
     *
     * @param { Int8Array } other - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Int8Array);

    /**
     * Creates an Int8Array from FixedArray<int>
     *
     * @param { FixedArray<int> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * Creates an Int8Array from FixedArray<number>
     *
     * @param { FixedArray<double> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * Creates an Int8Array from Array<int>
     *
     * @param { Array<int> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: Array<int>);

    /**
     * Creates an Int8Array with respect to data accessed via Iterable<Number> interface
     *
     * @param { Iterable<double> } elements - an iterable object
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * Creates an Int8Array with respect to buf and byteOffset.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * Creates an Int8Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double } byteOffset - byte offset from begin of the buf
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * Creates an Int8Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @param { int } length - size of elements of type byte in newly created Int8Array
     *     <br>The value should be an integer.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int, length: int);

    /**
     * Creates an Int8Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double | undefined } byteOffset - byte offset from begin of the buf
     * @param { double | undefined } length - size of elements of type byte in newly created Int8Array
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * Creates an Int8Array with respect to buf.
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - data initializer
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { byte } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: byte): void;

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { int } val - value to set
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: int): void;

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { double } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * Number of byte stored in Int8Array
     *
     * @returns { int } - the number of elements
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * Returns an instance of number at passed index.
     *
     * @param { int } index - index to look at.
     *     <br>The value should be an integer.
     * @returns { double } - the raw numeric value at index.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(index: int): double;

    /**
     * Returns an instance of primitive type at passed index.
     *
     * @param { int } index - index to look at
     *     <br>The value should be an integer.
     * @returns { double | undefined } - the raw numeric value at index, or undefined if the index is out of bounds.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     * See rules of parameters normalization on
     *
     * @param { int } target - insert index to place copied elements
     * @param { int } start - start index to begin copy from
     * @param { int } [end] - last index to end copy from, excluded. Defaults to the array length.
     * @returns { Int8Array } The modified Int8Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Int8Array;

    /**
     * Makes a copy of internal elements to targetPos from begin to end of Int8Array.
     * See rules of parameters normalization on
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @returns { Int8Array } The modified Int8Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Int8Array;

    /**
     * Returns an array of key, value pairs for every entry in the Int8Array
     *
     * @returns { IterableIterator<[int, double]> } - key, value pairs for every entry in the array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * Fills the Int8Array with specified value
     *
     * @param { byte } value - new value
     * @param { int } [start] - start index to begin fill from. Defaults to 0.
     * @param { int } [end] - last index to end fill from, excluded. Defaults to the array length.
     * @returns { this } - modified Int8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: byte, start?: int, end?: int): this;

    /**
     * Fills the Int8Array with specified value
     *
     * @param { double } value - new value
     * @param { int } [start] - start index to begin fill from. Defaults to 0.
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded. Defaults to the array length.
     *     <br>The value should be an integer.
     * @returns { this } - modified Int8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): this;

    /**
     * Assigns val as element on insertPos.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { byte } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: byte): void;

    /**
     * Assigns val as element on insertPos.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { double } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * Copies all elements of arr to the current Int8Array.
     *
     * @param { FixedArray<byte> } arr - array to copy data from
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<byte>): void;

    /**
     * Copies all elements of arr to the current Int8Array starting from insertPos.
     *
     * @param { FixedArray<byte> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<byte>, insertPos: int): void;

    /**
     * Copies all elements of arr to the current Int8Array.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * Copies all elements of arr to the current Int8Array starting from insertPos.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * Copies all elements of array to the current Int8Array.
     *
     * @param { Int8Array } array - array to copy data from
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Int8Array): void;

    /**
     * Copies all elements of arr to the current Int8Array starting from offset.
     *
     * @param { Int8Array } array - array to copy data from
     * @param { int } offset - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Int8Array, offset: int): void;

    /**
     * Copies elements from an ArrayLike object to the Int8Array.
     *
     * @param { ArrayLike<double> } array - An ArrayLike object containing the elements to copy.
     * @param { int } [offset] - Optional. The offset into the target array at which to begin
     *     writing values from the source array. The default value is 0.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<byte> } items - a set of elements to include in the new array object.
     * @returns { Int8Array } - a new Int8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<byte>): Int8Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<int> } items - a set of elements to include in the new array object.
     * @returns { Int8Array } - a new Int8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Int8Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<double> } items - a set of elements to include in the new array object.
     * @returns { Int8Array } - a new Int8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Int8Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @returns { Int8Array } - a new Int8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Int8Array;

    /**
     * Creates an array from an object of FixedArray<int>.
     *
     * @param { FixedArray<int> } arr - An instance of the FixedArray type to convert to an array.
     * @returns { Int8Array } - A new Int8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<int>): Int8Array;

    /**
     * Creates an array from a set of type std.core.Set<int>.
     *
     * @param { Set<int> } set - A set object to convert to an array.
     * @returns { Int8Array } - A new Int8Array
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<int>): Int8Array;

    /**
     * Creates an array from an array of the same type.
     *
     * @param { Int8Array } arr - An array to convert to a new array.
     * @returns { Int8Array } - A new Int8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Int8Array): Int8Array;

    /**
     * Creates an array from an array of the same up to the signedness type.
     *
     * @param { Uint8Array } arr - An array to convert to a new array.
     * @returns { Int8Array } - A new Int8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Uint8Array): Int8Array;

    /**
     * Creates an array from an object of std.core.Array<int>.
     *
     * @param { Array<int> } arr - An instance of the std.core.Array type to convert to an array.
     * @returns { Int8Array } - A new Int8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<int>): Int8Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { ArrayLike<double> } arrayLike - An array-like or iterable object to convert to an array.
     * @returns { Int8Array } - A new Int8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: ArrayLike<double>): Int8Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { ArrayLike<T> } arrayLike - An array-like or iterable object to convert to an array.
     * @param { function } mapfn - A mapping function to call on every element of the array.
     * @returns { Int8Array } - A new Int8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => double): Int8Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { Iterable<double> } arrayLike - An array-like or iterable object to convert to an array.
     * @param { function } [mapfn] - A mapping function to call on every element of the array.
     *     Defaults to the identity function (returns the element unchanged).
     * @returns { Int8Array } - A new Int8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => double): Int8Array;

    /**
     * Determines whether Int8Array includes a certain element, returning true or false as appropriate
     *
     * @param { byte } searchElement - The element to search for
     * @param { int } fromIndex - The position in this array at which to begin searching for searchElement
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Int8Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: byte, fromIndex: int): boolean;

    /**
     * Determines whether Int8Array includes a certain element, returning true or false as appropriate
     *
     * @param { byte } searchElement - The element to search for. The search starts at index 0.
     * @returns { boolean } - true if searchElement is in Int8Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: byte): boolean;

    /**
     * Determines whether Int8Array includes a certain element, returning true or false as appropriate
     *
     * @param { double } searchElement - The element to search for
     * @param { int } [fromIndex] - The position in this array at which to begin searching for searchElement.
     *     Defaults to 0.
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Int8Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * Returns the index of the first occurrence of a value in Int8Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search starts at index 0.
     * @returns { int } - index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Int8Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the first occurrence of a value in Int8Array.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int } [fromIndex] - The array index at which to begin the search.
     *      Defaults to 0.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: double, fromIndex?: int): int;

    /**
     * Adds all the elements of an array separated by the specified separator string.
     *
     * @param { string } [separator] - A string used to separate one element of an array from the next in the
     *     resulting string. If omitted, the array elements are separated with a comma.
     * @returns { string } - a string with all array elements joined by the specified separator.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * Returns a list of indices in the Int8Array.
     *
     * @returns { IterableIterator<int> } - iterator over indices.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns the index of the last occurrence of a value in Int8Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * Returns the index of the last occurrence of a value in Int8Array.
     *
     * @param { double } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * Returns the index of the last occurrence of a value in Int8Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - rightmost index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the last occurrence of a value in Int8Array.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int | undefined } fromIndex - The array index at which to begin the search.
     *     Defaults to the array length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * Creates a new Int8Array using reversed data from the current one
     *
     * @returns { Int8Array } - a new Int8Array using reversed data from the current one
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Int8Array;

    /**
     * Creates a slice of current Int8Array using range [begin, this.length).
     *
     * @param { int } begin - start index to be taken into slice
     * @returns { Int8Array } - a new Int8Array with elements of current Int8Array[begin, this.length)
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Int8Array;

    /**
     * Creates a slice of current Int8Array using range [begin, end)
     *
     * @param { int } [begin] - start index to be taken into slice. Defaults to 0.
     * @param { int } [end] - last index to be taken into slice. Defaults to the array length.
     * @returns { Int8Array } - a new Int8Array with elements of current Int8Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Int8Array;

    /**
     * Creates a new Int8Array that shares the same underlying ArrayBuffer as the current array,
     * optionally with a restricted range.
     *
     * @param { int } [begin] - start index, inclusive. Defaults to 0.
     * @param { int } [end] - last index, exclusive. Defaults to the array length.
     * @returns { Int8Array } - a new Int8Array with the same underlying ArrayBuffer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Int8Array;

    /**
     * Converts this object to a locale-specific string representation
     *
     * @param { Intl.LocalesArgument } [locales] - A string with a BCP 47 language tag, or an
     *     array of such strings.
     * @param { object } [options] - An object with some or all of the properties of the
     *     Intl.NumberFormat options.
     * @returns { string } result of the locale-specific conversion
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

    /**
     * Returns a new Int8Array with the elements in reverse order. The original array is not modified.
     *
     * @returns { Int8Array } - a new Int8Array with the elements in reverse order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Int8Array;

    /**
     * Returns a new Int8Array with the elements sorted in ascending order. The original array is not modified.
     *
     * @returns { Int8Array } - a new Int8Array with the elements sorted in ascending order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Int8Array;

    /**
     * Returns a comma-separated string representation of the Int8Array elements.
     *
     * @returns { string } - a comma-separated string of the array elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     *  Returns an iterator over the values of the Int8Array, in ascending order.
     *
     * @returns { IterableIterator<double> } - an iterator over all elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<double>;

    /**
     * Iterable interface implementation.
     *
     * @returns { IterableIterator<double> } - iterator over all elements
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<double>;

    /**
     * Returns a new Int8Array with the element at the given index replaced by the given value.
     * The original array is not modified.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { byte } value - value to set
     * @returns { Int8Array } - a new Int8Array with the element at index replaced by value.
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: byte): Int8Array;

    /**
     * Returns a new Int8Array with the element at the given index replaced by the given value.
     * The original array is not modified.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { double } value - value to set
     * @returns { Int8Array } - a new Int8Array with the element at index replaced by value.
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Int8Array;

    /**
     * Finds the last element in the Int8Array that satisfies the condition
     *
     * @param { function } fn - A function to test each element. Should return true for the element to be found.
     * @returns { double } - the last element that satisfies fn
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double) => boolean): double;

    /**
     * Sorts in-place by numeric value in ascending order.
     *
     * @returns { this } - sorted Int8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(): this;

    /**
     * Sorts in-place
     *
     * @param { function } [compareFn] - comparator used to determine the order of the elements.
     *     compareFn returns a negative value if first argument is less than second argument,
     *     zero if they're equal and a positive value otherwise.
     *     Defaults to an ascending numeric sort.
     * @returns { this } - sorted Int8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * Determines whether the specified callback function returns true for any element of an array.
     *
     * @param { function } predicate - A function that accepts three arguments.
     *     The some method calls the predicate function for each element in the array
     *     until the predicate returns a true or until the end of the array.
     * @returns { boolean } - false unless predicate function returns true for an array element,
     *     in which case true is immediately returned.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public some(predicate: (element: double, index: int, array: Int8Array) => boolean): boolean;

    /**
     * Calls the specified callback function for all the elements in an array.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - The parameter which value is used as the initial value to start the accumulation.
     *     The first call to the callbackfn function provides this value as an argument.
     * @returns { U } - the accumulated result from the last call to the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Int8Array) => U,
        initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array first element value as an argument
     * @returns { double } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } - If the Int8Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Int8Array) => double): double;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - The parameter which value is used as the initial value to start the accumulation.
     * @returns { U } - the accumulated result from the last call to the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Int8Array) => U,
        initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array last element value as an argument.
     * @returns { double } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } - If the Int8Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Int8Array) => double): double;

    /**
     * Creates a new Int8Array using fn(arr[i]) over all elements of current Int8Array.
     *
     * @param { function } fn - a function to apply for each element of current Int8Array
     * @returns { Int8Array } - a new Int8Array where for each element from current Int8Array fn was applied
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Int8Array) => double): Int8Array;

    /**
     * Determines whether the specified callback function returns true for all elements of an array.
     *
     * @param { function } predicate - A function that accepts three arguments.
     *     The every method calls the predicate function for each element in the array until the predicate
     *     returns a false, or until the end of the array.
     * @returns { boolean } - true unless predicate function returns a false for an array element,
     *     in which case false is immediately returned.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public every(predicate: (element: double, index: int, array: Int8Array) => boolean): boolean;

    /**
     * Creates a new Int8Array from current Int8Array based on a condition fn.
     *
     * @param { function } fn - the condition to apply for each element
     * @returns { Int8Array } - a new Int8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Int8Array) => boolean): Int8Array;

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found, find
     *     immediately returns that element value. Otherwise, find returns undefined
     * @returns { double | undefined }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, obj: Int8Array) => boolean): double | undefined;

    /**
     * Returns the index of the first element in the array where predicate is true, and -1 otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found,
     *     findIndex immediately returns that element index. Otherwise, findIndex returns -1
     * @returns { int } - Index of the first matched element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Int8Array) => boolean): int;

    /**
     * Finds the last element in the Int8Array that satisfies the condition
     *
     * @param { function } fn - A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { byte } - the last element that satisfies fn
     * @throws { Error } - If the element cannot be found, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Int8Array) => boolean): byte;

    /**
     * Finds an index of the last element in the Int8Array that satisfies the condition
     *
     * @param { function } fn - A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { int } - the index of the last element that satisfies fn, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Int8Array) => boolean): int;

    /**
     * Calls the given callback function once for each element in the Int8Array, in ascending order.
     *
     * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the
     *     callbackfn function one time for each element in the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Int8Array) => void): void;

    /**
     * Returns the object itself
     *
     * @returns { Int8Array }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Int8Array;

    /**
     * Underlying ArrayBuffer
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;
    /**
     * Byte offset within the underlying ArrayBuffer
     * The value should be an integer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteOffset: int;
    /**
     * Number of bytes used
     * The value should be an integer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteLength: int;
    /**
     * String \"Int8Array\", representing the type name of this typed array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Int8Array';
}
/**
 * class Int16Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Int16Array {
    /**
     * Number of bytes occupied by each element
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 2;

    /**
     * Creates an empty Int16Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * Creates an Int16Array with respect to length.
     *
     * @param { int } length - Number of elements
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * Creates an Int16Array with respect to length.
     *
     * @param { double } length - Number of elements
     * @throws { RangeError } - If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * Creates a copy of Int16Array.
     *
     * @param { Int16Array } other - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Int16Array);

    /**
     * Creates an Int16Array from FixedArray<int>
     *
     * @param { FixedArray<int> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * Creates an Int16Array from FixedArray<number>
     *
     * @param { FixedArray<double> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * Creates an Int16Array from Array<int>
     *
     * @param { Array<int> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: Array<int>);

    /**
     * Creates an Int16Array with respect to data accessed via Iterable<Number> interface
     *
     * @param { Iterable<double> } elements - an iterable object
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * Creates an Int16Array with respect to buf and byteOffset.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * Creates an Int16Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double } byteOffset - byte offset from begin of the buf
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * Creates an Int16Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @param { int } length - size of elements of type short in newly created Int16Array
     *     <br>The value should be an integer.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int, length: int);

    /**
     * Creates an Int16Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double | undefined } byteOffset - byte offset from begin of the buf
     * @param { double | undefined } length - size of elements of type short in newly created Int16Array
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * Creates an Int16Array with respect to buf.
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - data initializer
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { short } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: short): void;

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { int } val - value to set
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: int): void;

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { double } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * Number of short stored in Int16Array
     *
     * @returns { int } - the number of elements
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * Returns an instance of number at passed index.
     *
     * @param { int } index - index to look at
     *     <br>The value should be an integer.
     * @returns { double } - the raw numeric value at index.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(index: int): double;

    /**
     * Returns an instance of primitive type at passed index.
     *
     * @param { int } index - index to look at
     *     <br>The value should be an integer.
     * @returns { double | undefined } - the raw numeric value at index, or undefined if the index is out of bounds.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     * See rules of parameters normalization on
     *
     * @param { int } target - insert index to place copied elements
     * @param { int } start - start index to begin copy from
     * @param { int } [end] - last index to end copy from, excluded. Defaults to the array length.
     * @returns { Int16Array } The modified Int16Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Int16Array;

    /**
     * Makes a copy of internal elements to targetPos from begin to end of Int16Array.
     * See rules of parameters normalization on
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @returns { Int16Array } The modified Int16Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Int16Array;

    /**
     * Returns an array of key, value pairs for every entry in the Int16Array
     *
     * @returns { IterableIterator<[int, double]> } - key, value pairs for every entry in the array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * Fills the Int16Array with specified value
     *
     * @param { short } value - new value
     * @param { int } [start] - start index to begin fill from. Defaults to 0.
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded. Defaults to the array length.
     *     <br>The value should be an integer.
     * @returns { this } - modified Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: short, start?: int, end?: int): this;

    /**
     * Fills the Int16Array with specified value
     *
     * @param { double } value - new value
     * @param { int } [start] - start index to begin fill from. Defaults to 0.
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded. Defaults to the array length.
     *     <br>The value should be an integer.
     * @returns { this } - modified Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): this;

    /**
     * Assigns val as element on insertPos.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { short } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: short): void;

    /**
     * Assigns val as element on insertPos.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { double } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * Copies all elements of arr to the current Int16Array.
     *
     * @param { FixedArray<short> } arr - array to copy data from
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<short>): void;

    /**
     * Copies all elements of arr to the current Int16Array starting from insertPos.
     *
     * @param { FixedArray<short> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<short>, insertPos: int): void;

    /**
     * Copies all elements of arr to the current Int16Array.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * Copies all elements of arr to the current Int16Array starting from insertPos.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * Copies all elements of array to the current Int16Array.
     *
     * @param { Int16Array } array - array to copy data from
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Int16Array): void;

    /**
     * Copies all elements of arr to the current Int16Array starting from offset.
     *
     * @param { Int16Array } array - array to copy data from
     * @param { int } offset - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Int16Array, offset: int): void;

    /**
     * Copies elements from an ArrayLike object to the Int16Array.
     *
     * @param { ArrayLike<double> } array - An ArrayLike object containing the elements to copy.
     * @param { int } [offset] - Optional. The offset into the target array at which to begin
     *     writing values from the source array. The default value is 0.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<short> } items - a set of elements to include in the new array object.
     * @returns { Int16Array } - a new Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<short>): Int16Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<int> } items - a set of elements to include in the new array object.
     * @returns { Int16Array } - a new Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Int16Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<double> } items - a set of elements to include in the new array object.
     * @returns { Int16Array } - a new Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Int16Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @returns { Int16Array } - a new Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Int16Array;

    /**
     * Creates an array from an object of FixedArray<int>.
     *
     * @param { FixedArray<int> } arr - An instance of the FixedArray type to convert to an array.
     * @returns { Int16Array } - A new Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<int>): Int16Array;

    /**
     * Creates an array from a set of type std.core.Set<int>.
     *
     * @param { Set<int> } set - A set object to convert to an array.
     * @returns { Int16Array } - A new Int16Array
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<int>): Int16Array;

    /**
     * Creates an array from an array of the same type.
     *
     * @param { Int16Array } arr - An array to convert to a new array.
     * @returns { Int16Array } - A new Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Int16Array): Int16Array;

    /**
     * Creates an array from an array of the same up to the signedness type.
     *
     * @param { Uint16Array } arr - An array to convert to a new array.
     * @returns { Int16Array } - A new Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Uint16Array): Int16Array;

    /**
     * Creates an array from an object of std.core.Array<int>.
     *
     * @param { Array<int> } arr - An instance of the std.core.Array type to convert to an array.
     * @returns { Int16Array } - A new Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<int>): Int16Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { ArrayLike<double> } arrayLike - An array-like or iterable object to convert to an array.
     * @returns { Int16Array } - A new Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: ArrayLike<double>): Int16Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { ArrayLike<T> } arrayLike - An array-like or iterable object to convert to an array.
     * @param { function } mapfn - A mapping function to call on every element of the array.
     * @returns { Int16Array } - A new Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => double): Int16Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { Iterable<double> } arrayLike - An array-like or iterable object to convert to an array.
     * @param { function } [mapfn] - A mapping function to call on every element of the array.
     *     Defaults to the identity function (returns the element unchanged).
     * @returns { Int16Array } - A new Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => double): Int16Array;

    /**
     * Determines whether Int16Array includes a certain element, returning true or false as appropriate
     *
     * @param { short } searchElement - The element to search for
     * @param { int } fromIndex - The position in this array at which to begin searching for searchElement
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Int16Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: short, fromIndex: int): boolean;

    /**
     * Determines whether Int16Array includes a certain element, returning true or false as appropriate
     *
     * @param { short } searchElement - The element to search for. The search starts at index 0.
     * @returns { boolean } - true if searchElement is in Int16Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: short): boolean;

    /**
     * Determines whether Int16Array includes a certain element, returning true or false as appropriate
     *
     * @param { double } searchElement - The element to search for
     * @param { int } [fromIndex] - The position in this array at which to begin searching for searchElement.
     *     Defaults to 0.
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Int16Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * Returns the index of the first occurrence of a value in Int16Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search starts at index 0.
     * @returns { int } - index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Int16Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the first occurrence of a value in Int16Array.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int } [fromIndex] - The array index at which to begin the search.
     *     If fromIndex is undefined, the search starts at index 0.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: double, fromIndex?: int): int;

    /**
     * Adds all the elements of an array separated by the specified separator string
     *
     * @param { string } [separator] - A string used to separate one element of an array from the next in the
     *     resulting string. If omitted, the array elements are separated with a comma.
     * @returns { string } - a string with all array elements joined by the specified separator.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * Returns a list of indices in the Int16Array
     *
     * @returns { IterableIterator<int> } - iterator over indices.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns the index of the last occurrence of a value in Int16Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * Returns the index of the last occurrence of a value in Int16Array.
     *
     * @param { double } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * Returns the index of the last occurrence of a value in Int16Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - rightmost index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the last occurrence of a value in Int16Array.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int | undefined } fromIndex - The array index at which to begin the search.
     *      Defaults to the array length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * Creates a new Int16Array using reversed data from the current one
     *
     * @returns { Int16Array } - a new Int16Array using reversed data from the current one
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Int16Array;

    /**
     * Creates a slice of current Int16Array using range [begin, this.length).
     *
     * @param { int } begin - start index to be taken into slice
     * @returns { Int16Array } - a new Int16Array with elements of current Int16Array[begin, this.length)
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Int16Array;

    /**
     * Creates a slice of current Int16Array using range [begin, end)
     *
     * @param { int } [begin] - start index to be taken into slice. Defaults to 0.
     * @param { int } [end] - last index to be taken into slice. Defaults to the array length.
     * @returns { Int16Array } - a new Int16Array with elements of current Int16Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Int16Array;

    /**
     * Creates a new Int16Array that shares the same underlying ArrayBuffer as the current array,
     * optionally with a restricted range.
     *
     * @param { int } [begin] - start index, inclusive. Defaults to 0.
     * @param { int } [end] - last index, exclusive. Defaults to the array length.
     * @returns { Int16Array } - a new Int16Array with the same underlying ArrayBuffer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Int16Array;

    /**
     * Converts this object to a locale-specific string representation
     *
     * @param { Intl.LocalesArgument } [locales] - A string with a BCP 47 language tag, or an
     *     array of such strings.
     * @param { object } [options] - An object with some or all of the properties of the
     *     Intl.NumberFormat options.
     * @returns { string } result of the locale-specific conversion
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

    /**
     * Returns a new Int16Array with the elements in reverse order. The original array is not modified.
     *
     * @returns { Int16Array } - a new Int16Array with the elements in reverse order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Int16Array;

    /**
     * Returns a new Int16Array with the elements sorted in ascending order. The original array is not modified.
     *
     * @returns { Int16Array } - a new Int16Array with the elements sorted in ascending order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Int16Array;

    /**
     * Returns a comma-separated string representation of the Int16Array elements.
     *
     * @returns { string } - a comma-separated string of the array elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * Returns array values iterator
     *
     * @returns { IterableIterator<double> } - an iterator
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<double>;

    /**
     * Iterable interface implementation.
     *
     * @returns { IterableIterator<double> } - iterator over all elements
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<double>;

    /**
     * Returns a new Int16Array with the element at the given index replaced by the given value.
     * The original array is not modified.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { short } value - value to set
     * @returns { Int16Array } - a new Int16Array with the element at index replaced by value.
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: short): Int16Array;

    /**
     * Returns a new Int16Array with the element at the given index replaced by the given value.
     * The original array is not modified.
     *
     * @param { int } index - index to change.
     *     <br>The value should be an integer.
     * @param { double } value - value to set.
     * @returns { Int16Array } - a new Int16Array with the element at index replaced by value.
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Int16Array;

    /**
     * Finds the last element in the Int16Array that satisfies the condition
     *
     * @param { function } fn - A function to test each element. Should return true for the element to be found.
     * @returns { double } - the last element that satisfies fn
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double) => boolean): double;

    /**
     * Sorts in-place by numeric value in ascending order.
     *
     * @returns { this } - sorted Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(): this;

    /**
     * Sorts in-place
     *
     * @param { function } [compareFn] - comparator used to determine the order of the elements.
     *     compareFn returns a negative value if first argument is less than second argument,
     *     zero if they're equal and a positive value otherwise.
     *     Defaults to an ascending numeric sort.
     * @returns { this } - sorted Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * Determines whether the specified callback function returns true for any element of an array.
     *
     * @param { function } predicate - A function that accepts three arguments.
     *     The some method calls the predicate function for each element in the array
     *     until the predicate returns a true or until the end of the array.
     * @returns { boolean } - false unless predicate function returns true for an array element,
     *     in which case true is immediately returned.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public some(predicate: (element: double, index: int, array: Int16Array) => boolean): boolean;

    /**
     * Calls the specified callback function for all the elements in an array.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - The parameter which value is used as the initial value to start the accumulation.
     *     The first call to the callbackfn function provides this value as an argument.
     * @returns { U } - the accumulated result from the last call to the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Int16Array) => U,
        initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array first element value as an argument
     * @returns { double } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } - If the Int16Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Int16Array) => double): double;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - The parameter which value is used as the initial value to start the accumulation.
     * @returns { U } - the accumulated result from the last call to the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Int16Array) => U,
        initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array last element value as an argument.
     * @returns { double } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } - If the Int16Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Int16Array) => double): double;

    /**
     * Creates a new Int16Array using fn(arr[i]) over all elements of current Int16Array.
     *
     * @param { function } fn - a function to apply for each element of current Int16Array
     * @returns { Int16Array } - a new Int16Array where for each element from current Int16Array fn was applied
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Int16Array) => double): Int16Array;

    /**
     * Determines whether the specified callback function returns true for all elements of an array.
     *
     * @param { function } predicate - A function that accepts three arguments.
     *     The every method calls the predicate function for each element in the array until the predicate
     *     returns a false, or until the end of the array.
     * @returns { boolean } - true unless predicate function returns a false for an array element,
     *     in which case false is immediately returned.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public every(predicate: (element: double, index: int, array: Int16Array) => boolean): boolean;

    /**
     * Creates a new Int16Array from current Int16Array based on a condition fn.
     *
     * @param { function } fn - the condition to apply for each element
     * @returns { Int16Array } - a new Int16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Int16Array) => boolean): Int16Array;

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found, find
     *     immediately returns that element value. Otherwise, find returns undefined
     * @returns { double | undefined }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, obj: Int16Array) => boolean): double | undefined;

    /**
     * Returns the index of the first element in the array where predicate is true, and -1 otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found,
     *     findIndex immediately returns that element index. Otherwise, findIndex returns -1
     * @returns { int } - Index of the first matched element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Int16Array) => boolean): int;

    /**
     * Finds the last element in the Int16Array that satisfies the condition
     *
     * @param { function } fn - A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { short } - the last element that satisfies fn
     * @throws { Error } - If the element cannot be found, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Int16Array) => boolean): short;

    /**
     * Finds an index of the last element in the Int16Array that satisfies the condition
     *
     * @param { function } fn -  A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { int } - the index of the last element that satisfies fn, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Int16Array) => boolean): int;

    /**
     * Calls the given callback function once for each element in the Int16Array, in ascending order.
     *
     * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the
     *     callbackfn function one time for each element in the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Int16Array) => void): void;

    /**
     * Returns the object itself
     *
     * @returns { Int16Array }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Int16Array;

    /**
     * Underlying ArrayBuffer
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;
    /**
     * Byte offset within the underlying ArrayBuffer
     * The value should be an integer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteOffset: int;
    /**
     * Number of bytes used
     * The value should be an integer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteLength: int;
    /**
     * String \"Int16Array\", representing the type name of this typed array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Int16Array';
}

/**
 * class Int32Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Int32Array {
    /**
     * Number of bytes occupied by each element
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 4;

    /**
     * Creates an empty Int32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * Creates an Int32Array with respect to length.
     *
     * @param { int } length - Number of elements
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * Creates an Int32Array with respect to length.
     *
     * @param { double } length - Number of elements
     * @throws { RangeError } - If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * Creates a copy of Int32Array.
     *
     * @param { Int32Array } other - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Int32Array);

    /**
     * Creates an Int32Array from FixedArray<int>
     *
     * @param { FixedArray<int> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * Creates an Int32Array from FixedArray<double>
     *
     * @param { FixedArray<double> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * Creates an Int32Array from Array<int>
     *
     * @param { Array<int> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: Array<int>);

    /**
     * Creates an Int32Array with respect to data accessed via Iterable<Number> interface
     *
     * @param { Iterable<double> } elements - an iterable object
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * Creates an Int32Array with respect to buf and byteOffset.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * Creates an Int32Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double } byteOffset - byte offset from begin of the buf
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * Creates an Int32Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @param { int } length - size of elements of type int in newly created Int32Array
     *     <br>The value should be an integer.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int, length: int);

    /**
     * Creates an Int32Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double | undefined } byteOffset - byte offset from begin of the buf
     * @param { double | undefined } length - size of elements of type int in newly created Int32Array
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * Creates an Int32Array with respect to buf.
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - data initializer
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { int } val - value to set
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: int): void;

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { double } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * Number of int stored in Int32Array
     *
     * @returns { int } - the number of elements
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * Returns an instance of number at passed index.
     *
     * @param { int } index - index to look at
     *     <br>The value should be an integer.
     * @returns { double } - the raw numeric value at index.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(index: int): double;

    /**
     * Returns an instance of primitive type at passed index.
     *
     * @param { int } index - index to look at
     *     <br>The value should be an integer.
     * @returns { double | undefined } - the raw numeric value at index, or undefined if the index is out of bounds.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     * See rules of parameters normalization on
     *
     * @param { int } target - insert index to place copied elements
     * @param { int } start - start index to begin copy from
     * @param { int } [end] - last index to end copy from, excluded. Defaults to the array length.
     * @returns { Int32Array } The modified Int32Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Int32Array;

    /**
     * Makes a copy of internal elements to targetPos from begin to end of Int32Array.
     * See rules of parameters normalization on
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @returns { Int32Array } The modified Int32Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Int32Array;

    /**
     * Returns an array of key, value pairs for every entry in the Int32Array
     *
     * @returns { IterableIterator<[int, double]> } - key, value pairs for every entry in the array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * Fills the Int32Array with specified value
     *
     * @param { int } value - new value
     * @param { int } [start] - start index to begin fill from. Defaults to 0.
     * @param { int } [end] - last index to end fill from, excluded. Defaults to the array length.
     * @returns { this } - modified Int32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: int, start?: int, end?: int): this;

    /**
     * Fills the Int32Array with specified value
     *
     * @param { double } value - new value
     * @param { int } [start] - start index to begin fill from. Defaults to 0.
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded. Defaults to the array length.
     *     <br>The value should be an integer.
     * @returns { this } - modified Int32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): this;

    /**
     * Assigns val as element on insertPos.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { int } val - value to set
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: int): void;

    /**
     * Assigns val as element on insertPos.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { double } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * Copies all elements of arr to the current Int32Array.
     *
     * @param { FixedArray<int> } arr - array to copy data from
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<int>): void;

    /**
     * Copies all elements of arr to the current Int32Array starting from insertPos.
     *
     * @param { FixedArray<int> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<int>, insertPos: int): void;

    /**
     * Copies all elements of arr to the current Int32Array.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * Copies all elements of arr to the current Int32Array starting from insertPos.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * Copies all elements of array to the current Int32Array.
     *
     * @param { Int32Array } array - array to copy data from
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Int32Array): void;

    /**
     * Copies all elements of arr to the current Int32Array starting from offset.
     *
     * @param { Int32Array } array - array to copy data from
     * @param { int } offset - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Int32Array, offset: int): void;

    /**
     * Copies elements from an ArrayLike object to the Int32Array.
     *
     * @param { ArrayLike<double> } array - An ArrayLike object containing the elements to copy.
     * @param { int } [offset] - Optional. The offset into the target array at which to begin
     *     writing values from the source array. The default value is 0.
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<int> } items - a set of elements to include in the new array object.
     * @returns { Int32Array } - a new Int32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Int32Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<double> } items - a set of elements to include in the new array object.
     * @returns { Int32Array } - a new Int32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Int32Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @returns { Int32Array } - a new Int32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Int32Array;

    /**
     * Creates an array from an object of FixedArray<int>.
     *
     * @param { FixedArray<int> } arr - An instance of the FixedArray type to convert to an array.
     * @returns { Int32Array } - A new Int32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<int>): Int32Array;

    /**
     * Creates an array from a set of type std.core.Set<int>.
     *
     * @param { Set<int> } set - A set object to convert to an array.
     * @returns { Int32Array } - A new Int32Array
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<int>): Int32Array;

    /**
     * Creates an array from an array of the same type.
     *
     * @param { Int32Array } arr - An array to convert to a new array.
     * @returns { Int32Array } - A new Int32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Int32Array): Int32Array;

    /**
     * Creates an array from an object of std.core.Array<int>.
     *
     * @param { Array<int> } arr - An instance of the std.core.Array type to convert to an array.
     * @returns { Int32Array } - A new Int32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<int>): Int32Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { ArrayLike<double> } arrayLike - An array-like or iterable object to convert to an array.
     * @returns { Int32Array } - A new Int32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: ArrayLike<double>): Int32Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { ArrayLike<T> } arrayLike - An array-like or iterable object to convert to an array.
     * @param { function } mapfn - A mapping function to call on every element of the array.
     * @returns { Int32Array } - A new Int32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => double): Int32Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { Iterable<double> } arrayLike - An array-like or iterable object to convert to an array.
     * @param { function } [mapfn] - A mapping function to call on every element of the array.
     *     Defaults to the identity function (returns the element unchanged).
     * @returns { Int32Array } - A new Int32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => double): Int32Array;

    /**
     * Determines whether Int32Array includes a certain element, returning true or false as appropriate
     *
     * @param { int } searchElement - The element to search for
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The position in this array at which to begin searching for searchElement
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Int32Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: int, fromIndex: int): boolean;

    /**
     * Determines whether Int32Array includes a certain element, returning true or false as appropriate
     *
     * @param { int } searchElement - The element to search for. The search starts at index 0.
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Int32Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: int): boolean;

    /**
     * Determines whether Int32Array includes a certain element, returning true or false as appropriate
     *
     * @param { double } searchElement - The element to search for
     * @param { int } [fromIndex] - The position in this array at which to begin searching for searchElement.
     *     Defaults to 0.
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Int32Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * Returns the index of the first occurrence of a value in Int32Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search starts at index 0.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Int32Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The array index at which to begin the search.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the first occurrence of a value in Int32Array.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int } [fromIndex] - The array index at which to begin the search.
     *     Defaults to 0.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: double, fromIndex?: int): int;

    /**
     * Adds all the elements of an array separated by the specified separator string
     *
     * @param { string } [separator] - A string used to separate one element of an array from the next in the
     *     resulting string. If omitted, the array elements are separated with a comma.
     * @returns { string } - a string with all array elements joined by the specified separator.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * Returns a list of indices in the Int32Array.
     *
     * @returns { IterableIterator<int> } - iterator over indices.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns the index of the last occurrence of a value in Int32Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * Returns the index of the last occurrence of a value in Int32Array.
     *
     * @param { double } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * Returns the index of the last occurrence of a value in Int32Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - rightmost index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the last occurrence of a value in Int32Array.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int | undefined } fromIndex - The array index at which to begin the search.
     *     Defaults to the array length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * Creates a new Int32Array using reversed data from the current one
     *
     * @returns { Int32Array } - a new Int32Array using reversed data from the current one
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Int32Array;

    /**
     * Creates a slice of current Int32Array using range [begin, this.length).
     *
     * @param { int } begin - start index to be taken into slice
     * @returns { Int32Array } - a new Int32Array with elements of current Int32Array[begin, this.length)
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Int32Array;

    /**
     * Creates a slice of current Int32Array using range [begin, end)
     *
     * @param { int } [begin] - start index to be taken into slice. Defaults to 0.
     * @param { int } [end] - last index to be taken into slice. Defaults to the array length.
     * @returns { Int32Array } - a new Int32Array with elements of current Int32Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Int32Array;

    /**
     * Creates a new Int32Array that shares the same underlying ArrayBuffer as the current array,
     * optionally with a restricted range.
     *
     * @param { int } [begin] - start index, inclusive. Defaults to 0.
     * @param { int } [end] - last index, exclusive. Defaults to the array length.
     * @returns { Int32Array } - a new Int32Array with the same underlying ArrayBuffer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Int32Array;

    /**
     * Converts this object to a locale-specific string representation
     *
     * @param { Intl.LocalesArgument } [locales] - A string with a BCP 47 language tag, or an
     *     array of such strings.
     * @param { object } [options] - An object with some or all of the properties of the
     *     Intl.NumberFormat options.
     * @returns { string } result of the locale-specific conversion
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

    /**
     * Returns a new Int32Array with the elements in reverse order. The original array is not modified.
     *
     * @returns { Int32Array } - a new Int32Array with the elements in reverse order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Int32Array;

    /**
     * Returns a new Int32Array with the elements sorted in ascending order. The original array is not modified.
     *
     * @returns { Int32Array } - a new Int32Array with the elements sorted in ascending order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Int32Array;

    /**
     * Returns a comma-separated string representation of the Int32Array elements.
     *
     * @returns { string } - a comma-separated string of the array elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * Returns an iterator over the values of the Int32Array, in ascending order.
     *
     * @returns { IterableIterator<double> } - an iterator over all elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<double>;

    /**
     * Iterable interface implementation
     *
     * @returns { IterableIterator<double> } - iterator over all elements
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<double>;

    /**
     * Returns a new Int32Array with the element at the given index replaced by the given value.
     * The original array is not modified.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { int } value - value to set
     *     <br>The value should be an integer.
     * @returns { Int32Array } - a new Int32Array with the element at index replaced by value.
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: int): Int32Array;

    /**
     * Returns a new Int32Array with the element at the given index replaced by the given value.
     * The original array is not modified.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { double } value - value to set
     * @returns { Int32Array } - a new Int32Array with the element at index replaced by value.
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Int32Array;

    /**
     * Finds the last element in the Int32Array that satisfies the condition
     *
     * @param { function } fn - A function to test each element. Should return true for the element to be found.
     * @returns { double } - the last element that satisfies fn
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double) => boolean): double;

    /**
     * Sorts in-place by numeric value in ascending order.
     *
     * @returns { this } - sorted Int32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(): this;

    /**
     * Sorts in-place
     *
     * @param { function } [compareFn] - comparator used to determine the order of the elements.
     *     compareFn returns a negative value if first argument is less than second argument,
     *     zero if they're equal and a positive value otherwise.
     *     Defaults to an ascending numeric sort.
     * @returns { this } - sorted Int32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * Determines whether the specified callback function returns true for any element of an array.
     *
     * @param { function } predicate - A function that accepts three arguments.
     *     The some method calls the predicate function for each element in the array
     *     until the predicate returns a true or until the end of the array.
     * @returns { boolean } - false unless predicate function returns true for an array element,
     *     in which case true is immediately returned.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public some(predicate: (element: double, index: int, array: Int32Array) => boolean): boolean;

    /**
     * Calls the specified callback function for all the elements in an array.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - The parameter which value is used as the initial value to start the accumulation.
     *     The first call to the callbackfn function provides this value as an argument.
     * @returns { U } - the accumulated result from the last call to the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Int32Array) => U,
        initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array first element value as an argument
     * @returns { double } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } - If the Int32Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Int32Array) => double): double;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - The parameter which value is used as the initial value to start the accumulation.
     * @returns { U } - the accumulated result from the last call to the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Int32Array) => U,
        initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array last element value as an argument.
     * @returns { double } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } - If the Int32Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Int32Array) => double): double;

    /**
     * Creates a new Int32Array using fn(arr[i]) over all elements of current Int32Array.
     *
     * @param { function } fn - a function to apply for each element of current Int32Array
     * @returns { Int32Array } - a new Int32Array where for each element from current Int32Array fn was applied
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Int32Array) => double): Int32Array;

    /**
     * Determines whether the specified callback function returns true for all elements of an array.
     *
     * @param { function } predicate - A function that accepts three arguments.
     *     The every method calls the predicate function for each element in the array until the predicate
     *     returns a false, or until the end of the array.
     * @returns { boolean } - true unless predicate function returns a false for an array element,
     *     in which case false is immediately returned.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public every(predicate: (element: double, index: int, array: Int32Array) => boolean): boolean;

    /**
     * Creates a new Int32Array from current Int32Array based on a condition fn.
     *
     * @param { function } fn - the condition to apply for each element
     * @returns { Int32Array } - a new Int32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Int32Array) => boolean): Int32Array;

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found, find
     *     immediately returns that element value. Otherwise, find returns undefined
     * @returns { double | undefined }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, obj: Int32Array) => boolean): double | undefined;

    /**
     * Returns the index of the first element in the array where predicate is true, and -1 otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found,
     *     findIndex immediately returns that element index. Otherwise, findIndex returns -1
     * @returns { int } - Index of the first matched element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Int32Array) => boolean): int;

    /**
     * Finds the last element in the Int32Array that satisfies the condition
     *
     * @param { function } fn -  A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { int } - the last element that satisfies fn
     * @throws { Error } - If the element cannot be found, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Int32Array) => boolean): int;

    /**
     * Finds an index of the last element in the Int32Array that satisfies the condition
     *
     * @param { function } fn - A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { int } - the index of the last element that satisfies fn, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Int32Array) => boolean): int;

    /**
     * Calls the given callback function once for each element in the Int32Array, in ascending order.
     *
     * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the
     *     callbackfn function one time for each element in the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Int32Array) => void): void;

    /**
     * Returns the object itself
     *
     * @returns { Int32Array }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Int32Array;

    /**
     * Underlying ArrayBuffer
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;

    /**
     * Byte offset within the underlying ArrayBuffer
     * The value should be an integer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteOffset: int;

    /**
     * Number of bytes used
     * The value should be an integer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteLength: int;

    /**
     * String \"Int32Array\", representing the type name of this typed array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Int32Array';
}

/**
 * class BigInt64Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class BigInt64Array {
    /**
     * double of bytes occupied by each element
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 8;

    /**
     * Creates an empty BigInt64Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * Creates a BigInt64Array with respect to length.
     *
     * @param { int } length - double of elements
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * Creates a BigInt64Array with respect to length.
     *
     * @param { double } length - double of elements
     * @throws { RangeError } - If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * Creates a copy of BigInt64Array.
     *
     * @param { BigInt64Array } other - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: BigInt64Array);

    /**
     * Creates a BigInt64Array from FixedArray<int>
     *
     * @param { FixedArray<int> } doubles - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(doubles: FixedArray<int>);

    /**
     * Creates a BigInt64Array from FixedArray<double>
     *
     * @param { FixedArray<double> } doubles - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(doubles: FixedArray<double>);

    /**
     * Creates a BigInt64Array from FixedArray<bigint>
     *
     * @param { FixedArray<bigint> } doubles - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(doubles: FixedArray<bigint>);

    /**
     * Creates a BigInt64Array with respect to data accessed via Iterable<double> interface
     *
     * @param { Iterable<BigInt> } elements - an iterable object
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<BigInt>);

    /**
     * Creates a BigInt64Array with respect to buf and byteOffset.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * Creates a BigInt64Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double } byteOffset - byte offset from begin of the buf
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * Creates a BigInt64Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @param { int } length - size of elements of type long in newly created BigInt64Array
     *     <br>The value should be an integer.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int, length: int);

    /**
     * Creates a BigInt64Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double | undefined } byteOffset - byte offset from begin of the buf
     * @param { double | undefined } length - size of elements of type long in newly created BigInt64Array
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * Creates a BigInt64Array with respect to buf.
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - data initializer
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     *     <br>The value range is all integers.
     * @param { long } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: long): void;

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     * @param { BigInt } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: BigInt): void;

    /**
     * double of long stored in BigInt64Array
     *
     * @returns { int } - the double of elements
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * Returns an instance of BigInt at passed index.
     *
     * @param { int } index - index to look at.
     *     <br>The value should be an integer.
     * @returns { BigInt } - the raw numeric value at index.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(index: int): BigInt;

    /**
     * Returns an instance of primitive type at passed index.
     *
     * @param { int } index - index to look at
     *     <br>The value should be an integer.
     * @returns { BigInt | undefined } - the raw numeric value at index, or undefined if the index is out of bounds.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): BigInt | undefined;

    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     * See rules of parameters normalization on
     *
     * @param { int } target - insert index to place copied elements
     * @param { int } start - start index to begin copy from
     * @param { int } [end] - last index to end copy from, excluded. Defaults to the array length.
     * @returns { BigInt64Array } The modified BigInt64Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): BigInt64Array;

    /**
     * Makes a copy of internal elements to targetPos from begin to end of BigInt64Array.
     * See rules of parameters normalization on
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @returns { BigInt64Array } The modified BigInt64Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): BigInt64Array;

    /**
     * Returns an array of key, value pairs for every entry in the BigInt64Array
     *
     * @returns { IterableIterator<[int, BigInt]> } - key, value pairs for every entry in the array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, BigInt]>;

    /**
     * Fills the BigInt64Array with specified value
     *
     * @param { long } value - new value
     * @param { int } [start] - start index to begin fill from. Defaults to 0.
     * @param { int } [end] - last index to end fill from, excluded. Defaults to the array length.
     * @returns { this } - modified BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: long, start?: int, end?: int): this;

    /**
     * Fills the BigInt64Array with specified value
     *
     * @param { BigInt } value - new value
     * @param { int } [start] - start index to begin fill from. Defaults to 0.
     * @param { int } [end] - last index to end fill from, excluded. Defaults to the array length.
     * @returns { this } - modified BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: BigInt, start?: int, end?: int): this;

    /**
     * Assigns val as element on insertPos.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { long } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: long): void;

    /**
     * Assigns val as element on insertPos.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { BigInt } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: BigInt): void;

    /**
     * Copies all elements of arr to the current BigInt64Array.
     *
     * @param { FixedArray<long> } arr - array to copy data from
     * @throws { RangeError } - If the double of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<long>): void;

    /**
     * Copies all elements of arr to the current BigInt64Array starting from insertPos.
     *
     * @param { FixedArray<long> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the double of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<long>, insertPos: int): void;

    /**
     * Copies all elements of arr to the current BigInt64Array.
     *
     * @param { FixedArray<BigInt> } arr - array to copy data from
     * @throws { RangeError } - If the double of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<BigInt>): void;

    /**
     * Copies all elements of arr to the current BigInt64Array starting from insertPos.
     *
     * @param { FixedArray<BigInt> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the double of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<BigInt>, insertPos: int): void;

    /**
     * Copies all elements of array to the current BigInt64Array.
     *
     * @param { BigInt64Array } array - array to copy data from
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: BigInt64Array): void;

    /**
     * Copies all elements of arr to the current BigInt64Array starting from offset.
     *
     * @param { BigInt64Array } array - array to copy data from
     * @param { int } offset - start index where data from arr will be inserted
     *     <br>The value range is all integers.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonlyl
     */
    public set(array: BigInt64Array, offset: int): void;

    
    /**
    * Copies elements from an ArrayLike object to the BigInt64Array.
    *
    * @param { ArrayLike<BigInt> } array - An ArrayLike object containing the elements to copy.
    * @param { int } [offset] - Optional. The offset into the target array at which to begin
    *     writing values from the source array. The default value is 0.
    *     <br>The value should be an integer.
    * @throws { RangeError } - If the double of assigned elements exceeds the array range, throw an exception
    * @syscap SystemCapability.Utils.Lang
    * @stagemodelonly
    * @since 26.0.0 staticonly
    */
     public set(array: ArrayLike<BigInt>, offset: int = 0): void;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<int> } items - a set of elements to include in the new array object.
     * @returns { BigInt64Array } - a new BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): BigInt64Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<long> } items - a set of elements to include in the new array object.
     * @returns { BigInt64Array } - a new BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<long>): BigInt64Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<bigint> } items - a set of elements to include in the new array object.
     * @returns { BigInt64Array } - a new BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<bigint>): BigInt64Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<double> } items - a set of elements to include in the new array object.
     * @returns { BigInt64Array } - a new BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): BigInt64Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @returns { BigInt64Array } - a new BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): BigInt64Array;

    /**
     * Creates an array from an object of FixedArray<BigInt>.
     *
     * @param { FixedArray<BigInt> } arr - An instance of the FixedArray type to convert to an array.
     * @returns { BigInt64Array } - A new BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<BigInt>): BigInt64Array;

    /**
     * Creates an array from a set of type std.core.Set<BigInt>.
     *
     * @param { Set<BigInt> } set - A set object to convert to an array.
     * @returns { BigInt64Array } - A new BigInt64Array
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<BigInt>): BigInt64Array;

    /**
     * Creates an array from an array of the same type.
     *
     * @param { BigInt64Array } arr - An array to convert to a new array.
     * @returns { BigInt64Array } - A new BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: BigInt64Array): BigInt64Array;

    /**
     * Creates an array from an object of std.core.Array<BigInt>.
     *
     * @param { Array<BigInt> } arr - An instance of the std.core.Array type to convert to an array.
     * @returns { BigInt64Array } - A new BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<BigInt>): BigInt64Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { ArrayLike<double> } arrayLike - An array-like or iterable object to convert to an array.
     * @returns { BigInt64Array } - A new BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: ArrayLike<double>): BigInt64Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { ArrayLike<T> } arrayLike - An array-like or iterable object to convert to an array.
     * @param { function } mapfn - A mapping function to call on every element of the array.
     * @returns { BigInt64Array } - A new BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => BigInt): BigInt64Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { Iterable<BigInt> } arrayLike - An array-like or iterable object to convert to an array.
     * @param { function } [mapfn] - A mapping function to call on every element of the array.
     *     Defaults to the identity function (returns the element unchanged).
     * @returns { BigInt64Array } - A new BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<BigInt>, mapfn?: (v: BigInt, k: double) => BigInt): BigInt64Array;

    /**
     * Determines whether BigInt64Array includes a certain element, returning true or false as appropriate
     *
     * @param { long } searchElement - The element to search for
     * @param { int } fromIndex - The position in this array at which to begin searching for searchElement
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in BigInt64Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: long, fromIndex: int): boolean;

    /**
     * Determines whether BigInt64Array includes a certain element, returning true or false as appropriate
     *
     * @param { long } searchElement - The element to search for. The search starts at index 0.
     * @returns { boolean } - true if searchElement is in BigInt64Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: long): boolean;

    /**
     * Determines whether BigInt64Array includes a certain element, returning true or false as appropriate
     *
     * @param { BigInt } searchElement - The element to search for
     * @param { int } [fromIndex] - The position in this array at which to begin searching for searchElement.
     *     Defaults to 0.
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in BigInt64Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: BigInt, fromIndex?: int): boolean;

    /**
     * Returns the index of the first occurrence of a value in BigInt64Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search starts at index 0.
     * @returns { int } - index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in BigInt64Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the first occurrence of a value in BigInt64Array.
     *
     * @param { BigInt } searchElement - The value to locate in the array.
     * @param { int } [fromIndex] - The array index at which to begin the search.
     *      Defaults to 0.
     *     <br>The value should be an integer.
     * @returns { int } -index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: BigInt, fromIndex?: int): int;

    /**
     * Adds all the elements of an array separated by the specified separator string
     *
     * @param { string } [separator] - A string used to separate one element of an array from the next in the
     *     resulting string. If omitted, the array elements are separated with a comma.
     * @returns { string } - a string with all array elements joined by the specified separator.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * Returns a list of indices in the BigInt64Array.
     *
     * @returns { IterableIterator<int> } - iterator over indices.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns the index of the last occurrence of a value in BigInt64Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * Returns the index of the last occurrence of a value in BigInt64Array.
     *
     * @param { BigInt } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: BigInt): int;

    /**
     * Returns the index of the last occurrence of a value in BigInt64Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - rightmost index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the last occurrence of a value in BigInt64Array.
     *
     * @param { BigInt } searchElement - The value to locate in the array.
     * @param { int | undefined } fromIndex - The array index at which to begin the search.
     *     Defaults to the array length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: BigInt, fromIndex: int | undefined): int;

    /**
     * Creates a new BigInt64Array using reversed data from the current one
     *
     * @returns { BigInt64Array } - a new BigInt64Array using reversed data from the current one
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): BigInt64Array;

    /**
     * Creates a slice of current BigInt64Array using range [begin, this.length).
     *
     * @param { int } begin - start index to be taken into slice
     * @returns { BigInt64Array } - a new BigInt64Array with elements of current BigInt64Array[begin, this.length)
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): BigInt64Array;

    /**
     * Creates a slice of current BigInt64Array using range [begin, end)
     *
     * @param { int } [begin] - start index to be taken into slice. Defaults to 0.
     * @param { int } [end] - last index to be taken into slice. Defaults to the array length.
     * @returns { BigInt64Array } - a new BigInt64Array with elements of current BigInt64Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): BigInt64Array;

    /**
     * Creates a new BigInt64Array that shares the same underlying ArrayBuffer as the current array,
     * optionally with a restricted range.
     *
     * @param { int } [begin] - start index, inclusive. Defaults to 0.
     * @param { int } [end] - last index, exclusive. Defaults to the array length.
     * @returns { BigInt64Array } - a new BigInt64Array with the same underlying ArrayBuffer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): BigInt64Array;

    /**
     * Converts this object to a locale-specific string representation
     *
     * @param { Intl.LocalesArgument } [locales] - A string with a BCP 47 language tag, or an
     *     array of such strings.
     * @param { object } [options] - An object with some or all of the properties of the
     *     Intl.NumberFormat options.
     * @returns { string } result of the locale-specific conversion
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

    /**
     * Returns a new BigInt64Array with the elements in reverse order. The original array is not modified.
     *
     * @returns { BigInt64Array } - a new BigInt64Array with the elements in reverse order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): BigInt64Array;

    /**
     * Returns a new BigInt64Array with the elements sorted in ascending order. The original array is not modified.
     *
     * @returns { BigInt64Array } - a new BigInt64Array with the elements sorted in ascending order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): BigInt64Array;

    /**
     * Returns a comma-separated string representation of the BigInt64Array elements.
     *
     * @returns { string } - a comma-separated string of the array elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * Returns an iterator over the values of the BigInt64Array, in ascending order.
     *
     * @returns { IterableIterator<BigInt> } - an iterator over all elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<BigInt>;

    /**
     * Iterable interface implementation
     *
     * @returns { IterableIterator<BigInt> } - iterator over all elements
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<BigInt>;

    /**
     * Returns a new BigInt64Array with the element at the given index replaced by the given value.
     * The original array is not modified.
     *
     * @param { int } index - index to change
     *     <br>The value range is all integers.
     * @param { long } value - value to set
     * @returns { BigInt64Array } - a new BigInt64Array with the element at index replaced by value.
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: long): BigInt64Array;

    /**
     * Returns a new BigInt64Array with the element at the given index replaced by the given value.
     * The original array is not modified.
     *
     * @param { int } index - index to change
     *     <br>The value range is all integers.
     * @param { BigInt } value - value to set
     * @returns { BigInt64Array } - a new BigInt64Array with the element at index replaced by value.
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: BigInt): BigInt64Array;

    /**
     * Finds the last element in the BigInt64Array that satisfies the condition
     *
     * @param { function } fn - A function to test each element. Should return true for the element to be found.
     * @returns { BigInt } - the last element that satisfies fn
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: BigInt) => boolean): BigInt;

    /**
     * Sorts in-place by numeric value in ascending order.
     *
     * @returns { this } - sorted BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(): this;

    /**
     * Sorts in-place
     *
     * @param { function } [compareFn] - comparator used to determine the order of the elements.
     *     compareFn returns a negative value if first argument is less than second argument,
     *     zero if they're equal and a positive value otherwise.
     *     Defaults to an ascending numeric sort.
     * @returns { this } - sorted BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: BigInt, b: BigInt) => int | BigInt): this;

    /**
     * Determines whether the specified callback function returns true for any element of an array.
     *
     * @param { function } predicate - A function that accepts three arguments.
     *     The some method calls the predicate function for each element in the array
     *     until the predicate returns a true or until the end of the array.
     * @returns { boolean } - false unless predicate function returns true for an array element,
     *     in which case true is immediately returned.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public some(predicate: (element: BigInt, index: int, array: BigInt64Array) => boolean): boolean;

    /**
     * Calls the specified callback function for all the elements in an array.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - The parameter which value is used as the initial value to start the accumulation.
     *     The first call to the callbackfn function provides this value as an argument.
     * @returns { U } - the accumulated result from the last call to the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce<U = BigInt>( callbackfn: (previousValue: U, currentValue: BigInt, currentIndex: int,
        array: BigInt64Array) => U, initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array first element value as an argument
     * @returns { BigInt } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } - If the BigInt64Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: BigInt, currentValue: BigInt, currentIndex: int,
        array: BigInt64Array) => BigInt): BigInt;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - The parameter which value is used as the initial value to start the accumulation.
     * @returns { U } - the accumulated result from the last call to the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = BigInt>(
        callbackfn: (previousValue: U, currentValue: BigInt, currentIndex: int, array: BigInt64Array) => U,
        initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array last element value as an argument.
     * @returns { BigInt } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } - If the BigInt64Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: BigInt, currentValue: BigInt, currentIndex: int,
        array: BigInt64Array) => BigInt): BigInt;

    /**
     * Creates a new BigInt64Array using fn(arr[i]) over all elements of current BigInt64Array.
     *
     * @param { function } fn - a function to apply for each element of current BigInt64Array
     * @returns { BigInt64Array } - a new BigInt64Array where for each element from current BigInt64Array fn was applied
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: BigInt, index: int, array: BigInt64Array) => BigInt): BigInt64Array;

    /**
     * Determines whether the specified callback function returns true for all elements of an array.
     *
     * @param { function } predicate - A function that accepts three arguments.
     *     The every method calls the predicate function for each element in the array until the predicate
     *     returns a false, or until the end of the array.
     * @returns { boolean } - true unless predicate function returns a false for an array element,
     *     in which case false is immediately returned.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public every(predicate: (element: BigInt, index: int, array: BigInt64Array) => boolean): boolean;

    /**
     * Creates a new BigInt64Array from current BigInt64Array based on a condition fn.
     *
     * @param { function } fn - the condition to apply for each element
     * @returns { BigInt64Array } - a new BigInt64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: BigInt, index: int, array: BigInt64Array) => boolean): BigInt64Array;

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found, find
     *     immediately returns that element value. Otherwise, find returns undefined
     * @returns { BigInt | undefined }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: BigInt, index: int, obj: BigInt64Array) => boolean): BigInt | undefined;

    /**
     * Returns the index of the first element in the array where predicate is true, and -1 otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found,
     *     findIndex immediately returns that element index. Otherwise, findIndex returns -1
     * @returns { int } - Index of the first matched element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: BigInt, index: int, obj: BigInt64Array) => boolean): int;

    /**
     * Finds the last element in the BigInt64Array that satisfies the condition
     *
     * @param { function } fn - A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { long } - the last element that satisfies fn
     * @throws { Error } - If the element cannot be found, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: BigInt, index: int, array: BigInt64Array) => boolean): long;

    /**
     * Finds an index of the last element in the BigInt64Array that satisfies the condition
     *
     * @param { function } fn -  A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { int } - the index of the last element that satisfies fn, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: BigInt, index: int, array: BigInt64Array) => boolean): int;

    /**
     * Calls the given callback function once for each element in the BigInt64Array, in ascending order.
     *
     * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the
     *     callbackfn function one time for each element in the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: BigInt, index: int, array: BigInt64Array) => void): void;

    /**
     * Returns the object itself
     *
     * @returns { BigInt64Array }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): BigInt64Array;

    /**
     * Underlying ArrayBuffer
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;

    /**
     * Byte offset within the underlying ArrayBuffer
     * The value range is all integers.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteOffset: int;

    /**
     * Number of bytes used
     * The value range is all integers.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteLength: int;

    /**
     * String \"BigInt64Array\", representing the type name of this typed array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'BigInt64Array';
}

/**
 * class Float32Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Float32Array {
    /**
     * Number of bytes occupied by each element
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 4;

    /**
     * Creates an empty Float32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * Creates a Float32Array with respect to length.
     *
     * @param { int } length - Number of elements
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * Creates a Float32Array with respect to length.
     *
     * @param { double } length - Number of elements
     * @throws { RangeError } - If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * Creates a copy of Float32Array.
     *
     * @param { Float32Array } other - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Float32Array);

    /**
     * Creates a Float32Array from FixedArray<int>
     *
     * @param { FixedArray<int> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * Creates a Float32Array from FixedArray<double>
     *
     * @param { FixedArray<double> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * Creates a Float32Array with respect to data accessed via Iterable<double> interface
     *
     * @param { Iterable<double> } elements - an iterable object
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * Creates a Float32Array with respect to buf and byteOffset.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * Creates a Float32Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double } byteOffset - byte offset from begin of the buf
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * Creates a Float32Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @param { int } length - size of elements of type float in newly created Float32Array
     *     <br>The value should be an integer.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int, length: int);

    /**
     * Creates a Float32Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double | undefined } byteOffset - byte offset from begin of the buf
     * @param { double | undefined } length - size of elements of type float in newly created Float32Array
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * Creates a Float32Array with respect to buf.
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - data initializer
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { float } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: float): void;

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { double } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * Number of float stored in Float32Array
     *
     * @returns { int } - the number of elements
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * Returns an instance of number at passed index.
     *
     * @param { int } index - index to look at
     *     <br>The value should be an integer.
     * @returns { double } - the raw numeric value at index.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(index: int): double;

    /**
     * Returns an instance of primitive type at passed index.
     *
     * @param { int } index - index to look at
     *     <br>The value should be an integer.
     * @returns { double | undefined } - the raw numeric value at index, or undefined if the index is out of bounds.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     * See rules of parameters normalization on
     *
     * @param { int } target - insert index to place copied elements
     * @param { int } start - start index to begin copy from
     * @param { int } [end] - last index to end copy from, excluded. Defaults to the array length.
     * @returns { Float32Array } The modified Float32Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Float32Array;

    /**
     * Makes a copy of internal elements to targetPos from begin to end of Float32Array.
     * See rules of parameters normalization on
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @returns { Float32Array } The modified Float32Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Float32Array;

    /**
     * Returns an array of key, value pairs for every entry in the Float32Array
     *
     * @returns { IterableIterator<[int, double]> } - key, value pairs for every entry in the array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * Fills the Float32Array with specified value
     *
     * @param { float } value - new value
     * @param { int } [start] - start index to begin fill from. Defaults to 0.
     * @param { int } [end] - last index to end fill from, excluded. Defaults to the array length.
     * @returns { this } - modified Float32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: float, start?: int, end?: int): this;

    /**
     * Fills the Float32Array with specified value
     *
     * @param { double } value - new value
     * @param { int } [start] - start index to begin fill from. Defaults to 0.
     * @param { int } [end] - last index to end fill from, excluded. Defaults to the array length.
     * @returns { this } - modified Float32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): this;

    /**
     * Assigns val as element on insertPos.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { float } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: float): void;

    /**
     * Assigns val as element on insertPos.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { double } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * Copies all elements of arr to the current Float32Array.
     *
     * @param { FixedArray<float> } arr - array to copy data from
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<float>): void;

    /**
     * Copies all elements of arr to the current Float32Array starting from insertPos.
     *
     * @param { FixedArray<float> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<float>, insertPos: int): void;

    /**
     * Copies all elements of arr to the current Float32Array.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * Copies all elements of arr to the current Float32Array starting from insertPos.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * Copies all elements of array to the current Float32Array.
     *
     * @param { Float32Array } array - array to copy data from
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Float32Array): void;

    /**
     * Copies all elements of arr to the current Float32Array starting from offset.
     *
     * @param { Float32Array } array - array to copy data from
     * @param { int } offset - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Float32Array, offset: int): void;

    /**
     * Copies elements from an ArrayLike object to the Float32Array.
     *
     * @param { ArrayLike<double> } array - An ArrayLike object containing the elements to copy.
     * @param { int } [offset] - Optional. The offset into the target array at which to begin
     *     writing values from the source array. The default value is 0.
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<int> } items - a set of elements to include in the new array object.
     * @returns { Float32Array } - a new Float32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Float32Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<float> } items - a set of elements to include in the new array object.
     * @returns { Float32Array } - a new Float32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<float>): Float32Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<double> } items - a set of elements to include in the new array object.
     * @returns { Float32Array } - a new Float32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Float32Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @returns { Float32Array } - a new Float32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Float32Array;

    /**
     * Creates an array from an object of FixedArray<double>.
     *
     * @param { FixedArray<double> } arr - An instance of the FixedArray type to convert to an array.
     * @returns { Float32Array } - A new Float32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<double>): Float32Array;

    /**
     * Creates an array from a set of type std.core.Set<double>.
     *
     * @param { Set<double> } set - A set object to convert to an array.
     * @returns { Float32Array } - A new Float32Array
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<double>): Float32Array;

    /**
     * Creates an array from an array of the same type.
     *
     * @param { Float32Array } arr - An array to convert to a new array.
     * @returns { Float32Array } - A new Float32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Float32Array): Float32Array;

    /**
     * Creates an array from an object of std.core.Array<double>.
     *
     * @param { Array<double> } arr - An instance of the std.core.Array type to convert to an array.
     * @returns { Float32Array } - A new Float32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<double>): Float32Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { ArrayLike<double> } arrayLike - An array-like or iterable object to convert to an array.
     * @returns { Float32Array } - A new Float32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: ArrayLike<double>): Float32Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { ArrayLike<T> } arrayLike - An array-like or iterable object to convert to an array.
     * @param { function } mapfn - A mapping function to call on every element of the array.
     * @returns { Float32Array } - A new Float32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => double): Float32Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { Iterable<double> } arrayLike - An array-like or iterable object to convert to an array.
     * @param { function } [mapfn] - A mapping function to call on every element of the array.
     *     Defaults to the identity function (returns the element unchanged).
     * @returns { Float32Array } - A new Float32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => double): Float32Array;

    /**
     * Determines whether Float32Array includes a certain element, returning true or false as appropriate
     *
     * @param { float } searchElement - The element to search for
     * @param { int } fromIndex - The position in this array at which to begin searching for searchElement
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Float32Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: float, fromIndex: int): boolean;

    /**
     * Determines whether Float32Array includes a certain element, returning true or false as appropriate
     *
     * @param { float } searchElement - The element to search for. The search starts at index 0.
     * @returns { boolean } - true if searchElement is in Float32Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: float): boolean;

    /**
     * Determines whether Float32Array includes a certain element, returning true or false as appropriate
     *
     * @param { double } searchElement - The element to search for
     * @param { int } [fromIndex] - The position in this array at which to begin searching for searchElement.
     *     Defaults to 0.
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Float32Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * Returns the index of the first occurrence of a value in Float32Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search starts at index 0.
     * @returns { int } - index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Float32Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the first occurrence of a value in Float32Array.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int } [fromIndex] - The array index at which to begin the search.
     *     Defaults to 0.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: double, fromIndex?: int): int;

    /**
     * Adds all the elements of an array separated by the specified separator string
     *
     * @param { string } [separator] - A string used to separate one element of an array from the next in the
     *     resulting String. If omitted, the array elements are separated with a comma.
     * @returns { string } - a string with all array elements joined by the specified separator.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * Returns a list of indices in the Float32Array
     *
     * @returns { IterableIterator<int> } - iterator over indices.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns the index of the last occurrence of a value in Float32Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * Returns the index of the last occurrence of a value in Float32Array.
     *
     * @param { double } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * Returns the index of the last occurrence of a value in Float32Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - rightmost index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the last occurrence of a value in Float32Array.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int | undefined } fromIndex - The array index at which to begin the search.
     *     Defaults to the array length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * Creates a new Float32Array using reversed data from the current one
     *
     * @returns { Float32Array } - a new Float32Array using reversed data from the current one
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Float32Array;

    /**
     * Creates a slice of current Float32Array using range [begin, this.length).
     *
     * @param { int } begin - start index to be taken into slice
     * @returns { Float32Array } - a new Float32Array with elements of current Float32Array[begin, this.length)
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Float32Array;

    /**
     * Creates a slice of current Float32Array using range [begin, end)
     *
     * @param { int } [begin] - start index to be taken into slice. Defaults to 0.
     * @param { int } [end] - last index to be taken into slice. Defaults to the array length.
     * @returns { Float32Array } - a new Float32Array with elements of current Float32Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Float32Array;

    /**
     * Creates a new Float32Array that shares the same underlying ArrayBuffer as the current array,
     * optionally with a restricted range.
     *
     * @param { int } [begin] - start index, inclusive. Defaults to 0.
     * @param { int } [end] - last index, exclusive. Defaults to the array length.
     * @returns { Float32Array } - a new Float32Array with the same underlying ArrayBuffer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Float32Array;

    /**
     * Converts this object to a locale-specific string representation
     *
     * @param { Intl.LocalesArgument } [locales] - A string with a BCP 47 language tag, or an
     *     array of such strings.
     * @param { object } [options] - An object with some or all of the properties of the
     *     Intl.NumberFormat options.
     * @returns { string } result of the locale-specific conversion
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

    /**
     * Returns a new Float32Array with the elements in reverse order. The original array is not modified.
     *
     * @returns { Float32Array } - a new Float32Array with the elements in reverse order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Float32Array;

    /**
     * Returns a new Float32Array with the elements sorted in ascending order. The original array is not modified.
     *
     * @returns { Float32Array } - a new Float32Array with the elements sorted in ascending order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Float32Array;

    /**
     * Returns a comma-separated string representation of the Float32Array elements.
     *
     * @returns { string } - a comma-separated string of the array elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * Returns an iterator over the values of the Float32Array, in ascending order.
     *
     * @returns { IterableIterator<double> } - an iterator over all elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<double>;

    /**
     * Iteratorable interface implementation
     *
     * @returns { IterableIterator<double> } - iterator over all elements
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<double>;

    /**
     * Returns a new Float32Array with the element at the given index replaced by the given value.
     * The original array is not modified.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { float } value - value to set
     * @returns { Float32Array } - a new Float32Array with the element at index replaced by value.
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: float): Float32Array;

    /**
     * Returns a new Float32Array with the element at the given index replaced by the given value.
     * The original array is not modified.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { double } value - value to set
     * @returns { Float32Array } - a new Float32Array with the element at index replaced by value.
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Float32Array;

    /**
     * Finds the last element in the Float32Array that satisfies the condition
     *
     * @param { function } fn - A function to test each element. Should return true for the element to be found.
     * @returns { double } - the last element that satisfies fn
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double) => boolean): double;

    /**
     * Sorts in-place by numeric value in ascending order.
     *
     * @returns { this } - sorted Float32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(): this;

    /**
     * Sorts in-place
     *
     * @param { function } [compareFn] - comparator used to determine the order of the elements.
     *     compareFn returns a negative value if first argument is less than second argument,
     *     zero if they're equal and a positive value otherwise.
     *      Defaults to an ascending numeric sort.
     * @returns { this } - sorted Float32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * Determines whether the specified callback function returns true for any element of an array.
     *
     * @param { function } predicate - A function that accepts three arguments.
     *     The some method calls the predicate function for each element in the array
     *     until the predicate returns a true or until the end of the array.
     * @returns { boolean } - false unless predicate function returns true for an array element,
     *     in which case true is immediately returned.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public some(predicate: (element: double, index: int, array: Float32Array) => boolean): boolean;

    /**
     * Calls the specified callback function for all the elements in an array.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - The parameter which value is used as the initial value to start the accumulation.
     *     The first call to the callbackfn function provides this value as an argument.
     * @returns { U } - the accumulated result from the last call to the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int,
        array: Float32Array) => U, initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array first element value as an argument
     * @returns { double } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } - If the Float32Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Float32Array) => double): double;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - The parameter which value is used as the initial value to start the accumulation.
     * @returns { U } - the accumulated result from the last call to the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>( callbackfn: (previousValue: U, currentValue: double, currentIndex: int,
        array: Float32Array) => U, initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array last element value as an argument.
     * @returns { double } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } - If the Float32Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Float32Array) => double): double;

    /**
     * Creates a new Float32Array using fn(arr[i]) over all elements of current Float32Array.
     *
     * @param { function } fn - a function to apply for each element of current Float32Array
     * @returns { Float32Array } - a new Float32Array where for each element from current Float32Array fn was applied
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Float32Array) => double): Float32Array;

    /**
     * Determines whether the specified callback function returns true for all elements of an array.
     *
     * @param { function } predicate - A function that accepts three arguments.
     *     The every method calls the predicate function for each element in the array until the predicate
     *     returns a false, or until the end of the array.
     * @returns { boolean } - true unless predicate function returns a false for an array element,
     *     in which case false is immediately returned.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public every(predicate: (element: double, index: int, array: Float32Array) => boolean): boolean;

    /**
     * Creates a new Float32Array from current Float32Array based on a condition fn.
     *
     * @param { function } fn - the condition to apply for each element
     * @returns { Float32Array } - a new Float32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Float32Array) => boolean): Float32Array;

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found, find
     *     immediately returns that element value. Otherwise, find returns undefined
     * @returns { double | undefined }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, obj: Float32Array) => boolean): double | undefined;

    /**
     * Returns the index of the first element in the array where predicate is true, and -1 otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found,
     *     findIndex immediately returns that element index. Otherwise, findIndex returns -1
     * @returns { int } - Index of the first matched element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Float32Array) => boolean): int;

    /**
     * Finds the last element in the Float32Array that satisfies the condition
     *
     * @param { function } fn - A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { float } - the last element that satisfies fn
     * @throws { Error } - If the element cannot be found, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Float32Array) => boolean): float;

    /**
     * Finds an index of the last element in the Float32Array that satisfies the condition
     *
     * @param { function } fn - A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { int } - the index of the last element that satisfies fn, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Float32Array) => boolean): int;

    /**
     * Calls the given callback function once for each element in the Float32Array, in ascending order.
     *
     * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the
     *     callbackfn function one time for each element in the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Float32Array) => void): void;

    /**
     * Returns the object itself
     *
     * @returns { Float32Array }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Float32Array;

    /**
     * Underlying ArrayBuffer
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;
    /**
     * Byte offset within the underlying ArrayBuffer
     * The value should be an integer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteOffset: int;
    /**
     * Number of bytes used
     * The value should be an integer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteLength: int;
    /**
     * String \"Float32Array\", representing the type name of this typed array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Float32Array';
}

/**
 * class Float64Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Float64Array {
    /**
     * Number of bytes occupied by each element
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 8;

    /**
     * Creates an empty Float64Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * Creates a Float64Array with respect to length.
     *
     * @param { int } length - Number of elements
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * Creates a Float64Array with respect to length.
     *
     * @param { double } length - Number of elements
     * @throws { RangeError } - If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * Creates a copy of Float64Array.
     *
     * @param { Float64Array } other - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Float64Array);

    /**
     * Creates a Float64Array from FixedArray<int>
     *
     * @param { FixedArray<int> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * Creates a Float64Array from FixedArray<double>
     *
     * @param { FixedArray<double> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * Creates a Float64Array with respect to data accessed via Iterable<double> interface
     *
     * @param { Iterable<double> } elements - an iterable object
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * Creates a Float64Array with respect to buf and byteOffset.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * Creates a Float64Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double } byteOffset - byte offset from begin of the buf
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * Creates a Float64Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @param { int } length - size of elements of type double in newly created Float64Array
     *     <br>The value should be an integer.
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int, length: int);

    /**
     * Creates a Float64Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double | undefined } byteOffset - byte offset from begin of the buf
     * @param { double | undefined } length - size of elements of type double in newly created Float64Array
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * Creates a Float64Array with respect to buf.
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - data initializer
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { double } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * Number of double stored in Float64Array
     *
     * @returns { int } - the number of elements
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * Returns an instance of number at passed index.
     *
     * @param { int } index - index to look at
     *     <br>The value should be an integer.
     * @returns { double } - the raw numeric value at index.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(index: int): double;

    /**
     * Returns an instance of primitive type at passed index.
     *
     * @param { int } index - index to look at
     * @returns { double | undefined } - the raw numeric value at index, or undefined if the index is out of bounds.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     * See rules of parameters normalization on
     *
     * @param { int } target - insert index to place copied elements
     * @param { int } start - start index to begin copy from
     * @param { int } [end] - last index to end copy from, excluded. Defaults to the array length.
     * @returns { Float64Array } The modified Float64Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Float64Array;

    /**
     * Makes a copy of internal elements to targetPos from begin to end of Float64Array.
     * See rules of parameters normalization on
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @returns { Float64Array } The modified Float64Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Float64Array;

    /**
     * Returns an array of key, value pairs for every entry in the Float64Array
     *
     * @returns { IterableIterator<[int, double]> } - key, value pairs for every entry in the array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * Fills the Float64Array with specified value
     *
     * @param { double } value - new value
     * @param { int } [start] - start index to begin fill from. Defaults to 0.
     * @param { int } [end] - last index to end fill from, excluded. Defaults to the array length.
     * @returns { this } - modified Float64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): this;

    /**
     * Assigns val as element on insertPos.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { double } val - value to set
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * Copies all elements of arr to the current Float64Array.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * Copies all elements of arr to the current Float64Array starting from insertPos.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * Copies all elements of array to the current Float64Array.
     *
     * @param { Float64Array } array - array to copy data from
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Float64Array): void;

    /**
     * Copies all elements of arr to the current Float64Array starting from offset.
     *
     * @param { Float64Array } array - array to copy data from
     * @param { int } offset - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Float64Array, offset: int): void;

    /**
     * Copies elements from an ArrayLike object to the Float64Array.
     *
     * @param { ArrayLike<double> } array - An ArrayLike object containing the elements to copy.
     * @param { int } [offset] - Optional. The offset into the target array at which to begin
     *     writing values from the source array. The default value is 0.
     *     <br>The value should be an integer.
     * @throws { RangeError } - If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<int> } items - a set of elements to include in the new array object.
     * @returns { Float64Array } - a new Float64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Float64Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<double> } items - a set of elements to include in the new array object.
     * @returns { Float64Array } - a new Float64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Float64Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @returns { Float64Array } - a new Float64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Float64Array;

    /**
     * Creates an array from an object of FixedArray<double>.
     *
     * @param { FixedArray<double> } arr - An instance of the FixedArray type to convert to an array.
     * @returns { Float64Array } - A new Float64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<double>): Float64Array;

    /**
     * Creates an array from a set of type std.core.Set<double>.
     *
     * @param { Set<double> } set - A set object to convert to an array.
     * @returns { Float64Array } - A new Float64Array
     * @throws { RangeError } - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<double>): Float64Array;

    /**
     * Creates an array from an array of the same type.
     *
     * @param { Float64Array } arr - An array to convert to a new array.
     * @returns { Float64Array } - A new Float64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Float64Array): Float64Array;

    /**
     * Creates an array from an object of std.core.Array<double>.
     *
     * @param { Array<double> } arr - An instance of the std.core.Array type to convert to an array.
     * @returns { Float64Array } - A new Float64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<double>): Float64Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { ArrayLike<double> } arrayLike - An array-like or iterable object to convert to an array.
     * @returns { Float64Array } - A new Float64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: ArrayLike<double>): Float64Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { ArrayLike<T> } arrayLike - An array-like or iterable object to convert to an array.
     * @param { function } mapfn - A mapping function to call on every element of the array.
     * @returns { Float64Array } - A new Float64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => double): Float64Array;

    /**
     * Creates an array from an array-like or iterable object.
     *
     * @param { Iterable<double> } arrayLike - An array-like or iterable object to convert to an array.
     * @param { function } [mapfn] - A mapping function to call on every element of the array.
     *     Defaults to the identity function (returns the element unchanged).
     * @returns { Float64Array } - A new Float64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => double): Float64Array;

    /**
     * Determines whether Float64Array includes a certain element, returning true or false as appropriate
     *
     * @param { double } searchElement - The element to search for
     * @param { int } [fromIndex] - The position in this array at which to begin searching for searchElement.
     *     Defaults to 0.
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Float64Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * Returns the index of the first occurrence of a value in Float64Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search starts at index 0.
     * @returns { int } - index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Float64Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the first occurrence of a value in Float64Array.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int } [fromIndex] - The array index at which to begin the search.
     *     If fromIndex is undefined, the search starts at index 0.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if found, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: double, fromIndex?: int): int;

    /**
     * Adds all the elements of an array separated by the specified separator string
     *
     * @param { string } [separator] - A string used to separate one element of an array from the next in the
     *     resulting String. If omitted, the array elements are separated with a comma.
     * @returns { string } - a string with all array elements joined by the specified separator.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * Returns a list of indices in the Float64Array.
     *
     * @returns { IterableIterator<int> } - iterator over indices.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns the index of the last occurrence of a value in Float64Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * Returns the index of the last occurrence of a value in Float64Array.
     *
     * @param { double } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * Returns the index of the last occurrence of a value in Float64Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - rightmost index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the last occurrence of a value in Float64Array.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int | undefined } fromIndex - The array index at which to begin the search.
     *     Defaults to the array length - 1.
     * @returns { int } - rightmost index of searchElement. It must be less or equal than fromIndex. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * Creates a new Float64Array using reversed data from the current one
     *
     * @returns { Float64Array } - a new Float64Array using reversed data from the current one
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Float64Array;

    /**
     * Creates a slice of current Float64Array using range [begin, this.length).
     *
     * @param { int } begin - start index to be taken into slice
     *     <br>The value should be an integer.
     * @returns { Float64Array } - a new Float64Array with elements of current Float64Array[begin, this.length)
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Float64Array;

    /**
     * Creates a slice of current Float64Array using range [begin, end)
     *
     * @param { int } [begin] - start index to be taken into slice. Defaults to 0.
     * @param { int } [end] - last index to be taken into slice. Defaults to the array length.
     * @returns { Float64Array } - a new Float64Array with elements of current Float64Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Float64Array;

    /**
     * Creates a new Float64Array that shares the same underlying ArrayBuffer as the current array,
     * optionally with a restricted range.
     *
     * @param { int } [begin] - start index, inclusive. Defaults to 0.
     * @param { int } [end] - last index, exclusive. Defaults to the array length.
     * @returns { Float64Array } - a new Float64Array with the same underlying ArrayBuffer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Float64Array;

    /**
     * Converts this object to a locale-specific string representation
     *
     * @param { Intl.LocalesArgument } [locales] - A string with a BCP 47 language tag, or an
     *     array of such strings.
     * @param { object } [options] - An object with some or all of the properties of the
     *     Intl.NumberFormat options.
     * @returns { string } result of the locale-specific conversion
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleString(locales?: Intl.LocalesArgument, options?: object): string;

    /**
     * Returns a new Float64Array with the elements in reverse order. The original array is not modified.
     *
     * @returns { Float64Array } - a new Float64Array with the elements in reverse order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Float64Array;

    /**
     * Returns a new Float64Array with the elements sorted in ascending order. The original array is not modified.
     *
     * @returns { Float64Array } - a new Float64Array with the elements sorted in ascending order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Float64Array;

    /**
     * Returns a comma-separated string representation of the Float64Array elements.
     *
     * @returns { string } - a comma-separated string of the array elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * Returns an iterator over the values of the Float64Array, in ascending order.
     *
     * @returns { IterableIterator<Double> } - an iterator over all elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<Double>;

    /**
     * Iterable interface implementation
     *
     * @returns { IterableIterator<Double> } - iterator over all elements
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<Double>;

    /**
     * Returns a new Float64Array with the element at the given index replaced by the given value.
     * The original array is not modified.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { double } value - value to set
     * @returns { Float64Array } - a new Float64Array with the element at index replaced by value.
     * @throws { RangeError } - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Float64Array;

    /**
     * Finds the last element in the Float64Array that satisfies the condition
     *
     * @param { function } fn - A function to test each element. Should return true for the element to be found.
     * @returns { double } - the last element that satisfies fn
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double) => boolean): double;

    /**
     * Sorts in-place by numeric value in ascending order.
     *
     * @returns { this } - sorted Float64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(): this;

    /**
     * Sorts in-place
     *
     * @param { function } [compareFn] - comparator used to determine the order of the elements.
     *     compareFn returns a negative value if first argument is less than second argument,
     *     zero if they're equal and a positive value otherwise.
     *     Defaults to an ascending numeric sort.
     * @returns { this } - sorted Float64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * Determines whether the specified callback function returns true for any element of an array.
     *
     * @param { function } predicate - A function that accepts three arguments.
     *     The some method calls the predicate function for each element in the array
     *     until the predicate returns a true or until the end of the array.
     * @returns { boolean } - false unless predicate function returns true for an array element,
     *     in which case true is immediately returned.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public some(predicate: (element: double, index: int, array: Float64Array) => boolean): boolean;

    /**
     * Calls the specified callback function for all the elements in an array.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - The parameter which value is used as the initial value to start the accumulation.
     *     The first call to the callbackfn function provides this value as an argument.
     * @returns { U } - the accumulated result from the last call to the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Float64Array) => U,
        initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array first element value as an argument
     * @returns { double } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } - If the Float64Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Float64Array) => double): double;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - The parameter which value is used as the initial value to start the accumulation.
     * @returns { U } - the accumulated result from the last call to the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Float64Array) => U,
        initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array last element value as an argument.
     * @returns { double } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } - If the Float64Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Float64Array) => double): double;

    /**
     * Creates a new Float64Array using fn(arr[i]) over all elements of current Float64Array.
     *
     * @param { function } fn - a function to apply for each element of current Float64Array
     * @returns { Float64Array } - a new Float64Array where for each element from current Float64Array fn was applied
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Float64Array) => double): Float64Array;

    /**
     * Determines whether the specified callback function returns true for all elements of an array.
     *
     * @param { function } predicate - A function that accepts three arguments.
     *     The every method calls the predicate function for each element in the array until the predicate
     *     returns a false, or until the end of the array.
     * @returns { boolean } - true unless predicate function returns a false for an array element,
     *     in which case false is immediately returned.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public every(predicate: (element: double, index: int, array: Float64Array) => boolean): boolean;

    /**
     * Creates a new Float64Array from current Float64Array based on a condition fn.
     *
     * @param { function } fn - the condition to apply for each element
     * @returns { Float64Array } - a new Float64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Float64Array) => boolean): Float64Array;

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found, find
     *     immediately returns that element value. Otherwise, find returns undefined
     * @returns { double | undefined }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, obj: Float64Array) => boolean): double | undefined;

    /**
     * Returns the index of the first element in the array where predicate is true, and -1 otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found,
     *     findIndex immediately returns that element index. Otherwise, findIndex returns -1
     * @returns { int } - Index of the first matched element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Float64Array) => boolean): int;

    /**
     * Finds the last element in the Float64Array that satisfies the condition
     *
     * @param { function } fn - A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { double } - the last element that satisfies fn
     * @throws { Error } - If the element cannot be found, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Float64Array) => boolean): double;

    /**
     * Finds an index of the last element in the Float64Array that satisfies the condition
     *
     * @param { function } fn - A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { int } - the index of the last element that satisfies fn, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Float64Array) => boolean): int;

    /**
     * Calls the given callback function once for each element in the Float64Array, in ascending order.
     *
     * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the
     *     callbackfn function one time for each element in the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Float64Array) => void): void;

    /**
     * Returns the object itself
     *
     * @returns { Float64Array }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Float64Array;

    /**
     * Underlying ArrayBuffer
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;

    /**
     * Byte offset within the underlying ArrayBuffer
     * The value should be an integer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteOffset: int;

    /**
     * Number of bytes used
     * The value should be an integer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly byteLength: int;

    /**
     * String \"Float64Array\", representing the type name of this typed array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Float64Array';

}
