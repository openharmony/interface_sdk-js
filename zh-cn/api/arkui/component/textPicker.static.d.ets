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
 */
import { VoidCallback, Resource, ResourceColor, Offset, Dimension, ResourceStr, BorderRadiuses, LocalizedBorderRadiuses } from "./units";
import { CommonMethod, PickerTextStyle, PickerDialogButtonStyle, Rectangle, BlurStyle, ShadowOptions, ShadowStyle, HoverModeAreaType, BackgroundBlurStyleOptions, BackgroundEffectOptions, Callback, Bindable, BindableResourceStr, BindableResourceStrArray, DistortionMode, EdgeLightMode, SystemUiMaterial } from './common';
import { DialogAlignment } from "./alertDialog";
import { CrownSensitivity, TextOverflow } from "./enums";
import { LengthMetrics } from './../Graphics';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier } from "./common";

/**
 * 单列数据选择器的数据选项内容。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextPickerRangeContent {
    /**
     * 图片资源。 icon是string类型时，表示图片存放的路径，例如"/common/hello.png"。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    icon: string | Resource;
    /**
     * 文本信息。
     * 
     * 默认值：空字符串
     * 
     * **说明**：当文本长度大于列宽时，文本被截断。
     *
     * @default ""
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    text?: string | Resource;
}
/**
 * 多列联动数据选择器的数据选项内容。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextCascadePickerRangeContent {
    /**
     * 文本信息。
     * 
     * **说明**：当文本长度大于列宽时，文本被截断。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    text: string | Resource;
    /**
     * 联动数据。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    children?: TextCascadePickerRangeContent[];
}
/**
 * 文本选择器的参数说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextPickerOptions {
    /**
     * 选择器的数据选择列表。不可设置为空数组，若设置为空数组，则不显示；若动态变化为空数组，则保持当前正常值显示。
     * 
     * **说明**：
     * 
     * 1. 单列数据选择器使用string[]，[Resource]{@link Resource}，
     * [TextPickerRangeContent]{@link TextPickerRangeContent}[]类型。
     * 2. 多列非联动数据选择器使用string[][]类型。 
     * 3. 多列联动数据选择器使用[TextCascadePickerRangeContent]{@link TextCascadePickerRangeContent}[]类型。
     * 4. Resource类型只支持[strarray.json](docroot://quick-start/resource-categories-and-access.md#资源组目录)。
     * 5. range的类型及列数不可以动态修改。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    range: string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[];
    /**
     * 设置选中项的值，优先级低于selected。
     * 
     * 默认值：数据选择列表中第一个元素的值。
     * 
     * **说明**：
     * 
     * 1. 从API version 23开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync-static.md)双向绑定变量。
     * 2. 只有显示文本列表时该值有效。显示图片或图文混排的列表时，该值无效。
     * 3. 单列数据选择器使用[ResourceStr]{@link ResourceStr}类型。
     * 4. 多列数据选择器使用[ResourceStr]{@link ResourceStr}[]类型。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value?: BindableResourceStr | BindableResourceStrArray;
    /**
     * 设置选中项在数据选择列表中的索引值，索引从0开始。
     * 
     * 默认值：0 
     * 
     * **说明**：
     * 
     * 1. 单列数据选择器使用int类型。
     * 2. 多列数据选择器使用int[]类型。
     * 3. 从API version 23开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync-static.md)双向绑定变量。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    selected?: int | int[] | Bindable<int> | Bindable<int[]>;
    /**
     * 设置每一列的列宽。
     * 
     * 默认值：每一列的列宽相等，为组件宽度除以列数。
     * 
     * **说明**：
     * 
     * 1. 当文本长度大于列宽时，文本被截断。
     * 2. 当设置为异常值时，使用默认值。
     * 3. 支持设置为Undefined和Null，不支持Undefined[]和Null[]。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    columnWidths?: LengthMetrics[];
}
/**
 * 分割线的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DividerOptions {
    /**
     * 分割线的线宽。
     * 
     * 默认值：2.0px
     * 
     * 单位：默认为vp，也可指定单位为px。
     * 
     * 取值范围：strokeWidth小于0取默认值，最大不得超过列高的一半。不支持“百分比”类型。
     *
     * @default 2.0px
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    strokeWidth?: Dimension;
    /**
     * 分割线的颜色。
     * 
     * 默认值：'#33000000'
     *
     * @default "#33000000"
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor;
    /**
     * 分割线与TextPicker侧边起始端的距离。
     * 
     * 默认值：0
     * 
     * 单位：默认为vp，也可指定单位为px。
     * 
     * 取值范围：startMargin小于0时无效，最大值不得超过TextPicker列宽。不支持“百分比”类型。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    startMargin?: Dimension;
    /**
     * 分割线与TextPicker侧边结束端的距离。
     * 
     * 默认值：0
     * 
     * 单位：默认为vp，也可指定单位为px。
     * 
     * 取值范围：endMargin小于0时无效，最大值不得超过TextPicker列宽。不支持“百分比”类型。
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    endMargin?: Dimension;
}
/**
 * 文本样式选项，继承自[PickerTextStyle]{@link PickerTextStyle}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextPickerTextStyle extends PickerTextStyle {
    /**
     * 文本最小显示字号，与maxFontSize配合使用。当设置minFontSize和maxFontSize时，font中的size将不生效。默认最大行数为1，
     * 自适应高度方式为MIN_FONT_SIZE_FIRST。详细规则请参考Text组件的[minFontSize]{@link TextAttribute#minFontSize}属性。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    minFontSize?: double | string | Resource;
    /**
     * 文本最大显示字号。详细规则请参考Text组件的[maxFontSize]{@link TextAttribute#maxFontSize}属性。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    maxFontSize?: double | string | Resource;
    /**
     * 文本截断方式。当设置为MARQUEE时，该属性不生效。
     * 详细规则请参考Text组件的[textOverflow]{@link TextAttribute#textOverflow}属性。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    overflow?: TextOverflow;
}
/**
 * 选择器选中项的背景样式，包括选中项的背景颜色和边框圆角半径。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface PickerBackgroundStyle {
  /**
   * 选中项的背景颜色。
   * 
   * 默认值： 'sys.color.comp_background_tertiary'
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color?: ResourceColor;

  /**
   * 选中项的边框圆角半径。
   * 
   * 默认值：{ value:24, unit:LengthUnit.VP }，即四个圆角半径均为24VP。
   * 
   * **说明：**
   * 
   * 1. [LengthMetrics]{@link ../../../arkui/Graphics:LengthMetrics}类型的value参数同时作用于四个圆角半径大小，
   * unit参数用于设置单位。
   * 2. [BorderRadiuses]{@link BorderRadiuses}类型可以设置四个不同值的圆角半径，所有单位固定为VP。
   * 3. [LocalizedBorderRadiuses]{@link LocalizedBorderRadiuses}类型可以设置四个不同值的圆角半径，
   * 并且可以单独设置每个圆角的单位。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  borderRadius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;
}

/**
 * 定义触发onScrollStop事件的回调类型。
 * 
 * 当显示文本或图片加文本列表时，value值为选中项中的文本值，当显示图片列表时，value值为空。
 *
 * @param { string | string[] } value - 当前选中项的文本。多列数据选择器的value为数组类型。
 * <br/>**说明：**<br/>当选择器内容为文本或图文混排时，value值为选中项中的文本值；当选择器内容为图片时，value值为空。
 * @param { int | int[] } index - 当前选中项的索引值，索引从0开始。多列数据选择器的index为数组类型。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type TextPickerScrollStopCallback = (value: string | string[], index: int | int[]) => void;
/**
 * 滑动选中TextPicker文本内容后，触发该回调。当显示文本或图片加文本列表时，选中项的文本值为选中项中的文本值，当显示图片列表时，
 * 选中项的文本值为空。
 *
 * @param { string | string[] } selectItem - 当前选中项的文本。多列数据选择器的selectItem为数组类型。<br/>**说明：**<br/>
 * 当选择器内容为文本或图文混排时，selectItem值为选中项中的文本值；当选择器内容为图片时，selectItem值为空。
 * @param { int | int[] } index - 当前选中项的索引值，索引从0开始。多列数据选择器的index为数组类型。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnTextPickerChangeCallback = (selectItem: string | string[], index: int | int[]) => void;
/**
 * 定义触发onEnterSelectedArea事件的回调类型。
 * 
 * 在多列联动场景中，不建议使用该回调，由于该回调标识的是滑动过程中选项进入分割线区域内的节点，而跟随变化的选项并不涉及滑动，因此，
 * 回调的返回值中，仅当前滑动列的值会正常变化，其余未滑动列的值保持不变。
 *
 * @param { string | string[] } value - 当前选中项的文本。多列数据选择器的value为数组类型。<br/>**说明：**<br/>当选择器内容为
 * 文本或图文混排时，value值为选中项中的文本值；当选择器内容为图片时，value值为空。
 * @param { int | int[] } index - 当前选中项的索引值，索引从0开始。多列数据选择器的index为数组类型。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type TextPickerEnterSelectedAreaCallback = (value: string | string[], index: int | int[]) => void;
/**
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface TextPickerAttribute extends CommonMethod {
    /**
     * 设置选择项的高度。
     *
     * @default 56 vp (selected) and 36 vp (unselected).
     * @param { double | string | undefined } value - 选择项的高度。double类型取值范围：
     *     [0, +∞)，string类型仅支持number类型取值的字符串形式，例如"56"。<br />默认值：选中项56vp，非选中项36vp。
     *      <br />**说明：**<br />设置该参数后，选中项与非选中项的高度均为所设置的值。<br/>当value的值为undefined时，
     *      维持上次取值；若从未设置过有效值，使用默认值。
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default defaultPickerItemHeight(value: double | string | undefined): this;
    /**
     * 设置是否可循环滚动。
     *
     * @default true
     * @param { boolean | undefined } value - 是否可循环滚动。<br/>true：可循环，false：不可循环。<br/>默认值：true<br/>
     *      当value的值为undefined时，使用默认值。
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default canLoop(value: boolean | undefined): this;
    /**
     * 设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细、最大字号、最小字号、超长文本截断方式。
     *
     * @default { color: '#ff182431', font: { size: '14fp', weight: FontWeight.Regular } }
     * @param { PickerTextStyle | TextPickerTextStyle | undefined } value - 边缘项的文本颜色、字号、字体粗细、最大字号、
     *     最小字号、超长文本截断方式。<br/>当value的值为undefined时，边缘项的文本样式为默认值。<br/>默认值：<br/>{<br/>color:
     *     '#ff182431',<br/>font: {<br/>size: '14fp', <br/>weight: FontWeight.Regular<br/>}<br/>}
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default disappearTextStyle(value: PickerTextStyle | TextPickerTextStyle | undefined): this;
    /**
     * 设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细、最大字号、最小字号、超长文本截断方式。
     *
     * @param { PickerTextStyle | TextPickerTextStyle | undefined } value - 待选项的文本颜色、字号、字体粗细、最大字号、
     *     最小字号、超长文本截断方式。<br/>当value的值为undefined时，待选项的文本样式为默认值。<br/>默认值：<br/>{<br/>color:
     *     '#ff182431',<br/>font: {<br/>size: '16fp', <br/>weight: FontWeight.Regular<br/>}<br/>}
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default textStyle(value: PickerTextStyle | TextPickerTextStyle | undefined): this;
    /**
     * 设置选中项的文本颜色、字号、字体粗细、最大字号、最小字号、超长文本截断方式。Wearable设备不支持设置该属性。
     *
     * @param { PickerTextStyle | TextPickerTextStyle | undefined } value - 选中项的文本颜色、字号、字体粗细、最大字号、
     *     最小字号、超长文本截断方式。<br/>当value的值为undefined时，选中项的文本样式为默认值。<br/>默认值：<br/>{<br/>color:
     *     '#ff007dff',<br/>font: {<br/>size: '20fp', <br/>weight: FontWeight.Medium<br/>}<br/>}
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default selectedTextStyle(value: PickerTextStyle | TextPickerTextStyle | undefined): this;
    /**
     * 设置滑动过程中是否有文本样式变化动效。设置为true时，滑动过程中无字号、字重、字体颜色等变化动效，且文本均显示为
     * [defaultTextStyle]{@link defaultTextStyle}属性设置样式。如未设置
     * [defaultTextStyle]{@link defaultTextStyle}，则显示为[Text]{@link ./text}组件默认样式。
     *
     * @default false
     * @param { boolean | undefined } disabled - 是否关闭滑动过程中文本样式变化的动效。<br/>- true：关闭文本样式变化动效。
     *     <br/>- false：不关闭文本样式变化动效。<br/>默认值：false<br />**说明：**<br/>设置为true时，滑动过程中无字号、字重、
     *     字体颜色等变化动效，且文本均显示为[defaultTextStyle]{@link defaultTextStyle}属性设置的样式。如未设置
     *     [defaultTextStyle]{@link defaultTextStyle}，则显示为[Text]{@link ./text}组件默认样式。<br/>当disabled的值为
     *     undefined时，使用默认值。
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default disableTextStyleAnimation(disabled: boolean | undefined): this;
    /**
     * 设置关闭滑动过程中文本样式变化的动效时，各个选项的文本样式。
     * 仅当[disableTextStyleAnimation]{@link disableTextStyleAnimation}为true时生效。
     *
     * @param { TextPickerTextStyle | undefined } style - 设置关闭滑动过程中文本样式变化的动效时，各个选项的文本样式。
     *     <br/>默认值：与[Text]{@link ./text}组件默认值相同。<br/>当style的值为undefined时，使用默认值。
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default defaultTextStyle(style: TextPickerTextStyle | undefined): this;
    /**
     * 滑动TextPicker文本内容后，选项归位至选中项位置时，触发该回调。不能通过双向绑定的状态变量触发。当显示文本或图片加文本列表时，
     * selectItem值为选中项中的文本值，当显示图片列表时，selectItem值为空。
     * 
     * 回调会在滑动动画结束后触发，如果需要快速获取索引值变化，建议使用[onEnterSelectedArea]
     * (docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textpicker.md#onenterselectedarea18)接口。
     *
     * @param { OnTextPickerChangeCallback | undefined } callback - 滑动选中TextPicker文本内容后，触发的回调。
     *     <br/>当callback的值为undefined时，不使用回调函数。
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onChange(callback: OnTextPickerChangeCallback | undefined): this;
    /**
     * 文本选择器的选项列滑动停止时触发该事件。
     * 
     * 手指拖动选项列触发的滑动，手指离开屏幕且滑动停止时会触发该事件。
     *
     * @param { TextPickerScrollStopCallback | undefined } callback - 文本选择器的选项列滑动停止时触发该事件。
     *     <br/>当callback的值为undefined时，不使用回调函数。
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onScrollStop(callback: TextPickerScrollStopCallback | undefined): this;
    /**
     * 滑动TextPicker过程中，选项进入分割线区域内（当前列的滑动距离超过选中项高度的一半）时，触发该回调。
     * 
     * > **说明：**
     * >
     * > - 与[onChange]{@link onChange}事件的差别在于，该事件的触发时机早于[onChange]{@link onChange}事件。
     * >
     * > - 在多列联动场景中，不建议使用该回调，由于该回调标识的是滑动过程中选项进入分割线区域内的节点，而跟随变化的选项并不涉及滑
     * > 动，因此，回调的返回值中，仅当前滑动列的值会正常变化，其余未滑动列的值保持不变。
     * >
     * > - 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
     *
     * @param { TextPickerEnterSelectedAreaCallback | undefined } callback - 滑动TextPicker过程中，选项进入分割线区域时触
     *     发的回调。<br/>当callback的值为undefined时，不使用回调函数。
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onEnterSelectedArea(callback: TextPickerEnterSelectedAreaCallback | undefined): this;
    /**
     * 设置默认选中项在数组中的索引值，优先级高于[TextPickerOptions]{@link TextPickerOptions}中的选中值。单列数据选择器
     * 使用int类型。多列、多列联动数据选择器使用int[]类型。
     *
     * @default 0
     * @param { int | int[] | undefined } value - 默认选中项在数组中的索引值，索引从0开始。<br/>默认值：0 <br/>当value的值
     *     为undefined时，默认值与[TextPickerOptions]{@link TextPickerOptions}中的selected值保持一致。如果
     *     [TextPickerOptions]{@link TextPickerOptions}中的selected值为undefined，则默认值为0。
     *     <br/>当value的值为负数或者超过数据选择列表的最大索引值时，使用默认值。<br/>
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default selectedIndex(value: int | int[] | undefined): this;
    /**
     * 设置分割线样式，不设置该属性则按“默认值”展示分割线。
     * 
     * [DividerOptions]{@link DividerOptions}中startMargin + endMargin 超过组件宽度后，startMargin和endMargin会被置0。
     *
     * @param { DividerOptions | null | undefined } value - 1.设置[DividerOptions]{@link DividerOptions}，则按设置的样式
     *     显示分割线。<br/>默认值：<br/>{<br/>strokeWidth: '2px', <br/>startMargin: 0, <br/>endMargin: 0, <br/>color:
     *     '#33000000'<br/>}<br/>2.设置为null不显示分割线。<br/>3.当value的值为undefined时，使用默认值。
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default divider(value: DividerOptions | null | undefined): this;
    /**
     * 设置渐隐效果的高度。若未设置该属性，则显示默认渐隐效果。
     *
     * @default 36vp
     * @param { Dimension | undefined } value - 内容区上下边缘的渐隐高度（支持百分比，100%为TextPicker高度的一半即最大值），
     *     设置为0时不显示渐隐效果，负数等非法值显示默认渐隐效果。默认值为36vp。<br/>当value的值为undefined时，默认值为36vp。
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default gradientHeight(value: Dimension | undefined): this;
    /**
     * 设置是否开启触控反馈。
     *
     * @default true
     * @param { boolean | undefined } enable - 设置是否开启触控反馈。<br/>- true：开启触控反馈。<br/>- false：不开启触控反馈。
     *     <br/>默认值：true<br/>设置为true后，其生效情况取决于系统的硬件是否支持。<br/>当enable的值为undefined时，使用默认值。
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default enableHapticFeedback(enable: boolean | undefined): this;
    /**
     * 设置表冠灵敏度。
     *
     * @default CrownSensitivity.MEDIUM
     * @param { CrownSensitivity | undefined } sensitivity - 表冠响应灵敏度。<br/>默认值：CrownSensitivity.MEDIUM，
     *     响应速度适中。<br/>当sensitivity的值为undefined时，使用默认值。
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default digitalCrownSensitivity(sensitivity: CrownSensitivity | undefined): this;
    /**
     * 设置选中项的背景样式。
     *
     * @param { PickerBackgroundStyle | undefined } style - 选中项背景的颜色和边框圆角半径，多列模式时会同时设置所有列的选中项
     *     背景的颜色和圆角半径。<br/>当style的值为undefined时，选中项背景的颜色和边框圆角半径为默认值。<br/>默认值：
     *     <br/>{ <br/>color: $r('sys.color.comp_background_tertiary'),<br/>
     *     borderRadius: $r('sys.float.corner_radius_level12')<br/>}
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default selectedBackgroundStyle(style: PickerBackgroundStyle | undefined): this;
    /**
     * 设置属性修改器。
     *
     * @param { AttributeModifier<TextPickerAttribute> | AttributeModifier<CommonMethod> | undefined } modifier - 设置属
     *     性修改器。<br/>当modifier的值为undefined时，不设置属性修改器。CommonMethod表示[通用属性]{@link ./common}和
     *     [通用事件]{@link ./common}。<br/>TextPickerAttribute表示当前组件的
     *     [属性](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textpicker.md#属性)和
     *     [事件](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textpicker.md#事件)。
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(modifier: AttributeModifier<TextPickerAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}
/**
 * 文本选择器结果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextPickerResult {
    /**
     * 选中项的文本内容。
     * 
     * **说明**：当显示文本或图片加文本列表时，value值为选中项中的文本值。（文本选择器显示多列时，value为数组类型。）
     * 
     * 当显示图片列表时，value值为空。
     * 
     * value值不支持包含转义字符'\'。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: string | string[];
    /**
     * 选中项在选择范围数组中的索引值，索引从0开始。（文本选择器显示多列时，index为数组类型。）
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    index: int | int[];
}
/**
 * 文本选择器弹窗的参数继承自[TextPickerOptions]{@link TextPickerOptions}。
 *
 * 默认值： { color: $r('sys.color.comp_background_tertiary'), borderRadius: $r('sys.float.corner_radius_level12') }
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextPickerDialogOptions extends TextPickerOptions {
    /**
     * 设置选择器中选项的高度。number/double类型取值范围：[0, +∞)，string类型仅支持number/double类型取值的字符串形式，例如"56"。
     * 
     * 默认值：选中项56vp，非选中项36vp。设置该参数后，选中项与非选中项的高度均为所设置的值。
     *
     * @default 56 vp (selected) and 36 vp (unselected)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    defaultPickerItemHeight?: double | string;
    /**
     * 设置是否可循环滚动。
     * 
     * - true：可循环。
     * - false：不可循环。
     * 
     * 默认值：true
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    canLoop?: boolean;
    /**
     * 设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细。
     * 
     * 默认值： { color: '#ff182431', font: { size: '14fp', weight: FontWeight.Regular } }
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    disappearTextStyle?: PickerTextStyle;
    /**
     * 设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细。
     * 
     * 默认值：{ color: '#ff182431',font: {size: '16fp',weight: FontWeight.Regular } }
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    textStyle?: PickerTextStyle;
    /**
     * 设置确认按钮显示样式、样式和重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、
     * 按钮是否默认响应Enter键。
     * 
     * **说明：**
     * 
     * 1.acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，如果同时设置为true，则primary字段不生效，
     * 保持默认值false。
     * 
     * 2.按钮高度默认40vp，在关怀模式-大字体场景下高度不变，即使按钮样式设置为圆角矩形
     * [ROUNDED_RECTANGLE](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype枚举说明)，
     * 呈现效果依然是胶囊型按钮
     * [Capsule](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype枚举说明)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    acceptButtonStyle?: PickerDialogButtonStyle;
    /**
     * 设置取消按钮显示样式、样式和重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、
     * 按钮是否默认响应Enter键。
     * 
     * **说明：**
     * 
     * 1.acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，如果同时设置为true，则primary字段不生效，
     * 保持默认值false。
     * 
     * 2.按钮高度默认40vp，在关怀模式-大字体场景下高度不变，即使按钮样式设置为圆角矩形
     * [ROUNDED_RECTANGLE](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype枚举说明)，
     * 呈现效果依然是胶囊型按钮
     * [Capsule](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype枚举说明)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    cancelButtonStyle?: PickerDialogButtonStyle;
    /**
     * 设置选中项的文本颜色、字号、字体粗细。
     * 
     * 默认值：{ color: '#ff007dff',font: {size: '20fp',weight: FontWeight.Medium } }
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    selectedTextStyle?: PickerTextStyle;
    /**
     * 设置是否关闭滑动过程中文本样式变化的动效。
     * 
     * - true：关闭文本样式变化动效。
     * - false：不关闭文本样式变化动效。
     * 
     * 默认值：false
     * 
     * **说明：**
     * 
     * 设置为true时，滑动过程中无字号、字重、字体颜色等变化动效，且文本均显示为defaultTextStyle属性设置的样式。
     * 如未设置defaultTextStyle，则显示为[Text]{@link ./text}组件默认样式。
     *
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    disableTextStyleAnimation?: boolean;
    /**
     * 设置关闭滑动过程中文本样式变化动效时的各个选项的文本样式，仅当disableTextStyleAnimation为true时生效。
     * 
     * 默认值：与[Text]{@link ./text}组件默认值相同。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    defaultTextStyle?: TextPickerTextStyle;
    /**
     * 点击弹窗中的“确定”按钮时触发该回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onAccept?: (value: TextPickerResult) => void;
    /**
     * 点击弹窗中的“取消”按钮时触发该回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onCancel?: () => void;
    /**
     * 滑动弹窗中的选择器后，选项归位至选中项位置时，触发该回调。
     * 
     * 回调会在滑动动画结束后触发，如果需要快速获取索引值变化，建议使用onEnterSelectedArea接口。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onChange?: (value: TextPickerResult) => void;
    /**
     * 滑动弹窗中的选择器的选择列停止时，触发该回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onScrollStop?: Callback<TextPickerResult>;
    /**
     * 滑动过程中，选项进入分割线区域内，触发该回调。与onChange事件的差别在于，该事件的触发时机早于onChange事件，当当前滑动列滑动
     * 距离超过选中项高度的一半时，选项此时已经进入分割线区域内，会触发该事件。
     * 
     * **说明：**
     * 
     * 在多列联动场景中，不建议使用该回调，由于该回调标识的是滑动过程中选项进入分割线区域内的节点，而跟随变化的选项并不涉及滑动，
     * 因此，回调的返回值中，仅当前滑动列的值会正常变化，其余未滑动列的值保持不变。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onEnterSelectedArea?: Callback<TextPickerResult>;
    /**
     * 弹窗遮蔽层区域，在遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。
     * 
     * 默认值：{ x: 0, y: 0, width: '100%', height: '100%' }
     *
     * @default { x: 0, y: 0, width: '100%', height: '100%' }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    maskRect?: Rectangle;
    /**
     * 弹窗在竖直方向上的对齐方式。
     * 
     * 默认值：DialogAlignment.Default
     *
     * @default DialogAlignment.Default
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    alignment?: DialogAlignment;
    /**
     * 弹窗相对alignment所在位置的偏移量。
     * 
     * 默认值：{ dx: 0 , dy: 0 }
     *
     * @default { dx: 0 , dy: 0 }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset?: Offset;
    /**
     * 弹窗背板颜色。
     * 
     * 默认值：Color.Transparent
     * 
     * **说明：** 
     * 
     * 当设置了backgroundColor为非透明色时，backgroundBlurStyle需要设置为BlurStyle.NONE，否则显示的颜色将不符合预期效果。
     *
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundColor?: ResourceColor;
    /**
     * 弹窗背板模糊材质。
     * 
     * 默认值：BlurStyle.COMPONENT_ULTRA_THICK
     * 
     * **说明：** 
     * 
     * 设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，
     * 否则显示的颜色将不符合预期效果。
     *
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * 背景模糊效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * 背景效果参数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    backgroundEffect?: BackgroundEffectOptions;
    /**
     * 弹窗弹出后的事件回调。
     * 
     * **说明：**
     * 
     * 1.正常时序依次为：
     * onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange/onScrollStop)>>onWillDisappear>>onDidDisappear。
     * 
     * 2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
     * 
     * 3.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
     * 
     * 4. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDidAppear?: () => void;
    /**
     * 弹窗消失后的事件回调。
     * 
     * **说明：**
     * 
     * 1.正常时序依次为：
     * onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange/onScrollStop)>>onWillDisappear>>onDidDisappear。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onDidDisappear?: () => void;
    /**
     * 弹窗显示动效前的事件回调。
     * 
     * **说明：**
     * 
     * 1.正常时序依次为：
     * onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange/onScrollStop)>>onWillDisappear>>onDidDisappear。
     * 
     * 2.在onWillAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillAppear?: () => void;
    /**
     * 弹窗退出动效前的事件回调。
     * 
     * **说明：**
     * 
     * 1.正常时序依次为：
     * onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange/onScrollStop)>>onWillDisappear>>onDidDisappear。
     * 
     * 2.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onWillDisappear?: () => void;
    /**
     * 设置弹窗背板的阴影。
     * 
     * 当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * 是否响应悬停态。
     * 
     * - true：响应悬停态。
     * - false：不响应悬停态。
     * 
     * 默认值：false
     *
     * @default false - meaning not to enable the hover mode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableHoverMode?: boolean;
    /**
     * 设置悬停态下弹窗默认展示区域。
     * 
     * 默认值：HoverModeAreaType.BOTTOM_SCREEN
     *
     * @default HoverModeAreaType.BOTTOM_SCREEN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    hoverModeArea?: HoverModeAreaType;
    /**
     * 设置是否开启触控反馈。
     * 
     * - true：开启触控反馈。
     * - false：不开启触控反馈。
     * 
     * 默认值：true
     * 
     * **说明**：
     * 
     * 1. 设置为true后，其生效情况取决于系统的硬件是否支持。
     * 2. 开启触控反馈时，需要在工程的src/main/module.json5文件的"module"内配置requestPermissions字段开启振动权限，配置如下：
     *
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    enableHapticFeedback?: boolean;
}
/**
 * 文本选择器弹窗的参数继承自[TextPickerOptions]{@link TextPickerOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextPickerDialogOptionsExt extends TextPickerOptions {
  /**
   * 设置选择器中选项的高度。number/double类型取值范围：[0, +∞)，string类型仅支持number/double类型取值的字符串形式，例如"56"。
   *
   * 默认值：选中项56vp，非选中项36vp。设置该参数后，选中项与非选中项的高度均为所设置的值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  defaultPickerItemHeight?: double | string;

  /**
   * 设置是否可循环滚动。
   * 
   * - true：可循环。
   * - false：不可循环。
   * 
   * 默认值：true
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  canLoop?: boolean;

  /**
   * 设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细、最大字号、最小字号、超长文本截断方式。
   * 
   * 默认值： { color: '#ff182431', font: {size: '14fp', weight: FontWeight.Regular }, minFontSize: 0, maxFontSize: 0,
   * overflow: TextOverflow.CLIP }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  disappearTextStyle?: TextPickerTextStyle;

  /**
   * 设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细、最大字号、最小字号、超长文本截断方式。
   * 
   * 默认值：{ color: '#ff182431', font: { size: '16fp', weight: FontWeight.Regular }, minFontSize: 0, maxFontSize: 0,
   * overflow: TextOverflow.CLIP }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  textStyle?: TextPickerTextStyle;

  /**
   * 设置确认按钮显示样式、样式和重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、
   * 按钮是否默认响应Enter键。
   * 
   * **说明：**
   * 
   * 1.acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，如果同时设置为true，则primary字段不生效，
   * 保持默认值false。
   * 
   * 2.按钮高度默认40vp，在关怀模式-大字体场景下高度不变，即使按钮样式设置为圆角矩形
   * [ROUNDED_RECTANGLE](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype枚举说明)，
   * 呈现效果依然是胶囊型按钮
   * [Capsule](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype枚举说明)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  acceptButtonStyle?: PickerDialogButtonStyle;

  /**
   * 设置取消按钮显示样式、样式和重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、
   * 按钮是否默认响应Enter键。
   * 
   * **说明：**
   * 
   * 1.acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，如果同时设置为true，则primary字段不生效，
   * 保持默认值false。
   * 
   * 2.按钮高度默认40vp，在关怀模式-大字体场景下高度不变，即使按钮样式设置为圆角矩形
   * [ROUNDED_RECTANGLE](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype枚举说明)，
   * 呈现效果依然是胶囊型按钮
   * [Capsule](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype枚举说明)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  cancelButtonStyle?: PickerDialogButtonStyle;

  /**
   * 设置选中项的文本颜色、字号、字体粗细、最大字号、最小字号、超长文本截断方式。
   * 
   * 默认值： { color: '#ff007dff', font: { size: '20fp', weight: FontWeight.Medium }, minFontSize: 0, maxFontSize: 0,
   * overflow: TextOverflow.CLIP }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedTextStyle?: TextPickerTextStyle;

  /**
   * 设置是否关闭滑动过程中文本样式变化的动效。
   * 
   * - true：关闭文本样式变化动效。
   * - false：不关闭文本样式变化动效。
   * 
   * 默认值：false
   * 
   * **说明：**
   * 
   * 设置为true时，滑动过程中无字号、字重、字体颜色等变化动效，且文本均显示为defaultTextStyle属性设置的样式。
   * 如未设置defaultTextStyle，则显示为[Text]{@link ./text}组件默认样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  disableTextStyleAnimation?: boolean;

  /**
   * 设置关闭滑动过程中文本样式变化动效时的各个选项的文本样式，仅当disableTextStyleAnimation为true时生效。
   * 
   * 默认值：与[Text]{@link ./text}组件默认值相同。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  defaultTextStyle?: TextPickerTextStyle;

  /**
   * 点击弹窗中的“确定”按钮时触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onAccept?: Callback<TextPickerResult>;

  /**
   * 点击弹窗中的“取消”按钮时触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onCancel?: VoidCallback;

  /**
   * 滑动弹窗中的选择器后，选项归位至选中项位置时，触发该回调。
   * 
   * 回调会在滑动动画结束后触发，如果需要快速获取索引值变化，建议使用onEnterSelectedArea接口。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onChange?: Callback<TextPickerResult>;

  /**
   * 滑动弹窗中的选择器的选择列停止时，触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onScrollStop?: Callback<TextPickerResult>;

  /**
   * 滑动过程中，选项进入分割线区域内，触发该回调。与onChange事件的差别在于，该事件的触发时机早于onChange事件，
   * 当当前滑动列滑动距离超过选中项高度的一半时，选项此时已经进入分割线区域内，会触发该事件。
   * 
   * **说明：**
   * 
   * 在多列联动场景中，不建议使用该回调，由于该回调标识的是滑动过程中选项进入分割线区域内的节点，而跟随变化的选项并不涉及滑动，因此，
   * 回调的返回值中，仅当前滑动列的值会正常变化，其余未滑动列的值保持不变。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onEnterSelectedArea?: Callback<TextPickerResult>;

  /**
   * 弹窗遮蔽层区域，在遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。
   * 
   * 默认值：{ x: 0, y: 0, width: '100%', height: '100%' }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maskRect?: Rectangle;

  /**
   * 弹窗在竖直方向上的对齐方式。
   * 
   * 默认值： DialogAlignment.Default
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  alignment?: DialogAlignment;

  /**
   * 弹窗相对alignment所在位置的偏移量。
   * 
   * 默认值：{ dx: 0 , dy: 0 }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offset?: Offset;

  /**
   * 弹窗背板颜色。
   * 
   * 默认值：Color.Transparent
   * 
   * **说明：** 
   * 
   * 当设置了backgroundColor为非透明色时，backgroundBlurStyle需要设置为BlurStyle.NONE，否则显示的颜色将不符合预期效果。
   *
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundColor?: ResourceColor;

  /**
   * 弹窗背板模糊材质。
   * 
   * 默认值：BlurStyle.COMPONENT_ULTRA_THICK
   * 
   * **说明：** 
   * 
   * 设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，
   * 否则显示的颜色将不符合预期效果。
   *
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * 背景模糊效果。
   *
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 背景效果参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * 弹窗弹出后的事件回调。
   * 
   * **说明：**
   * 
   * 1.正常时序依次为：
   * onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange/onScrollStop)>>onWillDisappear>>onDidDisappear。
   * 
   * 2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
   * 
   * 3.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
   * 
   * 4. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidAppear?: VoidCallback;

  /**
   * 弹窗消失后的事件回调。
   * 
   * **说明：**
   * 
   * 1.正常时序依次为：
   * onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange/onScrollStop)>>onWillDisappear>>onDidDisappear。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDidDisappear?: VoidCallback;

  /**
   * 弹窗显示动效前的事件回调。
   * 
   * **说明：**
   * 
   * 1.正常时序依次为：
   * onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange/onScrollStop)>>onWillDisappear>>onDidDisappear。
   * 
   * 2.在onWillAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillAppear?: VoidCallback;

  /**
   * 弹窗退出动效前的事件回调。
   * 
   * **说明：**
   * 
   * 1.正常时序依次为：
   * onWillAppear>>onDidAppear>>(onAccept/onCancel/onChange/onScrollStop)>>onWillDisappear>>onDidDisappear。
   * 
   * 2.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onWillDisappear?: VoidCallback;

  /**
   * 设置弹窗背板的阴影。
   * 
   * 当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * 是否响应悬停态。
   * 
   * - true：响应悬停态。
   * - false：不响应悬停态。
   * 
   * 默认值：false
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  enableHoverMode?: boolean;

  /**
   * 设置悬停态下弹窗默认展示区域。
   * 
   * 默认值：HoverModeAreaType.BOTTOM_SCREEN
   *
   * @default HoverModeAreaType.BOTTOM_SCREEN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  hoverModeArea?: HoverModeAreaType;

  /**
   * 设置是否开启触控反馈。
   * 
   * - true：开启触控反馈。
   * - false：不开启触控反馈。
   * 
   * 默认值：true
   * 
   * **说明**：
   * 
   * 1. 设置为true后，其生效情况取决于系统的硬件是否支持。
   * 2. 开启触控反馈时，需要在工程的src/main/module.json5文件的"module"内配置requestPermissions字段开启振动权限。
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  enableHapticFeedback?: boolean;

  /**
   * 设置选中项背景样式。
   * 
   * 默认值： { color: $r('sys.color.comp_background_tertiary'), borderRadius: $r('sys.float.corner_radius_level12') }
   *
   * @default { color: $r('sys.color.comp_background_tertiary'), borderRadius: $r('sys.float.corner_radius_level12') }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  selectedBackgroundStyle?: PickerBackgroundStyle;

  /**
   * 为对话框设置系统风格的材质。不同的材质具有不同的效果，可以影响对话框的背景颜色、边框、阴影等视觉属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  systemMaterial?: SystemUiMaterial;

  /**
   * 设置对话框的形变动画模式。
   *
   * @default DistortionMode.DISTORTION_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  distortionMode?: DistortionMode;

  /**
   * 设置对话框的边缘光动画模式。
   *
   * @default EdgeLightMode.EDGELIGHT_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  edgeLightMode?: EdgeLightMode;
}

/**
 * 定义文本选择器组件。
 *
 * @param { TextPickerOptions } [options] - text picker options.
 * @returns { TextPickerAttribute } The attribute of the TextPicker.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function TextPicker(
    options?: TextPickerOptions
): TextPickerAttribute;
