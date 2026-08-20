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
 * @file 星闪公共常量定义
 * @kit ConnectivityKit
 */

/**
 * 本模块提供了星闪通信中共用的一些常量定义，包括设备配对状态、设备连接状态、设备类型等枚举值。
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare namespace nearlinkConstant {
  /**
   * 表示和远端设备的配对状态，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export enum PairingState {
    /**
     * 表示未配对。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_STATE_NONE = 1,
    /**
     * 表示配对中。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_STATE_PAIRING = 2,
    /**
     * 表示已配对。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_STATE_PAIRED = 3
  }

  /**
   * 表示和远端设备的连接状态，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export enum ConnectionState {
    /**
     * 表示正在连接。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STATE_CONNECTING = 0,
    /**
     * 表示已连接。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STATE_CONNECTED = 1,
    /**
     * 表示正在断连。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STATE_DISCONNECTING = 2,
    /**
     * 表示已断连。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STATE_DISCONNECTED = 3
  }

  /**
   * 表示设备类型，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export enum DeviceClass {
    /**
     * 无效的设备类型，设备类型信息缺失。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_INVALID_CLASS = -1,
    /**
     * 未分类设备。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_UNCATEGORIZED = 0x000100,
    /**
     * 电话。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_PHONE = 0x000200,
    /**
     * 智能手机。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_SMARTPHONE = 0x000201,
    /**
     * 计算机。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_COMPUTER = 0x000300,
    /**
     * 笔记本电脑。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_LAPTOP = 0x000301,
    /**
     * 平板。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_TABLET = 0x000302,
    /**
     * 一体机。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_ALL_IN_ONE_COMPUTER = 0x000303,
    /**
     * 迷你PC。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_MINI_PC = 0x000304,
    /**
     * 手表。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_WATCH = 0x000400,
    /**
     * 智能手表。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_SMART_WATCH = 0x000401,
    /**
     * 人机接口。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_HUMAN_INTERFACE = 0x000500,
    /**
     * 键盘。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_KEYBOARD = 0x000501,
    /**
     * 鼠标。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_MOUSE = 0x000502,
    /**
     * 手柄。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_HANDLE = 0x000503,
    /**
     * 手写笔。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_STYLUS = 0x000504,
    /**
     * 触摸板。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_TOUCHPAD = 0x000505,
    /**
     * 音频播放器。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_AUDIO_PLAYBACK = 0x000600,
    /**
     * 智能扬声器。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_SMART_SPEAKER = 0x000601,
    /**
     * 回音设备。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_ECHO_WALL = 0x000602,
    /**
     * 录音器。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_AUDIO_CAPTURE = 0x000700,
    /**
     * 卡拉OK麦克风。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_KARAOKE_MICROPHONE = 0x000701,
    /**
     * 佩戴式话筒。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_LAPEL_MICROPHONE = 0x000702,
    /**
     * 穿戴音频设备。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_WEARABLE_AUDIO = 0x000800,
    /**
     * 入耳式耳机。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_IN_EAR_EARPHONE = 0x000801,
    /**
     * 头戴式耳麦。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_HEADSET = 0x000802,
    /**
     * 头戴式耳机。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_OVER_EAR_HEADPHONE = 0x000803,
    /**
     * 颈带式耳机。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_NECKBAND_EARPHONE = 0x000804,
    /**
     * 个人护理。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_PERSONAL_CARE = 0x000900,
    /**
     * 智能牙刷。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_INTELLIGENT_TOOTHBRUSH = 0x000901,
    /**
     * 智能杯。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_SMART_CUP = 0x000902,
    /**
     * 智能剃刀。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_INTELLIGENT_SHAVER = 0x000903,
    /**
     * 通用暖通空调。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_HVAC = 0x000A00,
    /**
     * 空气净化器。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_AIR_PURIFIER = 0x000A01,
    /**
     * 加湿器。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_HUMIDIFIER = 0x000A02,
    /**
     * 空气循环风机。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_AIR_CIRCULATION_FAN = 0x000A03,
    /**
     * 电动骑行工具。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_ELECTRIC_RIDE = 0x000B00,
    /**
     * 电动滑板车。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_ELECTRIC_SCOOTER = 0x000B01,
    /**
     * 电动自行车。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_ELECTRIC_BICYCLE = 0x000B02,
    /**
     * 灯具配件。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_LIGHT_FITTING = 0x000C00,
    /**
     * 智能台灯。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_SMART_TABLE_LAMP = 0x000C01,
    /**
     * 远程控制设备。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_REMOTE_CONTROL = 0x000D00,
    /**
     * 电视遥控器。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_TV_REMOTE_CONTROL = 0x000D01,
    /**
     * 成像设备。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_IMAGING = 0x000E00,
    /**
     * 智能电视。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_SMART_TV = 0x000E01,
    /**
     * 网络摄像机。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_IP_CAMERA = 0x000E02,
    /**
     * 投影仪。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_SCREEN_CASTER = 0x000E03,
    /**
     * 网络设备。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_NETWORKING = 0x000F00,
    /**
     * 物联网网关。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_IOT_GATEWAY = 0x000F01,
    /**
     * 门禁设备。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_ACCESS_CONTROL = 0x001000,
    /**
     * 智能锁。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_INTELLIGENT_LOCK = 0x001001,
    /**
     * 智能钥匙。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_SMART_KEY = 0x001002,
    /**
     * 车钥匙。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_VEHICLE_KEY = 0x001003,
    /**
     * 车锁。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DEVICE_VEHICLE_LOCK = 0x001004
  }

  /**
   * 表示和远端设备的逻辑链路连接状态，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export enum AcbState {
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
    CONNECTED = 1,
    /**
     * 表示已连接且链路已加密。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    ENCRYPTED = 2
  }

  /**
   * 连接间隔的枚举值。间隔越小，时延越低、吞吐越高但功耗越大；间隔越大功耗越低但时延越高。高速档适用于高吞吐低时延场景，低速档适用于对功耗敏感场景。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  export enum ConnectionInterval {
    /**
     * 表示连接间隔为4.5毫秒。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    HIGH_SPEED_INTERVAL_4_5 = 0,
    /**
     * 表示连接间隔为4.875毫秒。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    HIGH_SPEED_INTERVAL_4_875 = 1,
    /**
     * 表示连接间隔为11.25毫秒。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    MID_SPEED_INTERVAL_11_25 = 2,
    /**
     * 表示连接间隔为15毫秒。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    MID_SPEED_INTERVAL_15 = 3,
    /**
     * 表示连接间隔为50毫秒。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    MID_SPEED_INTERVAL_50 = 4,
    /**
     * 表示连接间隔为100毫秒。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    LOW_SPEED_INTERVAL_100 = 5,
    /**
     * 表示连接间隔为150毫秒。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    LOW_SPEED_INTERVAL_150 = 6,
    /**
     * 表示连接间隔为200毫秒。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    LOW_SPEED_INTERVAL_200 = 7,
    /**
     * 表示连接间隔为300毫秒。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    LOW_SPEED_INTERVAL_300 = 8,
    /**
     * 表示连接间隔为500毫秒。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    LOW_SPEED_INTERVAL_500 = 9
  }
}
export default nearlinkConstant;