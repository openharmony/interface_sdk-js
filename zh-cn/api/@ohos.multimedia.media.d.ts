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
 * 媒体子系统为开发者提供一套简单且易于理解的接口，使得开发者能够方便接入系统并使用系统的媒体资源。
 *
 * @syscap SystemCapability.Multimedia.Media.Core [since 12]
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace media {
  /**
   * 创建音视频播放实例。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 推荐单个应用创建的音视频播放实例（即音频、视频、音视频三类相加）不超过16个。<!--Del-->
   * >
   * > - 可创建的音视频播放实例数量依赖于设备芯片的支持情况，如芯片支持创建的数量少于上述情况，请以芯片规格为准。如RK3568推荐单个应用创建6个以内的音视频播放实例。<!--DelEnd-->
   * >
   * > - 应用需要按照实际业务需求合理使用AVPlayer对象，按需创建并及时释放，避免持有过多AVPlayer实例导致内存消耗过大，否则在一定情况下可能导致系统终止应用。
   *
   * @param { AsyncCallback<AVPlayer> } callback - 回调函数。异步返回AVPlayer实例，失败时返回null。可用于音视频播放。
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
   *     , an
   *     **AVPlayer** instance is returned; otherwise, **null** is returned. The instance can be used to play
   *     audio and video.
   * @throws { BusinessError } 5400101 - No memory. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @crossplatform
   * @since 23 static
   */
  function createAVPlayer(callback: AsyncCallback<AVPlayer | undefined>): void;

  /**
   * 异步方式创建音视频播放实例。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 推荐单个应用创建的音视频播放实例（即音频、视频、音视频三类相加）不超过16个。<!--Del-->
   * >
   * > - 可创建的音视频播放实例数量依赖于设备芯片的支持情况，如芯片支持创建的数量少于上述情况，请以芯片规格为准。如RK3568推荐单个应用创建6个以内的音视频播放实例。<!--DelEnd-->
   * >
   * > - 应用需要按照实际业务需求合理使用AVPlayer对象，按需创建并及时释放，避免持有过多AVPlayer实例导致内存消耗过大，导致系统终止应用。
   *
   * @returns { Promise<AVPlayer> } Promise对象。成功时异步返回AVPlayer实例，可用于音视频播放。失败时返回null。
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
   *     successful, an
   *     **AVPlayer** instance is returned; **null** is returned otherwise. The instance can be used to play
   *     audio and video.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @crossplatform
   * @since 23 static
   */
  function createAVPlayer(): Promise<AVPlayer | undefined>;

  /**
   * 创建音视频录制实例。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 应用可创建多个音视频录制实例，但由于设备共用音频通路，一个设备仅能有一个实例进行音频录制。创建第二个实例录制音频时，将会因为音频通路冲突导致创建失败。
   *
   * @param { AsyncCallback<AVRecorder> } callback - 回调函数，返回AVRecorder实例，可用于录制音视频媒体。失败时返回null。
   * @throws { BusinessError } 5400101 - No memory. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform [since 12]
   * @since 9 dynamic
   */
  function createAVRecorder(callback: AsyncCallback<AVRecorder>): void;

  /**
   * 创建音视频录制实例。使用callback异步回调。
   *
   * @param { AsyncCallback<AVRecorder | undefined> } callback - 回调函数，返回AVRecorder实例，可用于录制音视频媒体。失败时返回null。
   * @throws { BusinessError } 5400101 - No memory. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform
   * @since 23 static
   */
  function createAVRecorder(callback: AsyncCallback<AVRecorder | undefined>): void;

  /**
   * 创建音视频录制实例。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 应用可创建多个音视频录制实例，但由于设备共用音频通路，一个设备仅能有一个实例进行音频录制。创建第二个实例录制音频时，将会因为音频通路冲突导致创建失败。
   *
   * @returns { Promise<AVRecorder> } Promise对象，返回AVRecorder实例，可用于录制音视频媒体。失败时返回null。
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function createAVRecorder(): Promise<AVRecorder>;

  /**
   * 创建音视频录制实例。使用Promise异步回调。
   *
   * @returns { Promise<AVRecorder | undefined> } Promise对象，返回AVRecorder实例，可用于录制音视频媒体。失败时返回null。
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform
   * @since 23 static
   */
  function createAVRecorder(): Promise<AVRecorder | undefined>;

  /**
   * 同步方式创建音频播放实例。
   * 
   * > **说明：**
   * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
   * > [createAVPlayer]{@link media.createAVPlayer(callback: AsyncCallback<AVPlayer>)}替代。
   *
   * @returns { AudioPlayer } 返回AudioPlayer类实例，失败时返回null。可用于音频播放、暂停、停止等操作。
   * @syscap SystemCapability.Multimedia.Media.AudioPlayer
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead media.createAVPlayer(callback: AsyncCallback<AVPlayer>)
   */
  function createAudioPlayer(): AudioPlayer;

  /**
   * 创建音频录制的实例来控制音频的录制。一台设备只允许创建一个录制实例。
   * 
   * > **说明：**
   * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
   * > [createAVRecorder]{@link media.createAVRecorder(callback: AsyncCallback<AVRecorder>)}替代。
   *
   * @returns { AudioRecorder } 返回AudioRecorder类实例，失败时返回null。可用于录制音频媒体。
   * @syscap SystemCapability.Multimedia.Media.AudioRecorder
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead media.createAVRecorder(callback: AsyncCallback<AVRecorder>)
   */
  function createAudioRecorder(): AudioRecorder;

  /**
   * 通过文件描述符创建媒体源。
   *
   * @param { AVFileDescriptor } fdSrc - 媒体文件描述符。
   * @returns { MediaSource | undefined } 返回MediaSource，用于媒体资源设置。
   * @syscap SystemCapability.Multimedia.Media.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function createMediaSourceWithFd(fdSrc: AVFileDescriptor): MediaSource | undefined;

  /**
   * 通过自定义数据源创建媒体源。
   *
   * @param { AVDataSrcDescriptor } dataSrc - 流式媒体资源描述符。
   * @returns { MediaSource | undefined } 返回MediaSource，用于媒体资源设置。
   * @syscap SystemCapability.Multimedia.Media.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function createMediaSourceWithDataSource(dataSrc: AVDataSrcDescriptor): MediaSource | undefined;

  /**
   * 创建流媒体预下载媒体来源实例方法。
   *
   * @param { string } url - - 流媒体预下载媒体来源url，支持的流媒体格式：HLS、HTTP-FLV、Dash、Https。<br> - 本地m3u8的fd路径。
   * @param { Record<string, string> } headers - 支持流媒体预下载HttpHeader自定义。不传时为网络请求默认的HttpHeader。
   * @param { Record<string, string> } [headers] - 支持流媒体预下载HttpHeader自定义。不传时为网络请求默认的HttpHeader。 [since 13]
   * @returns { MediaSource } MediaSource返回值。
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
   * @returns { MediaSource | undefined } MediaSource instance if the operation is successful; returns null otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 5400101 - No memory.
   * @syscap SystemCapability.Multimedia.Media.Core
   * @since 23 static
   */
  function createMediaSourceWithUrl(url: string, headers?: Record<string, string>): MediaSource | undefined;

  /**
   * 创建流媒体多码率媒体来源实例方法，当前仅支持HTTP-FLV协议格式多码率。
   *
   * @param { Array<MediaStream> } streams - 可设置MediaStream数组，支持的流媒体格式：HTTP-FLV。
   * @returns { MediaSource } 返回MediaSource，用于媒体资源设置。
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
   * @returns { MediaSource | undefined } MediaSource instance if the operation is successful; returns null otherwise.
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
   * 异步方式创建视频播放实例，使用callback异步回调。
   * 
   * > **说明：**
   * > > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [createAVPlayer]{@link media.createAVPlayer(callback: AsyncCallback<AVPlayer>)}替代。
   *
   * @param { AsyncCallback<VideoPlayer> } callback - 回调函数。创建VideoPlayer实例成功时，err为undefined，data为获取到的VideoPlayer实例，否则为错误
   *     对象。
   * @syscap SystemCapability.Multimedia.Media.VideoPlayer
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead media.createAVPlayer(callback: AsyncCallback<AVPlayer>)
   */
  function createVideoPlayer(callback: AsyncCallback<VideoPlayer>): void;

  /**
   * 异步方式创建视频播放实例，通过Promise获取返回值。
   * 
   * > **说明：**
   * > > 从API version 8开始支持，从API version 9开始废弃，建议使用[createAVPlayer]{@link media.createAVPlayer()}替代。
   *
   * @returns { Promise<VideoPlayer> } Promise对象。异步返回VideoPlayer实例，失败时返回null。可用于管理和播放视频媒体。
   * @syscap SystemCapability.Multimedia.Media.VideoPlayer
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead media.createAVPlayer()
   */
  function createVideoPlayer(): Promise<VideoPlayer>;

  /**
   * 该接口自API version 9起停止维护，建议使用AVRecorder。
   * 创建视频录制实例。
   *
   * @param { AsyncCallback<VideoRecorder> } callback - 回调函数，返回VideoRecorder实例，失败时返回null。
   * @throws { BusinessError } 5400101 - No memory. Return by callback.
   * @throws { BusinessError } 202 - Not System App. [since 12]
   * @syscap SystemCapability.Multimedia.Media.VideoRecorder
   * @systemapi
   * @since 9 dynamic
   */
  function createVideoRecorder(callback: AsyncCallback<VideoRecorder>): void;

  /**
   * 该接口自API version 9起停止维护，建议使用AVRecorder。
   * 创建视频录制实例。
   *
   * @param { AsyncCallback<VideoRecorder | undefined> } callback - 回调函数，返回VideoRecorder实例，失败时返回null。
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 5400101 - No memory. Return by callback.
   * @syscap SystemCapability.Multimedia.Media.VideoRecorder
   * @systemapi
   * @since 23 static
   */
  function createVideoRecorder(callback: AsyncCallback<VideoRecorder | undefined>): void;

  /**
   * 该接口自API version 9起停止维护，建议使用AVRecorder。
   * 创建视频录制实例。
   *
   * @returns { Promise<VideoRecorder> } Promise对象，返回VideoRecorder实例，失败时返回null。
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @throws { BusinessError } 202 - Not System App. [since 12]
   * @syscap SystemCapability.Multimedia.Media.VideoRecorder
   * @systemapi
   * @since 9 dynamic
   */
  function createVideoRecorder(): Promise<VideoRecorder>;

  /**
   * 该接口自API version 9起停止维护，建议使用AVRecorder。
   * 创建视频录制实例。
   *
   * @returns { Promise<VideoRecorder | undefined> } Promise对象，返回VideoRecorder实例，失败时返回null。
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.VideoRecorder
   * @systemapi
   * @since 23 static
   */
  function createVideoRecorder(): Promise<VideoRecorder | undefined>;

  /**
   * 创建音频池实例。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - API version 18以下版本，创建的SoundPool对象底层为单实例模式，一个应用进程只能够创建1个SoundPool实例。
   * >
   * > - API version 18及API version 18以上版本，创建的SoundPool对象底层为多实例模式，一个应用进程最多能够创建128个SoundPool实例。
   *
   * @param {number} maxStreams - soundPool实例的最大播放的流数，设置范围为1-32的正整数。
   * @param {audio.AudioRendererInfo} audioRenderInfo - 音频播放参数信息。其中audioRenderInfo中的参数usage取值为STREAM_USAGE_UNKNOWN，
   *     STREAM_USAGE_MUSIC，STREAM_USAGE_MOVIE，STREAM_USAGE_AUDIOBOOK时，SoundPool播放短音时为混音模式，不会打断其他音频播放。SoundPool支持将
   *     rendererFlags设置为1用于低时延通路播放。
   * @param {AsyncCallback<SoundPool>} callback - 回调函数。异步返回SoundPool实例，失败时返回null。用于音频池实例的加载播放功能。
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
   *     successful, a
   *     **SoundPool** instance is returned; otherwise, **null** is returned.
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
   * 创建音频池实例。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - API version 18以下版本，创建的SoundPool对象底层为单实例模式，一个应用进程只能够创建1个SoundPool实例。
   * >
   * > - API version 18及API version 18以上版本，创建的SoundPool对象底层为多实例模式，一个应用进程最多能够创建128个SoundPool实例。
   *
   * @param {number} maxStreams - soundPool实例的最大播放的流数，设置范围为1-32的正整数。
   * @param {audio.AudioRendererInfo} audioRenderInfo - 音频播放参数信息
   * @returns {Promise<SoundPool>} Promise对象。异步返回SoundPool实例，失败时返回null。用于音频池实例的加载播放功能。
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
   *     a **SoundPool** instance is returned; otherwise, **null** is returned.
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
   * 创建屏幕录制实例，使用Promise异步回调。
   *
   * @returns { Promise<AVScreenCaptureRecorder> } Promise对象，返回AVScreenCaptureRecorder实例，失败时返回null。可用于进行屏幕录制。
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
   *     an **AVScreenCaptureRecorder** instance is returned; otherwise, **null** is returned.
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
   * 创建视频转码实例。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 可创建的视频转码实例不能超过2个。
   *
   * @returns {  Promise<AVTranscoder>  } Promise对象。异步返回AVTranscoder实例，失败时返回null。可用于视频转码。
   * @throws {  BusinessError  } 5400101 - No memory. Return by promise. 
   * @throws {   BusinessError   } 5400101 - No memory. Return by promise. [since 22]
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
   *     an
   *     **AVTranscoder** instance is returned; otherwise, **null** is returned. The instance can be used for video
   *     transcoding.
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
   *     a **ScreenCaptureMonitor** instance is returned; otherwise, **null** is returned.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @systemapi
   * @since 23 static
   */
  function getScreenCaptureMonitor(): Promise<ScreenCaptureMonitor | undefined>;

  /**
   * 音频池，提供了系统声音的加载、播放、音量设置、循环设置、停止播放、资源卸载等功能。
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  type SoundPool = _SoundPool;

  /**
   * 表示音频池播放参数设置。
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @since 10 dynamic
   * @since 23 static
   */
  type PlayParameters = _PlayParameters;

  /**
   * 表示在SoundPool中，同一ID的音频在播放时的打断模式的枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.SoundPool
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum SoundInterruptMode {  
    /**
     * 表示同一ID的音频，如果前者尚未播放完成，后者不会打断前者的播放，二者并行播放。
     *
     * @syscap SystemCapability.Multimedia.Media.SoundPool
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NO_INTERRUPT = 0,

    /**
     * 表示同一ID的音频，如果前者尚未播放完成，后者在播放前会先打断前者的播放。
     *
     * @syscap SystemCapability.Multimedia.Media.SoundPool
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SAME_SOUND_INTERRUPT = 1
  }

  /**
   * 表示播放或录制实例状态机切换原因的枚举，伴随state一起上报。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum StateChangeReason {
    /**
     * 表示用户行为造成的状态切换，由用户或客户端主动调用接口产生。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    USER = 1,

    /**
     * 表示后台系统行为造成的状态切换，比如应用未注册播控中心权限，退到后台时被系统强制暂停或停止。
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
   * 创建AVMetadataExtractor实例。使用Promise异步回调。
   *
   * @returns { Promise<AVMetadataExtractor> } Promise对象。异步返回元数据获取类对象（AVMetadataExtractor）。
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
   *     if the operation is successful; returns null otherwise.
   * @throws { BusinessError } 5400101 - No memory. Returned by promise.
   * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
   * @crossplatform
   * @since 23 static
   */
  function createAVMetadataExtractor(): Promise<AVMetadataExtractor | undefined>;

  /**
   * 创建AVMetadataExtractor实例。使用callback异步回调。
   *
   * @param { AsyncCallback<AVMetadataExtractor> } callback - 回调函数。当创建AVMetadataExtractor实例成功，err为undefined，data为获取到的
   *     AVMetadataExtractor实例，否则为错误对象。
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
   * 创建AVImageGenerator对象。使用Promise异步回调。
   *
   * @returns { Promise<AVImageGenerator> } Promise对象。异步返回AVImageGenerator实例，失败时返回null。可用于获取视频缩略图。
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
   *     an **AVImageGenerator** instance is returned; otherwise, **null** is returned.
   *     The API can be used to obtain a video thumbnail.
   * @throws { BusinessError } 5400101 - No memory. Returned by promise.
   * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
   * @since 23 static
   */
  function createAVImageGenerator(): Promise<AVImageGenerator | undefined>;

  /**
   * 创建AVImageGenerator实例。使用callback异步回调。
   *
   * @param { AsyncCallback<AVImageGenerator> } callback - 回调函数。异步返回AVImageGenerator实例，失败时返回null。可用于获取视频缩略图。
   * @throws { BusinessError } 5400101 - No memory. Returned by callback.
   * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
   * @since 12 dynamic
   */
  function createAVImageGenerator(callback: AsyncCallback<AVImageGenerator>): void;

  /**
   * Creates an **AVImageGenerator** instance. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<AVImageGenerator | undefined> } callback - Callback used to return the result.
   *     If the operation is successful, an **AVImageGenerator** instance is returned; otherwise, **null** is returned.
   *     The API can be used to obtain a video thumbnail.
   * @throws { BusinessError } 5400101 - No memory. Returned by callback.
   * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
   * @since 23 static
   */
  function createAVImageGenerator(callback: AsyncCallback<AVImageGenerator | undefined>): void;

  /**
   * 元数据获取类，用于从媒体资源中获取元数据、缩略图。在调用AVMetadataExtractor的方法前，需要先通过
   * [media.createAVMetadataExtractor]{@link @ohos.multimedia.media:media.createAVMetadataExtractor(callback: AsyncCallback<AVMetadataExtractor>)}
   * 构建一个AVMetadataExtractor实例。
   * 
   * 获取音频或视频元数据、视频缩略图的demo可参考：[使用AVMetadataExtractor提取音视频元数据信息(ArkTS)](docroot://media/media/avmetadataextractor.md)。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 11开始支持。
   *
   * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
   * @crossplatform [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface AVMetadataExtractor {
    /**
     * 媒体文件描述，通过该属性设置数据源。在获取元数据之前，必须设置数据源属性，只能设置fdSrc和dataSrc的其中一个。
     * 
     * **使用示例**：
     * 
     * 假设一个连续存储的媒体文件，地址偏移：0，字节长度：100。其文件描述为AVFileDescriptor { fd = 资源句柄; offset = 0; length = 100; }。
     * 
     * **说明：** 
     * 
     * 将资源句柄（fd）传递给AVMetadataExtractor实例之后，不允许通过该资源句柄做其他读写操作，包括但不限于将同一个资源句柄传递给多个AVPlayer/AVMetadataExtractor/
     * AVImageGenerator/AVTranscoder。同一时间通过同一个资源句柄读写文件时存在竞争关系，将导致音视频元数据获取异常。
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    fdSrc ?: AVFileDescriptor;

    /**
     * 流式媒体资源描述，通过该属性设置数据源。在获取元数据之前，必须设置数据源属性，只能设置fdSrc和dataSrc的其中一个。
     * 
     * 当应用从远端获取音视频媒体文件，在应用未下载完整音视频资源时，可以设置dataSrc提前获取该资源的元数据。
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    dataSrc ?: AVDataSrcDescriptor;

    /**
     * 获取媒体元数据。使用callback异步回调。
     *
     * @param { AsyncCallback<AVMetadata> } callback - 回调函数。异步返回音视频元数据对象（AVMetadata）。
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
     * 获取媒体元数据。使用Promise异步回调。
     *
     * @returns { Promise<AVMetadata> } Promise对象。异步返回音视频元数据对象（AVMetadata）。
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
     * 获取媒体元数据，支持设置获取最大耗时timeoutMs。使用Promise异步回调。
     *
     * @param { long } timeoutMs - 获取媒体元数据的最大等待时间，时间范围为(0, 20000]，单位为毫秒（ms）。<br>在给定的超时时间内未返回元数据则返回错误码5400104。
     * @returns { Promise<AVMetadata | undefined> } Promise对象，异步返回音视频元数据对象（AVMetadata）。
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
     * 获取音频专辑封面。使用callback异步回调。
     *
     * @param { AsyncCallback<image.PixelMap> } callback - 回调函数。异步返回专辑封面。
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
     * 获取专辑封面。使用Promise异步回调。
     *
     * @returns { Promise<image.PixelMap> } Promise对象。异步返回专辑封面。
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
     * 网络点播资源地址描述，通过该接口设置数据源。只支持获取网络
     * [fetchMetadata]{@link media.AVMetadataExtractor.fetchMetadata(callback: AsyncCallback<AVMetadata>)}（元数据）和
     * [fetchFrameByTime]{@link media.AVMetadataExtractor.fetchFrameByTime(timeUs: number, options: AVImageQueryOptions, param: PixelMapParams)}
     * （缩略图），在获取之前，必须设置媒体资源URL。
     *
     * @param { string } url - 媒体资源URL。<br/>1. 支持的视频格式包括：mp4、mpeg-ts、mkv。<br/>2. 支持的音频格式包括：m4a、aac、mp3、ogg、wav、flac、amr。
     *     <br/>**支持路径示例**：<br/>1. http网络播放：`http://xx`。<br/>2. https网络播放：`https://xx`。<br/>**说明：** 不支持设置HLS/Dash、直播资源。
     * @param { Record<string, string> } [headers] - 支持访问网络资源HttpHeader自定义。默认为空。
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @since 20 dynamic
     * @since 23 static
     */
    setUrlSource(url: string, headers?: Record<string, string>): void;

    /**
     * 获取视频缩略图。使用Promise异步回调。
     *
     * @param { number } timeUs - 需要获取的缩略图在视频中的时间点，单位为微秒（us）。
     * @param { AVImageQueryOptions } options - 需要获取的缩略图时间点与视频帧的对应关系。
     * @param { PixelMapParams } param - 需要获取的缩略图的格式参数。
     * @returns { Promise<image.PixelMap> } Promise对象，返回视频缩略图对象。
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
     * 获取视频缩略图，支持设置缩略图获取最大耗时timeoutMs。使用Promise异步回调。
     *
     * @param { long } timeUs - 需要获取的缩略图在视频中的时间点，单位为微秒（μs）。
     * @param { AVImageQueryOptions } options - 需要获取的缩略图时间点与视频帧的对应关系。
     * @param { PixelMapParams } param - 需要获取的缩略图的格式参数。
     * @param { long } timeoutMs - 获取缩略图的最大等待时间，时间范围为(0, 20000]，单位为毫秒（ms）。<br>在指定的超时时间内未获取缩略图则返回错误码5400104。
     * @returns { Promise<image.PixelMap | undefined> } Promise对象，返回视频缩略图对象。
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
     * 批量获取视频缩略图。使用Callback异步回调。
     * 
     * > **说明：**
     * >
     * > - 先对给定的视频资源进行解码，随后依据提供的参数options和param，从timesUs数组中的每个时间点提取图像帧。
     * >
     * > - 当每一次图像提取完成时，系统将调用回调函数并传递提取结果。请注意，回调函数的执行顺序会与timesUs数组中时间点的先后顺序不一致。
     *
     * @param { long[] } timesUs - 需要获取的所有缩略图在视频中的时间点集合。<br>时间单位为微秒（μs），数组长度取值范围为(0, 4096]。
     * @param { AVImageQueryOptions } queryOption - 需要获取的缩略图时间点与视频帧的对应关系。
     * @param { PixelMapParams } param - 需要获取的缩略图的格式参数。
     * @param { OnFrameFetched } callback - 需要返回的缩略图信息及可能的异常类型。<br>异常类型请参考具体返回的错误码信息。
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
     * 批量获取视频缩略图，支持设置每一帧缩略图获取最大耗时timeoutMs。使用Callback异步回调。
     * 
     * > **说明：**
     * >
     * > - 先对给定的视频资源进行解码，随后依据提供的参数options和param，从timesUs数组中的每个时间点提取图像帧。
     * >
     * > - 当每一次图像提取完成时，系统将调用回调函数并传递提取结果。请注意，回调函数的执行顺序会与timesUs数组中时间点的先后顺序不一致。
     * >
     * > - 超时时间timeoutMs是针对每一帧的获取时间，而非整个批量抽帧流程。
     *
     * @param { long[] } timesUs - 需要获取的所有缩略图在视频中的时间点集合。<br>时间单位为微秒（μs），数组长度取值范围为(0, 4096]。
     * @param { AVImageQueryOptions } queryOption - 需要获取的缩略图时间点与视频帧的对应关系。
     * @param { PixelMapParams } param - 需要获取的缩略图的格式参数。
     * @param { long } timeoutMs - 获取每一帧缩略图的最大等待时间，时间范围为(0, 20000]，单位为毫秒（ms）。<br>对于每一帧缩略图，在指定的超时时间内未获取缩略图则返回错误码5400104。
     * @param { OnFrameFetched } callback - 需要返回的缩略图信息及可能的异常类型。<br>异常类型请参考具体返回的错误码信息。
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
     * 取消正在进行的批量获取缩略图任务（已完成部分不受影响）。
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
     * 释放资源。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当释放资源成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by callback.
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * 释放资源。使用Promise异步回调。
     *
     * @returns { Promise<void> } 异步方式释放资源release方法的Promise返回值。
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
   * 表示视频HDR类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform
   * @since 12 dynamic
   * @since 23 static
   */
  enum HdrType {
    /**
     * 表示无HDR类型。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    AV_HDR_TYPE_NONE = 0,

    /**
     * 表示为HDR VIVID类型。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    AV_HDR_TYPE_VIVID = 1
  }

  /**
   * 视频缩略图获取类，用于从视频资源中获取缩略图。在调用AVImageGenerator的方法前，需要先通过
   * [createAVImageGenerator()]{@link @ohos.multimedia.media:media.createAVImageGenerator(callback: AsyncCallback<AVImageGenerator>)}
   * 构建一个AVImageGenerator实例。
   * 
   * 获取视频缩略图的demo可参考：[获取视频缩略图开发指导](docroot://media/media/avimagegenerator.md)。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 12开始支持。
   *
   * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
   * @since 12 dynamic
   * @since 23 static
   */
  interface AVImageGenerator {
    /**
     * 媒体文件描述，通过该属性设置数据源。
     * 
     * **使用示例**：
     * 
     * 假设一个连续存储的媒体文件，地址偏移：0，字节长度：100。其文件描述为AVFileDescriptor { fd = 资源句柄; offset = 0; length = 100; }。
     * 
     * **说明：** 
     * 
     * 将资源句柄（fd）传递给AVImageGenerator实例之后，不允许通过该资源句柄做其他读写操作，包括但不限于将同一个资源句柄传递给多个AVPlayer/AVMetadataExtractor/
     * AVImageGenerator/AVTranscoder。同一时间通过同一个资源句柄读写文件时存在竞争关系，将导致视频缩略图数据获取异常。
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 12 dynamic
     * @since 23 static
     */
    fdSrc ?: AVFileDescriptor;

    /**
     * 获取视频缩略图。使用callback异步回调。
     *
     * @param { number } timeUs - 需要获取的缩略图在视频中的时间点，单位为微秒（μs）。
     * @param { AVImageQueryOptions } options - 需要获取的缩略图时间点与视频帧的对应关系。
     * @param { PixelMapParams } param - 需要获取的缩略图的格式参数。
     * @param { AsyncCallback<image.PixelMap> } callback - 回调函数。获取缩略图成功时，err为undefined，data为PixelMap实例，否则为错误对象。
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
     * 获取视频缩略图。使用Promise异步回调。
     *
     * @param { number } timeUs - 需要获取的缩略图在视频中的时间点，单位为微秒（μs）。
     * @param { AVImageQueryOptions } options - 需要获取的缩略图时间点与视频帧的对应关系。
     * @param { PixelMapParams } param - 需要获取的缩略图的格式参数。
     * @returns { Promise<image.PixelMap> } Promise对象，返回视频缩略图对象。
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
     * 支持按比例缩放提取视频缩略图。使用Promise异步回调。
     *
     * @param { number } timeUs - 在视频中需要获取的缩略图的时间点，单位为微秒（μs）。
     * @param { AVImageQueryOptions } queryMode - 需要获取的缩略图时间点与视频帧的对应关系。
     * @param { OutputSize } outputSize - 定义帧的输出大小。默认按原图大小显示。
     * @returns { Promise<image.PixelMap> } Promise对象。返回视频缩略图对象。
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
     * 释放资源。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当释放资源成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by callback.
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 12 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * 释放资源。使用Promise异步回调。
     *
     * @returns { Promise<void> } 异步方式释放资源release方法的Promise返回值。
     * @throws { BusinessError } 5400102 - Operation not allowed. Returned by promise.
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 12 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
  }

  /**
   * 需要获取的缩略图时间点与视频帧的对应关系。
   * 
   * 在获取视频缩略图时，传入的时间点与实际取得的视频帧所在时间点不一定相等，需要指定传入的时间点与实际取得的视频帧的时间关系。
   *
   * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
   * @since 12 dynamic
   * @since 23 static
   */
  enum AVImageQueryOptions {
    /**
     * 表示选取传入时间点或之后的关键帧。
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 12 dynamic
     * @since 23 static
     */
    AV_IMAGE_QUERY_NEXT_SYNC = 0,

    /**
     * 表示选取传入时间点或之前的关键帧。
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 12 dynamic
     * @since 23 static
     */
    AV_IMAGE_QUERY_PREVIOUS_SYNC,

    /**
     * 表示选取离传入时间点最近的关键帧。
     *
     * @syscap SystemCapability.Multimedia.Media.AVImageGenerator
     * @since 12 dynamic
     * @since 23 static
     */
    AV_IMAGE_QUERY_CLOSEST_SYNC,

    /**
     * 表示选取离传入时间点最近的帧，该帧不一定是关键帧。
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
   * 表示批量获取缩略图操作结果的枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum FetchResult {
    /**
     * 从视频中获取该缩略图失败。
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    FETCH_FAILED = 0,

    /**
     * 从视频中获取该缩略图成功。
     *
     * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    FETCH_SUCCEEDED = 1,

    /**
     * 从视频中获取该缩略图操作被取消。
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
   * 批量获取缩略图回调函数。
   *
   * @param { FrameInfo } frameInfo - 返回的缩略图信息。
   * @param { BusinessError<void> } [err] - 获取缩略图时发生错误，默认值为null。
   * @syscap SystemCapability.Multimedia.Media.AVMetadataExtractor
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type OnFrameFetched = (frameInfo: FrameInfo, err?: BusinessError<void>) => void;

  /**
   * [Media错误码](docroot://reference/apis-media-kit/errorcode-media.md)类型枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum AVErrorCode {
    /**
     * 表示操作成功。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_OK = 0,

    /**
     * 表示无权限执行此操作。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_NO_PERMISSION = 201,

    /**
     * 表示传入参数无效。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_INVALID_PARAMETER = 401,

    /**
     * 表示当前版本不支持该API能力。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_UNSUPPORT_CAPABILITY = 801,

    /**
     * 表示系统内存不足或服务数量达到上限。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_NO_MEMORY = 5400101,

    /**
     * 表示当前状态不允许或无权执行此操作。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_OPERATE_NOT_PERMIT = 5400102,

    /**
     * 表示数据流异常信息。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_IO = 5400103,

    /**
     * 表示系统或网络响应超时。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_TIMEOUT = 5400104,

    /**
     * 表示服务进程死亡。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_SERVICE_DIED = 5400105,

    /**
     * 表示不支持当前媒体资源的格式。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AVERR_UNSUPPORT_FORMAT = 5400106,

    /**
     * 表示音频焦点被抢占。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    AVERR_AUDIO_INTERRUPTED = 5400107,
    /**
     * 表示解析或链接服务端地址错误。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_HOST_NOT_FOUND = 5411001,
    /**
     * 表示网络连接超时。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_CONNECTION_TIMEOUT = 5411002,
    /**
     * 表示网络异常导致的数据或链路异常。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_NETWORK_ABNORMAL = 5411003,
    /**
     * 表示网络被禁用。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_NETWORK_UNAVAILABLE = 5411004,
    /**
     * 表示无访问权限。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_NO_PERMISSION = 5411005,
    /**
     * 表示客户端请求参数错误或超出处理能力。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_REQUEST_DENIED = 5411006,
    /**
     * 表示无可用网络资源。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_RESOURCE_NOT_FOUND = 5411007,
    /**
     * 表示服务端校验客户端证书失败。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_SSL_CLIENT_CERT_NEEDED = 5411008,
    /**
     * 表示SSL连接失败。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_SSL_CONNECTION_FAILED = 5411009,
    /**
     * 表示客户端校验服务端证书失败。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_SSL_SERVER_CERT_UNTRUSTED = 5411010,
    /**
     * 表示网络协议的原因导致请求不受支持。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    AVERR_IO_UNSUPPORTED_REQUEST = 5411011,
    /**
     * 表示不支持SEEK_CONTINUOUS模式的seek。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    AVERR_SEEK_CONTINUOUS_UNSUPPORTED = 5410002,

    /**
     * 表示不支持超分。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    AVERR_SUPER_RESOLUTION_UNSUPPORTED = 5410003,

    /**
     * 表示未使能超分。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    AVERR_SUPER_RESOLUTION_NOT_ENABLED = 5410004,

    /**
     * 表示不允许HTTP明文访问。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    AVERR_IO_CLEARTEXT_NOT_PERMITTED = 5411012,

    /**
     * 表示参数超过取值范围。
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
   * [AVPlayer]{@link @ohos.multimedia.media:media}的状态机，可通过state属性主动获取当前状态，也可通过监听
   * [stateChange]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)}
   * 事件上报当前状态，状态机之间的切换规则，可参考[音频播放开发指导](docroot://media/media/using-avplayer-for-playback.md)。
   *
   * @unionmember { 'idle' } The AVPlayer enters this state after
   *     [createAVPlayer()]{@link @ohos.multimedia.media:media.createAVPlayer(callback: AsyncCallback<AVPlayer>)} or
   *     [reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)} is called.
   *     <br>In case [createAVPlayer()]{@link @ohos.multimedia.media:media.createAVPlayer(callback: AsyncCallback<AVPlayer>)}
   *     is used, all properties are set to their default values.
   *     <br>In case [reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>) } 闲置状态，
   *     AVPlayer刚被创建
   *     [createAVPlayer()]{@link @ohos.multimedia.media:media.createAVPlayer(callback: AsyncCallback<AVPlayer>)}或者调用了
   *     [reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)}方法之后，进入idle状态。<br/>首
   *     次创建[createAVPlayer()]{@link @ohos.multimedia.media:media.createAVPlayer(callback: AsyncCallback<AVPlayer>)}，所有属
   *     性都为默认值。<br/>调用[reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)}方法，url
   *     <sup>9+</sup> 或 fdSrc<sup>9+</sup>或dataSrc<sup>10+</sup>属性及loop属性会被重置，其他用户设置的属性将被保留。
   * @unionmember { 'initialized' } 资源初始化，在idle 状态设置 url<sup>9+</sup> 或 fdSrc<sup>9+</sup>属性，AVPlayer会进入initialized状态，此时
   *     可以配置窗口、音频等静态属性。
   * @unionmember { 'prepared' } The AVPlayer enters this state when
   *     [prepare()]{@link @ohos.multimedia.media:media.AVPlayer.prepare(callback: AsyncCallback<void>) } 已准备状态，在
   *     initialized状态调用[prepare()]{@link @ohos.multimedia.media:media.AVPlayer.prepare(callback: AsyncCallback<void>)}方
   *     法，AVPlayer会进入prepared状态，此时播放引擎的资源已准备就绪。
   * @unionmember { 'playing' } The AVPlayer enters this state when
   *     [play()]{@link @ohos.multimedia.media:media.AVPlayer.play(callback: AsyncCallback<void>) } 正在播放状态，在prepared/
   *     paused/completed状态调用[play()]{@link @ohos.multimedia.media:media.AVPlayer.play(callback: AsyncCallback<void>)}方法
   *     ，AVPlayer会进入playing状态。
   * @unionmember { 'paused' } 暂停状态，在playing状态调用pause方法，AVPlayer会进入paused状态。
   * @unionmember { 'completed' } The AVPlayer enters this state when a media asset finishes playing and loop playback
   *     is not set (no **loop = true**). In this case, if
   *     [play()]{@link @ohos.multimedia.media:media.AVPlayer.play(callback: AsyncCallback<void>)} is called, the
   *     AVPlayer enters the playing state and replays the media asset; if
   *     [stop()]{@link @ohos.multimedia.media:media.AVPlayer.stop(callback: AsyncCallback<void>) } 播放至结尾状态，当媒体资源播放至结尾时，
   *     如果用户未设置循环播放（loop = true），AVPlayer会进入completed状态，此时调用
   *     [play()]{@link @ohos.multimedia.media:media.AVPlayer.play(callback: AsyncCallback<void>)}会进入playing状态和重播，调用
   *     [stop()]{@link @ohos.multimedia.media:media.AVPlayer.stop(callback: AsyncCallback<void>)}会进入stopped状态。
   * @unionmember { 'stopped' } The AVPlayer enters this state when
   *     [stop()]{@link @ohos.multimedia.media:media.AVPlayer.stop(callback: AsyncCallback<void>)} is called in the
   *     prepared, playing, paused, or completed state. In this case, the playback engine retains the properties but
   *     releases the memory resources. You can call
   *     [prepare()]{@link @ohos.multimedia.media:media.AVPlayer.prepare(callback: AsyncCallback<void>)} to prepare the
   *     resources again, call
   *     [reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)} to reset the
   *     properties, or call
   *     [release()]{@link @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>) } 停止状态，在prepared
   *     /playing/paused/completed状态调用
   *     [stop()]{@link @ohos.multimedia.media:media.AVPlayer.stop(callback: AsyncCallback<void>)}方法，AVPlayer会进入stopped状
   *     态，此时播放引擎只会保留属性，但会释放内存资源，可以调用
   *     [prepare()]{@link @ohos.multimedia.media:media.AVPlayer.prepare(callback: AsyncCallback<void>)}重新准备，也可以调用
   *     [reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)}重置，或者调用
   *     [release()]{@link @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>)}彻底销毁。
   * @unionmember { 'released' } The AVPlayer enters this state when
   *     [release()]{@link @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>) } 销毁状态，销毁与当前
   *     AVPlayer关联的播放引擎，无法再进行状态转换，调用
   *     [release()]{@link @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>)}方法后，会进入released状
   *     态，结束流程。
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
   *     [release()]{@link @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>) } 错误状态，当**播放引擎**
   *     发生**不可逆的错误**（详见[Media错误码](docroot://reference/apis-media-kit/errorcode-media.md)），则会转换至当前状态，可以调用
   *     [reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)}重置，也可以调用
   *     [release()]{@link @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>)}销毁重建。<br/>
   *     **注意：**<br/>区分error状态和
   *     [on('error')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'error', callback: ErrorCallback)} ：<br/>1、进
   *     入error状态时，会触发on('error')监听事件，可以通过on('error')事件获取详细错误信息；<br/>2、处于error状态时，播放服务进入不可播控的状态，要求客户端设计容错机制，使用
   *     [reset()]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)}重置或者
   *     [release()]{@link @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>)}销毁重建；<br/>3、如果客户
   *     端收到on('error')，但未进入error状态：<br/>原因1：客户端未按状态机调用API或传入参数错误，被AVPlayer拦截提醒，需要客户端调整代码逻辑；<br/>原因2：播放过程发现码流问题，导致容器、解码短
   *     暂异常，不影响连续播放和播控操作的，不需要客户端设计容错机制。
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */

  type AVPlayerState = 'idle' | 'initialized' | 'prepared' | 'playing' | 'paused' | 'completed' | 'stopped' | 'released' | 'error';

  /**
   * track变更事件回调方法。
   *
   * @param { int } index - 当前变更的track索引。
   * @param { boolean } isSelected - 当前变更的track索引是否被选中。true表示处于选中状态，false表示处于非选中状态。
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type OnTrackChangeHandler = (index: int, isSelected: boolean) => void;

  /**
   * 播放状态机切换事件回调方法。
   *
   * @param { AVPlayerState } state - 当前播放状态。
   * @param { StateChangeReason } reason - 当前播放状态的切换原因。
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type OnAVPlayerStateChangeHandle = (state: AVPlayerState, reason: StateChangeReason) => void;

  /**
   * 播放缓存事件回调方法。
   *
   * @param { BufferingInfoType } infoType - 缓存时间类型。
   * @param { int } value - 缓存时间类型的值。
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type OnBufferingUpdateHandler = (infoType: BufferingInfoType, value: int) => void;

  /**
   * 视频播放宽高变化事件回调方法。
   *
   * @param { int } width - 视频宽度，单位为像素（px）。
   * @param { int } height - 视频高度，单位为像素（px）。
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type OnVideoSizeChangeHandler = (width: int, height: int) => void;

  /**
   * 视频超分开关事件回调方法。若通过[PlaybackStrategy]{@link @ohos.multimedia.media:media.PlaybackStrategy}正确使能超分，超分算法状态变化时会通过此回调上报，视频起
   * 播时也会上报超分初始开启/关闭状态。若未使能超分，不会触发该回调。
   * 
   * 出现以下两种情况，超分算法会自动关闭。
   * 
   * * 目前超分算法最高仅支持30帧及以下的视频。若视频帧率超过30帧，或者在倍速播放等场景下导致输入帧率超出超分算法处理能力，超分会自动关闭。
   * * 目前超分算法支持输入分辨率范围为[320x320, 1920x1080]，单位为像素。若播放过程中输入视频分辨率超出此范围，超分算法会自动关闭。
   *
   * @param { boolean } enabled - 表示当前超分是否开启。true表示超分开启，false表示超分关闭。
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
   * 获取SEI信息，使用场景：订阅SEI信息事件，回调返回SEI详细信息。
   *
   * @param { Array<SeiMessage> } messages - SEI信息。
   * @param { int } [playbackPosition] - 获取当前播放位置（单位：毫秒）。
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  type OnSeiMessageHandle = (messages: Array<SeiMessage>, playbackPosition?: int) => void;

  /**
   * 播放速率设置完成事件回调方法。
   *
   * @param { double } rate - 播放速率。
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  type OnPlaybackRateDone = (rate: double) => void;

  /**
   * 表示媒体服务支持的指标事件的枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @since 23 dynamic&static
   */
  enum AVMetricsEventType {
    /**
     * 表示播放卡顿的指标事件。
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
   * 播放管理类，用于管理和播放媒体资源。在调用AVPlayer的方法前，需要先通过
   * [createAVPlayer()]{@link @ohos.multimedia.media:media.createAVPlayer(callback: AsyncCallback<AVPlayer>)}构建一个
   * AVPlayer实例。
   * 
   * 在使用AVPlayer实例的方法时，建议开发者注册相关回调，主动获取当前状态变化。
   * [on('stateChange')]{@link media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)}：监听播放状态机
   * AVPlayerState切换。[on('error')]{@link media.AVPlayer.on(type: 'error', callback: ErrorCallback)}：监听错误事件。
   * 
   * 应用需要按照实际业务需求合理使用AVPlayer对象，按需创建并及时释放，避免持有过多AVPlayer实例导致内存消耗过大，否则在一定情况下可能导致系统终止应用。
   * 
   * Audio/Video播放demo可参考：[音频播放开发指导](docroot://media/media/using-avplayer-for-playback.md)、
   * [视频播放开发指导](docroot://media/media/video-playback.md)。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批API从API version 9开始支持。
   *
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AVPlayer {  
    /**
     * 准备播放音频/视频，需在[stateChange]{@link media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)}事件成
     * 功触发至initialized状态后，才能调用。使用callback方式异步获取返回值。
     *
     * @param { AsyncCallback<void> } callback - 准备播放的回调方法。
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
     * 准备播放音频/视频，需在[stateChange]{@link media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)}事件成
     * 功触发至initialized状态后，才能调用。使用Promise异步回调。
     * 
     * 如果应用使用到多个短视频频繁切换的场景，为了提升切换性能，可以考虑创建多个AVPlayer对象，提前准备下一个视频，详情参见
     * [在线短视频流畅切换](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-smooth-switching)。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 开始播放音视频资源，只能在prepared/paused/completed状态调用。使用callback方式异步获取返回值。
     *
     * @param { AsyncCallback<void> } callback - 开始播放的回调方法。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    play(callback: AsyncCallback<void>): void;

    /**
     * 开始播放音视频资源，只能在prepared/paused/completed状态调用。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    play(): Promise<void>;

    /**
     * 暂停播放音视频资源，只能在playing状态调用。使用callback方式异步获取返回值。
     *
     * @param { AsyncCallback<void> } callback - 暂停播放的回调方法。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    pause(callback: AsyncCallback<void>): void;

    /**
     * 暂停播放音视频资源，只能在playing状态调用。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    pause(): Promise<void>;

    /**
     * 停止播放音视频资源，只能在prepared/playing/paused/completed状态调用。使用callback方式异步获取返回值。
     *
     * @param { AsyncCallback<void> } callback - 停止播放的回调方法。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    stop(callback: AsyncCallback<void>): void;

    /**
     * 停止播放音视频资源，只能在prepared/playing/paused/completed状态调用。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    stop(): Promise<void>;

    /**
     * 重置播放，只能在initialized/prepared/playing/paused/completed/stopped/error状态调用。使用callback方式异步获取返回值。
     *
     * @param { AsyncCallback<void> } callback - 重置播放的回调方法。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    reset(callback: AsyncCallback<void>): void;

    /**
     * 重置播放，只能在initialized/prepared/playing/paused/completed/stopped/error状态调用。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    reset(): Promise<void>;

    /**
     * 销毁播放资源，除released状态外，均可以调用。使用callback方式异步获取返回值。
     *
     * @param { AsyncCallback<void> } callback - 销毁播放的回调方法。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * 销毁播放资源，除released状态，都可以调用。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * 跳转到指定播放位置，只能在prepared/playing/paused/completed状态调用，可以通过
     * [on('seekDone')]{@link media.AVPlayer.on(type: 'seekDone', callback: Callback<int>)}事件确认是否生效。
     * 
     * > **注意：**
     * >
     * > 从API版本26.0.0开始，直播场景支持seek。
     *
     * @param { int } timeMs - 指定的跳转时间节点，单位毫秒（ms），取值范围为
     *     [0, [duration](docroot://reference/apis-media-kit/arkts-apis-media-AVPlayer.md#属性)]。<br>当模式为
     *     [SEEK_CONTINUOUS]{@link @ohos.multimedia.media:media.SeekMode}时，可以取值-1，表示SEEK_CONTINUOUS模式结束。该值必须为整数。
     * @param { SeekMode } mode - 基于视频I帧的跳转模式，默认为SEEK_PREV_SYNC模式，**仅在视频资源播放时设置**。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    seek(timeMs: int, mode?: SeekMode): void;

    /**
     * 设置媒体播放音量，只能在prepared/playing/paused/completed状态调用，可以通过
     * [on('volumeChange')]{@link media.AVPlayer.on(type: 'volumeChange', callback: Callback<double>)}事件确认是否生效。
     *
     * @param { double } volume - 指定的相对音量大小，取值范围为[0.00-1.00]，1表示最大音量，即100%。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setVolume(volume: double): void;

    /**
     * 获取音视频轨道信息，可以在prepared/playing/paused状态调用。获取所有音视轨道信息，应在数据加载回调后调用。使用callback方式异步获取返回值。
     *
     * @param { AsyncCallback<Array<MediaDescription>> } callback - 回调函数，当获取音视频轨道信息成功，err为undefined，data为获取到的
     *     MediaDescription数组；否则为错误对象。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void;

    /**
     * 获取音视频轨道信息，可以在prepared/playing/paused状态调用。使用Promise异步回调。
     *
     * @returns { Promise<Array<MediaDescription>> } Promise对象，返回音视频轨道信息MediaDescription数组。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getTrackDescription(): Promise<Array<MediaDescription>>;

    /**
     * 获取已选择的音视频轨道索引，可以在prepared/playing/paused状态调用。使用Promise异步回调。
     *
     * @returns { Promise<Array<int>> } Promise对象，返回已选择音视频轨道索引数组。
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getSelectedTracks(): Promise<Array<int>>;

    /**
     * 使用AVPlayer播放多音视频轨资源时，允许用户以指定模式切换到指定轨道以继续播放。使用Promise异步回调。
     *
     * @param { int } index - 多音视频资源的轨道索引。该值必须为整数。<br>取值约束：可通过
     *     [getTrackDescription]{@link media.AVPlayer.getTrackDescription()}接口返回的音视频轨道信息
     *     [MediaDescription]{@link @ohos.multimedia.media:media.MediaDescription}中读取的key为MD_KEY_TRACK_INDEX所对应的值。<br>每个
     *     key值的Object类型和范围，请参考[MediaDescriptionKey]{@link @ohos.multimedia.media:media.MediaDescriptionKey}对应Key值的说明。
     * @param { SwitchMode } mode - 切换轨道的模式。<br>取值约束：该模式仅适用于视频轨道的切换。<br>默认值：SMOOTH模式，在片段末尾进行切换，以确保视频播放的连续性。
     *     **仅在DASH/HLS协议网络流视频轨切换时生效。**<br>从API版本26.0.0开始支持HLS协议网络流视频。 
     * @param { SwitchMode } [mode] - 切换轨道的模式。<br>取值约束：该模式仅适用于视频轨道的切换。<br>默认值：SMOOTH模式，在片段末尾进行切换，以确保视频播放的连续性。
     *     **仅在DASH/HLS协议网络流视频轨切换时生效。**<br>从API版本26.0.0开始支持HLS协议网络流视频。 [since 26.0.0]
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 使用AVPlayer播放多音轨视频时取消指定音视频轨道播放，使用Promise异步回调。
     *
     * @param { int } index - 多音视频资源的轨道索引，来自[getTrackDescription]{@link media.AVPlayer.getTrackDescription()}接口所获取的轨道信息
     *     [MediaDescription]{@link @ohos.multimedia.media:media.MediaDescription}。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 流媒体预下载资源设置，下载url对应的流媒体数据，并暂存在内存中。使用Promise异步回调。
     *
     * @param { MediaSource } src - 流媒体预下载媒体来源。
     * @param { PlaybackStrategy } strategy - 流媒体预下载播放策略。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 获取播放器当前配置的轨道选择过滤器。使用Promise异步回调。
     *
     * @returns { Promise<TrackSelectionFilter> } Promise对象，返回当前配置的轨道选择过滤器。
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getTrackSelectionFilter(): Promise<TrackSelectionFilter>;
	
    /**
     * 为播放器设置轨道选择过滤器，播放器将使用该过滤器来选择可用的轨道用于播放。使用Promise异步回调。
     *
     * @param { TrackSelectionFilter } filter - 轨道选择过滤器。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setTrackSelectionFilter(filter : TrackSelectionFilter): Promise<void>;

    /**
     * 依据fd为视频添加外挂字幕，当前仅支持与视频资源同时设置（在avplayer设置fdSrc视频资源后设置外挂字幕）。使用Promise异步回调。
     *
     * @param { int } fd - 资源句柄，通过
     *     [resourceManager.getRawFd]{@link @ohos.resourceManager:resourceManager.ResourceManager.getRawFd(path: string, callback: _AsyncCallback<RawFileDescriptor>)}
     *     获取。
     * @param { long } offset - 资源偏移量，需要基于预置资源的信息输入，非法值会造成字幕频资源解析错误，默认值:0。
     * @param { long } length - 资源长度，默认值为文件中从偏移量开始的剩余字节，需要基于预置资源的信息输入，非法值会造成字幕频资源解析错误，默认值:0。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - The parameter check failed. Return by promise.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    addSubtitleFromFd(fd: int, offset?: long, length?: long): Promise<void>;

    /**
     * 依据url为视频添加外挂字幕，当前仅支持与视频资源同时设置（在avplayer设置fdSrc视频资源后设置外挂字幕）。使用Promise异步回调。
     *
     * @param { string } url - 外挂字幕文件地址。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - The parameter check failed. Return by promise.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    addSubtitleFromUrl(url: string): Promise<void>;

    /**
     * 获取播放过程信息，可以在prepared/playing/paused状态调用。使用Promise异步回调。
     *
     * @returns { Promise<PlaybackInfo> } Promise对象，返回播放器信息PlaybackInfo。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 12 dynamic
     * @since 23 static
     */
    getPlaybackInfo(): Promise<PlaybackInfo>;

    /**
     * 获取当前播放器的播放速率。使用Promise异步回调。
     *
     * @returns { Promise<double> } Promise对象，返回播放倍速速率。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    getPlaybackRate(): Promise<double>;

    /**
     * 获取已加载的时间区间段的列表。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 对于本地媒体资源，返回的时间区间为0到整个媒体时长。
     * >
     * > - 对于网络媒体资源，返回本地已缓存的时间区间段的列表。
     *
     * @returns { Promise<Array<Range>> } Promise对象，返回播放器当前已加载的时间区间段的列表。
     *     <br>时间区间段以播放时间轴上的[start, end]位置表示，单位为毫秒。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getLoadedTimeRanges(): Promise<Array<Range>>;

    /**
     * 获取可跳转的时间区间段的列表。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 对于本地媒体资源及支持分段请求的媒体资源，返回的时间区间为0到整个媒体时长。
     * >
     * > - 对于仅支持分块传输的媒体资源，没有可跳转的时间范围。
     *
     * @returns { Promise<Array<Range>> } Promise对象，返回播放器当前可跳转的时间区间段的列表。
     *     <br>时间区间段以播放时间轴上的[start, end]位置表示，单位为毫秒。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getSeekableTimeRanges(): Promise<Array<Range>>;

    /**
     * 跳转到播放源的默认接入点。直播流为当前推荐的最新接入点；点播视频通常为视频起始位置（等同于seek(0)）。
     *
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    seekToDefaultPosition(): void;

    /**
     * 获取当前播放器的统计指标信息，可以在准备（prepared）/播放（playing）/暂停（paused）/完成（completed）/停止（stopped）状态调用。使用Promise异步回调。
     *
     * @returns { Promise<PlaybackMetrics> } Promise对象，返回当前播放器的指标信息PlaybackMetrics。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    getPlaybackStatisticMetrics(): Promise<PlaybackMetrics>;

    /**
     * 设置播放策略，只能在initialized状态下调用。使用Promise异步回调。
     *
     * @param { PlaybackStrategy } strategy - 播放策略。
     * @returns { Promise<void> } Promise对象。无返回结果。
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
     * 设置音频静音/取消音频静音，从API version 20开始，增加支持设置画面显示/不显示。使用Promise异步回调。
     * 
     * 只能在prepared/playing/paused/completed状态下调用。
     *
     * @param { MediaType } mediaType - 媒体类型枚举。<br>**API version 12-19**：仅支持设置MEDIA_TYPE_AUD。<br>**API version 20及以后**：增
     *     加支持设置MEDIA_TYPE_VID。
     * @param { boolean } muted - **API version 12-19**：仅支持设置音频播放策略，表示音频是否静音播放。true为静音播放，false为取消静音播放。<br>
     *     **API version 20及以后**：增加支持设置视频播放策略，表示视频画面是否关闭。true为关闭画面，false为恢复画面。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 设置播放区间，并通过指定的[SeekMode]{@link @ohos.multimedia.media:media.SeekMode}跳转到区间开始位置。设置之后，只播放音视频文件设定区间内的内容。使用Promise异步回调
     * 。可在**initialized**/**prepared**/**paused**/**stopped**/**completed**状态下使用。
     *
     * @param { int } startTimeMs - 区间开始位置，单位ms，取值[0, duration)。可以设置-1值，系统将会从0位置开始播放。
     * @param { int } endTimeMs - 区间结束位置，单位ms，取值(startTimeMs, duration]。可以设置-1值，系统将会播放到资源末尾。
     * @param { SeekMode } [mode] - 支持SeekMode.SEEK_PREV_SYNC和SeekMode.SEEK_CLOSEST, <br/>默认值: SeekMode.SEEK_PREV_SYNC。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - The parameter check failed. Return by promise.
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    setPlaybackRange(startTimeMs: int, endTimeMs: int, mode?: SeekMode) : Promise<void>;

    /**
     * 查询媒体源是否支持以SEEK_CONTINUOUS模式[SeekMode]{@link @ohos.multimedia.media:media.SeekMode}进行
     * [seek]{@link media.AVPlayer.seek}，在prepared/playing/paused/completed状态调用返回实际值，其余状态调用返回false。对于不支持SEEK_CONTINUOUS模
     * 式进行seek的设备，返回false。
     *
     * @returns { boolean } 媒体源是否支持以SEEK_CONTINUOUS模式进行seek。true表示支持，false表示不支持。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    isSeekContinuousSupported() : boolean;

    /**
     * 获取当前播放位置，可以在prepared/playing/paused/completed状态调用。
     *
     * @returns { int } 返回当前播放位置的时间，单位：毫秒（ms）。
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    getPlaybackPosition() : int;

    /**
     * 获取当前播放位置，可以在播放（playing）/暂停（paused）/完成（completed）状态调用。
     *
     * @returns { long } 返回当前播放位置的时间，单位：微秒（μs）。
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    getCurrentPresentationTimestamp() : long;

    /**
     * 动态开启/关闭超分算法，可在 'initialized' | 'prepared' | 'playing' | 'paused' | 'completed' | 'stopped' 状态下调用。使用Promise异步回调。
     * 
     * 在调用[prepare()]{@link media.AVPlayer.prepare(callback: AsyncCallback<void>)}前先通过
     * [PlaybackStrategy]{@link @ohos.multimedia.media:media.PlaybackStrategy}使能超分。
     *
     * @param { boolean } enabled - 表示是否开启超分。true表示开启超分，false表示关闭超分。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 动态设置超分算法的输出分辨率。可在 'initialized' | 'prepared' | 'playing' | 'paused' | 'completed' | 'stopped' 状态下调用。使用Promise异步回调
     * 。
     * 
     * 输入参数须在320x320~1920x1080范围内，单位为像素。
     * 
     * 在调用[prepare()]{@link media.AVPlayer.prepare(callback: AsyncCallback<void>)}前先通过
     * [PlaybackStrategy]{@link @ohos.multimedia.media:media.PlaybackStrategy}使能超分。
     *
     * @param { int } width - 超分算法的目标输出视频宽度，取值范围为[320-1920]，单位为像素。
     * @param { int } height - 超分算法的目标输出视频高度，取值范围为[320-1080]，单位为像素。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 结束当前媒体源的播放，并开始播放媒体源列表中的下一个媒体源。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 结束当前媒体源的播放，并开始播放媒体源列表中的上一个媒体源。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400108 - The next mediasource does not exist in the playlist. Returned via promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    advanceToPrevMediaSource(): Promise<void>;

    /**
     * 获取当前正在播放的媒体源对象。
     *
     * @returns { MediaSource | undefined } 如果操作成功，则返回当前媒体源，否则返回 undefined。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getCurrentMediaSource(): MediaSource | undefined;

    /**
     * 向播放器的播放列表添加一个新的播放源。使用Promise异步回调。
     *
     * @param { MediaSource } src - 要添加的媒体源。
     * @param { string } [id] - 表示播放列表中媒体源的ID，新添加的媒体源会插入到指定媒体源之前。如果未指定，默认添加到列表末尾。
     * @returns { Promise<string> } Promise对象，返回对应媒体资源的唯一ID。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400108 - The media source ID does not exist in the playlist. Returned by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    addPlaybackMediaSource(src: MediaSource, id?: string): Promise<string>;

    /**
     * 从播放器的播放列表中移除指定的媒体源。使用Promise异步回调。
     * 
     * > **注意：**
     * >
     * > - 如果该ID在当前播放列表中不存在，将返回错误码。
     *
     * @param { string } id - 将媒体源添加到播放列表后返回的ID。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400108 - The media source ID does not exist in the playlist. Returned via promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    removePlaybackMediaSource(id: string): Promise<void>;

    /**
     * 清空播放列表中的所有项目，当前正在播放的媒体将会立即终止。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - operation not allowed . Returned via promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    clearPlaybackList(): Promise<void>;

    /**
     * 结束当前媒体源的播放，并开始播放列表中指定的媒体源。使用Promise异步回调。
     *
     * @param { string } id - 指定媒体源的唯一标识符ID。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400108 - The mediasource does not exist in the playlist. Returned via promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    advanceToMediaSource(id: string): Promise<void>;

    /**
     * 获取当前播放列表中所有媒体源的数组。
     *
     * @returns { Array<MediaSource | undefined> } 播放列表中的媒体源数组。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getMediaSources(): Array<MediaSource | undefined>;

    /**
     * 媒体URL，只允许在**idle**状态下设置。
     * 
     * 支持的视频格式：mp4、mpeg-ts、mkv。
     * 
     * 支持的音频格式：m4a、aac、mp3、ogg、wav、flac、amr、ape。
     * 
     * **支持路径示例**：
     * 
     * 1. fd类型播放：fd://xx。
     * 
     * ![](docroot://reference/apis-media-kit/figures/zh-cn_image_url.png)
     * 
     * 2. http网络播放：`http://xx`。
     * 3. https网络播放：`https://xx`。
     * 4. HLS网络播放路径：`http://xx`或者`https://xx`。
     * 
     * **说明：**
     * 
     * - 设置网络播放路径，需[声明权限](docroot://security/AccessToken/declare-permissions.md)：
     * [ohos.permission.INTERNET](docroot://security/AccessToken/permissions-for-all.md#ohospermissioninternet)，相关错误码: 
     * [201 权限校验失败](docroot://reference/errorcode-universal.md#201-权限校验失败)。
     * - 从API version 11开始不支持webm。
     * - 将资源句柄（fd）传递给AVPlayer实例之后，请不要通过该资源句柄做其他读写操作，包括但不限于将同一个资源句柄传递给多个AVPlayer / AVMetadataExtractor / AVImageGenerator
     * / AVTranscoder。同一时间通过同一个资源句柄读写文件时存在竞争关系，将导致媒体播放器数据获取异常。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    url?: string;

    /**
     * 媒体文件描述，只允许在**idle**状态下设置。
     * 
     * **使用场景**：应用中的媒体资源被连续存储在同一个文件中。
     * 
     * 支持的视频格式（mp4、mpeg-ts、mkv）。
     * 
     * 支持的音频格式（m4a、aac、mp3、ogg、wav、flac、amr、ape）。
     * 
     * **使用示例**：
     * 
     * 假设一个连续存储的媒体文件：
     * 
     * 视频1（地址偏移：0，字节长度:100）；
     * 
     * 视频2（地址偏移：101，字节长度：50）；
     * 
     * 视频3（地址偏移：151，字节长度：150）；
     * 
     * 1. 播放视频1：AVFileDescriptor { fd = 资源句柄; offset = 0; length = 100; }。
     * 2. 播放视频2：AVFileDescriptor { fd = 资源句柄; offset = 101; length = 50; }。
     * 3. 播放视频3：AVFileDescriptor { fd = 资源句柄; offset = 151; length = 150; }。
     * 
     * 假设是一个独立的媒体文件: 请使用src=fd://xx。
     * 
     * **说明：**
     * 
     * 从API version 11开始不支持webm。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    fdSrc?: AVFileDescriptor;

    /**
     * 流式媒体资源描述，只允许在**idle**状态下设置。
     * 
     * **使用场景**：应用播放从远端下载到本地的文件，在应用未下载完整音视频资源时，提前播放已获取的资源数据。若将已获取的资源数据写入到本地文件中，同时从本地文件中读取数据，即可实现边播边缓存的能力。
     * 
     * 支持的视频格式（mp4、mpeg-ts、mkv）。
     * 
     * 支持的音频格式（m4a、aac、mp3、ogg、wav、flac、amr、ape）。
     * 
     * **使用示例**：
     * 
     * 假设用户正在从远端服务器获取音视频媒体文件，希望下载到本地的同时播放已经下载好的部分：
     * 
     * 1.用户需要获取媒体文件的总大小size（单位为字节），获取不到时设置为-1。
     * 
     * 2.用户需要实现回调函数func用于填写数据，如果size = -1，则func形式为：func(buffer: ArrayBuffer, length: number)，此时播放器只会按照顺序获取数据；否则func形式为：
     * func(buffer: ArrayBuffer, length: number, pos: number)，播放器会按需跳转并获取数据。
     * 
     * 3.用户设置AVDataSrcDescriptor {fileSize = size, callback = func}。
     * 
     * **注意事项**：
     * 
     * 如果播放的是mp4/m4a格式用户需要保证moov字段（媒体信息字段）在mdat字段（媒体数据字段）之前，或者moov之前的字段小于10M，否则会导致解析失败无法播放。
     * 
     * **说明：**
     * 
     * 从API version 11开始不支持webm。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    dataSrc?: AVDataSrcDescriptor;

    /**
     * 视频循环播放属性，默认false，设置为true表示循环播放，动态属性。
     * 
     * 只允许在**prepared**/**playing**/**paused**/**completed**状态下设置。
     * 
     * 直播场景不支持loop设置。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    loop: boolean;

    /**
     * 在播放媒体列表时，设置循环模式。默认值为PLAYLIST_LOOP_MODE_ALL，表示循环播放列表中的所有项目。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    playlistLoopMode?: PlaylistLoopMode;

    /**
     * 音频焦点模型，默认SHARE_MODE，动态属性。
     * 
     * 只允许在**prepared**/**playing**/**paused**/**completed**状态下设置。
     * 
     * 在第一次调用[play()]{@link media.AVPlayer.play(callback: AsyncCallback<void>)}之前设置， 以便此后中断模式生效。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    audioInterruptMode?: audio.InterruptMode;

    /**
     * 设置音频渲染信息。若媒体源包含视频，则usage默认值为STREAM_USAGE_MOVIE，否则usage默认值为STREAM_USAGE_MUSIC。rendererFlags默认值为0。若默认usage不满足需求，则须主
     * 动配置[audio.AudioRendererInfo]{@link @ohos.multimedia.audio:audio.AudioRendererInfo}。
     * 
     * 只允许在**initialized**状态下设置。
     * 
     * 在第一次调用[prepare()]{@link media.AVPlayer.prepare(callback: AsyncCallback<void>)}之前设置，以便音频渲染器信息在之后生效。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    audioRendererInfo?: audio.AudioRendererInfo;

    /**
     * 设置音频音效模式，默认值为EFFECT_DEFAULT，动态属性。audioRendererInfo的usage变动时会恢复为默认值，只允许在**prepared**/**playing**/**paused**/
     * **completed**状态下设置。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    audioEffectMode ?: audio.AudioEffectMode;

    /**
     * 视频的当前播放位置，单位为毫秒（ms），可查询参数。
     * 
     * 返回为（-1）表示无效值，**prepared**/**playing**/**paused**/**completed**状态下有效。
     * 
     * 直播场景默认返回（-1）。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly currentTime: int;

    /**
     * 视频时长，单位为毫秒（ms），可查询参数。
     * 
     * 返回为（-1）表示无效值，**prepared**/**playing**/**paused**/**completed**状态下有效。
     * 
     * 直播场景默认返回（-1）。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly duration: int;

    /**
     * 音视频播放的状态，全状态有效，可查询参数。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly state: AVPlayerState;

    /**
     * 视频窗口ID，默认无窗口。
     * 
     * 仅支持在**initialized**状态下初始化。
     * 
     * 初始化后可以在**prepared**/**playing**/**paused**/**completed**/**stopped**状态下重新设置，重新设置后视频播放将在新的窗口渲染。
     * 
     * 使用场景：视频播放时的窗口渲染（纯音频播放时不涉及）。
     * 
     * **使用示例**：
     * 
     * 通过
     * [getXComponentSurfaceId]{@link ./@internal/component/ets/xcomponent:XComponentController.getXComponentSurfaceId}接
     * 口创建surfaceId。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    surfaceId?: string;

    /**
     * 视频宽，单位为像素（px），可查询参数。
     * 
     * 返回为（0）表示无效值，**prepared**/**playing**/**paused**/**completed**状态下有效。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly width: int;

    /**
     * 视频高，单位为像素（px），可查询参数。
     * 
     * 返回为（0）表示无效值，**prepared**/**playing**/**paused**/**completed**状态下有效。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly height: int;

    /**
     * 视频缩放模式，默认VIDEO_SCALE_TYPE_FIT，动态属性。
     * 
     * 只允许在**prepared**/**playing**/**paused**/**completed**状态下设置。
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
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamic&static
     */
    enableStartFrameRateOpt?: boolean;

    /**
     * 设置倍速模式，只能在prepared/playing/paused/completed状态调用，可以通过
     * [on('speedDone')]{@link media.AVPlayer.on(type: 'speedDone', callback: Callback<int>)}事件确认是否生效。
     * 
     * > **注意：**
     * >
     * > 直播场景不支持setSpeed。
     *
     * @param { PlaybackSpeed } speed - 指定播放倍速模式。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setSpeed(speed: PlaybackSpeed): void;

    /**
     * 设置倍速模式。只能在prepared/playing/paused/completed状态调用，取值范围是[0.125, 4.0]，可以通过
     * [playbackRateDone]{@link media.AVPlayer.on(type: 'playbackRateDone', callback: OnPlaybackRateDone)}事件确认是否生效。
     * 
     * > **注意：**
     * >
     * > 直播场景不支持setPlaybackRate。
     *
     * @param { double } rate - 指定播放倍速速率，取值范围为[0.125, 4.0]。
     * @throws { BusinessError } 5400108 - The parameter check failed, parameter value out of range.
     * @throws { BusinessError } 5400102 - Operation not allowed, if invalid state or live stream.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setPlaybackRate(rate: double): void;

    /**
     * 设置比特率，以播放所指定比特率的流媒体资源，当前仅对**HLS/DASH协议网络流**有效。默认情况下，AVPlayer会根据网络连接速度选择合适的比特率。只能在prepared/playing/paused/
     * completed状态调用，可以通过[bitrateDone]{@link media.AVPlayer.on(type: 'bitrateDone', callback: Callback<int>)}事件确认是否生效。
     *
     * @param { int } bitrate - 指定比特率，须通过
     *     [availableBitrates]{@link media.AVPlayer.on(type: 'availableBitrates', callback: Callback<Array<int>>)}事件获得当前
     *     HLS/DASH协议网络流可用的比特率列表，如果用户指定的比特率不在此列表中，则播放器将从可用比特率列表中选择最接近的比特率。如果通过availableBitrates事件获得的比特率列表长度为0，则不支持指定比特率，
     *     也不会产生bitrateDone回调。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setBitrate(bitrate: int): void;

	  /**
    * 设置播放器的响度。调用该接口后，响度增益立即生效。使用Promise异步回调。
    * 
    * > **说明：**
    * >
    * > - 当播放处于prepared/playing/paused/completed/stopped状态时，可调用该接口。
    * >
    * > - 调用此接口时，需确保已设置音频渲染信息AVPlayer.audioRendererInfo，audioRendererInfo的usage参数必须是
    * > [STREAM_USAGE_MUSIC]{@link @ohos.multimedia.audio:audio.StreamUsage}、
    * > [STREAM_USAGE_MOVIE]{@link @ohos.multimedia.audio:audio.StreamUsage}、
    * > [STREAM_USAGE_AUDIOBOOK]{@link @ohos.multimedia.audio:audio.StreamUsage}其中之一。
    * >
    * > - 该接口不支持高清通路的响度设置。
    * >
    * > - 音频流的时延模式必须是普通时延。
    * >
    * > - 该接口错误信息通过[on('error')]{@link media.AVPlayer.on(type: 'error', callback: ErrorCallback)}回调。
    *
    * @param { double } loudnessGain - 设置播放器的响度值，单位为dB，响度范围为[-90.0, 24.0]。默认值为0.0dB。
    * @returns { Promise<void> } Promise对象，无返回结果。
    * @syscap SystemCapability.Multimedia.Media.AVPlayer
    * @since 21 dynamic
    * @since 23 static
    */
	  setLoudnessGain(loudnessGain: double): Promise<void>;

    /**
     * 设置解密配置。当收到
     * [on('mediaKeySystemInfoUpdate')]{@link media.AVPlayer.on(type: 'mediaKeySystemInfoUpdate', callback: Callback<Array<drm.MediaKeySystemInfo>>)}
     * 事件时，需根据事件上报的信息创建相关配置并设置解密配置，否则无法播放。
     *
     * @param { drm.MediaKeySession } mediaKeySession - 解密会话
     * @param { boolean } secureVideoPath - 安全视频通路，true表示选择安全视频通路，false表示选择非安全视频通路
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    setDecryptionConfig(mediaKeySession: drm.MediaKeySession, secureVideoPath: boolean): void;

    /**
     * 获取当前播放的媒体资源的MediaKeySystemInfo。需要在
     * [on('mediaKeySystemInfoUpdate')]{@link media.AVPlayer.on(type: 'mediaKeySystemInfoUpdate', callback: Callback<Array<drm.MediaKeySystemInfo>>)}
     * 事件触发成功后才能调用。
     *
     * @returns { Array<drm.MediaKeySystemInfo> } MediaKeySystemInfo数组，MediaKeySystemInfo具有uuid和pssh两个属性。当返回值为undefined时
     *     ，表示mediaKeySystemInfoUpdate事件未触发。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getMediaKeySystemInfos(): Array<drm.MediaKeySystemInfo>;

    /**
     * 监听mediaKeySystemInfoUpdate事件。
     *
     * @param { 'mediaKeySystemInfoUpdate' } type - 版权保护信息更新上报事件回调类型，支持的事件：'mediaKeySystemInfoUpdate'，当播放内容的版权保护信息更新时上报事
     *     件。
     * @param { function } callback - 版权保护信息更新上报事件回调方法，上报MediaKeySystemInfo数组。 [since 11 - 11]
     * @param { Callback<Array<drm.MediaKeySystemInfo>> } callback - 版权保护信息更新上报事件回调方法，上报MediaKeySystemInfo数组。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'mediaKeySystemInfoUpdate', callback: Callback<Array<drm.MediaKeySystemInfo>>): void;

    /**
     * 取消监听mediaKeySystemInfoUpdate事件。
     *
     * @param { 'mediaKeySystemInfoUpdate' } type - 版权保护信息更新上报事件回调类型，取消注册的事件：'mediaKeySystemInfoUpdate'。
     * @param { function } callback - 版权保护信息更新上报事件回调方法，上报版权保护信息数组。如果填写该参数，仅取消注册此回调方法，否则取消注册mediaKeySystemInfoUpdate事件的所有
     *     回调方法。 [since 11 - 11]
     * @param { Callback<Array<drm.MediaKeySystemInfo>> } callback - 版权保护信息更新上报事件回调方法，上报版权保护信息数组。如果填写该参数，仅取消注册此回调方法，否则取消
     *     注册mediaKeySystemInfoUpdate事件的所有回调方法。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'mediaKeySystemInfoUpdate', callback?: Callback<Array<drm.MediaKeySystemInfo>>): void;

    /**
     * 监听播放状态机AVPlayerState切换的事件。
     *
     * @param { 'stateChange' } type - 状态机切换事件回调类型，支持的事件：'stateChange'，用户操作和系统都会触发此事件。
     * @param { function } callback - 状态机切换事件回调方法。 [since 9 - 11]
     * @param { OnAVPlayerStateChangeHandle } callback - 状态机切换事件回调方法。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle): void;
    /**
     * 取消监听播放状态机[AVPlayerState]{@link @ohos.multimedia.media:media.AVPlayerState}切换的事件。
     *
     * @param { 'stateChange' } type - 状态机切换事件回调类型，取消注册的事件：'stateChange'
     * @param { OnAVPlayerStateChangeHandle } callback - 状态机切换事件回调方法。如果填写该参数，仅取消注册此回调的方法，否则取消注册stateChange事件的所有回调方法
     *     。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    off(type: 'stateChange', callback?: OnAVPlayerStateChangeHandle): void;
    /**
     * 监听setVolume生效的事件。
     *
     * @param { 'volumeChange' } type - setVolume生效的事件回调类型，支持的事件：'volumeChange'，每次调用setVolume后都会回调此事件。
     * @param { Callback<double> } callback - setVolume生效的事件回调方法，上报生效的媒体音量。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'volumeChange', callback: Callback<double>): void;
    /**
     * 取消监听setVolume生效的事件。
     *
     * @param { 'volumeChange' } type - setVolume生效的事件回调类型，取消注册的事件：'volumeChange'。
     * @param { Callback<double> } callback - setVolume生效的事件回调方法，上报生效的媒体音量。如果填写该参数，仅取消注册此回调方法，否则取消注册volumeChange事件的所有回调方
     *     法。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 19]
     * @since 9 dynamic
     */
    off(type: 'volumeChange', callback?: Callback<double>): void;
    /**
     * 监听资源播放至结尾的事件；如果用户设置[loop](docroot://reference/apis-media-kit/arkts-apis-media-AVPlayer.md#属性)=true，播放会跳转至开头重播；如果用
     * 户没有设置loop，会通过[stateChange]{@link media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)}上报
     * completed状态。
     *
     * @param { 'endOfStream' } type - 资源播放至结尾的事件回调类型，支持的事件：'endOfStream'，当播放至结尾时会上报此事件。
     * @param { Callback<void> } callback - 资源播放至结尾的事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'endOfStream', callback: Callback<void>): void;
    /**
     * 取消监听资源播放至结尾的事件。
     *
     * @param { 'endOfStream' } type - 资源播放至结尾的事件回调类型，取消注册的事件：'endOfStream'。
     * @param { Callback<void> } callback - 资源播放至结尾的事件回调方法。如果填写该参数，仅取消注册此回调方法，否则取消注册endOfStream事件的所有回调方法。 
     * @param { Callback<void> } [callback] - 资源播放至结尾的事件回调方法。如果填写该参数，仅取消注册此回调方法，否则取消注册endOfStream事件的所有回调方法。 [since 19]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 19]
     * @since 9 dynamic
     */
    off(type: 'endOfStream', callback?: Callback<void>): void;
    /**
     * 监听seek生效的事件。
     *
     * @param { 'seekDone' } type - seek生效的事件回调类型，支持的事件：'seekDone'，除SEEK_CONTINUOUS外的
     *     [SeekMode]{@link @ohos.multimedia.media:media.SeekMode}每次调用seek后都会回调此事件。
     * @param { Callback<int> } callback - 回调函数。seek生效的事件回调方法，只会上报用户请求的time位置。<br/>**视频播放：**
     *     [SeekMode]{@link @ohos.multimedia.media:media.SeekMode}会造成实际跳转位置与用户设置产生偏差，精准位置需要通过currentTime获取，事件回调的time仅代表完
     *     成用户某一次请求。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    on(type: 'seekDone', callback: Callback<int>): void;
    /**
     * 取消监听seek生效的事件。
     *
     * @param { 'seekDone' } type - seek生效的事件回调类型，取消注册的事件：'seekDone'。
     * @param { Callback<int> } callback - 回调函数。seek生效的事件回调方法，只会上报用户请求的time位置。<br/>**视频播放：**
     *     [SeekMode]{@link @ohos.multimedia.media:media.SeekMode}会造成实际跳转位置与用户设置产生偏差，精准位置需要通过currentTime获取，事件回调的time仅代表完
     *     成用户某一次请求。如果填写该参数，仅取消注册此回调的方法，否则取消注册seekDone事件的所有回调方法。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    off(type: 'seekDone', callback?: Callback<int>): void;
    /**
     * 监听setSpeed生效的事件。
     *
     * @param { 'speedDone' } type - setSpeed生效的事件回调类型，支持的事件：'speedDone'，每次调用setSpeed后都会回调此事件。
     * @param { Callback<int> } callback - 回调函数。当setSpeed成功，上报生效的倍速模式，具体见
     *     [PlaybackSpeed]{@link @ohos.multimedia.media:media.PlaybackSpeed}。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'speedDone', callback: Callback<int>): void;
    /**
     * 取消监听setSpeed生效的事件。
     *
     * @param { 'speedDone' } type - setSpeed生效的事件回调类型，取消注册的事件：'speedDone'。
     * @param { Callback<int> } callback - 回调函数。当setSpeed成功，上报生效的倍速模式，具体见
     *     [PlaybackSpeed]{@link @ohos.multimedia.media:media.PlaybackSpeed}。如果填写该参数，仅取消注册此回调方法，否则取消注册speedDone事件的所有回调方法
     *     。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 19]
     * @since 9 dynamic
     */
    off(type: 'speedDone', callback?: Callback<int>): void;

    /**
     * 监听[setPlaybackRate]{@link media.AVPlayer.setPlaybackRate}生效的事件。
     *
     * @param { 'playbackRateDone' } type - setPlaybackRate生效的事件回调类型，支持的事件：'playbackRateDone'，每次调用setPlaybackRate后都会回调此事
     *     件。
     * @param { OnPlaybackRateDone } callback - setPlaybackRate生效的事件回调方法，上报设置后的播放速率。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'playbackRateDone', callback: OnPlaybackRateDone): void;

    /**
     * 取消监听[setPlaybackRate]{@link media.AVPlayer.setPlaybackRate}生效的事件。
     *
     * @param { 'playbackRateDone' } type - setPlaybackRate生效的事件回调类型，取消注册的事件：'playbackRateDone'。
     * @param { OnPlaybackRateDone } [callback] - setPlaybackRate生效的事件回调方法，上报设置后的播放速率。如果填写该参数，仅取消注册此回调方法，否则取消注册
     *     playbackRateDone事件的所有回调方法。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'playbackRateDone', callback?: OnPlaybackRateDone): void;

    /**
     * 监听setBitrate生效的事件。
     *
     * @param { 'bitrateDone' } type - setBitrate生效的事件回调类型，支持的事件：'bitrateDone'，每次调用setBitrate后都会回调此事件。
     * @param { Callback<int> } callback - setBitrate生效的事件回调方法，上报生效的比特率。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'bitrateDone', callback: Callback<int>): void;
    /**
     * 取消监听setBitrate生效的事件。
     *
     * @param { 'bitrateDone' } type - setBitrate生效的事件回调类型，取消注册的事件：'bitrateDone'。
     * @param { Callback<number> } callback - setBitrate生效的事件回调方法，上报生效的比特率。如果填写该参数，仅取消注册此回调方法，否则取消注册bitrateDone事件的所有回调方法
     *     。 
     * @param { Callback<int> } [callback] - setBitrate生效的事件回调方法，上报生效的比特率。如果填写该参数，仅取消注册此回调方法，否则取消注册bitrateDone事件的所有回调方法
     *     。 [since 19]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 19]
     * @since 9 dynamic
     */
    off(type: 'bitrateDone', callback?: Callback<int>): void;

    /**
     * 监听资源播放当前时间，单位为毫秒（ms），用于刷新进度条当前位置，默认间隔100ms时间上报，因用户操作（seek）产生的时间变化会立刻上报。
     * 
     * > **注意：**
     * >
     * > - 直播场景不支持timeUpdate上报。
     * >
     * > - 操作（seek）时必须等待seekdone结束才能根据timeUpdate来更新进度条。
     * >
     * > - 在pause状态下，缓冲结束时播放器会上报timeUpdate事件。
     *
     * @param { 'timeUpdate' } type - 时间更新的回调类型，支持的事件：'timeUpdate'。
     * @param { Callback<int> } callback - 回调函数。返回当前时间。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    on(type: 'timeUpdate', callback: Callback<int>): void;
    /**
     * 取消监听资源播放当前时间。
     *
     * @param { 'timeUpdate' } type - 时间更新的回调类型，取消注册的事件：'timeUpdate'。
     * @param { Callback<int> } [callback] - 回调函数。返回当前时间。如果填写该参数，仅取消注册此回调方法，否则取消注册timeUpdate事件的所有回调方法。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    off(type: 'timeUpdate', callback?: Callback<int>): void;
    /**
     * 监听资源播放资源的时长，单位为毫秒（ms），用于刷新进度条长度，默认只在prepared上报一次，同时允许一些特殊码流刷新多次时长。
     * 
     * > **注意：**
     * >
     * > 直播场景不支持durationUpdate上报。
     *
     * @param { 'durationUpdate' } type - 时长更新的回调类型，支持的事件：'durationUpdate'。
     * @param { Callback<int> } callback - 回调函数。返回资源时长。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'durationUpdate', callback: Callback<int>): void;
    /**
     * 取消监听资源播放资源的时长。
     *
     * @param { 'durationUpdate' } type - 时长更新的回调类型，取消注册的事件：'durationUpdate'。
     * @param { Callback<number> } callback - 回调函数。返回资源时长。如果填写该参数，仅取消注册此回调方法，否则取消注册durationUpdate事件的所有回调方法
     *     。 
     * @param { Callback<int> } [callback] - 回调函数。返回资源时长。如果填写该参数，仅取消注册此回调方法，否则取消注册durationUpdate事件的所有回调方法。 [since 19]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 19]
     * @since 9 dynamic
     */
    off(type: 'durationUpdate', callback?: Callback<int>): void;

    /**
     * 订阅音视频缓存更新事件，仅网络播放支持该订阅事件。
     *
     * @param { 'bufferingUpdate' } type - 播放缓存事件回调类型，支持的事件：'bufferingUpdate'。
     * @param { function } callback - 播放缓存事件回调方法。 [since 9 - 11]
     * @param { OnBufferingUpdateHandler } callback - 播放缓存事件回调方法。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'bufferingUpdate', callback: OnBufferingUpdateHandler): void;

    /**
     * 取消监听音视频缓存更新事件。
     *
     * @param { 'bufferingUpdate' } type - 播放缓存事件回调类型，取消注册的事件：'bufferingUpdate'。
     * @param { OnBufferingUpdateHandler } [callback] - 播放缓存事件回调方法。如果填写该参数，仅取消注册此回调方法，否则取消注册bufferingUpdate事件的所有回调方法
     *     。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    off(type: 'bufferingUpdate', callback?: OnBufferingUpdateHandler): void;

    /**
     * 订阅视频播放开始首帧渲染的更新事件，仅视频播放支持该订阅事件，该事件仅代表播放服务将第一帧画面送显示模块，实际效果依赖显示服务渲染性能。
     *
     * @param { 'startRenderFrame' } type - 视频播放开始首帧渲染事件回调类型，支持的事件：'startRenderFrame'。
     * @param { Callback<void> } callback - 视频播放开始首帧渲染事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'startRenderFrame', callback: Callback<void>): void;

    /**
     * 取消监听视频播放开始首帧渲染的更新事件。
     *
     * @param { 'startRenderFrame' } type - 视频播放开始首帧渲染事件回调类型，取消注册的事件：'startRenderFrame'。
     * @param { Callback<void> } callback - 视频播放开始首帧渲染事件回调方法。如果填写该参数，仅取消注册此回调方法，否则取消注册startRenderFrame事件的所有回调方法
     *     。 
     * @param { Callback<void> } [callback] - 视频播放开始首帧渲染事件回调方法。如果填写该参数，仅取消注册此回调方法，否则取消注册startRenderFrame事件的所有回调方法
     *     。 [since 19]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 19]
     * @since 9 dynamic
     */
    off(type: 'startRenderFrame', callback?: Callback<void>): void;

    /**
     * 监听视频播放宽高变化事件，仅视频播放支持该订阅事件，默认只在prepared状态上报一次，但HLS协议码流会在切换分辨率时上报。
     *
     * @param { 'videoSizeChange' } type - 视频播放宽高变化事件回调类型，支持的事件：'videoSizeChange'。
     * @param { function } callback - 视频播放宽高变化事件回调方法。 [since 9 - 11]
     * @param { OnVideoSizeChangeHandler } callback - 视频播放宽高变化事件回调方法。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'videoSizeChange', callback: OnVideoSizeChangeHandler): void;

    /**
     * 取消监听视频播放宽高变化事件。
     *
     * @param { 'videoSizeChange' } type - 视频播放宽高变化事件回调类型，取消注册的事件：'videoSizeChange'。
     * @param { OnVideoSizeChangeHandler } [callback] - 视频播放宽高变化事件回调方法。如果填写该参数，仅取消注册此回调方法，否则取消注册videoSizeChange事件的所有回调方法
     *     。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    off(type: 'videoSizeChange', callback?: OnVideoSizeChangeHandler): void;

    /**
     * 监听音频焦点变化事件，多个音视频资源同时播放时，会根据音频焦点模型[audio.InterruptMode]{@link @ohos.multimedia.audio:audio.InterruptMode}触发此事件。应用需
     * 根据不同焦点变化事件作相应处理。具体可参考[处理音频焦点事件](docroot://media/audio/audio-playback-concurrency.md)。
     *
     * @param { 'audioInterrupt' } type - 音频焦点变化事件回调类型，支持的事件：'audioInterrupt'。
     * @param { function } callback - 音频焦点变化事件回调方法。 [since 9 - 11]
     * @param { Callback<audio.InterruptEvent> } callback - 音频焦点变化事件回调方法。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>): void;

    /**
     * 取消监听音频焦点变化事件。
     *
     * @param { 'audioInterrupt' } type - 音频焦点变化事件回调类型，取消注册的事件：'audioInterrupt'。
     * @param { Callback<audio.InterruptEvent> } callback - 音频焦点变化事件回调方法。如果填写该参数，仅取消注册此回调方法，否则取消注册audioInterrupt事件的所有回调方
     *     法。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    off(type: 'audioInterrupt', callback?: Callback<audio.InterruptEvent>): void;

    /**
     * 监听HLS/DASH协议网络流可用的比特率列表，只会在切换prepared状态后上报。
     *
     * @param { 'availableBitrates' } type - HLS/DASH协议网络流可用比特率上报事件回调类型，支持的事件：'availableBitrates'，只会在prepared之后上报一次。
     * @param { function } callback - HLS/DASH协议网络流可用比特率上报事件回调方法，使用数组存放支持的比特率。如果数组长度为0，则不支持指定比特率。 [since 9 - 11]
     * @param { Callback<Array<int>> } callback - HLS/DASH协议网络流可用比特率上报事件回调方法，使用数组存放支持的比特率。如果数组长度为0，则不支持指定比特率。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'availableBitrates', callback: Callback<Array<int>>): void;

    /**
     * 取消监听HLS/DASH协议网络流可用的比特率列表，调用[prepare]{@link media.AVPlayer.prepare(callback: AsyncCallback<void>)}后，上报此事件。
     *
     * @param { 'availableBitrates' } type - HLS/DASH协议网络流可用比特率上报事件回调类型，取消注册的事件：'availableBitrates'。
     * @param { Callback<Array<int>> } callback - HLS/DASH协议网络流可用比特率上报事件回调方法，使用数组存放支持的比特率。如果数组长度为0，则不支持指定比特率。如果填写该参数，仅取消
     *     注册此回调方法，否则取消注册availableBitrates事件的所有回调方法。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    off(type: 'availableBitrates', callback?: Callback<Array<int>>): void;

    /**
     * 监听[AVPlayer]{@link @ohos.multimedia.media:media}的错误事件，该事件仅用于错误提示，不需要用户停止播控动作。如果此时
     * [AVPlayerState]{@link @ohos.multimedia.media:media.AVPlayerState}也切至error状态，用户需要通过
     * [reset()]{@link media.AVPlayer.reset(callback: AsyncCallback<void>)}或者
     * [release()]{@link media.AVPlayer.release(callback: AsyncCallback<void>)}退出播放操作。若调用
     * [reset()]{@link media.AVPlayer.reset(callback: AsyncCallback<void>)}方法后，播放状态仍为error状态，建议直接调用
     * [release()]{@link media.AVPlayer.release(callback: AsyncCallback<void>)}方法，退出播放操作。
     *
     * @param { 'error' } type - 错误事件回调类型，支持的事件：'error'，用户操作和系统都会触发此事件。
     * @param { ErrorCallback } callback - 错误事件回调方法，使用播放器的过程中发生错误，会提供错误码ID和错误信息。
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
     * 取消监听播放的错误事件。
     *
     * @param { 'error' } type - 错误事件回调类型，取消注册的事件：'error'
     * @param { ErrorCallback } callback - 错误事件回调方法，使用播放器的过程中发生错误，会提供错误码ID和错误信息。如果填写该参数，仅取消注册此回调方法，否则取消注册error事件的所有回调方法
     *     。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * 订阅监听音频流输出设备变化及原因，使用callback方式返回结果。
     * 
     * 在订阅此监听时，建议参考[响应输出设备变更时合理暂停](docroot://media/audio/audio-output-device-change.md)自行实现设备连接或者断开时的播放器行为。
     *
     * @param { 'audioOutputDeviceChangeWithInfo' } type - 事件回调类型，支持的事件为：'audioOutputDeviceChangeWithInfo'。
     * @param { Callback<audio.AudioStreamDeviceChangeInfo> } callback - 回调函数，返回当前音频流的输出设备描述信息及变化原因。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'audioOutputDeviceChangeWithInfo', callback: Callback<audio.AudioStreamDeviceChangeInfo>): void;

    /**
     * 取消订阅监听音频流输出设备变化及原因，使用callback方式返回结果。
     *
     * @param { 'audioOutputDeviceChangeWithInfo' } type - 事件回调类型，支持的事件为：'audioOutputDeviceChangeWithInfo'。
     * @param { Callback<audio.AudioStreamDeviceChangeInfo> } callback - 回调函数，返回当前音频流的输出设备描述信息及变化原因。如果填写该参数，仅取消注册此回调方法，否
     *     则取消注册audioOutputDeviceChangeWithInfo事件的所有回调方法。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'audioOutputDeviceChangeWithInfo', callback?: Callback<audio.AudioStreamDeviceChangeInfo>): void;

    /**
     * 订阅获取外挂字幕的事件，当有外挂字幕时，会通过订阅的回调方法通知用户。用户只能订阅一个外挂字幕事件的回调方法，当用户重复订阅时，以最后一次订阅的回调接口为准。
     *
     * @param { 'subtitleUpdate' } type - 事件回调类型，支持的事件为：'subtitleUpdate'。
     * @param { Callback<SubtitleInfo> } callback - 外挂字幕事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'subtitleUpdate', callback: Callback<SubtitleInfo>): void;

    /**
     * 取消订阅获取外挂字幕的事件。
     *
     * @param { 'subtitleUpdate' } type - 事件回调类型，支持的事件为：'subtitleUpdate'。
     * @param { Callback<SubtitleInfo> } callback - 取消外挂字幕事件的回调方法。如果填写该参数，仅取消注册此回调方法，否则取消注册subtitleUpdate事件的所有回调方法。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'subtitleUpdate', callback?: Callback<SubtitleInfo>): void

    /**
     * 订阅获取轨道变更的事件，当播放的轨道变更时，会通过订阅的回调方法通知用户。用户只能订阅一个轨道变更事件的回调方法，当用户重复订阅时，以最后一次订阅的回调接口为准。
     *
     * @param { 'trackChange' } type - 事件回调类型，支持的事件为：'trackChange'。
     * @param { OnTrackChangeHandler } callback - 轨道变更事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'trackChange', callback: OnTrackChangeHandler): void

    /**
     * 取消订阅获取轨道变更的事件。
     *
     * @param { 'trackChange' } type - 事件回调类型，支持的事件为：'trackChange'。
     * @param { OnTrackChangeHandler } callback - 取消轨道变更事件的回调方法。如果填写该参数，仅取消注册此回调方法，否则取消注册trackChange事件的所有回调方法。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'trackChange', callback?: OnTrackChangeHandler): void

    /**
     * 订阅获取轨道信息更新的事件，当播放的轨道有更新时，会通过订阅的回调方法通知用户。用户只能订阅一个轨道变更事件的回调方法，当用户重复订阅时，以最后一次订阅的回调接口为准。
     *
     * @param { 'trackInfoUpdate' } type - 事件回调类型，支持的事件为：'trackInfoUpdate'。
     * @param { Callback<Array<MediaDescription>> } callback - 轨道信息更新事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'trackInfoUpdate', callback: Callback<Array<MediaDescription>>): void

    /**
     * 取消订阅获取轨道信息更新的事件。
     *
     * @param { 'trackInfoUpdate' } type - 事件回调类型，支持的事件为：'trackInfoUpdate'。
     * @param { Callback<Array<MediaDescription>> } callback - 取消轨道信息更新事件的回调方法。如果填写该参数，仅取消注册此回调方法，否则取消注册trackInfoUpdate事
     *     件的所有回调方法。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'trackInfoUpdate', callback?: Callback<Array<MediaDescription>>): void

    /**
     * 订阅音频最大电平值，音频资源播放时定时上报。
     *
     * @param { 'amplitudeUpdate' } type - 事件回调类型，支持的事件为：'amplitudeUpdate'。
     * @param { Callback<Array<double>> } callback - 音频最大电平值更新事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 13 dynamic
     */
    on(type: 'amplitudeUpdate', callback: Callback<Array<double>>): void

    /**
     * 取消订阅获取音频最大电平值事件。
     *
     * @param { 'amplitudeUpdate' } type - 事件回调类型，支持的事件为：'amplitudeUpdate'。
     * @param { Callback<Array<double>> } callback - 取消音频最大电平值更新事件回调方法。如果填写该参数，仅取消注册此回调方法，否则取消注册amplitudeUpdate事件的所有回调方法
     *     。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 13 dynamic
     */
    off(type: 'amplitudeUpdate', callback?: Callback<Array<double>>): void

    /**
     * 订阅获取SEI信息事件，仅适用于HTTP-FLV直播，视频流中包含SEI信息时上报。需在prepare之前订阅，当用户重复订阅时，以最后一次订阅的回调接口为准。
     *
     * @param { 'seiMessageReceived' } type - 事件回调类型，支持的事件为：'seiMessageReceived'。
     * @param { Array<int> } payloadTypes - SEI信息的订阅负载类型数组。当前仅支持负载类型为5，即payloadType = 5。
     * @param { OnSeiMessageHandle } callback - 用于监听SEI信息事件的回调函数，接收订阅的负载类型。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 18 dynamic
     */
    on(type: 'seiMessageReceived', payloadTypes: Array<int>, callback: OnSeiMessageHandle): void;

    /**
     * 取消订阅获取SEI信息事件。
     *
     * @param { 'seiMessageReceived' } type - 事件回调类型，支持的事件为：'seiMessageReceived'。
     * @param { Array<int> } [payloadTypes] - SEI信息的订阅负载类型。
     * @param { OnSeiMessageHandle } [callback] - 用于监听SEI信息事件的回调函数，接收订阅的负载类型。如果填写该参数，仅取消注册此回调方法，否则取消注册seiMessageReceived
     *     事件的所有回调方法。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 18 dynamic
     */
    off(type: 'seiMessageReceived', payloadTypes?: Array<int>, callback?: OnSeiMessageHandle): void;

    /**
     * 订阅监听超分算法开启/关闭事件。
     *
     * @param { 'superResolutionChanged' } type - 事件回调类型，支持的事件为：'superResolutionChanged'，当超分算法开启/关闭状态变化时，触发该事件。
     * @param { OnSuperResolutionChanged } callback - 超分开关事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @atomicservice
     * @since 18 dynamic
     */
    on(type:'superResolutionChanged', callback: OnSuperResolutionChanged): void;

    /**
     * 取消监听超分算法开启/关闭事件。
     *
     * @param { 'superResolutionChanged' } type - 事件回调类型，支持的事件为：'superResolutionChanged'，当超分算法开启/关闭状态变化时，触发该事件。
     * @param { OnSuperResolutionChanged } callback - 超分开关事件回调方法。如果填写该参数，仅取消注册此回调方法，否则取消注册superResolutionChanged事件的所有回调方
     *     法。
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
     * 订阅播放过程中的指标事件。
     *
     * @param { Callback<Array<AVMetricsEvent>> } callback - 上报的指标事件信息的方法。使用callback异步回调。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    onMetricsEvent(callback: Callback<Array<AVMetricsEvent>>): void;

    /**
     * 取消订阅播放过程中的指标事件。
     *
     * @param { Callback<Array<AVMetricsEvent>> } [callback] - 上报的指标事件信息的方法。使用callback异步回调。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    offMetricsEvent(callback?: Callback<Array<AVMetricsEvent>>): void;

    /**
     * 注册监听器用于监听播放内容变更事件。使用callback异步回调。
     *
     * @param { Callback<string> } callback - 事件触发时调用的回调函数。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    onPlaybackContentChanged(callback: Callback<string>):void;

    /**
     * 取消监听播放列表中当前媒体源变更事件。
     *
     * @param { Callback<string> } [callback] - 当事件触发时调用的回调函数。若未指定此参数，则取消订阅该事件的所有回调函数。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    offPlaybackContentChanged(callback?: Callback<string>):void;

    /**
     * 注册监听器以检测基于时间的元数据。目前只支持HLS的#EXT-X-DATERANGE和DASH的Event Stream信息，例如监听插播的元数据信息。使用callback异步回调。
     *
     * @param { Callback<AVTimedMetaData> } callback - 回调函数，返回上报基于时间的元数据。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    onTimedMetaData(callback: Callback<AVTimedMetaData>): void;

    /**
     * 取消注册监听器以检测基于时间的元数据。目前只支持HLS的#EXT-X-DATERANGE和DASH的Event Stream信息，例如取消监听插播的元数据信息。使用callback异步回调。
     *
     * @param { Callback<AVTimedMetaData> } [callback] - 回调函数，返回上报基于时间的元数据。默认值为取消订阅该事件的所有回调函数。
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    offTimedMetaData(callback?: Callback<AVTimedMetaData>): void;
  }

  /**
   * 表示播放列表循环模式的枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum PlaylistLoopMode {  
    /**
     * 列表循环模式。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    PLAYLIST_LOOP_MODE_ALL = 1,
 
    /**
     * 单曲循环模式。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    PLAYLIST_LOOP_MODE_ONE = 2,

    /**
     * 随机循环模式。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    PLAYLIST_LOOP_MODE_SHUFFLE = 3,
  
    /**
     * 关闭循环模式。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    PLAYLIST_LOOP_MODE_NONE = 4
  }

  /**
   * 表示播放器指标信息的枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.AVPlayer
   * @since 23 dynamic&static
   */
  enum PlaybackMetricsKey {  
    /**
     * 表示准备时长，单位为毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    PREPARE_DURATION = 'prepare_duration',

    /**
     * 表示资源建链时长，单位为毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    RESOURCE_CONNECTION_DURATION = 'resource_connection_duration',

    /**
     * 表示第一帧的解封装时长，单位为毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    FIRST_FRAME_DECAPSULATION_DURATION = 'first_frame_decapsulation_duration',

    /**
     * 表示总的播放时长，单位为毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    TOTAL_PLAYING_TIME = 'total_playback_time',

    /**
     * 表示总的请求次数。
     * 
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOWNLOAD_REQUESTS_COUNT  = 'loading_requests_count',

    /**
     * 表示总的加载时长，单位为毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    TOTAL_DOWNLOAD_TIME  = 'total_loading_time',

    /**
     * 表示总的加载大小，单位为字节（Byte）。
     * 
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    TOTAL_DOWNLOAD_SIZE  = 'total_loading_bytes',

    /**
     * 表示总的卡顿次数。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    STALLING_COUNT  = 'stalling_count',

    /**
     * 表示总的卡顿时长，单位为毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 23 dynamic&static
     */
    TOTAL_STALLING_TIME  = 'total_stalling_time',
  }

  /**
   * 提供播放器指标信息键值对的容器定义。
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
   * 播放信息描述枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum PlaybackInfoKey {
    /**
     * 表示服务器IP地址，其对应键值类型为string。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SERVER_IP_ADDRESS = 'server_ip_address',

    /**
     * 表示平均下载速率，其对应键值类型为number，单位为比特率（bps）。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    AVG_DOWNLOAD_RATE = 'average_download_rate',

    /**
     * 表示1s的下载速率，其对应键值类型为number，单位为比特率（bps）。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    DOWNLOAD_RATE = 'download_rate',

    /**
     * 表示下载状态，1表示在下载状态，0表示非下载状态（下载完成），其对应键值类型为number。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    IS_DOWNLOADING = 'is_downloading',

    /**
     * 表示缓存数据的可播放时长，其对应键值类型为number，单位为秒（s）。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BUFFER_DURATION = 'buffer_duration',
  }

  /**
   * 媒体服务错误类型枚举。
   * 
   * > **说明：**
   * > > 从API version 8开始支持，从API version 11开始废弃，建议使用[AVErrorCode]{@link media.AVErrorCode}替代。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @since 8 dynamiconly
   * @deprecated since 11
   * @useinstead media.AVErrorCode
   */
  enum MediaErrorCode {
    /**
     * 表示操作成功。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_OK
     */
    MSERR_OK = 0,

    /**
     * 表示申请内存失败，系统可能无可用内存。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_NO_MEMORY
     */
    MSERR_NO_MEMORY = 1,

    /**
     * 表示无权限执行此操作。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_OPERATE_NOT_PERMIT
     */
    MSERR_OPERATION_NOT_PERMIT = 2,

    /**
     * 表示传入入参无效。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_INVALID_PARAMETER
     */
    MSERR_INVALID_VAL = 3,

    /**
     * 表示发生IO错误。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_IO
     */
    MSERR_IO = 4,

    /**
     * 表示操作超时。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_TIMEOUT
     */
    MSERR_TIMEOUT = 5,

    /**
     * 表示未知错误。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_INVALID_PARAMETER
     */
    MSERR_UNKNOWN = 6,

    /**
     * 表示服务端失效。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_SERVICE_DIED
     */
    MSERR_SERVICE_DIED = 7,

    /**
     * 表示在当前状态下，不允许执行此操作。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_INVALID_PARAMETER
     */
    MSERR_INVALID_STATE = 8,

    /**
     * 表示在当前版本下，不支持此操作。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead ohos.multimedia.media/media.AVErrorCode#AVERR_UNSUPPORT_CAPABILITY
     */
    MSERR_UNSUPPORTED = 9,
  }

  /**
   * 缓存事件类型枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum BufferingInfoType {
    /**
     * 表示开始缓冲。当上报BUFFERING_START时，播放器会暂停播放。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    BUFFERING_START = 1,

    /**
     * 表示结束缓冲。当上报BUFFERING_END时，播放器会恢复播放。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    BUFFERING_END = 2,

    /**
     * 表示缓冲百分比。可参考该事件感知缓冲进度。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    BUFFERING_PERCENT = 3,

    /**
     * 表示已缓冲数据预估可播放时长，单位为毫秒（ms）。缓冲区中的数据变化量大于500ms，上报一次。可参考该事件做进度条。
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
   * 由应用实现此回调函数，应用需处理传入的资源打开请求，并返回所打开资源对应的唯一句柄。
   * 
   * > **注意：**
   * >
   * > 客户端在处理完请求后应立刻返回。
   *
   * @param { MediaSourceLoadingRequest } request - 打开请求参数，包含请求资源的具体信息和数据推送方式。
   * @returns { long } 当前资源打开请求的句柄。大于0表示请求成功，小于或等于0表示请求失败。<br/> - request对象对应句柄唯一。
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  type SourceOpenCallback = (request: MediaSourceLoadingRequest) => long;

  /**
   * 由应用实现此回调函数，应用需记录读取请求，并在数据充足时通过对应的MediaSourceLoadingRequest对象的
   * [respondData]{@link @ohos.multimedia.media:media.MediaSourceLoadingRequest.respondData(uuid: number, offset: number, buffer: ArrayBuffer)}
   * 方法推送数据。
   * 
   * > **注意：**
   * >
   * > 客户端在处理完请求后应立刻返回。
   *
   * @param { long } uuid - 资源句柄的标识。
   * @param { long } requestedOffset - 当前媒体数据相对于资源起始位置的偏移量。
   * @param { long } requestedLength - 当前请求的长度。值为-1时，表示到达资源末尾，此时推送完成后需通过
   *     [finishLoading]{@link @ohos.multimedia.media:media.MediaSourceLoadingRequest.finishLoading}方法通知播放器推送结束。
   * @returns { void } - client should return immediately.
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  type SourceReadCallback = (uuid: long, requestedOffset: long, requestedLength: long) => void;

  /**
   * 由应用实现此回调函数，应用应释放相关资源。
   * 
   * > **注意：**
   * >
   * > 客户端在处理完请求后应立刻返回。
   *
   * @param { long } uuid - 资源句柄的标识。
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
   * 枚举，数据加载过程中状态变化的原因。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  enum LoadingRequestError {
    /**
     * 由客户端返回，表示已经推送到资源末尾。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    LOADING_ERROR_SUCCESS = 0,

    /**
     * 由客户端返回，表示资源尚未准备好可供访问。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    LOADING_ERROR_NOT_READY = 1,

    /**
     * 由客户端返回，表示请求的资源URL不存在。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    LOADING_ERROR_NO_RESOURCE = 2,

    /**
     * 由客户端返回，表示请求的资源句柄uuid无效。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    LOADING_ERROR_INVAID_HANDLE = 3,

    /**
     * 由客户端返回，表示客户端没有权限请求该资源。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    LOADING_ERROR_ACCESS_DENIED = 4,

    /**
     * 由客户端返回，表示访问资源过程超时。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    LOADING_ERROR_ACCESS_TIMEOUT = 5,

    /**
     * 由客户端返回，表示授权失败。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    LOADING_ERROR_AUTHORIZE_FAILED = 6
  }

  /**
   * 用于定义加载请求的对象。应用程序通过该对象来获取请求的资源位置，通过该对象和播放器进行数据交互。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 18开始支持。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface MediaSourceLoadingRequest {
    /**
     * 资源URL，需要应用程序打开的资源路径。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    url: string;

    /**
     * 网络请求标头，如果存在，需要应用在下载数据时将头信息设置到HTTP请求中。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    header?: Record<string, string>;

    /**
     * 用于应用程序向播放器发送数据。
     *
     * @param { number } uuid - 资源句柄的标识。来源是[SourceOpenCallback]{@link @ohos.multimedia.media:media.SourceOpenCallback}。
     * @param { number } offset - 当前媒体数据相对于资源起始位置的偏移量。offset不能小于0。
     * @param { ArrayBuffer } buffer - 响应播放器的媒体数据。<br/>**注意：** 不要传输无关数据，会影响正常数据解析和播放。
     * @returns { number } 当前服务端接受的字节数。
     *     <br>- 返回值小于0表示操作失败。
     *     <br>- 返回值为-2时，表示播放器不再需要当前数据，客户端应停止当前读取过程。
     *     <br>- 返回值为-3时，表示播放器的缓冲区已满，客户端应等待下一次读取。
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
     * 用于应用程序向播放器发送响应头信息，应在第一次调用
     * [respondData]{@link media.MediaSourceLoadingRequest.respondData(uuid: number, offset: number, buffer: ArrayBuffer)}
     * 方法之前调用。
     *
     * @param { long } uuid - 资源句柄的标识。来源是[SourceOpenCallback]{@link @ohos.multimedia.media:media.SourceOpenCallback}。
     * @param { Record<string, string> } [header] - HTTP响应中的头部信息。应用可将头部信息字段与底层支持解析字段取交集传递或直接传入对应的所有头部信息。<br> - 底层播放需要解析的
     *     字段包括Transfer-Encoding、Location、Content-Type、Content-Range、Content-Encode、Accept-Ranges、content-length。
     * @param { string } [redirectUrl] - 如果存在，为HTTP响应中的重定向URL。
     * @syscap  SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    respondHeader(uuid: long, header?: Record<string, string>, redirectUrl?: string): void;

    /**
     * 应用程序用于通知播放器当前请求状态的接口。针对服务侧请求的单个资源，推送完全部资源后需要发送LOADING_ERROR_SUCCESS状态告知该资源推送结束。
     *
     * @param { long } uuid - 资源句柄的标识。来源是[SourceOpenCallback]{@link @ohos.multimedia.media:media.SourceOpenCallback}。
     * @param { LoadingRequestError } state - 请求的状态。
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
   * 媒体数据信息。来源于
   * [createMediaSourceWithUrl]{@link @ohos.multimedia.media:media.createMediaSourceWithUrl(url: string, headers?: Record<string, string>)}
   * 。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 12开始支持。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface MediaSource {
    /**
     * 设置媒体MIME类型，以帮助播放器处理扩展的媒体源。
     *
     * @param { AVMimeTypes } mimeType - 媒体MIME类型。
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setMimeType(mimeType: AVMimeTypes): void;

    /**
     * 设置MediaSourceLoader，帮助播放器请求媒体数据。
     *
     * @param { MediaSourceLoader } resourceLoader - 应用实现的媒体数据获取接口，方便播放器获取数据。
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    setMediaResourceLoaderDelegate(resourceLoader: MediaSourceLoader): void;

    /**
    * 是否在视频播放期间启用离线缓存。
    *
    * @param { boolean } enable - 是否在视频播放期间启用离线缓存。true表示启用，false表示不启用。
    * @syscap SystemCapability.Multimedia.Media.Core
    * @since 23 dynamic&static
    */
	  enableOfflineCache(enable: boolean): void;
 
    /**
     * 获取媒体源的标识符。
     *
     * @returns { string } 返回媒体源的标识符，失败时返回空字符串。
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getID(): string;

    /**
     * Set the audio and video feature filtering items of the MediaSource,
     * After the user defines the audio and video filtering items of the MediaSource,
     * When playing or downloading MediaSource data offline,
     * Preferentially perform a corresponding operation in the filtering feature.
     *
     * @param { TrackSelectionFilter } filter - Specifies the audio and video features of the pre-downloaded streaming
     *     media.
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setTrackSelectionFilter(filter: TrackSelectionFilter): void;

    /**
     * Obtains the configured audio and video feature filtering values.
     *
     * @returns { TrackSelectionFilter | undefined } If the TrackSelectionFilter object exists,
     *     the TrackSelectionFilter object is returned. Otherwise, the TrackSelectionFilter object is returned.
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getTrackSelectionFilter(): TrackSelectionFilter | undefined;
  }

  /**
   * 媒体MIME类型，通过[setMimeType]{@link @ohos.multimedia.media:media.MediaSource.setMimeType}设置。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum AVMimeTypes {
    /**
     * 表示m3u8本地文件。
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
   * 音频播放的状态机。可通过state属性获取当前状态。
   * 
   * > **说明：**
   * > > 从API version 6开始支持，从API version 9开始废弃，建议使用[AVPlayerState]{@link media.AVPlayerState}替代。
   *
   * @unionmember { 'idle' } 音频播放空闲，dataload/reset成功后处于此状态。
   * @unionmember { 'playing' } 音频正在播放，play成功后处于此状态。
   * @unionmember { 'paused' } 音频暂停播放，pause成功后处于此状态。
   * @unionmember { 'stopped' } 音频播放停止，stop/播放结束后处于此状态。
   * @unionmember { 'error' } 错误状态。
   * @syscap SystemCapability.Multimedia.Media.AudioPlayer
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead media.AVPlayerState
   */

  type AudioState = 'idle' | 'playing' | 'paused' | 'stopped' | 'error';

  /**
   * > **说明：**
   * >
   * > 从API version 6开始支持，从API version 9开始废弃，建议使用[AVPlayer]{@link @ohos.multimedia.media:media}替代。
   * 
   * 音频播放管理类，用于管理和播放音频媒体。在调用AudioPlayer的方法前，需要先通过
   * [createAudioPlayer()]{@link @ohos.multimedia.media:media.createAudioPlayer}构建一个AudioPlayer实例。
   *
   * @syscap SystemCapability.Multimedia.Media.AudioPlayer
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.multimedia.media:media
   */
  interface AudioPlayer {
    /**
     * 开始播放音频资源，需在'dataLoad'事件成功触发后，才能调用。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.play]{@link @ohos.multimedia.media:media.AVPlayer.play(callback: AsyncCallback<void>)}替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.play(callback: AsyncCallback<void>)
     */
    play(): void;

    /**
     * 暂停播放音频资源。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.pause]{@link @ohos.multimedia.media:media.AVPlayer.pause(callback: AsyncCallback<void>)}替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.pause(callback: AsyncCallback<void>)
     */
    pause(): void;

    /**
     * 停止播放音频资源。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.stop]{@link @ohos.multimedia.media:media.AVPlayer.stop(callback: AsyncCallback<void>)}替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.stop(callback: AsyncCallback<void>)
     */
    stop(): void;

    /**
     * 重置播放音频资源。
     * 
     * > **说明：**
     * > > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.reset]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)}替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)
     */
    reset(): void;

    /**
     * 跳转到指定播放位置。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用[AVPlayer.seek]{@link @ohos.multimedia.media:media.AVPlayer.seek}替代
     * > 。
     *
     * @param { number } timeMs - 指定的跳转时间节点，单位毫秒（ms），取值范围[0, duration]。
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.seek
     */
    seek(timeMs: number): void;

    /**
     * 设置音量。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.setVolume]{@link @ohos.multimedia.media:media.AVPlayer.setVolume}替代。
     *
     * @param { number } vol - 指定的相对音量大小，取值范围为[0.00-1.00]，1表示最大音量，即100%。
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.setVolume
     */
    setVolume(vol: number): void;

    /**
     * 释放音频资源。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.release]{@link @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>)}替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>)
     */
    release(): void;

    /**
     * 获取音频轨道信息。需在'dataLoad'事件成功触发后，才能调用。通过回调函数获取返回值。
     * 
     * > **说明：**
     * > > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.getTrackDescription]{@link @ohos.multimedia.media:media.AVPlayer.getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>)}
     * > 替代。
     *
     * @param { AsyncCallback<Array<MediaDescription>> } callback - 回调函数。获取音频轨道信息成功时，err为undefined，data为获取到的
     *     MediaDescription数组，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>)
     */
    getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void;

    /**
     * 获取音频轨道信息。需在'dataLoad'事件成功触发后，才能调用。通过Promise获取返回值。
     * 
     * > **说明：**
     * > > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.getTrackDescription]{@link @ohos.multimedia.media:media.AVPlayer.getTrackDescription()}替代。
     *
     * @returns { Promise<Array<MediaDescription>> } 音频轨道信息MediaDescription数组Promise返回值。
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.getTrackDescription()
     */
    getTrackDescription(): Promise<Array<MediaDescription>>;

    /**
     * 开始订阅音频缓存更新事件。仅网络播放支持该订阅事件。
     * 
     * > **说明：**
     * > > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.on('bufferingUpdate')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'bufferingUpdate', callback: OnBufferingUpdateHandler)}
     * > 替代。
     *
     * @param { 'bufferingUpdate' } type - 音频缓存事件回调类型，支持的事件：'bufferingUpdate'。
     * @param { function } callback - 音频缓存事件回调方法。<br>
     *     [BufferingInfoType]{@link @ohos.multimedia.media:media.BufferingInfoType}value值固定为0。
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'bufferingUpdate', callback: OnBufferingUpdateHandler)
     */
    on(type: 'bufferingUpdate', callback: (infoType: BufferingInfoType, value: number) => void): void;

    /**
     * 音频媒体URI，支持当前主流的音频格式(m4a、aac、mp3、ogg、wav、amr)。
     * 
     * **支持路径示例**：
     * 
     * 1. fd类型播放：fd://xx
     * 
     * ![](docroot://reference/apis-media-kit/figures/zh-cn_image_url.png)
     * 
     * 2. http网络播放: http://xx
     * 3. https网络播放: https://xx
     * 4. hls网络播放路径：http://xx或者https://xx 
     * 
     * ohos.permission.READ_MEDIA 或 ohos.permission.INTERNET。
     *
     * @permission ohos.permission.READ_MEDIA or ohos.permission.INTERNET
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#url
     */
    src: string;

    /**
     * 音频媒体文件描述，使用场景：应用中的音频资源被连续存储在同一个文件中。
     * 
     * **使用示例**：
     * 
     * 假设一个连续存储的音乐文件: 
     * 
     * 音乐1(地址偏移:0，字节长度:100)
     * 
     * 音乐2(地址偏移:101，字节长度:50)
     * 
     * 音乐3(地址偏移:151，字节长度:150)
     * 
     * 1. 播放音乐1：AVFileDescriptor { fd = 资源句柄; offset = 0; length = 100; }
     * 2. 播放音乐2：AVFileDescriptor { fd = 资源句柄; offset = 101; length = 50; }
     * 3. 播放音乐3：AVFileDescriptor { fd = 资源句柄; offset = 151; length = 150; }
     * 
     * 假设是一个独立的音乐文件: 请使用src=fd://xx
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#fdSrc
     */
    fdSrc: AVFileDescriptor;

    /**
     * 音频循环播放属性，设置为'true'表示循环播放。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#loop
     */
    loop: boolean;

    /**
     * 音频焦点模型。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#audioInterruptMode
     */
    audioInterruptMode?: audio.InterruptMode;

    /**
     * 音频的当前播放位置，单位为毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#currentTime
     */
    readonly currentTime: number;

    /**
     * 音频时长，单位为毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#duration
     */
    readonly duration: number;

    /**
     * 可以查询音频播放的状态，该状态不可作为调用play/pause/stop等状态切换的触发条件。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#state
     */
    readonly state: AudioState;

    /**
     * 开始订阅音频播放事件。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.on('stateChange')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)}
     * > 替代。
     *
     * @param { 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange' } type - 播放事件回调类型，支持的事件包括：'
     *     play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange'。<br>- 'play'：完成
     *     [play()]{@link media.AudioPlayer.play}调用，音频开始播放，触发该事件。<br>- 'pause'：完成
     *     [pause()]{@link media.AudioPlayer.pause}调用，音频暂停播放，触发该事件。<br>- 'stop'：完成[stop()]{@link media.AudioPlayer.stop}
     *     调用，音频停止播放，触发该事件。<br>- 'reset'：完成[reset()]{@link media.AudioPlayer.reset}调用，播放器重置，触发该事件。<br>- 'dataLoad'：完成音频数
     *     据加载后触发该事件，即src属性设置完成后触发该事件。<br>- 'finish'：完成音频播放后触发该事件。<br>- 'volumeChange'：完成
     *     [setVolume()]{@link media.AudioPlayer.setVolume}调用，播放音量改变后触发该事件。
     * @param { function } callback - 播放事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)
     */
    on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void;

    /**
     * 开始订阅音频播放时间更新事件。处于播放状态时，每隔1s上报一次该事件。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.on('timeUpdate')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'timeUpdate', callback: Callback<int>)}
     * > 替代。
     *
     * @param { 'timeUpdate' } type - 播放事件回调类型，支持的事件包括：'timeUpdate'。<br>- 'timeUpdate'：音频播放时间戳更新，开始播放后自动触发该事件。
     * @param { Callback<number> } callback - 播放事件回调方法。回调方法入参为更新后的时间戳。
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'timeUpdate', callback: Callback<int>)
     */
    on(type: 'timeUpdate', callback: Callback<number>): void;

    /**
     * 监听音频焦点变化事件，参考[audio.InterruptEvent]{@link @ohos.multimedia.audio:audio.InterruptEvent}。
     * 
     * > **说明：**
     * > > 从API version 9开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.on('audioInterrupt')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>)}
     * > 替代。
     *
     * @param { 'audioInterrupt' } type - 音频焦点变化事件回调类型，支持的事件：'audioInterrupt'。
     * @param { function } callback - 音频焦点变化事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>)
     */
    on(type: 'audioInterrupt', callback: (info: audio.InterruptEvent) => void): void;

    /**
     * 开始订阅音频播放错误事件，当上报error错误事件后，用户需处理error事件，退出播放操作。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.on('error')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'error', callback: ErrorCallback)}替
     * > 代。
     *
     * @param { 'error' } type - 播放错误事件回调类型，支持的事件包括：'error'。<br>- 'error'：音频播放中发生错误，触发该事件。
     * @param { ErrorCallback } callback - 播放错误事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'error', callback: ErrorCallback)
     */
    on(type: 'error', callback: ErrorCallback): void;
  }

  /**
   * 音视频录制的状态机。可通过state属性获取当前状态。
   *
   * @unionmember { 'idle' } 闲置状态。此时可以调用
   *     [AVRecorder.prepare()]{@link @ohos.multimedia.media:media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)}
   *     方法设置录制参数，进入prepared状态。AVRecorder刚被创建，或者在任何非released状态下调用
   *     [AVRecorder.reset()]{@link @ohos.multimedia.media:media.AVRecorder.reset(callback: AsyncCallback<void>)}方法，
   *     均进入idle状态。
   * @unionmember { 'prepared' } 参数设置完成。此时可以调用
   *     [AVRecorder.start()]{@link @ohos.multimedia.media:media.AVRecorder.start(callback: AsyncCallback<void>)}方法
   *     开始录制，进入started状态。
   * @unionmember { 'started' } 正在录制。此时可以调用
   *     [AVRecorder.pause()]{@link @ohos.multimedia.media:media.AVRecorder.pause(callback: AsyncCallback<void>)}方法
   *     暂停录制，进入paused状态。也可以调用
   *     [AVRecorder.stop()]{@link @ohos.multimedia.media:media.AVRecorder.stop(callback: AsyncCallback<void>)}方法
   *     结束录制，进入stopped状态。
   * @unionmember { 'paused' } 录制暂停。此时可以调用
   *     [AVRecorder.resume()]{@link @ohos.multimedia.media:media.AVRecorder.resume(callback: AsyncCallback<void>)}方法
   *     继续录制，进入started状态。也可以调用
   *     [AVRecorder.stop()]{@link @ohos.multimedia.media:media.AVRecorder.stop(callback: AsyncCallback<void>)}方法
   *     结束录制，进入stopped状态。
   * @unionmember { 'stopped' } 录制停止。此时可以调用
   *     [AVRecorder.prepare()]{@link @ohos.multimedia.media:media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)}
   *     方法设置录制参数，重新进入prepared状态。
   * @unionmember { 'released' } 录制资源释放。此时不能再进行任何操作。在任何其他状态下，均可以通过调用
   *     [AVRecorder.release()]{@link @ohos.multimedia.media:media.AVRecorder.release(callback: AsyncCallback<void>)}
   *     方法进入released状态。
   * @unionmember { 'error' } 错误状态。当AVRecorder实例发生不可逆错误，会转换至当前状态。切换至error状态时会伴随
   *     [AVRecorder.on('error')事件]{@link @ohos.multimedia.media:media.AVRecorder.on(type: 'error', callback: ErrorCallback)}
   *     ，该事件会上报详细错误原因。在error状态时，用户需要调用
   *     [AVRecorder.reset()]{@link @ohos.multimedia.media:media.AVRecorder.reset(callback: AsyncCallback<void>)}方法
   *     重置AVRecorder实例，或者调用
   *     [AVRecorder.release()]{@link @ohos.multimedia.media:media.AVRecorder.release(callback: AsyncCallback<void>)}
   *     方法释放资源。
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  type AVRecorderState = 'idle' | 'prepared' | 'started' | 'paused' | 'stopped' | 'released' | 'error';

  /**
   * 录制状态机切换事件回调方法。
   *
   * @param { AVRecorderState } state - 当前录制状态。
   * @param { StateChangeReason } reason - 当前录制状态的切换原因。
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type OnAVRecorderStateChangeHandler = (state: AVRecorderState, reason: StateChangeReason) => void;

  /**
   * 音视频录制管理类，用于音视频媒体录制。在调用AVRecorder的方法前，需要先调用
   * [createAVRecorder]{@link @ohos.multimedia.media:media.createAVRecorder(callback: AsyncCallback<AVRecorder>)}接口构建一个
   * AVRecorder实例。
   * 
   * 音视频录制demo可参考：[音频录制开发指导](docroot://media/media/using-avrecorder-for-recording.md)、
   * [视频录制开发指导](docroot://media/media/video-recording.md)。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批API从API version 9开始支持。
   * >
   * > - 相机视频录制功能需配合相机模块使用，相机模块接口的使用详情请参考[相机管理]{@link @ohos.multimedia.camera:camera}。
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AVRecorder {
    /**
     * 音视频录制的参数设置。使用callback异步回调。
     *
     * @permission ohos.permission.MICROPHONE
     * @param { AVRecorderConfig } config - 配置音视频录制的相关参数。
     * @param { AsyncCallback<void> } callback - 回调函数。当prepare接口成功，err为undefined，否则为错误对象。
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
     * 音视频录制的参数设置。使用Promise异步回调。
     *
     * @permission ohos.permission.MICROPHONE [since 9 - 11]
     * @permission ohos.permission.MICROPHONE
     *     This permission is required only if audio recording is involved. [since 12]
     * @param { AVRecorderConfig } config - 配置音视频录制的相关参数。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 获取实时的配置参数。使用callback异步回调。
     * 
     * 只能在[prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)}接口调用成功后调用。
     *
     * @param { AsyncCallback<AVRecorderConfig> } callback - 回调函数。获取实时配置的参数成功时，err为undefined，data为获取到的配置参数，否则为错误对象。
     * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     */
    getAVRecorderConfig(callback: AsyncCallback<AVRecorderConfig>): void;

    /**
     * 获取实时的配置参数。使用callback异步回调。
     * 
     * 只能在prepare()接口调用成功后调用。
     *
     * @param { AsyncCallback<AVRecorderConfig | undefined> } callback - 回调函数，返回实时配置参数，否则为错误对象。
     * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    getAVRecorderConfig(callback: AsyncCallback<AVRecorderConfig | undefined>): void;

    /**
     * 获取实时的配置参数。使用Promise异步回调。
     * 
     * 只能在[prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig)}接口调用成功后调用。
     *
     * @returns { Promise<AVRecorderConfig> } Promise对象。返回实时配置参数。
     * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     */
    getAVRecorderConfig(): Promise<AVRecorderConfig>;

    /**
     * 获取实时的配置参数。使用Promise异步回调。
     * 
     * 只能在prepare()接口调用成功后调用。
     *
     * @returns { Promise<AVRecorderConfig | undefined> } Promise对象，返回实时配置参数。
     * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    getAVRecorderConfig(): Promise<AVRecorderConfig | undefined>;

    /**
     * 获取录制需要的surface。使用callback异步回调。
     * 
     * 开发者从此surface中获取surfaceBuffer，填入相应的视频数据。
     * 
     * 应当注意，填入的视频数据需要携带时间戳（单位ns）和buffersize。时间戳的起始时间请以系统启动时间为基准。
     * 
     * 需在[prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)}接口成功调用后，才能调用
     * getInputSurface接口。
     *
     * @param { AsyncCallback<string> } callback - 回调函数。当获取surface成功，err为undefined，data为获取到的surfaceId，否则为错误对象。
     * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 9 dynamic
     */
    getInputSurface(callback: AsyncCallback<string>): void;

    /**
     * 获取录制需要的surface。使用callback异步回调。
     * 
     * 开发者从此surface中获取surfaceBuffer，填入相应的视频数据。
     * 
     * 应当注意，填入的视频数据需要携带时间戳（单位ns）和buffersize。时间戳的起始时间请以系统启动时间为基准。
     * 
     * 只能在prepare()接口调用成功后调用getInputSurface接口。
     *
     * @param { AsyncCallback<string | undefined> } callback - 回调函数，返回surfaceId，否则为错误对象。
     * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    getInputSurface(callback: AsyncCallback<string | undefined>): void;

    /**
     * 获取录制需要的surface。使用Promise异步回调。
     * 
     * 开发者从此surface中获取surfaceBuffer，填入相应的视频数据。
     * 
     * 应当注意，填入的视频数据需要携带时间戳（单位ns）和buffersize。时间戳的起始时间请以系统启动时间为基准。
     * 
     * 需在[prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig)}接口成功调用后，才能调用getInputSurface接口。
     *
     * @returns { Promise<string> } Promise对象，返回surfaceId。
     * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 9 dynamic
     */
    getInputSurface(): Promise<string>;

    /**
     * 获取录制需要的surface。使用Promise异步回调。
     * 
     * 开发者从此surface中获取surfaceBuffer，填入相应的视频数据。
     * 
     * 应当注意，填入的视频数据需要携带时间戳（单位ns）和buffersize。时间戳的起始时间请以系统启动时间为基准。
     * 
     * 只能在prepare()接口调用成功后调用getInputSurface接口。
     *
     * @returns { Promise<string | undefined> } Promise对象，返回surfaceId。
     * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    getInputSurface(): Promise<string | undefined>;

    /**
     * 获取指定元数据源类型的输入元数据surface。必须在prepare完成后和start之前调用。
     *
     * @param { MetaSourceType } type - 元数据源类型。
     * @returns { Promise<string> } Promise对象，返回输入surface id字符串。
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
     * 获取指定元数据源类型的输入元数据surface。必须在prepare完成后和start之前调用。
     *
     * @param { MetaSourceType } type - 元数据源类型。
     * @returns { Promise<string | undefined> } Promise对象，返回输入surface id字符串。
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
     * 查询设备是否支持硬件数字水印。使用Promise异步回调。
     * 
     * 可以在prepare()、start()或pause()事件触发后调用。
     *
     * @returns { Promise<boolean> } Promise对象，返回查询结果。true表示设备支持硬件数字水印，false表示不支持。
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    isWatermarkSupported(): Promise<boolean>;
    /**
     * 为AVRecorder设置水印。使用Promise异步回调。
     * 
     * 只能在prepare()事件触发后且start()事件触发前调用。
     *
     * @param { image.PixelMap } watermark - 水印图片。
     * @param { WatermarkConfig } config - 水印配置。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - The parameter check failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    setWatermark(watermark: image.PixelMap, config: WatermarkConfig): Promise<void>

    /**
     * 为AVRecorder添加水印。使用Promise异步回调。
     * 应用最多可添加5个水印。
     * 只能在prepared状态之前调用。
     *
     * @param { image.PixelMap } watermark - 水印图片。
     * @param { WatermarkConfiguration } config - 水印配置。
     * @returns { Promise<int> } Promise对象，返回水印id。
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
     * 设置录制的元数据信息。如果这些信息的键相同，会覆盖config.metadata.customInfo（参考
     * [prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig)}和
     * [AVRecorderConfig]{@link @ohos.multimedia.media:media.AVRecorderConfig}）中的值。
     * 
     * 该方法只能在[prepare()]{@link media.AVRecorder.prepare(config: AVRecorderConfig)}事件成功触发后，且必须在
     * [stop()]{@link media.AVRecorder.stop(callback: AsyncCallback<void>)}之前调用。
     *
     * @param { Record<string, string> } metadata - 录制的元数据信息。<br>格式为字符串键值对，其中，键需要以`com.openharmony.`开头，且值的长度不能超过256个字节。
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
     * 更新视频旋转角度。使用Promise异步回调。
     * 
     * 当且仅当[prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig)}接口成功调用后，且在
     * [start]{@link media.AVRecorder.start(callback: AsyncCallback<void>)}接口之前，才能调用updateRotation接口。
     *
     * @param { int } rotation - 旋转角度，取值仅支持0、90、180、270度。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 设置当前录制音频流是否启用静音打断模式。使用Promise异步回调。
     *
     * @param { boolean } muteWhenInterrupted - 设置当前录制音频流是否启用静音打断模式, true表示启用，false表示不启用，保持为默认打断模式。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 20 dynamic
     * @since 23 static
     */
    setWillMuteWhenInterrupted(muteWhenInterrupted: boolean): Promise<void>;

    /**
     * 开始视频录制。使用callback异步回调。
     * 
     * 纯音频录制需在[prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)}接口成功调用后，
     * 才能调用start接口。纯视频录制，音视频录制需在
     * [getInputSurface]{@link media.AVRecorder.getInputSurface(callback: AsyncCallback<string>)}接口成功调用后，才能调用start接口。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当开始录制视频成功，err为undefined，否则为错误对象。
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
     * 开始视频录制。使用Promise异步回调。
     * 
     * 纯音频录制需在[prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig)}接口成功调用后，才能调用start接口。纯视频录制，音视频录制需在
     * [getInputSurface]{@link media.AVRecorder.getInputSurface()}接口成功调用后，才能调用start接口。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 暂停视频录制。使用callback异步回调。
     * 
     * 需要[start]{@link media.AVRecorder.start(callback: AsyncCallback<void>)}接口成功调用后，才能调用pause接口，可以通过调用
     * [resume]{@link media.AVRecorder.resume(callback: AsyncCallback<void>)}接口来恢复录制。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当暂停视频录制成功，err为undefined，否则为错误对象。
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
     * 暂停视频录制。使用Promise异步回调。
     * 
     * 需要[start]{@link media.AVRecorder.start()}接口成功调用后，才能调用pause接口，可以通过调用[resume]{@link media.AVRecorder.resume()}接口来恢复
     * 录制。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 恢复视频录制。使用callback异步回调。
     * 
     * 需要在[pause]{@link media.AVRecorder.pause(callback: AsyncCallback<void>)}接口成功调用后，才能调用resume接口。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当恢复视频录制成功，err为undefined，否则为错误对象。
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
     * 恢复视频录制。使用Promise异步回调。
     * 
     * 需要在[pause]{@link media.AVRecorder.pause()}接口成功调用后，才能调用resume接口。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 停止视频录制。使用callback异步回调。
     * 
     * 需要在[start]{@link media.AVRecorder.start(callback: AsyncCallback<void>)}或
     * [pause]{@link media.AVRecorder.pause(callback: AsyncCallback<void>)}接口成功调用后，才能调用stop接口。
     * 
     * 纯音频录制时，需要重新调用[prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)}接口
     * 才能重新录制。纯视频录制，音视频录制时，需要重新调用
     * [prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)}和
     * [getInputSurface]{@link media.AVRecorder.getInputSurface(callback: AsyncCallback<string>)}接口才能重新录制。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当停止视频录制成功，err为undefined，否则为错误对象。
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
     * 停止视频录制。使用Promise异步回调。
     * 
     * 需要在[start]{@link media.AVRecorder.start()}或[pause]{@link media.AVRecorder.pause()}接口成功调用后，才能调用stop接口。
     * 
     * 纯音频录制时，需要重新调用[prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig)}接口才能重新录制。纯视频录制，音视频录制时，需要重新调用
     * [prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig)}和
     * [getInputSurface]{@link media.AVRecorder.getInputSurface()}接口才能重新录制。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 重置音视频录制。使用callback异步回调。
     * 
     * 纯音频录制时，需要重新调用[prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)}接口
     * 才能重新录制。纯视频录制，音视频录制时，需要重新调用
     * [prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)}和
     * [getInputSurface]{@link media.AVRecorder.getInputSurface(callback: AsyncCallback<string>)}接口才能重新录制。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当重置音视频录制成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    reset(callback: AsyncCallback<void>): void;

    /**
     * 重置音视频录制。使用Promise异步回调。
     * 
     * 纯音频录制时，需要重新调用[prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig)}接口才能重新录制。纯视频录制，音视频录制时，需要重新调用
     * [prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig)}和
     * [getInputSurface]{@link media.AVRecorder.getInputSurface()}接口才能重新录制。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    reset(): Promise<void>;

    /**
     * 释放音视频录制资源。使用callback异步回调。
     * 
     * 释放音视频录制资源之后，该AVRecorder实例不能再进行任何操作。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当释放音视频录制资源成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * 释放音视频录制资源。使用Promise异步回调。
     * 
     * 释放音视频录制资源之后，该AVRecorder实例不能再进行任何操作。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * 获取当前音频采集参数。使用callback异步回调。
     * 
     * 在[prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)}接口成功调用后，才能调用此接
     * 口。在[stop]{@link media.AVRecorder.stop(callback: AsyncCallback<void>)}接口成功调用后，调用此接口会报错。
     *
     * @param { AsyncCallback<audio.AudioCapturerChangeInfo> } callback - 回调函数。当获取音频采集参数成功时，err为undefined，data为获取到的
     *     audio.AudioCapturerChangeInfo，否则为错误对象。
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     */
    getCurrentAudioCapturerInfo(callback: AsyncCallback<audio.AudioCapturerChangeInfo>): void;

    /**
     * 获取当前音频采集参数。使用callback异步回调。
     * 
     * 只能在prepare()接口调用成功后调用。在stop()接口成功调用后调用此接口会报错。
     *
     * @param { AsyncCallback<audio.AudioCapturerChangeInfo | undefined> } callback - 回调函数，返回audio.AudioCapturerChangeInfo对象，否则为错误对象。
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    getCurrentAudioCapturerInfo(callback: AsyncCallback<audio.AudioCapturerChangeInfo | undefined>): void;

    /**
     * 获取当前音频采集参数。使用Promise异步回调。
     * 
     * 在[prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)}接口成功调用后，才能调用此接
     * 口。在[stop]{@link media.AVRecorder.stop(callback: AsyncCallback<void>)}接口成功调用后，调用此接口会报错。
     *
     * @returns { Promise<audio.AudioCapturerChangeInfo> } Promise对象，返回获取的当前音频采集参数。
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     */
    getCurrentAudioCapturerInfo(): Promise<audio.AudioCapturerChangeInfo>;

    /**
     * 获取当前音频采集参数。使用Promise异步回调。
     * 
     * 只能在prepare()接口调用成功后调用。在stop()接口成功调用后调用此接口会报错。
     *
     * @returns { Promise<audio.AudioCapturerChangeInfo | undefined> } Promise对象，返回当前音频采集参数信息。
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 23 static
     */
    getCurrentAudioCapturerInfo(): Promise<audio.AudioCapturerChangeInfo | undefined>;

    /**
     * 获取当前音频最大振幅。使用callback异步回调。
     * 
     * 在[prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)}接口成功调用后，才能调用此接
     * 口。在[stop]{@link media.AVRecorder.stop(callback: AsyncCallback<void>)}接口成功调用后，调用此接口会报错。
     * 
     * 调用接口时，获取到的返回值是上一次获取最大振幅的时刻到当前这段区间内的音频最大振幅。例如，在1s时获取了一次最大振幅，到2s时再获取到的最大振幅是1-2s这个区间里面的最大值。
     *
     * @param { AsyncCallback<int> } callback - 回调函数。获取当前音频最大振幅成功时，err为undefined，data为获取到的最大振幅，否则为错误对象。
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    getAudioCapturerMaxAmplitude(callback: AsyncCallback<int>): void;

    /**
     * 获取当前音频最大振幅。使用Promise异步回调。
     * 
     * 在[prepare]{@link media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)}接口成功调用后，才能调用此接
     * 口。在[stop]{@link media.AVRecorder.stop(callback: AsyncCallback<void>)}接口成功调用后，调用此接口会报错。
     * 
     * 调用接口时，获取到的返回值是上一次获取最大振幅的时刻到当前这段区间内的音频最大振幅。例如，在1s时获取了一次最大振幅，到2s时再获取到的最大振幅是1-2s这个区间里面的最大值。
     *
     * @returns { Promise<int> } Promise对象，返回获取的当前音频最大振幅。
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    getAudioCapturerMaxAmplitude(): Promise<int>;

    /**
     * 获取可用的编码器参数。使用callback异步回调。
     *
     * @param { AsyncCallback<Array<EncoderInfo>> } callback - 回调函数。获取可用的编码器参数成功时，err为undefined，data为获取到的编码器参数，否则为错误对象。
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    getAvailableEncoder(callback: AsyncCallback<Array<EncoderInfo>>): void;

    /**
     * 获取可用的编码器参数。使用Promise异步回调。
     *
     * @returns { Promise<Array<EncoderInfo>> } Promise对象，返回获取的可用的编码器参数。
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    getAvailableEncoder(): Promise<Array<EncoderInfo>>;

    /**
     * 音视频录制的状态。
     * 
     * **原子化服务API：** 从API version 12 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly state: AVRecorderState;

    /**
     * 订阅录音配置变化的回调，任意录音配置的变化会触发变化后的录音配置全量信息回调。使用callback异步回调。
     * 
     * 当用户重复订阅时，以最后一次订阅的回调接口为准。
     *
     * @param { 'audioCapturerChange' } type - 录音配置变化的回调类型，支持的事件：'audioCapturerChange'。
     * @param { Callback<audio.AudioCapturerChangeInfo> } callback - 回调函数，返回变化后的录音配置全量信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     */
    on(type: 'audioCapturerChange', callback: Callback<audio.AudioCapturerChangeInfo>): void;

    /**
     * 订阅媒体资源回调事件，当[FileGenerationMode]{@link @ohos.multimedia.media:media.FileGenerationMode}枚举设置为系统创建媒体文件时，会在
     * [stop]{@link media.AVRecorder.stop(callback: AsyncCallback<void>)}操作结束后把
     * [PhotoAsset]{@link @ohos.file.photoAccessHelper:photoAccessHelper}对象回调给应用。使用callback异步回调。
     * 
     * 当用户重复订阅时，以最后一次订阅的回调接口为准。
     *
     * @param { 'photoAssetAvailable' } type - 录像资源的回调类型，支持的事件：'photoAssetAvailable'。
     * @param { Callback<photoAccessHelper.PhotoAsset> } callback - 回调函数，返回系统创建的资源文件对应的PhotoAsset对象。
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     */
    on(type: 'photoAssetAvailable', callback: Callback<photoAccessHelper.PhotoAsset>): void;
    /**
     * 订阅录制状态机AVRecorderState切换的事件，当AVRecorderState状态机发生变化时，会通过订阅的回调方法通知用户。用户只能订阅一个录制状态机切换事件的回调方法，当用户重复订阅时，以最后一次订阅的回调接口为
     * 准。使用callback异步回调。
     *
     * @param { 'stateChange' } type - 录制状态机切换事件回调类型，支持的事件：'stateChange'，用户操作和系统都会触发此事件。
     * @param { function } callback - 回调函数，返回录制状态机切换事件。 [since 9 - 11]
     * @param { OnAVRecorderStateChangeHandler } callback - 回调函数，返回录制状态机切换事件。 [since 12]
     * @throws { BusinessError } 5400103 - IO error. Return by callback.
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'stateChange', callback: OnAVRecorderStateChangeHandler): void;

    /**
     * 订阅AVRecorder的错误事件，该事件仅用于错误提示，不需要用户停止播控动作。如果此时
     * [AVRecorderState]{@link @ohos.multimedia.media:media.AVRecorderState}也切换至error状态，用户需要通过
     * [reset]{@link media.AVRecorder.reset(callback: AsyncCallback<void>)}或者
     * [release]{@link media.AVRecorder.release(callback: AsyncCallback<void>)}接口退出录制操作。使用callback异步回调。
     * 
     * 用户只能订阅一个错误事件的回调方法，当用户重复订阅时，以最后一次订阅的回调接口为准。
     *
     * @param { 'error' } type - 录制错误事件回调类型'error'。 <br>- 'error'：录制过程中发生错误，触发该事件。
     * @param { ErrorCallback } callback - 回调函数，返回录制错误事件。
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
     * 取消订阅录制状态机[AVRecorderState]{@link @ohos.multimedia.media:media.AVRecorderState}切换的事件。使用callback异步回调。
     *
     * @param { 'stateChange' } type - 录制状态机切换事件回调类型，支持的事件：'stateChange'，用户操作和系统都会触发此事件。
     * @param { OnAVRecorderStateChangeHandler } callback - 回调函数，返回录制状态机切换事件。如果指定参数则取消对应callback（callback对象不能是匿名函数），否则取消
     *     所有callback。<br/>从API version 12开始支持此参数。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    off(type: 'stateChange', callback?: OnAVRecorderStateChangeHandler): void;

    /**
     * 取消订阅录制错误事件，取消后不再接收到AVRecorder的错误事件。使用callback异步回调。
     *
     * @param { 'error' } type - 录制错误事件回调类型'error'。 <br>- 'error'：录制过程中发生错误，触发该事件。
     * @param { ErrorCallback } callback - 回调函数，返回录制错误事件。如果指定参数则取消对应callback（callback对象不能是匿名函数），否则取消所有callback。<br/>从API
     *     version 12开始支持此参数。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    off(type: 'error', callback?: ErrorCallback): void;

    /**
     * 取消订阅录音变化的回调事件。使用callback异步回调。
     *
     * @param { 'audioCapturerChange' } type - 录音配置变化的回调类型，支持的事件：'audioCapturerChange'。
     * @param { Callback<audio.AudioCapturerChangeInfo> } callback - 回调函数，返回变化后的录音配置全量信息。如果指定参数则取消对应callback（callback对象不
     *     能是匿名函数），否则取消所有callback。<br/>从API version 12开始支持此参数。 [since 12]
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     */
    off(type: 'audioCapturerChange', callback?: Callback<audio.AudioCapturerChangeInfo>): void;

    /**
     * 取消订阅媒体资源的回调类型。使用callback异步回调。
     *
     * @param { 'photoAssetAvailable' } type - 录音配置变化的回调类型，支持的事件：'photoAssetAvailable'。
     * @param { Callback<photoAccessHelper.PhotoAsset> } callback - 回调函数，返回系统创建的资源文件对应的PhotoAsset对象。如果指定参数则取消对应callback（
     *     callback对象不能是匿名函数），否则取消所有callback。
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
   * > **说明：**
   * > > 从API version 6开始支持，从API version 8开始废弃，建议使用[CodecMimeType]{@link media.CodecMimeType}替代。
   * 
   * 表示音频编码格式的枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.AudioRecorder
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead media.CodecMimeType
   */
  enum AudioEncoder {
    /**
     * 默认编码格式。
     * 
     * 仅做接口定义，暂不支持使用。
     * 
     * **说明：** 从API version 6开始支持，从API version 8开始废弃，建议使用[CodecMimeType]{@link media.CodecMimeType}中的AUDIO_AAC替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     */
    DEFAULT = 0,

    /**
     * AMR-NB(Adaptive Multi Rate-Narrow Band Speech Codec) 编码格式。
     * 
     * 仅做接口定义，暂不支持使用。
     * 
     * **说明：** 从API version 6开始支持，从API version 8开始废弃，建议使用[CodecMimeType]{@link media.CodecMimeType}中的AUDIO_AMR_NB替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.CodecMimeType#AUDIO_AMR_NB
     */
    AMR_NB = 1,

    /**
     * AMR-WB(Adaptive Multi Rate-Wide Band Speech Codec) 编码格式。
     * 
     * 仅做接口定义，暂不支持使用。
     * 
     * **说明：** 从API version 6开始支持，从API version 8开始废弃，建议使用[CodecMimeType]{@link media.CodecMimeType}中的AUDIO_AMR_WB替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.CodecMimeType#AUDIO_AMR_WB
     */
    AMR_WB = 2,

    /**
     * AAC-LC（Advanced Audio Coding Low Complexity）编码格式。
     * 
     * **说明：** 从API version 6开始支持，从API version 8开始废弃，建议使用[CodecMimeType]{@link media.CodecMimeType}中的AUDIO_AAC替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.CodecMimeType#AUDIO_AAC
     */
    AAC_LC = 3,

    /**
     * HE_AAC（High-Efficiency Advanced Audio Coding）编码格式。
     * 
     * 仅做接口定义，暂不支持使用。
     * 
     * **说明：** 从API version 6开始支持，从API version 8开始废弃，建议使用[CodecMimeType]{@link media.CodecMimeType}中的AUDIO_AAC替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.CodecMimeType#AUDIO_AAC
     */
    HE_AAC = 4
  }

  /**
   * > **说明：**
   * > > 从API version 6开始支持，从API version 8 开始废弃，建议使用[ContainerFormatType]{@link media.ContainerFormatType}替代。
   * 
   * 表示音频封装格式的枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.AudioRecorder
   * @since 6 dynamiconly
   * @deprecated since 8
   * @useinstead media.ContainerFormatType
   */
  enum AudioOutputFormat {
    /**
     * 默认封装格式。
     * 
     * 仅做接口定义，暂不支持使用。
     * 
     * **说明：** 从API version 6开始支持，从API version 8开始废弃，建议根据具体情况选择[ContainerFormatType]{@link media.ContainerFormatType}中的一
     * 项替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     */
    DEFAULT = 0,

    /**
     * 封装为MPEG-4格式。
     * 
     * **说明：** 从API version 6开始支持，从API version 8开始废弃，建议使用[ContainerFormatType]{@link media.ContainerFormatType}中的
     * CFT_MPEG_4替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.ContainerFormatType#CFT_MPEG_4
     */
    MPEG_4 = 2,

    /**
     * 封装为AMR_NB格式。
     * 
     * 仅做接口定义，暂不支持使用。
     * 
     * **说明：** 从API version 6开始支持，从API version 8开始废弃，建议使用[ContainerFormatType]{@link media.ContainerFormatType}中的CFT_AMR
     * ，编码格式使用[CodecMimeType]{@link media.CodecMimeType}中的AUDIO_AMR_NB替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.ContainerFormatType#CFT_AMR
     */
    AMR_NB = 3,

    /**
     * 封装为AMR_WB格式。
     * 
     * 仅做接口定义，暂不支持使用。
     * 
     * **说明：** 从API version 6开始支持，从API version 8开始废弃，建议使用[ContainerFormatType]{@link media.ContainerFormatType}中的CFT_AMR
     * ，编码格式使用[CodecMimeType]{@link media.CodecMimeType}中的AUDIO_AMR_WB替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.ContainerFormatType#CFT_AMR
     */
    AMR_WB = 4,

    /**
     * 封装为ADTS（Audio Data Transport Stream）格式，是AAC音频的传输流格式。
     * 
     * **说明：** 从API version 6开始支持，从API version 8开始废弃，建议使用[ContainerFormatType]{@link media.ContainerFormatType}中的CFT_AAC
     * 替代。
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
   * 设置AVRecorder的水印配置。水印位置从左上角开始计算。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface WatermarkConfig {
    /**
     * 水印到顶部像素行的偏移量。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    top: int;
    /**
     * 水印到左侧像素行的偏移量。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    left: int;
  }

  /**
   * 设置水印配置。水印位置从左上角开始计算。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface WatermarkConfiguration {  
    /**
     * 水印到顶部像素行的偏移量
     * 取值为整数。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    top: int;
    /**
     * 水印到左侧像素行的偏移量
     * 取值为整数。
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
   * 音频录制配置定义。
   *
   * @syscap SystemCapability.Multimedia.Media.AudioRecorder
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.multimedia.media/media.AVRecorderConfig
   */
  interface AudioRecorderConfig {
    /**
     * 音频编码格式。默认值为DEFAULT，API8之后将废弃。
     * 请使用"audioEncoderMime"替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.AudioRecorderConfig.audioEncoderMime
     */
    audioEncoder?: AudioEncoder;

    /**
     * 音频编码比特率，单位为bit/s。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVRecorderProfile#audioBitrate
     */
    audioEncodeBitRate?: number;

    /**
     * 音频采样率，单位为Hz。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVRecorderProfile#audioSampleRate
     */
    audioSampleRate?: number;

    /**
     * 音频声道数。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVRecorderProfile#audioChannels
     */
    numberOfChannels?: number;

    /**
     * 音频输出格式。默认值为DEFAULT。API8之后废弃，使用"fileFormat"替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.AudioRecorderConfig.fileFormat
     */
    format?: AudioOutputFormat;

    /**
     * 音频输出URI。支持两种URI格式。
     * 格式：scheme + "://" + "context"。
     * file格式：file://path
     * fd格式：fd://fd
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVRecorderConfig#url
     */
    uri: string;

    /**
     * 地理位置信息。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVMetadata#location
     */
    location?: Location;

    /**
     * 音频编码格式MIME。用于替代audioEncoder。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVRecorderProfile#audioCodec
     */
    audioEncoderMime?: CodecMimeType;
    /**
     * 输出文件格式，详见ContainerFormatType。用于替代"format"。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVRecorderProfile#fileFormat
     */
    fileFormat?: ContainerFormatType;
  }

  /**
   * > **说明：**
   * >
   * > 从API version 6开始支持，从API version 9开始废弃，建议使用[AVRecorder]{@link @ohos.multimedia.media:media}替代。
   * 
   * 音频录制管理类，用于录制音频媒体。在调用AudioRecorder的方法前，需要先通过
   * [createAudioRecorder()]{@link @ohos.multimedia.media:media.createAudioRecorder} 构建一个AudioRecorder实例。
   *
   * @syscap SystemCapability.Multimedia.Media.AudioRecorder
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.multimedia.media:media
   */
  interface AudioRecorder {
    /**
     * 录音准备。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [AVRecorder.prepare]{@link @ohos.multimedia.media:media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)}
     * > 替代。
     *
     * @permission ohos.permission.MICROPHONE
     * @param { AudioRecorderConfig } config - 配置录音的相关参数，包括音频输出URI、编码格式、采样率、声道数、输出格式等。
     * @throws { BusinessError } 201 - permission denied. [since 12]
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVRecorder.prepare(config: AVRecorderConfig, callback: AsyncCallback<void>)
     */
    prepare(config: AudioRecorderConfig): void;

    /**
     * 开始录制，需在'prepare'事件成功触发后，才能调用start方法。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [AVRecorder.start]{@link @ohos.multimedia.media:media.AVRecorder.start(callback: AsyncCallback<void>)}替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVRecorder.start(callback: AsyncCallback<void>)
     */
    start(): void;

    /**
     * 暂停录制，需要在'start'事件成功触发后，才能调用pause方法。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [AVRecorder.pause]{@link @ohos.multimedia.media:media.AVRecorder.pause(callback: AsyncCallback<void>)}替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVRecorder.pause(callback: AsyncCallback<void>)
     */
    pause(): void;

    /**
     * 恢复录制，需要在'pause'事件成功触发后，才能调用resume方法。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [AVRecorder.resume]{@link @ohos.multimedia.media:media.AVRecorder.resume(callback: AsyncCallback<void>)}替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVRecorder.resume(callback: AsyncCallback<void>)
     */
    resume(): void;

    /**
     * 停止录音。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [AVRecorder.stop]{@link @ohos.multimedia.media:media.AVRecorder.stop(callback: AsyncCallback<void>)}替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVRecorder.stop(callback: AsyncCallback<void>)
     */
    stop(): void;

    /**
     * 释放录音资源。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [AVRecorder.release]{@link @ohos.multimedia.media:media.AVRecorder.release(callback: AsyncCallback<void>)}替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVRecorder.release(callback: AsyncCallback<void>)
     */
    release(): void;

    /**
     * 重置录音。
     * 
     * 进行重置录音之前，需要先调用stop()停止录音。重置录音之后，需要调用prepare()设置录音参数项，才能再次进行录音。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [AVRecorder.reset]{@link @ohos.multimedia.media:media.AVRecorder.reset(callback: AsyncCallback<void>)}替代。
     *
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVRecorder.reset(callback: AsyncCallback<void>)
     */
    reset(): void;

    /**
     * 开始订阅音频录制事件。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [AVRecorder.on('stateChange')]{@link @ohos.multimedia.media:media.AVRecorder.on(type: 'stateChange', callback: OnAVRecorderStateChangeHandler)}
     * > 替代。
     *
     * @param { 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset' } type - 录制事件回调类型，支持的事件包括：'
     *     prepare' | 'start' |  'pause' | ’resume‘ | 'stop' | 'release' | 'reset'。<br/>- 'prepare' ：完成prepare调用，音频录制参数设
     *     置完成，触发该事件。<br/>- 'start' ：完成start调用，音频录制开始，触发该事件。<br/>- 'pause': 完成pause调用，音频暂停录制，触发该事件。<br/>- 'resume': 完成
     *     resume调用，音频恢复录制，触发该事件。<br/>- 'stop' ：完成stop调用，音频停止录制，触发该事件。<br/>- 'release' ：完成release调用，音频释放录制资源，触发该事件。<br/>
     *     - 'reset'：完成reset调用，音频重置为初始状态，触发该事件。
     * @param { function } callback - 录制事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVRecorder.on(type: 'stateChange', callback: OnAVRecorderStateChangeHandler)
     */
    on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void;

    /**
     * 开始订阅音频录制错误事件，当上报error错误事件后，用户需处理error事件，退出录制操作。
     * 
     * > **说明：**
     * > > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [AVRecorder.on('error')]{@link @ohos.multimedia.media:media.AVRecorder.on(type: 'error', callback: ErrorCallback)}
     * > 替代。
     *
     * @param { 'error' } type - 录制错误事件回调类型'error'。<br/>- 'error'：音频录制过程中发生错误，触发该事件。
     * @param { ErrorCallback } callback - 录制错误事件回调方法。
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
   * 该接口自API version 9起停止维护，建议使用AVRecorder。
   * 视频录制管理类，用于视频录制。在调用VideoRecorder的方法前，必须先通过createVideoRecorder()创建一个VideoRecorder实例。
   *
   * @syscap SystemCapability.Multimedia.Media.VideoRecorder
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface VideoRecorder {
    /**
     * 视频录制准备。
     *
     * @permission ohos.permission.MICROPHONE
     * @param { VideoRecorderConfig } config - 录制参数。
     * @param { AsyncCallback<void> } callback - 回调函数，准备录制完成时返回。
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
     * @param { VideoRecorderConfig } config - 录制参数。
     * @returns { Promise<void> } Promise对象，准备录制完成时返回。
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
     * 获取录制surface。必须在prepare完成后和start之前调用。
     *
     * @param { AsyncCallback<string> } callback - 回调函数，返回输入surface id字符串。
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
     * 获取录制surface。必须在prepare完成后和start之前调用。
     *
     * @param { AsyncCallback<string | undefined> } callback - 回调函数，返回输入surface id字符串。
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
     * 获取录制surface。必须在prepare完成后和start之前调用。
     *
     * @returns { Promise<string> } Promise对象，返回输入surface id字符串。
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
     * 获取录制surface。必须在prepare完成后和start之前调用。
     *
     * @returns { Promise<string | undefined> } Promise对象，返回输入surface id字符串。
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
     * 开始视频录制。
     *
     * @param { AsyncCallback<void> } callback - 回调函数，开始录制完成时返回。
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
     * 开始视频录制。
     *
     * @returns { Promise<void> } Promise对象，开始录制完成时返回。
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
     * 暂停视频录制。
     *
     * @param { AsyncCallback<void> } callback - 回调函数，暂停录制完成时返回。
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
     * 暂停视频录制。
     *
     * @returns { Promise<void> } Promise对象，暂停录制完成时返回。
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
     * 恢复视频录制。
     *
     * @param { AsyncCallback<void> } callback - 回调函数，恢复录制完成时返回。
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
     * 恢复视频录制。
     *
     * @returns { Promise<void> } Promise对象，恢复录制完成时返回。
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
     * 停止视频录制。
     *
     * @param { AsyncCallback<void>  } callback - 回调函数，停止录制完成时返回。
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
     * 停止视频录制。
     *
     * @returns { Promise<void> } Promise对象，停止录制完成时返回。
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
     * 释放视频录制资源。
     *
     * @param { AsyncCallback<void> } callback - 回调函数，释放资源完成时返回。
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * 释放视频录制资源。
     *
     * @returns { Promise<void> } Promise对象，释放资源完成时返回。
     * @throws { BusinessError } 5400105 - Service died. Return by callback.
     * @throws { BusinessError } 202 - Not System App. [since 12]
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
    /**
     * 重置视频录制。
     * 在重置之前，必须先调用stop()停止录制。重置后，必须调用prepare()设置录制配置以进行下一次录制。
     *
     * @param { AsyncCallback<void> } callback - 回调函数，重置完成时返回。
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
     * 重置视频录制。
     * 在重置之前，必须先调用stop()停止录制。重置后，必须调用prepare()设置录制配置以进行下一次录制。
     *
     * @returns { Promise<void> } Promise对象，重置完成时返回。
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
     * 监听视频录制错误事件。
     *
     * @param { 'error' } type - 视频录制错误事件的类型。
     * @param { ErrorCallback } callback - 回调函数，监听视频录制错误事件。
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
     * 监听视频录制错误事件。
     *
     * @param { ErrorCallback } callback - 回调函数，监听视频录制错误事件。
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
     * 视频录制状态。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly state: VideoRecordState;
  }

  /**
   * 视频播放的状态机，可通过state属性获取当前状态。
   * 
   * > **说明：**
   * > > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayerState]{@link media.AVPlayerState}替代。
   *
   * @unionmember { 'idle' } 视频播放空闲。
   * @unionmember { 'prepared' } 视频播放准备。
   * @unionmember { 'playing' } 视频正在播放。
   * @unionmember { 'paused' } 视频暂停播放。
   * @unionmember { 'stopped' } 视频播放停止。
   * @unionmember { 'error' } 错误状态。
   * @syscap SystemCapability.Multimedia.Media.VideoPlayer
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead media.AVPlayerState
   */

  type VideoPlayState = 'idle' | 'prepared' | 'playing' | 'paused' | 'stopped' | 'error';

  /**
   * 视频播放的倍速枚举，可通过setSpeed方法作为参数传递下去。
   *
   * @syscap SystemCapability.Multimedia.Media.VideoPlayer
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum PlaybackSpeed {
    /**
     * 表示视频播放正常播速的0.75倍。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_0_75_X = 0,
    /**
     * 表示视频播放正常播速。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_1_00_X = 1,
    /**
     * 表示视频播放正常播速的1.25倍。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_1_25_X = 2,
    /**
     * 表示视频播放正常播速的1.75倍。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_1_75_X = 3,
    /**
     * 表示视频播放正常播速的2.00倍。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_2_00_X = 4,
    /**
     * 表示视频播放正常播速的0.50倍。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_0_50_X = 5,
    /**
     * 表示视频播放正常播速的1.50倍。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_1_50_X = 6,
    /**
     * 表示视频播放正常播速的3.00倍。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_3_00_X = 7,
    /**
     * 表示视频播放正常播速的0.25倍。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_0_25_X = 8,
    /**
     * 表示视频播放正常播速的0.125倍。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SPEED_FORWARD_0_125_X = 9,
  }

  /**
   * 视频播放管理类，用于管理和播放视频媒体。在调用VideoPlayer的方法前，需要先通过
   * [createVideoPlayer()]{@link @ohos.multimedia.media:media.createVideoPlayer(callback: AsyncCallback<VideoPlayer>)}构建
   * 一个VideoPlayer实例。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayer]{@link @ohos.multimedia.media:media}替代。
   *
   * @syscap SystemCapability.Multimedia.Media.VideoPlayer
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.multimedia.media:media
   */
  interface VideoPlayer {
    /**
     * 设置SurfaceId。通过回调函数获取返回值。
     * 
     * > **说明：**
     * >
     * > - SetDisplaySurface需要在设置url和Prepare之间，无音频的视频流必须设置Surface否则Prepare失败。
     * >
     * > - 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.surfaceId](docroot://reference/apis-media-kit/arkts-apis-media-AVPlayer.md#属性)替代。
     *
     * @param {string} surfaceId - 指定SurfaceId，应从XComponent组件获取，获取方式请参考
     *     [XComponent]{@link ./@internal/component/ets/xcomponent}。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置SurfaceId成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead null
     */
    setDisplaySurface(surfaceId: string, callback: AsyncCallback<void>): void;
    /**
     * 设置SurfaceId。通过Promise获取返回值。
     * 
     * > **说明：**
     * >
     * > - SetDisplaySurface需要在设置url和Prepare之间，无音频的视频流必须设置Surface否则Prepare失败。
     * >
     * > - 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.surfaceId](docroot://reference/apis-media-kit/arkts-apis-media-AVPlayer.md#属性)替代。
     *
     * @param {string} surfaceId - 指定SurfaceId，应从XComponent组件获取，获取方式请参考
     *     [XComponent]{@link ./@internal/component/ets/xcomponent}。
     * @returns { Promise<void> } 设置SurfaceId的Promise返回值。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead null
     */
    setDisplaySurface(surfaceId: string): Promise<void>;
    /**
     * 准备播放视频。通过回调函数获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.prepare]{@link @ohos.multimedia.media:media.AVPlayer.prepare(callback: AsyncCallback<void>)}替代。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当准备播放视频成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.prepare(callback: AsyncCallback<void>)
     */
    prepare(callback: AsyncCallback<void>): void;
    /**
     * 准备播放视频。通过Promise获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.prepare]{@link @ohos.multimedia.media:media.AVPlayer.prepare()}替代。
     *
     * @returns { Promise<void> } 准备播放视频的Promise返回值。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.prepare()
     */
    prepare(): Promise<void>;
    /**
     * 开始播放视频。通过回调函数获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.play]{@link @ohos.multimedia.media:media.AVPlayer.play(callback: AsyncCallback<void>)}替代。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当开始播放视频成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.play(callback: AsyncCallback<void>)
     */
    play(callback: AsyncCallback<void>): void;
    /**
     * 开始播放视频。通过Promise获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayer.play]{@link @ohos.multimedia.media:media.AVPlayer.play()}替代
     * > 。
     *
     * @returns { Promise<void> } 开始播放视频的Promise返回值。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.play()
     */
    play(): Promise<void>;
    /**
     * 通过回调方式暂停播放视频。通过回调函数获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.pause]{@link @ohos.multimedia.media:media.AVPlayer.pause(callback: AsyncCallback<void>)}替代。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当暂停播放视频成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.pause(callback: AsyncCallback<void>)
     */
    pause(callback: AsyncCallback<void>): void;
    /**
     * 暂停播放视频。通过Promise获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayer.pause]{@link @ohos.multimedia.media:media.AVPlayer.pause()}
     * > 替代。
     *
     * @returns { Promise<void> } 暂停播放视频的Promise返回值。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.pause()
     */
    pause(): Promise<void>;
    /**
     * 通过回调方式停止播放视频。通过回调函数获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.stop]{@link @ohos.multimedia.media:media.AVPlayer.stop(callback: AsyncCallback<void>)}替代。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当停止播放视频成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.stop(callback: AsyncCallback<void>)
     */
    stop(callback: AsyncCallback<void>): void;
    /**
     * 停止播放视频。通过Promise获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayer.stop]{@link @ohos.multimedia.media:media.AVPlayer.stop()}替代
     * > 。
     *
     * @returns { Promise<void> } 停止播放视频的Promise返回值。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.stop()
     */
    stop(): Promise<void>;
    /**
     * 重置播放视频。通过回调函数获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.reset]{@link @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)}替代。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当重置播放视频成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.reset(callback: AsyncCallback<void>)
     */
    reset(callback: AsyncCallback<void>): void;
    /**
     * 重置播放视频。通过Promise获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayer.reset]{@link @ohos.multimedia.media:media.AVPlayer.reset()}
     * > 替代。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.reset()
     */
    reset(): Promise<void>;
    /**
     * 跳转到指定播放位置，默认跳转到指定时间点的上一个关键帧。通过回调函数获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayer.seek]{@link @ohos.multimedia.media:media.AVPlayer.seek}替代。
     *
     * @param { number } timeMs - 指定的跳转时间节点，单位毫秒（ms），取值范围为[0, duration]。
     * @param { AsyncCallback<number> } callback - 回调函数。跳转到指定播放位置成功时，err为undefined，data为获取到的跳转到的播放位置，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.seek
     */
    seek(timeMs: number, callback: AsyncCallback<number>): void;
    /**
     * 跳转到指定播放位置。通过回调函数获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayer.seek]{@link @ohos.multimedia.media:media.AVPlayer.seek}替代。
     *
     * @param { number } timeMs - 指定的跳转时间节点，单位毫秒（ms），取值范围为[0, duration]。
     * @param { SeekMode } mode - 跳转模式。
     * @param { AsyncCallback<number> } callback - 回调函数。跳转到指定播放位置成功时，err为undefined，data为获取到的跳转到的播放位置，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.seek
     */
    seek(timeMs: number, mode: SeekMode, callback: AsyncCallback<number>): void;
    /**
     * 跳转到指定播放位置，如果没有设置mode则跳转到指定时间点的上一个关键帧。通过Promise获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用[AVPlayer.seek]{@link @ohos.multimedia.media:media.AVPlayer.seek}替代。
     *
     * @param { number } timeMs - 指定的跳转时间节点，单位毫秒（ms），取值范围为[0, duration]。
     * @param { SeekMode } mode - 基于视频I帧的跳转模式，默认为SEEK_PREV_SYNC模式。
     * @returns { Promise<number> } 跳转到指定播放位置的Promise返回值，单位ms。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.seek
     */
    seek(timeMs: number, mode?: SeekMode): Promise<number>;
    /**
     * 设置音量。通过回调函数获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.setVolume]{@link @ohos.multimedia.media:media.AVPlayer.setVolume}替代。
     *
     * @param { number } vol - 指定的相对音量大小，取值范围为[0.00-1.00]，1表示最大音量，即100%。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置音量成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.setVolume
     */
    setVolume(vol: number, callback: AsyncCallback<void>): void;
    /**
     * 设置音量。通过Promise获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.setVolume]{@link @ohos.multimedia.media:media.AVPlayer.setVolume}替代。
     *
     * @param { number } vol - 指定的相对音量大小，取值范围为[0.00-1.00]，1表示最大音量，即100%。
     * @returns { Promise<void> } 设置音量的Promise返回值。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.setVolume
     */
    setVolume(vol: number): Promise<void>;
    /**
     * 释放视频资源。通过回调函数获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.release]{@link @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>)}替代。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当释放视频资源成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.release(callback: AsyncCallback<void>)
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * 释放视频资源。通过Promise获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.release]{@link @ohos.multimedia.media:media.AVPlayer.release()}替代。
     *
     * @returns { Promise<void> } 释放视频资源的Promise返回值。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.release()
     */
    release(): Promise<void>;
    /**
     * 获取视频轨道信息。通过回调函数获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.getTrackDescription]{@link @ohos.multimedia.media:media.AVPlayer.getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>)}
     * > 替代。
     *
     * @param { AsyncCallback<Array<MediaDescription>> } callback - 回调函数。获取视频轨道信息成功时，err为undefined，data为获取到的视频轨道信息
     *     MediaDescription数组，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>)
     */
    getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void;

    /**
     * 获取视频轨道信息。通过Promise获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.getTrackDescription]{@link @ohos.multimedia.media:media.AVPlayer.getTrackDescription()}替代。
     *
     * @returns { Promise<Array<MediaDescription>> } Promise对象，返回获取的视频轨道信息MediaDescription数组。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.getTrackDescription()
     */
    getTrackDescription(): Promise<Array<MediaDescription>>;

    /**
     * 视频媒体URL，支持当前主流的视频格式(mp4、mpeg-ts、mkv)。
     * 
     * **支持路径示例**：
     * 
     * 1. fd类型播放：fd://xx
     * 
     * ![](docroot://reference/apis-media-kit/figures/zh-cn_image_url.png)
     * 
     * 2. http网络播放: http://xx
     * 3. https网络播放: https://xx
     * 4. hls网络播放路径：http://xx或者https://xx
     * 5. file类型: file://xx
     * 
     * **说明：**
     * 
     * 从API version 11开始不支持webm。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#url
     */
    url: string;

    /**
     * 视频媒体文件描述，使用场景：应用中的视频资源被连续存储在同一个文件中。
     * 
     * **使用示例**：
     * 
     * 假设一个连续存储的音乐文件: 
     * 
     * 视频1(地址偏移:0，字节长度:100)
     * 
     * 视频2(地址偏移:101，字节长度:50)
     * 
     * 视频3(地址偏移:151，字节长度:150)
     * 
     * 1. 播放视频1：AVFileDescriptor { fd = 资源句柄; offset = 0; length = 100; }
     * 2. 播放视频2：AVFileDescriptor { fd = 资源句柄; offset = 101; length = 50; }
     * 3. 播放视频3：AVFileDescriptor { fd = 资源句柄; offset = 151; length = 150; }
     * 
     * 假设是一个独立的视频文件: 请使用src=fd://xx
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#fdSrc
     */
    fdSrc: AVFileDescriptor;

    /**
     * 视频循环播放属性，设置为'true'表示循环播放。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#loop
     */
    loop: boolean;

    /**
     * 视频的当前播放位置，单位为毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#currentTime
     */
    readonly currentTime: number;

    /**
     * 视频时长，单位为毫秒（ms），返回-1表示直播模式。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#duration
     */
    readonly duration: number;

    /**
     * 视频播放的状态。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#state
     */
    readonly state: VideoPlayState;

    /**
     * 视频宽，单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#width
     */
    readonly width: number;

    /**
     * 视频高，单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#height
     */
    readonly height: number;

    /**
     * 音频焦点模式。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#audioInterruptMode
     */
    audioInterruptMode?: audio.InterruptMode;

    /**
     * 视频缩放模式。默认值为VIDEO_SCALE_TYPE_FIT。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer#videoScaleType
     */
    videoScaleType?: VideoScaleType;

    /**
     * 设置播放速度。通过回调函数获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.setSpeed]{@link @ohos.multimedia.media:media.AVPlayer.setSpeed}替代。
     *
     * @param { number } speed - 指定播放视频速度，具体见[PlaybackSpeed]{@link @ohos.multimedia.media:media.PlaybackSpeed}。
     * @param { AsyncCallback<number> } callback - 回调函数。设置播放速度成功时，err为undefined，data为设置的播放速度，否则为错误对象。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.setSpeed
     */
    setSpeed(speed: number, callback: AsyncCallback<number>): void;
    /**
     * 设置播放速度。通过Promise获取返回值。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.setSpeed]{@link @ohos.multimedia.media:media.AVPlayer.setSpeed}替代。
     *
     * @param { number } speed - 指定播放视频速度，具体见[PlaybackSpeed]{@link @ohos.multimedia.media:media.PlaybackSpeed}。
     * @returns { Promise<number> } Promise对象，返回设置的播放速度，具体见
     *     [PlaybackSpeed]{@link @ohos.multimedia.media:media.PlaybackSpeed}。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.setSpeed
     */
    setSpeed(speed: number): Promise<number>;

    /**
     * 开始监听视频播放完成事件。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.on('stateChange')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)}
     * > 替代。
     *
     * @param { 'playbackCompleted' } type - 视频播放完成事件回调类型，支持的事件：'playbackCompleted'。
     * @param { Callback<void> } callback - 视频播放完成事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'stateChange', callback: OnAVPlayerStateChangeHandle)
     */
    on(type: 'playbackCompleted', callback: Callback<void>): void;

    /**
     * 开始监听视频缓存更新事件。仅网络播放支持该订阅事件。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.on('bufferingUpdate')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'bufferingUpdate', callback: OnBufferingUpdateHandler)}
     * > 替代。
     *
     * @param { 'bufferingUpdate' } type - 视频缓存事件回调类型，支持的事件：'bufferingUpdate'。
     * @param { function } callback - 视频缓存事件回调方法。<br>
     *     [BufferingInfoType]{@link @ohos.multimedia.media:media.BufferingInfoType}value值固定为0。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'bufferingUpdate', callback: OnBufferingUpdateHandler)
     */
    on(type: 'bufferingUpdate', callback: (infoType: BufferingInfoType, value: number) => void): void;

    /**
     * 开始监听视频播放首帧送显上报事件。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.on('startRenderFrame')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'startRenderFrame', callback: Callback<void>)}
     * > 替代。
     *
     * @param { 'startRenderFrame' } type - 视频播放首帧送显上报事件回调类型，支持的事件：'startRenderFrame'。
     * @param { Callback<void> } callback - 视频播放首帧送显上报事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'startRenderFrame', callback: Callback<void>)
     */
    on(type: 'startRenderFrame', callback: Callback<void>): void;

    /**
     * 开始监听视频播放宽高变化事件。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.on('videoSizeChange')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'videoSizeChange', callback: OnVideoSizeChangeHandler)}
     * > 替代。
     *
     * @param { 'videoSizeChanged' } type - 视频播放宽高变化事件回调类型，支持的事件：'videoSizeChanged'。
     * @param { function } callback - 视频播放宽高变化事件回调方法，width表示宽，height表示高。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'videoSizeChange', callback: OnVideoSizeChangeHandler)
     */
    on(type: 'videoSizeChanged', callback: (width: number, height: number) => void): void;

    /**
     * 监听音频焦点变化事件，参考[audio.InterruptEvent]{@link @ohos.multimedia.audio:audio.InterruptEvent}。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.on('audioInterrupt')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>)}
     * > 替代。
     *
     * @param { 'audioInterrupt' } type - 音频焦点变化事件回调类型，支持的事件：'audioInterrupt'。
     * @param { function } callback - 音频焦点变化事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 9 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>)
     */
    on(type: 'audioInterrupt', callback: (info: audio.InterruptEvent) => void): void;

    /**
     * 开始监听视频播放错误事件，当上报error错误事件后，用户需处理error事件，退出播放操作。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [AVPlayer.on('error')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'error', callback: ErrorCallback)}替
     * > 代。
     *
     * @param { 'error' } type - 播放错误事件回调类型，支持的事件包括：'error'。<br>- 'error'：视频播放中发生错误，触发该事件。
     * @param { ErrorCallback } callback - 播放错误事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.multimedia.media:media.AVPlayer.on(type: 'error', callback: ErrorCallback)
     */
    on(type: 'error', callback: ErrorCallback): void;
  }

  /**
   * 枚举，视频缩放模式。
   *
   * @syscap SystemCapability.Multimedia.Media.VideoPlayer
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum VideoScaleType {
    /**
     * 默认比例类型，视频拉伸至与窗口等大。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    VIDEO_SCALE_TYPE_FIT = 0,

    /**
     * 保持视频宽高比缩放至最短边填满窗口，长边超出窗口部分被裁剪。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    VIDEO_SCALE_TYPE_FIT_CROP = 1,

    /**
     * 保持视频宽高比缩放至长边填满窗口，短边居中对齐，未填满部分留黑。
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
   * 表示容器格式类型的枚举，缩写为CFT。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum ContainerFormatType {
    /**
     * 视频的容器格式，MP4。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 22]
     * @since 8 dynamic
     * @since 23 static
     */
    CFT_MPEG_4 = 'mp4',

    /**
     * 音频的容器格式，M4A。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    CFT_MPEG_4A = 'm4a',

    /**
     * 音频的容器格式，MP3。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    CFT_MP3 = 'mp3',
    /**
     * 音频的容器格式，WAV。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    CFT_WAV = 'wav',
    /**
     * 音频的容器格式，AMR。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 18 dynamic
     * @since 23 static
     */
    CFT_AMR = 'amr',
    /**
     * 音频的容器格式，AAC。默认为ADTS帧头格式。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 20 dynamic
     * @since 23 static
     */
    CFT_AAC = 'aac'
  }

  /**
   * 媒体类型枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  enum MediaType {
    /**
     * 表示未支持的类型。 
     * 
     * **原子化服务API：** 从API version 20 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    MEDIA_TYPE_UNSUPPORTED = -1,    
    /**
     * 表示音频。 
     * 
     * **原子化服务API：** 从API version 11 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MEDIA_TYPE_AUD = 0,
    /**
     * 表示视频。  
     * 
     * **原子化服务API：** 从API version 11 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MEDIA_TYPE_VID = 1,
    /**
     * 表示字幕。 
     * 
     * **原子化服务API：** 从API version 12 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MEDIA_TYPE_SUBTITLE = 2,
    /**
     * 表示附件信息（如嵌入的外部文件）。 
     * 
     * **原子化服务API：** 从API version 20 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    MEDIA_TYPE_ATTACHMENT = 3,
    /**
     * 表示数据。 
     * 
     * **原子化服务API：** 从API version 20 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    MEDIA_TYPE_DATA = 4,
    /**
     * 表示带时间戳的元数据。 
     * 
     * **原子化服务API：** 从API version 20 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    MEDIA_TYPE_TIMED_METADATA = 5,
    /**
     * 表示辅助（轨道）信息。 
     * 
     * **原子化服务API：** 从API version 20 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    MEDIA_TYPE_AUXILIARY = 6
  }

  /**
   * 媒体信息描述枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  enum MediaDescriptionKey {
    /**
     * 表示轨道序号，其对应键值类型为number。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_TRACK_INDEX = 'track_index',

    /**
     * 表示轨道类型，其对应键值类型为number，参考[MediaType]{@link media.MediaType}。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_TRACK_TYPE = 'track_type',

    /**
     * 表示codec_mime类型，其对应键值类型为string。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_CODEC_MIME = 'codec_mime',

    /**
     * 表示媒体时长，其对应键值类型为number，单位为毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_DURATION = 'duration',

    /**
     * 表示比特率，其对应键值类型为number，单位为比特率（bps），值为undefined或0表示异常。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_BITRATE = 'bitrate',

    /**
     * 表示视频宽度，其对应键值类型为number，单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_WIDTH = 'width',

    /**
     * 表示视频高度，其对应键值类型为number，单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_HEIGHT = 'height',

    /**
     * 表示视频帧率，其对应键值类型为number，单位为每100秒的帧数。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_FRAME_RATE = 'frame_rate',

    /**
     * 表示声道数，其对应键值类型为number。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_AUD_CHANNEL_COUNT = 'channel_count',

    /**
     * 表示采样率，其对应键值类型为number，单位为赫兹（Hz）。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    MD_KEY_AUD_SAMPLE_RATE = 'sample_rate',

    /**
     * 表示位深，其对应键值类型为number，单位为位（bit）。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MD_KEY_AUD_SAMPLE_DEPTH = 'sample_depth',

    /**
     * 表示字幕语言，其对应键值类型为string。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MD_KEY_LANGUAGE = 'language',

    /**
     * 表示track名称，其对应键值类型为string。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MD_KEY_TRACK_NAME = 'track_name',

    /**
     * 表示视频轨类型，其对应键值类型为string。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MD_KEY_HDR_TYPE = 'hdr_type',

    /**
     * 表示视频原始宽度，其对应键值类型为number，单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    MD_KEY_ORIGINAL_WIDTH = 'original_width',

    /**
     * 表示视频原始高度，其对应键值类型为number，单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 23 static
     */
    MD_KEY_ORIGINAL_HEIGHT = 'original_height',

    /**
     * 表示轨道的mime_type类型，其对应键值类型为string。对于音视频轨道，该值与MD_KEY_CODEC_MIME相同。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    MD_KEY_MIME_TYPE = 'mime_type',
  
    /**
     * 表示此轨道与其他轨道的引用关系，其对应键值类型为string，以逗号分隔。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    MD_KEY_REFERENCE_TRACK_IDS = 'ref_track_ids',

    /**
     * 表示此轨道作为辅助轨的辅助类型，其对应键值类型为string。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 23 dynamic&static
     */
    MD_KEY_TRACK_REFERENCE_TYPE = 'track_ref_type',
  }

  /**
   * 视频录制配置参数定义。
   *
   * @syscap SystemCapability.Multimedia.Media.VideoRecorder
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface VideoRecorderProfile {
    /**
     * 音频比特率，单位为bit/s。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly audioBitrate: int;

    /**
     * 音频声道数。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly audioChannels: int;

    /**
     * 音频编码格式。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly audioCodec: CodecMimeType;

    /**
     * 音频采样率，单位为Hz。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly audioSampleRate: int;

    /**
     * 输出文件格式。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly fileFormat: ContainerFormatType;

    /**
     * 视频比特率，单位为bit/s。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly videoBitrate: int;

    /**
     * 视频编码格式。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly videoCodec: CodecMimeType;

    /**
     * 视频宽度，单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly videoFrameWidth: int;

    /**
     * 视频高度，单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly videoFrameHeight: int;

    /**
     * 视频帧率，单位为fps。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly videoFrameRate: int;
  }

  /**
   * 表示视频录制中音频源类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum AudioSourceType {
    /**
     * 默认的音频输入源类型。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO_SOURCE_TYPE_DEFAULT = 0,
    /**
     * 表示MIC的音频输入源。
     * 
     * **原子化服务API：** 从API version 12 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO_SOURCE_TYPE_MIC = 1,
    /**
     * 表示语音识别场景的音频源。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_SOURCE_TYPE_VOICE_RECOGNITION = 2,

    /**
     * 表示语音通话场景的音频源。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_SOURCE_TYPE_VOICE_COMMUNICATION = 7,
    /**
     * 表示短语音消息的音频源。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_SOURCE_TYPE_VOICE_MESSAGE = 10,
    /**
     * 表示相机录像的音频源。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_SOURCE_TYPE_CAMCORDER = 13
  }

  /**
   * 表示视频录制中视频源类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  enum VideoSourceType {
    /**
     * 输入surface中携带的是raw data。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    VIDEO_SOURCE_TYPE_SURFACE_YUV = 0,
    /**
     * 输入surface中携带的是ES data。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    VIDEO_SOURCE_TYPE_SURFACE_ES = 1,
  }

  /**
   * 录制的元数据源类型枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum MetaSourceType {
    /**
     * 视频的Maker信息。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    VIDEO_MAKER_INFO = 0
  }

  /**
   * 表示创建媒体文件模式的枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @since 12 dynamic
   * @since 23 static
   */
  enum FileGenerationMode {
    /**
     * 由应用自行在沙箱创建媒体文件。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     * @since 23 static
     */
    APP_CREATE = 0,
    /**
     * 由系统创建媒体文件，当前仅在相机录制场景下生效，会忽略应用设置的url。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO_CREATE_CAMERA_SCENE = 1,
  }

  /**
   * 视频录制配置定义。
   *
   * @syscap SystemCapability.Multimedia.Media.VideoRecorder
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface VideoRecorderConfig {
    /**
     * 音频源类型，详见AudioSourceType。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    audioSourceType?: AudioSourceType;
    /**
     * 视频源类型，详见VideoSourceType。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    videoSourceType: VideoSourceType;
    /**
     * 视频录制配置参数，可通过getVideoRecorderProfile获取，详见VideoRecorderProfile。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    profile: VideoRecorderProfile;
    /**
     * 视频输出URI。支持两种URI格式。
     * 格式：scheme + "://" + "context"。
     * fd格式：fd://fd
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    url: string;
    /**
     * 设置视频输出文件中的旋转角度，用于文件播放。仅mp4格式支持。
     * 旋转角度取值为{0, 90, 180, 270}，默认值为0。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    rotation?: int;
    /**
     * 地理位置信息。
     *
     * @syscap SystemCapability.Multimedia.Media.VideoRecorder
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    location?: Location;
  }

  /**
   * 编码器信息描述。
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @since 11 dynamic
   * @since 23 static
   */
  interface EncoderInfo {
    /**
     * 编码器的MIME类型。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    mimeType: CodecMimeType;

    /**
     * 编码器类型。值audio表示音频编码器，值video表示视频编码器。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    type: string;

    /**
     * 编码器比特率范围，包含最小和最大比特率，单位为bit/s。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    bitRate?: Range;

    /**
     * 视频帧率范围，包含最小和最大帧率，单位为fps。仅在视频编码器中可用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    frameRate?: Range;

    /**
     * 视频帧宽度范围，包含最小和最大宽度，单位为像素（px）。仅在视频编码器中可用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    width?: Range;

    /**
     * 视频帧高度范围，包含最小和最大高度，单位为像素（px）。仅在视频编码器中可用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    height?: Range;

    /**
     * 音频采集器的声道数范围，包含最小和最大声道数。仅在音频编码器中可用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    channels?: Range;

    /**
     * 音频采样率，包含所有可用的音频采样率，单位为Hz。仅在音频编码器中可用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    sampleRate?: Array<int>;
  }

  /**
   * 包含上下限的范围。
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @since 11 dynamic
   * @since 23 static
   */
  interface Range {
    /**
     * 最小值。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    min: int;

    /**
     * 最大值。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 11 dynamic
     * @since 23 static
     */
    max: int;
  }

  /**
   * 高级音频编码（AAC）类型枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  enum AacProfile {
    /**
     * 表示AAC Low-Complexity类型。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AAC_LC = 0,

    /**
     * 表示AAC High-Efficiency类型。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AAC_HE = 1,

    /**
     * 表示AAC High-Efficiency version 2类型。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    AAC_HE_V2 = 2,
  }

  /**
   * 音视频录制配置参数。
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AVRecorderProfile {
    /**
     * 音频编码比特率，单位为bit/s。录制音频时该参数为必填参数。<br>支持的比特率范围：
     * <br>- AAC编码格式范围 [32000 - 500000]。<br>- G.711 μ-law编码格式范围 [64000]。
     * <br>- MP3编码格式范围 [8000, 16000, 32000, 40000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 160000, 192000,
     * 224000, 256000, 320000]。<br>使用MP3编码格式时，采样率和比特率的对应关系如下：<br>- 采样率低于
     * 16 kHz时，比特率范围为 [8000 - 64000]。<br>- 采样率在16 kHz至32 kHz之间时，
     * 比特率范围为 [8000 - 160000]。<br>- 采样率大于32 kHz时，比特率范围为 [32000 - 320000]。<br>- AMR-NB编码格式范围 [4750, 5150, 5900, 6700, 7400, 7950, 10200, 12200]。<br>- AMR-WB编码格式范围 [6600, 8850, 12650, 14250, 15850, 18250, 19850, 23050, 23850]。<br>**原子化服务API**：从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    audioBitrate?: int;

    /**
     * 音频声道数。录制音频时该参数为必填参数。<br>- AAC编码格式范围 [1 - 2]。<br>- G.711 μ-law编码格式范围 [1]。<br>- MP3编码格式范围 [1 - 2]。<br>- AMR-NB和AMR-WB编码格式范围 [1]。<br>**原子化服务API**：从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    audioChannels?: int;

    /**
     * 音频编码格式。录制音频时该参数为必填参数。当前支持AUDIO_AAC、AUDIO_MP3、AUDIO_G711MU、AUDIO_AMR_NB和AUDIO_AMR_WB。<br>**原子化服务API**：从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    audioCodec?: CodecMimeType;

    /**
     * AAC音频编码器的AAC profile。如果不设置，默认使用AAC_LC profile。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    aacProfile?: AacProfile;

    /**
     * 音频采样率，单位为Hz。录制音频时该参数为必填参数。<br>支持的采样率范围：
     * <br>- AAC编码格式范围 [8000, 11025, 12000, 16000, 22050, 24000, 32000, 44100, 48000, 64000, 88200, 96000]。<br>- G.711 μ-law编码格式范围 [8000]。<br>- MP3编码格式范围 [8000, 11025, 12000, 16000,
     * 22050, 24000, 32000, 44100, 48000]。<br>- AMR-NB编码格式范围 [8000]。<br>- AMR-WB编码格式范围 [16000]。<br>可变比特率。比特率仅供参考。<br>**原子化服务API**：从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    audioSampleRate?: int;

    /**
     * 文件的容器格式。此参数为必填参数。当前支持MP4、M4A、MP3、WAV、AMR和AAC容器格式。AUDIO_MP3编码格式不能在MP4容器格式中使用。<br>**原子化服务API**：从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    fileFormat: ContainerFormatType;

    /**
     * 视频编码比特率，单位为bit/s。录制视频时该参数为必填参数。取值范围为[10000 - 100000000]。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    videoBitrate?: int;

    /**
     * 视频编码格式。录制视频时该参数为必填参数。当前支持VIDEO_AVC和VIDEO_HEVC。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    videoCodec?: CodecMimeType;

    /**
     * 视频帧宽度，单位为像素（px）。录制视频时该参数为必填参数。取值范围为[176 - 4096]。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    videoFrameWidth?: int;

    /**
     * 视频帧高度，单位为像素（px）。录制视频时该参数为必填参数。取值范围为[144 - 4096]。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    videoFrameHeight?: int;

    /**
     * 视频帧率，单位为fps。录制视频时该参数为必填参数。取值范围为[1 - 60]。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    videoFrameRate?: int;

    /**
     * HDR编码。录制视频时该参数可选。默认值为**false**，对编码格式无要求。当**isHdr**设置为**true**时，编码格式必须为**video/hevc**。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    isHdr?: boolean;

    /**
     * 是否支持时域分层编码。录制视频时该参数可选。默认值为**false**。如果设置为**true**，视频输出流中的部分帧可以跳过不编码。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    enableTemporalScale?: boolean;

    /**
     * 是否启用视频编码策略以实现质量稳定编码。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    enableStableQualityMode?: boolean
 
    /**
     * 是否启用B帧。默认不启用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 20 dynamic
     * @since 23 static
     */
    enableBFrame?: boolean;
  }

  /**
   * 音视频录制的参数。
   * 
   * audioSourceType和videoSourceType参数用于区分纯音频录制、纯视频录制和音视频录制。纯音频录制仅设置audioSourceType。纯视频录制仅设置videoSourceType。音视频录制需同时设置audioSourceType和videoSourceType。
   *
   * @syscap SystemCapability.Multimedia.Media.AVRecorder
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AVRecorderConfig {
    /**
     * 录制的音频源类型。录制音频时该参数为必填参数。<br>**原子化服务API**：从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    audioSourceType?: AudioSourceType;
    /**
     * 录制的视频源类型。录制视频时该参数为必填参数。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    videoSourceType?: VideoSourceType;
    /**
     * 元数据源类型，详见MetaSourceType。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    metaSourceTypes?: Array<MetaSourceType>;
    /**
     * 录制配置参数。此参数为必填参数。<br>**原子化服务API**：从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    profile: AVRecorderProfile;
    /**
     * 录制输出URL：fd://xx（fd句柄）。<br>此参数为必填参数。<br>**原子化服务API**：从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    url: string;

    /**
     * 文件创建模式，与on('photoAssetAvailable')配合使用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     * @since 23 static
     */
    fileGenerationMode?: FileGenerationMode;
    /**
     * 录制视频的旋转角度。MP4视频取值可为0（默认）、90、180或270。<br>此接口从API version 6开始支持，从API version 12开始废弃，建议使用**AVMetadata.videoOrientation**替代。如果同时设置了两个参数，将使用**AVMetadata.videoOrientation**。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.media/media.AVMetadata#videoOrientation
     */
    rotation?: number;
    /**
     * 录制视频的地理位置。默认不记录地理位置信息。<br>此接口从API version 6开始支持，从API version 12开始废弃，建议使用**AVMetadata.location**替代。如果同时设置了两个参数，将使用**AVMetadata.location**。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead ohos.multimedia.media/media.AVMetadata#location
     */
    location?: Location;
    /**
     * 元数据。详见AVMetadata。
     *
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 12 dynamic
     * @since 23 static
     */
    metadata?: AVMetadata;
    /**
     * 最大录制时长，单位为秒。取值范围为[1, 2^31-1]。如果提供了无效值，将重置为最大允许时长。一旦录制达到指定时长，将自动停止并通过**stateChange**回调通知录制已停止：AVRecorderState = 'stopped'，StateChangeReason = BACKGROUND。
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
   * 视频播放的Seek模式枚举，可通过seek方法作为参数传递下去。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  enum SeekMode {
    /**
     * 表示跳转到指定时间点的下一个关键帧，建议向后快进的时候用这个枚举值。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    SEEK_NEXT_SYNC = 0,
    /**
     * 表示跳转到指定时间点的上一个关键帧，建议向前快进的时候用这个枚举值。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 8 dynamic
     * @since 23 static
     */
    SEEK_PREV_SYNC = 1,
    /**
     * 表示跳转到距离指定时间点最近的帧，建议精准跳转进度的时候用这个枚举值。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SEEK_CLOSEST = 2,
    /**
     * 该模式提供了一种画面平滑流畅变化的Seek体验，应用可以结合进度条控件持续调用Seek方法，AVPlayer根据Seek调用持续流畅地更新画面。
     * 
     * 应用可以调用[isSeekContinuousSupported]{@link @ohos.multimedia.media:media.AVPlayer.isSeekContinuousSupported}方法根据返回结果感
     * 知视频源是否支持该模式Seek。
     * 
     * 对于不支持该Seek模式的视频源调用该模式Seek时，会上报AVERR_SEEK_CONTINUOUS_UNSUPPORTED错误(参考[AVErrorCode]{@link media.AVErrorCode})，同时画面更
     * 新的流畅性会降低。
     * 
     * 该Seek模式不会触发
     * [on('seekDone')]{@link @ohos.multimedia.media:media.AVPlayer.on(type: 'seekDone', callback: Callback<int>)}事件。
     * 
     * 当应用需要退出该模式下的Seek时，需要调用`seek(-1, SeekMode.SEEK_CONTINUOUS)`来结束该模式下的Seek。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    SEEK_CONTINUOUS = 3
  }

  /**
   * 表示视频播放的selectTrack模式枚举。
   * 
   * 可通过selectTrack方法作为参数传递下去，当前DASH/HLS协议视频轨均支持该扩展参数（从API版本26.0.0开始HLS协议视频轨支持该扩展参数）。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum SwitchMode {
    /**
     * 表示切换后视频平滑播放，该模式切换存在延迟，不会立即生效。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SMOOTH = 0,
    /**
     * 表示切换后从当前分片开始位置播放，该模式立即切换，会有重复播放。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    SEGMENT = 1,
    /**
     * 表示从距离当前播放时间点最近的帧开始播放，该模式立即切换，切换后会卡住3到5s，然后恢复播放。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    CLOSEST = 2,
  }

  /**
   * Codec MIME类型枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.Core
   * @crossplatform [since 12]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum CodecMimeType {
    /**
     * 表示视频/h263类型。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    VIDEO_H263 = 'video/h263',
    /**
     * 表示视频/avc类型。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 22]
     * @since 8 dynamic
     * @since 23 static
     */
    VIDEO_AVC = 'video/avc',
    /**
     * 表示视频/mpeg2类型。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    VIDEO_MPEG2 = 'video/mpeg2',
    /**
     * 表示视频/mpeg4类型。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    VIDEO_MPEG4 = 'video/mp4v-es',

    /**
     * 表示视频/vp8类型。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    VIDEO_VP8 = 'video/x-vnd.on2.vp8',

    /**
     * 表示音频/mp4a-latm类型。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    AUDIO_AAC = 'audio/mp4a-latm',

    /**
     * 表示音频/vorbis类型。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    AUDIO_VORBIS = 'audio/vorbis',

    /**
     * 表示音频/flac类型。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    AUDIO_FLAC = 'audio/flac',

    /**
     * 表示视频/H265类型。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @crossplatform [since 12]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    VIDEO_HEVC = 'video/hevc',
    /**
     * 表示音频/mpeg类型。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_MP3 = 'audio/mpeg',

    /**
     * 表示音频/G711-mulaw类型。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 12 dynamic
     * @since 23 static
     */
    AUDIO_G711MU = 'audio/g711mu',

    /**
     * 表示音频/amr-nb类型。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 18 dynamic
     * @since 23 static
     */
    AUDIO_AMR_NB = 'audio/3gpp',

    /**
     * 表示音频/amr-wb类型。
     *
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 18 dynamic
     * @since 23 static
     */
    AUDIO_AMR_WB = 'audio/amr-wb'
  }

  /**
   * 进行屏幕录制时的编码、封装格式参数的枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @since 12 dynamic
   * @since 23 static
   */
  enum AVScreenCaptureRecordPreset {
    /**
     * 使用视频H264编码，音频AAC编码，MP4封装格式。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREEN_RECORD_PRESET_H264_AAC_MP4 = 0,
    /**
     * 使用视频H265编码，音频AAC编码，MP4封装格式。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREEN_RECORD_PRESET_H265_AAC_MP4 = 1,
  }

  /**
   * 进行屏幕录制时视频填充模式的枚举。
   *
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @since 18 dynamic
   * @since 23 static
   */
  enum AVScreenCaptureFillMode {
    /**
     * 保持与原始图像相同的宽高比例，即与物理屏幕宽高比例一致。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 18 dynamic
     * @since 23 static
     */
    PRESERVE_ASPECT_RATIO = 0,
    /**
     * 进行图像拉伸填充，适配设置的宽度和高度。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 18 dynamic
     * @since 23 static
     */
    SCALE_TO_FILL = 1,
  }

  /**
   * 屏幕录制的状态回调。
   *
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @since 12 dynamic
   * @since 23 static
   */
  enum AVScreenCaptureStateCode {
    /**
     * 录屏已开始。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_STARTED = 0,
    /**
     * 录屏被取消。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_CANCELED = 1,
    /**
     * 录屏被用户手动停止。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_STOPPED_BY_USER = 2,
    /**
     * 录屏被其他录屏打断。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_INTERRUPTED_BY_OTHER = 3,
    /**
     * 录屏被来电打断。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_STOPPED_BY_CALL = 4,
    /**
     * 录屏无法使用麦克风收音。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_MIC_UNAVAILABLE = 5,
    /**
     * 麦克风被用户关闭。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_MIC_MUTED_BY_USER = 6,
    /**
     * 麦克风被用户打开。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_MIC_UNMUTED_BY_USER = 7,
    /**
     * 录屏进入隐私页面。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_ENTER_PRIVATE_SCENE = 8,
    /**
     * 录屏退出隐私页面。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_EXIT_PRIVATE_SCENE = 9,
    /**
     * 系统用户切换，录屏中断。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    SCREENCAPTURE_STATE_STOPPED_BY_USER_SWITCHES = 10,
    /**
     * 录屏已被用户暂停。
     * 
     * 26.0.0
     * 
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCREENCAPTURE_STATE_PAUSED_BY_USER = 11,
    /**
     * 录屏已被用户恢复。
     * 
     * 26.0.0
     * 
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCREENCAPTURE_STATE_RESUMED_BY_USER = 12,
    /**
     * 录屏已被应用程序暂停。
     * 
     * 26.0.0
     * 
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCREENCAPTURE_STATE_PAUSED_BY_APP = 13,
    /**
     * 录屏已被应用程序恢复。
     * 
     * 26.0.0
     * 
     * **模型约束：** 此接口仅可在Stage模型下使用。
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
  * 表示屏幕录制Picker模式的枚举。
  *
  * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
  * @since 22 dynamic
  * @since 23 static
  */
	enum PickerMode {
    /**
     * 仅显示窗口列表。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 22 dynamic
     * @since 23 static
     */
    WINDOW_ONLY = 0,

    /**
     * 仅显示屏幕列表。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 22 dynamic
     * @since 23 static
     */
    SCREEN_ONLY = 1,

    /**
     * 同时显示屏幕列表和窗口列表。
     *
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 22 dynamic
     * @since 23 static
     */
    SCREEN_AND_WINDOW = 2
  }

  /**
   * 屏幕录制管理类，用于进行屏幕录制。在调用AVScreenCaptureRecorder的方法前，需要先通过
   * [createAVScreenCaptureRecorder()]{@link @ohos.multimedia.media:media.createAVScreenCaptureRecorder()}创建一个
   * AVScreenCaptureRecorder实例。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 12开始支持。
   *
   * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
   * @since 12 dynamic
   * @since 23 static
   */
  interface AVScreenCaptureRecorder {
    /**
     * 进行录屏初始化，设置录屏参数。使用Promise异步回调。
     *
     * @param { AVScreenCaptureRecordConfig } config - 配置屏幕录制的相关参数。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 开始录屏，在使用前需要先调用[init]{@link @ohos.multimedia.media:media.AVScreenCaptureRecorder.init}接口。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    startRecording(): Promise<void>;

    /**
     * 结束录屏。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    stopRecording(): Promise<void>;

    /**
     * 暂停录屏。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operation not be permitted. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    pauseRecording(): Promise<void>;

    /**
     * 恢复录屏。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operation not be permitted. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    resumeRecording(): Promise<void>;

    /**
     * 录屏时，应用可对本应用的隐私窗口做安全豁免。使用Promise异步回调。
     * 
     * 如录屏时，用户在本应用进行输入密码等操作，应用不会进行黑屏处理。
     *
     * @param { Array<int> } windowIDs - 需要豁免隐私的窗口列表，包括主窗口id和子窗口id，窗口属性获取方法可以参考
     *     [getWindowProperties](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getwindowproperties9)。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    skipPrivacyMode(windowIDs: Array<int>): Promise<void>;

    /**
     * 设置Picker显示模式，在下一次显示Picker时生效。使用Promise异步回调。
     *
     * @param { PickerMode } pickerMode - 选择Picker模式。<br>定义了在Picker中显示的内容类型：<br>- SCREEN_ONLY：仅显示屏幕列表。<br>- WINDOW_ONLY：
     *     仅显示窗口列表。<br>- SCREEN_AND_WINDOW：同时显示屏幕列表和窗口列表（默认值）。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 22 dynamic
     * @since 23 static
     */
    setPickerMode(pickerMode: PickerMode): Promise<void>;

    /**
     * 设置在Picker中隐藏的窗口列表，在下一次显示Picker时生效。使用Promise异步回调。
     *
     * @param { Array<int> } excludedWindows - 需要在Picker中隐藏的窗口列表，窗口属性获取方法可以参考
     *     [getWindowProperties](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getwindowproperties9)。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 22 dynamic
     * @since 23 static
     */
    excludePickerWindows(excludedWindows: Array<int>): Promise<void>;

    /**
     * 录屏开始后，调用该接口再次弹出Picker，可动态更新录制源（窗口、屏幕）。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 更新录制源过程中，原录制流程不中断。
     * >
     * > - 通过picker动态更新录制源后，按照新的录制源进行录制。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 22 dynamic
     * @since 23 static
     */
    presentPicker(): Promise<void>;

    /**
     * 设置麦克风开关。使用Promise异步回调。
     *
     * @param { boolean } enable - 麦克风开关控制，true代表麦克风打开，false代表麦克风关闭。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    setMicEnabled(enable: boolean): Promise<void>;

    /**
     * 释放录屏。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 5400103 - IO error. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * 订阅录屏状态切换的事件，当状态发生的时候，会通过订阅的回调通知用户。用户只能订阅一个状态切换的回调方法，重复订阅时，以最后一次订阅的回调接口为准。
     *
     * @param { 'stateChange' } type - 状态切换事件回调类型，支持的事件：'stateChange'。
     * @param { Callback<AVScreenCaptureStateCode> } callback - 状态切换事件回调方法，
     *     [AVScreenCaptureStateCode]{@link @ohos.multimedia.media:media.AVScreenCaptureStateCode}表示切换到的状态。
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     */
    on(type: 'stateChange', callback: Callback<AVScreenCaptureStateCode>): void;

    /**
     * 订阅AVScreenCaptureRecorder的错误事件，用户可以根据应用自身逻辑对错误事件进行处理。用户只能订阅一个错误事件的回调方法，重复订阅时，以最后一次订阅的回调接口为准。
     *
     * @param { 'error' } type - 错误事件回调类型，支持的事件：'error'。
     * @param { ErrorCallback } callback - 录屏错误事件回调方法。
     * @throws { BusinessError } 201 - permission denied.
     * @throws { BusinessError } 5400103 - IO error. Return by ErrorCallback.
     * @throws { BusinessError } 5400105 - Service died. Return by ErrorCallback.
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * 取消订阅状态切换回调事件。用户可以指定填入状态切换的回调方法来取消订阅。
     *
     * @param { 'stateChange' } type - 状态切换事件回调类型，支持的事件：'stateChange'。
     * @param { Callback<AVScreenCaptureStateCode> } callback - 状态切换事件回调方法，
     *     [AVScreenCaptureStateCode]{@link @ohos.multimedia.media:media.AVScreenCaptureStateCode}表示切换到的状态，不填此参数则会取消最后一次
     *     订阅事件。
     * @syscap SystemCapability.Multimedia.Media.AVScreenCapture
     * @since 12 dynamic
     */
    off(type: 'stateChange', callback?: Callback<AVScreenCaptureStateCode>): void;

    /**
     * 取消订阅错误回调事件。用户可以指定填入错误回调方法来取消订阅。
     *
     * @param { 'error' } type - 状态切换事件回调类型，支持的事件：'error'。
     * @param { ErrorCallback } callback - 录屏错误事件回调方法，不填此参数则会取消最后一次订阅事件。
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
   * 视频转码管理类，用于视频转码。在调用AVTranscoder的方法前，需要先通过
   * [createAVTranscoder()]{@link @ohos.multimedia.media:media.createAVTranscoder()}构建一个AVTranscoder实例。
   * 
   * 视频转码demo可参考：[视频转码开发指导](docroot://media/media/using-avtranscoder-for-transcodering.md)
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 12开始支持。
   *
   * @syscap SystemCapability.Multimedia.Media.AVTranscoder
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface AVTranscoder {
    /**
     * 源媒体文件描述，通过该属性设置数据源。
     * 
     * **使用示例**：
     * 
     * 假设一个连续存储的媒体文件，地址偏移：0，字节长度：100。其文件描述为AVFileDescriptor{ fd = 资源句柄; offset = 0; length = 100; }。
     * 
     * **说明：** 
     * 
     * - 将资源句柄（fd）传递给AVTranscoder实例之后，请不要通过该资源句柄做其他读写操作，包括但不限于将同一个资源句柄传递给多个AVPlayer/AVMetadataExtractor/AVImageGenerator
     * /AVTranscoder。
     * - 同一时间通过同一个资源句柄读写文件时存在竞争关系，将导致视频转码数据获取异常。
     *
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fdSrc: AVFileDescriptor;

    /**
     * 目标媒体文件描述，通过该属性设置数据输出。在创建AVTranscoder实例后，必须设置fdSrc和fdDst属性。
     * 
     * **说明：** 
     * 
     * - 将资源句柄（fd）传递给AVTranscoder实例之后，请不要通过该资源句柄做其他读写操作，包括但不限于将同一个资源句柄传递给多个AVPlayer/AVMetadataExtractor/AVImageGenerator
     * /AVTranscoder。
     * - 同一时间通过同一个资源句柄读写文件时存在竞争关系，将导致视频转码数据获取异常。
     *
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    fdDst: int;

    /**
     * 进行视频转码的参数设置。使用Promise异步回调。
     *
     * @param {  AVTranscoderConfig  } config - 配置视频转码的相关参数。 <!--RP1--><!--RP1End-->
     * @returns {  Promise<void>  } Promise对象，无返回结果。
     * @throws {  BusinessError  } 401 - The parameter check failed. Return by promise. 
     * @throws {  BusinessError  } 5400102 - Operation not allowed. Return by promise. 
     * @throws {  BusinessError  } 5400103 - IO error. Return by promise. 
     * @throws {  BusinessError  } 5400105 - Service died. Return by promise. 
     * @throws {  BusinessError  } 5400106 - Unsupported format. Returned by promise. 
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    prepare(config: AVTranscoderConfig): Promise<void>;

    /**
     * 开始视频转码。使用Promise异步回调。
     * 
     * 需要[prepare()]{@link media.AVTranscoder.prepare}事件成功触发后，才能调用start方法。
     *
     * @returns {  Promise<void>  } Promise对象，无返回结果。
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
     * 暂停视频转码。使用Promise异步回调。
     * 
     * 需要[start()]{@link media.AVTranscoder.start}事件成功触发后，才能调用pause方法，可以通过调用[resume()]{@link media.AVTranscoder.resume}接
     * 口来恢复转码。
     *
     * @returns {  Promise<void>  } Promise对象，无返回结果。
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
     * 恢复视频转码。使用Promise异步回调。
     * 
     * 需要在[pause()]{@link media.AVTranscoder.pause}事件成功触发后，才能调用resume方法。
     *
     * @returns {  Promise<void>  } Promise对象，无返回结果。
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
     * 取消视频转码。使用Promise异步回调。
     * 
     * 需要在[prepare()]{@link media.AVTranscoder.prepare}、[start()]{@link media.AVTranscoder.start}、
     * [pause()]{@link media.AVTranscoder.pause}或[resume()]{@link media.AVTranscoder.resume}事件成功触发后，才能调用cancel方法。
     *
     * @returns {  Promise<void>  } Promise对象，无返回结果。
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
     * 释放视频转码资源。使用Promise异步回调。
     * 
     * 释放视频转码资源之后，该AVTranscoder实例不能再进行任何操作。
     *
     * @returns {  Promise<void>  } Promise对象，无返回结果。
     * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
     * @throws { BusinessError } 5400105 - Service died. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

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

    /**
     * 注册转码完成事件，并通过注册的回调方法通知开发者。开发者只能注册一个进度更新事件的回调方法，当开发者重复注册时，以最后一次注册的回调接口为准。使用callback异步回调。
     * 
     * 当AVTranscoder上报complete事件时，当前转码操作已完成，开发者需要通过[release()]{@link media.AVTranscoder.release}退出转码操作。
     *
     * @param { 'complete' } type - 完成事件回调类型，支持的事件：'complete'，在转码过程中系统会自动触发此事件。
     * @param { Callback<void> } callback - 回调函数，返回完成事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    on(type:'complete', callback: Callback<void>):void;

    /**
     * 注册AVTranscoder的错误事件，该事件仅用于错误提示。如果AVTranscoder上报error事件，开发者需要通过[release()]{@link media.AVTranscoder.release}退出转码操作
     * 。使用callback异步回调。
     * 
     * 开发者只能订阅一个错误事件的回调方法，当开发者重复订阅时，以最后一次订阅的回调接口为准。
     *
     * @param { 'error' } type - 转码错误事件回调类型'error'。 <br>- 'error'：录制过程中发生错误，触发该事件。
     * @param { ErrorCallback } callback - 转码错误事件回调方法。
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
     * 注册转码进度更新事件，并通过注册的回调方法通知开发者。开发者只能注册一个进度更新事件的回调方法，当开发者重复注册时，以最后一次注册的回调接口为准。使用callback异步回调。
     *
     * @param { 'progressUpdate' } type - 进度更新事件回调类型，支持的事件：'progressUpdate'，在转码过程中系统会自动触发此事件。
     * @param { Callback<int> } callback - 回调函数，返回进度更新事件，函数中的参数number，表示当前转码进度。
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    on(type:'progressUpdate', callback: Callback<int>):void;

    /**
     * 取消注册转码完成事件。
     *
     * @param { 'complete' } type - 转码完成事件回调类型，支持的事件：'complete'。
     * @param { Callback<void> } callback - 完成事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    off(type:'complete', callback?: Callback<void>):void;

    /**
     * 取消注册转码错误事件，取消后不再接收到AVTranscoder的错误事件。
     *
     * @param { 'error' } type - 转码错误事件回调类型'error'。 <br>- 'error'：转码过程中发生错误，触发该事件。
     * @param { ErrorCallback } callback - 错误事件回调方法。
     * @syscap SystemCapability.Multimedia.Media.AVTranscoder
     * @atomicservice [since 22]
     * @since 12 dynamic
     */
    off(type:'error', callback?: ErrorCallback):void;

    /**
     * 取消注册转码进度更新事件。
     *
     * @param { 'progressUpdate' } type - 进度更新事件回调类型，支持的事件：'progressUpdate'。
     * @param { Callback<int> } callback - 已注册的进度更新事件回调。由于当前回调注册时，仅会保留最后一次注册的回调，建议此参数缺省。
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