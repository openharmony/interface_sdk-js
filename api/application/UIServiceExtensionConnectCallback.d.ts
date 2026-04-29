/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

/*** if arkts static */
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * UIServiceExtensionConnectCallback provides callbacks for the connection to a UIServiceExtensionAbility.
 *
 * > **NOTE**
 * >
 * > - The APIs of this module must be used in the main thread, but not in child threads such as Worker and TaskPool.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 14 dynamic
 * @since 23 static
 */
export default interface UIServiceExtensionConnectCallback {
  /**
   * Called to receive data when a connection to the UIServiceExtensionAbility is established.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @param { Record<string, Object> } data - Data about the UIServiceExtensionAbility connection.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   */
  onData(data: Record<string, Object>): void;

  /**
   * Called back when data is sent.
   *
   * @param { Record<string, RecordData> } data - Indicates the received data.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onData(data: Record<string, RecordData>): void;

  /**
   * Called when the connection to the UIServiceExtensionAbility is interrupted.
   *
   * > **NOTE**
   * >
   * > For details about the startup rules for the components in the stage model, see
   * > [Component Startup Rules (Stage Model)](docroot://application-models/component-startup-rules.md).
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  onDisconnect(): void;
}