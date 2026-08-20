/*
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file 星闪扫描能力
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';
import nearlinkConstant from '@ohos.nearlink.constant';

/**
 * 本模块提供了星闪扫描模式的定义。
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare namespace scan {
  /**
   * 发起星闪扫描。使用Promise异步回调。需先调用[scan.onDeviceFound]{@link scan.on}订阅扫描结果回调，本接口发起扫描后，扫描到的设备信息通过
   * [scan.onDeviceFound]{@link scan.on}回调上报。扫描完成后可调用[scan.stopScan]{@link scan.stopScan}停止扫描。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { ScanFilters[] | null } filters - 扫描星闪广播的过滤条件集合，符合过滤条件的设备会被上报。若不使能过滤器则传入null。
   *     <br>若该参数设置为null，将扫描所有可发现的周边星闪设备，但是不建议使用此方式，可能扫描到非预期设备，并增加功耗。
   * @param { ScanOptions } [options] - 表示扫描选项。默认为低功耗模式。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100040 - Integer out of range.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100042 - Empty array.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function startScan(filters: ScanFilters[] | null, options?: ScanOptions): Promise<void>;

  /**
   * 停止星闪扫描。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function stopScan(): Promise<void>;

  /**
   * 订阅星闪扫描结果。使用callback异步回调。
   *
   * 应用需具备ohos.permission.ACCESS_NEARLINK权限，方可接收此事件上报。
   *
   * @param { Callback<ScanResults[]> } callback - 回调函数，返回星闪扫描结果数组对象。扫描结果默认返回随机地址；应用若具备系统权限
   *     ohos.permission.GET_NEARLINK_PEER_MAC，则返回设备真实地址。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function onDeviceFound(callback: Callback<ScanResults[]>): void;

  /**
   * 取消订阅星闪扫描结果。使用callback异步回调。
   *
   * @param { Callback<ScanResults[]> } [callback] - 回调函数，返回星闪扫描结果数组对象。
   *     <br>填写该参数则取消当前callback订阅。不填写该参数则取消该事件对应的所有回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function offDeviceFound(callback?: Callback<ScanResults[]>): void;

  /**
   * 表示扫描结果。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ScanResults {
    /**
     * 表示扫描到设备地址。地址格式参考：11:22:33:AA:BB:FF。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * 表示扫描到的设备rssi值，取值范围[-128, 127]，单位：dBm，其中127表示无效值。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    rssi: int;
    /**
     * 表示广播包数据。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    data: ArrayBuffer;
    /**
     * 表示扫描到的设备名称。字符串长度范围[0, 30]。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    deviceName: string;
    /**
     * 表示扫描到的广播是否可连接。true：可连接，false：不可连接
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    isConnectable: boolean;
    /**
     * 表示扫描到的设备类型。设备广播未携带设备类型信息时该字段不返回。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    deviceClass?: nearlinkConstant.DeviceClass;
  }

  /**
   * 表示扫描过滤条件。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ScanFilters {
    /**
     * 表示设备地址，若未配置则默认不过滤该字段。地址格式参考：11:22:33:AA:BB:FF。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address?: string;

    /**
     * 表示设备名称，字符串长度范围[0, 30]。若未配置则默认不过滤该字段。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    deviceName?: string;

    /**
     * 表示厂商ID，取值范围[1, 65535]，若未配置则默认不过滤该字段。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    manufacturerId?: int;

    /**
     * 表示厂商数据，若未配置则默认不过滤该字段。配置该字段需同时配置manufacturerId。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    manufacturerData?: ArrayBuffer;

    /**
     * 表示厂商数据掩码，若未配置则默认不过滤该字段。配置该字段需同时配置manufacturerData，且二者长度必须一致。掩码与厂商数据按位与运算，用于精确匹配厂商数据中指定比特位。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    manufacturerDataMask?: ArrayBuffer;

    /**
     * 过滤信号强度大于或等于该信号强度门限值的广播报文，取值范围[-128, 127]，单位：dBm。建议设置[-90, 20]范围内的门限值。若未配置则默认不对信号强度进行过滤。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    rssi?: int;
  }

  /**
   * 表示扫描选项。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ScanOptions {
    /**
     * 表示扫描模式。默认值为'SCAN_MODE_LOW_POWER'。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    scanMode?: ScanMode;

    /**
     * 表示扫描持续时间。单位：秒，取值范围[10, 60]，默认值为全时段扫描。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    duration?: int;
  }

  /**
   * 表示扫描模式，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum ScanMode {
    /**
     * 表示低功耗扫描模式，扫描频率低，功耗低。默认值。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    SCAN_MODE_LOW_POWER = 0,
    /**
     * 表示均衡扫描模式，扫描频率中等，功耗中等。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    SCAN_MODE_BALANCED = 1,
    /**
     * 表示高功率扫描模式，具有更高的扫描频率，功耗较高。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    SCAN_MODE_LOW_LATENCY = 2
  }
}
export default scan;