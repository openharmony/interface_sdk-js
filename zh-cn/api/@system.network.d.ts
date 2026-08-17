/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
  * @kit NetworkKit
 */

/**
 * This module provides the Network Response.
 * @syscap SystemCapability.Communication.NetManager.Core
 * @since 3
 */
export interface NetworkResponse {
  /**
   * 网络类型，可能的值有2g，3g，4g，5g，wifi，none等。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 3
   */
  type: string;
  /**
   * 是否按照流量计费。true：按照流量计费；false：不按照流量计费。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 3
   */
  metered: boolean;
}

/**
 *
 * @syscap SystemCapability.Communication.NetManager.Core
 * @since 3
 */
export default class Network {
  /**
   * Obtains the network type.
   *
   * @param { object } options - Options.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 3
   */
  static getType(options?: {
    /**
     * Called when the network type is obtained.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 3
     */
    success?: (data: NetworkResponse) => void;
    /**
     * Called when the network type fails to be obtained.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 3
     */
    fail?: (data: any, code: number) => void;
    /**
     * Called when the execution is completed.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 3
     */
    complete?: () => void;
  }): void;

  /**
   * Listens to the network connection state. If this method is called multiple times, the last call takes effect.
   *
   * @param { object } options - Options.
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 3
   */
  static subscribe(options?: {
    /**
     * Called when the network connection state changes.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 3
     */
    success?: (data: NetworkResponse) => void;
    /**
     * Called when the listening fails.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 3
     */
    fail?: (data: any, code: number) => void;
  }): void;

  /**
   * 取消监听网络连接状态。
   *
   * @syscap SystemCapability.Communication.NetManager.Core
   * @since 3
   */
  static unsubscribe(): void;
}