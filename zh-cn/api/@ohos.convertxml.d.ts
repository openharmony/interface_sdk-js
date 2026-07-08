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
 * @file
 * @kit ArkTS
 */

/**
 * 本模块提供将XML文本转换为JavaScript对象的解析能力。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare namespace xml {
  /**
   * 转换选项。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  interface ConvertOptions {
    /**
     * 是否修剪位于文本前后的空白字符，true表示xml文本前后的空白字符将会被修剪，false则表示空白字符会被保留。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    trim: boolean;
    /**
     * 是否忽略xml写入声明指示，true表示忽略xml写入声明指示，false则相反，默认false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    ignoreDeclaration?: boolean;
    /**
     * 是否忽略xml的写入处理指令，true表示忽略xml的写入处理指令，false则相反，默认false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    ignoreInstruction?: boolean;
    /**
     * 是否忽略元素的属性信息，true表示忽略元素的属性信息，false则相反，默认false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    ignoreAttributes?: boolean;
    /**
     * 是否忽略元素的注释信息，true表示忽略元素的注释信息，false则相反，默认false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    ignoreComment?: boolean;
    /**
     * 是否忽略元素的CDATA信息，true表示忽略元素的CDATA信息，false则相反，默认false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    ignoreCDATA?: boolean;
    /**
     * 是否忽略元素的Doctype信息，true表示忽略元素的Doctype信息，false则相反，默认false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    ignoreDoctype?: boolean;
    /**
     * 是否忽略元素的文本信息，true表示忽略元素的文本信息，false则相反，默认false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    ignoreText?: boolean;
    /**
     * 用于输出对象中declaration的属性键的名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    declarationKey: string;
    /**
     * 用于输出对象中instruction的属性键的名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    instructionKey: string;
    /**
     * 用于输出对象中attributes的属性键的名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    attributesKey: string;
    /**
     * 用于输出对象中text的属性键的名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    textKey: string;
    /**
     * 用于输出对象中cdata的属性键的名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    cdataKey: string;
    /**
     * 用于输出对象中doctype的属性键的名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    doctypeKey: string;
    /**
     * 用于输出对象中comment的属性键的名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    commentKey: string;
    /**
     * 用于输出对象中parent的属性键的名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    parentKey: string;
    /**
     * 用于输出对象中type的属性键的名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    typeKey: string;
    /**
     * 用于输出对象中name的属性键的名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    nameKey: string;
    /**
     * 用于输出对象中elements的属性键的名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    elementsKey: string;
  }

  /**
   * ConvertXML 表示可扩展标记语言。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  class ConvertXML {
    /**
     * 转换XML文本为JavaScript对象。
     *
     * @param { string } xml - 传入的XML文本。
     * @param { ConvertOptions } options - 转换选项，默认值是ConvertOptions对象，由其中各个属性的默认值组成。
     * @returns { Object } 处理后返回的JavaScript对象。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead xml.ConvertXML#fastConvertToJSObject
     */
    convert(xml: string, options?: ConvertOptions): Object;

    /**
     * 转换XML文本为Object类型对象。
     *
     * @param { string } xml - 传入的XML文本，若包含"&"字符，请使用实体引用 **&amp;** 替换。
     * @param { ConvertOptions } [options] - 转换选项，默认值是ConvertOptions对象，由其中各个属性的默认值组成。
     * @returns { Object } 处理后返回的JavaScript对象。
     * @throws { BusinessError } 10200002 - Invalid xml string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 14
     * @useinstead xml.ConvertXML#fastConvertToJSObject
     */
    convertToJSObject(xml: string, options?: ConvertOptions): Object;

    /**
     * 转换XML文本为Object类型对象。
     *
     * > **说明**
     * >
     * > - 该接口无法满足解析大数据量的XML文件，当单元素文本内容超过10M时，会打印异常信息并返回一个仅包含XML标签头的基础Object对象。
     * >
     * > - 在Windows环境中，通常以回车符（CR）和换行符（LF）一对字符来表示换行。fastConvertToJSObject接口转换后的对象以换行符（LF）表示换行。
     *
     * @param { string } xml - XML文本，若包含"&"字符，请使用实体引用 **&amp;** 替换。
     * @param { ConvertOptions } [options] - 转换选项，默认值是ConvertOptions对象，由其中各个属性的默认值组成。
     * @returns { Object } 转换后的JavaScript对象。
     * @throws { BusinessError } 10200002 - Invalid xml string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    fastConvertToJSObject(xml: string, options?: ConvertOptions): Object;

    /**
     * 将XML文本转换为Object类型对象，此方法支持解析单个节点大小超过10M的大型XML文本。
     *
     * @param { string } xml - XML文本，若包含"&"字符，请使用实体引用 &amp; 替换。
     * @param { ConvertOptions } [options] - 转换选项，默认值是ConvertOptions对象，由其中各个属性的默认值组成。
     * @returns { Object } 转换后的JavaScript对象。
     * @throws { BusinessError } 10200002 - Invalid xml string.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    largeConvertToJSObject(xml: string, options?: ConvertOptions): Object;
  }
}

export default xml;
