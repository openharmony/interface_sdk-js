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
 * Execute function with parameters after the timer expires.
 *
 * @param { Function } func - The function to be executed after the timer expires.
 * @param { int | null | undefined } delayMs - Timeout in milliseconds (ms),
 *     if pass null or undefined will be treated as 0 milliseconds.
 * @param { FixedArray<Any> } args - Parameters passed to func.
 * @returns { int } Timer id.
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
function setTimeout(func: Function, delayMs: int | null | undefined, ...args: FixedArray<Any>): int;

/**
 * Cancel the specified timer.
 *
 * @param { int | null } [timerId] - The id of the timer returned from setTimeout, 
 *     if pass empty or null or undefined will do nothing.
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
function clearTimeout(timerId?: int | null): void;

/**
 * Repeatedly call the function with delayMs interval between calls. The first call will be after delayMs.
 *
 * @param { Function } func - The function to be executed.
 * @param { int | null | undefined } delayMs - Timeout in milliseconds (ms),
 *     if pass null or undefined will be treated as 0 milliseconds.
 * @param { FixedArray<Any> } args - Parameters passed to func.
 * @returns { int } Returns the timer ID.
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
function setInterval(func: Function, delayMs: int | null | undefined, ...args: FixedArray<Any>): int;

/**
 * Cancel the specified timer.
 *
 * @param { int | null } [timerId] - The id of the timer returned from setInterval, 
 *     if pass empty or null or undefined will do nothing.
 * @syscap SystemCapability.Utils.Lang
 * @FaAndStageModel
 * @since 24 static
 */
function clearInterval(timerId?: int | null): void;
