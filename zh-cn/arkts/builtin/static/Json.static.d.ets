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
 * 表示可序列化为JSON或从JSON解析得到的所有类型。
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
 * 用于自定义JSON序列化的接口。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface JsonReplacer {
    /**
     * 自定义JSON序列化的方法。
     *
     * @returns { Record<string, Any> } 表示序列化结果对象的Record。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    jsonReplacer(): Record<string, Any>;
}

/**
 * 用于为JSON属性指定新名称的注解接口。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export @interface JSONRename {
    /**
     * 该JSON属性使用的新名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    newName: string;
}

/**
 * 用于在JSON序列化时忽略某个属性的注解接口。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export @interface JSONStringifyIgnore {
}

/**
 * 用于在JSON解析时忽略某个属性的注解接口。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export @interface JSONParseIgnore {
}

/**
 * 用于在JSON序列化时包含某个getter方法的注解接口。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export @interface JSONStringifyGetter {
}

/**
 * JSON解析失败时抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class JsonParseError extends SyntaxError {
    /**
     * 用于创建JsonParseError的构造函数。
     *
     * @param { string } [message] - 错误信息。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(message?: string, options?: ErrorOptions);

    /**
     * 创建带位置信息的JsonParseError。
     *
     * @param { string } msg - 错误信息。
     * @param { int } [start_offset] - 在源字符串中的起始偏移量。
     *     <br>取值约束：应为整数。
     * @param { int } [end_offset] - 在源字符串中的结束偏移量。
     *     <br>取值约束：应为整数。
     * @returns { JsonParseError } 创建得到的JsonParseError。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(msg: string, start_offset?: int, end_offset?: int): JsonParseError;
}

/**
 * 可转换为JSON的对象所实现的接口。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface JsonSerializable {
    /**
     * 将对象转换为JSON字符串的方法。
     *
     * @returns { Any } 对应的JSON Any表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    toJSON(): Any;
}

/**
 * 表示JSON类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class JSON {
    /**
     * 将byte值转换为JSON格式。
     *
     * @param { byte } d - 待转换为JSON中Number的byte值。
     * @returns { string } 该byte值的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: byte): string;

    /**
     * 将char值转换为JSON格式。
     *
     * @param { char } d - 待转换为JSON中string的char值。
     * @returns { string } 该char值的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: char): string;

    /**
     * 将short值转换为JSON格式。
     *
     * @param { short } d - 待转换为JSON中Number的short值。
     * @returns { string } 该short值的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: short): string;

    /**
     * 将int值转换为JSON格式。
     *
     * @param { int } d - 待转换为JSON中Number的int值。
     *     <br>取值约束：应为整数。
     * @returns { string } 该int值的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: int): string;

    /**
     * 将long值转换为JSON格式。
     *
     * @param { long } d - 待转换为JSON中Number的long值。
     * @returns { string } 该long值的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: long): string;

    /**
     * 将float值转换为JSON格式。
     *
     * @param { float } d - 待转换为JSON中Number的float值。
     * @returns { string } 该float值的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: float): string;

    /**
     * 将double值转换为JSON格式。
     *
     * @param { double } d - 待转换为JSON中Number的double值。
     * @returns { string } 该double值的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: double): string;

    /**
     * 将bigint值转换为JSON格式。
     *
     * @param { bigint } d - 待转换为JSON中Number的bigint值。
     * @returns { string } 该bigint值的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: bigint): string;

    /**
     * 将boolean值转换为JSON格式。
     *
     * @param { boolean } d - 待转换为JSON中Boolean字面量的boolean值。
     * @returns { string } 该boolean值的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: boolean): string;

    /**
     * 将字符串转换为JSON格式。
     *
     * @param { string } d - 待转换为JSON中string的字符串。
     * @returns { string } 该字符串的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: string): string;

    /**
     * 将byte数组转换为JSON格式。
     *
     * @param { FixedArray<byte> } d - 待转换为JSON中Number数组的byte数组。
     * @returns { string } 该byte数组的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: FixedArray<byte>): string;

    /**
     * 将char数组转换为JSON格式。
     *
     * @param { FixedArray<char> } d - 待转换为JSON中String数组的char数组。
     * @returns { string } 该char数组的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: FixedArray<char>): string;

    /**
     * 将short数组转换为JSON格式。
     *
     * @param { FixedArray<short> } d - 待转换为JSON中Number数组的short数组。
     * @returns { string } 该short数组的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: FixedArray<short>): string;

    /**
     * 将int数组转换为JSON格式。
     *
     * @param { FixedArray<int> } d - 待转换为JSON中Number数组的int数组。
     * @returns { string } 该int数组的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: FixedArray<int>): string;

    /**
     * 将long数组转换为JSON格式。
     *
     * @param { FixedArray<long> } d - 待转换为JSON中Number数组的long数组。
     * @returns { string } 该long数组的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: FixedArray<long>): string;

    /**
     * 将float数组转换为JSON格式。
     *
     * @param { FixedArray<float> } d - 待转换为JSON中Number数组的float数组。
     * @returns { string } 该float数组的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: FixedArray<float>): string;

    /**
     * 将double数组转换为JSON格式。
     *
     * @param { FixedArray<double> } d - 待转换为JSON中Number数组的double数组。
     * @returns { string } 该double数组的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: FixedArray<double>): string;

    /**
     * 将boolean数组转换为JSON格式。
     *
     * @param { FixedArray<boolean> } d - 待转换为JSON中Boolean字面量数组的boolean数组。
     * @returns { string } 该boolean数组的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: FixedArray<boolean>): string;

    /**
     * 将Double数组转换为JSON格式。
     *
     * @param { Array<Double> } d - 待转换的Double数组。
     * @returns { string } 该数组的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: Array<Double>): string;

    /**
     * 将Double ArrayLike对象转换为JSON格式。
     *
     * @param { ArrayLike<Double> } d - 待转换的Double ArrayLike对象。
     * @returns { string } 该ArrayLike对象的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(d: ArrayLike<Double>): string;

    /**
     * 将JsonReplacer转换为JSON格式。
     *
     * @param { JsonReplacer } obj - 待转换的JsonReplacer对象。
     * @returns { string } 对应的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(obj: JsonReplacer): string;

    /**
     * 将对象转换为JavaScript对象表示法（JSON）字符串。
     *
     * @param { Any } obj - 待转换的对象。
     * @returns { string } 该对象的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(obj: Any): string;

    /**
     * 将对象转换为JavaScript对象表示法（JSON）字符串。
     *
     * @param { Any } obj - 待转换的对象。
     * @param { function } replacer - 用于转换结果的函数。
     * @param { string | int } [space] - 如果space为字符串，则将该字符串用作每一级的缩进字符；
     *     如果space为整数，则使用指定数量（最多10个）的空格进行
     *     缩进；如果不传入该参数，则不做格式化。
     * @returns { string } 该对象的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(obj: Any, replacer: ((key: string, value: Any) => Any) | undefined | null, space?: string | int): string;

    /**
     * 将对象转换为JavaScript对象表示法（JSON）字符串。
     *
     * @param { Any } obj - 待转换的对象。
     * @param { FixedArray<double | string> } replacer - 待包含的属性名称数组。
     * @param { int | string } [space] - 如果space为字符串，则将该字符串用作每一级的缩进字符；
     *     如果space为整数，则使用指定数量（最多10个）的空格进行
     *     缩进；如果不传入该参数，则不做格式化。
     * @returns { string } 该对象的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    stringify(obj: Any, replacer: FixedArray<double | string>, space?: int | string): string;

    /**
     * 将对象转换为JavaScript对象表示法（JSON）字符串。
     *
     * @param { Any } obj - 待转换的对象。
     * @param { Array<double | string> } replacer - 待包含的属性名称数组。[since 24 - 24]。
     * @param { Array<double | string> | Array<string> | Array<double> } replacer - 待包含的属性
     *     名称数组。[since 26.0.0]。
     * @param { int | string } [space] - 用于缩进的字符串或number值。
     * @returns { string } 该对象的JSON表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    stringify(obj: Any, replacer: Array<double | string> | Array<string> | Array<double>,
      space?: int | string): string;

    /**
     * 将JSON字符串解析为指定的类型。
     *
     * @param { string } text - 待解析的JSON字符串。
     * @param { Type } type - 解析的目标类型。
     * @returns { T | null | undefined } 解析得到的对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    parse<T>(text: string, type: Type): T | null | undefined;

    /**
     * 使用reviver函数将JSON字符串解析为指定的类型。
     *
     * @param { string } text - 待解析的JSON字符串。
     * @param { function } reviver - 用于转换值的函数。
     * @param { Type } type - 解析的目标类型。
     * @param { jsonx.ParseOptions } [options] - 解析选项。
     * @returns { T | null | undefined } 解析得到的对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    parse<T>(text: string, reviver: ((key: string, value: Any) => Any) | undefined, type: Type,
        options?: jsonx.ParseOptions): T | null | undefined;

    /**
     * 将JSON字符串解析为指定的类。
     *
     * @param { string } json - 待解析的JSON字符串。
     * @param { Class } type - 解析的目标类。
     * @returns { T | null | undefined } 解析得到的对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    parse<T>(json: string, type: Class): T | null | undefined;

    /**
     * 使用reviver函数将JSON字符串解析为指定的类。
     *
     * @param { string } json - 待解析的JSON字符串。
     * @param { function } reviver - 用于转换值的函数。
     * @param { Class } type - 解析的目标类。
     * @param { jsonx.ParseOptions } [options] - 解析选项。
     * @returns { T | null | undefined } 解析得到的对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    parse<T>(json: string, reviver: ((key: string, value: Any) => Any) | undefined, type: Class,
        options?: jsonx.ParseOptions): T | null | undefined;

    /**
     * 解析JSON字符串并返回JsonElement。
     *
     * @param { string } text - 待解析的JSON字符串。
     * @param { jsonx.ParseOptions } [options] - BigInt解析选项。
     * @returns { jsonx.JsonElement } 解析得到的JSON元素。
     * @throws { JsonParseError } 当JSON字符串非法时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    parseJsonElement(text: string, options?: jsonx.ParseOptions): jsonx.JsonElement;

    /**
     * 使用reviver函数解析JSON字符串并返回JsonElement。
     *
     * @param { string } text - 待解析的JSON字符串。
     * @param { function } reviver - 用于转换值的函数。
     * @param { jsonx.ParseOptions } [options] - BigInt解析选项。
     * @returns { jsonx.JsonElement } 解析得到的JSON元素。
     * @throws { JsonParseError } 当JSON字符串非法时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    parseJsonElement(text: string, reviver: (key: string, value: jsonx.JsonElement) => jsonx.JsonElement,
        options?: jsonx.ParseOptions): jsonx.JsonElement;

    /**
     * 将对象转换为JavaScript对象表示法（JSON）字符串，
     * 过程中会调用所有带@JSONStringifyGetter注解的实例方法，
     * 并将其返回值写入输出。每个带注解方法的名称
     * 作为JSON的键，其返回值作为对应的值。
     *
     * @param { Any } obj: - 待转换的对象。
     * @returns { string } - 该对象的JSON表示，其中包含带注解getter方法的返回值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    stringifyWithGetters(obj: Any): string;

    /**
     * 将对象转换为JavaScript对象表示法（JSON）字符串，
     * 过程中会调用所有带@JSONStringifyGetter注解的实例方法，
     * 并将其返回值写入输出。每个带注解方法的名称
     * 作为JSON的键，其返回值作为对应的值。
     *
     * @param { Any } obj: - 待转换的对象。
     * @param { function } replacer - 用于转换结果的函数。
     * @param { int | string } [space] - 用于插入空白的字符串或number值。
     * @returns { string } - 该对象的JSON表示，其中包含带注解getter方法的返回值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    stringifyWithGetters(
      obj: Any,
      replacer: ((key: string, value: Any) => Any) | undefined | null,
      space?: int | string): string;

    /**
     * 将对象转换为JavaScript对象表示法（JSON）字符串，
     * 过程中会调用所有带@JSONStringifyGetter注解的实例方法，
     * 并将其返回值写入输出。每个带注解方法的名称
     * 作为JSON的键，其返回值作为对应的值。
     *
     * @param { Any } obj: - 待转换的对象。
     * @param { Array<double | string> | Array<string> | Array<double> } replacer - 包含若干元素的数组，这些元素
     *     指明对象中需要包含在最终JSON
     *     字符串里的属性名。
     *     名称出现在该数组中的带注解getter方法也会被包含。
     * @param { int | string } [space] - 用于插入空白的字符串或number值。
     * @returns { string } - 该对象的JSON表示，其中包含带注解getter方法的返回值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    stringifyWithGetters(
      obj: Any,
      replacer: Array<double | string> | Array<string> | Array<double>,
      space?: int | string): string;

    /**
     * 解析JSON字符串，并填充已有实例的字段。
     * 与parse<T>(json, type)不同，该方法不要求类型具有默认构造函数。
     * JSON中不存在对应键的字段将保留实例上的当前值
     * （合并语义）。
     *
     * @param { string } json - 待解析的JSON字符串。
     * @param { T } instance - 字段将被填充的已有实例。
     * @returns { T } 填充字段后的同一实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    parseUpdate<T>(json: string, instance: T): T;

    /**
     * 解析JSON字符串并填充已有实例的字段，
     * 可选传入reviver函数和解析选项。
     * 与parse<T>(json, type)不同，该方法不要求类型具有默认构造函数。
     * JSON中不存在对应键的字段将保留实例上的当前值
     * （合并语义）。
     *
     * @param { string } json - 待解析的JSON字符串。
     * @param { function } reviver - 用于转换每个解析值的可选函数，也可传入undefined。
     * @param { T } instance - 字段将被填充的已有实例。
     * @param { jsonx.ParseOptions } [options] - 可选的ParseOptions（例如bigIntMode）。如果不传入，
     *     则采用默认的解析选项。
     * @returns { T } 填充字段后的同一实例。
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
     * 将JsonElementSerializable转换为JSON字符串。
     *
     * @param { jsonx.JsonElementSerializable } elem - 待序列化为字符串的JsonElementDeserializable。
     * @returns { string } 对应的JSON字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static stringifyJsonElement(elem: jsonx.JsonElementSerializable): string;


    /**
     * 使用自定义格式将JsonElementSerializable转换为JSON字符串。
     *
     * @param { jsonx.JsonElementSerializable } elem - 待序列化为字符串的JsonElementSerializable。
     * @param { (double | string)[] } [replacer] - 包含若干元素的数组，用于指明需要包含的属性名。
     * @param { int | string } [space] - 用于空白缩进的字符串或number值。
     * @returns { string } 对应的JSON字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static stringifyJsonElement(elem: jsonx.JsonElementSerializable, replacer?: (double | string)[],
        space?: int | string): string
   
    /**
     * 将JsonElement转换为JSON字符串。
     *
     * @param { jsonx.JsonElement } elem - 待序列化为字符串的JsonElement。
     * @returns { string } 对应的JSON字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static stringifyJsonElement(elem: jsonx.JsonElement): string;
   
    /**
     * 使用自定义格式将JsonElement转换为JSON字符串。
     *
     * @param { jsonx.JsonElement } elem - 待序列化为字符串的JsonElement。
     * @param { (double | string)[] } [replacer] - 包含若干元素的数组，用于指明需要包含的属性名。
     * @param { int | string } [space] - 用于空白缩进的字符串或number值。
     * @returns { string } 对应的JSON字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static stringifyJsonElement(elem: jsonx.JsonElement, replacer?: (double | string)[],
        space?: int | string): string

    /**
     * 解析JSON对象字符串并返回Record。
     *
     * @param { string } text - 待解析的JSON字符串。
     * @param { jsonx.ParseOptions } [options] - BigInt解析选项。
     * @returns { Record<string, JsonRecordType> } 解析得到的Record对象。
     * @throws { JsonParseError } 当JSON字符串非法时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static parseJsonRecord(text: string, options?: jsonx.ParseOptions): Record<string, JsonRecordType>;

    /**
     * 解析JSON对象字符串并返回Array。
     *
     * @param { string } text - 待解析的JSON字符串。
     * @param { jsonx.ParseOptions } [options] - BigInt解析选项。
     * @returns { Array<JsonRecordType> } 解析得到的Array对象。
     * @throws { JsonParseError } 当JSON字符串非法时，抛出该异常。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static parseJsonArray(text: string, options?: jsonx.ParseOptions): Array<JsonRecordType>;
}
