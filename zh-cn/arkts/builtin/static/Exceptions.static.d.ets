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
 * 表示期望获得数据但未提供数据时抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class NoDataError extends Error {
    /**
     * 构造一个NoDataError实例。
     *
     * @param { string } [message] - 错误信息。
     * @param { ErrorOptions } [options] - 错误选项，通常包含错误堆栈信息。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
}


/**
 * 表示传入参数的值超出允许范围时抛出的异常。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ArgumentOutOfRangeError extends Error {
    /**
     * 构造一个ArgumentOutOfRangeError实例。
     *
     * @param { string } [message] - 错误信息。
     * @param { ErrorOptions } [options] - 错误选项，通常包含错误堆栈信息。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
}

/**
 * 表示在非法或不适当的时机调用方法时抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class IllegalStateError extends Error {
    /**
     * 构造一个IllegalStateError实例。
     *
     * @param { string } [message] - 错误信息。
     * @param { ErrorOptions } [options] - 错误选项，
     *     通常包含错误堆栈信息。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
}

/**
 * 表示请求的操作不受支持时抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class UnsupportedOperationError extends Error {
    /**
     * 构造一个UnsupportedOperationError实例。
     *
     * @param { string } [message] - 错误信息。
     * @param { ErrorOptions } [options] - 错误选项，
     *     通常包含错误堆栈信息。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
}

/**
 * 表示向方法传入非法参数时抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class IllegalArgumentError extends Error {
    /**
     * 构造一个IllegalArgumentError实例。
     *
     * @param { string } [message] - 错误信息。
     * @param { ErrorOptions } [options] - 错误选项，
     *     通常包含错误堆栈信息。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
}

/**
 * 表示运行时发生的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class RuntimeError extends Error {
    /**
     * 构造一个RuntimeError实例。
     *
     * @param { string } [message] - 错误信息。
     * @param { ErrorOptions } [options] - 错误选项，
     *     通常包含错误堆栈信息。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
}
