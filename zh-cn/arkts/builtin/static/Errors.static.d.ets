'use static';
/**
 * Copyright (c) 2021-2026 Huawei Device Co., Ltd.
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
 * @file Defines the commonly used Errors for ArkTS
 * @kit ArkTS
 */

/**
 * 表示断言失败时发生的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AssertionError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的AssertionError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示执行除零运算时发生的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class DivideByZeroError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的DivideByZeroError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示对空指针解引用时发生的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class NullPointerError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的NullPointerError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示异常被抛出但未被捕获时发生的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class UncaughtExceptionError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的FormatError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示解析语法非法的代码时发生的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class SyntaxError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的SyntaxError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * 使用指定的错误信息和错误相关信息构造新的SyntaxError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @returns { SyntaxError }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): SyntaxError;
};

/**
 * 表示JSONValue无法赋值给某一类型时发生的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class JSONTypeError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的JSONTypeError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示传入的集合索引超出范围时发生的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class RangeError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的RangeError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * 使用指定的错误信息和错误相关信息构造新的RangeError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @returns { RangeError }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): RangeError;
};

/**
 * 表示传入负数数组长度时抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class NegativeArraySizeError extends RangeError {
    /**
     * 使用指定的错误信息和错误相关信息构造新的NegativeArraySizeError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示数组索引越界时发生的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ArrayIndexOutOfBoundsError extends RangeError {
    /**
     * 使用指定的错误信息和错误相关信息构造新的ArrayIndexOutOfBoundsError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示发生非法算术运算（例如除零）时抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ArithmeticError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的ArithmeticError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示内存分配失败时发生的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class OutOfMemoryError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的OutOfMemoryError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示可用内存不足以创建活动栈帧时发生的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class StackOverflowError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的StackOverflowError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示尝试实例化抽象类或接口时发生的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class InstantiationError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的InstantiationError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示发生内部错误时的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class InternalError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的InternalError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示对未同步的对象调用wait、notify或notifyAll时
 *     抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class IllegalMonitorStateError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的IllegalMonitorStateError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示传入的集合索引越界时抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class IndexOutOfBoundsError extends RangeError {
    /**
     * 使用指定的错误信息和错误相关信息构造新的IndexOutOfBoundsError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示传入的字符串索引越界时抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class StringIndexOutOfBoundsError extends RangeError {
    /**
     * 使用指定的错误信息和错误相关信息构造新的StringIndexOutOfBoundsError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示发生非法类型转换时抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ClassCastError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的ClassCastError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示尝试将不同类型的对象存入类型擦除对象数组时抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ArrayStoreError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的ArrayStoreError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示初始化器中发生错误时抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ExceptionInInitializerError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的ExceptionInInitializerError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示协程数量达到上限时抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class CoroutinesLimitExceedError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的CoroutinesLimitExceedError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示锁处于非法状态时抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class IllegalLockStateError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的IllegalLockStateError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示对协程执行非法操作时抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class InvalidJobOperationError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的InvalidJobOperationError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示以错误方式对Function进行unsafe调用时抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ArgumentsUnderapplicationError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的ArgumentsUnderapplicationError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示发生存储访问错误时抛出的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class InvalidStoreAccessError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的InvalidStoreAccessError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);
};

/**
 * 表示求值错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class EvalError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的EvalError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * 使用指定的错误信息和选项构造新的EvalError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @returns { EvalError } - 新创建的EvalError实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): EvalError;
};

/**
 * 表示对索引表达式执行数值类型转换且小数部分不为0时
 * 发生的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class NonIntegralIndexError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的NonIntegralIndexError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * 使用指定的错误信息和错误相关信息构造新的NonIntegralIndexError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @returns { NonIntegralIndexError } - 新创建的NonIntegralIndexError实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): NonIntegralIndexError;
};


/**
 * 表示操作无法执行时发生的错误，通常（但不限于）是因为
 * 值的类型不符合预期。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class TypeError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的TypeError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * 使用指定的错误信息和错误相关信息构造新的TypeError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @returns { TypeError } - 新创建的TypeError实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): TypeError;
};


/**
 * 表示在当前作用域中引用不存在（或尚未初始化）的变量时
 * 发生的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class ReferenceError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的ReferenceError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * 使用指定的错误信息和错误相关信息构造新的ReferenceError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @returns { ReferenceError } - 新创建的ReferenceError实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): ReferenceError;
};


/**
 * 表示以错误方式使用全局URI处理函数时发生的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class URIError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的URIError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * 使用指定的错误信息和错误相关信息构造新的URIError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @returns { URIError } - 新创建的URIError实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): URIError;
};


/**
 * AggregateError对象表示需要将多个错误包装为
 * 单个错误时的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class AggregateError extends Error {
    /**
     * 定义聚合错误的数组。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    errors: Array<Error>;
    /**
     * 使用指定的错误集合、错误信息和错误相关信息构造新的AggregateError实例。
     *
     * @param { Iterable<Error> } errors - 待聚合的错误。
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(errors: Iterable<Error>, message?: string, options?: ErrorOptions);

    /**
     * 使用指定的错误集合、错误信息和错误相关信息构造新的AggregateError实例。
     *
     * @param { Error[] } errors - 待聚合的错误。
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(errors: Error[], message?: string, options?: ErrorOptions);

    /**
     * 使用指定的错误信息和错误相关信息构造新的AggregateError实例。
     *
     * @param { Iterable<Error> } errors - 待聚合的错误。
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @returns { AggregateError } - 新创建的AggregateError实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(errors: Iterable<Error>, message?: string, options?: ErrorOptions): AggregateError;

    /**
     * 使用指定的错误信息和错误相关信息构造新的AggregateError实例。
     *
     * @param { Error[] } errors - 待聚合的错误。
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @returns { AggregateError } - 新创建的AggregateError实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(errors: Error[], message?: string, options?: ErrorOptions): AggregateError;

};

/**
 * 表示输入字符串包含非法数据或格式错误的数据时发生的错误。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class FormatError extends Error {
    /**
     * 使用指定的错误信息和错误相关信息构造新的FormatError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor(message?: string, options?: ErrorOptions);

    /**
     * 使用指定的错误信息和错误相关信息构造新的FormatError实例。
     *
     * @param { string } [message] - 错误文本。
     * @param { ErrorOptions } [options] - 错误选项。
     * @returns { FormatError } - 新创建的FormatError实例。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    static $_invoke(message?: string, options?: ErrorOptions): FormatError;
};

