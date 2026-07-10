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
 * 该模块为基本打印的操作API，提供调用基础打印功能的接口。
 *
 * @syscap SystemCapability.Print.PrintFramework
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace print {

  /**
   * 打印任务完成后的事件监听回调接口类。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrintTask {
    /**
     * 注册打印任务阻塞的监听，使用callback异步回调。
     *
     * @permission ohos.permission.PRINT
     * @param { 'block' } type - 注册监听，<br/>监听字段：block，<br/>表示打印任务阻塞。
     * @param { Callback<void> } callback - 回调函数，通知调用方打印任务阻塞。
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    on(type: 'block', callback: Callback<void>): void;

    /**
     * Register event callback when the current print task is in process.
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
     * 注册打印任务成功的监听，使用callback异步回调。
     *
     * @permission ohos.permission.PRINT
     * @param { 'succeed' } type - 注册监听，<br/>监听字段：succeed，<br/>表示打印任务成功。
     * @param { Callback<void> } callback - 回调函数，通知调用方打印任务成功。
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    on(type: 'succeed', callback: Callback<void>): void;

    /**
     * Register event callback when the current print task is in process.
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
     * 注册打印任务失败的监听，使用callback异步回调。
     *
     * @permission ohos.permission.PRINT
     * @param { 'fail' } type - 注册监听，<br/>监听字段：fail，<br/>表示打印任务失败。
     * @param { Callback<void> } callback - 回调函数，通知调用方打印任务失败。
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    on(type: 'fail', callback: Callback<void>): void;

    /**
     * Register event callback when the current print task is in process.
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
     * 注册打印任务被取消的监听，使用callback异步回调。
     *
     * @permission ohos.permission.PRINT
     * @param { 'cancel' } type - 注册监听，<br/>监听字段：cancel，<br/>表示打印任务被取消。
     * @param { Callback<void> } callback - 回调函数，通知调用方打印任务被取消。
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    on(type: 'cancel', callback: Callback<void>): void;

    /**
     * Register event callback when the current print task is in process.
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
     * 取消打印任务阻塞的监听，使用callback异步回调。
     *
     * @permission ohos.permission.PRINT
     * @param { 'block' } type - 取消监听，<br/>监听字段：block，<br/>表示打印任务阻塞。
     * @param { Callback<void> } callback - 回调函数，取消指定的打印任务阻塞事件订阅。
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    off(type: 'block', callback?: Callback<void>): void;

    /**
     * Unregister event callback when the current print task is in process.
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
     * 取消打印任务成功的监听，使用callback异步回调。
     *
     * @permission ohos.permission.PRINT
     * @param { 'succeed' } type - 取消监听，<br/>监听字段：succeed，<br/>表示打印任务成功。
     * @param { Callback<void> } callback - 回调函数，取消指定的打印任务成功事件订阅。
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    off(type: 'succeed', callback?: Callback<void>): void;

    /**
     * Unregister event callback when the current print task is in process.
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
     * 取消打印任务失败的监听，使用callback异步回调。
     *
     * @permission ohos.permission.PRINT
     * @param { 'fail' } type - 取消监听，<br/>监听字段：fail，<br/>表示打印任务失败。
     * @param { Callback<void> } callback - 回调函数，取消指定的打印任务失败事件订阅。
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    off(type: 'fail', callback?: Callback<void>): void;

    /**
     * Unregister event callback when the current print task is in process.
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
     * 取消打印任务被取消的监听，使用callback异步回调。
     *
     * @permission ohos.permission.PRINT
     * @param { 'cancel' } type - 取消监听，<br/>监听字段：cancel，<br/>表示打印任务被取消。
     * @param { Callback<void> } callback - 回调函数，取消指定的打印任务被取消事件订阅。
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10 dynamic
     */
    off(type: 'cancel', callback?: Callback<void>): void;

    /**
     * Unregister event callback when the current print task is in process.
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
   * 第三方应用程序实现此接口来渲染要打印的文件。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  interface PrintDocumentAdapter {

    /**
     * 打印服务会通过本接口将一个空的pdf文件的文件描述符传给三方应用，由三方应用使用新的打印参数更新待打印文件，更新文件完成后通过本接口的回调方法writeResultCallback通知打印服务。
     *
     * @permission ohos.permission.PRINT
     * @param { string } jobId - 表示打印任务ID。
     * @param { PrintAttributes } oldAttrs - 表示旧打印参数。
     * @param { PrintAttributes } newAttrs - 表示新打印参数。
     * @param { int } fd - 表示打印文件传给接口调用方的pdf文件的文件描述符。
     * @param { function } writeResultCallback - 表示三方应用使用新的打印参数更新待打印文件完成后的回调。
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
     * 实现这个接口来监听打印任务状态的改变。
     *
     * @permission ohos.permission.PRINT
     * @param { string } jobId - 表示打印任务ID。
     * @param { PrintDocumentAdapterState } state - 表示打印任务更改为该状态。
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
   * 打印接口，传入文件进行打印，使用callback异步回调。拉起系统打印预览界面，需要使用[print]{@link print.print(files: Array<string>, context: Context)}接口，传入
   * context。
   *
   * @permission ohos.permission.PRINT
   * @param { Array<string> } files - 待打印文件列表，支持图片（.jpg .png .gif .bmp .webp）和pdf。文件需先保存到应用沙箱，通过fileUri.getUriFromPath获取
   *     到沙箱uri，再作为参数传入到本接口。
   * @param { AsyncCallback<PrintTask> } callback - 异步获取打印完成之后的回调。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 10 dynamic
   * @since 23 static
   */
  function print(files: Array<string>, callback: AsyncCallback<PrintTask>): void;

  /**
   * 打印接口，传入文件进行打印，使用Promise异步回调。拉起系统打印预览界面，需要使用[print]{@link print.print(files: Array<string>, context: Context)}接口，传入
   * context。
   *
   * @permission ohos.permission.PRINT
   * @param { Array<string> } files - 待打印文件列表，支持图片（.jpg .png .gif .bmp .webp）和pdf。文件需先保存到应用沙箱，通过fileUri.getUriFromPath获取
   *     到沙箱uri，再作为参数传入到本接口。
   * @returns { Promise<PrintTask> } Promise对象，返回[PrintTask]{@link print.PrintTask}。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 10 dynamic
   * @since 23 static
   */
  function print(files: Array<string>): Promise<PrintTask>;

  /**
   * 打印接口，传入文件进行打印，使用callback异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { Array<string> } files - 待打印文件列表，当前支持的文件类型：".bm", ".bmp", ".doc", ".docm", ".docx", ".dot", ".dotm", ".dotx
   *     ", ".gif", ".jfif", ".jpe", ".jpeg", ".jpg", "pdf", ".pot", ".potm", ".potx", ".pps", ".ppsm", ".ppsx", ".ppt",
   *     ".pptm", ".pptx", ".png", ".rtf", ".txt", ".webp", ".wps", ".xls", ".xlsb", ".xlsm", ".xlsx", ".xlt", ".xltx",
   *     ".xml"。文件需先保存到应用沙箱，通过fileUri.getUriFromPath获取到沙箱uri，再作为参数传入到本接口。
   * @param { Context } context - 用于拉起系统打印界面的UIAbilityContext。
   * @param { AsyncCallback<PrintTask> } callback - 异步获取打印完成之后的回调。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function print(files: Array<string>, context: Context, callback: AsyncCallback<PrintTask>): void;

  /**
   * 打印接口，传入文件进行打印，使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { Array<string> } files - 待打印文件列表，当前支持的文件类型：".bm", ".bmp", ".doc", ".docm", ".docx", ".dot", ".dotm", ".dotx
   *     ", ".gif", ".jfif", ".jpe", ".jpeg", ".jpg", "pdf", ".pot", ".potm", ".potx", ".pps", ".ppsm", ".ppsx", ".ppt",
   *     ".pptm", ".pptx", ".png", ".rtf", ".txt", ".webp", ".wps", ".xls", ".xlsb", ".xlsm", ".xlsx", ".xlt", ".xltx",
   *     ".xml"。文件需先保存到应用沙箱，通过fileUri.getUriFromPath获取到沙箱uri，再作为参数传入到本接口。
   * @param { Context } context - 用于拉起系统打印界面的UIAbilityContext。
   * @returns { Promise<PrintTask> } Promise对象，返回[PrintTask]{@link print.PrintTask}。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function print(files: Array<string>, context: Context): Promise<PrintTask>;

  /**
   * 打印接口，传入文件进行打印，三方应用需要更新打印文件，使用Promise异步回调。当前支持的文件类型：".pdf"。
   *
   * @permission ohos.permission.PRINT
   * @param { string } jobName - 表示待打印文件名称，例如：test.pdf。当前仅支持".pdf"文件类型。打印侧会通过
   *     [onStartLayoutWrite]{@link print.PrintDocumentAdapter.onStartLayoutWrite}接口将空的pdf文件的fd传给接口调用方，由调用方使用新的打印参数更新待打印
   *     文件。
   * @param { PrintDocumentAdapter } printAdapter - 表示三方应用实现的[PrintDocumentAdapter]{@link print.PrintDocumentAdapter}接口实
   *     例。
   * @param { PrintAttributes } printAttributes - 表示打印参数。
   * @param { Context } context - 用于拉起系统打印界面的UIAbilityContext。
   * @returns { Promise<PrintTask> } Promise对象，返回[PrintTask]{@link print.PrintTask}。
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
   * 定义打印参数的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  interface PrintAttributes {
    /**
     * 表示文件打印份数。默认值为1。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    copyNumber?: int;

    /**
     * 表示待打印文件的页面范围。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    pageRange?: PrintPageRange;

    /**
     * 表示待打印文件的纸张类型。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    pageSize?: PrintPageSize | PrintPageType;

    /**
     * 表示待打印文件的方向。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    directionMode?: PrintDirectionMode;

    /**
     * 表示待打印文件的色彩模式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    colorMode?: PrintColorMode;

    /**
     * 表示待打印文件的单双面模式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    duplexMode?: PrintDuplexMode;
  }

  /**
   * 定义打印范围的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  interface PrintPageRange {
    /**
     * 表示起始页。默认值为1。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    startPage?: int;

    /**
     * 表示结束页。默认值为待打印文件的最大页数。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    endPage?: int;

    /**
     * 表示待打印的页面范围的集合。默认值为空。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    pages?: Array<int>;
  }

  /**
   * 定义打印页边距的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrintMargin {
    /**
     * 表示页面上边距。默认值为0。单位：毫米。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    top?: int;

    /**
     * 表示页面下边距。默认值为0。单位：毫米。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    bottom?: int;

    /**
     * 表示页面左边距。默认值为0。单位：毫米。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    left?: int;

    /**
     * 表示页面右边距。默认值为0。单位：毫米。
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
   * 定义打印范围的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrinterRange {
    /**
     * 表示起始页。默认值为1。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    startPage?: int;

    /**
     * 表示结束页。默认值为待打印文件的最大页数。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    endPage?: int;

    /**
     * 表示待打印的页面范围的集合。默认值为空。
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
   * 定义打印预览属性的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PreviewAttribute {
    /**
     * 表示预览页面范围。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    previewRange: PrinterRange;

    /**
     * 表示预览文件结果。默认值为-1。
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
   * 定义打印分辨率的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrintResolution {
    /**
     * 表示分辨率ID。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * 表示水平DPI。单位：DPI。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    horizontalDpi: int;

    /**
     * 表示垂直DPI。单位：DPI。
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
   * 定义打印页面尺寸的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  interface PrintPageSize {
    /**
     * 表示纸张类型ID。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * 表示纸张类型名称。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 表示页面宽度，单位：毫米。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * 表示页面高度，单位：毫米。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * 定义打印能力的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrinterCapability {
    /**
     * 表示色彩模式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    colorMode: int;

    /**
     * 表示单双面打印模式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    duplexMode: int;

    /**
     * 表示打印机支持的页面尺寸列表。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    pageSize: Array<PrintPageSize>;

    /**
     * 表示打印机支持的分辨率列表。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    resolution?: Array<PrintResolution>;

    /**
     * 表示打印机最小边距。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    minMargin?: PrintMargin;

    /**
     * 表示JSON对象字符串。
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
   * 定义打印信息的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrinterInfo {
    /**
     * 表示打印机ID。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    printerId: string;

    /**
     * 表示打印机名称。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    printerName: string;

    /**
     * 表示当前打印机状态。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    printerState: PrinterState;

    /**
     * 表示打印机图标的资源ID。默认值为-1。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    printerIcon?: int;

    /**
     * 表示打印机说明。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    description?: string;

    /**
     * 表示打印机功能。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    capability?: PrinterCapability;

    /**
     * 表示JSON对象字符串。
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
   * 定义打印任务的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrintJob {
    /**
     * 表示待打印文件fd列表。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    fdList: Array<int>;

    /**
     * 表示打印任务ID。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    jobId: string;

    /**
     * 表示负责打印的打印机ID。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    printerId: string;

    /**
     * 表示当前打印任务状态。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    jobState: PrintJobState;

    /**
     * 表示当前打印任务子状态。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 11 - 23]
     * @publicapi [since 24]
     * @since 11 dynamic
     * @since 23 static
     */
    jobSubstate: PrintJobSubState;

    /**
     * 表示文件列表副本。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    copyNumber: int;

    /**
     * 表示打印范围大小。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    pageRange: PrinterRange;

    /**
     * 表示是否连续打印。true表示连续打印，false表示不连续打印。默认值为false。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    isSequential: boolean;

    /**
     * 表示选定的页面尺寸。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    pageSize: PrintPageSize;

    /**
     * 表示是否横向打印。true表示横向打印，false表示纵向打印。默认值为false。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    isLandscape: boolean;

    /**
     * 表示色彩模式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    colorMode: int;

    /**
     * 表示单双面打印模式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    duplexMode: int;

    /**
     * 表示当前页边距设置。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    margin?: PrintMargin;

    /**
     * 表示预览设置。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi [since 10 - 23]
     * @publicapi [since 24]
     * @since 10 dynamic
     * @since 23 static
     */
    preview?: PreviewAttribute;

    /**
     * 表示JSON对象字符串。
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
   * 定义打印任务的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface PrintJobData {
    /**
     * 表示打印机ID。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    printerId: string;

    /**
     * 表示打印任务名称。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    jobName: string;

    /**
     * 表示打印数据格式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    documentFormat: PrintDocumentFormat;

    /**
     * 表示打印数据来源形式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    docFlavor: DocFlavor;

    /**
     * 表示文件列表副本数。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    copyNumber: int;
    /**
     * 表示是否横向打印。true表示横向打印，false表示纵向打印。默认值为false。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isLandscape: boolean;

    /**
     * 表示色彩模式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    colorMode: PrintColorMode;

    /**
     * 表示单双面打印模式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    duplexMode: PrintDuplexMode;

    /**
     * 表示选定的页面尺寸。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    pageSize: PrintPageSize;

    /**
     * 表示打印任务的唯一标识符。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    jobId?: string;

    /**
     * 表示待打印文件fd列表。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    fdList?: int[];
    /**
     * 表示待打印二进制数据。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    binaryData?: Uint8Array;

    /**
     * 表示打印质量。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    printQuality?: PrintQuality;

    /**
     * 表示打印纸张类型。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    mediaType?: string;

    /**
     * 表示是否无边框打印。true表示无边框打印，false表示有边框打印。默认值为true。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isBorderless?: boolean;

    /**
     * 表示是否自动旋转页面。true表示自动旋转页面，false表示不自动旋转页面。默认值为true。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isAutoRotate?: boolean;

    /**
     * 表示是否逆序打印。true表示逆序打印，false表示顺序打印。默认值为false。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isReverse?: boolean;

    /**
     * 表示打印顺序方式。true表示逐页打印，false表示逐份打印。默认值为true。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isCollate?: boolean;

    /**
     * 表示是否连续打印。true表示连续打印，false表示不连续打印。默认值为false。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSequential?: boolean;

    /**
     * 表示以JSON格式字符串化的对象。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    options?: string;
  }

  /**
   * 打印数据格式的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum PrintDocumentFormat {
    /**
     * 表示自动检测格式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_AUTO = 0,

    /**
     * 表示Jpeg格式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_JPEG = 1,

    /**
     * 表示PDF格式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_PDF = 2,

    /**
     * 表示PostScript格式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_POSTSCRIPT = 3,

    /**
     * 表示文本格式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_TEXT = 4,

    /**
     * 表示RAW格式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DOCUMENT_FORMAT_RAW = 5
	}

  /**
   * 打印数据来源形式的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum DocFlavor {
    /**
     * 表示文件数据。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    FILE_DESCRIPTOR = 0,

    /**
     * 表示二进制数据。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    BYTES = 1
	}
  /**
   * 打印接口，传入文件或者二进制数据进行打印，使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { PrintJobData } job - 打印任务数据。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function startPrint(job: PrintJobData): Promise<void>;

  /**
   * 打印纸张方向的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintDirectionMode {
    /**
     * 表示自动选择纸张方向。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DIRECTION_MODE_AUTO = 0,

    /**
     * 表示纵向打印。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DIRECTION_MODE_PORTRAIT = 1,

    /**
     * 表示横向打印。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DIRECTION_MODE_LANDSCAPE = 2
  }

  /**
   * 打印色彩模式的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintColorMode {
    /**
     * 表示黑白打印。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    COLOR_MODE_MONOCHROME = 0,

    /**
     * 表示彩色打印。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    COLOR_MODE_COLOR = 1
  }

  /**
   * 打印单双面模式的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintDuplexMode {
    /**
     * 表示单面打印。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DUPLEX_MODE_NONE = 0,

    /**
     * 表示双面打印沿长边翻转。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DUPLEX_MODE_LONG_EDGE = 1,

    /**
     * 表示双面打印沿短边翻转。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    DUPLEX_MODE_SHORT_EDGE = 2
  }

  /**
   * 打印纸张类型的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintPageType {
    /**
     * 表示A3。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_ISO_A3 = 0,

    /**
     * 表示A4。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_ISO_A4 = 1,

    /**
     * 表示A5。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_ISO_A5 = 2,

    /**
     * 表示B5。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_JIS_B5 = 3,

    /**
     * 表示C5。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_ISO_C5 = 4,

    /**
     * 表示DL。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_ISO_DL = 5,

    /**
     * 表示Letter。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_LETTER = 6,

    /**
     * 表示Legal。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_LEGAL = 7,

    /**
     * 表示4x6相纸。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_PHOTO_4X6 = 8,

    /**
     * 表示5x7相纸。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_PHOTO_5X7 = 9,

    /**
     * 表示INT DL ENVELOPE。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_INT_DL_ENVELOPE = 10,

    /**
     * 表示B Tabloid。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PAGE_B_TABLOID = 11
  }

  /**
   * 打印任务状态的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintDocumentAdapterState {
    /**
     * 表示预览失败。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PREVIEW_DESTROY = 0,

    /**
     * 表示打印任务成功。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_TASK_SUCCEED = 1,

    /**
     * 表示打印任务失败。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_TASK_FAIL = 2,

    /**
     * 表示打印任务取消。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_TASK_CANCEL = 3,

    /**
     * 表示打印任务阻塞。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_TASK_BLOCK = 4
  }

  /**
   * 打印文件创建状态的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 11 dynamic
   * @since 23 static
   */
  enum PrintFileCreationState {
    /**
     * 表示打印文件创建成功。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_FILE_CREATED = 0,

    /**
     * 表示打印文件创建失败。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_FILE_CREATION_FAILED = 1,

    /**
     * 表示打印文件创建成功但未渲染。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 11 dynamic
     * @since 23 static
     */
    PRINT_FILE_CREATED_UNRENDERED = 2
  }

  /**
   * 打印机状态的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrinterState {
    /**
     * 表示新打印机到达。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_ADDED = 0,

    /**
     * 表示打印机丢失。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_REMOVED = 1,

    /**
     * 表示打印机更新。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_CAPABILITY_UPDATED = 2,

    /**
     * 表示打印机已连接。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_CONNECTED = 3,

    /**
     * 表示打印机已断开连接。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_DISCONNECTED = 4,

    /**
     * 表示打印机正在运行。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_RUNNING = 5
  }

  /**
   * 打印任务状态的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrintJobState {
    /**
     * 表示打印任务的初始状态。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_PREPARE = 0,

    /**
     * 表示打印任务传送到打印机。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_QUEUED = 1,

    /**
     * 表示执行打印任务。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_RUNNING = 2,

    /**
     * 表示打印任务已被阻止。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCKED = 3,

    /**
     * 表示打印任务完成。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_COMPLETED = 4
  }

  /**
   * 打印任务子状态的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrintJobSubState {
    /**
     * 表示打印任务成功。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_COMPLETED_SUCCESS = 0,

    /**
     * 表示打印任务失败。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_COMPLETED_FAILED = 1,

    /**
     * 表示打印任务已取消。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_COMPLETED_CANCELLED = 2,

    /**
     * 表示打印文件已损坏。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_COMPLETED_FILE_CORRUPTED = 3,

    /**
     * 表示打印处于离线状态。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_OFFLINE = 4,

    /**
     * 表示打印被其他进程占用。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_BUSY = 5,

    /**
     * 表示打印任务已取消。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_CANCELLED = 6,

    /**
     * 表示打印纸张用完。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_OUT_OF_PAPER = 7,

    /**
     * 表示打印墨水用完。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_OUT_OF_INK = 8,

    /**
     * 表示打印墨粉用完。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_OUT_OF_TONER = 9,

    /**
     * 表示打印卡纸。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_JAMMED = 10,

    /**
     * 表示打印盖开启。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_DOOR_OPEN = 11,

    /**
     * 表示打印服务请求。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_SERVICE_REQUEST = 12,

    /**
     * 表示打印墨水不足。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_LOW_ON_INK = 13,

    /**
     * 表示打印墨粉不足。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_LOW_ON_TONER = 14,

    /**
     * 表示打印墨水量非常低。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_REALLY_LOW_ON_INK = 15,

    /**
     * 表示打印证书有误。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_BAD_CERTIFICATE = 16,

    /**
     * 表示打印驱动异常。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_DRIVER_EXCEPTION = 17,

    /**
     * 表示打印账户时出错。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_ACCOUNT_ERROR = 18,

    /**
     * 表示打印许可异常。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_PRINT_PERMISSION_ERROR = 19,

    /**
     * 表示彩色打印权限异常。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_PRINT_COLOR_PERMISSION_ERROR = 20,

    /**
     * 表示设备未连接到网络。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_NETWORK_ERROR = 21,

    /**
     * 表示无法连接服务器。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_SERVER_CONNECTION_ERROR = 22,

    /**
     * 表示打印大文件异常。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_LARGE_FILE_ERROR = 23,

    /**
     * 表示文件分析异常。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_FILE_PARSING_ERROR = 24,

    /**
     * 表示文件转换太慢。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_SLOW_FILE_CONVERSION = 25,

    /**
     * 表示正在上传文件。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_RUNNING_UPLOADING_FILES = 26,

    /**
     * 表示正在转换文件。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_RUNNING_CONVERTING_FILES = 27,

    /**
     * 表示文件上传失败。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_FILE_UPLOADING_ERROR = 30,

    /**
     * 表示打印驱动缺失。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_DRIVER_MISSING = 34,

    /**
     * 表示打印任务中断。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_INTERRUPT = 35,

    /**
     * 表示打印机不可用。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_PRINTER_UNAVAILABLE = 98,

    /**
     * 表示打印未知问题。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINT_JOB_BLOCK_UNKNOWN = 99,
  }

  /**
   * 打印错误代码的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrintErrorCode {
    /**
     * 表示没有错误。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_NONE = 0,

    /**
     * 表示没有许可。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_NO_PERMISSION = 201,

    /**
     * 表示无效的参数。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_INVALID_PARAMETER = 401,

    /**
     * 表示一般打印失败。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_GENERIC_FAILURE = 13100001,

    /**
     * 表示RPC失败。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_RPC_FAILURE = 13100002,

    /**
     * 表示打印服务失败。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_SERVER_FAILURE = 13100003,

    /**
     * 表示打印扩展无效。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_INVALID_EXTENSION = 13100004,

    /**
     * 表示打印机无效。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_INVALID_PRINTER = 13100005,

    /**
     * 表示打印任务无效。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_INVALID_PRINT_JOB = 13100006,

    /**
     * 表示文件输入/输出错误。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    E_PRINT_FILE_IO = 13100007,

    /**
     * 表示文件数量超过上限，当前上限99个。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    E_PRINT_TOO_MANY_FILES = 13100010,

    /**
     * 表示当前SMB协议共享打印机账号因多次登录失败而被锁定。
     *
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    E_PRINT_SMB_LOGIN_LOCKOUT = 13100012,

    /**
     * 表示SMB协议共享打印机连接失败（发生网络错误、主机不可达或端口被阻止）。
     *
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    E_PRINT_SMB_CONNECTION_FAILURE = 13100013,

    /**
     * 表示SMB协议共享打印机账号/密码错误。
     *
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    E_PRINT_SMB_INVALID_CREDENTIALS = 13100014
  }

  /**
   * 打印应用事件的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum ApplicationEvent {
    /**
     * 表示打印应用被拉起的事件。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    APPLICATION_CREATED = 0,

    /**
     * 表示由于点击打印而关闭打印应用的事件。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    APPLICATION_CLOSED_FOR_STARTED = 1,

    /**
     * 表示由于点击取消而关闭打印应用的事件。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    APPLICATION_CLOSED_FOR_CANCELED = 2
  }

  /**
   * 定义打印扩展信息的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface PrinterExtensionInfo {
    /**
     * 表示打印机扩展的扩展ID。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    extensionId: string;

    /**
     * 表示扩展的供应商ID。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    vendorId: string;

    /**
     * 表示供应商名称。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    vendorName: string;

    /**
     * 表示供应商图标。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    vendorIcon: int;

    /**
     * 表示当前打印机扩展的版本。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    version: string;
  }

  /**
   * 查询所有已安装的打印机扩展服务，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { AsyncCallback<Array<PrinterExtensionInfo>> } callback - 异步查询所有已安装的打印机扩展服务之后的回调。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function queryAllPrinterExtensionInfos(callback: AsyncCallback<Array<PrinterExtensionInfo>>): void;

  /**
   * 查询所有已安装的打印机扩展服务，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<Array<PrinterExtensionInfo>> } Promise对象，返回包含所有已安装的打印机扩展服务信息的列表。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function queryAllPrinterExtensionInfos(): Promise<Array<PrinterExtensionInfo>>;

  /**
   * 通过指定“打印扩展能力列表”来发现打印机，发现的打印机具备包含指定的打印扩展能力。如果指定空的打印扩展能力列表，则表示加载所有扩展能力。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 10 - 19]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT [since 20]
   * @param { Array<string> } extensionList - 要加载的
   *     [打印扩展能力]{@link @ohos.app.ability.PrintExtensionAbility:PrintExtensionAbility}列表，列表成员为打印扩展能力的包名，空列表表示加载所有扩展能力。
   * @param { AsyncCallback<void> } callback - 异步开始发现打印机之后的回调。
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
   * 通过指定“打印扩展能力列表”来发现打印机，发现的打印机具备包含指定的打印扩展能力。如果指定空的打印扩展能力列表，则表示加载所有扩展能力，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 10 - 19]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT [since 20]
   * @param { Array<string> } extensionList - 要加载的
   *     [打印扩展能力]{@link @ohos.app.ability.PrintExtensionAbility:PrintExtensionAbility}列表，列表成员为打印扩展能力的包名，空列表表示加载所有扩展能力。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 停止发现打印机，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 10 - 19]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT [since 20]
   * @param { AsyncCallback<void> } callback - 停止发现打印机的异步回调。
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
   * 停止发现打印机，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 10 - 19]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT [since 20]
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 通过打印机ID连接打印机，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 10 - 19]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT [since 20]
   * @param { string } printerId - 打印机ID。
   * @param { AsyncCallback<void> } callback - 通过打印机ID异步连接打印机的回调。
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
   * 通过打印机ID连接打印机，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 10 - 19]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT [since 20]
   * @param { string } printerId - 打印机ID
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 断开特定打印机的连接，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - 打印机ID。
   * @param { AsyncCallback<void> } callback - 异步断开特定打印机的连接之后的回调。
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
   * 断开特定打印机的连接，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - 打印机ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 查询打印机能力，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - 打印机ID。
   * @param { AsyncCallback<void> } callback - 异步查询打印机能力之后的回调。
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
   * 查询打印机能力，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - 打印机ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 开始打印任务，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrintJob } jobInfo - 打印任务信息。
   * @param { AsyncCallback<void> } callback - 异步开始打印任务之后的回调。
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
   * 开始打印任务，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrintJob } jobInfo - 打印任务信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 取消已发送到打印机的打印任务，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - 打印任务ID。
   * @param { AsyncCallback<void> } callback - 异步取消已发送到打印机的打印任务之后的回调。
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
   * 取消已发送到打印机的打印任务，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - 打印任务ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 重新打印之前打印过的打印任务，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - 之前打印过的打印任务ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function restartPrintJob(jobId: string): Promise<void>;

  /**
   * 请求预览打印数据，使用callback回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrintJob } jobInfo - 打印任务信息。
   * @param { Callback<int> } callback - 请求预览打印数据之后的回调。
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
   * 请求预览打印数据，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrintJob } jobInfo - 打印任务信息。
   * @returns { Promise<int> } Promise对象，返回预览结果。
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
   * 注册打印机状态变化事件回调，使用callback回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'printerStateChange' } type - 表示打印机状态改变。
   * @param { function } callback - 打印机状态改变之后的回调。
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
   * 取消注册打印机状态变化事件回调，使用callback回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'printerStateChange' } type - 表示打印机状态改变。
   * @param { Callback<boolean> } callback - 表示取消注册打印机状态变化事件是否成功。true表示成功，false表示失败。
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
   * 注册打印任务状态变化事件回调，使用callback回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'jobStateChange' } type - 表示打印任务状态改变。
   * @param { function } callback - 打印任务状态改变之后的回调。
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
   * 取消注册打印任务状态变化事件回调，使用callback回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'jobStateChange' } type - 表示打印任务状态改变。
   * @param { Callback<boolean> } callback - 表示取消注册打印任务状态变化事件是否成功。true表示成功，false表示失败。
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
   * 注册打印扩展信息变化事件回调，使用callback回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'extInfoChange' } type - 表示打印扩展信息改变。
   * @param { function } callback - 打印扩展信息改变之后的回调。
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
   * 取消注册打印扩展信息变化事件回调，使用callback回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'extInfoChange' } type - 表示打印扩展信息改变。
   * @param { Callback<boolean> } callback - 表示取消注册打印扩展信息变化事件是否成功。true表示成功，false表示失败。
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
   * 添加打印机，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<PrinterInfo> } printers - 表示新到达的打印机列表。
   * @param { AsyncCallback<void> } callback - 异步添加打印机之后的回调。
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
   * 添加打印机，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<PrinterInfo> } printers - 表示新到达的打印机列表。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 移除打印机，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<string> } printerIds - 表示需移除的打印机列表。
   * @param { AsyncCallback<void> } callback - 异步移除打印机之后的回调。
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
   * 移除打印机，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<string> } printerIds - 表示需移除的打印机列表。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 更新特定打印机的信息，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<PrinterInfo> } printers - 表示待更新的打印机列表。
   * @param { AsyncCallback<void> } callback - 异步更新打印机信息之后的回调。
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
   * 更新特定打印机的信息，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Array<PrinterInfo> } printers - 表示待更新的打印机列表。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 更新打印机状态，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - 表示打印机ID。
   * @param { PrinterState } state - 表示打印机状态。
   * @param { AsyncCallback<void> } callback - 异步更新打印机状态之后的回调。
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
   * 更新打印机状态，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - 表示打印机ID。
   * @param { PrinterState } state - 表示打印机状态。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 更新打印任务状态，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 10 - 23]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.ENTERPRISE_MANAGE_PRINT [since 24]
   * @param { string} jobId - 表示打印任务ID。
   * @param { PrintJobState } state - 表示打印任务状态。
   * @param { PrintJobSubState } subState - 表示打印任务子状态。
   * @param { AsyncCallback<void> } callback - 异步更新打印任务状态之后的回调。
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
   * 更新打印任务状态，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 10 - 23]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.ENTERPRISE_MANAGE_PRINT [since 24]
   * @param { string} jobId - 表示打印任务ID。
   * @param { PrintJobState } state - 表示打印任务状态。
   * @param { PrintJobSubState } subState - 表示打印任务子状态。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 更新打印扩展状态，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } info - 表示打印扩展变更信息。
   * @param { AsyncCallback<void> } callback - 异步更新打印扩展状态之后的回调。
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
   * 更新打印扩展状态，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } info - 表示打印扩展变更信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 查询所有打印任务，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { AsyncCallback<void> } callback - 异步查询所有打印任务之后的回调。
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
   * 查询所有打印任务，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 查询所有活跃中的打印任务，使用Promise进行异步回调。
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
   * 查询所有打印任务，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { AsyncCallback<Array<PrintJob>> } callback - 异步查询所有打印任务之后的回调。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function queryPrintJobList(callback: AsyncCallback<Array<PrintJob>>): void;

  /**
   * 查询所有打印任务，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<Array<PrintJob>> } Promise对象，返回包含所有打印任务的列表。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function queryPrintJobList(): Promise<Array<PrintJob>>;

  /**
   * 按打印任务ID查询打印任务，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - 表示打印任务ID。
   * @param { AsyncCallback<PrintJob> } callback - 异步按打印任务ID查询打印任务之后的回调。
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
   * 按打印任务ID查询打印任务，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - 表示打印任务ID。
   * @returns { Promise<PrintJob> } Promise对象，返回查询到的打印任务。
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
   * 开始获取打印文件，使用Callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - 表示打印任务ID。
   * @param { PrintAttributes } printAttributes - 表示打印参数。
   * @param { int } fd - 表示打印文件描述符。
   * @param { Callback<PrintFileCreationState> } onFileStateChanged - 表示更新文件状态的回调。
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
   * 将spooler关闭信息通知打印服务，使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - 表示打印任务ID。
   * @param { 'spooler_closed_for_cancelled' | 'spooler_closed_for_started' } type - 表示spooler关闭信息。
   * @param { AsyncCallback<void> } callback - 异步将spooler关闭信息通知打印服务之后的回调。
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
  function notifyPrintServiceSpoolerCloseForStarted(jobId: string, callback: AsyncCallback<void>): void;

  /**
   * 将spooler关闭信息通知打印服务，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - 表示打印任务ID。
   * @param { 'spooler_closed_for_cancelled' | 'spooler_closed_for_started' } type - 表示spooler关闭信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 获取系统中已添加的打印机列表，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT
   * @returns { Promise<Array<string>> } Promise对象，返回包含所有已添加打印机的打印机ID的列表。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   * @since 23 static
   */
  function getAddedPrinters(): Promise<Array<string>>;

  /**
   * 根据打印机id获取打印机信息，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - 表示打印机ID。
   * @returns { Promise<PrinterInfo> } Promise对象，返回查询到的打印机信息。
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
   * 将打印应用相关事件通知打印服务，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { ApplicationEvent } event - 表示打印应用事件。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 添加打印机到系统打印机发现列表，使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { PrinterInformation } printerInformation - 表示新发现的打印机。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  function addPrinterToDiscovery(printerInformation: PrinterInformation): Promise<void>;

  /**
   * 更新打印机能力到系统打印机发现列表，使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { PrinterInformation } printerInformation - 表示待更新能力的打印机。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  function updatePrinterInDiscovery(printerInformation: PrinterInformation): Promise<void>;

  /**
   * 从系统打印机发现列表里移除打印机，使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { string } printerId - 表示待移除的打印机。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  function removePrinterFromDiscovery(printerId: string): Promise<void>;

  /**
   * 根据打印机id获取打印机信息，使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { string } printerId - 表示待获取信息的打印机id。
   * @returns { Promise<PrinterInformation> } Promise对象，返回打印机信息。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  function getPrinterInformationById(printerId: string): Promise<PrinterInformation>;

  /**
   * 定义打印机信息的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  interface PrinterInformation {
    /**
     * 表示打印机ID。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    printerId: string;

    /**
     * 表示打印机名称。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    printerName: string;

    /**
     * 表示当前打印机状态。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    printerStatus: PrinterStatus;

    /**
     * 表示打印机说明。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    description?: string;

    /**
     * 表示打印机能力。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    capability?: PrinterCapabilities;

    /**
     * 表示打印机uri。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    uri?: string;

    /**
     * 表示打印机型号。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    printerMake?: string;

    /**
     * 表示打印机首选项。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    preferences?: PrinterPreferences;

    /**
     * 表示打印机别名。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    alias?: string;

    /**
     * 表示添加打印机时选择的驱动的信息。
     *
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    selectedDriver?: PpdInfo;

    /**
     * 表示添加打印机时使用的协议。
     *
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    selectedProtocol?: string;

    /**
     * 表示打印机详细信息。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    options?: string;
  }

  /**
   * 定义打印机能力的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  interface PrinterCapabilities {
    /**
     * 表示打印机支持的纸张尺寸列表。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedPageSizes: Array<PrintPageSize>;

    /**
     * 表示打印机支持的色彩模式列表。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedColorModes: Array<PrintColorMode>;

    /**
     * 表示打印机支持的单双面模式列表。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedDuplexModes: Array<PrintDuplexMode>;

    /**
     * 表示打印机支持的纸张类型列表。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedMediaTypes?: Array<string>;

    /**
     * 表示打印机支持的打印质量列表。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedQualities?: Array<PrintQuality>;

    /**
     * 表示打印机支持的打印方向列表。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    supportedOrientations?: Array<PrintOrientationMode>;

    /**
     * 表示打印机能力详细信息。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    options?: string;
  }

  /**
   * 打印质量的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrintQuality {
    /**
     * 表示经济的打印质量。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    QUALITY_DRAFT = 3,

    /**
     * 表示标准的打印质量。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    QUALITY_NORMAL = 4,

    /**
     * 表示最佳的打印质量。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    QUALITY_HIGH = 5
  }

  /**
   * 打印方向的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrintOrientationMode {
    /**
     * 表示纵向打印。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    ORIENTATION_MODE_PORTRAIT = 0,

    /**
     * 表示横向打印。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    ORIENTATION_MODE_LANDSCAPE= 1,

    /**
     * 表示横向翻转打印。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    ORIENTATION_MODE_REVERSE_LANDSCAPE = 2,

    /**
     * 表示纵向翻转打印。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    ORIENTATION_MODE_REVERSE_PORTRAIT = 3,

    /**
     * 表示自适应方向打印。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    ORIENTATION_MODE_NONE = 4
  }

  /**
   * 打印机状态的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 14 dynamic
   * @since 23 static
   */
  enum PrinterStatus {
    /**
     * 表示打印机空闲状态。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_IDLE = 0,

    /**
     * 表示打印机忙碌状态。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_BUSY = 1,

    /**
     * 表示打印机脱机状态。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 14 dynamic
     * @since 23 static
     */
    PRINTER_UNAVAILABLE = 2
  }

  /**
   * 定义打印机首选项的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   * @since 23 static
   */
  interface PrinterPreferences {
    /**
     * 表示默认单双面模式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    defaultDuplexMode?: PrintDuplexMode;

    /**
     * 表示默认打印质量。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    defaultPrintQuality?: PrintQuality;

    /**
     * 表示默认纸张类型。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    defaultMediaType?: string;

    /**
     * 表示默认纸张尺寸的ID，其范围包含国际标准化组织定义的标准纸张尺寸，如ISO_A4，和系统中定义的非标准的纸张尺寸，如Custom.178x254mm，表示这种纸张尺寸为178毫米 x 254毫米。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    defaultPageSizeId?: string;

    /**
     * 表示默认打印方向。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    defaultOrientation?: PrintOrientationMode;

    /**
     * 表示是否无边距打印，true表示无边距，false表示有边距。默认值为false。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    borderless?: boolean;

    /**
     * 表示默认色彩模式。默认值为黑白。
     *
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    defaultColorMode?: PrintColorMode;

    /**
     * 表示默认出纸顺序。true表示逐份打印，false表示逐页打印。默认值为逐份。
     *
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    defaultCollate?: boolean;

    /**
     * 表示默认打印顺序。true表示逆序打印，false表示正序打印。默认值为正序打印。
     *
     * **模型约束：** 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    defaultReverse?: boolean;

    /**
     * 表示打印机首选项中不在以上字段中的其他字段，查询打印机或者从打印机驱动获取，以json格式存储在string中。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    options?: string;
  }

  /**
   * 打印机相关事件的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   * @since 23 static
   */
  enum PrinterEvent {
    /**
     * 表示打印机添加事件。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_ADDED = 0,

    /**
     * 表示打印机删除事件。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_DELETED = 1,

    /**
     * 表示打印机状态变化事件。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_STATE_CHANGED = 2,

    /**
     * 表示打印机信息变化事件。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_INFO_CHANGED = 3,

    /**
     * 表示打印机首选项变化事件。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_PREFERENCE_CHANGED = 4,

    /**
     * 表示上次使用的打印机的变化事件。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    PRINTER_EVENT_LAST_USED_PRINTER_CHANGED = 5
  }

  /**
   * 默认打印类型的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   * @since 23 static
   */
  enum DefaultPrinterType {
    /**
     * 表示将用户手动设置的默认打印机作为当前默认打印机。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    DEFAULT_PRINTER_TYPE_SET_BY_USER = 0,

    /**
     * 表示自动将上次使用的打印机作为当前默认打印机。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 18 dynamic
     * @since 23 static
     */
    DEFAULT_PRINTER_TYPE_LAST_USED_PRINTER = 1
  }

  /**
   * 更新系统中打印机的部分信息，使用Promise异步回调。当前仅允许更新[PrinterInformation]{@link print.PrinterInformation}的alias和options字段。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB [since 18 - 23]
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.ENTERPRISE_MANAGE_PRINT [since 24]
   * @param { PrinterInformation } printerInformation - 表示待更新信息的打印机。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 设置打印机首选项，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - 表示打印机ID。
   * @param { PrinterPreferences } printerPreferences - 表示打印机首选项。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 发现usb打印机，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<Array<PrinterInformation>> } Promise对象，返回发现到的usb打印机信息。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function discoverUsbPrinters(): Promise<Array<PrinterInformation>>;

  /**
   * 设置默认打印机，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - 表示打印机ID。
   * @param { DefaultPrinterType } type - 表示默认打印机类型。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 将打印应用相关事件通知打印服务，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { ApplicationEvent } event - 表示打印应用事件。
   * @param { string } jobId - 表示打印任务ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 将打印机事件和打印机信息作为参数的回调方法。
   *
   * @param { PrinterEvent } event - 表示打印机事件。
   * @param { PrinterInformation } printerInformation - 表示打印机信息。
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   * @since 23 static
   */
  type PrinterChangeCallback = (event: PrinterEvent, printerInformation: PrinterInformation) => void;

  /**
   * 注册打印机变动事件回调，使用callback回调。
   *
   * @permission ohos.permission.PRINT
   * @param { 'printerChange' } type - 表示打印机变动事件。
   * @param { PrinterChangeCallback } callback - 打印机变动之后的回调。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   */
  function on(type: 'printerChange', callback: PrinterChangeCallback): void;

  /**
   * Register event callback for the change of printer.
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
   * 取消注册打印机变动事件回调，使用callback回调。
   *
   * @permission ohos.permission.PRINT
   * @param { 'printerChange' } type - 表示打印机变动事件。
   * @param { PrinterChangeCallback } [callback] - 表示取消注册打印机变动事件后的回调。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 18 dynamic
   */
  function off(type: 'printerChange', callback?: PrinterChangeCallback): void;

  /**
   * Unregister event callback for the change of printer.
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
   * 定义共享设备信息的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface SharedHost {
    /**
     * 表示共享设备的IP地址。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ip: string;

    /**
     * 表示共享设备的主机名称。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    shareName: string;

    /**
     * 表示共享设备的工作组名称。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    workgroupName: string;
  }

  /**
   * 获取所有可用的共享主机。
   *
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
   * 以注册用户身份对SMB设备进行身份验证，并获取可用打印机。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { SharedHost } host - 要进行身份验证的SMB主机。
   * @param { string } username - 用于鉴权的用户名。
   * @param { string } password - 用于身份验证的密码。
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
   * 检查首选项冲突。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - 打印机ID。
   * @param { string } changedType - 在打印界面上修改的字段名称。
   * @param { PrinterPreferences } preferences - 打印界面选择的值。
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
   * 按打印机ID获取默认首选项。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - 打印机ID。
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
   * 使用打印机的uri查询打印机能力，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerUri - 表示打印机uri。
   * @param { string } printerId - 表示打印机ID。
   * @returns { Promise<PrinterCapabilities> } - Promise对象，返回打印机能力。
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
   * 添加打印机到cups，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerUri - 表示打印机uri。
   * @param { string } printerName - 表示打印机名称。
   * @param { string } printerMake - 表示打印机型号。
   * @returns { Promise<boolean> } Promise对象，返回true表示添加打印机到cups成功；返回false表示添加打印机到cups失败。
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
   * 从cups中删除打印机，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerName - 表示打印机名称。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function deletePrinterFromCups(printerName: string): Promise<void>;

  /**
   * 验证打印作业。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - 打印作业ID。
   *     <br>要打印的作业ID。
   * @param { string } userName - 用户名。
   *     <br>用户名。
   * @param { string } password - 用户密码。
   *     <br>用户密码。
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
   * 分析打印事件。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - 打印机ID。
   *     <br>要分析的打印机ID。
   * @param { string } eventType - 前卫类型。
   *     <br>需要分析的事件类型。
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
   * 定义打印机所使用驱动的PPD文件信息的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface PpdInfo {
    /**
     * 表示当前PPD文件内的打印机厂商名称。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    manufacturer: string;

    /**
     * 表示当前PPD文件内的打印机别名。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    nickName: string;

    /**
     * 表示当前PPD文件的名称。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ppdName: string;
  }

  /**
   * 查询所有打印机ppd。
   *
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
   * 定义注册监听printInfoQuery事件的回调类型。
   * printInfo的值表示打印机信息。
   * ppdInfo的值表示所有打印机的ppd信息。
   *
   * @param { PrinterInformation } printerInfo - 打印机信息
   *     <br>打印机信息。
   * @param { PpdInfo[] } ppdInfo - 所有打印机ppd信息
   *     <br>所有打印机ppd信息。
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  type PrinterInfoQueryCallback = (printerInfo: PrinterInformation, ppdInfo: PpdInfo[]) => void;

  /**
   * 为查询到的打印机信息注册事件回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrinterInfoQueryCallback } callback - 查询到的打印机信息的回调函数。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function onPrinterInfoQuery(callback: PrinterInfoQueryCallback): void;

  /**
   * 查询到的打印机信息的Unregister事件回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { PrinterInfoQueryCallback } [callback] - 查询到的打印机信息的回调函数。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function offPrinterInfoQuery(callback?: PrinterInfoQueryCallback): void;

  /**
   * 根据ip查询打印机信息。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerIp - 打印机IP。
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
   * 通过打印机IP和ppd连接打印机。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerIp - 打印机IP。
   * @param { string } protocol - 协议类型。
   * @param { string } ppdName - ppd名称。
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
   * 保存打印作业的pdf文件。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } jobId - 打印作业ID。
   * @param { int } fd - 文件描述符。
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
   * 根据打印机ID查询推荐的打印机驱动程序。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - 打印机ID。
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
   * 根据打印机ID查询推荐的打印机驱动程序。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } printerId - 打印机ID。
   * @param { string } protocol - 协议类型。
   * @param { string } ppdName - ppd名称。
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
   * 添加打印机到系统中，使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINTER_DRIVER
   * @param { string } printerName - 表示打印机名称。
   * @param { string } uri - 表示打印机的URI。
   * @param { string } [ppdName] - 表示打印机的PPD文件名称。
   * @param { string } [options] - JSON对象字符串，表示打印机选项参数。
   * @returns { Promise<boolean> } Promise对象，返回添加打印机成功与否的结果。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 13100003 - Add the printer to system failed.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function addPrinter(printerName: string, uri: string, ppdName?: string, options?: string): Promise<boolean>;

  /**
   * 强制水印处理结果的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum WatermarkHandleResult {
    /**
     * 表示强制水印处理成功。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    WATERMARK_HANDLE_SUCCESS = 0,

    /**
     * 表示强制水印处理失败。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    WATERMARK_HANDLE_FAILURE = 1
  }

  /**
   * 定义用来注册强制水印处理的监听事件时使用的回调类型。
   *
   * @param { string } jobId - 表示当前打印任务的id。
   * @param { int } fd - 表示当前文件的文件描述符。
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  type WatermarkCallback = (jobId: string, fd: int) => void;

  /**
   * 注册强制水印处理的监听事件。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_PRINT
   * @param { WatermarkCallback } callback - 表示注册强制水印处理的监听事件时使用的回调类型。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function registerWatermarkCallback(callback: WatermarkCallback): void;

  /**
   * 注销强制水印处理的监听事件。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_PRINT
   * @param { WatermarkCallback } [callback] - 表示注册监听强制水印处理时使用的回调类型。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function unregisterWatermarkCallback(callback?: WatermarkCallback): void;

  /**
   * 通知水印处理完成。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_PRINT
   * @param { string } jobId - 表示打印任务ID。
   * @param { WatermarkHandleResult } result - 表示水印处理结果。
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function notifyWatermarkComplete(jobId: string, result: WatermarkHandleResult): void;
}

export default print;