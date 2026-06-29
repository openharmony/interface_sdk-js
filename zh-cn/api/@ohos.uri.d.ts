/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file URI字符串解析
 * @kit ArkTS
 */

/**
 * 本模块提供URI字符串解析功能。URI遵循RFC3986规范标准，该规范定义了编码和解析网络资源标识符的方法，不支持非标准场景解析。
 * 
 * > **说明：**
 * >
 * > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace uri {
  /**
   * 构造一个URI对象，并提供判断两个URI是否相等、对URI路径部分进行编码规范化等方法。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   * @name URI
   */
  export class URI {
    /**
     * 构造函数用于创建URI对象。
     *
     * @param { string } uri - 入参对象。
     * @throws { BusinessError } 10200002 - Invalid uri string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    constructor(uri: string);
    /**
     * 将URI转化为编码后的字符串。
     *
     * @returns { string } 返回URI的字符串序列化。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    toString(): string;

    /**
     * 判断此URI是否与其他URI对象相等。
     *
     * @param { URI } other - 需要比较的URI对象。
     * @returns { boolean } 返回true表示相等，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.uri.URI.equalsTo
     */
    equals(other: URI): boolean;

    /**
     * 判断此URI是否与其他URI对象相等。
     *
     * @param { URI } other - 需要比较的URI对象。
     * @returns { boolean } 返回true表示相等，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    equalsTo(other: URI): boolean;

    /**
     * 判断URI是否为绝对URI，即是否包含scheme组件。
     *
     * @returns { boolean } 如果是绝对URI返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    checkIsAbsolute(): boolean;

    /**
     * 规范化此URI的路径。
     * 
     * > **说明：**
     * >
     * > 如果此URI是不透明的，或者其路径已经是规范形式，则返回该URI。否则将构造一个新的URI，该URI与当前URI相同，唯一的区别是其路径通过规范化当前URI的路径来计算，具体规则如下：
     * >
     * > 1.移除所有的 .（点）段。
     * >
     * > 2.如果 ..（双点）段前面有一个非 .. 段，则将这两个段一起移除。重复此步骤，直到不再适用为止。
     * >
     * > 如果路径规范化后以 ..（双点）段开头，这表明之前没有足够的非 .. 段可以移除，因此路径将以 .. 段开始。
     *
     * @returns { URI } 返回一个path被规范化后的URI对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    normalize(): URI;
    /**
     * 
     * 根据给定的查询关键词，从URI查询参数部分中提取出该关键词对应的第一个值，若查询参数中存在已编码过的内容，需将对应Key进行解码后获取Value。
     * 
     * 查询参数在问号“?”后，由键值对组成。键和值用等号“=”连接，键值对用与号“&”分隔。
     *
     * @param { string } key - 此URI查询参数的名称。
     * @returns { string } 返回经解码处理后的URI查询参数的第一个值，若未找到对应值则返回null对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    getQueryValue(key: string): string;
    /**
     * 从当前 URI 的查询组件中获取指定键的第一个值。如果查询组件包含编码内容，此 API 会在获取值之前对键进行解码。
     *
     * @param { string } key - 查询参数的键。
     * @returns { string | null } 返回解码后的值，如果未找到对应的值则返回 null 对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getQueryValue(key: string): string | null;
    /**
     * 在当前URI对象上添加查询参数后返回新的URI对象，保持原有URI对象不变。
     *
     * @param { string } [key] - 需要添加查询参数的名称。
     * @param { string } [value] - 需要添加查询参数的值。
     * @returns { URI } 返回添加查询部分后的URI对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    addQueryValue(key: string, value: string): URI;
    /**
     * 获取URI查询部分中所有不重复的键。查询参数出现在问号“?”之后，由键值对组成，键和值用等号“=”连接，键值对间用与号“&”分隔。
     *
     * @returns { string[] } 返回URI查询部分中所有不重复的已解码参数名集合。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getQueryNames(): string[];
    /**
     * 获取URI中查询参数指定键的所有值。如果查询参数已编码，需先解码键再获取值。
     * 
     * 查询参数是出现在问号“?”之后的部分，由键值对组成，键和值用等号“=”连接，键值对间用与号“&”分隔。
     *
     * @param { string } key - 指定键的名称。
     * @returns { string[] } 返回此URI中查询参数内指定键对应所有值的集合，若没有找到则返回一个空字符串数组[]。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getQueryValues(key: string): string[];
    /**
     * 根据指定键名，搜索此URI查询字符串并返回其对应的布尔类型值。
     *
     * @param { string } key - 要获取的查询参数的名称。
     * @param { boolean } defaultValue - 设置查询参数中未包含指定键时返回的值。
     * @returns { boolean } 如果指定的查询参数不存在，则返回defaultValue的值；查询参数对应第一个值为“false”或者“0”返回false，否则返回true。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getBooleanQueryValue(key: string, defaultValue: boolean): boolean;
    /**
     * 清除URI路径查询部分，并创建一个新的URI对象返回，同时保持原有URI对象不变。
     *
     * @returns { URI } 返回一个已被清除查询部分的URI对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    clearQuery(): URI;
    /**
     * 获取此URI路径的最后一个段。每个段代表路径中的一个部分，通常通过“/”来进行分隔。对于以斜杠结尾的或者没有路径的部分不计入段。
     *
     * @returns { string } 返回此URI路径中的最后一个段，如果路径为空则返回null。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getLastSegment(): string;
    /**
     * 获取此URI中已解码的所有路径段。
     *
     * @returns { string[] } 返回此URI中已解码的所有路径段，各段前后均不含 “/”。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getSegment(): string[];
    /**
     * 对指定字段进行编码，并将其追加到当前URI对象的path中，创建并返回新的URI对象，保持原有URI对象不变。
     *
     * @param { string } [pathSegment] - 需要追加到路径部分的字段。
     * @returns { URI } 返回已追加字段的URI对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    addSegment(pathSegment: string): URI;
    /**
     * 将已编码的字段追加到当前URI的path字段中，创建新URI对象并返回，保持原有URI对象不变。
     *
     * @param { string } pathSegment - 需要追加到路径部分的编码字段。
     * @returns { URI } 返回已追加字段的URI对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    addEncodedSegment(pathSegment: string): URI;
    /**
     * 判断此URI是否为分层的URI，方案特定部分以“/”开头的URI为分层的URI。相对URI也是分层的。
     *
     * @returns { boolean } 如果是分层的URI返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    checkHierarchical(): boolean;
    /**
     * 判断此URI是否为不透明URI，方案特定部分不以“/”开头的URI为不透明的URI。
     *
     * @returns { boolean } 如果是不透明的URI返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    checkOpaque(): boolean;
    /**
     * 判断此URI是否为相对URI，相对URI指的是不包含协议(scheme)部分的URI。
     *
     * @returns { boolean } 如果是相对URI返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    checkRelative(): boolean;
    /**
     * 根据提供的协议、方案以及片段创建一个新的URI对象。
     *
     * @param { string } scheme - 此URI协议部分。该参数需符合URI协议标准。
     * @param { string } ssp - 此URI的方案特定部分，即位于协议分隔符“:”和片段分隔符“#”之间的所有内容，这部分将被编码。
     * @param { string } fragment - 此URI的片段部分，即“#”符号后面的内容，如果未定义则为空，这部分也将被编码。
     * @returns { URI } 返回由给定协议、协议特定部分和片段创建的URI对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static createFromParts(scheme: string, ssp: string, fragment: string): URI;
    /**
     * 获取/设置 URI 的协议部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    scheme: string;

    /**
     * 获取/设置 URI 的用户信息部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    userInfo: string;

    /**
     * 获取 URI 的主机名部分（不含端口）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    host: string;

    /**
     * 获取URI的端口部分。 
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    port: string;

    /**
     * 获取/设置 URI 的路径部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    path: string;

    /**
     * 获取/设置 URI 的查询部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    query: string;

    /**
     * 获取/设置 URI 的片段部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    fragment: string;

    /**
     *获取/设置 URI 的授权组件部分（已解码）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    authority: string;

    /**
     * 获取/设置 URI 的协议特定部分（已解码）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    ssp: string;
    /**
     * 获取/设置 URI 的用户信息部分（已编码）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    encodedUserInfo: string;
    /**
     * 获取/设置 URI 的路径部分（已编码）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    encodedPath: string;
    /**
     * 获取/设置 URI 的查询组件部分（已编码）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    encodedQuery: string;
    /**
     * 获取/设置 URI 的片段部分（已编码），即 '#' 之后的所有内容。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    encodedFragment: string;
    /**
     * 获取/设置 URI 的授权部分（已编码）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    encodedAuthority: string;
    /**
     * 获取/设置 URI 的协议特定部分（已编码），即协议分隔符 ':' 与片段分隔符 '#' 之间的所有内容。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    encodedSSP: string;
    /**
     * 获取URI的协议部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get scheme(): string | null;

    /**
     * 设置URI的协议部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set scheme(input: string);

    /**
     * 获取URI的用户信息部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get userInfo(): string | null;

    /**
     * 设置URI的用户信息部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set userInfo(input: string);

    /**
     * 获取URI的主机名部分（不带端口）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    get host(): string | null;

    /**
     * 获取URI的端口部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    get port(): string;

    /**
     * 获取URI的路径部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get path(): string | null;

    /**
     * 设置URI的路径部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set path(input: string);

    /**
     * 获取URI的查询部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get query(): string | null;

    /**
     * 设置URI的查询部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set query(input: string);

    /**
     * 获取URI的片段部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get fragment(): string | null;

    /**
     * 设置URI的片段部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set fragment(input: string);

    /**
     * 获取此URI的解码权限组件部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get authority(): string | null;

    /**
     * 设置此URI的解码权限组件部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set authority(input: string);

    /**
     * 获取URI的解码方案特定部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get ssp(): string;

    /**
     * 设置URI的解码方案特定部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set ssp(input: string);

    /**
     * 获取URI的编码用户信息部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get encodedUserInfo(): string | null;
    /**
     * 设置URI的编码用户信息部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set encodedUserInfo(input: string);

    /**
     * 获取URI的编码路径部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get encodedPath(): string | null;
    /**
     * 设置URI的编码路径部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set encodedPath(input: string);

    /**
     * 获取此URI的编码查询部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get encodedQuery(): string | null;
    /**
     * 设置此URI的编码查询部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set encodedQuery(input: string);

    /**
     * 获取此URI的编码片段部分，即"#"后面的所有内容。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get encodedFragment(): string | null;
    /**
     * 设置此URI的编码片段部分，即"#"后面的所有内容。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set encodedFragment(input: string);

    /**
     * 获取此URI的编码权限部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get encodedAuthority(): string | null;
    /**
     * 设置此URI的编码权限部分。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set encodedAuthority(input: string);

    /**
     * 获取此URI的方案特定部分，即协议分隔符":"和片段分隔符"#"之间的所有内容。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get encodedSSP(): string;

    /**
     * 设置此URI的方案特定部分，即协议分隔符":"和片段分隔符"#"之间的所有内容。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set encodedSSP(input: string);
  }
}
export default uri;