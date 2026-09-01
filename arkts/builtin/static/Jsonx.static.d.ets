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
 * namespace of jsonx.
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export namespace jsonx {
  /**
   * Enumeration of BigIntMode.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  export enum BigIntMode {  
    /**
     * Default parsing mode.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    DEFAULT = 0,
    /**
     * Parse bigint as BigInt type.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    PARSE_AS_BIGINT = 1,
    /**
     * Always parse as BigInt type.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    ALWAYS_PARSE_AS_BIGINT = 2
  }

  /**
   * ParseOptions for JSON.parse to pass BigIntMode.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  export interface ParseOptions {  
    /**
     * BigInt parsing mode.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    bigIntMode: BigIntMode;
  }

  /**
   * Enumeration of possible JSON value types.
   * Used to identify the type of a JsonElement at runtime.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  export enum JsonType {  
    /**
     * No value, distinct from Null.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    JsonUndefined = 0,
    /**
     * A JSON object.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    JsonObject = 1,
    /**
     * A JSON array.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    JsonArray = 2,
    /**
     * A JSON string.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    JsonString = 3,
    /**
     * A JSON number.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    JsonNumber = 4,
    /**
     * A JSON value true.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    JsonTrue = 5,
    /**
     * A JSON value false.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    JsonFalse = 6,
    /**
     * A JSON value null.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    JsonNull = 7
  }

  /**
   * Base error class for JSON-related errors.
   * Thrown when general JSON parsing or manipulation errors occur.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  export class JsonError extends Error {  
    /**
     * Constructs a new JsonError with the specified message.
     *
     * @param { string } msg - Error message.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(msg: string);
  }

  /**
   * Error thrown when attempting to access a JSON element with an incompatible type.
   * For example, trying to get a string value from a number element.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  export class JsonTypeError extends JsonError {  
    /**
     * Constructs a new JsonTypeError with the specified message.
     *
     * @param { string } msg - Error message.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(msg: string);
  }

  /**
   * Core class representing a JSON element that can hold any valid JSON value.
   * Provides type-safe access to JSON values with both strict and lenient APIs.
   * The class maintains an invariant that only one type of value can be set at a time.
   * Attempting to set multiple values will result in a JsonTypeError.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  export class JsonElement {  
    /**
     * Gets the type of the JSON element.
     *
     * @returns { JsonType } The type of the current JSON value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get jsonType(): JsonType;

    /**
     * Gets the key associated with this JSON element.
     *
     * @returns { string } The key of this element.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get jsonKey(): string;

    /**
     * Gets a JSON element from an array by index.
     *
     * @param { int } index - The index to look up.
     *     <br>The value should be an integer.
     * @returns { JsonElement } The JSON element associated with the index.
     * @throws { JsonTypeError } If - this element is not an array.
     * @throws { RangeError } If - the index is out of range.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    $_get(index: int): JsonElement;

    /**
     * Default parameterless constructor.
     * Creates an undefined JSON element.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();

    /**
     * Copy constructor (deep copy).
     * Creates a new JSON element by copying the values from another JSON element.
     *
     * @param { JsonElement } other - The JSON element to copy from.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(other: JsonElement);

    /**
     * Creates a new JSON element from a key-value structure.
     *
     * @param { Record<string, JsonElement> } elements - The key-value structure to create from.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(elements: Record<string, JsonElement>);

    /**
     * Creates a new JSON element containing a string value.
     *
     * @param { string } value - The string value to store.
     * @returns { JsonElement } A new JsonElement containing the string value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createString(value: string): JsonElement;

    /**
     * Creates a new JSON element containing a double value.
     *
     * @param { double } value - The double value to store.
     * @returns { JsonElement } A new JsonElement containing the double value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createDouble(value: double): JsonElement;

    /**
     * Creates a new JSON element containing an integer value.
     *
     * @param { int } value - The integer value to store.
     *     <br>The value should be an integer.
     * @returns { JsonElement } A new JsonElement containing the integer value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createInteger(value: int): JsonElement;

    /**
     * Creates a new JSON element containing a long value.
     *
     * @param { long } value - The long value to store.
     * @returns { JsonElement } A new JsonElement containing the long value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createLong(value: long): JsonElement;

    /**
     * Creates a new JSON element containing a bigint value.
     *
     * @param { bigint } value - The bigint value to store.
     * @returns { JsonElement } A new JsonElement containing the bigint value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createBigInt(value: bigint): JsonElement;

    /**
     * Creates a new JSON element containing a boolean value.
     *
     * @param { boolean } value - The boolean value to store.
     * @returns { JsonElement } A new JsonElement containing the boolean value.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createBoolean(value: boolean): JsonElement;

    /**
     * Creates a new JSON element containing a null value.
     *
     * @returns { JsonElement } A new JsonElement containing null.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createNull(): JsonElement;

    /**
     * Creates a new JSON element containing an undefined value.
     *
     * @returns { JsonElement } A new JsonElement containing undefined.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createUndefined(): JsonElement;

    /**
     * Creates a new JSON element containing an array of JSON elements.
     *
     * @param { Array<JsonElement> } elements - The array of JSON elements to store.
     * @returns { JsonElement } A new JsonElement containing the array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createArray(elements: Array<JsonElement>): JsonElement;

    /**
     * Creates a new JSON element containing an object with key-value pairs.
     *
     * @param { Map<string, JsonElement> } map - The map of key-value pairs to store.
     * @returns { JsonElement } A new JsonElement containing the object.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createObject(map: Map<string, JsonElement>): JsonElement;

    /**
     * Gets a JSON element from an object by key.
     *
     * @param { string } key - The key to look up.
     * @returns { JsonElement } The JSON element associated with the key.
     * @throws { JsonTypeError } If - this element is not an object.
     * @throws { RangeError } If - the key is not found in the object.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    $_get(key: string): JsonElement;

    /**
     * Gets a JSON element from an object by key.
     *
     * @param { string } key - The key to look up.
     * @returns { JsonElement } The JSON element associated with the key.
     * @throws { JsonTypeError } If - this element is not an object.
     * @throws { RangeError } If - the key is not found in the object.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getElement(key: string): JsonElement;

    /**
     * Attempts to get a JSON element from an object by key.
     * Returns undefined if the key is not found or if this element is not an object.
     *
     * @param { string } key - The key to look up.
     * @returns { JsonElement | undefined } The JSON element if found, undefined otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetElement(key: string): JsonElement | undefined;

    /**
     * Iterator over object properties if jsonType == JsonType.JsonObject.
     * on type error `JsonTypeError` is raised.
     *
     * @returns { IterableIterator<[string, JsonElement]> } An iterator over the object properties.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    $_iterator(): IterableIterator<[string, JsonElement]>;

    /**
     * Gets a JSON element from an object by key and ensures it is an array.
     *
     * @param { string } key - The key to look up.
     * @returns { Array<JsonElement> } The JSON element associated with the key.
     * @throws { JsonTypeError } If - this element is not an object.
     * @throws { RangeError } If - the key is not found in the object.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getArray(key: string): Array<JsonElement>;

    /**
     * Attempts to get a JSON element from an object by key and ensures it is an array.
     * Returns an empty array if the key is not found or if the value is not an array.
     *
     * @param { string } key - The key to look up.
     * @returns { Array<JsonElement> } The JSON element if found, an empty array otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetArray(key: string): Array<JsonElement>;

    /**
     * Removes a JSON element from an object by key.
     *
     * @param { string } key - The key to remove.
     * @returns { boolean } True if the element was removed, false otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    removeElement(key: string): boolean;

    /**
     * Sets a JSON element in an object by key.
     *
     * @param { string } key - The key to set.
     * @param { JsonElement } value - The JSON element to set.
     * @throws { JsonTypeError } If - this element is not an object.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setElement(key: string, value: JsonElement): void;

    /**
     * Gets a double value from an object by key and ensures it is a double.
     *
     * @param { string } key - The key to look up.
     * @returns { double } The double value.
     * @throws { JsonTypeError } If - the value is not a double or if this element is not an object.
     * @throws { RangeError } If - the key is not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getDouble(key: string): double;

    /**
     * Attempts to get a double value from an object by key and ensures it is a double.
     * Returns the fallback value if the key is not found or if the value is not a double.
     *
     * @param { string } key - The key to look up.
     * @param { double } [fallback] - The fallback value to return if the key is not found.
     * @returns { double | undefined } The double value if found, fallback value otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetDouble(key: string, fallback?: double): double | undefined;

    /**
     * Gets an integer value from an object by key and ensures it is an integer.
     *
     * @param { string } key - The key to look up.
     * @returns { int } The integer value.
     * @throws { JsonTypeError } If - the value is not an integer or if this element is not an object.
     * @throws { RangeError } If - the key is not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getInteger(key: string): int;

    /**
     * Attempts to get an integer value from an object by key.
     * Returns the fallback value if the key is not found or if the value is not an integer.
     *
     * @param { string } key - The key to look up.
     * @param { int } [fallback] - The fallback value to return if the key is not found.
     *     <br>The value should be an integer.
     * @returns { int } The integer value if found, fallback value otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetInteger(key: string, fallback: int = 0): int;

    /**
     * Gets a long value from an object by key and ensures it is a long.
     *
     * @param { string } key - The key to look up.
     * @returns { long } The long value.
     * @throws { JsonTypeError } If - the value is not a long or if this element is not an object.
     * @throws { RangeError } If - the key is not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getLong(key: string): long;

    /**
     * Attempts to get a long value from an object by key.
     * Returns the fallback value if the key is not found or if the value is not a long.
     *
     * @param { string } key - The key to look up.
     * @param { long } [fallback] - The fallback value to return if the key is not found.
     * @returns { long } The long value if found, fallback value otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetLong(key: string, fallback: long = 0): long;

    /**
     * Gets a bigint value from an object by key and ensures it is a bigint.
     *
     * @param { string } key - The key to look up.
     * @returns { bigint } The bigint value.
     * @throws { JsonTypeError } If - the value is not a bigint or if this element is not an object.
     * @throws { RangeError } If - the key is not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getBigInt(key: string): bigint;

    /**
     * Attempts to get a bigint value from an object by key.
     * Returns the fallback value if the key is not found or if the value is not a bigint.
     *
     * @param { string } key - The key to look up.
     * @param { bigint } [fallback] - The fallback value to return if the key is not found.
     * @returns { bigint } The bigint value if found, fallback value otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetBigInt(key: string, fallback: bigint = 0n): bigint;

    /**
     * Gets a string value from an object by key.
     *
     * @param { string } key - The key to look up.
     * @returns { string } The string value.
     * @throws { JsonTypeError } If - the value is not a string or if this element is not an object.
     * @throws { RangeError } If - the key is not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getString(key: string): string;

    /**
     * Attempts to get a string value from an object by key.
     * Returns the fallback value if the key is not found or if the value is not a string.
     *
     * @param { string } key - The key to look up.
     * @param { string } [fallback] - The fallback value to return if the key is not found.
     * @returns { string } The string value if found, fallback value otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetString(key: string, fallback: string = ""): string;

    /**
     * Gets a boolean value from an object by key.
     *
     * @param { string } key - The key to look up.
     * @returns { boolean } The boolean value.
     * @throws { JsonTypeError } If - the value is not a boolean or if this element is not an object.
     * @throws { RangeError } If - the key is not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getBoolean(key: string): boolean;

    /**
     * Attempts to get a boolean value from an object by key.
     * Returns the fallback value if the key is not found or if the value is not a boolean.
     *
     * @param { string } key - The key to look up.
     * @param { boolean } [fallback] - The fallback value to return if the key is not found.
     * @returns { boolean } The boolean value if found, fallback value otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetBoolean(key: string, fallback: boolean = false): boolean;

    /**
     * Gets a null value from an object by key.
     *
     * @param { string } key - The key to look up.
     * @returns { null } The null value.
     * @throws { JsonTypeError } If - the value is not null or if this element is not an object.
     * @throws { RangeError } If - the key is not found.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getNull(key: string): null;

    /**
     * Attempts to get a null value from an object by key.
     * Returns undefined if the key is not found or if the value is not null.
     *
     * @param { string } key - The key to look up.
     * @returns { null | undefined } The null value if found, undefined otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetNull(key: string): null | undefined;

    /**
     * Gets a double value from the element.
     *
     * @returns { double } The double value.
     * @throws { JsonTypeError } If - the value is not a double.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    asDouble(): double;

    /**
     * Attempts to get a double value from the element.
     * Returns undefined if the value is not a double.
     *
     * @returns { double | undefined } The double value if found, undefined otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryAsDouble(): double | undefined;

    /**
     * Gets an integer value from the element.
     *
     * @returns { int } The integer value.
     * @throws { JsonTypeError } If - the value is not an integer.
     * @throws { RangeError } The - number is out of the range of int.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    asInteger(): int;

    /**
     * Attempts to get an integer value from the element.
     * Returns undefined if the value is not an integer.
     *
     * @returns { int | undefined } The integer value if found, undefined otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryAsInteger(): int | undefined;

    /**
     * Gets a long value from the element.
     *
     * @returns { long } The long value.
     * @throws { JsonTypeError } If - the value is not a long.
     * @throws { RangeError } If - the number is out of the range of long.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    asLong(): long;

    /**
     * Attempts to get a long value from the element.
     * Returns undefined if the value is not a long.
     *
     * @returns { long | undefined } The long value if found, undefined otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryAsLong(): long | undefined;

    /**
     * Gets a bigint value from the element.
     *
     * @returns { bigint } The bigint value.
     * @throws { JsonTypeError } If - the value is not a bigint.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    asBigInt(): bigint;

    /**
     * Attempts to get a bigint value from the element.
     * Returns undefined if the value is not a bigint.
     *
     * @returns { bigint | undefined } The bigint value if found, undefined otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryAsBigInt(): bigint | undefined;

    /**
     * Gets a string value from the element.
     *
     * @returns { string } The string value.
     * @throws { JsonTypeError } If - the value is not a string.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    asString(): string;

    /**
     * Attempts to get a string value from the element.
     * Returns undefined if the value is not a string.
     *
     * @returns { string | undefined } The string value if found, undefined otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryAsString(): string | undefined;

    /**
     * Gets a boolean value from the element.
     *
     * @returns { boolean } The boolean value.
     * @throws { JsonTypeError } If - the value is not a boolean.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    asBoolean(): boolean;

    /**
     * Attempts to get a boolean value from the element.
     * Returns undefined if the value is not a boolean.
     *
     * @returns { boolean | undefined } The boolean value if found, undefined otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryAsBoolean(): boolean | undefined;

    /**
     * Gets an array value from the element.
     *
     * @returns { Array<JsonElement> } The array value.
     * @throws { JsonTypeError } If - the value is not an array.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    asArray(): Array<JsonElement>;

    /**
     * Attempts to get an array value from the element.
     * Returns undefined if the value is not an array.
     *
     * @returns { Array<JsonElement> | undefined } The array value if found, undefined otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryAsArray(): Array<JsonElement> | undefined;

    /**
     * Gets a null value from the element.
     *
     * @returns { null } The null value.
     * @throws { JsonTypeError } If - the value is not null.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    asNull(): null;

    /**
     * Attempts to get a null value from the element.
     * Returns undefined if the value is not null.
     *
     * @returns { null | undefined } The null value if found, undefined otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryAsNull(): null | undefined;

    /**
     * Sets the current JsonElement to a double value.
     *
     * @param { double } value - The double value to set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setDouble(value: double): void;

    /**
     * Sets the current JsonElement to an integer value.
     *
     * @param { int } value - The integer value to set.
     *     <br>The value should be an integer.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setInteger(value: int): void;

    /**
     * Sets the current JsonElement to a long value.
     *
     * @param { long } value - The long value to set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setLong(value: long): void;

    /**
     * Sets the current JsonElement to a string value.
     *
     * @param { string } value - The string value to set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setString(value: string): void;

    /**
     * Sets the current JsonElement to a boolean value.
     *
     * @param { boolean } value - The boolean value to set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setBoolean(value: boolean): void;

    /**
     * Sets the current JsonElement to an array value.
     *
     * @param { Array<JsonElement> } value - The array value to set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setArray(value: Array<JsonElement>): void;

    /**
     * Sets the current JsonElement to a null value.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setNull(): void;

    /**
     * Sets the current JsonElement to a bigint value.
     *
     * @param { bigint } value - The bigint value to set.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setBigInt(value: bigint): void;

    /**
     * Sets the current JsonElement to an undefined value.
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setUndefined(): void;
  }

  /**
   * Interface for types that can be deserialized from JSON.
   * Classes implementing this interface can be converted from a JsonElement.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  export interface JsonElementSerializable {  
    /**
     * Converts the object to a JsonElement.
     *
     * @returns { JsonElement } The JsonElement representation.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    toJSON(): JsonElement;
  }

  /**
   * Interface for types that can be serialized to JSON.
   * Classes implementing this interface can be converted to a JsonElement.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  export interface JsonElementDeserializable {  
    /**
     * Deserializes a JsonElement into the object.
     *
     * @param { JsonElement } jsonElem - The JsonElement to deserialize.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    fromJSON(jsonElem: JsonElement): void;
  }
}
