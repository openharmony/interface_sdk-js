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
 * The module provides basic audio control capabilities, including volume adjustment, device management, data capture, 
 * and rendering.
 * 
 * This module provides the following common audio-related functions:
 * 
 * - [AudioManager]{@link @ohos.multimedia.audio:audio}: audio manager.
 * - [AudioRenderer]{@link @ohos.multimedia.audio:audio}: audio renderer, used to play Pulse Code Modulation (PCM) audio
 * data.
 * - [AudioCapturer]{@link @ohos.multimedia.audio:audio}: audio capturer, used to record PCM audio data.
 *
 * @syscap SystemCapability.Multimedia.Audio.Core [since 12]
 * @crossplatform [since 12]
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace audio {
  /**
   * Enumerates the error codes available for audio management.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum AudioErrors {
    /**
     * Invalid parameter.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERROR_INVALID_PARAM = 6800101,
    /**
     * Memory allocation failure.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERROR_NO_MEMORY = 6800102,
    /**
     * Unsupported state.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERROR_ILLEGAL_STATE = 6800103,
    /**
     * Unsupported parameter value.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERROR_UNSUPPORTED = 6800104,
    /**
     * Processing timeout.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 9 dynamic
     * @since 23 static
     */
    ERROR_TIMEOUT = 6800105,
    /**
     * Too many audio streams.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 9 dynamic
     * @since 23 static
     */
    ERROR_STREAM_LIMIT = 6800201,
    /**
     * System error.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ERROR_SYSTEM = 6800301
  }

  /**
   * Define local device network id for audio.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  const LOCAL_NETWORK_ID: string;

  /**
   * Define default volume group id for audio.
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  const DEFAULT_VOLUME_GROUP_ID: int;

  /**
   * Define default interrupt group id for audio.
   *
   * @syscap SystemCapability.Multimedia.Audio.Interrupt
   * @since 9 dynamic
   * @since 23 static
   */
  const DEFAULT_INTERRUPT_GROUP_ID: int;

  /**
   * Obtains an AudioManager instance.
   *
   * @returns { AudioManager } AudioManager instance.
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  function getAudioManager(): AudioManager;

  /**
   * Creates an AudioCapturer instance. This API uses an asynchronous callback to return the result.
   *
   * @param { AudioCapturerOptions } options - Capturer configurations.
   * @param { AsyncCallback<AudioCapturer> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **undefined** and **data** is the AudioCapturer instance obtained; otherwise, **err** is
   *     an error object. If the operation fails, an error object with one of the following error codes is returned:<br>
   *     Error code 6800301: indicates a parameter verification exception, permission verification exception, or system
   *     processing exception. For details, see system logs.<br>Error code 6800101: indicates that a mandatory parameter
   *     is null or the parameter type is incorrect.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform [since 12]
   * @since 8 dynamic
   */
  function createAudioCapturer(options: AudioCapturerOptions, callback: AsyncCallback<AudioCapturer>): void;

  /**
   * Obtains an {@link #AudioCapturer} instance. This method uses an asynchronous callback to return the
   * capturer instance.
   * Using {@link #AudioCapturer} to record audio will need permission according to different {@link #Sourcetype}
   * in options parameter, like {@link #ohos.permission.MICROPHONE} for the most microphone recording cases.
   *
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
   * Creates an AudioCapturer instance. This API uses a promise to return the result.
   *
   * @param { AudioCapturerOptions } options - Capturer configurations.
   * @returns { Promise<AudioCapturer> } Promise used to return the result. If the operation is successful, an
   *     AudioCapturer instance is returned; otherwise, an error object with either of the following error codes is
   *     returned:
   *     <br>Error code 6800301: indicates a parameter verification exception, permission verification exception, or system
   *     processing exception. For details, see system logs.
   *     <br>Error code 6800101: indicates that a mandatory parameter is null or the parameter type is incorrect.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform [since 12]
   * @since 8 dynamic
   */
  function createAudioCapturer(options: AudioCapturerOptions): Promise<AudioCapturer>;

  /**
   * Obtains an {@link AudioCapturer} instance. This method uses a promise to return the capturer instance.
   * Using {@link #AudioCapturer} to record audio will need permission according to different {@link #Sourcetype}
   * in options parameter, like {@link #ohos.permission.MICROPHONE} for the most microphone recording cases.
   *
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
   * Obtains a special {@link #AudioCapturer} instance. This method uses a promise to return the capturer instance.
   * This capture can be used to record both Mic-In audio data and echo reference signal, for application to
   * process algorithm.
   * Mic-In audio data and echo reference signal will be put in one buffer or multiple buffers according to
   * configuration set by application.
   * Capturer is also not allowed to be created when application is in background.
   *
   * @permission ohos.permission.MICROPHONE
   * @param { AudioCapturerMicInConfig } config - Capturer configuration, see {@link #AudioCapturerMicInConfig}
   *     for details.
   * @returns { Promise<AudioCapturer | null> } Promise used to return the audio capturer instance,
   *     or null if any error occurs.
   * @throws { BusinessError } 201 - Permission denied, including background recording.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Capturer creation is not supported, may caused by following problems:
   *     <br> 1. Source type is unsupported for this capturer, only {@link #SOURCE_TYPE_UNPROCESSED_VOICE_ASSISTANT} is
   *     supported currently.
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
   * Obtains an {@link AudioRenderer} instance.
   * This method uses a promise to return the renderer instance.
   * 
   * The AudioRenderer instance is used to play streaming audio data.
   * When using AudioRenderer apis, there are many instructions for application
   * to achieve better performance and lower power consumption:
   * In music or audiobook background playback situation, you can have low power
   * consumption by following this best practices document **Low-Power Rules in Music Playback Scenarios**.
   * And for navigation situation, you can follow **Low-Power Rules in Navigation and Positioning Scenarios**.
   * 
   * Application developer should also be careful when app goes to background, please check if your audio playback
   * is still needed, see **Audio Resources** in best practices document.
   * And avoiding to send silence audio data continuously to waste system resources, otherwise system will take
   * control measures when this behavior is detected, see **Audio Playback** in best practices document.
   * 
   * If you want to use AudioRenderer api to implement a music playback application, there are also many interactive
   * scenes to consider, see **Developing an Audio Application** in best practices document.
   *
   * @param { AudioRendererOptions } options - Renderer configurations.
   * @param { AsyncCallback<AudioRenderer> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **undefined** and **data** is the AudioRenderer instance obtained; otherwise, **err** is
   *     an error object.
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
   * consumption by following this best practices document **Low-Power Rules in Music Playback Scenarios**.
   * And for navigation situation, you can follow **Low-Power Rules in Navigation and Positioning Scenarios**.
   * 
   * Application developer should also be careful when app goes to background, please check if your audio playback
   * is still needed, see **Audio Resources** in best practices document.
   * And avoiding to send silence audio data continuously to waste system resources, otherwise system will take
   * control measures when this behavior is detected, see **Audio Playback** in best practices document.
   * 
   * If you want to use AudioRenderer api to implement a music playback application, there are also many interactive
   * scenes to consider, see **Developing an Audio Application** in best practices document.
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
   * Obtains an {@link AudioRenderer} instance.
   * This method uses a promise to return the renderer instance.
   * 
   * The AudioRenderer instance is used to play streaming audio data.
   * When using AudioRenderer apis, there are many instructions for application
   * to achieve better performance and lower power consumption:
   * In music or audiobook background playback situation, you can have low power
   * consumption by following this best practices document **Low-Power Rules in Music Playback Scenarios**.
   * And for navigation situation, you can follow **Low-Power Rules in Navigation and Positioning Scenarios**.
   * 
   * Application developer should also be careful when app goes to background, please check if your audio playback
   * is still needed, see **Audio Resources** in best practices document.
   * And avoiding to send silence audio data continuously to waste system resources, otherwise system will take
   * control measures when this behavior is detected, see **Audio Playback** in best practices document.
   * 
   * If you want to use AudioRenderer api to implement a music playback application, there are also many interactive
   * scenes to consider, see **Developing an Audio Application** in best practices document.
   *
   * @param { AudioRendererOptions } options - Renderer configurations.
   * @returns { Promise<AudioRenderer> } Promise used to return the AudioRenderer instance.
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
   * consumption by following this best practices document **Low-Power Rules in Music Playback Scenarios**.
   * And for navigation situation, you can follow **Low-Power Rules in Navigation and Positioning Scenarios**.
   * 
   * Application developer should also be careful when app goes to background, please check if your audio playback
   * is still needed, see **Audio Resources** in best practices document.
   * And avoiding to send silence audio data continuously to waste system resources, otherwise system will take
   * control measures when this behavior is detected, see **Audio Playback** in best practices document.
   * 
   * If you want to use AudioRenderer api to implement a music playback application, there are also many interactive
   * scenes to consider, see **Developing an Audio Application** in best practices document.
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
   *
   * @param { AudioRendererInfo } options - Tone playing attribute.
   * @param { AsyncCallback<TonePlayer> } callback - Callback used to return the tonePlayer instance.
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 9 dynamic
   */
  function createTonePlayer(options: AudioRendererInfo, callback: AsyncCallback<TonePlayer>): void;

  /**
   * Obtains a {@link TonePlayer} instance. This method uses an asynchronous callback to return the renderer instance.
   *
   * @param { AudioRendererInfo } options - Tone playing attribute.
   * @param { AsyncCallback<TonePlayer | null> } callback - Callback used to return the tonePlayer instance，
   *     null when an error happens.
   * @throws { BusinessError } 202 - Not system App.
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 23 static
   */
  function createTonePlayer(options: AudioRendererInfo, callback: AsyncCallback<TonePlayer | null>): void;

  /**
   * Obtains a {@link TonePlayer} instance. This method uses a promise to return the renderer instance.
   *
   * @param { AudioRendererInfo } options - Tone playing attribute.
   * @returns { Promise<TonePlayer> } Promise used to return the tonePlayer instance.
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 9 dynamic
   */
  function createTonePlayer(options: AudioRendererInfo): Promise<TonePlayer>;

  /**
   * Obtains a {@link TonePlayer} instance. This method uses a promise to return the renderer instance.
   *
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
   * Creates an <b>AudioLoopback</b> instance, which provides low-latency in-ear
   * monitoring using a fast capturer and renderer.
   *
   * @permission ohos.permission.MICROPHONE
   * @param { AudioLoopbackMode } mode Audio loopback mode.
   * @returns { Promise<AudioLoopback> } Promise used to return the <b>AudioLoopback</b> instance.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Unsupported API.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Loopback mode is unsupported.
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 20 dynamic
   */
  /**
   * Creates an <b>AudioLoopback</b> instance, which provides low-latency in-ear
   * monitoring using a fast capturer and renderer.
   *
   * @param { AudioLoopbackMode } mode Audio loopback mode.
   * @returns { Promise<AudioLoopback> } Promise used to return the <b>AudioLoopback</b> instance.
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
   * Creates a global audio loopback instance, which provides low-latency in-ear monitor function.
   * Hardware audio loopback can only be created in supported platform, application can use
   * {@link AudioStreamManager#isAudioLoopbackSupported} to check first.
   * There should be only one main instance that own the global loopback in the system, the others
   * are controllers. A controller can manage the global loopback by sending commands to the main
   * instance, and listen status change from it.
   *
   * @param { AudioLoopbackMode } mode - Audio loopback mode to create.
   * @param { boolean } isController - Create an object that own the audio loopback or only a controller.
   * @returns { Promise<AudioLoopback | null> } Promise used to return the audio loopback instance,
   *     or null when an error happens.
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
   * Enumerates the audio states.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum AudioState {
    /**
     * Invalid state.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    STATE_INVALID = -1,
    /**
     * Creating instance state.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    STATE_NEW = 0,
    /**
     * Prepared.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    STATE_PREPARED = 1,
    /**
     * Running.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    STATE_RUNNING = 2,
    /**
     * Stopped.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    STATE_STOPPED = 3,
    /**
     * Released.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    STATE_RELEASED = 4,
    /**
     * Paused.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    STATE_PAUSED = 5
  }

  /**
   * Enumerates the audio loopback modes.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 20 dynamic
   * @since 23 static
   */
  enum AudioLoopbackMode {
    /**
     * Hardware loopback.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    HARDWARE = 0
  }

  /**
   * Enumerates the audio loopback statuses.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 20 dynamic
   * @since 23 static
   */
  enum AudioLoopbackStatus {
    /**
     * Loopback is unavailable due to issues with the input or output device (for example, changes in the audio output 
     * device).
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    UNAVAILABLE_DEVICE = -2,
    /**
     * Loopback is unavailable due to restrictions in the audio scene (for example, audio focus or low-latency 
     * management).
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    UNAVAILABLE_SCENE = -1,
    /**
     * Loopback is available but currently idle.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    AVAILABLE_IDLE = 0,
    /**
     * Loopback is actively running.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    AVAILABLE_RUNNING = 1
  }

  /**
   * Enumerates the reverb modes of audio loopback.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 21 dynamic
   * @since 24 static
   */
  enum AudioLoopbackReverbPreset {
    /**
     * Maintains the original reverb without enhancement.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    ORIGINAL = 1,
    /**
     * Provides a Karaoke-style reverb effect.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    KTV = 2,
    /**
     * Provides a theater-style reverb effect (default).
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    THEATER = 3,
    /**
     * Provides a concert-style reverb effect.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    CONCERT = 4
  }

  /**
   * Enumerates the equalizer types of audio loopback.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 21 dynamic
   * @since 24 static
   */
  enum AudioLoopbackEqualizerPreset {
    /**
     * Maintains the original sound without equalization.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    FLAT = 1,
    /**
     * Enhances the fullness of vocals (default).
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    FULL = 2,
    /**
     * Enhances the brightness of vocals.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    BRIGHT = 3
  }

  /**
   * Enumerates the audio volume types.
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum AudioVolumeType {
    /**
     * Audio volume type for voice calls.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    VOICE_CALL = 0,
    /**
     * Audio volume type for ringtones.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    RINGTONE = 2,
    /**
     * Audio volume type for media purpose.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    MEDIA = 3,
    /**
     * Audio volume type for alarming.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ALARM = 4,
    /**
     * Audio volume type for accessibility.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ACCESSIBILITY = 5,
    /**
     * Audio volume type for system sound.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM = 6,
    /**
     * Audio volume type for voice assistant.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 8 dynamic
     * @since 23 static
     */
    VOICE_ASSISTANT = 9,
    /**
     * Audio volume type for ultrasonic.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    ULTRASONIC = 10,
    /**
     * Audio volume type for notification.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NOTIFICATION = 11,
    /**
     * Audio volume type for navigation.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NAVIGATION = 12,
    /**
     * Audio volume type for all common.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ALL = 100
  }

  /**
   * Enumerates the audio device flags.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum DeviceFlag {
    /**
     * None devices.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE_DEVICES_FLAG = 0,
    /**
     * Output devices.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    OUTPUT_DEVICES_FLAG = 1,
    /**
     * Input devices.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    INPUT_DEVICES_FLAG = 2,
    /**
     * All devices.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    ALL_DEVICES_FLAG = 3,
    /**
     * Distributed output devices.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DISTRIBUTED_OUTPUT_DEVICES_FLAG = 4,
    /**
     * Distributed input devices.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DISTRIBUTED_INPUT_DEVICES_FLAG = 8,
    /**
     * All Distributed devices.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ALL_DISTRIBUTED_DEVICES_FLAG = 12
  }

  /**
   * Enumerates the audio device types by usage.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 12 dynamic
   * @since 23 static
   */
  enum DeviceUsage {
    /**
     * Media output device.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    MEDIA_OUTPUT_DEVICES = 1,
    /**
     * Media input device.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    MEDIA_INPUT_DEVICES = 2,
    /**
     * All media devices.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    ALL_MEDIA_DEVICES = 3,
    /**
     * Call output device.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    CALL_OUTPUT_DEVICES = 4,
    /**
     * Call input device.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    CALL_INPUT_DEVICES = 8,
    /**
     * All call devices.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    ALL_CALL_DEVICES = 12
  }

  /**
   * Enumerates the device roles.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum DeviceRole {
    /**
     * Input role.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    INPUT_DEVICE = 1,
    /**
     * Output role.
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
   * Enumerates the device types.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum DeviceType {
    /**
     * Invalid device.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    INVALID = 0,
    /**
     * Built-in earpiece.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    EARPIECE = 1,
    /**
     * Built-in speaker.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    SPEAKER = 2,
    /**
     * Wired headset with a microphone.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    WIRED_HEADSET = 3,
    /**
     * Wired headset without a microphone.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    WIRED_HEADPHONES = 4,
    /**
     * Bluetooth device using Synchronous Connection Oriented (SCO) links.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    BLUETOOTH_SCO = 7,
    /**
     * Bluetooth device using Advanced Audio Distribution Profile (A2DP) links.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    BLUETOOTH_A2DP = 8,
    /**
     * Built-in microphone.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    MIC = 15,
    /**
     * USB Type-C headset.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    USB_HEADSET = 22,
    /**
     * Display port (DP), which is used to connect to external devices.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DISPLAY_PORT = 23,
    /**
     * Remote cast device.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    REMOTE_CAST = 24,
    /**
     * USB device (excluding USB headsets).
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 18 dynamic
     * @since 23 static
     */
    USB_DEVICE = 25,
    /**
     * Accessory devices, such as the mic on remote control.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    ACCESSORY = 26,

    /**
     * HDMI device (such as HDMI, ARC, and eARC).
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 19 dynamic
     * @since 23 static
     */
    HDMI = 27,
    /**
     * Wired digital device (such as S/PDIF)
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 19 dynamic
     * @since 23 static
     */
    LINE_DIGITAL = 28,
    /**
     * Distributed device.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    REMOTE_DAUDIO = 29,
    /**
     * Hearing aid audio device.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    /**
     * Hearing aid audio device.
     * Note: This original device type can be obtained after it is declared via
     *     {@link AudioRoutingManager#declareDeviceTypesCompatibility}.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 26.0.0 dynamic&static
     */
    HEARING_AID = 30,
    /**
     * Nearlink device.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    /**
     * Nearlink device.
     * Note: This original device type can be obtained after it is declared via
     *     {@link AudioRoutingManager#declareDeviceTypesCompatibility}.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 26.0.0 dynamic&static
     */
    NEARLINK = 31,
    /**
     * Bluetooth device using the spp profile.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    BLUETOOTH_SPP = 33,
    /**
     * Nearlink port.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    NEARLINK_PORT = 34,
    /**
     * System private device. (This device is a private device within the system, and applications can ignore it.)
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 22 dynamic
     * @since 23 static
     */
    SYSTEM_PRIVATE = 200,
    /**
     * Default device type.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    DEFAULT = 1000
  }

  /**
   * Defines the device type array.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type DeviceTypeArray = Array<DeviceType>;

  /**
   * Enumerates the active device types.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimedia.audio.CommunicationDeviceType
   */
  enum ActiveDeviceType {
    /**
     * Speaker.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.CommunicationDeviceType.SPEAKER
     */
    SPEAKER = 2,
    /**
     * Bluetooth device using Synchronous Connection Oriented (SCO) links.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.DeviceType#BLUETOOTH_SCO
     */
    BLUETOOTH_SCO = 7
  }

  /**
   * Enumerates the available device types for communication.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Communication
   * @since 9
   */
  /**
   * Enumerates the available device types for communication.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Audio.Communication
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum CommunicationDeviceType {
    /**
     * Speaker.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 9
     */
    /**
     * Speaker.
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
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 21 dynamic
     * @since 24 static
     */
    SELECT_STRATEGY_DEFAULT = 0,
    /**
     * The independent device select strategy.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 21 dynamic
     * @since 24 static
     */
    SELECT_STRATEGY_INDEPENDENT = 1
  }

  /**
   * Enumerates the audio ring modes.
   *
   * @syscap SystemCapability.Multimedia.Audio.Communication
   * @crossplatform [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum AudioRingMode {
    /**
     * Silent mode.
     *
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    RINGER_MODE_SILENT = 0,
    /**
     * Vibration mode.
     *
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    RINGER_MODE_VIBRATE = 1,
    /**
     * Normal mode.
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
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum PolicyType {
    /**
     * EDM type.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    EDM = 0,
    /**
     * PRIVACY type.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    PRIVACY = 1
  }

  /**
   * Enumerates the audio sample formats.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum AudioSampleFormat {
    /**
     * Invalid format.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_INVALID = -1,
    /**
     * Unsigned 8-bit integer.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_U8 = 0,
    /**
     * Signed 16-bit integer, little endian.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_S16LE = 1,
    /**
     * Signed 24-bit integer, little endian.
     * 
     * Due to system restrictions, only some devices support this sampling format.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_S24LE = 2,
    /**
     * Signed 32-bit integer, little endian.
     * 
     * Due to system restrictions, only some devices support this sampling format.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_S32LE = 3,
    /**
     * Signed 32-bit floating-point number, little endian.
     * 
     * Due to system restrictions, only some devices support this sampling format.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    SAMPLE_FORMAT_F32LE = 4
  }

  /**
   * Enumerates the audio channels.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum AudioChannel {
    /**
     * One audio channel (mono).
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    CHANNEL_1 = 1,
    /**
     * Two audio channels (stereo).
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    CHANNEL_2 = 2,
    /**
     * Three audio channels.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_3 = 3,
    /**
     * Four audio channels.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_4 = 4,
    /**
     * Five audio channels.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_5 = 5,
    /**
     * Six audio channels.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_6 = 6,
    /**
     * Seven audio channels.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_7 = 7,
    /**
     * Eight audio channels.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_8 = 8,
    /**
     * Nine audio channels.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_9 = 9,
    /**
     * Ten audio channels.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_10 = 10,
    /**
     * Twelve audio channels.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_12 = 12,
    /**
     * Fourteen audio channels.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_14 = 14,
    /**
     * Sixteen audio channels.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CHANNEL_16 = 16
  }

  /**
   * Enumerates the audio sampling rates. The sampling rates supported vary according to the device in use.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum AudioSamplingRate {
    /**
     * The sampling rate is 8000.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_8000 = 8000,
    /**
     * The sampling rate is 11025.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_11025 = 11025,
    /**
     * The sampling rate is 12000.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_12000 = 12000,
    /**
     * The sampling rate is 16000.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_16000 = 16000,
    /**
     * The sampling rate is 22050.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_22050 = 22050,
    /**
     * The sampling rate is 24000.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_24000 = 24000,
    /**
     * The sampling rate is 32000.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_32000 = 32000,
    /**
     * The sampling rate is 44100.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_44100 = 44100,
    /**
     * The sampling rate is 48000.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_48000 = 48000,
    /**
     * The sampling rate is 64000.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_64000 = 64000,
    /**
     * The sampling rate is 88200.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_88200 = 88200,
    /**
     * The sampling rate is 96000.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_96000 = 96000,
    /**
     * The sampling rate is 176400.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_176400 = 176400,
    /**
     * The sampling rate is 192000.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SAMPLE_RATE_192000 = 192000,
    /**
     * The sampling rate is 384000.
     * 
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SAMPLE_RATE_384000 = 384000
  }

  /**
   * Enumerates the audio encoding types.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum AudioEncodingType {
    /**
     * Invalid.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    ENCODING_TYPE_INVALID = -1,
    /**
     * PCM encoding.
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
   * Enumerates the audio content types.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead ohos.multimedia.audio.StreamUsage
   */
  enum ContentType {
    /**
     * Unknown content.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_UNKNOWN
     */
    CONTENT_TYPE_UNKNOWN = 0,
    /**
     * Speech.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_VOICE_COMMUNICATION
     */
    CONTENT_TYPE_SPEECH = 1,
    /**
     * Music.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_MUSIC
     */
    CONTENT_TYPE_MUSIC = 2,
    /**
     * Movie.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_MOVIE
     */
    CONTENT_TYPE_MOVIE = 3,
    /**
     * Notification tone.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_NOTIFICATION
     */
    CONTENT_TYPE_SONIFICATION = 4,
    /**
     * Ringtone.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage.STREAM_USAGE_RINGTONE
     */
    CONTENT_TYPE_RINGTONE = 5,
  }

  /**
   * Enumerates the types of audio streams played.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum StreamUsage {
    /**
     * Unknown content.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STREAM_USAGE_UNKNOWN = 0,
    /**
     * Media.
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
     * Music.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_MUSIC = 1,
    /**
     * VoIP voice call. (The 3A algorithm is enabled when this stream starts.)
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STREAM_USAGE_VOICE_COMMUNICATION = 2,
    /**
     * Voice assistant.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    STREAM_USAGE_VOICE_ASSISTANT = 3,
    /**
     * Audio stream for alarming.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_ALARM = 4,
    /**
     * Voice message.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_VOICE_MESSAGE = 5,
    /**
     * Notification or ringtone usage.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.StreamUsage#STREAM_USAGE_RINGTONE
     */
    STREAM_USAGE_NOTIFICATION_RINGTONE = 6,
    /**
     * Ringtone.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_RINGTONE = 6,
    /**
     * Notification.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_NOTIFICATION = 7,
    /**
     * Accessibility.
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
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_SYSTEM = 9,
    /**
     * Movie or video.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_MOVIE = 10,
    /**
     * Gaming.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_GAME = 11,
    /**
     * Audiobooks (including crosstalks and storytelling), news radio, and podcasts.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_AUDIOBOOK = 12,
    /**
     * Navigation.
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
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_DTMF = 14,
    /**
     * Enforced tone usage, such as camera shutter.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_ENFORCED_TONE = 15,
    /**
     * Ultrasonic playing usage. This type is only used for msdp condition.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    STREAM_USAGE_ULTRASONIC = 16,
    /**
     * VoIP video call. (The 3A algorithm is enabled when this stream starts.)
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_VIDEO_COMMUNICATION = 17,
    /**
     * Voice call assistant type. This type is only used for call assistant functionalities.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    STREAM_USAGE_VOICE_CALL_ASSISTANT = 21,
    /**
     * Announcement usage.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    STREAM_USAGE_ANNOUNCEMENT = 22,
    /**
     * Emergency usage.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    STREAM_USAGE_EMERGENCY = 23
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
     *
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    INTERRUPT_REQUEST_TYPE_DEFAULT = 0,
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
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    FLAG_SHOW_SYSTEM_UI = 1,
  }

  /**
   * Describes app ID information.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AppIdInfo {
    /**
     * App UID.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    appUid: int;
    /**
     * App PID.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    appPid: int;
    /**
     * App token ID.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    appTokenId: int;
    /**
     * App full token ID.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    appFullTokenId: long;
  }

  /**
   * Describes audio stream information.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AudioStreamInfo {
    /**
     * Audio sampling rate.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @FaAndStageModel [since 26.0.0]
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    samplingRate: AudioSamplingRate | int;
    /**
     * Number of audio channels.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    channels: AudioChannel;
    /**
     * Audio sample format.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    sampleFormat: AudioSampleFormat;
    /**
     * Audio encoding type.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    encodingType: AudioEncodingType;
    /**
     * Audio channel layout. The default value is **0x0**.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    channelLayout?: AudioChannelLayout;
  }

  /**
   * Describes audio renderer information.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AudioRendererInfo {
    /**
     * Audio content type.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8 dynamic
     * @deprecated since 10
     * @useinstead ohos.multimedia.audio.AudioRendererInfo#usage
     */
    content?: ContentType;
    /**
     * Audio stream usage.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    usage: StreamUsage;
    /**
     * Flags that control the renderer behavior.
     *
     * Set this parameter to **0**.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    rendererFlags: int;
    /**
     * Audio volume mode config. If volumeMode is set to {@link AudioVolumeMode.APP_INDIVIDUAL}, this audio renderer
     * will be affected by app volume percentage set by {@link setAppVolumePercentage}
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     * @since 23 static
     */
    volumeMode?: AudioVolumeMode;
  }

  /**
   * Describes audio renderer filter.
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
     * Renderer information.
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
   * Describe audio capturer filter.
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
     * Capturer information.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    capturerInfo?: AudioCapturerInfo;
  }

  /**
   * Describes audio renderer configurations.
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AudioRendererOptions {
    /**
     * Describes audio stream information.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    streamInfo: AudioStreamInfo;
    /**
     * Describes audio renderer information.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    rendererInfo: AudioRendererInfo;
    /**
     * Whether the audio stream can be recorded by other applications. The default value is **0**.
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    privacyType?: AudioPrivacyType;
    /**
     * Indicates the original app ID of the audio stream.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    originalAppIdInfo?: AppIdInfo;
  }

  /**
   * Enumerates whether an audio stream can be recorded by other applications.
   *
   * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum AudioPrivacyType {
    /**
     * The audio stream can be recorded or screen-projected by other applications and is not privacy-related.
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PRIVACY_TYPE_PUBLIC = 0,

    /**
     * The audio stream cannot be recorded or screen-projected by other applications.
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PRIVACY_TYPE_PRIVATE = 1,

    /**
     * The audio stream can be recorded or screen-projected by other applications and is privacy-related.
     *
     * For example, if the privacy policy is **PRIVACY_TYPE_PUBLIC**, audio streams of the
     * [STREAM_USAGE_VOICE_COMMUNICATION]{@link audio.StreamUsage} type cannot be recorded or screen-projected by other
     * applications.
     *
     * However, if the privacy policy is **PRIVACY_TYPE_SHARED**, these audio streams can be recorded or screen-
     * projected by other applications.
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 21 dynamic
     * @since 24 static
     */
    PRIVACY_TYPE_SHARED = 2
  }

  /**
   * Enumerates the audio interruption modes.
   *
   * @syscap SystemCapability.Multimedia.Audio.Interrupt
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum InterruptMode {
    /**
     * Mode that different stream share one interrupt unit.
     *
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    SHARE_MODE = 0,
    /**
     * Mode that each stream has independent interrupt unit.
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
   * Enumerates the audio renderer rates.
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 8 dynamic
   * @since 23 static
   */
  enum AudioRendererRate {
    /**
     * Normal rate.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamic
     * @since 23 static
     */
    RENDER_RATE_NORMAL = 0,
    /**
     * Double rate.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamic
     * @since 23 static
     */
    RENDER_RATE_DOUBLE = 1,
    /**
     * 0.5x rate.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamic
     * @since 23 static
     */
    RENDER_RATE_HALF = 2
  }

  /**
   * Enumerates the audio interruption types.
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum InterruptType {
    /**
     * Audio interruption started.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    INTERRUPT_TYPE_BEGIN = 1,

    /**
     * Audio interruption ended.
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
   * Enumerates the hints provided along with audio interruption.
   *
   * The hint is obtained when an [InterruptEvent]{@link @ohos.multimedia.audio:audio.InterruptEvent} is received.
   *
   * The hint specifies the operation (such as audio pause or volume adjustment) to be performed on audio streams based
   * on the focus strategy.
   *
   * You can determine whether the operation is forcibly performed by the system based on
   * [InterruptForceType]{@link audio.InterruptForceType} in **InterruptEvent**. For details, see
   * [Introduction to Audio Focus](docroot://media/audio/audio-playback-concurrency.md).
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum InterruptHint {
    /**
     * None.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_NONE = 0,
    /**
     * A hint is displayed, indicating that the audio stream is restored. The application can proactively trigger
     * operations related to rendering or recording.
     *
     * This operation cannot be forcibly performed by the system, and the corresponding
     * [InterruptForceType]{@link audio.InterruptForceType} must be **INTERRUPT_SHARE**.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_RESUME = 1,

    /**
     * A hint is displayed, indicating that the audio stream is paused and the audio focus is lost temporarily.
     *
     * When the audio focus is available, the **INTERRUPT_HINT_RESUME** event is received.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_PAUSE = 2,

    /**
     * A hint is displayed, indicating that the audio stream stops and the audio focus is lost.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_STOP = 3,

    /**
     * A hint is displayed, indicating that audio ducking starts and the audio is played at a lower volume.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_DUCK = 4,

    /**
     * A hint is displayed, indicating that audio ducking ends and the audio is played at the normal volume.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_UNDUCK = 5,

    /**
     * A hint is displayed, indicating that the audio is muted.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 20 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_MUTE = 6,

    /**
     * A hint is displayed, indicating that the audio is unmuted.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 20 dynamic
     * @since 23 static
     */
    INTERRUPT_HINT_UNMUTE = 7
  }

  /**
   * Enumerates the types of force that causes audio interruption.
   *
   * The force type is obtained when an [InterruptEvent]{@link @ohos.multimedia.audio:audio.InterruptEvent} is received.
   *
   * This type specifies whether audio interruption is forcibly performed by the system. The operation information (such
   * as audio pause or stop) can be obtained through [InterruptHint]{@link audio.InterruptHint}. For details about the
   * audio interruption policy, see [Introduction to Audio Focus](docroot://media/audio/audio-playback-concurrency.md).
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum InterruptForceType {
    /**
     * The operation is forcibly performed by the system.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    INTERRUPT_FORCE = 0,
    /**
     * The operation will not be performed by the system. [InterruptHint]{@link audio.InterruptHint} is used to provide
     * recommended operations for the application, and the application can determine the next processing mode.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    INTERRUPT_SHARE = 1
  }

  /**
   * Describes the interruption event received by the application when the audio is interrupted.
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface InterruptEvent {
    /**
     * Whether the audio interruption has started or ended.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    eventType: InterruptType;

    /**
     * Whether the audio interruption is forcibly taken by the system or taken by an application.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    forceType: InterruptForceType;

    /**
     * Hint provided along the interruption to provide information related to the interruption event.
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
   * Enumerates the returned event types for audio interruption events.
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimedia.audio.InterruptType
   */
  enum InterruptActionType {

    /**
     * Focus gain event.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptType#INTERRUPT_TYPE_BEGIN
     */
    TYPE_ACTIVATED = 0,

    /**
     * Audio interruption event.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptType#INTERRUPT_TYPE_END
     */
    TYPE_INTERRUPT = 1
  }

  /**
   * Enumerates the device connection statuses.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum DeviceChangeType {
    /**
     * Connected.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    CONNECT = 0,

    /**
     * Disconnected.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    DISCONNECT = 1
  }

  /**
   * Enumerates the audio scenes.
   *
   * @syscap SystemCapability.Multimedia.Audio.Communication
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum AudioScene {
    /**
     * Default audio scene.
     *
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    AUDIO_SCENE_DEFAULT = 0,
    /**
     * Ringing audio scene.
     *
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_SCENE_RINGING = 1,
    /**
     * Phone call audio scene.
     *
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_SCENE_PHONE_CALL = 2,
    /**
     * Voice chat audio scene.
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
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    VOLUME_UP = 0,
    /**
     * Adjust volume down.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    VOLUME_DOWN = 1
  }

  /**
   * This interface implements audio volume and device management.
   *
   * Before calling any API in AudioManager, you must use
   * [getAudioManager]{@link @ohos.multimedia.audio:audio.getAudioManager} to obtain an AudioManager instance.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  interface AudioManager {
    /**
     * Sets the volume for a volume type. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { number } volume - Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.avVolumePanel.AVVolumePanel
     */
    setVolume(volumeType: AudioVolumeType, volume: number, callback: AsyncCallback<void>): void;
    /**
     * Sets the volume for a volume type. This method uses a promise to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { number } volume - Volume to set. The value range can be obtained by calling getMinVolume and getMaxVolume.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.avVolumePanel.AVVolumePanel
     */
    setVolume(volumeType: AudioVolumeType, volume: number): Promise<void>;
    /**
     * Obtains the volume of a stream. This API uses an asynchronous callback to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { AsyncCallback<number> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the stream volume obtained; otherwise, **err** is an error object.
     *     The volume range of a specified stream can be obtained by calling
     *     [getMinVolume]{@link audio.AudioManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}
     *     and
     *     [getMaxVolume]{@link audio.AudioManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}
     *     .
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getVolume
     */
    getVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void;
    /**
     * Obtains the volume of a stream. This API uses a promise to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { Promise<number> } Promise used to return the volume of the stream. The volume range of a specified
     *     stream can be obtained by calling
     *     [getMinVolume]{@link audio.AudioManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}
     *     and
     *     [getMaxVolume]{@link audio.AudioManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>)}
     *     .
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getVolume
     */
    getVolume(volumeType: AudioVolumeType): Promise<number>;
    /**
     * Obtains the minimum volume allowed for a stream. This API uses an asynchronous callback to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { AsyncCallback<number> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the minimum stream volume obtained; otherwise, **err** is an error
     *     object.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getMinVolume
     */
    getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void;
    /**
     * Obtains the minimum volume allowed for a stream. This API uses a promise to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { Promise<number> } Promise used to return the minimum volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getMinVolume
     */
    getMinVolume(volumeType: AudioVolumeType): Promise<number>;
    /**
     * Obtains the maximum volume allowed for a stream. This API uses an asynchronous callback to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { AsyncCallback<number> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the maximum stream volume obtained; otherwise, **err** is an error
     *     object.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getMaxVolume
     */
    getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<number>): void;
    /**
     * Obtains the maximum volume allowed for a stream. This API uses a promise to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { Promise<number> } Promise used to return the maximum volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getMaxVolume
     */
    getMaxVolume(volumeType: AudioVolumeType): Promise<number>;
    /**
     * Obtains the audio devices with a specific flag. This API uses an asynchronous callback to return the result.
     *
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - Callback used to return the result. If the operation
     *     is successful, **err** is **undefined** and **data** is the audio devices obtained; otherwise, **err** is an
     *     error object.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#getDevices
     */
    getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void;
    /**
     * Obtains the audio devices with a specific flag. This API uses a promise to return the result.
     *
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @returns { Promise<AudioDeviceDescriptors> } Promise used to return the device list.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#getDevices
     */
    getDevices(deviceFlag: DeviceFlag): Promise<AudioDeviceDescriptors>;
    /**
     * Mutes a volume type. This method uses an asynchronous callback to return the result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { boolean } mute - Mute status to set. The value true means to mute the volume type, and false means the opposite.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.avVolumePanel.AVVolumePanel
     */
    mute(volumeType: AudioVolumeType, mute: boolean, callback: AsyncCallback<void>): void;
    /**
     * Mutes a volume type. This method uses a promise to return the result.
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { boolean } mute -  Mute status to set. The value true means to mute the volume type, and false means the opposite.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.avVolumePanel.AVVolumePanel
     */
    mute(volumeType: AudioVolumeType, mute: boolean): Promise<void>;
    /**
     * Checks whether a stream is muted. This API uses an asynchronous callback to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true** if the stream is muted or **false** if not muted; otherwise
     *     , **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#isMute
     */
    isMute(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether a stream is muted. This API uses a promise to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { Promise<boolean> } Promise used to return the result, indicating whether the stream is muted. **true**
     *     if muted, **false** otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#isMute
     */
    isMute(volumeType: AudioVolumeType): Promise<boolean>;
    /**
     * Checks whether a stream is active. This API uses an asynchronous callback to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true** if the stream is active or **false** if not active;
     *     otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioStreamManager#isActive
     */
    isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether a stream is active. This API uses a promise to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { Promise<boolean> } Promise used to return the result, indicating whether the stream is active.
     *     **true** if active, **false** otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioStreamManager#isActive
     */
    isActive(volumeType: AudioVolumeType): Promise<boolean>;
    /**
     * Mutes or unmutes the microphone. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MICROPHONE
     * @param { boolean } mute - Mute status to set. The value true means to mute the microphone, and false means the opposite.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setMicrophoneMute(mute: boolean, callback: AsyncCallback<void>): void;
    /**
     * Mutes or unmutes the microphone. This method uses a promise to return the result.
     * @permission ohos.permission.MICROPHONE
     * @param { boolean } mute - Mute status to set. The value true means to mute the microphone, and false means the opposite.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setMicrophoneMute(mute: boolean): Promise<void>;
    /**
     * Checks whether the microphone is muted. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MICROPHONE
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true** if the microphone is muted or **false** if not muted;
     *     otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#isMicrophoneMute
     */
    isMicrophoneMute(callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether the microphone is muted. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MICROPHONE
     * @returns { Promise<boolean> } Promise used to return the result, indicating whether the microphone is muted.
     *     **true** if muted, **false** otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#isMicrophoneMute
     */
    isMicrophoneMute(): Promise<boolean>;
    /**
     * Sets the ringer mode. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioRingMode } mode - Ringer mode.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setRingerMode(mode: AudioRingMode, callback: AsyncCallback<void>): void;
    /**
     * Sets the ringer mode. This method uses a promise to return the result.
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioRingMode } mode - Ringer mode.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setRingerMode(mode: AudioRingMode): Promise<void>;
    /**
     * Obtains the ringer mode. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<AudioRingMode> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the ringer mode obtained; otherwise, **err** is an error
     *     object.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getRingerMode
     */
    getRingerMode(callback: AsyncCallback<AudioRingMode>): void;
    /**
     * Obtains the ringer mode. This API uses a promise to return the result.
     *
     * @returns { Promise<AudioRingMode> } Promise used to return the ringer mode.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioVolumeGroupManager#getRingerMode
     */
    getRingerMode(): Promise<AudioRingMode>;
    /**
     * Sets an audio parameter. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MODIFY_AUDIO_SETTINGS
     * @param { string } key - Key of the audio parameter to set.
     * @param { string } value -  Value of the audio parameter to set.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    setAudioParameter(key: string, value: string, callback: AsyncCallback<void>): void;
    /**
     * Sets an audio parameter. This method uses a promise to return the result.
     * @permission ohos.permission.MODIFY_AUDIO_SETTINGS
     * @param { string } key - Key of the audio parameter to set.
     * @param { string } value - Value of the audio parameter to set.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    setAudioParameter(key: string, value: string): Promise<void>;

    /**
     * Obtains the value of an audio parameter. This method uses an asynchronous callback to return the query result.
     * @param { string } key - Key of the audio parameter whose value is to be obtained.
     * @param { AsyncCallback<string> } callback - Callback used to return the value of the audio parameter.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    getAudioParameter(key: string, callback: AsyncCallback<string>): void;
    /**
     * Obtains the value of an audio parameter. This method uses a promise to return the query result.
     * @param { string } key - Key of the audio parameter whose value is to be obtained.
     * @returns { Promise<string> } Promise used to return the value of the audio parameter.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    getAudioParameter(key: string): Promise<string>;

    /**
     * Sets extra audio parameters. This method uses a promise to return the result.
     *
     * @permission ohos.permission.MODIFY_AUDIO_SETTINGS
     * @param { string } mainKey - Main key of the audio parameters to set.
     * @param { Record<string, string> } kvpairs - Key-value pairs with subkeys and values to set.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setExtraParameters(mainKey: string, kvpairs: Record<string, string>): Promise<void>;

    /**
     * Obtains the values of a certain key. This method uses a promise to return the query result.
     *
     * @param { string } mainKey - Main key of the audio parameters to get.
     * @param { Array<string> } subKeys - Sub keys of the audio parameters to get.
     * @returns { Promise<Record<string, string>> } Promise used to return the key-value pairs.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getExtraParameters(mainKey: string, subKeys?: Array<string>): Promise<Record<string, string>>;

    /**
     * Sets a device to the active state. This API uses an asynchronous callback to return the result.
     *
     * @param { ActiveDeviceType } deviceType - Active audio device type.
     * @param { boolean } active - Active state to set. **true** to set the device to the active state, **false**
     *     otherwise.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#setCommunicationDevice
     */
    setDeviceActive(deviceType: ActiveDeviceType, active: boolean, callback: AsyncCallback<void>): void;
    /**
     * Sets a device to the active state. This API uses a promise to return the result.
     *
     * @param { ActiveDeviceType } deviceType - Active audio device type.
     * @param { boolean } active - Active state to set. **true** to set the device to the active state, **false**
     *     otherwise.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#setCommunicationDevice
     */
    setDeviceActive(deviceType: ActiveDeviceType, active: boolean): Promise<void>;
    /**
     * Checks whether a device is active. This API uses an asynchronous callback to return the result.
     *
     * @param { ActiveDeviceType } deviceType - Active audio device type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true** if the device is active or **false** if not active;
     *     otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#isCommunicationDeviceActive
     */
    isDeviceActive(deviceType: ActiveDeviceType, callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether a device is active. This API uses a promise to return the result.
     *
     * @param { ActiveDeviceType } deviceType - Active audio device type.
     * @returns { Promise<boolean> } Promise used to return the result, indicating whether the device is active.
     *     **true** if active, **false** otherwise.
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
     *
     * @param { 'ringerModeChange' } type - Type of the event to listen for. Only the ringerModeChange event is
     *     supported.
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
     *
     * @param { AudioScene } scene - Audio scene mode.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    setAudioScene(scene: AudioScene, callback: AsyncCallback<void>): void;
    /**
     * Sets the audio scene mode to change audio strategies. This method uses a promise to return the result.
     *
     * @param { AudioScene } scene - Audio scene mode.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @systemapi
     * @since 8 dynamic
     * @since 23 static
     */
    setAudioScene(scene: AudioScene): Promise<void>;
    /**
     * Obtains the audio scene. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<AudioScene> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the audio scene obtained; otherwise, **err** is an error
     *     object.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getAudioScene(callback: AsyncCallback<AudioScene>): void;
    /**
     * Obtains the audio scene. This API uses a promise to return the result.
     *
     * @returns { Promise<AudioScene> } Promise used to return the audio scene.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getAudioScene(): Promise<AudioScene>;
    /**
     * Obtains the audio scene. This API returns the result synchronously.
     *
     * @returns { AudioScene } Audio scene.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioSceneSync(): AudioScene;

    /**
     * Subscribes to the audio scene change event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'audioSceneChange' } type - Event type. The event **'audioSceneChange'** is triggered when the audio
     *     scene is changed.
     * @param { Callback<AudioScene> } callback - Callback used to return the current audio scene.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 20 dynamic
     */
    on(type: 'audioSceneChange', callback: Callback<AudioScene>): void;

    /**
     * Subscribes to audio scene change events. When system changes communication scene status, registered clients
     * will receive the callback.
     *
     * @param { Callback<AudioScene> } callback - Callback used to obtain the latest audio scene.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 23 static
     */
    onAudioSceneChange(callback: Callback<AudioScene>): void;

    /**
     * Unsubscribes from the audio scene change event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'audioSceneChange' } type - Event type. The event **'audioSceneChange'** is triggered when the audio
     *     scene is changed.
     * @param { Callback<AudioScene> } [callback] - Callback used to return the current audio scene.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 20 dynamic
     */
    off(type: 'audioSceneChange', callback?: Callback<AudioScene>): void;

    /**
     * Unsubscribes to audio scene change events.
     *
     * @param { Callback<AudioScene> } [callback] - Callback used in subscription.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @since 23 static
     */
    offAudioSceneChange(callback?: Callback<AudioScene>): void;

    /**
     * Subscribes to the event indicating that the connection status of an audio device is changed. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { 'deviceChange' } type - Event type. The event **'deviceChange'** is triggered when the connection status
     *     of an audio device is changed.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to return the device change details.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#event:deviceChange
     */
    on(type: 'deviceChange', callback: Callback<DeviceChangeAction>): void;

    /**
     * Unsubscribes from the audio device change event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'deviceChange' } type - Event type. The event **'deviceChange'** is triggered when the connection status
     *     of an audio device is changed.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to return the device change details.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRoutingManager#event:deviceChange
     */
    off(type: 'deviceChange', callback?: Callback<DeviceChangeAction>): void;

    /**
     * Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an
     * asynchronous callback to return the result.
     *
     * Same as
     * [on('audioInterrupt')]{@link @ohos.multimedia.audio:audio.AudioRenderer.on(type: 'audioInterrupt', callback: Callback<InterruptEvent>)}
     * , this API is used to listen for focus changes. However, this API is used in scenarios without audio streams (no
     * AudioRenderer instance is created), such as frequency modulation (FM) and voice wakeup.
     *
     * @param { 'interrupt' } type - Event type. The event **'interrupt'** is triggered when the audio focus is changed.
     * @param { AudioInterrupt } interrupt - Audio interruption event type.
     * @param { Callback<InterruptAction> } callback - Callback used to return the event information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#event:audioInterrupt
     */
    on(type: 'interrupt', interrupt: AudioInterrupt, callback: Callback<InterruptAction>): void;

    /**
     * Unsubscribes from the audio interruption event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'interrupt' } type - Event type. The event **'interrupt'** is triggered when the audio focus is changed.
     * @param { AudioInterrupt } interrupt - Audio interruption event type.
     * @param { Callback<InterruptAction> } callback - Callback used to return the event information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#event:audioInterrupt
     */
    off(type: 'interrupt', interrupt: AudioInterrupt, callback?: Callback<InterruptAction>): void;

    /**
     * Obtains an AudioVolumeManager instance.
     *
     * @returns { AudioVolumeManager } AudioVolumeManager instance.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @atomicservice [since 23]
     * @since 9 dynamic
     * @since 23 static
     */
    getVolumeManager(): AudioVolumeManager;

    /**
     * Obtains an AudioStreamManager instance.
     *
     * @returns { AudioStreamManager } AudioStreamManager instance.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getStreamManager(): AudioStreamManager;

    /**
     * Obtains an AudioRoutingManager instance.
     *
     * @returns { AudioRoutingManager } AudioRoutingManager instance.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getRoutingManager(): AudioRoutingManager;

    /**
     * Obtains an AudioSessionManager instance.
     *
     * @returns { AudioSessionManager } AudioSessionManager instance.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     * @since 23 static
     */
    getSessionManager(): AudioSessionManager;

    /**
     * Obtains an AudioSpatializationManager instance.
     *
     * @returns { AudioSpatializationManager } AudioSpatializationManager instance.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     * @since 23 static
     */
    getSpatializationManager(): AudioSpatializationManager;

    /**
     * Obtains an {@link AudioEffectManager} instance.
     *
     * @returns { AudioEffectManager } AudioEffectManager instance.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getEffectManager(): AudioEffectManager;

    /**
     * Obtains a collaborative playback management instance.
     *
     * @returns { AudioCollaborativeManager } Returns a collaborative playback management instance.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getCollaborativeManager(): AudioCollaborativeManager;

    /**
     * Obtains a device enhancement manager instance.
     *
     * @returns { AudioDeviceEnhanceManager } Returns an instance of audio device enhancement manager.
     * @syscap SystemCapability.Multimedia.Audio.DeviceEnhance
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDeviceEnhanceManager(): AudioDeviceEnhanceManager;
    
    /**
     * Obtains an AudioDebuggingManager instance.
     * <p><strong>NOTE</strong>:
     * The {@link #AudioDebuggingManager} instance is a singleton.
     * </p>
     *
     * @returns { AudioDebuggingManager } this {@link #AudioDebuggingManager} object.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDebuggingManager(): AudioDebuggingManager;

    /**
     * user disable the safe media volume state.
     *
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
     *
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    INTERRUPT_REQUEST_GRANT = 0,
    /**
     * Request audio interrupt fail, may have higher priority type
     *
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    INTERRUPT_REQUEST_REJECT = 1
  }

  /**
   * Describes audio interrupt operation results.
   *
   * @syscap SystemCapability.Multimedia.Audio.Interrupt
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface InterruptResult {
    /**
     * Interrupt request or abandon result.
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
   * Enumerates the blocked statuses of audio devices.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 13 dynamic
   * @since 23 static
   */
  enum DeviceBlockStatus {
    /**
     * The audio device is not blocked.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     * @since 23 static
     */
    UNBLOCKED = 0,
    /**
     * The audio device is blocked.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     * @since 23 static
     */
    BLOCKED = 1,
  }

  /**
   * Describes the audio device blocked status and device information.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 13 dynamic
   * @since 23 static
   */
  interface DeviceBlockStatusInfo {
    /**
     * Blocked status of the audio device.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     * @since 23 static
     */
    blockStatus: DeviceBlockStatus;

    /**
     * Device information.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     * @since 23 static
     */
    devices: AudioDeviceDescriptors;
  }

  /**
   * This interface implements audio routing management.
   *
   * Before calling any API in AudioRoutingManager, you must use
   * [getRoutingManager]{@link @ohos.multimedia.audio:audio.AudioManager.getRoutingManager} to obtain an
   * AudioRoutingManager instance.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this interface are supported since API version 9.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AudioRoutingManager {
    /**
     * Obtains the audio devices with a specific flag. This API uses an asynchronous callback to return the result.
     *
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - Callback used to return the result. If the operation
     *     is successful, **err** is **undefined** and **data** is the audio devices obtained; otherwise, **err** is an
     *     error object.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getDevices(deviceFlag: DeviceFlag, callback: AsyncCallback<AudioDeviceDescriptors>): void;
    /**
     * Obtains the audio devices with a specific flag. This API uses a promise to return the result.
     *
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @returns { Promise<AudioDeviceDescriptors> } Promise used to return the device list.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getDevices(deviceFlag: DeviceFlag): Promise<AudioDeviceDescriptors>;
    /**
     * Obtains the audio devices with a specific flag. This API returns the result synchronously.
     *
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @returns { AudioDeviceDescriptors } Device list.
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
     * Subscribes to the event indicating that the connection status of an audio device is changed. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { 'deviceChange' } type - Event type. The event **'deviceChange'** is triggered when the connection status
     *     of an audio device is changed.
     * @param { DeviceFlag } deviceFlag - Audio device flag.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to return the device change details.
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
     * Unsubscribes from the event indicating that the connection status of an audio device is changed. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { 'deviceChange' } type - Event type. The event **'deviceChange'** is triggered when the connection status
     *     of an audio device is changed.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to return the device change details.
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
     *
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offDeviceChange(callback?: Callback<DeviceChangeAction>): void;

    /**
     * Obtains the available audio devices. This API returns the result synchronously.
     *
     * @param { DeviceUsage } deviceUsage - Audio device type (classified by usage).
     * @returns { AudioDeviceDescriptors } Device list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     * @since 23 static
     */
    getAvailableDevices(deviceUsage: DeviceUsage): AudioDeviceDescriptors;

    /**
     * Subscribes to the event indicating that the connection status of an available audio device is changed. This API
     * uses an asynchronous callback to return the result.
     *
     * @param { 'availableDeviceChange' } type - Event type. The event **'availableDeviceChange'** is triggered when the
     *     connection status of available audio devices is changed.
     * @param { DeviceUsage } deviceUsage - Audio device type (classified by usage).
     * @param { Callback<DeviceChangeAction> } callback - Callback used to return the device change details.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     */
    on(type: 'availableDeviceChange', deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void;

    /**
     * Subscribes to available device change events. When a device is connected/disconnected, registered clients will receive
     * the callback.
     *
     * @param { DeviceUsage } deviceUsage - Audio device usage.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onAvailableDeviceChange(deviceUsage: DeviceUsage, callback: Callback<DeviceChangeAction>): void;

    /**
     * Unsubscribes from the event indicating that the connection status of an available audio device is changed. This
     * API uses an asynchronous callback to return the result.
     *
     * @param { 'availableDeviceChange' } type - Event type. The event **'availableDeviceChange'** is triggered when the
     *     connection status of available audio devices is changed.
     * @param { Callback<DeviceChangeAction> } callback - Callback used to return the available device change details.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 12 dynamic
     */
    off(type: 'availableDeviceChange', callback?: Callback<DeviceChangeAction>): void;

    /**
     * UnSubscribes to available device change events.
     *
     * @param { Callback<DeviceChangeAction> } callback - Callback used to obtain the device update details.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offAvailableDeviceChange(callback?: Callback<DeviceChangeAction>): void;

    /**
     * Sets a communication device to the active state. This API uses an asynchronous callback to return the result.
     *
     * This API will be deprecated in a later version due to function design is changed. You are not advised to use it.
     *
     * You are advised to use the [AVCastPicker component](docroot://media/avsession/using-switch-call-devices.md)
     * provided by AVSession to switch between call devices.
     *
     * @param { CommunicationDeviceType } deviceType - Audio device flag.
     * @param { boolean } active - Active state to set. **true** to set the device to the active state, **false**
     *     otherwise.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setCommunicationDevice(deviceType: CommunicationDeviceType, active: boolean, callback: AsyncCallback<void>): void;
    /**
     * Sets a communication device to the active state. This API uses a promise to return the result.
     *
     * This API will be deprecated in a later version due to function design is changed. You are not advised to use it.
     *
     * You are advised to use the [AVCastPicker component](docroot://media/avsession/using-switch-call-devices.md)
     * provided by AVSession to switch between call devices.
     *
     * @param { CommunicationDeviceType } deviceType - Active audio device type.
     * @param { boolean } active - Active state to set. **true** to set the device to the active state, **false**
     *     otherwise.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setCommunicationDevice(deviceType: CommunicationDeviceType, active: boolean): Promise<void>;

    /**
     * Checks whether a communication device is active. This API uses an asynchronous callback to return the result.
     *
     * @param { CommunicationDeviceType } deviceType - Active audio device type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true** if the device is active or **false** if not active;
     *     otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    isCommunicationDeviceActive(deviceType: CommunicationDeviceType, callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether a communication device is active. This API uses a promise to return the result.
     *
     * @param { CommunicationDeviceType } deviceType - Active audio device type.
     * @returns { Promise<boolean> } Promise used to return the result, indicating whether the device is active.
     *     **true** if active, **false** otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Communication
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    isCommunicationDeviceActive(deviceType: CommunicationDeviceType): Promise<boolean>;
    /**
     * Checks whether a communication device is active. This API returns the result synchronously.
     *
     * @param { CommunicationDeviceType } deviceType - Active audio device type.
     * @returns { boolean } Check result for whether the device is active. **true** if active, **false** otherwise.
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
     *
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
     *
     * @param { AudioDeviceDescriptors } outputAudioDevices - Audio device description
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    selectOutputDevice(outputAudioDevices: AudioDeviceDescriptors): Promise<void>;

    /**
     * Select the output device with desired AudioRenderer. This method uses an asynchronous callback to return the
     * result.
     *
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
     *
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
     * @param { AudioRendererFilter } filter - Filter for affected AudioRenderer.
     * @param { AudioDeviceDescriptors } outputAudioDevices - Audio device to select.
     * @param { AudioDevcieSelectStrategy } strategy - Target audio device select strategy.
     * @returns { Promise<void> } Promise used to return the result.
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
     *
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
     *
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
     * Obtains the output device with the highest priority based on the audio renderer information. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { AudioRendererInfo } rendererInfo - Audio renderer information.
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - Callback used to return the result. If the operation
     *     is successful, **err** is **undefined** and **data** is the output device with the highest priority obtained;
     *     otherwise, **err** is an error object.
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
     * Obtains the output device with the highest priority based on the audio renderer information. This API uses a
     * promise to return the result.
     *
     * @param { AudioRendererInfo } rendererInfo - Audio renderer information.
     * @returns { Promise<AudioDeviceDescriptors> } Promise used to return the information about the output device with
     *     the highest priority.
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
     * Obtains the output device with the highest priority based on the audio renderer information. This API returns the
     * result synchronously.
     *
     * @param { AudioRendererInfo } rendererInfo - Audio renderer information.
     * @returns { AudioDeviceDescriptors } Information about the output device with the highest priority.
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
     *
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
     * Subscribes to the change event of the output device with the highest priority, which is triggered when the output
     * device with the highest priority is changed. This API uses an asynchronous callback to return the result.
     *
     * @param { 'preferOutputDeviceChangeForRendererInfo' } type - Event type. The event
     *     **'preferOutputDeviceChangeForRendererInfo'** is triggered when the output device with the highest priority
     *     is changed.
     * @param { AudioRendererInfo } rendererInfo - Audio renderer information.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to return the information about the output
     *     device with the highest priority.
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
     *
     * @param { AudioRendererInfo } rendererInfo - Audio renderer information.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the changed prefer devices
     *     information.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onPreferOutputDeviceChangeForRendererInfo(rendererInfo: AudioRendererInfo, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * Unsubscribes from the change event of the output device with the highest priority. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { 'preferOutputDeviceChangeForRendererInfo' } type - Event type. The event
     *     **'preferOutputDeviceChangeForRendererInfo'** is triggered when the output device with the highest priority
     *     is changed.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to return the information about the output
     *     device with the highest priority.
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
     * UnSubscribes to prefer output device change events.
     *
     * @param {Callback<AudioDeviceDescriptors> } [callback] - Callback used to obtain
     *     the changed prefer devices in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offPreferOutputDeviceChangeForRendererInfo(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Subscribes to prefer output device change events. When preferred device for target audio renderer
     * filter changes, registered clients will receive the callback.
     *
     * @param { 'preferredOutputDeviceChangeByFilter' } type - Type of the event to listen for. Only the
     *     preferredOutputDeviceChangeByFilter event is supported.
     * @param { AudioRendererFilter } filter - Filter for AudioRenderer.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the changed prefer devices
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
     * Subscribes to prefer output device change events. When preferred device for target audio renderer
     * filter changes, registered clients will receive the callback.
     *
     * @param { AudioRendererFilter } filter - Filter for AudioRenderer.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the changed prefer devices
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
     * UnSubscribes to prefer output device change events.
     *
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
     * UnSubscribes to preferred output device change events.
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
     * Obtains the input device with the highest priority based on the audio capturer information. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { AudioCapturerInfo } capturerInfo - Audio capturer information.
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - Callback used to return the result. If the operation
     *     is successful, **err** is **undefined** and **data** is the input device with the highest priority obtained;
     *     otherwise, **err** is an error object.
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
     * Obtains the input device with the highest priority based on the audio capturer information. This API uses a
     * promise to return the result.
     *
     * @param { AudioCapturerInfo } capturerInfo - Audio capturer information.
     * @returns { Promise<AudioDeviceDescriptors> } Promise used to return the information about the input device with
     *     the highest priority.
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
     *
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
     * Subscribes to the change event of the input device with the highest priority, which is triggered when the input
     * device with the highest priority is changed. This API uses an asynchronous callback to return the result.
     *
     * @param { 'preferredInputDeviceChangeForCapturerInfo' } type - Event type. The event
     *     **'preferredInputDeviceChangeForCapturerInfo'** is triggered when the input device with the highest priority
     *     is changed.
     * @param { AudioCapturerInfo } capturerInfo - Audio capturer information.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to return the information about the input
     *     device with the highest priority.
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
     *
     * @param { AudioCapturerInfo } capturerInfo - Audio capturer information.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain the
     *     changed preferred devices information.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onPreferredInputDeviceChangeForCapturerInfo(capturerInfo: AudioCapturerInfo, callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * Unsubscribes from the change event of the input device with the highest priority. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { 'preferredInputDeviceChangeForCapturerInfo' } type - Event type. The event
     *     **'preferredInputDeviceChangeForCapturerInfo'** is triggered when the input device with the highest priority
     *     is changed.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to return the information about the input
     *     device with the highest priority.
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
     *
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to obtain
     *     the changed preferred devices in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offPreferredInputDeviceChangeForCapturerInfo(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Subscribes to preferred input device change events. When the preferred device for target audio
     * capturer filter changes, registered clients will receive a callback.
     *
     * @param { AudioCapturerFilter } filter - Filter for capturer.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback to receive information about
     *     the changed preferred devices.
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
     * Unsubscribes to preferred input device change events.
     *
     * @param { Callback<AudioDeviceDescriptors> } [callback] - Callback used in subscribe.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offPreferredInputDeviceChangeByFilter(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Gets preferred input device for target audio capturer info.
     * @param { AudioCapturerInfo } capturerInfo - Audio capturer information.
     * @returns { AudioDeviceDescriptors } Information about the input device with the highest priority.
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
     * Checks whether the current device supports microphone blocking detection. This API uses a promise to return the
     * result.
     *
     * @returns { Promise<boolean> } Promise used to return the result, indicating the support for microphone blocking
     *     detection. **true** if supported, **false** otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     * @since 23 static
     */
    isMicBlockDetectionSupported():Promise<boolean>;

    /**
     * Subscribes to the microphone blocked status change event. This API uses an asynchronous callback to return the
     * result.
     *
     * Before using this API, check whether the current device supports microphone blocking detection. This event is
     * triggered when the microphone blocked status changes during recording. Currently, this API takes effect only for
     * the microphone on the local device.
     *
     * @param { 'micBlockStatusChanged' } type - Event type. The event **'micBlockStatusChanged'** is triggered when the
     *     microphone blocked status is changed.
     * @param { Callback<DeviceBlockStatusInfo> } callback - Callback used to return the microphone blocked status and
     *     device information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
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
     *
     * @param { Callback<DeviceBlockStatusInfo> } callback - Callback used to obtain the microphone block status.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onMicBlockStatusChanged(callback: Callback<DeviceBlockStatusInfo>): void;

    /**
     * Unsubscribes from the microphone blocked status change event. This API uses an asynchronous callback to return
     * the result.
     *
     * @param { 'microphoneBlockStatusChanged' } type - Event type. The event **'micBlockStatusChanged'** is triggered
     *     when the microphone blocked status is changed.
     * @param { Callback<DeviceBlockStatusInfo> } callback - Callback used to return the microphone blocked status and
     *     device information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 13 dynamic
     */
    off(type: 'micBlockStatusChanged', callback?: Callback<DeviceBlockStatusInfo>): void;

    /**
     * Unsubscribes microphone blocked events.
     *
     * @param { Callback<DeviceBlockStatusInfo> } callback - Callback used to obtain the microphone block status.
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
     * Unexclude output devices. This function will unexclude target output devices belong to specific usage.
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
     *
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
     * Declares the original device types that the application has adapted to.
     * By default, the system returns anonymous device types. This method allows applications to
     * declare which specific device types they have explicitly adapted to. Once declared, the system
     * will return the original device types to the application instead of the anonymous ones.
     * Note: This method only supports device types introduced from API 20 onwards (such as hearing aids
     * and nearlink devices). If this interface is not called for these new device types, the application
     * will only be able to obtain anonymous device types.
     * Legacy device types prior to API 20 do not need this declaration.
     *
     * @param { DeviceTypeArray } deviceTypes - Array of original device types the application has adapted to.
     * @throws { BusinessError } 6800101 - Parameter verification failed, the param deviceTypes contains value
     *     that is invalid enum or is not device type introduced in API 20 onwards.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    declareDeviceTypesCompatibility(deviceTypes: DeviceTypeArray): void;

    /**
     * Gets the active output device descriptors for the current audio device.
     * The activation policy is related to the audio device policy of the system.
     *
     * @returns { Promise<AudioDeviceDescriptors> } Promise used to get the output device descriptors.
     * @throws { BusinessError } 202 - Not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getActiveOutputDeviceDescriptors(): Promise<AudioDeviceDescriptors>;

    /**
     * Restores the output device for the specified audio renderer filter to the default strategy.
     *
     * @param { AudioRendererFilter } filter - Filter of audio renderer to restore.
     * @returns { Promise<void> } Promise used to return result.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    restoreOutputDeviceByFilter(filter: AudioRendererFilter): Promise<void>;
  }

  /**
   * This interface implements audio stream management.
   *
   * Before calling any API in AudioStreamManager, you must use
   * [getStreamManager]{@link @ohos.multimedia.audio:audio.AudioManager.getStreamManager} to obtain an
   * AudioStreamManager instance.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this interface are supported since API version 9.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AudioStreamManager {
    /**
     * Obtains the information about this audio renderer. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > The audio renderer information returned by this API may include internal audio playback streams, such as
     * > cellular calls and ultrasonic streams.
     *
     * @param { AsyncCallback<AudioRendererChangeInfoArray> } callback - Callback used to return the result. If the
     *     operation is successful, **err** is **undefined** and **data** is the audio renderer information obtained;
     *     otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentAudioRendererInfoArray(callback: AsyncCallback<AudioRendererChangeInfoArray>): void;

    /**
     * Obtains the information about this audio renderer. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > The audio renderer information returned by this API may include internal audio playback streams, such as
     * > cellular calls and ultrasonic streams.
     *
     * @returns { Promise<AudioRendererChangeInfoArray> } Promise used to return the audio renderer information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentAudioRendererInfoArray(): Promise<AudioRendererChangeInfoArray>;

    /**
     * Obtains the information about this audio renderer. This API returns the result synchronously.
     *
     * > **NOTE**
     * >
     * > The audio renderer information returned by this API may include internal audio playback streams, such as
     * > cellular calls and ultrasonic streams.
     *
     * @returns { AudioRendererChangeInfoArray } Audio renderer information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCurrentAudioRendererInfoArraySync(): AudioRendererChangeInfoArray;

    /**
     * Obtains the information about this audio capturer. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > The audio capturer information returned by this API may include internal audio recording streams, such as voice
     * > wakeup and cellular calls.
     *
     * @param { AsyncCallback<AudioCapturerChangeInfoArray> } callback - Callback used to return the result. If the
     *     operation is successful, **err** is **undefined** and **data** is the audio capturer information obtained;
     *     otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentAudioCapturerInfoArray(callback: AsyncCallback<AudioCapturerChangeInfoArray>): void;

    /**
     * Obtains the information about this audio capturer. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > The audio capturer information returned by this API may include internal audio recording streams, such as voice
     * > wakeup and cellular calls.
     *
     * @returns { Promise<AudioCapturerChangeInfoArray> } Promise used to return the audio capturer information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentAudioCapturerInfoArray(): Promise<AudioCapturerChangeInfoArray>;

    /**
     * Obtains the information about this audio capturer. This API returns the result synchronously.
     *
     * > **NOTE**
     * >
     * > The audio capturer information returned by this API may include internal audio recording streams, such as voice
     * > wakeup and cellular calls.
     *
     * @returns { AudioCapturerChangeInfoArray } Audio capturer information.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCurrentAudioCapturerInfoArraySync(): AudioCapturerChangeInfoArray;

    /**
     * Obtains information about the audio effect mode in use. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { StreamUsage } usage - Audio stream usage.
     * @param { AsyncCallback<AudioEffectInfoArray> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the information about the audio effect mode obtained;
     *     otherwise, **err** is an error object.
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
     * Obtains information about the audio effect mode in use. This API uses a promise to return the result.
     *
     * @param { StreamUsage } usage - Audio stream usage.
     * @returns { Promise<AudioEffectInfoArray> } Promise used to return the information about the audio effect mode
     *     obtained.
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
     * Obtains information about the audio effect mode in use. This API returns the result synchronously.
     *
     * @param { StreamUsage } usage - Audio stream usage.
     * @returns { AudioEffectInfoArray } Information about the audio effect mode.
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
     * Subscribes to the audio renderer change event, which is triggered when the audio playback stream status or device
     * is changed. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > The audio renderer information returned by this API may include internal audio playback streams, such as
     * > cellular calls and ultrasonic streams.
     *
     * @param { 'audioRendererChange' } type - Event type. The event **'audioRendererChange'** is triggered when the
     *     audio playback stream status or device is changed.
     * @param { Callback<AudioRendererChangeInfoArray> } callback - Callback used to return the audio renderer
     *     information.
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
     * Unsubscribes from the audio renderer change event. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > The audio renderer information returned by this API may include internal audio playback streams, such as
     * > cellular calls and ultrasonic streams.
     *
     * @param { 'audioRendererChange' } type - Event type. The event **'audioRendererChange'** is triggered when the
     *     audio playback stream status or device is changed.
     * @param { Callback<AudioRendererChangeInfoArray> } callback - Callback used to return the audio renderer
     *     information. [since 18]
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     */
    off(type: 'audioRendererChange', callback?: Callback<AudioRendererChangeInfoArray>): void;

    /**
     * Unsubscribes to audio renderer change events.
     *
     * @param { Callback<AudioRendererChangeInfoArray> } callback - Callback invoked for the audio renderer change
     *     event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    offAudioRendererChange(callback?: Callback<AudioRendererChangeInfoArray>): void;

    /**
     * Subscribes to the audio capturer change event, which is triggered when the audio recording stream status or
     * device is changed. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > The audio capturer information returned by this API may include internal audio recording streams, such as voice
     * > wakeup and cellular calls.
     *
     * @param { 'audioCapturerChange' } type - Event type. The event **'audioCapturerChange'** is triggered when the
     *     audio recording stream status or device is changed.
     * @param { Callback<AudioCapturerChangeInfoArray> } callback - Callback used to return the audio capturer
     *     information.
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
     * Unsubscribes from the audio capturer change event. This API uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > The audio capturer information returned by this API may include internal audio recording streams, such as voice
     * > wakeup and cellular calls.
     *
     * @param { 'audioCapturerChange' } type - Event type. The event **'audioCapturerChange'** is triggered when the
     *     audio capturer is changed.
     * @param { Callback<AudioCapturerChangeInfoArray> } callback - Callback used to return the audio capturer
     *     information. [since 18]
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 9 dynamic
     */
    off(type: 'audioCapturerChange', callback?: Callback<AudioCapturerChangeInfoArray>): void;

    /**
     * Unsubscribes to audio capturer change events.
     *
     * @param { Callback<AudioCapturerChangeInfoArray> } callback - Callback invoked for the audio capturer change
     *     event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offAudioCapturerChange(callback?: Callback<AudioCapturerChangeInfoArray>): void;

    /**
     * Checks whether a stream is active. This API uses an asynchronous callback to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio stream types.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true** if the stream is active or **false** if not active;
     *     otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioStreamManager#isStreamActive
     */
    isActive(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether a stream is active. This API uses a promise to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio stream types.
     * @returns { Promise<boolean> } Promise used to return the result, indicating whether the stream is active.
     *     **true** if active, **false** otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioStreamManager#isStreamActive
     */
    isActive(volumeType: AudioVolumeType): Promise<boolean>;
    /**
     * Checks whether a stream is active. This API returns the result synchronously.
     *
     * @param { AudioVolumeType } volumeType - Audio stream types.
     * @returns { boolean } Check result for whether the stream is active. **true** if active, **false** otherwise.
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
     * Checks whether a stream is active. This API returns the result synchronously.
     *
     * @param { StreamUsage } streamUsage - Audio stream usage.
     * @returns { boolean } Check result for whether the stream is active. **true** if active, **false** otherwise.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 20 dynamic
     * @since 23 static
     */
    isStreamActive(streamUsage: StreamUsage): boolean;
    /**
     * Checks whether the specified audio source type supports echo cancellation.
     *
     * @param { SourceType } sourceType - Audio source type.
     * @returns { boolean } Check result for whether echo cancellation is supported. **true** if supported, **false**
     *     otherwise.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    isAcousticEchoCancelerSupported(sourceType: SourceType): boolean;

    /**
     * Checks whether the current system supports the specified audio loopback mode.
     *
     * @param { AudioLoopbackMode } mode - Audio loopback mode.
     * @returns { boolean } Check result for whether the audio loopback mode is supported. **true** if supported,
     *     **false** otherwise.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    isAudioLoopbackSupported(mode: AudioLoopbackMode): boolean;

    /**
     * Checks whether recording can be started based on the audio source type in the audio capturer information.
     *
     * @param { AudioCapturerInfo } capturerInfo - Audio capturer information.
     * @returns { boolean } Check result for whether recording can be started. **true** if recording can be started,
     *     **false** otherwise.
     *     <br>This API checks whether the specified audio source type in the capturer information can acquire focus. It should
     *     be called before starting audio recording to avoid conflicts with existing recording streams.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    isRecordingAvailable(capturerInfo: AudioCapturerInfo): boolean;

    /**
     * Checks whether the intelligent noise reduction feature is enabled for the audio stream of the specified source
     * type.
     *
     * @param { SourceType } sourceType - Audio source type.
     * @returns { boolean } Check result for whether the intelligent noise reduction feature is enabled. **true** if
     *     enabled, **false** otherwise.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    isIntelligentNoiseReductionEnabledForCurrentDevice(sourceType: SourceType): boolean;

    /**
     * Return if fast playback is supported for the specific audio stream info and usage type
     * in current device situation.
     *
     * @param { AudioStreamInfo } streamInfo - reference of stream info structure to describe basic audio format.
     * @param { StreamUsage } usage - stream usage type used to decide the audio device and pipe type selection result.
     * @returns { boolean } True if fast playback is supported in this situation.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isFastPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean;

    /**
     * Return if offload playback is supported for the specific audio stream info and usage type
     * in current device situation.
     *
     * @param { AudioStreamInfo } streamInfo - reference of stream info structure to describe basic audio format.
     * @param { StreamUsage } usage - stream usage type used to decide the audio device and pipe type selection result.
     * @returns { boolean } True if offload playback is supported in this situation.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isOffloadPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean;

    /**
     * Return if direct playback is supported for the specific audio stream info and usage type
     * in current device situation.
     *
     * @param { AudioStreamInfo } streamInfo - reference of stream info structure to describe basic audio format.
     * @param { StreamUsage } usage - stream usage type used to decide the audio device and pipe type selection result.
     * @returns { boolean } True if direct playback is supported in this situation.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isDirectPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean;

    /**
     * Return if fast recording is supported for the specific audio stream info and usage type
     * in current device situation.
     *
     * @param { AudioStreamInfo } streamInfo - reference of stream info structure to describe basic audio format.
     * @param { SourceType } source - stream source type used to decide the audio device and pipe type selection result.
     * @returns { boolean } True if fast recording is supported in this situation.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isFastRecordingSupported(streamInfo: AudioStreamInfo, source: SourceType): boolean;

    /**
     * Return if multichannel playback is supported for the specific audio stream info and usage type
     * in current device situation.
     *
     * @param { AudioStreamInfo } streamInfo - reference of stream info structure to describe basic audio format.
     * @param { StreamUsage } usage - stream usage type used to decide the audio device and pipe type selection result.
     * @returns { boolean } True if multichannel playback is supported in this situation.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isMultichannelPlaybackSupported(streamInfo: AudioStreamInfo, usage: StreamUsage): boolean;

  }

  /**
   * Enumerates the audio concurrency modes.
   *
   * @enum { int } [since 12 - 24]
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @atomicservice [since 26.0.0]
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioConcurrencyMode {
    /**
     * Uses the system strategy by default.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     * @since 23 static
     */
    CONCURRENCY_DEFAULT = 0,
    /**
     * Concurrent with other audio streams, that is, audio mixing.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     * @since 23 static
     */
    CONCURRENCY_MIX_WITH_OTHERS = 1,
    /**
     * Ducks other audio streams.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     * @since 23 static
     */
    CONCURRENCY_DUCK_OTHERS = 2,
    /**
     * Pauses other audio streams.
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
   * Enumerates the reasons for deactivating an audio session.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioSessionDeactivatedReason {
    /**
     * The application focus is preempted.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    DEACTIVATED_LOWER_PRIORITY = 0,
    /**
     * The audio session times out.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    DEACTIVATED_TIMEOUT = 1
  }

  /**
   * Enumerates the audio session scenes.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum AudioSessionScene {
    /**
     * Scene for media.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_SCENE_MEDIA = 0,
    /**
     * Scene for game.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_SCENE_GAME = 1,
    /**
     * Scene for voice communication.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_SCENE_VOICE_COMMUNICATION = 2
  }

  /**
   * Enumerates the hints for audio session state changes.
   *
   * The hint is obtained when an
   * [AudioSessionStateChangedEvent]{@link @ohos.multimedia.audio:audio.AudioSessionStateChangedEvent} is received.
   *
   * The hint specifies the action (such as audio pause or volume adjustment) to take on the audio session based on the
   * focus strategy.
   *
   * For details, see [Audio Session Management](docroot://media/audio/audio-session-management.md).
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum AudioSessionStateChangeHint {
    /**
     * A hint is displayed, indicating that the audio session is resuming. The application can proactively trigger
     * operations such as rendering.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_RESUME = 0,

    /**
     * A hint is displayed, indicating that the audio session is paused and the audio focus is lost temporarily. When
     * focus is regained, the AUDIO_SESSION_STATE_CHANGE_HINT_RESUME event is received.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_PAUSE = 1,

    /**
     * A hint is displayed, indicating that the audio session is stopped and the audio focus is lost permanently.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_STOP = 2,

    /**
     * A hint is displayed, indicating that the audio session is stopped by the system due to no activity, and the audio
     * focus is lost.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_TIME_OUT_STOP = 3,

    /**
     * A hint is displayed, indicating that audio ducking starts and the audio is played at a lower volume.
     *
     * If
     * [enableMuteSuggestionWhenMixWithOthers]{@link @ohos.multimedia.audio:audio.AudioSessionManager.enableMuteSuggestionWhenMixWithOthers}
     * is enabled, you can choose to mute the audio.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_DUCK = 4,

    /**
     * A hint is displayed, indicating that audio ducking ends and the audio is played at the normal volume.
     *
     * If
     * [enableMuteSuggestionWhenMixWithOthers]{@link @ohos.multimedia.audio:audio.AudioSessionManager.enableMuteSuggestionWhenMixWithOthers}
     * is enabled, you can unmute the audio.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_UNDUCK = 5,

    /**
     * Suggests to mute the playback because there is another application begin to play nonmixable
     * audio, application can decide whether to mute.
     * If interrupt strategy is duck, {@link #AUDIO_SESSION_STATE_CHANGE_HINT_DUCK} will replace mute suggestion event,
     * but application can still decide to mute when receive hint duck.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_MUTE_SUGGESTION = 6,

    /**
     * Suggest to unmute the playback because another application's nonmixable audio ends,
     * application can decide whether to mute.
     * If interrupt strategy is unduck, {@link #AUDIO_SESSION_STATE_CHANGE_HINT_UNDUCK} will replace unmute
     * suggestion event, but application can still decide to unmute when receive hint unduck.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE_SUGGESTION = 7,

    /**
     * The hint can be received only after the parameter {@link #AudioSessionBehaviorFlags.MUTE_WHEN_INTERRUPTED}
     * has been set by the interface {@link #setAudioSessionBehavior}
     * and {@link #setAudioSessionScene} has been called, and the audio session has been activated.
     * After the hint is received, the audio stream is muted.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_MUTE = 8,

    /**
     * The hint can be received only after the parameter {@link #AudioSessionBehaviorFlags.MUTE_WHEN_INTERRUPTED}
     * has been set by the interface {@link #setAudioSessionBehavior}
     * and {@link #setAudioSessionScene} has been called, and the audio session has been activated.
     * When the hint is received, the audio stream is unmuted.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE = 9
  }

  /**
   * Enumerates the recommended actions to take after an output device changes.
   *
   * Common scenario example: switching between a headset and a loudspeaker device. Upon switching from the loudspeaker
   * device to the headset upon wearing, the system suggests continuing playback and prompts that the application does
   * not need to pause. Upon transitioning from the headset to the loudspeaker device upon removal, the system suggests
   * suspending playback.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum OutputDeviceChangeRecommendedAction {
    /**
     * Suggests continuing playback. (This event serves as a playback maintenance indication, informing the application
     * that audio playback does not need to stop during this device change. However, it must not be used as a criterion
     * for triggering audio playback.)
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    DEVICE_CHANGE_RECOMMEND_TO_CONTINUE = 0,
    /**
     * Suggests stopping playback.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    DEVICE_CHANGE_RECOMMEND_TO_STOP = 1
  }

  /**
   * Enumerates audio session behavior flags.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum AudioSessionBehaviorFlags {
    /**
     * Default behavior, used to clear behavior settings.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DEFAULT_BEHAVIOR = 0x00000000,

    /**
     * When the system needs to stop or pause the audio stream, it performs a forced mute instead.
     * In the audio session scenario, the application will receive a notification
     * {@link #AUDIO_SESSION_STATE_CHANGE_HINT_MUTE} when muted
     * and a notification {@link #AUDIO_SESSION_STATE_CHANGE_HINT_UNMUTE} when resumed.
     * In the AudioRenderer and AudioCapturer scenarios, the application will receive a notification
     * {@link #INTERRUPT_HINT_MUTE} when muted
     * and a notification {@link #INTERRUPT_HINT_UNMUTE} when resumed.
     * This flag cannot coexist with {@link #PAUSE_WHEN_INTERRUPTED}; if both flags are set,
     * only {@link #PAUSE_WHEN_INTERRUPTED} will take effect.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    MUTE_WHEN_INTERRUPTED = 0x00000002,

    /**
     * When the system needs to stop the audio stream, it performs a pause instead.
     * In the audio session scenario, the application will receive a notification
     * {@link #AUDIO_SESSION_STATE_CHANGE_HINT_PAUSE} when paused
     * and a notification {@link #AUDIO_SESSION_STATE_CHANGE_HINT_RESUME} when resumed.
     * In the AudioRenderer and AudioCapturer scenarios, the application will receive a notification
     * {@link #INTERRUPT_HINT_PAUSE} when paused
     * and a notification {@link #INTERRUPT_HINT_RESUME} when resumed.
     * This flag cannot coexist with {@link #MUTE_WHEN_INTERRUPTED}; if both flags are set,
     * only this flag will take effect.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAUSE_WHEN_INTERRUPTED = 0x00000004
  }

  /**
   * Describes an audio session strategy.
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
     * Audio concurrency mode.
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
   * Describes the event indicating that an audio session is deactivated.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioSessionDeactivatedEvent {
    /**
     * Reason for deactivating an audio session.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    reason: AudioSessionDeactivatedReason;
  }

  /**
   * Describes the event indicating that the audio session state changes.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface AudioSessionStateChangedEvent {
    /**
     * Hint for the audio session state change.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    stateChangeHint: AudioSessionStateChangeHint;
  }

  /**
   * Describes the event indicating that the output device changes.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface CurrentOutputDeviceChangedEvent {
    /**
     * Audio device descriptors before change.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    preDevices?: AudioDeviceDescriptors;
    /**
     * Audio device descriptors after change.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    devices: AudioDeviceDescriptors;
    /**
     * Audio device change reason.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    changeReason: AudioStreamDeviceChangeReason;
    /**
     * Recommend action when device change.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    recommendedAction: OutputDeviceChangeRecommendedAction;
  }

  /**
   * Enumerates the preferred device categories available for recording with Bluetooth or NearLink.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 21 dynamic
   * @since 24 static
   */
  enum BluetoothAndNearlinkPreferredRecordCategory {
    /**
     * No specific device preference.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    PREFERRED_NONE = 0,
    /**
     * Prefers using Bluetooth or NearLink devices for recording; whether to use low-latency or high-quality recording
     * depends on the system.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    PREFERRED_DEFAULT = 1,
    /**
     * Prefers using Bluetooth or NearLink devices in low-latency mode for recording.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    PREFERRED_LOW_LATENCY = 2,
    /**
     * Prefers using Bluetooth or NearLink devices in high-quality mode for recording.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    PREFERRED_HIGH_QUALITY = 3,
  }

  /**
   * Describes the event indicating that the input device changes.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 21 dynamic
   * @since 24 static
   */
  interface CurrentInputDeviceChangedEvent {
    /**
     * Audio input device descriptors after change.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    devices: AudioDeviceDescriptors;
    /**
     * Audio input device change reason.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 21 dynamic
     * @since 24 static
     */
    changeReason: AudioStreamDeviceChangeReason;
  }

  /**
   * This interface implements audio session management.
   *
   * Before calling any API in AudioSessionManager, you must use
   * [getSessionManager]{@link @ohos.multimedia.audio:audio.AudioManager.getSessionManager} to obtain an
   * AudioSessionManager instance.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this interface are supported since API version 12.
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
     * Activates an audio session. This API uses a promise to return the result.
     *
     * @param { AudioSessionStrategy } strategy - Audio session strategy.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Deactivates this audio session. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * Checks whether this audio session is activated.
     *
     * @returns { boolean } Check result for whether the audio session is activated. **true** if activated, **false**
     *     otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @atomicservice [since 26.0.0]
     * @since 12 dynamic
     * @since 23 static
     */
    isAudioSessionActivated(): boolean;

    /**
     * Subscribes to the audio session deactivation event, which is triggered when an audio session is deactivated. This
     * API uses an asynchronous callback to return the result.
     *
     * @param { 'audioSessionDeactivated' } type - Event type. The event **'audioSessionDeactivated'** is triggered when
     *     the audio session is deactivated.
     * @param { Callback<AudioSessionDeactivatedEvent> } callback - Callback used to return the reason why the audio
     *     session is deactivated.
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
     * Unsubscribes from the audio session deactivation event. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'audioSessionDeactivated' } type - Event type. The event **'audioSessionDeactivated'** is triggered when
     *     the audio session is deactivated.
     * @param { Callback<AudioSessionDeactivatedEvent> } callback - Callback used to return the reason why the audio
     *     session is deactivated.
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
     * Unsubscribes to audio session deactivated event.
     *
     * @param { Callback<AudioSessionDeactivatedEvent> } callback - Callback invoked for
     *     the audio session deactivated event. [since 23]
     * @throws { BusinessError } 6800101 - Parameter verification failed. [since 23]
     * @syscap SystemCapability.Multimedia.Audio.Core [since 23]
     * @atomicservice [since 26.0.0]
     * @since 23 static
     */
    offAudioSessionDeactivated(callback?: Callback<AudioSessionDeactivatedEvent>): void;

    /**
     * Sets an audio session scene.
     *
     * @param { AudioSessionScene } scene - Audio session scene.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     * @since 23 static
     */
    setAudioSessionScene(scene: AudioSessionScene): void;

    /**
     * Set mute hint for all capturer streams in the current audio session. It dose not mute the recording
     * stream, only affects internal processing strategy.
     *
     * @param { boolean } mute - Use true if application recording stream muted by application if self.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800103 - Operation not permit at current state, there is no audio capturer running.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setCapturerMuteHint(mute: boolean): Promise<void>;

    /**
     * Subscribes to the audio session state change event, which is triggered when the audio session focus is changed.
     * This API uses an asynchronous callback to return the result.
     *
     * @param { 'audioSessionStateChanged' } type - Event type. The event **'audioSessionStateChanged'** is triggered
     *     when the audio session state is changed.
     * @param { Callback<AudioSessionStateChangedEvent> } callback - Callback used to return the audio session change
     *     information.
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
     *
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
     * Unsubscribes from the audio session state change event. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'audioSessionStateChanged' } type - Event type. The event **'audioSessionStateChanged'** is triggered
     *     when the audio session state is changed.
     * @param { Callback<AudioSessionStateChangedEvent> } [callback] - Callback used to return the audio session change
     *     information.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 20 dynamic
     */
    off(type: 'audioSessionStateChanged', callback?: Callback<AudioSessionStateChangedEvent>): void;

    /**
     * Unsubscribes to audio session deactivated event.
     *
     * @param { Callback<AudioSessionStateChangedEvent> } [callback] - Callback invoked for the audio
     *     session state change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 23 static
     */
    offAudioSessionStateChanged(callback?: Callback<AudioSessionStateChangedEvent>): void;

    /**
     * Obtains the default audio output device set by calling
     * [setDefaultOutputDevice]{@link audio.AudioSessionManager.setDefaultOutputDevice}.
     *
     * @returns { DeviceType } Device type.
     *     <br>The options are **EARPIECE**, **SPEAKER**, and **DEFAULT**.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    getDefaultOutputDevice(): DeviceType;

    /**
     * Sets the default audio output device. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > - This API applies to the following scenario: When
     * > [AudioSessionScene]{@link @ohos.multimedia.audio:audio.AudioSessionScene} is set to **VoIP**, the setting takes
     * > effect immediately after the AudioSession is activated. For non-VoIP scenarios, the setting does not take
     * > effect upon AudioSession activation. Instead, the setting applies when
     * > [StreamUsage]{@link @ohos.multimedia.audio:audio.StreamUsage} for playback is voice message, VoIP voice call,
     * > or VoIP video call. Supported devices include the earpiece, speaker, and system default device.
     * >
     * > - This API can be called at any time after an AudioSessionManager instance is created. The system records the
     * > device set by the application. However, the setting takes effect only after the AudioSession is activated. When
     * > the application starts playing, if an external device like Bluetooth headsets or wired headsets is connected,
     * > the system prioritizes audio output through the external device. Otherwise, the system uses the device set by
     * > the application.
     *
     * @param { DeviceType } deviceType - Device type.<br>The options are **EARPIECE**, **SPEAKER**, and **DEFAULT**.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800102 - Allocate memory failed. Return by promise.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    setDefaultOutputDevice(deviceType: DeviceType): Promise<void>;

    /**
     * Set the audio output device to the built-in speaker, when other audio peripherals
     * are connected, such as bluetooth headphones or wired headsets. It should be noted
     * that this interface only applies to media streams.
     * In scenarios where there are concurrent playback streams with higher priority or user
     * selects the output device through system UI, the actual output device used by
     * the application may differ from the selected one. The application can obtain currently
     * active output device by subscribing to the currentOutputDeviceChanged event.
     *
     * @param { DeviceType } deviceType - the available deviceTypes are
     *     SPEAKER: Built-in speaker
     *     DEFAULT: Restore to system default output device
     * @returns { Promise<void> } Promise used to return the result.
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
     * Subscribes to the current output device change event, which is triggered when the current output device is
     * changed. This API uses an asynchronous callback to return the result.
     *
     * @param { 'currentOutputDeviceChanged' } type - Event type. The event **'currentOutputDeviceChanged'** is
     *     triggered when the current output device is changed.
     * @param { Callback<CurrentOutputDeviceChangedEvent> } callback - Callback used to return the information about the
     *     current output device.
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
     *
     * @param { Callback<CurrentOutputDeviceChangedEvent> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800102 - Allocate memory failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onCurrentOutputDeviceChanged(callback: Callback<CurrentOutputDeviceChangedEvent>): void;

    /**
     * Unsubscribes from the current output device change event. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'currentOutputDeviceChanged' } type - Event type. The event **'currentOutputDeviceChanged'** is
     *     triggered when the current output device is changed.
     * @param { Callback<CurrentOutputDeviceChangedEvent> } [callback] - Callback used to return the information about
     *     the current output device.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     */
    off(type: 'currentOutputDeviceChanged', callback?: Callback<CurrentOutputDeviceChangedEvent>): void;

    /**
     * UnSubscribes output device change event callback.
     *
     * @param { Callback<CurrentOutputDeviceChangedEvent> } [callback] - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offCurrentOutputDeviceChanged(callback?: Callback<CurrentOutputDeviceChangedEvent>): void;

    /**
     * Obtains the available audio devices.
     *
     * @param { DeviceUsage } deviceUsage - Audio device type (classified by usage).
     * @returns { AudioDeviceDescriptors } Device list.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    getAvailableDevices(deviceUsage: DeviceUsage): AudioDeviceDescriptors;

    /**
     * Subscribes to the event indicating that the connection status of an available audio device is changed.
     *
     * @param { 'availableDeviceChange' } type - Event type. The event **'availableDeviceChange'** is triggered when the
     *     connection status of available audio devices is changed.
     * @param { DeviceUsage } deviceUsage - Audio device type (classified by usage).
     * @param { Callback<DeviceChangeAction> } callback - Callback used to return the available device change details.
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
     * Unsubscribes from the event indicating that the connection status of an available audio device is changed.
     *
     * @param { 'availableDeviceChange' } type - Event type. The event **'availableDeviceChange'** is triggered when the
     *     connection status of available audio devices is changed.
     * @param { Callback<DeviceChangeAction> } [callback] - Callback used to return the available device change details.
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
     * Selects a media input device. This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > - This API is not suitable for VoIP call recording; that is, it does not apply to scenarios where
     * > [SourceType]{@link @ohos.multimedia.audio:audio.SourceType} is **SOURCE_TYPE_VOICE_COMMUNICATION**.
     * >
     * > - Before calling this API, call [getAvailableDevices]{@link audio.AudioSessionManager.getAvailableDevices} to
     * > query the list of available input devices and select an input device from the list.
     * >
     * > - If there are recording streams of other applications with higher priorities in the system, the actual input
     * > device used will follow the input device selected by these applications.
     * >
     * > - Applications can listen for the
     * > [currentInputDeviceChanged]{@link audio.AudioSessionManager.on(type: 'currentInputDeviceChanged', callback: Callback<CurrentInputDeviceChangedEvent>)}
     * > event to find out the actual input device being used.
     *
     * @param { AudioDeviceDescriptor } inputAudioDevice - Media input device.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 6800101 - Parameter verification failed, for example,
     *     the selected device does not exist.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    selectMediaInputDevice(inputAudioDevice: AudioDeviceDescriptor): Promise<void>;

    /**
     * Obtains the media input device set by calling
     * [selectMediaInputDevice]{@link audio.AudioSessionManager.selectMediaInputDevice}. If no device has been specified
     * , the device with **deviceType** set to **INVALID** is returned.
     *
     * @returns { AudioDeviceDescriptor } Media input device.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    getSelectedMediaInputDevice(): AudioDeviceDescriptor;

    /**
     * Clears the media input device set by calling
     * [selectMediaInputDevice]{@link audio.AudioSessionManager.selectMediaInputDevice}. This API uses a promise to
     * return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    clearSelectedMediaInputDevice(): Promise<void>;

    /**
     * Sets the preferred device category for recording with Bluetooth or NearLink. This API uses a promise to return
     * the result.
     *
     * > **NOTE**
     * >
     * > - Applications can set this category before connecting to Bluetooth or NearLink devices, and the system
     * > prioritizes using the device for recording when the device is connected.
     * >
     * > - If there are recording streams of other applications with higher priorities in the system, the actual input
     * > device used will follow the input device selected by these applications.
     * >
     * > - Applications can listen for the
     * > [currentInputDeviceChanged]{@link audio.AudioSessionManager.on(type: 'currentInputDeviceChanged', callback: Callback<CurrentInputDeviceChangedEvent>)}
     * > event to find out the actual input device being used.
     *
     * @param { BluetoothAndNearlinkPreferredRecordCategory } category - Preferred device category for recording with
     *     Bluetooth or NearLink.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    setBluetoothAndNearlinkPreferredRecordCategory(category: BluetoothAndNearlinkPreferredRecordCategory): Promise<void>;

    /**
     * Obtains the preferred device category for recording with Bluetooth or NearLink, which is set by calling
     * [setBluetoothAndNearlinkPreferredRecordCategory]{@link audio.AudioSessionManager.setBluetoothAndNearlinkPreferredRecordCategory}
     * .
     *
     * @returns { BluetoothAndNearlinkPreferredRecordCategory } Preferred device category for recording with Bluetooth
     *     or NearLink.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, System error.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 21 dynamic
     * @since 24 static
     */
    getBluetoothAndNearlinkPreferredRecordCategory(): BluetoothAndNearlinkPreferredRecordCategory;

    /**
     * Subscribes to the current input device change event, which is triggered when the current input device is changed.
     *
     * @param { 'currentInputDeviceChanged' } type - Event type. The event **'currentInputDeviceChanged'** is triggered
     *     when the current input device is changed.
     * @param { Callback<CurrentInputDeviceChangedEvent> } callback - Callback used to return the information about the
     *     current input device.
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
     * Unsubscribes from the current input device change event.
     *
     * @param { 'currentInputDeviceChanged' } type - Event type. The event **'currentInputDeviceChanged'** is triggered
     *     when the current input device is changed.
     * @param { Callback<CurrentInputDeviceChangedEvent> } [callback] - Callback used to return the information about
     *     the current input device.
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
     * Enables mute suggestion notifications for mixed playback.
     *
     * Typically, when the audio mixing mode is used, if two applications plays audio at the same time, their audio
     * streams are mixed. In certain scenarios (such as games or broadcasts), applications can mute their own audio to
     * provide a better user experience.
     *
     * If this feature is enabled, mute and unmute suggestions will be sent through the
     * [AudioSessionStateChangedEvent]{@link @ohos.multimedia.audio:audio.AudioSessionStateChangedEvent} callback after
     * the audio session state change event is subscribed to. Receiving the muted suggestion indicates that another
     * application starts to play audio, and the played audio and the audio of this application cannot be mixed.
     *
     * This feature can be used only by audio sessions for which
     * [AudioSessionScene]{@link @ohos.multimedia.audio:audio.AudioSessionScene} has been set and the
     * **CONCURRENCY_MIX_WITH_OTHERS** mode has been activated. This feature takes effect only once when the audio
     * session is activated. You need to enable it again before each activation of the audio session.
     *
     * For details, see
     * [Enabling Mute Suggestion Notifications for Mixed Playback](docroot://media/audio/audio-session-management.md#enabling-mute-suggestion-notifications-for-mixed-playback)
     * .
     *
     * @param { boolean } enable - Whether to enable mute suggestion notifications for mixed playback. **true** to
     *     enable, **false** otherwise.
     * @throws { BusinessError } 6800103 - Function is called without setting {@link #AudioSessionScene} or
     *     called after audio session activation.
     * @throws { BusinessError } 6800301 - Audio client call audio service error, system internal error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    enableMuteSuggestionWhenMixWithOthers(enable: boolean): void;

    /**
     * Check whether any other application is currently playing audio of the four media types: **MUSIC**, **MOVIE**,
     * **AUDIOBOOK**, and **GAME**. Audio sessions that have activated these media types will also be checked.
     *
     * @returns { boolean } Whether another application is playing audio of certain media types. **true** means yes;
     *     **false** otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isOtherMediaPlaying(): boolean;

    /**
     * Sets audio session behavior parameters. (Multiple flags can be combined.)
     *
     * > **NOTE**
     * >
     * > If this API is called while an audio session is active, you must call the
     * > [activateAudioSession]{@link @ohos.multimedia.audio:audio.AudioSessionManager.activateAudioSession} API again
     * > for the settings to take effect.
     *
     * @param { int } behavior - Specifies the audio session behavior.<br>This can be a single flag or a bitwise OR
     *     combination of multiple flags.<br>For details about the supported audio session behaviors, see
     *     [AudioSessionBehaviorFlags]{@link @ohos.multimedia.audio:audio.AudioSessionBehaviorFlags}.
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
   * This interface implements audio volume management.
   *
   * Before calling any API in AudioVolumeManager, you must use
   * [getVolumeManager]{@link @ohos.multimedia.audio:audio.AudioManager.getVolumeManager} to obtain an
   * AudioVolumeManager instance.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this interface are supported since API version 9.
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
     *
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
     *
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
     *
     * @param { string } networkId - Distributed deice net work id
     * @returns { VolumeGroupInfos } Volume group info list.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getVolumeGroupInfosSync(networkId: string): VolumeGroupInfos;

    /**
     * Obtains a VolumeGroupManager instance. This API uses an asynchronous callback to return the result.
     *
     * @param { int } groupId - Volume group ID. The default value is **DEFAULT_VOLUME_GROUP_ID**.
     * @param { AsyncCallback<AudioVolumeGroupManager> } callback - Callback used to return the result. If the operation
     *     is successful, **err** is **undefined** and **data** is the VolumeGroupManager instance obtained; otherwise,
     *     **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getVolumeGroupManager(groupId: int, callback: AsyncCallback<AudioVolumeGroupManager>): void;
    /**
     * Obtains a VolumeGroupManager instance. This API uses a promise to return the result.
     *
     * @param { int } groupId - Volume group ID. The default value is **DEFAULT_VOLUME_GROUP_ID**.
     * @returns { Promise<AudioVolumeGroupManager> } Promise used to return the VolumeGroupManager instance.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getVolumeGroupManager(groupId: int): Promise<AudioVolumeGroupManager>;
    /**
     * Obtains a VolumeGroupManager instance. This API returns the result synchronously.
     *
     * @param { int } groupId - Volume group ID. The default value is **DEFAULT_VOLUME_GROUP_ID**.
     * @returns { AudioVolumeGroupManager } VolumeGroupManager instance.
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
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { int } uid - App's uid.
     * @returns { Promise<int> } Promise used to return the application's volume percentage.
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
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { int } uid - App's uid.
     * @param { int } volume - Volume to set the application's volume percentage. The value range is from 0 to 100.
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
     * @returns { int } Returns the volume percentage, which is an interger with the range [0, 100].
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    getSystemVolumePercentage(volumeType: AudioVolumeType): int;

    /**
     * Sets the system volume percentage, using an integer ranging from minimum system volume percentage to 100.
     * The volume percentage corresponds to volume levels, with each level tied to a specific percentage.
     * When the volume level changes, the volume percentage adjusts accordingly and is mapped within the range of volume
     * levels.
     * Zero volume is mapped to 0, and the maximum volume is mapped to 100%. Intermediate volume levels are evenly
     * distributed beween 1 and 99. When the volume percentage changes, the volume level changes accordingly.
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { AudioVolumeType } volumeType - Audio volume type to set.
     * @param { int } percentage - Percentage to set. It must be an integer with the range
     *     from minimum value getted by {@link #getMinSystemVolumePercentage} to 100.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed, including
     *     volumeType or percentage param begin out of range.
     * @throws { BusinessError } 6800301 - Crash or blocking occurs in system process.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    setSystemVolumePercentage(volumeType: AudioVolumeType, percentage: int): Promise<void>;

    /**
     * Gets the minimum system volume percentage application can set for specified volume type.
     *
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
     *
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
     *
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
     * Obtains the volume of the application. (The volume range is 0 to 100.) This API uses a promise to return the
     * result.
     *
     * @returns { Promise<int> } Promise used to return the application volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @atomicservice [since 23]
     * @since 19 dynamic
     * @since 23 static
     */
    getAppVolumePercentage(): Promise<int>;

    /**
     * Sets the volume (within a range of 0 to 100) for the application. This API uses a promise to return the result.
     *
     * @param { int } volume - Volume to set.
     * @returns { Promise<void> } Promise that returns no value.
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
     *
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
     *
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
     * Subscribes to the system volume change event, which is triggered when the system volume is changed. This API uses
     * an asynchronous callback to return the result.
     *
     * @param { 'volumeChange' } type - Event type. The event **'volumeChange'** is triggered when the system volume is
     *     changed.
     * @param { Callback<VolumeEvent> } callback - Callback used to return the changed volume.
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
     * Unsubscribes from the system volume change event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'volumeChange' } type - Event type. The event **'volumeChange'** is triggered when the system volume is
     *     changed.
     * @param { Callback<VolumeEvent> } callback - Callback used to return the changed volume.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters missing;
     *     2.Incorrect parameter types.
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
     *
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
     *
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
     *
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
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { Callback<VolumeEvent> } callback - Callback used to obtain the invoking volume change event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    offAppVolumeChangeForUid(callback?: Callback<VolumeEvent>): void;

    /**
     * Subscribes to the application-level volume change event of the application (triggered when the application-level
     * volume is changed). This API uses an asynchronous callback to return the result.
     *
     * @param { 'appVolumeChange' } type - Event type. The event **'appVolumeChange'** is triggered when the application
     *     -level volume is changed.
     * @param { Callback<VolumeEvent> } callback - Callback used to return the changed volume.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     */
    on(type: 'appVolumeChange', callback: Callback<VolumeEvent>): void;

    /**
     * Listens for app volume change events. The app volume may changed by your called {@link setAppVolumePercentage}
     * or other system settings.
     *
     * @param { Callback<VolumeEvent> } callback - Callback used to get the app volume change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    onAppVolumeChange(callback: Callback<VolumeEvent>): void;

    /**
     * Unsubscribes from the application-level volume change event of the application. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { 'appVolumeChange' } type - Event type. The event **'appVolumeChange'** is triggered when the application
     *     -level volume is changed.
     * @param { Callback<VolumeEvent> } callback - Callback used to return the changed volume.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     */
    off(type: 'appVolumeChange', callback?: Callback<VolumeEvent>): void;

    /**
     * Unsubscribes to the app volume change events..
     *
     * @param { Callback<VolumeEvent> } callback - Callback used to obtain the invoking volume change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    offAppVolumeChange(callback?: Callback<VolumeEvent>): void;

    /**
     * Subscribes to active volume type changes.
     *
     * @param { 'activeVolumeTypeChange' } type - Type of the event to listen for.
     *     Only the activeVolumeTypeChange event is supported.
     * @param { Callback<AudioVolumeType> } callback - Callback used to return the active volume type.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     */
    on(type: 'activeVolumeTypeChange', callback: Callback<AudioVolumeType>): void;

    /**
     * Subscribes to active volume type changes.
     *
     * @param { Callback<AudioVolumeType> } callback Callback used to return the active volume type.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    onActiveVolumeTypeChange(callback: Callback<AudioVolumeType>): void;

    /**
     * Unsubscribes from active volume type changes.
     *
     * @param { 'activeVolumeTypeChange' } type - Type of the event to unregister.
     *     Only the activeVolumeTypeChange event is supported.
     * @param { Callback<AudioVolumeType> } [callback] - Callback used to return the active volume type.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 20 dynamic
     */
    off(type: 'activeVolumeTypeChange', callback?: Callback<AudioVolumeType>): void;

    /**
     * Unsubscribes from active volume type changes.
     *
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
     *
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
     *
     * @param { Callback<VolumeEvent> } callback - Callback used to return the system volume percentage change event.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    offVolumePercentageChange(callback?: Callback<VolumeEvent>): void;

    /**
     * Obtains the volume of a volume type.
     *
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
     *
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
     *
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
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { boolean } The mute status of the volume type. The value true
     *     means that the volume type is muted, and false means the opposite.
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
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { int } volumeLevel - Volume level.
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
     *
     * @param { 'systemVolumeChange' } type - Type of the event to listen for.
     *     Only the systemVolumeChange event is supported.
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
     *
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
     *
     * @param { 'systemVolumeChange' } type - Type of the event to be unregistered.
     *     Only the systemVolumeChange event is supported.
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
     *
     * @param { Callback<VolumeEvent> } [callback] Callback used to obtain the invoking volume change event.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 static
     */
    offSystemVolumeChange(callback?: Callback<VolumeEvent>): void;
    
    /**
     * Subscribes to system volume change events.
     * When the system volume for the target filter changes, registered clients will receive a callback.
     * 
     * @param { SystemVolumeFilter } filter - Filter for system volume changes.
     * @param { Callback<VolumeEvent> } callback - Callback to receive information about
     *     the system volume.
     * @throws { BusinessError } 202 - Not a system app.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
    */
    onSystemVolumeChangeByFilter(filter: SystemVolumeFilter, callback: Callback<VolumeEvent>): void;

    /**
     * Unsubscribes from the system volume change events.
     *
     * @param { Callback<VolumeEvent> } [callback] - Callback used in the subscription.
     * @throws { BusinessError } 202 - Not system app.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
    */
    offSystemVolumeChangeByFilter(callback?: Callback<VolumeEvent>): void;

    /**
     * Obtains the volume of a specified audio stream.
     *
     * @param { StreamUsage } streamUsage - Audio stream for which the volume is to be obtained.
     * @returns { int } Volume.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @atomicservice [since 23]
     * @since 20 dynamic
     * @since 23 static
     */
    getVolumeByStream(streamUsage: StreamUsage): int;

    /**
     * Obtains the minimum volume of a specified audio stream.
     *
     * @param { StreamUsage } streamUsage - Audio stream for which the minimum volume is to be obtained.
     * @returns { int } Volume.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @atomicservice [since 23]
     * @since 20 dynamic
     * @since 23 static
     */
    getMinVolumeByStream(streamUsage: StreamUsage): int;

    /**
     * Obtains the maximum volume of a specified audio stream.
     *
     * @param { StreamUsage } streamUsage - Audio stream for which the maximum volume is to be obtained.
     * @returns { int } Volume.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @atomicservice [since 23]
     * @since 20 dynamic
     * @since 23 static
     */
    getMaxVolumeByStream(streamUsage: StreamUsage): int;

    /**
     * Checks whether a specified audio stream is muted.
     *
     * @param { StreamUsage } streamUsage - Audio stream to check.
     * @returns { boolean } Check result for whether the audio stream is muted. **true** if muted, **false** otherwise.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     * @since 23 static
     */
    isSystemMutedForStream(streamUsage: StreamUsage): boolean;

    /**
     * Obtains the volume (in dB) calculated by the system based on the audio stream, volume level, and device type.
     *
     * @param { StreamUsage } streamUsage - Audio stream.
     * @param { int } volumeLevel - Volume level.
     * @param { DeviceType } device - Device type.
     * @returns { double } Volume of the audio stream, in dB.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     * @since 23 static
     */
    getVolumeInUnitOfDbByStream(streamUsage: StreamUsage, volumeLevel: int, device: DeviceType): double;

    /**
     * Obtains system supported volume types.
     *
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
     *
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
     *
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
     * Subscribes to the system audio volume change event, which is triggered when the system audio volume is changed.
     * This API uses an asynchronous callback to return the result.
     *
     * @param { 'streamVolumeChange' } type - Event type. The event **'streamVolumeChange'** is triggered when the
     *     system audio volume is changed.
     * @param { StreamUsage } streamUsage - Audio stream usage.
     * @param { Callback<StreamVolumeEvent> } callback - Callback used to return the changed volume.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     */
    on(type: 'streamVolumeChange', streamUsage: StreamUsage, callback: Callback<StreamVolumeEvent>): void;

    /**
     * Listens for stream volume change events. This method uses a callback to get volume change events.
     *
     * @param { StreamUsage } streamUsage - StreamUsage to be listened.
     * @param { Callback<StreamVolumeEvent> } callback - Callback used to get the stream volume change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    onStreamVolumeChange(streamUsage: StreamUsage, callback: Callback<StreamVolumeEvent>): void;

    /**
     * Unsubscribes from the system audio volume change event, which is triggered when the system audio volume is
     * changed. This API uses an asynchronous callback to return the result.
     *
     * @param { 'streamVolumeChange' } type - Event type. The event **'volumeChange'** is triggered when the system
     *     volume is changed.
     * @param { Callback<StreamVolumeEvent> } [callback] - Callback used to return the changed volume.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     */
    off(type: 'streamVolumeChange', callback?: Callback<StreamVolumeEvent>): void;

    /**
     * Unsubscribes to the stream volume change events.
     *
     * @param { Callback<StreamVolumeEvent> } [callback] Callback used to obtain the invoking volume change event.
     *     If there is no callback parameter, all callbacks will be unregistered.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    offStreamVolumeChange(callback?: Callback<StreamVolumeEvent>): void;

    /**
     * Interface for forcibly setting the volume type by pressing the volume key.
     *
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
     * Obtains the Volume information of the active audio streams.
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
   * This interface implements volume management for an audio group.
   *
   * Before calling any API in AudioVolumeGroupManager, you must use
   * [getVolumeGroupManager]{@link @ohos.multimedia.audio:audio.AudioVolumeManager.getVolumeGroupManager(groupId: int, callback: AsyncCallback<AudioVolumeGroupManager>)}
   * to obtain an AudioVolumeGroupManager instance.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this interface are supported since API version 9.
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AudioVolumeGroupManager {
    /**
     * Sets the volume for a stream. This method uses an asynchronous callback to return the result.
     *
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
     *
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
     *
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
     *
     * @param { int } uid - The target uid's active volume type or
     *     0 which means the global active volume type.
     * @returns { AudioVolumeType } Current active volume type.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    getActiveVolumeTypeSync(uid: int): AudioVolumeType;

    /**
     * Obtains the volume level of a stream. This API uses an asynchronous callback to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the stream volume level obtained; otherwise, **err** is an error
     *     object. The volume range of a specified stream can be obtained by calling
     *     [getMinVolume]{@link audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     and
     *     [getMaxVolume]{@link audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     .
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getVolumeByStream
     */
    getVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>): void;
    /**
     * Obtains the volume level of a stream. This API uses a promise to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { Promise<int> } Promise used to return the stream volume level. The volume range of a specified stream
     *     can be obtained by calling
     *     [getMinVolume]{@link audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     and
     *     [getMaxVolume]{@link audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     .
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getVolumeByStream
     */
    getVolume(volumeType: AudioVolumeType): Promise<int>;
    /**
     * Obtains the volume level of a stream. This API returns the result synchronously.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { int } Volume level of the stream. The volume range of a specified stream can be obtained by calling
     *     [getMinVolume]{@link audio.AudioVolumeGroupManager.getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     and
     *     [getMaxVolume]{@link audio.AudioVolumeGroupManager.getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>)}
     *     .
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
     * Obtains the minimum volume level of a stream. This API uses an asynchronous callback to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the minimum stream volume level obtained; otherwise, **err** is an
     *     error object.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getMinVolumeByStream
     */
    getMinVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>): void;
    /**
     * Obtains the minimum volume level of a stream. This API uses a promise to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { Promise<int> } Promise used to return the minimum volume level.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getMinVolumeByStream
     */
    getMinVolume(volumeType: AudioVolumeType): Promise<int>;
    /**
     * Obtains the minimum volume level of a stream. This API returns the result synchronously.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { int } Minimum volume level.
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
     * Obtains the maximum volume level of a stream. This API uses an asynchronous callback to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the maximum stream volume level obtained; otherwise, **err** is an
     *     error object.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getMaxVolumeByStream
     */
    getMaxVolume(volumeType: AudioVolumeType, callback: AsyncCallback<int>): void;
    /**
     * Obtains the maximum volume level of a stream. This API uses a promise to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { Promise<int> } Promise used to return the maximum volume level.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#getMaxVolumeByStream
     */
    getMaxVolume(volumeType: AudioVolumeType): Promise<int>;
    /**
     * Obtains the maximum volume level of a stream. This API returns the result synchronously.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { int } Maximum volume level.
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
     * Mutes a stream. This method uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { boolean } mute - Mute status to set. The value true means to mute the stream, and false means the
     *     opposite.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    mute(volumeType: AudioVolumeType, mute: boolean, callback: AsyncCallback<void>): void;
    /**
     * Mutes a stream. This method uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio stream type.
     * @param { boolean } mute - Mute status to set. The value true means to mute the stream, and false means the
     *     opposite.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    mute(volumeType: AudioVolumeType, mute: boolean): Promise<void>;

    /**
     * Checks whether a stream is muted. This API uses an asynchronous callback to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true** if the stream is muted or **false** if not muted; otherwise
     *     , **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#isSystemMutedForStream
     */
    isMute(volumeType: AudioVolumeType, callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether a stream is muted. This API uses a promise to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { Promise<boolean> } Promise used to return the result, indicating whether the stream is muted. **true**
     *     if muted, **false** otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 20
     * @useinstead ohos.multimedia.audio.AudioVolumeManager#isSystemMutedForStream
     */
    isMute(volumeType: AudioVolumeType): Promise<boolean>;
    /**
     * Checks whether a stream is muted. This API returns the result synchronously.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @returns { boolean } Check result for whether the stream is muted. **true** if muted, **false** otherwise.
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
     * Sets the ringer mode. This method uses an asynchronous callback to return the result.
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
     * Sets the ringer mode. This method uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioRingMode } mode - Ringer mode.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    setRingerMode(mode: AudioRingMode): Promise<void>;

    /**
     * Obtains the ringer mode. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<AudioRingMode> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the ringer mode obtained; otherwise, **err** is an error
     *     object.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getRingerMode(callback: AsyncCallback<AudioRingMode>): void;
    /**
     * Obtains the ringer mode. This API uses a promise to return the result.
     *
     * @returns { Promise<AudioRingMode> } Promise used to return the ringer mode.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getRingerMode(): Promise<AudioRingMode>;
    /**
     * Obtains the ringer mode. This API returns the result synchronously.
     *
     * @returns { AudioRingMode } Ringer mode.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getRingerModeSync(): AudioRingMode;

    /**
     * Subscribes to the ringer mode change event, which is triggered when the
     * [AudioRingMode]{@link @ohos.multimedia.audio:audio.AudioRingMode} changes. This API uses an asynchronous callback
     * to return the result.
     *
     * @param { 'ringerModeChange' } type - Event type. The event **'ringerModeChange'** is triggered when the ringer
     *     mode is changed.
     * @param { Callback<AudioRingMode> } callback - Callback used to return the changed ringer mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamic
     */
    on(type: 'ringerModeChange', callback: Callback<AudioRingMode>): void;

    /**
     * Listens for ringer mode change events. This method uses a callback to get ringer mode changes.
     *
     * @param { Callback<AudioRingMode> } callback - Callback used to get the updated ringer mode.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    onRingerModeChange(callback: Callback<AudioRingMode>): void;

    /**
     * Unsubscribes from the ringer mode change event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'ringerModeChange' } type - Event type. The event **'ringerModeChange'** is triggered when the ringer
     *     mode is changed.
     * @param { Callback<AudioRingMode> } callback - Callback used to return the changed ringer mode.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 18 dynamic
     */
    off(type: 'ringerModeChange', callback?: Callback<AudioRingMode>): void;

    /**
     * Unsubscribes to the ringer mode state change events.
     *
     * @param { Callback<AudioRingMode> } callback - Callback used to get the updated ringer mode.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    offRingerModeChange(callback?: Callback<AudioRingMode>): void;

    /**
     * Mutes or unmutes the microphone. This method uses an asynchronous callback to return the result.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { boolean } mute - Mute status to set. The value true means to mute the microphone, and false means the opposite.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    setMicrophoneMute(mute: boolean, callback: AsyncCallback<void>): void;
    /**
     * Mutes or unmutes the microphone. This method uses a promise to return the result.
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { boolean } mute - Mute status to set. The value true means to mute the microphone, and false means the opposite.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    setMicrophoneMute(mute: boolean): Promise<void>;

    /**
     * Mutes or unmutes the microphone. This method uses a promise to return the result.
     *
     * @permission ohos.permission.MANAGE_AUDIO_CONFIG
     * @param { boolean } mute - Mute status to set. The value true means to mute the microphone, and false means the
     *     opposite.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setMicMute(mute: boolean): Promise<void>;

    /**
     * Mutes or unmutes the microphone. This method uses a promise to return the result.
     *
     * @permission ohos.permission.MICROPHONE_CONTROL
     * @param { boolean } mute - Mute status to set. The value true means to mute the microphone, and false means the
     *     opposite.
     * @param { PolicyType } type - Mute status to set. This value represents the caller's type such as EDM or privacy.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters missing.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setMicMutePersistent(mute: boolean, type: PolicyType): Promise<void>;

    /**
     * Checks whether the persistent microphone status is muted.
     *
     * @permission ohos.permission.MICROPHONE_CONTROL
     * @returns { boolean } Returns microphone persistent mute status.
     *     true: The persistent mic mute is enabled in the current system.
     *     false: The persistent mic mute is disabled in the current system.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    isPersistentMicMute(): boolean;

    /**
     * Checks whether the microphone is muted. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true** if the microphone is muted or **false** if not muted;
     *     otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    isMicrophoneMute(callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether the microphone is muted. This API uses a promise to return the result.
     *
     * @returns { Promise<boolean> } Promise used to return the result, indicating whether the microphone is muted.
     *     **true** if muted, **false** otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    isMicrophoneMute(): Promise<boolean>;
    /**
     * Checks whether the microphone is muted. This API returns the result synchronously.
     *
     * @returns { boolean } Check result for whether the microphone is muted. **true** if muted, **false** otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    isMicrophoneMuteSync(): boolean;

    /**
     * Subscribes to the microphone state change event, which is triggered when the microphone state is changed. This
     * API uses an asynchronous callback to return the result.
     *
     * Currently, when multiple AudioManager instances are used in a single process, only the subscription of the last
     * instance takes effect, and the subscription of other instances is overwritten (even if the last instance does not
     * initiate a subscription). Therefore, you are advised to use a single AudioManager instance.
     *
     * @param { 'micStateChange' } type - Event type. The event **'micStateChange'** is triggered when the microphone
     *     state is changed.
     * @param { Callback<MicStateChangeEvent> } callback - Callback used to return the changed microphone state.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamic
     */
    on(type: 'micStateChange', callback: Callback<MicStateChangeEvent>): void;

    /**
     * Listens for system microphone state change events. This method uses a callback to get microphone change events.
     *
     * @param { Callback<MicStateChangeEvent> } callback - Callback used to get the system microphone state change
     *     event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    onMicStateChange(callback: Callback<MicStateChangeEvent>): void;

    /**
     * Unsubscribes from the microphone state change event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'micStateChange' } type - Event type. The event **'micStateChange'** is triggered when the microphone
     *     state is changed.
     * @param { Callback<MicStateChangeEvent> } callback - Callback used to return the changed microphone state.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters missing;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 12 dynamic
     */
    off(type: 'micStateChange', callback?: Callback<MicStateChangeEvent>): void;

    /**
     * Unsubscribes to the microphone state change events.
     *
     * @param { Callback<MicStateChangeEvent> } callback - Callback used to get the system microphone state change
     *     event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 static
     */
    offMicStateChange(callback?: Callback<MicStateChangeEvent>): void;

    /**
     * Checks whether the fixed volume mode is enabled. When the fixed volume mode is enabled, the volume cannot be
     * adjusted. This API returns the result synchronously.
     *
     * @returns { boolean } Check result for whether the fixed volume mode is enabled. **true** if enabled, **false**
     *     otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    isVolumeUnadjustable(): boolean;

    /**
     * Adjusts system volume by step, volume type is decided by system.
     * This method uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { VolumeAdjustType } adjustType - Volume adjustment type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @throws { BusinessError } 6800301 - System error. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    adjustVolumeByStep(adjustType: VolumeAdjustType, callback: AsyncCallback<void>): void;
    /**
     * Adjusts system volume by step, volume type is decided by system.
     * This method uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { VolumeAdjustType } adjustType - Volume adjustment type.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    adjustVolumeByStep(adjustType: VolumeAdjustType): Promise<void>;

    /**
     * Adjusts system volume by step for target volume type.
     * This method uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { VolumeAdjustType } adjustType - Volume adjustment type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @throws { BusinessError } 6800301 - System error. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    adjustSystemVolumeByStep(volumeType: AudioVolumeType, adjustType: VolumeAdjustType, callback: AsyncCallback<void>): void;
    /**
     * Adjusts system volume by step for target volume type.
     * This method uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_NOTIFICATION_POLICY
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { VolumeAdjustType } adjustType - Volume adjustment type.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    adjustSystemVolumeByStep(volumeType: AudioVolumeType, adjustType: VolumeAdjustType): Promise<void>;

    /**
     * Obtains the volume gain. This API uses an asynchronous callback to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { int } volumeLevel - Volume level.
     * @param { DeviceType } device - Device type.
     * @param { AsyncCallback<double> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the volume gain obtained; otherwise, **err** is an error object.
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
     * Obtains the volume gain. This API uses a promise to return the result.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { int } volumeLevel - Volume level.
     * @param { DeviceType } device - Device type.
     * @returns { Promise<double> } Promise used to return the volume gain (in dB).
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
     * Obtains the volume gain. This API returns the result synchronously.
     *
     * @param { AudioVolumeType } volumeType - Audio volume type.
     * @param { int } volumeLevel - Volume level.
     * @param { DeviceType } device - Device type.
     * @returns { double } Volume gain (in dB).
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
     * Obtains the maximum amplitude (in the range [0, 1]) of the audio stream for an input device. This API uses a
     * promise to return the result.
     *
     * @param { AudioDeviceDescriptor } inputDevice - Descriptor of the target device.
     * @returns { Promise<double> } Promise used to return the maximum amplitude, which is in the range [0, 1].
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 12 dynamic
     * @since 23 static
     */
    getMaxAmplitudeForInputDevice(inputDevice: AudioDeviceDescriptor): Promise<double>;
    /**
     * Obtains the maximum amplitude (in the range [0, 1]) of the audio stream for an output device. This API uses a
     * promise to return the result.
     *
     * @param { AudioDeviceDescriptor } outputDevice - Descriptor of the target device.
     * @returns { Promise<double> } Promise used to return the maximum amplitude, which is in the range [0, 1].
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @throws { BusinessError } 6800301 - System error. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 12 dynamic
     * @since 23 static
     */
    getMaxAmplitudeForOutputDevice(outputDevice: AudioDeviceDescriptor): Promise<double>;
  }

  /**
   * Enumerates the spatial audio source type.
   *
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum SpatialAudioSourceType {
    /**
     * stereo source type.
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    SPATIAL_AUDIO_SOURCE_TYPE_STEREO = 0,

    /**
     * audio vivid source type.
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    SPATIAL_AUDIO_SOURCE_TYPE_AUDIO_VIVID = 1,

    /**
     * multichannel source type.
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
   *
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface AudioSpatialEnabledStateForDevice {
    /**
     * Audio device description.
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    deviceDescriptor: AudioDeviceDescriptor;
    /**
     * Spatialization or Head Tracking or Adaptive Spatial Rendering enable state.
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    enabled: boolean;
  }

  /**
   * This interface implements spatial audio management.
   *
   * Before calling any API in AudioSpatializationManager, you must use
   * [getSpatializationManager]{@link @ohos.multimedia.audio:audio.AudioManager.getSpatializationManager} to obtain an
   * AudioSpatializationManager instance.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this interface are supported since API version 18.
   *
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @since 18 dynamic
   * @since 23 static
   */
  interface AudioSpatializationManager {
    /**
     * Checks whether spatialization is supported by system.
     *
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
     *
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @returns { boolean } Whether spatialization is supported by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isSpatializationSupportedForDevice(deviceDescriptor: AudioDeviceDescriptor): boolean;

    /**
     * Checks whether head tracking is supported by system.
     *
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
     *
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @returns { boolean } Whether head tracking is supported by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isHeadTrackingSupportedForDevice(deviceDescriptor: AudioDeviceDescriptor): boolean;

    /**
     * Sets the spatialization enabled or disabled. This method uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enable - Spatialization enable state.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by callback.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
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
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enable - Spatialization enable state.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by promise.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
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
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @param { boolean } enabled - Spatialization enable state.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by promise.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setSpatializationEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean): Promise<void>;

    /**
     * Checks whether the spatialization is enabled.
     *
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
     *
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @returns { boolean } Whether the spatialization is enabled by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
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
     *
     * @param { 'spatializationEnabledChange' } type - Type of the event to listen for.
     * @param { Callback<boolean> } callback - Callback used to get the spatialization enable state.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
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
     *
     * @param { 'spatializationEnabledChangeForAnyDevice' } type - Type of the event to listen for.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the spatialization enable
     *     state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'spatializationEnabledChangeForAnyDevice', callback: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Subscribes to the spatialization enable state change events by the specified device.
     * When the spatialization enable state changes, registered clients will receive the callback.
     *
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
     *
     * @param { 'spatializationEnabledChange' } type - Type of the event to listen for.
     * @param { Callback<boolean> } callback - Callback used to get the spatialization enable state.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
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
     *
     * @param { 'spatializationEnabledChangeForAnyDevice' } type - Type of the event to listen for.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the spatialization enable
     *     state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'spatializationEnabledChangeForAnyDevice', callback?: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Unsubscribes to the spatialization enable state change events by the specified device.
     *
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the
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
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enable - Head tracking enable state.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by callback.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
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
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enable - Head tracking enable state.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by promise.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
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
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @param { boolean } enabled - Head tracking enable state.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied. Return by promise.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setHeadTrackingEnabled(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean): Promise<void>;

    /**
     * Checks whether the head tracking is enabled.
     *
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
     *
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device description.
     * @returns { boolean } Whether the head tracking is enabled by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
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
     *
     * @param { 'headTrackingEnabledChange' } type - Type of the event to listen for.
     * @param { Callback<boolean> } callback - Callback used to get the head tracking enable state.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
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
     *
     * @param { 'headTrackingEnabledChangeForAnyDevice' } type - Type of the event to listen for.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the head tracking enable
     *     state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     */
    on(type: 'headTrackingEnabledChangeForAnyDevice', callback: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Subscribes to the head tracking enable state change events by the specified device.
     * When the head tracking enable state changes, registered clients will receive the callback.
     *
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
     *
     * @param { 'headTrackingEnabledChange' } type - Type of the event to listen for.
     * @param { Callback<boolean> } callback - Callback used to get the head tracking enable state.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
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
     *
     * @param { 'headTrackingEnabledChangeForAnyDevice' } type - Type of the event to listen for.
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get the head tracking enable
     *     state by the specified device.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     */
    off(type: 'headTrackingEnabledChangeForAnyDevice', callback?: Callback<AudioSpatialEnabledStateForDevice>): void;

    /**
     * Unsubscribes to the head tracking enable state change events by the specified device.
     *
     * @param { Callback<AudioSpatialEnabledStateForDevice> } callback - Callback used to get
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
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioSpatialDeviceState } spatialDeviceState - Spatial device state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    updateSpatialDeviceState(spatialDeviceState: AudioSpatialDeviceState): void;

    /**
     * Set spatialization rendering scene type.
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioSpatializationSceneType } spatializationSceneType - Spatialization scene type.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setSpatializationSceneType(spatializationSceneType: AudioSpatializationSceneType): void;

    /**
     * Get spatialization rendering scene type.
     *
     * @returns { AudioSpatializationSceneType } Current spatialization rendering scene type.
     * @throws { BusinessError } 202 - Not system App.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getSpatializationSceneType(): AudioSpatializationSceneType;

    /**
     * Checks whether spatial audio rendering is enabled for the current device. This API returns the result
     * synchronously.
     *
     * @returns { boolean } Check result for whether spatial audio rendering is enabled. **true** if enabled, **false**
     *     otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     * @since 23 static
     */
    isSpatializationEnabledForCurrentDevice(): boolean;

    /**
     * Subscribes to the spatial audio rendering status change event of the current device. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { 'spatializationEnabledChangeForCurrentDevice' } type - Event type. The event
     *     **'spatializationEnabledChangeForCurrentDevice'** is triggered when the spatial audio rendering status is
     *     changed.
     * @param { Callback<boolean> } callback - Callback used to return the result, indicating whether spatial audio
     *     rendering is enabled. **true** if enabled, **false** otherwise.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     */
    on(type: 'spatializationEnabledChangeForCurrentDevice', callback: Callback<boolean>): void;

    /**
     * Subscribes to the spatialization enable state change events by the current device.
     * When the spatialization enable state changes, registered clients will receive the callback.
     *
     * @param { Callback<boolean> } callback - Callback used to get the spatialization enable state.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 23 static
     */
    onSpatializationEnabledChangeForCurrentDevice(callback: Callback<boolean>): void;

    /**
     * Unsubscribes from the spatial audio rendering status change event of the current device. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { 'spatializationEnabledChangeForCurrentDevice' } type - Event type. The event
     *     **'spatializationEnabledChangeForCurrentDevice'** is triggered when the spatial audio rendering status is
     *     changed.
     * @param { Callback<boolean> } [callback] - Callback used to return the result, indicating whether spatial audio
     *     rendering is enabled. **true** if enabled, **false** otherwise.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     */
    off(type: 'spatializationEnabledChangeForCurrentDevice', callback?: Callback<boolean>): void;

    /**
     * Unsubscribes to the spatialization enable state change events by the current device.
     *
     * @param { Callback<boolean> } callback - Callback used to get the spatialization enable state.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 23 static
     */
    offSpatializationEnabledChangeForCurrentDevice(callback?: Callback<boolean>): void;

    /**
     * Sets the adaptive spatial rendering enabled or disabled by the specified device.
     * This method uses a promise to return the result.
     * When the adaptive spatial rendering is enabled, spatial audio rendering will not take effect on stereo audio.
     *
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
     * Subscribes to the adaptive spatial rendering enable state change events by the specified device.
     * When the adaptive spatial rendering enable state changes, registered clients will receive the callback.
     *
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
     * Unsubscribes to the adaptive spatial rendering enable state change events by the specified device.
     *
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
     * Gets the current spatial audio source type.
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
     * Subscribes to the spatial audio source type change events. When the current spatial audio source type changes,
     * registered clients will receive callbacks.
     *
     * @param { Callback<SpatialAudioSourceType> } callback - Callback used to
     *     receive the current spatial audio source type.
     * @throws { BusinessError } 202 - Not system App.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    onSpatialAudioSourceTypeChange(callback: Callback<SpatialAudioSourceType>): void;

    /**
     * Unsubscribes from the spatial audio source type change events.
     *
     * @param { Callback<SpatialAudioSourceType> } [callback] - Callback used to
     *     receive the current spatial audio source type change.
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
   * Volume type for audio separation effect.
   * 
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AudioSeparationVolumeType {
    /**
     * Vocal type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    VOLUME_TYPE_VOCAL = 0,
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
     *
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
     *
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { Array<AudioEffectProperty> } propertyArray - array of audio effect property to be set.
     *     Notice that only one effect property name in each effect property category should be set.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Possible causes:
     *     1. More than one effect property name of the same effect property category are in the input array.
     *     2. The input audioEffectProperties are not supported by the current device.
     *     3. The name or category of the input audioEffectProperties is incorrect.
     * @throws { BusinessError } 6800301 - System error.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    setAudioEffectProperty(propertyArray: Array<AudioEffectProperty>): void;

    /**
     * Gets current audio effect properties.
     *
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
     * Checks whether the current device supports audio separation effect in system.
     * @returns { boolean } Whether the current device supports audio separation effect.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isAudioSeparationEffectSupported(): boolean;

    /**
     * Sets audio separation effect enable or disable for specific application process,
     * or for specific audio playback stream.
     * This API uses a promise to return the result.
     * 
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { boolean } enabled - The required effect state, true for enabled, false for disabled.
     * @param { int } uid - The uid of target application process to add effect.
     *     <br>The value should be an integer.
     * @param { long } [streamId] - The id of target audio playback stream to add effect, the playback application
     *     can use {@link AudioRenderer#getAudioStreamId} to obtain it.
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
    setAudioSeparationEffectEnabled(enabled: boolean, uid: int, streamId?: long): Promise<void>;

    /**
     * Subscribes to system audio separation effect enabled state change event.
     * The audio separation effect state in system can be set by system playback controller application,
     * other applications can use this function to listen the change event.
     * 
     * @param { Callback<boolean> } callback - Callback used to listen the system audio separation effect
     *     enabled state change event.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onAudioSeparationEffectEnabledChange(callback: Callback<boolean>): void;

    /**
     * Unsubscribes from the system audio separation effect enabled state change event.
     * 
     * @param { Callback<boolean> } [callback] - The callback used in subscription function for unsubscribing.
     *     If not using this parameter, all callbacks subscribed in current process before will be unsubscribed.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offAudioSeparationEffectEnabledChange(callback?: Callback<boolean>): void;

    /**
     * Sets audio separation effect volume for specific volume type.
     * This API uses a promise to return the result.
     * 
     * @permission ohos.permission.MANAGE_SYSTEM_AUDIO_EFFECTS
     * @param { AudioSeparationVolumeType } type - The type to set volume.
     * @param { double } volume - The target volume value.
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
   * Implements audio collaborative management.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface AudioCollaborativeManager {
    /**
     * Checks whether the collaborative playback is supported by system.
     *
     * @returns { boolean } Whether the collaborative playback is supported by system.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isCollaborativePlaybackSupported(): boolean;

    /**
     * Checks whether the collaborative playback is supported for the specified device.
     *
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device descriptor to check.
     * @returns { boolean } Whether the collaborative playback is supported for the specified device.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isCollaborativePlaybackSupportedForDevice(deviceDescriptor: AudioDeviceDescriptor): boolean;

    /**
     * Enables or disables collaborative playback for the specified device.
     * Currently, only A2DP audio devices support collaborative playback.
     * If the system is using the specified device for audio output,
     * the audio will be played from both the local speaker and the specified device after this API is called.
     *
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device descriptor.
     * @param { boolean } enabled - Whether to enable or disable collaborative playback. The value true means to enable
     *     it, and false means to disable it.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Possible causes:
     *     1. The specified device is not an A2DP device.
     *     2. The specified device is not connected.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    setCollaborativePlaybackEnabledForDevice(deviceDescriptor: AudioDeviceDescriptor, enabled: boolean): Promise<void>;

    /**
     * Checks whether collaborative playback is enabled for the specified device.
     *
     * @param { AudioDeviceDescriptor } deviceDescriptor - Audio device descriptor.
     * @returns { boolean } Returns the check result. The value true means that collaborative playback is enabled for
     *     the specified device,
     *     and false means the opposite.
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
   * Provides enhanced audio device management capabilities.
   *
   * @syscap SystemCapability.Multimedia.Audio.DeviceEnhance
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AudioDeviceEnhanceManager {
    /**
     * Obtains the sound card information. This method uses a Promise to return the query result.
     *
     * @returns { Promise<SoundCardInfo> } Promise used to return the sound card information.
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
     * Queries whether the system supports the enhanced routing functions provided by this manager,
     * including selecting input and output devices for the application or audio streams.
     * Your application is advised to call this API first to confirm system support before using
     * these enhanced routing APIs. Even for the same type of host device, some models may support
     * these functions while others may not due to hardware limitations. If the system does not support
     * these enhanced routing functions, calling them will have no effect, and the system will select
     * default input/output devices for the application or audio streams instead.
     *
     * @returns { boolean } The value true indicates that the system supports enhanced routing functions.
     * @syscap SystemCapability.Multimedia.Audio.DeviceEnhance
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isEnhancedRoutingSupported(): boolean;

    /**
     * Selects the output device for your application. This setting applies to all playback streams created
     * under your application, unless a specific output device is designated for a particular stream by
     * {@link AudioDeviceEnhanceManager.selectOutputDeviceForAudioRenderer}. When application implements
     * its own UX for output device selection, it can obtain the list of available output devices through
     * {@link AudioRoutingManager.getAvailableDevices}, and use the
     * {@link AudioRoutingManager.getPreferOutputDeviceForRendererInfo} API to obtain the currently
     * selected output device. The selection will become invalid when your application exits or the selected
     * device goes offline. After your application restarts or the device comes back online, your application
     * must re-issue the selection for it to take effect. If the system does not support this function, it will
     * select a default output device for your application.
     *
     * @param { AudioDeviceDescriptor } outputDevice - Audio device descriptor in the array returned by
     *     {@link AudioRoutingManager.getAvailableDevices}.
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
     * Selects the input device for your application. This setting applies to all recording streams created
     * under your application, unless a specific input device is designated for a particular stream by
     * {@link AudioDeviceEnhanceManager.selectInputDeviceForAudioCapturer}. When application implements
     * its own UX for input device selection, it can obtain the list of available input devices through
     * {@link AudioRoutingManager.getAvailableDevices}, and use the
     * {@link AudioRoutingManager.getPreferredInputDeviceForCapturerInfo} API to obtain the currently
     * selected input device. The selection will become invalid when your application exits or the selected
     * device goes offline. After your application restarts or the device comes back online, your application
     * must re-issue the selection for it to take effect. If the system does not support this function,
     * it will select a default input device for your application.
     *
     * @param { AudioDeviceDescriptor } inputDevice - Audio device descriptor in the array returned by
     *     {@link AudioRoutingManager.getAvailableDevices}.
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
     * Selects the output device for the target AudioRenderer. Your application must ensure that the specified
     * AudioRenderer is valid. This selection only applies to the designated stream; other playback streams in
     * your application will use your application's forced selection or the system's default output device.
     * The selection will become invalid when your application exits or the selected device goes offline.
     * After your application restarts or the device comes back online, your application must re-issue the
     * selection for it to take effect. If the system does not support this function, the system will select
     * a default output device for the renderer.
     *
     * @param { AudioRenderer } renderer - The instance of AudioRenderer.
     * @param { AudioDeviceDescriptor } outputDevice - Audio device descriptor in the array returned by
     *     {@link AudioRoutingManager.getAvailableDevices}.
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
     * Selects the input device for the target AudioCapturer. Your application must ensure that the specified
     * AudioCapturer is valid. This selection only applies to the designated stream; other recording streams in
     * your application will use your application's forced selection or the system's default input device.
     * The selection will become invalid when your application exits or the selected device goes offline.
     * After your application restarts or the device comes back online, your application must re-issue the
     * selection for it to take effect. If the system does not support this function, the system will select
     * a default input device for the capturer.
     *
     * @param { AudioCapturer } capturer - The instance of AudioCapturer.
     * @param { AudioDeviceDescriptor } inputDevice - Audio device descriptor in the array returned by
     *     {@link AudioRoutingManager.getAvailableDevices}.
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
  
  /**
   * Provides audio debug management capabilities.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AudioDebuggingManager {
    /**
     * Prints full audio runtime snapshot for current app process.
     * The snapshot will contain all audio renderers, capturers, audio session information.
     * Note that the information details and format may vary from different version, it can only be used for
     * manual debugging, user should not rely on the information for actual function realization or file
     * content extraction.
     *
     * @param { int } fd - fd is a file descriptor, indicates the location that the snapshot information will be
     *     written to. If the fd is less than 0 or no writable, the snapshot information will be printed into the
     *     running log, otherwise the snapshot will be written into the file.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    printAppInfo(fd: int): void;
    /**
     * Prints full audio runtime snapshot for target audio renderer instance.
     * The snapshot will contain the stream, pipe, volume and device information.
     * Note that the information details and format may vary from different version, it can only be used for
     * manual debugging, user should not rely on the information for actual function realization or file
     * content extraction.
     *
     * @param { AudioRenderer } renderer - target audio renderer instance to print snapshot.
     * @param { int } fd - fd is a file descriptor, indicates the location that the snapshot information will be
     *     written to. If the fd is less than 0 or no writable, the snapshot information will be printed into the
     *     running log, otherwise the snapshot will be written into the file.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    printRendererInfo(renderer: AudioRenderer, fd: int): void;
    /**
     * Prints full audio runtime snapshot for target audio capturer instance.
     * The snapshot will contain the stream, pipe, volume and device information.
     * Note that the information details and format may vary from different version, it can only be used for
     * manual debugging, user should not rely on the information for actual function realization or file
     * content extraction.
     *
     * @param { AudioCapturer } capturer - target audio capturer instance to print snapshot.
     * @param { int } fd - fd is a file descriptor, indicates the location that the snapshot information will be
     *     written to. If the fd is less than 0 or no writable, the snapshot information will be printed into the
     *     running log, otherwise the snapshot will be written into the file.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    printCapturerInfo(capturer: AudioCapturer, fd: int): void;
    /**
     * Prints full audio runtime snapshot for target audio loopback instance.
     * The snapshot will contain the loopback status, device and effect information.
     * Note that the information details and format may vary from different version, it can only be used for
     * manual debugging, user should not rely on the information for actual function realization or file
     * content extraction.
     *
     * @param { AudioLoopback } loopback - target audio loopback instance to print snapshot.
     * @param { int } fd - fd is a file descriptor, indicates the location that the snapshot information will be
     *     written to. If the fd is less than 0 or no writable, the snapshot information will be printed into the
     *     running log, otherwise the snapshot will be written into the file.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    printLoopbackInfo(loopback: AudioLoopback, fd: int): void;
    /**
     * Prints full audio runtime snapshot for target audio session manager instance.
     * The snapshot will contain the session status, scene, strategy and device information.
     * Note that the information details and format may vary from different version, it can only be used for
     * manual debugging, user should not rely on the information for actual function realization or file
     * content extraction.
     *
     * @param { AudioSessionManager } session - target audio session manager instance to print snapshot.
     * @param { int } fd - fd is a file descriptor, indicates the location that the snapshot information will be
     *     written to. If the fd is less than 0 or no writable, the snapshot information will be printed into the
     *     running log, otherwise the snapshot will be written into the file.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    printSessionInfo(session: AudioSessionManager, fd: int): void;
  }

  /**
   * Connect type for device.
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  enum ConnectType {
    /**
     * Connect type for local device.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECT_TYPE_LOCAL = 1,

    /**
     * Connect type for distributed device.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    CONNECT_TYPE_DISTRIBUTED = 2
  }

  /**
   * Describes an audio volume group.
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface VolumeGroupInfo {
    /**
     * Device network id.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly networkId: string;

    /**
     * Volume group id.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly groupId: int;

    /**
     * Volume mapping group id.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly mappingId: int;

    /**
     * Volume group name.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly groupName: string;

    /**
     * Connect type of device for this group.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly type: ConnectType;
  }

  /**
   * Array of VolumeGroupInfos, which is read-only.
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  type VolumeGroupInfos = Array<Readonly<VolumeGroupInfo>>;

  /**
   * Defines an AudioRendererChangeInfo array, which is read-only.
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  type AudioRendererChangeInfoArray = Array<Readonly<AudioRendererChangeInfo>>;

  /**
   * Describes the audio renderer change event.
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AudioRendererChangeInfo {
    /**
     * Unique ID of an audio stream.
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
     * Audio renderer information.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly rendererInfo: AudioRendererInfo;

    /**
     * Audio state.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly rendererState: AudioState;

    /**
     * Audio device description.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly deviceDescriptors: AudioDeviceDescriptors;
  }

  /**
   * Defines an AudioCapturerChangeInfo array, which is read-only.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  type AudioCapturerChangeInfoArray = Array<Readonly<AudioCapturerChangeInfo>>;

  /**
   * Describes the audio capturer change event.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AudioCapturerChangeInfo {
    /**
     * Unique ID of an audio stream.
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
     * Audio capturer information.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly capturerInfo: AudioCapturerInfo;

    /**
     * Audio state.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly capturerState: AudioState;

    /**
     * Audio device information.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly deviceDescriptors: AudioDeviceDescriptors;

    /**
     * Whether the audio capturer is muted. **true** if muted, **false** otherwise.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly muted?: boolean;
  }

  /**
   * Describes sound card information.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SoundCardInfo {
    /**
     * Sound card name.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    name: string;
    /**
     * Sound card vendor.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    vendor: string;
    /**
     * Sound card model.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    model: string;
    /**
     * Sound card bus address.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    busAddress: string;
    /**
     * Sound card driver.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    driver: string;
  }

  /**
   * Describes an audio device.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  interface AudioDeviceDescriptor {
    /**
     * Device role.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly deviceRole: DeviceRole;

    /**
     * Device type.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly deviceType: DeviceType;

    /**
     * Audio device id.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly id: int;

    /**
     * Device name.
     *
     * For a Bluetooth device, you must request the ohos.permission.USE_BLUETOOTH permission.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly name: string;

    /**
     * Static MAC address of the device.
     *
     * For a Bluetooth device, you must request the ohos.permission.USE_BLUETOOTH permission.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly address: string;

    /**
     * Supported sampling rates.
     *
     * SystemCapability.Multimedia.Audio.Device
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly sampleRates: Array<int>;

    /**
     * Number of channels supported.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly channelCounts: Array<int>;

    /**
     * Supported channel masks.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly channelMasks: Array<int>;
    /**
     * Device network id
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
     * Display name of the device.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly displayName: string;

    /**
     * Supported encoding types.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly encodingTypes?: Array<AudioEncodingType>;

    /**
     * Whether the device supports spatial audio rendering. **true** if supported, **false** otherwise.
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @since 18 dynamic
     * @since 23 static
     */
    readonly spatializationSupported?: boolean;

    /**
     * Only {@link DeviceType.SPEAKER} with networkId、{@link DeviceType.REMOTE_CAST}
     * or {@link DeviceType.REMOTE_DAUDIO} has dmDeviceType which indicated deviceTypeId.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    readonly dmDeviceType?: int;

    /**
     * whether supports high-quality recording.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 21 dynamic
     * @since 24 static
     */
    readonly highQualityRecordingSupported?: boolean;

    /**
     * Model of the device.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 22 dynamic
     * @since 23 static
     */
    readonly model?: string;

    /**
     * Audio stream capabilities supported by the device.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 22 dynamic
     * @since 23 static
     */
    readonly capabilities?: Array<AudioStreamInfo>;

    /**
     * Extended information for distributed device, includes whether the device supports
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
   * Defines an [AudioDeviceDescriptor]{@link @ohos.multimedia.audio:audio.AudioDeviceDescriptor} array, which is read-
   * only.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  type AudioDeviceDescriptors = Array<Readonly<AudioDeviceDescriptor>>;

  /**
   * Enumerates the audio volume modes.
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @since 19 dynamic
   * @since 23 static
   */
  enum AudioVolumeMode {
    /**
     * System-level volume (default mode).
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     * @since 23 static
     */
    SYSTEM_GLOBAL = 0,
    /**
     * Application-level volume.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     * @since 23 static
     */
    APP_INDIVIDUAL = 1
  }

  /**
   * Describes the event received by the application when the volume is changed.
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface VolumeEvent {
    /**
     * Audio volume type.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamic
     * @since 23 static
     */
    volumeType: AudioVolumeType;
    /**
     * Volume to set. The value range can be obtained by calling **getMinVolume** and **getMaxVolume**.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    volume: int;
    /**
     * Whether to show the volume change in UI. **true** to show, **false** otherwise.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 9 dynamic
     * @since 23 static
     */
    updateUi: boolean;
    /**
     * volumeGroup id
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    volumeGroupId: int;
    /**
     * Device network id
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    networkId: string;
    /**
     * Audio volume mode. The default value is **SYSTEM_GLOBAL**.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 19 dynamic
     * @since 23 static
     */
    volumeMode?: AudioVolumeMode;
    /**
     * Volume percentage, which is an integer ranging from [0, 100].
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @since 23 dynamic&static
     */
    percentage?: int;
  }

  /**
   * Describes the event received by the application when the audio stream volume is changed.
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @since 20 dynamic
   * @since 23 static
   */
  interface StreamVolumeEvent {
    /**
     * Audio stream for which the volume changes.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     * @since 23 static
     */
    streamUsage: StreamUsage;
    /**
     * Volume.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     * @since 23 static
     */
    volume: int;
    /**
     * Whether to show the volume change in UI. **true** to show, **false** otherwise.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 20 dynamic
     * @since 23 static
     */
    updateUi: boolean;
    /**
     * Volume level before change.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @since 23 dynamic&static
     */
    previousVolume?: int;
  }
  
  /**
   * Describes the system volume filter.
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SystemVolumeFilter {
    /**
     * Application UID.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    uid: int;
  }

  /**
   * Volume information for active audio streams.
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface ActiveStreamVolumeInfo {
    /**
     * Volume type of the current stream.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    volumeType: AudioVolumeType;
    /**
     * Volume of the application.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    appVolume: int;
    /**
     * UID of the application.
     *
     * @syscap SystemCapability.Multimedia.Audio.Volume
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    clientUid: int;
  }

  /**
   * ActiveStreamVolumeInfo array.
   *
   * @syscap SystemCapability.Multimedia.Audio.Volume
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  type ActiveStreamsVolumeInfoArray = Array<Readonly<ActiveStreamVolumeInfo>>;

  /**
   * Describes the callback invoked for audio interruption or focus gain events.When the audio of an application
   * is interrupted by another application, the callback is invoked to notify the former application.
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimedia.audio.InterruptEvent
   */
  interface InterruptAction {

    /**
     * Event type.
     * The value TYPE_ACTIVATED means the focus gain event, and TYPE_INTERRUPT means the audio interruption event.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptEvent#eventType
     */
    actionType: InterruptActionType;

    /**
     * Type of the audio interruption event.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptEvent#eventType
     */
    type?: InterruptType;

    /**
     * Hint provided along with the audio interruption event.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptEvent#hintType
     */
    hint?: InterruptHint;

    /**
     * Whether the focus is gained or released. **true** if the focus is gained or released, **false** if the focus
     * fails to be gained or released.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptEvent#hintType
     */
    activated?: boolean;
  }

  /**
   * Describes input parameters of audio interruption events.
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimedia.audio.AudioRendererOptions
   */
  interface AudioInterrupt {

    /**
     * Audio stream usage.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRendererOptions#rendererInfo
     */
    streamUsage: StreamUsage;

    /**
     * Audio content type.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.AudioRendererOptions#rendererInfo
     */
    contentType: ContentType;

    /**
     * Whether audio playback can be paused during an audio interruption. **true** if audio playback can be paused,
     * **false** otherwise.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.audio.InterruptEvent#hintType
     */
    pauseWhenDucked: boolean;
  }

  /**
   * Describes the event received by the application when the microphone mute status is changed.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @since 9 dynamic
   * @since 23 static
   */
  interface MicStateChangeEvent {
    /**
     * Mute status of the microphone **true** if muted, **false** otherwise.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 9 dynamic
     * @since 23 static
     */
    mute: boolean;
  }
  /**
   * Describes the device connection status and device information.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  interface DeviceChangeAction {
    /**
     * Device change type.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    type: DeviceChangeType;

    /**
     * Device information.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    deviceDescriptors: AudioDeviceDescriptors;
  }

  /**
   * Enumerates the audio channel blending modes.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  enum ChannelBlendMode {
    /**
     * No channel process.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    MODE_DEFAULT = 0,
    /**
     * Blends the left and right channels together.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    MODE_BLEND_LR = 1,
    /**
     * Copies the left channel and applies it to both the left and right channels.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    MODE_ALL_LEFT = 2,
    /**
     * Copies the right channel and applies it to both the left and right channels.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    MODE_ALL_RIGHT = 3,
  }

  /**
   * Enumerates the reasons for audio stream device changes.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  enum AudioStreamDeviceChangeReason {
    /**
     * Unknown reason.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    REASON_UNKNOWN = 0,
    /**
     * A new device is available.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    REASON_NEW_DEVICE_AVAILABLE = 1,
    /**
     * The old device is unavailable. When this reason is reported, consider pausing audio playback.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    REASON_OLD_DEVICE_UNAVAILABLE = 2,
    /**
     * Forcibly selected.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    REASON_OVERRODE = 3,
    /**
     * The audio session has been activated.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    REASON_SESSION_ACTIVATED = 4,
    /**
     * An audio stream with higher priority appears.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 20 dynamic
     * @since 23 static
     */
    REASON_STREAM_PRIORITY_CHANGED = 5,
  }
  /**
   * Describes the event received by the application when the audio stream device is changed.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface AudioStreamDeviceChangeInfo {
    /**
     * Audio device descriptors before change.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    preDevices?: AudioDeviceDescriptors;
    /**
     * Audio device descriptors after change.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    devices: AudioDeviceDescriptors;
    /**
     * Audio stream device change reason.
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
   * Enumerates the audio data callback results.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum AudioDataCallbackResult {
    /**
     * The callback data is invalid.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    INVALID = -1,

    /**
     * The callback data is valid.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    VALID = 0
  }

  /**
   * Defines the callback function used to write data to the audio renderer. Once the callback function finishes its
   * execution, the audio service queues the data pointed to by **data** for playback. Therefore, do not change the data
   * outside the callback. It is crucial to fill **data** with the exact length of data designated for playback;
   * otherwise, noises may occur during playback.
   *
   * @param { ArrayBuffer } data - Data to be written to the buffer.
   * @returns { AudioDataCallbackResult | void } If **void** or **AudioDataCallbackResult.VALID** is returned, the data
   *     is valid and the audio data is played. If **AudioDataCallbackResult.INVALID** is returned, the data is invalid
   *     and the audio data is not played.
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @since 12 dynamic
   */
  type AudioRendererWriteDataCallback = (data: ArrayBuffer) => AudioDataCallbackResult | void;

  /**
   * Type definition of callback function for audio renderer write data.
   *
   * @param { ArrayBuffer } data - audio data array buffer.
   * @returns { AudioDataCallbackResult } result of callback. If AudioDataCallbackResult.VALID
   *     is returned, it indicates the data is valid and will be played. If AudioDataCallbackResult.INVALID
   *     is returned, it indicates the data is will not be played.
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform
   * @since 23 static
   */
  type AudioRendererWriteDataCallback = (data: ArrayBuffer) => AudioDataCallbackResult;

  /**
   * Describes the information about the audio stream timestamp and the current data frame position.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @since 19 dynamic
   * @since 23 static
   */
  interface AudioTimestampInfo {
    /**
     * Position of the current data frame for playback or recording.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 19 dynamic
     * @since 23 static
     */
    readonly framePos: long;

    /**
     * Timestamp corresponding to the current data frame position during playback or recording, in nanoseconds.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 19 dynamic
     * @since 23 static
     */
    readonly timestamp: long;
  }

  /**
   * Audio render target.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  enum RenderTarget {
    /**
     * Playback. Under this target, the audio renderer will be played out. This is the default
     * target of audio renderer.
     *
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
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    INJECT_TO_VOICE_COMMUNICATION_CAPTURE = 1,
  }

  /**
   * Enumerates the audio latency types.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum AudioLatencyType {
    /**
     * Type to get latency of all audio processing units, including software and hardware.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LATENCY_TYPE_ALL = 0,

    /**
     * Type to get latency of software part, including audio effects in software.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LATENCY_TYPE_SOFTWARE = 1,

    /**
     * Type to get latency of hardware part, including audio effects in hal, driver and hardware.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    LATENCY_TYPE_HARDWARE = 2
  }

  /**
   * This interface provides APIs for audio rendering.
   *
   * Before calling any API in AudioRenderer, you must use
   * [createAudioRenderer]{@link @ohos.multimedia.audio:audio.createAudioRenderer(options: AudioRendererOptions, callback: AsyncCallback<AudioRenderer>)}
   * to create an AudioRenderer instance.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this interface are supported since API version 8.
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AudioRenderer {
    /**
     * Audio renderer state.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    readonly state: AudioState;

    /**
     * Obtains the information about this audio renderer. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<AudioRendererInfo> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the audio renderer information obtained; otherwise,
     *     **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getRendererInfo(callback: AsyncCallback<AudioRendererInfo>): void;
    /**
     * Obtains the information about this audio renderer. This API uses a promise to return the result.
     *
     * @returns { Promise<AudioRendererInfo> } Promise used to return the audio renderer information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getRendererInfo(): Promise<AudioRendererInfo>;
    /**
     * Obtains the information about this audio renderer. This API returns the result synchronously.
     *
     * @returns { AudioRendererInfo } Audio renderer information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getRendererInfoSync(): AudioRendererInfo;

    /**
     * Obtains the stream information of this audio renderer. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { AsyncCallback<AudioStreamInfo> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the stream information obtained; otherwise, **err** is
     *     an error object.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void;
    /**
     * Obtains the stream information of this audio renderer. This API uses a promise to return the result.
     *
     * @returns { Promise<AudioStreamInfo> } Promise used to return the stream information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getStreamInfo(): Promise<AudioStreamInfo>;
    /**
     * Obtains the stream information of this audio renderer. This API returns the result synchronously.
     *
     * @returns { AudioStreamInfo } Stream information.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getStreamInfoSync(): AudioStreamInfo;

    /**
     * Obtains the stream ID of this audio renderer. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<long> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the stream ID obtained; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getAudioStreamId(callback: AsyncCallback<long>): void;
    /**
     * Obtains the stream ID of this audio renderer. This API uses a promise to return the result.
     *
     * @returns { Promise<long> } Promise used to return the stream ID.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getAudioStreamId(): Promise<long>;
    /**
     * Obtains the stream ID of this audio renderer. This API returns the result synchronously.
     *
     * @returns { long } Stream ID.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioStreamIdSync(): long;

    /**
     * Obtains the audio effect mode in use. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<AudioEffectMode> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the audio effect mode obtained; otherwise, **err** is an
     *     error object.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioEffectMode(callback: AsyncCallback<AudioEffectMode>): void;
    /**
     * Obtains the audio effect mode in use. This API uses a promise to return the result.
     *
     * @returns { Promise<AudioEffectMode> } Promise used to return the audio effect mode.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioEffectMode(): Promise<AudioEffectMode>;

    /**
     * Sets an audio effect mode. This API uses an asynchronous callback to return the result.
     *
     * @param { AudioEffectMode } mode - Audio effect mode to set.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by callback.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    setAudioEffectMode(mode: AudioEffectMode, callback: AsyncCallback<void>): void;
    /**
     * Sets an audio effect mode. This API uses a promise to return the result.
     *
     * @param { AudioEffectMode } mode - Audio effect mode to set.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamic
     * @since 23 static
     */
    setAudioEffectMode(mode: AudioEffectMode): Promise<void>;

    /**
     * Starts this audio renderer. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object. If the operation fails, an error object with
     *     one of the following error codes is returned:<br>Error code 6800301: indicates abnormal status, focus
     *     preemption failure, and abnormal system processing. For details, see system logs.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * Starts this audio renderer. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise object, which indicates that the renderer is started successfully. If the
     *     operation fails, an error object with one of the following error codes is returned:
     *     <br>Error code 6800301: indicates abnormal status, focus preemption failure, and abnormal system processing. For
     *     details, see system logs.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * Writes the buffer. This API uses an asynchronous callback to return the result.
     *
     * @param { ArrayBuffer } buffer - Data to be written to the buffer.
     * @param { AsyncCallback<number> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the number of bytes written; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#event:writeData
     */
    write(buffer: ArrayBuffer, callback: AsyncCallback<number>): void;
    /**
     * Writes the buffer. This API uses a promise to return the result.
     *
     * @param { ArrayBuffer } buffer - Data to be written to the buffer.
     * @returns { Promise<number> } Promise used to return the number of written bytes.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#event:writeData
     */
    write(buffer: ArrayBuffer): Promise<number>;

    /**
     * Obtains the timestamp of the current playback position, measured in nanoseconds from the Unix epoch (January 1, 1
     * 970). This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<long> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the number of nanoseconds obtained; otherwise, **err** is an error
     *     object.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getAudioTime(callback: AsyncCallback<long>): void;
    /**
     * Obtains the timestamp of the current playback position, measured in nanoseconds from the Unix epoch (January 1, 1
     * 970). This API uses a promise to return the result.
     *
     * @returns { Promise<long> } Promise used to return the timestamp.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getAudioTime(): Promise<long>;
    /**
     * Obtains the timestamp of the current playback position, measured in nanoseconds from the Unix epoch (January 1, 1
     * 970). This API returns the result synchronously.
     *
     * @returns { long } Timestamp.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioTimeSync(): long;

    /**
     * Obtains the timestamp and position information of an output audio stream. It adapts to the speed adjustment
     * interface. This API uses a promise to return the result.
     *
     * This information is commonly used for audio and video synchronization.
     *
     * Note that when the actual playback position (**framePosition**) is 0, the timestamp remains fixed until the
     * stream begins to play. The playback position is also reset when **Flush** is called.
     *
     * Additionally, changes in the audio stream route, such as switching devices or output types, will reset the
     * playback position, whereas the timestamp keeps increasing. You are advised to call this API to obtain the
     * corresponding value only when the actual playback position and timestamp are stable. This API adapts to the speed
     * adjustment interface. For example, if the playback speed is set to 2x, the rate at which the playback position
     * increases is also twice the normal speed.
     *
     * @returns { Promise<AudioTimestampInfo> } Promise used to return the audio stream timestamp and the current data
     *     frame position.
     * @throws  { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 19 dynamic
     * @since 23 static
     */
    getAudioTimestampInfo(): Promise<AudioTimestampInfo>;

    /**
     * Obtains the timestamp and position information of an output audio stream. It adapts to the speed adjustment
     * interface. This API returns the result synchronously.
     *
     * This information is commonly used for audio and video synchronization.
     *
     * Note that when the actual playback position (**framePosition**) is 0, the timestamp remains fixed until the
     * stream begins to play. The playback position is also reset when **Flush** is called.
     *
     * Additionally, changes in the audio stream route, such as switching devices or output types, will reset the
     * playback position, whereas the timestamp keeps increasing. You are advised to call this API to obtain the
     * corresponding value only when the actual playback position and timestamp are stable. This API adapts to the speed
     * adjustment interface. For example, if the playback speed is set to 2x, the rate at which the playback position
     * increases is also twice the normal speed.
     * @returns { AudioTimestampInfo } Information about the audio stream timestamp and the current data frame position.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 19 dynamic
     * @since 23 static
     */
    getAudioTimestampInfoSync(): AudioTimestampInfo;

    /**
     * Drains the playback buffer. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    drain(callback: AsyncCallback<void>): void;
    /**
     * Drains the playback buffer. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    drain(): Promise<void>;

    /**
     * Flushes the buffer. This API is available when [AudioState]{@link @ohos.multimedia.audio:audio.AudioState} is
     * **STATE_RUNNING**, **STATE_PAUSED**, or **STATE_STOPPED**. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 6800103 - Operation not permit at current state. Return by promise.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    flush(): Promise<void>;

    /**
     * Pauses this audio renderer. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    pause(callback: AsyncCallback<void>): void;
    /**
     * Pauses this audio renderer. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    pause(): Promise<void>;

    /**
     * Stops this audio renderer. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * Stops this audio renderer. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * Releases the renderer. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases the renderer. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * Obtains a reasonable minimum buffer size in bytes for rendering. This API uses an asynchronous callback to return
     * the result.
     *
     * @param { AsyncCallback<long> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the minimum buffer size obtained; otherwise, **err** is an error
     *     object.<br>The unit is bytes.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getBufferSize(callback: AsyncCallback<long>): void;
    /**
     * Obtains a reasonable minimum buffer size in bytes for rendering. This API uses a promise to return the result.
     *
     * @returns { Promise<long> } Promise used to return the buffer size.
     *     <br>The unit is bytes.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getBufferSize(): Promise<long>;
    /**
     * Obtains a reasonable minimum buffer size in bytes for rendering. This API returns the result synchronously.
     *
     * @returns { long } Buffer size, in bytes.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getBufferSizeSync(): long;

    /**
     * Sets the render rate. This API uses an asynchronous callback to return the result.
     *
     * @param { AudioRendererRate } rate - Audio render rate.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#setSpeed
     */
    setRenderRate(rate: AudioRendererRate, callback: AsyncCallback<void>): void;

    /**
     * Sets the render rate. This API uses a promise to return the result.
     *
     * @param { AudioRendererRate } rate - Audio render rate.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#setSpeed
     */
    setRenderRate(rate: AudioRendererRate): Promise<void>;

    /**
     * Sets the playback speed.
     *
     * @param { double } speed - Playback rate, which ranges from 0.25 to 4.0.
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
     * Obtains the audio renderer rate. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<AudioRendererRate> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the render rate obtained; otherwise, **err** is an error
     *     object.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#getSpeed
     */
    getRenderRate(callback: AsyncCallback<AudioRendererRate>): void;

    /**
     * Obtains the audio renderer rate. This API uses a promise to return the result.
     *
     * @returns { Promise<AudioRendererRate> } Promise used to return the render rate.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#getSpeed
     */
    getRenderRate(): Promise<AudioRendererRate>;

    /**
     * Obtains the audio renderer rate. This API returns the result synchronously.
     *
     * @returns { AudioRendererRate } Audio render rate.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioRenderer#getSpeed
     */
    getRenderRateSync(): AudioRendererRate;

    /**
     * Obtains the playback speed.
     *
     * @returns { double } Playback rate, which ranges from 0.25 to 4.0.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getSpeed(): double;

    /**
     * Sets the audio interruption mode for the application. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { InterruptMode } mode - Audio interruption mode.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setInterruptMode(mode: InterruptMode, callback: AsyncCallback<void>): void;
    /**
     * Sets the audio interruption mode for the application. This API uses a promise to return the result.
     *
     * @param { InterruptMode } mode - Audio interruption mode.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setInterruptMode(mode: InterruptMode): Promise<void>;
    /**
     * Sets the audio interruption mode for the application. This API returns the result synchronously.
     *
     * @param { InterruptMode } mode - Audio interruption mode.
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
     * Sets the volume for the audio stream. This API uses an asynchronous callback to return the result.
     *
     * @param { double } volume - Volume to set, which is in the range [0.0, 1.0].
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setVolume(volume: double, callback: AsyncCallback<void>): void;
    /**
     * Sets the volume for the audio stream. This API uses a promise to return the result.
     *
     * @param { double } volume - Volume to set, which is in the range [0.0, 1.0].
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setVolume(volume: double): Promise<void>;

    /**
     * Obtains the volume of the audio stream. This API returns the result synchronously.
     *
     * @returns { double } Volume, in the range [0.0, 1.0].
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 12 dynamic
     * @since 23 static
     */
    getVolume(): double;

    /**
     * Sets a volume ramp. This API returns the result synchronously.
     *
     * @param { double } volume - Target volume, within the range [0.0, 1.0].
     * @param { int } duration - Time range during which the ramp applies, in ms.
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
     * Obtains the minimum volume of the audio stream. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<double> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the minimum volume obtained; otherwise, **err** is an error object.<
     *     br>The volume range is [0.0, 1.0].
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getMinStreamVolume(callback: AsyncCallback<double>): void;
    /**
     * Obtains the minimum volume of the audio stream. This API uses a promise to return the result.
     *
     * @returns { Promise<double> } Promise used to return the minimum volume of the audio stream.
     *     <br>The volume range is [0.0, 1.0].
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getMinStreamVolume(): Promise<double>;
    /**
     * Obtains the minimum volume of the audio stream. This API returns the result synchronously.
     *
     * @returns { double } Minimum volume of the audio stream, which ranges from 0.0 to 1.0.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getMinStreamVolumeSync(): double;

    /**
     * Obtains the maximum volume of the audio stream. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<double> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the maximum volume obtained; otherwise, **err** is an error object.<
     *     br>The volume range is [0.0, 1.0].
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getMaxStreamVolume(callback: AsyncCallback<double>): void;
    /**
     * Obtains the maximum volume of the audio stream. This API uses a promise to return the result.
     *
     * @returns { Promise<double> } Promise used to return the maximum volume of the audio stream.
     *     <br>The volume range is [0.0, 1.0].
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getMaxStreamVolume(): Promise<double>;
    /**
     * Obtains the maximum volume of the audio stream. This API returns the result synchronously.
     *
     * @returns { double } Maximum volume of the audio stream, which ranges from 0.0 to 1.0.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getMaxStreamVolumeSync(): double;

    /**
     * Obtains the number of underflow audio frames in the audio stream that is being played. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { AsyncCallback<long> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the number of underloaded audio frames obtained; otherwise, **err**
     *     is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getUnderflowCount(callback: AsyncCallback<long>): void;
    /**
     * Obtains the number of underflow audio frames in the audio stream that is being played. This API uses a promise to
     * return the result.
     *
     * @returns { Promise<long> } Promise used to return the number of underflow audio frames.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getUnderflowCount(): Promise<long>;
    /**
     * Obtains the number of underflow audio frames in the audio stream that is being played. This API returns the
     * result synchronously.
     *
     * @returns { long } Number of underflow audio frames.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getUnderflowCountSync(): long;

    /**
     * Obtains the output device information of the audio stream. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { AsyncCallback<AudioDeviceDescriptors> } callback - Callback used to return the result. If the operation
     *     is successful, **err** is **undefined** and **data** is the output device information obtained; otherwise,
     *     **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCurrentOutputDevices(callback: AsyncCallback<AudioDeviceDescriptors>): void;
    /**
     * Obtains the output device information of the audio stream. This API uses a promise to return the result.
     *
     * @returns { Promise<AudioDeviceDescriptors> } Promise used to return the output device information.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCurrentOutputDevices(): Promise<AudioDeviceDescriptors>;
    /**
     * Obtains the output device information of the audio stream. This API returns the result synchronously.
     *
     * @returns { AudioDeviceDescriptors } Output device information.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCurrentOutputDevicesSync(): AudioDeviceDescriptors;

    /**
     * Sets the audio channel blending mode. This API returns the result synchronously.
     *
     * @param { ChannelBlendMode } mode - Audio channel blending mode.
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
     * Sets the silent mode in concurrent playback for the audio stream.
     *
     * If the silent mode in concurrent playback is enabled, the system mutes the audio stream and does not interrupt
     * other audio streams. If the silent mode in concurrent playback is disabled, the audio stream can gain focus based
     * on the system focus strategy.
     *
     * @param { boolean } on - Whether to enable or disable the silent mode in concurrent playback for the audio stream.
     *     **true** to enable, **false** otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 12 dynamic
     * @since 23 static
     */
    setSilentModeAndMixWithOthers(on: boolean): void;

    /**
     * Obtains the silent mode in concurrent playback for the audio stream.
     *
     * @returns { boolean } Enabled status of the silent mode in concurrent playback. **true** if enabled, **false**
     *     otherwise.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 12 dynamic
     * @since 23 static
     */
    getSilentModeAndMixWithOthers(): boolean;

    /**
     * Temporarily changes the current audio device
     * This function applies on audiorenderers whose StreamUsage are
     * STREAM_USAGE_VOICE_COMMUNICATION/STREAM_USAGE_VIDEO_COMMUNICATION/STREAM_USAGE_VOICE_MESSAGE.
     * Setting the device will only takes effect if no other accessory such as headphones are in use
     * @param { DeviceType } deviceType - the available deviceTypes are
     *                                    EARPIECE: Built-in earpiece
     *                                    SPEAKER: Built-in speaker
     *                                    DEFAULT: System default output device
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 12 dynamic
     * @since 23 static
     */
    setDefaultOutputDevice(deviceType: DeviceType): Promise<void>;

    /**
     * Sets the loudness gain of this stream. The default loudness gain is 0.0dB.
     * The stream usage of the audio renderer must be {@link StreamUsage#STREAM_USAGE_MUSIC},
     * {@link StreamUsage#STREAM_USAGE_MOVIE} or {@link StreamUsage#STREAM_USAGE_AUDIOBOOK}.
     * After calling this interface, the adjustment of loundness gain will take effect immediately.
     * @param { double } loudnessGain - Loudness gain to set, expressed in dB. The value type is float.
     *     The loudness gain changes from -90.0dB to 24.0dB.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800104 - Operation is not supported on this renderer, e.g. the stream usage of this
     * renderer is not one of {@link StreamUsage#STREAM_USAGE_MUSIC}, {@link StreamUsage#STREAM_USAGE_MOVIE} or
     * {@link StreamUsage#STREAM_USAGE_AUDIOBOOK}, or this renderer is routed through the high-resolution playback path.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 20 dynamic
     * @since 23 static
     */
    setLoudnessGain(loudnessGain: double): Promise<void>;

    /**
     * Gets loudness gain of this stream.
     * @returns { double } Returns one float value, unit is dB.
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
     *
     * 1. The audio route and interruption strategy of this renderer will not be affected by {@link AudioSessionManager}.
     * 2. The device type of this renderer will be {@link DeviceType#SYSTEM_PRIVATE}.
     * 3. Calling {@link start} when the audio scene is not {@link AudioScene#AUDIO_SCENE_VOICE_CHAT} will
     * return error code 6800301.
     * 4. Calling {@link getAudioTime} or {@link getAudioTimeSync} will return error code 6800301.
     * 5. Calling {@link getAudioTimestampInfo} or {@link getAudioTimestampInfoSync} will return error code 6800301.
     * 6. Calling {@link setDefaultOutputDevice} will return error code 6800301.
     *
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
     * If the {@link setTarget} has been called before calling this interface, ensure its promise object has been
     * resolved successfully, otherwise, the obtained value may be inaccurate.
     *
     * @returns { RenderTarget } Render target of this audio renderer.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    getTarget(): RenderTarget;

    /**
     * Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an
     * asynchronous callback to return the result.
     *
     * The AudioRenderer instance proactively gains the focus when the **start** event occurs and releases the focus
     * when the **pause** or **stop** event occurs. Therefore, you do not need to request to gain or release the focus.
     *
     * After this API is called, an [InterruptEvent]{@link @ohos.multimedia.audio:audio.InterruptEvent} is received when
     * the AudioRenderer instance fails to obtain the focus or an audio interruption event occurs (for example, the
     * audio stream is interrupted by others). It is recommended that the application perform further processing based
     * on the **InterruptEvent** information. For details, see
     * [Introduction to Audio Focus](docroot://media/audio/audio-playback-concurrency.md).
     *
     * @param { 'audioInterrupt' } type - Event type. The event **'audioInterrupt'** is triggered when the audio focus
     *     is changed.
     * @param { Callback<InterruptEvent> } callback - Callback used to return the event information.
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
     *
     * @param { Callback<InterruptEvent> } callback - Callback used to listen for interrupt callback.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 23 static
     */
    onAudioInterrupt(callback: Callback<InterruptEvent>): void;

    /**
     * Unsubscribes from the audio interruption event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'audioInterrupt' } type - Event type. The event **'audioInterrupt'** is triggered when the audio focus
     *     is changed.
     * @param { Callback<InterruptEvent> } callback - Callback used to return the event information.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 18 dynamic
     */
    off(type: 'audioInterrupt', callback?: Callback<InterruptEvent>): void;

    /**
     * Unsubscribes audio interrupt events.
     *
     * @param { Callback<InterruptEvent> } callback - Callback used to listen for interrupt callback.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 23 static
     */
    offAudioInterrupt(callback?: Callback<InterruptEvent>): void;

    /**
     * Subscribes to the mark reached event, which is triggered (only once) when the number of frames rendered reaches
     * the value of the **frame** parameter. This API uses an asynchronous callback to return the result.
     *
     * For example, if **frame** is set to **100**, the callback is invoked when the number of rendered frames reaches
     * the 100th frame.
     *
     * @param { 'markReach' } type - Event type. The event **'markReach'** is triggered when the number of frames
     *     rendered reaches the value of the **frame** parameter.
     * @param { long } frame - Number of frames to trigger the event. The value must be greater than **0**.
     * @param { Callback<long> } callback - Callback used to return the value of the **frame** parameter.
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
     * Unsubscribes from the mark reached event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'markReach' } type - Event type. The event **'markReach'** is triggered when the number of frames
     *     rendered reaches the value of the **frame** parameter.
     * @param { Callback<long> } callback - Callback used to return the value of the **frame** parameter. [since 18]
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    off(type: 'markReach', callback?: Callback<long>): void;

    /**
     * Unsubscribes from mark reached events.
     *
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    offMarkReach(callback?: Callback<long>): void;

    /**
     * Subscribes to the period reached event, which is triggered each time the number of frames rendered reaches the
     * value of the **frame** parameter. In other words, the information is reported periodically. This API uses an
     * asynchronous callback to return the result.
     *
     * For example, if **frame** is set to **10**, the callback is invoked each time 10 frames are rendered, for example
     * , when the number of frames rendered reaches the 10th frame, 20th frame, and 30th frame.
     *
     * @param { 'periodReach' } type - Event type. The event **'periodReach'** is triggered each time the number of
     *     frames rendered reaches the value of the **frame** parameter.
     * @param { long } frame - Number of frames to trigger the event. The value must be greater than **0**.
     * @param { Callback<long> } callback - Callback used to return the value of the **frame** parameter.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    on(type: 'periodReach', frame: long, callback: Callback<long>): void;

    /**
     * Subscribes to period reached events. When the period of frame rendering reaches the value of frame parameter,
     * the callback is invoked.
     *
     * @param { long } frame - Period during which frame rendering is listened. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    onPeriodReach(frame: long, callback: Callback<long>): void;

    /**
     * Unsubscribes from the period reached event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'periodReach' } type - Event type. The event **'periodReach'** is triggered each time the number of
     *     frames rendered reaches the value of the **frame** parameter.
     * @param { Callback<long> } callback - Callback used to return the value of the **frame** parameter. [since 18]
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    off(type: 'periodReach', callback?: Callback<long>): void;

    /**
     * Unsubscribes from period reached events.
     *
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    offPeriodReach(callback?: Callback<long>): void;

    /**
     * Subscribes to the audio renderer state change event, which is triggered when the state of the audio renderer is
     * changed. This API uses an asynchronous callback to return the result.
     *
     * @param { 'stateChange' } type - Event type. The event **'stateChange'** is triggered when the state of the audio
     *     renderer is changed.
     * @param { Callback<AudioState> } callback - Callback used to return the audio status.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    on(type: 'stateChange', callback: Callback<AudioState>): void;

    /**
     * Subscribes audio renderer state change event callback.
     *
     * @param { Callback<AudioState> } callback - Callback invoked when state change.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    onStateChange(callback: Callback<AudioState>): void;

    /**
     * Unsubscribes from the audio renderer state change event. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'stateChange' } type - Event type. The event **'stateChange'** is triggered when the listening for audio
     *     renderer state change event is canceled.
     * @param { Callback<AudioState> } callback - Callback used to return the audio status.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 18 dynamic
     */
    off(type: 'stateChange', callback?: Callback<AudioState>): void;

    /**
     * Unsubscribes audio state change event callback.
     *
     * @param { Callback<AudioState> } callback - Callback invoked when state change.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    offStateChange(callback?: Callback<AudioState>): void;

    /**
     * Subscribes to the audio output device change event, which is triggered when an audio output device is changed.
     * This API uses an asynchronous callback to return the result.
     *
     * @param { 'outputDeviceChange' } type - Event type. The event **'outputDeviceChange'** is triggered when an audio
     *     output device is changed.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to return the output device descriptor of
     *     the current audio stream.
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
     *
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onOutputDeviceChange(callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * Subscribes to the change event of audio output devices and reasons, which is triggered when an audio output
     * device is changed, and the change reason is reported. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'outputDeviceChangeWithInfo' } type - Event type. The event **'outputDeviceChangeWithInfo'** is
     *     triggered when an audio output device is changed, and the change reason is reported.
     * @param { Callback<AudioStreamDeviceChangeInfo> } callback - Callback used to return the output device descriptor
     *     of the current audio stream and the change reason.
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
     *
     * @param { Callback<AudioStreamDeviceChangeInfo> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onOutputDeviceChangeWithInfo(callback: Callback<AudioStreamDeviceChangeInfo>): void;

    /**
     * Unsubscribes from the audio output device change event. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'outputDeviceChange' } type - Event type. The event **'outputDeviceChange'** is triggered when an audio
     *     output device is changed.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to return the output device descriptor of
     *     the current audio stream.
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
     *
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offOutputDeviceChange(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Unsubscribes from the change event of audio output devices and reasons. This API uses an asynchronous callback to
     * return the result.
     *
     * @param { 'outputDeviceChangeWithInfo' } type - Event type. The event **'outputDeviceChangeWithInfo'** is
     *     triggered when an audio output device is changed, and the change reason is reported.
     * @param { Callback<AudioStreamDeviceChangeInfo> } callback - Callback used to return the output device descriptor
     *     of the current audio stream and the change reason.
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
     *
     * @param { Callback<AudioStreamDeviceChangeInfo> } callback - Callback used in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offOutputDeviceChangeWithInfo(callback?: Callback<AudioStreamDeviceChangeInfo>): void;

    /**
     * Subscribes to the audio data write event, which is triggered when audio data needs to be written. This API uses
     * an asynchronous callback to return the result.
     *
     * The callback function is used only to write audio data. Do not call AudioRenderer APIs in it.
     *
     * @param { 'writeData' } type - Event type. The event **'writeData'** is triggered when audio data needs to be
     *     written.
     * @param { Callback<ArrayBuffer> } callback - Callback used to write the data to the buffer.<br>API version 11 does
     *     not support the return of the callback result. API version 12 and later support the return of the callback
     *     result [AudioDataCallbackResult]{@link @ohos.multimedia.audio:audio.AudioDataCallbackResult}. [since 11 - 11]
     * @param { AudioRendererWriteDataCallback } callback - Callback used to write the data to the buffer.<br>API
     *     version 11 does not support the return of the callback result. API version 12 and later support the return of
     *     the callback result [AudioDataCallbackResult]{@link @ohos.multimedia.audio:audio.AudioDataCallbackResult}
     *     . [since 12]
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
     *
     * @param { AudioRendererWriteDataCallback } callback - Audio renderer write data callback.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    onWriteData(callback: AudioRendererWriteDataCallback): void;

    /**
     * Unsubscribes from the audio data write event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'writeData' } type - Event type. The event **'writeData'** is triggered when audio data needs to be
     *     written.
     * @param { Callback<ArrayBuffer> } callback - Callback used to write the data to the buffer.<br>API version 11 does
     *     not support the return of the callback result. API version 12 and later support the return of the callback
     *     result [AudioDataCallbackResult]{@link @ohos.multimedia.audio:audio.AudioDataCallbackResult}. [since 11 - 11]
     * @param { AudioRendererWriteDataCallback } callback - Callback used to write the data to the buffer.<br>API
     *     version 11 does not support the return of the callback result. API version 12 and later support the return of
     *     the callback result [AudioDataCallbackResult]{@link @ohos.multimedia.audio:audio.AudioDataCallbackResult}
     *     . [since 12]
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
     *
     * @param { AudioRendererWriteDataCallback } callback - Audio renderer write data callback.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @since 23 static
     */
    offWriteData(callback?: AudioRendererWriteDataCallback): void;

    /**
     * Obtains the estimated latency of the current audio route.
     *
     * > **NOTE**
     * >
     * > - The estimated latency of a wireless audio device may be inaccurate. The result is for reference only.
     * >
     * > - Since the latency is not counted in the real-time buffer, you are advised to obtain the latency only when the
     * > audio playback starts to avoid frequent calls. Otherwise, the API call may be blocked due to route switching.
     * >
     * > - You are advised to use [getAudioTimestampInfo]{@link audio.AudioRenderer.getAudioTimestampInfo} or
     * > [getAudioTimestampInfoSync]{@link audio.AudioRenderer.getAudioTimestampInfoSync} to implement audio and video
     * > synchronization after the audio is output to the hardware.
     *
     * @param { AudioLatencyType } type - Obtains the latency type.
     * @returns { int } Audio latency, in milliseconds.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permitted in release state.
     * @throws { BusinessError } 6800301 - System internal error, like audio service error.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getLatency(type: AudioLatencyType): int;

    /**
     * Sets the independent audio session strategy and behavior parameters.
     *
     * > **NOTE**
     * >
     * > If this API is called while an audio renderer is running, you must call the
     * > [start]{@link @ohos.multimedia.audio:audio.AudioRenderer.start(callback: AsyncCallback<void>)} API again for
     * > the settings to take effect.
     *
     * @param { AudioSessionStrategy } strategy - Audio session strategy.
     * @param { int } behavior - Specifies the audio session behavior.<br>This can be a single flag or a bitwise OR
     *     combination of multiple flags.<br>For details about the supported audio session behaviors, see
     *     [AudioSessionBehaviorFlags]{@link @ohos.multimedia.audio:audio.AudioSessionBehaviorFlags}.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: int): void;
  }

  /**
   * Enumerates the types of audio streams captured.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum SourceType {
    /**
     * Invalid audio source.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 8 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_INVALID = -1,
    /**
     * Mic source.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_MIC = 0,
    /**
     * Voice recognition source.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_VOICE_RECOGNITION = 1,
    /**
     * Playback capture source type.
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 10 dynamiconly
     * @deprecated since 12
     * @useinstead OH_AVScreenCapture in native interface.
     */
    SOURCE_TYPE_PLAYBACK_CAPTURE = 2,
    /**
     * Wakeup source type.
     * Permission ohos.permission.MANAGE_INTELLIGENT_VOICE is needed when calling createAudioCapturer with this type.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_WAKEUP = 3,

    /**
     * Voice call source type.
     * Permission ohos.permission.RECORD_VOICE_CALL is needed when calling createAudioCapturer with this type.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_VOICE_CALL = 4,

    /**
     * Voice communication source. (The 3A algorithm is not enabled if recording is started independently. It is enabled
     * when the AudioRenderer of the [STREAM_USAGE_VOICE_COMMUNICATION]{@link audio.StreamUsage} or
     * [STREAM_USAGE_VIDEO_COMMUNICATION]{@link audio.StreamUsage} type is also used to start playback.)
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_VOICE_COMMUNICATION = 7,

    /**
     * Voice message source.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_VOICE_MESSAGE = 10,

    /**
     * Source type for voice transcription and processing.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_VOICE_TRANSCRIPTION = 12,

    /**
     * Camcorder source type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 13 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_CAMCORDER = 13,

    /**
     * Unprocessed source type.
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 14 dynamic
     * @since 23 static
     */
    SOURCE_TYPE_UNPROCESSED = 14,
    /**
     * Live broadcast source type.
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
   * Defines mode for playback capture, each mode means different target streams to capture.
   * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AudioPlaybackCaptureMode {
    /**
     * Default mode. Capture most of the audio streams, except tone streams and privacy streams.
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MODE_DEFAULT = 0x0,
    /**
     * Media mode. Capture media, voice message and also unknown streams.
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MODE_MEDIA = 0x1,
    /**
     * Excluding self mode. Capture streams excluding the audio played by application itself.
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MODE_EXCLUDING_SELF = 0x8000,
  }

  /**
   * Defines the playback capture start state, which is returned asynchronously
   * after calling {@link AudioCapturer.requestPlaybackCaptureStart} function.
   * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum PlaybackCaptureStartState {
    /**
     * Start playback capture success state.
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STATE_SUCCESS = 0,
    /**
     * Start playback capture failed state, because the request for interrupt is denied
     * or meet system internal error.
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STATE_FAILED = 1,
    /**
     * Start playback capture but user not authorized state.
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STATE_NOT_AUTHORIZED = 2,
  }

  /**
   * Describes audio capturer information.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AudioCapturerInfo {
    /**
     * Audio source type.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    source: SourceType;
    /**
     * Flags that control the capturer behavior.
     *
     * Set this parameter to **0**.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    capturerFlags: int;
  }

  /**
   * Describes audio capturer configurations.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AudioCapturerOptions {
    /**
     * Audio stream information.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    streamInfo: AudioStreamInfo;
    /**
     * Audio capturer information.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    capturerInfo: AudioCapturerInfo;
    /**
     * Defines configuration for capturing played audio.
     *
     * This API is supported since API version 10 and deprecated since API version 12. You are advised to use
     * [AVScreenCapture](docroot://reference/apis-media-kit/capi-avscreencapture.md) instead.
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 10 dynamiconly
     * @deprecated since 12
     * @useinstead OH_AVScreenCapture in native interface.
     */
    playbackCaptureConfig?: AudioPlaybackCaptureConfig;
    /**
     * Perfered input device for this audio capturer. The preferredInputDevice must be an input device, and
     * the source type in {@link captureInfo} must be {@link SourceType#SOURCE_TYPE_RECONGITION} or
     * {@link SourceType#SOURCE_TYPE_VOICE_TRANSCRIPTION}, otherwise this parameter will be ignored.
     * If the user does not specify a device, the system automatically selects the recording device for
     * the audio capturer. When the user specifies a prefer device to
     * create a recongition or transcription recording,
     *
     * 1) If the prefer device is online, the current audiocapturer may use the preferred device for
     * recording; if the prefer device goes offline during operation, the system automatically selects
     * a recording device.
     * 2) If the prefer device is offline, the system automatically selects a recording device;
     * if the prefer device comes online during operation, it may switch to the prefer device for recording.
     * Users can query the device which is in use by {@link AudioCapturer#getCurrentAudioCapturerChangeInfo}.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    preferredInputDevice?: AudioDeviceDescriptor;

    /**
     * The playback capture mode for audio capturer.
     * This can be a combination of the available {@link AudioPlaybackCaptureMode}.
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    playbackCaptureMode?: AudioPlaybackCaptureMode;
  }

  /**
   * Describes audio capturer configuration that can capture
   * microphone input (mic-in) audio data before any processing.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface AudioCapturerMicInConfig {
    /**
     * Stream information that describes the processed audio stream.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    processedStreamInfo?: AudioStreamInfo;
    /**
     * Stream information that describes Mic-In audio stream.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    micInStreamInfo: AudioStreamInfo;
    /**
     * Stream information that describes echo reference signal.
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
  }

  /**
   * Describes audio capturer data that contains processed audio data and
   * microphone input (mic-in) audio data before any processing.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface AudioCapturerMicInData {
    /**
     * Processed audio data buffer.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    data: ArrayBuffer;
    /**
     * Microphone input audio data buffer.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    micInData: ArrayBuffer;
    /**
     * Echo reference audio data buffer.
     * If capturer config does not set ecStreamInfo, this buffer will be null.
     * See {@link #AudioCapturerMicInConfig} for details.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ecData?: ArrayBuffer;
  }

  /**
   * Defines the options for filtering the played audio streams to be recorded.
   *
   * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
   * @since 10 dynamiconly
   * @deprecated since 12
   * @useinstead OH_AVScreenCapture in native interface.
   */
  interface CaptureFilterOptions {
    /**
     * Filter by stream usages. If you want to capture voice streams, additional permission is needed.
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
   * Defines configuration for capturing played audio.
   *
   * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
   * @since 10 dynamiconly
   * @deprecated since 12
   * @useinstead OH_AVScreenCapture in native interface.
   */
  interface AudioPlaybackCaptureConfig {
    /**
     * Options for filtering the played audio streams to be recorded.
     *
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @since 10 dynamiconly
     * @deprecated since 12
     * @useinstead OH_AVScreenCapture in native interface.
     */
    filterOptions: CaptureFilterOptions;
  }

  /**
   * This interface provides APIs for audio capture.
   *
   * Before calling any API in AudioCapturer, you must use
   * [createAudioCapturer]{@link @ohos.multimedia.audio:audio.createAudioCapturer(options: AudioCapturerOptions, callback: AsyncCallback<AudioCapturer>)}
   * to create an AudioCapturer instance.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this interface are supported since API version 8.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @crossplatform [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  interface AudioCapturer {
    /**
     * Audio capturer state.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    readonly state: AudioState;

    /**
     * Obtains the audio capturer information. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<AudioCapturerInfo> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the capturer information obtained; otherwise, **err** is
     *     an error object.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getCapturerInfo(callback: AsyncCallback<AudioCapturerInfo>): void;
    /**
     * Obtains the audio capturer information. This API uses a promise to return the result.
     *
     * @returns { Promise<AudioCapturerInfo> } Promise used to return the audio capturer information.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getCapturerInfo(): Promise<AudioCapturerInfo>;
    /**
     * Obtains the audio capturer information. This API returns the result synchronously.
     *
     * @returns { AudioCapturerInfo } Audio capturer information.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCapturerInfoSync(): AudioCapturerInfo;

    /**
     * Obtains the stream information of this audio capturer. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { AsyncCallback<AudioStreamInfo> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the stream information obtained; otherwise, **err** is
     *     an error object.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getStreamInfo(callback: AsyncCallback<AudioStreamInfo>): void;
    /**
     * Obtains the stream information of this audio capturer. This API uses a promise to return the result.
     *
     * @returns { Promise<AudioStreamInfo> } Promise used to return the stream information.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getStreamInfo(): Promise<AudioStreamInfo>;
    /**
     * Obtains the stream information of this audio capturer. This API returns the result synchronously.
     *
     * @returns { AudioStreamInfo } Stream information.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getStreamInfoSync(): AudioStreamInfo;

    /**
     * Obtains the stream ID of this audio capturer. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<long> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the stream ID obtained; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getAudioStreamId(callback: AsyncCallback<long>): void;
    /**
     * Obtains the stream ID of this audio capturer. This API uses a promise to return the result.
     *
     * @returns { Promise<long> } Promise used to return the stream ID.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getAudioStreamId(): Promise<long>;
    /**
     * Obtains the stream ID of this audio capturer. This API returns the result synchronously.
     *
     * @returns { long } Stream ID.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioStreamIdSync(): long;

    /**
     * Starts this audio capturer to start capturing audio data. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object. If the operation fails, an error object with
     *     the following error code is returned:<br>Error code 6800301: indicates abnormal status, focus preemption
     *     failure, and abnormal system processing. For details, see system logs.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * Starts this audio capturer to start capturing audio data. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise object, which indicates that the capturer is started successfully. If the
     *     operation fails, an error object with the following error code is returned:
     *     <br>Error code 6800301: indicates abnormal status, focus preemption failure, and abnormal system processing. For
     *     details, see system logs.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * Asynchronously request to start the playback capture stream.
     * This function is non-blocking, which means system will continue to process user authorization and
     * stream starting when receiving the start request. And the final result will be returned by callback.
     * @param { Callback<PlaybackCaptureStartState> } callback - Callback function used to receive the final
     *     result of start request.
     * @syscap SystemCapability.Multimedia.Audio.PlaybackCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    requestPlaybackCaptureStart(callback: Callback<PlaybackCaptureStartState>): void;

    /**
     * Reads the buffer from the audio capturer. This method uses an asynchronous callback to return the result.
     * @param { number } size - Number of bytes to read.
     * @param { boolean } isBlockingRead - Whether to block the read operation. **true** to block, **false** otherwise.
     * @param { AsyncCallback<ArrayBuffer> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the buffer read; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioCapturer#event:readData
     */
    read(size: number, isBlockingRead: boolean, callback: AsyncCallback<ArrayBuffer>): void;
    /**
     * Reads the buffer. This API uses a promise to return the result.
     *
     * @param { number } size - Number of bytes to read.
     * @param { boolean } isBlockingRead - Whether to block the read operation. **true** to block, **false** otherwise.
     * @returns { Promise<ArrayBuffer> } Promise used to return the data read from the buffer.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.audio.AudioCapturer#event:readData
     */
    read(size: number, isBlockingRead: boolean): Promise<ArrayBuffer>;

    /**
     * Obtains the timestamp of the current recording position, measured in nanoseconds from the Unix epoch (January 1,
     * 1970). This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<long> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the number of nanoseconds obtained; otherwise, **err** is an error
     *     object.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getAudioTime(callback: AsyncCallback<long>): void;
    /**
     * Obtains the timestamp of the current recording position, measured in nanoseconds from the Unix epoch (January 1,
     * 1970). This API uses a promise to return the result.
     *
     * @returns { Promise<long> } Promise used to return a timestamp representing the number of nanoseconds elapsed
     *     since the Unix epoch (January 1, 1970).
     *     <br>The timestamp unit is nanoseconds.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getAudioTime(): Promise<long>;
    /**
     * Obtains the timestamp of the current recording position, measured in nanoseconds from the Unix epoch (January 1,
     * 1970). This API returns the result synchronously.
     *
     * @returns { long } Timestamp.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAudioTimeSync(): long;

    /**
     * Obtains the timestamp and position information of an input audio stream.
     *
     * This API obtains the actual recording position (specified by **framePos**) of the audio channel and the timestamp
     * when recording to that position (specified by **timestamp**, in nanoseconds).
     *
     * @returns { Promise<AudioTimestampInfo> } Promise used to return the timestamp and position information.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 19 dynamic
     * @since 23 static
     */
    getAudioTimestampInfo(): Promise<AudioTimestampInfo>;

    /**
     * Obtains the timestamp and position information of an input audio stream. This API returns the result
     * synchronously.
     *
     * @returns { AudioTimestampInfo } Information about the timestamp and position information.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 19 dynamic
     * @since 23 static
     */
    getAudioTimestampInfoSync(): AudioTimestampInfo;

    /**
     * Stops this audio capturer, ceasing the input audio stream. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * Stops this audio capturer, ceasing the input audio stream. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * Releases this audio capturer. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases this audio capturer. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * Obtains a reasonable minimum buffer size in bytes for capturing. This API uses an asynchronous callback to return
     * the result.
     *
     * @param { AsyncCallback<long> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the minimum buffer size obtained; otherwise, **err** is an error
     *     object.<br>The unit is bytes.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getBufferSize(callback: AsyncCallback<long>): void;
    /**
     * Obtains a reasonable minimum buffer size in bytes for capturing. This API uses a promise to return the result.
     *
     * @returns { Promise<long> } Promise used to return the buffer size.
     *     <br>The unit is bytes.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    getBufferSize(): Promise<long>;
    /**
     * Obtains a reasonable minimum buffer size in bytes for capturing. This API returns the result synchronously.
     *
     * @returns { long } Buffer size, in bytes.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getBufferSizeSync(): long;

    /**
     * Obtains the information of the current input devices. This API returns the result synchronously.
     *
     * @returns { AudioDeviceDescriptors } An array of the audio device descriptors.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getCurrentInputDevices(): AudioDeviceDescriptors;

    /**
     * Obtains the configuration changes of the current audio capturer. This API returns the result synchronously.
     *
     * @returns { AudioCapturerChangeInfo } Configuration changes of the audio capturer.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getCurrentAudioCapturerChangeInfo(): AudioCapturerChangeInfo;

    /**
     * Obtains the number of overflow audio frames in the audio stream that is being captured. This API uses a promise
     * to return the result.
     *
     * @returns { Promise<long> } Promise used to return the number of overflow audio frames.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 12 dynamic
     * @since 23 static
     */
    getOverflowCount(): Promise<long>

    /**
     * Obtains the number of overflow audio frames in the audio stream that is being captured. This API returns the
     * result synchronously.
     *
     * @returns { long } Number of overflow audio frames.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 12 dynamic
     * @since 23 static
     */
    getOverflowCountSync(): long;

    /**
     * Sets whether to
     * [mute the current audio recording stream when an audio interruption occurs](docroot://media/audio/using-audiocapturer-for-recording.md#setting-the-mute-interruption-mode)
     * . This API uses a promise to return the result.
     *
     * @param { boolean } muteWhenInterrupted - Whether to mute the current audio recording stream during an audio
     *     interruption. **true** to mute, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 6800103 - Operation not permitted at current state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    setWillMuteWhenInterrupted(muteWhenInterrupted: boolean): Promise<void>;

    /**
     * Set mute hint for this capturer, this method is used as a hint for power optimization
     * it does not mute the recording stream, only affects internal processing strategy.
     *
     * @param { boolean } mute - Use true if application recording stream muted by application if self.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800103 - Operation not permitted at current state, stream is not running.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setMuteHint(mute: boolean): Promise<void>;

    /**
     * Subscribes to the mark reached event, which is triggered (only once) when the number of frames captured reaches
     * the value of the **frame** parameter. This API uses an asynchronous callback to return the result.
     *
     * For example, if **frame** is set to **100**, the callback is invoked when the number of captured frames reaches
     * the 100th frame.
     *
     * @param { 'markReach' } type - Event type. The event **'markReach'** is triggered when the number of frames
     *     captured reaches the value of the **frame** parameter.
     * @param { long } frame - Number of frames to trigger the event. The value must be greater than **0**.
     * @param { Callback<long> } callback - Callback used to return the value of the **frame** parameter.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    on(type: 'markReach', frame: long, callback: Callback<long>): void;

    /**
     * Subscribes to mark reached events. When the number of frames captured reaches the value of the frame parameter,
     * the callback is invoked.
     *
     * @param { long } frame - Number of frames to trigger the event. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onMarkReach(frame: long, callback: Callback<long>): void;

    /**
     * Unsubscribes from the mark reached event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'markReach' } type - Event type. The event **'markReach'** is triggered when the number of frames
     *     captured reaches the value of the **frame** parameter.
     * @param { Callback<long> } callback - Callback used to return the value of the **frame** parameter. [since 18]
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    off(type: 'markReach', callback?: Callback<long>): void;

    /**
     * Unsubscribes from the mark reached events.
     *
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offMarkReach(callback?: Callback<long>): void;

    /**
     * Subscribes to the period reached event, which is triggered each time the number of frames captured reaches the
     * value of the **frame** parameter. In other words, the information is reported periodically. This API uses an
     * asynchronous callback to return the result.
     *
     * For example, if **frame** is set to **10**, the callback is invoked each time 10 frames are captured, for example
     * , when the number of frames captured reaches the 10th frame, 20th frame, and 30th frame.
     *
     * @param { 'periodReach' } type - Event type. The event **'periodReach'** is triggered each time the number of
     *     frames captured reaches the value of the **frame** parameter.
     * @param { long } frame - Number of frames to trigger the event. The value must be greater than **0**.
     * @param { Callback<long> } callback - Callback used to return the value of the **frame** parameter.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    on(type: 'periodReach', frame: long, callback: Callback<long>): void;

    /**
     * Subscribes to period reached events. When the period of frame capturing reaches the value of frame parameter,
     * the callback is invoked.
     *
     * @param { long } frame - Period during which frame capturing is listened. The value must be greater than 0.
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onPeriodReach(frame: long, callback: Callback<long>): void;

    /**
     * Unsubscribes from the period reached event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'periodReach' } type - Event type. The event **'periodReach'** is triggered each time the number of
     *     frames captured reaches the value of the **frame** parameter.
     * @param { Callback<long> } callback - Callback used to return the value of the **frame** parameter. [since 18]
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    off(type: 'periodReach', callback?: Callback<long>): void;

    /**
     * Unsubscribes from period reached events.
     *
     * @param { Callback<long> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offPeriodReach(callback?: Callback<long>): void;

    /**
     * Subscribes to the audio capturer state change event, which is triggered when the state of the audio capturer is
     * changed. This API uses an asynchronous callback to return the result.
     *
     * @param { 'stateChange' } type - Event type. The event **'stateChange'** is triggered when the state of the audio
     *     capturer is changed.
     * @param { Callback<AudioState> } callback - Callback used to return the audio status.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @crossplatform [since 12]
     * @since 8 dynamic
     */
    on(type: 'stateChange', callback: Callback<AudioState>): void;

    /**
     * Subscribes audio state change event callback.
     *
     * @param { Callback<AudioState> } callback - Callback used to listen for the audio state change event.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onStateChange(callback: Callback<AudioState>): void;

    /**
     * Unsubscribes from the audio capturer state change event. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'stateChange' } type - Event type. The event **'stateChange'** is triggered when the listening for audio
     *     capturer state change event is canceled.
     * @param { Callback<AudioState> } callback - Callback used to return the audio status.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 18 dynamic
     */
    off(type: 'stateChange', callback?: Callback<AudioState>): void;

    /**
     * Unsubscribes audio state change event callback.
     *
     * @param { Callback<AudioState> } callback - Callback used to listen for the audio state change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offStateChange(callback?: Callback<AudioState>): void;

    /**
     * Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an
     * asynchronous callback to return the result.
     *
     * The AudioCapturer instance proactively gains the focus when the **start** event occurs and releases the focus
     * when the **pause** or **stop** event occurs. Therefore, you do not need to request to gain or release the focus.
     *
     * After this API is called, an [InterruptEvent]{@link @ohos.multimedia.audio:audio.InterruptEvent} is received when
     * the AudioCapturer instance fails to obtain the focus or an audio interruption event occurs (for example, the
     * audio stream is interrupted by others). It is recommended that the application perform further processing based
     * on the **InterruptEvent** information. For details, see
     * [Introduction to Audio Focus](docroot://media/audio/audio-playback-concurrency.md).
     *
     * @param { 'audioInterrupt' } type - Event type. The event **'audioInterrupt'** is triggered when the audio focus
     *     is changed.
     * @param { Callback<InterruptEvent> } callback - Callback used to return the event information.
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
     *
     * @param { Callback<InterruptEvent> } callback - Callback used to listen for interrupt callback.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Interrupt
     * @since 23 static
     */
    onAudioInterrupt(callback: Callback<InterruptEvent>): void;

    /**
     * Unsubscribes from the audio interruption event.
     *
     * @param { 'audioInterrupt' } type - Event type. The event **'audioInterrupt'** is triggered when the audio focus
     *     is changed.
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
     * Subscribes to the audio input device change event, which is triggered when an audio input device is changed. This
     * API uses an asynchronous callback to return the result.
     *
     * @param { 'inputDeviceChange' } type - Event type. The event **'inputDeviceChange'** is triggered when an audio
     *     input device is changed.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to return the updated information about the
     *     audio input device.
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
     *
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    onInputDeviceChange(callback: Callback<AudioDeviceDescriptors>): void;

    /**
     * Unsubscribes from the audio input device change event. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { 'inputDeviceChange' } type - Event type. The event **'inputDeviceChange'** is triggered when an audio
     *     input device is changed.
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used to return the information about the audio
     *     input device.
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
     *
     * @param { Callback<AudioDeviceDescriptors> } callback - Callback used in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @since 23 static
     */
    offInputDeviceChange(callback?: Callback<AudioDeviceDescriptors>): void;

    /**
     * Subscribes to the audio capturer configuration change event, which is triggered when the audio recording stream
     * status or device is changed. This API uses an asynchronous callback to return the result. The subscription is
     * implemented asynchronously and the callback, which is triggered when the audio capturer configuration changes,
     * may fail to reflect the actual condition.
     *
     * @param { 'audioCapturerChange' } type - Event type. The event **'audioCapturerChange'** is triggered when the
     *     audio recording stream status or device is changed.
     * @param { Callback<AudioCapturerChangeInfo> } callback - Callback used to return the current configuration and
     *     status information of the audio capturer.
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
     *
     * @param { Callback<AudioCapturerChangeInfo> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onAudioCapturerChange(callback: Callback<AudioCapturerChangeInfo>): void;

    /**
     * Unsubscribes from the audio capturer configuration change event. This API uses an asynchronous callback to return
     * the result.
     *
     * @param { 'audioCapturerChange' } type - Event type. The event **'audioCapturerChange'** is triggered when the
     *     audio capturer configuration is changed.
     * @param { Callback<AudioCapturerChangeInfo> } callback - Callback used for unsubscription.
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
     *
     * @param { Callback<AudioCapturerChangeInfo> } callback - Callback used in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offAudioCapturerChange(callback?: Callback<AudioCapturerChangeInfo>): void;

    /**
     * Subscribes to the audio data read event, which is triggered when audio stream data needs to be read. This API
     * uses an asynchronous callback to return the result.
     *
     * The callback function is used only to read audio data. Do not call AudioCapturer APIs in it.
     *
     * To eliminate power-on noise caused by the microphone hardware design, the first 100 ms of data after recording
     * starts is typically muted.
     *
     * @param { 'readData' } type - Event type. The event **'readData'** is triggered when audio stream data needs to be
     *     read.
     * @param { Callback<ArrayBuffer> } callback - Callback used to return the buffer from which the data is read.
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
     *
     * @param { Callback<ArrayBuffer> } callback - Callback with the buffer to read.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onReadData(callback: Callback<ArrayBuffer>): void;

    /**
     * Unsubscribes from the audio data read event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'readData' } type - Event type. The event **'readData'** is triggered when audio stream data needs to be
     *     read.
     * @param { Callback<ArrayBuffer> } callback - Callback used to return the buffer from which the data is read.
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
     *
     * @param { Callback<ArrayBuffer> } callback - Callback used in subscribe.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offReadData(callback?: Callback<ArrayBuffer>): void;

    /**
     * Subscribes to micIn audio data callback. This callback has higher priority than 'readData' callback.
     * If this callback and 'readData' callback are both subscribed, only this callback will be triggered.
     * See {@link #onReadData} for more details.
     * The event is triggered when an audio buffer is available for reading more data.
     *
     * @param { Callback<AudioCapturerMicInData> } callback - Callback for the buffers to read.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 6800103 - Operation not permitted at running state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    onReadMicInData(callback: Callback<AudioCapturerMicInData>): void;

    /**
     * Unsubscribes from micIn audio data callback.
     *
     * @param { Callback<AudioCapturerMicInData> } [callback] - Callback for the buffers to read.
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
     * Sets the independent audio session strategy and behavior parameters.
     *
     * > **NOTE**
     * >
     * > If this API is called while an audio capturer is running, you must call the
     * > [start]{@link @ohos.multimedia.audio:audio.AudioCapturer.start(callback: AsyncCallback<void>)} API again for
     * > the settings to take effect.
     *
     * @param { AudioSessionStrategy } strategy - Audio session strategy.
     * @param { int } behavior - Specifies the audio session behavior.<br>This can be a single flag or a bitwise OR
     *     combination of multiple flags.<br>For details about the supported audio session behaviors, see
     *     [AudioSessionBehaviorFlags]{@link @ohos.multimedia.audio:audio.AudioSessionBehaviorFlags}.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @throws { BusinessError } 6800103 - Operation not permit at current state.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setIndependentAudioSessionStrategy(strategy: AudioSessionStrategy, behavior: int): void;
  }

  /**
   * ASR noise suppression mode.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AsrNoiseSuppressionMode {
    /**
     * Bypass noise suppression.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BYPASS = 0,
    /**
     * Standard noise suppression.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    STANDARD = 1,
    /**
     * Near field noise suppression.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NEAR_FIELD = 2,
    /**
     * Far field noise suppression.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    FAR_FIELD = 3,
  }

  /**
   * ASR AEC mode.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AsrAecMode {
    /**
     * Bypass AEC.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BYPASS = 0,
    /**
     * Using standard AEC.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    STANDARD = 1,
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
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_2_VOICE_TX = 0,
    /**
     * Send both output stream and MIC input to TX.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_MIX_2_VOICE_TX = 1,
    /**
     * Based on the AUDIO_2_VOICE_TX, Send output stream to voice call record.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_2_VOICE_TX_EX = 2,
    /**
     * Based on the AUDIO_MIX_2_VOICE_TX, Send output stream to voice call record.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_MIX_2_VOICE_TX_EX = 3,
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
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    OUTPUT_MUTE = 0,
    /**
     * Mute the local MIC input stream.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    INPUT_MUTE = 1,
    /**
     * Send tts output stream to TX and mute the local output stream.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    TTS_MUTE = 2,
    /**
     * Mute the voice call stream.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    CALL_MUTE = 3,
    /**
     * Based on the OUTPUT_MUTE, send output stream to voice call record.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    OUTPUT_MUTE_EX = 4,
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
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BYPASS = 0,
    /**
     * Use standard whisper detection model.
     *
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    STANDARD = 1,
  }

  /**
   * ASR processing controller.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface AsrProcessingController {
    /**
     * Set ASR AEC mode.
     *
     * @param { AsrAecMode } mode - ASR AEC Mode.
     * @returns { boolean } Indicates whether the mode has been successfully set.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
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
     *
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
     *
     * @param { AsrNoiseSuppressionMode } mode - ASR noise suppression mode.
     * @returns { boolean } Indicates whether the mode has been successfully set.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
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
     *
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
     *
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
     *
     * @param { AsrVoiceControlMode } mode - ASR voice control mode.
     * @param { boolean } enable - Indicates whether to switch on/off this mode.
     * @returns { boolean } Indicates whether the mode has been successfully set.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters unspecified.
     *     2.Incorrect parameter types.
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
     *
     * @param { AsrVoiceMuteMode } mode - ASR voice mute mode.
     * @param { boolean } enable - Indicates whether to switch on/off this mode.
     * @returns { boolean } Indicates whether the mode has been successfully set.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters unspecified.
     *     2.Incorrect parameter types.
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
     *
     * @param { AsrWhisperDetectionMode } mode - ASR whisper detection mode.
     * @returns { boolean } Indicates whether the mode has been successfully set.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters unspecified.
     *     2.Incorrect parameter types.
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
     *
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
   *
   * @param { AudioCapturer } audioCapturer - The audio capturer whose ASR processing will be controlled. The source
   *     type of this capturer must be {@link SourceType#SOURCE_TYPE_VOICE_RECOGNITION}.
   * @returns { AsrProcessingController } ASR Processing Controller.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
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
   *
   * @param { AudioCapturer } audioCapturer - The audio capturer whose ASR processing will be controlled. The source
   *     type of this capturer must be {@link SourceType#SOURCE_TYPE_VOICE_RECOGNITION}.
   * @returns { AsrProcessingController | null } ASR Processing Controller, or null when an error happens.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @throws { BusinessError } 6800104 - Operation not allowed. e.g. the source type of the input audio capturer is not
   * {@link SourceType#SOURCE_TYPE_VOICE_RECOGNITION} or {@link SourceType#SOURCE_TYPE_WAKEUP}, or this audio capturer
   * is already released.
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
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_0 = 0,
    /**
     * Dial tone for key 1.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_1 = 1,
    /**
     * Dial tone for key 2.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_2 = 2,
    /**
     * Dial tone for key 3.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_3 = 3,
    /**
     * Dial tone for key 4.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_4 = 4,
    /**
     * Dial tone for key 5.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_5 = 5,
    /**
     * Dial tone for key 6.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_6 = 6,
    /**
     * Dial tone for key 7.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_7 = 7,
    /**
     * Dial tone for key 8.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_8 = 8,
    /**
     * Dial tone for key 9.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_9 = 9,
    /**
     * Dial tone for key *.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_S = 10,
    /**
     * Dial tone for key #.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_P = 11,
    /**
     * Dial tone for key A.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_A = 12,
    /**
     * Dial tone for key B.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_B = 13,
    /**
     * Dial tone for key C.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_C = 14,
    /**
     * Dial tone for key D.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_DIAL_D = 15,
    /**
     * Supervisory tone for dial.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_DIAL = 100,
    /**
     * Supervisory tone for busy.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_BUSY = 101,
    /**
     * Supervisory tone for dial.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_CONGESTION = 102,
    /**
     * Supervisory tone for radio path acknowledgment.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_RADIO_ACK = 103,
    /**
     * Supervisory tone for radio path not available.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_RADIO_NOT_AVAILABLE = 104,
    /**
     * Supervisory tone for call waiting.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_CALL_WAITING = 106,
    /**
     * Supervisory tone for ringtone.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_RINGTONE = 107,
    /**
     * Supervisory tone for call holding.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_SUPERVISORY_CALL_HOLDING = 108,
    /**
     * Proprietary tone for beep.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_PROPRIETARY_BEEP = 200,
    /**
     * Proprietary tone for positive acknowledgment.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_PROPRIETARY_ACK = 201,
    /**
     * Proprietary tone for prompt.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_PROPRIETARY_PROMPT = 203,
    /**
     * Proprietary tone for double beep.
     *
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    TONE_TYPE_COMMON_PROPRIETARY_DOUBLE_BEEP = 204,
  }

  /**
   * Provides APIs for tone playing.
   *
   * @syscap SystemCapability.Multimedia.Audio.Tone
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface TonePlayer {
    /**
     * Loads tone. This method uses an asynchronous callback to return the result.
     *
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
     *
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
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * Starts player. This method uses a promise to return the result.
     *
     * @returns { Promise<void> }Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * Stops player. This method uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * Stops player. This method uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * Releases the player. This method uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases the player. This method uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.Audio.Tone
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
  }

  /**
   * Defines an array that contains the audio effect mode corresponding to a specific audio content type (specified by
   * **ContentType**) and audio stream usage (specified by **StreamUsage**). The
   * [AudioEffectMode]{@link @ohos.multimedia.audio:audio.AudioEffectMode} array is read-only.
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @since 10 dynamic
   * @since 23 static
   */
  type AudioEffectInfoArray = Array<Readonly<AudioEffectMode>>;

  /**
   * Enumerates the audio effect modes.
   *
   * @syscap SystemCapability.Multimedia.Audio.Renderer
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum AudioEffectMode {
    /**
     * The audio effect is disabled.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EFFECT_NONE = 0,
    /**
     * The default audio effect is used.
     *
     * @syscap SystemCapability.Multimedia.Audio.Renderer
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    EFFECT_DEFAULT = 1
  }

  /**
   * Describes spatial device state.
   *
   * @syscap SystemCapability.Multimedia.Audio.Spatialization
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface AudioSpatialDeviceState {
    /**
     * Spatial device address.
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    address: string;

    /**
     * Whether the spatial device supports spatial rendering.
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isSpatializationSupported: boolean;

    /**
     * Whether the spatial device supports head tracking.
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isHeadTrackingSupported: boolean;

    /**
     * Spatial device type.
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
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_NONE = 0,
    /**
     * Audio Spatial Device Type in-ear headphone.
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_IN_EAR_HEADPHONE = 1,
    /**
     * Audio Spatial Device Type half-in-ear headphone.
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_HALF_IN_EAR_HEADPHONE = 2,
    /**
     * Audio Spatial Device Type over-ear headphone.
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_OVER_EAR_HEADPHONE = 3,
    /**
     * Audio Spatial Device Type glasses.
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_GLASSES = 4,
    /**
     * Audio Spatial Device Type others.
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPATIAL_DEVICE_TYPE_OTHERS = 5,
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
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * Audio Spatialization Scene Type Music.
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MUSIC = 1,
    /**
     * Audio Spatialization Scene Type Movie.
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MOVIE = 2,
    /**
     * Audio Spatialization Scene Type Audio Book.
     *
     * @syscap SystemCapability.Multimedia.Audio.Spatialization
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIOBOOK = 3,
  }

  /**
   * Audio AudioChannel Layout.
   * A 64-bit integer indicates that the appearance and order of the speakers for recording or playback.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  enum AudioChannelLayout {
    /**
     * Unknown Channel Layout.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_UNKNOWN = 0x0,
    /**
     * Channel Layout For Mono, 1 channel in total.
     * Speaker layout: front center(FC).
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_MONO = 0x4,
    /**
     * Channel Layout For Stereo, 2 channels in total.
     * Speaker layout: front left(FL), front right(FR).
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_STEREO = 0x3,
    /**
     * Channel Layout For Stereo-Downmix, 2 channels in total.
     * Speaker layout: Stereo left, stereo right.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_STEREO_DOWNMIX = 0x60000000,
    /**
     * Channel Layout For 2.1, 3 channels in total.
     * Speaker layout: Stereo plus low-frequency effects(LFE).
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_2POINT1 = 0xB,
    /**
     * Channel Layout For 3.0, 3 channels in total.
     * Speaker layout: Stereo plus back center(BC).
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_3POINT0 = 0x103,
    /**
     * Channel Layout For Surround, 3 channels in total.
     * Speaker layout: Stereo plus FC.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_SURROUND = 0x7,
    /**
     * Channel Layout For 3.1, 4 channels in total.
     * Speaker layout: Surround plus LFE.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_3POINT1 = 0xF,
    /**
     * Channel Layout For 4.0, 4 channels in total.
     * Speaker layout: Surround plus BC.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_4POINT0 = 0x107,
    /**
     * Channel Layout For Quad, 4 channels in total.
     * Speaker layout: Stereo plus left and right back speakers.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_QUAD = 0x33,
    /**
     * Channel Layout For Quad-Side, 4 channels in total.
     * Speaker layout: Stereo plus left and right side speakers(SL, SR).
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_QUAD_SIDE = 0x603,
    /**
     * Channel Layout For 2.0.2, 4 channels in total.
     * Speaker layout: Stereo plus left and right top side speakers.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_2POINT0POINT2 = 0x3000000003,
    /**
     * Channel Layout For ORDER1-ACN-N3D First Order Ambisonic(FOA), 4 channels in total.
     * First order, Ambisonic Channel Number(ACN) format, Normalization of three-D(N3D).
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER1_ACN_N3D = 0x100000000001,
    /**
     * Channel Layout For ORDER1-ACN-SN3D FOA, 4 channels in total.
     * First order, ACN format, Semi-Normalization of three-D(SN3D).
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER1_ACN_SN3D = 0x100000001001,
    /**
     * Channel Layout For ORDER1-FUMA FOA, 4 channels in total.
     * First order, Furse-Malham(FuMa) format.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER1_FUMA = 0x100000000101,
    /**
     * Channel Layout For 4.1, 5 channels in total.
     * Speaker layout: 4.0 plus LFE.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_4POINT1 = 0x10F,
    /**
     * Channel Layout For 5.0, 5 channels in total.
     * Speaker layout: Surround plus two side speakers.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT0 = 0x607,
    /**
     * Channel Layout For 5.0-Back, 5 channels in total.
     * Speaker layout: Surround plus two back speakers.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT0_BACK = 0x37,
    /**
     * Channel Layout For 2.1.2, 5 channels in total.
     * Speaker layout: 2.0.2 plus LFE.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_2POINT1POINT2 = 0x300000000B,
    /**
     * Channel Layout For 3.0.2, 5 channels in total.
     * Speaker layout: 2.0.2 plus FC.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_3POINT0POINT2 = 0x3000000007,
    /**
     * Channel Layout For 5.1, 6 channels in total.
     * Speaker layout: 5.0 plus LFE.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT1 = 0x60F,
    /**
     * Channel Layout For 5.1-Back, 6 channels in total.
     * Speaker layout: 5.0-Back plus LFE.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT1_BACK = 0x3F,
    /**
     * Channel Layout For 6.0, 6 channels in total.
     * Speaker layout: 5.0 plus BC.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_6POINT0 = 0x707,
    /**
     * Channel Layout For Hexagonal, 6 channels in total.
     * Speaker layout: 5.0-Back plus BC.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_HEXAGONAL = 0x137,
    /**
     * Channel Layout For 3.1.2, 6 channels in total.
     * Speaker layout: 3.1 plus two top front speakers(TFL, TFR).
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_3POINT1POINT2 = 0x500F,
    /**
     * Channel Layout For 6.0-Front, 6 channels in total.
     * Speaker layout: Quad-Side plus left and right front center speakers(FLC, FRC).
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_6POINT0_FRONT = 0x6C3,
    /**
     * Channel Layout For 6.1, 7 channels in total.
     * Speaker layout: 5.1 plus BC.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_6POINT1 = 0x70F,
    /**
     * Channel Layout For 6.1-Back, 7 channels in total.
     * Speaker layout: 5.1-Back plus BC.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_6POINT1_BACK = 0x13F,
    /**
     * Channel Layout For 6.1-Front, 7 channels in total.
     * Speaker layout: 6.0-Front plus LFE.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_6POINT1_FRONT = 0x6CB,
    /**
     * Channel Layout For 7.0, 7 channels in total.
     * Speaker layout: 5.0 plus two back speakers.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT0 = 0x637,
    /**
     * Channel Layout For 7.0-Front, 7 channels in total.
     * Speaker layout: 5.0 plus left and right front center speakers.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT0_FRONT = 0x6C7,
    /**
     * Channel Layout For 7.1, 8 channels in total.
     * Speaker layout: 5.1 plus two back speakers.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT1 = 0x63F,
    /**
     * Channel Layout For Octagonal, 8 channels in total.
     * Speaker layout: 5.0 plus BL, BR and BC.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_OCTAGONAL = 0x737,
    /**
     * Channel Layout For 5.1.2, 8 channels in total.
     * Speaker layout: 5.1 plus two top side speakers.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT1POINT2 = 0x300000060F,
    /**
     * Channel Layout For 7.1-Wide, 8 channels in total.
     * Speaker layout: 5.1 plus left and right front center speakers.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT1_WIDE = 0x6CF,
    /**
     * Channel Layout For 7.1-Wide, 8 channels in total.
     * Speaker layout: 5.1-Back plus left and right front center speakers.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT1_WIDE_BACK = 0xFF,
    /**
     * Channel Layout For ORDER2-ACN-N3D Higher Order Ambisonics(HOA), 9 channels in total.
     * Second order, ACN format, N3D.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER2_ACN_N3D = 0x100000000002,
    /**
     * Channel Layout For ORDER2-ACN-SN3D HOA, 9 channels in total.
     * Second order, ACN format, SN3D.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER2_ACN_SN3D = 0x100000001002,
    /**
     * Channel Layout For ORDER2-FUMA HOA, 9 channels in total.
     * Second order, FuMa format.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER2_FUMA = 0x100000000102,
    /**
     * Channel Layout For 5.1.4, 10 channels in total.
     * Speaker layout: 5.1 plus four top speakers(TFL, TFR, TBL, TBR).
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_5POINT1POINT4 = 0x2D60F,
    /**
     * Channel Layout For 7.1.2, 10 channels in total.
     * Speaker layout: 7.1 plus two top side speakers.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT1POINT2 = 0x300000063F,
    /**
     * Channel Layout For 7.1.4, 12 channels in total.
     * Speaker layout: 7.1 plus four top speakers.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_7POINT1POINT4 = 0x2D63F,
    /**
     * Channel Layout For 10.2, 12 channels in total.
     * Speaker layout: FL, FR, FC, TFL, TFR, BL, BR, BC, SL, SR, wide left(WL), and wide right(WR).
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_10POINT2 = 0x180005737,
    /**
     * Channel Layout For 9.1.4, 14 channels in total.
     * Speaker layout: 7.1.4 plus two wide speakers(WL, WR).
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_9POINT1POINT4 = 0x18002D63F,
    /**
     * Channel Layout For 9.1.6, 16 channels in total.
     * Speaker layout: 9.1.4 plus two top side speakers.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_9POINT1POINT6 = 0x318002D63F,
    /**
     * Channel Layout For Hexadecagonal, 16 channels in total.
     * Speaker layout: Octagonal plus two wide speakers, six top speakers(TFL, TFR, TFC, TBL, TBR, TBC).
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_HEXADECAGONAL = 0x18003F737,
    /**
     * Channel Layout For ORDER3-ACN-N3D HOA, 16 channels in total.
     * Third order, ACN format, N3D.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER3_ACN_N3D = 0x100000000003,
    /**
     * Channel Layout For ORDER3-ACN-SN3D HOA, 16 channels in total.
     * Third order, ACN format, N3D.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER3_ACN_SN3D = 0x100000001003,
    /**
     * Channel Layout For ORDER3-FUMA HOA, 16 channels in total.
     * Third order, FuMa format.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @since 11 dynamic
     * @since 23 static
     */
    CH_LAYOUT_AMB_ORDER3_FUMA = 0x100000000103
  }

  /**
   * Enumerates audio effect flags.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  enum EffectFlag {
    /**
     * Audio render effect.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    RENDER_EFFECT_FLAG = 0,

    /**
     * Audio capture effect.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    CAPTURE_EFFECT_FLAG = 1
  }

  /**
   * Describes an audio effect property.
   *
   * @syscap SystemCapability.Multimedia.Audio.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface AudioEffectProperty {
    /**
     * Name of effect property.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Effect category this effect property belongs to.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    category: string;

    /**
     * Effect flag of this effect property.
     *
     * @syscap SystemCapability.Multimedia.Audio.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    flag: EffectFlag;
  }

  /**
   * Describes an audio device pair including both input and output devices.
   *
   * @syscap SystemCapability.Multimedia.Audio.Device
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AudioDevicePair {
    /**
     * Input audio device descriptor.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    inputDevice: AudioDeviceDescriptor;

    /**
     * Output audio device descriptor.
     *
     * @syscap SystemCapability.Multimedia.Audio.Device
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    outputDevice: AudioDeviceDescriptor;
  }

  /**
   * This interface provides APIs for audio monitoring.
   *
   * Before calling any API in AudioLoopback, you must use
   * [audio.createAudioLoopback]{@link @ohos.multimedia.audio:audio.createAudioLoopback(mode: AudioLoopbackMode)} to
   * create an AudioLoopback instance.
   *
   * When audio loopback is enabled, the system creates a low-latency renderer and capturer to implement low-latency in-
   * ear monitoring. The audio captured is routed back to the renderer through an internal path. The renderer follows
   * the audio focus strategy for [STREAM_USAGE_MUSIC]{@link @ohos.multimedia.audio:audio.StreamUsage}, whereas the
   * capturer follows the strategy for [SOURCE_TYPE_MIC]{@link @ohos.multimedia.audio:audio.SourceType}.
   *
   * The system automatically chooses the input and output devices. If these devices do not support low latency, audio
   * loopback does not work. If another audio stream takes over the audio focus or if the input or output device changes
   * to the one that does not support low latency, the system disables audio loopback automatically.
   *
   * > **NOTE**
   * >
   * > - The initial APIs of this interface are supported since API version 20.
   *
   * @syscap SystemCapability.Multimedia.Audio.Capturer
   * @since 20 dynamic
   * @since 23 static
   */
  interface AudioLoopback {
    /**
     * Obtains the audio loopback status. This API uses a promise to return the result.
     *
     * @returns { Promise<AudioLoopbackStatus> } Promise used to return the audio loopback status.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    getStatus(): Promise<AudioLoopbackStatus>;

    /**
     * Sets the volume for audio loopback. This volume does not affect other audio streams or the system volume.
     * @param { double } volume Volume to set. The value type is float, ranging from 0.0 to 1.0.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 6800101 - Parameter verification failed, from 0.0 to 1.0.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    setVolume(volume: double): Promise<void>;

    /**
     * Gets the output volume for audio loopback.
     *
     * @returns { double } Current audio loopback output volume value.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getVolume(): double;

    /**
     * Subscribes to the audio loopback status change event, which is triggered when the status of the audio loopback is
     * changed. This API uses an asynchronous callback to return the result.
     *
     * @param { 'statusChange' } type - Event type. The event **'statusChange'** is triggered when the status of the
     *     audio loopback is changed.
     * @param { Callback<AudioLoopbackStatus> } callback - Callback used to return the audio loopback status.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     */
    on(type: 'statusChange', callback: Callback<AudioLoopbackStatus>): void;

    /**
     * Subscribes to audio loopback status changes.
     *
     * @param { Callback<AudioLoopbackStatus> } callback Callback used to return the audio loopback status
     *     change event.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    onStatusChange(callback: Callback<AudioLoopbackStatus>): void;

    /**
     * Unsubscribes from the audio loopback status event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'statusChange' } type - Event type. The event **'statusChange'** is triggered when the status of the
     *     audio loopback is changed.
     * @param { Callback<AudioLoopbackStatus> } [callback] - Callback used to return the audio loopback status.
     * @throws  { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     */
    off(type: 'statusChange', callback?: Callback<AudioLoopbackStatus>): void;

    /**
     * Unsubscribes audio loopback status change event callback.
     *
     * @param { Callback<AudioLoopbackStatus> } [callback] - Callback used to listen for the audio loopback status
     *     change event.
     * @throws  { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 23 static
     */
    offStatusChange(callback?: Callback<AudioLoopbackStatus>): void;

    /**
     * Gets supported audio device pairs in current device connection situation.
     *
     * @returns { Array<AudioDevicePair> } Audio device pairs that support loopback,
     *     if there is no supported device pair, empty array will be returned.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getSupportedDevicePairs(): Array<AudioDevicePair>;

    /**
     * Gets the preferred audio device pair in current device connection situation.
     *
     * @returns { AudioDevicePair | null }  The preferred audio device pair in audio system,
     *     or null if there is no supported device pair.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getPreferredDevicePair(): AudioDevicePair | null;

    /**
     * Enable or disable audio loopback.
     * When audio loopback is enabled, the system automatically creates fast playback and recording streams
     * to implement low-latency in-ear monitoring. When audio loopback is disabled, the audio stream is destroyed.
     * If enabling audio loopback fails, you can use {@link AudioLoopback#getStatus} to query the cause. After audio
     * loopback is enabled, you can subscribe to the statusChange event to listen for audio loopback status changes.
     *
     * @permission ohos.permission.MICROPHONE
     * @param { boolean } enable - Whether to enable or disable audio loopback. **true** to enable, **false** otherwise.
     * @returns { Promise<boolean> } Promise used to return the result, indicating whether the API call is successful.
     *     **true** is successful, **false** otherwise.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 20 dynamic
     * @since 23 static
     */
    enable(enable: boolean): Promise<boolean>;

    /**
     * Sets the reverberation of the audio loopback.
     *
     * @param { AudioLoopbackReverbPreset } preset - Reverb mode.
     * @returns { boolean } Setting result. **true** if successful, **false** otherwise.
     * @throws  { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    setReverbPreset(preset: AudioLoopbackReverbPreset): boolean;

    /**
     * Get the current reverberation.
     * The default reverberation preset of audio loopback is {@link AudioLoopbackReverbPreset#THEATER} if
     * users do not modify the preset.
     *
     * @returns { AudioLoopbackReverbPreset  } Reverb mode.
     *     <br>If no reverb mode has been set, the default reverb mode is **THEATER**.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    getReverbPreset(): AudioLoopbackReverbPreset;

    /**
     * Sets the equalizer preset of the audio loopback.
     *
     * @param { AudioLoopbackEqualizerPreset } preset - Equalizer type.
     * @returns { boolean } Setting result. **true** if successful, **false** otherwise.
     * @throws  { BusinessError } 6800101 - Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    setEqualizerPreset(preset: AudioLoopbackEqualizerPreset): boolean;

    /**
     * Gets the current equalizer preset.
     * The default equalizer preset of audio loopback is {@link AudioLoopbackEqualizerPreset#FULL} if
     * users do not modify the preset.
     *
     * @returns { AudioLoopbackEqualizerPreset } Equalizer type.
     *     <br>If no equalizer type has been set, the default equalizer type is **FULL**.
     * @syscap SystemCapability.Multimedia.Audio.Capturer
     * @since 21 dynamic
     * @since 24 static
     */
    getEqualizerPreset(): AudioLoopbackEqualizerPreset;
  }
}

export default audio;
