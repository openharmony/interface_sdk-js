/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * 升级范围：升级整个系统，包括内置资源和预置应用，不包括三方应用。
 * 
 * 升级类型：SD卡升级、在线升级、恢复出厂升级。
 * 
 * - SD卡升级依赖升级包和SD卡安装。
 * - 在线升级依赖设备厂商部署的用于管理升级包的服务器。服务器由设备厂商部署，IP由调用者传入，请求的request接口是固定的，由设备厂商开发。
 * - 恢复出厂升级对象提供恢复出厂相关接口。
 * 
 * > **说明：**
 * >
 * > 本模块接口为系统接口。
 *
 * @syscap SystemCapability.Update.UpdateService
 * @systemapi hide for inner use.
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace update {
  /**
   * 获取在线升级对象。
   *
   * @param { UpgradeInfo } upgradeInfo - 升级对象信息。
   * @returns { Updater } 升级对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getOnlineUpdater(upgradeInfo: UpgradeInfo): Updater;

  /**
   * 获取恢复出厂设置对象。
   *
   * @returns { Restorer } 恢复出厂对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getRestorer(): Restorer;

  /**
   * 获取本地升级对象。
   *
   * @returns { LocalUpdater } 本地升级对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getLocalUpdater(): LocalUpdater;

  /**
   *  提供系统在线更新功能的工具类。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface Updater {
    /**
     * 检查新版本信息。使用callback异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<CheckResult> } callback - 回调函数，返回搜包结果对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    checkNewVersion(callback: AsyncCallback<CheckResult>): void;

    /**
     * 检查新版本信息。使用Promise异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<CheckResult> } Promise对象，返回搜包结果对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    checkNewVersion(): Promise<CheckResult>;

    /**
     * 获取新版本信息。使用callback异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<NewVersionInfo> } callback - 回调函数，返回新版本信息对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getNewVersionInfo(callback: AsyncCallback<NewVersionInfo>): void;

    /**
     * 获取新版本信息。使用Promise异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<NewVersionInfo> } Promise对象，返回新版本信息对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getNewVersionInfo(): Promise<NewVersionInfo>;

    /**
     * 获取新版本描述文件。使用callback异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - 版本摘要信息。
     * @param { DescriptionOptions } descriptionOptions - 描述文件选项。
     * @param { AsyncCallback<Array<ComponentDescription>> } callback - 回调函数，返回新版本描述文件。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getNewVersionDescription(
      versionDigestInfo: VersionDigestInfo,
      descriptionOptions: DescriptionOptions,
      callback: AsyncCallback<Array<ComponentDescription>>
    ): void;

    /**
     * 获取新版本描述文件。使用Promise异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - 版本摘要信息。
     * @param { DescriptionOptions } descriptionOptions - 描述文件选项。
     * @returns { Promise<Array<ComponentDescription>> } Promise对象，返回新版本描述文件。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getNewVersionDescription(
      versionDigestInfo: VersionDigestInfo,
      descriptionOptions: DescriptionOptions
    ): Promise<Array<ComponentDescription>>;

    /**
     * 获取当前版本信息。使用callback异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<CurrentVersionInfo> } callback - 回调函数，返回当前版本信息对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentVersionInfo(callback: AsyncCallback<CurrentVersionInfo>): void;

    /**
     * 获取当前版本信息。使用Promise异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<CurrentVersionInfo> } Promise对象，返回当前版本信息对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentVersionInfo(): Promise<CurrentVersionInfo>;

    /**
     * 获取当前版本描述文件。使用callback异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { DescriptionOptions } descriptionOptions - 描述文件选项。
     * @param { AsyncCallback<Array<ComponentDescription>> } callback - 回调函数，返回当前版本描述文件。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentVersionDescription(
      descriptionOptions: DescriptionOptions,
      callback: AsyncCallback<Array<ComponentDescription>>
    ): void;

    /**
     * 获取当前版本描述文件。使用Promise异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { DescriptionOptions } descriptionOptions - 描述文件选项。
     * @returns { Promise<Array<ComponentDescription>> } Promise对象，返回当前版本描述文件。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getCurrentVersionDescription(descriptionOptions: DescriptionOptions): Promise<Array<ComponentDescription>>;

    /**
     * 获取升级任务信息。使用callback异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<TaskInfo> } callback - 回调函数，返回升级任务信息对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getTaskInfo(callback: AsyncCallback<TaskInfo>): void;

    /**
     * 获取升级任务信息。使用Promise异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<TaskInfo> } Promise对象，返回任务信息对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getTaskInfo(): Promise<TaskInfo>;

    /**
     * 下载新版本。使用callback异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - 版本摘要信息。
     * @param { DownloadOptions } downloadOptions - 下载选项。
     * @param { AsyncCallback<void> } callback - 回调函数。当下载成功时，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    download(
      versionDigestInfo: VersionDigestInfo,
      downloadOptions: DownloadOptions,
      callback: AsyncCallback<void>
    ): void;

    /**
     * 下载新版本。使用Promise异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - 版本摘要信息。
     * @param { DownloadOptions } downloadOptions - 下载选项。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    download(versionDigestInfo: VersionDigestInfo, downloadOptions: DownloadOptions): Promise<void>;

    /**
     * 恢复下载新版本。使用callback异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - 版本摘要信息。
     * @param { ResumeDownloadOptions } resumeDownloadOptions - 恢复下载选项。
     * @param { AsyncCallback<void> } callback - 回调函数。当恢复下载成功时，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    resumeDownload(
      versionDigestInfo: VersionDigestInfo,
      resumeDownloadOptions: ResumeDownloadOptions,
      callback: AsyncCallback<void>
    ): void;

    /**
     * 恢复下载新版本。使用Promise异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - 版本摘要信息。
     * @param { ResumeDownloadOptions } resumeDownloadOptions - 恢复下载选项。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    resumeDownload(versionDigestInfo: VersionDigestInfo, resumeDownloadOptions: ResumeDownloadOptions): Promise<void>;

    /**
     * 暂停下载新版本。使用callback异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - 版本摘要信息。
     * @param { PauseDownloadOptions } pauseDownloadOptions - 暂停下载选项。
     * @param { AsyncCallback<void> } callback - 回调函数。当暂停下载成功时，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    pauseDownload(
      versionDigestInfo: VersionDigestInfo,
      pauseDownloadOptions: PauseDownloadOptions,
      callback: AsyncCallback<void>
    ): void;

    /**
     * 暂停下载新版本。使用Promise异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - 版本摘要信息。
     * @param { PauseDownloadOptions } pauseDownloadOptions - 暂停下载选项。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    pauseDownload(versionDigestInfo: VersionDigestInfo, pauseDownloadOptions: PauseDownloadOptions): Promise<void>;

    /**
     * 升级新版本。使用callback异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - 版本摘要信息。
     * @param { UpgradeOptions } upgradeOptions - 更新选项。
     * @param { AsyncCallback<void> } callback - 回调函数。当升级执行成功时，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    upgrade(versionDigestInfo: VersionDigestInfo, upgradeOptions: UpgradeOptions, callback: AsyncCallback<void>): void;

    /**
     * 升级新版本。使用Promise异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - 版本摘要信息。
     * @param { UpgradeOptions } upgradeOptions - 更新选项。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    upgrade(versionDigestInfo: VersionDigestInfo, upgradeOptions: UpgradeOptions): Promise<void>;

    /**
     * 清除异常状态，版本下载、安装异常时，清理升级包文件及升级状态。使用callback异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - 版本摘要信息。
     * @param { ClearOptions } clearOptions - 清除选项。
     * @param { AsyncCallback<void> } callback - 回调函数。当清除异常成功时，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    clearError(versionDigestInfo: VersionDigestInfo, clearOptions: ClearOptions, callback: AsyncCallback<void>): void;

    /**
     * 清除异常状态，版本下载、安装异常时，清理升级包文件及升级状态。使用Promise异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { VersionDigestInfo } versionDigestInfo - 版本摘要信息。
     * @param { ClearOptions } clearOptions - 更新选项。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    clearError(versionDigestInfo: VersionDigestInfo, clearOptions: ClearOptions): Promise<void>;

    /**
     * 获取升级策略信息。使用callback异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<UpgradePolicy> } callback - 回调函数，返回升级策略信息对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getUpgradePolicy(callback: AsyncCallback<UpgradePolicy>): void;

    /**
     * 获取升级策略。通过promise方式作为异步方法。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<UpgradePolicy> } Promise对象，返回升级策略信息对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    getUpgradePolicy(): Promise<UpgradePolicy>;

    /**
     * 设置升级策略。使用callback异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { UpgradePolicy } policy - 升级策略。
     * @param { AsyncCallback<void> } callback - 回调函数，返回设置结果对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    setUpgradePolicy(policy: UpgradePolicy, callback: AsyncCallback<void>): void;

    /**
     * 设置升级策略。使用Promise异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { UpgradePolicy } policy - 升级策略。
     * @returns { Promise<void> } Promise对象。 无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    setUpgradePolicy(policy: UpgradePolicy): Promise<void>;

    /**
     * 终止升级。使用callback异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { AsyncCallback<void> } callback - 回调函数。当清除升级缓存成功时，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    terminateUpgrade(callback: AsyncCallback<void>): void;

    /**
     * 终止升级。使用Promise异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    terminateUpgrade(): Promise<void>;

    /**
     * 注册事件监听。使用callback异步回调。
     *
     * @param { EventClassifyInfo } eventClassifyInfo - 事件信息。
     * @param { UpgradeTaskCallback } taskCallback - 事件回调。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    on(eventClassifyInfo: EventClassifyInfo, taskCallback: UpgradeTaskCallback): void;

    /**
     * 取消注册事件监听。使用callback异步回调。
     *
     * @param { EventClassifyInfo } eventClassifyInfo - 事件信息。
     * @param { UpgradeTaskCallback } taskCallback - 事件回调。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    off(eventClassifyInfo: EventClassifyInfo, taskCallback?: UpgradeTaskCallback): void;
  }

  /**
   * 提供设备恢复出厂设置功能的工具类。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface Restorer {
    /**
     * 清除用户数据分区。使用callback异步回调。
     *
     * @permission ohos.permission.FACTORY_RESET
     * @param { AsyncCallback<void> } callback - 回调函数。当恢复出厂执行失败时，err为错误对象，有回调；执行成功时，err为undefined，无回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    factoryReset(callback: AsyncCallback<void>): void;

    /**
     * 清除用户数据分区。使用Promise异步回调。
     *
     * @permission ohos.permission.FACTORY_RESET
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。当恢复出厂执行失败时，有回调；执行成功无回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    factoryReset(): Promise<void>;

    /**
     * 清除用户数据分区，同步清除文件秘钥。使用Promise异步回调。
     *
     * @permission ohos.permission.FORCE_FACTORY_RESET
     * @returns { Promise<void> } Promise对象。无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 23 dynamic&static
     */
    forceFactoryReset(): Promise<void>;

    /**
     * 通过覆写等方式，深度清除用户数据分区、操作系统分区。使用 Promise 异步回调。
     *
     * @permission ohos.permission.FACTORY_RESET
     * @param { FactoryResetStrategy } factoryResetStrategy - 恢复出厂设置策略。
     * @returns { Promise<void> } Promise 对象。无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deepFactoryReset(factoryResetStrategy: FactoryResetStrategy): Promise<void>;

    /**
     * 获取深度恢复出厂设置信息。使用 Promise 异步回调。
     *
     * @permission ohos.permission.FACTORY_RESET
     * @param { FactoryResetStrategy } factoryResetStrategy - 恢复出厂设置策略。
     * @returns { Promise<FactoryResetInfo> } Promise对象，返回深度恢复出厂设置信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDeepFactoryResetInfo(factoryResetStrategy: FactoryResetStrategy): Promise<FactoryResetInfo>;
  }

  /**
   * 提供本地固件更新功能的工具类。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface LocalUpdater {
    /**
     * 校验升级包。使用callback异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { UpgradeFile } upgradeFile - 升级文件。
     * @param { string } certsFile - 证书文件路径。
     * @param { AsyncCallback<void> } callback - 回调函数，返回升级包校验结果对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    verifyUpgradePackage(upgradeFile: UpgradeFile, certsFile: string, callback: AsyncCallback<void>): void;

    /**
     * 校验升级包。使用Promise异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { UpgradeFile } upgradeFile - 升级文件。
     * @param { string } certsFile - 证书文件路径。
     * @returns { Promise<void> } Promise对象，返回升级包校验结果对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    verifyUpgradePackage(upgradeFile: UpgradeFile, certsFile: string): Promise<void>;

    /**
     * 安装升级包。使用callback异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { Array<UpgradeFile> } upgradeFiles - 升级文件。
     * @param { AsyncCallback<void> } callback - 回调函数。当安装升级包执行成功时，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    applyNewVersion(upgradeFiles: Array<UpgradeFile>, callback: AsyncCallback<void>): void;

    /**
     * 安装升级包。使用Promise异步回调。
     *
     * @permission ohos.permission.UPDATE_SYSTEM
     * @param { Array<UpgradeFile> } upgradeFiles - 升级文件。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter verification failed.
     * @throws { BusinessError } 11500104 - IPC error.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    applyNewVersion(upgradeFiles: Array<UpgradeFile>): Promise<void>;

    /**
     * 注册事件监听。使用callback异步回调。
     *
     * @param { EventClassifyInfo } eventClassifyInfo - 事件信息。
     * @param { UpgradeTaskCallback } taskCallback - 事件回调。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    on(eventClassifyInfo: EventClassifyInfo, taskCallback: UpgradeTaskCallback): void;

    /**
     * 取消注册事件监听。使用callback异步回调。
     *
     * @param { EventClassifyInfo } eventClassifyInfo - 事件信息。
     * @param { UpgradeTaskCallback } taskCallback - 事件回调。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    off(eventClassifyInfo: EventClassifyInfo, taskCallback?: UpgradeTaskCallback): void;
  }

  /**
   * 升级信息。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface UpgradeInfo {
    /**
     * 调用方包名。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    upgradeApp: string;

    /**
     * 升级业务类型。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    businessType: BusinessType;
  }

  /**
   * 升级业务类型。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface BusinessType {
    /**
     * 供应商/厂家。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    vendor: BusinessVendor;

    /**
     * 升级类型。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    subType: BusinessSubType;
  }

  /**
   * 搜包结果。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface CheckResult {
    /**
     * 是否有新版本。
     * 
     * true表示有新版本，false表示没有新版本。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    isExistNewVersion: boolean;

    /**
     * 新版本数据。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    newVersionInfo: NewVersionInfo;
  }

  /**
   * 新版本数据。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface NewVersionInfo {
    /**
     * 版本摘要。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionDigestInfo: VersionDigestInfo;

    /**
     * 版本组件。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionComponents: Array<VersionComponent>;
  }

  /**
   * 版本摘要。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface VersionDigestInfo {
    /**
     * 版本摘要。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionDigest: string;
  }

  /**
   * 版本组件。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface VersionComponent {
    /**
     * 组件标识。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    componentId: string;

    /**
     * 组件类型。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    componentType: ComponentType;

    /**
     * 升级方式。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    upgradeAction: UpgradeAction;

    /**
     * 显示版本号。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    displayVersion: string;

    /**
     * 版本号。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    innerVersion: string;

    /**
     * 升级包大小，单位为B。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    size: int;

    /**
     * 生效模式。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    effectiveMode: EffectiveMode;

    /**
     * 版本描述文件信息。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    descriptionInfo: DescriptionInfo;

    /**
     * 升级模式。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 20 dynamic
     * @since 23 static
     */
    otaMode?: OtaMode;
  }

  /**
   * 描述文件选项。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DescriptionOptions {
    /**
     * 描述文件格式。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    format: DescriptionFormat;

    /**
     * 描述文件语言。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    language: string;
  }

  /**
   * 组件描述文件。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ComponentDescription {
    /**
     * 组件标识。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    componentId: string;

    /**
     * 描述文件信息。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    descriptionInfo: DescriptionInfo;
  }

  /**
   * 版本描述文件信息。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DescriptionInfo {
    /**
     * 描述文件类型。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    descriptionType: DescriptionType;

    /**
     * 描述文件内容。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    content: string;
  }

  /**
   * 当前版本信息。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface CurrentVersionInfo {
    /**
     * 系统版本号。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    osVersion: string;

    /**
     * 设备名。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    deviceName: string;

    /**
     * 版本组件。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionComponents: Array<VersionComponent>;
  }

  /**
   * 下载选项。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface DownloadOptions {
    /**
     * 网络类型。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    allowNetwork: NetType;

    /**
     * 升级指令。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    order: Order;
  }

  /**
   * 恢复下载选项。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ResumeDownloadOptions {
    /**
     * 网络类型。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    allowNetwork: NetType;
  }

  /**
   * 暂停下载选项。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface PauseDownloadOptions {
    /**
     * 是否允许自动恢复。
     * 
     * true表示允许自动恢复，false表示不允许。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    isAllowAutoResume: boolean;
  }

  /**
   * 升级选项。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface UpgradeOptions {
    /**
     * 升级指令。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    order: Order;
  }

  /**
   * 清除异常选项。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ClearOptions {
    /**
     * 异常状态。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    status: UpgradeStatus;
  }

  /**
   * 升级策略。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface UpgradePolicy {
    /**
     * 自动下载策略。 
     * 
     * true表示可自动下载，false表示不可自动下载。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    downloadStrategy: boolean;

    /**
     * 自动升级策略。 
     * 
     * true表示可自动升级，false表示不可自动升级。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    autoUpgradeStrategy: boolean;

    /**
     * 自动升级时间段。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    autoUpgradePeriods: Array<UpgradePeriod>;
  }

  /**
   * 升级时间段。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface UpgradePeriod {
    /**
     * 开始时间。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    start: int;

    /**
     * 结束时间。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    end: int;
  }

  /**
   * 任务信息。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface TaskInfo {
    /**
     * 是否存在任务。
     * 
     * true表示存在，false表示不存在。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    existTask: boolean;

    /**
     * 任务数据。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    taskBody: TaskBody;
  }

  /**
   * 事件信息。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface EventInfo {
    /**
     * 事件ID。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    eventId: EventId;

    /**
     * 任务数据。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    taskBody: TaskBody;
  }

  /**
   * 任务数据。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface TaskBody {
    /**
     * 版本摘要。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionDigestInfo: VersionDigestInfo;

    /**
     * 升级状态。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    status: UpgradeStatus;

    /**
     * 子状态。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    subStatus: int;

    /**
     * 进度。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    progress: int;

    /**
     * 安装模式。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    installMode: int;

    /**
     * 错误信息。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    errorMessages: Array<ErrorMessage>;

    /**
     * 版本组件。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    versionComponents: Array<VersionComponent>;
  }

  /**
   * 错误信息。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ErrorMessage {
    /**
     * 错误码。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    errorCode: int;

    /**
     * 错误描述。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    errorMessage: string;
  }

  /**
   * 事件信息。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface EventClassifyInfo {
    /**
     * 事件类型。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    eventClassify: EventClassify;

    /**
     * 额外信息。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    extraInfo: string;
  }

  /**
   * 升级文件。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface UpgradeFile {
    /**
     * 文件类型。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    fileType: ComponentType;

    /**
     * 文件路径。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    filePath: string;
  }

  /**
   * 恢复出厂设置策略。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface FactoryResetStrategy {
    /**
     * 重置范围。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    scope: FactoryResetScope;

    /**
     * 重置策略。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    strategy: string;
  }

  /**
   * 恢复出厂设置范围。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum FactoryResetScope {
    /**
     * 用户数据。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DATA = 1,

    /**
     * 用户数据和操作系统。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DATA_AND_OS = 2
  } 

  /**
   * 恢复出厂设置信息。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export interface FactoryResetInfo {
    /**
     * 恢复出厂设置所需持续时间。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    duration: int;
  }

  /**
   * 事件回调。
   *
   * @typedef UpgradeTaskCallback [since 9 - 22]
   * @typedef { function } UpgradeTaskCallback [since 23]
   * @param { EventInfo } eventInfo - Event information. [since 23]
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export type UpgradeTaskCallback = (eventInfo: EventInfo) => void;

  /**
   * 设备厂家。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum BusinessVendor {
    /**
     * 开源。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    PUBLIC = 'public'
  }

  /**
   * 升级类型。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum BusinessSubType {
    /**
     * 固件。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    FIRMWARE = 1
  }

  /**
   * 组件类型。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ComponentType {
    /**
     * 固件。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    OTA = 1
  }

  /**
   * 升级方式。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum UpgradeAction {
    /**
     * 差分包。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    UPGRADE = 'upgrade',

    /**
     * 修复包。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    RECOVERY = 'recovery'
  }

  /**
   * 生效模式。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum EffectiveMode {
    /**
     * 冷升级。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    COLD = 1,

    /**
     * 热升级。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    LIVE = 2,

    /**
     * 融合升级。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    LIVE_AND_COLD = 3
  }

  /**
   * 升级模式。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 20 dynamic
   * @since 23 static
   */
  export enum OtaMode {
    /**
     * 正常升级。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 20 dynamic
     * @since 23 static
     */
    REGULAR_OTA = 0,

    /**
     * 流式升级。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 20 dynamic
     * @since 23 static
     */
    STREAM_OTA = 1,

    /**
     * AB正常升级。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 20 dynamic
     * @since 23 static
     */
    AB_REGULAR_OTA = 2,

    /**
     * AB流式升级。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 20 dynamic
     * @since 23 static
     */
    AB_STREAM_OTA = 3
  }

  /**
   * 描述文件类型。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DescriptionType {
    /**
     * 内容。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    CONTENT = 0,

    /**
     * 链接。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    URI = 1
  }

  /**
   * 描述文件格式。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DescriptionFormat {
    /**
     * 标准格式。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    STANDARD = 0,

    /**
     * 简易格式。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    SIMPLIFIED = 1
  }

  /**
   * 网络类型。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum NetType {
    /**
     * 数据网络。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    CELLULAR = 1,

    /**
     * 热点WIFI。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    METERED_WIFI = 2,

    /**
     * 非热点WIFI。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    NOT_METERED_WIFI = 4,

    /**
     * WIFI。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    WIFI = 6,

    /**
     * 数据网络和WIFI。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    CELLULAR_AND_WIFI = 7
  }

  /**
   * 升级指令。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum Order {
    /**
     * 下载。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOWNLOAD = 1,

    /**
     * 安装。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    INSTALL = 2,

    /**
     * 下载并安装。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOWNLOAD_AND_INSTALL = 3,

    /**
     * 生效。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    APPLY = 4,

    /**
     * 安装并生效。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    INSTALL_AND_APPLY = 6
  }

  /**
   * 升级状态。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum UpgradeStatus {
    /**
     * 待下载。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    WAITING_DOWNLOAD = 20,

    /**
     * 下载中。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOWNLOADING = 21,

    /**
     * 下载暂停。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOWNLOAD_PAUSED = 22,

    /**
     * 下载失败。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOWNLOAD_FAIL = 23,

    /**
     * 待安装。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    WAITING_INSTALL = 30,

    /**
     * 更新中。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    UPDATING = 31,

    /**
     * 待生效。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    WAITING_APPLY = 40,

    /**
     * 生效中。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    APPLYING = 41,

    /**
     * 升级成功。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    UPGRADE_SUCCESS = 50,

    /**
     * 升级失败。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    UPGRADE_FAIL = 51
  }

  /**
   * 事件类型。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum EventClassify {
    /**
     * 任务事件。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    TASK = 0x01000000
  }

  /**
   * 事件ID。
   *
   * @syscap SystemCapability.Update.UpdateService
   * @systemapi hide for inner use.
   * @since 9 dynamic
   * @since 23 static
   */
  export enum EventId {
    /**
     * 任务事件。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_TASK_BASE = EventClassify.TASK,

    /**
     * 收到任务。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_TASK_RECEIVE = 0x01000001,

    /**
     * 取消任务。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_TASK_CANCEL = 0x01000002,

    /**
     * 待下载。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_WAIT = 0x01000003,

    /**
     * 开始下载。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_START = 0x01000004,

    /**
     * 下载进度更新。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_UPDATE = 0x01000005,

    /**
     * 下载暂停。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_PAUSE = 0x01000006,

    /**
     * 恢复下载。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_RESUME = 0x01000007,

    /**
     * 下载成功。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_SUCCESS = 0x01000008,

    /**
     * 下载失败。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_DOWNLOAD_FAIL = 0x01000009,

    /**
     * 待升级。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_UPGRADE_WAIT = 0x0100000a,

    /**
     * 开始升级。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_UPGRADE_START = 0x0100000b,

    /**
     * 升级中。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_UPGRADE_UPDATE = 0x0100000c,

    /**
     * 待生效。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_APPLY_WAIT = 0x0100000d,

    /**
     * 开始生效。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_APPLY_START = 0x0100000e,

    /**
     * 更新成功。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_UPGRADE_SUCCESS = 0x0100000f,

    /**
     * 更新失败。
     *
     * @syscap SystemCapability.Update.UpdateService
     * @systemapi hide for inner use.
     * @since 9 dynamic
     * @since 23 static
     */
    EVENT_UPGRADE_FAIL = 0x01000010
  }
}

export default update;