/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 * The module provides APIs for loading, unloading, playing, and stopping playing sounds, setting the volume, and 
 * setting the number of loops.
 * 
 * Before using these APIs, you must call 
 * [media.createSoundPool](docroot://reference/apis-media-kit/arkts-apis-media-f.md)
 * to create a **SoundPool** instance.
 *
 * @file
 * @kit MediaKit
 */
 
import { ErrorCallback, AsyncCallback, Callback, BusinessError } from '../@ohos.base';
import type audio from '../@ohos.multimedia.audio';
import media from '../@ohos.multimedia.media';
import resourceManager from '../@ohos.resourceManager';

/**
 * Enumerates the error types (used to distinguish error stages).
 *
 * @syscap SystemCapability.Multimedia.Media.SoundPool
 * @since 20 dynamic
 * @since 23 static
 */
export enum ErrorType {
  /**
   * An error occurred during resource loading.
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 20 dynamic
   * @since 23 static
   */
  LOAD_ERROR = 1,

  /**
   * An error occurred during resource playback.
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 20 dynamic
   * @since 23 static
   */
  PLAY_ERROR = 2
}

/**
 * Describes the error information.
 *
 * @syscap SystemCapability.Multimedia.Media.SoundPool
 * @since 20 dynamic
 * @since 23 static
 */
export interface ErrorInfo<T extends Error = BusinessError> {
  /**
   * Error code. The type of **errorCode** is [BusinessError](docroot://reference/apis-basic-services-kit/js-apis-base.md).
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 20 dynamic
   * @since 23 static
   */
  errorCode: T;
  /**
   * Stage at which the error occurred.
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 20 dynamic
   * @since 23 static
   */
  errorType?: ErrorType;
  /**
   * ID of the resource where the error occurred. It can be obtained by calling **load**.
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 20 dynamic
   * @since 23 static
   */
  soundId?: int;
  /**
   * ID of the audio stream where the error occurred. It can be obtained by calling **play**.
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 20 dynamic
   * @since 23 static
   */
  streamId?: int;
}

/**
 * Describes the playback parameters of the sound pool.
 * 
 * These parameters are used to control the playback volume, number of loops, and priority.
 *
 * @syscap SystemCapability.Multimedia.Media.SoundPool
 * @since 10 dynamic
 * @since 23 static
 */
export interface PlayParameters {
  /**
   * Number of loops.
   * 
   * If this parameter is set to a value greater than or equal to 0, the number of times the content is actually played 
   * is the value of **loop** plus 1.
   * 
   * If this parameter is set to a value less than 0, the content is played repeatedly.
   * 
   * The default value is **0**, indicating that the content is played only once.
   * 
   * If this parameter is set to a floating-point number, only the integer part is used.
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  loop?: int;
  /**
   * Playback rate. For details, see [AudioRendererRate](docroot://reference/apis-audio-kit/arkts-apis-audio-e.md). 
   * Default value: **0**
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  rate?: int;
  /**
   * Volume of the left channel. The value range is [0.0, 1.0], and the default value is **1.0**.
   * 
   * When the volume exceeds the boundary value, the boundary value is automatically used.
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  leftVolume?: double;
  /**
   * Volume of the right channel. (Currently, the volume cannot be set separately for the left and right channels. The 
   * volume set for the left channel is used.) The value range is [0.0, 1.0], and the default value is **1.0**.
   * 
   * When the volume exceeds the boundary value, the boundary value is automatically used.
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  rightVolume?: double;
  /**
   * Priority for playing an audio stream. The value **0** indicates the lowest priority. A larger value indicates a 
   * higher priority.
   * 
   * The playback priority is determined by comparing the values. The value must be an integer greater than or equal to 
   * 0. The default value is **0**.
   * 
   * If this parameter is set to a negative value, it is automatically set to 0. If this parameter is set to a floating 
   * point number, only the integer part is used.
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  priority?: int;
  /**
   * Whether the sound can be played in parallel with other active audio streams, without preempting the audio focus. 
   * **true** if yes, **false** otherwise. The default value is **false**.
   * 
   * This is a system API.
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  parallelPlayFlag?: boolean;
}

/**
 * Implements a sound pool that provides APIs for loading, unloading, playing, and stopping playing system sounds, 
 * setting the volume, and setting the number of loops. Before using these APIs, you must call 
 * [media.createSoundPool](docroot://reference/apis-media-kit/arkts-apis-media-f.md)
 * to create a SoundPool instance.
 * 
 * > **NOTE**
 * >
 * > - When using the SoundPool instance, you are advised to register the following callbacks to proactively obtain 
 * > status changes:
 * > >   - [on('loadComplete')]{@link SoundPool.on(type: 'loadComplete', callback: Callback<int>)}: listens for the 
 * > event indicating that the resource loading is finished. You are advised to listen for this callback to ensure that 
 * > the audio is played after being loaded.
 * > >   - 
 * > [on('playFinishedWithStreamId')]{@link SoundPool.on(type: 'playFinishedWithStreamId', callback: Callback<int>)}: 
 * > listens for the event indicating that the playback is finished and returns the stream ID of the audio that finishes
 * > playing.
 * > >   - [on('playFinished')]{@link SoundPool.on(type: 'playFinishedWithStreamId', callback: Callback<int>)}: listens 
 * > for the event indicating that the playback is finished.
 * > >   - [on('error')]{@link SoundPool.on(type: 'error', callback: ErrorCallback)}: listens for error events.
 * > >   - [on('errorOccurred')]{@link SoundPool.on(type: 'errorOccurred', callback: Callback<ErrorInfo>)}: listens for 
 * > error events and returns [errorInfo]{@link ErrorInfo}.
 * >
 * > - Currently, SoundPool does not support audio focus policies such as background playback and audio interruption, or
 * > skipping the silent frames at the beginning and end of an audio file. For details about low-latency playback using 
 * > SoundPool, see 
 * > [Using SoundPool to Play Short Sounds (ArkTS)](docroot://media/media/using-soundpool-for-playback.md).
 *
 * @syscap SystemCapability.Multimedia.Media.SoundPool
 * @since 10 dynamic
 * @since 23 static
 */
export declare interface SoundPool {
  /**
   * Loads a sound. This API uses an asynchronous callback to return the result.
   * 
   * This API uses an asynchronous callback to obtain the resource ID. The input parameter URL is a string starting with
   * **fd://**, which is generated based on the file descriptor (FD) obtained.
   * 
   * This API cannot be used to load resources in the **rawfile** directory. Instead, use 
   * [load(fd: number, offset: number, length: number, callback: AsyncCallback\<number>): void]{@link SoundPool.load(fd: int, offset: long, length: long, callback: AsyncCallback<int>)}
   * or 
   * [load(fd: number, offset: number, length: number): Promise\<number>]{@link SoundPool.load(fd: int, offset: long, length: long)}
   * .
   * 
   * > **NOTE**
   * >
   * > - After the resource handle (in the form of an FD) or path description (in the form of a URI) is transferred to 
   * > the player, do not use the resource handle or path description in read or write operations, including but not 
   * > limited to transferring it to multiple players.
   * >
   * > - Competition occurs when multiple players use the same resource handle or path description to read and write 
   * > files at the same time, resulting in playback errors.
   *
   * @param {string} uri - URI of the audio file to load. Generally, the URI starts with **fd://**.
   * @param {AsyncCallback<int>} callback - Callback used to return the sound ID. A valid value must be greater than 0.
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
   * @throws { BusinessError } 5400103 - I/O error. Return by callback.
   * @throws { BusinessError } 5400105 - Service died. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  load(uri: string, callback: AsyncCallback<int>): void;
  /**
   * Loads a sound. This API uses a promise to return the result.
   * 
   * This API uses a promise to obtain the resource ID. The input parameter URL is a string starting with **fd://**, 
   * which is generated based on the file descriptor (FD) obtained.
   * 
   * This API cannot be used to load resources in the **rawfile** directory. Instead, use 
   * [load(fd: number, offset: number, length: number, callback: AsyncCallback\<number>): void]{@link SoundPool.load(fd: int, offset: long, length: long, callback: AsyncCallback<int>)}
   * or 
   * [load(fd: number, offset: number, length: number): Promise\<number>]{@link SoundPool.load(fd: int, offset: long, length: long)}
   * .
   * 
   * > **NOTE**
   * >
   * > - After the resource handle (in the form of an FD) or path description (in the form of a URI) is transferred to 
   * > the player, do not use the resource handle or path description in read or write operations, including but not 
   * > limited to transferring it to multiple players.
   * >
   * > - Competition occurs when multiple players use the same resource handle or path description to read and write 
   * > files at the same time, resulting in playback errors.
   *
   * @param {string} uri - URI of the audio file to load. Generally, the URI starts with **fd://**.
   * @returns {Promise<int>} Promise used to return the sound ID. A valid value must be greater than 0
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
   * @throws { BusinessError } 5400103 - I/O error. Return by promise.
   * @throws { BusinessError } 5400105 - Service died. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  load(uri: string): Promise<int>;
  /**
   * Loads a sound. This API uses an asynchronous callback to return the result.
   * 
   * This API uses an asynchronous callback to obtain the resource ID. For the input parameter, resource information can
   * be passed in manually or acquired automatically by reading the application's built-in resources.
   * 
   * > **NOTE**
   * >
   * > - After the resource handle (in the form of an FD) or path description (in the form of a URI) is transferred to 
   * > the player, do not use the resource handle or path description in read or write operations, including but not 
   * > limited to transferring it to multiple players.
   * >
   * > - Competition occurs when multiple players use the same resource handle or path description to read and write 
   * > files at the same time, resulting in playback errors.
   *
   * @param {int} fd - Resource handle, which is obtained by calling
   *     [resourceManager.getRawFd](docroot://reference/apis-localization-kit/js-apis-resource-manager.md).
   * @param {long} offset - Resource offset, which needs to be entered based on the preset resource information. An
   *     invalid value causes a failure to parse audio and video resources.
   * @param {long} length - Resource length, which needs to be entered based on the preset resource information. An
   *     invalid value causes a failure to parse audio and video resources.
   * @param {AsyncCallback<int>} callback - Callback used to return the sound ID. A valid value must be greater than 0.
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
   * @throws { BusinessError } 5400103 - I/O error. Return by callback.
   * @throws { BusinessError } 5400105 - Service died. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  load(fd: int, offset: long, length: long, callback: AsyncCallback<int>): void;
  /**
   * Loads a sound. This API uses a promise to return the result.
   * 
   * This API uses a promise to obtain the resource ID. For the input parameter, resource information can be passed in 
   * manually or acquired automatically by reading the application's built-in resources.
   * 
   * > **NOTE**
   * >
   * > - After the resource handle (in the form of an FD) or path description (in the form of a URI) is transferred to 
   * > the player, do not use the resource handle or path description in read or write operations, including but not 
   * > limited to transferring it to multiple players.
   * >
   * > - Competition occurs when multiple players use the same resource handle or path description to read and write 
   * > files at the same time, resulting in playback errors.
   *
   * @param {int} fd - Resource handle, which is obtained by calling
   *     [resourceManager.getRawFd](docroot://reference/apis-localization-kit/js-apis-resource-manager.md)
   * @param {long} offset - Resource offset, which needs to be entered based on the preset resource information. An
   *     invalid value causes a failure to parse audio and video resources.
   * @param {long} length - Resource length, which needs to be entered based on the preset resource information. An
   *     invalid value causes a failure to parse audio and video resources.
   * @returns {Promise<int>} Promise used to return the sound ID. A valid value must be greater than 0
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
   * @throws { BusinessError } 5400103 - I/O error. Return by promise.
   * @throws { BusinessError } 5400105 - Service died. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  load(fd: int, offset: long, length: long): Promise<int>;
  /**
   * Plays a sound and obtains the stream ID. This API uses an asynchronous callback to return the result.
   *
   * @param {int} soundID - Sound ID, which is obtained by calling **load()**.
   * @param {PlayParameters} params - Playback parameters.
   * @param {AsyncCallback<int>} callback - Callback used to return the audio stream ID. A valid value must be greater
   *     than 0.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed. Return by callback.
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
   * @throws { BusinessError } 5400105 - Service died. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  play(soundID: int, params: PlayParameters, callback: AsyncCallback<int>): void;
  /**
   * Plays a sound using default parameters and obtains the stream ID. This API uses an asynchronous callback to return 
   * the result.
   *
   * @param {int} soundID - Sound ID, which is obtained by calling **load()**.
   * @param {AsyncCallback<int>} callback - Callback used to return the audio stream ID. A valid value must be greater
   *     than 0.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed. Return by callback.
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
   * @throws { BusinessError } 5400105 - Service died. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  play(soundID: int, callback: AsyncCallback<int>): void;
  /**
   * Plays a sound and obtains the stream ID. This API uses a promise to return the result.
   *
   * @param {int} soundID - Sound ID, which is obtained by calling **load()**.
   * @param {PlayParameters} params - Playback parameters.
   * @returns {Promise<int>} Promise used to return the audio stream ID. A valid value must be greater than 0
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed. Return by promise.
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
   * @throws { BusinessError } 5400105 - Service died. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  play(soundID: int, params?: PlayParameters): Promise<int>;
  /**
   * Stops audio playback. This API uses an asynchronous callback to return the result.
   *
   * @param {int} streamID - Audio stream ID, which is obtained by calling **play()**.
   * @param {AsyncCallback<void>} callback - Callback function. If the operation is successful, **err** is
   *     **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed. Return by callback.
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
   * @throws { BusinessError } 5400105 - Service died. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  stop(streamID: int, callback: AsyncCallback<void>): void;
  /**
   * Stops audio playback. This API uses a promise to return the result.
   *
   * @param {int} streamID - Audio stream ID, which is obtained by calling **play()**.
   * @returns {Promise<void>} Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed. Return by promise.
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
   * @throws { BusinessError } 5400105 - Service died. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  stop(streamID: int): Promise<void>;
  /**
   * Sets the loop mode. This API uses an asynchronous callback to return the result.
   *
   * @param {int} streamID - Audio stream ID, which is obtained by calling **play()**.
   * @param {int} loop - Number of loops.<br>If this parameter is set to a value greater than or equal to 0, the number
   *     of times the content is actually played is the value of **loop** plus 1.<br> If this parameter is set to a
   *     value less than 0, the content is played repeatedly.
   * @param {AsyncCallback<void>} callback - Callback function. If the operation is successful, **err** is
   *     **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed. Return by callback.
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
   * @throws { BusinessError } 5400105 - Service died. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  setLoop(streamID: int, loop: int, callback: AsyncCallback<void>): void;
  /**
   * Sets the loop mode. This API uses a promise to return the result.
   *
   * @param {int} streamID - Audio stream ID, which is obtained by calling **play()**.
   * @param {int} loop - Number of loops.<br>If this parameter is set to a value greater than or equal to 0, the number
   *     of times the content is actually played is the value of **loop** plus 1.<br> If this parameter is set to a
   *     value less than 0, the content is played repeatedly.
   * @returns {Promise<void>} Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed. Return by promise.
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
   * @throws { BusinessError } 5400105 - Service died. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  setLoop(streamID: int, loop: int): Promise<void>;
  /**
   * Sets the priority for an audio stream. This API uses an asynchronous callback to return the result.
   *
   * @param {int} streamID - Audio stream ID, which is obtained by calling **play()**.
   * @param {int} priority - Priority. The value **0** means the lowest priority. The value is an integer greater than
   *     or equal to 0.
   * @param {AsyncCallback<void>} callback - Callback function. If the operation is successful, **err** is
   *     **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed. Return by callback.
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
   * @throws { BusinessError } 5400105 - Service died. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  setPriority(streamID: int, priority: int, callback: AsyncCallback<void>): void;
  /**
   * Sets the priority for an audio stream. This API uses a promise to return the result.
   *
   * @param {int} streamID - Audio stream ID, which is obtained by calling **play()**.
   * @param {int} priority - Priority. The value **0** means the lowest priority. The value is an integer greater than
   *     or equal to 0.
   * @returns {Promise<void>} Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed. Return by promise.
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
   * @throws { BusinessError } 5400105 - Service died. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  setPriority(streamID: int, priority: int): Promise<void>;
  /**
   * Sets the playback rate for an audio stream. This API uses an asynchronous callback to return the result.
   *
   * @param {int} streamID - Audio stream ID, which is obtained by calling **play()**.
   * @param {audio.AudioRendererRate} rate - Playback rate.
   * @param {AsyncCallback<void>} callback - Callback function. If the operation is successful, **err** is
   *     **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed. Return by callback.
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
   * @throws { BusinessError } 5400105 - Service died. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  setRate(streamID: int, rate: audio.AudioRendererRate, callback: AsyncCallback<void>): void;
  /**
   * Sets the playback rate for an audio stream. This API uses a promise to return the result.
   *
   * @param {int} streamID - Audio stream ID, which is obtained by calling **play()**.
   * @param {audio.AudioRendererRate} rate - Playback rate.
   * @returns {Promise<void>} Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed. Return by promise.
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
   * @throws { BusinessError } 5400105 - Service died. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  setRate(streamID: int, rate: audio.AudioRendererRate): Promise<void>;
  /**
   * Sets the volume for an audio stream. This API uses an asynchronous callback to return the result.
   *
   * @param {int} streamID - Audio stream ID, which is obtained by calling **play()**.
   * @param {double} leftVolume - Volume of the left channel. The value range is [0.0, 1.0].
   * @param {double} rightVolume - Volume of the right channel. The value range is [0.0, 1.0]. Currently, setting the
   *     volume for the right channel does not take effect. The volume set for the left channel is used.
   * @param {AsyncCallback<void>} callback - Callback function. If the operation is successful, **err** is
   *     **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed. Return by callback.
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
   * @throws { BusinessError } 5400105 - Service died. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  setVolume(streamID: int, leftVolume: double, rightVolume: double, callback: AsyncCallback<void>): void;
  /**
   * Sets the volume for an audio stream. This API uses a promise to return the result.
   *
   * @param {int} streamID - Audio stream ID, which is obtained by calling **play()**.
   * @param {double} leftVolume - Volume of the left channel. The value range is [0.0, 1.0].
   * @param {double} rightVolume - Volume of the right channel. The value range is [0.0, 1.0]. Currently, setting the
   *     volume for the right channel does not take effect. The volume set for the left channel is used.
   * @returns {Promise<void>} Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed. Return by promise.
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
   * @throws { BusinessError } 5400105 - Service died. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  setVolume(streamID: int, leftVolume: double, rightVolume: double): Promise<void>;
  /**
   * Sets the interruption mode of the audio files with the same ID during playback. After the **SoundPool** is created,
   * this API is valid only when the **Play** function of the **SoundPool** is called for the first time. You can set 
   * the interruption mode for multiple times. If the interruption mode is not set, the 
   * [SAME_SOUND_INTERRUPT](docroot://reference/apis-media-kit/arkts-apis-media-e.md) mode is used by default. That is
   * , if the former audio file is not completely played, the latter audio file with the same ID interrupts the former 
   * audio file.
   *
   * @param { media.SoundInterruptMode } interruptMode - Interruption mode of the audio files with the same ID during
   *     playback, which is obtained through the **media.SoundInterruptMode** enum.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  setInterruptMode(interruptMode: media.SoundInterruptMode): void;
  /**
   * Unloads a sound. This API uses an asynchronous callback to return the result.
   *
   * @param {int} soundID - Sound ID, which is obtained by calling **load()**.
   * @param {AsyncCallback<void>} callback - Callback function. If the operation is successful, **err** is
   *     **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
   * @throws { BusinessError } 5400103 - I/O error. Return by callback.
   * @throws { BusinessError } 5400105 - Service died. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  unload(soundID: int, callback: AsyncCallback<void>): void;
  /**
   * Unloads a sound. This API uses a promise to return the result.
   *
   * @param {int} soundID - Sound ID, which is obtained by calling **load()**.
   * @returns {Promise<void>} Promise that returns no value.
   * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
   * @throws { BusinessError } 5400103 - I/O error. Return by promise.
   * @throws { BusinessError } 5400105 - Service died. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  unload(soundID: int): Promise<void>;
  /**
   * Releases a **SoundPool** instance. This API uses an asynchronous callback to return the result.
   *
   * @param {AsyncCallback<void>} callback - Callback function. If the operation is successful, **err** is
   *     **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 5400105 - Service died. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  release(callback: AsyncCallback<void>): void;
  /**
   * Releases a **SoundPool** instance. This API uses a promise to return the result.
   *
   * @returns {Promise<void>} Promise that returns no value.
   * @throws { BusinessError } 5400105 - Service died. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  release(): Promise<void>;

  /**
   * Subscribes to events indicating that a sound finishes loading. This API uses an asynchronous callback to return the
   * result.
   *
   * @param {'loadComplete'} type - Event type, which is **'loadComplete'** in this case. This event is triggered when a
   *     sound is loaded.
   * @param {Callback<int>} callback - Callback used to return the ID of the resource that has been loaded.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   */
  on(type: 'loadComplete', callback: Callback<int>): void;
  /**
   * Subscribes to events indicating that a sound finishes loading.
   * This event is triggered when a sound is loaded.
   *
   * @param {Callback<int>} callback - ID of the sound that has been loaded.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 23 static
   */
  onLoadComplete(callback: Callback<int>): void;
  /**
   * Unsubscribes from events indicating that a sound finishes loading.
   *
   * @param {'loadComplete'} type - Event type. The value is fixed at **'loadComplete'**.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   */
  off(type: 'loadComplete'): void;
  /**
   * Unsubscribes from events indicating that a sound finishes loading.
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 23 static
   */
  offLoadComplete(): void;

  /**
   * Subscribes to events indicating the completion of audio playback and returns the stream ID of the audio that 
   * finishes playing. This API uses an asynchronous callback to return the result.
   * 
   * When only [on('playFinished')]{@link SoundPool.on(type: 'playFinishedWithStreamId', callback: Callback<int>)} or 
   * [on('playFinishedWithStreamId')]{@link SoundPool.on(type: 'playFinishedWithStreamId', callback: Callback<int>)} is 
   * subscribed to, the registered callback is triggered when the audio playback is complete.
   * 
   * When both [on('playFinished')]{@link SoundPool.on(type: 'playFinishedWithStreamId', callback: Callback<int>)} and 
   * [on('playFinishedWithStreamId')]{@link SoundPool.on(type: 'playFinishedWithStreamId', callback: Callback<int>)} are
   * subscribed to, the 'playFinishedWithStreamId' callback is triggered, but the 'playFinished' callback is not 
   * triggered, when the audio playback is complete.
   *
   * @param {'playFinishedWithStreamId'} type - Event type, which is **'playFinishedWithStreamId'** in this case. This
   *     event is triggered when an audio stream finishes playing, and the stream ID is returned.
   * @param {Callback<int>} callback - Callback used to return the stream ID of the audio that has finished playing.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 18 dynamic
   */
  on(type: 'playFinishedWithStreamId', callback: Callback<int>): void;
  /**
   * Subscribes to events indicating the completion of audio playback and returns the stream ID of the audio
   * that finishes playing.
   * 
   * When only on('playFinished') or on('playFinishedWithStreamId') is subscribed to, the registered
   * callback is triggered when the audio playback is complete.
   * 
   * When both on('playFinished') and on('playFinishedWithStreamId') are subscribed to,
   * the 'playFinishedWithStreamId' callback is triggered, but the 'playFinished' callback is not triggered,
   * when the audio playback is complete.
   *
   * @param {Callback<int>} callback - Callback used to return the result. Stream ID of the audio that
   *     finishes playing.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 23 static
   */
  onPlayFinishedWithStreamId(callback: Callback<int>): void;
   /**
   * Unsubscribes from events indicating that a sound finishes playing.
   *
   * @param {'playFinishedWithStreamId'} type - Event type. The value is fixed at **'playFinishedWithStreamId'**.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 18 dynamic
   */
  off(type: 'playFinishedWithStreamId'): void;
   /**
   * Unsubscribes from events indicating that a sound finishes playing.
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 23 static
   */
  offPlayFinishedWithStreamId(): void;
  /**
   * Subscribes to events indicating that a sound finishes playing. This API uses an asynchronous callback to return the
   * result.
   *
   * @param {'playFinished'} type - Event type, which is **'playFinished'** in this case. This event is triggered when a
   *     sound finishes playing.
   * @param {Callback<void>} callback - Callback used to return the result.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   */
  on(type: 'playFinished', callback: Callback<void>): void;
  /**
   * Subscribes to events indicating that a sound finishes playing.
   * This event is triggered when a sound finishes playing.
   *
   * @param {Callback<void>} callback - Callback used to return the result.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 23 static
   */
  onPlayFinished(callback: Callback<void>): void;
  /**
   * Unsubscribes from events indicating that a sound finishes playing.
   *
   * @param {'playFinished'} type - Event type. The value is fixed at **'playFinished'**.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   */
  off(type: 'playFinished'): void;
  /**
   * Unsubscribes from events indicating that a sound finishes playing.
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 23 static
   */
  offPlayFinished(): void;
  /**
   * Subscribes to error events of a 
   * [SoundPool](docroot://reference/apis-media-kit/js-apis-inner-multimedia-soundPool.md#soundpool) instance. This 
   * event is used only for error prompt. This API uses an asynchronous callback to return the result.
   *
   * @param {'error'} type - Event type, which is **'error'** in this case. This event can be triggered by both user
   *     operations and the system.
   * @param {ErrorCallback} callback - Callback used to return the error code ID and error message.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   */
  on(type: 'error', callback: ErrorCallback): void;
  /**
   * Subscribes to error events of this **SoundPool** instance. This event is used only for error prompt.
   * This event can be triggered by both user operations and the system.
   *
   * @param {ErrorCallback} callback - Callback used to return the error code ID and error message.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 23 static
   */
  onError(callback: ErrorCallback): void;
  /**
   * Unsubscribes from error events of a SoundPool instance.
   *
   * @param {'error'} type - Event type, which is **'error'** in this case.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   */
  off(type: 'error'): void;
  /**
   * Unsubscribes from error events of this **SoundPool** instance.
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 23 static
   */
  offError(): void;

  /**
   * Subscribes to error events of a 
   * [SoundPool](docroot://reference/apis-media-kit/js-apis-inner-multimedia-soundPool.md#soundpool) instance and 
   * returns [ErrorInfo]{@link ErrorInfo} that contains the error code, error stage, resource ID, and audio stream ID. 
   * This API uses an asynchronous callback to return the result.
   *
   * @param { 'errorOccurred' } type - Event type, which is **'errorOccurred'** in this case. This event can be
   *     triggered by both user operations and the system.
   * @param { Callback<ErrorInfo> } callback - Callback used to return [ErrorInfo]{@link ErrorInfo}.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 20 dynamic
   */
  on(type: 'errorOccurred', callback: Callback<ErrorInfo>): void;
  /**
   * Subscribes to errorOccurred events of this **SoundPool** instance.
   *
   * @param { Callback<ErrorInfo> } callback - Callback used to listen for soundpool errorOccurred events.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 23 static
   */

  onErrorOccurred(callback: Callback<ErrorInfo>): void;
  /**
   * Unsubscribes from error events of a SoundPool instance.
   *
   * @param { 'errorOccurred' } type - Event type, which is **'errorOccurred'** in this case.
   * @param { Callback<ErrorInfo> } [callback] - Callback used to return [ErrorInfo]{@link ErrorInfo} if an error occurs
   *     during the use of the player. If the callback is not set, no related information is provided.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 20 dynamic
   */
  off(type: 'errorOccurred', callback?: Callback<ErrorInfo>): void;
  /**
   * Unsubscribes from errorOccurred events of this **SoundPool** instance.
   *
   * @param { Callback<ErrorInfo> } [callback] - Callback used to listen for soundpool errorOccurred events.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 23 static
   */
  offErrorOccurred(callback?: Callback<ErrorInfo>): void;
}
