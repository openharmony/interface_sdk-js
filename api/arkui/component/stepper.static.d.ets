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
 * @arkts 1.2
 */

import { Bindable, CommonMethod, AttributeModifier } from './common';
import { memo, ComponentBuilder } from './../stateManagement/runtime';

/**
 * Declare the StepperOptions.
 *
 * @interface StepperOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface StepperOptions {
    /**
     * Set the stepper index.
     *
     * @type { ?(number | Bindable<number>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    index?: number | Bindable<number>;
}

/**
 * Defines the stepper attribute functions
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface StepperAttribute extends CommonMethod {
  /**
   * Callback when the finish label is clicked.
   *
   * @param { function | undefined } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  default onFinish(callback: (() => void) | undefined): this;

  /**
   * Callback when the skip label is clicked.
   *
   * @param { function | undefined } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  default onSkip(callback: (() => void) | undefined): this;

  /**
   * Callback when the change label is clicked.
   *
   * @param { function | undefined } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  default onChange(callback: ((prevIndex: number, index: number) => void) | undefined): this;

  /**
   * Callback when the next label is clicked.
   *
   * @param { function | undefined } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  default onNext(callback: ((index: number, pendingIndex: number) => void) | undefined): this;

  /**
   * Callback when the previous label is clicked.
   *
   * @param { function | undefined } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  default onPrevious(callback: ((index: number, pendingIndex: number) => void) | undefined): this;

  /**
   * Set the attribute modifier of stepper.
   *
   * @param { AttributeModifier<StepperAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   *     The attribute modifier of stepper.
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 20
   */
  default attributeModifier(modifier: AttributeModifier<StepperAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Stepper(
    value?: StepperOptions, 
    @memo
    content_?: () => void,
): StepperAttribute