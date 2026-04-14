/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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

/*** if arkts dynamic */
import { Callback } from './@ohos.base';
import emitter from './@ohos.events.emitter';
/*** endif */

/*** if arkts static */
import buffer from '@ohos.buffer';
/*** endif */

/**
 * The stream module provides APIs to process basic types of streams. With streams, data is read or written by chunk,
 * instead of being loaded to the memory at a time.
 * There are four fundamental stream types: writable streams ([Writable]{@link stream.Writable}), readable streams (
 * [Readable]{@link stream.ReadableOptions}), duplex streams ([Duplex]{@link stream.Duplex}), and transform streams (
 * [Transform]{@link stream.Transform}).
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace stream {
  /**
   * Describes the options used in the **Readable** constructor.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface ReadableOptions {
    /**
     * Encoding format. If an invalid string is input, an exception is thrown in the **Readable** constructor.
     *
     * The following formats are supported: utf-8, UTF-8, GBK, GB2312, gb2312, GB18030, gb18030, ibm866, iso-8859-2, iso
     * -8859-3, iso-8859-4, iso-8859-5, iso-8859-6, iso-8859-7, iso-8859-8, iso-8859-8-i, iso-8859-10, iso-8859-13, iso-
     * 8859-14, iso-8859-15, koi8-r, koi8-u, macintosh, windows-874, windows-1250, windows-1251, windows-1252, windows-1
     * 253, windows-1254, windows-1255, windows-1256, windows-1257, windows-1258, gbk, big5, euc-jp, iso-2022-jp,
     * shift_jis, euc-kr, x-mac-cyrillic, utf-16be, and utf-16le.
     *
     * The default value is **'utf-8'**.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    encoding?: string;
  }

  /**
   * Stream to which data can be written. A writable stream allows data to be written to a target, which can be a file,
   * an HTTP response, a standard output, another stream, or the like.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class Writable {
    /**
     * A constructor used to create a **Writable** object.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Writes data to the buffer of the stream. This API uses an asynchronous callback to return the result.
     *
     * @param { string | Uint8Array } [chunk] - Data to write. It cannot be **null**, **undefined**, or an empty string.
     * @param { string } [encoding] - Encoding format. The default value is **'utf8'**. Currently, **'utf8'**,
     *     **'gb18030'**, **'gbk'**, and **'gb2312'** are supported.
     * @param { Function } [callback] - Callback used to return the result. It is not called by default.
     * @returns { boolean } Whether there is space in the buffer of the writable stream. The value **true** means that
     *     there is still space in the buffer. The value **false** means that the buffer is full, and you are not
     *     advised to continue writing data.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200035 - The doWrite method has not been implemented.
     * @throws { BusinessError } 10200036 - The stream has been ended.
     * @throws { BusinessError } 10200037 - The callback is invoked multiple times consecutively.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    write(chunk?: string | Uint8Array, encoding?: string, callback?: Function): boolean;

    /**
     * Ends the writing process in a writable stream. If the value of **writableCorked** is greater than 0, the value is
     * set to **0** and the remaining data in the buffer is output. If the **chunk** parameter is passed, it is treated
     * as the final data chunk and written using either the **write** or **doWrite** API, based on the current execution
     * context. If **doWrite** is used for writing, the validity check of the **encoding** parameter depends on
     * **doWrite**. If **end** is used alone (without **write**) and the **chunk** parameter is passed, the data is
     * written through **doWrite**. This API uses an asynchronous callback to return the result.
     *
     * @param { string | Uint8Array } [chunk] - Data to write. The default value is **undefined**.
     * @param { string } [encoding] - Encoding format. The default value is **'utf8'**. Currently, **'utf8'**,
     *     **'gb18030'**, **'gbk'**, and **'gb2312'** are supported.
     * @param { Function } [callback] - Callback used to return the result.
     * @returns { Writable } Current **Writable** object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200035 - The doWrite method has not been implemented.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    end(chunk?: string | Uint8Array, encoding?: string, callback?: Function): Writable;

    /**
     * Sets the default encoding format for the writable stream.
     *
     * @param { string } [encoding] - Default encoding format. The default value is **'utf8'**. Currently, **'utf8'**,
     *     **'gb18030'**, **'gbk'**, and **'gb2312'** are supported.
     * @returns { boolean } Operation result. **true** means successful; **false** otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setDefaultEncoding(encoding?: string): boolean;

    /**
     * Forces subsequent writes to be buffered. This API is called to optimize the performance of continuous write
     * operations. After this API is called, the value of **writableCorked** is incremented by one. It is recommended
     * that this API be used in pair with [uncork()]{@link stream.Writable.uncork}.
     *
     * @returns { boolean } Operation result. **true** means successful; **false** otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    cork(): boolean;

    /**
     * Releases the cork state, flushing the buffered data and writing it to the target location. After this API is
     * called, the value of **writableCorked** is decremented by one. If the value reaches **0**, the stream is no
     * longer in the cork state. Otherwise, the stream is still in the cork state. It is recommended that this API be
     * used in pair with [cork()]{@link stream.Writable.cork}.
     *
     * @returns { boolean } Operation result. **true** means successful; **false** otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    uncork(): boolean;

    /**
     * Registers an event processing callback to listen for different events on the writable stream.
     *
     * @param { string } event - Type of the event. The following events are supported:
     * @param { Callback<emitter.EventData> } callback - Callback function used to return the event data.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    on(event: string, callback: Callback<emitter.EventData>): void;

    /**
     * Registering Event Messages.
     *
     * @param { string } event - Register Event.
     * @param { Function } callback - event callbacks.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    on(event: string, callback: Function): void;

    /**
     * Unregisters an event processing callback used to listen for different events on the writable stream.
     *
     * @param { string } event - Type of the event. The following events are supported:
     * @param { Callback<emitter.EventData> } callback - Callback function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    off(event: string, callback?: Callback<emitter.EventData>): void;

    /**
     * Cancel event message.
     *
     * @param { string } event - Register Event.
     * @param { Function } [callback] - event callbacks.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    off(event: string, callback?: Function): void;

    /**
     * You need to implement this API but do not call it directly. It is automatically called during the initialization
     * of the writable stream. This API uses an asynchronous callback to return the result.
     *
     * @param { Function } callback - Callback function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doInitialize(callback: Function): void;

    /**
     * A data write API. You need to implement this API but do not call it directly. This API is automatically called
     * when data is written. This API uses an asynchronous callback to return the result.
     *
     * @param { string | Uint8Array } chunk - Data to write.
     * @param { string } encoding - Encoding format. Currently, **'utf8'**, **'gb18030'**, **'gbk'**, and **'gb2312'**
     *     are supported.
     * @param { Function } callback - Callback function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doWrite(chunk: string | Uint8Array, encoding: string, callback: Function): void;

    /**
     * A batch data write API. You need to implement this API but do not call it directly. This API is automatically
     * called when data is written. This API uses an asynchronous callback to return the result.
     *
     * @param { string[] | Uint8Array[] } chunks - Data arrays to write in batches.
     * @param { Function } callback - Callback function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doWritev(chunks: string[] | Uint8Array[], callback: Function): void;

    /**
     * Returns boolean indicating whether it is in ObjectMode.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableObjectMode(): boolean;

    /**
     * Value of highWatermark.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableHighWatermark(): int;

    /**
     * Is true if it is safe to call writable.write(), which means the stream has not been destroyed, error or end.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writable(): boolean;

    /**
     * Size of data that can be flushed, in bytes or objects.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableLength(): int;

    /**
     * Number of times writable.uncork() needs to be called in order to fully uncork the stream.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableCorked(): int;

    /**
     * Whether Writable.end has been called.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableEnded(): boolean;

    /**
     * Whether Writable.end has been called and all buffers have been flushed.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableFinished(): boolean;
  }

  /**
   * Stream from which data can be read. A readable stream is used to read data from a source, such as a file or a
   * network socket.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class Readable {
    /**
     * A constructor used to create a **Readable** object.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * A constructor used to create a **Readable** object.
     *
     * @param { ReadableOptions } options - Options in the **Readable** constructor.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(options: ReadableOptions);

    /**
     * Reads data from the buffer of the readable stream and returns the read data. If no data is read, **null** is
     * returned.
     *
     * @param { number } size - Number of bytes to read. The default value is **undefined**.
     * @returns { string | null } Data read from the readable stream.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200038 - The doRead method has not been implemented.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    read(size?: number): string | null;

    /**
     * Reads a buffer of a specified size from the buffer. If the available buffer is sufficient, the result
     * of the specified size is returned. Otherwise, if Readable has ended, all remaining buffers are returned.
     *
     * @param { int } [size] - Expected length of the data to be read.
     *     The value should be an integer.
     * @returns { buffer.Buffer | string | null } If no data is available to read, null is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200038 - The doRead method has not been implemented.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    read(size?: int): buffer.Buffer | string | null;

    /**
     * Resumes an explicitly paused readable stream. You can use **isPaused** to check whether the stream is paused.
     *
     * @returns { Readable } Current **Readable** object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    resume(): Readable;

    /**
     * Pauses the readable stream in flowing mode. You can use **isPaused** to check whether the stream is paused.
     *
     * @returns { Readable } Current **Readable** object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    pause(): Readable;

    /**
     * Sets an encoding format for the readable stream.
     * If the buffer contains data, setting the encoding format is not allowed, and **false** is returned.
     *
     * @param { string } [encoding] - Encoding format. The default value is **'utf8'**. Currently, **'utf8'**,
     *     **'gb18030'**, **'gbk'**, and **'gb2312'** are supported.
     * @returns { boolean } Operation result. The value **true** is returned if the setting is successful; otherwise,
     *     **false** is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setEncoding(encoding?: string): boolean;

    /**
     * Checks whether the readable stream is paused. The stream is paused after [pause()]{@link stream.Readable.pause}
     * is called and resumes from the paused state after [resume()]{@link stream.Readable.resume} is called.
     *
     * @returns { boolean } Check result. The value **true** is returned if the stream is paused; otherwise, **false**
     *     is returned.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isPaused(): boolean;

    /**
     * Attaches a writable stream to the readable stream to implement automatic data transmission.
     *
     * @param { Writable } destination - Writable stream that receives data.
     * @param { Object } [options] - Reserved.
     * @returns { Writable } Current **Writable** object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    pipe(destination: Writable, options?: Object): Writable;

    /**
     * Detaches a writable stream previously attached to the readable stream.
     *
     * @param { Writable } [destination] - Writable stream to detach. The default value is **undefined**.
     * @returns { Readable } Current **Readable** object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    unpipe(destination?: Writable): Readable;

    /**
     * Registers an event processing callback to listen for different events on the readable stream.
     *
     * @param { string } event - Type of the event. The following events are supported:
     * @param { Callback<emitter.EventData> } callback - Callback function used to return the event data.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    on(event: string, callback: Callback<emitter.EventData>): void;

    /**
     * Registering Event Messages.
     *
     * @param { string } event - Registering Events.
     * @param { Function } callback - Event callback.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    on(event: string, callback: Function): void;

    /**
     * Unregisters an event processing callback used to listen for different events on the readable stream.
     *
     * @param { string } event - Type of the event. The following events are supported:
     * @param { Callback<emitter.EventData> } callback - Callback function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    off(event: string, callback?: Callback<emitter.EventData>): void;

    /**
     * Cancel event message.
     *
     * @param { string } event - Registering Events.
     * @param { Function } [callback] - Event callback.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    off(event: string, callback?: Function): void;

    /**
     * You need to implement this API. It is called when the readable stream calls
     * [on]{@link stream.Writable#on(event: string, callback: Callback<emitter.EventData>)} for the first time. This API
     * uses an asynchronous callback to return the result.
     *
     * @param { Function } callback - Callback function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doInitialize(callback: Function): void;

    /**
     * A data read API that needs to be implemented in child classes.
     *
     * @param { int } size - Number of bytes to read. Value range: 0 <= size <= Number.MAX_VALUE
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doRead(size: int): void;

    /**
     * Pushes data into the buffer of the readable stream.
     *
     * @param {  Uint8Array | string | null } chunk - Data to read.<br> There has been a compatibility change since API
     *     version 22. In API version 21 and earlier versions, the type is `Uint8Array | string | null`. [since 12 - 22]
     * @param {  Uint8Array | string | undefined | null } chunk - Data to read.<br> There has been a compatibility
     *     change since API version 22. In API version 21 and earlier versions, the type is `Uint8Array | string | null`
     *     . [since 23]
     * @param { string } [encoding] - Encoding format. The default value is **'utf8'**. Currently, **'utf8'**,
     *     **'gb18030'**, **'gbk'**, and **'gb2312'** are supported.
     * @returns { boolean } Whether there is space in the buffer of the readable stream. The value **true** means that
     *     there is still space in the buffer, and **false** means that the buffer is full. If **null** is passed,
     *     **false** is always returned, indicating that no data chunk is available for pushing.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    push(chunk: Uint8Array | string | undefined | null, encoding?: string): boolean;

    /**
     * Returns boolean indicating whether it is in ObjectMode.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readableObjectMode(): boolean;

    /**
     * Is true if it is safe to call readable.read(), which means
     * the stream has not been destroyed or emitted 'error' or 'end'.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readable(): boolean;

    /**
     * Returns the value of highWatermark passed when creating this Readable.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readableHighWatermark(): int;

    /**
     * This property reflects the current state of the readable stream null/true/false.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readableFlowing(): boolean | null;

    /**
     * Size of the data that can be read, in bytes or objects.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readableLength(): int;

    /**
     * Getter for the property encoding of a given Readable stream. The encoding property can be set using the
     * readable.setEncoding() method.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readableEncoding(): string | null;

    /**
     * Whether all data has been generated.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readableEnded(): boolean;
  }

  /**
   * A stream that is both readable and writable. A duplex stream allows data to be transmitted in two directions, that
   * is, data can be read and written.
   * The **Duplex** class inherits from [Readable]{@link stream.ReadableOptions} and supports all the APIs in
   * **Readable**.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class Duplex extends Readable {
    /**
     * A constructor used to create a **Duplex** object.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Writes data to the buffer of the stream. This API uses an asynchronous callback to return the result.
     *
     * @param { string | Uint8Array } [chunk] - Data to write. It cannot be **null**, **undefined**, or an empty string.
     * @param { string } [encoding] - Encoding format. The default value is **'utf8'**. Currently, **'utf8'**,
     *     **'gb18030'**, **'gbk'**, and **'gb2312'** are supported.
     * @param { Function } [callback] - Callback used to return the result. It is not called by default.
     * @returns { boolean } Whether there is space in the buffer of the writable stream. The value **true** means that
     *     there is still space in the buffer. The value **false** means that the buffer is full, and you are not
     *     advised to continue writing data. If the write function is called continuously, data is still added to the
     *     buffer until the memory overflows.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200036 - The stream has been ended.
     * @throws { BusinessError } 10200037 - The callback is invoked multiple times consecutively.
     * @throws { BusinessError } 10200039 - The doTransform method has not been implemented for a class that inherits
     *     from Transform.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    write(chunk?: string | Uint8Array, encoding?: string, callback?: Function): boolean;

    /**
     * Ends the writing process in a duplex stream. If the value of **writableCorked** is greater than 0, the value is
     * set to **0** and the remaining data in the buffer is output. If the **chunk** parameter is passed, it is treated
     * as the final data chunk and written using either the **write** or **doWrite** API, based on the current execution
     * context. If **doWrite** is used for writing, the validity check of the **encoding** parameter depends on
     * **doWrite**. If **end** is used alone (without **write**) and the **chunk** parameter is passed, the data is
     * written through **doWrite**. This API uses an asynchronous callback to return the result.
     *
     * @param { string | Uint8Array } [chunk] - Data to write. The default value is **undefined**.
     * @param { string } [encoding] - Encoding format. The default value is **'utf8'**. Currently, **'utf8'**,
     *     **'gb18030'**, **'gbk'**, and **'gb2312'** are supported.
     * @param { Function } [callback] - Callback used to return the result. It is not called by default.
     * @returns { Writable } Current **Duplex** object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 10200039 - The doTransform method has not been implemented for a class that inherits
     *     from Transform.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    end(chunk?: string | Uint8Array, encoding?: string, callback?: Function): Writable;

    /**
     * Sets the default encoding format for the writable stream.
     *
     * @param { string } [encoding] - Default encoding format. The default value is **'utf8'**. Currently, **'utf8'**,
     *     **'gb18030'**, **'gbk'**, and **'gb2312'** are supported.
     * @returns { boolean } Operation result. **true** means successful; **false** otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setDefaultEncoding(encoding?: string): boolean;

    /**
     * Forces subsequent writes to be buffered. This API is called to optimize the performance of continuous write
     * operations. After this API is called, the value of **writableCorked** is incremented by one. It is recommended
     * that this API be used in pair with [uncork()]{@link stream.Writable.uncork}.
     *
     * @returns { boolean } Operation result. **true** means successful; **false** otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    cork(): boolean;

    /**
     * Releases the cork state, flushing the buffered data and writing it to the target location. After this API is
     * called, the value of **writableCorked** is decremented by one. If the value reaches **0**, the stream is no
     * longer in the cork state. Otherwise, the stream is still in the cork state. It is recommended that this API be
     * used in pair with [cork()]{@link stream.Writable.cork}.
     *
     * @returns { boolean } Operation result. **true** means successful; **false** otherwise.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    uncork(): boolean;

    /**
     * A data write API. You need to implement this API but do not call it directly. This API is automatically called
     * when data is written. This API uses an asynchronous callback to return the result.
     *
     * @param { string | Uint8Array } chunk - Data to write.
     * @param { string } encoding - Encoding format. Currently, **'utf8'**, **'gb18030'**, **'gbk'**, and **'gb2312'**
     *     are supported.
     * @param { Function } callback - Callback function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doWrite(chunk: string | Uint8Array, encoding: string, callback: Function): void;

    /**
     * A batch data write API. You need to implement this API but do not call it directly. This API is automatically
     * called when data is written. This API uses an asynchronous callback to return the result.
     *
     * @param { string[] | Uint8Array[] } chunks - Data arrays to write in batches.
     * @param { Function } callback - Callback function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doWritev(chunks: string[] | Uint8Array[], callback: Function): void;

    /**
     * Returns boolean indicating whether it is in ObjectMode.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableObjectMode(): boolean;

    /**
     * Value of highWatermark.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableHighWatermark(): int;

    /**
     * Is true if it is safe to call writable.write(), which means the stream has not been destroyed, error or end.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writable(): boolean;

    /**
     * Size of data that can be flushed, in bytes or objects.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableLength(): int;

    /**
     * Number of times writable.uncork() needs to be called in order to fully uncork the stream.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableCorked(): int;

    /**
     * Whether Writable.end has been called.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableEnded(): boolean;

    /**
     * Whether Writable.end has been called and all buffers have been flushed.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableFinished(): boolean;
  }

  /**
   * A special duplex stream that supports data conversion and result output. The **Transform** class inherits from
   * [Duplex]{@link stream.Duplex} and supports all the APIs in **Duplex**.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class Transform extends Duplex {
    /**
     * A constructor used to create a **Transform** object.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Converts or processes input data chunks and uses a callback to notify that the processing is complete.
     *
     * @param { string } chunk - Data to write.
     * @param { string } encoding - Encoding format. Currently, **'utf8'**, **'gb18030'**, **'gbk'**, and **'gb2312'**
     *     are supported.
     * @param { Function } callback - Callback function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doTransform(chunk: string, encoding: string, callback: Function): void;

    /**
     * Called at the end of the stream to process the remaining data. This API uses an asynchronous callback to return
     * the result.
     *
     * @param { Function } callback - Callback function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doFlush(callback: Function): void;
  }
}

export default stream;