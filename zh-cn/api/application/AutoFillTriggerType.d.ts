/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

/**
 * 自动填充服务的拉起类型，通过用户手势操作来选择不同的自动填充服务拉起方式。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic&static
 */
export enum AutoFillTriggerType {
  /**
   * 自动拉起自动填充服务，可通过[TextInput]{@link @internal/component/ets/text_input}控件获焦后自动拉起。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  AUTO_REQUEST = 0,

  /**
   * 手动拉起自动填充服务，可通过长按任意输入控件弹出二级菜单，选择自动填充，拉起自动填充服务。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  MANUAL_REQUEST = 1,

  /**
   * 粘贴拉起自动填充服务，可通过在密码保险箱内长按用户名或密码选择安全复制后，再长按任意输入控件弹出二级菜单，选择粘贴，拉起自动填充服务。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  PASTE_REQUEST = 2,
}