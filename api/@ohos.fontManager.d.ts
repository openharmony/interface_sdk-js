/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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
 * @file Font Management
 * @kit LocalizationKit
 */

/**
 * This module provides the application with the capabilities to install, uninstall, query third-party fonts,
 * and monitor the status of font services. Specifically, it includes:
 * <br>- Installing application-level or session-level font files, supporting formats such as `.ttf`, `.ttc`, and `.otf`.
 * <br>- Uninstalling installed fonts based on the font path.
 * <br>- Querying the scope of application for installed fonts.
 * <br>- Registering a font service status listener to notify the application when the font service abnormally exits.
 *
 * @syscap SystemCapability.Global.FontManager
 * @systemapi [since 19 - 26.0.0]
 * @publicapi [since 26.0.1]
 * @since 19 dynamic
 * @since 23 static
 */
declare namespace fontManager {
  /**
   * Installs a font file from a specified path into the system font library. This API uses a promise to return the 
   * result. 
   * 
   * > **NOTE**
   * > - After successful installation, applications can use the font by its font name. The same font path cannot be installed repeatedly.
   * > - A maximum of 200 font files can be installed. In version 26.0.1 and later, a maximum of 800 font files can be installed on PCs and 2-in-1 devices.
   *
   * @permission ohos.permission.UPDATE_FONT
   * @param { string } path - Path to the font file to be installed. Only font files in.ttf,.ttc, or.otf format are supported.
   * @returns { Promise<int> } Promise used to return the installation result.
   *     <br>- The value **0** indicates that the installation is successful and the font has been added to the system 
   *     font library.
   *     <br>- Any other value indicates that the installation failed. Troubleshoot based on the error code.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 31100101 - The font does not exist.
   * @throws { BusinessError } 31100102 - The font is not supported.
   * @throws { BusinessError } 31100103 - Failed to copy the font file.
   * @throws { BusinessError } 31100104 - The font file is installed.
   * @throws { BusinessError } 31100105 - Exceeded the maximum number of installed files.
   * @throws { BusinessError } 31100106 - The system ability works abnormally.
   * @syscap SystemCapability.Global.FontManager
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  function installFont(path: string): Promise<int>;

  /**
   * Uninstalls an installed font file from the system font library by font name. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.UPDATE_FONT
   * @param { string } fullName - Name of the font to be uninstalled. You can open the .ttf, .ttc or .otf font file to obtain 
   *     the name.
   *     <br>The font name is case-sensitive. Ensure that it exactly matches the actual font name.
   * @returns { Promise<int> } Promise used to return the uninstallation result.
   *     <br>- The value **0** indicates that the uninstallation is successful and the font has been removed from the 
   *     system font library.
   *     <br>- Any other value indicates that the uninstallation failed. Troubleshoot based on the error code.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 31100107 - The font file does not exist.
   * @throws { BusinessError } 31100108 - Failed to delete the font file.
   * @throws { BusinessError } 31100109 - The system ability works abnormally.
   * @syscap SystemCapability.Global.FontManager
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  function uninstallFont(fullName: string): Promise<int>;

  /**
   * Data migration API used during device upgrades to start a migration task, providing real-time feedback on 
   * migration progress and results through a callback function.
   *
   * @permission ohos.permission.UPDATE_FONT
   * @param { DataMigrationCallback } callback - Callback function for data migration.
   * @returns { int } Result of the migration task startup.
   *     <br>- **0**: The migration task is started successfully. The migration task will be executed in the background 
   *     and the progress and result will be notified through the callback.
   *     <br>- Other values: The migration task failed to start. Troubleshoot based on the error code.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 31100110 - Call failed due to system error.
   * @throws { BusinessError } 31100111 - Data migration is in progress.
   * @syscap SystemCapability.Global.FontManager
   * @systemapi
   * @since 23 dynamic&static
   */
  function dataMigration(callback: DataMigrationCallback): int;

  /**
   * Describes the progress information of data migration, including the progress percentage and estimated remaining 
   * time. This API is the parameter type of the `onProgress` API in the data migration callback.
   *
   * @syscap SystemCapability.Global.FontManager
   * @systemapi
   * @since 23 dynamic&static
   */
  interface DataMigrationProgress {
    /**
     * Estimated remaining time, which may vary depending on factors such as device performance, file size, and system 
     * load. 
     * The value must be a non-negative integer, with a minimum value of 0. 
     * The unit is seconds.
     *
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    timeRemaining: int;

    /**
     * Data migration progress percentage, which is calculated based on the number or size of migrated font files and 
     * may not increase evenly. When `progressPercentage` reaches `100`, the migration task is about to complete and 
     * the `onResult` callback is about to be invoked. 
     * The value range is [0, 100].
     *
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    progressPercentage: int;
  }

  /**
   * Callback API type used during data migration, defining the callback methods for the data migration process. You 
   * must implement all methods of this API to receive heartbeat notifications, progress updates, and the final result 
   * during migration.
   *
   * @syscap SystemCapability.Global.FontManager
   * @systemapi
   * @since 23 dynamic&static
   */
  interface DataMigrationCallback {
    /**
     * Callback function that is periodically invoked during the execution of the data migration task to notify you 
     * that the migration task is still running normally. You can use it to update UI prompts or execute other business 
     * logic.
     *
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    onHeartBeat(): void;

    /**
     * Callback function that is periodically invoked during the execution of the data migration task to notify you of 
     * the current migration progress and estimated remaining time. This callback can be used when progress bars, 
     * remaining time, and other information need to be displayed on the UI.
     *
     * @param { DataMigrationProgress } progress - Data migration progress.
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    onProgress(progress : DataMigrationProgress): void;

    /**
     * Callback function that is invoked after the data migration task is completed (whether successful or failed) to 
     * notify you of the final migration result. This callback can be used when subsequent operations (such as updating 
     * the UI, logging, notifying users, etc.) need to be performed after migration is complete.
     *
     * @param { int } result - Data migration result.
     *     <br>**0**: Data migration succeeded.
     *     <br>**1**: No data migration is required.
     *     <br>**2**: Failed to obtain the user ID.
     *     <br>**3**: Failed to check the directory.
     *     <br>**4**: Failed to initialize the cache directory.
     *     <br>**5**: Failed to open the source file.
     *     <br>**6**: Failed to copy the file.
     *     <br>**7**: Failed to rename the file.
     *     <br>**8**: Failed to delete the file.
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    onResult(result : int): void;
  }

  /**
   * An enumeration representing the scope of font application.
   *
   * @syscap SystemCapability.Global.FontManager
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  enum FontScope {  
    /**
     * Application-level font. The lifecycle of the font follows that of the application. When the application exits or
     * the font service abnormally terminates, the installed font files will be automatically cleaned up or uninstalled. 
     * You must first call [onFontObserver]{@link onFontObserver} to register a listener before installing the font.
     * 
     * @syscap SystemCapability.Global.FontManager
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    APP = 0,

    /**
     * Session-level font. The lifecycle of a font is not bound to that of the application. When the device is restarted
     * or the current user logs out (in multi-user scenarios), the installed font file will be automatically deleted or uninstalled.
     * 
     * @syscap SystemCapability.Global.FontManager
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    SESSION = 1
  }

  /**
   * Font service status listener. 
   *
   * @syscap SystemCapability.Global.FontManager
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  interface FontClientObserver {  
    /**
     * Callback function called when the font service exits abnormally.
     * Your app can perform operations such as resource cleanup or re-registration in this callback function.
     *
     * @syscap SystemCapability.Global.FontManager
     * @stagemodelonly
     * @since 26.0.1 dynamic&static
     */
    onServiceDied(): void;
  }

  /**
   * Install the font file in the specified path as an application-level or session-level font. This API uses a promise to return
   * the result.
   *
   * > **NOTE**
   * > - When installing an application-level font, you need to call the [onFontObserver]{@link onFontObserver} API to
   *     register a listener for font service status changes.
   * > - After the font is installed, the application can use the font by name. The same font path cannot be installed repeatedly.
   * > - The maximum number of font files that can be installed on the PC/2in1 is 800, while other devices support a maximum of 200 font files.
   * 
   * @permission ohos.permission.UPDATE_SCOPE_FONT
   * @param { string } url - Path to the font file to be installed. Only .ttf, .ttc or .otf font files are supported.
   * @param { FontScope } scope - Font scope.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 31100101 - The font does not exist.
   * @throws { BusinessError } 31100102 - The font is not supported.
   * @throws { BusinessError } 31100103 - Failed to copy the font file.
   * @throws { BusinessError } 31100104 - The font file is installed.
   * @throws { BusinessError } 31100105 - Exceeded the maximum number of installed files.
   * @throws { BusinessError } 31100110 - Call failed due to system error.
   * @throws { BusinessError } 31100115 - The font observer is not registered.
   * @syscap SystemCapability.Global.FontManager
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function installScopeFont(url: string, scope: FontScope): Promise<void>;

  /**
   * Uninstall installed application-level or session-level fonts based on the font path. This API uses a promise to return the result.
   *
   * @permission ohos.permission.UPDATE_SCOPE_FONT
   * @param { string } url - URL of the font to be uninstalled.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 31100108 - Failed to delete the font file.
   * @throws { BusinessError } 31100110 - Call failed due to system error.
   * @throws { BusinessError } 31100112 - The scope font is not found.
   * @syscap SystemCapability.Global.FontManager
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function uninstallScopeFont(url: string): Promise<void>;

  /**
   * Queries the scope of a font by URL. This API uses a promise to return the result.
   *
   * @permission ohos.permission.UPDATE_SCOPE_FONT
   * @param { string } url - URL of the font to query.
   * @returns { Promise<FontScope> } Promise used to return the query result.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 31100110 - Call failed due to system error.
   * @throws { BusinessError } 31100112 - The scope font is not found.
   * @syscap SystemCapability.Global.FontManager
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function getFontScope(url: string): Promise<FontScope>;

  /**
   * Registers a listener for monitoring the font service status. 
   *
   * > **NOTE**
   * > - Each application can register only one font service status change listener. Repeated registration will result in an error. 
   *     Additionally, a maximum of five applications per user can be registered simultaneously; otherwise, an error will occur.
   * 
   * @permission ohos.permission.UPDATE_SCOPE_FONT
   * @param { FontClientObserver } observer - Listener for the font service status.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 31100110 - Call failed due to system error.
   * @throws { BusinessError } 31100113 - The font observer is already registered.
   * @throws { BusinessError } 31100114 - The maximum number of font observers has been reached.
   * @syscap SystemCapability.Global.FontManager
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function onFontObserver(observer: FontClientObserver): void;

  /**
   * Unregisters the font service status listener.
   *
   * @permission ohos.permission.UPDATE_SCOPE_FONT
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 31100110 - Call failed due to system error.
   * @throws { BusinessError } 31100115 - The font observer is not registered.
   * @syscap SystemCapability.Global.FontManager
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function offFontObserver(): void;
}
export default fontManager;