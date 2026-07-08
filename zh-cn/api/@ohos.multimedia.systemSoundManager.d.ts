/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 系统声音管理
 * @file
 系统声音管理
 * @kit AudioKit
 */

import type { AsyncCallback } from './@ohos.base';
import type Context from './application/Context';
import type BaseContext from './application/BaseContext';
import type { RingtonePlayer as _RingtonePlayer } from './multimedia/ringtonePlayer';
import type { RingtoneOptions as _RingtoneOptions } from './multimedia/ringtonePlayer';
import type { SystemTonePlayer as _SystemTonePlayer } from './multimedia/systemTonePlayer';
import type { SystemToneOptions as _SystemToneOptions } from './multimedia/systemTonePlayer';
import type { SystemSoundPlayer as _SystemSoundPlayer } from './multimedia/SystemSoundPlayer';

/**
 * 系统声音管理提供管理系统声音的基础能力，包括对系统音效类型的定义、获取系统音效播放器等。
 *
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @systemapi [since 10 - 22]
 * @publicapi [since 23]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace systemSoundManager {

  /**
   * 枚举，系统声音错误类型。
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  enum SystemSoundError {
    /**
     * IO错误。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    ERROR_IO = 5400103,

    /**
     * 无错误。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    ERROR_OK = 20700000,

    /**
     * 类型不匹配错误。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    ERROR_TYPE_MISMATCH = 20700001,

    /**
     * 不支持的操作错误。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    ERROR_UNSUPPORTED_OPERATION = 20700003,

    /**
     * 数据大小超限错误。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    ERROR_DATA_TOO_LARGE = 20700004,

    /**
     * 文件个数超过限制错误。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    ERROR_TOO_MANY_FILES = 20700005,

    /**
     * ROM空间不足错误。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    ERROR_INSUFFICIENT_ROM = 20700006,

    /**
     * 参数非法错误。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    ERROR_INVALID_PARAM = 20700007
  }

  /**
   * 枚举，铃声类型。
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  enum RingtoneType {
    /**
     * 默认铃声类型。
     * 
     * 从 API version 11 开始废弃。建议使用该枚举中的RINGTONE_TYPE_SIM_CARD_0替代。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead systemSoundManager.RingtoneType#RINGTONE_TYPE_SIM_CARD_0
     */
    RINGTONE_TYPE_DEFAULT = 0,

    /**
     * sim卡1的铃声。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    RINGTONE_TYPE_SIM_CARD_0 = 0,

    /**
     * 多SIM卡铃声类型。
     * 
     * 从 API version 11 开始废弃。建议使用该枚举中的RINGTONE_TYPE_SIM_CARD_1替代。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead systemSoundManager.RingtoneType#RINGTONE_TYPE_SIM_CARD_1
     */
    RINGTONE_TYPE_MULTISIM = 1,

    /**
     * sim卡2的铃声。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    RINGTONE_TYPE_SIM_CARD_1 = 1
  }

  /**
   * 枚举，系统铃声类型。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum SystemToneType {
    /**
     * sim卡1的短信提示音。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SYSTEM_TONE_TYPE_SIM_CARD_0 = 0,

    /**
     * sim卡2的短信提示音。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SYSTEM_TONE_TYPE_SIM_CARD_1 = 1,

    /**
     * 通知提示音。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SYSTEM_TONE_TYPE_NOTIFICATION = 32
  }

  /**
   * 枚举，铃声自定义类型。
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum ToneCustomizedType {
    /**
     * 预安装铃声类型。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    PRE_INSTALLED = 0,
    /**
     * 自定义铃声类型。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    CUSTOMIZED = 1
  }
  /**
   * 枚举，媒体类型。
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  enum MediaType {
    /**
     * 音频类型。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    AUDIO = 0,

    /**
     * 视频类型。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    VIDEO = 1
  }

  /**
   * 铃声类别。
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  const TONE_CATEGORY_RINGTONE: int;

  /**
   * 短信铃声类别。
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  const TONE_CATEGORY_TEXT_MESSAGE: int;

  /**
   * 通知铃声类别。
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  const TONE_CATEGORY_NOTIFICATION: int;

  /**
   * 闹钟铃声类别。
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  const TONE_CATEGORY_ALARM: int;

  /**
   * 联系人铃声类别。
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   */
  const TONE_CATEGORY_CONTACTS: 16;

  /**
   * Define the contact tone category.
   * 取值限定为整数。
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  const TONE_CATEGORY_CONTACTS: int;

  /**
   * 应用级通知铃声类别。
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  const TONE_CATEGORY_NOTIFICATION_APP: int;

  /**
   * 管理铃声属性。在调用ToneAttrs<sup>12+</sup>的接口前，需要先通过
   * [createCustomizedToneAttrs]{@link systemSoundManager.createCustomizedToneAttrs}或
   * [getDefaultRingtoneAttrs]{@link systemSoundManager.SystemSoundManager.getDefaultRingtoneAttrs}、
   * [getRingtoneAttrList]{@link systemSoundManager.SystemSoundManager.getRingtoneAttrList}等方法获取实例。
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface ToneAttrs {
    /**
     * 获取铃声标题。
     *
     * @returns { string } 标题。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getTitle(): string;

    /**
     * 设置铃声标题。
     *
     * @param { string } title - 铃声的标题。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setTitle(title: string): void;

    /**
     * 获取铃声文件名。
     *
     * @returns { string } 文件名。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getFileName(): string;

    /**
     * 设置铃声文件名。
     *
     * @param { string } name - 铃声的文件名。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setFileName(name: string): void;

    /**
     * 获取铃声资源路径。
     *
     * @returns { string } uri（如：'/data/storage/el2/base/RingTone/alarms/test.ogg'）。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getUri(): string;

    /**
     * 获取铃声自定义类型。
     *
     * @returns { ToneCustomizedType } 定制铃音类型。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getCustomizedType(): ToneCustomizedType;

    /**
     * 设置铃声类别。
     *
     * @param { int } category - 铃声类别，取值参考
     *     [铃声类别的常量](docroot://reference/apis-audio-kit/js-apis-systemSoundManager-sys.md#工具不太能识别具体链接到的是哪个常量。让人工处理。咨询黄山）)。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setCategory(category: int): void;

    /**
     * 获取铃声类别。
     *
     * @returns { int } 铃声类别，取值参考
     *     [铃声类别的常量](docroot://reference/apis-audio-kit/js-apis-systemSoundManager-sys.md#工具不太能识别具体链接到的是哪个常量。让人工处理。咨询黄山）)。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getCategory(): int;

    /**
     * 设置铃声类型。
     *
     * @param { MediaType } type - 媒体类型。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    setMediaType(type:MediaType):void;

    /**
     * 获取铃声类型。
     *
     * @returns { MediaType } 媒体类型，如果应用未调用过setMediaType设置mediatype，则此函数返回的默认值为AUDIO。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getMediaType():MediaType;
  }

  /**
   * 铃音属性数组。
   *
   * @typedef {Array<ToneAttrs>} ToneAttrsArray
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  type ToneAttrsArray = Array<ToneAttrs>;

  /**
   * 创建自定义铃声属性。
   *
   * @returns { ToneAttrs } 铃声属性类。
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function createCustomizedToneAttrs(): ToneAttrs;

  /**
   * 枚举，系统振动风格定义。
   * 
   * | 名称                          | 值 | 说明                 |
   * | ----------------------------- | -- | -------------------- |
   * | STANDARD| 0  | 标准振动风格。 |
   * | GENTLE   | 1  | 轻柔振动风格。 |
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum ToneHapticsFeature {
    /**
     * Standard haptics feature.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    STANDARD = 0,
    /**
     * Gentle haptics feature.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    GENTLE = 1
  }

  /**
   * 枚举，系统铃音场景的振动模式。
   * 
   * | 名称                          | 值 | 说明                 |
   * | ----------------------------- | -- | -------------------- |
   * | NONE        | 0  | 无振动模式。 |
   * | SYNC        | 1  | 与铃音同步模式。 |
   * | NON_SYNC    | 2  | 非同步模式。 |
   *
   * @enum {int}
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum ToneHapticsMode {
    /**
     * None haptics mode.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    NONE = 0,
    /**
     * Haptics is synchronized with tone.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    SYNC = 1,

    /**
     * Haptics is out of synchronize with tone.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    NON_SYNC = 2
  }

  /**
   * 系统铃音的振动设置。
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  interface ToneHapticsSettings {
    /**
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    mode: ToneHapticsMode;
    /**
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    hapticsUri?: string;
  }

  /**
   * 系统铃音的振动属性。在调用ToneHapticsAttrs<sup>14+</sup>的接口前，需要先通过
   * [getToneHapticsList]{@link systemSoundManager.SystemSoundManager.getToneHapticsList}或
   * [getHapticsAttrsSyncedWithTone]{@link systemSoundManager.SystemSoundManager.getHapticsAttrsSyncedWithTone}方法获取实例。
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  interface ToneHapticsAttrs {
    /**
     * 获取振动资源路径。
     *
     * @returns { string } uri（如：'/data/storage/el2/base/haptics/synchronized/alarms/test.json'）。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    getUri(): string;

    /**
     * 获取振动标题。
     *
     * @returns { string } 标题。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    getTitle(): string;

    /**
     * 获取振动文件名。
     *
     * @returns { string } 文件名。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    getFileName(): string;

    /**
     * 获取柔和振动资源路径。
     *
     * @returns { string | null } 柔和振动的uri（如：'/data/storage/el2/base/haptics/synchronized/alarms/test.json'）。 如果不存在柔和振动，
     *     则uri为空。 柔和振动是指马达振动强度较标准较弱。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    getGentleUri(): string | null;

    /**
     * 获取柔和振动标题。
     *
     * @returns { string | null } 柔和振动的标题。如果不存在柔和振动，则振动标题为空。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    getGentleTitle(): string | null;

    /**
     * 获取柔和振动文件名。
     *
     * @returns { string | null } 柔和振动文件名，振动文件为Json格式。如果不存在柔和振动，则振动文件名为空。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    getGentleFileName(): string | null;
  }

  /**
   * 系统铃音的振动属性数组。
   *
   * @typedef { Array<ToneHapticsAttrs> } ToneHapticsAttrsArray
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  type ToneHapticsAttrsArray = Array<ToneHapticsAttrs>;

  /**
   * 获取系统声音管理器。
   *
   * @returns { SystemSoundManager } 系统声音管理类。
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getSystemSoundManager(): SystemSoundManager;

  /**
   * 管理系统声音。在调用SystemSoundManager的接口前，需要先通过[getSystemSoundManager]{@link systemSoundManager.getSystemSoundManager}创建实例。
   *
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface SystemSoundManager {
    /**
     * 设置系统铃声uri。使用callback异步回调。
     *
     * @param { Context } context - 当前应用的上下文。
     * @param { string } uri - 被设置的系统铃声的uri，资源支持可参考[media.AVPlayer]{@link @ohos.multimedia.media:media.AVPlayer}。
     * @param { RingtoneType } type - 被设置的系统铃声的类型。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置系统铃声uri成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead systemSoundManager.SystemSoundManager#setRingtoneUri
     */
    setSystemRingtoneUri(context: Context, uri: string, type: RingtoneType, callback: AsyncCallback<void>): void;

    /**
     * 设置系统铃声uri。使用Promise异步回调。
     *
     * @param { Context } context - 当前应用的上下文。
     * @param { string } uri - 被设置的系统铃声的uri，资源支持可参考[media.AVPlayer]{@link @ohos.multimedia.media:media.AVPlayer}。
     * @param { RingtoneType } type - 被设置的系统铃声的类型。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead systemSoundManager.SystemSoundManager#setRingtoneUri
     */
    setSystemRingtoneUri(context: Context, uri: string, type: RingtoneType): Promise<void>;

    /**
     * 设置系统铃声uri。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { string } uri - 被设置的系统铃声的uri，资源支持可参考[media.AVPlayer]{@link @ohos.multimedia.media:media.AVPlayer}。
     * @param { RingtoneType } type - 被设置的系统铃声的类型。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *         1.Mandatory parameters are left unspecified;
     *         2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setRingtoneUri(context: BaseContext, uri: string, type: RingtoneType): Promise<void>;

    /**
     * 获取系统铃声uri。使用callback异步回调。
     *
     * @param { Context } context - 当前应用的上下文。
     * @param { RingtoneType } type - 待获取的系统铃声的类型。
     * @param { AsyncCallback<string> } callback - 回调函数。当获取系统铃声uri成功，err为undefined，data为获取到的系统铃声uri；否则为错误对象。
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead systemSoundManager.SystemSoundManager#getRingtoneUri
     */
    getSystemRingtoneUri(context: Context, type: RingtoneType, callback: AsyncCallback<string>): void;

    /**
     * 获取系统铃声uri。使用Promise异步回调。
     *
     * @param { Context } context - 当前应用的上下文。
     * @param { RingtoneType } type - 被设置的系统铃声的类型。
     * @returns { Promise<string> } Promise对象，返回获取的系统铃声uri。
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead systemSoundManager.SystemSoundManager#getRingtoneUri
     */
    getSystemRingtoneUri(context: Context, type: RingtoneType): Promise<string>;

    /**
     * 获取系统铃声uri。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { RingtoneType } type - 被设置的系统铃声的类型。
     * @returns { Promise<string> } Promise对象，返回获取的系统铃声uri。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getRingtoneUri(context: BaseContext, type: RingtoneType): Promise<string>;

    /**
     * 获取正在使用的铃声属性。使用Promise异步回调。
     *
     * @param { RingtoneType } type - 被设置的系统铃声的类型。
     * @returns { Promise<ToneAttrs> } Promise对象，返回系统铃声的属性。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getCurrentRingtoneAttribute(type: RingtoneType): Promise<ToneAttrs>;

    /**
     * 获取系统铃声的属性。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { RingtoneType } type - 被设置的系统铃声的类型。
     * @returns { Promise<ToneAttrs> } Promise对象，返回系统铃声的属性。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getDefaultRingtoneAttrs(context: BaseContext, type: RingtoneType): Promise<ToneAttrs>;

    /**
     * 获取系统铃声的属性列表。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { RingtoneType } type - 被设置的系统铃声的类型。
     * @returns { Promise<ToneAttrsArray> } Promise对象，返回系统铃声的属性列表。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getRingtoneAttrList(context: BaseContext, type: RingtoneType): Promise<ToneAttrsArray>;

    /**
     * 获取系统铃声播放器。使用callback异步回调。
     *
     * @param { Context } context - 当前应用的上下文。
     * @param { RingtoneType } type - 待获取播放器的系统铃声的类型。
     * @param { AsyncCallback<RingtonePlayer> } callback - 回调函数。当获取系统铃声播放器成功，err为undefined，data为获取到的系统铃声播放器；否则为错误对象。
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead systemSoundManager.SystemSoundManager#getRingtonePlayer
     */
    getSystemRingtonePlayer(context: Context, type: RingtoneType, callback: AsyncCallback<RingtonePlayer>): void;

    /**
     * 获取系统铃声播放器。使用Promise异步回调。
     *
     * @param { Context } context - 当前应用的上下文。
     * @param { RingtoneType } type - 待获取播放器的系统铃声的类型。
     * @returns { Promise<RingtonePlayer> } Promise对象，返回获取的系统铃声播放器。
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead systemSoundManager.SystemSoundManager#getRingtonePlayer
     */
    getSystemRingtonePlayer(context: Context, type: RingtoneType): Promise<RingtonePlayer>;

    /**
     * 获取系统铃声播放器。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { RingtoneType } type - 待获取播放器的系统铃声的类型。
     * @returns { Promise<RingtonePlayer> } Promise对象，返回获取的系统铃声播放器。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 11 dynamic
     */
    getRingtonePlayer(context: BaseContext, type: RingtoneType): Promise<RingtonePlayer>;

    /**
     * Gets the ringtone player.
     * @param { BaseContext } context - Current application context.
     * @param { RingtoneType } type - Ringtone type to get.
     * @returns { Promise<RingtonePlayer | null> } Promise used to return a ringtone player instance,
     *     or null when an error happens.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 23 static
     */
    getRingtonePlayer(context: BaseContext, type: RingtoneType): Promise<RingtonePlayer | null>;

    /**
     * 获取模拟触觉铃声播放器，根据指定的铃声类型和铃音文件URI，播放该铃音文件对应的振动文件及其模拟触觉声音文件。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 调用该接口前，请确保传入的ringtoneUri在系统中存在，否则会出现异常和错误。例如无法播放匹配的触觉声音文件。
     * >
     * > - 通过该接口获取实例后，在服务终止时需主动调用RingtonePlayer的
     * > [release]{@link ./multimedia/ringtonePlayer:RingtonePlayer.release(callback: AsyncCallback<void>)}方法释放播放器资源。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { RingtoneType } type - 待获取播放器的铃声类型。
     * @param { string } ringtoneUri - 铃音文件的URI，需确保在系统文件中真实存在。
     *     <br>如果为自定义铃声需使用
     *     [addCustomizedTone]{@link systemSoundManager.SystemSoundManager.addCustomizedTone(context: BaseContext, toneAttr: ToneAttrs, externalUri: string)}
     *     接口返回的ringtoneUri，确保铃音文件URI在铃音库中存在。
     * @returns { Promise<RingtonePlayer | null> } Promise对象，成功返回模拟触觉铃声播放器实例，发生错误时返回null。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 20700002 - Parameter verification failed. Possible causes:
     *     1.The type exceeds the valid range, please use the RingtoneType enum for input.
     *     2.The ringtoneUri does not exist or is incorrectly formatted, please use the ringtoneUri returned by
     *     the {@link SystemSoundManager#addCustomizedTone}.
     * @throws { BusinessError } 5400103 - I/O error. The ringtone database access timed out or encountered an error.
     *     It is recommended to restart your phone.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getMockHapticRingtonePlayer(
      context: BaseContext, type: RingtoneType, ringtoneUri: string): Promise<RingtonePlayer | null>;

    /**
     * 获取模拟触觉铃声播放器，根据指定的触觉文件URI播放振动文件及其对应的模拟触觉声音文件。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 调用该接口前，请确保传入的hapticUri在系统中存在，否则会出现异常和错误。例如无法播放匹配的触觉声音文件。
     * >
     * > - 通过该接口获取实例后，在服务终止时需主动调用RingtonePlayer的
     * > [release]{@link ./multimedia/ringtonePlayer:RingtonePlayer.release(callback: AsyncCallback<void>)}方法释放播放器资源。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { string } hapticUri - 触觉文件的URI，需确保为JSON文件且在系统文件中真实存在。
     * @returns { Promise<RingtonePlayer | null> } Promise对象，成功返回模拟触觉铃声播放器实例，发生错误时返回null。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 20700002 - Parameter verification failed. The hapticUri does not exist or is
     *     incorrectly formatted. Ensure it is a JSON file and that it exists in the system's file system.
     * @throws { BusinessError } 5400103 - I/O error. The ringtone database access timed out or encountered an error.
     *     It is recommended to restart your phone.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getMockHapticRingtonePlayer(context: BaseContext, hapticUri: string): Promise<RingtonePlayer | null>;

    /**
     * 设置系统提示音uri。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { string } uri - 被设置的系统提示音的uri，资源支持可参考[media.AVPlayer]{@link @ohos.multimedia.media:media.AVPlayer}。
     * @param { SystemToneType } type - 被设置的系统提示音的类型。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setSystemToneUri(context: BaseContext, uri: string, type: SystemToneType): Promise<void>;

    /**
     * 获取系统提示音uri。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { SystemToneType } type - 被设置的系统提示音的类型。
     * @returns { Promise<string> } Promise对象，返回获取的系统提示音uri。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getSystemToneUri(context: BaseContext, type: SystemToneType): Promise<string>;

    /**
     * 获取系统提示音的属性。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { SystemToneType } type - 待获取播放器的系统提示音的类型。
     * @returns { Promise<ToneAttrs> } Promise对象，返回系统提示音的属性。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getDefaultSystemToneAttrs(context: BaseContext, type: SystemToneType): Promise<ToneAttrs>;

    /**
     * 获取系统提示音的属性列表。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { SystemToneType } type - 待获取播放器的系统提示音的类型。
     * @returns { Promise<ToneAttrsArray> } Promise对象，返回系统提示音的属性列表。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getSystemToneAttrList(context: BaseContext, type: SystemToneType): Promise<ToneAttrsArray>;

    /**
     * 获取系统提示音播放器。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { SystemToneType } type - 待获取播放器的系统提示音的类型。
     * @returns { Promise<SystemTonePlayer> } Promise对象，返回获取的系统提示音播放器。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 11 dynamic
     */
    getSystemTonePlayer(context: BaseContext, type: SystemToneType): Promise<SystemTonePlayer>;

    /**
     * Gets the system tone player.
     * @param { BaseContext } context - Current application context.
     * @param { SystemToneType } type - System tone type to get.
     * @returns { Promise<SystemTonePlayer | null> } Promise used to return the SystemTonePlayer, or
     *     null when an error happens.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 23 static
     */
    getSystemTonePlayer(context: BaseContext, type: SystemToneType): Promise<SystemTonePlayer | null>;

    /**
     * 获取系统闹铃的属性。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @returns { Promise<ToneAttrs> } Promise对象，返回系统闹铃的属性。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getDefaultAlarmToneAttrs(context: BaseContext): Promise<ToneAttrs>;

    /**
     * 设置系统闹铃uri。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { string } uri - 被设置的系统闹铃的uri，资源支持可参考[media.AVPlayer]{@link @ohos.multimedia.media:media.AVPlayer}。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 20700001 - Tone type mismatch, e.g. tone of input uri is not an alarm tone.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setAlarmToneUri(context: BaseContext, uri: string): Promise<void>;

    /**
     * 获取系统当前闹铃uri。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @returns { Promise<string> } Promise对象，返回系统当前闹铃uri。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getAlarmToneUri(context: BaseContext): Promise<string>;

    /**
     * 获取全部闹铃属性列表。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @returns { Promise<ToneAttrsArray> } Promise对象，返回全部闹铃属性列表。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getAlarmToneAttrList(context: BaseContext): Promise<ToneAttrsArray>;

    /**
     * 打开闹铃文件。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { string } uri - 被设置的系统闹铃的uri，资源支持可参考[media.AVPlayer]{@link @ohos.multimedia.media:media.AVPlayer}。
     * @returns { Promise<int> } Promise对象，返回fd。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 20700001 - Tone type mismatch, e.g. tone of uri is notification instead of alarm.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    openAlarmTone(context: BaseContext, uri: string): Promise<int>;

    /**
     * 获取系统铃声的属性列表。使用Promise异步回调。
     *
     * @param { Array<string> } uriList - 要打开的uri列表，不能超过1024个。
     * @returns { Promise<Array<[string, long, SystemSoundError]>> } Promise对象，Promise用于返回此操作的结果，返回Array内第一个参数uri，第二个参数
     *     fd，第三个参数为此uri打开的结果。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 20700007 - Parameter is invalid, e.g. the length of uriList is too long.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    openToneList(uriList: Array<string>): Promise<Array<[string, long, SystemSoundError]>>;

    /**
     * 关闭闹铃文件。使用Promise异步回调。
     *
     * @param { int } fd - 文件描述符，通过[openAlarmTone]{@link systemSoundManager.SystemSoundManager.openAlarmTone}获取。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    close(fd: int): Promise<void>;

    /**
     * 通过铃音uri将自定义铃音添加到铃音库。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_RINGTONE
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { ToneAttrs } toneAttr - 铃音属性。
     * @param { string } externalUri - 外部存储器中的铃音uri。
     * @returns { Promise<string> } Promise对象，返回铃音在铃音库中的uri。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation is not allowed, e.g. ringtone to add is not customized.
     * @throws { BusinessError } 5400103 - I/O error. Possible causes:
     *     1. The target file size exceeds 2 GB;
     *     2. Failed to find the specified file;
     *     3. System sound manager service error.
     * @throws { BusinessError } 20700004 - Data size exceeds the limit. Note:
     *     This error is returned when the file size is between 200MB and 2GB. [since 20]
     * @throws { BusinessError } 20700005 - The number of files exceeds the limit. [since 20]
     * @throws { BusinessError } 20700006 - Insufficient ROM space. [since 20]
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    addCustomizedTone(context: BaseContext, toneAttr: ToneAttrs, externalUri: string): Promise<string>;

    /**
     * 通过文件描述符fd将自定义铃音添加到铃音库。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_RINGTONE
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { ToneAttrs } toneAttr - 铃音属性。
     * @param { int } fd - 文件描述符，可通过[fileIo.open]{@link @ohos.file.fs:open}获取。
     * @param { long } [offset] - 读取数据的偏移量（以字节为单位）。默认情况下为0。
     * @param { long } [length] - 读取的数据的长度（以字节为单位）。默认情况下，长度为偏移后的剩余全部字节数。
     * @returns { Promise<string> } Promise对象，返回铃音在铃音库中的uri。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation is not allowed, e.g. ringtone to add is not customized.
     * @throws { BusinessError } 5400103 - I/O error. Possible causes:
     *     1. The target file size exceeds 2 GB;
     *     2. Failed to find the specified file;
     *     3. Ringtone library error.
     *     4. System sound manager service error.
     * @throws { BusinessError } 20700004 - Data size exceeds the limit. Note:
     *     This error is returned when the file size is between 200MB and 2GB. [since 20]
     * @throws { BusinessError } 20700005 - The number of files exceeds the limit. [since 20]
     * @throws { BusinessError } 20700006 - Insufficient ROM space. [since 20]
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    addCustomizedTone(context: BaseContext, toneAttr: ToneAttrs, fd: int, offset?: long, length?: long)
      : Promise<string>;

    /**
     * 从铃音库中删除自定义铃音。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_RINGTONE
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { string } uri - 铃音uri，可通过
     *     [addCustomizedTone]{@link systemSoundManager.SystemSoundManager.addCustomizedTone(context: BaseContext, toneAttr: ToneAttrs, externalUri: string)}
     *     或[getAlarmToneAttrList]{@link systemSoundManager.SystemSoundManager.getAlarmToneAttrList}等方法获取。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation is not allowed, e.g. ringtone of this uri is not customized.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    removeCustomizedTone(context: BaseContext, uri:string): Promise<void>;

    /**
     * 批量删除自定义铃音列表。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_RINGTONE
     * @param { Array<string> } uriList - 要删除的uri列表，不能超过1024个。
     * @returns { Promise<Array<[string, SystemSoundError]>> } Promise对象，Promise用于返回此操作的结果，返回Array内第一个参数uri，第二个参数为此uri删除
     *     结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 20700007 - Parameter is invalid, e.g. the length of uriList is too long.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    removeCustomizedToneList(uriList: Array<string>): Promise<Array<[string, SystemSoundError]>>;

    /**
     * 获取系统铃音的振动设置。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { ToneHapticsType } type - 待获取系统铃音的振动类型。
     * @returns { Promise<ToneHapticsSettings> } Promise对象，返回铃声的振动设置。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 20700003 - Unsupported operation.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    getToneHapticsSettings(context: BaseContext, type: ToneHapticsType): Promise<ToneHapticsSettings>;

    /**
     * 设置系统铃音的振动。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { ToneHapticsType } type - 被设置的系统铃音的振动类型。
     * @param { ToneHapticsSettings } settings - 被设置的系统铃音的振动设置。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation not allowed. For example, the input URI is not valid.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 20700003 - Unsupported operation.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    setToneHapticsSettings(context: BaseContext, type: ToneHapticsType, settings: ToneHapticsSettings): Promise<void>;

    /**
     * 获取同步或者非同步的系统铃音的振动属性列表。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { boolean } isSynced - 表示待获取的振动是否与某个铃音同步。true表示同步，false表示不同步。
     * @returns { Promise<ToneHapticsAttrsArray> } Promise对象，返回同步或者非同步的系统铃音的振动属性列表。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 20700003 - Unsupported operation.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    getToneHapticsList(context: BaseContext, isSynced: boolean): Promise<ToneHapticsAttrsArray>;

    /**
     * 获取与指定铃音同步的振动属性。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { string } toneUri - 待获取同步振动的系统铃声Uri,可通过
     *     [getRingtoneAttrList]{@link systemSoundManager.SystemSoundManager.getRingtoneAttrList}或
     *     [getSystemToneAttrList]{@link systemSoundManager.SystemSoundManager.getSystemToneAttrList}等获取。
     * @returns { Promise<ToneHapticsAttrs> } Promise对象，返回与指定铃音同步的振动属性。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation not allowed. For example, the input URI is not used for tones.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 20700003 - Unsupported operation.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    getHapticsAttrsSyncedWithTone(context: BaseContext, toneUri: string): Promise<ToneHapticsAttrs>;

    /**
     * 打开系统铃音的振动。使用Promise异步回调。
     *
     * @param { BaseContext } context - 当前应用的上下文。
     * @param { string } hapticsUri - 待打开系统铃音的振动的uri，资源支持可参考
     *     [media.AVPlayer]{@link @ohos.multimedia.media:media.AVPlayer}。
     * @returns { Promise<int> } Promise对象，返回fd。
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation not allowed. For example, the input URI is not one for haptics.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 20700003 - Unsupported operation.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    openToneHaptics(context: BaseContext, hapticsUri: string): Promise<int>;
  }

  /**
   * 创建系统音效播放器对象。使用Promise异步回调。
   *
   * @returns { Promise<SystemSoundPlayer | null> } 成功返回系统音效播放器对象，失败返回null。
   * @throws { BusinessError } 5400101 - No memory. Return by promise.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 23 dynamic&static
   */
  function createSystemSoundPlayer(): Promise<SystemSoundPlayer | null>;

  /**
   * 系统铃音播放器对象。
   *
   * @typedef { _RingtonePlayer } RingtonePlayer
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  type RingtonePlayer = _RingtonePlayer;

  /**
   * 系统提示音播放器对象。
   *
   * @typedef { _SystemTonePlayer } SystemTonePlayer
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  type SystemTonePlayer = _SystemTonePlayer;

  /**
   * 系统铃音播放器配置项。
   *
   * @typedef { _RingtoneOptions } RingtoneOptions
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  type RingtoneOptions = _RingtoneOptions;

  /**
   * 系统提示音播放器配置项。
   *
   * @typedef { _SystemToneOptions } SystemToneOptions
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  type SystemToneOptions = _SystemToneOptions;

  /**
   * 系统音效播放器对象。
   *
   * @typedef { _SystemSoundPlayer } SystemSoundPlayer
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 23 dynamic&static
   */
  type SystemSoundPlayer = _SystemSoundPlayer;

  /**
   * 枚举，系统铃音的振动类型。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum ToneHapticsType {

    /**
     * sim卡2的短信提示音的振动。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    TEXT_MESSAGE_SIM_CARD_1 = 21,

    /**
     * sim卡1的来电铃声的振动。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    CALL_SIM_CARD_0 = 0,

    /**
     * 通知提示音的振动。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    NOTIFICATION = 40,

    /**
     * sim卡2的来电铃声的振动。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    CALL_SIM_CARD_1 = 1,

    /**
     * sim卡1的短信提示音的振动。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    TEXT_MESSAGE_SIM_CARD_0 = 20
  }

  /**
   * 枚举，表示系统音效类型。
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum SystemSoundType {
    /**
     * 拍照音效。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PHOTO_SHUTTER = 0,

    /**
     * 视频录制开始音效。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    VIDEO_RECORDING_BEGIN = 1,

    /**
     * 视频录制结束音效。
     *
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    VIDEO_RECORDING_END = 2
  }
}

export default systemSoundManager;