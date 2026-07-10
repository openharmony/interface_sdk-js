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
 * 可变帧率支持让开发者以指定帧率来运行UI业务，一般用于开发者自绘制UI，并且对于帧率有特定诉求的场景。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace displaySync {
  /**
   * 开发者可以从订阅函数中获取帧绘制的时间戳信息，包含当前帧到达的时间timestamp和下一帧预期到达的时间targetTimestamp。
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11 dynamic
   * @since 23 static
   */
  interface IntervalInfo {
    /**
     * 当前帧到达的时间（单位：纳秒）。
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * 下一帧预期到达的时间（单位：纳秒）。
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     * @since 23 static
     */
    targetTimestamp: long;
  }

  /**
   * 帧率和回调函数设置实例。用于帧率设置和回调函数的注册，以及启动和停止回调函数的调用。
   * 下列API示例中都需先使用displaySync.create()方法获取到DisplaySync实例，再通过此实例调用对应方法。
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11 dynamic
   * @since 23 static
   */
  interface DisplaySync {
    /**
     * 设置期望的帧率范围。
     * 
     * @param { ExpectedFrameRateRange } rateRange - 设置DisplaySync期望的帧率。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     *     or check if ExpectedFrameRateRange is valid.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     * @since 23 static
     */
    setExpectedFrameRateRange(rateRange: ExpectedFrameRateRange) : void;

    /**
     * 订阅每一帧的变化。
     * 
     * @param { 'frame' } type - 设置注册回调的类型（只能是'frame'类型）。
     * @param { Callback<IntervalInfo> } callback - 订阅函数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     */
    on(type: 'frame', callback: Callback<IntervalInfo>): void;

    /**
     * 订阅每一帧的变化。
     * 
     * @param { Callback<IntervalInfo> } callback - 订阅函数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    onFrame(callback: Callback<IntervalInfo>): void;

    /**
     * 取消订阅每一帧的变化。
     * 
     * @param { 'frame' } type - 设置注册回调的类型（只能是'frame'类型）。
     * @param { Callback<IntervalInfo> } [callback] - 订阅函数，参数不填时，默认取消全部订阅函数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     */
    off(type: 'frame', callback?: Callback<IntervalInfo>): void;

    /**
     * 取消订阅每一帧的变化。
     * 
     * @param { Callback<IntervalInfo> } [callback] - 订阅函数，参数不填时，默认取消全部订阅函数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 23 static
     */
    offFrame(callback?: Callback<IntervalInfo>): void;

    /**
     * 开始每帧回调。
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     * @since 23 static
     */
    start(): void;

    /**
     * 停止每帧回调。
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     * @since 23 static
     */
    stop(): void;
  }

  /**
   * 创建DisplaySync对象，通过此对象设置UI自绘制内容帧率。
   * 
   * @returns { DisplaySync } 返回当前创建的DisplaySync对象实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11 dynamic
   * @since 23 static
   */
  function create(): DisplaySync;
}

export default displaySync;
