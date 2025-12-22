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

import { Bindable, CommonMethod, AttributeModifier } from './common';
import { ComponentBuilder, CustomBuilder } from './builder';

/**
 * Declare the StepperOptions.
 *
 * @interface StepperOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface StepperOptions {
  /**
   * Set the stepper index.
   *
   * @type { ?(int | Bindable<int>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  index?: int | Bindable<int>;
}

/**
 * Defines the stepper attribute functions
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface StepperAttribute extends CommonMethod {
  /**
   * Callback when the finish label is clicked.
   *
   * @param { function | undefined } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default onFinish(callback: (() => void) | undefined): this;

  /**
   * Callback when the skip label is clicked.
   *
   * @param { function | undefined } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default onSkip(callback: (() => void) | undefined): this;

  /**
   * Callback when the change label is clicked.
   *
   * @param { function | undefined } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default onChange(callback: ((prevIndex: int, index: int) => void) | undefined): this;

  /**
   * Callback when the next label is clicked.
   *
   * @param { function | undefined } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default onNext(callback: ((index: int, pendingIndex: int) => void) | undefined): this;

  /**
   * Callback when the previous label is clicked.
   *
   * @param { function | undefined } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default onPrevious(callback: ((index: int, pendingIndex: int) => void) | undefined): this;

  /**
   * Set the attribute modifier of stepper.
   *
   * @param { AttributeModifier<StepperAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   *     The attribute modifier of stepper.
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<StepperAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines Stepper Component
 *
 * @param { StepperOptions } [value] - Stepper constructor options
 * @param { CustomBuilder } [content_] - container
 * @returns { StepperAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
@ComponentBuilder
export declare function Stepper(
  value?: StepperOptions,
  content_?: CustomBuilder
): StepperAttribute
