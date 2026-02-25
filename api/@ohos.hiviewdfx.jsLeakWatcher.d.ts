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
 * @kit PerformanceAnalysisKit
 */

/**
 * This module provides the capability to monitor leakage of JS objects.
 *
 * @namespace jsLeakWatcher
 * @syscap SystemCapability.HiviewDFX.HiChecker
 * @since 12 dynamic
 */
declare namespace jsLeakWatcher {
  /**
   * Enable or disable jsLeakWatcher.
   *
   * @param { boolean } isEnable - True is enable jsLeakWatcher, false is disable jsLeakWatcher.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 12 dynamic
   */
  function enable(isEnable: boolean): void;

  /**
   * Register an object that needs to be monitored.
   *
   * @param { object } obj - Object being monitored.
   * @param { string } msg - Customized object information.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 12 dynamic
   */
  function watch(obj: object, msg: string): void;

  /**
   * Check suspected leaked objects.
   *
   * @returns { string } List of suspected leaked objects in JSON format.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 12 dynamic
   */
   function check(): string;

  /**
   * Dump leak list and heap snapshot.
   *
   * @param { string } filePath - Directory for exporting files.
   * @returns { Array<string> } The array of exported results, index 0 is leakListFileName, index 1 is heapSnapShotFileName.
   * @throws { BusinessError } 401 - Parameter error. The filepath is invalid.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 12 dynamic
   */
  function dump(filePath: string): Array<string>;

  /**
   * Enables or disables jsLeakWatcher.
   * 
   * This interface can detect js object memory leaks in a single call, which is more concise than the previous method
   * requiring four function (enable,watch,check dump) calls.If there is a memory leak, the leak file will be
   * returned to the developer through the callback function.
   * 
   * @param { boolean } isEnabled - Whether to enable or disable jsLeankWatcher. The value true means to enable the feature, and false means the opposite.
   * @param { Array<string> } configs - Array of types of objects to watch.
   * @param { Callback<Array<string>> } callback - Callback invoked when an object-related memory leak is detected.
   * @throws { BusinessError } 10801001 - The parameter isEnabled is invalid.
   * @throws { BusinessError } 10801002 - The parameter config is invalid.
   * @throws { BusinessError } 10801003 - The parameter callback is invalid.
   * Input parameter error. Possible causes:
   *  1.Mandatory parameters are left unspecified;
   *  2.Incorrect parameter types;
   *  3.Parameter verification failed.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @since 20 dynamic
   */
  function enableLeakWatcher(isEnabled: boolean, configs: Array<string>, callback: Callback<Array<string>>): void

  interface LeakWatcherConfig {
    /**
     * Array of types of objects to watch. default: value is an empty string.
     *
     * @type { string }
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     */
    objectWatcher: string;
    /**
     * List of monitored object IDs. default: value is an empty array.
     *
     * @type { Array<number> }
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     */
    objectUniqueIDs: Array<number>;
    /**
     * Interval between each leak detection cycle. default: value is 30 seconds.
     *
     * @type { number }
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     */
    checkInterval: number;
    /**
     * Triggering dump when the number of leaked applications in the foreground reaches the specified value. default: value is 5.
     *
     * @type { number }
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     */
    retainedVisibleThreshold: number;
    /**
     * Triggering dump when the number of leaked apps in the background reaches the specified value. default: value is 1.
     *
     * @type { number }
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     */
    retainedInvisibleThreshold: number;
    /**
     * Maximum number of dump files that can be saved to prevent the disk space from being used up. default: value is 10.
     *
     * @type { number }
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     */
    maxStoredHeapDumps: number;
    /**
     * Delay the dump execution to ensure that the GC can be scheduled and executed before the dump is performed. default: value is 5 seconds.
     *
     * @type { number }
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     */
    dumpHeapWaitTimeMs: number;
    /**
     * Filter out the class names of objects you do not want to monitor. default: value is an empty array.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.HiviewDFX.HiChecker
     * @FaAndStageModel
     * @since 24 dynamic
     */
    whiteList: Array<string>;
  }

  /**
   * Enables or disables jsLeakWatcher.
   * 
   * This interface can detect js object memory leaks in a single call, which is more concise than the previous method
   * requiring four function (enable,watch,check dump) calls.If there is a memory leak, the leak file will be
   * returned to the developer through the callback function.
   * 
   * @param { boolean } isEnabled - Whether to enable or disable jsLeankWatcher. The value true means to enable the feature, and false means the opposite.
   * @param { LeakWatcherConfig } configs - Configuration of object types whose structures need to be monitored.
   * @param { Callback<Array<string>> } callback - Callback invoked when an object-related memory leak is detected.
   * @throws { BusinessError } 10801001 - The parameter isEnabled is invalid.
   * @throws { BusinessError } 10801002 - The parameter config is invalid.
   * @throws { BusinessError } 10801003 - The parameter callback is invalid.
   * Input parameter error. Possible causes:
   *  1.Mandatory parameters are left unspecified;
   *  2.Incorrect parameter types;
   *  3.Parameter verification failed.
   * @syscap SystemCapability.HiviewDFX.HiChecker
   * @FaAndStageModel
   * @since 24 dynamic
   */
  function enableLeakWatcher(isEnabled: boolean, configs: LeakWatcherConfig, callback: Callback<Array<string>>): void
}
export default jsLeakWatcher;
