/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit AbilityKit
 */

import AbilityConstant from './@ohos.app.ability.AbilityConstant';
import type Want from './@ohos.app.ability.Want';
import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';
import type UIExtensionContentSession from './@ohos.app.ability.UIExtensionContentSession';
import type UIExtensionContext from './application/UIExtensionContext';

/**
 * UIExtensionAbility组件是带界面的ExtensionAbility组件，继承自
 * [ExtensionAbility]{@link ./@ohos.app.ability.ExtensionAbility:ExtensionAbility}，提供了组件创建、销毁、前后台切换等基础生命周期。和UIAbility组件
 * 不同，UIExtensionAbility组件不会作为单独的任务在任务视图中体现。UIExtensionAbility组件被宿主窗口启动，该组件的前后台切换状态、以及是否可见均跟随宿主窗口。
 * 开发者不可以直接继承UIExtensionAbility组件，但可以根据实际业务场景选择使用继承自UIExtensionAbility组件的其他组件。例如，开发者处理其他应用分享的数据时，可以使用
 * [ShareExtensionAbility组件]{@link ./@ohos.app.ability.ShareExtensionAbility:ShareExtensionAbility}；开发者提供卡片编辑功能时，可以使用
 * [FormEditExtensionAbility组件]{@link ./@ohos.app.form.FormEditExtensionAbility:FormEditExtensionAbility}。
 * 各类Ability组件的继承关系详见[继承关系说明](docroot://reference/apis-ability-kit/js-apis-app-ability-ability.md#ability的继承关系说明)。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 10 dynamic
 * @since 23 static
 */
declare class UIExtensionAbility extends ExtensionAbility {
  /**
   * UIExtensionAbility组件的上下文。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  context: UIExtensionContext;

  /**
   * 当UIExtensionAbility组件实例完成创建时，系统会触发该回调。开发者可在该回调中执行初始化逻辑（如定义变量、加载资源等）。
   *
   * @param { AbilityConstant.LaunchParam } launchParam - 应用启动参数，包含应用启动原因、应用上次退出原因等。 [since 12]
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  onCreate(launchParam: AbilityConstant.LaunchParam): void;

  /**
   * 当[UIExtensionContentSession]{@link ./@ohos.app.ability.UIExtensionContentSession}实例创建完成后，系统会触发该回调。开发者可在该回调中通过
   * UIExtensionContentSession实例加载页面。
   *
   * @param { Want } want - 调用方拉起该UIExtensionAbility组件时传递的数据。
   * @param { UIExtensionContentSession } session - UIExtensionContentSession实例对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  onSessionCreate(want: Want, session: UIExtensionContentSession): void;

  /**
   * 当UIExtensionContentSession实例销毁后，系统触发该回调。该回调用于通知开发者UIExtensionContentSession实例已被销毁，不能再继续使用。
   *
   * @param { UIExtensionContentSession } session - UIExtensionContentSession实例对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  onSessionDestroy(session: UIExtensionContentSession): void;

  /**
   * 当UIExtensionAbility组件首次启动到前台或者从后台转入到前台时，系统触发该回调。开发者可在该回调中实现UI可见时的资源申请操作。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  onForeground(): void;

  /**
   * 当UIExtensionAbility组件从前台转入到后台时，系统触发该回调。开发者可在该回调中实现UI不可见时的资源释放操作。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  onBackground(): void;

  /**
   * 当UIExtensionAbility组件被销毁时，系统触发该回调。开发者可以在该生命周期中执行资源清理、数据保存等相关操作。使用同步回调或Promise异步回调。
   * 在执行完onDestroy生命周期回调后，应用可能会退出，从而可能导致onDestroy中的异步函数未能正确执行，比如异步写入数据库。推荐使用Promise异步回调，避免因应用退出导致onDestroy中的异步函数（比如异步写入数
   * 据库）未能正确执行。
   *
   * @returns { void | Promise<void> } No return value or a Promise object that returns no value.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 10 dynamic
   */
  onDestroy(): void | Promise<void>;

  /**
   * UIExtensionAbility生命周期回调，在销毁时回调，执行资源清理等操作。
   * 在执行完onDestroy生命周期回调后，应用可能会退出，从而可能导致onDestroy中的异步函数未能正确执行，比如异步写入数据库。可以使用异步生命周期，以确保异步onDestroy完成后再继续后续的生命周期。
   *
   * @returns { Promise<void> | undefined } the promise returned by the function.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onDestroy(): Promise<void> | undefined;
}

export default UIExtensionAbility;