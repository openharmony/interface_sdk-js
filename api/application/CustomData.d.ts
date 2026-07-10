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
 * When starting a modal page, you can transfer custom data to the autofill service through
 * [reloadInModal]{@link AutoFillExtensionContext:AutoFillExtensionContext.reloadInModal} and obtain the data through
 * [onFillRequest]{@link ./../@ohos.app.ability.AutoFillExtensionAbility:AutoFillExtensionAbility.onFillRequest} of the
 * service.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 13 dynamic
 * @since 23 static
 */
export default interface CustomData {
  /**
   * Custom data transferred for starting the modal page. The data is of the Record type.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 13 dynamic
   */
  data: Record<string, Object>;

  /**
   * User defined data. When the modal window of AutoFillExtension needs to be raised again,
   * pass this parameter to the application framework.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  data: Record<string, RecordData>;
  }