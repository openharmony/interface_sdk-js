/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
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

import ExtensionContext from './application/ExtensionContext';

/**
 * BackupExtensionAbility的上下文环境，继承自ExtensionContext。
 * 用于在备份恢复过程中获取EL1（设备级加密区）或EL2（用户级加密区）对应的临时目录。
 *
 * @extends ExtensionContext
 * @syscap SystemCapability.FileManagement.StorageService.Backup
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
declare class BackupExtensionContext extends ExtensionContext {
  /**
   * 获取备份恢复时的临时路径。该路径仅允许在备份恢复过程中临时使用，目前仅支持EL1、EL2路径。
   *
   * @type { string }
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @StageModelOnly
   * @since 12 dynamic
   */
   readonly backupDir: string;

  /**
   * 获取备份恢复时的临时路径。该路径仅允许在备份恢复过程中临时使用，目前仅支持EL1、EL2路径。
   *
   * @returns { string } 备份恢复时的临时路径。
   * @syscap SystemCapability.FileManagement.StorageService.Backup
   * @stagemodelonly
   * @since 23 static
   */
    get backupDir(): string;
}
export default BackupExtensionContext;