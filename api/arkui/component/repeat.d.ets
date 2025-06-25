/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */


import { memo, ComponentBuilder } from './../stateManagement/runtime'

/**
 * Indicates the type of Repeat's Data Source.
 *
 * @typedef { Array<T> | ReadonlyArray<T> | Readonly<Array<T>> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
type RepeatArray<T> = Array<T> | ReadonlyArray<T> | Readonly<Array<T>>;
/**
 * Function that return typed string to render one template.
 *
 * @typedef {function} TemplateTypedFunc<T>
 * @param { T } item - data item.
 * @param {number} index - data index number in array.
 * @returns { string } template type.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
type TemplateTypedFunc<T> = (item: T, index: number) => string;
/**
 * Define builder function to render one template type.
 *
 * @typedef {function} RepeatItemBuilder<T>
 * @param { RepeatItem<T> } repeatItem - the repeat item builder function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
@memo
type RepeatItemBuilder<T> = (repeatItem: RepeatItem<T>) => void;

/**
 * Construct a new type for each item.
 *
 * @interface RepeatItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export interface RepeatItem<T> {
    /**
     * The origin data.
     *
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    item: T;
    /**
     * index of each item.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    index: number;
}

/**
 * Define the options of repeat virtualScroll to implement reuse and lazy loading.
 *
 * @interface VirtualScrollOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface VirtualScrollOptions {
    /**
     * Total data count.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    totalCount?: number;
    /**
     * Reuse or not.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    reusable?: boolean;
    /**
     * Data lazy loading
     *
     * @param { number } index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onLazyLoading?: (index: number) => void;
    /**
     * The function of total data count.
     *
     * @returns { number } Returns the total data count.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onTotalCount?: () => number;
}

/**
 * Define a builder template option parameter.
 *
 * @interface TemplateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface TemplateOptions {
    /**
     * The cached number of each template.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    cachedCount?: number;
}

/**
 * Defines the Repeat component attribute functions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
export interface RepeatAttribute<T> {
    /**
     * Executes itemGenerator of each item.
     *
     * @param { RepeatItemBuilder<T> } itemGenerator
     * @returns { RepeatAttribute<T> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    each(itemGenerator: RepeatItemBuilder<T>): this;
    /**
     * Obtains key of each item.
     *
     * @param { function } keyGenerator
     * @returns { RepeatAttribute<T> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    key(keyGenerator: (item: T, index: number) => string): this;
    /**
     * Enable UI lazy loading when scroll up or down.
     *
     * @param { VirtualScrollOptions } virtualScrollOptions that defines the options of repeat virtual scroll to
     * implement reuse and lazy loading.
     * @returns { RepeatAttribute<T> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    virtualScroll(virtualScrollOptions?: VirtualScrollOptions): this;
    /**
     * Type builder function to render specific type of data item.
     *
     * @param { string } type that defines the template id.
     * @param { RepeatItemBuilder<T> } itemBuilder that defines UI builder function.
     * @param { TemplateOptions } templateOptions that defines a builder template option parameter.
     * @returns { RepeatAttribute<T> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    template(type: string, itemBuilder: RepeatItemBuilder<T>, templateOptions?: TemplateOptions): this;
    /**
     * Typed function to render specific type of data item.
     *
     * @param { TemplateTypedFunc<T> } typedFunc that define template typed function.
     * @returns { RepeatAttribute<T> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    templateId(typedFunc: TemplateTypedFunc<T>): this;
}

/**
 * Indicates the type of Repeat.
 *
 * @typedef { function } RepeatInterface
 * @param { RepeatArray<T> } arr - The Data Source
 * @returns { RepeatAttribute<T> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
@memo
@ComponentBuilder
export declare function Repeat<T>(arr: RepeatArray<T>): RepeatAttribute<T>