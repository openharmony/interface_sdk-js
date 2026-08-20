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
 * 面向性能的字符串构建类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class StringBuilder {
    /**
     * 构造初始缓冲区为16个字符的新构建器实例。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor();

    /**
     * 使用指定的字符数组构造新的构建器实例。
     *
     * @param { FixedArray<char> } fromChars - 用于初始化构建器的字符数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(fromChars: FixedArray<char>);

    /**
     * 使用指定的字符数组构造新的构建器实例。
     *
     * @param { char[] } fromChars - 用于初始化构建器的字符数组。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(fromChars: char[]);

    /**
     * 使用指定的字符串构造新的构建器实例。
     *
     * @param { string } s - 用于初始化构建器的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(s: string);

    /**
     * 连接两个字符串，并以新字符串返回结果。
     *
     * @param { string } lhs - 左侧字符串（前缀）。
     * @param { string } rhs - 右侧字符串（后缀）。
     * @returns { string } 连接后的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static concatStrings(lhs: string, rhs: string): string;

    /**
     * 将字符串追加到构建器的内部缓冲区。
     *
     * @param { string } s - 待追加的字符串。
     * @returns { StringBuilder } 内部缓冲区已更新的构建器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    append(s: string): StringBuilder;

    /**
     * 将boolean值以字符串形式追加到构建器的内部缓冲区。
     *
     * @param { boolean } i - 待追加的值。
     * @returns { StringBuilder } 内部缓冲区已更新的构建器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    append(i: boolean): StringBuilder;

    /**
     * 将byte值以字符串形式追加到构建器的内部缓冲区。
     *
     * @param { byte } i - 待追加的值。
     * @returns { StringBuilder } 内部缓冲区已更新的构建器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    append(i: byte): StringBuilder;

    /**
     * 将char值追加到构建器的内部缓冲区。
     *
     * @param { char } i - 待追加的值。
     * @returns { StringBuilder } 内部缓冲区已更新的构建器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    append(i: char): StringBuilder;

    /**
     * 将short值以字符串形式追加到构建器的内部缓冲区。
     *
     * @param { short } i - 待追加的值。
     * @returns { StringBuilder } 内部缓冲区已更新的构建器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    append(i: short): StringBuilder;

    /**
     * 将int值以字符串形式追加到构建器的内部缓冲区。
     *
     * @param { int } i - 待追加的值。
     *     <br>取值约束：应为整数。
     * @returns { StringBuilder } 内部缓冲区已更新的构建器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    append(i: int): StringBuilder;

    /**
     * 将long值以字符串形式追加到构建器的内部缓冲区。
     *
     * @param { long } i - 待追加的值。
     * @returns { StringBuilder } 内部缓冲区已更新的构建器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    append(i: long): StringBuilder;

    /**
     * 将float值以字符串形式追加到构建器的内部缓冲区。
     *
     * @param { float } i - 待追加的值。
     * @returns { StringBuilder } 内部缓冲区已更新的构建器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    append(i: float): StringBuilder;

    /**
     * 将double值以字符串形式追加到构建器的内部缓冲区。
     *
     * @param { double } i - 待追加的值。
     * @returns { StringBuilder } 内部缓冲区已更新的构建器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    append(i: double): StringBuilder;

    /**
     * 将对象的字符串表示追加到构建器的内部缓冲区。
     *
     * @param { Object } o - 将被转换为字符串的对象。
     * @returns { StringBuilder } 内部缓冲区已更新的构建器。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    append(o: Object): StringBuilder;

    /**
     * 返回所有追加操作最终形成的字符串。
     *
     * @returns { string } - 构建器当前缓冲区对应的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    toString(): string;

    /**
     * 将基本类型值转换为字符串。
     *
     * @param { boolean } i - 待转换的值。
     * @returns { string } 转换结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static toString(i: boolean): string;

    /**
     * 将基本类型值转换为字符串。
     *
     * @param { byte } i - 待转换的值。
     * @returns { string } 转换结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static toString(i: byte): string;

    /**
     * 将基本类型值转换为字符串。
     *
     * @param { char } i - 待转换的值。
     * @returns { string } 转换结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static toString(i: char): string;

    /**
     * 将基本类型值转换为字符串。
     *
     * @param { short } i - 待转换的值。
     * @returns { string } 转换结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static toString(i: short): string;

    /**
     * 将基本类型值转换为字符串。
     *
     * @param { int } i - 待转换的值。
     *     <br>取值约束：应为整数。
     * @returns { string } 转换结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static toString(i: int): string;

    /**
     * 将基本类型值转换为字符串。
     *
     * @param { long } i - 待转换的值。
     * @returns { string } 转换结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static toString(i: long): string;

    /**
     * 将基本类型值转换为字符串。
     *
     * @param { float } f - 待转换的值。
     * @returns { string } 转换结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static toString(f: float): string;

    /**
     * 将基本类型值转换为字符串。
     *
     * @param { double } d - 待转换的值。
     * @returns { string } 转换结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static toString(d: double): string;

    /**
     * 当前已累积字符串的长度。
     *
     * @returns { int } 当前已累积字符串的长度。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public get stringLength(): int;
}
