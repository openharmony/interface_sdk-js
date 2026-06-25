/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * @kit MDMKit
 */

import type { AsyncCallback } from './@ohos.base';
import common from '@ohos.app.ability.common';
import type Want from './@ohos.app.ability.Want';

/**
 * # 附录
 *
 * ### 可委托策略列表
 *
 * | 策略名称 | 对应接口                                                     | 说明 |
 * | --- | --- | --- |
 * |disallow_add_local_account|
 * [accountManager.disallowOsAccountAddition]{@link @ohos.enterprise.accountManager:accountManager.disallowOsAccountAddition}
 * <br>
 * [accountManager.isOsAccountAdditionDisallowed]{@link @ohos.enterprise.accountManager:accountManager.isOsAccountAdditionDisallowed}
 * | 不传accountId参数，禁止设备创建本地用户。<br>不传accountId参数，查询是否禁止设备创建本地用户。|
 * |disallow_add_os_account_by_user|
 * [accountManager.disallowOsAccountAddition]{@link @ohos.enterprise.accountManager:accountManager.disallowOsAccountAddition}
 * <br>
 * [accountManager.isOsAccountAdditionDisallowed]{@link @ohos.enterprise.accountManager:accountManager.isOsAccountAdditionDisallowed}
 * | 需传入accountId参数，禁止指定用户添加账号。<br>需传入accountId参数，查询是否禁止指定用户添加账号。|
 * |disallow_running_bundles|
 * [applicationManager.addDisallowedRunningBundlesSync]{@link @ohos.enterprise.applicationManager:applicationManager.addDisallowedRunningBundlesSync}
 * <br>
 * [applicationManager.removeDisallowedRunningBundlesSync]{@link @ohos.enterprise.applicationManager:applicationManager.removeDisallowedRunningBundlesSync}
 * <br>
 * [applicationManager.getDisallowedRunningBundlesSync]{@link @ohos.enterprise.applicationManager:applicationManager.getDisallowedRunningBundlesSync}
 * |添加应用至应用运行禁止名单，添加至禁止名单的应用不允许在当前/指定用户下运行。<br>从应用运行禁止名单中移除应用。<br>获取当前/指定用户下的应用运行禁止名单。 |
 * |manage_auto_start_apps|
 * [applicationManager.addAutoStartApps]{@link @ohos.enterprise.applicationManager:applicationManager.addAutoStartApps(admin: Want, autoStartApps: Array<Want>)}
 * <br>
 * [applicationManager.removeAutoStartApps]{@link @ohos.enterprise.applicationManager:applicationManager.removeAutoStartApps(admin: Want, autoStartApps: Array<Want>)}
 * <br>
 * [applicationManager.getAutoStartApps]{@link @ohos.enterprise.applicationManager:applicationManager.getAutoStartApps(admin: Want)}
 * |添加开机自启动应用名单。<br>从开机自启动应用名单中移除应用。<br>查询开机自启动应用名单。|
 * |allowed_bluetooth_devices|
 * [bluetoothManager.addAllowedBluetoothDevices]{@link @ohos.enterprise.bluetoothManager:bluetoothManager.addAllowedBluetoothDevices}
 * <br>
 * [bluetoothManager.removeAllowedBluetoothDevices]{@link @ohos.enterprise.bluetoothManager:bluetoothManager.removeAllowedBluetoothDevices}
 * <br>
 * [bluetoothManager.getAllowedBluetoothDevices]{@link @ohos.enterprise.bluetoothManager:bluetoothManager.getAllowedBluetoothDevices}
 * |添加蓝牙设备可用名单。<br>从蓝牙设备可用名单中移除。<br>查询蓝牙设备可用名单。|
 * |set_browser_policies|[browser.setPolicySync]{@link @ohos.enterprise.browser:browser.setPolicySync}<br>
 * [browser.getPoliciesSync]{@link @ohos.enterprise.browser:browser.getPoliciesSync}|为指定的浏览器设置浏览器子策略。<br>获取指定浏览器的策略。|
 * |allowed_install_bundles|
 * [bundleManager.addAllowedInstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addAllowedInstallBundlesSync}
 * <br>
 * [bundleManager.removeAllowedInstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.removeAllowedInstallBundlesSync}
 * <br>
 * [bundleManager.getAllowedInstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.getAllowedInstallBundlesSync}
 * |添加应用至应用程序包安装允许名单，添加至允许名单的应用允许在当前/指定用户下安装，否则不允许安装。<br>从应用程序包安装允许名单中移除应用。<br>获取当前/指定用户下的应用程序包安装允许名单。|
 * |disallowed_install_bundles|
 * [bundleManager.addDisallowedInstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedInstallBundlesSync}
 * <br>
 * [bundleManager.removeDisallowedInstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.removeDisallowedInstallBundlesSync}
 * <br>
 * [bundleManager.getDisallowedInstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.getDisallowedInstallBundlesSync}
 * |添加应用至应用程序包安装禁止名单，添加至禁止名单的应用不允许在当前/指定用户下安装。<br>从应用程序包安装禁止名单中移除应用。<br>获取当前/指定用户下的应用程序包安装禁止名单。|
 * |disallowed_uninstall_bundles|
 * [bundleManager.addDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedUninstallBundlesSync}
 * <br>
 * [bundleManager.removeDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.removeDisallowedUninstallBundlesSync}
 * <br>
 * [bundleManager.getDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.getDisallowedUninstallBundlesSync}
 * |添加应用至应用程序包卸载禁止名单，添加至禁止名单的应用不允许在当前/指定用户下卸载。<br>从应用程序包卸载禁止名单中移除应用。<br>获取当前/指定用户下的应用包程序卸载禁止名单。|
 * |get_device_info|[deviceInfo.getDeviceInfo]{@link @ohos.enterprise.deviceInfo:deviceInfo.getDeviceInfo}|获取设备信息。|
 * |location_policy|
 * [locationManager.setLocationPolicy]{@link @ohos.enterprise.locationManager:locationManager.setLocationPolicy}<br>
 * [locationManager.getLocationPolicy]{@link @ohos.enterprise.locationManager:locationManager.getLocationPolicy}|设置位置服务管
 * 理策略。<br>查询位置服务策略。|
 * |disabled_network_interface|
 * [networkManager.setNetworkInterfaceDisabledSync]{@link @ohos.enterprise.networkManager:networkManager.setNetworkInterfaceDisabledSync}
 * <br>
 * [networkManager.isNetworkInterfaceDisabledSync]{@link @ohos.enterprise.networkManager:networkManager.isNetworkInterfaceDisabledSync}
 * |禁止设备使用指定网络。<br>查询指定网络接口是否被禁用。|
 * |global_proxy|
 * [networkManager.setGlobalProxySync]{@link @ohos.enterprise.networkManager:networkManager.setGlobalProxySync}<br>
 * [networkManager.getGlobalProxySync]{@link @ohos.enterprise.networkManager:networkManager.getGlobalProxySync}|设置网络全局代理
 * 。<br>获取网络全局代理。|
 * |disabled_bluetooth|
 * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
 * <br>
 * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
 * |feature传入bluetooth，禁用/启用蓝牙能力。<br>feature传入bluetooth，查询是否禁用蓝牙能力。|
 * |disallow_modify_datetime|
 * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
 * <br>
 * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
 * |feature传入modifyDateTime，禁用/启用设置系统时间能力。<br>feature传入modifyDateTime，查询是否禁用修改系统时间能力。|
 * |disabled_printer|
 * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
 * <br>
 * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
 * |feature传入printer，禁用/启用打印能力。<br>feature传入printer，查询是否禁用打印能力。|
 * |disabled_hdc|
 * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
 * <br>
 * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
 * |feature传入hdc，禁用/启用被其他设备通过hdc连接、调试的能力。<br>feature传入hdc，查询是否禁用被其他设备通过hdc连接、调试的能力。|
 * |disable_microphone|
 * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
 * <br>
 * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
 * |feature传入microphone，禁用/启用麦克风能力。<br>feature传入microphone，查询是否禁用麦克风能力。|
 * |fingerprint_auth|
 * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
 * <br>
 * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
 * <br>
 * [restrictions.setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number)}
 * <br>
 * [restrictions.getDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicyForAccount(admin: Want | null, feature: string, accountId: number)}
 * |feature传入fingerprint，禁用/启用指纹认证能力。<br>feature传入fingerprint，查询是否禁用指纹认证能力。<br>feature传入fingerprint，禁用/启用指定用户的指纹认证能力。<br
 * >feature传入fingerprint，查询是否禁用指定用户的指纹认证能力。|
 * |disable_usb|
 * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
 * <br>
 * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
 * |feature传入usb，禁用/启用USB能力。<br>feature传入usb，查询是否禁用USB能力。|
 * |disable_wifi|
 * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
 * <br>
 * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
 * |feature传入wifi，禁用/启用Wi-Fi能力。<br>feature传入wifi，查询是否禁用Wi-Fi能力。|
 * |disallowed_tethering|
 * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
 * <br>
 * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
 * |feature传入tethering，禁用/启用网络共享能力。<br>feature传入tethering，查询是否禁用网络共享能力。|
 * |inactive_user_freeze|
 * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
 * <br>
 * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
 * |feature传入inactiveUserFreeze，禁用/启用非活跃用户运行能力。<br>feature传入inactiveUserFreeze，查询是否禁用非活跃用户运行能力。|
 * |snapshot_skip|
 * [restrictions.addDisallowedListForAccount]{@link @ohos.enterprise.restrictions:restrictions.addDisallowedListForAccount}
 * <br>
 * [restrictions.removeDisallowedListForAccount]{@link @ohos.enterprise.restrictions:restrictions.removeDisallowedListForAccount}
 * <br>
 * [restrictions.getDisallowedListForAccount]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedListForAccount}
 * |feature传入snapshotSkip，禁用屏幕快照能力的应用名单。<br>feature传入snapshotSkip，从禁用屏幕快照能力的应用名单中移除。<br>feature传入snapshotSkip，查询禁用屏幕快照能力
 * 的应用名单。|
 * |password_policy|
 * [securityManager.setPasswordPolicy]{@link @ohos.enterprise.securityManager:securityManager.setPasswordPolicy}<br>
 * [securityManager.getPasswordPolicy]{@link @ohos.enterprise.securityManager:securityManager.getPasswordPolicy(admin: Want)}
 * |设置设备锁屏口令策略。<br>获取设备锁屏口令策略。|
 * |clipboard_policy|
 * [securityManager.setAppClipboardPolicy]{@link @ohos.enterprise.securityManager:securityManager.setAppClipboardPolicy(admin: Want, tokenId: number, policy: ClipboardPolicy)}
 * <br>
 * [securityManager.getAppClipboardPolicy]{@link @ohos.enterprise.securityManager:securityManager.getAppClipboardPolicy(admin: Want, tokenId?: number)}
 * |设置设备剪贴板策略。<br>获取设备剪贴板策略。|
 * |watermark_image_policy|
 * [securityManager.setWatermarkImage]{@link @ohos.enterprise.securityManager:securityManager.setWatermarkImage(admin: Want, bundleName: string, source: string | image.PixelMap, accountId: number)}
 * <br>
 * [securityManager.cancelWatermarkImage]{@link @ohos.enterprise.securityManager:securityManager.cancelWatermarkImage}|设
 * 置水印策略，当前仅支持PC/2in1使用。<br>取消水印策略，当前仅支持PC/2in1使用。|
 * |ntp_server|[systemManager.setNTPServer]{@link @ohos.enterprise.systemManager:systemManager.setNTPServer}<br>
 * [systemManager.getNTPServer]{@link @ohos.enterprise.systemManager:systemManager.getNTPServer}|设置NTP服务器的策略。<br>获取NTP服务
 * 器信息。|
 * |set_update_policy|
 * [systemManager.setOtaUpdatePolicy]{@link @ohos.enterprise.systemManager:systemManager.setOtaUpdatePolicy}<br>
 * [systemManager.getOtaUpdatePolicy]{@link @ohos.enterprise.systemManager:systemManager.getOtaUpdatePolicy}|设置升级策略。<br>
 * 查询升级策略。|
 * |notify_upgrade_packages|
 * [systemManager.notifyUpdatePackages]{@link @ohos.enterprise.systemManager:systemManager.notifyUpdatePackages}<br>
 * [systemManager.getUpdateResult]{@link @ohos.enterprise.systemManager:systemManager.getUpdateResult}|通知系统更新包信息。<br>获取系
 * 统更新结果。|
 * |allowed_usb_devices|
 * [usbManager.addAllowedUsbDevices]{@link @ohos.enterprise.usbManager:usbManager.addAllowedUsbDevices}<br>
 * [usbManager.removeAllowedUsbDevices]{@link @ohos.enterprise.usbManager:usbManager.removeAllowedUsbDevices}<br>
 * [usbManager.getAllowedUsbDevices]{@link @ohos.enterprise.usbManager:usbManager.getAllowedUsbDevices}|添加USB设备可用名单。<br>
 * 移除USB设备可用名单。<br>获取USB设备可用名单。|
 * |usb_read_only|
 * [usbManager.setUsbStorageDeviceAccessPolicy]{@link @ohos.enterprise.usbManager:usbManager.setUsbStorageDeviceAccessPolicy}
 * <br>
 * [usbManager.getUsbStorageDeviceAccessPolicy]{@link @ohos.enterprise.usbManager:usbManager.getUsbStorageDeviceAccessPolicy}
 * |设置USB存储设备访问策略。<br>获取USB存储设备访问策略。|
 * |disallowed_usb_devices|
 * [usbManager.addDisallowedUsbDevices]{@link @ohos.enterprise.usbManager:usbManager.addDisallowedUsbDevices}<br>
 * [usbManager.removeDisallowedUsbDevices]{@link @ohos.enterprise.usbManager:usbManager.removeDisallowedUsbDevices}<br>
 * [usbManager.getDisallowedUsbDevices]{@link @ohos.enterprise.usbManager:usbManager.getDisallowedUsbDevices}|添加禁止使用的USB
 * 设备类型。<br>移除禁止使用的USB设备类型。<br>获取禁止使用的USB设备类型。|
 * |disallowed_sms|
 * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
 * <br>
 * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
 * |feature传入sms，禁用/启用设备接收、发送短信的能力，当前仅支持手机、平板设备使用。<br>feature传入sms，查询是否禁用设备接收、发送短信的能力，当前仅支持手机、平板设备使用。|
 * |disallowed_mms|
 * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
 * <br>
 * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
 * |feature传入mms，禁用/启用设备接收、发送彩信的能力，当前仅支持手机、平板设备使用。<br>feature传入mms，查询是否禁用设备接收、发送彩信的能力，当前仅支持手机、平板设备使用。|
 * |disable_backup_and_restore|
 * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
 * <br>
 * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
 * |feature传入backupAndRestore，禁用/启用备份和恢复能力，当前仅支持手机、平板使用。<br>feature传入backupAndRestore，查询是否禁用备份和恢复能力，当前仅支持手机、平板使用。|
 * |installed_bundle_info_list|
 * [bundleManager.getInstalledBundleList]{@link @ohos.enterprise.bundleManager:bundleManager.getInstalledBundleList(admin: Want, accountId: number)}
 * |获取设备指定用户下已安装应用列表。|
 * |clear_up_application_data|
 * [applicationManager.clearUpApplicationData]{@link @ohos.enterprise.applicationManager:applicationManager.clearUpApplicationData}
 * |清除应用产生的所有数据。|
 * |disallow_unmute_device|
 * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
 * <br>
 * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
 * |feature传入unmuteDevice，禁用/启用设备媒体播放声音能力。<br>feature传入unmuteDevice，查询是否禁用设备媒体播放声音能力。|
 * |disabled_hdc_remote|
 * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
 * <br>
 * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
 * |feature传入hdcRemote，禁用/启用设备通过hdc调试其他设备的能力。<br>feature传入hdcRemote，查询是否禁用设备通过hdc调试其他设备的能力。|
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace adminManager {
  /**
   * # 可委托策略列表
   *
   * | 策略名称 | 对应接口                                                     | 说明 |
   * | --- | --- | --- |
   * |disallow_add_local_account|
   * [accountManager.disallowOsAccountAddition]{@link @ohos.enterprise.accountManager:accountManager.disallowOsAccountAddition}
   * <br>
   * [accountManager.isOsAccountAdditionDisallowed]{@link @ohos.enterprise.accountManager:accountManager.isOsAccountAdditionDisallowed}
   * | 不传accountId参数，禁止设备创建本地用户。<br>不传accountId参数，查询是否禁止设备创建本地用户。|
   * |disallow_add_os_account_by_user|
   * [accountManager.disallowOsAccountAddition]{@link @ohos.enterprise.accountManager:accountManager.disallowOsAccountAddition}
   * <br>
   * [accountManager.isOsAccountAdditionDisallowed]{@link @ohos.enterprise.accountManager:accountManager.isOsAccountAdditionDisallowed}
   * | 需传入accountId参数，禁止指定用户添加账号。<br>需传入accountId参数，查询是否禁止指定用户添加账号。|
   * |disallow_running_bundles|
   * [applicationManager.addDisallowedRunningBundlesSync]{@link @ohos.enterprise.applicationManager:applicationManager.addDisallowedRunningBundlesSync}
   * <br>
   * [applicationManager.removeDisallowedRunningBundlesSync]{@link @ohos.enterprise.applicationManager:applicationManager.removeDisallowedRunningBundlesSync}
   * <br>
   * [applicationManager.getDisallowedRunningBundlesSync]{@link @ohos.enterprise.applicationManager:applicationManager.getDisallowedRunningBundlesSync}
   * |添加应用至应用运行禁止名单，添加至禁止名单的应用不允许在当前/指定用户下运行。<br>从应用运行禁止名单中移除应用。<br>获取当前/指定用户下的应用运行禁止名单。 |
   * |manage_auto_start_apps|
   * [applicationManager.addAutoStartApps]{@link @ohos.enterprise.applicationManager:applicationManager.addAutoStartApps(admin: Want, autoStartApps: Array<Want>)}
   * <br>
   * [applicationManager.removeAutoStartApps]{@link @ohos.enterprise.applicationManager:applicationManager.removeAutoStartApps(admin: Want, autoStartApps: Array<Want>)}
   * <br>
   * [applicationManager.getAutoStartApps]{@link @ohos.enterprise.applicationManager:applicationManager.getAutoStartApps(admin: Want)}
   * |添加开机自启动应用名单。<br>从开机自启动应用名单中移除应用。<br>查询开机自启动应用名单。|
   * |allowed_bluetooth_devices|
   * [bluetoothManager.addAllowedBluetoothDevices]{@link @ohos.enterprise.bluetoothManager:bluetoothManager.addAllowedBluetoothDevices}
   * <br>
   * [bluetoothManager.removeAllowedBluetoothDevices]{@link @ohos.enterprise.bluetoothManager:bluetoothManager.removeAllowedBluetoothDevices}
   * <br>
   * [bluetoothManager.getAllowedBluetoothDevices]{@link @ohos.enterprise.bluetoothManager:bluetoothManager.getAllowedBluetoothDevices}
   * |添加蓝牙设备可用名单。<br>从蓝牙设备可用名单中移除。<br>查询蓝牙设备可用名单。|
   * |set_browser_policies|[browser.setPolicySync]{@link @ohos.enterprise.browser:browser.setPolicySync}<br>
   * [browser.getPoliciesSync]{@link @ohos.enterprise.browser:browser.getPoliciesSync}|为指定的浏览器设置浏览器子策略。<br>获取指定浏览器的策略。|
   * |allowed_install_bundles|
   * [bundleManager.addAllowedInstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addAllowedInstallBundlesSync}
   * <br>
   * [bundleManager.removeAllowedInstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.removeAllowedInstallBundlesSync}
   * <br>
   * [bundleManager.getAllowedInstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.getAllowedInstallBundlesSync}
   * |添加应用至应用程序包安装允许名单，添加至允许名单的应用允许在当前/指定用户下安装，否则不允许安装。<br>从应用程序包安装允许名单中移除应用。<br>获取当前/指定用户下的应用程序包安装允许名单。|
   * |disallowed_install_bundles|
   * [bundleManager.addDisallowedInstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedInstallBundlesSync}
   * <br>
   * [bundleManager.removeDisallowedInstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.removeDisallowedInstallBundlesSync}
   * <br>
   * [bundleManager.getDisallowedInstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.getDisallowedInstallBundlesSync}
   * |添加应用至应用程序包安装禁止名单，添加至禁止名单的应用不允许在当前/指定用户下安装。<br>从应用程序包安装禁止名单中移除应用。<br>获取当前/指定用户下的应用程序包安装禁止名单。|
   * |disallowed_uninstall_bundles|
   * [bundleManager.addDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedUninstallBundlesSync}
   * <br>
   * [bundleManager.removeDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.removeDisallowedUninstallBundlesSync}
   * <br>
   * [bundleManager.getDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.getDisallowedUninstallBundlesSync}
   * |添加应用至应用程序包卸载禁止名单，添加至禁止名单的应用不允许在当前/指定用户下卸载。<br>从应用程序包卸载禁止名单中移除应用。<br>获取当前/指定用户下的应用包程序卸载禁止名单。|
   * |get_device_info|[deviceInfo.getDeviceInfo]{@link @ohos.enterprise.deviceInfo:deviceInfo.getDeviceInfo}|获取设备信息。|
   * |location_policy|
   * [locationManager.setLocationPolicy]{@link @ohos.enterprise.locationManager:locationManager.setLocationPolicy}<br>
   * [locationManager.getLocationPolicy]{@link @ohos.enterprise.locationManager:locationManager.getLocationPolicy}|设置位置服
   * 务管理策略。<br>查询位置服务策略。|
   * |disabled_network_interface|
   * [networkManager.setNetworkInterfaceDisabledSync]{@link @ohos.enterprise.networkManager:networkManager.setNetworkInterfaceDisabledSync}
   * <br>
   * [networkManager.isNetworkInterfaceDisabledSync]{@link @ohos.enterprise.networkManager:networkManager.isNetworkInterfaceDisabledSync}
   * |禁止设备使用指定网络。<br>查询指定网络接口是否被禁用。|
   * |global_proxy|
   * [networkManager.setGlobalProxySync]{@link @ohos.enterprise.networkManager:networkManager.setGlobalProxySync}<br>
   * [networkManager.getGlobalProxySync]{@link @ohos.enterprise.networkManager:networkManager.getGlobalProxySync}|设置网络全局
   * 代理。<br>获取网络全局代理。|
   * |disabled_bluetooth|
   * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * <br>
   * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
   * |feature传入bluetooth，禁用/启用蓝牙能力。<br>feature传入bluetooth，查询是否禁用蓝牙能力。|
   * |disallow_modify_datetime|
   * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * <br>
   * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
   * |feature传入modifyDateTime，禁用/启用设置系统时间能力。<br>feature传入modifyDateTime，查询是否禁用修改系统时间能力。|
   * |disabled_printer|
   * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * <br>
   * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
   * |feature传入printer，禁用/启用打印能力。<br>feature传入printer，查询是否禁用打印能力。|
   * |disabled_hdc|
   * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * <br>
   * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
   * |feature传入hdc，禁用/启用被其他设备通过hdc连接、调试的能力。<br>feature传入hdc，查询是否禁用被其他设备通过hdc连接、调试的能力。|
   * |disable_microphone|
   * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * <br>
   * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
   * |feature传入microphone，禁用/启用麦克风能力。<br>feature传入microphone，查询是否禁用麦克风能力。|
   * |fingerprint_auth|
   * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * <br>
   * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
   * <br>
   * [restrictions.setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number)}
   * <br>
   * [restrictions.getDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicyForAccount(admin: Want | null, feature: string, accountId: number)}
   * |feature传入fingerprint，禁用/启用指纹认证能力。<br>feature传入fingerprint，查询是否禁用指纹认证能力。<br>feature传入fingerprint，禁用/启用指定用户的指纹认证能力。<
   * br>feature传入fingerprint，查询是否禁用指定用户的指纹认证能力。|
   * |disable_usb|
   * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * <br>
   * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
   * |feature传入usb，禁用/启用USB能力。<br>feature传入usb，查询是否禁用USB能力。|
   * |disable_wifi|
   * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * <br>
   * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
   * |feature传入wifi，禁用/启用Wi-Fi能力。<br>feature传入wifi，查询是否禁用Wi-Fi能力。|
   * |disallowed_tethering|
   * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * <br>
   * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
   * |feature传入tethering，禁用/启用网络共享能力。<br>feature传入tethering，查询是否禁用网络共享能力。|
   * |inactive_user_freeze|
   * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * <br>
   * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
   * |feature传入inactiveUserFreeze，禁用/启用非活跃用户运行能力。<br>feature传入inactiveUserFreeze，查询是否禁用非活跃用户运行能力。|
   * |snapshot_skip|
   * [restrictions.addDisallowedListForAccount]{@link @ohos.enterprise.restrictions:restrictions.addDisallowedListForAccount}
   * <br>
   * [restrictions.removeDisallowedListForAccount]{@link @ohos.enterprise.restrictions:restrictions.removeDisallowedListForAccount}
   * <br>
   * [restrictions.getDisallowedListForAccount]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedListForAccount}
   * |feature传入snapshotSkip，禁用屏幕快照能力的应用名单。<br>feature传入snapshotSkip，从禁用屏幕快照能力的应用名单中移除。<br>feature传入snapshotSkip，查询禁用屏幕快照
   * 能力的应用名单。|
   * |password_policy|
   * [securityManager.setPasswordPolicy]{@link @ohos.enterprise.securityManager:securityManager.setPasswordPolicy}<br>
   * [securityManager.getPasswordPolicy]{@link @ohos.enterprise.securityManager:securityManager.getPasswordPolicy(admin: Want)}
   * |设置设备锁屏口令策略。<br>获取设备锁屏口令策略。|
   * |clipboard_policy|
   * [securityManager.setAppClipboardPolicy]{@link @ohos.enterprise.securityManager:securityManager.setAppClipboardPolicy(admin: Want, tokenId: number, policy: ClipboardPolicy)}
   * <br>
   * [securityManager.getAppClipboardPolicy]{@link @ohos.enterprise.securityManager:securityManager.getAppClipboardPolicy(admin: Want, tokenId?: number)}
   * |设置设备剪贴板策略。<br>获取设备剪贴板策略。|
   * |watermark_image_policy|
   * [securityManager.setWatermarkImage]{@link @ohos.enterprise.securityManager:securityManager.setWatermarkImage(admin: Want, bundleName: string, source: string | image.PixelMap, accountId: number)}
   * <br>
   * [securityManager.cancelWatermarkImage]{@link @ohos.enterprise.securityManager:securityManager.cancelWatermarkImage}
   * |设置水印策略，当前仅支持PC/2in1使用。<br>取消水印策略，当前仅支持PC/2in1使用。|
   * |ntp_server|[systemManager.setNTPServer]{@link @ohos.enterprise.systemManager:systemManager.setNTPServer}<br>
   * [systemManager.getNTPServer]{@link @ohos.enterprise.systemManager:systemManager.getNTPServer}|设置NTP服务器的策略。<br>获取NTP
   * 服务器信息。|
   * |set_update_policy|
   * [systemManager.setOtaUpdatePolicy]{@link @ohos.enterprise.systemManager:systemManager.setOtaUpdatePolicy}<br>
   * [systemManager.getOtaUpdatePolicy]{@link @ohos.enterprise.systemManager:systemManager.getOtaUpdatePolicy}|设置升级策略。<
   * br>查询升级策略。|
   * |notify_upgrade_packages|
   * [systemManager.notifyUpdatePackages]{@link @ohos.enterprise.systemManager:systemManager.notifyUpdatePackages}<br>
   * [systemManager.getUpdateResult]{@link @ohos.enterprise.systemManager:systemManager.getUpdateResult}|通知系统更新包信息。<br>获
   * 取系统更新结果。|
   * |allowed_usb_devices|
   * [usbManager.addAllowedUsbDevices]{@link @ohos.enterprise.usbManager:usbManager.addAllowedUsbDevices}<br>
   * [usbManager.removeAllowedUsbDevices]{@link @ohos.enterprise.usbManager:usbManager.removeAllowedUsbDevices}<br>
   * [usbManager.getAllowedUsbDevices]{@link @ohos.enterprise.usbManager:usbManager.getAllowedUsbDevices}|添加USB设备可用名单。<
   * br>移除USB设备可用名单。<br>获取USB设备可用名单。|
   * |usb_read_only|
   * [usbManager.setUsbStorageDeviceAccessPolicy]{@link @ohos.enterprise.usbManager:usbManager.setUsbStorageDeviceAccessPolicy}
   * <br>
   * [usbManager.getUsbStorageDeviceAccessPolicy]{@link @ohos.enterprise.usbManager:usbManager.getUsbStorageDeviceAccessPolicy}
   * |设置USB存储设备访问策略。<br>获取USB存储设备访问策略。|
   * |disallowed_usb_devices|
   * [usbManager.addDisallowedUsbDevices]{@link @ohos.enterprise.usbManager:usbManager.addDisallowedUsbDevices}<br>
   * [usbManager.removeDisallowedUsbDevices]{@link @ohos.enterprise.usbManager:usbManager.removeDisallowedUsbDevices}<br
   * >[usbManager.getDisallowedUsbDevices]{@link @ohos.enterprise.usbManager:usbManager.getDisallowedUsbDevices}|添加禁止使用的
   * USB设备类型。<br>移除禁止使用的USB设备类型。<br>获取禁止使用的USB设备类型。|
   * |disallowed_sms|
   * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * <br>
   * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
   * |feature传入sms，禁用/启用设备接收、发送短信的能力，当前仅支持手机、平板设备使用。<br>feature传入sms，查询是否禁用设备接收、发送短信的能力，当前仅支持手机、平板设备使用。|
   * |disallowed_mms|
   * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * <br>
   * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
   * |feature传入mms，禁用/启用设备接收、发送彩信的能力，当前仅支持手机、平板设备使用。<br>feature传入mms，查询是否禁用设备接收、发送彩信的能力，当前仅支持手机、平板设备使用。|
   * |disable_backup_and_restore|
   * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * <br>
   * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
   * |feature传入backupAndRestore，禁用/启用备份和恢复能力，当前仅支持手机、平板使用。<br>feature传入backupAndRestore，查询是否禁用备份和恢复能力，当前仅支持手机、平板使用。|
   * |installed_bundle_info_list|
   * [bundleManager.getInstalledBundleList]{@link @ohos.enterprise.bundleManager:bundleManager.getInstalledBundleList(admin: Want, accountId: number)}
   * |获取设备指定用户下已安装应用列表。|
   * |clear_up_application_data|
   * [applicationManager.clearUpApplicationData]{@link @ohos.enterprise.applicationManager:applicationManager.clearUpApplicationData}
   * |清除应用产生的所有数据。|
   * |disallow_unmute_device|
   * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * <br>
   * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
   * |feature传入unmuteDevice，禁用/启用设备媒体播放声音能力。<br>feature传入unmuteDevice，查询是否禁用设备媒体播放声音能力。|
   * |disabled_hdc_remote|
   * [restrictions.setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * <br>
   * [restrictions.getDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.getDisallowedPolicy(admin: Want | null, feature: string)}
   * |feature传入hdcRemote，禁用/启用设备通过hdc调试其他设备的能力。<br>feature传入hdcRemote，查询是否禁用设备通过hdc调试其他设备的能力。|
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  export enum Policy {
    /**
     * 禁用名单。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    BLOCK_LIST = 0,

    /**
     * 允许名单。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    TRUST_LIST = 1
  }

  /**
   * 设备管理应用的企业信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface EnterpriseInfo {
    /**
     * 表示设备管理应用所属企业的名称。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 表示设备管理应用所属企业的描述。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    description: string;
  }

  /**
   * 设备管理应用的类型。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @since 15
   */
  export enum AdminType {
    /**
     * 普通设备管理应用，激活后应用可卸载，其[企业设备管理扩展能力](docroot://mdm/mdm-kit-term.md#企业设备管理扩展能力)组件将开机自启和组件进程死亡后能重新拉起。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 9
     */
    ADMIN_TYPE_NORMAL = 0x00,

    /**
     * 超级设备管理应用，激活后应用不可卸载，其[企业设备管理扩展能力](docroot://mdm/mdm-kit-term.md#企业设备管理扩展能力)组件将开机自启和组件进程死亡后能重新拉起。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 9
     */
    ADMIN_TYPE_SUPER = 0x01,

    /**
     * BYOD设备管理应用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 15
     */
    ADMIN_TYPE_BYOD = 0x02
  }

  /**
   * 可订阅的系统管理事件。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @since 12
   */
  export enum ManagedEvent {
    /**
     * 应用安装事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 12
     */
    MANAGED_EVENT_BUNDLE_ADDED = 0,

    /**
     * 应用卸载事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 12
     */
    MANAGED_EVENT_BUNDLE_REMOVED = 1,

    /**
     * 应用启动事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 12
     */
    MANAGED_EVENT_APP_START = 2,

    /**
     * 应用停止事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 12
     */
    MANAGED_EVENT_APP_STOP = 3,

    /**
     * 系统更新事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 12
     */
    MANAGED_EVENT_SYSTEM_UPDATE = 4,

    /**
     * 账号新增事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 18
     */
    MANAGED_EVENT_ACCOUNT_ADDED = 5,

    /**
     * 账号切换事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 18
     */
    MANAGED_EVENT_ACCOUNT_SWITCHED = 6,

    /**
     * 账号删除事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 18
     */
    MANAGED_EVENT_ACCOUNT_REMOVED = 7,

    /**
     * 开机向导完成事件。**模型约束**：此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MANAGED_EVENT_STARTUP_GUIDE_COMPLETED = 8,

    /**
     * 设备启动完成事件。**模型约束**：此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MANAGED_EVENT_BOOT_COMPLETED = 9,

    /**
     * 应用更新事件。**模型约束**：此接口仅可在Stage模型下使用。
     * 26.0.0。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MANAGED_EVENT_BUNDLE_UPDATED = 10,

    /**
     * 企业管控策略变更事件
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MANAGED_EVENT_POLICIES_CHANGED = 11
  }

  /**
   * 设备管理的运行模式。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @since 19
   */
  export enum RunningMode {
    /**
     * 默认用户运行模式，表示应用在首次开机后的用户下运行。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 19
     */
    DEFAULT = 0,

    /**
     * 多用户运行模式，表示应用能够在多个用户下同时运行。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 19
     */
    MULTI_USER = 1
  }

  /**
   * 激活指定的设备管理应用。超级设备管理应用仅在首用户（u100）下可激活。激活后，应用不可卸载，其[企业设备管理扩展能力](docroot://mdm/mdm-kit-term.md#企业设备管理扩展能力)组件将开机自启并在用户切换
   * 后自启。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { EnterpriseInfo } enterpriseInfo - 设备管理应用的企业信息。
   * @param { AdminType } type - 激活的设备管理应用类型。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - Failed to activate the administrator application of the device.
   * @throws { BusinessError } 9200007 - The system ability works abnormally.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, callback: AsyncCallback<void>): void;

  /**
   * 激活指定用户（通过userId指定）下指定的设备管理应用，其中超级管理应用仅能在首用户（u100）下被激活。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { EnterpriseInfo } enterpriseInfo - 设备管理应用的企业信息。
   * @param { AdminType } type - 激活的设备管理应用类型。
   * @param { number } userId - 用户ID，指定具体用户，取值范围：大于等于0。<br>默认值：调用方所在用户。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - Failed to activate the administrator application of the device.
   * @throws { BusinessError } 9200007 - The system ability works abnormally.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, userId: number, callback: AsyncCallback<void>): void;

  /**
   * 激活当前/指定用户下指定的设备管理应用，其中超级管理应用仅能在首用户（u100）下被激活。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { EnterpriseInfo } enterpriseInfo - 设备管理应用的企业信息。
   * @param { AdminType } type - 激活的设备管理应用类型。
   * @param { number } [userId] - 用户ID，取值范围：大于等于0。<br> - 调用接口时，若传入userId，表示指定用户。<br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<void> } 无返回结果的Promise对象。当激活设备管理应用失败时，会抛出错误对象。
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - Failed to activate the administrator application of the device.
   * @throws { BusinessError } 9200007 - The system ability works abnormally.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, userId?: number): Promise<void>;

  /**
   * 将当前用户下指定的普通设备管理应用解除激活。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disableAdmin(admin: Want, callback: AsyncCallback<void>): void;

  /**
   * 将指定用户（通过userId指定）下指定的普通管理应用解除激活。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } userId - 用户ID，指定具体用户，取值范围：大于等于0。<br>默认值：当前用户。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disableAdmin(admin: Want, userId: number, callback: AsyncCallback<void>): void;

  /**
   * 解除激活指定用户的设备管理应用。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN [since 12 - 19]
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN or
   *     ohos.permission.START_PROVISIONING_MESSAGE [since 20 - 22]
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN or ohos.permission.START_PROVISIONING_MESSAGE
   *     or ohos.permission.ENTERPRISE_DEACTIVATE_DEVICE_ADMIN [since 23]
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。解除激活BYOD设备管理应用时，仅支持传入当前应用的企业设备管理
   *     扩展组件。
   * @param { number } [userId] - 用户ID，取值范围：大于等于0。<br> - 调用接口时，若传入userId，表示指定用户。<br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<void> } 无返回结果的Promise对象。当解除激活设备管理应用失败时，会抛出错误对象。
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function disableAdmin(admin: Want, userId?: number): Promise<void>;

  /**
   * 根据bundleName将超级设备管理应用解除激活。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { String } bundleName - 超级设备管理应用的包名。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disableSuperAdmin(bundleName: String, callback: AsyncCallback<void>): void;

  /**
   * 根据bundleName将超级设备管理应用解除激活。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { String } bundleName - 超级设备管理应用的包名。
   * @returns { Promise<void> } 无返回结果的Promise对象。当解除激活超级设备管理应用失败时，会抛出错误对象。
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disableSuperAdmin(bundleName: String): Promise<void>;

  /**
   * 查询当前用户下指定的设备管理应用是否被激活。使用callback异步回调。
   *
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<boolean> } callback - 回调函数，当接口调用成功，err为null，data为boolean值，true表示当前用户下指定的设备管理应用被激活，false表示当前用
   *     户下指定的设备管理应用未激活，否则err为错误对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isAdminEnabled(admin: Want, callback: AsyncCallback<boolean>): void;

  /**
   * 查询指定用户（通过userId指定）下指定的设备管理应用是否被激活。使用callback异步回调。
   *
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } userId - 用户ID，指定具体用户，取值范围：大于等于0。<br> 默认值：当前用户。
   * @param { AsyncCallback<boolean> } callback - 回调函数，当接口调用成功，err为null，data为boolean值，true表示当前用户下指定的设备管理应用被激活，false表示当前用
   *     户下指定的设备管理应用未激活，否则err为错误对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isAdminEnabled(admin: Want, userId: number, callback: AsyncCallback<boolean>): void;

  /**
   * 查询当前/指定用户下指定的设备管理应用是否被激活。使用Promise异步回调。
   *
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } [userId] - 用户ID，取值范围：大于等于0。<br> - 调用接口时，若传入userId，表示指定用户。<br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<boolean> } Promise对象, 返回true表示指定的设备管理应用被激活，返回false表示指定的设备管理应用未激活。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isAdminEnabled(admin: Want, userId?: number): Promise<boolean>;

  /**
   * 根据企业设备管理扩展组件查询当前应用是否被激活为BYOD设备管理应用。
   *
   * @permission ohos.permission.START_PROVISIONING_MESSAGE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。仅支持传入当前应用的企业设备管理扩展组件。
   * @returns { boolean } 返回true表示被激活为BYOD设备管理应用，返回false表示没有被激活为BYOD设备管理应用。
   * @throws { BusinessError } 9200012 - The parameter validation failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function isByodAdmin(admin: Want): boolean;

  /**
   * 获取设备管理应用的企业信息。使用callback异步回调。
   *
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<EnterpriseInfo> } callback - 回调函数，当接口调用成功，err为null，data为设备管理应用的企业信息，否则err为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function getEnterpriseInfo(admin: Want, callback: AsyncCallback<EnterpriseInfo>): void;

  /**
   * 获取设备管理应用的企业信息，使用Promise异步回调。
   *
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<EnterpriseInfo> } Promise对象，返回设备管理应用的企业信息。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function getEnterpriseInfo(admin: Want): Promise<EnterpriseInfo>;

  /**
   * 设置设备管理应用的企业信息。使用callback异步回调。
   *
   * @permission ohos.permission.SET_ENTERPRISE_INFO
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { EnterpriseInfo } enterpriseInfo - 设备管理应用的企业信息。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setEnterpriseInfo(admin: Want, enterpriseInfo: EnterpriseInfo, callback: AsyncCallback<void>): void;

  /**
   * 设置设备管理应用的企业信息。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_ENTERPRISE_INFO
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { EnterpriseInfo } enterpriseInfo - 设备管理应用的企业信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。当设置设备管理应用企业信息失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setEnterpriseInfo(admin: Want, enterpriseInfo: EnterpriseInfo): Promise<void>;

  /**
   * 根据bundleName查询首用户（u100）下的超级设备管理应用是否被激活。使用callback异步回调。
   *
   * @param { String } bundleName - 超级设备管理应用。
   * @param { AsyncCallback<boolean> } callback - 回调函数，当接口调用成功，err为null，data为boolean类型值，true表示当前用户下指定的设备管理应用被激活，false表示当
   *     前用户下指定的设备管理应用未激活，否则err为错误对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isSuperAdmin(bundleName: String, callback: AsyncCallback<boolean>): void;

  /**
   * 根据bundleName查询首用户（u100）下的超级设备管理应用是否被激活。使用Promise异步回调。
   *
   * @param { String } bundleName - 超级设备管理应用。
   * @returns { Promise<boolean> } Promise对象, 返回true表示指定的超级设备管理应用被激活，返回false表示指定的超级设备管理应用未激活。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isSuperAdmin(bundleName: String): Promise<boolean>;

  /**
   * 订阅系统管理事件。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<ManagedEvent> } managedEvents - 订阅事件数组。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   * @deprecated since 26.0.0
   * @useinstead adminManager.subscribeManagedEventSync
   */
  function subscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>, callback: AsyncCallback<void>): void;

  /**
   * 订阅系统管理事件。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<ManagedEvent> } managedEvents - 订阅事件数组。
   * @returns { Promise<void> } 无返回结果的Promise对象。当订阅系统事件失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   * @deprecated since 26.0.0
   * @useinstead adminManager.subscribeManagedEventSync
   */
  function subscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>): Promise<void>;

  /**
   * 取消订阅系统管理事件。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<ManagedEvent> } managedEvents - 取消订阅事件数组。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   * @deprecated since 26.0.0
   * @useinstead adminManager.unsubscribeManagedEventSync
   */
  function unsubscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>, callback: AsyncCallback<void>): void;

  /**
   * 取消订阅系统管理事件。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<ManagedEvent> } managedEvents - 取消订阅事件数组。
   * @returns { Promise<void> } 无返回结果的Promise对象。当取消订阅系统管理事件失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   * @deprecated since 26.0.0
   * @useinstead adminManager.unsubscribeManagedEventSync
   */
  function unsubscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>): Promise<void>;

  /**
   * 授予指定应用管理员权限。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 被授予管理员权限应用的包名。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200009 - Failed to grant the permission to the application.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function authorizeAdmin(admin: Want, bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * 授予指定应用管理员权限。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 被授予管理员权限应用的包名。
   * @returns { Promise<void> } 无返回结果的Promise对象。当授予指定应用管理员权限失败时，抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200009 - Failed to grant the permission to the application.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function authorizeAdmin(admin: Want, bundleName: string): Promise<void>;

  /**
   * 查询首用户（u100）下的超级设备管理应用。使用Promise异步回调。
   *
   * @returns { Promise<Want> } 返回超级设备管理应用的Promise对象。当设备没有激活超级管理应用时，返回的Promise中Want的bundleName与abilityName为空串。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function getSuperAdmin(): Promise<Want>;

  /**
   * 订阅系统管理事件。
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<ManagedEvent> } managedEvents - 订阅事件数组。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the
   *     device. [since 26.0.0]
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function subscribeManagedEventSync(admin: Want, managedEvents: Array<ManagedEvent>): void;

  /**
   * 取消订阅系统管理事件。
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<ManagedEvent> } managedEvents - 取消订阅事件数组。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function unsubscribeManagedEventSync(admin: Want, managedEvents: Array<ManagedEvent>): void;

  /**
   * 将指定应用替换成超级设备管理应用。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } oldAdmin - 原有企业设备管理扩展组件。Want中必须包含原有企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Want } newAdmin - 新企业设备管理扩展组件。Want中必须包含新的企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } isKeepPolicy - 是否保留原有企业设备管理扩展组件的策略，取值为true表示保留，取值为false表示不保留。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200011 - Failed to replace the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 18
   */
  function replaceSuperAdmin(oldAdmin: Want, newAdmin: Want, isKeepPolicy: boolean): void;

  /**
   * 委托其他应用来设置设备的管控策略。被委托的其他应用需申请委托策略对应接口所需权限。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_DELEGATED_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 被委托应用包名。被委托应用的分发类型需为enterprise_normal和enterprise_mdm，可以通过
   *     [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接口
   *     查询应用自身的[BundleInfo]{@link ./bundleManager/BundleInfo}，其中BundleInfo.appInfo.appDistributionType为应用的分发类型。
   * @param { Array<string> } policies -
      *     [委托策略列表](docroot://reference/apis-mdm-kit/js-apis-enterprise-adminManager.md#可委托策略列表)。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200009 - Failed to grant the permission to the application.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function setDelegatedPolicies(admin: Want, bundleName: string, policies: Array<string>): void;

  /**
   * 委托其他应用来设置设备的管控策略。被委托的其他应用需申请委托策略对应接口所需权限。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { string } bundleName - 将要被委托的管理应用的包名。被委托应用的分发类型需为enterprise_normal和enterprise_mdm，可以通过
   *     [bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
   *     接口查询应用自身的BundleInfo，其中BundleInfo.appInfo.appDistributionType为应用的分发类型。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   * @param { Array<string> } policies -
      *     [委托策略列表](docroot://reference/apis-mdm-kit/js-apis-enterprise-adminManager.md#可委托策略列表)。
   * @throws { BusinessError } 9200009 - Failed to grant the permission to the application.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 20
   */
  function setDelegatedPolicies(bundleName: string, accountId: number, policies: Array<string>): void;

  /**
   * 查询被委托应用可访问的策略列表。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_DELEGATED_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 被委托应用包名。被委托应用的分发类型需为enterprise_normal和enterprise_mdm，可以通过
   *     [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接口
   *     查询应用自身的[BundleInfo]{@link ./bundleManager/BundleInfo}，其中BundleInfo.appInfo.appDistributionType为应用的分发类型。
   * @returns { Array<string> } 委托策略列表。
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
  function getDelegatedPolicies(admin: Want, bundleName: string): Array<string>;

  /**
   * 查询可以访问某个委托策略的被委托应用，输出被委托应用列表。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_DELEGATED_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } policy - 委托策略。
   * @returns { Array<string> } 被委托应用列表。
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
  function getDelegatedBundleNames(admin: Want, policy: string): Array<string>;

  /**
   * 设备管理应用拉起BYOD管理员激活页面进行激活。
   *
   * @permission ohos.permission.START_PROVISIONING_MESSAGE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AdminType } type - 激活的设备管理应用类型，仅支持ADMIN_TYPE_BYOD类型。
   * @param { common.Context } context - 管理应用的上下文信息。
   * @param { Record<string, string> } parameters - 自定义参数信息，其中Key值必须包含："activateId"，可以包含"customizedInfo"、"
   *     localDeactivationPolicy"。<br/>- activateId：项目激活ID。<br/>- customizedInfo：企业自定义信息。<br/>- localDeactivationPolicy：
   *     从API version 22开始支持，本地延迟取消激活时间（单位：小时）<!--RP1--><!--RP1End-->。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 15
   */
  function startAdminProvision(admin: Want, type: AdminType, context: common.Context, parameters: Record<string, string>): void;

  /**
   * 查询当前用户下的所有设备管理应用。使用Promise异步回调。
   *
   * @returns { Promise<Array<Want>> } 包含所有已激活的设备管理应用的Promise对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 15
   */
  function getAdmins(): Promise<Array<Want>>;

  /**
   * 设置设备管理应用的运行模式。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { RunningMode } mode - 运行模式。取值为DEFAULT表示默认用户运行模式，即应用在首次开机后的用户下运行。取值为MULTI_USER表示多用户运行模式，即应用能够在多个用户下同时运行。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 19
   */
  function setAdminRunningMode(admin: Want, mode: RunningMode): void;

  /**
   * [超级设备管理应用](docroot://mdm/mdm-kit-term.md#sda)通过该接口可以激活其他[普通设备管理应用](docroot://mdm/mdm-kit-term.md#da)，使用Promise异步回调。
   * 该接口仅支持超级设备管理应用调用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<void> } 无返回结果的Promise对象。当激活设备管理应用失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - Failed to activate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function enableDeviceAdmin(admin: Want): Promise<void>;

  /**
   * [超级设备管理应用](docroot://mdm/mdm-kit-term.md#sda)通过该接口可以解除激活其他[普通设备管理应用](docroot://mdm/mdm-kit-term.md#da)，使用Promise异步回
   * 调。该接口仅支持超级设备管理应用调用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<void> } 无返回结果的Promise对象。当解除激活设备管理应用失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function disableDeviceAdmin(admin: Want): Promise<void>;

  /**
   * 查询企业定制信息
   *
   * @returns { Promise<string> } returns the enterprise message tips.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getEnterpriseManagedTips(): Promise<string>;

  /**
   * 在企业设备中，MDM应用没有预置激活的场景下，MDM应用可以通过该接口实现自激活。该接口仅支持激活MDM应用自身，不支持激活其他MDM应用；支持的激活类型包括超级设备管理应用和普通设备管理应用。
   *
   * <!--RP1--><!--RP1End-->
   *
   * @permission ohos.permission.ENTERPRISE_ACTIVATE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } credential - 激活凭证。
   * @returns { Promise<void> } the promise returned by the enableSelfDeviceAdmin.
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - Failed to activate the administrator application of the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200017 - The self-activation credential of the enterprise device administrator
   *     is invalid.
   * @throws { BusinessError } 9200018 - This device is not an enterprise device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function enableSelfDeviceAdmin(admin: Want, credential: string): Promise<void>;
}

export default adminManager;