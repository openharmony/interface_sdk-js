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


import { ResourceColor, Length } from "./units";
import { LengthMetrics } from '../Graphics';
import { CommonMethod, Callback, Optional, UICommonMethod, AttributeModifier } from "./common";
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
/**
 * The challenge result based on input pattern for control pattern lock component.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare enum PatternLockChallengeResult {
    /**
     * The challenge result is correct.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    CORRECT = 1,
    /**
     * The challenge result is wrong.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    WRONG = 2
}
/**
 * Defines the options of active circle style.
 *
 * @interface CircleStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare interface CircleStyleOptions {
    /**
     * The circle color when cell is active state.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    color?: ResourceColor;
    /**
     * The circle radius when cell is active state.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    radius?: LengthMetrics;
    /**
     * Enable the wave effect when cell is active.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableWaveEffect?: boolean;
    /**
     * Enable the activity circle style displayed in the foreground.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    enableForeground?: boolean;
}
/**
 * Provides methods for control pattern lock component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export declare class PatternLockController {
    /**
     * constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    constructor();
    /**
     * Reset pattern lock.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    reset(): void;
    /**
     * Set challenge result.
     * @param { PatternLockChallengeResult } result - The challenge result based on input pattern.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    setChallengeResult(result: PatternLockChallengeResult): void;
}
export declare interface PatternLockAttribute extends CommonMethod {
    /**
     * The square side length of pattern lock component.
     *
     * @param { Length } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    sideLength(value: Length | undefined): this;
    /**
     * Circle radius.
     *
     * @param { Length } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    circleRadius(value: Length | undefined): this;
    /**
     * The background color.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundColor(value: ResourceColor | undefined): this;
    /**
     * Regular color.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    regularColor(value: ResourceColor | undefined): this;
    /**
     * The color when cell is selected.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectedColor(value: ResourceColor | undefined): this;
    /**
     * The color when cell is active state.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    activeColor(value: ResourceColor | undefined): this;
    /**
     * The path line color.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    pathColor(value: ResourceColor | undefined): this;
    /**
     * The path line stroke width.
     *
     * @param { number | string } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    pathStrokeWidth(value: number | string | undefined): this;
    /**
     * Called when the pattern input completed.
     *
     * @param { function } callback
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onPatternComplete(callback: ((input: Array<number>) => void) | undefined): this;
    /**
     * Called when judging whether the input state can be reset by touch pattern lock.
     *
     * @param { boolean } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    autoReset(value: boolean | undefined): this;
    /**
     * Called when connecting to a grid dot.
     * @param { import('../api/@ohos.base').Callback<number> } callback - A callback instance used when connection to a grid dot.
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDotConnect(callback: Callback<number> | undefined): this;
    /**
     * The activate circle style.
     *
     * @param { Optional<CircleStyleOptions> } options - the circle style setting options
     * @returns { PatternLockAttribute } PatternLockAttribute
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    activateCircleStyle(options: CircleStyleOptions | undefined): this;
    /**
     * Skip unselected point that the path passes through.
     *
     * @param { boolean } skipped
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    skipUnselectedPoint(skipped: boolean | undefined): this;
    attributeModifier(modifier: AttributeModifier<PatternLockAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
export declare interface UIPatternLockAttribute extends UICommonMethod {
    /**
     * The square side length of pattern lock component.
     *
     * @param { Length } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    sideLength(value: Length | undefined): this;
    /**
     * Circle radius.
     *
     * @param { Length } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    circleRadius(value: Length | undefined): this;
    /**
     * The background color.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    backgroundColor(value: ResourceColor | undefined): this;
    /**
     * Regular color.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    regularColor(value: ResourceColor | undefined): this;
    /**
     * The color when cell is selected.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    selectedColor(value: ResourceColor | undefined): this;
    /**
     * The color when cell is active state.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    activeColor(value: ResourceColor | undefined): this;
    /**
     * The path line color.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    pathColor(value: ResourceColor | undefined): this;
    /**
     * The path line stroke width.
     *
     * @param { number | string } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    pathStrokeWidth(value: number | string | undefined): this;
    /**
     * Called when the pattern input completed.
     *
     * @param { function } callback
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onPatternComplete(callback: ((input: Array<number>) => void) | undefined): this;
    /**
     * Called when judging whether the input state can be reset by touch pattern lock.
     *
     * @param { boolean } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    autoReset(value: boolean | undefined): this;
    /**
     * Called when connecting to a grid dot.
     * @param { import('../api/@ohos.base').Callback<number> } callback - A callback instance used when connection to a grid dot.
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    onDotConnect(callback: Callback<number> | undefined): this;
    /**
     * The activate circle style.
     *
     * @param { Optional<CircleStyleOptions> } options - the circle style setting options
     * @returns { PatternLockAttribute } PatternLockAttribute
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    activateCircleStyle(options: CircleStyleOptions | undefined): this;
    /**
     * Skip unselected point that the path passes through.
     *
     * @param { boolean } skipped
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    @memo
    skipUnselectedPoint(skipped: boolean | undefined): this;
    @memo
    attributeModifier(modifier: AttributeModifier<PatternLockAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

@memo
@ComponentBuilder
export declare function PatternLock(
    controller?: PatternLockController, 
    @memo
    content_?: () => void,
): UIPatternLockAttribute