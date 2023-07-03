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
 * @since 10
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @systemapi
 */
declare namespace systemSoundManager {
  /**
   * Enum for ringtone type.
   * @since 10
   * @systemapi
   */
  enum RingtoneType {
    /**
     * Default type.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @since 10
     * @systemapi
     */
    RINGTONE_TYPE_DEFAULT = 0,
    /**
     * Multi-sim type.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @since 10
     * @systemapi
     */
    RINGTONE_TYPE_MULTISIM = 1,
  }

  /**
   * Gets system sound manager for all type sound.
   * @returns SystemSoundManager instance.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   * @systemapi
   */
  function getSystemSoundManager(): SystemSoundManager;

  /**
   * System sound manager object.
   * @since 10
   * @systemapi
   */
  interface SystemSoundManager {
    /**
     * Sets the ringtone uri to system.
     * @param context Current application context.
     * @param uri Ringtone uri to set.
     * @param type Ringtone type to set.
     * @param callback Callback used to return the set uri result.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @since 10
     * @systemapi
     */
    setSystemRingtoneUri(context: Context, uri: string, type: RingtoneType, callback: AsyncCallback<void>): void;
    /**
     * Sets the ringtone uri to system.
     * @param context Current application context.
     * @param uri Ringtone uri to set.
     * @param type Ringtone type to set.
     * @returns Promise used to return the set uri result.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @since 10
     * @systemapi
     */
    setSystemRingtoneUri(context: Context, uri: string, type: RingtoneType): Promise<void>;

    /**
     * Gets the ringtone uri.
     * @param context Current application context.
     * @param type Ringtone type to get.
     * @param callback Callback used to return the ringtone uri maintained in system.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @since 10
     * @systemapi
     */
    getSystemRingtoneUri(context: Context, type: RingtoneType, callback: AsyncCallback<string>): void;
    /**
     * Gets the ringtone uri.
     * @param context Current application context.
     * @param type Ringtone type to get.
     * @returns Promise used to return the ringtone uri maintained in system.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @since 10
     * @systemapi
     */
    getSystemRingtoneUri(context: Context, type: RingtoneType): Promise<string>;

    /**
     * Gets the ringtone player.
     * @param context Current application context.
     * @param type Ringtone type to get.
     * @param callback Callback used to return a ringtone player instance.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @since 10
     * @systemapi
     */
    getSystemRingtonePlayer(context: Context, type: RingtoneType, callback: AsyncCallback<RingtonePlayer>): void;
    /**
     * Gets the ringtone player.
     * @param context Current application context.
     * @param type Ringtone type to get.
     * @returns Promise used to return a ringtone player instance.
     * @syscap SystemCapability.Multimedia.SystemSound.Core
     * @since 10
     * @systemapi
     */
    getSystemRingtonePlayer(context: Context, type: RingtoneType): Promise<RingtonePlayer>;
  }

  /**
   * Ringtone player object.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   * @systemapi
   */
  type RingtonePlayer = _RingtonePlayer;

  /**
   * Interface for ringtone options.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @since 10
   * @systemapi
   */
  type RingtoneOptions = _RingtoneOptions;
}

export default systemSoundManager;