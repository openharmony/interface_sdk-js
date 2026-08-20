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
 * @file 星闪广播能力
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';

/**
 * 本模块提供了发送星闪广播的相关功能，包括启动广播、停止广播、订阅广播状态等。
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare namespace advertising {
  /**
   * 发送星闪广播。使用Promise异步回调。适用于设备发现、设备信息广播等需要将本端设备能力或数据对外发布的业务场景，配合
   * [advertising.onAdvertisingStateChange]{@link advertising.on}可监听广播启停状态。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { AdvertisingParams } advertisingParams - 广播相关参数。
   * @returns { Promise<int> } Promise对象，返回本次开启的广播ID。广播ID是随机分配的唯一标识值，范围[0, 255]，与
   *     [advertising.stopAdvertising]{@link advertising.stopAdvertising}参数及
   *     [AdvertisingStateChangeInfo]{@link advertising.AdvertisingStateChangeInfo}.advertisingId一致，可用于区分本次广播实例。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100040 - Integer out of range.
   * @throws { BusinessError } 36100043 - Invalid UUID.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function startAdvertising(advertisingParams: AdvertisingParams): Promise<int>;

  /**
   * 停止发送星闪广播。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { int } advertisingId - 广播ID，开启广播时获取。取值范围[0, 255]。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100040 - Invalid advertising ID.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function stopAdvertising(advertisingId: int): Promise<void>;

  /**
   * 订阅星闪广播状态变化事件。使用callback异步回调。当调用[advertising.startAdvertising]{@link advertising.startAdvertising}启动广播或
   * [advertising.stopAdvertising]{@link advertising.stopAdvertising}停止广播时，回调函数会被触发，返回对应的广播ID与广播状态。需与
   * [advertising.offAdvertisingStateChange]{@link advertising.off}配对使用。
   *
   * 应用需具备ohos.permission.ACCESS_NEARLINK权限，方可接收此事件上报。
   *
   * @param { Callback<AdvertisingStateChangeInfo> } callback - 回调函数，返回广播状态变化信息。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function onAdvertisingStateChange(callback: Callback<AdvertisingStateChangeInfo>): void;

  /**
   * 取消订阅星闪广播状态变化事件。使用callback异步回调。
   *
   * @param { Callback<AdvertisingStateChangeInfo> } [callback] - 回调函数，返回广播启停状态变化信息。
   *     <br>填写该参数则取消当前callback订阅。不填写该参数则取消该事件对应的所有回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function offAdvertisingStateChange(callback?: Callback<AdvertisingStateChangeInfo>): void;

  /**
   * 表示发送广播携带的参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface AdvertisingParams {
    /**
     * 广播配置参数。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    advertisingSettings: AdvertisingSettings;
    /**
     * 广播数据包。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    advertisingData: AdvertisingData;
  }

  /**
   * 表示广播配置参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface AdvertisingSettings {
    /**
     * 广播间隔配置参数。单位slot，范围160-16777215，默认值为5000。1个slot对应的时间长度是0.125ms，例如：5000*0.125=625ms。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    interval?: int;
    /**
     * 广播发射功率配置参数。如果不配置，则默认值为ADV_TX_POWER_LOW。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    power?: TxPowerMode;
    /**
     * 表示广播能否连接。true：表示可连接的广播。false：表示不可连接的广播。默认值为true。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    isConnectable?: boolean;
  }

  /**
   * 表示广播数据包。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface AdvertisingData {
    /**
     * 服务UUID列表。UUID长度必须为36个字符，由32个十六进制数字和4个连字符（-）组成。若未配置则默认不携带该字段。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceUuids?: string[];
    /**
     * 厂商数据。若未配置则默认不携带该字段。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    manufacturerData?: ManufacturerData[];
    /**
     * 服务数据。若未配置则默认不携带该字段。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceData?: ServiceData[];
    /**
     * 指示广播数据中是否携带本机设备名。true：表示包含设备名称。false：表示不包含设备名称。默认值为false。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    includeDeviceName?: boolean;
  }

  /**
   * 表示厂商数据。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ManufacturerData {
    /**
     * 厂商ID。取值范围[1, 65535]。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    manufacturerId: int;
    /**
     * 厂商数据。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    manufacturerData: ArrayBuffer;
  }

  /**
   * 表示服务相关数据。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ServiceData {
    /**
     * 表示服务的UUID。UUID长度必须为36个字符，由32个十六进制数字和4个连字符（-）组成。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceUuid: string;
    /**
     * 表示服务数据。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    serviceData: ArrayBuffer;
  }

  /**
   * 表示广播发送模式，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum TxPowerMode {
    /**
     * 表示低功耗模式。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    ADV_TX_POWER_LOW = 1,
    /**
     * 表示中等功耗模式。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    ADV_TX_POWER_MEDIUM = 2,
    /**
     * 表示高功耗模式。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    ADV_TX_POWER_HIGH = 3
  }

  /**
   * 表示广播启停状态变化信息。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface AdvertisingStateChangeInfo {
    /**
     * 表示广播ID。取值范围[0, 255]。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    advertisingId: int;
    /**
     * 表示当前广播状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    state: AdvertisingState;
  }

  /**
   * 表示广播状态，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum AdvertisingState {
    /**
     * 表示广播已启动。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STARTED = 1,
    /**
     * 表示广播已停止。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STOPPED = 2
  }
}
export default advertising;