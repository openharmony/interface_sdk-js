/*
 * Copyright (C) 2024-2026 Huawei Device Co., Ltd.
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
 * @file 锁屏敏感数据管理
 * @kit AbilityKit
 */

/**
 * 本模块提供锁屏下应用敏感数据保护的能力，支持申请和释放锁屏下应用敏感数据访问权限，以及查询敏感数据密钥的状态。当敏感数据密钥的引用计数归零，且屏幕被锁定达到系统配置的时长阈值后，密钥会被销毁，此时无法对该数据进行操作。这些密钥只有在屏幕解锁后才能恢复。通过调用本模块的[acquireAccess]{@link screenLockFileManager.acquireAccess}接口，可以防止密钥在屏幕被锁定达到系统配置的时长阈值后被销毁。
 *
 * > **说明：**
 * >
 * > - 应用开启锁屏下敏感数据保护功能，需在[requestPermissions](docroot://security/AccessToken/declare-permissions.md#在配置文件中声明权限)中配置权限ohos.permission.PROTECT_SCREEN_LOCK_DATA。
 *
 * @syscap SystemCapability.Security.ScreenLockFileManager
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace screenLockFileManager {
  /**
   * 表示锁屏下访问敏感数据类型的枚举。
   *
   * @syscap SystemCapability.Security.ScreenLockFileManager
   * @since 12 dynamic
   * @since 23 static
   */
  export enum DataType {
    /**
     * 媒体数据类型。
     *
     * @syscap SystemCapability.Security.ScreenLockFileManager
     * @since 12 dynamic
     * @since 23 static
     */
    MEDIA_DATA = 0x00000001,

    /**
     * 所有敏感数据类型。
     *
     * @syscap SystemCapability.Security.ScreenLockFileManager
     * @since 12 dynamic
     * @since 23 static
     */
    ALL_DATA = 0xffffffff
  }

  /**
   * 表示锁屏下敏感数据访问权限申请状态的枚举。
   *
   * @syscap SystemCapability.Security.ScreenLockFileManager
   * @since 12 dynamic
   * @since 23 static
   */
  export enum AccessStatus {
    /**
     * 申请锁屏下敏感数据访问权限被拒绝。
     *
     * @syscap SystemCapability.Security.ScreenLockFileManager
     * @since 12 dynamic
     * @since 23 static
     */
    ACCESS_DENIED = -1,

    /**
     * 申请锁屏下敏感数据访问权限被允许。
     *
     * @syscap SystemCapability.Security.ScreenLockFileManager
     * @since 12 dynamic
     * @since 23 static
     */
    ACCESS_GRANTED = 0
  }

  /**
   * 表示锁屏下敏感数据访问权限释放状态的枚举。
   *
   * @syscap SystemCapability.Security.ScreenLockFileManager
   * @since 12 dynamic
   * @since 23 static
   */
  export enum ReleaseStatus {
    /**
     * 释放锁屏下敏感数据访问权限被拒绝。
     *
     * @syscap SystemCapability.Security.ScreenLockFileManager
     * @since 12 dynamic
     * @since 23 static
     */
    RELEASE_DENIED = -1,

    /**
     * 释放锁屏下敏感数据访问权限被允许。
     *
     * @syscap SystemCapability.Security.ScreenLockFileManager
     * @since 12 dynamic
     * @since 23 static
     */
    RELEASE_GRANTED = 0
  }

  /**
   * 表示锁屏下敏感数据密钥状态的枚举。
   *
   * @syscap SystemCapability.Security.ScreenLockFileManager
   * @since 18 dynamic
   * @since 23 static
   */
  export enum KeyStatus {

    /**
     * 密钥不存在。此状态表示应用未开启锁屏下敏感数据保护功能，或当前设备上该保护功能不可用。
     *
     * @syscap SystemCapability.Security.ScreenLockFileManager
     * @since 18 dynamic
     * @since 23 static
     */
    KEY_NOT_EXIST = -2,

    /**
     * 密钥已释放。此状态表示锁屏下敏感数据无法被操作。
     *
     * @syscap SystemCapability.Security.ScreenLockFileManager
     * @since 18 dynamic
     * @since 23 static
     */
    KEY_RELEASED = -1,

    /**
     * 密钥存在。此状态表示锁屏下敏感数据可以被正常操作。
     *
     * @syscap SystemCapability.Security.ScreenLockFileManager
     * @since 18 dynamic
     * @since 23 static
     */
    KEY_EXIST = 0
  }

  /**
   * 以同步方法申请调用方应用锁屏下敏感数据访问权限。申请成功后，敏感数据密钥的引用计数增加，防止密钥在屏幕被锁定达到系统配置的时长阈值后被销毁。该方法需与[releaseAccess]{@link screenLockFileManager.releaseAccess}配对使用。
   *
   * 调用此接口前，请确保应用已开启锁屏下敏感数据保护功能，并通过[queryAppKeyState]{@link screenLockFileManager.queryAppKeyState}接口查询密钥状态为KEY_EXIST。
   *
   * @returns { AccessStatus } 锁屏下敏感数据访问权限的申请状态。
   * @throws { BusinessError } 801 - The specified SystemCapability name was not found.
   * @throws { BusinessError } 29300002 - The system ability works abnormally.
   * @throws { BusinessError } 29300003 - The application is not enabled the data protection under lock screen.
   * @throws { BusinessError } 29300004 - File access is denied.
   * @syscap SystemCapability.Security.ScreenLockFileManager
   * @since 12 dynamic
   * @since 23 static
   */
  function acquireAccess(): AccessStatus;

  /**
   * 以同步方法申请锁屏下指定类型的敏感数据访问权限。申请成功后，敏感数据密钥的引用计数增加，防止密钥在锁屏达到系统配置的时长阈值后被销毁。该方法需与[releaseAccess]{@link screenLockFileManager.releaseAccess}配对使用。
   *
   * 调用此接口前，请确保应用已开启锁屏下敏感数据保护功能，并通过[queryAppKeyState]{@link screenLockFileManager.queryAppKeyState}接口查询密钥状态为KEY_EXIST。
   *
   * @permission ohos.permission.ACCESS_SCREEN_LOCK_MEDIA_DATA or ohos.permission.ACCESS_SCREEN_LOCK_ALL_DATA
   * @param { DataType } dataType - 锁屏下访问的敏感数据类型。
   * @returns { AccessStatus } 锁屏下敏感数据访问权限的申请状态。
   * @throws { BusinessError } 201 - Permission verification failed, usually returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameter is left unspecified. 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - The specified SystemCapability name was not found.
   * @throws { BusinessError } 29300001 - Invalid DataType.
   * @throws { BusinessError } 29300002 - The system ability works abnormally.
   * @throws { BusinessError } 29300003 - The application is not enabled the data protection under lock screen.
   * @throws { BusinessError } 29300004 - File access is denied.
   * @syscap SystemCapability.Security.ScreenLockFileManager
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function acquireAccess(dataType: DataType): AccessStatus;

  /**
   * 以同步方法释放调用方应用锁屏下敏感数据访问权限。释放成功后，敏感数据密钥的引用计数减少，当计数归零时，密钥可以在屏幕被锁定达到系统配置的时长阈值后被销毁。
   *
   * 调用此接口前，请确保应用已开启锁屏下敏感数据保护功能，并且先调用[acquireAccess]{@link screenLockFileManager.acquireAccess}接口成功申请权限后才能使用。
   *
   * @returns { ReleaseStatus } 锁屏下敏感数据访问权限的释放状态。
   * @throws { BusinessError } 801 - The specified SystemCapability name was not found.
   * @throws { BusinessError } 29300002 - The system ability works abnormally.
   * @throws { BusinessError } 29300003 - The application is not enabled the data protection under lock screen.
   * @throws { BusinessError } 29300005 - File access was not acquired.
   * @syscap SystemCapability.Security.ScreenLockFileManager
   * @since 12 dynamic
   * @since 23 static
   */
  function releaseAccess(): ReleaseStatus;

  /**
   * 以同步方法释放锁屏下指定类型敏感数据访问权限。释放成功后，敏感数据密钥的引用计数减少，当引用计数归零时，密钥可以在锁屏达到系统配置的时长阈值后被销毁。
   *
   * 调用此接口前，请确保应用已开启锁屏下敏感数据保护功能，并且先调用[acquireAccess]{@link screenLockFileManager.acquireAccess}接口成功申请权限后才能使用。
   *
   * @permission ohos.permission.ACCESS_SCREEN_LOCK_MEDIA_DATA or ohos.permission.ACCESS_SCREEN_LOCK_ALL_DATA
   * @param { DataType } dataType - 锁屏下访问的敏感数据类型。dataType需要与acquireAccess接口使用的dataType保持一致。
   * @returns { ReleaseStatus } 锁屏下敏感数据访问权限的释放状态。
   * @throws { BusinessError } 201 - Permission verification failed, usually returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameter is left unspecified. 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - The specified SystemCapability name was not found.
   * @throws { BusinessError } 29300001 - Invalid DataType.
   * @throws { BusinessError } 29300002 - The system ability works abnormally.
   * @throws { BusinessError } 29300003 - The application is not enabled the data protection under lock screen.
   * @throws { BusinessError } 29300005 - File access was not acquired.
   * @syscap SystemCapability.Security.ScreenLockFileManager
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function releaseAccess(dataType: DataType): ReleaseStatus;

  /**
   * 以同步方法查询调用方应用锁屏下敏感数据密钥的状态。
   *
   * @returns { KeyStatus } 锁屏下敏感数据密钥的状态。
   * @throws { BusinessError } 801 - The specified SystemCapability name was not found.
   * @throws { BusinessError } 29300002 - The system ability works abnormally.
   * @syscap SystemCapability.Security.ScreenLockFileManager
   * @since 18 dynamic
   * @since 23 static
   */
  function queryAppKeyState(): KeyStatus;

  /**
   * 以同步方法查询锁屏下指定类型敏感数据密钥的状态。
   *
   * @permission ohos.permission.ACCESS_SCREEN_LOCK_MEDIA_DATA or ohos.permission.ACCESS_SCREEN_LOCK_ALL_DATA
   * @param { DataType } dataType - 锁屏下访问的敏感数据类型。
   * @returns { KeyStatus } 锁屏下敏感数据密钥的状态。
   * @throws { BusinessError } 201 - Permission verification failed, usually returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameter is left unspecified. 2. Incorrect parameter types.
   * @throws { BusinessError } 801 - The specified SystemCapability name was not found.
   * @throws { BusinessError } 29300001 - Invalid DataType.
   * @throws { BusinessError } 29300002 - The system ability works abnormally.
   * @syscap SystemCapability.Security.ScreenLockFileManager
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  function queryAppKeyState(dataType: DataType): KeyStatus;
}
export default screenLockFileManager;