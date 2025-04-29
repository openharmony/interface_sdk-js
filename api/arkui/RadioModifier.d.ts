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
import { AttributeModifier } from './component/common'
import { RadioAttribute } from './component/Radio'
/*** endif */

/*** if arkts 1.2 */
/**
 * Declare the apply normal status function.
 *
 * @typedef { function } RadioApplyNormalFunction
 * @param { RadioAttribute } RadioAttribute - The attribute of component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type RadioApplyNormalFunction = (RadioAttribute: RadioAttribute) => void;

/**
 * Defines Radio Modifier
 *
 * @extends RadioAttribute
 * @implements AttributeModifier<RadioAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 20
 * @arkts 1.2
*/
export declare class RadioAttribute extends RadioAttribute implements AttributeModifier<RadioAttribute> {
  /**
   * Defines the normal update attribute function.
   * 
   * @type {undefined | ((instance: RadioAttribute) => void)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  applyNormalAttribute: undefined | ((instance: RadioAttribute) => void);
  /**
   * Defines the pressed update attribute function.
   * 
   * @type {undefined | ((instance: RadioAttribute) => void)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  applyPressedAttribute: undefined | ((instance: RadioAttribute) => void);
  /**
   * Defines the focused update attribute function.
   * 
   * @type {undefined | ((instance: RadioAttribute) => void)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  applyFocusedAttribute: undefined | ((instance: RadioAttribute) => void);
  /**
   * Defines the disabled update attribute function.
   * 
   * @type {undefined | ((instance: RadioAttribute) => void)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  applyDisabledAttribute: undefined | ((instance: RadioAttribute) => void);
  /**
   * Defines the selected update attribute function.
   * 
   * @type {undefined | ((instance: RadioAttribute) => void)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  applySelectedAttribute: undefined | ((instance: RadioAttribute) => void);
}
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