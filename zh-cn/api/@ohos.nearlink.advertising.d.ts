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

/**
 * 提供与广播相关的方法。附近的设备可以扫描并发现该设备。
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace advertising {
  /**
   * 开始广播。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { AdvertisingParams } advertisingParams - 表示广播参数。
   * @returns { Promise<int> } 返回广播句柄promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100040 - Integer out of range.
   * @throws { BusinessError } 36100043 - Invalid UUID.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function startAdvertising(advertisingParams: AdvertisingParams): Promise<int>;

  /**
   * 停止广播ID对应的广播。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { int } advertisingId - 表示广播ID
   *     <br>取值应为≥0的整数，取值为当前广播的广播ID。
   * @returns { Promise<void> } 返回promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100040 - Invalid advertising ID.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function stopAdvertising(advertisingId: int): Promise<void>;

  /**
   * 订阅广播状态变化事件。
   *
   * 只有授予了ohos.permission.NEARLINK_ACCESS权限的系统应用程序才能访问此事件。
   *
   * @param { Callback<AdvertisingStateChangeInfo> } callback - 用于监听广播状态的回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onAdvertisingStateChange(callback: Callback<AdvertisingStateChangeInfo>): void;

  /**
   * 取消订阅广播状态变更事件。
   *
   * @param { Callback<AdvertisingStateChangeInfo> } [callback] - 用于监听广播状态的回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offAdvertisingStateChange(callback?: Callback<AdvertisingStateChangeInfo>): void;

  /**
   * 广播参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AdvertisingParams {
    /**
     * 广播设置。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    advertisingSettings: AdvertisingSettings;
    /**
     * 广播数据。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    advertisingData: AdvertisingData;
  }

  /**
   * 广播设置。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AdvertisingSettings {
    /**
     * 广播时间间隔，单位为slot。
     * 最小的slot数是160，对应的时间是160*0.125=20ms。
     * 最大slot数为16777215，对应的时间为2097151.875 ms。
     * 如果不设置“interval”，则默认值为5000，对应的时间为625 ms。
     * 单位为： 时隙，取值应为[160,16777215]内的整数，每个时隙为125微秒，。 默认值： 5000。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    interval?: int;
    /**
     * 广播功率模式。
     * 如果不设置“power”，则默认值为“ADV_TX_POWER_LOW”。
     * 默认值： ADV_TX_POWER_LOW。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    power?: TxPowerMode;
    /**
     * 广播是否可连接。
     * 如果不设置“isConnectable”，则默认值为true。
     * 默认值： 默认值：true。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isConnectable?: boolean;
  }

  /**
   * 广播数据。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AdvertisingData {
    /**
     * 指定的服务UUID。
     * UUID的长度必须为36，由36位十六进制数字和“-”组成。
     * 例如：FFFFFFFF-1234-5678-ABCD-000000001234，表示128位的标识符。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceUuids?: string[];
    /**
     * 制造商数据。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    manufacturerData?: ManufacturerData[];
    /**
     * 服务数据。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceData?: ServiceData[];
    /**
     * 指示是否包含设备名称。
     * 默认值： 默认值：false。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    includeDeviceName?: boolean;
  }

  /**
   * 描述制造商数据。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ManufacturerData {
    /**
     * 厂商ID。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    manufacturerId: int;
    /**
     * 制造商数据。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    manufacturerData: ArrayBuffer;
  }

  /**
   * 服务数据。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ServiceData {
    /**
     * 服务UUID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceUuid: string;
    /**
     * 服务数据。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    serviceData: ArrayBuffer;
  }

  /**
   * 广播模式的枚举。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum TxPowerMode {
    /**
     * 低功率模式。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ADV_TX_POWER_LOW = 1,
    /**
     * 中等功率模式。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ADV_TX_POWER_MEDIUM = 2,
    /**
     * 高功率模式。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ADV_TX_POWER_HIGH = 3
  }

  /**
   * 广播状态变化信息。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AdvertisingStateChangeInfo {
    /**
     * 广播ID。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    advertisingId: int;
    /**
     * 广播状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: AdvertisingState;
  }

  /**
   * 广播状态的枚举。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AdvertisingState {
    /**
     * 广播已开始。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STARTED = 1,
    /**
     * 广播已停止。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STOPPED = 2
  }
}
export default advertising;