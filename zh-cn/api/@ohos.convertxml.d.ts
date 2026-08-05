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
 * 本模块提供将XML文本转换为JavaScript对象的解析能力，适用于XML配置文件解析、XML格式网络数据处理、数据迁移与格式转换等场景。
 * 转换过程中，XML的各类组件（声明、指令、元素、属性、文本、CDATA、注释和Doctype等）会按照ConvertOptions中配置的键名映射为JavaScript对象的属性，
 * 形成层级嵌套的对象结构，简化了XML数据的处理流程，支持通过ConvertOptions自定义键名映射实现灵活的输出结构。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare namespace xml {
  /**
   * 转换选项，用于自定义XML到JavaScript对象的转换行为，如控制是否修剪空白字符、是否忽略特定组件（声明、指令、属性、注释、CDATA、Doctype和文本等），
   * 以及指定输出对象中各类型组件的属性键名称。
   *
   * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
   */
  interface ConvertOptions {
    /**
     * 是否修剪位于文本内容前后的空白字符，true表示元素内文本内容前后的空白字符将会被修剪，false则表示空白字符会被保留，默认false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    trim: boolean;
    /**
     * 是否忽略XML声明，true表示忽略XML声明，false表示保留XML声明，默认false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    ignoreDeclaration?: boolean;
    /**
     * 是否忽略XML处理指令，true表示忽略XML处理指令，false表示保留XML处理指令，默认false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    ignoreInstruction?: boolean;
    /**
     * 是否忽略元素的属性信息，true表示忽略元素的属性信息，false表示保留元素的属性信息，默认false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    ignoreAttributes?: boolean;
    /**
     * 是否忽略元素的注释信息，true表示忽略元素的注释信息，false表示保留元素的注释信息，默认false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    ignoreComment?: boolean;
    /**
     * 是否忽略元素的CDATA（Character Data）信息，true表示忽略元素的CDATA信息，false表示保留元素的CDATA信息，默认false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    ignoreCDATA?: boolean;
    /**
     * 是否忽略Doctype（Document Type Declaration）信息，true表示忽略元素的Doctype信息，false表示保留元素的Doctype信息，默认false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    ignoreDoctype?: boolean;
    /**
     * 是否忽略元素的文本信息，true表示忽略元素的文本信息，false表示保留元素的文本信息，默认false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    ignoreText?: boolean;
    /**
     * 用于输出对象中declaration的属性键的名称，仅在ignoreDeclaration为false时生效。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    declarationKey: string;
    /**
     * 用于输出对象中instruction的属性键的名称，仅在ignoreInstruction为false时生效。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    instructionKey: string;
    /**
     * 用于输出对象中attributes的属性键的名称，仅在ignoreAttributes为false时生效。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    attributesKey: string;
    /**
     * 用于输出对象中text的属性键的名称，仅在ignoreText为false时生效。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    textKey: string;
    /**
     * 用于输出对象中cdata的属性键的名称，仅在ignoreCDATA为false时生效。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    cdataKey: string;
    /**
     * 用于输出对象中doctype的属性键的名称，仅在ignoreDoctype为false时生效。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    doctypeKey: string;
    /**
     * 用于输出对象中comment的属性键的名称，仅在ignoreComment为false时生效。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    commentKey: string;
    /**
     * 用于输出对象中parent的属性键的名称，parent表示当前元素所属的父元素名称。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    parentKey: string;
    /**
     * 用于输出对象中type的属性键的名称，type标识XML组件的类型（如element、text、cdata、comment、instruction等）。
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
   * ConvertXML类提供将XML文本转换为JavaScript对象的能力。
   * 推荐使用[fastConvertToJSObject<sup>14+</sup>]{@link xml.ConvertXML#fastConvertToJSObject}进行常规XML文本解析，
   * 当单元素文本内容超过10M时推荐使用[largeConvertToJSObject<sup>23+</sup>]{@link xml.ConvertXML#largeConvertToJSObject}。
   * 已废弃的[convertToJSObject]{@link xml.ConvertXML#convertToJSObject}和[convert]{@link xml.ConvertXML#convert}方法不再维护，
   * 建议使用[fastConvertToJSObject<sup>14+</sup>]{@link xml.ConvertXML#fastConvertToJSObject}替代。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  class ConvertXML {
    /**
     * 将XML文本转换为Object类型对象。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [fastConvertToJSObject<sup>14+</sup>]{@link xml.ConvertXML#fastConvertToJSObject}替代。
     *
     * @param { string } xml - XML文本，需符合XML语法规范，若包含"&"字符，请使用实体引用"&amp;"替换。
     * @param { ConvertOptions } options - 转换选项，用于自定义XML转换行为。不传入时使用ConvertOptions各属性的默认值。
     * @returns { Object } 转换后的JavaScript对象，包含解析后的XML结构信息，具体属性键名由ConvertOptions定义。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead xml.ConvertXML#fastConvertToJSObject
     */
    convert(xml: string, options?: ConvertOptions): Object;

    /**
     * 将XML文本转换为Object类型对象，适用于XML配置文件解析、数据格式转换等场景。该方法将XML文本解析为层级嵌套结构，各XML组件按ConvertOptions中配置的键名映射为对象的属性。
     *
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 14开始废弃，建议使用
     * > [fastConvertToJSObject<sup>14+</sup>]{@link xml.ConvertXML#fastConvertToJSObject}替代。
     *
     * @param { string } xml - XML文本，需符合XML语法规范，若包含"&"字符，请使用实体引用"&amp;"替换。
     * @param { ConvertOptions } [options] - 转换选项，用于自定义XML转换行为。不传入时使用ConvertOptions各属性的默认值。
     * @returns { Object } 转换后的JavaScript对象，包含解析后的XML结构信息，具体属性键名由ConvertOptions定义。
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
     * 将XML文本转换为Object类型对象，适用于XML配置文件解析、数据报文处理等场景。该方法将XML文本解析为层级嵌套结构，各XML组件按ConvertOptions中配置的键名映射为对象的属性。
     * 当单元素文本内容超过10M时，建议使用[largeConvertToJSObject<sup>23+</sup>]{@link xml.ConvertXML#largeConvertToJSObject}替代。
     *
     * > **说明：**
     * >
     * > 该接口无法满足解析单元素文本内容超过10M的XML文件，当单元素文本内容超过10M时，会输出异常日志信息并返回一个仅包含XML声明的基础Object对象。
     * > 如需解析单元素文本内容超过10M的XML文本，建议使用[largeConvertToJSObject<sup>23+</sup>]{@link xml.ConvertXML#largeConvertToJSObject}
     * > 替代。
     * >
     * > 在Windows环境中，通常以回车符（CR）和换行符（LF）一对字符来表示换行。fastConvertToJSObject接口转换后的对象以换行符（LF）表示换行。
     *
     * @param { string } xml - XML文本，需符合XML语法规范，若包含"&"字符，请使用实体引用"&amp;"替换。
     *     单元素文本内容超过10M时，输出异常日志并返回仅包含XML声明的基础Object，建议使用largeConvertToJSObject替代。
     * @param { ConvertOptions } [options] - 转换选项，用于自定义XML转换行为。不传入时使用ConvertOptions各属性的默认值。
     * @returns { Object } 转换后的JavaScript对象，用于提供解析后的XML结构信息，具体属性键名由ConvertOptions定义，可通过配置键名访问XML各组件的映射数据。
     * @throws { BusinessError } 10200002 - Invalid xml string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     */
    fastConvertToJSObject(xml: string, options?: ConvertOptions): Object;

    /**
     * 将XML文本转换为Object类型对象，适用于XML日志文件、数据报文等大型XML解析场景。此方法支持解析单元素大小超过10M的大型XML文本，针对大文本场景进行了优化，可有效避免单元素文本过大导致的解析异常。
     * 当[fastConvertToJSObject<sup>14+</sup>]{@link xml.ConvertXML#fastConvertToJSObject}因单元素文本内容超过10M无法正常解析时，
     * 可使用本方法作为替代方案。
     *
     * > **说明：**
     * >
     * > 当传入的XML文本无法正确解析为Object类型对象时，输出异常日志信息并返回一个仅包含XML声明的基础Object对象。
     * >
     * > 在Windows环境中，通常以回车符（CR）和换行符（LF）一对字符来表示换行。本接口转换后的对象以换行符（LF）表示换行。
     *
     * @param { string } xml - XML文本，需符合XML语法规范，若包含"&"字符，请使用实体引用"&amp;"替换。
     * @param { ConvertOptions } [options] - 转换选项，用于自定义XML转换行为。不传入时使用ConvertOptions各属性的默认值。
     * @returns { Object } 转换后的JavaScript对象，包含解析后的XML结构信息，具体属性键名由ConvertOptions定义。
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
