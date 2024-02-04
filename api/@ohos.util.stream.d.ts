/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
import { Callback } from './@ohos.base';
import emitter from './@ohos.events.emitter';

/**
 * Writeable is a stream that can be written to data. Transform is Duplex streams that can modify or transform the
 * data as it is written and read.Readable is streams from which data can be read.Duplex is streams that are both
 * Readable and Writable
 *
 * @namespace stream
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 12
 */
declare namespace stream {
  /**
   * Streams to which data can be written.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 12
   */
  class Writable {
    /**
     * The Writable constructor.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    constructor();
    /**
     * writes a chunk to Writable and invokes callback when the chunk is flushed. The return value indicates
     * whether the internal buffer of the Writable reaches the hightWaterMark. If true is returned, the buffer
     * does not reach the hightWaterMark. If false is returned, the buffer has been reached. The write function
     * should be called after the drain event is triggered. If the write function is called continuously,
     * the chunk is still added to the buffer until the memory overflows
     *
     * @param { string | Uint8Array } [chunk] - Data to be written.
     * @param { string } [encoding] - Encoding type.
     * @param { Function } [callback] - Callback after writing.
     * @returns { boolean } Write success returns true, write failure returns false.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    write(chunk?: string | Uint8Array, encoding?: string, callback?: Function): boolean;
    /**
     * Write the last chunk to Writable.
     *
     * @param { string | Uint8Array } [chunk] - Data to be written.
     * @param { string } [encoding] - Encoding type.
     * @param { Function } [callback] - Callback after writing.
     * @returns { Writable } Returns the Writable object.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    end(chunk?: string | Uint8Array, encoding?: string, callback?: Function): Writable;
    /**
     * Set the default encoding mode.
     *
     * @param { string } [encoding] - Encoding type.Default: utf8.
     * @returns { boolean } Setting successful returns true, setting failed returns false.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    setDefaultEncoding(encoding?: string): boolean;
    /**
     * After the call, all Write operations will be forced to write to the buffer instead of being flushed.
     *
     * @returns { boolean } Setting successful returns true, setting failed returns false.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    cork(): boolean;
    /**
     * After calling, flush all buffers.
     *
     * @returns { boolean } Setting successful returns true, setting failed returns false.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    uncork(): boolean;
    /**
     * Registering Event Messages.
     *
     * @param { string } event - Register Event.
     * @param { Callback } callback - event callbacks.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    on(event: string, callback: Callback<EventData>): void;
    /**
     * Cancel event message.
     *
     * @param { string } event - Register Event.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    off(event: string): void;
    /**
     * This method is invoked by the Writable method during initialization and should not be invoked actively.
     * After the resource is initialized in the doInitialize method, the callback () method is invoked.
     *
     * @param { Function } callback - Callback when the stream has completed the initial.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    doInitialize(callback: Function): void;
    /**
     * Implemented by subclass inheritance. The implementation logic of flushing chunks in the buffer should not be
     * actively called. The call is controlled by Writable.write.
     *
     * @param { string | Uint8Array } chunk - Data to be written.
     * @param { string } encoding - Encoding type.
     * @param { Function } callback - Callback after writing.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    doWrite(chunk: string | Uint8Array, encoding: string, callback: Function): void;
    /**
     * The implementation logic of flushing chunks in the buffer in batches should not be actively called.
     * The call is controlled by Writable.write.
     *
     * @param { string[] | Uint8Array[] } chunk - Data to be written.
     * @param { Function } callback - Callback after writing.
     * @returns { Writable } Returns the Writable object.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    doWritev(chunk: string[] | Uint8Array[], callback: Function): void;
    /**
     * Returns boolean indicating whether it is in ObjectMode.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly writableObjectMode: boolean;
    /**
     * Value of highWaterMark.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly writableHighWaterMark: number;
    /**
     * Is true if it is safe to call writable.write(), which means the stream has not been destroyed, errored, or ended.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly writable: boolean;
    /**
     * Size of data that can be flushed, in bytes or objects.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
     readonly writableLength: number;
    /**
     * If the buffer of the stream is full and true, otherwise it is false.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
     readonly writableNeedDrain: boolean;
    /**
     * Number of times writable.uncork() needs to be called in order to fully uncork the stream.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
     readonly writableCorked: number;
    /**
     * Whether Writable.end has been called.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly writableEnded: boolean;
    /**
     * Whether Writable.end has been called and all buffers have been flushed.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly writableFinished: boolean;
    /**
     * Returns error if the stream has been destroyed with an error.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly errored: Error;
    /**
     * Writable completes destroyfile and returns true, otherwise returns false.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly closed: boolean;
  }
   /**
   * Duplex streams that can modify or transform the data as it is written and read.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 12
   */
  class Transform {
    /**
     * The Transform constructor.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    constructor();
    /**
     * Convert the input data. After the conversion, Transform.push can be called to send the input to the read stream.
     * Transform.push should not be called Transform.write to call.
     * 
     * @param { string } chunk - Input data to be converted.
     * @param { string } encoding - If the chunk is a string, then this is the encoding type. If chunk is a buffer,
     * then this is the special value 'buffer'. Ignore it in that case.
     * @param { Function } callback - Callback after conversion.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    doTransform(chunk: string, encoding: string, callback: Function): void;
    /**
     * After all data is flushed to the write stream, you can use the Transform.doFlush writes some extra data, should
     * not be called actively, only called by Writable after flushing all data.
     * 
     * @param { Function } callback - Callback after flush completion.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    doFlush(callback: Function): void;
  }
   /**
   * The stream from which data can be read.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 12
   */
  class Readable {
    /**
     * The Readable constructor.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    constructor();
    /**
     * Reads a buffer of a specified size from the buffer. If the available buffer is sufficient, the result
     * of the specified size is returned. Otherwise, if Readable has ended, all remaining buffers are returned.
     * 
     * @param { number } size - Expected length of the data to be read.
     * @returns { string | null } Read data from internal buffer and return. If there is no available data to
     * read, return null.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    read(size?: number): string | null;
    /**
     * Switch Readable to Streaming Mode.
     * 
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    resume(): boolean;
    /**
     * Toggle Readable to Suspend Mode.
     * 
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    pause(): boolean;
    /**
     * Sets the encoding format of the input binary data.Default: utf8.
     * 
     * @param { string } [encoding] - Original Data Encoding Type.
     * @returns { boolean } Setting successful returns true, setting failed returns false.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    setEncoding(encoding?: string): boolean;
    /**
     * Query whether it is in pause state.
     * 
     * @returns { boolean } Pause state returns true, otherwise returns false.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    isPaused(): boolean;
    /**
     * Concatenates a Writable to a Readable and switches the Readable to stream mode.
     * 
     * @param { Writable } destination - Output writable stream.
     * @param { Object } [option] - Pipeline Options.
     * @returns { Writable } Returns the Writable object.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    pipe(destination: Writable, option?: Object): Writable;
    /**
     * Disconnect Writable from Readable.
     * 
     * @param { Writable } [destination] - Writable Streams Needing to Be Disconnected.
     * @returns { Readable } Returns the Readable object.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    unpipe(destination?: Writable): Readable;
    /**
     * Registering Event Messages.
     * 
     * @param { string } event - Registering Events.
     * @param { Callback } callback - Event callback.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    on(event: string, callback: Callback<EventData>): void;
    /**
     * Cancel event message.
     * 
     * @param { string } event - Registering Events.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    off(event: string): void;
    /**
     * Called by the Readable during initialization. It should not be called actively. Call callback () after the
     * resource has been initialized within the doInitialize, or call callback (err) when an error occurs.
     * 
     * @param { Function } callback - Callback when the stream has completed the initial.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    doInitialize(callback: Function): void;
    /**
     * The specific implementation of data production should not be actively called. Readable.read controls the
     * calling. After data production, Readable.push should be called to push the produced data into the buffer.
     * If push is not called, doRead will not be called again.
     * 
     * @param { number } size -Expected length of the data to be read.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    doRead(size: number): void;
    /**
     * Adds the generated data to the buffer. The return value indicates whether the data in the buffer has not
     * reached the highWaterMark (similar to Writable.write). If the chunk is null, all data has been generated.
     * 
     * @param {  Uint8Array | string | null } chunk - Binary data to be stored in the buffer.
     * @param { string } [encoding] - Binary data encoding type.
     * @returns { boolean } If true is returned, the data in the buffer reaches the highWaterMark. Otherwise, the
     * data in the buffer does not reach the highWaterMark.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    push(chunk:  Uint8Array | string | null, encoding?: string): boolean;
    /**
     * Returns boolean indicating whether it is in ObjectMode.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly readableObjectMode: boolean;
    /**
     * Is true if it is safe to call readable.read(), which means
     * the stream has not been destroyed or emitted 'error' or 'end'.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly readable: boolean;
    /**
     * Returns the value of highWaterMark passed when creating this Readable.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly readableHighWaterMark: number;
    /**
     * This property reflects the current state of the readable stream null/true/false.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly readableFlowing: boolean;
    /**
     * Size of the data that can be read, in bytes or objects.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly readableLength: number;
    /**
     * Getter for the property encoding of a given Readable stream. The encoding property can be set using the
     * readable.setEncoding() method.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly readableEncoding: string | null;
    /**
     * Whether all data has been generated.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly readableEnded: boolean;
    /**
     * Returns error if the stream has been destroyed with an error.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly errored: Error;
    /**
     * Readable completes destroyfile and returns true, otherwise returns false.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly closed: boolean;
  }
  /**
   * The Duplex class contains all Writable functions.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 12
   */
  class Duplex extends Readable {
    /**
     * The Duplex constructor.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    constructor();
    /**
     * writes a chunk to Writable and invokes callback when the chunk is flushed. The return value indicates
     * whether the internal buffer of the Writable reaches the hightWaterMark. If true is returned, the buffer
     * does not reach the hightWaterMark. If false is returned, the buffer has been reached. The write function
     * should be called after the drain event is triggered. If the write function is called continuously,
     * the chunk is still added to the buffer until the memory overflows
     *
     * @param { string | Uint8Array } [chunk] - Data to be written.
     * @param { string } [encoding] - Encoding type.
     * @param { Function } [callback] - Callback after writing.
     * @returns { boolean } Write success returns true, write failure returns false.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    write(chunk?: string | Uint8Array, encoding?: string, callback?: Function): boolean;
    /**
     * Write the last chunk to Writable.
     *
     * @param { string | Uint8Array } [chunk] - Data to be written.
     * @param { string } [encoding] - Encoding type.
     * @param { Function } [callback] - Callback after writing.
     * @returns { Writable } Returns the Writable object.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    end(chunk?: string | Uint8Array, encoding?: string, callback?: Function): Writable;
    /**
     * Set the default encoding mode.
     *
     * @param { string } [encoding] - Encoding type.Default: utf8.
     * @returns { boolean } Setting successful returns true, setting failed returns false.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    setDefaultEncoding(encoding?: string): boolean;
    /**
     * After the call, all Write operations will be forced to write to the buffer instead of being flushed.
     *
     * @returns { boolean } Setting successful returns true, setting failed returns false.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    cork(): boolean;
    /**
     * After calling, flush all buffers.
     *
     * @returns { boolean } Setting successful returns true, setting failed returns false.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    uncork(): boolean;
    /**
     * This method is invoked by the Writable method during initialization and should not be invoked actively.
     * After the resource is initialized in the doInitialize method, the callback () method is invoked.
     *
     * @param { Function } callback - Callback when the stream has completed the initial.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    doInitialize(callback: Function): void;
    /**
     * Implemented by subclass inheritance. The implementation logic of flushing chunks in the buffer should not be
     * actively called. The call is controlled by Writable.write.
     *
     * @param { string | Uint8Array } chunk - Data to be written.
     * @param { string } encoding - Encoding type.
     * @param { Function } callback - Callback after writing.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    doWrite(chunk: string | Uint8Array, encoding: string, callback: Function): void;
    /**
     * The implementation logic of flushing chunks in the buffer in batches should not be actively called.
     * The call is controlled by Writable.write.
     *
     * @param { string[] | Uint8Array[] } chunk - Data to be written.
     * @param { Function } callback - Callback after writing.
     * @returns { Writable } Returns the Writable object.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    doWritev(chunk: string[] | Uint8Array[], callback: Function): void;
    /**
     * Returns boolean indicating whether it is in ObjectMode.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly writableObjectMode: boolean;
    /**
     * Value of highWaterMark.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly writableHighWaterMark: number;
    /**
     * Is true if it is safe to call writable.write(), which means the stream has not been destroyed, errored, or ended.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly writable: boolean;
    /**
     * Size of data that can be flushed, in bytes or objects.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
     readonly writableLength: number;
    /**
     * If the buffer of the stream is full and true, otherwise it is false.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
     readonly writableNeedDrain: boolean;
    /**
     * Number of times writable.uncork() needs to be called in order to fully uncork the stream.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
     readonly writableCorked: number;
    /**
     * Whether Writable.end has been called.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly writableEnded: boolean;
    /**
     * Whether Writable.end has been called and all buffers have been flushed.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly writableFinished: boolean;
    /**
     * Returns error if the stream has been destroyed with an error.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly errored: Error;
    /**
     * Writable completes destroyfile and returns true, otherwise returns false.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 12
     */
    readonly closed: boolean;
  }
}
export default stream;