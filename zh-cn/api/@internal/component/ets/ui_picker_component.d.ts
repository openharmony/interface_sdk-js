/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
   * 选中项的索引值，用于指定初始选中的选项。
   * 
   * > 取值范围：[0, 子组件的个数-1]内的整数。不在取值范围内时，使用默认值；设置小数时，使用向下取整后的整数。
   * 
   * > 默认值：0。当需要组件初始显示特定选项时传入此参数。
   * 
   * > **说明：**
   * >
   * > 统计子组件的个数时，不包含Row容器内的子组件，Row容器及其子组件共同视为1个子组件。
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
 * UIPickerComponent容器是用于实现用户选择操作的组件。它支持从一组有限的选项中让用户进行单选，采用立体滚轮样式提供直观的视觉反馈和流畅的滑动
 * 体验。该组件支持选项按需定制，包括文本类型、图片类型和图文组合类型，可根据业务需求提供更丰富的信息展示，可广泛应用于时间选择、日期选择、地区选
 * 择、状态选择等多种场景。
 * 
 * > **说明：**
 * >
 * > - UIPickerComponent容器默认选项行高为40vp，默认显示7个选项。可通过[itemHeight]{@link UIPickerComponentAttribute#itemHeight}
 * > 和[displayedItemCount]{@link UIPickerComponentAttribute#displayedItemCount}属性进行配置。由于显示效果为立体滚轮样式，因此除
 * > 选中项外的其他选项会进行不同角度的旋转，实际的可视高度会小于选项行高。
 * >
 * > - UIPickerComponent容器的[height]{@link CommonMethod#height(value: Length)}建议设置为200vp。当设置的高度大于等于该建议值时，
 * > 可完整显示默认的7个选项；若通过[displayedItemCount]{@link UIPickerComponentAttribute#displayedItemCount}或
 * > [itemHeight]{@link UIPickerComponentAttribute#itemHeight}配置了更多可见项或更大选项高度，建议相应增大组件高度。设置高度小于建议
 * > 值时，显示范围会从上下边缘向中间裁剪，可显示的选项数量也会相应减少，始终保持选中项垂直居中。
 * >
 * > - 当UIPickerComponent容器未设置[width]{@link CommonMethod#width(value: Length)}时，取当前视图中可见子组件的最大宽度作为容器宽
 * > 度。建议为UIPickerComponent容器设置宽度，或为每个子组件设置相同宽度，以避免滑动过程中容器宽度动态发生变化，影响显示效果。
 * >
 * > - UIPickerComponent容器的子组件的对齐方式固定为居中对齐，不支持通过[align]{@link CommonMethod#align(value: Alignment)}属性改
 * > 变子组件的对齐方式。
 * >
 * > - UIPickerComponent容器当前不支持智能手表设备。开发者可通过deviceInfo.deviceType获取设备类型，判断是否为智能手表设备。
 * >
 * > - 该组件从API版本26.0.0开始支持[WithTheme]{@link ./with_theme}。
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
   * @param { UIPickerComponentOptions } [options] - 配置UIPickerComponent容器的参数，用于自定义初始选中项等配置。参数缺省时组件占
   *     位，但内容显示为空。当需要设置初始选中项时传入此参数。
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
 * @param { number } selectedIndex - 当前选中项的索引值。
 *     <br>取值范围：[0, 子组件的个数-1]内的整数。
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
   * > 默认值：PickerIndicatorType.BACKGROUND
   * 
   * > type的值为小数时，使用向下取整后的整数；当type的值不在PickerIndicatorType枚举范围内时，使用默认值。
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
   * > 默认值：{ value: 2.0, unit: LengthUnit.px }
   * 
   * > 单位：与LengthMetrics一致。
   * 
   * > 取值范围：[0, 选中项高度的一半]。strokeWidth小于0或大于选中项高度的一半时使用默认值。注：选中项高度可通过itemHeight属性设置，默认为
   * > 40vp，此时取值范围上限为20vp；当itemHeight设置为其他值时，上限相应变化。不支持“百分比”类型。
   * 
   * > **说明：**
   * >
   * > 1. 当type为PickerIndicatorType.DIVIDER时生效。
   * > 2. 通过LengthMetrics.resource方式设置时，使用非长度属性的值会按照0vp处理。
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
   * > 默认值：'sys.color.comp_divider'
   * 
   * > **说明：**
   * >
   * > 当type为PickerIndicatorType.DIVIDER时生效。
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
   * > 默认值：0
   * 
   * > 单位：与LengthMetrics一致。
   * 
   * > 取值范围：startMargin与endMargin之和不得超过UIPickerComponent容器的宽度。设置小于0或startMargin与endMargin之和超过
   * UIPickerComponent容器的宽度时，使用默认值。不支持“百分比”类型。
   * 
   * > **说明：**
   * >
   * > 当type为PickerIndicatorType.DIVIDER时生效。
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
   * > 默认值：0
   * 
   * > 单位：与LengthMetrics一致。
   * 
   * > 取值范围：startMargin与endMargin之和不得超过UIPickerComponent容器的宽度。设置小于0或startMargin与endMargin之和超过
   * UIPickerComponent容器的宽度时，使用默认值。不支持“百分比”类型。
   * 
   * > **说明：**
   * >
   * > 当type为PickerIndicatorType.DIVIDER时生效。
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
   * > 默认值：'sys.color.comp_background_tertiary'
   * 
   * > **说明：**
   * >
   * > 当type为PickerIndicatorType.BACKGROUND时生效。
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
   * > 默认值：{ value:12, unit:LengthUnit.vp }，即四个圆角半径均为12vp。
   * 
   * > 取值范围：取选中项的宽和高之中较小的边长为x，最大不超过x的一半。当取值小于0时，使用默认值；当取值大于最大值时，使用最大值。
   * 
   * > **说明：**
   * >
   * > 1. 当type为PickerIndicatorType.BACKGROUND时生效。
   * > 2. [LengthMetrics]{@link ../../../arkui/Graphics:LengthMetrics}：统一设置四个圆角半径的大小和单位。
   * > 3. [BorderRadiuses]{@link BorderRadiuses}：单独设置四个圆角半径的大小（单位为vp）。
   * > 4. [LocalizedBorderRadiuses]{@link LocalizedBorderRadiuses}：单独设置四个圆角半径的大小和单位。
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
   * 滑动选择器选项时，若选中项发生变化，触发该事件。适用于需要在选中项变化时实时更新界面、加载对应数据或执行相关逻辑的场景。
   * 
   * > **说明：**
   * >
   * > - 如果某个选项有一半以上的区域进入选中项区域内，则该选项成为选中项。
   * >
   * > - 选中项区域可通过设置[selectionIndicator]{@link UIPickerComponentAttribute#selectionIndicator}进行标识。
   * > 如果设置选中项指示器为背景，则背景区域即为选中项区域。如果设置选中项指示器为分割线，则上下分割线的中心线内的区域为选中项区域。
   *
   * @param { Optional<OnUIPickerComponentCallback> } callback - 当选中项发生变化时触发的回调函数。
   *     <br>当callback的值为undefined时，不使用回调函数。
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
   * 则不属于滑动停止。适用于需要在滑动结束后提交最终选择结果、停止加载动画或执行一次性回调的场景。
   * 
   * > **说明：**
   * >
   * > **onChange与onScrollStop的差异：**
   * >
   * > - **触发时机**：onChange在选中项发生变化时立即触发；onScrollStop在滑动动画完全停止后触发。
   * >
   * > - **触发频率**：连续滑动过程中，onChange可能多次触发（每次选中项变化都会触发）；onScrollStop只在滑动停止时触发一次。
   * >
   * > - **使用场景**：onChange适用于需要实时响应的场景（如实时显示选中内容、联动更新其他组件）；onScrollStop适用于需要最终确认的场景
   * > （如提交最终选择结果、保存数据）。
   * >
   * > - **两者关系**：一次完整的滑动操作可能先后触发这两个事件，可根据实际需求同时使用或选择使用。
   *
   * @param { Optional<OnUIPickerComponentCallback> } callback - 当选择器滑动停止时触发的回调函数。当callback的值为undefined时，
   * 不使用回调函数。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  onScrollStop(callback: Optional<OnUIPickerComponentCallback>): UIPickerComponentAttribute;

  /**
   * 设置选项列是否可循环滚动。选项数量较多且需要无限滚动浏览时，可开启循环；选项较少或需要限制选择范围时，可关闭循环。
   *
   * @param { Optional<boolean> } isLoop - 是否可循环滚动。
   *     <br>- true：可循环滚动。
   *     <br>- false：不可循环滚动。
   *     <br>默认值：true
   *     <br>当isLoop的值为undefined时，使用默认值。
   *     <br>当子组件个数小于或等于可见选项数量
   *    （由[displayedItemCount]{@link UIPickerComponentAttribute#displayedItemCount}设置，默认为7）时，无论isLoop设置为true
   *     还是false，都不会循环滚动。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  canLoop(isLoop: Optional<boolean>): UIPickerComponentAttribute;

  /**
   * 设置是否开启触控反馈。在需要增强用户交互体验的场景可开启触控反馈。
   * 
   * 开启触控反馈时，需要在工程的src/main/module.json5文件的"module"内配置requestPermissions字段开启振动权限，配置如下：
   * >
   * > "requestPermissions": [{"name": "ohos.permission.VIBRATE"}]
   *
   * @param { Optional<boolean> } enable - 设置是否开启触控反馈。
   *     <br>- true：开启触控反馈。
   *     <br>- false：不开启触控反馈。
   *     <br>默认值：true
   *     <br>当enable的值为undefined时，使用默认值。
   *     <br>开启后，是否存在触控反馈取决于系统硬件支持情况。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 22 dynamic
   */
  enableHapticFeedback(enable: Optional<boolean>): UIPickerComponentAttribute;

  /**
   * 设置选中项指示器的样式。需要突出显示选中区域时使用背景指示器，需要简洁轻量标识时使用分割线指示器。
   *
   * @param { Optional<PickerIndicatorStyle> } style - 选中项指示器的样式。
   *     <br>默认值：
   *     <br>{
   *     <br>type: PickerIndicatorType.BACKGROUND,
   *     <br>borderRadius: {
   *     <br>value:12,
   *     <br>unit:LengthUnit.vp
   *     <br>},
   *     <br>backgroundColor: 'sys.color.comp_background_tertiary'
   *     <br>}
   *     <br>当style的值为undefined时，使用默认值。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  selectionIndicator(style: Optional<PickerIndicatorStyle>): UIPickerComponentAttribute;

  /**
   * 设置UIPickerComponent容器每个选项的高度。未通过该接口设置时，每个选项的高度为40vp。选项内容较多或需要更大字体显示时可增大高度以避免内容
   * 裁剪，选项内容简洁或需要紧凑显示时可减小高度。此属性与
   * [displayedItemCount]{@link UIPickerComponentAttribute#displayedItemCount}共同影响组件的显示效果，建议结合组件
   * [height]{@link CommonMethod#height(value: Length)}属性进行调整以保证完整显示。
   *
   * @param { Optional<LengthMetrics> } height - 选项高度。
   *     <br>单位：与[LengthMetrics]{@link ../../../arkui/Graphics:LengthMetrics}一致。
   *     <br>取值范围：[40vp, 64vp]
   *     <br>设置小于40vp或大于64vp时，使用默认值40vp。
   *     <br>当height的值为undefined时，使用默认值40vp。
   *     <br>不支持“百分比”类型。
   * @returns { UIPickerComponentAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  itemHeight(height: Optional<LengthMetrics>): UIPickerComponentAttribute;
  /**
   * 设置UIPickerComponent容器可见选项的数量。未通过该接口设置时，可见选项的数量为7行。需要节省空间时减少可见项数量，需要提供更多预览信息时
   * 增加可见项数量。此属性与[itemHeight]{@link UIPickerComponentAttribute#itemHeight}共同影响组件的显示效果，建议结合组件
   * [height]{@link CommonMethod#height(value: Length)}属性进行调整以保证完整显示。
   *
   * @param { Optional<int> } count - 可见选项数量。
   *     <br>取值范围：[2, 9]内的整数。
   *     <br>设置小数时，使用向下取整后的整数。
   *     <br>设置偶数时，自动转为大于该值的奇数（例如2变为3、8变为9）。
   *     <br>设置不在取值范围内时，使用默认值7行。
   *     <br>当count的值为undefined时，使用默认值7行。
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
 * UIPickerComponent容器是用于实现用户选择操作的组件。它支持从一组有限的选项中让用户进行单选，采用立体滚轮样式提供直观的视觉反馈和流畅的滑动
 * 体验。该组件支持选项按需定制，包括文本类型、图片类型和图文组合类型，可根据业务需求提供更丰富的信息展示，可广泛应用于时间选择、日期选择、地区选
 * 择、状态选择等多种场景。
 * 
 * > **说明：**
 * >
 * > - UIPickerComponent容器默认选项行高为40vp，默认显示7个选项。可通过[itemHeight]{@link UIPickerComponentAttribute#itemHeight}
 * > 和[displayedItemCount]{@link UIPickerComponentAttribute#displayedItemCount}属性进行配置。由于显示效果为立体滚轮样式，因此除
 * > 选中项外的其他选项会进行不同角度的旋转，实际的可视高度会小于选项行高。
 * >
 * > - UIPickerComponent容器的[height]{@link CommonMethod#height(value: Length)}建议设置为200vp。当设置的高度大于等于该建议值时，
 * > 可完整显示默认的7个选项；若通过[displayedItemCount]{@link UIPickerComponentAttribute#displayedItemCount}或
 * > [itemHeight]{@link UIPickerComponentAttribute#itemHeight}配置了更多可见项或更大选项高度，建议相应增大组件高度。设置高度小于建议
 * > 值时，显示范围会从上下边缘向中间裁剪，可显示的选项数量也会相应减少，始终保持选中项垂直居中。
 * >
 * > - 当UIPickerComponent容器未设置[width]{@link CommonMethod#width(value: Length)}时，取当前视图中可见子组件的最大宽度作为容器宽
 * > 度。建议为UIPickerComponent容器设置宽度，或为每个子组件设置相同宽度，以避免滑动过程中容器宽度动态发生变化，影响显示效果。
 * >
 * > - UIPickerComponent容器的子组件的对齐方式固定为居中对齐，不支持通过[align]{@link CommonMethod#align(value: Alignment)}属性改
 * > 变子组件的对齐方式。
 * >
 * > - UIPickerComponent容器当前不支持智能手表设备。开发者可通过deviceInfo.deviceType获取设备类型，判断是否为智能手表设备。
 * >
 * > - 该组件从API版本26.0.0开始支持[WithTheme]{@link ./with_theme}。
 * 
 * > ###### 子组件
 * >
 * > - 支持多个子组件。
 * > - 支持子组件类型：[Text]{@link ./text}、[Image]{@link ./image}、[Row]{@link ./row}和[SymbolGlyph]{@link ./symbolglyph}。
 * > - 支持渲染控制类型：[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)和
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)。
 * 
 * > **说明：**
 * >
 * > - 开发者在使用Row容器作为子组件时，Row容器中仅支持包含Text、Image、SymbolGlyph基础组件，
 * > 包含其他容器组件可能会影响显示效果或滑动功能异常。
 * >
 * > - 统计子组件的个数时，不包含Row容器内的子组件，Row容器及其子组件共同视为1个子组件。
 * >
 * > - 子组件为Text、Image、SymbolGlyph时，[height]{@link CommonMethod#height(value: Length)}属性不生效，实际高度由
 * > [itemHeight]{@link UIPickerComponentAttribute#itemHeight}属性决定（默认40vp）。子组件内容会在选项区域内显示。
 * >
 * > - 子组件为Row容器时，Row容器的[height]{@link CommonMethod#height(value: Length)}属性不生效，实际高度由
 * > [itemHeight]{@link UIPickerComponentAttribute#itemHeight}属性决定（默认40vp）。Row容器内的子组件
 * > [height]{@link CommonMethod#height(value: Length)}属性能正常生效，最终显示效果由Row容器决定。
 * >
 * > - 图文组合类型选项需要使用Row容器包含图片和文本组件。使用图文组合类型选项时，
 * > 建议将图片的[height]{@link CommonMethod#height(value: Length)}设置为40vp及以下，避免图片较大时被裁剪。
 * >
 * > - UIPickerComponent容器内所有文本组件（包括Row容器内的文本组件）的fontSize属性默认为20fp。用户设置将覆盖默认值，
 * > 设置异常值时以文本组件[fontSize]{@link TextAttribute#fontSize}处理的结果为准。建议统一设置或不设置fontSize以保证良好的显示效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare const UIPickerComponent: UIPickerComponentInterface;

/**
 * 定义UIPickerComponent容器实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare const UIPickerComponentInstance: UIPickerComponentAttribute;