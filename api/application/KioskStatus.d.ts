/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit AbilityKit
 */

/**
 * The module provides the kiosk status information, including whether the system is in kiosk mode and the information 
 * about the application in kiosk mode.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
export interface KioskStatus {
  /**
   * Whether the system is in kiosk mode. **true** if in kiosk mode, **false** otherwise.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  isKioskMode: boolean;

  /**
   * Bundle name of the application in kiosk mode.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  kioskBundleName: string;

  /**
   * UID of the application in kiosk mode.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  kioskBundleUid: int;
}