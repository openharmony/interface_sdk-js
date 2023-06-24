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

import type { Callback, AsyncCallback } from '../@ohos.base';
import type audio from '../@ohos.multimedia.audio';
import type media from '../@ohos.multimedia.media';

/**
 * Interface for ringtone options.
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @since 10
 * @systemapi
 */
export interface RingtoneOptions {
  /**
   * Ringtone volume.
   * @since 10
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   */
  volume: number;
  /**
   * Loop value.
   * @since 10
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   */
  loop: boolean;
}

/**
 * Ringtone player object.
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @since 10
 * @systemapi
 */
export interface RingtonePlayer {
  /**
   * Gets player state.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   * @systemapi
   */
  readonly state: media.AVPlayerState;

  /**
   * Gets the title of ringtone.
   * @param callback Callback used to return the title.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   * @systemapi
   */
  getTitle(callback: AsyncCallback<string>): void;
  /**
   * Gets the title of ringtone.
   * @returns Promise used to return the title.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   * @systemapi
   */
  getTitle(): Promise<string>;

  /**
   * Gets audio renderer info.
   * @param callback Callback used to return AudioRendererInfo value.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   * @systemapi
   */
  getAudioRendererInfo(callback: AsyncCallback<audio.AudioRendererInfo>): void;
  /**
   * Gets audio renderer info.
   * @returns Promise used to return AudioRendererInfo value.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   * @systemapi
   */
  getAudioRendererInfo(): Promise<audio.AudioRendererInfo>;

  /**
   * Configure ringtone options.
   * @param options Ringtone configure options.
   * @param callback Callback used to return configuration result.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   * @systemapi
   */
  configure(options: RingtoneOptions, callback: AsyncCallback<void>): void;
  /**
   * Configure ringtone options.
   * @param options Ringtone configure options.
   * @returns Promise used to return configuration result.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   * @systemapi
   */
  configure(options: RingtoneOptions): Promise<void>;

  /**
   * Starts playing ringtone.
   * @param callback Callback used to return the starting result.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   * @systemapi
   */
  start(callback: AsyncCallback<void>): void;
  /**
   * Starts playing ringtone.
   * @returns Promise used to return the starting result.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   * @systemapi
   */
  start(): Promise<void>;

  /**
   * Stop playing ringtone.
   * @param callback Callback used to return the stopping result.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   * @systemapi
   */
  stop(callback: AsyncCallback<void>): void;
  /**
   * Stop playing ringtone.
   * @returns Promise used to return the stopping result.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   * @systemapi
   */
  stop(): Promise<void>;

  /**
   * Release ringtone player resource.
   * @param callback Callback used to return the releasing result.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   * @systemapi
   */
  release(callback: AsyncCallback<void>): void;
  /**
   * Release ringtone player resource.
   * @returns Promise used to return the releasing result.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   * @systemapi
   */
  release(): Promise<void>;

  /**
   * Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is
   * triggered when audio playback is interrupted.
   * @param callback Callback used to listen for interrupt callback.
   * @throws { BusinessError } 401 - if input parameter type or number mismatch
   * @throws { BusinessError } 6800101 - if input parameter value error
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>): void;
}