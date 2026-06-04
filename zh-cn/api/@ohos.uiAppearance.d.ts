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
 * @file UI Appearance
 * @kit ArkUI
 */

import type { AsyncCallback } from './@ohos.base';

/**
* 用户界面外观提供获取系统外观的一些基础能力，包括获取深浅色模式、字体大小缩放比例、字体粗细缩放比例。
*
* > **说明：**
*
* > 从API version 20开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
*
 * @syscap SystemCapability.ArkUI.UiAppearance
 * @systemapi hide this for inner system use [since 10 - 19]
 * @publicapi [since 20]
 * @since 10 dynamic
 */
declare namespace uiAppearance {

  /**
   * 深色模式枚举。
   *
   * | 名称 | 值 | 说明 |
   * | -- | -- | -- |
   * | ALWAYS_DARK | 0 | 系统始终为深色。  |
   * | ALWAYS_LIGHT | 1 | 系统始终为浅色。 |
   *
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use [since 10 - 19]
   * @publicapi [since 20]
   * @since 10 dynamic
   */
  enum DarkMode {

    /**
     * Always display with dark mode.
     *
     * @syscap SystemCapability.ArkUI.UiAppearance
     * @systemapi hide this for inner system use [since 10 - 19]
     * @publicapi [since 20]
     * @since 10 dynamic
     */
    ALWAYS_DARK = 0,

    /**
     * Always display with light mode.
     *
     * @syscap SystemCapability.ArkUI.UiAppearance
     * @systemapi hide this for inner system use [since 10 - 19]
     * @publicapi [since 20]
     * @since 10 dynamic
     */
    ALWAYS_LIGHT = 1
  }

  /**
   * 设置系统深色模式。使用callback异步回调。
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { DarkMode } mode - indicates the dark-mode to set
   * @param { AsyncCallback<void> } callback - the callback of setDarkMode
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use
   * @since 10 dynamic
   */
  function setDarkMode(mode: DarkMode, callback: AsyncCallback<void>): void;

  /**
   * 设置系统深色模式。使用Promise异步回调。
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { DarkMode } mode - indicates the dark-mode to set
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use
   * @since 10 dynamic
   */
  function setDarkMode(mode: DarkMode): Promise<void>;

  /**
   * 获取系统当前的深色模式配置。
   *
   * <!--Del-->
   *
   * > **说明：**
   *
   * > 该接口在API version 19及之前版本中为系统接口。开发者使用该接口时需要申请
   * > [ohos.permission.UPDATE_CONFIGURATION](docroot://security/AccessToken/permissions-for-system-apps.md#ohospermissionupdate_configuration)
   * > 权限。
   *
   * <!--DelEnd-->
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION [since 10 - 19]
   * @returns { DarkMode } current dark-mode.
   * @throws { BusinessError } 201 - Permission denied. [since 10 - 19]
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use [since 10 - 19]
   * @publicapi [since 20]
   * @since 10 dynamic
   */
  function getDarkMode(): DarkMode;

  /**
   * 设置系统字体大小。
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { number } fontScale - indicates the font-scale to set
   * @returns { Promise<void> } the promise returned by the function
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use
   * @since 12 dynamic
   */
  function setFontScale(fontScale: number): Promise<void>;

  /**
   * 获取系统当前的字体大小缩放比例。
   *
   * <!--Del-->
   *
   * > **说明：**
   *
   * > 该接口在API version 19及之前版本中为系统接口。开发者使用该接口时需要申请
   * > [ohos.permission.UPDATE_CONFIGURATION](docroot://security/AccessToken/permissions-for-system-apps.md#ohospermissionupdate_configuration)
   * > 权限。
   *
   * <!--DelEnd-->
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION [since 12 - 19]
   * @returns { number } current font-scale.
   * @throws { BusinessError } 201 - Permission denied. [since 12 - 19]
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12 - 19]
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use [since 12 - 19]
   * @publicapi [since 20]
   * @since 12 dynamic
   */
  function getFontScale(): number;

  /**
   * 设置系统字体粗细。
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { number } fontWeightScale - indicates the font-weight-scale to set
   * @returns { Promise<void> } the promise returned by the function
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use
   * @since 12 dynamic
   */
  function setFontWeightScale(fontWeightScale: number): Promise<void>;

  /**
   * 获取系统当前的字体粗细缩放比例。
   *
   * <!--Del-->
   *
   * > **说明：**
   *
   * > 该接口在API version 19及之前版本中为系统接口。开发者使用该接口时需要申请
   * > [ohos.permission.UPDATE_CONFIGURATION](docroot://security/AccessToken/permissions-for-system-apps.md#ohospermissionupdate_configuration)
   * > 权限。
   *
   * <!--DelEnd-->
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION [since 12 - 19]
   * @returns { number } current font-weight-scale.
   * @throws { BusinessError } 201 - Permission denied. [since 12 - 19]
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12 - 19]
   * @throws { BusinessError } 500001 - Internal error.
   * @syscap SystemCapability.ArkUI.UiAppearance
   * @systemapi hide this for inner system use [since 12 - 19]
   * @publicapi [since 20]
   * @since 12 dynamic
   */
  function getFontWeightScale(): number;
}

export default uiAppearance;