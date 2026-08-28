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
 * @file 定义ArkTS的EAWorker消息
 * @kit ArkTS
 */

/**
 * Message类提供EAWorker消息通信相关的类型。
 * Message表示消息队列中的一个消息，消息可以携带数据和回调函数。构造消息时需要指定MessageHandler来指定消息处理的逻辑。
 *
 * @namespace concurrency
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export namespace concurrency {
    /**
     * 表示消息队列中的一个消息，可携带数据和回调函数，发送至MessageHandler进行处理。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class Message {
        /**
         * 构造一个Message实例，需要传入MessageHandler来指定消息处理的逻辑。
         *
         * @param { concurrency.MessageHandler } handler - 处理该消息的MessageHandler。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        constructor(handler: concurrency.MessageHandler);

        /**
         * 构造一个Message实例，需要传入消息标识符和MessageHandler。未指定标识符时默认值为-1000000，避免使用该值作为自定义标识符。
         *
         * @param { int } what - 消息标识符，用于表明消息的类型或目的，由开发者自行约定。
         *     <br>该值应为整数。
         * @param { concurrency.MessageHandler } handler - 处理该消息的MessageHandler。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        constructor(what: int, handler: concurrency.MessageHandler);

        /**
         * 构造一个Message实例，需要传入消息标识符、数据对象和MessageHandler。
         *
         * @param { int } what - 消息标识符。
         *     <br>该值应为整数。
         * @param { Any } obj - 消息携带的数据对象。
         * @param { concurrency.MessageHandler } handler - 处理该消息的MessageHandler。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        constructor(what: int, obj: Any, handler: concurrency.MessageHandler);

        /**
         * 构造一个Message实例，需要传入回调函数和MessageHandler。
         *
         * @param { function } callback - 消息处理时执行的回调函数。
         * @param { concurrency.MessageHandler } handler - 处理该消息的MessageHandler。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        constructor(callback: () => void, handler: concurrency.MessageHandler);

        /**
         * 返回消息的标识符。
         *
         * @returns { int } 消息的标识符。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        getWhat(): int;

        /**
         * 返回消息的回调函数。
         *
         * @returns { function | undefined } 消息的回调函数，未设置时返回undefined。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        getCallback(): (() => void) | undefined;

        /**
         * 返回消息携带的数据对象。
         *
         * @returns { Any } 消息携带的数据对象。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        getObject(): Any;

        /**
         * 返回消息的目标处理器。
         *
         * @returns { concurrency.MessageHandler } 目标处理器。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        getTarget(): concurrency.MessageHandler;

        /**
         * 将消息发送到构造时传入的目标处理器中进行处理。
         *
         * @throws { Error } - 消息已被发送时抛出。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        sendToTarget(): void;

        /**
         * 判断当前消息是否与另一个消息相等。
         *
         * 如果两个消息的目标处理器不同，则返回false；对于回调消息，会继续比较回调函数是否相同；
         * 对于携带标识符的消息，会继续比较标识符和数据对象是否相同。
         *
         * @param { concurrency.Message } other - 用于比较的另一个消息。
         * @returns { boolean } 两个消息相等则返回true，否则返回false。
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        equals(other: concurrency.Message): boolean;
    }

}
