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
* 图案密码状态。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum PatternLockChallengeResult {

  /**
   * 图案密码正确。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  CORRECT = 1,

  /**
   * 图案密码错误。
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
* 圆环样式的参数说明。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface CircleStyleOptions {

  /**
   * 背景圆环颜色。
   *
   * 默认值：'#33182431'。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  color?: ResourceColor;

  /**
   * 背景圆环的半径。
   *
   * 默认值：[circleRadius]{@link PatternLockAttribute#circleRadius}的1.833倍（即11/6）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  radius?: LengthMetrics;

  /**
   * 选中宫格圆点后的波浪效果开关。
   *
   * true：显示波浪效果；false：不显示波浪效果。
   *
   * 默认值：true。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enableWaveEffect?: boolean;

  /**
   * 背景圆环是否显示在宫格圆点上层。
   *
   * true：背景圆环显示在宫格圆点上层，遮盖宫格圆点；false：背景圆环显示在宫格圆点下层，不遮盖宫格圆点。
   *
   * 默认值：false。
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
* PatternLock组件的控制器，用于重置组件状态和设置图案密码的正确或错误状态。
*
* ###### 导入对象
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
   * PatternLockController的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  constructor();

  /**
   * 重置组件状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  reset();

  /**
   * 设置图案密码的正确或错误状态。
   *
   * @param { PatternLockChallengeResult } result - 图案密码状态。包括正确和错误状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  setChallengeResult(result: PatternLockChallengeResult): void;
}

/**
* 图案密码锁组件，以九宫格图案的方式输入密码，用于密码验证场景。手指在PatternLock组件区域按下时开始进入输入状态，手指离开屏幕时结束输入状态完成密码输入。
*
* > **说明：**
*
* > - 如果开发者有其他功能需求，可以使用[自定义组件](docroot://ui/state-management/arkts-create-custom-components.md)。例如自定义组件<!--RP1-->
* > [CustomPatternLock](https://gitcode.com/openharmony/applications_app_samples/tree/master/code/UI/CustomPatternLock)
* > <!--RP1End-->，通过[Canvas]{@link canvas}组件实现了图案密码锁功能，开发者可在此基础上自行进行功能扩展。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @noninterop
 */
interface PatternLockInterface {

  /**
   * 创建图案密码锁组件。
   *
   * @param { PatternLockController } [controller] - 设置PatternLock组件控制器，可用于控制组件状态重置。
   * @returns { PatternLockAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  (controller?: PatternLockController): PatternLockAttribute;
}

/**
* 除支持[通用属性]{@link common}外，还支持以下属性。
*
* 除支持[通用事件]{@link common}外，还支持以下事件。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @noninterop
 */
declare class PatternLockAttribute extends CommonMethod<PatternLockAttribute> {

  /**
   * 设置组件的宽度和高度（宽高相同）。当设置为0或负数时，组件不显示。
   *
   * > **说明：**
   * >
   * > PatternLock组件设置了通用属性宽高比[aspectRatio]{@link CommonMethod#aspectRatio}，且不等于1时（组件尺寸被设定为长方形），九宫格依然绘制为正方形（超出组件范围）。
   *
   * @param { Length } value - 组件的宽度和高度。默认值：288vp
   * @returns { PatternLockAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  sideLength(value: Length): PatternLockAttribute;

  /**
   * 设置宫格中圆点的半径。设置为0或负数时，取默认值。
   *
   * @param { Length } value - 宫格中圆点的半径。<br/>默认值：6vp<br/>取值范围：(0, sideLength/11]。设置小于等于0的值时，按默认值处理；超过最大值时，按最大值处理。
   * @returns { PatternLockAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  circleRadius(value: Length): PatternLockAttribute;

  /**
   * 设置背景颜色。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { ResourceColor } value - 背景颜色。
   * @returns { PatternLockAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  backgroundColor(value: ResourceColor): PatternLockAttribute;

  /**
   * 设置宫格圆点在“未选中”状态的填充颜色。
   *
   * @param { ResourceColor } value - 宫格圆点在“未选中”状态的填充颜色。<br/>默认值：'#ff182431'
   * @returns { PatternLockAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  regularColor(value: ResourceColor): PatternLockAttribute;

  /**
   * 设置宫格圆点在“选中”状态的填充颜色。
   *
   * @param { ResourceColor } value - 宫格圆点在“选中”状态的填充颜色。<br/>默认值：'#ff182431'
   * @returns { PatternLockAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  selectedColor(value: ResourceColor): PatternLockAttribute;

  /**
   * 设置宫格圆点在“激活”状态的填充颜色，“激活”状态为手指经过圆点但还未选中的状态。
   *
   * @param { ResourceColor } value - 宫格圆点在“激活”状态的填充颜色。<br/>默认值：'#ff182431'
   * @returns { PatternLockAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  activeColor(value: ResourceColor): PatternLockAttribute;

  /**
   * 设置连线的颜色。
   *
   * @param { ResourceColor } value - 连线的颜色。<br/>默认值：'#33182431'
   * @returns { PatternLockAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  pathColor(value: ResourceColor): PatternLockAttribute;

  /**
   * 设置连线的宽度。设置为0或负数时连线不显示。
   *
   * @param { number | string } value - 连线的宽度。<br/>默认值：12vp<br/>取值范围：(0, sideLength/3]，设置为0或负数时连线不显示，超过最大值按最大值处理。
   * @returns { PatternLockAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  pathStrokeWidth(value: number | string): PatternLockAttribute;

  /**
   * 密码输入结束时触发该回调。
   *
   * @param { function } callback - 与选中宫格圆点顺序一致的数字数组，每个数字表示选中宫格圆点的索引值（第一行圆点从左往右依次为0、1、2，第二行圆点从左往右依次为3、4、5，第三行圆点从左往右依次为6、
   *     7、8）。
   * @returns { PatternLockAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  onPatternComplete(callback: (input: Array<number>) => void): PatternLockAttribute;

  /**
   * 设置在完成密码输入后再次在组件区域按下时是否重置组件状态。
   *
   * @param { boolean } value - 在完成密码输入后再次在组件区域按下时是否重置组件状态。<br/>true：完成密码输入后再次在组件区域按下时重置组件状态（即清除之前输入的密码）；false：完成密码输入后再次
   *     在组件区域按下时不重置组件状态。<br/>默认值：true
   * @returns { PatternLockAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  autoReset(value: boolean): PatternLockAttribute;

  /**
   * 密码输入选中宫格圆点时触发该回调。
   *
   * 回调参数为选中宫格圆点顺序的数字，数字为选中宫格圆点的索引值（第一行圆点从左往右依次为0、1、2，第二行圆点从左往右依次为3、4、5，第三行圆点从左往右依次为6、7、8）。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { import('../api/@ohos.base').Callback<number> } callback - 密码输入选中宫格圆点时触发该回调。
   * @returns { PatternLockAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onDotConnect(callback: import('../api/@ohos.base').Callback<number>): PatternLockAttribute;

  /**
   * 设置宫格圆点在“激活”状态下的背景圆环样式。
   *
   * @param { Optional<CircleStyleOptions> } options - 宫格圆点在“激活”状态的背景圆环样式。
   * @returns { PatternLockAttribute } PatternLockAttribute
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  activateCircleStyle(options: Optional<CircleStyleOptions>): PatternLockAttribute;

  /**
   * 设置未选中的宫格圆点在密码路径经过时是否自动选中。
   *
   * @param { boolean } skipped - 未选中的宫格圆点在密码路径经过时是否自动选中。<br/>true：跳过选中密码路径经过的宫格圆点；false：自动选中密码路径经过的宫格圆点。默认值：false。
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
* 图案密码锁组件，以九宫格图案的方式输入密码，用于密码验证场景。手指在PatternLock组件区域按下时开始进入输入状态，手指离开屏幕时结束输入状态完成密码输入。
*
* > **说明：**
*
* > - 如果开发者有其他功能需求，可以使用[自定义组件](docroot://ui/state-management/arkts-create-custom-components.md)。例如自定义组件<!--RP1-->
* > [CustomPatternLock](https://gitcode.com/openharmony/applications_app_samples/tree/master/code/UI/CustomPatternLock)
* > <!--RP1End-->，通过[Canvas]{@link canvas}组件实现了图案密码锁功能，开发者可在此基础上自行进行功能扩展。
*
* ###### 子组件
*
* 无
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @noninterop
 */
declare const PatternLock: PatternLockInterface;

/**
* 定义PatternLock组件实例。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @noninterop
 */
declare const PatternLockInstance: PatternLockAttribute;