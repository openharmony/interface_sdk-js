/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @file 分布式跟踪
 * @kit PerformanceAnalysisKit
 */

/**
 * 本模块提供了端侧业务流程调用链跟踪的打点能力，包括业务流程跟踪的启动、结束、信息埋点等能力。
 *
 * @syscap SystemCapability.HiviewDFX.HiTrace
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace hiTraceChain {
  /**
   * 跟踪标志组合类型枚举。用于控制分布式跟踪的行为模式，例如在需要跟踪异步调用的业务流程中使用INCLUDE_ASYNC标志，在不需要详细分支信息的简单业务
   * 流程中使用DONOT_CREATE_SPAN标志，在需要调试埋点信息的场景中使用TP_INFO标志。
   *
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 8 dynamic
   * @since 23 static
   */
  enum HiTraceFlag {
    /**
     * 默认标志。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * 异步调用标志。
     * 
     * 设置该标志，同时跟踪同步和异步调用；默认只跟踪同步调用。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    INCLUDE_ASYNC = 1,

    /**
     * 无分支标志。
     * 
     * 设置该标志，不创建分支信息；默认创建分支信息。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    DONOT_CREATE_SPAN = 1 << 1,

    /**
     * 埋点标志。
     * 
     * 设置该标志后，调用[tracepoint()]{@link hiTraceChain.tracepoint}接口时会打印埋点信息hilog；默认不打印埋点信息hilog日志。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    TP_INFO = 1 << 2,

    /**
     * 无开始结束信息标志。
     * 
     * 调试场景下设置该标志，调用开始跟踪接口[begin()]{@link hiTraceChain.begin}和结束跟踪接口[end()]{@link hiTraceChain.end}时，
     * 分别会打印开始、结束跟踪信息hilo日志；默认不打印开始、结束跟踪信息hilog日志。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    NO_BE_INFO = 1 << 3,

    /**
     * 日志关联标志。
     * 
     * 设置该标志，不会在hilog日志中附加HiTraceId信息；默认会在hilog日志中附加HiTraceId信息。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    DISABLE_LOG = 1 << 4,

    /**
     * 故障触发标志。预置标志，暂未启用。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    FAILURE_TRIGGER = 1 << 5,

    /**
     * 设备间埋点标志，为TP_INFO的子集，用于调试场景。
     * 
     * 已设置TP_INFO时，D2D_TP_INFO不生效；未设置TP_INFO时，D2D_TP_INFO生效，调用信息埋点接口
     * [tracepoint()]{@link hiTraceChain.tracepoint}仅在mode参数为DEVICE时打印埋点信息hilog日志。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    D2D_TP_INFO = 1 << 6
  }

  /**
   * 跟踪埋点类型枚举。用于标识业务流程中的关键节点，例如CS和CR用于标记客户端请求的发送和接收，SS和SR用于标记服务端请求的接收和发送，GENERAL用
   * 于标记无法归入上述四种场景的其他关键节点。
   *
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 8 dynamic
   * @since 23 static
   */
  enum HiTraceTracepointType {
    /**
     * 客户端发送(Client Send)。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    CS = 0,

    /**
     * 客户端接收(Client Receive)。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    CR = 1,

    /**
     * 服务端发送(Server Send)。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    SS = 2,

    /**
     * 服务端接收(Server Receive)。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    SR = 3,

    /**
     * 通用类型，标识CS、CR、SS、SR四种场景之外的埋点。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    GENERAL = 4
  }

  /**
   * 跟踪通信类型枚举。用于标识通信发生的层级，例如THREAD用于标记同一应用内线程间通信，PROCESS用于标记同一设备内进程间通信，DEVICE用于标记跨设
   * 备的分布式通信。
   *
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 8 dynamic
   * @since 23 static
   */
  enum HiTraceCommunicationMode {
    /**
     * 缺省通信类型。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * 线程间通信。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    THREAD = 1,

    /**
     * 进程间通信。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    PROCESS = 2,

    /**
     * 设备间通信。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    DEVICE = 3
  }

  /**
   * 此接口为HiTraceId对象接口。用于标识分布式跟踪链中的唯一节点，在需要跨线程、跨进程、跨设备跟踪业务流程的场景中使用，例如电商下单流程、支付流
   * 程、分布式服务调用链等。
   *
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 8 dynamic
   * @since 23 static
   */
  interface HiTraceId {
    /**
     * 跟踪链标识。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    chainId: bigint;

    /**
     * 分支标识，默认值为0。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    spanId?: int;

    /**
     * 父分支标识，默认值为0。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    parentSpanId?: int;

    /**
     * 跟踪标志位，默认值为0。
     *
     * @syscap SystemCapability.HiviewDFX.HiTrace
     * @since 8 dynamic
     * @since 23 static
     */
    flags?: int;
  }

  /**
   * 开始跟踪，同步接口。用于在业务流程的起始节点启动分布式跟踪，例如在用户点击按钮发起请求、服务端收到请求开始处理、启动后台任务等场景。
   * 
   * 当前线程TLS（Thread Local Storage，线程本地存储）中不存在有效的HiTraceId时，生成有效的HiTraceId并设置到当前线程TLS中，返回该
   * HiTraceId。当前线程TLS中已存在有效的HiTraceId时，不会开始新的跟踪，返回各属性值均为0的无效HiTraceId。
   *
   * @param { string } name - 跟踪业务名。该参数的长度不超过63Byte，超出部分将被截断。
   * @param { int } flags - 跟踪标志组合，具体可参考[HiTraceFlag]{@link hiTraceChain.HiTraceFlag}。当需要跟踪异步调用时设置
   * INCLUDE_ASYNC，不创建分支信息时设置DONOT_CREATE_SPAN，调试场景下设置TP_INFO可打印埋点信息。默认值为0，表示只跟踪同步调用、创建分支信
   * 息、不打印日志。
   * @returns { HiTraceId } 当前线程TLS中的HiTraceId实例。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 8 dynamic
   * @since 23 static
   */
  function begin(name: string, flags?: int): HiTraceId;

  /**
   * 结束跟踪，同步接口。用于在业务流程的结束节点终止分布式跟踪，例如在请求处理完成返回结果、用户操作流程结束、后台任务执行完毕等场景。
   * 
   * 若给定的HiTraceId有效，且等于当前线程TLS中的HiTraceId，结束跟踪并将当前线程TLS中的HiTraceId设置为无效。
   * 
   * 若给定的HiTraceId无效，或不等于当前线程TLS中的HiTraceId，结束跟踪失败，打印结束跟踪失败hilog日志。
   *
   * @param { HiTraceId } id - HiTraceId实例。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 8 dynamic
   * @since 23 static
   */
  function end(id: HiTraceId): void;

  /**
   * 获取跟踪标识，同步接口。用于在需要传递当前跟踪标识的场景，例如将跟踪标识传递给子线程、传递给其他进程、或者在日志中记录当前跟踪标识。
   *
   * 获取当前线程TLS中的HiTraceId。若当前线程TLS中不存在有效的HiTraceId，返回各属性值均为0的无效HiTraceId。
   *
   * @returns { HiTraceId } 当前线程TLS中的HiTraceId实例。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 8 dynamic
   * @since 23 static
   */
  function getId(): HiTraceId;

  /**
   * 设置跟踪标识，同步接口。用于在需要将外部跟踪标识设置到当前线程的场景，例如从父线程继承跟踪标识、从其他进程接收跟踪标识、从设备间通信获取跟踪
   * 标识。
   * 
   * 将给定的HiTraceId设置到当前线程TLS中。若给定的HiTraceId无效，则不执行任何操作。
   *
   * @param { HiTraceId } id - HiTraceId实例。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 8 dynamic
   * @since 23 static
   */
  function setId(id: HiTraceId): void;

  /**
   * 清除跟踪标识，同步接口。用于在需要切断当前跟踪链的场景，例如业务逻辑分支不再需要跟踪、任务完成后清理跟踪标识、或者在开始新的跟踪前清理旧的
   * 跟踪标识。
   * 
   * 将当前线程TLS中的HiTraceId设置为无效。
   *
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 8 dynamic
   * @since 23 static
   */
  function clearId(): void;

  /**
   * 创建跟踪分支，同步接口。用于在业务流程中标记重要的子流程，例如在请求处理过程中的关键步骤、服务端处理链中的各个阶段、或者需要重点关注的业务
   * 分支。
   * 
   * 创建一个HiTraceId，使用当前线程TLS中的chainId、spanId初始化HiTraceId的chainId、parentSpanId，并为HiTraceId生成一个新的spanId，
   * 返回该HiTraceId。
   *
   * @returns { HiTraceId } HiTraceId实例。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 8 dynamic
   * @since 23 static
   */
  function createSpan(): HiTraceId;

  /**
   * [@ohos.hiTraceMeter (性能打点)]{@link @ohos.hiTraceMeter:hiTraceMeter}跟踪信息埋点，同步接口。
   * 
   * 本接口与HiTraceMeter模块协同工作，HiTraceChain负责跟踪链的管理，HiTraceMeter负责性能数据的采集和统计。当type为客户端发送CS且服务端
   * 接收到SR时，进行同步HiTraceMeter开始打点；当type为服务端发送SS且客户端接收到CR时，进行同步HiTraceMeter结束打点；CS和CR以及SR和SS的
   * 信息埋点需配套使用。否则，HiTraceMeter开始与结束打点无法正常匹配；当type为通用类型GENERAL时，不会进行HiTraceMeter打点。
   *
   * @param { HiTraceCommunicationMode } mode - Communication mode for the trace point.
   * @param { HiTraceTracepointType } type - 信息埋点需要指定的跟踪埋点类型。
   * @param { HiTraceId } id - 实施信息埋点操作的HiTraceId实例。
   * @param { string } msg - HiTraceMeter打点操作传入的trace说明信息，用于在性能分析时标识打点位置。当需要在HiTraceMeter报告中区分不同
   * 打点位置时传入有意义的描述信息（如函数名、操作步骤等），不传入时使用空字符串，不影响基本打点功能。该参数的长度不超过63Byte，超出部分将被截断。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 8 dynamic
   * @since 23 static
   */
  function tracepoint(mode: HiTraceCommunicationMode, type: HiTraceTracepointType, id: HiTraceId, msg?: string): void;

  /**
   * 判断HiTraceId是否有效，同步接口。
   *
   * @param { HiTraceId } id - 需要判断是否有效的HiTraceId实例。
   * @returns { boolean } true：HiTraceId有效；false：HiTraceId无效。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 8 dynamic
   * @since 23 static
   */
  function isValid(id: HiTraceId): boolean;

  /**
   * 判断HiTraceId是否启用了跟踪标志flag，同步接口。用于在业务逻辑中根据跟踪标志进行不同处理，例如检查是否启用了INCLUDE_ASYNC标志以决定是否
   * 等待异步操作完成、检查是否启用了TP_INFO标志以决定是否打印调试信息。
   *
   * @param { HiTraceId } id - 需要判断指定跟踪标志是否启用的HiTraceId实例。
   * @param { HiTraceFlag } flag - 指定的跟踪标志。
   * @returns { boolean } true：HiTraceId已启用flag；false：HiTraceId未启用flag。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 8 dynamic
   * @since 23 static
   */
  function isFlagEnabled(id: HiTraceId, flag: HiTraceFlag): boolean;

  /**
   * 启用HiTraceId中指定的跟踪标志，同步接口。用于在业务流程中动态调整跟踪行为，例如在调试时启用TP_INFO标志以打印埋点信息、在需要跟踪异步调用时
   * 启用INCLUDE_ASYNC标志、在需要禁用日志关联时启用DISABLE_LOG标志。
   *
   * @param { HiTraceId } id - 需要启用指定跟踪标志的HiTraceId实例。
   * @param { HiTraceFlag } flag - 指定的跟踪标志。
   * @syscap SystemCapability.HiviewDFX.HiTrace
   * @since 8 dynamic
   * @since 23 static
   */
  function enableFlag(id: HiTraceId, flag: HiTraceFlag): void;
}

export default hiTraceChain;