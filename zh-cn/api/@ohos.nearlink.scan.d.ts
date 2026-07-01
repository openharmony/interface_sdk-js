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
 * @file
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';
import nearlinkConstant from '@ohos.nearlink.constant';

/**
 * 提供扫描和发现附近设备的方法。
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace scan {
  /**
   * 开始使用过滤器扫描指定的NearLink设备。
   * 如果不想使用过滤器，可以将过滤器参数设置为{@code null}。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { ScanFilters[] | null } filters - 过滤器列表，必选。
   *     如果不需要使用filter，可以设置为{@code null}。
   *     如果要使用过滤器，至少要设置一个过滤器。
   * @param { ScanOptions } [options] - 扫描的参数。
   *     默认为低功率模式。
   * @returns { Promise<void> } 返回promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100040 - Integer out of range.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100042 - Empty array.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function startScan(filters: ScanFilters[] | null, options?: ScanOptions): Promise<void>;

  /**
   * 停止扫描。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @returns { Promise<void> }
      * @throws { BusinessError } 201  - 权限被拒绝。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function stopScan(): Promise<void>;

  /**
   * 订阅NearLink扫描结果。
   *
   * 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。
   * 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。
   * 回调返回真实设备地址，否则返回随机设备地址。
   *
   * @param { Callback<ScanResults[]> } callback - 监听扫描结果事件的回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onDeviceFound(callback: Callback<ScanResults[]>): void;

  /**
   * 取消订阅星闪扫描结果。
   *
   * @param { Callback<ScanResults[]> } [callback] - 监听扫描结果事件的回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offDeviceFound(callback?: Callback<ScanResults[]>): void;

  /**
   * 扫描结果的内容。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ScanResults {
    /**
     * 远端设备的地址。
     * 长度为17，由十六进制数字和冒号组成，例如：11:22:33:AA:BB:FF。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * 外围设备的RSSI。
     * 单位为： 分贝毫瓦，取值范围为全体整数，取值为127时表示无效值。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    rssi: int;
    /**
     * 原始数据。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    data: ArrayBuffer;
    /**
     * 外围设备的设备名称。
     * 最大长度为26。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceName: string;
    /**
     * 广播是否可连接。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isConnectable: boolean;
    /**
     * 设备类型。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceClass?: nearlinkConstant.DeviceClass;
  }

  /**
   * 扫描过滤器。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ScanFilters {
    /**
     * 设备地址。
     * 长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address?: string;

    /**
     * 设备名称。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deviceName?: string;

    /**
     * 厂商ID。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    manufacturerId?: int;

    /**
     * 制造商数据。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    manufacturerData?: ArrayBuffer;

    /**
     * 制造商数据掩码。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    manufacturerDataMask?: ArrayBuffer;

    /**
     * 接收信号强度指示。
     * 单位为： 分贝毫瓦，取值应为[-128,127]内的整数。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    rssi?: int;
  }

  /**
   * 扫描参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ScanOptions {
    /**
     * 扫描模式。
     * 如果未设置“scanMode”，则默认值为“SCAN_MODE_LOW_POWER”。
     * 默认值： SCAN_MODE_LOW_POWER。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    scanMode?: ScanMode;

    /**
     * 扫描时长。
     * “持续时间”，单位为秒，有效范围为10s~60s。如果不设置“持续时间”，则会一直扫描。
     * 单位为： 秒，取值应为[10,60]内的整数。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    duration?: int;
  }

  /**
   * 扫描模式的枚举。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum ScanMode {
    /**
     * 低功率模式，扫描频率低（默认配置）。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCAN_MODE_LOW_POWER = 0,
    /**
     * 中等功率模式，扫描频率中等。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCAN_MODE_BALANCED = 1,
    /**
     * 高功率模式，扫描频率高。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCAN_MODE_LOW_LATENCY = 2
  }
}
export default scan;