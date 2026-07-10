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
 * stream模块提供了处理基本流类型的API。通过流，数据可按块读取或写入，而不是一次性加载到内存中。
 * 有四种基本流类型：可写流（[Writable]{@link stream.Writable}）、可读流（[Readable]{@link stream.ReadableOptions}）、双工流（[Duplex]{@link stream.Duplex}）和转换流（[Transform]{@link stream.Transform}）。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace stream {
  /**
   * 描述**Readable**构造函数中使用的选项。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface ReadableOptions {
    /**
     * 编码格式。如果输入无效字符串，会在**Readable**构造函数中抛出异常。
     *
     * 支持以下格式：utf-8、UTF-8、GBK、GB2312、gb2312、GB18030、gb18030、ibm866、iso-8859-2、iso-8859-3、iso-8859-4、iso-8859-5、iso-8859-6、iso-8859-7、iso-8859-8、iso-8859-8-i、iso-8859-10、iso-8859-13、iso-8859-14、iso-8859-15、koi8-r、koi8-u、macintosh、windows-874、windows-1250、windows-1251、windows-1252、windows-1253、windows-1254、windows-1255、windows-1256、windows-1257、windows-1258、gbk、big5、euc-jp、iso-2022-jp、shift_jis、euc-kr、x-mac-cyrillic、utf-16be和utf-16le。
     *
     * 默认值为**'utf-8'**。
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
   * 可写入数据的流。可写流允许将数据写入目标，目标可以是文件、HTTP响应、标准输出、另一个流等。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class Writable {
    /**
     * 创建**Writable**对象的构造函数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 向流的缓冲区写入数据。使用异步回调返回结果。
     *
     * @param { string | Uint8Array } [chunk] - 待写入的数据。不能为**null**、**undefined**或空字符串。
     * @param { string } [encoding] - 编码格式。默认值为**'utf8'**。目前支持**'utf8'**、**'gb18030'**、**'gbk'**和**'gb2312'**。
     * @param { Function } [callback] - 用于返回结果的回调函数。默认不调用。
     * @returns { boolean } 表示可写流缓冲区中是否还有空间。**true**表示缓冲区中还有空间；**false**表示缓冲区已满，不建议继续写入数据。
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
     * 结束可写流的写入过程。如果**writableCorked**的值大于0，则将其置为**0**，并输出缓冲区中的剩余数据。如果传入**chunk**参数，则将其视为最后一个数据块，根据当前执行上下文使用**write**或**doWrite** API写入。如果使用**doWrite**写入，**encoding**参数的有效性检查由**doWrite**决定。如果单独使用**end**（不使用**write**）且传入**chunk**参数，则数据通过**doWrite**写入。使用异步回调返回结果。
     *
     * @param { string | Uint8Array } [chunk] - 待写入的数据。默认值为**undefined**。
     * @param { string } [encoding] - 编码格式。默认值为**'utf8'**。目前支持**'utf8'**、**'gb18030'**、**'gbk'**和**'gb2312'**。
     * @param { Function } [callback] - 用于返回结果的回调函数。
     * @returns { Writable } 当前**Writable**对象。
     * @throws { BusinessError } 10200035 - The doWrite method has not been implemented.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    end(chunk?: string | Uint8Array, encoding?: string, callback?: Function): Writable;

    /**
     * 设置可写流的默认编码格式。
     *
     * @param { string } [encoding] - 默认编码格式。默认值为**'utf8'**。目前支持**'utf8'**、**'gb18030'**、**'gbk'**和**'gb2312'**。
     * @returns { boolean } 操作结果。**true**表示成功；**false**表示失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setDefaultEncoding(encoding?: string): boolean;

    /**
     * 强制将后续写入的数据缓存起来。调用此API可优化连续写入操作的性能。调用此API后，**writableCorked**的值加1。建议与[uncork()]{@link stream.Writable.uncork}配合使用。
     *
     * @returns { boolean } 操作结果。**true**表示成功；**false**表示失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    cork(): boolean;

    /**
     * 释放cork状态，刷新缓冲区中的数据并写入目标位置。调用此API后，**writableCorked**的值减1。如果值变为**0**，则流不再处于cork状态；否则，流仍处于cork状态。建议与[cork()]{@link stream.Writable.cork}配合使用。
     *
     * @returns { boolean } 操作结果。**true**表示成功；**false**表示失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    uncork(): boolean;

    /**
     * 注册事件处理回调，以监听可写流上的不同事件。
     *
     * @param { string } event - 事件类型。支持以下事件：
     * @param { Callback<emitter.EventData> } callback - 用于返回事件数据的回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    on(event: string, callback: Callback<emitter.EventData>): void;

    /**
     * 注册事件消息。
     *
     * @param { string } event - 注册的事件。
     * @param { Function } callback - 事件回调。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    on(event: string, callback: Function): void;

    /**
     * 取消注册用于监听可写流上不同事件的事件处理回调。
     *
     * @param { string } event - 事件类型。支持以下事件：
     * @param { Callback<emitter.EventData> } callback - 回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    off(event: string, callback?: Callback<emitter.EventData>): void;

    /**
     * 取消事件消息。
     *
     * @param { string } event - 注册的事件。
     * @param { Function } [callback] - 事件回调。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    off(event: string, callback?: Function): void;

    /**
     * 需要由开发者实现此API，但不要直接调用。此API在可写流初始化期间自动调用。使用异步回调返回结果。
     *
     * @param { Function } callback - 回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doInitialize(callback: Function): void;

    /**
     * 数据写入API。需要由开发者实现此API，但不要直接调用。此API在写入数据时自动调用。使用异步回调返回结果。
     *
     * @param { string | Uint8Array } chunk - 待写入的数据。
     * @param { string } encoding - 编码格式。目前支持**'utf8'**、**'gb18030'**、**'gbk'**和**'gb2312'**。
     * @param { Function } callback - 回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doWrite(chunk: string | Uint8Array, encoding: string, callback: Function): void;

    /**
     * 批量数据写入API。需要由开发者实现此API，但不要直接调用。此API在写入数据时自动调用。使用异步回调返回结果。
     *
     * @param { string[] | Uint8Array[] } chunks - 批量写入的数据数组。
     * @param { Function } callback - 回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doWritev(chunks: string[] | Uint8Array[], callback: Function): void;

    /**
     * 返回布尔值，表示是否处于ObjectMode。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableObjectMode(): boolean;

    /**
     * highWatermark的值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableHighWatermark(): int;

    /**
     * 如果调用writable.write()是安全的，返回true，即表示流未被销毁、未出错或未结束。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writable(): boolean;

    /**
     * 可刷新的数据大小，单位为字节或对象。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableLength(): int;

    /**
     * 为完全释放流，需要调用writable.uncork()的次数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableCorked(): int;

    /**
     * 是否已调用Writable.end。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableEnded(): boolean;

    /**
     * 是否已调用Writable.end并刷新了所有缓冲区。
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
   * 可从中读取数据的流。可读流用于从源（如文件或网络套接字）读取数据。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class Readable {
    /**
     * 创建**Readable**对象的构造函数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 创建**Readable**对象的构造函数。
     *
     * @param { ReadableOptions } options - **Readable**构造函数中的选项。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(options: ReadableOptions);

    /**
     * 从可读流的缓冲区中读取数据，并返回读取的数据。如果没有读取到数据，则返回**null**。
     *
     * @param { number } size - 待读取的字节数。默认值为**undefined**。
     * @returns { string | null } 从可读流中读取的数据。
     * @throws { BusinessError } 10200038 - The doRead method has not been implemented.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    read(size?: number): string | null;

    /**
     * 从缓冲区中读取指定大小的数据。如果可用缓冲区足够，则返回指定大小的结果；否则，如果Readable已结束，则返回所有剩余的缓冲区。
     *
     * @param { int } [size] - 待读取数据的期望长度。
     *     该值为整数。
     * @returns { buffer.Buffer | string | null } 如果没有可读取的数据，则返回null。
     * @throws { BusinessError } 10200038 - The doRead method has not been implemented.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    read(size?: int): buffer.Buffer | string | null;

    /**
     * 恢复已显式暂停的可读流。可以使用**isPaused**检查流是否已暂停。
     *
     * @returns { Readable } 当前**Readable**对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    resume(): Readable;

    /**
     * 暂停流动模式下的可读流。可以使用**isPaused**检查流是否已暂停。
     *
     * @returns { Readable } 当前**Readable**对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    pause(): Readable;

    /**
     * 设置可读流的编码格式。
     * 如果缓冲区中包含数据，则不允许设置编码格式，并返回**false**。
     *
     * @param { string } [encoding] - 编码格式。默认值为**'utf8'**。目前支持**'utf8'**、**'gb18030'**、**'gbk'**和**'gb2312'**。
     * @returns { boolean } 操作结果。设置成功返回**true**，否则返回**false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setEncoding(encoding?: string): boolean;

    /**
     * 检查可读流是否已暂停。流在调用[pause()]{@link stream.Readable.pause}后暂停，在调用[resume()]{@link stream.Readable.resume}后从暂停状态恢复。
     *
     * @returns { boolean } 检查结果。流已暂停返回**true**，否则返回**false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isPaused(): boolean;

    /**
     * 将一个可写流附加到可读流上，以实现数据的自动传输。
     *
     * @param { Writable } destination - 接收数据的可写流。
     * @param { Object } [options] - 预留参数。
     * @returns { Writable } 当前**Writable**对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    pipe(destination: Writable, options?: Object): Writable;

    /**
     * 将之前附加到可读流的可写流分离。
     *
     * @param { Writable } [destination] - 待分离的可写流。默认值为**undefined**。
     * @returns { Readable } 当前**Readable**对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    unpipe(destination?: Writable): Readable;

    /**
     * 注册事件处理回调，以监听可读流上的不同事件。
     *
     * @param { string } event - 事件类型。支持以下事件：
     * @param { Callback<emitter.EventData> } callback - 用于返回事件数据的回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    on(event: string, callback: Callback<emitter.EventData>): void;

    /**
     * 注册事件消息。
     *
     * @param { string } event - 注册的事件。
     * @param { Function } callback - 事件回调。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    on(event: string, callback: Function): void;

    /**
     * 取消注册用于监听可读流上不同事件的事件处理回调。
     *
     * @param { string } event - 事件类型。支持以下事件：
     * @param { Callback<emitter.EventData> } callback - 回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    off(event: string, callback?: Callback<emitter.EventData>): void;

    /**
     * 取消事件消息。
     *
     * @param { string } event - 注册的事件。
     * @param { Function } [callback] - 事件回调。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    off(event: string, callback?: Function): void;

    /**
     * 需要由开发者实现此API。在可读流首次调用[on]{@link stream.Writable#on(event: string, callback: Callback<emitter.EventData>)}时调用此API。使用异步回调返回结果。
     *
     * @param { Function } callback - 回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doInitialize(callback: Function): void;

    /**
     * 数据读取API，需在子类中实现。
     *
     * @param { int } size - 待读取的字节数。取值范围：0 <= size <= Number.MAX_VALUE
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doRead(size: int): void;

    /**
     * 将数据推入可读流的缓冲区。
     *
     * @param {  Uint8Array | string | null } chunk - 待读取的数据。<br> 从API version 22起有兼容性变更。在API version 21及之前版本，类型为 `Uint8Array | string | null`。 [since 12 - 22]
     * @param {  Uint8Array | string | undefined | null } chunk - 待读取的数据。<br> 从API version 22起有兼容性变更。在API version 21及之前版本，类型为 `Uint8Array | string | null`。 [since 23]
     * @param { string } [encoding] - 编码格式。默认值为**'utf8'**。目前支持**'utf8'**、**'gb18030'**、**'gbk'**和**'gb2312'**。
     * @returns { boolean } 表示可读流缓冲区中是否还有空间。**true**表示缓冲区中还有空间；**false**表示缓冲区已满。如果传入**null**，则始终返回**false**，表示没有可推送的数据块。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    push(chunk: Uint8Array | string | undefined | null, encoding?: string): boolean;

    /**
     * 返回布尔值，表示是否处于ObjectMode。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readableObjectMode(): boolean;

    /**
     * 如果调用readable.read()是安全的，返回true，即表示流未被销毁、未发出'error'或'end'。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readable(): boolean;

    /**
     * 返回创建此Readable时传入的highWatermark的值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readableHighWatermark(): int;

    /**
     * 此属性反映可读流的当前状态 null/true/false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readableFlowing(): boolean | null;

    /**
     * 可读取的数据大小，单位为字节或对象。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readableLength(): int;

    /**
     * 获取给定Readable流的encoding属性的getter。encoding属性可通过readable.setEncoding()方法设置。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readableEncoding(): string | null;

    /**
     * 是否已生成所有数据。
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
   * 既可读又可写的流。双工流允许数据双向传输，即可读可写。
   * **Duplex**类继承自[Readable]{@link stream.ReadableOptions}，支持**Readable**中的所有API。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class Duplex extends Readable {
    /**
     * 创建**Duplex**对象的构造函数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 向流的缓冲区写入数据。使用异步回调返回结果。
     *
     * @param { string | Uint8Array } [chunk] - 待写入的数据。不能为**null**、**undefined**或空字符串。
     * @param { string } [encoding] - 编码格式。默认值为**'utf8'**。目前支持**'utf8'**、**'gb18030'**、**'gbk'**和**'gb2312'**。
     * @param { Function } [callback] - 用于返回结果的回调函数。默认不调用。
     * @returns { boolean } 表示可写流缓冲区中是否还有空间。**true**表示缓冲区中还有空间；**false**表示缓冲区已满，不建议继续写入数据。如果继续调用write函数，数据仍会添加到缓冲区，直到内存溢出。
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
     * 结束双工流的写入过程。如果**writableCorked**的值大于0，则将其置为**0**，并输出缓冲区中的剩余数据。如果传入**chunk**参数，则将其视为最后一个数据块，根据当前执行上下文使用**write**或**doWrite** API写入。如果使用**doWrite**写入，**encoding**参数的有效性检查由**doWrite**决定。如果单独使用**end**（不使用**write**）且传入**chunk**参数，则数据通过**doWrite**写入。使用异步回调返回结果。
     *
     * @param { string | Uint8Array } [chunk] - 待写入的数据。默认值为**undefined**。
     * @param { string } [encoding] - 编码格式。默认值为**'utf8'**。目前支持**'utf8'**、**'gb18030'**、**'gbk'**和**'gb2312'**。
     * @param { Function } [callback] - 用于返回结果的回调函数。默认不调用。
     * @returns { Writable } 当前**Duplex**对象。
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
     * 设置可写流的默认编码格式。
     *
     * @param { string } [encoding] - 默认编码格式。默认值为**'utf8'**。目前支持**'utf8'**、**'gb18030'**、**'gbk'**和**'gb2312'**。
     * @returns { boolean } 操作结果。**true**表示成功；**false**表示失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setDefaultEncoding(encoding?: string): boolean;

    /**
     * 强制将后续写入的数据缓存起来。调用此API可优化连续写入操作的性能。调用此API后，**writableCorked**的值加1。建议与[uncork()]{@link stream.Writable.uncork}配合使用。
     *
     * @returns { boolean } 操作结果。**true**表示成功；**false**表示失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    cork(): boolean;

    /**
     * 释放cork状态，刷新缓冲区中的数据并写入目标位置。调用此API后，**writableCorked**的值减1。如果值变为**0**，则流不再处于cork状态；否则，流仍处于cork状态。建议与[cork()]{@link stream.Writable.cork}配合使用。
     *
     * @returns { boolean } 操作结果。**true**表示成功；**false**表示失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    uncork(): boolean;

    /**
     * 数据写入API。需要由开发者实现此API，但不要直接调用。此API在写入数据时自动调用。使用异步回调返回结果。
     *
     * @param { string | Uint8Array } chunk - 待写入的数据。
     * @param { string } encoding - 编码格式。目前支持**'utf8'**、**'gb18030'**、**'gbk'**和**'gb2312'**。
     * @param { Function } callback - 回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doWrite(chunk: string | Uint8Array, encoding: string, callback: Function): void;

    /**
     * 批量数据写入API。需要由开发者实现此API，但不要直接调用。此API在写入数据时自动调用。使用异步回调返回结果。
     *
     * @param { string[] | Uint8Array[] } chunks - 批量写入的数据数组。
     * @param { Function } callback - 回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doWritev(chunks: string[] | Uint8Array[], callback: Function): void;

    /**
     * 返回布尔值，表示是否处于ObjectMode。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableObjectMode(): boolean;

    /**
     * highWatermark的值。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableHighWatermark(): int;

    /**
     * 如果调用writable.write()是安全的，返回true，即表示流未被销毁、未出错或未结束。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writable(): boolean;

    /**
     * 可刷新的数据大小，单位为字节或对象。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableLength(): int;

    /**
     * 为完全释放流，需要调用writable.uncork()的次数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableCorked(): int;

    /**
     * 是否已调用Writable.end。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableEnded(): boolean;

    /**
     * 是否已调用Writable.end并刷新了所有缓冲区。
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
   * 一种特殊的双工流，支持数据转换和结果输出。**Transform**类继承自[Duplex]{@link stream.Duplex}，支持**Duplex**中的所有API。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class Transform extends Duplex {
    /**
     * 创建**Transform**对象的构造函数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 转换或处理输入的数据块，并通过回调通知处理完成。
     *
     * @param { string } chunk - 待写入的数据。
     * @param { string } encoding - 编码格式。目前支持**'utf8'**、**'gb18030'**、**'gbk'**和**'gb2312'**。
     * @param { Function } callback - 回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doTransform(chunk: string, encoding: string, callback: Function): void;

    /**
     * 在流结束时调用，用于处理剩余数据。使用异步回调返回结果。
     *
     * @param { Function } callback - 回调函数。
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
