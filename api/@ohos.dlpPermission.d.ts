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
 * Data loss prevention (DLP) is a system solution provided to prevent data disclosure. This module provides APIs for 
 * cross-device file access management, encrypted storage, and access authorization.
 *
 * > **NOTE**
 * > The kit to which **@ohos.dlpPermission** belongs has been changed from `DataLossPreventionKit` to `
 * > DataProtectionKit`. You are advised to use the new module name `@kit.DataProtectionKit` to import the module. If `@
 * > kit.DataLossPreventionKit` is imported, only the APIs before the change can be called and the APIs after the change
 * > cannot be used.
 * 
 * @syscap SystemCapability.Security.DataLossPrevention
 * @since 10
 */
declare namespace dlpPermission {
  /**
   * Enumerates the types of actions that can be performed on a DLP file. For example, the DLP sandbox application can dim 
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
     * URI list of the DLP files. The array has no length limit, but each string cannot exceed 4095 bytes
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 10
     */
    docUris: Array<string>;
  }
  /**
   * Checks whether a file is a DLP file. This method uses a promise to return the result.
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
   * @returns { string }  Original name of the DLP file obtained. For example, if the DLP file name is **test.txt.dlp**
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
   * @returns { Promise<boolean> } Returns {@code true} Promise object. The value **true** means the application is running in a sandbox;
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
   * Obtains the file name extension types that support DLP. This API uses an asynchronous callback to return the result.
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
   *i
   * @returns { Promise<Array<AccessedDLPFileInfo>> } Promise used to return the list of recently accessed files
   *     obtaned.
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
   *     result.
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
   * Represents the installed DLP sandbox application info.
   *
   * @syscap SystemCapability.Security.DataLossPrevention
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export interface DLPSandboxInfo {
    /**
     * Index of the DLP sandbox application
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
     * Index of the DLP sandbox application to be bound. **Model restriction**: This API can be used only in the stage model.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24
     */
    bindAppIndex?: number;
  }
  /**
   * Installs a DLP sandbox application for an application. This API uses a promise to return the sandbox application
   * installed.
   *
   * @permission ohos.permission.ACCESS_DLP_FILE
   * @param { string } bundleName - Bundle name of the application. The value contains 7 to 128 bytes.
   * @param { DLPFileAccess } access - Permission on the DLP file.
   * @param { number } userId - Current user ID, which is the system account ID obtained by the account subsystem. The
   *     default super user ID is **100**.
   * @param { string } uri - URI of the DLP file. The value contains up to 4095 bytes.
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
   * Installs a DLP sandbox application for an application. This API uses an asynchronous callback to return the index
   * of the sandbox application installed.
   *
   * @permission ohos.permission.ACCESS_DLP_FILE
   * @param { string } bundleName - Bundle name of the application. The value contains 7 to 128 bytes.
   * @param { DLPFileAccess } access - Permission on the DLP file.
   * @param { number } userId - Current user ID, which is the system account ID obtained by the account subsystem. The
   *     default super user ID is **100**.
   * @param { string } uri - URI of the DLP file. The value contains up to 4095 bytes.
   * @param { AsyncCallback<DLPSandboxInfo> } callback - Callback used to return the information about the sandbox
   *     application installed.
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
   * Uninstalls a DLP sandbox application for an application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_DLP_FILE
   * @param { string } bundleName - Bundle name of the application. The value contains 7 to 128 bytes.
   * @param { number } userId - Current user ID, which is the system account ID obtained by the account subsystem. The
   *     default super user ID is **100**.
   * @param { number } appIndex - DLP sandbox index.
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
   * result.
   *
   * @permission ohos.permission.ACCESS_DLP_FILE
   * @param { string } bundleName - Bundle name of the application. The value contains 7 to 128 bytes.
   * @param { number } userId - Current user ID, which is the system account ID obtained by the account subsystem. The
   *     default super user ID is **100**.
   * @param { number } appIndex - DLP sandbox index, which is the value returned after **installDLPSandbox** is
   *     successfully called.
   * @param { AsyncCallback<void> } callback - Callback used to return the uninstallation result.
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
   * DLP sandbox identity.
   *
   * @syscap SystemCapability.Security.DataLossPrevention
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export interface DLPSandboxState {
    /**
     * Bundle name of the application. The value contains 7 to 128 bytes
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    bundleName: string;
    /**
     * Index of the DLP sandbox application.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    appIndex: number;
  }
  /**
   * Subscribes to a DLP sandbox uninstall event.
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
   * Unsubscribes from the DLP sandbox uninstall event.
   *
   * @permission ohos.permission.ACCESS_DLP_FILE
   * @param { 'uninstallDLPSandbox' } type - Event type. It has a fixed value of **uninstallDLPSandbox**, which indicates the
   *     DLP sandbox application uninstall event.
   * @param { Callback<DLPSandboxState> } listener - Callback used when a sandbox application is uninstalled. By default, this
   *     parameter is left blank, which unregisters all callbacks for the sandbox uninstall event.
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
     * @systemapi Hide this for inner system use.[since 10 - 20]
     * @publicapi [since 21]
     * @since 10
     */
    permExpiryTime: number;
  }

  /**
   * Represents the DLP file property.
   *
   * @interface DLPProperty
   * @syscap SystemCapability.Security.DataLossPrevention
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  /**
   * Represents the DLP file property.
   *
   * @interface DLPProperty
   * @syscap SystemCapability.Security.DataLossPrevention
   * @since 21
   */
  export interface DLPProperty {
    /**
     * Owner account of the DLP file.
     *
     * @type { string }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    /**
     * Owner account of the DLP file.
     *
     * @type { string }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    ownerAccount: string;

    /**
     * Owner account ID of the DLP file.
     *
     * @type { string }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    /**
     * Owner account ID of the DLP file.
     *
     * @type { string }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    ownerAccountID: string;

    /**
     * Type of the owner account of the DLP file.
     *
     * @type { AccountType }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    /**
     * Type of the owner account of the DLP file.
     *
     * @type { AccountType }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    ownerAccountType: AccountType;

    /**
     * Authorized users of the DLP file.
     *
     * @type { ?Array<AuthUser> }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    /**
     * Authorized users of the DLP file.
     *
     * @type { ?Array<AuthUser> }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    authUserList?: Array<AuthUser>;

    /**
     * Contact account of the DLP file.
     *
     * @type { string }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    /**
     * Contact account of the DLP file.
     *
     * @type { string }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    contactAccount: string;

    /**
     * Whether the DLP file can be accessed offline.
     * If the DLP file supports offline access, the credential server
     * needs to be connected to the network only when the DLP file is opened for the first time.
     *
     * @type { boolean }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    /**
     * Whether the DLP file can be accessed offline.
     * If the DLP file supports offline access, the credential server
     * needs to be connected to the network only when the DLP file is opened for the first time.
     *
     * @type { boolean }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    offlineAccess: boolean;

    /**
     * Everyone access list for the DLP file.
     *
     * @type { ?Array<DLPFileAccess> }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    /**
     * Everyone access list for the DLP file.
     *
     * @type { ?Array<DLPFileAccess> }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    everyoneAccessList?: Array<DLPFileAccess>;

    /**
     * Timestamp of the time when the DLP file expires.
     *
     * @type { ?number }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    /**
     * Timestamp of the time when the DLP file expires.
     *
     * @type { ?number }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    expireTime?: number;

    /**
     * Defines the action to perform when the DLP file has expired.
     * @type { ?ActionType }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 20
     */
    /**
     * Defines the action to perform when the DLP file has expired.
     * @type { ?ActionType }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    actionUponExpiry?: ActionType;

    /**
     * Id of file.
     * @type { ?string }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    fileId?: string;

    /**
     * Defines the number of times the DLP file can be opened.
     * @type { ?number }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    allowedOpenCount?: number;

    /**
     * Defines whether watermarking is required.
     * @type { ?boolean }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 23
     */
    waterMarkConfig?: boolean;

    /**
     * Defines the countdown for the DLP file can be opened.
     * @type { ?number }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @stagemodelonly
     * @since 23
     */
    countdown?: number;

    /**
     * Defines the extended fields of the DLP file.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @stagemodelonly
     * @since 24
     */
    extensionFields?: Record<string, Object>;
  }

  /**
   * Defines the DLP file object.
   *
   * @interface DLPFile
   * @syscap SystemCapability.Security.DataLossPrevention
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  export interface DLPFile {
    /**
     * DLP file property.
     *
     * @type { DLPProperty }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    dlpProperty: DLPProperty;

    /**
     * Adds a link file for the DLP file. This method uses a promise to return the result.
     * The link file is implemented through the Filesystem in Userspace (FUSE).
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { string } linkFileName - Indicates the name of link file to add.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
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
     * Adds a link file for the DLP file. This method uses an asynchronous callback to return the result.
     * The link file is implemented through the FUSE.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { string } linkFileName - Indicates the name of link file to add.
     * @param { AsyncCallback<void> } callback - Indicates the callback of addDLPLinkFile.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
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
     * Stops the FUSE link between the DLP file and a link file. This method uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @returns { Promise<void> } The promise returned by the function.
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
     * Stops the FUSE link between the DLP file and a link file. This method uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { AsyncCallback<void> } callback - Indicates the callback of stopFuseLink.
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
     * Resumes the FUSE link between the DLP file and a link file. This method uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @returns { Promise<void> } The promise returned by the function.
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
     * Resumes the FUSE link between the DLP file and a link file. This method uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { AsyncCallback<void> } callback - Indicates the callback of resumeFuseLink.
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
     * Replaces the link file of the DLP file. This method uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { string } linkFileName - Indicates the name of link file.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
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
     * Replaces the link file of the DLP file. This method uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { string } linkFileName - Indicates the name of link file.
     * @param { AsyncCallback<void> } callback - Indicates the callback of replaceDLPLinkFile.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
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
     * Deletes a link file of the DLP file. This method uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { string } linkFileName - Indicates the name of link file to delete.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
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
     * Deletes a link file of the DLP file. This method uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { string } linkFileName - Indicates the name of link file to delete.
     * @param { AsyncCallback<void> } callback - Indicates the callback of deleteDLPLinkFile.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
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
     * Recovers the file in plaintext from the DLP file. This method uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { number } plaintextFd - Indicates the file descriptor of the file in plaintext.
     * @returns { Promise<void> } The promise returned by the function.
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
     * @throws { BusinessError } 19100010 - The DLP file is read only.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    recoverDLPFile(plaintextFd: number): Promise<void>;

    /**
     * Recovers the file in plaintext from the DLP file. This method uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { number } plaintextFd - Indicates the file descriptor of the file in plaintext.
     * @param { AsyncCallback<void> } callback - Indicates the callback of recoverDLPFile.
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
     * @throws { BusinessError } 19100010 - The DLP file is read only.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    recoverDLPFile(plaintextFd: number, callback: AsyncCallback<void>): void;

    /**
     * Closes the DLP file when the object is no longer used. This method uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @returns { Promise<void> } The promise returned by the function.
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
     * Closes the DLP file when the object is no longer used. This method uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.ACCESS_DLP_FILE
     * @param { AsyncCallback<void> } callback - Indicates the callback of closeDLPFile.
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
   * Generates a DLP file. This method uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_DLP_FILE
   * @param { number } plaintextFd - Indicates the file descriptor of the file in plaintext.
   * @param { number } ciphertextFd - Indicates the file descriptor of the DLP file.
   * @param { DLPProperty } property - Indicates the property of the DLP file.
   * @returns { Promise<DLPFile> } Returns the {@link DLPFile}.
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
   * Generates a DLP file. This method uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ACCESS_DLP_FILE
   * @param { number } plaintextFd - Indicates the file descriptor of the file in plaintext.
   * @param { number } ciphertextFd - Indicates the file descriptor of the DLP file.
   * @param { DLPProperty } property - Indicates the property of the DLP file.
   * @param { AsyncCallback<DLPFile> } callback - Indicates the callback of generateDLPFile.
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
  function generateDLPFile(
    plaintextFd: number,
    ciphertextFd: number,
    property: DLPProperty,
    callback: AsyncCallback<DLPFile>
  ): void;

  /**
   * Opens a DLP file. This method uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_DLP_FILE
   * @param { number } ciphertextFd - Indicates the file descriptor of the DLP file to open.
   * @param { string } appId - Indicates the app ID of the application which opens the DLP file.
   * @returns { Promise<DLPFile> } Returns the {@link DLPFile}.
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
   * Opens a DLP file. This method uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ACCESS_DLP_FILE
   * @param { number } ciphertextFd - Indicates the file descriptor of the DLP file to open.
   * @param { string } appId - Indicates the app ID of the application which opens the DLP file.
   * @param { AsyncCallback<DLPFile> } callback - Indicates the callback of openDLPFile.
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
   * Sets sandbox application configuration. This method uses a promise to return the result.
   *
   * @param { string } configInfo - Configuration of the sandbox application.
   * @returns { Promise<void> } Promise used to return the result.
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
   * Cleans sandbox application configuration. This method uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise used to return the result.
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
   * Obtains sandbox application configuration. This method uses a promise to return the result.
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
  * Checks whether the current system provides the DLP feature. This method uses a promise to return the result.
  *
  * @returns { Promise<boolean> } Promise used to return the result.
  * @throws { BusinessError } 19100011 - The system ability works abnormally.
  * @syscap SystemCapability.Security.DataLossPrevention
  * @since 12
  */
  function isDLPFeatureProvided(): Promise<boolean>;

  /**
   * Enumerates the action types when exceed expiry time.
   * @enum { number } Valuable
   * @syscap SystemCapability.Security.DataLossPrevention
   * @systemapi Hide this for inner system use.
   * @since 20
   */
  /**
   * Enumerates the action types when exceed expiry time.
   * @enum { number } Valuable
   * @syscap SystemCapability.Security.DataLossPrevention
   * @since 21
   */
  export enum ActionType {
    /**
     * NOT_OPEN, which not allows DLP files to be opened exceed expiry time.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 20
     */
    /**
     * NOT_OPEN, which not allows DLP files to be opened exceed expiry time.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    NOT_OPEN = 0,

    /**
     * OPEN, which allows DLP files to be opened exceed expiry time.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 20
     */
    /**
     * OPEN, which allows DLP files to be opened exceed expiry time.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    OPEN = 1
  }

  /**
   * Represents the DLP file Custom property.
   * 
   * @interface CustomProperty
   * @syscap SystemCapability.Security.DataLossPrevention
   * @systemapi Hide this for inner system use.
   * @since 20
   */
  /**
   * Represents the DLP file Custom property.
   * 
   * @interface CustomProperty
   * @syscap SystemCapability.Security.DataLossPrevention
   * @since 21
   */
  export interface CustomProperty {
    /**
     * User defined information for enterprise space.
     * 
     * @type { string }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi Hide this for inner system use.
     * @since 20
     */
    /**
     * User defined information for enterprise space.
     * 
     * @type { string }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    enterprise: string;
    /**
     * Represents query options for DLP files.
     *
     * @type { ?DlpFileQueryOptions }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @stagemodelonly
     * @since 26.0.0
     */
    options?: DlpFileQueryOptions;
  }

  /**
   * Generates a DLP file.
   *
   * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE
   * @param { number } plaintextFd - FD of the file in plaintext.
   * @param { number } dlpFd - FD of the DLP file to generate.
   * @param { DLPProperty } property - General DLP policy to use.
   * @param { CustomProperty } customProperty - Custom DLP policy to use.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
   * @throws { BusinessError } 19100001 - Invalid parameter value.
   * @throws { BusinessError } 19100002 - Credential service busy due to too many tasks or duplicate tasks.
   * @throws { BusinessError } 19100003 - Credential task time out.
   * @throws { BusinessError } 19100004 - Credential service error.
   * @throws { BusinessError } 19100005 - Credential authentication server error.
   * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
   * @throws { BusinessError } 19100011 - The system ability works abnormally.
   * @throws { BusinessError } 19100014 - Account not logged in.
   * @syscap SystemCapability.Security.DataLossPrevention
   * @systemapi Hide this for inner system use.
   * @since 20
   */
  /**
   * Generates a DLP file.
   *
   * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE
   * @param { number } plaintextFd - FD of the file in plaintext.
   * @param { number } dlpFd - FD of the DLP file to generate.
   * @param { DLPProperty } property - General DLP policy to use.
   * @param { CustomProperty } customProperty - Custom DLP policy to use.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 19100001 - Invalid parameter value.
   * @throws { BusinessError } 19100002 - Credential service busy due to too many tasks or duplicate tasks.
   * @throws { BusinessError } 19100003 - Credential task time out.
   * @throws { BusinessError } 19100004 - Credential service error.
   * @throws { BusinessError } 19100005 - Credential authentication server error.
   * @throws { BusinessError } 19100009 - Failed to operate the DLP file.
   * @throws { BusinessError } 19100011 - The system ability works abnormally.
   * @throws { BusinessError } 19100014 - Account not logged in.
   * @syscap SystemCapability.Security.DataLossPrevention
   * @since 21
   */
  function generateDlpFileForEnterprise(plaintextFd: number, dlpFd: number, property: DLPProperty, customProperty: CustomProperty): Promise<void>;

  /**
   * Queries the DLP file policy.
   * 
   * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE
   * @param { number } dlpFd FD of the target DLP file.
   * @returns { Promise<string> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
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
   * @systemapi Hide this for inner system use.
   * @since 20
   */
  /**
   * Queries the DLP file policy.
   * 
   * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE
   * @param { number } dlpFd FD of the target DLP file.
   * @returns { Promise<string> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
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
   * @since 21
   */
  function queryDlpPolicy(dlpFd: number): Promise<string>;

  /**
   * Decrypts a DLP file. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE
   * @param { number } dlpFd FD of the target DLP file.
   * @param { number } plaintextFd FD of the target DLP file.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications use system APIs.
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
   * @systemapi Hide this for inner system use.
   * @since 20
   */
  /**
   * Decrypts a DLP file. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE
   * @param { number } dlpFd FD of the target DLP file.
   * @param { number } plaintextFd FD of the target DLP file.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
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
   * @since 21
   */
  function decryptDlpFile(dlpFd: number, plaintextFd: number): Promise<void>;

  /**
   * Customization policy for enterprise Application settings.
   *
   * @interface EnterprisePolicy
   * @syscap SystemCapability.Security.DataLossPrevention
   * @since 21
   */
  export interface EnterprisePolicy {
    /**
     * Enterprise custom policy string.
     *
     * @type { string }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    policyString: string;
  }

  /**
   * Set enterprise application protection policies.
   *
   * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE
   * @param { EnterprisePolicy } policy - Indicates the enterprise custom policy string.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 19100001 - Invalid parameter value.
   * @throws { BusinessError } 19100011 - The system ability works abnormally.
   * @throws { BusinessError } 19100021 - Failed to set the enterprise policy.
   * @syscap SystemCapability.Security.DataLossPrevention
   * @since 21
   */
  function setEnterprisePolicy(policy: EnterprisePolicy): void;

  /**
   * Connect server.
   * 
   * @interface DlpConnPlugin
   * @syscap SystemCapability.Security.DataLossPrevention
   * @since 21
   */
  export interface DlpConnPlugin {
    /**
     * Connect server.
     * 
     * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE[since 21 - 24]
     * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE or ohos.permission.ACCESS_DLP_SERVICE[since 26.0.0]
     * @param { string } requestId Id request.
     * @param { string } requestData Context in request.
     * @param { Callback<string> } callback Callback fun.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    connectServer(requestId: string, requestData: string, callback: Callback<string>): void;
  }

  /**
   * Manager of connect.
   * 
   * @syscap SystemCapability.Security.DataLossPrevention
   * @since 21
   */
  export class DlpConnManager {
    /**
     * constructor.
     * 
     * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE[since 21 - 24]
     * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE or ohos.permission.ACCESS_DLP_SERVICE[since 26.0.0]
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    constructor();

    /**
     * register plugin.
     * 
     * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE[since 21 - 24]
     * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE or ohos.permission.ACCESS_DLP_SERVICE[since 26.0.0]
     * @param { DlpConnPlugin } plugin Plugin.
     * @returns { number } Id for plugin.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100002 - Credential service busy due to too many tasks or duplicate tasks.
     * @throws { BusinessError } 19100003 - Credential task time out.
     * @throws { BusinessError } 19100004 - Credential service error.
     * @static
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    static registerPlugin(plugin: DlpConnPlugin): number;

    /**
     * unregister plugin.
     * 
     * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE[since 21 - 24]
     * @permission ohos.permission.ENTERPRISE_ACCESS_DLP_FILE or ohos.permission.ACCESS_DLP_SERVICE[since 26.0.0]
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100002 - Credential service busy due to too many tasks or duplicate tasks.
     * @throws { BusinessError } 19100003 - Credential task time out.
     * @throws { BusinessError } 19100004 - Credential service error.
     * @static
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
   * @interface DlpFileQueryOptions
   * @syscap SystemCapability.Security.DataLossPrevention
   * @stagemodelonly
   * @since 26.0.0
   */
  export interface DlpFileQueryOptions {  
    /**
     * User-defined classification label for an enterprise DLP file.
     *
     * @type { ?string }
     * @syscap SystemCapability.Security.DataLossPrevention
     * @stagemodelonly
     * @since 26.0.0
     */
    classificationLabel?: string;
  }
}
export default dlpPermission;