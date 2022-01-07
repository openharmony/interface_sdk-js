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
 * The convertxml module provides utilities for converting XML text to Javascript object.
 * @since 8
 * @sysCap SystemCapability.CCRuntime
 * @devices phone, tablet
 * @import import convertXml from '@ohos.convertxml';
 * @permission N/A
 */
declare namespace xml {
    interface ConvertOptions {
        /**
         * Whether to trim whitespace characters that may exist before and after the text, default false.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        trim: boolean;
        /**
         * Whether to ignore writing declaration directives of xml.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        ignoreDeclaration?: boolean;
        /**
         * Whether to ignore writing processing instruction of xml.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        ignoreInstruction?: boolean;
        /**
         * Whether to print attributes across multiple lines and indent them.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        ignoreAttributes?: boolean;
        /**
         * Whether to ignore writing comments of the elements.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        ignoreComment?: boolean;
        /**
         * Whether to ignore writing CData of the elements.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        ignoreCdata?: boolean;
        /**
         * Whether to ignore writing Doctype of the elements.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        ignoreDoctype?: boolean;
        /**
         * Whether to ignore writing texts of the elements.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        ignoreText?: boolean;
        /**
         * Name of the property key which will be used for the declaration.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        declarationKey: string;
        /**
         * Name of the property key which will be used for the processing instruction.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        instructionKey: string;
        /**
         * Name of the property key which will be used for the attributes.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        attributesKey: string;
        /**
         * Name of the property key which will be used for the text.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        textKey: string;
        /**
         * Name of the property key which will be used for the cdata.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        cdataKey: string;
        /**
         * Name of the property key which will be used for the doctype.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        doctypeKey: string;
        /**
         * Name of the property key which will be used for the comment.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        commentKey: string;
        /**
         * Name of the property key which will be used for the parent.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        parentKey: string;
        /**
         * Name of the property key which will be used for the type.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        typeKey: string;
        /**
         * Name of the property key which will be used for the name.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        nameKey: string;
        /**
         * Name of the property key which will be used for the elements.
         * @since 8
         * @sysCap SystemCapability.CCRuntime
         */
        elementsKey: string;
    }

    interface ConvertXML {
        /**
         * To convert XML text to JavaScript object.
         * @since 8
         * @sysCap SystemCapability.CCRuntime.
         * @param xml The xml text to be converted.
         * @param option Option Inputted by user to set.
         * @return Returns a JavaScript object converting from XML text.
         */
        convert(xml: string, options?: ConvertOptions) : Object;
    }
}
export default xml;