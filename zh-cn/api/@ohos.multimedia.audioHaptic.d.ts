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
 * @file 音振协同
 * @kit AudioKit
 */

import type { Callback } from './@ohos.base';
import type audio from './@ohos.multimedia.audio';

/**
 * 音振协同，表示在播放声音时，同步发起振动。可用于来电通知、消息提醒等场景。
 *
 * @syscap SystemCapability.Multimedia.AudioHaptic.Core
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace audioHaptic {
  /**
   * 获取音振管理器。
   *
   * @returns { AudioHapticManager } 音振管理器。
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11 dynamic
   * @since 23 static
   */
  function getAudioHapticManager(): AudioHapticManager;

  /**
   * 枚举，音频时延模式。
   *
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum AudioLatencyMode {
    /**
     * 普通时延模式。
     *
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    AUDIO_LATENCY_MODE_NORMAL = 0,

    /**
     * 低时延模式。当音频文件过长时可能被截断，该特性与[SoundPool]{@link ./multimedia/soundPool:SoundPool}一致。
     *
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    AUDIO_LATENCY_MODE_FAST = 1
  }

  /**
   * 音振播放器选项。
   *
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface AudioHapticPlayerOptions {
    /**
     * 是否将音频静音，true表示将音频静音，false表示正常播放声音。若不填该参数，则默认为false。
     *
     * @type {?boolean}
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    muteAudio?: boolean;

    /**
     * 是否禁止振动，true表示将禁止振动，false表示正常振动。若不填该参数，则默认为false。
     *
     * @type {?boolean}
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    muteHaptics?: boolean;
  }

  /**
   * 描述音振文件描述符。
   * 
   * > **注意：**
   * >
   * > 开发者需要确保fd是可用的文件描述符，且offset和length的值都是正确的。
   *
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface AudioHapticFileDescriptor {
    /**
     * 音振资源文件的文件描述符，通常大于等于0。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    fd: int;

    /**
     * 文件中数据读取的偏移量，单位为字节。默认情况下，偏移量为0。
     *
     * @type { ?long }
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    offset?: long;

    /**
     * 读取数据的字节长度。默认情况下，长度为文件中从偏移量位置开始的剩余字节数。
     *
     * @type { ?long }
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    length?: long;
  }

  /**
   * 管理音振协同功能。在调用AudioHapticManager的接口前，需要先通过[getAudioHapticManager]{@link audioHaptic.getAudioHapticManager}创建实例。
   *
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface AudioHapticManager {
    /**
     * 通过Uri注册音频和振动资源。使用Promise异步回调。
     * 
     * > **注意：**
     * >
     * > 单个应用最多支持同时注册128个资源，超过之后将会注册失败（返回注册的资源ID为负数）。推荐应用合理控制注册资源数量，对于不再需要使用的资源，建议及时取消注册。
     *
     * @param { string } audioUri - 音频资源的Uri。
     *     <br>- 对普通时延模式，音频资源格式和路径格式的支持可参考[AVPlayer]{@link @ohos.multimedia.media:media.AVPlayer}。
     *     <br>- 对低时延模式，音频资源格式支持可参考[SoundPool]{@link ./multimedia/soundPool:SoundPool}，路径格式需满足
     *     [fileIo.open]{@link @ohos.file.fs:open}的要求。
     *     <br>- 对两种时延模式，均建议传入文件的绝对路径。
     * @param { string } hapticUri - 振动资源的Uri。
     *     <br>振动资源格式支持可参考[HapticFileDescriptor]{@link @ohos.vibrator:vibrator.HapticFileDescriptor}，路径格式需满足
     *     [fileIo.open]{@link @ohos.file.fs:open}的要求。
     *     <br>建议传入文件的绝对路径。
     * @returns { Promise<int> } Promise对象，返回注册的资源ID。
     *     <br>正常情况下返回注册的资源ID为非负数。若返回注册的资源ID为负数，则表示注册失败，需检查注册资源数量是否超过上限。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    registerSource(audioUri: string, hapticUri: string): Promise<int>;

    /**
     * 通过文件描述符注册音频和振动资源。使用Promise异步回调。
     * 
     * > **注意：**
     * >
     * > 单个应用最多支持同时注册128个资源，超过之后将会注册失败（返回注册的资源ID为负数）。推荐应用合理控制注册资源数量，对于不再需要使用的资源，建议及时取消注册。
     *
     * @param { AudioHapticFileDescriptor } audioFd 已打开的有效文件描述符对象，用于描述音频文件。配套的offset和length需符合实际文件长度。
     * @param { AudioHapticFileDescriptor } hapticFd 已打开的有效文件描述符对象，用于描述振动文件。配套的offset和length必须符合实际文件长度。
     * @returns { Promise<int> } Promise对象，返回注册的资源ID。
     *     <br>正常情况下返回注册的资源ID为非负数。若返回注册的资源ID为负数，则表示注册失败，需检查注册资源数量是否超过上限。
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    registerSourceFromFd(audioFd: AudioHapticFileDescriptor, hapticFd: AudioHapticFileDescriptor): Promise<int>;

    /**
     * 取消注册音频和振动资源。使用Promise异步回调。
     * 
     * > **注意：**
     * >
     * > 对于不再需要使用的资源，建议应用及时取消注册，避免出现资源泄漏或资源数量超上限等问题。
     *
     * @param { int } id - 已注册资源的source id。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    unregisterSource(id: int): Promise<void>;

    /**
     * 设置音频时延模式。
     *
     * @param { int } id - 已注册资源的source id。
     * @param { AudioLatencyMode } latencyMode - 音频时延模式。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    setAudioLatencyMode(id:int, latencyMode: AudioLatencyMode): void;

    /**
     * 设置音频流使用类型。
     *
     * @param { int } id - 已注册资源的source id。
     * @param { audio.StreamUsage } usage - 音频流使用类型。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types;
     *                                 3.Parameter verification failed.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    setStreamUsage(id: int, usage: audio.StreamUsage): void;

    /**
     * 创建音振播放器。使用Promise异步回调。
     *
     * @permission ohos.permission.VIBRATE
     * @param { number } id - 已注册资源的source id。
     * @param { AudioHapticPlayerOptions } options - 音振播放器选项。
     * @returns { Promise<AudioHapticPlayer> } Promise对象，返回创建的音振播放器。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400106 - Unsupport format.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     */
    createPlayer(id: number, options?: AudioHapticPlayerOptions): Promise<AudioHapticPlayer>;

    /**
     * 创建音振播放器。使用Promise异步回调。
     * @permission ohos.permission.VIBRATE
     * @param { int } id - Source id.
     * @param { AudioHapticPlayerOptions } [options] - 音振播放器选项。
     * @returns { Promise<AudioHapticPlayer | null> } Promise对象，返回创建的音振播放器。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400106 - Unsupport format.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 23 static
     */
    createPlayer(id: int, options?: AudioHapticPlayerOptions): Promise<AudioHapticPlayer | null>;
  }

  /**
   * 枚举，音振类型。
   *
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum AudioHapticType {
    /**
     * 音频。
     *
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    AUDIO_HAPTIC_TYPE_AUDIO = 0,

    /**
     * 振动。
     *
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    AUDIO_HAPTIC_TYPE_HAPTIC = 1
  }

  /**
   * 音振播放器，提供音振协同播放功能。在调用AudioHapticPlayer的接口前，需要先通过
   * [createPlayer]{@link audioHaptic.AudioHapticManager.createPlayer(id: number, options?: AudioHapticPlayerOptions)}创建
   * 实例。
   *
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface AudioHapticPlayer {
    /**
     * 查询该音振类型是否被静音。
     *
     * @param { AudioHapticType } type - 音振类型。
     * @returns { boolean } 表示查询的音振类型是否被静音。true表示静音，false表示非静音。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    isMuted(type: AudioHapticType): boolean;

    /**
     * 开始播放。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 5400102 - Operate not permit.
     * @throws { BusinessError } 5400103 - IO error.
     * @throws { BusinessError } 5400105 - Service died.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * 停止播放。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 5400102 - Operate not permit.
     * @throws { BusinessError } 5400105 - Service died.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * 释放音振播放器。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 5400105 - Service died.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * 设置音振播放器的音量。使用Promise异步回调。
     * 
     * > **注意：**
     * >
     * > 该方法需在音振播放器释放前调用。
     *
     * @param { double } volume - 取值范围为[0.00, 1.00]，其中1.00表示最大音量（100%）。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operate not permit in current state.
     * @throws { BusinessError } 5400105 - Service died.
     * @throws { BusinessError } 5400108 - Parameter out of range.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    setVolume(volume: double): Promise<void>;

    /**
     * 设置音振播放器循环播放。使用Promise异步回调。
     * 
     * > **注意：**
     * >
     * > 该方法需在音振播放器释放前调用。
     *
     * @param { boolean } loop - 是否循环播放。true表示循环播放，false表示不循环播放。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operate not permit in current state.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    setLoop(loop: boolean): Promise<void>;

    /**
     * 查询设备是否可以调整振动幅度。
     *
     * @returns { boolean } 设备是否可以调整振动幅度。true表示可以调整振动幅度，false表示不可以调整振动幅度。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isHapticsIntensityAdjustmentSupported(): boolean;

    /**
     * 查询设备是否可以设置振动渐变。
     *
     * @returns { boolean } 设备是否可以设置振动渐变。true表示设备可以设置振动渐变，false表示设备不可以设置振动渐变。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isHapticsRampSupported(): boolean;

    /**
     * 设置音振播放器的振幅。使用Promise异步回调。
     * 
     * > **注意：**
     * >
     * > 该方法需在音振播放器释放前调用，且每次播放仅支持调用一次。
     *
     * @param { double } intensity - 取值范围为[0.00, 1.00]，其中1.00表示最大振幅（100%）。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 801 - Function is not supported in current device.
     * @throws { BusinessError } 5400102 - Operate not permit in current state.
     * @throws { BusinessError } 5400108 - Parameter out of range.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    setHapticsIntensity(intensity: double): Promise<void>;

    /**
     * 设置音振播放器渐变播放。使用Promise异步回调。
     * 
     * > **注意：**
     * >
     * > - 该方法需在音振协同播放器播放前/后，以及释放前使用。
     * >
     * > - 该方法仅能调用一次。
     *
     * @param { int } duration - 渐变时间段，单位为毫秒（ms），值必须为整数，且不能小于100ms。
     * @param { double } startIntensity - 起始振动幅度，取值范围为[0.00, 1.00]，其中1.00表示最大振幅（100%）。
     * @param { double } endIntensity - 结束振动幅度，取值范围为[0.00, 1.00]，其中1.00表示最大振幅（100%）。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 801 - Function is not supported in current device.
     * @throws { BusinessError } 5400102 - Operate not permit in current state.
     * @throws { BusinessError } 5400108 - Parameter out of range.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    setHapticsRamp(duration: int, startIntensity: double, endIntensity: double): Promise<void>;

    /**
     * 设置静音模式下是否开启振动。
     * 
     * > **注意：**
     * >
     * > 该方法必须在释放音振播放器前使用，不能在播放中调用。
     *
     * @param { boolean } enable - 是否在静音模式下开启振动。true表示在静音模式下开启振动，false表示在静音模式下不开启振动。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 5400102 - Operate not permit in current state.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    enableHapticsInSilentMode(enable: boolean): void;

    /**
     * 监听流结束事件（音频流播放结束时触发）。使用callback异步回调。
     *
     * @param { 'endOfStream' } type - 事件回调类型，支持的事件为'endOfStream'，当音频流播放结束时，触发该事件。
     * @param { Callback<void> } callback - 回调函数，无返回结果。
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     */
    on(type: 'endOfStream', callback: Callback<void>): void;

    /**
     * 监听流结束事件（音频流播放结束时触发）。使用callback异步回调。
     * 
     * @param { Callback<void> } callback - 回调函数，无返回结果。
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 23 static
     */
    onEndOfStream(callback: Callback<void>): void;

    /**
     * 取消监听流结束事件。使用callback异步回调。
     *
     * @param { 'endOfStream' } type - 事件回调类型，支持的事件为'endOfStream'，当取消监听流结束事件时，触发该事件。
     * @param { Callback<void> } [callback] - 回调函数，无返回结果。
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     */
    off(type: 'endOfStream', callback?: Callback<void>): void;

    /**
     * 取消监听流结束事件。使用callback异步回调。
     * 
     * @param { Callback<void> } [callback] - 回调函数，无返回结果。
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 23 static
     */
    offEndOfStream(callback?: Callback<void>): void;

    /**
     * 监听音频中断事件（当音频焦点发生变化时触发）。使用callback异步回调。
     *
     * @param { 'audioInterrupt' } type - 事件回调类型，支持的事件为'audioInterrupt'，当音频焦点状态发生变化时，触发该事件。
     * @param { Callback<audio.InterruptEvent> } callback - 回调函数，返回中断事件信息。
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     */
    on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>): void;

    /**
     * 监听音频中断事件（当音频焦点发生变化时触发）。使用callback异步回调。
     * 
     * @param { Callback<audio.InterruptEvent> } callback - 回调函数，返回中断事件信息。
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 23 static
     */
    onAudioInterrupt(callback: Callback<audio.InterruptEvent>): void;

    /**
     * 取消监听音频中断事件。使用callback异步回调。
     *
     * @param { 'audioInterrupt' } type - 事件回调类型，支持的事件为'audioInterrupt'，当取消监听音频中断事件时，触发该事件。
     * @param { Callback<audio.InterruptEvent> } callback - 回调函数，返回中断事件信息。
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     */
    off(type: 'audioInterrupt', callback?: Callback<audio.InterruptEvent>): void;

    /**
     * 取消监听音频中断事件。使用callback异步回调。
     * 
     * @param { Callback<audio.InterruptEvent> } [callback] - 回调函数，返回中断事件信息。
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 23 static
     */
    offAudioInterrupt(callback?: Callback<audio.InterruptEvent>): void;
  }
}
export default audioHaptic;