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
 * Represent JSON class
 *
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
export class JSON {
    /**
     * Converts byte to JSON format
     *
     * @param { byte } d - byte to be converted to a JSON as a Number
     * @returns { string } JSON representation of byte
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: byte): string;

    /**
     * Converts char to JSON format
     *
     * @param { char } d - char to be converted to a JSON as a string
     * @returns { string } JSON representation of char
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: char): string;

    /**
     * Converts short to JSON format
     *
     * @param { short } d - short to be converted to a JSON as a Number
     * @returns { string } JSON representation of short
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: short): string;

    /**
     * Converts int to JSON format
     *
     * @param { int } d - int to be converted to a JSON as a Number
     * @returns { string } JSON representation of int
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: int): string;

    /**
     * Converts long to JSON format
     *
     * @param { long } d - long to be converted to a JSON as a Number
     * @returns { string } JSON representation of long
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: long): string;

    /**
     * Converts float to JSON format
     *
     * @param { float } d - float to be converted to a JSON as a Number
     * @returns { string } JSON representation of float
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: float): string;

    /**
     * Converts double to JSON format
     *
     * @param { double } d - double to be converted to a JSON as a Number
     * @returns { string } JSON representation of double
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: double): string;

    /**
     * Converts bigint to JSON format
     *
     * @param { bigint } d - bigint to be converted to a JSON as a Number
     * @returns { string } JSON representation of bigint
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: bigint): string;

    /**
     * Converts boolean to JSON format
     *
     * @param { boolean } d - boolean to be converted to a JSON as a Boolean literal
     * @returns { string } JSON representation of boolean
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: boolean): string;

    /**
     * Converts string to JSON format
     *
     * @param { string } d - string to be converted to a JSON as a string
     * @returns { string } JSON representation of string
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: string): string;

    /**
     * Converts bytes array to JSON format
     *
     * @param { FixedArray<byte> } d - bytes array to be converted to a JSON as an Array of Numbers
     * @returns { string } JSON representation of bytes array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: FixedArray<byte>): string;

    /**
     * Converts chars array to JSON format
     *
     * @param { FixedArray<char> } d - chars array to be converted to a JSON as an Array of Strings
     * @returns { string } JSON representation of chars array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: FixedArray<char>): string;

    /**
     * Converts shorts array to JSON format
     *
     * @param { FixedArray<short> } d - shorts array to be converted to a JSON as an Array of Numbers
     * @returns { string } JSON representation of shorts array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: FixedArray<short>): string;

    /**
     * Converts ints array to JSON format
     *
     * @param { FixedArray<int> } d - ints array to be converted to a JSON as an Array of Numbers
     * @returns { string } JSON representation of ints array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: FixedArray<int>): string;

    /**
     * Converts longs array to JSON format
     *
     * @param { FixedArray<long> } d - longs array to be converted to a JSON as an Array of Numbers
     * @returns { string } JSON representation of longs array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: FixedArray<long>): string;

    /**
     * Converts array of floats to JSON format
     *
     * @param { FixedArray<float> } d - array of float to be converted to a JSON as an Array of Numbers
     * @returns { string } JSON representation of array of floats
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: FixedArray<float>): string;

    /**
     * Converts doubles array to JSON format
     *
     * @param { FixedArray<double> } d - doubles array to be converted to a JSON as an Array of Numbers
     * @returns { string } JSON representation of doubles array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: FixedArray<double>): string;

    /**
     * Converts booleans array to JSON format
     *
     * @param { FixedArray<boolean> } d - booleans array to be converted to a JSON as an Array of Boolean literals
     * @returns { string } JSON representation of booleans array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: FixedArray<boolean>): string;

    /**
     * Converts Array of Double to JSON format
     *
     * @param { Array<Double> } d - Array of Double to be converted
     * @returns { string } JSON representation of Array
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: Array<Double>): string;

    /**
     * Converts ArrayLike of Double to JSON format
     *
     * @param { ArrayLike<Double> } d - ArrayLike of Double to be converted
     * @returns { string } JSON representation of ArrayLike
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(d: ArrayLike<Double>): string;

    /**
     * Converts JsonReplacer to JSON format
     *
     * @param { JsonReplacer } obj - JsonReplacer object to be converted
     * @returns { string } JSON representation
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(obj: JsonReplacer): string;

    /**
     * Converts an object to a JavaScript Object Notation (JSON) string.
     *
     * @param { Any } obj - An object to be converted
     * @returns { string } JSON representation of Object
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(obj: Any): string;

    /**
     * Converts an object to a JavaScript Object Notation (JSON) string.
     *
     * @param { Any } obj - An object to be converted
     * @param { function } replacer - A that transforms the results
     * @param { string | int } [space] - A string or number for indentation
     * @returns { string } JSON representation of Object
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(obj: Any, replacer: ((key: string, value: Any) => Any) | undefined | null, space?: string | int): string;

    /**
     * Converts an object to a JavaScript Object Notation (JSON) string.
     *
     * @param { Any } obj - An object to be converted
     * @param { FixedArray<double | string> } replacer - An array of property names to include
     * @param { int | string } [space] - A string or number for indentation
     * @returns { string } JSON representation of Object
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(obj: Any, replacer: FixedArray<double | string>, space?: int | string): string;

    /**
     * Converts an object to a JavaScript Object Notation (JSON) string.
     *
     * @param { Any } obj - An object to be converted
     * @param { Array<double | string> } replacer - An array of property names to include
     * @param { int | string } [space] - A string or number for indentation
     * @returns { string } JSON representation of Object
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    stringify(obj: Any, replacer: Array<double | string>, space?: int | string): string;

    /**
     * Parses a JSON string to the specified Type
     *
     * @param { string } text - JSON string to parse
     * @param { Type } type - Target type for parsing
     * @returns { T | null | undefined } Parsed object
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    parse<T>(text: string, type: Type): T | null | undefined;

    /**
     * Parses a JSON string to the specified Type with reviver function
     *
     * @param { string } text - JSON string to parse
     * @param { function } reviver - Function to transform values
     * @param { Type } type - Target type for parsing
     * @param { jsonx.ParseOptions } [options] - Parse options
     * @returns { T | null | undefined } Parsed object
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    parse<T>(text: string, reviver: ((key: string, value: Any) => Any) | undefined, type: Type, options?: jsonx.ParseOptions): T | null | undefined;

    /**
     * Parses a JSON string to the specified Class
     *
     * @param { string } json - JSON string to parse
     * @param { Class } type - Target class for parsing
     * @returns { T | null | undefined } Parsed object
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    parse<T>(json: string, type: Class): T | null | undefined;

    /**
     * Parses a JSON string to the specified Class with reviver function
     *
     * @param { string } json - JSON string to parse
     * @param { function } reviver - Function to transform values
     * @param { Class } type - Target class for parsing
     * @param { jsonx.ParseOptions } [options] - Parse options
     * @returns { T | null | undefined } Parsed object
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 static
     */
    parse<T>(json: string, reviver: ((key: string, value: Any) => Any) | undefined, type: Class, options?: jsonx.ParseOptions): T | null | undefined;

    /**
     * Parses a JSON string and returns a JsonElement.
     *
     * @param { string } text - The JSON string to parse
     * @param { jsonx.ParseOptions } [options] - BigInt parsing options
     * @returns { jsonx.JsonElement } The parsed JSON element
     * @throws { JsonParseError } If - the JSON string is invalid
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    parseJsonElement(text: string, options?: jsonx.ParseOptions): jsonx.JsonElement;

    /**
     * Parses a JSON string with a reviver function and returns a JsonElement.
     *
     * @param { string } text - The JSON string to parse
     * @param { function } reviver - Function to transform values
     * @param { jsonx.ParseOptions } [options] - BigInt parsing options
     * @returns { jsonx.JsonElement } The parsed JSON element
     * @throws { JsonParseError } If - the JSON string is invalid
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    parseJsonElement(text: string, reviver: (key: string, value: jsonx.JsonElement) => jsonx.JsonElement, options?: jsonx.ParseOptions): jsonx.JsonElement;

    /**
     * Converts an object to a JavaScript Object Notation (JSON) string,
     * invoking any instance methods annotated with @JSONStringifyGetter and
     * including their return values in the output. Each annotated method's name
     * is used as the JSON key, and its return value is used as the corresponding value.
     *
     * @param { Any } obj: - Object An object to be converted.
     * @returns { string } - JSON representation of Object, including annotated getter values
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    stringifyWithGetters(obj: Any): string;

    /**
     * Converts an object to a JavaScript Object Notation (JSON) string,
     * invoking any instance methods annotated with @JSONStringifyGetter and
     * including their return values in the output. Each annotated method's name
     * is used as the JSON key, and its return value is used as the corresponding value.
     *
     * @param { Any } obj: - Object An object to be converted.
     * @param { function } replacer - A function that transforms the results.
     * @param { int | string } [space] - A string or number that's used to insert white space
     * @returns { string } - JSON representation of Object, including annotated getter values
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    stringifyWithGetters(
      obj: Any,
      replacer: ((key: string, value: Any) => Any) | undefined | null,
      space?: int | string): string;

    /**
     * Converts an object to a JavaScript Object Notation (JSON) string,
     * invoking any instance methods annotated with @JSONStringifyGetter and
     * including their return values in the output. Each annotated method's name
     * is used as the JSON key, and its return value is used as the corresponding value.
     *
     * @param { Any } obj: - Object An object to be converted.
     * @param { Array<double | string> | Array<string> | Array<double> } replacer 
     *     - An array with elements indicating names of the properties in the object
     *     that should be included in the resulting JSON string.
     *     Annotated getter methods whose names appear in this array are also included.
     * @param { int | string } [space] - A string or number that's used to insert white space
     * @returns { string } - JSON representation of Object, including annotated getter values
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    stringifyWithGetters(
      obj: Any,
      replacer: Array<double | string> | Array<string> | Array<double>,
      space?: int | string): string;

    /**
     * Parses a JSON string and populates the fields of an existing instance.
     * Unlike parse<T>(json, type), this does NOT require a default constructor.
     * Fields whose keys are absent from the JSON retain their current values
     * on the instance (merge semantics).
     *
     * @param { string } json - JSON string to parse
     * @param { T } instance - Existing instance whose fields will be populated
     * @returns { T } The same instance after population
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    parseUpdate<T>(json: string, instance: T): T;

    /**
     * Parses a JSON string and populates the fields of an existing instance,
     * with an optional reviver and parse options.
     * Unlike parse<T>(json, type), this does NOT require a default constructor.
     * Fields whose keys are absent from the JSON retain their current values
     * on the instance (merge semantics).
     *
     * @param { string } json - JSON string to parse
     * @param { function } reviver - Optional function to transform each parsed value, or undefined
     * @param { T } instance - Existing instance whose fields will be populated
     * @param { jsonx.ParseOptions } [options] - Optional ParseOptions (e.g. bigIntMode)
     * @returns { T } The same instance after population
     * @syscap SystemCapability.Utils.Lang
     * @FaAndStageModel
     * @since 24 staticonly
     */
    parseUpdate<T>(
        json: string,
        reviver: ((key: string, value: Any) => Any) | undefined,
        instance: T,
        options?: jsonx.ParseOptions
    ): T;
}
