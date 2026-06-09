/*
 * Copyright (c) 2023-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The module provides APIs for playing and configuring SMS tones and notification tones and obtaining related 
 * information.
 * 
 * This module must work with 
 * [@ohos.multimedia.systemSoundManager]{@link ./../@ohos.multimedia.systemSoundManager:systemSoundManager} to manage 
 * system tones.
 * 
 * > **NOTE**
 * >
 * > - The APIs provided by this module are system APIs.
 *
 * @file
 * @kit AudioKit
 */

import type systemSoundManager from '../@ohos.multimedia.systemSoundManager';
import { ErrorCallback, Callback } from '../@ohos.base';
/**
 * The module provides APIs for playing and configuring SMS tones and notification tones and obtaining related 
 * information. Before calling any API in SystemTonePlayer, you must use 
 * [getSystemTonePlayer]{@link ./../@ohos.multimedia.systemSoundManager:systemSoundManager.SystemSoundManager.getSystemTonePlayer(context: BaseContext, type: SystemToneType)}
 * to create a SystemTonePlayer instance.
 *
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
export declare interface SystemTonePlayer {
  /**
   * Obtains the title of a system tone. This API uses a promise to return the result.
   *
   * @returns { Promise<string> } Promise used to return the title obtained.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 5400103 - I/O error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  getTitle(): Promise<string>;

  /**
   * Sets the scale of the audio volume. No result is returned.
   *
   * @param { double } scale - Scale of the audio volume. The value is in the range [0, 1].
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 5400102 - Operation not allowed.
   * @throws { BusinessError } 20700002 - Parameter check error. For example, value is outside [0,1].
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  setAudioVolumeScale(scale: double): void;

  /**
   * Obtains the scale of the audio volume. This API returns the result synchronously.
   *
   * @returns { double } Current audio volume. The value range is [0, 1].
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  getAudioVolumeScale(): double;

  /**
   * Obtains the supported haptics styles. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<systemSoundManager.ToneHapticsFeature>> } Promise used to return an array of the supported
   *     haptics styles.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 20700003 - Unsupported operation.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  getSupportedHapticsFeatures(): Promise<Array<systemSoundManager.ToneHapticsFeature>>;

  /**
   * Sets a haptics style of the ringtone.
   * 
   * Before calling this API, call [getSupportedHapticsFeatures]{@link SystemTonePlayer.getSupportedHapticsFeatures} to 
   * obtain the supported haptics styles. The setting fails if the haptics style to set is not supported.
   *
   * @param { systemSoundManager.ToneHapticsFeature } hapticsFeature - Haptics style.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 5400102 - Operation not allowed.
   * @throws { BusinessError } 20700003 - Unsupported operation.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  setHapticsFeature(hapticsFeature: systemSoundManager.ToneHapticsFeature): void;

  /**
   * Obtains the haptics style of the ringtone. This API returns the result synchronously.
   *
   * @returns { systemSoundManager.ToneHapticsFeature } Haptics style.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 20700003 - Unsupported operation.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  getHapticsFeature(): systemSoundManager.ToneHapticsFeature;

  /**
   * Prepares to play a system tone. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 5400102 - Operation not allowed.
   * @throws { BusinessError } 5400103 - I/O error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  prepare(): Promise<void>;

  /**
   * Start playing the system tone. By default, the audio and haptic will not be muted. Using tone options to mute audio
   * or haptics. If haptics is needed, caller should have the permission of ohos.permission.VIBRATE.
   *
   * @permission ohos.permission.VIBRATE
   * @param { SystemToneOptions } toneOptions - Options of the system tone.
   * @returns { Promise<int> } Promise used to return the stream ID.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 5400102 - Operation not allowed.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  start(toneOptions?: SystemToneOptions): Promise<int>;

  /**
   * Stops playing a system tone. This API uses a promise to return the result.
   *
   * @param { int } id - Promise used to return the stream ID.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 5400102 - Operation not allowed.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  stop(id: int): Promise<void>;

  /**
   * Releases the system tone player. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  release(): Promise<void>;

  /**
   * Subscribes to the event indicating that the ringtone playback is finished. This API uses an asynchronous callback 
   * to return the result.
   * 
   * The object to listen for is an audio stream specified by **streamId**. If **streamId** is set to **0**, this API 
   * subscribes to the playback complete event of all audio streams of the player.
   *
   * @param { 'playFinished' } type - Event type. The event **'playFinished'** is triggered when the playback is
   *     finished.
   * @param { int } streamId - ID of the audio stream. **streamId** is obtained through
   *     [start]{@link SystemTonePlayer.start}. If **streamId** is set to **0**, the playback complete event of all
   *     audio streams of the player is subscribed to.
   * @param { Callback<int> } callback - Callback used to return the stream ID of the audio stream that finishes
   *     playing.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 18 dynamic
   */
  on(type: 'playFinished', streamId: int, callback: Callback<int>): void;

   /**
   * Subscribes the play finished events.
   *
   * @param { int } streamId - Stream id, received from start().
   * @param { Callback<int> } callback - Callback used to obtain the finished event. The callback info is the stream
   *     id that is finished.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 23 static
   */
  onPlayFinished(streamId: int, callback: Callback<int>): void;

  /**
   * Unsubscribes from the event indicating that the ringtone playback is finished. This API uses an asynchronous 
   * callback to return the result.
   *
   * @param { 'playFinished' } type - Event type. The event **'playFinished'** is triggered when the playback is
   *     finished.
   * @param { Callback<int> } [callback] - Callback used to return the ID of the audio stream. If this parameter is not
   *     specified, all the subscriptions to the specified event are canceled.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 18 dynamic
   */
  off(type: 'playFinished', callback?: Callback<int>): void;

  /**
   * Unsubscribes the play finished events.
   *
   * @param { Callback<int> } [callback] - Callback used to obtain the finished event.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 23 static
   */
  offPlayFinished(callback?: Callback<int>): void;

  /**
   * Subscribes to error events that occur during ringtone playback. This API uses an asynchronous callback to return 
   * the result.
   *
   * @param { 'error'} type - Event type. The event **'error'** is triggered when an error occurs during ringtone
   *     playback.
   * @param { ErrorCallback } callback - Callback used to return the error code and error information. For details about
   *     the error codes, see
   *     [on('error')]{@link ./../@ohos.multimedia.media:media.AVPlayer.on(type: 'error', callback: ErrorCallback)} of
   *     the AVPlayer.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 18 dynamic
   */
  on(type: 'error', callback: ErrorCallback): void;

  /**
   * Subscribes the error events.
   *
   * @param { ErrorCallback } callback - Error callback while receiving the error event.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 23 static
   */
  onError(callback: ErrorCallback): void;

  /**
   * Unsubscribes from error events that occur during ringtone playback. This API uses an asynchronous callback to 
   * return the result.
   *
   * @param { 'error'} type - Event type. The event **'error'** is triggered when an error occurs during ringtone
   *     playback.
   * @param { ErrorCallback } [callback] - Callback used to return the error code and error information. If this
   *     parameter is not specified, all the subscriptions to the specified event are canceled.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 18 dynamic
   */
  off(type: 'error', callback?: ErrorCallback): void;

  /**
   * Unsubscribes the error events.
   *
   * @param { ErrorCallback } [callback] - Error callback while receiving the error event.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 23 static
   */
  offError(callback?: ErrorCallback): void;
}

/**
 * Describes the options of system tones.
 *
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
export interface SystemToneOptions {
  /**
   * Whether to mute the audio. **true** to mute, **false** otherwise.
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  muteAudio?: boolean;

  /**
   * Whether to turn off haptics feedback when a system tone is played. **true** to turn off, **false** otherwise.
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  muteHaptics?: boolean;
}