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
 * @kit AudioKit
 */

import type { Callback } from './@ohos.base';
import type audio from './@ohos.multimedia.audio';

/**
 * Audio-haptic enables users to get rhythmic auditory and haptic feedback while having incoming calls or messages.
 * 
 * **Device behavior difference**: For a device without a vibration component, no vibration effect is generated.
 *
 * @syscap SystemCapability.Multimedia.AudioHaptic.Core
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace audioHaptic {
  /**
   * Obtains an {@link AudioHapticManager} instance. This object is singleton in one process.
   *
   * @returns { AudioHapticManager } AudioHapticManager instance.
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11 dynamic
   * @since 23 static
   */
  function getAudioHapticManager(): AudioHapticManager;

  /**
   * Enumerates the audio latency modes.
   *
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum AudioLatencyMode {
    /**
     * Normal latency mode.
     *
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    AUDIO_LATENCY_MODE_NORMAL = 0,

    /**
     * Low latency mode. This mode is applicable to short audio files. A long audio file may be truncated in this mode. 
     * It functions the same as 
     * [SoundPool](docroot://reference/apis-media-kit/js-apis-inner-multimedia-soundPool.md#soundpool).
     *
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    AUDIO_LATENCY_MODE_FAST = 1
  }

  /**
   * Describes the options for the audio-haptic player.
   *
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface AudioHapticPlayerOptions {
    /**
     * Whether to mute the audio. **true** to mute, **false** otherwise. If this parameter is not specified, the default
     * value **false** is used.
     *
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    muteAudio?: boolean;

    /**
     * Whether to mute haptics feedback. **true** to mute, **false** otherwise. If this parameter is not specified, the 
     * default value **false** is used.
     *
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    muteHaptics?: boolean;
  }

  /**
   * Manages the audio-haptic feature. Before calling any API in AudioHapticManager, you must use 
   * [getAudioHapticManager]{@link audioHaptic.getAudioHapticManager} to create an AudioHapticManager instance.
   *
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface AudioHapticManager {
    /**
     * Registers audio and haptic resources via URIs. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > A maximum of 128 resources can be registered at the same time for an application. Any attempt to register 
     * > beyond this limit will fail (returning a negative resource ID). You are advised to reasonably manage the number
     * > of registered resources. For resources that are no longer used, you are advised to unregister them in a timely 
     * > manner.
     *
     * @param { string } audioUri - URI of the audio source.<br>- For details about the supported audio resource formats
     *     and path formats in the normal latency mode, see [AVPlayer]{@link @ohos.multimedia.media:media}.<br>- For
     *     details about the supported audio resource formats in the low-latency mode, see
     *     [SoundPool](docroot://reference/apis-media-kit/js-apis-inner-multimedia-soundPool.md#soundpool). The path
     *     format must meet the requirements described in
     *     [fileIo.open](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileioopen).<br>- In both modes, you
     *     are advised to pass in the absolute path of the file.
     * @param { string } hapticUri - URI of the haptic source.<br>For details about the supported haptic resource
     *     formats, see [HapticFileDescriptor]{@link @ohos.vibrator:vibrator.HapticFileDescriptor}. The path format must
     *     meet the requirements described in
     *     [fileIo.open](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileioopen).<br>You are advised to
     *     pass in the absolute path of the file.
     * @returns { Promise<int> } Promise, which returns the registered resource ID.
     *     <br>In normal cases, the returned resource ID is a non-negative number. A negative ID indicates a registration
     *     failure. In this case, check whether the number of registered resources exceeds the upper limit.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    registerSource(audioUri: string, hapticUri: string): Promise<int>;

    /**
     * Unregisters an audio-haptic source. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > For resources that are no longer used, you are advised to unregister them in a timely manner to avoid issues 
     * > such as resource leaks or the number of resources exceeding the upper limit.
     *
     * @param { int } id - Source ID.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    unregisterSource(id: int): Promise<void>;

    /**
     * Sets the latency mode for an audio-haptic source.
     *
     * @param { int } id - Source ID.
     * @param { AudioLatencyMode } latencyMode - Audio latency mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    setAudioLatencyMode(id:int, latencyMode: AudioLatencyMode): void;

    /**
     * Sets the stream usage for an audio-haptic source.
     *
     * @param { int } id - Source ID.
     * @param { audio.StreamUsage } usage - Stream usage.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types;
     *     3.Parameter verification failed.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    setStreamUsage(id: int, usage: audio.StreamUsage): void;

    /**
     * Create an audio haptic player. This method uses a promise to return the result. If haptics is needed, caller
     * should have the permission of ohos.permission.VIBRATE.
     *
     * @permission ohos.permission.VIBRATE
     * @param { number } id - Source ID.
     * @param { AudioHapticPlayerOptions } options - Options of the audio-haptic player.
     * @returns { Promise<AudioHapticPlayer> } Promise used to return the audio-haptic player.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400106 - Unsupport format.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     */
    createPlayer(id: number, options?: AudioHapticPlayerOptions): Promise<AudioHapticPlayer>;

    /**
     * Create an audio haptic player. This method uses a promise to return the result. If haptics is needed, caller
     * should have the permission of ohos.permission.VIBRATE.
     *
     * @permission ohos.permission.VIBRATE
     * @param { int } id - Source id.
     * @param { AudioHapticPlayerOptions } [options] - Options when creating audio haptic player.
     * @returns { Promise<AudioHapticPlayer | null> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400106 - Unsupport format.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 23 static
     */
    createPlayer(id: int, options?: AudioHapticPlayerOptions): Promise<AudioHapticPlayer | null>;

    /**
     * Registers audio and haptic resources via file descriptors. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > A maximum of 128 resources can be registered at the same time for an application. Any attempt to register 
     * > beyond this limit will fail (returning a negative resource ID). You are advised to reasonably manage the number
     * > of registered resources. For resources that are no longer used, you are advised to unregister them in a timely 
     * > manner.
     *
     * @param { AudioHapticFileDescriptor } audioFd - Valid file descriptor object that has been opened, used to
     *     describe the audio file. The offset and length must match the actual file length.
     * @param { AudioHapticFileDescriptor } hapticFd - Valid file descriptor object that has been opened, used to
     *     describe the haptic file. The offset and length must match the actual file length.
     * @returns { Promise<int> } Promise, which returns the registered resource ID.
     *     <br>In normal cases, the returned resource ID is a non-negative number. A negative ID indicates a registration
     *     failure. In this case, check whether the number of registered resources exceeds the upper limit.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    registerSourceFromFd(audioFd: AudioHapticFileDescriptor, hapticFd: AudioHapticFileDescriptor): Promise<int>;
  }

  /**
   * Enumerates the audio haptic types.
   *
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum AudioHapticType {
    /**
     * Audio.
     *
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    AUDIO_HAPTIC_TYPE_AUDIO = 0,

    /**
     * Haptic.
     *
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    AUDIO_HAPTIC_TYPE_HAPTIC = 1,
  }

  /**
   * Describes the audio-haptic file descriptor.
   * 
   * > **NOTE**
   * >
   * > Ensure that **fd** is an available file descriptor and the values of **offset** and **length** are correct.
   *
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface AudioHapticFileDescriptor {
    /**
     * File descriptor of the audio-haptic file, which is generally greater than or equal to 0.
     *
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    fd: int;

    /**
     * Number of bytes to read. By default, the length is the number of bytes remaining in the file from the offset 
     * position.
     *
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    length?: long;

    /**
     * Offset for reading data from the file, in bytes. By default, the offset is 0.
     *
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    offset?: long
  }

  /**
   * Implements audio-haptic playback. Before calling any API in AudioHapticPlayer, you must use 
   * [createPlayer]{@link audioHaptic.AudioHapticManager.createPlayer(id: number, options?: AudioHapticPlayerOptions)} 
   * to create an AudioHapticPlayer instance.
   *
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface AudioHapticPlayer {
    /**
     * Checks whether an audio-haptic type is muted.
     *
     * @param { AudioHapticType } type - Audio-haptic type.
     * @returns { boolean } Check result for whether the audio-haptic type is muted. **true** if muted, **false**
     *     otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    isMuted(type: AudioHapticType): boolean;

    /**
     * Starts playback. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operate not permit.
     * @throws { BusinessError } 5400103 - IO error.
     * @throws { BusinessError } 5400105 - Service died.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * Stops playback. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operate not permit.
     * @throws { BusinessError } 5400105 - Service died.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * Releases this audio-haptic player. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400105 - Service died.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * Subscribes to end of stream (EOS) event, which is triggered when the audio stream playback ends. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { 'endOfStream' } type - Event type. The event **'endOfStream'** is triggered when the audio stream
     *     playback ends.
     * @param { Callback<void> } callback - Callback that returns no value.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     */
    on(type: 'endOfStream', callback: Callback<void>): void;

    /**
     * Subscribes end of stream event.
     *
     * @param { Callback<void> } callback - Callback used to listen for the playback end of stream.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 23 static
     */
    onEndOfStream(callback: Callback<void>): void;

    /**
     * Unsubscribes from the EOS event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'endOfStream' } type - Event type. The event **'endOfStream'** is triggered when the audio stream
     *     playback ends.
     * @param { Callback<void> } [callback] - Callback that returns no value.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     */
    off(type: 'endOfStream', callback?: Callback<void>): void;

    /**
     * Unsubscribes end of stream event.
     *
     * @param { Callback<void> } [callback] - Callback used to listen for the playback end of stream.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 23 static
     */
    offEndOfStream(callback?: Callback<void>): void;

    /**
     * Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an 
     * asynchronous callback to return the result.
     *
     * @param { 'audioInterrupt' } type - Event type. The event **'audioInterrupt'** is triggered when the audio focus
     *     is changed.
     * @param { Callback<audio.InterruptEvent> } callback - Callback used to return the event information.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     */
    on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>): void;

    /**
     * Subscribes audio interrupt event.
     *
     * @param { Callback<audio.InterruptEvent> } callback - Callback used to listen for audio interrupt info.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 23 static
     */
    onAudioInterrupt(callback: Callback<audio.InterruptEvent>): void;

    /**
     * Unsubscribes from the audio interruption event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'audioInterrupt' } type - Event type. The event **'audioInterrupt'** is triggered when the audio focus
     *     is changed.
     * @param { Callback<audio.InterruptEvent> } callback - Callback used to return the event information.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11 dynamic
     */
    off(type: 'audioInterrupt', callback?: Callback<audio.InterruptEvent>): void;

    /**
     * Unsubscribes audio interrupt event.
     *
     * @param { 'audioInterrupt' } type - Type of the playback event to listen for.
     * @param { Callback<audio.InterruptEvent> } callback - Callback used to listen for audio interrupt info.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 23 static
     */
    offAudioInterrupt(callback?: Callback<audio.InterruptEvent>): void;

    /**
     * Enable haptics when the ringer mode is silent mode.
     * This function should be called before player start or after stop, and before release.
     *
     * @param { boolean } enable - use {@code true} if application want to enable this feature.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 5400102 - Operate not permit in current state.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    enableHapticsInSilentMode(enable: boolean): void;

    /**
     * Sets the volume for this audio-haptic player. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > This API must be called before the audio-haptic player is released.
     *
     * @param { double } volume - Volume, in the range [0.00, 1.00], where 1.00 indicates the maximum volume (100%).
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operate not permit in current state.
     * @throws { BusinessError } 5400105 - Service died.
     * @throws { BusinessError } 5400108 - Parameter out of range.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    setVolume(volume: double): Promise<void>;

    /**
     * Check whether the device supports haptics intensity adjustment.
     *
     * @returns { boolean } - {@code true} means supported.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isHapticsIntensityAdjustmentSupported(): boolean;

    /**
     * Set haptics intensity for this player. This method uses a promise to return the result.
     * This function should be called before player release, and can only set once for each starting process.
     *
     * @param { double } intensity - Target Haptics intensity value.
     *     The value ranges from 0.00 to 1.00. 1.00 indicates the maximum intensity (100%).
     * @returns { Promise<void> } Promise used to return the result.
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
     * Check whether the device supports haptics intensity ramp effect.
     *
     * @returns { boolean } - {@code true} means supported.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isHapticsRampSupported(): boolean;

    /**
     * Set haptics intensity ramp effect for this player. This method uses a promise to return the result.
     * This function should be called before player start or after stop, and before release.
     *
     * @param { int } duration - ramp duration to set, unit is milliseconds.
     *     The value should be an integer, and not less than 100.
     * @param { double } startIntensity - Starting intensity for Haptics ramp to set.
     *     The value ranges from 0.00 to 1.00. 1.00 indicates the maximum intensity (100%).
     * @param { double } endIntensity - End intensity for haptics ramp to set.
     *     The value ranges from 0.00 to 1.00. 1.00 indicates the maximum intensity (100%).
     * @returns { Promise<void> } Promise used to return the result.
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
     * Sets this audio-haptic player to play in a loop. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > This API must be called before the audio-haptic player is released.
     *
     * @param { boolean } loop - Whether to play in a loop. **true** to play in a loop, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operate not permit in current state.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 20 dynamic
     * @since 23 static
     */
    setLoop(loop: boolean): Promise<void>;
  }
}
export default audioHaptic;
