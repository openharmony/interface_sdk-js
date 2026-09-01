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
 * class Uint8ClampedArray
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Uint8ClampedArray {
    /**
     * Number of bytes occupied by each element
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 1;

    /**
     * Underlying Buffer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;

    /**
     * Creates an empty Uint8ClampedArray.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * Clamps a double value to an 8-bit unsigned integer in the range [0, 255].
     *
     * @param { double } val - the floating point value to be converted and clamped.
     * @returns { int } - the clamped 8-bit unsigned integer value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toUint8Clamped(val: double): int;

    /**
     * Creates an Uint8ClampedArray with respect to length.
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
     * Creates an Uint8ClampedArray with respect to length.
     *
     * @param { double } length - Number of elements
     * @throws { RangeError } - If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * Creates an Uint8ClampedArray from FixedArray<int>
     *
     * @param { FixedArray<int> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * Creates an Uint8ClampedArray from FixedArray<double>
     *
     * @param { FixedArray<double> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * Creates an Uint8ClampedArray from Array<int>
     *
     * @param { Array<int> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: Array<int>);

    /**
     * Creates a copy of Uint8ClampedArray.
     *
     * @param { Uint8ClampedArray } other - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Uint8ClampedArray);

    /**
     * Creates an Uint8ClampedArray with respect to data accessed via Iterable<double> interface
     *
     * @param { Iterable<double> } elements - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * Creates an Uint8ClampedArray with respect to data, byteOffset and length.
     *
     * @param { ArrayBufferLike } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @param { int } length - size of elements of type int in newly created Uint8ClampedArray
     *     <br>The value should be an integer.
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBufferLike, byteOffset: int, length: int);

    /**
     * Creates an Uint8ClampedArray with respect to buf and byteOffset.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * Creates an Uint8ClampedArray with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double | undefined } byteOffset - byte offset from begin of the buf
     * @param { double | undefined } length - size of elements of type int in newly created Uint8ClampedArray
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * Creates an Uint8ClampedArray with respect to buf and byteOffset.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double } byteOffset - byte offset from begin of the buf
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * Creates an Uint8ClampedArray with respect to buf.
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - data initializer
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

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
     * Returns the element at the given index, supporting negative indices
     * which count from the end of the array.
     *
     * @param { int } index - index to look at
     *     <br>The value should be an integer.
     * @returns { double | undefined } - the element at the index, or undefined if out of bounds.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * Returns the internal numeric value at the given index without boxing.
     *
     * @param { int } i - index to look at
     *     <br>The value should be an integer.
     * @returns { double } - the raw numeric value at index.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(i: int): double;

    /**
     * Sets the value at the given index without boxing.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { double } val - value to set
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     *
     * @param { int } target - insert index to place copied elements
     * @param { int } start - start index to begin copy from
     * @param { int } [end] - last index to end copy from, excluded. Defaults to the array length.
     * @returns { Uint8ClampedArray } - the modified Uint8ClampedArray
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Uint8ClampedArray;

    /**
     * Makes a copy of internal elements to targetPos from begin to end of Uint8ClampedArray.
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @returns { Uint8ClampedArray } - the modified Uint8ClampedArray.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Uint8ClampedArray;

    /**
     * Returns an array of key, value pairs for every entry in the Uint8ClampedArray
     *
     * @returns { IterableIterator<[int, double]> } - key, value pairs for every entry in the array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * Fills the Uint8ClampedArray with specified value
     *
     * @param { int } value - new value.
     *     <br>The value should be an integer.
     * @param { int } [start] - start index to begin fill from, defaults to 0.
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded, defaults to the array length.
     *     <br>The value should be an integer.
     * @returns { Uint8ClampedArray } - modified Uint8ClampedArray
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: int, start?: int, end?: int): Uint8ClampedArray;

    /**
     * Fills the Uint8ClampedArray with specified value
     *
     * @param { double } value - new value.
     * @param { int } [start] - start index to begin fill from, defaults to 0.
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded, defaults to the array length.
     *     <br>The value should be an integer.
     * @returns { Uint8ClampedArray } - modified Uint8ClampedArray
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): Uint8ClampedArray;

    /**
     * Assigns val as element on index.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { int } val - value to set
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: int): void;

    /**
     * Assigns val as element on index.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { double } val - value to set
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * Copies all elements of arr to the current Uint8ClampedArray starting from insertPos.
     *
     * @param { FixedArray<int> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<int>, insertPos: int): void;

    /**
     * Copies all elements of arr to the current Uint8ClampedArray starting from insertPos.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * Copies all elements of arr to the current Uint8ClampedArray.
     *
     * @param { FixedArray<int> } arr - array to copy data from
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<int>): void;

    /**
     * Copies all elements of arr to the current Uint8ClampedArray.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * Copies all elements of arr to the current Uint8ClampedArray.
     *
     * @param { Uint8ClampedArray } array - array to copy data from
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Uint8ClampedArray): void;

    /**
     * Copies all elements of arr to the current Uint8ClampedArray.
     *
     * @param { Uint8ClampedArray } array - array to copy data from
     * @param { int } offset - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Uint8ClampedArray, offset: int): void;

    /**
     * Copies elements from an ArrayLike object to the Uint8ClampedArray.
     *
     * @param { ArrayLike<double> } array - An ArrayLike object containing the elements to copy.
     * @param { int } [offset] - Optional. The offset into the target array at which to begin
     *     writing values from the source array. The default value is 0.
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<short> } items - a set of elements to include in the new array object.
     * @returns { Uint8ClampedArray } - a new Uint8ClampedArray
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<short>): Uint8ClampedArray;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<int> } items - a set of elements to include in the new array object.
     * @returns { Uint8ClampedArray } - a new Uint8ClampedArray
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Uint8ClampedArray;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<double> } items - a set of elements to include in the new array object.
     * @returns { Uint8ClampedArray } - a new Uint8ClampedArray
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Uint8ClampedArray;

    /**
     * Returns a new array from a set of elements.
     *
     * @returns { Uint8ClampedArray } - a new Uint8ClampedArray
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Uint8ClampedArray;

    /**
     * Creates an array from an object of FixedArray<int>.
     *
     * @param { FixedArray<int> } arr - An instance of the FixedArray type to convert to an array.
     * @returns { Uint8ClampedArray } - A new Uint8ClampedArray
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<int>): Uint8ClampedArray;

    /**
     * Creates an array from a set of type std.core.Set<int>.
     *
     * @param { Set<int> } set - A set object to convert to an array.
     * @returns { Uint8ClampedArray } - A new Uint8ClampedArray
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<int>): Uint8ClampedArray;

    /**
     * Creates an array from an array of the same type.
     *
     * @param { Uint8ClampedArray } arr - An array to convert to a new array.
     * @returns { Uint8ClampedArray } - A new Uint8ClampedArray
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Uint8ClampedArray): Uint8ClampedArray;

    /**
     * Creates an array from an object of std.core.Array<int>.
     *
     * @param { Array<int> } arr - An instance of the std.core.Array type to convert to an array.
     * @returns { Uint8ClampedArray } - A new Uint8ClampedArray
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<int>): Uint8ClampedArray;

    /**
     * Creates an array from an array-like object.
     *
     * @param { ArrayLike<double> } arr - An array-like object to convert to an array.
     * @returns { Uint8ClampedArray } - A new Uint8ClampedArray
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: ArrayLike<double>): Uint8ClampedArray;

    /**
     * Creates an array from an array-like object.
     *
     * @param { ArrayLike<T> } arrayLike - An array-like object to convert to an array.
     * @param { function } mapfn - A mapping function to call on every element of the array.
     * @returns { Uint8ClampedArray } - A new Uint8ClampedArray
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => double): Uint8ClampedArray;

    /**
     * Creates an array from an iterable object.
     *
     * @param { Iterable<double> } arrayLike - An iterable object to convert to an array.
     * @param { function } [mapfn] - A function to call on every element of the array.
     *     Defaults to the identity function (returns the element unchanged).
     * @returns { Uint8ClampedArray } - A new Uint8ClampedArray
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => double): Uint8ClampedArray;

    /**
     * Determines whether Uint8ClampedArray includes a certain element, returning true or false as appropriate
     *
     * @param { int } searchElement - The element to search for
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The position in this array at which to begin searching for searchElement
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Uint8ClampedArray, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: int, fromIndex: int): boolean;

    /**
     * Determines whether Uint8ClampedArray includes a certain element, returning true or false as appropriate
     *
     * @param { int } searchElement - The element to search for. The search starts at index 0.
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Uint8ClampedArray, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: int): boolean;

    /**
     * Determines whether Uint8ClampedArray includes a certain element, returning true or false as appropriate
     *
     * @param { double } searchElement - The element to search for.
     * @param { int } [fromIndex] - The position in this array at which to begin searching.Defaults to 0.
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Uint8ClampedArray, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * Returns the index of the first occurrence of a value in Uint8ClampedArray.
     *
     * @param { int } searchElement - The value to locate in the array. The search starts at index 0.
     * @returns { int } - index of element if present, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Uint8ClampedArray.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - index of element if present, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the first occurrence of a value in Uint8ClampedArray.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int } [fromIndex] - The array index at which to begin the search. Defaults to 0.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if present, -1 otherwise
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
     * @returns { string } - a string of all array elements joined by the separator.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * Returns a list of the indices in the Uint8ClampedArray.
     *
     * @returns { IterableIterator<int> } - iterator over the array indices.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns the index of the last occurrence of a value in Uint8ClampedArray.
     *
     * @param { int } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - right-most index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * Returns the index of the last occurrence of a value in Uint8ClampedArray.
     *
     * @param { double } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - right-most index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * Returns the index of the last occurrence of a value in Uint8ClampedArray.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the last occurrence of a value in Uint8ClampedArray.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int | undefined } fromIndex - The array index at which to begin the search.
     *     If fromIndex is undefined, the search starts at index 0.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * Creates a slice of current Uint8ClampedArray using range [begin, end]
     *
     * @param { int } [begin] start - index to be taken into slice. Defaults to 0.
     * @param { int } [end] - last index to be taken into slice. Defaults to the array length.
     * @returns { Uint8ClampedArray } - a new Uint8ClampedArray with elements of current Uint8ClampedArray[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Uint8ClampedArray;

    /**
     * Creates a slice of current Uint8ClampedArray using range [begin, this.lengthInt].
     *
     * @param { int } begin - start index to be taken into slice.
     *     <br>The value should be an integer.
     * @returns { Uint8ClampedArray } - a new Uint8ClampedArray with elements of
     *     current Uint8ClampedArray[begin, this.lengthInt].
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Uint8ClampedArray;

    /**
     * Reverses the elements of the Uint8ClampedArray in place and returns the modified array.
     *
     * @returns { Uint8ClampedArray } - the reversed Uint8ClampedArray
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Uint8ClampedArray;

    /**
     * Sorts in-place by numeric value in ascending order.
     *
     * @returns { this } - sorted Uint8ClampedArray
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
     * @returns { this } - sorted Uint8ClampedArray
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * Creates a Uint8ClampedArray with the same underlying Buffer
     *
     * @param { int } [begin] - start index, inclusive. Defaults to 0.
     * @param { int } [end] - last index, exclusive. Defaults to the array length.
     * @returns { Uint8ClampedArray } - a new Uint8ClampedArray with the same underlying Buffer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Uint8ClampedArray;

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
     * Returns a new Uint8ClampedArray with the elements in reverse order.
     * The original array is not modified.
     *
     * @returns { Uint8ClampedArray } - a new Uint8ClampedArray with the elements reversed.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Uint8ClampedArray;

    /**
     * Returns a new Uint8ClampedArray with the elements sorted in ascending order.
     * The original array is not modified.
     *
     * @returns { Uint8ClampedArray } - a new Uint8ClampedArray with the elements sorted.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Uint8ClampedArray;

    /**
     * Returns a string representing the elements of the Uint8ClampedArray, separated by commas.
     *
     * @returns { string } - a comma-separated string of the array elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * Returns an iterator over the values of the Uint8ClampedArray.
     *
     * @returns { IterableIterator<double> } - an iterator that yields each element in order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<double>;

    /**
     * Returns a new Uint8ClampedArray with the element at the given index
     * replaced by the given value. The original array is not modified.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { int } value - value to set
     *     <br>The value should be an integer.
     * @returns { Uint8ClampedArray } - a new Uint8ClampedArray with the element at index replaced.
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: int): Uint8ClampedArray;

    /**
     * Returns a new Uint8ClampedArray with the element at the given index
     * replaced by the given value. The original array is not modified.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { double } value - value to set
     * @returns { Uint8ClampedArray } - a new Uint8ClampedArray with the element at index replaced.
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Uint8ClampedArray;

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
    public some(predicate: (element: double, index: int, array: Uint8ClampedArray) => boolean): boolean;

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
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Uint8ClampedArray) => U,
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
     * @throws { TypeError } -  If the Uint8ClampedArray length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Uint8ClampedArray) => double): double;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - The parameter which value is used as the initial value to start the accumulation.
     *     The first call to the callbackfn function provides this value as an argument.
     * @returns { U } - the accumulated result from the last call to the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Uint8ClampedArray) => U,
        initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array last element value as an argument
     * @returns { double } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } -  If the Uint8ClampedArray length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Uint8ClampedArray) => double): double;

    /**
     * Creates a new Uint8ClampedArray using fn(arr[i]) over all elements of current Uint8ClampedArray.
     *
     * @param { function } fn - a function to apply for each element of current Uint8ClampedArray
     * @returns { Uint8ClampedArray } - a new Uint8ClampedArray,
     *     where for each element from current Uint8ClampedArray fn was applied
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Uint8ClampedArray) => double): Uint8ClampedArray;

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
    public every(predicate: (element: double, index: int, array: Uint8ClampedArray) => boolean): boolean;

    /**
     * Creates a new Uint8ClampedArray containing only the elements that pass the given test.
     *
     * @param { function } fn - A function to test each element. Called with (value, index, array).
     *     Should return true to keep the element, false to discard it.
     * @returns { Uint8ClampedArray } - a new Uint8ClampedArray with the elements that pass the test.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Uint8ClampedArray) => boolean): Uint8ClampedArray;

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined
     * otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found, find
     *     immediately returns that element value. Otherwise, find returns undefined
     * @returns { double | undefined } - the found element, or undefined if no element matches.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, array: Uint8ClampedArray) => boolean): double | undefined;

    /**
     * Returns the index of the first element in the array where predicate is true, and -1
     * otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found,
     *     findIndex immediately returns that element index. Otherwise, findIndex returns -1
     * @returns { int } - Index of the first matched element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Uint8ClampedArray) => boolean): int;

    /**
     * Returns the last element in the Uint8ClampedArray that satisfies the given predicate.
     *
     * @param { function } fn - A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { double } - the last element that satisfies the predicate.
     * @throws { Error } -  If no element satisfies the predicate, throw an exception.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Uint8ClampedArray) => boolean): double;

    /**
     * Returns the index of the last element in the Uint8ClampedArray that satisfies the given predicate.
     *
     * @param { function } fn - A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { int } - the index of the last element that satisfies the predicate, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Uint8ClampedArray) => boolean): int;

    /**
     * Calls the given callback function once for each element in the Uint8ClampedArray, in ascending order.
     *
     * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the
     *     callbackfn function one time for each element in the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Uint8ClampedArray) => void): void;

    /**
     * Returns the primitive value of the Uint8ClampedArray, which is the array object itself.
     *
     * @returns { Uint8ClampedArray } - the Uint8ClampedArray object itself.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Uint8ClampedArray;

    /**
     * Byte offset within the underlying Buffer
     *
     * @returns { int } - the byte offset from the start of the underlying ArrayBuffer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteOffset(): int;

    /**
     * Number of bytes used
     *
     * @returns { int } - the length in bytes of the Uint8ClampedArray.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteLength(): int;

    /**
     * The number of elements stored in the Uint8ClampedArray.
     *
     * @returns { int } - the number of elements in the Uint8ClampedArray.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * The string \"Uint8ClampedArray\", representing the type name of this typed array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Uint8ClampedArray';
}

/**
 * class Uint8Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Uint8Array {
    /**
     * Number of bytes occupied by each element
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 1;

    /**
     * Underlying Buffer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;

    /**
     * Creates an empty Uint8Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * Creates an Uint8Array with respect to length.
     *
     * @param { int } length - Number of elements
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * Creates an Uint8Array with respect to length.
     *
     * @param { double } length - Number of elements
     * @throws { RangeError } -  If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * Creates an Uint8Array from FixedArray<int>
     *
     * @param { FixedArray<int> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * Creates an Uint8Array from FixedArray<double>
     *
     * @param { FixedArray<double> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * Creates an Uint8Array from Array<int>
     *
     * @param { Array<int> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: Array<int>);

    /**
     * Creates a copy of Uint8Array.
     *
     * @param { Uint8Array } other - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Uint8Array);

    /**
     * Creates an Uint8Array with respect to data accessed via Iterable<double> interface
     *
     * @param { Iterable<double> } elements - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * Creates an Uint8Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBufferLike } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @param { int } length - size of elements of type int in newly created Uint8Array
     *     <br>The value should be an integer.
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBufferLike, byteOffset: int, length: int);

    /**
     * Creates an Uint8Array with respect to buf and byteOffset.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * Creates an Uint8Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double | undefined } byteOffset - byte offset from begin of the buf
     * @param { double | undefined } length - size of elements of type int in newly created Uint8Array
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * Creates an Uint8Array with respect to buf and byteOffset.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double } byteOffset - byte offset from begin of the buf
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * Creates an Uint8Array with respect to buf.
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - data initializer
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * Iteratorable interface implementation
     *
     * @returns { IterableIterator<double> } - iterator that yields each element in order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<double>;

    /**
     * Returns an instance of primitive type at passed index if index is correct.
     *
     * @param { int } index - index to look at
     *     <br>The value should be an integer.
     * @returns { double | undefined } - the element at the index, or undefined if out of bounds.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * Returns an instance of number at passed index.
     *
     * @param { int } i - index to look at
     *     <br>The value should be an integer.
     * @returns { double } - the raw numeric value at index.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(i: int): double;

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { int } val - value to set
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
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
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     *
     * @param { int } target - insert index to place copied elements
     * @param { int } start - start index to begin copy from
     * @param { int } [end] - last index to end copy from, excluded, defaults to the array length.
     * @returns { Uint8Array } - the modified Uint8Array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Uint8Array;

    /**
     * Makes a copy of internal elements to targetPos from begin to end of Uint8Array.
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @returns { Uint8Array } - the modified Uint8Array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Uint8Array;

    /**
     * Returns an array of key, value pairs for every entry in the Uint8Array
     *
     * @returns { IterableIterator<[int, double]> } - iterator over [index, value] pairs for each element.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * Fills the Uint8Array with specified value
     *
     * @param { int } value - new value.
     *     <br>The value should be an integer.
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { Uint8Array } - modified Uint8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: int, start?: int, end?: int): Uint8Array;

    /**
     * Fills the Uint8Array with specified value
     *
     * @param { double } value - new value.
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { Uint8Array } - modified Uint8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): Uint8Array;

    /**
     * Assigns val as element on index.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { int } val - value to set
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: int): void;

    /**
     * Assigns val as element on index.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { double } val - value to set
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * Copies all elements of arr to the current Uint8Array starting from insertPos.
     *
     * @param { FixedArray<int> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<int>, insertPos: int): void;

    /**
     * Copies all elements of arr to the current Uint8Array starting from insertPos.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * Copies all elements of arr to the current Uint8Array.
     *
     * @param { FixedArray<int> } arr - array to copy data from
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<int>): void;

    /**
     * Copies all elements of arr to the current Uint8Array.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * Copies all elements of arr to the current Uint8Array.
     *
     * @param { Uint8Array } array - array to copy data from
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Uint8Array): void;

    /**
     * Copies all elements of arr to the current Uint8Array.
     *
     * @param { Uint8Array } array - array to copy data from
     * @param { int } offset - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Uint8Array, offset: int): void;

    /**
     * Copies elements from an ArrayLike object to the Uint8Array.
     *
     * @param { ArrayLike<double> } array - An ArrayLike object containing the elements to copy.
     * @param { int } [offset] - Optional. The offset into the target array at which to begin
     *     writing values from the source array. The default value is 0.
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<short> } items - a set of elements to include in the new array object.
     * @returns { Uint8Array } - a new Uint8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<short>): Uint8Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<int> } items - a set of elements to include in the new array object.
     * @returns { Uint8Array } - a new Uint8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Uint8Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<double> } items - a set of elements to include in the new array object.
     * @returns { Uint8Array } - a new Uint8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Uint8Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @returns { Uint8Array } - a new Uint8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Uint8Array;

    /**
     * Creates an array from an object of FixedArray<int>.
     *
     * @param { FixedArray<int> } arr - An instance of the FixedArray type to convert to an array.
     * @returns { Uint8Array } - A new Uint8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<int>): Uint8Array;

    /**
     * Creates an array from a set of type std.core.Set<int>.
     *
     * @param { Set<int> } set - A set object to convert to an array.
     * @returns { Uint8Array } - A new Uint8Array
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<int>): Uint8Array;

    /**
     * Creates an array from an array of the same type.
     *
     * @param { Uint8Array } arr - An array to convert to a new array.
     * @returns { Uint8Array } - A new Uint8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Uint8Array): Uint8Array;

    /**
     * Creates an array from an array of the same up to the signess type.
     *
     * @param { Int8Array } arr - An array to convert to a new array.
     * @returns { Uint8Array } - A new Uint8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Int8Array): Uint8Array;

    /**
     * Creates an array from an object of std.core.Array<int>.
     *
     * @param { Array<int> } arr - An instance of the std.core.Array type to convert to an array.
     * @returns { Uint8Array } - A new Uint8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<int>): Uint8Array;

    /**
     * Creates an array from an array-like object.
     *
     * @param { ArrayLike<double> } arr - An array-like object to convert to an array.
     * @returns { Uint8Array } - A new Uint8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: ArrayLike<double>): Uint8Array;

    /**
     * Creates an array from an array-like object.
     *
     * @param { ArrayLike<T> } arrayLike - An array-like object to convert to an array.
     * @param { function } mapfn - A mapping function to call on every element of the array.
     * @returns { Uint8Array } - A new Uint8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => double): Uint8Array;

    /**
     * Creates an array from an iterable object.
     *
     * @param { Iterable<double> } arrayLike - An iterable object to convert to an array.
     * @param { function } [mapfn] - A mapping function to call on every element of the array.
     * @returns { Uint8Array } - A new Uint8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => double): Uint8Array;

    /**
     * Determines whether Uint8Array includes a certain element, returning true or false as appropriate
     *
     * @param { int } searchElement - The element to search for
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The position in this array at which to begin searching for searchElement
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Uint8Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: int, fromIndex: int): boolean;

    /**
     * Determines whether Uint8Array includes a certain element, returning true or false as appropriate
     *
     * @param { int } searchElement - The element to search for. The search starts at index 0.
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Uint8Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: int): boolean;

    /**
     * Determines whether Uint8Array includes a certain element, returning true or false as appropriate
     *
     * @param { double } searchElement - The element to search for.
     * @param { int } [fromIndex] - The position in this array at which to begin searching for searchElement
     *     If fromIndex is undefined, the search starts at index 0.
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Uint8Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * Returns the index of the first occurrence of a value in Uint8Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search starts at index 0.
     * @returns { int } - index of element if present, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Uint8Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - index of element if present, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the first occurrence of a value in Uint8Array.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int } [fromIndex] - The array index at which to begin the search.
     *     If fromIndex is omitted, the search starts at index 0.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if present, -1 otherwise
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
     * @returns { string } - a string of all array elements joined by the separator.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * Returns an list of keys in Uint8Array
     *
     * @returns { IterableIterator<int> } - iterator over the array indices.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns the index of the last occurrence of a value in Uint8Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - right-most index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * Returns the index of the last occurrence of a value in Uint8Array.
     *
     * @param { double } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - right-most index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * Returns the index of the last occurrence of a value in Uint8Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the last occurrence of a value in Uint8Array.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int | undefined } fromIndex - The array index at which to begin the search.
     *     If fromIndex is undefined, the search starts at index 0.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * Creates a new Uint8Array using reversed data from the current one.
     *
     * @returns { Uint8Array } - a new Uint8Array with the elements in reverse order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Uint8Array;

    /**
     * Creates a slice of current Uint8Array using range [begin, end]
     *
     * @param { int } [begin] start - index to be taken into slice
     * @param { int } [end] - last index to be taken into slice
     * @returns { Uint8Array } - a new Uint8Array with elements of current Uint8Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Uint8Array;

    /**
     * Creates a slice of current Uint8Array using range [begin, this.lengthInt].
     *
     * @param { int } begin - start index to be taken into slice.
     *     <br>The value should be an integer.
     * @returns { Uint8Array } - a new Uint8Array with elements of
     *     current Uint8Array[begin, this.lengthInt].
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Uint8Array;

    /**
     * Sorts in-place by numeric value in ascending order.
     *
     * @returns { this } - sorted Uint8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(): this;

    /**
     * Sorts in-place
     *
     * @param { function } [compareFn] - comparator _  used to determine the order of the elements.
     *     compareFn returns a negative value if first argument is less than second argument,
     *     zero if they're equal and a positive value otherwise.
     * @returns { this } - sorted Uint8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * Creates a Uint8Array with the same underlying Buffer
     *
     * @param { int } [begin] - start index, inclusive
     * @param { int } [end] - last index, exclusive
     * @returns { Uint8Array } - a new Uint8Array with the same underlying Buffer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Uint8Array;

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
     * Creates a reversed copy
     *
     * @returns { Uint8Array } - a reversed copy
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Uint8Array;

    /**
     * Returns a new Uint8Array with the elements sorted in ascending order.
     * The original array is not modified.
     *
     * @returns { Uint8Array } - a new Uint8Array with the elements sorted.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Uint8Array;

    /**
     * Returns a string representation of the Uint8Array
     *
     * @returns { string } - a string representation of the Uint8Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * Returns array values iterator
     *
     * @returns { IterableIterator<double> } - iterator that yields each element in order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<double>;

    /**
     * Creates a copy with replaced value on index
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { int } value - value to set
     *     <br>The value should be an integer.
     * @returns { Uint8Array } - a new Uint8Array with the element at index replaced.
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: int): Uint8Array;

    /**
     * Creates a copy with replaced value on index
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { double } value - value to set
     * @returns { Uint8Array } - an Uint8Array with replaced value on index
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Uint8Array;

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
    public some(predicate: (element: double, index: int, array: Uint8Array) => boolean): boolean;

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
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Uint8Array) => U,
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
     * @throws { TypeError } -  If the Uint8Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Uint8Array) => double): double;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - The parameter which value is used as the initial value to start the accumulation.
     *     The first call to the callbackfn function provides this value as an argument.
     * @returns { U } - the accumulated result from the last call to the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>(callbackfn: (previousValue: U, currentValue: double,
        currentIndex: int, array: Uint8Array) => U, initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array last element value as an argument
     * @returns { double } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } -  If the Uint8Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Uint8Array) => double): double;

    /**
     * Creates a new Uint8Array using fn(arr[i]) over all elements of current Uint8Array.
     *
     * @param { function } fn - a function to apply for each element of current Uint8Array.
     * @returns { Uint8Array } - a new Uint8Array with each element being the result of the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Uint8Array) => number): Uint8Array;

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
    public every(predicate: (element: double, index: int, array: Uint8Array) => boolean): boolean;

    /**
     * Creates a new Uint8Array from current Uint8Array based on a condition fn.
     *
     * @param { function } fn - the condition to apply for each element
     * @returns { Uint8Array } - a new Uint8Array with the elements that pass the test.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Uint8Array) => boolean): Uint8Array;

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined
     * otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found, find
     *     immediately returns that element value. Otherwise, find returns undefined
     * @returns { double | undefined } - the found element, or undefined if no element matches.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, array: Uint8Array) => boolean): double | undefined;

    /**
     * Returns the index of the first element in the array where predicate is true, and -1
     * otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found,
     *     findIndex immediately returns that element index. Otherwise, findIndex returns -1
     * @returns { int } - Index of the first matched element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Uint8Array) => boolean): int;

    /**
     * Finds the last element in the Uint8Array that satisfies the condition
     *
     * @param { function } fn - condition
     * @returns { double } - the last element that satisfies fn
     * @throws { Error } -  If the element cannot be found, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Uint8Array) => boolean): double;

    /**
     * Finds an index of the last element in the Uint8Array that satisfies the condition
     *
     * @param { function } fn - condition
     * @returns { int } - the index of the last element that satisfies fn, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Uint8Array) => boolean): int;

    /**
     * Performs the specified action for each element in Uint8Array
     *
     * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the
     *     callbackfn function one time for each element in the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Uint8Array) => void): void;

    /**
     * Returns the primitive value of the Uint8Array, which is the array object itself.
     *
     * @returns { Uint8Array } - the Uint8Array object itself.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Uint8Array;

    /**
     * Byte offset within the underlying Buffer
     *
     * @returns { int } - the byte offset from the start of the underlying ArrayBuffer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteOffset(): int;

    /**
     * Number of bytes used
     *
     * @returns { int } - the length in bytes of the Uint8Array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteLength(): int;

    /**
     * The number of elements stored in the Uint8Array.
     *
     * @returns { int } - the number of elements in the Uint8Array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * String \"Uint8Array\"
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Uint8Array';
}

/**
 * class Uint16Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Uint16Array {
    /**
     * Number of bytes occupied by each element
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 2;

    /**
     * Underlying Buffer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;

    /**
     * Creates an empty Uint16Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * Creates an Uint16Array with respect to length.
     *
     * @param { int } length - Number of elements
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * Creates an Uint16Array with respect to length.
     *
     * @param { double } length - Number of elements
     * @throws { RangeError } -  If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * Creates an Uint16Array from FixedArray<int>
     *
     * @param { FixedArray<int> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * Creates an Uint16Array from FixedArray<double>
     *
     * @param { FixedArray<double> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * Creates an Uint16Array from Array<int>
     *
     * @param { Array<int> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: Array<int>);

    /**
     * Creates a copy of Uint16Array.
     *
     * @param { Uint16Array } other - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Uint16Array);

    /**
     * Creates an Uint16Array with respect to data accessed via Iterable<double> interface
     *
     * @param { Iterable<double> } elements - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * Creates an Uint16Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBufferLike } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @param { int } length - size of elements of type int in newly created Uint16Array
     *     <br>The value should be an integer.
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBufferLike, byteOffset: int, length: int);

    /**
     * Creates an Uint16Array with respect to buf and byteOffset.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * Creates an Uint16Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double | undefined } byteOffset - byte offset from begin of the buf
     * @param { double | undefined } length - size of elements of type int in newly created Uint16Array
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * Creates an Uint16Array with respect to buf and byteOffset.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double } byteOffset - byte offset from begin of the buf
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * Creates an Uint16Array with respect to buf.
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - data initializer
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * Iteratorable interface implementation
     *
     * @returns { IterableIterator<double> } - iterator that yields each element in order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<double>;

    /**
     * Returns an instance of primitive type at passed index if index is correct.
     *
     * @param { int } index - index to look at
     *     <br>The value should be an integer.
     * @returns { double | undefined } - the element at the index, or undefined if out of bounds.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * Returns an instance of number at passed index.
     *
     * @param { int } i - index to look at
     *     <br>The value should be an integer.
     * @returns { double } - the raw numeric value at index.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(i: int): double;

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { int } val - value to set
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
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
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     *
     * @param { int } target - insert index to place copied elements
     * @param { int } start - start index to begin copy from
     * @param { int } [end] - last index to end copy from, excluded. Defaults to the array length.
     * @returns { Uint16Array } - the modified Uint16Array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Uint16Array;

    /**
     * Makes a copy of internal elements to targetPos from begin to end of Uint16Array.
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @returns { Uint16Array } - the modified Uint16Array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Uint16Array;

    /**
     * Returns an array of key, value pairs for every entry in the Uint16Array
     *
     * @returns { IterableIterator<[int, double]> } - iterator over [index, value] pairs for each element.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * Fills the Uint16Array with specified value
     *
     * @param { int } value - new value.
     * @param { int } [start] - start index to begin fill from. Defaults to 0.
     * @param { int } [end] - last index to end fill from, excluded. Defaults to the array length.
     * @returns { Uint16Array } - modified Uint16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: int, start?: int, end?: int): Uint16Array;

    /**
     * Fills the Uint16Array with specified value
     *
     * @param { double } value - new value.
     * @param { int } [start] - start index to begin fill from. Defaults to 0.
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded. Defaults to the array length.
     *     <br>The value should be an integer.
     * @returns { Uint16Array } - modified Uint16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): Uint16Array;

    /**
     * Assigns val as element on index.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { int } val - value to set
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: int): void;

    /**
     * Assigns val as element on index.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { double } val - value to set
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * Copies all elements of arr to the current Uint16Array starting from insertPos.
     *
     * @param { FixedArray<int> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<int>, insertPos: int): void;

    /**
     * Copies all elements of arr to the current Uint16Array starting from insertPos.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * Copies all elements of arr to the current Uint16Array.
     *
     * @param { FixedArray<int> } arr - array to copy data from
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<int>): void;

    /**
     * Copies all elements of arr to the current Uint16Array.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * Copies all elements of arr to the current Uint16Array.
     *
     * @param { Uint16Array } array - array to copy data from
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Uint16Array): void;

    /**
     * Copies all elements of arr to the current Uint16Array.
     *
     * @param { Uint16Array } array - array to copy data from
     * @param { int } offset - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Uint16Array, offset: int): void;

    /**
     * Copies elements from an ArrayLike object to the Uint16Array.
     *
     * @param { ArrayLike<double> } array - An ArrayLike object containing the elements to copy.
     * @param { int } [offset] - Optional. The offset into the target array at which to begin
     *     writing values from the source array. The default value is 0.
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * Returns a new array from a set of elements.
     *
     * @returns { Uint16Array } - a new Uint16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Uint16Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<int> } items - a set of elements to include in the new array object.
     * @returns { Uint16Array } - a new Uint16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Uint16Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<double> } items - a set of elements to include in the new array object.
     * @returns { Uint16Array } - a new Uint16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Uint16Array;

    /**
     * Creates an array from an object of FixedArray<int>.
     *
     * @param { FixedArray<int> } arr - An instance of the FixedArray type to convert to an array.
     * @returns { Uint16Array } - A new Uint16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<int>): Uint16Array;

    /**
     * Creates an array from a set of type std.core.Set<int>.
     *
     * @param { Set<int> } set - A set object to convert to an array.
     * @returns { Uint16Array } - A new Uint16Array
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<int>): Uint16Array;

    /**
     * Creates an array from an array of the same type.
     *
     * @param { Uint16Array } arr - An array to convert to a new array.
     * @returns { Uint16Array } - A new Uint16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Uint16Array): Uint16Array;

    /**
     * Creates an array from an array of the same up to the signedness type.
     *
     * @param { Int16Array } arr - An array to convert to a new array.
     * @returns { Uint16Array } - A new Uint16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Int16Array): Uint16Array;

    /**
     * Creates an array from an object of std.core.Array<int>.
     *
     * @param { Array<int> } arr - An instance of the std.core.Array type to convert to an array.
     * @returns { Uint16Array } - A new Uint16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<int>): Uint16Array;

    /**
     * Creates an array from an array-like object.
     *
     * @param { ArrayLike<double> } arr - An array-like object to convert to an array.
     * @returns { Uint16Array } - A new Uint16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: ArrayLike<double>): Uint16Array;

    /**
     * Creates an array from an array-like object.
     *
     * @param { ArrayLike<T> } arrayLike - An array-like object to convert to an array.
     * @param { function } mapfn - A mapping function to call on every element of the array.
     * @returns { Uint16Array } - A new Uint16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => number): Uint16Array;

    /**
     * Creates an array from an iterable object.
     *
     * @param { Iterable<double> } arrayLike - An iterable object to convert to an array.
     * @param { function } [mapfn] - A mapping function to call on every element of the array.
     *     Defaults to the identity function (returns the element unchanged).
     * @returns { Uint16Array } - A new Uint16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => number): Uint16Array;

    /**
     * Determines whether Uint16Array includes a certain element, returning true or false as appropriate
     *
     * @param { int } searchElement - The element to search for
     *     <br>The value should be an integer.
     * @param { int } fromIndex - The position in this array at which to begin searching for searchElement
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Uint16Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: int, fromIndex: int): boolean;

    /**
     * Determines whether Uint16Array includes a certain element, returning true or false as appropriate
     *
     * @param { int } searchElement - The element to search for. The search starts at index 0.
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Uint16Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: int): boolean;

    /**
     * Determines whether Uint16Array includes a certain element, returning true or false as appropriate
     *
     * @param { double } searchElement - The element to search for.
     * @param { int } [fromIndex] - The position in this array at which to begin searching. Defaults to 0.
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Uint16Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * Returns the index of the first occurrence of a value in Uint16Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search starts at index 0.
     * @returns { int } - index of element if present, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Uint16Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - index of element if present, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the first occurrence of a value in Uint16Array.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int } [fromIndex] - The array index at which to begin the search.
     *     Defaults to 0.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if present, -1 otherwise
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
     * @returns { string } - a string of all array elements joined by the separator.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * Returns an list of indices in the Uint16Array.
     *
     * @returns { IterableIterator<int> } - iterator over the array indices.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns the index of the last occurrence of a value in Uint16Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - right-most index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * Returns the index of the last occurrence of a value in Uint16Array.
     *
     * @param { double } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - right-most index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * Returns the index of the last occurrence of a value in Uint16Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the last occurrence of a value in Uint16Array.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int | undefined } fromIndex - The array index at which to begin the search.
     *     If fromIndex is undefined, the search starts at index 0.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * Creates a new Uint16Array using reversed data from the current one
     *
     * @returns { Uint16Array } - a new Uint16Array with the elements in reverse order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Uint16Array;

    /**
     * Creates a slice of current Uint16Array using range [begin, end]
     *
     * @param { int } [begin] start - index to be taken into slice. Defaults to 0.
     * @param { int } [end] - last index to be taken into slice. Defaults to the array length.
     * @returns { Uint16Array } - a new Uint16Array with elements of current Uint16Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Uint16Array;

    /**
     * Creates a slice of current Uint16Array using range [begin, this.lengthInt].
     *
     * @param { int } begin - start index to be taken into slice.
     *     <br>The value should be an integer.
     * @returns { Uint16Array } - a new Uint16Array with elements of
     *     current Uint16Array[begin, this.lengthInt].
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Uint16Array;

    /**
     * Sorts in-place by numeric value in ascending order.
     *
     * @returns { this } - sorted Uint16Array
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
     *     zero if they're equal and a positive value otherwise. Defaults to an ascending numeric sort.
     * @returns { this } - sorted Uint16Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * Creates a new Uint16Array that shares the same underlying ArrayBuffer
     * as the current array, optionally with a restricted range.
     *
     * @param { int } [begin] - start index, inclusive. Defaults to 0.
     * @param { int } [end] - last index, exclusive. Defaults to the array length.
     * @returns { Uint16Array } - a new Uint16Array with the same underlying Buffer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Uint16Array;

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
     * Returns a new Uint16Array with the elements in reverse order.
     * The original array is not modified.
     *
     * @returns { Uint16Array } - a new Uint16Array with the elements reversed.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Uint16Array;

    /**
     * Creates a sorted copy
     *
     * @returns { Uint16Array } - a sorted copy
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Uint16Array;

    /**
     * Returns a string representing the elements of the Uint16Array, separated by commas.
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
     * @returns { IterableIterator<double> } - iterator that yields each element in order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<double>;

    /**
     * Returns a new Uint16Array with the element at the given index
     * replaced by the given value. The original array is not modified.
     *
     * @param { int } index - index to change.
     *     <br>The value should be an integer.
     * @param { int } value - value to set.
     *     <br>The value should be an integer.
     * @returns { Uint16Array } - a new Uint16Array with the element at index replaced.
     * @throws { RangeError } - - If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: int): Uint16Array;

    /**
     * Returns a new Uint16Array with the element at the given index
     * replaced by the given value. The original array is not modified.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { double } value - value to set
     * @returns { Uint16Array } - a new Uint16Array with the element at index replaced.
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Uint16Array;

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
    public some(predicate: (element: double, index: int, array: Uint16Array) => boolean): boolean;

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
    public reduce<U = double>( callbackfn: (previousValue: U, currentValue: double, currentIndex: int,
        array: Uint16Array) => U, initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array first element value as an argument
     * @returns { double } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } -  If the Uint16Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Uint16Array) => double): double;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - The parameter which value is used as the initial value to start the accumulation.
     *     The first call to the callbackfn function provides this value as an argument.
     * @returns { U } - the accumulated result from the last call to the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Uint16Array) => U,
        initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array last element value as an argument
     * @returns { double } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } -  If the Uint16Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Uint16Array) => double): double;

    /**
     * Creates a new Uint16Array using fn(arr[i]) over all elements of current Uint16Array.
     *
     * @param { function } fn - a function to apply for each element of current Uint16Array
     * @returns { Uint16Array } - a new Uint16Array with each element being the result of the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Uint16Array) => double): Uint16Array;

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
    public every(predicate: (element: double, index: int, array: Uint16Array) => boolean): boolean;

    /**
     * Creates a new Uint16Array from current Uint16Array based on a condition fn.
     *
     * @param { function } fn - the condition to apply for each element
     * @returns { Uint16Array } - a new Uint16Array with the elements that pass the test.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Uint16Array) => boolean): Uint16Array;

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined
     * otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found, find
     *     immediately returns that element value. Otherwise, find returns undefined
     * @returns { double | undefined } - the found element, or undefined if no element matches.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, array: Uint16Array) => boolean): double | undefined;

    /**
     * Returns the index of the first element in the array where predicate is true, and -1
     * otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found,
     *     findIndex immediately returns that element index. Otherwise, findIndex returns -1
     * @returns { int } - Index of the first matched element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Uint16Array) => boolean): int;

    /**
     * Returns the last element in the Uint16Array that satisfies the given predicate.
     *
     * @param { function } fn -  A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { double } - the last element that satisfies the predicate.
     * @throws { Error } -  If no element satisfies the predicate, throw an exception.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Uint16Array) => boolean): double;

    /**
     * Returns the index of the last element in the Uint16Array that satisfies the given predicate.
     *
     * @param { function } fn - A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { int } - the index of the last element that satisfies the predicate, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Uint16Array) => boolean): int;

    /**
     * Calls the given callback function once for each element in the Uint16Array, in ascending order.
     *
     * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the
     *     callbackfn function one time for each element in the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Uint16Array) => void): void;

    /**
     * Returns the primitive value of the Uint16Array, which is the array object itself.
     *
     * @returns { Uint16Array } - the Uint16Array object itself.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Uint16Array;

    /**
     * Byte offset within the underlying Buffer
     *
     * @returns { int } - the byte offset from the start of the underlying ArrayBuffer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteOffset(): int;

    /**
     * Number of bytes used
     *
     * @returns { int } - the length in bytes of the Uint16Array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteLength(): int;

    /**
     * The number of elements stored in the Uint16Array.
     *
     * @returns { int } - the number of elements in the Uint16Array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * String \"Uint16Array\", representing the type name of this typed array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Uint16Array';
}

/**
 * class Uint32Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Uint32Array {
    /**
     * Number of bytes occupied by each element
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static readonly BYTES_PER_ELEMENT: int = 4;

    /**
     * Underlying Buffer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;

    /**
     * Creates an empty Uint32Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * Creates an Uint32Array with respect to length.
     *
     * @param { int } length - Number of elements
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * Creates an Uint32Array with respect to length.
     *
     * @param { double } length - Number of elements
     * @throws { RangeError } -  If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * Creates an Uint32Array from FixedArray<int>
     *
     * @param { FixedArray<int> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * Creates an Uint32Array from FixedArray<double>
     *
     * @param { FixedArray<double> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * Creates an Uint32Array from Array<int>
     *
     * @param { Array<int> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: Array<int>);

    /**
     * Creates a new Uint32Array initialized from another Uint32Array.
     *
     * @param { Uint32Array } other - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: Uint32Array);

    /**
     * Creates an Uint32Array with respect to data accessed via Iterable<double> interface
     *
     * @param { Iterable<double> } elements - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<double>);

    /**
     * Creates an Uint32Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBufferLike } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @param { int } length - size of elements of type long in newly created Uint32Array
     *     <br>The value should be an integer.
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBufferLike, byteOffset: int, length: int);

    /**
     * Creates an Uint32Array with respect to buf and byteOffset.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * Creates an Uint32Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double | undefined } byteOffset - byte offset from begin of the buf
     * @param { double | undefined } length - size of elements of type long in newly created Uint32Array
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * Creates an Uint32Array with respect to buf and byteOffset.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double } byteOffset - byte offset from begin of the buf
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * Creates an Uint32Array with respect to buf.
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - data initializer
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * Iterable interface implementation.
     *
     * @returns { IterableIterator<double> } - iterator that yields each element in order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<double>;

    /**
     * Returns an instance of primitive type at passed index if index is correct.
     *
     * @param { int } index - index to look at
     *     <br>The value should be an integer.
     * @returns { double | undefined } - the element at the index, or undefined if out of bounds.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): double | undefined;

    /**
     * Returns an instance of number at passed index.
     *
     * @param { int } i - index to look at
     *     <br>The value should be an integer.
     * @returns { double } - the raw numeric value at index.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(i: int): double;

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { int } val - value to set
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
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
     * @param { long } val - value to set
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: long): void;

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { double } val - value to set
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: double): void;

    /**
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     *
     * @param { int } target - insert index to place copied elements
     * @param { int } start - start index to begin copy from
     * @param { int } [end] - last index to end copy from, excluded.
     *     Defaults to the array length.
     * @returns { Uint32Array } - the modified Uint32Array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): Uint32Array;

    /**
     * Makes a copy of internal elements to targetPos from begin to end of Uint32Array.
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @returns { Uint32Array } - the modified Uint32Array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): Uint32Array;

    /**
     * Returns an array of key, value pairs for every entry in the Uint32Array
     *
     * @returns { IterableIterator<[int, double]> } - iterator over [index, value] pairs for each element.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, double]>;

    /**
     * Fills the Uint32Array with specified value
     *
     * @param { long } value - new value.
     * @param { int } [start] - start index to begin fill from. Defaults to 0.
     * @param { int } [end] - last index to end fill from, excluded. Defaults to the array length.
     * @returns { Uint32Array } - modified Uint32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: long, start?: int, end?: int): Uint32Array;

    /**
     * Fills the Uint32Array with specified value
     *
     * @param { double } value - new value.
     * @param { int } [start] - start index to begin fill from. Defaults to 0.
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded. Defaults to the array length.
     *     <br>The value should be an integer.
     * @returns { Uint32Array } - modified Uint32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: double, start?: int, end?: int): Uint32Array;

    /**
     * Assigns val as element on index.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { long } val - value to set
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: long): void;

    /**
     * Assigns val as element on index.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { double } val - value to set
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: double): void;

    /**
     * Copies all elements of arr to the current Uint32Array starting from insertPos.
     *
     * @param { FixedArray<long> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<long>, insertPos: int): void;

    /**
     * Copies all elements of arr to the current Uint32Array starting from insertPos.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>, insertPos: int): void;

    /**
     * Copies all elements of arr to the current Uint32Array.
     *
     * @param { FixedArray<long> } arr - array to copy data from
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<long>): void;

    /**
     * Copies all elements of arr to the current Uint32Array.
     *
     * @param { FixedArray<double> } arr - array to copy data from
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<double>): void;

    /**
     * Copies all elements of arr to the current Uint32Array.
     *
     * @param { Uint32Array } array - array to copy data from
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Uint32Array): void;

    /**
     * Copies all elements of arr to the current Uint32Array.
     *
     * @param { Uint32Array } array - array to copy data from
     * @param { int } offset - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: Uint32Array, offset: int): void;

    /**
     * Copies elements from an ArrayLike object to the Uint32Array.
     *
     * @param { ArrayLike<double> } array - An ArrayLike object containing the elements to copy.
     * @param { int } [offset] - Optional. The offset into the target array at which to begin
     *     writing values from the source array. The default value is 0.
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<double>, offset: int = 0): void;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<int> } items - a set of elements to include in the new array object.
     * @returns { Uint32Array } - a new Uint32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): Uint32Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<long> } items - a set of elements to include in the new array object.
     * @returns { Uint32Array } - a new Uint32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<long>): Uint32Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<double> } items - a set of elements to include in the new array object.
     * @returns { Uint32Array } - a new Uint32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): Uint32Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @returns { Uint32Array } - a new Uint32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): Uint32Array;

    /**
     * Creates an array from an object of FixedArray<int>.
     *
     * @param { FixedArray<int> } arr - An instance of the FixedArray type to convert to an array.
     * @returns { Uint32Array } - A new Uint32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<int>): Uint32Array;

    /**
     * Creates an array from a set of type std.core.Set<int>.
     *
     * @param { Set<int> } set - A set object to convert to an array.
     * @returns { Uint32Array } - A new Uint32Array
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<int>): Uint32Array;

    /**
     * Creates an array from an array of the same type.
     *
     * @param { Uint32Array } arr - An array to convert to a new array.
     * @returns { Uint32Array } - A new Uint32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Uint32Array): Uint32Array;

    /**
     * Creates a new Uint32Array from an array of the same size but with signed type.
     *
     * @param { Int32Array } arr - An array to convert to a new array.
     * @returns { Uint32Array } - A new Uint32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Int32Array): Uint32Array;

    /**
     * Creates an array from an object of std.core.Array<int>.
     *
     * @param { Array<int> } arr - An instance of the std.core.Array type to convert to an array.
     * @returns { Uint32Array } - A new Uint32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<int>): Uint32Array;

    /**
     * Creates an array from an array-like object.
     *
     * @param { ArrayLike<double> } arr - An array-like object to convert to an array.
     * @returns { Uint32Array } - A new Uint32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: ArrayLike<double>): Uint32Array;

    /**
     * Creates an array from an array-like object.
     *
     * @param { ArrayLike<T> } arrayLike - An array-like object to convert to an array.
     * @param { function } mapfn - A mapping function to call on every element of the array.
     *    Defaults to the identity function (returns the element unchanged).
     * @returns { Uint32Array } - A new Uint32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => number): Uint32Array;

    /**
     * Creates an array from an iterable object.
     *
     * @param { Iterable<double> } arrayLike - An iterable object to convert to an array.
     * @param { function } [mapfn] - A mapping function to call on every element of the array.
     * @returns { Uint32Array } - A new Uint32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<double>, mapfn?: (v: double, k: double) => number): Uint32Array;

    /**
     * Determines whether Uint32Array includes a certain element, returning true or false as appropriate
     *
     * @param { long } searchElement - The element to search for
     * @param { int } fromIndex - The position in this array at which to begin searching for searchElement
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Uint32Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: long, fromIndex: int): boolean;

    /**
     * Determines whether Uint32Array includes a certain element, returning true or false as appropriate
     *
     * @param { long } searchElement - The element to search for. The search starts at index 0.
     * @returns { boolean } - true if searchElement is in Uint32Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: long): boolean;

    /**
     * Determines whether Uint32Array includes a certain element, returning true or false as appropriate
     *
     * @param { double } searchElement - The element to search for.
     * @param { int } [fromIndex] - The position in this array at which to begin searching. Defaults to 0.
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in Uint32Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: double, fromIndex?: int): boolean;

    /**
     * Returns the index of the first occurrence of a value in Uint32Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search starts at index 0.
     * @returns { int } - index of element if present, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in Uint32Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - index of element if present, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the first occurrence of a value in Uint32Array.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int } [fromIndex] - The array index at which to begin the search.
     *     Defaults to 0.
     *     <br>The value should be an integer.
     * @returns { int } - index of element if present, -1 otherwise
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
     * @returns { string } - a string of all array elements joined by the separator.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * Returns an list of indices in the Uint32Array.
     *
     * @returns { IterableIterator<int> } - iterator over the array indices.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns the index of the last occurrence of a value in Uint32Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - right-most index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * Returns the index of the last occurrence of a value in Uint32Array.
     *
     * @param { double } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - right-most index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double): int;

    /**
     * Returns the index of the last occurrence of a value in Uint32Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the last occurrence of a value in Uint32Array.
     *
     * @param { double } searchElement - The value to locate in the array.
     * @param { int | undefined } fromIndex - The array index at which to begin the search.
     *     If fromIndex is undefined, the search starts at index 0.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: double, fromIndex: int | undefined): int;

    /**
     * Creates a new Uint32Array using reversed data from the current one
     *
     * @returns { Uint32Array } - a new Uint32Array with the elements in reverse order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): Uint32Array;

    /**
     * Creates a slice of current Uint32Array using range [begin, end]
     *
     * @param { int } [begin] start - index to be taken into slice. Defaults to 0.
     * @param { int } [end] - last index to be taken into slice. Defaults to the array length.
     * @returns { Uint32Array } - a new Uint32Array with elements of current Uint32Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): Uint32Array;

    /**
     * Creates a slice of current Uint32Array using range [begin, this.lengthInt].
     *
     * @param { int } begin - start index to be taken into slice.
     *     <br>The value should be an integer.
     * @returns { Uint32Array } - a new Uint32Array with elements of
     *     current Uint32Array[begin, this.lengthInt].
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): Uint32Array;

    /**
     * Sorts in-place by numeric value in ascending order.
     *
     * @returns { this } - sorted Uint32Array
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
     * @returns { this } - sorted Uint32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: double, b: double) => int): this;

    /**
     * Creates a Uint32Array with the same underlying Buffer
     *
     * @param { int } [begin] - start index, inclusive. Defaults to 0.
     * @param { int } [end] - last index, exclusive. Defaults to the array length.
     * @returns { Uint32Array } - a new Uint32Array with the same underlying Buffer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): Uint32Array;

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
     * Returns a new Uint32Array with the elements in reverse order. The original array is not modified.
     *
     * @returns { Uint32Array } - a new Uint32Array with the elements reversed.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): Uint32Array;

    /**
     * Returns a new Uint32Array with the elements sorted in ascending order.
     * The original array is not modified.
     *
     * @returns { Uint32Array } - a new Uint32Array with the elements sorted.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): Uint32Array;

    /**
     * Returns a string representing the elements of the Uint32Array, separated by commas.
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
     * Returns a new Uint32Array with the element at the given index
     * replaced by the given value. The original array is not modified.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { long } value - value to set
     * @returns { Uint32Array } - a new Uint32Array with the element at index replaced.
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: long): Uint32Array;

    /**
     * Returns a new Uint32Array with the element at the given index
     * replaced by the given value. The original array is not modified.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { double } value - value to set
     * @returns { Uint32Array } - a new Uint32Array with the element at index replaced.
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: double): Uint32Array;

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
    public some(predicate: (element: double, index: int, array: Uint32Array) => boolean): boolean;

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
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Uint32Array) => U,
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
     * @throws { TypeError } -  If the Uint32Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Uint32Array) => double): double;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - The parameter which value is used as the initial value to start the accumulation.
     *     The first call to the callbackfn function provides this value as an argument.
     * @returns { U } - the accumulated result from the last call to the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = double>(
        callbackfn: (previousValue: U, currentValue: double, currentIndex: int, array: Uint32Array) => U,
        initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array last element value as an argument
     * @returns { double } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } -  If the Uint32Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: double, currentValue: double, currentIndex: int,
        array: Uint32Array) => double): double;

    /**
     * Creates a new Uint32Array using fn(arr[i]) over all elements of current Uint32Array.
     *
     * @param { function } fn - a function to apply for each element of current Uint32Array
     * @returns { Uint32Array } - a new Uint32Array,
     *     where for each element from current Uint32Array fn was applied
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: double, index: int, array: Uint32Array) => double): Uint32Array;

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
    public every(predicate: (element: double, index: int, array: Uint32Array) => boolean): boolean;

    /**
     * Creates a new Uint32Array from current Uint32Array based on a condition fn.
     *
     * @param { function } fn - the condition to apply for each element
     * @returns { Uint32Array } - a new Uint32Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: double, index: int, array: Uint32Array) => boolean): Uint32Array;

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined
     * otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found, find
     *     immediately returns that element value. Otherwise, find returns undefined
     * @returns { double | undefined } - the found element, or undefined if no element matches.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: double, index: int, array: Uint32Array) => boolean): double | undefined;

    /**
     * Returns the index of the first element in the array where predicate is true, and -1
     * otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found,
     *     findIndex immediately returns that element index. Otherwise, findIndex returns -1
     * @returns { int } - Index of the first matched element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findIndex(predicate: (value: double, index: int, obj: Uint32Array) => boolean): int;

    /**
     * Returns the last element in the Uint32Array that satisfies the given predicate.
     *
     * @param { function } fn - A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { double } - the last element that satisfies the predicate.
     * @throws { Error } -  If no element satisfies the predicate, throw an exception.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: double, index: int, array: Uint32Array) => boolean): double;

    /**
     * Returns the index of the last element in the Uint32Array that satisfies the given predicate.
     *
     * @param { function } fn - A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { int } - the index of the last element that satisfies the predicate, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: double, index: int, array: Uint32Array) => boolean): int;

    /**
     * Calls the given callback function once for each element in the Uint32Array, in ascending order.
     *
     * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the
     *     callbackfn function one time for each element in the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: double, index: int, array: Uint32Array) => void): void;

    /**
     * Returns the primitive value of the Uint32Array, which is the array object itself.
     *
     * @returns { Uint32Array } - the Uint32Array object itself.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): Uint32Array;

    /**
     * Byte offset within the underlying Buffer
     *
     * @returns { int } - the byte offset from the start of the underlying ArrayBuffer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteOffset(): int;

    /**
     * Number of bytes used
     *
     * @returns { int } - the length in bytes of the Uint32Array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteLength(): int;

    /**
     * The number of elements stored in the Uint32Array.
     *
     * @returns { int } - the number of elements in the Uint32Array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * String \"Uint32Array\"
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'Uint32Array';
}

/**
 * class BigUint64Array
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class BigUint64Array {
    /**
    * Number of bytes occupied by each element
    *
    * @syscap SystemCapability.Utils.Lang
    * @stagemodelonly
    * @since 26.0.0 staticonly
    */
    public static readonly BYTES_PER_ELEMENT: int = 8;

    /**
     * Underlying Buffer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly buffer: ArrayBuffer;

    /**
     * Creates an empty BigUint64Array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor();

    /**
     * Creates an BigUint64Array with respect to length.
     *
     * @param { int } length - Number of elements
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: int);

    /**
     * Creates an BigUint64Array with respect to length.
     *
     * @param { double } length - Number of elements
     * @throws { RangeError } -  If the length is outside the bounds of the buffer, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(length: double);

    /**
     * Creates an BigUint64Array from FixedArray<int>
     *
     * @param { FixedArray<int> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<int>);

    /**
     * Creates an BigUint64Array from FixedArray<double>
     *
     * @param { FixedArray<double> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<double>);

    /**
     * Creates an BigUint64Array from FixedArray<bigint>
     *
     * @param { FixedArray<bigint> } numbers - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(numbers: FixedArray<bigint>);

    /**
     * Creates a new BigUint64Array initialized from another BigUint64Array.
     *
     * @param { BigUint64Array } other - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(other: BigUint64Array);

    /**
     * Creates an BigUint64Array with respect to data accessed via Iterable<Number> interface
     *
     * @param { Iterable<BigInt> } elements - data initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(elements: Iterable<BigInt>);

    /**
     * Creates an BigUint64Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBufferLike } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @param { int } length - size of elements of type long in newly created BigUint64Array
     *     <br>The value should be an integer.
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBufferLike, byteOffset: int, length: int);

    /**
     * Creates an BigUint64Array with respect to buf and byteOffset.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { int } byteOffset - byte offset from begin of the buf
     *     <br>The value should be an integer.
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: int);

    /**
     * Creates an BigUint64Array with respect to data, byteOffset and length.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double | undefined } byteOffset - byte offset from begin of the buf
     * @param { double | undefined } length - size of elements of type long in newly created BigUint64Array
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double | undefined, length: double | undefined);

    /**
     * Creates an BigUint64Array with respect to buf and byteOffset.
     *
     * @param { ArrayBuffer } buf - data initializer
     * @param { double } byteOffset - byte offset from begin of the buf
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayBuffer, byteOffset: double);

    /**
     * Creates an BigUint64Array with respect to buf.
     *
     * @param { ArrayLike<double> | ArrayBuffer } buf - data initializer
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(buf: ArrayLike<double> | ArrayBuffer);

    /**
     * Iterable interface implementation.
     *
     * @returns { IterableIterator<BigInt> } - iterator that yields each element in order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<BigInt>;

    /**
     * Returns an instance of primitive type at passed index if index is correct.
     *
     * @param { int } index - index to look at
     *     <br>The value should be an integer.
     * @returns { BigInt | undefined } - the element at the index, or undefined if out of bounds.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): BigInt | undefined;

    /**
     * Returns an instance of BigInt at passed index.
     *
     * @param { int } i - index to look at
     *     <br>The value should be an integer.
     * @returns { BigInt } - the raw value at the index.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_get(i: int): BigInt;

    /**
     * Assigns val as element on index.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { int } val - value to set
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
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
     * @param { long } val - value to set
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
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
     * Makes a copy of internal elements to targetPos from startPos to endPos.
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @param { int } start - start index to begin copy from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end copy from, excluded. Defaults to the array length.
     *     <br>The value should be an integer.
     * @returns { BigUint64Array } - the modified BigUint64Array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int, start: int, end?: int): BigUint64Array;

    /**
     * Makes a copy of internal elements to targetPos from begin to end of BigUint64Array.
     *
     * @param { int } target - insert index to place copied elements
     *     <br>The value should be an integer.
     * @returns { BigUint64Array } - the modified BigUint64Array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public copyWithin(target: int): BigUint64Array;

    /**
     * Returns an array of key, value pairs for every entry in the BigUint64Array
     *
     * @returns { IterableIterator<[int, BigInt]> } - iterator over [index, value] pairs for each element.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public entries(): IterableIterator<[int, BigInt]>;

    /**
     * Fills the BigUint64Array with specified value
     *
     * @param { long } value - new value.
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { BigUint64Array } - modified BigUint64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: long, start?: int, end?: int): BigUint64Array;

    /**
     * Fills the BigUint64Array with specified value
     *
     * @param { BigInt } value - new value.
     * @param { int } [start] - start index to begin fill from
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to end fill from, excluded
     *     <br>The value should be an integer.
     * @returns { BigUint64Array } - modified BigUint64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fill(value: BigInt, start?: int, end?: int): BigUint64Array;

    /**
     * Assigns val as element on index.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { long } val - value to set
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: long): void;

    /**
     * Assigns val as element on index.
     *
     * @param { int } insertPos - index to change
     *     <br>The value should be an integer.
     * @param { BigInt } val - value to set
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(insertPos: int, val: BigInt): void;

    /**
     * Copies all elements of arr to the current BigUint64Array starting from insertPos.
     *
     * @param { FixedArray<long> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<long>, insertPos: int): void;

    /**
     * Copies all elements of arr to the current BigUint64Array starting from insertPos.
     *
     * @param { FixedArray<BigInt> } arr - array to copy data from
     * @param { int } insertPos - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<BigInt>, insertPos: int): void;

    /**
     * Copies all elements of arr to the current BigUint64Array.
     *
     * @param { FixedArray<long> } arr - array to copy data from
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<long>): void;

    /**
     * Copies all elements of arr to the current BigUint64Array.
     *
     * @param { FixedArray<BigInt> } arr - array to copy data from
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(arr: FixedArray<BigInt>): void;

    /**
     * Copies all elements of arr to the current BigUint64Array.
     *
     * @param { BigUint64Array } array - array to copy data from
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: BigUint64Array): void;

    /**
     * Copies all elements of arr to the current BigUint64Array.
     *
     * @param { BigUint64Array } array - array to copy data from
     * @param { int } offset - start index where data from arr will be inserted
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: BigUint64Array, offset: int): void;

    /**
     * Copies elements from an ArrayLike object to the BigUint64Array.
     *
     * @param { ArrayLike<BigInt> } array - An ArrayLike object containing the elements to copy.
     * @param { int } [offset] - Optional. The offset into the target array at which to begin
     *     writing values from the source array. The default value is 0.
     *     <br>The value should be an integer.
     * @throws { RangeError } -  If the number of assigned elements exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set(array: ArrayLike<BigInt>, offset: int = 0): void;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<int> } items - a set of elements to include in the new array object.
     * @returns { BigUint64Array } - a new BigUint64Array containing the given elements.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<int>): BigUint64Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<long> } items - a set of elements to include in the new array object.
     * @returns { BigUint64Array } - a new BigUint64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<long>): BigUint64Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<bigint> } items - a set of elements to include in the new array object.
     * @returns { BigUint64Array } - a new BigUint64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<bigint>): BigUint64Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @param { FixedArray<double> } items - a set of elements to include in the new array object.
     * @returns { BigUint64Array } - a new BigUint64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(...items: FixedArray<double>): BigUint64Array;

    /**
     * Returns a new array from a set of elements.
     *
     * @returns { BigUint64Array } - a new BigUint64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static of(): BigUint64Array;

    /**
     * Creates an array from an object of FixedArray<BigInt>.
     *
     * @param { FixedArray<BigInt> } arr - An instance of the FixedArray type to convert to an array.
     * @returns { BigUint64Array } - A new BigUint64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: FixedArray<BigInt>): BigUint64Array;

    /**
     * Creates an array from a set of type std.core.Set<BigInt>.
     *
     * @param { Set<BigInt> } set - A set object to convert to an array.
     * @returns { BigUint64Array } - A new BigUint64Array
     * @throws { RangeError } -  Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(set: Set<BigInt>): BigUint64Array;

    /**
     * Creates an array from an array of the same type.
     *
     * @param { BigUint64Array } arr - An array to convert to a new array.
     * @returns { BigUint64Array } - A new BigUint64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: BigUint64Array): BigUint64Array;

    /**
     * Creates an array from an object of std.core.Array<BigInt>.
     *
     * @param { Array<BigInt> } arr - An instance of the std.core.Array type to convert to an array.
     * @returns { BigUint64Array } - A new BigUint64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: Array<BigInt>): BigUint64Array;

    /**
     * Creates an array from an array-like object.
     *
     * @param { ArrayLike<BigInt> } arr - An array-like object to convert to an array.
     * @returns { BigUint64Array } - A new BigUint64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arr: ArrayLike<BigInt>): BigUint64Array;

    /**
     * Creates an array from an array-like object.
     *
     * @param { ArrayLike<T> } arrayLike - An array-like object to convert to an array.
     * @param { function } mapfn - A mapping function to call on every element of the array.
     *     Defaults to the identity function (returns the element unchanged).
     * @returns { BigUint64Array } - A new BigUint64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: double) => BigInt): BigUint64Array;

    /**
     * Creates an array from an iterable object.
     *
     * @param { Iterable<BigInt> } arrayLike - An iterable object to convert to an array.
     * @param { function } [mapfn] - A mapping function to call on every element of the array.
     * @returns { BigUint64Array } - A new BigUint64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static from(arrayLike: Iterable<BigInt>, mapfn?: (v: BigInt, k: double) => BigInt): BigUint64Array;

    /**
     * Determines whether BigUint64Array includes a certain element, returning true or false as appropriate
     *
     * @param { long } searchElement - The element to search for
     * @param { int } fromIndex - The position in this array at which to begin searching for searchElement
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in BigUint64Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: long, fromIndex: int): boolean;

    /**
     * Determines whether BigUint64Array includes a certain element, returning true or false as appropriate
     *
     * @param { long } searchElement - The element to search for. The search starts at index 0.
     * @returns { boolean } - true if searchElement is in BigUint64Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: long): boolean;

    /**
     * Determines whether BigUint64Array includes a certain element, returning true or false as appropriate
     *
     * @param { BigInt } searchElement - The element to search for.
     * @param { int } [fromIndex] - The position in this array at which to begin searching. Defaults to 0.
     *     <br>The value should be an integer.
     * @returns { boolean } - true if searchElement is in BigUint64Array, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchElement: BigInt, fromIndex?: int): boolean;

    /**
     * Returns the index of the first occurrence of a value in BigUint64Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search starts at index 0.
     * @returns { int } - index of element if present, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int): int;

    /**
     * Returns the index of the first occurrence of a value in BigUint64Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - index of element if present, -1 otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the first occurrence of a value in BigUint64Array.
     *
     * @param { BigInt } searchElement - The value to locate in the array.
     * @param { int } [fromIndex] - The array index at which to begin the search. Defaults to 0.
     * @returns { int } - index of element if present, -1 otherwise
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
     * @returns { string } - a string of all array elements joined by the separator.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public join(separator?: string): string;

    /**
     * Returns an list of indices in the BigUint64Array.
     *
     * @returns { IterableIterator<int> } - iterator over the array indices.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public keys(): IterableIterator<int>;

    /**
     * Returns the index of the last occurrence of a value in BigUint64Array.
     *
     * @param { int } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - right-most index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int): int;

    /**
     * Returns the index of the last occurrence of a value in BigUint64Array.
     *
     * @param { BigInt } searchElement - The value to locate in the array. The search begins at index length - 1.
     * @returns { int } - right-most index of searchElement. It must be less than length. -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: BigInt): int;

    /**
     * Returns the index of the last occurrence of a value in BigUint64Array.
     *
     * @param { int } searchElement - The value to locate in the array.
     * @param { int } fromIndex - The array index at which to begin the search.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: int, fromIndex: int): int;

    /**
     * Returns the index of the last occurrence of a value in BigUint64Array.
     *
     * @param { BigInt } searchElement - The value to locate in the array.
     * @param { int | undefined } fromIndex - The array index at which to begin the search.
     *     If fromIndex is undefined, the search starts at index 0.
     * @returns { int } - right-most index of searchElement. It must be less or equal than fromIndex. -1 if not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(searchElement: BigInt, fromIndex: int | undefined): int;

    /**
     * Creates a new BigUint64Array using reversed data from the current one
     *
     * @returns { BigUint64Array } - a new BigUint64Array with the elements in reverse order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reverse(): BigUint64Array;

    /**
     * Creates a slice of current BigUint64Array using range [begin, end]
     *
     * @param { int } [begin] - start - index to be taken into slice. Defaults to 0.
     *     <br>The value should be an integer.
     * @param { int } [end] - last index to be taken into slice. Defaults to the array length.
     *     <br>The value should be an integer.
     * @returns { BigUint64Array } - a new BigUint64Array with elements of current BigUint64Array[begin;end),
     *     where end index is excluded
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): BigUint64Array;

    /**
     * Creates a slice of current BigUint64Array using range [begin, this.lengthInt].
     *
     * @param { int } begin - start index to be taken into slice.
     *     <br>The value should be an integer.
     * @returns { BigUint64Array } - a new BigUint64Array with elements of
     *     current BigUint64Array[begin, this.lengthInt].
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin: int): BigUint64Array;

    /**
     * Sorts in-place by numeric value in ascending order.
     *
     * @returns { this } - sorted BigUint64Array
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
     * @returns { this } - sorted BigUint64Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sort(compareFn?: (a: BigInt, b: BigInt) => int | BigInt): this;

    /**
     * Creates a new BigUint64Array that shares the same underlying ArrayBuffer
     * as the current array, optionally with a restricted range.
     *
     * @param { int } [begin] - start index, inclusive.  Defaults to 0.
     *     <br>The value should be an integer.
     * @param { int } [end] - last index, exclusive. Defaults to the array length.
     *     <br>The value should be an integer.
     * @returns { BigUint64Array } - a new BigUint64Array sharing the same underlying ArrayBuffer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public subarray(begin?: int, end?: int): BigUint64Array;

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
     * Returns a new BigUint64Array with the elements in reverse order.
     * The original array is not modified.
     *
     * @returns { BigUint64Array } - a new BigUint64Array with the elements reversed.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toReversed(): BigUint64Array;

    /**
     * Returns a new BigUint64Array with the elements sorted in ascending order.
     * The original array is not modified.
     *
     * @returns { BigUint64Array } - a new BigUint64Array with the elements sorted.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toSorted(): BigUint64Array;

    /**
     * Returns a string representing the elements of the BigUint64Array, separated by commas.
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
     * @returns { IterableIterator<BigInt> } - iterator that yields each element in order.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public values(): IterableIterator<BigInt>;

    /**
     * Returns a new BigUint64Array with the element at the given index
     * replaced by the given value. The original array is not modified.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { long } value - value to set
     * @returns { BigUint64Array } - a new BigUint64Array with the element at index replaced.
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: long): BigUint64Array;

    /**
     * Returns a new BigUint64Array with the element at the given index
     * replaced by the given value. The original array is not modified.
     *
     * @param { int } index - index to change
     *     <br>The value should be an integer.
     * @param { BigInt } value - value to set
     * @returns { BigUint64Array } - a new BigUint64Array with the element at index replaced.
     * @throws { RangeError } -  If the index exceeds the array range, throw an exception
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public with(index: int, value: BigInt): BigUint64Array;

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
    public some(predicate: (element: BigInt, index: int, array: BigUint64Array) => boolean): boolean;

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
        array: BigUint64Array) => U, initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduce method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array first element value as an argument
     * @returns { BigInt } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } -  If the BigUint64Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduce(callbackfn: (previousValue: BigInt, currentValue: BigInt, currentIndex: int,
        array: BigUint64Array) => BigInt): BigInt;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param { U } initialValue - The parameter which value is used as the initial value to start the accumulation.
     *     The first call to the callbackfn function provides this value as an argument.
     * @returns { U } - the accumulated result from the last call to the callback function.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight<U = BigInt>(
        callbackfn: (previousValue: U, currentValue: BigInt, currentIndex: int, array: BigUint64Array) => U,
        initialValue: U): U;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result,
     * and is provided as an argument in the next call to the callback function.
     *
     * @param { function } callbackfn - A function that accepts four arguments.
     *     The reduceRight method calls the callbackfn function one time for each element in the array.
     *     The first call to the callbackfn function provides array last element value as an argument
     * @returns { BigInt } - the accumulated result from the last call to the callback function.
     * @throws { TypeError } -  If the BigUint64Array length is 0, throw a TypeError.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public reduceRight(callbackfn: (previousValue: BigInt, currentValue: BigInt, currentIndex: int,
        array: BigUint64Array) => BigInt): BigInt;

    /**
     * Creates a new BigUint64Array using fn(arr[i]) over all elements of current BigUint64Array.
     *
     * @param { function } fn - a function to apply for each element of current BigUint64Array
     * @returns { BigUint64Array } - a new BigUint64Array with each element being the result of the callback function
     *     where for each element from current BigUint64Array fn was applied
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public map(fn: (val: BigInt, index: int, array: BigUint64Array) => BigInt): BigUint64Array;

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
    public every(predicate: (element: BigInt, index: int, array: BigUint64Array) => boolean): boolean;

    /**
     * Creates a new BigUint64Array from current BigUint64Array based on a condition fn.
     *
     * @param { function } fn - the condition to apply for each element
     * @returns { BigUint64Array } - a new BigUint64Array with the elements that pass the test.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public filter(fn: (val: BigInt, index: int, array: BigUint64Array) => boolean): BigUint64Array;

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined
     * otherwise
     *
     * @param { function } predicate - find calls predicate once for each element of the array, in ascending
     *     order, until it finds one where predicate returns true. If such an element is found, find
     *     immediately returns that element value. Otherwise, find returns undefined
     * @returns { BigInt | undefined } - the found element, or undefined if no element matches
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public find(predicate: (value: BigInt, index: int, array: BigUint64Array) => boolean): BigInt | undefined;

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
    public findIndex(predicate: (value: BigInt, index: int, obj: BigUint64Array) => boolean): int;

    /**
     * Returns the last element in the BigUint64Array that satisfies the given predicate.
     *
     * @param { function } fn -  A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { BigInt } - the last element that satisfies the predicate.
     * @throws { Error } -  If no element satisfies the predicate, throw an exception.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLast(fn: (val: BigInt, index: int, array: BigUint64Array) => boolean): BigInt;

    /**
     *  Returns the index of the last element in the BigUint64Array that satisfies the given predicate.
     *
     * @param { function } fn -  A function to test each element. Called with (value, index, array).
     *     Should return true for the element to be found.
     * @returns { int } - the index of the last element that satisfies the predicate, -1 otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public findLastIndex(fn: (val: BigInt, index: int, array: BigUint64Array) => boolean): int;

    /**
     * Performs the specified action for each element in BigUint64Array
     *
     * @param { function } callbackfn - A function that accepts up to three arguments. forEach calls the
     *     callbackfn function one time for each element in the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public forEach(callbackfn: (value: BigInt, index: int, array: BigUint64Array) => void): void;

    /**
     * Calls the given callback function once for each element in the BigUint64Array, in ascending order.
     *
     * @returns { BigUint64Array } - the BigUint64Array object itself
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public valueOf(): BigUint64Array;

    /**
     * Byte offset within the underlying Buffer
     *
     * @returns { int } - the byte offset from the start of the underlying ArrayBuffer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteOffset(): int;

    /**
     * Number of bytes used
     *
     * @returns { int } - the length in bytes of the BigUint64Array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get byteLength(): int;

    /**
     * The number of elements stored in the BigUint64Array.
     *
     * @returns { int } - the number of elements in the BigUint64Array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get length(): int;

    /**
     * String \"BigUint64Array\"
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public readonly name: string = 'BigUint64Array';
}
