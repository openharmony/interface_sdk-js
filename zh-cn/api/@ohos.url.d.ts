/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
 * @file URL字符串解析
 * @kit ArkTS
 */

/**
 * URL代表的是统一资源定位符，本模块提供了常用的工具函数，实现了解析URL字符串和构造[URL]{@link url.URL}对象等功能。
 * 
 * > **说明：**
 * >
 * > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace url {
    /**
     * URLSearchParams接口定义了一些处理URL查询字符串的实用方法，从API version 9开始废弃，建议使用[URLParams]{@link url.URLParams}。
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.url.URLParams
     * @name URLSearchParams
     */
    class URLSearchParams {
        /**
         * URLSearchParams的构造函数。
         *
         * @param { string[][] | Record<string, string> | string | URLSearchParams } init - 入参对象。<br/>- string[][]：字符串二维
         *     数组。<br/>- Record<string, string>：对象列表。<br/>- string：字符串。<br/>- URLSearchParams：对象。<br/>- 默认值：undefined。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.constructor
         */
        constructor(init?: string[][] | Record<string, string> | string | URLSearchParams);

        /**
         * 将新的键值对插入到查询字符串。
         *
         * @param { string } name - 需要插入搜索参数的键名。
         * @param { string } value - 需要插入搜索参数的值。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.append
         */
        append(name: string, value: string): void;

        /**
         * 删除指定名称的键值对。
         *
         * @param { string } name - 需要删除的键值名称。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.delete
         */
        delete(name: string): void;

        /**
         * 获取指定名称的所有键值对。
         *
         * @param { string } name - 指定的键值名称。
         * @returns { string[] } 返回指定名称的所有键值对。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.getAll
         */
        getAll(name: string): string[];

        /**
         * 返回一个ES6的迭代器，迭代器的每一项都是一个Array。Array的第一项是name，Array的第二项是value。
         *
         * @returns { IterableIterator<[string, string]> } 返回一个ES6的迭代器。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.entries
         */
        entries(): IterableIterator<[string, string]>;

        /**
         * 通过回调函数来遍历URLSearchParams实例对象上的键值对。
         *
         * @param { function } callbackFn - 回调函数。
         * @param { Object } thisArg - callbackFn被调用时用作this值，默认值是本对象。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.forEach
         */
        forEach(callbackFn: (value: string, key: string, searchParams: URLSearchParams) => void, thisArg?: Object): void;

        /**
         * 获取指定名称对应的第一个值。
         *
         * @param { string } name - 指定键值对的名称。
         * @returns { string | null } 返回第一个值，如果没找到，返回 null。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.get
         */
        get(name: string): string | null;

        /**
         * 判断一个指定的键名对应的值是否存在。
         *
         * @param { string } name - 要查找的参数的键名。
         * @returns { boolean } 是否存在相对应的key值。存在返回true，否则返回false。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.has
         */
        has(name: string): boolean;

        /**
         * 将与name关联的URLSearchParams对象中的值设置为value。如果存在名称为name的键值对，请将第一个键值对的值设置为value并删除所有其他值。如果不是，则将键值对附加到查询字符串。
         *
         * @param { string } name - 将要设置的参数的键值名。
         * @param { string } value - 所要设置的参数值。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.set
         */
        set(name: string, value: string): void;

        /**
         * 对包含在此对象中的所有键值对进行排序，并返回undefined。排序顺序是根据键的Unicode代码点。该方法使用稳定的排序算法 （即，将保留具有相等键的键值对之间的相对顺序）。
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.sort
         */
        sort(): void;

        /**
         * 返回一个所有键值对的name的ES6迭代器。
         *
         * @returns { IterableIterator<string> } 返回一个所有键值对的name的ES6迭代器。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.keys
         */
        keys(): IterableIterator<string>;

        /**
         * 返回一个所有键值对的value的ES6迭代器。
         *
         * @returns { IterableIterator<string> } 返回一个所有键值对的value的ES6迭代器。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.values
         */
        values(): IterableIterator<string>;

        /**
         * 返回一个迭代器，允许遍历此对象中包含的所有键值对。
         *
         * @returns { IterableIterator<[string, string]> } 返回一个ES6迭代器。迭代器的每一项都是一个JavaScript Array。
         *     Array的第一项是name，第二项是value。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.[Symbol.iterator]
         */
        [Symbol.iterator](): IterableIterator<[string, string]>;

        /**
         * 返回序列化为字符串的搜索参数，必要时对字符进行百分比编码。
         *
         * @returns { string } 返回序列化为字符串的搜索参数，必要时对字符进行百分比编码。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.toString
         */
        toString(): string;
    }

    /**
     * URLParams是一个用于解析、构造和操作URL参数的实用类。该类提供了统一的接口来处理参数维度（如查询参数、路径参数等）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     * @name URLParams
     */
    class URLParams {
        /**
         * ArkTS-Sta: constructor(init?: [string, string][] | Record&lt;string, string&gt; | string | URLParams)
         * 
         * URLParams的构造函数。
         *
         * @param { string[][] | Record<string, string> | string | URLParams } [init] - 入参对象。<br/>- string[][]：字符串二维数组。<
         *     br/>- Record<string, string>：对象列表。<br/>- string：字符串。<br/>- URLParams：对象。<br/>- 默认值：null。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        constructor(init?: string[][] | Record<string, string> | string | URLParams);

        /**
         * 用于创建URLParams实例的参数化构造函数。
         * 作为构造函数的输入参数，init支持四种类型。
         * 输入参数是字符串二维数组。
         * 输入参数是对象列表。
         * 输入参数是字符串。
         * 输入参数是URLParams对象。
         *
         * @param { [string, string][] | Record<string, string> | string | URLParams } [init] - init init
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        constructor(init?: [string, string][] | Record<string, string> | string | URLParams);

        /**
         * 将新的键值对插入到查询字符串。
         *
         * @param { string } name - 需要插入搜索参数的键名。
         * @param { string } value - 需要插入搜索参数的值。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        append(name: string, value: string): void;

        /**
         * 删除指定名称的键值对。
         *
         * @param { string } name - 需要删除的键值名称。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        delete(name: string): void;

        /**
         * 获取指定名称的所有键对应值的集合。
         *
         * @param { string } name - 指定的键值名称。
         * @returns { string[] } 返回指定名称的所有键对应值的集合。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        getAll(name: string): string[];

        /**
         * 返回一个ES6的迭代器，迭代器的每一项都是一个Array。Array的第一项是name，Array的第二项是value。
         *
         * @returns { IterableIterator<[string, string]> } 返回一个ES6的迭代器。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        entries(): IterableIterator<[string, string]>;

        /**
         * 通过回调函数来遍历URLParams实例对象上的键值对。
         *
         * @param { function } callbackFn - 回调函数。
         * @param { Object } [thisArg] - callbackFn被调用时用作this值，默认值是本对象。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        forEach(callbackFn: (value: string, key: string, searchParams: URLParams) => void, thisArg?: Object): void;

        /**
         * 通过回调函数来遍历URLSearchParams实例对象上的键值对。
         *
         * @param { UrlCbFn } callbackFn - 回调函数。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        forEach(callbackFn: UrlCbFn): void;

        /**
         * 获取指定名称对应的第一个值。
         *
         * @param { string } name - 指定键值对的名称。
         * @returns { string | null } 返回第一个值，如果没找到，返回 null。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        get(name: string): string | null;

        /**
         * 根据指定的键获取第一个键值对的值。
         *
         * @param { string } name - 指定用于获取值的键。
         * @returns { string | undefined } 返回按名称找到的第一个值。
         *     如果未找到值，则返回undefined。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        get(name: string): string | undefined;

        /**
         * 判断一个指定的键名对应的值是否存在。
         *
         * @param { string } name - 要查找的参数的键名。
         * @returns { boolean } 是否存在相对应的key值，存在返回true，否则返回false。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        has(name: string): boolean;

        /**
         * 将与name关联的URLSearchParams对象中的值设置为value。
         * 
         * 如果存在名称为name的键值对，请将第一个键值对的值设置为value并删除所有其他值。如果不是，则将键值对附加到查询字符串。
         *
         * @param { string } name - 将要设置的参数的键值名。
         * @param { string } value - 所要设置的参数值。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        set(name: string, value: string): void;

        /**
         * 对包含在此对象中的所有键值对进行排序。排序顺序是根据键的Unicode代码点。该方法使用稳定的排序算法（保留具有相等键的键值对之间的相对顺序）。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        sort(): void;

        /**
         * 返回一个包含所有键值对的name的ES6迭代器。
         *
         * @returns { IterableIterator<string> } 返回一个包含所有键值对的name的ES6迭代器。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        keys(): IterableIterator<string>;

        /**
         * 返回一个包含所有键值对的value的ES6迭代器。
         *
         * @returns { IterableIterator<string> } 返回一个包含所有键值对的value的ES6迭代器。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        values(): IterableIterator<string>;

        /**
         * 获取一个ES6迭代器。迭代器的每一项都是一个JavaScript数组，数组的第一项和第二项分别是键和值。
         *
         * @returns { IterableIterator<[string, string]> } 返回一个ES6迭代器。迭代器的每一项都是一个JavaScript Array。
         *     Array的第一项是name，第二项是value。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        [Symbol.iterator](): IterableIterator<[string, string]>;

        /**
         * 返回一个ES6的迭代器，迭代器的每一项都是一个JavaScript Array。Array的第一项是name，Array的第二项是value。
         *
         * @returns { IterableIterator<[string, string]> } 返回一个ES6的迭代器。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        $_iterator(): IterableIterator<[string, string]>;

        /**
         * 返回序列化为字符串的搜索参数，必要时对字符进行百分比编码。
         *
         * @returns { string } 返回序列化为字符串的搜索参数，必要时对字符进行百分比编码。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        toString(): string;
    }

    /**
     * 用于解析、构造、规范、编码对应的URL字符串。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     * @name URL
     */
    class URL {
        /**
         * URL的构造函数。
         *
         * @param { string } url - 一个表示绝对URL或相对URL的字符串。 <br/>如果 url 是相对URL，则需要指定 base，用于解析最终的URL。 <br/>如果 url 是绝对URL，则给定
         *     的 base 将不会生效。
         * @param { string | URL } base - 入参字符串或者对象，默认值是undefined。<br/>- string：字符串。<br/>- URL：URL对象。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URL.parseURL
         */
        constructor(url: string, base?: string | URL);

        /**
         * URL的无参构造函数。parseURL调用后返回一个URL对象，不单独使用。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        constructor();

        /**
         * 解析URL。
         *
         * @param { string } url - 一个表示绝对URL或相对URL的字符串。 <br/>如果 url 是相对URL，则需要指定 base，用于解析最终的URL。 <br/>如果 url 是绝对URL，则给定
         *     的 base 将不会生效。
         * @param { string | URL } [base] - 入参字符串或者对象，默认值是undefined。<br/>- string：字符串。当第一个参数是相对URL时，该参数需符合URL标准。<br/>-
         *     URL：URL对象。<br/>- 在url是相对URL时使用。
         * @returns { URL } 返回创建的URL对象。
         * @throws { BusinessError } 10200002 - Invalid url string.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        static parseURL(url: string, base?: string | URL): URL;

        /**
         * 将解析过后的URL转化为字符串。
         *
         * @returns { string } 转化后的字符串。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 7 dynamic
         * @since 23 static
         */
        toString(): string;

        /**
         * 将解析过后的URL转化为JSON字符串。
         *
         * @returns { string } 转化后的JSON字符串。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 7 dynamic
         * @since 23 static
         */
        toJSON(): string;

        /**
         * 获取和设置URL的片段部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 7 dynamic
         */
        hash: string;

        /**
         * 获取和设置URL的主机部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 7 dynamic
         */
        host: string;

        /**
         * 获取和设置URL的主机名部分，不带端口。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 7 dynamic
         */
        hostname: string;

        /**
         * 获取和设置序列化的URL。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 7 dynamic
         */
        href: string;

        /**
         * 获取URL源的只读序列化。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 7 dynamic
         */
        readonly origin: string;

        /**
         * 获取和设置URL的密码部分。
         * 
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 7 dynamic
         */
        password: string;

        /**
         * 获取和设置URL的路径部分。
         * 
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 7 dynamic
         */
        pathname: string;

        /**
         * 获取和设置URL的端口部分。
         * 
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 7 dynamic
         */
        port: string;

        /**
         * 获取和设置URL的协议部分。
         * 
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 7 dynamic
         */
        protocol: string;

        /**
         * 获取和设置URL的序列化查询部分。
         * 
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 7 dynamic
         */
        search: string;

        /**
         * 获取/设置URL的片段部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        get hash(): string;

        /**
         * 获取/设置URL的片段部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        set hash(hash: string);

        /**
         * 获取/设置URL的主机部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        get host(): string;

        /**
         * 获取/设置URL的主机部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        set host(host: string);

        /**
         * 获取/设置URL的主机名部分，不带端口。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        get hostname(): string;

        /**
         * 获取/设置URL的主机名部分，不带端口。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        set hostname(hostname: string);

        /**
         * 获取/设置序列化的URL。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        get href(): string;

        /**
         * 获取/设置序列化的URL。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        set href(href: string);

        /**
         * 获取URL源的只读序列化。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        get origin(): string;

        /**
         * 获取/设置URL的密码部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        get password(): string;

        /**
         * 获取/设置URL的密码部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        set password(password: string);

        /**
         * 获取/设置URL的路径部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        get pathname(): string;

        /**
         * 获取/设置URL的路径部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        set pathname(pathname: string);

        /**
         * 获取/设置URL的端口部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        get port(): string;

        /**
         * 获取/设置URL的端口部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        set port(port: string);

        /**
         * 获取/设置URL的协议部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        get protocol(): string;

        /**
         * 获取/设置URL的协议部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        set protocol(protocol: string);

        /**
         * 获取/设置URL的序列化查询部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        get search(): string;

        /**
         * 获取/设置URL的序列化查询部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        set search(search: string);
        /**
         * 获取表示URL查询参数的URLParams对象。
         * 此属性是只读的，但URLParams提供了一个可用于更改URL实例的对象。若要替换URL的整个查询参数，请使用url.search setter。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        get params(): URLParams;

        /**
         * 获取/设置URL的用户名部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        get username(): string;

        /**
         * 获取/设置URL的用户名部分。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        set username(username: string);

        /**
         * 获取URLSearchParams表示URL查询参数的对象。
         * 
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead null
         */
        readonly searchParams: URLSearchParams;

        /**
         * 获取URLParams表示URL查询参数的对象。
         * 
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        readonly params: URLParams;

        /**
         * 获取和设置URL的用户名部分。
         * 
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 7 dynamic
         */
        username: string;
    }

    /**
     * [forEach]{@link url.URLParams#forEach(callbackFn: UrlCbFn)}函数所需的回调函数。
     *
     * @param { string } value - 当前遍历到的键值。
     * @param { string } key - 当前遍历到的键名。
     * @param { URLParams } searchParams - 当前调用[forEach]{@link url.URLParams#forEach(callbackFn: UrlCbFn)}方法的实例对象。
     * @returns { void } This callback does not return a value.
     * @syscap SystemCapability.Utils.Lang
     * @atomicservice
     * @since 23 static
     */
    type UrlCbFn = (value: string, key: string, searchParams: URLParams) => void;
}
export default url;
  