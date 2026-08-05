/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
 * @file 限制类策略
 * @kit MDMKit
 */

import type { AsyncCallback } from '@ohos.base';
import type Want from '@ohos.app.ability.Want';

/**
 * 本模块提供设置通用限制类策略能力。可以全局禁用和解除禁用蓝牙、HDC、USB、Wi-Fi、蜂窝数据、相机、麦克风等特性。
 *
 * **使用场景**：
 *
 * - 企业设备管理场景下，管理员需要对员工设备进行功能限制，防止数据泄露或非授权使用。
 * - BYOD（Bring Your Own Device）场景下，企业空间需要限制设备功能以符合企业安全策略。
 * - 设备安全管控场景下，需要禁用特定功能以保护企业敏感信息。
 *
 * **能解决的问题**：
 *
 * - 防止员工通过蓝牙、USB等方式传输企业敏感数据。
 * - 限制设备调试能力（HDC）以提升设备安全性。
 * - 控制网络访问能力（Wi-Fi、蜂窝数据等）以符合企业网络策略。
 * - 管理设备多媒体能力（相机、麦克风等）以保护隐私和企业机密。
 *
 * **带来的收益**：
 *
 * - 提升企业设备安全性，降低数据泄露风险。
 * - 满足企业合规要求，符合安全审计标准。
 * - 实现精细化的设备功能管控，平衡安全与使用体验。
 *
 * > **说明：**
 * >
 * > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi [since 10 - 11]
 * @publicapi [since 12]
 * @since 10
 */
declare namespace restrictions {
  /**
   * 设备特性枚举。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  enum FeatureForDevice {
    /**
     * Wi-Fi P2P（点对点连接），允许设备在没有接入点的情况下直接相互连接。禁用后，设备无法通过Wi-Fi P2P进行点对点连接，影响文件传输、游戏联机、屏幕共享等需要直接Wi-Fi连接的应用功能。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    WIFI_P2P = 0,

    /**
     * 本地输入（包含键盘、鼠标、触控板、触摸屏等）被禁用后，无法通过本地输入进行操作。重启设备可解除禁用。在息屏状态下禁用会导致屏幕无法唤醒，若禁用后屏幕自动息屏，同样会导致无法唤醒屏幕。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    LOCAL_INPUT = 2,

    /**
     * 网络流量重定向管控策略。禁用后，无法将TCP流量重定向到其它端口，取消禁用之后可恢复使用。当前仅支持PC/2in1设备使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    TRAFFIC_REDIRECTION = 5,

    /**
     * 创建文件转储。禁用后，无法通过任务管理器创建文件转储。当前仅支持PC/2in1设备使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    CORE_DUMP = 6,

    /**
     * RS-232串口管控策略。禁用后，无法通过RS-232串口传输数据。当前仅支持PC/2in1设备使用（部分设备不支持RS-232串口）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    RS232 = 7,

    /**
     * 磁盘擦除能力。禁用后，"磁盘擦除"入口将被置灰。当前仅支持PC/2in1设备使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DISK_ERASURE = 8,

    /**
     * 设备蓝牙能力。当已经通过
     * [addDisallowedBluetoothDevices]{@link @ohos.enterprise.bluetoothManager:bluetoothManager.addDisallowedBluetoothDevices}
     * 接口或者
     * [addAllowedBluetoothDevices]{@link @ohos.enterprise.bluetoothManager:bluetoothManager.addAllowedBluetoothDevices}
     * 接口设置了蓝牙设备禁用名单或者允许名单，再禁用设备蓝牙能力，会优先生效禁用设备蓝牙能力。直到设备蓝牙能力启用后，禁止或允许名单才会生效。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    BLUETOOTH = 9,

    /**
     * 设备修改系统时间能力。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MODIFY_DATE_TIME = 10,

    /**
     * 设备打印能力。禁用了设备打印能力时，通过[setDisallowedPolicyForAccount]{@link restrictions.setDisallowedPolicyForAccount}接口开启某用户的打印能
     * 力，该用户下的打印能力仍然被禁用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    PRINTER = 11,

    /**
     * 被其他设备通过hdc连接、调试的能力。设置禁用后，其他设备无法通过hdc连接、调试此设备。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    HDC = 12,

    /**
     * 设备麦克风能力。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MICROPHONE = 13,

    /**
     * 设备指纹认证能力。当已经通过[setDisallowedPolicyForAccount]{@link restrictions.setDisallowedPolicyForAccount}设置了某用户禁用设备指纹认证能力时，
     * 再启用设备指纹认证能力，会报策略冲突。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    FINGERPRINT = 14,

    /**
     * 设备USB能力。禁用后外接的USB设备无法使用，即在当前设备为HOST模式时，无法外接其他DEVICE设备。
     *
     * 以下五种情况再禁用设备USB能力，会报策略冲突。
     *
     * 1）通过addAllowedUsbDevices接口添加了USB设备可用名单。
     *
     * 2）通过setUsbStorageDeviceAccessPolicy接口设置了USB存储设备访问策略为只读/禁用。
     *
     * 3）通过addDisallowedUsbDevices接口添加了禁止使用的USB设备类型。
     *
     * 4）通过[setDisallowedPolicyForAccount]{@link restrictions.setDisallowedPolicyForAccount}接口禁用了某用户USB存储设备写入能力。
     *
     * 5）禁用USB转串口（[USB_SERIAL]{@link restrictions.FeatureForDevice}）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    USB = 15,

    /**
     * 设备Wi-Fi能力。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    WIFI = 16,

    /**
     * 网络共享能力（设备已有网络共享给其他设备的能力，即共享热点能力）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    TETHERING = 17,

    /**
     * 非活跃用户运行能力。禁用后，非UIAbility进程一般不会被冻结，UIAbility申请短时任务、长时任务、延迟任务或能效资源等后台运行任务也不会被冻结。当前仅支持PC/2in1设备使用。企业空间场景下，系统切换到企业空间用
     * 户，个人空间用户属于非活跃用户。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    INACTIVE_USER_FREEZE = 18,

    /**
     * 设备相机能力。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    CAMERA = 19,

    /**
     * MTP客户端能力（包含读取和写入），当前仅支持PC/2in1设备使用。MTP（MediaTransferProtocol，媒体传输协议），该协议允许用户在移动设备上线性访问媒体文件。当已经通过
     * [setDisallowedPolicyForAccount]{@link restrictions.setDisallowedPolicyForAccount}设置了某用户禁用MTP客户端写入能力时，再禁用MTP客户端能力，
     * 会报策略冲突。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MTP_CLIENT = 20,

    /**
     * MTP服务端能力，当前仅支持手机、平板设备使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MTP_SERVER = 21,

    /**
     * samba客户端能力，当前仅支持PC/2in1设备使用。samba是在Linux和UNIX系统上实现SMB协议的一个免费软件，由服务器及客户端程序构成。SMB（Server Message Block，信息服务块）是一种在局域
     * 网上共享文件和打印机的一种通信协议，它为局域网内的不同计算机之间提供文件及打印机等资源的共享服务。SMB协议是客户机/服务器型协议，客户机通过该协议可以访问服务器上的共享文件系统、打印机及其他资源。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SAMBA_CLIENT = 22,

    /**
     * samba服务端能力，当前仅支持PC/2in1设备使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SAMBA_SERVER = 23,

    /**
     * 备份和恢复能力，禁用后设备的"设置--系统--备份和恢复"、"设置--云空间"置灰，当前仅支持手机、平板使用。如果要完全禁用设备的备份和恢复能力，建议同时调用
     * [applicationManager.addDisallowedRunningBundlesSync]{@link @ohos.enterprise.applicationManager:applicationManager.addDisallowedRunningBundlesSync}
     * 接口禁止具备备份和恢复能力的应用运行，如备份和恢复、手机助手、云空间应用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    BACKUP_AND_RESTORE = 24,

    /**
     * 设备维修模式能力。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MAINTENANCE_MODE = 25,

    /**
     * multimedia messaging service，设备接收、发送彩信的能力，当前仅支持手机、平板设备使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MMS = 26,

    /**
     * short messaging service，设备接收、发送短信的能力，当前仅支持手机、平板设备使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SMS = 27,

    /**
     * 蜂窝数据能力，当前仅支持手机、平板设备使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MOBILE_DATA = 28,

    /**
     * 飞行模式能力，当前仅支持手机、平板设备使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    AIRPLANE_MODE = 29,

    /**
     * Virtual Private Network（虚拟专用网络），VPN能力。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    VPN = 30,

    /**
     * 设备通知能力。禁用后，由系统应用和第三方应用发出的通知将不会显示，而系统服务通知能力不受影响。当此设备已经通过
     * [addAllowedNotificationBundles]{@link @ohos.enterprise.applicationManager:applicationManager.addAllowedNotificationBundles}
     * 设置了应用通知允许名单之后，再禁用设备通知能力，会抛出错误码9200010。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    NOTIFICATION = 31,

    /**
     * Near Field Communication（近距离无线通信），NFC能力，当前仅支持手机、平板设备使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    NFC = 32,

    /**
     * 创建隐私空间能力，当前仅支持手机、平板使用。对已创建的隐私空间无效。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    PRIVATE_SPACE = 33,

    /**
     * 设备通话能力，禁用后电话无法呼入和呼出。当前仅支持手机、平板设备使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    TELEPHONE_CALL = 34,

    /**
     * [应用分身能力](docroot://quick-start/app-clone.md)，禁用后无法创建应用分身。对已创建的应用分身无效。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    APP_CLONE = 35,

    /**
     * 外置存储能力，禁用后设备无法使用外置存储，并且当前已连接的外置存储会被卸载。如果外置存储卸载时有文件正在被使用，可能会导致卸载失败，返回9200013错误码。
     *
     * 外置存储禁用后重新启用，需要手动重新连接外置存储。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    EXTERNAL_STORAGE_CARD = 36,

    /**
     * Wi-Fi连接时使用随机MAC能力，设置禁用后，连接Wi-Fi仅能使用设备物理MAC。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    RANDOM_MAC = 37,

    /**
     * 设备媒体播放声音能力，设置禁用后，设备媒体播放将静音，[蜂窝通话](docroot://media/audio/audio-call-overview.md)能力不受影响。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    UNMUTE_DEVICE = 38,

    /**
     * 设备通过hdc调试其他设备的能力，当前仅支持PC/2in1设备设置。设置禁用后，无法通过hdc调试手机、平板、PC、智能手表等设备。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    HDC_REMOTE = 39,

    /**
     * 设备虚拟化服务能力，即利用硬件资源的冗余，以虚拟化方式运行其他平台（如Linux、Windows）的能力。设置禁用设备虚拟化服务能力时，建议同时卸载与虚拟化服务相关的应用，并禁止其再次安装。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    VIRTUAL_SERVICE = 40,

    /**
     * 设备USB转串口能力。禁用后外接的USB转串口设备无法使用。以下两种情况再禁用设备USB转串口能力，会报策略冲突。
     *
     * 1）通过addAllowedUsbDevices接口添加了USB设备可用名单。
     *
     * 2）禁用设备USB能力（[USB]{@link restrictions.FeatureForDevice}）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    USB_SERIAL = 41,

    /**
     * 截屏能力，禁用后无法进行截屏操作。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SCREEN_SHOT = 42,

    /**
     * 录屏能力，禁用后无法进行录屏操作。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SCREEN_RECORD = 43,

    /**
     * 恢复[密钥导出](docroot://security/UniversalKeystoreKit/huks-export-key-arkts.md)能力，当前仅支持PC/2in1设备使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DISK_RECOVERY_KEY = 44,

    /**
     * 星闪（NearLink）能力。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    NEAR_LINK = 45,

    /**
     * 开发者模式，禁用后设备重启生效。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DEVELOPER_MODE = 46,

    /**
     * 恢复出厂设置能力。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    RESET_FACTORY = 47,

    /**
     * 远程桌面能力。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    REMOTE_DESK = 48,

    /**
     * 远程诊断能力。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    REMOTE_DIAGNOSIS = 49,

    /**
     * 公网系统升级能力。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    OTA_UPDATE = 50
  }

  /**
   * 可为指定用户设置禁用/启用的特性的枚举。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum FeatureForAccount {
    /**
     * 系统多窗口。当前仅支持手机、平板设备使用，禁用后无法使用系统多窗口功能（分屏、一键分屏、智慧多窗、悬浮窗口）。若系统多窗口功能已开启，本次使用不受影响，但关闭后将无法再次使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MULTI_WINDOW = 0,

    /**
     * [分布式管理服务](docroot://distributedservice/distributedservice-kit-intro.md#运作机制)。禁用后无法使用设备分布式管理服务中的发现、认证、查询、监听等功能。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DISTRIBUTED_TRANSMISSION = 1,

    /**
     * 中转站。当前仅支持手机、平板设备使用，禁用后无法使用中转站功能。若中转站已开启，本次使用不受影响，但关闭后将无法再次使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SUPER_HUB = 2,

    /**
     * 设备指纹认证能力，当前仅支持PC/2in1设备使用。使用时有以下规则：
     *
     * 1. 禁用设备指纹认证能力（[FeatureForDevice.FINGERPRINT]{@link restrictions.FeatureForDevice}）后，再禁用某用户的设备指纹认证能力，会报策略冲突。
     * 2. 禁用/启用指定用户的设备指纹认证能力后，再禁用设备指纹认证能力（[FeatureForDevice.FINGERPRINT]{@link restrictions.FeatureForDevice}）时，后者会覆盖前者的策略。
     * 此后再启用设备指纹认证能力（[FeatureForDevice.FINGERPRINT]{@link restrictions.FeatureForDevice}），则所有用户都允许使用设备指纹认证能力。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    FINGERPRINT = 3,

    /**
     * 设备打印能力。如果禁用了指定用户的设备打印能力，再启用设备打印能力（[FeatureForDevice.PRINTER]{@link restrictions.FeatureForDevice}），该用户下的设备打印能力仍然被
     * 禁用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    PRINT = 4,

    /**
     * MTP客户端能力（仅包含写入），当前仅支持PC/2in1设备使用。MTP（MediaTransferProtocol，媒体传输协议），该协议允许用户在移动设备上线性访问媒体文件。当已禁用设备MTP客户端能力（
     * [FeatureForDevice.MTP_CLIENT]{@link restrictions.FeatureForDevice}）时，再禁用某用户MTP客户端写入能力，会报策略冲突。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MTP_CLIENT = 5,

    /**
     * USB存储设备写入能力，当前仅支持PC/2in1企业设备使用。
     *
     * 以下三种情况再禁用某用户USB存储设备写入能力，会报策略冲突。
     *
     * 1）已禁用设备USB能力（[FeatureForDevice.USB]{@link restrictions.FeatureForDevice}）。
     *
     * 2）通过setUsbStorageDeviceAccessPolicy接口设置了USB存储设备访问策略为只读/禁用。
     *
     * 3）通过addDisallowedUsbDevices接口添加了存储类型的USB设备禁用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    USB_STORAGE_DEVICE_WRITE = 6,

    /**
     * 恢复[密钥导出](docroot://security/UniversalKeystoreKit/huks-export-key-arkts.md)能力，当前仅支持PC/2in1设备使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DISK_RECOVERY_KEY = 7,

    /**
     * superuser do，表示以超级用户执行，当前仅支持PC/2in1设备使用。禁用后企业空间或个人空间不能以超级用户执行。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SUDO = 8,

    /**
     * 设备间分布式单向传输数据的能力（仅包含向其他设备传输数据）。当已禁用分布式管理服务（[DISTRIBUTED_TRANSMISSION]{@link restrictions.FeatureForAccount}），再禁用设备
     * 间分布式单向传输数据的能力，会报策略冲突。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DISTRIBUTED_TRANSMISSION_OUTGOING = 9,

    /**
     * 文件打开加速能力，为应用提供文件打开加速状态感知能力。应用可以通过接入对应API，感知文件的加速状态，进而应用可以实现对已加速文件给出独特的UI（user interface）标识等功能，优化用户文件打开体验，当前仅支持PC/2in1设备使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    OPEN_FILE_BOOST = 10
  }

  /**
   * 设备设置项枚举。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum SettingsForDevice {
    /**
     * APN设置，当前仅支持手机、平板使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SET_APN = 0,

    /**
     * 长按电源键打开电源菜单，当前仅支持手机、平板使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    POWER_LONG_PRESS = 1,

    /**
     * 修改以太网IP地址，当前仅支持PC/2in1设备使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SET_ETHERNET_IP = 2,

    /**
     * 修改设备名称，当前仅支持PC/2in1设备、手机、平板使用。禁用后，PC/2in1设备的设置中以下设备名称无法修改，包括关于本机、蓝牙、多设备协同->星闪。手机、平板设备设置中的关于本机、蓝牙、个人热点的设备名称无法修改。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SET_DEVICE_NAME = 3,

    /**
     * 修改锁屏密码，当前仅支持PC/2in1设备、手机、平板使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    SET_BIOMETRICS_AND_SCREEN_LOCK = 4
  }

  /**
   * 用户设置项枚举。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum SettingsForAccount {
    /**
     * 修改壁纸，包含锁屏壁纸和桌面壁纸。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MODIFY_WALLPAPER = 0
  }

  /**
   * 使设备禁用或启用打印能力。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disabled - true表示禁止使用打印能力，false表示允许使用打印能力。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function setPrinterDisabled(admin: Want, disabled: boolean, callback: AsyncCallback<void>): void;

  /**
   * 使设备禁用或启用打印能力。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disabled - true表示禁止使用打印能力，false表示允许使用打印能力。
   * @returns { Promise<void> } 无返回结果的Promise对象。当禁止或允许使用打印能力失败时抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function setPrinterDisabled(admin: Want, disabled: boolean): Promise<void>;

  /**
   * 查询设备打印能力是否被禁用。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<boolean> } callback - 回调函数，callback方式返回设备打印能力是否被禁用，true表示设备打印能力被禁用，false表示设备打印能力未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function isPrinterDisabled(admin: Want, callback: AsyncCallback<boolean>): void;

  /**
   * 查询设备打印能力是否被禁用。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<boolean> } Promise对象。Promise方式返回设备打印能力是否被禁用，true表示设备打印能力被禁用，false表示设备打印能力未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function isPrinterDisabled(admin: Want): Promise<boolean>;

  /**
   * 使设备禁用或启用[HDC](docroot://../device-dev/subsystems/subsys-toolchain-hdc-guide.md)。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disabled - true表示禁止使用HDC，false表示允许使用HDC。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function setHdcDisabled(admin: Want, disabled: boolean, callback: AsyncCallback<void>): void;

  /**
   * 使设备禁用或启用HDC。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disabled - true表示禁止使用HDC，false表示允许使用HDC。
   * @returns { Promise<void> } 无返回结果的Promise对象。当禁止或允许使用HDC失败时，抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function setHdcDisabled(admin: Want, disabled: boolean): Promise<void>;

  /**
   * 查询HDC是否被禁用。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<boolean> } callback - 回调函数，callback方式返回HDC是否被禁用，true表示HDC被禁用，false表示HDC未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function isHdcDisabled(admin: Want, callback: AsyncCallback<boolean>): void;

  /**
   * 查询HDC是否被禁用。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_RESTRICT_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<boolean> } Promise对象。Promise方式返回HDC是否被禁用，true表示HDC被禁用，false表示HDC未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   * @deprecated since 26.0.0
   * @useinstead restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function isHdcDisabled(admin: Want): Promise<boolean>;

  /**
   * 使设备禁用或启用麦克风。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disable - true表示禁止使用麦克风，false表示允许使用麦克风。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   * @deprecated since 26.0.0
   * @useinstead restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function disableMicrophone(admin: Want, disable: boolean): void;

  /**
   * 查询麦克风是否被禁用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { boolean } boolean方式返回麦克风是否被禁用，true表示麦克风被禁用，false表示麦克风未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   * @deprecated since 26.0.0
   * @useinstead restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function isMicrophoneDisabled(admin: Want): boolean;

  /**
   * 禁用或启用指纹认证。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } disabled - true表示禁止指纹认证，false表示允许指纹认证。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   * @deprecated since 26.0.0
   * @useinstead restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function setFingerprintAuthDisabled(admin: Want, disabled: boolean): void;

  /**
   * 查询指纹认证是否被禁用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { boolean } 返回指纹认证是否被禁用，true表示指纹认证被禁用，false表示指纹认证未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 11
   * @deprecated since 26.0.0
   * @useinstead restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function isFingerprintAuthDisabled(admin: Want): boolean;

  /**
   * 设置禁用/启用某特性。
   *
   * > **说明：**
   * >
   * > 本接口为设备级禁用策略，影响设备所有用户。如需针对特定用户设置禁用策略，请使用
   * > [setDisallowedPolicyForAccount]{@link restrictions.setDisallowedPolicyForAccount}接口。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS [since 12 - 14]
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or
   *     ohos.permission.PERSONAL_MANAGE_RESTRICTIONS [since 15 - 19]
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or
   *     ohos.permission.ENTERPRISE_MANAGE_NETWORK [since 20]
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } feature - 支持设置的特性清单参考表1。<br/> **说明：** 从API version 15开始，应用申请权限
   *     ohos.permission.PERSONAL_MANAGE_RESTRICTIONS并通过
   *     [startAdminProvision]{@link @ohos.enterprise.adminManager:adminManager.startAdminProvision}激活为
   *     [BDA](docroot://mdm/mdm-kit-term.md#byod-device-admin-bdabyod设备管理员)，可以使用此接口设置以下特性：bluetooth、hdc、microphone、usb、
   *     wifi、tethering、camera，从API版本26.0.0开始，新增支持使用此接口设置mtpServer特性。
   * @param { boolean } disallow - true表示禁止使用，false表示允许使用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 9200013 - The enterprise management policy has been successfully set,
   *     but the function has not taken effect in real time. [since 21]
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   * @deprecated since 26.0.0
   * @useinstead restrictions.setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean)
   */
  function setDisallowedPolicy(admin: Want, feature: string, disallow: boolean): void;

  /**
   * 查询某特性是否被禁用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS [since 12 - 14]
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or
   *     ohos.permission.PERSONAL_MANAGE_RESTRICTIONS [since 15 - 19]
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or
   *     ohos.permission.ENTERPRISE_MANAGE_NETWORK [since 20]
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 12 - 19]
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 [since 12 - 19]
   * @param { string } feature - 支持查询的特性清单参考下表2。 <br/> **说明：** 从API version 15开始，应用申请权限
   *     ohos.permission.PERSONAL_MANAGE_RESTRICTIONS并通过
   *     [startAdminProvision]{@link @ohos.enterprise.adminManager:adminManager.startAdminProvision}激活为
   *     [BDA](docroot://mdm/mdm-kit-term.md#byod-device-admin-bdabyod设备管理员)，可以使用此接口获取以下特性状态：bluetooth、hdc、microphone、
   *     usb、wifi、tethering、camera，从API版本26.0.0开始，新增支持使用此接口获取mtpServer特性状态。
   * @returns { boolean } 返回true表示feature对应的某种特性被禁用，false表示feature对应的某种特性未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   * @deprecated since 26.0.0
   * @useinstead restrictions.getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice)
   */
  function getDisallowedPolicy(admin: Want | null, feature: string): boolean;

  /**
   * 设置禁用/启用指定用户的某特性。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } feature - feature名称。<br/>- fingerprint：设备指纹认证能力，当前仅支持PC/2in1设备使用。使用此参数时有以下规则：<br/>1. 通过
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy}接口禁用了设备指纹认证能力，再使用本接口传入此参数，会报策略冲突。<br/>2. 通过本接口设置禁用
   *     /启用指定用户的设备指纹认证能力后，再通过[setDisallowedPolicy]{@link restrictions.setDisallowedPolicy}接口禁用设备指纹认证能力时，后者会覆盖前者的策略。此后再通
   *     过[setDisallowedPolicy]{@link restrictions.setDisallowedPolicy}接口启用设备指纹认证能力，则所有用户都允许使用设备指纹认证能力。<br/>- print<sup>
   *     20+</sup>：设备打印能力，在API version 23之前仅支持PC/2in1设备使用，从API version 23开始支持PC/2in1、Phone、Tablet设备。如果使用本接口禁用了指定用户的设备打印能
   *     力，再通过[setDisallowedPolicy]{@link restrictions.setDisallowedPolicy}接口启用设备打印能力，该用户下的设备打印能力仍然被禁用。<br/>- mtpClient<
   *     sup>20+</sup>：MTP客户端能力（仅包含写入），当前仅支持PC/2in1设备使用。MTP（MediaTransferProtocol，媒体传输协议），该协议允许用户在移动设备上线性访问媒体文件。当已经通过
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy}接口禁用了设备MTP客户端能力时，再通过本接口禁用某用户MTP客户端写入能力，会报策略冲突。<br/
   *     >- usbStorageDeviceWrite<sup>20+</sup>：USB存储设备写入能力，当前仅支持PC/2in1企业设备使用。<br/>  以下三种情况再通过本接
   *     口禁用某用户USB存储设备写入能力，会报策略冲突。<br/>  1）通过[setDisallowedPolicy]{@link restrictions.setDisallowedPolicy}接口设置了设备USB能力禁
   *     用。<br/>  2）通过
   *     [setUsbStorageDeviceAccessPolicy]{@link @ohos.enterprise.usbManager:usbManager.setUsbStorageDeviceAccessPolicy}
   *     接口设置了USB存储设备访问策略为只读/禁用。<br/>  3）通过
   *     [addDisallowedUsbDevices]{@link @ohos.enterprise.usbManager:usbManager.addDisallowedUsbDevices}接口添加了存储类型的USB设备禁
   *     用。 <br/>- diskRecoveryKey<sup>20+</sup>：恢复
   *     [密钥导出](docroot://security/UniversalKeystoreKit/huks-export-key-arkts.md)能力，当前仅支持PC/2in1设备使用。<br/>- sudo<sup>20+
   *     </sup>：superuser do，表示以超级用户执行，当前仅支持PC/2in1设备使用。禁用后企业空间或个人空间不能以超级用户执行。<br/>- distributedTransmissionOutgoing<sup
   *     >20+</sup>：设备间分布式单向传输数据的能力（仅包含向其他设备传输数据）。当已经通过
   *     [setDisallowedPolicyForAccount]{@link restrictions.setDisallowedPolicyForAccount}接口禁用了分布式服务，再通过本接口禁用设备间分布式单向传输数
   *     据的能力，会报策略冲突。<br/>- openFileBoost<sup>23+</sup>：文件打开加速能力，为应用提供文件打开加速状态感知能力。应用可以通过接入对应API，
   *     感知文件的加速状态，进而应用可以实现对已加速文件给出独特的UI（user interface）标识等功能，优化用户文件打开体验，当前仅支持PC/2in1设备使用。
   * @param { boolean } disallow - true表示禁用，false表示启用。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   * @deprecated since 26.0.0
   * @useinstead restrictions.setDisallowedPolicyForAccount(admin: Want, feature: FeatureForAccount, disallow: boolean, accountId: number)
   */
  function setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number): void;

  /**
   * 获取指定用户的某特性状态。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the
   *     EnterpriseAdminExtensionAbility and the bundle name of the application. [since 14 - 19]
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 [since 14 - 19]
   * @param { string } feature - feature名称。<br/>- fingerprint：设备指纹认证能力，当前仅支持PC/2in1设备使用。使用此参数时有以下规则：当已经通过
   *     [setDisallowedPolicyForAccount]{@link restrictions.setDisallowedPolicyForAccount}接口设置禁用/启用指定用户的设备指纹认证能力后，再通过
   *     [setDisallowedPolicy]{@link restrictions.setDisallowedPolicy}接口禁用设备指纹认证能力时，后者会覆盖前者的策略。即此时调用本接口结果为false。<br/>-
   *     mtpClient<sup>20+</sup>：MTP客户端能力（仅包含写入），当前仅支持PC/2in1设备使用。MTP（MediaTransferProtocol，媒体传输协议），该协议允许用户在移动设备上线性访问媒体文
   *     件。<br/>- usbStorageDeviceWrite<sup>20+</sup>：USB存储设备写入能力，当前仅支持PC/2in1企业设备使用。<br/>- diskRecoveryKey<sup>20+</sup
   *     >：恢复[密钥导出](docroot://security/UniversalKeystoreKit/huks-export-key-arkts.md)能力，当前仅支持PC/2in1设备使用。<br/>- sudo<sup
   *     >20+</sup>：superuser do，表示以超级用户执行，当前仅支持PC/2in1设备使用。禁用后企业空间或个人空间不能以超级用户执行。<br/>- distributedTransmissionOutgoing
   *     <sup>20+</sup>：设备间单向传输数据的能力（仅包含向其他设备传输数据）。<br/>- print<sup>20+</sup>：设备打印能力，在API version 23之前仅支持PC/2in1设备使用，从
   *     API version 23开始支持PC/2in1、Phone、Tablet设备。如果使用[setDisallowedPolicy]{@link restrictions.setDisallowedPolicy}接口禁用了
   *     设备打印能力，再通过[setDisallowedPolicyForAccount]{@link restrictions.setDisallowedPolicyForAccount}接口启用某用户下的设备打印能力，通过本接
   *     口查询结果是该用户已启用打印能力，但实际打印能力已被禁用。<br/>- openFileBoost<sup>23+</sup>：文件打开加速能力，为应用提供文件打开加速状态感知
   *     能力。应用可以通过接入对应API，感知文件的加速状态，进而应用可以实现对已加速文件给出独特的UI（user interface）标识等功能，优化用户文件打开体验，当前仅支持PC/2in1设备使用。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @returns { boolean } 返回true表示参数feature对应的特性被禁用，false表示参数feature对应的特性未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   * @deprecated since 26.0.0
   * @useinstead restrictions.getDisallowedPolicyForAccount(admin: Want | null, feature: FeatureForAccount, accountId: number)
   */
  function getDisallowedPolicyForAccount(admin: Want | null, feature: string, accountId: number): boolean;

  /**
   * 为指定用户添加禁止使用某特性的应用名单。指定用户下，添加到名单中的应用不允许使用指定的特性能力。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } feature - feature名称。<br/>- snapshotSkip：屏幕快照能力。
   * @param { Array<string> } list - 应用包名列表。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function addDisallowedListForAccount(admin: Want, feature: string, list: Array<string>, accountId: number): void;

  /**
   * 为指定用户移除禁止使用某特性的应用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } feature - feature名称。<br/>- snapshotSkip：屏幕快照能力。
   * @param { Array<string> } list - 包名等内容的名单集合。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function removeDisallowedListForAccount(admin: Want, feature: string, list: Array<string>, accountId: number): void;

  /**
   * 获取指定用户禁止使用某特性的应用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } feature - feature名称。<br/>- snapshotSkip：屏幕快照能力。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @returns { Array<string> } 用户已添加的禁用某特征的应用名单。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function getDisallowedListForAccount(admin: Want, feature: string, accountId: number): Array<string>;

  /**
   * 设置用户行为的限制规则。
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } settingsItem - 行为名称，仅支持以下值，传入其他值会报错。<br/>- setApn：APN设置，当前仅支持手机、平板使用。<br/>- powerLongPress：长按电源键打
   *     开电源菜单，当前仅支持手机、平板使用。<br/>- setEthernetIp：修改以太网IP地址，当前仅支持PC/2in1设备使用。<br/>- setDeviceName：修改设备名称，当前仅支持PC/2in1设备、手
   *     机、平板使用。禁用后，PC/2in1设备的设置中以下设备名称无法修改，包括关于本机、蓝牙、多设备协同->星闪。手机、平板设备设置中的关于本机、蓝牙、个人热点的设备名称无法修改。<br/>-
   *     setBiometricsAndScreenLock：修改锁屏密码，当前仅支持PC/2in1设备、手机、平板使用。
   * @param { boolean } restricted - 是否禁用行为。true表示禁用，false表示不禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   * @deprecated since 26.0.0
   * @useinstead restrictions.setUserRestriction(admin: Want, settingsItem: SettingsForDevice, restricted: boolean)
   */
  function setUserRestriction(admin: Want, settingsItem: string, restricted: boolean): void;

  /**
   * 获取设置项的禁用状态。
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } settingsItem - 指定设置项。<br/>- setEthernetIp：修改以太网IP地址，当前仅支持PC/2in1设备使用。<br/>- setDeviceName：修改设备名称，
   *     当前仅支持PC/2in1设备、手机、平板使用。PC/2in1设备设置中关于本机、蓝牙、多设备协同->星闪中的设备名称。手机、平板设备设置中关于本机、蓝牙、个人热点的设备名称。<br/>-
   *     setBiometricsAndScreenLock：修改锁屏密码，当前仅支持PC/2in1设备、手机、平板使用。
   * @returns { boolean } 返回指定设置项的禁用状态，true表示已禁用，false表示未禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   * @deprecated since 26.0.0
   * @useinstead restrictions.getUserRestricted(admin: Want, settingsItem: SettingsForDevice)
   */
  function getUserRestricted(admin: Want, settingsItem: string): boolean;

  /**
   * 设置指定用户行为的限制规则。
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } settingsItem - 行为名称。<br/>- modifyWallpaper：修改壁纸，包含锁屏壁纸和桌面壁纸。
   * @param { int } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   *     <br>取值限定为整数。
   * @param { boolean } restricted - 是否禁用行为。true表示禁用，false表示不禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   * @deprecated since 26.0.0
   * @useinstead restrictions.setUserRestrictionForAccount(admin: Want, settingsItem: SettingsForAccount, accountId: int, restricted: boolean)
   */
  function setUserRestrictionForAccount(admin: Want, settingsItem: string, accountId: int, restricted: boolean): void;

  /**
   * 获取指定用户设置项的禁用状态。
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } settingsItem - 指定设置项。<br/>- modifyWallpaper：修改壁纸，包含锁屏壁纸和桌面壁纸。
   * @param { int } accountId - 用户ID，取值范围：大于等于0。<br/>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   *     <br>取值限定为整数。
   * @returns { boolean } 返回指定设置项的禁用状态，true表示已禁用，false表示未禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   * @deprecated since 26.0.0
   * @useinstead restrictions.getUserRestrictedForAccount(admin: Want | null, settingsItem: SettingsForAccount, accountId: int)
   */
  function getUserRestrictedForAccount(admin: Want | null, settingsItem: string, accountId: int): boolean;

  /**
   * 设置禁用/启用指定设备特性，禁用后相关设备特性无法被使用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { FeatureForDevice } feature - 指定要禁用或允许的设备特性。<br/> **说明：** 应用申请权限
   *     ohos.permission.PERSONAL_MANAGE_RESTRICTIONS并通过
   *     [startAdminProvision]{@link @ohos.enterprise.adminManager:adminManager.startAdminProvision}激活为
   *     [BDA](docroot://mdm/mdm-kit-term.md#byod-device-admin-bdabyod设备管理员)，可以使用此接口设置以下特性：
   *     [FeatureForDevice.WIFI_P2P]{@link restrictions.FeatureForDevice}。
   * @param { boolean } disallow - true表示禁止使用，false表示允许使用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200013 - The enterprise management policy has been successfully set,
   *     but the function has not taken effect in real time.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean): void;

  /**
   * 查询指定设备特性是否被禁用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   *     当设备存在多个MDM应用时，传入Want时查询对应企业设备管理应用设置的策略，传入null时查询实际生效的策略。
   * @param { FeatureForDevice } feature - 指定要查询的设备特性。
   * @returns { boolean } 返回true表示feature对应的设备特性被禁用，false表示feature对应的设备特性未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice): boolean;

  /**
   * 设置禁用/启用指定用户的某特性。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { FeatureForAccount } feature - 要禁用或允许的用户特性。
   *     <br>当feature值为SUPER_HUB时，如果已经通过
   *     [addUserNonStopApps]{@link @ohos.enterprise.applicationManager:applicationManager.addUserNonStopApps}接口将中转站添加到当
   *     前用户下不可关停的应用列表中，再调用本接口禁用中转站，会发生策略冲突，抛出9200010错误码。可以通过
   *     [removeUserNonStopApps]{@link @ohos.enterprise.applicationManager:applicationManager.removeUserNonStopApps}接口将中
   *     转站从当前用户下不可关停的应用列表中移除来解决冲突。
   *     <br>当feature值为DISTRIBUTED_TRANSMISSION时，如果已经通过
   *     [setDisallowedPolicyForAccount]{@link restrictions.setDisallowedPolicyForAccount}接口禁用设备间分布式单向传输数据的能力，再调用本接口禁用分布
   *     式管理服务，会发生策略冲突，抛出9200010错误码。可以通过
   *     [setDisallowedPolicyForAccount]{@link restrictions.setDisallowedPolicyForAccount}接口取消禁用设备间分布式单向传输数据来解决冲突。
   * @param { boolean } disallow - true表示禁用，false表示启用。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。
   *     <br>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   *     <br>当feature值为SUPER_HUB时，accountId仅支持传入当前用户的用户ID，不支持跨用户设置。否则会抛出9200012错误码。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setDisallowedPolicyForAccount(admin: Want, feature: FeatureForAccount, disallow: boolean, accountId: number): void;

  /**
   * 获取指定用户的某特性状态。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   *     当设备存在多个MDM应用时，传入Want时查询对应企业设备管理应用设置的策略，传入null时查询实际生效的策略。
   * @param { FeatureForAccount } feature - 指定要查询的用户特性。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。
   *     <br>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @returns { boolean } 返回true表示参数feature对应的特性被禁用，false表示参数feature对应的特性未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getDisallowedPolicyForAccount(admin: Want | null, feature: FeatureForAccount, accountId: number): boolean;

  /**
   * 设置用户行为的限制规则。
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { SettingsForDevice } settingsItem - Device setting items to be restricted from modification.
   * @param { boolean } restricted - 是否禁用行为。true表示禁用，false表示不禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setUserRestriction(admin: Want, settingsItem: SettingsForDevice, restricted: boolean): void;

  /**
   * 获取设置项的禁用状态
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want | null } admin - EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the.
   *     EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM
   *     applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies
   *     that actually take effect on the device are returned.
   * @param { SettingsForDevice } settingsItem - 指定设置项。
   * @returns { boolean } 返回指定设置项的禁用状态，true表示已禁用，false表示未禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getUserRestricted(admin: Want | null, settingsItem: SettingsForDevice): boolean;

  /**
   * 限制指定用户修改指定的设置项。
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { SettingsForAccount } settingsItem - 指定要限制修改的用户设置项。
   * @param { int } accountId - 用户ID，取值范围：大于等于0。
   *     <br>取值限定为整数。
   *     <br>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @param { boolean } restricted - true表示禁用，false表示不禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function setUserRestrictionForAccount(admin: Want, settingsItem: SettingsForAccount, accountId: int, restricted: boolean): void;

  /**
   * 获取指定用户设置项的禁用状态。
   *
   * @permission ohos.permission.ENTERPRISE_SET_USER_RESTRICTION
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   *     当设备存在多个MDM应用时，传入Want时查询对应企业设备管理应用设置的策略，传入null时查询实际生效的策略。
   * @param { SettingsForAccount } settingsItem - 指定要查询的用户设置项。
   * @param { int } accountId - 用户ID，取值范围：大于等于0。
   *     <br>取值限定为整数。
   *     <br>accountId可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @returns { boolean } 返回指定用户设置项的禁用状态，true表示已禁用，false表示未禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getUserRestrictedForAccount(admin: Want | null, settingsItem: SettingsForAccount, accountId: int): boolean;
}

export default restrictions;