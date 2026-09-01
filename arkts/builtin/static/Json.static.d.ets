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
 * Represents all types that can be serialized to JSON or parsed from JSON.
 *
 * @unionmember { boolean }
 * @unionmember { bigint }
 * @unionmember { string }
 * @unionmember { undefined }
 * @unionmember { null }
 * @unionmember { Double }
 * @unionmember { Long }
 * @unionmember { Record<string, JsonRecordType> }
 * @unionmember { Array<JsonRecordType> }
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type JsonRecordType = boolean | bigint | string | undefined | null | Double | Long |
    Record<string, JsonRecordType> | Array<JsonRecordType>;

/**
 * Interface for customizing JSON serialization.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface JsonReplacer {
    /**
     * Method to customize JSON serialization.
     *
     * @returns { Record<string, Any> } A record representing the serialized object
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    jsonReplacer(): Record<string, Any>;
}

/**
 * Annotation interface for specifying a new name for a JSON property.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export @interface JSONRename {
    /**
     * The new name to use for the JSON property.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    newName: string;
}

/**
 * Annotation interface to ignore a property during JSON serialization.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export @interface JSONStringifyIgnore {
}

/**
 * Annotation interface to ignore a property during JSON parsing.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export @interface JSONParseIgnore {
}

/**
 * Annotation interface to include a getter method in JSON serialization.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export @interface JSONStringifyGetter {
}

/**
 * Error thrown when parsing JSON fails.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class JsonParseError extends SyntaxError {
    /**
     * Constructor for creating a JsonParseError.
     *
     * @param { string } [message] - Error message.
     * @param { ErrorOptions } [options] - Error options.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(message?: string, options?: ErrorOptions);

    /**
     * Creates a JsonParseError with location information.
     *
     * @param { string } msg - Error message
     * @param { int } [start_offset] - Start offset in the source string
     *     <br>The value should be an integer.
     * @param { int } [end_offset] - End offset in the source string
     *     <br>The value should be an integer.
     * @returns { JsonParseError } The created JsonParseError
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(msg: string, start_offset?: int, end_offset?: int): JsonParseError;
}

/**
 * Interface for objects that can be converted to JSON.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface JsonSerializable {
    /**
     * Method to convert the object to a JSON string.
     *
     * @returns { Any } The JSON any representation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    toJSON(): Any;
}

/**
 * Represent JSON class
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class JSON {
    /**
     * Converts byte to JSON format
     *
     * @param { byte } d - byte to be converted to a JSON as a Number
     * @returns { string } JSON representation of byte
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: byte): string;

    /**
     * Converts char to JSON format
     *
     * @param { char } d - char to be converted to a JSON as a string
     * @returns { string } JSON representation of char
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: char): string;

    /**
     * Converts short to JSON format
     *
     * @param { short } d - short to be converted to a JSON as a Number
     * @returns { string } JSON representation of short
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: short): string;

    /**
     * Converts int to JSON format
     *
     * @param { int } d - int to be converted to a JSON as a Number
     *     <br>The value should be an integer.
     * @returns { string } JSON representation of int
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: int): string;

    /**
     * Converts long to JSON format
     *
     * @param { long } d - long to be converted to a JSON as a Number
     * @returns { string } JSON representation of long
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: long): string;

    /**
     * Converts float to JSON format
     *
     * @param { float } d - float to be converted to a JSON as a Number
     * @returns { string } JSON representation of float
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: float): string;

    /**
     * Converts double to JSON format
     *
     * @param { double } d - double to be converted to a JSON as a Number
     * @returns { string } JSON representation of double
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: double): string;

    /**
     * Converts bigint to JSON format
     *
     * @param { bigint } d - bigint to be converted to a JSON as a Number
     * @returns { string } JSON representation of bigint
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: bigint): string;

    /**
     * Converts boolean to JSON format
     *
     * @param { boolean } d - boolean to be converted to a JSON as a Boolean literal
     * @returns { string } JSON representation of boolean
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: boolean): string;

    /**
     * Converts string to JSON format
     *
     * @param { string } d - string to be converted to a JSON as a string
     * @returns { string } JSON representation of string
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: string): string;

    /**
     * Converts bytes array to JSON format
     *
     * @param { FixedArray<byte> } d - bytes array to be converted to a JSON as an Array of Numbers
     * @returns { string } JSON representation of bytes array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: FixedArray<byte>): string;

    /**
     * Converts chars array to JSON format
     *
     * @param { FixedArray<char> } d - chars array to be converted to a JSON as an Array of Strings
     * @returns { string } JSON representation of chars array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: FixedArray<char>): string;

    /**
     * Converts shorts array to JSON format
     *
     * @param { FixedArray<short> } d - shorts array to be converted to a JSON as an Array of Numbers
     * @returns { string } JSON representation of shorts array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: FixedArray<short>): string;

    /**
     * Converts ints array to JSON format
     *
     * @param { FixedArray<int> } d - ints array to be converted to a JSON as an Array of Numbers
     * @returns { string } JSON representation of ints array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: FixedArray<int>): string;

    /**
     * Converts longs array to JSON format
     *
     * @param { FixedArray<long> } d - longs array to be converted to a JSON as an Array of Numbers
     * @returns { string } JSON representation of longs array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: FixedArray<long>): string;

    /**
     * Converts array of floats to JSON format
     *
     * @param { FixedArray<float> } d - array of float to be converted to a JSON as an Array of Numbers
     * @returns { string } JSON representation of array of floats
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: FixedArray<float>): string;

    /**
     * Converts doubles array to JSON format
     *
     * @param { FixedArray<double> } d - doubles array to be converted to a JSON as an Array of Numbers
     * @returns { string } JSON representation of doubles array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: FixedArray<double>): string;

    /**
     * Converts booleans array to JSON format
     *
     * @param { FixedArray<boolean> } d - booleans array to be converted to a JSON as an Array of Boolean literals
     * @returns { string } JSON representation of booleans array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: FixedArray<boolean>): string;

    /**
     * Converts Array of Double to JSON format
     *
     * @param { Array<Double> } d - Array of Double to be converted
     * @returns { string } JSON representation of Array
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: Array<Double>): string;

    /**
     * Converts ArrayLike of Double to JSON format
     *
     * @param { ArrayLike<Double> } d - ArrayLike of Double to be converted
     * @returns { string } JSON representation of ArrayLike
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: ArrayLike<Double>): string;

    /**
     * Converts JsonReplacer to JSON format
     *
     * @param { JsonReplacer } obj - JsonReplacer object to be converted
     * @returns { string } JSON representation
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(obj: JsonReplacer): string;

    /**
     * Converts an object to a JavaScript Object Notation (JSON) string.
     *
     * @param { Any } obj - An object to be converted
     * @returns { string } JSON representation of Object
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(obj: Any): string;

    /**
     * Converts an object to a JavaScript Object Notation (JSON) string.
     *
     * @param { Any } obj - An object to be converted.
     * @param { function } replacer - A that transforms the results.
     * @param { string | int } [space] - If space is a string, the string is used as the indentation character for
     *     each level.If space is an integer, the specified number of spaces (up to a maximum of 10) is used for
     *     indentation.If not provided, no formatting is applied.
     * @returns { string } JSON representation of Object
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(obj: Any, replacer: ((key: string, value: Any) => Any) | undefined | null, space?: string | int): string;

    /**
     * Converts an object to a JavaScript Object Notation (JSON) string.
     *
     * @param { Any } obj - An object to be converted.
     * @param { FixedArray<double | string> } replacer - An array of property names to include.
     * @param { int | string } [space] - If space is a string, the string is used as the indentation character for
     *     each level.If space is an integer, the specified number of spaces (up to a maximum of 10) is used for
     *     indentation.If not provided, no formatting is applied.
     * @returns { string } JSON representation of Object
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(obj: Any, replacer: FixedArray<double | string>, space?: int | string): string;

    /**
     * Converts an object to a JavaScript Object Notation (JSON) string.
     *
     * @param { Any } obj - An object to be converted.
     * @param { Array<double | string> } replacer - An array of property names to include. [since 24 - 24].
     * @param { Array<double | string> | Array<string> | Array<double> } replacer - An array of property 
     *     names to include. [since 26.0.0].
     * @param { int | string } [space] - A string or number for indentation.
     * @returns { string } JSON representation of Object
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    stringify(obj: Any, replacer: Array<double | string> | Array<string> | Array<double>,
      space?: int | string): string;

    /**
     * Parses a JSON string to the specified Type
     *
     * @param { string } text - JSON string to parse
     * @param { Type } type - Target type for parsing
     * @returns { T | null | undefined } Parsed object
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
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
     * @stagemodelonly
     * @since 24 staticonly
     */
    parse<T>(text: string, reviver: ((key: string, value: Any) => Any) | undefined, type: Type,
        options?: jsonx.ParseOptions): T | null | undefined;

    /**
     * Parses a JSON string to the specified Class
     *
     * @param { string } json - JSON string to parse
     * @param { Class } type - Target class for parsing
     * @returns { T | null | undefined } Parsed object
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
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
     * @stagemodelonly
     * @since 24 staticonly
     */
    parse<T>(json: string, reviver: ((key: string, value: Any) => Any) | undefined, type: Class,
        options?: jsonx.ParseOptions): T | null | undefined;

    /**
     * Parses a JSON string and returns a JsonElement.
     *
     * @param { string } text - The JSON string to parse
     * @param { jsonx.ParseOptions } [options] - BigInt parsing options
     * @returns { jsonx.JsonElement } The parsed JSON element
     * @throws { JsonParseError } the JSON string is invalid.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
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
     * @throws { JsonParseError } the JSON string is invalid.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    parseJsonElement(text: string, reviver: (key: string, value: jsonx.JsonElement) => jsonx.JsonElement,
        options?: jsonx.ParseOptions): jsonx.JsonElement;

    /**
     * Converts an object to a JavaScript Object Notation (JSON) string,
     * invoking any instance methods annotated with @JSONStringifyGetter and
     * including their return values in the output. Each annotated method's name
     * is used as the JSON key, and its return value is used as the corresponding value.
     *
     * @param { Any } obj: - An object to be converted.
     * @returns { string } - JSON representation of Object, including annotated getter values
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    stringifyWithGetters(obj: Any): string;

    /**
     * Converts an object to a JavaScript Object Notation (JSON) string,
     * invoking any instance methods annotated with @JSONStringifyGetter and
     * including their return values in the output. Each annotated method's name
     * is used as the JSON key, and its return value is used as the corresponding value.
     *
     * @param { Any } obj: - An object to be converted.
     * @param { function } replacer - A function that transforms the results.
     * @param { int | string } [space] - A string or number that's used to insert white space
     * @returns { string } - JSON representation of Object, including annotated getter values
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
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
     * @param { Any } obj: - An object to be converted.
     * @param { Array<double | string> | Array<string> | Array<double> } replacer - - An array with elements 
     *     indicating names of the properties in the object
     *     that should be included in the resulting JSON string.
     *     Annotated getter methods whose names appear in this array are also included.
     * @param { int | string } [space] - A string or number that's used to insert white space
     * @returns { string } - JSON representation of Object, including annotated getter values
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
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
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    parseUpdate<T>(json: string, instance: T): T;

    /**
     * Parses a JSON string and populates the fields of an existing instance,
     * with an optional reviver and parse options.
     * Unlike parse<T>(json, type), this does NOT require a default constructor.
     * Fields whose keys are absent from the JSON retain their current values
     * on the instance (merge semantics).
     *
     * @param { string } json - JSON string to parse.
     * @param { function } reviver - Optional function to transform each parsed value, or undefined.
     * @param { T } instance - Existing instance whose fields will be populated.
     * @param { jsonx.ParseOptions } [options] - Optional ParseOptions (e.g. bigIntMode). If not specified,
     *     default parsing options are applied.
     * @returns { T } The same instance after population
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    parseUpdate<T>(
        json: string,
        reviver: ((key: string, value: Any) => Any) | undefined,
        instance: T,
        options?: jsonx.ParseOptions
    ): T;

    /**
     * Converts a JsonElementSerializable to a JSON string.
     *
     * @param { jsonx.JsonElementSerializable } elem - The JsonElementDeserializable to stringify
     * @returns { string } The JSON string representation
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static stringifyJsonElement(elem: jsonx.JsonElementSerializable): string;


    /**
     * Converts a JsonElementSerializable to a JSON string with custom formatting.
     *
     * @param { jsonx.JsonElementSerializable } elem - The JsonElementSerializable to stringify
     * @param { (double | string)[] } [replacer] - An array with elements indicating names of the properties to include
     * @param { int | string } [space] - A string or number for white space indentation
     * @returns { string } The JSON string representation
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static stringifyJsonElement(elem: jsonx.JsonElementSerializable, replacer?: (double | string)[],
        space?: int | string): string
   
    /**
     * Converts a JsonElement to a JSON string.
     *
     * @param { jsonx.JsonElement } elem - The JsonElement to stringify
     * @returns { string } The JSON string representation
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static stringifyJsonElement(elem: jsonx.JsonElement): string;
   
    /**
     * Converts a JsonElement to a JSON string with custom formatting.
     *
     * @param { jsonx.JsonElement } elem - The JsonElement to stringify
     * @param { (double | string)[] } [replacer] - An array with elements indicating names of the properties to include
     * @param { int | string } [space] - A string or number for white space indentation
     * @returns { string } The JSON string representation
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static stringifyJsonElement(elem: jsonx.JsonElement, replacer?: (double | string)[],
        space?: int | string): string

    /**
     * Parses a JSON object string and returns a Record.
     *
     * @param { string } text - The JSON string to parse
     * @param { jsonx.ParseOptions } [options] - BigInt parsing options
     * @returns { Record<string, JsonRecordType> } The parsed Record object
     * @throws { JsonParseError } If the JSON string is invalid
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static parseJsonRecord(text: string, options?: jsonx.ParseOptions): Record<string, JsonRecordType>;

    /**
     * Parses a JSON object string and returns an Array.
     *
     * @param { string } text - The JSON string to parse
     * @param { jsonx.ParseOptions } [options] - BigInt parsing options
     * @returns { Array<JsonRecordType> } The parsed Array object
     * @throws { JsonParseError } the JSON string is invalid.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static parseJsonArray(text: string, options?: jsonx.ParseOptions): Array<JsonRecordType>;
}
