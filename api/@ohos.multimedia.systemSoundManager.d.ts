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

import type { AsyncCallback } from './@ohos.base';
import type Context from './application/Context';
import type { RingtonePlayer as _RingtonePlayer } from './multimedia/ringtonePlayer';
import type { RingtoneOptions as _RingtoneOptions } from './multimedia/ringtonePlayer';

/**
 * Provides ringtone player interfaces.
 *
 * @namespace systemSoundManager
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @systemapi
 * @since 10
 */
declare namespace systemSoundManager {
  /**
   * Enum for ringtone type.
   * @enum { number }
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  enum RingtoneType {
    /**
     * Default type.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10
     */
    RINGTONE_TYPE_DEFAULT = 0,
    /**
     * Multi-sim type.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10
     */
    RINGTONE_TYPE_MULTISIM = 1,
  }

  /**
   * Gets system sound manager for all type sound.
   * @returns { SystemSoundManager } SystemSoundManager instance.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  function getSystemSoundManager(): SystemSoundManager;

  /**
   * System sound manager object.
   * @typedef SystemSoundManager
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
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
     */
    setSystemRingtoneUri(context: Context, uri: string, type: RingtoneType): Promise<void>;

    /**
     * Gets the ringtone uri.
     * @param { Context } context - Current application context.
     * @param { RingtoneType } type - Ringtone type to get.
     * @param { AsyncCallback<string> } callback - Callback used to return the ringtone uri maintained in system.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10
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
     */
    getSystemRingtoneUri(context: Context, type: RingtoneType): Promise<string>;

    /**
     * Gets the ringtone player.
     * @param { Context } context - Current application context.
     * @param { RingtoneType } type - Ringtone type to get.
     * @param { AsyncCallback<RingtonePlayer> } callback - Callback used to return a ringtone player instance.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @systemapi
     * @since 10
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
     */
    getSystemRingtonePlayer(context: Context, type: RingtoneType): Promise<RingtonePlayer>;
  }

  /**
   * Ringtone player object.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  type RingtonePlayer = _RingtonePlayer;

  /**
   * Interface for ringtone options.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  type RingtoneOptions = _RingtoneOptions;
}

export default systemSoundManager;