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
 * @kit LocalizationKit
 */

/**
 * This module provides system applications with the capabilities to install and uninstall third-party fonts and 
 * migrate font data. Specifically:
 * <br>- Installing font files from a specified path (.ttf and .ttc formats are supported).
 * <br>- Uninstalling installed fonts by font name.
 * <br>- Starting a font data migration task during device upgrades, and providing callbacks for migration progress and 
 * results.
 *
 * @syscap SystemCapability.Global.FontManager
 * @systemapi
 * @since 19 dynamic
 * @since 23 static
 */
declare namespace fontManager {
  /**
   * Installs a font file from a specified path into the system font library. This API uses a promise to return the 
   * result. 
   * After successful installation, applications can use the font by its font name.
   *
   * @permission ohos.permission.UPDATE_FONT
   * @param { string } path - Path to the font file to be installed. Only .ttf and .ttc font files are supported.
   * @returns { Promise<int> } Promise used to return the installation result.
   *     <br>- The value **0** indicates that the installation is successful and the font has been added to the system 
   *     font library.
   *     <br>- Any other value indicates that the installation failed. Troubleshoot based on the error code.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system application.
   * @throws { BusinessError } 31100101 - Font does not exist.
   * @throws { BusinessError } 31100102 - Font is not supported.
   * @throws { BusinessError } 31100103 - Font file copy failed.
   * @throws { BusinessError } 31100104 - Font file installed.
   * @throws { BusinessError } 31100105 - Exceeded maximum number of installed files.
   * @throws { BusinessError } 31100106 - Other error.
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
   * @param { string } fullName - Name of the font to be uninstalled. You can open the .ttf or .ttc font file to obtain 
   *     the name.
   *     <br>The font name is case-sensitive. Ensure that it exactly matches the actual font name.
   * @returns { Promise<int> } Promise used to return the uninstallation result.
   *     <br>- The value **0** indicates that the uninstallation is successful and the font has been removed from the 
   *     system font library.
   *     <br>- Any other value indicates that the uninstallation failed. Troubleshoot based on the error code.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system application.
   * @throws { BusinessError } 31100107 - Font file does not exist.
   * @throws { BusinessError } 31100108 - Font file delete error.
   * @throws { BusinessError } 31100109 - Other error.
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
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system application.
   * @throws { BusinessError } 31100110 Call failed due to system error.
   * @throws { BusinessError } 31100111 Data migration is in progress.
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
}
export default fontManager;