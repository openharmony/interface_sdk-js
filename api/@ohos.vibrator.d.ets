/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit SensorServiceKit
 */

import { AsyncCallback } from './@ohos.base';

/**
 * This module provides the capability to control motor vibration.
 *
 * @namespace vibrator
 * @syscap SystemCapability.Sensors.MiscDevice
 * @atomicservice
 * @since 20
 */
declare namespace vibrator {
  /**
   * Trigger vibrator vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibrateEffect } effect - Indicate vibrate effect, {@code VibrateEffect}
   * @param { VibrateAttribute } attribute - Indicate vibrate attribute, {@code VibrateAttribute}
   * @param { AsyncCallback<void> } callback - The callback of startVibration
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported
   * @throws { BusinessError } 14600101 - Device operation failed
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 20
   */
  function startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>): void;

  /**
   * Trigger vibrator vibration.
   *
   * @permission ohos.permission.VIBRATE
   * @param { VibrateEffect } effect - Indicate vibrate effect, {@code VibrateEffect}.
   * @param { VibrateAttribute } attribute - Indicate vibrate attribute, {@code VibrateAttribute}.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14600101 - Device operation failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 20
   */
  function startVibration(effect: VibrateEffect, attribute: VibrateAttribute): Promise<void>;

  /**
   * Whether the preset vibration effect is supported.
   *
   * @param { string } effectId Indicate the specified effect of the preset, {@code EffectId}.
   * @param { AsyncCallback<boolean> } callback The callback of isSupportEffect.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 20
   */
  function isSupportEffect(effectId: string, callback: AsyncCallback<boolean>): void;

  /**
   * Whether the preset vibration effect is supported.
   *
   * @param { string } effectId Indicate the specified effect of the preset, {@code EffectId}.
   * @returns { Promise<boolean> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br> 2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 10
   */
  function isSupportEffect(effectId: string): Promise<boolean>;

  /**
   * The use of vibration.
   *
   * @typedef {'unknown' | 'alarm' | 'ring' | 'notification' | 'communication' |
   * 'touch' | 'media' | 'physicalFeedback' | 'simulateReality'}
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 20
   */
  type Usage = 'unknown' | 'alarm' | 'ring' | 'notification' | 'communication' |
  'touch' | 'media' | 'physicalFeedback' | 'simulateReality';

  /**
   * The attribute of vibration.
   *
   * @interface VibrateAttribute
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 20
   */
  interface VibrateAttribute {
  /**
   * Vibrator id, default is 0.
   *
   * @type { ?number }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 20
   */
    id?: number;

  /**
   * The use of vibration.
   *
   * @type { Usage }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 20
   */
    usage: Usage;

  /**
   * Indicates whether to bypass system management switches.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @systemapi
   * @since 20
   */
    systemUsage?: boolean;
  }

  /**
   * Describes the effect of vibration.
   *
   * @typedef { VibrateTime | VibratePreset | VibrateFromFile }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 20
   */
  type VibrateEffect = VibrateTime | VibratePreset | VibrateFromFile;

  /**
   * Vibrate continuously for a period of time at the default intensity of the system.
   *
   * @interface VibrateTime
   * @syscap SystemCapability.Sensors.MiscDevice
   * @atomicservice
   * @since 20
   */
  interface VibrateTime {
    /**
     * The value is "time", which triggers the motor vibration according to the specified duration.
     *
     * @type { 'time' }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @atomicservice
     * @since 20
     */
    type: 'time';

    /**
     * The duration of the vibration, in ms.
     *
     * @type { number }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @atomicservice
     * @since 20
     */
    duration: number; /** The duration of the vibration, in ms */
  }

  /**
   * Preset vibration type vibration effect.
   *
   * @interface VibratePreset
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 20
   */
  interface VibratePreset {
    /**
     * The value is "preset", which triggers motor vibration according to preset vibration effect.
     *
     * @type { 'preset' }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 20
     */
    type: 'preset';

    /**
     * Preset type vibration.
     *
     * @type { string }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 20
     */
    effectId: string;

    /**
     * The number of vibration repetitions.
     *
     * @type { ?number }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 20
     */
    count?: number;

    /**
     * The intensity of vibration effect.
     *
     * @type { ?number }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 20
     */
    intensity?: number;
  }

  /**
   * Custom vibration, vibrate the effect from a haptic file.
   *
   * @interface VibrateFromFile
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 20
   */
  interface VibrateFromFile {
  /**
   * The value is "file", which triggers motor vibration according to the vibration profile.
   *
   * @type { 'file' }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 20
   */
    type: 'file';

  /**
   * Haptic file descriptor, some formats are supported.
   *
   * @type { HapticFileDescriptor }
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 20
   */
    hapticFd: HapticFileDescriptor;
  }

  /**
   * Haptic file descriptor. The caller needs to ensure that the fd is valid and
   * the offset and length are correct.
   *
   * @interface HapticFileDescriptor
   * @syscap SystemCapability.Sensors.MiscDevice
   * @since 20
   */
  interface HapticFileDescriptor {
    /**
     * The file descriptor of haptic effect source from file system. The caller
     * is responsible to close the file descriptor.
     *
     * @type { number }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 20
     */
    fd: number;

    /**
     * The offset into the file where the data to be read, in bytes. By default,
     * the offset is zero.
     *
     * @type { ?number }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 20
     */
    offset?: number;

    /**
     * The length in bytes of the data to be read. By default, the length is the
     * rest of bytes in the file from the offset.
     *
     * @type { ?number }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 20
     */
    length?: number;
  }
}

export default vibrator;
