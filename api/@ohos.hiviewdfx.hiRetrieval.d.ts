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
 * Provide interfaces and functions for HiRetrieval feature.
 *
 * @syscap SystemCapability.HiviewDFX.HiRetrieval
 * @FaAndStageModel
 * @atomicservice
 * @since 26.0.0 dynamic&static
 */
declare namespace hiRetrieval {
  /**
   * HiRetrieval functionality config.
   *
   * @syscap SystemCapability.HiviewDFX.HiRetrieval
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface HiRetrievalConfig {
    /**
     * Custom user type set by developers.
     *
     * @syscap SystemCapability.HiviewDFX.HiRetrieval
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    userType: string;

    /**
     * Custom device type set by developers.
     *
     * @syscap SystemCapability.HiviewDFX.HiRetrieval
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    deviceType: string;

    /**
     * Custom device model set by developers.
     *
     * @syscap SystemCapability.HiviewDFX.HiRetrieval
     * @FaAndStageModel
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    deviceModel: string;
  }

  /**
   * Init the HiRetrieval functionality.
   *
   * @syscap SystemCapability.HiviewDFX.HiRetrieval
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function init(): void;

  /**
   * Participate the HiRetrieval project with given HiRetrievalConfig.
   *
   * @param { HiRetrievalConfig } config - The config set by the developers.
   * @throws { BusinessError } 36000001 - Initialization error.
   *                                      Possibly caused by invoking this function before invoking init function.
   * @syscap SystemCapability.HiviewDFX.HiRetrieval
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function participate(config: HiRetrievalConfig): void;

  /**
   * Quit the HiRetrieval project. This operation clears the current HiRetrieval config.
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
   * Query if the app is participating the HiRetrieval project.
   *
   * @returns { boolean } Returns true if this app is participating HiRetrieval project, false otherwise.
   * @syscap SystemCapability.HiviewDFX.HiRetrieval
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function isParticipant(): boolean;

  /**
   * Query the UNIX timestamp of the last participating time.
   *
   * @returns { long } Returns the timestamp of the last participating time in milliseconds,
   *                   if never participated return 0.
   * @syscap SystemCapability.HiviewDFX.HiRetrieval
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function getLastParticipationTimestamp(): long;

  /**
   * Trigger the HiRetrieval functionality, make is start working.
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
   * Query the current HiRetrieval config.
   *
   * @returns { HiRetrievalConfig } Returns the current HiRetrieval config.
   * @syscap SystemCapability.HiviewDFX.HiRetrieval
   * @FaAndStageModel
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function getCurrentConfig(): HiRetrievalConfig;
}

export default hiRetrieval;

