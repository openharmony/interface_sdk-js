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

/// <reference path="../../component/common.d.ts" />
/// <reference path="../../component/rating.d.ts" />

/**
 * Defines Rating Modifier
 *
 * @extends RatingAttribute
 * @implements AttributeModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 12
*/
export declare class RatingModifier extends RatingAttribute implements AttributeModifier<RatingAttribute> {

  /**
   * Defines the normal update attribute function.
   * 
   * @param { RatingAttribute } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  applyNormalAttribute?(instance: RatingAttribute): void;
}