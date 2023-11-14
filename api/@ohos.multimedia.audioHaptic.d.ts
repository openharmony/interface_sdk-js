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

import type { AsyncCallback } from './@ohos.base';
import type audio from './@ohos.multimedia.audio';

/**
 * Provides audio haptic collaborative play interfaces.
 *
 * @namespace audioHaptic
 * @syscap SystemCapability.Multimedia.AudioHaptic.Core
 * @since 11
 */
declare namespace audioHaptic {
  /**
   * Obtains an {@link AudioHapticManager} instance. This object is singleton in one process.
   * @returns { AudioHapticManager } this {@link AudioHapticManager} object.
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11
   */
  function getAudioHapticManager(): AudioHapticManager;

  /**
   * Audio Latency mode.
   * @enum {number}
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11
   */
  enum AudioLatencyMode {
    /**
     * Normal audio mode.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    AUDIO_LATENCY_MODE_NORMAL = 0,

    /**
     * Low latency mode. This mode should be used when duration of the audio source is short. If duration of the audio 
     * source is long, it may be truncated. This behavior is the same with sound pool.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    AUDIO_LATENCY_MODE_FAST = 1
  }

  /**
   * Audio haptic player options object.
   * @typedef AudioHapticPlayerOptions
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11
   */
  interface AudioHapticPlayerOptions {
    /**
     * Mute audio.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    muteAudio?: boolean;

    /**
     * Mute haptic.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    muteHaptic?: boolean;
  }

  /**
   * Audio haptic manager object.
   * @typedef AudioHapticManager
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11
   */
  interface AudioHapticManager {
    /**
     * Register audio and haptic file into manager. Audio and haptic works are paired while playing. After registering
     * source, it will return one source id. This method uses an asynchronous callback to return the source id.
     * @param { string } audioFile - Audio file uri. 
     * @param { string } hapticFile - Haptic file uri. 
     * @param { AsyncCallback<number> } callback - Callback used to return the source id.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    registerSource(audioFile: string, hapticFile: string, callback: AsyncCallback<number>): void;

    /**
     * Register audio and haptic file into manager. Audio and haptic works are paired while playing. After registering
     * source, it will returns the source id. This method uses a promise to return the source id.
     * @param { string } audioFile - Audio file uri.
     * @param { string } hapticFile - Haptic file uri.
     * @returns { Promise<number> } Promise used to return the source id.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    registerSource(audioFile: string, hapticFile: string): Promise<number>;

    /**
     * Unregister source. This method uses an asynchronous callback to return the result.
     * @param { number } id source id. 
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    unregisterSource(id: number, callback: AsyncCallback<void>): void;

    /**
     * Unregister source. This method uses a promise to return the result.
     * @param { number } id source id.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    unregisterSource(id: number): Promise<void>;

    /**
     * Set the source attributes of one source. This function should be called before 
     * ohos.multimedia.audioHaptic.AudioHapticPlayer#preload. After preload the source, calling this function has no
     * effect.
     * @param { number } id - Source id.
     * @param { AudioLatencyMode } latencyMode - Audio latency mode.
     * @param { audio.StreamUsage } usage - Stream usage.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    setSourceAttrs(id: number, latencyMode: AudioLatencyMode, usage: audio.StreamUsage): void;

    /**
     * Preload the source. This method uses an asynchronous callback to return the result.
     * @param { number } id - Source id.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    preload(id: number, callback: AsyncCallback<void>): void;

    /**
     * Preload the source. This method uses a promise to return the result.
     * @param { number } id - Source id.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    preload(id: number): Promise<void>;

    /**
     * Create an audio haptic player. This method uses an asynchronous callback to return the result.
     * @param { number } id - Source id.
     * @param { AsyncCallback<AudioHapticPlayer> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    createPlayer(id: number, callback: AsyncCallback<AudioHapticPlayer>): void;

    /**
     * Create an audio haptic player. This method uses a promise to return the result.
     * @param { number } id - Source id.
     * @returns { Promise<AudioHapticPlayer> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
     createPlayer(id: number): Promise<AudioHapticPlayer>;

    /**
     * Create an audio haptic player. This method uses an asynchronous callback to return the result.
     * @param { number } id - Source id.
     * @param { AudioHapticPlayerOptions } options - Options when create audio haptic player.
     * @param { AsyncCallback<AudioHapticPlayer> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    createPlayer(id: number, options: AudioHapticPlayerOptions, callback: AsyncCallback<AudioHapticPlayer>): void;

    /**
     * Create an audio haptic player. This method uses a promise to return the result.
     * @param { number } id - Source id.
     * @param { AudioHapticPlayerOptions } options - Options when creating audio haptic player.
     * @returns { Promise<AudioHapticPlayer> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    createPlayer(id: number, options: AudioHapticPlayerOptions): Promise<AudioHapticPlayer>;
  }

  /**
   * Type of audio haptic.
   * @enum {number}
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11
   */
  enum AudioHapticType {
    /**
     * Audio.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    AUDIO_HAPTIC_TYPE_AUDIO = 0,

    /**
     * Haptic.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    AUDIO_HAPTIC_TYPE_HAPTIC = 1,
  }

  /**
   * Audio haptic player object.
   * @typedef AudioHapticPlayer
   * @syscap SystemCapability.Multimedia.AudioHaptic.Core
   * @since 11
   */
  interface AudioHapticPlayer {
    /**
     * Is muted for one AudioHapticType
     * @param { AudioHapticType } type - Indicates the type to query.
     * @returns { boolean } - Is muted.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    isMuted(type: AudioHapticType): boolean;

    /**
     * Start this player. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * Start this player. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    start(): Promise<void>;

    /**
     * Stop this player. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * Stop this player. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    stop(): Promise<void>;

    /**
     * Release this player. This method uses an asynchronous callback to return the result.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Release this player. This method uses a promise to return the result.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    release(): Promise<void>;

    /**
     * Register listens for playback events.
     * @param { 'endOfStream' } type - Type of the playback event to listen for.
     * @param { AsyncCallback<void> } callback - Callback used to listen for the playback end of stream.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    on(type: 'endOfStream', callback: AsyncCallback<void>): void;

    /**
     * Unregister listens for playback events.
     * @param { 'endOfStream' } type - Type of the playback event to listen for.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    off(type: 'endOfStream'): void;

    /**
     * Register listens for playback events.
     * @param { 'audioInterrupt' } type - Type of the playback event to listen for.
     * @param { AsyncCallback<audio.InterruptEvent> } callback - Callback used to listen for audio interrupt info.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    on(type: 'audioInterrupt', callback: AsyncCallback<audio.InterruptEvent>): void;

    /**
     * Unregister listens for playback events.
     * @param { 'audioInterrupt' } type - Type of the playback event to listen for.
     * @syscap SystemCapability.Multimedia.AudioHaptic.Core
     * @since 11
     */
    off(type: 'audioInterrupt'): void;
  }
}
export default audioHaptic;
