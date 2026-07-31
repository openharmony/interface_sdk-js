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
 * namespace concurrency
 *
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export namespace concurrency {
    /**
     * Represents a message that can be sent to a MessageHandler for processing
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class Message {    
        /**
         * Constructs a new Message with a handler
         *
         * @param { concurrency.MessageHandler } handler - the handler to process this message.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        constructor(handler: concurrency.MessageHandler);

        /**
         * Constructs a new Message with a what code and handler
         *
         * @param { int } what - the message code.
         *     <br>The value should be an integer.
         * @param { concurrency.MessageHandler } handler - the handler to process this message.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        constructor(what: int, handler: concurrency.MessageHandler);

        /**
         * Constructs a new Message with a what code, object, and handler
         *
         * @param { int } what - the message code.
         *     <br>The value should be an integer.
         * @param { Any } obj - the object attached to this message.
         * @param { concurrency.MessageHandler } handler - the handler to process this message.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        constructor(what: int, obj: Any, handler: concurrency.MessageHandler);

        /**
         * Constructs a new Message with a callback and handler
         *
         * @param { function } callback - the callback to execute when this message is processed.
         * @param { concurrency.MessageHandler } handler - the handler to process this message.
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        constructor(callback: () => void, handler: concurrency.MessageHandler);

        /**
         * Returns the what code of this message
         *
         * @returns { int } the what code
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        getWhat(): int;

        /**
         * Returns the callback of this message
         *
         * @returns { function | undefined } the callback, or undefined if not set
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        getCallback(): (() => void) | undefined;

        /**
         * Returns the object attached to this message
         *
         * @returns { Any } the object
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        getObject(): Any;

        /**
         * Returns the target handler of this message
         *
         * @returns { concurrency.MessageHandler } the target handler
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        getTarget(): concurrency.MessageHandler;

        /**
         * Sends this message to its target handler
         *
         * @throws { Error } if - the message has already been sent
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        sendToTarget(): void;

        /**
         * Compares this message with another for equality
         *
         * @param { concurrency.Message } other - the other message to compare with.
         * @returns { boolean } true if the messages are equal, false otherwise
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        equals(other: concurrency.Message): boolean;
    }

}
