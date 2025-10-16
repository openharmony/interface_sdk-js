'use static';
/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

import { CommonMethod } from './common';
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
import { AttributeModifier, CommonMethod } from "./common";
import { RecordData } from '@ohos.base';

/**
 * Defines the FormLink options.
 *
 * @interface FormLinkOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 */
export declare interface FormLinkOptions {
    /**
     * Action types: "router" and "message".
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    action: string;
    /**
     * Module name of destination UIAbility.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    moduleName?: string;
    /**
     * Bundle name of destination UIAbility.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    bundleName?: string;
    /**
     * Name of destination UIAbility.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    abilityName?: string;
    /**
     * uri of destination UIAbility.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    uri?: string;
    /**
     * The additional parameters, use JSON format key value pairs for content.
     *
     * @type { ?RecordData  }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     */
    params?: RecordData;
}
/**
 * Define the attribute functions of FormLink.
 *
 * @extends CommonMethod
 * @interface FormLinkAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 * @noninterop
 */
export declare interface FormLinkAttribute extends CommonMethod {
    /**
     * Call attributeModifier.
     *
     * @param { AttributeModifier<FormLinkAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { this }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 22 static
     * @noninterop
     */
    default attributeModifier(modifier: AttributeModifier<FormLinkAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines FormLink.
 * @param { FormLinkOptions } options - The form link options
 * @param { function } [content_] - container
 * @returns { FormLinkAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 22 static
 * @noninterop
 */
@memo
@ComponentBuilder
export declare function FormLink(
    options: FormLinkOptions, 
    @memo
    content_?: () => void,
): FormLinkAttribute
