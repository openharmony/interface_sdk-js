/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @kit DataProtectionKit
 */
import type { AsyncCallback, Callback } from './@ohos.base';
import type common from './@ohos.app.ability.common';
import type Want from './@ohos.app.ability.Want';
/**
 * 数据防泄漏（Data Loss Prevention，DLP）是系统提供的系统级的数据防泄漏解决方案，提供跨设备的文件的权限管理、加密存储、授权访问等能力。
 * 
 * > **说明：**
 * >
 * > - @ohos.dlpPermission归属的Kit已由`DataLossPreventionKit`变更为`DataProtectionKit`，建议开发者使用新模块名`@kit.DataProtectionKit`完成模块导
 * > 入。如果使用`@kit.DataLossPreventionKit`导入，仅能调用改名前的接口，无法使用新增接口。
 *
 * @syscap SystemCapability.Security.DataLossPrevention
 * @since 10
 */
declare namespace dlpPermission {
    /**
     * 可以对DLP文件进行的操作类型枚举。例如：DLP沙箱应用可以根据是否具有操作权限，对其按钮进行置灰。
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    export enum ActionFlagType {
        /**
         * 表示文件的查看权限。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_VIEW = 0x00000001,
        /**
         * 表示文件的保存权限。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_SAVE = 0x00000002,
        /**
         * 表示文件的另存为权限。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_SAVE_AS = 0x00000004,
        /**
         * 表示文件的编辑权限。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_EDIT = 0x00000008,
        /**
         * 表示文件的截屏权限。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_SCREEN_CAPTURE = 0x00000010,
        /**
         * 表示文件的共享屏幕权限。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_SCREEN_SHARE = 0x00000020,
        /**
         * 表示文件的录屏权限。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_SCREEN_RECORD = 0x00000040,
        /**
         * 表示文件的复制权限。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_COPY = 0x00000080,
        /**
         * 表示文件的打印权限。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_PRINT = 0x00000100,
        /**
         * 表示文件的导出权限。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_EXPORT = 0x00000200,
        /**
         * 表示文件的修改文件权限。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_PERMISSION_CHANGE = 0x00000400
    }
    /**
     * DLP文件授权类型的枚举。
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    export enum DLPFileAccess {
        /**
         * 表示无文件权限。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        NO_PERMISSION = 0,
        /**
         * 表示文件的只读权限。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        READ_ONLY = 1,
        /**
         * 表示文件的编辑权限。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        CONTENT_EDIT = 2,
        /**
         * 表示文件的完全控制权限。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        FULL_CONTROL = 3
    }
    /**
     * 表示DLP文件的权限信息。
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    export interface DLPPermissionInfo {
        /**
         * 表示DLP文件针对用户的授权类型，例如：只读。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        dlpFileAccess: DLPFileAccess;
        /**
         * 表示DLP文件的详细操作权限，是不同[ActionFlagTypes]{@link dlpPermission.ActionFlagType}的组合。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        flags: number;
    }
    /**
     * 表示被打开的DLP文件的信息。
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    export interface AccessedDLPFileInfo {
        /**
         * 表示DLP文件的uri。不超过4095字节。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        uri: string;
        /**
         * 表示DLP文件最近打开时间。取值范围大于等于0。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        lastOpenTime: number;
    }
    /**
     * 保留沙箱的沙箱信息。
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    export interface RetentionSandboxInfo {
        /**
         * 表示DLP沙箱应用索引。取值范围为1001到1100。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        appIndex: number;
        /**
         * 表示应用包名。最小7字节，最大128字节。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        bundleName: string;
        /**
         * 表示DLP文件的URI列表。Array不限长度，每个string不超过4095字节。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        docUris: Array<string>;
    }
    /**
     * 根据文件的fd，查询该文件是否是DLP文件。使用Promise方式异步返回结果。
     *
     * @param { number } fd - 待查询文件的fd（文件描述符）。取值范围为[0, 2<sup>31</sup>-1]。当fd小于0时，函数返回false；当fd大于2<sup>31</sup>-1时，fd的值被截
     *     断。
     * @returns { Promise<boolean> } 回调函数。返回true表示是DLP文件，返回false表示非DLP文件。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function isDLPFile(fd: number): Promise<boolean>;
    /**
     * 根据文件的fd，查询该文件是否是DLP文件。使用callback方式异步返回结果。
     *
     * @param { number } fd - 待查询文件的fd（文件描述符）。取值范围为[0, 2<sup>31</sup>-1]。当fd小于0时，函数返回false；当fd大于2<sup>31</sup>-1时，fd的值被截
     *     断。
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** means the
     *     file is a DLP file; the value **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function isDLPFile(fd: number, callback: AsyncCallback<boolean>): void;
    /**
     * 查询当前DLP沙箱的权限信息。使用Promise方式异步返回结果。
     *
     * @returns { Promise<DLPPermissionInfo> } Promise对象。返回查询的DLP文件的权限信息，无异常则表明查询成功。
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100006 - No permission to call this API,
     *     which is available only for DLP sandbox applications.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function getDLPPermissionInfo(): Promise<DLPPermissionInfo>;
    /**
     * 查询当前DLP沙箱的权限信息。使用callback方式异步返回结果。
     *
     * @param { AsyncCallback<DLPPermissionInfo> } callback - 回调函数。err为undefined时表示查询成功；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100006 - No permission to call this API,
     *     which is available only for DLP sandbox applications.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function getDLPPermissionInfo(callback: AsyncCallback<DLPPermissionInfo>): void;
    /**
     * 获取指定DLP文件名的原始文件名。接口为同步接口。
     *
     * @param { string } fileName - 指定要查询的文件名。不超过255字节，否则返回null。
     * @returns { string } 返回DLP文件的原始文件名。例如：DLP文件名为test.txt.dlp，则返回的原始文件名为test.txt。不超过255字节。
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function getOriginalFileName(fileName: string): string;
    /**
     * 获取DLP文件扩展名。接口为同步接口。
     *
     * @returns { string } 返回DLP文件扩展名。例如：原文件"text.txt"，加密后的DLP文件名为"test.txt.dlp"，返回扩展名为".dlp"。
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function getDLPSuffix(): string;
    /**
     * 监听打开DLP文件。在当前应用的沙箱应用打开DLP文件时，通知当前应用。
     *
     * @param { 'openDLPFile' } type - 监听事件类型。固定值为'openDLPFile'：打开DLP文件事件。
     * @param { Callback<AccessedDLPFileInfo> } listener - DLP文件打开事件的回调。在当前应用的沙箱应用打开DLP文件时，通知当前应用。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100007 - No permission to call this API,
     *     which is available only for non-DLP sandbox applications.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function on(type: 'openDLPFile', listener: Callback<AccessedDLPFileInfo>): void;
    /**
     * 取消监听打开DLP文件。在当前应用的沙箱应用打开DLP文件时，取消通知当前应用。
     *
     * @param { 'openDLPFile' } type - 监听事件类型。固定值为'openDLPFile'：打开DLP文件事件。
     * @param { Callback<AccessedDLPFileInfo> } listener - DLP文件被打开的事件的回调。在当前应用的沙箱应用打开DLP文件时，取消通知当前应用。
     *     默认为空，表示取消该类型事件的所有回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100007 - No permission to call this API,
     *     which is available only for non-DLP sandbox applications.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function off(type: 'openDLPFile', listener?: Callback<AccessedDLPFileInfo>): void;
    /**
     * 查询当前应用是否运行在DLP沙箱环境。使用Promise方式异步返回结果。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示当前应用运行在沙箱中，返回false表示当前应用不是运行在沙箱中。
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function isInSandbox(): Promise<boolean>;
    /**
     * 查询当前应用是否运行在DLP沙箱环境。使用callback方式异步返回结果。
     *
     * @param { AsyncCallback<boolean> } callback - 回调函数。err为undefined时表示查询成功；否则为错误对象。返回true表示当前应用运行在沙箱中，返回false表示当前应用不是
     *     运行在沙箱中。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function isInSandbox(callback: AsyncCallback<boolean>): void;
    /**
     * 查询当前可支持权限设置和校验的文件扩展名类型列表。使用Promise方式异步返回结果。
     *
     * @returns { Promise<Array<string>> } Promise对象。返回当前可支持权限设置和校验的文件扩展名类型列表。
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function getDLPSupportedFileTypes(): Promise<Array<string>>;
    /**
     * 查询当前可支持权限设置和校验的文件扩展名类型列表。使用callback方式异步返回结果。
     *
     * @param { AsyncCallback<Array<string>> } callback - 回调函数。err为undefined时表示查询成功；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function getDLPSupportedFileTypes(callback: AsyncCallback<Array<string>>): void;
    /**
     * 打开DLP文件时自动安装沙箱，关闭DLP文件时自动卸载沙箱。设置沙箱保留状态时DLP文件关闭时自动卸载暂时失效。使用Promise方式异步返回结果。
     *
     * @param { Array<string> } docUris - 表示需要设置保留状态的文件uri列表。Array不限长度，每个string不超过4095字节，否则返回null。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100006 - No permission to call this API,
     *     which is available only for DLP sandbox applications.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function setRetentionState(docUris: Array<string>): Promise<void>;
    /**
     * 打开DLP文件时自动安装沙箱，关闭DLP文件时自动卸载沙箱。设置沙箱保留状态时DLP文件关闭时自动卸载暂时失效。使用callback方式异步返回结果。
     *
     * @param { Array<string> } docUris - 表示需要设置保留状态的文件uri列表。Array不限长度，每个string不超过4095字节。
     * @param { AsyncCallback<void> } callback - 回调函数。err为undefined时表示设置成功；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100006 - No permission to call this API,
     *     which is available only for DLP sandbox applications.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function setRetentionState(docUris: Array<string>, callback: AsyncCallback<void>): void;
    /**
     * 取消沙箱保留状态即恢复DLP文件关闭时自动卸载沙箱策略。使用Promise方式异步返回结果。
     *
     * @param { Array<string> } docUris - 表示需要设置保留状态的文件uri列表。Array不限长度，每个string不超过4095字节，否则返回null。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function cancelRetentionState(docUris: Array<string>): Promise<void>;
    /**
     * 取消沙箱保留状态即恢复DLP文件关闭时自动卸载沙箱策略。使用callback方式异步返回结果。
     *
     * @param { Array<string> } docUris - 表示需要设置保留状态的文件uri列表。Array不限长度，每个string不超过4095字节，否则返回null。
     * @param { AsyncCallback<void> } callback - 回调函数。err为undefined时表示设置成功；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function cancelRetentionState(docUris: Array<string>, callback: AsyncCallback<void>): void;
    /**
     * 查询指定应用的保留沙箱信息列表。使用Promise方式异步返回结果。
     *
     * @param { string } [bundleName] - 指定应用包名。默认为空，查询当前应用的保留沙箱信息列表。最小7字节，最大128字节，超出此范围返回null。
     * @returns { Promise<Array<RetentionSandboxInfo>> } Promise对象。返回查询的沙箱信息列表。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100007 - No permission to call this API,
     *     which is available only for non-DLP sandbox applications.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function getRetentionSandboxList(bundleName?: string): Promise<Array<RetentionSandboxInfo>>;
    /**
     * 查询指定应用的保留沙箱信息列表。使用callback异步回调。
     *
     * @param { string } bundleName - 指定应用包名。最小7字节，最大128字节，超出此范围返回null。
     * @param { AsyncCallback<Array<RetentionSandboxInfo>> } callback - 回调函数。err为undefined时表示查询成功；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100007 - No permission to call this API,
     *     which is available only for non-DLP sandbox applications.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function getRetentionSandboxList(bundleName: string, callback: AsyncCallback<Array<RetentionSandboxInfo>>): void;
    /**
     * 查询当前应用的保留沙箱信息列表。使用callback异步回调。
     *
     * @param { AsyncCallback<Array<RetentionSandboxInfo>> } callback - 回调函数。err为undefined时表示查询成功；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100007 - No permission to call this API,
     *     which is available only for non-DLP sandbox applications.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function getRetentionSandboxList(callback: AsyncCallback<Array<RetentionSandboxInfo>>): void;
    /**
     * 查询最近访问的DLP文件列表。使用Promise方式异步返回结果。
     *
     * @returns { Promise<Array<AccessedDLPFileInfo>> } Promise对象。返回最近访问的DLP文件列表。
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100007 - No permission to call this API,
     *     which is available only for non-DLP sandbox applications.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function getDLPFileAccessRecords(): Promise<Array<AccessedDLPFileInfo>>;
    /**
     * 查询最近访问的DLP文件列表。使用callback方式异步返回结果。
     *
     * @param { AsyncCallback<Array<AccessedDLPFileInfo>> } callback - 回调函数。err为undefined时表示查询成功；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100007 - No permission to call this API,
     *     which is available only for non-DLP sandbox applications.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function getDLPFileAccessRecords(callback: AsyncCallback<Array<AccessedDLPFileInfo>>): void;
    /**
     * 表示打开DLP权限管理应用的结果。
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @StageModelOnly
     * @since 11
     */
    export interface DLPManagerResult {
        /**
         * 表示打开DLP权限管理应用并退出后返回的结果码。取值范围为0到3。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @StageModelOnly
         * @since 11
         */
        resultCode: number;
        /**
         * 表示打开DLP权限管理应用并退出后返回的数据。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @StageModelOnly
         * @since 11
         */
        want: Want;
    }
    /**
     * 在当前[UIAbility]{@link @ohos.app.ability.UIAbility:UIAbility}界面以无边框形式打开DLP权限管理应
     * 用。使用Promise方式异步返回结果。
     * 
     * > **说明：**
     * >
     * > 该接口仅支持域账号调用。
     *
     * @param { common.UIAbilityContext } context - 当前窗口
     *     [UIAbility]{@link @ohos.app.ability.UIAbility:UIAbility} 上下文。
     * @param { Want } want - 请求对象。
     * @returns { Promise<DLPManagerResult> } romise对象。打开DLP权限管理应用并退出后的结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @throws { BusinessError } 19100016 - The uri field is missing in the want parameter.
     * @throws { BusinessError } 19100017 - The displayName field is missing in the want parameter.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @StageModelOnly
     * @since 11
     */
    function startDLPManagerForResult(context: common.UIAbilityContext, want: Want): Promise<DLPManagerResult>;
    /**
     * DLP沙箱聚合策略类型的枚举。沙箱聚合表示同一权限类型的DLP文件，在同一个沙箱内打开，例如在同一个沙箱内使用不同tab页打开；沙箱非聚合表示不同DLP文件在不同沙箱打开。
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    export enum GatheringPolicyType {
        /**
         * 表示沙箱聚合。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        GATHERING = 1,
        /**
         * 表示沙箱非聚合。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        NON_GATHERING = 2
    }
    /**
     * 查询DLP沙箱聚合策略。使用Promise方式异步返回结果。
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @returns { Promise<GatheringPolicyType> } Promise对象。返回当前DLP沙箱聚合策略。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    function getDLPGatheringPolicy(): Promise<GatheringPolicyType>;
    /**
     * 查询DLP沙箱聚合策略。使用callback方式异步返回结果。
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { AsyncCallback<GatheringPolicyType> } callback - 回调函数。err为undefined时表示查询成功；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    function getDLPGatheringPolicy(callback: AsyncCallback<GatheringPolicyType>): void;
    /**
     * 表示DLP沙箱的信息。
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    export interface DLPSandboxInfo {
        /**
         * 表示DLP沙箱应用索引。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        appIndex: number;
        /**
         * 表示DLP沙箱应用的tokenID。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        tokenID: number;
        /**
         * 表示被绑定的DLP沙箱应用的应用索引。
         * 
         * **模型约束**：此接口仅可在Stage模型下使用。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 24
         */
        bindAppIndex?: number;
    }
    /**
     * 安装一个应用的DLP沙箱。使用Promise方式异步返回结果返回应用沙箱信息。
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { string } bundleName - 应用包名。最小7字节，最大128字节。
     * @param { DLPFileAccess } access - DLP文件授权类型。
     * @param { number } userId - 当前的用户ID，通过账号子系统获取的OS账号ID，默认主用户ID：100。
     * @param { string } uri - DLP文件的URI。不超过4095字节。
     * @returns { Promise<DLPSandboxInfo> } Promise对象。安装沙箱应用，返回应用沙箱信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    function installDLPSandbox(bundleName: string, access: DLPFileAccess, userId: number, uri: string): Promise<DLPSandboxInfo>;
    /**
     * 安装一个应用的DLP沙箱。使用callback方式异步返回应用沙箱信息。
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { string } bundleName - 应用包名。最小7字节，最大128字节。
     * @param { DLPFileAccess } access - DLP文件授权类型。
     * @param { number } userId - 当前的用户ID，通过账号子系统获取的系账号ID，默认主用户ID：100。
     * @param { string } uri - DLP文件的URI。不超过4095字节。
     * @param { AsyncCallback<DLPSandboxInfo> } callback - C获取应用沙箱信息的回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    function installDLPSandbox(bundleName: string, access: DLPFileAccess, userId: number, uri: string, callback: AsyncCallback<DLPSandboxInfo>): void;
    /**
     * 卸载一个应用的DLP沙箱。使用Promise方式异步返回结果。
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { string } bundleName - 应用包名。最小7字节，最大128字节。
     * @param { number } userId - 当前的用户ID，通过账号子系统获取的系统账号ID，默认主用户ID：100。
     * @param { number } appIndex - DLP沙箱号。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    function uninstallDLPSandbox(bundleName: string, userId: number, appIndex: number): Promise<void>;
    /**
     * 卸载一个应用的DLP沙箱。使用callback方式异步返回结果。
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { string } bundleName -应用包名。最小7字节，最大128字节。
     * @param { number } userId - 当前的用户ID，通过账号子系统获取的系统账号ID，默认主用户ID：100。
     * @param { number } appIndex - DLP沙箱号，即installDLPSandbox接口调用成功后的返回值。
     * @param { AsyncCallback<void> } callback - 获取卸载结果的回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    function uninstallDLPSandbox(bundleName: string, userId: number, appIndex: number, callback: AsyncCallback<void>): void;
    /**
     * DLP沙箱身份。
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    export interface DLPSandboxState {
        /**
         * 表示应用包名。最小7字节，最大128字节。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        bundleName: string;
        /**
         * 表示DLP沙箱应用索引。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        appIndex: number;
    }
    /**
     * 注册监听DLP沙箱卸载事件。
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { 'uninstallDLPSandbox' } type - 监听事件类型。固定值为'uninstallDLPSandbox'：DLP沙箱卸载事件。
     * @param { Callback<DLPSandboxState> } listener - 沙箱应用卸载事件的回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    function on(type: 'uninstallDLPSandbox', listener: Callback<DLPSandboxState>): void;
    /**
     * 取消监听DLP沙箱卸载事件。
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { 'uninstallDLPSandbox' } type - 监听事件类型。固定值为'uninstallDLPSandbox'：DLP沙箱卸载事件。
     * @param { Callback<DLPSandboxState> } [listener] - 沙箱应用卸载事件的回调。默认为空，表示取消该类型事件的所有回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    function off(type: 'uninstallDLPSandbox', listener?: Callback<DLPSandboxState>): void;
    /**
     * 表示授权账号类型的枚举。
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use. [since 10 - 20]
     * @publicapi [since 21]
     * @since 10
     */
    export enum AccountType {
        /**
         * 表示云账号。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        CLOUD_ACCOUNT = 1,
        /**
         * 表示域账号。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        DOMAIN_ACCOUNT = 2,
        /**
         * 表示企业账号。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        ENTERPRISE_ACCOUNT = 4
    }
    /**
     * 表示授权用户数据。
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use. [since 10 - 20]
     * @publicapi [since 21]
     * @since 10
     */
    export interface AuthUser {
        /**
         * 表示被授权用户账号。不超过255字节。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        authAccount: string;
        /**
         * 表示被授权用户账号类型。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        authAccountType: AccountType;
        /**
         * 表示被授予的权限。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        dlpFileAccess: DLPFileAccess;
        /**
         * 表示授权到期时间。取值范围大于等于0。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        permExpiryTime: number;
    }
    /**
     * 表示授权相关信息。
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use. [since 10 - 20]
     * @publicapi [since 21]
     * @since 10
     */
    export interface DLPProperty {
        /**
         * 表示权限设置者账号。不超过255字节，超出此范围返回null。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        ownerAccount: string;
        /**
         * 表示权限设置者账号的ID。不超过255字节，超出此范围返回null。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        ownerAccountID: string;
        /**
         * 表示权限设置者账号类型。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        ownerAccountType: AccountType;
        /**
         * 表示授权用户列表，默认为空。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        authUserList?: Array<AuthUser>;
        /**
         * 表示联系人账号。不超过255字节，超出此范围返回null。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        contactAccount: string;
        /**
         * 表示是否是离线打开。true表示允许离线打开，false表示不可离线打开。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        offlineAccess: boolean;
        /**
         * 表示授予所有人的权限，默认为空。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        everyoneAccessList?: Array<DLPFileAccess>;
        /**
         * 表示文件权限到期时间戳，默认为空。取值范围大于等于0，超出此范围返回null。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 11 - 20]
         * @publicapi [since 21]
         * @since 11
         */
        expireTime?: number;
        /**
         * 表示到期后文件是否允许打开（打开后拥有编辑权限），仅在expireTime不为空时生效，默认为空。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 20 - 20]
         * @publicapi [since 21]
         * @since 20
         */
        actionUponExpiry?: ActionType;
        /**
         * 表示文件的标识，默认为空。不超过255字节，超出此范围返回null。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        fileId?: string;
        /**
         * 表示允许打开的次数，默认为空。取值范围大于等于0，超出此范围返回null。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        allowedOpenCount?: number;
        /**
         * 表示是否要求添加水印。true表示要求添加水印，false表示不要求添加水印，默认为空。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 23
         */
        waterMarkConfig?: boolean;
        /**
         * 表示文件可被查看的有效时间，超时后打开的文件将自动关闭，默认为空，单位：秒。取值范围大于等于0，超出此范围返回null。
         * 
         * **模型约束**：此接口仅可在Stage模型下使用。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @stagemodelonly
         * @since 23
         */
        countdown?: number;
        /**
         * 表示DLP文件的扩展属性，默认为空。
         * 
         * **模型约束**：此接口仅可在Stage模型下使用。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @stagemodelonly
         * @since 24
         */
        extensionFields?: Record<string, Object>;
    }
    /**
     * Provides APIs for managing DLP files. A **DLPFile** instance indicates a DLP file object. You can use 
     * [generateDLPFile]{@link dlpPermission.generateDLPFile(plaintextFd: number, ciphertextFd: number, property: DLPProperty)}
     * or [openDLPFile]{@link dlpPermission.openDLPFile(ciphertextFd: number, appId: string)} to obtain a **DLPFile** 
     * instance.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    export interface DLPFile {
        /**
         * Authorized user information.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        dlpProperty: DLPProperty;
        /**
         * Adds a link file to the Filesystem in Userspace (FUSE). The link file is a virtual file mapped to the 
         * ciphertext in the FUSE. The read and write operations on the link file will be synchronized to the DLP file. 
         * This API uses a promise to return the result.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { string } linkFileName - Name of the link file. The value contains up to 255 bytes.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications use system APIs.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
         *     unspecified.
         *     2. Incorrect parameter types.
         * @throws { BusinessError } 19100001 - Invalid parameter value.
         * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
         * @throws { BusinessError } 19100011 - The system ability works abnormally.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        addDLPLinkFile(linkFileName: string): Promise<void>;
        /**
         * Adds a link file to the FUSE. This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { string } linkFileName - Name of the link file. The value contains up to 255 bytes.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications use system APIs.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
         *     unspecified.
         *     2. Incorrect parameter types.
         * @throws { BusinessError } 19100001 - Invalid parameter value.
         * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
         * @throws { BusinessError } 19100011 - The system ability works abnormally.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        addDLPLinkFile(linkFileName: string, callback: AsyncCallback<void>): void;
        /**
         * Stops the read and write on the FUSE. This API uses a promise to return the result.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications use system APIs.
         * @throws { BusinessError } 19100001 - Invalid parameter value.
         * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
         * @throws { BusinessError } 19100011 - The system ability works abnormally.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        stopFuseLink(): Promise<void>;
        /**
         * Stops the read and write on the FUSE. This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications use system APIs.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
         * @throws { BusinessError } 19100001 - Invalid parameter value.
         * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
         * @throws { BusinessError } 19100011 - The system ability works abnormally.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        stopFuseLink(callback: AsyncCallback<void>): void;
        /**
         * Resumes the read and write on the FUSE. This API uses a promise to return the result.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications use system APIs.
         * @throws { BusinessError } 19100001 - Invalid parameter value.
         * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
         * @throws { BusinessError } 19100011 - The system ability works abnormally.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        resumeFuseLink(): Promise<void>;
        /**
         * Resumes the read and write on the FUSE. This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications use system APIs.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
         * @throws { BusinessError } 19100001 - Invalid parameter value.
         * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
         * @throws { BusinessError } 19100011 - The system ability works abnormally.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        resumeFuseLink(callback: AsyncCallback<void>): void;
        /**
         * Replaces a link file. This API uses a promise to return the result.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { string } linkFileName - Name of the link file. The value contains up to 255 bytes.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications use system APIs.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
         *     unspecified.
         *     2. Incorrect parameter types.
         * @throws { BusinessError } 19100001 - Invalid parameter value.
         * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
         * @throws { BusinessError } 19100011 - The system ability works abnormally.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        replaceDLPLinkFile(linkFileName: string): Promise<void>;
        /**
         * Replaces a link file. This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { string } linkFileName - Name of the link file. The value contains up to 255 bytes.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications use system APIs.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
         *     unspecified.
         *     2. Incorrect parameter types.
         * @throws { BusinessError } 19100001 - Invalid parameter value.
         * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
         * @throws { BusinessError } 19100011 - The system ability works abnormally.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        replaceDLPLinkFile(linkFileName: string, callback: AsyncCallback<void>): void;
        /**
         * Deletes a link file from the FUSE. This API uses a promise to return the result.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { string } linkFileName - Name of the link file. The value contains up to 255 bytes.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications use system APIs.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
         *     unspecified.
         *     2. Incorrect parameter types.
         * @throws { BusinessError } 19100001 - Invalid parameter value.
         * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
         * @throws { BusinessError } 19100011 - The system ability works abnormally.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        deleteDLPLinkFile(linkFileName: string): Promise<void>;
        /**
         * Deletes a link file. This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { string } linkFileName - Name of the link file. The value contains up to 255 bytes.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications use system APIs.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
         *     unspecified.
         *     2. Incorrect parameter types.
         * @throws { BusinessError } 19100001 - Invalid parameter value.
         * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
         * @throws { BusinessError } 19100011 - The system ability works abnormally.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        deleteDLPLinkFile(linkFileName: string, callback: AsyncCallback<void>): void;
        /**
         * Recovers the plaintext of a DLP file. This API uses a promise to return the result.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { number } plaintextFd - FD of the target plaintext file.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications use system APIs.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
         *     unspecified.
         *     2. Incorrect parameter types.
         * @throws { BusinessError } 19100001 - Invalid parameter value.
         * @throws { BusinessError } 19100002 - Credential service busy due to too many tasks or duplicate tasks.
         * @throws { BusinessError } 19100003 - Credential task time out.
         * @throws { BusinessError } 19100004 - Credential service error.
         * @throws { BusinessError } 19100005 - Credential authentication server error.
         * @throws { BusinessError } 19100008 - The file is not a DLP file.
         * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
         * @throws { BusinessError } 19100010 - The DLP file is read only.
         * @throws { BusinessError } 19100011 - The system ability works abnormally.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        recoverDLPFile(plaintextFd: number): Promise<void>;
        /**
         * Recovers the plaintext of a DLP file. This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { number } plaintextFd - FD of the target plaintext file.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications use system APIs.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left
         *     unspecified.
         *     2. Incorrect parameter types.
         * @throws { BusinessError } 19100001 - Invalid parameter value.
         * @throws { BusinessError } 19100002 - Credential service busy due to too many tasks or duplicate tasks.
         * @throws { BusinessError } 19100003 - Credential task time out.
         * @throws { BusinessError } 19100004 - Credential service error.
         * @throws { BusinessError } 19100005 - Credential authentication server error.
         * @throws { BusinessError } 19100008 - The file is not a DLP file.
         * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
         * @throws { BusinessError } 19100010 - The DLP file is read only.
         * @throws { BusinessError } 19100011 - The system ability works abnormally.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        recoverDLPFile(plaintextFd: number, callback: AsyncCallback<void>): void;
        /**
         * Closes this **DLPFile** instance. This API uses a promise to return the result.
         * 
         * > **NOTE**
         * >
         * > If a DLP file is no longer used, close the **dlpFile** instance to release the memory.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications use system APIs.
         * @throws { BusinessError } 19100001 - Invalid parameter value.
         * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
         * @throws { BusinessError } 19100011 - The system ability works abnormally.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        closeDLPFile(): Promise<void>;
        /**
         * Closes this **DLPFile** instance. This API uses an asynchronous callback to return the result.
         * 
         * > **NOTE**
         * >
         * > If a DLP file is no longer used, close the **dlpFile** instance to release the memory.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 202 - Non-system applications use system APIs.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
         * @throws { BusinessError } 19100001 - Invalid parameter value.
         * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
         * @throws { BusinessError } 19100011 - The system ability works abnormally.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        closeDLPFile(callback: AsyncCallback<void>): void;
    }
    /**
     * Generates a DLP file, which is an encrypted file that can be accessed only by authorized users. The users can 
     * have the full control permission or read-only permission on the DLP file. This API uses a promise to return the 
     * result.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { number } plaintextFd - FD of the plaintext file to be encrypted.
     * @param { number } ciphertextFd - FD of the encrypted file.
     * @param { DLPProperty } property - Authorization information, which includes the authorized user list, owner
     *     account, and contact account information.
     * @returns { Promise<DLPFile> } Promise If the operation is successful, a **DLPFile** instance is returned.
     *     Otherwise, **null** is returned.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100002 - Credential service busy due to too many tasks or duplicate tasks.
     * @throws { BusinessError } 19100003 - Credential task time out.
     * @throws { BusinessError } 19100004 - Credential service error.
     * @throws { BusinessError } 19100005 - Credential authentication server error.
     * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    function generateDLPFile(plaintextFd: number, ciphertextFd: number, property: DLPProperty): Promise<DLPFile>;
    /**
     * Generates a DLP file, which is an encrypted file that can be accessed only by authorized users. The users can 
     * have the full control permission or read-only permission on the DLP file. This API uses an asynchronous callback 
     * to return the result.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { number } plaintextFd - FD of the plaintext file to be encrypted.
     * @param { number } ciphertextFd - FD of the encrypted file.
     * @param { DLPProperty } property - Authorization information, which includes the authorized user list, owner
     *     account, and contact account information.
     * @param { AsyncCallback<DLPFile> } callback - Callback used to return the **DLPFile** instance created.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100002 - Credential service busy due to too many tasks or duplicate tasks.
     * @throws { BusinessError } 19100003 - Credential task time out.
     * @throws { BusinessError } 19100004 - Credential service error.
     * @throws { BusinessError } 19100005 - Credential authentication server error.
     * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    function generateDLPFile(plaintextFd: number, ciphertextFd: number, property: DLPProperty, callback: AsyncCallback<DLPFile>): void;
    /**
     * Opens a DLP file. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { number } ciphertextFd - FD of the encrypted file.
     * @param { string } appId - ID of the caller. The value contains 8 to 1024 bytes.
     * @returns { Promise<DLPFile> } Promise If the operation is successful, a **DLPFile** instance is returned.
     *     Otherwise, **null** is returned.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100002 - Credential service busy due to too many tasks or duplicate tasks.
     * @throws { BusinessError } 19100003 - Credential task time out.
     * @throws { BusinessError } 19100004 - Credential service error.
     * @throws { BusinessError } 19100005 - Credential authentication server error.
     * @throws { BusinessError } 19100008 - The file is not a DLP file.
     * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @throws { BusinessError } 19100018 - The application is not authorized.
     * @throws { BusinessError } 19100019 - The DLP file has expired.
     * @throws { BusinessError } 19100020 - No network connection.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    function openDLPFile(ciphertextFd: number, appId: string): Promise<DLPFile>;
    /**
     * Opens a DLP file. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { number } ciphertextFd - FD of the encrypted file.
     * @param { string } appId - ID of the caller. The value contains 8 to 1024 bytes.
     * @param { AsyncCallback<DLPFile> } callback - Callback used to return the **DLPFile** instance created.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100002 - Credential service busy due to too many tasks or duplicate tasks.
     * @throws { BusinessError } 19100003 - Credential task time out.
     * @throws { BusinessError } 19100004 - Credential service error.
     * @throws { BusinessError } 19100005 - Credential authentication server error.
     * @throws { BusinessError } 19100008 - The file is not a DLP file.
     * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @throws { BusinessError } 19100018 - The application is not authorized.
     * @throws { BusinessError } 19100019 - The DLP file has expired.
     * @throws { BusinessError } 19100020 - No network connection.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    function openDLPFile(ciphertextFd: number, appId: string, callback: AsyncCallback<DLPFile>): void;
    /**
     * Sets sandbox application configuration. This API uses a promise to return the result.
     *
     * @param { string } configInfo - Sandbox application configuration. The length must be less than 4 MB. If the value
     *     exceeds this range, **null** is returned.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100007 - No permission to call this API,
     *     which is available only for non-DLP sandbox applications.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @throws { BusinessError } 19100018 - The application is not authorized.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 11
     */
    function setSandboxAppConfig(configInfo: string): Promise<void>;
    /**
     * Cleans sandbox application configuration. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100007 - No permission to call this API,
     *     which is available only for non-DLP sandbox applications.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @throws { BusinessError } 19100018 - The application is not authorized.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 11
     */
    function cleanSandboxAppConfig(): Promise<void>;
    /**
     * Obtains sandbox application configuration. This API uses a promise to return the result.
     *
     * @returns { Promise<string> } Promise used to return the result.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @throws { BusinessError } 19100018 - The application is not authorized.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 11
     */
    function getSandboxAppConfig(): Promise<string>;
    /**
     * Queries whether the current system provides the data encryption feature. This API uses a promise to return the 
     * result.
     * 
     * > **NOTE**
     * >
     * > This API is enabled by the [MDM](docroot://mdm/mdm-kit-intro.md) kit and is used for enterprise devices. For 
     * > other devices (such as consumer devices), this API is inapplicable. Calling it returns **false**.
     *
     * @returns { Promise<boolean> } Promise used to return the result.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 12
     */
    function isDLPFeatureProvided(): Promise<boolean>;
    /**
     * Enumerates the actions to be performed when the file's permission expiration time is reached. The default value 
     * is **NOT_OPEN**.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use. [since 20 - 20]
     * @publicapi [since 21]
     * @since 20
     */
    export enum ActionType {
        /**
         * Users are not allowed to open the DLP file when the file's permission expiration time is reached.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 20 - 20]
         * @publicapi [since 21]
         * @since 20
         */
        NOT_OPEN = 0,
        /**
         * Logged-in users are allowed to edit the DLP file when the file's permission expiration time is reached.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 20 - 20]
         * @publicapi [since 21]
         * @since 20
         */
        OPEN = 1
    }
    /**
     * Represents a custom policy.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use. [since 20 - 20]
     * @publicapi [since 21]
     * @since 20
     */
    export interface CustomProperty {
        /**
         * JSON string of an enterprise custom policy. The length cannot exceed 4 MB. If the value exceeds this range, 
         * **null** is returned.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 20 - 20]
         * @publicapi [since 21]
         * @since 20
         */
        enterprise: string;
        /**
         * Represents query options for DLP files.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @stagemodelonly
         * @since 26.0.0
         */
        options?: DlpFileQueryOptions;
    }
    /**
     * Obtains a **DLPFile** object. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > This API can be called only by enterprise accounts. Enterprises need to set up their own enterprise account 
     * > servers. This API generates a DLP file, which is an encrypted file that can be accessed only by accounts 
     * > authorized by the enterprise server.
     *
     * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE
     * @param { number } plaintextFd - FD of a plaintext file. The value range is [0, 2<sup>31</sup>-1]. If the value of
     *     **fd** is less than 0, **false** is returned. If the value of **fd** is greater than 2<sup>31</sup>-1, the
     *     value is truncated.
     * @param { number } dlpFd - FD of an encrypted file. The value range is [0, 2<sup>31</sup>-1]. If the value of
     *     **fd** is less than 0, **false** is returned. If the value of **fd** is greater than 2<sup>31</sup>-1, the
     *     value is truncated.
     * @param { DLPProperty } property - General policy of DLP files.
     * @param { CustomProperty } customProperty - Enterprise custom policy.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs. [since 20 - 20]
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100002 - Credential service busy due to too many tasks or duplicate tasks.
     * @throws { BusinessError } 19100003 - Credential task time out.
     * @throws { BusinessError } 19100004 - Credential service error.
     * @throws { BusinessError } 19100005 - Credential authentication server error.
     * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @throws { BusinessError } 19100014 - Account not logged in.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use. [since 20 - 20]
     * @publicapi [since 21]
     * @since 20
     */
    function generateDlpFileForEnterprise(plaintextFd: number, dlpFd: number, property: DLPProperty, customProperty: CustomProperty): Promise<void>;
    /**
     * Parses the file header in a DLP file to obtain the DLP plaintext policy. This API uses a promise to return the 
     * result.
     *
     * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE
     * @param { number } dlpFd - FD of the file to be decrypted. The value range is [0, 2<sup>31</sup>-1]. If the value
     *     of **fd** is less than 0, **false** is returned. If the value of **fd** is greater than 2<sup>31</sup>-1, the
     *     value is truncated.
     * @returns { Promise<string> } Promise used to return the JSON string of the DLP policy. The length cannot exceed 4
     *     MB.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs. [since 20 - 20]
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100002 - Credential service busy due to too many tasks or duplicate tasks.
     * @throws { BusinessError } 19100003 - Credential task time out.
     * @throws { BusinessError } 19100004 - Credential service error.
     * @throws { BusinessError } 19100005 - Credential authentication server error.
     * @throws { BusinessError } 19100008 - The file is not a DLP file.
     * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @throws { BusinessError } 19100013 - The user does not have the permission.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use. [since 20 - 20]
     * @publicapi [since 21]
     * @since 20
     */
    function queryDlpPolicy(dlpFd: number): Promise<string>;
    /**
     * Decrypts a DLP file to generate a plaintext file. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > This API can be called only by enterprise accounts. Enterprises need to set up their own enterprise account 
     * > servers. The enterprise server determines whether an account is authorized to decrypt DLP files.
     *
     * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE
     * @param { number } dlpFd - FD of the file to be decrypted. The value range is [0, 2<sup>31</sup>-1]. If the value
     *     of **fd** is less than 0, **false** is returned. If the value of **fd** is greater than 2<sup>31</sup>-1, the
     *     value is truncated.
     * @param { number } plaintextFd - FD of the decrypted file. The value range is [0, 2<sup>31</sup>-1]. If the value
     *     of **fd** is less than 0, **false** is returned. If the value of **fd** is greater than 2<sup>31</sup>-1, the
     *     value is truncated.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs. [since 20 - 20]
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100002 - Credential service busy due to too many tasks or duplicate tasks.
     * @throws { BusinessError } 19100003 - Credential task time out.
     * @throws { BusinessError } 19100004 - Credential service error.
     * @throws { BusinessError } 19100005 - Credential authentication server error.
     * @throws { BusinessError } 19100008 - The file is not a DLP file.
     * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @throws { BusinessError } 19100013 - The user does not have the permission.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use. [since 20 - 20]
     * @publicapi [since 21]
     * @since 20
     */
    function decryptDlpFile(dlpFd: number, plaintextFd: number): Promise<void>;
    /**
     * Represents an enterprise custom policy.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    export interface EnterprisePolicy {
        /**
         * JSON string of an enterprise custom policy. The length cannot exceed 4 MB.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        policyString: string;
    }
    /**
     * Sets the protection policy for enterprise applications.
     *
     * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE
     * @param { EnterprisePolicy } policy - Protection policy to be set for enterprise applications.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @throws { BusinessError } 19100021 - Failed to set the enterprise policy.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    function setEnterprisePolicy(policy: EnterprisePolicy): void;
    /**
     * Registers the callback capability with the system ability (SA). This API is used in the **registerPlugin** API.
     * 
     * > **NOTE**
     * >
     * > [registerPlugin]{@link dlpPermission.DlpConnManager.registerPlugin} requires identical parameters to this API. 
     * > [connectServer]{@link dlpPermission.DlpConnPlugin.connectServer} is called by the SA and the parameters are 
     * > returned through the callback.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    export interface DlpConnPlugin {
        /**
         * This API is called by the SA. After processing the cloud connection capability, it will be called as a 
         * callback in the SA.
         * 
         * > **NOTE**
         * >
         * > **connectServer** indicates a call from the system capability side to the frontend.
         *
         * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE [since 21 - 24]
         * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE or ohos.permission.ACCESS_DLP_SERVICE [since 26.0.0]
         * @param { string } requestId - ID of the request transferred by the SA. No value range restriction is
         *     specified.
         * @param { string } requestData - Data transferred by the SA. No value range restriction is specified.
         * @param { Callback<string> } callback - API transferred by the SA, which is used for callback. No value range
         *     restriction is specified.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 19100011 - The system ability works abnormally.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        connectServer(requestId: string, requestData: string, callback: Callback<string>): void;
    }
    /**
     * Calls **registerPlugin** and **unregisterPlugin** to register and unregister callback capabilities in the SA.
     * 
     * > **NOTE**
     * >
     * > **registerPlugin** registers callback capabilities in the SA, and **unregisterPlugin** unregisters callback 
     * > capabilities from the SA.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    export class DlpConnManager {
        /**
         * Represents a constructor for instantiating [DlpConnManager]{@link dlpPermission.DlpConnManager}.
         *
         * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE [since 21 - 24]
         * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE or ohos.permission.ACCESS_DLP_SERVICE [since 26.0.0]
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        constructor();
        /**
         * Registers a callback with the SA.
         * 
         * > **NOTE**
         * >
         * > **registerPlugin** registers the callback with the SA.
         *
         * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE [since 21 - 24]
         * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE or ohos.permission.ACCESS_DLP_SERVICE [since 26.0.0]
         * @param { DlpConnPlugin } plugin - Callback capability.
         * @returns { number } Registration result, which indicates the ID of the callback. The value range is
         *     [0, 2<sup>64</sup>-1].
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 19100001 - Invalid parameter value.
         * @throws { BusinessError } 19100002 - Credential service busy due to too many tasks or duplicate tasks.
         * @throws { BusinessError } 19100003 - Credential task time out.
         * @throws { BusinessError } 19100004 - Credential service error.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        static registerPlugin(plugin: DlpConnPlugin): number;
        /**
         * Unregisters a callback from the SA.
         * 
         * > **NOTE**
         * >
         * > **unregisterPlugin** unregisters a plug-in from the SA.
         *
         * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE [since 21 - 24]
         * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE or ohos.permission.ACCESS_DLP_SERVICE [since 26.0.0]
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 19100001 - Invalid parameter value.
         * @throws { BusinessError } 19100002 - Credential service busy due to too many tasks or duplicate tasks.
         * @throws { BusinessError } 19100003 - Credential task time out.
         * @throws { BusinessError } 19100004 - Credential service error.
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        static unregisterPlugin(): void;
    }
    /**
     * Queries the list of URIs of DLP files that have been opened and matched the specified options.
     *
     * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE
     * @param { DlpFileQueryOptions } [options] - Represents the query options for DLP files.
     * @returns { Promise<Array<string>> } Returns list of URIs of the target DLP files that have been opened.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @stagemodelonly
     * @since 26.0.0
     */
    function queryOpenedEnterpriseDlpFiles(options?: DlpFileQueryOptions): Promise<Array<string>>;
    /**
     * Closes all currently open DLP files that match the specified options.
     *
     * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE
     * @param { DlpFileQueryOptions } [options] - Represents the query options for DLP files.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @stagemodelonly
     * @since 26.0.0
     */
    function closeOpenedEnterpriseDlpFiles(options?: DlpFileQueryOptions): Promise<void>;
    /**
     * Represents query options for DLP files.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @stagemodelonly
     * @since 26.0.0
     */
    export interface DlpFileQueryOptions {
        /**
         * User-defined classification label for an enterprise DLP file.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @stagemodelonly
         * @since 26.0.0
         */
        classificationLabel?: string;
    }
}
export default dlpPermission;