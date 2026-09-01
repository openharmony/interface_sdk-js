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
 * @file 蓝牙common模块
 * @kit ConnectivityKit
 */

/**
 * 本模块提供了蓝牙公共接口和参数类型。首批接口包括在调用[connection.pairDevice]{@link @ohos.bluetooth.connection:connection.pairDevice}时用于指定目标设备的
 * MAC地址与地址类型的相关参数。
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @since 21 dynamic
 * @since 26.1.0 static
 */
declare namespace common {
  /**
   * 描述蓝牙设备地址信息的参数结构，包括地址与地址类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 21 dynamic
   * @since 26.1.0 static
   */
  export interface BluetoothAddress {
    /**
     * 表示蓝牙设备的地址，例如："XX:XX:XX:XX:XX:XX"。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 21 dynamic
     * @since 26.1.0 static
     */
    address: string;
    /**
     * 表示地址类型为蓝牙设备的实际MAC地址或虚拟MAC地址。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 21 dynamic
     * @since 26.1.0 static
     */
    addressType: BluetoothAddressType;
    /**
     * 表示地址类型为蓝牙协议定义的Public类型或Random类型。默认值请参见相关接口说明，未传入时使用系统默认地址类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    rawAddressType?: BluetoothRawAddressType;
  }

  /**
   * 枚举，蓝牙子系统定义的地址类型。蓝牙设备的实际MAC地址属于用户的隐私信息，在发现设备的过程中，蓝牙子系统会给每个蓝牙外设分配一个虚拟MAC地址，并保存该虚拟MAC地址和外设实际MAC地址的映射关系。关于地址类型的详细介绍请参见
   * 蓝牙设备地址类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 21 dynamic
   * @since 26.1.0 static
   */
  export enum BluetoothAddressType {
    /**
     * 虚拟MAC地址类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 21 dynamic
     * @since 26.1.0 static
     */
    VIRTUAL = 1,
    /**
     * 实际MAC地址类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 21 dynamic
     * @since 26.1.0 static
     */
    REAL = 2
  }

  /**
   * 枚举，蓝牙协议定义的蓝牙设备地址类型。关于地址类型的详细介绍请参见蓝牙设备地址类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  export enum BluetoothRawAddressType {
    /**
     * 公共设备地址类型，该类型地址由IEEE组织分配并保证全球唯一性，永久不变。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    PUBLIC = 0,
    /**
     * 随机设备地址类型，该类型地址随机生成，包括静态随机地址和私有随机地址等子类型，可能定期变化。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    RANDOM = 1
  }
}

export default common;