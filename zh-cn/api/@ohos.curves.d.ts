/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
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
 * 本模块提供设置动画插值曲线功能，用于构造阶梯曲线对象、三阶贝塞尔曲线对象和弹簧曲线对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare namespace curves {
  /**
   * 插值曲线和动效请参考<!--RP1-->[贝塞尔曲线](docroot://../design/ux-design/animation-attributes.md)<!--RP1End-->。
   * 
   * | 名称                | 值 | 说明                                                         |
   * | ------------------- | -- | ------------------------------------------------------------ |
   * | Linear              | 0 | 表示动画从头到尾的速度都是相同的。                           |
   * | Ease                | 1 | 表示动画以低速开始，然后加快，在结束前变慢，cubic-bezier(0.25, 0.1, 0.25, 1.0)。 |
   * | EaseIn              | 2 | 表示动画以低速开始，cubic-bezier(0.42, 0.0, 1.0, 1.0)。       |
   * | EaseOut             | 3 | 表示动画以低速结束，cubic-bezier(0.0, 0.0, 0.58, 1.0)。       |
   * | EaseInOut           | 4 | 表示动画以低速开始和结束，cubic-bezier(0.42, 0.0, 0.58, 1.0)。 |
   * | FastOutSlowIn       | 5 | 标准曲线，cubic-bezier(0.4, 0.0, 0.2, 1.0)。                 |
   * | LinearOutSlowIn     | 6 | 减速曲线，cubic-bezier(0.0, 0.0, 0.2, 1.0)。                 |
   * | FastOutLinearIn     | 7 | 加速曲线，cubic-bezier(0.4, 0.0, 1.0, 1.0)。                 |
   * | ExtremeDeceleration | 8 | 急缓曲线，cubic-bezier(0.0, 0.0, 0.0, 1.0)。                 |
   * | Sharp               | 9 | 锐利曲线，cubic-bezier(0.33, 0.0, 0.67, 1.0)。               |
   * | Rhythm              | 10 | 节奏曲线，cubic-bezier(0.7, 0.0, 0.2, 1.0)。                 |
   * | Smooth              | 11 | 平滑曲线，cubic-bezier(0.4, 0.0, 0.4, 1.0)。                 |
   * | Friction            | 12 | 阻尼曲线，cubic-bezier(0.2, 0.0, 0.2, 1.0)。                  |
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  enum Curve {  
    /**
     * Linear. Indicates that the animation has the same velocity from start to finish.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    Linear = 0,
    /**
     * Ease. Indicates that the animation starts at a low speed, then speeds up, and slows down before the end,
     * CubicBezier(0.25, 0.1, 0.25, 1.0).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    Ease = 1,
    /**
     * EaseIn. Indicates that the animation starts at a low speed, Cubic Bezier (0.42, 0.0, 1.0, 1.0).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    EaseIn = 2,
    /**
     * EaseOut. Indicates that the animation ends at low speed, CubicBezier (0.0, 0.0, 0.58, 1.0).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    EaseOut = 3,
    /**
     * EaseInOut. Indicates that the animation starts and ends at low speed, CubicBezier (0.42, 0.0, 0.58, 1.0).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    EaseInOut = 4,
    /**
     * FastOutSlowIn. Standard curve, cubic-bezier (0.4, 0.0, 0.2, 1.0).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    FastOutSlowIn = 5,
    /**
     * LinearOutSlowIn. Deceleration curve, cubic-bezier (0.0, 0.0, 0.2, 1.0).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    LinearOutSlowIn = 6,
    /**
     * FastOutLinearIn. Acceleration curve, cubic-bezier (0.4, 0.0, 1.0, 1.0).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    FastOutLinearIn = 7,
    /**
     * ExtremeDeceleration. Abrupt curve, cubic-bezier (0.0, 0.0, 0.0, 1.0).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    ExtremeDeceleration = 8,
    /**
     * Sharp. Sharp curves, cubic-bezier (0.33, 0.0, 0.67, 1.0).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    Sharp = 9,
    /**
     * Rhythm. Rhythmic curve, cubic-bezier (0.7, 0.0, 0.2, 1.0).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    Rhythm = 10,
    /**
     * Smooth. Smooth curves, cubic-bezier (0.4, 0.0, 0.4, 1.0).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    Smooth = 11,
    /**
     * Friction. Damping curves, CubicBezier (0.2, 0.0, 0.2, 1.0).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    Friction = 12
  }

  /**
   * 曲线对象，支持通过本模块中的[curves.cubicBezierCurve]{@link curves.cubicBezierCurve}、
   * [curves.interpolatingSpring]{@link curves.interpolatingSpring}等方法创建不同类型的曲线对象，并可通过曲线对象调用其
   * [interpolate]{@link curves.ICurve.interpolate}的成员方法。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  interface ICurve {
    /**
     * 插值曲线的插值计算函数，可以通过传入的归一化时间参数返回当前的插值
     *
     * @param { number } fraction - 当前的归一化时间参数。<br/>取值范围：[0,1]<br/>**说明：** <br/>设置的值小于0时，按0处理；设置的值大于1时，按1处理。
     * @returns { number } 返回归一化time时间点对应的曲线插值。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    interpolate(fraction : number) : number;
  }

  /**
   * 插值曲线的初始化函数，可以根据入参创建一个插值曲线对象。
   *
   * @param { Curve } [curve] - 曲线类型。<br/>默认值：Curve.Linear
   * @returns { ICurve } 曲线的插值对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function initCurve(curve?: Curve): ICurve;

  /**
   * 插值曲线的初始化函数，可以根据入参创建一个插值曲线对象。
   * 
   * > **说明：**  
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。建议使用[Curves.initCurve]{@link curves.initCurve}替代。
   *
   * @param { Curve } [curve] - 曲线类型。<br/>默认值：Curve.Linear
   * @returns { string } 返回插值曲线对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead curves.initCurve
   */
  function init(curve?: Curve): string;

  /**
   * 构造阶梯曲线对象。
   *
   * @param { number } count - 阶梯的数量，需要为正整数。<br/>取值范围：[1, +∞)<br/>**说明：** <br/>设置小于1的值时，按值为1处理。
   * @param { boolean } end - 在每个间隔的起点或终点发生阶跃变化。<br>-true：在终点发生阶跃变化。<br>-false：在起点发生阶跃变化。
   * @returns { ICurve } 曲线的插值对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function stepsCurve(count: number, end: boolean): ICurve;

  /**
   * 构造自定义曲线对象。
   *
   * @param { function } interpolate - 用户自定义的插值回调函数。<br/>fraction为动画开始时的插值输入x值。取值范围：[0,1]<br/>返回值为曲线的y值。取值范围：[0,1]<br />
   *     **说明：**<br />fraction等于0时，返回值为0对应动画起点，返回不为0，动画在起点处有跳变效果。<br/>fraction等于1时，返回值为1对应动画终点，返回值不为1将导致动画的终值不是状态变量的值，出现
   *     大于或者小于状态变量值，再跳变到状态变量值的效果。
   * @returns { ICurve } 曲线的插值对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  function customCurve(interpolate: (fraction: number) => number): ICurve;

  /**
   * 构造阶梯曲线对象。
   * 
   * > **说明：**  
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。建议使用[Curves. stepsCurve]{@link curves.stepsCurve}替代。
   *
   * @param { number } count - 阶梯的数量，需要为正整数。
   * @param { boolean } end - 在每个间隔的起点或是终点发生阶跃变化。<br>-true：在终点发生阶跃变化。<br>-false：在起点发生阶跃变化。
   * @returns { string } 返回阶梯曲线对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead curves.stepsCurve
   */
  function steps(count: number, end: boolean): string;

  /**
   * 构造三阶贝塞尔曲线对象，确保曲线的值在0到1之间。
   *
   * @param { number } x1 - 确定贝塞尔曲线第一点横坐标。<br/>取值范围：[0, 1]<br/>**说明：** <br/>设置的值小于0时，按0处理；设置的值大于1时，按1处理。
   * @param { number } y1 - 确定贝塞尔曲线第一点纵坐标。<br/>取值范围：(-∞, +∞)
   * @param { number } x2 - 确定贝塞尔曲线第二点横坐标。<br/>取值范围：[0, 1]<br/>**说明：** <br/>设置的值小于0时，按0处理；设置的值大于1时，按1处理。
   * @param { number } y2 - 确定贝塞尔曲线第二点纵坐标。<br/>取值范围：(-∞, +∞)
   * @returns { ICurve } 曲线的插值对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function cubicBezierCurve(x1: number, y1: number, x2: number, y2: number): ICurve;

  /**
   * 构造三阶贝塞尔曲线对象，曲线的值必须处于0-1之间。
   * 
   * > **说明：**  
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。建议使用[Curves.cubicBezierCurve]{@link curves.cubicBezierCurve}替代。
   *
   * @param { number } x1 -Value range [0, 1].
   *     Note: If the value is less than 0, 0 is used. If the value is greater than 1, 1 is used.
   * @param { number } y1 -Value range (-∞, +∞).
   * @param { number } x2 -Value range [0, 1].
   *     Note: If the value is less than 0, 0 is used. If the value is greater than 1, 1 is used.
   * @param { number } y2 -Value range (-∞, +∞).
   * @returns { string } 返回三阶贝塞尔曲线对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead curves.cubicBezierCurve
   */
  function cubicBezier(x1: number, y1: number, x2: number, y2: number): string;

  /**
   * 构造弹簧曲线对象，曲线形状由弹簧参数决定，动画时长受animation、animateTo中的duration参数控制。
   *
   * @param { number } velocity - Initial velocity. It is applied by external factors to the spring animation,
   *     designed to help ensure the smooth transition from the previous motion state. The velocity is the normalized
   *     velocity, and its value is equal to the actual velocity at the beginning of the animation divided by the
   *     animation attribute change value.Value range: (-∞, +∞).
   * @param { number } mass - Mass, which influences the inertia in the spring system. The greater the mass,
   *     the greater the amplitude of the oscillation, and the slower the speed of restoring to the equilibrium
   *     position.
   *     Value range: (0, +∞).
   *     <p>**NOTE**:
   *     <br>If this parameter is set to a value less than or equal to 0, the value 1 is used.
   *     </p>
   * @param { number } stiffness - Stiffness.It is the degree to which an object deforms by resisting the force
   *     applied. In an elastic system, the greater the stiffness, the stronger the ability to resist deformation,
   *     and the faster the speed of restoring to the equilibrium position.Value range: (0, +∞).
   *     <p>**NOTE**:
   *     <br>If this parameter is set to a value less than or equal to 0, the value 1 is used.
   *     </p>
   * @param { number } damping -Damping. It is used to describe the oscillation and attenuation of the system
   *     after being disturbed. The larger the damping, the smaller the number of oscillations of elastic motion,
   *     and the smaller the oscillation amplitude.Value range: (0, +∞).
   *     <p>**NOTE**:
   *     <br>If this parameter is set to a value less than or equal to 0, the value 1 is used.
   *     </p>
   * @returns { ICurve } 曲线的插值对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function springCurve(velocity: number, mass: number, stiffness: number, damping: number): ICurve;

  /**
   * 构造弹簧曲线对象。
   * 
   * > **说明：**  
   * >
   * > 从API version 7开始支持，从API version 9开始废弃。建议使用[Curves.springCurve]{@link curves.springCurve}替代。
   *
   * @param { number } velocity - 初始速度。是由外部因素对弹性动效产生的影响参数，其目的是保证对象从之前的运动状态平滑地过渡到弹性动效。
   * @param { number } mass - 质量。弹性系统的受力对象，会对弹性系统产生惯性影响。质量越大，震荡的幅度越大，恢复到平衡位置的速度越慢。
   * @param { number } stiffness - 刚度。是物体抵抗施加的力而形变的程度。在弹性系统中，刚度越大，抵抗变形的能力越强，恢复到平衡位置的速度就越快。
   * @param { number } damping - 阻尼。是一个纯数，无真实的物理意义，用于描述系统在受到扰动后震荡及衰减的情形。阻尼越大，弹性运动的震荡次数越少、震荡幅度越小。
   * @returns { string } 返回弹簧曲线对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead curves.springCurve
   */
  function spring(velocity: number, mass: number, stiffness: number, damping: number): string;

  /**
   * 构造弹性动画曲线对象。如果对同一对象的同一属性进行多个弹性动画，每个动画会替换掉前一个动画，并继承之前的速度。
   *
   * @param { number } [response] - 弹簧自然振动周期，决定弹簧复位的速度。<br>默认值：0.55<br/>单位：秒<br/>取值范围：(0, +∞)<br/>**说明：** <br/>设置小于等于0的值
   *     时，按默认值0.55处理。
   * @param { number } [dampingFraction] - 阻尼系数。<br>0表示无阻尼，一直处于震荡状态；<br>大于0小于1的值为欠阻尼，运动过程中会超出目标值；<br>等于1为临界阻尼；<br>大于1为过阻
   *     尼，运动过程中逐渐趋于目标值。<br>默认值：0.825<br/>单位：秒<br/>取值范围：[0, +∞)<br/>**说明：** <br/>设置小于0的值时，按默认值0.825处理。
   * @param { number } [overlapDuration] - 弹性动画衔接时长。发生动画继承时，如果前后两个弹性动画response不一致，response参数会在overlapDuration时间内平滑过渡。<br
   *     />默认值：0<br/>单位：秒<br/>取值范围：
   *     [0, +∞)<br/> **说明：**  <br/>设置小于0的值时，按默认值0处理。<br>弹性动画曲线为物理曲线，[animation]{@link common}、[animateTo]{@link common}、[pageTransition]{@link page_transition}中的duration参数不生效，动画持续时间取决于springMotion动画曲线参数和之前的速度。时间不能归一，故不能通过该曲线的interpolate函数获得插值。
   * @returns { ICurve } 曲线对象。
   *     <br>**说明:**  
   *     <br>弹性动画曲线为物理曲线，[animation]{@link common}、[animateTo]{@link common}、[pageTransition]{@link page_transition}中的
   *     duration参数不生效，动画持续时间取决于springMotion动画曲线参数和之前的速度。时间不能归一，故不能通过该曲线的[interpolate]{@link curves.ICurve.interpolate}函
   *     数获得插值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function springMotion(response?: number, dampingFraction?: number, overlapDuration?: number): ICurve;

  /**
   * 构造弹性跟手动画曲线对象，是[springMotion]{@link curves.springMotion}的一种特例，仅默认参数不同，可与springMotion混合使用。
   *
   * @param { number } [response] - 解释同springMotion中的response。<br/>默认值：0.15<br/>单位：秒<br/>取值范围：(0, +∞)<br/>**说明：** <br/>设
   *     置小于等于0的值时，按默认值0.15处理。
   * @param { number } [dampingFraction] - 解释同springMotion中的dampingFraction。<br/>默认值：0.86<br/>单位：秒<br/>取值范围：
   *     [0, +∞)<br/>**说明：** <br/>设置小于0的值时，按默认值0.86处理。
   * @param { number } [overlapDuration] - 解释同springMotion中的overlapDuration。<br/>默认值：0.25<br/>单位：秒<br/>取值范围：
   *     [0, +∞)<br/>**说明：** <br/>设置小于0的值时，按默认值0.25处理。<br/>弹性跟手动画曲线为springMotion的一种特例，仅默认值不同。如果使用自定义参数的弹性曲线，推荐使用springMotion构造曲线。如果使用跟手动画，推荐使用默认参数的弹性跟手动画曲线。<br/>[animation]{@link common}、[animateTo]{@link common}、[pageTransition]{@link page_transition}中的duration参数不生效，动画持续时间取决于responsiveSpringMotion动画曲线参数和之前的速度，也不能通过该曲线的interpolate函数获得插值。
   * @returns { ICurve } 曲线对象。
   *     <br>**说明:** 
   *     <br>1、弹性跟手动画曲线为springMotion的一种特例，仅默认值不同。如果使用自定义参数的弹性曲线，推荐使用springMotion构造曲线；如果使用跟手动画，推荐使用默认参数的弹性跟手动画曲线。
   *     <br>2、[animation]{@link common}、[animateTo]{@link common}、[pageTransition]{@link page_transition}中的duration参数不生效，动画持
   *     续时间取决于responsiveSpringMotion动画曲线参数和之前的速度，也不能通过该曲线的[interpolate]{@link curves.ICurve.interpolate}函数获得插值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  function responsiveSpringMotion(response?: number, dampingFraction?: number, overlapDuration?: number): ICurve;

  /**
   * 构造插值器弹簧曲线对象，生成一条从0到1的动画曲线，实际动画值根据曲线进行插值计算。动画时间由曲线参数决定，不受animation、animateTo中的duration参数控制。
   *
   * @param { number } velocity - Initial velocity. It is applied by external factors to the spring animation,
   *     designed to help ensure the smooth transition from the previous motion state.
   *     The velocity is the normalized velocity, and its value is equal to the actual velocity at the beginning of
   *     the animation divided by the animation attribute change value.<br>Value range: (-∞, +∞).
   * @param { number } mass - Mass, which influences the inertia in the spring system. The greater the mass,
   *     the greater the amplitude of the oscillation, and the slower the speed of restoring to the equilibrium
   *     position.
   *     <br>Value range: (0, +∞).
   *     <p>**NOTE**:
   *     <br>If this parameter is set to a value less than or equal to 0, the value **1** is used.
   *     </p>
   * @param { number } stiffness - Stiffness. It is the degree to which an object deforms by resisting
   *     the force applied. In an elastic system, the greater the stiffness, the stronger the ability to resist
   *     deformation, and the faster the speed of restoring to the equilibrium position.<br>Value range: (0, +∞).
   *     <p>**NOTE**:
   *     <br>If this parameter is set to a value less than or equal to 0, the value **1** is used.
   *     </p>
   * @param { number } damping - Damping. It is used to describe the oscillation and attenuation of the system
   *     after being disturbed. The larger the damping, the smaller the number of oscillations of elastic motion,
   *     and the smaller the oscillation amplitude.<br>Value range: (0, +∞)<br>
   *     <p>**NOTE**:
   *     <br>If this parameter is set to a value less than or equal to 0, the value **1** is used.
   *     </p>
   * @returns { ICurve } 曲线对象。
   *     <br>**说明:** 弹性动画曲线为物理曲线，[animation]{@link common}、[animateTo]{@link common}、[pageTransition]{@link page_transition}中
   *     的duration参数不生效，动画持续时间取决于interpolatingSpring动画曲线参数。时间不能归一，故不能通过该曲线的
   *     [interpolate]{@link curves.ICurve.interpolate}函数获得插值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  function interpolatingSpring(velocity: number, mass: number, stiffness: number, damping: number): ICurve;
}

export default curves;