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
 * @file DLP
 * @kit DataProtectionKit
 */
import type { AsyncCallback, Callback } from './@ohos.base';
import type common from './@ohos.app.ability.common';
import type Want from './@ohos.app.ability.Want';
/**
 * Data loss prevention (DLP) is a system solution provided to prevent data disclosure. This module provides APIs for 
 * cross-device file access management, encrypted storage, and access authorization. DLP protects sensitive files 
 * through encryption and generates encrypted files in .dlp format (DLP files). When opening a DLP file, the system 
 * automatically creates an isolated DLP sandbox environment to ensure that the file content is not leaked to
 * unauthorized environments.
 * 
 * > **NOTE**
 * >
 * > - The initial APIs of this module are supported since API version 10. Newly added APIs will be marked with a
 * > superscript to indicate their earliest API version.
 * >
 * > - The kit to which **@ohos.dlpPermission** belongs has been changed from `DataLossPreventionKit` to `
 * > DataProtectionKit`. You are advised to use the new module name `@kit.DataProtectionKit` to import the module. If `@
 * > kit.DataLossPreventionKit` is imported, only the APIs before the change can be called and the APIs after the change
 * > cannot be used.
 *
 * @syscap SystemCapability.Security.DataLossPrevention
 * @since 10
 */
declare namespace dlpPermission {
    /**
     * Enumerates the operations that can be performed on a DLP file. For example, the DLP sandbox application can dim 
     * its button based on this parameter.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    export enum ActionFlagType {
        /**
         * View the file.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_VIEW = 0x00000001,
        /**
         * Save the file.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_SAVE = 0x00000002,
        /**
         * Save the file as another file.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_SAVE_AS = 0x00000004,
        /**
         * Edit the file.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_EDIT = 0x00000008,
        /**
         * Capture screenshots of the file.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_SCREEN_CAPTURE = 0x00000010,
        /**
         * Share the screen of the file.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_SCREEN_SHARE = 0x00000020,
        /**
         * Record the screen on which the file is open.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_SCREEN_RECORD = 0x00000040,
        /**
         * Copy the file.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_COPY = 0x00000080,
        /**
         * Print the file.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_PRINT = 0x00000100,
        /**
         * Export the file.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_EXPORT = 0x00000200,
        /**
         * Modify the permissions on the file.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        ACTION_PERMISSION_CHANGE = 0x00000400
    }
    /**
     * Enumerates the permissions on a DLP file.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    export enum DLPFileAccess {
        /**
         * The user has no permission on the file.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        NO_PERMISSION = 0,
        /**
         * The user has only the permission to read the file.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        READ_ONLY = 1,
        /**
         * Edit the file.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        CONTENT_EDIT = 2,
        /**
         * The user has full control on the file.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        FULL_CONTROL = 3
    }
    /**
     * Represents the permission information about a DLP file.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    export interface DLPPermissionInfo {
        /**
         * User permission on the DLP file, for example, read-only.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        dlpFileAccess: DLPFileAccess;
        /**
         * Operations that can be performed on the DLP file. It is a combination of different 
         * [ActionFlagTypes]{@link dlpPermission.ActionFlagType}.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        flags: number;
    }
    /**
     * Represents the information about a DLP file opened.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    export interface AccessedDLPFileInfo {
        /**
         * URI of the DLP file. The value contains up to 4095 bytes.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        uri: string;
        /**
         * Time when the file was last opened. The value must be greater than or equal to 0.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        lastOpenTime: number;
    }
    /**
     * Represents the sandbox retention information.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    export interface RetentionSandboxInfo {
        /**
         * Index of the DLP sandbox application. The value ranges from 1001 to 1100.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        appIndex: number;
        /**
         * Bundle name of the application. The value contains 7 to 128 bytes.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        bundleName: string;
        /**
         * URI list of the DLP files. The array has no length limit, but each string cannot exceed 4095 bytes.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 10
         */
        docUris: Array<string>;
    }
    /**
     * Checks whether a file is a DLP file based on the FD. This API uses a promise to return the result.
     *
     * @param { number } fd - FD of the file to be checked. The value range is [0, 2<sup>31</sup>-1]. If the value of
     *     **fd** is less than 0, **false** is returned. If the value of **fd** is greater than 2<sup>31</sup>-1, the
     *     value is truncated.
     * @returns { Promise<boolean> } Returns {@code true} if {@link fd} is a DLP file; returns {@code false} otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function isDLPFile(fd: number): Promise<boolean>;
    /**
     * Checks whether a file is a DLP file based on the FD. This API uses an asynchronous callback to return the result.
     *
     * @param { number } fd - FD of the file to be checked. The value range is [0, 2<sup>31</sup>-1]. If the value of
     *     **fd** is less than 0, **false** is returned. If the value of **fd** is greater than 2<sup>31</sup>-1, the
     *     value is truncated.
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
     * Obtains the permission information of this DLP file. This API uses a promise to return the result.
     *
     * @returns { Promise<DLPPermissionInfo> } Promise used to return the permission information about the DLP file. The
     *     operation is successful if no error is reported.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100006 - No permission to call this API,
     *     which is available only for DLP sandbox applications.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function getDLPPermissionInfo(): Promise<DLPPermissionInfo>;
    /**
     * Obtains the permission information of this DLP file. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<DLPPermissionInfo> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined**. Otherwise, **err** is an error object.
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
     * Obtains the original file name of a DLP file. This API returns the result synchronously.
     *
     * @param { string } fileName - Name of the target file. The value contains up to 255 bytes. Otherwise, **null** is
     *     returned.
     * @returns { string } Original name of the DLP file obtained. For example, if the DLP file name is **test.txt.dlp**
     *     , the original file name returned is **test.txt**. The value contains up to 255 bytes.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function getOriginalFileName(fileName: string): string;
    /**
     * Obtains the DLP file name extension. This API returns the result synchronously.
     *
     * @returns { string } DLP file name extension obtained. For example, if the original file name is **text.txt**, the
     *     encrypted DLP file name is **test.txt.dlp**, and the returned extension is **.dlp**.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function getDLPSuffix(): string;
    /**
     * Subscribes to a DLP file open event. The application will be notified when the DLP file is opened.
     *
     * @param { 'openDLPFile' } type - Event type. It has a fixed value of **openDLPFile**, which indicates the DLP file
     *     open event.
     * @param { Callback<AccessedDLPFileInfo> } listener - Callback invoked when a DLP file is opened. The application
     *     will be notified when the DLP file is opened.
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
     * Unsubscribes from the DLP file open event. The application will not be notified when a DLP file is opened.
     *
     * @param { 'openDLPFile' } type - Event type. It has a fixed value of **openDLPFile**, which indicates the DLP file
     *     open event.
     * @param { Callback<AccessedDLPFileInfo> } listener - Callback for the DLP file open event. The application will
     *     not be notified when a DLP file is opened. By default, this parameter is left blank, which unregisters all
     *     callbacks for the file open event.
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
     * Checks whether this application is running in a DLP sandbox environment. This API uses a promise to return the 
     * result.
     *
     * @returns { Promise<boolean> } Promise object. The value **true** means the application is running in a sandbox;
     *     the value **false** means the opposite.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function isInSandbox(): Promise<boolean>;
    /**
     * Checks whether this application is running in a DLP sandbox environment. This API uses an asynchronous callback 
     * to return the result.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object. The value **true** means the application is
     *     running in a sandbox; the value **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function isInSandbox(callback: AsyncCallback<boolean>): void;
    /**
     * Obtains the file name extension types that support DLP. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<string>> } Promise used to return the file name extension types obtained.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function getDLPSupportedFileTypes(): Promise<Array<string>>;
    /**
     * Obtains the file name extension types that support DLP. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { AsyncCallback<Array<string>> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function getDLPSupportedFileTypes(callback: AsyncCallback<Array<string>>): void;
    /**
     * Sets the sandbox retention state. This API uses an asynchronous callback to return the result. A sandbox 
     * application is automatically installed when a DLP file is opened, and automatically uninstalled when the DLP file
     * is closed. Once the sandbox retention state is set for a DLP file, the sandbox application will not be 
     * automatically uninstalled when the DLP file is closed. This API uses a promise to return the result.
     *
     * @param { Array<string> } docUris - URIs of the files to be set with the retention state. The array has no length
     *     limit, but each string cannot exceed 4,095 bytes. Otherwise, **null** is returned.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the sandbox retention state. This API uses an asynchronous callback to return the result. A sandbox 
     * application is automatically installed when a DLP file is opened, and automatically uninstalled when the DLP file
     * is closed. Once the sandbox retention state is set for a DLP file, the sandbox application will not be 
     * automatically uninstalled when the DLP file is closed. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { Array<string> } docUris - URIs of the files to be set with the retention state. The array has no length
     *     limit, but each string cannot exceed 4095 bytes.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
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
     * Cancels the sandbox retention state, that is, allows the sandbox application to be automatically uninstalled when
     * the DLP file is closed. This API uses a promise to return the result.
     *
     * @param { Array<string> } docUris - URIs of the files to be set with the retention state. The array has no length
     *     limit, but each string cannot exceed 4,095 bytes. Otherwise, **null** is returned.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function cancelRetentionState(docUris: Array<string>): Promise<void>;
    /**
     * Cancels the sandbox retention state, that is, allows the sandbox application to be automatically uninstalled when
     * the DLP file is closed. This API uses an asynchronous callback to return the result.
     *
     * @param { Array<string> } docUris - URIs of the files to be set with the retention state. The array has no length
     *     limit, but each string cannot exceed 4,095 bytes. Otherwise, **null** is returned.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function cancelRetentionState(docUris: Array<string>, callback: AsyncCallback<void>): void;
    /**
     * Obtains the sandbox applications in the retention state of an application. This API uses a promise to return the 
     * result.
     *
     * @param { string } [bundleName] - Bundle name of the application. By default, this parameter is left empty, which
     *     obtains the sandbox retention information about the current application. The value contains 7 to 128 bytes.
     *     If the value exceeds this range, **null** is returned.
     * @returns { Promise<Array<RetentionSandboxInfo>> } Promise used to return the sandbox retention information
     *     obtained.
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
     * Obtains the sandbox applications in the retention state of an application. This API uses an asynchronous callback
     * to return the result.
     *
     * @param { string } bundleName - Bundle name of the application. The value contains 7 to 128 bytes. If the value
     *     exceeds this range, **null** is returned.
     * @param { AsyncCallback<Array<RetentionSandboxInfo>> } callback - Callback used to return the result. If the
     *     operation is successful, **err** is **undefined**. Otherwise, **err** is an error object.
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
     * Obtains the sandbox applications in the retention state of an application. This API uses an asynchronous callback
     * to return the result.
     *
     * @param { AsyncCallback<Array<RetentionSandboxInfo>> } callback - Callback used to return the result. If the
     *     operation is successful, **err** is **undefined**. Otherwise, **err** is an error object.
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
     * Obtains the list of DLP files that are accessed recently. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<AccessedDLPFileInfo>> } Promise used to return the list of recently accessed files
     *     obtained.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100007 - No permission to call this API,
     *     which is available only for non-DLP sandbox applications.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    function getDLPFileAccessRecords(): Promise<Array<AccessedDLPFileInfo>>;
    /**
     * Obtains the list of DLP files that are accessed recently. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { AsyncCallback<Array<AccessedDLPFileInfo>> } callback - Callback used to return the result. If the
     *     operation is successful, **err** is **undefined**. Otherwise, **err** is an error object.
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
     * Represents information about the trigger of the DLP manager application.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @StageModelOnly
     * @since 11
     */
    export interface DLPManagerResult {
        /**
         * Result code returned after the DLP manager application is started and exits. The value ranges from 0 to 3.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @StageModelOnly
         * @since 11
         */
        resultCode: number;
        /**
         * Data returned after the DLP manager application is started and exits.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @StageModelOnly
         * @since 11
         */
        want: Want;
    }
    /**
     * Starts the DLP manager application on the current 
     * [UIAbility]{@link @ohos.app.ability.UIAbility:UIAbility} page in borderless mode. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > This API can be called only by domain accounts.
     *
     * @param { common.UIAbilityContext } context -
     *     [UIAbility]{@link @ohos.app.ability.UIAbility:UIAbility} context.
     * @param { Want } want - Object that requests the start of the DLP manager application.
     * @returns { Promise<DLPManagerResult> } Promise used to return the **DLPManagerResult** object.
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
     * Enumerates the DLP sandbox gathering policy types. **GATHERING** allows the DLP files of the same permission type
     * to be opened in a sandbox. For example, open different tab pages in a sandbox. **NON_GATHERING** allows different
     * DLP files to be opened in different sandboxes.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    export enum GatheringPolicyType {
        /**
         * Allows the DLP files of the same permission type to be opened in a sandbox. For example, the files of the 
         * same permission type can be opened in tab pages of a window.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        GATHERING = 1,
        /**
         * Allows the DLP files of different permission types to be opened in different sandboxes.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        NON_GATHERING = 2
    }
    /**
     * Obtains the DLP sandbox gathering policy. This API uses a promise to return the result.
     * 
     * This API is used to obtain the DLP sandbox gathering policy of the current system.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @returns { Promise<GatheringPolicyType> } Promise used to return the DLP sandbox gathering policy obtained.
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
     * Obtains the DLP sandbox gathering policy. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { AsyncCallback<GatheringPolicyType> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined**. Otherwise, **err** is an error object.
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
     * Represents the DLP sandbox information.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    export interface DLPSandboxInfo {
        /**
         * Index of the DLP sandbox application.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        appIndex: number;
        /**
         * Token ID of the DLP sandbox application.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        tokenID: number;
        /**
         * Index of the DLP sandbox application to be bound. This parameter is not returned by default. It is returned 
         * only when the sandbox application is previewed. **Model restriction:** This API can be used only in the stage model.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @stagemodelonly
         * @since 24
         */
        bindAppIndex?: number;
    }
    /**
     * Installs a DLP sandbox application for an application. The DLP sandbox creates an independent running environment 
     * for protected DLP files, which is isolated from the original application process. This ensures that data is 
     * securely transferred within the authorized scope. The sandbox application inherits the functions of the original
     * application but can access only authorized DLP files. This API uses a promise to return the result.
     * 
     * fter calling **installDLPSandbox** to install a sandbox, the system must call **uninstallDLPSandbox** to
     * uninstall the sandbox after using it.
     * 
     * Before a DLP file management application opens a protected file, the system needs to install a DLP sandbox for
     * the target application.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { string } bundleName - Bundle name of the application. The value contains 7 to 128 bytes. If the value is 
     *     out of range, error code 19100001 is thrown.
     * @param { DLPFileAccess } access - Permission on the DLP file. The permissions on a DLP file determine the access
     *     scope of the file. If the value is out of range, error code 19100001 is thrown.
     * @param { number } userId - Current user ID, which is the system account ID obtained by the account subsystem. The
     *     default super user ID is **100**. If the input value is invalid, error code 19100001 is thrown.
     * @param { string } uri - URI of the DLP file. The value contains up to 4095 bytes. If the value is out of range, 
     *     error code 19100001 is thrown.
     * @returns { Promise<DLPSandboxInfo> } Promise used to return the information about the sandbox application
     *     installed.
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
     * Installs a DLP sandbox application for an application. This API uses an asynchronous callback to return the 
     * result. After the API is called, the system creates a DLP sandbox for the application and returns the sandbox
     * information.
     * 
     * After calling **installDLPSandbox** to install a sandbox, the system must call **uninstallDLPSandbox** to
     * uninstall the sandbox after using it.
     * 
     * Before a DLP file management application opens a protected file, the system needs to install a DLP sandbox for 
     * the target application.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { string } bundleName - Bundle name of the application. The value contains 7 to 128 bytes. If the value is
     *      out of range, error code 19100001 is thrown.
     * @param { DLPFileAccess } access - Permission on the DLP file. The permissions on a DLP file determine the access
     *     scope of the file. If the value is out of range, error code 19100001 is thrown.
     * @param { number } userId - Current user ID, which is the system account ID obtained by the account subsystem. The
     *     default super user ID is **100**. If the value is out of range, error code 19100001 is thrown.
     * @param { string } uri - URI of the DLP file. The value contains up to 4095 bytes. If the value is out of range, 
     *     error code 19100001 is thrown.
     * @param { AsyncCallback<DLPSandboxInfo> } callback - Callback used to receive information about the application 
     *     sandbox. The callback parameters include **err** and **res**. **err** is undefined when the operation is 
     *     successful; otherwise, **err** is an error object. **res** is a DLPSandboxInfo object that contains 
     *     information about the application sandbox.
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
     * Uninstalls a DLP sandbox application for an application. This API uses a promise to return the result. After this
     * API is called, the system destroys the specified DLP sandbox environment and releases related resources.
     * 
     * Use this API to clear the corresponding sandbox environment.
     * 
     * This API can be called only after a DLP sandbox is installed by calling **installDLPSandbox**.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { string } bundleName - Bundle name of the application. The value contains 7 to 128 bytes. If the value is
     *     out of range, error code 19100001 is thrown.
     * @param { number } userId - Current user ID, which is the system account ID obtained by the account subsystem. The
     *     default super user ID is 100. If the value is out of range, error code 19100001 is thrown.
     * @param { number } appIndex - DLP sandbox index, which is the value returned after **installDLPSandbox** is
     *     successfully called. It is used to identify the installed DLP sandbox. If the value is out of range, error
     *     code 19100001 is thrown.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Uninstalls a DLP sandbox application for an application. This API uses an asynchronous callback to return the 
     * result. After this API is called, the system destroys the specified DLP sandbox environment and releases related 
     * resources.
     * 
     * Use this API to clear the sandbox environment.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { string } bundleName - Bundle name of the application. The value contains 7 to 128 bytes. If the value is
     *     out of range, error code 19100001 is thrown.
     * @param { number } userId - Current user ID, which is the system account ID obtained by the account subsystem. The
     *     default super user ID is **100**. If the value is out of range, error code 19100001 is thrown.
     * @param { number } appIndex - DLP sandbox index, which is the value returned after **installDLPSandbox** is
     *     successfully called. It is used to identify the installed DLP sandbox. The value range is [1000, 1100]. If 
     *     the value is out of range, error code 19100001 is thrown.
     * @param { AsyncCallback<void> } Callback used to receive the uninstallation result.
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
     * Represents the DLP sandbox state information.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    export interface DLPSandboxState {
        /**
         * Bundle name of the application. The value contains 7 to 128 bytes. If the value is out of range, error code
         * 19100001 is thrown.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        bundleName: string;
        /**
         * Index of the DLP sandbox application. The value range is [1000, 1100]. If the value is out of range, error 
         * code 19100001 is thrown.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use.
         * @since 10
         */
        appIndex: number;
    }
    /**
     * Registers a listener for the DLP sandbox uninstall event, which is used to detect changes in the sandbox 
     * nvironment. After the registration, the system notifies the application using a callback when the DLP sandbox is 
     * uninstalled.
     * 
     * After a listener is registered by calling on(), you are advised to call off() to unregister the listener
     * and release resources when the listener is no longer needed.
     *
     * The DLP management application needs to track the creation and destruction status of the sandbox to maintain the 
     * sandbox list or release resources.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { 'uninstallDLPSandbox' } type - Event type. It has a fixed value of **uninstallDLPSandbox**, which
     *     indicates the DLP sandbox application uninstall event.
     * @param { Callback<DLPSandboxState> } listener - Callback used when a sandbox application is uninstalled.
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
     * Unsubscribes from the DLP sandbox uninstall event. After the API is successfully called, the application will no 
     * longer receive callback notifications for the DLP sandbox uninstall event.
     * 
     * This API can be called only after a listener is registered using on().
     * 
     * When the DLP management application exits or no longer needs to track sandbox status changes, unregister the 
     * listener to release resources.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { 'uninstallDLPSandbox' } type - Event type. It has a fixed value of **uninstallDLPSandbox**, which
     *     indicates the DLP sandbox application uninstall event.
     * @param { Callback<DLPSandboxState> } [listener] - Callback used when a sandbox application is uninstalled. By
     *     default, this parameter is left blank, which unregisters all callbacks for the sandbox uninstall event.
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
     * Enumerates the types of authorized accounts.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use. [since 10 - 20]
     * @publicapi [since 21]
     * @since 10
     */
    export enum AccountType {
        /**
         * Cloud account.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        CLOUD_ACCOUNT = 1,
        /**
         * Domain account.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        DOMAIN_ACCOUNT = 2,
        /**
         * Enterprise account.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        ENTERPRISE_ACCOUNT = 4
    }
    /**
     * Represents the user authorization information.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use. [since 10 - 20]
     * @publicapi [since 21]
     * @since 10
     */
    export interface AuthUser {
        /**
         * Account of the user who can access the DLP file. The value contains up to 255 bytes.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        authAccount: string;
        /**
         * Type of the account.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        authAccountType: AccountType;
        /**
         * Permission granted to the user.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        dlpFileAccess: DLPFileAccess;
        /**
         * Time when the authorization expires. The value must be greater than or equal to 0.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        permExpiryTime: number;
    }
    /**
     * Represents the authorization information.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use. [since 10 - 20]
     * @publicapi [since 21]
     * @since 10
     */
    export interface DLPProperty {
        /**
         * Account of the owner who can set the permission. The value contains up to 255 bytes. If the value exceeds 
         * this range, **null** is returned.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        ownerAccount: string;
        /**
         * Account ID of the owner. The value contains up to 255 bytes. If the value exceeds this range, **null** is 
         * returned.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        ownerAccountID: string;
        /**
         * Account type of the owner.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        ownerAccountType: AccountType;
        /**
         * List of users who are authorized to access the DLP file. By default, this parameter is left blank.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        authUserList?: Array<AuthUser>;
        /**
         * Account of the contact. The value contains up to 255 bytes. If the value exceeds this range, **null** is 
         * returned.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        contactAccount: string;
        /**
         * Whether the file can be accessed offline. **true**: yes; **false**: no.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        offlineAccess: boolean;
        /**
         * Permission granted to everyone. This parameter is left blank by default.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 10 - 20]
         * @publicapi [since 21]
         * @since 10
         */
        everyoneAccessList?: Array<DLPFileAccess>;
        /**
         * Timestamp when the file permission has expired. This parameter is left blank by default. The value must be 
         * greater than or equal to 0. If the value is not within the range, **null** is returned.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 11 - 20]
         * @publicapi [since 21]
         * @since 11
         */
        expireTime?: number;
        /**
         * Whether the file can be opened after the permission expires (with the editing permission). This parameter is 
         * valid only when **expireTime** is not empty. This parameter is left empty by default.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi Hide this for inner system use. [since 20 - 20]
         * @publicapi [since 21]
         * @since 20
         */
        actionUponExpiry?: ActionType;
        /**
         * System account ID. 
         * The maximum length is 255. Default value: Empty. If the value exceeds this range, **null** is returned.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        fileId?: string;
        /**
         * Number of allowed opening times. This parameter is left empty by default.
         * The value must be greater than or equal to 0. If the value is not within the range, **null** is 
         * returned. Default value: 0.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        allowedOpenCount?: number;
        /**
         * Whether watermarks are required. **true**: yes; **false**: no.
         * Default value: false.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 23
         */
        waterMarkConfig?: boolean;
        /**
         * Validity period for file viewing, in seconds. After the validity period expires, the file is automatically 
         * closed. This parameter is left empty by default.
         * The value must be greater than or equal to 0. If the value 
         * is not within the range, **null** is returned. 
         * **Model restriction**: This API can be used only in the stage model.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @stagemodelonly
         * @since 23
         */
        countdown?: number;
        /**
         * Extended attribute of a DLP file. **Model restriction**: This API 
         * can be used only in the stage model.
         * Default value: Empty.
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
     * instance. The **DLPFile** object represents an opened DLP file handle, which encapsulates all operation APIs for
     * DLP files. After using the object, the system must call the **closeDLPFile** API to release resources to prevent
     * file handle leaks. Authorization is required when the **DLPFile** object is transferred across processes.
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
         * Adds a link file to the Filesystem in Userspace (FUSE). FUSE allows you to implement custom logic of the file
         * system in user space. The link file is a virtual file in the FUSE, which is used to map to the DLP file. The
         * read and write on the link file will be synchronized to the actual DLP file. This API uses a promise to
         * return the result.
         * 
         * When a DLP application needs to access a DLP file using a standard file API, it can add a link file as the 
         * virtual plaintext file to map the DLP file, and then perform read and write on the link file as it does on a 
         * common file.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { string } linkFileName - Name of the link file in the FUSE. The value contains up to 255 bytes. If 
         *     the value is out of range, error code 19100001 is returned.
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
         * Adds a link file to the FUSE. This API uses an asynchronous callback to return the result. After this API is 
         * successfully called, a virtual file used to map the DLP file is created in the FUSE.
         * 
         * This API is called when a DLP application needs to access a DLP file using a standard file API.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { string } linkFileName - Name of the link file in the FUSE. The value contains up to 255 bytes. If 
         *     the value is out of range, error code 19100001 is thrown.
         * @param { AsyncCallback<void> } callback - Callback used to receive the result of adding a link file.
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
         * Stops the read and write on the FUSE. This API uses a promise to return the result. After the API is 
         * successfully called, the read and write on the link file are stopped.
         * 
         * After calling **stopFuseLink()** to stop the read and write on the FUSE, the system must call 
         * **resumeFuseLink()** to resume the read and write.
         * 
         * Before deleting a link file, stop the read and write to ensure secure file operations.
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
         * Stops the read and write on the FUSE. This API uses an asynchronous callback to return the result. After the 
         * API is successfully called, the read and write on the link file are stopped.
         * 
         * Before deleting a link file, stop the read and write.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { AsyncCallback<void> } callback - allback used to receive the result of stopping read and write on 
         *      the FUSE. The callback parameter is **err**. **err** is **undefined** when the operation is successful; 
         *      otherwise, err is an error object.
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
         * Resumes the read and write on the FUSE. This API uses a promise to return the result. After the API is 
         * successfully called, the read and write on the link file are resumed.
         * 
         * This API can be called to resume read and write only after stopFuseLink() is called to stop the read and 
         * write operations.
         * 
         * After the link file is replaced, the read and write need to be resumed for normal file access.
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
         * Resumes the read and write on the FUSE. This API uses an asynchronous callback to return the result. After 
         * the API is successfully called, the read and write on the link file are resumed.
         * 
         * After the link file is replaced, the read and write need to be resumed.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { AsyncCallback<void> } callback - Callback used to receive the result of resume the read and write on 
         *     the FUSE.
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
         * Replaces a link file. This API uses a promise to return the result. After the API is successfully called, the 
         * current link file is replaced with the new link file.
         * 
         * When you need to access a different DLP file, you can replace the link file to change the file mapping.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { string } linkFileName - Name of the link file in the FUSE. The value contains up to 255 bytes. If 
         *     the value is out of range, error code 19100001 is thrown.
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
         * Replaces a link file. This API uses an asynchronous callback to return the result. After the API is 
         * successfully called, the current link file is replaced with the new link file.
         * 
         * When you need to access a different DLP file, you can replace the link file.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { string } linkFileName - Name of the link file in the FUSE. The value contains up to 255 bytes. If 
         *     the value is out of range, error code 19100001 is thrown.
         * @param { AsyncCallback<void> } callback - Callback used to receive the result of replacing a link file. The
         *     callback parameter is **err**. **err** is **undefined** when the operation is successful; otherwise, err 
         *     is an error object.
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
         * Deletes a link file from the FUSE. This API uses a promise to return the result. After the API is
         * successfully called, the specified link file is deleted from the FUSE.
         * 
         * This API is used to clear the link file mapping after DLP file access is complete.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { string } linkFileName - Name of the link file in the FUSE. The value contains up to 255 bytes. If 
         *     the value is out of range, error code 19100001 is thrown.
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
         * Deletes a link file from the FUSE. This API uses an asynchronous callback to return the result. After the API 
         * is successfully called, the specified link file is deleted from the FUSE.
         * 
         * This API is used to clear the link file mapping after DLP file access is complete.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { string } linkFileName - Name of the link file in the FUSE. The value contains up to 255 bytes. If 
         *     the value is out of range, error code 19100001 is thrown.
         * @param { AsyncCallback<void> } callback - Callback used to receive the result of deleting a link file.
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
         * This API is used when the file owner decides to disable the DLP protection for a file and convert it into a 
         * common file for free sharing.
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
         * This API is used when the file owner decides to disable the DLP protection for a file.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { number } plaintextFd - FD of the target plaintext file. The value range is [0, 2<sup>31</sup>-1]. If 
         *     the value is out of range, the excess part will be truncated.
         * @param { AsyncCallback<void> } callback - Callback used to receive the result of recovering the plaintext of 
         *     a DLP file. The callback parameter is **err**. **err** is **undefined** when the operation is successful;
         *     otherwise, err is an error object.
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
         * Closes a **DLPFile** object. This API uses a promise to return the result.
         * 
         * After calling **openDLPFile()** to return a **DLPFile** object, the system must call **closeDLPFile()** to 
         * release resources after using the object.
         * 
         * This API is used when the file owner decides to close a DLP file.
         * 
         * > **NOTE**
         * >
         * > If a DLP file is no longer used, close the **dlpFile** object to release the memory.
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
         * Closes a **DLPFile** object. This API uses an asynchronous callback to return the result.
         * 
         * After calling **openDLPFile()** to return a **DLPFile** object, the system must call **closeDLPFile()** to 
         * release resources after using the object.
         * 
         * This API is used when the file owner decides to close a DLP file.
         * 
         * > **NOTE**
         * >
         * > If a DLP file is no longer used, close the **dlpFile** instance to release the memory.
         *
         * @permission ohos.permission.ACCESS_DLP_FILE
         * @param { AsyncCallback<void> } callback - Callback used to receive the result of closing a **DLPFile** 
         *     object.
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
     * Generates a **DLPFile** object, which is an encrypted file that can be accessed only by authorized users. The
     * users can have the full control permission or read-only permission on the DLP file. This API uses a promise to 
     * return the result.
     * 
     * After calling **generateDLPFile** to return a **DLPFile** object, the system must call **closeDLPFile** to 
     * release resources after using the object.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { number } plaintextFd - FD of the plaintext file to be encrypted. The value range is
     *     [0, 2<sup>31</sup>-1]. If the value is out of range, the excess part will be truncated.
     * @param { number } ciphertextFd - FD of the encrypted file. The value range is [0, 2<sup>31</sup>-1]. If the value 
     *     is out of range, the excess part will be truncated.
     * @param { DLPProperty } property - Authorization information, which includes the authorized user list, owner
     *     account, and contact account information.
     * @returns { Promise<DLPFile> } Promise used to return the result. If the value is **resolve**, a **DLPFile**
     *     object is returned, indicating that a DLP file is successfully generated. If the value is **reject**, an 
     *     error is returned, indicating that the DLP file fails to be generated.
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
     * have the full control permission or read-only permission on the DLP file. Obtains a **DLPFile** object. This API 
     * uses an asynchronous callback to return the result. After using the **DLPFile** object, call **closeDLPFile** to 
     * 
     * After calling **generateDLPFile()** to return a **DLPFile** object, the system must call **closeDLPFile()** to
     * release resources after using the object.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { number } plaintextFd - FD of the plaintext file to be encrypted. The value range is
     *      [0, 2<sup>31</sup>-1]. If the value is out of range, the excess part will be truncated.
     * @param { number } ciphertextFd - FD of the encrypted file. The value range is [0, 2<sup>31</sup>-1]. If the value 
     *     is out of range, the excess part will be truncated.
     *     <br>The value should be an integer.
     * @param { DLPProperty } property - Authorization information, which includes the authorized user list, owner
     *     account, and contact account information.
     * @param { AsyncCallback<DLPFile> } callback - Callback used to receive the result of generating a DLP file. The
     *     callback parameters include **err** and **res**. **err** is undefined when the operation is successful; 
     *     otherwise, err is an error object. **res** is a **DLPFile** object that represents the DLP file generated.
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
     * Opens a DLP file. After the API is successfully called, the **DLPFile** object is returned, which can be used to 
     * manage the permissions on the DLP file and perform related operations. This API uses a promise to return the 
     * result.
     * 
     * After calling **openDLPFile()** to return a **DLPFile** object, the system must call **closeDLPFile** to release 
     * resources after using the object.
     *
     * When a DLP management application or an authorized application needs to access a DLP file, it must first open the
     * file to obtain the managed object.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { number } ciphertextFd - FD of the encrypted file.
     * @param { string } appId - ID of the caller. The value contains 8 to 1024 bytes.
     * @returns { Promise<DLPFile> } Promise If the value is **resolve**, a **DLPFile** object is returned, indicating 
     *      that a DLP file is successfully opened. If the value is **reject**, an error is returned, indicating that the
     *     that the DLP file fails to be opened.
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
     * Opens a DLP file. This API uses an asynchronous callback to return the result. After the API is successfully 
     * called, the **DLPFile** object is returned, which can be used to manage the permissions on the DLP file and 
     * perform related operations. After using the **DLPFile** object, call **closeDLPFile** to close the object to
     * prevent resource leakage.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { number } ciphertextFd - FD of the encrypted file.
     * @param { string } appId - ID of the caller. The value contains 8 to 1024 bytes. If the value is out of range, 
     *     error code 19100001 is returned.
     * @param { AsyncCallback<DLPFile> } callback - Callback used to receive the result of opening a DLP file. The 
     *     callback parameters include **err** and **res**. **err** is **undefined** when the operation is successful; 
     *     otherwise, err is an error object. **res** is a **DLPFile** object that represents the DLP file opened.
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
         * JSON string of an enterprise custom policy. 
         * The maximum length is 4139304.
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
         * The maximum length is 255. Default value: Empty.     
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @stagemodelonly
         * @since 26.0.0
         */
        classificationLabel?: string;
    }

    /**
     * Set the list of applications that are subject to enterprise DLP control.
     *
     * @permission ohos.permission.DLP_POLICY_MANAGER
     * @param { Array<string> } appLists - The appIdentifiers of applications to be put under controlled
     *     <br>The maximum length is 100.
     *     <br>The value range of Array is [0, 100], and the value range of String is [0, 4096].
     * @param { number } [userId] - The target userId for which the controlled app list is configured.
     *     If not specified, the current user is used by default
     *     <br>The value range is all integers.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @throws { BusinessError } 19100023 - The specified userId is inconsistent with the current userId.
     * @throws { BusinessError } 19100024 - The specified userId belongs to a personal space user and
     *     cannot be managed.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @stagemodelonly
     * @since 26.0.0
     */
    function setControlledAppLists(appLists: Array<string>, userId?: number): Promise<void>;

    /**
     * Obtain the list of applications that are subject to enterprise DLP control for the current user.
     *
     * @permission ohos.permission.DLP_POLICY_MANAGER
     * @returns { Promise<Array<string>> } Promise that returns the appIdentifiers of controlled application
     *     for the current user.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @stagemodelonly
     * @since 26.0.0
     */
    function getControlledAppLists(): Promise<Array<string>>;
}
export default dlpPermission;