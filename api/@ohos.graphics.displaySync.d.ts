/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit ArkGraphics2D
 */

import type { Callback } from './@ohos.base';
/*** if arkts static */
import { ExpectedFrameRateRange } from './arkui/component/common';
/*** endif */

/**
 * The displaySync module allows your application to draw its custom UI content at a specified frame rate.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace displaySync {
  /**
   * You can obtain the timestamp information from the event callback, including the timestamp when the current frame 
   * arrives and the timestamp when the next frame is expected to arrive.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11 dynamic
   * @since 23 static
   */
  interface IntervalInfo {
    /**
     * Time when the current frame arrives, in nanoseconds.
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * Expected arrival time of the next frame, in nanoseconds.
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     * @since 23 static
     */
    targetTimestamp: long;
  }

  /**
   * An object that implements the setting of the frame rate and callback. It provides APIs for you to set the frame 
   * rate, register a callback, and start/stop the callback.
   * Before calling any of the following APIs, you must use [displaySync.create()]{@link displaySync.create} to create
   * a **DisplaySync** instance.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11 dynamic
   * @since 23 static
   */
  interface DisplaySync {
    /**
     * Sets the expected frame rate range.
     * 
     * @param { ExpectedFrameRateRange } rateRange - Expected frame rate range.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     *     check if ExpectedFrameRateRange is valid.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     * @since 23 static
     */
    setExpectedFrameRateRange(rateRange: ExpectedFrameRateRange) : void;

    /**
     * Subscribes to change events of each frame.
     * 
     * @param { 'frame' } type - Event type. The value is fixed at **'frame'**.
     * @param { Callback<IntervalInfo> } callback - Callback used for subscription.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     */
    on(type: 'frame', callback: Callback<IntervalInfo>): void;

    /**
     * Subscribes to change events of each frame.
     * 
     * @param { Callback<IntervalInfo> } callback - Callback used for subscription.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onFrame(callback: Callback<IntervalInfo>): void;

    /**
     * Unsubscribes from change events of each frame.
     * 
     * @param { 'frame' } type - Event type. The value is fixed at **'frame'**.
     * @param { Callback<IntervalInfo> } [callback] - Callback used for unsubscription.
     *     If no value is passed in, all subscriptions to the specified event are canceled.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     */
    off(type: 'frame', callback?: Callback<IntervalInfo>): void;

    /**
     * Unsubscribes from change events of each frame.
     * 
     * @param { Callback<IntervalInfo> } [callback] - Callback used for unsubscription.
     *     If no value is passed in, all subscriptions to the specified event are canceled.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offFrame(callback?: Callback<IntervalInfo>): void;

    /**
     * Starts callback for each frame.
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     * @since 23 static
     */
    start(): void;

    /**
     * Stops callback for each frame.
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     * @since 23 static
     */
    stop(): void;
  }

  /**
   * Creates a **DisplaySync** object, through which you can set the frame rate of the custom UI content.
   * 
   * @returns { DisplaySync } **DisplaySync** object created.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11 dynamic
   * @since 23 static
   */
  function create(): DisplaySync;
}

export default displaySync;
