'use static';
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
import { ResourceColor, Length } from "./units";
import { LengthMetrics } from '../Graphics';
import { CommonMethod, Callback, Optional } from './common';
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
import { AttributeModifier, CommonMethod } from "./common";

/**
 * The challenge result based on input pattern for control pattern lock component.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare enum PatternLockChallengeResult {
    /**
     * The challenge result is correct.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    CORRECT = 1,
    /**
     * The challenge result is wrong.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    WRONG = 2
}
/**
 * Defines the options of active circle style.
 *
 * @interface CircleStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface CircleStyleOptions {
    /**
     * The circle color when cell is active state.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    color?: ResourceColor;
    /**
     * The circle radius when cell is active state.
     *
     * @type { ?LengthMetrics }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    radius?: LengthMetrics;
    /**
     * Enable the wave effect when cell is active.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    enableWaveEffect?: boolean;
    /**
     * Enable the activity circle style displayed in the foreground.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    enableForeground?: boolean;
}
/**
 * Provides methods for control pattern lock component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare class PatternLockController {
    /**
     * A constructor used to create a PatternLockController instance.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    constructor();
    /**
     * Reset pattern lock.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    reset(): void;
    /**
     * Sets the authentication challenge result for the pattern password.
     * @param { PatternLockChallengeResult } result - Authentication challenge result of the pattern password.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    setChallengeResult(result: PatternLockChallengeResult): void;
}
/**
 * Defines the PatternLock component attributes.
 *
 * @extends CommonMethod
 * @interface PatternLockAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
export declare interface PatternLockAttribute extends CommonMethod {
    /**
     * Sets the width and height (same value) of the component.
     *
     * <p><strong>NOTE</strong>:
     * <br>If this attribute is set to 0 or a negative number, the component is not displayed.
     * </p>
     *
     * @param { Length | undefined } value - Width and height of the component, Default value is 288vp.
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    default sideLength(value: Length | undefined): this;
    /**
     * Sets the radius of the dots in a grid.
     *
     * <p><strong>NOTE</strong>:
     * <br>If this attribute is set to 0 or a negative value, the default value is used.
     * </p>
     *
     * @param { Length | undefined } value - Radius of the dots in a grid, Default value is 6vp.
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    default circleRadius(value: Length | undefined): this;
    /**
     * Sets the background color.
     *
     * @param { ResourceColor | undefined } value - Background color.
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    default backgroundColor(value: ResourceColor | undefined): this;
    /**
     * Sets the fill color of the grid dot in the unselected state.
     *
     * @param { ResourceColor | undefined } value - Fill color of the grid 
     *     dot in the unselected state, Default value is '#ff182431'.
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    default regularColor(value: ResourceColor | undefined): this;
    /**
     * Sets the fill color of the grid dot in the selected state.
     *
     * @param { ResourceColor | undefined } value - Fill color of the 
     *     grid dot in the selected state, Default value is '#ff182431'.
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    default selectedColor(value: ResourceColor | undefined): this;
    /**
     * Sets the fill color of the grid dot in the activated state, 
     *     which is when the dot is highlighted but not selected.
     *
     * @param { ResourceColor | undefined } value - Fill color of the grid dot 
     *     in the activated state, Default value is '#ff182431'.
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    default activeColor(value: ResourceColor | undefined): this;
    /**
     * Sets the path color.
     *
     * @param { ResourceColor | undefined } value - Path color, Default value is '#33182431'.
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    default pathColor(value: ResourceColor | undefined): this;
    /**
     * Sets the width of the path stroke.
     *
     * <p><strong>NOTE</strong>:
     * <br>If this attribute is set to **0** or a negative value, the path stroke is not displayed.
     * </p>
     *
     * @param { number | string | undefined } value - Width of the path stroke, Default value is 12vp.
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    default pathStrokeWidth(value: number | string | undefined): this;
    /**
     * Invoked when the pattern password input is complete.
     *
     * @param { function | undefined } callback
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    default onPatternComplete(callback: ((input: Array<number>) => void) | undefined): this;
    /**
     * Sets whether to allow the user to reset the component status (that is, clear the input) by touching the component
     * again after the input is complete.
     *
     * @param { boolean | undefined } value - Whether to allow the user to reset 
     *     the component status (that is, clear the input) by
     * touching the component again after the input is complete, Default value is true.
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    default autoReset(value: boolean | undefined): this;
    /**
     * Called when connecting to a grid dot.
     * @param {  Callback<number> | undefined } callback - A callback instance used when connection to a grid dot.
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    default onDotConnect(callback: Callback<number> | undefined): this;
    /**
     * Sets the background circle style for the dots in a grid when they are in the activated state.
     *
     * @param { CircleStyleOptions | undefined } options - Background circle style of the dots in the activated state.
     * @returns { PatternLockAttribute } PatternLockAttribute
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    default activateCircleStyle(options: CircleStyleOptions | undefined): this;
    /**
     * Sets whether unselected dots in the grid are automatically selected when the password path passes over them.
     *
     * @param { boolean } skipped - Whether unselected dots in the grid are automatically selected when the password
     * path passes over them, Default value is false.
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    default skipUnselectedPoint(skipped: boolean | undefined): this;
    /**
     * Set the attribute modifier
     *
     * @param { AttributeModifier<PatternLockAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 20
     */
    default attributeModifier(modifier: AttributeModifier<PatternLockAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * Defines the PatternLock component.
 *
 * @param { PatternLockController } [controller] - pattern lock controller.
 * @param { function } [content_]
 * @returns { PatternLockAttribute } The attribute of the PatternLock.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 20
 */
@memo
@ComponentBuilder
export declare function PatternLock(
    controller?: PatternLockController, 
    @memo
    content_?: () => void
): PatternLockAttribute;
