/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

'use static';
/**
 * @file
 * @kit ArkTS
 * @arkts 1.2
 */

/**
 * The xml module provides utilities for converting XML text to Javascript object, XML generation and parsing.
 *
 * @namespace xml
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare namespace xml {
  /**
   * The XmlSerializer interface is used to generate an xml file.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @name XmlSerializer
   */
  class XmlSerializer {
    /**
     * A parameterized constructor used to create a new XmlSerializer instance.
     * As the input parameter of the constructor function, init supports three types.
     * The input parameter is an Arrarybuffer.
     * The input parameter is a DataView.
     * The input parameter is an encoding format of string type.
     *
     * @param { ArrayBuffer | DataView } buffer - A instance, the new XmlPullParser with.
     * @param { string } [encoding] - [encoding='utf8']  this is its encoding.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor(buffer: ArrayBuffer | DataView, encoding?: string);

    /**
     * Write an attribute.
     *
     * @param { string } name - Key name of the attribute.
     * @param { string } value - Values of attribute.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setAttributes(name: string, value: string): void;

    /**
     * Add an empty element.
     *
     * @param { string } name - Key name of the attribute.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    addEmptyElement(name: string): void;

    /**
     * Writes xml declaration with encoding. For example: <?xml version="1.0" encoding="utf-8"?>.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setDeclaration(): void;

    /**
     * Writes a element start tag with the given name.
     *
     * @param { string } name - Name of the element.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    startElement(name: string): void;

    /**
     * Writes end tag of the element.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    endElement(): void;

    /**
     * Writes the namespace of the current element tag.
     *
     * @param { string } prefix - Values name of the prefix.
     * @param { string } xmlNamespace - Values of namespace.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setNamespace(prefix: string, xmlNamespace: string): void;

    /**
     * Writes the comment.
     *
     * @param { string } text - Values of comment.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setComment(text: string): void;

    /**
     * Writes the CDATA.
     *
     * @param { string } text - Values of CDATA.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setCDATA(text: string): void;

    /**
     * Writes the text.
     *
     * @param { string } text - Values of text.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setText(text: string): void;

    /**
     * Writes the DOCTYPE.
     *
     * @param { string } text - Values of docType.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setDocType(text: string): void;
  }

  /**
   * The event types represented by XML elements.
   *
   * @enum { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  enum EventType {
    /**
     * Start a document.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    START_DOCUMENT,
    /**
     * End a document.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    END_DOCUMENT,
    /**
     * Start a tag.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    START_TAG,
    /**
     * End a tag.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    END_TAG,
    /**
     * Character data.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    TEXT,
    /**
     * A CDATA sections.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    CDSECT,
    /**
     * An XML comment.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    COMMENT,
    /**
     * An XML document type declaration.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    DOCDECL,
    /**
     * An XML processing instruction declaration.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    INSTRUCTION,
    /**
     * An entity reference.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ENTITY_REFERENCE,
    /**
     * A whitespace.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    WHITESPACE
  }

  /**
   * The current parse info.
   *
   * @typedef ParseInfo
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  interface ParseInfo {
    /**
     * The current column number, starting from 1.
     *
     * @returns { number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getColumnNumber(): number;

    /**
     * The current depth of the element.
     *
     * @returns { number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getDepth(): number;

    /**
     * The current line number, starting from 1.
     *
     * @returns { number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getLineNumber(): number;

    /**
     * The current element's name.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getName(): string;

    /**
     * The current element's namespace.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getNamespace(): string;

    /**
     * The current element's prefix.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getPrefix(): string;

    /**
     * The text content of the current event as String.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getText(): string;

    /**
     * Returns true if the current element is empty.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    isEmptyElementTag(): boolean;

    /**
     * Checks whether the current TEXT event contains only whitespace characters.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    isWhitespace(): boolean;

    /**
     * Returns the number of attributes of the current start tag.
     *
     * @returns { number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getAttributeCount(): number;
  }

  /**
   * Parse options for XmlPullParser.
   *
   * @typedef ParseOptions
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  interface ParseOptions {
    /**
     * Whether to parsing Doctype of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    supportDoctype?: boolean;

    /**
     * Whether to ignore parsing texts of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    ignoreNameSpace?: boolean;

    /**
     * Tag value callback function.
     *
     * @type { ?function }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    tagValueCallbackFunction?: (name: string, value: string) => boolean;

    /**
     * Attribute value callback function.
     *
     * @type { ?function }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    attributeValueCallbackFunction?: (name: string, value: string) => boolean;

    /**
     * Token value callback function.
     *
     * @type { ?function }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    tokenValueCallbackFunction?: (eventType: EventType, value: ParseInfo) => boolean;
  }

  /**
   * The XmlPullParser interface is used to parse the existing xml file.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20
   * @name XmlPullParser
   */
  class XmlPullParser {
    /**
     * A constructor used to create a new XmlPullParser instance.
     *
     * @param { ArrayBuffer | DataView } bufferIn - A instance, the new XmlPullParser with.
     * @param { string } [encoding] - [encoding='utf8']  this is its encoding.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor(bufferIn: ArrayBuffer | DataView, encoding?: string);

    /**
     * Parse the XML file from XmlPullParser.
     *
     * @param { ParseOptions } option - Parse options for XmlPullParser, the interface including
     * two Boolean variables and three callback functions.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    parseXml(option: ParseOptions): void;
  }
}
export default xml;