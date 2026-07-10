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

/**
 * UIPickerComponent容器的参数说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface UIPickerComponentOptions {

  /**
   * 选中项的索引值。
   *
   * 取值范围：[0, 子组件的个数-1]内的整数。不在取值范围内时，使用默认值；设置小数时，使用向下取整后的整数。
   *
   * 默认值：0
   * 
   * 说明：
   * 
   * - 统计子组件的个数时，不包含Row容器内的子组件，Row容器及其子组件共同视为1个子组件。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  selectedIndex?: number;
}

/**
 * UIPickerComponent容器是用于实现用户选择操作的组件。它支持从一组有限的选项中让用户进行单选，可应用于时间选择、日期选择、
 * 地区选择、状态选择等多种场景。UIPickerComponent容器的显示效果为立体滚轮样式，支持选项按需定制，包括文本类型、图片类型
 * 和图文组合类型。
 * 
 * 说明：
 * 
 * - UIPickerComponent容器默认选项行高为40vp，默认显示7个选项。可通过
 *   [itemHeight]{@link UIPickerComponentAttribute#itemHeight}和
 *   [displayedItemCount]{@link UIPickerComponentAttribute#displayedItemCount}属性进行配置。
 *   由于显示效果为立体滚轮样式，因此除选中项外的其他选项会进行不同角度的旋转，实际的可视高度会小于选项行高。
 *
 * - UIPickerComponent容器的[height]{@link CommonMethod#height(value: Length)}建议设置为200vp。当设置的高度大于等于
 *   该建议值时，可完整显示默认的7个选项；若通过[displayedItemCount]{@link UIPickerComponentAttribute#displayedItemCount}或
 *   [itemHeight]{@link UIPickerComponentAttribute#itemHeight}配置了更多可见项或更大选项高度，建议相应增大组件高度。
 *   设置高度小于建议值时，显示范围会从上下边缘向中间裁剪，可显示的选项数量也会相应减少，始终保持选中项垂直居中。
 *
 * - 当UIPickerComponent容器未设置[width]{@link CommonMethod#width(value: Length)}时，取当前视图中可见子组件的最大宽度作为容
 *   器宽度。建议为UIPickerComponent容器设置宽度，或为每个子组件设置相同宽度，以避免滑动过程中容器宽度动态发生变化，影响显示效果。
 *
 * - UIPickerComponent容器的子组件的对齐方式固定为居中对齐，不支持通过[align]{@link CommonMethod#align(value: Alignment)}属性
 *   改变子组件的对齐方式。
 *
 * - UIPickerComponent容器当前不支持智能手表设备。
 *
 * - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
interface UIPickerComponentInterface {

  /**
   * 创建UIPickerComponent容器，其选中项由options参数中的selectedIndex属性值决定。
   *
   * @param { UIPickerComponentOptions } [options] - 配置UIPickerComponent容器的参数。参数缺省时组件占位，但内容显示为空。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  (options?: UIPickerComponentOptions): UIPickerComponentAttribute;
}

/**
 * 定义[onChange]{@link UIPickerComponentAttribute#onChange}和
 * [onScrollStop]{@link UIPickerComponentAttribute#onScrollStop}事件的回调类型。
 *
 * 取值范围：[0, 子组件的个数-1]内的整数。
 *
 * @param { number } selectedIndex - 当前选中项的索引值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare type OnUIPickerComponentCallback = (selectedIndex: number) => void;

/**
 * 设置选中项指示器的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare enum PickerIndicatorType {

  /**
   * 通过给选中项添加背景，标识选中项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  BACKGROUND = 0,

  /**
   * 通过在选中项的上下边缘添加分割线，标识选中项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  DIVIDER = 1
}

/**
 * 选中项指示器样式的参数说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface PickerIndicatorStyle {

  /**
   * 选中项指示器的类型。
   * 
   * 默认值：PickerIndicatorType.BACKGROUND
   * 
   * 当type的值为小数时，使用向下取整后的整数；当type的值不在PickerIndicatorType枚举范围内时，使用默认值。
   *
   * @default PickerIndicatorType.BACKGROUND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  type: PickerIndicatorType;

  /**
   * 分割线的线宽。
   * 
   * 默认值：2.0px
   * 
   * 单位：与LengthMetrics一致。
   * 
   * 取值范围：[0, 选中项高度的一半（即20vp）]。strokeWidth小于0或大于选中项高度的一半时使用默认值。不支持“百分比”类型。
   * 
   * 说明：
   * 
   * 1. 当type为PickerIndicatorType.DIVIDER时生效。
   * 2. 通过LengthMetrics.resource方式设置时，使用非长度属性的值会按照0vp处理。
   *
   * @default 2.0px
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  strokeWidth?: LengthMetrics;

  /**
   * 分割线的颜色。
   * 
   * 默认值：'sys.color.comp_divider'
   * 
   * 说明：
   * 
   * 当type为PickerIndicatorType.DIVIDER时生效。
   *
   * @default $r('sys.color.comp_divider')
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  dividerColor?: ResourceColor;

  /**
   * 分割线与UIPickerComponent容器侧边起始端的距离。
   * 
   * 默认值：0
   * 
   * 单位：与LengthMetrics一致。
   * 
   * 取值范围：startMargin与endMargin之和不得超过UIPickerComponent容器的宽度。设置小于0或startMargin与endMargin之和超过
   * UIPickerComponent容器的宽度时，使用默认值。不支持“百分比”类型。
   * 
   * 说明：
   * 
   * 当type为PickerIndicatorType.DIVIDER时生效。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  startMargin?: LengthMetrics;

  /**
   * 分割线与UIPickerComponent容器侧边结束端的距离。
   * 
   * 默认值：0
   * 
   * 单位：与LengthMetrics一致。
   * 
   * 取值范围：startMargin与endMargin之和不得超过UIPickerComponent容器的宽度。设置小于0或startMargin与endMargin之和超过
   * UIPickerComponent容器的宽度时，使用默认值。不支持“百分比”类型。
   * 
   * 说明：
   * 
   * 当type为PickerIndicatorType.DIVIDER时生效。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  endMargin?: LengthMetrics;

  /**
   * 选中项背景的颜色。
   * 
   * 默认值：'sys.color.comp_background_tertiary'
   * 
   * 说明：
   * 
   * 当type为PickerIndicatorType.BACKGROUND时生效。
   *
   * @default 'sys.color.comp_background_tertiary'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  backgroundColor?: ResourceColor;

  /**
   * 选中项背景的边框圆角半径。
   * 
   * 默认值：{ value:12, unit:LengthUnit.vp }，即四个圆角半径均为12vp。
   * 
   * 取值范围：取选中项的宽和高之中较小的边长为x，最大不超过x的一半。当取值小于0时，使用默认值；当取值大于最大值时，使用最大值。
   * 
   * 说明：
   * 
   * 1. 当type为PickerIndicatorType.BACKGROUND时生效。
   * 2. [LengthMetrics]{@link ../../../arkui/Graphics:LengthMetrics}：统一设置四个圆角半径的大小和单位。
   * 3. [BorderRadiuses]{@link BorderRadiuses}：单独设置四个圆角半径的大小（单位为vp）。
   * 4. [LocalizedBorderRadiuses]{@link LocalizedBorderRadiuses}：单独设置四个圆角半径的大小和单位。
   *
   * @default { value:12, unit:LengthUnit.vp }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  borderRadius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;
}

/**
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 * 
 * 除支持[通用事件]{@link ./common}外，还支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare class UIPickerComponentAttribute extends CommonMethod<UIPickerComponentAttribute> {

  /**
   * 滑动选择器选项时，若选中项发生变化，触发该事件。
   *
   * 说明：
   *
   * - 如果某个选项有一半以上的区域进入选中项区域内，则该选项成为选中项。
   *
   * - 选中项区域可通过设置[selectionIndicator]{@link UIPickerComponentAttribute#selectionIndicator}进行标识。
   *   如果设置选中项指示器为背景，则背景区域即为选中项区域。如果设置选中项指示器为分割线，则上下分割线的中心线内的区域
   *   为选中项区域。
   *
   * @param { Optional<OnUIPickerComponentCallback> } callback - 当选中项发生变化时触发的回调函数。
   *      当callback的值为undefined时，不使用回调函数。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onChange(callback: Optional<OnUIPickerComponentCallback>): UIPickerComponentAttribute;

  /**
   * 选择器滑动停止时，触发该事件。选择器滑动停止指某次行为触发的滑动动画完全结束。如果某次滑动动画还未结束时又触发了新的滑动动画，
   * 则不属于滑动停止。
   *
   * @param { Optional<OnUIPickerComponentCallback> } callback - 当选择器滑动停止时触发的回调函数。
   *      当callback的值为undefined时，不使用回调函数。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onScrollStop(callback: Optional<OnUIPickerComponentCallback>): UIPickerComponentAttribute;

  /**
   * 设置选项列是否可循环滚动。
   *
   * - true：可循环滚动。
   * - false：不可循环滚动。
   *
   * 默认值：true。当isLoop的值为undefined时，使用默认值。
   * 如果子组件的个数小于8个，无论isLoop设置为true还是false，都不会循环滚动。
   *
   * @param { Optional<boolean> } isLoop - 是否可循环滚动。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  canLoop(isLoop: Optional<boolean>): UIPickerComponentAttribute;

  /**
   * 设置是否开启触控反馈。
   * 
   * 开启触感反馈时，需要在工程的src/main/module.json5文件的"module"内配置requestPermissions字段开启振动权限。
   *
   * - true：开启触控反馈。
   * - false：不开启触控反馈。
   *
   * 默认值：true
   * 当enable的值为undefined时，使用默认值。开启后，是否存在触控反馈取决于系统硬件支持情况。
   *
   * @param { Optional<boolean> } enable - 设置是否开启触控反馈。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  enableHapticFeedback(enable: Optional<boolean>): UIPickerComponentAttribute;

  /**
   * 设置选中项指示器的样式。
   *
   * 默认值： { type: PickerIndicatorType.BACKGROUND, borderRadius: { value: 12, unit: LengthUnit.vp },
   * backgroundColor: 'sys.color.comp_background_tertiary' }
   * 当style的值为undefined时，使用默认值。
   *
   * @param { Optional<PickerIndicatorStyle> } style - 选中项指示器的样式。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  selectionIndicator(style: Optional<PickerIndicatorStyle>): UIPickerComponentAttribute;

  /**
   * 设置UIPickerComponent容器每个选项的高度。未通过该接口设置时，每个选项的高度为40vp。
   *
   * 单位：与[LengthMetrics]{@link Graphics:LengthMetrics}一致。
   *
   * 取值范围：[40vp, 64vp]
   *
   * 默认值：40vp
   * 设置小于40vp或大于64vp时，使用默认值40vp。当height的值为undefined时，使用默认值40vp。不支持“百分比”类型。
   *
   * @param { Optional<LengthMetrics> } height - 选项高度。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  itemHeight(height: Optional<LengthMetrics>): UIPickerComponentAttribute;

  /**
   * 设置UIPickerComponent容器可见选项的数量。未通过该接口设置时，可见选项的数量为7行。
   *
   * 取值范围：[2, 9]内的整数。
   *
   * 默认值：7
   *
   * 设置小数时，使用向下取整后的整数。设置偶数时，自动转为不小于该值的奇数（例如2变为3、8变为9）。
   * 设置不在取值范围内时，使用默认值7行。
   * 当count的值为undefined时，使用默认值7行。
   *
   * @param { Optional<int> } count - 可见选项数量。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  displayedItemCount(count: Optional<int>): UIPickerComponentAttribute;
}

/**
 * UIPickerComponent容器是用于实现用户选择操作的组件。它支持从一组有限的选项中让用户进行单选，可应用于时间选择、日期选择、地区选
 * 择、状态选择等多种场景。UIPickerComponent容器的显示效果为立体滚轮样式，支持选项按需定制，包括文本类型、图片类型和图文组合类型。
 * 
 * 说明：
 *
 * - UIPickerComponent容器默认选项行高为40vp，默认显示7个选项。可通过
 *   [itemHeight]{@link UIPickerComponentAttribute#itemHeight}和
 *   [displayedItemCount]{@link UIPickerComponentAttribute#displayedItemCount}属性进行配置。由于显示效果为立体滚轮样式，
 *   因此除选中项外的其他选项会进行不同角度的旋转，实际的可视高度会小于选项行高。
 *
 * - UIPickerComponent容器的[height]{@link CommonMethod#height(value: Length)}建议设置为200vp。当设置的高度大于等于
 *   该建议值时，可完整显示默认的7个选项；若通过[displayedItemCount]{@link UIPickerComponentAttribute#displayedItemCount}或
 *   [itemHeight]{@link UIPickerComponentAttribute#itemHeight}配置了更多可见项或更大选项高度，建议相应增大组件高度。
 *   设置高度小于建议值时，显示范围会从上下边缘向中间裁剪，可显示的选项数量也会相应减少，始终保持选中项垂直居中。
 *
 * - 当UIPickerComponent容器未设置[width]{@link CommonMethod#width(value: Length)}时，取当前视图中可见子组件的最大宽度作为容
 *   器宽度。建议为UIPickerComponent容器设置宽度，或为每个子组件设置相同宽度，以避免滑动过程中容器宽度动态发生变化，影响显示效果。
 *
 * - UIPickerComponent容器的子组件的对齐方式固定为居中对齐，不支持通过[align]{@link CommonMethod#align(value: Alignment)}属性
 *   改变子组件的对齐方式。
 *
 * - UIPickerComponent容器当前不支持智能手表设备。
 *
 * - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。
 * 
 * 组件
 * 
 * - 支持多个子组件。
 * - 支持子组件类型：[Text]{@link text}、[Image]{@link image}、[Row]{@link row}和[SymbolGlyph]{@link symbolglyph}。
 * - 支持渲染控制类型：[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)和
 * [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)。
 * 
 * 说明：
 *
 * - 开发者在使用Row容器作为子组件时，Row容器中仅支持包含Text、Image、SymbolGlyph基础组件，包含其他容器组件可能会影响显示效果
 *   或滑动功能异常。
 *
 * - 统计子组件的个数时，不包含Row容器内的子组件，Row容器及其子组件共同视为1个子组件。
 *
 * - 子组件为Text、Image、SymbolGlyph时，[height]{@link CommonMethod#height(value: Length)}属性不生效，固定为40vp。
 *
 * - 子组件为Row容器时，Row容器的[height]{@link CommonMethod#height(value: Length)}属性不生效，固定为40vp，Row容器内的子组件
 *  [height]{@link CommonMethod#height(value: Length)}属性能正常生效，最终显示效果由Row容器决定。
 *
 * - 图文组合类型选项需要使用Row容器包含图片和文本组件。使用图文组合类型选项时，
 *   建议将图片的[height]{@link CommonMethod#height(value: Length)}设置为40vp及以下，避免图片较大时被裁剪。
 *
 * - UIPickerComponent容器内所有文本组件（包括Row容器内的文本组件）的fontSize属性默认为20fp。用户设置将覆盖默认值，设置异常值时
 *   以文本组件[fontSize]{@link TextAttribute#fontSize}处理的结果为准。建议统一设置或不设置fontSize以保证良好的显示效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare const UIPickerComponent: UIPickerComponentInterface;

/**
 * 定义UIPickerComponent组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare const UIPickerComponentInstance: UIPickerComponentAttribute;