/**
 * ArkTS collections.
 *
 * @namespace collections
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare namespace collections {
   /**
   * Represents a raw buffer of binary data, which is used to store data for the
   * different typed arrays. ArrayBuffers cannot be read from or written to directly,
   * but can be passed to a typed array or DataView Object to interpret the raw
   * buffer as needed.
   * If multiple threads access a ArrayBuffer instance concurrently, 
   * and at least one of the threads modifies the buffer structurally,
   * it must be synchronized externally.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12
   */
   @Sendable
   class ArrayBuffer {
     /**
      * Read-only. The length of the ArrayBuffer (in bytes).
      *
      * @type { number }
      * @readonly
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     readonly byteLength: number;
     /**
      * A constructor used to create a ArrayBuffer.
      *
      * @param { number } byteLength - The length of the ArkTS array buffer
      * @throws { BusinessError } 10200012 - The ArrayBuffer's constructor cannot be directly invoked.
      * @throws { BusinessError } 401 - Parameter error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     constructor(byteLength: number);
     /**
      * Returns a section of an ArrayBuffer.
      *
      * @param { number } begin - Zero-based index at which to start extraction, converted to an integer.
      * @param { number } [end] - Zero-based index at which to end extraction, converted to an integer. Default is buffer.length
      * @returns { ArrayBuffer } A new ArrayBuffer containing the extracted elements.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     slice(begin: number, end?: number): ArrayBuffer;
   }

   /**
    * A typed array of 8-bit integer values. The contents are initialized to 0.
    * If multiple threads access a Int8Array instance concurrently, 
    * and at least one of the threads modifies the array structurally,
    * it must be synchronized externally.
    *
    * @syscap SystemCapability.Utils.Lang
    * @crossplatform
    * @atomicservice
    * @since 12
    */
   @Sendable
   class Int8Array {
     /**
      * The size in bytes of each element in the array.
      *
      * @type { number }
      * @readonly
      * @static
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     static readonly BYTES_PER_ELEMENT: number;
     /**
      * The ArrayBuffer instance referenced by the array.
      *
      * @type { ArrayBuffer }
      * @readonly
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     readonly buffer: ArrayBuffer;
     /**
      * The length in bytes of the array.
      *
      * @type { number }
      * @readonly
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     readonly byteLength: number;
     /**
      * The offset in bytes of the array.
      *
      * @type { number }
      * @readonly
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     readonly byteOffset: number;
     /**
      * The length of the array.
      *
      * @type { number }
      * @readonly
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     readonly length: number;
     /**
      * A constructor used to create an Int8Array.
      *
      * @throws { BusinessError } 10200012 - The Int8Array's constructor cannot be directly invoked.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     constructor();
     /**
      * A constructor used to create an Int8Array.
      *
      * @param { number } length - The length of the array
      * @throws { BusinessError } 10200012 - The Int8Array's constructor cannot be directly invoked.
      * @throws { BusinessError } 401 - Parameter error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     constructor(length: number);
     /**
      * A constructor used to create an Int8Array.
      *
      * @param { ArrayLike<number> | ArrayBuffer } array - An array is initialized with the given elements
      * @throws { BusinessError } 10200012 - The Int8Array's constructor cannot be directly invoked.
      * @throws { BusinessError } 401 - Parameter error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     constructor(array: ArrayLike<number> | ArrayBuffer);
     /**
      * A constructor used to create an Int8Array.
      *
      * @param { ArrayBuffer } buffer - An array is initialized with the given elements
      * @param { number } [byteOffset] - The byteOffset (in bytes) parameter specifies the memory range that will be exposed by the typed array view.
      * @param { number } [length] - The length parameter specifies the memory range that will be exposed by the typed array view.
      * @throws { BusinessError } 10200012 - The Int8Array's constructor cannot be directly invoked.
      * @throws { BusinessError } 401 - Parameter error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);
     /**
      * Creates an Int8Array from an array-like object.
      *
      * @param { ArrayLike<number> } arrayLike - An array-like object to convert to an Int8Array.
      * @returns { Int8Array } A new Int8Array instance
      * @throws { BusinessError } 401 - Parameter error.
      * @static
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     static from(arrayLike: ArrayLike<number>): Int8Array;
     /**
      * Creates an Int8Array from an array-like object.
      *
      * @param { ArrayLike<T> } arrayLike - An array-like object to convert to an Int8Array.
      * @param { function} mapFn - A mapping function to call on every element of the array.
      * @returns { Int8Array } A new Int8Array instance
      * @throws { BusinessError } 401 - Parameter error.
      * @static
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     static from<T>(arrayLike: ArrayLike<T>, mapFn: (v: T, k: number) => number): Int8Array;
     /**
      * Creates an Int8Array from an iterable object.
      *
      * @param { Iterable<number> } arrayLike - An iterable object to convert to an Int8Array.
      * @param { function} [mapFn] - A mapping function to call on every element of the array.
      * @returns { Int8Array } A new Int8Array instance
      * @throws { BusinessError } 401 - Parameter error.
      * @static
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     static from(arrayLike: Iterable<number>, mapFn?: (v: number, k: number) => number): Int8Array;
     /**
      * Returns the this object after copying a section of the array identified by start and end
      * to the same array starting at position target.
      *
      * @param { number } target - If target is negative, it is treated as length+target where length is the
      * length of the array.
      * @param { number } start - If start is negative, it is treated as length+start. If end is negative, it
      * is treated as length+end.
      * @param { number } [end] - If not specified, length of the this object is used as its default value.
      * @returns { Int8Array } The array itself.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The copyWithin method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     copyWithin(target: number, start: number, end?: number): Int8Array;
     /**
      * Determines whether all the members of an array satisfy the specified test.
      *
      * @param { function} predicate - A function that accepts up to three arguments. The every method calls
      * the predicate function for each element in the array until the predicate returns a value
      * which is coercible to the Boolean value false, or until the end of the array.
      * @returns { boolean } true unless predicate returns a false value for a typed array element, in which case false is immediately returned.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The every method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     every(predicate: (value: number, index: number, array: Int8Array) => boolean): boolean;
     /**
      * Returns the this object after filling the section identified by start and end with value.
      *
      * @param { number } value - value to fill array section with.
      * @param { number } [start] - index to start filling the array at. If start is negative, it is treated as
      * length+start where length is the length of the array.
      * @param { number } [end] - index to stop filling the array at. If end is negative, it is treated as
      * length+end.
      * @returns { Int8Array } The array itself.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The fill method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     fill(value: number, start?: number, end?: number): Int8Array;
     /**
      * Returns the elements of an array that meet the condition specified in a callback function.
      *
      * @param { function} predicate - A function that accepts up to three arguments. The filter method calls
      * the predicate function one time for each element in the array.
      * @returns { Int8Array } The array itself.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The filter method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     filter(predicate: (value: number, index: number, array: Int8Array) => boolean): Int8Array;
     /**
      * Returns the value of the first element in the array where predicate is true, and undefined
      * otherwise.
      *
      * @param { function} predicate - find calls predicate once for each element of the array, in ascending
      * order, until it finds one where predicate returns true. If such an element is found, find
      * immediately returns that element value. Otherwise, find returns undefined.
      * @returns { number | undefined } The first element in the typed array that satisfies the provided testing function. Otherwise, undefined is returned.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The find method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     find(predicate: (value: number, index: number, obj: Int8Array) => boolean): number | undefined;
     /**
      * Returns the index of the first element in the array where predicate is true, and -1
      * otherwise.
      *
      * @param { function} predicate - find calls predicate once for each element of the array, in ascending
      * order, until it finds one where predicate returns true. If such an element is found,
      * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
      * @returns { number } The index of the first element in the typed array that passes the test. Otherwise, -1.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The findIndex method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     findIndex(predicate: (value: number, index: number, obj: Int8Array) => boolean): number;
     /**
      * Performs the specified action for each element in an array.
      *
      * @param { function} callbackFn -  A function that accepts up to three arguments. forEach calls the
      * callbackfn function one time for each element in the array.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The forEach method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     forEach(callbackFn: (value: number, index: number, array: Int8Array) => void): void;
     /**
      * Returns the index of the first occurrence of a value in an array.
      *
      * @param { number } searchElement - The value to locate in the array.
      * @param { number } [fromIndex] - The array index at which to begin the search. If fromIndex is omitted, the
      *  search starts at index 0.
      * @returns { number } The first index of searchElement in the typed array; -1 if not found.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The indexOf method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     indexOf(searchElement: number, fromIndex?: number): number;
     /**
      * Adds all the elements of an array separated by the specified separator string.
      * @param { string } [separator] - A string used to separate one element of an array from the next in the
      * resulting String. If omitted, the array elements are separated with a comma.
      * @returns { string } A string with all typed array elements joined. if array.length is 0, the empty string is returned.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The join method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     join(separator?: string): string;
     /**
      * Calls a defined callback function on each element of an array, and returns an array that
      * contains the results.
      *
      * @param { function} callbackFn - A function that accepts up to three arguments. The map method calls the
      * callbackfn function one time for each element in the array.
      * @returns { Int8Array } The array itself.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The map method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     map(callbackFn: (value: number, index: number, array: Int8Array) => number): Int8Array;
     /**
      * Calls the specified callback function for all the elements in an array. The return value of
      * the callback function is the accumulated result, and is provided as an argument in the next
      * call to the callback function.
      *
      * @param { function} callbackFn - A function that accepts up to four arguments. The reduce method calls the
      * callbackfn function one time for each element in the array.
      * @returns { number } The value that results from running the "reducer" callback function to completion over the entire typed array.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     reduce(callbackFn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number): number;
     /**
      * Calls the specified callback function for all the elements in an array. The return value of
      * the callback function is the accumulated result, and is provided as an argument in the next
      * call to the callback function.
      *
      * @param { function} callbackFn - A function that accepts up to four arguments. The reduce method calls the
      * callbackfn function one time for each element in the array.
      * @param { number } initialValue - If initialValue is specified, it is used as the initial value to start
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      * @returns { number } The value that results from running the "reducer" callback function to completion over the entire typed array.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     reduce(callbackFn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number, initialValue: number): number;
     /**
      * Calls the specified callback function for all the elements in an array. The return value of
      * the callback function is the accumulated result, and is provided as an argument in the next
      * call to the callback function.
      *
      * @param { function} callbackFn - A function that accepts up to four arguments. The reduce method calls the
      * callbackfn function one time for each element in the array.
      * @param { U } initialValue - If initialValue is specified, it is used as the initial value to start
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      * @returns { U } The value that results from running the "reducer" callback function to completion over the entire typed array.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The reduce method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     reduce<U>(callbackFn: (previousValue: U, currentValue: number, currentIndex: number, array: Int8Array) => U, initialValue: U): U;
     /**
      * Reverses the elements in an Array.
      *
      * @returns { Int8Array } The reference to the original typed array, now reversed.
      * <br/>Note that the typed array is reversed in place, and no copy is made.
      * @throws { BusinessError } 10200011 - The reverse method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     reverse(): Int8Array;
     /**
      * Sets a value or an array of values.
      *
      * @param { ArrayLike<number> } array - A typed or untyped array of values to set.
      * @param { number } [offset] - The index in the current array at which the values are to be written.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The set method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     set(array: ArrayLike<number>, offset?: number): void;
     /**
      * Returns a section of an array.
      *
      * @param { number } [start] - The beginning of the specified portion of the array.
      * @param { number } [end] - The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
      * @returns { Int8Array } A new typed array containing the extracted elements.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The slice method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     slice(start?: number, end?: number): Int8Array;
     /**
      * Determines whether the specified callback function returns true for any element of an array.
      *
      * @param { function} predicate - A function that accepts up to three arguments. The some method calls
      * the predicate function for each element in the array until the predicate returns a value
      * which is coercible to the Boolean value true, or until the end of the array.
      * @returns { boolean } false unless predicate returns a truthy value for a typed array element, in which case true is immediately returned.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The some method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     some(predicate: (value: number, index: number, array: Int8Array) => boolean): boolean;
     /**
      * Sorts an array.
      *
      * @param { function} [compareFn] - Function used to determine the order of the elements. It is expected to return
      * a negative value if first argument is less than second argument, zero if they're equal and a positive
      * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
      * @returns { Int8Array } The reference to the original typed array, now sorted. Note that the typed array is sorted in place and no copy is made.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The sort method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     sort(compareFn?: (a: number, b: number) => number): Int8Array;
     /**
      * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements
      * at begin, inclusive, up to end, exclusive.
      *
      * @param { number } [begin] - The index of the beginning of the array.
      * @param { number } [end] - The index of the end of the array.
      * @returns { Int8Array } A new Int8Array object.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The subarray method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     subarray(begin?: number, end?: number): Int8Array;
     /**
      * Returns the item located at the specified index.
      *
      * @param { number } index - The zero-based index of the desired code unit.<br/>
      * A negative index will count back from the last item.
      * @returns { number | undefined } The element in the array matching the given index.<br/>
      * Always returns undefined if index < -array.length or index >= array.length without attempting to access the corresponding property.
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The at method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     at(index: number): number | undefined;
     /**
      * Returns an iterable of key, value pairs for every entry in the array
      *
      * @returns { IterableIterator<[number, number]> } A new iterable iterator object.
      * @throws { BusinessError } 10200011 - The method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     entries(): IterableIterator<[number, number]>;
     /**
      * Returns an iterable of keys in the array
      *
      * @returns { IterableIterator<number> } A new iterable iterator object.
      * @throws { BusinessError } 10200011 - The method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     keys(): IterableIterator<number>;
     /**
      * Returns an iterable of values in the array
      *
      * @returns { IterableIterator<number> } A new iterable iterator object.
      * @throws { BusinessError } 10200011 - The method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     values(): IterableIterator<number>;
     /**
      * Determines whether an array includes a certain element, returning true or false as appropriate.
      *
      * @param { number } searchElement - The element to search for.
      * @param { number } [fromIndex] - The position in this array at which to begin searching for searchElement.
      * @returns { boolean } A boolean value which is true if the value searchElement is found <br/>
      * within the typed array (or the part of the typed array indicated by the index fromIndex, if specified).
      * @throws { BusinessError } 401 - Parameter error.
      * @throws { BusinessError } 10200011 - The at method cannot be bound.
      * @throws { BusinessError } 10200201 - Concurrent modification error.
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     includes(searchElement: number, fromIndex?: number): boolean;
     /**
      * Returns the item at that index.
      * 
      * @syscap SystemCapability.Utils.Lang
      * @crossplatform
      * @atomicservice
      * @since 12
      */
     [index: number]: number;
   }
}