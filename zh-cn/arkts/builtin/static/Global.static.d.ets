'use static';
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @kit ArkTS
 */

/**
 * 在定时器超时后执行回调函数。
 *
 * @param { Function } func - 定时器超时后要执行的回调函数。
 * @param { int | null | undefined } delayMs - 超时时间，单位为毫秒（ms），
 *     如果传入null或undefined，将视为0毫秒。
 * @param { FixedArray<Any> } args - 传递给func的参数。
 * @returns { int } 定时器ID。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
function setTimeout(func: Function, delayMs: int | null | undefined, ...args: FixedArray<Any>): int;

/**
 * 取消指定的定时器。
 *
 * @param { int | null } [timerId] - 由setTimeout返回的定时器ID，
 *     如果不传、传入null或undefined，则不执行任何操作。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
function clearTimeout(timerId?: int | null): void;

/**
 * 按照delayMs间隔重复调用回调函数。首次调用将在delayMs之后执行。
 *
 * @param { Function } func - 要执行的回调函数。
 * @param { int | null | undefined } delayMs - 超时时间，单位为毫秒（ms），
 *     如果传入null或undefined，将视为0毫秒。
 * @param { FixedArray<Any> } args - 传递给func的参数。
 * @returns { int } 返回定时器ID。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
function setInterval(func: Function, delayMs: int | null | undefined, ...args: FixedArray<Any>): int;

/**
 * 取消指定的定时器。
 *
 * @param { int | null } [timerId] - 由setInterval返回的定时器ID，
 *     如果不传、传入null或undefined，则不执行任何操作。
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 24 staticonly
 */
function clearInterval(timerId?: int | null): void;
