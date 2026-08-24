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
  * @file
  * @kit AudioKit
 */
import { ErrorCallback, AsyncCallback, Callback, BusinessError } from './@ohos.base';

/**
 * 音频管理提供基础的音频控制能力，包括音量调节、设备管理、数据采集及渲染。
 * 该模块提供以下音频相关的常用功能：
 *
 * - [AudioManager]{@link audio.AudioManager}：音频管理器。
 * - [AudioDeviceEnhanceManager]{@link audio.AudioDeviceEnhanceManager}：音频设备增强管理器。
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
   * 本地设备网络id。
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  const LOCAL_NETWORK_ID: string;

  /**
   * 默认音量组ID。
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  const DEFAULT_VOLUME_GROUP_ID: int;

  /**
   * 默认焦点组ID。
   *
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
   * @param { AsyncCallback<AudioCapturer> } callback - 回调函数。当获取音频采集器成功，err为undefined，data为获取到的音频采集器对象；否则为错误对象。异常将返回error对象：<
   *     br>错误码6800301：表示参数校验异常、权限校验异常或系统处理异常（具体错误查看系统日志）。<br>错误码6800101：表示必选参数为空或参数类型错误。
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform [since 12]
   * @since 8 dynamic
   */
  function createAudioCapturer(options: AudioCapturerOptions, callback: AsyncCallback<AudioCapturer>): void;

  /**
   * 获取一个 {@link AudioCapturer} 实例。此方法通过异步回调返回捕获器实例。
   * 使用 {@link #AudioCapturer} 录制音频时，需要根据 options 参数中的不同 {@link #Sourcetype} 申请权限，
   * 例如大多数麦克风录音场景需要申请 {@link #ohos.permission.MICROPHONE} 权限。
   *
   * @param { AudioCapturerOptions } options - 配置音频采集器。
   * @param { AsyncCallback<AudioCapturer | null> } callback - 回调函数，用于返回音频采集器实例，若发生任何错误则返回 null。
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
   *
   *     错误码6800301：表示参数校验异常、权限校验异常或系统处理异常（具体错误查看系统日志）。
   *
   *     错误码6800101：表示必选参数为空或参数类型错误。
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform [since 12]
   * @since 8 dynamic
   */
  function createAudioCapturer(options: AudioCapturerOptions): Promise<AudioCapturer>;

  /**
   * 获取音频采集器。使用Promise异步回调。
   *
   * @param { AudioCapturerOptions } options - 配置音频采集器。
   * @returns { Promise<AudioCapturer | null> } Promise对象，返回音频捕获器实例，若发生任何错误则返回 null。
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800301 - Audio system internal error, such as system crash.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  function createAudioCapturer(options: AudioCapturerOptions): Promise<AudioCapturer | null>;

  /**
   * 获取音频采集器。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > - 此采集器可用于同时录制麦克风输入（Mic-In）音频数据和回声参考信号，供应用层进行算法处理。
   * >
   * > - 麦克风输入音频数据和回声参考信号会根据应用层设置的配置，被放入同一个缓冲区或多个独立缓冲区中。
   * >
   * > - 仅允许使用[SourceType]{@link @ohos.multimedia.audio:audio.SourceType}为SOURCE_TYPE_UNPROCESSED_VOICE_ASSISTANT类型的音源输入
   * > ，其他类型的音源输入将被系统拒绝。此外，当应用处于后台运行状态时，不允许创建该采集器实例。
   *
   * @permission ohos.permission.MICROPHONE
   * @param { AudioCapturerMicInConfig } config - 配置音频采集器。
   * @returns { Promise<AudioCapturer | null> } Promise对象，成功将返回音频采集器对象，失败时将返回包含错误信息的error对象。
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
   * 获取一个 {@link AudioRenderer} 实例。
   * 此方法使用 Promise 方式返回渲染器实例。
   *
   * AudioRenderer 实例用于播放流式音频数据。
   * 使用 AudioRenderer API 时，为达到更好的性能和更低的功耗，应用需遵循以下指导：
   * 在音乐或有声书后台播放场景下，可参考最佳实践文档《音乐播放场景低功耗规则》，实现低功耗。
   * 在导航场景下，可参考《导航定位场景低功耗规则》，实现低功耗。
   *
   * 应用开发者还需注意应用进入后台时的处理，检查音频播放是否仍需继续，参见《音频资源使用规范》。
   * 避免持续发送静音音频数据造成系统资源浪费，否则系统检测到该行为后会采取管控措施，参见《音频播放规范》。
   *
   * 如果您想使用 AudioRenderer API 实现音乐播放应用，还需考虑多种交互场景，参见《音频应用开发实践》。
   *
   * @param { AudioRendererOptions } options - 配置渲染器。
   * @param { AsyncCallback<AudioRenderer | null> } callback - 回调函数用于返回音频渲染器实例，或在发生错误时返回 null。
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
   * 获取一个 {@link AudioRenderer} 实例。
   * 此方法使用 Promise 方式返回渲染器实例。
   *
   * AudioRenderer 实例用于播放流式音频数据。
   * 使用 AudioRenderer API 时，为达到更好的性能和更低的功耗，应用需遵循以下指导：
   * 在音乐或有声书后台播放场景下，可参考最佳实践文档《音乐播放场景低功耗规则》，实现低功耗。
   * 在导航场景下，可参考《导航定位场景低功耗规则》，实现低功耗。
   *
   * 应用开发者还需注意应用进入后台时的处理，检查音频播放是否仍需继续，参见《音频资源使用规范》。
   * 避免持续发送静音音频数据造成系统资源浪费，否则系统检测到该行为后会采取管控措施，参见《音频播放规范》。
   *
   * 如果您想使用 AudioRenderer API 实现音乐播放应用，还需考虑多种交互场景，参见《音频应用开发实践》。
   *
   * @param { AudioRendererOptions } options - 配置渲染器。
   * @returns { Promise<AudioRenderer | null> } Promise对象，返回音频渲染器对象，或在发生错误时返回 null。
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @since 23 static
   */
  function createAudioRenderer(options: AudioRendererOptions): Promise<AudioRenderer | null>;

  /**
   * 创建DTMF播放器。使用callback异步回调。
   *
   * @param { AudioRendererInfo } options - 配置音频渲染器信息。
   * @param { AsyncCallback<TonePlayer> } callback - 回调函数。当获取DTMF播放器成功，err为undefined，data为获取到的DTMF播放器对象；否则为错误对象。
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 9 dynamic
   */
  function createTonePlayer(options: AudioRendererInfo, callback: AsyncCallback<TonePlayer>): void;

  /**
   * 获取一个 {@link TonePlayer} 实例，此方法采用异步回调方式返回渲染器实例。
   *
   * @param { AudioRendererInfo } options - 配置音频渲染器信息。
   * @param { AsyncCallback<TonePlayer | null> } callback - 回调函数用于返回 tonePlayer 实例，或在发生错误时返回 null。
   * @throws { BusinessError } 202 - Not system App.
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 23 static
   */
  function createTonePlayer(options: AudioRendererInfo, callback: AsyncCallback<TonePlayer | null>): void;

  /**
   * 创建DTMF播放器。使用Promise异步回调。
   *
   * @param { AudioRendererInfo } options - 配置音频渲染器信息。
   * @returns { Promise<TonePlayer> } Promise对象，返回DTMF播放器对象。
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 9 dynamic
   */
  function createTonePlayer(options: AudioRendererInfo): Promise<TonePlayer>;

  /**
   * 获取一个 {@link TonePlayer} 实例，此方法使用 Promise 返回渲染器实例。
   *
   * @param { AudioRendererInfo } options - 配置音频渲染器信息。
   * @returns { Promise<TonePlayer | null> } Promise 过去用于返回 tonePlayer 实例，或者在发生错误时返回 null。
   * @throws { BusinessError } 202 - Not system App.
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 23 static
   */
  function createTonePlayer(options: AudioRendererInfo): Promise<TonePlayer | null>;

  /**
   * 创建音频返听器。使用Promise异步回调。
   * 在使用createAudioLoopback接口之前，需先通过
   * [isAudioLoopbackSupported]{@link @ohos.multimedia.audio:audio.AudioStreamManager.isAudioLoopbackSupported}查询系统返听能力。
   *
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
   * 在使用createAudioLoopback接口之前，需先通过
   * [isAudioLoopbackSupported]{@link @ohos.multimedia.audio:audio.AudioStreamManager.isAudioLoopbackSupported}查询系统返听能力。
   *
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
   * 创建一个<b>AudioLoopback</b>实例，该实例使用快速采集器和渲染器，实现低延迟的入耳监听。
   *
   * @permission ohos.permission.MICROPHONE
   * @param { AudioLoopbackMode } mode 音频返听模式。 [since 23]
   * @returns { Promise<AudioLoopback | null> } Promise 过去用于返回 <b>AudioLoopback</b> 实例，或在发生错误时返回 null。 [since 23]
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Unsupported API.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Loopback mode is unsupported.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 23 static
   */
  /**
   * 创建一个<b>AudioLoopback</b>实例，该实例使用快速采集器和渲染器，实现低延迟的入耳监听。
   *
   * @param { AudioLoopbackMode } mode - 音频返听模式。 [since 23]
   * @returns { Promise<AudioLoopback | null> } Promise 过去用于返回 <b>AudioLoopback</b> 实例，或在发生错误时返回 null。 [since 23]
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Loopback mode is unsupported.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 26.0.0 static
   */
  function createAudioLoopback(mode: AudioLoopbackMode): Promise<AudioLoopback | null>;

  /**
   * 创建一个全局音频返听实例，该实例提供低延迟的入耳监听功能。
   * 硬件音频返听只能在支持的平台中创建，应用程序应首先使用{@link AudioStreamManager#isAudioLoopbackSupported} 进行检查。
   * 系统中只能存在一个拥有全局返听功能的主实例，其他实例均为控制器。控制器可以通过向主实例发送命令来管理全局返听，并监听其状态变化。
   *
   * @param { AudioLoopbackMode } mode - 音频返听模式。
   * @param { boolean } isController - 创建一个拥有音频返听或仅包含控制器的对象。
   * @returns { Promise<AudioLoopback | null> } Promise 用于返回音频返听实例，或在发生错误时返回 null。
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
   * 枚举，音频流类型。
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
     * 系统音。
     *
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
     * 超声波。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    ULTRASONIC = 10,
    /**
     * 通知音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NOTIFICATION = 11,
    /**
     * 导航。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NAVIGATION = 12,
    /**
     * 所有公共音频流。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ALL = 100
  }

  /**
   * 枚举，可获取的设备种类。
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum DeviceFlag {
    /**
     * 无设备。
     *
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
     * 分布式输出设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DISTRIBUTED_OUTPUT_DEVICES_FLAG = 4,
    /**
     * 分布式输入设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DISTRIBUTED_INPUT_DEVICES_FLAG = 8,
    /**
     * 分布式输入和输出设备。
     *
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 辅助设备（例如遥控器上的麦克风等）。
     *
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
     * 从API version 18开始，该接口支持在原子化服务中使用。
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
     * 蓝牙设备SPP（Serial Port Profile）连接。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    BLUETOOTH_SPP = 33,

    /**
     * 星闪设备PORT连接。
     *
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
    REMOTE_DAUDIO = 25
  }

  /**
   * 数组类型，[DeviceType]{@link @ohos.multimedia.audio:audio.DeviceType}数组。
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type DeviceTypeArray = Array<DeviceType>;

  /**
   * 表示活跃设备类型的枚举。
   *
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，建议使用[CommunicationDeviceType]{@link audio.CommunicationDeviceType}替代。
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
   * 表示设备选择策略的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @systemapi
   * @since 21 dynamic
   * @since 24 static
   */
  enum AudioDevcieSelectStrategy {
    /**
     * 默认设备选择策略。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 21 dynamic
     * @since 24 static
     */
    SELECT_STRATEGY_DEFAULT = 0,
    /**
     * 独立设备选择策略。
     *
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
   * 表示静音策略类型的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum PolicyType {
    /**
     * 设备管理器下发的静音策略。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    EDM = 0,
    /**
     * 安全隐私模块下发的静音策略。
     *
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
     * 26.0.0
     *
     * 此接口仅可在Stage模型下使用。
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
    ENCODING_TYPE_RAW = 0
  }

  /**
   * 表示音频内容类型的枚举。
   *
   * > **说明：**
   * > > 从API version 7开始支持，从API version 10开始废弃，建议使用[StreamUsage]{@link audio.StreamUsage}替代。
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
   * 枚举，音频流使用类型。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_ACCESSIBILITY = 8,
    /**
     * 系统音(如屏幕锁定或按键音)。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_SYSTEM = 9,
    /**
     * 电影或视频。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_NAVIGATION = 13,
    /**
     * 拨号音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_DTMF = 14,
    /**
     * 强制音(如相机快门音)。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_ENFORCED_TONE = 15,
    /**
     * 超声波（目前仅提供给MSDP使用）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_ULTRASONIC = 16,
    /**
     * VoIP视频通话（该流类型起播时，会触发开启3A算法）。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_VIDEO_COMMUNICATION = 17,
    /**
     * 通话辅助语音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_VOICE_CALL_ASSISTANT = 21,
    /**
     * 通知音。
     *
     * 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    STREAM_USAGE_ANNOUNCEMENT = 22,
    /**
     * 告警音。
     *
     * 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    STREAM_USAGE_EMERGENCY = 23,

    /**
     * Voice assistant broadcast usage for system app.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    STREAM_USAGE_VOICE_ASSISTANT_SYSTEM = 24
  }

  /**
   * 枚举，音频中断请求类型。
   *
   * @syscap SystemCapability.Multimedia.Audio.Interrupt
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum InterruptRequestType {
    /**
     * 默认类型，可中断音频请求。
     *
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    INTERRUPT_REQUEST_TYPE_DEFAULT = 0
  }

  /**
   * 枚举，音量相关操作。
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum VolumeFlag {
    /**
     * 拉起系统音量条。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    FLAG_SHOW_SYSTEM_UI = 1
  }

  /**
   * 应用ID信息，包含应用的UID（标识应用身份）、PID（标识运行中的进程）、Token ID（用于常规身份识别与权限校验）和FullToken ID（携带应用完整身份权限信息，用于原始应用溯源与全链路权限校验）。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AppIdInfo {
    /**
     * 应用UID，用于标识应用身份。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    appUid: int;
    /**
     * 应用PID，用于标识运行中的进程。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    appPid: int;
    /**
     * 应用Token ID，用于常规身份识别与权限校验。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    appTokenId: int;
    /**
     * 应用FullToken ID，携带应用完整身份权限信息，用于原始应用溯源与全链路权限校验。
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
     * 音频文件的采样率，单位为赫兹（Hz）。支持传入[AudioSamplingRate]{@link @ohos.multimedia.audio:audio.AudioSamplingRate}。
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
     * SystemCapability.Multimedia.Audio.Core
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
     * SystemCapability.Multimedia.Audio.Core
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * SystemCapability.Multimedia.Audio.Core
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * SystemCapability.Multimedia.Audio.Volume
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     * @since 23 static
     */
    volumeMode?: AudioVolumeMode;
  }

  /**
   * 音频渲染器过滤条件。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface AudioRendererFilter {
    /**
     * 表示应用ID。
     *
     * SystemCapability.Multimedia.Audio.Core
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    uid?: int;
    /**
     * 表示渲染器信息。
     *
     * SystemCapability.Multimedia.Audio.Renderer
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    rendererInfo?: AudioRendererInfo;
    /**
     * 音频流唯一id。
     *
     * SystemCapability.Multimedia.Audio.Renderer
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    rendererId?: int;
  }

  /**
   * 过滤条件类。在调用selectOutputDeviceByFilter接口前，需要先创建AudioCapturerFilter实例。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface AudioCapturerFilter {
    /**
     * 表示应用ID。
     *
     * SystemCapability.Multimedia.Audio.Core
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    uid?: int;
    /**
     * 表示采集器信息。
     *
     * SystemCapability.Multimedia.Audio.Capturer
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
     * SystemCapability.Multimedia.Audio.Renderer
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
     * SystemCapability.Multimedia.Audio.Renderer
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
     * 表示音频流的原始应用ID信息。
     *
     * 26.0.0
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
     * 例如，在PRIVACY_TYPE_PUBLIC策略下，[STREAM_USAGE_VOICE_COMMUNICATION](#streamusage)类型音频流不会被其他应用录制或屏幕投射。
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
   * 当用户监听到音频中断事件（即收到[InterruptEvent]{@link @ohos.multimedia.audio:audio.InterruptEvent}事件）时，获取此信息。
   * 此类型表示根据焦点策略，对音频流执行的具体操作（如暂停、调整音量等）。
   * 可以结合InterruptEvent中的[InterruptForceType]{@link audio.InterruptForceType}信息，判断该操作是否已由系统强制执行。详情请参阅音频焦点介绍文档。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 此操作无法由系统强制执行，其对应的[InterruptForceType](#interruptforcetype9)一定为INTERRUPT_SHARE类型。
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
   * 当用户监听到音频中断（即收到[InterruptEvent]{@link @ohos.multimedia.audio:audio.InterruptEvent}事件）时，获取此信息。
   * 此类型表示音频打断是否已由系统强制执行，具体操作信息（如音频暂停、停止等）可通过[InterruptHint]{@link audio.InterruptHint}获取。
   * 关于音频打断策略的详细说明可参考音频焦点介绍文档。
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
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，建议使用[InterruptType]{@link audio.InterruptType}替代。
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
   * 枚举，音量调节类型。
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  enum VolumeAdjustType {
    /**
     * 向上调节音量。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    VOLUME_UP = 0,
    /**
     * 向下调节音量。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    VOLUME_DOWN = 1
  }

  /**
   * 管理音频音量和音频设备。在调用AudioManager的接口前，需要先通过[getAudioManager]{@link @ohos.multimedia.audio:audio.getAudioManager}创建实例。
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
     * > > 从API version 7开始支持，从API version 9开始废弃，建议使用[AVVolumePanel]{@link @ohos.multimedia.avVolumePanel:AVVolumePanel}
     * > 替代。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { number } volume - 音量等级，可设置范围通过
     *     [getMinVolume]{@link audio.AudioManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}和
     *     [getMaxVolume]{@link audio.AudioManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}获
     *     取。
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
     * > > 从API version 7开始支持，从API version 9开始废弃，建议使用[AVVolumePanel]{@link @ohos.multimedia.avVolumePanel:AVVolumePanel}
     * > 替代。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { number } volume - 音量等级，可设置范围通过
     *     [getMinVolume]{@link audio.AudioManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}和
     *     [getMaxVolume]{@link audio.AudioManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}获
     *     取。
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
     * > > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用
     * > [getVolume]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.getVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     * > 替代；API version 20及以后，建议使用
     * > [getVolumeByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getVolumeByStream}替代。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { AsyncCallback<number> } callback - 回调函数。当获取指定流的音量成功，err为undefined，data为获取到的指定流的音量等级；否则为错误对象。指定流的音量等级范围可通过
     *     [getMinVolume]{@link audio.AudioManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}和
     *     [getMaxVolume]{@link audio.AudioManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}获
     *     取。
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
     * > > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用
     * > [getVolume]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.getVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     * > 替代；API version 20及以后，建议使用
     * > [getVolumeByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getVolumeByStream}替代。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @returns { Promise<number> } Promise对象，返回指定流的音量等级。指定流的音量等级范围可通过
     *     [getMinVolume]{@link audio.AudioManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}和
     *     [getMaxVolume]{@link audio.AudioManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}获
     *     取。
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
     * > > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用
     * > [getMinVolume]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     * > 替代；API version 20及以后，建议使用
     * > [getMinVolumeByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getMinVolumeByStream}替代。
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
     * > > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用
     * > [getMinVolume]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     * > 替代；API version 20及以后，建议使用
     * > [getMinVolumeByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getMinVolumeByStream}替代。
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
     * > > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用
     * > [getMaxVolume]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     * > 替代；API version 20及以后，建议使用
     * > [getMaxVolumeByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getMaxVolumeByStream}替代。
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
     * > > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用
     * > [getMaxVolume]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     * > 替代；API version 20及以后，建议使用
     * > [getMaxVolumeByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getMaxVolumeByStream}替代。
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
     * > **说明：**
     * > > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [getDevices]{@link @ohos.multimedia.audio:audio.AudioRoutingManager.getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>)}
     * > 替代。
     *
     * @param { DeviceFlag } deviceFlag - 音频设备类型。
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - 回调函数。当获取音频设备列表成功，err为undefined，data为获取到的音频设备列表；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#getDevices
     */
    getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void;
    /**
     * 获取音频设备列表。使用Promise异步回调。
     *
     * > **说明：**
     * > > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [getDevices]{@link @ohos.multimedia.audio:audio.AudioRoutingManager.getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>)}
     * > 替代。
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
     * 当该音量流可设置的最小音量不能为0时，不支持静音操作。例如：闹钟和通话。
     *
     * > **说明：**
     * > > 从API version 7开始支持，从API version 9开始废弃，建议使用[AVVolumePanel]{@link @ohos.multimedia.avVolumePanel:AVVolumePanel}
     * > 替代。
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
     * 当该音量流可设置的最小音量不能为0时，不支持静音操作。例如：闹钟和通话。
     *
     * > **说明：**
     * > > 从API version 7开始支持，从API version 9开始废弃，建议使用[AVVolumePanel]{@link @ohos.multimedia.avVolumePanel:AVVolumePanel}
     * > 替代。
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
     * > > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用
     * > [isMute]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.isMute(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>)}
     * > 替代；API version 20及以后，建议使用
     * > [isSystemMutedForStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.isSystemMutedForStream}替代。
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
     * > > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用
     * > [isMute]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.isMute(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>)}
     * > 替代；API version 20及以后，建议使用
     * > [isSystemMutedForStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.isSystemMutedForStream}替代。
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
     * > > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用
     * > [isActive]{@link @ohos.multimedia.audio:audio.AudioStreamManager.isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>)}
     * > 替代；API version 20及以后，建议使用[isStreamActive]{@link @ohos.multimedia.audio:audio.AudioStreamManager.isStreamActive}
     * > 替代。
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
     * > > 从API version 7开始支持，从API version 9开始废弃。在API version 9-19建议使用
     * > [isActive]{@link @ohos.multimedia.audio:audio.AudioStreamManager.isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>)}
     * > 替代；API version 20及以后，建议使用[isStreamActive]{@link @ohos.multimedia.audio:audio.AudioStreamManager.isStreamActive}
     * > 替代。
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
     * > **说明：**
     * > > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [isMicrophoneMute]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.isMicrophoneMute(callback: AsyncCallback<boolean>)}
     * > 替代。
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
     * > **说明：**
     * > > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [isMicrophoneMute]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.isMicrophoneMute(callback: AsyncCallback<boolean>)}
     * > 替代。
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
     * > **说明：**
     * > > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [getRingerMode]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.getRingerMode(callback: AsyncCallback<AudioRingMode>)}
     * > 替代。
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
     * > **说明：**
     * > > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [getRingerMode]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.getRingerMode(callback: AsyncCallback<AudioRingMode>)}
     * > 替代。
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
     * 音频扩展参数设置。使用Promise异步回调。
     *
     * @permission ohos.permission.MODIFY_AUDIO_SETTINGS
     * @param { string } mainKey - 被设置的音频参数的主键。
     * @param { Record<string, string> } kvpairs - 被设置的音频参数的子键值对。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * 获取指定音频参数值。使用Promise异步回调。
     *
     * @param { string } mainKey - Main key of the audio parameters to get.
     * @param { Array<string> } subKeys - Sub keys of the audio parameters to get.
     * @returns { Promise<Record<string, string>> } Promise对象，返回获取的音频参数的值。
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
     * > **说明：**
     * > > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [setCommunicationDevice]{@link @ohos.multimedia.audio:audio.AudioRoutingManager.setCommunicationDevice(deviceType: CommunicationDeviceType, active: boolean, callback: AsyncCallback<void>)}
     * > 替代。
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
     * > **说明：**
     * > > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [setCommunicationDevice]{@link @ohos.multimedia.audio:audio.AudioRoutingManager.setCommunicationDevice(deviceType: CommunicationDeviceType, active: boolean, callback: AsyncCallback<void>)}
     * > 替代。
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
     * > **说明：**
     * > > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [isCommunicationDeviceActive]{@link @ohos.multimedia.audio:audio.AudioRoutingManager.isCommunicationDeviceActive(deviceType: CommunicationDeviceType, callback: AsyncCallback<boolean>)}
     * > 替代。
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
     * > **说明：**
     * > > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [isCommunicationDeviceActive]{@link @ohos.multimedia.audio:audio.AudioRoutingManager.isCommunicationDeviceActive(deviceType: CommunicationDeviceType, callback: AsyncCallback<boolean>)}
     * > 替代。
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
     * > **说明：**
     * > > 从 API version 8 开始支持，从 API version 9 开始废弃，建议使用AudioVolumeManager中的
     * > [on('volumeChange')]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.on_volumeChange}替代。
     * > 监听系统音量变化事件（当系统音量发生变化时触发）。使用callback异步回调。
     * > 目前此订阅接口在单进程多AudioManager实例的使用场景下，仅最后一个实例的订阅生效，其他实例的订阅会被覆盖（即使最后一个实例没有进行订阅），因此推荐使用单一AudioManager实例进行开发。
     *
     * @param { 'volumeChange' } type - 事件回调类型，支持的事件为'volumeChange'，当系统音量发生变化时，触发该事件。
     * @param { Callback<VolumeEvent> } callback - 回调函数，返回变化后的音量信息。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#event:volumeChange
     */
    on(type: 'volumeChange', callback: Callback<VolumeEvent>): void;
    /**
     * 监听铃声模式变化事件（当[铃声模式]{@link @ohos.multimedia.audio:audio.AudioRingMode}发生改变时触发）。使用callback异步回调。
     *
     * > **说明：**
     * > > 从 API version 8 开始支持，从 API version 9 开始废弃，建议使用AudioVolumeGroupManager中的
     * > [on('ringerModeChange')]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.on_ringerModeChange}替代。
     *
     * @param { 'ringerModeChange' } type - 事件回调类型，支持的事件为'ringerModeChange'，当铃声模式发生改变时，触发该事件。
     * @param { Callback<AudioRingMode> } callback - 回调函数，返回变化后的铃音模式。
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @systemapi
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#event:ringerModeChange
     */
    on(type: 'ringerModeChange', callback: Callback<AudioRingMode>): void;
    /**
     * 设置音频场景模式。使用callback异步回调。
     *
     * @param { AudioScene } scene - 音频场景模式。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置音频场景模式成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    setAudioScene(scene: AudioScene, callback: AsyncCallback<void> ): void;
    /**
     * 设置音频场景模式。使用Promise异步回调。
     *
     * @param { AudioScene } scene - 音频场景模式。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * 监听音频场景变化事件。使用callback异步回调。
     *
     * @param { Callback<AudioScene> } callback - 回调函数，返回当前音频场景模式。
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
     * 取消监听音频场景变化事件。使用callback异步回调。
     *
     * @param { Callback<AudioScene> } [callback] - 回调函数，返回当前音频场景模式。
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 23 static
     */
    offAudioSceneChange(callback?: Callback<AudioScene>): void;

    /**
     * 监听音频设备连接变化事件（当音频设备连接状态发生变化时触发）。使用callback异步回调。
     *
     * > **说明：**
     * > > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [on('deviceChange')]{@link @ohos.multimedia.audio:audio.AudioRoutingManager.on_deviceChange}替代。
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
     * > **说明：**
     * > > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [off('deviceChange')]{@link @ohos.multimedia.audio:audio.AudioRoutingManager.off_deviceChange}替代。
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
     * 与[on('audioInterrupt')]{@link @ohos.multimedia.audio:audio.AudioRenderer.on_audioInterrupt}作用一致，均用于监听焦点变化。为无音频流的场
     * 景（未曾创建AudioRenderer对象），比如FM、语音唤醒等提供焦点变化监听功能。
     *
     * > **说明：**
     * > > 从API version 7开始支持，从API version 11开始废弃，建议使用
     * > [on('audioInterrupt')]{@link @ohos.multimedia.audio:audio.AudioCapturer.on_audioInterrupt}替代。
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
     * > **说明：**
     * > > 从API version 7开始支持，从API version 11开始废弃，建议使用
     * > off('audioInterrupt')替代。
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
     * 获取音效会话管理器。
     *
     * @returns { AudioEffectManager } AudioEffectManager实例。
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getEffectManager(): AudioEffectManager;

    /**
     * 获取移动全景声管理器。
     *
     * @returns { AudioCollaborativeManager } 返回一个AudioCollaborativeManager实例。
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
     * 获取录音策略管理器。
     *
     * @returns { AudioRecordingManager } AudioRecordingManager实例。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getRecordingManager(): AudioRecordingManager;

    /**
     * 设置安全音量为非激活状态。使用Promise异步回调。
     * 设置为非激活状态后，当设备长时间高音量播放时，不再自动提醒用户降低到安全音量。
     *
     * @permission ohos.permission.MODIFY_AUDIO_SETTINGS
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    disableSafeMediaVolume(): Promise<void>;

    /**
     * 报告用户允许的结果，以响应来自特定系统应用的播放捕获请求给音频系统。
     * 系统将根据该结果继续启动播放捕获或返回失败。
     * 该 API 使用 Promise 来返回结果。
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { long } streamId - Stream id of the capturer.
     * @param { boolean } allowed - User allowed result, true means user allows to start playback capture,
     *     otherwise false.
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 201 - Permisson denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed, streamId does not exist.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    reportPlaybackCaptureUserAllowed(streamId: long, allowed: boolean): Promise<void>;
  }

  /**
   * 枚举，音频中断请求结果类型。
   *
   * @syscap SystemCapability.Multimedia.Audio.Interrupt
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum InterruptRequestResultType {
    /**
     * 请求音频中断成功。
     *
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    INTERRUPT_REQUEST_GRANT = 0,
    /**
     * 请求音频中断失败，可能具有较高优先级类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    INTERRUPT_REQUEST_REJECT = 1
  }

  /**
   * 音频中断结果。
   *
   * @syscap SystemCapability.Multimedia.Audio.Interrupt
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface InterruptResult {
    /**
     * 表示音频请求中断类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    requestResult: InterruptRequestResultType;
    /**
     * 音频请求中断的节点。
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
   * 音频路由管理。在使用AudioRoutingManager的接口前，需要使用
   * [getRoutingManager]{@link @ohos.multimedia.audio:audio.AudioManager.getRoutingManager}获取AudioRoutingManager实例。
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
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - 回调函数。当获取音频设备列表成功，err为undefined，data为获取到的音频设备列表；否则为错误对象。
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
     * 监听音频设备连接状态变化事件（当音频设备连接状态发生变化时触发）。使用callback异步回调。
     *
     * @param { DeviceFlag } deviceFlag - 音频设备类型。
     * @param { Callback<DeviceChangeAction> } callback - 回调函数，返回设备更新详情。
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
     * 取消监听音频设备连接状态变化事件。使用callback异步回调。
     *
     * @param { Callback<DeviceChangeAction> } [callback] - 回调函数，返回设备更新详情。
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
     * 监听音频可选设备连接状态变化事件（当音频可选设备连接状态发生变化时触发）。使用callback异步回调。
     *
     * @param { DeviceUsage } deviceUsage - 音频设备类型（根据用途分类）。
     * @param { Callback<DeviceChangeAction> } callback - 回调函数，返回设备更新详情。
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
     * 取消监听音频可选设备连接状态变化事件。使用callback异步回调。
     *
     * @param { Callback<DeviceChangeAction> } [callback] - 回调函数，返回可选设备更新详情。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offAvailableDeviceChange(callback?: Callback<DeviceChangeAction>): void;

    /**
     * 设置通信设备激活状态。使用callback异步回调。
     * 该接口由于功能设计变化，将在后续版本废弃，不建议开发者使用。
     * 推荐使用AVSession提供的设备切换组件，实现通话设备切换。
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
     * 该接口由于功能设计变化，将在后续版本废弃，不建议开发者使用。
     * 推荐开发者使用AVSession提供的设备切换组件，实现通话设备切换。
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
     * @param { AsyncCallback<boolean> } callback - 回调函数。当获取指定通信设备的激活状态成功，err为undefined，data为true表示激活，false表示未激活；否则为错误对象。
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
     * 选择音频输出设备，当前只能选择一个输出设备。使用callback异步回调。
     *
     * @param { AudioDeviceDescriptors } outputAudioDevices - 输出设备类。
     * @param { AsyncCallback<void> } callback - 回调函数。当选择音频输出设备成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectOutputDevice(outputAudioDevices: AudioDeviceDescriptors, callback: AsyncCallback<void>): void;
    /**
     * 选择音频输出设备，当前只能选择一个输出设备。使用Promise异步回调。
     *
     * @param { AudioDeviceDescriptors } outputAudioDevices - 输出设备类。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectOutputDevice(outputAudioDevices: AudioDeviceDescriptors): Promise<void>;

    /**
     * 根据过滤条件，选择音频输出设备，当前只能选择一个输出设备。使用callback异步回调。
     *
     * @param { AudioRendererFilter } filter - 过滤条件。
     * @param { AudioDeviceDescriptors } outputAudioDevices - 输出设备信息。
     * @param { AsyncCallback<void> } callback - 回调函数。当选择音频输出设备成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectOutputDeviceByFilter(filter: AudioRendererFilter, outputAudioDevices: AudioDeviceDescriptors, callback: AsyncCallback<void>): void;
    /**
     * 根据过滤条件，选择音频输出设备，当前只能选择一个输出设备。使用Promise异步回调。
     *
     * @param { AudioRendererFilter } filter - 过滤条件。
     * @param { AudioDeviceDescriptors } outputAudioDevices - 输出设备信息。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectOutputDeviceByFilter(filter: AudioRendererFilter, outputAudioDevices: AudioDeviceDescriptors): Promise<void>;

    /**
     * 根据过滤条件和设备强选策略，选择音频输出设备，当前只能选择一个输出设备。使用Promise异步回调。
     *
     * @param { AudioRendererFilter } filter - 过滤条件。
     * @param { AudioDeviceDescriptors } outputAudioDevices - 输出设备信息。
     * @param { AudioDevcieSelectStrategy } strategy - 设备选择策略。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 选择音频输入设备，当前只能选择一个输入设备。使用callback异步回调。
     *
     * @param { AudioDeviceDescriptors } inputAudioDevices - 输入设备类。
     * @param { AsyncCallback<void> } callback - 回调函数。当选择音频输入设备成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectInputDevice(inputAudioDevices: AudioDeviceDescriptors, callback: AsyncCallback<void>): void;
    /**
     * 选择音频输入设备，当前只能选择一个输入设备。使用Promise异步回调。
     *
     * @param { AudioDeviceDescriptors } inputAudioDevices - 输入设备类。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectInputDevice(inputAudioDevices: AudioDeviceDescriptors): Promise<void>;

    /**
     * 根据过滤条件，选择音频输入设备，当前只能选择一个输入设备。使用Promise异步回调。
     *
     * @param { AudioCapturerFilter } filter - 过滤条件类。
     * @param { AudioDeviceDescriptors } inputAudioDevices - 输入设备类。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - 回调函数。当获取优先级最高的输出设备成功，err为undefined，data为获取到的优先级最高的输出设备信息；否则为
     *     错误对象。
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
     * 根据过滤条件，查询音频输出设备。
     *
     * @param { AudioRendererFilter } filter - 过滤条件。
     * @returns { AudioDeviceDescriptors } 返回优先级最高的输出设备信息。
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
     * @param { 'preferOutputDeviceChangeForRendererInfo' } type - 事件回调类型，支持的事件为'preferOutputDeviceChangeForRendererInfo'，当最高优先
     *     级输出设备发生变化时，触发该事件。
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
     * 监听最高优先级输出设备变化事件（当最高优先级输出设备发生变化时触发）。使用callback异步回调。
     *
     * @param { AudioRendererInfo } rendererInfo - 音频渲染器信息。
     * @param { Callback<AudioDeviceDescriptors> } callback - 回调函数，返回优先级最高的输出设备信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onPreferOutputDeviceChangeForRendererInfo(rendererInfo: AudioRendererInfo, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * 取消监听最高优先级输出音频设备变化事件。使用callback异步回调。
     *
     * @param { 'preferOutputDeviceChangeForRendererInfo' } type - 事件回调类型，支持的事件为'preferOutputDeviceChangeForRendererInfo'，当取消监听
     *     最高优先级输出音频设备变化事件时，触发该事件。
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
     * 取消监听最高优先级输出音频设备变化事件。使用callback异步回调。
     *
     * @param { Callback<AudioDeviceDescriptors> } [callback] - 回调函数，返回优先级最高的输出设备信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offPreferOutputDeviceChangeForRendererInfo(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * 监听指定过滤条件下最高优先级输出设备变化事件（当最高优先级输出设备发生变化时触发）。使用callback异步回调。
     *
     * @param { 'preferredOutputDeviceChangeByFilter' } type - 事件回调类型，支持的事件为'preferredOutputDeviceChangeByFilter'，当最高优先级输出设备发生变
     *     化时，触发该事件。
     * @param { AudioRendererFilter } filter - 过滤条件。
     * @param { Callback<AudioDeviceDescriptors> } callback - 回调函数，返回优先级最高的输出设备信息。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 21 dynamic
     */
    on(type: 'preferredOutputDeviceChangeByFilter', filter: AudioRendererFilter, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * 监听指定过滤条件下最高优先级输出设备变化事件（当最高优先级输出设备发生变化时触发）。使用callback异步回调。
     *
     * @param { AudioRendererFilter } filter - 过滤条件。
     * @param { Callback<AudioDeviceDescriptors> } callback - 回调函数，返回优先级最高的输出设备信息。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 24 static
     */
    onPreferredOutputDeviceChangeByFilter(filter: AudioRendererFilter, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * 取消监听指定过滤条件下最高优先级输出设备变化事件。使用callback异步回调。
     * | 参数名   | 类型                                   | 必填 | 说明
     * |
     * | -------- | -------------------------------------- | ---- | ----------------------------------------------------
     * -------- |
     * | type     | string | 是   | 事件回调类型，支持的事件为'preferredOutputDeviceChangeByFilter'，当取消监听指定过滤条件下最高优先级输出设备变化事件时，触发该事件。
     * |
     * | callback | Callback\<[AudioDeviceDescriptors]{@link @ohos.multimedia.audio:audio.AudioDeviceDescriptors}> | 否 |
     *  回调函数，返回优先级最高的输出设备信息。 |
     *
     * @param { 'preferredOutputDeviceChangeByFilter' } type - 要监听的事件类型。仅支持 preferredOutputDeviceChangeByFilter 事件。
     * @param { Callback<AudioDeviceDescriptors> } [callback] - 订阅中使用的回调函数。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 21 dynamic
     */
    off(type: 'preferredOutputDeviceChangeByFilter', callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * 取消订阅首选输出设备更改事件。
     *
     * @param { Callback<AudioDeviceDescriptors> } [callback] - 订阅中使用的回调函数。
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
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - 回调函数。当获取优先级最高的输入设备成功，err为undefined，data为获取到的优先级最高的输入设备信息；否则为
     *     错误对象。
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
     * 根据过滤条件，查询音频输入设备，当前只能查询一个输入设备。
     *
     * @param { AudioCapturerFilter } filter - 过滤条件类。
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
     * @param { 'preferredInputDeviceChangeForCapturerInfo' } type - 事件回调类型，支持的事件为'preferredInputDeviceChangeForCapturerInfo'，当
     *     最高优先级输入设备发生变化时，触发该事件。
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
     * 监听最高优先级输入设备变化事件（当最高优先级输入设备发生变化时触发）。使用callback异步回调。
     *
     * @param { AudioCapturerInfo } capturerInfo - 音频采集器信息。
     * @param { Callback<AudioDeviceDescriptors> } callback - 回调函数，返回优先级最高的输入设备信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onPreferredInputDeviceChangeForCapturerInfo(capturerInfo: AudioCapturerInfo, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * 取消监听最高优先级输入音频设备变化事件。使用callback异步回调。
     *
     * @param { 'preferredInputDeviceChangeForCapturerInfo' } type - 事件回调类型，支持的事件为'preferredInputDeviceChangeForCapturerInfo'，当
     *     取消监听最高优先级输入音频设备变化事件时，触发该事件。
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
     * 取消监听最高优先级输入音频设备变化事件。使用callback异步回调。
     *
     * @param { Callback<AudioDeviceDescriptors> } [callback] - 回调函数，返回优先级最高的输入设备信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offPreferredInputDeviceChangeForCapturerInfo(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * 监听指定过滤条件下最高优先级输入设备变化事件（当最高优先级输入设备发生变化时触发）。使用callback异步回调。
     *
     * @param { AudioCapturerFilter } filter - 过滤条件。
     * @param { Callback<AudioDeviceDescriptors> } callback - 回调函数，返回优先级最高的输入设备信息。
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
     * 取消监听指定过滤条件下最高优先级输入设备变化事件。使用callback异步回调。
     * | 参数名   | 类型                                   | 必填 | 说明
     * |
     * | -------- | -------------------------------------- | ---- | ----------------------------------------------------
     * -------- |
     * | callback | Callback\<[AudioDeviceDescriptors]{@link @ohos.multimedia.audio:audio.AudioDeviceDescriptors}> | 否 |
     *  回调函数，返回优先级最高的输入设备信息。 |
     *
     * @param { Callback<AudioDeviceDescriptors> } [callback] - 回调函数，返回优先级最高的输入设备信息。
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
     * 监听麦克风堵塞状态变化事件。使用callback异步回调。
     * 使用此功能前，请使用[isMicBlockDetectionSupported]{@link audio.AudioRoutingManager.isMicBlockDetectionSupported}查询设备是否支持检测。
     * 应用在使用麦克风录音时，若麦克风堵塞状态发生变化，将触发该事件。目前此检测功能仅支持麦克风位于本地设备上。
     *
     * @param { Callback<DeviceBlockStatusInfo> } callback - 回调函数，返回麦克风被堵塞状态和设备信息。
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
     * 取消监听麦克风堵塞状态变化事件。使用callback异步回调。
     *
     * @param { Callback<DeviceBlockStatusInfo> } [callback] - 回调函数，返回麦克风被堵塞状态和设备信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offMicBlockStatusChanged(callback?: Callback<DeviceBlockStatusInfo>): void;

    /**
     * 排除输出设备。成功调用此函数后，音频将不会在指定的设备上播放。
     *
     * > **说明：**
     * >
     * > 该功能仅能排除外部输出设备，不支持本地输出设备。
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG [since 18 - 22]
     * @param { DeviceUsage } usage - 设备种类。只支持排除输出设备。
     * @param { AudioDeviceDescriptors } devices - 排除输出设备列表。
     * @returns { Promise<void> } Promise对象。无返回结果。
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
     * 解除排除输出设备。成功调用此函数后，音频将会重新选择输出设备。
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG [since 18 - 22]
     * @param { DeviceUsage } usage - 设备种类。只支持排除输出设备。
     * @param { AudioDeviceDescriptors } devices - 解除排除输出设备列表。
     * @returns { Promise<void> } Promise对象。无返回结果。
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
     * 解除属于特定用途的所有输出设备的排除。成功调用此函数后，音频将会重新选择输出设备。
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG [since 18 - 22]
     * @param { DeviceUsage } usage - 设备种类。只支持排除输出设备。
     * @returns { Promise<void> } Promise对象。无返回结果。
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
     * 获取排除输出设备列表。
     *
     * @param { DeviceUsage } usage - 设备种类。只支持排除输出设备。
     * @returns { AudioDeviceDescriptors } 排除设备列表。
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
     * > [getAvailableDevices]{@link @ohos.multimedia.audio:audio.AudioSessionManager.getAvailableDevices}），默认返回的设备类型为匿名
     * > 类型。如需获取具体设备类型，需先调用该方法进行设备类型兼容声明。
     *
     * @param { DeviceTypeArray } deviceTypes - [DeviceType]{@link @ohos.multimedia.audio:audio.DeviceType}数组。
     * @throws { BusinessError } 6800101 - Parameter verification failed, the param deviceTypes contains value
     *     that is invalid enum or is not a device type introduced in API 20 onwards.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    declareDeviceTypesCompatibility(deviceTypes: DeviceTypeArray): void;

    /**
     * 根据指定的音频渲染过滤条件恢复音频输出设备。使用Promise异步回调。
     *
     * @param { AudioRendererFilter } filter - 过滤条件。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    restoreOutputDeviceByFilter(filter: AudioRendererFilter): Promise<void>;

    /**
     * 获取当前音频设备场景下的活跃输出设备描述符。使用Promise异步回调。
     *
     * @returns { Promise<AudioDeviceDescriptors> } Promise对象，返回活跃输出设备描述符列表。
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
   * 在使用AudioStreamManager的接口之前，需先通过[getStreamManager]{@link @ohos.multimedia.audio:audio.AudioManager.getStreamManager}
   * 获取AudioStreamManager实例。
   *
   * > **说明：**
   *
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
     * @param { AsyncCallback<AudioRendererChangeInfoArray> } callback - 回调函数。当获取当前音频渲染器的信息成功，err为undefined，data为获取到的当前音频渲染器的信息
     *     ；否则为错误对象。
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
     * @param { AsyncCallback<AudioCapturerChangeInfoArray> } callback - 回调函数。当获取当前音频采集器的信息成功，err为undefined，data为获取到的当前音频采集器的信息
     *     ；否则为错误对象。
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
     * @param { AsyncCallback<AudioEffectInfoArray> } callback - 回调函数。当获取当前音效模式的信息成功，err为undefined，data为获取到的当前音效模式的信息；否则为错误对象。
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
     * 监听音频渲染器更改事件（当音频播放流状态变化或设备变化时触发）。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 该接口返回的音频渲染器信息，可能包含系统内部音频播放流，如蜂窝通话、超声波等。
     *
     * @param { Callback<AudioRendererChangeInfoArray> } callback - 回调函数用于音频渲染器更改事件。
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
     * @param { Callback<AudioRendererChangeInfoArray> } callback - 回调函数，返回当前音频渲染器信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     */
    off(type: 'audioRendererChange', callback?: Callback<AudioRendererChangeInfoArray>): void;

    /**
     * 取消监听音频渲染器更改事件。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 该接口返回的音频渲染器信息，可能包含系统内部音频播放流，如蜂窝通话、超声波等。
     *
     * @param { Callback<AudioRendererChangeInfoArray> } [callback] - 回调函数用于音频渲染器更改事件。
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
     /**
     * 监听音频采集器更改事件（当音频录制流状态变化或设备变化时触发）。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 该接口返回的音频采集器信息，可能包含系统内部音频录制流，如语音唤醒、蜂窝通话等。
     *
     * @param { Callback<AudioCapturerChangeInfoArray> } callback - 回调函数，返回当前音频采集器信息。
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
     * @param { Callback<AudioCapturerChangeInfoArray> } callback - 回调函数，返回当前音频采集器信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 9 dynamic
     */
    off(type: 'audioCapturerChange', callback?: Callback<AudioCapturerChangeInfoArray>): void;

    /**
     * 取消监听音频采集器更改事件。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 该接口返回的音频采集器信息，可能包含系统内部音频录制流，如语音唤醒、蜂窝通话等。
     *
     * @param { Callback<AudioCapturerChangeInfoArray> } [callback] - 回调函数，返回当前音频采集器信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offAudioCapturerChange(callback?: Callback<AudioCapturerChangeInfoArray>): void;

    /**
     * 获取指定音频流活跃状态。使用callback异步回调。
     *
     * > **说明：**
     * > > 从API version 9开始支持，从API version 20开始废弃，建议使用
     * > [isStreamActive]{@link @ohos.multimedia.audio:audio.AudioStreamManager.isStreamActive}替代。
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
     * > **说明：**
     * > > 从API version 9开始支持，从API version 20开始废弃，建议使用
     * > [isStreamActive]{@link @ohos.multimedia.audio:audio.AudioStreamManager.isStreamActive}替代。
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
     * > **说明：**
     * > > 从API version 10开始支持，从API version 20开始废弃，建议使用
     * > [isStreamActive]{@link @ohos.multimedia.audio:audio.AudioStreamManager.isStreamActive}替代。
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
     *
     *     仅检测是否可以获取音频采集器信息中音源类型的焦点。通常在音频录制启动前调用，否则已存在的录制流可能会拒绝其启动。
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
   * 当用户监听到音频会话状态变化事件（即收到
   * [AudioSessionStateChangedEvent]{@link @ohos.multimedia.audio:audio.AudioSessionStateChangedEvent}事件）时，获取相关信息。
   * 此类型表示根据焦点策略对音频会话执行的操作，包括暂停、调整音量等。
   * 详情请参阅音频会话管理文档。
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
     * [enableMuteSuggestionWhenMixWithOthers](./arkts-apis-audio-AudioSessionManager.md#enablemutesuggestionwhenmixwithothers23)
     * ，此时可以选择执行静音操作。
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
     * [enableMuteSuggestionWhenMixWithOthers](./arkts-apis-audio-AudioSessionManager.md#enablemutesuggestionwhenmixwithothers23)
     * ，此时可取消静音。
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
     * 此接口仅可在Stage模型下使用。
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
     * 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE_SUGGESTION = 7,

    /**
     * 提示音频会话静音。
     *
     * 该提示仅在以下条件满足后才会收到：通过接口
     * [setAudioSessionBehavior](./arkts-apis-audio-AudioSessionManager.md#setaudiosessionbehavior24)设置参数
     * [AudioSessionBehaviorFlags](#audiosessionbehaviorflags24).MUTE_WHEN_INTERRUPTED，并已调用
     * [setAudioSessionScene](./arkts-apis-audio-AudioSessionManager.md#setaudiosessionscene20)，且音频会话已激活。
     *
     * 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_MUTE = 8,

    /**
     * 提示音频会话解除静音，恢复播放。
     *
     * 该提示仅在以下条件满足后才会收到：通过接口
     * [setAudioSessionBehavior](./arkts-apis-audio-AudioSessionManager.md#setaudiosessionbehavior24)设置参数
     * [AudioSessionBehaviorFlags](#audiosessionbehaviorflags24).MUTE_WHEN_INTERRUPTED，并已调用
     * [setAudioSessionScene](./arkts-apis-audio-AudioSessionManager.md#setaudiosessionscene20)，且音频会话已激活。
     *
     * 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE = 9
  }

  /**
   * 表示输出设备变更后推荐操作的枚举。
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
     * 调用[setAudioSessionBehavior](./arkts-apis-audio-AudioSessionManager.md#setaudiosessionbehavior24)接口配置该行为时，必须同步调用
     * [setAudioSessionScene](./arkts-apis-audio-AudioSessionManager.md#setaudiosessionscene20)接口，否则配置将无法生效。
     *
     * 在音频会话场景下，当音频流静音或恢复时，应用将分别收到[AudioSessionStateChangeHint](./arkts-apis-audio-e.md#audiosessionstatechangehint20)
     * .AUDIO_SESSION_STATE_CHANGE_HINT_MUTE与
     * [AudioSessionStateChangeHint](./arkts-apis-audio-e.md#audiosessionstatechangehint20)
     * .AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE的通知。
     *
     * 在AudioRenderer和AudioCapturer场景下，当音频流静音或恢复时，应用将分别收到[InterruptHint](#interrupthint).INTERRUPT_HINT_MUTE与
     * [InterruptHint](#interrupthint).INTERRUPT_HINT_UNMUTE的通知。
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
     * 调用[setAudioSessionBehavior](./arkts-apis-audio-AudioSessionManager.md#setaudiosessionbehavior24)接口配置该行为时，必须同步调用
     * [setAudioSessionScene](./arkts-apis-audio-AudioSessionManager.md#setaudiosessionscene20)接口，否则配置将无法生效。
     *
     * 在音频会话场景下，当音频流暂停或恢复时，应用将分别收到[AudioSessionStateChangeHint](./arkts-apis-audio-e.md#audiosessionstatechangehint20)
     * .AUDIO_SESSION_STATE_CHANGE_HINT_PAUSE与
     * [AudioSessionStateChangeHint](./arkts-apis-audio-e.md#audiosessionstatechangehint20)
     * .AUDIO_SESSION_STATE_CHANGE_HINT_RESUME的通知。
     *
     * 在AudioRenderer和AudioCapturer场景下，当音频流暂停或恢复时，应用将分别收到[InterruptHint](#interrupthint).INTERRUPT_HINT_PAUSE与
     * [InterruptHint](#interrupthint).INTERRUPT_HINT_RESUME的通知。
     *
     * **注意：** 该标志不能与MUTE_WHEN_INTERRUPTED共存，若同时设置，仅该标志生效。
     *
     * 26.0.0
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAUSE_WHEN_INTERRUPTED = 0x00000004
  }

  /**
   * 音频会话策略。
   *
   * @
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
     * 26.0.0
     *
     * 此接口仅可在Stage模型下使用。
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
   * 在使用AudioSessionManager的接口之前，需先通过
   * [getSessionManager]{@link @ohos.multimedia.audio:audio.AudioManager.getSessionManager}获取AudioSessionManager实例。
   *
   * > **说明：**
   *
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
     * 监听音频会话停用事件（当音频会话停用时触发）。使用callback异步回调。
     *
     * @param { Callback<AudioSessionDeactivatedEvent> } callback -
     回调函数，返回音频会话停用原因。 [since 23]
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
     * 取消监听音频会话停用事件。使用callback异步回调。
     *
     * @param { Callback<AudioSessionDeactivatedEvent> } [callback] - 回调函数，返回音频会话停用原因。 [since 23]
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
     * 监听音频会话状态变更事件（当音频会话焦点变更时触发）。使用callback异步回调。
     *
     * @param { Callback<AudioSessionStateChangedEvent> } callback - 回调函数，返回音频会话变更提示信息。
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
     * 取消监听音频会话状态变更事件。使用callback异步回调。
     *
     * @param { Callback<AudioSessionStateChangedEvent> } [callback] - 回调函数，返回音频会话变更提示信息。
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
     *     仅支持以下设备：EARPIECE（听筒）、SPEAKER（扬声器）和DEFAULT（系统默认设备）。
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
     * > - 本接口适用于以下情况：当设置的[AudioSessionScene]{@link @ohos.multimedia.audio:audio.AudioSessionScene}为VoIP场景时，激活
     * > AudioSession后立即生效。若[AudioSessionScene]{@link @ohos.multimedia.audio:audio.AudioSessionScene}为非VoIP场景，激活
     * > AudioSession时不会生效，仅在启动播放的[StreamUsage]{@link @ohos.multimedia.audio:audio.StreamUsage}为语音消息、VoIP语音通话或VoIP视频通话时才
     * > 生效。支持听筒、扬声器和系统默认设备。
     * >
     * > - 本接口允许在AudioSessionManager创建后随时调用，系统会记录应用设置的默认本机内置发声设备。但只有激活AudioSession后才能生效。应用启动播放时，若外接设备如蓝牙耳机或有线耳机已接入，系统优先从
     * > 外接设备发声。否则，系统遵循应用设置的默认本机内置发声设备。
     *
     * @param { DeviceType } deviceType - 设备类型。<br>仅支持以下设备：EARPIECE（听筒）、SPEAKER（扬声器）和DEFAULT（系统默认设备）。
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
     * > [CurrentOutputDeviceChangedEvent]{@link @ohos.multimedia.audio:audio.CurrentOutputDeviceChangedEvent}事件获取当前活跃的输
     * > 出设备。
     * >
     * > - 当应用程序需要清除之前通过接口设置的扬声器输出配置时，可通过调用接口将媒体输出设备设置为DEFAULT（系统默认设备）来实现。该设置仅在应用程序运行期间有效，当应用程序退出时，此接口的设置将自动清除。
     *
     * @param { DeviceType } deviceType - 可用的设备类型有
     *     SPEAKER：内置扬声器
     *     DEFAULT：恢复到系统默认输出设备。
     *     - - - - 设备类型。<br>仅支持以下设备：SPEAKER（扬声器）和DEFAULT（系统默认设备）。
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
     * 监听当前输出设备变化事件（当前输出设备发生变化时触发）。使用callback异步回调。
     *
     * @param { Callback<CurrentOutputDeviceChangedEvent> } callback - 回调函数，返回当前输出设备信息。
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
     *
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
     * 监听音频可选设备连接状态变化事件（当音频可选设备连接状态发生变化时触发）。
     *
     * @param { DeviceUsage } deviceUsage - 音频设备类型（根据用途分类）。
     * @param { Callback<DeviceChangeAction> } callback - 回调函数，返回设备更新详情。
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
     * 取消监听音频可选设备连接状态变化事件。
     *
     * @param { Callback<DeviceChangeAction> } [callback] - 回调函数，返回可选设备更新详情。
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
     * > - 本接口不适用于VoIP通话录音，即[SourceType]{@link @ohos.multimedia.audio:audio.SourceType}为SOURCE_TYPE_VOICE_COMMUNICATION的
     * > 场景不适用。
     * >
     * > - 本接口调用前需要先调用[getAvailableDevices]{@link audio.AudioSessionManager.getAvailableDevices}接口查询到当前可用输入设备列表，从列表中选择输入
     * > 设备。
     * >
     * > - 当系统中存在其他更高优先级的应用录音流时，实际使用的输入设备会跟随其他高优先级应用所选的输入设备。
     * >
     * > - 应用程序可以监听[currentInputDeviceChanged]{@link audio.AudioSessionManager.on_currentInputDeviceChanged}事件来获得实际的输入设备
     * > 。
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
     * > - 应用程序可以监听[currentInputDeviceChanged]{@link audio.AudioSessionManager.on_currentInputDeviceChanged}事件来获得实际的输入设备
     * > 。
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
     * 监听当前输入设备变化事件（当前输入设备发生变化时触发）。
     *
     * @param { Callback<CurrentInputDeviceChangedEvent> } callback - 回调函数，返回当前输入设备信息。
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
     * 取消监听当前输入设备的变化事件。
     *
     * @param { Callback<CurrentInputDeviceChangedEvent> } [callback] - 回调函数，用于返回当前输入设备变化的信息。
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
     * 通常，当使用混音模式时，如果其他应用同时播放音频，会和其他应用进行混音播放。但在某些场景下（如游戏或广播），应用自身会通过静音自身的音频以给用户提供更好的体验。
     * 如果启用此功能，当订阅音频会话状态更改事件后静音建议和取消静音建议提示将通过
     * [AudioSessionStateChangedEvent]{@link @ohos.multimedia.audio:audio.AudioSessionStateChangedEvent}回调发送。收到静音建议表示其他应
     * 用程序开始播放音频，且播放的音频和本应用的音频不能混音。
     * 此功能仅支持已设置[AudioSessionScene]{@link @ohos.multimedia.audio:audio.AudioSessionScene}并激活模式模式为
     * CONCURRENCY_MIX_WITH_OTHERS的音频会话使用。并且仅在激活音频会话期间生效一次，每次激活音频会话前都必须重新启用。
     * 详细说明请参考启用混音播放下静音建议通知文档。
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
     * > - 若某条录音流同时调用了流级接口[AudioCapturer.setMuteHint]{@link @ohos.multimedia.audio:audio.AudioCapturer.setMuteHint}和本接口，
     * > 流级接口设置优先级更高，以流级接口设置值为准。
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
     * > 当音频会话在激活状态时调用此接口后，必须重新调用接口
     * > [activateAudioSession]{@link @ohos.multimedia.audio:audio.AudioSessionManager.activateAudioSession}使其生效。
     *
     * @param { int } behavior - 用于设置音频会话行为。<br>该参数可以是单个标志，也可以是多个标志的按位OR组合。<br>当前支持的音频会话行为详见
     *     [AudioSessionBehaviorFlags]{@link @ohos.multimedia.audio:audio.AudioSessionBehaviorFlags}中定义的标志。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permitted in the current state.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setAudioSessionBehavior(behavior: int): void;
  }

  /**
   * 音频类型数组
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  type StreamUsageArray = Array<StreamUsage>;

  /**
   * 音量管理。在使用AudioVolumeManager的接口前，需要使用
   * [getVolumeManager]{@link @ohos.multimedia.audio:audio.AudioManager.getVolumeManager}获取AudioVolumeManager实例。
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform [since 12]
   * @atomicservice [since 23]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AudioVolumeManager {
    /**
     * 获取音量组信息列表。使用callback异步回调。
     *
     * @param { string } networkId - 设备的网络id。本地设备audio.LOCAL_NETWORK_ID。
     * @param { AsyncCallback<VolumeGroupInfos> } callback - 回调函数。当获取音量组信息列表成功，err为undefined，data为获取到的音量组信息列表；否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    getVolumeGroupInfos(networkId: string, callback: AsyncCallback<VolumeGroupInfos>): void;
    /**
     * 获取音量组信息列表。使用Promise异步回调。
     *
     * @param { string } networkId - 设备的网络id。本地设备audio.LOCAL_NETWORK_ID。
     * @returns { Promise<VolumeGroupInfos> } Promise对象，返回音量组信息列表。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    getVolumeGroupInfos(networkId: string): Promise<VolumeGroupInfos>;
    /**
     * 获取音量组信息列表，同步返回结果。
     *
     * @param { string } networkId - 设备的网络id。本地设备audio.LOCAL_NETWORK_ID。
     * @returns { VolumeGroupInfos } 音量组信息列表。
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
     * @param { AsyncCallback<AudioVolumeGroupManager> } callback - 回调函数。当获取音频组音量管理器实例成功，err为undefined，data为获取到的音频组音量管理器实例；否则为错
     *     误对象。
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
     * 根据应用ID获取指定应用的音量百分比（范围为0到100）。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { int } uid - 表示应用ID。
     * @returns { Promise<int> } Promise对象，返回应用的音量百分比，范围为[0, 100]。
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
     * 根据应用ID设置指定应用的音量百分比（范围为[0, 100]）。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { int } uid - 表示应用ID。
     * @param { int } volume - 要设置的音量百分比，范围为[0, 100]。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * 获取指定流的音量百分比。
     *
     * @param { AudioVolumeType } volumeType - 音量流类型。
     * @returns { int } 音量百分比，取值范围为[0, 100]。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    getSystemVolumePercentage(volumeType: AudioVolumeType): int;

    /**
     * 设置指定流的音量百分比。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - 设置指定流的音量百分比时需要使用整数，范围从最小系统音量百分比到100。
     * >
     * > - 音量百分比与音量等级相对应，每个等级对应特定的百分比。
     * >
     * > - 当音量等级发生变化时，音量百分比会相应调整，并映射在音量等级的范围内。
     * >
     * > - 0等级音量映射为0%，最大音量映射为100%。中间音量等级均匀分布在1至99之间。
     * >
     * > - 当音量百分比变化时，音量等级会相应调整。
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { AudioVolumeType } volumeType - 音量流类型。
     * @param { int } percentage - 音量百分比，可设置范围的最小值是通过
     *     [getMinSystemVolumePercentage]{@link audio.AudioVolumeManager.getMinSystemVolumePercentage}接口获取到的音量百分比， 最大值是100。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 获取指定流的最小音量百分比。
     *
     * @param { AudioVolumeType } volumeType - 音量流类型。
     * @returns { int } 音量百分比，取值范围为[0, 100]。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    getMinSystemVolumePercentage(volumeType: AudioVolumeType): int;

    /**
     * 根据应用ID查询应用音量是否已静音。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 如果有多个调用者设置了静音状态，那么只有当所有调用者都取消静音状态后，此应用才会真正取消静音。
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { int } uid - 表示应用ID。
     * @param { boolean } owned - 要查询的静音状态。true查询当前调用者的静音状态，false查询应用的静音状态。
     * @returns { Promise<boolean> } Promise对象。返回true表示应用为静音状态；返回false表示应用为非静音状态。
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
     * 根据应用ID设置应用静音状态。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { int } uid - 表示应用ID。
     * @param { boolean } muted - 设置应用的静音状态。true设置为静音，false解除静音。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * 为特定用户ID的应用设置音量。此方法使用Promise来返回结果。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - 音量类型。
     * @param { int } volume - 要设置的音量。可通过调用getMinVolume和getMaxVolume获取取值范围。
     * @param { int } callingUid - 流所有者的UID。
     * @returns { Promise<void> } 承诺用于返回结果。
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
     * 获取特定uid应用中的流媒体数量。
     *
     * @param { AudioVolumeType } volumeType - 音量类型。
     * @param { int } callingUid - 流所有者的UID。
     * @returns { int } 当前系统音量级别。
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
     * > **说明：**
     * > > 从API version 9开始支持，从API version 20开始废弃，建议使用
     * > [on('streamVolumeChange')]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.on_streamVolumeChange}替代。
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
     * > **说明：**
     * > > 从API version 12开始支持，从API version 20开始废弃，建议使用
     * > [off('streamVolumeChange')]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.off_streamVolumeChange}替代。
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
     * 监听指定应用应用级音量变化事件（当应用级音量发生变化时触发）。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { 'appVolumeChangeForUid' } type - 事件回调类型，支持的事件为'appVolumeChangeForUid'，当应用级音量发生变化时，触发该事件。
     * @param { int } uid - 表示应用ID。
     * @param { Callback<VolumeEvent> } callback - 回调函数，返回变化后的音量信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 19 dynamic
     */
    on(type: 'appVolumeChangeForUid', uid: int, callback: Callback<VolumeEvent>): void;

    /**
     * L监听指定应用应用级音量变化事件（当应用级音量发生变化时触发）。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { int } uid - The app's uid.
     *     <br>取值限定为整数。
     * @param { Callback<VolumeEvent> } callback - 回调函数，返回变化后的音量信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    onAppVolumeChangeForUid(uid: int, callback: Callback<VolumeEvent>): void;

    /**
     * 取消监听指定应用应用级音量变化事件。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { 'appVolumeChangeForUid' } type - 事件回调类型，支持的事件为'appVolumeChangeForUid'，当取消监听指定应用应用级音量变化事件时，触发该事件。
     * @param { Callback<VolumeEvent> } callback - 回调函数，返回变化后的音量信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 19 dynamic
     */
    off(type: 'appVolumeChangeForUid', callback?: Callback<VolumeEvent>): void;

    /**
     * 取消监听指定应用应用级音量变化事件。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { Callback<VolumeEvent> } [callback] - 回调函数，返回变化后的音量信息。
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
     * 监听当前应用的应用级音量变化事件（当应用级音量发生变化时触发）。使用callback异步回调。
     *
     * @param { Callback<VolumeEvent> } callback - 回调函数，返回变化后的音量信息。
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
     * 取消监听当前应用的应用级音量变化事件。使用callback异步回调。
     *
     * @param { Callback<VolumeEvent> } [callback] - 回调函数，返回变化后的音量信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    offAppVolumeChange(callback?: Callback<VolumeEvent>): void;

    /**
     * 监听当前活跃流变化事件（当活跃流发生变化时触发）。使用callback异步回调。
     *
     * @param { 'activeVolumeTypeChange' } type 事件回调类型，支持的事件为'activeVolumeTypeChange'，当活跃流发生变化时，触发该事件。
     * @param { Callback<AudioVolumeType> } callback 回调函数，返回变化后的活跃音频音量类型。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     */
    on(type: 'activeVolumeTypeChange', callback: Callback<AudioVolumeType>): void;

    /**
     * 监听当前活跃流变化事件（当活跃流发生变化时触发）。使用callback异步回调。
     *
     * @param { Callback<AudioVolumeType> } callback 回调函数，返回变化后的活跃音频音量类型。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    onActiveVolumeTypeChange(callback: Callback<AudioVolumeType>): void;

    /**
     * 取消监听当前活跃流变化事件。使用callback异步回调。
     *
     * @param { 'activeVolumeTypeChange' } type 事件回调类型，支持的事件为'activeVolumeTypeChange'，当取消监听当前活跃流变化事件时，触发该事件。
     * @param { Callback<AudioVolumeType> } [callback] 回调函数，返回变化后的活跃音频音量类型。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     */
    off(type: 'activeVolumeTypeChange', callback?: Callback<AudioVolumeType>): void;

    /**
     * 取消监听当前活跃流变化事件。使用callback异步回调。
     *
     * @param { Callback<AudioVolumeType> } [callback] 回调函数，返回变化后的活跃音频音量类型。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    offActiveVolumeTypeChange(callback?: Callback<AudioVolumeType>): void;

    /**
     * 监听系统音量百分比变化事件。使用callback异步回调。
     *
     * @param { Callback<VolumeEvent> } callback - 回调函数，返回变化后的音量信息。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    onVolumePercentageChange(callback: Callback<VolumeEvent>): void;

    /**
     * 取消监听系统音量变化事件。使用callback异步回调。
     *
     * @param { Callback<VolumeEvent> } [callback] - 回调函数，返回变化后的音量信息。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    offVolumePercentageChange(callback?: Callback<VolumeEvent>): void;

    /**
     * 取消监听系统音量变化事件。使用callback异步回调。
     *
     * @param { AudioVolumeType } volumeType - 音量类型。
     * @returns { int } 当前系统音量级别。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getSystemVolume(volumeType: AudioVolumeType): int;

    /**
     * 获取音量类型允许的最小音量大小。
     *
     * @param { AudioVolumeType } volumeType - 音量类型。
     * @returns { int } 最小音量.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getMinSystemVolume(volumeType: AudioVolumeType): int;

    /**
     * 获取音量类型允许的最大音量大小。
     *
     * @param { AudioVolumeType } volumeType - 音量类型。
     * @returns { int } 最大音量。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getMaxSystemVolume(volumeType: AudioVolumeType): int;

    /**
     * 检查音量类型是否被静音。
     *
     * @param { AudioVolumeType } volumeType - 音量类型。
     * @returns { boolean } 音量类型的静音状态。值为 true 表示该音量类型处于静音状态，false 则表示相反。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isSystemMuted(volumeType: AudioVolumeType): boolean;

    /**
     * 获取系统根据音量类型、音量级别和设备类型计算出的音量分贝值。
     *
     * @param { AudioVolumeType } volumeType - 音量类型。
     * @param { int } volumeLevel - 要设置的音量级别。
     * @param { DeviceType } device - 输出设备类型。
     * @returns { double } 系统音量（以分贝为单位）。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getVolumeInUnitOfDb(volumeType: AudioVolumeType, volumeLevel: int, device: DeviceType): double;

    /**
     * 监听系统音量变化事件（当系统音量发生变化时触发）。使用callback异步回调。
     *
     * @param { 'systemVolumeChange' } type - 事件回调类型，支持的事件为'systemVolumeChange'，当系统音量发生变化时，触发该事件。
     * @param { Callback<VolumeEvent> } callback - 回调函数，返回变化后的音量信息。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     */
    on(type: 'systemVolumeChange', callback: Callback<VolumeEvent>): void;

    /**
     * 监听系统音量变化事件（当系统音量发生变化时触发）。使用callback异步回调。
     *
     * @param { Callback<VolumeEvent> } callback - 回调函数，返回变化后的音量信息。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    onSystemVolumeChange(callback: Callback<VolumeEvent>): void;

    /**
     * 取消监听系统音量变化事件。使用callback异步回调。
     *
     * @param { 'systemVolumeChange' } type - 事件回调类型，支持的事件为'systemVolumeChange'，当取消监听系统音量变化事件时，触发该事件。
     * @param { Callback<VolumeEvent> } [callback] - 回调函数，返回变化后的音量信息。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     */
    off(type: 'systemVolumeChange', callback?: Callback<VolumeEvent>): void;

    /**
     * 取消监听系统音量变化事件。使用callback异步回调。
     *
     * @param { Callback<VolumeEvent> } [callback] - 回调函数，返回变化后的音量信息。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    offSystemVolumeChange(callback?: Callback<VolumeEvent>): void;

    /**
     * 订阅系统音量变化事件。
     * 当目标过滤器的系统音量发生变化时，已注册的客户端将收到回调通知。
     *
     * @param { SystemVolumeFilter } filter - 用于系统音量变化的过滤器。
     * @param { Callback<VolumeEvent> } callback - 订阅中使用的回调函数。
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
     * @param { Callback<VolumeEvent> } [callback] - 订阅中使用的回调函数。
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
     * 获取系统支持的卷类型。
     *
     * @returns { Array<Readonly<AudioVolumeType>> } 返回系统音量类型数组。
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getSupportedAudioVolumeTypes(): Array<Readonly<AudioVolumeType>>;

    /**
     * 按流类型获取卷类型。
     *
     * @param { StreamUsage } streamUsage - 音频流类型。
     * @returns { AudioVolumeType } 返回音频音量类型。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getAudioVolumeTypeByStreamUsage(streamUsage: StreamUsage): AudioVolumeType;

    /**
     * 按音量类型获取流类型。
     *
     * @param { AudioVolumeType } volumeType - 音量类型。
     * @returns { StreamUsageArray } 返回音频流类型。
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
     * 监听系统音频流音量变化事件（当系统音频流音量发生变化时触发）。使用callback异步回调。
     *
     * @param { StreamUsage } streamUsage - 音频流使用类型。
     * @param { Callback<StreamVolumeEvent> } callback - 回调函数，返回变化后的音量信息。
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
     * 取消监听系统音频流音量变化事件（当系统音频流音量发生变化时触发）。使用callback异步回调。
     *
     * @param { Callback<StreamVolumeEvent> } [callback] - 回调函数，返回变化后的音量信息。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    offStreamVolumeChange(callback?: Callback<StreamVolumeEvent>): void;

    /**
     * 设置音量键调节类型。
     *
     * @permission ohos.permission.MODIFY_AUDIO_SETTINGS
     * @param { AudioVolumeType } volumeType - 应用程序期望控制的音频音量类型。
     * @param { int } duration - 无音量键事件时，控制音量类型的持续时间，单位为秒（s）。<br>当计时器到期时，强制音量类型设置将被取消，最大持续时间不得超过10秒。<br>如果持续时间设置为-1，则取消该设置。
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
     * 获取活动音频流的音量信息。
     *
     * @returns { ActiveStreamsVolumeInfoArray } 返回结果。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800301 - System error, crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    getActiveStreamsVolumeInfo(): ActiveStreamsVolumeInfoArray;

    /**
     * 监听当前音量超过音量保护阈值的事件。
     *
     * @param { Callback<VolumeLimitExceededEvent> } callback - 回调函数，用于获取音量限制事件。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onVolumeLimitExceeded(callback: Callback<VolumeLimitExceededEvent>): void;

    /**
     * 取消订阅当前音量是否超过音量保护阈值的监控。
     *
     * @param { Callback<VolumeLimitExceededEvent> } [callback] - 1. 必填参数缺失；。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offVolumeLimitExceeded(callback?: Callback<VolumeLimitExceededEvent>): void;

    /**
     * 确认调整超出音量保护阈值的音量结果。
     *
     * @param { AudioVolumeType } volumeType - 音频音量类型，
     *     不同的音量类型有不同的阈值，
     *     volumeType 用于识别当前的音量类型阈值。
     * @param { boolean } result - 确认音量调整已超过音量保护阈值
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - System error.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    confirmVolumeLimitExceeded(volumeType: AudioVolumeType, result: boolean): void;
  }

  /**
   * 管理音频组音量。在调用AudioVolumeGroupManager的接口前，需要先通过
   * [getVolumeGroupManager]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getVolumeGroupManager(groupId: int, callback: AsyncCallback<AudioVolumeGroupManager>)}
   *  创建实例。
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AudioVolumeGroupManager {
    /**
     * 设置指定流的音量。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { int } volume - 音量等级，可设置范围通过
     *     [getMinVolume]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     和
     *     [getMaxVolume]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     获取。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置指定流的音量成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    setVolume(volumeType: AudioVolumeType, volume: int, callback: AsyncCallback<void>): void;
    /**
     * 设置指定流的音量。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { int } volume - 音量等级，可设置范围通过
     *     [getMinVolume]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     和
     *     [getMaxVolume]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     获取。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    setVolume(volumeType: AudioVolumeType, volume: int): Promise<void>;

    /**
     * 设置指定流的音量，同时指定本次修改音量是否要显示系统音量条。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { int } volume - 音量等级，可设置范围通过
     *     [getMinVolume]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     和
     *     [getMaxVolume]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     获取。
     * @param { int } flags - 音量等级，可设置范围通过
     *     [getMinVolume]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     和
     *     [getMaxVolume]{@link @ohos.multimedia.audio:audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     获取。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setVolumeWithFlag(volumeType: AudioVolumeType, volume: int, flags: int): Promise<void>;

    /**
     * 查询指定应用活跃的音频音量类型；如果将uid传入为0，则查询的是全局范围内活跃的音频音量类型。
     *
     * @param { int } uid - 应用ID。
     * @returns { AudioVolumeType } 音频音量类型。
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
     * > **说明：**
     * > > 从API version 9开始支持，从API version 20开始废弃，建议使用
     * > [getVolumeByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getVolumeByStream}替代。
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
     * > **说明：**
     * > > 从API version 9开始支持，从API version 20开始废弃，建议使用
     * > [getVolumeByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getVolumeByStream}替代。
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
     * > **说明：**
     * > > 从API version 10开始支持，从API version 20开始废弃，建议使用
     * > [getVolumeByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getVolumeByStream}替代。
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
     * > **说明：**
     * > > 从API version 9开始支持，从API version 20开始废弃，建议使用
     * > [getMinVolumeByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getMinVolumeByStream}替代。
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
     * > **说明：**
     * > > 从API version 9开始支持，从API version 20开始废弃，建议使用
     * > [getMinVolumeByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getMinVolumeByStream}替代。
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
     * > **说明：**
     * > > 从API version 10开始支持，从API version 20开始废弃，建议使用
     * > [getMinVolumeByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getMinVolumeByStream}替代。
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
     * > **说明：**
     * > > 从API version 9开始支持，从API version 20开始废弃，建议使用
     * > [getMaxVolumeByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getMaxVolumeByStream}替代。
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
     * > **说明：**
     * > > 从API version 9开始支持，从API version 20开始废弃，建议使用
     * > [getMaxVolumeByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getMaxVolumeByStream}替代。
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
     * > **说明：**
     * > > 从API version 10开始支持，从API version 20开始废弃，建议使用
     * > [getMaxVolumeByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getMaxVolumeByStream}替代。
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
     * 设置指定音量流静音。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { boolean } mute - 静音状态，true为静音，false为非静音。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置指定音量流静音成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    mute(volumeType: AudioVolumeType, mute: boolean, callback: AsyncCallback<void>): void;
    /**
     * 设置指定音量流静音。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { boolean } mute - 静音状态，true为静音，false为非静音。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    mute(volumeType: AudioVolumeType, mute: boolean): Promise<void>;

    /**
     * 获取指定音量流静音状态。使用callback异步回调。
     *
     * > **说明：**
     * > > 从API version 9开始支持，从API version 20开始废弃，建议使用
     * > [isSystemMutedForStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.isSystemMutedForStream}替代。
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
     * > **说明：**
     * > > 从API version 9开始支持，从API version 20开始废弃，建议使用
     * > [isSystemMutedForStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.isSystemMutedForStream}替代。
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
     * > **说明：**
     * > > 从API version 10开始支持，从API version 20开始废弃，建议使用
     * > [isSystemMutedForStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.isSystemMutedForStream}替代。
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
     * 设置铃声模式。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioRingMode } mode - 音频铃声模式。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置铃声模式成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    setRingerMode(mode: AudioRingMode, callback: AsyncCallback<void>): void;
    /**
     * 设置铃声模式。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioRingMode } mode - 音频铃声模式。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * 监听铃声模式变化事件（当[AudioRingMode]{@link @ohos.multimedia.audio:audio.AudioRingMode}发生变化时触发）。使用callback异步回调。
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
     * 监听铃声模式变化事件（当[AudioRingMode]{@link @ohos.multimedia.audio:audio.AudioRingMode}发生变化时触发）。使用callback异步回调。
     *
     * @param { Callback<AudioRingMode> } callback - 回调函数，返回变化后的铃音模式。
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
     * 取消监听铃声模式变化事件。使用callback异步回调。
     *
     * @param { Callback<AudioRingMode> } [callback] - 回调函数，返回变化后的铃音模式。
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
     * 设置麦克风静音状态。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { boolean } mute - 待设置的静音状态，true为静音，false为非静音。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * 设置麦克风持久化静音状态。使用Promise异步回调。
     *
     * @permission ohos.permission.MICROPHONE_CONTROL
     * @param { boolean } mute - 待设置的静音状态，true为静音，false为非静音。
     * @param { PolicyType } type - 静音策略类型。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 获取麦克风持久化静音状态。同步返回结果。
     *
     * @permission ohos.permission.MICROPHONE_CONTROL
     * @returns { boolean } 麦克风是否处于静音状态。true表示处于静音状态，false表示处于未静音状态。
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
     * 监听系统麦克风状态更改事件（当检测到系统麦克风状态发生改变时触发）。使用callback异步回调。
     * 目前此订阅接口在单进程多AudioManager实例的使用场景下，仅最后一个实例的订阅生效，其他实例的订阅会被覆盖（即使最后一个实例没有进行订阅）。因此，推荐使用单一AudioManager实例进行开发。
     *
     * @param { Callback<MicStateChangeEvent> } callback - 回调函数，返回变更后的麦克风状态。
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
     * 取消监听系统麦克风状态更改事件。使用callback异步回调。
     *
     * @param { Callback<MicStateChangeEvent> } [callback] - 回调函数，返回变更后的麦克风状态。
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
     * 调节当前最高优先级的流的音量，使音量值按步长加或减。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { VolumeAdjustType } adjustType - 音量调节方向。
     * @param { AsyncCallback<void> } callback - 回调函数。当调节当前最高优先级的流的音量成功，err为undefined，否则为错误对象。
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
     * 单步设置当前最高优先级的流的音量。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { VolumeAdjustType } adjustType - 音量调节方向。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * 单步设置指定流的音量。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { VolumeAdjustType } adjustType - 音量调节方向。
     * @param { AsyncCallback<void> } callback - 回调函数。当单步设置指定流的音量成功，err为undefined，否则为错误对象。
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
     * 单步设置指定流的音量。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - 音频音量类型。
     * @param { VolumeAdjustType } adjustType - 音量调节方向。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * > **说明：**
     * > > 从API version 10开始支持，从API version 20开始废弃，建议使用
     * > [getVolumeInUnitOfDbByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getVolumeInUnitOfDbByStream}
     * > 替代。
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
     * > **说明：**
     * > > 从API version 10开始支持，从API version 20开始废弃，建议使用
     * > [getVolumeInUnitOfDbByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getVolumeInUnitOfDbByStream}
     * > 替代。
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
     * > **说明：**
     * > > 从API version 10开始支持，从API version 20开始废弃，建议使用
     * > [getVolumeInUnitOfDbByStream]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getVolumeInUnitOfDbByStream}
     * > 替代。
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
     * 音频生动源类型。
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
   * 监听设备空间音频开关状态。
   *
   * @interface AudioSpatialEnabledStateForDevice
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioSpatialEnabledStateForDevice {
    /**
     * 音频设备描述。
     *
     * @type { AudioDeviceDescriptor }
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    deviceDescriptor: AudioDeviceDescriptor;
    /**
     * 空间化或头部追踪或自适应空间渲染启用状态。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    enabled: boolean;
  }

  /**
   * 此接口用于通知监听器任何设备个性化空间化启用状态的变化。
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
     * 个性化空间化已启用状态。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enabled: boolean;
  }

  /**
   * 用于跨进程传输的匿名个性化HRTF文件描述符。
   *
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AudioHRTFAnonymousDescriptor {
    /**
     * 个性化HRTF的文件描述符。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    fd: int;

    /**
     * 个性化HRTF数据的总大小（以字节为单位）。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    length: long;
  }

  /**
   * 空间音频管理。在使用AudioSpatializationManager的接口前，需要使用
   * [getSpatializationManager]{@link @ohos.multimedia.audio:audio.AudioManager.getSpatializationManager}获取
   * AudioSpatializationManager实例。
   *
   * @typedef AudioSpatializationManager
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @since 18 dynamic
   * @since 23 static
   */
  interface AudioSpatializationManager {
    /**
     * 获取系统是否支持空间音频，同步返回结果。
     *
     * @returns { boolean } 返回系统是否支持空间音频，true为支持，false为不支持。
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isSpatializationSupported(): boolean;

    /**
     * 获取指定设备是否支持空间音频，同步返回结果。
     *
     * @param { AudioDeviceDescriptor } deviceDescriptor - 指定设备的描述。
     * @returns { boolean } 返回指定设备是否支持空间音频，true为支持，false为不支持。
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
     * 获取系统是否支持头动跟踪，同步返回结果。
     *
     * @returns { boolean } 返回系统是否支持头动跟踪，true为支持，false为不支持。
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isHeadTrackingSupported(): boolean;

    /**
     * 获取指定设备是否支持头动跟踪，同步返回结果。
     *
     * @param { AudioDeviceDescriptor } deviceDescriptor - 指定设备的描述。
     * @returns { boolean } 返回指定设备是否支持头动跟踪，true为支持，false为不支持。
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
     * @returns { boolean } 系统是否支持个性化空间化。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isPersonalizedSpatializationSupported(): boolean;

    /**
     * 根据输入指令，开启/关闭空间音频渲染效果。使用callback异步回调。
     *
     * > **说明：**
     * > > 从 API version 11 开始支持，从 API version 12 开始废弃，建议使用
     * > [setSpatializationEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean): Promise\<void>]{@link audio.AudioSpatializationManager.setSpatializationEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean)}
     * > 替代。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enable - 表示开启/关闭空间音频渲染。true为开启，false为关闭。
     * @param { AsyncCallback<void> } callback - 回调函数。当开启/关闭空间音频渲染效果成功，err为undefined，否则为错误对象。
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
     * 根据输入指令，开启/关闭空间音频渲染效果。使用Promise异步回调。
     *
     * > **说明：**
     * > > 从 API version 11 开始支持，从 API version 12 开始废弃，建议使用
     * > [setSpatializationEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean): Promise\<void>]{@link audio.AudioSpatializationManager.setSpatializationEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean)}
     * > 替代。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enable - 表示开启/关闭空间音频渲染。true为开启，false为关闭。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * 根据输入指令，开启/关闭指定设备的空间音频渲染效果。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioDeviceDescriptor } deviceDescriptor - 指定设备的描述。
     * @param { boolean } enabled - 表示开启/关闭空间音频渲染。true为开启，false为关闭。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * 获取空间音频渲染是否开启，同步返回结果。
     *
     * > **说明：**
     * > > 从 API version 11 开始支持，从 API version 12 开始废弃，建议使用
     * > [isSpatializationEnabled(deviceDescriptor: AudioDeviceDescriptor): boolean]{@link audio.AudioSpatializationManager.isSpatializationEnabled(deviceDescriptor: AudioDeviceDescriptor)}
     * > 替代。
     *
     * @returns { boolean } 返回空间音频渲染是否开启，true为开启，false为未开启。
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#isSpatializationEnabled
     */
    isSpatializationEnabled(): boolean;
    /**
     * 获取指定设备的空间音频渲染是否开启，同步返回结果。
     *
     * @param { AudioDeviceDescriptor } deviceDescriptor - 指定设备的描述。
     * @returns { boolean } 返回指定设备的空间音频渲染是否开启，true为开启，false为未开启。
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
     * 监听空间音频渲染开关状态变化事件（当空间音频渲染开关状态发生变化时触发）。使用callback异步回调。
     *
     * > **说明：**
     * > > 从 API version 11 开始支持，从 API version 12 开始废弃，建议使用
     * > [on(type: 'spatializationEnabledChangeForAnyDevice', callback: Callback<AudioSpatialEnabledStateForDevice\>): void]{@link audio.AudioSpatializationManager.on_spatializationEnabledChangeForAnyDevice}
     * > 替代。
     *
     * @param { 'spatializationEnabledChange' } type - 事件回调类型，支持的事件为'spatializationEnabledChange'，当空间音频渲染开关状态发生变化时，触发该事件。
     * @param { Callback<boolean> } callback - 回调函数。返回true表示音频渲染已打开；返回false表示音频渲染已关闭。
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
     * 监听空间音频渲染开关状态变化事件（当空间音频渲染开关状态发生变化时触发）。使用callback异步回调。
     *
     * @param { 'spatializationEnabledChangeForAnyDevice' } type - 事件回调类型，支持的事件为'spatializationEnabledChangeForAnyDevice'，当空间音频
     *     渲染开关状态发生变化时，触发该事件。
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - 回调函数，返回设备信息和空间音频渲染开关状态。
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
     * 监听空间音频渲染开关状态变化事件（当空间音频渲染开关状态发生变化时触发）。使用callback异步回调。
     *
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - 回调函数，返回设备信息和空间音频渲染开关状态。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 23 static
     */
    onSpatializationEnabledChangeForAnyDevice(callback: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * 取消监听空间音频渲染开关状态变化事件。使用callback异步回调。
     *
     * > **说明：**
     * > > 从 API version 11 开始支持，从 API version 12 开始废弃，建议使用
     * > [off('spatializationEnabledChangeForAnyDevice')]{@link audio.AudioSpatializationManager.off_spatializationEnabledChangeForAnyDevice}
     * > 替代。
     *
     * @param { 'spatializationEnabledChange' } type - 事件回调类型，支持的事件为'spatializationEnabledChange'，当取消监听空间音频渲染开关状态变化事件时，触发该事件。
     * @param { Callback<boolean> } callback - 回调函数。返回true表示音频渲染已打开；返回false表示音频渲染已关闭。
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
     * 取消监听空间音频渲染开关状态变化事件。使用callback异步回调。
     *
     * @param { 'spatializationEnabledChangeForAnyDevice' } type - 事件回调类型，支持的事件为'spatializationEnabledChangeForAnyDevice'，当取消监听
     *     空间音频渲染开关状态变化事件时，触发该事件。
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - 回调函数，返回设备信息和空间音频渲染开关状态。
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
     * 取消监听空间音频渲染开关状态变化事件。使用callback异步回调。
     *
     * @param { Callback<AudioSpatialEnabledStateForDevice> } [callback] - 回调函数，返回设备信息和空间音频渲染开关状态。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 23 static
     */
    offSpatializationEnabledChangeForAnyDevice(callback?: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * 根据输入指令，开启/关闭头动跟踪效果。使用callback异步回调。
     *
     * > **说明：**
     * > > 从 API version 11 开始支持，从 API version 12 开始废弃，建议使用
     * > [setHeadTrackingEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean): Promise\<void>]{@link audio.AudioSpatializationManager.setHeadTrackingEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean)}
     * > 替代。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enable - 表示开启/关闭头动跟踪。true为开启，false为关闭。
     * @param { AsyncCallback<void> } callback - 回调函数。当开启/关闭头动跟踪效果成功，err为undefined，否则为错误对象。
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
     * 根据输入指令，开启/关闭头动跟踪效果。使用Promise异步回调。
     *
     * > **说明：**
     * > > 从 API version 11 开始支持，从 API version 12 开始废弃，建议使用
     * > [setHeadTrackingEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean): Promise\<void>]{@link audio.AudioSpatializationManager.setHeadTrackingEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean)}
     * > 替代。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enable - 表示开启/关闭头动跟踪。true为开启，false为关闭。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * 根据输入指令，开启/关闭指定设备的头动跟踪效果。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioDeviceDescriptor } deviceDescriptor - 设备描述符。
     * @param { boolean } enabled - 表示开启/关闭头动跟踪。true为开启，false为关闭。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * 获取头动跟踪是否开启，同步返回结果。
     *
     * > **说明：**
     * > > 从 API version 11 开始支持，从 API version 12 开始废弃，建议使用
     * > [isHeadTrackingEnabled(deviceDescriptor: AudioDeviceDescriptor): boolean]{@link audio.AudioSpatializationManager.isHeadTrackingEnabled(deviceDescriptor: AudioDeviceDescriptor)}
     * > 替代。
     *
     * @returns { boolean } 返回头动跟踪是否开启，true为开启，false为未开启。
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.audio.AudioSpatializationManager#isHeadTrackingEnabled
     */
    isHeadTrackingEnabled(): boolean;
    /**
     * 获取指定设备的头动跟踪是否开启，同步返回结果。
     *
     * @param { AudioDeviceDescriptor } deviceDescriptor - 指定设备的描述。
     * @returns { boolean } 返回指定设备的头动跟踪是否开启，true为开启，false为未开启。
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
     * 监听头动跟踪开关状态变化事件（当动跟踪开关状态发生变化时触发）。使用callback异步回调。
     *
     * > **说明：**
     * > > 从 API version 11 开始支持，从 API version 12 开始废弃，建议使用
     * > [on(type: 'headTrackingEnabledChangeForAnyDevice', callback: Callback<AudioSpatialEnabledStateForDevice\>): void]{@link audio.AudioSpatializationManager.on_headTrackingEnabledChangeForAnyDevice}
     * > 替代。
     *
     * @param { 'headTrackingEnabledChange' } type - 事件回调类型，支持的事件为'headTrackingEnabledChange'，当动跟踪开关状态发生变化时，触发该事件。
     * @param { Callback<boolean> } callback - 回调函数。返回true表示头动跟踪已打开；返回false表示头动跟踪已关闭。
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
     * 监听头动跟踪开关状态变化事件（当动跟踪开关状态发生变化时触发）。使用callback异步回调。
     *
     * @param { 'headTrackingEnabledChangeForAnyDevice' } type - 事件回调类型，支持的事件为'headTrackingEnabledChangeForAnyDevice'，当动跟踪开关状态发
     *     生变化时，触发该事件。
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - 回调函数。返回true表示头动跟踪已打开；返回false表示头动跟踪已关闭。
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
     * 订阅指定设备的头部追踪启用状态变更事件。
     * 当头部追踪启用状态发生变化时，已注册的客户端将收到回调。
     *
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - 回调函数用于获取指定设备的头部跟踪启用状态。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 23 static
     */
    onHeadTrackingEnabledChangeForAnyDevice(callback: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * 取消监听头动跟踪开关状态变化事件。使用callback异步回调。
     *
     * > **说明：**
     * > > 从 API version 11 开始支持，从 API version 12 开始废弃，建议使用
     * > [off('headTrackingEnabledChangeForAnyDevice')]{@link audio.AudioSpatializationManager.off_headTrackingEnabledChangeForAnyDevice}
     * > 替代。
     *
     * @param { 'headTrackingEnabledChange' } type - 事件回调类型，支持的事件为'headTrackingEnabledChange'，当取消监听头动跟踪开关状态变化事件时，触发该事件。
     * @param { Callback<boolean> } callback - 回调函数。返回true表示头动跟踪已打开；返回false表示头动跟踪已关闭。
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
     * 取消监听头动跟踪开关状态变化事件。使用callback异步回调。
     *
     * @param { 'headTrackingEnabledChangeForAnyDevice' } type - 事件回调类型，支持的事件为'headTrackingEnabledChangeForAnyDevice'，当取消监听头动跟踪
     *     开关状态变化事件时，触发该事件。
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - 回调函数。返回true表示头动跟踪已打开；返回false表示头动跟踪已关闭。
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
     * 取消监听头动跟踪开关状态变化事件。使用callback异步回调。
     *
     * @param { Callback<AudioSpatialEnabledStateForDevice> } [callback] - 回调函数。返回true表示头动跟踪已打开；返回false表示头动跟踪已关闭。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 23 static
     */
    offHeadTrackingEnabledChangeForAnyDevice(callback?: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * 更新空间化设备状态，同步返回结果。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioSpatialDeviceState } spatialDeviceState - 需要更新的空间化设备状态。
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
     * 设置空间音频渲染场景类型，同步返回结果。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioSpatializationSceneType } spatializationSceneType - 需要设置的空间音频渲染场景类型。
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
     * 查询当前空间音频渲染场景类型，同步返回结果。
     *
     * @returns { AudioSpatializationSceneType } 返回当前空间音频渲染场景类型。
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
     * @param { Callback<boolean> } callback - 回调函数。参数为true表示打开空间音频渲染状态；参数为false表示关闭空间音频渲染状态。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     */
    on(type: 'spatializationEnabledChangeForCurrentDevice', callback: Callback<boolean>): void;

    /**
     * 监听当前设备空间音频渲染开关状态变化事件。使用callback异步回调。
     *
     * @param { Callback<boolean> } callback - 回调函数。参数为true表示打开空间音频渲染状态；参数为false表示关闭空间音频渲染状态。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 23 static
     */
    onSpatializationEnabledChangeForCurrentDevice(callback: Callback<boolean>): void;

    /**
     * 取消监听当前设备空间音频渲染开关状态变化事件。
     *
     * @param { 'spatializationEnabledChangeForCurrentDevice' } type - 事件回调类型，支持的事件为'
     *     spatializationEnabledChangeForCurrentDevice'。
     * @param { Callback<boolean> } [callback] - 待注销的回调函数。参数为true表示打开空间音频渲染状态；参数为false表示关闭空间音频渲染状态。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     */
    off(type: 'spatializationEnabledChangeForCurrentDevice', callback?: Callback<boolean>): void;

    /**
     * 取消订阅当前设备的空间化启用状态更改事件。
     *
     * @param { Callback<boolean> } [callback] - Callback used to get the spatialization enable state.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 23 static
     */
    offSpatializationEnabledChangeForCurrentDevice(callback?: Callback<boolean>): void;

    /**
     * 设置指定设备是否启用自适应空间渲染。
     * 该方法使用 Promise 返回结果。
     * 当启用自适应空间渲染时，空间音频渲染将不会对立体声音频生效。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioDeviceDescriptor } deviceDescriptor - 目标设备需启用自适应空间渲染功能。
     * @param { boolean } enabled - 自适应空间渲染启用状态。
     * @returns { Promise<void> } Promise对象，返回void。
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
     * 检查指定设备是否启用了自适应空间渲染。
     *
     * @param { AudioDeviceDescriptor } deviceDescriptor - 目标设备，用于检查是否启用了自适应空间渲染。
     * @returns { boolean } 指定设备是否启用了自适应空间渲染。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 24 dynamic&static
     */
    isAdaptiveSpatialRenderingEnabled(deviceDescriptor: AudioDeviceDescriptor): boolean;

    /**
     * 订阅指定设备的自适应空间渲染启用状态变更事件。当自适应空间渲染启用状态发生变化时，已注册的客户端将收到回调。
     *
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - 回调函数，用于通过指定设备获取自适应空间渲染的启用状态。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 24 dynamic&static
     */
    onAdaptiveSpatialRenderingEnabledChangeForAnyDevice(callback: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * 取消订阅指定设备的自适应空间渲染启用状态变更事件。
     *
     * @param { Callback<AudioSpatialEnabledStateForDevice> } [callback] - 回调函数，用于通过指定设备获取自适应空间渲染的启用状态。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 24 dynamic&static
     */
    offAdaptiveSpatialRenderingEnabledChangeForAnyDevice(callback?: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * 检查指定设备是否启用了个性化空间化功能。
     *
     * @param { AudioDeviceDescriptor } selectedAudioDevice - 音频设备描述。
     * @returns { boolean } 如果个性化空间化成功启用，则返回 true，否则返回 false。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isPersonalizedSpatializationEnabled(selectedAudioDevice: AudioDeviceDescriptor): boolean;

    /**
     * 设置指定设备是否启用个性化空间化。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioDeviceDescriptor } selectedAudioDevice - 音频设备描述。
     * @param { boolean } enable - 是否启用个性化空间化。
     * @returns { Promise<void> } 承诺用于返回结果。
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
     * 订阅由指定设备触发的个性化空间化状态变更事件。当状态发生变化时，已注册的客户端将收到回调通知。
     *
     * @param { Callback<AudioPersonalizedSpatialEnabledChangeForAnyDevice> } callback - 回调函数，
     *     用于获取指定设备上已启用的个性化空间化状态。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onPersonalizedSpatializationEnabledChangeForAnyDevice(
      callback: Callback<AudioPersonalizedSpatialEnabledChangeForAnyDevice>): void;

    /**
     * 取消订阅由指定设备触发的个性化空间化状态变更事件。当状态发生变化时，已注册的客户端将收到回调通知。
     *
     * @param { Callback<AudioPersonalizedSpatialEnabledChangeForAnyDevice> } [callback] - 回调函数，
     *     用于获取指定设备上已启用的个性化空间化状态。
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
     * @param { AudioHRTFAnonymousDescriptor } hrtfDescriptor - 个性化HRTF数据描述符，用于下载。
     * @returns { Promise<void> } Promise 对象，返回 void。
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
     * 获取当前空间音频源类型。
     *
     * @returns { SpatialAudioSourceType } 当前设备的空间音频源类型。
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    getCurrentSpatialAudioSourceType(): SpatialAudioSourceType;

    /**
     * 订阅空间音频源类型更改事件。当当前空间音频源类型发生变化时，注册的客户端将收到回调通知。
     *
     * @param { Callback<SpatialAudioSourceType> } callback - 回调函数，用于接收当前空间音频源类型。
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    onSpatialAudioSourceTypeChange(callback: Callback<SpatialAudioSourceType>): void;

    /**
     * 取消订阅空间音频源类型更改事件。
     *
     * @param { Callback<SpatialAudioSourceType> } [callback] - 回调函数，用于接收当前空间音频源类型变更。
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
   * 表示音频分离效果的音量类型。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AudioSeparationVolumeType {
    /**
     * 人声音量类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    VOLUME_TYPE_VOCAL = 0
  }

  /**
   * 音频效果管理。在使用AudioEffectManager的接口前，需要使用[getEffectManager]{@link audio.AudioManager.getEffectManager}获取
   * AudioEffectManager实例。
   *
   * @typedef AudioEffectManager
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface AudioEffectManager {
    /**
     * 获取支持的下行音效模式，同步返回结果。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @returns { Array<AudioEffectProperty> } 返回当前设备支持的音效模式。
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
     * 设置当前音效模式，同步返回结果。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { Array<AudioEffectProperty> } propertyArray - 需要设置的音效模式。
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
     * 获取当前音效模式，同步返回结果。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @returns { Array<AudioEffectProperty> } 返回当前音效模式。
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
     * 设置当前设备的降噪模式。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { int } clientUid - 当前使用实时录音类型的客户端应用的Uid。该值应为整数。
     * @param { AudioDeviceDescriptor } device - 通过录制选择的设备描述符。
     * @param { NoiseReductionMode } noiseReductionMode - 降噪模式需要在当前设备上进行设置。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Live audio capture service exception.
     *     Indicates an internal failure in the audio service during live stream creation,
     *     start, read, stop, release, or noise reduction handling.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setNoiseReductionMode(clientUid: int, device: AudioDeviceDescriptor, noiseReductionMode: NoiseReductionMode): void;

    /**
     * 获取当前设备的降噪模式设置信息。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { int } clientUid - 当前使用实时录制类型的客户端应用的UID。
     * @param { AudioDeviceDescriptor } device - 通过录制选择的设备描述符。
     * @returns { NoiseReductionMode } 当前设备的降噪模式。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getNoiseReductionMode(clientUid: int, device: AudioDeviceDescriptor): NoiseReductionMode;

    /**
     * 获取当前设备上所有支持的降噪模式。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioDeviceDescriptor } device - 已连接输入设备的设备描述符。
     * @returns { Array<NoiseReductionMode> } 输入设备支持的降噪模式列表。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getSupportedNoiseReductionModes(device: AudioDeviceDescriptor): Array<NoiseReductionMode>;

    /**
     * 在连接外部设备时，将降噪模式能力更新到音频框架。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { NoiseReductionCapability } capability - 外部设备的降噪能力，包括设备描述符和设备支持的模式。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    updateDeviceNoiseReductionCapability(capability: NoiseReductionCapability): void;

    /**
     * 订阅降噪模式设置事件回调。
     *
     * @param { AudioDeviceDescriptor } device - 外部连接设备的描述符，用于设置降噪模式。
     * @param { Callback<NoiseReductionConfigAction> } callback - 降噪模式需要设备设置。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onNoiseReductionSettingChange(device: AudioDeviceDescriptor, callback: Callback<NoiseReductionConfigAction>): void;

    /**
     * 取消订阅降噪模式设置事件回调。
     *
     * @param { AudioDeviceDescriptor } device - 外部连接设备的描述符。
     * @param { Callback<NoiseReductionConfigAction> } [callback] - 降噪模式回调，设备需要进行设置。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offNoiseReductionSettingChange(device: AudioDeviceDescriptor,
      callback?: Callback<NoiseReductionConfigAction>): void;

    /**
     * 查询当前设备是否支持系统的音频分离效果。
     *
     * > **说明：**
     * >
     * > 应用在使用音频分离效果相关接口前，应先调用本接口确认设备是否支持。
     *
     * @returns { boolean } 当前设备是否支持音频分离效果。true表示支持，false表示不支持。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isAudioSeparationEffectSupported(): boolean;

    /**
     * 为指定应用进程或音频播放流设置音频分离效果的启用状态。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - 调用此接口前，应先调用
     * > [isAudioSeparationEffectSupported]{@link @ohos.multimedia.audio:audio.AudioEffectManager.isAudioSeparationEffectSupported}
     * > 确认设备是否支持音频分离效果。
     * >
     * > - 当streamId参数没有传入时，根据uid控制整个应用的音频分离效果开关；当streamId参数传入时，根据streamId控制指定音频播放流的音频分离效果开关。播放应用可通过
     * > [AudioRenderer.getAudioStreamIdSync]{@link @ohos.multimedia.audio:audio.AudioRenderer.getAudioStreamIdSync}获取
     * > streamId。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enabled - 音频分离效果的启用状态。true表示启用，false表示禁用。
     * @param { int } uid - 表示目标应用进程ID。
     * @param { long } [streamId] - 目标音频播放流的ID，默认值为-1。<br>如果没有传入此参数，则根据uid控制应用级别的音频分离效果开关。<br>播放应用可通过
     *     [AudioRenderer.getAudioStreamIdSync]{@link @ohos.multimedia.audio:audio.AudioRenderer.getAudioStreamIdSync}获取
     *     streamId。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 系统中的音频分离效果状态可由系统播放控制应用设定，其他应用程序可以使用本接口监听状态变更事件。
     *
     * @param { Callback<boolean> } callback - 回调函数。当音频分离效果启用状态变化时，返回true表示启用，false表示禁用。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onAudioSeparationEffectEnabledChange(callback: Callback<boolean>): void;

    /**
     * 取消订阅系统音频分离效果使能状态变更事件。
     *
     * @param { Callback<boolean> } [callback] - 需要取消的回调函数，默认值为空。如果不使用此参数，则取消之前在当前进程中订阅的所有回调。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offAudioSeparationEffectEnabledChange(callback?: Callback<boolean>): void;

    /**
     * 设置指定音量类型的音频分离效果音量。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioSeparationVolumeType } type - 音频分离效果的音量类型。
     * @param { double } volume - 目标音量值，取值范围为[0, 1]。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 系统录音控制面板的配置信息。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SystemRecordControllerConfig {
    /**
     * 应用期望使用的音频源类型。系统会根据该参数确定应用的录音场景，并为用户提供匹配的降噪模式选择能力。支持的音频源类型包括SOURCE_TYPE_MIC、SOURCE_TYPE_CAMCORDER和SOURCE_TYPE_LIVE
     * 。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    sourceType: SourceType;
  }

  /**
   * 定义系统记录控制器状态变化时所携带的信息。
   * 它包括启用状态、应用程序UID和预期的音频源类型。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SystemRecordControllerChangeInfo {
    /**
     * 系统记录控制器面板是否启用。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enabled: boolean;

    /**
     * 触发系统记录控制器状态变化的应用程序UID。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uid?: int;

    /**
     * 应用程序在启用录音控制器时配置的预期音频源类型。
     * 用于匹配相应的录音场景和降噪模式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    sourceType?: SourceType;
  }

  /**
   * 录音策略管理，提供协同录音和录音控制能力。
   * 在使用AudioRecordingManager的接口之前，需先通过
   * [getRecordingManager]{@link @ohos.multimedia.audio:audio.AudioManager.getRecordingManager}获取AudioRecordingManager实例
   * 。
   *
   * > **说明：**
   * >
   * > - 本模块首批接口从API版本26.0.0开始支持。
   * >
   * > - 本模块接口仅可在Stage模型下使用。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AudioRecordingManager {
    /**
     * 检查该设备是否支持协同录制。
     *
     * @returns { boolean } 该设备是否支持协同录制。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isCollaborativeRecordingEnabled(): boolean;

    /**
     * 获取支持协作录音的音频设备。
     *
     * @returns { AudioDeviceDescriptors } 支持协同录制的设备。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getSupportedCollaborativeRecordingDevices(): AudioDeviceDescriptors;

    /**
     * 为特定音频设备启用协作录音功能。
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enable - 确实可以实现协作录制。
     * @param { AudioDeviceDescriptors } devices - 目标音频设备用于协同录制，
     *     应使用 {@link getSupportedCollaborativeRecordingDevices} 来获取。
     * @returns { Promise<void> } Promise 对象，返回 void。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed, the devices are invalid.
     * @throws { BusinessError } 6800301 - Audio service error occurs, like service died.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setCollaborativeRecordingEnabledForDevices(enable: boolean, devices: AudioDeviceDescriptors): Promise<void>;

    /**
     * 获取当前的协作录制配置。
     *
     * @returns { CollaborativeRecordingConfiguration } 协作录音配置，若开启该功能，返回值中将包含音频设备信息。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800301 - Audio service error occurs, like service died.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getCurrentCollaborativeRecordingConfiguration(): CollaborativeRecordingConfiguration;

    /**
     * 启用或禁用系统录音控制面板。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - 应用可以在开始录音之前调用此接口在控制中心拉起录音控制面板，让用户完成录音设备或音频效果参数的选择，然后再启动录音服务。
     * >
     * > - 若录音过程中调用该接口，在拉起的录音控制面板中切换录音设备或音频效果参数，会导致录制的音频效果不一致。
     * >
     * > - 应用必须在前台才能启用该面板，如果应用在后台，启用操作不会生效。禁用面板不受应用前台或后台状态限制。
     *
     * @param { boolean } show - 启用或禁用系统录音控制面板。true表示启用，false表示禁用。
     * @param { SystemRecordControllerConfig } config - 系统录音控制面板的配置信息。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio service error occurs like service died.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enableSystemRecordController(show: boolean, config: SystemRecordControllerConfig): Promise<void>;

    /**
     * 订阅系统录制控制器面板启用状态变更事件。
     *
     * @param { Callback<SystemRecordControllerChangeInfo> } callback - 回调函数，用于监听系统录音控制器面板使能状态变化事件。
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
     * 取消订阅系统录制控制器面板启用状态变更事件。
     *
     * @param { Callback<SystemRecordControllerChangeInfo> } [callback] - 订阅中使用的回调函数
     * 用于取消订阅的函数。如果不使用此参数，将取消当前进程中之前订阅的所有回调。
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
   * 表示录音降噪模式的枚举。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum NoiseReductionMode {
    /**
     * 保真模式，不进行降噪。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FIDELITY = 0,

    /**
     * 纯人声模式，强降噪。
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
    STANDARD = 2
  }

  /**
   * 支持降噪能力的外部音频设备信息。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface NoiseReductionCapability {
    /**
     * 外部音频设备信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    device: AudioDeviceDescriptor;

    /**
     * 外部设备支持的降噪模式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    supportedModes: Array<NoiseReductionMode>;
  }

  /**
   * 降噪配置操作。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface NoiseReductionConfigAction {
    /**
     * 配置降噪功能的设备描述符。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    device: AudioDeviceDescriptor;

    /**
     * 用于配置降噪的模式。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    noiseReductionMode: NoiseReductionMode;

    /**
     * 用于配置降噪功能的应用程序名称。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    appName: string;
  }

  /**
   * 描述协作录制的配置。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface CollaborativeRecordingConfiguration {
    /**
     * 协作录音已启用状态。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enabled: boolean;

    /**
     * 协作录音音频设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    devices?: AudioDeviceDescriptors;
  }

  /**
   * 移动全景声管理器。
   * 在使用AudioCollaborativeManager的接口前，需要先使用[getCollaborativeManager]{@link audio.AudioManager.getCollaborativeManager}获取
   * AudioCollaborativeManager实例。
   *
   * @typedef AudioCollaborativeManager
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface AudioCollaborativeManager {
    /**
     * 查询系统移动全景声支持能力，同步返回结果。
     *
     * @returns { boolean } 表示系统是否支持移动全景声能力，true表示支持，false表示不支持。
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
     * @param { AudioDeviceDescriptor } deviceDescriptor - 待检查的音频设备描述符。
     * @returns { boolean } 指定设备是否支持协同播放。
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isCollaborativePlaybackSupportedForDevice(deviceDescriptor: AudioDeviceDescriptor): boolean;

    /**
     * 根据输入指令，开启或关闭指定设备移动全景声。使用Promise异步回调。
     * 当前只有蓝牙A2DP（Advanced Audio Distribution Profile）设备支持移动全景声。当开启移动全景声后，指定蓝牙A2DP设备和本地扬声器将同时播放音频。
     *
     * @param { AudioDeviceDescriptor } deviceDescriptor - 指定设备的描述。
     * @param { boolean } enabled - 表示开启或关闭移动全景声。true表示开启，false表示关闭。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 查询指定设备移动全景声状态，同步返回结果。
     *
     * @param { AudioDeviceDescriptor } deviceDescriptor - 指定设备的描述。
     * @returns { boolean } 返回指定设备移动全景声是否开启/关闭，true表示开启，false表示关闭。
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
   * 音频调试管理器，用于音频运行时调试，包括获取快照信息等功能，用于定位音频播放、录音、耳返、会话等场景中的异常问题。
   * **起始版本：** 26.0.0
   *
   * > **说明：**
   * >
   * > 快照信息的内容和格式后续会根据开发者使用情况和反馈建议优化调整，随版本迭代可能发生变化，所以仅供人工调试参考，不建议开发者依据快照信息开发功能逻辑。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AudioDebuggingManager {
    /**
     * 打印当前应用进程的完整音频运行时快照。快照包含所有播放流、录音流和音频会话信息。
     *
     * @param { int } fd - 文件描述符，指定快照信息的写入位置。小于0或不可写时，快照信息将输出到运行日志；否则输出到fd指向的文件。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    printAppInfo(fd: int): void;

    /**
     * 打印指定音频播放实例的完整音频运行时快照。快照包含流信息、通路信息、音量和设备信息。
     *
     * @param { AudioRenderer } renderer - 目标音频播放实例。
     * @param { int } fd - 文件描述符，指定快照信息的写入位置。小于0或不可写时，快照信息将输出到运行日志；否则输出到fd指向的文件。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    printRendererInfo(renderer: AudioRenderer, fd: int): void;

    /**
     * 打印指定录音实例的完整音频运行时快照。快照包含流信息、通路信息、音量和设备信息。
     *
     * @param { AudioCapturer } capturer - 目标录音实例。
     * @param { int } fd - 文件描述符，指定快照信息的写入位置。小于0或不可写时，快照信息将输出到运行日志；否则输出到fd指向的文件。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    printCapturerInfo(capturer: AudioCapturer, fd: int): void;

    /**
     * 打印指定耳返实例的完整音频运行时快照。快照包含耳返状态、设备和音效信息。
     *
     * @param { AudioLoopback } loopback - 目标耳返实例。
     * @param { int } fd - 文件描述符，指定快照信息的写入位置。小于0或不可写时，快照信息将输出到运行日志；否则输出到fd指向的文件。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    printLoopbackInfo(loopback: AudioLoopback, fd: int): void;

    /**
     * 打印指定会话管理器实例的完整音频运行时快照。快照包含会话状态、场景、策略和设备信息。
     *
     * @param { AudioSessionManager } session - 目标会话管理器实例。
     * @param { int } fd - 文件描述符，指定快照信息的写入位置。小于0或不可写时，快照信息将输出到运行日志；否则输出到fd指向的文件。
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    printSessionInfo(session: AudioSessionManager, fd: int): void;
  }

  /**
   * 枚举，设备连接类型。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum ConnectType {
    /**
     * 本地设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECT_TYPE_LOCAL = 1,

    /**
     * 分布式设备。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECT_TYPE_DISTRIBUTED = 2
  }

  /**
   * 音量组信息。
   *
   * @typedef VolumeGroupInfo
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface VolumeGroupInfo {
    /**
     * 组网络id。
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly networkId: string;

    /**
     * 组设备组id。
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly groupId: int;

    /**
     * 组映射id。
     *
     * @type { int }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly mappingId: int;

    /**
     * 组名。
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly groupName: string;

    /**
     * 连接设备类型。
     *
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
   *
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
     * 音频渲染器客户端应用程序的Uid。
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
     * 音频状态。
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
     * 音频采集器客户端应用程序的Uid。
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
     * 音频状态。
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
     * SystemCapability.Multimedia.Audio.Device
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * SystemCapability.Multimedia.Audio.Device
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * SystemCapability.Multimedia.Audio.Device
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * SystemCapability.Multimedia.Audio.Device
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * SystemCapability.Multimedia.Audio.Device
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * SystemCapability.Multimedia.Audio.Device
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * SystemCapability.Multimedia.Audio.Device
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * SystemCapability.Multimedia.Audio.Device
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly channelMasks: Array<int>;
    /**
     * 设备组网的ID。
     *
     * SystemCapability.Multimedia.Audio.Device
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly networkId: string;
    /**
     * 设备所处的焦点组ID。
     *
     * SystemCapability.Multimedia.Audio.Device
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly interruptGroupId: int;
    /**
     * 设备所处的音量组ID。
     *
     * SystemCapability.Multimedia.Audio.Device
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
     * SystemCapability.Multimedia.Audio.Device
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * SystemCapability.Multimedia.Audio.Core
     *
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * SystemCapability.Multimedia.Audio.Spatialization
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     * @since 23 static
     */
    readonly spatializationSupported?: boolean;

    /**
     * 设备的子类型ID。
     *
     * SystemCapability.Multimedia.Audio.Core
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    readonly dmDeviceType?: int;

    /**
     * 是否支持高品质录音。true表示支持，false表示不支持。
     *
     * SystemCapability.Multimedia.Audio.Core
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
     * SystemCapability.Multimedia.Audio.Device
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 22 dynamic
     * @since 23 static
     */
    readonly model?: string;

    /**
     * 设备支持的音频流能力。
     *
     * SystemCapability.Multimedia.Audio.Device
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 22 dynamic
     * @since 23 static
     */
    readonly capabilities?: Array<AudioStreamInfo>;

    /**
     * 分布式设备扩展信息，包括设备是否支持立体声、设备序列号等。
     *
     * 此接口仅可在Stage模型下使用。
     *
     * SystemCapability.Multimedia.Audio.Core
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly dmDeviceInfo?: string;
  }

  /**
   * 设备属性数组类型，为[AudioDeviceDescriptor]{@link @ohos.multimedia.audio:audio.AudioDeviceDescriptor}的数组，只读。
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
   * 音量改变时，应用接收的事件。
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
     * 标识是否会显示系统本身的音量条，true表示会显示系统音量条，false表示不会显示系统音量条。
     *
     * 若应用内含自定义音量条，建议根据此参数动态控制其显示：当updateUi为true时不显示自定义音量条，为false时显示自定义音量条，从而避免出现系统本身音量条与应用自定义音量条同时显示或不显示的问题。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamic
     * @since 23 static
     */
    updateUi: boolean;
    /**
     * 音量组id，可用于getGroupManager入参。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    volumeGroupId: int;
    /**
     * 网络id。
     *
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
     * 音量百分比，取值范围为[0, 100]。
     * 取值限定为整数。
     *
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
     * 标识是否会显示系统本身的音量条，true表示会显示系统音量条，false表示不会显示系统音量条。
     *
     * 若应用内含自定义音量条，建议根据此参数动态控制其显示：当updateUi为true时不显示自定义音量条，为false时显示自定义音量条，从而避免出现系统本身音量条与应用自定义音量条同时显示或不显示的问题。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     * @since 23 static
     */
    updateUi: boolean;
    /**
     * 变化前的音量值。
     * 取值限定为整数。
     *
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 dynamic&static
     */
    previousVolume?: int;
  }

  /**
   * 描述表示音量超过阈值的通知事件。
   * 在收到通知后，应用必须发送确认结果。
   * 在继续调整音量之前，通过 {@link #confirmVolumeLimitExceeded} 进行确认。
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface VolumeLimitExceededEvent {
    /**
     * 当前音量类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    volumeType: AudioVolumeType;
    /**
     * 当前音量等级。
     * 该值介于通过 {@link #getMinSystemVolume} 和 {@link #getMaxSystemVolume} 获取的值之间。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    currentVolume: int;
    /**
     * 当前卷音量型的音量大小阈值。
     * 该值介于通过 {@link #getMinSystemVolume} 和 {@link #getMaxSystemVolume} 获取的值之间。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    volumeThreshold: int;
  }

  /**
   * 活动音频流的音量信息。
   *
   * @typedef ActiveStreamVolumeInfo
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface ActiveStreamVolumeInfo {
    /**
     * 当前流的音量类型。
     *
     * @type { AudioVolumeType }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    volumeType: AudioVolumeType;
    /**
     * 应用程序的音量。
     * 取值限定为整数。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    appVolume: int;
    /**
     * 应用程序的UID。
     * 取值限定为整数。
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
   * 描述系统音量过滤器。
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SystemVolumeFilter {
    /**
     * 应用程序的UID。
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
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，建议使用[InterruptEvent]{@link audio.InterruptEvent}替代。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 26.0.0
     *
     * 此接口仅可在Stage模型下使用。
     *
     * 从API版本26.0.0开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
     * 从API version 12开始，该接口支持在原子化服务中使用。
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
   * 枚举，音频渲染器的渲染目标。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  enum RenderTarget {
    /**
     * 播放模式（音频渲染器的默认模式）。
     *
     * 在此模式下，音频将通过音频渲染器正常播放。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    PLAYBACK = 0,

    /**
     * 注入模式。
     *
     * 在此模式下，当录音流的source type为[SOURCE_TYPE_VOICE_COMMUNICATION](arkts-apis-audio-e.md#sourcetype8)，audio scene为
     * [AUDIO_SCENE_VOICE_CHAT](arkts-apis-audio-e.md#audioscene8)时，音频渲染器的输出将被注入到VoIP录音流上。
     *
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
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum AudioLatencyType {
    /**
     * 输入以获取所有音频处理单元（包括软件和硬件）的延迟。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LATENCY_TYPE_ALL = 0,

    /**
     * 输入以获取软件部分的延迟，包括软件中的音频效果。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LATENCY_TYPE_SOFTWARE = 1,

    /**
     * 输入以获取硬件部分的延迟，包括HAL、驱动程序和硬件中的音频效果。
     *
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
   * 音频渲染器写入数据的回调函数类型定义。
   *
   * @typedef { function } AudioRendererWriteDataCallback
   * @param { ArrayBuffer } data - 音频数据数组缓冲区。
   * @returns { AudioDataCallbackResult } 回调结果。如果返回 AudioDataCallbackResult.VALID，
   *     表示数据有效并将被播放。如果返回 AudioDataCallbackResult.INVALID，
   *     表示数据将不会被播放。
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
   * 音频渲染。在使用AudioRenderer的接口之前，需先通过
   * [audio.createAudioRenderer]{@link @ohos.multimedia.audio:audio.createAudioRenderer(options: AudioRendererOptions, callback: AsyncCallback<AudioRenderer>)}
   * 获取AudioRenderer实例。
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
     * @param { AsyncCallback<AudioRendererInfo> } callback - 回调函数。当获取音频渲染器的信息成功，err为undefined，data为获取到的音频渲染器的信息；否则为错误对象。
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
     * @param { AsyncCallback<void> } callback - 回调函数。当启动音频渲染器成功，err为undefined，否则为错误对象。异常将返回error对象：<br>错误码6800301：表示包含状态检查异常、焦
     *     点抢占失败、系统处理异常（具体错误查看系统日志）。
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
     *
     *     错误码6800301：表示包含状态检查异常、焦点抢占失败、系统处理异常（具体错误查看系统日志）。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * 写入缓冲区。使用callback异步回调。
     *
     * > **说明：**
     * > > 从API version 8开始支持，从API version 11开始废弃，建议使用[on('writeData')]{@link audio.AudioRenderer.on_writeData}替代。
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
     * > **说明：**
     * > > 从API version 8开始支持，从API version 11开始废弃，建议使用[on('writeData')]{@link audio.AudioRenderer.on_writeData}替代。
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
     * 获取输出音频流时间戳和位置信息，通常用于进行音画同步对齐。
     * 注意，当实际播放位置（framePosition）为0时，时间戳（timestamp）是固定值，直到流真正开始播放时才会更新。当调用Flush接口时实际播放位置也会被重置。
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
     * 清空缓冲区（[AudioState]{@link @ohos.multimedia.audio:audio.AudioState}为STATE_RUNNING、STATE_PAUSED、STATE_STOPPED状态下可用）。
     * 使用Promise异步回调。
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
     * @param { AsyncCallback<long> } callback - 回调函数。当获取音频渲染器的最小缓冲区大小成功，err为undefined，data为获取到的最小缓冲区大小；否则为错误对象。<br>单位为字节。
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
     *
     *     单位为字节。
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
     * > **说明：**
     * > > 从API version 8开始支持，从API version 11开始废弃，建议使用[setSpeed]{@link audio.AudioRenderer.setSpeed}替代。
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
     * > **说明：**
     * > > 从API version 8开始支持，从API version 11开始废弃，建议使用[setSpeed]{@link audio.AudioRenderer.setSpeed}替代。
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
     * > **说明：**
     * > > 从API version 8开始支持，从API version 11开始废弃，建议使用[getSpeed]{@link audio.AudioRenderer.getSpeed}替代。
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
     * > **说明：**
     * > > 从API version 8开始支持，从API version 11开始废弃，建议使用[getSpeed]{@link audio.AudioRenderer.getSpeed}替代。
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
     * > **说明：**
     * > > 从API version 10开始支持，从API version 11开始废弃，建议使用[getSpeed]{@link audio.AudioRenderer.getSpeed}替代。
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
     * @param { AsyncCallback<double> } callback - 回调函数。当获取音频流的最小音量成功，err为undefined，data为获取到的应用基于音频流的最小音量；否则为错误对象。<br>音量范围为
     *     [0.0, 1.0]。
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
     *
     *     音量范围为[0.0, 1.0]。
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
     * @param { AsyncCallback<double> } callback - 回调函数。当获取音频流的最大音量成功，err为undefined，data为获取到的应用基于音频流的最大音量；否则为错误对象。<br>音量范围为
     *     [0.0, 1.0]。
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
     *
     *     音量范围为[0.0, 1.0]。
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
     * @param { AsyncCallback<long> } callback - 回调函数。当获取当前播放音频流的欠载音频帧数量成功，err为undefined，data为获取到的当前播放音频流的欠载音频帧数量；否则为错误对象。
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
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - 回调函数。当获取音频流输出设备信息成功，err为undefined，data为获取到的音频流输出设备信息；否则为错误对象
     *     。
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
     * > - 本接口仅适用于[StreamUsage]{@link @ohos.multimedia.audio:audio.StreamUsage}为语音消息、VoIP语音通话或者VoIP视频通话的场景，支持听筒、扬声器和系统默认
     * > 设备。
     * >
     * > - 本接口允许在AudioRenderer创建后随时调用，系统会记录应用设置的默认本机内置发声设备。应用启动播放时，若外接设备如蓝牙耳机或有线耳机已接入，系统优先从外接设备发声；否则，系统遵循应用设置的默认本机内置发声设备
     * > 。
     *
     * @param { DeviceType } deviceType - 设备类型。<br>仅支持以下设备：EARPIECE（听筒）、SPEAKER（扬声器）和DEFAULT（系统默认设备）。
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
     * > - 该接口仅支持类型为[STREAM_USAGE_MUSIC]{@link @ohos.multimedia.audio:audio.StreamUsage}、
     * > [STREAM_USAGE_MOVIE]{@link @ohos.multimedia.audio:audio.StreamUsage}或
     * > [STREAM_USAGE_AUDIOBOOK]{@link @ohos.multimedia.audio:audio.StreamUsage}的音频流。
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
     * 设置音频渲染器的渲染目标。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - 此方法仅可在音频渲染器未处于运行或释放状态时调用，否则将返回错误。
     * >
     * > - 将渲染目标更改为非[PLAYBACK]{@link audio.RenderTarget}的模式后：
     * > >   - 该音频渲染器的音频路由与中断策略将无法使用[AudioSessionManager]{@link @ohos.multimedia.audio:audio}相关接口。
     * > >   - 该音频渲染器的device type为[SYSTEM_PRIVATE]{@link @ohos.multimedia.audio:audio.DeviceType}。
     * > >   - 调用[Start]{@link @ohos.multimedia.audio:audio.AudioRenderer.start(callback: AsyncCallback<void>)}且audio
     * > scene不为[AUDIO_SCENE_VOICE_CHAT]{@link @ohos.multimedia.audio:audio.AudioScene}时，将返回错误码6800301。
     * > >   - 调用
     * > [getAudioTime]{@link @ohos.multimedia.audio:audio.AudioRenderer.getAudioTime(callback: AsyncCallback<long>)}或
     * > [getAudioTimeSync]{@link @ohos.multimedia.audio:audio.AudioRenderer.getAudioTimeSync}时，将返回错误码6800301。
     * > >   - 调用[getAudioTimestampInfo]{@link @ohos.multimedia.audio:audio.AudioRenderer.getAudioTimestampInfo}或
     * > [getAudioTimestampInfoSync]{@link @ohos.multimedia.audio:audio.AudioRenderer.getAudioTimestampInfoSync}时，将返回错误码6800301。
     * > >   - 调用[setDefaultOutputDevice]{@link @ohos.multimedia.audio:audio.AudioRenderer.setDefaultOutputDevice}时，将返回错
     * > 误码6800301。
     *
     * @permission ohos.permission.INJECT_PLAYBACK_TO_AUDIO_CAPTURE
     * @param { RenderTarget } target - 设置音频渲染目标。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 获取当前音频渲染器的渲染目标。
     *
     * > **说明：**
     * >
     * > - 若未更改过渲染目标，将返回默认值[PLAYBACK]{@link audio.RenderTarget}。
     * >
     * > - 若调用此接口前，已经调用过[SetTarget]{@link audio.AudioRenderer.setTarget(target: RenderTarget)}，请确保
     * > [SetTarget]{@link audio.AudioRenderer.setTarget(target: RenderTarget)}的Promise对象已成功解析，否则获取到的数值可能不准确。
     *
     * @returns { RenderTarget } 返回音频渲染器的渲染目标。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    getTarget(): RenderTarget;

    /**
     * 监听音频中断事件（当音频焦点发生变化时触发）。使用callback异步回调。
     * AudioRenderer对象在start事件时获取焦点，在pause、stop等事件时释放焦点，无需开发者主动申请。
     * 调用此方法后，如果AudioRenderer对象获取焦点失败或发生中断事件（如被其他音频打断等），会收到
     * [InterruptEvent]{@link @ohos.multimedia.audio:audio.InterruptEvent}。建议应用根据
     * InterruptEvent的信息进行进一步处理。更多信息请参阅音频焦点介绍文档。
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
     * 监听音频中断事件。此方法通过回调获取中断事件。当音频播放被中断时，会触发中断事件。
     *
     * @param { Callback<InterruptEvent> } callback - 回调函数，用于监听中断回调。
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
     *
     * @param { Callback<InterruptEvent> } [callback] - 回调函数，用于监听中断回调。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 23 static
     */
    offAudioInterrupt(callback?: Callback<InterruptEvent>): void;

    /**
     * 监听标记到达事件（当渲染的帧数到达frame参数的值时触发，仅调用一次）。使用callback异步回调。
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
     * 订阅达到标记的事件。当渲染的帧数达到 frame 参数的值时，
     * 会调用回调函数。
     *
     * @param { long } frame - 触发事件帧数，必须大于0。
     *     <br>取值应>0。
     * @param { Callback<long> } callback - 事件触发时调用的回调函数。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    onMarkReach(frame: long, callback: Callback<long>): void;

    /**
     * 取消监听标记到达事件。使用callback异步回调。
     *
     * @param { 'markReach' } type - 事件回调类型，支持的事件为'markReach'，当取消监听标记到达事件时，触发该事件。
     * @param { Callback<long> } callback - 回调函数，返回frame参数的值。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    off(type: 'markReach', callback?: Callback<long>): void;

    /**
     * 取消监听标记到达事件。使用callback异步回调。
     *
     * @param { Callback<long> } [callback] - 回调函数，返回frame参数的值。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    offMarkReach(callback?: Callback<long>): void;

    /**
     * 监听标记到达事件（每当渲染的帧数达到frame参数的值时触发，即按周期上报信息）。使用callback异步回调。
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
     * 监听标记到达事件（每当渲染的帧数达到frame参数的值时触发，即按周期上报信息）。使用callback异步回调。
     * 如果将frame设置为10，每渲染10帧数据均会上报信息（例如：第10帧、第20帧、第30帧......）。
     *
     * @param { long } frame - 触发事件的帧数。该值必须大于 0。
     *     <br>取值应>0。
     * @param { Callback<long> } callback - 回调函数，返回frame参数的值。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    onPeriodReach(frame: long, callback: Callback<long>): void;

    /**
     * 取消监听标记到达事件。使用callback异步回调。
     *
     * @param { 'periodReach' } type - 事件回调类型，支持的事件为'periodReach'，当取消监听标记到达事件时，触发该事件。
     * @param { Callback<long> } callback - 回调函数，返回frame参数的值。
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    off(type: 'periodReach', callback?: Callback<long>): void;

    /**
     * 取消监听标记到达事件。使用callback异步回调。
     *
     * @param { Callback<long> } [callback] - 事件触发时调用的回调函数。
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
     * 监听状态变化事件（当AudioRenderer的状态发生变化时触发）。使用callback异步回调。
     *
     * @param { Callback<AudioState> } callback - 回调函数，返回当前音频的状态。
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
     * 取消订阅音频状态变更事件回调。
     *
     * @param { Callback<AudioState> } [callback] - 回调函数，返回当前音频的状态。
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
     * 监听音频输出设备变化事件（当音频输出设备发生变化时触发）。使用callback异步回调。
     *
     * @param { Callback<AudioDeviceDescriptors> } callback - 回调函数，返回当前音频流的输出设备描述信息。
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
     * 监听音频流输出设备变化及原因事件（当音频输出设备发生变化时触发）。使用callback异步回调。
     *
     * @param { Callback<AudioStreamDeviceChangeInfo> } callback - 回调函数，返回当前音频流的输出设备描述信息及变化原因。
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
     * 取消监听音频输出设备变化事件。使用callback异步回调。
     *
     * @param { Callback<AudioDeviceDescriptors> } [callback] - 回调函数，返回当前音频流的输出设备描述信息。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offOutputDeviceChange(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * 取消监听音频流输出设备变化及原因事件。使用callback异步回调。
     *
     * @param { 'outputDeviceChangeWithInfo' } type - 事件回调类型，支持的事件为'outputDeviceChangeWithInfo'，当取消监听音频流输出设备变化及原因事件时，触发该事件。
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
     * 取消监听音频流输出设备变化及原因事件。使用callback异步回调。
     *
     * @param { Callback<AudioStreamDeviceChangeInfo> } [callback] - 回调函数，返回当前音频流的输出设备描述信息及变化原因。
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
     * @param { AudioRendererWriteDataCallback } callback - 回调函数，入参代表应用接收待写入的数据缓冲区。<br>API version 11 不支持返回回调结果，从 API version 1
     *     2 开始支持返回回调结果[AudioDataCallbackResult]{@link @ohos.multimedia.audio:audio.AudioDataCallbackResult}。
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
     * 订阅音频数据回调。当音频缓冲区可用以写入更多数据时，将触发该事件。
     *
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
     * @param { AudioRendererWriteDataCallback } callback - 回调函数，入参代表应用接收待写入的数据缓冲区。<br>API version 11 不支持返回回调结果，从 API version 1
     *     2 开始支持返回回调结果[AudioDataCallbackResult]{@link @ohos.multimedia.audio:audio.AudioDataCallbackResult}。
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
     * 取消监听音频数据写入回调事件。使用callback异步回调。
     *
     * @param { AudioRendererWriteDataCallback } [callback] - 回调函数，入参代表应用接收待写入的数据缓冲区。
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
     * > 当音频渲染器在运行状态时调用此接口后，必须重新调用接口
     * > [start]{@link @ohos.multimedia.audio:audio.AudioRenderer.start(callback: AsyncCallback<void>)}使其生效。
     *
     * @param { AudioSessionStrategy } strategy - 音频会话策略。
     * @param { int } behavior - 用于设置音频会话行为。<br>该参数可以是单个标志，也可以是多个标志的按位OR组合。<br>当前支持的音频会话行为详见
     *     [AudioSessionBehaviorFlags]{@link @ohos.multimedia.audio:audio.AudioSessionBehaviorFlags}中定义的标志。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: int): void;

    /**
     * Sets noise reduction mode for current audio renderer.
     * The supported mode should be obtained by {@link #getSupportedNoiseReductionModes}.
     * The actual effect may vary from different audio devices, and will be invalid when there are multiple direct
     * streams running simultaneously.
     * The mode can only be changed in created and stopped state.
     *
     * @param { NoiseReductionMode } noiseReductionMode - The noise reduction mode to set.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Illegal state, audio renderer is in running or released state.
     * @throws { BusinessError } 6800104 - The setted mode is not supported.
     * @throws { BusinessError } 6800301 - Audio server process died.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setNoiseReductionMode(noiseReductionMode: NoiseReductionMode): void;

    /**
     * Gets the noise reduction mode for current audio renderer.
     * The mode will only consider the default and setted status, audio output device and stream concurrency will
     * not be considered.
     *
     * @returns { NoiseReductionMode } The noise reduction mode for current audio renderer,
     *     the default value is {@link NoiseReductionMode#FIDELITY}.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getNoiseReductionMode(): NoiseReductionMode;

    /**
     * Gets all the supported noise reduction modes for current device platform.
     * Currently the noise reduction effect is only supported when using
     * {@link StreamUsage#STREAM_USAGE_VOICE_MESSAGE}, other supported usage may be extened later.
     * The supported modes will only consider the audio format and device platform,
     * audio output device and stream concurrency will not be considered.
     *
     * @returns { Array<NoiseReductionMode> } The supported noise reduction mode array, at least
     *     {@link NoiseReductionMode#FIDELITY} is supported.
     * @throws { BusinessError } 6800301 - Audio server process died.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getSupportedNoiseReductionModes(): Array<NoiseReductionMode>;
  }

  /**
   * 枚举，音源类型。
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
     * SystemCapability.Multimedia.Audio.Core
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_INVALID = -1,
    /**
     * Mic音频源。
     *
     * SystemCapability.Multimedia.Audio.Core
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
     * SystemCapability.Multimedia.Audio.Core
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
     * SystemCapability.Multimedia.Audio.PlaybackCapture
     *
     * 从API version 10开始支持，从API version 12开始废弃，建议使用[录屏接口AVScreenCapture](../apis-media-kit/capi-avscreencapture.md)替代。
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 10 dynamiconly
     * @deprecated since 12
     * @useinstead OH_AVScreenCapture in native interface.
     */
    SOURCE_TYPE_PLAYBACK_CAPTURE = 2,
    /**
     * 语音唤醒音频流录制音频源。
     *
     * ohos.permission.MANAGE_INTELLIGENT_VOICE
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_WAKEUP = 3,

    /**
     * 通话录音的音频源。
     *
     * ohos.permission.RECORD_VOICE_CALL
     *
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
     * SystemCapability.Multimedia.Audio.Core
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
     * SystemCapability.Multimedia.Audio.Core
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_VOICE_MESSAGE = 10,

    /**
     * 语音转写音频源。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_VOICE_TRANSCRIPTION = 12,

    /**
     * 录像的音频源。
     *
     * SystemCapability.Multimedia.Audio.Core
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 13 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_CAMCORDER = 13,

    /**
     * 麦克风纯净录音的音频源（系统不做任何算法处理）。
     *
     * SystemCapability.Multimedia.Audio.Core
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 14 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_UNPROCESSED = 14,

    /**
     * 直播场景的音频源，在支持的设备上会提供系统回声消除能力。
     *
     * SystemCapability.Multimedia.Audio.Core
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_LIVE = 17,

    /**
     * 未处理的语音助手音频源。
     *
     * 此接口仅可在Stage模型下使用。
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
   * 表示调用[requestPlaybackCaptureStart]{@link @ohos.multimedia.audio:audio.AudioCapturer.requestPlaybackCaptureStart}后异步返
   * 回的内录启动状态的枚举。
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
     * SystemCapability.Multimedia.Audio.Capturer
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
     * SystemCapability.Multimedia.Audio.Capturer
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
     * SystemCapability.Multimedia.Audio.PlaybackCapture
     *
     * 从API version 10开始支持，从API version 12开始废弃，建议使用[录屏接口AVScreenCapture](../apis-media-kit/capi-avscreencapture.md)替代。
     *
     * @type { ?AudioPlaybackCaptureConfig }
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 10 dynamiconly
     * @deprecated since 12
     * @useinstead OH_AVScreenCapture in native interface.
     */
    playbackCaptureConfig?: AudioPlaybackCaptureConfig;

    /**
     * 当前音频采集器的偏好输入设备。
     *
     * 此设备必须为输入设备，并且capturerInfo的source type必须为[SOURCE_TYPE_VOICE_RECOGNITION](arkts-apis-audio-e.md#sourcetype8)或
     * [SOURCE_TYPE_VOICE_TRANSCRIPTION](#sourcetype8)。否则，此参数将会被忽略。
     *
     * 1. 当调用者未指定偏好设备时，系统会自动选择一个设备。
     * 2. 当调用者指定了偏好设备创建语音识别或者语音转写流时：
     *
     * （1）设备在线，当前audiocapturer会使用偏好设备；如果运行过程中，偏好设备下线，系统会自动选择一个录音设备。
     *
     * （2）设备不在线，当前audiocapturer会自动选择一个录音设备；如果运行过程中，偏好设备上线，系统会自动切换到偏好设备上。
     *
     * 3. 调用者可以通过[getCurrentAudioCapturerChangeInfo](arkts-apis-audio-AudioCapturer.md#getcurrentaudiocapturerchangeinfo11)查询当前实际使用的录音设备。
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
     * 26.0.0
     *
     * 此接口仅可在Stage模型下使用。
     *
     * SystemCapability.Multimedia.Audio.PlaybackCapture
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    playbackCaptureMode?: AudioPlaybackCaptureMode;
  }

  /**
   * 音频采集器选项信息，可采集未经任何处理的麦克风输入（mic-in）音频数据。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface AudioCapturerMicInConfig {
    /**
     * 麦克风音频流信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    micInStreamInfo: AudioStreamInfo;
    /**
     * 回声消除音频流信息。
     *
     * 若未设置此属性，采集器将仅录制麦克风输入的音频流。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ecStreamInfo?: AudioStreamInfo;
    /**
     * 音频采集器信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    capturerInfo: AudioCapturerInfo;
    /**
     * 处理后的音频流信息。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    processedStreamInfo?: AudioStreamInfo;
  }

  /**
   * 待录制的播放音频流的筛选信息。
   *
   * > **说明：**
   * > > 从API version 10开始支持，从API version 12开始废弃，建议使用录屏接口AVScreenCapture替代。
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
   * > **说明：**
   * > > 从API version 10开始支持，从API version 12开始废弃，建议使用录屏接口AVScreenCapture替代。
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
   * 音频采集器数据，包含处理后的音频数据和未经任何处理的麦克风输入（mic-in）音频数据。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface AudioCapturerMicInData {
    /**
     * 处理后的音频数据缓冲区。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    data: ArrayBuffer;

    /**
     * 麦克风输入音频数据缓冲区。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    micInData: ArrayBuffer;

    /**
     * 回声参考音频数据缓冲区。
     *
     * 如果采集器配置未设置ecStreamInfo，则该字段为空，详情请参考[AudioCapturerMicInConfig](#audiocapturermicinconfig23)。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ecData?: ArrayBuffer;
  }

  /**
   * 提供音频采集的相关接口。在使用AudioCapturer的接口之前，需先通过
   * [createAudioCapturer]{@link @ohos.multimedia.audio:audio.createAudioCapturer(options: AudioCapturerOptions, callback: AsyncCallback<AudioCapturer>)}
   * 获取AudioCapturer实例。
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
     * @param { AsyncCallback<void> } callback - 回调函数。当启动音频采集器成功，err为undefined，否则为错误对象。异常将返回error对象：<br>错误码6800301：表示包含状态检查异常、焦
     *     点抢占失败、系统处理异常（具体错误查看系统日志）。
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
     *
     *     错误码6800301：表示包含状态检查异常、焦点抢占失败、系统处理异常（具体错误查看系统日志）。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * 请求启动内录流接口，内录流只能通过该接口触发启动。使用callback异步回调。
     * 内录是指以系统内部音频数据作为音频源的输入类型，简称为内录，对应的流称为内录流。常用于录制目标设备应用发送到系统以供播放的音频。
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
     * > **说明：**
     * > > 从API version 8开始支持，从API version 11开始废弃，建议使用[on('readData')]{@link audio.AudioCapturer.on_readData}替代。
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
     * > **说明：**
     * > > 从API version 8开始支持，从API version 11开始废弃，建议使用[on('readData')]{@link audio.AudioCapturer.on_readData}替代。
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
     *
     *     单位为纳秒。
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
     * @param { AsyncCallback<long> } callback - 回调函数。当获取采集器合理的最小缓冲区大小成功，err为undefined，data为获取到的采集器合理的最小缓冲区大小；否则为错误对象。<br>单位为字节
     *     。
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
     *
     *     单位为字节。
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
     * 设置当前录制音频流是否启用静音打断模式。使用Promise异步回调。
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
     * > [AudioSessionManager.setCapturerMuteHint]{@link @ohos.multimedia.audio:audio.AudioSessionManager.setCapturerMuteHint}
     * > 时，流级[setMuteHint]{@link audio.AudioCapturer.setMuteHint}优先级更高，数值以流级设置值为准。
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
     * 监听标记到达事件（当采集的帧数达到frame参数的值时触发，仅调用一次）。使用callback异步回调。
     * 如果将frame设置为100，当采集帧数到达第100帧时，系统将上报信息。
     *
     * @param { long } frame - 触发事件的帧数。该值必须大于0。
     *     <br>取值应>0。
     * @param { Callback<long> } callback - 回调函数，返回frame参数的值。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onMarkReach(frame: long, callback: Callback<long>): void;

    /**
     * 取消监听标记到达事件。使用callback异步回调。
     *
     * @param { 'markReach' } type - 事件回调类型，支持的事件为'markReach'，当取消监听标记到达事件时，触发该事件。
     * @param { Callback<long> } callback - 回调函数，返回frame参数的值。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    off(type: 'markReach', callback?: Callback<long>): void;

    /**
     * U取消监听标记到达事件。使用callback异步回调。
     *
     * @param { Callback<long> } [callback] - 回调函数，返回frame参数的值。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offMarkReach(callback?: Callback<long>): void;

    /**
     * 监听标记到达事件（当采集的帧数达到frame参数的值时触发，即按周期上报信息）。使用callback异步回调。
     * 如果将frame设置为10，每采集10帧数据均会上报信息（例如：第10帧、第20帧、第30帧......）。
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
     * 监听标记到达事件（当采集的帧数达到frame参数的值时触发，即按周期上报信息）。使用callback异步回调。
     * 如果将frame设置为10，每采集10帧数据均会上报信息（例如：第10帧、第20帧、第30帧......）。
     *
     * @param { long } frame - 触发事件的帧数。该值必须大于0。
     *     <br>取值应>0。
     * @param { Callback<long> } callback - 回调函数，返回frame参数的值。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onPeriodReach(frame: long, callback: Callback<long>): void;

    /**
     * 取消监听标记到达事件。使用callback异步回调。
     *
     * @param { 'periodReach' } type - 事件回调类型，支持的事件为'periodReach'，当取消监听标记到达事件时，触发该事件。
     * @param { Callback<long> } callback - 回调函数，返回frame参数的值。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    off(type: 'periodReach', callback?: Callback<long>): void;

    /**
     * 取消监听标记到达事件。使用callback异步回调。
     *
     * @param { Callback<long> } [callback] - 回调函数，返回frame参数的值。
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
     * 监听状态变化事件（当AudioCapturer状态发生变化时触发）。使用callback异步回调。
     *
     * @param { Callback<AudioState> } callback - 回调函数，返回当前音频的状态。
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
     * 取消监听状态变化事件。使用callback异步回调。
     *
     * @param { Callback<AudioState> } [callback] - 回调函数，返回当前音频的状态。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offStateChange(callback?: Callback<AudioState>): void;

    /**
     * 监听音频中断事件（当音频焦点发生变化时触发）。使用callback异步回调。
     * AudioCapturer对象在start事件时获取焦点，在pause、stop等事件时释放焦点，无需开发者主动申请。
     * 调用此方法后，如果AudioCapturer对象获取焦点失败或发生中断事件（如被其他音频打断等），会收到
     * [InterruptEvent]{@link @ohos.multimedia.audio:audio.InterruptEvent}。建议应用根据InterruptEvent的信息进行进一步处理。更多信息请参阅音频焦点介绍文档。
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
     * 监听音频中断事件。此方法通过回调获取中断事件。当音频录制被中断时，会触发中断事件。
     *
     * @param { Callback<InterruptEvent> } callback - 回调函数，用于监听中断回调。
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
     *
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
     * 订阅输入设备变更事件回调。
     * 当该流的输入设备发生变更时，会触发此事件。
     *
     * @param { Callback<AudioDeviceDescriptors> } callback - 回调函数，用于监听设备变更事件。
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
     * 取消监听音频输入设备更改事件。使用callback异步回调。
     *
     * @param { Callback<AudioDeviceDescriptors> } [callback] - 回调函数，返回音频输入设备信息。
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
     * 订阅音频捕获器信息变更事件回调。
     * 当该流的输入设备发生变化时，会触发此事件。
     *
     * @param { Callback<AudioCapturerChangeInfo> } callback - 回调函数，录音流配置或状态变化时返回监听的录音流当前配置和状态信息。
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
     * 取消监听录音流配置变化事件。使用callback异步回调。
     *
     * @param { Callback<AudioCapturerChangeInfo> } [callback] - 回调函数，返回取消监听的录音流配置或状态变化。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offAudioCapturerChange(callback?: Callback<AudioCapturerChangeInfo>): void;

    /**
     * 监听音频数据读取回调事件（当需要读取音频流数据时触发）。使用callback异步回调。
     * 回调函数仅用来读取音频数据，请勿在回调函数中调用AudioCapturer相关接口。
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
     * 监听音频数据读取回调事件（当需要读取音频流数据时触发）。使用callback异步回调。
     * 回调函数仅用来读取音频数据，请勿在回调函数中调用AudioCapturer相关接口。
     * 为了消除麦克风硬件设计带来的上电杂音，通常会对录音启动后的前100ms数据进行静音
     *
     * @param { Callback<ArrayBuffer> } callback - 回调函数，返回读到的数据缓冲区。
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
     * 取消监听音频数据读取回调事件。使用callback异步回调。
     *
     * @param { Callback<ArrayBuffer> } [callback] - 回调函数，返回读到的数据缓冲区。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offReadData(callback?: Callback<ArrayBuffer>): void;

    /**
     * 订阅Mic-In音频数据读取回调。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > - 此回调的优先级高于`onReadData`回调。如果同时订阅两者，仅会触发此回调。
     * >
     * > - 当有可供读取的音频缓冲区、可继续读取更多音频数据时，会触发此回调。
     *
     * @param { Callback<AudioCapturerMicInData> } callback - 回调函数，返回读取到的音频数据缓冲区。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800103 - Operation not permitted at running state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    onReadMicInData(callback: Callback<AudioCapturerMicInData>): void;

    /**
     * 取消监听Mic-In音频数据读取回调。
     *
     * @param { Callback<AudioCapturerMicInData> } [callback] - 需要取消监听的回调函数，默认值为空。不传入时，表示取消该事件的所有监听。
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
     * 将此捕获器的默认输入设备设置为 DEVICE_TYPE_ACCESSORY。
     * 其他捕获器的设备不会受到此方法的影响。
     * 此方法只能在捕获流开始之前使用。此外，
     * 如果音频配件未连接，此方法将报告失败。调用此函数后，该捕获器的输入设备将不再受其他接口的影响。
     *
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
     * > 当音频采集器在运行状态时调用此接口后，必须重新调用接口
     * > [start]{@link @ohos.multimedia.audio:audio.AudioCapturer.start(callback: AsyncCallback<void>)}使其生效。
     *
     * @param { AudioSessionStrategy } strategy - 音频会话策略。
     * @param { int } behavior - 用于设置音频会话行为。<br>该参数可以是单个标志，也可以是多个标志的按位OR组合。<br>当前支持的音频会话行为详见
     *     [AudioSessionBehaviorFlags]{@link @ohos.multimedia.audio:audio.AudioSessionBehaviorFlags}中定义的标志。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: int): void;

    /**
     * 设置当前录音流的降噪模式。建议先调用[getSupportedNoiseReductionModes]{@link audio.AudioCapturer.getSupportedNoiseReductionModes}获取当
     * 前录音流支持的降噪模式后，再通过本接口进行设置。
     *
     * > **说明：**
     * >
     * > - 当前仅支持使用[SourceType.SOURCE_TYPE_VOICE_MESSAGE]{@link @ohos.multimedia.audio:audio.SourceType}创建的录音流进行降噪模式设置，其他
     * > 录音流默认仅支持[NoiseReductionMode.FIDELITY]{@link @ohos.multimedia.audio:audio.NoiseReductionMode}。
     * >
     * > - 降噪效果受设备平台、音频设备和录音并发情况影响。存在多个录音流同时运行时，设置的降噪模式可能不生效。
     * >
     * > - 该接口仅可在录音流创建后未开始录音，或停止录音后调用；录音流处于运行态或已释放时调用将抛出异常。
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
     * 获取当前录音流的降噪模式。返回结果仅反映当前录音流的降噪模式。默认值为
     * [NoiseReductionMode.FIDELITY]{@link @ohos.multimedia.audio:audio.NoiseReductionMode}。
     *
     * @returns { NoiseReductionMode } 当前录音流的降噪模式。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getNoiseReductionMode(): NoiseReductionMode;

    /**
     * 获取当前设备支持的录音降噪模式。
     *
     * > **说明：**
     * >
     * > - 当前仅使用[SourceType.SOURCE_TYPE_VOICE_MESSAGE]{@link @ohos.multimedia.audio:audio.SourceType}创建的录音流会根据设备平台查询支持的降
     * > 噪模式，其他录音流默认仅返回[NoiseReductionMode.FIDELITY]{@link @ohos.multimedia.audio:audio.NoiseReductionMode}。
     * >
     * > - 返回结果仅考虑音频格式和设备平台，不考虑当前输入设备和录音并发情况。
     *
     * @returns { Array<NoiseReductionMode> } 支持的录音降噪模式数组，默认支持
     *     [NoiseReductionMode.FIDELITY]{@link @ohos.multimedia.audio:audio.NoiseReductionMode}。
     * @throws { BusinessError } 6800301 - Audio server process died.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getSupportedNoiseReductionModes(): Array<NoiseReductionMode>;
  }

  /**
   * 枚举，自动语音识别（ASR）的噪音抑制模式。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AsrNoiseSuppressionMode {
    /**
     * 旁路噪音抑制。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BYPASS = 0,
    /**
     * 标准噪音抑制。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    STANDARD = 1,
    /**
     * 近场噪音抑制。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NEAR_FIELD = 2,
    /**
     * 远场噪音抑制。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    FAR_FIELD = 3
  }

  /**
   * 枚举，自动语音识别（ASR）的声学回声消除（AEC）模式。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AsrAecMode {
    /**
     * 不使用AEC。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BYPASS = 0,
    /**
     * 使用标准AEC。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    STANDARD = 1
  }

  /**
   * 枚举，自动语音识别（ASR）的音频通路模式。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AsrVoiceControlMode {
    /**
     * 仅媒体音频流生效。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_2_VOICE_TX = 0,
    /**
     * 媒体音频流和MIC音频流均生效。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_MIX_2_VOICE_TX = 1,
    /**
     * 仅媒体音频流生效，将媒体流上报给通话录音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_2_VOICE_TX_EX = 2,
    /**
     * 媒体音频流和MIC音频流均生效，将媒体流上报给通话录音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_MIX_2_VOICE_TX_EX = 3
  }

  /**
   * 枚举，自动语音识别（ASR）的静音模式。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AsrVoiceMuteMode {
    /**
     * 本地输出静音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    OUTPUT_MUTE = 0,
    /**
     * 本地的MIC输入静音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    INPUT_MUTE = 1,
    /**
     * 应用下发的媒体音频本地静音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    TTS_MUTE  = 2,
    /**
     * 通话语音流静音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    CALL_MUTE = 3,
    /**
     * 本地输出静音，媒体音频流送给通话录音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    OUTPUT_MUTE_EX = 4
  }

  /**
   * 枚举，自动语音识别（ASR）的耳语检测模式。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AsrWhisperDetectionMode {
    /**
     * 不启用检测模型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BYPASS = 0,
    /**
     * 耳语检测模型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    STANDARD = 1
  }

  /**
   * 自动语音识别（ASR）处理控制器。
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface AsrProcessingController {
    /**
     * 设置自动语音识别（ASR）的声学回声消除（AEC）模式，同步返回结果。
     *
     * @param { AsrAecMode } mode - AEC模式。
     * @returns { boolean } 返回设置AEC模式结果，true为设置成功，false为设置失败。
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
     * 获取自动语音识别（ASR）的声学回声消除（AEC）模式，同步返回结果。
     *
     * @returns { AsrAecMode } AEC模式。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getAsrAecMode(): AsrAecMode;

    /**
     * 设置自动语音识别（ASR）的噪音抑制模式，同步返回结果。
     *
     * @param { AsrNoiseSuppressionMode } mode - ASR噪音抑制模式。
     * @returns { boolean } 返回设置ASR噪音抑制模式结果，true为设置成功，false为设置失败。
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
     * 获取自动语音识别（ASR）的噪音抑制模式，同步返回结果。
     *
     * @returns { AsrNoiseSuppressionMode } ASR噪音抑制模式。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getAsrNoiseSuppressionMode(): AsrNoiseSuppressionMode;

    /**
     * 查询耳语状态。
     *
     * @returns { boolean } 返回耳语状态，true为开启，false为关闭。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800104 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isWhispering(): boolean;

    /**
     * 设置在系统通话中上报mode及通话录音的上行通路的自动语音识别（ASR）音频通路选择。
     *
     * @param { AsrVoiceControlMode } mode - ASR音频通路模式。
     * @param { boolean } enable - 表示系统通话中上报mode及通话录音的上行通路的ASR音频通路选择开关状态。true表示打开，false表示关闭。
     * @returns { boolean } 返回设置在系统通话中上报mode及通话录音的上行通路的ASR音频通路选择的结果。true为设置成功，false为设置失败。
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
     * 在系统通话中，对自动语音识别（ASR）的音频通路进行静音控制。
     *
     * @param { AsrVoiceMuteMode } mode - ASR静音控制模式。
     * @param { boolean } enable - 表示在系统通话中设置ASR音频通路静音状态。true表示静音，false表示非静音。
     * @returns { boolean } 返回在系统通话中，对ASR音频通路进行静音控制的结果。true为设置成功，false为设置失败。
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
     * 设置自动语音识别（ASR）的耳语检测模式。
     *
     * @param { AsrWhisperDetectionMode } mode - ASR耳语检测模式。
     * @returns { boolean } 返回设置ASR耳语检测模式结果，true为设置成功，false为设置失败。
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
     * 获取自动语音识别（ASR）的耳语检测模式，同步返回结果。
     *
     * @returns { AsrWhisperDetectionMode } ASR耳语检测模式。
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
   * 获取自动语音识别（ASR）处理控制器。
   *
   * @param { AudioCapturer } audioCapturer - 音频采集器对象。
   * @returns { AsrProcessingController } ASR处理控制器对象。
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
   * 在一个音频捕获器上创建ASR处理控制器。
   *
   * @param { AudioCapturer } audioCapturer - 将要控制其ASR处理的音频采集器。该采集器的源类型必须为{@link SourceType#SOURCE_TYPE_VOICE_RECOGNITION}。
   * @returns { AsrProcessingController | null } ASR处理控制器，若发生错误则为空。
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
   * 枚举，播放器的音调类型。
   *
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum ToneType {
    /**
     * 键0的DTMF音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_0 = 0,
    /**
     * 键1的DTMF音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_1 = 1,
    /**
     * 键2的DTMF音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_2 = 2,
    /**
     * 键3的DTMF音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_3 = 3,
    /**
     * 键4的DTMF音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_4 = 4,
    /**
     * 键5的DTMF音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_5 = 5,
    /**
     * 键6的DTMF音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_6 = 6,
    /**
     * 键7的DTMF音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_7 = 7,
    /**
     * 键8的DTMF音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_8 = 8,
    /**
     * 键9的DTMF音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_9 = 9,
    /**
     * 键*的DTMF音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_S = 10,
    /**
     * 键#的DTMF音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_P = 11,
    /**
     * 键A的DTMF音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_A = 12,
    /**
     * 键B的DTMF音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_B = 13,
    /**
     * 键C的DTMF音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_C = 14,
    /**
     * 键D的DTMF音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_D = 15,
    /**
     * 呼叫监管音调，拨号音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_DIAL = 100,
    /**
     * 呼叫监管音调，忙。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_BUSY = 101,
    /**
     * 呼叫监管音调，拨号音。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_CONGESTION = 102,
    /**
     * 呼叫监管音调，无线电 ACK。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_RADIO_ACK = 103,
    /**
     * 呼叫监管音调，无线电不可用。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_RADIO_NOT_AVAILABLE = 104,
    /**
     * 呼叫监管音调，呼叫等待。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_CALL_WAITING = 106,
    /**
     * 呼叫监管音调，铃声。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_RINGTONE = 107,
    /**
     * 呼叫保持音调。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_CALL_HOLDING = 108,
    /**
     * 专有声调，一般蜂鸣声。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_PROPRIETARY_BEEP = 200,
    /**
     * 专有声调，ACK。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_PROPRIETARY_ACK = 201,
    /**
     * 专有声调，PROMPT。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_PROPRIETARY_PROMPT = 203,
    /**
     * 专有声调，双重蜂鸣声。
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_PROPRIETARY_DOUBLE_BEEP = 204
  }

  /**
   * 提供播放和管理DTMF（Dual Tone Multi Frequency，双音多频）音调的方法，包括各种系统监听音调、专有音调，如拨号音、通话回铃音等。
   * 在调用TonePlayer的接口前，需要先通过
   * [createTonePlayer]{@link audio.createTonePlayer(options: AudioRendererInfo, callback: AsyncCallback<TonePlayer>)}创建
   * 实例。
   *
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface TonePlayer {
    /**
     * 加载DTMF音调配置。使用callback异步回调。
     *
     * @param { ToneType } type - 配置的音调类型。
     * @param { AsyncCallback<void> } callback - 回调函数。当加载DTMF音调配置成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    load(type: ToneType, callback: AsyncCallback<void>): void;
    /**
     * 加载DTMF音调配置。使用Promise异步回调。
     *
     * @param { ToneType } type - 配置的音调类型。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    load(type: ToneType): Promise<void>;

    /**
     * 启动DTMF音调播放。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当启动DTMF音调播放成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * 启动DTMF音调播放。使用Promise异步回调。
     *
     * @returns { Promise<void> }Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * 停止当前正在播放的音调。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当停止当前正在播放的音调成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * 停止当前正在播放的音调。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * 释放与此TonePlayer对象关联的资源。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当释放与此TonePlayer对象关联的资源成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * 释放与此TonePlayer对象关联的资源。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
  }

  /**
   * 待查询ContentType和StreamUsage组合场景下的音效模式数组类型，[AudioEffectMode]{@link @ohos.multimedia.audio:audio.AudioEffectMode}数组，只读
   * 。
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
   * 空间化设备状态。
   *
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface AudioSpatialDeviceState {
    /**
     * 空间化设备地址。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    address: string;

    /**
     * 空间化设备是否支持空间音频渲染。true表示支持，false表示不支持。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isSpatializationSupported: boolean;

    /**
     * 空间化设备是否支持头动跟踪。true表示支持，false表示不支持。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isHeadTrackingSupported: boolean;

    /**
     * 空间化设备类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    spatialDeviceType: AudioSpatialDeviceType;
  }

  /**
   * 枚举，空间化设备类型。
   *
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum AudioSpatialDeviceType {
    /**
     * 无空间化设备类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_NONE = 0,
    /**
     * 入耳式耳机。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_IN_EAR_HEADPHONE = 1,
    /**
     * 半入耳式耳机。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_HALF_IN_EAR_HEADPHONE = 2,
    /**
     * 头戴式耳机。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_OVER_EAR_HEADPHONE = 3,
    /**
     * 眼镜式耳机。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_GLASSES = 4,
    /**
     * 其他空间化设备类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_OTHERS = 5
  }

  /**
   * 枚举，空间音频渲染场景类型。
   *
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioSpatializationSceneType {
    /**
     * 空间音频默认渲染场景。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * 空间音频音乐渲染场景。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MUSIC = 1,
    /**
     * 空间音频电影渲染场景。
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MOVIE = 2,
    /**
     * 空间音频有声读物渲染场景。
     *
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
   * 枚举，音效分类。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  enum EffectFlag {
    /**
     * 下行音效类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    RENDER_EFFECT_FLAG = 0,

    /**
     * 上行音效类型。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    CAPTURE_EFFECT_FLAG = 1
  }

  /**
   * 音效属性。
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface AudioEffectProperty {
    /**
     * 音效名称。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 音效分类。
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    category: string;

    /**
     * 音效分类。
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
   * 在使用AudioLoopback的接口之前，需先通过
   * [audio.createAudioLoopback]{@link @ohos.multimedia.audio:audio.createAudioLoopback(mode: AudioLoopbackMode)}获取
   * AudioLoopback实例。
   * 当启用音频返听时，系统会创建低时延渲染器与低时延采集器，实现低时延耳返功能。采集的音频直接通过内部路由返回到渲染器。对于渲染器，其音频焦点策略与
   * [STREAM_USAGE_MUSIC]{@link @ohos.multimedia.audio:audio.StreamUsage}相匹配。对于采集器，其音频焦点策略与
   * [SOURCE_TYPE_MIC]{@link @ohos.multimedia.audio:audio.SourceType}相匹配。
   * 输入/输出设备由系统自动选择。如果当前输入/输出不支持低时延，则音频返听无法启用。在运行过程中，如果音频焦点被另一个音频流抢占，输入/输出设备切换到不支持低时延的设备，系统会自动禁用音频返听。
   *
   * > **说明：**
   *
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
     * 监听返听状态变化事件（当AudioLoopback的状态发生变化时触发）。使用callback异步回调。
     *
     * @param { Callback<AudioLoopbackStatus> } callback 回调函数，返回当前音频返听的状态。
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onStatusChange(callback: Callback<AudioLoopbackStatus>): void;

    /**
     * 取消监听音频返听状态变化事件。
     *
     * @param { 'statusChange' } type - 事件回调类型，支持的事件为'statusChange'。
     * @param { Callback<AudioLoopbackStatus> } [callback] - 回调函数，返回当前音频返听的状态。
     * @throws  { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     */
    off(type: 'statusChange', callback?: Callback<AudioLoopbackStatus>): void;

    /**
     * 取消监听音频返听状态变化事件。
     *
     * @param { Callback<AudioLoopbackStatus> } [callback] - 回调函数，返回当前音频返听的状态。
     * @throws  { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offStatusChange(callback?: Callback<AudioLoopbackStatus>): void;

    /**
     * 获取当前设备连接状态下支持返听的音频输入输出设备组合。
     *
     * @returns { Array<AudioDevicePair> } 返回支持返听的音频输入输出设备数组。
     *
     *     如果没有可用的输入输出设备组合，则返回空数组。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getSupportedDevicePairs(): Array<AudioDevicePair>;

    /**
     * 获取当前设备连接状态下系统推荐的返听音频输入输出设备组合。
     *
     * @returns { AudioDevicePair | null } 返回系统推荐的音频输入输出设备组合。
     *
     *     如果没有可用的输入输出设备组合，则返回null。
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getPreferredDevicePair(): AudioDevicePair | null;

    /**
     * 启用或禁用音频返听器。使用Promise异步回调。
     *
     * @permission ohos.permission.MICROPHONE
     * @param { boolean } enable - 表示是否启用音频返听器。true表示启用，false表示禁用。
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
     *
     *     在没有被修改的情况下，默认的混响模式是THEATER。
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
     *
     *     在没有被修改的情况下，默认的均衡器类型是FULL。
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
     * 声卡厂商。
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
   * 音频设备增强管理功能，用于应用级音频设备选择及流维度音频设备选择。
   * 在使用AudioDeviceEnhanceManager的接口之前，需要先通过getDeviceEnhanceManager获取AudioDeviceEnhanceManager实例。
   *
   * > **说明：**
   * >
   * > 应用在使用前应先调用isEnhancedRoutingSupported，确认系统是否支持音频设备增强管理功能。
   *
   * @syscap SystemCapability.Multimedia.Audio.DeviceEnhance
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AudioDeviceEnhanceManager {
    /**
     * 获取声卡信息。此方法使用 Promise 返回查询结果。
     *
     * @returns { Promise<SoundCardInfo> } Promise 过去用于返回声卡信息。
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
     * 查询系统是否支持当前管理器提供的增强路由能力。
     *
     * > **说明：**
     * >
     * > - 增强路由能力包括为应用或音频流选择输入输出设备。
     * >
     * > - 应用在调用增强路由相关接口前，先调用本接口确认系统是否支持。即使是同一类型设备，不同机型也会因硬件限制而支持情况不同。
     * >
     * > - 当系统不支持增强路由能力时，调用相关接口不会生效，并会为应用或音频流选择默认的输入输出设备。
     *
     * @returns { boolean } 表示系统是否支持增强路由能力。true表示支持，false表示不支持。
     * @syscap SystemCapability.Multimedia.Audio.DeviceEnhance
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isEnhancedRoutingSupported(): boolean;

    /**
     * 为应用选择输出设备。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - 此设置对应用下创建的所有播放流生效，除非特定流已经通过selectOutputDeviceForAudioRenderer
     * > 指定了专属输出设备。
     * >
     * > - 当应用实现输出设备选择功能时，可以通过
     * > [AudioRoutingManager.getAvailableDevices]{@link @ohos.multimedia.audio:audio.AudioRoutingManager.getAvailableDevices}
     * > 获取可用输出设备列表，并通过
     * > [AudioRoutingManager.getPreferOutputDeviceForRendererInfo]{@link @ohos.multimedia.audio:audio.AudioRoutingManager.getPreferOutputDeviceForRendererInfo(rendererInfo: AudioRendererInfo, callback: AsyncCallback<AudioDeviceDescriptors>)}
     * > 获取当前首选输出设备。
     * >
     * > - 当应用退出或所选设备离线时，此选择将失效。应用重启或设备重新上线后，需要重新设置才会生效。
     * >
     * > - 当系统不支持此功能时，会为应用选择默认输出设备。
     *
     * @param { AudioDeviceDescriptor } outputDevice - 输出设备描述，需从
     *     [AudioRoutingManager.getAvailableDevices]{@link @ohos.multimedia.audio:audio.AudioRoutingManager.getAvailableDevices}
     *     返回的设备数组中获取。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 6800101 - Parameter verification failed, for example,
     *     the selected device does not exist.
     * @throws { BusinessError } 6800301 - Audio service error occurs, such as the service died.
     * @syscap SystemCapability.Multimedia.Audio.DeviceEnhance
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    selectOutputDevice(outputDevice: AudioDeviceDescriptor): Promise<void>;

    /**
     * 为应用选择输入设备。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - 此设置对应用下创建的所有录音流生效，除非特定流已经通过selectInputDeviceForAudioCapturer
     * > 指定了专属输入设备。
     * >
     * > - 当应用实现输入设备选择功能时，可以通过
     * > [AudioRoutingManager.getAvailableDevices]{@link @ohos.multimedia.audio:audio.AudioRoutingManager.getAvailableDevices}
     * > 获取可用输入设备列表，并通过
     * > [AudioRoutingManager.getPreferredInputDeviceForCapturerInfo]{@link @ohos.multimedia.audio:audio.AudioRoutingManager.getPreferredInputDeviceForCapturerInfo(capturerInfo: AudioCapturerInfo, callback: AsyncCallback<AudioDeviceDescriptors>)}
     * > 获取当前首选输入设备。
     * >
     * > - 当应用退出或所选设备离线时，此选择将失效。应用重启或设备重新上线后，需要重新设置才会生效。
     * >
     * > - 当系统不支持此功能时，会为应用选择默认输入设备。
     *
     * @param { AudioDeviceDescriptor } inputDevice - 输入设备描述，需从
     *     [AudioRoutingManager.getAvailableDevices]{@link @ohos.multimedia.audio:audio.AudioRoutingManager.getAvailableDevices}
     *     返回的设备数组中获取。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 6800101 - Parameter verification failed, for example,
     *     the selected device does not exist.
     * @throws { BusinessError } 6800301 - Audio service error occurs, such as the service died.
     * @syscap SystemCapability.Multimedia.Audio.DeviceEnhance
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    selectInputDevice(inputDevice: AudioDeviceDescriptor): Promise<void>;

    /**
     * 为指定音频播放流设置首选输出设备。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - 应用需要确保指定的AudioRenderer实例有效。
     * >
     * > - 此选择仅对指定音频流生效，应用内其他播放流会继续使用应用级选择的设备或系统默认输出设备。
     * >
     * > - 当应用退出或所选设备离线时，此选择将失效。应用重启或设备重新上线后，需要重新设置才会生效。
     * >
     * > - 当系统不支持此功能时，会为该音频播放流选择默认输出设备。
     *
     * @param { AudioRenderer } renderer - AudioRenderer实例。
     * @param { AudioDeviceDescriptor } outputDevice - 输出设备描述，需从
     *     [AudioRoutingManager.getAvailableDevices]{@link @ohos.multimedia.audio:audio.AudioRoutingManager.getAvailableDevices}
     *     返回的设备数组中获取。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 6800101 - Parameter verification failed, for example,
     *     the selected device does not exist.
     * @throws { BusinessError } 6800301 - Audio service error occurs, such as the service died.
     * @syscap SystemCapability.Multimedia.Audio.DeviceEnhance
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    selectOutputDeviceForAudioRenderer(renderer: AudioRenderer, outputDevice: AudioDeviceDescriptor): Promise<void>;

    /**
     * 为指定音频录制流设置首选输入设备。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - 应用需要确保指定的AudioCapturer实例有效。
     * >
     * > - 此选择仅对指定音频流生效，应用内其他录音流会继续使用应用级选择的设备或系统默认输入设备。
     * >
     * > - 当应用退出或所选设备离线时，此选择将失效。应用重启或设备重新上线后，需要重新设置才会生效。
     * >
     * > - 当系统不支持此功能时，会为该音频录制流选择默认输入设备。
     *
     * @param { AudioCapturer } capturer - AudioCapturer实例。
     * @param { AudioDeviceDescriptor } inputDevice - 输入设备描述，需从
     *     [AudioRoutingManager.getAvailableDevices]{@link @ohos.multimedia.audio:audio.AudioRoutingManager.getAvailableDevices}
     *     返回的设备数组中获取。
     * @returns { Promise<void> } Promise对象，无返回结果。
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