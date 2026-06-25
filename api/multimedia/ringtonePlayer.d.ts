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
 * The ringtonePlayer module provides APIs for playing, configuring, and obtaining ringtones.
 * 
 * This module must work with 
 * [@ohos.multimedia.systemSoundManager]{@link ./../@ohos.multimedia.systemSoundManager:systemSoundManager} to manage 
 * ringtones.
 * 
 * > **NOTE**
 * >
 * > - The APIs provided by this module are system APIs.
 *
 * @file
 * @kit AudioKit
 */

import type { Callback, AsyncCallback } from '../@ohos.base';
import type audio from '../@ohos.multimedia.audio';
import type media from '../@ohos.multimedia.media';

/**
 * Enumerates the ringtone parameters.
 *
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface RingtoneOptions {
  /**
   * Relative volume. The value ranges from 0.00 to 1.00. The value **1.00** indicates the maximum volume (100%).
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  volume: double;
  /**
   * Whether to enable loop playback. **true** to enable, **false** otherwise.
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  loop: boolean;
}

/**
 * Provides APIs for setting and obtaining ringtone parameters as well as playing and stopping ringtones. Before calling
 * any API in RingtonePlayer, you must use 
 * [getRingtonePlayer]{@link ./../@ohos.multimedia.systemSoundManager:systemSoundManager.SystemSoundManager.getRingtonePlayer(context: BaseContext, type: RingtoneType)}
 * to obtain a RingtonePlayer instance.
 *
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface RingtonePlayer {
  /**
   * Gets player state.
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly state: media.AVPlayerState;

  /**
   * Obtains the title of the ringtone. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<string> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined** and **data** is the title obtained; otherwise, **err** is an error object.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  getTitle(callback: AsyncCallback<string>): void;
  /**
   * Obtains the title of the ringtone. This API uses a promise to return the result.
   *
   * @returns { Promise<string> } Promise used to return the title obtained.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  getTitle(): Promise<string>;

  /**
   * Obtains the information about the audio renderer used by the ringtone. This API uses an asynchronous callback to 
   * return the result.
   *
   * @param { AsyncCallback<audio.AudioRendererInfo> } callback - Callback used to return the result. If the operation
   *     is successful, **err** is **undefined** and **data** is the renderer information obtained; otherwise, **err**
   *     is an error object.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  getAudioRendererInfo(callback: AsyncCallback<audio.AudioRendererInfo>): void;
  /**
   * Obtains the information about the audio renderer used by the ringtone. This API uses a promise to return the 
   * result.
   *
   * @returns { Promise<audio.AudioRendererInfo> } Promise used to return the renderer information.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  getAudioRendererInfo(): Promise<audio.AudioRendererInfo>;

  /**
   * Sets ringtone parameters. This API uses an asynchronous callback to return the result.
   *
   * @param { RingtoneOptions } options - Ringtone parameters.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  configure(options: RingtoneOptions, callback: AsyncCallback<void>): void;
  /**
   * Sets ringtone parameters. This API uses a promise to return the result.
   *
   * @param { RingtoneOptions } options - Ringtone parameters.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  configure(options: RingtoneOptions): Promise<void>;

  /**
   * Starts playing the ringtone. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  start(callback: AsyncCallback<void>): void;
  /**
   * Starts playing the ringtone. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  start(): Promise<void>;

  /**
   * Stops playing the ringtone. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  stop(callback: AsyncCallback<void>): void;
  /**
   * Stops playing the ringtone. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  stop(): Promise<void>;

  /**
   * Releases the ringtone player. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  release(callback: AsyncCallback<void>): void;
  /**
   * Releases the ringtone player. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  release(): Promise<void>;

  /**
   * Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an 
   * asynchronous callback to return the result.
   *
   * @param { 'audioInterrupt' } type - Event type. The event **'audioInterrupt'** is triggered when the audio focus is
   *     changed.
   * @param { Callback<audio.InterruptEvent> } callback - Callback used to return the event information.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   */
  on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>): void;

  /**
   * Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is
   * triggered when audio playback is interrupted.
   *
   * @param { Callback<audio.InterruptEvent> } callback - Callback used to listen for interrupt callback.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 23 static
   */
  onAudioInterrupt(callback: Callback<audio.InterruptEvent>): void;

  /**
   * Unsubscribes from the audio interruption event.
   *
   * @param { 'audioInterrupt' } type - Event type. The event **'audioInterrupt'** is triggered when the audio focus is
   *     changed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   */
  off(type: 'audioInterrupt'): void;
  /**
   * Unsubscribes to audio interrupt events.
   *
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 23 static
   */
  offAudioInterrupt(): void;
}