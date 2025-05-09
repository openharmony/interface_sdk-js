/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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
 * @kit AccessibilityKit
 */

import { AccessibilityError } from './@ohos.accessibility';

/**
 * Configuration of the accessibility.
 *
 * @namespace config
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20
 */
declare namespace config {
  /**
   * Indicates the configuration of high-contrast text.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  const highContrastText: Config<boolean>;
  /**
   * Indicates setting and getting in configuration.
   *
   * @typedef Config<T>
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  interface Config<T> {
    /**
     * Setting configuration value.
     *
     * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
     * @param { T } value Indicates the value.
     * @returns { Promise<void> }
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Input parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 20
     */
    set(value: T): Promise<void>;

    /**
     * Setting configuration value.
     *
     * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
     * @param { T } value Indicates the value.
     * @param { AsyncCallback<void> } callback
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Input parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 20
     */
	set(value: T, callback: (err: AccessibilityError) => void): void;

    /**
     * Getting configuration value.
     *
     * @returns { Promise<T> }
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 20
     */
	get(): Promise<T>;

    /**
     * Getting configuration value.
     *
     * @param { AsyncCallback<T> } callback
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 20
     */
	get(callback:(err: AccessibilityError, data: T) => void): void;
  }
}
export default config;
