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
 * @file
 * @kit AudioKit
 */

import type { AsyncCallback } from './@ohos.base';
import type Context from './application/Context';
import type BaseContext from './application/BaseContext';
import type { RingtonePlayer as _RingtonePlayer } from './multimedia/ringtonePlayer';
import type { RingtoneOptions as _RingtoneOptions } from './multimedia/ringtonePlayer';
import type { SystemTonePlayer as _SystemTonePlayer } from './multimedia/systemTonePlayer';
import type { SystemToneOptions as _SystemToneOptions } from './multimedia/systemTonePlayer';

/**
 * Provides ringtone player interfaces.
 *
 * @namespace systemSoundManager
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @systemapi
 * @since arkts {'1.1':'10','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace systemSoundManager {

  /**
   * Error enum for system sound.
   * @enum { number }
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 20
   */
  enum SystemSoundError {
    /**
     * IO error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20
     */
    ERROR_IO = 5400103,

    /**
     * No error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20
     */
    ERROR_OK = 20700000,

    /**
     * Type mismatch.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20
     */
    ERROR_TYPE_MISMATCH = 20700001,

    /**
     * Unsupported operation.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20
     */
    ERROR_UNSUPPORTED_OPERATION = 20700003,

    /**
     * Data size exceeds the limit.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20
     */
    ERROR_DATA_TOO_LARGE = 20700004,

    /**
     * The number of files exceeds the limit.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20
     */
    ERROR_TOO_MANY_FILES = 20700005,

    /**
     * Insufficient ROM space.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20
     */
    ERROR_INSUFFICIENT_ROM = 20700006,

    /**
     * Invalid parameter.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20
     */
    ERROR_INVALID_PARAM = 20700007
  }

  /**
   * Enum for ringtone type.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum RingtoneType {
    /**
     * Default type.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead systemSoundManager.RingtoneType#RINGTONE_TYPE_SIM_CARD_0
     */
    RINGTONE_TYPE_DEFAULT = 0,

    /**
     * Ringtone type for sim card 0.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    RINGTONE_TYPE_SIM_CARD_0 = 0,

    /**
     * Multi-sim type.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead systemSoundManager.RingtoneType#RINGTONE_TYPE_SIM_CARD_1
     */
    RINGTONE_TYPE_MULTISIM = 1,

    /**
     * Ringtone type for sim card 1.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    RINGTONE_TYPE_SIM_CARD_1 = 1,
  }

  /**
   * Enum for system tone type.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum SystemToneType {
    /**
     * System tone type for sim card 0.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SYSTEM_TONE_TYPE_SIM_CARD_0 = 0,

    /**
     * System tone type for sim card 1.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SYSTEM_TONE_TYPE_SIM_CARD_1 = 1,

    /**
     * System tone type notification.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SYSTEM_TONE_TYPE_NOTIFICATION = 32,
  }

  /**
   * Enum for tone customized type.
   * @enum {int}
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum ToneCustomizedType {
    /**
     * Pre-installed tone type.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    PRE_INSTALLED = 0,
    /**
     * Customized tone type.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    CUSTOMIZED = 1,
  }

  /**
   * Enum for media type.
   * @enum { number }
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 20
   */
  enum MediaType {
    /**
     * Media type for audio.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20
     */
    AUDIO = 0,

    /**
     * Media type for vide.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20
     */
    VIDEO = 1,
  }

  /**
   * Define the ringtone category.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  const TONE_CATEGORY_RINGTONE: long;

  /**
   * Define the text message tone category.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  const TONE_CATEGORY_TEXT_MESSAGE: long;

  /**
   * Define the notification tone category.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  const TONE_CATEGORY_NOTIFICATION: long;

  /**
   * Define the alarm tone category.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  const TONE_CATEGORY_ALARM: long;

  /**
   * Define the contact tone category.
   * @constant
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 20
   */
  const TONE_CATEGORY_CONTACTS:16;

  /**
   * Tone attributes.
   * @typedef ToneAttrs
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ToneAttrs {
    /**
     * Gets title of tone.
     * @returns { string } title.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getTitle(): string;

    /**
     * Sets title of tone.
     * @param { string } title - Title of tone.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setTitle(title: string): void;

    /**
     * Gets file name of tone.
     * @returns { string } file name.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getFileName(): string;

    /**
     * Sets file name of tone.
     * @param { string } name - file name.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setFileName(name: string): void;

    /**
     * Gets uri of tone.
     * @returns { string } uri.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getUri(): string;

    /**
     * Gets customized type of tone.
     * @returns { ToneCustomizedType } Customized type of tone.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getCustomizedType(): ToneCustomizedType;

    /**
     * Sets tone category.
     * @param { long } category - tone category. This parameter can be one of {@link TONE_CATEGORY_RINGTONE},
     * {@link TONE_CATEGORY_TEXT_MESSAGE}, {@link TONE_CATEGORY_NOTIFICATION}, {@link TONE_CATEGORY_ALARM}.
     * In addition, this parameter can be result of OR logical operator of these constants.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setCategory(category: long): void;

    /**
     * Gets tone category.
     * @returns { long } Tone category. This value can be one of {@link TONE_CATEGORY_RINGTONE},
     * {@link TONE_CATEGORY_TEXT_MESSAGE}, {@link TONE_CATEGORY_NOTIFICATION}, {@link TONE_CATEGORY_ALARM}.
     * In addition, this value can be result of OR logical operator of these constants.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getCategory(): long;

    /**
     * Sets media type.
     * @param { MediaType } type - Target media type.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20
     */
    setMediaType(type: MediaType): void;

    /**
     * Gets media type. This function returns {@link MediaType#AUDIO} if the media type has not been changed
     * by {@link setMediaType}.
     * @returns { MediaType } Media type.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20
     */
    getMediaType(): MediaType;
  }

  /**
   * Array of tone attributes.
   *
   * @typedef {Array<ToneAttrs>} ToneAttrsArray
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type ToneAttrsArray = Array<ToneAttrs>;

  /**
   * Create customized tone attributes.
   * @returns { ToneAttrs } Tone attributes created.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function createCustomizedToneAttrs(): ToneAttrs;

  /**
   * Definition of haptics feature in tone scenario.
   * @enum { int }
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'13','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum ToneHapticsFeature {
    /**
     * Standard haptics feature.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    STANDARD = 0,
    /**
     * Gentle haptics feature.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'13','1.2':'20'}
     * @arkts 1.1&1.2
     */
    GENTLE = 1,
  }
  /**
   * Enum for haptics in tone scenario.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum ToneHapticsType {
    /**
     * Haptics in incoming call scenario for sim card 0.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    CALL_SIM_CARD_0 = 0,

    /**
     * Haptics in incoming call scenario for sim card 1.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    CALL_SIM_CARD_1 = 1,

    /**
     * Haptics in text message scenario for sim card 0.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TEXT_MESSAGE_SIM_CARD_0 = 20,

    /**
     * Haptics in text message scenario for sim card 1.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    TEXT_MESSAGE_SIM_CARD_1 = 21,

    /**
     * Haptics in notification scenario.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NOTIFICATION = 40,
  }

  /**
   * Enum for haptics mode in tone scenario.
   * @enum {int}
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  enum ToneHapticsMode {
    /**
     * None haptics mode.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NONE = 0,
    /**
     * Haptics is synchronized with tone.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    SYNC = 1,

    /**
     * Haptics is out of synchronize with tone.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    NON_SYNC = 2,
  }
  /**
   * Haptics settings in tone scenario.
   * @typedef ToneHapticsSettings
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ToneHapticsSettings {
    /**
     * Haptics mode.
     * @type { ToneHapticsMode }
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    mode: ToneHapticsMode;
    /**
     * Haptics uri. Users can set/get this parameter when {@link ToneHapticsSettings#mode} is
     * {@link ToneHapticsMode#NON_SYC}. In other cases, this uri is useless and should be ignored.
     * @type { ?string }
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    hapticsUri?: string;
  }

  /**
   * Haptics attributes in tone scenario.
   * @typedef ToneHapticsAttrs
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface ToneHapticsAttrs {
    /**
     * Get haptics uri.
     * @returns { string } Haptics uri.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getUri(): string;

    /**
     * Get title of haptics.
     * @returns { string } Haptics title.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getTitle(): string;

    /**
     * Get file name of haptics.
     * @returns { string } Haptics title.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getFileName(): string;
  }

  /**
   * Type definition of tone haptics array.
   *
   * @typedef { Array<ToneHapticsAttrs> } ToneHapticsAttrsArray
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'14','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type ToneHapticsAttrsArray = Array<ToneHapticsAttrs>;


  /**
   * Gets system sound manager for all type sound.
   * @returns { SystemSoundManager } SystemSoundManager instance.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getSystemSoundManager(): SystemSoundManager;

  /**
   * System sound manager object.
   * @typedef SystemSoundManager
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface SystemSoundManager {
    /**
     * Sets the ringtone uri to system.
     * @param { Context } context - Current application context.
     * @param { string } uri - Ringtone uri to set.
     * @param { RingtoneType } type - Ringtone type to set.
     * @param { AsyncCallback<void> } callback - Callback used to return the set uri result.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead systemSoundManager.SystemSoundManager#setRingtoneUri
     */
    setSystemRingtoneUri(context: Context, uri: string, type: RingtoneType, callback: AsyncCallback<void>): void;

    /**
     * Sets the ringtone uri to system.
     * @param { Context } context - Current application context.
     * @param { string } uri - Ringtone uri to set.
     * @param { RingtoneType } type - Ringtone type to set.
     * @returns { Promise<void> } Promise used to return the set uri result.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead systemSoundManager.SystemSoundManager#setRingtoneUri
     */
    setSystemRingtoneUri(context: Context, uri: string, type: RingtoneType): Promise<void>;

    /**
     * Sets the ringtone uri to system.
     * @param { BaseContext } context - Current application context.
     * @param { string } uri - Ringtone uri to set.
     * @param { RingtoneType } type - Ringtone type to set.
     * @returns { Promise<void> } Promise used to return the set uri result.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *         1.Mandatory parameters are left unspecified;
     *         2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setRingtoneUri(context: BaseContext, uri: string, type: RingtoneType): Promise<void>;

    /**
     * Gets the ringtone uri.
     * @param { Context } context - Current application context.
     * @param { RingtoneType } type - Ringtone type to get.
     * @param { AsyncCallback<string> } callback - Callback used to return the ringtone uri maintained in system.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead systemSoundManager.SystemSoundManager#getRingtoneUri
     */
    getSystemRingtoneUri(context: Context, type: RingtoneType, callback: AsyncCallback<string>): void;

    /**
     * Gets the ringtone uri.
     * @param { Context } context - Current application context.
     * @param { RingtoneType } type - Ringtone type to get.
     * @returns { Promise<string> } Promise used to return the ringtone uri maintained in system.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead systemSoundManager.SystemSoundManager#getRingtoneUri
     */
    getSystemRingtoneUri(context: Context, type: RingtoneType): Promise<string>;

    /**
     * Gets the ringtone uri.
     * @param { BaseContext } context - Current application context.
     * @param { RingtoneType } type - Ringtone type to get.
     * @returns { Promise<string> } Promise used to return the ringtone uri maintained in system.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getRingtoneUri(context: BaseContext, type: RingtoneType): Promise<string>;

    /**
     * Gets the ringtone attribute which is in use.
     * @param { RingtoneType } type - Ringtone type to get.
     * @returns { Promise<ToneAttrs> } Promise used to return the ringtone attribute in system.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20
     */
    getCurrentRingtoneAttribute(type: RingtoneType): Promise<ToneAttrs>;

    /**
     * Gets attributes of the default ringtone.
     * @param { BaseContext } context - Current application context.
     * @param { RingtoneType } type - Ringtone type to get.
     * @returns { Promise<ToneAttrs> } Promise used to return attributes of the default ringtone.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getDefaultRingtoneAttrs(context: BaseContext, type: RingtoneType): Promise<ToneAttrs>;

    /**
     * Gets attribute list of ringtones.
     * @param { BaseContext } context - Current application context.
     * @param { RingtoneType } type - Ringtone type to get.
     * @returns { Promise<ToneAttrsArray> } Promise used to return attribute list of ringtone.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getRingtoneAttrList(context: BaseContext, type: RingtoneType): Promise<ToneAttrsArray>;

    /**
     * Gets the ringtone player.
     * @param { Context } context - Current application context.
     * @param { RingtoneType } type - Ringtone type to get.
     * @param { AsyncCallback<RingtonePlayer> } callback - Callback used to return a ringtone player instance.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead systemSoundManager.SystemSoundManager#getRingtonePlayer
     */
    getSystemRingtonePlayer(context: Context, type: RingtoneType, callback: AsyncCallback<RingtonePlayer>): void;

    /**
     * Gets the ringtone player.
     * @param { Context } context - Current application context.
     * @param { RingtoneType } type - Ringtone type to get.
     * @returns { Promise<RingtonePlayer> } Promise used to return a ringtone player instance.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10
     * @deprecated since 11
     * @useinstead systemSoundManager.SystemSoundManager#getRingtonePlayer
     */
    getSystemRingtonePlayer(context: Context, type: RingtoneType): Promise<RingtonePlayer>;

    /**
     * Gets the ringtone player.
     * @param { BaseContext } context - Current application context.
     * @param { RingtoneType } type - Ringtone type to get.
     * @returns { Promise<RingtonePlayer> } Promise used to return a ringtone player instance.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getRingtonePlayer(context: BaseContext, type: RingtoneType): Promise<RingtonePlayer>;

    /**
     * Sets the system tone uri to system.
     * @param { BaseContext } context - Current application context.
     * @param { string } uri - Ringtone uri to set.
     * @param { SystemToneType } type - System tone type to set.
     * @returns { Promise<void> } Promise used to return the result of set system tone uri.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setSystemToneUri(context: BaseContext, uri: string, type: SystemToneType): Promise<void>;

    /**
     * Gets the system tone uri.
     * @param { BaseContext } context - Current application context.
     * @param { SystemToneType } type - System tone type to get.
     * @returns { Promise<string> } Promise used to return the system tone maintained in system.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getSystemToneUri(context: BaseContext, type: SystemToneType): Promise<string>;

    /**
     * Gets attributes of the default system tone.
     *
     * @param { BaseContext } context - Current application context.
     * @param { SystemToneType } type - system tone type to get.
     * @returns { Promise<ToneAttrs> } Promise used to return attributes of the default system tone.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getDefaultSystemToneAttrs(context: BaseContext, type: SystemToneType): Promise<ToneAttrs>;

    /**
     * Gets attribute list of alarm tones.
     * @param { BaseContext } context - Current application context.
     * @param { SystemToneType } type - System tone type to get.
     * @returns { Promise<ToneAttrsArray> } Promise used to return attribute list of system tone.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getSystemToneAttrList(context: BaseContext, type: SystemToneType): Promise<ToneAttrsArray>;

    /**
     * Gets the system tone player.
     * @param { BaseContext } context - Current application context.
     * @param { SystemToneType } type - System tone type to get.
     * @returns { Promise<SystemTonePlayer> } Promise used to return the SystemTonePlayer.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'11','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getSystemTonePlayer(context: BaseContext, type: SystemToneType): Promise<SystemTonePlayer>;

    /**
     * Gets attributes of the default alarm tone.
     *
     * @param { BaseContext } context - Current application context.
     * @returns { Promise<ToneAttrs> } Promise used to return attributes of the default alarm tone.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getDefaultAlarmToneAttrs(context: BaseContext): Promise<ToneAttrs>;

    /**
     * Sets uri of the current alarm tone.
     *
     * @param { BaseContext } context - Current application context.
     * @param { string } uri - Alarm tone uri.
     * @returns { Promise<void> } Promise used to return result of set alarm tone.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 20700001 - Tone type mismatch, e.g. tone of input uri is not an alarm tone.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setAlarmToneUri(context: BaseContext, uri: string): Promise<void>;

    /**
     * Gets uri of the current alarm tone.
     *
     * @param { BaseContext } context - Current application context.
     * @returns { Promise<string> } Promise used to return uri of current alarm tone.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getAlarmToneUri(context: BaseContext): Promise<string>;

    /**
     * Gets attribute list of alarm tones.
     * @param { BaseContext } context - Current application context.
     * @returns { Promise<ToneAttrsArray> } Promise used to return attribute list of system tone.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getAlarmToneAttrList(context: BaseContext): Promise<ToneAttrsArray>;

    /**
     * Open alarm tone file.
     * @param { BaseContext } context - Current application context.
     * @param { string } uri - Uri of alarm tone to open.
     * @returns { Promise<int> } Promise used to return fd.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 20700001 - Tone type mismatch, e.g. tone of uri is notification instead of alarm.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    openAlarmTone(context: BaseContext, uri: string): Promise<int>;

    /**
     * Open tone list in batch.
     * @param { Array<string> } uriList - List of uri to open. The length must be no more than 1024.
     * @returns { Promise<Array<[string, number, SystemSoundError]>> } Promise used to return results of this operation.
     * In each returned array number, the first item is uri of tone, the second item is fd, and the third item is error
     * code. If the uri open failed, the fd will be -1, and the reason is indicated by the error code.
     * @throws { BusinessError } 202 - Calleris not a system application.
     * @throws { BusinessError } 20700007 - Parameter is invalid, e.g. the length of uriList is too long.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20
     */
    openToneList(uriList: Array<string>): Promise<Array<[string, number, SystemSoundError]>>;

    /**
     * Close fd.
     * @param { int } fd - File descriptor to close.
     * @returns { Promise<void> } Promise used to return the result of close fd.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    close(fd: int): Promise<void>;

    /**
     * Add customized tone into ringtone library.
     * @permission ohos.permission.WRITE_RINGTONE
     * @param { BaseContext } context - Current application context.
     * @param { ToneAttrs } toneAttr - Tone attributes created by {@link createCustomizedToneAttrs}.
     * @param { string } externalUri - Tone uri in external storage.
     * @returns { Promise<string> } Tone uri after adding into ringtone library.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation is not allowed, e.g. ringtone to add is not customized.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12
     */
    /**
     * Add customized tone into ringtone library.
     * @permission ohos.permission.WRITE_RINGTONE
     * @param { BaseContext } context - Current application context.
     * @param { ToneAttrs } toneAttr - Tone attributes created by {@link createCustomizedToneAttrs}.
     * @param { string } externalUri - Tone uri in external storage.
     * @returns { Promise<string> } Tone uri after adding into ringtone library.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation is not allowed, e.g. ringtone to add is not customized.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 20700004 - Data size exceeds the limit.
     * @throws { BusinessError } 20700005 - The number of files exceeds the limit.
     * @throws { BusinessError } 20700006 - Insufficient ROM space.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    addCustomizedTone(context: BaseContext, toneAttr: ToneAttrs, externalUri: string): Promise<string>;

    /**
     * Add customized tone into ringtone library.
     * @permission ohos.permission.WRITE_RINGTONE
     * @param { BaseContext } context - Current application context.
     * @param { ToneAttrs } toneAttr - Tone attributes created by {@link createCustomizedToneAttrs}.
     * @param { int } fd - File descriptor.
     * @param { long } [offset] - The offset in the file where the data to be read, in bytes. By default, the offset
     * is zero.
     * @param { long } [length] - The length in bytes of the data to be read. By default, the length is the rest of
     * bytes in the file from the offset.
     * @returns { Promise<string> } Tone uri after adding into ringtone library.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation is not allowed, e.g. ringtone to add is not customized.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 12
     */
    /**
     * Add customized tone into ringtone library.
     * @permission ohos.permission.WRITE_RINGTONE
     * @param { BaseContext } context - Current application context.
     * @param { ToneAttrs } toneAttr - Tone attributes created by {@link createCustomizedToneAttrs}.
     * @param { int } fd - File descriptor.
     * @param { long } [offset] - The offset in the file where the data to be read, in bytes. By default, the offset
     * is zero.
     * @param { long } [length] - The length in bytes of the data to be read. By default, the length is the rest of
     * bytes in the file from the offset.
     * @returns { Promise<string> } Tone uri after adding into ringtone library.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation is not allowed, e.g. ringtone to add is not customized.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 20700004 - Data size exceeds the limit.
     * @throws { BusinessError } 20700005 - The number of files exceeds the limit.
     * @throws { BusinessError } 20700006 - Insufficient ROM space.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20
     * @arkts 1.1&1.2
     */
    addCustomizedTone(context: BaseContext, toneAttr: ToneAttrs, fd: int, offset?: long, length?: long)
      : Promise<string>;

    /**
     * Remove customized tone in ringtone library.
     * @permission ohos.permission.WRITE_RINGTONE
     * @param { BaseContext } context - Current application context.
     * @param { string } uri - Tone uri.
     * @returns { Promise<void> } Promise used to return removing result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation is not allowed, e.g. ringtone of this uri is not customized.
     * @throws { BusinessError } 5400103 - I/O error.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'12','1.2':'20'}
     * @arkts 1.1&1.2
     */
    removeCustomizedTone(context: BaseContext, uri:string): Promise<void>;

    /**
     * Remove customized tone list in batch.
     * @permission ohos.permission.WRITE_RINGTONE
     * @param { Array<string> } uriList - Uri list to remove. The length must be no more than 1024.
     * @returns { Promise<Array<[string, SystemSoundError]>> } Promise used to return removing result array. In each
     * array memeber, the first item is the tone uri, and the second item is the error code.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 20700007 - Prameter is invalid, e.g. the length of uriList is too long.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 20
     */
    removeCustomizedToneList(uriList: Array<string>): Promise<Array<[string, SystemSoundError]>>;

    /**
     * Get haptics settings.
     * @param { BaseContext } context - Current application context.
     * @param { ToneHapticsType } type - Tone haptics type.
     * @returns { Promise<ToneHapticsSettings> } Promise used to return results of this call.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 20700003 - Unsupported operation.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getToneHapticsSettings(context: BaseContext, type: ToneHapticsType): Promise<ToneHapticsSettings>;

    /**
     * Set haptics settings.
     * @param { BaseContext } context - Current application context.
     * @param { ToneHapticsType } type - Tone haptics type.
     * @param { ToneHapticsSettings } settings - Tone haptics settings.
     * @returns { Promise<void> } Promise used to return results of this call.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation not allowed. For example, the input URI is not valid.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 20700003 - Unsupported operation.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    setToneHapticsSettings(context: BaseContext, type: ToneHapticsType, settings: ToneHapticsSettings): Promise<void>;

    /**
     * Get haptics list.
     * @param { BaseContext } context - Current application context.
     * @param { boolean } isSynced - The queried haptics is synchronized with tone or not.
     * @returns { Promise<ToneHapticsAttrsArray> } Promise used to return ToneHapticsAttrsArray.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 20700003 - Unsupported operation.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getToneHapticsList(context: BaseContext, isSynced: boolean): Promise<ToneHapticsAttrsArray>;

    /**
     * Get attributes of haptics which is synchronized with one tone. If no haptics is found, then the attributes in
     * the returned ToneHapticsAttrs is empty.
     * @param { BaseContext } context - Current application context.
     * @param { string } toneUri - Uri of tone to query.
     * @returns { Promise<ToneHapticsAttrs> } Promise used to return ToneHapticsAttrs.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation not allowed. For example, the input URI is not used for tones.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 20700003 - Unsupported operation.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    getHapticsAttrsSyncedWithTone(context: BaseContext, toneUri: string): Promise<ToneHapticsAttrs>;

    /**
     * Open haptics.
     * @param { BaseContext } context - Current application context.
     * @param { string } hapticsUri - Uri of haptics to open.
     * @returns { Promise<int> } Promise used to return fd.
     * @throws { BusinessError } 202 - Caller is not a system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *                                 1.Mandatory parameters are left unspecified;
     *                                 2.Incorrect parameter types.
     * @throws { BusinessError } 5400102 - Operation not allowed. For example, the input URI is not one for haptics.
     * @throws { BusinessError } 5400103 - I/O error.
     * @throws { BusinessError } 20700003 - Unsupported operation.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since arkts {'1.1':'14','1.2':'20'}
     * @arkts 1.1&1.2
     */
    openToneHaptics(context: BaseContext, hapticsUri: string): Promise<int>;
  }

  /**
   * Ringtone player object.
   * @typedef { _RingtonePlayer } RingtonePlayer
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type RingtonePlayer = _RingtonePlayer;

  /**
   * SystemTone player object.
   * @typedef { _SystemTonePlayer } SystemTonePlayer
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type SystemTonePlayer = _SystemTonePlayer;

  /**
   * Interface for ringtone options.
   * @typedef { _RingtoneOptions } RingtoneOptions
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'10','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type RingtoneOptions = _RingtoneOptions;

  /**
   * System tone options.
   * @typedef { _SystemToneOptions } SystemToneOptions
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  type SystemToneOptions = _SystemToneOptions;
}

export default systemSoundManager;