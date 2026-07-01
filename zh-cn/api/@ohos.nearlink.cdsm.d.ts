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
 * 提供与星闪CDSM（合作设备集合管理）相关的方法。
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace cdsm {
  /**
   * 创建CDSM客户端实例。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { string } address - CDSM服务端地址。
   *     <br>长度必须为17。取值约束：由十六进制数字和冒号组成，例如：11:22:33:AA:BB:FF。
   * @returns { CdsmClient } 返回CDSM客户端实例。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100050 - Coordinated Devices Set Management not supported.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function createCdsmClient(address: string): CdsmClient;

  /**
   * 管理CDSM客户端实例。在调用任何CDSM客户端方法之前，
   * 您必须使用{@link createCdsmClient}来创建CDSM客户端实例。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface CdsmClient {
    /**
     * 获取合作设备集合信息。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { CdsmInfo } 返回合作设备集信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getCdsmInfo(): CdsmInfo;

    /**
     * 订阅协作设备集信息变更事件。
     *
     * 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。
     * 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。
     * 回调返回真实设备地址，否则返回随机设备地址。
     *
     * @param { Callback<CdsmInfo> } callback - 用于监听合作设备集信息的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onCdsmInfoChange(callback: Callback<CdsmInfo>): void;

    /**
     * 取消订阅协作设备集信息变更事件。
     *
     * @param { Callback<CdsmInfo> } [callback] - 用于监听合作设备集信息的回调。
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offCdsmInfoChange(callback?: Callback<CdsmInfo>): void;
  }

  /**
   * 描述合作设备集信息。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface CdsmInfo {
    /**
     * 合作设备集的成员。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    members: CdsmMemberInfo[];
  }

  /**
   * 描述合作设备集的成员信息。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface CdsmMemberInfo {
    /**
     * 设备地址。
     * 长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * 成员的连接状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: CdsmConnectionState;
  }

  /**
   * 成员连接状态的枚举。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum CdsmConnectionState {
    /**
     * 成员已断开连接
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DISCONNECTED = 0,
    /**
     * 成员已连接
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONNECTED = 1
  }
}
export default cdsm;