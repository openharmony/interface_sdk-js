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
import { TextAreaAttribute } from './component/textArea'
/*** endif */

/*** if arkts 1.2 */
/**
 * Declare the apply normal status function.
 *
 * @typedef { function } TextAreaApplyNormalFunction
 * @param { TextAreaAttribute } textAreaAttribute - The attribute of component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type TextAreaApplyNormalFunction = (textAreaAttribute: TextAreaAttribute) => void;
/*** endif */


/**
 * Defines TextArea Modifier
 *
 * @extends TextAreaAttribute
 * @implements AttributeModifier<TextAreaAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
*/
export declare class TextAreaModifier extends TextAreaAttribute implements AttributeModifier<TextAreaAttribute> {

  /**
   * Defines the normal update attribute function.
   * 
   * @param { TextAreaAttribute } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  applyNormalAttribute?(instance: TextAreaAttribute): void;

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
  applyNormalAttribute?: TextAreaApplyNormalFunction;
  /*** endif */
}
