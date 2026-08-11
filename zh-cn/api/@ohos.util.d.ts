/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

/**
 * 该模块主要提供常用的工具函数，实现字符串编解码（[TextEncoder]{@link util.TextEncoder}，[TextDecoder]{@link util.TextDecoder}）、
 * 有理数运算（[RationalNumber<sup>8+</sup>]{@link util.RationalNumber}）、缓冲区管理（[LRUCache<sup>9+</sup>]{@link util.LRUCache}）、
 * 范围判断（[ScopeHelper<sup>9+</sup>]{@link util.ScopeHelper}）、
 * Base64编解码（[Base64Helper<sup>9+</sup>]{@link util.Base64Helper}）、
 * 内置对象类型检查（[types<sup>8+</sup>]{@link util.types}）、对方法进行插桩和替换（[Aspect<sup>11+</sup>]{@link util.Aspect}）、
 * 虚拟机维测能力（[ArkTSVM<sup>23+</sup>]{@link util.ArkTSVM}）、二进制流解码（[StringDecoder<sup>12+</sup>]{@link util.StringDecoder}）、
 * 堆内存阈值配置（[HeapMemoryThreshold<sup>24+</sup>]{@link util.HeapMemoryThreshold}）等功能。
 * 此外还提供获取对象Hash值（[util.getHash<sup>12+</sup>]{@link util.getHash}）、
 * 获取主线程栈追踪信息（[util.getMainThreadStackTrace<sup>20+</sup>]{@link util.getMainThreadStackTrace}）等工具函数。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare namespace util {
  /**
   * 通过式样化字符串对输入的内容按特定格式输出。
   *
   * @param { string } format - 式样化字符串。
   * @param { Object[] } args - 替换式样化字符串通配符的数据，此参数缺失时，默认返回第一个参数。
   * @returns { string } 按特定格式式样化后的字符串，包含根据格式说明符处理后的参数值。
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead util.format
   */
  function printf(format: string, ...args: Object[]): string;

  /**
   * 使用样式化字符串将输入内容按特定格式输出，适用于日志输出、用户界面文本格式化等场景。
   *
   * @param { string } format - 格式化字符串，可以包含零个或多个占位符，用于指定要插入的参数的位置和格式。
   * @param { Object[] } args - 替换format参数中占位符的数据，此参数缺失时，直接返回格式化字符串本身。
   * @returns { string } 格式化后的字符串。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function format(format: string, ...args: Object[]): string;

  /**
   * 获取系统错误码的详细信息。
   *
   * @param { number } errno - 生成的错误码。
   * @returns { string } 错误码的详细信息。
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead util.errnoToString
   */
  function getErrorString(errno: number): string;

  /**
   * 获取系统错误码对应的详细信息。适用于系统调用出错时将数字错误码转换为可读的描述信息，便于开发者快速定位和排查系统级错误，常用于错误日志记录和错误提示显示。
   *
   * @param { number } errno - 系统发生错误产生的错误码。
   * @returns { string } 错误码对应的详细信息，包含可读的错误描述文本，便于开发者定位问题。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function errnoToString(errno: number): string;

  /**
   * 对异步函数进行回调化处理，回调中第一个参数是拒绝原因（如果Promise已解决，则为null），第二个参数是已解决的值。
   *
   * > **说明：**
   * >
   * > 该接口要求参数original必须是异步函数类型。如果传入的参数不是异步函数，不会进行拦截，但是会输出错误信息：
   * > "callbackWrapper: The type of Parameter must be AsyncFunction"。
   * >
   * > 该接口用于将返回Promise的async函数转换为错误优先回调风格的函数，调用此接口返回的函数接收一个回调函数作为第二个入参，调用此方法时会先执行original函数。
   * > 当original的Promise返回resolve时，入参的回调函数的第一个参数为null，第二个参数为resolve的值。
   * > 当original的Promise返回reject时，入参的回调函数的第一个参数为错误对象，第二个参数为null。
   * >
   * > 由于此方法返回类型的声明为`(err: Object, value: Object) => void`，TypeScript编译器会按照该声明进行参数数量校验，
   * > 因此当original为无入参的函数时，此接口返回的函数第一个入参需传入一个无效的占位参数。
   * > 当original为多个入参的函数时，此接口返回的函数当前仅支持传入一个参数，可使用array等容器进行多个入参的传入调用（参照下方示例代码）。
   *
   * @param { Function } original - 异步函数，要求函数返回Promise对象。该异步函数的resolve值会作为回调的第二个参数传入，reject原因会作为回调的第一个参数传入。
   * @returns { function } 返回一个回调函数，该函数第一个参数 **err** 是拒绝原因（如果Promise已解决，则为null），第二个参数 **value** 是已解决的值。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  function callbackWrapper(original: Function): (err: Object, value: Object) => void;

  /**
   * 接收一个采用"错误优先"回调模式的函数，即以`(err, value) => callback`作为最后一个参数，并返回其Promise函数。
   * 适用于将旧版回调式异步API转换为Promise风格，以便使用async/await语法进行调用，从而简化异步代码编写。
   *
   * @param { function } original - 回调函数中第一个参数 **err** 是拒绝原因（如果Promise已解决，则为null），第二个参数 **value** 是已解决的值。
   * @returns { Function } 返回一个Promise函数，该Promise在原始回调函数成功执行时resolve为回调的value值，在原始回调函数执行出错时reject为错误对象。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function promisify(original: (err: Object, value: Object) => void): Function;

  /**
   * 接收一个使用错误优先回调模式的函数（即最后一个参数为 `(err, value) => callback`），并通过 promise 返回结果。
   *
   * @param { function } original - 采用错误优先回调模式的函数，第一个参数err是拒绝原因，第二个参数value是已解决的值。
   * @returns { Object } 错误优先风格（即最后一个参数为 (err, value) => ... ）的 promise。
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead util.promisify
   */
  function promiseWrapper(original: (err: Object, value: Object) => void): Object;

  /**
   * 使用加密安全随机数生成器生成随机的RFC 4122版本4的string类型UUID。为了提升性能，此接口会默认使用缓存，即入参为true，
   * 最多可缓存128个随机的UUID。当缓存中128个UUID用尽后，会重新生成，以保证UUID的随机性。如需禁用缓存，请将入参设置为false。
   *
   * @param { boolean } [entropyCache] - 是否使用已缓存的UUID，true表示使用缓存的UUID以提升性能（最多缓存128个UUID，缓存用尽后会重新生成以保证随机性），
   *     false表示不使用缓存的UUID，默认true。
   * @returns { string } 表示此UUID的字符串。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function generateRandomUUID(entropyCache?: boolean): string;

  /**
   * 使用加密安全随机数生成器生成随机的RFC 4122版本4的Uint8Array类型UUID。为了提升性能，此接口会默认使用缓存，即入参为true，
   * 最多可缓存128个随机的UUID。当缓存中128个UUID用尽后，会重新生成，以保证UUID的随机性。如需禁用缓存，请将入参设置为false。
   *
   * @param { boolean } [entropyCache] - 是否使用已缓存的UUID，true表示使用缓存的UUID以提升性能（最多缓存128个UUID，缓存用尽后会重新生成以保证随机性），
   * false表示不使用缓存的UUID，默认true。
   * @returns { Uint8Array } 表示此UUID的Uint8Array值。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function generateRandomBinaryUUID(entropyCache?: boolean): Uint8Array;

  /**
   * 将generateRandomUUID生成的string类型UUID转换为[generateRandomBinaryUUID]{@link util.generateRandomBinaryUUID}生成的UUID，
   * 符合RFC 4122版本规范。
   *
   * @param { string } uuid - UUID字符串，必须符合RFC 4122版本规范。
   * @returns { Uint8Array } 返回表示此UUID的Uint8Array，如果解析失败，则抛出异常，错误码为10200002。
   * @throws { BusinessError } 10200002 - Invalid uuid string.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function parseUUID(uuid: string): Uint8Array;

  /**
   * 获取对象的哈希值。
   * 如果尚未获取过哈希值，则生成一个随机哈希值，保存到对象的 **hash** 字段中并返回。如果已经获取过哈希值，则返回保存在
   * **hash** 字段中的哈希值（同一对象返回相同的值）。
   *
   * @param { object } [object] - 要获取哈希值的对象。
   * @returns { number } 哈希值。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function getHash(object: object): number;

  /**
   * 描述解码相关的选项，包含 **fatal** 和 **ignoreBOM**。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  interface TextDecoderOptions {
    /**
     * 是否显示致命错误。值为 **true** 表示显示致命错误，值为 **false** 表示相反的情况。默认值为 **false**。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    fatal?: boolean;
    /**
     * 是否忽略 BOM。值为 **true** 表示忽略 BOM，值为 **false** 表示相反的情况。默认值为 **false**。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    ignoreBOM?: boolean;
  }

  /**
   * 定义解码是否跟随数据块。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamiconly
   */
  interface DecodeWithStreamOptions {
    /**
     * 是否允许后续的 **decodeWithStream()** 处理数据块。如果按块处理数据，请将此参数设置为 **true**。如果这是要处理的最后
     * 一个数据块或数据未分块，请将此参数设置为 **false**。默认值为 **false**。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    stream?: boolean;
  }

  /**
   * 描述 **decodeToString** 方法在解码字节流时的行为参数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interface DecodeToStringOptions {
    /**
     * 输入末尾出现的不完整字节序列是否需要追加在下次调用 **decodeToString** 的参数中处理。值为 **true** 表示不完整的字节
     * 序列会存储在内部缓存区直到下次调用该函数。如果值为 false，则会在当前调用该函数时直接解码该字节序列。默认值为
     * **false**。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    stream?: boolean;
  }

  /**
   * 提供将字节数组解码为字符串的 API。支持多种格式，包括 UTF-8、UTF-16LE、UTF-16BE、ISO-8859 和 Windows-1251。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  class TextDecoder {
    /**
     * 用于创建 **TextDecoder** 对象的构造函数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    constructor();

    /**
     * 编码格式。<br/>-&nbsp;支持格式：utf-8、ibm866、iso-8859-2、iso-8859-3、iso-8859-4、iso-8859-5、iso-8859-6、iso-8859-7、iso-8859-8、
     * iso-8859-8-i、iso-8859-10、iso-8859-13、iso-8859-14、iso-8859-15、koi8-r、koi8-u、macintosh、windows-874、windows-1250、
     * windows-1251、windows-1252、windows-1253、windows-1254、windows-1255、windows-1256、windows-1257、windows-1258、
     * x-mac-cyrillic、gbk、gb18030、big5、euc-jp、iso-2022-jp、shift_jis、euc-kr、utf-16be、utf-16le、gb2312、iso-8859-1。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 7 dynamic
     */
    readonly encoding: string;

    /**
     * 是否显示致命错误，true表示显示，false表示不显示。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 7 dynamic
     */
    readonly fatal: boolean;

    /**
     * 是否忽略BOM（byte order marker）标记，true表示忽略BOM标记，false表示解码结果包含BOM标记，默认值为false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 7 dynamic
     */
    readonly ignoreBOM = false;

    /**
     * 用于创建 **TextDecoder** 对象的构造函数。
     *
     * @param { string } encoding - 编码格式。默认格式为 **'utf-8'**。
     * @param { object } options - 解码相关的选项，包含 **fatal** 和 **ignoreBOM**。
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead util.TextDecoder.create
     */
    constructor(encoding?: string, options?: { fatal?: boolean; ignoreBOM?: boolean });

    /**
     * 创建一个 **TextDecoder** 对象。提供与已弃用的带参构造函数相同的功能。
     *
     * @param { string } encoding - 编码格式。默认格式为 **'utf-8'**。[since 9 - 10]
     * @param { object } options - 解码相关的选项，包含 **fatal** 和 **ignoreBOM**。[since 9 - 10]
     * @param { string } [encoding] - 编码格式。默认格式为 **'utf-8'**。[since 11]
     * @param { TextDecoderOptions } [options] - 解码相关的选项，包含 **fatal** 和 **ignoreBOM**。[since 11]
     * @returns { TextDecoder } 创建的 **TextDecoder** 对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static create(encoding?: string, options?: TextDecoderOptions): TextDecoder;

    /**
     * 将输入内容解码为字符串。
     *
     * > **说明：**
     * >
     * > 该接口会正常解析值为\0的字节，将其转换为Unicode字符\u0000（空字符），不会导致解码中断或错误。
     *
     * @param { Uint8Array } input - 要解码的 Uint8Array 对象。
     * @param { object } options - 解码相关的选项。
     * @returns { string } 获取到的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead util.TextDecoder.decodeToString
     */
    decode(input: Uint8Array, options?: { stream?: false }): string;

    /**
     * 将输入内容解码为字符串。如果 **input** 是空数组，则返回 **undefined**。
     *
     * @param { Uint8Array } input - 要解码的 Uint8Array 对象。
     * @param { object } options - 解码相关的选项。[since 9 - 10]
     * @param { DecodeWithStreamOptions } [options] - 解码相关的选项。[since 11]
     * @returns { string } 获取到的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead util.TextDecoder.decodeToString
     */
    decodeWithStream(input: Uint8Array, options?: DecodeWithStreamOptions): string;
    /**
     * 将输入内容解码为字符串。
     *
     * @param { Uint8Array } input - 要解码的 Uint8Array 对象。
     * @param { DecodeToStringOptions } [options] - 解码相关的选项。默认值为 **undefined**。
     * @returns { string } 获取到的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    decodeToString(input: Uint8Array, options?: DecodeToStringOptions): string;
  }

  /**
   * 编码信息，包含已读取的字符数和已写入的字节数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  interface EncodeIntoUint8ArrayInfo {
    /**
     * 已读取的字符数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    read: number;
    /**
     * 已写入的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    written: number;
  }

  /**
   * 提供将字符串编码为字节数组的 API。支持多种编码格式。
   * 使用 **TextEncoder** 进行编码时，每个字符所占用的字节数因编码格式而异。必须显式指定编码格式以获取所需的编码结果。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  class TextEncoder {
    /**
     * 编码格式。<br/>-&nbsp;支持格式：utf-8、gb2312、gb18030、ibm866、iso-8859-1、iso-8859-2、iso-8859-3、iso-8859-4、iso-8859-5、
     * iso-8859-6、iso-8859-7、iso-8859-8、iso-8859-8-i、iso-8859-10、iso-8859-13、iso-8859-14、iso-8859-15、koi8-r、koi8-u、
     * macintosh、windows-874、windows-1250、windows-1251、windows-1252、windows-1253、windows-1254、windows-1255、windows-1256、
     * windows-1257、windows-1258、gbk、big5、euc-jp、iso-2022-jp、shift_jis、euc-kr、x-mac-cyrillic、utf-16be、utf-16le。
     * <br/>-&nbsp; 默认值是：'utf-8'。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 7 dynamic
     */
    readonly encoding = 'utf-8';

    /**
     * 用于创建 **TextEncoder** 对象的构造函数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    constructor();

    /**
     * 用于创建 **TextEncoder** 对象的构造函数。
     *
     * @param { string } [encoding] - 编码格式。默认格式为 **'utf-8'**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    constructor(encoding?: string);

    /**
     * 创建一个 **TextEncoder** 对象。
     *
     * @param { string } [encoding] - 编码格式。默认格式为 **'utf-8'**。
     * @returns { TextEncoder } **TextEncoder** 对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    static create(encoding?: string): TextEncoder;

    /**
     * 将输入内容编码为 Uint8Array 对象。
     *
     * @param { string } [input] - 要编码的字符串。默认值为空字符串。
     * @returns { Uint8Array } 获取到的 Uint8Array 对象。
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.encodeInto
     */
    encode(input?: string): Uint8Array;

    /**
     * 将输入内容编码为 Uint8Array 对象。
     *
     * @param { string } [input] - 要编码的字符串。默认值为空字符串。如果输入参数为空字符串，则返回值为 undefined。
     * @returns { Uint8Array } 获取到的 Uint8Array 对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    encodeInto(input?: string): Uint8Array;

    /**
     * 将生成的 UTF-8 编码文本写入到数组中。
     *
     * @param { string } input - 要编码的字符串。
     * @param { Uint8Array } dest - 用于存储 UTF-8 编码文本的 Uint8Array 对象。
     * @returns { object } 获取到的对象。**read** 表示已编码的字符数，**written** 表示已编码字符所占用的字节数。
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead util.TextEncoder.encodeIntoUint8Array
     */
    encodeInto(input: string, dest: Uint8Array): { read: number; written: number };

    /**
     * 对输入内容进行编码，并将结果存储到 Uint8Array 对象中。
     *
     * @param { string } input - 要编码的字符串。
     * @param { Uint8Array } dest - 用于存储 UTF-8 编码文本的 Uint8Array 对象。
     * @returns { object } 返回该对象，其中 read 表示已编码的字符数，written 表示已编码字符所占用的字节数。[since 9 - 10]
     * @returns { EncodeIntoUint8ArrayInfo } 获取到的对象。**read** 表示已编码的字符数，**written** 表示已编码字符所占用的
     *     字节数。[since 11]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    encodeIntoUint8Array(input: string, dest: Uint8Array): EncodeIntoUint8ArrayInfo;
  }

  /**
   * 提供比较有理数、获取分子和分母的 API。例如，可以使用 **toString()** API 将有理数转换为字符串。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  class RationalNumber {
    /**
     * 用于创建 **RationalNumber** 对象的构造函数。
     *
     * @param { number } numerator - 分子，为整数。
     * @param { number } denominator - 分母，为整数。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.RationalNumber.parseRationalNumber
     */
    constructor(numerator: number, denominator: number);

    /**
     * 用于创建 **RationalNumber** 对象的构造函数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    constructor();

    /**
     * 根据给定的分子和分母创建一个 **RationalNumber** 实例。
     *
     * > **NOTE**
     * >
     * > **numerator** 和 **denominator** 参数必须为整数。如果传入小数，该函数不会被拦截，但会显示错误信息
     * > "parseRationalNumber: The type of Parameter must be integer"。
     *
     * @param { number } numerator - 分子，为整数。取值范围：-Number.MAX_VALUE <= numerator <= Number.MAX_VALUE。
     * @param { number } denominator - 分母，为整数。取值范围：-Number.MAX_VALUE <= denominator <= Number.MAX_VALUE。
     * @returns { RationalNumber } 获取到的 **RationalNumber** 对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    static parseRationalNumber(numerator: number, denominator: number): RationalNumber;

    /**
     * 根据给定的字符串创建一个 **RationalNumber** 对象。
     *
     * > **NOTE**
     * >
     * > **rationalString** 参数必须为字符串。如果传入小数字符串，该函数不会被拦截，但会显示错误信息
     * > "createRationalFromString: The type of Parameter must be integer string"。
     *
     * @param { string } rationalString - 用于创建 **RationalNumber** 对象的字符串。
     * @returns { RationalNumber } 返回根据给定字符串生成的 RationalNumber 对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    static createRationalFromString(rationalString: string): RationalNumber;

    /**
     * 将当前的 RationalNumber 对象与给定对象进行比较。
     *
     * @param { RationalNumber } another - 表示其他有理数的对象。
     * @returns { number } 根据比较结果返回 0、1 或 -1。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.compare
     */
    compareTo(another: RationalNumber): number;

    /**
     * 将当前的 RationalNumber 对象与给定对象进行比较。
     *
     * @param { RationalNumber } another - 表示其他有理数的对象。
     * @returns { number } 根据比较结果返回 0、1 或 -1。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    compare(another: RationalNumber): number;

    /**
     * 判断此 **RationalNumber** 对象与给定对象是否相等。
     *
     * @param { Object } obj - 用于与此 **RationalNumber** 对象进行比较的对象。
     * @returns { boolean } 检查结果。如果两个对象相等，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    equals(obj: Object): boolean;

    /**
     * 获取此 **RationalNumber** 对象的整数或浮点数值。
     *
     * @returns { number } 整数或浮点数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    valueOf(): number;

    /**
     * 获取两个指定整数的最大公约数。
     *
     * @param { number } number1 - 用于获取最大公约数的第一个整数。
     * @param { number } number2 - 用于获取最大公约数的第二个整数。
     * @returns { number } 获取到的最大公约数。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.RationalNumber.getCommonFactor
     */
    static getCommonDivisor(number1: number, number2: number): number;

    /**
     * 获取两个指定整数的最大公约数。
     *
     * > **NOTE**
     * >
     * > **number1** 和 **number2** 参数必须为整数。如果传入小数，该函数不会被拦截，但会显示错误信息
     * > "getCommonFactor: The type of Parameter must be integer"。
     *
     * @param { number } number1 - 用于获取最大公约数的第一个整数。取值范围：-Number.MAX_VALUE <= number1 <=
     *     Number.MAX_VALUE。
     * @param { number } number2 - 用于获取最大公约数的第二个整数。取值范围：-Number.MAX_VALUE <= number2 <=
     *     Number.MAX_VALUE。
     * @returns { number } 获取到的最大公约数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    static getCommonFactor(number1: number, number2: number): number;

    /**
     * 获取此 **RationalNumber** 对象的分母。
     *
     * @returns { number } 此 **RationalNumber** 对象的分母。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    getDenominator(): number;

    /**
     * 获取此 **RationalNumber** 对象的分子。
     *
     * @returns { number } 此 **RationalNumber** 对象的分子。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    getNumerator(): number;

    /**
     * 判断此 **RationalNumber** 对象表示的是否为有限值。
     *
     * @returns { boolean } 检查结果。如果此 **RationalNumber** 对象表示有限值（分母不为 **0**），则返回 **true**；
     *     否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isFinite(): boolean;

    /**
     * 判断此 **RationalNumber** 对象是否为非数字（NaN）。
     *
     * @returns { boolean } 检查结果。如果此 **RationalNumber** 对象为 NaN（分母和分子都为 **0**），则返回 **true**；
     *     否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isNaN(): boolean;

    /**
     * 判断此 **RationalNumber** 对象的值是否为 **0**。
     *
     * @returns { boolean } 检查结果。如果此 **RationalNumber** 对象的值为 **0**，则返回 **true**；否则返回
     *     **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isZero(): boolean;

    /**
     * 获取此 **RationalNumber** 对象的字符串表示形式。
     *
     * @returns { string } 正常情况下返回以分子/分母格式的字符串，例如 3/5；如果此对象的分子为 **0**，则返回
     *     **0/1**；如果分母为 **0**，则返回 **Infinity**；如果分子和分母都为 **0**，则返回 **NaN**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    toString(): string;
  }

  /**
   * LruBuffer 算法在缓存空间不足时使用新数据替换最不常使用的数据。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead util.LRUCache
   */
  class LruBuffer<K, V> {
    /**
     * 用于创建 **LruBuffer** 实例的构造函数。缓存的默认容量为 64。
     *
     * @param { number } capacity - 要创建的缓存的容量。默认值为 **64**。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.constructor
     */
    constructor(capacity?: number);

    /**
     * 改变缓存容量。如果新容量小于等于 **0**，则抛出异常。
     *
     * @param { number } newCapacity - 缓存的新容量。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.updateCapacity
     */
    updateCapacity(newCapacity: number): void;

    /**
     * 获取此缓存的字符串表示形式。
     *
     * @returns { string } 此缓存的字符串表示形式。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.toString
     */
    toString(): string;

    /**
     * 当前缓冲区中值的总数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.length
     */
    length: number;

    /**
     * 获取此缓存的容量。
     *
     * @returns { number } 缓存的容量。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.getCapacity
     */
    getCapacity(): number;

    /**
     * 从此缓存中清除键值对。将调用 **afterRemoval()** API 执行后续操作。
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.clear
     */
    clear(): void;

    /**
     * 获取 **createDefault()** 的返回值数量。
     *
     * @returns { number } **createDefault()** 的返回值数量。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.getCreateCount
     */
    getCreateCount(): number;

    /**
     * 获取查询值未匹配的次数。
     *
     * @returns { number } 查询值未匹配的次数。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.getMissCount
     */
    getMissCount(): number;

    /**
     * 获取从此缓存中移除的次数。
     *
     * @returns { number } 从缓存中移除的次数。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.getRemovalCount
     */
    getRemovalCount(): number;

    /**
     * 获取查询值匹配的次数。
     *
     * @returns { number } 查询值匹配的次数。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.getMatchCount
     */
    getMatchCount(): number;

    /**
     * 获取向此缓存添加的次数。
     *
     * @returns { number } 向缓存添加的次数。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.getPutCount
     */
    getPutCount(): number;

    /**
     * 判断此缓存是否为空。
     *
     * @returns { boolean } 如果缓存不包含任何值，则返回 **true**。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.isEmpty
     */
    isEmpty(): boolean;

    /**
     * 获取指定 key 对应的值。
     *
     * @param { K } key - 要查询值的 key。
     * @returns { V | undefined } key 对应的值。如果未找到匹配项，则返回 **undefined**。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.get
     */
    get(key: K): V | undefined;

    /**
     * 向此缓存添加键值对。
     *
     * @param { K } key - 要添加的键值对的 key。
     * @param { V } value - 要添加的键值对的 value。
     * @returns { V } 添加的值。如果 key 已存在，则返回已存在的值；如果 **key** 或 **value** 传入 **null**，则抛出错误。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.put
     */
    put(key: K, value: V): V;

    /**
     * 获取此缓存中的所有值，按从最近最多访问到最近最少访问的顺序排列。
     *
     * @returns { V[] } 此缓存中的所有值，按从最近最多访问到最近最少访问的顺序排列。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.values
     */
    values(): V[];

    /**
     * 获取此缓存中的所有 key，按从最近最多访问到最近最少访问的顺序排列。
     *
     * @returns { K[] } 此缓存中的所有 key，按从最近最多访问到最近最少访问的顺序排列。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.keys
     */
    keys(): K[];

    /**
     * 从此缓存中移除指定的 key 及其对应的值。
     *
     * @param { K } key - 要移除的 key。
     * @returns { V | undefined } 包含被移除键值对的 **Optional** 对象。如果 key 不存在，则返回空的 **Optional**
     *     对象；如果 **key** 传入 **null**，则抛出错误。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.remove
     */
    remove(key: K): V | undefined;

    /**
     * 在移除值后执行后续操作。
     *
     * @param { boolean } isEvict - 容量是否不足。如果值为 **true**，则由于容量不足而调用此 API。
     * @param { K } key - 被移除的 key。
     * @param { V } value - 被移除的值。
     * @param { V } newValue - 如果调用了 **put()** 方法并且要添加的 key 已存在时该 key 的新值。其他情况下此参数为空。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.afterRemoval
     */
    afterRemoval(isEvict: boolean, key: K, value: V, newValue: V): void;

    /**
     * 判断此缓存是否包含指定的 key。
     *
     * @param { K } key - 要检查的 key。
     * @returns { boolean } 检查结果。如果缓存包含指定的 key，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.contains
     */
    contains(key: K): boolean;

    /**
     * 当指定 key 的值不可用时，创建一个值。
     *
     * @param { K } key - 缺少值的 key。
     * @returns { V } key 对应的值。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.createDefault
     */
    createDefault(key: K): V;

    /**
     * 获取一个新的迭代器对象，该对象包含此对象中的所有键值对。
     *
     * @returns { IterableIterator<[K, V]> } 可迭代的数组。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.entries
     */
    entries(): IterableIterator<[K, V]>;

    /**
     * 指定对象的默认迭代器。
     *
     * @returns { IterableIterator<[K, V]> } 返回以键值对形式的二维数组。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.[Symbol.iterator]
     */
    [Symbol.iterator](): IterableIterator<[K, V]>;
  }

  /**
   * 提供在缓存已满时丢弃最近最少使用的数据以腾出空间给新元素的 API。此类使用最近最少使用（LRU）算法，该算法认为最近
   * 使用的数据可能在不久的将来再次被访问，而最少访问的数据是最不具价值的数据，应从缓存中移除。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  class LRUCache<K, V> {
    /**
     * 用于创建 **LRUCache** 实例的构造函数。缓存的默认容量为 64。
     *
     * @param { number } [capacity] - 要创建的缓存的容量。默认值为 **64**，最大值为 **2147483647**。[since 12]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    constructor(capacity?: number);

    /**
     * 改变缓存容量。如果新容量小于等于 **0**，则抛出异常。如果缓存中的值总数大于指定容量，则执行删除操作。
     *
     * @param { number } newCapacity - 缓存的新容量。最大值为 **2147483647**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    updateCapacity(newCapacity: number): void;

    /**
     * 获取此缓存的字符串表示形式。
     *
     * @returns { string } 此缓存的字符串表示形式。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    toString(): string;

    /**
     * 当前缓存中值的总数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    length: number;

    /**
     * 获取此缓存的容量。
     *
     * @returns { number } 缓存的容量。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    getCapacity(): number;

    /**
     * 清除此缓存中的键值对。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    clear(): void;

    /**
     * 获取创建对象的次数。
     *
     * @returns { number } 创建对象的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    getCreateCount(): number;

    /**
     * 获取查询值未匹配的次数。
     *
     * @returns { number } 查询值未匹配的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    getMissCount(): number;

    /**
     * 获取此缓存中键值对被回收的次数。
     *
     * @returns { number } 此缓存中键值对被回收的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    getRemovalCount(): number;

    /**
     * 获取查询值匹配的次数。
     *
     * @returns { number } 查询值匹配的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    getMatchCount(): number;

    /**
     * 获取向此缓存添加的次数。
     *
     * @returns { number } 向缓存添加的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    getPutCount(): number;

    /**
     * 判断此缓存是否为空。
     *
     * @returns { boolean } 如果缓存不包含任何值，则返回 **true**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    isEmpty(): boolean;

    /**
     * 获取 key 对应的值。如果该 key 不在缓存中，则调用
     * [createDefault<sup>9+</sup>]{@link util.LRUCache.createDefault} 创建该 key。如果 **createDefault** 中指定的值
     * 不为 **undefined**，则调用 [afterRemoval<sup>9+</sup>]{@link util.LRUCache.afterRemoval} 返回 **createDefault**
     * 中指定的值。
     *
     * @param { K } key - 要查询值的 key。
     * @returns { V | undefined } key 对应的值。如果未找到匹配项，则返回 **createDefault** 中指定的值。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    get(key: K): V | undefined;

    /**
     * 向此缓存添加键值对，并返回与该 key 关联的值。如果缓存中的值总数大于指定容量，则执行删除操作。
     *
     * @param { K } key - 要添加的键值对的 key。
     * @param { V } value - 要添加的键值对的 value。
     * @returns { V } 添加的键值对的值。如果 key 或 value 为空，则抛出异常。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    put(key: K, value: V): V;

    /**
     * 获取此缓存中的所有值，按从最近最少访问到最近最多访问的顺序排列。
     *
     * @returns { V[] } 此缓存中所有值的列表，按从最近最少访问到最近最多访问的顺序排列。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    values(): V[];

    /**
     * 获取此缓存中的所有 key，按从最近最少访问到最近最多访问的顺序排列。
     *
     * @returns { K[] } 此缓存中所有 key 的列表，按从最近最少访问到最近最多访问的顺序排列。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    keys(): K[];

    /**
     * 从此缓存中移除 key 及其关联的值，并返回与该 key 关联的值。如果 key 不存在，则返回 **undefined**。
     *
     * @param { K } key - 要移除的 key。
     * @returns { V | undefined } 如果 key 存在于缓存中，则返回包含被移除键值对的 **Optional** 对象；如果 key 不存在
     *     则返回 **undefined**；如果 **key** 传入 **null**，则抛出错误。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    remove(key: K): V | undefined;

    /**
     * 在移除值后执行后续操作。后续操作必须由开发者实现。该 API 在删除操作期间会被调用，例如
     * [get<sup>9+</sup>]{@link util.LRUCache.get}、[put<sup>9+</sup>]{@link util.LRUCache.put}、
     * [remove<sup>9+</sup>]{@link util.LRUCache.remove}、[clear<sup>9+</sup>]{@link util.LRUCache.clear} 和
     * [updateCapacity<sup>9+</sup>]{@link util.LRUCache.updateCapacity}。
     *
     * > **NOTE**
     * >
     * > 如果在调用 [clear<sup>9+</sup>]{@link util.LRUCache.clear} 和
     * > [updateCapacity<sup>9+</sup>]{@link util.LRUCache.updateCapacity} 后执行回调方法，并且输入的 **key** 和
     * > **value** 参数为 MapIterator 类型，请参考示例 2 执行后续操作。
     *
     * @param { boolean } isEvict - 容量是否不足。如果值为 **true**，则由于容量不足而调用此 API。
     * @param { K } key - 被移除的 key。
     * @param { V } value - 被移除的值。
     * @param { V } newValue - 如果调用了 **put()** 方法并且要添加的 key 已存在时该 key 的新值。其他情况下此参数为空。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    afterRemoval(isEvict: boolean, key: K, value: V, newValue: V): void;

    /**
     * 判断此缓存是否包含指定的 key。
     *
     * @param { K } key - 要检查的 key。
     * @returns { boolean } 检查结果。如果缓存包含指定的 key，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    contains(key: K): boolean;

    /**
     * 在缓存中无匹配的 key 时执行后续操作，并返回与该 key 关联的值（默认为 **undefined**）。
     *
     * @param { K } key - key。
     * @returns { V } key 对应的值。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    createDefault(key: K): V;

    /**
     * 返回一个迭代器对象，该对象按插入顺序遍历此对象中的所有键值对（[key, value]）。
     *
     * @returns { IterableIterator<[K, V]> } 可迭代的数组。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    entries(): IterableIterator<[K, V]>;

    /**
     * 指定对象的默认迭代器。
     *
     * @returns { IterableIterator<[K, V]> } 返回以键值对形式的二维数组。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    [Symbol.iterator](): IterableIterator<[K, V]>;
  }

  /**
   * **ScopeComparable** 类型的值用于实现 **compareTo** 方法。因此，请确保输入参数是可比较的。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  interface ScopeComparable {
    /**
     * 比较两个值并返回布尔值。
     *
     * @param { ScopeComparable } other - 与当前值进行比较的另一个值。
     * @returns { boolean } 检查结果。如果当前值大于等于输入值，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    compareTo(other: ScopeComparable): boolean;
  }

  /**
   * 定义 **Scope** 对象中的值类型。
   *
   * @unionmember { ScopeComparable } 值类型为 ScopeComparable。
   * @unionmember { number } 值类型为 number。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  type ScopeType = ScopeComparable | number;

  /**
   * Scope 接口用于描述字段的有效范围。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead util.ScopeHelper
   */
  class Scope {
    /**
     * 用于创建具有指定上下限的 **Scope** 对象的构造函数。
     *
     * @param { ScopeType } lowerObj - **Scope** 对象的下限。
     * @param { ScopeType } upperObj - **Scope** 对象的上限。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.constructor
     */
    constructor(lowerObj: ScopeType, upperObj: ScopeType);

    /**
     * 获取包含此 **Scope** 的字符串表示形式。
     *
     * @returns { string } 包含此 **Scope** 的字符串表示形式。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.toString
     */
    toString(): string;

    /**
     * 获取此 **Scope** 与给定 **Scope** 的交集。
     *
     * @param { Scope } range - 指定的 **Scope**。
     * @returns { Scope } 此 **Scope** 与给定 **Scope** 的交集。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.intersect
     */
    intersect(range: Scope): Scope;

    /**
     * 获取此 **Scope** 与给定上下限的交集。
     *
     * @param { ScopeType } lowerObj - 下限。
     * @param { ScopeType } upperObj - 上限。
     * @returns { Scope } 此 **Scope** 与给定上下限的交集。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.intersect
     */
    intersect(lowerObj: ScopeType, upperObj: ScopeType): Scope;

    /**
     * 获取此 **Scope** 的上限。
     *
     * @returns { ScopeType } 此 **Scope** 的上限。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.ScopeHelper.getUpper
     */
    getUpper(): ScopeType;

    /**
     * 获取此 **Scope** 的下限。
     *
     * @returns { ScopeType } 此 **Scope** 的下限。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.ScopeHelper.getLower
     */
    getLower(): ScopeType;

    /**
     * 获取此 **Scope** 与给定上下限的并集。
     *
     * @param { ScopeType } lowerObj - 下限。
     * @param { ScopeType } upperObj - 上限。
     * @returns { Scope } 此 **Scope** 与给定上下限的并集。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.expand
     */
    expand(lowerObj: ScopeType, upperObj: ScopeType): Scope;

    /**
     * 获取此 **Scope** 与给定 **Scope** 的并集。
     *
     * @param { Scope } range - 指定的 **Scope**。
     * @returns { Scope } 此 **Scope** 与给定 **Scope** 的并集。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.expand
     */
    expand(range: Scope): Scope;

    /**
     * 获取此 **Scope** 与给定值的并集。
     *
     * @param { ScopeType } value - 指定的值。
     * @returns { Scope } 此 **Scope** 与给定值的并集。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.expand
     */
    expand(value: ScopeType): Scope;

    /**
     * 判断一个值是否在此 **Scope** 范围内。
     *
     * @param { ScopeType } value - 指定的值。
     * @returns { boolean } 检查结果。如果值在此 **Scope** 范围内，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.contains
     */
    contains(value: ScopeType): boolean;

    /**
     * 判断一个范围是否在此 **Scope** 范围内。
     *
     * @param { Scope } range - 指定的 **Scope**。
     * @returns { boolean } 检查结果。如果范围在此 **Scope** 范围内，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.contains
     */
    contains(range: Scope): boolean;

    /**
     * 将一个值限制在此 **Scope** 范围内。
     *
     * @param { ScopeType } value - 指定的值。
     * @returns { ScopeType } 如果指定值小于下限，则返回 **lowerObj**；如果指定值大于上限，则返回 **upperObj**；如果
     *     在此 **Scope** 范围内，则返回指定值。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.ScopeHelper.clamp
     */
    clamp(value: ScopeType): ScopeType;
  }

  /**
   * 提供定义字段有效范围的 API。此类的构造函数创建具有上下限的可比较对象。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  class ScopeHelper {
    /**
     * 用于创建具有指定上下限的 **ScopeHelper** 对象的构造函数。
     *
     * @param { ScopeType } lowerObj - **Scope** 对象的下限。
     * @param { ScopeType } upperObj - **Scope** 对象的上限。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    constructor(lowerObj: ScopeType, upperObj: ScopeType);

    /**
     * 获取包含此 **Scope** 的字符串表示形式。
     *
     * @returns { string } 包含此 **Scope** 的字符串表示形式。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    toString(): string;

    /**
     * 获取此 **Scope** 与给定 **Scope** 的交集。如果交集为空，则抛出异常。
     *
     * @param { ScopeHelper } range - 指定的 **Scope**。
     * @returns { ScopeHelper } 此 **Scope** 与给定 **Scope** 的交集。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    intersect(range: ScopeHelper): ScopeHelper;

    /**
     * 获取此 **Scope** 与给定上下限的交集。如果交集为空，则抛出异常。
     *
     * @param { ScopeType } lowerObj - 下限。
     * @param { ScopeType } upperObj - 上限。
     * @returns { ScopeHelper } 此 **Scope** 与给定上下限的交集。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    intersect(lowerObj: ScopeType, upperObj: ScopeType): ScopeHelper;

    /**
     * 获取此 **Scope** 的上限。
     *
     * @returns { ScopeType } 此 **Scope** 的上限。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    getUpper(): ScopeType;

    /**
     * 获取此 **Scope** 的下限。
     *
     * @returns { ScopeType } 此 **Scope** 的下限。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    getLower(): ScopeType;

    /**
     * 获取此 **Scope** 与给定上下限的并集。
     *
     * @param { ScopeType } lowerObj - 下限。
     * @param { ScopeType } upperObj - 上限。
     * @returns { ScopeHelper } 此 **Scope** 与给定上下限的并集。
     * @syscap SystemCapability.Utils.Lang
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    expand(lowerObj: ScopeType, upperObj: ScopeType): ScopeHelper;

    /**
     * 获取此 **Scope** 与给定 **Scope** 的并集。
     *
     * @param { ScopeHelper } range - 指定的 **Scope**。
     * @returns { ScopeHelper } 此 **Scope** 与给定 **Scope** 的并集。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    expand(range: ScopeHelper): ScopeHelper;

    /**
     * 获取此 **Scope** 与给定值的并集。
     *
     * @param { ScopeType } value - 指定的值。
     * @returns { ScopeHelper } 此 **Scope** 与给定值的并集。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    expand(value: ScopeType): ScopeHelper;

    /**
     * 判断一个范围是否在此 **Scope** 范围内。
     *
     * @param { ScopeType } value - 指定的值。
     * @returns { boolean } 检查结果。如果值在此 **Scope** 范围内，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    contains(value: ScopeType): boolean;

    /**
     * 判断一个范围是否在此 **Scope** 范围内。
     *
     * @param { ScopeHelper } range - 指定的 **Scope**。
     * @returns { boolean } 检查结果。如果范围在此 **Scope** 范围内，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    contains(range: ScopeHelper): boolean;

    /**
     * 将一个值限制在此 **Scope** 范围内。
     *
     * @param { ScopeType } value - 指定的值。
     * @returns { ScopeType } 如果指定值小于下限，则返回 **lowerObj**；如果指定值大于上限，则返回 **upperObj**；如果
     *     在此 **Scope** 范围内，则返回指定值。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    clamp(value: ScopeType): ScopeType;
  }

  /**
   * 将包含 Base64 数据的字符串或 Uint8Array 解码为重新分配的 Uint8Array。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead util.Base64Helper
   */
  class Base64 {
    /**
     * 用于创建 **Base64** 对象的构造函数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.Base64Helper.constructor
     */
    constructor();

    /**
     * 对输入的 Uint8Array 字节数组进行 Base64 编码，并返回编码后的 Uint8Array。
     *
     * @param { Uint8Array } src - 要编码的 Uint8Array 对象。
     * @returns { Uint8Array } 获取到的 Uint8Array 对象。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.Base64Helper.encodeSync
     */
    encodeSync(src: Uint8Array): Uint8Array;

    /**
     * 对输入的 Uint8Array 字节数组进行 Base64 编码，并返回编码后的字符串。
     *
     * @param { Uint8Array } src - 要编码的 Uint8Array 对象。
     * @returns { string } 获取到的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.Base64Helper.encodeToStringSync
     */
    encodeToStringSync(src: Uint8Array): string;

    /**
     * 将输入内容解码为 Uint8Array 对象。
     *
     * @param { Uint8Array | string } src - 要解码的 Uint8Array 对象或字符串。
     * @returns { Uint8Array } 获取到的 Uint8Array 对象。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.Base64Helper.decodeSync
     */
    decodeSync(src: Uint8Array | string): Uint8Array;

    /**
     * 将输入内容编码为 Uint8Array 对象。该接口使用 promise 返回结果。
     *
     * @param { Uint8Array } src - 要编码的 Uint8Array 对象。
     * @returns { Promise<Uint8Array> } 用于返回获取到的 Uint8Array 对象的 promise。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.Base64Helper.encode
     */
    encode(src: Uint8Array): Promise<Uint8Array>;

    /**
     * 将输入内容编码为字符串。该接口使用 promise 返回结果。
     *
     * @param { Uint8Array } src - 要编码的 Uint8Array 对象。
     * @returns { Promise<string> } 用于返回获取到的字符串的 promise。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.Base64Helper.encodeToString
     */
    encodeToString(src: Uint8Array): Promise<string>;

    /**
     * 将输入内容解码为 Uint8Array 对象。该接口使用 promise 返回结果。
     *
     * @param { Uint8Array | string } src - 要解码的 Uint8Array 对象或字符串。
     * @returns { Promise<Uint8Array> } 用于返回获取到的 Uint8Array 对象的 promise。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.Base64Helper.decode
     */
    decode(src: Uint8Array | string): Promise<Uint8Array>;
  }

  /**
   * Base64 编码格式枚举。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enum Type {
    /**
     * 基本格式。
     * 从 API version 11 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    BASIC = 0,
    /**
     * MIME 格式。
     * 从 API version 11 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    MIME = 1,
    /**
     * BASIC_URL_SAFE 格式。
     *
     * 该值从 API version 12 开始支持。
     * 从 API version 12 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    BASIC_URL_SAFE = 2,
    /**
     * MIME_URL_SAFE 格式。
     *
     * 该值从 API version 12 开始支持。
     * 从 API version 12 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    MIME_URL_SAFE = 3
  }

  /**
   * 提供 Base64 和 Base64URL 的编解码。Base64 编码表包含 64 个字符，分别为大写字母（A-Z）、小写字母（a-z）、数字（0-9）
   * 以及特殊字符加号（+）和斜杠（/）。编码时，原始数据按三个字节一组进行划分，每组包含一个 6 位的数字。然后使用 Base64
   * 编码表中对应的字符来表示这些数字。如果最后一组只包含一个或两个字节，则使用等号（=）进行填充。Base64URL 编码表包含
   * 64 个字符，分别为大写字母（A-Z）、小写字母（a-z）、数字（0-9）以及特殊字符加号（+）和斜杠（/）。Base64URL 编码结果
   * 不包含等号（=）。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  class Base64Helper {
    /**
     * 用于创建 **Base64Helper** 实例的构造函数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    constructor();

    /**
     * 将输入内容编码为 Uint8Array 对象。
     *
     * @param { Uint8Array } src - 要编码的 Uint8Array 对象。
     * @param { Type } [options] - 编码格式。<br>可取值如下：<br>- **util.Type.BASIC**（默认）：Base64 编码。<br>-
     *     **util.Type.BASIC_URL_SAFE**：Base64URL 编码。[since 12]
     * @returns { Uint8Array } 获取到的 Uint8Array 对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    encodeSync(src: Uint8Array, options?: Type): Uint8Array;

    /**
     * 对输入的 Uint8Array 字节数组进行 Base64 编码，并返回字符串。该方法支持多种编码格式，包括标准 Base64 编码、符合
     * MIME 规范的 Base64 编码（带换行）以及 URL 安全的 Base64 编码。
     *
     * @param { Uint8Array } src - 要编码的 Uint8Array 对象。
     * @param { Type } [options] - 编码格式。<br>可取值如下：<br>- **util.Type.BASIC**（默认）：Base64 编码。返回值不
     *     包含回车符或换行符。<br>- **util.Type.MIME**：Base64 编码。如果返回值超过 76 个字符，则每 76 个字符插入一个换
     *     行，每行以 '\r\n' 结尾。如果返回值少于 76 个字符，则抛出异常。<br>- **util.Type.BASIC_URL_SAFE**：Base64URL
     *     编码。返回值不包含回车符或换行符。<br>- **util.Type.MIME_URL_SAFE**：Base64URL 编码。返回值每行最多 76 个字符
     *     且以 '\r\n' 结尾。[since 10 - 11]
     * @param { Type } options - 编码格式。<br>可取值如下：<br>- **util.Type.BASIC**（默认）：Base64 编码。返回值不包含
     *     回车符或换行符。<br>- **util.Type.MIME**：Base64 编码。如果返回值超过 76 个字符，则每 76 个字符插入一个换行，
     *     每行以 '\r\n' 结尾。如果返回值少于 76 个字符，则抛出异常。<br>- **util.Type.BASIC_URL_SAFE**：Base64URL 编码。
     *     返回值不包含回车符或换行符。<br>- **util.Type.MIME_URL_SAFE**：Base64URL 编码。返回值每行最多 76 个字符且以
     *     '\r\n' 结尾。[since 12]
     * @returns { string } 获取到的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    encodeToStringSync(src: Uint8Array, options?: Type): string;

    /**
     * 将字符串解码为 Uint8Array 对象。该接口同步返回结果。
     *
     * @param { Uint8Array | string } src - 要解码的 Uint8Array 对象或字符串。
     * @param { Type } [options] - 解码格式。<br>可取值如下：<br>- **util.Type.BASIC**（默认）：Base64 解码。<br>-
     *     **util.Type.MIME**：Base64 解码。输入参数 **src** 包含回车符和换行符。<br>- **util.Type.BASIC_URL_SAFE**：
     *     Base64URL 解码。<br>- **util.Type.MIME_URL_SAFE**：Base64URL 解码。输入参数 **src** 包含回车符和换行符。
     *     [since 10]
     * @returns { Uint8Array } 获取到的 Uint8Array 对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    decodeSync(src: Uint8Array | string, options?: Type): Uint8Array;

    /**
     * 将输入内容编码为 Uint8Array 对象。该接口使用 promise 返回结果。
     *
     * @param { Uint8Array } src - 要编码的 Uint8Array 对象。
     * @param { Type } [options] - 编码格式。<br>可取值如下：<br>- **util.Type.BASIC**（默认）：Base64 编码。<br>-
     *     **util.Type.BASIC_URL_SAFE**：Base64URL 编码。[since 12]
     * @returns { Promise<Uint8Array> } 用于返回获取到的 Uint8Array 对象的 promise。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    encode(src: Uint8Array, options?: Type): Promise<Uint8Array>;

    /**
     * 将输入内容编码为字符串。该接口使用 promise 返回结果。
     *
     * @param { Uint8Array } src - 要编码的 Uint8Array 对象。
     * @param { Type } [options] - 编码格式。<br>可取值如下：<br>- **util.Type.BASIC**（默认）：Base64 编码。返回值不
     *     包含回车符或换行符。<br>- **util.Type.MIME**：Base64 编码。返回值每行最多 76 个字符且以 '\r\n' 结尾。<br>-
     *     **util.Type.BASIC_URL_SAFE**：Base64URL 编码。返回值不包含回车符或换行符。<br>- **util.Type.MIME_URL_SAFE**：
     *     Base64URL 编码。返回值每行最多 76 个字符且以 '\r\n' 结尾。[since 10]
     * @returns { Promise<string> } 用于返回获取到的字符串的 promise。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    encodeToString(src: Uint8Array, options?: Type): Promise<string>;

    /**
     * 将输入内容解码为 Uint8Array 对象。该接口使用 promise 返回结果。
     *
     * @param { Uint8Array | string } src - 要解码的 Uint8Array 对象或字符串。
     * @param { Type } [options] - 解码格式。<br>可取值如下：<br>- **util.Type.BASIC**（默认）：Base64 解码。<br>-
     *     **util.Type.MIME**：Base64 解码。输入参数 **src** 包含回车符和换行符。<br>- **util.Type.BASIC_URL_SAFE**：
     *     Base64URL 解码。<br>- **util.Type.MIME_URL_SAFE**：Base64URL 解码。输入参数 **src** 包含回车符和换行符。
     *     [since 10]
     * @returns { Promise<Uint8Array> } 用于返回获取到的 Uint8Array 对象的 promise。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    decode(src: Uint8Array | string, options?: Type): Promise<Uint8Array>;
  }

  /**
   * 提供检查不同内置对象类型的 API，例如 ArrayBuffer、Map 和 Set，以避免类型错误导致的异常。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  class types {
    /**
     * 用于创建 **Types** 对象的构造函数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    constructor();
    /**
     * 判断入参是否为 ArrayBuffer 或 SharedArrayBuffer 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 ArrayBuffer 或 SharedArrayBuffer 类型，则返回 **true**；否则返回
     *     **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isAnyArrayBuffer(value: Object): boolean;
    /**
     * 判断入参是否为 ArrayBufferView 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 ArrayBufferView 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isArrayBufferView(value: Object): boolean;
    /**
     * 判断入参是否为 **arguments** 对象。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 **arguments** 对象，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     */
    isArgumentsObject(value: Object): boolean;
    /**
     * 判断入参是否为 ArrayBuffer 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 ArrayBuffer 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isArrayBuffer(value: Object): boolean;
    /**
     * 判断入参是否为异步函数。
     *
     * > **说明：**
     * >
     * > 该接口无法对AsyncGenerator Function进行有效判断，建议通过获取函数的constructor.name属性与'AsyncGeneratorFunction'做判等的方式替代。
     * >
     * > 该接口无法对Sendable class中的async成员函数进行有效判断，无替代方案。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为异步函数，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isAsyncFunction(value: Object): boolean;
    /**
     * 判断入参是否为 BigInt64Array 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 BigInt64Array 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isBigInt64Array(value: Object): boolean;
    /**
     * 判断入参是否为 BigUint64Array 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 BigUint64Array 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isBigUint64Array(value: Object): boolean;
    /**
     * 判断入参是否为 Boolean 类型。
     *
     * > **NOTE**
     * >
     * > 本接口从 API version 8 起支持，从 API version 14 起废弃。无替代接口。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Boolean 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     * @deprecated since 14
     */
    isBooleanObject(value: Object): boolean;
    /**
     * 判断入参是否为 Boolean、Number、String 或 Symbol 类型。
     *
     * > **NOTE**
     * >
     * > 本接口从 API version 8 起支持，从 API version 14 起废弃。无替代接口。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Boolean、Number、String 或 Symbol 类型，则返回 **true**；否则返回
     *     **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     * @deprecated since 14
     */
    isBoxedPrimitive(value: Object): boolean;
    /**
     * 判断入参是否为 DataView 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 DataView 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isDataView(value: Object): boolean;
    /**
     * 判断入参是否为 Date 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Date 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isDate(value: Object): boolean;
    /**
     * 判断入参是否为 native external 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 native external 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     */
    isExternal(value: Object): boolean;
    /**
     * 判断入参是否为 Float32Array 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Float32Array 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isFloat32Array(value: Object): boolean;
    /**
     * 判断入参是否为 Float64Array 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Float64Array 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isFloat64Array(value: Object): boolean;
    /**
     * 判断入参是否为 generator 函数。
     *
     * > **说明：**
     * >
     * > 该接口无法对AsyncGenerator Function进行有效判断，建议通过获取函数的constructor.name属性与'AsyncGeneratorFunction'做判等的方式替代。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 generator 函数，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     */
    isGeneratorFunction(value: Object): boolean;
    /**
     * 判断入参是否为 generator 对象。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 generator 对象，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     */
    isGeneratorObject(value: Object): boolean;
    /**
     * 判断入参是否为 Int8Array 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Int8Array 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isInt8Array(value: Object): boolean;
    /**
     * 判断入参是否为 Int16Array 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Int16Array 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isInt16Array(value: Object): boolean;
    /**
     * 判断入参是否为 Int32Array 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Int32Array 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isInt32Array(value: Object): boolean;
    /**
     * 判断入参是否为 Map 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Map 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isMap(value: Object): boolean;
    /**
     * 判断入参是否为 MapIterator 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 MapIterator 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isMapIterator(value: Object): boolean;
    /**
     * 判断入参是否为模块命名空间对象。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为模块命名空间对象，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     */
    isModuleNamespaceObject(value: Object): boolean;
    /**
     * 判断入参是否为 Error 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Error 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isNativeError(value: Object): boolean;
    /**
     * 判断入参是否为 Number 类型。
     *
     * > **NOTE**
     * >
     * > 本接口从 API version 8 起支持，从 API version 14 起废弃。无替代接口。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Number 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     * @deprecated since 14
     */
    isNumberObject(value: Object): boolean;
    /**
     * 判断入参是否为 promise。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 promise，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isPromise(value: Object): boolean;
    /**
     * 判断入参是否为 proxy。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 proxy，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     */
    isProxy(value: Object): boolean;
    /**
     * 判断入参是否为 RegExp 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 RegExp 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isRegExp(value: Object): boolean;
    /**
     * 判断入参是否为 Set 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Set 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isSet(value: Object): boolean;
    /**
     * 判断入参是否为 SetIterator 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 SetIterator 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isSetIterator(value: Object): boolean;
    /**
     * 判断入参是否为 SharedArrayBuffer 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 SharedArrayBuffer 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     */
    isSharedArrayBuffer(value: Object): boolean;
    /**
     * 判断入参是否为字符串对象。
     *
     * > **NOTE**
     * >
     * > 本接口从 API version 8 起支持，从 API version 14 起废弃。无替代接口。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为字符串对象，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     * @deprecated since 14
     */
    isStringObject(value: Object): boolean;
    /**
     * 判断入参是否为 symbol 对象。
     *
     * > **NOTE**
     * >
     * > 本接口从 API version 8 起支持，从 API version 14 起废弃。无替代接口。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 symbol 对象，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     * @deprecated since 14
     */
    isSymbolObject(value: Object): boolean;
    /**
     * 判断入参是否为 TypedArray 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 TypedArray 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isTypedArray(value: Object): boolean;
    /**
     * 判断入参是否为 Uint8Array 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Uint8Array 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isUint8Array(value: Object): boolean;
    /**
     * 判断入参是否为 Uint8ClampedArray 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Uint8ClampedArray 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isUint8ClampedArray(value: Object): boolean;
    /**
     * 判断入参是否为 Uint16Array 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Uint16Array 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isUint16Array(value: Object): boolean;
    /**
     * 判断入参是否为 Uint32Array 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Uint32Array 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isUint32Array(value: Object): boolean;
    /**
     * 判断入参是否为 WeakMap 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 WeakMap 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isWeakMap(value: Object): boolean;
    /**
     * 判断入参是否为 WeakSet 类型。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 WeakSet 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isWeakSet(value: Object): boolean;
  }
  /**
   * 提供支持面向切面编程（AOP）的 API。这些 API 可用于对类方法进行插桩或替换。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamiconly
   */
  class Aspect {
    /**
     * 在类对象的方法前插入一个函数。被插入的函数会先于类对象的原方法执行。
     *
     * @param { Object } targetClass - 目标类对象。
     * @param { string } methodName - 方法名。不支持只读方法。
     * @param { boolean } isStatic - 该方法是否为静态方法。值为 **true** 表示静态方法，值为 **false** 表示实例方法。
     * @param { Function } before - 要插入的函数。如果该函数携带参数，则第一个参数为 **this** 对象：当 **isStatic**
     *     为 **true** 时为目标类对象（由 **targetClass** 指定），当 **isStatic** 为 **false** 时为该方法的实例对象；
     *     其余参数为原方法携带的参数。如果该函数不携带任何参数，则不执行任何处理。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamiconly
     */
    static addBefore(targetClass: Object, methodName: string, isStatic: boolean, before: Function): void;
    /**
     * 在类对象的方法后插入一个函数。最终的返回值为被插入函数的返回值。
     *
     * @param { Object } targetClass - 目标类对象。
     * @param { string } methodName - 方法名。不支持只读方法。
     * @param { boolean } isStatic - 该方法是否为静态方法。值为 **true** 表示静态方法，值为 **false** 表示实例方法。
     * @param { Function } after - 要插入的函数。如果该函数携带参数，则第一个参数为 **this** 对象：当 **isStatic**
     *     为 **true** 时为目标类对象（由 **targetClass** 指定），当 **isStatic** 为 **false** 时为该方法的实例对象；
     *     第二个参数为原方法的返回值（如果原方法没有返回值则为 **undefined**）；其余参数为原方法携带的参数。如果该函数
     *     不携带任何参数，则不执行任何处理。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamiconly
     */
    static addAfter(targetClass: Object, methodName: string, isStatic: boolean, after: Function): void;
    /**
     * 使用另一个函数替换类对象的方法。替换后，仅执行新函数的逻辑。最终的返回值为新函数的返回值。
     *
     * @param { Object } targetClass - 目标类对象。
     * @param { string } methodName - 方法名。不支持只读方法。
     * @param { boolean } isStatic - 该方法是否为静态方法。值为 **true** 表示静态方法，值为 **false** 表示实例方法。
     * @param { Function } instead - 用于替换的函数。如果该函数携带参数，则第一个参数为 **this** 对象：当 **isStatic**
     *     为 **true** 时为目标类对象（由 **targetClass** 指定），当 **isStatic** 为 **false** 时为该方法的实例对象；
     *     其余参数为原方法携带的参数。如果该函数不携带任何参数，则不执行任何处理。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamiconly
     */
    static replace(targetClass: Object, methodName: string, isStatic: boolean, instead: Function) : void;
  }
  /**
   * 提供将二进制流解码为字符串的能力。支持以下编码类型：utf-8、iso-8859-2、koi8-r、macintosh、windows-1250、
   * windows-1251、gbk、gb18030、big5、utf-16be 和 UTF-16le。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  class StringDecoder {
    /**
     * 用于创建 **StringDecoder** 实例的构造函数。
     *
     * @param { string } [encoding] - 输入数据的编码类型。默认值为 **utf-8**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    constructor(encoding?: string);
    /**
     * 解码字符串。Uint8Array 末尾的任何不完整多字节字符都会从返回的字符串中过滤掉，并存储在内部缓存中以供下次调用使用。
     *
     * @param { string | Uint8Array } chunk - 要解码的字符串。基于输入的编码类型进行解码。如果输入为 Uint8Array 类型，
     *     则正常解码。如果输入为字符串类型，则直接返回该参数。
     * @returns { string } 解码后的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    write(chunk: string | Uint8Array): string;
    /**
     * 结束解码过程，并将内部缓存中存储的任何剩余输入作为字符串返回。
     *
     * @param { string | Uint8Array } [chunk] - 要解码的字符串。默认值为 **undefined**。
     * @returns { string } 解码后的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    end(chunk?: string | Uint8Array): string;
  }
  /**
   * 获取主线程的栈追踪信息，最多返回 64 层调用帧。
   * 该接口可能对主线程性能产生影响，建议仅在必要时使用，如日志记录、错误分析或调试场景。
   *
   * @returns { string } 主线程的栈追踪信息。若主线程未处于执行 JavaScript 代码状态，则返回空字符串。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  function getMainThreadStackTrace(): string;
  /**
   * 提供一个可通过开发者自定义回调释放由开发者管理的资源的接口。
   *
   * > **说明：**
   * >
   * > AutoFinalizer<T>需要和AutoFinalizerCleaner<T>一起使用，只实现该接口类没有任何功能。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 22 dynamiconly
   */
  interface AutoFinalizer<T> {
    /**
     * 开发者自定义的用于释放资源的回调。
     *
     * @param { T } heldValue - 传递给 finalizer 的值。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 22 dynamiconly
     */
    onFinalization(heldValue: T): void;
  }
  /**
   * 用于通过开发者自定义回调释放由开发者管理的资源的 cleaner。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 22 dynamiconly
   */
  class AutoFinalizerCleaner<T> {
    /**
     * 注册释放由开发者管理的资源的对象。
     *
     * @param { AutoFinalizer<T> } obj - 注册到 cleaner 的对象。
     * @param { T } heldValue - 传递给 finalizer 的值。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 22 dynamiconly
     */
    static register<T>(obj: AutoFinalizer<T>, heldValue: T): void;
  }

  /**
   * 多线程安全检测功能参数配置。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @since 26.0.0 dynamiconly
   */
  interface MultithreadingDetectionOptions {
    /**
     * 若 abort 为 **true**，应用将崩溃；若 abort 为 **false**，应用将不崩溃。默认值为 **true**。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamiconly
     */
    abort?: boolean;
    /**
     * 多线程安全检测的采样频率。
     * 该值必须为整数，最小为 **100**，最大为 **2147483647**（默认 **100**）。
     * 该值应为整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamiconly
     */
    frequency?: number;

    /**
     * 多线程安全检测的时间间隔（分钟）。
     * 只有距离上次检测的时间超过此间隔时才会再次上报错误。
     * 该值必须为 [0,1440] 范围内的整数（默认 5min）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamiconly
     */
    interval?: number;
  }

  /**
   * 为开发者提供虚拟机维测能力的类。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @since 23 dynamiconly
   */
  class ArkTSVM {
    /**
     * 设置是否开启多线程安全检测。当 **enabled** 设置为 **true** 时开启检测，多线程问题的 cppcrash 文件中将包含多线程相关的
     * 详细信息。当 **enabled** 设置为 **false** 时关闭检测，相应的 cppcrash 文件中将不包含此类详细信息。
     *
     * @param { boolean } enabled - 控制是否开启多线程安全检测。**true** 表示开启检测，**false** 表示关闭检测。
     * @param { MultithreadingDetectionOptions } [options] - 多线程安全检测的参数配置，此参数不填时，
     * 对应各属性取MultithreadingDetectionOptions的默认值。[since 26.0.0]
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamiconly
     */
    static setMultithreadingDetectionEnabled(enabled: boolean, options?: MultithreadingDetectionOptions):void;

    /**
     * 注册一个回调函数，在 GC（垃圾回收）后堆内存超过临界预警阈值时触发。
     * 必须在主线程上调用，且仅能注册一个回调。
     *
     * NOTE:
     * 无法保证在 OOM（内存溢出）前一定会触发该回调。
     *
     * @param { Callback<string> } callback - 在 GC 后内存达到阈值时触发的回调。字符串参数表示内存压力事件的类型：
     *     "LocalHeapMemPressure"、"SharedHeapMemPressure" 或 "ProcessHeapMemPressure"。
     * @param { HeapMemoryThreshold } heapMemoryThreshold - 表示 GC 后触发回调的堆内存百分比阈值。取值范围为 [70, 95]。
     * @returns { boolean } 注册成功返回 {@code true}；若不在主线程调用或回调已注册，则返回 {@code false}。
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    static onVMHeapMemoryPressure(callback: Callback<string>, heapMemoryThreshold: HeapMemoryThreshold): boolean;

    /**
     * 取消注册在 GC 后堆内存超过临界预警阈值时触发的回调。
     *
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    static offVMHeapMemoryPressure(): void;

    /**
     * 从 ArkTS-VM 和共享堆中获取所有堆内存信息。
     *
     * > **说明：**
     * >
     * > 此接口在执行时会暂停所有VM线程运行以获取内存信息。由于需要等待所有VM线程暂停，高负载场景下调用此接口的耗时可能较高。
     *
     * @returns { Promise<HeapMemoryInfo[]> } 返回一个 promise，包含 ArkTS-VM 的 local 堆和共享堆中的所有堆内存信息。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    static getAllVMHeapMemoryInfo(): Promise<HeapMemoryInfo[]>;

    /**
     * 开启 local handle 检测，以避免在 Libuv 或 EventHandler 的事件循环（event looper）中出现内存泄漏。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @since 24 dynamiconly
     */
    static enableLocalHandleDetection(): void;

    /**
     * 开启或关闭 napi_ref 与全局 handle 之间关联关系的追踪。开启后，堆快照将包含 native 引用地址信息。关闭后（enable 为
     * false），将停止追踪，堆快照中不再显示 native 引用与全局 handle 之间的关联关系。
     *
     * @param { boolean } enable - 布尔标志位，指示是开启还是关闭追踪。**true** 表示开启追踪，**false** 表示关闭追踪。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamiconly
     */
    static setTrackGlobalRef(enable: boolean): void;
  }

  /**
   * 描述 ArkTS-VM 的堆内存信息，或当前进程的共享堆内存信息。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  interface HeapMemoryInfo {
    /**
     * 如果此内存信息描述的是 ArkTS-VM 的 local 堆，该值为表示运行线程 ID 的整数；
     * 如果此内存信息描述的是 shared 堆，则该值为 undefined。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    threadId?: number;

    /**
     * 如果此内存信息描述的是 ArkTS-VM 的 local 堆，该值为表示运行线程名称的字符串；
     * 如果此内存信息描述的是 shared 堆，则该值为 undefined。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    threadName?: string;

    /**
     * 该值为字符串，表示此内存信息是来自 ArkTS-VM 的 local 堆还是 shared 堆。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    heapType: string;

    /**
     * 该值为整数，表示来自 ArkTS-VM 的 local 堆或 shared 堆的所有堆对象的总大小（KB）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    heapObjectSize: number;
  }

  /**
   * 描述 GC 后触发已注册回调的堆内存预警阈值。
   *
   * @interface HeapMemoryThreshold
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  interface HeapMemoryThreshold {
    /**
     * 该值为 70 到 95 之间的整数，表示 GC 后触发回调的 local 堆内存百分比阈值。超出此范围的值会被自动限制到有效范围内。
     * 若未设置，则不会因 local 堆内存压力而触发回调。
     *
     * @type { ?number }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    localHeapThreshold?: number;

    /**
     * 该值为 70 到 95 之间的整数，表示 GC 后触发回调的 shared 堆内存百分比阈值。超出此范围的值会被自动限制到有效范围内。
     * 若未设置，则不会因 shared 堆内存压力而触发回调。
     *
     * @type { ?number }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    sharedHeapThreshold?: number;

    /**
     * 该值为 70 到 95 之间的整数，表示 GC 后触发回调的进程总堆内存百分比阈值。超出此范围的值会被自动限制到有效范围内。
     * 若未设置，则不会因进程堆内存压力而触发回调。
     *
     * @type { ?number }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    processHeapThreshold?: number;
  }
}

import type { Callback } from './@ohos.base';

export default util;
