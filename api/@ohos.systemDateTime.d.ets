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
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';

/**
 * System time and timezone.
 *
 * @namespace systemDateTime
 * @syscap SystemCapability.MiscServices.Time
 * @since 20
 */
declare namespace systemDateTime {
  /**
   * Obtains the number of timestamp that have elapsed since the Unix epoch.
   *
   * @param { boolean } [ isNanoseconds ] - True if the result is in nanoseconds, otherwise in milliseconds
   * @returns { number } The timestamp returned of getTime.
   * @syscap SystemCapability.MiscServices.Time
   * @since 20
   */
  function getTime(isNanoseconds?: boolean): number;

  /**
   * Obtains the system time zone.
   *
   * @param { AsyncCallback<string> } callback - The callback of getTimezone
   * @syscap SystemCapability.MiscServices.Time
   * @since 20
   */
  function getTimezone(callback: AsyncCallback<string>): void;

  /**
   * Obtains the system time zone.
   *
   * @returns { Promise<string> } The promise returned by the function
   * @syscap SystemCapability.MiscServices.Time
   * @since 20
   */
  function getTimezone(): Promise<string>;

  /**
   * Obtains the system time zone.
   *
   * @returns { string } The timezone returned of getTimezoneSync.
   * @syscap SystemCapability.MiscServices.Time
   * @since 20
   */
  function getTimezoneSync(): string;
}

export default systemDateTime;