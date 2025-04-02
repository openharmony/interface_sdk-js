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
import { TextInputAttribute } from './component/textInput'
/*** endif */

/*** if arkts 1.2 */
/**
 * Declare the apply normal status function.
 *
 * @typedef { function } TextInputApplyNormalFunction
 * @param { TextInputAttribute } textInputAttribute - The attribute of component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type TextInputApplyNormalFunction = (textInputAttribute: TextInputAttribute) => void;
/*** endif */


/**
 * Defines TextInput Modifier
 *
 * @extends TextInputAttribute
 * @implements AttributeModifier<TextInputAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
*/
export declare class TextInputModifier extends TextInputAttribute implements AttributeModifier<TextInputAttribute> {

  /**
   * Defines the normal update attribute function.
   * 
   * @param { TextInputAttribute } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  applyNormalAttribute?(instance: TextInputAttribute): void;

  /*** if arkts 1.2 */
  /**
   * Defines the normal update attribute function.
   * 
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  applyNormalAttribute?: TextInputApplyNormalFunction;
  /*** endif */
}
