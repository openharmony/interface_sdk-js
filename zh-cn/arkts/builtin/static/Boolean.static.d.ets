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
 * 表示装箱后的boolean值及其相关操作。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
export class Boolean extends Object implements Comparable<boolean> {
    /**
     * 使用指定的值构造新的Boolean对象。
     *
     * @param { boolean } value - 用于构造类实例的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: boolean);

    /**
     * 使用指定的byte值构造新的Boolean对象。
     *
     * @param { byte } value - 用于构造类实例的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: byte);

    /**
     * 使用指定的char值构造新的Boolean对象。
     *
     * @param { char } value - 用于构造类实例的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: char);

    /**
     * 使用指定的short值构造新的Boolean对象。
     *
     * @param { short } value - 用于构造类实例的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: short);

    /**
     * 使用指定的int值构造新的Boolean对象。
     *
     * @param { int } value - 用于构造类实例的值。
     *     <br>取值约束：应为整数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: int);

    /**
     * 使用指定的long值构造新的Boolean对象。
     *
     * @param { long } value - 用于构造类实例的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: long);

    /**
     * 使用指定的bigint值构造新的Boolean对象。
     *
     * @param { bigint } value - 用于构造类实例的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: bigint);

    /**
     * 使用指定的float值构造新的Boolean对象。
     *
     * @param { float } value - 用于构造类实例的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: float);

    /**
     * 使用指定的number值构造新的Boolean对象。
     *
     * @param { double } value - 用于构造类实例的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public constructor(value: double);

    /**
     * 使用指定的字符串值构造新的Boolean对象。
     *
     * @param { string } value - 用于构造类实例的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: string);

    /**
     * 使用指定的Object值构造新的Boolean对象。
     *
     * @param { Any } value - 用于构造类实例的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(value: Any = undefined);

    /**
     * 根据指定的值创建新的Boolean实例。
     *
     * @returns { boolean } 表示指定值的新Boolean实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke(): boolean;

    /**
     * 根据指定的值创建新的Boolean实例。
     *
     * @param { T } value - 可用Boolean表示的值。
     * @returns { boolean } 表示指定值的新Boolean实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static $_invoke<T>(value: T): boolean;

    /**
     * 以boolean值的形式返回该基本类型值。
     *
     * @param { boolean } value - 待转换的值。
     * @returns { boolean } 原样返回传入的boolean值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    static toBoolean(value: boolean): boolean;

    /**
     * 返回当前实例的值。
     *
     * @returns { boolean } 转换为boolean的实例值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    toBoolean(): boolean;

    /**
     * 判断当前实例与按Boolean处理的传入对象是否相等。如果传入对象的类型
     * 与当前类型不一致，则返回false。
     *
     * @param { Any } other - 待比较的对象。
     * @returns { boolean } 如果两个对象相等则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public equals(other: Any): boolean;

    /**
     * 将基本类型值转换为字符串。
     *
     * @param { boolean } v - 待转换的值。
     * @returns { string } 该boolean值的字符串表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public static toString(v: boolean): string;

    /**
     * 将当前对象转换为字符串。
     *
     * @returns { string } 该Boolean对象的字符串表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public toString(): string;

    /**
     * 将当前实例与另一个Boolean对象进行比较。当前实例小于传入对象时结果小于0，
     * 相等时为0，否则大于0。
     *
     * @param { Boolean } other - 用于比较的Boolean对象。
     * @returns { int } 当前实例小于传入对象时返回负数，相等时返回0，大于时返回正数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public compareTo(other: Boolean): int;

    /**
     * 判断当前实例的值是否为true。
     *
     * @returns { boolean } 如果实例值为true则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isTrue(): boolean;

    /**
     * 判断当前实例的值是否为false。
     *
     * @returns { boolean } 如果实例值为false则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public isFalse(): boolean;

    /**
     * 对当前实例的值取反。
     *
     * @returns { Boolean } 该Boolean实例逻辑取反后的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public negate(): Boolean;

    /**
     * 对当前实例与传入实例做逻辑与运算。
     *
     * @param { Boolean } other - 传入的实例。
     * @returns { Boolean } 两个Boolean实例逻辑与运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public and(other: Boolean): Boolean;

    /**
     * 对当前实例与传入实例做逻辑或运算。
     *
     * @param { Boolean } other - 传入的实例。
     * @returns { Boolean } 两个Boolean实例逻辑或运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public or(other: Boolean): Boolean;

    /**
     * 对当前实例与传入实例做逻辑异或运算。
     *
     * @param { Boolean } other - 传入的实例。
     * @returns { Boolean } 两个Boolean实例逻辑异或运算的结果。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    public xor(other: Boolean): Boolean;
}
