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
 * URL是统一资源定位符，本模块提供了常用的工具函数，实现了解析URL字符串、构造URL对象以及对URL查询参数的解析和操作等功能。
 *
 * 模块主要包含以下核心类：
 *
 * - [URL]{@link url.URL}：用于解析和构造完整URL。
 *
 * - [URLParams]{@link url.URLParams}：用于操作URL查询参数。
 *
 * - [URLSearchParams]{@link url.URLSearchParams}：从API version 9开始废弃，建议使用[URLParams]{@link url.URLParams}替代。
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
         * @param { string[][] | Record<string, string> | string | URLSearchParams } init - 入参对象。
         *     <br/>- string[][]：字符串二维数组，每个内部数组包含两个元素，分别为键名和键值。
         *     <br/>- Record<string, string>：对象列表。
         *     <br/>- string：字符串，需遵循URL查询参数格式，如'key=value&key2=value2'。
         *     <br/>- URLSearchParams：对象。
         *     <br/>- 默认值：undefined。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.constructor
         */
        constructor(init?: string[][] | Record<string, string> | string | URLSearchParams);

        /**
         * 将新的键值对插入到查询字符串。与set方法不同，append不会替换已存在的键名对应的值，而是追加一个新的键值对，允许同一键名存在多个值。如需替换已有键值，请使用set方法。
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
         * 删除指定名称的所有键值对。如果指定名称不存在，则不做任何操作。
         *
         * @param { string } name - 需要删除的键值名称。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.delete
         */
        delete(name: string): void;

        /**
         * 获取指定名称的所有键对应值的集合。若查找一个不存在的键值对名称时返回值为空数组。
         *
         * @param { string } name - 指定的键值名称。
         * @returns { string[] } 返回指定名称的所有键对应值的集合。
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
         * @returns { boolean } 是否存在相对应的key值，存在返回true，否则返回false。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.has
         */
        has(name: string): boolean;

        /**
         * 将与name关联的URLParams对象中的值设置为value。如果存在名称为name的键值对，请将第一个键值对的值设置为value并删除所有其他值。如果不存在该键名，则将键值对附加到查询字符串。
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
         * 对包含在此对象中的所有键值对进行排序。排序顺序是根据键的Unicode代码点。该方法使用稳定的排序算法 （即，将保留具有相等键的键值对之间的相对顺序）。
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.sort
         */
        sort(): void;

        /**
         * 返回一个所有键值对的name的迭代器。
         *
         * @returns { IterableIterator<string> } 返回一个所有键值对的name的迭代器。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.keys
         */
        keys(): IterableIterator<string>;

        /**
         * 返回一个所有键值对的value的迭代器。
         *
         * @returns { IterableIterator<string> } 返回一个所有键值对的value的迭代器。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams.values
         */
        values(): IterableIterator<string>;

        /**
         * 返回一个迭代器，允许遍历此对象中包含的所有键值对。
         *
         * @returns { IterableIterator<[string, string]> } 返回一个迭代器，迭代器的每一项为包含name和value的[string, string]数组。
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
     * URLParams是一个用于解析、构造和操作URL参数的实用类。该类提供了统一的接口来处理URL查询参数。
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
         * URLParams的构造函数，用于创建URL参数对象，适用于需要解析、构造或操作URL查询参数的场景。
         *
         * @param { string[][] | Record<string, string> | string | URLParams } [init] - 入参对象。
         *     <br/>- string[][]：字符串二维数组。
         *     <br/>- Record&lt;string, string&gt;：对象列表。
         *     <br/>- string：URL查询参数字符串。
         *     <br/>- URLParams：URLParams实例对象。
         *     <br/>- 默认值：null。
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
         * 将新的键值对插入到查询字符串。与[set]{@link url.URLParams.set}方法不同，append不会替换已存在的键名对应的值，
         * 而是追加一个新的键值对，允许同一键名存在多个值。如需替换已有键值，请使用set方法。
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
         * 删除指定名称的所有键值对。如果指定名称不存在，则不做任何操作。
         *
         * @param { string } name - 需要删除的键名。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        delete(name: string): void;

        /**
         * 获取指定名称的所有键对应值的集合。若查找一个不存在的键值对名称时返回值为空数组。
         *
         * @param { string } name - 指定的键名。
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
         * 通过回调函数按照插入顺序遍历URLParams实例对象上的键值对。
         *
         * @param { function } callbackFn - 遍历键值对时执行的回调函数，对每个键值对调用一次。
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
         * @param { UrlCbFn } callbackFn - 遍历键值对时执行的回调函数，对每个键值对调用一次。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        forEach(callbackFn: UrlCbFn): void;

        /**
         * 获取指定名称对应的第一个值。
         *
         * @param { string } name - 指定键名。
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
         * > **说明：**
         * >
         * > 若查找一个不存在的键值对名称时返回值为undefined。
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
         * 将与name关联的URLParams对象中的值设置为value。
         *
         * 如果存在名称为name的键值对，请将第一个键值对的值设置为value并删除所有其他值。如果不存在该键名，则将键值对附加到查询字符串。
         *
         * @param { string } name - 将要设置的参数的键名。
         * @param { string } value - 所要设置的参数值。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        set(name: string, value: string): void;

        /**
         * 对包含在此对象中的所有键值对进行排序，适用于URL规范化场景（如URL签名、缓存键生成等需要参数顺序一致的场景）。
         * 排序顺序是根据键的Unicode代码点。该方法使用稳定的排序算法（保留具有相等键的键值对之间的相对顺序）。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        sort(): void;

        /**
         * 返回一个包含所有键值对的name的迭代器。
         *
         * @returns { IterableIterator<string> } 返回一个包含所有键值对的name的迭代器。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        keys(): IterableIterator<string>;

        /**
         * 返回一个包含所有键值对的value的迭代器。
         *
         * @returns { IterableIterator<string> } 返回一个包含所有键值对的value的迭代器。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        values(): IterableIterator<string>;

        /**
         * 获取一个迭代器，迭代器的每一项都是一个JavaScript数组，数组的第一项和第二项分别是键和值。
         *
         * @returns { IterableIterator<[string, string]> } 返回一个迭代器，迭代器的每一项为包含name和value的[string, string]数组。
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         */
        [Symbol.iterator](): IterableIterator<[string, string]>;

        /**
         * 返回一个迭代器，迭代器的每一项都是一个Array。Array的第一项是name，Array的第二项是value。该方法与[Symbol.iterator]行为一致，均返回键值对的迭代器。
         *
         * @returns { IterableIterator<[string, string]> } 返回一个迭代器，迭代器的每一项为包含name和value的[string, string]数组。
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
     * 用于解析和构造完整URL。
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
         * URL的构造函数。与parseURL方法功能相同，但parseURL为静态工厂方法，推荐使用parseURL来创建URL对象。
         *
         * @param { string } url - 一个表示绝对URL或相对URL的字符串，必须是合法的URL格式。
         *     <br/>如果url是相对URL，则需要指定base，用于解析最终的URL。
         *     <br/>如果 url是绝对URL，则给定的base将不会生效。
         * @param { string | URL } base - 入参字符串或者对象，默认值是undefined。<br>- string：表示基础URL的字符串，
         * 当url为相对URL时需为合法URL格式。<br>- URL：已解析的URL对象，用作相对URL解析的基础地址。
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URL.parseURL
         */
        constructor(url: string, base?: string | URL);

        /**
         * URL的无参构造函数，不建议直接调用。请使用parseURL方法创建URL对象。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        constructor();

        /**
         * 解析URL字符串，返回解析后的URL对象。该对象包含协议、主机、端口、路径和查询参数等URL组成部分。
         *
         * > **说明：**
         * >
         * > 当入参url是相对URL时，调用该接口解析后的URL并不是简单地将入参url和base直接拼接。
         * > url内容为相对路径格式时，会相对于base的当前目录进行解析，包括base中path字段最后一个斜杠前的所有路径片段，
         * > 但不包括其后的部分（参照示例中url1）。url内容为指向根目录的格式时，会相对于base的原始地址（origin）进行解析（参照示例中url2）。
         *
         * @param { string } url - 一个表示绝对URL或相对URL的字符串。
         *     <br/>如果 url 是相对URL，则需要指定 base，用于解析最终的URL。
         *     <br/>如果 url 是绝对URL，则给定的 base 将不会生效。
         * @param { string | URL } [base] - 入参字符串或者对象，默认值是undefined。<br/>- string：字符串。当第一个参数是相对URL时，该参数需符合URL标准。<br/>-
         *     URL：URL对象。<br/>- 在url是相对URL时使用，url为绝对URL时此参数不会生效。
         * @returns { URL } 返回解析后的URL对象，包含URL的各组成部分（如协议、主机和路径等属性）。
         * @throws { BusinessError } 10200002 - Invalid url string.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform [since 10]
         * @atomicservice [since 11]
         * @since 9 dynamic
         * @since 23 static
         */
        static parseURL(url: string, base?: string | URL): URL;

        /**
         * 将解析过后的URL转化为字符串，返回值与URL的href属性值相同。
         *
         * @returns { string } 解析后的URL序列化字符串。
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
         * @returns { string } URL对象的JSON序列化字符串。
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
         * 获取和设置URL的端口部分。当port为当前protocol的默认端口时，port将被解析为空字符串。
         *
         * > **说明：**
         * >
         * > 在解析URL字符串时，如果入参中的port内容是当前protocol的默认端口，那么port将被解析为空字符串。默认端口为：http为80，https为443，ftp为21，gopher为70，ws为80，
         * > wss为443。
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
         * 获取/设置URL的端口部分。当port为当前protocol的默认端口时，port将被解析为空字符串。
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 23 static
         */
        get port(): string;

        /**
         * 获取/设置URL的端口部分。当port为当前protocol的默认端口时，port将被解析为空字符串。
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
         * @syscap SystemCapability.Utils.Lang
         * @since 7 dynamiconly
         * @deprecated since 9
         * @useinstead ohos.url.URLParams
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
     * @param { string } value - 当前遍历到的值。
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
