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
 * `string` is an alias for type `String`
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type string = String;

/**
 * Unicode string
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class String {
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
     * Concatenation of this and array of strings.
     *
     * @param { string } s - strings to concat with.
     * @returns { string } new string which is a concatenation of this + strings[0] + ... + strings[string.length - 1]
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public concat(s: string): string;

    /**
     * Concatenation of this and two strings.
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
     * Concatenation of this and three strings.
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
     * Concatenation of this and array of strings.
     *
     * @param { string[] } strings - strings to concat with.
     * @returns { string } new string which is a concatenation
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public concat(...strings: string[]): string;

    /**
     * Comparison between this string and another one based on locale and options.
     *     The result is -1 if this string sorts before the another string,
     *     0 if they are equal, and 1 otherwise.
     *
     * @param { string } that - string to compare with.
     * @param { string | string[] } [locale] - string representing the BCP47 language tag.
     * @param { Intl.CollatorOptions } [options] - Intl.CollatorOptions contains comparison options.
     * @returns { int } the comparison result
     * @throws { RangeError } the locale tag is invalid or not found, Please use a valid BCP47 language tag,
     *     such as 'en-US' or 'zh-CN'.
     * @throws { NullPointerError }  another or locale is undefined, Please ensure the 'that' parameter is a valid
     *     string object and locale is properly defined if provided.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public localeCompare(that: string, locale?: string | string[], options?: Intl.CollatorOptions): int;

    /**
     * Checks that the substring of this string that starts from
     *     the specified index starts with the specified prefix.
     *     Negative `fromIndex` is treated as 0. Result is always true
     *     if `prefix` is empty.
     *
     * @param { string } prefix - prefix string.
     * @param { int } [fromIndex] - index to start from (defaults to 0).
     *     <br>The value should be an integer.
     * @returns { boolean } true if the substring begins with the specified prefix;
     *     false otherwise (including when prefix is longer than the substring).
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public startsWith(prefix: string, fromIndex?: int): boolean;

    /**
     * Checks that this string ends with the specified suffix.
     *
     * @param { string } suffix - suffix string.
     * @param { int } [endPosition] - at which suffix is expected to be found. Defaults to str.length.
     *     <br>The value should be an integer.
     * @returns { boolean } true if the string ends with the specified suffix;
     *     false otherwise (including when suffix is longer than the substring being checked)
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public endsWith(suffix: string, endPosition?: int): boolean;

    /**
     * Selects a substring of this string, starting at a specified index
     *     and ending at index before another specified index.
     *     If 'begin' < 0, then 'begin' is assumed to be equal to zero.
     *     If 'begin' > this.length, then 'begin' is assumed to be equal to the this.length.
     *
     * @param { int } begin - to start substring.
     *     <br>The value should be an integer.
     * @returns { string } new string which is a substring of this string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public substring(begin: int): string;

    /**
     * Selects a substring of this string, starting at a specified index
     *     and ending at index before another specified index.
     *     If 'begin' < 0, then 'begin' is assumed to be equal to zero.
     *     If 'begin' > this.length, then 'begin' is assumed to be equal to the this.length.
     *     If 'end' < 0, then 'end' is assumed to be equal to zero.
     *     If 'end' > this.length, then 'end' is assumed to be equal to this.length.
     *     If 'begin' > 'end', then these are swapped.
     *     If 'begin' == 'end', then an empty string is returned.
     *
     * @param { int } begin - to start substring.
     *     <br>The value should be an integer.
     * @param { int } end - to end before at.
     *     <br>The value range is all integers.
     * @returns { string } new string which is a substring of this string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public substring(begin: int, end: int): string;

    /**
     * Splits this string by separator and returns an ordered array of substrings.
     *     The order of the resulted array corresponds to the order of the passage of
     *     this string from beginning to end. The pattern is excluded from substrings.
     *     The array is limited by some specified value.
     *
     * @param { string } separator - string to split by.
     * @param { int } [limit] - max length of the returned array. Int.MAX_VALUE if it's negative.
     *     <br>The value should be an integer.
     * @returns { string[] } string array contains substrings from this string
     * @throws { NullPointerError } pattern param is null, Please ensure the separator parameter is a
     *     valid non-null string object.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public split(separator: string, limit?: int): string[];

    /**
     * Splits this string by RegExp separator and returns an ordered array of substrings.
     *
     * @param { RegExp } separator - RegExp to split by.
     * @param { int } [limit] - max length of the returned array. If it's negative then there is no limit.
     *     <br>The value should be an integer.
     * @returns { string[] } string array contains substrings from this string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public split(separator: RegExp, limit?: int): string[];

    /**
     * Splits this string by separator and returns an ordered array of substrings.
     *
     * @param { string | RegExp } separator - string or RegExp to split by.
     * @param { int } [limit] - max length of the returned array. If it's negative then there is no limit.
     *     <br>The value should be an integer.
     * @returns { string[] } string array contains substrings from this string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public split(separator: string | RegExp, limit?: int): string[];

    /**
     * The at() method takes an integer value and returns a new string consisting of the single UTF-16 code unit located
     *     at the specified offset. This method allows for positive and negative integers.
     *     Negative integers count back from the last string character.
     *
     * @param { int } index - Converted at element.
     *     <br>The value should be an integer.
     * @returns { string | undefined } A string consisting of the single UTF-16 code unit located
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
     * @param { int } index - subscript. The value must be an integer within [0, string.length-1].
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { int } The UTF-16 code unit value at the specified index.
     * @throws { RangeError } - - Index out of range. The index is negative or greater than or equal to the string
     *     length. Please ensure index is within [0, string.length-1].
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public charCodeAt(index: int): int;

    /**
     * The string.fromCharCode() static method returns a string created from the specified UTF-16 code unit
     *
     * @param { int } code - is a number between 0 and 65535 (0xFFFF) representing a UTF-16 code unit or NaN.
     *     <br>The value range is all integers.
     * @returns { string } string consisting of the specified UTF-16 code unit.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static fromCharCode(code: int): string;

    /**
     * The string.fromCharCode() static method returns a string created from the specified sequence of UTF-16 code units
     *
     * @param { int[] } codes - are numbers between 0 and 65535 (0xFFFF) representing a UTF-16 code unit or NaN.
     * @returns { string } string consisting of the specified UTF-16 code units.
     * @throws { NegativeArraySizeError } - - Invalid array size. The codes array has negative size. Please provide
     *     a valid non-negative array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static fromCharCode(...codes: int[]): string;

    /**
     * The includes() method performs a case-sensitive search to determine whether one string may
     *     be found within another string, returning true or false as appropriate.
     *
     * @param { string } searchString - to be searched.
     * @param { int } [position] - within the string at which to begin searching for searchString.
     *     Defaults to 0, meaning the search starts from the beginning of the string.
     *     <br>The value should be an integer.
     * @returns { boolean } true if the search string is found anywhere within the given string,
     *     including when searchString is an empty string; otherwise, false
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public includes(searchString: string, position?: int): boolean;

    /**
     * The padEnd() method pads the current string with a given string (repeated, if needed)
     *     so that the resulting string reaches a given length.
     *     The padding is applied from the end of the current string.
     *
     * @param { int } maxLength - of the resulting string once the current str has been padded.
     *     <br>The value should be an integer.
     * @returns { string } string with the padString applied at the end of the current str
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padEnd(maxLength: int): string;

    /**
     * The padEnd() method pads the current string with a given string (repeated, if needed)
     *     so that the resulting string reaches a given length.
     *     The padding is applied from the end of the current string.
     *
     * @param { int } maxLength - of the resulting string once the current str has been padded.
     *     <br>The value should be an integer.
     * @param { char } ch - to pad the current str with.
     * @returns { string } string with the padString applied at the end of the current str
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padEnd(maxLength: int, ch: char): string;

    /**
     * The padEnd() method pads the current string with a given string (repeated, if needed)
     *     so that the resulting string reaches a given length.
     *     The padding is applied from the end of the current string.
     *
     * @param { int } maxLength - of the resulting string once the current str has been padded.
     *     <br>The value range is all integers.
     * @param { string } [fillString] - to pad the current str with. If not specified,
     *     defaults to space character (U+0020). If the fillString is an empty string, no padding occurs.
     * @returns { string } string with the padString applied at the end of the current str
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padEnd(maxLength: int, fillString?: string): string;

    /**
     * The padStart() method pads the current string with another string (multiple times, if needed)
     * until the resulting string reaches the given length.
     * The padding is applied from the start of the current string.
     *
     * @param { int } maxLength - The target length of the resulting string. If less than or equal to
     *     the current string length, returns a copy of the original string.
     *     <br>The value range is all integers.
     * @param { char } ch - The character to use for padding (repeated as needed).
     * @returns { string } A new string padded with the specified character from the start.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padStart(maxLength: int, ch: char): string;

    /**
     * The padStart() method pads the current string with another string (multiple times, if needed)
     *     until the resulting string reaches the given length.
     *     The padding is applied from the start of the current string.
     *
     * @param { int } maxLength - The target length of the resulting string. If less than or equal to
     *     the current string length, returns a copy of the original string.
     *     <br>The value should be an integer.
     * @param { string } [fillString] - The string to pad with. Defaults to space character (U+0020) if not specified.
     * @returns { string } A new string padded with the specified string from the start.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padStart(maxLength: int, fillString?: string): string;

    /**
     * The substr() method returns a portion of the string, starting at the specified
     *     index and extending for a given number of characters afterwards.
     *
     * @param { int } begin - is index of the first character to include in the returned substring.
     *     <br>The value should be an integer.
     * @param { int } [length] - number of characters to extract. Defaults to the remaining characters
     *     from `begin` to the end of the string if not specified.
     *     <br>The value range is all integers.
     * @returns { string } new string containing the specified part of the given string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public substr(begin: int, length?: int): string;

    /**
     * Executes a search for a match between a regular expression and this string object.
     *
     * @param { string } implicitRegExp - a regular expression object or implicit regular expression.
     * @returns { int } the index of the first match between the regular expression and the given string.
     *     The return value range is [-1, string.length - 1]:
     *     - Returns -1 if no match was found.
     *     - Returns a non-negative integer (0 to string.length - 1) representing the index
     *       of the first matched substring.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public search(implicitRegExp: string): int;

    /**
     * Executes a search for a match between a regular expression and this string object.
     *
     * @param { RegExp } regexp - a regular expression object or implicit regular expression.
     * @returns { int } the index of the first match between the regular expression and the given string,
     *     or -1 if no match was found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public search(regexp: RegExp): int;

    /**
     * Executes a search for a match between a regular expression and this string object.
     *
     * @param { string | RegExp } regexp - a regular expression object or implicit regular expression.
     * @returns { int } the index of the first match between the regular expression and the given string,
     *     or -1 if no match was found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public search(regexp: string | RegExp): int;

    /**
     * The string.fromCodePoint() static method returns a string created by using the specified sequence of code points
     *
     * @param { int[] } codePoints - are integers between 0 and 0x10FFFF (inclusive) representing a
     *     Unicode code point.
     * @returns { string } string created by using the specified sequence of code points
     * @throws { RangeError } codePoints[i] is less than 0, or is greater than 0x10FFFF, Please ensure each code
     *      point is within the valid Unicode range [0, 0x10FFFF].
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static fromCodePoint(...codePoints: int[]): string;

    /**
     * Checks equality of this string and another Object as string
     *
     * @param { Any } to - another object to compare.
     * @returns { boolean } true if strings are equal and false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public equals(to: Any): boolean;

    /**
     * Getter for char at some index
     *
     * @param { int } index - index in char array inside string.
     *     <br>The value should be an integer.
     * @returns { char } char value at index
     * @throws { StringIndexOutOfBoundsError } index is negative or >= length
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public charAt(index: int): char;

    /**
     * Checks if this string is empty
     *
     * @returns { boolean } true if empty and false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isEmpty(): boolean;

    /**
     * Gets the codepoint at the specified index in this string.
     * Is similar to charAt(index), but if the character at the
     * index is the beginning of a surrogate pair, the int
     * representation for this codepoint is returned. Otherwise,
     * the character at the index is returned.
     *
     * @param { int } index - index of the potential surrogate pair.
     *     <br>The value should be an integer.
     * @returns { int | undefined } the codepoint at the specified index
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public codePointAt(index: int): int | undefined;

    /**
     * Returns the amount of full codepoints between begin and end
     * indexes. Characters outside the range are not counted, even if
     * the range ends in the middle of a surrogate pair.
     *
     * @param { int } begin - index to start from.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } end - past the ending index.
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { int } the amount of completed codepoints
     * @throws { StringIndexOutOfBoundsError } begin is negative or >= length, if end >= length
     * @throws { RangeError } begin > end.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public codePointCount(begin: int, end: int): int;

    /**
     * Returns the amount of full codepoints between begin and end
     * indexes. Characters outside the range are not counted, even if
     * the range ends in the middle of a surrogate pair.
     *
     * @param { double } begin - index to start from.
     * @param { double } end - past the ending index.
     * @returns { double } the amount of completed codepoints
     * @throws { StringIndexOutOfBoundsError } begin is negative or >= length, if end >= length.
     * @throws { RangeError } begin > end.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public codePointCount(begin: double, end: double): double;

    /**
     * Gets the full char sequence that is representing this string.
     *
     * @returns { char[] } char[] array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getChars(): char[];

    /**
     * Gets the char sequence that is representing the part of
     * this string between begin and end indexes. The range is
     * a half-interval [begin, end).
     *
     * @param { int } begin - index to start from.
     *     <br>The value should be an integer.
     * @param { int } end - past the ending index.
     *     <br>The value should be an integer.
     * @returns { char[] } char[] array
     * @throws { StringIndexOutOfBoundsError } begin > end or is negative or >= length or end > length.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getChars(begin: int, end: int): char[];

    /**
     * Gets the byte sequence that is representing the part of
     * this string between begin and end indexes. The range is
     * a half-interval [begin, end).
     *
     * @param { int } begin - index to start from.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { int } end - past the ending index.
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { byte[] } byte[] array
     * @throws { StringIndexOutOfBoundsError } begin is negative or >= length, if end >= length.
     * @throws { RangeError } begin > end.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public getBytes(begin: int, end: int): byte[];

    /**
     * Compares the given StringBuilder to this string. The
     * result is true if the StringBuilder has the same content
     * as this string at this moment and false otherwise.
     *
     * @param { StringBuilder } sb - StringBuilder to compare to.
     * @returns { boolean } true if StringBuilder has the same string
     * @throws { NullPointerError } sb param is null.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public contentEquals(sb: StringBuilder): boolean;

    /**
     * Lexicographical comparison between this string and another one.
     * The result is less than 0 if this string sorts before the other,
     * 0 if they are equal, and greater than 0 otherwise.
     *
     * @param { string } other - string to compare with.
     * @returns { int } the comparison result
     * @throws { NullPointerError } to param is null.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public compareTo(other: string): int;

    /**
     * Finds the first occurrence of a character in this string.
     *
     * @param { char } ch - the character to search for from the beginning of the string.
     *     The character must be a valid UTF-16 code unit (0 to 65535).
     * @returns { int } index of the character from the beginning of this string, or -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(ch: char): int;

    /**
     * Finds the first occurrence of a character in this string at position >= fromIndex.
     * Negative fromIndex is equivalent to 0, and fromIndex >= length implies no match.
     *
     * @param { char } ch - the character to search for from the beginning of the string.
     *     The character must be a valid UTF-16 code unit (0 to 65535).
     * @param { int } fromIndex - to start searching from.
     *     <br>The value should be an integer.
     * @returns { int } index of the character from the beginning of this string, or -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(ch: char, fromIndex: int): int;

    /**
     * Finds the first occurrence of another string in this string
     *
     * @param { string } str - the substring to search for within this string.
     *     If an empty string is provided, returns fromIndex (or 0 if fromIndex is undefined).
     * @param { int } [fromIndex] - to start searching from.
     *     <br>The value should be an integer.
     * @returns { int } index of the str from the beginning of this string, or -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public indexOf(str: string, fromIndex?: int): int;

    /**
     * Finds the last occurrence of a character in this string at position <= fromIndex.
     * All values of fromIndex >= length are equivalent, and negative fromIndex implies no match.
     *
     * @param { char } ch - the character to search for from the end of the string.
     * @param { int } fromIndex - to start searching from.
     *     <br>The value should be an integer.
     * @returns { int } index of the character from the beginning of this string, or -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(ch: char, fromIndex: int): int;

    /**
     * Finds the last occurrence of a character in this string.
     *
     * @param { char } ch - the character to search for from the end of the string.
     * @returns { int } index of the character from the beginning of this string, or -1 if not found
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(ch: char): int;

    /**
     * Finds the last occurrence of another string in this string.
     * If fromIndex is undefined, search starts from the end of the string.
     * If fromIndex >= length, it is treated as length (search from end).
     * If fromIndex is negative, returns -1 (no match).
     *
     * @param { string } str - the substring to search for within this string.
     * @param { int } [fromIndex] - position to start searching backwards from.
     *     If undefined, searches from the end of the string.
     *     If >= string length, searches from the end.
     *     If negative, returns -1.
     *     <br>The value should be an integer.
     * @returns { int } index of the str from the beginning of this string, or -1 if not found
     * @throws { NullPointerError } str param is null.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public lastIndexOf(str: string, fromIndex?: int): int;

    /**
     * Replaces all occurrences of the specified character
     * with another specified character. If no specified
     * character in this string is found then the original
     * string will be returned
     *
     * @param { char } oldCh - character which occurrences will be replaced.
     * @param { char } newCh - character to replace.
     * @returns { string } new string with replaced characters
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replaceChar(oldCh: char, newCh: char): string;

    /**
     * Checks if this string contains the specified string.
     * The search starts from specified index.
     *
     * @param { string } str - string to search.
     *     <br>The minimum length is 0.
     * @param { int } fromIndex - index to start search from.
     *     <br>The value should be an integer.
     * @returns { boolean } true if this string contains str and false otherwise
     * @throws { NullPointerError } str param is null.
     * @throws { StringIndexOutOfBoundsError } fromIndex param is negative or >= length.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public contains(str: string, fromIndex: int): boolean;

    /**
     * Checks if this string contains the specified string.
     * The search starts from specified index (negative fromIndex is equivalent to fromIndex = 0,
     * and fromIndex >= length implies no match).
     *
     * @param { string } str - string to search.
     * @param { double } fromIndex - index to start search from.
     * @returns { boolean } true if this string contains str and false otherwise
     * @throws { NullPointerError } str param is null.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public contains(str: string, fromIndex: double): boolean;

    /**
     * Concatenates the specified string array by inserting
     * the specified separator between all elements.
     *
     * @param { string[] } strings - string array.
     * @param { string } delim - separator between all elements.
     * @returns { string } newly created string from string array and delimiter
     * @throws { NullPointerError } strings param is null.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static join(strings: string[], delim: string): string;

    /**
     * Concatenates the specified string array by inserting
     * the specified prefix before each element, the specified
     * suffix after each element, and the specified separator
     * between all elements.
     *
     * @param { string[] } strings - string array.
     * @param { string } delim - separator between all elements.
     * @param { string } prefix - prefix before each element.
     * @param { string } suffix - suffix after each element.
     * @returns { string } newly created string from string array, prefix, suffix and delimiter
     * @throws { NullPointerError } strings | delim | prefix | suffix param is null.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static join(strings: string[], delim: string, prefix: string, suffix: string): string;

    /**
     * Creates new string similar to this string but with
     * all characters in lower case.
     *
     * @returns { string } new string with all characters in lower case
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLowerCase(): string;

    /**
     * Creates new string similar to this string but with
     * all characters in upper case.
     *
     * @returns { string } new string with all characters in upper case
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toUpperCase(): string;

    /**
     * Trims all whitespaces from the beginning and end of this string.
     *
     * @returns { string } new trimmed string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public trim(): string;

    /**
     * Trims all whitespaces from the beginning of this string.
     *
     * @returns { string } new left trimmed string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public trimLeft(): string;

    /**
     * Trims all whitespaces from the end of this string.
     *
     * @returns { string } new right trimmed string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public trimRight(): string;

    /**
     * Trims all specified characters from the beginning and
     * end of this string.
     *
     * @param { char[] } remove - that contains the characters to trim.
     * @returns { string } new trimmed string
     * @throws { NullPointerError } remove param is null.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public trim(remove: char[]): string;

    /**
     * Trims all specified characters from the beginning this string.
     *
     * @param { char[] } remove - that contains the characters to trim.
     * @returns { string } new left trimmed string
     * @throws { NullPointerError } remove param is null.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public trimLeft(remove: char[]): string;

    /**
     * Trims all specified characters from the end of this string.
     *
     * @param { char[] } remove - that contains the characters to trim.
     * @returns { string } new right trimmed string
     * @throws { NullPointerError } remove param is null.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public trimRight(remove: char[]): string;

    /**
     * Creates a new string of a specified length in which
     * the beginning of this string is padded with a
     * specified character. `padStart` is an alias of this method,
     * except the parameter order.
     *
     * @param { char } pad - the character to use for padding (repeated as needed to fill).
     *     The character must be a valid UTF-16 code unit (0 to 65535).
     * @param { int } count - the target length of the resulting string.
     *     If count <= current string length, returns a copy of the original string.
     *     <br>The value should be an integer.
     * @returns { string } new string with padding at the beginning
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padLeft(pad: char, count: int): string;

    /**
     * Creates a new string of a specified length in which
     * the end of this string is padded with a specified
     * character. `padEnd` is an alias of this method,
     * except the parameter order.
     *
     * @param { char } pad - the character to use for padding (repeated as needed to fill).
     *     The character must be a valid UTF-16 code unit (0 to 65535).
     * @param { int } count - the target length of the resulting string.
     *     If count <= current string length, returns a copy of the original string.
     *     <br>The value should be an integer.
     * @returns { string } new string with padding at the end
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public padRight(pad: char, count: int): string;

    /**
     * Repeats this string count times, i.e.
     * a = 'A',
     * a.repeat(2) == 'AA'
     *
     * @param { int } count - number of repetitions of this string.
     *     <br>The value must be an integer greater than or equal to 0.
     * @returns { string } this string that is repeated count times
     * @throws { ArgumentOutOfRangeError } count < 0.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public repeat(count: int): string;

    /**
     * The toString() method returns the string representation of the given string
     * in the form of a copy of the original object.
     *
     * @returns { string } a copy of the original string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * The anchor() method creates a string that embeds a string in an <a> element with a name (<a name="...">str</a>)
     *
     * @param { string } name - name of the anchor.
     * @returns { string } A string beginning with an <a name="name"> start tag
     *     (double quotes in name are replaced with &quot;),
     *     then the text str, and then an </a> end tag.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public anchor(name: string): string;

    /**
     * The big() method creates a string that embeds a string in a <big> element (<big>str</big>),
     * which causes a string to be displayed in a big font.
     *
     * @returns { string } A string embeds in <big> element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public big(): string;

    /**
     * The small() method creates a string that embeds a string in a <small> element (<small>str</small>),
     * which causes a string to be displayed in a big font.
     *
     * @returns { string } A string embeds in <small> element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public small(): string;

    /**
     * The blink() method creates a string that embeds a string in a <blink> element (<blink>str</blink>),
     * which causes a string to be displayed in a big font.
     *
     * @returns { string } A string embeds in <blink> element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public blink(): string;

    /**
     * The bold() method creates a string that embeds a string in a <bold> element (<b>str</b>),
     * which causes a string to be displayed in a big font.
     *
     * @returns { string } A string embeds in <b> element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public bold(): string;

    /**
     * The italics() method creates a string that embeds a string in a <i> element (<i>str</i>),
     * which causes a string to be displayed in a big font.
     *
     * @returns { string } A string embeds in <i> element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public italics(): string;

    /**
     * The strike() method creates a string that embeds a string in a <strike> element (<strike>str</strike>),
     * which causes a string to be displayed in a big font.
     *
     * @returns { string } A string embeds in <strike> element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public strike(): string;

    /**
     * The sub() method creates a string that embeds a string in a <sub> element (<sub>str</sub>),
     * which causes a string to be displayed in a big font.
     *
     * @returns { string } A string embeds in <sub> element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sub(): string;

    /**
     * The sup() method creates a string that embeds a string in a <sup> element (<sup>str</sup>),
     * which causes a string to be displayed in a big font.
     *
     * @returns { string } A string embeds in <sup> element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public sup(): string;

    /**
     * The fixed() method creates a string that embeds a string in a <tt> element (<tt>str</tt>),
     * which causes a string to be displayed in a big font.
     *
     * @returns { string } A string embeds in <tt> element
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fixed(): string;

    /**
     * The fontcolor() method creates a string that embeds a string in a <font> element (<font color="...">str</font>),
     * which causes a string to be displayed in the specified font color.
     *
     * @param { string } color - color to use.
     * @returns { string } A string embeds in <font> element with color attribute
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fontcolor(color: string): string;

    /**
     * The fontsize() method creates a string that embeds a string in a <font> element (<font size="...">str</font>),
     * which causes a string to be displayed in the specified font size.
     *
     * @param { int } size - size to use.
     *     <br>The value should be an integer.
     * @returns { string } A string embeds in <font> element with size attribute
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fontsize(size: int): string;

    /**
     * The fontsize() method creates a string that embeds a string in a <font> element (<font size="...">str</font>),
     * which causes a string to be displayed in the specified font size.
     *
     * @param { string } size - size to use.
     * @returns { string } A string embeds in <font> element with size attribute
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public fontsize(size: string): string;

    /**
     * The link() method creates a string that embeds a string in an <a> element (<a href="...">str</a>),
     * to be used as a hypertext link to another URL.
     *
     * @param { string } link - URL to link to.
     * @returns { string } A string embeds in <a> element with href attribute
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public link(link: string): string;

    /**
     * The trimEnd() method removes whitespace from the end of a string and returns a new string,
     * without modifying the original string. trimRight() is an alias of this method.
     *
     * @returns { string } new string with whitespace removed from the end
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public trimEnd(): string;

    /**
     * The trimStart() method removes whitespace from the beginning of a string and returns a new string,
     * without modifying the original string. trimLeft() is an alias of this method.
     *
     * @returns { string } new string with whitespace removed from the beginning
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public trimStart(): string;

    /**
     * The slice() method extracts a section of a string and returns it as a new string,
     * without modifying the original string.
     *
     * @param { int } [begin] - Start index.
     *     <br>The value should be an integer.
     * @param { int } [end] - End index.
     *     <br>The value should be an integer.
     * @returns { string } extracted section of the string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public slice(begin?: int, end?: int): string;

    /**
     * Resolves the replacement template string by parsing special substitution patterns
     *
     * @param { string } matched - matched string, which is the complete substring matched by the regular expression.
     * @param { string } str - the original full string on which the replacement operation is being performed.
     * @param { int } position - the zero-based start index of the matched substring within the original string str.
     *     <br>The value must be an integer greater than or equal to 0.
     * @param { string[] } captures - an array of capture group matches.
     * @param { Record<string, string | undefined> | undefined } namedCaptures - a mapping object for named
     *     capturing groups.
     * @param { string } replacement - the replacement template string.
     * @returns { string } the final replacement string after parsing all substitution patterns in the
     *     replacement template.
     * @throws { StringIndexOutOfBoundsError } Input - parameter error.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static getSubstitution(matched: string, str: string, position: int, captures: string[],
        namedCaptures: Record<string, string | undefined> | undefined, replacement: string): string;

    /**
     * Returns a new string with one, some, or all matches of a pattern replaced by a replacement
     *
     * @param { RegExp } searchValue - pattern which can be a string or RegExp.
     * @param { string } replaceValue - replacement string.
     * @returns { string } a new replaced string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replace(searchValue: RegExp, replaceValue: string): string;

    /**
     * Returns a new string with one, some, or all matches of a pattern replaced by a replacement
     *
     * @param { string } searchValue - pattern which can be a string or RegExp.
     * @param { string } replaceValue - replacement string.
     * @returns { string } a new replaced string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replace(searchValue: string, replaceValue: string): string;

    /**
     * Returns a new string with one, some, or all matches of a pattern replaced by a replacement
     *
     * @param { string | RegExp } searchValue - pattern which can be a string or RegExp.
     * @param { string } replaceValue - replacement string.
     * @returns { string } a new replaced string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replace(searchValue: string | RegExp, replaceValue: string): string;

    /**
     * Returns a new string with one, some, or all matches of a pattern replaced by a replacement
     *
     * @param { RegExp } searchValue - pattern which can be a string or RegExp.
     * @param { Function } replacer - replacement function.
     * @returns { string } a new replaced string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replace(searchValue: RegExp, replacer: (substr: string, args: (Object | undefined)[]) => string): string;

    /**
     * Returns a new string with one, some, or all matches of a pattern replaced by a replacement
     *
     * @param { string } searchValue - pattern which can be a string or RegExp.
     * @param { Function } replacer - replacement function.
     * @returns { string } a new replaced string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replace(searchValue: string, replacer: (substr: string, args: (Object | undefined)[]) => string): string;

    /**
     * Returns a new string with one, some, or all matches of a pattern replaced by a replacement
     *
     * @param { string | RegExp } searchValue - pattern which can be a string or RegExp.
     * @param { Function } replacer - replacement function.
     * @returns { string } a new replaced string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replace(searchValue: string | RegExp, replacer: (substr: string, 
        args: (Object | undefined)[]) => string): string;

    /**
     * Returns a new string with all matches of a pattern replaced by a replacement
     *
     * @param { RegExp } searchValue - pattern which can be a string or RegExp.
     * @param { string } replaceValue - replacement string.
     * @returns { string } a new replaced string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replaceAll(searchValue: RegExp, replaceValue: string): string;

    /**
     * Returns a new string with all matches of a pattern replaced by a replacement
     *
     * @param { string } searchValue - pattern which can be a string or RegExp.
     * @param { string } replaceValue - replacement string.
     * @returns { string } a new replaced string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replaceAll(searchValue: string, replaceValue: string): string;

    /**
     * Returns a new string with all matches of a pattern replaced by a replacement
     *
     * @param { string | RegExp } searchValue - pattern which can be a string or RegExp.
     * @param { string } replaceValue - replacement string.
     * @returns { string } a new replaced string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replaceAll(searchValue: string | RegExp, replaceValue: string): string;

    /**
     * Returns a new string with all matches of a pattern replaced by a replacement
     *
     * @param { RegExp } searchValue - pattern which can be a string or RegExp.
     * @param { Function } replacer - replacement function.
     * @returns { string } a new replaced string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replaceAll(searchValue: RegExp, replacer: (substr: string, args: (Object | undefined)[]) => string): string;

    /**
     * Returns a new string with all matches of a pattern replaced by a replacement
     *
     * @param { string } searchValue - pattern which can be a string or RegExp.
     * @param { Function } replacer - replacement function.
     * @returns { string } a new replaced string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replaceAll(searchValue: string, replacer: (substr: string, args: (Object | undefined)[]) => string): string;

    /**
     * Returns a new string with all matches of a pattern replaced by a replacement
     *
     * @param { string | RegExp } searchValue - pattern which can be a string or RegExp.
     * @param { Function } replacer - replacement function.
     * @returns { string } a new replaced string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replaceAll(searchValue: string | RegExp, replacer: (substr: string,
        args: (Object | undefined)[]) => string): string;

    
    /**
     * The toLocaleLowerCase() method returns the calling string value converted to lower case,
     * according to any locale-specific case mappings.
     *
     * @param { string } locale - locale to use.
     * @returns { string } new string in lower case
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleLowerCase(locale: string): string;

    /**
     * The toLocaleLowerCase() method returns the calling string value converted to lower case,
     * according to any locale-specific case mappings.
     *
     * @param { string[] } locale - locale to use.
     * @returns { string } new string in lower case
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleLowerCase(locale: string[]): string;

    /**
     * The toLocaleLowerCase() method returns the calling string value converted to lower case,
     * according to any locale-specific case mappings.
     *
     * @returns { string } new string in lower case
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleLowerCase(): string;

    /**
     * The toLocaleUpperCase() method returns the calling string value converted to upper case,
     * according to any locale-specific case mappings.
     *
     * @param { string } locale - locale to use.
     * @returns { string } new string in upper case
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleUpperCase(locale: string): string;

    /**
     * The toLocaleUpperCase() method returns the calling string value converted to upper case,
     * according to any locale-specific case mappings.
     *
     * @param { string[] } locale - locale to use.
     * @returns { string } new string in upper case
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleUpperCase(locale: string[]): string;

    /**
     * The toLocaleUpperCase() method returns the calling string value converted to upper case,
     * according to any locale-specific case mappings.
     *
     * @returns { string } new string in upper case
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toLocaleUpperCase(): string;

    /**
     * Retrieves the result of matching a string against a regular expression
     *
     * @param { string } implicitRegExp - a regular expression object.
     * @returns { RegExpMatchArray | null } If the regexp.global is true, all results matching the complete regular
     *     expression will be returned, but capturing groups are not included
     *     Otherwise, only the first complete match and its related capturing groups are returned
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public match(implicitRegExp: string): RegExpMatchArray | null;

    /**
     * Retrieves the result of matching a string against a regular expression
     *
     * @param { RegExp } regexp - a regular expression object.
     * @returns { RegExpMatchArray | null } If the regexp.global is true, all results matching the complete regular
     *     expression will be returned, but capturing groups are not included
     *     Otherwise, only the first complete match and its related capturing groups are returned
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public match(regexp: RegExp): RegExpMatchArray | null;

    /**
     * Retrieves the result of matching a string against a regular expression
     *
     * @param { string | RegExp } regexp - a regular expression object.
     * @returns { RegExpMatchArray | null } If the regexp.global is true, all results matching the complete regular
     *     expression will be returned, but capturing groups are not included
     *     Otherwise, only the first complete match and its related capturing groups are returned
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public match(regexp: string | RegExp): RegExpMatchArray | null;

    /**
     * Returns an iterator of all results matching a string against a regular expression,
     * including capturing groups
     *
     * @param { RegExp } reg - a regular expression object.
     * @returns { IterableIterator<RegExpMatchArray> } an iterator of all results matching
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public matchAll(reg: RegExp): IterableIterator<RegExpMatchArray>;

    /**
     * The normalize() method of string values returns the Unicode Normalization Form of this string
     *
     * @param { string } [form] - is 'NFC' or 'NFD' or 'NFKC' or 'NFKD'.
     * @returns { string } the Unicode Normalization Form of the string
     * @throws { RangeError } form is not 'NFC' or 'NFD' or 'NFKC' or 'NFKD'.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public normalize(form?: string): string;

    /**
     * The toWellFormed() method of string values returns a string where all lone surrogates of
     * this string are replaced with the Unicode replacement character U+FFFD.
     *
     * @returns { string } a well-formed string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toWellFormed(): string;

    /**
     * The isWellFormed() method of string values returns a boolean indicating whether this string contains
     * any lone surrogates.
     *
     * @returns { boolean } true if this string contains any lone surrogates, false otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isWellFormed(): boolean;

    /**
     * Check if a string is compressed
     *
     * @returns { boolean } true - if s is compressed, false - otherwise
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isCompressed(): boolean;

    /**
     * Returns an iterator for this string
     *
     * @returns { IterableIterator<string> } an iterator for this string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_iterator(): IterableIterator<string>;
}
