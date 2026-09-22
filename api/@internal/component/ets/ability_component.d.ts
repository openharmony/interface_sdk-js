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

/**
 * **AbilityComponent** is a container for independently displaying an ability.
 *
 * > **NOTE**
 * >
 * > This component is deprecated since API version 10. You are advised to use
 * > [UIExtensionComponent]{@link ./ui_extension_component} instead.
 * >
 * > The APIs provided by this component are system APIs.
 *
 * @interface AbilityComponentInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamiconly
 * @deprecated since 10
 * @useinstead UIExtensionComponentInterface
 * @noninterop
 */
interface AbilityComponentInterface {
  /**
   * Construct the ability component.
   * Called when the ability component is used.
   *
   * @param { object } value - Description of the ability to be loaded by default.
   * @returns { AbilityComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead UIExtensionComponentInterface
   */
  (value: { want: import('../api/@ohos.app.ability.Want').default }): AbilityComponentAttribute;
}

/**
 * Define the attribute functions of ability component.
 *
 * @extends CommonMethod<AbilityComponentAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamiconly
 * @deprecated since 10
 * @useinstead UIExtensionComponentAttribute
 * @noninterop
 */
declare class AbilityComponentAttribute extends CommonMethod<AbilityComponentAttribute> {
  /**
   * Called when the **AbilityComponent** environment is started. After the callback, the methods of
   * **AbilityComponent** can be used.
   *
   * @param { function } callback - A callback instance used when connected.
   * @returns { AbilityComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead UIExtensionComponent#onRemoteReady
   */
  onConnect(callback: () => void): AbilityComponentAttribute;
  /**
   * Called when the **AbilityComponent** environment is destroyed.
   *
   * @param { function } callback - A callback instance used when disconnected.
   * @returns { AbilityComponentAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead UIExtensionComponent#onRelease
   */
  onDisconnect(callback: () => void): AbilityComponentAttribute;
}

/**
 * **AbilityComponent** is a container for independently displaying an ability.
 *
 * > **NOTE**
 * >
 * > This component is deprecated since API version 10. You are advised to use
 * > [UIExtensionComponent]{@link ./ui_extension_component} instead.
 * >
 * > The APIs provided by this component are system APIs.
 *
 * ###### Constraints
 *
 * **AbilityComponent** is rendered at an independent layer and cannot be overlaid by other display content.
 *
 * **AbilityComponent** does not support input event processing. Events are not routed through the current ability but
 * are instead distributed directly to the internal ability for processing.
 *
 * For **AbilityComponent**, only **width** and **height** must be set and can be set. Furthermore, they do not support
 * dynamic updates.
 *
 * The started ability must inherit from [WindowExtension]{@link @ohos.application.WindowExtensionAbility}.
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9 dynamiconly
 * @deprecated since 10
 * @useinstead UIExtensionComponent
 * @noninterop
 */
declare const AbilityComponent: AbilityComponentInterface;

/**
 * Defines AbilityComponent Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9 dynamiconly
 * @deprecated since 10
 * @useinstead UIExtensionComponentInstance
 * @noninterop
 */
declare const AbilityComponentInstance: AbilityComponentAttribute;
