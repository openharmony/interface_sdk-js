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
 * 本模块为系统应用提供第三方字体的安装、卸载以及字体数据迁移能力。具体为：
 * - 安装指定路径的字体文件（支持.ttf、.ttc格式）。
 * - 根据字体名称卸载已安装的字体。
 * - 在设备升级期间启动字体数据迁移任务，并提供迁移进度和结果回调。
 *
 * @syscap SystemCapability.Global.FontManager
 * @systemapi
 * @since 19 dynamic
 * @since 23 static
 */
declare namespace fontManager {
  /**
   * 将指定路径下的字体文件安装到系统字体库中。使用Promise异步回调。
   * 安装成功后，应用可以通过字体名称使用该字体。
   *
   * @permission ohos.permission.UPDATE_FONT
   * @param { string } path - 待安装的字体文件路径，仅支持.ttf和.ttc格式的字体文件。
   * @returns { Promise<int> } Promise对象，返回安装结果。
   *     <br>- 返回0：安装成功，字体已添加到系统字体库。
   *     <br>- 返回其他值：安装失败，请根据错误码排查原因。
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
   * 根据字体名称从系统字体库中卸载已安装的字体文件。使用Promise异步回调。
   *
   * @permission ohos.permission.UPDATE_FONT
   * @param { string } fullName - 需要卸载的字体名称，可通过打开.ttf或.ttc字体文件获取。
   *     <br>字体名称区分大小写，请确保与实际字体名称完全一致。
   * @returns { Promise<int> } Promise对象，返回卸载结果。
   *     <br>- 返回0：卸载成功，字体已从系统字体库中移除。
   *     <br>- 返回其他值：卸载失败，请根据错误码排查原因。
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
   * 设备升级时使用的数据迁移接口，用于启动迁移任务，通过回调函数实时反馈迁移进度和结果。
   *
   * @permission ohos.permission.UPDATE_FONT
   * @param { DataMigrationCallback } callback - 数据迁移的回调函数。
   * @returns { int } 迁移任务启动结果。
   *     <br>- 0：迁移任务启动成功，迁移任务将在后台执行并通过回调通知进度和结果。
   *     <br>- 其他值：迁移任务启动失败，请根据错误码排查原因。
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
   * 描述数据迁移的进度信息，包含进度百分比和预估剩余时间。该接口为数据迁移回调onProgress方法的参数类型。
   *
   * @syscap SystemCapability.Global.FontManager
   * @systemapi
   * @since 23 dynamic&static
   */
  interface DataMigrationProgress {
    /**
     * 预计剩余时间，可能因设备性能、文件大小、系统负载等因素而有所差异。
     * 取值范围为非负整数，最小值为0。
     * 单位为s。
     *
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    timeRemaining: int;

    /**
     * 数据迁移百分比进度，进度值根据已迁移的字体文件数量或大小计算，可能不是均匀增长。当progressPercentage为100时，迁移任务即将完成，onResult回调即将被调用。
     * 取值范围为[0, 100]。
     *
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    progressPercentage: int;
  }

  /**
   * 数据迁移时使用的回调接口类型，定义了数据迁移过程中的回调方法。开发者需实现该接口的所有方法，以接收迁移过程中的心跳通知、进度更新和最终结果。
   *
   * @syscap SystemCapability.Global.FontManager
   * @systemapi
   * @since 23 dynamic&static
   */
  interface DataMigrationCallback {
    /**
     * 回调函数，在数据迁移任务执行期间定期调用，用于通知开发者迁移任务仍在正常运行，开发者可据此更新UI提示或执行其他业务逻辑。
     *
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    onHeartBeat(): void;

    /**
     * 回调函数，在数据迁移任务执行过程中定期调用，用于通知开发者当前的迁移进度和预估剩余时间。当需要在UI上展示进度条、剩余时间等信息时使用此回调。
     *
     * @param { DataMigrationProgress } progress - 数据迁移进度信息。
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    onProgress(progress : DataMigrationProgress): void;

    /**
     * 回调函数，在数据迁移任务完成（无论成功或失败）后调用，用于通知开发者迁移的最终结果。当需要在迁移完成后执行后续操作（如更新UI、记录日志、通知用户等）时使用此回调。
     *
     * @param { int } result - 数据迁移结果。
     *     <br>0：数据迁移成功。
     *     <br>1：无需进行数据迁移。
     *     <br>2：获取用户ID失败。
     *     <br>3：检查目录失败。
     *     <br>4：初始化缓存目录失败。
     *     <br>5：打开源文件失败。
     *     <br>6：拷贝失败。
     *     <br>7：文件重命名失败。
     *     <br>8：文件删除失败。
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    onResult(result : int): void;
  }
}
export default fontManager;