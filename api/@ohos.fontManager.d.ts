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
 * The **fontManager** module provides APIs for system applications to install and uninstall third-party fonts.
 *
 * @syscap SystemCapability.Global.FontManager
 * @systemapi
 * @since 19 dynamic
 * @since 23 static
 */
declare namespace fontManager {
  /**
   * Installs a font in the specified path. This API uses a promise to return the result.
   *
   * @permission ohos.permission.UPDATE_FONT
   * @param { string } path - Path of the font file to be installed.
   * @returns { Promise<int> } Promise used to return the result. The value **0** indicates that the installation is
   *     successful, and any other value indicates that the installation has failed.
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
   * Uninstalls a font by name. This API uses a promise to return the result.
   *
   * @permission ohos.permission.UPDATE_FONT
   * @param { string } fullName - Name of the font to be uninstalled. You can obtain the font name by opening the
   *     **.ttf** or **.ttc** font file.
   * @returns { Promise<int> } Promise used to return the result. The value **0** indicates that the uninstallation is
   *     successful, and any other value indicates that the uninstallation has failed.
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
   * Starts a migration task during device upgrade.
   *
   * @permission ohos.permission.UPDATE_FONT
   * @param { DataMigrationCallback } callback - Callback function for data migration.
   * @returns { int } Result of starting the data migration task. The value **0** indicates that the process is started
   *     successfully. Otherwise, the process fails to be started.
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
   * Describes the data migration progress.
   *
   * @syscap SystemCapability.Global.FontManager
   * @systemapi
   * @since 23 dynamic&static
   */
  interface DataMigrationProgress {  
    /**
     * Estimated remaining time, in seconds.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    timeRemaining: int;

    /**
     * Data migration progress, in percentage. The value ranges from 0 to 100.
     * The value range is all integers.
     *
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    progressPercentage: int;
  }

  /**
   * Callback type used during data migration.
   *
   * @syscap SystemCapability.Global.FontManager
   * @systemapi
   * @since 23 dynamic&static
   */
  interface DataMigrationCallback {  
    /**
     * Callback function used to return the heartbeat callback.
     *
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    onHeartBeat(): void;

    /**
     * Callback used to return the data migration progress.
     *
     * @param { DataMigrationProgress } progress - Data migration progress.
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    onProgress(progress : DataMigrationProgress): void;

    /**
     * Callback used to return the data migration result.
     *
     * @param { int } result - Data migration result.
     *     <br>**0**: Data migration is successful.
     *     <br>**1**: No data migration required.
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