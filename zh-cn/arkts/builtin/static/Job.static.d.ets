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
 * @file 定义ArkTS的任务执行结果
 * @kit ArkTS
 */

/**
 * EAWorker执行任务返回值的句柄，用于表征一个任务。包含两个类：
 * Job是执行任务返回值的句柄，可通过Await等待获取任务的返回值；
 * CompletableJob继承自Job，允许手动设置任务执行结果，可通过finish方法设置任务成功完成的结果，通过fail方法设置任务失败的原因。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */

/**
 * 表示任务结果的句柄，用于等待任务完成并获取返回值。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class Job<T> {
    /**
     * 等待任务完成并返回结果。
     *
     * @returns { T } 任务的返回值，类型与创建任务时指定的泛型类型一致。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    Await(): T;
}

/**
 * 继承自Job的可完成任务，允许手动设置任务的完成或失败状态。
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export class CompletableJob<T> extends Job<T> {
    /**
     * 构造一个CompletableJob实例，开发者可通过finish和fail方法设置任务结果。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    constructor();

    /**
     * 等待任务完成并返回结果。
     *
     * @returns { T } 任务的返回值，类型与创建任务时指定的泛型类型一致。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    Await(): T;

    /**
     * 将任务状态置为完成态，并将值设置为undefined。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    finish(): void;

    /**
     * 将任务状态置为完成态，并将值设置为指定值。
     *
     * @param { T } value - 任务完成时设置的值。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    finish<T>(value: T): void;

    /**
     * 将任务状态置为失败，并设置一个空的Error。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    fail(): void;

    /**
     * 将任务状态置为失败，并将失败原因设置为指定的Error。
     *
     * @param { Error } error - 任务失败时设置的Error。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    fail(error: Error): void;
}
