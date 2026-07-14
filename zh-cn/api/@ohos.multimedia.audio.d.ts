/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 AudioCapturer
 * @file
 AudioCapturer
 * @kit AudioKit
 */

import { ErrorCallback, AsyncCallback, Callback, BusinessError } from './@ohos.base';

/**
 * 音频管理提供基础的音频控制能力，包括音量调节、设备管理、数据采集及渲染。
 * 
 * 该模块提供以下音频相关的常用功能：
 * 
 * - [AudioManager]{@link audio.AudioManager}：音频管理器。
 * - [AudioDeviceEnhanceManager](docroot://reference/apis-audio-kit/arkts-apis-audio-AudioDeviceEnhanceManager.md)：音频设备增
 * 强管理器。
 * - [AudioRenderer]{@link audio.AudioRenderer}：音频渲染，用于播放PCM（Pulse Code Modulation）音频数据。
 * - [AudioCapturer]{@link audio.AudioCapturer}：音频采集，用于录制PCM音频数据。
 *
 * @syscap SystemCapability.Multimedia.Audio.Core [since 12]
 * @crossplatform [since 12]
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace audio {
  /**
   * 表示音频错误码的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum AudioErrors {
    /**
     * 无效入参。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERROR_INVALID_PARAM = 6800101,
    /**
     * 分配内存失败。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERROR_NO_MEMORY = 6800102,
    /**
     * 状态不支持。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERROR_ILLEGAL_STATE = 6800103,
    /**
     * 参数选项不支持。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERROR_UNSUPPORTED = 6800104,
    /**
     * 处理超时。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 9 dynamic
     * @since 23 static
     */
    ERROR_TIMEOUT       = 6800105,
    /**
     * 音频流数量达到限制。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 9 dynamic
     * @since 23 static
     */
    ERROR_STREAM_LIMIT  = 6800201,
    /**
     * 系统处理异常。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERROR_SYSTEM = 6800301
  }

  /**
   * Define local device network id for audio
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  const LOCAL_NETWORK_ID: string;

  /**
   * Define default volume group id for audio
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  const DEFAULT_VOLUME_GROUP_ID: int;

  /**
   * Define default interrupt group id for audio
   * @syscap SystemCapability.Multimedia.Audio.Interrupt
   * @since 9 dynamic
   * @since 23 static
   */
  const DEFAULT_INTERRUPT_GROUP_ID: int;

  /**
   * 获取音频管理器。
   *
   * @returns { AudioManager } 音频管理器对象。
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  function getAudioManager(): AudioManager;

  /**
   * 获取音频采集器。使用callback异步回调。
   *
   * @param { AudioCapturerOptions } options - 配置音频采集器。
   * @param { AsyncCallback<AudioCapturer> } callback - 回调函数。当获取音频采集器成功，err为undefined，data为获取到的音频采集器对象；否则为错误对象。异常将返回
   *     error对象：
   *     <br>错误码6800301：表示参数校验异常、权限校验异常或系统处理异常（具体错误查看系统日志）。
   *     <br>错误码6800101：表示必选参数为空或参数类型错误。
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform [since 12]
   * @since 8 dynamic
   */
  function createAudioCapturer(options: AudioCapturerOptions, callback: AsyncCallback<AudioCapturer>): void;

  /**
   * Obtains an {@link AudioCapturer} instance. This method uses an asynchronous callback to return the
   * capturer instance.
   * Using {@link #AudioCapturer} to record audio will need permission according to different {@link #Sourcetype}
   * in options parameter, like {@link #ohos.permission.MICROPHONE} for the most microphone recording cases.
   * @param { AudioCapturerOptions } options - Capturer configurations.
   * @param { AsyncCallback<AudioCapturer | null> } callback - Callback used to return the audio capturer
   *     instance, or null if any error occurs.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800301 - Audio system internal error, such as system crash.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  function createAudioCapturer(options: AudioCapturerOptions, callback: AsyncCallback<AudioCapturer | null>): void;

  /**
   * 获取音频采集器。使用Promise异步回调。
   *
   * @param { AudioCapturerOptions } options - 配置音频采集器。
   * @returns { Promise<AudioCapturer> } Promise对象，成功将返回音频采集器对象，异常将返回error对象：
   *     <br>错误码6800301：表示参数校验异常、权限校验异常或系统处理异常（具体错误查看系统日志）。
   *     <br>错误码6800101：表示必选参数为空或参数类型错误。
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform [since 12]
   * @since 8 dynamic
   */
  function createAudioCapturer(options: AudioCapturerOptions): Promise<AudioCapturer>;

  /**
   * Obtains an {@link AudioCapturer} instance. This method uses a promise to return the capturer instance.
   * Using {@link #AudioCapturer} to record audio will need permission according to different {@link #Sourcetype}
   * in options parameter, like {@link #ohos.permission.MICROPHONE} for the most microphone recording cases.
   * @param { AudioCapturerOptions } options - Capturer configurations.
   * @returns { Promise<AudioCapturer | null> } Promise used to return the audio capturer instance,
   *     or null if any error occurs.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800301 - Audio system internal error, such as system crash.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  function createAudioCapturer(options: AudioCapturerOptions): Promise<AudioCapturer | null>;

  /**
   * 获取一个特殊的{@link #AudioCapturer}实例。该方法使用promise返回录音实例。
   * 此捕获可用于记录Mic-In音频数据和回声参考信号，以便应用处理算法。
   * Mic-In音频数据和回声参考信号将根据应用程序设置的配置被放入一个或多个缓冲。
   * 当应用程序处于后台时，不允许创建录音实例。
   *
   * @permission ohos.permission.MICROPHONE
   * @param { AudioCapturerMicInConfig } config - Capturer configuration, see {@link #AudioCapturerMicInConfig}
   *     for details.
   * @returns { Promise<AudioCapturer | null> } Promise用于返回录音实例。
   *     如果出现错误，则返回null。
   * @throws { BusinessError } 201 - Permission denied, including background recording.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Capturer creation is not supported, may caused by following problems:
   *     <br> 1. Source type is unsupported for this capturer, only {@link #SOURCE_TYPE_UNPROCESSED_VOICE_ASSISTANT}
   *     and {@link #SOURCE_TYPE_VOICE_RECOGNITION} are supported currently.
   *     <br> 2. Echo reference signal's config is unsupported, echo reference's sampling rate and format must be the
   *     same as MicIn audio data currently.
   * @throws { BusinessError } 6800301 - Audio system internal error, such as system process crash.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function createMicInAudioCapturer(config: AudioCapturerMicInConfig): Promise<AudioCapturer | null>;

  /**
   * 获取音频渲染器。使用callback异步回调。
   *
   * @param { AudioRendererOptions } options - 配置渲染器。
   * @param { AsyncCallback<AudioRenderer> } callback - 回调函数。当获取音频渲染器成功，err为undefined，data为获取到的音频渲染器对象；否则为错误对象。
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @since 8 dynamic
   */
  function createAudioRenderer(options: AudioRendererOptions, callback: AsyncCallback<AudioRenderer>): void;

  /**
   * Obtains an {@link AudioRenderer} instance.
   * This method uses a promise to return the renderer instance.
   *
   * The AudioRenderer instance is used to play streaming audio data.
   * When using AudioRenderer apis, there are many instructions for application
   * to achieve better performance and lower power consumption:
   * In music or audiobook background playback situation, you can have low power
   * consumption by following this best practices document [Low-Power Rules in Music Playback Scenarios]{@link
   * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-music-playback-scenarios}.
   * And for navigation situation, you can follow [Low-Power Rules in Navigation and Positioning Scenarios]{@link
   * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-navigation-scenarios}.
   *
   * Application developer should also be careful when app goes to background, please check if your audio playback
   * is still needed, see [Audio Resources]{@link
   * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-reasonable-audio-use}.
   * And avoiding to send silence audio data continuously to waste system resources, otherwise system will take
   * control measures when this behavior is detected, see [Audio Playback]{@link
   * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-reasonable-audio-playback-use}.
   *
   * If you want to use AudioRenderer api to implement a music playback application, there are also many interactive
   * scenes to consider, see [Developing an Audio Application]{@link
   * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-audio-interaction-practice}.
   *
   * @param { AudioRendererOptions } options - Renderer configurations.
   * @param { AsyncCallback<AudioRenderer | null> } callback - Callback used to return the audio renderer instance,
   *     or null when an error happens.
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @since 23 static
   */
  function createAudioRenderer(options: AudioRendererOptions, callback: AsyncCallback<AudioRenderer | null>): void;

  /**
   * 获取音频渲染器。使用Promise异步回调。
   *
   * @param { AudioRendererOptions } options - 配置渲染器。
   * @returns { Promise<AudioRenderer> } Promise对象，返回音频渲染器对象。
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @since 8 dynamic
   */
  function createAudioRenderer(options: AudioRendererOptions): Promise<AudioRenderer>;

  /**
   * Obtains an {@link AudioRenderer} instance.
   * This method uses a promise to return the renderer instance.
   *
   * The AudioRenderer instance is used to play streaming audio data.
   * When using AudioRenderer apis, there are many instructions for application
   * to achieve better performance and lower power consumption:
   * In music or audiobook background playback situation, you can have low power
   * consumption by following this best practices document [Low-Power Rules in Music Playback Scenarios]{@link
   * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-music-playback-scenarios}.
   * And for navigation situation, you can follow [Low-Power Rules in Navigation and Positioning Scenarios]{@link
   * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-navigation-scenarios}.
   *
   * Application developer should also be careful when app goes to background, please check if your audio playback
   * is still needed, see [Audio Resources]{@link
   * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-reasonable-audio-use}.
   * And avoiding to send silence audio data continuously to waste system resources, otherwise system will take
   * control measures when this behavior is detected, see [Audio Playback]{@link
   * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-reasonable-audio-playback-use}.
   *
   * If you want to use AudioRenderer api to implement a music playback application, there are also many interactive
   * scenes to consider, see [Developing an Audio Application]{@link
   * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-audio-interaction-practice}.
   *
   * @param { AudioRendererOptions } options - Renderer configurations.
   * @returns { Promise<AudioRenderer | null> } Promise used to return the audio renderer instance, or
   *     null when an error happens.
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @since 23 static
   */
  function createAudioRenderer(options: AudioRendererOptions): Promise<AudioRenderer | null>;

  /**
   * Obtains a {@link TonePlayer} instance. This method uses an asynchronous callback to return the renderer instance.
   * @param { AudioRendererInfo } options - Tone playing attribute.
   * @param { AsyncCallback<TonePlayer> } callback - Callback used to return the tonePlayer instance.
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 9 dynamic
   */
  function createTonePlayer(options: AudioRendererInfo, callback: AsyncCallback<TonePlayer>): void;

  /**
   * Obtains a {@link TonePlayer} instance. This method uses an asynchronous callback to return the renderer instance.
   * @param { AudioRendererInfo } options - Tone playing attribute.
   * @param { AsyncCallback<TonePlayer | null> } callback - Callback used to return the tonePlayer instance, or
   *     null when an error happens.
   * @throws { BusinessError } 202 - Not system App.
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 23 static
   */
  function createTonePlayer(options: AudioRendererInfo, callback: AsyncCallback<TonePlayer | null>): void;

  /**
   * Obtains a {@link TonePlayer} instance. This method uses a promise to return the renderer instance.
   * @param { AudioRendererInfo } options - Tone playing attribute.
   * @returns { Promise<TonePlayer> } Promise used to return the tonePlayer instance.
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 9 dynamic
   */
  function createTonePlayer(options: AudioRendererInfo): Promise<TonePlayer>;

  /**
   * Obtains a {@link TonePlayer} instance. This method uses a promise to return the renderer instance.
   * @param { AudioRendererInfo } options - Tone playing attribute.
   * @returns { Promise<TonePlayer | null> } Promise used to return the tonePlayer instance, or
   *     null when an error happens.
   * @throws { BusinessError } 202 - Not system App.
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 23 static
   */
  function createTonePlayer(options: AudioRendererInfo): Promise<TonePlayer | null>;

  /**
   * 创建音频返听器。使用Promise异步回调。
   * 
   * 在使用createAudioLoopback接口之前，需先通过[isAudioLoopbackSupported]{@link audio.AudioStreamManager.isAudioLoopbackSupported}查
   * 询系统返听能力。
   *
   * @permission ohos.permission.MICROPHONE
   * @param { AudioLoopbackMode } mode 音频返听模式。
   * @returns { Promise<AudioLoopback> } Promise对象，成功将返回音频返听器对象，异常将返回error对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Unsupported API.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Loopback mode is unsupported.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 20 dynamic
   */
  /**
   * 创建音频返听器。使用Promise异步回调。
   * 
   * 在使用createAudioLoopback接口之前，需先通过[isAudioLoopbackSupported]{@link audio.AudioStreamManager.isAudioLoopbackSupported}查
   * 询系统返听能力。
   *
   * @param { AudioLoopbackMode } mode 音频返听模式。
   * @returns { Promise<AudioLoopback> } Promise对象，成功将返回音频返听器对象，异常将返回error对象。
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Loopback mode is unsupported.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 26.0.0 dynamic
   */
  function createAudioLoopback(mode: AudioLoopbackMode): Promise<AudioLoopback>;

  /**
   * Creates an <b>AudioLoopback</b> instance, which provides low-latency in-ear
   * monitoring using a fast capturer and renderer.
   *
   * @permission ohos.permission.MICROPHONE
   * @param { AudioLoopbackMode } mode Audio loopback mode.
   * @returns { Promise<AudioLoopback | null> } Promise used to return the <b>AudioLoopback</b> instance, or
   *     null when an error happens.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Unsupported API.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Loopback mode is unsupported.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 23 static
   */
  /**
   * Creates an <b>AudioLoopback</b> instance, which provides low-latency in-ear
   * monitoring using a fast capturer and renderer.
   *
   * @param { AudioLoopbackMode } mode - Audio loopback mode.
   * @returns { Promise<AudioLoopback | null> } Promise used to return the <b>AudioLoopback</b> instance, or
   *     null when an error happens.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Loopback mode is unsupported.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 26.0.0 static
   */
  function createAudioLoopback(mode: AudioLoopbackMode): Promise<AudioLoopback | null>;

  /**
   * 创建全局音频环回实例，提供低时延入耳监听功能。
   * 硬件音频环回只能在支持的平台中创建，应用程序可以使用
   * > **说明**
   * > {@link AudioStreamManager#isAudioLoopbackSupported}先检查。
   * > 系统中应该只有一个拥有全局环回的主实例，其他
   * > 是控制器。控制器可以通过向主设备发送命令来管理全局环回。
   * > 实例，并从中监听状态变化。
   *
   * @param { AudioLoopbackMode } mode - 要创建的音频环回模式
   * @param { boolean } isController - 创建拥有音频环回或仅拥有控制器的对象
   * @returns { Promise<AudioLoopback | null> } Promise用于返回音频环回实例。
   *     或者发生错误时为null。
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Loopback mode is unsupported.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function createGlobalAudioLoopback(mode: AudioLoopbackMode, isController: boolean): Promise<AudioLoopback | null>;

  /**
   * 表示音频状态的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum AudioState {
    /**
     * 无效状态。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    STATE_INVALID = -1,
    /**
     * 创建新实例状态。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    STATE_NEW = 0,
    /**
     * 准备状态。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    STATE_PREPARED = 1,
    /**
     * 运行状态。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    STATE_RUNNING = 2,
    /**
     * 停止状态。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    STATE_STOPPED = 3,
    /**
     * 释放状态。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    STATE_RELEASED = 4,
    /**
     * 暂停状态。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    STATE_PAUSED = 5
  }

  /**
   * 表示返听模式的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 20 dynamic
   * @since 23 static
   */
  enum AudioLoopbackMode {
    /**
     * 表示硬件返听模式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    HARDWARE = 0
  }

  /**
   * 表示返听状态的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 20 dynamic
   * @since 23 static
   */
  enum AudioLoopbackStatus {
    /**
     * 表示返听由于输入\输出设备而不可用（如出声设备变更）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    UNAVAILABLE_DEVICE = -2,
    /**
     * 表示返听由于音频场景而不可用（如音频焦点、低时延管控）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    UNAVAILABLE_SCENE = -1,
    /**
     * 表示返听可用。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    AVAILABLE_IDLE = 0,
    /**
     * 表示返听运行中。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    AVAILABLE_RUNNING = 1
  }

  /**
   * 表示返听混响模式的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 21 dynamic
   * @since 24 static
   */
  enum AudioLoopbackReverbPreset {
    /**
     * 保持原始混响，不进行任何增强。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    ORIGINAL = 1,

    /**
     * 提供类似KTV的混响效果。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    KTV = 2,

    /**
     * 提供类似剧场的混响效果（默认的混响模式）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    THEATER = 3,

    /**
     * 提供类似演唱会的混响效果。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    CONCERT = 4
  }

  /**
   * 表示返听均衡器类型的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 21 dynamic
   * @since 24 static
   */
  enum AudioLoopbackEqualizerPreset {
    /**
     * 保持原始声音，不进行均衡调节。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    FLAT = 1,
    /**
     * 使人声更饱满（默认的均衡器类型）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    FULL = 2,
    /**
     * 使人声更明亮。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    BRIGHT = 3
  }

  /**
   * 表示音频音量类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum AudioVolumeType {
    /**
     * 语音电话。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    VOICE_CALL = 0,
    /**
     * 铃声。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    RINGTONE = 2,
    /**
     * 媒体。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    MEDIA = 3,
    /**
     * 闹钟。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ALARM = 4,
    /**
     * 无障碍。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ACCESSIBILITY = 5,
    /**
     * Audio volume for system sound.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM = 6,
    /**
     * 语音助手。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 8 dynamic
     * @since 23 static
     */
    VOICE_ASSISTANT = 9,
    /**
     * Audio volume for ultrasonic.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    ULTRASONIC = 10,
    /**
     * Audio volume type for notification.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NOTIFICATION = 11,
    /**
     * Audio volume type for navigation.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NAVIGATION = 12,
    /**
     * Audio stream for all common.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ALL = 100
  }

  /**
   * 表示音频设备类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum DeviceFlag {
    /**
     * None devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE_DEVICES_FLAG = 0,
    /**
     * 输出设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    OUTPUT_DEVICES_FLAG = 1,
    /**
     * 输入设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    INPUT_DEVICES_FLAG = 2,
    /**
     * 所有设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    ALL_DEVICES_FLAG = 3,
    /**
     * Distributed output devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DISTRIBUTED_OUTPUT_DEVICES_FLAG = 4,
    /**
     * Distributed input devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DISTRIBUTED_INPUT_DEVICES_FLAG = 8,
    /**
     * All Distributed devices.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ALL_DISTRIBUTED_DEVICES_FLAG = 12
  }

  /**
   * 表示音频设备类型的枚举（根据用途分类）。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 12 dynamic
   * @since 23 static
   */
  enum DeviceUsage {
    /**
     * 媒体输出设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    MEDIA_OUTPUT_DEVICES = 1,
    /**
     * 媒体输入设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    MEDIA_INPUT_DEVICES = 2,
    /**
     * 所有媒体设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    ALL_MEDIA_DEVICES = 3,
    /**
     * 通话输出设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    CALL_OUTPUT_DEVICES = 4,
    /**
     * 通话输入设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    CALL_INPUT_DEVICES = 8,
    /**
     * 所有通话设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    ALL_CALL_DEVICES = 12
  }

  /**
   * 表示设备角色的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum DeviceRole {
    /**
     * 输入设备角色。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    INPUT_DEVICE = 1,
    /**
     * 输出设备角色。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    OUTPUT_DEVICE = 2
  }

  /**
   * 表示设备类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum DeviceType {
    /**
     * 无效设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    INVALID = 0,
    /**
     * 听筒。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    EARPIECE = 1,
    /**
     * 扬声器。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    SPEAKER = 2,
    /**
     * 有线耳机，带麦克风。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    WIRED_HEADSET = 3,
    /**
     * 有线耳机，不带麦克风。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    WIRED_HEADPHONES = 4,
    /**
     * 蓝牙设备SCO（Synchronous Connection Oriented）连接。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    BLUETOOTH_SCO = 7,
    /**
     * 蓝牙设备A2DP（Advanced Audio Distribution Profile）连接。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    BLUETOOTH_A2DP = 8,
    /**
     * 麦克风。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    MIC = 15,
    /**
     * USB耳机，带麦克风。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    USB_HEADSET = 22,
    /**
     * DisplayPort（显示接口，简称DP），用于外接扩展设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DISPLAY_PORT = 23,
    /**
     * 音频被系统应用投送到其他的远程设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REMOTE_CAST = 24,
    /**
     * USB设备（不包含USB耳机）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 18 dynamic
     * @since 23 static
     */
    USB_DEVICE = 25,

    /**
     * Accessory devices, such as the mic on remote control.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    ACCESSORY = 26,

    /**
     * HDMI设备（例如HDMI、ARC、eARC等）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 19 dynamic
     * @since 23 static
     */
    HDMI = 27,
    /**
     * 有线数字设备（例如S/PDIF等）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 19 dynamic
     * @since 23 static
     */
    LINE_DIGITAL = 28,
    /**
     * 分布式设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    REMOTE_DAUDIO = 29,

    /**
     * 助听器设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    /**
     * 助听器设备。
     *
     * Note: This original device type can be obtained after it is declared via
     *     {@link AudioRoutingManager#declareDeviceTypesCompatibility}.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 26.0.0 dynamic&static
     */
    HEARING_AID = 30,

    /**
     * 星闪设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    /**
     * 星闪设备。
     *
     * Note: This original device type can be obtained after it is declared via
     *     {@link AudioRoutingManager#declareDeviceTypesCompatibility}.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 26.0.0 dynamic&static
     */
    NEARLINK = 31,

    /**
     * Bluetooth device using the spp profile.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    BLUETOOTH_SPP = 33,

    /**
     * Nearlink port.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    NEARLINK_PORT = 34,

    /**
     * 系统私有设备（由于该设备在系统中属于私有设备，因此应用程序可以忽略该设备）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 22 dynamic
     * @since 23 static
     */
    SYSTEM_PRIVATE = 200,

    /**
     * 默认设备类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    DEFAULT = 1000,

    /**
     * Distributed virtual audio device.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @atomicservice
     * @since 16 dynamic
     */
    REMOTE_DAUDIO = 25,
  }

  /**
   * 数组类型，[DeviceType]{@link audio.DeviceType}数组。
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type DeviceTypeArray = Array<DeviceType>;

  /**
   * 表示活跃设备类型的枚举。
   *
   * @enum { number }
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimedia.audio.CommunicationDeviceType
   */
  enum ActiveDeviceType {
    /**
     * 扬声器。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.CommunicationDeviceType.SPEAKER
     */
    SPEAKER = 2,
    /**
     * 蓝牙设备SCO（Synchronous Connection Oriented）连接。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.DeviceType#BLUETOOTH_SCO
     */
    BLUETOOTH_SCO = 7
  }

  /**
   * 表示用于通信的可用设备类型的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Communication
   * @since 9
   */
  /**
   * 表示用于通信的可用设备类型的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Communication
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum CommunicationDeviceType {
    /**
     * 扬声器。
     *
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 9
     */
    /**
     * 扬声器。
     *
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    SPEAKER = 2
  }

  /**
   * Enumerates the device select strategy.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @systemapi
   * @since 21 dynamic
   * @since 24 static
   */
  enum AudioDevcieSelectStrategy {
    /**
     * The default follow device select strategy.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 21 dynamic
     * @since 24 static
     */
    SELECT_STRATEGY_DEFAULT = 0,
    /**
     * The independent device select strategy..
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 21 dynamic
     * @since 24 static
     */
    SELECT_STRATEGY_INDEPENDENT = 1
  }

  /**
   * 表示铃声模式的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Communication
   * @crossplatform [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum AudioRingMode {
    /**
     * 静音模式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    RINGER_MODE_SILENT = 0,
    /**
     * 震动模式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    RINGER_MODE_VIBRATE = 1,
    /**
     * 响铃模式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    RINGER_MODE_NORMAL = 2
  }

  /**
   * Enumerates type.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum PolicyType {
    /**
     * EDM type.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    EDM = 0,
    /**
     * PRIVACY type.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    PRIVACY = 1
  }

  /**
   * 表示音频采样格式的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum AudioSampleFormat {
    /**
     * 无效格式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_INVALID = -1,
    /**
     * 无符号8位整数。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_U8 = 0,
    /**
     * 带符号的16位整数，小尾数。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_S16LE = 1,
    /**
     * 带符号的24位整数，小尾数。 
     * 
     * 由于系统限制，该采样格式仅部分设备支持，请根据实际情况使用。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_S24LE = 2,
    /**
     * 带符号的32位整数，小尾数。 
     * 
     * 由于系统限制，该采样格式仅部分设备支持，请根据实际情况使用。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_S32LE = 3,
    /**
     * 带符号的32位浮点数，小尾数。 
     * 
     * 由于系统限制，该采样格式仅部分设备支持，请根据实际情况使用。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_F32LE = 4
  }

  /**
   * 表示音频声道的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum AudioChannel {
    /**
     * 单声道。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    CHANNEL_1 = 1,
    /**
     * 双声道。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    CHANNEL_2 = 2,
    /**
     * 三声道。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_3 = 3,
    /**
     * 四声道。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_4 = 4,
    /**
     * 五声道。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_5 = 5,
    /**
     * 六声道。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_6 = 6,
    /**
     * 七声道。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_7 = 7,
    /**
     * 八声道。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_8 = 8,
    /**
     * 九声道。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_9 = 9,
    /**
     * 十声道。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_10 = 10,
    /**
     * 十二声道。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_12 = 12,
    /**
     * 十四声道。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_14 = 14,
    /**
     * 十六声道。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_16 = 16
  }

  /**
   * 表示音频采样率的枚举（具体设备支持的采样率规格会存在差异）。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum AudioSamplingRate {
    /**
     * 采样率为8000。单位为赫兹（Hz）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_8000 = 8000,
    /**
     * 采样率为11025。单位为赫兹（Hz）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_11025 = 11025,
    /**
     * 采样率为12000。单位为赫兹（Hz）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_12000 = 12000,
    /**
     * 采样率为16000。单位为赫兹（Hz）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_16000 = 16000,
    /**
     * 采样率为22050。单位为赫兹（Hz）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_22050 = 22050,
    /**
     * 采样率为24000。单位为赫兹（Hz）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_24000 = 24000,
    /**
     * 采样率为32000。单位为赫兹（Hz）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_32000 = 32000,
    /**
     * 采样率为44100。单位为赫兹（Hz）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_44100 = 44100,
    /**
     * 采样率为48000。单位为赫兹（Hz）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_48000 = 48000,
    /**
     * 采样率为64000。单位为赫兹（Hz）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_64000 = 64000,
    /**
     * 采样率为88200。单位为赫兹（Hz）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_88200 = 88200,
    /**
     * 采样率为96000。单位为赫兹（Hz）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_96000 = 96000,
    /**
     * 采样率为176400。单位为赫兹（Hz）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_176400 = 176400,
    /**
     * 采样率为192000。单位为赫兹（Hz）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_192000 = 192000,
    /**
     * 采样率为384000。单位为赫兹（Hz）
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SAMPLE_RATE_384000 = 384000
  }

  /**
   * 表示音频编码类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum AudioEncodingType {
    /**
     * 无效。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    ENCODING_TYPE_INVALID = -1,
    /**
     * PCM编码。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    ENCODING_TYPE_RAW = 0,
  }

  /**
   * 表示音频内容类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.multimedia.audio.StreamUsage
   */
  enum ContentType {
    /**
     * 未知类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_UNKNOWN
     */
    CONTENT_TYPE_UNKNOWN = 0,
    /**
     * 语音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_VOICE_COMMUNICATION
     */
    CONTENT_TYPE_SPEECH = 1,
    /**
     * 音乐。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_MUSIC
     */
    CONTENT_TYPE_MUSIC = 2,
    /**
     * 电影。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_MOVIE
     */
    CONTENT_TYPE_MOVIE = 3,
    /**
     * 通知音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_NOTIFICATION
     */
    CONTENT_TYPE_SONIFICATION = 4,
    /**
     * 铃声。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_RINGTONE
     */
    CONTENT_TYPE_RINGTONE = 5
  }

  /**
   * 表示播放音频流类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum StreamUsage {
    /**
     * 未知类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STREAM_USAGE_UNKNOWN = 0,
    /**
     * 媒体。
     * 
     * 从API version 7开始支持，从API version 10开始废弃，建议使用该枚举中的STREAM_USAGE_MUSIC、STREAM_USAGE_MOVIE、STREAM_USAGE_GAME或
     * STREAM_USAGE_AUDIOBOOK替代。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_MUSIC or
     *             ohos.multimedia.audio.StreamUsage.STREAM_USAGE_MOVIE or
     *             ohos.multimedia.audio.StreamUsage.STREAM_USAGE_GAME or
     *             ohos.multimedia.audio.StreamUsage.STREAM_USAGE_AUDIOBOOK
     */
    STREAM_USAGE_MEDIA = 1,
    /**
     * 音乐。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_MUSIC = 1,
    /**
     * VoIP语音通话（该流类型起播时，会触发开启3A算法）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STREAM_USAGE_VOICE_COMMUNICATION = 2,
    /**
     * 语音播报。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    STREAM_USAGE_VOICE_ASSISTANT = 3,
    /**
     * 闹钟。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_ALARM = 4,
    /**
     * 语音消息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_VOICE_MESSAGE = 5,
    /**
     * 通知铃声。
     * 
     * 从API version 7开始支持，从API version 10开始废弃，建议使用该枚举中的STREAM_USAGE_RINGTONE替代。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage#STREAM_USAGE_RINGTONE
     */
    STREAM_USAGE_NOTIFICATION_RINGTONE = 6,
    /**
     * 铃声。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_RINGTONE = 6,
    /**
     * 通知音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_NOTIFICATION = 7,
    /**
     * 无障碍。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_ACCESSIBILITY = 8,
    /**
     * System usage, such as screen lock or key click.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_SYSTEM = 9,
    /**
     * 电影或视频。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_MOVIE = 10,
    /**
     * 游戏。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_GAME = 11,
    /**
     * 有声读物（包括听书、相声、评书）、听新闻、播客等。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_AUDIOBOOK = 12,
    /**
     * 导航。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_NAVIGATION = 13,
    /**
     * DTMF dial tone usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_DTMF = 14,
    /**
     * Enforced tone usage, such as camera shutter.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_ENFORCED_TONE = 15,
    /**
     * Ultrasonic playing usage. This type is only used for msdp condition.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_ULTRASONIC = 16,
    /**
     * VoIP视频通话（该流类型起播时，会触发开启3A算法）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_VIDEO_COMMUNICATION = 17,
    /**
     * Voice call assistant type. This type is only used for call assistant functionalities.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_VOICE_CALL_ASSISTANT = 21,
    /**
     * Announcement alarm usage.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    STREAM_USAGE_ANNOUNCEMENT = 22,
    /**
     * Emergency alarm usage.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    STREAM_USAGE_EMERGENCY = 23,
  }

  /**
   * Enumerates the audio interrupt request type.
   *
   * @syscap SystemCapability.Multimedia.Audio.Interrupt
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum InterruptRequestType {
    /**
     * Default type to request audio interrupt.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    INTERRUPT_REQUEST_TYPE_DEFAULT = 0
  }

  /**
   * Enumerates volume related operations.
   * Flags should be powers of 2!
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum VolumeFlag {
    /**
     * Show system volume bar.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    FLAG_SHOW_SYSTEM_UI = 1
  }

  /**
   * 描述app id信息。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AppIdInfo {
    /**
     * 应用uid。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    appUid: int;
    /**
     * 应用pid。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    appPid: int;
    /**
     * 应用令牌ID。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    appTokenId: int;
    /**
     * 应用完整令牌ID。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    appFullTokenId: long;
  }

  /**
   * 音频流信息。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AudioStreamInfo {
    /**
     * 音频文件的采样率，单位为赫兹（Hz）。支持传入[AudioSamplingRate]{@link audio.AudioSamplingRate}。
     * 
     * 从API版本26.0.0开始：
     * 
     * - 参数samplingRate支持number类型。
     * - 音频渲染扩展支持8000Hz到384000Hz范围内以10Hz为步长的采样率值。具体设备支持的采样率规格会存在差异。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @FaAndStageModel [since 26.0.0]
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    samplingRate: AudioSamplingRate | int;
    /**
     * 音频文件的通道数。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    channels: AudioChannel;
    /**
     * 音频采样格式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    sampleFormat: AudioSampleFormat;
    /**
     * 音频编码格式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    encodingType: AudioEncodingType;
    /**
     * 音频声道布局，默认值为0x0。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    channelLayout?: AudioChannelLayout;
  }

  /**
   * 音频渲染器信息。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AudioRendererInfo {
    /**
     * 音频内容类型。
     * 
     * API version 8、9为必填参数，从API version 10开始为可选参数，默认值为CONTENT_TYPE_UNKNOWN。
     * 
     * 从API version 8开始支持，从API version 10开始废弃，建议使用usage替代。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8 dynamic
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.AudioRendererInfo#usage
     */
    content?: ContentType;
    /**
     * 音频流使用类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    usage: StreamUsage;
    /**
     * 播放流行为标志。
     * 
     * 设置为0即可。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    rendererFlags: int;
    /**
     * 音频的音量模式。默认值为SYSTEM_GLOBAL。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     * @since 23 static
     */
    volumeMode?: AudioVolumeMode;
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface AudioRendererFilter {
    /**
     * Application uid.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    uid?: int;
    /**
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    rendererInfo?: AudioRendererInfo;
    /**
     * AudioRenderer id.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    rendererId?: int;
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface AudioCapturerFilter {
    /**
     * Application uid.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    uid?: int;
    /**
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    capturerInfo?: AudioCapturerInfo;
  }

  /**
   * 音频渲染器选项信息。
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AudioRendererOptions {
    /**
     * 音频流信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    streamInfo: AudioStreamInfo;
    /**
     * 音频渲染器信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    rendererInfo: AudioRendererInfo;
    /**
     * 表示音频流是否可以被其他应用录制，默认值为0。
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    privacyType?: AudioPrivacyType;

    /**
     * 音频流的原始应用ID。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    originalAppIdInfo?: AppIdInfo;
  }

  /**
   * 表示对应播放音频流是否支持被其他应用录制的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum AudioPrivacyType {
    /**
     * 表示音频流可以被其他应用录制或屏幕投射，不包含隐私类型的流。
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PRIVACY_TYPE_PUBLIC = 0,

    /**
     * 表示音频流不可以被其他应用录制或屏幕投射。
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PRIVACY_TYPE_PRIVATE = 1,

    /**
     * 表示音频流可以被其他应用录制或屏幕投射，包含隐私类型的流。 
     * 
     * 例如，在PRIVACY_TYPE_PUBLIC策略下，[STREAM_USAGE_VOICE_COMMUNICATION]{@link audio.StreamUsage}类型音频流不会被其他应用录制或屏幕投射。 
     * 
     * 然而，在PRIVACY_TYPE_SHARED策略下，这些音频流将会允许被其他应用录制或屏幕投射。
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 21 dynamic
     * @since 24 static
     */
    PRIVACY_TYPE_SHARED = 2
  }

  /**
   * 表示焦点模型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Interrupt
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum InterruptMode {
    /**
     * 共享焦点模式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    SHARE_MODE = 0,
    /**
     * 独立焦点模式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    INDEPENDENT_MODE = 1
  }

  /**
   * 表示音频渲染速度的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 8 dynamic
   * @since 23 static
   */
  enum AudioRendererRate {
    /**
     * 正常速度。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamic
     * @since 23 static
     */
    RENDER_RATE_NORMAL = 0,
    /**
     * 2倍速。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamic
     * @since 23 static
     */
    RENDER_RATE_DOUBLE = 1,
    /**
     * 0.5倍速。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamic
     * @since 23 static
     */
    RENDER_RATE_HALF = 2
  }

  /**
   * 表示中断类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum InterruptType {
    /**
     * 音频播放中断事件开始。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    INTERRUPT_TYPE_BEGIN = 1,

    /**
     * 音频播放中断事件结束。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    INTERRUPT_TYPE_END = 2
  }

  /**
   * 表示中断提示的枚举。
   * 
   * 当用户监听到音频中断事件（即收到[InterruptEvent]{@link audio.InterruptEvent}事件）时，获取此信息。
   * 
   * 此类型表示根据焦点策略，对音频流执行的具体操作（如暂停、调整音量等）。
   * 
   * 可以结合InterruptEvent中的[InterruptForceType]{@link audio.InterruptForceType}信息，判断该操作是否已由系统强制执行。详情请参阅文档
   * [音频焦点介绍](docroot://media/audio/audio-playback-concurrency.md)。
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum InterruptHint {
    /**
     * 无提示。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_NONE = 0,
    /**
     * 提示音频恢复，应用可主动触发开始渲染或开始采集的相关操作。
     * 
     * 此操作无法由系统强制执行，其对应的[InterruptForceType]{@link audio.InterruptForceType}一定为INTERRUPT_SHARE类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_RESUME = 1,

    /**
     * 提示音频暂停，暂时失去音频焦点。
     * 
     * 待焦点可用时，会收到INTERRUPT_HINT_RESUME事件。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_PAUSE = 2,

    /**
     * 提示音频停止，彻底失去音频焦点。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_STOP = 3,

    /**
     * 提示音频躲避开始，降低音量播放。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_DUCK = 4,

    /**
     * 提示音频躲避结束，恢复音量播放。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_UNDUCK = 5,

    /**
     * 提示音频静音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 20 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_MUTE = 6,

    /**
     * 提示音频解除静音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 20 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_UNMUTE = 7
  }

  /**
   * 表示音频打断类型的枚举。
   * 
   * 当用户监听到音频中断（即收到[InterruptEvent]{@link audio.InterruptEvent}事件）时，获取此信息。
   * 
   * 此类型表示音频打断是否已由系统强制执行，具体操作信息（如音频暂停、停止等）可通过[InterruptHint]{@link audio.InterruptHint}获取。关于音频打断策略的详细说明可参考文档
   * [音频焦点介绍](docroot://media/audio/audio-playback-concurrency.md)。
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum InterruptForceType {
    /**
     * 强制打断类型，即具体操作已由系统强制执行。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    INTERRUPT_FORCE = 0,
    /**
     * 共享打断类型，即系统不执行具体操作，通过[InterruptHint]{@link audio.InterruptHint}建议并提示应用操作，应用可自行决策下一步处理方式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    INTERRUPT_SHARE = 1
  }

  /**
   * 音频中断时，应用接收的中断事件。
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface InterruptEvent {
    /**
     * 音频中断事件类型，开始或是结束。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    eventType: InterruptType;

    /**
     * 操作是由系统强制执行或是由应用程序执行。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    forceType: InterruptForceType;

    /**
     * 中断提示，用于提供中断事件的相关信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    hintType: InterruptHint;
  }

  /**
   * 表示中断事件返回类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimedia.audio.InterruptType
   */
  enum InterruptActionType {

    /**
     * 表示触发焦点事件。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptType#INTERRUPT_TYPE_BEGIN
     */
    TYPE_ACTIVATED = 0,

    /**
     * 表示音频打断事件。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptType#INTERRUPT_TYPE_END
     */
    TYPE_INTERRUPT = 1
  }

  /**
   * 表示设备连接状态变化的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum DeviceChangeType {
    /**
     * 设备连接。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    CONNECT = 0,

    /**
     * 断开设备连接。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    DISCONNECT = 1
  }

  /**
   * 表示音频场景的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Communication
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum AudioScene {
    /**
     * 默认音频场景。
     *
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    AUDIO_SCENE_DEFAULT = 0,
    /**
     * 响铃模式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_SCENE_RINGING = 1,
    /**
     * 电话模式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_SCENE_PHONE_CALL = 2,
    /**
     * 语音聊天模式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    AUDIO_SCENE_VOICE_CHAT = 3
  }

  /**
   * Enumerates volume adjustment types.
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  enum VolumeAdjustType {
    /**
     * Adjust volume up.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    VOLUME_UP = 0,
    /**
     * Adjust volume down.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    VOLUME_DOWN = 1
  }

  /**
   * 音频音量和设备管理。
   * 
   * 在使用AudioManager的接口之前，需先通过[getAudioManager]{@link audio.getAudioManager}获取AudioManager实例。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  interface AudioManager {
    /**
     * 设置指定流的音量等级。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > - 从API version 7开始支持，从API version 9开始废弃。
     * >
     * > - 应用无法直接调节系统音量，建议通过系统音量面板组件调节音量。具体样例和介绍请参考API文档
     * > [@ohos.multimedia.avVolumePanel (音量面板)]{@link @ohos.multimedia.avVolumePanel}。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { number } volume - 音量等级，可设置范围通过
     *     [getMinVolume]{@link audio.AudioManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}
     *     和
     *     [getMaxVolume]{@link audio.AudioManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}
     *     获取。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置指定流的音量成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.avVolumePanel.AVVolumePanel
     */
    setVolume(volumeType: AudioVolumeType, volume: number, callback: AsyncCallback<void>): void;
    /**
     * 设置指定流的音量等级。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 从API version 7开始支持，从API version 9开始废弃。
     * >
     * > - 应用无法直接调节系统音量，建议通过系统音量面板组件调节音量。具体样例和介绍请参考API文档
     * > [@ohos.multimedia.avVolumePanel (音量面板)]{@link @ohos.multimedia.avVolumePanel}。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { number } volume - 音量等级，可设置范围通过
     *     [getMinVolume]{@link audio.AudioManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}
     *     和
     *     [getMaxVolume]{@link audio.AudioManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}
     *     获取。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.avVolumePanel.AVVolumePanel
     */
    setVolume(volumeType: AudioVolumeType, volume: number): Promise<void>;
    /**
     * 获取指定流的音量等级。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { AsyncCallback<number> } callback - 回调函数。当获取指定流的音量成功，err为undefined，data为获取到的指定流的音量等级；否则为错误对象。指定流的音量等级范围可通
     *     过
     *     [getMinVolume]{@link audio.AudioManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}
     *     和
     *     [getMaxVolume]{@link audio.AudioManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}
     *     获取。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getVolume
     */
    getVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void;
    /**
     * 获取指定流的音量等级。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @returns { Promise<number> } Promise对象，返回指定流的音量等级。指定流的音量等级范围可通过
     *     [getMinVolume]{@link audio.AudioManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}
     *     和
     *     [getMaxVolume]{@link audio.AudioManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}
     *     获取。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getVolume
     */
    getVolume(volumeType: AudioVolumeType): Promise<number>;
    /**
     * 获取指定流的最小音量等级。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { AsyncCallback<number> } callback - 回调函数。当获取指定流的最小音量成功，err为undefined，data为获取到的指定流的最小音量等级；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getMinVolume
     */
    getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void;
    /**
     * 获取指定流的最小音量等级。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @returns { Promise<number> } Promise对象，返回最小音量等级。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getMinVolume
     */
    getMinVolume(volumeType: AudioVolumeType): Promise<number>;
    /**
     * 获取指定流的最大音量等级。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { AsyncCallback<number> } callback - 回调函数。当获取指定流的最大音量成功，err为undefined，data为获取到的指定流的最大音量等级；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getMaxVolume
     */
    getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void;
    /**
     * 获取指定流的最大音量等级。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @returns { Promise<number> } Promise对象，返回最大音量等级。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getMaxVolume
     */
    getMaxVolume(volumeType: AudioVolumeType): Promise<number>;
    /**
     * 获取音频设备列表。使用callback异步回调。
     *
     * @param { DeviceFlag } deviceFlag - 音频设备类型。
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - 回调函数。当获取音频设备列表成功，err为undefined，data为获取到的音频设备列表；否则为错误对
     *     象。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#getDevices
     */
    getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void;
    /**
     * 获取音频设备列表。使用Promise异步回调。
     *
     * @param { DeviceFlag } deviceFlag - 音频设备类型。
     * @returns { Promise<AudioDeviceDescriptors> } Promise对象，返回设备列表。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#getDevices
     */
    getDevices(deviceFlag: DeviceFlag): Promise<AudioDeviceDescriptors>;
    /**
     * 设置指定音量流静音。使用callback异步回调。
     * 
     * 当该音量流可设置的最小音量不能为0时，不支持静音操作。例如：闹钟和通话。
     * 
     * > **说明：**
     * >
     * > - 从API version 7开始支持，从API version 9开始废弃。
     * >
     * > - 应用无法直接静音流音量，建议通过系统音量面板组件进行静音。具体样例和介绍请参考API文档
     * > [@ohos.multimedia.avVolumePanel (音量面板)]{@link @ohos.multimedia.avVolumePanel}。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { boolean } mute - 是否设置指定音量流为静音状态。true表示静音，false表示非静音。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置指定音量流静音成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.avVolumePanel.AVVolumePanel
     */
    mute(volumeType: AudioVolumeType, mute: boolean, callback: AsyncCallback<void>): void;
    /**
     * 设置指定音量流静音。使用Promise异步回调。
     * 
     * 当该音量流可设置的最小音量不能为0时，不支持静音操作。例如：闹钟和通话。
     * 
     * > **说明：**
     * >
     * > - 从API version 7开始支持，从API version 9开始废弃。
     * >
     * > - 应用无法直接静音流音量，建议通过系统音量面板组件进行静音。具体样例和介绍请参考API文档
     * > [@ohos.multimedia.avVolumePanel (音量面板)]{@link @ohos.multimedia.avVolumePanel}。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { boolean } mute -  是否设置指定音量流为静音状态。true表示静音，false表示非静音。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.avVolumePanel.AVVolumePanel
     */
    mute(volumeType: AudioVolumeType, mute: boolean): Promise<void>;
    /**
     * 获取指定音量流的静音状态。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当获取指定音量流的静音状态成功，err为undefined，data为true表示静音，false表示非静音；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#isMute
     */
    isMute(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void;
    /**
     * 获取指定音量流的静音状态。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @returns { Promise<boolean> } Promise对象。返回true表示静音；返回false表示非静音。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#isMute
     */
    isMute(volumeType: AudioVolumeType): Promise<boolean>;
    /**
     * 获取指定音量流的活跃状态。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当获取指定音量流的活跃状态成功，err为undefined，data为true表示活跃，false表示不活跃；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioStreamManager#isActive
     */
    isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void;
    /**
     * 获取指定音量流的活跃状态。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @returns { Promise<boolean> } Promise对象。返回true表示流状态为活跃；返回false表示流状态不活跃。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioStreamManager#isActive
     */
    isActive(volumeType: AudioVolumeType): Promise<boolean>;
    /**
     * 设置麦克风静音状态。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.MICROPHONE
     * @param { boolean } mute - 是否设置麦克风为静音状态。true表示静音，false表示非静音。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置麦克风静音状态成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setMicrophoneMute(mute: boolean, callback: AsyncCallback<void>): void;
    /**
     * 设置麦克风静音状态。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.MICROPHONE
     * @param { boolean } mute - 是否设置麦克风为静音状态。true表示静音，false表示非静音。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setMicrophoneMute(mute: boolean): Promise<void>;
    /**
     * 获取麦克风静音状态。使用callback异步回调。
     *
     * @permission ohos.permission.MICROPHONE
     * @param { AsyncCallback<boolean> } callback - 回调函数。当获取麦克风静音状态成功，err为undefined，data为true表示静音，false表示非静音；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#isMicrophoneMute
     */
    isMicrophoneMute(callback: AsyncCallback<boolean>): void;
    /**
     * 获取麦克风静音状态。使用Promise异步回调。
     *
     * @permission ohos.permission.MICROPHONE
     * @returns { Promise<boolean> } Promise对象。返回true表示麦克风被静音；返回false表示麦克风未被静音。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#isMicrophoneMute
     */
    isMicrophoneMute(): Promise<boolean>;
    /**
     * 设置铃声模式。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioRingMode } mode - 音频铃声模式。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置铃声模式成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setRingerMode(mode: AudioRingMode, callback: AsyncCallback<void>): void;
    /**
     * 设置铃声模式。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioRingMode } mode - 音频铃声模式。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setRingerMode(mode: AudioRingMode): Promise<void>;
    /**
     * 获取铃声模式。使用callback异步回调。
     *
     * @param { AsyncCallback<AudioRingMode> } callback - 回调函数。当获取铃声模式成功，err为undefined，data为获取到的铃声模式；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getRingerMode
     */
    getRingerMode(callback: AsyncCallback<AudioRingMode>): void;
    /**
     * 获取铃声模式。使用Promise异步回调。
     *
     * @returns { Promise<AudioRingMode> } Promise对象，返回系统的铃声模式。
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getRingerMode
     */
    getRingerMode(): Promise<AudioRingMode>;
    /**
     * 音频参数设置。使用callback异步回调。
     * 
     * 接口根据硬件设备的支持能力扩展音频配置。支持的参数与产品和设备强相关，非通用参数，示例代码内使用样例参数。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 11开始废弃。
     *
     * @permission ohos.permission.MODIFY_AUDIO_SETTINGS
     * @param { string } key - 被设置的音频参数的键。
     * @param { string } value -  被设置的音频参数的值。
     * @param { AsyncCallback<void> } callback - 回调函数。当音频参数设置成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    setAudioParameter(key: string, value: string, callback: AsyncCallback<void>): void;
    /**
     * 音频参数设置。使用Promise异步回调。
     * 
     * 接口根据硬件设备的支持能力扩展音频配置。支持的参数与产品和设备强相关，非通用参数，示例代码内使用样例参数。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 11开始废弃。
     *
     * @permission ohos.permission.MODIFY_AUDIO_SETTINGS
     * @param { string } key - 被设置的音频参数的键。
     * @param { string } value - 被设置的音频参数的值。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    setAudioParameter(key: string, value: string): Promise<void>;

    /**
     * 获取指定音频参数值。使用callback异步回调。
     * 
     * 本接口的使用场景为：根据硬件设备的支持能力扩展音频配置。在不同的设备平台上，所支持的音频参数会存在差异。示例代码内使用样例参数，实际支持的音频配置参数见具体设备平台的资料描述。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 11开始废弃。
     *
     * @param { string } key - 待获取的音频参数的键。
     * @param { AsyncCallback<string> } callback - 回调函数。当获取指定音频参数值成功，err为undefined，data为获取到的指定音频参数值；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    getAudioParameter(key: string, callback: AsyncCallback<string>): void;
    /**
     * 获取指定音频参数值。使用Promise异步回调。
     * 
     * 本接口的使用场景为：根据硬件设备的支持能力扩展音频配置。在不同的设备平台上，所支持的音频参数会存在差异。示例代码内使用样例参数，实际支持的音频配置参数见具体设备平台的资料描述。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 11开始废弃。
     *
     * @param { string } key - 待获取的音频参数的键。
     * @returns { Promise<string> } Promise对象，返回获取的音频参数值。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    getAudioParameter(key: string): Promise<string>;

    /**
     * Sets extra audio parameters. This method uses a promise to return the result.
     * @permission ohos.permission.MODIFY_AUDIO_SETTINGS
     * @param { string } mainKey - Main key of the audio parameters to set.
     * @param { Record<string, string> } kvpairs - Key-value pairs with subkeys and values to set.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setExtraParameters(mainKey: string, kvpairs: Record<string, string>): Promise<void>;

    /**
     * Obtains the values of a certain key. This method uses a promise to return the query result.
     * @param { string } mainKey - Main key of the audio parameters to get.
     * @param { Array<string> } subKeys - Sub keys of the audio parameters to get.
     * @returns { Promise<Record<string, string>> } Promise used to return the key-value pairs.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getExtraParameters(mainKey: string, subKeys?: Array<string>): Promise<Record<string, string>>;

    /**
     * 设置设备激活状态。使用callback异步回调。
     *
     * @param { ActiveDeviceType } deviceType - 活跃音频设备类型。
     * @param { boolean } active - 是否设置设备为激活状态。true表示已激活，false表示未激活。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置设备激活状态成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#setCommunicationDevice
     */
    setDeviceActive(deviceType: ActiveDeviceType, active: boolean, callback: AsyncCallback<void>): void;
    /**
     * 设置设备激活状态。使用Promise异步回调。
     *
     * @param { ActiveDeviceType } deviceType - 活跃音频设备类型。
     * @param { boolean } active - 是否设置设备为激活状态。true表示已激活，false表示未激活。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#setCommunicationDevice
     */
    setDeviceActive(deviceType: ActiveDeviceType, active: boolean): Promise<void>;
    /**
     * 获取指定设备的激活状态。使用callback异步回调。
     *
     * @param { ActiveDeviceType } deviceType - 活跃音频设备类型。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当获取指定设备的激活状态成功，err为undefined，data为true表示激活，false表示未激活；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#isCommunicationDeviceActive
     */
    isDeviceActive(deviceType: ActiveDeviceType, callback: AsyncCallback<boolean>): void;
    /**
     * 获取指定设备的激活状态。使用Promise异步回调。
     *
     * @param { ActiveDeviceType } deviceType - 活跃音频设备类型。
     * @returns { Promise<boolean> } Promise对象。返回true表示设备已激活；返回false表示设备未激活。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#isCommunicationDeviceActive
     */
    isDeviceActive(deviceType: ActiveDeviceType): Promise<boolean>;
    /**
     * Listens for system volume change events. This method uses a callback to get volume change events.
     * @param { 'volumeChange' } type - Type of the event to listen for. Only the volumeChange event is supported.
     * @param { Callback<VolumeEvent> } callback - Callback used to get the system volume change event.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#event:volumeChange
     */
    on(type: 'volumeChange', callback: Callback<VolumeEvent>): void;
    /**
     * Listens for ringer mode change events. This method uses a callback to get ringer mode changes.
     * @param { 'ringerModeChange' } type - Type of the event to listen for. Only the ringerModeChange event is supported.
     * @param { Callback<AudioRingMode> } callback - Callback used to get the updated ringer mode.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @systemapi
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#event:ringerModeChange
     */
    on(type: 'ringerModeChange', callback: Callback<AudioRingMode>): void;
    /**
     * Sets the audio scene mode to change audio strategies. This method uses an asynchronous callback to return the
     * result.
     * @param { AudioScene } scene - Audio scene mode.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    setAudioScene(scene: AudioScene, callback: AsyncCallback<void> ): void;
    /**
     * Sets the audio scene mode to change audio strategies. This method uses a promise to return the result.
     * @param { AudioScene } scene - Audio scene mode.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    setAudioScene(scene: AudioScene): Promise<void>;
    /**
     * 获取音频场景模式。使用callback异步回调。
     *
     * @param { AsyncCallback<AudioScene> } callback - 回调函数。当获取音频场景模式成功，err为undefined，data为获取到的音频场景模式；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getAudioScene(callback: AsyncCallback<AudioScene>): void;
    /**
     * 获取音频场景模式。使用Promise异步回调。
     *
     * @returns { Promise<AudioScene> } Promise对象，返回音频场景模式。
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getAudioScene(): Promise<AudioScene>;
    /**
     * 获取音频场景模式。同步返回结果。
     *
     * @returns { AudioScene } 音频场景模式。
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioSceneSync(): AudioScene;

    /**
     * 监听音频场景变化事件。使用callback异步回调。
     *
     * @param { 'audioSceneChange' } type - 事件回调类型，支持的事件为'audioSceneChange'，当音频场景模式发生变化时，触发该事件。
     * @param { Callback<AudioScene> } callback - 回调函数，返回当前音频场景模式。
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 20 dynamic
     */
    on(type: 'audioSceneChange', callback: Callback<AudioScene>): void;

    /**
     * Subscribes to audio scene change events. When system changes communication scene status, registered clients
     * will receive the callback.
     * @param { Callback<AudioScene> } callback - Callback used to obtain the latest audio scene.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 23 static
     */
    onAudioSceneChange(callback: Callback<AudioScene>): void;

    /**
     * 取消监听音频场景变化事件。使用callback异步回调。
     *
     * @param { 'audioSceneChange' } type - 事件回调类型，支持的事件为'audioSceneChange'，当取消监听当前音频场景变化事件时，触发该事件。
     * @param { Callback<AudioScene> } [callback] - 回调函数，返回当前音频场景模式。
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 20 dynamic
     */
    off(type: 'audioSceneChange', callback?: Callback<AudioScene>): void;

    /**
     * Unsubscribes to audio scene change events.
     * @param { Callback<AudioScene> } [callback] - Callback used in subscription.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 23 static
     */
    offAudioSceneChange(callback?: Callback<AudioScene>): void;

    /**
     * 监听音频设备连接变化事件（当音频设备连接状态发生变化时触发）。使用callback异步回调。
     *
     * @param { 'deviceChange' } type - 事件回调类型，支持的事件为'deviceChange'，当音频设备连接状态发生变化时，触发该事件。
     * @param { Callback<DeviceChangeAction> } callback - 回调函数，返回设备更新详情。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#event:deviceChange
     */
    on(type: 'deviceChange', callback: Callback<DeviceChangeAction>): void;

    /**
     * 取消监听音频设备连接变化事件。使用callback异步回调。
     *
     * @param { 'deviceChange' } type - 事件回调类型，支持的事件为'deviceChange'，当取消监听音频设备连接变化事件时，触发该事件。
     * @param { Callback<DeviceChangeAction> } callback - 回调函数，返回设备更新详情。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#event:deviceChange
     */
    off(type: 'deviceChange', callback?: Callback<DeviceChangeAction>): void;

    /**
     * 监听音频打断事件（当音频焦点发生变化时触发）。使用callback异步回调。
     * 
     * 与[on('audioInterrupt')]{@link audio.AudioRenderer.on(type: 'audioInterrupt', callback: Callback<InterruptEvent>)}
     * 作用一致，均用于监听焦点变化。为无音频流的场景（未曾创建AudioRenderer对象），比如FM、语音唤醒等提供焦点变化监听功能。
     *
     * @param { 'interrupt' } type - 事件回调类型，支持的事件为'interrupt'，当音频焦点状态发生变化时，触发该事件。
     * @param { AudioInterrupt } interrupt - 音频打断事件类型的参数。
     * @param { Callback<InterruptAction> } callback - 回调函数，返回打断事件信息。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#event:audioInterrupt
     */
    on(type: 'interrupt', interrupt: AudioInterrupt, callback: Callback<InterruptAction>): void;

    /**
     * 取消监听音频打断事件。使用callback异步回调。
     *
     * @param { 'interrupt' } type - 事件回调类型，支持的事件为'interrupt'，当取消监听音频打断事件时，触发该事件。
     * @param { AudioInterrupt } interrupt - 音频打断事件类型的参数。
     * @param { Callback<InterruptAction> } callback - 回调函数，返回打断事件信息。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#event:audioInterrupt
     */
    off(type: 'interrupt', interrupt: AudioInterrupt, callback?: Callback<InterruptAction>): void;

    /**
     * 获取音频音量管理器。
     *
     * @returns { AudioVolumeManager } AudioVolumeManager实例。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @atomicservice [since 23]
     * @since 9 dynamic
     * @since 23 static
     */
    getVolumeManager(): AudioVolumeManager;

    /**
     * 获取音频流管理器。
     *
     * @returns { AudioStreamManager } AudioStreamManager实例。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getStreamManager(): AudioStreamManager;

    /**
     * 获取音频路由管理器。
     *
     * @returns { AudioRoutingManager } AudioRoutingManager实例。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getRoutingManager(): AudioRoutingManager;

    /**
     * 获取音频会话管理器。
     *
     * @returns { AudioSessionManager } AudioSessionManager实例。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     * @since 23 static
     */
    getSessionManager(): AudioSessionManager;

    /**
     * 获取空间音频管理器。
     *
     * @returns { AudioSpatializationManager } AudioSpatializationManager实例。
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     * @since 23 static
     */
    getSpatializationManager(): AudioSpatializationManager;

    /**
     * Obtains an {@link AudioEffectManager} instance.
     * @returns { AudioEffectManager } AudioEffectManager instance.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getEffectManager(): AudioEffectManager;

    /**
     * 获取协同播放管理实例
     * @returns { AudioCollaborativeManager } 协同播放管理实例
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getCollaborativeManager(): AudioCollaborativeManager;

    /**
     * 获取音频设备增强管理器实例。
     *
     * @returns { AudioDeviceEnhanceManager } 返回一个AudioDeviceEnhanceManager实例。
     * @syscap SystemCapability.Multimedia.Audio.DeviceEnhance
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDeviceEnhanceManager(): AudioDeviceEnhanceManager;

    /**
     * 获取音频调试管理器实例。该实例为单例，获取后可重复使用。
     *
     * @returns { AudioDebuggingManager } 返回AudioDebuggingManager实例。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDebuggingManager(): AudioDebuggingManager;

    /**
     * 获取录音管理器实例。
     *
     * @returns { AudioRecordingManager } 返回音频记录管理器的实例。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getRecordingManager(): AudioRecordingManager;

    /**
     * user disable the safe media volume state.
     * @permission ohos.permission.MODIFY_AUDIO_SETTINGS
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    disableSafeMediaVolume(): Promise<void>;
  }

  /**
   * Enumerates audio interrupt request result type.
   *
   * @syscap SystemCapability.Multimedia.Audio.Interrupt
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum InterruptRequestResultType {
    /**
     * Request audio interrupt success
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    INTERRUPT_REQUEST_GRANT = 0,
    /**
     * Request audio interrupt fail, may have higher priority type
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    INTERRUPT_REQUEST_REJECT = 1
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.Audio.Interrupt
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface InterruptResult {
    /**
     *
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    requestResult: InterruptRequestResultType;
    /**
     * Interrupt node as a unit to receive interrupt change event.
     *
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    interruptNode: int;
  }

  /**
   * 表示音频设备是否被堵塞的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 13 dynamic
   * @since 23 static
   */
  enum DeviceBlockStatus {
    /**
     * 音频设备正常。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     * @since 23 static
     */
    UNBLOCKED = 0,
    /**
     * 音频设备被堵塞。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     * @since 23 static
     */
    BLOCKED = 1
  }

  /**
   * 描述音频设备被堵塞状态和设备信息。
   *
   * @typedef DeviceBlockStatusInfo
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 13 dynamic
   * @since 23 static
   */
  interface DeviceBlockStatusInfo {
    /**
     * 音频设备堵塞状态。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     * @since 23 static
     */
    blockStatus: DeviceBlockStatus;

    /**
     * 设备信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     * @since 23 static
     */
    devices: AudioDeviceDescriptors;
  }

  /**
   * 音频路由管理。
   * 
   * 在使用AudioRoutingManager的接口之前，需先通过[getRoutingManager]{@link audio.AudioManager.getRoutingManager}获取
   * AudioRoutingManager实例。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 9开始支持。
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AudioRoutingManager {
    /**
     * 获取音频设备列表。使用callback异步回调。
     *
     * @param { DeviceFlag } deviceFlag - 音频设备类型。
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - 回调函数。当获取音频设备列表成功，err为undefined，data为获取到的音频设备列表；否则为错误对
     *     象。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void;
    /**
     * 获取音频设备列表。使用Promise异步回调。
     *
     * @param { DeviceFlag } deviceFlag - 音频设备类型。
     * @returns { Promise<AudioDeviceDescriptors> } Promise对象，返回设备列表。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getDevices(deviceFlag: DeviceFlag): Promise<AudioDeviceDescriptors>;
    /**
     * 获取音频设备列表。同步返回结果。
     *
     * @param { DeviceFlag } deviceFlag - 音频设备类型。
     * @returns { AudioDeviceDescriptors } 返回设备列表。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getDevicesSync(deviceFlag: DeviceFlag): AudioDeviceDescriptors;

    /**
     * 监听音频设备连接状态变化事件（当音频设备连接状态发生变化时触发）。使用callback异步回调。
     *
     * @param { 'deviceChange' } type - 事件回调类型，支持的事件为'deviceChange'，当音频设备连接状态发生变化时，触发该事件。
     * @param { DeviceFlag } deviceFlag - 音频设备类型。
     * @param { Callback<DeviceChangeAction> } callback - 回调函数，返回设备更新详情。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 9 dynamic
     */
    on(type: 'deviceChange', deviceFlag: DeviceFlag, callback: Callback<DeviceChangeAction>): void;

    /**
     * Subscribes to device change events. When a device is connected/disconnected, registered clients will receive
     * the callback.
     *
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onDeviceChange(deviceFlag: DeviceFlag, callback: Callback<DeviceChangeAction>): void;

    /**
     * 取消监听音频设备连接状态变化事件。使用callback异步回调。
     *
     * @param { 'deviceChange' } type - 事件回调类型，支持的事件为'deviceChange'，当取消监听音频设备连接变化事件时，触发该事件。
     * @param { Callback<DeviceChangeAction> } callback - 回调函数，返回设备更新详情。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 9 dynamic
     */
    off(type: 'deviceChange', callback?: Callback<DeviceChangeAction>): void;

    /**
     * UnSubscribes to device change events.
     * @param { Callback<DeviceChangeAction> } [callback] - Callback used to obtain the device update details.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offDeviceChange(callback?: Callback<DeviceChangeAction>): void;

    /**
     * 获取音频可选设备列表。同步返回结果。
     *
     * @param { DeviceUsage } deviceUsage - 音频设备类型（根据用途分类）。
     * @returns { AudioDeviceDescriptors } 返回设备列表。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    getAvailableDevices(deviceUsage: DeviceUsage): AudioDeviceDescriptors;

    /**
     * 监听音频可选设备连接状态变化事件（当音频可选设备连接状态发生变化时触发）。使用callback异步回调。
     *
     * @param { 'availableDeviceChange' } type - 事件回调类型，支持的事件为'availableDeviceChange'，当音频可选设备连接状态发生变化时，触发该事件。
     * @param { DeviceUsage } deviceUsage - 音频设备类型（根据用途分类）。
     * @param { Callback<DeviceChangeAction> } callback - 回调函数，返回设备更新详情。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     */
    on(type: 'availableDeviceChange', deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void;

    /**
     * Subscribes to available device change events. When a device is connected/disconnected, registered clients will receive
     * the callback.
     * @param { DeviceUsage } deviceUsage - Audio device usage.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onAvailableDeviceChange(deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void;

    /**
     * 取消监听音频可选设备连接状态变化事件。使用callback异步回调。
     *
     * @param { 'availableDeviceChange' } type - 事件回调类型，支持的事件为'availableDeviceChange'，当取消监听音频可选设备连接变化事件时，触发该事件。
     * @param { Callback<DeviceChangeAction> } callback - 回调函数，返回可选设备更新详情。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     */
    off(type: 'availableDeviceChange', callback?: Callback<DeviceChangeAction>): void;

    /**
     * Unsubscribes to available device change events.
     * @param { Callback<DeviceChangeAction> } [callback] - Callback used to obtain the device update details.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offAvailableDeviceChange(callback?: Callback<DeviceChangeAction>): void;

    /**
     * 设置通信设备激活状态。使用callback异步回调。
     * 
     * 该接口由于功能设计变化，将在后续版本废弃，不建议开发者使用。
     * 
     * 推荐使用AVSession提供的[设备切换组件](docroot://media/avsession/using-switch-call-devices.md)，实现通话设备切换。
     *
     * @param { CommunicationDeviceType } deviceType - 音频设备类型。
     * @param { boolean } active - 是否设置设备为激活状态。true表示激活，false表示未激活。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置通信设备激活状态成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setCommunicationDevice(deviceType: CommunicationDeviceType, active: boolean, callback: AsyncCallback<void>): void;
    /**
     * 设置通信设备激活状态。使用Promise异步回调。
     * 
     * 该接口由于功能设计变化，将在后续版本废弃，不建议开发者使用。
     * 
     * 推荐开发者使用AVSession提供的[设备切换组件](docroot://media/avsession/using-switch-call-devices.md)，实现通话设备切换。
     *
     * @param { CommunicationDeviceType } deviceType - 活跃音频设备类型。
     * @param { boolean } active - 是否设置设备为激活状态。true表示激活，false表示未激活。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setCommunicationDevice(deviceType: CommunicationDeviceType, active: boolean): Promise<void>;

    /**
     * 获取指定通信设备的激活状态。使用callback异步回调。
     *
     * @param { CommunicationDeviceType } deviceType - 活跃音频设备类型。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当获取指定通信设备的激活状态成功，err为undefined，data为true表示激活，false表示未激活；否则为错误对
     *     象。
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    isCommunicationDeviceActive(deviceType: CommunicationDeviceType, callback: AsyncCallback<boolean>): void;
    /**
     * 获取指定通信设备的激活状态。使用Promise异步回调。
     *
     * @param { CommunicationDeviceType } deviceType - 活跃音频设备类型。
     * @returns { Promise<boolean> } Promise对象。返回true表示设备已激活；返回false表示设备未激活。
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    isCommunicationDeviceActive(deviceType: CommunicationDeviceType): Promise<boolean>;
    /**
     * 获取指定通信设备的激活状态。同步返回结果。
     *
     * @param { CommunicationDeviceType } deviceType - 活跃音频设备类型。
     * @returns { boolean } 设备是否处于激活状态。true表示处于激活状态，false表示处于未激活状态。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    isCommunicationDeviceActiveSync(deviceType: CommunicationDeviceType): boolean;

    /**
     * Select the output device. This method uses an asynchronous callback to return the result.
     * @param { AudioDeviceDescriptors } outputAudioDevices - Audio device description
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectOutputDevice(outputAudioDevices: AudioDeviceDescriptors, callback: AsyncCallback<void>): void;
    /**
     * Select the output device. This method uses a promise to return the result.
     * @param { AudioDeviceDescriptors } outputAudioDevices - Audio device description
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectOutputDevice(outputAudioDevices: AudioDeviceDescriptors): Promise<void>;

    /**
     * Select the output device with desired AudioRenderer. This method uses an asynchronous callback to return the result.
     * @param { AudioRendererFilter } filter - Filter for AudioRenderer.
     * @param { AudioDeviceDescriptors } outputAudioDevices - Audio device description.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectOutputDeviceByFilter(filter: AudioRendererFilter, outputAudioDevices: AudioDeviceDescriptors, callback: AsyncCallback<void>): void;
    /**
     * Select the output device with desired AudioRenderer. This method uses a promise to return the result.
     * @param { AudioRendererFilter } filter - Filter for AudioRenderer.
     * @param { AudioDeviceDescriptors } outputAudioDevices - Audio device description
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectOutputDeviceByFilter(filter: AudioRendererFilter, outputAudioDevices: AudioDeviceDescriptors): Promise<void>;

    /**
     * Select the output device with desired AudioRenderer. This method uses a promise to return the result.
     *
     * @param { AudioRendererFilter } filter - Filter for affected AudioRenderers.
     * @param { AudioDeviceDescriptors } outputAudioDevices - Audio device to select.
     * @param { AudioDevcieSelectStrategy } strategy - Target audio device select strategy.
     * @returns { Promise<void> } 202 - Not system App.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 21 dynamic
     * @since 24 static
     */
    selectOutputDeviceByFilter(filter: AudioRendererFilter, outputAudioDevices: AudioDeviceDescriptors, strategy: AudioDevcieSelectStrategy): Promise<void>;

    /**
     * Select the input device. This method uses an asynchronous callback to return the result.
     * @param { AudioDeviceDescriptors } inputAudioDevices - Audio device description
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectInputDevice(inputAudioDevices: AudioDeviceDescriptors, callback: AsyncCallback<void>): void;
    /**
     * Select the input device. This method uses a promise to return the result.
     * @param { AudioDeviceDescriptors } inputAudioDevices - Audio device description
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectInputDevice(inputAudioDevices: AudioDeviceDescriptors): Promise<void>;

    /**
     * Select the input device with desired AudioCapturer. This method uses a promise to return the result.
     * @param { AudioCapturerFilter } filter - Filter for AudioCapturer.
     * @param { AudioDeviceDescriptors } inputAudioDevices - Audio device descriptions
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    selectInputDeviceByFilter(filter: AudioCapturerFilter, inputAudioDevices: AudioDeviceDescriptors): Promise<void>;

    /**
     * 根据音频信息，返回优先级最高的输出设备。使用callback异步回调。
     *
     * @param { AudioRendererInfo } rendererInfo - 音频渲染器信息。
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - 回调函数。当获取优先级最高的输出设备成功，err为undefined，data为获取到的优先级最高的输出设
     *     备信息；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @throws { BusinessError } 6800301 - System error. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getPreferOutputDeviceForRendererInfo(rendererInfo: AudioRendererInfo, callback: AsyncCallback<AudioDeviceDescriptors>): void;
    /**
     * 根据音频信息，返回优先级最高的输出设备。使用Promise异步回调。
     *
     * @param { AudioRendererInfo } rendererInfo - 音频渲染器信息。
     * @returns { Promise<AudioDeviceDescriptors> } Promise对象，返回优先级最高的输出设备信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getPreferOutputDeviceForRendererInfo(rendererInfo: AudioRendererInfo): Promise<AudioDeviceDescriptors>;

    /**
     * 根据音频信息，返回优先级最高的输出设备。同步返回结果。
     *
     * @param { AudioRendererInfo } rendererInfo - 音频渲染器信息。
     * @returns { AudioDeviceDescriptors } 返回优先级最高的输出设备信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getPreferredOutputDeviceForRendererInfoSync(rendererInfo: AudioRendererInfo): AudioDeviceDescriptors;

    /**
     * Get the preferred output devices by the target audio renderer filter.
     * @param { AudioRendererFilter } filter - Audio renderer filter.
     * @returns { AudioDeviceDescriptors } The preferred devices.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getPreferredOutputDeviceByFilter(filter: AudioRendererFilter): AudioDeviceDescriptors;

    /**
     * 监听最高优先级输出设备变化事件（当最高优先级输出设备发生变化时触发）。使用callback异步回调。
     *
     * @param { 'preferOutputDeviceChangeForRendererInfo' } type - 事件回调类型，支持的事件为'preferOutputDeviceChangeForRendererInfo
     *     '，当最高优先级输出设备发生变化时，触发该事件。
     * @param { AudioRendererInfo } rendererInfo - 音频渲染器信息。
     * @param { Callback<AudioDeviceDescriptors> } callback - 回调函数，返回优先级最高的输出设备信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     */
    on(type: 'preferOutputDeviceChangeForRendererInfo', rendererInfo: AudioRendererInfo, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * Subscribes to prefer output device change events. When prefer device for target audio renderer info changes,
     * registered clients will receive the callback.
     * @param { AudioRendererInfo } rendererInfo - Audio renderer information.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the changed prefer devices information.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onPreferOutputDeviceChangeForRendererInfo(rendererInfo: AudioRendererInfo, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * 取消监听最高优先级输出音频设备变化事件。使用callback异步回调。
     *
     * @param { 'preferOutputDeviceChangeForRendererInfo' } type - 事件回调类型，支持的事件为'preferOutputDeviceChangeForRendererInfo
     *     '，当取消监听最高优先级输出音频设备变化事件时，触发该事件。
     * @param { Callback<AudioDeviceDescriptors> } callback - 回调函数，返回优先级最高的输出设备信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     */
    off(type: 'preferOutputDeviceChangeForRendererInfo', callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Unsubscribes to prefer output device change events.
     * @param { Callback<AudioDeviceDescriptors> } [callback] - Callback used to obtain
     *     the changed prefer devices in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offPreferOutputDeviceChangeForRendererInfo(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Subscribes to preferred output device change events. When preferred device for target audio renderer
     * filter changes, registered clients will receive the callback.
     * @param { 'preferredOutputDeviceChangeByFilter' } type - Type of the event to listen for. Only the
     *     preferredOutputDeviceChangeByFilter event is supported.
     * @param { AudioRendererFilter } filter - Filter for AudioRenderer.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the changed preferred devices
     *     information.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 21 dynamic
     */
    on(type: 'preferredOutputDeviceChangeByFilter', filter: AudioRendererFilter, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * Subscribes to preferred output device change events. When preferred device for target audio renderer
     * filter changes, registered clients will receive the callback.
     *
     * @param { AudioRendererFilter } filter - Filter for AudioRenderer.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the changed preferred devices
     *     information.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 24 static
     */
    onPreferredOutputDeviceChangeByFilter(filter: AudioRendererFilter, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * Unsubscribes to preferred output device change events.
     * @param { 'preferredOutputDeviceChangeByFilter' } type - Type of the event to listen for. Only the
     *     preferredOutputDeviceChangeByFilter event is supported.
     * @param { Callback<AudioDeviceDescriptors> } [callback] - Callback used in subscribe.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 21 dynamic
     */
    off(type: 'preferredOutputDeviceChangeByFilter', callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Unsubscribes to preferred output device change events.
     *
     * @param { Callback<AudioDeviceDescriptors> } [callback] - Callback used in subscribe.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 24 static
     */
    offPreferredOutputDeviceChangeByFilter(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * 根据音频信息，返回优先级最高的输入设备。使用callback异步回调。
     *
     * @param { AudioCapturerInfo } capturerInfo - 音频采集器信息。
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - 回调函数。当获取优先级最高的输入设备成功，err为undefined，data为获取到的优先级最高的输入设
     *     备信息；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @throws { BusinessError } 6800301 - System error. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getPreferredInputDeviceForCapturerInfo(capturerInfo: AudioCapturerInfo, callback: AsyncCallback<AudioDeviceDescriptors>): void;
    /**
     * 根据音频信息，返回优先级最高的输入设备。使用Promise异步回调。
     *
     * @param { AudioCapturerInfo } capturerInfo - 音频采集器信息。
     * @returns { Promise<AudioDeviceDescriptors> } Promise对象，返回优先级最高的输入设备信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getPreferredInputDeviceForCapturerInfo(capturerInfo: AudioCapturerInfo): Promise<AudioDeviceDescriptors>;

    /**
     * Get the preferred input device for the target audio capturer filter.
     * @param { AudioCapturerFilter } filter - Audio capturer filter.
     * @returns { AudioDeviceDescriptors } The preferred devices.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getPreferredInputDeviceByFilter(filter: AudioCapturerFilter): AudioDeviceDescriptors;

    /**
     * 监听最高优先级输入设备变化事件（当最高优先级输入设备发生变化时触发）。使用callback异步回调。
     *
     * @param { 'preferredInputDeviceChangeForCapturerInfo' } type - 事件回调类型，支持的事件为'
     *     preferredInputDeviceChangeForCapturerInfo'，当最高优先级输入设备发生变化时，触发该事件。
     * @param { AudioCapturerInfo } capturerInfo - 音频采集器信息。
     * @param { Callback<AudioDeviceDescriptors> } callback - 回调函数，返回优先级最高的输入设备信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     */
    on(type: 'preferredInputDeviceChangeForCapturerInfo', capturerInfo: AudioCapturerInfo, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * Subscribes to preferred input device change events. When preferred device for target
     * audio capturer info changes, registered clients will receive the callback.
     * @param { AudioCapturerInfo } capturerInfo - Audio capturer information.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the
     *     changed preferred devices information.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onPreferredInputDeviceChangeForCapturerInfo(capturerInfo: AudioCapturerInfo, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * 取消监听最高优先级输入音频设备变化事件。使用callback异步回调。
     *
     * @param { 'preferredInputDeviceChangeForCapturerInfo' } type - 事件回调类型，支持的事件为'
     *     preferredInputDeviceChangeForCapturerInfo'，当取消监听最高优先级输入音频设备变化事件时，触发该事件。
     * @param { Callback<AudioDeviceDescriptors> } callback - 回调函数，返回优先级最高的输入设备信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     */
    off(type: 'preferredInputDeviceChangeForCapturerInfo', callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Unsubscribes to preferred input device change events.
     * @param { Callback<AudioDeviceDescriptors> } [callback] - Callback used to obtain
     *     the changed preferred devices in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offPreferredInputDeviceChangeForCapturerInfo(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * 订阅首选输入设备变更事件。当目标音频的首选设备
     * 捕获器过滤器更改，已注册的客户端将收到回调。
     *
     * @param { AudioCapturerFilter } filter - 过滤capturer。
     * @param { Callback<AudioDeviceDescriptors> } callback - 回调用于接收首选设备变更信息。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onPreferredInputDeviceChangeByFilter(filter: AudioCapturerFilter, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * 取消订阅首选输入设备更改事件。
     *
     * @param { Callback<AudioDeviceDescriptors> } [callback] - 要侦听的事件类型。只有
     *     支持的输入设备变更按过滤事件为precedenceInputDeviceChangeByFilter。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offPreferredInputDeviceChangeByFilter(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * 根据音频信息，返回优先级最高的输入设备。同步返回结果。
     *
     * @param { AudioCapturerInfo } capturerInfo - 音频采集器信息。
     * @returns { AudioDeviceDescriptors } 返回优先级最高的输入设备信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getPreferredInputDeviceForCapturerInfoSync(capturerInfo: AudioCapturerInfo): AudioDeviceDescriptors;

    /**
     * 获取当前设备是否支持麦克风状态检测。使用Promise异步回调。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示支持；返回false表示不支持。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     * @since 23 static
     */
    isMicBlockDetectionSupported():Promise<boolean>;

    /**
     * 监听麦克风堵塞状态变化事件。使用callback异步回调。
     * 
     * 使用此功能前，请使用[isMicBlockDetectionSupported]{@link audio.AudioRoutingManager.isMicBlockDetectionSupported}查询设备是否支持检测。
     * 应用在使用麦克风录音时，若麦克风堵塞状态发生变化，将触发该事件。目前此检测功能仅支持麦克风位于本地设备上。
     *
     * @param { 'micBlockStatusChanged' } type - 事件回调类型，支持的事件为'micBlockStatusChanged'，当麦克风堵塞状态发生变化时，触发该事件。
     * @param { Callback<DeviceBlockStatusInfo> } callback - 回调函数，返回麦克风被堵塞状态和设备信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     */
    on(type: 'micBlockStatusChanged', callback: Callback<DeviceBlockStatusInfo>): void;

    /**
     * Subscribes microphone blocked events. Before subscribing, users should query whether block detection is supported
     * on current device. The caller will receive the callback only when it is recording and the used
     * microphones' block status have changed. Currently, block detecting is only support for microphones located on
     * the local device.
     * @param { Callback<DeviceBlockStatusInfo> } callback - Callback used to obtain the microphone block status.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onMicBlockStatusChanged(callback: Callback<DeviceBlockStatusInfo>): void;

    /**
     * 取消监听麦克风堵塞状态变化事件。使用callback异步回调。
     *
     * @param { 'microphoneBlockStatusChanged' } type - 事件回调类型，支持的事件为'micBlockStatusChanged'，当取消监听音频麦克风是否被堵塞变化事件时，触发该事件。
     * @param { Callback<DeviceBlockStatusInfo> } callback - 回调函数，返回麦克风被堵塞状态和设备信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     */
    off(type: 'micBlockStatusChanged', callback?: Callback<DeviceBlockStatusInfo>): void;

    /**
     * Unsubscribes microphone blocked events.
     * @param { Callback<DeviceBlockStatusInfo> } [callback] - Callback used to obtain the microphone block status.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offMicBlockStatusChanged(callback?: Callback<DeviceBlockStatusInfo>): void;

    /**
     * Exclude output devices. After calling this function successfully, audio will not be played on the specified
     * devices. Note that only the external ouput device can be excluded by this function. Local output devices is not
     * accepted.
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG [since 18 - 22]
     * @param { DeviceUsage } usage - Device usage, only output device usages can be accepted.
     * @param { AudioDeviceDescriptors } devices - The devices to be excluded.
     * @returns { Promise<void> } Promise used to return result.
     * @throws { BusinessError } 201 - Permisson denied. [since 18 - 22]
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    excludeOutputDevices(usage: DeviceUsage, devices: AudioDeviceDescriptors): Promise<void>;

    /**
     * Unexclude output devices.
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG [since 18 - 22]
     * @param { DeviceUsage } usage - Device usage, only output device usages can be accepted.
     * @param { AudioDeviceDescriptors } devices - The devices to be unexcluded.
     * @returns { Promise<void> } Promise used to return result.
     * @throws { BusinessError } 201 - Permisson denied. [since 18 - 22]
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    unexcludeOutputDevices(usage: DeviceUsage, devices: AudioDeviceDescriptors): Promise<void>;

    /**
     * Unexclude output devices. This function will unexclude all output devices belong to specific usage.
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG [since 18 - 22]
     * @param { DeviceUsage } usage - Device usage, only output device usages can be accepted.
     * @returns { Promise<void> } Promise used to return result.
     * @throws { BusinessError } 201 - Permisson denied. [since 18 - 22]
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    unexcludeOutputDevices(usage: DeviceUsage): Promise<void>;

    /**
     * Get excluded devices by filter.
     * @param { DeviceUsage } usage - Device usage, only output device usages can be accepted.
     * @returns { AudioDeviceDescriptors } Exclueded devices.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getExcludedDevices(usage: DeviceUsage): AudioDeviceDescriptors;

    /**
     * 声明应用需要兼容的设备类型。
     * 
     * > **说明：**
     * >
     * > 对于API version 20及以上版本新增的设备类型，应用调用获取设备的相关接口时（例如
     * > [getAvailableDevices]{@link audio.AudioSessionManager.getAvailableDevices}），默认返回的设备类型为匿名类型。如需获取具体设备类型，需先调用该方法进行
     * > 设备类型兼容声明。
     *
     * @param { DeviceTypeArray } deviceTypes - [DeviceType]{@link audio.DeviceType}数组。
     * @throws { BusinessError } 6800101 - Parameter verification failed, the param deviceTypes contains value
     *     that is invalid enum or is not a device type introduced in API 20 onwards.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    declareDeviceTypesCompatibility(deviceTypes: DeviceTypeArray): void;

    /**
     * 将所需音频播放流的输出设备策略恢复为默认。
     *
     * @param { AudioRendererFilter } filter - 要恢复策略的音频播放流筛选属性
     * @returns { Promise<void> } Promise used to return result.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    restoreOutputDeviceByFilter(filter: AudioRendererFilter): Promise<void>;

    /**
     * 获取当前音频设备情况下的活动输出设备描述符。
     * 激活策略与系统的音频设备策略相关。
     *
     * @returns { Promise<AudioDeviceDescriptors> } 当前激活的输出设备信息
     * @throws { BusinessError } 202 - Not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getActiveOutputDeviceDescriptors(): Promise<AudioDeviceDescriptors>;
  }

  /**
   * 音频流管理。
   * 
   * 在使用AudioStreamManager的接口之前，需先通过[getStreamManager]{@link audio.AudioManager.getStreamManager}获取AudioStreamManager实例。
   * 
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 9开始支持。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AudioStreamManager {
    /**
     * 获取当前音频渲染器的信息。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 该接口返回的音频渲染器信息，可能包含系统内部音频播放流，如蜂窝通话、超声波等。
     *
     * @param { AsyncCallback<AudioRendererChangeInfoArray> } callback - 回调函数。当获取当前音频渲染器的信息成功，err为undefined，data为获取到的当前音
     *     频渲染器的信息；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentAudioRendererInfoArray(callback: AsyncCallback<AudioRendererChangeInfoArray>): void;

    /**
     * 获取当前音频渲染器的信息。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 该接口返回的音频渲染器信息，可能包含系统内部音频播放流，如蜂窝通话、超声波等。
     *
     * @returns { Promise<AudioRendererChangeInfoArray> } Promise对象，返回当前音频渲染器信息。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentAudioRendererInfoArray(): Promise<AudioRendererChangeInfoArray>;

    /**
     * 获取当前音频渲染器的信息。同步返回结果。
     * 
     * > **说明：**
     * >
     * > 该接口返回的音频渲染器信息，可能包含系统内部音频播放流，如蜂窝通话、超声波等。
     *
     * @returns { AudioRendererChangeInfoArray } 返回当前音频渲染器信息。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCurrentAudioRendererInfoArraySync(): AudioRendererChangeInfoArray;

    /**
     * 获取当前音频采集器的信息。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 该接口返回的音频采集器信息，可能包含系统内部音频录制流，如语音唤醒、蜂窝通话等。
     *
     * @param { AsyncCallback<AudioCapturerChangeInfoArray> } callback - 回调函数。当获取当前音频采集器的信息成功，err为undefined，data为获取到的当前音
     *     频采集器的信息；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentAudioCapturerInfoArray(callback: AsyncCallback<AudioCapturerChangeInfoArray>): void;

    /**
     * 获取当前音频采集器的信息。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 该接口返回的音频采集器信息，可能包含系统内部音频录制流，如语音唤醒、蜂窝通话等。
     *
     * @returns { Promise<AudioCapturerChangeInfoArray> } Promise对象，返回当前音频采集器信息。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentAudioCapturerInfoArray(): Promise<AudioCapturerChangeInfoArray>;

    /**
     * 获取当前音频采集器的信息。同步返回结果。
     * 
     * > **说明：**
     * >
     * > 该接口返回的音频采集器信息，可能包含系统内部音频录制流，如语音唤醒、蜂窝通话等。
     *
     * @returns { AudioCapturerChangeInfoArray } 返回当前音频采集器信息。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCurrentAudioCapturerInfoArraySync(): AudioCapturerChangeInfoArray;

    /**
     * 获取当前音效模式的信息。使用callback异步回调。
     *
     * @param { StreamUsage } usage - 音频流使用类型。
     * @param { AsyncCallback<AudioEffectInfoArray> } callback - 回调函数。当获取当前音效模式的信息成功，err为undefined，data为获取到的当前音效模式的信息；否则
     *     为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioEffectInfoArray(usage: StreamUsage, callback: AsyncCallback<AudioEffectInfoArray>): void;

    /**
     * 获取当前音效模式的信息。使用Promise异步回调。
     *
     * @param { StreamUsage } usage - 音频流使用类型。
     * @returns { Promise<AudioEffectInfoArray> } Promise对象，返回当前音效模式的信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioEffectInfoArray(usage: StreamUsage): Promise<AudioEffectInfoArray>;

    /**
     * 获取当前音效模式的信息。同步返回结果。
     *
     * @param { StreamUsage } usage - 音频流使用类型。
     * @returns { AudioEffectInfoArray } 返回当前音效模式的信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioEffectInfoArraySync(usage: StreamUsage): AudioEffectInfoArray;

    /**
     * 监听音频渲染器更改事件（当音频播放流状态变化或设备变化时触发）。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 该接口返回的音频渲染器信息，可能包含系统内部音频播放流，如蜂窝通话、超声波等。
     *
     * @param { 'audioRendererChange' } type - 事件回调类型，支持的事件为'audioRendererChange'，当音频播放流状态变化或设备变化时，触发该事件。
     * @param { Callback<AudioRendererChangeInfoArray> } callback - 回调函数，返回当前音频渲染器信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     */
    on(type: 'audioRendererChange', callback: Callback<AudioRendererChangeInfoArray>): void;

    /**
     * Listens for audio renderer change events. When there is any audio renderer change,
     * registered clients will receive the callback.
     *
     * @param { Callback<AudioRendererChangeInfoArray> } callback - Callback invoked for the audio renderer change
     *     event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    onAudioRendererChange(callback: Callback<AudioRendererChangeInfoArray>): void;

    /**
     * 取消监听音频渲染器更改事件。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 该接口返回的音频渲染器信息，可能包含系统内部音频播放流，如蜂窝通话、超声波等。
     *
     * @param { 'audioRendererChange' } type - 事件回调类型，支持的事件为'audioRendererChange'，当取消监听音频渲染器更改事件时，触发该事件。
     * @param { Callback<AudioRendererChangeInfoArray> } callback - 回调函数，返回当前音频渲染器信息。 [since 18]
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     */
    off(type: 'audioRendererChange', callback?: Callback<AudioRendererChangeInfoArray>): void;

    /**
     * Unsubscribes to audio renderer change events.
     *
     * @param { Callback<AudioRendererChangeInfoArray> } [callback] - Callback invoked for the audio renderer change
     *     event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    offAudioRendererChange(callback?: Callback<AudioRendererChangeInfoArray>): void;

    /**
     * 监听音频采集器更改事件（当音频录制流状态变化或设备变化时触发）。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 该接口返回的音频采集器信息，可能包含系统内部音频录制流，如语音唤醒、蜂窝通话等。
     *
     * @param { 'audioCapturerChange' } type - 事件回调类型，支持的事件为'audioCapturerChange'，当音频录制流状态变化或设备变化时，触发该事件。
     * @param { Callback<AudioCapturerChangeInfoArray> } callback - 回调函数，返回当前音频采集器信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 9 dynamic
     */
    on(type: 'audioCapturerChange', callback: Callback<AudioCapturerChangeInfoArray>): void;

    /**
     * Listens for audio capturer change events. When there is any audio capturer change,
     * registered clients will receive the callback.
     *
     * @param { Callback<AudioCapturerChangeInfoArray> } callback - Callback invoked for the audio capturer change
     *     event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onAudioCapturerChange(callback: Callback<AudioCapturerChangeInfoArray>): void;

    /**
     * 取消监听音频采集器更改事件。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 该接口返回的音频采集器信息，可能包含系统内部音频录制流，如语音唤醒、蜂窝通话等。
     *
     * @param { 'audioCapturerChange' } type - 事件回调类型，支持的事件为'audioCapturerChange'，当取消监听音频采集器更改事件时，触发该事件。
     * @param { Callback<AudioCapturerChangeInfoArray> } callback - 回调函数，返回当前音频采集器信息。 [since 18]
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 9 dynamic
     */
    off(type: 'audioCapturerChange', callback?: Callback<AudioCapturerChangeInfoArray>): void;

    /**
     * Unsubscribes to audio capturer change events.
     *
     * @param { Callback<AudioCapturerChangeInfoArray> } [callback] - Callback invoked for the audio capturer change
     *     event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offAudioCapturerChange(callback?: Callback<AudioCapturerChangeInfoArray>): void;

    /**
     * 获取指定音频流活跃状态。使用callback异步回调。
     *
     * @param { AudioVolumeType } volumeType - 音频流类型。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当获取指定音频流活跃状态成功，err为undefined，data为true表示活跃，false表示不活跃；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioStreamManager#isStreamActive
     */
    isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void;
    /**
     * 获取指定音频流是否为活跃状态。使用Promise异步回调。
     *
     * @param { AudioVolumeType } volumeType - 音频流类型。
     * @returns { Promise<boolean> } Promise对象。返回true表示流状态为活跃；返回false表示流状态不活跃。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioStreamManager#isStreamActive
     */
    isActive(volumeType: AudioVolumeType): Promise<boolean>;
    /**
     * 获取指定音频流是否为活跃状态。同步返回结果。
     *
     * @param { AudioVolumeType } volumeType - 音频流类型。
     * @returns { boolean } 流的活跃状态。返回true表示活跃，返回false表示不活跃。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioStreamManager#isStreamActive
     */
    isActiveSync(volumeType: AudioVolumeType): boolean;

    /**
     * 获取指定音频流是否为活跃状态。同步返回结果。
     *
     * @param { StreamUsage } streamUsage - 音频流使用类型。
     * @returns { boolean } 流是否处于活跃状态。返回true表示活跃，返回false表示不活跃。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 20 dynamic
     * @since 23 static
     */
    isStreamActive(streamUsage: StreamUsage): boolean;

    /**
     * 查询指定的音源类型是否支持回声消除。
     *
     * @param { SourceType } sourceType - 音源类型。
     * @returns { boolean } 是否支持回声消除。true表示支持回声消除，false表示不支持回声消除。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    isAcousticEchoCancelerSupported(sourceType: SourceType): boolean;

    /**
     * 查询当前系统是否支持指定的音频返听模式。
     *
     * @param { AudioLoopbackMode } mode - 音频返听模式。
     * @returns { boolean } 是否支持指定的音频返听模式。true表示支持，false表示不支持。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    isAudioLoopbackSupported(mode: AudioLoopbackMode): boolean;

    /**
     * 检查传入的音频采集器信息中音源类型的录制是否可以启动成功。
     *
     * @param { AudioCapturerInfo } capturerInfo - 音频采集器信息。
     * @returns { boolean } 代表录制是否可以启动成功。true表示成功，false表示失败。
     *     <br>仅检测是否可以获取音频采集器信息中音源类型的焦点。通常在音频录制启动前调用，否则已存在的录制流可能会拒绝其启动。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    isRecordingAvailable(capturerInfo: AudioCapturerInfo): boolean;

    /**
     * 查询指定的音源类型智能降噪开关是否打开。
     *
     * @param { SourceType } sourceType - 表示音源类型。
     * @returns { boolean } 智能降噪开关的状态。true表示打开，false表示关闭。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    isIntelligentNoiseReductionEnabledForCurrentDevice(sourceType: SourceType): boolean;

    /**
     * 查询指定音频流信息和使用场景下是否支持低时延播放。
     *
     * @param { AudioStreamInfo } streamInfo - 音频流信息，用于描述基础音频格式。
     * @param { StreamUsage } usage - 音频流使用场景，用于决定音频设备和通路类型的选择结果。
     * @returns { boolean } 是否支持低时延播放。true表示支持，false表示不支持。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isFastPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean;

    /**
     * 查询指定音频流信息和使用场景下是否支持直通播放。
     *
     * @param { AudioStreamInfo } streamInfo - 音频流信息，用于描述基础音频格式。
     * @param { StreamUsage } usage - 音频流使用场景，用于决定音频设备和通路类型的选择结果。
     * @returns { boolean } 是否支持直通播放。true表示支持，false表示不支持。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isDirectPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean;

    /**
     * 查询指定音频流信息和使用场景下是否支持低功耗通路播放。
     *
     * @param { AudioStreamInfo } streamInfo - 音频流信息，用于描述基础音频格式。
     * @param { StreamUsage } usage - 音频流使用场景，用于决定音频设备和通路类型的选择结果。
     * @returns { boolean } 是否支持低功耗通路播放。true表示支持，false表示不支持。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isOffloadPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean;

    /**
     * 查询指定音频流信息和使用场景下是否支持多声道播放。
     *
     * @param { AudioStreamInfo } streamInfo - 音频流信息，用于描述基础音频格式。
     * @param { StreamUsage } usage - 音频流使用场景，用于决定音频设备和通路类型的选择结果。
     * @returns { boolean } 是否支持多声道播放。true表示支持，false表示不支持。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isMultichannelPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean;

    /**
     * 查询指定音频流信息和音源类型下是否支持低时延录制。
     *
     * @param { AudioStreamInfo } streamInfo - 音频流信息，用于描述基础音频格式。
     * @param { SourceType } source - 音源类型，用于决定音频设备和通路类型的选择结果。
     * @returns { boolean } 是否支持低时延录制。true表示支持，false表示不支持。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isFastRecordingSupported(streamInfo: AudioStreamInfo, source: SourceType): boolean;
  }

  /**
   * 表示音频并发模式的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @atomicservice [since 26.0.0]
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioConcurrencyMode {
    /**
     * 默认使用系统策略。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     * @since 23 static
     */
    CONCURRENCY_DEFAULT = 0,
    /**
     * 和其他音频并发，即混音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     * @since 23 static
     */
    CONCURRENCY_MIX_WITH_OTHERS = 1,
    /**
     * 压低其他音频的音量。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     * @since 23 static
     */
    CONCURRENCY_DUCK_OTHERS = 2,
    /**
     * 暂停其他音频。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     * @since 23 static
     */
    CONCURRENCY_PAUSE_OTHERS = 3
  }

  /**
   * 表示音频会话停用原因的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioSessionDeactivatedReason {
    /**
     * 应用焦点被抢占。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    DEACTIVATED_LOWER_PRIORITY = 0,
    /**
     * 音频会话等待超时。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    DEACTIVATED_TIMEOUT = 1
  }

  /**
   * 枚举音频会话场景。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum AudioSessionScene {
    /**
     * 媒体音频会话场景。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_SCENE_MEDIA = 0,
    /**
     * 游戏音频会话场景。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_SCENE_GAME = 1,
    /**
     * VoIP语音通话音频会话场景。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_SCENE_VOICE_COMMUNICATION = 2
  }

  /**
   * 枚举用于音频会话状态变更提示。
   * 
   * 当用户监听到音频会话状态变化事件（即收到[AudioSessionStateChangedEvent]{@link audio.AudioSessionStateChangedEvent}事件）时，获取相关信息。
   * 
   * 此类型表示根据焦点策略对音频会话执行的操作，包括暂停、调整音量等。
   * 
   * 详情请参阅文档[音频会话管理](docroot://media/audio/audio-session-management.md)。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum AudioSessionStateChangeHint {
    /**
     * 提示音频会话恢复，应用可主动触发开始渲染等操作。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_RESUME = 0,

    /**
     * 提示音频会话暂停，暂时失去音频焦点。当焦点再次可用时，会收到 AUDIO_SESSION_STATE_CHANGE_HINT_RESUME 事件。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_PAUSE = 1,

    /**
     * 提示音频会话因焦点被抢占而停止，彻底失去音频焦点。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_STOP = 2,

    /**
     * 提示音频会话因长时间无业务而被系统停止，导致失去音频焦点。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_TIME_OUT_STOP = 3,

    /**
     * 提示音频会话躲避开始，降低音量播放。
     * 
     * 如果已启用
     * [enableMuteSuggestionWhenMixWithOthers]{@link audio.AudioSessionManager.enableMuteSuggestionWhenMixWithOthers}，此时
     * 可以选择执行静音操作。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_DUCK = 4,

    /**
     * 提示音频会话躲避结束，恢复音量播放。
     * 
     * 如果已启用
     * [enableMuteSuggestionWhenMixWithOthers]{@link audio.AudioSessionManager.enableMuteSuggestionWhenMixWithOthers}，此时
     * 可取消静音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_UNDUCK = 5,

    /**
     * 静音播放建议。
     * 
     * 当其他应用程序开始播放不可混音的音频时，应用程序可以自行决定是否静音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_MUTE_SUGGESTION = 6,

    /**
     * 取消静音播放建议。
     * 
     * 当其他应用程序不可混音的音频已结束，该应用程序可自行决定是否取消静音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE_SUGGESTION = 7,

    /**
     * 提示音频会话静音。
     * 
     * 该提示仅在以下条件满足后才会收到：通过接口[setAudioSessionBehavior]{@link audio.AudioSessionManager.setAudioSessionBehavior}设置参数
     * [AudioSessionBehaviorFlags]{@link audio.AudioSessionBehaviorFlags}.MUTE_WHEN_INTERRUPTED，并已调用
     * [setAudioSessionScene]{@link audio.AudioSessionManager.setAudioSessionScene}，且音频会话已激活。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_MUTE = 8,

    /**
     * 提示音频会话解除静音，恢复播放。
     * 
     * 该提示仅在以下条件满足后才会收到：通过接口[setAudioSessionBehavior]{@link audio.AudioSessionManager.setAudioSessionBehavior}设置参数
     * [AudioSessionBehaviorFlags]{@link audio.AudioSessionBehaviorFlags}.MUTE_WHEN_INTERRUPTED，并已调用
     * [setAudioSessionScene]{@link audio.AudioSessionManager.setAudioSessionScene}，且音频会话已激活。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE = 9,
  }

  /**
   * 表示输出设备变更后推荐操作的枚举。
   * 
   * 常见场景示例：耳机设备和外放设备之间进行切换。当佩戴耳机时，从外放设备切换到耳机设备，系统会推荐继续播放，提示应用无需停止当前播放。当摘下耳机设备切换到外放设备时，系统会推荐停止播放。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum OutputDeviceChangeRecommendedAction {
    /**
     * 推荐继续播放（该事件作为播放维持提示，作用是告知应用本次设备变动音频无需停止播放，但‌不可将其作为启动音频播放的判断依据）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    DEVICE_CHANGE_RECOMMEND_TO_CONTINUE = 0,
    /**
     * 推荐停止播放。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    DEVICE_CHANGE_RECOMMEND_TO_STOP = 1
  }

  /**
   * 表示音频会话行为的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum AudioSessionBehaviorFlags {
    /**
     * 默认行为，用于清空音频会话行为设置。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DEFAULT_BEHAVIOR = 0x00000000,
    /**
     * 当系统需要停止或暂停音频流时，执行强制静音替代。
     * 
     * 调用[setAudioSessionBehavior]{@link audio.AudioSessionManager.setAudioSessionBehavior}接口配置该行为时，必须同步调用
     * [setAudioSessionScene]{@link audio.AudioSessionManager.setAudioSessionScene}接口，否则配置将无法生效。
     * 
     * 在音频会话场景下，当音频流静音或恢复时，应用将分别收到[AudioSessionStateChangeHint]{@link audio.AudioSessionStateChangeHint}.
     * AUDIO_SESSION_STATE_CHANGE_HINT_MUTE与[AudioSessionStateChangeHint]{@link audio.AudioSessionStateChangeHint}.
     * AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE的通知。
     * 
     * 在AudioRenderer和AudioCapturer场景下，当音频流静音或恢复时，应用将分别收到[InterruptHint]{@link audio.InterruptHint}.INTERRUPT_HINT_MUTE与
     * [InterruptHint]{@link audio.InterruptHint}.INTERRUPT_HINT_UNMUTE的通知。
     * 
     * **注意：** 该标志不能与PAUSE_WHEN_INTERRUPTED共存，若同时设置，仅PAUSE_WHEN_INTERRUPTED生效。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    MUTE_WHEN_INTERRUPTED = 0x00000002,
    /**
     * 当系统需要停止音频流时，执行暂停替代。
     * 
     * 调用[setAudioSessionBehavior]{@link audio.AudioSessionManager.setAudioSessionBehavior}接口配置该行为时，必须同步调用
     * [setAudioSessionScene]{@link audio.AudioSessionManager.setAudioSessionScene}接口，否则配置将无法生效。
     * 
     * 在音频会话场景下，当音频流暂停或恢复时，应用将分别收到[AudioSessionStateChangeHint]{@link audio.AudioSessionStateChangeHint}.
     * AUDIO_SESSION_STATE_CHANGE_HINT_PAUSE与[AudioSessionStateChangeHint]{@link audio.AudioSessionStateChangeHint}.
     * AUDIO_SESSION_STATE_CHANGE_HINT_RESUME的通知。
     * 
     * 在AudioRenderer和AudioCapturer场景下，当音频流暂停或恢复时，应用将分别收到[InterruptHint]{@link audio.InterruptHint}.INTERRUPT_HINT_PAUSE
     * 与[InterruptHint]{@link audio.InterruptHint}.INTERRUPT_HINT_RESUME的通知。
     * 
     * **注意：** 该标志不能与MUTE_WHEN_INTERRUPTED共存，若同时设置，仅该标志生效。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAUSE_WHEN_INTERRUPTED = 0x00000004,
  }

  /**
   * 音频会话策略。
   *
   * @typedef AudioSessionStrategy [since 12 - 24]
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @atomicservice [since 26.0.0]
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioSessionStrategy {
    /**
     * 音频并发模式。
     *
     * @type { AudioConcurrencyMode } [since 12 - 24]
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     * @since 23 static
     */
    concurrencyMode: AudioConcurrencyMode;
  }

  /**
   * 音频会话停用事件。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioSessionDeactivatedEvent {
    /**
     * 音频会话停用原因。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    reason: AudioSessionDeactivatedReason;
  }

  /**
   * 音频会话状态变更事件。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface AudioSessionStateChangedEvent {
    /**
     * 音频会话状态变更提示。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    stateChangeHint: AudioSessionStateChangeHint;
  }

  /**
   * 应用接收到输出设备的变更事件。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface CurrentOutputDeviceChangedEvent {
    /**
     * 设备信息。
     *
     * @type { AudioDeviceDescriptors }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    devices: AudioDeviceDescriptors;
    /**
     * 设备变更原因。
     *
     * @type { AudioStreamDeviceChangeReason }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    changeReason: AudioStreamDeviceChangeReason;
    /**
     * 设备变更后推荐的操作。
     *
     * @type { OutputDeviceChangeRecommendedAction }
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    recommendedAction: OutputDeviceChangeRecommendedAction;
    /**
     * 应用输出设备变更前的设备信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    preDevices?: AudioDeviceDescriptors;
  }

  /**
   * 表示在使用蓝牙或星闪进行录音时，应用程序的设备偏好分类枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 21 dynamic
   * @since 24 static
   */
  enum BluetoothAndNearlinkPreferredRecordCategory {
    /**
     * 无指定设备偏好。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    PREFERRED_NONE = 0,
    /**
     * 更偏好使用蓝牙或星闪录音，是否使用低延迟或高质量录音取决于系统。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    PREFERRED_DEFAULT = 1,
    /**
     * 更偏好使用蓝牙或星闪低延迟模式进行录音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    PREFERRED_LOW_LATENCY = 2,
    /**
     * 更偏好使用蓝牙或星闪高质量模式进行录音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    PREFERRED_HIGH_QUALITY = 3
  }

  /**
   * 应用接收到输入设备的变更事件。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 21 dynamic
   * @since 24 static
   */
  interface CurrentInputDeviceChangedEvent {
    /**
     * 设备信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    devices: AudioDeviceDescriptors;
    /**
     * 设备变更原因。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    changeReason: AudioStreamDeviceChangeReason;
  }

  /**
   * 音频会话管理。
   * 
   * 在使用AudioSessionManager的接口之前，需先通过[getSessionManager]{@link audio.AudioManager.getSessionManager}获取
   * AudioSessionManager实例。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 12开始支持。
   *
   * @typedef AudioSessionManager [since 12 - 24]
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @atomicservice [since 26.0.0]
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioSessionManager {
    /**
     * 激活音频会话。使用Promise异步回调。
     *
     * @param { AudioSessionStrategy } strategy - 音频会话策略。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - System error. Possible causes:
     *     1.Focus preemption failure.
     *     2.Audio server process died.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     * @since 23 static
     */
    activateAudioSession(strategy: AudioSessionStrategy): Promise<void>;

    /**
     * 停用音频会话。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 6800301 - System error. Possible causes:
     *     1.The audio session is not existed or has been released.
     *     2.Audio server process died.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     * @since 23 static
     */
    deactivateAudioSession(): Promise<void>;

    /**
     * 检查音频会话是否已激活。
     *
     * @returns { boolean } 音频会话是否处于激活状态。true表示已激活，false表示已停用。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     * @since 23 static
     */
    isAudioSessionActivated(): boolean;

    /**
     * 监听音频会话停用事件（当音频会话停用时触发）。使用callback异步回调。
     *
     * @param { 'audioSessionDeactivated' } type - 事件回调类型，支持的事件为'audioSessionDeactivated'，当音频会话停用时，触发该事件。
     * @param { Callback<AudioSessionDeactivatedEvent> } callback - 回调函数，返回音频会话停用原因。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     */
    on(type: 'audioSessionDeactivated', callback: Callback<AudioSessionDeactivatedEvent>): void;

    /**
     * Listens for audio session deactivated event. When the audio session is deactivated,
     * registered clients will receive the callback.
     *
     * @param { Callback<AudioSessionDeactivatedEvent> } callback -
          *     Callback invoked for the audio session deactivated event. [since 23]
     * @throws { BusinessError } 6800101 - Parameter verification failed. [since 23]
     * @syscap SystemCapability.Multimedia.Audio.Core [since 23]
     * @atomicservice [since 26.0.0]
     * @since 23 static
     */
    onAudioSessionDeactivated(callback: Callback<AudioSessionDeactivatedEvent>): void;

    /**
     * 取消监听音频会话停用事件。使用callback异步回调。
     *
     * @param { 'audioSessionDeactivated' } type - 事件回调类型，支持的事件为'audioSessionDeactivated'，当取消监听音频会话停用事件时，触发该事件。
     * @param { Callback<AudioSessionDeactivatedEvent> } callback - 回调函数，返回音频会话停用原因。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     */
    off(type: 'audioSessionDeactivated', callback?: Callback<AudioSessionDeactivatedEvent>): void;

    /**
     * 取消订阅音频会话去激活事件。
     *
     * @param { Callback<AudioSessionDeactivatedEvent> } [callback] - Callback invoked for
     *     the audio session deactivated event. [since 23]
     * @throws { BusinessError } 6800101 - Parameter verification failed. [since 23]
     * @syscap SystemCapability.Multimedia.Audio.Core [since 23]
     * @atomicservice [since 26.0.0]
     * @since 23 static
     */
    offAudioSessionDeactivated(callback?: Callback<AudioSessionDeactivatedEvent>): void;

    /**
     * 设置音频会话场景参数。
     *
     * @param { AudioSessionScene } scene - 音频会话场景。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    setAudioSessionScene(scene: AudioSessionScene): void;

    /**
     * 监听音频会话状态变更事件（当音频会话焦点变更时触发）。使用callback异步回调。
     *
     * @param { 'audioSessionStateChanged' } type - 事件回调类型，支持的事件为'audioSessionStateChanged'，当音频会话状态变更时，触发该事件。
     * @param { Callback<AudioSessionStateChangedEvent> } callback - 回调函数，返回音频会话变更提示信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800102 - Allocate memory failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     */
    on(type: 'audioSessionStateChanged', callback: Callback<AudioSessionStateChangedEvent>): void;

    /**
     * Listens for audio session state change event. When the audio session state change,
     * registered clients will receive the callback.
     * @param { Callback<AudioSessionStateChangedEvent> } callback - Callback invoked for the audio
     *     session state change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800102 - Allocate memory failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 23 static
     */
    onAudioSessionStateChanged(callback: Callback<AudioSessionStateChangedEvent>): void;

    /**
     * 取消监听音频会话状态变更事件。使用callback异步回调。
     *
     * @param { 'audioSessionStateChanged' } type - 事件回调类型，支持的事件为'audioSessionStateChanged'，当音频会话状态变更时，触发该事件。
     * @param { Callback<AudioSessionStateChangedEvent> } [callback] - 回调函数，返回音频会话变更提示信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     */
    off(type: 'audioSessionStateChanged', callback?: Callback<AudioSessionStateChangedEvent>): void;

    /**
     * Unsubscribes to audio session deactivated event.
     * @param { Callback<AudioSessionStateChangedEvent> } [callback] - Callback invoked for the audio
     *     session state change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 23 static
     */
    offAudioSessionStateChanged(callback?: Callback<AudioSessionStateChangedEvent>): void;

    /**
     * 获取通过[setDefaultOutputDevice]{@link audio.AudioSessionManager.setDefaultOutputDevice}设置的默认发声设备。
     *
     * @returns { DeviceType } - 设备类型。
     *     <br>仅支持以下设备：EARPIECE（听筒）、SPEAKER（扬声器）和DEFAULT（系统默认设备）。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    getDefaultOutputDevice(): DeviceType;

    /**
     * 设置默认发声设备。使用Promise方式进行异步回调。
     * 
     * > **说明：**
     * >
     * > - 本接口适用于以下情况：当设置的[AudioSessionScene]{@link audio.AudioSessionScene}为VoIP场景时，激活AudioSession后立即生效。若
     * > [AudioSessionScene]{@link audio.AudioSessionScene}为非VoIP场景，激活AudioSession时不会生效，仅在启动播放的
     * > [StreamUsage]{@link audio.StreamUsage}为语音消息、VoIP语音通话或VoIP视频通话时才生效。支持听筒、扬声器和系统默认设备。
     * >
     * > - 本接口允许在AudioSessionManager创建后随时调用，系统会记录应用设置的默认本机内置发声设备。但只有激活AudioSession后才能生效。应用启动播放时，若外接设备如蓝牙耳机或有线耳机已接入，系统优先从
     * > 外接设备发声。否则，系统遵循应用设置的默认本机内置发声设备。
     *
     * @param { DeviceType } deviceType - 设备类型。
     *     <br>仅支持以下设备：EARPIECE（听筒）、SPEAKER（扬声器）和DEFAULT（系统默认设备）。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800102 - Allocate memory failed. Return by promise.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    setDefaultOutputDevice(deviceType: DeviceType): Promise<void>;

    /**
     * 当连接其他音频外设（如蓝牙耳机或有线耳机）时，将媒体输出设备切换为内置扬声器。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 本接口仅适用于媒体播放场景，并且会作用于应用内发起的所有媒体流。
     * >
     * > - 若存在更高优先级的并发播放流或用户手动选择输出设备，则应用程序实际使用的输出设备将与本接口设置的设备不同。应用程序可通过监听
     * > [CurrentOutputDeviceChangedEvent]{@link audio.CurrentOutputDeviceChangedEvent}事件获取当前活跃的输出设备。
     * >
     * > - 当应用程序需要清除之前通过接口设置的扬声器输出配置时，可通过调用接口将媒体输出设备设置为DEFAULT（系统默认设备）来实现。该设置仅在应用程序运行期间有效，当应用程序退出时，此接口的设置将自动清除。
     *
     * @param { DeviceType } deviceType - 设备类型。
     *     <br>仅支持以下设备：SPEAKER（扬声器）和DEFAULT（系统默认设备）。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 6800101 - Parameter verification failed, for example,
     *     the selected device type is not supported.
     * @throws { BusinessError } 6800301 - System error. Possible causes:
     *     1.Internal variable memory allocation failed.
     *     2.Audio server process died.
     *     3.Speaker device is not available.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setMediaOutputDevice(deviceType: DeviceType): Promise<void>;

    /**
     * 监听当前输出设备变化事件（当前输出设备发生变化时触发）。使用callback异步回调。
     *
     * @param { 'currentOutputDeviceChanged' } type - 事件回调类型，支持的事件为'currentOutputDeviceChanged'，当前输出设备变更时触发。
     * @param { Callback<CurrentOutputDeviceChangedEvent> } callback - 回调函数，返回当前输出设备信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800102 - Allocate memory failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     */
    on(type: 'currentOutputDeviceChanged', callback: Callback<CurrentOutputDeviceChangedEvent>): void;

    /**
     * Subscribes output device change event callback.
     * The event is triggered when device change.
     * @param { Callback<CurrentOutputDeviceChangedEvent> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800102 - Allocate memory failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onCurrentOutputDeviceChanged(callback: Callback<CurrentOutputDeviceChangedEvent>): void;

    /**
     * 取消监听当前输出设备的变化事件，并使用callback进行异步回调。
     *
     * @param { 'currentOutputDeviceChanged' } type - 事件回调类型，支持的事件为'currentOutputDeviceChanged'，当前输出设备发生变化时，触发该事件。
     * @param { Callback<CurrentOutputDeviceChangedEvent> } [callback] - 回调函数，用于返回当前输出设备变化的信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     */
    off(type: 'currentOutputDeviceChanged', callback?: Callback<CurrentOutputDeviceChangedEvent>): void;

    /**
     * Unsubscribes output device change event callback.
     * @param { Callback<CurrentOutputDeviceChangedEvent> } [callback] - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offCurrentOutputDeviceChanged(callback?: Callback<CurrentOutputDeviceChangedEvent>): void;

    /**
     * 获取音频可选设备列表。
     *
     * @param { DeviceUsage } deviceUsage - 音频设备类型（根据用途分类）。
     * @returns { AudioDeviceDescriptors } 返回设备列表。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    getAvailableDevices(deviceUsage: DeviceUsage): AudioDeviceDescriptors;

    /**
     * 监听音频可选设备连接状态变化事件（当音频可选设备连接状态发生变化时触发）。
     *
     * @param { 'availableDeviceChange' } type - 事件回调类型，支持的事件为'availableDeviceChange'，当音频可选设备连接状态发生变化时，触发该事件。
     * @param { DeviceUsage } deviceUsage - 音频设备类型（根据用途分类）。
     * @param { Callback<DeviceChangeAction> } callback - 回调函数，返回设备更新详情。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     */
    on(type: 'availableDeviceChange', deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void;

    /**
     * Subscribes to available device change events. When a device is connected/disconnected, registered clients
     * will receive the callback.
     *
     * @param { DeviceUsage } deviceUsage - Audio device usage to filter available devices.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 24 static
     */
    onAvailableDeviceChange(deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void;

    /**
     * 取消监听音频可选设备连接状态变化事件。
     *
     * @param { 'availableDeviceChange' } type - 事件回调类型，支持的事件为'availableDeviceChange'，当取消监听音频可选设备连接变化事件时，触发该事件。
     * @param { Callback<DeviceChangeAction> } [callback] - 回调函数，返回可选设备更新详情。
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     */
    off(type: 'availableDeviceChange', callback?: Callback<DeviceChangeAction>): void;

    /**
     * Unsubscribes to available device change events.
     *
     * @param { Callback<DeviceChangeAction> } [callback] - Callback used in subscribe.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 24 static
     */
    offAvailableDeviceChange(callback?: Callback<DeviceChangeAction>): void;

    /**
     * 设置媒体输入设备。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 本接口不适用于VoIP通话录音，即[SourceType]{@link audio.SourceType}为SOURCE_TYPE_VOICE_COMMUNICATION的场景不适用。
     * >
     * > - 本接口调用前需要先调用[getAvailableDevices]{@link audio.AudioSessionManager.getAvailableDevices}接口查询到当前可用输入设备列表，从列表中选择输入
     * > 设备。
     * >
     * > - 当系统中存在其他更高优先级的应用录音流时，实际使用的输入设备会跟随其他高优先级应用所选的输入设备。
     * >
     * > - 应用程序可以监听
     * > [currentInputDeviceChanged]{@link audio.AudioSessionManager.on(type: 'currentInputDeviceChanged', callback: Callback<CurrentInputDeviceChangedEvent>)}
     * > 事件来获得实际的输入设备。
     *
     * @param { AudioDeviceDescriptor } inputAudioDevice - 媒体输入设备。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 6800101 - Parameter verification failed, for example,
     *     the selected device does not exist.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    selectMediaInputDevice(inputAudioDevice: AudioDeviceDescriptor): Promise<void>;

    /**
     * 获得通过[selectMediaInputDevice]{@link audio.AudioSessionManager.selectMediaInputDevice}设置的媒体输入设备。如果没有设置，返回一个
     * deviceType属性为INVALID的设备。
     *
     * @returns { AudioDeviceDescriptor } - 媒体输入设备信息。
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    getSelectedMediaInputDevice(): AudioDeviceDescriptor;

    /**
     * 清空通过[selectMediaInputDevice]{@link audio.AudioSessionManager.selectMediaInputDevice}设置的媒体输入设备。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    clearSelectedMediaInputDevice(): Promise<void>;

    /**
     * 设置在使用蓝牙或星闪进行录音时，应用程序的设备偏好分类。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 应用程序可以在蓝牙或星闪连接之前设置此分类，系统将在设备连接时优先使用蓝牙或星闪进行录音。
     * >
     * > - 当系统中存在其他更高优先级的应用录音流时，实际使用的输入设备会跟随其他高优先级应用所选的输入设备。
     * >
     * > - 应用程序可以监听
     * > [currentInputDeviceChanged]{@link audio.AudioSessionManager.on(type: 'currentInputDeviceChanged', callback: Callback<CurrentInputDeviceChangedEvent>)}
     * > 事件来获得实际的输入设备。
     *
     * @param { BluetoothAndNearlinkPreferredRecordCategory } category - 在使用蓝牙或星闪进行录音时，应用程序的设备偏好分类。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    setBluetoothAndNearlinkPreferredRecordCategory(category: BluetoothAndNearlinkPreferredRecordCategory): Promise<void>;

    /**
     * 获取通过
     * [setBluetoothAndNearlinkPreferredRecordCategory]{@link audio.AudioSessionManager.setBluetoothAndNearlinkPreferredRecordCategory}
     * 设置的在使用蓝牙或星闪进行录音时的设备偏好分类。
     *
     * @returns { BluetoothAndNearlinkPreferredRecordCategory } - 在使用蓝牙或星闪进行录音时，应用程序的设备偏好分类。
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    getBluetoothAndNearlinkPreferredRecordCategory(): BluetoothAndNearlinkPreferredRecordCategory;

    /**
     * 监听当前输入设备变化事件（当前输入设备发生变化时触发）。
     *
     * @param { 'currentInputDeviceChanged' } type - 事件回调类型，支持的事件为'currentInputDeviceChanged'，当前输入设备发生变化时，触发该事件。
     * @param { Callback<CurrentInputDeviceChangedEvent> } callback - 回调函数，返回当前输入设备信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     */
    on(type: 'currentInputDeviceChanged', callback: Callback<CurrentInputDeviceChangedEvent>): void;

    /**
     * Subscribes input device change event callback. The event is triggered when current input device change.
     *
     * @param { Callback<CurrentInputDeviceChangedEvent> } callback - Callback used to listen input device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 24 static
     */
    onCurrentInputDeviceChanged(callback: Callback<CurrentInputDeviceChangedEvent>): void;

    /**
     * 取消监听当前输入设备的变化事件。
     *
     * @param { 'currentInputDeviceChanged' } type - 事件回调类型，支持的事件为'currentInputDeviceChanged'，当前输入设备发生变化时，触发该事件。
     * @param { Callback<CurrentInputDeviceChangedEvent> } [callback] - 回调函数，用于返回当前输入设备变化的信息。
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     */
    off(type: 'currentInputDeviceChanged', callback?: Callback<CurrentInputDeviceChangedEvent>): void;

    /**
     * Unsubscribes current input device change events.
     *
     * @param { Callback<CurrentInputDeviceChangedEvent> } [callback] - Callback used in subscribe.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 24 static
     */
    offCurrentInputDeviceChanged(callback?: Callback<CurrentInputDeviceChangedEvent>): void;

    /**
     * 检查是否有其他应用正在播放MUSIC、MOVIE、AUDIOBOOK、GAME四种媒体类型的音频，已激活媒体类型的音频会话也将会被检查。
     *
     * @returns { boolean } 是否有其他应用正在播放媒体类型的音频。true表示有，false表示没有。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isOtherMediaPlaying(): boolean;

    /**
     * 启用混音播放下接收静音播放建议通知功能。
     * 
     * 通常，当使用混音模式时，如果其他应用同时播放音频，会和其他应用进行混音播放。但在某些场景下（如游戏或广播），应用自身会通过静音自身的音频以给用户提供更好的体验。
     * 
     * 如果启用此功能，当订阅音频会话状态更改事件后静音建议和取消静音建议提示将通过[AudioSessionStateChangedEvent]{@link audio.AudioSessionStateChangedEvent}回
     * 调发送。收到静音建议表示其他应用程序开始播放音频，且播放的音频和本应用的音频不能混音。
     * 
     * 此功能仅支持已设置[AudioSessionScene]{@link audio.AudioSessionScene}并激活模式模式为CONCURRENCY_MIX_WITH_OTHERS的音频会话使用。并且仅在激活音频会话期
     * 间生效一次，每次激活音频会话前都必须重新启用。
     * 
     * 详细说明请参考[启用混音播放下静音建议通知](docroot://media/audio/audio-session-management.md#启用混音播放下静音建议通知)。
     *
     * @param { boolean } enable - 是否启用混音播放下接收静音播放建议通知功能。true表示启用，false表示不启用。
     * @throws { BusinessError } 6800103 - Function is called without setting {@link #AudioSessionScene} or
     *     called after audio session activation.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, system internal error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    enableMuteSuggestionWhenMixWithOthers(enable: boolean): void;

    /**
     * 应用将当前音频会话内录音流的自身静音状态传递给系统音频模块。<!--RP1-->该接口不会触发录音流静音，当前仅在部分PC/2in1设备上用于优化设备功耗。<!--RP1End-->使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 该接口用于向系统音频模块上报当前音频会话内录音流的静音状态，不会改变录音流的实际静音状态。
     * >
     * > - 该接口仅在当前音频会话存在运行中的录音流时允许调用，否则返回错误码6800103。
     * >
     * > - 若某条录音流同时调用了流级接口[AudioCapturer.setMuteHint]{@link audio.AudioCapturer.setMuteHint}和本接口，流级接口设置优先级更高，以流级接口设置值为准。
     *
     * @param { boolean } mute - 应用自身给系统音频模块上报的静音状态。true表示应用将当前流静音，false表示取消静音。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 6800103 - Operation not permitted at current state, there is no audio
     *     capturer running.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setCapturerMuteHint(mute: boolean): Promise<void>;

    /**
     * 设置音频会话行为参数，支持多种标志位的组合使用。
     * 
     * > **说明：**
     * >
     * > 当音频会话在激活状态时调用此接口后，必须重新调用接口[activateAudioSession]{@link audio.AudioSessionManager.activateAudioSession}使其生效。
     *
     * @param { int } behavior - 用于设置音频会话行为。
     *     <br>该参数可以是单个标志，也可以是多个标志的按位OR组合。
     *     <br>当前支持的音频会话行为详见[AudioSessionBehaviorFlags]{@link audio.AudioSessionBehaviorFlags}中定义的标志。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permitted in the current state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setAudioSessionBehavior(behavior: int): void;
  }

  /**
   * Array of StreamUsages.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  type StreamUsageArray = Array<StreamUsage>;

  /**
   * 音量管理。
   * 
   * 在使用AudioVolumeManager的接口之前，需先通过[getVolumeManager]{@link audio.AudioManager.getVolumeManager}获取AudioVolumeManager实例。
   * 
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 9开始支持。
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform [since 12]
   * @atomicservice [since 23]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AudioVolumeManager {
    /**
     * Get the volume group list for a networkId. This method uses an asynchronous callback to return the result.
     * @param { string } networkId - Distributed deice net work id
     * @param { AsyncCallback<VolumeGroupInfos> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    getVolumeGroupInfos(networkId: string, callback: AsyncCallback<VolumeGroupInfos>): void;
    /**
     * Get the volume group list for a networkId. This method uses a promise to return the result.
     * @param { string } networkId - Distributed deice net work id
     * @returns { Promise<VolumeGroupInfos> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    getVolumeGroupInfos(networkId: string): Promise<VolumeGroupInfos>;
    /**
     * Get the volume group list for a networkId.
     * @param { string } networkId - Distributed deice net work id
     * @returns { VolumeGroupInfos } Volume group info list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getVolumeGroupInfosSync(networkId: string): VolumeGroupInfos;

    /**
     * 获取音频组音量管理器实例。使用callback异步回调。
     *
     * @param { int } groupId - 音量组id，默认使用DEFAULT_VOLUME_GROUP_ID。
     * @param { AsyncCallback<AudioVolumeGroupManager> } callback - 回调函数。当获取音频组音量管理器实例成功，err为undefined，data为获取到的音频组音量管理器
     *     实例；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getVolumeGroupManager(groupId: int, callback: AsyncCallback<AudioVolumeGroupManager>): void;
    /**
     * 获取音频组音量管理器实例。使用Promise异步回调。
     *
     * @param { int } groupId - 音量组id，默认使用DEFAULT_VOLUME_GROUP_ID。
     * @returns { Promise<AudioVolumeGroupManager> } Promise对象，返回音频组音量管理器实例。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getVolumeGroupManager(groupId: int): Promise<AudioVolumeGroupManager>;
    /**
     * 获取音频组音量管理器实例。同步返回结果。
     *
     * @param { int } groupId - 音量组id，默认使用DEFAULT_VOLUME_GROUP_ID。
     * @returns { AudioVolumeGroupManager } 音频组音量管理器实例。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @atomicservice [since 23]
     * @since 10 dynamic
     * @since 23 static
     */
    getVolumeGroupManagerSync(groupId: int): AudioVolumeGroupManager;

    /**
     * Get the volume for specified app with range from 0 to 100. Applications with same uid share the same volume.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { int } uid - App's uid.
     * @returns { Promise<int> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    getAppVolumePercentageForUid(uid: int): Promise<int>;

    /**
     * Sets the volume for specified app with range from 0 to 100. Applications with same uid share the same volume.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { int } uid - App's uid.
     * @param { int } volume - Volume to set. The value range is from 0 to 100.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    setAppVolumePercentageForUid(uid: int, volume: int): Promise<void>;

    /**
     * Gets the current system volume percentage for specified volume type.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type to get.
     * @returns { int } Returns the volume percentage, which is an integer with the range [0, 100].
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    getSystemVolumePercentage(volumeType: AudioVolumeType): int;

    /**
     * Sets the system volume percentage, using an integer ranging from minimum system volume percentage to 100.
     * The volume percentage corresponds to volume levels, with each level tied to a specific percentage. When the
     * volume level changes, the volume percentage adjusts accordingly and is mapped within the range of volume levels.
     * Zero volume is mapped to 0, and the maximum volume is mapped to 100%. Intermediate volume levels are evenly
     * distributed between 1 and 99. When the volume percentage changes, the volume level changes accordingly.
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { AudioVolumeType } volumeType - Audio volume type to set.
     * @param { int } percentage - Percentage to set. It must be an integer with the range
     *     from minimum value getted by {@link #getMinSystemVolumePercentage} to 100.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed, including
     *     volumeType or percentage param being out of range.
     * @throws { BusinessError } 6800301 - Crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    setSystemVolumePercentage(volumeType: AudioVolumeType, percentage: int): Promise<void>;

    /**
     * Gets the minimum system volume percentage application can set for specified volume type.
     * @param { AudioVolumeType } volumeType - Audio volume type to get.
     * @returns { int } Returns the volume percentage, which is an interger with the range [0, 100].
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    getMinSystemVolumePercentage(volumeType: AudioVolumeType): int;

    /**
     * Checks whether the app volume is muted. If there are multiple callers setting muted states,
     * only when all callers cancel muted state the volume of this app will be truly unmuted.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { int } uid - App's uid.
     * @param { boolean } owned - If true is passed, the result will be indicated your owned muted state
     *     settings to this app. Otherwise if false is passed, the result will be indicated the real muted state.
     * @returns { Promise<boolean> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    isAppVolumeMutedForUid(uid: int, owned: boolean): Promise<boolean>;

    /**
     * Change mute state of specified application volume. If there are multiple callers setting muted states,
     * only when all callers cancel muted state the volume of this app will be truly unmuted.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { int } uid - App's uid.
     * @param { boolean } muted - Muted state to set.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    setAppVolumeMutedForUid(uid: int, muted: boolean): Promise<void>;

    /**
     * 获取应用的音量（范围为[0, 100]）。使用Promise异步回调。
     *
     * @returns { Promise<int> } Promise对象，返回应用的音量。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @atomicservice [since 23]
     * @since 19 dynamic
     * @since 23 static
     */
    getAppVolumePercentage(): Promise<int>;

    /**
     * 设置应用的音量（范围为[0, 100]）。使用Promise异步回调。
     *
     * @param { int } volume - 要设置的音量值。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @atomicservice [since 23]
     * @since 19 dynamic
     * @since 23 static
     */
    setAppVolumePercentage(volume: int): Promise<void>;

    /**
     * Sets the volume for specific uid application. This method uses a promise to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { int } volume - Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume.
     * @param { int } callingUid - Uid of the stream owner.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    setSystemVolumeByUid(volumeType: AudioVolumeType, volume: int, callingUid: int): Promise<void>;

    /**
     * Obtains the volume of streams in specific uid application.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { int } callingUid - Uid of the stream owner.
     * @returns { int } Current system volume level.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getSystemVolumeByUid(volumeType: AudioVolumeType, callingUid: int): int;

    /**
     * 监听系统音量变化事件（当系统音量发生变化时触发）。使用callback异步回调。
     *
     * @param { 'volumeChange' } type - 事件回调类型，支持的事件为'volumeChange'，当系统音量发生变化时，触发该事件。
     * @param { Callback<VolumeEvent> } callback - 回调函数，返回变化后的音量信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamiconly
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#event:streamVolumeChange
     */
    on(type: 'volumeChange', callback: Callback<VolumeEvent>): void;

    /**
     * 取消监听系统音量变化事件。使用callback异步回调。
     *
     * @param { 'volumeChange' } type - 事件回调类型，支持的事件为'volumeChange'，当取消监听系统音量变化事件时，触发该事件。
     * @param { Callback<VolumeEvent> } callback - 回调函数，返回变化后的音量信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters missing;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 12 dynamiconly
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#event:streamVolumeChange
     */
    off(type: 'volumeChange', callback?: Callback<VolumeEvent>): void;

    /**
     * Listens for specified app volume change events.
     * The app volume may changed by {@link setAppVolumePercentageForUid}.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { 'appVolumeChangeForUid' } type - Type of the event to listen for. Only the
     *     appVolumeChangeForUid event is supported.
     * @param { int } uid - The app's uid.
     * @param { Callback<VolumeEvent> } callback - Callback used to get the app volume change event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 19 dynamic
     */
    on(type: 'appVolumeChangeForUid', uid: int, callback: Callback<VolumeEvent>): void;

    /**
     * Listens for specified app volume change events.
     * The app volume may changed by {@link setAppVolumePercentageForUid}.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { int } uid - The app's uid.
     * @param { Callback<VolumeEvent> } callback - Callback used to get the app volume change event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    onAppVolumeChangeForUid(uid: int, callback: Callback<VolumeEvent>): void;

    /**
     * Unsubscribes to the app volume change events..
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { 'appVolumeChangeForUid' } type - Type of the event to be unregistered. Only the appVolumeChangeForUid
     *     event is supported.
     * @param { Callback<VolumeEvent> } callback - Callback used to obtain the invoking volume change event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 19 dynamic
     */
    off(type: 'appVolumeChangeForUid', callback?: Callback<VolumeEvent>): void;

    /**
     * Unsubscribes to the app volume change events..
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { Callback<VolumeEvent> } [callback] - Callback used to obtain the invoking volume change event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    offAppVolumeChangeForUid(callback?: Callback<VolumeEvent>): void;

    /**
     * 监听当前应用的应用级音量变化事件（当应用级音量发生变化时触发）。使用callback异步回调。
     *
     * @param { 'appVolumeChange' } type - 事件回调类型，支持的事件为'appVolumeChange'，当应用级音量发生变化时，触发该事件。
     * @param { Callback<VolumeEvent> } callback - 回调函数，返回变化后的音量信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     */
    on(type: 'appVolumeChange', callback: Callback<VolumeEvent>): void;

    /**
     * Listens for app volume change events. The app volume may changed by your called {@link setAppVolumePercentage}
     * or other system settings.
     * @param { Callback<VolumeEvent> } callback - Callback used to get the app volume change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    onAppVolumeChange(callback: Callback<VolumeEvent>): void;

    /**
     * 取消监听当前应用的应用级音量变化事件。使用callback异步回调。
     *
     * @param { 'appVolumeChange' } type - 事件回调类型，支持的事件为'appVolumeChange'，当取消监听当前应用的应用级音量变化事件时，触发该事件。
     * @param { Callback<VolumeEvent> } callback - 回调函数，返回变化后的音量信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     */
    off(type: 'appVolumeChange', callback?: Callback<VolumeEvent>): void;

    /**
     * Unsubscribes to the app volume change events.
     * @param { Callback<VolumeEvent> } [callback] - Callback used to obtain the invoking volume change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    offAppVolumeChange(callback?: Callback<VolumeEvent>): void;

    /**
     * 订阅 活跃的音量类型 变化事件
     * @param { 'activeVolumeTypeChange' } type Type of the event to listen for.
     * Only the activeVolumeTypeChange event is supported.
     * @param { Callback<AudioVolumeType> } callback Callback used to return the active volume type.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     */
    on(type: 'activeVolumeTypeChange', callback: Callback<AudioVolumeType>): void;

    /**
     * Subscribes to active volume type changes.
     * @param { Callback<AudioVolumeType> } callback Callback used to return the active volume type.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    onActiveVolumeTypeChange(callback: Callback<AudioVolumeType>): void;

    /**
     * 取消订阅 活跃的音量类型 事件
     * @param { 'activeVolumeTypeChange' } type Type of the event to unregister.
     * Only the activeVolumeTypeChange event is supported.
     * @param { Callback<AudioVolumeType> } [callback] Callback used to return the active volume type.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     */
    off(type: 'activeVolumeTypeChange', callback?: Callback<AudioVolumeType>): void;

    /**
     * Unsubscribes from active volume type changes.
     * @param { Callback<AudioVolumeType> } [callback] Callback used to return the active volume type.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    offActiveVolumeTypeChange(callback?: Callback<AudioVolumeType>): void;

    /**
     * Subscribes to system volume percentage change events.
     * @param { Callback<VolumeEvent> } callback - Callback used to return the system volume percentage change event.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    onVolumePercentageChange(callback: Callback<VolumeEvent>): void;

    /**
     * Unsubscribes from system volume percentage change events.
     * @param { Callback<VolumeEvent> } [callback] - Callback used to return the system volume percentage change event.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    offVolumePercentageChange(callback?: Callback<VolumeEvent>): void;

    /**
     * Obtains the volume of a volume type.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { int } Current system volume level.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getSystemVolume(volumeType: AudioVolumeType): int;

    /**
     * Obtains the minimum volume allowed for a volume type.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { int } Min volume level.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getMinSystemVolume(volumeType: AudioVolumeType): int;

    /**
     * Obtains the maximum volume allowed for a volume type.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { int } Max volume level.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getMaxSystemVolume(volumeType: AudioVolumeType): int;

    /**
     * Checks whether a volume type is muted.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { boolean } The mute status of the volume type. The value true
     * means that the volume type is muted, and false means the opposite.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isSystemMuted(volumeType: AudioVolumeType): boolean;

    /**
     * Gets the volume db value that system calculate by volume type, volume level and device type.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { int } volumeLevel - Volume level to set.
     * @param { DeviceType } device - Output device type.
     * @returns { double } The system volume in dB.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getVolumeInUnitOfDb(volumeType: AudioVolumeType, volumeLevel: int, device: DeviceType): double;

    /**
     * Listens for system volume change events. This method uses a callback to get volume change events.
     * @param { 'systemVolumeChange' } type - Type of the event to listen for.
     * Only the systemVolumeChange event is supported.
     * @param { Callback<VolumeEvent> } callback - Callback used to get the system volume change event.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     */
    on(type: 'systemVolumeChange', callback: Callback<VolumeEvent>): void;

    /**
     * Listens for system volume change events. This method uses a callback to get volume change events.
     * @param { Callback<VolumeEvent> } callback - Callback used to get the system volume change event.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    onSystemVolumeChange(callback: Callback<VolumeEvent>): void;

    /**
     * Unsubscribes to the system volume change events.
     * @param { 'systemVolumeChange' } type - Type of the event to be unregistered.
     * Only the systemVolumeChange event is supported.
     * @param { Callback<VolumeEvent> } [callback] - Callback used to obtain the invoking volume change event.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     */
    off(type: 'systemVolumeChange', callback?: Callback<VolumeEvent>): void;

    /**
     * Unsubscribes to the system volume change events.
     * @param { Callback<VolumeEvent> } [callback] - Callback used to obtain the invoking volume change event.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    offSystemVolumeChange(callback?: Callback<VolumeEvent>): void;

    /**
     * 订阅系统音量变化事件。当系统体积为目标时
     * 系统卷过滤器更改，已注册的客户端将收到回调。
     *
     * @param { SystemVolumeFilter } filter - 系统音量变化的过滤器。
     * @param { Callback<VolumeEvent> } callback - 回调用于接收系统音量的变化。
     * @throws { BusinessError } 202 - Not a system app.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onSystemVolumeChangeByFilter(filter: SystemVolumeFilter, callback: Callback<VolumeEvent>): void;

    /**
     * 取消订阅系统音量变化事件。
     *
     * @param { Callback<VolumeEvent> } [callback] - 订阅中使用的回调。
     * @throws { BusinessError } 202 - Not system app.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offSystemVolumeChangeByFilter(callback?: Callback<VolumeEvent>): void;

    /**
     * 获取指定音频流的音量。
     *
     * @param { StreamUsage } streamUsage - 需要获取音量值的音频流。
     * @returns { int } 音量值。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @atomicservice [since 23]
     * @since 20 dynamic
     * @since 23 static
     */
    getVolumeByStream(streamUsage: StreamUsage): int;

    /**
     * 获取指定音频流的最小音量。
     *
     * @param { StreamUsage } streamUsage - 需要获取的最小音量值的音频流。
     * @returns { int } 音量值。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @atomicservice [since 23]
     * @since 20 dynamic
     * @since 23 static
     */
    getMinVolumeByStream(streamUsage: StreamUsage): int;

    /**
     * 获取指定音频流的最大音量。
     *
     * @param { StreamUsage } streamUsage - 需要获取的最大音量值的音频流。
     * @returns { int } 音量值。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @atomicservice [since 23]
     * @since 20 dynamic
     * @since 23 static
     */
    getMaxVolumeByStream(streamUsage: StreamUsage): int;

    /**
     * 检查指定音频流是否静音。
     *
     * @param { StreamUsage } streamUsage - 检查是否为静音的音频流。
     * @returns { boolean } 音频流是否为静音状态，true表示音频流已静音，false表示音频流未静音。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     * @since 23 static
     */
    isSystemMutedForStream(streamUsage: StreamUsage): boolean;

    /**
     * 获取系统通过音频流、音量等级和设备类型计算出的音量dB值。
     *
     * @param { StreamUsage } streamUsage - 音频流。
     * @param { int } volumeLevel - 音量等级。
     * @param { DeviceType } device - 设备类型。
     * @returns { double } 音频流的音量dB值。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     * @since 23 static
     */
    getVolumeInUnitOfDbByStream(streamUsage: StreamUsage, volumeLevel: int, device: DeviceType): double;

    /**
     * Obtains system supported volume types.
     * @returns { Array<Readonly<AudioVolumeType>> } Return the system volume type array.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getSupportedAudioVolumeTypes(): Array<Readonly<AudioVolumeType>>;

    /**
     * Obtains volume type by stream type.
     * @param { StreamUsage } streamUsage - Audio stream type.
     * @returns { AudioVolumeType } Return the audio volume type.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getAudioVolumeTypeByStreamUsage(streamUsage: StreamUsage): AudioVolumeType;

    /**
     * Obtains stream types by volume type.
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @returns { StreamUsageArray } Return the audio stream types.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getStreamUsagesByVolumeType(volumeType: AudioVolumeType): StreamUsageArray;

    /**
     * 监听系统音频流音量变化事件（当系统音频流音量发生变化时触发）。使用callback异步回调。
     *
     * @param { 'streamVolumeChange' } type - 事件回调类型，支持的事件为'streamVolumeChange'，当系统音量发生变化时，触发该事件。
     * @param { StreamUsage } streamUsage - 音频流使用类型。
     * @param { Callback<StreamVolumeEvent> } callback - 回调函数，返回变化后的音量信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     */
    on(type: 'streamVolumeChange', streamUsage: StreamUsage, callback: Callback<StreamVolumeEvent>): void;

    /**
     * Listens for stream volume change events. This method uses a callback to get volume change events.
     * @param { StreamUsage } streamUsage - StreamUsage to be listened.
     * @param { Callback<StreamVolumeEvent> } callback - Callback used to get the stream volume change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    onStreamVolumeChange(streamUsage: StreamUsage, callback: Callback<StreamVolumeEvent>): void;

    /**
     * 取消监听系统音频流音量变化事件（当系统音频流音量发生变化时触发）。使用callback异步回调。
     *
     * @param { 'streamVolumeChange' } type - 事件回调类型，支持的事件为'streamVolumeChange'，当取消监听系统音量变化事件时，触发该事件。
     * @param { Callback<StreamVolumeEvent> } [callback] - 回调函数，返回变化后的音量信息。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     */
    off(type: 'streamVolumeChange', callback?: Callback<StreamVolumeEvent>): void;

    /**
     * Unsubscribes to the stream volume change events.
     * @param { Callback<StreamVolumeEvent> } [callback] - Callback used to obtain the invoking volume change event.
     *     If there is no callback parameter, all callbacks will be unregistered.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    offStreamVolumeChange(callback?: Callback<StreamVolumeEvent>): void;

    /**
     * Interface for forcibly setting the volume type by pressing the volume key.
     * @permission ohos.permission.MODIFY_AUDIO_SETTINGS
     * @param { AudioVolumeType } volumeType - Audio volume type
     *     that the application expects to control using the volume key.
     * @param { int } duration - Duration for continuing to control the volume type when no key is pressed.
     *     The forced volume type setting is released when the timer expires. Unit is second, the maximum
     *     duration is 10 seconds.
     *     If the duration is set to -1, the setting is canceled.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    forceVolumeKeyControlType(volumeType: AudioVolumeType, duration: int): void;

    /**
     * 获取当前音频流的音量信息。
     *
     * @returns { ActiveStreamsVolumeInfoArray } Returns the result.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800301 - System error, crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    getActiveStreamsVolumeInfo(): ActiveStreamsVolumeInfoArray;
  }

  /**
   * 管理音频组音量。
   * 
   * 在使用AudioVolumeGroupManager的接口之前，需先通过
   * [getVolumeGroupManager]{@link audio.AudioVolumeManager.getVolumeGroupManager(groupId: int, callback: AsyncCallback<AudioVolumeGroupManager>)}
   * 获取AudioVolumeGroupManager实例。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 9开始支持。
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AudioVolumeGroupManager {
    /**
     * Sets the volume for a stream. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { int } volume - Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    setVolume(volumeType: AudioVolumeType, volume: int, callback: AsyncCallback<void>): void;
    /**
     * Sets the volume for a stream. This method uses a promise to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { int } volume - Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    setVolume(volumeType: AudioVolumeType, volume: int): Promise<void>;

    /**
     * Sets the volume for a stream. This method uses a promise to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { int } volume - Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume.
     * @param { int } flags - volume flags used to enable different operations, can be union of {@link VolumeFlag}
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setVolumeWithFlag(volumeType: AudioVolumeType, volume: int, flags: int): Promise<void>;

    /**
     * Obtains the active volume type in the calling moment. This method returns in sync mode.
     * @param { int } uid - The target uid's active volume type or
     * 0 which means the global active volume type.
     * @returns { AudioVolumeType } Current active volume type.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters unspecified.
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    getActiveVolumeTypeSync(uid: int): AudioVolumeType;

    /**
     * 获取指定流的音量等级。使用callback异步回调。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { AsyncCallback<int> } callback - 回调函数。当获取指定流的音量成功，err为undefined，data为获取到的指定流的音量等级；否则为错误对象。指定流的音量等级范围可通过
     *     [getMinVolume]{@link audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     和
     *     [getMaxVolume]{@link audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     获取。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getVolumeByStream
     */
    getVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>): void;
    /**
     * 获取指定流的音量等级。使用Promise异步回调。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @returns { Promise<int> } Promise对象，返回指定流的音量等级。指定流的音量等级范围可通过
     *     [getMinVolume]{@link audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     和
     *     [getMaxVolume]{@link audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     获取。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getVolumeByStream
     */
    getVolume(volumeType: AudioVolumeType): Promise<int>;
    /**
     * 获取指定流的音量等级。同步返回结果。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @returns { int } 返回指定流的音量等级。指定流的音量等级范围可通过
     *     [getMinVolume]{@link audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     和
     *     [getMaxVolume]{@link audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     获取。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getVolumeByStream
     */
    getVolumeSync(volumeType: AudioVolumeType): int;

    /**
     * 获取指定流的最小音量等级。使用callback异步回调。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { AsyncCallback<int> } callback - 回调函数。当获取指定流的最小音量成功，err为undefined，data为获取到的指定流的最小音量等级；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getMinVolumeByStream
     */
    getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>): void;
    /**
     * 获取指定流的最小音量等级。使用Promise异步回调。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @returns { Promise<int> } Promise对象，返回最小音量等级。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getMinVolumeByStream
     */
    getMinVolume(volumeType: AudioVolumeType): Promise<int>;
    /**
     * 获取指定流的最小音量等级。同步返回结果。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @returns { int } 返回最小音量等级。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getMinVolumeByStream
     */
    getMinVolumeSync(volumeType: AudioVolumeType): int;

    /**
     * 获取指定流的最大音量等级。使用callback异步回调。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { AsyncCallback<int> } callback - 回调函数。当获取指定流的最大音量成功，err为undefined，data为获取到的指定流的最大音量等级；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getMaxVolumeByStream
     */
    getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>): void;
    /**
     * 获取指定流的最大音量等级。使用Promise异步回调。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @returns { Promise<int> } Promise对象，返回最大音量等级。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getMaxVolumeByStream
     */
    getMaxVolume(volumeType: AudioVolumeType): Promise<int>;
    /**
     * 获取指定流的最大音量等级。同步返回结果。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @returns { int } 返回最大音量等级。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getMaxVolumeByStream
     */
    getMaxVolumeSync(volumeType: AudioVolumeType): int;

    /**
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { boolean } mute - Mute status to set. The value true means to mute the stream, and false means the opposite.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    mute(volumeType: AudioVolumeType, mute: boolean, callback: AsyncCallback<void>): void;
    /**
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { boolean } mute - Mute status to set. The value true means to mute the stream, and false means the opposite.
     * @returns { Promise<void> }      * @syscap SystemCapability.Multimedia.Audio.Volume
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    mute(volumeType: AudioVolumeType, mute: boolean): Promise<void>;

    /**
     * 获取指定音量流静音状态。使用callback异步回调。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当获取指定音量流静音状态成功，err为undefined，data为true表示静音，false表示非静音；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#isSystemMutedForStream
     */
    isMute(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void;
    /**
     * 获取指定音量流是否被静音。使用Promise异步回调。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @returns { Promise<boolean> } Promise对象。返回true表示静音；返回false表示非静音。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#isSystemMutedForStream
     */
    isMute(volumeType: AudioVolumeType): Promise<boolean>;
    /**
     * 获取指定音量流是否被静音。同步返回结果。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @returns { boolean } 流静音状态。返回true表示静音，返回false表示非静音。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#isSystemMutedForStream
     */
    isMuteSync(volumeType: AudioVolumeType): boolean;

    /**
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioRingMode } mode - Ringer mode.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    setRingerMode(mode: AudioRingMode, callback: AsyncCallback<void>): void;
    /**
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioRingMode } mode - Ringer mode.
     * @returns { Promise<void> }      * @syscap SystemCapability.Multimedia.Audio.Volume
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    setRingerMode(mode: AudioRingMode): Promise<void>;

    /**
     * 获取铃声模式。使用callback异步回调。
     *
     * @param { AsyncCallback<AudioRingMode> } callback - 回调函数。当获取铃声模式成功，err为undefined，data为获取到的铃声模式；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getRingerMode(callback: AsyncCallback<AudioRingMode>): void;
    /**
     * 获取铃声模式。使用Promise异步回调。
     *
     * @returns { Promise<AudioRingMode> } Promise对象，返回系统的铃声模式。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getRingerMode(): Promise<AudioRingMode>;
    /**
     * 获取铃声模式。同步返回结果。
     *
     * @returns { AudioRingMode } 返回系统的铃声模式。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getRingerModeSync(): AudioRingMode;

    /**
     * 监听铃声模式变化事件（当[AudioRingMode]{@link audio.AudioRingMode}发生变化时触发）。使用callback异步回调。
     *
     * @param { 'ringerModeChange' } type - 事件回调类型，支持的事件为'ringerModeChange'，当铃声模式发生变化时，触发该事件。
     * @param { Callback<AudioRingMode> } callback - 回调函数，返回变化后的铃音模式。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamic
     */
    on(type: 'ringerModeChange', callback: Callback<AudioRingMode>): void;

    /**
     * Listens for ringer mode change events. This method uses a callback to get ringer mode changes.
     * @param { Callback<AudioRingMode> } callback - Callback used to get the updated ringer mode.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    onRingerModeChange(callback: Callback<AudioRingMode>): void;

    /**
     * 取消监听铃声模式变化事件。使用callback异步回调。
     *
     * @param { 'ringerModeChange' } type - 事件回调类型，支持的事件为'ringerModeChange'，当取消监听铃声模式变化事件时，触发该事件。
     * @param { Callback<AudioRingMode> } callback - 回调函数，返回变化后的铃音模式。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 18 dynamic
     */
    off(type: 'ringerModeChange', callback?: Callback<AudioRingMode>): void;

    /**
     * Unsubscribes to the ringer mode state change events.
     * @param { Callback<AudioRingMode> } [callback] - Callback used to get the updated ringer mode.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    offRingerModeChange(callback?: Callback<AudioRingMode>): void;

    /**
     * 设置麦克风静音状态。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃。
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { boolean } mute - 是否设置麦克风为静音状态。true表示静音，false表示非静音。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置麦克风静音状态成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    setMicrophoneMute(mute: boolean, callback: AsyncCallback<void>): void;
    /**
     * 设置麦克风静音状态。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃。
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { boolean } mute - 是否设置麦克风为静音状态。true表示静音，false表示非静音。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    setMicrophoneMute(mute: boolean): Promise<void>;

    /**
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { boolean } mute - Mute status to set. The value true means to mute the microphone, and false means the opposite.
     * @returns { Promise<void> }      * @throws { BusinessError } 201
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setMicMute(mute: boolean): Promise<void>;

    /**
     *
     * @permission ohos.permission.MICROPHONE_CONTROL
     * @param { boolean } mute - Mute status to set. The value true means to mute the microphone, and false means the opposite.
     * @param { PolicyType } type - Mute status to set. This value represents the caller's type such as EDM or privacy.
     * @returns { Promise<void> }      * @throws { BusinessError } 201
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters missing.
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setMicMutePersistent(mute: boolean, type: PolicyType): Promise<void>;

    /**
     *
     * @permission ohos.permission.MICROPHONE_CONTROL
     * @returns { boolean }      * @throws { BusinessError } 201
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isPersistentMicMute(): boolean;

    /**
     * 获取麦克风静音状态。使用callback异步回调。
     *
     * @param { AsyncCallback<boolean> } callback - 回调函数。当获取麦克风静音状态成功，err为undefined，data为true表示静音，false表示非静音；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    isMicrophoneMute(callback: AsyncCallback<boolean>): void;
    /**
     * 获取麦克风静音状态。使用Promise异步回调。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示麦克风被静音；返回false表示麦克风未被静音。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    isMicrophoneMute(): Promise<boolean>;
    /**
     * 获取麦克风静音状态。同步返回结果。
     *
     * @returns { boolean } 系统麦克风静音状态。返回true表示静音，返回false表示非静音。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    isMicrophoneMuteSync(): boolean;

    /**
     * 监听系统麦克风状态更改事件（当检测到系统麦克风状态发生改变时触发）。使用callback异步回调。
     * 
     * 目前此订阅接口在单进程多AudioManager实例的使用场景下，仅最后一个实例的订阅生效，其他实例的订阅会被覆盖（即使最后一个实例没有进行订阅）。因此，推荐使用单一AudioManager实例进行开发。
     *
     * @param { 'micStateChange' } type - 事件回调类型，支持的事件为'micStateChange'，当检测到系统麦克风状态发生改变时，触发该事件。
     * @param { Callback<MicStateChangeEvent> } callback - 回调函数，返回变更后的麦克风状态。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamic
     */
    on(type: 'micStateChange', callback: Callback<MicStateChangeEvent>): void;

    /**
     * Listens for system microphone state change events. This method uses a callback to get microphone change events.
     * @param { Callback<MicStateChangeEvent> } callback - Callback used to get the system microphone state change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    onMicStateChange(callback: Callback<MicStateChangeEvent>): void;

    /**
     * 取消监听系统麦克风状态更改事件。使用callback异步回调。
     *
     * @param { 'micStateChange' } type - 事件回调类型，支持的事件为'micStateChange'，当取消监听系统麦克风状态更改事件时，触发该事件。
     * @param { Callback<MicStateChangeEvent> } callback - 回调函数，返回变更后的麦克风状态。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters missing;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 12 dynamic
     */
    off(type: 'micStateChange', callback?: Callback<MicStateChangeEvent>): void;

    /**
     * Unsubscribes to the microphone state change events.
     * @param { Callback<MicStateChangeEvent> } [callback] - Callback used to get the system microphone state change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    offMicStateChange(callback?: Callback<MicStateChangeEvent>): void;

    /**
     * 获取固定音量模式开关状态，打开时进入固定音量模式，此时音量固定无法被调节。同步返回结果。
     *
     * @returns { boolean } 固定音量模式开关状态。返回true表示固定音量模式，返回false表示非固定音量模式。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    isVolumeUnadjustable(): boolean;

    /**
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { VolumeAdjustType } adjustType - Volume adjustment type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @throws { BusinessError } 6800301 - System error. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    adjustVolumeByStep(adjustType: VolumeAdjustType, callback: AsyncCallback<void>): void;
    /**
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { VolumeAdjustType } adjustType - Volume adjustment type.
     * @returns { Promise<void> }      * @throws { BusinessError } 201
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    adjustVolumeByStep(adjustType: VolumeAdjustType): Promise<void>;

    /**
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { VolumeAdjustType } adjustType - Volume adjustment type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @throws { BusinessError } 6800301 - System error. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    adjustSystemVolumeByStep(volumeType: AudioVolumeType, adjustType: VolumeAdjustType, callback: AsyncCallback<void>): void;
    /**
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { VolumeAdjustType } adjustType - Volume adjustment type.
     * @returns { Promise<void> }      * @throws { BusinessError } 201
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    adjustSystemVolumeByStep(volumeType: AudioVolumeType, adjustType: VolumeAdjustType): Promise<void>;

    /**
     * 获取音量增益dB值。使用callback异步回调。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { int } volumeLevel - 音量等级。
     * @param { DeviceType } device - 设备类型。
     * @param { AsyncCallback<double> } callback - 回调函数。当获取音量增益dB值成功，err为undefined，data为获取到的音量增益dB值；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @throws { BusinessError } 6800301 - System error. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getVolumeInUnitOfDbByStream
     */
    getSystemVolumeInDb(volumeType: AudioVolumeType, volumeLevel: int, device: DeviceType, callback: AsyncCallback<double>): void;
    /**
     * 获取音量增益dB值。使用Promise异步回调。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { int } volumeLevel - 音量等级。
     * @param { DeviceType } device - 设备类型。
     * @returns { Promise<double> } Promise对象，返回对应的音量增益dB值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getVolumeInUnitOfDbByStream
     */
    getSystemVolumeInDb(volumeType: AudioVolumeType, volumeLevel: int, device: DeviceType): Promise<double>;
    /**
     * 获取音量增益dB值。同步返回结果。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { int } volumeLevel - 音量等级。
     * @param { DeviceType } device - 设备类型。
     * @returns { double } 返回对应的音量增益dB值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getVolumeInUnitOfDbByStream
     */
    getSystemVolumeInDbSync(volumeType: AudioVolumeType, volumeLevel: int, device: DeviceType): double;

    /**
     * 获取输入设备音频流的最大电平值，取值范围为[0, 1]。使用Promise异步回调。
     *
     * @param { AudioDeviceDescriptor } inputDevice - 获取最大电平值的设备信息。
     * @returns { Promise<double> } Promise对象，返回对应设备的电平值，大小在[0, 1]之间。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 12 dynamic
     * @since 23 static
     */
    getMaxAmplitudeForInputDevice(inputDevice: AudioDeviceDescriptor): Promise<double>;
    /**
     * 获取输出设备音频流的最大电平值，取值范围为[0, 1]。使用Promise异步回调。
     *
     * @param { AudioDeviceDescriptor } outputDevice - 获取最大电平值的设备信息。
     * @returns { Promise<double> } Promise对象，返回对应设备的电平值，大小在[0, 1]之间。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 12 dynamic
     * @since 23 static
     */
    getMaxAmplitudeForOutputDevice(outputDevice: AudioDeviceDescriptor): Promise<double>;
  }

  /**
   * 枚举空间音频源类型。
   *
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum SpatialAudioSourceType {
    /**
     * 立体声源类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    SPATIAL_AUDIO_SOURCE_TYPE_STEREO = 0,

    /**
     * 音频源类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    SPATIAL_AUDIO_SOURCE_TYPE_AUDIO_VIVID = 1,

    /**
     * 多通道源类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    SPATIAL_AUDIO_SOURCE_TYPE_MULTI_CHANNEL = 2
  }

  /**
   * This interface is used to notify the listener of any device Spatialization or Head Tracking enable
   * or Adaptive Spatial Rendering state change.
   * @interface AudioSpatialEnabledStateForDevice
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioSpatialEnabledStateForDevice {
    /**
     * Audio device description.
     * @type { AudioDeviceDescriptor }
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    deviceDescriptor: AudioDeviceDescriptor;
    /**
     * Spatialization or Head Tracking or Adaptive Spatial Rendering enable state.
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    enabled: boolean;
  }

  /**
   * 通知监听器开启个性化空间
   * 任何设备的状态变化。
   *
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AudioPersonalizedSpatialEnabledChangeForAnyDevice {
    /**
     * 音频设备描述。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceDescriptor: AudioDeviceDescriptor;

    /**
     * 个性化空间化使能状态。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enabled: boolean;
  }

  /**
   * 匿名的HRTF文件描述符，用于跨进程传输。
   *
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AudioHRTFAnonymousDescriptor {
    /**
     * 个人化HRTF的文件描述符。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    fd: int;

    /**
     * 个人化HRTF数据的总大小（以字节为单位）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    length: long;
  }

  /**
   * 空间音频管理。
   * 
   * 在使用AudioSpatializationManager的接口之前，需先通过
   * [getSpatializationManager]{@link audio.AudioManager.getSpatializationManager}获取AudioSpatializationManager实例。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 18开始支持。
   *
   * @typedef AudioSpatializationManager
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @since 18 dynamic
   * @since 23 static
   */
  interface AudioSpatializationManager {
    /**
     * Checks whether spatialization is supported by system.
     * @returns { boolean } Whether spatialization is supported by system.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isSpatializationSupported(): boolean;

    /**
     * Checks whether spatialization is supported by the specified device.
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @returns { boolean } Whether spatialization is supported by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isSpatializationSupportedForDevice(deviceDescriptor: AudioDeviceDescriptor): boolean;

    /**
     * Checks whether head tracking is supported by system.
     * @returns { boolean } Whether head tracking is supported by system.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isHeadTrackingSupported(): boolean;

    /**
     * Checks whether head tracking is supported by the specified device.
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @returns { boolean } Whether head tracking is supported by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isHeadTrackingSupportedForDevice(deviceDescriptor: AudioDeviceDescriptor): boolean;

    /**
     * 检查系统是否支持个性化空间化。
     *
     * @returns { boolean } Whether personalized spatialization is supported by system.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isPersonalizedSpatializationSupported(): boolean;

    /**
     * Sets the spatialization enabled or disabled. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enable - Spatialization enable state.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by callback.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#setSpatializationEnabled
     */
    setSpatializationEnabled(enable: boolean, callback: AsyncCallback<void>): void;
    /**
     * Sets the spatialization enabled or disabled. This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enable - Spatialization enable state.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by promise.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#setSpatializationEnabled
     */
    setSpatializationEnabled(enable: boolean): Promise<void>;
    /**
     * Sets the spatialization enabled or disabled by the specified device.
     * This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @param { boolean } enabled - Spatialization enable state.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by promise.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setSpatializationEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean): Promise<void>;

    /**
     * Checks whether the spatialization is enabled.
     * @returns { boolean } Whether the spatialization is enabled.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#isSpatializationEnabled
     */
    isSpatializationEnabled(): boolean;
    /**
     * Checks whether the spatialization is enabled by the specified device.
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @returns { boolean } Whether the spatialization is enabled by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isSpatializationEnabled(deviceDescriptor: AudioDeviceDescriptor): boolean;

    /**
     * Subscribes to the spatialization enable state change events. When the spatialization enable state changes,
     * registered clients will receive the callback.
     * @param { 'spatializationEnabledChange' } type - Type of the event to listen for.
     * @param { Callback<boolean> } callback - Callback used to get the spatialization enable state.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#on
     */
    on(type: 'spatializationEnabledChange', callback: Callback<boolean>): void;
    /**
     * Subscribes to the spatialization enable state change events by the specified device.
     * When the spatialization enable state changes, registered clients will receive the callback.
     * @param { 'spatializationEnabledChangeForAnyDevice' } type - Type of the event to listen for.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the spatialization enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'spatializationEnabledChangeForAnyDevice', callback: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Subscribes to the spatialization enable state change events by the specified device.
     * When the spatialization enable state changes, registered clients will receive the callback.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the
     *     spatialization enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 23 static
     */
    onSpatializationEnabledChangeForAnyDevice(callback: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Unsubscribes to the spatialization enable state change events.
     * @param { 'spatializationEnabledChange' } type - Type of the event to listen for.
     * @param { Callback<boolean> } callback - Callback used to get the spatialization enable state.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#off
     */
    off(type: 'spatializationEnabledChange', callback?: Callback<boolean>): void;
    /**
     * Unsubscribes to the spatialization enable state change events by the specified device.
     * @param { 'spatializationEnabledChangeForAnyDevice' } type - Type of the event to listen for.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the spatialization enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'spatializationEnabledChangeForAnyDevice', callback?: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Unsubscribes to the spatialization enable state change events by the specified device.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } [callback] - Callback used to get the
     *     spatialization enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 23 static
     */
    offSpatializationEnabledChangeForAnyDevice(callback?: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Sets the head tracking enabled or disabled. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enable - Head tracking enable state.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by callback.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#setHeadTrackingEnabled
     */
    setHeadTrackingEnabled(enable: boolean, callback: AsyncCallback<void>): void;
    /**
     * Sets the head tracking enabled or disabled. This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enable - Head tracking enable state.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by promise.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#setHeadTrackingEnabled
     */
    setHeadTrackingEnabled(enable: boolean): Promise<void>;
    /**
     * Sets the head tracking enabled or disabled by the specified device.
     * This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @param { boolean } enabled - Head tracking enable state.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by promise.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setHeadTrackingEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean): Promise<void>;

    /**
     * Checks whether the head tracking is enabled.
     * @returns { boolean } Whether the head tracking is enabled.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#isHeadTrackingEnabled
     */
    isHeadTrackingEnabled(): boolean;
    /**
     * Checks whether the head tracking is enabled by the specified device.
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @returns { boolean } Whether the head tracking is enabled by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isHeadTrackingEnabled(deviceDescriptor: AudioDeviceDescriptor): boolean;

    /**
     * Subscribes to the head tracking enable state change events. When the head tracking enable state changes,
     * registered clients will receive the callback.
     * @param { 'headTrackingEnabledChange' } type - Type of the event to listen for.
     * @param { Callback<boolean> } callback - Callback used to get the head tracking enable state.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#on
     */
    on(type: 'headTrackingEnabledChange', callback: Callback<boolean>): void;
    /**
     * Subscribes to the head tracking enable state change events by the specified device.
     * When the head tracking enable state changes, registered clients will receive the callback.
     * @param { 'headTrackingEnabledChangeForAnyDevice' } type - Type of the event to listen for.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the head tracking enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'headTrackingEnabledChangeForAnyDevice', callback: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Subscribes to the head tracking enable state change events by the specified device.
     * When the head tracking enable state changes, registered clients will receive the callback.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the head
     *     tracking enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 23 static
     */
    onHeadTrackingEnabledChangeForAnyDevice(callback: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Unsubscribes to the head tracking enable state change events.
     * @param { 'headTrackingEnabledChange' } type - Type of the event to listen for.
     * @param { Callback<boolean> } callback - Callback used to get the head tracking enable state.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#off
     */
    off(type: 'headTrackingEnabledChange', callback?: Callback<boolean>): void;
    /**
     * Unsubscribes to the head tracking enable state change events by the specified device.
     * @param { 'headTrackingEnabledChangeForAnyDevice' } type - Type of the event to listen for.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the head tracking enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'headTrackingEnabledChangeForAnyDevice', callback?: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Unsubscribes to the head tracking enable state change events by the specified device.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } [callback] - Callback used to get
     *     the head tracking enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 23 static
     */
    offHeadTrackingEnabledChangeForAnyDevice(callback?: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Updates the spatial device state.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioSpatialDeviceState } spatialDeviceState - Spatial device state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    updateSpatialDeviceState(spatialDeviceState: AudioSpatialDeviceState): void;

    /**
     * Set spatialization rendering scene type.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioSpatializationSceneType } spatializationSceneType - Spatialization scene type.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setSpatializationSceneType(spatializationSceneType: AudioSpatializationSceneType): void;

    /**
     * Get spatialization rendering scene type.
     * @returns { AudioSpatializationSceneType } Current spatialization rendering scene type.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getSpatializationSceneType(): AudioSpatializationSceneType;

    /**
     * 获取当前设备空间音频渲染是否开启。同步返回结果。
     *
     * @returns { boolean } 当前设备空间音频渲染是否开启。true表示开启，false表示未开启。
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     * @since 23 static
     */
    isSpatializationEnabledForCurrentDevice(): boolean;

    /**
     * 监听当前设备空间音频渲染开关状态变化事件。使用callback异步回调。
     *
     * @param { 'spatializationEnabledChangeForCurrentDevice' } type - 事件回调类型，支持的事件为'
     *     spatializationEnabledChangeForCurrentDevice'，当空间音频渲染开关状态变化时，触发该事件。
     * @param { Callback<boolean> } callback - 回调函数。返回true表示打开空间音频渲染状态；返回false表示关闭空间音频渲染状态。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     */
    on(type: 'spatializationEnabledChangeForCurrentDevice', callback: Callback<boolean>): void;

    /**
     * Subscribes to the spatialization enable state change events by the current device.
     * When the spatialization enable state changes, registered clients will receive the callback.
     * @param { Callback<boolean> } callback - Callback used to get the spatialization enable state.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 23 static
     */
    onSpatializationEnabledChangeForCurrentDevice(callback: Callback<boolean>): void;

    /**
     * 取消监听当前设备空间音频渲染开关状态变化事件。使用callback异步回调。
     *
     * @param { 'spatializationEnabledChangeForCurrentDevice' } type - 事件回调类型，支持的事件为'
     *     spatializationEnabledChangeForCurrentDevice'，当取消订阅当前设备空间音频渲染开关状态变化事件时，触发该事件。
     * @param { Callback<boolean> } [callback] - 回调函数。返回true表示打开空间音频渲染状态；返回false表示关闭空间音频渲染状态。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     */
    off(type: 'spatializationEnabledChangeForCurrentDevice', callback?: Callback<boolean>): void;

    /**
     * Unsubscribes to the spatialization enable state change events by the current device.
     * @param { Callback<boolean> } [callback] - Callback used to get the spatialization enable state.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 23 static
     */
    offSpatializationEnabledChangeForCurrentDevice(callback?: Callback<boolean>): void;

    /**
     * Sets the adaptive spatial rendering enabled or disabled by the specified device.
     *     This method uses a promise to return the result.
     *     When the adaptive spatial rendering is enabled, spatial audio rendering will not take effect on stereo audio.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioDeviceDescriptor } deviceDescriptor - The target device
     *     to be set adaptive spatial rendering enabled.
     * @param { boolean } enabled - Adaptive spatial rendering enable state.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by promise.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 801 - Capability not supported on the device.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 24 dynamic&static
     */
    setAdaptiveSpatialRenderingEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean): Promise<void>;

    /**
     * Checks whether the adaptive spatial rendering is enabled by the specified device.
     *
     * @param { AudioDeviceDescriptor } deviceDescriptor - The target device
     *     to be check whether the adaptive spatial rendering is enabled.
     * @returns { boolean } Whether the adaptive spatial rendering is enabled by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 24 dynamic&static
     */
    isAdaptiveSpatialRenderingEnabled(deviceDescriptor: AudioDeviceDescriptor): boolean;

    /**
     * Subscribes to the adaptive spatial rendering enable state change events.
     * When the adaptive spatial rendering enable state changes, registered clients will receive the callback.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the adaptive spatial
     *     rendering enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 24 dynamic&static
     */
    onAdaptiveSpatialRenderingEnabledChangeForAnyDevice(callback: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Unsubscribes to the adaptive spatial rendering enable state change events.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } [callback] - Callback used to get the adaptive spatial
     *     rendering enable state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 24 dynamic&static
     */
    offAdaptiveSpatialRenderingEnabledChangeForAnyDevice(callback?: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * 检查指定设备是否启用了个性化空间。
     *
     * @param { AudioDeviceDescriptor } selectedAudioDevice - 音频设备描述。
     * @returns { boolean } Returns true if the personalized spatialization is successfully enabled,
     *     otherwise returns false.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isPersonalizedSpatializationEnabled(selectedAudioDevice: AudioDeviceDescriptor): boolean;

    /**
     * 设置由指定设备启用或禁用的个性化空间化。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioDeviceDescriptor } selectedAudioDevice - 音频设备描述。
     * @param { boolean } enable - 是否开启个性化空间化。
     * @returns { Promise<void> } Promise用于返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 801 - Capability is not supported in this device.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setPersonalizedSpatializationEnabled(selectedAudioDevice: AudioDeviceDescriptor,
      enable: boolean): Promise<void>;

    /**
     * 指定设备订阅个性化空间化使能状态变更事件。
     * 当状态发生变化时，已注册的客户端将收到回调。
     *
     * @param { Callback<AudioPersonalizedSpatialEnabledChangeForAnyDevice> } callback - 回调用于
     *     通过所述指定设备获取所述个性化空间化使能状态。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onPersonalizedSpatializationEnabledChangeForAnyDevice(
      callback: Callback<AudioPersonalizedSpatialEnabledChangeForAnyDevice>): void;

    /**
     * 取消订阅指定设备的个性化空间启用状态更改事件。
     * 当状态发生变化时，已注册的客户端将收到回调。
     *
     * @param { Callback<AudioPersonalizedSpatialEnabledChangeForAnyDevice> } [callback] - 回调用于通过所述指定设备获取所述个性化空间化使能状态。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offPersonalizedSpatializationEnabledChangeForAnyDevice(
      callback?: Callback<AudioPersonalizedSpatialEnabledChangeForAnyDevice>): void;

    /**
     * 从匿名文件描述符下载个性化HRTF数据。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioHRTFAnonymousDescriptor } hrtfDescriptor - 要下载的个性化HRTF数据描述符。
     * @returns { Promise<void> } 201 - 权限被拒绝。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 801 - Capability is not supported in this device.
     * @throws { BusinessError } 6800101 - Parameter verification failed, hrtfDescriptor is invalid.
     * @throws { BusinessError } 6800105 - Time out when saving HRTF on disk.
     * @throws { BusinessError } 6800301 - System internal error, fail to save HRTF on disk, like service died.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    downloadPersonalizedHRTF(hrtfDescriptor: AudioHRTFAnonymousDescriptor): Promise<void>;

    /**
     * 查询当前空间音频源类型。
     *
     *
     * @returns { SpatialAudioSourceType } The spatial audio source type on the current device.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    getCurrentSpatialAudioSourceType(): SpatialAudioSourceType;

    /**
     * 订阅空间音源类型变化事件。当当前空间音源类型发生变化时，
     * 注册的客户端将收到回调。
     *
     * @param { Callback<SpatialAudioSourceType> } callback - 回调用于
     *     接收所述当前空间音源类型。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    onSpatialAudioSourceTypeChange(callback: Callback<SpatialAudioSourceType>): void;

    /**
     * 取消订阅空间音频源类型变更事件。
     *
     * @param { Callback<SpatialAudioSourceType> } [callback] - 回调用于
     *     接收当前空间音频源类型变化
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    offSpatialAudioSourceTypeChange(callback?: Callback<SpatialAudioSourceType>): void;
  }

  /**
   * 音频分离效果的音量类型。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AudioSeparationVolumeType {
    /**
     * 人声类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    VOLUME_TYPE_VOCAL = 0
  }

  /**
   * Implements audio effect management.
   * @typedef AudioEffectManager
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface AudioEffectManager {
    /**
     * Gets supported audio effect properties based on current devices.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @returns { Array<AudioEffectProperty> } Array of supported audio effect properties.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800301 - System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getSupportedAudioEffectProperty(): Array<AudioEffectProperty>;

    /**
     * Sets current audio effect properties.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { Array<AudioEffectProperty> } propertyArray - array of audio effect property to be set.
     * Notice that only one effect property name in each effect property category should be set.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Possible causes:
     *                                 1. More than one effect property name of the same effect property category are in the input array.
     *                                 2. The input audioEffectProperties are not supported by the current device.
     *                                 3. The name or catergory of the input audioEffectProperties is incorrect.
     * @throws { BusinessError } 6800301 - System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    setAudioEffectProperty(propertyArray: Array<AudioEffectProperty>): void;

    /**
     * Gets current audio effect properties.
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @returns { Array<AudioEffectProperty> } Array of current audio effect properties.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800301 - System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getAudioEffectProperty(): Array<AudioEffectProperty>;

    /**
     * 检查当前设备是否支持系统中的音频分离效果。
     *
     * @returns { boolean } 当前设备是否支持音频分离效果。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isAudioSeparationEffectSupported(): boolean;

    /**
     * 设置特定应用进程的音频分离效果开关。
     * 或用于特定的音频播放流。
     * 该接口使用promise返回结果。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enabled - 所需的效果状态，true表示启用，false表示禁用
     * @param { int } uid - 要添加效果的目标应用程序进程的uid。
     *     <br>取值限定为整数。
     * @param { long } [streamId] - 要添加效果的目标音频播放流的ID，播放应用程序
     *     可以使用{@link AudioRenderer#getAudioStreamId}来获取
     * @returns { Promise<void> } 不会返回任何值的Promise。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800104 - Effect is not supported in this device.
     * @throws { BusinessError } 6800301 - Audio service error occurs like service died.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setAudioSeparationEffectEnabled(enabled: boolean, uid: int, streamId?: long): Promise<void>;

    /**
     * 订阅系统音频分离效果使能状态变更事件。
     * 系统中的音频分离效果状态可由系统播放控制器应用设定，
     * 其他应用程序可以使用此函数来监听change事件。
     *
     * @param { Callback<boolean> } callback - 监听系统音频分离效果的回调
     *     启用状态更改事件
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onAudioSeparationEffectEnabledChange(callback: Callback<boolean>): void;

    /**
     * 去订阅系统音频分离效果使能状态变更事件。
     *
     * @param { Callback<boolean> } [callback] - 订阅函数中用于取消订阅的回调。
     *     如果不使用此参数，则之前在当前进程中订阅的所有回调都将被取消订阅
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offAudioSeparationEffectEnabledChange(callback?: Callback<boolean>): void;

    /**
     * 设置特定音量类型的音频分离效果音量。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioSeparationVolumeType } type - 要设置音量的类型
     * @param { double } volume - 目标卷值。
     *     <br>取值范围：[0,1]。
     *     <br>Value range: [0,1].
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800104 - Effect is not supported in this device.
     * @throws { BusinessError } 6800301 - Audio service error occurs like service died.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setAudioSeparationEffectVolume(type: AudioSeparationVolumeType, volume: double): Promise<void>;
  }

  /**
   * 定义系统录像控制器面板配置。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SystemRecordControllerConfig {
    /**
     * 系统使用它来确定应用程序的录制场景，根据
     * 应用程序期望用于流式传输的源类型，并为用户提供
     * 选择匹配降噪模式的能力。支持的源类型包括
     * {@link SourceType#Source_TYPE_MIC},{@link SourceType#Source_TYPE_CAMCORDER}，以及
     * {@link SourceType#Source_TYPE_LIVE}。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    sourceType: SourceType;
  }

  /**
   * 定义系统录像控制器状态改变时携带的信息。
   * 它包括启用状态、应用程序UID和预期的音频源类型。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SystemRecordControllerChangeInfo {
    /**
     * 是否启用系统录像控制器面板。
     * true表示启用面板，false表示禁用面板。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enabled: boolean;

    /**
     * 触发系统记录控制器状态更改的应用程序的UID。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uid?: int;

    /**
     * 启用录制控制器时由应用程序配置的预期音频源类型。
     * 用于匹配对应的录制场景和降噪模式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    sourceType?: SourceType;
  }

  /**
   * 提供录像策略管理，包括协同录音
   * 和录制控制能力。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AudioRecordingManager {
    /**
     * 启用或禁用系统录像控制器面板。
     * 应用程序在启动录制码流之前，可以调用此接口拉起录制控制器面板。
     * 允许用户完成录音设备或音效参数的选择。
     * 然后可以启动录音服务，避免在
     * 记录过程。
     * 应用程序必须在前台才能启用面板；启用操作不生效
     * 如果应用程序在后台。禁用面板不受应用程序的限制
     * 前台或后台状态。
     * 该接口使用promise返回结果。
     *
     * @param { boolean } show - 一个布尔值，指示是显示（true）还是隐藏(false)
     *     系统记录控制器面板
     * @param { SystemRecordControllerConfig } config - 系统录像控制器面板配置
     * @returns { Promise<void> } 不会返回任何值的Promise。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio service error occurs like service died.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enableSystemRecordController(show: boolean, config: SystemRecordControllerConfig): Promise<void>;

    /**
     * 订阅系统录像控制器面板使能状态变化事件。
     *
     * @param { Callback<SystemRecordControllerChangeInfo> } callback - 用于监听的回调
     *     系统记录控制器面板启用状态更改事件
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800102 - Memory allocation failed.
     * @throws { BusinessError } 6800301 - Audio service error occurs like service died.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onSystemRecordControllerEnabledChange(callback: Callback<SystemRecordControllerChangeInfo>): void;

    /**
     * 取消订阅系统录像控制器面板启用状态更改事件。
     *
     * @param { Callback<SystemRecordControllerChangeInfo> } [callback] - 订阅中使用的回调
     *     取消订阅功能。如果不使用此参数，则当前订阅的所有回调
     *     之前的流程将被取消订阅
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio service error occurs like service died.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offSystemRecordControllerEnabledChange(callback?: Callback<SystemRecordControllerChangeInfo>): void;
  }

  /**
   * 降噪模式枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum NoiseReductionMode {
    /**
     * 保真模式，无噪音消除。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FIDELITY = 0,

    /**
     * 风噪消除模式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PURE_VOCALS = 1,

    /**
     * 标准模式，弱降噪。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STANDARD = 2,
  }

  /**
   * Implements audio collaborative management.
   * @typedef AudioCollaborativeManager
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface AudioCollaborativeManager {
    /**
     * Checks whether the collaborative playback is supported by system.
     * @returns { boolean } Whether the collaborative playback is supported by system.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isCollaborativePlaybackSupported(): boolean;

    /**
     * 检查指定设备是否支持协同播放。
     *
     * @param { AudioDeviceDescriptor } deviceDescriptor - 用于查询的音频设备描述符。
     * @returns { boolean } Whether the collaborative playback is supported for the specified device.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isCollaborativePlaybackSupportedForDevice(deviceDescriptor: AudioDeviceDescriptor): boolean;

    /**
     * 设置使能或者关闭与指定设备协同播放。当前仅A2DP音频设备支持协同播放。如果系统当前正在使用指定的设备发声，调用此接口后，声音将从本地speaker和指定的设备上协同播放出来。
     *
     *
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device descriptor.
     * @param { boolean } enabled - Whether to enable or disable collaborative playback. The value true means to enable it, and false means to disable it.
     * @returns { Promise<void> } 设置结果
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Possible causes:
     *                               1. The specified device is not an A2DP device.
     *                               2. The specified device is not connected.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    setCollaborativePlaybackEnabledForDevice(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean): Promise<void>;

    /**
     * 检查指定设备的协同播放状态
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device descriptor.
     * @returns { boolean } 是否已经使能与指定的设备协同播放
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isCollaborativePlaybackEnabledForDevice(deviceDescriptor: AudioDeviceDescriptor): boolean;
  }

  /**
   * 实现音频调试功能。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AudioDebuggingManager {
    /**
     * 显示当前应用进程的完整运行时快照。
     *
     * @param { int } fd - fd为文件句柄，表示快照信息将要写入的位置。
     *     如果fd小于0，则将快照信息打印到运行日志中，否则快照将写入文件。
     *     取值限定为整数。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    printAppInfo(fd: int): void;

    /**
     * 打印目标音频渲染器实例的完整音频运行时快照。
     * 快照将包含流、管道、卷和设备信息。
     * 请注意，不同版本的信息详情和格式可能会有所不同，它只能用于
     * 手动调试，用户不应依赖实际功能实现或文件的信息
     * 内容提取。
     *
     * @param { AudioRenderer } renderer - 目标音频渲染器实例以打印快照。
     *     取值限定为整数。
     * @param { int } fd - fd是文件描述符，表示快照信息的位置
     *     写入到。如果fd小于0或无可写，则快照信息将打印到
     *     运行日志，否则快照将写入文件。
     *     取值限定为整数。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    printRendererInfo(renderer: AudioRenderer, fd: int): void;

    /**
     * 打印目标音频捕获程序实例的完整音频运行时快照。
     * 快照将包含流、管道、卷和设备信息。
     * 请注意，不同版本的信息详情和格式可能会有所不同，它只能用于
     * 手动调试，用户不应依赖实际功能实现或文件的信息
     * 内容提取。
     *
     * @param { AudioCapturer } capturer - 目标音频捕获程序实例以打印快照。
     *     取值限定为整数。
     * @param { int } fd - fd是文件描述符，表示快照信息的位置
     *     写入到。如果fd小于0或无可写，则快照信息将打印到
     *     运行日志，否则快照将写入文件。
     *     取值限定为整数。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    printCapturerInfo(capturer: AudioCapturer, fd: int): void;

    /**
     * 打印目标音频环回实例的完整音频运行时快照。
     * 快照将包含环回状态、设备和效果信息。
     * 请注意，不同版本的信息详情和格式可能会有所不同，它只能用于
     * 手动调试，用户不应依赖实际功能实现或文件的信息
     * 内容提取。
     *
     * @param { AudioLoopback } loopback - 目标音频环回实例以打印快照。
     *     取值限定为整数。
     * @param { int } fd - fd是文件描述符，表示快照信息的位置
     *     写入到。如果fd小于0或无可写，则快照信息将打印到
     *     运行日志，否则快照将写入文件。
     *     取值限定为整数。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    printLoopbackInfo(loopback: AudioLoopback, fd: int): void;

    /**
     * 打印目标音频会话管理器实例的完整音频运行时快照。
     * 快照将包含会话状态、场景、策略和设备信息。
     * 请注意，不同版本的信息详情和格式可能会有所不同，它只能用于
     * 手动调试，用户不应依赖实际功能实现或文件的信息
     * 内容提取。
     *
     * @param { AudioSessionManager } session - 目标音频会话管理器实例以打印快照。
     *     取值限定为整数。
     * @param { int } fd - fd是文件描述符，表示快照信息的位置
     *     写入到。如果fd小于0或无可写，则快照信息将打印到
     *     运行日志，否则快照将写入文件。
     *     取值限定为整数。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    printSessionInfo(session: AudioSessionManager, fd: int): void;
  }

  /**
   * Connect type for device.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum ConnectType {
    /**
     * Connect type for local device.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECT_TYPE_LOCAL = 1,

    /**
     * Connect type for distributed device.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECT_TYPE_DISTRIBUTED = 2
  }

  /**
   * Describes an audio volume group.
   * @typedef VolumeGroupInfo
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface VolumeGroupInfo {
    /**
     * Device network id.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly networkId: string;

    /**
     * Volume group id.
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly groupId: int;

    /**
     * Volume mapping group id.
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly mappingId: int;

    /**
     * Volume group name.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly groupName: string;

    /**
     * Connect type of device for this group.
     * @type { ConnectType }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly type: ConnectType;
  }

  /**
   * Array of VolumeGroupInfos, which is read-only.
   * @typedef { Array<Readonly<VolumeGroupInfo>> } VolumeGroupInfos
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  type VolumeGroupInfos = Array<Readonly<VolumeGroupInfo>>;

  /**
   * 数组类型，AudioRendererChangeInfo数组，只读。
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  type AudioRendererChangeInfoArray = Array<Readonly<AudioRendererChangeInfo>>;

  /**
   * 描述音频渲染器更改信息。
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AudioRendererChangeInfo {
    /**
     * 音频流唯一id。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly streamId: int;

    /**
     * Uid for audio renderer client application.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly clientUid: int;

    /**
     * 音频渲染器信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly rendererInfo: AudioRendererInfo;

    /**
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly rendererState: AudioState;

    /**
     * 音频设备描述。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly deviceDescriptors: AudioDeviceDescriptors;
  }

  /**
   * 数组类型，AudioCapturerChangeInfo数组，只读。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  type AudioCapturerChangeInfoArray = Array<Readonly<AudioCapturerChangeInfo>>;

  /**
   * 描述音频采集器更改信息。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AudioCapturerChangeInfo {
    /**
     * 音频流唯一id。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly streamId: int;

    /**
     * Uid for audio capturer client application.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly clientUid: int;

    /**
     * 音频采集器信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly capturerInfo: AudioCapturerInfo;

    /**
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly capturerState: AudioState;

    /**
     * 音频设备信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly deviceDescriptors: AudioDeviceDescriptors;

    /**
     * 音频采集器是否处于静音状态。true表示静音，false表示非静音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly muted?: boolean;
  }

  /**
   * 描述音频设备。
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  interface AudioDeviceDescriptor {
    /**
     * 设备角色。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly deviceRole: DeviceRole;

    /**
     * 设备类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly deviceType: DeviceType;

    /**
     * 唯一的设备id。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly id: int;

    /**
     * 设备名称。
     * 
     * 如果是蓝牙设备，需要申请权限ohos.permission.USE_BLUETOOTH。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly name: string;

    /**
     * 设备静态MAC地址。
     * 
     * 如果是蓝牙设备，需要申请权限ohos.permission.USE_BLUETOOTH。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly address: string;

    /**
     * 支持的采样率。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly sampleRates: Array<int>;

    /**
     * 支持的通道数。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly channelCounts: Array<int>;

    /**
     * 支持的通道掩码。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly channelMasks: Array<int>;
    /**
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly networkId: string;
    /**
     * Interrupt group id
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly interruptGroupId: int;
    /**
     * Volume group id
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly volumeGroupId: int;
    /**
     * 设备显示名。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly displayName: string;

    /**
     * 支持的编码类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly encodingTypes?: Array<AudioEncodingType>;

    /**
     * 设备是否支持空间音频。true表示支持空间音频，false表示不支持空间音频。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     * @since 23 static
     */
    readonly spatializationSupported?: boolean;

    /**
     * Only {@link DeviceType.SPEAKER} with networkId, {@link DeviceType.REMOTE_CAST}
     * or {@link DeviceType.REMOTE_DAUDIO} has dmDeviceType which indicated deviceTypeId.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    readonly dmDeviceType?: int;

    /**
     * Whether device supports high quality recording.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 21 dynamic
     * @since 24 static
     */
    readonly highQualityRecordingSupported?: boolean;

    /**
     * 设备的具体型号类别。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 22 dynamic
     * @since 23 static
     */
    readonly model?: string;

    /**
     * 设备支持的音频流能力。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 22 dynamic
     * @since 23 static
     */
    readonly capabilities?: Array<AudioStreamInfo>;

    /**
     * Extended information for distributed device, including whether the device supports
     * stereo, Device SN, etc.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly dmDeviceInfo?: string;
  }

  /**
   * 设备属性数组类型，为[AudioDeviceDescriptor]{@link audio.AudioDeviceDescriptor}的数组，只读。
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  type AudioDeviceDescriptors = Array<Readonly<AudioDeviceDescriptor>>;

  /**
   * 表示音量模式的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @since 19 dynamic
   * @since 23 static
   */
  enum AudioVolumeMode {
    /**
     * 系统级音量（默认模式）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     * @since 23 static
     */
    SYSTEM_GLOBAL = 0,
    /**
     * 应用级音量。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     * @since 23 static
     */
    APP_INDIVIDUAL = 1
  }

  /**
   * 音量改变时，应用接收到的事件。
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface VolumeEvent {
    /**
     * 音频音量类型。
     *
     * @type { AudioVolumeType }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamic
     * @since 23 static
     */
    volumeType: AudioVolumeType;
    /**
     * 音量等级，可设置范围通过调用getMinVolume和getMaxVolume方法获取。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    volume: int;
    /**
     * 是否在UI中显示音量变化。true表示显示，false表示不显示。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamic
     * @since 23 static
     */
    updateUi: boolean;
    /**
     * volumeGroup id
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    volumeGroupId: int;
    /**
     * Device network id
     * @type { string }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    networkId: string;
    /**
     * 音频的音量模式。默认值为SYSTEM_GLOBAL。
     *
     * @type { ?AudioVolumeMode }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     * @since 23 static
     */
    volumeMode?: AudioVolumeMode;

    /**
     * Volume percentage, which is an integer ranging from [0, 100].
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    percentage?: int;
  }

  /**
   * 音频流音量变化时，应用接收到的事件。
   *
   * @typedef StreamVolumeEvent
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @since 20 dynamic
   * @since 23 static
   */
  interface StreamVolumeEvent {
    /**
     * 音量发生变化的音频流。
     *
     * @type { StreamUsage }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     * @since 23 static
     */
    streamUsage: StreamUsage;
    /**
     * 音量值。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     * @since 23 static
     */
    volume: int;
    /**
     * 是否在UI上展示音量变化。true表示展示，false表示不展示。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     * @since 23 static
     */
    updateUi: boolean;
    /**
     * 变化前的音量值。
     *
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 dynamic&static
     */
    previousVolume?: int;
  }

  /**
   * 用于激活音频流的音量信息。
   *
   * @typedef ActiveStreamVolumeInfo
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface ActiveStreamVolumeInfo {
    /**
     * 当前音频流的音量类型。
     *
     * @type { AudioVolumeType }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    volumeType: AudioVolumeType;
    /**
     * 应用的音量。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    appVolume: int;
    /**
     * 音频应用的Uid。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    clientUid: int;
  }

  /**
   * ActiveStreamVolumeInfo数组。
   *
   * @typedef { Array<Readonly<ActiveStreamVolumeInfo>> }
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  type ActiveStreamsVolumeInfoArray = Array<Readonly<ActiveStreamVolumeInfo>>;

  /**
   * 系统音量过滤器信息。
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SystemVolumeFilter {
    /**
     * 应用程序uid。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uid: int;
  }

  /**
   * 音频打断/获取焦点事件的回调方法。
   *
   * @typedef InterruptAction
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimedia.audio.InterruptEvent
   */
  interface InterruptAction {

    /**
     * 事件返回类型。TYPE_ACTIVATED为焦点触发事件，TYPE_INTERRUPT为音频打断事件。
     *
     * @type { InterruptActionType }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptEvent#eventType
     */
    actionType: InterruptActionType;

    /**
     * 打断事件类型。
     *
     * @type { ?InterruptType }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptEvent#eventType
     */
    type?: InterruptType;

    /**
     * 打断事件提示。
     *
     * @type { ?InterruptHint }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptEvent#hintType
     */
    hint?: InterruptHint;

    /**
     * 焦点获取/释放是否成功。true表示焦点获取/释放成功，false表示焦点获得/释放失败。
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptEvent#hintType
     */
    activated?: boolean;
  }

  /**
   * 音频监听事件传入的参数。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，无替代接口。
   *
   * @typedef AudioInterrupt
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimedia.audio.AudioRendererOptions
   */
  interface AudioInterrupt {

    /**
     * 音频流使用类型。
     *
     * @type { StreamUsage }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRendererOptions#rendererInfo
     */
    streamUsage: StreamUsage;

    /**
     * 音频打断媒体类型。
     *
     * @type { ContentType }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRendererOptions#rendererInfo
     */
    contentType: ContentType;

    /**
     * 音频打断时是否可以暂停音频播放。true表示音频播放可以在音频打断期间暂停，false表示音频播放不可以在音频打断期间暂停。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptEvent#hintType
     */
    pauseWhenDucked: boolean;
  }

  /**
   * 麦克风状态变化时，应用接收到的事件。
   *
   * @typedef MicStateChangeEvent
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 9 dynamic
   * @since 23 static
   */
  interface MicStateChangeEvent {
    /**
     * 系统麦克风是否为静音状态。true表示静音，false表示非静音。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 9 dynamic
     * @since 23 static
     */
    mute: boolean;
  }
  /**
   * 描述设备连接状态变化和设备信息。
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  interface DeviceChangeAction {
    /**
     * 设备连接状态变化。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    type: DeviceChangeType;

    /**
     * 设备信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    deviceDescriptors: AudioDeviceDescriptors;
  }

  /**
   * 表示声道混合模式类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  enum ChannelBlendMode {
    /**
     * 无声道混合。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    MODE_DEFAULT = 0,
    /**
     * 混合左右声道。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    MODE_BLEND_LR = 1,
    /**
     * 从左声道覆盖到右声道混合。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    MODE_ALL_LEFT = 2,
    /**
     * 从右声道覆盖到左声道混合。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    MODE_ALL_RIGHT = 3
  }

  /**
   * 表示流设备变更原因的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  enum AudioStreamDeviceChangeReason {
    /**
     * 未知原因。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    REASON_UNKNOWN = 0,
    /**
     * 新设备可用。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    REASON_NEW_DEVICE_AVAILABLE = 1,
    /**
     * 旧设备不可用。报告此原因时，应考虑暂停音频播放。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    REASON_OLD_DEVICE_UNAVAILABLE = 2,
    /**
     * 强选。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    REASON_OVERRODE = 3,
    /**
     * 音频会话已激活。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    REASON_SESSION_ACTIVATED = 4,
    /**
     * 更高优先级的音频流出现导致的系统设备切换。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    REASON_STREAM_PRIORITY_CHANGED = 5
  }

  /**
   * 流设备变更时，应用接收到的事件。
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface AudioStreamDeviceChangeInfo {
    /**
     * 应用流设备变更前的设备信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    preDevices?: AudioDeviceDescriptors;
    /**
     * 设备信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    devices: AudioDeviceDescriptors;
    /**
     * 流设备变更原因。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    changeReason: AudioStreamDeviceChangeReason;
  }

  /**
   * 表示音频数据回调结果的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioDataCallbackResult {
    /**
     * 表示该回调数据无效。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    INVALID = -1,

    /**
     * 表示该回调数据有效。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    VALID = 0
  }

  /**
   * Audio render target.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  enum RenderTarget {
    /**
     * Playback. Under this target, the audio renderer will be played out. This is the default
     * target of audio renderer.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    PLAYBACK = 0,

    /**
     * Inject to voice communication capture. Under this target, the audio renderer will be injected
     * to audio capture with source type of {@link SourceType#SOURCE_TYPE_VOICE_COMMUNICATION} when the
     * audio scene is {@link AudioScene#AUDIO_SCENE_VOICE_CHAT}.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    INJECT_TO_VOICE_COMMUNICATION_CAPTURE = 1
  }

  /**
   * 表示音频时延类型的枚举。
   * 
   * | 名称 | 值 | 说明 |
   * | ---- | -- | ---- |
   * | LATENCY_TYPE_ALL | 0 | 计算包含软件和硬件在内的整体音频处理链路时延。 |
   * | LATENCY_TYPE_SOFTWARE | 1 | 计算软件侧时延，包含软件音效。 |
   * | LATENCY_TYPE_HARDWARE | 2 | 计算硬件侧时延，包含HAL、驱动和硬件。 |
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum AudioLatencyType {
    /**
     * Type to get latency of all audio processing units, including software and hardware.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LATENCY_TYPE_ALL = 0,

    /**
     * Type to get latency of software part, including audio effects in software.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LATENCY_TYPE_SOFTWARE = 1,

    /**
     * Type to get latency of hardware part, including audio effects in hal, driver and hardware.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LATENCY_TYPE_HARDWARE = 2
  }

  /**
   * 回调函数类型，用于音频渲染器的数据写入，回调函数结束后，音频服务会把data指向的数据放入队列里等待播放，因此请勿在回调外再次更改data指向的数据, 且务必保证往data填满待播放数据, 否则会导致音频服务播放杂音。
   *
   * @typedef { function } AudioRendererWriteDataCallback
   * @param { ArrayBuffer } data - 待写入缓冲区的数据。
   * @returns { AudioDataCallbackResult | void } 如果返回 void 或 AudioDataCallbackResult.VALID：表示数据有效，将播放音频数据；如果返回
   *     AudioDataCallbackResult.INVALID：表示数据无效，且音频数据不播放。
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @since 12 dynamic
   */
  type AudioRendererWriteDataCallback = (data: ArrayBuffer) => AudioDataCallbackResult | void;

  /**
   * Type definition of callback function for audio renderer write data.
   *
   * @typedef { function } AudioRendererWriteDataCallback
   * @param { ArrayBuffer } data - audio data array buffer.
   * @returns { AudioDataCallbackResult } result of callback. If AudioDataCallbackResult.VALID
   * is returned, it indicates the data is valid and will be played. If AudioDataCallbackResult.INVALID
   * is returned, it indicates the data is will not be played.
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @since 23 static
   */
  type AudioRendererWriteDataCallback = (data: ArrayBuffer) => AudioDataCallbackResult;

  /**
   * 音频流时间戳和当前数据帧位置信息。
   *
   * @typedef AudioTimestampInfo
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 19 dynamic
   * @since 23 static
   */
  interface AudioTimestampInfo {
    /**
     * 当前播放或者录制的数据帧位置。
     *
     * @type { long }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 19 dynamic
     * @since 23 static
     */
    readonly framePos: long;

    /**
     * 播放或者录制到当前数据帧位置时对应的时间戳，单位为纳秒。
     *
     * @type { long }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 19 dynamic
     * @since 23 static
     */
    readonly timestamp: long;
  }

  /**
   * 提供音频渲染的相关接口。
   * 
   * 在使用AudioRenderer的接口之前，需先通过[createAudioRenderer]{@link audio.createAudioRenderer}获取AudioRenderer实例。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 8开始支持。
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AudioRenderer {
    /**
     * 音频渲染器的状态。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    readonly state: AudioState;

    /**
     * 获取当前创建的音频渲染器信息。使用callback异步回调。
     *
     * @param { AsyncCallback<AudioRendererInfo> } callback - 回调函数。当获取音频渲染器的信息成功，err为undefined，data为获取到的音频渲染器的信息；否则为错误对
     *     象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getRendererInfo(callback: AsyncCallback<AudioRendererInfo>): void;
    /**
     * 获取当前创建的音频渲染器信息。使用Promise异步回调。
     *
     * @returns { Promise<AudioRendererInfo> } Promise对象，返回音频渲染器信息。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getRendererInfo(): Promise<AudioRendererInfo>;
    /**
     * 获取当前创建的音频渲染器信息。同步返回结果。
     *
     * @returns { AudioRendererInfo } 返回音频渲染器信息。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getRendererInfoSync(): AudioRendererInfo;

    /**
     * 获取音频流信息。使用callback异步回调。
     *
     * @param { AsyncCallback<AudioStreamInfo> } callback - 回调函数。当获取音频流信息成功，err为undefined，data为获取到的音频流信息；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void;
    /**
     * 获取音频流信息。使用Promise异步回调。
     *
     * @returns { Promise<AudioStreamInfo> } Promise对象，返回音频流信息。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getStreamInfo(): Promise<AudioStreamInfo>;
    /**
     * 获取音频流信息。同步返回结果。
     *
     * @returns { AudioStreamInfo } 返回音频流信息。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getStreamInfoSync(): AudioStreamInfo;

    /**
     * 获取音频流id。使用callback异步回调。
     *
     * @param { AsyncCallback<long> } callback - 回调函数。当获取音频流id成功，err为undefined，data为获取到的音频流id；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getAudioStreamId(callback: AsyncCallback<long>): void;
    /**
     * 获取音频流id。使用Promise异步回调。
     *
     * @returns { Promise<long> } Promise对象，返回音频流id。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getAudioStreamId(): Promise<long>;
    /**
     * 获取音频流id。同步返回结果。
     *
     * @returns { long } 返回音频流id。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioStreamIdSync(): long;

    /**
     * 获取当前音效模式。使用callback异步回调。
     *
     * @param { AsyncCallback<AudioEffectMode> } callback - 回调函数。当获取当前音效模式成功，err为undefined，data为获取到的当前音效模式；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioEffectMode(callback: AsyncCallback<AudioEffectMode>): void;
    /**
     * 获取当前音效模式。使用Promise异步回调。
     *
     * @returns { Promise<AudioEffectMode> } Promise对象，返回当前音效模式。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioEffectMode(): Promise<AudioEffectMode>;

    /**
     * 设置当前音效模式。使用callback异步回调。
     *
     * @param { AudioEffectMode } mode - 音效模式。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置当前音效模式成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    setAudioEffectMode(mode: AudioEffectMode, callback: AsyncCallback<void>): void;
    /**
     * 设置当前音效模式。使用Promise异步回调。
     *
     * @param { AudioEffectMode } mode - 音效模式。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    setAudioEffectMode(mode: AudioEffectMode): Promise<void>;

    /**
     * 启动音频渲染器。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当启动音频渲染器成功，err为undefined，否则为错误对象。异常将返回error对象：
     *     <br>错误码6800301：表示包含状态检查异常、焦点抢占失败、系统处理异常（具体错误查看系统日志）。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * 启动音频渲染器。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，成功表示启动音频渲染器成功。异常将返回error对象：
     *     <br>错误码6800301：表示包含状态检查异常、焦点抢占失败、系统处理异常（具体错误查看系统日志）。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * 写入缓冲区。使用callback异步回调。
     *
     * @param { ArrayBuffer } buffer - 要写入缓冲区的数据。
     * @param { AsyncCallback<number> } callback - 回调函数。当写入缓冲区成功，err为undefined，data为获取到的写入的字节数；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#event:writeData
     */
    write(buffer: ArrayBuffer, callback: AsyncCallback<number>): void;
    /**
     * 写入缓冲区。使用Promise异步回调。
     *
     * @param { ArrayBuffer } buffer - 要写入缓冲区的数据。
     * @returns { Promise<number> } Promise对象，返回写入的字节数。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#event:writeData
     */
    write(buffer: ArrayBuffer): Promise<number>;

    /**
     * 获取当前播放位置的时间戳（从1970年1月1日开始），单位为纳秒。使用callback异步回调。
     *
     * @param { AsyncCallback<long> } callback - 回调函数。当获取时间戳成功，err为undefined，data为获取到的时间戳；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getAudioTime(callback: AsyncCallback<long>): void;
    /**
     * 获取当前播放位置的时间戳（从1970年1月1日开始），单位为纳秒。使用Promise异步回调。
     *
     * @returns { Promise<long> } Promise对象，返回时间戳。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getAudioTime(): Promise<long>;
    /**
     * 获取当前播放位置的时间戳（从1970年1月1日开始），单位为纳秒。同步返回结果。
     *
     * @returns { long } 返回时间戳。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioTimeSync(): long;

    /**
     * 获取输出音频流时间戳和位置信息，适配倍速接口。使用Promise异步回调。
     * 
     * 获取输出音频流时间戳和位置信息，通常用于进行音画同步对齐。
     * 
     * 注意，当实际播放位置（framePosition）为0时，时间戳（timestamp）是固定值，直到流真正开始播放时才会更新。当调用Flush接口时实际播放位置也会被重置。
     * 
     * 当音频流路由（route）变化时，例如设备变化或者输出类型变化时，播放位置也会被重置，但此时时间戳仍会持续增长。推荐当实际播放位置和时间戳的变化稳定后再使用该接口获取的值。该接口适配倍速接口，例如当播放速度设置为2倍时，播放位
     * 置的增长速度也会返回为正常的2倍。
     *
     * @returns { Promise<AudioTimestampInfo> } Promise对象，返回音频流时间戳和当前数据帧位置信息。
     * @throws  { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 19 dynamic
     * @since 23 static
     */
    getAudioTimestampInfo(): Promise<AudioTimestampInfo>;

    /**
     * 获取音频流时间戳和当前数据帧位置信息。同步返回结果。
     *
     * @returns { AudioTimestampInfo } 返回音频流时间戳和当前数据帧位置信息。
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 19 dynamic
     * @since 23 static
     */
    getAudioTimestampInfoSync(): AudioTimestampInfo;

    /**
     * 检查缓冲区是否已被耗尽。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当检查缓冲区是否已被耗尽成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    drain(callback: AsyncCallback<void>): void;
    /**
     * 检查缓冲区是否已被耗尽。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    drain(): Promise<void>;

    /**
     * 清空缓冲区（[AudioState]{@link audio.AudioState}为STATE_RUNNING、STATE_PAUSED、STATE_STOPPED状态下可用）。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 6800103 - Operation not permit at current state. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    flush(): Promise<void>;

    /**
     * 暂停音频渲染。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当暂停渲染成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    pause(callback: AsyncCallback<void>): void;
    /**
     * 暂停音频渲染。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    pause(): Promise<void>;

    /**
     * 停止音频渲染。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当停止渲染成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * 停止音频渲染。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * 释放音频渲染器。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当释放音频渲染器成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * 释放音频渲染器。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * 获取音频渲染器的最小缓冲区大小。使用callback异步回调。
     *
     * @param { AsyncCallback<long> } callback - 回调函数。当获取音频渲染器的最小缓冲区大小成功，err为undefined，data为获取到的最小缓冲区大小；否则为错误对象。
     *     <br>单位为字节。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getBufferSize(callback: AsyncCallback<long>): void;
    /**
     * 获取音频渲染器的最小缓冲区大小。使用Promise异步回调。
     *
     * @returns { Promise<long> } Promise对象，返回缓冲区大小。
     *     <br>单位为字节。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getBufferSize(): Promise<long>;
    /**
     * 获取音频渲染器的最小缓冲区大小。同步返回结果。
     *
     * @returns { long } 返回缓冲区大小，单位为字节。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getBufferSizeSync(): long;

    /**
     * 设置音频渲染速率。使用callback异步回调。
     *
     * @param { AudioRendererRate } rate - 渲染的速率。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置音频渲染速率成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#setSpeed
     */
    setRenderRate(rate: AudioRendererRate, callback: AsyncCallback<void>): void;

    /**
     * 设置音频渲染速率。使用Promise异步回调。
     *
     * @param { AudioRendererRate } rate - 渲染的速率。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#setSpeed
     */
    setRenderRate(rate: AudioRendererRate): Promise<void>;

    /**
     * 设置播放倍速。
     *
     * @param { double } speed - 设置播放的倍速值，倍速范围为[0.25, 4.0]。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    setSpeed(speed: double): void;

    /**
     * 获取音频渲染速率。使用callback异步回调。
     *
     * @param { AsyncCallback<AudioRendererRate> } callback - 回调函数。当获取当前渲染速率成功，err为undefined，data为获取到的当前渲染速率；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#getSpeed
     */
    getRenderRate(callback: AsyncCallback<AudioRendererRate>): void;

    /**
     * 获取音频渲染速率。使用Promise异步回调。
     *
     * @returns { Promise<AudioRendererRate> } Promise对象，返回渲染速率。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#getSpeed
     */
    getRenderRate(): Promise<AudioRendererRate>;

    /**
     * 获取音频渲染速率。同步返回结果。
     *
     * @returns { AudioRendererRate } 返回渲染速率。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#getSpeed
     */
    getRenderRateSync(): AudioRendererRate;

    /**
     * 获取播放倍速。
     *
     * @returns { double } 返回播放的倍速值，倍速范围为[0.25, 4.0]。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getSpeed(): double;

    /**
     * 设置应用的焦点模型。使用callback异步回调。
     *
     * @param { InterruptMode } mode - 焦点模型。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置应用的焦点模型成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setInterruptMode(mode: InterruptMode, callback: AsyncCallback<void>): void;
    /**
     * 设置应用的焦点模型。使用Promise异步回调。
     *
     * @param { InterruptMode } mode - 焦点模型。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setInterruptMode(mode: InterruptMode): Promise<void>;
    /**
     * 设置应用的焦点模型。同步设置。
     *
     * @param { InterruptMode } mode - 焦点模型。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    setInterruptModeSync(mode: InterruptMode): void;

    /**
     * 设置音频流的音量。使用callback异步回调。
     *
     * @param { double } volume - 音量值范围为[0.0, 1.0]。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置应用的音量成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setVolume(volume: double, callback: AsyncCallback<void>): void;
    /**
     * 设置音频流的音量。使用Promise异步回调。
     *
     * @param { double } volume - 音量值范围为[0.0, 1.0]。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setVolume(volume: double): Promise<void>;

    /**
     * 获取音频流的音量。同步返回结果。
     *
     * @returns { double } 返回音量大小，音量值范围为[0.0, 1.0]。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 12 dynamic
     * @since 23 static
     */
    getVolume(): double;

    /**
     * 在指定时间范围内设置音量渐变模式。同步返回结果。
     *
     * @param { double } volume - 渐变目标音量值，音量范围为[0.0, 1.0]。
     * @param { int } duration - 渐变持续时间，单位为ms。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    setVolumeWithRamp(volume: double, duration: int): void;

    /**
     * 获取音频流的最小音量。使用callback异步回调。
     *
     * @param { AsyncCallback<double> } callback - 回调函数。当获取音频流的最小音量成功，err为undefined，data为获取到的应用基于音频流的最小音量；否则为错误对象。
     *     <br>音量范围为[0.0, 1.0]。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getMinStreamVolume(callback: AsyncCallback<double>): void;
    /**
     * 获取音频流的最小音量。使用Promise异步回调。
     *
     * @returns { Promise<double> } Promise对象，返回音频流最小音量。
     *     <br>音量范围为[0.0, 1.0]。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getMinStreamVolume(): Promise<double>;
    /**
     * 获取音频流的最小音量。同步返回结果。
     *
     * @returns { double } 返回音频流最小音量，音量范围为[0.0, 1.0]。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getMinStreamVolumeSync(): double;

    /**
     * 获取音频流的最大音量。使用callback异步回调。
     *
     * @param { AsyncCallback<double> } callback - 回调函数。当获取音频流的最大音量成功，err为undefined，data为获取到的应用基于音频流的最大音量；否则为错误对象。
     *     <br>音量范围为[0.0, 1.0]。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getMaxStreamVolume(callback: AsyncCallback<double>): void;
    /**
     * 获取音频流的最大音量。使用Promise异步回调。
     *
     * @returns { Promise<double> } Promise对象，返回音频流最大音量。
     *     <br>音量范围为[0.0, 1.0]。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getMaxStreamVolume(): Promise<double>;
    /**
     * 获取音频流的最大音量。同步返回结果。
     *
     * @returns { double } 返回音频流最大音量，音量范围为[0.0, 1.0]。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getMaxStreamVolumeSync(): double;

    /**
     * 获取当前播放音频流的欠载音频帧数量。使用callback异步回调。
     *
     * @param { AsyncCallback<long> } callback - 回调函数。当获取当前播放音频流的欠载音频帧数量成功，err为undefined，data为获取到的当前播放音频流的欠载音频帧数量；否则为错误对
     *     象。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getUnderflowCount(callback: AsyncCallback<long>): void;
    /**
     * 获取当前播放音频流的欠载音频帧数量。使用Promise异步回调。
     *
     * @returns { Promise<long> } Promise对象，返回音频流的欠载音频帧数量。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getUnderflowCount(): Promise<long>;
    /**
     * 获取当前播放音频流的欠载音频帧数量，同步返回数据。
     *
     * @returns { long } 返回音频流的欠载音频帧数量。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getUnderflowCountSync(): long;

    /**
     * 获取音频流输出设备信息。使用callback异步回调。
     *
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - 回调函数。当获取音频流输出设备信息成功，err为undefined，data为获取到的音频流输出设备信息；
     *     否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCurrentOutputDevices(callback: AsyncCallback<AudioDeviceDescriptors>): void;
    /**
     * 获取音频流输出设备信息。使用Promise异步回调。
     *
     * @returns { Promise<AudioDeviceDescriptors> } Promise对象，返回音频流的输出设备信息。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCurrentOutputDevices(): Promise<AudioDeviceDescriptors>;
    /**
     * 获取音频流输出设备信息。同步返回结果。
     *
     * @returns { AudioDeviceDescriptors } 返回音频流的输出设备信息。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCurrentOutputDevicesSync(): AudioDeviceDescriptors;

    /**
     * 设置单双声道混合模式。同步返回结果。
     *
     * @param { ChannelBlendMode } mode - 声道混合模式类型。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    setChannelBlendMode(mode: ChannelBlendMode): void;

    /**
     * 设置静音并发播放模式。
     * 
     * 当设置为true，打开静音并发播放模式，系统将让此音频流静音播放，并且不会打断其他音频流。设置为false，将关闭静音并发播放，音频流可根据系统焦点策略抢占焦点。
     *
     * @param { boolean } on - 打开/关闭静音并发播放模式。true表示设置当前播放的音频流静音播放，并且不会打断其它音频流播放。false表示取消当前播放的音频流静音播放，音频流可根据系统焦点策略抢占焦点。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 12 dynamic
     * @since 23 static
     */
    setSilentModeAndMixWithOthers(on: boolean): void;

    /**
     * 获取静音并发播放模式。
     *
     * @returns { boolean } 静音并发播放模式状态。返回true表示打开，返回false表示关闭。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 12 dynamic
     * @since 23 static
     */
    getSilentModeAndMixWithOthers(): boolean;

    /**
     * 设置默认发声设备。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 本接口仅适用于[StreamUsage]{@link audio.StreamUsage}为语音消息、VoIP语音通话或者VoIP视频通话的场景，支持听筒、扬声器和系统默认设备。
     * >
     * > - 本接口允许在AudioRenderer创建后随时调用，系统会记录应用设置的默认本机内置发声设备。应用启动播放时，若外接设备如蓝牙耳机或有线耳机已接入，系统优先从外接设备发声；否则，系统遵循应用设置的默认本机内置发声设
     * > 备。
     *
     * @param { DeviceType } deviceType - 设备类型。
     *     <br>仅支持以下设备：EARPIECE（听筒）、SPEAKER（扬声器）和DEFAULT（系统默认设备）。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 12 dynamic
     * @since 23 static
     */
    setDefaultOutputDevice(deviceType: DeviceType): Promise<void>;

    /**
     * 设置播放响度。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 该接口仅支持类型为[STREAM_USAGE_MUSIC]{@link audio.StreamUsage}、[STREAM_USAGE_MOVIE]{@link audio.StreamUsage}或
     * > [STREAM_USAGE_AUDIOBOOK]{@link audio.StreamUsage}的音频流。
     * >
     * > - 该接口不支持高清通路的响度设置。
     * >
     * > - 由于音频框架与硬件之间存在缓冲区，响度调节实际生效存在延迟，时长取决于缓冲区长度。
     * >
     * > - 建议在不同音频开始播放前预先设置响度，以实现最佳均衡效果。
     *
     * @param { double } loudnessGain - 设置播放的响度值，单位为dB，响度范围为[-90.0, 24.0]。默认值为0.0dB。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800104 - Operation is not supported on this renderer,
     *     e.g. the stream usage of this renderer is not one of {@link StreamUsage#STREAM_USAGE_MUSIC},
     *     {@link StreamUsage#STREAM_USAGE_MOVIE} or {@link StreamUsage#STREAM_USAGE_AUDIOBOOK}.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 20 dynamic
     * @since 23 static
     */
    setLoudnessGain(loudnessGain: double): Promise<void>;

    /**
     * 获取播放响度。
     *
     * @returns { double } 返回播放的响度值，单位为分贝。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 20 dynamic
     * @since 23 static
     */
    getLoudnessGain(): double;

    /**
     * Sets the render target of this audio renderer.
     * This function can only be called when the audio renderer is not in the running or released state.
     * Otherwise, it will return an error. The caller must have the
     * ohos.permission.INJECT_PLAYBACK_TO_AUDIO_CAPTURE permission when target is not {@link RenderTarget#PLAYBACK}.
     * This method can only be called when the audio renderer is ​​not​​ in the RUNNING or RELEASED state.
     * Otherwise, an error will be returned.
     * After changing render target to non-PLAYBACK：
     * 1. The audio route and interruption strategy of this renderer will not be affected by
     * {@link AudioSessionManager}.
     * 2. The device type of this renderer will be {@link DeviceType#SYSTEM_PRIVATE}.
     * 3. Calling {@link start} when the audio scene is not {@link AudioScene#AUDIO_SCENE_VOICE_CHAT} will
     * return error code 6800103.
     * 4. Calling {@link getAudioTime} or {@link getAudioTimeSync} will return error code 6800103.
     * 5. Calling {@link getAudioTimestampInfo} or {@link getAudioTimestampInfoSync} will return error code 6800103.
     * 6. Calling {@link setDefaultOutputDevice} will return error code 6800103.
     * @permission ohos.permission.INJECT_PLAYBACK_TO_AUDIO_CAPTURE
     * @param { RenderTarget } target - Render target.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at running and release state.
     * @throws { BusinessError } 6800104 - Current renderer is not supported to set target.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    setTarget(target: RenderTarget): Promise<void>;

    /**
     * Gets the currently render target of this audio renderer.
     * If the render target has not been changed, the default value {@link RenderTarget#PLAYBACK} will be returned.
     * Ensure that the {@link setTarget} promise is resolved successfully before calling this interface,
     * otherwise, the obtained value may be inaccurate.
     * @returns { RenderTarget } Render target of this audio renderer.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    getTarget(): RenderTarget;

    /**
     * 监听音频中断事件（当音频焦点发生变化时触发）。使用callback异步回调。
     * 
     * AudioRenderer对象在start事件时获取焦点，在pause、stop等事件时释放焦点，无需开发者主动申请。
     * 
     * 调用此方法后，如果AudioRenderer对象获取焦点失败或发生中断事件（如被其他音频打断等），会收到[InterruptEvent]{@link audio.InterruptEvent}。建议应用根据
     * InterruptEvent的信息进行进一步处理。更多信息请参阅文档[音频焦点介绍](docroot://media/audio/audio-playback-concurrency.md)。
     *
     * @param { 'audioInterrupt' } type - 事件回调类型，支持的事件为'audioInterrupt'，当音频焦点状态发生变化时，触发该事件。
     * @param { Callback<InterruptEvent> } callback - 回调函数，返回中断事件信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform [since 12]
     * @since 9 dynamic
     */
    on(type: 'audioInterrupt', callback: Callback<InterruptEvent>): void;

    /**
     * Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is
     * triggered when audio playback is interrupted.
     * @param { Callback<InterruptEvent> } callback - Callback used to listen for interrupt callback.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 23 static
     */
    onAudioInterrupt(callback: Callback<InterruptEvent>): void;

    /**
     * 取消监听音频中断事件。使用callback异步回调。
     *
     * @param { 'audioInterrupt' } type - 事件回调类型，支持的事件为'audioInterrupt'，当取消监听音频中断事件时，触发该事件。
     * @param { Callback<InterruptEvent> } callback - 回调函数，返回中断事件信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 18 dynamic
     */
    off(type: 'audioInterrupt', callback?: Callback<InterruptEvent>): void;

    /**
     * Unsubscribes audio interrupt events.
     * @param { Callback<InterruptEvent> } [callback] - Callback used to listen for interrupt callback.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 23 static
     */
    offAudioInterrupt(callback?: Callback<InterruptEvent>): void;

    /**
     * 监听标记到达事件（当渲染的帧数到达frame参数的值时触发，仅调用一次）。使用callback异步回调。
     * 
     * 如果将frame设置为100，当渲染帧数到达第100帧时，系统将上报信息。
     *
     * @param { 'markReach' } type - 事件回调类型，支持的事件为'markReach'，当渲染的帧数到达frame参数的值时，触发该事件。
     * @param { long } frame - 触发事件的帧数。该值必须大于0。
     * @param { Callback<long> } callback - 回调函数，返回frame参数的值。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    on(type: 'markReach', frame: long, callback: Callback<long>): void;

    /**
     * Subscribes to mark reached events. When the number of frames rendered reaches the value of the frame parameter,
     * the callback is invoked.
     * @param { long } frame - Number of frames to trigger the event. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    onMarkReach(frame: long, callback: Callback<long>): void;

    /**
     * 取消监听标记到达事件。使用callback异步回调。
     *
     * @param { 'markReach' } type - 事件回调类型，支持的事件为'markReach'，当取消监听标记到达事件时，触发该事件。
     * @param { Callback<long> } callback - 回调函数，返回frame参数的值。 [since 18]
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    off(type: 'markReach', callback?: Callback<long>): void;

    /**
     * Unsubscribes from mark reached events.
     * @param { Callback<long> } [callback] - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    offMarkReach(callback?: Callback<long>): void;

    /**
     * 监听标记到达事件（每当渲染的帧数达到frame参数的值时触发，即按周期上报信息）。使用callback异步回调。
     * 
     * 如果将frame设置为10，每渲染10帧数据均会上报信息（例如：第10帧、第20帧、第30帧......）。
     *
     * @param { 'periodReach' } type - 事件回调类型，支持的事件为'periodReach'，当渲染的帧数达到frame参数的值时，触发该事件。
     * @param { long } frame - 触发事件的帧数。该值必须大于 0。
     * @param { Callback<long> } callback - 回调函数，返回frame参数的值。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    on(type: 'periodReach', frame: long, callback: Callback<long>): void;

    /**
     * Subscribes to period reached events. When the period of frame rendering reaches the value of frame parameter,
     * the callback is invoked.
     * @param { long } frame - Period during which frame rendering is listened. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    onPeriodReach(frame: long, callback: Callback<long>): void;

    /**
     * 取消监听标记到达事件。使用callback异步回调。
     *
     * @param { 'periodReach' } type - 事件回调类型，支持的事件为'periodReach'，当取消监听标记到达事件时，触发该事件。
     * @param { Callback<long> } callback - 回调函数，返回frame参数的值。 [since 18]
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    off(type: 'periodReach', callback?: Callback<long>): void;

    /**
     * Unsubscribes from period reached events.
     * @param { Callback<long> } [callback] - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    offPeriodReach(callback?: Callback<long>): void;

    /**
     * 监听状态变化事件（当AudioRenderer的状态发生变化时触发）。使用callback异步回调。
     *
     * @param { 'stateChange' } type - 事件回调类型，支持的事件为'stateChange'，当AudioRenderer的状态发生变化时，触发该事件。
     * @param { Callback<AudioState> } callback - 回调函数，返回当前音频的状态。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    on(type: 'stateChange', callback: Callback<AudioState>): void;

    /**
     * Subscribes audio state change event callback.
     * @param { Callback<AudioState> } callback - Callback invoked when state change.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    onStateChange(callback: Callback<AudioState>): void;

    /**
     * 取消监听状态变化事件。使用callback异步回调。
     *
     * @param { 'stateChange' } type - 事件回调类型，支持的事件为'stateChange'，当取消监听状态变化事件时，触发该事件。
     * @param { Callback<AudioState> } callback - 回调函数，返回当前音频的状态。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 18 dynamic
     */
    off(type: 'stateChange', callback?: Callback<AudioState>): void;

    /**
     * Unsubscribes audio state change event callback.
     * @param { Callback<AudioState> } [callback] - Callback invoked when state change.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    offStateChange(callback?: Callback<AudioState>): void;

    /**
     * 监听音频输出设备变化事件（当音频输出设备发生变化时触发）。使用callback异步回调。
     *
     * @param { 'outputDeviceChange' } type - 事件回调类型，支持的事件为'outputDeviceChange'，当音频输出设备发生变化时，触发该事件。
     * @param { Callback<AudioDeviceDescriptors> } callback - 回调函数，返回当前音频流的输出设备描述信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     */
    on(type: 'outputDeviceChange', callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * Subscribes output device change event callback.
     * The event is triggered when output device change for this stream.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onOutputDeviceChange(callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * 监听音频流输出设备变化及原因事件（当音频输出设备发生变化时触发）。使用callback异步回调。
     *
     * @param { 'outputDeviceChangeWithInfo' } type - 事件回调类型，支持的事件为'outputDeviceChangeWithInfo'，当音频输出设备发生变化时，触发该事件。
     * @param { Callback<AudioStreamDeviceChangeInfo> } callback - 回调函数，返回当前音频流的输出设备描述信息及变化原因。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    on(type: 'outputDeviceChangeWithInfo', callback: Callback<AudioStreamDeviceChangeInfo>): void;

    /**
     * Subscribes output device change event callback.
     * The event is triggered when output device change for this stream.
     * @param { Callback<AudioStreamDeviceChangeInfo> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onOutputDeviceChangeWithInfo(callback: Callback<AudioStreamDeviceChangeInfo>): void;

    /**
     * 取消监听音频输出设备变化事件。使用callback异步回调。
     *
     * @param { 'outputDeviceChange' } type - 事件回调类型，支持的事件为'outputDeviceChange'，当取消监听音频输出设备变化事件时，触发该事件。
     * @param { Callback<AudioDeviceDescriptors> } callback - 回调函数，返回当前音频流的输出设备描述信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     */
    off(type: 'outputDeviceChange', callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Unsubscribes output device change event callback.
     * @param { Callback<AudioDeviceDescriptors> } [callback] - Callback used in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offOutputDeviceChange(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * 取消监听音频流输出设备变化及原因事件。使用callback异步回调。
     *
     * @param { 'outputDeviceChangeWithInfo' } type - 事件回调类型，支持的事件为'outputDeviceChangeWithInfo'，当取消监听音频流输出设备变化及原因事件时，触发该
     *     事件。
     * @param { Callback<AudioStreamDeviceChangeInfo> } callback - 回调函数，返回当前音频流的输出设备描述信息及变化原因。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    off(type: 'outputDeviceChangeWithInfo', callback?: Callback<AudioStreamDeviceChangeInfo>): void;

    /**
     * Unsubscribes output device change event callback.
     * @param { Callback<AudioStreamDeviceChangeInfo> } [callback] - Callback used in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offOutputDeviceChangeWithInfo(callback?: Callback<AudioStreamDeviceChangeInfo>): void;

    /**
     * 监听音频数据写入回调事件（当需要写入音频数据时触发）。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > - 回调函数仅用来写入音频数据，请勿在回调函数中调用AudioRenderer相关接口。
     * >
     * > - 为避免音频播放启动和停止时数据不连续可能出现的杂音，系统通常会在启动和停止时对音频数据做20ms以内的淡入淡出处理。
     *
     * @param { 'writeData' } type - 事件回调类型，支持的事件为'writeData'，当需要写入音频数据时，触发该事件。
     * @param { Callback<ArrayBuffer> } callback - Callback used to write the data to the buffer.<br>API version 11 does
     *     not support the return of the callback result. API version 12 and later support the return of the callback
     *     result [AudioDataCallbackResult]{@link @ohos.multimedia.audio:audio.AudioDataCallbackResult}. [since 11 - 11]
     * @param { AudioRendererWriteDataCallback } callback - 回调函数，入参代表应用接收待写入的数据缓冲区。
     *     <br>API version 11 不支持返回回调结果，从 API version 12 开始支持返回回调结果
     *     [AudioDataCallbackResult]{@link audio.AudioDataCallbackResult}。 [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    on(type: 'writeData', callback: AudioRendererWriteDataCallback): void;

    /**
     * Subscribes audio data callback.
     * The event is triggered when audio buffer is available for writing more data.
     * @param { AudioRendererWriteDataCallback } callback - Audio renderer write data callback.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    onWriteData(callback: AudioRendererWriteDataCallback): void;

    /**
     * 取消监听音频数据写入回调事件。使用callback异步回调。
     *
     * @param { 'writeData' } type - 事件回调类型，支持的事件为'writeData'，当取消监听音频数据写入回调事件时，触发该事件。
     * @param { Callback<ArrayBuffer> } callback - Callback used to write the data to the buffer.<br>API version 11 does
     *     not support the return of the callback result. API version 12 and later support the return of the callback
     *     result [AudioDataCallbackResult]{@link @ohos.multimedia.audio:audio.AudioDataCallbackResult}. [since 11 - 11]
     * @param { AudioRendererWriteDataCallback } callback - 回调函数，入参代表应用接收待写入的数据缓冲区。
     *     <br>API version 11 不支持返回回调结果，从 API version 12 开始支持返回回调结果
     *     [AudioDataCallbackResult]{@link audio.AudioDataCallbackResult}。 [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    off(type: 'writeData', callback?: AudioRendererWriteDataCallback): void;

    /**
     * Unsubscribes audio data callback.
     * @param { AudioRendererWriteDataCallback } [callback] - Audio renderer write data callback.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    offWriteData(callback?: AudioRendererWriteDataCallback): void;

    /**
     * 获取当前音频路由的预估时延。
     * 
     * > **说明：**
     * >
     * > - 无线连接的音频设备，时延估算会存在误差，结果仅供参考。
     * >
     * > - 由于时延未计入实时缓冲区，建议仅在音频播放开始时获取，避免频繁调用，否则可能因路由切换而阻塞该接口调用。
     * >
     * > - 音频输出到硬件后的音画同步建议使用[getAudioTimestampInfo]{@link audio.AudioRenderer.getAudioTimestampInfo}或
     * > [getAudioTimestampInfoSync]{@link audio.AudioRenderer.getAudioTimestampInfoSync}完成。
     *
     * @param { AudioLatencyType } type - 获取的时延类型。
     * @returns { int } 返回音频时延，单位为毫秒。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permitted in release state.
     * @throws { BusinessError } 6800301 - System internal error, like audio service error.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getLatency(type: AudioLatencyType): int;

    /**
     * 设置独立的音频会话策略和行为参数。
     * 
     * > **说明：**
     * >
     * > 当音频渲染器在运行状态时调用此接口后，必须重新调用接口[start]{@link audio.AudioRenderer.start(callback: AsyncCallback<void>)}使其生效。
     *
     * @param { AudioSessionStrategy } strategy - 音频会话策略。
     * @param { int } behavior - 用于设置音频会话行为。
     *     <br>该参数可以是单个标志，也可以是多个标志的按位OR组合。
     *     <br>当前支持的音频会话行为详见[AudioSessionBehaviorFlags]{@link audio.AudioSessionBehaviorFlags}中定义的标志。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: int): void;
  }

  /**
   * 表示录制音频流类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum SourceType {
    /**
     * 无效的音频源。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_INVALID = -1,
    /**
     * Mic音频源。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_MIC = 0,
    /**
     * 语音识别源。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_VOICE_RECOGNITION = 1,
    /**
     * 播放音频流（内录）录制音频源。
     * 
     * <br/
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 10 dynamiconly
     * @deprecated since 12
     * @useinstead OH_AVScreenCapture in native interface.
     */
    SOURCE_TYPE_PLAYBACK_CAPTURE = 2,
    /**
     * Wakeup source type.
     * Permission ohos.permission.MANAGE_INTELLIGENT_VOICE is needed when calling createAudioCapturer with this type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_WAKEUP = 3,

    /**
     * Voice call source type.
     * Permission ohos.permission.RECORD_VOICE_CALL is needed when calling createAudioCapturer with this type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_VOICE_CALL = 4,

    /**
     * 语音通话场景的音频源（单独启动录制不会开启3A算法，需同时使用[STREAM_USAGE_VOICE_COMMUNICATION]{@link audio.StreamUsage}或
     * [STREAM_USAGE_VIDEO_COMMUNICATION]{@link audio.StreamUsage}类型的AudioRender起播才会触发开启3A算法）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_VOICE_COMMUNICATION = 7,

    /**
     * 短语音消息的音频源。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_VOICE_MESSAGE = 10,

    /**
     * Source type for voice transcription and processing.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_VOICE_TRANSCRIPTION = 12,

    /**
     * 录像的音频源。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 13 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_CAMCORDER = 13,

    /**
     * 麦克风纯净录音的音频源（系统不做任何算法处理）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 14 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_UNPROCESSED = 14,

    /**
     * 直播场景的音频源，在支持的设备上会提供系统回声消除能力。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_LIVE = 17,

    /**
     * Unprocessed voice assistant source type.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SOURCE_TYPE_UNPROCESSED_VOICE_ASSISTANT = 19
  }

  /**
   * 描述音频采集器信息。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AudioCapturerInfo {
    /**
     * 音源类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    source: SourceType;
    /**
     * 录制流行为标志。
     * 
     * 设置为0即可。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    capturerFlags: int;
  }

  /**
   * 表示内录（录制设备内部应用的声音）模式的枚举。不同模式决定可录制的目标播放流类型。支持通过按位或组合枚举值，当前仅支持MODE_DEFAULT（0x0）、MODE_MEDIA（0x1）、MODE_EXCLUDING_SELF（0x
   * 8000），以及MODE_MEDIA和MODE_EXCLUDING_SELF的按位或组合（0x8001）。
   *
   * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AudioPlaybackCaptureMode {
    /**
     * 默认模式。录制大部分音频流，但不包括提示音流和隐私流。
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MODE_DEFAULT = 0x0,
    /**
     * 媒体模式。录制媒体、语音消息和未知类型的音频流。
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MODE_MEDIA = 0x1,
    /**
     * 排除自身模式。录制除应用自身播放的音频以外的音频流。
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MODE_EXCLUDING_SELF = 0x8000
  }

  /**
   * 表示调用[requestPlaybackCaptureStart]{@link audio.AudioCapturer.requestPlaybackCaptureStart}后异步返回的内录启动状态的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum PlaybackCaptureStartState {
    /**
     * 启动内录成功。
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STATE_SUCCESS = 0,
    /**
     * 启动内录失败。原因是音频打断请求被拒绝或发生系统内部错误。
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STATE_FAILED = 1,
    /**
     * 用户未授权，启动内录失败。
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STATE_NOT_AUTHORIZED = 2
  }

  /**
   * 音频采集器选项信息。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AudioCapturerOptions {
    /**
     * 音频流信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    streamInfo: AudioStreamInfo;
    /**
     * 音频采集器信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    capturerInfo: AudioCapturerInfo;
    /**
     * 音频内录的配置信息。
     * 
     * <br/
     *
     * @type { ?AudioPlaybackCaptureConfig }
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 10 dynamiconly
     * @deprecated since 12
     * @useinstead OH_AVScreenCapture in native interface.
     */
    playbackCaptureConfig?: AudioPlaybackCaptureConfig;

    /**
     * 当前audio capturer的偏好输入设备。此设备必须为输入设备，并且{@link captureInfo}的source type必须为{@link SourceType#SOURCE_TYPE_RECONGITION} 或
     * {@link SourceType#SOURCE_TYPE_VOICE_TRANSCRIPTION}。否则，此参数将会被忽略。如果调用者未指定偏好设备，则系统会自动选择一个设备。如果调用者指定了偏好设备取创建语音识别或者语音转写流：
     * 1. 如果设备在线，当前audiocapturer会使用偏好设备；如果运行过程中，偏好设备下线，则系统会自动选择一个录音设备；
     * 2. 如果设备不在线，当前audiocapturer会自动选择一个录音设备；如果运行过程中，偏好设备上线，则会自动切换到偏好设备上。
     * 调用者可以通过{@link AudioCapturer#getCurrentAudioCapturerChangeInfo}查询当前实际使用的录音设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    preferredInputDevice?: AudioDeviceDescriptor;

    /**
     * 内录模式。可设置为AudioPlaybackCaptureMode中的枚举值或其按位或组合，当前仅支持MODE_DEFAULT（0x0）、MODE_MEDIA（0x1）、MODE_EXCLUDING_SELF（0x8000），
     * 以及MODE_MEDIA和MODE_EXCLUDING_SELF的按位或组合（0x8001）。
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    playbackCaptureMode?: AudioPlaybackCaptureMode;
  }

  /**
   * Describes audio capturer configuration options that can capture
   * microphone input (mic-in) audio data before any processing.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface AudioCapturerMicInConfig {
    /**
     * Stream information that describe Mic-In audio stream.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    micInStreamInfo: AudioStreamInfo;
    /**
     * Stream information that describe echo reference signal.
     * If not set this attribute, the capturer will only record Mic-In audio stream.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ecStreamInfo?: AudioStreamInfo;
    /**
     * Capturer attribute information.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    capturerInfo: AudioCapturerInfo;
    /**
     * 描述处理后的音频流的流信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    processedStreamInfo?: AudioStreamInfo;
    /**
     * Prefered input device for this audio capturer.
     * The preferred device must be an input device, and the source type in
     * {@link captureInfo} must be {@link SourceType#SOURCE_TYPE_VOICE_RECOGNITION},
     * {@link SourceType#SOURCE_TYPE_VOICE_TRANSCRIPTION} or {@link SourceType#SOURCE_TYPE_UNPROCESSED_VOICE_ASSISTANT},
     * otherwise this parameter will be ignored.
     * If the user does not specify a device, the system will automatically select the recording device for
     * the audio capturer.
     * When the user specifies a preferred device:
     * 1) If the preferred device is online, the current audio capturer may use the preferred device for
     * recording. If the preferred device becomes offline during recording, the system will select
     * another device.
     * 2) If the preferred device is offline, the system will select a recording device.
     * If the preferred device becomes online during recording, it may switch to the preferred device.
     * The user can query the selected device by {@link AudioCapturer#getCurrentAudioCapturerChangeInfo}.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    preferredInputDevice?: AudioDeviceDescriptor;
  }

  /**
   * 待录制的播放音频流的筛选信息。
   *
   * @typedef CaptureFilterOptions
   * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
   * @since 10 dynamiconly
   * @deprecated since 12
   * @useinstead OH_AVScreenCapture in native interface.
   */
  interface CaptureFilterOptions {
    /**
     * 指定需要录制的音频播放流的StreamUsage类型。可同时指定0个或多个StreamUsage。Array为空时，默认录制StreamUsage为STREAM_USAGE_MUSIC、STREAM_USAGE_MOVIE、
     * STREAM_USAGE_GAME和STREAM_USAGE_AUDIOBOOK的音频播放流。
     * 
     * 在API version 10时，CaptureFilterOptions支持使用StreamUsage.STREAM_USAGE_VOICE_COMMUNICATION，使用时需要申请权限
     * ohos.permission.CAPTURE_VOICE_DOWNLINK_AUDIO，该权限仅系统应用可申请。
     * 
     * 从API version 11开始，CaptureFilterOptions不再支持使用StreamUsage.STREAM_USAGE_VOICE_COMMUNICATION，所以当前接口不再涉及此权限。
     *
     * @type { Array<StreamUsage> }
     * @permission ohos.permission.CAPTURE_VOICE_DOWNLINK_AUDIO
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 10
     */
    /**
     * Filter by stream usages. But not allow to capture voice streams.
     * @type { Array<StreamUsage> }
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead OH_AVScreenCapture in native interface.
     */
    usages: Array<StreamUsage>;
  }

  /**
   * 音频内录的配置信息。
   *
   * @typedef AudioPlaybackCaptureConfig
   * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
   * @since 10 dynamiconly
   * @deprecated since 12
   * @useinstead OH_AVScreenCapture in native interface.
   */
  interface AudioPlaybackCaptureConfig {
    /**
     * 需要录制的播放音频流的筛选信息。
     *
     * @type { CaptureFilterOptions }
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 10 dynamiconly
     * @deprecated since 12
     * @useinstead OH_AVScreenCapture in native interface.
     */
    filterOptions: CaptureFilterOptions;
  }

  /**
   * 描述音频录音数据，其中包含已处理的音频数据和
   * 进行音频处理前的纯净麦克风输入（mic-in）音频数据。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface AudioCapturerMicInData {
    /**
     * 处理后的音频数据缓冲。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    data: ArrayBuffer;

    /**
     * 麦克风输入音频数据缓冲。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    micInData: ArrayBuffer;

    /**
     * 回声参考音频数据缓冲。
     * 如果录音配置没有设置ecStreamInfo，则此缓冲将为空。
     * 有关详细信息，请参见{@link #AudioCapturerMicInConfig}。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ecData?: ArrayBuffer;
  }

  /**
   * 提供音频采集的相关接口。
   * 
   * 在使用AudioCapturer的接口之前，需先通过[createAudioCapturer]{@link audio.createAudioCapturer}获取AudioCapturer实例。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 8开始支持。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AudioCapturer {
    /**
     * 音频采集器状态。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    readonly state: AudioState;

    /**
     * 获取音频采集器信息。使用callback异步回调。
     *
     * @param { AsyncCallback<AudioCapturerInfo> } callback - 回调函数。当获取音频采集器信息成功，err为undefined，data为获取到的音频采集器信息；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getCapturerInfo(callback: AsyncCallback<AudioCapturerInfo>): void;
    /**
     * 获取音频采集器信息。使用Promise异步回调。
     *
     * @returns { Promise<AudioCapturerInfo> } Promise对象，返回音频采集器信息。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getCapturerInfo(): Promise<AudioCapturerInfo>;
    /**
     * 获取音频采集器信息。同步返回结果。
     *
     * @returns { AudioCapturerInfo } 返回音频采集器信息。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCapturerInfoSync(): AudioCapturerInfo;

    /**
     * 获取音频采集器流信息。使用callback异步回调。
     *
     * @param { AsyncCallback<AudioStreamInfo> } callback - 回调函数。当获取音频采集器流信息成功，err为undefined，data为获取到的音频采集器流信息；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void;
    /**
     * 获取音频采集器流信息。使用Promise异步回调。
     *
     * @returns { Promise<AudioStreamInfo> } Promise对象，返回音频流信息。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getStreamInfo(): Promise<AudioStreamInfo>;
    /**
     * 获取音频采集器流信息。同步返回结果。
     *
     * @returns { AudioStreamInfo } 返回音频流信息。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getStreamInfoSync(): AudioStreamInfo;

    /**
     * 获取音频流id。使用callback异步回调。
     *
     * @param { AsyncCallback<long> } callback - 回调函数。当获取音频流id成功，err为undefined，data为获取到的音频流id；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getAudioStreamId(callback: AsyncCallback<long>): void;
    /**
     * 获取音频流id。使用Promise异步回调。
     *
     * @returns { Promise<long> } Promise对象，返回音频流id。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getAudioStreamId(): Promise<long>;
    /**
     * 获取音频流id。同步返回结果。
     *
     * @returns { long } 返回音频流id。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioStreamIdSync(): long;

    /**
     * 启动音频采集器，开始获取音频数据。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当启动音频采集器成功，err为undefined，否则为错误对象。异常将返回error对象：
     *     <br>错误码6800301：表示包含状态检查异常、焦点抢占失败、系统处理异常（具体错误查看系统日志）。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * 启动音频采集器，开始获取音频数据。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，成功表示启动音频采集器成功。异常将返回error对象：
     *     <br>错误码6800301：表示包含状态检查异常、焦点抢占失败、系统处理异常（具体错误查看系统日志）。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * 请求启动内录流接口，内录流只能通过该接口触发启动。使用callback异步回调。
     * 
     * 内录是指以系统内部音频数据作为音频源的输入类型，简称为内录，对应的流称为内录流。常用于录制目标设备应用发送到系统以供播放的音频。
     * 
     * 该接口为非阻塞接口，系统接收到内录启动请求后，会继续处理用户授权检查和内录流启动，最终结果通过回调函数返回。
     *
     * @param { Callback<PlaybackCaptureStartState> } callback - 回调函数，用于接收启动内录请求的最终结果。
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    requestPlaybackCaptureStart(callback: Callback<PlaybackCaptureStartState>): void;

    /**
     * 读入缓冲区。使用callback异步回调。
     *
     * @param { number } size - 读入的字节数。
     * @param { boolean } isBlockingRead - 是否阻塞读操作。true表示阻塞，false表示不阻塞。
     * @param { AsyncCallback<ArrayBuffer> } callback - 回调函数。当读入缓冲区成功，err为undefined，data为获取到的缓冲区；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioCapturer#event:readData
     */
    read(size: number, isBlockingRead: boolean, callback: AsyncCallback<ArrayBuffer>): void;
    /**
     * 读入缓冲区。使用Promise异步回调。
     *
     * @param { number } size - 读入的字节数。
     * @param { boolean } isBlockingRead - 是否阻塞读操作。true表示阻塞，false表示不阻塞。
     * @returns { Promise<ArrayBuffer> } Promise对象，返回读取的缓冲区数据。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioCapturer#event:readData
     */
    read(size: number, isBlockingRead: boolean): Promise<ArrayBuffer>;

    /**
     * 获取当前录制位置的时间戳（从1970年1月1日开始），单位为纳秒。使用callback异步回调。
     *
     * @param { AsyncCallback<long> } callback - 回调函数。当获取时间戳成功，err为undefined，data为获取到的时间戳；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getAudioTime(callback: AsyncCallback<long>): void;
    /**
     * 获取当前录制位置的时间戳（从1970年1月1日开始），单位为纳秒。使用Promise异步回调。
     *
     * @returns { Promise<long> } Promise对象，返回时间戳（从1970年1月1日开始）。
     *     <br>单位为纳秒。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getAudioTime(): Promise<long>;
    /**
     * 获取当前录制位置的时间戳（从1970年1月1日开始），单位为纳秒。同步返回结果。
     *
     * @returns { long } 返回时间戳。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioTimeSync(): long;

    /**
     * 获取输入音频流时间戳和当前数据帧位置信息。
     * 
     * 该接口可以获取到音频通道实际录制位置（framePos）以及录制到该位置时候的时间戳（timestamp），时间戳单位为纳秒。
     *
     * @returns { Promise<AudioTimestampInfo> } Promise对象，返回音频流时间戳和当前数据帧位置信息。
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 19 dynamic
     * @since 23 static
     */
    getAudioTimestampInfo(): Promise<AudioTimestampInfo>;

    /**
     * 获取音频流时间戳和当前数据帧位置信息。同步返回结果。
     *
     * @returns { AudioTimestampInfo } 返回音频流时间戳和当前数据帧位置信息。
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 19 dynamic
     * @since 23 static
     */
    getAudioTimestampInfoSync(): AudioTimestampInfo;

    /**
     * 停止音频采集器，停止输入音频流。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当停止音频采集成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * 停止音频采集器，停止输入音频流。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * 释放音频采集器。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当释放音频采集器成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * 释放音频采集器。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * 获取采集器合理的最小缓冲区大小。使用callback异步回调。
     *
     * @param { AsyncCallback<long> } callback - 回调函数。当获取采集器合理的最小缓冲区大小成功，err为undefined，data为获取到的采集器合理的最小缓冲区大小；否则为错误对象。
     *     <br>单位为字节。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getBufferSize(callback: AsyncCallback<long>): void;
    /**
     * 获取采集器合理的最小缓冲区大小。使用Promise异步回调。
     *
     * @returns { Promise<long> } Promise对象，返回缓冲区大小。
     *     <br>单位为字节。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getBufferSize(): Promise<long>;
    /**
     * 获取采集器合理的最小缓冲区大小。同步返回结果。
     *
     * @returns { long } 返回缓冲区大小，单位为字节。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getBufferSizeSync(): long;

    /**
     * 获取录音流输入设备信息。同步返回结果。
     *
     * @returns { AudioDeviceDescriptors } 同步接口，返回设备属性数组类型数据。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getCurrentInputDevices(): AudioDeviceDescriptors;

    /**
     * 获取录音流配置。同步返回结果。
     *
     * @returns { AudioCapturerChangeInfo } 同步接口，返回描述音频采集器更改信息。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getCurrentAudioCapturerChangeInfo(): AudioCapturerChangeInfo;

    /**
     * 获取当前录制音频流的过载音频帧数量。使用Promise异步回调。
     *
     * @returns { Promise<long> } - Promise对象，返回音频流的过载音频帧数量。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 12 dynamic
     * @since 23 static
     */
    getOverflowCount(): Promise<long>;

    /**
     * 获取当前录制音频流的过载音频帧数量。同步返回数据。
     *
     * @returns { long } 返回音频流的过载音频帧数量。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 12 dynamic
     * @since 23 static
     */
    getOverflowCountSync(): long;

    /**
     * 设置当前录制音频流是否启用[静音打断模式](docroot://media/audio/using-audiocapturer-for-recording.md#设置静音打断模式)。使用Promise异步回调。
     *
     * @param { boolean } muteWhenInterrupted - 设置当前录制音频流是否启用静音打断模式, true表示启用，false表示不启用，保持为默认打断模式。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 6800103 - Operation not permitted at current state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    setWillMuteWhenInterrupted(muteWhenInterrupted: boolean): Promise<void>;

    /**
     * 应用将当前录音流的自身静音状态传递给系统音频模块。<!--RP1-->该接口不会触发录音流静音，当前仅在部分PC/2in1设备上用于优化设备功耗。<!--RP1End-->使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 该接口用于向系统音频模块上报应用自身的静音状态，不会改变录音流的实际静音状态。
     * >
     * > - 该接口仅在录音流处于运行态时允许调用，否则返回错误码6800103。
     * >
     * > - 同一录音流同时设置流级静音提示接口（本接口）和会话级静音提示接口
     * > [AudioSessionManager.setCapturerMuteHint]{@link audio.AudioSessionManager.setCapturerMuteHint}时，流级
     * > [setMuteHint]{@link audio.AudioCapturer.setMuteHint}优先级更高，数值以流级设置值为准。
     *
     * @param { boolean } mute - 应用自身给系统音频模块上报的静音状态。true表示应用将当前流静音，false表示取消静音。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 6800103 - Operation not permitted at current state, stream is not running.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setMuteHint(mute: boolean): Promise<void>;

    /**
     * 监听标记到达事件（当采集的帧数达到frame参数的值时触发，仅调用一次）。使用callback异步回调。
     * 
     * 如果将frame设置为100，当采集帧数到达第100帧时，系统将上报信息。
     *
     * @param { 'markReach' } type - 事件回调类型，支持的事件为'markReach'，当采集的帧数达到frame参数的值时，触发该事件。
     * @param { long } frame - 触发事件的帧数。该值必须大于0。
     * @param { Callback<long> } callback - 回调函数，返回frame参数的值。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    on(type: 'markReach', frame: long, callback: Callback<long>): void;

    /**
     * Subscribes to mark reached events. When the number of frames captured reaches the value of the frame parameter,
     * the callback is invoked.
     * @param { long } frame - Number of frames to trigger the event. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onMarkReach(frame: long, callback: Callback<long>): void;

    /**
     * 取消监听标记到达事件。使用callback异步回调。
     *
     * @param { 'markReach' } type - 事件回调类型，支持的事件为'markReach'，当取消监听标记到达事件时，触发该事件。
     * @param { Callback<long> } callback - 回调函数，返回frame参数的值。 [since 18]
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    off(type: 'markReach', callback?: Callback<long>): void;

    /**
     * Unsubscribes from the mark reached events.
     * @param { Callback<long> } [callback] - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offMarkReach(callback?: Callback<long>): void;

    /**
     * 监听标记到达事件（当采集的帧数达到frame参数的值时触发，即按周期上报信息）。使用callback异步回调。
     * 
     * 如果将frame设置为10，每渲染10帧数据均会上报信息（例如：第10帧、第20帧、第30帧......）。
     *
     * @param { 'periodReach' } type - 事件回调类型，支持的事件为'periodReach'，当采集的帧数达到frame参数的值时，触发该事件。
     * @param { long } frame - 触发事件的帧数。该值必须大于0。
     * @param { Callback<long> } callback - 回调函数，返回frame参数的值。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    on(type: 'periodReach', frame: long, callback: Callback<long>): void;

    /**
     * Subscribes to period reached events. When the period of frame capturing reaches the value of frame parameter,
     * the callback is invoked.
     * @param { long } frame - Period during which frame capturing is listened. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onPeriodReach(frame: long, callback: Callback<long>): void;

    /**
     * 取消监听标记到达事件。使用callback异步回调。
     *
     * @param { 'periodReach' } type - 事件回调类型，支持的事件为'periodReach'，当取消监听标记到达事件时，触发该事件。
     * @param { Callback<long> } callback - 回调函数，返回frame参数的值。 [since 18]
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    off(type: 'periodReach', callback?: Callback<long>): void;

    /**
     * Unsubscribes from period reached events.
     * @param { Callback<long> } [callback] - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offPeriodReach(callback?: Callback<long>): void;

    /**
     * 监听状态变化事件（当AudioCapturer状态发生变化时触发）。使用callback异步回调。
     *
     * @param { 'stateChange' } type - 事件回调类型，支持的事件为'stateChange'，当AudioCapturer状态发生变化时，触发该事件。
     * @param { Callback<AudioState> } callback - 回调函数，返回当前音频的状态。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    on(type: 'stateChange', callback: Callback<AudioState>): void;

    /**
     * Subscribes audio state change event callback.
     * @param { Callback<AudioState> } callback - Callback used to listen for the audio state change event.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onStateChange(callback: Callback<AudioState>): void;

    /**
     * 取消监听状态变化事件。使用callback异步回调。
     *
     * @param { 'stateChange' } type - 事件回调类型，支持的事件为'stateChange'，当取消监听状态变化事件时，触发该事件。
     * @param { Callback<AudioState> } callback - 回调函数，返回当前音频的状态。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 18 dynamic
     */
    off(type: 'stateChange', callback?: Callback<AudioState>): void;

    /**
     * Unsubscribes audio state change event callback.
     * @param { Callback<AudioState> } [callback] - Callback used to listen for the audio state change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offStateChange(callback?: Callback<AudioState>): void;

    /**
     * 监听音频中断事件（当音频焦点发生变化时触发）。使用callback异步回调。
     * 
     * AudioCapturer对象在start事件时获取焦点，在pause、stop等事件时释放焦点，无需开发者主动申请。
     * 
     * 调用此方法后，如果AudioCapturer对象获取焦点失败或发生中断事件（如被其他音频打断等），会收到[InterruptEvent]{@link audio.InterruptEvent}。建议应用根据
     * InterruptEvent的信息进行进一步处理。更多信息请参阅文档[音频焦点介绍](docroot://media/audio/audio-playback-concurrency.md)。
     *
     * @param { 'audioInterrupt' } type - 事件回调类型，支持的事件为'audioInterrupt'，当音频焦点状态发生变化时，触发该事件。
     * @param { Callback<InterruptEvent> } callback - 回调函数，返回中断事件信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform [since 12]
     * @since 10 dynamic
     */
    on(type: 'audioInterrupt', callback: Callback<InterruptEvent>): void;

    /**
     * Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is
     * triggered when audio recording is interrupted.
     * @param { Callback<InterruptEvent> } callback - Callback used to listen for interrupt callback.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 23 static
     */
    onAudioInterrupt(callback: Callback<InterruptEvent>): void;

    /**
     * 取消监听音频中断事件。
     *
     * @param { 'audioInterrupt' } type - 事件回调类型，支持的事件为'audioInterrupt'，当取消监听音频中断事件时，触发该事件。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform [since 12]
     * @since 10 dynamic
     */
    off(type: 'audioInterrupt'): void;

    /**
     * UnSubscribes to audio interrupt events.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 23 static
     */
    offAudioInterrupt(): void;

    /**
     * 监听音频输入设备变化事件（当音频输入设备发生变化时触发）。使用callback异步回调。
     *
     * @param { 'inputDeviceChange' } type - 事件回调类型，支持的事件为'inputDeviceChange'，当音频输入设备发生变化时，触发该事件。
     * @param { Callback<AudioDeviceDescriptors> } callback - 回调函数，返回变化后的音频输入设备信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    on(type: 'inputDeviceChange', callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * Subscribes input device change event callback.
     * The event is triggered when input device change for this stream.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onInputDeviceChange(callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * 取消监听音频输入设备更改事件。使用callback异步回调。
     *
     * @param { 'inputDeviceChange' } type - 事件回调类型，支持的事件为'inputDeviceChange'，当取消监听音频输入设备更改事件时，触发该事件。
     * @param { Callback<AudioDeviceDescriptors> } callback - 回调函数，返回音频输入设备信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    off(type: 'inputDeviceChange', callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Unsubscribes input device change event callback.
     * @param { Callback<AudioDeviceDescriptors> } [callback] - Callback used in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offInputDeviceChange(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * 监听录音流配置变化事件（当音频录制流状态变化、设备变化时触发）。使用callback异步回调。订阅内部是异步实现，是非精确回调，在录音流配置变化的同时注册回调，收到的返回结果存在变化可能性。
     *
     * @param { 'audioCapturerChange' } type - 事件回调类型，支持的事件为'audioCapturerChange'，当音频录制流状态变化、设备变化时，触发该事件。
     * @param { Callback<AudioCapturerChangeInfo> } callback - 回调函数，录音流配置或状态变化时返回监听的录音流当前配置和状态信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    on(type: 'audioCapturerChange', callback: Callback<AudioCapturerChangeInfo>): void;

    /**
     * Subscribes audio capturer info change event callback.
     * The event is triggered when input device change for this stream.
     * @param { Callback<AudioCapturerChangeInfo> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onAudioCapturerChange(callback: Callback<AudioCapturerChangeInfo>): void;

    /**
     * 取消监听录音流配置变化事件。使用callback异步回调。
     *
     * @param { 'audioCapturerChange' } type - 事件回调类型，支持的事件为'audioCapturerChange'，当取消监听录音流配置变化事件时，触发该事件。
     * @param { Callback<AudioCapturerChangeInfo> } callback - 回调函数，返回取消监听的录音流配置或状态变化。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    off(type: 'audioCapturerChange', callback?: Callback<AudioCapturerChangeInfo>): void;

    /**
     * Unsubscribes audio capturer info change event callback.
     * @param { Callback<AudioCapturerChangeInfo> } [callback] - Callback used in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offAudioCapturerChange(callback?: Callback<AudioCapturerChangeInfo>): void;

    /**
     * 监听音频数据读取回调事件（当需要读取音频流数据时触发）。使用callback异步回调。
     * 
     * 回调函数仅用来读取音频数据，请勿在回调函数中调用AudioCapturer相关接口。
     * 
     * 为了消除麦克风硬件设计带来的上电杂音，通常会对录音启动后的前100ms数据进行静音。
     *
     * @param { 'readData' } type - 事件回调类型，支持的事件为'readData'，当需要读取音频流数据时，触发该事件。
     * @param { Callback<ArrayBuffer> } callback - 回调函数，返回读到的数据缓冲区。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    on(type: 'readData', callback: Callback<ArrayBuffer>): void;

    /**
     * Subscribes audio data callback.
     * The event is triggered when audio buffer is available for reading more data.
     * @param { Callback<ArrayBuffer> } callback - Callback with the buffer to read.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onReadData(callback: Callback<ArrayBuffer>): void;

    /**
     * 取消监听音频数据读取回调事件。使用callback异步回调。
     *
     * @param { 'readData' } type - 事件回调类型，支持的事件为'readData'，当取消监听音频数据读取回调事件时，触发该事件。
     * @param { Callback<ArrayBuffer> } callback - 回调函数，返回读到的数据缓冲区。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    off(type: 'readData', callback?: Callback<ArrayBuffer>): void;

    /**
     * Unsubscribes audio data callback.
     * @param { Callback<ArrayBuffer> } [callback] - Callback used in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offReadData(callback?: Callback<ArrayBuffer>): void;

    /**
     * 订阅micIn音频数据回调。此回调的优先级高于“readData”回调。
     * 如果此回调和'readData'回调都被订阅，则仅此回调将被调用。
     * 有关更多详细信息，请参见{@link #onReadData}。
     * 当有音频缓冲可用于读取更多数据时，触发该事件。
     *
     * @param { Callback<AudioCapturerMicInData> } callback - 读取缓冲的回调。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800103 - Operation not permitted at running state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    onReadMicInData(callback: Callback<AudioCapturerMicInData>): void;

    /**
     * 取消订阅micIn音频数据回调。
     *
     * @param { Callback<AudioCapturerMicInData> } [callback] - 用于读取缓冲的回调。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permitted at running state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    offReadMicInData(callback?: Callback<AudioCapturerMicInData>): void;

    /**
     * Sets default input device of this Capturer to DEVICE_TYPE_ACCESSORY.
     * Other capturers' devices will not be affected by this method.
     * This method can only be used before the capture stream starts. Besides,
     * if audio accessory is not connected, this method will report fail. After
     * calling this function, the input device of this capturer will not be affected
     * by other interfaces.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    setInputDeviceToAccessory(): void;

    /**
     * 设置独立的音频会话策略和行为参数。
     * 
     * > **说明：**
     * >
     * > 当音频采集器在运行状态时调用此接口后，必须重新调用接口[start]{@link audio.AudioCapturer.start(callback: AsyncCallback<void>)}使其生效。
     *
     * @param { AudioSessionStrategy } strategy - 音频会话策略。
     * @param { int } behavior - 用于设置音频会话行为。
     *     <br>该参数可以是单个标志，也可以是多个标志的按位OR组合。
     *     <br>当前支持的音频会话行为详见[AudioSessionBehaviorFlags]{@link audio.AudioSessionBehaviorFlags}中定义的标志。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: int): void;

    /**
     * 设置当前音频捕获器的降噪模式。
     * 支持的模式需要通过{@link#getSupportedNoiseReduceModes}获取。
     * 实际效果可能因不同的音频设备而异，当有多个时将无效
     * 同时运行的录制流。
     * 只能在已创建和已停止状态下更改模式。
     *
     * @param { NoiseReductionMode } noiseReductionMode - 要设置的降噪模式。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Illegal state, audio capturer is in running or released state.
     * @throws { BusinessError } 6800104 - The setted mode is not supported.
     * @throws { BusinessError } 6800301 - Audio server process died.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setNoiseReductionMode(noiseReductionMode: NoiseReductionMode): void;

    /**
     * 获取当前音频捕获器的降噪模式。
     * 模式将只考虑默认和设置的状态，音频输入设备和流并发将
     * 不被视为。
     *
     * @returns { NoiseReductionMode } 当前音频采集器的降噪模式，
     *     默认值为{@link噪声抑制模式#FIDELITY}。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getNoiseReductionMode(): NoiseReductionMode;

    /**
     * 获取当前设备平台支持的所有降噪模式。
     * 目前，降噪效果仅在使用
     * {@link StreamUsage#Stream_USAGE_VOICE_MESSAGE}，其他支持的用法可能会在以后扩展。
     * 支持的模式只考虑音频格式和设备平台。
     * 不会考虑音频输入设备和流并发。
     *
     * @returns { Array<NoiseReductionMode> } 支持的降噪模式数组，至少
     *     支持{@link噪声抑制模式#FIDELITY}。
     * @throws { BusinessError } 6800301 - Audio server process died.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getSupportedNoiseReductionModes(): Array<NoiseReductionMode>;
  }

  /**
   * ASR noise suppression mode.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AsrNoiseSuppressionMode {
    /**
     * Bypass noise suppression.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BYPASS = 0,
    /**
     * Standard noise suppression.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    STANDARD = 1,
    /**
     * Near field noise suppression.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NEAR_FIELD = 2,
    /**
     * Far field noise suppression.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    FAR_FIELD = 3
  }

  /**
   * ASR AEC mode.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AsrAecMode {
    /**
     * Bypass AEC.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BYPASS = 0,
    /**
     * Using standard AEC.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    STANDARD = 1
  }

  /**
   * ASR voice control mode.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AsrVoiceControlMode {
    /**
     * Send output stream to TX.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_2_VOICE_TX = 0,
    /**
     * Send both output stream and MIC input to TX.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_MIX_2_VOICE_TX = 1,
    /**
     * Based on the AUDIO_2_VOICE_TX, Send output stream to voice call record.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_2_VOICE_TX_EX = 2,
    /**
     * Based on the AUDIO_MIX_2_VOICE_TX, Send output stream to voice call record.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_MIX_2_VOICE_TX_EX = 3
  }

  /**
   * ASR voice mute mode.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AsrVoiceMuteMode {
    /**
     * Mute the local output stream.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    OUTPUT_MUTE = 0,
    /**
     * Mute the local MIC input stream.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    INPUT_MUTE = 1,
    /**
     * Send tts output stream to TX and mute the local output stream.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    TTS_MUTE  = 2,
    /**
     * Mute the voice call stream.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    CALL_MUTE = 3,
    /**
     * Based on the OUTPUT_MUTE, send output stream to voice call record.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    OUTPUT_MUTE_EX = 4
  }

  /**
   * ASR whisper detection mode.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AsrWhisperDetectionMode {
    /**
     * No operation.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BYPASS = 0,
    /**
     * Use standard whisper detection model.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    STANDARD = 1
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface AsrProcessingController {
    /**
     * Set ASR AEC mode.
     * @param { AsrAecMode } mode - ASR AEC Mode.
     * @returns { boolean } Indicates whether the mode has been successfully set.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setAsrAecMode(mode: AsrAecMode): boolean;

    /**
     * Get ASR AEC mode.
     * @returns { AsrAecMode } ASR AEC Mode.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getAsrAecMode(): AsrAecMode;

    /**
     * Set ASR noise suppression mode.
     * @param { AsrNoiseSuppressionMode } mode - ASR noise suppression mode.
     * @returns { boolean } Indicates whether the mode has been successfully set.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setAsrNoiseSuppressionMode(mode: AsrNoiseSuppressionMode): boolean;

    /**
     * Get ASR noise suppression mode.
     * @returns { AsrNoiseSuppressionMode } ASR noise suppression mode.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getAsrNoiseSuppressionMode(): AsrNoiseSuppressionMode;

    /**
     * Query whether user is whispering.
     * @returns { boolean } whether user is whispering.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isWhispering(): boolean;

    /**
     * Set ASR voice control mode.
     * @param { AsrVoiceControlMode } mode - ASR voice control mode.
     * @param { boolean } enable - Indicates whether to switch on/off this mode.
     * @returns { boolean } Indicates whether the mode has been successfully set.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters unspecified.
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setAsrVoiceControlMode(mode: AsrVoiceControlMode, enable: boolean): boolean;

    /**
     * Set ASR voice mute mode.
     * @param { AsrVoiceMuteMode } mode - ASR voice mute mode.
     * @param { boolean } enable - Indicates whether to switch on/off this mode.
     * @returns { boolean } Indicates whether the mode has been successfully set.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters unspecified.
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setAsrVoiceMuteMode(mode: AsrVoiceMuteMode, enable: boolean): boolean;

    /**
     * Set ASR whisper detection mode.
     * @param { AsrWhisperDetectionMode } mode - ASR whisper detection mode.
     * @returns { boolean } Indicates whether the mode has been successfully set.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters unspecified.
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setAsrWhisperDetectionMode(mode: AsrWhisperDetectionMode): boolean;

    /**
     * Get ASR whisper detection mode.
     * @returns { AsrWhisperDetectionMode } ASR whisper detection mode.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getAsrWhisperDetectionMode(): AsrWhisperDetectionMode;
  }

  /**
   * Create ASR processing controller on one audio capturer.
   * @param { AudioCapturer } audioCapturer - The audio capturer whose ASR processing will be controlled. The source
   * type of this capturer must be {@link SourceType#SOURCE_TYPE_VOICE_RECOGNITION}.
   * @returns { AsrProcessingController } ASR Processing Controller.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                 1.Mandatory parameters are left unspecified;
   *                                 2.Incorrect parameter types.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Operation not allowed. e.g. the source type of the input audio capturer is not
   * {@link SourceType#SOURCE_TYPE_VOICE_RECOGNITION} or {@link SourceType#SOURCE_TYPE_WAKEUP}, or this audio capturer
   * is already released.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   */
  function createAsrProcessingController(audioCapturer: AudioCapturer): AsrProcessingController;

  /**
   * Create ASR processing controller on one audio capturer.
   * @param { AudioCapturer } audioCapturer - The audio capturer whose ASR processing will be controlled. The source
   *     type of this capturer must be {@link SourceType#SOURCE_TYPE_VOICE_RECOGNITION}.
   * @returns { AsrProcessingController | null } ASR Processing Controller, or null when an error happens.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Operation not allowed. e.g. the source type of the input audio capturer is not
   *     {@link SourceType#SOURCE_TYPE_VOICE_RECOGNITION} or {@link SourceType#SOURCE_TYPE_WAKEUP}, or this audio capturer
   *     is already released.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 23 static
   */
  function createAsrProcessingController(audioCapturer: AudioCapturer): AsrProcessingController | null;

  /**
   * Enumerates tone types for player.
   *
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum ToneType {
    /**
     * Dial tone for key 0.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_0 = 0,
    /**
     * Dial tone for key 1.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_1 = 1,
    /**
     * Dial tone for key 2.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_2 = 2,
    /**
     * Dial tone for key 3.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_3 = 3,
    /**
     * Dial tone for key 4.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_4 = 4,
    /**
     * Dial tone for key 5.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_5 = 5,
    /**
     * Dial tone for key 6.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_6 = 6,
    /**
     * Dial tone for key 7.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_7 = 7,
    /**
     * Dial tone for key 8.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_8 = 8,
    /**
     * Dial tone for key 9.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_9 = 9,
    /**
     * Dial tone for key *.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_S = 10,
    /**
     * Dial tone for key #.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_P = 11,
    /**
     * Dial tone for key A.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_A = 12,
    /**
     * Dial tone for key B.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_B = 13,
    /**
     * Dial tone for key C.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_C = 14,
    /**
     * Dial tone for key D.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_D = 15,
    /**
     * Supervisory tone for dial.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_DIAL = 100,
    /**
     * Supervisory tone for busy.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_BUSY = 101,
    /**
     * Supervisory tone for dial.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_CONGESTION = 102,
    /**
     * Supervisory tone for radio path acknowledgment.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_RADIO_ACK = 103,
    /**
     * Supervisory tone for radio path not available.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_RADIO_NOT_AVAILABLE = 104,
    /**
     * Supervisory tone for call waiting.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_CALL_WAITING = 106,
    /**
     * Supervisory tone for ringtone.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_RINGTONE = 107,
    /**
     * Supervisory tone for call holding.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_CALL_HOLDING = 108,
    /**
     * Proprietary tone for beep.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_PROPRIETARY_BEEP = 200,
    /**
     * Proprietary tone for positive acknowledgment.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_PROPRIETARY_ACK = 201,
    /**
     * Proprietary tone for prompt.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_PROPRIETARY_PROMPT = 203,
    /**
     * Proprietary tone for double beep.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_PROPRIETARY_DOUBLE_BEEP = 204
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface TonePlayer {
    /**
     * Loads tone. This method uses an asynchronous callback to return the result.
     * @param { ToneType } type - Tone type to play.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    load(type: ToneType, callback: AsyncCallback<void>): void;
    /**
     * Loads tone. This method uses a promise to return the result.
     * @param { ToneType } type - Tone type to play.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    load(type: ToneType): Promise<void>;

    /**
     * Starts player. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * Starts player. This method uses a promise to return the result.
     * @returns { Promise<void> }Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * Stops player. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * Stops player. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * Releases the player. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases the player. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
  }

  /**
   * 待查询ContentType和StreamUsage组合场景下的音效模式数组类型，[AudioEffectMode]{@link audio.AudioEffectMode}数组，只读。
   *
   * @typedef { Array<Readonly<AudioEffectMode>> } AudioEffectInfoArray
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 10 dynamic
   * @since 23 static
   */
  type AudioEffectInfoArray = Array<Readonly<AudioEffectMode>>;

  /**
   * 表示音效模式的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum AudioEffectMode {
    /**
     * 关闭音效。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EFFECT_NONE = 0,
    /**
     * 默认音效。
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EFFECT_DEFAULT = 1
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface AudioSpatialDeviceState {
    /**
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    address: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isSpatializationSupported: boolean;

    /**
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isHeadTrackingSupported: boolean;

    /**
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    spatialDeviceType: AudioSpatialDeviceType;
  }

  /**
   * Describes a spatial device type group.
   *
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum AudioSpatialDeviceType {
    /**
     * Audio Spatial Device Type none.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_NONE = 0,
    /**
     * Audio Spatial Device Type in-ear headphone.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_IN_EAR_HEADPHONE = 1,
    /**
     * Audio Spatial Device Type half-in-ear headphone.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_HALF_IN_EAR_HEADPHONE = 2,
    /**
     * Audio Spatial Device Type over-ear headphone.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_OVER_EAR_HEADPHONE = 3,
    /**
     * Audio Spatial Device Type glasses.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_GLASSES = 4,
    /**
     * Audio Spatial Device Type others.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_OTHERS = 5
  }

  /**
   * Describes a spatialization scene type group.
   *
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioSpatializationSceneType {
    /**
     * Audio Spatialization Scene Type Default.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * Audio Spatialization Scene Type Music.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MUSIC = 1,
    /**
     * Audio Spatialization Scene Type Movie.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MOVIE = 2,
    /**
     * Audio Spatialization Scene Type Audio Book.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIOBOOK = 3
  }

  /**
   * 表示音频文件声道布局类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  enum AudioChannelLayout {
    /**
     * 未知声道布局。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_UNKNOWN = 0x0,
    /**
     * 声道布局为MONO。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_MONO = 0x4,
    /**
     * 声道布局为STEREO。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_STEREO = 0x3,
    /**
     * 声道布局为STEREO-DOWNMIX。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_STEREO_DOWNMIX = 0x60000000,
    /**
     * 声道布局为2.1。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_2POINT1 = 0xB,
    /**
     * 声道布局为3.0。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_3POINT0 = 0x103,
    /**
     * 声道布局为SURROUND。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_SURROUND = 0x7,
    /**
     * 声道布局为3.1。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_3POINT1 = 0xF,
    /**
     * 声道布局为4.0。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_4POINT0 = 0x107,
    /**
     * 声道布局为QUAD。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_QUAD = 0x33,
    /**
     * 声道布局为QUAD-SIDE。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_QUAD_SIDE = 0x603,
    /**
     * 声道布局为2.0.2。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_2POINT0POINT2 = 0x3000000003,
    /**
     * 声道排序为ACN_N3D（根据ITU标准）的一阶FOA文件。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER1_ACN_N3D = 0x100000000001,
    /**
     * 声道排序为ACN_SN3D（根据ITU标准）的一阶FOA文件。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER1_ACN_SN3D = 0x100000001001,
    /**
     * 声道排序为FUMA（根据ITU标准）的一阶FOA文件。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER1_FUMA = 0x100000000101,
    /**
     * 声道布局为4.1。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_4POINT1 = 0x10F,
    /**
     * 声道布局为5.0。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT0 = 0x607,
    /**
     * 声道布局为5.0-BACK。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT0_BACK = 0x37,
    /**
     * 声道布局为2.1.2。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_2POINT1POINT2 = 0x300000000B,
    /**
     * 声道布局为3.0.2。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_3POINT0POINT2 = 0x3000000007,
    /**
     * 声道布局为5.1。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT1 = 0x60F,
    /**
     * 声道布局为5.1-BACK。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT1_BACK = 0x3F,
    /**
     * 声道布局为6.0。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_6POINT0 = 0x707,
    /**
     * 声道布局为HEXAGONAL。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_HEXAGONAL = 0x137,
    /**
     * 声道布局为3.1.2。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_3POINT1POINT2 = 0x500F,
    /**
     * 声道布局为6.0-FRONT。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_6POINT0_FRONT = 0x6C3,
    /**
     * 声道布局为6.1。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_6POINT1 = 0x70F,
    /**
     * 声道布局为6.1-BACK。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_6POINT1_BACK = 0x13F,
    /**
     * 声道布局为6.1-FRONT。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_6POINT1_FRONT = 0x6CB,
    /**
     * 声道布局为7.0。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT0 = 0x637,
    /**
     * 声道布局为7.0-FRONT。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT0_FRONT = 0x6C7,
    /**
     * 声道布局为7.1。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT1 = 0x63F,
    /**
     * 声道布局为OCTAGONAL。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_OCTAGONAL = 0x737,
    /**
     * 声道布局为5.1.2。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT1POINT2 = 0x300000060F,
    /**
     * 声道布局为7.1-WIDE。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT1_WIDE = 0x6CF,
    /**
     * 声道布局为7.1-WIDE-BACK。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT1_WIDE_BACK = 0xFF,
    /**
     * 声道排序为ACN_N3D（根据ITU标准）的二阶HOA文件。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER2_ACN_N3D = 0x100000000002,
    /**
     * 声道排序为ACN_SN3D（根据ITU标准）的二阶HOA文件。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER2_ACN_SN3D = 0x100000001002,
    /**
     * 声道排序为FUMA（根据ITU标准）的二阶HOA文件。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER2_FUMA = 0x100000000102,
    /**
     * 声道布局为5.1.4。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT1POINT4 = 0x2D60F,
    /**
     * 声道布局为7.1.2。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT1POINT2 = 0x300000063F,
    /**
     * 声道布局为7.1.4。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT1POINT4 = 0x2D63F,
    /**
     * 声道布局为10.2。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_10POINT2 = 0x180005737,
    /**
     * 声道布局为9.1.4。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_9POINT1POINT4 = 0x18002D63F,
    /**
     * 声道布局为9.1.6。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_9POINT1POINT6 = 0x318002D63F,
    /**
     * 声道布局为HEXADECAGONAL。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_HEXADECAGONAL = 0x18003F737,
    /**
     * 声道排序为ACN_N3D（根据ITU标准）的三阶HOA文件。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER3_ACN_N3D = 0x100000000003,
    /**
     * 声道排序为ACN_SN3D（根据ITU标准）的三阶HOA文件。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER3_ACN_SN3D = 0x100000001003,
    /**
     * 声道排序为FUMA（根据ITU标准）的三阶HOA文件。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER3_FUMA = 0x100000000103
  }

  /**
   * Enumerates audio effect flags.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  enum EffectFlag {
    /**
     * Audio render effect.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    RENDER_EFFECT_FLAG = 0,

    /**
     * Audio capture effect.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    CAPTURE_EFFECT_FLAG = 1
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface AudioEffectProperty {
    /**
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    name: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    category: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    flag: EffectFlag;
  }

  /**
   * 描述返听使用的音频设备对，包含输入设备和输出设备。
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AudioDevicePair {
    /**
     * 输入音频设备描述。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    inputDevice: AudioDeviceDescriptor;

    /**
     * 输出音频设备描述。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    outputDevice: AudioDeviceDescriptor;
  }

  /**
   * 提供音频返听的相关接口。
   * 
   * 在使用AudioLoopback的接口之前，需先通过[audio.createAudioLoopback]{@link audio.createAudioLoopback}获取AudioLoopback实例。
   * 
   * 当启用音频返听时，系统会创建低时延渲染器与低时延采集器，实现低时延耳返功能。采集的音频直接通过内部路由返回到渲染器。对于渲染器，其音频焦点策略与
   * [STREAM_USAGE_MUSIC]{@link audio.StreamUsage}相匹配。对于采集器，其音频焦点策略与[SOURCE_TYPE_MIC]{@link audio.SourceType}相匹配。
   * 
   * 输入\输出设备由系统自动选择。如果当前输入\输出不支持低时延，则音频返听无法启用。在运行过程中，如果音频焦点被另一个音频流抢占，输入\输出设备切换到不支持低时延的设备，系统会自动禁用音频返听。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 20开始支持。
   *
   * @typedef AudioLoopback
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 20 dynamic
   * @since 23 static
   */
  interface AudioLoopback {
    /**
     * 获取音频返听状态。使用Promise异步回调。
     *
     * @returns { Promise<AudioLoopbackStatus> } Promise对象，返回音频返听状态。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    getStatus(): Promise<AudioLoopbackStatus>;

    /**
     * 设置音频返听的音量。使用Promise异步回调。
     *
     * @param { double } volume 音量值范围为[0.0, 1.0]。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 6800101 - Parameter verification failed, form 0.0 to 1.0.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    setVolume(volume: double): Promise<void>;

    /**
     * 获取音频返听输出音量。
     *
     * @returns { double } 返回当前音频返听输出音量，范围为[0.0, 1.0]。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getVolume(): double;

    /**
     * 监听返听状态变化事件（当AudioLoopback的状态发生变化时触发）。使用callback异步回调。
     *
     * @param { 'statusChange' } type 事件回调类型，支持的事件为'statusChange'，当AudioLoopback的状态发生变化时，触发该事件。
     * @param { Callback<AudioLoopbackStatus> } callback 回调函数，返回当前音频返听的状态。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     */
    on(type: 'statusChange', callback: Callback<AudioLoopbackStatus>): void;

    /**
     * Subscribes to audio loopback status changes.
     * @param { Callback<AudioLoopbackStatus> } callback Callback used to return the audio loopback status
     *     change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onStatusChange(callback: Callback<AudioLoopbackStatus>): void;

    /**
     * 取消监听音频状态事件。使用callback异步回调。
     *
     * @param { 'statusChange' } type - 事件回调类型，支持的事件为'statusChange'，当取消监听音频状态事件时，触发该事件。
     * @param { Callback<AudioLoopbackStatus> } [callback] - 回调函数，返回当前音频返听的状态。
     * @throws  { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     */
    off(type: 'statusChange', callback?: Callback<AudioLoopbackStatus>): void;

    /**
     * Unsubscribes audio loopback status change event callback.
     * @param { Callback<AudioLoopbackStatus> } [callback] - Callback used to listen for the audio loopback status
     *     change event.
     * @throws  { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offStatusChange(callback?: Callback<AudioLoopbackStatus>): void;

    /**
     * 获取当前设备连接状态下支持返听的音频输入输出设备组合。
     *
     * @returns { Array<AudioDevicePair> } 返回支持返听的音频输入输出设备数组。
     *     <br>如果没有可用的输入输出设备组合，则返回空数组。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getSupportedDevicePairs(): Array<AudioDevicePair>;

    /**
     * 获取当前设备连接状态下系统推荐的返听音频输入输出设备组合。
     *
     * @returns { AudioDevicePair | null } 返回系统推荐的音频输入输出设备组合。
     *     <br>如果没有可用的输入输出设备组合，则返回null。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getPreferredDevicePair(): AudioDevicePair | null;

    /**
     * 启用或禁用音频返听器。使用Promise异步回调。
     *
     * @permission ohos.permission.MICROPHONE
     * @param { boolean } enable - 表示是否启用音频返听器。true表示启用，false表示不启用。
     * @returns { Promise<boolean> } Promise对象。返回true表示功能执行成功；返回false表示功能执行失败。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    enable(enable: boolean): Promise<boolean>;

    /**
     * 设置音频返听器的混响模式。
     *
     * @param { AudioLoopbackReverbPreset } preset - 混响模式。
     * @returns { boolean } 返回混响模式是否设置成功。true表示成功，false表示不成功。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    setReverbPreset(preset: AudioLoopbackReverbPreset): boolean;

    /**
     * 获取当前音频返听器的混响模式。
     *
     * @returns { AudioLoopbackReverbPreset  } 返回当前音频返听器的混响模式。
     *     <br>在没有被修改的情况下，默认的混响模式是THEATER。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    getReverbPreset(): AudioLoopbackReverbPreset;

    /**
     * 设置音频返听器的均衡器类型。
     *
     * @param { AudioLoopbackEqualizerPreset } preset - 均衡器类型。
     * @returns { boolean } 返回均衡器类型是否设置成功。true表示成功，false表示不成功。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    setEqualizerPreset(preset: AudioLoopbackEqualizerPreset): boolean;

    /**
     * 获取当前音频返听器的均衡器类型。
     *
     * @returns { AudioLoopbackEqualizerPreset } 返回当前音频返听器的均衡器类型。
     *     <br>在没有被修改的情况下，默认的均衡器类型是FULL。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    getEqualizerPreset(): AudioLoopbackEqualizerPreset;
  }

  /**
   * 描述声卡信息。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SoundCardInfo {
    /**
     * 声卡名称。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    name: string;
    /**
     * 声卡供应商。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    vendor: string;
    /**
     * 声卡型号。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    model: string;
    /**
     * 声卡总线地址。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    busAddress: string;
    /**
     * 声卡驱动。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    driver: string;
  }

  /**
   * 提供增强的音频设备管理能力。
   *
   * @syscap SystemCapability.Multimedia.Audio.DeviceEnhance
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AudioDeviceEnhanceManager {
    /**
     * 获取声卡信息。该方法使用promise返回查询结果。
     *
     * @returns { Promise<SoundCardInfo> } Promise用于返回声卡信息。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Multimedia.Audio.DeviceEnhance
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getSoundCardInfo(): Promise<SoundCardInfo>;

    /**
     * 查询系统是否支持该管理器提供的增强路由功能。
     * 包括为应用程序或音频流选择输入和输出设备。
     * 建议您的应用在使用前先调用此API确认系统支持
     * 这些增强的路由API。即使对于相同类型的主机设备，某些型号也可能支持这些功能，而其他功能由于硬件限制可能不具备。如果系统不支持这些增强的路由功能，调用它们将不起作用，系统将选择应用程序或音频流的默认输入/输出设备。
     *
     *
     * @returns { boolean } The value true indicates that the system supports enhanced routing functions.
     * @syscap SystemCapability.Multimedia.Audio.DeviceEnhance
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isEnhancedRoutingSupported(): boolean;

    /**
     * 选择应用程序的输出设备。此设置适用于创建的所有播放流
     * 除非为特定流指定了特定的输出设备
     * {@link AudioDeviceEnhanceManager.selectOutputDeviceForAudioRenderer}.当应用程序实现
     * 它自己的UX用于输出设备选择，它可以通过
     * {@link AudioRoutingManager.get AvailableDevices}，并使用{@link AudioRoutingManager.getPreferOutputDeviceForRendererInfo}接口获取当前
     * 选定的输出设备。当您的应用程序退出或选择的
     * 设备下线。在您的应用程序重新启动或设备重新联机后，您的应用程序必须重新发布选择才能使其生效。如果系统不支持该功能，则会为您的应用程序选择一个默认的输出设备。
     *
     * @param { AudioDeviceDescriptor } outputDevice - 通过
     *     {@link AudioRoutingManager.getAvailableDevices}接口返回的音频设备描述数组
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800101 - Parameter verification failed, for example,
     *     the selected device does not exist.
     * @throws { BusinessError } 6800301 - Audio service error occurs, such as the service died.
     * @syscap SystemCapability.Multimedia.Audio.DeviceEnhance
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    selectOutputDevice(outputDevice: AudioDeviceDescriptor): Promise<void>;

    /**
     * 为您的应用程序选择输入设备。此设置适用于创建的所有录制流
     * 在您的应用程序下，除非为特定流指定了特定输入设备
     * {@link AudioDeviceEnhanceManager.selectInputDeviceForAudioCapturer}.当应用程序实现
     * 它自己的UX用于输入设备选择，它可以通过
     * {@link AudioRoutingManager.get AvailableDevices}，并使用{@link AudioRoutingManager.getPreferredInputDeviceForCapturerInfo}接口获取当前
     * 选择的输入设备。当您的应用程序退出或选择的
     * 设备下线。在您的应用程序重新启动或设备重新联机后，您的应用程序必须重新发布选择才能使其生效。如果系统不支持该功能，它将为您的应用程序选择一个默认的输入设备。
     *
     * @param { AudioDeviceDescriptor } inputDevice - {@link AudioRoutingManager.get AvailableDevices}接口返回的音频设备描述数组。
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800101 - Parameter verification failed, for example,
     *     the selected device does not exist.
     * @throws { BusinessError } 6800301 - Audio service error occurs, such as the service died.
     * @syscap SystemCapability.Multimedia.Audio.DeviceEnhance
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    selectInputDevice(inputDevice: AudioDeviceDescriptor): Promise<void>;

    /**
     * 选择目标AudioRenderer的输出设备。您的应用程序必须确保指定的AudioRenderer是有效的。此选择仅适用于指定流；其他播放流您的应用程序将使用您的应用程序的强制选择或系统的默认输出设备。
     * 当您的应用程序退出或所选设备脱机时，选择将变为无效。
     * 应用程序重新启动或设备重新联机后，您的应用程序必须重新发出选择使其生效。如果系统不支持该功能，系统将选择渲染器的默认输出设备。
     *
     * @param { AudioRenderer } renderer - AudioRenderer的实例。
     * @param { AudioDeviceDescriptor } outputDevice - {@link AudioRoutingManager.get AvailableDevices}接口返回的音频设备描述数组。
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800101 - Parameter verification failed, for example,
     *     the selected device does not exist.
     * @throws { BusinessError } 6800301 - Audio service error occurs, such as the service died.
     * @syscap SystemCapability.Multimedia.Audio.DeviceEnhance
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    selectOutputDeviceForAudioRenderer(renderer: AudioRenderer, outputDevice: AudioDeviceDescriptor): Promise<void>;

    /**
     * 选择目标AudioCapturer的输入设备。您的应用程序必须确保指定的AudioCapturer是有效的。此选择仅适用于指定流；其他录制流您的应用程序将使用您的应用程序的强制选择或系统的默认输入设备。
     * 当您的应用程序退出或所选设备脱机时，选择将变为无效。
     * 应用程序重新启动或设备重新联机后，您的应用程序必须重新发出选择使其生效。如果系统不支持该功能，系统将选择捕获器的默认输入设备。
     *
     * @param { AudioCapturer } capturer - AudioCapturer的实例。
     * @param { AudioDeviceDescriptor } inputDevice - {@link AudioRoutingManager.get AvailableDevices}接口返回的音频设备描述数组。
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800101 - Parameter verification failed, for example,
     *     the selected device does not exist.
     * @throws { BusinessError } 6800301 - Audio service error occurs, such as the service died.
     * @syscap SystemCapability.Multimedia.Audio.DeviceEnhance
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    selectInputDeviceForAudioCapturer(capturer: AudioCapturer, inputDevice: AudioDeviceDescriptor): Promise<void>;
  }
}

export default audio;