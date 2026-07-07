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
 系统提示音播放器
 * @file
 系统提示音播放器
 * @kit AudioKit
 */

import type systemSoundManager from '../@ohos.multimedia.systemSoundManager';
import { ErrorCallback, Callback } from '../@ohos.base';
/**
 * 系统提示音播放器提供了短信提示音、通知提示音的播放、配置、获取信息等功能。在调用SystemTonePlayer的接口前，需要先通过
 * [getSystemTonePlayer]{@link @ohos.multimedia.systemSoundManager:systemSoundManager.SystemSoundManager.getSystemTonePlayer(context: BaseContext, type: SystemToneType)}
 * 创建实例。
 *
 * @typedef SystemTonePlayer
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
export declare interface SystemTonePlayer {
  /**
   * 获取提示音标题。使用Promise异步回调。
   *
   * @returns { Promise<string> } Promise对象，返回获取的系统提示音标题。
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 5400103 - I/O error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  getTitle(): Promise<string>;

  /**
   * 设置音频音量大小，无返回结果。
   *
   * @param { double } scale - 音频音量大小，必须在[0, 1]之间取值。
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                 1.Mandatory parameters are left unspecified;
   *                                 2.Incorrect parameter types.
   * @throws { BusinessError } 5400102 - Operation not allowed.
   * @throws { BusinessError } 20700002 - Parameter check error. For example, value is outside [0,1].
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  setAudioVolumeScale(scale: double): void;

  /**
   * 获取当前音频音量大小，同步返回当前音量。
   *
   * @returns { double } 当前音频音量，音量范围为[0, 1]。
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  getAudioVolumeScale(): double;

  /**
   * 获取当前支持的振动风格。使用Promise异步回调。
   *
   * @returns { Promise<Array<systemSoundManager.ToneHapticsFeature>> } Promise对象，返回当前支持的振动风格。
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 20700003 - Unsupported operation.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  getSupportedHapticsFeatures(): Promise<Array<systemSoundManager.ToneHapticsFeature>>;

  /**
   * 设置播放铃音时的振动风格。
   * 
   * 调用本接口前，应该先调用[getSupportedHapticsFeatures]{@link SystemTonePlayer.getSupportedHapticsFeatures}查询支持的振动风格，如果设置不支持的振动风
   * 格，则设置失败。
   *
   * @param { systemSoundManager.ToneHapticsFeature } hapticsFeature - 振动风格。
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                 1.Mandatory parameters are left unspecified;
   *                                 2.Incorrect parameter types.
   * @throws { BusinessError } 5400102 - Operation not allowed.
   * @throws { BusinessError } 20700003 - Unsupported operation.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  setHapticsFeature(hapticsFeature: systemSoundManager.ToneHapticsFeature): void;

  /**
   * 获取播放铃音时的振动风格，同步返回振动风格枚举值。
   *
   * @returns { systemSoundManager.ToneHapticsFeature } 振动风格。
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 20700003 - Unsupported operation.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  getHapticsFeature(): systemSoundManager.ToneHapticsFeature;

  /**
   * 准备播放提示音。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   * 开始播放提示音。使用Promise异步回调。
   *
   * @permission ohos.permission.VIBRATE
   * @param { SystemToneOptions } toneOptions - 系统提示音选项。
   * @returns { Promise<int> } Promise对象，返回streamID。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                 1.Mandatory parameters are left unspecified;
   *                                 2.Incorrect parameter types.
   * @throws { BusinessError } 5400102 - Operation not allowed.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  start(toneOptions?: SystemToneOptions): Promise<int>;

  /**
   * 停止播放提示音。使用Promise异步回调。
   *
   * @param { int } id - Promise对象，返回streamID。
   * @returns { Promise<void> } Promise回调返回停止播放成功或失败。
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                 1.Mandatory parameters are left unspecified;
   *                                 2.Incorrect parameter types.
   * @throws { BusinessError } 5400102 - Operation not allowed.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  stop(id: int): Promise<void>;

  /**
   * 释放提示音播放器。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  release(): Promise<void>;

  /**
   * 监听铃音播放完成事件（当铃音播放完成时触发）。使用callback异步回调。
   * 
   * 监听对象为传入的streamId对应音频流。当streamId传入0时，监听本播放器对应的所有音频流。
   *
   * @param { 'playFinished' } type - 事件回调类型，支持的事件为'playFinished'，当铃音播放完成时，触发该事件。
   * @param { int } streamId - 监听对象为指定streamId对应的音频流，streamId通过[start]{@link SystemTonePlayer.start}获取。当streamId传入0时，可监听
   *     当前播放器对应的所有音频流。
   * @param { Callback<int> } callback - 'playFinished'的回调方法。返回播放完成的音频流的streamId。
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 18 dynamic
   */
  on(type: 'playFinished', streamId: int, callback: Callback<int>): void;

  /**
   * Subscribes the play finished events.
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
   * 取消监听铃音播放完成事件。使用callback异步回调。
   *
   * @param { 'playFinished' } type - 事件回调类型，支持的事件为'playFinished'，当取消监听铃音播放完成事件时，触发该事件。
   * @param { Callback<int> } [callback] - 回调函数，返回结束事件的音频流的streamId。不填入此参数时，会取消该事件的所有监听。
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 18 dynamic
   */
  off(type: 'playFinished', callback?: Callback<int>): void;

  /**
   * Unsubscribes the play finished events.
   * @param { Callback<int> } [callback] - Callback used to obtain the finished event.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 23 static
   */
  offPlayFinished(callback?: Callback<int>): void;

  /**
   * 监听铃音播放过程中的错误事件（当铃音播放过程中发生错误时触发）。使用callback异步回调。
   *
   * @param { 'error'} type - 事件回调类型，支持的事件为'error'，当铃音播放过程中发生错误时，触发该事件。
   * @param { ErrorCallback } callback - 回调函数，返回错误码和错误信息。错误码请参考AVPlayer的
   *     [on('error')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'error', callback: ErrorCallback)}。
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 18 dynamic
   */
  on(type: 'error', callback: ErrorCallback): void;

  /**
   * Subscribes the error events.
   * @param { ErrorCallback } callback - Error callback while receiving the error event.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 23 static
   */
  onError(callback: ErrorCallback): void;

  /**
   * 取消监听铃音播放过程中的错误事件。使用callback异步回调。
   *
   * @param { 'error'} type - 事件回调类型，支持的事件为'error'，当取消监听铃音播放过程中的错误事件时，触发该事件。
   * @param { ErrorCallback } [callback] - 回调函数，返回错误码和错误信息。不填入此参数时，会取消该事件的所有监听。
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 18 dynamic
   */
  off(type: 'error', callback?: ErrorCallback): void;

  /**
   * Unsubscribes the error events.
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
 * 提示音参数选项。
 *
 * @typedef SystemToneOptions
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
export interface SystemToneOptions {
  /**
   * 提示音是否静音，true表示静音，false表示不静音。
   *
   * @type {?boolean}
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  muteAudio?: boolean;

  /**
   * 提示音时是否振动，true表示关闭振动，false表示开启振动。
   *
   * @type {?boolean}
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  muteHaptics?: boolean;
}