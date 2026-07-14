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
   * 创建会话对象，一个应用程序仅允许存在一个会话，重复创建会失败，结果通过callback异步回调方式返回。
   * 
   * > **说明：**
   * >
   * > - 在业务执行阶段需要保持avsession对象存活，避免后台管控静音、设备选择异常、通知/锁屏/胶囊播控卡片显示异常等情况。
   *
   * @param { Context } context - 需要使用UIAbilityContext，用于系统获取应用组件的相关信息。
   * @param { string } tag - 会话的自定义名称。
   * @param { AVSessionType } type - 会话类型。
   * @param { AsyncCallback<AVSession> } callback - 回调函数。回调返回会话实例对象，可用于获取会话ID，以及设置元数据、播放状态，发送按键事件等操作。
   * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
   * 2.Parameter verification failed.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function createAVSession(context: Context, tag: string, type: AVSessionType, callback: AsyncCallback<AVSession>): void;

  /**
   * 创建会话对象，一个应用进程仅允许存在一个会话，重复创建会失败，结果通过Promise异步回调方式返回。
   * 
   * > **说明：**
   * >
   * > - 在业务执行阶段需要保持avsession对象存活，避免后台管控静音、设备选择异常、通知/锁屏/胶囊播控卡片显示异常等情况。
   *
   * @param { Context } context - 需要使用UIAbilityContext，用于系统获取应用组件的相关信息。
   * @param { string } tag - 会话的自定义名称。
   * @param { AVSessionType } type - 会话类型。
   * @returns { Promise<AVSession> } Promise对象。回调返回会话实例对象，可用于获取会话ID，以及设置元数据、播放状态，发送按键事件等操作。
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
   * 获取会话对象。使用Promise异步回调。
   * 
   * 该接口可将当前进程已创建过的会话对象返回，如果没有创建过会话对象，该接口调用会失败并抛出异常。
   *
   * @param { Context } context - 需要使用UIAbilityContext，用于系统获取应用组件的相关信息。
   * @returns { Promise<AVSession> } Promise对象。回调返回会话实例对象，可用于获取会话ID、设置元数据及播放状态、发送按键事件等操作。
   * @throws { BusinessError } 6600101 - Session service exception.
   * @throws { BusinessError } 6600102 - The session does not exist.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 24 static
   */
  function getAVSession(context: Context): Promise<AVSession>;

  /**
   * 获取所有设置过媒体信息且注册过控制回调的会话的描述符信息。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { AsyncCallback<Array<Readonly<AVSessionDescriptor>>> } callback - 回调函数。返回所有会话描述的只读对象。
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
   * 获取所有设置过媒体信息且注册过控制回调的会话的描述符信息。结果通过Promise异步回调方式返回。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES [since 9 - 22]
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES or ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC [since 23]
   * @returns { Promise<Array<Readonly<AVSessionDescriptor>>> } Promise对象。返回所有会话描述的只读对象。
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
   * 根据不同的会话类别获取对应的会话描述。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { SessionCategory } category - 指定会话的类别。
   * @returns { Promise<Array<Readonly<AVSessionDescriptor>>> } Promise对象。返回对应类别的会话描述的只读对象。
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
   * 获取所有已被销毁的会话相关描述。结果通过callback异步回调方式返回。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { int } maxSize - 指定获取描述符数量的最大值，可选范围是0-10。
   * @param { AsyncCallback<Array<Readonly<AVSessionDescriptor>>> } callback - 回调函数。返回所有会话描述的只读对象。
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
   * 获取所有已被销毁的会话相关描述。结果通过Promise异步回调方式返回。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { int } maxSize - 指定获取描述符数量的最大值，可选范围是0-10，不填则取默认值，默认值为3。
   * @returns { Promise<Array<Readonly<AVSessionDescriptor>>> } Promise对象。返回所有会话描述的只读对象。
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
   * 获取全部的历史播放歌单。结果通过callback异步回调方式返回。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { int } maxSize - 指定获取歌曲列表数量的最大值，暂与获取歌单数量无关。
   * @param { int } maxAppSize - 指定获取歌曲列表所属应用数量的最大值，暂与获取歌单数量无关。
   * @param { AsyncCallback<Array<Readonly<AVQueueInfo>>> } callback - 回调函数。返回所有历史播放歌单的只读对象。
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
   * 获取全部的历史播放歌单。结果通过Promise异步回调方式返回。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { int } maxSize - 指定获取歌曲列表数量的最大值，暂与获取歌单数量无关。
   * @param { int } maxAppSize - 指定获取歌曲列表所属应用数量的最大值，暂与获取歌单数量无关。
   * @returns { Promise<Array<Readonly<AVQueueInfo>>> } Promise对象。返回所有历史播放歌单的只读对象。
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
   * 根据会话ID创建会话控制器。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { string } sessionId - 会话ID。
   * @param { AsyncCallback<AVSessionController> } callback - 回调函数。返回会话控制器实例，可查看会话ID，
   *     <br>并完成对会话发送命令及事件，获取元数据、播放状态信息等操作。
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
   * 根据会话ID创建会话控制器。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES [since 9 - 22]
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES or ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC [since 23]
   * @param { string } sessionId - 会话ID。
   * @returns { Promise<AVSessionController> } Promise对象。返回会话控制器实例，可查看会话ID，
   *     <br>并完成对会话发送命令及事件，获取元数据、播放状态信息等操作。
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
   * 投播会话到指定设备列表。结果通过callback异步回调方式返回。
   * 
   * 需要导入`ohos.multimedia.audio`模块获取AudioDeviceDescriptor的相关描述。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { SessionToken | 'all' } session - 会话令牌。SessionToken表示单个token；字符串`'all'`指所有token。
   * @param { Array<audio.AudioDeviceDescriptor> } audioDevices - 媒体设备列表。
   * @param { AsyncCallback<void> } callback - 回调函数。当投播成功，err为undefined，否则返回错误对象。
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
   * 投播会话到指定设备列表。结果通过Promise异步回调方式返回。
   * 
   * 调用此接口之前，需要导入`ohos.multimedia.audio`模块获取AudioDeviceDescriptor的相关描述。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { SessionToken | 'all' } session - 会话令牌。SessionToken表示单个token；字符串`'all'`指所有token。
   * @param { Array<audio.AudioDeviceDescriptor> } audioDevices - 媒体设备列表。
   * @returns { Promise<void> } Promise对象。当投播成功，无返回结果，否则返回错误对象。
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
   * 启动媒体播放应用程序。结果通过Promise异步回调方式返回。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { string } bundleName - 指定应用包名。
   * @param { string } assetId - 指定媒体ID。
   * @returns { Promise<void> } Promise对象。当播放成功，无返回结果，否则返回错误对象。
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
   * 根据远端会话类型，获取远端分布式会话控制器。结果通过Promise异步回调方式返回。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { DistributedSessionType } distributedSessionType - 远端会话类型。
   * @returns { Promise<Array<AVSessionController>> } Promise对象。返回对应类型的会话控制器实例列表，可查看会话ID，并完成对会话发送命令及事件，获取元数据、播放状态信息等操作。
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
   * 设备是否支持桌面歌词功能。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } - Promise对象。返回true表示设备支持桌面歌词功能；返回false表示设备不支持桌面歌词功能。
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isDesktopLyricSupported(): Promise<boolean>;

  /**
   * 桌面歌词状态。
   *
   * @typedef DesktopLyricState
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface DesktopLyricState {
    /**
     * 桌面歌词位置是否锁定。true表示已锁定，false表示未锁定。若已锁定，桌面显示歌词后，固定当前位置，不可被拖拽。
     *
     * @type { boolean } Boolean type. The value true means that desktop lyric is locked.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isLocked: boolean;
  }

  /**
   * 表示不同场景会话类别的枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 22 dynamic
   * @since 24 static
   */
  enum SessionCategory {
    /**
     * 允许在系统控制入口显示的会话类别。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 22 dynamic
     * @since 24 static
     */
    CATEGORY_ACTIVE = 1,

    /**
     * 禁止在系统控制入口显示的会话类别。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 22 dynamic
     * @since 24 static
     */
    CATEGORY_NOT_ACTIVE = 2,

    /**
     * 所有会话类别。
     *
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
   * 会话令牌的信息。
   *
   * @typedef SessionToken
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface SessionToken {
    /**
     * 会话ID。
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
     * 会话的进程ID。
     *
     * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
     * @type { ?long }
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pid?: long;

    /**
     * 用户ID。
     *
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
   * 会话的创建事件监听。 使用callback异步回调。
   *
   * @param { 'sessionCreate' } type - 事件回调类型，支持的事件是'sessionCreate'：会话创建事件，检测到会话创建时触发。
   * @param { function } callback - 回调函数。参数为会话相关描述。
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
   * 会话的销毁事件监听。使用callback异步回调。
   *
   * @param { 'sessionDestroy' } type - 事件回调类型，支持的事件是`'sessionDestroy'`：会话销毁事件，检测到会话销毁时触发。
   * @param { function } callback - 回调函数。参数为会话相关描述。
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
   * 最新播放会话变更的事件监听。使用callback异步回调。
   *
   * @param { 'topSessionChange' } type - 事件回调类型，支持的事件是 `'topSessionChange'`：最新播放会话的变化事件，检测到最新的会话改变时触发。
   * @param { function } callback - 回调函数。参数为会话相关描述。
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
   * 注销会话创建事件监听。注销后，不再接收该事件。
   *
   * @param { 'sessionCreate' } type - 事件回调类型，支持的事件为：`'sessionCreate'`。
   * @param { function } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
   *     <br>该参数为会话相关描述，为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
   * 允许在系统控制入口显示的会话变更的监听事件。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { Callback<Array<AVSessionDescriptor>> } callback - 回调函数。参数为允许在系统控制入口显示的会话信息列表。
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 23 dynamic&static
   */
  function onActiveSessionChanged(callback: Callback<Array<AVSessionDescriptor>>): void;

  /**
   * 取消允许在系统控制入口显示的会话变更事件监听，取消后将不再对该事件进行监听。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { Callback<Array<AVSessionDescriptor>> } [callback] - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
   *     <br>该参数为可选参数，若不填写该参数，则认为取消所有允许在系统控制入口显示的会话变更事件监听。
   * @throws { BusinessError } 201 - permission denied
   * @throws { BusinessError } 202 - Not System App.
   * @throws { BusinessError } 6600101 - Session service exception.
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 23 dynamic&static
   */
  function offActiveSessionChanged(callback?: Callback<Array<AVSessionDescriptor>>): void;

  /**
   * 注销会话销毁事件监听。注销后，不再监听该事件。
   *
   * @param { 'sessionDestroy' } type - 事件回调类型，支持的事件为`'sessionDestroy'`。
   * @param { function } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
   *     <br>该参数为会话相关描述，为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
   * 注销最新播放会话变更事件监听。注销后，不再进行该事件的监听。
   *
   * @param { 'topSessionChange' } type - 事件回调类型，支持的事件为`'topSessionChange'`。
   * @param { function } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
   *     <br>该参数为会话相关描述，为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
   * 监听会话的服务死亡事件。通知应用清理资源。
   *
   * @param { 'sessionServiceDie' } type - 事件回调类型，支持事件`'sessionServiceDie'`：会话服务死亡事件，检测到会话的服务死亡时触发。
   * @param { function } callback - 回调函数。当监听事件注册成功，err为undefined，否则返回错误对象。
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
   * 取消会话服务死亡监听，取消后，不再进行服务死亡监听。
   *
   * @param { 'sessionServiceDie' } type - 事件回调类型，支持事件`'sessionServiceDie'`：会话服务死亡事件。
   * @param { function } callback -  回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
   *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的服务死亡监听。
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
   * 最新分布式远端会话变更的监听事件。
   *
   * @param { 'distributedSessionChange' } type - 事件回调类型，支持的事件为 `'distributedSessionChange'`：最新远端分布式会话的变化事件，检测到最新的会话改变时触
   *     发。
   * @param { DistributedSessionType } distributedSessionType - 远端会话类型。
   * @param { Callback<Array<AVSessionController>> } callback - 回调函数。参数为对应类型的会话控制器实例列表，可查看会话ID，并完成对会话发送命令及事件，获取元数据、播放状态信
   *     息等操作。
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
   * 取消最新分布式远端会话变更的监听事件，取消后，不再进行该事件的监听。
   *
   * @param { 'distributedSessionChange' } type - 事件回调类型，支持的事件为`'distributedSessionChange'`。
   * @param { DistributedSessionType } distributedSessionType - 远端会话类型。
   * @param { Callback<Array<AVSessionController>> } callback - 回调函数。参数为对应类型的会话控制器实例列表，可查看会话ID，并完成对会话发送命令及事件，获取元数据、播放状态信
   *     息等操作。
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
   * 发送按键事件给置顶会话。结果通过callback异步回调方式返回。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { KeyEvent } event - 按键事件。
   * @param { AsyncCallback<void> } callback - 回调函数。当事件发送成功，err为undefined，否则返回错误对象。
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
   * 发送按键事件给置顶会话。结果通过Promise异步回调方式返回。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { KeyEvent } event - 按键事件。
   * @returns { Promise<void> } Promise对象。当事件发送成功，无返回结果，否则返回错误对象。
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
   * 发送控制命令给置顶会话。结果通过callback异步回调方式返回。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { AVControlCommand } command - AVSession的相关命令和命令相关参数。
   * @param { AsyncCallback<void> } callback - 回调函数。当命令发送成功，err为undefined，否则返回错误对象。
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
   * 发送控制命令给置顶会话。结果通过Promise异步回调方式返回。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { AVControlCommand } command - AVSession的相关命令和命令相关参数。
   * @returns { Promise<void> } Promise对象。当命令发送成功，无返回结果，否则返回错误对象。
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
   * 定义无参数的回调函数类型。
   *
   * @typedef { function } NoParamCallback
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 22 dynamic
   * @since 23 static
   */
  type NoParamCallback = () => void;

  /**
   * 定义包含两个参数的回调类型。
   *
   * @param { T } data1
   * @param { G } data2
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 22 dynamic
   * @since 23 static
   */
  type TwoParamCallback<T, G> = (data1: T, data2: G) => void;

  /**
   * 远端设备支持的协议类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  enum ProtocolType {
    /**
     * 本地设备，包括设备本身的内置扬声器或音频插孔、A2DP 设备。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_LOCAL = 0,

    /**
     * Cast+的镜像模式。 
     * 
     * **系统接口：** 该接口为系统接口。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    TYPE_CAST_PLUS_MIRROR = 1,

    /**
     * Cast+的Stream模式。表示媒体正在其他设备上展示。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_CAST_PLUS_STREAM = 2,

    /**
     * DLNA协议。表示媒体正在其他设备上展示。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    TYPE_DLNA = 4,

    /**
     * PCM模式。表示媒体正在其他设备上展示。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    TYPE_CAST_PLUS_AUDIO = 8,
  }

  /**
   * 表示远端分布式设备支持的会话类型枚举。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  enum DistributedSessionType {
    /**
     * 远端设备会话。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    TYPE_SESSION_REMOTE = 0,

    /**
     * 迁移至本端的设备会话。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    TYPE_SESSION_MIGRATE_IN = 1,

    /**
     * 迁移至远端的设备会话。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    TYPE_SESSION_MIGRATE_OUT = 2
  }

  /**
   * 开始设备搜索发现。结果通过callback异步回调方式返回。
   *
   * @param { AsyncCallback<void> } callback 回调函数。当命令发送成功并开始搜索，err为undefined，否则返回错误对象。
   * @throws { BusinessError } 202 - Not System App.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function startCastDeviceDiscovery(callback: AsyncCallback<void>): void;

  /**
   * 指定过滤条件，开始设备搜索发现。结果通过callback异步回调方式返回。
   *
   * @param { int } filter 进行设备发现的过滤条件，由ProtocolType组合而成。
   * @param { AsyncCallback<void> } callback 回调函数。当命令发送成功并开始搜索，err为undefined，否则返回错误对象。
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
   * 开始设备搜索发现。结果通过Promise异步回调方式返回。
   *
   * @param { number } filter 进行设备发现的过滤条件，由ProtocolType组合而成。 [since 10 - 11]
   * @param { int } [filter] - 进行设备发现的过滤条件，由ProtocolType组合而成。 [since 12]
   * @param { Array<string> } [drmSchemes] - 进行支持DRM资源播放的设备发现的过滤条件，由DRM uuid组合而成。 <br/>从API version 12开始支持该可选参
   *     数。 [since 12]
   * @returns { Promise<void> } Promise对象。当命令发送成功并开始搜索，无返回结果，否则返回错误对象。
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
   * 结束设备搜索发现。结果通过callback异步回调方式返回。
   *
   * @param { AsyncCallback<void> } callback 回调函数。当成功停止搜索，err为undefined，否则返回错误对象。
   * @throws { BusinessError } 202 - Not System App.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function stopCastDeviceDiscovery(callback: AsyncCallback<void>): void;

  /**
   * 结束设备搜索发现。结果通过Promise异步回调方式返回。
   *
   * @returns { Promise<void> } Promise对象。当成功停止搜索，无返回结果，否则返回错误对象。
   * @throws { BusinessError } 202 - Not System App.
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function stopCastDeviceDiscovery(): Promise<void>;

  /**
   * 设置设备是否可被发现，用于投播接收端。结果通过callback异步回调方式返回。
   *
   * @param { boolean } enable 是否允许本设备被发现。true表示允许被发现，false表示不允许被发现。
   * @param { AsyncCallback<void> } callback 回调函数。当设置成功，err为undefined，否则返回错误对象。
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
   * 设置设备是否可被发现，用于投播接收端。结果通过Promise异步回调方式返回。
   *
   * @param { boolean } enable 是否允许本设备被发现。true表示允许被发现，false表示不允许被发现。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 设备发现回调监听。
   *
   * @param { 'deviceAvailable' } type 事件回调类型，支持事件`'deviceAvailable'`，有设备被发现时触发回调。
   * @param { function } callback 回调函数。当监听事件注册成功，err为undefined，否则返回错误对象。
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
   * 取消设备发现回调的监听。
   *
   * @param { 'deviceAvailable' } type 事件回调类型，支持事件`'deviceAvailable'`：设备发现回调。
   * @param { function } callback 用于返回设备信息。
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
   * 设备下线回调监听。
   *
   * @param { 'deviceOffline' } type - 事件回调类型，支持事件`'deviceOffline'`，有设备下线时触发回调。
   * @param { function } callback - 回调函数，参数deviceId是设备的ID。当监听事件注册成功，err为undefined，否则返回错误对象。
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
   * 取消设备下线回调的监听。
   *
   * @param { 'deviceOffline' } type - 事件回调类型，支持事件`'deviceOffline'`：设备下线回调。
   * @param { function } callback - 回调函数，参数deviceId是设备的ID。当监听事件取消成功，err为undefined，否则返回错误对象。该参数为可选参数，若不填写该参数，则认为取消所有相关会话的
   *     事件监听。
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
   * 设备建立连接后，获取投播控制器。结果通过callback异步回调方式返回。
   * 
   * 此功能在本端和远端都可以使用，通过该接口可以获取一个相同的控制器，进行投播音频的播放控制。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { string } sessionId 用于指定要获取的投播控制器的sessionId。
   * @param { AsyncCallback<AVCastController> } callback - 回调函数，返回投播控制器实例。
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
   * 设备建立连接后，获取投播控制器。结果通过Promise方式返回。
   * 
   * 此功能在本端和远端都可以使用，通过该接口可以获取一个相同的控制器，进行投播音频的播放控制。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { string } sessionId 用于指定要获取的投播控制器的sessionId。
   * @returns { Promise<AVCastController> } Promise对象。返回投播控制器实例。
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
   * 启动投播。结果通过callback异步回调方式返回。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { SessionToken } session 会话令牌。SessionToken表示单个token。
   * @param { OutputDeviceInfo } device 设备相关信息。
   * @param { AsyncCallback<void> } callback 回调函数。当命令发送成功并启动投播，err为undefined，否则返回错误对象。
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
   * 启动投播。结果通过Promise异步回调方式返回。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { SessionToken } session 会话令牌。SessionToken表示单个token。
   * @param { OutputDeviceInfo } device 设备相关信息。
   * @returns { Promise<void> } Promise对象。当命令发送成功并启动投播，无返回结果，否则返回错误对象。
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
   * 结束投播。结果通过callback异步回调方式返回。
   *
   * @param { SessionToken } session 会话令牌。SessionToken表示单个token。
   * @param { AsyncCallback<void> } callback 回调函数。当成功结束投播，err为undefined，否则返回错误对象。
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
   * 结束投播。结果通过Promise异步回调方式返回。
   *
   * @param { SessionToken } session 会话令牌。SessionToken表示单个token。
   * @returns { Promise<void> } Promise对象。当成功结束投播，无返回结果，否则返回错误对象。
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
   * 开始将设备日志写入文件。结果通过Promise异步回调方式返回。
   *
   * @param { string } url - 目标文件描述符（打开文件的唯一标识）。
   * @param { int } maxSize - 写入最大日志大小（以kB为单位）。
   * @returns { Promise<void> } Promise对象。当设备日志写入文件成功时，无返回结果，否则返回错误对象。
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
   * 停止当前设备日志写入。结果通过Promise异步回调方式返回。
   *
   * @returns { Promise<void> } Promise对象。当停止当前设备日志写入，无返回结果，否则返回错误对象。
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
   * 监听日志事件的回调。
   *
   * @param { 'deviceLogEvent' } type - 事件回调类型，支持事件`'deviceLogEvent'`。
   * @param { Callback<DeviceLogEventCode> } callback - 回调函数，参数DeviceLogEventCode是当前设备日志返回值。
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
   * 取消监听日志事件的回调。
   *
   * @param { 'deviceLogEvent' } type - 取消对应的监听事件，支持事件`'deviceLogEvent'`。
   * @param { Callback<DeviceLogEventCode> } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。该参数为可选参数，若不填写该参数，则认为取消所有相关
   *     会话的事件监听。
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
   * 设备日志事件返回值的枚举。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum DeviceLogEventCode {
    /**
     * 日志已满。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    DEVICE_LOG_FULL = 1,

    /**
     * 日志写入异常。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    DEVICE_LOG_EXCEPTION = 2
  }

  /**
   * 投播设备的连接状态。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface DeviceState {
    /**
     * 投播设备ID。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly deviceId: string;

    /**
     * 投播设备连接状态码。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly deviceState: int;

    /**
     * 投播设备连接错误码。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly reasonCode: int;

    /**
     * 系统雷达错误码。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly radarErrorCode: int;
  }

  /**
   * 投播设备连接状态的回调函数。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { 'deviceStateChanged' } type - 事件回调类型，支持事件`'deviceStateChanged'`，投播设备连接状态发生变化时触发回调。
   * @param { Callback<DeviceState> } callback - 回调函数，参数DeviceState包含投播设备ID、连接状态码、连接错误码和系统雷达错误码。
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
   * 取消投播设备连接状态的监听。
   *
   * @permission ohos.permission.MANAGE_MEDIA_RESOURCES
   * @param { 'deviceStateChanged' } type - 取消对应的监听事件，支持事件`'deviceStateChanged'`，投播设备连接状态变化的回调。
   * @param { Callback<DeviceState> } [callback] - 回调函数，当监听事件取消成功时，err为undefined；否则返回错误对象。该参数为可选参数，若未填写，则取消所有相关会话的事件监听。
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
   * 当前会话支持的会话类型。
   * 
   * 该类型可取的值为下表字符串。
   *
   * @unionmember { 'audio' } 音频
   * @unionmember { 'video' } 视频
   * @unionmember { 'voice_call' } 音频通话。 [since 11]
   * @unionmember { 'video_call' } 视频通话。 [since 12]
   * @unionmember { 'photo' } 图片。 [since 22]
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
   * 调用[avSession.createAVSession]{@link avSession.createAVSession}后，返回会话的实例，可以获得会话ID，完成设置元数据，播放状态信息等操作。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 10开始支持。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVSession {
    /**
     * AVSession对象唯一的会话标识。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly sessionId: string;

    /**
     * AVSession会话类型。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly sessionType: AVSessionType;

    /**
     * AVSession会话的自定义标签信息。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    readonly sessionTag: string;

    /**
     * 设置会话元数据。结果通过callback异步回调方式返回。
     *
     * @param { AVMetadata } data 会话元数据。
     * @param { AsyncCallback<void> } callback - 回调函数。当元数据设置成功，err为undefined，否则返回错误对象。
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
     * 设置会话元数据。结果通过Promise异步回调方式返回。
     *
     * @param { AVMetadata } data 会话元数据。
     * @returns { Promise<void> } Promise对象。当元数据设置成功，无返回结果，否则返回错误对象。
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
     * 设置通话会话元数据。结果通过callback异步回调方式返回。
     *
     * @param { CallMetadata } data - 通话会话元数据。
     * @param { AsyncCallback<void> } callback - 回调函数。当通话元数据设置成功，err为undefined，否则返回错误对象。
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
     * 设置通话会话元数据。结果通过Promise异步回调方式返回。
     *
     * @param { CallMetadata } data - 通话会话元数据。
     * @returns { Promise<void> } Promise对象。当通话元数据设置成功，无返回结果，否则返回错误对象。
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
     * 设置会话播放状态。结果通过callback异步回调方式返回。
     *
     * @param { AVPlaybackState } state 会话播放状态，包括状态、倍数、循环模式等信息。
     * @param { AsyncCallback<void> } callback - 回调函数。当播放状态设置成功，err为undefined，否则返回错误对象。
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
     * 设置会话播放状态。结果通过Promise异步回调方式返回。
     *
     * @param { AVPlaybackState } state 会话播放状态，包括状态、倍数、循环模式等信息。
     * @returns { Promise<void> } Promise对象。当播放状态设置成功，无返回结果，否则返回错误对象。
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
     * 设置通话状态。结果通过callback异步回调方式返回。
     *
     * @param { AVCallState } state - 通话状态。
     * @param { AsyncCallback<void> } callback - 回调函数。当通话元数据设置成功，err为undefined，否则返回错误对象。
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
     * 设置通话状态。结果通过Promise异步回调方式返回。
     *
     * @param { AVCallState } state - 通话状态。
     * @returns { Promise<void> } Promise对象。当通话元数据设置成功，无返回结果，否则返回错误对象。
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
     * 设置一个WantAgent用于拉起会话的Ability。结果通过callback异步回调方式返回。
     * 
     * 通过点击播控组件可以跳转到对应的播放界面，默认跳转到[avSession.createAVSession]{@link avSession.createAVSession}接口传入的context所属的UIAbility界面。
     *
     * @param { WantAgent } ability - 应用的相关属性信息，如bundleName，abilityName，deviceId等。
     * @param { AsyncCallback<void> } callback - 回调函数。当Ability设置成功，err为undefined，否则返回错误对象。
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
     * 设置一个WantAgent用于拉起会话的Ability。结果通过Promise异步回调方式返回。
     * 
     * 通过点击播控组件可以跳转到对应的播放界面，默认跳转到[avSession.createAVSession]{@link avSession.createAVSession}接口传入的context所属的UIAbility界面。
     *
     * @param { WantAgent } ability - 应用的相关属性信息，如bundleName，abilityName，deviceId等。
     * @returns { Promise<void> } Promise对象。当Ability设置成功，无返回结果，否则返回错误对象。
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
     * 媒体提供方设置一个会话内自定义事件，包括事件名和键值对形式的事件内容。使用callback异步回调。
     *
     * @param { string } event - 需要设置的会话事件的名称。
     * @param { object } args - 需要传递的会话事件内容。
     * @param { AsyncCallback<void>} callback - 回调函数。当会话事件设置成功，err为undefined，否则返回错误对象。
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
     * 媒体提供方设置一个会话内自定义事件，包括事件名和键值对形式的事件内容。使用Promise异步回调。
     *
     * @param { string } event - 需要设置的会话事件的名称。
     * @param { object } args - 需要传递的会话事件内容。
     * @returns { Promise<void> } Promise对象。当事件设置成功，无返回结果，否则返回错误对象。
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
     * 设置媒体播放列表。结果通过callback异步回调方式返回。
     *
     * @param { Array<AVQueueItem> } items - 播放列表单项的队列，用以表示播放列表。
     * @param { AsyncCallback<void> } callback - 回调函数。当播放状态设置成功，err为undefined，否则返回错误对象。
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
     * 设置媒体播放列表。结果通过Promise异步回调方式返回。
     *
     * @param { Array<AVQueueItem> } items - 播放列表单项的队列，用以表示播放列表。
     * @returns { Promise<void> } Promise对象。当播放列表设置成功，无返回结果，否则返回错误对象。
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
     * 设置媒体播放列表名称。结果通过callback异步回调方式返回。
     *
     * @param { string } title - 播放列表名称字段。
     * @param { AsyncCallback<void> } callback - 回调函数。当播放状态设置成功，err为undefined，否则返回错误对象。
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
     * 设置媒体播放列表名称。结果通过Promise异步回调方式返回。
     *
     * @param { string } title - 播放列表的名称。
     * @returns { Promise<void> } Promise对象。当播放列表设置成功，无返回结果，否则返回错误对象。
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
     * 媒体提供方设置键值对形式的自定义媒体数据包，使用callback异步回调。
     *
     * @param { object } extras - 需要传递的自定义媒体数据包键值对。
     *     <br> **说明：** 参数extras支持的数据类型有：字符串、数字、布尔值、对象、数组和文件描述符等，详细介绍请参见
     *     [@ohos.app.ability.Want (Want)]{@link @ohos.app.ability.Want:Want}。
     * @param { AsyncCallback<void> } callback - 回调函数。当自定义媒体数据包设置成功，err为undefined，否则返回错误对象。
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
     * 媒体提供方设置键值对形式的自定义媒体数据包。使用Promise异步回调。
     *
     * @param { object } extras - 需要传递的自定义媒体数据包键值对。
     *     <br> **说明：** 参数extras支持的数据类型有：字符串、数字、布尔值、对象、数组和文件描述符等，详细介绍请参见
     *     [@ohos.app.ability.Want (Want)]{@link @ohos.app.ability.Want:Want}。
     * @returns { Promise<void> } Promise对象。无返回结果。
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
     * 设置应用支持的播放倍速列表。使用Promise异步回调。
     *
     * @param { Array<double> } speeds - 支持的播放倍速列表。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    setSupportedPlaySpeeds(speeds: Array<double>): Promise<void>;

    /**
     * 设置应用支持的循环模式列表。使用Promise异步回调。
     *
     * @param { Array<LoopMode> } loopModes - 支持的循环模式列表。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    setSupportedLoopModes(loopModes: Array<LoopMode>): Promise<void>;

    /**
     * 当前会话是否启用桌面歌词功能。使用Promise异步回调。
     *
     * @param { boolean } enable - 是否启用桌面歌词。true表示启用，false表示不启用。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600111 - The desktop lyrics feature is not supported.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    enableDesktopLyric(enable: boolean): Promise<void>;

    /**
     * 设置当前会话桌面歌词的显示状态。使用Promise异步回调。
     *
     * @param { boolean } visible - 是否显示桌面歌词。true表示显示；false表示不显示。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 查询当前会话桌面歌词的显示状态。使用Promise异步回调。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示显示桌面歌词；返回false表示不显示桌面歌词。
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
     * 显示桌面歌词状态变更的监听事件。使用callback异步回调。
     *
     * @param { Callback<boolean> } callback - 回调函数。返回true表示开启显示桌面歌词状态；返回false表示关闭显示桌面歌词状态。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onDesktopLyricVisibilityChanged(callback: Callback<boolean>): void;

    /**
     * 取消显示桌面歌词状态变更事件监听，取消后将不再对该事件进行监听。使用callback异步回调。
     *
     * @param { Callback<boolean> } [callback] - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有显示桌面歌词状态变更事件监听。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offDesktopLyricVisibilityChanged(callback?: Callback<boolean>): void;

    /**
     * 设置当前会话桌面歌词状态。使用Promise异步回调。
     *
     * @param { DesktopLyricState } state - 桌面歌词状态。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 获取当前会话桌面歌词状态。使用Promise异步回调。
     *
     * @returns { Promise<DesktopLyricState> } Promise对象。返回桌面歌词状态。
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
     * 桌面歌词状态变更的监听事件。使用callback异步回调。
     *
     * @param { Callback<DesktopLyricState> } callback - 回调函数。返回桌面歌词状态。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onDesktopLyricStateChanged(callback: Callback<DesktopLyricState>): void;

    /**
     * 取消桌面歌词状态变更事件监听，取消后将不再对该事件进行监听。使用callback异步回调。
     *
     * @param { Callback<DesktopLyricState> } [callback] - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有桌面歌词状态变更事件监听。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offDesktopLyricStateChanged(callback?: Callback<DesktopLyricState>): void;

    /**
     * 设置后台播放模式。使用promise异步回调。
     * 
     * 建议与应用内"是否支持后台播放开关"关联。如未设置，'audio'类型会话默认值为ENABLE_BACKGROUND_PLAY；'video'类型会话默认值为DISABLE_BACKGROUND_PLAY。
     *
     * @param { BackgroundPlayMode } mode - 后台播放模式。
     * @returns { Promise<void> }
     Promise对象，无返回结果。
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setBackgroundPlayMode(mode: BackgroundPlayMode): Promise<void>;

    /**
     * 设置应用支持的控制类型列表。使用Promise异步回调。
     * 
     * 设置优先显示在播控中心的控制类型列表，若未设置控制类型优先级，播控中心将根据[AVSessionType]{@link avSession.AVSessionType}显示，具体显示规则参考
     * [创建不同类型的会话](docroot://media/avsession/avsession-access-scene.md#创建不同类型的会话)。
     *
     * @param { Array<AVMediaCenterControlType> } type - 优先在播控中心显示的控制类型列表。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setMediaCenterControlType(type: Array<AVMediaCenterControlType>): Promise<void>;

    /**
     * 获取本会话相应的控制器。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<AVSessionController> } callback - 回调函数。返回会话控制器。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getController(callback: AsyncCallback<AVSessionController>): void;

    /**
     * 获取本会话对应的控制器。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<AVSessionController> } Promise对象。返回会话控制器。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getController(): Promise<AVSessionController>;

    /**
     * 设备建立连接后，获取投播控制器。结果通过callback异步回调方式返回。如果 avsession 未处于投播状态，则控制器将返回 null。
     *
     * @param { AsyncCallback<AVCastController> } callback - 回调函数，返回投播控制器实例。
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
     * 设备建立连接后，获取投播控制器。结果通过Promise异步回调方式返回。如果 avsession 未处于投播状态，则控制器将返回 null。
     *
     * @returns { Promise<AVCastController> } Promise对象。返回投播控制器实例。
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
     * 通过会话获取播放设备相关信息。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<OutputDeviceInfo> } callback - 回调函数，返回播放设备信息。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getOutputDevice(callback: AsyncCallback<OutputDeviceInfo>): void;

    /**
     * 通过会话获取播放设备信息。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<OutputDeviceInfo> } Promise对象。返回播放设备信息。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getOutputDevice(): Promise<OutputDeviceInfo>;

    /**
     * 使用同步方法获取当前输出设备信息。
     *
     * @returns { OutputDeviceInfo } 当前输出设备信息。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getOutputDeviceSync(): OutputDeviceInfo;

    /**
     * 获取当前系统中所有支持扩展屏投播的显示设备。通过Promise异步回调方式返回。
     *
     * @returns { Promise<Array<CastDisplayInfo>> } Promise对象，返回当前系统中所有支持扩展屏投播的显示设备。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getAllCastDisplays(): Promise<Array<CastDisplayInfo>>;

    /**
     * 设置播放命令监听事件。注册该监听，说明应用支持播放指令。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'play' } type - 事件回调类型，支持的事件为`'play'`，当播放命令被发送到会话时，触发该事件回调。
     * @param { function } callback - 回调函数。
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
     * 设置播放命令监听事件。使用callback异步回调。
     * 
     * 应用将通过回调接收控制器发送的[CommandInfo]{@link avSession.CommandInfo}信息。
     *
     * @param { Callback<CommandInfo> } callback - 回调函数。当监听事件注册成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    onPlay(callback: Callback<CommandInfo>): void;

    /**
     * 设置暂停命令监听事件。注册该监听，说明应用支持暂停指令。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'pause' } type - 事件回调类型，支持的事件为`'pause'`，当暂停命令被发送到会话时，触发该事件回调。
     * @param { function } callback - 回调函数。当监听事件注册成功，err为undefined，否则为错误对象。
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
     * 设置停止命令监听事件。注册该监听，说明应用支持停止指令。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'stop' } type - 事件回调类型，支持的事件是`'stop'`，当停止命令被发送到会话时，触发该事件回调。
     * @param { function } callback - 回调函数。当监听事件注册成功，err为undefined，否则为错误对象。
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
     * 设置播放下一首命令监听事件。注册该监听，说明应用支持下一首指令。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'playNext' } type - 事件回调类型，支持的事件是`'playNext'`，当播放下一首命令被发送到会话时，触发该事件回调。
     * @param { function } callback - 回调函数。当监听事件注册成功，err为undefined，否则为错误对象。
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
     * 设置播放下一首命令监听事件。使用callback异步回调。
     * 
     * 应用将通过回调接收控制器发送的[CommandInfo]{@link avSession.CommandInfo}信息。
     *
     * @param { Callback<CommandInfo> } callback - 回调函数。当监听事件注册成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    onPlayNext(callback: Callback<CommandInfo>): void;

    /**
     * 设置播放上一首命令监听事件。注册该监听，说明应用支持上一首指令。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'playPrevious' } type - 事件回调类型，支持的事件是`'playPrevious'`，当播放上一首命令被发送到会话时，触发该事件回调。
     * @param { function } callback - 回调函数。当监听事件注册成功，err为undefined，否则为错误对象。
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
     * 设置播放上一首命令监听事件。使用callback异步回调。
     * 
     * 应用将通过回调接收控制器发送的[CommandInfo]{@link avSession.CommandInfo}信息。
     *
     * @param { Callback<CommandInfo> } callback - 回调函数。当监听事件注册成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    onPlayPrevious(callback: Callback<CommandInfo>): void;

    /**
     * 设置快进命令监听事件。注册该监听，说明应用支持快进指令。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'fastForward' } type - 事件回调类型，支持的事件是 `'fastForward'`，当快进命令被发送到会话时，触发该事件回调。
     * @param { function } callback - 回调函数。参数time是时间节点，单位为秒。
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
     * 设置快进命令监听事件。使用callback异步回调。
     * 
     * 应用将通过回调接收控制器发送的快进时间参数，以及对应的[CommandInfo]{@link avSession.CommandInfo}信息。
     *
     * @param { TwoParamCallback<long, CommandInfo> } callback - 回调函数。用于处理'fastForward'操作。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    onFastForward(callback: TwoParamCallback<long, CommandInfo>): void;

    /**
     * 设置快退命令监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'rewind' } type - 事件回调类型，支持的事件是`'rewind'`，当快退命令被发送到会话时，触发该事件回调。
     * @param { function } callback - 回调函数。参数time是时间节点，单位为秒。
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
     * 设置快退命令监听事件。使用callback异步回调。
     * 
     * 应用将通过回调接收控制器发送的快退时间参数，以及对应的[CommandInfo]{@link avSession.CommandInfo}信息。
     *
     * @param { TwoParamCallback<long, CommandInfo> } callback - 回调函数。用于处理'rewind'操作。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    onRewind(callback: TwoParamCallback<long, CommandInfo>): void;

    /**
     * 取消会话播放事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'play' } type - 关闭对应的监听事件，支持的事件是`'play'`。
     * @param { function } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 取消会话播放事件监听。使用callback异步回调。
     * 
     * 指定callback，取消对应监听；未指定callback，则取消所有事件监听。
     *
     * @param { Callback<CommandInfo> } [callback] - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    offPlay(callback?: Callback<CommandInfo>): void;

    /**
     * 取消会话暂停事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'pause' } type - 关闭对应的监听事件，支持的事件是`'pause'`。
     * @param { function } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 取消会话停止事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'stop' } type - 关闭对应的监听事件，支持的事件是`'stop'`。
     * @param { function } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 取消会话播放下一首事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'playNext' } type - 关闭对应的监听事件，支持的事件是 `'playNext'`。
     * @param { function } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 取消会话播放下一首事件监听。使用callback异步回调。
     * 
     * 指定callback，取消对应监听；未指定callback，则取消所有事件监听。
     *
     * @param { Callback<CommandInfo> } [callback] - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    offPlayNext(callback?: Callback<CommandInfo>): void;

    /**
     * 取消会话播放上一首事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'playPrevious' } type - 关闭对应的监听事件，支持的事件是`'playPrevious'`。
     * @param { function } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 取消会话播放上一首事件监听。使用callback异步回调。
     * 
     * 指定callback，取消对应监听；未指定callback，则取消所有事件监听。
     *
     * @param { Callback<CommandInfo> } [callback] - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    offPlayPrevious(callback?: Callback<CommandInfo>): void;

    /**
     * 取消会话快进事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'fastForward' } type - 关闭对应的监听事件，支持的事件是`'fastForward'`。
     * @param { function } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 取消会话快进事件监听。使用callback异步回调。
     * 
     * 指定callback，取消对应监听；未指定callback，则取消所有事件监听。
     *
     * @param { TwoParamCallback<long, CommandInfo> } [callback] - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    offFastForward(callback?: TwoParamCallback<long, CommandInfo>): void;

    /**
     * 取消会话快退事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'rewind' } type - 关闭对应的监听事件，支持的事件是`'rewind'`。
     * @param { function } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 取消会话快退事件监听。使用callback异步回调。
     * 
     * 指定callback，取消对应监听；未指定callback，则取消所有事件监听。
     *
     * @param { TwoParamCallback<long, CommandInfo> } [callback] - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    offRewind(callback?: TwoParamCallback<long, CommandInfo>): void;

    /**
     * 设置媒体ID播放监听事件。
     * 
     * > **说明：**
     * >
     * > 从API version 11开始支持，从API version 20开始废弃。建议使用
     * > [on('playWithAssetId')]{@link avSession.AVSession.on(type: 'playWithAssetId', callback: Callback<string>)}设置媒体
     * > ID播放监听事件。
     *
     * @param { 'playFromAssetId' } type - 事件回调类型，支持的事件是`'playFromAssetId'`，当媒体ID播放时，触发该事件回调。
     * @param { function } callback - 回调函数。参数assetId是媒体ID。
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
     * 取消媒体ID播放事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     * 
     * > **说明：**
     * >
     * > 从API version 11开始支持，从API version 20开始废弃。建议使用
     * > [off('playWithAssetId')]{@link avSession.AVSession.off(type: 'playWithAssetId', callback?: Callback<string>)}取消
     * > 媒体ID播放事件监听。
     *
     * @param { 'playFromAssetId' } type - 关闭对应的监听事件，支持的事件是`'playFromAssetId'`。
     * @param { function } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。参数assetId是媒体ID。
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
     * 设置指定资源id进行播放的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'playWithAssetId' } type - 事件回调类型，支持的事件是`'playWithAssetId'`，当指定资源id进行播放时，触发该事件回调。
     * @param { Callback<string> } callback - 回调函数。参数assetId是媒体ID。
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
     * 取消指定资源id进行播放的事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'playWithAssetId' } type - 关闭对应的监听事件，支持的事件是`'playWithAssetId'`。
     * @param { Callback<string> } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。参数assetId是媒体ID。
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
     * 设置跳转节点监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'seek' } type - 事件回调类型，支持事件`'seek'`：当跳转节点命令被发送到会话时，触发该事件。
     * @param { function } callback - 回调函数。参数time是时间节点，单位为毫秒。
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
     * 取消跳转节点事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'seek' } type - 关闭对应的监听事件，支持关闭事件`'seek'`。
     * @param { function } callback - 回调函数，参数time是时间节点，单位为毫秒。
     *     <br>当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置播放速率的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'setSpeed' } type - 事件回调类型，支持事件`'setSpeed'`：当设置播放速率的命令被发送到会话时，触发该事件。
     * @param { function } callback - 回调函数。参数speed是播放倍速。
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
     * 取消播放速率变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'setSpeed' } type - 关闭对应的监听事件，支持关闭事件`'setSpeed'`。
     * @param { function } callback - 回调函数，参数speed是播放倍速。
     *     <br>当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置循环模式的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'setLoopMode' } type - 事件回调类型，支持事件`'setLoopMode'`：当设置循环模式的命令被发送到会话时，触发该事件。
     * @param { function } callback - 回调函数。参数mode是循环模式。
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
     * 取消循环模式变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'setLoopMode' } type - 关闭对应的监听事件，支持关闭事件`'setLoopMode'`。
     * @param { function } callback - 回调函数，参数mode是循环模式。
     *     <br>- 当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>- 该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置目标循环模式的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'setTargetLoopMode' } type - 事件回调类型，支持事件`'setTargetLoopMode'`。
     *     <br>- `'setTargetLoopMode'`：当设置目标循环模式的命令被发送到会话时，触发该事件。
     * @param { Callback<LoopMode> } callback - 回调函数。参数表示目标循环模式。
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
     * 取消目标循环模式变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'setTargetLoopMode' } type - 关闭对应的监听事件，支持关闭事件`'setTargetLoopMode'`。
     * @param { Callback<LoopMode> } callback - 回调函数，参数表示目标循环模式。
     *     <br>- 当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>- 该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置是否收藏的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'toggleFavorite' } type - 事件回调类型，支持事件`'toggleFavorite'`：当是否收藏的命令被发送到会话时，触发该事件。
     * @param { function } callback - 回调函数。参数assetId是媒体ID。
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
     * 取消是否收藏的事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'toggleFavorite' } type - 关闭对应的监听事件，支持关闭事件`'toggleFavorite'`。
     * @param { function } callback - 回调函数，参数assetId是媒体ID。
     *     <br>当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置蓝牙/有线等外设接入的按键输入事件的监听，监听多媒体按键事件中播放、暂停、上下一首、快进、快退的指令。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'handleKeyEvent' } type - 事件回调类型，支持事件`'handleKeyEvent'`：当按键事件被发送到会话时，触发该事件。
     * @param { function } callback - 回调函数。参数event是按键事件。
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
     * 取消按键事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'handleKeyEvent' } type - 关闭对应的监听事件，支持关闭事件`'handleKeyEvent'`。
     * @param { function } callback - 回调函数，参数event是按键事件。
     *     <br>当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置播放设备变化的监听事件。应用接入[multimedia.avCastPicker (投播组件)]{@link @ohos.multimedia.avCastPicker:AVCastPicker}，当用户通过组件切换设备
     * 时，会收到设备切换的回调。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'outputDeviceChange' } type - 事件回调类型，支持事件`'outputDeviceChange'`：当播放设备变化时，触发该事件。
     * @param { function } callback - 回调函数，参数device是设备相关信息。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 取消播放设备变化的事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'outputDeviceChange' } type - 关闭对应的监听事件，支持关闭事件`'outputDeviceChange'`。
     * @param { function } callback - 回调函数，参数device是设备相关信息。
     *     <br>当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置自定义控制命令变化的监听器。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'commonCommand' } type - 事件回调类型，支持事件`'commonCommand'`：当自定义控制命令变化时，触发该事件。
     * @param { function } callback - 回调函数，command为变化的自定义控制命令名，args为自定义控制命令的参数，参数内容与
     *     [sendCommonCommand]{@link avSession.AVSessionController.sendCommonCommand(command: string, args: {[key: string]: Object})}
     *     方法设置的参数内容完全一致。
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
     * 取消自定义控制命令的变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'commonCommand' } type - 取消对应的监听事件，支持事件`'commonCommand'`。
     * @param { function } callback - 回调函数，参数command是变化的自定义控制命令名，args为自定义控制命令的参数。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有对command事件的监听。
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
     * 设置播放列表其中某项被选中的监听事件，session端可以选择对这个单项歌曲进行播放。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'skipToQueueItem' } type - 事件回调类型，支持事件`'skipToQueueItem'`：当播放列表选中单项的命令被发送到会话时，触发该事件。
     * @param { function } callback - 回调函数。参数itemId是选中的播放列表项的ID。
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
     * 取消播放列表单项选中的事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'skipToQueueItem' } type - 关闭对应的监听事件，支持关闭事件`'skipToQueueItem'`。
     * @param { function } callback - 回调函数，参数itemId是播放列表单项ID。
     *     <br>当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置通话接听的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'answer' } type - 事件回调类型，支持事件`'answer'`：当通话接听时，触发该事件。
     * @param { Callback<void> } callback - 回调函数。
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
     * 取消通话接听事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'answer' } type - 关闭对应的监听事件，支持的事件是`'answer'`。
     * @param { Callback<void> } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置通话挂断的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'hangUp' } type - 事件回调类型，支持事件`'hangUp'`：当通话挂断时，触发该事件。
     * @param { Callback<void> } callback - 回调函数。
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
     * 取消通话挂断事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'hangUp' } type - 关闭对应的监听事件，支持的事件是`'hangUp'`。
     * @param { Callback<void> } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置通话静音的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'toggleCallMute' } type - 事件回调类型，支持事件`'toggleCallMute'`：当通话静音或解除静音时，触发该事件。
     * @param { Callback<void> } callback - 回调函数。
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
     * 取消通话静音事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'toggleCallMute' } type - 关闭对应的监听事件，支持的事件是`'toggleCallMute'`。
     * @param { Callback<void> } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置扩展屏投播显示设备变化的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'castDisplayChange' } type - 事件回调类型，支持事件`'castDisplayChange'`：当扩展屏投播显示设备变化时触发事件。
     * @param { Callback<CastDisplayInfo> } callback - 回调函数。参数是扩展屏投播显示设备信息。
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
     * 取消扩展屏投播显示设备变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'castDisplayChange' } type - 关闭对应的监听事件，支持的事件是`'castDisplayChange'`。
     * @param { Callback<CastDisplayInfo> } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。该参数为可选参数，若不填写该参数，则认为取消所有相关会
     *     话的事件监听。
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
     * 注册从远程设备发送的自定义数据的监听器。
     *
     * @param { 'customDataChange' } type - 事件回调类型，支持事件'customDataChange'，当媒体提供方发送自定义数据时，触发该事件。
     * @param { Callback<Record<string, Object>> } callback - 回调函数，用于接收自定义数据。
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
     * 发送私有数据到远端设备。使用Promise异步回调。
     *
     * @param { Record<string, Object> } data 应用程序填充的自定义数据。服务端仅解析key为'customData'，且Object为string类型的对象。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    sendCustomData(data: Record<string, Object>): Promise<void>;

    /**
     * 结束投播。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<void> } callback 回调函数。当命令发送成功，err为undefined，否则返回错误对象。
     * @throws { BusinessError } 6600109 - The remote connection is not established
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10 dynamic
     * @since 23 static
     */
    stopCasting(callback: AsyncCallback<void>): void;

    /**
     * 结束投播。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<void> } Promise对象。当成功结束投播，无返回结果，否则返回错误对象。
     * @throws { BusinessError } 6600109 - The remote connection is not established
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    stopCasting(): Promise<void>;

    /**
     * 激活会话，激活后可正常使用会话。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当会话激活成功，err为undefined，否则返回错误对象。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    activate(callback: AsyncCallback<void>): void;

    /**
     * 激活会话，激活后可正常使用会话。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<void> } Promise对象。当会话激活成功，无返回结果，否则返回错误对象。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    activate(): Promise<void>;

    /**
     * 禁用当前会话。结果通过callback异步回调方式返回。
     * 
     * 禁用当前会话的功能，可通过[activate]{@link avSession.AVSession.activate()}恢复。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当禁用会话成功，err为undefined，否则返回错误对象。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    deactivate(callback: AsyncCallback<void>): void;

    /**
     * 禁用当前会话的功能，可通过[activate]{@link avSession.AVSession.activate()}恢复。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<void> } Promise对象。当禁用会话成功，无返回结果，否则返回错误对象。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    deactivate(): Promise<void>;

    /**
     * 销毁当前会话，使当前会话完全失效。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当会话销毁成功，err为undefined，否则返回错误对象。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    destroy(callback: AsyncCallback<void>): void;

    /**
     * 销毁当前会话，使当前会话完全失效。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<void> } Promise对象。当会话销毁成功，无返回结果，否则返回错误对象。
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
   * 投播控制器接受的命令的对象描述。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVCastControlCommand {
    /**
     * 命令。每种命令对应的参数不同，具体的对应关系可查阅[AVCastControlCommandType]{@link avSession.AVCastControlCommandType}。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    command: AVCastControlCommandType;

    /**
     * 命令对应的参数。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    parameter?: media.PlaybackSpeed | double | string | LoopMode;
  }

  /**
   * 在投播建立后，调用[avSession.getAVCastController]{@link avSession.getAVCastController}后，返回会话控制器实例。控制器可查看会话ID，并可完成对会话发送命令及事件，
   * 获取会话元数据，播放状态信息等操作。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 10开始支持。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVCastController {
    /**
     * 设置播放的surfaceId，在投播sink端使用。结果通过callback异步回调方式返回。
     *
     * @param { string } surfaceId - 设置播放的surfaceId。
     * @param { AsyncCallback<void> } callback - 回调函数，返回当前设置结果。
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
     * 设置播放的surfaceId，在投播sink端使用。结果通过Promise异步回调方式返回。
     *
     * @param { string } surfaceId - 设置播放的surfaceId。
     * @returns { Promise<void> } Promise对象。返回设置结果。
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
     * 获取当前的远端播放状态。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<AVPlaybackState> } callback - 回调函数，返回远端播放状态。
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10 dynamic
     * @since 23 static
     */
    getAVPlaybackState(callback: AsyncCallback<AVPlaybackState>): void;

    /**
     * 获取当前的远端播放状态。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<AVPlaybackState> } Promise对象。返回远端播放状态。
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAVPlaybackState(): Promise<AVPlaybackState>;

    /**
     * 获取当前远端设备的解码方式。使用Promise异步回调。
     *
     * @returns { Promise<Array<DecoderType>> } Promise对象。返回远端设备所支持的解码能力列表。
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    getSupportedDecoders(): Promise<Array<DecoderType>>;

    /**
     * 通过传递解码方式，获取推荐的分辨率。使用Promise异步回调。
     *
     * @param { DecoderType } decoderType - 设备所支持的解码格式。
     *     <br>设备所支持的解码格式包括：
     *     <br>'OH_AVCODEC_MIMETYPE_VIDEO_AVC'：VIDEO AVC，
     *     <br>'OH_AVCODEC_MIMETYPE_VIDEO_HEVC'：VIDEO HEVC，
     *     <br>'OH_AVCODEC_MIMETYPE_AUDIO_VIVID'：AUDIO AV3A。
     * @returns { Promise<ResolutionLevel> } Promise对象。返回远端设备推荐的分辨率。
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    getRecommendedResolutionLevel(decoderType: DecoderType): Promise<ResolutionLevel>;

    /**
     * 获取当前的远端设备所支持的HDR能力。使用Promise异步回调。
     *
     * @returns { Promise<Array<hdrCapability.HDRFormat>> } Promise对象。返回远端设备所支持的HDR能力。
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    getSupportedHdrCapabilities(): Promise<Array<hdrCapability.HDRFormat>>;

    /**
     * 获取当前的远端设备所支持倍速播放列表，仅支持使用cast+协议连接的设备。使用Promise异步回调。
     *
     * @returns { Promise<Array<double>> } Promise对象。返回远端设备所支持的倍速播放列表。
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    getSupportedPlaySpeeds(): Promise<Array<double>>;

    /**
     * 通过会话控制器发送命令到其对应的会话。结果通过callback异步回调方式返回。
     *
     * @param { AVCastControlCommand } command 会话的相关命令和命令相关参数。
     * @param { AsyncCallback<void> } callback - 回调函数。当命令发送成功，err为undefined，否则返回错误对象。
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
     * 通过控制器发送命令到其对应的会话。结果通过Promise异步回调方式返回。
     *
     * @param { AVCastControlCommand } command 会话的相关命令和命令相关参数。
     * @returns { Promise<void> } Promise对象。当命令发送成功，无返回结果，否则返回错误对象。
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
     * 启动播放某个媒体资源。结果通过callback异步回调方式返回。
     * 
     * > **说明：**
     * >
     * > 在音视频投播场景下，当应用程序顺序调用
     * > [prepare]{@link avSession.AVCastController.prepare(item: AVQueueItem, callback: AsyncCallback<void>)}和start接口，且
     * > assetId不变时，如果prepare已经传入有效的mediaUri或fdSrc，则start接口将复用prepare阶段的完整的AVMediaDescription对象信息。
     *
     * @param { AVQueueItem } item 播放列表中单项的相关属性。
     * @param { AsyncCallback<void> } callback - 回调函数。当命令发送成功，err为undefined，否则返回错误对象。
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
     * 启动播放某个媒体资源。结果通过Promise异步回调方式返回。
     * 
     * > **说明：**
     * >
     * > 在音视频投播场景下，当应用程序顺序调用
     * > [prepare]{@link avSession.AVCastController.prepare(item: AVQueueItem, callback: AsyncCallback<void>)}和start接口，且
     * > assetId不变时，如果prepare已经传入有效的mediaUri或fdSrc，则start接口将复用prepare阶段的完整的AVMediaDescription对象信息。
     *
     * @param { AVQueueItem } item 播放列表中单项的相关属性。
     * @returns { Promise<void> } Promise对象。当命令发送成功，无返回结果，否则返回错误对象。
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
     * 准备播放媒体资源，即进行播放资源的加载和缓冲。结果通过callback异步回调方式返回。
     *
     * @param { AVQueueItem } item 播放列表中单项的相关属性。
     * @param { AsyncCallback<void> } callback - 回调函数。当命令发送成功，err为undefined，否则返回错误对象。
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
     * 准备播放媒体资源，即进行播放资源的加载和缓冲。结果通过Promise异步回调方式返回。
     *
     * @param { AVQueueItem } item 播放列表中单项的相关属性。
     * @returns { Promise<void> } Promise对象。当命令发送成功，无返回结果，否则返回错误对象。
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
     * 获取当前投播的资源信息。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<AVQueueItem> } callback - 回调函数。当命令发送成功，err为undefined，否则返回错误对象。
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10 dynamic
     * @since 23 static
     */
    getCurrentItem(callback: AsyncCallback<AVQueueItem>): void;

    /**
     * 获取当前投播的资源信息。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<AVQueueItem> } Promise对象，返回当前的播放资源，否则返回错误对象。
     * @throws { BusinessError } 6600101 - Session service exception
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getCurrentItem(): Promise<AVQueueItem>;

    /**
     * 获取当前支持的命令。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<Array<AVCastControlCommandType>> } callback - 回调函数。返回当前支持的命令。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 11 dynamic
     * @since 23 static
     */
    getValidCommands(callback: AsyncCallback<Array<AVCastControlCommandType>>): void;

    /**
     * 获取当前支持的命令。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<Array<AVCastControlCommandType>> } Promise对象，返回当前支持的命令。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 11 dynamic
     * @since 23 static
     */
    getValidCommands(): Promise<Array<AVCastControlCommandType>>;

    /**
     * 在线DRM资源投播时，处理许可证响应。结果通过Promise异步回调方式返回。
     *
     * @param { string } assetId - 媒体ID。
     * @param { Uint8Array } response - 许可证响应。
     * @returns { Promise<void> } Promise对象，当处理许可证响应成功，无返回结果，否则返回错误对象。
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
     * 发送私有数据到远端设备。使用Promise异步回调。
     *
     * @param { Record<string, Object> } data 应用程序填充的自定义数据。
     *     <br>服务端仅解析key：string为'customData'，且Object为string类型的对象。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    sendCustomData(data: Record<string, Object>): Promise<void>;

    /**
     * 销毁当前controller，结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当命令执行成功，err为undefined，否则返回错误对象。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 11 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;

    /**
     * 销毁当前controller。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<void> } Promise对象，controller销毁成功，无结果返回，否则返回错误对象。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    release(): Promise<void>;

    /**
     * 设置播放状态变化的监听事件。使用callback异步回调。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'playbackStateChange' } type
     * @param { Array<keyof AVPlaybackState> | 'all' } filter - 'all'表示关注播放状态所有字段变化；Array<keyof AVPlaybackState>表示关注
     *     Array中的字段变化。
     * @param { function } callback - 回调函数，参数state是变化后的播放状态。
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
     * 取消播放状态变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'playbackStateChange' } type
     * @param { function } callback - 回调函数，参数state是变化后的播放状态。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置投播当前播放媒体内容的监听事件。使用callback异步回调。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'mediaItemChange' } type 事件回调类型，支持事件`'mediaItemChange'`：当播放的媒体内容变化时，触发该事件。
     * @param { Callback<AVQueueItem> } callback 回调函数，参数AVQueueItem是当前正在播放的媒体内容。
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
     * 取消设置投播当前播放媒体内容事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'mediaItemChange' } type 取消对应的监听事件，支持事件`'mediaItemChange'`。
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
     * 设置播放下一首资源的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'playNext' } type - 事件回调类型，支持事件`'playNext'`：当播放下一首状态变化时，触发该事件。
     * @param { Callback<void> } callback - 回调函数。
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
     * 取消设置播放下一首资源事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'playNext' } type - 取消对应的监听事件，支持事件`'playNext'`。
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
     * 设置播放上一首资源的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'playPrevious' } type - 事件回调类型，支持事件`'playPrevious'`：当播放上一首状态变化时，触发该事件。
     * @param { Callback<void> } callback - 回调函数。
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
     * 取消设置播放上一首资源事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'playPrevious' } type - 取消对应的监听事件，支持事件`'playPrevious'`。
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
     * 设置请求播放的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'requestPlay' } type - 事件回调类型，支持事件`'requestPlay'`：当请求播放状态变化时，触发该事件。
     * @param { Callback<AVQueueItem> } callback - 回调函数，参数AVQueueItem是当前正在播放的媒体内容。当监听事件注册成功，err为undefined，否则返回错误对象。
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
     * 取消设置请求播放事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'requestPlay' } type - 取消对应的监听事件，支持事件`'requestPlay'`。
     * @param { Callback<AVQueueItem> } callback - 回调函数，参数AVQueueItem是当前正在播放的媒体内容。当监听事件取消成功，err为undefined，否则返回错误对象。该参数为可
     *     选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置播放结束的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'endOfStream' } type - 事件回调类型，支持事件`'endOfStream'`：当资源播放结束时，触发该事件。
     * @param { Callback<void> } callback - 回调函数。当监听事件注册成功，err为undefined，否则返回错误对象。
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
     * 取消设置播放结束事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'endOfStream' } type - 取消对应的监听事件，支持事件`'endOfStream'`。
     * @param { Callback<void> } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置seek结束的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'seekDone' } type - 事件回调类型，支持事件`'seekDone'`：当seek结束时，触发该事件。
     * @param { Callback<int> } callback - 回调函数，返回seek后播放的位置。
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
     * 取消设置seek结束事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'seekDone' } type - 取消对应的监听事件，支持事件`'seekDone'`。
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
     * 会话支持的有效命令变化监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 事件回调类型，支持事件`'validCommandChange'`：当检测到会话的合法命令发生改变时，触发该事件。 } type - 事件回调类型，支持事件`'validCommandChange'`：当检测到会话的合法命令发生改变时，触发该事件。
     * @param { Callback<Array<AVCastControlCommandType>> } callback - 回调函数。参数commands是有效命令的集合。
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
     * 取消会话有效命令变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 取消对应的监听事件，支持事件`'validCommandChange'`。 } type - 取消对应的监听事件，支持事件`'validCommandChange'`。
     * @param { Callback<Array<AVCastControlCommandType>> } callback - 回调函数。参数commands是有效命令的集合。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 媒体控制器监听视频尺寸变化变化的事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'videoSizeChange' } type - 事件回调类型，支持事件`'videoSizeChange'`：当检测到会话的合法命令发生改变时，触发该事件。
     * @param { function } callback - 回调函数。
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
     * 取消视频尺寸事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'videoSizeChange' } type - 事件回调类型，支持事件`'videoSizeChange'`：当检测到会话的合法命令发生改变时，触发该事件。
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
     * 监听远端播放器的错误事件，该事件仅用于错误提示，不需要用户停止播控动作。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'error' } type 错误事件回调类型，支持的事件：'error'，用户操作和系统都会触发此事件。
     * @param { ErrorCallback } callback 错误事件回调方法：远端播放过程中发生的错误，会提供错误码ID和错误信息。
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
     * 取消播放的错误事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'error' } type 错误事件回调类型，取消注册的事件：'error'。
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
     * 监听投播通用错误事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'castControlGenericError' } type 错误事件回调类型，支持的事件：'castControlGenericError'。
     * @param { ErrorCallback } callback 投播通用错误事件回调方法。
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
     * 取消投播通用的错误事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'castControlGenericError' } type 取消对应的监听事件，支持的事件是'castControlGenericError'。
     * @param { ErrorCallback } callback 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 监听投播输入/输出的错误事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'castControlIoError' } type 错误事件回调类型，支持的事件：'castControlIoError'。
     * @param { ErrorCallback } callback 投播输入/输出的错误事件回调方法。
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
     * 取消投播输入/输出的错误事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'castControlIoError' } type 取消对应的监听事件，支持的事件是'castControlIoError'。
     * @param { ErrorCallback } callback 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 监听投播解析的错误事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'castControlParsingError' } type 错误事件回调类型，支持的事件：'castControlParsingError'。
     * @param { ErrorCallback } callback 投播解析的错误事件回调方法。
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
     * 取消投播解析的错误事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'castControlParsingError' } type 取消对应的监听事件，支持的事件是'castControlParsingError'。
     * @param { ErrorCallback } callback 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 监听投播解码的错误事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'castControlDecodingError' } type 错误事件回调类型，支持的事件：'castControlDecodingError'。
     * @param { ErrorCallback } callback 投播解码的错误事件回调方法。
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
     * 取消投播解码的错误事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'castControlDecodingError' } type 取消对应的监听事件，支持的事件是'castControlDecodingError'。
     * @param { ErrorCallback } callback 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 监听投播音频渲染器的错误事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'castControlAudioRendererError' } type 错误事件回调类型，支持的事件：'castControlAudioRendererError'。
     * @param { ErrorCallback } callback 投播音频渲染器的错误事件回调方法。
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
     * 取消投播音频渲染器的错误事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'castControlAudioRendererError' } type 取消对应的监听事件，支持的事件是'castControlAudioRendererError'。
     * @param { ErrorCallback } callback 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 监听投播drm的错误事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'castControlDrmError' } type 错误事件回调类型，支持的事件：'castControlDrmError'。
     * @param { ErrorCallback } callback 投播drm的错误事件回调方法。
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
     * 取消投播drm的错误事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'castControlDrmError' } type 取消对应的监听事件，支持的事件是'castControlDrmError'。
     * @param { ErrorCallback } callback 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 在线DRM资源投播时，设置许可证请求的事件监听。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'keyRequest' } type - 事件回调类型，支持事件`'keyRequest'`：当DRM资源播放需要许可证时，触发该事件。
     * @param { KeyRequestCallback } callback - 回调函数，媒体资源及许可证请求数据。
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
     * 取消许可证请求事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'keyRequest' } type - 取消对应的监听事件，支持的事件是`'keyRequest'`。
     * @param { KeyRequestCallback } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 注册从远端设备发送的自定义数据的监听器。
     *
     * @param { 'customDataChange' } type - 事件回调类型，支持'customDataChange'事件。媒体提供方发送自定义数据时触发。
     * @param { Callback<Record<string, Object>> } callback - 回调函数，用于接收自定义数据。
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
     * 取消对自定义数据的监听。
     *
     * @param { 'customDataChange' } type - 取消对应的监听事件，支持的事件是'customDataChange'。
     * @param { Callback<Record<string, Object>> } [callback] - 注册监听事件时的回调函数。该参数为可选参数，若不填写该参数，则认为取消会话所有与此事件相关的监听。
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
   * 投播半模态对象，可拉起半模态窗口，选择投播设备。在使用前，需要创建AVCastPickerHelper实例。
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 14开始支持。
   * >
   * > - AVCastPickerHelper样式显示为半模态，实际会绑定
   * > [全模态页面（bindContentCover）]{@link CommonMethod#bindContentCover(isShow: boolean, builder: CustomBuilder, type?: ModalTransition)}
   * > 。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  class AVCastPickerHelper {
    /**
     * 创建AVCastPickerHelper对象，获取context请参考[getHostContext]{@link @ohos.arkui.UIContext:UIContext.getHostContext}。
     *
     * @param { Context } context - 应用上下文（仅支持[UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext}）。
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
     * 通过选择模式拉起AVCastPicker界面，用户可以选择投播设备。接口采用Promise异步返回形式，传入可选参数AVCastPickerOptions对象，无返回结果。
     *
     * @param { AVCastPickerOptions } [options] - AVCastPicker选择选项。无此参数时，以AVCastPickerOptions默认值拉起。
     * @returns { Promise<void> } Promise对象。当命令发送成功，无返回结果，否则返回错误对象。
     * @throws { BusinessError } 401 - parameter check failed. 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    select(options?: AVCastPickerOptions): Promise<void>;

    /**
     * 将应用通话设备恢复至默认设备。例如，在语音通话场景下，手机设备的通话装置将恢复为听筒。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 21 dynamic
     * @since 24 static
     */
    resetCommunicationDevice(): Promise<void>;

    /**
     * 设置半模态窗口变化的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 事件回调类型，支持事件`'pickerStateChange'`：当半模态窗口变化时，触发该事件。 } type - 事件回调类型，支持事件`'pickerStateChange'`：当半模态窗口变化时，触发该事件。
     * @param { Callback<AVCastPickerState> } callback - 回调函数，参数state是变化后的半模态窗口状态。
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
     * 取消半模态窗口变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 取消对应的监听事件，支持事件`'pickerStateChange'`。 } type - 取消对应的监听事件，支持事件`'pickerStateChange'`。
     * @param { Callback<AVCastPickerState> } callback - 回调函数，参数state是变化后的半模态窗口状态。
     *     <br>当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
   * 定义可弹出菜单的组件的位置。
   *
   * @typedef MenuPosition
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 22 dynamic
   * @since 24 static
   */
  interface MenuPosition {
    /**
     * 组件在X轴上的位置坐标。单位为vp。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    x: int;

    /**
     * 组件在y轴上的位置坐标。单位为vp。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    y: int;

    /**
     * 组件宽度。单位为vp。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    width: int;

    /**
     * 组件高度。单位为vp。
     *
     * @type { int }
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 22 dynamic
     * @since 24 static
     */
    height: int;
  }

  /**
   * 拉起的投播组件包含的配置属性。
   *
   * @typedef AVCastPickerOptions
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  interface AVCastPickerOptions {
    /**
     * 会话类型，默认值为audio。
     * 
     * 当前仅支持的会话类型有audio和video。如果传入voice_call或video_call，将默认按照传入audio处理。
     *
     * @type { ? AVSessionType }
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    sessionType?: AVSessionType;

    /**
     * 设置组件样式。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 22 dynamic
     * @since 24 static
     */
    pickerStyle?: AVCastPickerStyle;

    /**
     * 当pickerStyle设置为STYLE_MENU时，可以设置弹出菜单的位置。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 22 dynamic
     * @since 24 static
     */
    menuPosition?: MenuPosition;
  }

  /**
   * 许可证请求事件的回调函数。
   *
   * @param { string } assetId - 媒体ID。
   * @param { Uint8Array } requestData - 媒体许可证请求数据。
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  type KeyRequestCallback = (assetId: string, requestData: Uint8Array) => void;

  /**
   * 投播显示设备状态的枚举。
   *
   * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum CastDisplayState {
    /**
     * 设备断开，扩展屏不再显示内容。
     *
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_OFF = 1,

    /**
     * 设备连接成功，扩展屏可用。
     *
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    STATE_ON = 2
  }

  /**
   * 扩展屏投播显示设备相关属性。
   *
   * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface CastDisplayInfo {
    /**
     * 投播显示设备的ID，该参数应为整数。
     *
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    id: long;

    /**
     * 投播显示设备的名称。
     *
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 投播显示设备状态。
     *
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    state: CastDisplayState;

    /**
     * 投播显示设备的屏幕宽度，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * 投播显示设备的屏幕高度，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.Multimedia.AVSession.ExtendedDisplayCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * 表示投播设备支持的音频能力。
   *
   * @typedef AudioCapabilities
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface AudioCapabilities {
    /**
     * 音频能力参数的列表。
     *
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
   * 连接状态枚举。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum ConnectionState {
    /**
     * 设备连接中。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_CONNECTING = 0,

    /**
     * 设备连接成功。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_CONNECTED = 1,

    /**
     * 设备断开连接。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_DISCONNECTED = 6,

    /**
     * 与远端设备连接认证中。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    STATE_AUTHENTICATING = 10,

    /**
     * 从镜像模式切换到音视频投播。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    STATE_MIRROR_TO_STREAM = 11,

    /**
     * 从音视频投播切换到镜像模式。
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
   * 枚举，表示当前媒体资源的金标，即应用媒体音源的特殊类型标识。
   *
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
   * 枚举，设备所支持的解码格式。
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
    OH_AVCODEC_MIMETYPE_VIDEO_AVC = 'video/avc',

    /**
     * Defination of hevc codec type.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    OH_AVCODEC_MIMETYPE_VIDEO_HEVC = 'video/hevc',

    /**
     * Defination of audio vivid codec type.
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    OH_AVCODEC_MIMETYPE_AUDIO_VIVID = 'audio/av3a'
  }

  /**
   * 枚举，设备所支持的分辨率。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  enum ResolutionLevel {
    /**
     * 分辨率为480P（640×480 px）。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RESOLUTION_480P = 0,

    /**
     * 分辨率为720P（1280×720 px）。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RESOLUTION_720P = 1,

    /**
     * 分辨率为1080P（1920×1080 px）。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RESOLUTION_1080P = 2,

    /**
     * 分辨率为2K（2560×1440 px）。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RESOLUTION_2K = 3,

    /**
     * 分辨率为4K（3840×2160 px）。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RESOLUTION_4K = 4
  }

  /**
   * 歌单（歌曲列表）的相关属性。
   *
   * @interface AVQueueInfo
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface AVQueueInfo {
    /**
     * 歌单所属应用包名。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 歌单（歌曲列表）名称。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    avQueueName: string;

    /**
     * 歌单（歌曲列表）唯一标识Id。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    avQueueId: string;

    /**
     * 歌单（歌曲列表）封面图，图片的像素数据或者图片路径地址（本地路径或网络路径）。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    avQueueImage: image.PixelMap | string;

    /**
     * 歌单最后播放时间。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    lastPlayedTime?: long;
  }

  /**
   * 表示定义在不同场景中使用的额外键的枚举。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum ExtraKey {
    /**
     * 作为[setExtras]{@link avSession.AVSession.setExtras(extras: {[key: string]: Object})}接口传入的键，用于向系统设置应用所需的能力列表。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    REQUIRE_ABILITY_LIST = 'requireAbilityList',

    /**
     * 作为[setExtras]{@link avSession.AVSession.setExtras(extras: {[key: string]: Object})}接口，给REQUIRE_ABILITY_LIST键传入能力列
     * 表的值，用于通知系统当前应用支持URL投播功能。
     * 
     * [setExtras]{@link avSession.AVSession.setExtras(extras: {[key: string]: Object})}接口传入入参
     * `{[avSession.ExtraKey.REQUIRE_ABILITY_LIST]: [avSession.ExtraKey.SUPPORT_URL_CASTING]}`表示当前应用支持投播功能。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SUPPORT_URL_CASTING = 'url-cast',

    /**
     * 作为[setExtras]{@link avSession.AVSession.setExtras(extras: {[key: string]: Object})}接口传入的键，值传入bool类型列表，用于通知系统在锁屏时是
     * 否隐藏实况窗卡片。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    LIVE_VIEW_HIDDEN_WHEN_KEYGUARD = 'hw_live_view_hidden_when_keyguard',

    /**
     * [AVMediaDescription]{@link avSession.AVMediaDescription}中extras属性可传入的键，值传入string类型。
     * 
     * 用于DLNA投播场景下，在发送给对端的报文中，为CurrentURIMetaData标签添加内容。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    DLNA_CURRENT_URI_METADATA = 'CurrentURIMetadata',

    /**
     * [AVMediaDescription]{@link avSession.AVMediaDescription}中extras属性可传入的键，值传入string类型。
     * 
     * 用于DLNA投播场景下，在发送给对端的报文中，为DIDL-Lite标签添加内容。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    DLNA_DIDL_LITE = 'DIDL-Lite'
  }

  /**
   * 媒体元数据的相关属性。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVMetadata {
    /**
     * 媒体ID。媒体信息的唯一标识，由应用自定义。
     * 
     * - 该属性发生变化则其他元数据属性都将被刷新。
     * - 若该属性维持不变，且不设置相应的媒体元数据信息，那么将不会更新对应的媒体元数据信息。
     * - 当该属性设为空值时，调用[setAVMetadata]{@link avSession.AVSession.setAVMetadata(data: AVMetadata)}方法将失败，返回错误码6600101。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    assetId: string;

    /**
     * 标题。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    title?: string;

    /**
     * 艺术家。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    artist?: string;

    /**
     * 专辑作者。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    author?: string;

    /**
     * 歌单（歌曲列表）名称。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 12 dynamic
     * @since 23 static
     */
    avQueueName?: string;

    /**
     * 歌单（歌曲列表）唯一标识Id。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    avQueueId?: string;

    /**
     * 歌单（歌曲列表）封面图。
     * 
     * 图片的像素数据或者图片路径地址（本地路径或网络路径）。应用通过setAVMetadata设置图片数据。
     * 
     * - 设置的数据类型为PixelMap时，通过getAVMetadata获取的将为PixelMap。
     * - 设置为url图片路径，获取的为url图片路径。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    avQueueImage?: image.PixelMap | string;

    /**
     * 专辑名称。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    album?: string;

    /**
     * 词作者。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    writer?: string;

    /**
     * 作曲者。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    composer?: string;

    /**
     * 媒体时长，单位毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    duration?: long;

    /**
     * 图片的像素数据或者图片路径地址（本地路径或网络路径）。应用通过setAVMetadata设置图片数据。
     * 
     * - 设置的数据类型为PixelMap时，通过getAVMetadata获取的将为PixelMap。
     * - 设置为url图片路径，获取的为url图片路径。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    mediaImage?: image.PixelMap | string;

    /**
     * 应用图标图片的像素数据。只读类型，不从应用侧设置。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 18 dynamic
     * @since 23 static
     */
    readonly bundleIcon?: image.PixelMap;

    /**
     * 发行日期。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    publishDate?: Date;

    /**
     * 子标题。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    subtitle?: string;

    /**
     * 媒体描述。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    description?: string;

    /**
     * 媒体歌词内容。应用需将歌词内容拼接为一个字符串传入。
     * 
     * 字符串长度需小于40960字节。
     * 
     * **说明：** 系统支持简单版的LRC格式（Simple LRC format）的歌词文本内容。当传入的歌词内容不规范（例如：出现重复的时间戳等），将导致解析失败，并在系统中显示异常。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    lyric?: string;

    /**
     * 单条媒体歌词内容。应用需将歌词内容拼接为一个字符串传入（不包含时间戳）。
     * 
     * 字符串长度小于40960字节。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    singleLyricText?: string;

    /**
     * 上一首媒体ID。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    previousAssetId?: string;

    /**
     * 下一首媒体ID。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    nextAssetId?: string;

    /**
     * 当前会话支持的协议，默认为TYPE_CAST_PLUS_STREAM。具体取值参考[ProtocolType]{@link avSession.ProtocolType}。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    filter?: int;

    /**
     * 当前session支持的DRM方案，取值为DRM方案uuid。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 12 dynamic
     * @since 23 static
     */
    drmSchemes?: Array<string>;

    /**
     * 快进快退支持的时间间隔。默认为SECONDS_15，即15秒。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    skipIntervals?: SkipIntervals;

    /**
     * 快退支持的时间间隔。默认为SECONDS_15，即15秒。
     * 
     * 系统会使用此值作为快退操作的时间间隔，而非skipIntervals的值。
     * 
     * 若未设置此参数，快退操作的时间间隔仍会沿用skipIntervals的值。
     * 
     * **起始版本**：26.0.0
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    rewindSkipIntervals?: SkipIntervals;

    /**
     * 快进支持的时间间隔。默认为SECONDS_15，即15秒。
     * 
     * 系统会使用此值作为快进操作的时间间隔，而非skipIntervals的值。
     * 
     * 若未设置此参数，快进操作的时间间隔仍会沿用skipIntervals的值。
     * 
     * **起始版本**：26.0.0
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    fastForwardSkipIntervals?: SkipIntervals;

    /**
     * 媒体资源的金标类型，取值参考[DisplayTag]{@link avSession.DisplayTag}。
     *
     * @type { ?int }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    displayTags?: int;
  }

  /**
   * 播放列表媒体元数据的相关属性。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVMediaDescription {
    /**
     * 媒体ID。媒体信息的唯一标识，由应用自定义。
     * 
     * - 该属性发生变化则其他元数据属性都将被刷新。
     * - 若该属性维持不变，且不设置相应的媒体元数据信息，那么将不会更新对应的媒体元数据信息。
     * - 当该属性设为空值时，调用[setAVMetadata]{@link avSession.AVSession.setAVMetadata(data: AVMetadata)}方法将失败，返回错误码6600101。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    assetId: string;
    /**
     * 标题。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    title?: string;

    /**
     * 子标题。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    subtitle?: string;

    /**
     * 播放列表媒体描述的文本。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    description?: string;

    /**
     * 设置播放列表媒体图片像素数据。
     * 
     * 在使用了cast+协议的音视频投播场景下，该字段用于给对端设备设置媒体专辑封面。
     * 
     * 当入参为string类型时：
     * 
     * - 只支持使用网络URI设置封面，不支持本地URI。
     * - 其作用与albumCoverUri属性功能相同，且优先级高于albumCoverUri。
     * 
     * 从API version 23开始，支持入参为image.PixelMap类型给对端设备设置媒体信息。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    mediaImage?: image.PixelMap | string;
    /**
     * 播放列表媒体额外字段。
     * 
     * 从API版本26.0.0开始，DLNA投播场景下支持将[ExtraKey]{@link avSession.ExtraKey}中DLNA_CURRENT_URI_METADATA和DLNA_DIDL_LITE两个键的值传递给对
     * 端设备，键值对的值需传入符合XML格式的字符串。如传入入参`{[avSession.ExtraKey.DLNA_CURRENT_URI_METADATA]: '<xxtv>...</xxtv>'}`。
     * 
     * - 非DLNA投播场景不生效。
     * - 非字符串类型不生效。
     * - 非XML格式会触发
     * [on('castControlIoError')]{@link avSession.AVCastController.on(type: 'castControlIoError', callback: ErrorCallback)}
     * 回调并返回错误码6612000。错误码的详细介绍请参见[媒体会话管理错误码](docroot://reference/apis-avsession-kit/errorcode-avsession.md)。
     * - 通过extras字段，在[ExtraKey]{@link avSession.ExtraKey}中通过DLNA_CURRENT_URI_METADATA和DLNA_DIDL_LITE键传入的字符串总长度需小于40960字
     * 节。
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
     * 播放列表媒体类型。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    mediaType?: string;

    /**
     * 播放列表媒体的大小。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    mediaSize?: int;

    /**
     * 播放列表媒体专辑标题。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    albumTitle?: string;

    /**
     * 播放列表媒体专辑封面URI。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    albumCoverUri?: string;

    /**
     * 播放列表媒体歌词内容。
     * 
     * 字符串长度需小于40960字节。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    lyricContent?: string;

    /**
     * 播放列表媒体歌词URI。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    lyricUri?: string;

    /**
     * 播放列表媒体专辑作者。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    artist?: string;

    /**
     * 播放列表媒体URI。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    mediaUri?: string;

    /**
     * 播放列表媒体本地文件的句柄。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    fdSrc?: media.AVFileDescriptor;

    /**
     * 播放列表数据源描述。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 12 dynamic
     * @since 23 static
     */
    dataSrc?: media.AVDataSrcDescriptor;

    /**
     * 播放列表是否使用PCM数据源。true表示使用PCM数据源，false表示不使用PCM数据源。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    pcmSrc?: boolean;

    /**
     * 播放列表媒体支持的DRM方案，由uuid表示。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 12 dynamic
     * @since 23 static
     */
    drmScheme?: string;

    /**
     * 播放列表媒体播放时长。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    duration?: int;

    /**
     * 播放列表媒体起始播放位置。音视频投播场景中，在投播直播资源时，此字段应置空或赋值为0。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    startPosition?: int;

    /**
     * 播放列表媒体的片尾播放位置。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    creditsPosition?: int;

    /**
     * 播放列表提供的应用的名字。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    appName?: string;

    /**
     * 媒体资源的金标类型，取值参考[DisplayTag]{@link avSession.DisplayTag}。
     * 
     * 在使用了cast+协议的音频投播场景下，不支持使用该属性。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    displayTags?: int;

    /**
     * 投播过程中应用程序向接收方发送的自定义数据。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    launchClientData?: string;
  }

  /**
   * 播放列表中单项的相关属性。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVQueueItem {
    /**
     * 播放列表中单项的ID。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    itemId: int;

    /**
     * 播放列表中单项的媒体元数据。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    description?: AVMediaDescription;
  }

  /**
   * 媒体播放状态的相关属性。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVPlaybackState {
    /**
     * 播放状态。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    state?: PlaybackState;

    /**
     * 播放倍速。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    speed?: double;

    /**
     * 播放位置。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    position?: PlaybackPosition;

    /**
     * 缓冲时间。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    bufferedTime?: long;

    /**
     * 循环模式。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    loopMode?: LoopMode;

    /**
     * 表示是否收藏。true表示收藏，false表示不收藏。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    isFavorite?: boolean;

    /**
     * 正在播放的媒体ID。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    activeItemId?: int;

    /**
     * 正在播放的媒体音量。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    volume?: int;

    /**
     * 最大音量。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    maxVolume?: int;

    /**
     * 当前是否是静音状态。true表示是，false表示不是。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    muted?: boolean;

    /**
     * 当前媒体资源的时长，单位为毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    duration?: int;

    /**
     * 媒体资源的视频宽度，单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    videoWidth?: int;

    /**
     * 媒体资源的视频高度，单位为像素（px）。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    videoHeight?: int;

    /**
     * 自定义媒体数据。
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
   * 媒体播放位置的相关属性。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PlaybackPosition {
    /**
     * 已用时间，单位毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    elapsedTime: long;

    /**
     * 更新时间，单位毫秒（ms）。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    updateTime: long;
  }

  /**
   * 通话会话元数据相关属性。
   *
   * @interface CallMetadata [since 11 - 11]
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface CallMetadata {
    /**
     * 来电人姓名（别名）。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    name?: string;

    /**
     * 来电电话号码。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    phoneNumber?: string;

    /**
     * 来电人头像。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    avatar?: image.PixelMap;
  }

  /**
   * 通话状态相关属性。
   *
   * @interface AVCallState [since 11 - 11]
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface AVCallState {
    /**
     * 当前通话状态。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    state: CallState;

    /**
     * 表示通话mic是否静音。 true表示是静音，false表示不是静音。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    muted: boolean;
  }

  /**
   * 表示通话状态的枚举。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  enum CallState {
    /**
     * 空闲状态。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CALL_STATE_IDLE = 0,

    /**
     * 来电。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CALL_STATE_INCOMING = 1,

    /**
     * 接通。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CALL_STATE_ACTIVE = 2,

    /**
     * 响铃。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CALL_STATE_DIALING = 3,

    /**
     * 等待接通。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CALL_STATE_WAITING = 4,

    /**
     * 保持。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CALL_STATE_HOLDING = 5,

    /**
     * 挂断。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    CALL_STATE_DISCONNECTING = 6
  }

  /**
   * 投播的类别枚举。
   *
   * @syscap SystemCapability.Multimedia.AVSession.AVCast
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum AVCastCategory {
    /**
     * 本地播放，默认播放设备，声音从本机或者连接的蓝牙耳机设备出声。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CATEGORY_LOCAL = 0,

    /**
     * 远端播放，远端播放设备，声音从其他设备发出声音或者画面。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    CATEGORY_REMOTE = 1
  }
  /**
   * 播放设备的类型枚举。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum DeviceType {
    /**
     * 本地播放类型设备。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_LOCAL = 0,

    /**
     * 电视设备。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_TV = 2,

    /**
     * 音箱设备。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_SMART_SPEAKER = 3,

    /**
     * 蓝牙设备。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    DEVICE_TYPE_BLUETOOTH = 10,

    /**
     * 车载设备。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    DEVICE_TYPE_CAR = 4,

    /**
     * 平板设备。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    DEVICE_TYPE_PAD = 6,

    /**
     * 支持Cast+协议的默认设备。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    DEVICE_TYPE_DEFAULT_CAST_PLUS_STREAM = 7,

    /**
     * PC/2in1设备。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    DEVICE_TYPE_2IN1 = 8,

    /**
     * HiPlay设备。
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
   * 播放设备的相关信息。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface DeviceInfo {
    /**
     * 投播的类别。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    castCategory: AVCastCategory;
    /**
     * 播放设备的ID。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    deviceId: string;

    /**
     * 播放设备的名称。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * 播放设备的类型。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    deviceType: DeviceType;

    /**
     * 播放设备生产厂家。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    manufacturer?: string;

    /**
     * 播放设备型号名称。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    modelName?: string;

    /**
     * 播放设备的网络ID。
     * 
     * **系统接口：** 该接口为系统接口。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    networkId?: string;

    /**
     * 播放设备的IP地址。
     * 
     * **系统接口：** 该接口为系统接口。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    ipAddress?: string;

    /**
     * 播放设备提供商。
     * 
     * **系统接口：** 该接口为系统接口。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    providerId?: int;

    /**
     * 播放设备支持的协议。
     * 
     * 默认为TYPE_LOCAL,具体取值来自[ProtocolType]{@link avSession.ProtocolType}，可以是ProtocolType中的某个协议或者多个协议的组合。
     * 
     * 设备仅支持一种协议，返回对应枚举值；设备支持多种协议，返回对应枚举值之和。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    supportedProtocols?: int;

    /**
     * 播放设备支持的DRM能力。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    supportedDrmCapabilities?: Array<string>;

    /**
     * 支持拉端客户端的ID集合（只有支持4K投播的设备会返回此字段）。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    supportedPullClients?: Array<int>;

    /**
     * 播放设备是否可信。默认为0。0代表设备不可信，1代表设备可信。
     * 
     * **系统接口：** 该接口为系统接口。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    authenticationStatus?: int;

    /**
     * 表示当前设备是否为旧版设备。 true表示是，false表示不是。 
     * 
     * **系统接口：** 该接口为系统接口。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    isLegacy?: boolean;

    /**
     * 用于发现设备的介质类型。
     * 
     * 1：蓝牙低功耗（BLE），用于蓝牙设备的发现和链接。 
     * 
     * 2：受限应用协议（COAP），用于局域网内的设备发现。
     * 
     * **系统接口：** 该接口为系统接口。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    mediumTypes?: int;

    /**
     * 播放设备支持的音频能力。
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
   * 播放设备的相关信息。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface OutputDeviceInfo {
    /**
     * 播放设备的集合。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    devices: Array<DeviceInfo>;
  }

  /**
   * 表示媒体播放循环模式的枚举。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum LoopMode {
    /**
     * 顺序播放。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    LOOP_MODE_SEQUENCE = 0,

    /**
     * 单曲循环。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    LOOP_MODE_SINGLE = 1,

    /**
     * 表单循环。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    LOOP_MODE_LIST = 2,

    /**
     * 随机播放。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    LOOP_MODE_SHUFFLE = 3,

    /**
     * 自定义播放。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    LOOP_MODE_CUSTOM = 4
  }

  /**
   * 表示session支持的快进快退时间间隔的枚举。
   * 
   * | 名称                   | 值 | 说明                     |
   * | ---------------------- | -- | ----------------------- |
   * | SECONDS_10             | 10 | 时间为10秒。             |
   * | SECONDS_15             | 15 | 时间为15秒。             |
   * | SECONDS_30             | 30 | 时间为30秒。             |
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
   * 表示session支持的后台播放模式的枚举。
   * 
   * | 名称                      | 值 | 说明                    |
   * | ------------------------- | - | ----------------------- |
   * | ENABLE_BACKGROUND_PLAY    | 0 | 支持后台播放。            |
   * | DISABLE_BACKGROUND_PLAY   | 1 | 不支持后台播放。          |
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
   * 表示媒体播放状态的枚举。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum PlaybackState {
    /**
     * 初始状态。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_INITIAL = 0,

    /**
     * 播放准备状态。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_PREPARE = 1,

    /**
     * 正在播放。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_PLAY = 2,

    /**
     * 暂停。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_PAUSE = 3,

    /**
     * 快进。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_FAST_FORWARD = 4,

    /**
     * 快退。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_REWIND = 5,

    /**
     * 停止。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_STOP = 6,

    /**
     * 播放完成。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_COMPLETED = 7,

    /**
     * 释放。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_RELEASED = 8,

    /**
     * 错误。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_ERROR = 9,

    /**
     * 空闲状态。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_IDLE = 10,

    /**
     * 缓冲。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    PLAYBACK_STATE_BUFFERING = 11
  }

  /**
   * 会话的相关描述信息。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Manager
   * @systemapi [since 9 - 22]
   * @publicapi [since 23]
   * @since 9 dynamic
   * @since 23 static
   */
  interface AVSessionDescriptor {
    /**
     * 会话ID。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @since 9 dynamic
     * @since 23 static
     */
    sessionId: string;

    /**
     * 会话类型。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @since 9 dynamic
     * @since 23 static
     */
    type: AVSessionType;

    /**
     * 会话的自定义名称。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @since 9 dynamic
     * @since 23 static
     */
    sessionTag: string;

    /**
     * 会话所属应用的信息（包含bundleName、abilityName等）。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @since 9 dynamic
     * @since 23 static
     */
    elementName: ElementName;

    /**
     * 会话是否被激活。
     * 
     * true：已被激活。 
     * 
     * false：没有被激活。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @since 9 dynamic
     * @since 23 static
     */
    isActive: boolean;

    /**
     * 会话是否为最新的会话。 
     * 
     * true：是最新的会话。
     * 
     * false：不是最新的会话。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Manager
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @since 9 dynamic
     * @since 23 static
     */
    isTopSession: boolean;

    /**
     * 分布式设备相关信息。
     * 
     * **系统接口：** 该接口为系统接口。
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
   * 媒体提供方设置的自定义媒体数据包对象。
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
   * AVSessionController控制器可查看会话ID，并可完成对会话发送命令及事件，获取会话元数据，播放状态信息等操作。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 10开始支持。
   *
   * @interface AVSessionController [since 10 - 11]
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVSessionController {
    /**
     * AVSessionController对象唯一的会话标识。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly sessionId: string;

    /**
     * 获取当前的远端播放状态。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<AVPlaybackState> } callback - 回调函数，返回远端播放状态。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getAVPlaybackState(callback: AsyncCallback<AVPlaybackState>): void;

    /**
     * 获取当前的远端播放状态。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<AVPlaybackState> } Promise对象,返回远端播放状态。
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
     * 使用同步方法获取当前会话的播放状态。
     *
     * @returns { AVPlaybackState } 当前会话的播放状态。
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
     * 获取会话元数据。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<AVMetadata> } callback - 回调函数，返回会话元数据。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getAVMetadata(callback: AsyncCallback<AVMetadata>): void;

    /**
     * 获取会话元数据。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<AVMetadata> } Promise对象，返回会话元数据。
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
     * 使用同步方法获取会话元数据。
     *
     * @returns { AVMetadata } 会话元数据。
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
     * 获取通话状态数据。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<AVCallState> } callback - 回调函数，返回通话状态。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    getAVCallState(callback: AsyncCallback<AVCallState>): void;

    /**
     * 获取通话状态数据。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<AVCallState> } Promise对象，返回通话状态。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    getAVCallState(): Promise<AVCallState>;

    /**
     * 获取通话会话的元数据。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<CallMetadata> } callback - 回调函数，返回会话元数据。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    getCallMetadata(callback: AsyncCallback<CallMetadata>): void;

    /**
     * 获取通话会话的元数据。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<CallMetadata> } Promise对象，返回会话元数据。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 11 dynamic
     * @since 23 static
     */
    getCallMetadata(): Promise<CallMetadata>;

    /**
     * 获取当前播放列表的名称。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<string> } callback - 回调函数，返回播放列表名称。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getAVQueueTitle(callback: AsyncCallback<string>): void;

    /**
     * 获取当前会话播放列表的名称。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<string> } Promise对象。返回播放列表名称。
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
     * 使用同步方法获取当前会话播放列表的名称。
     *
     * @returns { string } 当前会话播放列表名称。
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
     * 获取当前播放列表相关信息。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<Array<AVQueueItem>> } callback - 回调函数，返回播放列表队列。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getAVQueueItems(callback: AsyncCallback<Array<AVQueueItem>>): void;

    /**
     * 获取当前会话播放列表相关信息。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<Array<AVQueueItem>> } Promise对象。返回播放列表队列。
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
     * 使用同步方法获取当前会话播放列表相关信息。
     *
     * @returns { Array<AVQueueItem> } 当前会话播放列表队列。
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
     * 设置指定播放列表单项的ID，发送给session端处理，session端可以选择对这个单项歌曲进行播放。结果通过callback异步回调方式返回。
     *
     * @param { int } itemId - 播放列表单项的ID值，用以表示选中的播放列表单项。
     * @param { AsyncCallback<void> } callback - 回调函数。当播放状态设置成功，err为undefined，否则返回错误对象。
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
     * 设置指定播放列表单项的ID，发送给session端处理，session端可以选择对这个单项歌曲进行播放。结果通过Promise异步回调方式返回。
     *
     * @param { int } itemId - 播放列表单项的ID值，用以表示选中的播放列表单项。
     * @returns { Promise<void> } Promise对象。当播放列表单项ID设置成功，无返回结果，否则返回错误对象。
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
     * 获取播放设备信息。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<OutputDeviceInfo> } callback - 回调函数，返回播放设备信息。
     * @throws { BusinessError } 600101 - Session service exception.
     * @throws { BusinessError } 600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getOutputDevice(callback: AsyncCallback<OutputDeviceInfo>): void;

    /**
     * 获取播放设备信息。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<OutputDeviceInfo> } Promise对象，返回播放设备信息。
     * @throws { BusinessError } 600101 - Session service exception.
     * @throws { BusinessError } 600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getOutputDevice(): Promise<OutputDeviceInfo>;

    /**
     * 使用同步方法获取当前输出设备信息。
     *
     * @returns { OutputDeviceInfo } 当前输出设备信息。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getOutputDeviceSync(): OutputDeviceInfo;

    /**
     * 获取应用支持的播放倍速列表。使用Promise异步回调。
     * 
     * 该列表通过[setSupportedPlaySpeeds]{@link avSession.AVSession.setSupportedPlaySpeeds}接口设置。如果应用未设置或者设置为空列表，则返回空列表。
     *
     * @returns { Promise<Array<double>> } Promise对象。返回支持的播放倍速列表。
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getSupportedPlaySpeeds(): Promise<Array<double>>;

    /**
     * 获取应用支持的循环模式列表。使用Promise异步回调。
     * 
     * 该列表通过[setSupportedLoopModes]{@link avSession.AVSession.setSupportedLoopModes}接口设置。如果应用未设置或者设置为空列表，则返回空列表。
     *
     * @returns { Promise<Array<LoopMode>> } Promise对象。返回支持的循环模式列表。
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    getSupportedLoopModes(): Promise<Array<LoopMode>>;

    /**
     * 发送按键事件到会话。结果通过callback异步回调方式返回。
     *
     * @param { KeyEvent } event - 按键事件。
     * @param { AsyncCallback<void> } callback - 回调函数。当事件发送成功，err为undefined，否则返回错误对象。
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
     * 发送按键事件到控制器对应的会话。结果通过Promise异步回调方式返回。
     *
     * @param { KeyEvent } event - 按键事件。
     * @returns { Promise<void> } Promise对象。当事件发送成功，无返回结果，否则返回错误对象。
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
     * 获取应用在会话中保存的WantAgent对象。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<WantAgent> } callback - 回调函数。返回在
     *     [setLaunchAbility]{@link avSession.AVSession.setLaunchAbility(ability: WantAgent)}保存的对象，包括应用的相关属性信息，如
     *     bundleName，abilityName，deviceId等。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getLaunchAbility(callback: AsyncCallback<WantAgent>): void;

    /**
     * 获取应用在会话中保存的WantAgent对象。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<WantAgent> } Promise对象，返回在
     *     [setLaunchAbility]{@link avSession.AVSession.setLaunchAbility(ability: WantAgent)}保存的对象，包括应用的相关属性信息，如
     *     bundleName，abilityName，deviceId等。
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
     * 使用同步方法获取当前播放位置。
     *
     * @returns { long } 时间节点，毫秒数。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getRealPlaybackPositionSync(): long;

    /**
     * 判断会话是否被激活。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回会话是否为激活状态，true表示被激活，false表示禁用。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    isActive(callback: AsyncCallback<boolean>): void;

    /**
     * 获取会话是否被激活。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<boolean> } Promise对象，返回会话是否为激活状态，true表示被激活，false表示禁用。
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
     * 使用同步方法判断会话是否被激活。
     *
     * @returns { 会话是否为激活状态，true表示被激活，false表示禁用。 } 会话是否为激活状态，true表示被激活，false表示禁用。
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
     * 销毁当前控制器，销毁后当前控制器不可再用。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当控制器销毁成功，err为undefined，否则返回错误对象。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    destroy(callback: AsyncCallback<void>): void;

    /**
     * 销毁当前控制器，销毁后当前控制器不可再用。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<void> } Promise对象。当控制器销毁成功，无返回结果，否则返回错误对象。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    destroy(): Promise<void>;

    /**
     * 获取会话支持的有效命令。结果通过callback异步回调方式返回。
     *
     * @param { AsyncCallback<Array<AVControlCommandType>> } callback - 回调函数，返回有效命令的集合。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600102 - The session does not exist.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getValidCommands(callback: AsyncCallback<Array<AVControlCommandType>>): void;

    /**
     * 获取会话支持的有效命令。结果通过Promise异步回调方式返回。
     *
     * @returns { Promise<Array<AVControlCommandType>> } Promise对象。返回有效命令的集合。
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
     * 使用同步方法获取会话支持的有效命令。
     *
     * @returns {Array<AVControlCommandType> } 会话支持的有效命令的集合。
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
     * 通过会话控制器发送命令到其对应的会话。结果通过callback异步回调方式返回。
     * 
     * > **说明：**
     * >
     * > 媒体控制方在使用sendControlCommand命令前，需要确保控制对应的媒体会话注册了对应的监听，注册媒体会话相关监听的方法请参见接口
     * > [on('play')]{@link avSession.AVSession.on(type: 'play', callback: () => void)}、
     * > [on('pause')]{@link avSession.AVSession.on(type: 'pause', callback: () => void)}等。
     *
     * @param { AVControlCommand } command - 会话的相关命令和命令相关参数。
     * @param { AsyncCallback<void> } callback - 回调函数。当命令发送成功，err为undefined，否则返回错误对象。
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
     * 通过控制器发送命令到其对应的会话。结果通过Promise异步回调方式返回。
     * 
     * > **说明：**
     * >
     * > 媒体控制方在使用sendControlCommand命令前，需要确保控制对应的媒体会话注册了对应的监听，注册媒体会话相关监听的方法请参见接口
     * > [on('play')]{@link avSession.AVSession.on(type: 'play', callback: () => void)}、
     * > [on('pause')]{@link avSession.AVSession.on(type: 'pause', callback: () => void)}等。
     *
     * @param { AVControlCommand } command - 会话的相关命令和命令相关参数。
     * @returns { Promise<void> } Promise对象。当命令发送成功，无返回结果，否则返回错误对象。
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
     * 通过会话控制器发送自定义命令到其对应的会话。结果通过callback异步回调方式返回。
     *
     * @param { string } command - 需要设置的自定义控制命令的名称。
     * @param { object } args - 需要传递的控制命令键值对。
     * @param { AsyncCallback<void> } callback - 回调函数。当命令发送成功，err为undefined，否则返回错误对象。
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
     * 通过会话控制器发送自定义控制命令到其对应的会话。结果通过Promise异步回调方式返回。
     *
     * @param { string } command - 需要设置的自定义控制命令的名称。
     * @param { object } args - 需要传递的控制命令键值对。
     * @returns { Promise<void> } Promise对象。无返回结果。
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
     * 发送私有数据到远端设备。使用Promise异步回调。
     *
     * @param { Record<string, Object> } data - 应用程序填充的自定义数据。服务端仅解析key为'customData'，且Object为string类型的对象。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 获取媒体提供方设置的自定义媒体数据包。使用callback异步回调。
     *
     * @param { AsyncCallback<{[key: string]: Object}> } callback - 回调函数，返回媒体提供方设置的自定义媒体数据包，数据包的内容与setExtras设置的内容完全一致。
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
     * 获取媒体提供方设置的自定义媒体数据包。使用Promise异步回调。
     *
     * @returns { Promise<{[key: string]: Object}> } Promise对象，返回媒体提供方设置的自定义媒体数据包，数据包的内容与setExtras设置的内容完全一致。
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
     * 根据远端分布式事件类型，获取远端分布式媒体提供方设置的自定义媒体数据包。使用Promise异步回调。
     *
     * @param { string } extraEvent - 远端分布式事件类型。可获取的事件类型来自于
     *     [setExtras]{@link avSession.AVSession.setExtras(extras: {[key: string]: Object})}。
     *     <br>对Wearable设备类型，额外提供以下预设的事件类型：
     *     <br>'AUDIO_GET_VOLUME'：获取远端设备音量。
     *     <br>'AUDIO_GET_AVAILABLE_DEVICES'：获取远端所有可连接设备。
     *     <br>'AUDIO_GET_PREFERRED_OUTPUT_DEVICE_FOR_RENDERER_INFO'：获取远端实际发声设备。
     * @returns { Promise<ExtraInfo> } Promise对象，返回远端分布式媒体提供方设置的自定义媒体数据包。
     *     <br>参数ExtraInfo支持的数据类型有：字符串、数字、布尔、对象、数组和文件描述符等，详细介绍请参见
     *     [@ohos.app.ability.Want (Want)]{@link @ohos.app.ability.Want:Want}。
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
     * 查询是否启用桌面歌词功能。使用Promise异步回调。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示启用桌面歌词功能；返回false表示不启用桌面歌词功能。
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
     * 桌面歌词功能启用状态变更的监听事件。使用callback异步回调。
     *
     * @param { Callback<boolean> } callback - 回调函数。返回true表示桌面歌词功能启用；返回false表示桌面歌词功能未启用。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onDesktopLyricEnabled(callback: Callback<boolean>): void;

    /**
     * 取消桌面歌词启用状态变更事件监听，取消后将不再对该事件进行监听。使用callback异步回调。
     *
     * @param { Callback<boolean> } [callback] - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有桌面歌词功能启用状态变更事件监听。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offDesktopLyricEnabled(callback?: Callback<boolean>): void;

    /**
     * 设置当前会话桌面歌词的显示状态。使用Promise异步回调。
     *
     * @param { boolean } visible - 是否显示桌面歌词。true表示显示；false表示不显示。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 查询当前会话桌面歌词的显示状态。使用Promise异步回调。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示显示桌面歌词；返回false表示不显示桌面歌词。
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
     * 显示桌面歌词状态变更的监听事件。使用callback异步回调。
     *
     * @param { Callback<boolean> } callback - 回调函数。返回true表示开启显示桌面歌词状态；返回false表示关闭显示桌面歌词状态。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onDesktopLyricVisibilityChanged(callback: Callback<boolean>): void;

    /**
     * 取消显示桌面歌词状态变更事件监听，取消后将不再对该事件进行监听。使用callback异步回调。
     *
     * @param { Callback<boolean> } [callback] - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有显示桌面歌词状态变更事件监听。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offDesktopLyricVisibilityChanged(callback?: Callback<boolean>): void;

    /**
     * 设置当前会话桌面歌词状态。使用Promise异步回调。
     *
     * @param { DesktopLyricState } state - 桌面歌词状态。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 获取当前会话桌面歌词状态。使用Promise异步回调。
     *
     * @returns { Promise<DesktopLyricState> } Promise对象。返回桌面歌词状态。
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
     * 桌面歌词状态变更的监听事件。使用callback异步回调。
     *
     * @param { Callback<DesktopLyricState> } callback - 回调函数。返回桌面歌词状态。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onDesktopLyricStateChanged(callback: Callback<DesktopLyricState>): void;

    /**
     * 取消桌面歌词状态变更事件监听，取消后将不再对该事件进行监听。使用callback异步回调。
     *
     * @param { Callback<DesktopLyricState> } [callback] - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有桌面歌词状态变更事件监听。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offDesktopLyricStateChanged(callback?: Callback<DesktopLyricState>): void;

    /**
     * 获取应用通过[setMediaCenterControlType]{@link avSession.AVSession.setMediaCenterControlType}接口设置优先显示的控制类型列表。使用Promise异步
     * 回调。
     * 
     * 如果应用未设置或者设置为空列表，则返回空列表。
     *
     * @returns { Promise<Array<AVMediaCenterControlType>> } Promise对象。返回应用希望优先显示的控制类型列表。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getMediaCenterControlType(): Promise<Array<AVMediaCenterControlType>>;

    /**
     * 注册控制类型列表变化的监听事件。使用callback异步回调。
     * 
     * 其中控制类型列表由应用通过[setMediaCenterControlType]{@link avSession.AVSession.setMediaCenterControlType}接口设置。
     *
     * @param { Callback<Array<AVMediaCenterControlType>> } callback - 回调函数。返回变化后的控制类型列表。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onMediaCenterControlTypeChanged(callback: Callback<Array<AVMediaCenterControlType>>): void;

    /**
     * 取消控制类型列表变化的监听事件。
     * 
     * 取消后将不再对该事件进行监听。其中控制类型列表由应用通过[setMediaCenterControlType]{@link avSession.AVSession.setMediaCenterControlType}接口设置。
     *
     * @param { Callback<Array<AVMediaCenterControlType>> } [callback] - 回调函数。该参数为可选参数，若不填写该参数，则认为对所有控制类型列表变化事件取消监听。
     * @throws { BusinessError } 6600101 - Session service exception.
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offMediaCenterControlTypeChanged(callback?: Callback<Array<AVMediaCenterControlType>>): void;

    /**
     * 设置元数据变化的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'metadataChange' } type
     * @param { Array<keyof AVMetadata> | 'all' } filter - 'all'表示关注元数据所有字段变化；Array<keyof AVMetadata>表示关注Array中的字段变化。
     * @param { function } callback - 回调函数，参数data是需要更新的元数据。只包含需要更新的元数据属性，不代表当前全量的元数据。
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
     * 取消元数据变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'metadataChange' } type
     * @param { function } callback - 回调函数，参数data是需要更新的元数据。只包含需要更新的元数据属性，并不代表当前全量的元数据。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置播放状态变化的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'playbackStateChange' } type
     * @param { Array<keyof AVPlaybackState> | 'all' } filter - 'all'表示关注播放状态所有字段更新。
     *     <br>Array<keyof AVPlaybackstate> 表示关注Array中的字段更新。
     * @param { function } callback - 回调函数，参数state是需要更新的播放状态。只包含需要更新的播放状态属性，并不代表当前全量的播放状态。
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
     * 取消播放状态变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'playbackStateChange' } type
     * @param { function } callback - 回调函数，参数state是需要更新的播放状态。只包含需要更新的播放状态属性，并不代表当前全量的播放状态。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置通话元数据变化的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 事件回调类型，支持事件`'callMetadataChange'`：当通话元数据变化时，触发该事件。 } type - 事件回调类型，支持事件`'callMetadataChange'`：当通话元数据变化时，触发该事件。
     * @param { Array<keyof CallMetadata> | 'all' } filter - 'all'表示关注通话元数据所有字段变化；Array<keyof CallMetadata> 表示关注Array中的字
     *     段变化。| 'all'。
     * @param { Callback<CallMetadata> } callback - 回调函数，参数callmetadata是变化后的通话元数据。
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
     * 取消设置通话元数据变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 取消对应的监听事件，支持事件`'callMetadataChange'`。 } type - 取消对应的监听事件，支持事件`'callMetadataChange'`。
     * @param { Callback<CallMetadata> } callback - 回调函数，参数calldata是变化后的通话原数据。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置通话状态变化的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 事件回调类型，支持事件`'callStateChange'`：当通话状态变化时，触发该事件。 } type - 事件回调类型，支持事件`'callStateChange'`：当通话状态变化时，触发该事件。
     * @param { Array<keyof AVCallState> | 'all' } filter - 'all' 表示关注通话状态所有字段变化；Array<keyof AVCallState>表示关注Array中的字段变
     *     化。| 'all'。
     * @param { Callback<AVCallState> } callback - 回调函数，参数callstate是变化后的通话状态。
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
     * 取消设置通话状态变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 取消对应的监听事件，支持事件`'callStateChange'`。 } type - 取消对应的监听事件，支持事件`'callStateChange'`。
     * @param { Callback<AVCallState> } callback - 回调函数，参数callstate是变化后的通话状态。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 会话销毁的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'sessionDestroy' } type
     * @param { function } callback - 回调函数。当监听事件注册成功，err为undefined，否则为错误对象。
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
     * 取消监听会话的销毁事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 取消对应的监听事件，支持事件`'sessionDestroy'`。 } type - 取消对应的监听事件，支持事件`'sessionDestroy'`。
     * @param { function } callback - 回调函数。当监听事件取消成功，err为undefined，否则返回错误对象。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 会话的激活状态的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 事件回调类型，支持事件`'activeStateChange'`：当检测到会话的激活状态发生改变时，触发该事件。 } type - 事件回调类型，支持事件`'activeStateChange'`：当检测到会话的激活状态发生改变时，触发该事件。
     * @param { function } callback - 回调函数。参数isActive表示会话是否被激活。true表示被激活，false表示禁用。
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
     * 取消监听会话激活状态变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 取消对应的监听事件，支持事件`'activeStateChange'`。 } type - 取消对应的监听事件，支持事件`'activeStateChange'`。
     * @param { function } callback - 回调函数。参数isActive表示会话是否被激活。true表示被激活，false表示禁用。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 会话支持的有效命令变化监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 事件回调类型，支持事件`'validCommandChange'`：当检测到会话的合法命令发生改变时，触发该事件。 } type - 事件回调类型，支持事件`'validCommandChange'`：当检测到会话的合法命令发生改变时，触发该事件。
     * @param { function } callback - 回调函数。参数commands是有效命令的集合。
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
     * 取消监听会话有效命令变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 取消对应的监听事件，支持事件`'validCommandChange'`。 } type - 取消对应的监听事件，支持事件`'validCommandChange'`。
     * @param { function } callback - 回调函数。参数commands是有效命令的集合。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 设置播放设备变化的监听事件。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'outputDeviceChange' } type - 事件回调类型，支持事件为`'outputDeviceChange'`：当播放设备变化时，触发该事件）。
     * @param { function } callback - 回调函数，参数device是设备相关信息。
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
     * 取消监听分布式设备变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'outputDeviceChange' } type - 取消对应的监听事件，支持事件`'outputDeviceChange'`。
     * @param { function } callback - 回调函数，参数device是设备相关信息。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 媒体控制器设置会话自定义事件变化的监听器。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 事件回调类型，支持事件`'sessionEvent'`：当会话事件变化时，触发该事件。 } type - 事件回调类型，支持事件`'sessionEvent'`：当会话事件变化时，触发该事件。
     * @param { function } callback - 回调函数，sessionEvent为变化的会话事件名，args为事件的参数。
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
     * 取消会话事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 取消对应的监听事件，支持事件`'sessionEvent'`。 } type - 取消对应的监听事件，支持事件`'sessionEvent'`。
     * @param { function } callback - 回调函数，参数sessionEvent是变化的事件名，args为事件的参数。
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
     * 媒体控制器设置会话自定义播放列表变化的监听器。
     * 
     * 每个指令支持注册多个回调，如果需要只执行最新监听，需要先注销旧的监听，否则新旧监听都会触发回调。
     *
     * @param { 'queueItemsChange' } type - 事件回调类型，支持事件`'queueItemsChange'`：当session修改播放列表时，触发该事件。
     * @param { function } callback - 回调函数，items为变化的播放列表。
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
     * 取消播放列表变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'queueItemsChange' } type - 取消对应的监听事件，支持事件`'queueItemsChange'`。
     * @param { function } callback - 回调函数，参数items是变化的播放列表。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 媒体控制器设置会话自定义播放列表的名称变化的监听器。
     *
     * @param { 'queueTitleChange' } type - 事件回调类型，支持事件`'queueTitleChange'`：当session修改播放列表名称时，触发该事件。
     * @param { function } callback - 回调函数，title为变化的播放列表名称。
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
     * 取消播放列表名称变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'queueTitleChange' } type - 取消对应的监听事件，支持事件`'queueTitleChange'`。
     * @param { function } callback - 回调函数，参数items是变化的播放列表名称。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消所有相关会话的事件监听。
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
     * 媒体控制器设置自定义媒体数据包事件变化的监听器。
     *
     * @param { 'extrasChange' } type - 事件回调类型，支持事件`'extrasChange'`：当媒体提供方设置自定义媒体数据包时，触发该事件。
     * @param { function } callback - 回调函数，extras为媒体提供方新设置的自定义媒体数据包，该自定义媒体数据包与dispatchSessionEvent方法设置的数据包完全一致。
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
     * 取消自定义媒体数据包变化事件监听。指定callback，可取消对应监听；未指定callback，取消所有事件监听。
     *
     * @param { 'extrasChange' } type - 取消对应的监听事件，支持事件`'extrasChange'`。
     * @param { function } callback - 注册监听事件时的回调函数。
     *     <br>该参数为可选参数，若不填写该参数，则认为取消会话所有与此事件相关的监听。
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
     * 注册从远程设备发送的自定义数据的监听器。
     *
     * @param { 'customDataChange' } type - 事件回调类型，支持事件'customDataChange'，当媒体提供方发送自定义数据时，触发该事件。
     * @param { Callback<Record<string, Object>> } callback - 回调函数，用于接收自定义数据。
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
     * 取消自定义数据监听。
     *
     * @param { 'customDataChange' } type - 取消对应的监听事件，支持的事件是'customDataChange'。
     * @param { Callback<Record<string, Object>> } [callback] - 注册监听事件时的回调函数。该参数为可选参数，若不填写该参数，则认为取消会话所有与此事件相关的监听。
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
     * 注册支持的播放倍速列表变化的监听事件。使用callback异步回调。
     * 
     * 其中播放倍速列表由应用通过[setSupportedPlaySpeeds]{@link avSession.AVSession.setSupportedPlaySpeeds}接口设置。
     *
     * @param { Callback<Array<double>> } callback - 回调函数。返回变化后支持的播放倍速列表。
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    onSupportedPlaySpeedsChange(callback: Callback<Array<double>>): void;

    /**
     * 取消支持的播放倍速列表变化事件监听。
     * 
     * 取消后将不再对该事件进行监听。其中播放倍速列表由应用通过[setSupportedPlaySpeeds]{@link avSession.AVSession.setSupportedPlaySpeeds}接口设置。
     *
     * @param { Callback<Array<double>> } [callback] - 回调函数。该参数为可选参数，若不填写该参数，则认为对所有支持的播放倍速列表变化事件取消监听。
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    offSupportedPlaySpeedsChange(callback?: Callback<Array<double>>): void;

    /**
     * 注册支持的循环模式列表变化的监听事件。使用callback异步回调。
     * 
     * 其中循环模式列表由应用通过[setSupportedLoopModes]{@link avSession.AVSession.setSupportedLoopModes}接口设置。
     *
     * @param { Callback<Array<LoopMode>> } callback - 回调函数。返回变化后支持的循环模式列表。
     * @throws { BusinessError } 6600101 - Session service exception
     * @throws { BusinessError } 6600103 - The session controller does not exist.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    onSupportedLoopModesChange(callback: Callback<Array<LoopMode>>): void;

    /**
     * 取消支持的循环模式列表变化事件监听。
     * 
     * 取消后将不再对该事件进行监听。其中循环模式列表由应用通过[setSupportedLoopModes]{@link avSession.AVSession.setSupportedLoopModes}接口设置。
     *
     * @param { Callback<Array<LoopMode>> } [callback] - 回调函数。该参数为可选参数，若不填写该参数，则认为对所有支持的循环模式列表变化事件取消监听。
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
   * 会话接受的命令的对象描述。
   *
   * @interface AVControlCommand [since 10 - 11]
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AVControlCommand {
    /**
     * 命令（不同命令对应不同参数）。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    command: AVControlCommandType;

    /**
     * 命令对应的参数。
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
     * 命令信息。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    commandInfo?: CommandInfo;
  }

  /**
   * 定义要发送到会话的命令信息。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 22 dynamic
   * @since 23 static
   */
  interface CommandInfo {
    /**
     * 调用方应用包名。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    callerBundleName?: string;

    /**
     * 调用方应用模块名。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    callerModuleName?: string;

    /**
     * 调用方设备ID。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    callerDeviceId?: string;

    /**
     * 调用方来源。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    callerType?: CallerType;
  }

  /**
   * 表示调用方来源类型的枚举。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @since 22 dynamic
   * @since 23 static
   */
  enum CallerType {
    /**
     * 调用方来自投播。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    TYPE_CAST = 'cast',

    /**
     * 调用方来自蓝牙。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    TYPE_BLUETOOTH = 'bluetooth',

    /**
     * 调用方来自星闪。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    TYPE_NEARLINK = 'nearlink',

    /**
     * 调用方来自应用。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 22 dynamic
     * @since 23 static
     */
    TYPE_APP = 'app'
  }

  /**
   * 会话发生错误时的错误码。
   *
   * @syscap SystemCapability.Multimedia.AVSession.Core
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum AVSessionErrorCode {
    /**
     * 会话服务端异常。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_SERVICE_EXCEPTION = 6600101,

    /**
     * 会话不存在。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_SESSION_NOT_EXIST = 6600102,

    /**
     * 会话控制器不存在。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_CONTROLLER_NOT_EXIST = 6600103,

    /**
     * 远端会话连接失败。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_REMOTE_CONNECTION_ERR = 6600104,

    /**
     * 无效会话命令。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_COMMAND_INVALID = 6600105,

    /**
     * 会话未激活。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_SESSION_INACTIVE = 6600106,

    /**
     * 命令&消息过载。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_MESSAGE_OVERLOAD = 6600107,

    /**
     * 设备连接失败。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_DEVICE_CONNECTION_FAILED = 6600108,

    /**
     * 远端会话不存在。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ERR_CODE_REMOTE_CONNECTION_NOT_EXIST = 6600109,

    /**
     * 应用程序的桌面歌词功能未开启。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    ERR_CODE_DESKTOP_LYRIC_NOT_ENABLED = 6600110,

    /**
     * 当前设备不支持桌面歌词功能。
     *
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    ERR_CODE_DESKTOP_LYRIC_NOT_SUPPORTED = 6600111,

    /**
     * 未被定义的投播错误码。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_UNSPECIFIED = 6611000,

    /**
     * 远端播放器中发生不明错误。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_REMOTE_ERROR = 6611001,

    /**
     * 播放出现延迟。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_BEHIND_LIVE_WINDOW = 6611002,

    /**
     * 投播控制进程超时。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_TIMEOUT = 6611003,

    /**
     * 运行时检查失败。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_RUNTIME_CHECK_FAILED = 6611004,

    /**
     * 跨设备数据传输被锁定。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_PLAYER_NOT_WORKING = 6611100,

    /**
     * 不支持指定的查找模式。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_SEEK_MODE_UNSUPPORTED = 6611101,

    /**
     * 要搜索的位置超出媒体的范围，或者不支持当前搜索模式。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_ILLEGAL_SEEK_TARGET = 6611102,

    /**
     * 不支持指定的播放模式。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_PLAY_MODE_UNSUPPORTED = 6611103,

    /**
     * 不支持指定的播放速度。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_PLAY_SPEED_UNSUPPORTED = 6611104,

    /**
     * 操作失败，因为媒体源设备或媒体接收器设备已被销毁。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DEVICE_MISSING = 6611105,

    /**
     * 该参数无效。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_INVALID_PARAM = 6611106,

    /**
     * 内存分配失败。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_NO_MEMORY = 6611107,

    /**
     * 不被允许的操作。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_OPERATION_NOT_ALLOWED = 6611108,

    /**
     * 未指定的输入/输出错误。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_UNSPECIFIED = 6612000,

    /**
     * 网络连接失败。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_NETWORK_CONNECTION_FAILED = 6612001,

    /**
     * 网络连接超时。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_NETWORK_CONNECTION_TIMEOUT = 6612002,

    /**
     * 无效的"Content-Type"。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_INVALID_HTTP_CONTENT_TYPE = 6612003,

    /**
     * HTTP服务器返回一个意外的HTTP响应状态码。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_BAD_HTTP_STATUS = 6612004,

    /**
     * 文件不存在。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_FILE_NOT_FOUND = 6612005,

    /**
     * 不允许执行输入/输出的IO操作。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_NO_PERMISSION = 6612006,

    /**
     * 应用的网络安全配置不允许访问明文HTTP流量。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_CLEARTEXT_NOT_PERMITTED = 6612007,

    /**
     * 读取位置超出范围。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_READ_POSITION_OUT_OF_RANGE = 6612008,

    /**
     * 媒体中没有可播放的内容。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_NO_CONTENTS = 6612100,

    /**
     * 媒体无法读取。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_READ_ERROR = 6612101,

    /**
     * 该资源正在使用中。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_CONTENT_BUSY = 6612102,

    /**
     * 输入/输出的IO请求内容已过期。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_CONTENT_EXPIRED = 6612103,

    /**
     * 不允许播放请求内容。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_USE_FORBIDDEN = 6612104,

    /**
     * 无法验证所允许的内容。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_NOT_VERIFIED = 6612105,

    /**
     * 此内容已达到允许的最大使用次数。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_EXHAUSTED_ALLOWED_USES = 6612106,

    /**
     * 从源设备发送数据包到接收设备时出现错误。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_IO_NETWORK_PACKET_SENDING_FAILED = 6612107,

    /**
     * 未指定的内容解析错误。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_PARSING_UNSPECIFIED = 6613000,

    /**
     * 媒体容器比特流的格式解析错误。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_PARSING_CONTAINER_MALFORMED = 6613001,

    /**
     * 媒体清单解析错误。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_PARSING_MANIFEST_MALFORMED = 6613002,

    /**
     * 文件的媒体容器格式/媒体容器特性不被支持。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_PARSING_CONTAINER_UNSUPPORTED = 6613003,

    /**
     * 媒体清单中不支持的特性。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_PARSING_MANIFEST_UNSUPPORTED = 6613004,

    /**
     * 未指定的解码错误。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DECODING_UNSPECIFIED = 6614000,

    /**
     * 解码器初始化失败。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DECODING_INIT_FAILED = 6614001,

    /**
     * 解码器查询失败。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DECODING_QUERY_FAILED = 6614002,

    /**
     * 媒体样本解码失败。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DECODING_FAILED = 6614003,

    /**
     * 设备的能力无法解码当前格式。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DECODING_FORMAT_EXCEEDS_CAPABILITIES = 6614004,

    /**
     * 不支持的解码格式。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DECODING_FORMAT_UNSUPPORTED = 6614005,

    /**
     * 未指定的音频渲染器错误。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_AUDIO_RENDERER_UNSPECIFIED = 6615000,

    /**
     * 音频渲染器初始化失败。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_AUDIO_RENDERER_INIT_FAILED = 6615001,

    /**
     * 音频渲染器写入数据失败。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_AUDIO_RENDERER_WRITE_FAILED = 6615002,

    /**
     * 未指定的DRM相关错误。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_UNSPECIFIED = 6616000,

    /**
     * 设备不支持所选择的DRM保护方案。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_SCHEME_UNSUPPORTED = 6616001,

    /**
     * 设备配置失败。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_PROVISIONING_FAILED = 6616002,

    /**
     * 受DRM保护的内容无法播放。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_CONTENT_ERROR = 6616003,

    /**
     * 获取许可证失败。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_LICENSE_ACQUISITION_FAILED = 6616004,

    /**
     * 许可证策略不允许该操作。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_DISALLOWED_OPERATION = 6616005,

    /**
     * DRM系统中发生错误。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_SYSTEM_ERROR = 6616006,

    /**
     * 设备已撤销DRM权限。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_DEVICE_REVOKED = 6616007,

    /**
     * 加载中的DRM许可证已过期。
     *
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    ERR_CODE_CAST_CONTROL_DRM_LICENSE_EXPIRED = 6616008,

    /**
     * DRM处理密钥响应时发生错误。
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