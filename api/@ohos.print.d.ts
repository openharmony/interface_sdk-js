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

import type { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/Context';

/**
 * The **print** module provides APIs for basic print operations.
 *
 * @syscap SystemCapability.Print.PrintFramework
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace print {

  /**
   * Implements event listeners for print jobs.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrintTask {
    /**
     * Subscribes to the block events of a print job. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.PRINT
     * @param { 'block' } type - Listening type.<br>The value is fixed at **'block'**.<br>It means that the print job is
     *     blocked.
     * @param { Callback<void> } callback - Callback used to notify the caller that the print job is blocked.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    on(type: 'block', callback: Callback<void>): void;

    /**
     * Register event callback when the current print task is in process.
     *
     * @permission ohos.permission.PRINT
     * @param { Callback<void> } callback - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    onBlock(callback: Callback<void>): void;

    /**
     * Subscribes to the success events of a print job. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.PRINT
     * @param { 'succeed' } type - Listening type.<br>The value is fixed at **'succeed'**.<br>It means that the print
     *     job is successful.
     * @param { Callback<void> } callback - Callback used to notify the caller that the print job is successful.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    on(type: 'succeed', callback: Callback<void>): void;

    /**
     * Register event callback when the current print task is in process.
     *
     * @permission ohos.permission.PRINT
     * @param { Callback<void> } callback - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    onSucceed(callback: Callback<void>): void;

    /**
     * Subscribes to the failure events of a print job. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.PRINT
     * @param { 'fail' } type - Listening type.<br>The value is fixed at **'fail'**.<br>It means that the print job is
     *     failed.
     * @param { Callback<void> } callback - Callback used to notify the caller that the print job is failed.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    on(type: 'fail', callback: Callback<void>): void;

    /**
     * Register event callback when the current print task is in process.
     *
     * @permission ohos.permission.PRINT
     * @param { Callback<void> } callback - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    onFail(callback: Callback<void>): void;

    /**
     * Subscribes to the cancellation events of a print job. This API uses an asynchronous callback to return the
     * result.
     *
     * @permission ohos.permission.PRINT
     * @param { 'cancel' } type - Listening type.<br>The value is fixed at **'cancel'**.<br>It means that the print job
     *     is canceled.
     * @param { Callback<void> } callback - Callback used to notify the caller that the print job is canceled.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    on(type: 'cancel', callback: Callback<void>): void;

    /**
     * Register event callback when the current print task is in process.
     *
     * @permission ohos.permission.PRINT
     * @param { Callback<void> } callback - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    onCancel(callback: Callback<void>): void;

    /**
     * Unsubscribes from the block events of a print job. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.PRINT
     * @param { 'block' } type - Listening type.<br>The value is fixed at **'block'**.<br>It means that the print job is
     *     blocked.
     * @param { Callback<void> } callback - Callback used to unsubscribe from the block events of a specified print job.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    off(type: 'block', callback?: Callback<void>): void;

    /**
     * Unregister event callback when the current print task is in process.
     *
     * @permission ohos.permission.PRINT
     * @param { Callback<void> } [callback] - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    offBlock(callback?: Callback<void>): void;

    /**
     * Unsubscribes from the success events of a print job. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.PRINT
     * @param { 'succeed' } type - Listening type.<br>The value is fixed at **'succeed'**.<br>It means that the print
     *     job is successful.
     * @param { Callback<void> } callback - Callback used to unsubscribe from the success events of a specified print
     *     job.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    off(type: 'succeed', callback?: Callback<void>): void;

    /**
     * Unregister event callback when the current print task is in process.
     *
     * @permission ohos.permission.PRINT
     * @param { Callback<void> } [callback] - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    offSucceed(callback?: Callback<void>): void;

    /**
     * Unsubscribes from the failure events of a print job. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.PRINT
     * @param { 'fail' } type - Listening type.<br>The value is fixed at **'fail'**.<br>It means that the print job is
     *     failed.
     * @param { Callback<void> } callback - Callback used to unsubscribe from the failure events of a specified print
     *     job.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    off(type: 'fail', callback?: Callback<void>): void;

    /**
     * Unregister event callback when the current print task is in process.
     *
     * @permission ohos.permission.PRINT
     * @param { Callback<void> } [callback] - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    offFail(callback?: Callback<void>): void;

    /**
     * Unsubscribes from the cancellation events of a print job. This API uses an asynchronous callback to return the
     * result.
     *
     * @permission ohos.permission.PRINT
     * @param { 'cancel' } type - Listening type.<br>The value is fixed at **'cancel'**.<br>It means that the print job
     *     is canceled.
     * @param { Callback<void> } callback - Callback used to unsubscribe from the cancellation events of a specified
     *     print job.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    off(type: 'cancel', callback?: Callback<void>): void;

    /**
     * Unregister event callback when the current print task is in process.
     *
     * @permission ohos.permission.PRINT
     * @param { Callback<void> } [callback] - The callback function for print task change event
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 23 static
     */
    offCancel(callback?: Callback<void>): void;

  }

  /**
   * Provides information about the document to print. This API must be implemented by a third-party application.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  interface PrintDocumentAdapter {

    /**
     * Sends an empty PDF file descriptor to a third-party application. The third-party application updates the file
     * with the new print attributes and then calls **writeResultCallback** to print the file.
     *
     * @permission ohos.permission.PRINT
     * @param { string } jobId - ID of the print job.
     * @param { PrintAttributes } oldAttrs - Old print attributes.
     * @param { PrintAttributes } newAttrs - New print attributes.
     * @param { int } fd - PDF file descriptor sent to the API caller.
     * @param { function } writeResultCallback - Callback used to print the updated file.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    onStartLayoutWrite(jobId: string, oldAttrs: PrintAttributes, newAttrs: PrintAttributes, fd: int,
      writeResultCallback: (jobId: string, writeResult: PrintFileCreationState) => void): void;

    /**
     * Registers a listener for print job state changes.
     *
     * @permission ohos.permission.PRINT
     * @param { string } jobId - ID of the print job.
     * @param { PrintDocumentAdapterState } state - New state of the print job.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    onJobStateChanged(jobId: string, state: PrintDocumentAdapterState): void;
  }

  /**
   * Prints files. This API uses an asynchronous callback to return the result. To start the system print preview page,
   * call the [print]{@link print.print(files: Array<string>, context: Context)} API and pass in context.
   *
   * @permission ohos.permission.PRINT
   * @param { Array<string> } files - List of files to print. Images (in .jpg, .png, .gif, .bmp, or .webp format) and
   *     PDF files are supported. You should save the files to the application sandbox, obtain the sandbox URI through
   *     **fileUri.getUriFromPath**, and then pass this URI as a parameter to this API.
   * @param { AsyncCallback<PrintTask> } callback - Callback to be invoked when the print job is finished.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 10 dynamic
   * @since 23 static
   * @deprecated since 26.0.0
   * @useinstead print#print
   */
  function print(files: Array<string>, callback: AsyncCallback<PrintTask>): void;

  /**
   * Prints files. This API uses a promise to return the result. To start the system print preview page, call the
   * [print]{@link print.print(files: Array<string>, context: Context)} API and pass in context.
   *
   * @permission ohos.permission.PRINT
   * @param { Array<string> } files - List of files to print. Images (in .jpg, .png, .gif, .bmp, or .webp format) and
   *     PDF files are supported. You should save the files to the application sandbox, obtain the sandbox URI through
   *     **fileUri.getUriFromPath**, and then pass this URI as a parameter to this API.
   * @returns { Promise<PrintTask> } Promise used to return a [PrintTask]{@link print.PrintTask} object.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 10 dynamic
   * @since 23 static
   * @deprecated since 26.0.0
   * @useinstead print#print
   */
  function print(files: Array<string>): Promise<PrintTask>;

  /**
   * Prints files. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.PRINT
   * @param { Array<string> } files - List of files to be printed. Currently, the following file types are supported: "
   *     .bm", ".bmp", ".doc", ".docm", ".docx", ".dot", ".dotm", ".dotx", ".gif", ".jfif", ".jpe", ".jpeg", ".jpg", "
   *     pdf", ".pot", ".potm", ".potx", ".pps", ".ppsm", ".ppsx", ".ppt", ".pptm", ".pptx", ".png", ".rtf", ".txt", "
   *     .webp", ".wps", ".xls", ".xlsb", ".xlsm", ".xlsx", ".xlt", ".xltx", and ".xml". You should save the files to
   *     the application sandbox, obtain the sandbox URI through **fileUri.getUriFromPath**, and then pass this URI as a
   *     parameter to this API.
   * @param { Context } context - UIAbilityContext used to start the system print UI.
   * @param { AsyncCallback<PrintTask> } callback - Callback to be invoked when the print job is finished.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function print(files: Array<string>, context: Context, callback: AsyncCallback<PrintTask>): void;

  /**
   * Prints files. This API uses a promise to return the result.
   *
   * @permission ohos.permission.PRINT
   * @param { Array<string> } files - List of files to be printed. Currently, the following file types are supported: "
   *     .bm", ".bmp", ".doc", ".docm", ".docx", ".dot", ".dotm", ".dotx", ".gif", ".jfif", ".jpe", ".jpeg", ".jpg", "
   *     pdf", ".pot", ".potm", ".potx", ".pps", ".ppsm", ".ppsx", ".ppt", ".pptm", ".pptx", ".png", ".rtf", ".txt", "
   *     .webp", ".wps", ".xls", ".xlsb", ".xlsm", ".xlsx", ".xlt", ".xltx", and ".xml". You should save the files to
   *     the application sandbox, obtain the sandbox URI through **fileUri.getUriFromPath**, and then pass this URI as a
   *     parameter to this API.
   * @param { Context } context - UIAbilityContext used to start the system print UI.
   * @returns { Promise<PrintTask> } Promise used to return a [PrintTask]{@link print.PrintTask} object.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function print(files: Array<string>, context: Context): Promise<PrintTask>;

  /**
   * Prints a file. This API uses a promise to return the result.
   *
   * @permission ohos.permission.PRINT
   * @param { string } jobName - Name of the file to print, for example, **test.pdf**. The printer uses the
   *     [onStartLayoutWrite]{@link print.PrintDocumentAdapter.onStartLayoutWrite} API to send the **fd** of the empty
   *     PDF file to the API caller. The API caller uses the new print attributes to update the file to print.
   * @param { PrintDocumentAdapter } printAdapter - [PrintDocumentAdapter]{@link print.PrintDocumentAdapter} API
   *     instance implemented by a third-party application.
   * @param { PrintAttributes } printAttributes - Print attributes.
   * @param { Context } context - UIAbilityContext used to start the system print UI.
   * @returns { Promise<PrintTask> } Promise used to return a [PrintTask]{@link print.PrintTask} object.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function print(jobName: string, printAdapter: PrintDocumentAdapter, printAttributes: PrintAttributes,
    context: Context): Promise<PrintTask>;

  /**
   * Defines the print attributes.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  interface PrintAttributes {
    /**
     * Number of printed file copies. The default value is **1**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    copyNumber?: int;

    /**
     * Page range of the file to print.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    pageRange?: PrintPageRange;

    /**
     * Page size of the file to print.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    pageSize?: PrintPageSize | PrintPageType;

    /**
     * Print direction mode.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    directionMode?: PrintDirectionMode;

    /**
     * Color mode of the files to print.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    colorMode?: PrintColorMode;

    /**
     * Duplex mode of the files to print.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    duplexMode?: PrintDuplexMode;
  }

  /**
   * Defines the print range.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  interface PrintPageRange {
    /**
     * Start page. The default value is **1**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    startPage?: int;

    /**
     * End page. The default value is the maximum number of pages of the file to be printed.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    endPage?: int;

    /**
     * Page range set of the file to print. The default value is empty.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    pages?: Array<int>;
  }

  /**
   * Defines the page margins for printing.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrintMargin {
    /**
     * Top margin of the page, in millimeters. The default value is **0**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    top?: int;

    /**
     * Bottom margin of the page, in millimeters. The default value is **0**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    bottom?: int;

    /**
     * Left margin of the page, in millimeters. The default value is **0**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    left?: int;

    /**
     * Right margin of the page, in millimeters. The default value is **0**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    right?: int;
  }

  /**
   * Defines the print range.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrinterRange {
    /**
     * Start page. The default value is **1**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    startPage?: int;

    /**
     * End page. The default value is the maximum number of pages of the file to be printed.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    endPage?: int;

    /**
     * Page range set of the file to print. The default value is empty.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    pages?: Array<int>;
  }

  /**
   * Defines the print preview attributes.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PreviewAttribute {
    /**
     * Preview page range.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    previewRange: PrinterRange;

    /**
     * Print preview result. The default value is **-1**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    result?: int;
  }

  /**
   * Defines the resolution for printing.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrintResolution {
    /**
     * Resolution ID.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * Horizontal DPI.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    horizontalDpi: int;

    /**
     * Vertical DPI.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    verticalDpi: int;
  }

  /**
   * Defines the size of the printed page.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  interface PrintPageSize {
    /**
     * Paper size ID.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * Paper size name.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Page width, in millimeters.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * Page height, in millimeters.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * Defines the printer capabilities.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrinterCapability {
    /**
     * Color mode.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    colorMode: int;

    /**
     * Simplex or duplex mode.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    duplexMode: int;

    /**
     * List of page sizes supported by the printer.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    pageSize: Array<PrintPageSize>;

    /**
     * List of resolutions supported by the printer.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    resolution?: Array<PrintResolution>;

    /**
     * Minimum margin of the printer.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    minMargin?: PrintMargin;

    /**
     * Printer options. The value is a JSON object string.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 11 - 23]
     * @publicapi [since 24]
     * @since 11 dynamic
     * @since 23 static
     */
    options?: Object;
  }

  /**
   * Provides the printer information.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrinterInfo {
    /**
     * Printer ID.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    printerId: string;

    /**
     * Printer name.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    printerName: string;

    /**
     * Printer state.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    printerState: PrinterState;

    /**
     * Resource ID of the printer icon. The default value is **-1**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    printerIcon?: int;

    /**
     * Printer description.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    description?: string;

    /**
     * Printer capability.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    capability?: PrinterCapability;

    /**
     * Printer options. The value is a JSON object string.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    options?: Object;
  }

  /**
   * Defines a print job.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrintJob {
    /**
     * FD list of files to print.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    fdList: Array<int>;

    /**
     * ID of the print job.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    jobId: string;

    /**
     * ID of the printer used for printing.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    printerId: string;

    /**
     * State of the print job.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    jobState: PrintJobState;

    /**
     * Substate of the print job.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 11 - 23]
     * @publicapi [since 24]
     * @since 11 dynamic
     * @since 23 static
     */
    jobSubstate: PrintJobSubState;

    /**
     * Copy of the file list.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    copyNumber: int;

    /**
     * Print range.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    pageRange: PrinterRange;

    /**
     * Whether the printing is sequential. The value **true** means that the printing is sequential, and **false** means
     * the opposite. The default value is **false**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    isSequential: boolean;

    /**
     * Selected page size.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    pageSize: PrintPageSize;

    /**
     * Whether pages are printed in landscape mode. The value **true** indicates that pages are printed in landscape
     * mode, and **false** indicates that pages are printed in portrait mode. The default value is **false**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    isLandscape: boolean;

    /**
     * Color mode.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    colorMode: int;

    /**
     * Simplex or duplex mode.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    duplexMode: int;

    /**
     * Current page margin.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    margin?: PrintMargin;

    /**
     * Preview settings.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    preview?: PreviewAttribute;

    /**
     * Printer options. The value is a JSON object string.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    options?: Object;

    /**
     * Vendor-specific job options in JSON format.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    vendorOptions?: string;
  }

  /**
   * Defines a print job.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface PrintJobData {
    /**
     * Printer ID.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    printerId: string;

    /**
     * Name of the print job.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    jobName: string;

    /**
     * Format of the print data.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    documentFormat: PrintDocumentFormat;

    /**
     * Data source type.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    docFlavor: DocFlavor;

    /**
     * Number of file list copies.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    copyNumber: int;
    /**
     * Whether pages are printed in landscape mode. The value **true** indicates that pages are printed in landscape
     * mode, and **false** indicates that pages are printed in portrait mode. The default value is **false**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isLandscape: boolean;

    /**
     * Color mode.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    colorMode: PrintColorMode;

    /**
     * Simplex or duplex mode.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    duplexMode: PrintDuplexMode;

    /**
     * Selected page size.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pageSize: PrintPageSize;

    /**
     * Unique identifier of the print job.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    jobId?: string;

    /**
     * FD list of files to print.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    fdList?: int[];
    /**
     * Binary data to print.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    binaryData?: Uint8Array;

    /**
     * Print quality.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    printQuality?: PrintQuality;

    /**
     * Type of the paper to print.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    mediaType?: string;

    /**
     * Whether to print without margins. The value **true** means to print without margins, and **false** means the
     * opposite. Default value: **true**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isBorderless?: boolean;

    /**
     * Whether to automatically rotate the page. The value **true** means to automatically rotate the page, and
     * **false** means the opposite. Default value: **true**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isAutoRotate?: boolean;

    /**
     * Whether pages are printed in reverse order. The value **true** means that pages are printed in reverse order, and
     * **false** means that pages are printed in normal order. The default value is **false**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isReverse?: boolean;

    /**
     * Whether pages are printed uncollated. The value **true** means that pages are printed uncollated, and **false**
     * means the opposite. Default value: **true**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isCollate?: boolean;

    /**
     * Whether pages are printed in sequential order.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSequential?: boolean;

    /**
     * Object stringified in JSON format.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    options?: string;

    /**
     * Vendor-specific job options in JSON format.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    vendorOptions?: string;
  }

  /**
   * Enumerates the data formats.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum PrintDocumentFormat {
    /**
     * Auto-detected format.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_AUTO = 0,

    /**
     * JPEG.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_JPEG = 1,

    /**
     * PDF.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_PDF = 2,

    /**
     * PostScript.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_POSTSCRIPT = 3,

    /**
     * Text.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_TEXT = 4,

    /**
     * RAW.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_RAW = 5
	}

  /**
   * Enumerates the data source types for printing.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum DocFlavor {
    /**
     * File data.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    FILE_DESCRIPTOR = 0,

    /**
     * Binary data.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BYTES = 1
	}
  /**
   * Prints a file or binary data. This API uses a promise to return the result.
   *
   * @permission ohos.permission.PRINT
   * @param { PrintJobData } job - Print job data.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function startPrint(job: PrintJobData): Promise<void>;

  /**
   * Enumerates the print direction modes.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintDirectionMode {
    /**
     * Automatic.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DIRECTION_MODE_AUTO = 0,

    /**
     * Portrait mode.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DIRECTION_MODE_PORTRAIT = 1,

    /**
     * Landscape mode.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DIRECTION_MODE_LANDSCAPE = 2
  }

  /**
   * Enumerates the color modes.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintColorMode {
    /**
     * Black and white.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    COLOR_MODE_MONOCHROME = 0,

    /**
     * Color.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    COLOR_MODE_COLOR = 1
  }

  /**
   * Enumerates the duplex modes.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintDuplexMode {
    /**
     * Simplex (single-sided).
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DUPLEX_MODE_NONE = 0,

    /**
     * Duplex (double-sided) with flipping on long edge.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DUPLEX_MODE_LONG_EDGE = 1,

    /**
     * Duplex (double-sided) with flipping on short edge.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DUPLEX_MODE_SHORT_EDGE = 2
  }

  /**
   * Enumerates the print page types.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintPageType {
    /**
     * A3.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_ISO_A3 = 0,

    /**
     * A4.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_ISO_A4 = 1,

    /**
     * A5.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_ISO_A5 = 2,

    /**
     * B5.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_JIS_B5 = 3,

    /**
     * C5.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_ISO_C5 = 4,

    /**
     * DL.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_ISO_DL = 5,

    /**
     * Letter.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_LETTER = 6,

    /**
     * Legal.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_LEGAL = 7,

    /**
     * 4 x 6 photo paper.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_PHOTO_4X6 = 8,

    /**
     * 5 x 7 photo paper.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_PHOTO_5X7 = 9,

    /**
     * International envelope DL.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_INT_DL_ENVELOPE = 10,

    /**
     * B Tabloid.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_B_TABLOID = 11
  }

  /**
   * Enumerates the print job states.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintDocumentAdapterState {
    /**
     * The preview fails.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PREVIEW_DESTROY = 0,

    /**
     * The print job is successful.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_TASK_SUCCEED = 1,

    /**
     * The print job is failed.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_TASK_FAIL = 2,

    /**
     * The print job is canceled.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_TASK_CANCEL = 3,

    /**
     * The print job is blocked.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_TASK_BLOCK = 4
  }

  /**
   * Enumerates the print file creation status.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintFileCreationState {
    /**
     * The print file is created successfully.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_FILE_CREATED = 0,

    /**
     * The print file fails to be created.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_FILE_CREATION_FAILED = 1,

    /**
     * The print file is successfully created but not rendered.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_FILE_CREATED_UNRENDERED = 2
  }

  /**
   * Enumerates the printer states.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrinterState {
    /**
     * A new printer is added.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_ADDED = 0,

    /**
     * The printer is removed.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_REMOVED = 1,

    /**
     * The printer is updated.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_CAPABILITY_UPDATED = 2,

    /**
     * The printer is connected.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_CONNECTED = 3,

    /**
     * The printer is disconnected.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_DISCONNECTED = 4,

    /**
     * The printer is running.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_RUNNING = 5
  }

  /**
   * Enumerates the print job states.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrintJobState {
    /**
     * The printer is prepared for the print job.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_PREPARE = 0,

    /**
     * The print job is on the print queue of the printer.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_QUEUED = 1,

    /**
     * The print job is being executed.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_RUNNING = 2,

    /**
     * The print job is blocked.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCKED = 3,

    /**
     * The print job is complete.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_COMPLETED = 4
  }

  /**
   * Enumerates the print job substates.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrintJobSubState {
    /**
     * The print job is successful.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_COMPLETED_SUCCESS = 0,

    /**
     * The print job is failed.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_COMPLETED_FAILED = 1,

    /**
     * The print job is canceled by user.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_COMPLETED_CANCELLED = 2,

    /**
     * The print file is corrupted.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_COMPLETED_FILE_CORRUPTED = 3,

    /**
     * The printer is offline.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_OFFLINE = 4,

    /**
     * The printer is occupied by another process.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_BUSY = 5,

    /**
     * The print job is canceled due to a block.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_CANCELLED = 6,

    /**
     * The printer is out of paper.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_OUT_OF_PAPER = 7,

    /**
     * The printer is out of ink.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_OUT_OF_INK = 8,

    /**
     * The printer is out of toner.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_OUT_OF_TONER = 9,

    /**
     * The printer is in a paper jam.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_JAMMED = 10,

    /**
     * The printer door is open.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_DOOR_OPEN = 11,

    /**
     * Print service request.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_SERVICE_REQUEST = 12,

    /**
     * The printer is low on ink.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_LOW_ON_INK = 13,

    /**
     * The printer is low on toner.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_LOW_ON_TONER = 14,

    /**
     * The printer is extremely low on ink.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_REALLY_LOW_ON_INK = 15,

    /**
     * The print certificate is incorrect.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_BAD_CERTIFICATE = 16,

    /**
     * The print driver is abnormal.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_DRIVER_EXCEPTION = 17,

    /**
     * There is an error with the printer account.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_ACCOUNT_ERROR = 18,

    /**
     * There is an error with the printer permission.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_PRINT_PERMISSION_ERROR = 19,

    /**
     * There is an error with the color printing permission.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_PRINT_COLOR_PERMISSION_ERROR = 20,

    /**
     * The printer fails to connect to the network.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_NETWORK_ERROR = 21,

    /**
     * The printer fails to connect to the server.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_SERVER_CONNECTION_ERROR = 22,

    /**
     * There is an error with a large file printing.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_LARGE_FILE_ERROR = 23,

    /**
     * There is an error with file parsing.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_FILE_PARSING_ERROR = 24,

    /**
     * The file conversion is slow.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_SLOW_FILE_CONVERSION = 25,

    /**
     * The file is uploading.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_RUNNING_UPLOADING_FILES = 26,

    /**
     * The file is converting.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_RUNNING_CONVERTING_FILES = 27,

    /**
     * The file fails to be uploaded.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_FILE_UPLOADING_ERROR = 30,

    /**
     * The print driver is missing.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_DRIVER_MISSING = 34,

    /**
     * The print job is interrupted.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_INTERRUPT = 35,

    /**
     * The printer is unavailable.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_PRINTER_UNAVAILABLE = 98,

    /**
     * There is an unknown error with the printer.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_UNKNOWN = 99,
  }

  /**
   * Enumerates the print error codes.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrintErrorCode {
    /**
     * No error.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_NONE = 0,

    /**
     * No permission.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_NO_PERMISSION = 201,

    /**
     * Invalid parameters.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_INVALID_PARAMETER = 401,

    /**
     * Printing failure.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_GENERIC_FAILURE = 13100001,

    /**
     * RPC failure.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_RPC_FAILURE = 13100002,

    /**
     * Print service failure.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_SERVER_FAILURE = 13100003,

    /**
     * Invalid printer extension.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_INVALID_EXTENSION = 13100004,

    /**
     * Invalid printer.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_INVALID_PRINTER = 13100005,

    /**
     * Invalid print job.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_INVALID_PRINT_JOB = 13100006,

    /**
     * Incorrect file input/output.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_FILE_IO = 13100007,

    /**
     * Excessive files. Maximum number: 99.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    E_PRINT_TOO_MANY_FILES = 13100010,

    /**
     * The SMB account is locked due to multiple failed login attempts.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    E_PRINT_SMB_LOGIN_LOCKOUT = 13100012,

    /**
     * SMB Connection Failure (A network error occurs, the host is unreachable, or the port is blocked.)
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    E_PRINT_SMB_CONNECTION_FAILURE = 13100013,

    /**
     * The login account or password is invalid.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    E_PRINT_SMB_INVALID_CREDENTIALS = 13100014
  }

  /**
   * Enumerates print application events.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum ApplicationEvent {
    /**
     * Starts the print application.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    APPLICATION_CREATED = 0,

    /**
     * Closes the print application by clicking **Start**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    APPLICATION_CLOSED_FOR_STARTED = 1,

    /**
     * Closes the print application by clicking **Cancel**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    APPLICATION_CLOSED_FOR_CANCELED = 2
  }

  /**
   * Provides the printer extension information.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrinterExtensionInfo {
    /**
     * ID of the printer extension.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    extensionId: string;

    /**
     * Vendor ID of the printer extension.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    vendorId: string;

    /**
     * Vendor name of the printer extension.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    vendorName: string;

    /**
     * Vendor icon of the printer extension.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    vendorIcon: int;

    /**
     * Version of the printer extension.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    version: string;
  }

  /**
   * Obtains the information of all installed printer extensions. This API uses an asynchronous callback to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { AsyncCallback<Array<PrinterExtensionInfo>> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function queryAllPrinterExtensionInfos(callback: AsyncCallback<Array<PrinterExtensionInfo>>): void;

  /**
   * Obtains the information of all installed printer extensions. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<Array<PrinterExtensionInfo>> } Promise used to return the information of all installed printer
   *     extensions.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function queryAllPrinterExtensionInfos(): Promise<Array<PrinterExtensionInfo>>;

  /**
   * Discovers printers by specifying the extension list. The discovered printers contain the specified print extension
   * abilities. If an empty extension list is specified, all extension abilities are loaded. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 10 - 19]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT [since 20]
   * @param { Array<string> } extensionList - List of
   *     [PrintExtensionAbilities]{@link @ohos.app.ability.PrintExtensionAbility:PrintExtensionAbility} to be loaded.
   *     The list members are the bundle names of the applications with print extension abilities. An empty list
   *     indicates that all extension abilities are loaded.
   * @param { AsyncCallback<void> } callback - Callback to be invoked when a printer is discovered.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application [since 10 - 19]
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 19]
   * @publicapi [since 20]
   * @since 10 dynamic
   * @since 23 static
   */
  function startDiscoverPrinter(extensionList: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Discovers printers by specifying the extension list. The discovered printers contain the specified print extension
   * abilities. If an empty extension list is specified, all extension abilities are loaded. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 10 - 19]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT [since 20]
   * @param { Array<string> } extensionList - List of
   *     [PrintExtensionAbilities]{@link @ohos.app.ability.PrintExtensionAbility:PrintExtensionAbility} to be loaded.
   *     The list members are the bundle names of the applications with print extension abilities. An empty list
   *     indicates that all extension abilities are loaded.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application [since 10 - 19]
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 19]
   * @publicapi [since 20]
   * @since 10 dynamic
   * @since 23 static
   */
  function startDiscoverPrinter(extensionList: Array<string>): Promise<void>;

  /**
   * Stops discovering printers. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 10 - 19]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT [since 20]
   * @param { AsyncCallback<void> } callback - Callback to be invoked when printer discovery is stopped.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application [since 10 - 19]
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 19]
   * @publicapi [since 20]
   * @since 10 dynamic
   * @since 23 static
   */
  function stopDiscoverPrinter(callback: AsyncCallback<void>): void;

  /**
   * Stops discovering printers. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 10 - 19]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT [since 20]
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application [since 10 - 19]
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 19]
   * @publicapi [since 20]
   * @since 10 dynamic
   * @since 23 static
   */
  function stopDiscoverPrinter(): Promise<void>;

  /**
   * Connects to a printer by printer ID. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 10 - 19]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT [since 20]
   * @param { string } printerId - Printer ID.
   * @param { AsyncCallback<void> } callback - Callback to be invoked when a printer is connected.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application [since 10 - 19]
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 19]
   * @publicapi [since 20]
   * @since 10 dynamic
   * @since 23 static
   */
  function connectPrinter(printerId: string, callback: AsyncCallback<void>): void;

  /**
   * Connects to a printer by printer ID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 10 - 19]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT [since 20]
   * @param { string } printerId - Printer ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application [since 10 - 19]
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 19]
   * @publicapi [since 20]
   * @since 10 dynamic
   * @since 23 static
   */
  function connectPrinter(printerId: string): Promise<void>;

  /**
   * Disconnects from the specified printer. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Printer ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function disconnectPrinter(printerId: string, callback: AsyncCallback<void>): void;

  /**
   * Disconnects from the specified printer. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Printer ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function disconnectPrinter(printerId: string): Promise<void>;

  /**
   * Queries the printer capability. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Printer ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function queryPrinterCapability(printerId: string, callback: AsyncCallback<void>): void;

  /**
   * Queries the printer capability. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Printer ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function queryPrinterCapability(printerId: string): Promise<void>;

  /**
   * Starts the specified print job. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrintJob } jobInfo - Information about the print job.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function startPrintJob(jobInfo: PrintJob, callback: AsyncCallback<void>): void;

  /**
   * Starts the specified print job. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrintJob } jobInfo - Information about the print job.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function startPrintJob(jobInfo: PrintJob): Promise<void>;

  /**
   * Cancels the specified print job, which is on the print queue of the printer. This API uses an asynchronous callback
   * to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Print job ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function cancelPrintJob(jobId: string, callback: AsyncCallback<void>): void;

  /**
   * Cancels the specified print job, which is on the print queue of the printer. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Print job ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function cancelPrintJob(jobId: string): Promise<void>;

  /**
   * Restarts a print job that has been finished before. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - ID of a print job that has been finished before.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function restartPrintJob(jobId: string): Promise<void>;

  /**
   * Requests print preview data. This API uses a callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrintJob } jobInfo - Information about the print job.
   * @param { Callback<int> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function requestPrintPreview(jobInfo: PrintJob, callback: Callback<int>): void;

  /**
   * Requests print preview data. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrintJob } jobInfo - Information about the print job.
   * @returns { Promise<int> } Promise used to return the preview result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function requestPrintPreview(jobInfo: PrintJob): Promise<int>;

  /**
   * Registers a listener for printer state change events. This API uses a callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'printerStateChange' } type - Listening type. The value is fixed at **'printerStateChange'**.
   * @param { function } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'printerStateChange', callback: (state: PrinterState, info: PrinterInfo) => void): void;

  /**
   * Defines the callback type used in registering to listen for PrinterState.
   * The value of state indicates the state of printer.
   * The value of info indicates the latest printer info.
   *
   * @param { PrinterState } state - the state of printer
   * @param { PrinterInfo } info - the information of the latest printer
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type PrinterStateChangeCallback = (state: PrinterState, info: PrinterInfo) => void;

  /**
   * Register event callback for the state change of printer.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrinterStateChangeCallback } callback - The callback function for state change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onPrinterStateChange(callback: PrinterStateChangeCallback): void;

  /**
   * Unregisters the listener for printer state change events. This API uses a callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'printerStateChange' } type - Listening type. The value is fixed at **'printerStateChange'**.
   * @param { Callback<boolean> } callback - Callback used to return the result. The value **true** means that the
   *     operation is successful, and **false** means the opposite.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'printerStateChange', callback?: Callback<boolean>): void;

  /**
   * Unregister event callback for the state change of printer.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Callback<boolean> } [callback] - The callback function for state change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offPrinterStateChange(callback?: Callback<boolean>): void;

  /**
   * Registers a listener for print job state change events. This API uses a callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'jobStateChange' } type - Listening type. The value is fixed at **'jobStateChange'**.
   * @param { function } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'jobStateChange', callback: (state: PrintJobState, job: PrintJob) => void): void;

  /**
   * Defines the callback type used in registering to listen for PrintJobState.
   * The value of state indicates the state of print job.
   * The value of job indicates the latest print job info.
   *
   * @param { PrintJobState } state - the state of print job
   * @param { PrintJob } job - the information of the print job
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type PrintJobStateChangeCallback = (state: PrintJobState, job: PrintJob) => void;

  /**
   * Register event callback for the state change of print job.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrintJobStateChangeCallback } callback - The callback function for state change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onJobStateChange(callback: PrintJobStateChangeCallback): void;

  /**
   * Unregisters the listener for print job state change events. This API uses a callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'jobStateChange' } type - Listening type. The value is fixed at **'jobStateChange'**.
   * @param { Callback<boolean> } callback - Callback used to return the result. The value **true** means that the
   *     operation is successful, and **false** means the opposite.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'jobStateChange', callback?: Callback<boolean>): void;

  /**
   * Unregister event callback for the state change of print job.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Callback<boolean> } [callback] - The callback function for state change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offJobStateChange(callback?: Callback<boolean>): void;

  /**
   * Registers a listener for printer extension information change events. This API uses a callback to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'extInfoChange' } type - Listening type. The value is fixed at **'extInfoChange'**.
   * @param { function } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'extInfoChange', callback: (extensionId: string, info: string) => void): void;

  /**
   * Defines the callback type used in registering to listen for extension change.
   * The value of extensionId indicates the print extension id.
   * The value of info indicates the connect info.
   *
   * @param { string } extensionId - the printer extension id
   * @param { string } info - the information of printer
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type ExtInfoChangeCallback = (extensionId: string, info: string) => void;

  /**
   * Register event callback for the information change of print extension.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { ExtInfoChangeCallback } callback - The callback function for information change of print extension.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onExtInfoChange(callback: ExtInfoChangeCallback): void;

  /**
   * Unregisters the listener for printer extension information change events. This API uses a callback to return the
   * result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'extInfoChange' } type - Listening type. The value is fixed at **'extInfoChange'**.
   * @param { Callback<boolean> } callback - Callback used to return the result. The value **true** means that the
   *     operation is successful, and **false** means the opposite.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'extInfoChange', callback?: Callback<boolean>): void;

  /**
   * Unregister event callback for the information change of print extension.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Callback<boolean> } [callback] - The callback function for state change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offExtInfoChange(callback?: Callback<boolean>): void;

  /**
   * Adds printers. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<PrinterInfo> } printers - List of printers to add.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function addPrinters(printers: Array<PrinterInfo>, callback: AsyncCallback<void>): void;

  /**
   * Adds printers. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<PrinterInfo> } printers - List of printers to add.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function addPrinters(printers: Array<PrinterInfo>): Promise<void>;

  /**
   * Removes printers. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<string> } printerIds - List of printers to remove.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function removePrinters(printerIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Removes printers. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<string> } printerIds - List of printers to remove.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function removePrinters(printerIds: Array<string>): Promise<void>;

  /**
   * Updates information about the specified printers. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<PrinterInfo> } printers - List of printers whose information is to be updated.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function updatePrinters(printers: Array<PrinterInfo>, callback: AsyncCallback<void>): void;

  /**
   * Updates information about the specified printers. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<PrinterInfo> } printers - List of printers whose information is to be updated.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function updatePrinters(printers: Array<PrinterInfo>): Promise<void>;

  /**
   * Updates the printer state. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Printer ID.
   * @param { PrinterState } state - Printer state.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function updatePrinterState(printerId: string, state: PrinterState, callback: AsyncCallback<void>): void;

  /**
   * Updates the printer state. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Printer ID.
   * @param { PrinterState } state - Printer state.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function updatePrinterState(printerId: string, state: PrinterState): Promise<void>;

  /**
   * Updates the print job state. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 10 - 23]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.ENTERPRISE_MANAGE_PRINT [since 24]
   * @param { string} jobId - ID of the print job.
   * @param { PrintJobState } state - Print job state.
   * @param { PrintJobSubState } subState - Substate of the print job.
   * @param { AsyncCallback<void> } callback - Callback to be invoked when the print job state is updated.
   * @throws { BusinessError } 201 - The application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application [since 10 - 23]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @since 10 dynamic
   * @since 23 static
   */
  function updatePrintJobState(jobId: string, state: PrintJobState, subState: PrintJobSubState,
    callback: AsyncCallback<void>): void;

  /**
   * Updates the print job state. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 10 - 23]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.ENTERPRISE_MANAGE_PRINT [since 24]
   * @param { string} jobId - ID of the print job.
   * @param { PrintJobState } state - Print job state.
   * @param { PrintJobSubState } subState - Substate of the print job.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application [since 10 - 23]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @since 10 dynamic
   * @since 23 static
   */
  function updatePrintJobState(jobId: string, state: PrintJobState, subState: PrintJobSubState): Promise<void>;

  /**
   * Updates the printer extension information. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } info - New printer extension information.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function updateExtensionInfo(info: string, callback: AsyncCallback<void>): void;

  /**
   * Updates the printer extension information. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } info - New printer extension information.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function updateExtensionInfo(info: string): Promise<void>;

  /**
   * Queries all print jobs. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   * @deprecated since 11
   * @useinstead null
   */
  function queryAllPrintJobs(callback: AsyncCallback<void>): void;

  /**
   * Queries all print jobs. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   * @deprecated since 11
   * @useinstead null
   */
  function queryAllPrintJobs(): Promise<void>;

  /**
   * Queries all active print jobs. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<PrintJob[]> } Promise used to return a list of all active print jobs.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function queryAllActivePrintJobs(): Promise<PrintJob[]>;

  /**
   * Queries all print jobs. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { AsyncCallback<Array<PrintJob>> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function queryPrintJobList(callback: AsyncCallback<Array<PrintJob>>): void;

  /**
   * Queries all print jobs. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<Array<PrintJob>> } Promise used to return a list of all print jobs.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function queryPrintJobList(): Promise<Array<PrintJob>>;

  /**
   * Queries a print job by ID. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - ID of the print job.
   * @param { AsyncCallback<PrintJob> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function queryPrintJobById(jobId: string, callback: AsyncCallback<PrintJob>): void;

  /**
   * Queries a print job by ID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - ID of the print job.
   * @returns { Promise<PrintJob> } Promise used to return the queried print job.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function queryPrintJobById(jobId: string): Promise<PrintJob>;

  /**
   * Starts to obtain the print file. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - ID of the print job.
   * @param { PrintAttributes } printAttributes - Print attributes.
   * @param { int } fd - File descriptor.
   * @param { Callback<PrintFileCreationState> } onFileStateChanged - Callback for updating the file state.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function startGettingPrintFile(jobId: string, printAttributes: PrintAttributes, fd: int,
    onFileStateChanged: Callback<PrintFileCreationState>): void;

  /**
   * Notifies the print service of the spooler shutdown information. This API uses an asynchronous callback to return
   * the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - ID of the print job.
   * @param { 'spooler_closed_for_cancelled' | 'spooler_closed_for_started' } type - Spooler shutdown information.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function notifyPrintService(jobId: string, type: 'spooler_closed_for_cancelled' | 'spooler_closed_for_started',
    callback: AsyncCallback<void>): void;

  /**
   * Notify print service the information.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates id of the print job.
   * @param { AsyncCallback<void> } callback - The callback function for indcating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function notifyPrintServiceSpoolerCloseForCancelled(jobId: string, callback: AsyncCallback<void>): void;

  /**
   * Notify print service the information.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates id of the print job.
   * @param { AsyncCallback<void> } callback - The callback function for indicating the result of API execution.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function notifyPrintServiceSpoolerCloseForStarted(jobId: string, callback: AsyncCallback<void>): void;

  /**
   * Notifies the print service of the spooler shutdown information. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - ID of the print job.
   * @param { 'spooler_closed_for_cancelled' | 'spooler_closed_for_started' } type - Spooler shutdown information.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   */
  function notifyPrintService(jobId: string,
    type: 'spooler_closed_for_cancelled' | 'spooler_closed_for_started'): Promise<void>;

  /**
   * Notify print service the information.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates id of the print job.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function notifyPrintServiceSpoolerCloseForCancelled(jobId: string): Promise<void>;

  /**
   * Notify print service the information.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates id of the print job.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function notifyPrintServiceSpoolerCloseForStarted(jobId: string): Promise<void>;

  /**
   * Obtains the list of printers added to the system. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT
   * @returns { Promise<Array<string>> } Promise used to return a list of all added printers.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   * @since 23 static
   */
  function getAddedPrinters(): Promise<Array<string>>;

  /**
   * Obtains printer information based on the printer ID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Printer ID.
   * @returns { Promise<PrinterInfo> } Promise used to return the printer information.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function getPrinterInfoById(printerId: string): Promise<PrinterInfo>;

  /**
   * Notifies the print service of the print application events. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { ApplicationEvent } event - Print application events.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function notifyPrintServiceEvent(event: ApplicationEvent): Promise<void>;

  /**
   * Adds a printer to the printer discovery list. This API uses a promise to return the result.
   *
   * @permission ohos.permission.PRINT
   * @param { PrinterInformation } printerInformation - The added printer.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  function addPrinterToDiscovery(printerInformation: PrinterInformation): Promise<void>;

  /**
   * Updates the printer capabilities to the printer discovery list. This API uses a promise to return the result.
   *
   * @permission ohos.permission.PRINT
   * @param { PrinterInformation } printerInformation - Printer whose capability is to be updated.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  function updatePrinterInDiscovery(printerInformation: PrinterInformation): Promise<void>;

  /**
   * Removes a printer from the printer discovery list. This API uses a promise to return the result.
   *
   * @permission ohos.permission.PRINT
   * @param { string } printerId - Printer to remove.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  function removePrinterFromDiscovery(printerId: string): Promise<void>;

  /**
   * Obtains printer information based on the printer ID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.PRINT
   * @param { string } printerId - Printer ID used to obtain information.
   * @returns { Promise<PrinterInformation> } Promise used to return the printer information.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  function getPrinterInformationById(printerId: string): Promise<PrinterInformation>;

  /**
   * Defines the printer information.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  interface PrinterInformation {
    /**
     * Printer ID.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    printerId: string;

    /**
     * Printer name.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    printerName: string;

    /**
     * Printer state.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    printerStatus: PrinterStatus;

    /**
     * Printer description.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    description?: string;

    /**
     * Printer capabilities.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    capability?: PrinterCapabilities;

    /**
     * Printer URI.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    uri?: string;

    /**
     * Printer model.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    printerMake?: string;

    /**
     * Printer preferences.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    preferences?: PrinterPreferences;

    /**
     * Printer alias.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    alias?: string;

    /**
     * Information about the selected driver when adding the printer.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    selectedDriver?: PpdInfo;

    /**
     * Protocol used when adding the printer.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    selectedProtocol?: string;

    /**
     * Printer details.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    options?: string;
  }

  /**
   * Defines the printer capabilities.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  interface PrinterCapabilities {
    /**
     * List of paper sizes supported by the printer.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedPageSizes: Array<PrintPageSize>;

    /**
     * List of color modes supported by the printer.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedColorModes: Array<PrintColorMode>;

    /**
     * List of single- and double-sided modes supported by the printer.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedDuplexModes: Array<PrintDuplexMode>;

    /**
     * List of paper types supported by the printer.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedMediaTypes?: Array<string>;

    /**
     * List of print quality supported by the printer.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedQualities?: Array<PrintQuality>;

    /**
     * List of print directions supported by the printer.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedOrientations?: Array<PrintOrientationMode>;

    /**
     * Printer capability details.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    options?: string;

    /**
     * Ability to configure printer vendor-specific preferences.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    vendorPrinterPrefAbility?: string;

    /**
     * Ability to configure job vendor-specific attributes.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    vendorJobAttrAbility?: string;
  }

  /**
   * Enumerates the print qualities.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrintQuality {
    /**
     * Draft
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    QUALITY_DRAFT = 3,

    /**
     * Standard
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    QUALITY_NORMAL = 4,

    /**
     * High
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    QUALITY_HIGH = 5
  }

  /**
   * Enumerates the print directions.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrintOrientationMode {
    /**
     * Portrait mode.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    ORIENTATION_MODE_PORTRAIT = 0,

    /**
     * Landscape mode.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    ORIENTATION_MODE_LANDSCAPE= 1,

    /**
     * Reverse landscape mode.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    ORIENTATION_MODE_REVERSE_LANDSCAPE = 2,

    /**
     * Reverse portrait mode.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    ORIENTATION_MODE_REVERSE_PORTRAIT = 3,

    /**
     * Adaptive mode.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    ORIENTATION_MODE_NONE = 4
  }

  /**
   * Enumerates the printer states.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrinterStatus {
    /**
     * The printer is idle.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_IDLE = 0,

    /**
     * The printer is busy.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_BUSY = 1,

    /**
     * The printer is unavailable.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_UNAVAILABLE = 2
  }

  /**
   * Defines the printer preferences.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   * @since 23 static
   */
  interface PrinterPreferences {
    /**
     * Default duplex mode.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    defaultDuplexMode?: PrintDuplexMode;

    /**
     * Default print quality.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    defaultPrintQuality?: PrintQuality;

    /**
     * Default paper type.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    defaultMediaType?: string;

    /**
     * ID of the default paper size. The value can be a standard paper size defined by the International Organization
     * for Standardization (ISO), for example, ISO_A4, or a non-standard paper size defined in the system, for example,
     * Custom.178 × 254 mm.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    defaultPageSizeId?: string;

    /**
     * Default print orientation.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    defaultOrientation?: PrintOrientationMode;

    /**
     * Whether to print without margins. The value **true** means to print without margins, and **false** means the
     * opposite. The default value is **false**.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    borderless?: boolean;

    /**
     * Default color mode.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    defaultColorMode?: PrintColorMode;

    /**
     * Default collate.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    defaultCollate?: boolean;

    /**
     * Default reverse.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    defaultReverse?: boolean;

    /**
     * Other fields in the printer preferences. The fields are queried from the printer or obtained from the printer
     * driver and stored in the string in JSON format.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    options?: string;

    /**
     * Vendor-specific printer preferences in JSON format.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    vendorOptions?: string;
  }

  /**
   * Enumerates printer-related events.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   * @since 23 static
   */
  enum PrinterEvent {
    /**
     * Printer added.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_ADDED = 0,

    /**
     * Printer deleted.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_DELETED = 1,

    /**
     * Printer state changed.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_STATE_CHANGED = 2,

    /**
     * Printer information changed.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_INFO_CHANGED = 3,

    /**
     * Printer preferences changed.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_PREFERENCE_CHANGED = 4,

    /**
     * The last used printer changed.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_LAST_USED_PRINTER_CHANGED = 5
  }

  /**
   * Enumerates default printer types.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   * @since 23 static
   */
  enum DefaultPrinterType {
    /**
     * The printer set by the user serves as the default printer.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    DEFAULT_PRINTER_TYPE_SET_BY_USER = 0,

    /**
     * The printer used last time serves as the default printer.
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    DEFAULT_PRINTER_TYPE_LAST_USED_PRINTER = 1
  }

  /**
   * Updates the information of a printer in the system. This API uses a promise to return the result. Currently, only
   * the **alias** and **options** fields of [PrinterInformation]{@link print.PrinterInformation} can be updated.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 18 - 23]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.ENTERPRISE_MANAGE_PRINT [since 24]
   * @param { PrinterInformation } printerInformation - Printer information to be updated.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application [since 18 - 23]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 18 - 23]
   * @publicapi [since 24]
   * @since 18 dynamic
   * @since 23 static
   */
  function updatePrinterInformation(printerInformation: PrinterInformation): Promise<void>;

  /**
   * Sets the printer preferences. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Printer ID.
   * @param { PrinterPreferences } printerPreferences - Printer preferences.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function setPrinterPreferences(printerId: string, printerPreferences: PrinterPreferences): Promise<void>;

  /**
   * Discovers USB printers. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<Array<PrinterInformation>> } Promise used to return the information about the discovered USB
   *     printers.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function discoverUsbPrinters(): Promise<Array<PrinterInformation>>;

  /**
   * Sets the default printer. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Printer ID.
   * @param { DefaultPrinterType } type - Default printer type.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function setDefaultPrinter(printerId: string, type: DefaultPrinterType): Promise<void>;

  /**
   * Notifies the print service of the print application events. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { ApplicationEvent } event - Print application events.
   * @param { string } jobId - ID of the print job.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function notifyPrintServiceEvent(event: ApplicationEvent, jobId: string): Promise<void>;

  /**
   * Defines a callback that takes the printer event and printer information as parameters.
   *
   * @param { PrinterEvent } event - Printer event.
   * @param { PrinterInformation } printerInformation - Printer information.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   * @since 23 static
   */
  type PrinterChangeCallback = (event: PrinterEvent, printerInformation: PrinterInformation) => void;

  /**
   * Registers a listener for the printer change events. This API uses a callback to return the result.
   *
   * @permission ohos.permission.PRINT
   * @param { 'printerChange' } type - Printer change event.
   * @param { PrinterChangeCallback } callback - Callback to be invoked when the printer changes.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   */
  function on(type: 'printerChange', callback: PrinterChangeCallback): void;

  /**
   * Register event callback for the change of printer.
   *
   * @permission ohos.permission.PRINT
   * @param { PrinterChangeCallback } callback - The callback function for change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 23 static
   */
  function onPrinterChange(callback: PrinterChangeCallback): void;

  /**
   * Unregisters the listener for printer state change events. This API uses a callback to return the result.
   *
   * @permission ohos.permission.PRINT
   * @param { 'printerChange' } type - Printer change event.
   * @param { PrinterChangeCallback } [callback] - Callback to unregister.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   */
  function off(type: 'printerChange', callback?: PrinterChangeCallback): void;

  /**
   * Unregister event callback for the change of printer.
   *
   * @permission ohos.permission.PRINT
   * @param { PrinterChangeCallback } [callback] - The callback function for change of printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 23 static
   */
  function offPrinterChange(callback?: PrinterChangeCallback): void;

  /**
   * Interface defining shared device information
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface SharedHost {
    /**
     * IP address of the shared device.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ip: string;

    /**
     * Share name of the shared device.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    shareName: string;

    /**
     * Workgroup name of the shared device.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    workgroupName: string;
  }

  /**
   * Get all available shared hosts.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<SharedHost[]> } Promise that resolves with the list of shared hosts.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getSharedHosts(): Promise<SharedHost[]>;

  /**
   * Authenticate SMB device as registered user and get available printers.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { SharedHost } host - The SMB host to authenticate.
   *     <br>The SMB host to authenticate.
   * @param { string } username - The username for authentication.
   *     <br>User name used for authentication.
   * @param { string } password - The password for authentication.
   *     <br>Password used for authentication.
   * @returns { Promise<PrinterInformation[]> } Promise that resolves with the list of available printers.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100012 - SMB account is locked due to multiple failed login attempts.
   * @throws { BusinessError } 13100013 - SMB connection failed (network error, host unreachable, or port blocked).
   * @throws { BusinessError } 13100014 - Invalid login account or password.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function authSmbDeviceAsRegisteredUser(host: SharedHost, username: string, password: string): Promise<PrinterInformation[]>;

  /**
   * Check preferences conflicts.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates the printer ID.
   *     <br>Added printer ID in the system.
   * @param { string } changedType - Indicates the field name that was modified on the printing interface.
   *     <br>Field names set in the print preview or preferences interface.
   * @param { PrinterPreferences } preferences - Indicates the selected value on the printing interface.
   *     <br>The selected value on the printinginterface.
   * @returns { Promise<string[]> } Promise that resolves with the conflicting field names.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100005 - Can not find the printer or printer's ppd file in system.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function checkPreferencesConflicts(printerId: string, changedType: string, preferences: PrinterPreferences): Promise<string[]>;

  /**
   * Get default preferences by printer ID.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates the printer ID.
   *     <br>Added printer ID in the system.
   * @returns { Promise<PrinterPreferences> } - Promise that resolves with the default preferences of the printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100005 - Can not find the printer or printer's ppd file in system.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getPrinterDefaultPreferences(printerId: string): Promise<PrinterPreferences>;

  /**
   * Query printer capabilityies by printer uri.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerUri - Indicates the printer uri.
   *     <br>Printer URI in the process of connecting.
   * @param { string } printerId - Indicates the printer ID.
   *     <br>Printer ID in the process of connecting.
   * @returns { Promise<PrinterCapabilities> } - Promise that resolves with the printer capabilityies.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100005 - Can not find the printer in system.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function queryPrinterCapabilityByUri(printerUri: string, printerId: string): Promise<PrinterCapabilities>;

  /**
   * Add a printer to cups.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerUri - Indicates the printer uri.
   *     <br>Printer URI in the process of connecting.
   * @param { string } printerName - Indicates the printer name.
   *     <br>Printer name in the process of connecting.
   * @param { string } printerMake - Indicates the printer make.
   *     <br>Printer make in the process of connecting.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100003 - Add a printer to cups failed.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function addPrinterToCups(printerUri: string, printerName: string, printerMake: string): Promise<boolean>;

  /**
   * Delete a printer from cups.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerName - Indicates the printer name.
   *     <br>Printer name to be deleted.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function deletePrinterFromCups(printerName: string): Promise<void>;

  /**
   * Authenticate a print job.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates the print job ID.
   *     <br>Job ID to be printed.
   * @param { string } userName - Indicates the user name.
   *     <br>Indicates the user name.
   * @param { string } password - Indicates the user password.
   *     <br>Indicates the user password.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100006 - Can not find the print job.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function authPrintJob(jobId: string, userName: string, password: string): Promise<boolean>;

  /**
   * Analyze print events.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates the printer ID.
   *     <br>Printer ID to be analyzed.
   * @param { string } eventType - Indicates the avant type.
   *     <br>Event types to be analyzed.
   * @returns { Promise<string> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function analyzePrintEvents(printerId: string, eventType: string): Promise<string>;

  /**
   * defines ppd info.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface PpdInfo {
    /**
     * Manufacturer.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    manufacturer: string;

    /**
     * Nick name.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    nickName: string;

    /**
     * Ppd name.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ppdName: string;
  }

  /**
   * Query all printer ppds.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<PpdInfo[]> } - Promise that resolves with all printer ppd info.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function queryAllPrinterPpds(): Promise<PpdInfo[]>;

  /**
   * Defines the callback type used in registering to listen for printerInfoQuery event.
   * The value of printerInfo indicates the printer info.
   * The value of ppdInfo indicates all the printer ppd info.
   *
   * @param { PrinterInformation } printerInfo - the printer info
   *     <br>Printer Information.
   * @param { PpdInfo[] } ppdInfo - all the printer ppd info
   *     <br>All the printer ppd info.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  type PrinterInfoQueryCallback = (printerInfo: PrinterInformation, ppdInfo: PpdInfo[]) => void;

  /**
   * Register event callback for the printer info queried.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrinterInfoQueryCallback } callback - The callback function for the printer info queried.
   *     <br>The callback function for the printer info queried.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function onPrinterInfoQuery(callback: PrinterInfoQueryCallback): void;

  /**
   * Unregister event callback for the printer info queried.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrinterInfoQueryCallback } [callback] - The callback function for the printer info queried.
   *     <br>The callback function for the printer info queried.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function offPrinterInfoQuery(callback?: PrinterInfoQueryCallback): void;

  /**
   * Query printer info by ip.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerIp - Indicates the printer IP.
   *     <br>Indicates the printer IP.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100005 - Invalid printer IP.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function queryPrinterInfoByIp(printerIp: string): Promise<void>;

  /**
   * Connect a printer by the printer IP and ppd.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerIp - Indicates the printer IP.
   *     <br>IP of the printer to be connected.
   * @param { string } protocol - Indicates the protocol.
   *     <br>Protocol of the printer to be connected.
   * @param { string } ppdName - Indicates the ppd name.
   *     <br>Ppd name of the printer to be connected.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100005 - Invalid printer IP.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function connectPrinterByIpAndPpd(printerIp: string, protocol: string, ppdName: string): Promise<void>;

  /**
   * Save the pdf file for a print job.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - Indicates the print job ID.
   *     <br>The print job ID to which the file to be saved belongs.
   * @param { int } fd - Indicates the fd.
   *     <br>Fd of the file to be saved.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100006 - Invalid job ID.
   * @throws { BusinessError } 13100007 - Save file failed.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function savePdfFileJob(jobId: string, fd: int): Promise<void>;

  /**
   * Query recommend printer drivers by printer ID.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates the printer ID.
   *     <br>Indicates the printer ID.
   * @returns { Promise<PpdInfo[]> } - Promise that resolves with all ppd info of the printer.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100005 - Can not find the printer in system.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function queryRecommendDriversById(printerId: string): Promise<PpdInfo[]>;

  /**
   * Query recommend printer drivers by printer ID.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - Indicates the printer ID.
   *     <br>Printer ID of the printer to be connected.
   * @param { string } protocol - Indicates the protocol.
   *     <br>Protocol of the printer to be connected.
   * @param { string } ppdName - Indicates the ppd name.
   *     <br>Ppd name of the printer to be connected.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 13100003 - Add the printer to system failed.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function connectPrinterByIdAndPpd(printerId: string, protocol: string, ppdName: string): Promise<void>;

  /**
   * Add a printer to system.
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINTER_DRIVER
   * @param { string } printerName - Indicates the printer name.
   *     <br>Name of the printer to be added.
   * @param { string } uri - Indicates the printer uri.
   *     <br>Uri of the printer to be added.
   * @param { string } [ppdName] - Indicates the ppd name.
   *     <br>Ppd name of the printer to be added.
   * @param { string } [options] - Indicates the options.
   *     <br>Optional parameters when adding a printer.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 13100003 - Add the printer to system failed.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function addPrinter(printerName: string, uri: string, ppdName?: string, options?: string): Promise<boolean>;

  /**
   * Watermark handling result.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum WatermarkHandleResult {
    /**
     * Watermark handling success.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    WATERMARK_HANDLE_SUCCESS = 0,

    /**
     * Watermark handling failure.
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    WATERMARK_HANDLE_FAILURE = 1
  }

  /**
   * Defines the callback type used in registering to listen for watermark handling.
   * The value of jobId indicates the print job ID.
   * The value of fd indicates the fd.
   *
   * @param { string } jobId - the print job ID
   *     <br>Print job ID in preview.
   * @param { int } fd - File Descriptor
   *     <br>File descriptor in preview.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  type WatermarkCallback = (jobId: string, fd: int) => void;

  /**
   * Register to listen for watermark handling.
   * @permission ohos.permission.ENTERPRISE_MANAGE_PRINT
   * @param { WatermarkCallback } callback - Indicates the callback type used in registering to
   *     listen for watermark handling.
   *     <br>Indicates the callback type used in registering to listen for watermark handling.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function registerWatermarkCallback(callback: WatermarkCallback): void;

  /**
   * Unregister to listen for watermark handling.
   * @permission ohos.permission.ENTERPRISE_MANAGE_PRINT
   * @param { WatermarkCallback } [callback] - Indicates the callback type used in registering to
   *     listen for watermark handling.
   *     <br>Indicates the callback type used in registering to listen for watermark handling.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function unregisterWatermarkCallback(callback?: WatermarkCallback): void;

  /**
   * Notify watermark complete.
   * @permission ohos.permission.ENTERPRISE_MANAGE_PRINT
   * @param { string } jobId - Indicates the job ID.
   *     <br>Print job ID in preview.
   * @param { WatermarkHandleResult } result - Indicates the result.
   *     <br>Watermark processing results.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function notifyWatermarkComplete(jobId: string, result: WatermarkHandleResult): void;
}

export default print;