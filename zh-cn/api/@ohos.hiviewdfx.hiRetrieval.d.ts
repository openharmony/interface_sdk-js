/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

/**
 * 本模块提供应用灰度故障维测能力，支持以下故障类型：RSS内存泄漏、ArkTS-OOM、FD内存泄漏、GPU内存泄漏。应用灰度特性是一种运维态功能，用于精准采集故障日志。
 * 开发者在端侧集成应用灰度功能后，该应用可参与应用灰度活动。通过云端平台发布应用灰度任务，可圈选部分设备开启故障日志精准采集，帮助开发者快速定位故障。
 *
 * @syscap SystemCapability.HiviewDFX.HiRetrieval
 * @FaAndStageModel
 * @atomicservice
 * @since 26.0.0 dynamic&static
 */
declare namespace hiRetrieval {
  /**
   * 应用灰度活动配置。
   *
   * @syscap SystemCapability.HiviewDFX.HiRetrieval
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface HiRetrievalConfig {
    /**
     * 用户类型参数，用于标识用户群体特征，如'newUser'、'vipUser'等。参数值由开发者自定义，无格式和字符类型限制，最长支持128个字符，超出部分将被截断。
     * 这些参数将作为算法输入，影响灰度圈选策略。
     *
     * @syscap SystemCapability.HiviewDFX.HiRetrieval
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    userType: string;

    /**
     * 设备类型参数，用于标识设备分类特征（具体值由开发者根据业务需求定义）。参数值由开发者自定义，无格式和字符类型限制，最长支持128个字符，超出部分将被截断。
     * 这些参数将作为算法输入，影响灰度圈选策略。
     *
     * @syscap SystemCapability.HiviewDFX.HiRetrieval
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    deviceType: string;

    /**
     * 设备型号参数，用于标识具体设备型号（具体值由开发者根据业务需求定义）。参数值由开发者自定义，无格式和字符类型限制，最长支持128个字符，超出部分将被截断。
     * 这些参数将作为算法输入，影响灰度圈选策略。
     *
     * @syscap SystemCapability.HiviewDFX.HiRetrieval
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    deviceModel: string;
  }

  /**
   * 初始化应用灰度模块。多实例应用不支持调用此接口。
   *
   * @throws { BusinessError } 36000002 - Multi-instance applications not supported error.
   *                                      Possibly caused by invoking this function in a multi-instance application.
   * @syscap SystemCapability.HiviewDFX.HiRetrieval
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function init(): void;

  /**
   * 设置此设备参与应用灰度活动。调用后向服务器发送参与灰度消息和应用灰度活动配置，服务器标记此设备为可圈选并记录该应用灰度活动配置作为算法参数。
   * 多次调用将更新为最新的应用灰度活动配置。
   *
   * @param { HiRetrievalConfig } config - 开发者指定的应用灰度活动配置。用于设置此设备参与应用灰度活动时的用户类型、设备类型和设备型号信息，服务器将记录这些配置作为算法参数，用于圈选设备。
   *                                       不同参数值会影响设备参与应用灰度活动的概率和采集的日志类型。
   * @throws { BusinessError } 36000001 - Initialization error.
   *                                      Possibly caused by invoking this function before invoking init function.
   * @syscap SystemCapability.HiviewDFX.HiRetrieval
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function participate(config: HiRetrievalConfig): void;

  /**
   * 设置此设备退出应用灰度活动，退出后此设备将无法在云端被圈选。
   *
   * @throws { BusinessError } 36000001 - Initialization error.
   *                                      Possibly caused by invoking this function before invoking init function.
   * @syscap SystemCapability.HiviewDFX.HiRetrieval
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function quit(): void;

  /**
   * 查询此设备是否正在参与应用灰度活动。
   *
   * @returns { boolean } 标识此设备现在是否正在参与应用灰度活动，true表示正在参与，false表示未参与。
   * @syscap SystemCapability.HiviewDFX.HiRetrieval
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function isParticipant(): boolean;

  /**
   * 查询此设备上次参与应用灰度活动的UNIX时间戳，如果此设备从未参与则返回0。
   *
   * @returns { long } 上一次参与应用灰度活动的UNIX时间戳，单位为毫秒。如果此设备从未参与则返回0。
   * @syscap SystemCapability.HiviewDFX.HiRetrieval
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function getLastParticipationTimestamp(): long;

  /**
   * 若此设备正在参与应用灰度活动（即已调用participate接口且未调用quit接口），则应用灰度模块开始工作，否则调用该接口不会产生任何效果。
   *
   * @throws { BusinessError } 36000001 - Initialization error.
   *                                      Possibly caused by invoking this function before invoking init function.
   * @syscap SystemCapability.HiviewDFX.HiRetrieval
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function run(): void;

  /**
   * 获取当前应用灰度活动配置。
   *
   * @returns { HiRetrievalConfig } 当前应用灰度活动配置，包含用户类型、设备类型、设备型号等参数，用于标识和圈选设备参与应用灰度活动。
   * @syscap SystemCapability.HiviewDFX.HiRetrieval
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function getCurrentConfig(): HiRetrievalConfig;
}

export default hiRetrieval;

