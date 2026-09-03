/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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
 *
 * @file LiveFormExtensionAbility
 * @kit FormKit
 */

import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';
import LiveFormExtensionContext from './application/LiveFormExtensionContext';
import type UIExtensionContentSession from './@ohos.app.ability.UIExtensionContentSession';
import formInfo from './@ohos.app.form.formInfo';

/**
 * 互动卡片信息。
 *
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 */
export interface LiveFormInfo {
  /**
   * 卡片id。
   *
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  formId: string;

  /**
   * 卡片位置和大小信息。
   *
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  rect: formInfo.Rect;

  /**
   * 卡片圆角半径信息。取值大于等于0，单位vp。
   *
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  borderRadius: double;
}

/**
 * 互动卡片扩展类，用于实现互动卡片的提供方功能。包含互动卡片提供方接收创建和销毁互动卡片的通知接口，开发者可在这些回调中实现卡片的初始化、数据绑定、资源清理等逻辑。
 * [onLiveFormCreate]{@link LiveFormExtensionAbility#onLiveFormCreate}在用户切换互动卡片状态为激活态时触发，用于初始化和数据绑定；
 * [onLiveFormDestroy]{@link LiveFormExtensionAbility#onLiveFormDestroy}在用户切换互动卡片状态为非激活态时触发，用于资源清理。两者形成完整的生命周期管理，应确保在
 * create中分配的资源在destroy中正确释放。
 *
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 */
declare class LiveFormExtensionAbility extends ExtensionAbility {
  /**
   * LiveFormExtensionAbility的上下文环境，继承自[ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}。
   *
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   */
  context: LiveFormExtensionContext;

  /**
   * Context of the **LiveFormExtensionAbility**. This context is inherited from 
   * [ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}.
   *
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 23 static
   */
  liveFormContext: LiveFormExtensionContext;

  /**
   * LiveFormExtensionAbility实例创建完成的回调。当用户切换到互动卡片激活态时，系统会自动调用此回调，开发者可在此回调中进行卡片初始化、数据绑定等操作。
   * 
   * - 与onLiveFormDestroy()方法成对使用，构成完整的互动卡片生命周期。
   * - 当互动卡片切换为非激活态时，系统会自动调用onLiveFormDestroy()进行资源清理。
   * - 开发者应确保在onLiveFormCreate中申请的资源在onLiveFormDestroy中正确释放，避免内存泄漏。
   *
   * @param { LiveFormInfo } liveFormInfo - 互动卡片信息，用于标识处于激活态的互动卡片，包括卡片id等信息。
   * @param { UIExtensionContentSession } session - LiveFormExtensionAbility的界面会话对象，用于管理与卡片的交互会话。
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  onLiveFormCreate(liveFormInfo: LiveFormInfo, session: UIExtensionContentSession): void;

  /**
   * LiveFormExtensionAbility生命周期回调，在销毁时回调，执行资源清理等操作。
   *
   * @param { LiveFormInfo } liveFormInfo - 互动卡片信息，用于标识处于非激活态的互动卡片，包括卡片id等信息。
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  onLiveFormDestroy(liveFormInfo: LiveFormInfo): void;
}
export default LiveFormExtensionAbility;