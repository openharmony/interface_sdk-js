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
 * @file 定义ArkTS的EAWorker消息处理器
 * @kit ArkTS
 */

/**
 * MessageHandler类提供EAWorker消息通信相关的类型。
 * MessageHandler用于定义消息（Message）的处理逻辑，不同消息可以由不同的MessageHandler处理。
 * MessageHandler提供消息调度和队列管理能力，包括发送消息、检查消息队列、移除待执行消息等操作。
 *
 * @namespace concurrency
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export namespace concurrency {
    /**
     * 处理消息并提供消息调度能力。不同消息可由不同的MessageHandler处理。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class MessageHandler {
        /**
         * 构造一个MessageHandler实例，需要传入消息处理函数，可选传入EAWorker实例。
         *
         * @param { function } handler - 处理消息的函数。
         * @param { EAWorker } [worker] - 与该处理器关联的Worker，默认为当前线程的Worker。
         * @throws { Error } - 找不到Worker时抛出。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        constructor(handler: (message: concurrency.Message) => void, worker: EAWorker | undefined = EAWorker.current());

        /**
         * 检查处理器中是否有指定的回调函数在等待执行。
         *
         * @param { function } callback - 要检查的回调函数。
         * @returns { boolean } 存在则返回true，否则返回false。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        hasCallbacks(callback: () => void): boolean;

        /**
         * 检查处理器中是否有指定标识符的消息。
         *
         * @param { int } what - 要检查的消息标识符。
         *     <br>该值应为整数。
         * @returns { boolean } 存在则返回true，否则返回false。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        hasMessages(what: int): boolean;

        /**
         * 检查处理器中是否有指定标识符和数据对象的消息。
         *
         * @param { int } what - 要检查的消息标识符。
         *     <br>该值应为整数。
         * @param { Any } obj - 要检查的数据对象。
         * @returns { boolean } 存在则返回true，否则返回false。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        hasMessages(what: int, obj: Any): boolean;

        /**
         * 构造消息并添加到消息队列中执行。
         *
         * @param { function } callback - 要执行的回调函数。
         * @returns { boolean } 成功添加到消息队列则返回true，否则返回false。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        post(callback: () => void): boolean;

        /**
         * 从消息队列中移除匹配指定回调函数的待执行回调。
         *
         * @param { function } callback - 要移除的回调函数。
         * @returns { boolean } 成功移除则返回true，否则返回false。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        removeCallbacks(callback: () => void): boolean;

        /**
         * 从消息队列中移除指定标识符的待执行消息。
         *
         * @param { int } what - 要移除的消息标识符。
         *     <br>该值应为整数。
         * @returns { boolean } 成功移除则返回true，否则返回false。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        removeMessages(what: int): boolean;

        /**
         * 从消息队列中移除指定标识符和数据对象的待执行消息。
         *
         * @param { int } what - 要移除的消息标识符。
         *     <br>该值应为整数。
         * @param { Any } obj - 要匹配的数据对象。
         * @returns { boolean } 成功移除则返回true，否则返回false。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        removeMessages(what: int, obj: Any): boolean;

        /**
         * 发送指定标识符的空消息。
         *
         * @param { int } what - 要发送的消息标识符。
         *     <br>该值应为整数。
         * @returns { boolean } 成功发送则返回true，否则返回false。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        sendEmptyMessage(what: int): boolean;

        /**
         * 将消息添加到消息队列。
         *
         * @param { concurrency.Message } message - 要发送的消息对象。
         * @returns { boolean } 成功发送则返回true，否则返回false。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        sendMessage(message: concurrency.Message): boolean;

        /**
         * 返回与该处理器关联的Worker。
         *
         * @returns { EAWorker } 关联的Worker实例。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        getWorker(): EAWorker;
    }
}
