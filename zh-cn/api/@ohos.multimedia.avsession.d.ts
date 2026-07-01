/*
* Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * @kit AVSessionKit
 */

import type { ErrorCallback, AsyncCallback, Callback } from './@ohos.base';
import { WantAgent } from './@ohos.app.ability.wantAgent';
import { KeyEvent } from './@ohos.multimodalInput.keyEvent';
import { ElementName } from './bundleManager/ElementName';
import image from './@ohos.multimedia.image';
import audio from './@ohos.multimedia.audio';
import { AVCastPickerState, AVCastPickerColorMode, AVCastPickerStyle } from './@ohos.multimedia.avCastPickerParam';
import type media from './@ohos.multimedia.media';
import type Context from './application/BaseContext';
import type hdrCapability from './@ohos.graphics.hdrCapability';

/**
 *
 * @syscap SystemCapability.Multimedia.AVSession.Core
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace avSession {
  /**
   *
   * @param { Context } context - The context of application
   * @param { string } tag - A user-defined name for this session
   * @param { AVSessionType } type - The type of session {@link AVSessionType}
   * @param { AsyncCallback<AVSession> } callback - async callback for AVSession.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Parameter verification failed.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function createAVSession(context: Context, tag: string, type: AVSessionType, callback: AsyncCallback<AVSession>): void;

  /**
   *
   * @param { Context } context - The context of application
   * @param { string } tag - A user-defined name for this session
   * @param { AVSessionType } type - The type of session {@link AVSessionType}
   * @returns { Promise<AVSession> } Promise for AVSession
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Parameter verification failed.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function createAVSession(context: Context, tag: string, type: AVSessionType): Promise<AVSession>;

  /**
   * Get an AVSession instance if already created.
   *
   * @param { Context } context - The context of application
   * @returns { Promise<AVSession> } Promise for AVSession
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600102 - The session does not exist.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 24 static
   */
  function getAVSession(context: Context): Promise<AVSession>;

  /**
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { AsyncCallback<Array<Readonly<AVSessionDescriptor>>> } callback - async callback for an array of AVSessionDescriptors.
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllSessionDescriptors(callback: AsyncCallback<Array<Readonly<AVSessionDescriptor>>>): void;

  /**
   * Get all avsession descriptors of the system
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES [since 9 - 22]
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES or ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC [since 23]
   * @returns { Promise<Array<Readonly<AVSessionDescriptor>>> } Promise for an array of AVSessionDescriptors
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App. [since 9 - 22]
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi [since 9 - 22]
   * @publicapi [since 23]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllSessionDescriptors(): Promise<Array<Readonly<AVSessionDescriptor>>>;

  /**
   * 获取所有会话描述符
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { SessionCategory } category - Specifies the category of AVSession.
   * @returns { Promise<Array<Readonly<AVSessionDescriptor>>> } 返回对应的会话描述符
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 22 dynamic
   * @since 24 static
   */
  function getSessionDescriptors(category: SessionCategory): Promise<Array<Readonly<AVSessionDescriptor>>>;

  /**
   * 获取根据userid查询对应音区的会话
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { int } userId - 用户userid
   * @returns { Promise<Array<Readonly<AVSessionDescriptor>>> } 返回对应音区的会话列表
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getSessionDescriptorsForAudioZone(userId: int): Promise<Array<Readonly<AVSessionDescriptor>>>;

  /**
   * Get history avsession records. These sessions have been destroyed.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { int } maxSize - Specifies the maximum size of the returned value array.
   * @param { AsyncCallback<Array<Readonly<AVSessionDescriptor>>> } callback - async callback for an array of AVSessionDescriptors.
   * If provided '0' or not provided, the maximum value is determined by the system.
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App
   * @throws { BusinessError } 401 - parameter check failed. Possible causes: 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi Hide this for inner system use
   * @since 10 dynamic
   * @since 23 static
   */
  function getHistoricalSessionDescriptors(maxSize: int, callback: AsyncCallback<Array<Readonly<AVSessionDescriptor>>>): void;

  /**
   * Get history avsession records. These sessions have been destroyed.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { int } maxSize - Specifies the maximum size of the returned value array.
   * If provided '0' or not provided, the maximum value is determined by the system.
   * @returns { Promise<Array<Readonly<AVSessionDescriptor>>> } Promise for an array of AVSessionDescriptors
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi Hide this for inner system use
   * @since 10 dynamic
   * @since 23 static
   */
  function getHistoricalSessionDescriptors(maxSize?: int): Promise<Array<Readonly<AVSessionDescriptor>>>;

  /**
   * Get history play list information records.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { int } maxSize - Specifies the maximum size of the returned value array.
   * @param { int } maxAppSize - Specifies the maximum app size of the returned value array.
   * @param { AsyncCallback<Array<Readonly<AVQueueInfo>>> } callback - async callback for an array of AVQueueInfo.
   * If provided '0' or not provided, the maximum value is determined by the system.
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi Hide this for inner system use
   * @since 11 dynamic
   * @since 23 static
   */
  function getHistoricalAVQueueInfos(maxSize: int, maxAppSize: int, callback: AsyncCallback<Array<Readonly<AVQueueInfo>>>): void;

  /**
   * Get history play list information records.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { int } maxSize - Specifies the maximum size of the returned value array.
   * @param { int } maxAppSize - Specifies the maximum app size of the returned value array.
   * @returns { Promise<Array<Readonly<AVQueueInfo>>> } Promise for an array of AVQueueInfo
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi Hide this for inner system use
   * @since 11 dynamic
   * @since 23 static
   */
  function getHistoricalAVQueueInfos(maxSize: int, maxAppSize: int): Promise<Array<Readonly<AVQueueInfo>>>;

  /**
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { string } sessionId - Specifies the sessionId to create the controller.
   * @param { AsyncCallback<AVSessionController> } callback - async callback for AVSessionController.
   * If provided 'default', the system will create a default controller, Used to control the system default session
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Parameter verification failed.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600102 - The session does not exist.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function createController(sessionId: string, callback: AsyncCallback<AVSessionController>): void;

  /**
   * Create an avsession controller
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES [since 9 - 22]
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES or ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC [since 23]
   * @param { string } sessionId - Specifies the sessionId to create the controller.
   *     If provided 'default', the system will create a default controller, Used to control the system default session
   * @returns { Promise<AVSessionController> } Promise for AVSessionController
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Not System App. [since 9 - 22]
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600102 - The session does not exist.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi [since 9 - 22]
   * @publicapi [since 23]
   * @since 9 dynamic
   * @since 23 static
   */
  function createController(sessionId: string): Promise<AVSessionController>;

  /**
   * Cast Audio to the remote devices or cast back local device
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { SessionToken | 'all' } session - Specifies the sessionId which to send to remote.
   * @param { Array<audio.AudioDeviceDescriptor> } audioDevices - Specifies the audio devices to cast.
   * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
   * 'all' means cast all the media audio of this device to remote.
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Parameter verification failed.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600102 - The session does not exist.
   * @throws { BusinessError } 6600104 - The remote session connection failed.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9 dynamic
   */
  function castAudio(session: SessionToken | 'all', audioDevices: Array<audio.AudioDeviceDescriptor>, callback: AsyncCallback<void>): void;

  /**
   * Cast Audio to the remote devices or cast back local device
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { SessionToken } session - Specifies the sessionId which to send to remote.
   * @param { Array<audio.AudioDeviceDescriptor> } audioDevices - Specifies the audio devices to cast.
   * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600102 - The session does not exist.
   * @throws { BusinessError } 6600104 - The remote session connection failed.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 23 static
   */
  function castAudioSession(session: SessionToken, audioDevices: Array<audio.AudioDeviceDescriptor>, callback: AsyncCallback<void>): void;

  /**
   * Cast Audio to the remote devices or cast back local device
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { SessionToken | 'all' } session - Specifies the sessionId which to send to remote.
   * @param { Array<audio.AudioDeviceDescriptor> } audioDevices - Specifies the audio devices to cast.
   * @returns { Promise<void> } void promise when executed successfully
   * 'all' means cast all the media audio of this device to remote.
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Parameter verification failed.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600102 - The session does not exist.
   * @throws { BusinessError } 6600104 - The remote session  connection failed.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9 dynamic
   */
  function castAudio(session: SessionToken | 'all', audioDevices: Array<audio.AudioDeviceDescriptor>): Promise<void>;

  /**
   * Cast Audio to the remote devices or cast back local device
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { SessionToken } session - Specifies the sessionId which to send to remote.
   * @param { Array<audio.AudioDeviceDescriptor> } audioDevices - Specifies the audio devices to cast.
   * @returns { Promise<void> } void promise when executed successfully
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600102 - The session does not exist.
   * @throws { BusinessError } 6600104 - The remote session  connection failed.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 23 static
   */
  function castAudioSession(session: SessionToken, audioDevices: Array<audio.AudioDeviceDescriptor>): Promise<void>;

  /**
   * Cast all the media audio to the remote devices or cast back local device
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { Array<audio.AudioDeviceDescriptor> } audioDevices - Specifies the audio devices to cast.
   * @returns { Promise<void> } void promise when executed successfully
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600102 - The session does not exist.
   * @throws { BusinessError } 6600104 - The remote session  connection failed.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 23 static
   */
  function castAudioSessionAll(audioDevices: Array<audio.AudioDeviceDescriptor>): Promise<void>;

  /**
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { string } bundleName - Specifies the bundleName which to be started.
   * @param { string } assetId - Specifies the assetId to be started.
   * @returns { Promise<void> }    * @throws { BusinessError } 201
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function startAVPlayback(bundleName: string, assetId: string): Promise<void>;

  /**
   * 携带启动参数的冷启动应用播放接口
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { string } bundleName - Specifies the bundleName which to be started.
   * @param { string } assetId - Specifies the assetId to be started.
   * @param { CommandInfo } info - Specifies the specified command information.
   * @returns { Promise<void> } void promise when executed successfully
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 22 dynamic
   * @since 24 static
   */
  function startAVPlayback(bundleName: string, assetId: string, info: CommandInfo): Promise<void>;

  /**
   * Get distributed avsession controller
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { DistributedSessionType } distributedSessionType - Specifies the distributed session type.
   * @returns { Promise<Array<AVSessionController>> } Promise for AVSessionController.
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600109 - The remote connection is not established.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function getDistributedSessionController(distributedSessionType: DistributedSessionType): Promise<Array<AVSessionController>>;

  /**
   * 是否支持桌面歌词
   *
   *
   * @returns { Promise<boolean> } - 返回是否支持桌面歌词
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isDesktopLyricSupported(): Promise<boolean>;

  /**
   * 桌面歌词状态
   * @typedef DesktopLyricState
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface DesktopLyricState {
    /**
     * 桌面歌词组件状态
     * @type { boolean } Boolean type. The value true means that desktop lyric is locked.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isLocked: boolean;
  }

  /**
   * 会话类型
   * @enum { int }
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 22 dynamic
   * @since 24 static
   */
  enum SessionCategory {
    /**
     * 活动的会话，可以在系统控制入口看到的会话
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 22 dynamic
     * @since 24 static
     */
    CATEGORY_ACTIVE = 1,

    /**
     * 低质量接入会话类型
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 22 dynamic
     * @since 24 static
     */
    CATEGORY_NOT_ACTIVE = 2,

    /**
     * 所有会话类型
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 22 dynamic
     * @since 24 static
     */
    CATEGORY_ALL = 3,

    /**
     * 会话类别是HiPlay
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    CATEGORY_HIPLAY = 4
  }

  /**
   *
   * @typedef SessionToken
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface SessionToken {
    /**
     *
     * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
     * @type { string }
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    sessionId: string;

    /**
     * Process id of session
     * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
     * @type { ?long }
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pid?: long;

    /**
     * User id
     * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
     * @type { ?long }
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    uid?: long;
  }

  /**
   * Register session create callback
   * @param { 'sessionCreate' } type - Registration Type, 'sessionCreate'
   * @param { function } callback - Used to handle ('sessionCreate' command)
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9 dynamic
   */
  function on(type: 'sessionCreate', callback: (session: AVSessionDescriptor) => void): void;

  /**
   * Register session create callback
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC
   * @param { Callback<AVSessionDescriptor> } callback - 会话创建回调函数
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @since 23 dynamic&static
   */
  function onSessionCreate(callback: Callback<AVSessionDescriptor>): void;

  /**
   * Register session destroy callback
   * @param { 'sessionDestroy' } type - Registration Type, 'sessionDestroy'
   * @param { function } callback - Used to handle ('sessionDestroy' command)
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9 dynamic
   */
  function on(type: 'sessionDestroy', callback: (session: AVSessionDescriptor) => void): void;

  /**
   * Register session destroy callback
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC
   * @param { Callback<AVSessionDescriptor> } callback - 会话销毁回调函数
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @since 23 dynamic&static
   */
  function onSessionDestroy(callback: Callback<AVSessionDescriptor>): void;

  /**
   * Register top session changed callback
   * @param { 'topSessionChange' } type - Registration Type, top priority session change, 'topSessionChange'
   * @param { function } callback - Used to handle ('topSessionChange' command)
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9 dynamic
   */
  function on(type: 'topSessionChange', callback: (session: AVSessionDescriptor) => void): void;

  /**
   * Register top session changed callback
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC
   * @param { Callback<AVSessionDescriptor> } callback - Top会话变化回调函数
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @since 23 dynamic&static
   */
  function onTopSessionChange(callback: Callback<AVSessionDescriptor>): void;

  /**
   * Unregister session create callback
   * @param { 'sessionCreate' } type - Registration Type, session creation, 'sessionCreate'
   * @param { function } callback - Used to unregister listener for ('sessionCreate') command
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9 dynamic
   */
  function off(type: 'sessionCreate', callback?: (session: AVSessionDescriptor) => void): void;

  /**
   * Unregister session create callback
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC
   * @param { Callback<AVSessionDescriptor> } [callback] - 会话创建回调函数
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @since 23 dynamic&static
   */
  function offSessionCreate(callback?: Callback<AVSessionDescriptor>): void;

  /**
   * Register active session changed callback.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { Callback<Array<AVSessionDescriptor>> } callback - Used to handle activeSessionChange event
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 23 dynamic&static
   */
  function onActiveSessionChanged(callback: Callback<Array<AVSessionDescriptor>>): void;

  /**
   * Unregister active session changed callback.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { Callback<Array<AVSessionDescriptor>> } [callback] - Used to handle activeSessionChange event
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 23 dynamic&static
   */
  function offActiveSessionChanged(callback?: Callback<Array<AVSessionDescriptor>>): void;

  /**
   * Unregister session destroy callback
   * @param { 'sessionDestroy' } type - Registration Type, session deletion, 'sessionDestroy'
   * @param { function } callback - Used to unregister listener for ('sessionDestroy') command
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9 dynamic
   */
  function off(type: 'sessionDestroy', callback?: (session: AVSessionDescriptor) => void): void;

  /**
   * Unregister session destroy callback
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC
   * @param { Callback<AVSessionDescriptor> } [callback] - 会话销毁回调函数
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @since 23 dynamic&static
   */
  function offSessionDestroy(callback?: Callback<AVSessionDescriptor>): void;

  /**
   * Unregister top session changed callback
   * @param { 'topSessionChange' } type - Registration Type, top priority session change, 'topSessionChange'
   * @param { function } callback - Used to unregister listener for ('topSessionChange') command
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9 dynamic
   */
  function off(type: 'topSessionChange', callback?: (session: AVSessionDescriptor) => void): void;

  /**
   * Unregister top session changed callback
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC
   * @param { Callback<AVSessionDescriptor> } [callback] - Top会话变化回调函数
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @since 23 dynamic&static
   */
  function offTopSessionChange(callback?: Callback<AVSessionDescriptor>): void;

  /**
   * Register Session service death callback, notifying the application to clean up resources.
   * @param { 'sessionServiceDie' } type - Registration Type, 'sessionServiceDie'
   * @param { function } callback - Used to handle ('sessionServiceDie') command.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9 dynamic
   */
  function on(type: 'sessionServiceDie', callback: () => void): void;

  /**
   * Register Session service death callback, notifying the application to clean up resources.
   * @param { NoParamCallback } callback - Used to handle ('sessionServiceDie') command.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 23 static
   */
  function onSessionServiceDie(callback: NoParamCallback): void;

  /**
   * Unregister Session service death callback, notifying the application to clean up resources.
   * @param { 'sessionServiceDie' } type - Registration Type, 'sessionServiceDie'
   * @param { function } callback -  Used to unregister listener for ('sessionServiceDie') command.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 9 dynamic
   */
  function off(type: 'sessionServiceDie', callback?: () => void): void;

  /**
   * Unregister Session service death callback, notifying the application to clean up resources.
   * @param { NoParamCallback } [callback] -  Used to unregister listener for ('sessionServiceDie') command.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 23 static
   */
  function offSessionServiceDie(callback?: NoParamCallback): void;

  /**
   * Register distributed   session changed callback
   * @param { 'distributedSessionChange' } type - Registration Type, distributed session change
   * @param { DistributedSessionType } distributedSessionType - Indicates the distributed session type
   * @param { Callback<Array<AVSessionController>> } callback - The callback will return remote changed AVSessionController.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 18 dynamic
   */
  function on(type: 'distributedSessionChange', distributedSessionType: DistributedSessionType, callback: Callback<Array<AVSessionController>>): void;

  /**
   * Register distributed   session changed callback
   * @param { DistributedSessionType } distributedSessionType - Indicates the distributed session type
   * @param { Callback<Array<AVSessionController>> } callback - The callback will return
   *     remote changed AVSessionController.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 23 static
   */
  function onDistributedSessionChange(distributedSessionType: DistributedSessionType, callback: Callback<Array<AVSessionController>>): void;

  /**
   * Unregister distributed session changed callback
   * @param { 'distributedSessionChange' } type - Registration Type, distributed session change
   * @param { DistributedSessionType } distributedSessionType - Indicates the distributed session type
   * @param { Callback<Array<AVSessionController>> } callback - The callback will return remote changed AVSessionController.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 18 dynamic
   */
  function off(type: 'distributedSessionChange', distributedSessionType: DistributedSessionType, callback?: Callback<Array<AVSessionController>>): void;

  /**
   * Unregister distributed session changed callback
   * @param { DistributedSessionType } distributedSessionType - Indicates the distributed session type
   * @param { Callback<Array<AVSessionController>> } [callback] - The callback will return
   *     remote changed AVSessionController.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 23 static
   */
  function offDistributedSessionChange(distributedSessionType: DistributedSessionType, callback?: Callback<Array<AVSessionController>>): void;

  /**
   * 注册音区会话变化回调
   *
   * @param { int } userId - 当前userId最终归属的音区
   * @param { Callback<AVSessionDescriptor> } callback - 返回的会话列表
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onAudioZoneSessionChange(userId: int, callback: Callback<AVSessionDescriptor>): void;

  /**
   * 取消注册音区对应的会话变化监听
   *
   * @param { int } userId - 用户id，归属某个音区
   *     <br>用户userId 所归属的音区
   * @param { Callback<AVSessionDescriptor> } [callback] - 返回对应音区的会话列表
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offAudioZoneSessionChange(userId: int, callback?: Callback<AVSessionDescriptor>): void;

  /**
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { KeyEvent } event - The key event to be sent
   * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Parameter verification failed.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600105 - Invalid session command.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function sendSystemAVKeyEvent(event: KeyEvent, callback: AsyncCallback<void>): void;

  /**
   * Send system media key event.The system automatically selects the recipient.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { KeyEvent } event - The key event to be sent
   * @returns { Promise<void> } void promise when executed successfully
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   *     2.Parameter verification failed.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600105 - Invalid session command.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function sendSystemAVKeyEvent(event: KeyEvent): Promise<void>;

  /**
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { AVControlCommand } command - The command to be sent. See {@link AVControlCommand}
   * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Parameter verification failed.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600105 - Invalid session command.
   * @throws { BusinessError } 6600107 - Too many commands or events.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function sendSystemControlCommand(command: AVControlCommand, callback: AsyncCallback<void>): void;

  /**
   * 监听系统通用事件命令回调
   *
   * @param { EventProcess } callback - 监听通用事件命令回调
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function onSystemCommonEvent(callback: EventProcess): void;

  /**
   * 取消注册通用事件回调监听
   *
   * @param { EventProcess } [callback] - 处理事件回调
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function offSystemCommonEvent(callback?: EventProcess): void;

  /**
   * 发送通用事件命令
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { string } command - 通用的控制命令
   * @param { ExtraInfo } args - 事件参数
   * @returns { Promise<string> } callback info for sync command
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600105 - Invalid session command.
   * @throws { BusinessError } 6600107 - Too many commands or events.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function sendSystemCommonCommand(command: string, args: ExtraInfo): Promise<string>;

  /**
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { AVControlCommand } command - The command to be sent. See {@link AVControlCommand}
   * @returns { Promise<void> }    * @throws { BusinessError } 201
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Parameter verification failed.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600105 - Invalid session command.
   * @throws { BusinessError } 6600107 - Too many commands or events.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function sendSystemControlCommand(command: AVControlCommand): Promise<void>;

  /**
   * Defines the basic callback.
   *
   * @typedef { function } NoParamCallback
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 22 dynamic
   * @since 23 static
   */
  type NoParamCallback = () => void;

  /**
   * Defines the callback type including two parameters.
   *
   * @param { T } data1
   * @param { G } data2
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 22 dynamic
   * @since 23 static
   */
  type TwoParamCallback<T, G> = (data1: T, data2: G) => void;

  /**
   * Define different protocol capability
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  enum ProtocolType {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_LOCAL = 0,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    TYPE_CAST_PLUS_MIRROR = 1,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_CAST_PLUS_STREAM = 2,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    TYPE_DLNA = 4,

    /**
     * This type indicates the device supports audio casting with high defination to get a better sound quality.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    TYPE_CAST_PLUS_AUDIO = 8,
  }

  /**
   * Define different distributed session type
   * @enum { int }
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  enum DistributedSessionType {
    /**
     * Remote session sensed from remote device.
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    TYPE_SESSION_REMOTE = 0,

    /**
     * Migrated session from remote device to this device.
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    TYPE_SESSION_MIGRATE_IN = 1,

    /**
     * Migrated session from this device to remote device.
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    TYPE_SESSION_MIGRATE_OUT = 2
  }

  /**
   *
   * @param { AsyncCallback<void> } callback a callback function
   * @throws { BusinessError } 202 - Not System App.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function startCastDeviceDiscovery(callback: AsyncCallback<void>): void;

  /**
   * Start device discovery.
   * @param { int } filter device filter when discovering, can be an union of {@link ProtocolType}
   * @param { AsyncCallback<void> } callback a callback function
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Parameter verification failed.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function startCastDeviceDiscovery(filter: int, callback: AsyncCallback<void>): void;

  /**
   * Start device discovery.
   *
   * @param { number } filter device filter when discovering, can be an union of {@link ProtocolType} [since 10 - 11]
   * @param { int } [filter] - device filter when discovering, can be an union of {@link ProtocolType} [since 12]
   * @param { Array<string> } [drmSchemes] - filter drm-enabled devices which are represented by uuid.
   *     It is effective when protocol type is TYPE_CAST_PLUS_STREAM. [since 12]
   * @returns { Promise<void> } Promise for the result
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 202 - Not System App. [since 12]
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function startCastDeviceDiscovery(filter?: int, drmSchemes?: Array<string>): Promise<void>;

  /**
   *
   * @param { AsyncCallback<void> } callback a callback function
   * @throws { BusinessError } 202 - Not System App.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function stopCastDeviceDiscovery(callback: AsyncCallback<void>): void;

  /**
   *
   * @returns { Promise<void> }    * @throws { BusinessError } 202
   * @throws { BusinessError } 202 - Not System App.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function stopCastDeviceDiscovery(): Promise<void>;

  /**
   *
   * @param { boolean } enable true: can be discoverable, false: cannot be discoverable.
   * @param { AsyncCallback<void> } callback a callback function
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Parameter verification failed.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function setDiscoverable(enable: boolean, callback: AsyncCallback<void>): void;

  /**
   *
   * @param { boolean } enable true: can be discoverable, false: cannot be discoverable.
   * @returns { Promise<void> }    * @throws { BusinessError } 202
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Parameter verification failed.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function setDiscoverable(enable: boolean): Promise<void>;

  /**
   * Register device discovery callback
   * @param { 'deviceAvailable' } type Registration Type
   * @param { function } callback Used to returns the device info
   * @throws { BusinessError } 202 - Not System App.
   * @throws {BusinessError} 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   */
  function on(type: 'deviceAvailable', callback: (device: OutputDeviceInfo) => void): void;

  /**
   * Register device discovery callback
   * @param { Callback<OutputDeviceInfo> } callback Used to returns the device info
   * @throws { BusinessError } 202 - Not System App.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 23 static
   */
  function onDeviceAvailable(callback: Callback<OutputDeviceInfo>): void;

  /**
   * Unregister device discovery callback
   * @param { 'deviceAvailable' } type Registration Type
   * @param { function } callback Used to returns the device info
   * @throws { BusinessError } 202 - Not System App.
   * @throws {BusinessError} 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   */
  function off(type: 'deviceAvailable', callback?: (device: OutputDeviceInfo) => void): void;

  /**
   * Unregister device discovery callback
   * @param { Callback<OutputDeviceInfo> } [callback] - Used to returns the device info
   * @throws { BusinessError } 202 - Not System App.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 23 static
   */
  function offDeviceAvailable(callback?: Callback<OutputDeviceInfo>): void;

  /**
   * Register device offline callback
   * @param { 'deviceOffline' } type - Registration Type
   * @param { function } callback - Used to returns the device info
   * @throws { BusinessError } 202 - Not System App.
   * @throws {BusinessError} 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 11 dynamic
   */
  function on(type: 'deviceOffline', callback: (deviceId: string) => void): void;

  /**
   * Register device offline callback
   * @param { Callback<string> } callback - Used to returns the device info
   * @throws { BusinessError } 202 - Not System App.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 23 static
   */
  function onDeviceOffline(callback: Callback<string>): void;

  /**
   * Unregister device offline callback
   * @param { 'deviceOffline' } type - Registration Type
   * @param { function } callback - Used to returns the device info
   * @throws { BusinessError } 202 - Not System App.
   * @throws {BusinessError} 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 11 dynamic
   */
  function off(type: 'deviceOffline', callback?: (deviceId: string) => void): void;

  /**
   * Unregister device offline callback
   * @param { Callback<string> } [callback] - Used to returns the device info
   * @throws { BusinessError } 202 - Not System App.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 23 static
   */
  function offDeviceOffline(callback?: Callback<string>): void;

  /**
   * Register a callback to retrieve an avsession cast controller.
   * This function can be used at both side to get the same controller to do the playback control.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { string } sessionId Specifies the sessionId to get controller.
   * @param { AsyncCallback<AVCastController> } callback - async callback for the AVCastController.
   * @throws {BusinessError} 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Parameter verification failed.
   * @throws {BusinessError} 6600101 - Session service exception
   * @throws {BusinessError} 6600102 - session does not exist
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   */
  function getAVCastController(sessionId: string, callback: AsyncCallback<AVCastController>): void;

  /**
   * Register a callback to retrieve an avsession cast controller.
   * This function can be used at both side to get the same controller to do the playback control.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { string } sessionId Specifies the sessionId to get controller.
   * @param { AsyncCallback<AVCastController | undefined> } callback - async callback for the AVCastController.
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception
   * @throws { BusinessError } 6600102 - session does not exist
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 23 static
   */
  function getAVCastController(sessionId: string, callback: AsyncCallback<AVCastController | undefined>): void;

  /**
   * Get the current session's remote controller client.
   * If the avsession is not under casting state, the controller will return null.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { string } sessionId Specifies the sessionId to get controller.
   * @returns { Promise<AVCastController> } Promise for the AVCastController
   * @throws {BusinessError} 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Parameter verification failed.
   * @throws {BusinessError} 6600101 - server exception
   * @throws {BusinessError} 6600102 - session does not exist
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   */
  function getAVCastController(sessionId: string): Promise<AVCastController>;

  /**
   * Get the current session's remote controller client.
   * If the avsession is not under casting state, the controller will return undefined.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { string } sessionId Specifies the sessionId to get controller.
   * @returns { Promise<AVCastController | undefined> } Promise for the AVCastController
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - server exception
   * @throws { BusinessError } 6600102 - session does not exist
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 23 static
   */
  function getAVCastController(sessionId: string): Promise<AVCastController | undefined>;

  /**
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { SessionToken } session Specifies the sessionId which is to be casted.
   * @param { OutputDeviceInfo } device Specifies the device to cast.
   * @param { AsyncCallback<void> } callback A callback instance used to return when start casting.
   * @throws {BusinessError} 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws {BusinessError} 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 6600101 - Session service exception
   * @throws {BusinessError} 6600108 - Device connecting failed
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function startCasting(session: SessionToken, device: OutputDeviceInfo, callback: AsyncCallback<void>): void;

  /**
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { SessionToken } session Specifies the sessionId which is to be casted.
   * @param { OutputDeviceInfo } device Specifies the device to cast.
   * @returns { Promise<void> }    * @throws { BusinessError } 201
   * @throws {BusinessError} 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws {BusinessError} 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws {BusinessError} 6600101 - Session service exception
   * @throws {BusinessError} 6600108 - Device connecting failed
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function startCasting(session: SessionToken, device: OutputDeviceInfo): Promise<void>;

  /**
   *
   * @param { SessionToken } session Specifies the sessionId which is to be stopped.
   * @param { AsyncCallback<void> } callback A callback instance used to return when cast stopped completed.
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 6600109 - The remote connection is not established
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function stopCasting(session: SessionToken, callback: AsyncCallback<void>): void;

  /**
   *
   * @param { SessionToken } session Specifies the sessionId which is to be stopped.
   * @returns { Promise<void> }    * @throws { BusinessError } 202
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 6600109 - The remote connection is not established
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function stopCasting(session: SessionToken): Promise<void>;

  /**
   * Begin to write device logs into a file descriptor for the purpose of problem locating.
   * If the logs exceed max file size, no logs will be written and DEVICE_LOG_FULL event will be omitted.
   * @param { string } url - The file descriptor to be written.
   * @param { int } maxSize - The max size to be written in kilobyte.
   * if not set, then written process will exit when there is no space to write.
   * @returns { Promise<void> } Promise for the result
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter check failed. 1. Mandatory parameters are left unspecified.
   * 2. Incorrect parameter types.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600102 - The session does not exist.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  function startDeviceLogging(url: string, maxSize?: int): Promise<void>;

  /**
   * Stop the current device written even the discovery is ongoing.
   * @returns { Promise<void> } Promise for the result
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600102 - The session does not exist.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  function stopDeviceLogging(): Promise<void>;

  /**
   * Register log event callback.
   * @param { 'deviceLogEvent' } type - Command to register 'deviceLogEvent'.
   * @param { Callback<DeviceLogEventCode> } callback - Used to handle ('deviceLogEvent') command
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter check failed. 1. Mandatory parameters are left unspecified.
   * 2. Incorrect parameter types.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600102 - The session does not exist.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 13 dynamic
   */
  function on(type: 'deviceLogEvent', callback: Callback<DeviceLogEventCode>): void;

  /**
   * Register log event callback.
   * @param { Callback<DeviceLogEventCode> } callback - Used to handle ('deviceLogEvent') command
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600102 - The session does not exist.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 23 static
   */
  function onDeviceLogEvent(callback: Callback<DeviceLogEventCode>): void;

  /**
   * UnRegister log event callback.
   * @param { 'deviceLogEvent' } type - Command to register 'deviceLogEvent'.
   * @param { Callback<DeviceLogEventCode> } callback - Used to handle ('deviceLogEvent') command
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 401 - Parameter check failed. 1. Mandatory parameters are left unspecified.
   * 2. Incorrect parameter types.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600102 - The session does not exist.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 13 dynamic
   */
  function off(type: 'deviceLogEvent', callback?: Callback<DeviceLogEventCode>): void;

  /**
   * UnRegister log event callback.
   * @param { Callback<DeviceLogEventCode> } [callback] - Used to handle ('deviceLogEvent') command
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600102 - The session does not exist.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 23 static
   */
  function offDeviceLogEvent(callback?: Callback<DeviceLogEventCode>): void;

  /**
   * Enumerates device log event code.
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum DeviceLogEventCode {
    /**
     * Log is full.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    DEVICE_LOG_FULL = 1,

    /**
     * Log is written with exception, such as the fd cannot be written and so on.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    DEVICE_LOG_EXCEPTION = 2
  }

  /**
   * Device state used to describe states including discovery, authentication and other scenes.
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface DeviceState {
    /**
     * 设备唯一描述符
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly deviceId: string;

    /**
     * Device connection status.
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly deviceState: int;

    /**
     * Reason for connection failure, for example, user cancellation and timeout.
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly reasonCode: int;

    /**
     * System radar error code returned by cast+ services.
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly radarErrorCode: int;
  }

  /**
   * 注册设备连接阶段的系统回调，包含错误码、连接状态、雷达错误以及用户行为码。
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { 'deviceStateChanged' } type - Event type.
   * @param { Callback<DeviceState> } callback - Callback used to return the device information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 20 dynamic
   */
  function on(type: 'deviceStateChanged', callback: Callback<DeviceState>): void;

  /**
   * Registers a system callback for the device connection phase.
   * The callback includes information such as error codes, connection status, radar errors, and user behavior codes.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { Callback<DeviceState> } callback - Callback used to return the device information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 23 static
   */
  function onDeviceStateChanged(callback: Callback<DeviceState>): void;

  /**
   * 取消注册设备连接阶段的系统回调
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { 'deviceStateChanged' } type - Event type.
   * @param { Callback<DeviceState> } [callback] - Callback used to return the device information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 20 dynamic
   */
  function off(type: 'deviceStateChanged', callback?: Callback<DeviceState>): void;

  /**
   * Unregisters a system callback for the device connection phase.
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { Callback<DeviceState> } [callback] - Callback used to return the device information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not System App.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 23 static
   */
  function offDeviceStateChanged(callback?: Callback<DeviceState>): void;

  /**
   * Session type, support audio & video
   *
   * @unionmember { 'audio' } audio type [since 10]
   * @unionmember { 'video' } video type [since 10]
   * @unionmember { 'voice_call' } voice call type [since 11]
   * @unionmember { 'video_call' } video call type [since 12]
   * @unionmember { 'photo' } photo type [since 22]
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  type AVSessionType = 'audio' | 'video' | 'voice_call' | 'video_call' | 'photo';

  /**
   * The general process funcation with an event and arguments.
   *
   * @param { string } event - 请求事件。
   * @param { Record<string, Object> } args - arguments associated with event
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 23 static
   */
  type EventProcess = (event: string, args: Record<string, Object>) => void;

  /**
   * The connection event supplied by system to indicate device state and information.
   *
   * @param { ConnectionState } state - 设备连接状态。
   * @param { OutputDeviceInfo } device - device information
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @since 23 static
   */
  type ConnectionEvent = (state: ConnectionState, device: OutputDeviceInfo) => void;

  /**
   * The video size event.
   *
   * @param { int } width - 视频宽度。
   *     取值范围为全体整数
   *     取值限定为整数。
   * @param { int } height - video width
   *     取值范围为全体整数
   *     取值限定为整数。
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 23 static
   */
  type VideoSizeEvent = (width: int, height: int) => void;

  /**
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVSession {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly sessionId: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly sessionType: AVSessionType;

    /**
     * Current session tag.
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    readonly sessionTag: string;

    /**
     * Set the metadata of this session.
     * In addition to the required properties, users can fill in partially supported properties
     * @param { AVMetadata } data {@link AVMetadata}
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    setAVMetadata(data: AVMetadata, callback: AsyncCallback<void>): void;

    /**
     *
     * @param { AVMetadata } data {@link AVMetadata}
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    setAVMetadata(data: AVMetadata): Promise<void>;

    /**
     *
     * @param { CallMetadata } data - {@link CallMetadata}
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    setCallMetadata(data: CallMetadata, callback: AsyncCallback<void>): void;

    /**
     * Set the metadata related with current call.
     * @param { CallMetadata } data - {@link CallMetadata}
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    setCallMetadata(data: CallMetadata): Promise<void>;

    /**
     *
     * @param { AVPlaybackState } state {@link AVPlaybackState}
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    setAVPlaybackState(state: AVPlaybackState, callback: AsyncCallback<void>): void;

    /**
     *
     * @param { AVPlaybackState } state {@link AVPlaybackState}
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    setAVPlaybackState(state: AVPlaybackState): Promise<void>;

    /**
     *
     * @param { AVCallState } state - {@link AVCallState}
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    setAVCallState(state: AVCallState, callback: AsyncCallback<void>): void;

    /**
     * Set the call state of this session.
     * @param { AVCallState } state - {@link AVCallState}
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    setAVCallState(state: AVCallState): Promise<void>;

    /**
     * Set the ability to start the session corresponding to
     * @param { WantAgent } ability - The WantAgent for launch the ability
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    setLaunchAbility(ability: WantAgent, callback: AsyncCallback<void>): void;

    /**
     *
     * @param { WantAgent } ability - The WantAgent for launch the ability
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    setLaunchAbility(ability: WantAgent): Promise<void>;

    /**
     *
     * @param { string } event - Session event name to dispatch
     * @param { object } args - The parameters of session event
     * @param { AsyncCallback<void>} callback - The asyncCallback triggered when the command is executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @since 10 dynamic
     */
    dispatchSessionEvent(event: string, args: {[key: string]: Object}, callback: AsyncCallback<void>): void;

    /**
     * Dispatch the session event of this session.
     *
     * @param { string } event - Session event name to dispatch
     * @param { Record<string, Object> } args - The parameters of session event
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 static
     */
    dispatchSessionEvent(event: string, args: Record<string, Object>, callback: AsyncCallback<void>): void;

    /**
     *
     * @param { string } event - Session event name to dispatch
     * @param { object } args - The parameters of session event
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    dispatchSessionEvent(event: string, args: {[key: string]: Object}): Promise<void>;

    /**
     * Dispatch the session event of this session.
     * @param { string } event - Session event name to dispatch
     * @param { Record<string, Object> } args - The parameters of session event
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 23 static
     */
    dispatchSessionEvent(event: string, args: Record<string, Object>): Promise<void>;

    /**
     *
     * @param { Array<AVQueueItem> } items - An array of the AVQueueItem
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    setAVQueueItems(items: Array<AVQueueItem>, callback: AsyncCallback<void>): void;

    /**
     *
     * @param { Array<AVQueueItem> } items - An array of the AVQueueItem
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    setAVQueueItems(items: Array<AVQueueItem>): Promise<void>;

    /**
     *
     * @param { string } title - The name of the playlist
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    setAVQueueTitle(title: string, callback: AsyncCallback<void>): void;

    /**
     *
     * @param { string } title - The name of the playlist
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    setAVQueueTitle(title: string): Promise<void>;

    /**
     *
     * @param { object } extras - The custom media packets
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @since 10 dynamic
     */
    setExtras(extras: {[key: string]: Object}, callback: AsyncCallback<void>): void;

    /**
     * Set the custom media packets for this session.
     *
     * @param { Record<string, Object> } extras - The custom media packets
     *     <br>设置的应用自定义扩展参数
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
     *     <br>回调返回
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 static
     */
    setExtras(extras: Record<string, Object>, callback: AsyncCallback<void>): void;

    /**
     *
     * @param { object } extras - The custom media packets
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    setExtras(extras: {[key: string]: Object}): Promise<void>;

    /**
     * Set the custom media packets for this session.
     * @param { Record<string, Object> } extras - The custom media packets
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 23 static
     */
    setExtras(extras: Record<string, Object>): Promise<void>;

    /**
     * 设置应用程序提供的支持播放倍速范围。
     *
     * @param { Array<double> } speeds - 支持的速度
     * @returns { Promise<void> } promise 返回
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    setSupportedPlaySpeeds(speeds: Array<double>): Promise<void>;

    /**
     * 设置应用程序提供的支持的循环模式。
     *
     * @param { Array<LoopMode> } loopModes - 支持的环路模式。
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    setSupportedLoopModes(loopModes: Array<LoopMode>): Promise<void>;

    /**
     * 打开或者关闭桌面歌词
     * @param { boolean } enable - 打开或者关闭
     * @returns { Promise<void> } 无返回值
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600111 - The desktop lyrics feature is not supported.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    enableDesktopLyric(enable: boolean): Promise<void>;

    /**
     * 设置桌面歌词是否显示/隐藏
     * @param { boolean } visible - 显示或者隐藏状态
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600110 - The desktop lyrics feature of this application is not enabled.
     * @throws { BusinessError } 6600111 - The desktop lyrics feature is not supported.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setDesktopLyricVisible(visible: boolean): Promise<void>;

    /**
     * 查询桌面歌词是否显示或者隐藏
     * @returns { Promise<boolean> } 返回显示或者隐藏的状态
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600110 - The desktop lyrics feature of this application is not enabled.
     * @throws { BusinessError } 6600111 - The desktop lyrics feature is not supported.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isDesktopLyricVisible(): Promise<boolean>;

    /**
     * 监听桌面歌词显示状态变化
     * @param { Callback<boolean> } callback - a callback to receive desktop lyric window visible state.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onDesktopLyricVisibilityChanged(callback: Callback<boolean>): void;

    /**
     * 取消监听桌面歌词显示状态变化
     * @param { Callback<boolean> } [callback] - a callback to receive desktop lyric window visible state.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offDesktopLyricVisibilityChanged(callback?: Callback<boolean>): void;

    /**
     * 设置桌面歌词状态
     * @param { DesktopLyricState } state - 桌面歌词状态
     * @returns { Promise<void> } 无返回值
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600110 - The desktop lyrics feature of this application is not enabled.
     * @throws { BusinessError } 6600111 - The desktop lyrics feature is not supported.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setDesktopLyricState(state: DesktopLyricState): Promise<void>;

    /**
     * 查询返回桌面歌词状态
     * @returns { Promise<DesktopLyricState> } 桌面歌词状态值
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600110 - The desktop lyrics feature of this application is not enabled.
     * @throws { BusinessError } 6600111 - The desktop lyrics feature is not supported.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getDesktopLyricState(): Promise<DesktopLyricState>;

    /**
     * 注册桌面歌词状态回调
     * @param { Callback<DesktopLyricState> } callback - 桌面歌词状态回调
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onDesktopLyricStateChanged(callback: Callback<DesktopLyricState>): void;

    /**
     * 取消桌面歌词锁定等状态回调
     * @param { Callback<DesktopLyricState> } [callback] - 桌面歌词锁定等状态回调
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offDesktopLyricStateChanged(callback?: Callback<DesktopLyricState>): void;

    /**
     * 设置后台播放模式
     *
     * @param { BackgroundPlayMode } mode - 后台播放模式
     *     <br>后台播放模式
     * @returns { Promise<void> }
     通过promise方式返回
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setBackgroundPlayMode(mode: BackgroundPlayMode): Promise<void>;

    /**
     * 设置媒体播放器上可显示的媒体控制类型。
     *
     * @param { Array<AVMediaCenterControlType> } type - 可在媒体播放器上显示的控件类型。
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setMediaCenterControlType(type: Array<AVMediaCenterControlType>): Promise<void>;

    /**
     *
     * @param { AsyncCallback<AVSessionController> } callback - async callback for the AVSessionController.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getController(callback: AsyncCallback<AVSessionController>): void;

    /**
     *
     * @returns { Promise<AVSessionController> } Promise for the AVSessionController
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getController(): Promise<AVSessionController>;

    /**
     * Get the cast controller when the session is casted to remote device.
     * If the avsession is not under casting state, the controller will return null.
     * @param { AsyncCallback<AVCastController> } callback - async callback for the AVCastController.
     * @throws {BusinessError} 6600102 - The session does not exist
     * @throws {BusinessError} 6600109 - The remote connection is not established
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10 dynamic
     */
    getAVCastController(callback: AsyncCallback<AVCastController>): void;

    /**
     * Get the cast controller when the session is casted to remote device.
     * If the avsession is not under casting state, the controller will return undefined.
     * @param { AsyncCallback<AVCastController | undefined> } callback - async callback for the AVCastController.
     * @throws {BusinessError} 6600102 - The session does not exist
     * @throws {BusinessError} 6600109 - The remote connection is not established
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    getAVCastController(callback: AsyncCallback<AVCastController | undefined>): void;

    /**
     * Get the cast controller when the session is casted to remote device.
     * If the avsession is not under casting state, the controller will return null.
     *
     * @returns { Promise<AVCastController> } Promise for the AVCastController
     * @throws {BusinessError} 6600102 - The session does not exist
     * @throws {BusinessError} 6600109 - The remote connection is not established
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    getAVCastController(): Promise<AVCastController>;

    /**
     * Get the cast controller when the session is casted to remote device.
     * If the avsession is not under casting state, the controller will return undefined.
     * @returns { Promise<AVCastController | undefined> } Promise for the AVCastController
     * @throws {BusinessError} 6600102 - The session does not exist
     * @throws {BusinessError} 6600109 - The remote connection is not established
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 23 static
     */
    getAVCastController(): Promise<AVCastController | undefined>;

    /**
     * Get output device information
     * @param { AsyncCallback<OutputDeviceInfo> } callback - async callback for the OutputDeviceInfo.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getOutputDevice(callback: AsyncCallback<OutputDeviceInfo>): void;

    /**
     *
     * @returns { Promise<OutputDeviceInfo> } Promise for the OutputDeviceInfo
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getOutputDevice(): Promise<OutputDeviceInfo>;

    /**
     *
     * @returns { OutputDeviceInfo } the OutputDeviceInfo
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getOutputDeviceSync(): OutputDeviceInfo;

    /**
     * Get all the current virtual display information for extended display.
     * @returns { Promise<Array<CastDisplayInfo>> } Promise for the CastDisplayInfo
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getAllCastDisplays(): Promise<Array<CastDisplayInfo>>;

    /**
     * Register play command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     * When canceling the callback, need to update the supported commands list.
     * Each playback command only supports registering one callback,
     * and the new callback will replace the previous one.
     *
     * @param { 'play' } type - Command to register 'play'.
     * @param { function } callback - Used to handle ('play') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'play', callback: () => void): void;

    /**
     * 注册play的回调监听
     * @param { Callback<CommandInfo> } callback - play的回调监听
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    onPlay(callback: Callback<CommandInfo>): void;

    /**
     * Register pause command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     * When canceling the callback, need to update the supported commands list.
     * Each playback command only supports registering one callback,
     * and the new callback will replace the previous one.
     *
     * @param { 'pause' } type - Command to register 'pause'.
     * @param { function } callback - Used to handle ('pause') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'pause', callback: () => void): void;

    /**
     * Register pause command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     * When canceling the callback, need to update the supported commands list.
     * Each playback command only supports registering one callback,
     * and the new callback will replace the previous one.
     * @param { NoParamCallback } callback - Used to handle ('pause') command
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onPause(callback: NoParamCallback): void;

    /**
     * Register stop command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     * When canceling the callback, need to update the supported commands list.
     * Each playback command only supports registering one callback,
     * and the new callback will replace the previous one.
     *
     * @param { 'stop' } type - Command to register 'stop'.
     * @param { function } callback - Used to handle ('stop') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'stop', callback: () => void): void;

    /**
     * Register stop command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     * When canceling the callback, need to update the supported commands list.
     * Each playback command only supports registering one callback,
     * and the new callback will replace the previous one.
     * @param { NoParamCallback } callback - Used to handle ('stop') command
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onStop(callback: NoParamCallback): void;

    /**
     * Register playNext command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     * When canceling the callback, need to update the supported commands list.
     * Each playback command only supports registering one callback,
     * and the new callback will replace the previous one.
     *
     * @param { 'playNext' } type - Command to register 'playNext'.
     * @param { function } callback - Used to handle ('playNext') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'playNext', callback: () => void): void;

    /**
     * 注册playNext的回调监听
     * @param { Callback<CommandInfo> } callback - playNext的回调监听函数
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    onPlayNext(callback: Callback<CommandInfo>): void;

    /**
     * Register playPrevious command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     * When canceling the callback, need to update the supported commands list.
     * Each playback command only supports registering one callback,
     * and the new callback will replace the previous one.
     *
     * @param { 'playPrevious' } type - Command to register 'playPrevious'.
     * @param { function } callback - Used to handle ('playPrevious') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'playPrevious', callback: () => void): void;

    /**
     * 注册playPrevious的回调监听
     * @param { Callback<CommandInfo> } callback - playPrevious的回调监听函数
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    onPlayPrevious(callback: Callback<CommandInfo>): void;

    /**
     * Register fastForward command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     * When canceling the callback, need to update the supported commands list.
     * Each playback command only supports registering one callback,
     * and the new callback will replace the previous one.
     *
     * @param { 'fastForward' } type - Command to register 'fastForward'.
     * @param { function } callback - Used to handle ('fastForward') command, described by milliseconds.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'fastForward', callback: (time ?: long) => void): void;

    /**
     * 注册fastForward的回调监听
     * @param { TwoParamCallback<long, CommandInfo> } callback - fastForward的回调监听函数
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    onFastForward(callback: TwoParamCallback<long, CommandInfo>): void;

    /**
     * Register rewind command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     * When canceling the callback, need to update the supported commands list.
     * Each playback command only supports registering one callback,
     * and the new callback will replace the previous one.
     *
     * @param { 'rewind' } type - Command to register 'rewind'.
     * @param { function } callback - Used to handle ('rewind') command, described by milliseconds.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'rewind', callback: (time ?: long) => void): void;

    /**
     * 注册rewind 的回调监听
     * @param { TwoParamCallback<long, CommandInfo> } callback - rewind 的回调监听函数
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    onRewind(callback: TwoParamCallback<long, CommandInfo>): void;

    /**
     * Unregister play command callback.
     * When canceling the callback, need to update the supported commands list.
     *
     * @param { 'play' } type - Command to register 'play'.
     * @param { function } callback - Used to handle ('play') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'play', callback?: () => void): void;

    /**
     * 取消play的回调监听
     * @param { Callback<CommandInfo> } [callback] - 消play的回调监听函数
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    offPlay(callback?: Callback<CommandInfo>): void;

    /**
     * Unregister pause command callback.
     * When canceling the callback, need to update the supported commands list.
     *
     * @param { 'pause' } type - Command to register 'pause'.
     * @param { function } callback - Used to handle ('pause') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'pause', callback?: () => void): void;

    /**
     * Unregister pause command callback.
     * When canceling the callback, need to update the supported commands list.
     * @param { NoParamCallback } [callback] - Used to handle ('pause') command
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offPause(callback?: NoParamCallback): void;

    /**
     * Unregister stop command callback.
     * When canceling the callback, need to update the supported commands list.
     *
     * @param { 'stop' } type - Command to register 'stop'.
     * @param { function } callback - Used to handle ('stop') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'stop', callback?: () => void): void;

    /**
     * Unregister stop command callback.
     * When canceling the callback, need to update the supported commands list.
     * @param { NoParamCallback } [callback] - Used to handle ('stop') command
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offStop(callback?: NoParamCallback): void;

    /**
     * Unregister playNext command callback.
     * When canceling the callback, need to update the supported commands list.
     *
     * @param { 'playNext' } type - Command to register 'playNext'.
     * @param { function } callback - Used to handle ('playNext') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'playNext', callback?: () => void): void;

    /**
     * 取消playNext 的回调监听
     * @param { Callback<CommandInfo> } [callback] - playNext 的回调监听函数
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    offPlayNext(callback?: Callback<CommandInfo>): void;

    /**
     * Unregister playPrevious command callback.
     * When canceling the callback, need to update the supported commands list.
     *
     * @param { 'playPrevious' } type - Command to register 'playPrevious'.
     * @param { function } callback - Used to handle ('playPrevious') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'playPrevious', callback?: () => void): void;

    /**
     * 取消playPrevious的回调监听
     * @param { Callback<CommandInfo> } [callback] - playPrevious的回调监听函数
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    offPlayPrevious(callback?: Callback<CommandInfo>): void;

    /**
     * Unregister fastForward command callback.
     * When canceling the callback, need to update the supported commands list.
     *
     * @param { 'fastForward' } type - Command to register 'fastForward'.
     * @param { function } callback - Used to handle ('fastForward') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'fastForward', callback?: () => void): void;

    /**
     * 取消fastForward的回调监听
     * @param { TwoParamCallback<long, CommandInfo> } [callback] - fastForward的回调监听函数
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    offFastForward(callback?: TwoParamCallback<long, CommandInfo>): void;

    /**
     * Unregister rewind command callback.
     * When canceling the callback, need to update the supported commands list.
     *
     * @param { 'rewind' } type - Command to register 'rewind'.
     * @param { function } callback - Used to handle ('rewind') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'rewind', callback?: () => void): void;

    /**
     * 取消rewind的回调监听
     * @param { TwoParamCallback<long, CommandInfo> } [callback] - rewind的回调监听函数
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    offRewind(callback?: TwoParamCallback<long, CommandInfo>): void;

    /**
     * Register playFromAssetId command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     * When canceling the callback, need to update the supported commands list.
     * Each playback command only supports registering one callback,
     * and the new callback will replace the previous one.
     *
     * @param { 'playFromAssetId' } type - Command to register 'playFromAssetId'.
     * @param { function } callback - Used to handle ('playFromAssetId') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamiconly
     * @deprecated since 20
     * @useinstead ohos.multimedia.avsession.AVSession#on
     */
    on(type: 'playFromAssetId', callback: (assetId: number) => void): void;

    /**
     * Unregister playFromAssetId command callback.
     *
     * @param { 'playFromAssetId' } type - Command to register 'playFromAssetId'.
     * @param { function } callback - Used to handle ('playFromAssetId') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamiconly
     * @deprecated since 20
     * @useinstead ohos.multimedia.avsession.AVSession#off
     */
    off(type: 'playFromAssetId', callback?: (assetId: number) => void): void;

    /**
     * 订阅playWithAssetId回调
     * @param { 'playWithAssetId' } type - Event type.
     * @param { Callback<string> } callback - Callback used to handle the 'playWithAssetId' command.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'playWithAssetId', callback: Callback<string>): void;

    /**
     * Subscribes to playWithAssetId events.
     * @param { Callback<string> } callback - Callback used to handle the 'playWithAssetId' command.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onPlayWithAssetId(callback: Callback<string>): void;

    /**
     * 取消订阅playWithAssetId事件
     * @param { 'playWithAssetId' } type - Event type.
     * @param { Callback<string> } callback - Callback used to handle the 'playWithAssetId' command.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'playWithAssetId', callback?: Callback<string>): void;

    /**
     * Unsubscribes from playWithAssetId events.
     * @param { Callback<string> } [callback] - Callback used to handle the 'playWithAssetId' command.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 23 static
     */
    offPlayWithAssetId(callback?: Callback<string>): void;

    /**
     * Register seek command callback
     *
     * @param { 'seek' } type - Registration Type 'seek'
     * @param { function } callback - Used to handle seek command.The callback provides the seek time(ms)
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'seek', callback: (time: long) => void): void;

    /**
     * Register seek command callback
     * @param { Callback<long> } callback - Used to handle seek command.The callback provides the seek time(ms)
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 23 static
     */
    onSeek(callback: Callback<long>): void;

    /**
     * Unregister seek command callback
     *
     * @param { 'seek' } type - Registration Type 'seek'
     * @param { function } callback - Used to handle seek command.The callback provides the seek time(ms)
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'seek', callback?: (time: long) => void): void;

    /**
     * Unregister seek command callback
     * @param { Callback<long> } [callback] - Used to handle seek command.The callback provides the seek time(ms)
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offSeek(callback?: Callback<long>): void;

    /**
     * Register setSpeed command callback
     *
     * @param { 'setSpeed' } type - Registration Type 'setSpeed'
     * @param { function } callback - Used to handle setSpeed command.The callback provides the speed value
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'setSpeed', callback: (speed: double) => void): void;

    /**
     * Register setSpeed command callback
     * @param { Callback<double> } callback - Used to handle setSpeed command.The callback provides the speed value
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onSetSpeed(callback: Callback<double>): void;

    /**
     * Unregister setSpeed command callback
     *
     * @param { 'setSpeed' } type - Registration Type 'setSpeed'
     * @param { function } callback - Used to handle setSpeed command.The callback provides the speed value
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'setSpeed', callback?: (speed: double) => void): void;

    /**
     * Unregister setSpeed command callback
     * @param { Callback<double> } [callback] - Used to handle setSpeed command.The callback provides the speed value
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offSetSpeed(callback?: Callback<double>): void;

    /**
     * Register setLoopMode command callback
     *
     * @param { 'setLoopMode' } type - Registration Type 'setLoopMode'
     * @param { function } callback - Used to handle setLoopMode command.The callback provides the {@link LoopMode}
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'setLoopMode', callback: (mode: LoopMode) => void): void;

    /**
     * Register setLoopMode command callback
     * @param { Callback<LoopMode> } callback - Used to handle setLoopMode command.The callback provides the {@link LoopMode}
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onSetLoopMode(callback: Callback<LoopMode>): void;

    /**
     * Unregister setLoopMode command callback
     *
     * @param { 'setLoopMode' } type - Registration Type 'setLoopMode'
     * @param { function } callback - Used to handle setLoopMode command.The callback provides the {@link LoopMode}
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'setLoopMode', callback?: (mode: LoopMode) => void): void;

    /**
     * Unregister setLoopMode command callback
     * @param { Callback<LoopMode> } [callback] - Used to handle setLoopMode command.
     *     The callback provides the {@link LoopMode}
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offSetLoopMode(callback?: Callback<LoopMode>): void;

    /**
     * Register setTargetLoopMode command callback
     * Application should change playmode to the loopmode which is requested.
     * @param { 'setTargetLoopMode' } type - Registration Type 'setTargetLoopMode'
     * @param { Callback<LoopMode> } callback - Used to handle setTargetLoopMode command.The callback provides the {@link LoopMode}
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 18 dynamic
     */
    on(type: 'setTargetLoopMode', callback: Callback<LoopMode>): void;

    /**
     * Register setTargetLoopMode command callback
     * Application should change playmode to the loopmode which is requested.
     * @param { Callback<LoopMode> } callback - Used to handle setTargetLoopMode command.
     *     The callback provides the {@link LoopMode}
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onSetTargetLoopMode(callback: Callback<LoopMode>): void;

    /**
     * Unregister setTargetLoopMode command callback
     * @param { 'setTargetLoopMode' } type - Registration Type 'setTargetLoopMode'
     * @param { Callback<LoopMode> } callback - Used to handle setTargetLoopMode command.The callback provides the {@link LoopMode}
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 18 dynamic
     */
    off(type: 'setTargetLoopMode', callback?: Callback<LoopMode>): void;

    /**
     * Unregister setTargetLoopMode command callback
     * @param { Callback<LoopMode> } [callback] - Used to handle setTargetLoopMode command.
     *     The callback provides the {@link LoopMode}
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offSetTargetLoopMode(callback?: Callback<LoopMode>): void;

    /**
     * Register toggle favorite command callback
     *
     * @param { 'toggleFavorite' } type - Registration Type 'toggleFavorite'
     * @param { function } callback - Used to handle toggleFavorite command.The callback provides
     *     the assetId for which the favorite status needs to be switched.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'toggleFavorite', callback: (assetId: string) => void): void;

    /**
     * Register toggle favorite command callback
     * @param { Callback<string> } callback - Used to handle toggleFavorite command.The callback provides
     *     the assetId for which the favorite status needs to be switched.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onToggleFavorite(callback: Callback<string>): void;

    /**
     * Unregister toggle favorite command callback
     *
     * @param { 'toggleFavorite' } type - Registration Type 'toggleFavorite'
     * @param { function } callback - Used to handle toggleFavorite command.The callback provides
     *     the assetId for which the favorite status needs to be switched.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'toggleFavorite', callback?: (assetId: string) => void): void;

    /**
     * Unregister toggle favorite command callback
     * @param { Callback<string> } [callback] - Used to handle toggleFavorite command.The callback provides
     *     the assetId for which the favorite status needs to be switched.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offToggleFavorite(callback?: Callback<string>): void;

    /**
     * Register media key handling callback
     *
     * @param { 'handleKeyEvent' } type - Registration Type 'handleKeyEvent'
     * @param { function } callback - Used to handle key events.The callback provides the KeyEvent
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'handleKeyEvent', callback: (event: KeyEvent) => void): void;

    /**
     * Register media key handling callback
     * @param { Callback<KeyEvent> } callback - Used to handle key events.The callback provides the KeyEvent
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onHandleKeyEvent(callback: Callback<KeyEvent>): void;

    /**
     * Unregister media key handling callback
     *
     * @param { 'handleKeyEvent' } type - Registration Type 'handleKeyEvent'
     * @param { function } callback - Used to handle key events.The callback provides the KeyEvent
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'handleKeyEvent', callback?: (event: KeyEvent) => void): void;

    /**
     * Unregister media key handling callback
     * @param { Callback<KeyEvent> } [callback] - Used to handle key events.The callback provides the KeyEvent
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offHandleKeyEvent(callback?: Callback<KeyEvent>): void;

    /**
     * Register session output device change callback
     *
     * @param { 'outputDeviceChange' } type - Registration Type 'outputDeviceChange'
     * @param { function } callback - Used to handle output device changed.
     *     The callback provide the new device info {@link OutputDeviceInfo} and related connection state {@link ConnectionState}.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600102 - The session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'outputDeviceChange', callback: (state: ConnectionState, device: OutputDeviceInfo) => void): void;

    /**
     * Register session output device change callback
     * @param { ConnectionEvent } callback - Used to handle output device changed.
     *     The callback provide the new device info {@link OutputDeviceInfo}
     *     and related connection state {@link ConnectionState}.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600102 - The session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onOutputDeviceChange(callback: ConnectionEvent): void;

    /**
     * Unregister session output device change callback
     *
     * @param { 'outputDeviceChange' } type - Registration Type 'outputDeviceChange'
     * @param { function } callback - Used to handle output device changed.
     *     The callback provide the new device info {@link OutputDeviceInfo} and related connection state {@link
     *     ConnectionState}.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600102 - The session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'outputDeviceChange', callback?: (state: ConnectionState, device: OutputDeviceInfo) => void): void;

    /**
     * Unregister session output device change callback
     * @param { ConnectionEvent } [callback] - Used to handle output device changed.
     *     The callback provide the new device info {@link OutputDeviceInfo}
     *     and related connection state {@link ConnectionState}.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600102 - The session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offOutputDeviceChange(callback?: ConnectionEvent): void;

    /**
     *
     * @param { 'commonCommand' } type - Registration Type 'commonCommand'
     * @param { function } callback - Used to handle event when the common command is received
     *     The callback provide the command name and command args
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'commonCommand', callback: (command: string, args: {[key: string]: Object}) => void): void;

    /**
     * Register session custom command change callback
     * @param { EventProcess } callback - Used to handle event when the common command is received
     *     The callback provide the command name and command args
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onCommonCommand(callback: EventProcess): void;

    /**
     *
     * @param { 'commonCommand' } type - Registration Type 'commonCommand'
     * @param { function } callback - Used to cancel a specific listener
     *     The callback provide the command name and command args
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'commonCommand', callback?: (command: string, args: {[key: string]: Object}) => void): void;

    /**
     * Unregister session custom command change callback
     * @param { EventProcess } [callback] - Used to cancel a specific listener
     *     The callback provide the command name and command args
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offCommonCommand(callback?: EventProcess): void;

    /**
     * Register the item to play from the playlist change callback
     *
     * @param { 'skipToQueueItem' } type - Registration Type 'skipToQueueItem'
     * @param { function } callback - Used to handle the item to be played.
     *     The callback provide the new device info {@link OutputDeviceInfo}
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'skipToQueueItem', callback: (itemId: int) => void): void;

    /**
     * Register the item to play from the playlist change callback
     * @param { Callback<int> } callback - Used to handle the item to be played.
     *     The callback provide the new device info {@link OutputDeviceInfo}
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onSkipToQueueItem(callback: Callback<int>): void;

    /**
     * Unregister the item to play from the playlist change callback
     *
     * @param { 'skipToQueueItem' } type - Registration Type 'skipToQueueItem'
     * @param { function } callback - Used to handle the item to be played.
     *     The callback provide the new device info {@link OutputDeviceInfo}
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'skipToQueueItem', callback?: (itemId: int) => void): void;

    /**
     * Unregister the item to play from the playlist change callback
     * @param { Callback<int> } [callback] - Used to handle the item to be played.
     *     The callback provide the new device info {@link OutputDeviceInfo}
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offSkipToQueueItem(callback?: Callback<int>): void;

    /**
     * Register answer command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     *
     * @param { 'answer' } type - Command to register 'answer'.
     * @param { Callback<void> } callback - Used to handle ('answer') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'answer', callback: Callback<void>): void;

    /**
     * Register answer command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     * @param { NoParamCallback } callback - Used to handle ('answer') command
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onAnswer(callback: NoParamCallback): void;

    /**
     * Unregister answer command callback.
     *
     * @param { 'answer' } type - Command to register 'answer'.
     * @param { Callback<void> } callback - Used to handle ('answer') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'answer', callback?: Callback<void>): void;

    /**
     * Unregister answer command callback.
     * @param { NoParamCallback } [callback] - Used to handle ('answer') command
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offAnswer(callback?: NoParamCallback): void;

    /**
     * Register hangUp command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     *
     * @param { 'hangUp' } type - Command to register 'hangUp'.
     * @param { Callback<void> } callback - Used to handle ('hangUp') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'hangUp', callback: Callback<void>): void;

    /**
     * Register hangUp command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     * @param { NoParamCallback } callback - Used to handle ('hangUp') command
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onHangUp(callback: NoParamCallback): void;

    /**
     * Unregister hangUp command callback.
     *
     * @param { 'hangUp' } type - Command to register 'hangUp'.
     * @param { Callback<void> } callback - Used to handle ('hangUp') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'hangUp', callback?: Callback<void>): void;

    /**
     * Unregister hangUp command callback.
     * @param { NoParamCallback } [callback] - Used to handle ('hangUp') command
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offHangUp(callback?: NoParamCallback): void;

    /**
     * Register toggleCallMute command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     *
     * @param { 'toggleCallMute' } type - Command to register 'toggleCallMute'.
     * @param { Callback<void> } callback - Used to handle ('toggleCallMute') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'toggleCallMute', callback: Callback<void>): void;

    /**
     * Register toggleCallMute command callback.
     * As long as it is registered, it means that the ability supports this command.
     * If you cancel the callback, you need to call off {@link off}
     * @param { NoParamCallback } callback - Used to handle ('toggleCallMute') command
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onToggleCallMute(callback: NoParamCallback): void;

    /**
     * Unregister toggleCallMute command callback.
     *
     * @param { 'toggleCallMute' } type - Command to register 'toggleCallMute'.
     * @param { Callback<void> } callback - Used to handle ('toggleCallMute') command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect
     *     parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'toggleCallMute', callback?: Callback<void>): void;

    /**
     * Unregister toggleCallMute command callback.
     * @param { NoParamCallback } [callback] - Used to handle ('toggleCallMute') command
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offToggleCallMute(callback?: NoParamCallback): void;

    /**
     * Register listener for cast display information changed.
     * @param { 'castDisplayChange' } type - Type of the 'castDisplayChange' to listen for.
     * @param { Callback<CastDisplayInfo> } callback - Callback used to return cast display information.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600102 - The session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'castDisplayChange', callback: Callback<CastDisplayInfo>): void;

    /**
     * Register listener for cast display information changed.
     * @param { Callback<CastDisplayInfo> } callback - Callback used to return cast display information.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600102 - The session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @since 23 static
     */
    onCastDisplayChange(callback: Callback<CastDisplayInfo>): void;

    /**
     * Unregister listener for cast display information changed.
     * @param { 'castDisplayChange' } type - Type of the 'castDisplayChange' to listen for.
     * @param { Callback<CastDisplayInfo> } callback - Callback used to return cast display information.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600102 - The session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'castDisplayChange', callback?: Callback<CastDisplayInfo>): void;

    /**
     * Unregister listener for cast display information changed.
     * @param { Callback<CastDisplayInfo> } [callback] - Callback used to return cast display information.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600102 - The session does not exist
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @since 23 static
     */
    offCastDisplayChange(callback?: Callback<CastDisplayInfo>): void;

    /**
     * Register listener for custom data sent from remote device.
     * @param { 'customDataChange' } type - Type of the 'customDataChange' to listen for.
     * @param { Callback<Record<string, Object>> } callback - Callback used to retrieve custom data.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'customDataChange', callback: Callback<Record<string, Object>>): void;

    /**
     * Register listener for custom data sent from remote device.
     * @param { Callback<Record<string, Object>> } callback - Callback used to retrieve custom data.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onCustomDataChange(callback: Callback<Record<string, Object>>): void;

    /**
     * Unsubscribes from custom data changes.
     * @param { 'customDataChange' } type Custom data type.
     * @param { Callback<Record<string, Object>> } [callback] Callback used to return the custom data.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'customDataChange', callback?: Callback<Record<string, Object>>): void;

    /**
     * Unsubscribes from custom data changes.
     * @param { Callback<Record<string, Object>> } [callback] - Callback used to return the custom data.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offCustomDataChange(callback?: Callback<Record<string, Object>>): void;

    /**
     * Sends custom data to a remote device.
     * @param { Record<string, Object> } data Custom data populated by the application.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    sendCustomData(data: Record<string, Object>): Promise<void>;

    /**
     *
     * @param { AsyncCallback<void> } callback A callback instance used to return when cast stopped completed.
     * @throws { BusinessError } 6600109 - The remote connection is not established
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10 dynamic
     * @since 23 static
     */
    stopCasting(callback: AsyncCallback<void>): void;

    /**
     *
     * @returns { Promise<void> } void result promise when executed successfully
     * @throws { BusinessError } 6600109 - The remote connection is not established
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    stopCasting(): Promise<void>;

    /**
     *
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the session is activated.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    activate(callback: AsyncCallback<void>): void;

    /**
     *
     * @returns { Promise<void> } void result promise when executed successfully
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    activate(): Promise<void>;

    /**
     *
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the session is deactivated.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    deactivate(callback: AsyncCallback<void>): void;

    /**
     *
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    deactivate(): Promise<void>;

    /**
     *
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    destroy(callback: AsyncCallback<void>): void;

    /**
     *
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    destroy(): Promise<void>;
  }

  /**
   *
   * @unionmember { 'play' } Play the current media. [since 10]
   * @unionmember { 'pause' } Pause the current media. [since 10]
   * @unionmember { 'stop' } Stop the current media. [since 10]
   * @unionmember { 'playNext' } Play the next media in the queue. [since 10]
   * @unionmember { 'playPrevious' } Play the previous media in the queue. [since 10]
   * @unionmember { 'fastForward' } Fast forward the current media. [since 10]
   * @unionmember { 'rewind' } Rewind the current media. [since 10]
   * @unionmember { 'seek' } Seek to a specific position in the media. [since 10]
   * @unionmember { 'setVolume' } Adjust volume for the media. [since 10]
   * @unionmember { 'setSpeed' } Set the playback speed.. [since 10]
   * @unionmember { 'setLoopMode' } Set the loop mode for the media. [since 10]
   * @unionmember { 'toggleFavorite' } Toggle the favorite status of the current media. [since 10]
   * @unionmember { 'toggleMute' } Toggle the mute status of the media. [since 10]
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  type AVCastControlCommandType = 'play' | 'pause' | 'stop' | 'playNext' | 'playPrevious' | 'fastForward' | 'rewind' |
  'seek' | 'setVolume' | 'setSpeed' | 'setLoopMode' | 'toggleFavorite' | 'toggleMute';

  /**
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVCastControlCommand {
    /**
     *
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    command: AVCastControlCommandType;

    /**
     * Parameter carried in the command.
     * The seek command must carry the number parameter.
     * The setVolume command must carry the number parameter.
     * The toggleFavorite command must carry the {@link AVMediaDescription.assetId} parameter.
     * The setSpeed command must carry the {@link #media.PlaybackSpeed} parameter.
     * The setLoopMode command must carry the {@link LoopMode} parameter.
     * Other commands do not need to carry parameters.
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    parameter?: media.PlaybackSpeed | double | string | LoopMode;
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVCastController {
    /**
     *
     * @param { string } surfaceId - surface id, video player will use this id get a surface instance.
     * @param { AsyncCallback<void> } callback - A callback instance used to return when set surface completed.
     * @throws { BusinessError } 202 - Not System App.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Parameter verification failed.
     * @throws { BusinessError } 6600109 - The remote connection is not established
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    setDisplaySurface(surfaceId: string, callback: AsyncCallback<void>): void;

    /**
     *
     * @param { string } surfaceId - surface id, video player will use this id get a surface instance.
     * @returns { Promise<void> }      * @throws { BusinessError } 202
     * @throws { BusinessError } 202 - Not System App.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Parameter verification failed.
     * @throws { BusinessError } 6600109 - The remote connection is not established
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    setDisplaySurface(surfaceId: string): Promise<void>;

    /**
     *
     * @param { AsyncCallback<AVPlaybackState> } callback - The triggered asyncCallback when (getAVPlaybackState).
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10 dynamic
     * @since 23 static
     */
    getAVPlaybackState(callback: AsyncCallback<AVPlaybackState>): void;

    /**
     *
     * @returns { Promise<AVPlaybackState> } (AVPlaybackState) returned through promise
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAVPlaybackState(): Promise<AVPlaybackState>;

    /**
     * Get supported decoders of remote player.
     * @returns { Promise<Array<DecoderType>> } (DecoderType) returned through promise
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    getSupportedDecoders(): Promise<Array<DecoderType>>;

    /**
     * Get recommended resolution of remote player based on each decoder.
     * @param { DecoderType } decoderType - The decoder type.
     * @returns { Promise<ResolutionLevel> } ResolutionLevel returned through promise
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    getRecommendedResolutionLevel(decoderType: DecoderType): Promise<ResolutionLevel>;

    /**
     * Get supported hdr capabilities of remote player.
     * @returns { Promise<Array<hdrCapability.HDRFormat>> } HDRFormat returned through promise
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    getSupportedHdrCapabilities(): Promise<Array<hdrCapability.HDRFormat>>;

    /**
     * Get supported speed of remote player.
     * @returns { Promise<Array<double>> } supported speed returned through promise
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    getSupportedPlaySpeeds(): Promise<Array<double>>;

    /**
     *
     * @param { AVCastControlCommand } command The command to be send.
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600105 - Invalid session command
     * @throws { BusinessError } 6600109 - The remote connection is not established
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10 dynamic
     * @since 23 static
     */
    sendControlCommand(command: AVCastControlCommand, callback: AsyncCallback<void>): void;

    /**
     *
     * @param { AVCastControlCommand } command The command to be send.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600105 - Invalid session command
     * @throws { BusinessError } 6600109 - The remote connection is not established
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    sendControlCommand(command: AVCastControlCommand): Promise<void>;

    /**
     *
     * @param { AVQueueItem } item media item info.
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
     * @throws {BusinessError} 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Parameter verification failed.
     * @throws {BusinessError} 6600101 - Session service exception
     * @throws {BusinessError} 6600109 - The remote connection is not established
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10 dynamic
     * @since 23 static
     */
    start(item: AVQueueItem, callback: AsyncCallback<void>): void;

    /**
     *
     * @param { AVQueueItem } item media item info.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws {BusinessError} 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Parameter verification failed.
     * @throws {BusinessError} 6600101 - Session service exception
     * @throws {BusinessError} 6600109 - The remote connection is not established
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    start(item: AVQueueItem): Promise<void>;

    /**
     *
     * @param { AVQueueItem } item media item info.
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
     * @throws {BusinessError} 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Parameter verification failed.
     * @throws {BusinessError} 6600101 - Session service exception
     * @throws {BusinessError} 6600109 - The remote connection is not established
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10 dynamic
     * @since 23 static
     */
    prepare(item: AVQueueItem, callback: AsyncCallback<void>): void;

    /**
     *
     * @param { AVQueueItem } item media item info.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws {BusinessError} 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Parameter verification failed.
     * @throws {BusinessError} 6600101 - Session service exception
     * @throws {BusinessError} 6600109 - The remote connection is not established
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    prepare(item: AVQueueItem): Promise<void>;

    /**
     * 更新投播媒体信息
     *
     * @param { AVQueueItem } item - 媒体信息item
     * @returns { Promise<void> } 通过promise回调成功
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600109 - The remote connection is not established
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    update(item: AVQueueItem): Promise<void>;

    /**
     *
     * @param { AsyncCallback<AVQueueItem> } callback - The triggered asyncCallback.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10 dynamic
     * @since 23 static
     */
    getCurrentItem(callback: AsyncCallback<AVQueueItem>): void;

    /**
     *
     * @returns { Promise<AVQueueItem> } (AVQueueItem) returned through promise
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCurrentItem(): Promise<AVQueueItem>;

    /**
     *
     * @param { AsyncCallback<Array<AVCastControlCommandType>> } callback - The triggered asyncCallback when (getValidCommands).
     * @throws { BusinessError } 6600101 - Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 11 dynamic
     * @since 23 static
     */
    getValidCommands(callback: AsyncCallback<Array<AVCastControlCommandType>>): void;

    /**
     *
     * @returns { Promise<Array<AVCastControlCommandType>> }      * @throws { BusinessError } 6600101
     * @throws { BusinessError } 6600101 - Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 11 dynamic
     * @since 23 static
     */
    getValidCommands(): Promise<Array<AVCastControlCommandType>>;

    /**
     * Process the response corresponding to the media key request obtained by the application.
     * @param { string } assetId - The assetId of resource which provides the response.
     * @param { Uint8Array } response - Response corresponding to the request.
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    processMediaKeyResponse(assetId: string, response: Uint8Array): Promise<void>;

    /**
     * Sends custom data to a remote device.
     * @param { Record<string, Object> } data Custom data populated by the application.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    sendCustomData(data: Record<string, Object>): Promise<void>;

    /**
     *
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 11 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     *
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 6600101 - Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * Register playback state changed callback
     *
     * @param { 'playbackStateChange' } type
     * @param { Array<keyof AVPlaybackState> | 'all' } filter - The properties of {@link AVPlaybackState} that you cared
     *     about
     * @param { function } callback - The callback used to handle playback state changed event.
     *     The callback function provides the {@link AVPlaybackState} parameter.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'playbackStateChange', filter: Array<keyof AVPlaybackState> | 'all', callback: (state: AVPlaybackState) => void): void;

    /**
     * Register playback state changed callback
     * @param { Array<string> } filter - The properties of {@link AVPlaybackState} that you cared about
     * @param { Callback<AVPlaybackState> } callback - The callback used to handle playback state changed event.
     *     The callback function provides the {@link AVPlaybackState} parameter.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onPlaybackStateChange(filter: Array<string>, callback: Callback<AVPlaybackState>): void;

    /**
     * Register playback state changed callback
     * @param { Callback<AVPlaybackState> } callback - The callback used to handle playback state changed event.
     *     The callback function provides the {@link AVPlaybackState} parameter.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onPlaybackStateChangeAll(callback: Callback<AVPlaybackState>): void;

    /**
     * Unregister playback state changed callback
     *
     * @param { 'playbackStateChange' } type
     * @param { function } callback - The callback used to handle playback state changed event.
     *     The callback function provides the {@link AVPlaybackState} parameter.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'playbackStateChange', callback?: (state: AVPlaybackState) => void): void;

    /**
     * Unregister playback state changed callback
     * @param { Callback<AVPlaybackState> } [callback] - The callback used to handle playback state changed event.
     *     The callback function provides the {@link AVPlaybackState} parameter.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offPlaybackStateChange(callback?: Callback<AVPlaybackState>): void;

    /**
     * Register listener for current media item playback events.
     *
     * @param { 'mediaItemChange' } type Type of the playback event to listen for.
     * @param { Callback<AVQueueItem> } callback Callback used to listen for current item changed.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'mediaItemChange', callback: Callback<AVQueueItem>): void;

    /**
     * Register listener for current media item playback events.
     * @param { Callback<AVQueueItem> } callback Callback used to listen for current item changed.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onMediaItemChange(callback: Callback<AVQueueItem>): void;

    /**
     * Unregister listener for current media item playback events.
     *
     * @param { 'mediaItemChange' } type Type of the playback event to listen for.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'mediaItemChange'): void;

    /**
     * Unregister listener for current media item playback events.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offMediaItemChange(): void;

    /**
     * Register playback command callback sent by remote side or media center.
     * Application needs update the new media resource when receive these commands by using playItem.
     *
     * @param { 'playNext' } type - Type of the 'playNext' event to listen for.
     * @param { Callback<void> } callback - Used to handle 'playNext' command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'playNext', callback: Callback<void>): void;

    /**
     * Register playback command callback sent by remote side or media center.
     * Application needs update the new media resource when receive these commands by using playItem.
     * @param { NoParamCallback } callback - Used to handle 'playNext' command
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onPlayNext(callback: NoParamCallback): void;

    /**
     * Unregister playback command callback sent by remote side or media center.
     * When canceling the callback, need to update the supported commands list.
     *
     * @param { 'playNext' } type - Type of the 'playNext' event to listen for.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'playNext'): void;

    /**
     * Unregister playback command callback sent by remote side or media center.
     * When canceling the callback, need to update the supported commands list.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offPlayNext(): void;

    /**
     * Register playback command callback sent by remote side or media center.
     * Application needs update the new media resource when receive these commands by using playItem.
     *
     * @param { 'playPrevious' } type - Type of the 'playPrevious' to listen for.
     * @param { Callback<void> } callback - Used to handle 'playPrevious' command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'playPrevious', callback: Callback<void>): void;

    /**
     * Register playback command callback sent by remote side or media center.
     * Application needs update the new media resource when receive these commands by using playItem.
     * @param { NoParamCallback } callback - Used to handle 'playPrevious' command
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onPlayPrevious(callback: NoParamCallback): void;

    /**
     * Unregister playback command callback sent by remote side or media center.
     * When canceling the callback, need to update the supported commands list.
     *
     * @param { 'playPrevious' } type - Type of the 'playPrevious' to listen for.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'playPrevious'): void;

    /**
     * Unregister playback command callback sent by remote side or media center.
     * When canceling the callback, need to update the supported commands list.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offPlayPrevious(): void;

    /**
     * Register requested playback command callback sent by remote side or media center.
     * The AVQueueItem may include the requested assetId, starting position and other configurations.
     * @param { 'requestPlay' } type - Type of the 'requestPlay' to listen for.
     * @param { Callback<AVQueueItem> } callback - Used to handle 'requestPlay' command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 11 dynamic
     */
    on(type: 'requestPlay', callback: Callback<AVQueueItem>): void;

    /**
     * Register requested playback command callback sent by remote side or media center.
     * The AVQueueItem may include the requested assetId, starting position and other configurations.
     * @param { Callback<AVQueueItem> } callback - Used to handle 'requestPlay' command
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onRequestPlay(callback: Callback<AVQueueItem>): void;

    /**
     * Unregister requested playback command callback sent by remote side or media center.
     * @param { 'requestPlay' } type - Type of the 'requestPlay' to listen for.
     * @param { Callback<AVQueueItem> } callback - Used to handle 'requestPlay' command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 11 dynamic
     */
    off(type: 'requestPlay', callback?: Callback<AVQueueItem>): void;

    /**
     * Unregister requested playback command callback sent by remote side or media center.
     * @param { Callback<AVQueueItem> } [callback] - Used to handle 'requestPlay' command
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offRequestPlay(callback?: Callback<AVQueueItem>): void;

    /**
     * Register endOfStream state callback.
     * Application needs update the new media resource when receive these commands by using playItem.
     * @param { 'endOfStream' } type - Type of the 'endOfStream' to listen for.
     * @param { Callback<void> } callback - Used to handle 'endOfStream' command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 11 dynamic
     */
    on(type: 'endOfStream', callback: Callback<void>): void;

    /**
     * Register endOfStream state callback.
     * Application needs update the new media resource when receive these commands by using playItem.
     * @param { NoParamCallback } callback - Used to handle 'endOfStream' command
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onEndOfStream(callback: NoParamCallback): void;

    /**
     * Unregister endOfStream state callback.
     * @param { 'endOfStream' } type - Type of the 'endOfStream' to listen for.
     * @param { Callback<void> } callback - Used to handle 'endOfStream' command
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 11 dynamic
     */
    off(type: 'endOfStream', callback?: Callback<void>): void;

    /**
     * Unregister endOfStream state callback.
     * @param { NoParamCallback } [callback] - Used to handle 'endOfStream' command
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offEndOfStream(callback?: NoParamCallback): void;

    /**
     * Register listens for playback events.
     *
     * @param { 'seekDone' } type - Type of the 'seekDone' to listen for.
     * @param { Callback<int> } callback - Callback used to listen for the playback seekDone event.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'seekDone', callback: Callback<int>): void;

    /**
     * Register listens for playback events.
     * @param { Callback<int> } callback - Callback used to listen for the playback seekDone event.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onSeekDone(callback: Callback<int>): void;

    /**
     * Unregister listens for playback events.
     *
     * @param { 'seekDone' } type - Type of the 'seekDone' to listen for.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'seekDone'): void;

    /**
     * Unregister listens for playback events.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offSeekDone(): void;

    /**
     *
     * @param { 'validCommandChange' } type - 'validCommandChange'
     * @param { Callback<Array<AVCastControlCommandType>> } callback - The callback used to handle the changes.
     * The callback function provides an array of AVCastControlCommandType.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @FaAndStageModel
     * @since 11 dynamic
     */
    on(type: 'validCommandChange', callback: Callback<Array<AVCastControlCommandType>>);

    /**
     * Register the valid commands of the casted session changed callback
     * @param { Callback<Array<AVCastControlCommandType>> } callback - The callback used to handle the changes.
     *     The callback function provides an array of AVCastControlCommandType.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onValidCommandChange(callback: Callback<Array<AVCastControlCommandType>>): void;

    /**
     *
     * @param { 'validCommandChange' } type - 'validCommandChange'
     * @param { Callback<Array<AVCastControlCommandType>> } callback - The callback used to handle the changes.
     * The callback function provides an array of AVCastControlCommandType.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @FaAndStageModel
     * @since 11 dynamic
     */
    off(type: 'validCommandChange', callback?: Callback<Array<AVCastControlCommandType>>);

    /**
     * Unregister the valid commands of the casted session changed callback
     * @param { Callback<Array<AVCastControlCommandType>> } [callback] - The callback used to handle the changes.
     *     The callback function provides an array of AVCastControlCommandType.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offValidCommandChange(callback?: Callback<Array<AVCastControlCommandType>>): void;

    /**
     * Register listener for video size change event, used at remote side.
     * @param { 'videoSizeChange' } type - Type of the 'videoSizeChange' to listen for.
     * @param { function } callback - Callback used to return video size.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 12 dynamic
     */
    on(type: 'videoSizeChange', callback: (width: int, height: int) => void): void;

    /**
     * Register listener for video size change event, used at remote side.
     * @param { VideoSizeEvent } callback - Callback used to return video size.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onVideoSizeChange(callback: VideoSizeEvent): void;

    /**
     * Unregister listener for video size change event, used at remote side.
     * @param { 'videoSizeChange' } type - Type of the 'videoSizeChange' to listen for.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 12 dynamic
     */
    off(type: 'videoSizeChange'): void;

    /**
     * Unregister listener for video size change event, used at remote side.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offVideoSizeChange(): void;

    /**
     * Register listeners for playback error events.
     *
     * @param { 'error' } type Type of the 'error' to listen for.
     * @param { ErrorCallback } callback Callback used to listen for the playback error event.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 5400101 - No memory.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400104 - Time out.
     * @throws { BusinessError } 5400105 - Service died.
     * @throws { BusinessError } 5400106 - Unsupport format.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'error', callback: ErrorCallback): void;

    /**
     * Register listeners for playback error events.
     * @param { ErrorCallback } callback Callback used to listen for the playback error event.
     * @throws { BusinessError } 5400101 - No memory.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400104 - Time out.
     * @throws { BusinessError } 5400105 - Service died.
     * @throws { BusinessError } 5400106 - Unsupport format.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onError(callback: ErrorCallback): void;

    /**
     * Unregister listens for playback error events.
     *
     * @param { 'error' } type Type of the 'error' to listen for.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 5400101 - No memory.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400104 - Time out.
     * @throws { BusinessError } 5400105 - Service died.
     * @throws { BusinessError } 5400106 - Unsupport format.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'error'): void;

    /**
     * Unregister listens for playback error events.
     * @throws { BusinessError } 5400101 - No memory.
     * @throws { BusinessError } 5400102 - Operation not allowed.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 5400104 - Time out.
     * @throws { BusinessError } 5400105 - Service died.
     * @throws { BusinessError } 5400106 - Unsupport format.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offError(): void;

    /**
     * Register listeners for cast control generic error events.
     * @param { 'castControlGenericError' } type Type of the 'castControlGenericError' to listen for.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 401 - Parameter check failed. 1. Mandatory parameters are left unspecified.
     * 2. Incorrect parameter types.
     * @throws { BusinessError } 6611000 - The error code for cast control is unspecified.
     * @throws { BusinessError } 6611001 - An unspecified error occurs in the remote player.
     * @throws { BusinessError } 6611002 - The playback position falls behind the live window.
     * @throws { BusinessError } 6611003 - The process of cast control times out.
     * @throws { BusinessError } 6611004 - The runtime check failed.
     * @throws { BusinessError } 6611100 - Cross-device data transmission is locked.
     * @throws { BusinessError } 6611101 - The specified seek mode is not supported.
     * @throws { BusinessError } 6611102 - The position to seek to is out of the range of the media asset
     * or the specified seek mode is not supported.
     * @throws { BusinessError } 6611103 - The specified playback mode is not supported.
     * @throws { BusinessError } 6611104 - The specified playback speed is not supported.
     * @throws { BusinessError } 6611105 - The action failed because either the media source device or the media sink device has been revoked.
     * @throws { BusinessError } 6611106 - The parameter is invalid, for example, the url is illegal to play.
     * @throws { BusinessError } 6611107 - Allocation of memory failed.
     * @throws { BusinessError } 6611108 - Operation is not allowed.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     */
    on(type: 'castControlGenericError', callback: ErrorCallback): void;

    /**
     * Register listeners for cast control generic error events.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 6611000 - The error code for cast control is unspecified.
     * @throws { BusinessError } 6611001 - An unspecified error occurs in the remote player.
     * @throws { BusinessError } 6611002 - The playback position falls behind the live window.
     * @throws { BusinessError } 6611003 - The process of cast control times out.
     * @throws { BusinessError } 6611004 - The runtime check failed.
     * @throws { BusinessError } 6611100 - Cross-device data transmission is locked.
     * @throws { BusinessError } 6611101 - The specified seek mode is not supported.
     * @throws { BusinessError } 6611102 - The position to seek to is out of the range of the media asset
     *     or the specified seek mode is not supported.
     * @throws { BusinessError } 6611103 - The specified playback mode is not supported.
     * @throws { BusinessError } 6611104 - The specified playback speed is not supported.
     * @throws { BusinessError } 6611105 - The action failed because either the media source device
     *     or the media sink device has been revoked.
     * @throws { BusinessError } 6611106 - The parameter is invalid, for example, the url is illegal to play.
     * @throws { BusinessError } 6611107 - Allocation of memory failed.
     * @throws { BusinessError } 6611108 - Operation is not allowed.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onCastControlGenericError(callback: ErrorCallback): void;

    /**
     * Unregister listeners for cast control generic error events.
     * @param { 'castControlGenericError' } type Type of the 'castControlGenericError' to listen for.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 401 - Parameter check failed. 1. Mandatory parameters are left unspecified.
     * 2. Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     */
    off(type: 'castControlGenericError', callback?: ErrorCallback): void;

    /**
     * Unregister listeners for cast control generic error events.
     * @param { ErrorCallback } [callback] - Callback used to listen for the cast control error event.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offCastControlGenericError(callback?: ErrorCallback): void;

    /**
     * Register listeners for cast control input/output error events.
     * @param { 'castControlIoError' } type Type of the 'castControlIoError' to listen for.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 401 - Parameter check failed. 1. Mandatory parameters are left unspecified.
     * 2. Incorrect parameter types.
     * @throws { BusinessError } 6612000 - An unspecified input/output error occurs.
     * @throws { BusinessError } 6612001 - Network connection failure.
     * @throws { BusinessError } 6612002 - Network timeout.
     * @throws { BusinessError } 6612003 - Invalid "Content-Type" HTTP header.
     * @throws { BusinessError } 6612004 - The HTTP server returns an unexpected HTTP response status code.
     * @throws { BusinessError } 6612005 - The file does not exist.
     * @throws { BusinessError } 6612006 - No permission is granted to perform the IO operation.
     * @throws { BusinessError } 6612007 - Access to cleartext HTTP traffic is not allowed by the app's network security configuration.
     * @throws { BusinessError } 6612008 - Reading data out of the data bound.
     * @throws { BusinessError } 6612100 - The media does not contain any contents that can be played.
     * @throws { BusinessError } 6612101 - The media cannot be read, for example, because of dust or scratches.
     * @throws { BusinessError } 6612102 - This resource is already in use.
     * @throws { BusinessError } 6612103 - The content using the validity interval has expired.
     * @throws { BusinessError } 6612104 - Using the requested content to play is not allowed.
     * @throws { BusinessError } 6612105 - The use of the allowed content cannot be verified.
     * @throws { BusinessError } 6612106 - The number of times this content has been used as requested has reached the maximum allowed number of uses.
     * @throws { BusinessError } 6612107 - An error occurs when sending packet from source device to sink device.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     */
    on(type: 'castControlIoError', callback: ErrorCallback): void;

    /**
     * Register listeners for cast control input/output error events.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 6612000 - An unspecified input/output error occurs.
     * @throws { BusinessError } 6612001 - Network connection failure.
     * @throws { BusinessError } 6612002 - Network timeout.
     * @throws { BusinessError } 6612003 - Invalid "Content-Type" HTTP header.
     * @throws { BusinessError } 6612004 - The HTTP server returns an unexpected HTTP response status code.
     * @throws { BusinessError } 6612005 - The file does not exist.
     * @throws { BusinessError } 6612006 - No permission is granted to perform the IO operation.
     * @throws { BusinessError } 6612007 - Access to cleartext HTTP traffic is not allowed
     *     by the app's network security configuration.
     * @throws { BusinessError } 6612008 - Reading data out of the data bound.
     * @throws { BusinessError } 6612100 - The media does not contain any contents that can be played.
     * @throws { BusinessError } 6612101 - The media cannot be read, for example, because of dust or scratches.
     * @throws { BusinessError } 6612102 - This resource is already in use.
     * @throws { BusinessError } 6612103 - The content using the validity interval has expired.
     * @throws { BusinessError } 6612104 - Using the requested content to play is not allowed.
     * @throws { BusinessError } 6612105 - The use of the allowed content cannot be verified.
     * @throws { BusinessError } 6612106 - The number of times this content has been used as requested
     *     has reached the maximum allowed number of uses.
     * @throws { BusinessError } 6612107 - An error occurs when sending packet from source device to sink device.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onCastControlIoError(callback: ErrorCallback): void;

    /**
     * Unregister listeners for cast control input/output error events.
     * @param { 'castControlIoError' } type Type of the 'castControlIoError' to listen for.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 401 - Parameter check failed. 1. Mandatory parameters are left unspecified.
     * 2. Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     */
    off(type: 'castControlIoError', callback?: ErrorCallback): void;

    /**
     * Unregister listeners for cast control input/output error events.
     * @param { ErrorCallback } [callback] - Callback used to listen for the cast control error event.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offCastControlIoError(callback?: ErrorCallback): void;

    /**
     * Register listeners for cast control parsing error events.
     * @param { 'castControlParsingError' } type Type of the 'castControlParsingError' to listen for.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 401 - Parameter check failed. 1. Mandatory parameters are left unspecified.
     * 2. Incorrect parameter types.
     * @throws { BusinessError } 6613000 - Unspecified error related to content parsing.
     * @throws { BusinessError } 6613001 - Parsing error associated with media container format bit streams.
     * @throws { BusinessError } 6613002 - Parsing error associated with the media manifest.
     * @throws { BusinessError } 6613003 - An error occurs when attempting to extract a file with an unsupported media container format
     * or an unsupported media container feature.
     * @throws { BusinessError } 6613004 - Unsupported feature in the media manifest.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     */
    on(type: 'castControlParsingError', callback: ErrorCallback): void;

    /**
     * Register listeners for cast control parsing error events.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 6613000 - Unspecified error related to content parsing.
     * @throws { BusinessError } 6613001 - Parsing error associated with media container format bit streams.
     * @throws { BusinessError } 6613002 - Parsing error associated with the media manifest.
     * @throws { BusinessError } 6613003 - An error occurs when attempting to extract a file
     *     with an unsupported media container format
     *     or an unsupported media container feature.
     * @throws { BusinessError } 6613004 - Unsupported feature in the media manifest.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onCastControlParsingError(callback: ErrorCallback): void;

    /**
     * Unregister listeners for cast control parsing error events.
     * @param { 'castControlParsingError' } type Type of the 'castControlParsingError' to listen for.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 401 - Parameter check failed. 1. Mandatory parameters are left unspecified.
     * 2. Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     */
    off(type: 'castControlParsingError', callback?: ErrorCallback): void;

    /**
     * Unregister listeners for cast control parsing error events.
     * @param { ErrorCallback } [callback] - Callback used to listen for the cast control error event.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offCastControlParsingError(callback?: ErrorCallback): void;

    /**
     * Register listeners for cast control decoding error events.
     * @param { 'castControlDecodingError' } type Type of the 'castControlDecodingError' to listen for.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 401 - Parameter check failed. 1. Mandatory parameters are left unspecified.
     * 2. Incorrect parameter types.
     * @throws { BusinessError } 6614000 - Unspecified decoding error.
     * @throws { BusinessError } 6614001 - Decoder initialization failed.
     * @throws { BusinessError } 6614002 - Decoder query failed.
     * @throws { BusinessError } 6614003 - Decoding the media samples failed.
     * @throws { BusinessError } 6614004 - The format of the content to decode exceeds the capabilities of the device.
     * @throws { BusinessError } 6614005 - The format of the content to decode is not supported.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     */
    on(type: 'castControlDecodingError', callback: ErrorCallback): void;

    /**
     * Register listeners for cast control decoding error events.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 6614000 - Unspecified decoding error.
     * @throws { BusinessError } 6614001 - Decoder initialization failed.
     * @throws { BusinessError } 6614002 - Decoder query failed.
     * @throws { BusinessError } 6614003 - Decoding the media samples failed.
     * @throws { BusinessError } 6614004 - The format of the content to decode exceeds the capabilities of the device.
     * @throws { BusinessError } 6614005 - The format of the content to decode is not supported.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onCastControlDecodingError(callback: ErrorCallback): void;

    /**
     * Unregister listeners for cast control decoding error events.
     * @param { 'castControlDecodingError' } type Type of the 'castControlDecodingError' to listen for.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 401 - Parameter check failed. 1. Mandatory parameters are left unspecified.
     * 2. Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     */
    off(type: 'castControlDecodingError', callback?: ErrorCallback): void;

    /**
     * Unregister listeners for cast control decoding error events.
     * @param { ErrorCallback } [callback] - Callback used to listen for the cast control error event.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offCastControlDecodingError(callback?: ErrorCallback): void;

    /**
     * Register listeners for cast control audio renderer error error events.
     * @param { 'castControlAudioRendererError' } type Type of the 'castControlAudioRendererError' to listen for.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 401 - Parameter check failed. 1. Mandatory parameters are left unspecified.
     * 2. Incorrect parameter types.
     * @throws { BusinessError } 6615000 - Unspecified errors related to the audio renderer.
     * @throws { BusinessError } 6615001 - Initializing the audio renderer failed.
     * @throws { BusinessError } 6615002 - The audio renderer fails to write data.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     */
    on(type: 'castControlAudioRendererError', callback: ErrorCallback): void;

    /**
     * Register listeners for cast control audio renderer error error events.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 6615000 - Unspecified errors related to the audio renderer.
     * @throws { BusinessError } 6615001 - Initializing the audio renderer failed.
     * @throws { BusinessError } 6615002 - The audio renderer fails to write data.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onCastControlAudioRendererError(callback: ErrorCallback): void;

    /**
     * Unregister listeners for cast control audio renderer error events.
     * @param { 'castControlAudioRendererError' } type Type of the 'castControlAudioRendererError' to listen for.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 401 - Parameter check failed. 1. Mandatory parameters are left unspecified.
     * 2. Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     */
    off(type: 'castControlAudioRendererError', callback?: ErrorCallback): void;

    /**
     * Unregister listeners for cast control audio renderer error events.
     * @param { ErrorCallback } [callback] - Callback used to listen for the cast control error event.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offCastControlAudioRendererError(callback?: ErrorCallback): void;

    /**
     * Register listeners for cast control drm error events.
     * @param { 'castControlDrmError' } type Type of the 'castControlDrmError' to listen for.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 401 - Parameter check failed. 1. Mandatory parameters are left unspecified.
     * 2. Incorrect parameter types.
     * @throws { BusinessError } 6616000 - Unspecified error related to DRM.
     * @throws { BusinessError } 6616001 - The chosen DRM protection scheme is not supported by the device.
     * @throws { BusinessError } 6616002 - Device provisioning failed.
     * @throws { BusinessError } 6616003 - The DRM-protected content to play is incompatible.
     * @throws { BusinessError } 6616004 - Failed to obtain a license.
     * @throws { BusinessError } 6616005 - The operation is disallowed by the license policy.
     * @throws { BusinessError } 6616006 - An error occurs in the DRM system.
     * @throws { BusinessError } 6616007 - The device has revoked DRM privileges.
     * @throws { BusinessError } 6616008 - The DRM license being loaded into the open DRM session has expired.
     * @throws { BusinessError } 6616100 - An error occurs when the DRM processes the key response.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     */
    on(type: 'castControlDrmError', callback: ErrorCallback): void;

    /**
     * Register listeners for cast control drm error events.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 6616000 - Unspecified error related to DRM.
     * @throws { BusinessError } 6616001 - The chosen DRM protection scheme is not supported by the device.
     * @throws { BusinessError } 6616002 - Device provisioning failed.
     * @throws { BusinessError } 6616003 - The DRM-protected content to play is incompatible.
     * @throws { BusinessError } 6616004 - Failed to obtain a license.
     * @throws { BusinessError } 6616005 - The operation is disallowed by the license policy.
     * @throws { BusinessError } 6616006 - An error occurs in the DRM system.
     * @throws { BusinessError } 6616007 - The device has revoked DRM privileges.
     * @throws { BusinessError } 6616008 - The DRM license being loaded into the open DRM session has expired.
     * @throws { BusinessError } 6616100 - An error occurs when the DRM processes the key response.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onCastControlDrmError(callback: ErrorCallback): void;

    /**
     * Unregister listeners for cast control drm error events.
     * @param { 'castControlDrmError' } type Type of the 'castControlDrmError' to listen for.
     * @param { ErrorCallback } callback Callback used to listen for the cast control error event.
     * @throws { BusinessError } 401 - Parameter check failed. 1. Mandatory parameters are left unspecified.
     * 2. Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     */
    off(type: 'castControlDrmError', callback?: ErrorCallback): void;

    /**
     * Unregister listeners for cast control drm error events.
     * @param { ErrorCallback } [callback] - Callback used to listen for the cast control error event.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offCastControlDrmError(callback?: ErrorCallback): void;

    /**
     * Register listener for drm key request.
     * @param { 'keyRequest' } type - Type of the 'keyRequest' to listen for.
     * @param { KeyRequestCallback } callback - Callback used to request drm key.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'keyRequest', callback: KeyRequestCallback): void;

    /**
     * Register listener for drm key request.
     * @param { KeyRequestCallback } callback - Callback used to request drm key.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onKeyRequest(callback: KeyRequestCallback): void;

    /**
     * Unregister listener for drm key request.
     * @param { 'keyRequest' } type - Type of the 'keyRequest' to listen for.
     * @param { KeyRequestCallback } callback - Callback used to request drm key.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'keyRequest', callback?: KeyRequestCallback): void;

    /**
     * Unregister listener for drm key request.
     * @param { KeyRequestCallback } [callback] - Callback used to request drm key.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offKeyRequest(callback?: KeyRequestCallback): void;

    /**
     * Register listener for custom data sent from remote device.
     * @param { 'customDataChange' } type - Type of the 'customDataChange' to listen for.
     * @param { Callback<Record<string, Object>> } callback - Callback used to retrieve custom data.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'customDataChange', callback: Callback<Record<string, Object>>): void;

    /**
     * Register listener for custom data sent from remote device.
     * @param { Callback<Record<string, Object>> } callback - Callback used to retrieve custom data.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onCustomDataChange(callback: Callback<Record<string, Object>>): void;

    /**
     * Unregister listener for custom data sent from remote device.
     * @param { 'customDataChange' } type - Type of the 'customDataChange' to listen for.
     * @param { Callback<Record<string, Object>> } [callback] - Callback used to retrieve custom data.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'customDataChange', callback?: Callback<Record<string, Object>>): void;

    /**
     * Unregister listener for custom data sent from remote device.
     * @param { Callback<Record<string, Object>> } [callback] - Callback used to retrieve custom data.
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offCustomDataChange(callback?: Callback<Record<string, Object>>): void;
  }

  /**
   * A helper to enable a picker to select output devices
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  class AVCastPickerHelper {
    /**
     * The constructor used to create a AVCastPickerHelper object.
     *
     * @param { Context } context - represents the context.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    constructor(context: Context);

    /**
     * Pull up the avcastpicker based on the options.
     *
     * @param { AVCastPickerOptions } [options] - represents the options provided to  the picker.
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    select(options?: AVCastPickerOptions): Promise<void>;

    /**
     * Reset audio device to be default set by the platform which is used for communication use cases
     * including voice or video calls.
     * For example, the audio output device will be switched to earpiece for voice call and
     * to speaker for video call on phone.
     *
     *
     * @returns { Promise<void> } void promise when executed successfully
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 21 dynamic
     * @since 24 static
     */
    resetCommunicationDevice(): Promise<void>;

    /**
     * Register picker state change callback.
     * @param { 'pickerStateChange' } type - 'pickerStateChange'
     * @param { Callback<AVCastPickerState> } callback - The callback used to handle picker state changed event.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 14 dynamic
     */
    on(type: 'pickerStateChange', callback: Callback<AVCastPickerState>) : void;

    /**
     * Register picker state change callback.
     * @param { Callback<AVCastPickerState> } callback - The callback used to handle picker state changed event.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onPickerStateChange(callback: Callback<AVCastPickerState>) : void;

    /**
     * Unregister picker state change callback.
     * @param { 'pickerStateChange' } type - 'pickerStateChange'
     * @param { Callback<AVCastPickerState> } callback - The callback used to handle picker state changed event.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 14 dynamic
     */
    off(type: 'pickerStateChange', callback?: Callback<AVCastPickerState>) : void;

    /**
     * Unregister picker state change callback.
     * @param { Callback<AVCastPickerState> } [callback] - The callback used to handle picker state changed event.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offPickerStateChange(callback?: Callback<AVCastPickerState>) : void;
  }

  /**
   * Menu组件弹出绑定的控件位置。
   *
   * @typedef MenuPosition
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 22 dynamic
   * @since 24 static
   */
  interface MenuPosition {
    /**
     * 组件位置描述，水平方向坐标值。
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    x: int;

    /**
     * Menu绑定的组件位置定义
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    y: int;

    /**
     * 组件宽度
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    width: int;

    /**
     * 组件高度
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    height: int;
  }

  /**
   * An option to make different picker usage
   *
   * @typedef AVCastPickerOptions
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  interface AVCastPickerOptions {
    /**
     * Indicates current session type to show different picker ui.
     * If not set, default value is 'audio'.
     *
     * @type { ? AVSessionType }
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    sessionType?: AVSessionType;

    /**
     * picker样式
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 22 dynamic
     * @since 24 static
     */
    pickerStyle?: AVCastPickerStyle;

    /**
     * 设置Menu样式弹出绑定的组件位置参数，设置样式为STYLE_MENU时有效。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 22 dynamic
     * @since 24 static
     */
    menuPosition?: MenuPosition;
  }

  /**
   *
   *
   * @param { string } assetId - request key for current assetId
   * @param { Uint8Array } requestData - media key request data sent to media key server
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type KeyRequestCallback = (assetId: string, requestData: Uint8Array) => void;

  /**
   * Enumerates the cast display states.
   *
   * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum CastDisplayState {
    /**
     * Screen off.
     *
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_OFF = 1,

    /**
     * Screen on.
     *
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_ON = 2
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface CastDisplayInfo {
    /**
     * Display ID.
     * The application can get more display information based on the same id from display interface.
     *
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    id: long;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    name: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    state: CastDisplayState;

    /**
     * Display width, in pixels.
     *
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * Display height, in pixels.
     *
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * 音频设备的能力定义
   *
   * @typedef AudioCapabilities
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface AudioCapabilities {
    /**
     * 音频设备的能力描述
     * @type { Array<audio.AudioStreamInfo> }
     * @readonly
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    readonly streamInfos: Array<audio.AudioStreamInfo>;
  }

  /**
   * Define the device connection state.
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum ConnectionState {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_CONNECTING = 0,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_CONNECTED = 1,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_DISCONNECTED = 6,

    /**
     * 设备鉴权状态
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    STATE_AUTHENTICATING = 10,

    /**
     * 镜像转资源投播状态
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    STATE_MIRROR_TO_STREAM = 11,

    /**
     * 资源投播转镜像状态
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    STATE_STREAM_TO_MIRROR = 12
  }

  /**
   * The pre-defined display tag by system.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum DisplayTag {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    TAG_AUDIO_VIVID = 1
  }

  /**
   * The defination of decoder type.
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  enum DecoderType {
    /**
     * Defination of avc codec type.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    OH_AVCODEC_MIMETYPE_VIDEO_AVC = "video/avc",

    /**
     * Defination of hevc codec type.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    OH_AVCODEC_MIMETYPE_VIDEO_HEVC = "video/hevc",

    /**
     * Defination of audio vivid codec type.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    OH_AVCODEC_MIMETYPE_AUDIO_VIVID = "audio/av3a"
  }

  /**
   * The defination of suggested resolution.
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  enum ResolutionLevel {
    /**
     * Defination of 480P which typically resolution is 640*480.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RESOLUTION_480P = 0,

    /**
     * Defination of 720P which typically resolution is 1280*720.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RESOLUTION_720P = 1,

    /**
     * Defination of 1080P which typically resolution is 1920*1080.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RESOLUTION_1080P = 2,

    /**
     * Defination of 2K which typically resolution is 2560*1440.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RESOLUTION_2K = 3,

    /**
     * Defination of 4K which typically resolution is 4096*3840.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RESOLUTION_4K = 4
  }

  /**
   *
   * @interface AVQueueInfo
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface AVQueueInfo {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    avQueueName: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    avQueueId: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    avQueueImage: image.PixelMap | string;

    /**
     * The time when the user last played the playlist.
     * The time format can be system, such as 1611081385000, it means 2021-01-20 02:36:25.
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    lastPlayedTime?: long;
  }

  /**
   * 扩展参数枚举定义
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum ExtraKey {
    /**
     * 应用支持的能力集合设置
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    REQUIRE_ABILITY_LIST = 'requireAbilityList',

    /**
     * 支持资源投播
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SUPPORT_URL_CASTING = 'url-cast',

    /**
     * 支持在锁屏上显示实况窗
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    LIVE_VIEW_HIDDEN_WHEN_KEYGUARD = 'hw_live_view_hidden_when_keyguard',

    /**
     * DLNA 扩展参数 CurrentURIMetadata
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    DLNA_CURRENT_URI_METADATA = 'CurrentURIMetadata',

    /**
     * DLNA 扩展参数 DIDL-Lite
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    DLNA_DIDL_LITE = 'DIDL-Lite'
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVMetadata {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    assetId: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    title?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    artist?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    author?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 12 dynamic
     * @since 23 static
     */
    avQueueName?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    avQueueId?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    avQueueImage?: image.PixelMap | string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    album?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    writer?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    composer?: string;

    /**
     * The duration of this media, used to automatically calculate playback position
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    duration?: long;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    mediaImage?: image.PixelMap | string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 18 dynamic
     * @since 23 static
     */
    readonly bundleIcon?: image.PixelMap;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    publishDate?: Date;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    subtitle?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    description?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    lyric?: string;

    /**
     * The single lyric text of the media, not including time prefix
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    singleLyricText?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    previousAssetId?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    nextAssetId?: string;

    /**
     * The protocols supported by this session, if not set, the default is {@link TYPE_CAST_PLUS_STREAM}.
     * See {@link ProtocolType}
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    filter?: int;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 12 dynamic
     * @since 23 static
     */
    drmSchemes?: Array<string>;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    skipIntervals?: SkipIntervals;

    /**
     * The supported skipIntervals when doing rewind operation, the default is {@link SECONDS_15}.
     * The system will use this value for rewind skip intervals instead of {@link skipIntervals}.
     * If not set, the rewind skip intervals still use {@link skipIntervals}.
     * See {@link SkipIntervals}
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    rewindSkipIntervals?: SkipIntervals;

    /**
     * 执行快进操作时支持的skipIntervals，默认为{@link}。
     * 系统将为快进跳过间隔使用此值，而不是{@link SkipIntervals}。
     * 如果未设置，则快进跳过间隔仍然使用{@link SkipIntervals}。
     * 请参阅{@link SkipIntervals}
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    fastForwardSkipIntervals?: SkipIntervals;

    /**
     * The display tags supported by application to be displayed on media center
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    displayTags?: int;
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVMediaDescription {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    assetId: string;
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    title?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    subtitle?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    description?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    mediaImage?: image.PixelMap | string;
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @since 10 dynamic
     */
    extras?: {[key: string]: Object};

    /**
     * Any additional attributes that can be represented as key-value pairs
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    extras?: Record<string, Object>;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    mediaType?: string;

    /**
     * The size of this media.
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    mediaSize?: int;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    albumTitle?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    albumCoverUri?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    lyricContent?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    lyricUri?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    artist?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    mediaUri?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    fdSrc?: media.AVFileDescriptor;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 12 dynamic
     * @since 23 static
     */
    dataSrc?: media.AVDataSrcDescriptor;

    /**
     * 支持PCM投播的source类型，应用通过音频等接口直接播放，不需要通过AVSession设置数据。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    pcmSrc?: boolean;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 12 dynamic
     * @since 23 static
     */
    drmScheme?: string;

    /**
     * The duration of this media
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    duration?: int;

    /**
     * Media start position, described by milliseconds.
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    startPosition?: int;

    /**
     * Media credits position, described by milliseconds.
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    creditsPosition?: int;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    appName?: string;

    /**
     * The display tags supported by application to be displayed on media center
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    displayTags?: int;

    /**
     * 应用自定义的数据，投播时发送到接收端
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    launchClientData?: string;
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVQueueItem {
    /**
     * Sequence number of the item in the playlist.
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    itemId: int;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    description?: AVMediaDescription;
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVPlaybackState {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    state?: PlaybackState;

    /**
     * Current playback speed
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    speed?: double;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    position?: PlaybackPosition;

    /**
     * The current buffered time, the maximum playable position
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    bufferedTime?: long;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    loopMode?: LoopMode;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    isFavorite?: boolean;

    /**
     * Current active item id
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    activeItemId?: int;

    /**
     * Current player volume
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    volume?: int;

    /**
     * maximum  volume
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    maxVolume?: int;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    muted?: boolean;

    /**
     * The duration of this media asset.
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    duration?: int;

    /**
     * The video width of this media asset.
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    videoWidth?: int;

    /**
     * The video height of this media asset.
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    videoHeight?: int;

    /**
     * Current custom media packets
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    extras?: {[key: string]: Object};

    /**
     * Current custom media packets
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 23 static
     */
    extras?: Record<string, Object>;
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PlaybackPosition {
    /**
     * Elapsed time(position) of this media set by the app.
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    elapsedTime: long;

    /**
     * Record the system time when elapsedTime is set.
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    updateTime: long;
  }

  /**
   *
   * @interface CallMetadata [since 11 - 11]
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface CallMetadata {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    name?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    phoneNumber?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    avatar?: image.PixelMap;
  }

  /**
   *
   * @interface AVCallState [since 11 - 11]
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface AVCallState {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    state: CallState;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    muted: boolean;
  }

  /**
   * Enumeration of current call state
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  enum CallState {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CALL_STATE_IDLE = 0,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CALL_STATE_INCOMING = 1,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CALL_STATE_ACTIVE = 2,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CALL_STATE_DIALING = 3,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CALL_STATE_WAITING = 4,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CALL_STATE_HOLDING = 5,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CALL_STATE_DISCONNECTING = 6
  }

  /**
   * cast category indicating different playback scenes
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum AVCastCategory {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CATEGORY_LOCAL = 0,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CATEGORY_REMOTE = 1
  }
  /**
   * Device type definition
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum DeviceType {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_LOCAL = 0,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_TV = 2,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_SMART_SPEAKER = 3,

    /**
     *
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_BLUETOOTH = 10,

    /**
     * 设备类型为汽车。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    DEVICE_TYPE_CAR = 4,

    /**
     * 设备类型为pad。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    DEVICE_TYPE_PAD = 6,

    /**
     * 支持Cast+ Stream协议的默认设备。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    DEVICE_TYPE_DEFAULT_CAST_PLUS_STREAM = 7,

    /**
     * 设备类型为2in1。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    DEVICE_TYPE_2IN1 = 8,

    /**
     * 支持HiPlay协议的设备。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    DEVICE_TYPE_HIPLAY = 15,
  }

  /**
   * HiPlay 设备类型定义
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface HiPlayDeviceInfo {
    /**
     * 支持的Cast Mode，包含设备级和应用级投播
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    supportCastMode?: int;

    /**
     * HiPlay 投播模式，设备级和应用级
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    castMode?: int;

    /**
     * HiPlay 当前投播uid
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    castUid?: int;

    /**
     * 是否支持多设备连接能力。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    supportMultiDeviceMode?: int;
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface DeviceInfo {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    castCategory: AVCastCategory;
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * device type.
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    deviceType: DeviceType;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    manufacturer?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    modelName?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    networkId?: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    ipAddress?: string;

    /**
     * device provider which supplies the route capability.
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    providerId?: int;

    /**
     * The protocols supported by current device, can be union of {@link ProtocolType}.
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    supportedProtocols?: int;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    supportedDrmCapabilities?: Array<string>;

    /**
     * 设备是否支持拉端播放，包含拉端的id信息集合
     *
     *
     *
     *
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    supportedPullClients?: Array<int>;

    /**
     * Define different authentication status.
     * 0: Device not authenticated.
     * 1: Device already authenticated.
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    authenticationStatus?: int;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    isLegacy?: boolean;

    /**
     * Medium types used to discover devices.
     * 1: BLE
     * 2: COAP
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    mediumTypes?: int;

    /**
     * 返回设备支持的音频属性相关的能力
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    audioCapabilities?: AudioCapabilities;

    /**
     * HiPlay设备类型定义
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    hiPlayDeviceInfo?: HiPlayDeviceInfo;
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface OutputDeviceInfo {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    devices: Array<DeviceInfo>;
  }

  /**
   * Loop Play Mode Definition
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum LoopMode {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    LOOP_MODE_SEQUENCE = 0,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    LOOP_MODE_SINGLE = 1,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    LOOP_MODE_LIST = 2,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    LOOP_MODE_SHUFFLE = 3,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    LOOP_MODE_CUSTOM = 4
  }

  /**
   * Supported skip intervals definition
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum SkipIntervals {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    SECONDS_10 = 10,
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    SECONDS_15 = 15,
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    SECONDS_30 = 30
  }

  /**
   * 后台播放模式定义
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum BackgroundPlayMode {
    /**
     * 支持后台播放模式
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ENABLE_BACKGROUND_PLAY = 0,
    /**
     * 不支持后台播放模式
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DISABLE_BACKGROUND_PLAY = 1
  }

  /**
   * Definition of current playback state
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum PlaybackState {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_INITIAL = 0,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_PREPARE = 1,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_PLAY = 2,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_PAUSE = 3,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_FAST_FORWARD = 4,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_REWIND = 5,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_STOP = 6,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_COMPLETED = 7,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_RELEASED = 8,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_ERROR = 9,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_IDLE = 10,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_BUFFERING = 11
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi [since 9 - 22]
   * @publicapi [since 23]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AVSessionDescriptor {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @since 9 dynamic
     * @since 23 static
     */
    sessionId: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @since 9 dynamic
     * @since 23 static
     */
    type: AVSessionType;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @since 9 dynamic
     * @since 23 static
     */
    sessionTag: string;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @since 9 dynamic
     * @since 23 static
     */
    elementName: ElementName;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @since 9 dynamic
     * @since 23 static
     */
    isActive: boolean;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @since 9 dynamic
     * @since 23 static
     */
    isTopSession: boolean;

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    outputDevice: OutputDeviceInfo;

    /**
     * 当前会话所属的userId
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    userId?: int;
  }

  /**
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 18 dynamic
   */
  type ExtraInfo = {[key: string]: Object; };

  /**
   * The extra info object.
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 23 static
   */
  type ExtraInfo = Record<string, Object>;

  /**
   *
   * @interface AVSessionController [since 10 - 11]
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVSessionController {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly sessionId: string;

    /**
     *
     * @param { AsyncCallback<AVPlaybackState> } callback - The triggered asyncCallback when (getAVPlaybackState).
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getAVPlaybackState(callback: AsyncCallback<AVPlaybackState>): void;

    /**
     *
     * @returns { Promise<AVPlaybackState> } (AVPlaybackState) returned through promise
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAVPlaybackState(): Promise<AVPlaybackState>;

    /**
     *
     * @returns { AVPlaybackState } (AVPlaybackState) returned
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAVPlaybackStateSync(): AVPlaybackState;

    /**
     *
     * @param { AsyncCallback<AVMetadata> } callback - The triggered asyncCallback when (getAVMetadata).
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getAVMetadata(callback: AsyncCallback<AVMetadata>): void;

    /**
     *
     * @returns { Promise<AVMetadata> } (AVMetadata) returned through promise
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAVMetadata(): Promise<AVMetadata>;

    /**
     *
     * @returns { AVMetadata } (AVMetadata) returned
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAVMetadataSync(): AVMetadata;

    /**
     *
     * @param { AsyncCallback<AVCallState> } callback - The triggered asyncCallback when (getAVCallState).
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    getAVCallState(callback: AsyncCallback<AVCallState>): void;

    /**
     *
     * @returns { Promise<AVCallState> }      * @throws { BusinessError } 6600101
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    getAVCallState(): Promise<AVCallState>;

    /**
     *
     * @param { AsyncCallback<CallMetadata> } callback - The triggered asyncCallback when (getCallMetadata).
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    getCallMetadata(callback: AsyncCallback<CallMetadata>): void;

    /**
     *
     * @returns { Promise<CallMetadata> }      * @throws { BusinessError } 6600101
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    getCallMetadata(): Promise<CallMetadata>;

    /**
     *
     * @param { AsyncCallback<string> } callback - The triggered asyncCallback when (getAVQueueTitle).
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getAVQueueTitle(callback: AsyncCallback<string>): void;

    /**
     *
     * @returns { Promise<string> } (string) returned through promise
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAVQueueTitle(): Promise<string>;

    /**
     *
     * @returns { string } (string) returned
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAVQueueTitleSync(): string;

    /**
     *
     * @param { AsyncCallback<Array<AVQueueItem>> } callback - The triggered asyncCallback when (getAVQueueItems).
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getAVQueueItems(callback: AsyncCallback<Array<AVQueueItem>>): void;

    /**
     *
     * @returns { Promise<Array<AVQueueItem>> } (Array<AVQueueItem>) returned through promise
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAVQueueItems(): Promise<Array<AVQueueItem>>;

    /**
     *
     * @returns { Array<AVQueueItem> } (Array<AVQueueItem>) returned
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAVQueueItemsSync(): Array<AVQueueItem>;

    /**
     * Set the item in the playlist to be played
     * @param { int } itemId - The serial number of the item to be played
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    skipToQueueItem(itemId: int, callback: AsyncCallback<void>): void;

    /**
     * Set the item in the playlist to be played
     *
     * @param { int } itemId - The serial number of the item to be played
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    skipToQueueItem(itemId: int): Promise<void>;

    /**
     * Get output device information
     * @param { AsyncCallback<OutputDeviceInfo> } callback - The triggered asyncCallback when (getOutputDevice).
     * @throws { BusinessError } 600101 - Session service exception.
     * @throws { BusinessError } 600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getOutputDevice(callback: AsyncCallback<OutputDeviceInfo>): void;

    /**
     *
     * @returns { Promise<OutputDeviceInfo> } (OutputDeviceInfo) returned through promise
     * @throws { BusinessError } 600101 - Session service exception.
     * @throws { BusinessError } 600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getOutputDevice(): Promise<OutputDeviceInfo>;

    /**
     *
     * @returns { OutputDeviceInfo } (OutputDeviceInfo) returned
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getOutputDeviceSync(): OutputDeviceInfo;

    /**
     * 获取应用程序提供的支持速度。
     *
     * @returns { Promise<Array<double>> } Promise used to return Array<double>.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getSupportedPlaySpeeds(): Promise<Array<double>>;

    /**
     * 获取应用程序提供的支持的循环模式。
     *
     * @returns { Promise<Array<LoopMode>> } 支持通过promise返回的循环模式
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getSupportedLoopModes(): Promise<Array<LoopMode>>;

    /**
     *
     * @param { KeyEvent } event - The KeyEvent
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Parameter verification failed.
     * @throws { BusinessError } 600101 - Session service exception.
     * @throws { BusinessError } 600102 - The session does not exist.
     * @throws { BusinessError } 600103 - The session controller does not exist.
     * @throws { BusinessError } 600105 - Invalid session command.
     * @throws { BusinessError } 600106 - The session is not activated.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    sendAVKeyEvent(event: KeyEvent, callback: AsyncCallback<void>): void;

    /**
     *
     * @param { KeyEvent } event - The KeyEvent
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Parameter verification failed.
     * @throws { BusinessError } 600101 - Session service exception.
     * @throws { BusinessError } 600102 - The session does not exist.
     * @throws { BusinessError } 600103 - The session controller does not exist.
     * @throws { BusinessError } 600105 - Invalid session command.
     * @throws { BusinessError } 600106 - The session is not activated.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    sendAVKeyEvent(event: KeyEvent): Promise<void>;

    /**
     *
     * @param { AsyncCallback<WantAgent> } callback - The asyncCallback triggered when getting the WantAgent.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getLaunchAbility(callback: AsyncCallback<WantAgent>): void;

    /**
     *
     * @returns { Promise<WantAgent> } WantAgent promise
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getLaunchAbility(): Promise<WantAgent>;

    /**
     * Get the adjusted playback position. The time automatically calculated by the system
     * taking into account factors such as playback status, playback speed, and application update time.
     *
     * @returns { long } current playback position in ms.Note that the returns value of each call will be different.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getRealPlaybackPositionSync(): long;

    /**
     *
     * @param { AsyncCallback<boolean> } callback - The triggered asyncCallback when (isActive).
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    isActive(callback: AsyncCallback<boolean>): void;

    /**
     *
     * @returns { Promise<boolean> } boolean promise
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    isActive(): Promise<boolean>;

    /**
     *
     * @returns { boolean } boolean
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    isActiveSync(): boolean;

    /**
     *
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    destroy(callback: AsyncCallback<void>): void;

    /**
     *
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    destroy(): Promise<void>;

    /**
     *
     * @param { AsyncCallback<Array<AVControlCommandType>> } callback - The triggered asyncCallback when (getValidCommands).
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getValidCommands(callback: AsyncCallback<Array<AVControlCommandType>>): void;

    /**
     *
     * @returns { Promise<Array<AVControlCommandType>> } array of AVControlCommandType promise
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getValidCommands(): Promise<Array<AVControlCommandType>>;

    /**
     *
     * @returns {Array<AVControlCommandType> } array of AVControlCommandType
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getValidCommandsSync(): Array<AVControlCommandType>;

    /**
     *
     * @param { AVControlCommand } command - The command to be sent. See {@link AVControlCommand}
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @throws { BusinessError } 6600105 - Invalid session command.
     * @throws { BusinessError } 6600106 - The session is not activated.
     * @throws { BusinessError } 6600107 - Too many commands or events.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    sendControlCommand(command: AVControlCommand, callback: AsyncCallback<void>): void;

    /**
     *
     * @param { AVControlCommand } command - The command to be sent. See {@link AVControlCommand}
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @throws { BusinessError } 6600105 - Invalid session command.
     * @throws { BusinessError } 6600106 - The session is not activated.
     * @throws { BusinessError } 6600107 - Too many commands or events.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    sendControlCommand(command: AVControlCommand): Promise<void>;

    /**
     *
     * @param { string } command - The command name to be sent.
     * @param { object } args - The parameters of session event
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @throws { BusinessError } 6600105 - Invalid session command.
     * @throws { BusinessError } 6600106 - The session is not activated.
     * @throws { BusinessError } 6600107 - Too many commands or events.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @since 10 dynamic
     */
    sendCommonCommand(command: string, args: {[key: string]: Object}, callback: AsyncCallback<void>): void;

    /**
     * Send common commands to this session
     *
     * @param { string } command - The command name to be sent.
     *     <br>通用控制命令
     * @param { Record<string, Object> } args - The parameters of session event
     * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @throws { BusinessError } 6600105 - Invalid session command.
     * @throws { BusinessError } 6600106 - The session is not activated.
     * @throws { BusinessError } 6600107 - Too many commands or events.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 static
     */
    sendCommonCommand(command: string, args: Record<string, Object>, callback: AsyncCallback<void>): void;

    /**
     * Send common commands to this session
     *
     * @param { string } command - The command name to be sent.
     * @param { object } args - The parameters of session event
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @throws { BusinessError } 6600105 - Invalid session command.
     * @throws { BusinessError } 6600106 - The session is not activated.
     * @throws { BusinessError } 6600107 - Too many commands or events.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    sendCommonCommand(command: string, args: {[key: string]: Object}): Promise<void>;

    /**
     * Send common commands to this session
     * @param { string } command - The command name to be sent.
     * @param { Record<string, Object> } args - The parameters of session event
     * @returns { Promise<void> } void promise when executed successfully
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @throws { BusinessError } 6600105 - Invalid session command.
     * @throws { BusinessError } 6600106 - The session is not activated.
     * @throws { BusinessError } 6600107 - Too many commands or events.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 23 static
     */
    sendCommonCommand(command: string, args: Record<string, Object>): Promise<void>;

    /**
     * Send custom data to this avsession.
     * @param { Record<string, Object> } data - The custom data populated by application.
     * @returns { Promise<void> } void result promise when executed successfully
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    sendCustomData(data: Record<string, Object>): Promise<void>;

    /**
     *
     * @param { AsyncCallback<{[key: string]: Object}> } callback - The triggered asyncCallback when (getExtras).
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @throws { BusinessError } 6600105 - Invalid session command.
     * @throws { BusinessError } 6600107 - Too many commands or events.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @since 10 dynamic
     */
    getExtras(callback: AsyncCallback<{[key: string]: Object}>): void;

    /**
     * Get custom media packets provided by the corresponding session
     * @param { AsyncCallback<Record<string, Object>> } callback - The triggered asyncCallback when (getExtras).
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @throws { BusinessError } 6600105 - Invalid session command.
     * @throws { BusinessError } 6600107 - Too many commands or events.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    getExtras(callback: AsyncCallback<Record<string, Object>>): void;

    /**
     *
     *
     *
     *
     * @returns { Promise<{[key: string]: Object}> } the parameters of extras
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @throws { BusinessError } 6600105 - Invalid session command.
     * @throws { BusinessError } 6600107 - Too many commands or events.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    getExtras(): Promise<{[key: string]: Object}>;

    /**
     * Get custom media packets provided by the corresponding session
     *
     * @returns { Promise<Record<string, Object>> } 返回自定义的扩展数据
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @throws { BusinessError } 6600105 - Invalid session command.
     * @throws { BusinessError } 6600107 - Too many commands or events.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 23 static
     */
    getExtras(): Promise<Record<string, Object>>;

    /**
     * Get extra information for remote device, such as volume level, connected devices.
     * @param { string } extraEvent - the event name to get
     * @returns { Promise<ExtraInfo> } the value returned for such event
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @throws { BusinessError } 6600105 - Invalid session command.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 18 dynamic
     * @since 23 static
     */
    getExtrasWithEvent(extraEvent: string): Promise<ExtraInfo>;

    /**
     * 查询桌面歌词使能状态
     * @returns { Promise<boolean> } 返回桌面歌词使能状态
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @throws { BusinessError } 6600111 - The desktop lyrics feature is not supported.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isDesktopLyricEnabled(): Promise<boolean>;

    /**
     * 监听桌面歌词使能状态
     * @param { Callback<boolean> } callback - 桌面歌词使能状态回调
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onDesktopLyricEnabled(callback: Callback<boolean>): void;

    /**
     * 取消监听桌面歌词使能状态
     * @param { Callback<boolean> } [callback] - 桌面歌词使能状态回调
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offDesktopLyricEnabled(callback?: Callback<boolean>): void;

    /**
     * 设置桌面歌词显示和隐藏状态
     * @param { boolean } visible - 显示和隐藏状态
     * @returns { Promise<void> } 无返回值
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @throws { BusinessError } 6600110 - The desktop lyrics feature of this application is not enabled.
     * @throws { BusinessError } 6600111 - The desktop lyrics feature is not supported.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setDesktopLyricVisible(visible: boolean): Promise<void>;

    /**
     * 查询桌面歌词显示或者隐藏状态
     * @returns { Promise<boolean> } 返回显示或者隐藏状态
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @throws { BusinessError } 6600110 - The desktop lyrics feature of this application is not enabled.
     * @throws { BusinessError } 6600111 - The desktop lyrics feature is not supported.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isDesktopLyricVisible(): Promise<boolean>;

    /**
     * 注册桌面歌词显示或者隐藏状态
     * @param { Callback<boolean> } callback - a callback to receive desktop lyric window visible state.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onDesktopLyricVisibilityChanged(callback: Callback<boolean>): void;

    /**
     * 取消注册桌面歌词显示或者隐藏状态
     * @param { Callback<boolean> } [callback] - a callback to receive desktop lyric window visible state.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offDesktopLyricVisibilityChanged(callback?: Callback<boolean>): void;

    /**
     * 设置桌面歌词锁定等状态
     * @param { DesktopLyricState } state - 桌面歌词锁定等状态
     * @returns { Promise<void> } 无返回值
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @throws { BusinessError } 6600110 - The desktop lyrics feature of this application is not enabled.
     * @throws { BusinessError } 6600111 - The desktop lyrics feature is not supported.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setDesktopLyricState(state: DesktopLyricState): Promise<void>;

    /**
     * 返回桌面歌词锁定等状态
     * @returns { Promise<DesktopLyricState> } 无返回值
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @throws { BusinessError } 6600110 - The desktop lyrics feature of this application is not enabled.
     * @throws { BusinessError } 6600111 - The desktop lyrics feature is not supported.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    getDesktopLyricState(): Promise<DesktopLyricState>;

    /**
     * 注册桌面歌词锁定等状态回调
     * @param { Callback<DesktopLyricState> } callback - 桌面歌词锁定等状态回调
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onDesktopLyricStateChanged(callback: Callback<DesktopLyricState>): void;

    /**
     * 取消注册桌面歌词锁定等状态回调
     * @param { Callback<DesktopLyricState> } [callback] - 桌面歌词锁定等状态回调
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offDesktopLyricStateChanged(callback?: Callback<DesktopLyricState>): void;

    /**
     * 获取媒体播放器上可显示的媒体控制类型。
     *
     * @returns { Promise<Array<AVMediaCenterControlType>> } 应用设置要显示的控件类型
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getMediaCenterControlType(): Promise<Array<AVMediaCenterControlType>>;

    /**
     * 注册媒体中心控制类型改变回调。
     *
     * @param { Callback<Array<AVMediaCenterControlType>> } callback - 接收控件类型变化的回调。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onMediaCenterControlTypeChanged(callback: Callback<Array<AVMediaCenterControlType>>): void;

    /**
     * 注销媒体中心控制类型已更改回调。
     *
     * @param { Callback<Array<AVMediaCenterControlType>> } [callback] - 用于接收更改的控件类型的回调。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offMediaCenterControlTypeChanged(callback?: Callback<Array<AVMediaCenterControlType>>): void;

    /**
     *
     * @param { 'metadataChange' } type
     * @param { Array<keyof AVMetadata> | 'all' } filter - The properties of {@link AVMetadata} that you cared about
     * @param { function } callback - The callback used to handle metadata changed event.
     *     The callback function provides the {@link AVMetadata} parameter.
     *     It only contains the properties set in the filter.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'metadataChange', filter: Array<keyof AVMetadata> | 'all', callback: (data: AVMetadata) => void);

    /**
     * Register metadata changed callback
     * @param { Array<string> } filter - The properties of {@link AVMetadata} that you cared about
     * @param { Callback<AVMetadata> } callback - The callback used to handle metadata changed event.
     *     The callback function provides the {@link AVMetadata} parameter.
     *     It only contains the properties set in the filter.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onMetadataChange(filter: Array<string>, callback: Callback<AVMetadata>): void;

    /**
     * Register metadata changed callback
     * @param { Callback<AVMetadata> } callback - The callback used to handle metadata changed event.
     *     The callback function provides the {@link AVMetadata} parameter.
     *     It only contains the properties set in the filter.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onMetadataChangeAll(callback: Callback<AVMetadata>): void;

    /**
     *
     * @param { 'metadataChange' } type
     * @param { function } callback - The callback used to handle metadata changed event.
     *     The callback function provides the {@link AVMetadata} parameter.
     *     It only contains the properties set in the filter.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'metadataChange', callback?: (data: AVMetadata) => void);

    /**
     * Unregister metadata changed callback
     * @param { Callback<AVMetadata> } [callback] - The callback used to handle metadata changed event.
     *     The callback function provides the {@link AVMetadata} parameter.
     *     It only contains the properties set in the filter.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offMetadataChange(callback?: Callback<AVMetadata>): void;

    /**
     *
     * @param { 'playbackStateChange' } type
     * @param { Array<keyof AVPlaybackState> | 'all' } filter - The properties of {@link AVPlaybackState}
     *     that you cared about
     * @param { function } callback - The callback used to handle playback state changed event.
     *     The callback function provides the {@link AVPlaybackState} parameter.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'playbackStateChange', filter: Array<keyof AVPlaybackState> | 'all', callback: (state: AVPlaybackState) => void);

    /**
     * Register playback state changed callback
     * @param { Array<string> } filter - The properties of {@link AVPlaybackState}
     *     that you cared about
     * @param { Callback<AVPlaybackState> } callback - The callback used to handle playback state changed event.
     *     The callback function provides the {@link AVPlaybackState} parameter.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onPlaybackStateChange(filter: Array<string>, callback: Callback<AVPlaybackState>): void;

    /**
     * Register playback state changed callback
     * @param { Callback<AVPlaybackState> } callback - The callback used to handle playback state changed event.
     *     The callback function provides the {@link AVPlaybackState} parameter.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onPlaybackStateChangeAll(callback: Callback<AVPlaybackState>): void;

    /**
     *
     * @param { 'playbackStateChange' } type
     * @param { function } callback - The callback used to handle playback state changed event.
     *     The callback function provides the {@link AVPlaybackState} parameter.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'playbackStateChange', callback?: (state: AVPlaybackState) => void);

    /**
     * Unregister playback state changed callback
     * @param { Callback<AVPlaybackState> } [callback] - The callback used to handle playback state changed event.
     *     The callback function provides the {@link AVPlaybackState} parameter.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offPlaybackStateChange(callback?: Callback<AVPlaybackState>): void;

    /**
     * Register call metadata changed callback
     *
     * @param { 'callMetadataChange' } type - 'callMetadataChange'
     * @param { Array<keyof CallMetadata> | 'all' } filter - The properties of {@link CallMetadata} that you cared about
     * @param { Callback<CallMetadata> } callback - The callback used to handle call metadata changed event.
     *     The callback function provides the {@link CallMetadata} parameter.
     *     It only contains the properties set in the filter.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'callMetadataChange', filter: Array<keyof CallMetadata> | 'all', callback: Callback<CallMetadata>): void;

    /**
     * Register call metadata changed callback
     * @param { Array<string> } filter - The properties of {@link CallMetadata} that you cared about
     * @param { Callback<CallMetadata> } callback - The callback used to handle call metadata changed event.
     *     The callback function provides the {@link CallMetadata} parameter.
     *     It only contains the properties set in the filter.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onCallMetadataChange(filter: Array<string>, callback: Callback<CallMetadata>): void;

    /**
     * Register call metadata changed callback
     * @param { Callback<CallMetadata> } callback - The callback used to handle call metadata changed event.
     *     The callback function provides the {@link CallMetadata} parameter.
     *     It only contains the properties set in the filter.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onCallMetadataChangeAll(callback: Callback<CallMetadata>): void;

    /**
     * Unregister call metadata changed callback
     *
     * @param { 'callMetadataChange' } type - 'callMetadataChange'
     * @param { Callback<CallMetadata> } callback - The callback used to handle call metadata changed event.
     *     The callback function provides the {@link CallMetadata} parameter.
     *     It only contains the properties set in the filter.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'callMetadataChange', callback?: Callback<CallMetadata>): void;

    /**
     * Unregister call metadata changed callback
     * @param { Callback<CallMetadata> } [callback] - The callback used to handle call metadata changed event.
     *     The callback function provides the {@link CallMetadata} parameter.
     *     It only contains the properties set in the filter.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offCallMetadataChange(callback?: Callback<CallMetadata>): void;

    /**
     * Register call state changed callback
     *
     * @param { 'callStateChange' } type - 'callStateChange'
     * @param { Array<keyof AVCallState> | 'all' } filter - The properties of {@link AVCallState} that you cared about
     * @param { Callback<AVCallState> } callback - The callback used to handle call state changed event.
     *     The callback function provides the {@link AVCallState} parameter.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'callStateChange', filter: Array<keyof AVCallState> | 'all', callback: Callback<AVCallState>): void;

    /**
     * Register call state changed callback
     * @param { Array<string> } filter - The properties of {@link AVCallState} that you cared about
     * @param { Callback<AVCallState> } callback - The callback used to handle call state changed event.
     *     The callback function provides the {@link AVCallState} parameter.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onCallStateChange(filter: Array<string>, callback: Callback<AVCallState>): void;

    /**
     * Register call state changed callback
     * @param { Callback<AVCallState> } callback - The callback used to handle call state changed event.
     *     The callback function provides the {@link AVCallState} parameter.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onCallStateChangeAll(callback: Callback<AVCallState>): void;

    /**
     * Unregister playback state changed callback
     *
     * @param { 'callStateChange' } type - 'callStateChange'
     * @param { Callback<AVCallState> } callback - The callback used to handle call state changed event.
     *     The callback function provides the {@link AVCallState} parameter.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'callStateChange', callback?: Callback<AVCallState>): void;

    /**
     * Unregister playback state changed callback
     * @param { Callback<AVCallState> } [callback] - The callback used to handle call state changed event.
     *     The callback function provides the {@link AVCallState} parameter.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offCallStateChange(callback?: Callback<AVCallState>): void;

    /**
     * Register current session destroyed callback
     *
     * @param { 'sessionDestroy' } type
     * @param { function } callback - The callback used to handle current session destroyed event.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'sessionDestroy', callback: () => void);

    /**
     * Register current session destroyed callback
     * @param { NoParamCallback } callback - The callback used to handle current session destroyed event.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onSessionDestroy(callback: NoParamCallback): void;

    /**
     *
     * @param { 'sessionDestroy' } type - 'sessionDestroy'
     * @param { function } callback - The callback used to handle current session destroyed event.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'sessionDestroy', callback?: () => void);

    /**
     * Unregister current session destroyed callback
     * @param { NoParamCallback } [callback] - The callback used to handle current session destroyed event.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offSessionDestroy(callback?: NoParamCallback): void;

    /**
     *
     * @param { 'activeStateChange' } type - 'activeStateChange'
     * @param { function } callback - The callback used to handle the active state of this session changed event.
     *     The callback function provides the changed session state.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'activeStateChange', callback: (isActive: boolean) => void);

    /**
     * Register the active state of this session changed callback
     * @param { Callback<boolean> } callback - The callback used to handle the active state of this session changed event.
     *     The callback function provides the changed session state.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onActiveStateChange(callback: Callback<boolean>): void;

    /**
     *
     * @param { 'activeStateChange' } type - 'activeStateChange'
     * @param { function } callback - The callback used to handle the active state of this session changed event.
     *     The callback function provides the changed session state.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'activeStateChange', callback?: (isActive: boolean) => void);

    /**
     * Unregister the active state of this session changed callback
     * @param { Callback<boolean> } [callback] - The callback used to handle the active state of this session changed event.
     *     The callback function provides the changed session state.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offActiveStateChange(callback?: Callback<boolean>): void;

    /**
     *
     * @param { 'validCommandChange' } type - 'validCommandChange'
     * @param { function } callback - The callback used to handle the changes.
     *     The callback function provides an array of AVControlCommandType.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'validCommandChange', callback: (commands: Array<AVControlCommandType>) => void);

    /**
     * Register the valid commands of the session changed callback
     * @param { Callback<Array<AVControlCommandType>> } callback - The callback used to handle the changes.
     *     The callback function provides an array of AVControlCommandType.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onValidCommandChange(callback: Callback<Array<AVControlCommandType>>): void;

    /**
     *
     * @param { 'validCommandChange' } type - 'validCommandChange'
     * @param { function } callback - The callback used to handle the changes.
     *     The callback function provides an array of AVControlCommandType.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'validCommandChange', callback?: (commands: Array<AVControlCommandType>) => void);

    /**
     * Unregister the valid commands of the session changed callback
     * @param { Callback<Array<AVControlCommandType>> } [callback] - The callback used to handle the changes.
     *     The callback function provides an array of AVControlCommandType.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offValidCommandChange(callback?: Callback<Array<AVControlCommandType>>): void;

    /**
     * Register session output device change callback
     *
     * @param { 'outputDeviceChange' } type - Registration Type 'outputDeviceChange'
     * @param { function } callback - Used to handle output device changed.
     *     The callback provide the new device info {@link OutputDeviceInfo} and related connection state {@link
     *     ConnectionState}.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'outputDeviceChange', callback: (state: ConnectionState, device: OutputDeviceInfo) => void): void;

    /**
     * Register session output device change callback
     * @param { ConnectionEvent } callback - Used to handle output device changed.
     *     The callback provide the new device info {@link OutputDeviceInfo}
     *     and related connection state {@link ConnectionState}.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onOutputDeviceChange(callback: ConnectionEvent): void;

    /**
     * Unregister session output device change callback
     *
     * @param { 'outputDeviceChange' } type - Registration Type 'outputDeviceChange'
     * @param { function } callback - Used to handle output device changed.
     *     The callback provide the new device info {@link OutputDeviceInfo} and related connection state {@link
     *     ConnectionState}.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'outputDeviceChange', callback?: (state: ConnectionState, device: OutputDeviceInfo) => void): void;

    /**
     * Unregister session output device change callback
     * @param { ConnectionEvent } [callback] - Used to handle output device changed.
     *     The callback provide the new device info {@link OutputDeviceInfo}
     *     and related connection state {@link ConnectionState}.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offOutputDeviceChange(callback?: ConnectionEvent): void;

    /**
     *
     * @param { 'sessionEvent' } type - 'sessionEvent'
     * @param { function } callback - The callback used to handle session event changed event.
     *     The callback function provides the event string and key-value pair parameters.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'sessionEvent', callback: (sessionEvent: string, args: {[key: string]: Object}) => void): void;

    /**
     * Register session event callback
     * @param { EventProcess } callback - The callback used to handle session event changed event.
     *     The callback function provides the event string and key-value pair parameters.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onSessionEvent(callback: EventProcess): void;

    /**
     *
     * @param { 'sessionEvent' } type - 'sessionEvent'
     * @param { function } callback - Used to cancel a specific listener
     *     The callback function provides the event string and key-value pair parameters.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'sessionEvent', callback?: (sessionEvent: string, args: {[key: string]: Object}) => void): void;

    /**
     * Unregister session event callback
     * @param { EventProcess } [callback] - Used to cancel a specific listener
     *     The callback function provides the event string and key-value pair parameters.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offSessionEvent(callback?: EventProcess): void;

    /**
     * Register session playlist change callback
     *
     * @param { 'queueItemsChange' } type - Registration Type 'queueItemsChange'
     * @param { function } callback - Used to handle playlist changed.
     *     The callback provides the new array of AVQueueItem {@link AVQueueItem}
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'queueItemsChange', callback: (items: Array<AVQueueItem>) => void): void;

    /**
     * Register session playlist change callback
     * @param { Callback<Array<AVQueueItem>> } callback - Used to handle playlist changed.
     *     The callback provides the new array of AVQueueItem {@link AVQueueItem}
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onQueueItemsChange(callback: Callback<Array<AVQueueItem>>): void;

    /**
     * Unregister session playlist change callback
     *
     * @param { 'queueItemsChange' } type - Registration Type 'queueItemsChange'
     * @param { function } callback - Used to handle playlist changed.
     *     The callback provides the new array of AVQueueItem {@link AVQueueItem}
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'queueItemsChange', callback?: (items: Array<AVQueueItem>) => void): void;

    /**
     * Unregister session playlist change callback
     * @param { Callback<Array<AVQueueItem>> } [callback] - Used to handle playlist changed.
     *     The callback provides the new array of AVQueueItem {@link AVQueueItem}
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 23 static
     */
    offQueueItemsChange(callback?: Callback<Array<AVQueueItem>>): void;

    /**
     * Register the name of session playlist change callback
     *
     * @param { 'queueTitleChange' } type - Registration Type 'queueTitleChange'
     * @param { function } callback - Used to handle name of playlist changed.
     *     The callback provides the new name.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'queueTitleChange', callback: (title: string) => void): void;

    /**
     * Register the name of session playlist change callback
     * @param { Callback<string> } callback - Used to handle name of playlist changed.
     *     The callback provides the new name.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onQueueTitleChange(callback: Callback<string>): void;

    /**
     * Unregister the name of session playlist change callback
     *
     * @param { 'queueTitleChange' } type - Registration Type 'queueTitleChange'
     * @param { function } callback - Used to handle name of playlist changed.
     *     The callback provides the new name.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'queueTitleChange', callback?: (title: string) => void): void;

    /**
     * Unregister the name of session playlist change callback
     * @param { Callback<string> } [callback] - Used to handle name of playlist changed.
     *     The callback provides the new name.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offQueueTitleChange(callback?: Callback<string>): void;

    /**
     *
     * @param { 'extrasChange' } type - Registration Type 'extrasChange'
     * @param { function } callback - Used to handle custom media packets changed.
     *     The callback provides the new media packets.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'extrasChange', callback: (extras: {[key: string]: Object}) => void): void;

    /**
     * Register the custom media packets change callback
     * @param { Callback<Record<string, Object>> } callback - Used to handle custom media packets changed.
     *     The callback provides the new media packets.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    onExtrasChange(callback: Callback<Record<string, Object>>): void;

    /**
     *
     * @param { 'extrasChange' } type - Registration Type 'extrasChange'
     * @param { function } callback - Used to handle custom media packets changed.
     *     The callback provides the new media packets.
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @FaAndStageModel
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'extrasChange', callback?: (extras: {[key: string]: Object}) => void): void;

    /**
     * Unregister the custom media packets change callback
     * @param { Callback<Record<string, Object>> } [callback] - Used to handle custom media packets changed.
     *     The callback provides the new media packets.
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 23 static
     */
    offExtrasChange(callback?: Callback<Record<string, Object>>): void;

    /**
     * Register listener for custom data.
     * @param { 'customDataChange' } type - Type of the 'customDataChange' to listen for.
     * @param { Callback<Record<string, Object>> } callback - Callback used to retrieve custom data.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'customDataChange', callback: Callback<Record<string, Object>>): void;

    /**
     * Register listener for custom data.
     * @param { Callback<Record<string, Object>> } callback - Callback used to retrieve custom data.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    onCustomDataChange(callback: Callback<Record<string, Object>>): void;

    /**
     * Unregister listener for custom data.
     * @param { 'customDataChange' } type - Type of the 'customDataChange' to listen for.
     * @param { Callback<Record<string, Object>> } [callback] - Callback used to retrieve custom data.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'customDataChange', callback?: Callback<Record<string, Object>>): void;

    /**
     * Unregister listener for custom data.
     * @param { Callback<Record<string, Object>> } [callback] - Callback used to retrieve custom data.
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 23 static
     */
    offCustomDataChange(callback?: Callback<Record<string, Object>>): void;

    /**
     * 为支持的播放速度注册监听器。
     *
     * @param { Callback<Array<double>> } callback - 用于检索支持的播放速度的回调
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    onSupportedPlaySpeedsChange(callback: Callback<Array<double>>): void;

    /**
     * 为支持的播放速度取消注册侦听器。
     *
     * @param { Callback<Array<double>> } [callback] - 用于检索支持的播放速度的回调
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    offSupportedPlaySpeedsChange(callback?: Callback<Array<double>>): void;

    /**
     * 为支持的循环模式注册监听器。
     *
     * @param { Callback<Array<LoopMode>> } callback - 用于检索支持的循环模式的回调。
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    onSupportedLoopModesChange(callback: Callback<Array<LoopMode>>): void;

    /**
     * 为支持的循环模式注销侦听器。
     *
     * @param { Callback<Array<LoopMode>> } [callback] - 用于检索支持的循环模式的回调。
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    offSupportedLoopModesChange(callback?: Callback<Array<LoopMode>>): void;
  }

  /**
   * The type of control command
   *
   * @unionmember { 'play' } Play the current media. [since 10]
   * @unionmember { 'pause' } Pause the current media. [since 10]
   * @unionmember { 'stop' } Stop the current media. [since 10]
   * @unionmember { 'playNext' } Play the next media in the queue. [since 10]
   * @unionmember { 'playPrevious' } Play the previous media in the queue. [since 10]
   * @unionmember { 'fastForward' } Fast forward the current media. [since 10]
   * @unionmember { 'rewind' } Rewind the current media. [since 10]
   * @unionmember { 'seek' } Seek to a specific position in the media. [since 10]
   * @unionmember { 'setSpeed' } Set the playback speed. [since 10]
   * @unionmember { 'setLoopMode' } Set the loop mode for the media. [since 10]
   * @unionmember { 'toggleFavorite' } Toggle the favorite status of the current media. [since 10]
   * @unionmember { 'playFromAssetId' } Play media specified by an asset ID. [since 11]
   * @unionmember { 'playWithAssetId' } Play media with an asset ID (dynamic support). [since 20]
   * @unionmember { 'answer' } Answer an incoming call. [since 11]
   * @unionmember { 'hangUp' } Hang up the current call. [since 11]
   * @unionmember { 'toggleCallMute' } Toggle the mute status of the call. [since 11]
   * @unionmember { 'setTargetLoopMode' } Set the target loop mode. [since 18]
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  type AVControlCommandType = 'play' | 'pause' | 'stop' | 'playNext' | 'playPrevious' | 'fastForward' | 'rewind' |
  'seek' | 'setSpeed' | 'setLoopMode' | 'toggleFavorite' | 'playFromAssetId' | 'playWithAssetId' | 'answer' | 'hangUp' | 'toggleCallMute' | 'setTargetLoopMode';

  /**
   * 应用可选择设置优先级的播控组件类型
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type AVMediaCenterControlType = 'playNext' | 'playPrevious' | 'fastForward' | 'rewind' | 'setSpeed' | 'setLoopMode' |
    'toggleFavorite';

  /**
   *
   * @interface AVControlCommand [since 10 - 11]
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVControlCommand {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    command: AVControlCommandType;

    /**
     * parameter of the command. Whether this command requires parameters, see {@link AVSessionCommand}
     * seek command requires a number parameter
     * setSpeed command requires a number parameter
     * setLoopMode command requires a {@link LoopMode} parameter.
     * toggleFavorite command requires assetId {@link AVMetadata.assetId} parameter
     * other commands need no parameter
     *
     * @type { ?(LoopMode | string | number) } [since 10 - 11]
     * @type { ?(LoopMode | string | double) } [since 12]
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    parameter?: LoopMode | string | double;

    /**
     * 控制命令的来源信息参数
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    commandInfo?: CommandInfo;
  }

  /**
   * 控制方发送的额外命令信息
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 22 dynamic
   * @since 23 static
   */
  interface CommandInfo {
    /**
     * 调用者类型
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    callerBundleName?: string;

    /**
     * 调用者模块名
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    callerModuleName?: string;

    /**
     * 调用方设备id信息
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    callerDeviceId?: string;

    /**
     * 发送控制命令的来源
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    callerType?: CallerType;
  }

  /**
   * 播控控制者的来源类型。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 22 dynamic
   * @since 23 static
   */
  enum CallerType {
    /**
     * 来自cast+服务的控制
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    TYPE_CAST = 'cast',

    /**
     * 控制命令来自蓝牙设备
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    TYPE_BLUETOOTH = 'bluetooth',

    /**
     * 控制命令来自星闪设备
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    TYPE_NEARLINK = 'nearlink',

    /**
     * 控制命令来自应用
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    TYPE_APP = 'app'
  }

  /**
   * Enumerates ErrorCode types, returns in BusinessError.code.
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum AVSessionErrorCode {
    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_SERVICE_EXCEPTION = 6600101,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_SESSION_NOT_EXIST = 6600102,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_CONTROLLER_NOT_EXIST = 6600103,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_REMOTE_CONNECTION_ERR = 6600104,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_COMMAND_INVALID = 6600105,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_SESSION_INACTIVE = 6600106,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_MESSAGE_OVERLOAD = 6600107,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_DEVICE_CONNECTION_FAILED = 6600108,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_REMOTE_CONNECTION_NOT_EXIST = 6600109,

    /**
     * 应用未使能桌面歌词特性
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    ERR_CODE_DESKTOP_LYRIC_NOT_ENABLED = 6600110,

    /**
     * 系统桌面歌词特性不支持
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    ERR_CODE_DESKTOP_LYRIC_NOT_SUPPORTED = 6600111,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_UNSPECIFIED = 6611000,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_REMOTE_ERROR = 6611001,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_BEHIND_LIVE_WINDOW = 6611002,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_TIMEOUT = 6611003,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_RUNTIME_CHECK_FAILED = 6611004,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_PLAYER_NOT_WORKING = 6611100,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_SEEK_MODE_UNSUPPORTED = 6611101,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_ILLEGAL_SEEK_TARGET = 6611102,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_PLAY_MODE_UNSUPPORTED = 6611103,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_PLAY_SPEED_UNSUPPORTED = 6611104,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DEVICE_MISSING = 6611105,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_INVALID_PARAM = 6611106,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_NO_MEMORY = 6611107,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_OPERATION_NOT_ALLOWED = 6611108,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_UNSPECIFIED = 6612000,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_NETWORK_CONNECTION_FAILED = 6612001,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_NETWORK_CONNECTION_TIMEOUT = 6612002,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_INVALID_HTTP_CONTENT_TYPE = 6612003,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_BAD_HTTP_STATUS = 6612004,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_FILE_NOT_FOUND = 6612005,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_NO_PERMISSION = 6612006,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_CLEARTEXT_NOT_PERMITTED = 6612007,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_READ_POSITION_OUT_OF_RANGE = 6612008,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_NO_CONTENTS = 6612100,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_READ_ERROR = 6612101,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_CONTENT_BUSY = 6612102,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_CONTENT_EXPIRED = 6612103,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_USE_FORBIDDEN = 6612104,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_NOT_VERIFIED = 6612105,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_EXHAUSTED_ALLOWED_USES = 6612106,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_NETWORK_PACKET_SENDING_FAILED = 6612107,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_PARSING_UNSPECIFIED = 6613000,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_PARSING_CONTAINER_MALFORMED = 6613001,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_PARSING_MANIFEST_MALFORMED = 6613002,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_PARSING_CONTAINER_UNSUPPORTED = 6613003,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_PARSING_MANIFEST_UNSUPPORTED = 6613004,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DECODING_UNSPECIFIED = 6614000,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DECODING_INIT_FAILED = 6614001,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DECODING_QUERY_FAILED = 6614002,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DECODING_FAILED = 6614003,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DECODING_FORMAT_EXCEEDS_CAPABILITIES = 6614004,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DECODING_FORMAT_UNSUPPORTED = 6614005,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_AUDIO_RENDERER_UNSPECIFIED = 6615000,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_AUDIO_RENDERER_INIT_FAILED = 6615001,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_AUDIO_RENDERER_WRITE_FAILED = 6615002,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_UNSPECIFIED = 6616000,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_SCHEME_UNSUPPORTED = 6616001,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_PROVISIONING_FAILED = 6616002,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_CONTENT_ERROR = 6616003,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_LICENSE_ACQUISITION_FAILED = 6616004,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_DISALLOWED_OPERATION = 6616005,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_SYSTEM_ERROR = 6616006,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_DEVICE_REVOKED = 6616007,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_LICENSE_EXPIRED = 6616008,

    /**
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_PROVIDE_KEY_RESPONSE_ERROR = 6616100,
  }
}

export default avSession;