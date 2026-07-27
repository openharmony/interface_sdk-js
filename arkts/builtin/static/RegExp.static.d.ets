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
 * Regular expression result descriptor
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class RegExpResultArray extends Array<string | undefined> {
    /**
     * Returns the first match if "0" is given and the first match exists
     *
     * @param { string } index - string index.
     * @returns { string } the first match as string or null
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_get(index: string): string;

    /**
     * Returns result string by index.
     *
     * @param { int } index - Integer index.
     *     <br>The value should be an integer.
     * @returns { string | undefined } resulting string.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_get(index: int): string | undefined;

    /**
     * Creates a RegExpResultArray instance.
     *
     * @param { int } index - the starting index of the match result.
     *     <br>The value should be an integer.
     * @param { string } input - the original string used for matching.
     * @param { Array<string | undefined> } result - the string array that matches.
     * @param { Array<Array<int>> } indices - the start and end index arrays of each matching substring.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(index: int, input: string, result: Array<string | undefined>, indices: Array<Array<int>>);

    /**
     * Get the matching result array itself.
     *
     * @returns { Array<string | undefined> } Match result array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get result(): Array<string | undefined>;

    /**
     * Post execution processing.
     *
     * @param { RegExpResultArray } res - the result array.
     * @param { string } input - the input string.
     * @param { int } index - the index.
     *     <br>The value should be an integer.
     * @param { boolean } hasIndices - whether has indices.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public postExecProcessing(res: RegExpResultArray, input: string, index: int, hasIndices: boolean): void;

    /**
     * Set the matching result at the specified index.
     *
     * @param { int } index - the index to be set.
     *     <br>The value should be an integer.
     * @param { string | undefined } val - the value to be set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: string | undefined): void;

    /**
     * Get an array containing the start and end indices of each matching substring.
     *
     * @returns { Array<Array<int>> } index array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get indices(): Array<Array<int>>;

    /**
     * Returns a string representation of the matching result.
     *
     * @returns { string } a string representing the match result.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

}

/**
 * Represents the matching result returned by string.prototype.matchAll(),
 * or the non iterative result of RegExp.prototype.exec() in global mode.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class RegExpMatchArray extends RegExpResultArray {
    /**
     * Creates a RegExpMatchArray instance that contains matching results.
     *
     * @param { int } index - the starting index of the matching result.
     *     <br>The value should be an integer.
     * @param { string } input - the original string used for matching.
     * @param { Array<string | undefined> } result - the string array that matches.
     * @param { Array<Array<int>> } indices - the start and end index arrays of each matching substring.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(index: int, input: string, result: Array<string | undefined>, indices: Array<Array<int>>);

    /**
     * Creates a RegExpMatchArray instance containing matching results.
     *
     * @param { int } index - the starting index of the matching result.
     *     <br>The value should be an integer.
     * @param { string } input - the original string used for matching.
     * @param { Array<string | undefined> } result - the string array that matches.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(index: int, input: string, result: Array<string | undefined>);

    /**
     * Gets the starting index of the match result. Returns undefined if invalid.
     *
     * @returns { int | undefined } the starting index of the match.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get index(): int | undefined;

    /**
     * Gets the original string used for matching. Returns undefined if invalid.
     *
     * @returns { string | undefined } the original string.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get input(): string | undefined;

    /**
     * Sets the starting index of the match result.
     *
     * @param { int | undefined } val - the index value to be set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set index(val: int | undefined);

    /**
     * Sets the original string used for matching.
     *
     * @param { string | undefined } val - the string value to be set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set input(val: string | undefined);
}

/**
 * Represents the return result of exec(), containing detailed information of a single match.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class RegExpExecArray extends RegExpResultArray {
    /**
     * Creates a RegExpExecArray instance containing match results.
     *
     * @param { int } index - the starting index of the match result.
     *     <br>The value should be an integer.
     * @param { string } input - the original string used for matching.
     * @param { Array<string | undefined> } result - the array of matched strings.
     * @param { Array<Array<int>> } indices - the start and end index arrays of each matching substring.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(index: int, input: string, result: Array<string | undefined>, indices: Array<Array<int>>);

    /**
     * Creates a RegExpExecArray instance containing match results (without indices).
     *
     * @param { int } index - the starting index of the match result.
     *     <br>The value should be an integer.
     * @param { string } input - the original string used for matching.
     * @param { Array<string | undefined> } result - the array of matched strings.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(index: int, input: string, result: Array<string | undefined>);

    /**
     * Gets the starting index of the match result.
     *
     * @returns { int } the starting index of the match.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get index(): int;

    /**
     * Gets the original string used for matching.
     *
     * @returns { string } the original string.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get input(): string;

    /**
     * Sets the starting index of the match result.
     *
     * @param { int } val - the index value to be set.
     *     <br>The value should be an integer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set index(val: int);

    /**
     * Sets the original string used for matching.
     *
     * @param { string } val - the string value to be set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set input(val: string);
}

/**
 * Regular expression
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class RegExp extends Object {
    /**
     * Returns a string containing the source text of this regular expression
     *
     * @returns { string } return source
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    get source(): string;

    /**
     * Constructs a new RegExp using pattern and flags
     *
     * @param { string } pattern - description of a pattern
     * @param { string } [flags] - description of flags to be used
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(pattern: string, flags?: string);

    /**
     * Constructs a new RegExp by other RegExp. It uses other RegExp's flags if flags aren't provided
     *
     * @param { RegExp } regexp - other regexp
     * @param { string } [flags] - description of flags to be used
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(regexp: RegExp, flags?: string);

    /**
     * Constructs a new RegExp by RegExp or string
     *
     * @param { RegExp | string } regexp - The pattern of the regular expression or another RegExp instance.
     * @param { string } [flags] - description of flags to be used.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(regexp: RegExp | string, flags?: string);

    /**
     * Gets the flags of the regular expression.
     *
     * @returns { string } a string containing the flags used for the regular expression.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get flags(): string;

    /**
     * Gets the global flag, indicating whether to perform global matching.
     *
     * @returns { boolean } true if global matching is enabled, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get global(): boolean;

    /**
     * Gets the dotAll flag, indicating whether '.' matches newline characters.
     *
     * @returns { boolean } true if dotAll is enabled, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get dotAll(): boolean;

    /**
     * Gets the hasIndices flag, indicating whether to include indices of matching substrings.
     *
     * @returns { boolean } true if indices are included in the match result, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get hasIndices(): boolean;

    /**
     * Gets the ignoreCase flag, indicating whether to ignore case.
     *
     * @returns { boolean } true if case is ignored, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get ignoreCase(): boolean;

    /**
     * Gets the multiline flag, indicating whether to perform multiline matching.
     *
     * @returns { boolean } true if multiline matching is enabled, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get multiline(): boolean;

    /**
     * Gets the sticky flag, indicating whether to perform sticky matching.
     *
     * @returns { boolean } true if sticky matching is enabled, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get sticky(): boolean;

    /**
     * Gets the unicode flag, indicating whether to enable Unicode mode.
     *
     * @returns { boolean } true if Unicode mode is enabled, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get unicode(): boolean;

    /**
     * Gets the unicodeSets flag, indicating whether Unicode set mode is enabled.
     *
     * @returns { boolean } true if Unicode set mode is enabled, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get unicodeSets(): boolean;

    /**
     * Executes a match search on the string starting from the specified index.
     *
     * @param { string } str - the string to match.
     * @param { int } index - the index to start matching from.
     *     <br>The value should be an integer.
     * @returns { RegExpExecArray | null } if match succeeds, returns an array containing match results,
     *     otherwise returns null.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public exec(str: string, index: int): RegExpExecArray | null;

    /**
     * Executes a search for a match in a specified string and returns a result array.
     *
     * @param { string } str - the string to match.
     * @returns { RegExpExecArray | null } if match succeeds, returns an array containing match results,
     *     otherwise returns null.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public exec(str: string): RegExpExecArray | null;

    /**
     * Searches for matches in the string and returns the starting index of the match.
     *
     * @param { string } str - the string to search.
     * @returns { int } if a match is found, returns its starting index; otherwise returns -1.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public search(str: string): int;

    /**
     * Replaces matched substrings in the string using a replacement string.
     *
     * @param { string } str - the original string.
     * @param { string } replaceValue - the string used for replacement.
     * @returns { string } the new string after replacement.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replace(str: string, replaceValue: string): string;

    /**
     * Replaces matched substrings in the string using a function.
     *
     * @param { string } str - the original string.
     * @param { function } replacer - a function used to generate new substrings.
     * @returns { string } the new string after replacement.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replace(str: string, replacer: (substr: string, args: Object[]) => string): string;

    /**
     * Splits the string into an array of substrings using the regular expression.
     *
     * @param { string } str - the string to split.
     * @param { Int | undefined } limit - limits the maximum length of the returned array.
     * @returns { string[] } the array of substrings after splitting.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public split(str: string, limit: Int | undefined): string[];

    /**
     * Searches the string for matches and returns all matches as an array.
     *
     * @param { string } str - the string to match.
     * @returns { RegExpMatchArray | null } if matches are found, returns an array containing all matches,
     *     otherwise returns null.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public match(str: string): RegExpMatchArray | null;

    /**
     * Returns an iterator that iterates over all matches in the string.
     *
     * @param { string } str - the string to match.
     * @returns { IterableIterator<RegExpMatchArray> } an iterator that iterates over all match results.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public matchAll(str: string): IterableIterator<RegExpMatchArray>;

    /**
     * Executes a search for a match between a regular expression and specified string.
     *
     * @param { string } str - the string against which to match the regular expression.
     * @returns { boolean } if the string has matches, returns true; otherwise returns false.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public test(str: string): boolean;

    /**
     * Returns a string representing the regular expression.
     *
     * @returns { string } the string representation of the regular expression.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * Advances the string index according to the Unicode flag.
     *
     * @param { string } s - original string.
     * @param { int } index - current index.
     *     <br>The value should be an integer.
     * @param { boolean } unicode - whether to enable Unicode mode.
     * @returns { int } next index.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static advanceStringIndex(s: string, index: int, unicode: boolean): int;

    /**
     * RegExp constructor call signature, used to create new RegExp instances.
     *
     * @param { string } pattern - regular expression pattern.
     * @param { string } [flags] - regular expression flags.
     * @returns { RegExp } newly created RegExp instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static $_invoke(pattern: string, flags?: string): RegExp;

    /**
     * RegExp constructor call signature, used to create new RegExp instances.
     *
     * @param { RegExp | string } pattern - regular expression pattern or another RegExp instance.
     * @param { string } [flags] - regular expression flags.
     * @returns { RegExp } newly created RegExp instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static $_invoke(pattern: RegExp | string, flags?: string): RegExp;

    /**
     * RegExp constructor call signature, used to create new RegExp instances.
     *
     * @param { RegExp | string } pattern - regular expression pattern or another RegExp instance.
     * @returns { RegExp } newly created RegExp instance.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static $_invoke(pattern: RegExp | string): RegExp;
}
