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
 铃声播放器
 * @file
 铃声播放器
 * @kit AudioKit
 */

import type { Callback, AsyncCallback } from '../@ohos.base';
import type audio from '../@ohos.multimedia.audio';
import type media from '../@ohos.multimedia.media';

/**
 * 铃声参数选项。
 *
 * @typedef RingtoneOptions
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface RingtoneOptions {
  /**
   * 指定的相对音量大小，取值范围为[0.00, 1.00]，1表示最大音量，即100%。
   *
   * @type { double }
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  volume: double;
  /**
   * 是否开启循环播放，true表示开启循环播放，false表示不开启循环播放。
   *
   * @type { boolean }
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  loop: boolean;
}

/**
 * 系统铃声播放器，提供系统铃声的参数设置、参数获取、播放、停止等功能。在调用RingtonePlayer的接口前，需要先通过
 * [getRingtonePlayer]{@link @ohos.multimedia.systemSoundManager:systemSoundManager.SystemSoundManager.getRingtonePlayer(context: BaseContext, type: RingtoneType)}
 * 创建实例。
 *
 * @typedef RingtonePlayer
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
export interface RingtonePlayer {
  /**
   * 音频渲染器的状态。
   *
   * @type { media.AVPlayerState }
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  readonly state: media.AVPlayerState;

  /**
   * 获取铃声标题。使用callback异步回调。
   *
   * @param { AsyncCallback<string> } callback - 回调函数。当获取铃声标题成功，err为undefined，data为获取到的铃声标题；否则为错误对象。
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  getTitle(callback: AsyncCallback<string>): void;
  /**
   * 获取铃声标题。使用Promise异步回调。
   *
   * @returns { Promise<string> } Promise对象，返回获取的系统铃声标题。
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  getTitle(): Promise<string>;

  /**
   * 获取铃声使用的AudioRendererInfo。使用callback异步回调。
   *
   * @param { AsyncCallback<audio.AudioRendererInfo> } callback - 回调函数。当获取音频渲染器信息成功，err为undefined，data为获取到的音频渲染器信息；否则为错误
   *     对象。
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  getAudioRendererInfo(callback: AsyncCallback<audio.AudioRendererInfo>): void;
  /**
   * 获取铃声使用的AudioRendererInfo。使用Promise异步回调。
   *
   * @returns { Promise<audio.AudioRendererInfo> } Promise对象，返回获取的音频渲染器信息。
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  getAudioRendererInfo(): Promise<audio.AudioRendererInfo>;

  /**
   * 配置铃声播放参数。使用callback异步回调。
   *
   * @param { RingtoneOptions } options - 指定铃声参数。
   * @param { AsyncCallback<void> } callback - 回调函数。当配置铃声播放参数成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  configure(options: RingtoneOptions, callback: AsyncCallback<void>): void;
  /**
   * 配置铃声播放参数。使用Promise异步回调。
   *
   * @param { RingtoneOptions } options - 指定铃声参数。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  configure(options: RingtoneOptions): Promise<void>;

  /**
   * 开始播放铃声。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当开始播放铃声成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  start(callback: AsyncCallback<void>): void;
  /**
   * 开始播放铃声。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  start(): Promise<void>;

  /**
   * 停止播放铃声。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当停止播放铃声成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  stop(callback: AsyncCallback<void>): void;
  /**
   * 停止播放铃声。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  stop(): Promise<void>;

  /**
   * 释放铃声播放器。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当释放铃声播放器成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  release(callback: AsyncCallback<void>): void;
  /**
   * 释放铃声播放器。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  release(): Promise<void>;

  /**
   * 监听音频中断事件（当音频焦点发生变化时触发）。使用callback异步回调。
   *
   * @param { 'audioInterrupt' } type - 事件回调类型，支持的事件为'audioInterrupt'，当音频焦点状态发生变化时，触发该事件。
   * @param { Callback<audio.InterruptEvent> } callback - 回调函数，返回中断事件信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                 1.Mandatory parameters are left unspecified;
   *                                 2.Incorrect parameter types.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   */
  on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>): void;

  /**
   * Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is
   * triggered when audio playback is interrupted.
   * @param { Callback<audio.InterruptEvent> } callback - Callback used to listen for interrupt callback.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 23 static
   */
  onAudioInterrupt(callback: Callback<audio.InterruptEvent>): void;

  /**
   * 取消监听音频中断事件。
   *
   * @param { 'audioInterrupt' } type - 事件回调类型，支持的事件为'audioInterrupt'，当取消监听音频中断事件时，触发该事件。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                 1.Mandatory parameters are left unspecified;
   *                                 2.Incorrect parameter types.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   */
  off(type: 'audioInterrupt'): void;

  /**
   * Unsubscribes to audio interrupt events.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 23 static
   */
  offAudioInterrupt(): void;
}