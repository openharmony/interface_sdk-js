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
   * Background ring color.
   *
   * Default value: '#33182431' (dark gray, 20% opacity).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  color?: ResourceColor;

  /**
   * Radius of the background ring.
   *
   * Default value: approximately 1.833 times (that is, 11/6) of
   * [circleRadius]{@link PatternLockAttribute#circleRadius}.
   *
   * Value range: greater than 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  radius?: LengthMetrics;

  /**
   * Switch for the wave effect after a grid dot is selected.
   *
   * true: displays the wave effect; false: does not display the wave effect.
   *
   * Default value: true.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enableWaveEffect?: boolean;

  /**
   * Whether the background ring is displayed above the grid dots.
   *
   * true: the background ring is displayed above the grid dots and covers them; false: the background ring is displayed
   * below the grid dots and does not cover them.
   *
   * Default value: false.
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
 * Controller of the **PatternLock** component, used to reset the component state and set the pattern password state.
 *
 * ###### Objects to Import
 *
 * ```typescript
 * let patternLockController: PatternLockController = new PatternLockController();
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
   * Resets the component state. This API takes effect only when the corresponding controller parameter is passed in
   * when the **PatternLock** component is constructed. If it is not passed in, the call does not take effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  reset();

  /**
   * Sets the correct or incorrect state of the pattern password. This API takes effect only when the corresponding
   * controller parameter is passed in when the **PatternLock** component is constructed. If it is not passed in, the
   * call does not take effect.
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
 * **PatternLock** is a pattern‑password lock component that allows password input via a nine-cell grid pattern for
 * password verification scenarios. The component supports customizing appearance attributes such as the size of the
 * nine‑cell grid, styles of dots and connecting lines, and colors for selected/active states. It provides real‑time
 * feedback during password entry and allows setting status for password verification results (success/failure). Input
 * mode is triggered when a finger presses down within the **PatternLock** component area; password input completes and
 * input mode ends when the finger lifts off the screen.
 *
 * > **NOTE**
 * >
 * > - If you require additional features, use
 * > [custom components](docroot://ui/state-management/arkts-create-custom-components.md). For example, the custom
 * > component<!--RP1-->
 * > [CustomPatternLock](https://gitcode.com/openharmony/applications_app_samples/tree/master/code/UI/CustomPatternLock)
 * > <!--RP1End--> implements the pattern password lock feature through the [Canvas]{@link ./canvas} component, based on
 * > which you can extend the features as needed.
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
   * @param { PatternLockController } [controller] - Sets the controller of the PatternLock component, which is used to
   *     reset the component state and set the pattern password state. Pass this parameter when the component state
   *     needs to be controlled programmatically (for example, resetting the password lock or setting the password
   *     verification result). If this parameter is not passed, the component state cannot be manually operated through
   *     the controller (that is, methods such as reset() and setChallengeResult() cannot be called).
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  (controller?: PatternLockController): PatternLockAttribute;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @noninterop
 */
declare class PatternLockAttribute extends CommonMethod<PatternLockAttribute> {
  /**
   * Sets the width and height of the component (the width and height are equal). If the value is set to **0** or a
   * negative number, the component is not displayed. If this attribute is not set, the default width and height are
   * **288vp**.
   *
   * > **NOTE**
   * >
   * > When the **PatternLock** component has the universal attribute [aspectRatio]{@link CommonMethod#aspectRatio} set
   * > and the ratio is not equal to 1 (the component is constrained to a rectangle), the nine‑grid pattern is still
   * > drawn as a square, which exceeds the component's bounds.
   *
   * @param { Length } value - Width and height of the component.
   *     <br>Value range: greater than 0.
   *     <br>If the value is set to 0 or a negative number, the component is not displayed.
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  sideLength(value: Length): PatternLockAttribute;

  /**
   * Sets the radius of the grid dots. If this attribute is not set, the default radius is **6vp**.
   *
   * @param { Length } value - Radius of the grid dot.
   *     <br>Value range: (0, sideLength/11]. If the value is less than or equal to 0, the default value is used. If the
   *     value exceeds the maximum, the maximum value is used.
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  circleRadius(value: Length): PatternLockAttribute;

  /**
   * Sets the background color. If this attribute is not set, the background is transparent by default, that is, no
   * background color is applied.
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
   * Sets the fill color of the grid dots in the unselected state. If this attribute is not set, the default fill color
   * is **'#ff182431'** (dark gray).
   *
   * @param { ResourceColor } value - Fill color of the grid dot in the unselected state.
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  regularColor(value: ResourceColor): PatternLockAttribute;

  /**
   * Sets the fill color of the grid dots in the selected state. If this attribute is not set, the default fill color is
   * **'#ff182431'** (dark gray).
   *
   * @param { ResourceColor } value - Fill color of the grid dot in the selected state.
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  selectedColor(value: ResourceColor): PatternLockAttribute;

  /**
   * Sets the fill color of the grid dots in the active state, which is the state where a finger passes over a dot but
   * the dot is not yet selected. If this attribute is not set, the default fill color is **'#ff182431'** (dark gray).
   *
   * @param { ResourceColor } value - Fill color of the grid dot in the active state.
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  activeColor(value: ResourceColor): PatternLockAttribute;

  /**
   * Sets the color of the connecting lines. If this attribute is not set, the default line color is **'#33182431'** (
   * dark gray with 20% opacity).
   *
   * @param { ResourceColor } value - Color of the line.
   * @returns { PatternLockAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  pathColor(value: ResourceColor): PatternLockAttribute;

  /**
   * Sets the width of the connecting lines. If this attribute is not set, the default line width is **12vp**.
   *
   * @param { number | string } value - Width of the line.
   *     <br>Unit: vp
   *     <br>Value range: (0, sideLength/3]. If the value is set to 0 or a negative number, the line is not displayed.
   *     If the value exceeds the maximum, the maximum value is used.
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
   * > **NOTE**
   * >
   * > This callback is triggered when password input ends and returns the complete password array. Relationship with
   * > [onDotConnect]{@link PatternLockAttribute#onDotConnect}: onDotConnect is triggered in real time when each dot is
   * > selected, while onPatternComplete is triggered when input ends. The two can be used together to implement real-
   * > time feedback and final verification.
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
   * Sets whether to reset the component state when the component area is pressed again after password input is
   * complete. If this API is not used to set it, the component state is reset by default.
   *
   * @param { boolean } value - Whether to reset the component state when the component area is pressed again after
   *     password input is complete.
   *     <br>true: reset the component state (that is, clear the previously entered password); false: do not reset the
   *     component state.
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
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { import('../api/@ohos.base').Callback<number> } callback - Triggered when a grid dot is selected during
   *     password input. The callback parameter is the index of the selected grid dot (the dots in the first row are
   *     numbered 0, 1, and 2 from left to right; the dots in the second row are numbered 3, 4, and 5 from left to
   *     right; the dots in the third row are numbered 6, 7, and 8 from left to right).
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
   * Sets whether unselected grid dots are skipped when the password path passes over them. If this API is not used to
   * set it, unselected grid dots are selected by default when the password path passes over them.
   *
   * @param { boolean } skipped - Whether to skip the selection of unselected grid dots when the password path passes
   *     through them.
   *     <br>true: skip the selection; false: select automatically.
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
 * **PatternLock** is a pattern‑password lock component that allows password input via a nine-cell grid pattern for
 * password verification scenarios. The component supports customizing appearance attributes such as the size of the
 * nine‑cell grid, styles of dots and connecting lines, and colors for selected/active states. It provides real‑time
 * feedback during password entry and allows setting status for password verification results (success/failure). Input
 * mode is triggered when a finger presses down within the **PatternLock** component area; password input completes and
 * input mode ends when the finger lifts off the screen.
 *
 * > **NOTE**
 * >
 * > - If you require additional features, use
 * > [custom components](docroot://ui/state-management/arkts-create-custom-components.md). For example, the custom
 * > component<!--RP1-->
 * > [CustomPatternLock](https://gitcode.com/openharmony/applications_app_samples/tree/master/code/UI/CustomPatternLock)
 * > <!--RP1End--> implements the pattern password lock feature through the [Canvas]{@link ./canvas} component, based on
 * > which you can extend the features as needed.
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