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
 * 独立显示Ability的容器。
 * 
 * > **说明：**
 * >
 * > 从API version 10开始，该组件不再维护，推荐使用[UIExtensionComponent]{@link ./ui_extension_component}。
 * >
 * > 本模块为系统接口。
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
   * @param { object } value - 默认加载的Ability描述。
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
 * > **说明：**
 * >
 * > 从API version 10开始，该组件不再维护，推荐使用[UIExtensionComponent]{@link ./ui_extension_component}。
 * >
 * > 本模块为系统接口。
 * 
 * ###### 使用约束
 * 
 * AbilityComponent为独立层次渲染，不能在之上叠加其他显示内容。
 * 
 * AbilityComponent不支持处理输入事件，事件不经过当前Ability，直接分发给内部的Ability处理。
 * 
 * AbilityComponent需设置且只能设置width、height，且width、height不支持动态更新。
 * 
 * 被拉起的Ability必须继承[WindowExtension]{@link @ohos.application.WindowExtensionAbility}。
 * 
 * ###### 子组件
 * 
 * 无
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