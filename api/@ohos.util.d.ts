/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

/**
 * TextDecoder support full encoding in ICU data utf-8 utf-16 iso8859 must support in all device, TextEncoder takes a
 * stream of code points as input and emits a stream of UTF-8 bytes, and system help function.
 *
 * @namespace util
 * @permission N/A
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 */
/**
 * TextDecoder support full encoding in ICU data utf-8 utf-16 iso8859 must support in all device, TextEncoder takes a
 * stream of code points as input and emits a stream of UTF-8 bytes, and system help function.
 *
 * @namespace util
 * @permission N/A
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
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
   * @permission N/A
   * @param { string } format - format format Styled string
   * @param { Object[] } args - args args Data to be formatted
   * @returns { string } Return the character string formatted in a specific format
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.util.format
   */
  function printf(format: string, ...args: Object[]): string;

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
   * @permission N/A
   * @param { string } format - format format Styled string
   * @param { Object[] } args - args args Data to be formatted
   * @returns { string } Return the character string formatted in a specific format
   * @throws { BusinessError } 401 - if the input parameters are invalid.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  function format(format: string, ...args: Object[]): string;

  /**
   * Get the string name of the system errno.
   *
   * @permission N/A
   * @param { number } errno - errno errno The error code generated by an error in the system
   * @returns { string } Return the string name of a system errno
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.util.errnoToString
   */
  function getErrorString(errno: number): string;

  /**
   * Get the string name of the system errno.
   *
   * @permission N/A
   * @param { number } errno - errno errno The error code generated by an error in the system
   * @returns { string } Return the string name of a system errno
   * @throws { BusinessError } 401 - The type of errno must be number.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Get the string name of the system errno.
   *
   * @permission N/A
   * @param { number } errno - errno errno The error code generated by an error in the system
   * @returns { string } Return the string name of a system errno
   * @throws { BusinessError } 401 - The type of errno must be number.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  function errnoToString(errno: number): string;

  /**
   * Takes an async function (or a function that returns a Promise) and returns a function following the
   * error-first callback style.
   *
   * @permission N/A
   * @param { Function } original - original original Asynchronous function
   * @returns { function }
   * @throws { BusinessError } 401 - The type of original must be Function.
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   */
  /**
   * Takes an async function (or a function that returns a Promise) and returns a function following the
   * error-first callback style.
   *
   * @permission N/A
   * @param { Function } original - original original Asynchronous function
   * @returns { function }
   * @throws { BusinessError } 401 - The type of original must be Function.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  function callbackWrapper(original: Function): (err: Object, value: Object) => void;

  /**
   * Takes a function following the common error-first callback style, i.e taking an (err, value) =>
   * callback as the last argument, and return a function that returns promises.
   *
   * @permission N/A
   * @param { (err: Object, value: Object) => void } original - original original Asynchronous function
   * @returns { Function } Return a function that returns promises
   * @throws { BusinessError } 401 - The type of original must be Function.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Takes a function following the common error-first callback style, i.e taking an (err, value) =>
   * callback as the last argument, and return a function that returns promises.
   *
   * @permission N/A
   * @param { (err: Object, value: Object) => void } original - original original Asynchronous function
   * @returns { Function } Return a function that returns promises
   * @throws { BusinessError } 401 - The type of original must be Function.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  function promisify(original: (err: Object, value: Object) => void): Function;

  /**
   * Takes a function following the common error-first callback style, i.e taking an (err, value) =>
   * callback as the last argument, and return a version that returns promises.
   *
   * @permission N/A
   * @param { (err: Object, value: Object) => void } original - original original Asynchronous function
   * @returns { Object } Return a version that returns promises
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.util.promisify
   */
  function promiseWrapper(original: (err: Object, value: Object) => void): Object;

  /**
   * Generate a random RFC 4122 version 4 UUID using a cryptographically secure random number generator.
   *
   * @permission N/A
   * @param { boolean } entropyCache - entropyCache entropyCache Whether to generate the UUID with using the cache. Default: true.
   * @returns { string } Return a string representing this UUID.
   * @throws { BusinessError } 401 - The type of entropyCache must be boolean.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Generate a random RFC 4122 version 4 UUID using a cryptographically secure random number generator.
   *
   * @permission N/A
   * @param { boolean } entropyCache - entropyCache entropyCache Whether to generate the UUID with using the cache. Default: true.
   * @returns { string } Return a string representing this UUID.
   * @throws { BusinessError } 401 - The type of entropyCache must be boolean.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  function generateRandomUUID(entropyCache?: boolean): string;

  /**
   * Generate a random RFC 4122 version 4 binary UUID using a cryptographically secure random number generator.
   *
   * @permission N/A
   * @param { boolean } entropyCache - entropyCache entropyCache Whether to generate the UUID with using the cache. Default: true.
   * @returns { Uint8Array } Return a Uint8Array representing this UUID.
   * @throws { BusinessError } 401 - The type of entropyCache must be boolean.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Generate a random RFC 4122 version 4 binary UUID using a cryptographically secure random number generator.
   *
   * @permission N/A
   * @param { boolean } entropyCache - entropyCache entropyCache Whether to generate the UUID with using the cache. Default: true.
   * @returns { Uint8Array } Return a Uint8Array representing this UUID.
   * @throws { BusinessError } 401 - The type of entropyCache must be boolean.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  function generateRandomBinaryUUID(entropyCache?: boolean): Uint8Array;

  /**
   * Parse a UUID from the string standard representation as described in the RFC 4122 version 4.
   *
   * @permission N/A
   * @param { string } uuid - uuid uuid String that specifies a UUID
   * @returns { Uint8Array } Return a Uint8Array representing this UUID. Throw SyntaxError if parsing fails.
   * @throws { BusinessError } 401 - The type of uuid must be string.
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Parse a UUID from the string standard representation as described in the RFC 4122 version 4.
   *
   * @permission N/A
   * @param { string } uuid - uuid uuid String that specifies a UUID
   * @returns { Uint8Array } Return a Uint8Array representing this UUID. Throw SyntaxError if parsing fails.
   * @throws { BusinessError } 401 - The type of uuid must be string.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  function parseUUID(uuid: string): Uint8Array;

  /**
   * The TextEncoder represents a text encoder that accepts a string as input,
   * encodes it in UTF-8 format, and outputs UTF-8 byte stream.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   */
  /**
   * The TextEncoder represents a text encoder that accepts a string as input,
   * encodes it in UTF-8 format, and outputs UTF-8 byte stream.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  class TextDecoder {
    /**
     * The source encoding's name, lowercased.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * The source encoding's name, lowercased.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    readonly encoding: string;

    /**
     * Returns `true` if error mode is "fatal", and `false` otherwise.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Returns `true` if error mode is "fatal", and `false` otherwise.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    readonly fatal: boolean;

    /**
     * Returns `true` if ignore BOM flag is set, and `false` otherwise.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Returns `true` if ignore BOM flag is set, and `false` otherwise.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    readonly ignoreBOM = false;

    /**
     * The textEncoder constructor.
     *
     * @permission N/A
     * @param { string } encoding - encoding encoding Decoding format
     * @param { object } options - options options
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.util.TextDecoder.create
     */
    constructor(encoding?: string, options?: { fatal?: boolean; ignoreBOM?: boolean });

    /**
     * The textEncoder constructor.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * The textEncoder constructor.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    constructor();

    /**
     * Replaces the original constructor to process arguments and return a textDecoder object.
     *
     * @permission N/A
     * @param { string } encoding - encoding encoding Decoding format
     * @param { object } options - options options
     * @returns { TextDecoder }
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Replaces the original constructor to process arguments and return a textDecoder object.
     *
     * @permission N/A
     * @param { string } encoding - encoding encoding Decoding format
     * @param { object } options - options options
     * @returns { TextDecoder }
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    static create(encoding?: string, options?: { fatal?: boolean; ignoreBOM?: boolean }): TextDecoder;

    /**
     * Returns the result of running encoding's decoder.
     *
     * @permission N/A
     * @param { Uint8Array } input - input input Decoded numbers in accordance with the format
     * @param { object } options - options options
     * @returns { string } Return decoded text
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.util.decodeWithStream
     */
    decode(input: Uint8Array, options?: { stream?: false }): string;

    /**
     * Decodes the input and returns a string. If options.stream is true, any incomplete byte sequences occurring
     * at the end of the input are buffered internally and emitted after the next call to textDecoder.decode().
     * If textDecoder.fatal is true, decoding errors that occur will result in a TypeError being thrown.
     *
     * @permission N/A
     * @param { Uint8Array } input - input input Decoded numbers in accordance with the format
     * @param { object } options - options options
     * @returns { string } Return decoded text
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Decodes the input and returns a string. If options.stream is true, any incomplete byte sequences occurring
     * at the end of the input are buffered internally and emitted after the next call to textDecoder.decode().
     * If textDecoder.fatal is true, decoding errors that occur will result in a TypeError being thrown.
     *
     * @permission N/A
     * @param { Uint8Array } input - input input Decoded numbers in accordance with the format
     * @param { object } options - options options
     * @returns { string } Return decoded text
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    decodeWithStream(input: Uint8Array, options?: { stream?: boolean }): string;
  }

  /**
   * The TextDecoder interface represents a text decoder.
   * The decoder takes the byte stream as the input and outputs the String string.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @since 7
   */
  /**
   * The TextDecoder interface represents a text decoder.
   * The decoder takes the byte stream as the input and outputs the String string.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  class TextEncoder {
    /**
     * Encoding format.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Encoding format.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    readonly encoding = 'utf-8';

    /**
     * The textEncoder constructor.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * The textEncoder constructor.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    constructor();

    /**
     * The textEncoder constructor.
     *
     * @permission N/A
     * @param { string } encoding - encoding encoding The string for encoding format.
     * @throws { BusinessError } 401 - The type of encoding must be string.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * The textEncoder constructor.
     *
     * @permission N/A
     * @param { string } encoding - encoding encoding The string for encoding format.
     * @throws { BusinessError } 401 - The type of encoding must be string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    constructor(encoding?: string);

    /**
     * Returns the result of encoder.
     *
     * @permission N/A
     * @param { string } input - input input The string to be encoded.
     * @returns { Uint8Array } Returns the encoded text.
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.util.encodeInto
     */
    encode(input?: string): Uint8Array;

    /**
     * UTF-8 encodes the input string and returns a Uint8Array containing the encoded bytes.
     *
     * @permission N/A
     * @param { string } input - input input The string to be encoded.
     * @returns { Uint8Array } Returns the encoded text.
     * @throws { BusinessError } 401 - The type of input must be string.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * UTF-8 encodes the input string and returns a Uint8Array containing the encoded bytes.
     *
     * @permission N/A
     * @param { string } input - input input The string to be encoded.
     * @returns { Uint8Array } Returns the encoded text.
     * @throws { BusinessError } 401 - The type of input must be string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    encodeInto(input?: string): Uint8Array;

    /**
     * Encode string, write the result to dest array.
     *
     * @permission N/A
     * @param { string } input - input input The string to be encoded.
     * @param { Uint8Array } dest - dest dest Decoded numbers in accordance with the format
     * @returns { object } Return the object, where read represents
     * the number of characters that have been encoded, and written
     * represents the number of bytes occupied by the encoded characters.
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.util.encodeIntoUint8Array
     */
    encodeInto(input: string, dest: Uint8Array): { read: number; written: number };

    /**
     * Encode string, write the result to dest array.
     *
     * @permission N/A
     * @param { string } input - input input The string to be encoded.
     * @param { Uint8Array } dest - dest dest dest Decoded numbers in accordance with the format
     * @returns { object } Return the object, where read represents
     * the number of characters that have been encoded, and written
     * represents the number of bytes occupied by the encoded characters.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Encode string, write the result to dest array.
     *
     * @permission N/A
     * @param { string } input - input input The string to be encoded.
     * @param { Uint8Array } dest - dest dest dest Decoded numbers in accordance with the format
     * @returns { object } Return the object, where read represents
     * the number of characters that have been encoded, and written
     * represents the number of bytes occupied by the encoded characters.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    encodeIntoUint8Array(input: string, dest: Uint8Array): { read: number; written: number };
  }

  /**
   * The rational number is mainly to compare rational numbers and obtain the numerator and denominator.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * The rational number is mainly to compare rational numbers and obtain the numerator and denominator.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  class RationalNumber {
    /**
     * A constructor used to create a RationalNumber instance with a given numerator and denominator.
     *
     * @permission N/A
     * @param { number } numerator - numerator numerator An integer number
     * @param { number } denominator - denominator denominator An integer number
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.RationalNumber.parseRationalNumber
     */
    constructor(numerator: number, denominator: number);

    /**
     * A constructor used to create a RationalNumber instance with a given numerator and denominator.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * A constructor used to create a RationalNumber instance with a given numerator and denominator.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    constructor();

    /**
     * Used to create a RationalNumber instance with a given numerator and denominator.
     *
     * @permission N/A
     * @param { number } numerator - numerator numerator An integer number
     * @param { number } denominator - denominator denominator An integer number
     * @returns { RationalNumber }
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Used to create a RationalNumber instance with a given numerator and denominator.
     *
     * @permission N/A
     * @param { number } numerator - numerator numerator An integer number
     * @param { number } denominator - denominator denominator An integer number
     * @returns { RationalNumber }
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    static parseRationalNumber(numerator: number, denominator: number): RationalNumber;

    /**
     * Creates a RationalNumber object based on a given string.
     *
     * @permission N/A
     * @param { string } rationalString String Expression of Rational Numbers
     * @returns { RationalNumber } Returns a RationalNumber object generated based on the given string.
     * @throws { BusinessError } 401 - The type of rationalString must be string.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Creates a RationalNumber object based on a given string.
     *
     * @permission N/A
     * @param { string } rationalString String Expression of Rational Numbers
     * @returns { RationalNumber } Returns a RationalNumber object generated based on the given string.
     * @throws { BusinessError } 401 - The type of rationalString must be string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    static createRationalFromString(rationalString: string): RationalNumber;

    /**
     * Compares the current RationalNumber object to the given object.
     *
     * @permission N/A
     * @param { RationalNumber } another - another another An object of other rational numbers
     * @returns { number } Returns 0 or 1, or -1, depending on the comparison.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.compare
     */
    compareTo(another: RationalNumber): number;

    /**
     * Compares the current RationalNumber object to the given object.
     *
     * @permission N/A
     * @param { RationalNumber } another - another another An object of other rational numbers
     * @returns { number } Returns 0 or 1, or -1, depending on the comparison.
     * @throws { BusinessError } 401 - The type of another must be RationalNumber.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Compares the current RationalNumber object to the given object.
     *
     * @permission N/A
     * @param { RationalNumber } another - another another An object of other rational numbers
     * @returns { number } Returns 0 or 1, or -1, depending on the comparison.
     * @throws { BusinessError } 401 - The type of another must be RationalNumber.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    compare(another: RationalNumber): number;

    /**
     * Compares two objects for equality.
     *
     * @permission N/A
     * @param { Object } obj - obj obj An object
     * @returns { boolean } Returns true if the given object is the same as the current object; Otherwise, false is returned.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Compares two objects for equality.
     *
     * @permission N/A
     * @param { Object } obj - obj obj An object
     * @returns { boolean } Returns true if the given object is the same as the current object; Otherwise, false is returned.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    equals(obj: Object): boolean;

    /**
     * Gets integer and floating-point values of a rational number object.
     *
     * @permission N/A
     * @returns { number } Returns the integer and floating-point values of a rational number object.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Gets integer and floating-point values of a rational number object.
     *
     * @permission N/A
     * @returns { number } Returns the integer and floating-point values of a rational number object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    valueOf(): number;

    /**
     * Get the greatest common divisor of two integers.
     *
     * @permission N/A
     * @param { number } number1 - number1 number1 Is an integer.
     * @param { number } number2 - number2 number2 Is an integer.
     * @returns { number } Returns the greatest common divisor of two integers, integer type.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.getCommonFactor
     */
    static getCommonDivisor(number1: number, number2: number): number;

    /**
     * Get the greatest common factor of two integers.
     *
     * @permission N/A
     * @param { number } number1 - number number1 Is an integer.
     * @param { number } number2 - numbe2 number2 Is an integer.
     * @returns { number } Returns the greatest common factor of two integers, integer type.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Get the greatest common factor of two integers.
     *
     * @permission N/A
     * @param { number } number1 - number number1 Is an integer.
     * @param { number } number2 - numbe2 number2 Is an integer.
     * @returns { number } Returns the greatest common factor of two integers, integer type.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    static getCommonFactor(number1: number, number2: number): number;

    /**
     * Gets the denominator of the current object.
     *
     * @permission N/A
     * @returns { number } Returns the denominator of the current object.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Gets the denominator of the current object.
     *
     * @permission N/A
     * @returns { number } Returns the denominator of the current object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    getDenominator(): number;

    /**
     * Gets the numerator​ of the current object.
     *
     * @permission N/A
     * @returns { number } Returns the numerator​ of the current object.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Gets the numerator​ of the current object.
     *
     * @permission N/A
     * @returns { number } Returns the numerator​ of the current object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    getNumerator(): number;

    /**
     * Checks whether the current RationalNumber object represents an infinite value.
     *
     * @permission N/A
     * @returns { boolean } If the denominator is not 0, true is returned. Otherwise, false is returned.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Checks whether the current RationalNumber object represents an infinite value.
     *
     * @permission N/A
     * @returns { boolean } If the denominator is not 0, true is returned. Otherwise, false is returned.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isFinite(): boolean;

    /**
     * Checks whether the current RationalNumber object represents a Not-a-Number (NaN) value.
     *
     * @permission N/A
     * @returns { boolean } If both the denominator and numerator are 0, true is returned. Otherwise, false is returned.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Checks whether the current RationalNumber object represents a Not-a-Number (NaN) value.
     *
     * @permission N/A
     * @returns { boolean } If both the denominator and numerator are 0, true is returned. Otherwise, false is returned.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isNaN(): boolean;

    /**
     * Checks whether the current RationalNumber object represents the value 0.
     *
     * @permission N/A
     * @returns { boolean } If the value represented by the current object is 0, true is returned. Otherwise, false is returned.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Checks whether the current RationalNumber object represents the value 0.
     *
     * @permission N/A
     * @returns { boolean } If the value represented by the current object is 0, true is returned. Otherwise, false is returned.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isZero(): boolean;

    /**
     * Obtains a string representation of the current RationalNumber object.
     *
     * @permission N/A
     * @returns { string } Returns a string representation of the current RationalNumber object.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Obtains a string representation of the current RationalNumber object.
     *
     * @permission N/A
     * @returns { string } Returns a string representation of the current RationalNumber object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    toString(): string;
  }

  /**
   * The LruBuffer algorithm replaces the least used data with new data when the buffer space is insufficient.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.util.LRUCache
   */
  class LruBuffer<K, V> {
    /**
     * Default constructor used to create a new LruBuffer instance with the default capacity of 64.
     *
     * @permission N/A
     * @param { number } capacity - capacity capacity Indicates the capacity to customize for the buffer.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.constructor
     */
    constructor(capacity?: number);

    /**
     * Updates the buffer capacity to a specified capacity.
     *
     * @permission N/A
     * @param { number } newCapacity - newCapacity newCapacity Indicates the new capacity to set.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.updateCapacity
     */
    updateCapacity(newCapacity: number): void;

    /**
     * Returns a string representation of the object.
     *
     * @permission N/A
     * @returns { string } Returns the string representation of the object and outputs the string representation of the object.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.toString
     */
    toString(): string;

    /**
     * Obtains a list of all values in the current buffer.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.length
     */
    length: number;

    /**
     * Obtains the capacity of the current buffer.
     *
     * @permission N/A
     * @returns { number } Returns the capacity of the current buffer.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.getCapacity
     */
    getCapacity(): number;

    /**
     * Clears key-value pairs from the current buffer.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.clear
     */
    clear(): void;

    /**
     * Obtains the number of times createDefault(Object) returned a value.
     *
     * @permission N/A
     * @returns { number } Returns the number of times createDefault(java.lang.Object) returned a value.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.getCreateCount
     */
    getCreateCount(): number;

    /**
     * Obtains the number of times that the queried values are not matched.
     *
     * @permission N/A
     * @returns { number } Returns the number of times that the queried values are not matched.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.getMissCount
     */
    getMissCount(): number;

    /**
     * Obtains the number of times that values are evicted from the buffer.
     *
     * @permission N/A
     * @returns { number } Returns the number of times that values are evicted from the buffer.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.getRemovalCount
     */
    getRemovalCount(): number;

    /**
     * Obtains the number of times that the queried values are successfully matched.
     *
     * @permission N/A
     * @returns { number } Returns the number of times that the queried values are successfully matched.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.getMatchCount
     */
    getMatchCount(): number;

    /**
     * Obtains the number of times that values are added to the buffer.
     *
     * @permission N/A
     * @returns { number } Returns the number of times that values are added to the buffer.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.getPutCount
     */
    getPutCount(): number;

    /**
     * Checks whether the current buffer is empty.
     *
     * @permission N/A
     * @returns { boolean } Returns true if the current buffer contains no value.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.isEmpty
     */
    isEmpty(): boolean;

    /**
     * Obtains the value associated with a specified key.
     *
     * @permission N/A
     * @param { K } key - key key Indicates the key to query.
     * @returns { V | undefined } Returns the value associated with the key if the specified key is present in the buffer; returns null otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.get
     */
    get(key: K): V | undefined;

    /**
     * Adds a key-value pair to the buffer.
     *
     * @permission N/A
     * @param { K } key - key key Indicates the key to add.
     * @param { V } value - value value Indicates the value associated with the key to add.
     * @returns { V } Returns the value associated with the added key; returns the original value if the key to add already exists.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.put
     */
    put(key: K, value: V): V;

    /**
     * Obtains a list of all values in the current buffer.
     *
     * @permission N/A
     * @returns { V[] } Returns the list of all values in the current buffer in ascending order, from the most recently accessed to least recently accessed.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.values
     */
    values(): V[];

    /**
     * Obtains a list of keys for the values in the current buffer.
     *
     * @permission N/A
     * @returns { K[] } Returns a list of keys sorted from most recently accessed to least recently accessed.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.keys
     */
    keys(): K[];

    /**
     * Deletes a specified key and its associated value from the current buffer.
     *
     * @permission N/A
     * @param { K } key - key key Indicates the key to delete.
     * @returns { V | undefined } Returns an Optional object containing the deleted key-value pair; returns an empty Optional object if the key does not exist.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.remove
     */
    remove(key: K): V | undefined;

    /**
     * Executes subsequent operations after a value is deleted.
     *
     * @permission N/A
     * @param { boolean } isEvict - isEvict isEvict The parameter value is true if this method is called due to insufficient capacity,
     * and the parameter value is false in other cases.
     * @param { K } key - key key Indicates the deleted key.
     * @param { V } value - value value Indicates the deleted value.
     * @param { V } newValue - newValue  newValue The parameter value is the new value associated if the put(java.lang.Object,java.lang.Object)
     * method is called and the key to add already exists. The parameter value is null in other cases.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.afterRemoval
     */
    afterRemoval(isEvict: boolean, key: K, value: V, newValue: V): void;

    /**
     * Checks whether the current buffer contains a specified key.
     *
     * @permission N/A
     * @param { K } key - key key Indicates the key to check.
     * @returns { boolean } Returns true if the buffer contains the specified key.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.contains
     */
    contains(key: K): boolean;

    /**
     * Called after a cache miss to compute a value for the corresponding key.
     *
     * @permission N/A
     * @param { K } key - key key Indicates the missed key.
     * @returns { V } Returns the value associated with the key.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.createDefault
     */
    createDefault(key: K): V;

    /**
     * Returns an array of key-value pairs of enumeratable properties of a given object.
     *
     * @permission N/A
     * @returns { IterableIterator<[K, V]> } Returns an array of key-value pairs for the enumeratable properties of the given object itself.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.entries
     */
    entries(): IterableIterator<[K, V]>;

    /**
     * Specifies the default iterator for an object.
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.[Symbol.iterator]
     * @syscap SystemCapability.Utils.Lang
     * @returns Returns a two - dimensional array in the form of key - value pairs.
     */
    [Symbol.iterator](): IterableIterator<[K, V]>;
  }

  /**
   * The LRUCache algorithm replaces the least used data with new data when the buffer space is insufficient.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * The LRUCache algorithm replaces the least used data with new data when the buffer space is insufficient.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  class LRUCache<K, V> {
    /**
     * Default constructor used to create a new LruBuffer instance with the default capacity of 64.
     *
     * @permission N/A
     * @param { number } capacity - capacity capacity Indicates the capacity to customize for the buffer.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Default constructor used to create a new LruBuffer instance with the default capacity of 64.
     *
     * @permission N/A
     * @param { number } capacity - capacity capacity Indicates the capacity to customize for the buffer.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    constructor(capacity?: number);

    /**
     * Updates the buffer capacity to a specified capacity.
     *
     * @permission N/A
     * @param { number } newCapacity - newCapacity newCapacity Indicates the new capacity to set.
     * @throws { BusinessError } 401 - The type of newCapacity must be number.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Updates the buffer capacity to a specified capacity.
     *
     * @permission N/A
     * @param { number } newCapacity - newCapacity newCapacity Indicates the new capacity to set.
     * @throws { BusinessError } 401 - The type of newCapacity must be number.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    updateCapacity(newCapacity: number): void;

    /**
     * Returns a string representation of the object.
     *
     * @permission N/A
     * @returns { string } Returns the string representation of the object and outputs the string representation of the object.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Returns a string representation of the object.
     *
     * @permission N/A
     * @returns { string } Returns the string representation of the object and outputs the string representation of the object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    toString(): string;

    /**
     * Obtains a list of all values in the current buffer.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Obtains a list of all values in the current buffer.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    length: number;

    /**
     * Obtains the capacity of the current buffer.
     *
     * @permission N/A
     * @returns { number } Returns the capacity of the current buffer.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Obtains the capacity of the current buffer.
     *
     * @permission N/A
     * @returns { number } Returns the capacity of the current buffer.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    getCapacity(): number;

    /**
     * Clears key-value pairs from the current buffer.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Clears key-value pairs from the current buffer.
     *
     * @permission N/A
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    clear(): void;

    /**
     * Obtains the number of times createDefault(Object) returned a value.
     *
     * @permission N/A
     * @returns { number } Returns the number of times createDefault(java.lang.Object) returned a value.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Obtains the number of times createDefault(Object) returned a value.
     *
     * @permission N/A
     * @returns { number } Returns the number of times createDefault(java.lang.Object) returned a value.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    getCreateCount(): number;

    /**
     * Obtains the number of times that the queried values are not matched.
     *
     * @permission N/A
     * @returns { number } Returns the number of times that the queried values are not matched.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Obtains the number of times that the queried values are not matched.
     *
     * @permission N/A
     * @returns { number } Returns the number of times that the queried values are not matched.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    getMissCount(): number;

    /**
     * Obtains the number of times that values are evicted from the buffer.
     *
     * @permission N/A
     * @returns { number } Returns the number of times that values are evicted from the buffer.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Obtains the number of times that values are evicted from the buffer.
     *
     * @permission N/A
     * @returns { number } Returns the number of times that values are evicted from the buffer.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    getRemovalCount(): number;

    /**
     * Obtains the number of times that the queried values are successfully matched.
     *
     * @permission N/A
     * @returns { number } Returns the number of times that the queried values are successfully matched.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Obtains the number of times that the queried values are successfully matched.
     *
     * @permission N/A
     * @returns { number } Returns the number of times that the queried values are successfully matched.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    getMatchCount(): number;

    /**
     * Obtains the number of times that values are added to the buffer.
     *
     * @permission N/A
     * @returns { number } Returns the number of times that values are added to the buffer.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Obtains the number of times that values are added to the buffer.
     *
     * @permission N/A
     * @returns { number } Returns the number of times that values are added to the buffer.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    getPutCount(): number;

    /**
     * Checks whether the current buffer is empty.
     *
     * @permission N/A
     * @returns { boolean } Returns true if the current buffer contains no value.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Checks whether the current buffer is empty.
     *
     * @permission N/A
     * @returns { boolean } Returns true if the current buffer contains no value.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isEmpty(): boolean;

    /**
     * Obtains the value associated with a specified key.
     *
     * @permission N/A
     * @param { K } key - key key Indicates the key to query.
     * @returns { V | undefined } Returns the value associated with the key if the specified key is present in the buffer; returns null otherwise.
     * @throws { BusinessError } 401 - The type of key must be object.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Obtains the value associated with a specified key.
     *
     * @permission N/A
     * @param { K } key - key key Indicates the key to query.
     * @returns { V | undefined } Returns the value associated with the key if the specified key is present in the buffer; returns null otherwise.
     * @throws { BusinessError } 401 - The type of key must be object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    get(key: K): V | undefined;

    /**
     * Adds a key-value pair to the buffer.
     *
     * @permission N/A
     * @param { K } key - key key Indicates the key to add.
     * @param { V } value - value value Indicates the value associated with the key to add.
     * @returns { V } Returns the value associated with the added key; returns the original value if the key to add already exists.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Adds a key-value pair to the buffer.
     *
     * @permission N/A
     * @param { K } key - key key Indicates the key to add.
     * @param { V } value - value value Indicates the value associated with the key to add.
     * @returns { V } Returns the value associated with the added key; returns the original value if the key to add already exists.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    put(key: K, value: V): V;

    /**
     * Obtains a list of all values in the current buffer.
     *
     * @permission N/A
     * @returns { V[] } Returns the list of all values in the current buffer in ascending order, from the most recently accessed to least recently accessed.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Obtains a list of all values in the current buffer.
     *
     * @permission N/A
     * @returns { V[] } Returns the list of all values in the current buffer in ascending order, from the most recently accessed to least recently accessed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    values(): V[];

    /**
     * Obtains a list of keys for the values in the current buffer.
     * since 9
     *
     * @permission N/A
     * @returns { K[] } Returns a list of keys sorted from most recently accessed to least recently accessed.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Obtains a list of keys for the values in the current buffer.
     * since 9
     *
     * @permission N/A
     * @returns { K[] } Returns a list of keys sorted from most recently accessed to least recently accessed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    keys(): K[];

    /**
     * Deletes a specified key and its associated value from the current buffer.
     *
     * @permission N/A
     * @param { K } key - key key Indicates the key to delete.
     * @returns { V | undefined } Returns an Optional object containing the deleted key-value pair; returns an empty Optional object if the key does not exist.
     * @throws { BusinessError } 401 - The type of key must be object.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Deletes a specified key and its associated value from the current buffer.
     *
     * @permission N/A
     * @param { K } key - key key Indicates the key to delete.
     * @returns { V | undefined } Returns an Optional object containing the deleted key-value pair; returns an empty Optional object if the key does not exist.
     * @throws { BusinessError } 401 - The type of key must be object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    remove(key: K): V | undefined;

    /**
     * Executes subsequent operations after a value is deleted.
     *
     * @permission N/A
     * @param { boolean } isEvict - isEvict isEvict isEvict The parameter value is true if this method is called due to insufficient capacity,
     * and the parameter value is false in other cases.
     * @param { K } key - key key Indicates the deleted key.
     * @param { V } value - value value Indicates the deleted value.
     * @param { V } newValue - newValue newValue The parameter value is the new value associated if the put(java.lang.Object,java.lang.Object)
     * method is called and the key to add already exists. The parameter value is null in other cases.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Executes subsequent operations after a value is deleted.
     *
     * @permission N/A
     * @param { boolean } isEvict - isEvict isEvict isEvict The parameter value is true if this method is called due to insufficient capacity,
     * and the parameter value is false in other cases.
     * @param { K } key - key key Indicates the deleted key.
     * @param { V } value - value value Indicates the deleted value.
     * @param { V } newValue - newValue newValue The parameter value is the new value associated if the put(java.lang.Object,java.lang.Object)
     * method is called and the key to add already exists. The parameter value is null in other cases.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    afterRemoval(isEvict: boolean, key: K, value: V, newValue: V): void;

    /**
     * Checks whether the current buffer contains a specified key.
     *
     * @permission N/A
     * @param { K } key - key key Indicates the key to check.
     * @returns { boolean } Returns true if the buffer contains the specified key.
     * @throws { BusinessError } 401 - The type of key must be object.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Checks whether the current buffer contains a specified key.
     *
     * @permission N/A
     * @param { K } key - key key Indicates the key to check.
     * @returns { boolean } Returns true if the buffer contains the specified key.
     * @throws { BusinessError } 401 - The type of key must be object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    contains(key: K): boolean;

    /**
     * Executes subsequent operations if miss to compute a value for the specific key.
     *
     * @permission N/A
     * @param { K } key - key key Indicates the missed key.
     * @returns { V } Returns the value associated with the key.
     * @throws { BusinessError } 401 - The type of key must be object.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Executes subsequent operations if miss to compute a value for the specific key.
     *
     * @permission N/A
     * @param { K } key - key key Indicates the missed key.
     * @returns { V } Returns the value associated with the key.
     * @throws { BusinessError } 401 - The type of key must be object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    createDefault(key: K): V;

    /**
     * Returns an array of key-value pairs of enumeratable properties of a given object.
     *
     * @permission N/A
     * @returns { IterableIterator<[K, V]> } Returns an array of key-value pairs for the enumeratable properties of the given object itself.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Returns an array of key-value pairs of enumeratable properties of a given object.
     *
     * @permission N/A
     * @returns { IterableIterator<[K, V]> } Returns an array of key-value pairs for the enumeratable properties of the given object itself.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    entries(): IterableIterator<[K, V]>;

    /**
     * Specifies the default iterator for an object.
     *
     * @permission N/A
     * @returns { IterableIterator<[K, V]> } Returns a two - dimensional array in the form of key - value pairs.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Specifies the default iterator for an object.
     *
     * @permission N/A
     * @returns { IterableIterator<[K, V]> } Returns a two - dimensional array in the form of key - value pairs.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    [Symbol.iterator](): IterableIterator<[K, V]>;
  }

  interface ScopeComparable {
    /**
     * The comparison function is used by the scope.
     *
     * @permission N/A
     * @param { ScopeComparable } other - other other
     * @returns { boolean } Returns whether the current object is greater than or equal to the input object.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * The comparison function is used by the scope.
     *
     * @permission N/A
     * @param { ScopeComparable } other - other other
     * @returns { boolean } Returns whether the current object is greater than or equal to the input object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    compareTo(other: ScopeComparable): boolean;
  }

  /**
   * A type used to denote ScopeComparable or number.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * A type used to denote ScopeComparable or number.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  type ScopeType = ScopeComparable | number;

  /**
   * The Scope interface is used to describe the valid range of a field.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.util.ScopeHelper
   */
  class Scope {
    /**
     * A constructor used to create a Scope instance with the lower and upper bounds specified.
     *
     * @permission N/A
     * @param { ScopeType } lowerObj - lowerObj A ScopeType value
     * @param { ScopeType } upperObj - upperObj upperObj A ScopeType value
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.constructor
     */
    constructor(lowerObj: ScopeType, upperObj: ScopeType);

    /**
     * Obtains a string representation of the current range.
     *
     * @permission N/A
     * @returns { string } Returns a string representation of the current range object.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.toString
     */
    toString(): string;

    /**
     * Returns the intersection of a given range and the current range.
     *
     * @permission N/A
     * @param { Scope } range - range range A Scope range object
     * @returns { Scope } Returns the intersection of a given range and the current range.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.intersect
     */
    intersect(range: Scope): Scope;

    /**
     * Returns the intersection of the current range and the range specified by the given lower and upper bounds.
     *
     * @permission N/A
     * @param { ScopeType } lowerObj - lowerObj lowerObj A ScopeType value
     * @param { ScopeType } upperObj - upperObj upperObj A ScopeType value
     * @returns { Scope } Returns the intersection of the current range and the range specified by the given lower and upper bounds.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.intersect
     */
    intersect(lowerObj: ScopeType, upperObj: ScopeType): Scope;

    /**
     * Obtains the upper bound of the current range.
     *
     * @permission N/A
     * @returns { ScopeType } Returns the upper bound of the current range.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.getUpper
     */
    getUpper(): ScopeType;

    /**
     * Obtains the lower bound of the current range.
     *
     * @permission N/A
     * @returns { ScopeType } Returns the lower bound of the current range.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.getLower
     */
    getLower(): ScopeType;

    /**
     * Creates the smallest range that includes the current range and the given lower and upper bounds.
     *
     * @permission N/A
     * @param { ScopeType } lowerObj - lowerObj lowerObj A ScopeType value
     * @param { ScopeType } upperObj - upperObj upperObj A ScopeType value
     * @returns { Scope } Returns the smallest range that includes the current range and the given lower and upper bounds.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.expand
     */
    expand(lowerObj: ScopeType, upperObj: ScopeType): Scope;

    /**
     * Creates the smallest range that includes the current range and a given range.
     *
     * @permission N/A
     * @param { Scope } range - range range A Scope range object
     * @returns { Scope } Returns the smallest range that includes the current range and a given range.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.expand
     */
    expand(range: Scope): Scope;

    /**
     * Creates the smallest range that includes the current range and a given value.
     *
     * @permission N/A
     * @param { ScopeType } value - value value A ScopeType value
     * @returns { Scope } Returns the smallest range that includes the current range and a given value.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.expand
     */
    expand(value: ScopeType): Scope;

    /**
     * Checks whether a given value is within the current range.
     *
     * @permission N/A
     * @param { ScopeType } value - value value A ScopeType value
     * @returns { boolean } If the value is within the current range return true,otherwise return false.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.contains
     */
    contains(value: ScopeType): boolean;

    /**
     * Checks whether a given range is within the current range.
     *
     * @permission N/A
     * @param { Scope } range - range range A Scope range
     * @returns { boolean } If the current range is within the given range return true,otherwise return false.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.contains
     */
    contains(range: Scope): boolean;

    /**
     * Clamps a given value to the current range.
     *
     * @permission N/A
     * @param { ScopeType } value - value value A ScopeType value
     * @returns { ScopeType } Returns a ScopeType object that a given value is clamped to the current range..
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.clamp
     */
    clamp(value: ScopeType): ScopeType;
  }

  /**
   * The ScopeHelper interface is used to describe the valid range of a field.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * The ScopeHelper interface is used to describe the valid range of a field.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  class ScopeHelper {
    /**
     * A constructor used to create a Scope instance with the lower and upper bounds specified.
     *
     * @permission N/A
     * @param { ScopeType } lowerObj - lowerObj lowerObj A ScopeType value
     * @param { ScopeType } upperObj - upperObj upperObj A ScopeType value
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * A constructor used to create a Scope instance with the lower and upper bounds specified.
     *
     * @permission N/A
     * @param { ScopeType } lowerObj - lowerObj lowerObj A ScopeType value
     * @param { ScopeType } upperObj - upperObj upperObj A ScopeType value
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    constructor(lowerObj: ScopeType, upperObj: ScopeType);

    /**
     * Obtains a string representation of the current range.
     *
     * @permission N/A
     * @returns { string } Returns a string representation of the current range object.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Obtains a string representation of the current range.
     *
     * @permission N/A
     * @returns { string } Returns a string representation of the current range object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    toString(): string;

    /**
     * Returns the intersection of a given range and the current range.
     *
     * @permission N/A
     * @param { ScopeHelper } range - range range A Scope range object
     * @returns { ScopeHelper } Returns the intersection of a given range and the current range.
     * @throws { BusinessError } 401 - The type of range must be ScopeHelper.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Returns the intersection of a given range and the current range.
     *
     * @permission N/A
     * @param { ScopeHelper } range - range range A Scope range object
     * @returns { ScopeHelper } Returns the intersection of a given range and the current range.
     * @throws { BusinessError } 401 - The type of range must be ScopeHelper.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    intersect(range: ScopeHelper): ScopeHelper;

    /**
     * Returns the intersection of the current range and the range specified by the given lower and upper bounds.
     *
     * @permission N/A
     * @param { ScopeType } lowerObj - lowerObj lowerObj A ScopeType value
     * @param { ScopeType } upperObj - upperObj upperObj A ScopeType value
     * @returns { ScopeHelper } Returns the intersection of the current range and the range specified by the given lower and upper bounds.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Returns the intersection of the current range and the range specified by the given lower and upper bounds.
     *
     * @permission N/A
     * @param { ScopeType } lowerObj - lowerObj lowerObj A ScopeType value
     * @param { ScopeType } upperObj - upperObj upperObj A ScopeType value
     * @returns { ScopeHelper } Returns the intersection of the current range and the range specified by the given lower and upper bounds.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    intersect(lowerObj: ScopeType, upperObj: ScopeType): ScopeHelper;

    /**
     * Obtains the upper bound of the current range.
     *
     * @permission N/A
     * @returns { ScopeType } Returns the upper bound of the current range.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Obtains the upper bound of the current range.
     *
     * @permission N/A
     * @returns { ScopeType } Returns the upper bound of the current range.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    getUpper(): ScopeType;

    /**
     * Obtains the lower bound of the current range.
     *
     * @permission N/A
     * @returns { ScopeType } Returns the lower bound of the current range.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Obtains the lower bound of the current range.
     *
     * @permission N/A
     * @returns { ScopeType } Returns the lower bound of the current range.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    getLower(): ScopeType;

    /**
     * Creates the smallest range that includes the current range and the given lower and upper bounds.
     *
     * @permission N/A
     * @param { ScopeType } lowerObj - lowerObj lowerObj A ScopeType value
     * @param { ScopeType } upperObj - upperObj upperObj A ScopeType value
     * @returns { ScopeHelper } Returns the smallest range that includes the current range and the given lower and upper bounds.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    expand(lowerObj: ScopeType, upperObj: ScopeType): ScopeHelper;

    /**
     * Creates the smallest range that includes the current range and a given range.
     *
     * @permission N/A
     * @param { ScopeHelper } range - range range A Scope range object
     * @returns { ScopeHelper } Returns the smallest range that includes the current range and a given range.
     * @throws { BusinessError } 401 - The type of range must be ScopeHelper.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Creates the smallest range that includes the current range and a given range.
     *
     * @permission N/A
     * @param { ScopeHelper } range - range range A Scope range object
     * @returns { ScopeHelper } Returns the smallest range that includes the current range and a given range.
     * @throws { BusinessError } 401 - The type of range must be ScopeHelper.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    expand(range: ScopeHelper): ScopeHelper;

    /**
     * Creates the smallest range that includes the current range and a given value.
     *
     * @permission N/A
     * @param { ScopeType } value - value value A ScopeType value
     * @returns { ScopeHelper } Returns the smallest range that includes the current range and a given value.
     * @throws { BusinessError } 401 - The type of value must be object.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Creates the smallest range that includes the current range and a given value.
     *
     * @permission N/A
     * @param { ScopeType } value - value value A ScopeType value
     * @returns { ScopeHelper } Returns the smallest range that includes the current range and a given value.
     * @throws { BusinessError } 401 - The type of value must be object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    expand(value: ScopeType): ScopeHelper;

    /**
     * Checks whether a given value is within the current range.
     *
     * @permission N/A
     * @param { ScopeType } value - value value A ScopeType value
     * @returns { boolean } If the value is within the current range return true,otherwise return false.
     * @throws { BusinessError } 401 - The type of value must be object.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Checks whether a given value is within the current range.
     *
     * @permission N/A
     * @param { ScopeType } value - value value A ScopeType value
     * @returns { boolean } If the value is within the current range return true,otherwise return false.
     * @throws { BusinessError } 401 - The type of value must be object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    contains(value: ScopeType): boolean;

    /**
     * Checks whether a given range is within the current range.
     *
     * @permission N/A
     * @param { ScopeHelper } range - range range A Scope range
     * @returns { boolean } If the current range is within the given range return true,otherwise return false.
     * @throws { BusinessError } 401 - The type of range must be ScopeHelper.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Checks whether a given range is within the current range.
     *
     * @permission N/A
     * @param { ScopeHelper } range - range range A Scope range
     * @returns { boolean } If the current range is within the given range return true,otherwise return false.
     * @throws { BusinessError } 401 - The type of range must be ScopeHelper.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    contains(range: ScopeHelper): boolean;

    /**
     * Clamps a given value to the current range.
     *
     * @permission N/A
     * @param { ScopeType } value - value value A ScopeType value
     * @returns { ScopeType } Returns a ScopeType object that a given value is clamped to the current range.
     * @throws { BusinessError } 401 - The type of value must be object.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Clamps a given value to the current range.
     *
     * @permission N/A
     * @param { ScopeType } value - value value A ScopeType value
     * @returns { ScopeType } Returns a ScopeType object that a given value is clamped to the current range.
     * @throws { BusinessError } 401 - The type of value must be object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    clamp(value: ScopeType): ScopeType;
  }

  /**
   * Decodes a Base64 encoded String or input u8 array into a newly-allocated
   * u8 array using the Base64 encoding scheme.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.util.Base64Helper
   */
  class Base64 {
    /**
     * Constructor for creating base64 encoding and decoding
     *
     * @permission N/A
     * @param No input parameter is required.
     * @returns No return value.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.Base64Helper.constructor
     */
    constructor();

    /**
     * Encodes all bytes from the specified u8 array into a newly-allocated u8 array using the Base64 encoding scheme.
     *
     * @permission N/A
     * @param { Uint8Array } src - src src A Uint8Array value
     * @returns { Uint8Array } Return the encoded new Uint8Array.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.Base64Helper.encodeSync
     */
    encodeSync(src: Uint8Array): Uint8Array;

    /**
     * Encodes the specified byte array into a String using the Base64 encoding scheme.
     *
     * @permission N/A
     * @param { Uint8Array } src - src src A Uint8Array value
     * @returns { string } Return the encoded string.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.Base64Helper.encodeToStringSync
     */
    encodeToStringSync(src: Uint8Array): string;

    /**
     * Decodes a Base64 encoded String or input u8 array into a newly-allocated u8 array using the Base64 encoding scheme.
     *
     * @permission N/A
     * @param { Uint8Array | string } src - src src A Uint8Array value or value A string value
     * @returns { Uint8Array } Return the decoded Uint8Array.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.Base64Helper.decodeSync
     */
    decodeSync(src: Uint8Array | string): Uint8Array;

    /**
     * Asynchronously encodes all bytes in the specified u8 array into the newly allocated u8 array using the Base64 encoding scheme.
     *
     * @permission N/A
     * @param { Uint8Array } src - src src A Uint8Array value
     * @returns { Promise<Uint8Array> } Return the encodes asynchronous new Uint8Array.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.Base64Helper.encode
     */
    encode(src: Uint8Array): Promise<Uint8Array>;

    /**
     * Asynchronously encodes the specified byte array into a String using the Base64 encoding scheme.
     *
     * @permission N/A
     * @param { Uint8Array } src - src src A Uint8Array value
     * @returns { Promise<string> } Returns the encoded asynchronous string.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.Base64Helper.encodeToString
     */
    encodeToString(src: Uint8Array): Promise<string>;

    /**
     * Use the Base64 encoding scheme to asynchronously decode a Base64-encoded string or input u8 array into a newly allocated u8 array.
     *
     * @permission N/A
     * @param { Uint8Array | string } src - src src A Uint8Array value or value A string value
     * @returns { Promise<Uint8Array> } Return the decoded asynchronous Uint8Array.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.util.Base64Helper.decode
     */
    decode(src: Uint8Array | string): Promise<Uint8Array>;
  }

  /**
   * Decodes a Base64 encoded String or input u8 array into a newly-allocated
   * u8 array using the Base64 encoding scheme.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @since 9
   */
  /**
   * Decodes a Base64 encoded String or input u8 array into a newly-allocated
   * u8 array using the Base64 encoding scheme.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  class Base64Helper {
    /**
     * Constructor for creating base64 encoding and decoding
     *
     * @permission N/A
     * @param No input parameter is required.
     * @returns No return value.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Constructor for creating base64 encoding and decoding
     *
     * @permission N/A
     * @param No input parameter is required.
     * @returns No return value.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    constructor();

    /**
     * Encodes all bytes from the specified u8 array into a newly-allocated u8 array using the Base64 encoding scheme.
     *
     * @permission N/A
     * @param { Uint8Array } src - src src A Uint8Array value
     * @returns { Uint8Array } Return the encoded new Uint8Array.
     * @throws { BusinessError } 401 - The type of src must be Uint8Array.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Encodes all bytes from the specified u8 array into a newly-allocated u8 array using the Base64 encoding scheme.
     *
     * @permission N/A
     * @param { Uint8Array } src - src src A Uint8Array value
     * @returns { Uint8Array } Return the encoded new Uint8Array.
     * @throws { BusinessError } 401 - The type of src must be Uint8Array.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    encodeSync(src: Uint8Array): Uint8Array;

    /**
     * Encodes the specified byte array into a String using the Base64 encoding scheme.
     *
     * @permission N/A
     * @param { Uint8Array } src - src src A Uint8Array value
     * @returns { string } Return the encoded string.
     * @throws { BusinessError } 401 - The type of src must be Uint8Array.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Encodes the specified byte array into a String using the Base64 encoding scheme.
     *
     * @permission N/A
     * @param { Uint8Array } src - src src A Uint8Array value
     * @returns { string } Return the encoded string.
     * @throws { BusinessError } 401 - The type of src must be Uint8Array.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    encodeToStringSync(src: Uint8Array): string;

    /**
     * Decodes a Base64 encoded String or input u8 array into a newly-allocated u8 array using the Base64 encoding scheme.
     *
     * @permission N/A
     * @param { Uint8Array | string } src - src src A Uint8Array value or value A string value
     * @returns { Uint8Array } Return the decoded Uint8Array.
     * @throws { BusinessError } 401 - The type of src must be Uint8Array or string.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Decodes a Base64 encoded String or input u8 array into a newly-allocated u8 array using the Base64 encoding scheme.
     *
     * @permission N/A
     * @param { Uint8Array | string } src - src src A Uint8Array value or value A string value
     * @returns { Uint8Array } Return the decoded Uint8Array.
     * @throws { BusinessError } 401 - The type of src must be Uint8Array or string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    decodeSync(src: Uint8Array | string): Uint8Array;

    /**
     * Asynchronously encodes all bytes in the specified u8 array into the newly allocated u8 array using the Base64 encoding scheme.
     *
     * @permission N/A
     * @param { Uint8Array } src - src src A Uint8Array value
     * @returns { Promise<Uint8Array> } Return the encodes asynchronous new Uint8Array.
     * @throws { BusinessError } 401 - The type of src must be Uint8Array.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Asynchronously encodes all bytes in the specified u8 array into the newly allocated u8 array using the Base64 encoding scheme.
     *
     * @permission N/A
     * @param { Uint8Array } src - src src A Uint8Array value
     * @returns { Promise<Uint8Array> } Return the encodes asynchronous new Uint8Array.
     * @throws { BusinessError } 401 - The type of src must be Uint8Array.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    encode(src: Uint8Array): Promise<Uint8Array>;

    /**
     * Asynchronously encodes the specified byte array into a String using the Base64 encoding scheme.
     *
     * @permission N/A
     * @param { Uint8Array } src - src src A Uint8Array value
     * @returns { Promise<string> } Returns the encoded asynchronous string.
     * @throws { BusinessError } 401 - The type of src must be Uint8Array.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Asynchronously encodes the specified byte array into a String using the Base64 encoding scheme.
     *
     * @permission N/A
     * @param { Uint8Array } src - src src A Uint8Array value
     * @returns { Promise<string> } Returns the encoded asynchronous string.
     * @throws { BusinessError } 401 - The type of src must be Uint8Array.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    encodeToString(src: Uint8Array): Promise<string>;

    /**
     * Use the Base64 encoding scheme to asynchronously decode a Base64-encoded string or
     * input u8 array into a newly allocated u8 array.
     *
     * @permission N/A
     * @param { Uint8Array | string } src - src src A Uint8Array value or value A string value
     * @returns { Promise<Uint8Array> } Return the decoded asynchronous Uint8Array.
     * @throws { BusinessError } 401 - The type of src must be Uint8Array or string.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Use the Base64 encoding scheme to asynchronously decode a Base64-encoded string or
     * input u8 array into a newly allocated u8 array.
     *
     * @permission N/A
     * @param { Uint8Array | string } src - src src A Uint8Array value or value A string value
     * @returns { Promise<Uint8Array> } Return the decoded asynchronous Uint8Array.
     * @throws { BusinessError } 401 - The type of src must be Uint8Array or string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    decode(src: Uint8Array | string): Promise<Uint8Array>;
  }

  /**
   * Check the type of parameter.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Check the type of parameter.
   *
   * @permission N/A
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  class types {
    /**
     * The types constructor
     *
     * @permission N/A
     * @param No input parameter is required.
     * @returns No return value.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * The types constructor
     *
     * @permission N/A
     * @param No input parameter is required.
     * @returns No return value.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    constructor();
    /**
     * Check whether the entered value is of arraybuffer or sharedarraybuffer type.
     *
     * @permission N/A
     * @param { Object } value - value value A ArrayBuffer or SharedArrayBuffer value
     * @returns { boolean } Returns true if the value is a built-in ArrayBuffer or SharedArrayBuffer instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is of arraybuffer or sharedarraybuffer type.
     *
     * @permission N/A
     * @param { Object } value - value value A ArrayBuffer or SharedArrayBuffer value
     * @returns { boolean } Returns true if the value is a built-in ArrayBuffer or SharedArrayBuffer instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isAnyArrayBuffer(value: Object): boolean;
    /**
     * Check whether the type is included in the isAnyArrayBuffer.
     *
     * @permission N/A
     * @param { Object } value - value value A included in the isAnyArrayBuffer value
     * @returns { boolean } Returns true if the value is an instance of one of the ArrayBuffer views,
     * such as typed array objects or DataView. Equivalent to ArrayBuffer.isView().
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the type is included in the isAnyArrayBuffer.
     *
     * @permission N/A
     * @param { Object } value - value value A included in the isAnyArrayBuffer value
     * @returns { boolean } Returns true if the value is an instance of one of the ArrayBuffer views,
     * such as typed array objects or DataView. Equivalent to ArrayBuffer.isView().
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isArrayBufferView(value: Object): boolean;
    /**
     * Check whether the entered value is an arguments object type.
     *
     * @permission N/A
     * @param { Object } value - value value A arguments value
     * @returns { boolean } Returns true if the value is an arguments object.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is an arguments object type.
     *
     * @permission N/A
     * @param { Object } value - value value A arguments value
     * @returns { boolean } Returns true if the value is an arguments object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isArgumentsObject(value: Object): boolean;
    /**
     * Check whether the entered value is of arraybuffer type.
     *
     * @permission N/A
     * @param { Object } value - value value A arraybuffer value
     * @returns { boolean } Returns true if the value is a built-in ArrayBuffer instance. This does not include SharedArrayBuffer instances.
     * Usually, it is desirable to test for both; See isAnyArrayBuffer() for that.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is of arraybuffer type.
     *
     * @permission N/A
     * @param { Object } value - value value A arraybuffer value
     * @returns { boolean } Returns true if the value is a built-in ArrayBuffer instance. This does not include SharedArrayBuffer instances.
     * Usually, it is desirable to test for both; See isAnyArrayBuffer() for that.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isArrayBuffer(value: Object): boolean;
    /**
     * Check whether the value entered is an asynchronous function type.
     *
     * @permission N/A
     * @param { Object } value - value value A async function value
     * @returns { boolean } Returns true if the value is an async function. This only reports back what the JavaScript engine is seeing;
     * in particular, the return value may not match the original source code if a transpilation tool was used.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the value entered is an asynchronous function type.
     *
     * @permission N/A
     * @param { Object } value - value value A async function value
     * @returns { boolean } Returns true if the value is an async function. This only reports back what the JavaScript engine is seeing;
     * in particular, the return value may not match the original source code if a transpilation tool was used.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isAsyncFunction(value: Object): boolean;
    /**
     * Check whether the entered value is of bigint64array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A BigInt64Array value
     * @returns { boolean } Returns true if the value is a BigInt64Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is of bigint64array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A BigInt64Array value
     * @returns { boolean } Returns true if the value is a BigInt64Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isBigInt64Array(value: Object): boolean;
    /**
     * Check whether the entered value is of biguint64array array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A BigUint64Array value
     * @returns { boolean } Returns true if the value is a BigUint64Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is of biguint64array array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A BigUint64Array value
     * @returns { boolean } Returns true if the value is a BigUint64Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isBigUint64Array(value: Object): boolean;
    /**
     * Check whether the entered value is a Boolean object type.
     *
     * @permission N/A
     * @param { Object } value - value value A boolean object value
     * @returns { boolean } Returns true if the value is a boolean object, e.g. created by new Boolean().
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is a Boolean object type.
     *
     * @permission N/A
     * @param { Object } value - value value A boolean object value
     * @returns { boolean } Returns true if the value is a boolean object, e.g. created by new Boolean().
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isBooleanObject(value: Object): boolean;
    /**
     * Check whether the entered value is a Boolean or number or string or symbol object type.
     *
     * @permission N/A
     * @param { Object } value - value value A boxed primitive object value
     * @returns { boolean } Returns true if the value is any boxed primitive object, e.g. created by new Boolean(), new String() or Object(Symbol()).
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is a Boolean or number or string or symbol object type.
     *
     * @permission N/A
     * @param { Object } value - value value A boxed primitive object value
     * @returns { boolean } Returns true if the value is any boxed primitive object, e.g. created by new Boolean(), new String() or Object(Symbol()).
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isBoxedPrimitive(value: Object): boolean;
    /**
     * Check whether the entered value is of DataView type.
     *
     * @permission N/A
     * @param { Object } value - value value A DataView value
     * @returns { boolean } Returns true if the value is a built-in DataView instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is of DataView type.
     *
     * @permission N/A
     * @param { Object } value - value value A DataView value
     * @returns { boolean } Returns true if the value is a built-in DataView instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isDataView(value: Object): boolean;
    /**
     * Check whether the entered value is of type date.
     *
     * @permission N/A
     * @param { Object } value - value value A Date value
     * @returns { boolean } Returns true if the value is a built-in Date instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is of type date.
     *
     * @permission N/A
     * @param { Object } value - value value A Date value
     * @returns { boolean } Returns true if the value is a built-in Date instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isDate(value: Object): boolean;
    /**
     * Check whether the entered value is a native external value type.
     *
     * @permission N/A
     * @param { Object } value - value value A External value
     * @returns { boolean } Returns true if the value is a native External value.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is a native external value type.
     *
     * @permission N/A
     * @param { Object } value - value value A External value
     * @returns { boolean } Returns true if the value is a native External value.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isExternal(value: Object): boolean;
    /**
     * Check whether the entered value is of float32array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Float32Array value
     * @returns { boolean } Returns true if the value is a built-in Float32Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is of float32array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Float32Array value
     * @returns { boolean } Returns true if the value is a built-in Float32Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isFloat32Array(value: Object): boolean;
    /**
     * Check whether the entered value is of float64array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Float64Array value
     * @returns { boolean } Returns true if the value is a built-in Float64Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is of float64array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Float64Array value
     * @returns { boolean } Returns true if the value is a built-in Float64Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isFloat64Array(value: Object): boolean;
    /**
     * Check whether the input value is a generator function type.
     *
     * @permission N/A
     * @param { Object } value - value value A generator function value
     * @returns { boolean } Returns true if the value is a generator function. This only reports back what the JavaScript engine is seeing; in particular,
     * the return value may not match the original source code if a transpilation tool was used.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the input value is a generator function type.
     *
     * @permission N/A
     * @param { Object } value - value value A generator function value
     * @returns { boolean } Returns true if the value is a generator function. This only reports back what the JavaScript engine is seeing; in particular,
     * the return value may not match the original source code if a transpilation tool was used.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isGeneratorFunction(value: Object): boolean;
    /**
     * Check whether the entered value is a generator object type.
     *
     * @permission N/A
     * @param { Object } value - value value A generator object value
     * @returns { boolean } Returns true if the value is a generator object as returned from a built-in generator function.
     * This only reports back what the JavaScript engine is seeing; in particular,
     *the return value may not match the original source code if a transpilation tool was used.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is a generator object type.
     *
     * @permission N/A
     * @param { Object } value - value value A generator object value
     * @returns { boolean } Returns true if the value is a generator object as returned from a built-in generator function.
     * This only reports back what the JavaScript engine is seeing; in particular,
     *the return value may not match the original source code if a transpilation tool was used.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isGeneratorObject(value: Object): boolean;
    /**
     * Check whether the entered value is of int8array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Int8Array value
     * @returns { boolean } Returns true if the value is a built-in Int8Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is of int8array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Int8Array value
     * @returns { boolean } Returns true if the value is a built-in Int8Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isInt8Array(value: Object): boolean;
    /**
     * Check whether the entered value is the int16array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Int16Array value
     * @returns { boolean } Returns true if the value is a built-in Int16Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is the int16array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Int16Array value
     * @returns { boolean } Returns true if the value is a built-in Int16Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isInt16Array(value: Object): boolean;
    /**
     * Check whether the entered value is the int32array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Int32Array value
     * @returns { boolean } Returns true if the value is a built-in Int32Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is the int32array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Int32Array value
     * @returns { boolean } Returns true if the value is a built-in Int32Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isInt32Array(value: Object): boolean;
    /**
     * Check whether the entered value is of map type.
     *
     * @permission N/A
     * @param { Object } value - value value A Map value
     * @returns { boolean } Returns true if the value is a built-in Map instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is of map type.
     *
     * @permission N/A
     * @param { Object } value - value value A Map value
     * @returns { boolean } Returns true if the value is a built-in Map instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isMap(value: Object): boolean;
    /**
     * Check whether the entered value is the iterator type of map.
     *
     * @permission N/A
     * @param { Object } value - value value A Map iterator value
     * @returns { boolean } Returns true if the value is an iterator returned for a built-in Map instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is the iterator type of map.
     *
     * @permission N/A
     * @param { Object } value - value value A Map iterator value
     * @returns { boolean } Returns true if the value is an iterator returned for a built-in Map instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isMapIterator(value: Object): boolean;
    /**
     * Check whether the entered value is the module namespace object object type.
     *
     * @permission N/A
     * @param { Object } value - value value A Module Namespace Object value
     * @returns { boolean } Returns true if the value is an instance of a Module Namespace Object.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is the module namespace object object type.
     *
     * @permission N/A
     * @param { Object } value - value value A Module Namespace Object value
     * @returns { boolean } Returns true if the value is an instance of a Module Namespace Object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isModuleNamespaceObject(value: Object): boolean;
    /**
     * Check whether the value entered is of type error.
     *
     * @permission N/A
     * @param { Object } value - value value A Error value
     * @returns { boolean } Returns true if the value is an instance of a built-in Error type.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the value entered is of type error.
     *
     * @permission N/A
     * @param { Object } value - value value A Error value
     * @returns { boolean } Returns true if the value is an instance of a built-in Error type.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isNativeError(value: Object): boolean;
    /**
     * Check whether the entered value is of the number object type.
     *
     * @permission N/A
     * @param { Object } value - value value A number object value
     * @returns { boolean } Returns true if the value is a number object, e.g. created by new Number().
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is of the number object type.
     *
     * @permission N/A
     * @param { Object } value - value value A number object value
     * @returns { boolean } Returns true if the value is a number object, e.g. created by new Number().
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isNumberObject(value: Object): boolean;
    /**
     * Check whether the entered value is of promise type.
     *
     * @permission N/A
     * @param { Object } value - value value A Promise value
     * @returns { boolean } Returns true if the value is a built-in Promise.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is of promise type.
     *
     * @permission N/A
     * @param { Object } value - value value A Promise value
     * @returns { boolean } Returns true if the value is a built-in Promise.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isPromise(value: Object): boolean;
    /**
     * Check whether the value entered is of proxy type.
     *
     * @permission N/A
     * @param { Object } value - value value A Proxy value
     * @returns { boolean } Returns true if the value is a Proxy instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the value entered is of proxy type.
     *
     * @permission N/A
     * @param { Object } value - value value A Proxy value
     * @returns { boolean } Returns true if the value is a Proxy instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isProxy(value: Object): boolean;
    /**
     * Check whether the entered value is of type regexp.
     *
     * @permission N/A
     * @param { Object } value - value value A regular expression object value
     * @returns { boolean } Returns true if the value is a regular expression object.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is of type regexp.
     *
     * @permission N/A
     * @param { Object } value - value value A regular expression object value
     * @returns { boolean } Returns true if the value is a regular expression object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isRegExp(value: Object): boolean;
    /**
     * Check whether the entered value is of type set.
     *
     * @permission N/A
     * @param { Object } value - value value A Set instance value
     * @returns { boolean } Returns true if the value is a built-in Set instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is of type set.
     *
     * @permission N/A
     * @param { Object } value - value value A Set instance value
     * @returns { boolean } Returns true if the value is a built-in Set instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isSet(value: Object): boolean;
    /**
     * Check whether the entered value is the iterator type of set.
     *
     * @permission N/A
     * @param { Object } value - value value A Set iterator value
     * @returns { boolean } Returns true if the value is an iterator returned for a built-in Set instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is the iterator type of set.
     *
     * @permission N/A
     * @param { Object } value - value value A Set iterator value
     * @returns { boolean } Returns true if the value is an iterator returned for a built-in Set instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isSetIterator(value: Object): boolean;
    /**
     * Check whether the entered value is of type sharedarraybuffer.
     *
     * @permission N/A
     * @param { Object } value - value value A SharedArrayBuffer instance value
     * @returns { boolean } Returns true if the value is a built-in SharedArrayBuffer instance. This does not include ArrayBuffer instances.
     * Usually, it is desirable to test for both; See isAnyArrayBuffer() for that.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is of type sharedarraybuffer.
     *
     * @permission N/A
     * @param { Object } value - value value A SharedArrayBuffer instance value
     * @returns { boolean } Returns true if the value is a built-in SharedArrayBuffer instance. This does not include ArrayBuffer instances.
     * Usually, it is desirable to test for both; See isAnyArrayBuffer() for that.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isSharedArrayBuffer(value: Object): boolean;
    /**
     * Check whether the entered value is a string object type.
     *
     * @permission N/A
     * @param { Object } value - value value A String object value
     * @returns { boolean } Returns true if the value is a string object, e.g. created by new String().
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is a string object type.
     *
     * @permission N/A
     * @param { Object } value - value value A String object value
     * @returns { boolean } Returns true if the value is a string object, e.g. created by new String().
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isStringObject(value: Object): boolean;
    /**
     * Check whether the entered value is a symbol object type.
     *
     * @permission N/A
     * @param { Object } value - value value A symbol object value
     * @returns { boolean } Returns true if the value is a symbol object, created by calling Object() on a Symbol primitive.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is a symbol object type.
     *
     * @permission N/A
     * @param { Object } value - value value A symbol object value
     * @returns { boolean } Returns true if the value is a symbol object, created by calling Object() on a Symbol primitive.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isSymbolObject(value: Object): boolean;
    /**
     * Check whether the entered value is a type contained in typedarray.
     *
     * @permission N/A
     * @param { Object } value - value value A TypedArray instance value
     * @returns { boolean } Returns true if the value is a built-in TypedArray instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is a type contained in typedarray.
     *
     * @permission N/A
     * @param { Object } value - value value A TypedArray instance value
     * @returns { boolean } Returns true if the value is a built-in TypedArray instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isTypedArray(value: Object): boolean;
    /**
     * Check whether the entered value is the uint8array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Uint8Array value
     * @returns { boolean } Returns true if the value is a built-in Uint8Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is the uint8array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Uint8Array value
     * @returns { boolean } Returns true if the value is a built-in Uint8Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isUint8Array(value: Object): boolean;
    /**
     * Check whether the entered value is the uint8clapedarray array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Uint8ClampedArray value
     * @returns { boolean } Returns true if the value is a built-in Uint8ClampedArray instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is the uint8clapedarray array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Uint8ClampedArray value
     * @returns { boolean } Returns true if the value is a built-in Uint8ClampedArray instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isUint8ClampedArray(value: Object): boolean;
    /**
     * Check whether the entered value is the uint16array array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Uint16Array value
     * @returns { boolean } Returns true if the value is a built-in Uint16Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is the uint16array array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Uint16Array value
     * @returns { boolean } Returns true if the value is a built-in Uint16Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isUint16Array(value: Object): boolean;
    /**
     * Check whether the entered value is the uint32array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Uint32Array value
     * @returns { boolean } Returns true if the value is a built-in Uint32Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is the uint32array array type.
     *
     * @permission N/A
     * @param { Object } value - value value A Uint32Array value
     * @returns { boolean } Returns true if the value is a built-in Uint32Array instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isUint32Array(value: Object): boolean;
    /**
     * Check whether the entered value is of type weakmap.
     *
     * @permission N/A
     * @param { Object } value - value value A WeakMap value
     * @returns { boolean } Returns true if the value is a built-in WeakMap instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is of type weakmap.
     *
     * @permission N/A
     * @param { Object } value - value value A WeakMap value
     * @returns { boolean } Returns true if the value is a built-in WeakMap instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isWeakMap(value: Object): boolean;
    /**
     * Check whether the entered value is of type weakset.
     *
     * @permission N/A
     * @param { Object } value - value value A WeakSet value
     * @returns { boolean } Returns true if the value is a built-in WeakSet instance.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Check whether the entered value is of type weakset.
     *
     * @permission N/A
     * @param { Object } value - value value A WeakSet value
     * @returns { boolean } Returns true if the value is a built-in WeakSet instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    isWeakSet(value: Object): boolean;
  }
}
export default util;
