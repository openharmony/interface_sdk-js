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
 打印扩展能力
 * @file
 打印扩展能力
 * @kit BasicServicesKit
 */

import type PrintExtensionContext from './application/PrintExtensionContext';
import type Want from './@ohos.app.ability.Want';
import type print from './@ohos.print';

/**
 * 该模块提供打印扩展能力的调用接口。PrintExtensionAbility基于生命周期回调机制运行，系统在打印扩展连接、发现打印机、连接/断开打印机、查询打印机能力、启动/取消打印任务等场景下分别调用相应回调方法，开发者需在各回调中
 * 实现对应的打印扩展逻辑。
 *
 * @syscap SystemCapability.Print.PrintFramework
 * @systemapi Hide this for inner system use. [since 10 - 13]
 * @publicapi [since 14]
 * @stagemodelonly
 * @since 10 dynamic
 * @since 23 static
 */
declare class PrintExtensionAbility {

  /**
   * 打印扩展能力上下文。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  context: PrintExtensionContext;

  /**
   * 系统首次连接打印扩展能力时调用。开发者可在此回调中完成打印扩展能力的初始化工作，如初始化必要的资源、状态等。
   *
   * @param { Want } want - 表示创建打印扩展时传入的Want意图信息，包含调用方指定的信息（如action、uri等），用于初始化打印扩展能力。
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onCreate(want: Want): void;

  /**
   * 开始发现打印机时调用。开发者可在此回调中实现自己的打印机发现逻辑，可通过 [addPrinterToDiscovery]{@link @ohos.print:print.addPrinterToDiscovery} 将发现的打印机
   * 信息上报给系统。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onStartDiscoverPrinter(): void;

  /**
   * 停止发现打印机时调用。开发者应在此回调中停止打印机发现流程并释放相关资源。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onStopDiscoverPrinter(): void;

  /**
   * 连接到特定打印机时调用。开发者应在此回调中实现与指定打印机（通过printerId标识）的连接逻辑。
   *
   * @param { int } printerId - 表示打印机ID，应为已发现的打印机，取值于打印机发现流程上报的有效打印机标识。
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onConnectPrinter(printerId: int): void;

  /**
   * 断开与特定打印机的连接时调用。开发者应在此回调中实现断开打印机连接的逻辑并释放相关资源。
   *
   * @param { int } printerId - 表示打印机ID，应为已连接的打印机，取值于打印机发现流程上报的有效打印机标识。
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onDisconnectPrinter(printerId: int): void;

  /**
   * 开始打印任务时调用。开发者应在此回调中根据jobInfo中的任务信息处理打印操作，如解析打印任务参数并执行相应的打印流程。
   *
   * @param { print.PrintJob } jobInfo - 表示打印任务的信息，包含任务ID、打印机ID、文档信息等详细配置和状态，用于指定要开始的打印任务。
   * @throws { BusinessError } 202 - not system application [since 10 - 23]
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  public onStartPrintJob(jobInfo: print.PrintJob): void;

  /**
   * 取消已开始的打印任务时调用。开发者应在此回调中实现取消打印任务的逻辑，停止正在进行的打印操作并清理相关资源。
   *
   * @param { print.PrintJob } jobInfo - 表示打印任务的信息，包含任务ID、打印机ID、文档信息等详细配置和状态，需为已通过onStartPrintJob启动的打印任务，
   *     用于取消打印任务时定位目标任务。
   * @throws { BusinessError } 202 - not system application [since 10 - 23]
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  public onCancelPrintJob(jobInfo: print.PrintJob): void;

  /**
   * 请求打印机支持的能力特性（如色彩模式、双面打印模式、纸张尺寸等）时调用，例如在打印设置界面中用户选择打印机后，系统需要获取该打印机支持的能力信息时触发此回调。
   * 开发者应在此回调中根据printerId查询并返回对应打印机的能力信息（print.PrinterCapability）。
   *
   * @param { int } printerId - 表示打印机ID，应为已连接的打印机，取值于打印机发现流程上报的有效打印机标识。
   * @returns { print.PrinterCapability } printer capability.
   * @throws { BusinessError } 202 - not system application [since 10 - 23]
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  public onRequestPrinterCapability(printerId: int): print.PrinterCapability;

  /**
   * 系统打印服务在请求预览时回调此方法，开发者需继承PrintExtensionAbility类并实现此方法，将预览结果返回到系统打印服务。
   *
   * @param {  print.PrintJob } jobInfo - 表示打印任务信息。
   * @returns { string } 返回的预览结果
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  onRequestPreview(jobInfo: print.PrintJob): string;

  /**
   * 结束打印扩展能力时调用。开发者应在此回调中释放相关资源并完成必要的清理工作。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onDestroy(): void;
}

export default PrintExtensionAbility;