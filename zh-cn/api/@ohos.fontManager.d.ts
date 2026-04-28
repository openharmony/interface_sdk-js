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
 * 字体管理模块，提供给系统应用安装和卸载三方字体的能力。
 *
 * @syscap SystemCapability.Global.FontManager
 * @systemapi
 * @since 19 dynamic
 * @since 23 static
 */
declare namespace fontManager {
  /**
   * 安装指定路径下的字体，使用promise异步回调。
   *
   * @permission ohos.permission.UPDATE_FONT
   * @param { string } path - 安装字体文件路径。
   * @returns { Promise<int> } 返回安装结果。返回为0表示安装成功，否则安装失败。
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
   * 卸载指定名称的字体，使用promise异步回调。
   *
   * @permission ohos.permission.UPDATE_FONT
   * @param { string } fullName - 需要卸载的字体名称，字体名称可通过打开.ttf或.ttc字体文件获取。
   * @returns { Promise<int> } 返回卸载结果。返回为0表示卸载成功，否则卸载失败。
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
   * 设备升级时使用的数据迁移接口，用于拉起迁移任务。
   *
   * @permission ohos.permission.UPDATE_FONT
   * @param { DataMigrationCallback } callback - 数据迁移的回调函数。
   * @returns { int } 返回拉起数据迁移任务结果。返回为0表示拉起成功，否则拉起失败。
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
   * 描述数据迁移的进度信息。
   *
   * @syscap SystemCapability.Global.FontManager
   * @systemapi
   * @since 23 dynamic&static
   */
  interface DataMigrationProgress {  
    /**
     * 表示预计剩余时间，单位：秒。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    timeRemaining: int;

    /**
     * 表示数据迁移百分比进展，取值：0-100。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    progressPercentage: int;
  }

  /**
   * 数据迁移时使用的回调类型。
   *
   * @syscap SystemCapability.Global.FontManager
   * @systemapi
   * @since 23 dynamic&static
   */
  interface DataMigrationCallback {  
    /**
     * 回调函数，用于返回心跳回调。
     *
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    onHeartBeat(): void;

    /**
     * 回调函数，用于返回数据迁移进度。
     *
     * @param { DataMigrationProgress } progress - 数据迁移进度信息。
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    onProgress(progress : DataMigrationProgress): void;

    /**
     * 回调函数，用于返回数据迁移的结果。
     *
     * @param { int } result - 数据迁移结果。
     *     <br>**0**: 数据迁移成功。
     *     <br>**1**: 无需进行数据迁移。
     *     <br>**2**: 获取用户ID失败。
     *     <br>**3**: 检查目录失败。
     *     <br>**4**: 初始化缓存目录失败。
     *     <br>**5**: 打开源文件失败。
     *     <br>**6**: 拷贝失败。
     *     <br>**7**: 文件重命名失败。
     *     <br>**8**: 文件删除失败。
     * @syscap SystemCapability.Global.FontManager
     * @systemapi
     * @since 23 dynamic&static
     */
    onResult(result : int): void;
  }
}
export default fontManager;