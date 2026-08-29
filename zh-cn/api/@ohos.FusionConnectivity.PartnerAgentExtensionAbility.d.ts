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
 * @file 支持设备状态通知的ExtensionAbility组件
 * @kit ConnectivityKit
 */
import type PartnerAgentExtensionContext from './@ohos.FusionConnectivity.PartnerAgentExtensionContext';
import type partnerAgent from './@ohos.FusionConnectivity.partnerAgent';
import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';

/**
 * 描述设备地址信息。
 *
 * @syscap SystemCapability.Communication.FusionConnectivity.Core
 * @stagemodelonly
 * @since 23 dynamic
 * @since 26.1.0 static
 */
type PartnerDeviceAddress = partnerAgent.PartnerDeviceAddress;

/**
 * 描述PartnerAgentExtensionAbility被销毁的原因。
 *
 * @syscap SystemCapability.Communication.FusionConnectivity.Core
 * @stagemodelonly
 * @since 23 dynamic
 * @since 26.1.0 static
 */
type PartnerAgentExtensionAbilityDestroyReason = partnerAgent.PartnerAgentExtensionAbilityDestroyReason;

/**
 * PartnerAgentExtensionAbility提供设备发现与扩展能力销毁的通知功能，本能力继承自
 * [ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}，需要应用继承实现。
 *
 * @syscap SystemCapability.Communication.FusionConnectivity.Core
 * @stagemodelonly
 * @since 23 dynamic
 * @since 26.1.0 static
 */
export default class PartnerAgentExtensionAbility extends ExtensionAbility {

  /**
   * PartnerAgentExtensionAbility的上下文。
   *
   * @syscap SystemCapability.Communication.FusionConnectivity.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  context: PartnerAgentExtensionContext;

  /**
   * 外设互通扩展能力被销毁时触发的方法回调。
   *
   * @param { PartnerAgentExtensionAbilityDestroyReason } reason - 通知销毁该外设互通扩展能力的原因。不同枚举值代表不同的销毁场景，应用可根据不同的销毁原因执行相应的资源释放
   *     或状态保存逻辑，枚举值的具体含义请参考
   *     [PartnerAgentExtensionAbilityDestroyReason]{@link @ohos.FusionConnectivity.partnerAgent:partnerAgent.PartnerAgentExtensionAbilityDestroyReason}
   *     。
   * @syscap SystemCapability.Communication.FusionConnectivity.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  onDestroyWithReason(reason: PartnerAgentExtensionAbilityDestroyReason): void;

  /**
   * 当已注册的设备被发现时，系统会调用此回调方法。
   *
   * @param { PartnerDeviceAddress } deviceAddress 应用注册的设备地址信息。
   *     应用需在PartnerDeviceAddress类型中设置bluetoothAddress选项。
   * @syscap SystemCapability.Communication.FusionConnectivity.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  onDeviceDiscovered(deviceAddress: PartnerDeviceAddress): void;
}
