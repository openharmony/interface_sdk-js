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
 * @kit BasicServicesKit
 */

import type { Callback } from './@ohos.base';

/**
 * 该模块为扫描框架的js-api接口文档，提供发现和连接扫描仪的能力。
 *
 * > **说明：**
 * > > 当前界面仅包含本模块的公开接口。
 *
 * @syscap SystemCapability.Print.PrintFramework
 * @since 20 dynamic
 * @since 23 static
 */
declare namespace scan {
  /**
   * 定义扫描错误码的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  enum ScanErrorCode {
    /**
     * 无权限。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_ERROR_NO_PERMISSION = 201,

    /**
     * 非系统应用。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_ERROR_NOT_SYSTEM_APPLICATION = 202,

    /**
     * 无效参数。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_ERROR_INVALID_PARAMETER = 401,

    /**
     * 通用失败。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_ERROR_GENERIC_FAILURE = 13100001,

    /**
     * RPC失败。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_ERROR_RPC_FAILURE = 13100002,

    /**
     * 服务失败。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_ERROR_SERVER_FAILURE = 13100003,

    /**
     * 不支持的操作。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_ERROR_UNSUPPORTED = 13100004,

    /**
     * 操作取消。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_ERROR_CANCELED = 13100005,

    /**
     * 设备忙。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_ERROR_DEVICE_BUSY = 13100006,

    /**
     * 无效操作。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_ERROR_INVALID = 13100007,

    /**
     * 卡纸。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_ERROR_JAMMED = 13100008,

    /**
     * 缺纸。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_ERROR_NO_DOCS = 13100009,

    /**
     * 盖子打开。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_ERROR_COVER_OPEN = 13100010,

    /**
     * I/O错误。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_ERROR_IO_ERROR = 13100011,

    /**
     * 内存不足。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_ERROR_NO_MEMORY = 13100012
    }

  /**
   * 定义参数限制类型的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  enum ConstraintType {
    /**
     * 无限制。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_CONSTRAINT_NONE = 0,

    /**
     * 范围限制。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_CONSTRAINT_RANGE = 1,

    /**
     * 数字列表。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_CONSTRAINT_WORD_LIST = 2,

    /**
     * 字符串列表。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_CONSTRAINT_STRING_LIST = 3
    }

  /**
   * 定义物理单位的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  enum PhysicalUnit {
    /**
     * 无单位。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_UNIT_NONE = 0,

    /**
     * 像素单位。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_UNIT_PIXEL = 1,

    /**
     * 位单位。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_UNIT_BIT = 2,

    /**
     * 毫米单位。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_UNIT_MM = 3,

    /**
     * DPI单位。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_UNIT_DPI = 4,

    /**
     * 百分比单位。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_UNIT_PERCENT = 5,

    /**
     * 微秒单位。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_UNIT_MICROSECOND = 6
    }

  /**
   * 定义选项值类型的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  enum OptionValueType {
    /**
     * 布尔类型。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_TYPE_BOOL = 0,

    /**
     * 整数类型。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_TYPE_INT = 1,

    /**
     * 定点数类型。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_TYPE_FIXED = 2,

    /**
     * 字符串类型。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCAN_TYPE_STRING = 3
    }

  /**
   * 定义扫描仪同步码的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  enum ScannerSyncMode {
    /**
     * 更新码，表示扫描仪id的变化。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    UPDATE_STR = 'update',

    /**
     * 删除码，表示扫描仪掉线。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    DELETE_STR = 'delete'
    }

  /**
   * 定义扫描仪发现方式的枚举。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  enum ScannerDiscoveryMode {
    /**
     * 网络扫描仪的发现模式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    TCP_STR = 'TCP',

    /**
     * USB扫描仪的发现模式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    USB_STR = 'USB'
    }

  /**
   * 定义范围的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  interface Range {
    /**
     * 范围的最小值。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    minValue: int;

    /**
     * 范围的最大值。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    maxValue: int;

    /**
     * 范围的量化值。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    quantValue: int;
    }

  /**
   * 定义扫描仪参数的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  interface ScannerParameter {
    /**
     * 选项名称。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    optionName: string;

    /**
     * 选项索引。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    optionIndex: int;

    /**
     * 选项标题。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    optionTitle: string;

    /**
     * 选项描述。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    optionDesc: string;

    /**
     * 选项值类型。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    optionType: OptionValueType;

    /**
     * 选项物理单位。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    optionUnit: PhysicalUnit;

    /**
     * 选项约束类型。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    optionConstraintType: ConstraintType;

    /**
     * 选项字符串约束。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    optionConstraintString?: string[];

    /**
     * 选项整数约束。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    optionConstraintInt?: int[];

    /**
     * 选项范围约束。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    optionConstraintRange?: Range;
    }

  /**
   * 定义扫描仪选项值的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  interface ScannerOptionValue {
    /**
     * 值类型。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    valueType: OptionValueType;

    /**
     * 数值。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    numValue?: int;

    /**
     * 字符串值。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    strValue?: string;

    /**
     * 布尔值。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    boolValue?: boolean;
    }

  /**
   * 定义图片扫描进度的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  interface PictureScanProgress {
    /**
     * 当前进度百分比，范围从0~100。单位：百分比。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    progress: int;

    /**
     * 扫描图片的文件描述符。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    pictureFd: int;

    /**
     * 是否是本次扫描的最后一张图片。true表示是最后一张图片，false表示不是最后一张图片。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    isFinal: boolean;
    }

  /**
   * 定义扫描仪设备的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  interface ScannerDevice {
    /**
     * 扫描仪的唯一标识符。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    scannerId: string;

    /**
     * 扫描仪的发现模式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    discoveryMode: ScannerDiscoveryMode;

    /**
     * 扫描仪的唯一ID。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    uniqueId: string;

    /**
     * 扫描仪的制造商。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    manufacturer: string;

    /**
     * 扫描仪的型号。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    model: string;

    /**
     * 扫描仪的设备名称。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    deviceName: string;
    }

  /**
   * 定义扫描仪同步设备的接口。
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  interface ScannerSyncDevice {
    /**
     * 扫描仪ID。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    scannerId: string;
    /**
     * 发现模式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    discoveryMode: ScannerDiscoveryMode;

    /**
     * 唯一ID。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    uniqueId: string;

    /**
     * 同步模式。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    syncMode: ScannerSyncMode;

    /**
     * 旧的扫描仪ID，仅在syncMode为"update"时有效。
     *
     * @syscap SystemCapability.Print.PrintFramework
     * @since 20 dynamic
     * @since 23 static
     */
    oldScannerId?: string;
    }

  /**
   * 初始化扫描服务。使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  function init(): Promise<void>;

  /**
   * 退出扫描服务。使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  function exit(): Promise<void>;

  /**
   * 开始发现扫描仪。使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  function startScannerDiscovery(): Promise<void>;

  /**
   * 打开扫描仪。使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { string } scannerId - 要打开的扫描仪的ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  function openScanner(scannerId: string): Promise<void>;

  /**
   * 关闭扫描仪。使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { string } scannerId - 要关闭的扫描仪的ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  function closeScanner(scannerId: string): Promise<void>;

  /**
   * 获取扫描仪参数。使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { string } scannerId - 扫描仪的ID。
   * @returns { Promise<ScannerParameter[]> } Promise used to return the scanner parameters.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  function getScannerParameter(scannerId: string): Promise<ScannerParameter[]>;

  /**
   * 设置扫描仪参数。使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { string } scannerId - 扫描仪的ID。
   * @param { int } optionIndex - 要设置的选项的索引。
   * @param { ScannerOptionValue } value - 要设置的值。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  function setScannerParameter(scannerId: string, optionIndex: int, value: ScannerOptionValue): Promise<void>;

  /**
   * 设置扫描选项为自动模式。使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { string } scannerId - 扫描仪的ID。
   * @param { int } optionIndex - 要设置为自动的选项的索引。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  function setScanAutoOption(scannerId: string, optionIndex: int): Promise<void>;

  /**
   * 获取当前扫描仪设置。使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { string } scannerId - 扫描仪的ID。
   * @param { int } optionIndex - 要获取的选项的索引。
   * @returns { Promise<ScannerOptionValue> } Promise对象，返回扫描仪选项值。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  function getScannerCurrentSetting(scannerId: string, optionIndex: int): Promise<ScannerOptionValue>;

  /**
   * 开始扫描。使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { string } scannerId - 扫描仪的ID。
   * @param { boolean } batchMode - 是否使用批处理模式。true表示使用批处理模式，false表示不使用批处理模式。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  function startScan(scannerId: string, batchMode: boolean): Promise<void>;

  /**
   * 取消扫描。使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { string } scannerId - 扫描仪的ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  function cancelScan(scannerId: string): Promise<void>;

  /**
   * 获取图片扫描进度。使用Promise异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { string } scannerId - 扫描仪的ID。
   * @returns { Promise<PictureScanProgress> } Promise对象，返回图片扫描进度信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   * @since 23 static
   */
  function getPictureScanProgress(scannerId: string): Promise<PictureScanProgress>;

  /**
   * 添加扫描仪（系统API）。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } uniqueId - 扫描仪的唯一ID。
   * @param { ScannerDiscoveryMode } discoveryMode - 发现模式。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function addScanner(uniqueId: string, discoveryMode: ScannerDiscoveryMode): Promise<void>;

  /**
   * 删除扫描仪（系统API）。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { string } uniqueId - 扫描仪的唯一ID。
   * @param { ScannerDiscoveryMode } discoveryMode - 发现模式。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function deleteScanner(uniqueId: string, discoveryMode: ScannerDiscoveryMode): Promise<void>;

  /**
   * 获取已添加的扫描仪（系统API）。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @returns { Promise<ScannerDevice[]> } Promise used to return the array of added scanners.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function getAddedScanners(): Promise<ScannerDevice[]>;

  /**
   * 注册扫描仪设备发现事件回调。使用callback异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { 'scanDeviceFound' } type - 事件类型。
   * @param { Callback<ScannerDevice> } callback - 回调函数，返回扫描仪设备发现信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   */
  function on(type: 'scanDeviceFound', callback: Callback<ScannerDevice>): void;

  /**
   * Register event callback for scanner device found.
   * @permission ohos.permission.PRINT
   * @param { Callback<ScannerDevice> } callback - Callback for device found event.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 23 static
   */
  function onScanDeviceFound(callback: Callback<ScannerDevice>): void;

  /**
   * 取消注册扫描仪设备发现事件回调。使用callback异步回调。
   *
   * @permission ohos.permission.PRINT
   * @param { 'scanDeviceFound' } type - 事件类型。
   * @param { Callback<ScannerDevice> } [callback] - 回调函数，返回扫描仪设备发现信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   */
  function off(type: 'scanDeviceFound', callback?: Callback<ScannerDevice>): void;

  /**
   * Unregister event callback for scanner device found.
   * @permission ohos.permission.PRINT
   * @param { Callback<ScannerDevice> } [callback] - Optional callback to unregister.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 23 static
   */
  function offScanDeviceFound(callback?: Callback<ScannerDevice>): void;

  /**
   * 注册扫描仪设备同步事件回调。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'scanDeviceSync' } type - 事件类型。
   * @param { Callback<ScannerSyncDevice> } callback - 回调函数，返回扫描仪设备同步信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   */
  function on(type: 'scanDeviceSync', callback: Callback<ScannerSyncDevice>): void;

  /**
   * Register event callback for scanner device sync.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Callback<ScannerSyncDevice> } callback - Callback for device sync event.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 23 static
   */
  function onScanDeviceSync(callback: Callback<ScannerSyncDevice>): void;

  /**
   * 取消注册扫描仪设备同步事件回调。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'scanDeviceSync' } type - 事件类型。
   * @param { Callback<ScannerSyncDevice> } [callback] - 回调函数，返回扫描仪设备同步信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 20 dynamic
   */
  function off(type: 'scanDeviceSync', callback?: Callback<ScannerSyncDevice>): void;

  /**
   * Unregister event callback for scanner device sync.
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Callback<ScannerSyncDevice> } [callback] - Optional callback to unregister.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.Print.PrintFramework
   * @since 23 static
   */
  function offScanDeviceSync(callback?: Callback<ScannerSyncDevice>): void;

  /**
   * 注册扫描仪设备添加事件回调（系统API）。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'scanDeviceAdd' } type - 事件类型。
   * @param { Callback<ScannerDevice> } callback - 回调函数，返回扫描仪设备添加信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   */
  function on(type: 'scanDeviceAdd', callback: Callback<ScannerDevice>): void;

  /**
   * Register event callback for scanner device add (system API).
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Callback<ScannerDevice> } callback - Callback for device add event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onScanDeviceAdd(callback: Callback<ScannerDevice>): void;

  /**
   * 取消注册扫描仪设备添加事件回调（系统API）。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'scanDeviceAdd' } type - 事件类型。
   * @param { Callback<ScannerDevice> } [callback] - 回调函数，返回扫描仪设备添加信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   */
  function off(type: 'scanDeviceAdd', callback?: Callback<ScannerDevice>): void;

  /**
   * Unregister event callback for scanner device add (system API).
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Callback<ScannerDevice> } [callback] - Optional callback to unregister.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offScanDeviceAdd(callback?: Callback<ScannerDevice>): void;

  /**
   * 注册扫描仪设备删除事件回调（系统API）。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'scanDeviceDel' } type - 事件类型。
   * @param { Callback<ScannerDevice> } callback - 回调函数，返回扫描仪设备删除信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   */
  function on(type: 'scanDeviceDel', callback: Callback<ScannerDevice>): void;

  /**
   * Register event callback for scanner device delete (system API).
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Callback<ScannerDevice> } callback - Callback for device delete event.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onScanDeviceDel(callback: Callback<ScannerDevice>): void;

  /**
   * 取消注册扫描仪设备删除事件回调（系统API）。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { 'scanDeviceDel' } type - 事件类型。
   * @param { Callback<ScannerDevice> } [callback] - 回调函数，返回扫描仪设备删除信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   */
  function off(type: 'scanDeviceDel', callback?: Callback<ScannerDevice>): void;

  /**
   * Unregister event callback for scanner device delete (system API).
   * @permission ohos.permission.MANAGE_PRINT_JOB
   * @param { Callback<ScannerDevice> } [callback] - Optional callback to unregister.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offScanDeviceDel(callback?: Callback<ScannerDevice>): void;
}
export default scan;