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
 * 创建AbilityComponent。
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
   * 创建AbilityComponent。当AbilityComponent被使用时调用。
   *
   * @param { object } value
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
 * 定义AbilityComponent的属性函数。
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
   * AbilityComponent环境启动完成时的回调，之后可使用AbilityComponent的方法。
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
   * AbilityComponent环境销毁时的回调。
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
 * 独立显示Ability的容器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9 dynamiconly
 * @deprecated since 10
 * @useinstead UIExtensionComponent
 * @noninterop
 */
declare const AbilityComponent: AbilityComponentInterface;

/**
 * 定义AbilityComponent组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9 dynamiconly
 * @deprecated since 10
 * @useinstead UIExtensionComponentInstance
 * @noninterop
 */
declare const AbilityComponentInstance: AbilityComponentAttribute;
