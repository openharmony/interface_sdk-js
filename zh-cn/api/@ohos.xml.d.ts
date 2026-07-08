/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @file XML解析与生成
 * @kit ArkTS
 */

import stream from './@ohos.util.stream'

/**
 * 本模块提供XML生成和解析的接口。
 * 
 * 本模块提供了两种生成XML文件的方式:
 * 
 * * [XmlSerializer]{@link xml.XmlSerializer}：适用于已知XML文本大小的情况。
 * * [XmlDynamicSerializer<sup>20+</sup>]{@link xml.XmlDynamicSerializer}：适用于未知XML文本大小的情况。
 * 
 * 本模块提供了两种解析XML文件的方式:
 * 
 * * [XmlPullParser]{@link xml.XmlPullParser}：适用于对xml文本进行随机访问和灵活解析的场景。
 * * [XmlSAXParser<sup>24+</sup>]{@link xml.XmlSAXParser}：适用于流式解析xml文本的场景，当xml文本较大，其他解析方式会消耗较多内存，建议采用流式解析。
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
declare namespace xml {
    /**
   * XmlDynamicSerializer类用于动态生成XML字符串。当无法确定XML内容长度时，推荐使用该类。
   * 
   * > **说明：**
   * >
   * > 使用该类构造的对象无需自行创建ArrayBuffer，程序动态扩容，可以不断添加XML元素，最终序列化结果字符串长度上限为100000。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @name XmlDynamicSerializer
   */
  class XmlDynamicSerializer {
    /**
     * XmlDynamicSerializer的构造函数。
     *
     * @param { string } [encoding] - 编码格式，默认'utf-8'(目前仅支持'utf-8')。
     * @throws { BusinessError } 10200066 - 编码格式错误，目前仅支持utf-8。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    constructor(encoding?: string);

    /**
     * 写入元素的属性和属性值。
     * 
     * > **说明：**
     * >
     * > 该接口对所添加数据不做标准XML校验处理，请确保所添加的数据符合标准XML规范。比如不允许添加数字开头的属性名称以及添加多个同名的属性名称。
     *
     * @param { string } name - 属性。所组成的XML长度不能超过100000，不可为空字符。
     * @param { string } value - 属性值。所组成的XML长度不能超过100000。
     * @throws { BusinessError } 10200062 - xml累计长度超过上限100000。
     * @throws { BusinessError } 10200063 - xml位置非法。
     * @throws { BusinessError } 10200064 - 不能为空字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setAttributes(name: string, value: string): void;

    /**
     * 写入一个空元素。
     * 
     * > **说明：**
     * >
     * > 该接口对所添加数据不做标准XML校验处理，请确保所添加的数据符合标准XML规范。比如不允许添加数字开头的元素名称。
     *
     * @param { string } name - 该空元素的元素名。所组成的XML长度不能超过100000。
     * @throws { BusinessError } 10200062 - xml累计长度超过上限100000。
     * @throws { BusinessError } 10200064 - 不能为空字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    addEmptyElement(name: string): void;

    /**
     * 编写带有编码的文件声明。
     *
     * @throws { BusinessError } 10200062 - xml累计长度超过上限100000。
     * @throws { BusinessError } 10200063 - xml位置非法。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setDeclaration(): void;

    /**
     * 写入元素开始标记。
     * 
     * > **说明：**
     * >
     * > - 调用该接口后须调用[endElement]{@link xml.XmlSerializer#endElement}写入元素结束标记，以确保节点正确闭合。
     * >
     * > - 该接口对所添加数据不做标准XML校验处理，请确保所添加的数据符合标准XML规范。比如不允许添加数字开头的元素名称。
     *
     * @param { string } name - 当前元素的元素名。所组成的XML长度不能超过100000。
     * @throws { BusinessError } 10200062 - xml累计长度超过上限100000。
     * @throws { BusinessError } 10200064 - 不能为空字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    startElement(name: string): void;

    /**
     * 写入元素结束标记。
     * 
     * > **说明：**
     * >
     * > 调用该接口前必须先调用[startElement]{@link xml.XmlSerializer#startElement}接口写入元素开始标记。
     *
     * @throws { BusinessError } 10200062 - xml累计长度超过上限100000。
     * @throws { BusinessError } 10200065 - startElement和endElement不匹配。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    endElement(): void;

    /**
     * 写入当前元素标记的命名空间。
     * 
     * > **说明：**
     * >
     * > 该接口对所添加数据不做标准XML校验处理，请确保所添加的数据符合标准XML规范。比如不允许添加数字开头的前缀以及对同一个元素设置多个命名空间。
     *
     * @param { string } prefix - 当前元素及其子元素的前缀。所组成的XML长度不能超过100000，不可为空字符。
     * @param { string } namespace - 当前元素及其子元素的命名空间。所组成的XML长度不能超过100000，不可为空字符。
     * @throws { BusinessError } 10200062 - xml累计长度超过上限100000。
     * @throws { BusinessError } 10200064 - 不能为空字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setNamespace(prefix: string, namespace: string): void;

    /**
     * 写入注释内容。
     *
     * @param { string } text - 当前元素的注释内容。所组成的XML长度不能超过100000。
     * @throws { BusinessError } 10200062 - xml累计长度超过上限100000。
     * @throws { BusinessError } 10200064 - 不能为空字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setComment(text: string): void;

    /**
     * 提供在CDATA标签中添加数据的能力，所生成的CDATA标签结构为："\<!\[CDATA\[" + 所添加的数据 + "\]\]\>"。
     * 
     * > **说明：**
     * >
     * > 该接口对所添加数据不做标准XML校验处理，请确保所添加的数据符合标准XML规范。比如不允许在CDATA标签中添加包含"\]\]\>"字符串的数据。
     *
     * @param { string } text - CDATA属性的内容。所组成的XML长度不能超过100000。
     * @throws { BusinessError } 10200062 - xml累计长度超过上限100000。
     * @throws { BusinessError } 10200064 - 不能为空字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setCdata(text: string): void;

    /**
     * 写入标签值。
     *
     * @param { string } text - 标签值。所组成的XML长度不能超过100000。
     * @throws { BusinessError } 10200062 - xml累计长度超过上限100000。
     * @throws { BusinessError } 10200064 - 不能为空字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setText(text: string): void;

    /**
     * 写入文档类型。
     *
     * @param { string } text - DocType属性的内容。所组成的XML长度不能超过100000。
     * @throws { BusinessError } 10200062 - xml累计长度超过上限100000。
     * @throws { BusinessError } 10200064 - 不能为空字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setDocType(text: string): void;

    /**
     * 返回XML字符串的ArrayBuffer。
     *
     * @returns { ArrayBuffer } 用于接收写入XML信息的ArrayBuffer内存。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getOutput(): ArrayBuffer;
  }
  /**
   * XmlSerializer接口用于生成XML文件。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   * @name XmlSerializer
   */
  class XmlSerializer {
    /**
     * XmlSerializer的构造函数。
     * 
     * > **说明：**
     * >
     * > buffer是开发者根据需要自定义大小的缓存区域，用于临时存储生成的XML文本。在使用过程中必须确保缓存区域足以容纳生成的文本内容。
     *
     * @param { ArrayBuffer | DataView } buffer - 用于接收写入XML信息的ArrayBuffer或DataView内存。
     * @param { string } [encoding] - 编码格式，默认'utf-8'（目前仅支持'utf-8'）。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    constructor(buffer: ArrayBuffer | DataView, encoding?: string);

    /**
     * 添加元素的属性和属性值。
     * 
     * > **说明：**
     * >
     * > 该接口对所添加数据不做标准XML校验处理，确保所添加的数据符合标准XML规范。例如不允许添加数字开头的属性名称以及添加多个同名的属性名称。
     *
     * @param { string } name - 属性。
     * @param { string } value - 属性值。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    setAttributes(name: string, value: string): void;

    /**
     * 添加一个空元素。
     * 
     * > **说明：**
     * >
     * > 该接口对所添加数据不做标准XML校验处理，确保所添加的数据符合标准XML规范。例如不允许添加数字开头的元素名称。
     *
     * @param { string } name - 元素的名称。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    addEmptyElement(name: string): void;

    /**
     * 设置带有编码信息的文件声明。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    setDeclaration(): void;

    /**
     * 根据给定名称添加元素开始标记。
     * 
     * > **说明：**
     * >
     * > - 调用该接口后须调用[endElement]{@link xml.XmlSerializer#endElement}写入元素结束标记，以确保节点正确闭合。
     * >
     * > - 该接口对所添加数据不做标准XML校验处理，请确保所添加的数据符合标准XML规范。比如不允许添加数字开头的元素名称。
     *
     * @param { string } name - 当前元素的元素名。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    startElement(name: string): void;

    /**
     * 添加元素结束标记。
     * 
     * > **说明：**
     * >
     * > 调用该接口前必须先调用[startElement]{@link xml.XmlSerializer#startElement}接口写入元素开始标记。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    endElement(): void;

    /**
     * 添加当前元素标记的命名空间。
     * 
     * > **说明：**
     * >
     * > 该接口对所添加数据不做标准XML校验处理，请确保所添加的数据符合标准XML规范。例如禁止添加数字开头的前缀以及为同一个元素设置多个命名空间。
     *
     * @param { string } prefix - 当前元素及其子元素的前缀。
     * @param { string } namespace - 当前元素及其子元素的命名空间。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    setNamespace(prefix: string, namespace: string): void;

    /**
     * 添加注释内容。
     *
     * @param { string } text - 当前元素的注释内容。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    setComment(text: string): void;

    /**
     * 提供在CDATA标签中添加数据的能力，所生成的CDATA标签结构为："\<!\[CDATA\[" + 所添加的数据 + "\]\]\>"。
     * 
     * > **说明：**
     * >
     * > 该接口对所添加数据不做标准XML校验处理，请确保所添加的数据符合标准XML规范。比如不允许在CDATA标签中添加包含"\]\]\>"字符串的数据。
     *
     * @param { string } text - CDATA属性的内容。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    setCDATA(text: string): void;

    /**
     * 添加标签值。
     *
     * @param { string } text - text属性的内容。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    setText(text: string): void;

    /**
     * 添加文档类型。
     *
     * @param { string } text - DocType属性的内容。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    setDocType(text: string): void;
  }

  /**
   * 事件类型枚举。
   * 
   * **ArkTS-Dyn起始版本：** 8
   * 
   * **ArkTS-Sta起始版本：** 23
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  enum EventType {
    /**
     * 启动文件事件。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    START_DOCUMENT,
    /**
     * 结束文件事件。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    END_DOCUMENT,
    /**
     * 启动标签事件。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    START_TAG,
    /**
     * 结束标签事件。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    END_TAG,
    /**
     * 文本事件。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    TEXT,
    /**
     * CDATA事件。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    CDSECT,
    /**
     * XML注释事件。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    COMMENT,
    /**
     * XML文档类型声明事件。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    DOCDECL,
    /**
     * XML处理指令声明事件。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    INSTRUCTION,
    /**
     * 实体引用事件。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    ENTITY_REFERENCE,
    /**
     * 空白事件。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    WHITESPACE
  }

  /**
   * 当前XML解析信息。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface ParseInfo {
    /**
     * ArkTS-Sta: getColumnNumber(): int
     * 
     * 获取当前列号，从1开始计数。
     *
     * @returns { int } 返回当前列号。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    getColumnNumber(): int;
    /**
     * ArkTS-Sta: getDepth(): int
     * 
     * 获取元素的当前深度。
     * 
     * > **说明：**
     * >
     * > 标签内的空白事件深度与标签的深度保持一致。
     *
     * @returns { int } 返回元素的当前深度。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    getDepth(): int;
    /**
     * ArkTS-Sta: getLineNumber(): int
     * 
     * 获取当前行号，从1开始。
     *
     * @returns { int } 返回当前行号。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    getLineNumber(): int;
    /**
     * 获取当前元素名称。
     *
     * @returns { string } 返回当前元素名称。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    getName(): string;
    /**
     * 获取当前元素的命名空间。
     *
     * @returns { string } 返回当前元素的命名空间。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    getNamespace(): string;
    /**
     * 获取当前元素前缀。
     *
     * @returns { string } 返回当前元素前缀。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    getPrefix(): string;
    /**
     * 获取当前事件的文本内容。
     *
     * @returns { string } 返回当前事件的文本内容。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    getText(): string;
    /**
     * 判断当前元素是否为空元素。
     *
     * @returns { boolean } 返回true，表示当前元素为空元素。返回false，表示当前元素为非空元素。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    isEmptyElementTag(): boolean;
    /**
     * 判断当前事件是否仅包含空格字符。
     *
     * @returns { boolean } 返回true，表示当前文本事件仅包含空格字符。返回false，表示当前文本事件包含非空格字符。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    isWhitespace(): boolean;
    /**
     * ArkTS-Sta: getAttributeCount(): int
     * 
     * 获取当前开始标记的属性数。
     *
     * @returns { int }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    getAttributeCount(): int;
  }

  /**
   * XML解析选项。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  interface ParseOptions {
    /**
     * 是否解析文档类型，false表示不解析文档类型，true表示解析文档类型，默认值false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    supportDoctype?: boolean;

    /**
     * 是否忽略命名空间，忽略命名空间后，将不会对其进行解析。true表示忽略命名空间，false表示不忽略命名空间，默认值false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    ignoreNameSpace?: boolean;

    /**
     * 解析开始标签、标签值和结束标签，默认值undefined，表示不解析。   
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    tagValueCallbackFunction?: (name: string, value: string) => boolean;

    /**
     * 解析属性和属性值，默认值undefined，表示不解析。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    attributeValueCallbackFunction?: (name: string, value: string) => boolean;

    /**
     * 解析tagName标签，默认值undefined，表示不解析。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 24 static
     */
    attributeWithTagCallbackFunction?: AttributeWithTagCb;

    /**
     * 解析元素事件类型([EventType]{@link xml.EventType})和[ParseInfo]{@link xml.ParseInfo}属性，默认值undefined，表示不解析。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    tokenValueCallbackFunction?: (eventType: EventType, value: ParseInfo) => boolean;
  }

  /**
   * ParseOptions中attributeWithTagCallbackFunction的回调方法，三个字符串参数都是由XML解析器在解析过程中自动提取的，开发者无法直接自定义这些值。开发者只能在回调函数中通过返回值来决定如何处
   * 理这些已存在的属性。
   *
   * @param { string } tagName - 当前属性所属XML元素的标签名。
   * @param { string } key - 当前属性所属XML元素的名称。
   * @param { string } value - 当前属性所属XML元素的值。
   * @returns { boolean } 是否继续解析xml数据，true表示继续解析数据，false表示结束解析。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 22]
   * @atomicservice
   * @since 20 dynamic
   * @since 24 static
   */
  type AttributeWithTagCb = (tagName: string, key: string, value: string) => boolean;

  /**
   * XmlPullParser接口用于解析现有的XML文件。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   * @name XmlPullParser
   */
  class XmlPullParser {
    /**
     * 构造并返回一个XmlPullParser对象。
     *
     * @param { ArrayBuffer | DataView } buffer - 用于解析的XML文本信息。
     * @param { string } [encoding] - 编码格式，默认'utf-8'（目前仅支持'utf-8'）。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    constructor(buffer: ArrayBuffer | DataView, encoding?: string);

    /**
     * 该接口用于解析XML。
     *
     * @param { ParseOptions } option - XML解析选项。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamiconly
     * @deprecated since 14
     * @useinstead ohos.xml.XmlPullParser.parseXml
     */
    parse(option: ParseOptions): void;

    /**
     * 解析XML。
     *
     * @param { ParseOptions } option - XML解析选项。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    parseXml(option: ParseOptions): void;
  }

  /**
   * XmlSAXParser类用于以流式方式解析XML文本。适用于需要边读取边处理的场景，支持从[stream.Readable]{@link @ohos.util.stream:stream.Readable} 流中读取XML数据并
   * 进行解析。
   * 
   * > **说明：**
   * >
   * > - 本接口采用流式解析的方式，理论上可以解析任意大小的XML文本。但考虑到实际性能表现，建议单次解析的数据大小不超过300MB，以避免解析时间过长影响使用体验。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   * @name XmlSAXParser
   */
  class XmlSAXParser {
    /**
     * XmlSAXParser的构造函数。
     * 
     * > **说明：**
     * >
     * > - `inputStream`参数必须传入继承自[Readable]{@link @ohos.util.stream:stream.Readable}且实现
     * > [Doread]{@link @ohos.util.stream:stream.Readable#doRead}的类。可以传入其他模块中满足该条件的类，如
     * > [ReadStream]{@link @ohos.file.fs:ReadStream}。
     *
     * @param { stream.Readable } inputStream - 用于读取XML数据的可读流实例。
     * @param { string } [encoding] - 编码格式，默认为'utf-8'（目前仅支持'utf-8'）。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    constructor(inputStream: stream.Readable, encoding?: string);

    /**
     * 使用SAX（Simple API for XML）方式解析XML数据。
     * 
     * > **说明：**
     * >
     * > - 在调用parse函数后，用户可以通过控制流的方式来控制解析进度。任意数据块被推入后，解析器会解析相应的进度。具体流控制方式详见
     * > [@ohos.util.stream (数据流基类stream)]{@link @ohos.util.stream:stream}。
     * >
     * > - 可以配合自动控制数据的流使用，如[ReadStream]{@link @ohos.file.fs:ReadStream}，此时用户不再需要手动控制数据。
     * >
     * > - parse接口注册了流的on监听器，会自动读取流中的数据。不建议再对流的监听器进行操作或者读取数据，以免发生冲突导致接口能力失效。
     *
     * @param { XmlSAXHandler } xmlSAXHandler - SAX处理器对象。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    parse(xmlSAXHandler: XmlSAXHandler): void;
  }

  /**
   * XmlSAXHandler定义了SAX解析xml文本时的回调方法。开发者需要实现这些回调方法来处理xml文本的不同部分。这些回调方法会在xml解析过程的对应时机触发。startDocument会在开始解析文档时触发，
   * endDocument会在结束文档解析时触发，startElement会在开始解析元素时触发，endElement会在结束解析元素时触发，characters则会在解析元素间文本内容时触发。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface XmlSAXHandler {
    /**
     * 当解析器在XML文本开始解析时触发的回调函数。该回调函数需要开发者自行实现。具体使用示例可见[characters<sup>24+</sup>]{@link xml.XmlSAXHandler.characters}。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    startDocument(): void;

    /**
     * 当解析器在XML文本结束解析时触发的回调函数。该回调函数需要开发者自行实现。具体使用示例可见[characters<sup>24+</sup>]{@link xml.XmlSAXHandler.characters}。
     * 
     * > **说明：**
     * >
     * > 当可读流结束时触发此回调。在stream中调用push()，传入null值，从而触发该回调。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    endDocument(): void;

    /**
     * 当解析器在XML文本中元素开始解析时触发的回调函数。该回调函数需要开发者自行实现。具体使用示例可见[characters<sup>24+</sup>]{@link xml.XmlSAXHandler.characters}。
     *
     * @param { string } elementName - 解析器回传的元素名称（不包含命名空间前缀）。例如，对于`<ns2:child>`，elementName为"child"。
     * @param { string | undefined } namespaceURI - 解析器回传的命名空间URI。例如，对于`xmlns:ns2="http://example.com/ns2"`，namespaceURI
     *     为`"http://example.com/ns2"`。如果元素没有命名空间则为undefined。
     * @param { string | undefined } qName - 解析器回传的元素限定名（包含命名空间前缀）。例如，对于`<ns2:child>`，qName为"ns2:child"。如果元素没有命名空间则qName
     *     为undefined。
     * @param { Map<string,string> } attributes - 解析器回传的元素的属性映射表，键为属性名（可能包含命名空间前缀，如"ns2:attrA"），值为属性值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    startElement(elementName: string, namespaceURI: string | undefined, qName: string | undefined, attributes: Map<string,string>): void;

    /**
     * 当解析器在XML文本中元素结束解析触发的回调函数。该回调函数需要开发者自行实现。具体使用示例可见[characters<sup>24+</sup>]{@link xml.XmlSAXHandler.characters}。
     *
     * @param { string } elementName - 解析器回传的元素名称（不包含命名空间前缀）。例如，对于`<ns2:child>`，elementName为"child"。
     * @param { string | undefined } namespaceURI - 解析器回传的命名空间URI。例如，对于`xmlns:ns2="http://example.com/ns2"`，namespaceURI
     *     为`"http://example.com/ns2"`。如果元素没有命名空间则为undefined。
     * @param { string | undefined } qName - 解析器回传的元素限定名（包含命名空间前缀）。例如，对于`<ns2:child>`，qName为"ns2:child"。如果元素没有命名空间则qName
     *     为undefined。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    endElement(elementName: string, namespaceURI: string | undefined, qName: string | undefined): void;

    /**
     * 当解析器在XML元素内部遇到文本内容时调用的回调函数。该回调函数需要开发者自行实现。
     *
     * @param { string } content - 解析器回传元素中的文本内容。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    characters(content: string): void;
  }
}
export default xml;