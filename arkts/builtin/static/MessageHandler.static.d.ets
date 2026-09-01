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
     * Handles messages and provides message scheduling capabilities
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 26.0.0 staticonly
     */
    export class MessageHandler {    
        /**
         * Constructs a new MessageHandler with a handler function
         *
         * @param { function } handler - the handler function to process messages.
         * @param { EAWorker } [worker] - the worker to associate with this handler.
         * @throws { Error } if - no worker is found
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        constructor(handler: (message: concurrency.Message) => void, worker: EAWorker | undefined = EAWorker.current());

        /**
         * Checks whether the handler has the specified callback pending
         *
         * @param { function } callback - the callback to check for.
         * @returns { boolean } true if the callback is pending, false otherwise
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        hasCallbacks(callback: () => void): boolean;

        /**
         * Checks whether the handler has messages with the specified what code
         *
         * @param { int } what - the message code to check for.
         *     <br>The value should be an integer.
         * @returns { boolean } true if such messages exist, false otherwise
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        hasMessages(what: int): boolean;

        /**
         * Checks whether the handler has messages with the specified what code and object
         *
         * @param { int } what - the message code to check for.
         *     <br>The value should be an integer.
         * @param { Any } obj - the object to check for.
         * @returns { boolean } true if such messages exist, false otherwise
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        hasMessages(what: int, obj: Any): boolean;

        /**
         * Posts a callback to the handler
         *
         * @param { function } callback - the callback to post.
         * @returns { boolean } true if the callback was successfully posted, false otherwise
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        post(callback: () => void): boolean;

        /**
         * Removes pending callbacks matching the specified callback
         *
         * @param { function } callback - the callback to remove.
         * @returns { boolean } true if the callback was removed, false otherwise
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        removeCallbacks(callback: () => void): boolean;

        /**
         * Removes pending messages with the specified what code
         *
         * @param { int } what - the message code to remove.
         *     <br>The value should be an integer.
         * @returns { boolean } true if messages were removed, false otherwise
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        removeMessages(what: int): boolean;

        /**
         * Removes pending messages with the specified what code and object
         *
         * @param { int } what - the message code to remove.
         *     <br>The value should be an integer.
         * @param { Any } obj - the object to match.
         * @returns { boolean } true if messages were removed, false otherwise
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        removeMessages(what: int, obj: Any): boolean;

        /**
         * Sends an empty message with the specified what code
         *
         * @param { int } what - the message code to send.
         *     <br>The value should be an integer.
         * @returns { boolean } true if the message was successfully sent, false otherwise
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        sendEmptyMessage(what: int): boolean;

        /**
         * Sends a message to this handler
         *
         * @param { concurrency.Message } message - the message to send.
         * @returns { boolean } true if the message was successfully sent, false otherwise
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        sendMessage(message: concurrency.Message): boolean;

        /**
         * Returns the worker associated with this handler
         *
         * @returns { EAWorker } the associated worker
         * @syscap SystemCapability.Utils.Lang
         * @stagemodelonly
         * @since 26.0.0 staticonly
         */
        getWorker(): EAWorker;
    }
}
