/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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

'use static';
/**
 * @file
 * @kit ArkTS
 * @arkts 1.2
 */

declare namespace util {
  /**
   * %s: String will be used to convert all values except BigInt, Object and -0. BigInt values will be represented
   * with an n and Objects that have no user defined toString function are inspected using util.inspect() with
   * options { depth: 0, colors: false, compact: 3 }.
   * %d: Number will be used to convert all values except BigInt and Symbol.
   * %i: parseInt(value, 10) is used for all values except BigInt and Symbol.
   * %f: parseFloat(value) is used for all values except Bigint and Symbol.
   * %j: JSON. Replaced with the string '[Circular]' if the argument contains circular references.
   * %o: Object. A string representation of an object with generic JavaScript object formatting.Similar to
   * util.inspect() with options { showHidden: true, showProxy: true}. This will show the full object including
   * non-enumerable properties and proxies.
   * %O: Object. A string representation of an object with generic JavaScript object formatting.
   * %O: Object. A string representation of an object with generic JavaScript object formatting.Similar to
   * util.inspect() without options. This will show the full object not including non-enumerable properties and
   * proxies.
   * %c: CSS. This specifier is ignored and will skip any CSS passed in.
   * %%: single percent sign ('%'). This does not consume an argument.Returns: <string> The formatted string.
   *
   * @param { string } format - Styled string
   * @param { Object[] } args - Data to be formatted
   * @returns { string } a string formatted in a specific format.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * 1.Mandatory parameters are left unspecified;
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  function format(format: string, ...args: Object[]): string;

  /**
   * Generate a random RFC 4122 version 4 UUID using a cryptographically secure random number generator.
   *
   * @param { boolean } [entropyCache] - Whether to generate the UUID with using the cache. Default: true.
   * @returns { string } Return a string representing this UUID.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  function generateRandomUUID(entropyCache?: boolean): string;
  
  /**
   * The Type represents four different encoding formats for base64
   *
   * @enum { number } Type
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  enum Type {
    /**
     * The value indicates that the encoding format of base64 is BASIC
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    BASIC,
    /**
     * The value indicates that the encoding format of base64 is MIME
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    MIME,
    /**
     * The value indicates that the encoding format of base64 is BASIC_URL_SAFE
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    BASIC_URL_SAFE,
    /**
     * The value indicates that the encoding format of base64 is MIME_URL_SAFE
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    MIME_URL_SAFE,
  }

  /**
   * Decodes a Base64 encoded String or input u8 array into a newly-allocated
   * u8 array using the Base64 encoding scheme.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  class Base64Helper {
    /**
     * Constructor for creating base64 encoding and decoding
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();

    /**
     * Encodes all bytes from the specified u8 array into a newly-allocated u8 array using the Base64 encoding scheme.
     *
     * @param { Uint8Array } src - A Uint8Array value
     * @param { Type } [options] - Enumerating input parameters includes two encoding formats: BASIC and BASIC_URL_SAFE
     * @returns { Uint8Array } Return the encoded new Uint8Array.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    encodeSync(src: Uint8Array, options?: Type): Uint8Array;

    /**
     * Encodes the specified byte array into a String using the Base64 encoding scheme.
     *
     * @param { Uint8Array } src - A Uint8Array value
     * @param { Type } options - one of the Type enumeration
     * @returns { string } Return the encoded string.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    encodeToStringSync(src: Uint8Array, options?: Type): string;

    /**
     * Decodes a Base64 encoded String or input u8 array into a newly-allocated u8 array using the Base64 encoding scheme.
     *
     * @param { string } src - A Uint8Array value or a string value
     * @param { Type } [options] - one of the Type enumeration
     * @returns { Uint8Array } Return the decoded Uint8Array.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    decodeSync(src: Uint8Array | string, options?: Type): Uint8Array;

    /**
     * Asynchronously encodes all bytes in the specified u8 array into the newly allocated u8 array using the Base64 encoding scheme.
     *
     * @param { Uint8Array } src - A Uint8Array value
     * @param { Type } [options] - Enumerating input parameters includes two encoding formats: BASIC and BASIC_URL_SAFE
     * @returns { Promise<Uint8Array> } Return the encodes asynchronous new Uint8Array.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    encode(src: Uint8Array, options?: Type): Promise<Uint8Array>;

    /**
     * Asynchronously encodes the specified byte array into a String using the Base64 encoding scheme.
     *
     * @param { Uint8Array } src - A Uint8Array value
     * @param { Type } [options] - one of the Type enumeration
     * @returns { Promise<string> } Returns the encoded asynchronous string.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    encodeToString(src: Uint8Array, options?: Type): Promise<string>;

    /**
     * Use the Base64 encoding scheme to asynchronously decode a Base64-encoded string or
     * input u8 array into a newly allocated u8 array.
     *
     * @param { Uint8Array | string } src - A Uint8Array value or a string value
     * @param { Type } [options] - one of the Type enumeration
     * @returns { Promise<Uint8Array> } Return the decoded asynchronous Uint8Array.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    decode(src: Uint8Array | string, options?: Type): Promise<Uint8Array>;
  }

  /**
   * The ScopeComparable contains comparison methods.
   *
   * @interface ScopeComparable
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  interface ScopeComparable<T> {
    /**
     * The comparison function is used by the scope.
     *
     * @param { ScopeComparable } other - Other
     * @returns { boolean } Returns whether the current object is greater than or equal to the input object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    compareTo(other: T): boolean;
  }

  /**
    * A type used to denote ScopeComparable or number.
    *
    * @typedef { ScopeComparable }
    * @syscap SystemCapability.Utils.Lang
    * @crossplatform
    * @atomicservice
    * @since 20
    */
  type ScopeType<T> = ScopeComparable<T>;

  class ScopeHelper<T extends ScopeComparable<T>> {
    /**
     * A constructor used to create a Scope instance with the lower and upper bounds specified.
     *
     * @param { ScopeType } lowerObj - A ScopeType value
     * @param { ScopeType } upperObj - A ScopeType value
     * @since 20
     */
    constructor(lowerObj: T, upperObj: T);

    /**
     * Obtains a string representation of the current range.
     *
     * @returns { string } Returns a string representation of the current range object.
     * @since 20
     */
    toString(): string;

    /**
     * Returns the intersection of a given range and the current range.
     *
     * @param { ScopeHelper } range - A Scope range object
     * @returns { ScopeHelper } Returns the intersection of a given range and the current range.
     * @since 20
     */
    intersect(range: ScopeHelper<T>): ScopeHelper<T>;

    /**
     * Returns the intersection of the current range and the range specified by the given lower and upper bounds.
     *
     * @param { ScopeType } lowerObj - A ScopeType value
     * @param { ScopeType } upperObj - A ScopeType value
     * @returns { ScopeHelper } Returns the intersection of the current range and the range specified by the given lower and upper bounds.
     * @since 20
     */
    intersect(lowerObj: T, upperObj: T): ScopeHelper<T>;

    /**
     * Obtains the upper bound of the current range.
     *
     * @returns { ScopeType } Returns the upper bound of the current range.
     * @since 20
     */
    getUpper(): T;

    /**
     * Obtains the lower bound of the current range.
     *
     * @returns { ScopeType } Returns the lower bound of the current range.
     * @since 20
     */
    getLower(): T;

    /**
     * Creates the smallest range that includes the current range and the given lower and upper bounds.
     *
     * @param { ScopeType } lowerObj - A ScopeType value
     * @param { ScopeType } upperObj - A ScopeType value
     * @returns { ScopeHelper } Returns the smallest range that includes the current range and the given lower and upper bounds.
     * @since 20
     */
    expand(lowerObj: T, upperObj: T): ScopeHelper<T>;

    /**
     * Creates the smallest range that includes the current range and a given range.
     *
     * @param { ScopeHelper } range - A Scope range object
     * @returns { ScopeHelper } Returns the smallest range that includes the current range and a given range.
     * @since 20
     */
    expand(range: ScopeHelper<T>): ScopeHelper<T>;

    /**
     * Creates the smallest range that includes the current range and a given value.
     *
     * @param { ScopeType } value - A ScopeType value
     * @returns { ScopeHelper } Returns the smallest range that includes the current range and a given value.
     * @since 20
     */
    expand(value: T): ScopeHelper<T>;

    /**
     * Checks whether a given value is within the current range.
     *
     * @param { ScopeType } value - A ScopeType value
     * @returns { boolean } If the value is within the current range return true,otherwise return false.
     * @since 20
     */
    contains(value: T): boolean;

    /**
     * Checks whether a given range is within the current range.
     *
     * @param { ScopeHelper } range - A Scope range
     * @returns { boolean } If the current range is within the given range return true,otherwise return false.
     * @since 20
     */
    contains(range: ScopeHelper<T>): boolean;

    /**
     * Clamps a given value to the current range.
     *
     * @param { ScopeType } value - A ScopeType value
     * @returns { ScopeType } Returns a ScopeType object that a given value is clamped to the current range.
     * @since 20
     */
    clamp(value: T): T;
  }

  class LRUCache<K, V> {
    /**
     * Default constructor used to create a new LruBuffer instance with the default capacity of 64.
     *
     * @param { number } [capacity] - Indicates the capacity to customize for the buffer.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor(capacity?: number);

    /**
     * Updates the buffer capacity to a specified capacity.
     *
     * @param { number } newCapacity - Indicates the new capacity to set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    updateCapacity(newCapacity: number): void;

    /**
     * Returns a string representation of the object.
     *
     * @returns { string } Returns the string representation of the object and outputs the string representation of the object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    toString(): string;

    /**
     * Obtains a list of all values in the current buffer.
     *
     * @type { number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    get length(): number;

    /**
     * Obtains the capacity of the current buffer.
     *
     * @returns { number } Returns the capacity of the current buffer.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getCapacity(): number;

    /**
     * Clears key-value pairs from the current buffer.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    clear(): void;

    /**
     * Obtains the number of times createDefault(Object) returned a value.
     *
     * @returns { number } Returns the number of times createDefault(java.lang.Object) returned a value.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getCreateCount(): number;

    /**
     * Obtains the number of times that the queried values are not matched.
     *
     * @returns { number } Returns the number of times that the queried values are not matched.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getMissCount(): number;

    /**
     * Obtains the number of times that values are evicted from the buffer.
     *
     * @returns { number } Returns the number of times that values are evicted from the buffer.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getRemovalCount(): number;

    /**
     * Obtains the number of times that the queried values are successfully matched.
     *
     * @returns { number } Returns the number of times that the queried values are successfully matched.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getMatchCount(): number;

    /**
     * Obtains the number of times that values are added to the buffer.
     *
     * @returns { number } Returns the number of times that values are added to the buffer.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getPutCount(): number;

    /**
     * Checks whether the current buffer is empty.
     *
     * @returns { boolean } Returns true if the current buffer contains no value.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    isEmpty(): boolean;

    /**
     * Obtains the value associated with a specified key.
     *
     * @param { K } key - Indicates the key to query.
     * @returns { V | undefined } Returns the value associated with the key if the specified key is present in the buffer; returns null otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    get(key: K): V | undefined;

    /**
     * Adds a key-value pair to the buffer.
     *
     * @param { K } key - Indicates the key to add.
     * @param { V } value - Indicates the value associated with the key to add.
     * @returns { V | undefined } Returns the value associated with the added key; returns the original value if the key to add already exists, returns null otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    put(key: K, value: V): V | undefined;

    /**
     * Obtains a list of all values in the current buffer.
     *
     * @returns { Array<V> } Returns the list of all values in the current buffer, ordered from the most recently accessed to the least recently accessed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    values(): Array<V>;

    /**
     * Obtains a list of keys for the values in the current buffer.
     * since 9
     *
     * @returns { Array<K> } Returns a list of keys ordered by access time, from the most recently accessed to the least recently accessed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    keys(): Array<K>;

    /**
     * Deletes a specified key and its associated value from the current buffer.
     *
     * @param { K } key - Indicates the key to delete.
     * @returns { V | undefined } Returns an Optional object containing the deleted key-value pair; returns an empty Optional object if the key does not exist.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    remove(key: K): V | undefined;

    /**
     * Executes subsequent operations after a value is deleted.
     *
     * @param { boolean } isEvict - The parameter value is true if this method is called due to insufficient capacity,
     * and the parameter value is false in other cases.
     * @param { K } key - Indicates the deleted key.
     * @param { V } value - Indicates the deleted value.
     * @param { V } newValue - The parameter value is the new value associated if the put(java.lang.Object,java.lang.Object)
     * method is called and the key to add already exists. The parameter value is null in other cases.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    afterRemoval(isEvict: boolean, key: K, value: V, newValue: V): void;

    /**
     * Checks whether the current buffer contains a specified key.
     *
     * @param { K } key - Indicates the key to check.
     * @returns { boolean } Returns true if the buffer contains the specified key.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    contains(key: K): boolean;

    /**
     * Executes subsequent operations if miss to compute a value for the specific key.
     *
     * @param { K } key - Indicates the missed key.
     * @returns { V | undefined } Returns the value associated with the key.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    createDefault(key: K): V | undefined;

    /**
     * Returns an array of key-value pairs of enumeratable properties of a given object.
     *
     * @returns { IterableIterator<[K, V]> } Returns an array of key-value pairs for the enumeratable properties of the given object itself.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    entries(): IterableIterator<[K, V]>;

    /**
     * Specifies the default iterator for an object.
     *
     * @returns { IterableIterator<[K, V]> } Returns a two - dimensional array in the form of key - value pairs.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    $_iterator(): IterableIterator<[K, V]>;
  }

  /**
   * Defines the TextDecoder related options parameters.
   *
   * @interface TextDecoderOptions
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  interface TextDecoderOptions {
    /**
     * Is a fatal error displayed? The default value is false.
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */

    fatal?: boolean;
    /**
    * Do you want to ignore BOM tags? The default value is false.
    * @type { ?boolean }
    * @syscap SystemCapability.Utils.Lang
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    ignoreBOM?: boolean;
  }

  /**
   * Defines the decode with stream related options parameters.
   *
   * @interface DecodeToStringOptions
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  interface DecodeToStringOptions {
    /**
    * Stream option controls stream processing in decoding. The default value is false.
    * @type { ?boolean }
    * @syscap SystemCapability.Utils.Lang
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    stream?: boolean;
  }

  /**
   * The TextDecoder represents a text decoder that accepts a string as input,
   * decodes it in UTF-8 format, and outputs UTF-8 byte stream.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  class TextDecoder {
    /**
     * The textDecoder constructor.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();

    /**
     * The source encoding's name, lowercased.
     *
     * @return { string } The string of the TextDecoder encoding.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    get encoding(): string;

    /**
     * Returns `true` if error mode is "fatal", and `false` otherwise.
     *
     * @return { boolean } Whether to display fatal errors.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    get fatal(): boolean;

    /**
     * Returns `true` if ignore BOM flag is set, and `false` otherwise.
     *
     * @return { boolean } Returns `true` if ignore BOM flag is set, and `false` otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    get ignoreBOM(): boolean;

    /**
     * Replaces the original constructor to process arguments and return a textDecoder object.
     *
     * @param { string } [encoding] - Decoding format
     * @param { TextDecoderOptions } [options] - Options
     * @returns { TextDecoder }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static create(encoding?: string, options?: TextDecoderOptions): TextDecoder;

    /**
     * The input is decoded and a string is returned.
     * If options.stream is set to true, any incomplete byte sequences found at the end of the input are internally
     * buffered and will be emitted after the next call to textDecoder.decodeToString().
     * If textDecoder.fatal is set to true, any decoding errors that occur will result in a TypeError being thrown.
     *
     * @param { Uint8Array } input - Decoded numbers in accordance with the format.
     * @param { DecodeToStringOptions } [options] - The default option is set to false.
     * @returns { string } Return decoded text
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Parameter verification failed;
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    decodeToString(input: Uint8Array, options?: DecodeToStringOptions): string;
  }

  /**
   * Return encoded text.
   *
   * @interface EncodeIntoUint8ArrayInfo
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  interface EncodeIntoUint8ArrayInfo {
    /**
    * The read represents the number of characters that have been encoded.
    * @type { int }
    * @syscap SystemCapability.Utils.Lang
    * @crossplatform
    * @atomicservice
    * @since 20
    */

    read: int;
    /**
    * The written represents the number of bytes occupied by the encoded characters.
    * @type { int }
    * @syscap SystemCapability.Utils.Lang
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    written: int;
  }

  /**
   * The TextEncoder interface represents a text encoder.
   * The encoder takes the byte stream as the input and outputs the String string.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  class TextEncoder {
    /**
     * Encoding format.
     *
     * @return { string } The string of the TextEncoder encoding.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    get encoding(): string;

    /**
     * The textEncoder constructor.
     *
     * @param { string } [encoding] - The string for encoding format.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor(encoding?: string);

    /**
     * Create a TextEncoder object.
     *
     * @param { string } [encoding] - The string for encoding format.
     * @returns { TextEncoder }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    static create(encoding?: string): TextEncoder;

    /**
     * UTF-8 encodes the input string and returns a Uint8Array containing the encoded bytes.
     *
     * @param { string } [input] - The string to be encoded.
     * @returns { Uint8Array } Returns the encoded text.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    encodeInto(input?: string): Uint8Array;

    /**
     * Encode string, write the result to dest array.
     *
     * @param { string } input - The string to be encoded.
     * @param { Uint8Array } dest - Encoded numbers in accordance with the format
     * @returns { EncodeIntoUint8ArrayInfo } Return the object, where read represents
     * the number of characters that have been encoded, and written
     * represents the number of bytes occupied by the encoded characters.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    encodeIntoUint8Array(input: string, dest: Uint8Array): EncodeIntoUint8ArrayInfo;
  }
}
export default util;
