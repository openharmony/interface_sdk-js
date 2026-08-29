/*
 * Copyright (C) 2023-2024 Huawei Device Co., Ltd.
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
 * @file 蓝牙a2dp模块
 * @kit ConnectivityKit
 */

import type { AsyncCallback } from './@ohos.base';
import type baseProfile from './@ohos.bluetooth.baseProfile';

/**
 * 本模块提供基于增强音频分发协议（Advanced Audio Distribution Profile，A2DP）的蓝牙媒体音频能力，
 * 支持获取媒体播放状态和连接状态等方法。
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @crossplatform [since 13]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace a2dp {
  /**
   * 基础Profile接口定义，提供监听和获取连接状态等公共能力。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 23 static
   */
  type BaseProfile = baseProfile.BaseProfile;

  /**
   * 创建蓝牙媒体A2DP Source实例。通过该实例，可以使用本端作为A2DP Source设备时提供的各项方法，
   * 如：获取和其他设备间的蓝牙媒体音频播放状态。
   *
   * @returns { A2dpSourceProfile } 返回蓝牙媒体音频源实例。
   * @throws { BusinessError } 401 - Invalid parameter.Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  function createA2dpSrcProfile(): A2dpSourceProfile;

  /**
   * 该实例表示蓝牙媒体音频中的A2DP Source角色。
   * 
   * 该类继承于[BaseProfile]{@link a2dp.BaseProfile}，因此可以使用其父类中的方法。
   * 使用该类的方法前，需通过[createA2dpSrcProfile]{@link a2dp.createA2dpSrcProfile}方法构造该类的实例。
   * 和该实例角色相对应的是A2DP Sink。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  interface A2dpSourceProfile extends BaseProfile {
    /**
     * 发起设备的A2dp服务连接请求。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    connect(deviceId: string): void;

    /**
     * 断开设备的a2dp服务连接。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    disconnect(deviceId: string): void;

    /**
     * 获取本端和对端设备间的媒体音频播放状态。例如，在音乐播放器应用中可用于检查蓝牙音频是否正在播放，从而同步更新界面的播放/暂停按钮状态。
     * 
     * 从API version 21开始，此接口支持使用对端设备的实际MAC地址获取媒体音频播放状态。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 对端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @returns { PlayingState } 蓝牙媒体音频播放状态。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getPlayingState(deviceId: string): PlayingState;

    /**
     * 获取设备是否支持绝对音量能力。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @returns { Promise<boolean> } Promise对象。返回true表示设备支持绝对音量能力；返回false表示设备不支持绝对音量能力。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isAbsoluteVolumeSupported(deviceId: string): Promise<boolean>;

    /**
     * 获取设备是否支持绝对音量能力。使用Callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当接口调用返回成功，err为undefined，data为获取到的设备是否支持绝对音量结果；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isAbsoluteVolumeSupported(deviceId: string, callback: AsyncCallback<boolean>): void;

    /**
     * 获取设备绝对音量能力是否开启。需要在设备支持绝对音量的情况下(参考
     * [isAbsoluteVolumeSupported]{@link a2dp.A2dpSourceProfile.isAbsoluteVolumeSupported(deviceId: string, callback: AsyncCallback<boolean>)})，
     * 再获取设备绝对音量能力是否开启。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @returns { Promise<boolean> } Promise对象。返回true表示设备绝对音量能力开启；返回false表示设备绝对音量能力未开启。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isAbsoluteVolumeEnabled(deviceId: string): Promise<boolean>;

    /**
     * 获取设备绝对音量能力是否开启。需要在设备支持绝对音量的情况下(参考
     * [isAbsoluteVolumeSupported]{@link a2dp.A2dpSourceProfile.isAbsoluteVolumeSupported(deviceId: string, callback: AsyncCallback<boolean>)})，
     * 再获取设备绝对音量能力是否开启。使用Callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当接口调用返回成功，err为undefined，data为获取到的绝对音量能力开启结果，true表示设备支持绝对音量能力，
     *     返回false表示设备不支持绝对音量能力；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isAbsoluteVolumeEnabled(deviceId: string, callback: AsyncCallback<boolean>): void;

    /**
     * 开启设备绝对音量能力。需要在设备支持绝对音量的情况下(参考
     * [isAbsoluteVolumeSupported]{@link a2dp.A2dpSourceProfile.isAbsoluteVolumeSupported(deviceId: string, callback: AsyncCallback<boolean>)})，
     * 再开启设备绝对音量能力。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @returns { Promise<void> } 以Promise的形式返回结果。如果成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    enableAbsoluteVolume(deviceId: string): Promise<void>;

    /**
     * 开启设备绝对音量能力。需要在设备支持绝对音量的情况下(参考
     * [isAbsoluteVolumeSupported]{@link a2dp.A2dpSourceProfile.isAbsoluteVolumeSupported(deviceId: string, callback: AsyncCallback<boolean>)})，
     * 再开启设备绝对音量能力。使用Callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @param { AsyncCallback<void> } callback - 回调函数。如果成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    enableAbsoluteVolume(deviceId: string, callback: AsyncCallback<void>): void;

    /**
     * 关闭设备绝对音量能力。需要在设备支持绝对音量的情况下(参考
     * [isAbsoluteVolumeSupported]{@link a2dp.A2dpSourceProfile.isAbsoluteVolumeSupported(deviceId: string, callback: AsyncCallback<boolean>)})，
     * 再关闭设备绝对音量能力。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @returns { Promise<void> } 以Promise的形式返回结果。如果成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    disableAbsoluteVolume(deviceId: string): Promise<void>;

    /**
     * 关闭设备绝对音量能力。需要在设备支持绝对音量的情况下(参考
     * [isAbsoluteVolumeSupported]{@link a2dp.A2dpSourceProfile.isAbsoluteVolumeSupported(deviceId: string, callback: AsyncCallback<boolean>)})，
     * 再关闭设备绝对音量能力。使用Callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @param { AsyncCallback<void> } callback - 回调函数。如果成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    disableAbsoluteVolume(deviceId: string, callback: AsyncCallback<void>): void;

    /**
     * 获取当前设备支持的全量编码器能力集合。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 对端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @returns { CodecInfoList[] } 当前设备支持的编码器能力集合。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2902008 - Current device is not an active device.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    getCurrentFullCodecInfo(deviceId: string): CodecInfoList[];

    /**
     * 获取当前编码器信息。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @returns { CodecInfo } 当前编码器信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getCurrentCodecInfo(deviceId: string): CodecInfo;

    /**
     * 设置当前编码器信息。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @param { CodecInfo } codecInfo - 编码器信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setCurrentCodecInfo(deviceId: string, codecInfo: CodecInfo): void;

    /**
     * 限制设备在连接成功的若干毫秒内播放音乐。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @param { int } duration - 拦截时长，取值范围：[3000, 20000]，单位：ms。
     * @returns { Promise<void> } 以Promise的形式返回结果。如果成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    disableAutoPlay(deviceId: string, duration: int): Promise<void>;

    /**
     * 允许设备在连接成功后自动播放音乐。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @returns { Promise<void> } 以Promise的形式返回结果。如果成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    enableAutoPlay(deviceId: string): Promise<void>;

    /**
     * 获取拦截时长或自动播放开关。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @returns { Promise<int> } 以Promise的形式返回结果。number为返回的拦截时长，单位：ms。如果返回-1，则表示允许设备在连接成功后自动播放音乐。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getAutoPlayDisabledDuration(deviceId: string): Promise<int>;
  }

  /**
   * 蓝牙媒体音频使用的编解码器。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface CodecInfo {
    /**
     * 编解码器类型，默认值为CODEC_TYPE_SBC。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    codecType: CodecType;
    /**
     * 每个采样点的位深，默认值为CODEC_BITS_PER_SAMPLE_NONE。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    codecBitsPerSample: CodecBitsPerSample;
    /**
     * 编解码器的声道模式，默认值为CODEC_CHANNEL_MODE_NONE。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    codecChannelMode: CodecChannelMode;
    /**
     * 编解码器的采样率，默认值为CODEC_SAMPLE_RATE_NONE。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    codecSampleRate: CodecSampleRate;
    /**
     * 编解码器的码率，默认值为CODEC_BIT_RATE_ABR。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    codecBitRate?: CodecBitRate;
    /**
     * 编解码器的帧长，默认值为CODEC_FRAME_LENGTH_10MS。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    codecFrameLength?: CodecFrameLength;
  }

  /**
   * 蓝牙媒体音频编解码器支持的能力集合。不同编解码器支持的位深、声道模式、采样率、码率和帧长类型与音频接收器设备端能力有关。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 19 dynamic
   * @since 26.1.0 static
   */
  interface CodecInfoList {
    /**
     * 编解码器类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    codecType: CodecType;
    /**
     * 编解码器支持的位深能力集合。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    codecBitsPerSampleArray: CodecBitsPerSample[];
    /**
     * 编解码器支持的声道模式能力集合。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    codecChannelModeArray: CodecChannelMode[];
    /**
     * 编解码器支持的采样率能力集合。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    codecSampleRateArray: CodecSampleRate[];
    /**
     * 编解码器支持的码率能力集合。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    codecBitRateArray: CodecBitRate[];
    /**
     * 编解码器支持的帧长能力集合。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    codecFrameLengthArray: CodecFrameLength[];
  }

  /**
   * 枚举，蓝牙媒体音频播放状态。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 23 static
   */
  enum PlayingState {
    /**
     * 未播放媒体音频。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_NOT_PLAYING = 0,
    /**
     * 正在播放媒体音频。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_PLAYING = 1
  }

  /**
   * 枚举，蓝牙媒体音频编解码器类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum CodecType {
    /**
     * 编解码器类型未知。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_TYPE_INVALID = -1,
    /**
     * SBC
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_TYPE_SBC = 0,
    /**
     * AAC
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_TYPE_AAC = 1,
    /**
     * L2HC
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_TYPE_L2HC = 2,
    /**
     * L2HCST
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 13 dynamic
     * @since 23 static
     */
    CODEC_TYPE_L2HCST = 3,
    /**
     * LDAC
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 13 dynamic
     * @since 23 static
     */
    CODEC_TYPE_LDAC = 4
  }

  /**
   * 枚举，蓝牙媒体音频编解码器的声道模式，表示音频播放时独立的空间信号路径数量。声道模式影响声音的立体感和空间定位‌。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum CodecChannelMode {
    /**
     * 声道未知。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_CHANNEL_MODE_NONE = 0,
    /**
     * 单声道。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_CHANNEL_MODE_MONO = 1,
    /**
     * 双声道。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_CHANNEL_MODE_STEREO = 2
  }

  /**
   * 枚举，蓝牙媒体音频编解码器的位深，表示蓝牙音频信号在数字表示中使用的位数，单位为bit。位深决定每个采样点可以表示的动态范围和精度。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum CodecBitsPerSample {
    /**
     * 位深未知。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_BITS_PER_SAMPLE_NONE = 0,
    /**
     * 16bit
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_BITS_PER_SAMPLE_16 = 1,
    /**
     * 24bit
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_BITS_PER_SAMPLE_24 = 2,
    /**
     * 32bit
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_BITS_PER_SAMPLE_32 = 3
  }

  /**
   * 枚举，蓝牙媒体音频编解码器的采样率，表示每秒对蓝牙音频采样的次数，单位为Hz。采样率的选择会影响音质和传输效率。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum CodecSampleRate {
    /**
     * 采样率未知。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_SAMPLE_RATE_NONE = 0,
    /**
     * 44.1kHz
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_SAMPLE_RATE_44100 = 1,
    /**
     * 48kHz
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_SAMPLE_RATE_48000 = 2,
    /**
     * 88.2kHz
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_SAMPLE_RATE_88200 = 3,
    /**
     * 96kHz
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_SAMPLE_RATE_96000 = 4,
    /**
     * 176.4kHz
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_SAMPLE_RATE_176400 = 5,
    /**
     * 192kHz
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CODEC_SAMPLE_RATE_192000 = 6
  }

  /**
   * 枚举，蓝牙媒体音频编解码器的码率，表示单位时间内音频数据的传输量，单位为kbps。码率影响音频音质和传输带宽。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 19 dynamic
   * @since 26.1.0 static
   */
  enum CodecBitRate {
    /**
     * 96kbps
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    CODEC_BIT_RATE_96000 = 0,
    /**
     * 128kbps
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    CODEC_BIT_RATE_128000 = 1,
    /**
     * 192kbps
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    CODEC_BIT_RATE_192000 = 2,
    /**
     * 256kbps
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    CODEC_BIT_RATE_256000 = 3,
    /**
     * 320kbps
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    CODEC_BIT_RATE_320000 = 4,
    /**
     * 480kbps
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    CODEC_BIT_RATE_480000 = 5,
    /**
     * 640kbps
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    CODEC_BIT_RATE_640000 = 6,
    /**
     * 960kbps
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    CODEC_BIT_RATE_960000 = 7,
    /**
     * 自适应码率（根据蓝牙链路质量自动调整）。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    CODEC_BIT_RATE_ABR = 8,
    /**
     * 1500kbps
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 21 dynamic
     * @since 26.1.0 static
     */
    CODEC_BIT_RATE_1500000 = 9,
    /**
     * 2300kbps
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 21 dynamic
     * @since 26.1.0 static
     */
    CODEC_BIT_RATE_2300000 = 10
  }

  /**
   * 枚举，蓝牙媒体音频编解码器的帧长，表示一帧音频数据播放的时长，单位为ms。帧长影响音频传输的延迟和效率。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 19 dynamic
   * @since 26.1.0 static
   */
  enum CodecFrameLength {
    /**
     * 5ms帧长。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    CODEC_FRAME_LENGTH_5MS = 0,
    /**
     * 10ms帧长。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 19 dynamic
     * @since 26.1.0 static
     */
    CODEC_FRAME_LENGTH_10MS = 1
  }
}

export default a2dp;