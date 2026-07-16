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
 */

/**
 * Authentication challenge result of the pattern password.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum PatternLockChallengeResult {

  /**
   * The pattern password is correct.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  CORRECT = 1,

  /**
   * The pattern password is incorrect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  WRONG = 2
}

/**
 * Describes the parameters of the ring style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface CircleStyleOptions {

  /**
   * Color of the background circle.
   *
   * Default value: **'#33182431'**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  color?: ResourceColor;

  /**
   * Radius of the background circle.
   *
   * Default value: 1.833 times (that is, 11/6) of the value of [circleRadius]{@link PatternLockAttribute#circleRadius}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  radius?: LengthMetrics;

  /**
   * Whether to enable the wave effect after a grid dot is selected.
   *
   * **true** to enable; **false** otherwise.
   *
   * Default value: **true**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enableWaveEffect?: boolean;

  /**
   * Whether the background circle is displayed above the grid dot.
   *
   * **true**: The background ring is displayed above the grid dot to cover the grid dot. **false**: The background ring
   * is displayed below the grid dot and does not cover the grid dot.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  enableForeground?: boolean;
}

/**
 * Controller of the **PatternLock** component, which is used to reset the component status and challenge result of the
 * pattern password.
 *
 * ###### Objects to Import
 *
 * ```ts
 * patternLockController: PatternLockController = new PatternLockController()
 * ```
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 9 dynamic
 */
declare class PatternLockController {

  /**
   * A constructor used to create a **PatternLockController** instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  constructor();

  /**
   * Resets the component status.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  reset();

  /**
   * Challenge result of the pattern password.
   *
   * @param { PatternLockChallengeResult } result - Authentication challenge result of the pattern password. The status
   *     can be correct or incorrect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  setChallengeResult(result: PatternLockChallengeResult): void;
}

/**
 * The **PatternLock** component allows users to use a pattern password for authentication. It enters the input state
 * once a finger is pressed against it, and exits the input state and completes the input once the finger leaves the
 * screen.
 *
 * > **NOTE**
 *
 * > - If you require additional features, use
 * > [custom components](docroot://ui/state-management/arkts-create-custom-components.md). For example, the custom
 * > component<!--RP1-->
 * > [CustomPatternLock](https://gitcode.com/openharmony/applications_app_samples/tree/master/code/UI/CustomPatternLock)
 * > <!--RP1End--> implements the pattern lock function using the [Canvas]{@link canvas} component. You can extend its
 * > functionality as required.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @noninterop
 */
interface PatternLockInterface {

  /**
   * Creates a pattern lock component.
   *
   * @param { PatternLockController } [controller] - Controller of a component to reset the component status.
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  (controller?: PatternLockController): PatternLockAttribute;
}

/**
 * In addition to the 
 * [universal attributes](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md), the following
 * attributes are supported.
 *
 * In addition to the [universal events](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md), the
 * following events are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @noninterop
 */
declare class PatternLockAttribute extends CommonMethod<PatternLockAttribute> {

  /**
   * Sets the width and height (same value) of the component. If this attribute is set to **0** or a negative number,
   * the component is not displayed.
   *
   * > **NOTE**
   * >
   * > When the **PatternLock** component has the universal attribute [aspectRatio]{@link CommonMethod#aspectRatio} set
   * > and the ratio is not equal to 1 (the component is constrained to a rectangle), the nine‑grid pattern is still
   * > drawn as a square, which exceeds the component's bounds.
   *
   * @param { Length } value - Width and height of the component. Default value: **288vp**
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  sideLength(value: Length): PatternLockAttribute;

  /**
   * Sets the radius of the dots in a grid. If this attribute is set to **0** or a negative value, the default value is
   * used.
   *
   * @param { Length } value - Radius of the dots in a grid.<br>Default value: **6vp**<br>Value range: (0, sideLength/11
   *     ]. If the value is less than or equal to **0**, the default value is used. If the value exceeds the maximum
   *     value, the maximum value is used.
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  circleRadius(value: Length): PatternLockAttribute;

  /**
   * Sets the background color.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { ResourceColor } value - Background color.
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  backgroundColor(value: ResourceColor): PatternLockAttribute;

  /**
   * Sets the fill color of the grid dot in the unselected state.
   *
   * @param { ResourceColor } value - Fill color of the grid dot in the unselected state.<br>Default value:
   *     **'#ff182431'**
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  regularColor(value: ResourceColor): PatternLockAttribute;

  /**
   * Fill color of the grid dot in the selected state.
   *
   * @param { ResourceColor } value - Fill color of the grid dot in the selected state.<br>Default value:
   *     **'#ff182431'**
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  selectedColor(value: ResourceColor): PatternLockAttribute;

  /**
   * Sets the fill color of the grid dot in the activated state, which is when the dot is highlighted but not selected.
   *
   * @param { ResourceColor } value - Fill color of the grid dot in the activated state.<br>Default value:
   *     **'#ff182431'**
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  activeColor(value: ResourceColor): PatternLockAttribute;

  /**
   * Sets the path color.
   *
   * @param { ResourceColor } value - Path color.<br>Default value: **'#33182431'**
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  pathColor(value: ResourceColor): PatternLockAttribute;

  /**
   * Sets the width of the path stroke. If this attribute is set to **0** or a negative value, the path stroke is not
   * displayed.
   *
   * @param { number | string } value - Width of the path stroke.
   *     <br>Value constraint: (0, sideLength/3]. Default value: 12vp.
   *     <br>Unit: vp.
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  pathStrokeWidth(value: number | string): PatternLockAttribute;

  /**
   * Invoked when the pattern password input is complete.
   *
   * @param { function } callback - Array of digits representing the indices of the selected grid dots, in the order
   *     they were connected. Grid dots are indexed row-wise from top to bottom, left to right: The first row contains
   *     indices 0, 1, 2; the second row 3, 4, 5; and the third row 6, 7, 8.
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  onPatternComplete(callback: (input: Array<number>) => void): PatternLockAttribute;

  /**
   * Sets whether to allow the user to reset the component status (that is, clear the input) by touching the component
   * again after the input is complete.
   *
   * @param { boolean } value - Whether to allow the user to reset the component status (that is, clear the input) by
   *     touching the component again after the input is complete.<br>**true**: yes; **false**: no<br>Default value:
   *     **true**
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  autoReset(value: boolean): PatternLockAttribute;

  /**
   * Invoked when a grid dot is connected during pattern password input.
   *
   * The callback parameter is an array of digits, where each digit represents the index of a selected grid dot, listed
   * in the order they were connected. Grid dots are indexed row-wise from top to bottom, left to right: The first row
   * contains indices 0, 1, 2; the second row 3, 4, 5; and the third row 6, 7, 8.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { import('../api/@ohos.base').Callback<number> } callback - Invoked when a grid dot is connected during
   *     pattern password input.
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onDotConnect(callback: import('../api/@ohos.base').Callback<number>): PatternLockAttribute;

  /**
   * Sets the background circle style for the dots in a grid when they are in the activated state.
   *
   * @param { Optional<CircleStyleOptions> } options - Background circle style of the dots in the activated state.
   * @returns { PatternLockAttribute } PatternLockAttribute
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  activateCircleStyle(options: Optional<CircleStyleOptions>): PatternLockAttribute;

  /**
   * Sets whether unselected dots in the grid are automatically skipped when the password path passes over them.
   *
   * @param { boolean } skipped - Whether unselected dots in the grid are automatically skipped when the password path
   *     passes over them.<br>**true** to skip the unselected dots when the password path passes over them; **false**
   *     otherwise. Default value: **false**
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  skipUnselectedPoint(skipped: boolean): PatternLockAttribute;
}

/**
 * The **PatternLock** component allows users to use a pattern password for authentication. It enters the input state
 * once a finger is pressed against it, and exits the input state and completes the input once the finger leaves the
 * screen.
 *
 * > **NOTE**
 *
 * > - If you require additional features, use
 * > [custom components](docroot://ui/state-management/arkts-create-custom-components.md). For example, the custom
 * > component<!--RP1-->
 * > [CustomPatternLock](https://gitcode.com/openharmony/applications_app_samples/tree/master/code/UI/CustomPatternLock)
 * > <!--RP1End--> implements the pattern lock function using the [Canvas]{@link canvas} component. You can extend its
 * > functionality as required.
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @noninterop
 */
declare const PatternLock: PatternLockInterface;

/**
 * Defines PatternLock Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @noninterop
 */
declare const PatternLockInstance: PatternLockAttribute;