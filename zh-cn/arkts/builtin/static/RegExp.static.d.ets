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
 * 正则表达式匹配结果描述符。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class RegExpResultArray extends Array<string | undefined> {
    /**
     * 当传入"0"且首个匹配存在时，返回该匹配结果。
     *
     * @param { string } index - 字符串索引。
     * @returns { string } 以字符串形式返回的首个匹配结果，若不存在则返回null。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_get(index: string): string;

    /**
     * 按索引返回结果字符串。
     *
     * @param { int } index - 整数索引。
     *     <br>取值约束：应为整数。
     * @returns { string | undefined } 结果字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    $_get(index: int): string | undefined;

    /**
     * 创建RegExpResultArray实例。
     *
     * @param { int } index - 匹配结果的起始索引。
     *     <br>取值约束：应为整数。
     * @param { string } input - 参与匹配的原始字符串。
     * @param { Array<string | undefined> } result - 匹配到的字符串数组。
     * @param { Array<Array<int>> } indices - 每个匹配子串的起始与结束索引数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(index: int, input: string, result: Array<string | undefined>, indices: Array<Array<int>>);

    /**
     * 获取匹配结果数组本身。
     *
     * @returns { Array<string | undefined> } 匹配结果数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get result(): Array<string | undefined>;

    /**
     * 执行后的后处理。
     *
     * @param { RegExpResultArray } res - 结果数组。
     * @param { string } input - 输入字符串。
     * @param { int } index - 索引。
     *     <br>取值约束：应为整数。
     * @param { boolean } hasIndices - 是否包含索引信息。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public postExecProcessing(res: RegExpResultArray, input: string, index: int, hasIndices: boolean): void;

    /**
     * 设置指定索引处的匹配结果。
     *
     * @param { int } index - 待设置的索引。
     *     <br>取值约束：应为整数。
     * @param { string | undefined } val - 待设置的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public $_set(index: int, val: string | undefined): void;

    /**
     * 获取包含每个匹配子串起始与结束索引的数组。
     *
     * @returns { Array<Array<int>> } 索引数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get indices(): Array<Array<int>>;

    /**
     * 返回匹配结果的字符串表示。
     *
     * @returns { string } 表示匹配结果的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

}

/**
 * 表示string.prototype.matchAll()返回的匹配结果，
 * 或全局模式下RegExp.prototype.exec()的非迭代结果。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class RegExpMatchArray extends RegExpResultArray {
    /**
     * 创建包含匹配结果的RegExpMatchArray实例。
     *
     * @param { int } index - 匹配结果的起始索引。
     *     <br>取值约束：应为整数。
     * @param { string } input - 参与匹配的原始字符串。
     * @param { Array<string | undefined> } result - 匹配到的字符串数组。
     * @param { Array<Array<int>> } indices - 每个匹配子串的起始与结束索引数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(index: int, input: string, result: Array<string | undefined>, indices: Array<Array<int>>);

    /**
     * 创建包含匹配结果的RegExpMatchArray实例。
     *
     * @param { int } index - 匹配结果的起始索引。
     *     <br>取值约束：应为整数。
     * @param { string } input - 参与匹配的原始字符串。
     * @param { Array<string | undefined> } result - 匹配到的字符串数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(index: int, input: string, result: Array<string | undefined>);

    /**
     * 获取匹配结果的起始索引，无效时返回undefined。
     *
     * @returns { int | undefined } 匹配的起始索引。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get index(): int | undefined;

    /**
     * 获取参与匹配的原始字符串，无效时返回undefined。
     *
     * @returns { string | undefined } 原始字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get input(): string | undefined;

    /**
     * 设置匹配结果的起始索引。
     *
     * @param { int | undefined } val - 待设置的索引值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set index(val: int | undefined);

    /**
     * 设置参与匹配的原始字符串。
     *
     * @param { string | undefined } val - 待设置的字符串值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set input(val: string | undefined);
}

/**
 * 表示exec()的返回结果，其中包含单次匹配的详细信息。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class RegExpExecArray extends RegExpResultArray {
    /**
     * 创建包含匹配结果的RegExpExecArray实例。
     *
     * @param { int } index - 匹配结果的起始索引。
     *     <br>取值约束：应为整数。
     * @param { string } input - 参与匹配的原始字符串。
     * @param { Array<string | undefined> } result - 匹配到的字符串数组。
     * @param { Array<Array<int>> } indices - 每个匹配子串的起始与结束索引数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(index: int, input: string, result: Array<string | undefined>, indices: Array<Array<int>>);

    /**
     * 创建包含匹配结果的RegExpExecArray实例（不含索引信息）。
     *
     * @param { int } index - 匹配结果的起始索引。
     *     <br>取值约束：应为整数。
     * @param { string } input - 参与匹配的原始字符串。
     * @param { Array<string | undefined> } result - 匹配到的字符串数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(index: int, input: string, result: Array<string | undefined>);

    /**
     * 获取匹配结果的起始索引。
     *
     * @returns { int } 匹配的起始索引。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get index(): int;

    /**
     * 获取参与匹配的原始字符串。
     *
     * @returns { string } 原始字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get input(): string;

    /**
     * 设置匹配结果的起始索引。
     *
     * @param { int } val - 待设置的索引值。
     *     <br>取值约束：应为整数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set index(val: int);

    /**
     * 设置参与匹配的原始字符串。
     *
     * @param { string } val - 待设置的字符串值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public set input(val: string);
}

/**
 * 正则表达式。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class RegExp extends Object {
    /**
     * 返回包含该正则表达式源文本的字符串。
     *
     * @returns { string } 正则表达式的源文本。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    get source(): string;

    /**
     * 使用模式和标志位构造新的RegExp。
     *
     * @param { string } pattern - 模式的描述。
     * @param { string } [flags] - 所使用标志位的描述。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(pattern: string, flags?: string);

    /**
     * 根据另一个RegExp构造新的RegExp。未传入标志位时，沿用该RegExp的标志位。
     *
     * @param { RegExp } regexp - 另一个正则表达式。
     * @param { string } [flags] - 所使用标志位的描述。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(regexp: RegExp, flags?: string);

    /**
     * 根据RegExp或字符串构造新的RegExp。
     *
     * @param { RegExp | string } regexp - 正则表达式的模式，或另一个RegExp实例。
     * @param { string } [flags] - 所使用标志位的描述。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(regexp: RegExp | string, flags?: string);

    /**
     * 获取正则表达式的标志位。
     *
     * @returns { string } 包含该正则表达式所用标志位的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get flags(): string;

    /**
     * 获取global标志位，表示是否执行全局匹配。
     *
     * @returns { boolean } 如果启用全局匹配则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get global(): boolean;

    /**
     * 获取dotAll标志位，表示'.'是否匹配换行符。
     *
     * @returns { boolean } 如果启用dotAll则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get dotAll(): boolean;

    /**
     * 获取hasIndices标志位，表示是否包含匹配子串的索引信息。
     *
     * @returns { boolean } 如果匹配结果中包含索引信息则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get hasIndices(): boolean;

    /**
     * 获取ignoreCase标志位，表示是否忽略大小写。
     *
     * @returns { boolean } 如果忽略大小写则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get ignoreCase(): boolean;

    /**
     * 获取multiline标志位，表示是否执行多行匹配。
     *
     * @returns { boolean } 如果启用多行匹配则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get multiline(): boolean;

    /**
     * 获取sticky标志位，表示是否执行粘性匹配。
     *
     * @returns { boolean } 如果启用粘性匹配则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get sticky(): boolean;

    /**
     * 获取unicode标志位，表示是否启用Unicode模式。
     *
     * @returns { boolean } 如果启用Unicode模式则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get unicode(): boolean;

    /**
     * 获取unicodeSets标志位，表示是否启用Unicode集合模式。
     *
     * @returns { boolean } 如果启用Unicode集合模式则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get unicodeSets(): boolean;

    /**
     * 从指定索引开始对字符串执行匹配查找。
     *
     * @param { string } str - 待匹配的字符串。
     * @param { int } index - 开始匹配的索引。
     *     <br>取值约束：应为整数。
     * @returns { RegExpExecArray | null } 匹配成功时返回包含匹配结果的数组，
     *     否则返回null。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public exec(str: string, index: int): RegExpExecArray | null;

    /**
     * 在指定字符串中执行匹配查找，并返回结果数组。
     *
     * @param { string } str - 待匹配的字符串。
     * @returns { RegExpExecArray | null } 匹配成功时返回包含匹配结果的数组，
     *     否则返回null。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public exec(str: string): RegExpExecArray | null;

    /**
     * 在字符串中查找匹配，并返回匹配的起始索引。
     *
     * @param { string } str - 待搜索的字符串。
     * @returns { int } 找到匹配时返回其起始索引，否则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public search(str: string): int;

    /**
     * 使用替换字符串替换字符串中匹配到的子串。
     *
     * @param { string } str - 原始字符串。
     * @param { string } replaceValue - 用于替换的字符串。
     * @returns { string } 替换后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replace(str: string, replaceValue: string): string;

    /**
     * 使用函数替换字符串中匹配到的子串。
     *
     * @param { string } str - 原始字符串。
     * @param { function } replacer - 用于生成新子串的函数。
     * @returns { string } 替换后的新字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public replace(str: string, replacer: (substr: string, args: Object[]) => string): string;

    /**
     * 使用正则表达式将字符串分割为子串数组。
     *
     * @param { string } str - 待分割的字符串。
     * @param { Int | undefined } limit - 限制返回数组的最大长度。
     * @returns { string[] } 分割后得到的子串数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public split(str: string, limit: Int | undefined): string[];

    /**
     * 在字符串中查找匹配，并以数组形式返回所有匹配结果。
     *
     * @param { string } str - 待匹配的字符串。
     * @returns { RegExpMatchArray | null } 找到匹配时返回包含所有匹配结果的数组，
     *     否则返回null。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public match(str: string): RegExpMatchArray | null;

    /**
     * 返回遍历字符串中所有匹配结果的迭代器。
     *
     * @param { string } str - 待匹配的字符串。
     * @returns { IterableIterator<RegExpMatchArray> } 遍历所有匹配结果的迭代器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public matchAll(str: string): IterableIterator<RegExpMatchArray>;

    /**
     * 在正则表达式与指定字符串之间执行匹配查找。
     *
     * @param { string } str - 与正则表达式进行匹配的字符串。
     * @returns { boolean } 如果该字符串存在匹配则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public test(str: string): boolean;

    /**
     * 返回表示该正则表达式的字符串。
     *
     * @returns { string } 该正则表达式的字符串表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * 根据Unicode标志位推进字符串索引。
     *
     * @param { string } s - 原始字符串。
     * @param { int } index - 当前索引。
     *     <br>取值约束：应为整数。
     * @param { boolean } unicode - 是否启用Unicode模式。
     * @returns { int } 下一个索引。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static advanceStringIndex(s: string, index: int, unicode: boolean): int;

    /**
     * RegExp构造函数的调用签名，用于创建新的RegExp实例。
     *
     * @param { string } pattern - 正则表达式模式。
     * @param { string } [flags] - 正则表达式的标志位。
     * @returns { RegExp } 新创建的RegExp实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static $_invoke(pattern: string, flags?: string): RegExp;

    /**
     * RegExp构造函数的调用签名，用于创建新的RegExp实例。
     *
     * @param { RegExp | string } pattern - 正则表达式模式，或另一个RegExp实例。
     * @param { string } [flags] - 正则表达式的标志位。
     * @returns { RegExp } 新创建的RegExp实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static $_invoke(pattern: RegExp | string, flags?: string): RegExp;

    /**
     * RegExp构造函数的调用签名，用于创建新的RegExp实例。
     *
     * @param { RegExp | string } pattern - 正则表达式模式，或另一个RegExp实例。
     * @returns { RegExp } 新创建的RegExp实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static $_invoke(pattern: RegExp | string): RegExp;
}
