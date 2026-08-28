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
 * @file 星闪合作设备集合管理能力
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';

/**
 * 本模块提供了星闪合作设备集合管理（Coordinated Devices Set Management，CDSM）的能力，包括查询和订阅星闪合作设备集合信息的功能。
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare namespace cdsm {
  /**
   * 创建CDSM客户端实例。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { string } address - 已配对连接的合作设备集合的成员设备地址。地址格式参考：11:22:33:AA:BB:FF，需为6段、每段2位十六进制字符，各段以冒号分隔。
   * @returns { CdsmClient } 用于查询和订阅远端设备合作设备集合信息的CDSM客户端实例。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100050 - Coordinated Devices Set Management not supported.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function createCdsmClient(address: string): CdsmClient;

  /**
   * CDSM客户端类，提供了获取远端设备的合作设备集合信息等操作方法。
   *
   * - 使用该类的方法前，需通过[cdsm.createCdsmClient]{@link cdsm.createCdsmClient}方法构造该类的实例。
   *
   * 适用于需要获知一组星闪设备（合作设备集合）的成员组成及连接状态变化并据此进行业务联动的场景。例如，手机与耳机配对后，手机可通过CDSM查询左右耳机信息并感知其连接状态变化。
   *
   * 同一应用针对同一远端设备创建一个 [CdsmClient]{@link cdsm.CdsmClient} 实例即可，重复创建会增加不必要的资源开销。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface CdsmClient {
    /**
     * 查询远端设备的合作设备集合信息。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { CdsmInfo } 远端设备的合作设备集合信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getCdsmInfo(): CdsmInfo;

    /**
     * 订阅远端设备合作设备集合信息变化事件。使用callback异步回调。
     *
     * 应用需具备ohos.permission.ACCESS_NEARLINK权限，方可接收此事件上报。
     *
     * @param { Callback<CdsmInfo> } callback - 事件回调类型，返回远端设备合作设备集合信息。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onCdsmInfoChange(callback: Callback<CdsmInfo>): void;

    /**
     * 取消订阅远端设备合作设备集合信息变化事件。使用callback异步回调。
     *
     * @param { Callback<CdsmInfo> } [callback] - 事件回调类型，返回远端设备合作设备集合信息。
     *     <br>填写该参数则取消当前callback订阅。不填写该参数则取消远端设备合作设备集合信息变化事件对应的所有回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offCdsmInfoChange(callback?: Callback<CdsmInfo>): void;
  }

  /**
   * 表示合作设备集合信息。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface CdsmInfo {
    /**
     * 合作设备集合的成员信息数组，每个成员包含设备地址及其连接状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    members: CdsmMemberInfo[];
  }

  /**
   * 表示合作设备集合的成员信息。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface CdsmMemberInfo {
    /**
     * 成员设备地址。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * 成员设备连接状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    state: CdsmConnectionState;
  }

  /**
   * 表示合作设备集合中成员设备的连接状态，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum CdsmConnectionState {
    /**
     * 表示已断连。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DISCONNECTED = 0,
    /**
     * 表示已连接。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTED = 1
  }
}
export default cdsm;