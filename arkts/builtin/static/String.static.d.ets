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
 * Unicode string
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
class  String {
    /**
     * Constructs an empty string
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor();

    /**
     * Constructs string from chars array initializer
     *
     * @param { FixedArray<char> } data - initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(data: FixedArray<char>);

    /**
     * Constructs string from another string
     *
     * @param { string } otherStr - initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(otherStr: string);

    /**
     * Constructs string from Any
     *
     * @param { Any } object - initializer
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(object: Any);

    /**
     * Creates a new instance of a string
     *
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(): string;

    /**
     * Creates a new instance of a string from boolean
     *
     * @param { boolean } value - The value to be converted to a string.
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: boolean): string;

    /**
     * Creates a new instance of a string from byte
     *
     * @param { byte } value - The value to be converted to a string.
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: byte): string;

    /**
     * Creates a new instance of a string from char
     *
     * @param { char } value - The value to be converted to a string.
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: char): string;

    /**
     * Creates a new instance of a string from short
     *
     * @param { short } value - The value to be converted to a string.
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: short): string;

    /**
     * Creates a new instance of a string from int
     *
     * @param { int } value - The value to be converted to a string
     *     <br>The value range is all integers.
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: int): string;

    /**
     * Creates a new instance of a string from long
     *
     * @param { long } value - The value to be converted to a string
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: long): string;

    /**
     * Creates a new instance of a string from float
     *
     * @param { float } value - The value to be converted to a string
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: float): string;

    /**
     * Creates a new instance of a string from double
     *
     * @param { double } value - The value to be converted to a string
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: double): string;

    /**
     * Creates a new instance of a string
     *
     * @param { Any } value - The value to be converted to a string. Can be an Object or null.
     * @returns { string } A new string instance
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(value: Any): string;

    /**
     * Returns an instance of string at passed index.
     *
     * @param { int } index - index to look at
     *     <br>The value range is all integers.
     * @returns { string } string value at index
     * @throws { Error } StringIndexOutOfBoundsError - if index is negative or >= length
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_get(index: int): string;

    /**
     * Length of this string
     *
     * @returns { int } length of this string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    getLength(): int;

    /**
     * Length of this string
     *
     * @returns { int } length of this string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    get length(): int;

    /**
     * concat
     *
     * @param { string } s1
     * @param { string } s2
     * @returns { string } Concatenated string.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    concat(s1: string, s2: string): string;

    /**
     * concat
     *
     * @param { string } s1
     * @param { string } s2
     * @param { string } s3
     * @returns { string } Concatenated string.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    concat(s1: string, s2: string, s3: string): string;

    /**
     * Comparison between this String and another one based on locale and options.
     *     The result is -1 if this string sorts before the another string,
     *     0 if they are equal, and 1 otherwise.
     *
     * @param { String } that - String to compare with
     * @param { string | string[] } [locale] - String representing the BCP47 language tag
     * @param { Intl.CollatorOptions } [options] - Intl.CollatorOptions contains comparison options
     * @returns { int } the comparison result
     * @throws { RangeError } if - the locale tag is invalid or not found
     * @throws { NullPointerError } if - another or locale is undefined
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public localeCompare(that: String, locale?: string | string[], options?: Intl.CollatorOptions): int;

    /**
     * Checks that the substring of this string that starts from
     *     the specified index starts with the specified prefix.
     *     Negative `fromIndex` is treated as 0. Result is always true
     *     if `prefix` is empty.
     *
     * @param { String } prefix - prefix string
     * @param { int } [fromIndex] - index to start from
     *     <br>The value range is all integers.
     * @returns { boolean } true if the substring begins with prefix
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public startsWith(prefix: String, fromIndex?: int): boolean;

    /**
     * Checks that this string ends with the specified suffix.
     *
     * @param { String } suffix - suffix string
     * @param { int } [endPosition] - at which suffix is expected to be found. Defaults to str.length
     *     <br>The value range is all integers.
     * @returns { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public endsWith(suffix: String, endPosition?: int): boolean;

    /**
     * Selects a substring of this String, starting at a specified index
     *     and ending at index before another specified index.
     *     If 'begin' < 0, then 'begin' is assumed to be equal to zero.
     *     If 'begin' > this.length, then 'begin' is assumed to be equal to the this.length.
     *
     * @param { int } begin - to start substring
     *     <br>The value range is all integers.
     * @returns { String } new String which is a substring of this String
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public substring(begin: int): String;

    /**
     * Selects a substring of this String, starting at a specified index
     *     and ending at index before another specified index.
     *     If 'begin' < 0, then 'begin' is assumed to be equal to zero.
     *     If 'begin' > this.length, then 'begin' is assumed to be equal to the this.length.
     *     If 'end' < 0, then 'end' is assumed to be equal to zero.
     *     If 'end' > this.length, then 'end' is assumed to be equal to this.length.
     *     If 'begin' > 'end', then these are swapped.
     *     If 'begin' == 'end', then an empty string is returned.
     *
     * @param { int } begin - to start substring
     *     <br>The value range is all integers.
     * @param { int } end - to end before at
     *     <br>The value range is all integers.
     * @returns { String } new String which is a substring of this String
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public substring(begin: int, end: int): String;

    /**
     * Splits this String by separator and returns an ordered array of substrings.
     *     The order of the resulted array corresponds to the order of the passage of
     *     this String from beginning to end. The pattern is excluded from substrings.
     *     The array is limited by some specified value.
     *
     * @param { String } separator - String to split by
     * @param { int } [limit] - max length of the returned array. Int.MAX_VALUE if it's negative
     *     <br>The value range is all integers.
     * @returns { String[] } string array contains substrings from this String
     * @throws { NullPointerError } if - pattern param is null
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public split(separator: String, limit?: int): String[];

    /**
     * split
     *
     * @param { RegExp } separator - RegExp to split by
     * @param { int } [limit] - max length of the returned array. If it's negative then there is no limit
     *     <br>The value range is all integers.
     * @returns { String[] } string array contains substrings from this String
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public split(separator: RegExp, limit?: int): String[];

    /**
     * split
     *
     * @param { String | RegExp } separator - String or RegExp to split by
     * @param { int } [limit] - max length of the returned array. If it's negative then there is no limit
     *     <br>The value range is all integers.
     * @returns { String[] } string array contains substrings from this String
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public split(separator: String | RegExp, limit?: int): String[];

    /**
     * The at() method takes an integer value and returns a new String consisting of the single UTF-16 code unit located
     *     at the specified offset. This method allows for positive and negative integers.
     *     Negative integers count back from the last string character.
     *
     * @param { int } index - Converted at element
     *     <br>The value range is all integers.
     * @returns { string | undefined } A String consisting of the single UTF-16 code unit located
     *     at the specified position. Returns undefined if the given index can not be found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public at(index: int): string | undefined;

    /**
     * The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code
     *     unit at the given index.
     *
     * @param { int } index - subscript
     *     <br>The value range is all integers.
     * @returns { int }
     * @throws { RangeError } - - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public charCodeAt(index: int): int;

    /**
     * The String.fromCharCode() static method returns a string created from the specified UTF-16 code unit
     *
     * @param { int } code - is a number between 0 and 65535 (0xFFFF) representing a UTF-16 code unit or NaN
     *     <br>The value range is all integers.
     * @returns { String } string consisting of the specified UTF-16 code unit.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static fromCharCode(code: int): String;

    /**
     * The String.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units
     *
     * @param { int[] } codes - are numbers between 0 and 65535 (0xFFFF) representing a UTF-16 code unit or NaN
     * @returns { String } string consisting of the specified UTF-16 code units.
     * @throws { NegativeArraySizeError } - - Input parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static fromCharCode(...codes: int[]): String;

    /**
     * The includes() method performs a case-sensitive search to determine whether one string may
     *     be found within another string, returning true or false as appropriate.
     *
     * @param { String } searchString - to be searched
     * @param { int } [position] - within the string at which to begin searching for searchString
     *     <br>The value range is all integers.
     * @returns { boolean } true if the search string is found anywhere within the given string,
     *     including when searchString is an empty string; otherwise, false
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchString: String, position?: int): boolean;

    /**
     * The padEnd() method pads the current string with a given string (repeated, if needed)
     *     so that the resulting string reaches a given length.
     *     The padding is applied from the end of the current string.
     *
     * @param { int } end - of the resulting string once the current str has been padded
     *     <br>The value range is all integers.
     * @returns { String } string with the padString applied at the end of the current str
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padEnd(end: int): String;

    /**
     * The padEnd() method pads the current string with a given string (repeated, if needed)
     *     so that the resulting string reaches a given length.
     *     The padding is applied from the end of the current string.
     *
     * @param { int } end - of the resulting string once the current str has been padded
     *     <br>The value range is all integers.
     * @param { char } ch - to pad the current str with
     * @returns { String } string with the padString applied at the end of the current str
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padEnd(end: int, ch: char): String;

    /**
     * The padEnd() method pads the current string with a given string (repeated, if needed)
     *     so that the resulting string reaches a given length.
     *     The padding is applied from the end of the current string.
     *
     * @param { int } end - of the resulting string once the current str has been padded
     *     <br>The value range is all integers.
     * @param { String } [fillString] - to pad the current str with
     * @returns { String } string with the padString applied at the end of the current str
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padEnd(end: int, fillString?: String): String;

    /**
     * The padStart() method pads the current string with another string (multiple times, if needed)
     *     until the resulting string reaches the given length.
     *     The padding is applied from the start of the current string.
     *
     * @param { int } end - int
     *     <br>The value range is all integers.
     * @param { char } ch - fillString
     * @returns { String }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padStart(end: int, ch: char): String;

    /**
     * The padStart() method pads the current string with another string (multiple times, if needed)
     *     until the resulting string reaches the given length.
     *     The padding is applied from the start of the current string.
     *
     * @param { int } end - int
     *     <br>The value range is all integers.
     * @param { String } [fillString] - fillString
     * @returns { String }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padStart(end: int, fillString?: String): String;

    /**
     * The substr() method returns a portion of the string, starting at the specified
     *     index and extending for a given number of characters afterwards.
     *
     * @param { int } begin - is index of the first character to include in the returned substring
     *     <br>The value range is all integers.
     * @param { int } [length] - is number of characters to extract
     *     <br>The value range is all integers.
     * @returns { String } new string containing the specified part of the given string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public substr(begin: int, length?: int): String;

    /**
     * Executes a search for a match between a regular expression and this String object.
     *
     * @param { String } implicitRegExp - a regular expression object or implicit regular expression
     * @returns { int } the index of the first match between the regular expression and the given string,
     *     or -1 if no match was found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public search(implicitRegExp: String): int;

    /**
     * Executes a search for a match between a regular expression and this String object.
     *
     * @param { RegExp } regexp - a regular expression object or implicit regular expression
     * @returns { int } the index of the first match between the regular expression and the given string,
     *     or -1 if no match was found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public search(regexp: RegExp): int;

    /**
     * Executes a search for a match between a regular expression and this String object.
     *
     * @param { String | RegExp } regexp - a regular expression object or implicit regular expression
     * @returns { int } the index of the first match between the regular expression and the given string,
     *     or -1 if no match was found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public search(regexp: String | RegExp): int;

    /**
     * The String.fromCodePoint() static method returns a string created by using the specified sequence of code points
     *
     * @param { int[] } codePoints - are integers between 0 and 0x10FFFF (inclusive) representing a
     *     Unicode code point
     * @returns { String } string created by using the specified sequence of code points
     * @throws { RangeError } if - codePoints[i] is less than 0, or is greater than 0x10FFFF
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static fromCodePoint(...codePoints: int[]): String;
}
