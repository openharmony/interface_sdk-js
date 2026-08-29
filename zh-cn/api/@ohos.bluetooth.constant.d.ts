/*
 * Copyright (C) 2023-2024 Huawei Device Co., Ltd.
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
 * @file 蓝牙constant模块
 * @kit ConnectivityKit
 */

/**
 * 本模块提供了蓝牙Profile、设备类型相关的常量定义。开发者可使用这些常量进行蓝牙Profile连接状态判断、设备
 * 类型识别等操作，适用于蓝牙设备配对、连接管理、设备分类筛选等场景，便于在应用中统一引用标准协议与设备类型的常量值，提升代码可读性与可维护性。
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @crossplatform [since 13]
 * @atomicservice [since 12]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace constant {
  /**
   * 枚举，表示蓝牙Profile协议的标识。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ProfileId {
    /**
     * A2DP Source Profile，负责发送音频数据端使用的协议。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PROFILE_A2DP_SOURCE = 1,

    /**
     * HFP Ag Profile，负责通话音频网关使用的协议。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PROFILE_HANDSFREE_AUDIO_GATEWAY = 4,

    /**
     * HID Host Profile，负责与
     * HID Device 建立通信并处理数据交互的协议。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PROFILE_HID_HOST = 6,

    /**
     * NAP Profile，负责提供网络共享端使用的协议。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PROFILE_PAN_NETWORK = 7
  }

  /**
   * 枚举，由蓝牙技术联盟（Bluetooth Special Interest Group）定义，使用通
   * 用唯一标识（Universally Unique Identifier，UUID）表示不同的蓝牙协议Profile。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi [since 10 - 11]
   * @publicapi [since 12]
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ProfileUuids {
    /**
     * 表示Hands-Free Audio Gateway Profile。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi [since 10 - 11]
     * @publicapi [since 12]
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PROFILE_UUID_HFP_AG = '0000111F-0000-1000-8000-00805F9B34FB',
    /**
     * 表示Hands-Free Profile。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi [since 10 - 11]
     * @publicapi [since 12]
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PROFILE_UUID_HFP_HF = '0000111E-0000-1000-8000-00805F9B34FB',
    /**
     * 表示Headset Audio Gateway Profile。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi [since 10 - 11]
     * @publicapi [since 12]
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PROFILE_UUID_HSP_AG = '00001112-0000-1000-8000-00805F9B34FB',
    /**
     * 表示Headset Profile。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi [since 10 - 11]
     * @publicapi [since 12]
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PROFILE_UUID_HSP_HS = '00001108-0000-1000-8000-00805F9B34FB',
    /**
     * 表示A2DP Source Profile。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi [since 10 - 11]
     * @publicapi [since 12]
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PROFILE_UUID_A2DP_SRC = '0000110A-0000-1000-8000-00805F9B34FB',
    /**
     * 表示A2DP Sink Profile。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi [since 10 - 11]
     * @publicapi [since 12]
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PROFILE_UUID_A2DP_SINK = '0000110B-0000-1000-8000-00805F9B34FB',
    /**
     * 表示AVRCP Controller Profile。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi [since 10 - 11]
     * @publicapi [since 12]
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PROFILE_UUID_AVRCP_CT = '0000110E-0000-1000-8000-00805F9B34FB',
    /**
     * 表示AVRCP Target Profile。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi [since 10 - 11]
     * @publicapi [since 12]
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PROFILE_UUID_AVRCP_TG = '0000110C-0000-1000-8000-00805F9B34FB',
    /**
     * 表示HID Profile。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi [since 10 - 11]
     * @publicapi [since 12]
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PROFILE_UUID_HID = '00001124-0000-1000-8000-00805F9B34FB',
    /**
     * 表示HID over GATT Profile。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi [since 10 - 11]
     * @publicapi [since 12]
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PROFILE_UUID_HOGP = '00001812-0000-1000-8000-00805F9B34FB'
  }

  /**
   * 枚举，本端和对端蓝牙设备间的Profile连接状态。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ProfileConnectionState {
    /**
     * 表示Profile已断开连接。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_DISCONNECTED = 0,
    /**
     * 表示Profile正在连接。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_CONNECTING = 1,
    /**
     * 表示Profile已连接。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_CONNECTED = 2,
    /**
     * 表示Profile正在断开连接。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_DISCONNECTING = 3
  }

  /**
   * 枚举，蓝牙设备的主要类型。蓝牙标准协议字段。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  export enum MajorClass {
    /**
     * 表示不属于其他标准类别的杂项设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    MAJOR_MISC = 0x0000,
    /**
     * 表示计算机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    MAJOR_COMPUTER = 0x0100,
    /**
     * 表示手机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    MAJOR_PHONE = 0x0200,
    /**
     * 表示局域网/网络接入点设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    MAJOR_NETWORKING = 0x0300,
    /**
     * 表示音频/视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    MAJOR_AUDIO_VIDEO = 0x0400,
    /**
     * 表示外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    MAJOR_PERIPHERAL = 0x0500,
    /**
     * 表示成像设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    MAJOR_IMAGING = 0x0600,
    /**
     * 表示可穿戴设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    MAJOR_WEARABLE = 0x0700,
    /**
     * 表示玩具设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    MAJOR_TOY = 0x0800,
    /**
     * 表示健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    MAJOR_HEALTH = 0x0900,
    /**
     * 表示未分类设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    MAJOR_UNCATEGORIZED = 0x1F00
  }

  /**
   * 枚举，蓝牙设备的子类型，在[MajorClass]{@link constant.MajorClass}基础上进一步细分的类型。蓝牙标准协议字段。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @crossplatform [since 13]
   * @since 10 dynamic
   * @since 23 static
   */
  export enum MajorMinorClass {
    /**
     * 表示未分类计算机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    COMPUTER_UNCATEGORIZED = 0x0100,
    /**
     * 表示台式计算机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    COMPUTER_DESKTOP = 0x0104,
    /**
     * 表示服务器设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    COMPUTER_SERVER = 0x0108,
    /**
     * 表示便携式计算机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    COMPUTER_LAPTOP = 0x010C,
    /**
     * 表示手持式计算机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    COMPUTER_HANDHELD_PC_PDA = 0x0110,
    /**
     * 表示掌上电脑设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    COMPUTER_PALM_SIZE_PC_PDA = 0x0114,
    /**
     * 表示可穿戴计算机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    COMPUTER_WEARABLE = 0x0118,
    /**
     * 表示平板电脑设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    COMPUTER_TABLET = 0x011C,

    /**
     * 表示未分类手机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PHONE_UNCATEGORIZED = 0x0200,
    /**
     * 表示便携式手机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PHONE_CELLULAR = 0x0204,
    /**
     * 表示无线电话设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PHONE_CORDLESS = 0x0208,
    /**
     * 表示智能手机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PHONE_SMART = 0x020C,
    /**
     * 表示调制解调器或网关手机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PHONE_MODEM_OR_GATEWAY = 0x0210,
    /**
     * 表示ISDN手机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PHONE_ISDN = 0x0214,

    /**
     * 表示网络负载占用率0%的网络设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NETWORK_FULLY_AVAILABLE = 0x0300,
    /**
     * 表示网络负载占用率1%~17%的网络设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NETWORK_1_TO_17_UTILIZED = 0x0320,
    /**
     * 表示网络负载占用率17%~33%的网络设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NETWORK_17_TO_33_UTILIZED = 0x0340,
    /**
     * 表示网络负载占用率33%~50%的网络设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NETWORK_33_TO_50_UTILIZED = 0x0360,
    /**
     * 表示网络负载占用率60%~67%的网络设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NETWORK_60_TO_67_UTILIZED = 0x0380,
    /**
     * 表示网络负载占用率67%~83%的网络设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NETWORK_67_TO_83_UTILIZED = 0x03A0,
    /**
     * 表示网络负载占用率83%~99%的网络设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NETWORK_83_TO_99_UTILIZED = 0x03C0,
    /**
     * 表示网络负载占用率100%的网络设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NETWORK_NO_SERVICE = 0x03E0,

    /**
     * 表示未分类音频/视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO_VIDEO_UNCATEGORIZED = 0x0400,
    /**
     * 表示可穿戴式耳机音频/视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO_VIDEO_WEARABLE_HEADSET = 0x0404,
    /**
     * 表示免提音频/视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO_VIDEO_HANDSFREE = 0x0408,
    /**
     * 表示麦克风音频/视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO_VIDEO_MICROPHONE = 0x0410,
    /**
     * 表示扬声器音频/视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO_VIDEO_LOUDSPEAKER = 0x0414,
    /**
     * 表示头戴式音频/视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO_VIDEO_HEADPHONES = 0x0418,
    /**
     * 表示便携式音频/视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO_VIDEO_PORTABLE_AUDIO = 0x041C,
    /**
     * 表示汽车音频/视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO_VIDEO_CAR_AUDIO = 0x0420,
    /**
     * 表示机顶盒音频/视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO_VIDEO_SET_TOP_BOX = 0x0424,
    /**
     * 表示高保真音频/视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO_VIDEO_HIFI_AUDIO = 0x0428,
    /**
     * 表示录像机音频/视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO_VIDEO_VCR = 0x042C,
    /**
     * 表示摄像机视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO_VIDEO_VIDEO_CAMERA = 0x0430,
    /**
     * 表示摄像机音频/视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO_VIDEO_CAMCORDER = 0x0434,
    /**
     * 表示监视器视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO_VIDEO_VIDEO_MONITOR = 0x0438,
    /**
     * 表示具备显示和扬声器的视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO_VIDEO_VIDEO_DISPLAY_AND_LOUDSPEAKER = 0x043C,
    /**
     * 表示会议视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO_VIDEO_VIDEO_CONFERENCING = 0x0440,
    /**
     * 表示游戏玩具视频设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    AUDIO_VIDEO_VIDEO_GAMING_TOY = 0x0448,

    /**
     * 表示非键盘非指向外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PERIPHERAL_NON_KEYBOARD_NON_POINTING = 0x0500,
    /**
     * 表示外围键盘设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PERIPHERAL_KEYBOARD = 0x0540,
    /**
     * 表示定点装置外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PERIPHERAL_POINTING_DEVICE = 0x0580,
    /**
     * 表示键盘指向外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    PERIPHERAL_KEYBOARD_POINTING = 0x05C0,
    /**
     * 表示未分类外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PERIPHERAL_UNCATEGORIZED = 0x0500,
    /**
     * 表示外围操纵杆设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PERIPHERAL_JOYSTICK = 0x0504,
    /**
     * 表示外围游戏板设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PERIPHERAL_GAMEPAD = 0x0508,
    /**
     * 表示远程控制外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PERIPHERAL_REMOTE_CONTROL = 0x05C0,
    /**
     * 表示外围传感设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PERIPHERAL_SENSING_DEVICE = 0x0510,
    /**
     * 表示外围数字化仪平板电脑设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PERIPHERAL_DIGITIZER_TABLET = 0x0514,
    /**
     * 表示外围读卡器设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PERIPHERAL_CARD_READER = 0x0518,
    /**
     * 表示外围数码笔设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PERIPHERAL_DIGITAL_PEN = 0x051C,
    /**
     * 表示射频识别扫描仪外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PERIPHERAL_SCANNER_RFID = 0x0520,
    /**
     * 表示手势输入外围设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    PERIPHERAL_GESTURAL_INPUT = 0x0522,

    /**
     * 表示未分类的图像设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    IMAGING_UNCATEGORIZED = 0x0600,
    /**
     * 表示图像显示设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    IMAGING_DISPLAY = 0x0610,
    /**
     * 表示成像照相机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    IMAGING_CAMERA = 0x0620,
    /**
     * 表示成像扫描仪设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    IMAGING_SCANNER = 0x0640,
    /**
     * 表示成像打印机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    IMAGING_PRINTER = 0x0680,

    /**
     * 表示未分类的可穿戴设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    WEARABLE_UNCATEGORIZED = 0x0700,
    /**
     * 表示可穿戴腕表设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    WEARABLE_WRIST_WATCH = 0x0704,
    /**
     * 表示可穿戴寻呼机设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    WEARABLE_PAGER = 0x0708,
    /**
     * 表示可穿戴夹克设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    WEARABLE_JACKET = 0x070C,
    /**
     * 表示可穿戴头盔设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    WEARABLE_HELMET = 0x0710,
    /**
     * 表示可穿戴眼镜设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    WEARABLE_GLASSES = 0x0714,

    /**
     * 表示未分类的玩具设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    TOY_UNCATEGORIZED = 0x0800,
    /**
     * 表示玩具机器人设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    TOY_ROBOT = 0x0804,
    /**
     * 表示玩具车设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    TOY_VEHICLE = 0x0808,
    /**
     * 表示人形娃娃玩具设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    TOY_DOLL_ACTION_FIGURE = 0x080C,
    /**
     * 表示玩具控制器设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    TOY_CONTROLLER = 0x0810,
    /**
     * 表示玩具游戏设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    TOY_GAME = 0x0814,

    /**
     * 表示未分类健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    HEALTH_UNCATEGORIZED = 0x0900,
    /**
     * 表示血压健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    HEALTH_BLOOD_PRESSURE = 0x0904,
    /**
     * 表示温度计健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    HEALTH_THERMOMETER = 0x0908,
    /**
     * 表示体重健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    HEALTH_WEIGHING = 0x090C,
    /**
     * 表示葡萄糖健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    HEALTH_GLUCOSE = 0x0910,
    /**
     * 表示脉搏血氧仪健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    HEALTH_PULSE_OXIMETER = 0x0914,
    /**
     * 表示脉搏率健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    HEALTH_PULSE_RATE = 0x0918,
    /**
     * 表示数据显示健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @crossplatform [since 13]
     * @since 10 dynamic
     * @since 23 static
     */
    HEALTH_DATA_DISPLAY = 0x091C,
    /**
     * 表示计步器健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    HEALTH_STEP_COUNTER = 0x0920,
    /**
     * 表示身体成分分析仪健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    HEALTH_BODY_COMPOSITION_ANALYZER = 0x0924,
    /**
     * 表示峰值流量计健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    HEALTH_PEAK_FLOW_MONITOR = 0x0928,
    /**
     * 表示药物监视仪健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    HEALTH_MEDICATION_MONITOR = 0x092C,
    /**
     * 表示膝盖假肢健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    HEALTH_KNEE_PROSTHESIS = 0x0930,
    /**
     * 表示脚踝假肢健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    HEALTH_ANKLE_PROSTHESIS = 0x0934,
    /**
     * 表示通用健康管理设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    HEALTH_GENERIC_HEALTH_MANAGER = 0x0938,
    /**
     * 表示个人移动健康设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10 dynamic
     * @since 23 static
     */
    HEALTH_PERSONAL_MOBILITY_DEVICE = 0x093C
  }

  /**
   * 枚举，蓝牙访问授权状态。表示对端蓝牙设备访问本端蓝牙Profile（如电话簿、消息等）的授权状态，用于蓝牙数据访问授权场景。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum AccessAuthorization {
    /**
     * 未知。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    UNKNOWN = 0,
    /**
     * 允许。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ALLOWED = 1,
    /**
     * 拒绝。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    REJECTED = 2
  }
}

export default constant;