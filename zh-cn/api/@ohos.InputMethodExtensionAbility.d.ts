/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * ###### 约束限制
 * <br>
 * <br>为保障系统安全性和稳定性，防止InputMethodExtensionAbility滥用系统资源，系统对其能力进行管控，不支持部分模块的引用，详情请参考
 * [附录](docroot://reference/apis-ime-kit/js-apis-inputmethod-extension-ability.md#附录)。
 * <br>
 * <br>另外输入法应用区分基础模式和完整体验模式，关于基础模式和完整体验模式说明如下：
 * <br>
 * <br>**基础模式介绍：**
 * <br>基础模式下，输入法扩展（InputMethodExtensionAbility）进程无法拉起其他UIAbility或ExtensionAbility。
 * <br>
 * <br>基础模式下，输入法扩展会受到系统管控，不能使用涉及访问或泄露用户个人数据的各种接口，同时无法将数据传递出进程。管控功能包括但不限于：网络、短信、电话、麦克风、定位、相机、蓝牙、壁纸、支付、日历、游戏、扬声器、Wi-Fi、剪切板、多媒体
 * 、联系人、公共事件、系统账号、健康数据、地图服务、推送服务、融合搜索、共享内存、分布式特性、广告设备标识、振动等。
 * <br>
 * <br>基础模式下，输入法扩展可以使用基础输入功能必要的系统能力，例如，IME Kit、ArkUI、窗口、图形、屏幕管理等。
 * <br>
 *<br> 基础模式下，输入法扩展对共享沙箱只读，对输入法扩展独立沙箱可读写；应用主入口可以对共享沙箱及其独立沙箱读写。
 * <br>
 * <br>**完整体验模式介绍：**
 * <br>
 * <br>完整体验模式下，输入法扩展不受基础模式相关限制，例如可以拉起其他UIAbility或ExtensionAbility、可以调用访问用户数据的接口等。
 * <br>
 * <br>完整体验模式下，输入法扩展可以对共享沙箱读写。
 * <br>
 * <br>###### 附录
 * <br>
 * <br>InputMethodExtensionAbility不支持以下模块的引用。<br>
 * | Kit | 模块 |
 * | -------- | -------- |
 * | Ability Kit |  [@ohos.ability.featureAbility (FeatureAbility模块)]{@link @ohos.ability.featureAbility:featureAbility}</br>
 * [@ohos.ability.particleAbility (ParticleAbility模块)]{@link @ohos.ability.particleAbility:particleAbility} |
 * | Background Tasks Kit |  
 * [@ohos.resourceschedule.backgroundTaskManager (后台任务管理)]{@link @ohos.resourceschedule.backgroundTaskManager:backgroundTaskManager}
 * </br>[@ohos.reminderAgentManager (后台代理提醒)]{@link @ohos.reminderAgentManager:reminderAgentManager}
 * </br> [@ohos.reminderAgent (后台代理提醒)]{@link @ohos.reminderAgent:reminderAgent} |
 * | Basic Services Kit | [@ohos.account.osAccount (系统账号管理)]{@link @ohos.account.osAccount:osAccount}
 * </br>[@ohos.account.distributedAccount (分布式账号管理)]{@link @ohos.account.distributedAccount:distributedAccount}
 * </br>[@ohos.wallpaper (壁纸)]{@link @ohos.wallpaper:wallpaper} |
 * | Connectivity Kit |  [@ohos.bluetooth (蓝牙)]{@link @ohos.bluetooth:bluetooth}
 * </br>[@ohos.bluetoothManager (蓝牙)]{@link @ohos.bluetoothManager:bluetoothManager}</br>[nfctech (标准NFC-Tag Nfc 技术)]{@link ./tag/nfctech}
 * </br>[@ohos.nfc.controller (标准NFC)]{@link @ohos.nfc.controller:nfcController}
 * </br>[@ohos.nfc.cardEmulation (标准NFC-cardEmulation)]{@link @ohos.nfc.cardEmulation:cardEmulation}
 * </br>[@ohos.connectedTag (有源标签)]{@link @ohos.connectedTag:connectedTag}</br>[@ohos.wifiext (WLAN扩展接口)]{@link @ohos.wifiext:wifiext}
 * </br>[@ohos.wifiManager (WLAN)]{@link @ohos.wifiManager:wifiManager}</br>[@ohos.wifiManagerExt (WLAN扩展接口)]{@link @ohos.wifiManagerExt:wifiManagerExt}
 * </br>[tagSession (标准NFC-Tag TagSession)]{@link ./tag/tagSession:TagSession}</br> |
 * | Location Kit | [@ohos.geolocation (位置服务)]{@link @ohos.geolocation:geolocation}
 * </br>[@ohos.geoLocationManager (位置服务)]{@link @ohos.geoLocationManager:geoLocationManager} |
 * | Telephony Kit | [@ohos.telephony.call (拨打电话)]{@link @ohos.telephony.call:call}</br>[@ohos.telephony.data (蜂窝数据)]{@link @ohos.telephony.data:data}
 * </br>[@ohos.telephony.observer (电话服务状态监听)]{@link @ohos.telephony.observer:observer}</br>[@ohos.telephony.radio (网络搜索)]{@link @ohos.telephony.radio:radio}
 * </br>[@ohos.telephony.sms (短信服务)]{@link @ohos.telephony.sms:sms}</br>[@ohos.telephony.sim (SIM卡管理)]{@link @ohos.telephony.sim:sim} |
 *
 * @file InputMethodExtensionAbility
 * @kit IMEKit
 */

 import Want from './@ohos.app.ability.Want';
 import type InputMethodExtensionContext from './@ohos.InputMethodExtensionContext';
 
 /**
  * @ohos.InputMethodExtensionAbility模块提供输入法ExtensionAbility（扩展能力基类）的基础类定义，是开发输入法应用的入口和生命周期管理框架。
  * <br>
  * <br>本模块是输入法ExtensionAbility的核心类模块，定义了`InputMethodExtensionAbility`类，作为输入法应用的Extension基类。开发者需继承该类并实现`onCreate`和`onDestroy`生命周期回调，
  * 系统在拉起和销毁输入法Extension时自动调用这些回调。
  * <br>
  * <br>本模块提供两大核心能力：1）通过`onCreate(want)`回调实现输入法应用的初始化——系统拉起输入法Extension时调用，开发者在此完成资源加载、面板创建等初始化工作；2）通过`onDestroy()`
  * 回调实现输入法应用的资源清理——系统销毁输入法Extension时调用，开发者在此释放资源。此外，通过`context`属性提供`InputMethodExtensionContext`上下文对象，供开发者在生命周期内执行销毁自身、
  * 拉起其他应用等上下文级操作。
  * <br>
  * <br>当开发输入法应用时必须使用本模块。开发者通过继承`InputMethodExtensionAbility` → 在module.json5中配置ExtensionAbility信息 → 系统拉起时触发`onCreate`（初始化） → 
  * 系统销毁或开发者主动调用`context.destroy()`时触发`onDestroy`（清理）。
  * <br>
  * <br> > **说明：**
  * <br> >
  * <br> > 本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
  * <br> >
  * <br> > `InputMethodExtensionAbility`仅定义了基础的`onCreate`和`onDestroy`两个生命周期回调。输入法的核心交互能力（如面板创建/销毁、键盘事件监听、客户端绑定等）
  * 需在`onCreate`回调中通过`@ohos.inputMethodEngine`模块获取`InputMethodAbility`对象来实现。`onCreate`是所有关键对象获取和面板创建的唯一入口，必须在该回调中完成初始化。
  * <br> >
  * <br> > `InputMethodExtensionAbility`的`context`属性类型为`InputMethodExtensionContext`（来自`@ohos.InputMethodExtensionContext`模块），
  * 属于关联关系——`InputMethodExtensionAbility`拥有`InputMethodExtensionContext`的上下文能力。
  * <br>
  * | Class | 说明 |
  * |---|---|
  * | InputMethodExtensionAbility | 输入法ExtensionAbility基类，提供输入法应用的生命周期管理框架。关键成员包括：`context`属性（`InputMethodExtensionContext`上下文对象）、
  * `onCreate(want)`方法（初始化回调）、`onDestroy()`方法（销毁回调）。开发者需继承此类并重写生命周期方法。 |
  *
  * @syscap SystemCapability.MiscServices.InputMethodFramework
  * @stagemodelonly
  * @since 9 dynamic
  * @since 23 static
  */
 declare class InputMethodExtensionAbility {
   /**
    * @brief InputMethodExtensionAbility的上下文环境，继承于ExtensionContext。
    *
    * @syscap SystemCapability.MiscServices.InputMethodFramework
    * @stagemodelonly
    * @since 9 dynamic
    * @since 23 static
    */
   context: InputMethodExtensionContext;
 
   /**
    * @brief 生命周期回调，在拉起输入法Extension时调用，用于初始化输入法应用。
    * <br>
    * <br>- 含义/功能：系统拉起输入法ExtensionAbility时触发的初始化回调。开发者在该回调中完成输入法应用的所有关键初始化工作，包括获取核心能力对象、创建输入法面板、订阅事件等。
    * <br>- 使用场景：当系统根据module.json5配置拉起输入法ExtensionAbility时自动触发。这是输入法应用初始化的唯一入口，所有关键对象的获取和面板创建必须在此回调中完成。
    * <br>- 使用后效果：回调执行完成后，输入法应用进入正常运行状态。系统将随后触发键盘显示/隐藏请求、客户端绑定等事件，输入法应用需在此之前完成初始化（如已订阅`on('inputStart')`事件、已创建面板等），
    * 否则后续事件可能无法正常响应。
    *
    * @param { Want } want - 当前Extension相关的Want类型信息，包括Ability名称、bundle名称等。
    * @syscap SystemCapability.MiscServices.InputMethodFramework
    * @stagemodelonly
    * @since 9 dynamic
    * @since 23 static
    */
   onCreate(want: Want): void;
 
   /**
    * @brief 生命周期回调，在销毁输入法应用时调用，用于资源清理。
    * <br>
    * <br>- 含义/功能：系统销毁输入法ExtensionAbility时触发的清理回调。开发者在该回调中释放面板、取消事件订阅等资源清理工作。
    * <br>-  使用场景：当系统主动销毁输入法ExtensionAbility（如系统回收资源、用户切换到其他输入法）或开发者主动调用`context.destroy()`触发销毁时自动触发。
    * 注意：`onDestroy`回调执行后，`context`将不可用，不应在回调中或回调后继续使用`context`对象。
    * <br>- 使用后效果：回调执行完成后，输入法ExtensionAbility进程终止，所有资源应已释放。调用后再进行其他操作将不起效。
    *
    * @syscap SystemCapability.MiscServices.InputMethodFramework
    * @stagemodelonly
    * @since 9 dynamic
    * @since 23 static
    */
   onDestroy(): void;
 }
 
 export default InputMethodExtensionAbility;