/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * 滑动条滑块在滑轨上显示的样式，具体样式请参考[Slider组件滑块与滑轨是如何对齐的](docroot://ui/arkts-select-component-faq.md#slider组件滑块与滑轨是如何对齐的)。
 * 
 * > **说明：** 
 * >
 * > - Slider无默认padding。
 * >
 * > - 当Slider为水平滑动条时，默认高度为40vp，宽度为父容器的宽度，滑动条居中显示，当滑动条的style为SliderStyle.OutSet时，左右间距分别为9vp，即为
 * > [blockSize]{@link SliderAttribute#blockSize}宽度的一半，当滑动条的style为SliderStyle.InSet时，左右间距分别为6vp，若设置padding，padding不会覆盖左右
 * > 间距。
 * >
 * > - 当Slider为竖直滑动条时，默认宽度为40vp，高度为父容器的高度，滑动条居中显示，当滑动条的style为SliderStyle.OutSet时，上下间距分别为10vp，当滑动条的style为
 * > SliderStyle.InSet时，上下间距分别为6vp，若设置padding，padding不会覆盖上下间距。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum SliderStyle {
    /**
     * 滑块在滑轨上。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    OutSet,
    /**
     * 滑块在滑轨内。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    InSet,
    /**
     * 无滑块
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamic
     */
    NONE
}

/**
 * 滑块的状态值。包括按下、拖动、离开以及点击滑动条使滑块位置时。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum SliderChangeMode {
    /**
     * 手势/鼠标接触或者按下滑块。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    Begin,
    /**
     * 正在拖动滑块过程中。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    Moving,
    /**
     * 手势/鼠标离开滑块。
     * 
     * **说明：** 
     * 
     * 异常值恢复成默认值时触发，即value设置小于min或大于max。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    End,
    /**
     * 点击滑动条使滑块位置移动。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    Click
}

/**
 * 用户与滑动条组件交互方式。
 * 
 * | 名称     | 值 |说明                          |
 * | ------ | -- | ----------------------------- |
 * | SLIDE_AND_CLICK | 0 | 用户可拖拽滑块或者点击滑轨使滑块移动，鼠标或手指按下即发生移动。|
 * | SLIDE_ONLY | 1 | 禁止用户通过点击滑轨使滑块移动。|
 * | SLIDE_AND_CLICK_UP | 2 |用户可拖拽滑块或者点击滑轨使滑块移动，当鼠标或手指抬起时，若与屏幕按压位置一致，则触发移动。|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum SliderInteraction {
    /**
     * Users can drag the slider or touch the track to move the slider. The slider moves as soon as the mouse or
     * finger is pressed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    SLIDE_AND_CLICK = 0,
    /**
     * Users are not allowed to move the slider by touching the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    SLIDE_ONLY = 1,
    /**
     * Users can drag the slider or touch the track to move the slider. The slider moves when the mouse is released or
     * finger is lifted, if the release/lift position coincides with the screen press position.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    SLIDE_AND_CLICK_UP = 2
}

/**
 * 定义SlideRange中使用的回调类型。
 * 
 * > **说明：**
 * >
 * > - 当前仅当min<=from<=to<=max时该接口生效(min和max不依赖于其设置的值，而取决于其实际生效的值)。
 * >
 * > - 可只设置from或者to，也可以同时设置from和to。
 * >
 * > - 当接口生效且设置的from处于紧邻的step整数倍的值之间，则from实际取左区间step整数倍的那个值或者min作为修正后的值。
 * >
 * > - 当接口生效且设置的to处于紧邻的step整数倍的值之间，则to实际取右区间step整数倍的那个值或者MAX作为修正后的值。
 * >
 * > - 在from和to取修正值后， 当value是undefined或null时，其取值与from一致; 当value是数值型且value <= from，则取from; 当value > to，则取to。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SlideRange {
    /**
     * 设置有效滑动区间的开始。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    from?: number;
    /**
     * 设置有效滑动区间的结束。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    to?: number;
}

/**
 * 滑动条的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface SliderOptions {
    /**
     * 当前进度值。
     * 
     * 默认值：与属性min的取值一致。
     * 
     * 从API version 10开始，该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
     * 
     * 该属性支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
     * 
     * 取值范围： [min, max]
     * 
     * 小于min时取min，大于max时取max。
     * 
     * $$运算符为系统组件提供TS变量的引用，使得TS变量和slider组件的value值保持同步。详细使用示例请参考
     * [示例7（设置滑动条的双向绑定）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-slider.md#示例7设置滑动条的双向绑定)。
     *
     * @default same as the value of min [since 11]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    value?: number;
    /**
     * 设置最小值。
     * 
     * 默认值：0
     *
     * @default 0 [since 11]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    min?: number;
    /**
     * 设置最大值。
     * 
     * 默认值：100
     * 
     * **说明：** 
     * 
     * min >= max异常情况，min取默认值0，max取默认值100。
     * 
     * value不在[min, max]范围之内，取min或者max，靠近min取min，靠近max取max。
     *
     * @default 100 [since 11]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    max?: number;
    /**
     * 设置Slider滑动步长。
     * 
     * 默认值：1
     * 
     * 取值范围：[0.01, max - min]
     * 
     * **说明：** 
     * 
     * 若设置的step值小于0或大于max值，则按默认值显示。
     *
     * @default 1 - Value range: [0.01, max - min] [since 11]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    step?: number;
    /**
     * 设置Slider的滑块与滑轨显示样式。
     * 
     * 默认值：SliderStyle.OutSet
     *
     * @default SliderStyle.OutSet [since 11]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    style?: SliderStyle;
    /**
     * 设置滑动条滑动方向为水平或竖直方向。
     * 
     * 默认值：Axis.Horizontal
     *
     * @default Axis.Horizontal [since 11]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    direction?: Axis;
    /**
     * 设置滑动条取值范围是否反向。
     * 
     * true：横向Slider从右往左滑动，竖向Slider从下往上滑动；false：横向Slider从左往右滑动，竖向Slider从上往下滑动。
     * 
     * 默认值：false
     *
     * @default false [since 11]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 8 dynamic
     */
    reverse?: boolean;
}

/**
 * Slider组件滑块形状枚举。
 * 
 * | 名称    | 值 | 说明                 |
 * | ------- | -- | ---------------------- |
 * | DEFAULT | 0 | 使用默认滑块（圆形）。   |
 * | IMAGE   | 1 | 使用图片资源作为滑块。   |
 * | SHAPE   | 2 | 使用自定义形状作为滑块。 |
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum SliderBlockType {
    /**
     * Round slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    DEFAULT = 0,
    /**
     * Slider with an image background.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    IMAGE = 1,
    /**
     * Slider in a custom shape.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    SHAPE = 2
}

/**
 * Slider组件滑块形状参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface SliderBlockStyle {
    /**
     * 设置滑块形状。
     * 
     * 默认值：SliderBlockType.DEFAULT，使用圆形滑块。
     *
     * @default SliderBlockType.DEFAULT - indicating the round slider. [since 11]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    type: SliderBlockType;
    /**
     * 设置滑块图片资源。
     * 
     * 图片显示区域大小由blockSize属性控制，请勿输入尺寸过大的图片。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    image?: ResourceStr;
    /**
     * 设置滑块使用的自定义形状。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    shape?: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute;
}

/**
 * 定义SliderConfiguration中使用的回调类型。
 *
 * @param { number } value - 设置当前的进度值。<br/>取值范围：[[min]{@link SliderOptions}-[max]{@link SliderOptions}]
 * @param { SliderChangeMode } mode - 设置事件触发的相关状态值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type SliderTriggerChangeCallback = (value: number, mode: SliderChangeMode) => void;

/**
 * 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SliderConfiguration extends CommonConfiguration<SliderConfiguration> {
    /**
     * 当前进度值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    value: number;
    /**
     * 最小值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    min: number;
    /**
     * 最大值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    max: number;
    /**
     * Slider滑动步长。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    step: number;
    /**
     * 触发Slider变化。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    triggerChange: SliderTriggerChangeCallback;
}

/**
 * 滑动条组件，通常用于快速调节设置值，如音量调节、亮度调节等应用场景。
 * 
 * > **说明：**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface SliderInterface {
    /**
     *
     * @param { SliderOptions } options - 配置滑动条的参数。若不传入，则使用SliderOptions中各属性的默认值。
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @form [since 9]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    (options?: SliderOptions): SliderAttribute;
}

/**
 * Slider刻度点的无障碍文本信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface SliderStepItemAccessibility {
  /**
   * 用于提供辅助功能的文本，供屏幕阅读器等工具读取，增强无障碍功能。 
   * 
   * 默认值：""
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  text?: ResourceStr;
}

/**
 * Slider刻度点的无障碍文本信息映射集。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface SliderShowStepOptions {
  /**
   * 用于设置刻度点提供辅助功能文本，供屏幕阅读器等工具读取，增强无障碍功能。 
   * 
   * Key取值范围：[0, INT32_MAX]，当Key设定为负数和小数时，设定项不生效。 
   * 
   * 默认值：{}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  stepsAccessibility?: Map<number, SliderStepItemAccessibility>;
}

/**
 * Slider前后缀组件无障碍信息参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
interface SliderCustomContentOptions {
  /**
   * 用于提供辅助功能的文本，供屏幕阅读器等工具读取，增强无障碍功能。 
   * 
   * 默认值：""
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  accessibilityText?: ResourceStr;

  /**
   * 用于提供辅助功能的详细描述，描述滑块前缀或后缀的功能或用途，供屏幕阅读器等工具使用。 
   * 
   * 默认值为“单指双击即可执行”。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  accessibilityDescription?: ResourceStr;
   
  /**
   * 用于控制某个组件是否可被无障碍辅助服务所识别。
   * 
   * 支持的值为:
   * 
   * "auto"：当前组件会转换为“yes”。
   * 
   * "yes"：当前组件可被无障碍辅助服务所识别。
   * 
   * "no"：当前组件不可被无障碍辅助服务所识别。
   * 
   * "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。
   * 
   * 默认值："auto"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  accessibilityLevel?: string;
  
  /**
   * 用于标识该元素是否属于一个无障碍的组，帮助屏幕阅读器等工具将相关元素进行分组处理。
   * 
   * true：该组件及其所有子组件为一整个可以选中的组件，无障碍服务将不再关注其子组件内容；false：不启用无障碍分组。
   * 
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  accessibilityGroup?: boolean;
}

/**
 * Slider前缀组件无障碍信息参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
interface SliderPrefixOptions extends SliderCustomContentOptions {
}

/**
 * Slider后缀组件无障碍信息参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
interface SliderSuffixOptions extends SliderCustomContentOptions {
}

/**
 * 线性渐变颜色断点类型，用于描述渐进色颜色断点。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface ColorMetricsStop {
  /**
   * 线性渐变颜色断点的颜色值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  color: ColorMetrics;

  /**
   * 线性渐变颜色断点的断点值，取值为0~1之间的比例值，如果数据值小于0则置为0，如果数据值大于1则置为1。 
   * 
   * **说明：** 
   * 
   * 如果传入字符串类型且内容为数字，则转换为对应的数值。例如'10vp'转换为10，'10%'转换为0.1。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  offset: Length;
}

/**
 * 滑轨轨道的线性渐变背景颜色。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare class ColorMetricsLinearGradient {
    /**
     * ColorMetricsLinearGradient的构造函数。
     *
     * @param { ColorMetricsStop[] } colorStops - 线性渐变颜色断点数组。每个元素用于描述一个颜色及其在渐变中的断点值。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    constructor(colorStops: ColorMetricsStop[]);
}

/**
 * 支持除触摸热区以外的[通用属性]{@link common}。
 * 
 * 除支持[通用事件]{@link common}外，还支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class SliderAttribute extends CommonMethod<SliderAttribute> {
  /**
   * 设置滑块的颜色。
   * 
   * 当滑块形状设置为SliderBlockType.DEFAULT时，blockColor可设置默认圆形滑块颜色。
   * 
   * 当滑块形状设置为SliderBlockType.IMAGE时，滑块无填充，设置blockColor不生效。
   * 
   * 当滑块形状设置为SliderBlockType.SHAPE时，blockColor可设置自定义形状的填充颜色。
   *
   * @param { ResourceColor } value - 滑块的颜色。 <br/>默认值：`$r('sys.color.ohos_id_color_foreground_contrary')`
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  blockColor(value: ResourceColor): SliderAttribute;
  /**
   * 设置Slider滑块的颜色，支持渐变色。
   * 
   * 当滑块形状设置为SliderBlockType.DEFAULT时，blockColor可设置默认圆形滑块颜色。
   * 
   * 当滑块形状设置为SliderBlockType.IMAGE时，滑块无填充，设置blockColor不生效。
   * 
   * 当滑块形状设置为SliderBlockType.SHAPE时，blockColor可设置自定义形状的填充颜色。
   *
   * @param { ResourceColor | LinearGradient } value - 滑块的颜色。 <br/>默认值：
   *     `$r('sys.color.ohos_id_color_foreground_contrary')`
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 21 dynamic
   */
  blockColor(value: ResourceColor | LinearGradient): SliderAttribute;

  /**
   * 设置滑轨的背景颜色。
   * 
   * 从API version 12开始支持利用LinearGradient设置滑轨的渐变色。
   *
   * @param { ResourceColor } value - 滑轨的背景颜色。<br/>默认值：`$r('sys.color.ohos_id_color_component_normal')`<br/>**说明：** <br/
   *     >1. 设置渐变色时，如果颜色断点颜色值为非法值或渐变色断点为空，渐变色将不起效果。<br/>2. 该接口中的LinearGradient类型不支持在原子化服务中使用。 [since 7 - 11]
   * @param { ResourceColor | LinearGradient } value - 滑轨的背景颜色。<br/>默认值：`$r('sys.color.ohos_id_color_component_normal')`
   *     <br/>**说明：** <br/>1. 设置渐变色时，如果颜色断点颜色值为非法值或渐变色断点为空，渐变色将不起效果。<br/>2. 该接口中的LinearGradient类型不支持在原子化服务中使用。 [since 12]
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  trackColor(value: ResourceColor | LinearGradient): SliderAttribute;

  /**
   * 设置滑轨的已滑动部分颜色。
   *
   * @param { ResourceColor } value - 滑轨的已滑动部分颜色。 <br/>默认值：`$r('sys.color.ohos_id_color_emphasize')`
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  selectedColor(value: ResourceColor): SliderAttribute;
  /**
   * 设置滑轨的已滑动部分颜色。与[selectedColor]{@link SliderAttribute#selectedColor(value: ResourceColor)}相比，新增了LinearGradient类型的支持。
   *
   * @param { ResourceColor | LinearGradient } selectedColor - 滑轨的已滑动部分颜色。<br/>默认值：
   *     `$r('sys.color.ohos_id_color_emphasize')` <br/>**说明：** <br/>设置渐变色时，若颜色断点颜色值为非法值或者渐变色断点为空时，渐变色不起效果。
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  selectedColor(selectedColor: ResourceColor | LinearGradient): SliderAttribute;

  /**
   * 设置最小值。
   * 
   * > **说明：** 
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，建议使用min替代。min是[SliderOptions]{@link SliderOptions}中的属性。
   *
   * @param { string } value - 最小值。
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead min
   */
  minLabel(value: string): SliderAttribute;

  /**
   * 设置最大值。
   * 
   * > **说明：** 
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，建议使用max替代。max是[SliderOptions]{@link SliderOptions}中的属性。
   *
   * @param { string } value - 最大值。
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead max
   */
  maxLabel(value: string): SliderAttribute;

  /**
   * 设置当前是否显示步长刻度值。
   *
   * @param { boolean } value - 当前是否显示步长刻度值。<br/>true：显示刻度值；false：不显示刻度值。<br/>默认值：false
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  showSteps(value: boolean): SliderAttribute;

  /**
   * 设置当前是否显示步长刻度值。
   * 
   * 支持设置每个刻度点的无障碍文本信息，不设置时默认使用当前刻度点的值作为无障碍文本信息。
   * 
   * 当显示步长时，设置的刻度点无障碍文本信息生效。
   *
   * @param { boolean } value - 当前是否显示步长刻度值。<br/>true：显示刻度值；false：不显示刻度值。<br />默认值：false
   * @param { SliderShowStepOptions } [options] - 刻度点无障碍文本的配置选项，用于设置与无障碍功能相关的属性。<br/>默认值：null
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  showSteps(value: boolean, options?: SliderShowStepOptions): SliderAttribute;

  /**
   * 设置滑动时是否显示气泡提示。
   * 
   * 当direction的值为Axis.Horizontal时，tip显示在滑块上方，如果上方空间不够，则在下方显示。当值为Axis.Vertical时，tip显示在滑块左边，如果左边空间不够，则在右边显示。当不设置周边边距或者周边边
   * 距比较小时，tip会被截断。
   * 
   * tip的绘制区域为Slider自身节点的overlay。
   *
   * @param { boolean } value - 滑动时是否显示气泡提示。<br/>true：显示气泡；false：不显示气泡。<br/>默认值：false
   * @param { ResourceStr } content - 气泡提示的文本内容，默认显示当前百分比。<br/> [since 10]
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  showTips(value: boolean, content?: ResourceStr): SliderAttribute;

  /**
   * 设置滑轨的粗细。设置小于等于0的值时，取默认值。
   * 
   * 为保证滑块和滑轨的[SliderStyle]{@link SliderStyle}样式，[blockSize]{@link SliderAttribute#blockSize}跟随trackThickness同比例增减。
   * 
   * 当style为[SliderStyle]{@link SliderStyle}.OutSet时，trackThickness ：[blockSize]{@link SliderAttribute#blockSize} = 1 ：
   * 4，当style为[SliderStyle]{@link SliderStyle}.InSet时，trackThickness ：[blockSize]{@link SliderAttribute#blockSize} = 5 ：
   * 3。
   * 
   * trackThickness或[blockSize]{@link SliderAttribute#blockSize}的大小超过Slider组件的宽度或高度时，取默认值。
   * 
   * 当[SliderStyle]{@link SliderStyle}设置为OutSet时，尽管trackThickness的大小没超过Slider组件的宽度或高度，但是
   * [blockSize]{@link SliderAttribute#blockSize}超过了，取默认值。
   *
   * @param { Length } value - 滑轨的粗细。<br/>默认值：当参数style的值设置[SliderStyle]{@link SliderStyle}.OutSet 时为 4.0vp，
   *     [SliderStyle]{@link SliderStyle}.InSet时为20.0vp。
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  trackThickness(value: Length): SliderAttribute;

  /**
   * Slider拖动或点击时触发事件回调。
   * 
   * Begin和End状态当手势点击时都会触发，Moving和Click状态当value值发生变化时触发。
   * 
   * 当连贯动作为拖动动作时，不触发Click状态。
   *
   * @param { function } callback
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onChange(callback: (value: number, mode: SliderChangeMode) => void): SliderAttribute;

  /**
   * 设置滑块描边颜色。
   * 
   * 当滑块形状设置为SliderBlockType.DEFAULT时，blockBorderColor可设置默认圆形滑块描边颜色。
   * 
   * 当滑块形状设置为SliderBlockType.IMAGE时，滑块无描边，设置blockBorderColor不生效。
   * 
   * 当滑块形状设置为SliderBlockType.SHAPE时，blockBorderColor可设置自定义形状中线的颜色。
   *
   * @param { ResourceColor } value - 滑块描边颜色。<br/>默认值：'#00000000'
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  blockBorderColor(value: ResourceColor): SliderAttribute;

  /**
   * 设置滑块描边粗细。
   * 
   * 当滑块形状设置为SliderBlockType.DEFAULT时，blockBorderWidth可设置默认圆形滑块描边粗细。
   * 
   * 当滑块形状设置为SliderBlockType.IMAGE时，滑块无描边，设置blockBorderWidth不生效。
   * 
   * 当滑块形状设置为SliderBlockType.SHAPE时，blockBorderWidth可设置自定义形状中线的粗细。
   *
   * @param { Length } value - 滑块描边粗细。<br/>**说明：** <br/>设置string类型时，不支持百分比。
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  blockBorderWidth(value: Length): SliderAttribute;

  /**
   * 设置刻度颜色。
   *
   * @param { ResourceColor } value - 刻度颜色。<br/>默认值：<br/>`$r('sys.color.ohos_id_color_foreground')`混合<br/>
   *     `$r('sys.color.ohos_id_alpha_normal_bg')`透明度的颜色
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  stepColor(value: ResourceColor): SliderAttribute;

  /**
   * 设置底板圆角半径。
   *
   * @param { Length } value - 底板圆角半径。<br/>默认值：<br/>style值为SliderStyle.OutSet时默认值为'2vp'。<br/>style值为SliderStyle.InSet时默认
   *     值为'10vp'。<br/>**说明：** <br/>设定值小于0时取默认值。
   * @returns { SliderAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  trackBorderRadius(value: Length): SliderAttribute;

  /**
     * 设置已滑动部分（高亮）圆角半径。
     *
     * @param { Dimension } value - 已选择部分的圆角半径。<br/>默认值：当style值为SliderStyle.InSet或SliderStyle.OutSet时，跟随底板圆角；当style值为
     *     SliderStyle.NONE时，为0。<br/>**说明：** <br/>不支持Percentage类型。设定值小于0时取默认值。
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    selectedBorderRadius(value: Dimension): SliderAttribute;
    /**
     * 设置滑块大小。
     * 
     * 当滑块形状设置为SliderBlockType.DEFAULT时，取宽高的最小值作为圆形半径。
     * 
     * 当滑块形状设置为SliderBlockType.IMAGE时，用于设置图片的尺寸大小，图片采用ObjectFit.Cover策略进行缩放。
     * 
     * 当滑块形状设置为SliderBlockType.SHAPE时，用于设置自定义形状的大小，自定义形状也会采用ObjectFit.Cover策略进行缩放。
     *
     * @param { SizeOptions } value - 滑块大小。<br/>默认值：当参数style的值设置为[SliderStyle]{@link SliderStyle}.OutSet时为{width: 18,
     *     height: 18}，当参数style的值设置为[SliderStyle]{@link SliderStyle}.InSet时为{width: 12, height: 12}，当参数style的值设置为
     *     [SliderStyle]{@link SliderStyle}.NONE时，此字段不生效。<br/>当设置的blockSize的宽高值不相等时，取较小值的尺寸，当设置的宽高值中有一个或两个都小于等于0的时候，取默认
     *     值。
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    blockSize(value: SizeOptions): SliderAttribute;
    /**
     * 设置滑块形状参数。
     *
     * @param { SliderBlockStyle } value - 滑块形状参数。<br/>默认值：SliderBlockType.DEFAULT，滑块形状为圆形。
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    blockStyle(value: SliderBlockStyle): SliderAttribute;
    /**
     * 设置刻度大小（直径）。当值为0时，刻度点不显示，当值小于0时，取默认值。
     *
     * @param { Length } value - 刻度大小（直径）。 <br/>默认值：'4vp'<br/>取值范围：
     *     [0, [trackThickness]{@link SliderAttribute#trackThickness})
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    stepSize(value: Length): SliderAttribute;
    /**
     * 设置用户与滑动条组件交互方式。
     *
     * @param { SliderInteraction } value - 用户与滑动条组件交互方式。 <br /> 默认值：SliderInteraction.SLIDE_AND_CLICK。
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    sliderInteractionMode(value: SliderInteraction): SliderAttribute;
    /**
     * 设置滑动响应的最小距离。
     *
     * @param { number } value - 设置滑动响应的最小距离，滑动超过此距离后滑块才开始滑动。<br/>默认值：0<br/>**说明：** <br/>单位与
     *     [SliderOptions]{@link SliderOptions}中的属性min以及属性max一致。<br/>当value小于0、大于max-min或非法值时，取默认值。
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    minResponsiveDistance(value: number): SliderAttribute;
    /**
     * 定制Slider内容区的方法。
     *
     * @param { ContentModifier<SliderConfiguration> } modifier - 在Slider组件上，定制内容区的方法。<br/>ContentModifier：内容修改器，开发者需要自定
     *     义class实现ContentModifier接口。
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    contentModifier(modifier: ContentModifier<SliderConfiguration>): SliderAttribute;
    /**
     * 设置有效滑动区间。
     *
     * @param { SlideRange } value - 设置有效滑动区间
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    slideRange(value: SlideRange): SliderAttribute;
    /**
     * 设置旋转表冠的灵敏度。
     * 
     * > **说明：**
     * >
     * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
     *
     * @param { Optional<CrownSensitivity> } sensitivity - 旋转表冠的灵敏度。<br />默认值：CrownSensitivity.MEDIUM
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): SliderAttribute;
    /**
     * 设置是否开启触控反馈。
     * 
     * 开启触控反馈时，需要在工程的[module.json5](docroot://quick-start/module-configuration-file.md)中配置requestPermissions字段开启振动权限，配置如
     * 下：
     *
     * @param { boolean } enabled - 设置是否开启触控反馈。<br/>true：开启触控反馈；false：不开启触控反馈。<br/>默认值：true
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @atomicservice
     * @since 18 dynamic
     */
    enableHapticFeedback(enabled: boolean): SliderAttribute;
    /**
     * 设置滑动条的前缀。
     *
     * @param { ComponentContent } content - 自定义组件内容，用于定义滑块前缀的可视化内容，该内容会显示在滑块的起始位置。
     * @param { SliderPrefixOptions } [options] - 滑块前缀的配置选项，用于设置与无障碍功能相关的属性。 <br/>默认值：null
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    prefix(content: ComponentContent, options?: SliderPrefixOptions): SliderAttribute;
    /**
     * 设置滑动条的后缀。
     *
     * @param { ComponentContent } content - 自定义组件内容，用于定义滑块后缀的可视化内容，该内容会显示在滑块的结束位置。
     * @param { SliderSuffixOptions } [options] - 滑块后缀的配置选项，用于设置与无障碍功能相关的属性。 <br/>默认值：null
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    suffix(content: ComponentContent, options?: SliderSuffixOptions): SliderAttribute;

    /**
     * 设置滑轨轨道的线性渐变背景颜色。
     *
     * @param { ColorMetricsLinearGradient } color - 滑轨轨道的线性渐变背景颜色。<br/>设置渐变色时，如果color的值为undefined，渐变色设置无效，轨道背景颜色默认取值为：
     *     `$r('sys.color.ohos_id_color_component_normal')`。
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 23 dynamic
     */
    trackColorMetrics(color: ColorMetricsLinearGradient): SliderAttribute;
}

/**
 * 滑动条组件，通常用于快速调节设置值，如音量调节、亮度调节等应用场景。
 * 
 * > **说明：**
 * 
 * ###### 子组件
 * 
 * 无
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const Slider: SliderInterface;

/**
 * Defines Slider Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop [since 11]
 */
declare const SliderInstance: SliderAttribute;