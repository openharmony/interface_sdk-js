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
import { MarqueeAttribute } from './component/marquee'
/*** endif */
/*** if arkts 1.2 */
/**
 * Declare the apply normal status function.
 *
 * @typedef { function } MarqueeApplyNormalFunction
 * @param { MarqueeAttribute } marqueeAttribute - The attribute of component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type MarqueeApplyNormalFunction = (marqueeAttribute: MarqueeAttribute) => void;
/*** endif */

/**
 * Defines Marquee Modifier
 *
 * @extends MarqueeAttribute
 * @implements AttributeModifier<MarqueeAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since arkts {'1.1':'12', '1.2':'20'}
 * @arkts 1.1&1.2
*/
export declare class MarqueeModifier extends MarqueeAttribute implements AttributeModifier<MarqueeAttribute> {

  /**
   * Defines the normal update attribute function.
   * 
   * @param { MarqueeAttribute } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  applyNormalAttribute?(instance: MarqueeAttribute): void;

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
  applyNormalAttribute?: MarqueeApplyNormalFunction;
  /*** endif */
}
