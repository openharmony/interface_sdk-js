/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @arkts 1.2
 */


import { CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { VoidCallback } from "./units";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * PluginComponentTemplate
 *
 * @interface PluginComponentTemplate
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export interface PluginComponentTemplate {
    /**
     * Defines the plugin source name.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    source: string;
    /**
     * Defines the bundle name of the Template.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    bundleName: string;
}
/**
 * Define options used to construct a plugin component.
 *
 * @interface PluginComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface PluginComponentOptions {
    /**
     * Plugin component template.
     * @type { PluginComponentTemplate }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    template: PluginComponentTemplate;
    /**
     * Plugin component data.
     * @type { any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    data: Object | undefined | null;
}
/**
 * Data provided when an error occurs.
 *
 * @interface PluginErrorData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface PluginErrorData {
    /**
     * Error code.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    errcode: number;
    /**
     * Error message.
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    msg: string;
}
/**
 * Callback invoked when an error occurs.
 *
 * @typedef { function } PluginErrorCallback
 * @param { PluginErrorData } info - Plugin error data
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export type PluginErrorCallback = (info: PluginErrorData) => void;
export declare interface PluginComponentAttribute extends CommonMethod {
    /**
     * PluginComponent onComplete callback
     *
     * @param { VoidCallback } callback
     * @returns { PluginComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    onComplete(callback: VoidCallback | undefined): this;
    /**
     * PluginComponent onError callback
     *
     * @param { PluginErrorCallback } callback
     * @returns { PluginComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    onError(callback: PluginErrorCallback | undefined): this;
    attributeModifier(modifier: AttributeModifier<PluginComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIPluginComponentAttribute extends UICommonMethod {
    /**
     * PluginComponent onComplete callback
     *
     * @param { VoidCallback } callback
     * @returns { PluginComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    onComplete(callback: VoidCallback | undefined): this;
    /**
     * PluginComponent onError callback
     *
     * @param { PluginErrorCallback } callback
     * @returns { PluginComponentAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    @memo
    onError(callback: PluginErrorCallback | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<PluginComponentAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function PluginComponent(
    options: PluginComponentOptions, 
    @memo
    content_?: () => void,
): UIPluginComponentAttribute