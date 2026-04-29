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
 * 拉起模态页面时，开发者可通过[reloadInModal]{@link AutoFillExtensionContext:AutoFillExtensionContext.reloadInModal}接口将自定义数据传递给自动填充服
 * 务，并可通过自动填充服务的
 * [onFillRequest]{@link ./../@ohos.app.ability.AutoFillExtensionAbility:AutoFillExtensionAbility.onFillRequest}获取到该数据。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 13 dynamic
 * @since 23 static
 */
export default interface CustomData {
  /**
   * 拉起模态页面时传递的自定义数据，该数据为Record类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   */
  data: Record<string, Object>;

  /**
   * 拉起模态页面时传递的自定义数据，该数据为Record类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  data: Record<string, RecordData>;
  }