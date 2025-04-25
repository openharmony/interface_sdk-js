/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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


import { CommonMethod, UICommonMethod, AttributeModifier } from "./common";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * Declare the StepperOptionalIndex.
 *
 * @interface StepperOptionalIndex
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface StepperOptionalIndex {
    /**
     * Get stepper index.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    index?: number;
}
export declare interface StepperAttribute extends CommonMethod {
    /**
     * Callback when the finish label is clicked.
     *
     * @param { function } callback
     * @returns { StepperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onFinish(callback: (() => void) | undefined): this;
    /**
     * Callback when the skip label is clicked.
     *
     * @param { function } callback
     * @returns { StepperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onSkip(callback: (() => void) | undefined): this;
    /**
     * Callback when the change label is clicked.
     *
     * @param { function } callback
     * @returns { StepperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onChange(callback: ((prevIndex: number, index: number) => void) | undefined): this;
    /**
     * Callback when the next label is clicked.
     *
     * @param { function } callback
     * @returns { StepperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onNext(callback: ((index: number, pendingIndex: number) => void) | undefined): this;
    /**
     * Callback when the previous label is clicked.
     *
     * @param { function } callback
     * @returns { StepperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onPrevious(callback: ((index: number, pendingIndex: number) => void) | undefined): this;
    attributeModifier(modifier: AttributeModifier<StepperAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIStepperAttribute extends UICommonMethod {
    /**
     * Callback when the finish label is clicked.
     *
     * @param { function } callback
     * @returns { StepperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onFinish(callback: (() => void) | undefined): this;
    /**
     * Callback when the skip label is clicked.
     *
     * @param { function } callback
     * @returns { StepperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onSkip(callback: (() => void) | undefined): this;
    /**
     * Callback when the change label is clicked.
     *
     * @param { function } callback
     * @returns { StepperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onChange(callback: ((prevIndex: number, index: number) => void) | undefined): this;
    /**
     * Callback when the next label is clicked.
     *
     * @param { function } callback
     * @returns { StepperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onNext(callback: ((index: number, pendingIndex: number) => void) | undefined): this;
    /**
     * Callback when the previous label is clicked.
     *
     * @param { function } callback
     * @returns { StepperAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onPrevious(callback: ((index: number, pendingIndex: number) => void) | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<StepperAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function Stepper(
    value?: StepperOptionalIndex, 
    @memo
    content_?: () => void,
): UIStepperAttribute