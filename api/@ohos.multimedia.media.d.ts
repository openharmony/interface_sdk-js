/*
* Copyright (C) 2021-2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit MediaKit
 */

import { ErrorCallback, AsyncCallback, Callback, BusinessError } from './@ohos.base';
import audio from './@ohos.multimedia.audio';
import photoAccessHelper from './@ohos.file.photoAccessHelper';
import type image from './@ohos.multimedia.image';
import type { SoundPool as _SoundPool } from './multimedia/soundPool';
import type { PlayParameters as _PlayParameters } from './multimedia/soundPool';
import type drm from './@ohos.multimedia.drm';

/**
 * The multimedia subsystem provides a set of simple and easy-to-use APIs for you to access the system and use media 
 * resources.
 * 
 * @syscap SystemCapability.Multimedia.Media.Core [since 12]
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace media {
  /**
   * Creates an AVPlayer instance. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > - You are advised to create a maximum of 16 AVPlayer instances for an application in both audio and video 
   * > playback scenarios.<!--Del-->
   * >
   * > - The actual number of instances that can be created may be different. It depends on the specifications of the 
   * > device chip in use. For example, in the case of RK3568, you are advised to create a maximum of 6 AVPlayer 
   * > instances for an application in audio and video playback scenarios.<!--DelEnd-->
   * >
   * > - Applications must properly manage AVPlayer instances according to their specific needs, creating and freeing 
   * > them when necessary. Holding too many AVPlayer instances can lead to high memory usage, and in some cases, the 
   * > system might terminate applications to free up resources.
   *
   * @param { AsyncCallback<AVPlayer> } callback - Callback used to return the result. If the operation is successful,
   *     an AVPlayer instance is returned; otherwise, **null** is returned. The instance can be used to play audio and
   *     video.
   * @throws { BusinessError } 5400101 - No memory. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function createAVPlayer(callback: AsyncCallback<AVPlayer>): void;

  /**
   * Creates an **AVPlayer** instance. This API uses an asynchronous callback to return the result.
   * <br>**NOTE:**<br>
   * You are advised to create a maximum of 16 **AVPlayer** instances for an application in both audio and video
   * playback scenarios.
   * 
   * The actual number of instances that can be created may be different.
   * It depends on the specifications of the device chip in use.
   *
   * @param { AsyncCallback<AVPlayer | undefined> } callback - used to return the result. If the operation is successful
   *     , an **AVPlayer** instance is returned; otherwise, **undefined** is returned. The instance can be used to play
   *     audio and video.
   * @throws { BusinessError } 5400101 - No memory. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @crossplatform
   * @since 23 static
   */
  function createAVPlayer(callback: AsyncCallback<AVPlayer | undefined>): void;

  /**
   * Creates an AVPlayer instance. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > - You are advised to create a maximum of 16 AVPlayer instances for an application in both audio and video 
   * > playback scenarios.<!--Del-->
   * >
   * > - The actual number of instances that can be created may be different. It depends on the specifications of the 
   * > device chip in use. For example, in the case of RK3568, you are advised to create a maximum of 6 AVPlayer 
   * > instances for an application in audio and video playback scenarios.<!--DelEnd-->
   * >
   * > - Applications should reasonably use AVPlayer objects in accordance with actual service requirements, create them
   * > on demand, and release them in a timely manner. This avoids excessive memory consumption caused by holding too 
   * > many AVPlayer instances, which may result in the system terminating the application.
   *
   * @returns { Promise<AVPlayer> } Promise used to return the result. If the operation is successful, an AVPlayer
   *     instance is returned for audio and video playback. Otherwise, **null** is returned.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function createAVPlayer(): Promise<AVPlayer>;

  /**
   * Creates an **AVPlayer** instance. This API uses a promise to return the result.
   * <br>**NOTE:**<br>
   * You are advised to create a maximum of 16 **AVPlayer** instances for an application in both audio and video
   * playback scenarios.
   * 
   * The actual number of instances that can be created may be different. It depends on the specifications of
   * the device chip in use.
   *
   * @returns { Promise<AVPlayer | undefined> } A Promise instance used to return the result. If the operation is
   *     successful, an **AVPlayer** instance is returned; **undefined** is returned otherwise. The instance can be used to play
   *     audio and video.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @crossplatform
   * @since 23 static
   */
  function createAVPlayer(): Promise<AVPlayer | undefined>;

  /**
   * Creates an AVRecorder instance. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > An application can create multiple AVRecorder instances. However, because the device shares a common audio 
   * > channel, only one instance can record audio at a time. Any attempt to create the second instance for audio 
   * > recording fails due to audio channel conflicts.
   *
   * @param { AsyncCallback<AVRecorder> } callback - Callback function, which returns an **AVRecorder** instance for
   *     recording audio and video. Otherwise, **null** is returned.
   * @throws { BusinessError } 5400101 - No memory. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform [since 12]
   * @since 9 dynamic
   */
  function createAVRecorder(callback: AsyncCallback<AVRecorder>): void;

  /**
   * Creates an **AVRecorder** instance. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<AVRecorder | undefined> } callback - Callback used to return the result.
   *     If the operation is successful, an **AVRecorder** instance is returned;
   *     otherwise, **undefined** is returned. The instance can be used to record audio and video.
   * @throws { BusinessError } 5400101 - No memory. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform
   * @since 23 static
   */
  function createAVRecorder(callback: AsyncCallback<AVRecorder | undefined>): void;

  /**
   * Creates an AVRecorder instance. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > An application can create multiple AVRecorder instances. However, because the device shares a common audio 
   * > channel, only one instance can record audio at a time. Any attempt to create the second instance for audio 
   * > recording fails due to audio channel conflicts.
   *
   * @returns { Promise<AVRecorder> } Promise used to return an **AVRecorder** instance, which can be used to record
   *     audio and video. Otherwise, **null** is returned.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function createAVRecorder(): Promise<AVRecorder>;

  /**
   * Creates an **AVRecorder** instance. This API uses a promise to return the result.
   *
   * @returns { Promise<AVRecorder | undefined> } Promise used to return the result. If the operation is successful,
   *     an **AVRecorder** instance is returned; otherwise, **undefined** is returned.
   *     The instance can be used to record audio and video.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform
   * @since 23 static
   */
  function createAVRecorder(): Promise<AVRecorder | undefined>;

  /**
   * Creates an AudioPlayer instance in synchronous mode.
   *
   * @returns { AudioPlayer } If the operation is successful, an AudioPlayer instance is returned; otherwise, **null**
   *     is returned. After the instance is created, you can start, pause, or stop audio playback.
   * @syscap SystemCapability.Multimedia.Media.AudioPlayer
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead media.createAVPlayer(callback: AsyncCallback<AVPlayer>)
   */
  function createAudioPlayer(): AudioPlayer;

  /**
   * Creates an AudioRecorder instance to control audio recording. Only one AudioRecorder instance can be created per 
   * device.
   *
   * @returns { AudioRecorder } If the operation is successful, an AudioRecorder instance is returned; otherwise,
   *     **null** is returned. The instance can be used to record audio.
   * @syscap SystemCapability.Multimedia.Media.AudioRecorder
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead media.createAVRecorder(callback: AsyncCallback<AVRecorder>)
   */
  function createAudioRecorder(): AudioRecorder;

  /**
   * Creates a media source from file descriptor.
   *
   * @param { AVFileDescriptor } fdSrc - file descriptor handler.
   *     <br>file descriptor handler.
   * @returns { MediaSource | undefined } MediaSource instance if the operation is successful; returns undefined otherwise.
   * @syscap SystemCapability.Multimedia.Media.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function createMediaSourceWithFd(fdSrc: AVFileDescriptor): MediaSource | undefined;

  /**
   * Creates a media source from a custom data source.
   *
   * @param { AVDataSrcDescriptor } dataSrc - Interface definition for obtaining media data.
   * @returns { MediaSource | undefined } MediaSource instance if the operation is successful; returns undefined otherwise.
   * @syscap SystemCapability.Multimedia.Media.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function createMediaSourceWithDataSource(dataSrc: AVDataSrcDescriptor): MediaSource | undefined;

  /**
   * Creates a media source for streaming media to be pre-downloaded.
   *
   * @param { string } url - - URL of the media source. The following streaming media formats are supported: HLS, HTTP-
   *     FLV, DASH, and HTTPS.<br> - FD path of the local M3U8 file.
   * @param { Record<string, string> } headers - HTTP header customized for streaming media pre-download. If this
   *     parameter is not passed, the default HTTP header of the network request is used. [since 12 - 12]
   * @param { Record<string, string> } [headers] - HTTP header customized for streaming media pre-download. If this
   *     parameter is not passed, the default HTTP header of the network request is used. [since 13]
   * @returns { MediaSource } MediaSource instance.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 5400101 - No memory.
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice [since 13]
   * @since 12 dynamic
   */
  function createMediaSourceWithUrl(url: string, headers?: Record<string, string>): MediaSource;

  /**
   * Creates a media source for streaming media to be pre-downloaded.
   *
   * @param { string } url : Url of the media source. The following streaming media formats are supported: HLS,
   *     HTTP-FLV, DASH, and HTTPS.
   * @param { Record<string, string> } [headers] : Headers attached to network request while player request data.
   * @returns { MediaSource | undefined } MediaSource instance if the operation is successful; returns undefined otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 5400101 - No memory.
   * @syscap SystemCapability.Multimedia.Media.Core
   * @since 23 static
   */
  function createMediaSourceWithUrl(url: string, headers?: Record<string, string>): MediaSource | undefined;

  /**
   * Creates a multi-bitrate media source for streaming media. Currently, only the HTTP-FLV multi-bitrate media source 
   * is supported.
   *
   * @param { Array<MediaStream> } streams - Array of MediaStream objects. The supported streaming media format is HTTP-
   *     FLV.
   * @returns { MediaSource } MediaSource instance.
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 19 dynamic
   */
  function createMediaSourceWithStreamData(streams: Array<MediaStream>): MediaSource;

  /**
   * Creates a multi-bitrate media source for streaming media. Currently, only the HTTP-FLV multi-bitrate
   * media source is supported.
   *
   * @param { Array<MediaStream> } streams - Array of MediaStream objects.
   *     The supported streaming media format is HTTP-FLV.
   * @returns { MediaSource | undefined } MediaSource instance if the operation is successful; returns undefined otherwise.
   * @syscap SystemCapability.Multimedia.Media.Core
   * @since 23 static
   */
  function createMediaSourceWithStreamData(streams: Array<MediaStream>): MediaSource | undefined;

  /**
   * Interface for defining time base metadata
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AVTimedMetaData {  
    /**
     * Defines the unique token of the time base metadata,
     * The tag must be unique in other time metadata of the video source.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    id?: string;

    /**
     * The classification label of the time base metadata.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    classify?: string;

    /**
     * Defines the offset value of the time primitive information relative to the start time of the entire media.
     * The value should be an integer.
     * <br>Unit:milliseconds.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    start: int;

    /**
     * Duration of the time primitive information
     * The value should be an integer.
     * <br>Unit:milliseconds.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    duration: int;

    /**
     * Key-value pair set corresponding to time primitive information
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    contents: Record<string, object>;
  }

  /**
   * Creates a **VideoPlayer** instance. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<VideoPlayer> } callback - Callback used to return the result. If the operation is successful
   *     , **err** is **undefined** and **data** is the VideoPlayer instance created; otherwise, **err** is an error
   *     object.
   * @syscap SystemCapability.Multimedia.Media.VideoPlayer
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead media.createAVPlayer(callback: AsyncCallback<AVPlayer>)
   */
  function createVideoPlayer(callback: AsyncCallback<VideoPlayer>): void;

  /**
   * Creates a VideoPlayer instance. This API uses a promise to return the result.
   *
   * @returns { Promise<VideoPlayer> } Promise used to return the result. If the operation is successful, a VideoPlayer
   *     instance is returned; otherwise, **null** is returned. The instance can be used to manage and play video.
   * @syscap SystemCapability.Multimedia.Media.VideoPlayer
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead media.createAVPlayer()
   */
  function createVideoPlayer(): Promise<VideoPlayer>;

  /**
   * The maintenance of this interface has been stopped since version api 9. Please use AVRecorder
   * Creates an VideoRecorder instance.
   *
   * @param { AsyncCallback<VideoRecorder> } callback - used to return AudioPlayer instance if the operation is
   *     successful; returns null otherwise.
   * @throws { BusinessError } 5400101 - No memory. Return by callback.
   * @throws { BusinessError } 202 - Not System App. [since 12]
   * @syscap SystemCapability.Multimedia.Media.VideoRecorder
   * @systemapi
   * @since 9 dynamic
   */
  function createVideoRecorder(callback: AsyncCallback<VideoRecorder>): void;

  /**
   * The maintenance of this interface has been stopped since version api 9. Please use AVRecorder
   * Creates an VideoRecorder instance.
   *
   * @param { AsyncCallback<VideoRecorder | undefined> } callback - used to return AudioPlayer instance if the operation
   *     is successful; returns undefined otherwise.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 5400101 - No memory. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.VideoRecorder
   * @systemapi
   * @since 23 static
   */
  function createVideoRecorder(callback: AsyncCallback<VideoRecorder | undefined>): void;

  /**
   * The maintenance of this interface has been stopped since version api 9. Please use AVRecorder
   * Creates an VideoRecorder instance.
   *
   * @returns { Promise<VideoRecorder> } A Promise instance used to return VideoRecorder instance if the operation is
   *     successful; returns null otherwise.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @throws { BusinessError } 202 - Not System App. [since 12]
   * @syscap SystemCapability.Multimedia.Media.VideoRecorder
   * @systemapi
   * @since 9 dynamic
   */
  function createVideoRecorder(): Promise<VideoRecorder>;

  /**
   * The maintenance of this interface has been stopped since version api 9. Please use AVRecorder
   * Creates an VideoRecorder instance.
   *
   * @returns { Promise<VideoRecorder | undefined> } A Promise instance used to return VideoRecorder instance if the
   *     operation is successful; returns undefined otherwise.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.VideoRecorder
   * @systemapi
   * @since 23 static
   */
  function createVideoRecorder(): Promise<VideoRecorder | undefined>;

  /**
   * Creates a SoundPool instance. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > - In versions earlier than API version 18, the bottom layer of the created SoundPool object is in singleton mode.
   * > Therefore, an application process can create only one SoundPool instance.
   * >
   * > - In API version 18 and later, the bottom layer of the created SoundPool object is in multiton mode. Therefore, 
   * > an application process can create a maximum of 128 SoundPool instances.
   *
   * @param {number} maxStreams - Maximum number of streams that can be played by the SoundPool instance. The value is
   *     an integer ranging from 1 to 32.
   * @param {audio.AudioRendererInfo} audioRenderInfo - Audio renderer parameters. When the **usage** parameter in
   *     **audioRenderInfo** is set to **STREAM_USAGE_UNKNOWN**, **STREAM_USAGE_MUSIC**, **STREAM_USAGE_MOVIE**, or
   *     **STREAM_USAGE_AUDIOBOOK**, the SoundPool uses the audio mixing mode when playing a short sound, without
   *     interrupting the playback of other audios. SoundPool supports setting **rendererFlags** to **1** for low-
   *     latency playback.
   * @param {AsyncCallback<SoundPool>} callback - Callback used to return the result. If the operation is successful, a
   *     SoundPool instance is returned; otherwise, **null** is returned. The instance is used for loading and playback.
   * @throws { BusinessError } 5400101 - No memory. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   */
  function createSoundPool(
    maxStreams: number,
    audioRenderInfo: audio.AudioRendererInfo,
    callback: AsyncCallback<SoundPool>
  ): void;

  /**
   * Creates a **SoundPool** instance. This API uses an asynchronous callback to return the result.
   * 
   * **NOTE**
   * 
   * - In versions earlier than API version 18, the bottom layer of the created **SoundPool** object is in singleton
   * mode. Therefore, an application process can create only one **SoundPool** instance.
   * - In API version 18 and later versions, the bottom layer of the created **SoundPool** object is in multiton mode.
   * Therefore, an application process can create a maximum of 128 **SoundPool** instances.
   *
   * @param { int } maxStreams - Maximum number of streams that can be played by the **SoundPool** instance.
   *     The value is an integer ranging from 1 to 32.
   * @param { audio.AudioRendererInfo } audioRenderInfo - Audio renderer parameters. When the **usage** parameter
   *     in **audioRenderInfo** is set to **STREAM_USAGE_UNKNOWN**, **STREAM_USAGE_MUSIC**, **STREAM_USAGE_MOVIE**, or
   *     **STREAM_USAGE_AUDIOBOOK**, the SoundPool uses the audio mixing mode when playing a short sound, without
   *     interrupting the playback of other audios.
   * @param {AsyncCallback<SoundPool | undefined>} callback - Callback used to return the result. If the operation is
   *     successful, a **SoundPool** instance is returned; otherwise, **undefined** is returned.
   *     The instance is used for loading and playback.
   * @throws { BusinessError } 5400101 - No memory. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 23 static
   */
  function createSoundPool(
    maxStreams: int,
    audioRenderInfo: audio.AudioRendererInfo,
    callback: AsyncCallback<SoundPool | undefined>
  ): void;

  /**
   * Creates a SoundPool instance. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > - In versions earlier than API version 18, the bottom layer of the created SoundPool object is in singleton mode.
   * > Therefore, an application process can create only one SoundPool instance.
   * >
   * > - In API version 18 and later, the bottom layer of the created SoundPool object is in multiton mode. Therefore, 
   * > an application process can create a maximum of 128 SoundPool instances.
   *
   * @param {number} maxStreams - Maximum number of streams that can be played by the SoundPool instance. The value is
   *     an integer ranging from 1 to 32.
   * @param {audio.AudioRendererInfo} audioRenderInfo - Audio renderer parameters.
   * @returns {Promise<SoundPool>} Promise used to return the result. If the operation is successful, a SoundPool
   *     instance is returned; otherwise, **null** is returned. The instance is used for loading and playback.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   */
  function createSoundPool(maxStreams: number, audioRenderInfo: audio.AudioRendererInfo): Promise<SoundPool>;

  /**
   * Creates a **SoundPool** instance. This API uses a promise to return the result.
   * 
   * **NOTE**
   * 
   * - In versions earlier than API version 18, the bottom layer of the created **SoundPool** object is in singleton
   * mode. Therefore, an application process can create only one **SoundPool** instance.
   * - In API version 18 and later versions, the bottom layer of the created **SoundPool** object is in multiton mode.
   * Therefore, an application process can create a maximum of 128 **SoundPool** instances.
   *
   * @param {int} maxStreams - Maximum number of streams that can be played by the **SoundPool** instance.
   *     The value is an integer ranging from 1 to 32.
   * @param {audio.AudioRendererInfo} audioRenderInfo - Audio renderer parameters.
   * @returns {Promise<SoundPool | undefined>} Promise used to return the result. If the operation is successful,
   *     a **SoundPool** instance is returned; otherwise, **undefined** is returned.
   *     The instance is used for loading and playback.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 23 static
   */
  function createSoundPool(maxStreams: int, audioRenderInfo: audio.AudioRendererInfo): Promise<SoundPool | undefined>;

  /**
   * Creates a **SoundPool** instance. This API uses a promise to return the result.
   * 
   * If a **SoundPool** instance created using [createSoundPool]{@link #createSoundPool} is used to play the same sound
   * again, it stops the current audio and restarts the audio. However, if the instance is created using
   * **createParallelSoundPool**, it keeps playing the first audio and starts the new one alongside it.
   *
   * @param { int } maxStreams - Maximum number of streams that can be played by the **SoundPool** instance.
   *     The value is an integer ranging from 1 to 32.
   * @param { audio.AudioRendererInfo } audioRenderInfo - Audio renderer parameters.
   * @returns { Promise<SoundPool> } Promise used to return the result. If the operation is successful, a **SoundPool**
   *     instance is returned; otherwise, **null** is returned. The instance is used for loading and playback.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @throws { BusinessError } 202 - System API error. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function createParallelSoundPool(maxStreams: int, audioRenderInfo: audio.AudioRendererInfo): Promise<SoundPool>;

  /**
   * Creates an AVScreenCaptureRecorder instance. This API uses a promise to return the result.
   *
   * @returns { Promise<AVScreenCaptureRecorder> } Promise used to return the result. If the operation is successful, an
   *     AVScreenCaptureRecorder instance is returned; otherwise, **null** is returned. The instance can be used for
   *     screen capture.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @since 12 dynamic
   */
  function createAVScreenCaptureRecorder(): Promise<AVScreenCaptureRecorder>;

  /**
   * Creates an **AVScreenCaptureRecorder** instance. This API uses a promise to return the result.
   *
   * @returns { Promise<AVScreenCaptureRecorder | undefined> } Promise used to return the result. If the operation is
   *     successful,
   *     an **AVScreenCaptureRecorder** instance is returned; otherwise, **undefined** is returned.
   *     The instance can be used for screen capture.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @since 23 static
   */
  function createAVScreenCaptureRecorder(): Promise<AVScreenCaptureRecorder | undefined>;

  /**
   * Reports the user selection result in the screen capture privacy dialog box to the AVScreenCapture server to
   * determine whether to start screen capture. Screen capture starts only when the user touches a button to
   * continue the operation.
   * This API is called by the system application that creates the dialog box.
   *
   * @param {int} sessionId Session ID of the AVScreenCapture service, which is sent to the application when
   *     the AVScreenCapture server starts the privacy dialog box.
   * @param {string} choice User choice, including whether screen capture is agreed, selected display ID,
   *     and window ID. For details, see JsonData in the example below.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function reportAVScreenCaptureUserChoice(sessionId: int, choice: string): Promise<void>;

  /**
   * get Configurations which user can changes from AVScreenCapture server
   *
   * @param { int } sessionId The AVScreenCapture server session ID.
   * @returns { Promise<string> } Returns a configurable configuration item string.
   * @throws { BusinessError } 202  Called from Non-System applications. Return by promise.
   * @throws { BusinessError } 5400109 - Sessions not exist. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getAVScreenCaptureConfigurableParameters(sessionId: int): Promise<string>;

  /**
   * Creates an AVTranscoder instance. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > A maximum of 2 AVTranscoder instances can be created.
   *
   * @returns {  Promise<AVTranscoder>  } Promise used to return the result. If the operation is successful, an
   *     AVTranscoder instance is returned; otherwise, **null** is returned. The instance can be used for video
   *     transcoding.
   * @throws {  BusinessError  } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.AVTranscoder
   * @atomicservice [since 22]
   * @since 12 dynamic
   */
  function createAVTranscoder(): Promise<AVTranscoder>;

  /**
   * Creates an **AVTranscoder** instance. This API uses a promise to return the result.
   * 
   * **NOTE**
   * 
   * A maximum of 2 **AVTranscoder** instances can be created.
   *
   * @returns { Promise<AVTranscoder | undefined> } Promise used to return the result. If the operation is successful,
   *     an **AVTranscoder** instance is returned; otherwise, **undefined** is returned. The instance can be used
   *     for video transcoding.
   * @throws {  BusinessError  } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.AVTranscoder
   * @since 23 static
   */
  function createAVTranscoder(): Promise<AVTranscoder | undefined>;

  /**
   * Obtains a **ScreenCaptureMonitor** instance. This API uses a promise to return the result.
   *
   * @returns { Promise<ScreenCaptureMonitor> } Promise used to return the result. The instance can be used to query
   *     and monitor the status of the system screen recorder.
   *     <br>If the operation is successful,
   *     a **ScreenCaptureMonitor** instance is returned; otherwise, **null** is returned.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @systemapi
   * @since 18 dynamic
   */
  function getScreenCaptureMonitor(): Promise<ScreenCaptureMonitor>;

  /**
   * Obtains a **ScreenCaptureMonitor** instance. This API uses a promise to return the result.
   *
   * @returns { Promise<ScreenCaptureMonitor | undefined> } Promise used to return the result. The instance can be used
   *     to query
   *     and monitor the status of the system screen recorder.
   *     <br>If the operation is successful,
   *     a **ScreenCaptureMonitor** instance is returned; otherwise, **undefined** is returned.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @systemapi
   * @since 23 static
   */
  function getScreenCaptureMonitor(): Promise<ScreenCaptureMonitor | undefined>;

  /**
   * SoundPool, which provides APIs for loading, unloading, playing, and stopping playing system sounds, setting the 
   * volume, and setting the number of loops.
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  type SoundPool = _SoundPool;

  /**
   * Describes the playback parameters of the sound pool.
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  type PlayParameters = _PlayParameters;

  /**
   * Enumerates the interruption modes of the audio files with the same ID in SoundPool.
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum SoundInterruptMode {  
    /**
     * If the former audio file is not completely played, the latter audio file with the same ID does not interrupt the 
     * former audio file. Two audio files are played concurrently.
     *
     * @syscap SystemCapability.Multimedia.Media.SoundPool
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NO_INTERRUPT = 0,

    /**
     * If the former audio file is not completely played, the latter audio file with the same ID interrupts the former 
     * audio file.
     *
     * @syscap SystemCapability.Multimedia.Media.SoundPool
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SAME_SOUND_INTERRUPT = 1
  }

  /**
   * Enumerates the reasons for the state transition of the AVPlayer or AVRecorder instance. The enum value is reported 
   * together with **state**.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum StateChangeReason {
    /**
     * State transition triggered by user behavior. It happens when a user or the client calls an API.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    USER = 1,

    /**
     * State transition caused by background system behavior. For example, if an application does not have the 
     * permission of Media Controller, the application is forcibly suspended or stopped by the system when it switches 
     * to the background.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    BACKGROUND = 2
  }

  /**
   * Creates an AVMetadataExtractor instance. This API uses a promise to return the result.
   *
   * @returns { Promise<AVMetadataExtractor> } Promise used to return the AVMetadataExtractor instance.
   * @throws { BusinessError } 5400101 - No memory. Returned by promise.
   * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
   * @crossplatform [since 12]
   * @since 11 dynamic
   */
  function createAVMetadataExtractor(): Promise<AVMetadataExtractor>;

  /**
   * Creates an **AVMetadataExtractor** instance. This API uses a promise to return the result.
   *
   * @returns { Promise<AVMetadataExtractor | undefined> } A Promise instance used to return AVMetadataExtractor
   *     instance
   *     if the operation is successful; returns undefined otherwise.
   * @throws { BusinessError } 5400101 - No memory. Returned by promise.
   * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
   * @crossplatform
   * @since 23 static
   */
  function createAVMetadataExtractor(): Promise<AVMetadataExtractor | undefined>;

  /**
   * Creates an AVMetadataExtractor instance. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<AVMetadataExtractor> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **undefined** and **data** is the AVMetadataExtractor instance created; otherwise,
   *     **err** is an error object.
   * @throws { BusinessError } 5400101 - No memory. Returned by callback.
   * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
   * @crossplatform [since 12]
   * @since 11 dynamic
   */
  function createAVMetadataExtractor(callback: AsyncCallback<AVMetadataExtractor>): void;

  /**
   * Creates an **AVMetadataExtractor** instance. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<AVMetadataExtractor | undefined> } callback - Callback used to return the result. If the
   *     operation is
   *     successful, **err** is **undefined** and **data** is the **AVMetadataExtractor** instance created;
   *     otherwise, **err** is an error object.
   * @throws { BusinessError } 5400101 - No memory. Returned by callback.
   * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
   * @crossplatform
   * @since 23 static
   */
  function createAVMetadataExtractor(callback: AsyncCallback<AVMetadataExtractor | undefined>): void;

  /**
   * Creates an AVImageGenerator instance. This API uses a promise to return the result.
   *
   * @returns { Promise<AVImageGenerator> } Promise used to return the result. If the operation is successful, an
   *     AVImageGenerator instance is returned; otherwise, **null** is returned. The API can be used to obtain a video
   *     thumbnail.
   * @throws { BusinessError } 5400101 - No memory. Returned by promise.
   * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
   * @since 12 dynamic
   */
  function createAVImageGenerator(): Promise<AVImageGenerator>;

  /**
   * Creates an **AVImageGenerator** instance. This API uses a promise to return the result.
   *
   * @returns { Promise<AVImageGenerator | undefined> } Promise used to return the result. If the operation is
   *     successful,
   *     an **AVImageGenerator** instance is returned; otherwise, **undefined** is returned.
   *     The API can be used to obtain a video thumbnail.
   * @throws { BusinessError } 5400101 - No memory. Returned by promise.
   * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
   * @since 23 static
   */
  function createAVImageGenerator(): Promise<AVImageGenerator | undefined>;

  /**
   * Creates an AVImageGenerator instance. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<AVImageGenerator> } callback - Callback used to return the result. If the operation is
   *     successful, an AVImageGenerator instance is returned; otherwise, **null** is returned. The API can be used to
   *     obtain a video thumbnail.
   * @throws { BusinessError } 5400101 - No memory. Returned by callback.
   * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
   * @since 12 dynamic
   */
  function createAVImageGenerator(callback: AsyncCallback<AVImageGenerator>): void;

  /**
   * Creates an **AVImageGenerator** instance. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<AVImageGenerator | undefined> } callback - Callback used to return the result.
   *     If the operation is successful, an **AVImageGenerator** instance is returned; otherwise, **undefined** is returned.
   *     The API can be used to obtain a video thumbnail.
   * @throws { BusinessError } 5400101 - No memory. Returned by callback.
   * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
   * @since 23 static
   */
  function createAVImageGenerator(callback: AsyncCallback<AVImageGenerator | undefined>): void;

  /**
   * AVMetadataExtractor is a class for metadata retrieval. It provides APIs to obtain metadata and thumbnails from 
   * media assets. Before calling any API of AVMetadataExtractor, you must use 
   * [media.createAVMetadataExtractor]{@link @ohos.multimedia.media:media.createAVMetadataExtractor(callback: AsyncCallback<AVMetadataExtractor>)}
   * to create an AVMetadataExtractor instance.
   * 
   * For details about the demo of obtaining audio or video metadata and video thumbnails, see 
   * [Using AVMetadataExtractor to Extract Audio and Video Metadata (ArkTS)](docroot://media/media/avmetadataextractor.md).
   * 
   *
   * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
   * @crossplatform [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface AVMetadataExtractor {
    /**
     * Media file descriptor, which specifies the data source. Before obtaining metadata, you must set the data source 
     * through either **fdSrc** or **dataSrc**.
     * 
     * There is a media file that stores continuous assets, the address offset is 0, and the byte length is 100. Its 
     * file descriptor is **AVFileDescriptor { fd = resourceHandle; offset = 0; length = 100; }**.
     * 
     * **NOTE**
     * 
     * After the resource handle (FD) is transferred to an AVMetadataExtractor instance, do not use the resource handle 
     * to perform other read and write operations, including but not limited to transferring this handle to other 
     * AVPlayer, AVMetadataExtractor, AVImageGenerator, or AVTranscoder instance. Competition occurs when multiple 
     * AVMetadataExtractor use the same resource handle to read and write files at the same time, resulting in errors in
     * obtaining data.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    fdSrc ?: AVFileDescriptor;

    /**
     * Streaming media resource descriptor, which specifies the data source. Before obtaining metadata, you must set the
     * data source through either **fdSrc** or **dataSrc**.
     * 
     * When an application obtains a media file from the remote, you can set **dataSrc** to obtain the metadata before 
     * the application finishes the downloading.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    dataSrc ?: AVDataSrcDescriptor;

    /**
     * Obtains the media metadata. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<AVMetadata> } callback - Callback used to return the result, which is an AVMetadata
     *     instance.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by callback.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by callback.
     * @throws { BusinessError } 5411012 - Http cleartext traffic is not permitted. [since 23]
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    fetchMetadata(callback: AsyncCallback<AVMetadata>): void;

    /**
     * Obtains media metadata. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<AVMetadata | undefined> } callback - Callback used to return the result,
     *     which is an **AVMetadata** instance.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by callback.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by callback.
     * @throws { BusinessError } 5411012 - Http cleartext traffic is not permitted.
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform
     * @since 23 static
     */
    fetchMetadata(callback: AsyncCallback<AVMetadata | undefined>): void;

    /**
     * Obtains the media metadata. This API uses a promise to return the result.
     *
     * @returns { Promise<AVMetadata> } Promise used to return the result, which is an AVMetadata instance.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by promise.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by promise.
     * @throws { BusinessError } 5411012 - Http cleartext traffic is not permitted. [since 23]
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    fetchMetadata(): Promise<AVMetadata>;

    /**
     * Obtains media metadata. This API uses a promise to return the result.
     *
     * @returns { Promise<AVMetadata | undefined> } Promise used to return the result,
     *     which is an **AVMetadata** instance.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by promise.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by promise.
     * @throws { BusinessError } 5411012 - Http cleartext traffic is not permitted.
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform
     * @since 23 static
     */
    fetchMetadata(): Promise<AVMetadata | undefined>;

    /**
     * Obtains the media metadata. You can set the maximum timeout interval (**timeoutMs**) for obtaining the metadata. 
     * This API uses a promise to return the result.
     *
     * @param { long } timeoutMs - Timeout interval for obtaining media metadata. The value range is (0, 20000], in
     *     milliseconds.<br>If no metadata is returned within the specified timeout interval, error code 5400104 is
     *     returned.
     * @returns { Promise<AVMetadata | undefined> } Promise used to return the audio and video metadata object (
     *     **AVMetadata**) asynchronously.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by promise.
     * @throws { BusinessError } 5400104 - Operation timeout.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by promise.
     * @throws { BusinessError } 5400108 - Parameter check failed. Returned by promise.
     * @throws { BusinessError } 5411012 - Http cleartext traffic is not permitted.
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    fetchMetadataWithTimeout(timeoutMs: long): Promise<AVMetadata | undefined>;

    /**
     * Obtains the cover of the audio album. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the album cover.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by callback.
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    fetchAlbumCover(callback: AsyncCallback<image.PixelMap>): void;

    /**
     * Obtains the cover of the audio album. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<image.PixelMap | undefined> } callback - Callback used to return the album cover.
     *     to return when fetchAlbumCover completed.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by callback.
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform
     * @since 23 static
     */
    fetchAlbumCover(callback: AsyncCallback<image.PixelMap | undefined>): void;

    /**
     * Obtains the cover of the audio album. This API uses a promise to return the result.
     *
     * @returns { Promise<image.PixelMap> } Promise used to return the album cover.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by promise.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by promise.
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     */
    fetchAlbumCover(): Promise<image.PixelMap>;

    /**
     * Obtains the cover of the audio album. This API uses a promise to return the result.
     *
     * @returns { Promise<image.PixelMap | undefined> } Promise used to return the album cover.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by promise.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by promise.
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform
     * @since 23 static
     */
    fetchAlbumCover(): Promise<image.PixelMap | undefined>;

    /**
     * Sets the data source for a network on-demand resource. Only network metadata (
     * [fetchMetadata]{@link media.AVMetadataExtractor.fetchMetadata(callback: AsyncCallback<AVMetadata>)}) and 
     * thumbnails (
     * [fetchFrameByTime]{@link media.AVMetadataExtractor.fetchFrameByTime(timeUs: number, options: AVImageQueryOptions, param: PixelMapParams)}
     * ) can be obtained. The media resource URL must be set before the retrieval.
     *
     * @param { string } url - URL of the media resource.<br>1. The video formats MP4, MPEG-TS, and MKV are supported.<
     *     br>2. The audio formats M4A, AAC, MP3, OGG, WAV, FLAC, and AMR are supported.<br>
     *     **Example of supported URLs**:<br>1. HTTP: http://xx<br>2. HTTPS: https://xx<br>Note: HLS/DASH and live
     *     streaming resources are not supported.
     * @param { Record<string, string> } [headers] - Custom HTTP headers for accessing the network resource. The default
     *     value is empty.
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @since 20 dynamic
     * @since 23 static
     */
    setUrlSource(url: string, headers?: Record<string, string>): void;

    /**
     * Obtains a video thumbnail. This API uses a promise to return the result.
     *
     * @param { number } timeUs - Time of the video for which a thumbnail is to be obtained, in us.
     * @param { AVImageQueryOptions } options - Relationship between the time passed in and the video frame.
     * @param { PixelMapParams } param - Format parameters of the thumbnail to be obtained.
     * @returns { Promise<image.PixelMap> } Promise used to return the video thumbnail.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by promise.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by promise.
     * @throws { BusinessError } 5400108 - Parameter check failed. Returned by promise.
     * @throws { BusinessError } 5411012 - Http cleartext traffic is not permitted. [since 23]
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @since 20 dynamic
     */
    fetchFrameByTime(timeUs: number, options: AVImageQueryOptions, param: PixelMapParams): Promise<image.PixelMap>;

    /**
     * It will decode the given video resource. Then fetch a picture
     * at @timeUs according the given @options and @param .
     *
     * @param { long } timeUs - The time expected to fetch picture from the video resource.
     *     The unit is microsecond(us).
     * @param { AVImageQueryOptions } options - The time options about the relationship
     *     between the given timeUs and a key frame, see @AVImageQueryOptions .
     * @param { PixelMapParams } param - The output pixel map format params, see @PixelMapParams .
     * @returns { Promise<image.PixelMap | undefined> } A Promise instance used to return the pixel map
     *     when fetchFrameByTime completed.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by promise.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by promise.
     * @throws { BusinessError } 5400108 - Parameter check failed. Returned by promise.
     * @throws { BusinessError } 5411012 - Http cleartext traffic is not permitted.
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @since 23 static
     */
    fetchFrameByTime(timeUs: long, options: AVImageQueryOptions, param: PixelMapParams): Promise<image.PixelMap | undefined>;

    /**
     * Obtains a video thumbnail. You can set the maximum timeout interval (**timeoutMs**) for obtaining the thumbnail. 
     * This API uses a promise to return the result.
     *
     * @param { long } timeUs - Time of the video for which a thumbnail is to be obtained, in μs.
     * @param { AVImageQueryOptions } options - Relationship between the time passed in and the video frame.
     * @param { PixelMapParams } param - Format parameters of the thumbnail to be obtained.
     * @param { long } timeoutMs - Timeout interval for obtaining the thumbnail. The value range is (0, 20000], in
     *     milliseconds.<br>If the thumbnail is not obtained within the specified timeout interval, error code 5400104
     *     is returned.
     * @returns { Promise<image.PixelMap | undefined> } Promise used to return the video thumbnail.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by promise.
     * @throws { BusinessError } 5400104 - Operation timeout.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by promise.
     * @throws { BusinessError } 5400108 - Parameter check failed. Returned by promise.
     * @throws { BusinessError } 5411012 - Http cleartext traffic is not permitted.
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    fetchFrameByTimeWithTimeout(timeUs: long, options: AVImageQueryOptions, param: PixelMapParams,
      timeoutMs: long): Promise<image.PixelMap | undefined>;

    /**
     * Obtains video thumbnails in batches. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > - The given video resource is decoded first, and then image frames are extracted from each time point in the 
     * > **timesUs** array based on the provided **options** and **param**.
     * >
     * > - When each image extraction is complete, the system calls the callback function and passes the extraction 
     * > result. Note that the execution order of the callback function may be inconsistent with the time points in the 
     * > **timesUs** array.
     *
     * @param { long[] } timesUs - Set of time points of all thumbnails to be obtained in the video.<br>The unit is
     *     microsecond (μs), and the value range of the array length is (0, 4096].
     * @param { AVImageQueryOptions } queryOption - Relationship between the time passed in and the video frame.
     * @param { PixelMapParams } param - Format parameters of the thumbnail to be obtained.
     * @param { OnFrameFetched } callback - Thumbnail information to be returned and possible exception types.<br>For
     *     details about the exception types, see the returned error code information.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by callback.
     * @throws { BusinessError } 5400104 - Fetch timeout, Returned by callback.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by callback.
     * @throws { BusinessError } 5400105 - Service died.
     * @throws { BusinessError } 5400108 - Parameter check failed. e.g. The size of timesUs is larger than 4096.
     * @throws { BusinessError } 5411012 - Http cleartext not permitted.
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    fetchFramesByTimes(timesUs: long[], queryOption: AVImageQueryOptions, param: PixelMapParams,
        callback: OnFrameFetched): void;

    /**
     * Obtains video thumbnails in batches. You can set the maximum timeout interval (**timeoutMs**) for obtaining each 
     * thumbnail. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > - The given video resource is decoded first, and then image frames are extracted from each time point in the 
     * > **timesUs** array based on the provided **options** and **param**.
     * >
     * > - When each image extraction is complete, the system calls the callback function and passes the extraction 
     * > result. Note that the execution order of the callback function may be inconsistent with the time points in the 
     * > **timesUs** array.
     * >
     * > - The **timeoutMs** parameter indicates the maximum timeout interval for obtaining each thumbnail frame, not 
     * > the entire batch thumbnail extraction process.
     *
     * @param { long[] } timesUs - Set of time points of all thumbnails to be obtained in the video.<br>The unit is
     *     microsecond (μs), and the value range of the array length is (0, 4096].
     * @param { AVImageQueryOptions } queryOption - Relationship between the time passed in and the video frame.
     * @param { PixelMapParams } param - Format parameters of the thumbnail to be obtained.
     * @param { long } timeoutMs - Timeout interval for obtaining each thumbnail. The value range is (0, 20000], in
     *     milliseconds.<br>If a thumbnail is not obtained within the specified timeout interval, error code 5400104 is
     *     returned.
     * @param { OnFrameFetched } callback - Thumbnail information to be returned and possible exception types.<br>For
     *     details about the exception types, see the returned error code information.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by callback.
     * @throws { BusinessError } 5400104 - Fetch timeout, Returned by callback.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by callback.
     * @throws { BusinessError } 5400105 - Service died.
     * @throws { BusinessError } 5400108 - Parameter check failed. e.g. The size of timesUs is larger than 4096.
     * @throws { BusinessError } 5411012 - Http cleartext not permitted.
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    fetchFramesByTimesWithTimeout(timesUs: long[], queryOption: AVImageQueryOptions, param: PixelMapParams,
      timeoutMs: long, callback: OnFrameFetched): void;

    /**
     * Cancels the ongoing task of obtaining thumbnails in batches. (The thumbnails that have been obtained are not 
     * affected.)
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    cancelAllFetchFrames(): void;

    /**
     * Obtains the video timestamp corresponding to a video frame number. Only MP4 video files are supported.
     *
     * @param { int } index - Video frame number.
     * @returns { Promise<long> } Promise used to return the timestamp, in microseconds.
     * @throws { BusinessError } 401 - The parameter check failed. Return by promise.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by promise.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by promise.
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getTimeByFrameIndex(index: int): Promise<long>;

    /**
     * Obtains the video frame number corresponding to a video timestamp. Only MP4 video files are supported.
     *
     * @param { long } timeUs - Video timestamp, in microseconds.
     * @returns { Promise<int> } Promise used to return the video frame number.
     * @throws { BusinessError } 401 - The parameter check failed. Return by promise.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by promise.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by promise.
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getFrameIndexByTime(timeUs: long): Promise<int>;

    /**
     * Releases this AVMetadataExtractor instance. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by callback.
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases this AVMetadataExtractor instance. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by promise.
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
  }

  /**
   * Defines the audio and video metadata. Parameters that are not declared as read-only in
   * [AVRecorderConfig]{@link #AVRecorderConfig} can be used as input parameters for recording of
   * [AVRecorder]{@link #AVRecorder}.
   *
   * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
   * @crossplatform [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface AVMetadata {
    /**
     * Title of the album. This parameter is not supported in AVRecorder settings.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    album?: string;

    /**
     * Artist of the album. This parameter is not supported in AVRecorder settings.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    albumArtist?: string;

    /**
     * Artist of the media asset. This parameter is not supported in AVRecorder settings.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    artist?: string;

    /**
     * Author of the media asset. This parameter is not supported in AVRecorder settings.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    author?: string;

    /**
     * Time when the media asset is created. This parameter is not supported in AVRecorder settings.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    dateTime?: string;

    /**
     * Time when the media asset is created. The value is in the YYYY-MM-DD HH:mm:ss format.
     * This parameter is not supported in AVRecorder settings.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    dateTimeFormat?: string;

    /**
     * Composer of the media asset. This parameter is not supported in AVRecorder settings.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    composer?: string;

    /**
     * Duration of the media asset. This parameter is not supported in AVRecorder settings.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    duration?: string;

    /**
     * Type or genre of the media asset.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    genre?: string;

    /**
     * Whether the media asset contains audio. This parameter is not supported in AVRecorder settings.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    hasAudio?: string;

    /**
     * Whether the media asset contains a video. This parameter is not supported in AVRecorder settings.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    hasVideo?: string;

    /**
     * MIME type of the media asset. This parameter is not supported in AVRecorder settings.
     * Some example mime types include: "video/mp4", "audio/mp4", "audio/amr-wb".
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    mimeType?: string;

    /**
     * Number of tracks of the media asset. This parameter is not supported in AVRecorder settings.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    trackCount?: string;

    /**
     * Audio sampling rate, in Hz. This parameter is not supported in AVRecorder settings.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    sampleRate?: string;

    /**
     * Title of the media asset. This parameter is not supported in AVRecorder settings.
     * This parameter is read-only in the current version.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    title?: string;

	  /**
     * Description of the media asset. This parameter is not supported in AVRecorder settings.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @since 23 dynamic&static
     */
    description?: string;

    /**
     * Video height, in px. This parameter is not supported in AVRecorder settings.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    videoHeight?: string;

    /**
     * Video width, in px. This parameter is not supported in AVRecorder settings.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    videoWidth?: string;

    /**
     * Video rotation direction, in degrees.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    videoOrientation?: string;

    /**
     * HDR type of the media asset. This parameter is not supported in AVRecorder settings.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    hdrType?: HdrType;

    /**
     * Geographical location of the media asset.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @since 12 dynamic
     * @since 23 static
     */
    location?: Location;

    /**
     * Custom key-value mappings obtained from **moov.meta.list**.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @since 12 dynamic
     * @since 23 static
     */
    customInfo?: Record<string, string>;

    /**
     * Tracks info of the media asset. This parameter is not supported in AVRecorder settings.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @since 20 dynamic
     * @since 23 static
     */
    tracks?: Array<MediaDescription>;

    /**
     * The offset value of GLTF 3D model in media file. This parameter is not supported in AVRecorder settings.
     * If the media file has no GLTF 3D model, gltf_offset is undefined.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    gltf_offset?: string;

   /**
    * The identifier that represents the software or hardware and settings used for encoding.
    * This parameter is not supported in AVRecorder settings.
    *
    * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
   encoder?: string;
  }

  /**
   * This interface is used to define the output image size.
   *
   * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
   * @since 20 dynamic
   * @since 23 static
   */
  interface OutputSize {  
    /**
     * The expected output frame image width.
     * If the value is less than 0, the width will be the orginal width of the video.
     * If the value is 0 or no value is assigned, the scaling ratio will follow the specified height.
     * If both width and height is not assigned, the output will be the original size of video frame.
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 20 dynamic
     * @since 23 static
     */
    width?:int;
    /**
     * The expected output frame image height.
     * If the value is less than 0, the height will be the orginal height of the video.
     * If the value is 0 or no value is assigned, the scaling ratio will follow the specified width.
     * If both width and height is not assigned, the output will be the original size of video frame.
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 20 dynamic
     * @since 23 static
     */
    height?: int;
  }

  /**
   * Enumerates the HDR types.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum HdrType {
    /**
     * No HDR.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    AV_HDR_TYPE_NONE = 0,

    /**
     * HDR VIVID.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    AV_HDR_TYPE_VIVID = 1
  }

  /**
   * AVImageGenerator is a class for video thumbnail retrieval. It provides APIs to obtain a thumbnail from a video. 
   * Before calling any API in AVImageGenerator, you must use 
   * [createAVImageGenerator()]{@link @ohos.multimedia.media:media.createAVImageGenerator(callback: AsyncCallback<AVImageGenerator>)}
   * to create an AVImageGenerator instance.
   * 
   * For details about the demo for obtaining video thumbnails, see 
   * [Obtaining Video Thumbnails](docroot://media/media/avimagegenerator.md).
   *
   * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
   * @since 12 dynamic
   * @since 23 static
   */
  interface AVImageGenerator {
    /**
     * Media file descriptor, which specifies the data source.
     * 
     * There is a media file that stores continuous assets, the address offset is 0, and the byte length is 100. Its 
     * file descriptor is **AVFileDescriptor { fd = resourceHandle; offset = 0; length = 100; }**.
     * 
     * **NOTE**
     * 
     * After the resource handle (FD) is transferred to an AVImageGenerator instance, do not use the resource handle to 
     * perform other read and write operations, including but not limited to transferring this handle to other AVPlayer,
     * AVMetadataExtractor, AVImageGenerator, or AVTranscoder instance. Competition occurs when multiple 
     * AVImageGenerator use the same resource handle to read and write files at the same time, resulting in errors in 
     * obtaining data.
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 12 dynamic
     * @since 23 static
     */
    fdSrc ?: AVFileDescriptor;

    /**
     * Obtains a video thumbnail. This API uses an asynchronous callback to return the result.
     *
     * @param { number } timeUs - Time of the video for which a thumbnail is to be obtained, in μs.
     * @param { AVImageQueryOptions } options - Relationship between the thumbnail timestamp in and the video frame.
     * @param { PixelMapParams } param - Format parameters of the thumbnail to be obtained.
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the PixelMap instance obtained; otherwise, **err** is an
     *     error object.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by callback.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by callback.
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 12 dynamic
     */
    fetchFrameByTime(timeUs: number, options: AVImageQueryOptions, param: PixelMapParams,
      callback: AsyncCallback<image.PixelMap>): void;

    /**
     * Obtains a video thumbnail. This API uses an asynchronous callback to return the result.
     *
     * @param { long } timeUs - Time of the video for which a thumbnail is to be obtained, in μs.
     * @param { AVImageQueryOptions } options - Relationship between the time passed in and the video frame.
     * @param { PixelMapParams } param - Format parameters of the thumbnail to be obtained.
     * @param { AsyncCallback<image.PixelMap | undefined> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **undefined** and **data** is the **PixelMap** instance obtained;
     *     otherwise, **err** is an error object.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by callback.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by callback.
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 23 static
     */
    fetchFrameByTime(timeUs: long, options: AVImageQueryOptions, param: PixelMapParams,
      callback: AsyncCallback<image.PixelMap | undefined>): void;

    /**
     * Obtains a video thumbnail. This API uses a promise to return the result.
     *
     * @param { number } timeUs - Time of the video for which a thumbnail is to be obtained, in μs.
     * @param { AVImageQueryOptions } options - Relationship between the thumbnail timestamp in and the video frame.
     * @param { PixelMapParams } param - Format parameters of the thumbnail to be obtained.
     * @returns { Promise<image.PixelMap> } Promise used to return the video thumbnail.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by promise.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by promise.
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 12 dynamic
     */
    fetchFrameByTime(timeUs: number, options: AVImageQueryOptions, param: PixelMapParams): Promise<image.PixelMap>;

    /**
     * Obtains a video thumbnail. This API uses a promise to return the result.
     *
     * @param { long } timeUs - Time of the video for which a thumbnail is to be obtained, in μs.
     * @param { AVImageQueryOptions } options - Relationship between the time passed in and the video frame.
     * @param { PixelMapParams } param - Format parameters of the thumbnail to be obtained.
     * @returns { Promise<image.PixelMap | undefined> } Promise used to return the video thumbnail.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by promise.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by promise.
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 23 static
     */
    fetchFrameByTime(timeUs: long, options: AVImageQueryOptions, param: PixelMapParams): Promise<image.PixelMap | undefined>;

    /**
     * Fetches a scaled thumbnail from the video at a particular timestamp. This API uses a promise to return the 
     * result.
     *
     * @param { number } timeUs - Timestamp, in microseconds (μs), at which the thumbnail is to be fetched from the
     *     video.
     * @param { AVImageQueryOptions } queryMode - Relationship between the thumbnail timestamp in and the video frame.
     * @param { OutputSize } outputSize - Output size of the thumbnail. By default, the original image size is used.
     * @returns { Promise<image.PixelMap> } Promise used to return the video thumbnail.
     * @throws { BusinessError  } 5400102 Operation not allowed. Returned by promise.
     * @throws { BusinessError  } 5400106 Unsupported format. Returned by promise.
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 20 dynamic
     */
    fetchScaledFrameByTime(timeUs: number, queryMode: AVImageQueryOptions, outputSize?: OutputSize):
      Promise<image.PixelMap>;

    /**
     * Supports extracting video thumbnails by proportional scaling
     *
     * @param { long } timeUs - The time expected to fetch picture from the video resource.
     *     The unit is microsecond(us).
     * @param { AVImageQueryOptions } queryMode - Specify how to position the video frame
     * @param { OutputSize } [outputSize] - This field is used to define the output size of frame.
     * @returns { Promise<image.PixelMap | undefined> }  Returns the output image object
     * @throws { BusinessError } 5400102 Operation not allowed. Returned by promise.
     * @throws { BusinessError } 5400106 Unsupported format. Returned by promise.
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 23 static
     */
    fetchScaledFrameByTime(timeUs: long, queryMode: AVImageQueryOptions, outputSize?: OutputSize):
      Promise<image.PixelMap | undefined>;

    /**
     * Releases this AVImageGenerator instance. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by callback.
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 12 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases this AVImageGenerator instance. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by promise.
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 12 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
  }

  /**
   * Enumerates the relationship between the video frame and the time at which the video thumbnail is obtained.
   * 
   * The time passed in for obtaining the thumbnail may be different from the time of the video frame for which the 
   * thumbnail is actually obtained. Therefore, you need to specify their relationship.
   *
   * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
   * @since 12 dynamic
   * @since 23 static
   */
  enum AVImageQueryOptions {
    /**
     * The key frame at or next to the specified time is selected.
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 12 dynamic
     * @since 23 static
     */
    AV_IMAGE_QUERY_NEXT_SYNC = 0,

    /**
     * The key frame at or prior to the specified time is selected.
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 12 dynamic
     * @since 23 static
     */
    AV_IMAGE_QUERY_PREVIOUS_SYNC,

    /**
     * The key frame closest to the specified time is selected.
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 12 dynamic
     * @since 23 static
     */
    AV_IMAGE_QUERY_CLOSEST_SYNC,

    /**
     * The frame (not necessarily a key frame) closest to the specified time is selected.
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 12 dynamic
     * @since 23 static
     */
    AV_IMAGE_QUERY_CLOSEST,
  }

  /**
   * Defines the format parameters of the video thumbnail to be obtained.
   *
   * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
   * @since 12 dynamic
   * @since 23 static
   */
  interface PixelMapParams {
    /**
     * Width of the thumbnail. Unit: px.
     * The value must be greater than 0 and less than or equal to the width of the original video.
     * Otherwise, the returned thumbnail will not be scaled.
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 12 dynamic
     * @since 23 static
     */
    width?: int;

    /**
     * Height of the thumbnail. Unit: px.
     * The value must be greater than 0 and less than or equal to the height of the original video.
     * Otherwise, the returned thumbnail will not be scaled.
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 12 dynamic
     * @since 23 static
     */
    height?: int;

    /**
     * Color format of the thumbnail.
     * 
     * **System API**: This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    colorFormat?: PixelFormat;

    /**
     * Auto flip the thumbnail when video has mirror attribute (Vertical Flip or Horizontal Flip).
     * If the value is false, the returned thumbnail will not be flipped.
     * 
     * **System API**: This is a system API.
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    autoFlip?: boolean;
  }

  /**
   * Enumerates the color formats supported by the video thumbnail.
   *
   * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum PixelFormat {
    /**
     * RGB_565.
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    RGB_565 = 2,

    /**
     * RGBA_8888.
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    RGBA_8888 = 3,

    /**
     * RGB_888.
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    RGB_888 = 5
  }

  /**
   * Enumerates the results of obtaining thumbnails in batches.
   *
   * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum FetchResult {
    /**
     * Failed to obtain the thumbnail from the video.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    FETCH_FAILED = 0,

    /**
     * Succeeded in obtaining the thumbnail from the video.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    FETCH_SUCCEEDED = 1,

    /**
     * The operation of obtaining the thumbnail from the video is canceled.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    FETCH_CANCELED = 2,
  }

  /**
   * Defines the frame info when fetch picture form a video.
   *
   * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface FrameInfo {
    /**
     * The requested frame time.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    requestedTimeUs: long;

    /**
     * The actual frame time.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    actualTimeUs?: long;

    /**
     * The image extracted from video.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    image?: image.PixelMap;

    /**
     * The fetch result code - succeed, failed or cancelled.
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    result: FetchResult;
  }

  /**
   * Describes the callback invoked when thumbnails are obtained in batches.
   *
   * @param { FrameInfo } frameInfo - Thumbnail information.
   * @param { BusinessError<void> } [err] - Error that occurs when the thumbnail is obtained. The default value is
   *     **null**.
   * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type OnFrameFetched = (frameInfo: FrameInfo, err?: BusinessError<void>) => void;

  /**
   * Enumerates the types of [Media error codes](docroot://reference/apis-media-kit/errorcode-media.md).
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum AVErrorCode {
    /**
     * The operation is successful.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_OK = 0,

    /**
     * No permission to perform the operation.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_NO_PERMISSION = 201,

    /**
     * Invalid input parameter.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_INVALID_PARAMETER = 401,

    /**
     * Unsupported API.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_UNSUPPORT_CAPABILITY = 801,

    /**
     * The system memory is insufficient or the number of services reaches the upper limit.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_NO_MEMORY = 5400101,

    /**
     * The operation is not allowed in the current state or you do not have the permission to perform the operation.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_OPERATE_NOT_PERMIT = 5400102,

    /**
     * The data stream is abnormal.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_IO = 5400103,

    /**
     * The system or network response times out.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_TIMEOUT = 5400104,

    /**
     * The service process is dead.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_SERVICE_DIED = 5400105,

    /**
     * The format of the media asset is not supported.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_UNSUPPORT_FORMAT = 5400106,

    /**
     * The audio focus is interrupted.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    AVERR_AUDIO_INTERRUPTED = 5400107,
    /**
     * Failed to parse the server address or connect to the server.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_HOST_NOT_FOUND = 5411001,
    /**
     * Network connection times out.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_CONNECTION_TIMEOUT = 5411002,
    /**
     * Data or links are abnormal due to network exceptions.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_NETWORK_ABNORMAL = 5411003,
    /**
     * The network is disabled.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_NETWORK_UNAVAILABLE = 5411004,
    /**
     * No access permission.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_NO_PERMISSION = 5411005,
    /**
     * The client request parameter is incorrect or exceeds the processing capability.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_REQUEST_DENIED = 5411006,
    /**
     * No network resource is available.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_RESOURCE_NOT_FOUND = 5411007,
    /**
     * The server fails to verify the client certificate.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_SSL_CLIENT_CERT_NEEDED = 5411008,
    /**
     * The SSL connection fails.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_SSL_CONNECTION_FAILED = 5411009,
    /**
     * The client fails to verify the server certificate.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_SSL_SERVER_CERT_UNTRUSTED = 5411010,
    /**
     * The request is not supported due to a network protocol error.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_UNSUPPORTED_REQUEST = 5411011,
    /**
     * The seek operation in SEEK_CONTINUOUS mode is not supported.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    AVERR_SEEK_CONTINUOUS_UNSUPPORTED = 5410002,

    /**
     * Super resolution is not supported.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    AVERR_SUPER_RESOLUTION_UNSUPPORTED = 5410003,

    /**
     * Super resolution is not enabled.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    AVERR_SUPER_RESOLUTION_NOT_ENABLED = 5410004,

    /**
     * HTTP plaintext access is not allowed.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    AVERR_IO_CLEARTEXT_NOT_PERMITTED = 5411012,

    /**
     * The parameter value is out of range.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    AVERR_PARAMETER_OUT_OF_RANGE = 5400108,

    /**
     * The parameter value means session does not exist
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    AVERR_SESSION_NOT_EXIST = 5400109
  }

  /**
   * Describes the video Dimensions.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface VideoSize {  
    /**
     * width of the video resolution.
     * The value should be an integer.Value constraint:The value must be a positive integer.
     * <br>Unit:Pixel.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    width?: int;
	
    /**
     * height of the video resolution.
     * The value should be an integer.Value constraint:The value must be a positive integer.
     * <br>Unit:Pixel.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    height?: int;
  }

  /**
   * Describes the filter conditions for track selection.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface TrackSelectionFilter {
    /**
     * Maximum allowed video bitrate.
     * The value should be an integer.Value constraint:The value must be a positive integer.
     * <br>Unit:Bits/sec.Default value:If this parameter is not specified, the maximum video bitrate is not limited.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxVideoBitrate?: int;

    /**
     * Minimum allowed video bitrate.
     * The value should be an integer.Value constraint:The value must be a positive integer.
     * <br>Unit:Bits/sec.Default value:If no value is assigned, the minimum video bitrate is not limited.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    minVideoBitrate?: int;

    /**
     * Maximum allowed video frame rate.
     * The value should be an integer.Value constraint:The value must be a positive integer.
     * <br>Unit:frame/sec.Default value:If not specified, the maximum video frame rate is not limited.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxVideoFrameRate?: int;

    /**
     * Minimum allowed video frame rate.
     * The value should be an integer.Value constraint:The value must be a positive integer.
     * <br>Unit:frame/sec.Default value:If not specified, the minimum frame rate is not specified.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    minVideoFrameRate?: int;

    /**
     * Maximum allowed video resolution.
     * <br>Default value:If not specified, the maximum video resolution is not limited.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxVideoResolution?: VideoSize;

    /**
     * Minimum allowed video resolution.
     * <br>Default value:If not specified, the minimum video resolution is not limited.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    minVideoResolution?: VideoSize;

    /**
     * The preferred sample MIME types for video tracks in order of preference,
     * Multiple MIMEs are arranged in the order of the array, with priorities in descending order.
     * Value constraint:Format as a MIME string or a codec string in HLS or DASH.
     * <br>Default value:If not specified or an empty array is set, the Mime type is not limited.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    preferredVideoMimeTypes?: Array<string>;

    /**
     * Maximum allowed audio bitrate.
     * The value should be an integer.Value constraint:The value must be a positive integer (greater than 0).
     * <br>Unit:bit/s.Default value:If this parameter is not set, the maximum audio bitrate is not limited.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxAudioBitrate?: int;

    /**
     * Minimum allowed audio bitrate.
     * The value should be an integer.Value constraint:The value must be a positive integer.
     * <br>Unit:Bits/sec.Default value:If this parameter is not set, the minimum audio bitrate is not limited.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    minAudioBitrate?: int;
	
    /**
     * Maximum allowed audio channel count.
     * The value should be an integer.Value constraint:The value must be a positive integer.
     * <br>Default value:If this parameter is not specified, the number of audio channels is not limited.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxAudioChannels?: int;

    /**
     * Indicates the preferred encoding MIME type of the audio track.
     * Multiple MIMEs are arranged in the order of the array, with priorities in descending order.
     * Value constraint:Format as a MIME string or a codec string in HLS or DASH.
     * <br>Default value:If not specified or an empty array is set, the MIME type of the audio is not restricted.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    preferredAudioMimeTypes?: Array<string>;

    /**
     * The preferred languages for audio tracks.
     * Multiple languages are arranged in the order of the array, with priorities in descending order.
     * Value constraint:Language strings comply with the IETF BCP 47 definition.
     * <br>Default value:If this parameter is not specified or the array is empty, the audio language is not restricted.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    preferredAudioLanguages?: Array<string>;

    /**
     * Preferred language set for subtitles.
     * Multiple languages are arranged in the order of the array, with priorities in descending order.
     * Value constraint:The language string complies with the IETF BCP 47 definition.
     * <br>Default value:If this parameter is not specified or the array is empty, the subtitle language is not
     * restricted.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    preferredSubtitleLanguages?: Array<string>;
  }
    /**
   * Describes the state of the [AVPlayer]{@link @ohos.multimedia.media:media}. Your application can proactively obtain 
   * the AVPlayer state through the **state** property or obtain the reported AVPlayer state by subscribing to the 
   * [stateChange]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)}
   * event. For details about the rules for state transition, see 
   * [Audio Playback](docroot://media/media/using-avplayer-for-playback.md).
   *
   * @unionmember { 'idle' } The AVPlayer enters this state after
   *     [createAVPlayer()]{@link @ohos.multimedia.media:media.createAVPlayer(callback: AsyncCallback<AVPlayer>)} or
   *     [reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)} is called.
   *     <br>In case [createAVPlayer()]{@link @ohos.multimedia.media:media.createAVPlayer(callback: AsyncCallback<AVPlayer>)}
   *     is used, all properties are set to their default values.
   *     <br>In case [reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>) } The
   *     AVPlayer enters this state after
   *     [createAVPlayer()]{@link @ohos.multimedia.media:media.createAVPlayer(callback: AsyncCallback<AVPlayer>)} or
   *     [reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)} is called.
   *     <br>In case [createAVPlayer()]{@link @ohos.multimedia.media:media.createAVPlayer(callback: AsyncCallback<AVPlayer>)}
   *     is used, all properties are set to their default values.
   *     <br>In case [reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)} is called,
   *     the **url<sup>9+</sup>**, **fdSrc<sup>9+</sup>**, or **dataSrc<sup>10+</sup>** property and the **loop**
   *     property are reset, and other properties are retained.
   * @unionmember { 'initialized' } The AVPlayer enters this state after **url<sup>9+</sup>** or **fdSrc<sup>9+</sup>**
   *     property is set in the idle state. In this case, you can configure static properties such as the window and
   *     audio.
   * @unionmember { 'prepared' } The AVPlayer enters this state when
   *     [prepare()]{@link @ohos.multimedia.media:media.AVPlayer.prepare(callback: AsyncCallback<void>) } The AVPlayer
   *     enters this state when
   *     [prepare()]{@link @ohos.multimedia.media:media.AVPlayer.prepare(callback: AsyncCallback<void>)} is called in
   *     the initialized state. In this case, the playback engine has prepared the resources.
   * @unionmember { 'playing' } The AVPlayer enters this state when
   *     [play()]{@link @ohos.multimedia.media:media.AVPlayer.play(callback: AsyncCallback<void>) } The AVPlayer enters
   *     this state when [play()]{@link @ohos.multimedia.media:media.AVPlayer.play(callback: AsyncCallback<void>)} is
   *     called in the prepared, paused, or completed state.
   * @unionmember { 'paused' } The AVPlayer enters this state when **pause()** is called in the playing state.
   * @unionmember { 'completed' } The AVPlayer enters this state when a media asset finishes playing and loop playback
   *     is not set (no **loop = true**). In this case, if
   *     [play()]{@link @ohos.multimedia.media:media.AVPlayer.play(callback: AsyncCallback<void>)} is called, the
   *     AVPlayer enters the playing state and replays the media asset; if
   *     [stop()]{@link @ohos.multimedia.media:media.AVPlayer.stop(callback: AsyncCallback<void>) } The AVPlayer enters
   *     this state when a media asset finishes playing and loop playback is not set (no **loop = true**). In this case,
   *     if [play()]{@link @ohos.multimedia.media:media.AVPlayer.play(callback: AsyncCallback<void>)} is called, the
   *     AVPlayer enters the playing state and replays the media asset; if
   *     [stop()]{@link @ohos.multimedia.media:media.AVPlayer.stop(callback: AsyncCallback<void>)} is called, the
   *     AVPlayer enters the stopped state.
   * @unionmember { 'stopped' } The AVPlayer enters this state when
   *     [stop()]{@link @ohos.multimedia.media:media.AVPlayer.stop(callback: AsyncCallback<void>)} is called in the
   *     prepared, playing, paused, or completed state. In this case, the playback engine retains the properties but
   *     releases the memory resources. You can call
   *     [prepare()]{@link @ohos.multimedia.media:media.AVPlayer.prepare(callback: AsyncCallback<void>)} to prepare the
   *     resources again, call
   *     [reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)} to reset the
   *     properties, or call
   *     [release()]{@link @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>) } The AVPlayer
   *     enters this state when
   *     [stop()]{@link @ohos.multimedia.media:media.AVPlayer.stop(callback: AsyncCallback<void>)} is called in the
   *     prepared, playing, paused, or completed state. In this case, the playback engine retains the properties but
   *     releases the memory resources. You can call
   *     [prepare()]{@link @ohos.multimedia.media:media.AVPlayer.prepare(callback: AsyncCallback<void>)} to prepare the
   *     resources again, call
   *     [reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)} to reset the
   *     properties, or call
   *     [release()]{@link @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>)} to destroy the
   *     playback engine.
   * @unionmember { 'released' } The AVPlayer enters this state when
   *     [release()]{@link @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>) } The AVPlayer
   *     enters this state when
   *     [release()]{@link @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>)} is called. The
   *     playback engine associated with the AVPlayer instance is destroyed, and the playback process ends. This is the
   *     final state.
   * @unionmember { 'error' } The AVPlayer enters this state when an irreversible error occurs in the playback engine.
   *     You can call [reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)} to
   *     reset the properties or call
   *     [release()]{@link @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>)} to destroy the
   *     playback engine. For details about the error codes, see
   *     [Media Error Codes](docroot://reference/apis-media-kit/errorcode-media.md).
   *     <br>**NOTE**
   *     <br>Distinguishing the error state from the
   *     [on('error')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'error', callback: ErrorCallback)} state:
   *     <br>1. When the AVPlayer enters the error state, the **on('error')** event is triggered. You can obtain the detailed
   *     error information through this event.
   *     <br>2. When the AVPlayer enters the error state, the playback service stops. This requires the client to design a
   *     fault tolerance mechanism to call
   *     [reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)} or
   *     [release()]{@link @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>) } The AVPlayer
   *     enters this state when an irreversible error occurs in the playback engine. You can call
   *     [reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)} to reset the
   *     properties or call
   *     [release()]{@link @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>)} to destroy the
   *     playback engine. For details about the error codes, see
   *     [Media Error Codes](docroot://reference/apis-media-kit/errorcode-media.md).
   *     <br>**NOTE**
   *     <br>Distinguishing the error state from the
   *     [on('error')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'error', callback: ErrorCallback)} state:
   *     <br>1. When the AVPlayer enters the error state, the **on('error')** event is triggered. You can obtain the detailed
   *     error information through this event.
   *     <br>2. When the AVPlayer enters the error state, the playback service stops. This requires the client to design a
   *     fault tolerance mechanism to call
   *     [reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)} or
   *     [release()]{@link @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>)}.
   *     <br>3. The client receives **on('error')** event but the AVPlayer does not enter the error state. This situation
   *     occurs due to either of the following reasons:
   *     <br>Cause 1: The client calls an API in an incorrect state or passes in an incorrect parameter, and the AVPlayer
   *     intercepts the call. If this is the case, the client must correct its code logic.
   *     <br>Cause 2: A stream error is detected during playback. As a result, the container and decoding are abnormal for a
   *     short period of time, but continuous playback and playback control operations are not affected. If this is the
   *     case, the client does not need to design a fault tolerance mechanism.
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  type AVPlayerState = 'idle' | 'initialized' | 'prepared' | 'playing' | 'paused' | 'completed' | 'stopped' | 'released' | 'error';

  /**
   * Describes the callback invoked for the track change event.
   *
   * @param { int } index - Index of the track that has changed.
   * @param { boolean } isSelected - Whether the track at the current index is selected. **true** if selected, **false**
   *     otherwise.
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type OnTrackChangeHandler = (index: int, isSelected: boolean) => void;

  /**
   * Describes the callback invoked for the AVPlayer state change event.
   *
   * @param { AVPlayerState } state - State of the AVPlayer.
   * @param { StateChangeReason } reason - Reason for the state change.
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type OnAVPlayerStateChangeHandle = (state: AVPlayerState, reason: StateChangeReason) => void;

  /**
   * Describes the callback invoked for the buffering update event.
   *
   * @param { BufferingInfoType } infoType - Buffering information type.
   * @param { int } value - Value of the buffering information type.
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type OnBufferingUpdateHandler = (infoType: BufferingInfoType, value: int) => void;

  /**
   * Describes the callback invoked for the video size change event.
   *
   * @param { int } width - Video width, in px.
   * @param { int } height - Video height, in px.
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type OnVideoSizeChangeHandler = (width: int, height: int) => void;

  /**
   * Describes the callback used to listen for video super resolution status changes. If super resolution is enabled by 
   * using [PlaybackStrategy]{@link @ohos.multimedia.media:media.PlaybackStrategy}, this callback is invoked to report 
   * the super resolution status changes. It is also invoked to report the initial status when the video starts. However,
   * this callback is not invoked when super resolution is not enabled.
   * 
   * Super resolution is automatically disabled in either of the following cases:
   * 
   * * The current super resolution algorithm only works with videos that have a frame rate of 30 fps or lower. If the 
   * video frame rate exceeds 30 fps, or if the input frame rate exceeds the processing capability of the super 
   * resolution algorithm in scenarios such as fast playback, super resolution is automatically disabled.
   * * The current super resolution algorithm supports input resolutions from 320 × 320 to 1920 × 1080, in px. If the 
   * input video resolution exceeds the range during playback, super resolution is automatically disabled.
   *
   * @param { boolean } enabled - Whether super resolution is enabled. **true** if enabled, **false** otherwise.
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  type OnSuperResolutionChanged = (enabled: boolean) => void;

  /**
   * Describes the information of an SEI message.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface SeiMessage {
    /**
     * Payload type of SEI message.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    payloadType: int;

    /**
     * Payload data of SEI message.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    payload: ArrayBuffer;
  }

  /**
   * Describes the handle used to obtain SEI messages. This is used when in subscriptions to SEI message events, and the
   * callback returns detailed SEI information.
   *
   * @param { Array<SeiMessage> } messages - Array of SEI messages.
   * @param { int } [playbackPosition] - Current playback position, in milliseconds.
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  type OnSeiMessageHandle = (messages: Array<SeiMessage>, playbackPosition?: int) => void;

  /**
   * Describes the callback invoked for the event indicating that the playback rate setting is complete.
   *
   * @param { double } rate - Playback rate.
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  type OnPlaybackRateDone = (rate: double) => void;

  /**
   * Enumerates the metric events supported by the media service.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @since 23 dynamic&static
   */
  enum AVMetricsEventType {
    /**
     * Metric event indicating playback stalling.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 23 dynamic&static
     */
    AV_METRICS_EVENT_STALLING = 1,
  }

  /**
   * Describes the information of an Metrics Event.
   *
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @since 23 dynamic&static
   */
  interface AVMetricsEvent {
    /**
     * Type of the metrics event.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    event: AVMetricsEventType;
	
    /**
     * Absolute timestamp when the event occurred.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    timeStamp: long;

    /**
     * The playback progress position when the event occurs.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    playbackPosition: int;
	
    /**
     * The detailed information of the event.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    details: Record<string, Object>;
  }

  /**
   * AVPlayer is a playback management class. It provides APIs to manage and play media assets. Before calling any API 
   * in AVPlayer, you must use 
   * [createAVPlayer()]{@link @ohos.multimedia.media:media.createAVPlayer(callback: AsyncCallback<AVPlayer>)} to create 
   * an AVPlayer instance.
   * 
   * When using the AVPlayer instance, you are advised to register the following callbacks to proactively obtain status 
   * changes: [on('stateChange')]{@link media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)}: 
   * listens for AVPlayer state changes. [on('error')]{@link media.AVPlayer.on(type: 'error', callback: ErrorCallback)}:
   * listens for error events.
   * 
   * Applications must properly manage AVPlayer instances according to their specific needs, creating and freeing them 
   * when necessary. Holding too many AVPlayer instances can lead to high memory usage, and in some cases, the system 
   * might terminate applications to free up resources.
   * 
   * For details about the audio and video playback demo, see 
   * [Audio Playback](docroot://media/media/using-avplayer-for-playback.md) and 
   * [Video Playback](docroot://media/media/video-playback.md).
   *
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AVPlayer {  
    /**
     * Prepares for audio and video playback. This API can be called only when the AVPlayer is in the initialized state.
     * The state changes can be detected by subscribing to the 
     * [stateChange]{@link media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)} event. This 
     * API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @throws { BusinessError } 5400106 - Unsupported format. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    prepare(callback: AsyncCallback<void>): void;

    /**
     * Prepares for audio and video playback. This API can be called only when the AVPlayer is in the initialized state.
     * The state changes can be detected by subscribing to the 
     * [stateChange]{@link media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)} event. This 
     * API uses a promise to return the result.
     * 
     * If your application frequently switches between short videos, you can create multiple AVPlayer objects to prepare
     * the next video in advance, thereby improving the switching performance. For details, see 
     * [Smooth Switchover Between Online Short Videos](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-smooth-switching).
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400106 - Unsupported format. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    prepare(): Promise<void>;

    /**
     * Starts to play an audio and video asset. This API can be called only when the AVPlayer is in the prepared, paused,
     * or completed state. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    play(callback: AsyncCallback<void>): void;

    /**
     * Starts to play an audio and video asset. This API can be called only when the AVPlayer is in the prepared, paused,
     * or completed state. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    play(): Promise<void>;

    /**
     * Pauses audio and video playback. This API can be called only when the AVPlayer is in the playing state. This API 
     * uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    pause(callback: AsyncCallback<void>): void;

    /**
     * Pauses audio and video playback. This API can be called only when the AVPlayer is in the playing state. This API 
     * uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    pause(): Promise<void>;

    /**
     * Stops audio and video playback. This API can be called only when the AVPlayer is in the prepared, playing, paused,
     * or completed state. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * Stops audio and video playback. This API can be called only when the AVPlayer is in the prepared, playing, paused,
     * or completed state. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * Resets audio and video playback. This API can be called only when the AVPlayer is in the initialized, prepared, 
     * playing, paused, completed, stopped, or error state. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    reset(callback: AsyncCallback<void>): void;

    /**
     * Resets audio and video playback. This API can be called only when the AVPlayer is in the initialized, prepared, 
     * playing, paused, completed, stopped, or error state. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    reset(): Promise<void>;

    /**
     * Releases the playback resources. This API can be called when the AVPlayer is in any state except released. This 
     * API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases the playback resources. This API can be called when the AVPlayer is in any state except released. This 
     * API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * Seeks to the specified playback position. This API can be called only when the AVPlayer is in the prepared, 
     * playing, paused, or completed state. You can check whether the seek operation takes effect by subscribing to the 
     * [on('seekDone')]{@link media.AVPlayer.on(type: 'seekDone', callback: Callback<int>)} event.
     * 
     * > **NOTE**
     * >
     * > Since API version 24, **seek** is supported in live streaming scenarios.
     *
     * @param { int } timeMs - Position to seek to, in ms. The value range is
     *     [0, [duration](docroot://reference/apis-media-kit/arkts-apis-media-AVPlayer.md#properties)].<br>When the seek
     *     mode is [SEEK_CONTINUOUS]{@link @ohos.multimedia.media:media.SeekMode}, you can set this parameter to **-1**
     *     to end the **SEEK_CONTINUOUS** mode.
     * @param { SeekMode } mode - Seek mode based on the video I frame. The default value is **SEEK_PREV_SYNC**.
     *     **Set this parameter only for video playback.**
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    seek(timeMs: int, mode?: SeekMode): void;

    /**
     * Sets the playback volume. This API can be called only when the AVPlayer is in the prepared, playing, paused, or 
     * completed state. You can check whether the volume setting takes effect by subscribing to the 
     * [on('volumeChange')]{@link media.AVPlayer.on(type: 'volumeChange', callback: Callback<double>)} event.
     *
     * @param { double } volume - Relative volume. The value ranges from 0.00 to 1.00. The value **1.00** indicates the
     *     maximum volume (100%).
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setVolume(volume: double): void;

    /**
     * Obtains the audio and video track information. This API can be called only when the AVPlayer is in the prepared, 
     * playing, or paused state. To obtain information about all audio and video tracks, this API must be called after 
     * the data loading callback is triggered. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<MediaDescription>> } callback - Callback used to return the result. If the operation
     *     is successful, **err** is **undefined** and **data** is the MediaDescription array obtained; otherwise,
     *     **err** is an error object.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void;

    /**
     * Obtains the audio and video track information. This API can be called only when the AVPlayer is in the prepared, 
     * playing, or paused state. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<MediaDescription>> } Promise used to return the MediaDescription array that holds the
     *     audio and video track information.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getTrackDescription(): Promise<Array<MediaDescription>>;

    /**
     * Obtains the indexes of the selected audio or video tracks. This API can be called only when the AVPlayer is in 
     * the prepared, playing, or paused state. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<int>> } Promise used to return the index array.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getSelectedTracks(): Promise<Array<int>>;

    /**
     * Selects a track when the AVPlayer plays multimedia resources with multiple audio or video tracks. This API uses a
     * promise to return the result.
     *
     * @param { int } index - Index of the track. You can call
     *     [getTrackDescription]{@link media.AVPlayer.getTrackDescription()} to obtain all track information
     *     [MediaDescription]{@link @ohos.multimedia.media:media.MediaDescription} of the current resource.
     * @param { SwitchMode } mode - Video track mode. The default mode is **SMOOTH**. This parameter takes effect only
     *     for DASH/HLS network stream video track switching.<br>HLS network stream video is supported since API version
     *     24. [since 12 - 24]
     * @param { SwitchMode } [mode] - Video track mode. The default mode is **SMOOTH**. This parameter takes effect only
     *     for DASH/HLS network stream video track switching.<br>HLS network stream video is supported since API version
     *     24. [since 26.0.0]
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - The parameter check failed. Return by promise.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    selectTrack(index: int, mode?: SwitchMode): Promise<void>;

    /**
     * Deselects the specified track when the AVPlayer plays multimedia resources with multiple audio or video tracks. 
     * This API uses a promise to return the result.
     *
     * @param { int } index - Track index, which is obtained from
     *     [MediaDescription]{@link @ohos.multimedia.media:media.MediaDescription} by calling
     *     [getTrackDescription]{@link media.AVPlayer.getTrackDescription()}.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - The parameter check failed. Return by promise.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    deselectTrack(index: int): Promise<void>;

    /**
     * Obtains the selected track by the specified media type. This API can be called only when the AVPlayer
     * is in the prepared, playing, or paused state. This API uses a promise to return the result.
     *
     * @param { MediaType } trackType - specified media Type, see [MediaType]{@link #MediaType}.
     * @returns { Promise<int> } A Promise instance used to return selected track index.
     * @throws { BusinessError } 202 - Called from Non-System applications. Return by promise.
     * @throws { BusinessError } 5400101 - No memory. Return by promise.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - I/O error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getCurrentTrack(trackType: MediaType): Promise<int>;

    /**
     * Sets a source of streaming media that can be pre-downloaded, downloads the media data, and temporarily stores the
     * data in the memory. This API uses a promise to return the result.
     *
     * @param { MediaSource } src - Source of the streaming media to pre-download.
     * @param { PlaybackStrategy } strategy - strategy for playing the pre-downloaded streaming media.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setMediaSource(src: MediaSource, strategy?: PlaybackStrategy): Promise<void>;

    /**
     * Obtains the track selection filter configured for the player. This API uses a promise to return the result.
     *
     * @returns { Promise<TrackSelectionFilter> } Promise used to return the track selection filter configured for the
     *     player.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getTrackSelectionFilter(): Promise<TrackSelectionFilter>;
	
    /**
     * Sets a track selection filter for the player. The player will use this filter to select available tracks for 
     * playback. This API uses a promise to return the result.
     *
     * @param { TrackSelectionFilter } filter - Track selection filter.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setTrackSelectionFilter(filter : TrackSelectionFilter): Promise<void>;

    /**
     * Adds an external subtitle to a video based on the FD. Currently, the external subtitle must be set after 
     * **fdSrc** of the video resource is set in an AVPlayer instance. This API uses a promise to return the result.
     *
     * @param { int } fd - Resource handle, which is obtained by calling
     *     [resourceManager.getRawFd]{@link @ohos.resourceManager:resourceManager.ResourceManager.getRawFd(path: string, callback: _AsyncCallback<RawFileDescriptor>)}.
     * @param { long } offset - Resource offset, which needs to be entered based on the preset asset information. An
     *     invalid value causes a failure to parse subtitle assets. The default value is **0**.unit:Byte.
     * @param { long } length - Resource length, which needs to be entered based on the preset asset information. The
     *     default value is the remaining bytes from the offset in the file. An invalid value causes a failure to parse
     *     subtitle assets. The default value is **0**.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - The parameter check failed. Return by promise.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    addSubtitleFromFd(fd: int, offset?: long, length?: long): Promise<void>;

    /**
     * Adds an external subtitle to a video based on the URL. Currently, the external subtitle must be set after 
     * **fdSrc** of the video resource is set in an AVPlayer instance. This API uses a promise to return the result.
     *
     * @param { string } url - Address of the external subtitle file.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - The parameter check failed. Return by promise.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    addSubtitleFromUrl(url: string): Promise<void>;

    /**
     * Obtains the playback information. This API can be called only when the AVPlayer is in the prepared, playing, or 
     * paused state. This API uses a promise to return the result.
     *
     * @returns { Promise<PlaybackInfo> } Promise used to return **PlaybackInfo**.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 12 dynamic
     * @since 23 static
     */
    getPlaybackInfo(): Promise<PlaybackInfo>;

    /**
     * Obtains the playback speed of an AVPlayer. This API uses a promise to return the result.
     *
     * @returns { Promise<double> } Promise object, which returns the playback speed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    getPlaybackRate(): Promise<double>;

    /**
     * Obtains the list of loaded time ranges. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > - For local media resources, the time range is from 0 to the entire media duration.
     * >
     * > - For network media resources, the list of locally loaded time ranges is returned.
     *
     * @returns { Promise<Array<Range>> } Promise used to return the list of loaded time ranges on the player.
     *     <br>The time range is represented by the **[start, end]** position on the playback timeline, in milliseconds.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getLoadedTimeRanges(): Promise<Array<Range>>;

    /**
     * Obtains the list of seekable time ranges. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > - For local media resources and media resources that support segment-based requests, the time range is from 0 
     * > to the entire media duration.
     * >
     * > - For media resources that support only chunk-based transmission, there is no seekable time range.
     *
     * @returns { Promise<Array<Range>> } Promise used to return the list of seekable time ranges on the player.
     *     <br>The time range is represented by the **[start, end]** position on the playback timeline, in milliseconds.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getSeekableTimeRanges(): Promise<Array<Range>>;

    /**
     * Seeks to the default access point of the playback source. For live streams, the latest recommended access point 
     * is used. For on-demand videos, the start position of the video is used (equivalent to **seek(0)**).
     *
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    seekToDefaultPosition(): void;

    /**
     * Obtains the statistic metrics of the current player. This API can be called when the AVPlayer is in the prepared,
     * playing, paused, completed, or stopped state. This API uses a promise to return the result.
     *
     * @returns { Promise<PlaybackMetrics> } Promise used to return the playback metrics of the current AVPlayer.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    getPlaybackStatisticMetrics(): Promise<PlaybackMetrics>;

    /**
     * Sets a playback strategy. This API can be called only when the AVPlayer is in the initialized state. This API 
     * uses a promise to return the result.
     *
     * @param { PlaybackStrategy } strategy - Playback strategy.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter
     *     verification failed.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setPlaybackStrategy(strategy: PlaybackStrategy): Promise<void>;

    /**
     * Mutes or unmutes the audio. Since API version 20, this API also supports whether to display the video image. This
     * API uses a promise to return the result.
     * 
     * This API can be called only when the AVPlayer is in the prepared, playing, paused, or completed state.
     *
     * @param { MediaType } mediaType - Media type.<br>For API version 12 to 19, only **MEDIA_TYPE_AUD** is supported.<
     *     br>Since API version 20, **MEDIA_TYPE_VID** is supported.
     * @param { boolean } muted - For API version 12 to 19, only audio playback strategies are supported. This parameter
     *     specifies whether to mute or unmute the audio. **true** to mute, **false** otherwise.<br>Since API version 20
     *     , video playback strategies are also supported. This parameter specifies whether to disable or enable the
     *     video image. **true** to disable, false otherwise.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - The parameter check failed. Return by promise.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setMediaMuted(mediaType: MediaType, muted: boolean): Promise<void>;

    /**
     * Specifies whether to forcibly load the video. This API can be called only when the AVPlayer
     * is in the prepared, playing, or paused state. This API uses a promise to return the result.
     *
     * @param { boolean } force - specified whether to forcibly load the video.
     * @returns { Promise<void> } A Promise instance used to return when forceLoadVideo completed.
     * @throws { BusinessError } 202 - Called from Non-System applications. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    forceLoadVideo(force: boolean): Promise<void>;

    /**
     * Sets the playback range and seeks to the start position of the range based on the specified 
     * [SeekMode]{@link @ohos.multimedia.media:media.SeekMode}. After the setting, only the content in the specified 
     * range of the audio or video file is played. This API uses a promise to return the result. It can be used in the 
     * initialized, prepared, paused, stopped, or completed state.
     *
     * @param { int } startTimeMs - Start position of the range, in ms. The value range is
     *     [0, duration). If **-1** is passed in, the system starts playing from position 0.
     * @param { int } endTimeMs - End position of the range, in ms. The value range is (startTimeMs, duration]. If
     *     **-1** is passed in, the system plays the content until it reaches the final part of the asset.
     * @param { SeekMode } [mode] - Seek mode, which can be **SeekMode.SEEK_PREV_SYNC** or **SeekMode.SEEK_CLOSEST**.<br
     *     >The default value is **SeekMode.SEEK_PREV_SYNC**.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - The parameter check failed. Return by promise.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    setPlaybackRange(startTimeMs: int, endTimeMs: int, mode?: SeekMode) : Promise<void>;

    /**
     * Checks whether the media source supports [seek]{@link media.AVPlayer.seek} in SEEK_CONTINUOUS mode (specified by 
     * [SeekMode]{@link @ohos.multimedia.media:media.SeekMode}). The actual value is returned when this API is called in
     * the prepared, playing, paused, or completed state. The value **false** is returned if it is called in other 
     * states. For devices that do not support the seek operation in SEEK_CONTINUOUS mode, **false** is returned.
     *
     * @returns { boolean } Check result for the support of the seek operation in **SEEK_CONTINUOUS** mode. **true** to
     *     support, **false** otherwise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    isSeekContinuousSupported() : boolean;

    /**
     * Obtains the current playback position. This API can be called only when the AVPlayer is in the prepared, playing,
     * paused, or completed state.
     *
     * @returns { int } Current playback time, in milliseconds.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    getPlaybackPosition() : int;

    /**
     * Obtains the current playback time. This API can be called only when the AVPlayer is in the **playing**, 
     * **paused**, or **completed** state.
     *
     * @returns { long } Current playback time, in microseconds.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    getCurrentPresentationTimestamp() : long;

    /**
     * Enables or disables super resolution. This API can be called when the AVPlayer is in the initialized, prepared, 
     * playing, paused, completed, or stopped state. This API uses a promise to return the result.
     * 
     * Before calling [prepare()]{@link media.AVPlayer.prepare(callback: AsyncCallback<void>)}, enable super resolution 
     * by using [PlaybackStrategy]{@link @ohos.multimedia.media:media.PlaybackStrategy}.
     *
     * @param { boolean } enabled - Whether to enable or disable super resolution. **true** to enable, **false**
     *     otherwise.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5410003 - Super-resolution not supported. Return by promise.
     * @throws { BusinessError } 5410004 - Missing enable super-resolution feature in {@link PlaybackStrategy}.
     *     Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    setSuperResolution(enabled: boolean) : Promise<void>;

    /**
     * Sets the resolution of the output video after super resolution. This API can be called when the AVPlayer is in 
     * the initialized, prepared, playing, paused, completed, or stopped state. This API uses a promise to return the 
     * result.
     * 
     * The input parameter values must be in the range of 320 × 320 to 1920 × 1080 (in px).
     * 
     * Before calling [prepare()]{@link media.AVPlayer.prepare(callback: AsyncCallback<void>)}, enable super resolution 
     * by using [PlaybackStrategy]{@link @ohos.multimedia.media:media.PlaybackStrategy}.
     *
     * @param { int } width - Target width of the output video after super resolution. The value range is [320-1920], in
     *     px.
     * @param { int } height - Target height of the output video after super resolution. The value range is [320-1080],
     *     in px.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Return by promise.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5410003 - Super-resolution not supported. Return by promise.
     * @throws { BusinessError } 5410004 - Missing enable super-resolution feature in {@link PlaybackStrategy}.
     *     Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    setVideoWindowSize(width: int, height: int) : Promise<void>;

    /**
     * Ends playback of the current mediasource and starts playback of the next mediasource in the mediasource list.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 5400102 - Operation not allowed . Return by promise.
     * @throws { BusinessError } 5400108 - The previous mediasource does not exist in the playlist. Returned via
     *     promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    advanceToNextMediaSource() : Promise<void>;

    /**
     * Ends playback of the current mediasource and starts playback of the previous mediasource in the mediasource list.
     *
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400108 - The next mediasource does not exist in the playlist. Returned via promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    advanceToPrevMediaSource(): Promise<void>;

    /**
     * Return the current mediasource.
     *
     * @returns { MediaSource | undefined } current mediasource if the operation is successful; returns undefined otherwise.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getCurrentMediaSource(): MediaSource | undefined;

    /**
     * Add a new playback source to the player's playlist.
     *
     * @param { MediaSource } src - Playback source to be added to the playlist.
     * @param { string } [id] - Indicates the ID of a media source in the playlist.
     *     The newly added media source is inserted before the specified media source.
     *     <br>Default value:if empty, it means adding to the end of the list
     * @returns { Promise<string> } Promise used to return the result,
     *     if success, a unique ID corresponding to the media resource will be returned.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400108 - The media source ID does not exist in the playlist. Returned by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    addPlaybackMediaSource(src: MediaSource, id?: string): Promise<string>;

    /**
     * Removes the specified playback media source from the player's playlist.
     * If the id does not exist in the current playlist, the method returns immediately.
     *
     * @param { string } id - ID returned after a media source is added to the playlist.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400108 - The media source ID does not exist in the playlist. Returned via promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    removePlaybackMediaSource(id: string): Promise<void>;

    /**
     * Clears all the items in the player's playlist. Currently playing media will be terminated immediately.
     *
     * @returns { Promise<void> } Promise is used to return the result.
     * @throws { BusinessError } 5400102 - operation not allowed . Returned via promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    clearPlaybackList(): Promise<void>;

    /**
     * Ends playback of the current mediasource and starts playback of the specified mediasource in the mediasource
     * list.
     *
     * @param { string } id - Indicates the ID of the media source to play.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400108 - The mediasource does not exist in the playlist. Returned via promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    advanceToMediaSource(id: string): Promise<void>;

    /**
     * Return the array of mediasources in the playlist.
     *
     * @returns { Array<MediaSource | undefined> } array of mediasources in the playlist.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getMediaSources(): Array<MediaSource | undefined>;

    /**
     * URL of the media asset. It can be set only when the AVPlayer is in the idle state. 
     * 
     * Supported video formats: MP4, MPEG-TS, and MKV.
     * 
     * Supported audio formats: M4A, AAC, MP3, OGG, WAV, FLAC, AMR, and APE.
     * 
     * **Example of supported URLs**:
     * 
     * 1. FD: fd://xx
     * 
     * ![](docroot://reference/apis-media-kit/figures/en-us_image_url.png)
     * 
     * 2. HTTP: http://xx
     * 3. HTTPS: https://xx
     * 4. HLS: http://xx or https://xx
     * 
     * **NOTE**
     * 
     * - To set the playback URL, you need to declare the 
     * [ohos.permission.INTERNET](docroot://security/AccessToken/permissions-for-all.md#ohospermissioninternet) 
     * permission. The related error code is 
     * [201 Permission Denied](docroot://reference/errorcode-universal.md#201-permission-denied).
     * - WebM is no longer supported since API version 11.
     * - After the resource handle (FD) is transferred to an AVPlayer instance, do not use the resource handle to 
     * perform other read and write operations, including but not limited to transferring this handle to other AVPlayer,
     * AVMetadataExtractor, AVImageGenerator, or AVTranscoder instance. Competition occurs when multiple AVPlayers use 
     * the same resource handle to read and write files at the same time, resulting in errors in obtaining data.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    url?: string;

    /**
     * FD of the media asset. It can be set only when the AVPlayer is in the idle state.
     * 
     * **Use scenario**: This property is required when media assets of an application are continuously stored in a 
     * file.
     * 
     * The video formats MP4, MPEG-TS, and MKV are supported.
     * 
     * The audio formats M4A, AAC, MP3, OGG, WAV, FLAC, AMR, and APE are supported.
     * 
     * Assume that a media file that stores continuous assets consists of the following:
     * 
     * Video 1 (address offset: 0, byte length: 100)
     * 
     * Video 2 (address offset: 101; byte length: 50)
     * 
     * Video 3 (address offset: 151, byte length: 150)
     * 
     * 1. To play video 1: AVFileDescriptor { fd = resource handle; offset = 0; length = 100; }
     * 2. To play video 2: AVFileDescriptor { fd = resource handle; offset = 101; length = 50; }
     * 3. To play video 3: AVFileDescriptor { fd = resource handle; offset = 151; length = 150; }
     * 
     * To play an independent media file, use **src=fd://xx**.
     * 
     * **NOTE**
     * 
     * WebM is no longer supported since API version 11.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    fdSrc?: AVFileDescriptor;

    /**
     * Descriptor of a streaming media asset. It can be set only when the AVPlayer is in the idle state.
     * 
     * **Use scenario**: An application plays a file that has been downloaded from a remote source and saved locally. 
     * When the application has not yet downloaded the complete audio or video resources, it can start playing the data 
     * that has already been retrieved. By writing the retrieved data to a local file and simultaneously reading from 
     * that file, the application can achieve the capability of playing while caching.
     * 
     * The video formats MP4, MPEG-TS, and MKV are supported.
     * 
     * The audio formats M4A, AAC, MP3, OGG, WAV, FLAC, AMR, and APE are supported.
     * 
     * A user is obtaining an audio and video file from a remote server and wants to play the downloaded file content. 
     * To implement this scenario, do as follows:
     * 
     * 1. Obtain the total file size, in bytes. If the total size cannot be obtained, set **fileSize** to **-1**.
     * 2. Implement the **func** callback to fill in data. If **fileSize** is **-1**, the format of **func** is **func(buffer: ArrayBuffer, length: number)**, and the AVPlayer obtains data in sequence; otherwise, the format is **func(buffer: ArrayBuffer, length: number, pos: number)**, and the AVPlayer seeks and obtains data in the required positions.
     * 3. Set **AVDataSrcDescriptor {fileSize = size, callback = func}**.
     * 
     * **Notes:**
     * 
     * If the media file to play is in MP4/M4A format, ensure that the **moov** field (specifying the media information)
     * is before the **mdat** field (specifying the media data) or the fields before the **moov** field is less than 10 
     * MB. Otherwise, the parsing fails and the media file cannot be played.
     * 
     * **NOTE**
     * 
     * WebM is no longer supported since API version 11.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    dataSrc?: AVDataSrcDescriptor;

    /**
     * Whether to loop playback. **true** to loop, **false** otherwise. The default value is **false**. It is a dynamic 
     * property
     * 
     * and can be set only when the AVPlayer is in the prepared, playing, paused, or completed state.
     * 
     * This setting is not supported in live mode.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    loop: boolean;

    /**
     * Set the loop mode when playing the media source playlist.
     * <br>Default value:PLAYLIST_LOOP_MODE_ALL, which means loops all items in the playlist.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    playlistLoopMode?: PlaylistLoopMode;

    /**
     * Audio interruption mode. The default value is **SHARE_MODE**. It is a dynamic property
     * 
     * and can be set only when the AVPlayer is in the prepared, playing, paused, or completed state.
     * 
     * To take effect, this property must be set before 
     * [play()]{@link media.AVPlayer.play(callback: AsyncCallback<void>)} is called for the first time.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    audioInterruptMode?: audio.InterruptMode;

    /**
     * Audio renderer information. If the media source contains videos, the default value of **usage** is 
     * **STREAM_USAGE_MOVIE**. Otherwise, the default value of **usage** is **STREAM_USAGE_MUSIC**. The default value of
     * **rendererFlags** is 0. If the default value of **usage** does not meet the requirements, configure 
     * [audio.AudioRendererInfo]{@link @ohos.multimedia.audio:audio.AudioRendererInfo}.
     * 
     * This parameter can be set only when the AVPlayer is in the initialized state.
     * 
     * To take effect, this property must be set before 
     * [prepare()]{@link media.AVPlayer.prepare(callback: AsyncCallback<void>)} is called for the first time.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    audioRendererInfo?: audio.AudioRendererInfo;

    /**
     * Audio effect mode. The audio effect mode is a dynamic property and is restored to the default value 
     * **EFFECT_DEFAULT** when **usage** of **audioRendererInfo** is changed. It can be set only when the AVPlayer is in
     * the prepared, playing, paused, or completed state.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    audioEffectMode ?: audio.AudioEffectMode;

    /**
     * Current video playback position, in ms. It can be used as a query parameter when the AVPlayer is in the prepared,
     * playing, paused, or completed state.
     * 
     * The value **-1** indicates an invalid value.
     * 
     * In live mode, **-1** is returned by default.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly currentTime: int;

    /**
     * Video duration, in ms. It can be used as a query parameter when the AVPlayer is in the prepared, playing, paused,
     * or completed state.
     * 
     * The value **-1** indicates an invalid value.
     * 
     * In live mode, **-1** is returned by default.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly duration: int;

    /**
     * AVPlayer state. It can be used as a query parameter when the AVPlayer is in any state.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly state: AVPlayerState;

    /**
     * Video window ID. By default, there is no video window.
     * 
     * This property can be set for the first time only when the AVPlayer is in the initialized state.
     * 
     * It can be updated when the AVPlayer is in the prepared, playing, paused, completed, or stopped state. After the 
     * reset, the video is played in the new window.
     * 
     * **Use scenario**: It is used to render the window for video playback (not involved in audio-only playback 
     * scenarios).
     * 
     * [Create a surface ID through XComponent]{@link ./@internal/component/ets/xcomponent:XComponentController.getXComponentSurfaceId}.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    surfaceId?: string;

    /**
     * Video width, in px. It can be used as a query parameter when the AVPlayer is in the prepared, playing, paused, or
     * completed state.
     * 
     * The value **0** indicates an invalid value.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly width: int;

    /**
     * Video height, in px. It can be used as a query parameter when the AVPlayer is in the prepared, playing, paused, 
     * or completed state.
     * 
     * The value **0** indicates an invalid value.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly height: int;

    /**
     * Video scale type. The default value is **VIDEO_SCALE_TYPE_FIT**. It is a dynamic property
     * 
     * and can be set only when the AVPlayer is in the prepared, playing, paused, or completed state.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
	 
    videoScaleType?: VideoScaleType;
    /**
     * Audio privacy configuration. For more information, see {@link #audio.AudioPrivacyType}.
     * Default value: PRIVACY_TYPE_PUBLIC.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamic&static
     */
    privacyType?: audio.AudioPrivacyType;

    /**
     * Whether a slower synchronization policy is used at the start of playback to reduce subjective image jitter caused
     * by insufficient frame rate. Default value: false, means that the slower synchronization policy will not be used.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamic&static
     */
    enableStartFrameRateOpt?: boolean;
    /**
     * Sets the playback speed. This API can be called only when the AVPlayer is in the prepared, playing, paused, or 
     * completed state. You can check whether the speed setting takes effect by subscribing to the 
     * [on('speedDone')]{@link media.AVPlayer.on(type: 'speedDone', callback: Callback<int>)} event.
     * 
     * > **NOTE**
     * >
     * > This method is not supported in live streaming scenarios.
     *
     * @param { PlaybackSpeed } speed - Playback speed to set.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setSpeed(speed: PlaybackSpeed): void;

    /**
     * Sets the playback rate. This API can be called only when the AVPlayer is in the prepared, playing, paused, or 
     * completed state. The value range is [0.125, 4.0]. You can check whether the setting takes effect through the 
     * [playbackRateDone]{@link media.AVPlayer.on(type: 'playbackRateDone', callback: OnPlaybackRateDone)} event.
     * 
     * > **NOTE**
     * >
     * > This API is not supported in live mode.
     *
     * @param { double } rate - Playback rate, which is in the range [0.125, 4.0].
     * @throws { BusinessError } 5400108 - The parameter check failed, parameter value out of range.
     * @throws { BusinessError } 5400102 - Operation not allowed, if invalid state or live stream.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setPlaybackRate(rate: double): void;

    /**
     * Sets the bitrate for the streaming media. This API is valid only for HLS/DASH streams. By default, the AVPlayer 
     * selects a proper bitrate based on the network connection speed. This API can be called only when the AVPlayer is 
     * in the prepared, playing, paused, or completed state. You can check whether the setting takes effect by 
     * subscribing to the [bitrateDone]{@link media.AVPlayer.on(type: 'bitrateDone', callback: Callback<int>)} event.
     *
     * @param { int } bitrate - Bitrate to set. You can obtain the available bitrates of the current HLS/DASH stream by
     *     subscribing to the
     *     [availableBitrates]{@link media.AVPlayer.on(type: 'availableBitrates', callback: Callback<Array<int>>)}
     *     event. If the bitrate to set is not in the list of the available bitrates, the AVPlayer selects from the list
     *     the bitrate that is closed to the bitrate to set. If the length of the available bitrate list obtained
     *     through the event is 0, no bitrate can be set and the **bitrateDone** callback will not be triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setBitrate(bitrate: int): void;

	  /**
    * Sets the loudness gain of the AVPlayer. After this API is called, the loudness gain takes effect immediately. This
    * API uses a promise to return the result.
    * 
    * > **NOTE**
    * >
    * > - This API can be called when the AVPlayer is in the prepared, playing, paused, completed, or stopped state.
    * >
    * > - Before calling this API, ensure that the audio rendering information has been set in 
    * > **AVPlayer.audioRendererInfo** and the **usage** parameter in **audioRendererInfo** has been set to 
    * > [STREAM_USAGE_MUSIC]{@link @ohos.multimedia.audio:audio.StreamUsage}, 
    * > [STREAM_USAGE_MOVIE]{@link @ohos.multimedia.audio:audio.StreamUsage}, or 
    * > [STREAM_USAGE_AUDIOBOOK]{@link @ohos.multimedia.audio:audio.StreamUsage}.
    *
    * @param { double } loudnessGain - Loudness gain, in the range [-90.0, 24.0], in dB. The default value is 0.0 dB.
    * @returns { Promise<void> } Promise that returns no value.
    * @syscap SystemCapability.Multimedia.Media.AVPlayer
    * @since 21 dynamic
    * @since 23 static
    */
	  setLoudnessGain(loudnessGain: double): Promise<void>;

    /**
     * Sets the decryption configuration. When receiving an 
     * [on('mediaKeySystemInfoUpdate')]{@link media.AVPlayer.on(type: 'mediaKeySystemInfoUpdate', callback: Callback<Array<drm.MediaKeySystemInfo>>)}
     * event, create the related configuration and set the decryption configuration based on the information in the 
     * reported event. Otherwise, the playback fails.
     *
     * @param { drm.MediaKeySession } mediaKeySession - Decryption session.
     * @param { boolean } secureVideoPath - Secure video channel. **true** if a secure video channel is selected,
     *     **false** otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    setDecryptionConfig(mediaKeySession: drm.MediaKeySession, secureVideoPath: boolean): void;

    /**
     * Obtains the media key system information of the media asset that is being played. This API can be called only 
     * after the 
     * [on('mediaKeySystemInfoUpdate')]{@link media.AVPlayer.on(type: 'mediaKeySystemInfoUpdate', callback: Callback<Array<drm.MediaKeySystemInfo>>)}
     * event is successfully triggered.
     *
     * @returns { Array<drm.MediaKeySystemInfo> } Array of MediaKeySystemInfo objects, each of which contains the
     *     **uuid** and **pssh** properties. If the return value is undefined, the mediaKeySystemInfoUpdate event is not
     *     triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getMediaKeySystemInfos(): Array<drm.MediaKeySystemInfo>;

    /**
     * Subscribes to media key system information changes.
     *
     * @param { 'mediaKeySystemInfoUpdate' } type - Event type, which is **'mediaKeySystemInfoUpdate'** in this case.
     *     This event is triggered when the copyright protection information of the media asset being played changes.
     * @param { function } callback - Callback invoked when the event is triggered. It reports a **MediaKeySystemInfo**
     *     array. [since 11 - 11]
     * @param { Callback<Array<drm.MediaKeySystemInfo>> } callback - Callback invoked when the event is triggered. It
     *     reports a **MediaKeySystemInfo** array. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'mediaKeySystemInfoUpdate', callback: Callback<Array<drm.MediaKeySystemInfo>>): void;

    /**
     * Unsubscribes from media key system information changes.
     *
     * @param { 'mediaKeySystemInfoUpdate' } type - Event type, which is **'mediaKeySystemInfoUpdate'** in this case.
     * @param { function } callback - Callback invoked when the event is triggered. It reports a **MediaKeySystemInfo**
     *     array. If this parameter is specified, only the specified callback is unregistered. Otherwise, all callbacks
     *     associated with the **mediaKeySystemInfoUpdate** event will be unregistered. [since 11 - 11]
     * @param { Callback<Array<drm.MediaKeySystemInfo>> } callback - Callback invoked when the event is triggered. It
     *     reports a **MediaKeySystemInfo** array. If this parameter is specified, only the specified callback is
     *     unregistered. Otherwise, all callbacks associated with the **mediaKeySystemInfoUpdate** event will be
     *     unregistered. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'mediaKeySystemInfoUpdate', callback?: Callback<Array<drm.MediaKeySystemInfo>>): void;

    /**
     * Subscribes to AVPlayer state changes.
     *
     * @param { 'stateChange' } type - Event type, which is **'stateChange'** in this case. This event can be triggered
     *     by both user operations and the system.
     * @param { function } callback - Callback invoked when the event is triggered. [since 9 - 11]
     * @param { OnAVPlayerStateChangeHandle } callback - Callback invoked when the event is triggered. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle): void;
    /**
     * Unsubscribes from [AVPlayerState]{@link @ohos.multimedia.media:media.AVPlayerState} state changes.
     *
     * @param { 'stateChange' } type - Event type, which is **'stateChange'** in this case.
     * @param { OnAVPlayerStateChangeHandle } callback - Callback invoked when the event is triggered. If this parameter
     *     is specified, only the specified callback is unregistered. Otherwise, all callbacks associated with the
     *     **stateChange** event will be unregistered. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    off(type: 'stateChange', callback?: OnAVPlayerStateChangeHandle): void;
    /**
     * Subscribes to the event to check whether the volume is successfully set.
     *
     * @param { 'volumeChange' } type - Event type, which is **'volumeChange'** in this case. This event is triggered
     *     each time **setVolume()** is called.
     * @param { Callback<double> } callback - Callback invoked when the event is triggered. It reports the effective
     *     volume.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'volumeChange', callback: Callback<double>): void;
    /**
     * Unsubscribes from the event that checks whether the volume is successfully set.
     *
     * @param { 'volumeChange' } type - Event type, which is **'volumeChange'** in this case.
     * @param { Callback<double> } callback - Callback invoked when the event is triggered. It reports the effective
     *     volume. If this parameter is specified, only the specified callback is unregistered. Otherwise, all callbacks
     *     associated with the **volumeChange** event will be unregistered. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 19]
     * @since 9 dynamic
     */
    off(type: 'volumeChange', callback?: Callback<double>): void;
    /**
     * Subscribes to the event that indicates the end of the stream being played. If 
     * **[loop](docroot://reference/apis-media-kit/arkts-apis-media-AVPlayer.md#properties) = true** is set, the 
     * AVPlayer seeks to the beginning of the stream and plays the stream again. If **loop** is not set, the completed 
     * state is reported through the 
     * [stateChange]{@link media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)} event.
     *
     * @param { 'endOfStream' } type - Event type, which is **'endOfStream'** in this case. This event is triggered when
     *     the AVPlayer finishes playing the media asset.
     * @param { Callback<void> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'endOfStream', callback: Callback<void>): void;
    /**
     * Unsubscribes from the event that indicates the end of the stream being played.
     *
     * @param { 'endOfStream' } type - Event type, which is **'endOfStream'** in this case.
     * @param { Callback<void> } callback - Callback invoked when the event is triggered. If this parameter is specified
     *     , only the specified callback is unregistered. Otherwise, all callbacks associated with the **endOfStream**
     *     event will be unregistered. [since 12 - 18]
     * @param { Callback<void> } [callback] - Callback invoked when the event is triggered. If this parameter is
     *     specified, only the specified callback is unregistered. Otherwise, all callbacks associated with the
     *     **endOfStream** event will be unregistered. [since 19]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 19]
     * @since 9 dynamic
     */
    off(type: 'endOfStream', callback?: Callback<void>): void;
    /**
     * Subscribes to the event to check whether the seek operation takes effect.
     *
     * @param { 'seekDone' } type - Event type, which is **'seekDone'** in this case. This event is triggered each time
     *     **seek()** is called, except in SEEK_CONTINUOUS mode.
     * @param { Callback<int> } callback - Callback invoked when the event is triggered. It reports the time position
     *     requested by the user.<br>For video playback, [SeekMode]{@link @ohos.multimedia.media:media.SeekMode} may
     *     cause the actual position to be different from that requested by the user. The exact position can be obtained
     *     from the **currentTime** property. The time in this callback only means that the requested seek operation is
     *     complete.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    on(type: 'seekDone', callback: Callback<int>): void;
    /**
     * Unsubscribes from the event that checks whether the seek operation takes effect.
     *
     * @param { 'seekDone' } type - Event type, which is **'seekDone'** in this case.
     * @param { Callback<int> } callback - Callback invoked when the event is triggered. It reports the time position
     *     requested by the user.<br>For video playback, [SeekMode]{@link @ohos.multimedia.media:media.SeekMode} may
     *     cause the actual position to be different from that requested by the user. The exact position can be obtained
     *     from the **currentTime** property. The time in this callback only means that the requested seek operation is
     *     complete. If this parameter is specified, only the specified callback is unregistered. Otherwise, all
     *     callbacks associated with the **seekDone** event will be unregistered. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    off(type: 'seekDone', callback?: Callback<int>): void;
    /**
     * Subscribes to the event to check whether the playback speed is successfully set.
     *
     * @param { 'speedDone' } type - Event type, which is **'speedDone'** in this case. This event is triggered each
     *     time **setSpeed()** is called.
     * @param { Callback<int> } callback - Callback used to return the result. When the call of **setSpeed** is
     *     successful, the effective speed mode is reported. For details, see
     *     [PlaybackSpeed]{@link @ohos.multimedia.media:media.PlaybackSpeed}.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'speedDone', callback: Callback<int>): void;
    /**
     * Unsubscribes from the event that checks whether the playback speed is successfully set.
     *
     * @param { 'speedDone' } type - Event type, which is **'speedDone'** in this case.
     * @param { Callback<int> } callback - Callback used to return the result. When the call of **setSpeed** is
     *     successful, the effective speed mode is reported. For details, see
     *     [PlaybackSpeed]{@link @ohos.multimedia.media:media.PlaybackSpeed}. If this parameter is specified, only the
     *     specified callback is unregistered. Otherwise, all callbacks associated with the **speedDone** event will be
     *     unregistered. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 19]
     * @since 9 dynamic
     */
    off(type: 'speedDone', callback?: Callback<int>): void;

    /**
     * Subscribes to the event indicating that the playback rate set by calling 
     * [setPlaybackRate]{@link media.AVPlayer.setPlaybackRate} is applied.
     *
     * @param { 'playbackRateDone' } type - Event type, which is **'playbackRateDone'** in this case. This event is
     *     triggered each time **setPlaybackRate** is called.
     * @param { OnPlaybackRateDone } callback - Callback invoked when the event is triggered. It reports the new
     *     playback rate.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'playbackRateDone', callback: OnPlaybackRateDone): void;

    /**
     * Unsubscribes from the event indicating that the playback rate set by calling 
     * [setPlaybackRate]{@link media.AVPlayer.setPlaybackRate} is applied.
     *
     * @param { 'playbackRateDone' } type - Event type, which is **'playbackRateDone'** in this case.
     * @param { OnPlaybackRateDone } [callback] - Callback invoked when the event is triggered. It reports the new
     *     playback rate. If this parameter is specified, only the specified callback is unregistered. Otherwise, all
     *     callbacks associated with the **playbackRateDone** event will be unregistered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'playbackRateDone', callback?: OnPlaybackRateDone): void;

    /**
     * Subscribes to the event to check whether the bitrate is successfully set.
     *
     * @param { 'bitrateDone' } type - Event type, which is **'bitrateDone'** in this case. This event is triggered each
     *     time **setBitrate()** is called.
     * @param { Callback<int> } callback - Callback invoked when the event is triggered. It reports the effective
     *     bitrate.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'bitrateDone', callback: Callback<int>): void;
    /**
     * Unsubscribes from the event that checks whether the bitrate is successfully set.
     *
     * @param { 'bitrateDone' } type - Event type, which is **'bitrateDone'** in this case.
     * @param { Callback<number> } callback - Callback invoked when the event is triggered. It reports the effective
     *     bitrate. If this parameter is specified, only the specified callback is unregistered. Otherwise, all
     *     callbacks associated with the **bitrateDone** event will be unregistered. [since 12 - 18]
     * @param { Callback<int> } [callback] - Callback invoked when the event is triggered. It reports the effective
     *     bitrate. If this parameter is specified, only the specified callback is unregistered. Otherwise, all
     *     callbacks associated with the **bitrateDone** event will be unregistered. [since 19]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 19]
     * @since 9 dynamic
     */
    off(type: 'bitrateDone', callback?: Callback<int>): void;

    /**
     * Subscribes to playback position changes. It is used to refresh the current position of the progress bar. By 
     * default, this event is reported every 100 ms. However, it is reported immediately upon a successful seek 
     * operation.
     * 
     * > **NOTE**
     * >
     * > - The **'timeUpdate'** event is not supported in live streaming scenarios.
     * >
     * > - When a seek operation is performed, the progress bar can be updated based on the **'timeUpdate'** event only 
     * > after the seek operation is complete (**'seekdone'** received).
     * >
     * > - In the **pause** state, the player reports the timeUpdate event when the buffering ends.
     *
     * @param { 'timeUpdate' } type - Event type, which is **'timeUpdate'** in this case.
     * @param { Callback<int> } callback - Callback used to return the current time.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    on(type: 'timeUpdate', callback: Callback<int>): void;
    /**
     * Unsubscribes from playback position changes.
     *
     * @param { 'timeUpdate' } type - Event type, which is **'timeUpdate'** in this case.
     * @param { Callback<int> } [callback] - Callback used to return the current time. If this parameter is specified,
     *     only the specified callback is unregistered. Otherwise, all callbacks associated with the **timeUpdate**
     *     event will be unregistered. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    off(type: 'timeUpdate', callback?: Callback<int>): void;
    /**
     * Subscribes to media asset duration changes. It is used to refresh the length of the progress bar. By default, 
     * this event is reported once in the prepared state. However, it can be repeatedly reported for special streams 
     * that trigger duration changes.
     * 
     * > **NOTE**
     * >
     * > The **durationUpdate** event is not supported in live streaming scenarios.
     *
     * @param { 'durationUpdate' } type - Event type, which is **'durationUpdate'** in this case.
     * @param { Callback<int> } callback - Callback used to return the resource duration.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'durationUpdate', callback: Callback<int>): void;
    /**
     * Unsubscribes from media asset duration changes.
     *
     * @param { 'durationUpdate' } type - Event type, which is **'durationUpdate'** in this case.
     * @param { Callback<number> } callback - Callback used to return the resource duration. If this parameter is
     *     specified, only the specified callback is unregistered. Otherwise, all callbacks associated with the
     *     **durationUpdate** event will be unregistered. [since 12 - 18]
     * @param { Callback<int> } [callback] - Callback used to return the resource duration. If this parameter is
     *     specified, only the specified callback is unregistered. Otherwise, all callbacks associated with the
     *     **durationUpdate** event will be unregistered. [since 19]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 19]
     * @since 9 dynamic
     */
    off(type: 'durationUpdate', callback?: Callback<int>): void;

    /**
     * Subscribes to audio and video buffer changes. This subscription is supported only in network playback scenarios.
     *
     * @param { 'bufferingUpdate' } type - Event type, which is **'bufferingUpdate'** in this case.
     * @param { function } callback - Callback invoked when the event is triggered. [since 9 - 11]
     * @param { OnBufferingUpdateHandler } callback - Callback invoked when the event is triggered. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'bufferingUpdate', callback: OnBufferingUpdateHandler): void;

    /**
     * Unsubscribes from audio and video buffer changes.
     *
     * @param { 'bufferingUpdate' } type - Event type, which is **'bufferingUpdate'** in this case.
     * @param { OnBufferingUpdateHandler } [callback] - Callback invoked when the event is triggered. If this parameter
     *     is specified, only the specified callback is unregistered. Otherwise, all callbacks associated with the
     *     **bufferingUpdate** event will be unregistered. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    off(type: 'bufferingUpdate', callback?: OnBufferingUpdateHandler): void;

    /**
     * Subscribes to the event that indicates rendering starts for the first frame. This subscription is supported only 
     * in video playback scenarios. This event only means that the playback service sends the first frame to the display
     * module. The actual rendering effect depends on the rendering performance of the display service.
     *
     * @param { 'startRenderFrame' } type - Event type, which is **'startRenderFrame'** in this case.
     * @param { Callback<void> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'startRenderFrame', callback: Callback<void>): void;

    /**
     * Unsubscribes from the event that indicates rendering starts for the first frame.
     *
     * @param { 'startRenderFrame' } type - Event type, which is **'startRenderFrame'** in this case.
     * @param { Callback<void> } callback - Callback invoked when the event is triggered. If this parameter is specified
     *     , only the specified callback is unregistered. Otherwise, all callbacks associated with the
     *     **startRenderFrame** event will be unregistered. [since 12 - 18]
     * @param { Callback<void> } [callback] - Callback invoked when the event is triggered. If this parameter is
     *     specified, only the specified callback is unregistered. Otherwise, all callbacks associated with the
     *     **startRenderFrame** event will be unregistered. [since 19]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 19]
     * @since 9 dynamic
     */
    off(type: 'startRenderFrame', callback?: Callback<void>): void;

    /**
     * Subscribes to video size (width and height) changes. This subscription is supported only in video playback 
     * scenarios. By default, this event is reported only once in the prepared state. However, it is also reported upon 
     * resolution changes in the case of HLS streams.
     *
     * @param { 'videoSizeChange' } type - Event type, which is **'videoSizeChange'** in this case.
     * @param { function } callback - Callback invoked when the event is triggered. [since 9 - 11]
     * @param { OnVideoSizeChangeHandler } callback - Callback invoked when the event is triggered. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'videoSizeChange', callback: OnVideoSizeChangeHandler): void;

    /**
     * Unsubscribes from video size changes.
     *
     * @param { 'videoSizeChange' } type - Event type, which is **'videoSizeChange'** in this case.
     * @param { OnVideoSizeChangeHandler } [callback] - Callback invoked when the event is triggered. If this parameter
     *     is specified, only the specified callback is unregistered. Otherwise, all callbacks associated with the
     *     **videoSizeChange** event will be unregistered. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    off(type: 'videoSizeChange', callback?: OnVideoSizeChangeHandler): void;

    /**
     * Subscribes to the audio interruption event. When multiple audio and video assets are played at the same time, 
     * this event is triggered based on the audio interruption mode 
     * [audio.InterruptMode]{@link @ohos.multimedia.audio:audio.InterruptMode}. The application needs to perform 
     * corresponding processing based on different audio interruption events. For details, see 
     * [Handling Audio Interruption Events](docroot://media/audio/audio-playback-concurrency.md).
     *
     * @param { 'audioInterrupt' } type - Event type, which is **'audioInterrupt'** in this case.
     * @param { function } callback - Callback invoked when the event is triggered. [since 9 - 11]
     * @param { Callback<audio.InterruptEvent> } callback - Callback invoked when the event is triggered. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>): void;

    /**
     * Unsubscribes from the audio interruption event.
     *
     * @param { 'audioInterrupt' } type - Event type, which is **'audioInterrupt'** in this case.
     * @param { Callback<audio.InterruptEvent> } callback - Callback invoked when the event is triggered. If this
     *     parameter is specified, only the specified callback is unregistered. Otherwise, all callbacks associated with
     *     the **audioInterrupt** event will be unregistered. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    off(type: 'audioInterrupt', callback?: Callback<audio.InterruptEvent>): void;

    /**
     * Subscribes to available bitrates of HLS/DASH streams. This event is reported only after the AVPlayer switches to 
     * the prepared state.
     *
     * @param { 'availableBitrates' } type - Event type, which is **'availableBitrates'** in this case. This event is
     *     triggered once after the AVPlayer switches to the prepared state.
     * @param { function } callback - Callback invoked when the event is triggered. It returns an array that holds the
     *     available bitrates. If the array length is 0, no bitrate can be set. [since 9 - 11]
     * @param { Callback<Array<int>> } callback - Callback invoked when the event is triggered. It returns an array that
     *     holds the available bitrates. If the array length is 0, no bitrate can be set. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'availableBitrates', callback: Callback<Array<int>>): void;

    /**
     * Unsubscribes from available bitrates of HLS/DASH streams. This event is reported after 
     * [prepare]{@link media.AVPlayer.prepare(callback: AsyncCallback<void>)} is called.
     *
     * @param { 'availableBitrates' } type - Event type, which is **'availableBitrates'** in this case.
     * @param { Callback<Array<int>> } callback - Callback invoked when the event is triggered. It returns an array that
     *     holds the available bitrates. If the array length is 0, no bitrate can be set. If this parameter is specified
     *     , only the specified callback is unregistered. Otherwise, all callbacks associated with the
     *     **availableBitrates** event will be unregistered. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    off(type: 'availableBitrates', callback?: Callback<Array<int>>): void;

    /**
     * Subscribes to [AVPlayer]{@link @ohos.multimedia.media:media} errors. This event is used only for error prompt and
     * does not require the user to stop playback control. If the 
     * [AVPlayerState]{@link @ohos.multimedia.media:media.AVPlayerState} is also switched to error, call 
     * [reset()]{@link media.AVPlayer.reset(callback: AsyncCallback<void>)} or 
     * [release()]{@link media.AVPlayer.release(callback: AsyncCallback<void>)} to exit the playback. If the playback 
     * remains in the error state after the [reset()]{@link media.AVPlayer.reset(callback: AsyncCallback<void>)} method 
     * is called, you are advised to directly invoke the 
     * [release()]{@link media.AVPlayer.release(callback: AsyncCallback<void>)} method to exit the playback operation.
     *
     * @param { 'error' } type - Event type, which is **'error'** in this case. This event can be triggered by both user
     *     operations and the system.
     * @param { ErrorCallback } callback - Callback used to return the error code ID and error message.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 5400101 - No memory.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error. [since 9 - 13]
     * @throws { BusinessError } 5400104 - Time out.
     * @throws { BusinessError } 5400105 - Service died.
     * @throws { BusinessError } 5400106 - Unsupported format.
     * @throws { BusinessError } 5411001 - IO can not find host. [since 14]
     * @throws { BusinessError } 5411002 - IO connection timeout. [since 14]
     * @throws { BusinessError } 5411003 - IO network abnormal. [since 14]
     * @throws { BusinessError } 5411004 - IO network unavailable. [since 14]
     * @throws { BusinessError } 5411005 - IO no permission. [since 14]
     * @throws { BusinessError } 5411006 - IO request denied. [since 14]
     * @throws { BusinessError } 5411007 - IO resource not found. [since 14]
     * @throws { BusinessError } 5411008 - IO SSL client cert needed. [since 14]
     * @throws { BusinessError } 5411009 - IO SSL connect fail. [since 14]
     * @throws { BusinessError } 5411010 - IO SSL server cert untrusted. [since 14]
     * @throws { BusinessError } 5411011 - IO unsupported request. [since 14]
     * @throws { BusinessError } 5410002 - Seek continuous unsupported. [since 18]
     * @throws { BusinessError } 5411012 - Http cleartext traffic is not permitted. [since 23]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Unsubscribes from AVPlayer errors.
     *
     * @param { 'error' } type - Event type, which is **'error'** in this case.
     * @param { ErrorCallback } callback - Callback used to return the error code ID and error message. If this
     *     parameter is specified, only the specified callback is unregistered. Otherwise, all callbacks associated with
     *     the **error** event will be unregistered. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Subscribes to audio stream output device changes and reasons. This API uses an asynchronous callback to return 
     * the result.
     * 
     * When subscribing to this event, you are advised to implement the player behavior when the device is connected or 
     * disconnected by referring to 
     * [Handling Output Device Changes Gracefully](docroot://media/audio/audio-output-device-change.md).
     *
     * @param { 'audioOutputDeviceChangeWithInfo' } type - Event type, which is **'audioOutputDeviceChangeWithInfo'** in
     *     this case.
     * @param { Callback<audio.AudioStreamDeviceChangeInfo> } callback - Callback used to return the output device
     *     descriptor of the current audio stream and the change reason.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'audioOutputDeviceChangeWithInfo', callback: Callback<audio.AudioStreamDeviceChangeInfo>): void;

    /**
     * Unsubscribes from audio stream output device changes and reasons. This API uses an asynchronous callback to 
     * return the result.
     *
     * @param { 'audioOutputDeviceChangeWithInfo' } type - Event type, which is **'audioOutputDeviceChangeWithInfo'** in
     *     this case.
     * @param { Callback<audio.AudioStreamDeviceChangeInfo> } callback - Callback used to return the output device
     *     descriptor of the current audio stream and the change reason. If this parameter is specified, only the
     *     specified callback is unregistered. Otherwise, all callbacks associated with the
     *     **audioOutputDeviceChangeWithInfo** event will be unregistered.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'audioOutputDeviceChangeWithInfo', callback?: Callback<audio.AudioStreamDeviceChangeInfo>): void;

    /**
     * Subscribes to subtitle update events. When external subtitles exist, the system notifies the application through 
     * the subscribed-to callback. An application can subscribe to only one subtitle update event. When the application 
     * initiates multiple subscriptions to this event, the last subscription is applied.
     *
     * @param { 'subtitleUpdate' } type - Event type, which is **'subtitleUpdate'** in this case. The event is triggered
     *     when the external subtitle is updated.
     * @param { Callback<SubtitleInfo> } callback - Callback invoked when the subtitle is updated.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'subtitleUpdate', callback: Callback<SubtitleInfo>): void;

    /**
     * Unsubscribes from subtitle update events.
     *
     * @param { 'subtitleUpdate' } type - Event type, which is **'subtitleUpdate'** in this case. The event is triggered
     *     when the external subtitle is updated.
     * @param { Callback<SubtitleInfo> } callback - Callback that has been registered to listen for subtitle update
     *     events. If this parameter is specified, only the specified callback is unregistered. Otherwise, all callbacks
     *     associated with the **subtitleUpdate** event will be unregistered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'subtitleUpdate', callback?: Callback<SubtitleInfo>): void

    /**
     * Subscribes to track change events. When the track changes, the system notifies the application through the 
     * subscribed-to callback. An application can subscribe to only one track change event. When the application 
     * initiates multiple subscriptions to this event, the last subscription is applied.
     *
     * @param { 'trackChange' } type - Event type, which is **'trackChange'** in this case. The event is triggered when
     *     the track changes.
     * @param { OnTrackChangeHandler } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'trackChange', callback: OnTrackChangeHandler): void

    /**
     * Unsubscribes from track change events.
     *
     * @param { 'trackChange' } type - Event type, which is **'trackChange'** in this case. The event is triggered when
     *     the track changes.
     * @param { OnTrackChangeHandler } callback - Callback that has been registered to listen for track changes. If this
     *     parameter is specified, only the specified callback is unregistered. Otherwise, all callbacks associated with
     *     the **trackChange** event will be unregistered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'trackChange', callback?: OnTrackChangeHandler): void

    /**
     * Subscribes to track information update events. When the track information is updated, the system notifies the 
     * application through the subscribed-to callback. An application can subscribe to only one track change event. When
     * the application initiates multiple subscriptions to this event, the last subscription is applied.
     *
     * @param { 'trackInfoUpdate' } type - Event type, which is **'trackInfoUpdate'** in this case. The event is
     *     triggered when the track information is updated.
     * @param { Callback<Array<MediaDescription>> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'trackInfoUpdate', callback: Callback<Array<MediaDescription>>): void

    /**
     * Unsubscribes from track information update events.
     *
     * @param { 'trackInfoUpdate' } type - Event type, which is **'trackInfoUpdate'** in this case. The event is
     *     triggered when the track information is updated.
     * @param { Callback<Array<MediaDescription>> } callback - Callback that has been registered to listen for track
     *     information updates. If this parameter is specified, only the specified callback is unregistered. Otherwise,
     *     all callbacks associated with the **trackInfoUpdate** event will be unregistered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'trackInfoUpdate', callback?: Callback<Array<MediaDescription>>): void

    /**
     * Subscribes to update events of the maximum audio level value, which is periodically reported when audio resources
     * are played.
     *
     * @param { 'amplitudeUpdate' } type - Event type, which is **'amplitudeUpdate'** in this case. The event is
     *     triggered when the amplitude changes.
     * @param { Callback<Array<double>> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 13 dynamic
     */
    on(type: 'amplitudeUpdate', callback: Callback<Array<double>>): void

    /**
     * Unsubscribes from update events of the maximum amplitude.
     *
     * @param { 'amplitudeUpdate' } type - Event type, which is **'amplitudeUpdate'** in this case. The event is
     *     triggered when the amplitude changes.
     * @param { Callback<Array<double>> } callback - Callback that has been registered to listen for amplitude updates.
     *     If this parameter is specified, only the specified callback is unregistered. Otherwise, all callbacks
     *     associated with the **amplitudeUpdate** event will be unregistered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 13 dynamic
     */
    off(type: 'amplitudeUpdate', callback?: Callback<Array<double>>): void

    /**
     * Subscribes to events indicating that a Supplemental Enhancement Information (SEI) message is received. This 
     * applies only to HTTP-FLV live streaming and is triggered when SEI messages are present in the video stream. You 
     * must initiate the subscription before calling **prepare**. If you initiate multiple subscriptions to this event, 
     * the last subscription is applied.
     *
     * @param { 'seiMessageReceived' } type - Event type, which is **'seiMessageReceived'** in this case. The event is
     *     triggered when an SEI message is received.
     * @param { Array<int> } payloadTypes - Array of subscribed-to payload types of SEI messages. Currently, only
     *     payloadType = 5 is supported.
     * @param { OnSeiMessageHandle } callback - Callback used to listen for SEI message events and receive the
     *     subscribed-to payload types.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 18 dynamic
     */
    on(type: 'seiMessageReceived', payloadTypes: Array<int>, callback: OnSeiMessageHandle): void;

    /**
     * Unsubscribes from the events indicating that an SEI message is received.
     *
     * @param { 'seiMessageReceived' } type - Event type, which is **'seiMessageReceived'** in this case. The event is
     *     triggered when an SEI message is received.
     * @param { Array<int> } [payloadTypes] - Array of subscribed-to payload types of SEI messages.
     * @param { OnSeiMessageHandle } [callback] - Callback used to listen for SEI message events and receive the
     *     subscribed-to payload types. If this parameter is specified, only the specified callback is unregistered.
     *     Otherwise, all callbacks associated with the **seiMessageReceived** event will be unregistered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 18 dynamic
     */
    off(type: 'seiMessageReceived', payloadTypes?: Array<int>, callback?: OnSeiMessageHandle): void;

    /**
     * Subscribes to the event indicating that super resolution is enabled or disabled.
     *
     * @param { 'superResolutionChanged' } type - Event type, which is **'superResolutionChanged'** in this case. The
     *     event is triggered when super resolution is enabled or disabled.
     * @param { OnSuperResolutionChanged } callback - Callback used to listen for super resolution status changes.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 18 dynamic
     */
    on(type:'superResolutionChanged', callback: OnSuperResolutionChanged): void;

    /**
     * Unsubscribes from the event indicating that super resolution is enabled or disabled.
     *
     * @param { 'superResolutionChanged' } type - Event type, which is **'superResolutionChanged'** in this case. The
     *     event is triggered when super resolution is enabled or disabled.
     * @param { OnSuperResolutionChanged } callback - Callback used to listen for super resolution status changes. If
     *     this parameter is specified, only the specified callback is unregistered. Otherwise, all callbacks associated
     *     with the **superResolutionChanged** event will be unregistered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 18 dynamic
     */
    off(type:'superResolutionChanged', callback?: OnSuperResolutionChanged): void;

    /**
     * Register listens for mediaKeySystemInfoUpdate events.
     *
     * @param { Callback<Array<drm.MediaKeySystemInfo>> } callback - Callback invoked when the event is triggered.
     *     It reports a **MediaKeySystemInfo** array.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onMediaKeySystemInfoUpdate( callback: Callback<Array<drm.MediaKeySystemInfo>>): void;

    /**
     * Register listens for media playback stateChange event.
     * This event can be triggered by both user operations and the system.
     *
     * @param { OnAVPlayerStateChangeHandle } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onStateChange(callback: OnAVPlayerStateChangeHandle): void;

    /**
     * Subscribes to the event to check whether the volume is successfully set.
     *
     * @param { Callback<double> } callback - Callback invoked when the event is triggered.
     *     It reports the effective volume.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onVolumeChange(callback: Callback<double>): void;

    /**
     * Subscribes to the event that indicates the end of the stream being played. If {@link #loop} = true is set,
     * the AVPlayer seeks to the beginning of the stream and plays the stream again. If loop is not set,
     * the completed state is reported through the {@link #stateChange} event.
     *
     * @param { Callback<void> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onEndOfStream(callback: Callback<void>): void;

    /**
     * Subscribes to the event to check whether the seek operation takes effect.
     *
     * @param { Callback<int> } callback - Callback invoked when the event is triggered.
     *     It reports the time position requested by the user.
     *     For video playback, {@link #SeekMode} may cause the actual position to be different from that
     *     requested by the user.The exact position can be obtained from the currentTime attribute. The time
     *     in this callback only means that the requested seek operation is complete.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onSeekDone(callback: Callback<int>): void;

    /**
     * Subscribes to the event to check whether the playback speed is successfully set.
     *
     * @param { Callback<int> } callback - Callback used to return the result. When the call of
     *     setSpeed is successful, the effective speed mode is reported. For details, see {@link #PlaybackSpeed}.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onSpeedDone(callback: Callback<int>): void;

    /**
     * Register listens for media playbackRateDone event.
     *
     * @param { OnPlaybackRateDone } callback - Callback used to listen for the playbackRateDone event.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onPlaybackRateDone(callback: OnPlaybackRateDone): void;

    /**
     * Subscribes to the event to check whether the bit rate is successfully set.
     *
     * @param { Callback<int> } callback - Callback invoked when the event is triggered.
     *     It reports the effective bit rate.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onBitrateDone(callback: Callback<int>): void;

    /**
     * Subscribes to playback position changes. It is used to refresh the current position of the progress bar.
     * By default, this event is reported every 100 ms. However, it is reported immediately upon
     * a successful seek operation.
     *
     * @param { Callback<int> } callback - Callback used to return the current time.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onTimeUpdate(callback: Callback<int>): void;

    /**
     * Subscribes to media asset duration changes. It is used to refresh the length of the progress bar. By
     * default, this event is reported once in the prepared state. However, it can be repeatedly reported for
     * special streams that trigger duration changes. The **'durationUpdate'** event is not supported in live mode.
     *
     * @param { Callback<int> } callback - Callback used to return the resource duration.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onDurationUpdate(callback: Callback<int>): void;

    /**
     * Subscribes to audio and video buffer changes. This subscription is supported only in network
     * playback scenarios.
     *
     * @param { OnBufferingUpdateHandler } callback - Callback invoked when the event is triggered,
     *     and return BufferingInfoType and the value.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onBufferingUpdate(callback: OnBufferingUpdateHandler): void;

    /**
     * Subscribes to the event that indicates rendering starts for the first frame. This subscription is
     * supported only in video playback scenarios. This event only means that the playback service sends
     * the first frame to the display module. The actual rendering effect depends on the rendering performance
     * of the display service.
     *
     * @param { Callback<void> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onStartRenderFrame(callback: Callback<void>): void;

    /**
     * Subscribes to video size (width and height) changes. This subscription is supported only in video playback
     * scenarios. By default, this event is reported only once in the prepared state. However, it is also reported
     * upon resolution changes in the case of HLS streams.
     *
     * @param { OnVideoSizeChangeHandler } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onVideoSizeChange(callback: OnVideoSizeChangeHandler): void;

    /**
     * Register listens for audio interrupt event, refer to {@link #audio.InterruptEvent}.
     * The application needs to perform corresponding processing based on different audio interruption events.
     * For details, see Handling Audio Interruption Events.
     *
     * @param { Callback<audio.InterruptEvent> } callback - Callback used to listen for the playback event return
     *     audio interrupt info.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onAudioInterrupt(callback: Callback<audio.InterruptEvent>): void;

    /**
     * Register listens for available bitrate list collect completed events for HLS protocol stream playback.
     * This event will be reported after the {@link #prepare} called.
     *
     * @param { Callback<Array<int>> } callback - Callback used to listen for the playback event return
     *     available bitrate list. It returns an array that holds the available bit rates.
     *     If the array length is 0, no bit rate can be set.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onAvailableBitrates(callback: Callback<Array<int>>): void;

    /**
     * Register listens for playback error events.
     *
     * @param { ErrorCallback } callback - Callback used to listen for the playback error event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 5400101 - No memory.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400104 - Time out.
     * @throws { BusinessError } 5400105 - Service died.
     * @throws { BusinessError } 5400106 - Unsupported format.
     * @throws { BusinessError } 5410002 - Seek continuous unsupported.
     * @throws { BusinessError } 5411001 - IO can not find host.
     * @throws { BusinessError } 5411002 - IO connection timeout.
     * @throws { BusinessError } 5411003 - IO network abnormal.
     * @throws { BusinessError } 5411004 - IO network unavailable.
     * @throws { BusinessError } 5411005 - IO no permission.
     * @throws { BusinessError } 5411006 - IO request denied.
     * @throws { BusinessError } 5411007 - IO resource not found.
     * @throws { BusinessError } 5411008 - IO SSL client cert needed.
     * @throws { BusinessError } 5411009 - IO SSL connect fail.
     * @throws { BusinessError } 5411010 - IO SSL server cert untrusted.
     * @throws { BusinessError } 5411011 - IO unsupported request.
     * @throws { BusinessError } 5411012 - Http cleartext traffic is not permitted.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Subscribes to audio stream output device changes and reasons. This API uses an asynchronous callback
     * to return the result.
     * 
     * When subscribing to this event, you are advised to implement the player behavior when the device is
     * connected or disconnected by referring to Responding to Audio Output Device Changes.
     *
     * @param { Callback<audio.AudioStreamDeviceChangeInfo> } callback - Callback used to listen device change event.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onAudioOutputDeviceChangeWithInfo(callback: Callback<audio.AudioStreamDeviceChangeInfo>): void;

    /**
     * Subscribes to subtitle update events. When external subtitles exist, the system notifies the application
     * through the subscribed-to callback. An application can subscribe to only one subtitle update event. When
     * the application initiates multiple subscriptions to this event, the last subscription is applied.
     * The event is triggered when the external subtitle is updated.
     *
     * @param { Callback<SubtitleInfo> } callback - Callback invoked when the subtitle is updated.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onSubtitleUpdate(callback: Callback<SubtitleInfo>): void;

    /**
     * Subscribes to track change events. When the track changes, the system notifies the application through
     * the subscribed-to callback. An application can subscribe to only one track change event. When the
     * application initiates multiple subscriptions to this event, the last subscription is applied.
     * The event is triggered when the track changes.
     *
     * @param { OnTrackChangeHandler } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onTrackChange(callback: OnTrackChangeHandler): void;

    /**
     * Subscribes to track information update events. When the track information is updated, the system notifies the
     * application through the subscribed-to callback. An application can subscribe to only one track change event.
     * When the application initiates multiple subscriptions to this event, the last subscription is applied.
     * The event is triggered when the track information is updated.
     *
     * @param { Callback<Array<MediaDescription>> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onTrackInfoUpdate(callback: Callback<Array<MediaDescription>>): void;

    /**
     * Subscribes to update events of the maximum audio level value, which is periodically reported when audio
     * resources are played.
     * The event is triggered when the amplitude changes.
     *
     * @param { Callback<Array<double>> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onAmplitudeUpdate(callback: Callback<Array<double>>): void;

    /**
     * Subscribes to events indicating that a Supplemental Enhancement Information (SEI) message is received. This
     * applies only to HTTP-FLV live streaming and is triggered when SEI messages are present in the video stream.
     * You must initiate the subscription before calling {@link #prepare}. If you initiate multiple subscriptions
     * to this event, the last subscription is applied.
     *
     * @param { Array<int> } payloadTypes - Array of subscribed-to payload types of SEI messages. Currently,
     *     only payloadType = 5 is supported.
     * @param { OnSeiMessageHandle } callback - Callback used to listen for SEI message events and receive the
     *     subscribed-to payload types.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onSeiMessageReceived(payloadTypes: Array<int>, callback: OnSeiMessageHandle): void;

    /**
     * Subscribes to the event indicating that super resolution is enabled or disabled.
     * The event is triggered when super resolution is enabled or disabled.
     *
     * @param { OnSuperResolutionChanged } callback - Callback used to listen for the super-resolution changed event.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    onSuperResolutionChanged(callback: OnSuperResolutionChanged): void;

    /**
     * Unsubscribes from the event indicating that super resolution is enabled or disabled.
     * The event is triggered when super resolution is enabled or disabled.
     *
     * @param { OnSuperResolutionChanged } [callback] - Callback used to listen for the super-resolution changed event.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offSuperResolutionChanged(callback?: OnSuperResolutionChanged): void;

    /**
     * Unregister listens for media playback stateChange event.
     *
     * @param { OnAVPlayerStateChangeHandle } [callback] - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offStateChange(callback?: OnAVPlayerStateChangeHandle): void;

    /**
     * Unsubscribes from the event that checks whether the volume is successfully set.
     *
     * @param { Callback<double> } [callback] - Callback invoked when the event is triggered.
     *     It reports the effective volume.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offVolumeChange(callback?: Callback<double>): void;

    /**
     * Unregister listens for mediaKeySystemInfoUpdate events.
     *
     * @param { Callback<Array<drm.MediaKeySystemInfo>> } [callback] - Callback for event.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offMediaKeySystemInfoUpdate(callback?: Callback<Array<drm.MediaKeySystemInfo>>): void;

    /**
     * Unregister listens for media playback endOfStream event.
     *
     * @param { Callback<void> } [callback] - Callback used to listen for the playback end of stream.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offEndOfStream(callback?: Callback<void>): void;

    /**
     * Unsubscribes from the event that checks whether the seek operation takes effect.
     *
     * @param { Callback<int> } [callback] - Callback invoked when the event is triggered.
     *     It reports the time position requested by the user.
     *     For video playback, SeekMode may cause the actual position to be different from that requested by the user.
     *     The exact position can be obtained from the currentTime attribute. The time in this callback
     *     only means that the requested seek operation is complete.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offSeekDone(callback?: Callback<int>): void;

    /**
     * Unsubscribes from the event that checks whether the playback speed is successfully set.
     *
     * @param { Callback<int> } [callback] - Callback used to return the result. When the call of setSpeed is
     *     successful, the effective speed mode is reported. For details, see {@link #PlaybackSpeed}.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offSpeedDone(callback?: Callback<int>): void;

    /**
     * Unregister listens for media playbackRateDone event.
     *
     * @param { OnPlaybackRateDone } [callback] - Callback used to listen for the playbackRateDone event.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offPlaybackRateDone(callback?: OnPlaybackRateDone): void;

    /**
     * Unsubscribes from the event that checks whether the bit rate is successfully set.
     *
     * @param { Callback<int> } [callback] - Callback invoked when the event is triggered.
     *     It reports the effective bit rate.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offBitrateDone(callback?: Callback<int>): void;

    /**
     * Unsubscribes from playback position changes.
     *
     * @param { Callback<int> } [callback] - Callback used to return the current time.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offTimeUpdate(callback?: Callback<int>): void;

    /**
     * Unsubscribes from media asset duration changes.
     *
     * @param { Callback<int> } [callback] - Callback used to return the resource duration.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offDurationUpdate(callback?: Callback<int>): void;

    /**
     * Unsubscribes from audio and video buffer changes.
     *
     * @param { OnBufferingUpdateHandler } [callback] - Callback invoked when the event is triggered,
     *     and return BufferingInfoType and the value.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offBufferingUpdate(callback?: OnBufferingUpdateHandler): void;

    /**
     * Unregister listens for start render video frame events.
     *
     * @param { Callback<void> } [callback] - Callback used to listen for the playback event return .
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offStartRenderFrame(callback?: Callback<void>): void;

    /**
     * Unsubscribes from video size changes.
     *
     * @param { OnVideoSizeChangeHandler } [callback] - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offVideoSizeChange(callback?: OnVideoSizeChangeHandler): void;

    /**
     * Unregister listens for audio interrupt event, refer to {@link #audio.InterruptEvent}
     *
     * @param { Callback<audio.InterruptEvent> } [callback] - Callback used to listen for
     *     the playback event return audio interrupt info.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offAudioInterrupt(callback?: Callback<audio.InterruptEvent>): void;

    /**
     * Unregister listens for available bitrate list collect completed events for HLS protocol stream playback.
     * This event will be reported after the {@link #prepare} called.
     *
     * @param { Callback<Array<int>> } [callback] - Callback used to listen for the playback
     *     event return available bitrate list.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offAvailableBitrates(callback?: Callback<Array<int>>): void;

    /**
     * Unsubscribes from AVPlayer errors.
     *
     * @param { ErrorCallback } [callback] - Callback used to return the error code ID and error message.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Unsubscribes from audio stream output device changes and reasons. This API uses an asynchronous callback
     * to return the result.
     *
     * @param { Callback<audio.AudioStreamDeviceChangeInfo> } [callback] - Callback used to return the output device
     *     descriptor of the current audio stream and the change reason.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offAudioOutputDeviceChangeWithInfo(callback?: Callback<audio.AudioStreamDeviceChangeInfo>): void;

    /**
     * Unsubscribes from subtitle update events.
     *
     * @param { Callback<SubtitleInfo> } [callback] - Callback that has been registered to listen for subtitle
     *     update events.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offSubtitleUpdate(callback?: Callback<SubtitleInfo>): void;

    /**
     * Unsubscribes from track change events.
     * The event is triggered when the track changes.
     *
     * @param { OnTrackChangeHandler } [callback] - Callback that has been registered to listen for track changes.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offTrackChange(callback?: OnTrackChangeHandler): void;

    /**
     * Unsubscribes from track information update events.
     * The event is triggered when the track information is updated.
     *
     * @param { Callback<Array<MediaDescription>> } [callback] - Callback that has been registered to listen for track
     *     information updates.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offTrackInfoUpdate(callback?: Callback<Array<MediaDescription>>): void;

    /**
     * Unsubscribes from update events of the maximum amplitude.
     * The event is triggered when the amplitude changes.
     *
     * @param { Callback<Array<double>> } [callback] - Callback that has been registered to listen for amplitude
     *     updates.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offAmplitudeUpdate(callback?: Callback<Array<double>>): void;

    /**
     * Unsubscribes from the events indicating that an SEI message is received.
     * The event is triggered when an SEI message is received.
     *
     * @param { Array<int> } [payloadTypes] - The payload types of the SEI message.
     *     Null means unsubscribe all payload types.
     * @param { OnSeiMessageHandle } [callback] - Callback used to listen for SEI message events and receive the
     *     subscribed-to payload types.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 static
     */
    offSeiMessageReceived(payloadTypes?: Array<int>, callback?: OnSeiMessageHandle): void;

    /**
     * Subscribes to metric events during playback.
     *
     * @param { Callback<Array<AVMetricsEvent>> } callback - Callback invoked for metric events. This API uses an
     *     asynchronous callback to return the result.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    onMetricsEvent(callback: Callback<Array<AVMetricsEvent>>): void;

    /**
     * Unsubscribes from metric events during playback.
     *
     * @param { Callback<Array<AVMetricsEvent>> } [callback] - Callback invoked for metric events. This API uses an
     *     asynchronous callback to return the result.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    offMetricsEvent(callback?: Callback<Array<AVMetricsEvent>>): void;

    /**
     * Registers a listener to detect when the playback content has changed.
     * The value carried in the callback function is the ID of the media source that is being played in the playlist.
     *
     * @param { Callback<string> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    onPlaybackContentChanged(callback: Callback<string>):void;

    /**
     * Unregisters listener to detect when changes occur in the playback content.
     *
     * @param { Callback<string> } [callback] - Callback invoked when the event is triggered.
     *     <br>Default value:If this parameter is not specified, all callback functions for the event are unsubscribed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    offPlaybackContentChanged(callback?: Callback<string>):void;

    /**
     * Register listener to detect time-based metadata,
     * Currently, only the #EXT-X-DATERANGE data of HLS and the Event Streams information of DASH are supported.
     *
     * @param { Callback<AVTimedMetaData> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    onTimedMetaData(callback: Callback<AVTimedMetaData>): void;

    /**
     * Unregister listener to detect time-based metadata,
     * Currently, only the #EXT-X-DATERANGE data of HLS and the Event Streams information of DASH are supported.
     *
     * @param { Callback<AVTimedMetaData> } [callback] - Callback invoked when the event is triggered.
     *     <br>Default value:If this parameter is not specified, all callback functions for the event are unsubscribed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    offTimedMetaData(callback?: Callback<AVTimedMetaData>): void;
  }

  /**
   * Enumerates loop mode keys for playback.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum PlaylistLoopMode {  
    /**
     * loops all items in the playlist
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    PLAYLIST_LOOP_MODE_ALL = 1,
 
    /**
     * Loops a single playback item.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    PLAYLIST_LOOP_MODE_ONE = 2,

    /**
     * Loops shuffle playback item.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    PLAYLIST_LOOP_MODE_SHUFFLE = 3,
  
    /**
     * No looping
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    PLAYLIST_LOOP_MODE_NONE = 4
  }

  /**
   * Enumerates the playback metric keys.
   *
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @since 23 dynamic&static
   */
  enum PlaybackMetricsKey {  
    /**
     * Preparation duration, in milliseconds.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    PREPARE_DURATION = 'prepare_duration',

    /**
     * Duration for establishing a resource connection, in milliseconds.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    RESOURCE_CONNECTION_DURATION = 'resource_connection_duration',

    /**
     * Duration for decapsulating the first frame, in milliseconds.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    FIRST_FRAME_DECAPSULATION_DURATION = 'first_frame_decapsulation_duration',

    /**
     * Total playback duration, in milliseconds.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    TOTAL_PLAYING_TIME = 'total_playback_time',

    /**
     * Total number of requests.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOWNLOAD_REQUESTS_COUNT  = 'loading_requests_count',

    /**
     * Total loading duration, in milliseconds.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    TOTAL_DOWNLOAD_TIME  = 'total_loading_time',

    /**
     * Total loading size, in bytes.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    TOTAL_DOWNLOAD_SIZE  = 'total_loading_bytes',

    /**
     * Total number of stalling times.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    STALLING_COUNT  = 'stalling_count',

    /**
     * Total stalling duration, in milliseconds.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    TOTAL_STALLING_TIME  = 'total_stalling_time',
  }

  /**
   * Describes the container for the key-value pairs of playback metrics.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @since 23 dynamic&static
   */
  type PlaybackMetrics = Record<PlaybackMetricsKey, Object>;

  /**
   * Provides player statistic info.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @since 12 dynamic
   */
  interface PlaybackInfo {
    /**
     * key:value pair, key see @PlaybackInfoKey.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     */
    [key:string]: Object;
  }

  /**
   * Provides the container definition for media description key-value pairs.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @since 23 static
   */
  type PlaybackInfo = Record<string, Object>;

  /**
   * Enumerates the playback description keys.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum PlaybackInfoKey {
    /**
     * IP address of the server. The corresponding key value type is string.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SERVER_IP_ADDRESS = 'server_ip_address',

    /**
     * Average download rate. The corresponding key value type is number, measured in bit/s.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    AVG_DOWNLOAD_RATE = 'average_download_rate',

    /**
     * Download rate in one second. The corresponding key value type is number, measured in bit/s.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    DOWNLOAD_RATE = 'download_rate',

    /**
     * Download status. The corresponding key value type is number. The value **1** means that the downloaded is in 
     * progress, and **0** means that the download is complete.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    IS_DOWNLOADING = 'is_downloading',

    /**
     * Duration that the cached data can be played. The corresponding key value type is number, measured in seconds.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BUFFER_DURATION = 'buffer_duration',
  }

  /**
   * Enumerates the media error codes.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @since 8 dynamiconly
   * @deprecated since 11
   * @useinstead media.AVErrorCode
   */
  enum MediaErrorCode {
    /**
     * The operation is successful.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_OK
     */
    MSERR_OK = 0,

    /**
     * Failed to allocate memory. The system may have no available memory.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_NO_MEMORY
     */
    MSERR_NO_MEMORY = 1,

    /**
     * No permission to perform the operation.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_OPERATE_NOT_PERMIT
     */
    MSERR_OPERATION_NOT_PERMIT = 2,

    /**
     * Invalid input parameter.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_INVALID_PARAMETER
     */
    MSERR_INVALID_VAL = 3,

    /**
     * An I/O error occurs.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_IO
     */
    MSERR_IO = 4,

    /**
     * The operation times out.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_TIMEOUT
     */
    MSERR_TIMEOUT = 5,

    /**
     * An unknown error occurs.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_INVALID_PARAMETER
     */
    MSERR_UNKNOWN = 6,

    /**
     * Invalid server.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_SERVICE_DIED
     */
    MSERR_SERVICE_DIED = 7,

    /**
     * The operation is not allowed in the current state.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_INVALID_PARAMETER
     */
    MSERR_INVALID_STATE = 8,

    /**
     * The operation is not supported in the current version.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_UNSUPPORT_CAPABILITY
     */
    MSERR_UNSUPPORTED = 9,
  }

  /**
   * Enumerates the buffering event types.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum BufferingInfoType {
    /**
     * Buffering starts. When this event is triggered, the player pauses the playback.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    BUFFERING_START = 1,

    /**
     * Buffering ends. When this event is triggered, the player resumes the playback.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    BUFFERING_END = 2,

    /**
     * Buffering percentage. You can use this event to monitor the buffering status.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    BUFFERING_PERCENT = 3,

    /**
     * Estimated duration, in ms, that the buffered data can be played. This event is triggered once the data change 
     * amount in the buffer exceeds 500 ms. You can use this event to develop a progress bar.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    CACHED_DURATION = 4
  }

  /**
   * This callback function is implemented by applications to handle resource open requests and return a unique handle 
   * for the opened resource.
   * 
   * > **NOTE**
   * >
   * > The client must return the handle immediately after processing the request.
   *
   * @param { MediaSourceLoadingRequest } request - Parameters for the resource open request, including detailed
   *     information about the requested resource and the data push method.
   * @returns { long } Handle for the current resource open request. A value greater than 0 means the request is
   *     successful, whereas a value less than or equal to 0 means it fails.
   *     <br> - The handle for the request object is unique.
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  type SourceOpenCallback = (request: MediaSourceLoadingRequest) => long;

  /**
   * This callback function is implemented by applications to handle resource read requests. When data is available, 
   * applications should push it to the player using the 
   * [respondData]{@link @ohos.multimedia.media:media.MediaSourceLoadingRequest.respondData(uuid: number, offset: number, buffer: ArrayBuffer)}
   * API of the corresponding MediaSourceLoadingRequest object.
   * 
   * > **NOTE**
   * >
   * > The client must return the handle immediately after processing the request.
   *
   * @param { long } uuid - ID for the resource handle.
   * @param { long } requestedOffset - Offset of the current media data relative to the start of the resource.
   * @param { long } requestedLength - Length of the current request. The value **-1** indicates reaching the end of the
   *     resource. After pushing the data, call
   *     [finishLoading]{@link @ohos.multimedia.media:media.MediaSourceLoadingRequest.finishLoading} to notify the
   *     player that the push is complete.
   * @returns { void } - client should return immediately.
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  type SourceReadCallback = (uuid: long, requestedOffset: long, requestedLength: long) => void;

  /**
   * This callback function is implemented by applications to release related resources.
   * 
   * > **NOTE**
   * >
   * > The client must return the handle immediately after processing the request.
   *
   * @param { long } uuid - ID for the resource handle.
   * @returns { void } - client should return immediately.
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  type SourceCloseCallback = (uuid: long) => void;

  /**
   * Defines a media data loader, which needs to be implemented by applications.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface MediaSourceLoader {
    /**
     * Callback function is implemented by application, which is used to handle resource opening requests.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    open: SourceOpenCallback;

    /**
     * Callback function is implemented by application, which is used to handle resource read requests.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    read: SourceReadCallback;

    /**
     * Callback function is implemented by application, which is used to handle resource close request.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    close: SourceCloseCallback;
  }

  /**
   * Enumerates the reasons for data loading status changes.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  enum LoadingRequestError {
    /**
     * Returned by the client to indicate that the end of the resource.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    LOADING_ERROR_SUCCESS = 0,

    /**
     * Returned by the client to indicate that the resource is not ready for access.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    LOADING_ERROR_NOT_READY = 1,

    /**
     * Returned by the client to indicate that the requested resource URL does not exist.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    LOADING_ERROR_NO_RESOURCE = 2,

    /**
     * Returned by the client to indicate that the ID of the requested resource handle (specified by **uuid**) is 
     * invalid.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    LOADING_ERROR_INVAID_HANDLE = 3,

    /**
     * Returned by the client to indicate that the client does not have permission to request the resource.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    LOADING_ERROR_ACCESS_DENIED = 4,

    /**
     * Returned by the client to indicate that the access to the resource times out.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    LOADING_ERROR_ACCESS_TIMEOUT = 5,

    /**
     * Returned by the client to indicate that authorization fails.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    LOADING_ERROR_AUTHORIZE_FAILED = 6
  }

  /**
   * The MediaSourceLoadingRequest class defines a loading request object. Applications use this object to obtain the 
   * location of the requested resource and to interact with the player for data exchange.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface MediaSourceLoadingRequest {
    /**
     * Resource URL, which is the path to the resource that the application needs to open.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    url: string;

    /**
     * HTTP request header. If the header exists, the application should set the header information in the HTTP request 
     * when downloading data.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    header?: Record<string, string>;

    /**
     * Sends data to the player.
     *
     * @param { number } uuid - ID for the resource handle. The source is
     *     [SourceOpenCallback]{@link @ohos.multimedia.media:media.SourceOpenCallback}.
     * @param { number } offset - Offset of the current media data relative to the start of the resource. The value
     *     cannot be less than 0.
     * @param { ArrayBuffer } buffer - Media data sent to the player.<br>**Note**: Do not transmit irrelevant data, as
     *     it can affect normal data parsing and playback.
     * @returns { number } Number of bytes received by the server.
     *     <br>- A return value less than 0 indicates failure.
     *     <br>- A return value of -2 indicates that the player no longer needs the current data, and the client should stop
     *     the current read process.
     *     <br>- A return value of -3 indicates that the player's buffer is full, and the client should wait for the next read.
     * @syscap  SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     */
    respondData(uuid: number, offset: number, buffer: ArrayBuffer): number;

    /**
     * The interface for application used to send requested data to AVPlayer.
     *
     * @param { long } uuid - ID for the resource handle.
     * @param { long } offset - Offset of the current media data relative to the start of the resource.
     * @param { ArrayBuffer } buffer - Media data sent to the player.
     * @returns { int | undefined } - accept bytes for current read. The value less than zero means failed.
     *     -2, means player need current data any more, the client should stop current read process.
     *     -3, means player buffer is full, the client should wait for next read.
     * @syscap  SystemCapability.Multimedia.Media.Core
     * @since 23 static
     */
    respondData(uuid: long, offset: long, buffer: ArrayBuffer): int | undefined;

    /**
     * Sends response header information to the player. This API must be called before the first call to 
     * [respondData]{@link media.MediaSourceLoadingRequest.respondData(uuid: number, offset: number, buffer: ArrayBuffer)}.
     *
     * @param { long } uuid - ID for the resource handle. The source is
     *     [SourceOpenCallback]{@link @ohos.multimedia.media:media.SourceOpenCallback}.
     * @param { Record<string, string> } [header] - Header information in the HTTP response. The application can
     *     intersect the header fields with the fields supported by the underlying layer for parsing or directly pass in
     *     all corresponding header information.<br> - The following fields need to be parsed by the underlying player:
     *     Transfer-Encoding, Location, Content-Type, Content-Range, Content-Encode, Accept-Ranges, and content-length.
     * @param { string } [redirectUrl] - Redirect URL in the HTTP response.
     * @syscap  SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    respondHeader(uuid: long, header?: Record<string, string>, redirectUrl?: string): void;

    /**
     * Notifies the player of the current request status. After pushing all the data for a single resource, the 
     * application should send the **LOADING_ERROR_SUCCESS** state to notify the player that the resource push is 
     * complete.
     *
     * @param { long } uuid - ID for the resource handle. The source is
     *     [SourceOpenCallback]{@link @ohos.multimedia.media:media.SourceOpenCallback}.
     * @param { LoadingRequestError } state - Request status.
     * @syscap  SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    finishLoading(uuid: long, state: LoadingRequestError): void;
  }

  /**
   * Media Stream. AVPlayer use this for mediaData access, current version only support live stream.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  interface MediaStream {
    /**
     * url for this mediaStream
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    url: string;
 
    /**
     * video width.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * video height.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    height: int;

    /**
     * biterate of this mediaStream.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    bitrate: int;
  }

  /**
   * The MediaSource class defines the media data information, which is from 
   * [createMediaSourceWithUrl]{@link @ohos.multimedia.media:media.createMediaSourceWithUrl(url: string, headers?: Record<string, string>)}.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface MediaSource {
    /**
     * Sets the MIME type to help the player process extended media sources.
     *
     * @param { AVMimeTypes } mimeType - MIME type.
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setMimeType(mimeType: AVMimeTypes): void;

    /**
     * Sets a MediaSourceLoader object, which is used to help the player request media data.
     *
     * @param { MediaSourceLoader } resourceLoader - **MediaSourceLoader** object used to obtain media data for the
     *     player.
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    setMediaResourceLoaderDelegate(resourceLoader: MediaSourceLoader): void;

    /**
    * Sets whether to enable offline caching during video playback.
    *
    * @param { boolean } enable - Whether to enable offline caching during video playback. **true** to enable, **false**
    *     otherwise.
    * @syscap SystemCapability.Multimedia.Media.Core
    * @since 23 dynamic&static
    */
	  enableOfflineCache(enable: boolean): void;
 
    /**
     * Gets the identifier of the media source.
     *
     * @returns { string } Identifier of the media source. Empty string means call failed.
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getID(): string;
  }

  /**
   * Enumerates the MIME type, which is set by using 
   * [setMimeType]{@link @ohos.multimedia.media:media.MediaSource.setMimeType}.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum AVMimeTypes {
    /**
     * Local M3U8 file.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    APPLICATION_M3U8 = 'application/m3u8',
  }
  /**
   * Provides preferred playback settings for player.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface PlaybackStrategy {
    /**
     * Choose a stream with width close to it.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    preferredWidth?: int;
    /**
     * Choose a stream with height close to it.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    preferredHeight?: int;
    /**
     * Chooses a preferred buffer duration.
     * 
     * <p>The preferred buffer duration in the playback policy, is used to set the buffer size. For details,
     * see [Online Video Frame Freezing Optimization Practice]{@link
     * https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-online-video-playback-lags-practice}.</p>
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    preferredBufferDuration?: int;

    /**
     * If true, the player should choose HDR stream if exist.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    preferredHdr?: boolean;

    /**
     * mute the specified media stream when playing.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    mutedMediaType?: MediaType;

    /**
     * Audio language.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    preferredAudioLanguage?: string;

    /**
     * Subtitle language.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    preferredSubtitleLanguage?: string;

    /**
     * Show first frame on prepare.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    showFirstFrameOnPrepare?: boolean;

    /**
     * Customize the buffering threshold for start or restart playing. The unit is second.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    preferredBufferDurationForPlaying?: double;

    /**
     * Enable super-resolution feature. default is false.
     * Must enable super-resolution feature before calling {@link #setSuperResolution} and {@link #setVideoWindowSize}.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    enableSuperResolution?: boolean;

    /**
     * set max buffering threshold for liveStreaming or avplayer while change the speed.
     * It is recommended that the value be 2 seconds greater than the starting waterline.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    thresholdForAutoQuickPlay?: double;

    /**
     * Indicates whether to keep the decoder working when closing the media,
     * which is used to facilitate quick opening of the media. Currently only supports video
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    keepDecodingOnMute?: boolean;

    /**
     * Indicates whether to enable camera post-processing during video playback,
     * which is used to apply image enhancements when playing back video content.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    enableCameraPostprocessing?: boolean;
  }

  /**
   * Media file descriptor. The caller needs to ensure that the fd is valid and
   * the offset and length are correct.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AVFileDescriptor {
    /**
     * The file descriptor of audio or video source from file system. The caller
     * is responsible to close the file descriptor.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    fd: int;

    /**
     * The offset into the file where the data to be read, in bytes. By default,
     * the offset is zero.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    offset?: long;

    /**
     * The length in bytes of the data to be read. By default, the length is the
     * rest of bytes in the file from the offset.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    length?: long;
  }

  /**
   * Defines the descriptor of an audio and video file, which is used in DataSource playback mode.
   * Use scenario: An application can create a playback instance and start playback before it finishes
   * downloading the audio and video resources.
   *
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVDataSrcDescriptor {
    /**
     * Size of the file, -1 means the file size is unknown, in this case,
     * seek and setSpeed can't be executed, loop can't be set, and can't replay.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    fileSize: long;
    /**
     * Callback function implemented by users, which is used to fill data.
     * buffer - The buffer need to fill.
     * length - The stream length player want to get.
     * pos - The stream position player want get start, and is an optional parameter.
     * When fileSize set to -1, this parameter is not used.
     * Returns length of the data to be filled, Return -1 to indicate that the end of the stream is reached,
     * Return -2 to indicate that an unrecoverable error has been encountered.
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    callback: (buffer: ArrayBuffer, length: long, pos?: long) => int;
  }

  /**
   * Provides subtitle information. When a subtitle update event is subscribed to, the information about the
   * external subtitle is returned through a callback.
   * Can be synchronized to the time reported by AVPlayer#timeUpdate event
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface SubtitleInfo {
    /**
     * Duration of the text to be displayed, as milliseconds.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    duration?: int;
    /**
     * Display start time of the text, as milliseconds.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    startTime?: int;
    /**
     * Text information of current update event.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    text?: string;
  }

    /**
   * Describes the audio playback state. You can obtain the state through the **state** property.
   *
   * @unionmember { 'idle' } No audio playback is in progress. The audio player is in this state after the
   *     **'dataload'** or **'reset'** event is triggered.
   * @unionmember { 'playing' } Audio playback is in progress. The audio player is in this state after the **'play'**
   *     event is triggered.
   * @unionmember { 'paused' } Audio playback is paused. The audio player is in this state after the **'pause'** event
   *     is triggered.
   * @unionmember { 'stopped' } Audio playback is stopped. The audio player is in this state after the **'stop'** event
   *     is triggered.
   * @unionmember { 'error' } Audio playback is in the error state.
   * @syscap SystemCapability.Multimedia.Media.AudioPlayer
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead media.AVPlayerState
   */

  type AudioState = 'idle' | 'playing' | 'paused' | 'stopped' | 'error';

  /**
   * AudioPlayer is a class for audio playback management. It provides APIs to manage and play audio. Before calling any
   * API in AudioPlayer, you must use [createAudioPlayer()]{@link @ohos.multimedia.media:media.createAudioPlayer} to 
   * create an AudioPlayer instance.
   *
   * @syscap SystemCapability.Multimedia.Media.AudioPlayer
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.multimedia.media:media
   */
  interface AudioPlayer {
    /**
     * Starts to play an audio asset. This API can be called only after the **'dataLoad'** event is triggered.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.play(callback: AsyncCallback<void>)
     */
    play(): void;

    /**
     * Pauses audio playback.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.pause(callback: AsyncCallback<void>)
     */
    pause(): void;

    /**
     * Stops audio playback.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.stop(callback: AsyncCallback<void>)
     */
    stop(): void;

    /**
     * Resets the audio asset to be played.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)
     */
    reset(): void;

    /**
     * Seeks to the specified playback position.
     *
     * @param { number } timeMs - Position to seek to, in ms. The value range is [0, duration].
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.seek
     */
    seek(timeMs: number): void;

    /**
     * Sets the volume.
     *
     * @param { number } vol - Relative volume. The value ranges from 0.00 to 1.00. The value **1.00** indicates the
     *     maximum volume (100%).
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.setVolume
     */
    setVolume(vol: number): void;

    /**
     * Releases the audio playback resources.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>)
     */
    release(): void;

    /**
     * Obtains the audio track information. It can be called only after the **'dataLoad'** event is triggered. This API 
     * uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<MediaDescription>> } callback - Callback used to return the result. If the operation
     *     is successful, **err** is **undefined** and **data** is the MediaDescription array obtained; otherwise,
     *     **err** is an error object.
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>)
     */
    getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void;

    /**
     * Obtains the audio track information. It can be called only after the **'dataLoad'** event is triggered. This API 
     * uses a promise to return the result.
     *
     * @returns { Promise<Array<MediaDescription>> } Promise used to return a **MediaDescription** array, which records
     *     the audio track information.
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.getTrackDescription()
     */
    getTrackDescription(): Promise<Array<MediaDescription>>;

    /**
     * Subscribes to the audio buffering update event. This API works only under online playback.
     *
     * @param { 'bufferingUpdate' } type - Event type, which is **'bufferingUpdate'** in this case.
     * @param { function } callback - Callback invoked when the event is triggered.<br>The value of
     *     [BufferingInfoType]{@link @ohos.multimedia.media:media.BufferingInfoType} is fixed at **0**.
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'bufferingUpdate', callback: OnBufferingUpdateHandler)
     */
    on(type: 'bufferingUpdate', callback: (infoType: BufferingInfoType, value: number) => void): void;

    /**
     * Audio file URI. The mainstream audio formats (M4A, AAC, MP3, OGG, WAV, and AMR) are supported.
     * 
     * **Example of supported URLs**:
     * 
     * 1. FD: fd://xx
     * 
     * ![](docroot://reference/apis-media-kit/figures/en-us_image_url.png)
     * 
     * 2. HTTP: http://xx
     * 3. HTTPS: https://xx
     * 4. HLS: http://xx or https://xx
     * 
     * ohos.permission.READ_MEDIA or ohos.permission.INTERNET
     *
     * @permission ohos.permission.READ_MEDIA or ohos.permission.INTERNET
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#url
     */
    src: string;

    /**
     * Description of the audio file. This property is required when audio assets of an application are continuously 
     * stored in a file.
     * 
     * Assume that a music file that stores continuous music assets consists of the following:
     * 
     * Music 1 (address offset: 0, byte length: 100)
     * 
     * Music 2 (address offset: 101; byte length: 50)
     * 
     * Music 3 (address offset: 151, byte length: 150)
     * 
     * 1. To play music 1: AVFileDescriptor { fd = resource handle; offset = 0; length = 100; }
     * 2. To play music 2: AVFileDescriptor { fd = resource handle; offset = 101; length = 50; }
     * 3. To play music 3: AVFileDescriptor { fd = resource handle; offset = 151; length = 150; }
     * 
     * To play an independent music file, use **src=fd://xx**.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#fdSrc
     */
    fdSrc: AVFileDescriptor;

    /**
     * Whether to loop audio playback. **true** to loop, **false** otherwise.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#loop
     */
    loop: boolean;

    /**
     * Audio interruption mode.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#audioInterruptMode
     */
    audioInterruptMode?: audio.InterruptMode;

    /**
     * Current audio playback position, in ms.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#currentTime
     */
    readonly currentTime: number;

    /**
     * Audio duration, in ms.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#duration
     */
    readonly duration: number;

    /**
     * Audio playback state. This state cannot be used as the condition for triggering the call of **play()**, 
     * **pause()**, or **stop()**.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#state
     */
    readonly state: AudioState;

    /**
     * Subscribes to the audio playback events.
     *
     * @param { 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange' } type - Event type. The
     *     following events are supported:<br>- 'play': triggered when the [play()]{@link media.AudioPlayer.play} API is
     *     called and audio playback starts.<br>- 'pause': triggered when the [pause()]{@link media.AudioPlayer.pause}
     *     API is called and audio playback is paused.<br>- 'stop': triggered when the
     *     [stop()]{@link media.AudioPlayer.stop} API is called and audio playback stops.<br>- 'reset': triggered when
     *     the [reset()]{@link media.AudioPlayer.reset} API is called and audio playback is reset.<br>- 'dataLoad':
     *     triggered when the audio data is loaded, that is, when the **src** property is configured.<br>- 'finish':
     *     triggered when the audio playback is finished.<br>- 'volumeChange': triggered when the
     *     [setVolume()]{@link media.AudioPlayer.setVolume} API is called and the playback volume is changed.
     * @param { function } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)
     */
    on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void;

    /**
     * Subscribes to the **'timeUpdate'** event. This event is reported every second when the audio playback is in 
     * progress.
     *
     * @param { 'timeUpdate' } type - Event type, which is **'timeUpdate'** in this case.<br>The **'timeUpdate'** event
     *     is triggered when the audio playback starts after an audio playback timestamp update.
     * @param { Callback<number> } callback - Callback invoked when the event is triggered. The input parameter is the
     *     updated timestamp.
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'timeUpdate', callback: Callback<int>)
     */
    on(type: 'timeUpdate', callback: Callback<number>): void;

    /**
     * Subscribes to the audio interruption event. For details, see 
     * [audio.InterruptEvent]{@link @ohos.multimedia.audio:audio.InterruptEvent}.
     *
     * @param { 'audioInterrupt' } type - Event type, which is **'audioInterrupt'** in this case.
     * @param { function } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>)
     */
    on(type: 'audioInterrupt', callback: (info: audio.InterruptEvent) => void): void;

    /**
     * Subscribes to audio playback error events. After an error event is reported, you must handle the event and exit 
     * the playback.
     *
     * @param { 'error' } type - Event type, which is **'error'** in this case.<br>This event is triggered when an error
     *     occurs during audio playback.
     * @param { ErrorCallback } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'error', callback: ErrorCallback)
     */
    on(type: 'error', callback: ErrorCallback): void;
  }

    /**
   * Enumerates the AVRecorder states. You can obtain the state through the **state** property.
   *
   * @unionmember { 'idle' } The AVRecorder enters this state after it is just created or the
   *     [AVRecorder.reset()]{@link @ohos.multimedia.media:media.AVRecorder.reset(callback: AsyncCallback<void>)} API is
   *     called when the AVRecorder is in any state except released. In this state, you can call
   *     [AVRecorder.prepare()]{@link @ohos.multimedia.media:media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)}
   *     to set recording parameters. The AVRecorder enters this state after it is just created or the
   *     [AVRecorder.reset()]{@link @ohos.multimedia.media:media.AVRecorder.reset(callback: AsyncCallback<void>) } The
   *     AVRecorder enters this state after it is just created or the
   *     [AVRecorder.reset()]{@link @ohos.multimedia.media:media.AVRecorder.reset(callback: AsyncCallback<void>)} API is
   *     called when the AVRecorder is in any state except released. In this state, you can call
   *     [AVRecorder.prepare()]{@link @ohos.multimedia.media:media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)}
   *     to set recording parameters. The AVRecorder enters this state after it is just created or the
   *     [AVRecorder.reset()]{@link @ohos.multimedia.media:media.AVRecorder.reset(callback: AsyncCallback<void>)} API is
   *     called when the AVRecorder is in any state except released.
   * @unionmember { 'prepared' } The AVRecorder enters this state when the parameters are set. In this state, you can
   *     call [AVRecorder.start()]{@link @ohos.multimedia.media:media.AVRecorder.start(callback: AsyncCallback<void>) }
   *     The AVRecorder enters this state when the parameters are set. In this state, you can call
   *     [AVRecorder.start()]{@link @ohos.multimedia.media:media.AVRecorder.start(callback: AsyncCallback<void>)} to
   *     start recording.
   * @unionmember { 'started' } The AVRecorder enters this state when the recording starts. In this state, you can call
   *     [AVRecorder.pause()]{@link @ohos.multimedia.media:media.AVRecorder.pause(callback: AsyncCallback<void>)} to
   *     pause recording or call
   *     [AVRecorder.stop()]{@link @ohos.multimedia.media:media.AVRecorder.stop(callback: AsyncCallback<void>) } The
   *     AVRecorder enters this state when the recording starts. In this state, you can call
   *     [AVRecorder.pause()]{@link @ohos.multimedia.media:media.AVRecorder.pause(callback: AsyncCallback<void>)} to
   *     pause recording or call
   *     [AVRecorder.stop()]{@link @ohos.multimedia.media:media.AVRecorder.stop(callback: AsyncCallback<void>)} to stop
   *     recording.
   * @unionmember { 'paused' } The AVRecorder enters this state when the recording is paused. In this state, you can
   *     call [AVRecorder.resume()]{@link @ohos.multimedia.media:media.AVRecorder.resume(callback: AsyncCallback<void>)}
   *     to continue recording or call
   *     [AVRecorder.stop()]{@link @ohos.multimedia.media:media.AVRecorder.stop(callback: AsyncCallback<void>) } The
   *     AVRecorder enters this state when the recording is paused. In this state, you can call
   *     [AVRecorder.resume()]{@link @ohos.multimedia.media:media.AVRecorder.resume(callback: AsyncCallback<void>)} to
   *     continue recording or call
   *     [AVRecorder.stop()]{@link @ohos.multimedia.media:media.AVRecorder.stop(callback: AsyncCallback<void>)} to stop
   *     recording.
   * @unionmember { 'stopped' } The AVRecorder enters this state when the recording stops. In this state, you can call
   *     [AVRecorder.prepare()]{@link @ohos.multimedia.media:media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>) }
   *     The AVRecorder enters this state when the recording stops. In this state, you can call
   *     [AVRecorder.prepare()]{@link @ohos.multimedia.media:media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)}
   *     to set recording parameters so that the AVRecorder enters the prepared state again.
   * @unionmember { 'released' } The AVRecorder enters this state when the recording resources are released. In this
   *     state, no operation can be performed. In any other state, you can call
   *     [AVRecorder.release()]{@link @ohos.multimedia.media:media.AVRecorder.release(callback: AsyncCallback<void>) }
   *     The AVRecorder enters this state when the recording resources are released. In this state, no operation can be
   *     performed. In any other state, you can call
   *     [AVRecorder.release()]{@link @ohos.multimedia.media:media.AVRecorder.release(callback: AsyncCallback<void>)} to
   *     enter the released state.
   * @unionmember { 'error' } The AVRecorder enters this state when an irreversible error occurs in the AVRecorder
   *     instance. In this state, the
   *     [AVRecorder.on('error') event]{@link @ohos.multimedia.media:media.AVRecorder.on(type: 'error', callback: ErrorCallback)}
   *     is reported, with the detailed error cause. In the error state, you must call
   *     [AVRecorder.reset()]{@link @ohos.multimedia.media:media.AVRecorder.reset(callback: AsyncCallback<void>)} to
   *     reset the AVRecorder instance or call
   *     [AVRecorder.release()]{@link @ohos.multimedia.media:media.AVRecorder.release(callback: AsyncCallback<void>) }
   *     The AVRecorder enters this state when an irreversible error occurs in the AVRecorder instance. In this state,
   *     the [AVRecorder.on('error') event]{@link @ohos.multimedia.media:media.AVRecorder.on(type: 'error', callback: ErrorCallback)}
   *     is reported, with the detailed error cause. In the error state, you must call
   *     [AVRecorder.reset()]{@link @ohos.multimedia.media:media.AVRecorder.reset(callback: AsyncCallback<void>)} to
   *     reset the AVRecorder instance or call
   *     [AVRecorder.release()]{@link @ohos.multimedia.media:media.AVRecorder.release(callback: AsyncCallback<void>)} to
   *     release the resources.
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */

  type AVRecorderState = 'idle' | 'prepared' | 'started' | 'paused' | 'stopped' | 'released' | 'error';

  /**
   * Describes the callback invoked for the AVRecorder state change event.
   *
   * @param { AVRecorderState } state - AVRecorder state.
   * @param { StateChangeReason } reason - Reason for the state change.
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type OnAVRecorderStateChangeHandler = (state: AVRecorderState, reason: StateChangeReason) => void;

  /**
   * AVRecorder is a class for audio and video recording management. It provides APIs to record media assets. Before 
   * calling any API in AVRecorder, you must use 
   * [createAVRecorder()]{@link @ohos.multimedia.media:media.createAVRecorder(callback: AsyncCallback<AVRecorder>)} to 
   * create an AVRecorder instance.
   * 
   * For details about the audio and video recording demo, see 
   * [Audio Recording](docroot://media/media/using-avrecorder-for-recording.md) and 
   * [Video Recording](docroot://media/media/video-recording.md).
   * 
   * > **NOTE**
   * >
   * > > To use the camera to record videos, the camera module is required. For details about how to use the APIs 
   * > provided by the camera module, see [Camera Management]{@link @ohos.multimedia.camera:camera}.
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AVRecorder {
    /**
     * Sets audio and video recording parameters. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.MICROPHONE
     * @param { AVRecorderConfig } config - Audio and video recording parameters to set.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission denied. Return by callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    prepare(config: AVRecorderConfig, callback: AsyncCallback<void>): void;

    /**
     * Sets audio and video recording parameters. This API uses a promise to return the result.
     *
     * @permission ohos.permission.MICROPHONE [since 9 - 11]
     * @permission ohos.permission.MICROPHONE
     *     This permission is required only if audio recording is involved. [since 12]
     * @param { AVRecorderConfig } config - Audio and video recording parameters to set.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied. Return by promise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    prepare(config: AVRecorderConfig): Promise<void>;

    /**
     * Obtains the real-time configuration of this AVRecorder. This API uses an asynchronous callback to return the 
     * result.
     * 
     * This API can be called only after 
     * [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)} is called.
     *
     * @param { AsyncCallback<AVRecorderConfig> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the real-time configuration obtained; otherwise, **err**
     *     is an error object.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     */
    getAVRecorderConfig(callback: AsyncCallback<AVRecorderConfig>): void;

    /**
     * Obtains the real-time configuration of this AVRecorder.
     * This API uses an asynchronous callback to return the result.
     * This API can be called only after prepare() is called.
     *
     * @param { AsyncCallback<AVRecorderConfig | undefined> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **undefined** and **data** is the real-time configuration obtained
     *     ;
     *     otherwise, **err** is an error object.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    getAVRecorderConfig(callback: AsyncCallback<AVRecorderConfig | undefined>): void;

    /**
     * Obtains the real-time configuration of this AVRecorder. This API uses a promise to return the result.
     * 
     * This API can be called only after [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig)} is 
     * called.
     *
     * @returns { Promise<AVRecorderConfig> } Promise used to return the real-time configuration.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     */
    getAVRecorderConfig(): Promise<AVRecorderConfig>;

    /**
     * Obtains the real-time configuration of this AVRecorder. This API uses a promise to return the result.
     * This API can be called only after prepare() is called.
     *
     * @returns { Promise<AVRecorderConfig | undefined> } Promise used to return the real-time configuration.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    getAVRecorderConfig(): Promise<AVRecorderConfig | undefined>;

    /**
     * Obtains the surface required for recording. This API uses an asynchronous callback to return the result.
     * 
     * The caller obtains the surface buffer from this surface and fills in the corresponding video data.
     * 
     * Note that the video data must carry the timestamp (in ns) and buffer size, and the start time of the timestamp 
     * must be based on the system startup time.
     * 
     * This API can be called only after the 
     * [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)} API is 
     * called.
     *
     * @param { AsyncCallback<string> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the surface ID obtained; otherwise, **err** is an error object.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 9 dynamic
     */
    getInputSurface(callback: AsyncCallback<string>): void;

    /**
     * Obtains the surface required for recording. This API uses an asynchronous callback to return the result.
     * The caller obtains the **surfaceBuffer** from this surface and fills in the corresponding video data.
     * 
     * Note that the video data must carry the timestamp (in ns) and buffer size, and the start time of the timestamp
     * must be based on the system startup time.
     * 
     * This API can be called only after the prepare() API is called.
     *
     * @param { AsyncCallback<string | undefined> } callback - Callback used to return the result.
     *     If the operation is successful, **err** is **undefined** and **data** is the surface ID obtained;
     *     otherwise, **err** is an error object.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    getInputSurface(callback: AsyncCallback<string | undefined>): void;

    /**
     * Obtains the surface required for recording. This API uses a promise to return the result.
     * 
     * The caller obtains the surface buffer from this surface and fills in the corresponding video data.
     * 
     * Note that the video data must carry the timestamp (in ns) and buffer size, and the start time of the timestamp 
     * must be based on the system startup time.
     * 
     * This API can be called only after the [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig)} API 
     * is called.
     *
     * @returns { Promise<string> } Promise used to return the surface buffer obtained from the surface.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 9 dynamic
     */
    getInputSurface(): Promise<string>;

    /**
     * Obtains the surface required for recording. This API uses a promise to return the result. The caller obtains the
     * **surfaceBuffer** from this surface and fills in the corresponding video data.
     * 
     * Note that the video data must carry the timestamp (in ns) and buffer size, and the start time of the timestamp
     * must be based on the system startup time.
     * 
     * This API can be called only after the prepare() API is called.
     *
     * @returns { Promise<string | undefined> } Promise used to return the result.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    getInputSurface(): Promise<string | undefined>;

    /**
     * Get input meta surface for specified meta source type. it must be called between prepare completed and start.
     *
     * @param { MetaSourceType } type - Meta source type.
     * @returns { Promise<string> } A Promise instance used to return the input surface id in string.
     * @throws { BusinessError } 202 - Called from Non-System applications. Return by promise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @systemapi
     * @since 12 dynamic
     */
    getInputMetaSurface(type: MetaSourceType): Promise<string>;

    /**
     * Get input meta surface for specified meta source type. it must be called between prepare completed and start.
     *
     * @param { MetaSourceType } type - Meta source type.
     * @returns { Promise<string | undefined> } A Promise instance used to return the input surface id in string.
     * @throws { BusinessError } 202 - Called from Non-System applications. Return by promise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @systemapi
     * @since 23 static
     */
    getInputMetaSurface(type: MetaSourceType): Promise<string | undefined>;

    /**
     * Checks whether the device supports the hardware digital watermark. This API uses a promise to return the result.
     * 
     * This API can be called after the prepare(), start(), or paused() event is triggered.
     *
     * @returns { Promise<boolean> } Promise used to return the check result. The value **true** means that
     *     the device supports the hardware digital watermark, and **false** means the opposite.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    isWatermarkSupported(): Promise<boolean>;
    /**
     * Sets a watermark for the AVRecorder. This API uses a promise to return the result.
     * 
     * This API can be called only after the prepare() event is triggered and before
     * the start() event is triggered.
     *
     * @param { image.PixelMap } watermark : Watermark image.
     * @param { WatermarkConfig } config : Configures of the watermark.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    setWatermark(watermark: image.PixelMap, config: WatermarkConfig): Promise<void>

    /**
     * add a watermark for the AVRecorder. This API uses a promise to return the result.
     * App can add up to 5 watermarks.
     * This API can be called only before the prepared state.
     *
     * @param { image.PixelMap } watermark - : Watermark image.
     * @param { WatermarkConfiguration } config - : Configuration of the watermark.
     * @returns { Promise<int> } Promise that returns the watermark id.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @throws { BusinessError } 5400108 - The parameter check failed, parameter value out of range.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    addWatermark(watermark: image.PixelMap, config: WatermarkConfiguration): Promise<int>;

    /**
     * Set metadata (key-value pairs) for the recording file of the recorder.
     * This metadata overwrites the value in config.metadata.customInfo (see {prepare()} and {AVRecorderConfig})
     * if they have same key.
     * 
     * This API can be called only after the prepare() event is successfully triggered and
     * before the stop() API is called.
     *
     * @param { Record<string, string> } metadata - Tag and value of the metadata in key-value pairs.
     *     <br>- The first string is the key.<br>- The second string is the value.
     *     <br> The key string should start with "com.openharmony.", the length of value can't be more than 256 bytes.
     * @throws { BusinessError } 202 - Not System App. [since 19 - 24]
     * @throws { BusinessError } 5400101 - No memory. [since 26.0.0]
     * @throws { BusinessError } 5400102 - Operation not allowed. [since 26.0.0]
     * @throws { BusinessError } 5400108 - Parameter check failed. [since 26.0.0]
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @systemapi [since 19 - 24]
     * @publicapi [since 26.0.0]
     * @since 19 dynamic
     * @since 23 static
     */
    setMetadata(metadata: Record<string, string>): void;

    /**
     * Updates the video rotation angle, in degrees. This API uses a promise to return the result.
     * 
     * This API can be called only after the [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig)} event
     * is triggered and before the [start()]{@link media.AVRecorder.start(callback: AsyncCallback<void>)} API is called.
     *
     * @param { int } rotation - Rotation angle, which can only be 0, 90, 180, or 270 degrees.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     * @since 23 static
     */
    updateRotation(rotation: int): Promise<void>;

    /**
     * Sets whether to mute the current audio recording stream when an audio interruption occurs. This API uses a 
     * promise to return the result.
     *
     * @param { boolean } muteWhenInterrupted - Whether to mute the current audio recording stream during an audio
     *     interruption. **true** to mute, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 20 dynamic
     * @since 23 static
     */
    setWillMuteWhenInterrupted(muteWhenInterrupted: boolean): Promise<void>;

    /**
     * Starts video recording. This API uses an asynchronous callback to return the result.
     * 
     * For audio-only recording, this API can be called only after the 
     * [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)} API is 
     * called. For video-only recording, this API can be called only after the 
     * [getInputSurface()]{@link media.AVRecorder.getInputSurface(callback: AsyncCallback<string>)} API is called.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;

    /**
     * Starts video recording. This API uses a promise to return the result.
     * 
     * For audio-only recording, this API can be called only after the 
     * [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig)} API is called. For video-only recording, 
     * this API can be called only after the [getInputSurface()]{@link media.AVRecorder.getInputSurface()} API is 
     * called.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * Pauses video recording. This API uses an asynchronous callback to return the result.
     * 
     * This API can be called only after the [start()]{@link media.AVRecorder.start(callback: AsyncCallback<void>)} API 
     * is called. You can call [resume()]{@link media.AVRecorder.resume(callback: AsyncCallback<void>)} to resume 
     * recording.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    pause(callback: AsyncCallback<void>): void;

    /**
     * Pauses video recording. This API uses a promise to return the result.
     * 
     * This API can be called only after the [start()]{@link media.AVRecorder.start()} API is called. You can call 
     * [resume()]{@link media.AVRecorder.resume()} to resume recording.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    pause(): Promise<void>;

    /**
     * Resumes video recording. This API uses an asynchronous callback to return the result.
     * 
     * This API can be called only after the [pause()]{@link media.AVRecorder.pause(callback: AsyncCallback<void>)} API 
     * is called.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    resume(callback: AsyncCallback<void>): void;

    /**
     * Resumes video recording. This API uses a promise to return the result.
     * 
     * This API can be called only after the [pause()]{@link media.AVRecorder.pause()} API is called.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    resume(): Promise<void>;

    /**
     * Stops video recording. This API uses an asynchronous callback to return the result.
     * 
     * This API can be called only after the [start()]{@link media.AVRecorder.start(callback: AsyncCallback<void>)} or 
     * [pause()]{@link media.AVRecorder.pause(callback: AsyncCallback<void>)} API is called.
     * 
     * For audio-only recording, you can call 
     * [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)} again for re
     * -recording. For video-only recording or audio and video recording, you can call 
     * [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)} and 
     * [getInputSurface()]{@link media.AVRecorder.getInputSurface(callback: AsyncCallback<string>)} again for re-
     * recording.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * Stops video recording. This API uses a promise to return the result.
     * 
     * This API can be called only after the [start()]{@link media.AVRecorder.start()} or 
     * [pause()]{@link media.AVRecorder.pause()} API is called.
     * 
     * For audio-only recording, you can call [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig)} 
     * again for re-recording. For video-only recording or audio and video recording, you can call 
     * [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig)} and 
     * [getInputSurface()]{@link media.AVRecorder.getInputSurface()} again for re-recording.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * Resets audio and video recording. This API uses an asynchronous callback to return the result.
     * 
     * For audio-only recording, you can call 
     * [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)} again for re
     * -recording. For video-only recording or audio and video recording, you can call 
     * [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)} and 
     * [getInputSurface()]{@link media.AVRecorder.getInputSurface(callback: AsyncCallback<string>)} again for re-
     * recording.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    reset(callback: AsyncCallback<void>): void;

    /**
     * Resets audio and video recording. This API uses a promise to return the result.
     * 
     * For audio-only recording, you can call [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig)} 
     * again for re-recording. For video-only recording or audio and video recording, you can call 
     * [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig)} and 
     * [getInputSurface()]{@link media.AVRecorder.getInputSurface()} again for re-recording.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    reset(): Promise<void>;

    /**
     * Releases the audio and video recording resources. This API uses an asynchronous callback to return the result.
     * 
     * After the resources are released, you can no longer perform any operation on the AVRecorder instance.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * Releases the audio and video recording resources. This API uses a promise to return the result.
     * 
     * After the resources are released, you can no longer perform any operation on the AVRecorder instance.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * Obtains the information about the current audio capturer. This API uses an asynchronous callback to return the 
     * result.
     * 
     * This API can be called only after the 
     * [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)} API is 
     * called. If this API is called after [stop()]{@link media.AVRecorder.stop(callback: AsyncCallback<void>)} is 
     * successfully called, an error is reported.
     *
     * @param { AsyncCallback<audio.AudioCapturerChangeInfo> } callback - Callback used to return the result. If the
     *     operation is successful, **err** is **undefined** and **data** is the audio.AudioCapturerChangeInfo object
     *     obtained; otherwise, **err** is an error object.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     */
    getCurrentAudioCapturerInfo(callback: AsyncCallback<audio.AudioCapturerChangeInfo>): void;

    /**
     * Obtains the information about the current audio capturer.
     * This API uses an asynchronous callback to return the result.
     * 
     * This API can be called only after the **prepare()** API is called.
     * If this API is called after **stop()** is successfully called, an error is reported.
     *
     * @param { AsyncCallback<audio.AudioCapturerChangeInfo | undefined> } callback - Callback used to return the
     *     result.
     *     If the operation is successful, **err** is **undefined** and **data** is the
     *     **audio.AudioCapturerChangeInfo** object obtained; otherwise, **err** is an error object.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    getCurrentAudioCapturerInfo(callback: AsyncCallback<audio.AudioCapturerChangeInfo | undefined>): void;

    /**
     * Obtains the information about the current audio capturer. This API uses a promise to return the result.
     * 
     * This API can be called only after the 
     * [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)} API is 
     * called. If this API is called after [stop()]{@link media.AVRecorder.stop(callback: AsyncCallback<void>)} is 
     * successfully called, an error is reported.
     *
     * @returns { Promise<audio.AudioCapturerChangeInfo> } Promise used to return the audio capturer information.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     */
    getCurrentAudioCapturerInfo(): Promise<audio.AudioCapturerChangeInfo>;

    /**
     * Obtains the information about the current audio capturer. This API uses a promise to return the result.
     * 
     * This API can be called only after the **prepare()** API is called.
     * If this API is called after **stop()** is successfully called, an error is reported.
     *
     * @returns { Promise<audio.AudioCapturerChangeInfo | undefined> } Promise used to return the audio capturer
     *     information.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    getCurrentAudioCapturerInfo(): Promise<audio.AudioCapturerChangeInfo | undefined>;

    /**
     * Obtains the maximum amplitude of the current audio capturer. This API uses an asynchronous callback to return the
     * result.
     * 
     * This API can be called only after the 
     * [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)} API is 
     * called. If this API is called after [stop()]{@link media.AVRecorder.stop(callback: AsyncCallback<void>)} is 
     * successfully called, an error is reported.
     * 
     * The return value is the maximum amplitude within the duration from the time the maximum amplitude is obtained 
     * last time to the current time. For example, if you have obtained the maximum amplitude at 1s and you call this 
     * API again at 2s, then the return value is the maximum amplitude within the duration from 1s to 2s.
     *
     * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the maximum amplitude obtained; otherwise, **err** is an error
     *     object.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    getAudioCapturerMaxAmplitude(callback: AsyncCallback<int>): void;

    /**
     * Obtains the maximum amplitude of the current audio capturer. This API uses a promise to return the result.
     * 
     * This API can be called only after the 
     * [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)} API is 
     * called. If this API is called after [stop()]{@link media.AVRecorder.stop(callback: AsyncCallback<void>)} is 
     * successfully called, an error is reported.
     * 
     * The return value is the maximum amplitude within the duration from the time the maximum amplitude is obtained 
     * last time to the current time. For example, if you have obtained the maximum amplitude at 1s and you call this 
     * API again at 2s, then the return value is the maximum amplitude within the duration from 1s to 2s.
     *
     * @returns { Promise<int> } Promise used to return the maximum amplitude obtained.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    getAudioCapturerMaxAmplitude(): Promise<int>;

    /**
     * Obtains available encoders. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<EncoderInfo>> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the available encoders obtained; otherwise, **err** is
     *     an error object.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    getAvailableEncoder(callback: AsyncCallback<Array<EncoderInfo>>): void;

    /**
     * Obtains available encoders. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<EncoderInfo>> } Promise used to return the information about the available encoders.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    getAvailableEncoder(): Promise<Array<EncoderInfo>>;

    /**
     * AVRecorder state.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly state: AVRecorderState;

    /**
     * Subscribes to audio capturer configuration changes. Any configuration change triggers the callback that returns 
     * the entire configuration information. This API uses an asynchronous callback to return the result.
     * 
     * When the application initiates multiple subscriptions to this event, the last subscription is applied.
     *
     * @param { 'audioCapturerChange' } type - Event type, which is **'audioCapturerChange'** in this case.
     * @param { Callback<audio.AudioCapturerChangeInfo> } callback - Callback used to return the changed audio capturer
     *     configuration.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     */
    on(type: 'audioCapturerChange', callback: Callback<audio.AudioCapturerChangeInfo>): void;

    /**
     * Subscribes to media asset callback events. When 
     * [FileGenerationMode]{@link @ohos.multimedia.media:media.FileGenerationMode} is used during media file creation, 
     * the [PhotoAsset]{@link @ohos.file.photoAccessHelper:photoAccessHelper} object is called back to the application 
     * after the [stop]{@link media.AVRecorder.stop(callback: AsyncCallback<void>)} operation is complete. This API uses
     * an asynchronous callback to return the result.
     * 
     * When the application initiates multiple subscriptions to this event, the last subscription is applied.
     *
     * @param { 'photoAssetAvailable' } type - Event type, which is **'photoAssetAvailable'** in this case. The event is
     *     triggered when a photo asset is available.
     * @param { Callback<photoAccessHelper.PhotoAsset> } callback - Callback used to return the PhotoAsset object
     *     corresponding to the resource file created by the system.
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     */
    on(type: 'photoAssetAvailable', callback: Callback<photoAccessHelper.PhotoAsset>): void;
    /**
     * Subscribes to AVRecorder state changes. An application can subscribe to only one AVRecorder state change event. 
     * When the application initiates multiple subscriptions to this event, the last subscription is applied. This API 
     * uses an asynchronous callback to return the result.
     *
     * @param { 'stateChange' } type - Event type, which is **'stateChange'** in this case. This event can be triggered
     *     by both user operations and the system.
     * @param { function } callback - Callback used to return the state change event. [since 9 - 11]
     * @param { OnAVRecorderStateChangeHandler } callback - Callback used to return the state change event. [since 12]
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'stateChange', callback: OnAVRecorderStateChangeHandler): void;

    /**
     * Subscribes to AVRecorder errors. This event is used only for error prompt and does not require the user to stop 
     * recording control. If the [AVRecorderState]{@link @ohos.multimedia.media:media.AVRecorderState} is also switched 
     * to error, call [reset()]{@link media.AVRecorder.reset(callback: AsyncCallback<void>)} or [release()]
     * [release()]{@link media.AVRecorder.release(callback: AsyncCallback<void>)} to exit the recording. This API uses 
     * an asynchronous callback to return the result.
     * 
     * An application can subscribe to only one AVRecorder error event. When the application initiates multiple 
     * subscriptions to this event, the last subscription is applied.
     *
     * @param { 'error' } type - Event type, which is **'error'** in this case.<br>This event is triggered when an error
     *     occurs during recording.
     * @param { ErrorCallback } callback - Callback used to return the recording error event.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 5400101 - No memory.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400104 - Time out.
     * @throws { BusinessError } 5400105 - Service died.
     * @throws { BusinessError } 5400106 - Unsupported format.
     * @throws { BusinessError } 5400107 - Audio interrupted. [since 11]
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Unsubscribes from AVRecorder state changes. This API uses an asynchronous callback to return the result.
     *
     * @param { 'stateChange' } type - Event type, which is **'stateChange'** in this case. This event can be triggered
     *     by both user operations and the system.
     * @param { OnAVRecorderStateChangeHandler } callback - Callback used to return the state change event. If this
     *     parameter is specified, the subscription to the specified event with the specified callback is canceled. (The
     *     callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with
     *     all the callbacks are canceled.<br>This parameter is supported since API version 12. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    off(type: 'stateChange', callback?: OnAVRecorderStateChangeHandler): void;

    /**
     * Unsubscribes from AVRecorder errors. After the unsubscription, your application can no longer receive AVRecorder 
     * errors. This API uses an asynchronous callback to return the result.
     *
     * @param { 'error' } type - Event type, which is **'error'** in this case.<br>This event is triggered when an error
     *     occurs during recording.
     * @param { ErrorCallback } callback - Callback used to return the recording error event. If this parameter is
     *     specified, the subscription to the specified event with the specified callback is canceled. (The callback
     *     object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the
     *     callbacks are canceled.<br>This parameter is supported since API version 12. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Subscribes to audio capturer configuration changes. This API uses an asynchronous callback to return the result.
     *
     * @param { 'audioCapturerChange' } type - Event type, which is **'audioCapturerChange'** in this case.
     * @param { Callback<audio.AudioCapturerChangeInfo> } callback - Callback used to return the changed audio capturer
     *     configuration. If this parameter is specified, the subscription to the specified event with the specified
     *     callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to
     *     the specified event with all the callbacks are canceled.<br>This parameter is supported since API version 12
     *     . [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     */
    off(type: 'audioCapturerChange', callback?: Callback<audio.AudioCapturerChangeInfo>): void;

    /**
     * Unsubscribes from media asset callback events. This API uses an asynchronous callback to return the result.
     *
     * @param { 'photoAssetAvailable' } type - Event type, which is **'photoAssetAvailable'** in this case.
     * @param { Callback<photoAccessHelper.PhotoAsset> } callback - Callback used to return the PhotoAsset object
     *     corresponding to the resource file created by the system. If this parameter is specified, the subscription to
     *     the specified event with the specified callback is canceled. (The callback object cannot be an anonymous
     *     function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     */
    off(type: 'photoAssetAvailable', callback?: Callback<photoAccessHelper.PhotoAsset>): void;

    /**
     * Subscribes to audio capturer configuration changes. Any configuration change triggers the callback that
     * returns the entire configuration information.
     * 
     * When the application initiates multiple subscriptions to this event, the last subscription is applied.
     *
     * @param { Callback<audio.AudioCapturerChangeInfo> } callback - Callback used to return the entire configuration
     *     information about the audio capturer.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    onAudioCapturerChange(callback: Callback<audio.AudioCapturerChangeInfo>): void;

    /**
     * Subscribes to media asset callback events. When FileGenerationMode is used during media file creation,
     * the PhotoAsset object is called back to the application after the stop operation is complete.
     * 
     * When the application initiates multiple subscriptions to this event, the last subscription is applied.
     * The event is triggered when a photo asset is available.
     *
     * @param { Callback<photoAccessHelper.PhotoAsset> } callback - Callback used to return the
     *     **PhotoAsset** object corresponding to the resource file created by the system.
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    onPhotoAssetAvailable(callback: Callback<photoAccessHelper.PhotoAsset>): void;

    /**
     * Subscribes to AVRecorder state changes. An application can subscribe to only one AVRecorder state change event.
     * When the application initiates multiple subscriptions to this event, the last subscription is applied.
     * This event can be triggered by both user operations and the system.
     *
     * @param { OnAVRecorderStateChangeHandler } callback - Callback invoked when the event is triggered.
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    onStateChange(callback: OnAVRecorderStateChangeHandler): void;

    /**
     * Subscribes to AVRecorder errors. This event is used only for error prompt and does not require the user to
     * stop recording control. If the AVRecorderState is also switched to error, call reset() or release()
     * to exit the recording.
     * 
     * An application can subscribe to only one AVRecorder error event. When the application initiates multiple
     * subscriptions to this event, the last subscription is applied.
     * This event is triggered when an error occurs during recording.
     *
     * @param { ErrorCallback } callback - Callback invoked when the event is triggered.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 5400101 - No memory.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400104 - Time out.
     * @throws { BusinessError } 5400105 - Service died.
     * @throws { BusinessError } 5400106 - Unsupported format.
     * @throws { BusinessError } 5400107 - Audio interrupted.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from AVRecorder state changes.
     * This event can be triggered by both user operations and the system.
     *
     * @param { OnAVRecorderStateChangeHandler } [callback] - Callback invoked when the event is triggered.
     *     This parameter is supported since API version 12.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    offStateChange(callback?: OnAVRecorderStateChangeHandler): void;

    /**
     * Unsubscribes from AVRecorder errors. After the unsubscription,
     * your application can no longer receive AVRecorder errors.
     *
     * @param { ErrorCallback } [callback] - Callback invoked when the event is triggered.
     *     This parameter is supported since API version 12.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;

    /**
     * Subscribes to audio capturer configuration changes.
     *
     * @param { Callback<audio.AudioCapturerChangeInfo> } [callback] - Callback used to return the entire configuration
     *     information about the audio capturer.
     *     This parameter is supported since API version 12.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    offAudioCapturerChange(callback?: Callback<audio.AudioCapturerChangeInfo>): void;

    /**
     * Unsubscribes from media asset callback events.
     *
     * @param { Callback<photoAccessHelper.PhotoAsset> } [callback] - Callback used to return the **PhotoAsset** object
     *     corresponding to the resource file created by the system.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    offPhotoAssetAvailable(callback?: Callback<photoAccessHelper.PhotoAsset>): void;  
  }

  /**
   * Enumerates the audio encoding formats.
   *
   * @syscap SystemCapability.Multimedia.Media.AudioRecorder
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead media.CodecMimeType
   */
  enum AudioEncoder {
    /**
     * Default encoding format.
     * 
     * This API is defined but not implemented yet.
     * 
     * Note: It is supported since API version 6 and deprecated since API version 8. You are advised to use 
     * **AUDIO_AAC** in [CodecMimeType]{@link media.CodecMimeType} instead.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     */
    DEFAULT = 0,

    /**
     * AMR-NB.
     * 
     * This API is defined but not implemented yet.
     * 
     * Note: It is supported since API version 6 and deprecated since API version 8. You are advised to use 
     * **AUDIO_AMR_NB** in [CodecMimeType]{@link media.CodecMimeType} instead.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.CodecMimeType#AUDIO_AMR_NB
     */
    AMR_NB = 1,

    /**
     * Adaptive Multi Rate-Wide Band Speech Codec (AMR-WB).
     * 
     * This API is defined but not implemented yet.
     * 
     * Note: It is supported since API version 6 and deprecated since API version 8. You are advised to use 
     * **AUDIO_AMR_WB** in [CodecMimeType]{@link media.CodecMimeType} instead.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.CodecMimeType#AUDIO_AMR_WB
     */
    AMR_WB = 2,

    /**
     * Advanced Audio Coding Low Complexity (AAC-LC).
     * 
     * Note: It is supported since API version 6 and deprecated since API version 8. You are advised to use 
     * **AUDIO_AAC** in [CodecMimeType]{@link media.CodecMimeType} instead.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.CodecMimeType#AUDIO_AAC
     */
    AAC_LC = 3,

    /**
     * High-Efficiency Advanced Audio Coding (HE_AAC).
     * 
     * This API is defined but not implemented yet.
     * 
     * Note: It is supported since API version 6 and deprecated since API version 8. You are advised to use 
     * **AUDIO_AAC** in [CodecMimeType]{@link media.CodecMimeType} instead.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.CodecMimeType#AUDIO_AAC
     */
    HE_AAC = 4
  }

  /**
   * Enumerates the audio output formats.
   *
   * @syscap SystemCapability.Multimedia.Media.AudioRecorder
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead media.ContainerFormatType
   */
  enum AudioOutputFormat {
    /**
     * Default output format.
     * 
     * This API is defined but not implemented yet.
     * 
     * Note: It is supported since API version 6 and deprecated since API version 8. You are advised to select one from 
     * [ContainerFormatType]{@link media.ContainerFormatType} as required.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     */
    DEFAULT = 0,

    /**
     * MPEG-4.
     * 
     * Note: It is supported since API version 6 and deprecated since API version 8. You are advised to use 
     * **CFT_MPEG_4** in [ContainerFormatType]{@link media.ContainerFormatType} instead.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.ContainerFormatType#CFT_MPEG_4
     */
    MPEG_4 = 2,

    /**
     * AMR_NB.
     * 
     * This API is defined but not implemented yet.
     * 
     * Note: It is supported since API version 6 and deprecated since API version 8. You are advised to use **CFT_AMR** 
     * in [ContainerFormatType]{@link media.ContainerFormatType} instead. For the encoding format, use **AUDIO_AMR_NB** 
     * in [CodecMimeType]{@link media.CodecMimeType}.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.ContainerFormatType#CFT_AMR
     */
    AMR_NB = 3,

    /**
     * AMR_WB.
     * 
     * This API is defined but not implemented yet.
     * 
     * Note: It is supported since API version 6 and deprecated since API version 8. You are advised to use **CFT_AMR** 
     * in [ContainerFormatType]{@link media.ContainerFormatType} instead. For the encoding format, use **AUDIO_AMR_WB** 
     * in [CodecMimeType]{@link media.CodecMimeType}.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.ContainerFormatType#CFT_AMR
     */
    AMR_WB = 4,

    /**
     * Audio Data Transport Stream (ADTS), which is a transport stream format of AAC-based audio.
     * 
     * Note: It is supported since API version 6 and deprecated since API version 8. You are advised to use **CFT_AAC** 
     * in [ContainerFormatType]{@link media.ContainerFormatType} instead.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.ContainerFormatType#CFT_AAC
     */
    AAC_ADTS = 6
  }

  /**
   * Provides the geographical location definitions for media resources.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @since 6 dynamic
   * @since 23 static
   */
  interface Location {
    /**
     * Latitude.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @since 6 dynamic
     * @since 23 static
     */
    latitude: double;

    /**
     * Longitude.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @since 6 dynamic
     * @since 23 static
     */
    longitude: double;
  }
  /**
   * Set configures of a watermark to AVRecorder. The position starts at top left corner.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface WatermarkConfig {
    /**
     * Offset of the watermark to the top line of pixel.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    top: int;
    /**
     * Offset of the watermark to the left line of pixel.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    left: int;
  }

  /**
   * Provides the audio recorder configuration definitions.
   *
   * @syscap SystemCapability.Multimedia.Media.AudioRecorder
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimedia.media/media.AVRecorderConfig
   */
  interface AudioRecorderConfig {
    /**
     * Audio encoding format. The default value is DEFAULT, it will be deprecated after API8.
     * use "audioEncoderMime" instead.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.AudioRecorderConfig.audioEncoderMime
     */
    audioEncoder?: AudioEncoder;

    /**
     * Audio encoding bit rate, in bit/s.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVRecorderProfile#audioBitrate
     */
    audioEncodeBitRate?: number;

    /**
     * Audio sampling rate, in Hz.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVRecorderProfile#audioSampleRate
     */
    audioSampleRate?: number;

    /**
     * Number of audio channels.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVRecorderProfile#audioChannels
     */
    numberOfChannels?: number;

    /**
     * Audio output format. The default value is DEFAULT, it will be deprecated after API8.
     * it will be replaced with "fileFormat".
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.AudioRecorderConfig.fileFormat
     */
    format?: AudioOutputFormat;

    /**
     * Audio output uri.support two kind of uri now.
     * format like: scheme + "://" + "context".
     * file:  file://path
     * fd:    fd://fd
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVRecorderConfig#url
     */
    uri: string;

    /**
     * Geographical location information.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVMetadata#location
     */
    location?: Location;

    /**
     * audio encoding format MIME. it used to replace audioEncoder.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVRecorderProfile#audioCodec
     */
    audioEncoderMime?: CodecMimeType;
    /**
     * output file format. see @ContainerFormatType , it used to replace "format".
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVRecorderProfile#fileFormat
     */
    fileFormat?: ContainerFormatType;
  }

  /**
   * AudioRecorder is a class for audio recording management. It provides APIs to record audio. Before calling any API 
   * in AudioRecorder, you must use [createAudioRecorder()]{@link @ohos.multimedia.media:media.createAudioRecorder} to 
   * create an AudioRecorder instance.
   *
   * @syscap SystemCapability.Multimedia.Media.AudioRecorder
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.multimedia.media:media
   */
  interface AudioRecorder {
    /**
     * Prepares for recording.
     *
     * @permission ohos.permission.MICROPHONE
     * @param { AudioRecorderConfig } config - Audio recording parameters, including the audio output URI, encoding
     *     format, sample rate, audio channel count, and output format.
     * @throws { BusinessError } 201 - permission denied. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)
     */
    prepare(config: AudioRecorderConfig): void;

    /**
     * Starts audio recording. This API can be called only after the **'prepare'** event is triggered.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVRecorder.start(callback: AsyncCallback<void>)
     */
    start(): void;

    /**
     * Pauses audio recording. This API can be called only after the **'start'** event is triggered.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVRecorder.pause(callback: AsyncCallback<void>)
     */
    pause(): void;

    /**
     * Resumes audio recording. This API can be called only after the **'pause'** event is triggered.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVRecorder.resume(callback: AsyncCallback<void>)
     */
    resume(): void;

    /**
     * Stops audio recording.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVRecorder.stop(callback: AsyncCallback<void>)
     */
    stop(): void;

    /**
     * Releases the audio recording resources.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVRecorder.release(callback: AsyncCallback<void>)
     */
    release(): void;

    /**
     * Resets audio recording.
     * 
     * Before resetting audio recording, you must call **stop()** to stop recording. After audio recording is reset, you
     * must call **prepare()** to set the recording configurations for another recording.
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVRecorder.reset(callback: AsyncCallback<void>)
     */
    reset(): void;

    /**
     * Subscribes to the audio recording events.
     *
     * @param { 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset' } type - Event type. The
     *     following events are supported: 'prepare'|'start'|  'pause' | 'resume' |'stop'|'release'|'reset'<br>- '
     *     prepare': triggered when the **prepare()** API is called and the audio recording parameters are set.<br>- '
     *     start': triggered when the **start()** API is called and audio recording starts.<br>- 'pause': triggered when
     *     the **pause()** API is called and audio recording is paused.<br>- 'resume': triggered when the **resume()**
     *     API is called and audio recording is resumed.<br>- 'stop': triggered when the **stop()** API is called and
     *     audio recording stops.<br>- 'release': triggered when the **release()** API is called and the recording
     *     resources are released.<br>- 'reset': triggered when the **reset()** API is called and audio recording is
     *     reset.
     * @param { function } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVRecorder.on(type: 'stateChange', callback: OnAVRecorderStateChangeHandler)
     */
    on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void;

    /**
     * Subscribes to audio recording error events. After an error event is reported, you must handle the event and exit 
     * the recording.
     *
     * @param { 'error' } type - Event type, which is **'error'** in this case.<br>This event is triggered when an error
     *     occurs during audio recording.
     * @param { ErrorCallback } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVRecorder.on(type: 'error', callback: ErrorCallback)
     */
    on(type: 'error', callback: ErrorCallback): void;
  }

    /**
     * The maintenance of this interface has been stopped since version api 9. Please use AVRecorderState.
     * Describes video recorder states.
     *
     * @unionmember { 'idle' } Idle state. The video recorder is created but not initialized.
     * @unionmember { 'prepared' } Prepared state. The video recorder is ready to record.
     * @unionmember { 'playing' } Playing state. The video recorder is recording.
     * @unionmember { 'paused' } Paused state. The video recorder is paused.
     * @unionmember { 'stopped' } Stopped state. The video recorder is stopped.
     * @unionmember { 'error' } Error state. An error occurred.
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */

  type VideoRecordState = 'idle' | 'prepared' | 'playing' | 'paused' | 'stopped' | 'error';

  /**
   * The maintenance of this interface has been stopped since version api 9. Please use AVRecorder.
   * Manages and record video. Before calling an VideoRecorder method, you must use createVideoRecorder()
   * to create an VideoRecorder instance.
   *
   * @syscap SystemCapability.Multimedia.Media.VideoRecorder
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface VideoRecorder {
    /**
     * Prepares for recording.
     *
     * @permission ohos.permission.MICROPHONE
     * @param { VideoRecorderConfig } config - Recording parameters.
     * @param { AsyncCallback<void> } callback - A callback instance used to return when prepare completed.
     * @throws { BusinessError } 201 - Permission denied. Return by callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    prepare(config: VideoRecorderConfig, callback: AsyncCallback<void>): void;
    /**
     * Prepares for recording.
     *
     * @permission ohos.permission.MICROPHONE
     * @param { VideoRecorderConfig } config - Recording parameters.
     * @returns { Promise<void> } A Promise instance used to return when prepare completed.
     * @throws { BusinessError } 201 - Permission denied. Return by promise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    prepare(config: VideoRecorderConfig): Promise<void>;
    /**
     * get input surface.it must be called between prepare completed and start.
     *
     * @param { AsyncCallback<string> } callback - Callback used to return the input surface id in string.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @throws { BusinessError } 5400103 - I/O error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     */
    getInputSurface(callback: AsyncCallback<string>): void;

    /**
     * get input surface.it must be called between prepare completed and start.
     *
     * @param { AsyncCallback<string | undefined> } callback - Callback used to return the input surface id in string.
     * @throws { BusinessError } 202 - Not System App.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @throws { BusinessError } 5400103 - I/O error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 23 static
     */
    getInputSurface(callback: AsyncCallback<string | undefined>): void;

    /**
     * get input surface. it must be called between prepare completed and start.
     *
     * @returns { Promise<string> } A Promise instance used to return the input surface id in string.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - I/O error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     */
    getInputSurface(): Promise<string>;

    /**
     * get input surface. it must be called between prepare completed and start.
     *
     * @returns { Promise<string | undefined> } A Promise instance used to return the input surface id in string.
     * @throws { BusinessError } 202 - Not System App.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - I/O error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 23 static
     */
    getInputSurface(): Promise<string | undefined>;

    /**
     * Starts video recording.
     *
     * @param { AsyncCallback<void> } callback - A callback instance used to return when start completed.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @throws { BusinessError } 5400103 - I/O error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    start(callback: AsyncCallback<void>): void;
    /**
     * Starts video recording.
     *
     * @returns { Promise<void> } A Promise instance used to return when start completed.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - I/O error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    start(): Promise<void>;
    /**
     * Pauses video recording.
     *
     * @param { AsyncCallback<void> } callback - A callback instance used to return when pause completed.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @throws { BusinessError } 5400103 - I/O error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pause(callback: AsyncCallback<void>): void;
    /**
     * Pauses video recording.
     *
     * @returns { Promise<void> } A Promise instance used to return when pause completed.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - I/O error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pause(): Promise<void>;
    /**
     * Resumes video recording.
     *
     * @param { AsyncCallback<void> } callback - A callback instance used to return when resume completed.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @throws { BusinessError } 5400103 - I/O error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    resume(callback: AsyncCallback<void>): void;
    /**
     * Resumes video recording.
     *
     * @returns { Promise<void> } A Promise instance used to return when resume completed.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - I/O error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    resume(): Promise<void>;
    /**
     * Stops video recording.
     *
     * @param { AsyncCallback<void>  } callback A callback instance used to return when stop completed.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @throws { BusinessError } 5400103 - I/O error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * Stops video recording.
     *
     * @returns { Promise<void> } A Promise instance used to return when stop completed.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - I/O error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;
    /**
     * Releases resources used for video recording.
     *
     * @param { AsyncCallback<void> } callback - A callback instance used to return when release completed.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases resources used for video recording.
     *
     * @returns { Promise<void> } A Promise instance used to return when release completed.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
    /**
     * Resets video recording.
     * Before resetting video recording, you must call stop() to stop recording. After video recording is reset,
     * you must call prepare() to set the recording configurations for another recording.
     *
     * @param { AsyncCallback<void> } callback - A callback instance used to return when reset completed.
     * @throws { BusinessError } 5400103 - I/O error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    reset(callback: AsyncCallback<void>): void;
    /**
     * Resets video recording.
     * Before resetting video recording, you must call stop() to stop recording. After video recording is reset,
     * you must call prepare() to set the recording configurations for another recording.
     *
     * @returns { Promise<void> } A Promise instance used to return when reset completed.
     * @throws { BusinessError } 5400103 - I/O error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    reset(): Promise<void>;

    /**
     * Listens for video recording error events.
     *
     * @param { 'error' } type - Type of the video recording error event to listen for.
     * @param { ErrorCallback } callback - Callback used to listen for the video recording error event.
     * @throws { BusinessError } 5400103 - I/O error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @throws { BusinessError } 201 - permission denied. [since 12]
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Listens for video recording error events.
     *
     * @param { ErrorCallback } callback - Callback used to listen for the video recording error event.
     * @throws { BusinessError } 201 - permission denied.
     * @throws { BusinessError } 202 - Not System App.
     * @throws { BusinessError } 5400103 - I/O error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * video recorder state.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly state: VideoRecordState;
  }

  /**
   * Describes the video playback state. You can obtain the state through the **state** property.
   *
   * @unionmember { 'idle' } The video player is idle.
   * @unionmember { 'prepared' } Video playback is being prepared.
   * @unionmember { 'playing' } Video playback is in progress.
   * @unionmember { 'paused' } Video playback is paused.
   * @unionmember { 'stopped' } Video playback is stopped.
   * @unionmember { 'error' } Video playback is in the error state.
   * @syscap SystemCapability.Multimedia.Media.VideoPlayer
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead media.AVPlayerState
   */

  type VideoPlayState = 'idle' | 'prepared' | 'playing' | 'paused' | 'stopped' | 'error';

  /**
   * Enumerates the video playback speeds, which can be passed in the **setSpeed** API.
   *
   * @syscap SystemCapability.Multimedia.Media.VideoPlayer
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum PlaybackSpeed {
    /**
     * Plays the video at 0.75 times the normal speed.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_0_75_X = 0,
    /**
     * Plays the video at the normal speed.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_1_00_X = 1,
    /**
     * Plays the video at 1.25 times the normal speed.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_1_25_X = 2,
    /**
     * Plays the video at 1.75 times the normal speed.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_1_75_X = 3,
    /**
     * Plays the video at 2.00 times the normal speed.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_2_00_X = 4,
    /**
     * Plays the video at 0.50 times the normal speed.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_0_50_X = 5,
    /**
     * Plays the video at 1.50 times the normal speed.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_1_50_X = 6,
    /**
     * Plays the video at 3.00 times the normal speed.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_3_00_X = 7,
    /**
     * Plays the video at 0.25 times the normal speed.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_0_25_X = 8,
    /**
     * Plays the video at 0.125 times the normal speed.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_0_125_X = 9,
  }

  /**
   * VideoPlayer is a class for video playback management. It provides APIs to manage and play videos. Before calling 
   * any API in VideoPlayer, you must use 
   * [createVideoPlayer()]{@link @ohos.multimedia.media:media.createVideoPlayer(callback: AsyncCallback<VideoPlayer>)} 
   * to create a VideoPlayer instance.
   *
   * @syscap SystemCapability.Multimedia.Media.VideoPlayer
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.multimedia.media:media
   */
  interface VideoPlayer {
    /**
     * Sets a surface ID. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > - **SetDisplaySurface** must be called between the URL setting and the calling of **prepare**. A surface must 
     * > be set for video streams without audio. Otherwise, the calling of **prepare** fails.
     *
     * @param {string} surfaceId - Surface ID, which is obtained from the **XComponent**. For details about how to
     *     obtain it, see [XComponent]{@link ./@internal/component/ets/xcomponent}.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the setting is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead null
     */
    setDisplaySurface(surfaceId: string, callback: AsyncCallback<void>): void;
    /**
     * Sets a surface ID. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > - **SetDisplaySurface** must be called between the URL setting and the calling of **prepare**. A surface must 
     * > be set for video streams without audio. Otherwise, the calling of **prepare** fails.
     *
     * @param {string} surfaceId - Surface ID, which is obtained from the **XComponent**. For details about how to
     *     obtain it, see [XComponent]{@link ./@internal/component/ets/xcomponent}.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead null
     */
    setDisplaySurface(surfaceId: string): Promise<void>;
    /**
     * Prepares for video playback. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.prepare(callback: AsyncCallback<void>)
     */
    prepare(callback: AsyncCallback<void>): void;
    /**
     * Prepares for video playback. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.prepare()
     */
    prepare(): Promise<void>;
    /**
     * Starts video playback. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.play(callback: AsyncCallback<void>)
     */
    play(callback: AsyncCallback<void>): void;
    /**
     * Starts video playback. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.play()
     */
    play(): Promise<void>;
    /**
     * Pauses video playback. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.pause(callback: AsyncCallback<void>)
     */
    pause(callback: AsyncCallback<void>): void;
    /**
     * Pauses video playback. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.pause()
     */
    pause(): Promise<void>;
    /**
     * Stops video playback. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.stop(callback: AsyncCallback<void>)
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * Stops video playback. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.stop()
     */
    stop(): Promise<void>;
    /**
     * Resets video playback. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)
     */
    reset(callback: AsyncCallback<void>): void;
    /**
     * Resets video playback. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.reset()
     */
    reset(): Promise<void>;
    /**
     * Seeks to the specified playback position. The previous key frame at the specified position is played. This API 
     * uses an asynchronous callback to return the result.
     *
     * @param { number } timeMs - Position to seek to, in ms. The value range is [0, duration].
     * @param { AsyncCallback<number> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the new playback position; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.seek
     */
    seek(timeMs: number, callback: AsyncCallback<number>): void;
    /**
     * Seeks to the specified playback position. This API uses an asynchronous callback to return the result.
     *
     * @param { number } timeMs - Position to seek to, in ms. The value range is [0, duration].
     * @param { SeekMode } mode - Seek mode.
     * @param { AsyncCallback<number> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the new playback position; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.seek
     */
    seek(timeMs: number, mode: SeekMode, callback: AsyncCallback<number>): void;
    /**
     * Seeks to the specified playback position. If **mode** is not specified, the previous key frame at the specified 
     * position is played. This API uses a promise to return the result.
     *
     * @param { number } timeMs - Position to seek to, in ms. The value range is [0, duration].
     * @param { SeekMode } mode - Seek mode based on the video I frame. The default value is **SEEK_PREV_SYNC**.
     * @returns { Promise<number> } Promise used to return the playback position, in ms.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.seek
     */
    seek(timeMs: number, mode?: SeekMode): Promise<number>;
    /**
     * Sets the volume. This API uses an asynchronous callback to return the result.
     *
     * @param { number } vol - Relative volume. The value ranges from 0.00 to 1.00. The value **1.00** indicates the
     *     maximum volume (100%).
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the setting is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.setVolume
     */
    setVolume(vol: number, callback: AsyncCallback<void>): void;
    /**
     * Sets the volume. This API uses a promise to return the result.
     *
     * @param { number } vol - Relative volume. The value ranges from 0.00 to 1.00. The value **1.00** indicates the
     *     maximum volume (100%).
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.setVolume
     */
    setVolume(vol: number): Promise<void>;
    /**
     * Releases the video playback resources. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>)
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * Releases the video playback resources. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.release()
     */
    release(): Promise<void>;
    /**
     * Obtains the video track information. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<MediaDescription>> } callback - Callback used to return the result. If the operation
     *     is successful, **err** is **undefined** and **data** is the MediaDescription array obtained; otherwise,
     *     **err** is an error object.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>)
     */
    getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void;

    /**
     * Obtains the video track information. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<MediaDescription>> } Promise used to return the MediaDescription array that holds the
     *     video track information.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.getTrackDescription()
     */
    getTrackDescription(): Promise<Array<MediaDescription>>;

    /**
     * Video URL. The video formats MP4, MPEG-TS, and MKV are supported.
     * 
     * **Example of supported URLs**:
     * 
     * 1. FD: fd://xx
     * 
     * ![](docroot://reference/apis-media-kit/figures/en-us_image_url.png)
     * 
     * 2. HTTP: http://xx
     * 3. HTTPS: https://xx
     * 4. HLS: http://xx or https://xx
     * 5. File type: file://xx
     * 
     * **NOTE**
     * 
     * WebM is no longer supported since API version 11.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#url
     */
    url: string;

    /**
     * Description of a video file. This property is required when video assets of an application are continuously 
     * stored in a file.
     * 
     * Assume that a music file that stores continuous music assets consists of the following:
     * 
     * Video 1 (address offset: 0, byte length: 100)
     * 
     * Video 2 (address offset: 101; byte length: 50)
     * 
     * Video 3 (address offset: 151, byte length: 150)
     * 
     * 1. To play video 1: AVFileDescriptor { fd = resource handle; offset = 0; length = 100; }
     * 2. To play video 2: AVFileDescriptor { fd = resource handle; offset = 101; length = 50; }
     * 3. To play video 3: AVFileDescriptor { fd = resource handle; offset = 151; length = 150; }
     * 
     * To play an independent video file, use **src=fd://xx**.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#fdSrc
     */
    fdSrc: AVFileDescriptor;

    /**
     * Whether to loop video playback. **true** to loop, **false** otherwise.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#loop
     */
    loop: boolean;

    /**
     * Current video playback position, in ms.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#currentTime
     */
    readonly currentTime: number;

    /**
     * Video duration, in ms. The value **-1** indicates the live mode.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#duration
     */
    readonly duration: number;

    /**
     * Video playback state.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#state
     */
    readonly state: VideoPlayState;

    /**
     * Video width, in px.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#width
     */
    readonly width: number;

    /**
     * Video height, in px.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#height
     */
    readonly height: number;

    /**
     * Audio interruption mode.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#audioInterruptMode
     */
    audioInterruptMode?: audio.InterruptMode;

    /**
     * Video scale type. The default value is **VIDEO_SCALE_TYPE_FIT**.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#videoScaleType
     */
    videoScaleType?: VideoScaleType;

    /**
     * Sets the playback speed. This API uses an asynchronous callback to return the result.
     *
     * @param { number } speed - Video playback speed. For details, see
     *     [PlaybackSpeed]{@link @ohos.multimedia.media:media.PlaybackSpeed}.
     * @param { AsyncCallback<number> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the playback speed; otherwise, **err** is an error object.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.setSpeed
     */
    setSpeed(speed: number, callback: AsyncCallback<number>): void;
    /**
     * Sets the playback speed. This API uses a promise to return the result.
     *
     * @param { number } speed - Video playback speed. For details, see
     *     [PlaybackSpeed]{@link @ohos.multimedia.media:media.PlaybackSpeed}.
     * @returns { Promise<number> } Promise used to return the playback speed. For details, see
     *     [PlaybackSpeed]{@link @ohos.multimedia.media:media.PlaybackSpeed}.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.setSpeed
     */
    setSpeed(speed: number): Promise<number>;

    /**
     * Subscribes to the video playback completion event.
     *
     * @param { 'playbackCompleted' } type - Event type, which is **'playbackCompleted'** in this case.
     * @param { Callback<void> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)
     */
    on(type: 'playbackCompleted', callback: Callback<void>): void;

    /**
     * Subscribes to the video buffering update event. This API works only under online playback.
     *
     * @param { 'bufferingUpdate' } type - Event type, which is **'bufferingUpdate'** in this case.
     * @param { function } callback - Callback invoked when the event is triggered.<br>The value of
     *     [BufferingInfoType]{@link @ohos.multimedia.media:media.BufferingInfoType} is fixed at **0**.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'bufferingUpdate', callback: OnBufferingUpdateHandler)
     */
    on(type: 'bufferingUpdate', callback: (infoType: BufferingInfoType, value: number) => void): void;

    /**
     * Subscribes to the frame rendering start event.
     *
     * @param { 'startRenderFrame' } type - Event type, which is **'startRenderFrame'** in this case.
     * @param { Callback<void> } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'startRenderFrame', callback: Callback<void>)
     */
    on(type: 'startRenderFrame', callback: Callback<void>): void;

    /**
     * Subscribes to the video width and height change event.
     *
     * @param { 'videoSizeChanged' } type - Event type, which is **'videoSizeChanged'** in this case.
     * @param { function } callback - Callback invoked when the event is triggered. **width** indicates the video width,
     *     and **height** indicates the video height.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'videoSizeChange', callback: OnVideoSizeChangeHandler)
     */
    on(type: 'videoSizeChanged', callback: (width: number, height: number) => void): void;

    /**
     * Subscribes to the audio interruption event. For details, see 
     * [audio.InterruptEvent]{@link @ohos.multimedia.audio:audio.InterruptEvent}.
     *
     * @param { 'audioInterrupt' } type - Event type, which is **'audioInterrupt'** in this case.
     * @param { function } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>)
     */
    on(type: 'audioInterrupt', callback: (info: audio.InterruptEvent) => void): void;

    /**
     * Subscribes to video playback error events. After an error event is reported, you must handle the event and exit 
     * the playback.
     *
     * @param { 'error' } type - Event type, which is **'error'** in this case.<br>This event is triggered when an error
     *     occurs during video playback.
     * @param { ErrorCallback } callback - Callback invoked when the event is triggered.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'error', callback: ErrorCallback)
     */
    on(type: 'error', callback: ErrorCallback): void;
  }

  /**
   * Enumerates the video scale modes.
   *
   * @syscap SystemCapability.Multimedia.Media.VideoPlayer
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum VideoScaleType {
    /**
     * Default mode. The video will be stretched to fit the window.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    VIDEO_SCALE_TYPE_FIT = 0,

    /**
     * Maintains the video's aspect ratio, and scales to fill the shortest side of the window, with the longer side 
     * cropped.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    VIDEO_SCALE_TYPE_FIT_CROP = 1,

    /**
     * Maintains the video's aspect ratio, and scales to fill the longer side of the window, with the shorter side 
     * centered and unfilled parts left black.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    VIDEO_SCALE_TYPE_SCALED_ASPECT = 2
  }

  /**
   * Enumerates the container format types (CFTs).
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum ContainerFormatType {
    /**
     * Video container format MP4.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 22]
     * @since 8 dynamic
     * @since 23 static
     */
    CFT_MPEG_4 = 'mp4',

    /**
     * Audio container format M4A.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    CFT_MPEG_4A = 'm4a',

    /**
     * Audio container format MP3.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    CFT_MP3 = 'mp3',
    /**
     * Audio container format WAV.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    CFT_WAV = 'wav',
    /**
     * Audio container format AMR.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 18 dynamic
     * @since 23 static
     */
    CFT_AMR = 'amr',
    /**
     * Audio container format AAC. The default format is ADTS frame header.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 20 dynamic
     * @since 23 static
     */
    CFT_AAC = 'aac'
  }

  /**
   * Enumerates the media types.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  enum MediaType {
    /**
     * The media type is not supported.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    MEDIA_TYPE_UNSUPPORTED = -1,    
    /**
     * Media.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MEDIA_TYPE_AUD = 0,
    /**
     * Video.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MEDIA_TYPE_VID = 1,
    /**
     * Subtitle.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MEDIA_TYPE_SUBTITLE = 2,
    /**
     * Attachment information (for example, an embedded external file).
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    MEDIA_TYPE_ATTACHMENT = 3,
    /**
     * Data.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    MEDIA_TYPE_DATA = 4,
    /**
     * Metadata with a timestamp.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    MEDIA_TYPE_TIMED_METADATA = 5,
    /**
     * Auxiliary (track) information.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    MEDIA_TYPE_AUXILIARY = 6
  }

  /**
   * Enumerates the media description keys.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  enum MediaDescriptionKey {
    /**
     * Track index. The corresponding key value type is number.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_TRACK_INDEX = 'track_index',

    /**
     * Track type. The corresponding key value type is number. For details, see [MediaType]{@link media.MediaType}.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_TRACK_TYPE = 'track_type',

    /**
     * Codec MIME type. The corresponding key value type is string.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_CODEC_MIME = 'codec_mime',

    /**
     * Media duration. The corresponding key value type is number, measured in ms.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_DURATION = 'duration',

    /**
     * Bit rate. The corresponding key value type is number, measured in bit/s. If the value is **undefined** or **0**, 
     * the bit rate is abnormal.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_BITRATE = 'bitrate',

    /**
     * Video width. The corresponding key value type is number, measured in px.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_WIDTH = 'width',

    /**
     * Video height. The corresponding key value type is number, measured in px.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_HEIGHT = 'height',

    /**
     * Video frame rate. The corresponding key value type is number, measured in frames per 100 seconds.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_FRAME_RATE = 'frame_rate',

    /**
     * Audio channel count. The corresponding key value type is number.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_AUD_CHANNEL_COUNT = 'channel_count',

    /**
     * Sample rate. The corresponding key value type is number, measured in Hz.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_AUD_SAMPLE_RATE = 'sample_rate',

    /**
     * Bit depth. The corresponding key value type is number, measured in bits.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MD_KEY_AUD_SAMPLE_DEPTH = 'sample_depth',

    /**
     * Subtitle language. The corresponding key value type is string.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MD_KEY_LANGUAGE = 'language',

    /**
     * Track name. The corresponding key value type is string.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MD_KEY_TRACK_NAME = 'track_name',

    /**
     * Codec track type. The corresponding key value type is string.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MD_KEY_HDR_TYPE = 'hdr_type',

    /**
     * Original video width. The corresponding key value type is number, measured in px.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    MD_KEY_ORIGINAL_WIDTH = 'original_width',

    /**
     * Original video height. The corresponding key value type is number, measured in px.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    MD_KEY_ORIGINAL_HEIGHT = 'original_height',

    /**
     * MIME type of the track. The corresponding key value type is string. For audio and video tracks, the value is the 
     * same as that of **MD_KEY_CODEC_MIME**.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    MD_KEY_MIME_TYPE = 'mime_type',
  
    /**
     * Reference relationships between this track and other tracks. The corresponding key value type is string, with 
     * values separated by commas (,).
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    MD_KEY_REFERENCE_TRACK_IDS = 'ref_track_ids',

    /**
     * Auxiliary type of this track when it acts as a reference track. The corresponding key value type is string.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    MD_KEY_TRACK_REFERENCE_TYPE = 'track_ref_type',
  }

  /**
   * Provides the video recorder profile definitions.
   *
   * @syscap SystemCapability.Multimedia.Media.VideoRecorder
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface VideoRecorderProfile {
    /**
     * Indicates the audio bit rate, in bit/s.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly audioBitrate: int;

    /**
     * Indicates the number of audio channels.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly audioChannels: int;

    /**
     * Indicates the audio encoding format.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly audioCodec: CodecMimeType;

    /**
     * Indicates the audio sampling rate, in Hz.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly audioSampleRate: int;

    /**
     * Indicates the output file format.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly fileFormat: ContainerFormatType;

    /**
     * Indicates the video bit rate, in bit/s.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly videoBitrate: int;

    /**
     * Indicates the video encoding format.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly videoCodec: CodecMimeType;

    /**
     * Indicates the video width, in px.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly videoFrameWidth: int;

    /**
     * Indicates the video height, in px.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly videoFrameHeight: int;

    /**
     * Indicates the video frame rate, in fps.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly videoFrameRate: int;
  }

  /**
   * Enumerates the audio source types for video recording.
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum AudioSourceType {
    /**
     * Default audio input source.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO_SOURCE_TYPE_DEFAULT = 0,
    /**
     * Microphone audio input source.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO_SOURCE_TYPE_MIC = 1,
    /**
     * Audio source in speech recognition scenarios.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_SOURCE_TYPE_VOICE_RECOGNITION = 2,

    /**
     * Voice communication source.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_SOURCE_TYPE_VOICE_COMMUNICATION = 7,
    /**
     * Voice message source.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_SOURCE_TYPE_VOICE_MESSAGE = 10,
    /**
     * Audio source in camera recording scenarios.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_SOURCE_TYPE_CAMCORDER = 13
  }

  /**
   * Enumerates the video source types for video recording.
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum VideoSourceType {
    /**
     * The input surface carries raw data.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    VIDEO_SOURCE_TYPE_SURFACE_YUV = 0,
    /**
     * The input surface carries ES data.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    VIDEO_SOURCE_TYPE_SURFACE_ES = 1,
  }

  /**
   * Enumerates meta source type for recorder.
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum MetaSourceType {
    /**
     * Maker info for video.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    VIDEO_MAKER_INFO = 0
  }

  /**
   * Enumerates the modes for creating media files.
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @since 12 dynamic
   * @since 23 static
   */
  enum FileGenerationMode {
    /**
     * The application creates a media file in the sandbox.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     * @since 23 static
     */
    APP_CREATE = 0,
    /**
     * The system creates a media file. Currently, this mode takes effect only in camera recording scenarios. The URL 
     * set by the application is ignored.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO_CREATE_CAMERA_SCENE = 1,
  }

  /**
   * Provides the video recorder configuration definitions.
   *
   * @syscap SystemCapability.Multimedia.Media.VideoRecorder
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface VideoRecorderConfig {
    /**
     * audio source type, details see @AudioSourceType .
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    audioSourceType?: AudioSourceType;
    /**
     * video source type, details see @VideoSourceType .
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    videoSourceType: VideoSourceType;
    /**
     * video recorder profile, can get by "getVideoRecorderProfile", details see @VideoRecorderProfile .=
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    profile: VideoRecorderProfile;
    /**
     * video output uri.support two kind of uri now.
     * format like: scheme + "://" + "context".
     * fd:    fd://fd
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    url: string;
    /**
     * Sets the video rotation angle in output file, and for the file to playback, in degrees. mp4 support.
     * the range of rotation angle should be {0, 90, 180, 270}, default is 0.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    rotation?: int;
    /**
     * geographical location information.
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    location?: Location;
  }

  /**
   * Describes the information about an encoder.
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @since 11 dynamic
   * @since 23 static
   */
  interface EncoderInfo {
    /**
     * MIME type of the encoder.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    mimeType: CodecMimeType;

    /**
     * Encoder type. The value **audio** means an audio encoder, and **video** means a video encoder.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    type: string;

    /**
     * Bit rate range of the encoder, with the minimum and maximum bit rates specified, in bit/s.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    bitRate?: Range;

    /**
     * Video frame rate range, with the minimum and maximum frame rates specified, in fps.
     * This parameter is available only for video encoders.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    frameRate?: Range;

    /**
     * Video frame width range, with the minimum and maximum widths specified, in px.
     * This parameter is available only for video encoders.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    width?: Range;

    /**
     * Video frame height range, with the minimum and maximum heights specified, in px.
     * This parameter is available only for video encoders.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    height?: Range;

    /**
     * Number of audio channels for the audio capturer, with the minimum and maximum numbers of audio channels
     * specified.
     * This parameter is available only for audio encoders.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    channels?: Range;

    /**
     * Audio sampling rate, including all available audio sampling rates, in Hz. The value depends on the encoder type,
     * and this parameter is available only for audio encoders.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    sampleRate?: Array<int>;
  }

  /**
   * Provides Range with lower and upper limit.
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @since 11 dynamic
   * @since 23 static
   */
  interface Range {
    /**
     * Minimum value.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    min: int;

    /**
     * Maximum value.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    max: int;
  }

  /**
   * Enumerates the supported Advanced Audio Coding (AAC) formats.
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  enum AacProfile {
    /**
     * Standard AAC Low Complexity profile.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AAC_LC = 0,

    /**
     * Standard AAC High Efficiency profile.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AAC_HE = 1,

    /**
     * AAC High Efficiency Version 2 profile (also known as HE-AAC v2).
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AAC_HE_V2 = 2,
  }

  /**
   * Describes the audio and video recording profile.
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AVRecorderProfile {
    /**
     * Audio encoding bit rate, in bit/s. This parameter is mandatory for audio recording.<br>Supported bit rate ranges:
     * <br>- Range [32000 - 500000] for the AAC encoding format.<br>- Range [64000] for the G.711 μ-law encoding format.
     * <br>- Range [8000, 16000, 32000, 40000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 160000, 192000,
     * 224000, 256000, 320000] for the MP3 encoding format.<br>When the MP3 encoding format is used,
     * the mapping between the sampling rate and bit rate is as follows:<br>- When the sampling rate is lower than
     * 16 kHZ, the bit rate range is [8000 - 64000].<br>- When the sampling rate ranges from 16 kHz to 32 kHz,
     * the bit rate range is [8000 - 160000].<br>- When the sampling rate is greater than 32 kHz, the bit rate range
     * is [32000 - 320000].<br>- Range [4750, 5150, 5900, 6700, 7400, 7950, 10200, 12200] for
     * the AMR-NB encoding format.<br>- Range [6600, 8850, 12650, 14250, 15850, 18250, 19850, 23050, 23850] for the
     * AMR-WB encoding format.<br>**Atomic service API**: This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    audioBitrate?: int;

    /**
     * Number of audio channels. This parameter is mandatory for audio recording.<br>- Range [1 - 8] for the
     * AAC encoding format.<br>- Range [1] for the G.711 μ-law encoding format.<br>- Range [1 - 2] for the MP3 encoding
     * format.<br>- Range [1] for the AMR-NB and AMR-WB encoding formats.<br>**Atomic service API**: This API can be
     * used in atomic services since API version 12.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    audioChannels?: int;

    /**
     * Audio encoding format. This parameter is mandatory for audio recording. Currently, AUDIO_AAC, AUDIO_MP3,
     * AUDIO_G711MU, AUDIO_AMR_NB, and AUDIO_AMR_WB are supported.<br>**Atomic service API**: This API can be used in
     * atomic services since API version 12.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    audioCodec?: CodecMimeType;

    /**
     * AAC profile for AAC audio encoder. If not set, use AAC_LC profile as default.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    aacProfile?: AacProfile;

    /**
     * Audio sampling rate, in Hz. This parameter is mandatory for audio recording.<br>Supported sampling rate ranges:
     * <br>- Range [8000, 11025, 12000, 16000, 22050, 24000, 32000, 44100, 48000, 64000, 88200, 96000] for the AAC
     * encoding format.<br>- Range [8000] for the G.711 μ-law encoding format.<br>- Range [8000, 11025, 12000, 16000,
     * 22050, 24000, 32000, 44100, 48000] for the MP3 encoding format.<br>- Range [8000] for the AMR-NB encoding format.
     * <br>- Range [16000] for the AMR-WB encoding format.<br>Variable bit rate. The bit rate is for reference only.
     * <br>**Atomic service API**: This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    audioSampleRate?: int;

    /**
     * Container format of a file. This parameter is mandatory. Currently, the MP4, M4A, MP3, WAV, and AMR container
     * formats are supported. The AUDIO_MP3 encoding format cannot be used in the MP4 container format.<br>**Atomic
     * service API**: This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    fileFormat: ContainerFormatType;

    /**
     * Video encoding bit rate, in bit/s. This parameter is mandatory for video recording. The value range is
     * [10000 - 100000000], in bit/s.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    videoBitrate?: int;

    /**
     * Video encoding format. This parameter is mandatory for video recording. Currently, VIDEO_AVC is supported.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    videoCodec?: CodecMimeType;

    /**
     * Width of a video frame, in px. This parameter is mandatory for video recording. The value range is [176 - 4096].
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    videoFrameWidth?: int;

    /**
     * Height of a video frame, in px. This parameter is mandatory for video recording. The value range is [144 - 4096].
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    videoFrameHeight?: int;

    /**
     * Video frame rate, in fps. This parameter is mandatory for video recording. The value range is [1 - 60].
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    videoFrameRate?: int;

    /**
     * HDR encoding. This parameter is optional for video recording. The default value is **false**, and there is no
     * requirement on the encoding format. When **isHdr** is set to **true**, the encoding format must be **video/hevc**.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    isHdr?: boolean;

    /**
     * Whether temporal layered encoding is supported. This parameter is optional for video recording. The default value
     * is **false**. If this parameter is set to **true**, some frames in the video output streams can be skipped
     * without being encoded.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    enableTemporalScale?: boolean;

    /**
     * Whether to enable video encoding policy to quality stable encoding.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    enableStableQualityMode?: boolean
 
    /**
     * Indicates whether enable B Frame. Default is disabled.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 20 dynamic
     * @since 23 static
     */
    enableBFrame?: boolean;
  }

  /**
   * Describes the audio and video recording parameters.
   * 
   * The **audioSourceType** and **videoSourceType** parameters are used to distinguish audio-only recording,
   * video-only recording, and audio and video recording. For audio-only recording, set only **audioSourceType**.
   * For video-only recording, set only **videoSourceType**. For audio and video recording, set both **audioSourceType**
   * and **videoSourceType**.
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AVRecorderConfig {
    /**
     * Type of the audio source to record. This parameter is mandatory for audio recording.<br>**Atomic service API**:
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    audioSourceType?: AudioSourceType;
    /**
     * Type of the video source to record. This parameter is mandatory for video recording.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    videoSourceType?: VideoSourceType;
    /**
     * Meta source types, details see @MetaSourceType .
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    metaSourceTypes?: Array<MetaSourceType>;
    /**
     * Recording profile. This parameter is mandatory.<br>**Atomic service API**: This API can be used in atomic
     * services since API version 12.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    profile: AVRecorderProfile;
    /**
     * Recording output URL: fd://xx (fd number).<br>This parameter is mandatory.<br>**Atomic service API**:
     * This API can be used in atomic services since API version 12.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    url: string;

    /**
     * Mode for creating the file, which is used together with on('photoAssetAvailable').
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     * @since 23 static
     */
    fileGenerationMode?: FileGenerationMode;
    /**
     * Rotation angle of the recorded video, in degrees. The value can be 0 (default), 90, 180, or 270 for MP4 videos. 
     * <br>This API is supported since API version 6 and deprecated since API version 12. You are advised to use.
     * **AVMetadata.videoOrientation** instead. If both parameters are set, **AVMetadata.videoOrientation** is used.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.media/media.AVMetadata#videoOrientation
     */
    rotation?: number;
    /**
     * Geographical location of the recorded video. By default, the geographical location information is not recorded.
     * <br>This API is supported since API version 6 and deprecated since API version 12. You are advised to use
     * **AVMetadata.location** instead. If both parameters are set, **AVMetadata.location** is used.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.media/media.AVMetadata#location
     */
    location?: Location;
    /**
     * Metadata. For details, see @AVMetadata.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     * @since 23 static
     */
    metadata?: AVMetadata;
    /**
     * Maximum recording duration, in seconds. The value range is [1, 2^31-1]. If an invalid value is provided,
     * it is reset to the maximum allowed duration. Once the recording reaches the specified duration,
     * it stops automatically and notifies via the **stateChange** callback that the recording has stopped:
     * AVRecorderState = 'stopped', StateChangeReason = BACKGROUND.
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 18 dynamic
     * @since 23 static
     */
    maxDuration?: int;
  }

  /**
   * Provides the container definition for media description key-value pairs.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  interface MediaDescription {
    /**
     * key:value pair, key see @MediaDescriptionKey .
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    [key: string]: Object;
  }

  /**
   * Provides the container definition for media description key-value pairs.
   * 
   * The media description consists of key-value pairs where keys reference @MediaDescriptionKey.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform
   * @since 23 static
   */
  type MediaDescription = Record<string, Object>;

  /**
   * Enumerates the video playback seek modes, which can be passed in the **seek** API.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  enum SeekMode {
    /**
     * Seeks to the next key frame at the specified position. You are advised to use this value for the rewind 
     * operation.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    SEEK_NEXT_SYNC = 0,
    /**
     * Seeks to the previous key frame at the specified position. You are advised to use this value for the fast-forward
     * operation.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    SEEK_PREV_SYNC = 1,
    /**
     * Seeks to the frame closest to the specified position. You are advised to use this value for accurate seek.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SEEK_CLOSEST = 2,
    /**
     * Offers a smooth and fluid visual experience for seeking. Applications can use a progress bar component to 
     * continuously invoke the **seek** method, and the AVPlayer will update the video frames smoothly in response to 
     * these calls.
     * 
     * Applications can call 
     * [isSeekContinuousSupported]{@link @ohos.multimedia.media:media.AVPlayer.isSeekContinuousSupported} to check 
     * whether the video source supports this seeking mode.
     * 
     * If the video source does not support this mode, calling **seek** will result in an 
     * **AVERR_SEEK_CONTINUOUS_UNSUPPORTED** error (see [AVErrorCode]{@link media.AVErrorCode}), and the smoothness of 
     * frame updates will be compromised.
     * 
     * This seek mode does not trigger the 
     * [on('seekDone')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'seekDone', callback: Callback<int>)} 
     * event.
     * 
     * To exit this seeking mode, applications must call **seek(-1, SeekMode.SEEK_CONTINUOUS)** to end the seeking 
     * process.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    SEEK_CONTINUOUS = 3
  }

  /**
   * Enumerates the **selectTrack** modes for video playback.
   * 
   * SwitchMode can be passed as a parameter through the **selectTrack** method. Currently, both DASH and HLS video 
   * tracks support this extended parameter. (HLS video tracks support this extended parameter since API version 24.)
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum SwitchMode {
    /**
     * Smooth playback is ensured after the switching. This mode has a delay, that is, the switching does not take 
     * effect immediately.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SMOOTH = 0,
    /**
     * The playback starts from the start position of the current segment after the switching. In this mode, the 
     * switching takes effect immediately and repeated playback may occur.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SEGMENT = 1,
    /**
     * The playback starts from the frame closest to the current playback time. In this mode, the switching takes effect
     * immediately, and the playback is suspended for 3s to 5s and then resumed.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    CLOSEST = 2,
  }

  /**
   * Enumerates the codec MIME types.
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum CodecMimeType {
    /**
     * Video in H.263 format.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    VIDEO_H263 = 'video/h263',
    /**
     * Video in AVC format.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 22]
     * @since 8 dynamic
     * @since 23 static
     */
    VIDEO_AVC = 'video/avc',
    /**
     * Video in MPEG-2 format.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    VIDEO_MPEG2 = 'video/mpeg2',
    /**
     * Video in MPEG-4 format.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    VIDEO_MPEG4 = 'video/mp4v-es',

    /**
     * Video in VP8 format.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    VIDEO_VP8 = 'video/x-vnd.on2.vp8',

    /**
     * Audio in MP4A-LATM format.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    AUDIO_AAC = 'audio/mp4a-latm',

    /**
     * Audio in Vorbis format.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    AUDIO_VORBIS = 'audio/vorbis',

    /**
     * Audio in FLAC format.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    AUDIO_FLAC = 'audio/flac',

    /**
     * Video in H.265 format.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    VIDEO_HEVC = 'video/hevc',
    /**
     * Audio in MPEG format.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_MP3 = 'audio/mpeg',

    /**
     * Audio in G.711 μ-law format.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_G711MU = 'audio/g711mu',

    /**
     * Audio in AMR-NB format.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 18 dynamic
     * @since 23 static
     */
    AUDIO_AMR_NB = 'audio/3gpp',

    /**
     * Audio in AMR-WB format.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 18 dynamic
     * @since 23 static
     */
    AUDIO_AMR_WB = 'audio/amr-wb'
  }

  /**
   * Enumerates the encoding and container formats used during screen capture.
   *
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @since 12 dynamic
   * @since 23 static
   */
  enum AVScreenCaptureRecordPreset {
    /**
     * The H.264 video encoding format, AAC audio encoding format, and MP4 container format are used.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREEN_RECORD_PRESET_H264_AAC_MP4 = 0,
    /**
     * The H.265 video encoding format, AAC audio encoding format, and MP4 container format are used.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREEN_RECORD_PRESET_H265_AAC_MP4 = 1,
  }

  /**
   * Enumerates the video fill modes during screen capture.
   *
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @since 18 dynamic
   * @since 23 static
   */
  enum AVScreenCaptureFillMode {
    /**
     * Keeps the original aspect ratio, matching the aspect ratio of the physical screen.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 18 dynamic
     * @since 23 static
     */
    PRESERVE_ASPECT_RATIO = 0,
    /**
     * Stretches the image to fit the specified dimensions.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 18 dynamic
     * @since 23 static
     */
    SCALE_TO_FILL = 1,
  }

  /**
   * Enumerates the screen capture states used in callbacks.
   *
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @since 12 dynamic
   * @since 23 static
   */
  enum AVScreenCaptureStateCode {
    /**
     * Screen capture is started.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_STARTED = 0,
    /**
     * Screen capture is canceled.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_CANCELED = 1,
    /**
     * Screen capture is manually stopped by the user.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_STOPPED_BY_USER = 2,
    /**
     * Screen capture is interrupted by another screen capture.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_INTERRUPTED_BY_OTHER = 3,
    /**
     * Screen capture is interrupted by an incoming call.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_STOPPED_BY_CALL = 4,
    /**
     * The microphone is unavailable during screen capture.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_MIC_UNAVAILABLE = 5,
    /**
     * The microphone is muted by the user.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_MIC_MUTED_BY_USER = 6,
    /**
     * The microphone is unmuted by the user.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_MIC_UNMUTED_BY_USER = 7,
    /**
     * The system enters a privacy page during screen capture.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_ENTER_PRIVATE_SCENE = 8,
    /**
     * The system exits a privacy page during screen capture.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_EXIT_PRIVATE_SCENE = 9,
    /**
     * Screen capture is interrupted by system user switchover.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_STOPPED_BY_USER_SWITCHES = 10,
    /**
     * Screen capture paused by user.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCREENCAPTURE_STATE_PAUSED_BY_USER = 11,
    /**
     * Screen capture resumed by user.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCREENCAPTURE_STATE_RESUMED_BY_USER = 12,
    /**
     * Screen capture paused by app.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCREENCAPTURE_STATE_PAUSED_BY_APP = 13,
    /**
     * Screen capture resumed by app.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCREENCAPTURE_STATE_RESUMED_BY_APP = 14
  }

  /**
   * Provides the media AVScreenCaptureStrategy definition.
   *
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @since 20 dynamic
   * @since 23 static
   */
  interface AVScreenCaptureStrategy {
    /**
     * Defines whether to enable device-level content recording
     *
     * @default false
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    enableDeviceLevelCapture?: boolean;

    /**
     * Allows starting or maintaining screen capture during a call
     *
     * @default {false} [Required if provided]
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 20 dynamic
     * @since 23 static
     */
    keepCaptureDuringCall?: boolean;

    /**
     * Indicates whether to enable B-frame encoding, which is used to reduce the size of the recorded file.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 20 dynamic
     * @since 23 static
     */
    enableBFrame?: boolean;

    /**
     * Set the fill mode for screen capture when a privacy window exists.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    privacyMaskMode?: int;

    /**
     * Enable pausing the screen capture. The default value is false.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enablePause?: boolean;
  }

  /**
   * Defines the screen capture parameters.
   *
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @since 12 dynamic
   * @since 23 static
   */
  interface AVScreenCaptureRecordConfig {
    /**
     * FD of the file output.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    fd: int;
    /**
     * Video width, in px. The default value varies according to the display in use.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    frameWidth?: int;
    /**
     * Video height, in px. The default value varies according to the display in use.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    frameHeight?: int;
    /**
     * Video bit rate, in bit/s. The default value is **10000000**.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    videoBitrate?: int;
    /**
     * Audio sampling rate, in Hz. This value is used for both internal capture
     * and external capture (using microphones), in Hz. Only **48000** (default value) and **16000** are supported.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    audioSampleRate?: int;
    /**
     * Number of audio channels. This value is used for both internal capture and external capture (using microphones).
     * Only **1** and **2** (default) are supported.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    audioChannelCount?: int;
    /**
     * Audio bit rate, in bit/s. This value is used for both internal capture and external capture (using microphones).
     * The default value is **96000**.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    audioBitrate?: int;
    /**
     * Encoding and container format used. The default value is **SCREEN_RECORD_PRESET_H264_AAC_MP4**.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    preset?: AVScreenCaptureRecordPreset;
    /**
     * ID of the display used for screen capture. By default, the main screen is captured.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 15 dynamic
     * @since 23 static
     */
    displayId?: int;
    /**
     * Video fill mode during screen capture.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 18 dynamic
     * @since 23 static
     */
    fillMode?: AVScreenCaptureFillMode;
    /**
     * Screen Capture Policy Configuration Fields
     *
     * @default {default value of the property} [Required if provided]
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 20 dynamic
     * @since 23 static
     */
    strategy?: AVScreenCaptureStrategy;
  }

  /**
  * Enumerates the display mode for the screen capture picker.
  *
  * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
  * @since 22 dynamic
  * @since 23 static
  */
	enum PickerMode {
    /**
     * Displays only a list of windows.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 22 dynamic
     * @since 23 static
     */
    WINDOW_ONLY = 0,

    /**
     * Displays only a list of screens.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 22 dynamic
     * @since 23 static
     */
    SCREEN_ONLY = 1,

    /**
     * Displays both screens and windows.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 22 dynamic
     * @since 23 static
     */
    SCREEN_AND_WINDOW = 2,
        
    /**
     * Show application options only.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    APP_ONLY = 3,
 
    /**
     * Show both window and application options.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    WINDOW_AND_APP = 4,
     
    /**
     * Show both screen and application options.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCREEN_AND_APP = 5,
 
    /**
     * Show screen, window, and application options.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCREEN_WINDOW_AND_APP = 6
  }

  /**
   * AVScreenCaptureRecorder is a class for screen capture management. It provides APIs for screen capture. Before 
   * calling any API in AVScreenCaptureRecorder, you must use 
   * [createAVScreenCaptureRecorder()]{@link @ohos.multimedia.media:media.createAVScreenCaptureRecorder()} to create an 
   * AVScreenCaptureRecorder instance.
   *
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @since 12 dynamic
   * @since 23 static
   */
  interface AVScreenCaptureRecorder {
    /**
     * Initializes screen capture and sets screen capture parameters. This API uses a promise to return the result.
     *
     * @param { AVScreenCaptureRecordConfig } config - Screen capture parameters to set.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3. Parameter verification failed. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    init(config: AVScreenCaptureRecordConfig): Promise<void>;

    /**
     * Starts screen recording. Before using this API, you must call 
     * [init]{@link @ohos.multimedia.media:media.AVScreenCaptureRecorder.init}. This API uses a promise to return the 
     * result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    startRecording(): Promise<void>;

    /**
     * Stops screen recording. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    stopRecording(): Promise<void>;

    /**
     * Pause screen capture. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not be permitted. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    pauseRecording(): Promise<void>;

    /**
     * Resume screen capture. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not be permitted. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    resumeRecording(): Promise<void>;

    /**
     * During screen capture, the application can exempt its privacy windows from security purposes. This API uses a 
     * promise to return the result.
     * 
     * For example, if a user enters a password in this application during screen capture, the application will not 
     * display a black screen.
     *
     * @param { Array<int> } windowIDs - IDs of windows that require privacy exemption, including the main window IDs
     *     and subwindow IDs. For details about how to obtain window properties, see
     *     [getWindowProperties](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getwindowproperties9).
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    skipPrivacyMode(windowIDs: Array<int>): Promise<void>;

    /**
     * Sets the display mode of the picker. The setting takes effect the next time the picker is displayed. This API 
     * uses a promise to return the result.
     *
     * @param { PickerMode } pickerMode - Picker mode.<br>It defines the content type displayed in the picker. The
     *     options are as follows:<br>- **SCREEN_ONLY**: Displays only a list of screens.<br>- **WINDOW_ONLY**: Displays
     *     only a list of windows.<br>- **SCREEN_AND_WINDOW**: Displays both screens and windows. It is the default
     *     value.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 22 dynamic
     * @since 23 static
     */
    setPickerMode(pickerMode: PickerMode): Promise<void>;

    /**
     * Sets the list of windows to be hidden in the picker. The setting takes effect the next time the picker is 
     * displayed. This API uses a promise to return the result.
     *
     * @param { Array<int> } excludedWindows - List of windows to be hidden in the picker. For details about how to
     *     obtain window properties, see
     *     [getWindowProperties](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getwindowproperties9).
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 22 dynamic
     * @since 23 static
     */
    excludePickerWindows(excludedWindows: Array<int>): Promise<void>;

    /**
     * Displays the Picker once more after the screen capture starts, allowing for dynamic updates to the recording 
     * source, such as changing the window or screen being recorded. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > - The ongoing capture process remains uninterrupted while updating the recording source.
     * >
     * > - Following the dynamic update of the recording source through the Picker, the capture proceeds with the newly 
     * > selected source.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 22 dynamic
     * @since 23 static
     */
    presentPicker(): Promise<void>;

    /**
     * Enables or disables the microphone. This API uses a promise to return the result.
     *
     * @param { boolean } enable - Whether to enable the microphone. **true** to enable, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    setMicEnabled(enable: boolean): Promise<void>;

    /**
     * Releases this AVScreenCaptureRecorder instance. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * add a watermark for the AVScreenCaptureRecorder. This API uses a promise to return the result.
     * App can add up to 5 watermarks.
     * This API can be called only before calling startRecording().
     *
     * @param { image.PixelMap } watermark - : Watermark image.
     * @param { WatermarkConfiguration } config - : Configuration of the watermark.
     * @returns { Promise<int> } Promise that returns the watermark id.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @throws { BusinessError } 5400108 - The parameter check failed, parameter value out of range.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    addWatermark(watermark: image.PixelMap, config: WatermarkConfiguration): Promise<int>;
	
    /**
     * Subscribes to screen capture state changes. An application can subscribe to only one screen capture state change 
     * event. When the application initiates multiple subscriptions to this event, the last subscription is applied.
     *
     * @param { 'stateChange' } type - Event type, which is **'stateChange'** in this case.
     * @param { Callback<AVScreenCaptureStateCode> } callback - Callback invoked when the event is triggered.
     *     [AVScreenCaptureStateCode]{@link @ohos.multimedia.media:media.AVScreenCaptureStateCode} indicates the new
     *     state.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     */
    on(type: 'stateChange', callback: Callback<AVScreenCaptureStateCode>): void;

    /**
     * Subscribes to AVScreenCaptureRecorder errors. You can handle the errors based on the application logic. An 
     * application can subscribe to only one AVScreenCaptureRecorder error event. When the application initiates 
     * multiple subscriptions to this event, the last subscription is applied.
     *
     * @param { 'error' } type - Event type, which is **'error'** in this case.
     * @param { ErrorCallback } callback - Callback invoked when the event is triggered.
     * @throws { BusinessError } 201 - permission denied.
     * @throws { BusinessError } 5400103 - IO error. Return by ErrorCallback.
     * @throws { BusinessError } 5400105 - Service died. Return by ErrorCallback.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Unsubscribes from screen capture state changes. You can specify a callback to cancel the specified subscription.
     *
     * @param { 'stateChange' } type - Event type, which is **'stateChange'** in this case.
     * @param { Callback<AVScreenCaptureStateCode> } callback - Callback used for unsubscription.
     *     [AVScreenCaptureStateCode]{@link @ohos.multimedia.media:media.AVScreenCaptureStateCode} indicates the new
     *     state. If this parameter is not specified, the last subscription is canceled.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     */
    off(type: 'stateChange', callback?: Callback<AVScreenCaptureStateCode>): void;

    /**
     * Unsubscribes from AVScreenCaptureRecorder errors. You can specify a callback to cancel the specified 
     * subscription.
     *
     * @param { 'error' } type - Event type, which is **'error'** in this case.
     * @param { ErrorCallback } callback - Callback used for unsubscription. If this parameter is not specified, the
     *     last subscription is canceled.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * Subscribes to screen capture state changes. An application can subscribe to only one screen capture
     * state change event. When the application initiates multiple subscriptions to this event,
     * the last subscription is applied.
     *
     * @param { Callback<AVScreenCaptureStateCode> } callback - Callback invoked when the event is triggered.
     *     AVScreenCaptureStateCode indicates the new state.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 23 static
     */
    onStateChange(callback: Callback<AVScreenCaptureStateCode>): void;

    /**
     * Subscribes to AVScreenCaptureRecorder errors. You can handle the errors based on the application logic.
     * An application can subscribe to only one AVScreenCaptureRecorder error event.
     * When the application initiates multiple subscriptions to this event, the last subscription is applied.
     *
     * @param { ErrorCallback } callback - Callback invoked when the event is triggered.
     * @throws { BusinessError } 201 - permission denied.
     * @throws { BusinessError } 5400103 - IO error. Return by ErrorCallback.
     * @throws { BusinessError } 5400105 - Service died. Return by ErrorCallback.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unsubscribes from screen capture state changes. You can specify a callback to cancel the specified subscription.
     *
     * @param { Callback<AVScreenCaptureStateCode> } [callback] - Callback used for unsubscription.
     *     AVScreenCaptureStateCode indicates the new state. If this parameter is not specified,
     *     the last subscription is canceled.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 23 static
     */
    offStateChange(callback?: Callback<AVScreenCaptureStateCode>): void;

    /**
     * Unsubscribes from AVScreenCaptureRecorder errors. You can specify a callback to cancel
     * the specified subscription.
     *
     * @param { ErrorCallback } [callback] - Callback used for unsubscription. If this parameter is not specified,
     *     the last subscription is canceled.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 23 static
     */
    offError(callback?: ErrorCallback): void;
  }

  /**
   * Describes the video transcoding parameters.
   *
   * @syscap SystemCapability.Multimedia.Media.AVTranscoder
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface AVTranscoderConfig {
    /**
     * Bitrate of the output audio, in bit/s. The value range is [1-500000]. The default value is 48 kbit/s.
     *
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    audioBitrate?: int;

    /**
     * Encoding format of the output audio. Currently, only AAC is supported. The default value is **AAC**.
     *
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    audioCodec?: CodecMimeType;

    /**
     * Container format of the output video file. Currently, only MP4 is supported.
     *
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fileFormat: ContainerFormatType;

    /**
     * Bitrate of the output video, in bit/s. The default bitrate depends on the resolution of the output video.
     * The default bitrate is 1 Mbit/s for the resolution in the range [240p, 480P],
     * 2 Mbit/s for the range (480P,720P], 4 Mbit/s for the range (720P,1080P], and 8 Mbit/s for 1080p or higher.
     *
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    videoBitrate?: int;

    /**
     * Encoding format of the output video. Currently, only AVC and HEVC are supported.
     * If the source video is in HEVC format, the default value is **HEVC**. Otherwise, the default value is **AVC**.
     *
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    videoCodec?: CodecMimeType;

    /**
     * Width of the output video frame, in px. The value range is [240 - 3840].
     * The default value is the width of the source video frame.
     *
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    videoFrameWidth?: int;
 
    /**
     * Height of the output video frame, in px. The value range is [240 - 2160].
     * The default value is the height of the source video frame.
     *
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    videoFrameHeight?: int;

    /**
     * Indicates whether to enable B Frame Encoding for reduce file size.
     *
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 20 dynamic
     * @since 23 static
     */
    enableBFrame?: boolean;
  }

  /**
   * AVTranscoder is a transcoding management class. It provides APIs to transcode videos. Before calling any API in 
   * AVTranscoder, you must use [createAVTranscoder()]{@link @ohos.multimedia.media:media.createAVTranscoder()} to 
   * create an AVTranscoder instance.
   * 
   * For details about the AVTranscoder demo, see 
   * [Using AVTranscoder for Transcoding](docroot://media/media/using-avtranscoder-for-transcodering.md).
   *
   * @syscap SystemCapability.Multimedia.Media.AVTranscoder
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface AVTranscoder {
    /**
     * Source media file descriptor, which specifies the data source.
     * 
     * There is a media file that stores continuous assets, the address offset is 0, and the byte length is 100. Its 
     * file descriptor is **AVFileDescriptor { fd = resourceHandle; offset = 0; length = 100; }**.
     * 
     * **NOTE**
     * 
     * - After the resource handle (FD) is transferred to an AVTranscoder instance, do not use the resource handle to 
     * perform other read and write operations, including but not limited to transferring this handle to other AVPlayer,
     * AVMetadataExtractor, AVImageGenerator, or AVTranscoder instance.
     * - Competition occurs when multiple AVTranscoders use the same resource handle to read and write files at the same
     * time, resulting in errors in obtaining data.
     *
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fdSrc: AVFileDescriptor;

    /**
     * Destination media file descriptor, which specifies the data source. After creating an AVTranscoder instance, you 
     * must set both **fdSrc** and **fdDst**.
     * 
     * **NOTE**
     * 
     * - After the resource handle (FD) is transferred to an AVTranscoder instance, do not use the resource handle to 
     * perform other read and write operations, including but not limited to transferring this handle to other AVPlayer,
     * AVMetadataExtractor, AVImageGenerator, or AVTranscoder instance.
     * - Competition occurs when multiple AVTranscoders use the same resource handle to read and write files at the same
     * time, resulting in errors in obtaining data.
     *
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fdDst: int;

    /**
     * Sets video transcoding parameters. This API uses a promise to return the result.
     *
     * @param {  AVTranscoderConfig  } config - Video transcoding parameters to set.<!--RP1--><!--RP1End-->
     * @returns {  Promise<void>  } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @throws { BusinessError } 5400106 - Unsupported format. Returned by promise.
     * @throws { BusinessError } 401 - The parameter check failed. Return by promise. [since 22]
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    prepare(config: AVTranscoderConfig): Promise<void>;

    /**
     * Starts video transcoding. This API uses a promise to return the result.
     * 
     * This API can be called only after the [prepare()]{@link media.AVTranscoder.prepare} API is called.
     *
     * @returns {  Promise<void>  } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    start(): Promise<void>;

    /**
     * Pauses video transcoding. This API uses a promise to return the result.
     * 
     * This API can be called only after the [start()]{@link media.AVTranscoder.start} API is called. You can call 
     * [resume()]{@link media.AVTranscoder.resume} to resume transcoding.
     *
     * @returns {  Promise<void>  } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    pause(): Promise<void>;

    /**
     * Resumes video transcoding. This API uses a promise to return the result.
     * 
     * This API can be called only after the [pause()]{@link media.AVTranscoder.pause} API is called.
     *
     * @returns {  Promise<void>  } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    resume(): Promise<void>;

    /**
     * Cancels video transcoding. This API uses a promise to return the result.
     * 
     * This API can be called only after the [prepare()]{@link media.AVTranscoder.prepare}, 
     * [start()]{@link media.AVTranscoder.start}, [pause()]{@link media.AVTranscoder.pause}, or 
     * [resume()]{@link media.AVTranscoder.resume} API is called.
     *
     * @returns {  Promise<void>  } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    cancel(): Promise<void>;

    /**
     * Releases video transcoding resources. This API uses a promise to return the result.
     * 
     * After the resources are released, you can no longer perform any operation on the AVTranscoder instance.
     *
     * @returns {  Promise<void>  } Promise that returns no value.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * Subscribes to the event indicating that transcoding is complete. An application can subscribe to only one 
     * transcoding progress update event. When the application initiates multiple subscriptions to this event, the last 
     * subscription is applied. This API uses an asynchronous callback to return the result.
     * 
     * When this event is reported, the current transcoding operation is complete. You need to call 
     * [release()]{@link media.AVTranscoder.release} to exit the transcoding.
     *
     * @param { 'complete' } type - Event type, which is **'complete'** in this case. This event is triggered by the
     *     system during transcoding.
     * @param { Callback<void> } callback - Callback used to return the event callback method.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    on(type:'complete', callback: Callback<void>):void;

    /**
     * Subscribes to AVTranscoder errors. If this event is reported, call [release()]{@link media.AVTranscoder.release} 
     * to exit the transcoding. This API uses an asynchronous callback to return the result.
     * 
     * An application can subscribe to only one AVTranscoder error event. When the application initiates multiple 
     * subscriptions to this event, the last subscription is applied.
     *
     * @param { 'error' } type - Event type, which is **'error'** in this case.<br>This event is triggered when an error
     *     occurs during recording.
     * @param { ErrorCallback } callback - Callback invoked when the event is triggered.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 5400101 - No memory.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400104 - Time out.
     * @throws { BusinessError } 5400105 - Service died.
     * @throws { BusinessError } 5400106 - Unsupported format.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    on(type:'error', callback: ErrorCallback):void;

    /**
     * Subscribes to transcoding progress updates. An application can subscribe to only one transcoding progress update 
     * event. When the application initiates multiple subscriptions to this event, the last subscription is applied. 
     * This API uses an asynchronous callback to return the result.
     *
     * @param { 'progressUpdate' } type - Event type, which is **'progressUpdate'** in this case. This event is
     *     triggered by the system during transcoding.
     * @param { Callback<int> } callback - Callback used to return the progress update event. The **number** parameter
     *     in the function indicates the current transcoding progress, in percentage.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    on(type:'progressUpdate', callback: Callback<int>):void;

    /**
     * Unsubscribes from the event indicating that transcoding is complete.
     *
     * @param { 'complete' } type - Event type, which is **'complete'** in this case.
     * @param { Callback<void> } callback - Callback that has been registered to listen for transcoding completion
     *     events.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    off(type:'complete', callback?: Callback<void>):void;

    /**
     * Unsubscribes from AVTranscoder errors. After the unsubscription, your application can no longer receive 
     * AVTranscoder errors.
     *
     * @param { 'error' } type - Event type, which is **'error'** in this case.<br>This event is triggered when an error
     *     occurs during transcoding.
     * @param { ErrorCallback } callback - Callback that has been registered to listen for AVTranscoder errors.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    off(type:'error', callback?: ErrorCallback):void;

    /**
     * Unsubscribes from transcoding progress updates.
     *
     * @param { 'progressUpdate' } type - Event type, which is **'progressUpdate'** in this case.
     * @param { Callback<int> } callback - Called that has been registered to listen for progress updates. You are
     *     advised to use the default value because only the last registered callback is retained in the current
     *     callback mechanism.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    off(type:'progressUpdate', callback?: Callback<int>):void;

    /**
     * Subscribes to the event indicating that transcoding is complete.
     * An application can subscribe to only one transcoding completion event.
     * When the application initiates multiple subscriptions to this event, the last subscription is applied.
     * 
     * When this event is reported, the current transcoding operation is complete.
     * You need to call [release()]{@link AVTranscoder.release} to exit the transcoding.
     *
     * @param { Callback<void> } callback - Callback that has been registered to listen for
     *     transcoding completion events.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @since 23 static
     */
    onComplete(callback: Callback<void>):void;

    /**
     * Subscribes to AVTranscoder errors. If this event is reported, call [release()]{@link AVTranscoder.release}
     * to exit the transcoding.
     * 
     * An application can subscribe to only one AVTranscoder error event.
     * When the application initiates multiple subscriptions to this event, the last subscription is applied.
     *
     * @param { ErrorCallback } callback - Callback invoked when the event is triggered.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 5400101 - No memory.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400104 - Time out.
     * @throws { BusinessError } 5400105 - Service died.
     * @throws { BusinessError } 5400106 - Unsupported format.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @since 23 static
     */
    onError(callback: ErrorCallback):void;

    /**
     * Subscribes to transcoding progress updates. An application can subscribe to only one transcoding progress update
     * event. When the application initiates multiple subscriptions to this event, the last subscription is applied.
     *
     * @param { Callback<int> } callback - Callback invoked when the event is triggered.
     *     **progress** is a number that indicates the current transcoding progress, in percentage.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @since 23 static
     */
    onProgressUpdate(callback: Callback<int>):void;

    /**
     * Unsubscribes from the event indicating that transcoding is complete.
     * This event can be triggered by both user operations and the system.
     *
     * @param { Callback<void> } [callback] - Callback that has been registered to listen for
     *     transcoding completion events.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @since 23 static
     */
    offComplete(callback?: Callback<void>):void;

    /**
     * Unsubscribes from AVTranscoder errors. After the unsubscription, your application can no longer
     * receive AVTranscoder errors.
     * This event is triggered when an error occurs during transcoding.
     *
     * @param { ErrorCallback } [callback] - Callback that has been registered to listen for AVTranscoder errors.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @since 23 static
     */
    offError(callback?: ErrorCallback):void;

    /**
     * Unsubscribes from transcoding progress updates.
     * This event can be triggered by both user operations and the system.
     *
     * @param { Callback<int> } [callback] - Called that has been registered to listen for progress updates.
     *     You are advised to use the default value because only the last registered callback is retained in
     *     the current allback mechanism.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @since 23 static
     */
    offProgressUpdate(callback?: Callback<int>):void;

    /**
     * add a watermark for the AVTranscoder. This API uses a promise to return the result.
     * App can add up to 5 watermarks.
     * This API can be called only before the prepared state.
     *
     * @param { image.PixelMap } watermark - : Watermark image.
     * @param { WatermarkConfiguration } config - : Configuration of the watermark.
     * @returns { Promise<int> } Promise that returns the watermark id.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @throws { BusinessError } 5400108 - The parameter check failed, parameter value out of range.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    addWatermark(watermark: image.PixelMap, config: WatermarkConfiguration): Promise<int>;
  }

  /**
   * Set configuration of a watermark. The position starts at top left corner.
   *
   * @typedef WatermarkConfiguration
   * @syscap SystemCapability.Multimedia.Media.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface WatermarkConfiguration {
    /**
     * Offset of the watermark to the top line of pixel
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    top: int;
    /**
     * Offset of the watermark to the left line of pixel
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    left: int;
    /**
     * target width of the watermark in pixel
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    width?: int;
    /**
     * target height of the watermark in pixel
     * The value range is all integers.
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    height?: int;
  }

  /**
   * Enumerates the states available for the system screen recorder.
   *
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  enum ScreenCaptureEvent {
    /**
     * The system screen recorder starts screen capture.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STARTED = 0,
    /**
     * The system screen recorder stops screen capture.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STOPPED = 1,
    /**
     * The system screen recorder died.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @systemapi
     * @since 23 dynamic&static
     */
    SCREENCAPTURE_DIED = 2
  }

  /**
   * A class that provides APIs to query and monitor the system screen recorder status. Before calling any API,
   * you must use getScreenCaptureMonitor() to obtain a ScreenCaptureMonitor instance.
   *
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface ScreenCaptureMonitor {
    /**
     * Subscribes to state change events of the system screen recorder. From the ScreenCaptureEvent event reported,
     * you can determine whether the system screen recorder is working.
     *
     * @param { 'systemScreenRecorder' } type - Event type, which is **'systemScreenRecorder'** in this case.
     *     This event is triggered when the state of the system screen recorder changes.
     * @param { Callback<ScreenCaptureEvent> } callback - Callback invoked when the event is triggered,
     *     where ScreenCaptureEvent indicates the new state.
     * @throws { BusinessError } 202 - Not System App.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @systemapi
     * @since 18 dynamic
     */
    on(type: 'systemScreenRecorder', callback: Callback<ScreenCaptureEvent>): void;

    /**
     * Subscribes to state change events of the system screen recorder. From the ScreenCaptureEvent event reported,
     * you can determine whether the system screen recorder is working.
     * This event is triggered when the state of the system screen recorder changes.
     *
     * @param { Callback<ScreenCaptureEvent> } callback - Callback invoked when the event is triggered,
     *     where ScreenCaptureEvent indicates the new state.
     * @throws { BusinessError } 202 - Not System App.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @systemapi
     * @since 23 static

     */
    onSystemScreenRecorder(callback: Callback<ScreenCaptureEvent>): void;

    /**
     * Unsubscribes from state change events of the system screen recorder.
     *
     * @param { 'systemScreenRecorder' } type - Event type, which is **'systemScreenRecorder'** in this case.
     *     This event is triggered when the state of the system screen recorder changes.
     * @param { Callback<ScreenCaptureEvent> } [callback] - Callback invoked when the event is triggered,
     *     where ScreenCaptureEvent indicates the new state. If this parameter is not specified,
     *     the last subscription event is canceled.
     * @throws { BusinessError } 202 - Not System App.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @systemapi
     * @since 18 dynamic
     */
    off(type: 'systemScreenRecorder', callback?: Callback<ScreenCaptureEvent>): void;

    /**
     * Unsubscribes from state change events of the system screen recorder.
     * This event is triggered when the state of the system screen recorder changes.
     *
     * @param { Callback<ScreenCaptureEvent> } [callback] - Callback invoked when the event is triggered,
     *     where ScreenCaptureEvent indicates the new state. If this parameter is not specified,
     *     the last subscription event is canceled.
     * @throws { BusinessError } 202 - Not System App.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @systemapi
     * @since 23 static
     */
    offSystemScreenRecorder(callback?: Callback<ScreenCaptureEvent>): void;

    /**
     * Whether the system screen recorder is working.
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    readonly isSystemScreenRecorderWorking: boolean;
  }
}
export default media;