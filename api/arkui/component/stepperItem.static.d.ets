'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import { CommonMethod, AttributeModifier } from './common';
import { ComponentBuilder, CustomBuilder } from './builder';

/**
 * ItemState
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum ItemState {
  /**
   * Default State
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Normal,

  /**
   * Disabled State
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Disabled,

  /**
   * Waiting State
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Waiting,

  /**
   * Skip State
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  Skip
}

/**
 * Defines the stepper item attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface StepperItemAttribute extends CommonMethod {
  /**
   * Called when the value of stepperItem prevLabel is set
   *
   * @param { string | undefined } value
   * @returns { StepperItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default prevLabel(value: string | undefined): this;

  /**
   * Called when the value of stepperItem nextLabel is set
   *
   * @param { string | undefined } value
   * @returns { StepperItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default nextLabel(value: string | undefined): this;

  /**
   * Called when the value of stepperItem status is set
   *
   * @param { ItemState | undefined } value
   * @returns { StepperItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default status(value?: ItemState | undefined): this;

  /**
   * Set the attribute modifier of stepperItem.
   *
   * @param { AttributeModifier<StepperItemAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   *     The attribute modifier of stepperItem.
   * @returns { StepperItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<StepperItemAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines StepperItem Component
 *
 * @param { CustomBuilder } [content_] - container
 * @returns { StepperItemAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function StepperItem(

  content_?: CustomBuilder
): StepperItemAttribute
