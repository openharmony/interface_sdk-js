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
 * 可变帧率支持让开发者以指定帧率来运行UI业务，一般用于开发者自绘制UI，并且对于帧率有特定需求的场景，系统会根据设置的期望帧率、最小帧率和最大帧率来调整绘制频率，以满足不同场景的需求。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace displaySync {
  /**
   * 开发者可以从回调函数中获取帧绘制的时间戳信息，包含当前帧到达的时间timestamp和下一帧预期到达的时间targetTimestamp。
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11 dynamic
   * @since 23 static
   */
  interface IntervalInfo {
    /**
     * 当前帧到达的时间（单位：纳秒）。系统启动以来的单调递增时间。
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     * @since 23 static
     */
    timestamp: long;

    /**
     * 下一帧预期到达的时间（单位：纳秒）。系统启动以来的单调递增时间，值应大于timestamp。
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     * @since 23 static
     */
    targetTimestamp: long;
  }

  /**
   * 期望帧率和回调函数设置实例。用于设置期望帧率范围、注册帧回调函数，以及启动和停止帧回调。
   * 下列API示例中都需先使用displaySync.create()方法获取到DisplaySync实例，再通过此实例调用对应方法。
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11 dynamic
   * @since 23 static
   */
  interface DisplaySync {
    /**
     * 设置期望的帧率范围。设置的期望帧率范围将作为系统调度的参考，系统会尽量在此范围内调整绘制帧率。
     * 未调用该方法或传入ExpectedFrameRateRange(0, 0, 0)时将跟随应用当前运行的帧率。建议在调用start前设置，以便立即生效；调用start之后设置也可生效但可能存在延迟。
     * 
     * @param { ExpectedFrameRateRange } rateRange - 设置DisplaySync期望的帧率范围，包含expected、min和max三个字段，单位为帧/秒（fps），
     *                                               字段需为非负整数，取值范围为[0, 设备最大帧率]，且满足min <= expected <= max。超出有效范围时会抛出401错误码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1. Mandatory parameters are left unspecified.
     *                                 2. Incorrect parameters types.
     *                                 3. Parameter verification failed.
     *                                 or check if ExpectedFrameRateRange is valid.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     * @since 23 static
     */
    setExpectedFrameRateRange(rateRange: ExpectedFrameRateRange) : void;

    /**
     * 订阅每一帧的变化。注册回调函数后，还需调用start方法启动DisplaySync，系统才会在每一帧触发该回调。和off('frame')方法配对使用，用于取消注册回调函数。
     * 字段需为非负整数，取值范围为[0, 设备最大帧率]，且满足min <= expected <= max。超出有效范围时参数校验失败。
     * 
     * @param { 'frame' } type - 设置回调的类型（只能是'frame'类型）。
     * @param { Callback<IntervalInfo> } callback - 订阅帧变化的回调函数。IntervalInfo包含timestamp（当前帧到达时间）和targetTimestamp（下一帧预期到达时间）两个属性，单位均为纳秒。
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
     * 取消订阅每一帧的变化。与on('frame')方法配对使用。取消成功后，将不再触发回调函数。
     * 
     * @param { 'frame' } type - 设置回调的类型（只能是'frame'类型）。
     * @param { Callback<IntervalInfo> } [callback] - 传入调用on('frame')时注册的回调函数，用于取消订阅该回调函数。必须在已通过on('frame')注册回调后使用。
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
     * 使通过setExpectedFrameRateRange设置的期望帧率范围生效；如果通过on('frame')注册了回调函数，则开始请求VSync信号，触发已注册的回调，每帧执行一次。和stop方法配对使用。
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11 dynamic
     * @since 23 static
     */
    start(): void;

    /**
     * 关闭期望帧率范围并且停止每帧回调。需在调用start后使用，停止后DisplaySync的配置（如期望帧率范围、回调函数）仍然保留，可随时通过start重新启动。
     * stop方法会解除DisplaySync与UI上下文和窗口的关联，通常无需特定的UI上下文。
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
   * @returns { DisplaySync } 返回DisplaySync对象实例，用于设置帧率范围、注册帧回调函数以及控制回调的启动和停止。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11 dynamic
   * @since 23 static
   */
  function create(): DisplaySync;
}

export default displaySync;
