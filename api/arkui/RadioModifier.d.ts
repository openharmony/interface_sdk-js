/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

/*** if arkts 1.2 */
import { AttributeModifier } from '../@internal/component/ets/common'
import { RadioAttribute } from '../@internal/component/ets/radio'
import { Callback } from '../@ohos.base'
/*** endif */

/**
 * Defines Radio Modifier
 *
 * @extends RadioAttribute
 * @implements AttributeModifier<RadioAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
*/
export declare class RadioModifier extends RadioAttribute implements AttributeModifier<RadioAttribute> {

  /**
   * Defines the normal update attribute function.
   * 
   * @param { RadioAttribute } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  applyNormalAttribute?(instance: RadioAttribute): void;
}

/**
 * Defines Radio Modifier
 *
 * @extends RadioAttribute
 * @implements AttributeModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export declare class RadioModifier extends RadioAttribute implements AttributeModifier<RadioAttribute> {

  /**
   * Defines the normal update attribute function.
   * 
   * @type { ?Callback<RadioAttribute> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 20
   * @arkts 1.2
   */
  applyNormalAttribute?: Callback<RadioAttribute>;
}