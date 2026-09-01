/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit CoreFileKit
 */
import type BackupExtensionContext from './@ohos.file.BackupExtensionContext';

/**
 * 恢复时所需要的版本信息，开发者可根据配置的版本号来判断本次恢复时的应用版本数据。
 *
 * @interface BundleVersion
 * @syscap SystemCapability.FileManagement.StorageService.Backup
 * @StageModelOnly
 * @since 10 dynamic
 * @since 23 static
 */
export interface BundleVersion {
  /**
   * 应用的版本号。
   *
   * @type { long }
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  code: long;

  /**
   * 应用的版本名称。
   *
   * @type { string }
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  name: string;
}

/**
 * 备份恢复扩展能力。应用可通过该类实现自定义备份、恢复、进度上报和安全退出逻辑。
 *
 * @syscap SystemCapability.FileManagement.StorageService.Backup
 * @StageModelOnly
 * @since 10 dynamic
 * @since 23 static
 */
declare class BackupExtensionAbility {
  /**
   * BackupExtensionAbility的上下文环境。
   *
   * @type { ExtensionContext }
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 11
   */
    /**
   * BackupExtensionAbility的上下文环境，继承自ExtensionContext。
   *
   * @type { BackupExtensionContext }
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 12 dynamic
   * @since 23 static
   */
  context: BackupExtensionContext;

  /**
   * Extension生命周期回调，在执行备份数据时回调，由开发者实现自定义备份数据处理。
   *
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  onBackup(): void;

  /**
   * 备份恢复框架在备份时向应用传递扩展参数，由开发者实现自定义备份处理。
   *
   * @param { string } backupInfo 备份时框架传递给应用的扩展信息，参数为JSON格式字符串。
   * @returns { string | Promise<string> } 应用执行自定义备份操作的信息，返回值为JSON格式字符串，
   * 包含type、errorCode和errorInfo字段，支持同步返回或使用Promise异步返回。
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 12 dynamic
   * @since 23 static
   */
  onBackupEx(backupInfo: string): string | Promise<string>;

  /**
   * Extension生命周期回调，在执行恢复数据时回调，由开发者提供扩展的恢复数据操作。
   *
   * @param { BundleVersion } bundleVersion 恢复时应用数据所在的版本信息。
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  onRestore(bundleVersion: BundleVersion): void;

  /**
   * Extension生命周期回调，在执行恢复数据时回调，由开发者实现自定义恢复数据处理。
   *
   * @param { BundleVersion } bundleVersion 恢复时应用数据所在的版本信息。
   * @param { string } restoreInfo 恢复时框架传递给应用的扩展信息，参数为JSON格式字符串。
   * @returns { string | Promise<string> } 应用执行自定义恢复操作的信息，返回值为JSON格式字符串，
   * 包含type、errorCode和errorInfo字段，支持同步返回或使用Promise异步返回。
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 12 dynamic
   * @since 23 static
   */
  onRestoreEx(bundleVersion: BundleVersion, restoreInfo: string): string | Promise<string>;

  /**
    * 在调用方查询应用数据时执行，由应用返回自定义备份信息。
    *
    * @returns { string } 应用自定义的备份信息，具体格式和字段由应用自行定义。
    * @syscap SystemCapability.FileManagement.StorageService.Backup
    * @systemapi
    * @StageModelOnly
    * @since 12 dynamic
    * @since 23 static
    */
  getBackupInfo(): string;

  /**
    * 返回应用执行备份或恢复业务的进度信息。
    * 
    * @returns { string } 应用处理数据的进度信息，返回值为JSON格式字符串。
    * @syscap SystemCapability.FileManagement.StorageService.Backup
    * @StageModelOnly
    * @since 12 dynamic
    * @since 23 static
    */
  onProcess(): string;
  
  /**
   * 备份恢复框架安全退出回调，应用可在备份或恢复完成后清理临时文件。
   *
   * @param { int } scenario 当前操作场景，值为1表示备份，值为2表示恢复。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 20 dynamic
   * @since 23 static
   */
  onRelease(scenario: int): Promise<void>;

  /**
   * 在应用备份阶段，调用方获取应用自定义兼容性信息时执行，由应用实现返回。
   *
   * @param { string } extInfo 传递给应用的额外信息，由应用自行处理。
   * @returns { Promise<string> } Promise对象，返回备份过程中应用自定义的兼容性信息。
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @StageModelOnly
   * @since 20 dynamic
   * @since 23 static
   */
  getBackupCompatibilityInfo(extInfo: string) : Promise<string>;

  /**
   * 在应用恢复阶段，调用方获取应用自定义兼容性信息时执行，由应用实现返回。
   *
   * @param { string } extInfo 传递给应用的额外信息，由应用自行处理。
   * @returns { Promise<string> } Promise对象，返回恢复过程中应用自定义的兼容性信息。
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @systemapi
   * @StageModelOnly
   * @since 20 dynamic
   * @since 23 static
   */
  getRestoreCompatibilityInfo(extInfo: string) : Promise<string>;
}

export default BackupExtensionAbility;
