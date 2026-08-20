'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * 表示解引用空指针时发生的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
class NullPointerError extends Error {
    /**
     * 使用给定的错误信息和错误特定信息构造一个NullPointerError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
}

/**
 * 错误选项接口。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export interface ErrorOptions {
    /**
     * 指定错误的原因。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    cause?: Object;
}

/**
 * 用于表示错误的Error类。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Error {
    /**
     * 获取该错误的名称。
     *
     * @returns { string } 错误名称。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get name(): string;

    /**
     * 设置该错误的名称。
     *
     * @param { string } val - 新的名称。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    set name(val: string);

    /**
     * 获取该错误的错误码。
     *
     * @returns { int } 错误码。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get code(): int;

    /**
     * 设置该错误的错误码。
     *
     * @param { int } val - 新的错误码。
     *     <br>取值约束：应为整数。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    set code(val: int);

    /**
     * 获取该错误的错误信息。
     *
     * @returns { string } 错误信息。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get message(): string;

    /**
     * 设置该错误的错误信息。
     *
     * @param { string } val - 新的错误信息。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    set message(val: string);

    /**
     * 获取该错误的原因。
     *
     * @returns { Object | undefined } 错误原因。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get cause(): Object | undefined;

    /**
     * 设置该错误的原因。
     *
     * @param { Object | undefined } val - 新的错误原因。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    set cause(val: Object | undefined);

    /**
     * 使用给定的错误码、错误信息和原因构造一个新的错误实例。
     *
     * @param { int } code - 错误码。
     *     <br>取值约束：应为整数。
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(code: int, message?: string, options?: ErrorOptions);

    /**
     * 使用给定的错误信息和原因构造一个新的错误实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * 使用给定的名称、错误码、错误信息和选项构造一个新的错误实例。
     *
     * @param { string } name - 错误名称。
     * @param { int } code - 错误码。
     *     <br>取值约束：应为整数。
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(name: string, code: int, message?: string, options?: ErrorOptions);

    /**
     * 使用给定的名称、错误信息和选项构造一个新的错误实例。
     *
     * @param { string } name - 错误名称。
     * @param { string | undefined } message - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(name: string, message: string | undefined, options?: ErrorOptions);

    /**
     * 将该错误转换为字符串。
     *
     * @returns { string } 字符串表示。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    toString(): string;

    /**
     * 获取该错误的堆栈信息。
     *
     * @returns { string | undefined } 堆栈信息。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    get stack(): string | undefined;

    /**
     * 设置该错误的堆栈信息。
     *
     * @param { string | undefined } newStack - 新的堆栈信息。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    set stack(newStack: string | undefined);

    /**
     * 创建一个新的错误实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @returns { Error } 新的Error实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): Error;
}
