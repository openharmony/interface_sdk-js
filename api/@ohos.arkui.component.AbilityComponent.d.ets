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
 * @file
 * @kit ArkUI
 */

import Want from './@ohos.app.ability.Want';
import { CommonMethod } from './@ohos.arkui.component.Common';


export interface AbilityOptions {
  want: Want;
}
/**
 * Provide an interface for the ability component.
 *
 * @interface AbilityComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9
 * @deprecated since 10
 * @useinstead UIExtensionComponentInterface
 */
export type AbilityComponentInterface = (value: AbilityOptions)=> AbilityComponentAttribute;

/**
 * Define the attribute functions of ability component.
 *
 * @extends CommonMethod<AbilityComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9
 * @deprecated since 10
 * @useinstead UIExtensionComponentAttribute
 */
export declare class AbilityComponentAttribute extends CommonMethod<AbilityComponentAttribute> {
  /**
   * Called when the component is connected to ability.
   *
   * @param { function } callback - A callback instance used when connected.
   * @returns { AbilityComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   * @deprecated since 10
   * @useinstead UIExtensionComponent#onRemoteReady
   */
  onConnect(callback: () => void): AbilityComponentAttribute;
  /**
   * Called when the component is disconnected.
   *
   * @param { function } callback - A callback instance used when disconnected.
   * @returns { AbilityComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9
   * @deprecated since 10
   * @useinstead UIExtensionComponent#onRelease
   */
  onDisconnect(callback: () => void): AbilityComponentAttribute;
}

/**
 * Defines AbilityComponent Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @deprecated since 10
 * @useinstead UIExtensionComponent
 */
export declare const AbilityComponent: AbilityComponentInterface;

/**
 * Defines AbilityComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @deprecated since 10
 * @useinstead UIExtensionComponentInstance
 */
export declare const AbilityComponentInstance: AbilityComponentAttribute;
