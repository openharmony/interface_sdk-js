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
 * jsonx命名空间。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export namespace jsonx {
  /**
   * BigIntMode枚举。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  export enum BigIntMode {  
    /**
     * 默认解析模式。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    DEFAULT = 0,
    /**
     * 将bigint解析为BigInt类型。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    PARSE_AS_BIGINT = 1,
    /**
     * 始终解析为BigInt类型。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    ALWAYS_PARSE_AS_BIGINT = 2
  }

  /**
   * JSON.parse的ParseOptions，用于传入BigIntMode。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  export interface ParseOptions {  
    /**
     * BigInt解析模式。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    bigIntMode: BigIntMode;
  }

  /**
   * JSON值可能类型的枚举。
   * 用于在运行时识别JsonElement的类型。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  export enum JsonType {  
    /**
     * 无值，与Null不同。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    JsonUndefined = 0,
    /**
     * JSON对象。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    JsonObject = 1,
    /**
     * JSON数组。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    JsonArray = 2,
    /**
     * JSON字符串。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    JsonString = 3,
    /**
     * JSON数值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    JsonNumber = 4,
    /**
     * JSON值true。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    JsonTrue = 5,
    /**
     * JSON值false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    JsonFalse = 6,
    /**
     * JSON值null。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    JsonNull = 7
  }

  /**
   * JSON相关错误的基础错误类。
   * 在发生一般性JSON解析或操作错误时抛出。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  export class JsonError extends Error {  
    /**
     * 使用指定的错误信息构造新的JsonError。
     *
     * @param { string } msg - 错误信息。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(msg: string);
  }

  /**
   * 以不兼容的类型访问JSON元素时抛出的错误。
   * 例如，尝试从number类型的元素中获取字符串值。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  export class JsonTypeError extends JsonError {  
    /**
     * 使用指定的错误信息构造新的JsonTypeError。
     *
     * @param { string } msg - 错误信息。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(msg: string);
  }

  /**
   * 表示JSON元素的核心类，可保存任意合法的JSON值。
   * 同时提供严格与宽松两套API，以类型安全的方式访问JSON值。
   * 该类保持一个不变式：同一时刻只能设置一种类型的值。
   * 尝试设置多个值将导致JsonTypeError。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  export class JsonElement {  
    /**
     * 获取该JSON元素的类型。
     *
     * @returns { JsonType } 当前JSON值的类型。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get jsonType(): JsonType;

    /**
     * 获取与该JSON元素关联的键。
     *
     * @returns { string } 该元素的键。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get jsonKey(): string;

    /**
     * 按索引从数组中获取JSON元素。
     *
     * @param { int } index - 待查找的索引。
     *     <br>取值约束：应为整数。
     * @returns { JsonElement } 该索引关联的JSON元素。
     * @throws { JsonTypeError } 当该元素不是数组时，抛出该异常。
     * @throws { RangeError } 当索引超出范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    $_get(index: int): JsonElement;

    /**
     * 默认的无参构造函数。
     * 创建值为undefined的JSON元素。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();

    /**
     * 拷贝构造函数（深拷贝）。
     * 通过复制另一个JSON元素的值创建新的JSON元素。
     *
     * @param { JsonElement } other - 复制的源JSON元素。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(other: JsonElement);

    /**
     * 根据键值结构创建新的JSON元素。
     *
     * @param { Record<string, JsonElement> } elements - 用于创建的键值结构。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(elements: Record<string, JsonElement>);

    /**
     * 创建包含字符串值的新JSON元素。
     *
     * @param { string } value - 待存储的字符串值。
     * @returns { JsonElement } 包含该字符串值的新JsonElement。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createString(value: string): JsonElement;

    /**
     * 创建包含double值的新JSON元素。
     *
     * @param { double } value - 待存储的double值。
     * @returns { JsonElement } 包含该double值的新JsonElement。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createDouble(value: double): JsonElement;

    /**
     * 创建包含整数值的新JSON元素。
     *
     * @param { int } value - 待存储的整数值。
     *     <br>取值约束：应为整数。
     * @returns { JsonElement } 包含该整数值的新JsonElement。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createInteger(value: int): JsonElement;

    /**
     * 创建包含long值的新JSON元素。
     *
     * @param { long } value - 待存储的long值。
     * @returns { JsonElement } 包含该long值的新JsonElement。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createLong(value: long): JsonElement;

    /**
     * 创建包含bigint值的新JSON元素。
     *
     * @param { bigint } value - 待存储的bigint值。
     * @returns { JsonElement } 包含该bigint值的新JsonElement。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createBigInt(value: bigint): JsonElement;

    /**
     * 创建包含boolean值的新JSON元素。
     *
     * @param { boolean } value - 待存储的boolean值。
     * @returns { JsonElement } 包含该boolean值的新JsonElement。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createBoolean(value: boolean): JsonElement;

    /**
     * 创建包含null值的新JSON元素。
     *
     * @returns { JsonElement } 包含null的新JsonElement。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createNull(): JsonElement;

    /**
     * 创建包含undefined值的新JSON元素。
     *
     * @returns { JsonElement } 包含undefined的新JsonElement。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createUndefined(): JsonElement;

    /**
     * 创建包含JSON元素数组的新JSON元素。
     *
     * @param { Array<JsonElement> } elements - 待存储的JSON元素数组。
     * @returns { JsonElement } 包含该数组的新JsonElement。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createArray(elements: Array<JsonElement>): JsonElement;

    /**
     * 创建包含键值对对象的新JSON元素。
     *
     * @param { Map<string, JsonElement> } map - 待存储的键值对映射。
     * @returns { JsonElement } 包含该对象的新JsonElement。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static createObject(map: Map<string, JsonElement>): JsonElement;

    /**
     * 按键从对象中获取JSON元素。
     *
     * @param { string } key - 待查找的键。
     * @returns { JsonElement } 该键关联的JSON元素。
     * @throws { JsonTypeError } 当该元素不是对象时，抛出该异常。
     * @throws { RangeError } 当对象中未找到该键时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    $_get(key: string): JsonElement;

    /**
     * 按键从对象中获取JSON元素。
     *
     * @param { string } key - 待查找的键。
     * @returns { JsonElement } 该键关联的JSON元素。
     * @throws { JsonTypeError } 当该元素不是对象时，抛出该异常。
     * @throws { RangeError } 当对象中未找到该键时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getElement(key: string): JsonElement;

    /**
     * 尝试按键从对象中获取JSON元素。
     * 如果未找到该键，或该元素不是对象，则返回undefined。
     *
     * @param { string } key - 待查找的键。
     * @returns { JsonElement | undefined } 找到时返回对应的JSON元素，否则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetElement(key: string): JsonElement | undefined;

    /**
     * 当jsonType为JsonType.JsonObject时，遍历对象属性的迭代器。
     * 类型错误时抛出`JsonTypeError`。
     *
     * @returns { IterableIterator<[string, JsonElement]> } 遍历对象属性的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    $_iterator(): IterableIterator<[string, JsonElement]>;

    /**
     * 按键从对象中获取JSON元素，并确保其为数组。
     *
     * @param { string } key - 待查找的键。
     * @returns { Array<JsonElement> } 该键关联的JSON元素。
     * @throws { JsonTypeError } 当该元素不是对象时，抛出该异常。
     * @throws { RangeError } 当对象中未找到该键时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getArray(key: string): Array<JsonElement>;

    /**
     * 尝试按键从对象中获取JSON元素，并确保其为数组。
     * 如果未找到该键，或该值不是数组，则返回空数组。
     *
     * @param { string } key - 待查找的键。
     * @returns { Array<JsonElement> } 找到时返回对应的JSON元素，否则返回空数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetArray(key: string): Array<JsonElement>;

    /**
     * 按键从对象中移除JSON元素。
     *
     * @param { string } key - 待移除的键。
     * @returns { boolean } 如果该元素被移除则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    removeElement(key: string): boolean;

    /**
     * 按键在对象中设置JSON元素。
     *
     * @param { string } key - 待设置的键。
     * @param { JsonElement } value - 待设置的JSON元素。
     * @throws { JsonTypeError } 当该元素不是对象时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setElement(key: string, value: JsonElement): void;

    /**
     * 按键从对象中获取double值，并确保其为double类型。
     *
     * @param { string } key - 待查找的键。
     * @returns { double } double值。
     * @throws { JsonTypeError } 当该值不是double值，或该元素不是对象时，抛出该异常。
     * @throws { RangeError } 当未找到该键时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getDouble(key: string): double;

    /**
     * 尝试按键从对象中获取double值，并确保其为double类型。
     * 如果未找到该键，或该值不是double值，则返回默认值。
     *
     * @param { string } key - 待查找的键。
     * @param { double } [fallback] - 未找到该键时返回的默认值。
     * @returns { double | undefined } 找到时返回对应的double值，否则返回默认值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetDouble(key: string, fallback?: double): double | undefined;

    /**
     * 按键从对象中获取整数值，并确保其为整数。
     *
     * @param { string } key - 待查找的键。
     * @returns { int } 整数值。
     * @throws { JsonTypeError } 当该值不是整数，或该元素不是对象时，抛出该异常。
     * @throws { RangeError } 当未找到该键时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getInteger(key: string): int;

    /**
     * 尝试按键从对象中获取整数值。
     * 如果未找到该键，或该值不是整数，则返回默认值。
     *
     * @param { string } key - 待查找的键。
     * @param { int } [fallback] - 未找到该键时返回的默认值。
     *     <br>取值约束：应为整数。
     * @returns { int } 找到时返回对应的整数值，否则返回默认值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetInteger(key: string, fallback: int = 0): int;

    /**
     * 按键从对象中获取long值，并确保其为long类型。
     *
     * @param { string } key - 待查找的键。
     * @returns { long } long值。
     * @throws { JsonTypeError } 当该值不是long值，或该元素不是对象时，抛出该异常。
     * @throws { RangeError } 当未找到该键时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getLong(key: string): long;

    /**
     * 尝试按键从对象中获取long值。
     * 如果未找到该键，或该值不是long值，则返回默认值。
     *
     * @param { string } key - 待查找的键。
     * @param { long } [fallback] - 未找到该键时返回的默认值。
     * @returns { long } 找到时返回对应的long值，否则返回默认值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetLong(key: string, fallback: long = 0): long;

    /**
     * 按键从对象中获取bigint值，并确保其为bigint类型。
     *
     * @param { string } key - 待查找的键。
     * @returns { bigint } bigint值。
     * @throws { JsonTypeError } 当该值不是bigint值，或该元素不是对象时，抛出该异常。
     * @throws { RangeError } 当未找到该键时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getBigInt(key: string): bigint;

    /**
     * 尝试按键从对象中获取bigint值。
     * 如果未找到该键，或该值不是bigint值，则返回默认值。
     *
     * @param { string } key - 待查找的键。
     * @param { bigint } [fallback] - 未找到该键时返回的默认值。
     * @returns { bigint } 找到时返回对应的bigint值，否则返回默认值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetBigInt(key: string, fallback: bigint = 0n): bigint;

    /**
     * 按键从对象中获取字符串值。
     *
     * @param { string } key - 待查找的键。
     * @returns { string } 字符串值。
     * @throws { JsonTypeError } 当该值不是字符串，或该元素不是对象时，抛出该异常。
     * @throws { RangeError } 当未找到该键时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getString(key: string): string;

    /**
     * 尝试按键从对象中获取字符串值。
     * 如果未找到该键，或该值不是字符串，则返回默认值。
     *
     * @param { string } key - 待查找的键。
     * @param { string } [fallback] - 未找到该键时返回的默认值。
     * @returns { string } 找到时返回对应的字符串值，否则返回默认值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetString(key: string, fallback: string = ""): string;

    /**
     * 按键从对象中获取boolean值。
     *
     * @param { string } key - 待查找的键。
     * @returns { boolean } boolean值。
     * @throws { JsonTypeError } 当该值不是boolean值，或该元素不是对象时，抛出该异常。
     * @throws { RangeError } 当未找到该键时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getBoolean(key: string): boolean;

    /**
     * 尝试按键从对象中获取boolean值。
     * 如果未找到该键，或该值不是boolean值，则返回默认值。
     *
     * @param { string } key - 待查找的键。
     * @param { boolean } [fallback] - 未找到该键时返回的默认值。
     * @returns { boolean } 找到时返回对应的boolean值，否则返回默认值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetBoolean(key: string, fallback: boolean = false): boolean;

    /**
     * 按键从对象中获取null值。
     *
     * @param { string } key - 待查找的键。
     * @returns { null } null值。
     * @throws { JsonTypeError } 当该值不是null，或该元素不是对象时，抛出该异常。
     * @throws { RangeError } 当未找到该键时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    getNull(key: string): null;

    /**
     * 尝试按键从对象中获取null值。
     * 如果未找到该键，或该值不是null，则返回undefined。
     *
     * @param { string } key - 待查找的键。
     * @returns { null | undefined } 找到时返回null值，否则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryGetNull(key: string): null | undefined;

    /**
     * 从该元素中获取double值。
     *
     * @returns { double } double值。
     * @throws { JsonTypeError } 当该值不是double值时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    asDouble(): double;

    /**
     * 尝试从该元素中获取double值。
     * 如果该值不是double值，则返回undefined。
     *
     * @returns { double | undefined } 找到时返回对应的double值，否则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryAsDouble(): double | undefined;

    /**
     * 从该元素中获取整数值。
     *
     * @returns { int } 整数值。
     * @throws { JsonTypeError } 当该值不是整数时，抛出该异常。
     * @throws { RangeError } 当number超出int的取值范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    asInteger(): int;

    /**
     * 尝试从该元素中获取整数值。
     * 如果该值不是整数，则返回undefined。
     *
     * @returns { int | undefined } 找到时返回对应的整数值，否则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryAsInteger(): int | undefined;

    /**
     * 从该元素中获取long值。
     *
     * @returns { long } long值。
     * @throws { JsonTypeError } 当该值不是long值时，抛出该异常。
     * @throws { RangeError } 当number超出long的取值范围时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    asLong(): long;

    /**
     * 尝试从该元素中获取long值。
     * 如果该值不是long值，则返回undefined。
     *
     * @returns { long | undefined } 找到时返回对应的long值，否则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryAsLong(): long | undefined;

    /**
     * 从该元素中获取bigint值。
     *
     * @returns { bigint } bigint值。
     * @throws { JsonTypeError } 当该值不是bigint值时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    asBigInt(): bigint;

    /**
     * 尝试从该元素中获取bigint值。
     * 如果该值不是bigint值，则返回undefined。
     *
     * @returns { bigint | undefined } 找到时返回对应的bigint值，否则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryAsBigInt(): bigint | undefined;

    /**
     * 从该元素中获取字符串值。
     *
     * @returns { string } 字符串值。
     * @throws { JsonTypeError } 当该值不是字符串时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    asString(): string;

    /**
     * 尝试从该元素中获取字符串值。
     * 如果该值不是字符串，则返回undefined。
     *
     * @returns { string | undefined } 找到时返回对应的字符串值，否则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryAsString(): string | undefined;

    /**
     * 从该元素中获取boolean值。
     *
     * @returns { boolean } boolean值。
     * @throws { JsonTypeError } 当该值不是boolean值时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    asBoolean(): boolean;

    /**
     * 尝试从该元素中获取boolean值。
     * 如果该值不是boolean值，则返回undefined。
     *
     * @returns { boolean | undefined } 找到时返回对应的boolean值，否则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryAsBoolean(): boolean | undefined;

    /**
     * 从该元素中获取数组值。
     *
     * @returns { Array<JsonElement> } 数组值。
     * @throws { JsonTypeError } 当该值不是数组时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    asArray(): Array<JsonElement>;

    /**
     * 尝试从该元素中获取数组值。
     * 如果该值不是数组，则返回undefined。
     *
     * @returns { Array<JsonElement> | undefined } 找到时返回对应的数组值，否则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryAsArray(): Array<JsonElement> | undefined;

    /**
     * 从该元素中获取null值。
     *
     * @returns { null } null值。
     * @throws { JsonTypeError } 当该值不是null时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    asNull(): null;

    /**
     * 尝试从该元素中获取null值。
     * 如果该值不是null，则返回undefined。
     *
     * @returns { null | undefined } 找到时返回null值，否则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    tryAsNull(): null | undefined;

    /**
     * 将当前JsonElement设置为double值。
     *
     * @param { double } value - 待设置的double值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setDouble(value: double): void;

    /**
     * 将当前JsonElement设置为整数值。
     *
     * @param { int } value - 待设置的整数值。
     *     <br>取值约束：应为整数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setInteger(value: int): void;

    /**
     * 将当前JsonElement设置为long值。
     *
     * @param { long } value - 待设置的long值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setLong(value: long): void;

    /**
     * 将当前JsonElement设置为字符串值。
     *
     * @param { string } value - 待设置的字符串值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setString(value: string): void;

    /**
     * 将当前JsonElement设置为boolean值。
     *
     * @param { boolean } value - 待设置的boolean值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setBoolean(value: boolean): void;

    /**
     * 将当前JsonElement设置为数组值。
     *
     * @param { Array<JsonElement> } value - 待设置的数组值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setArray(value: Array<JsonElement>): void;

    /**
     * 将当前JsonElement设置为null值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setNull(): void;

    /**
     * 将当前JsonElement设置为bigint值。
     *
     * @param { bigint } value - 待设置的bigint值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setBigInt(value: bigint): void;

    /**
     * 将当前JsonElement设置为undefined值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    setUndefined(): void;
  }

  /**
   * 可从JSON反序列化的类型所实现的接口。
   * 实现该接口的类可以由JsonElement转换得到。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  export interface JsonElementSerializable {  
    /**
     * 将该对象转换为JsonElement。
     *
     * @returns { JsonElement } 对应的JsonElement表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    toJSON(): JsonElement;
  }

  /**
   * 可序列化为JSON的类型所实现的接口。
   * 实现该接口的类可以转换为JsonElement。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  export interface JsonElementDeserializable {  
    /**
     * 将JsonElement反序列化到该对象中。
     *
     * @param { JsonElement } jsonElem - 待反序列化的JsonElement。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    fromJSON(jsonElem: JsonElement): void;
  }
}
