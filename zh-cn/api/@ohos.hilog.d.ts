/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit PerformanceAnalysisKit
 */

/*** if arkts 1.2 */
import { RecordData } from '@ohos.base';
/*** endif */

/**
 * # 参数格式符
 *
 * 上述接口中，日志打印的格式化参数需按照如下格式打印：
 *
 * %{[private flag]}specifier
 *
 * |  隐私标识符（private flag） | 说明 |
 * | ------------ | ---- |
 * |      无      | 缺省值默认为private，不打印明文参数。 |
 * |  private     | 隐私参数类型，不打印明文参数。 |
 * |  public      | 明文显示参数。 |
 *
 * | 格式说明符（specifier） | 说明 | 示例 |
 * | ------------ | ---- | ---- |
 * |      d/i      | 支持打印number和bigint类型。 | 123 |
 * |   s     | 支持打印string undefined bool 和null类型。 | "123" |
 * | o/O | 支持打印object、undefined和null类型。<br>从API version 20开始，支持该能力。 | { 'name': "Jack", 'age': 22 } |
 *
 */
/**
 * hilog日志系统，使应用/服务可以按照指定级别、标识和格式字符串输出日志内容，帮助开发者了解应用/服务的运行状态，更好地调试程序。
 *
 * @syscap SystemCapability.HiviewDFX.HiLog
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace hilog {

  /**
   * 打印DEBUG级别的日志。
   *
   * DEBUG级别的日志在正式发布版本中默认不被打印，只有在调试版本或打开调试开关的情况下才会打印。
   *
   * @param { number } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。tag长度最多为31字节，超出后会截断，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br>隐私标识分为{public}和{private}，缺省为{private
   *     }。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。
   * @param { any[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function debug(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * 打印DEBUG级别的日志。
   *
   * @param { int } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。tag长度最多为31字节，超出后会截断，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br>隐私标识分为{public}和{private}，缺省为{private
   *     }。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。
   * @param { RecordData[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function debug(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * 打印INFO级别的日志。
   *
   * @param { number } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。tag长度最多为31字节，超出后会截断，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br/>隐私标识分为{public}和{private}，缺省为{
   *     private}。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。
   * @param { any[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function info(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * 打印INFO级别的日志。
   *
   * @param { int } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。tag长度最多为31字节，超出后会截断，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br/>隐私标识分为{public}和{private}，缺省为{
   *     private}。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。
   * @param { RecordData[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function info(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * 打印WARN级别的日志。
   *
   * @param { number } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。tag长度最多为31字节，超出后会截断，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br/>隐私标识分为{public}和{private}，缺省为{
   *     private}。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。
   * @param { any[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function warn(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * 打印WARN级别的日志。
   *
   * @param { int } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。tag长度最多为31字节，超出后会截断，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br/>隐私标识分为{public}和{private}，缺省为{
   *     private}。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。
   * @param { RecordData[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function warn(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * 打印ERROR级别的日志。
   *
   * @param { number } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。 tag长度最多为31字节，超出后会截断，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br/>隐私标识分为{public}和{private}，缺省为{
   *     private}。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。
   * @param { any[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function error(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * 打印ERROR级别的日志。
   *
   * @param { int } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。 tag长度最多为31字节，超出后会截断，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br/>隐私标识分为{public}和{private}，缺省为{
   *     private}。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。
   * @param { RecordData[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function error(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * 打印FATAL级别的日志。
   *
   * @param { number } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。tag长度最多为31字节，超出后会截断，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br/>隐私标识分为{public}和{private}，缺省为{
   *     private}。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。
   * @param { any[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function fatal(domain: number, tag: string, format: string, ...args: any[]): void;

  /**
   * 打印FATAL级别的日志。
   *
   * @param { int } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。tag长度最多为31字节，超出后会截断，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { string } format - 格式字符串，用于日志的格式化输出。格式字符串中可以设置多个参数，参数需要包含参数类型、隐私标识。<br/>隐私标识分为{public}和{private}，缺省为{
   *     private}。标识{public}的内容明文输出，标识{private}的内容以<private>过滤回显。
   * @param { RecordData[] } args - 与格式字符串format对应的可变长度参数列表。参数数目、参数类型必须与格式字符串中的标识一一对应。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function fatal(domain: int, tag: string, format: string, ...args: RecordData[]): void;

  /**
   * 在打印日志前调用该接口，用于检查指定领域标识、日志标识和级别的日志是否可以打印。
   *
   * @param { int } domain - 日志对应的领域标识，范围是0x0~0xFFFF，超出范围则日志无法打印。<br/>建议开发者在应用内根据需要自定义划分。
   * @param { string } tag - 指定日志标识，可以为任意字符串，建议用于标识调用所在的类或者业务行为。tag长度最多为31字节，超出后会截断，不建议使用中文字符，可能出现乱码或者对齐问题。
   * @param { LogLevel } level - 日志级别。
   * @returns { boolean } 如果返回true，则该领域标识、日志标识和级别的日志可以打印，否则不能打印。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  function isLoggable(domain: int, tag: string, level: LogLevel): boolean;

  /**
   * 设置应用日志打印的最低日志级别，用于拦截低级别日志打印。
   *
   * > **注意：**
   * >
   * > 如果设置的日志级别低于[全局日志级别](docroot://dfx/hilog.md#查看和设置日志级别)，设置不生效。
   * >
   * > debug版本应用下，此函数不生效。
   *
   * @param { LogLevel } level - 日志级别。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  function setMinLogLevel(level: LogLevel): void;

  /**
   * 设置当前应用程序进程的最低日志级别。
   *
   * 可通过prefer参数配置不同的偏好策略。如果选择策略PREFER_CLOSE_LOG，等同于调用setMinLogLevel函数。
   *
   * > **注意：**
   * >
   * > debug版本应用下，此函数不生效。
   *
   * @param { LogLevel } level - 日志级别。
   * @param { PreferStrategy } prefer - 偏好策略。
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  function setLogLevel(level: LogLevel, prefer: PreferStrategy): void;

  /**
   * 日志级别。
   *
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  enum LogLevel {
    /**
     * 详细的流程记录，通过该级别的日志可以更详细地分析业务流程和定位分析问题。
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    DEBUG = 3,
    /**
     * 用于记录业务关键流程节点，可以还原业务的主要运行过程；
     *
     * 用于记录可预料的非正常情况信息，如无网络信号、登录失败等。
     *
     * 这些日志都应该由该业务内处于支配地位的模块来记录，避免在多个被调用的模块或低级函数中重复记录。
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    INFO = 4,
    /**
     * 用于记录较为严重的非预期情况，但是对用户影响不大，应用可以自动恢复或通过简单的操作就可以恢复的问题。
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    WARN = 5,
    /**
     * 应用发生了错误，该错误会影响功能的正常运行或用户的正常使用，可以恢复但恢复代价较高，如重置数据等。
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    ERROR = 6,
    /**
     * 重大致命异常，表明应用即将崩溃，故障无法恢复。
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    FATAL = 7
  }

  /**
   * 偏好策略。
   *
   * @syscap SystemCapability.HiviewDFX.HiLog
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   * @since 23 static
   */
  enum PreferStrategy {
    /**
     * 清除设置, 实际生效的最低日志级别是系统控制的最低级别。
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    UNSET_LOGLEVEL = 0,
    /**
     * 实际生效的最低日志级别是新设置的级别和系统控制的最低级别两个值的较大值。
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    PREFER_CLOSE_LOG = 1,
    /**
     * 实际生效的最低日志级别是新设置的级别和系统控制的最低级别两个值的较小值。
     *
     * @syscap SystemCapability.HiviewDFX.HiLog
     * @crossplatform
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    PREFER_OPEN_LOG = 2
  }
}

export default hilog;