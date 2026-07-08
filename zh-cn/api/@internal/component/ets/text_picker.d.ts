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
 * 单列数据选择器的数据选项内容。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface TextPickerRangeContent {

  /**
   * 图片资源。 icon是string类型时，表示图片存放的路径，例如"/common/hello.png"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
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
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  text?: string | Resource;
}

/**
 * 多列联动数据选择器的数据选项内容。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface TextCascadePickerRangeContent {

  /**
   * 文本信息。
   * 
   * **说明**：当文本长度大于列宽时，文本被截断。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  text: string | Resource;

  /**
   * 联动数据。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  children?: TextCascadePickerRangeContent[];
}

/**
 * 文本选择器的参数说明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TextPickerOptions {

  /**
   * 选择器的数据选择列表。不可设置为空数组，若设置为空数组，则不显示；若动态变化为空数组，则保持当前正常值显示。
   * 
   * **说明**：
   * 
   * 1. 单列数据选择器使用string[]，[Resource]{@link Resource}，
   *    [TextPickerRangeContent]{@link TextPickerRangeContent}[]类型。
   * 2. 多列非联动数据选择器使用string[][]类型。 
   * 3. 多列联动数据选择器使用[TextCascadePickerRangeContent]{@link TextCascadePickerRangeContent}[]类型。
   * 4. Resource类型只支持[strarray.json](docroot://quick-start/resource-categories-and-access.md#资源组目录)。
   * 5. range的类型及列数不可以动态修改。
   *
   * @type {string[] | Resource} [since 8 - 9]
   * @type {string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[]} [since 10]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  range: string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[];

  /**
   * 设置选中项的值，优先级低于selected。
   * 
   * 默认值：数据选择列表中第一个元素的值。
   * 
   * **说明**：
   * 
   * 1. 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   * 2. 从API version 20开始，支持[Resource]{@link Resource}类型。
   * 3. 只有显示文本列表时该值有效。显示图片或图文混排的列表时，该值无效。
   * 4. 单列数据选择器使用[ResourceStr]{@link ResourceStr}类型。
   * 5. 多列数据选择器使用[ResourceStr]{@link ResourceStr}[]类型。
   *
   * @type { ?string } [since 8 - 9]
   * @type { ?(string | string[]) } [since 10 - 19]
   * @type { ?(ResourceStr | ResourceStr[]) } [since 20]
   * @default value of the first item [since 8 - 9]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value?: ResourceStr | ResourceStr[];

  /**
   * 设置选中项在数据选择列表中的索引值，索引从0开始。
   * 
   * 默认值：0 
   * 
   * **说明**：
   * 
   * 1. 单列数据选择器使用number类型。
   * 2. 多列数据选择器使用number[]类型。
   * 3. 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   *
   * @type { ?number } [since 8 - 9]
   * @type { ?(number | number[]) } [since 10]
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selected?: number | number[];

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
   * @default Each column has equal width, calculated by dividing the total component width by the number of columns.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  columnWidths?: LengthMetrics[];
}

/**
 * 滑动选择文本、图片或图文混排内容的组件，用户可以按需创建单列数据选择器、多列非联动数据选择器和多列联动数据选择器。
 *
 * **说明：**
 *
 * - 该组件不建议开发者在动效过程中修改属性数据。
 * - 最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置，
 *   未配置时默认显示为3行。可通过如下参数查看具体配置值 $r('sys.float.ohos_id_picker_show_count_landscape')。
 * - 多列非联动数据选择器和多列联动数据选择器在下文中统称为多列数据选择器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface TextPickerInterface {

  /**
   * 根据指定的数据列表创建文本选择器。
   *
   * @param { TextPickerOptions } options - 配置文本选择器的参数。参数缺省时组件无法显示。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options?: TextPickerOptions): TextPickerAttribute;
}

/**
 * 分割线的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DividerOptions {

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
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  strokeWidth?: Dimension;

  /**
   * 分割线的颜色。
   * 
   * 默认值：'#33000000'
   *
   * @default '#33000000'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  endMargin?: Dimension;
}

/**
 * 文本样式选项，继承自[PickerTextStyle]{@link PickerTextStyle}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare interface TextPickerTextStyle extends PickerTextStyle {

  /**
   * 文本最小显示字号，与maxFontSize配合使用。当设置minFontSize和maxFontSize时，font中的size将不生效。
   * 默认最大行数为1，自适应高度方式为MIN_FONT_SIZE_FIRST。
   * 详细规则请参考Text组件的[minFontSize]{@link TextAttribute#minFontSize}属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  minFontSize?: number | string | Resource;

  /**
   * 文本最大显示字号。详细规则请参考Text组件的[maxFontSize]{@link TextAttribute#maxFontSize}属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  maxFontSize?: number | string | Resource;

  /**
   * 文本截断方式。当设置为MARQUEE时，该属性不生效。
   * 详细规则请参考Text组件的[textOverflow]{@link TextAttribute#textOverflow}属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  overflow?: TextOverflow;
}

/**
 * 选择器选中项的背景样式，包括选中项的背景颜色和边框圆角半径。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface PickerBackgroundStyle {

  /**
   * 选中项的背景颜色。
   * 
   * 默认值：'sys.color.comp_background_tertiary'
   *
   * @default 'sys.color.comp_background_tertiary'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  color?: ResourceColor;

  /**
   * 选中项的边框圆角半径。
   * 
   * 默认值：{ value: 24, unit: LengthUnit.VP }，即四个圆角半径均为24VP。
   * 
   * **说明：**
   * 
   * 1. [LengthMetrics]{@link ../../../arkui/Graphics:LengthMetrics}类型的value参数同时作用于四个圆角半径大小，
   *    unit参数用于设置单位。
   * 2. [BorderRadiuses]{@link BorderRadiuses}类型可以设置四个不同值的圆角半径，所有单位固定为VP。
   * 3. [LocalizedBorderRadiuses]{@link LocalizedBorderRadiuses}类型可以设置四个不同值的圆角半径，
   *    并且可以单独设置每个圆角的单位。
   *
   * @default { value:24, unit:LengthUnit.VP }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  borderRadius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;
}

/**
 * 定义触发onScrollStop事件的回调类型。
 *
 * **说明：**
 *
 * - 当选择器内容为文本或图文混排时，value值为选中项中的文本值；
 * - 当选择器内容为图片时，value值为空。
 *
 * @param { string | string[] } value - 当前选中项的文本。多列数据选择器的value为数组类型。
 * @param { number | number[] } index - 当前选中项的索引值，索引从0开始。多列数据选择器的index为数组类型。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare type TextPickerScrollStopCallback = (value: string | string[], index: number | number[]) => void;

/**
 * 定义触发onChange事件的回调类型。
 *
 * @param { string | string[] } selectItem - 当前选中项的文本。多列数据选择器的selectItem为数组类型。
 *    **说明：**当选择器内容为文本或图文混排时，selectItem值为选中项中的文本值；当选择器内容为图片时，selectItem值为空。
 * @param { number | number[] } index - 当前选中项的索引值，索引从0开始。多列数据选择器的index为数组类型。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnTextPickerChangeCallback = (selectItem: string | string[], index: number | number[]) => void;

/**
 * 定义触发 onEnterSelectedArea 事件的回调类型。
 *
 * @param { string | string[] } value - 当前选中项的文本。多列数据选择器的value为数组类型。
 *    <br/>**说明：**<br/>当选择器内容为文本或图文混排时，value值为选中项中的文本值；当选择器内容为图片时，value值为空。
 * @param { number | number[] } index - 当前选中项的索引值，索引从0开始。多列数据选择器的index为数组类型。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type TextPickerEnterSelectedAreaCallback = (value: string | string[], index: number | number[]) => void;

/**
 * 除支持[通用属性]{@link ./common}外，还支持以下属性：
 * 
 * 除支持[通用事件]{@link ./common}外，还支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class TextPickerAttribute extends CommonMethod<TextPickerAttribute> {

  /**
   * 设置选择项的高度。
   *
   * @param { number | string } value - 选择项的高度。<br />取值范围：<br />number类型：
   *     [0, +∞)，单位为vp。<br />string类型：仅支持number类型取值的字符串形式，例如"56"。
   *     <br />默认值：选中项56vp，非选中项36vp。<br />**说明：**<br />设置该参数后，选中项与非选中项的高度均为所设置的值。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  defaultPickerItemHeight(value: number | string): TextPickerAttribute;

  /**
   * 设置选择项的高度。
   * 与[defaultPickerItemHeight]{@link TextPickerAttribute#defaultPickerItemHeight(value: number | string)}相比，
   * height参数新增了对undefined类型的支持。
   *
   * @param { Optional<number | string> } height - 选择项的高度。<br />取值范围：<br />number类型：
   *     [0, +∞)，单位为vp。<br />string类型：仅支持number类型取值的字符串形式，例如"56"。
   *    <br />默认值：选中项56vp，非选中项36vp。<br />**说明：**<br />1. 设置该参数后，选中项与非选中项的高度均为所设置的值。
   *    <br/>2. 当height的值为undefined时，维持上次取值。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  defaultPickerItemHeight(height: Optional<number | string>): TextPickerAttribute;

  /**
   * 设置是否可循环滚动。
   *
   * @param { boolean } value - 是否可循环滚动。<br/>- true：可循环。<br/>- false：不可循环。<br/>默认值：true
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  canLoop(value: boolean): TextPickerAttribute;

  /**
   * 设置是否可循环滚动。
   * 与[canLoop<sup>10+</sup>]{@link TextPickerAttribute#canLoop(value: boolean)}相比，isLoop参数新增了对undefined类型的支持。
   *
   * @param { Optional<boolean> } isLoop - 是否可循环滚动。<br/>- true：可循环。<br/>- false：不可循环。
   *    <br/>默认值：true<br/>当isLoop的值为undefined时，使用默认值。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  canLoop(isLoop: Optional<boolean>): TextPickerAttribute;

  /**
   * 设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细。
   *
   * @param { PickerTextStyle } value - 边缘项的文本颜色、字号、字体粗细。<br/>默认值：<br/>{<br/>color: '#ff182431',
   *    <br/>font: {<br/>size: '14fp', <br/>weight: FontWeight.Regular<br/>}<br/>}
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  disappearTextStyle(value: PickerTextStyle): TextPickerAttribute;

  /**
   * 设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细。与
   * [disappearTextStyle<sup>10+</sup>]{@link TextPickerAttribute#disappearTextStyle(value: PickerTextStyle)}相比，
   * style参数新增了对undefined类型的支持。
   *
   * @param { Optional<PickerTextStyle> } style - 边缘项的文本颜色、字号、字体粗细。<br/>默认值：<br/>{<br/>color:
   *    '#ff182431',<br/>font: {<br/>size: '14fp', <br/>weight: FontWeight.Regular<br/>}<br/>}
   *    <br/>当style的值为undefined时，使用默认值。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  disappearTextStyle(style: Optional<PickerTextStyle>): TextPickerAttribute;

  /**
   * 设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细、最大字号、最小字号、超长文本截断方式。与
   * [disappearTextStyle]{@link TextPickerAttribute#disappearTextStyle(style: Optional<PickerTextStyle>)}<sup>18+</sup>
   * 相比，style参数新增了对[TextPickerTextStyle]{@link TextPickerTextStyle}类型的支持。
   *
   * @param { Optional<PickerTextStyle | TextPickerTextStyle> } style - 边缘项的文本颜色、字号、字体粗细、最大字号、最小字号、
   *    超长文本截断方式。<br/>默认值：<br/>{<br/>color: '#ff182431',<br/>font: {<br/>size: '14fp', <br/>weight:
   *    FontWeight.Regular<br/>},<br/>minFontSize: 0,<br/>maxFontSize: 0,<br/>overflow: TextOverflow.Clip<br/>}
   *    <br/>当style的值为undefined时，使用默认值。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  disappearTextStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>): TextPickerAttribute;

  /**
   * 设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细。
   *
   * @param { PickerTextStyle } value - 待选项的文本颜色、字号、字体粗细。<br/>默认值：<br/>{<br/>color: '#ff182431',
   *    <br/>font: {<br/>size: '16fp', <br/>weight: FontWeight.Regular<br/>}<br/>}
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  textStyle(value: PickerTextStyle): TextPickerAttribute;

  /**
   * 设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细。与
   * [textStyle<sup>10+</sup>]{@link TextPickerAttribute#textStyle(value: PickerTextStyle)}相比，
   * style参数新增了对undefined类型的支持。
   *
   * @param { Optional<PickerTextStyle> } style - 待选项的文本颜色、字号、字体粗细。<br/>默认值：<br/>{<br/>color:
   *    '#ff182431',<br/>font: {<br/>size: '16fp', <br/>weight: FontWeight.Regular<br/>}<br/>}
   *    <br/>当style的值为undefined时，使用默认值。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  textStyle(style: Optional<PickerTextStyle>): TextPickerAttribute;

  /**
   * 设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细、最大字号、最小字号、超长文本截断方式。与
   * [textStyle]{@link TextPickerAttribute#textStyle(style: Optional<PickerTextStyle>)}<sup>18+</sup>相比，
   * style参数新增了对[TextPickerTextStyle]{@link TextPickerTextStyle}类型的支持。
   *
   * @param { Optional<PickerTextStyle | TextPickerTextStyle> } style - 待选项的文本颜色、字号、字体粗细、最大字号、最小字号、
   *    超长文本截断方式。<br/>默认值：<br/>{<br/>color: '#ff182431',<br/>font: {<br/>size: '16fp', <br/>weight:
   *    FontWeight.Regular<br/>},<br/>minFontSize: 0,<br/>maxFontSize: 0,<br/>overflow: TextOverflow.Clip<br/>}
   *    <br/>当style的值为undefined时，使用默认值。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  textStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>): TextPickerAttribute;

  /**
   * 设置选中项的文本颜色、字号、字体粗细。
   *
   * @param { PickerTextStyle } value - 选中项的文本颜色、字号、字体粗细。<br/>默认值：<br/>{<br/>color: '#ff007dff',
   *    <br/>font: {<br/>size: '20fp', <br/>weight: FontWeight.Medium<br/>}<br/>}
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedTextStyle(value: PickerTextStyle): TextPickerAttribute;

  /**
   * 设置选中项的文本颜色、字号、字体粗细。与
   * [selectedTextStyle<sup>10+</sup>]{@link TextPickerAttribute#selectedTextStyle(value: PickerTextStyle)}相比，
   * style参数新增了对undefined类型的支持。
   *
   * @param { Optional<PickerTextStyle> } style - 选中项的文本颜色、字号、字体粗细。<br/>默认值：<br/>{<br/>color:
   *    '#ff007dff',<br/>font: {<br/>size: '20fp', <br/>weight: FontWeight.Medium<br/>}<br/>}
   *    <br/>当style的值为undefined时，使用默认值。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedTextStyle(style: Optional<PickerTextStyle>): TextPickerAttribute;

  /**
   * 设置选中项的文本颜色、字号、字体粗细、最大字号、最小字号、超长文本截断方式。与
   * [selectedTextStyle]{@link TextPickerAttribute#selectedTextStyle(style: Optional<PickerTextStyle>)}<sup>18+</sup>
   * 相比，style参数新增了对[TextPickerTextStyle]{@link TextPickerTextStyle}类型的支持。
   *
   * @param { Optional<PickerTextStyle | TextPickerTextStyle> } style - 选中项的文本颜色、字号、字体粗细、最大字号、最小字号、
   *    超长文本截断方式。<br/>默认值：<br/>{<br/>color: '#ff007dff',<br/>font: {<br/>size: '20fp', <br/>weight:
   *    FontWeight.Medium<br/>},<br/>minFontSize: 0,<br/>maxFontSize: 0,<br/>overflow: TextOverflow.Clip<br/>}
   *    <br/>当style的值为undefined时，使用默认值。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  selectedTextStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>): TextPickerAttribute;

  /**
   * 设置是否关闭滑动过程中文本样式变化的动效。
   *
   * @param { boolean } disabled - 是否关闭滑动过程中文本样式变化的动效。<br/>- true：关闭文本样式变化动效。
   *     <br/>- false：不关闭文本样式变化动效。<br/>默认值：false
   *     <br/>**说明：**<br/>设置为true时，滑动过程中无字号、字重、字体颜色等变化动效，且文本均显示为
   *     [defaultTextStyle]{@link TextPickerAttribute#defaultTextStyle}属性设置的样式。如未设置
   *     [defaultTextStyle]{@link TextPickerAttribute#defaultTextStyle}，则显示为[Text]{@link ./text}组件默认样式。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  disableTextStyleAnimation(disabled: boolean): TextPickerAttribute;

  /**
   * 设置关闭滑动过程中文本样式变化的动效时，各个选项的文本样式。
   * 仅当[disableTextStyleAnimation]{@link TextPickerAttribute#disableTextStyleAnimation}为true时生效。
   *
   * @param { TextPickerTextStyle } style - 设置关闭滑动过程中文本样式变化的动效时，各个选项的文本样式。
   *    <br/>默认值：与[Text]{@link ./text}组件默认值相同。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  defaultTextStyle(style: TextPickerTextStyle): TextPickerAttribute;

  /**
   * 点击弹窗中的“确定”按钮时触发该回调。该事件仅在[文本滑动选择器弹窗]{@link ./text_picker}中生效。
   * 
   * 从API version 8开始支持，从API version 10开始废弃，无替代接口。
   *
   * @param { function } callback
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 10
   */
  onAccept(callback: (value: string, index: number) => void): TextPickerAttribute;

  /**
   * 点击弹窗中的“取消”按钮时触发该回调。该事件仅在[文本滑动选择器弹窗]{@link ./text_picker}中生效。
   * 
   * 从API version 8开始支持，从API version 10开始废弃，无替代接口。
   *
   * @param { function } callback
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 8 dynamiconly
   * @deprecated since 10
   */
  onCancel(callback: () => void): TextPickerAttribute;

  /**
   * 滑动TextPicker文本内容后，选项归位至选中项位置时，触发该回调。不能通过双向绑定的状态变量触发。当显示文本或图片加文本列表时，
   * value值为选中项中的文本值，当显示图片列表时，value值为空。
   * 
   * 回调会在滑动动画结束后触发，如果需要快速获取索引值变化，
   * 建议使用[onEnterSelectedArea]{@link TextPickerAttribute#onEnterSelectedArea}接口。
   *
   * @param { function } callback
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange(callback: (value: string | string[], index: number | number[]) => void): TextPickerAttribute;

  /**
   * 滑动TextPicker文本内容后，选项归位至选中项位置时，触发该回调。不能通过双向绑定的状态变量触发。当显示文本或图片加文本列表时，
   * value值为选中项中的文本值，当显示图片列表时，value值为空。与
   * [onChange]{@link TextPickerAttribute#onChange(callback: (value: string | string[],
   *    index: number | number[]) => void)}相比，callback参数新增了对undefined类型的支持。
   * 
   * 回调会在滑动动画结束后触发，如果需要快速获取索引值变化，
   * 建议使用[onEnterSelectedArea]{@link TextPickerAttribute#onEnterSelectedArea}接口。
   *
   * @param { Optional<OnTextPickerChangeCallback> } callback - 滑动选中TextPicker文本内容后，触发的回调。
   *    <br/>当callback的值为undefined时，不使用回调函数。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onChange(callback: Optional<OnTextPickerChangeCallback>): TextPickerAttribute;

  /**
   * 文本选择器的选项列滑动停止时触发该事件。
   * 
   * 手指拖动选项列触发的滑动，手指离开屏幕且滑动停止时会触发该事件。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { TextPickerScrollStopCallback } callback - 文本选择器的选项列滑动停止时触发该事件。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onScrollStop(callback: TextPickerScrollStopCallback): TextPickerAttribute;

  /**
   * 文本选择器的选项列滑动停止时触发该事件。与
   * [onScrollStop<sup>14+</sup>]{@link TextPickerAttribute#onScrollStop(callback: TextPickerScrollStopCallback)}相比，
   * callback参数新增了对undefined类型的支持。
   * 
   * 手指拖动选项列触发的滑动，手指离开屏幕且滑动停止时会触发该事件。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<TextPickerScrollStopCallback> } callback - 文本选择器的选项列滑动停止时触发该事件。
   *    <br/>当callback的值为undefined时，不使用回调函数。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onScrollStop(callback: Optional<TextPickerScrollStopCallback>): TextPickerAttribute;

  /**
   * 滑动TextPicker过程中，选项进入分割线区域内（当前列的滑动距离超过选中项高度的一半）时，触发该回调。
   * 
   * > **说明：**
   * >
   * > - 与[onChange]
   * > {@link TextPickerAttribute#onChange(callback:(value: string | string[], index: number | number[]) => void)}事件
   * > 的差别在于，该事件的触发时机早于[onChange]
   * > {@link TextPickerAttribute#onChange(callback:(value: string | string[], index: number | number[]) => void)}事件。
   * >
   * > - 在多列联动场景中，不建议使用该回调，由于该回调标识的是滑动过程中选项进入分割线区域内的节点，而跟随变化的选项并不涉及滑动，
   * >   因此，回调的返回值中，仅当前滑动列的值会正常变化，其余未滑动列的值保持不变。
   * >
   * > - 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { TextPickerEnterSelectedAreaCallback } callback - 滑动TextPicker过程中，选项进入分割线区域时触发的回调。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onEnterSelectedArea(callback: TextPickerEnterSelectedAreaCallback): TextPickerAttribute;

  /**
   * 设置选中项在数据选择列表中的索引值，优先级高于[TextPickerOptions]{@link TextPickerOptions}中的"value"属性。
   * 单列数据选择器使用number类型。多列数据选择器使用number[]类型。
 
   *
   * @param { number | number[] } value - 选中项在数据选择列表中的索引值，索引从0开始。<br/>默认值：0
   *    <br/>当value的值为负数或者超过数据选择列表的最大索引值时，使用默认值。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selectedIndex(value: number | number[]): TextPickerAttribute;

  /**
   * 设置选中项在数据选择列表中的索引值，优先级高于[TextPickerOptions]{@link TextPickerOptions}中的"value"属性。
   * 单列数据选择器使用number类型，多列数据选择器使用number[]类型。与[selectedIndex<sup>10+</sup>]
   * {@link TextPickerAttribute#selectedIndex(value: number | number[])}相比，index参数新增了对undefined类型的支持。
   *
   * @param { Optional<number | number[]> } index - 选中项在数据选择列表中的索引值，索引从0开始。<br/>默认值：0
   *    <br/>当index的值为undefined时，使用[TextPickerOptions]{@link TextPickerOptions}中的selected值。
   *    <br/>当index的值为负数或者超过数据选择列表的最大索引值时，使用默认值。<br/>
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedIndex(index: Optional<number | number[]>): TextPickerAttribute;

  /**
   * 设置分割线样式，不设置该属性则按“默认值”展示分割线。
   * 
   * [DividerOptions]{@link DividerOptions}中startMargin + endMargin 超过组件宽度后，startMargin和endMargin会被置0。
   *
   * @param { DividerOptions | null } value
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  divider(value: DividerOptions | null): TextPickerAttribute;

  /**
   * 设置分割线样式，不设置该属性则按“默认值”展示分割线。与
   * [divider<sup>12+</sup>]{@link TextPickerAttribute#divider(value: DividerOptions | null)}相比，textDivider参数新增了对
   * undefined类型的支持。
   * 
   * [DividerOptions]{@link DividerOptions}中startMargin + endMargin 超过组件宽度后，startMargin和endMargin会被置0。
   *
   * @param { Optional<DividerOptions | null> } textDivider - 默认值：<br/>{<br/>strokeWidth: '2px', <br/>startMargin: 0,
   *    <br/>endMargin: 0, <br/>color: '#33000000'<br/>}<br/>1. 当textDivider的值为undefined时，使用默认值。
   *    <br/>2. 当textDivider设置为有效的[DividerOptions]{@link DividerOptions}时，按设置的样式显示分割线。
   *    <br/>3. 当textDivider设置为null时，不显示分割线。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  divider(textDivider: Optional<DividerOptions | null>): TextPickerAttribute;

  /**
   * 设置渐隐效果的高度。若未设置该属性，则显示默认渐隐效果。
   *
   * @param { Dimension } value - 内容区上下边缘的渐隐高度。<br/>默认值：36vp<br/>取值范围：
   *     [0, +∞)，支持百分比。<br/>**说明：**<br/>1. value设置为百分比时，100%为TextPicker高度的一半。
   *    <br/>2. value设置为0时不显示渐隐效果。<br/>3. value设置为数字且超过TextPicker高度的一半时，使用默认值。
   *    <br/>4. 当value的值为负数时，使用默认值。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  gradientHeight(value: Dimension): TextPickerAttribute;

  /**
   * 设置是否开启触控反馈。
   *
   * @param { Optional<boolean> } enable - 设置是否开启触控反馈。<br/>- true：开启触控反馈。<br/>- false：不开启触控反馈。
   *    <br/>默认值：true<br/>设置为true后，其生效情况取决于系统的硬件是否支持。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 18 dynamic
   */
  enableHapticFeedback(enable: Optional<boolean>): TextPickerAttribute;

  /**
   * 设置渐隐效果的高度。若未设置该属性，则显示默认渐隐效果。与
   * [gradientHeight<sup>12+</sup>]{@link TextPickerAttribute#gradientHeight(value: Dimension)}相比，
   * height参数新增了对undefined类型的支持。
   *
   * @param { Optional<Dimension> } height - 内容区上下边缘的渐隐高度。<br/>默认值：36vp<br/>取值范围：
   *     [0, +∞)，支持百分比。<br/>**说明：**<br/>1. height设置为百分比时，100%为TextPicker高度的一半。
   *    <br/>2. height设置为0时不显示渐隐效果。<br/>3. height设置为数字且超过TextPicker高度的一半时，使用默认值。
   *    <br/>4. 当height的值为undefined或负数时，使用默认值。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  gradientHeight(height: Optional<Dimension>): TextPickerAttribute;

  /**
   * 设置表冠灵敏度。
   *
   * @param { Optional<CrownSensitivity> } sensitivity - 表冠响应灵敏度。<br/>默认值：CrownSensitivity.MEDIUM，响应速度适中。
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): TextPickerAttribute;

  /**
   * 设置选中项的背景样式。
   *
   * @param { Optional<PickerBackgroundStyle> } style - 选中项背景的颜色和边框圆角半径，多列模式时会同时设置所有列的选中项背景
   *    的颜色和圆角半径。<br/>默认值：<br/>{ <br/>color: $r('sys.color.comp_background_tertiary'),
   *    <br/>borderRadius: $r('sys.float.corner_radius_level12')<br/>}
   * @returns { TextPickerAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  selectedBackgroundStyle(style: Optional<PickerBackgroundStyle>): TextPickerAttribute;
}

/**
 * 文本选择器结果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TextPickerResult {

  /**
   * 选中项的文本内容。
   * 
   * **说明**：当显示文本或图片加文本列表时，value值为选中项中的文本值。（文本选择器显示多列时，value为数组类型。）
   * 
   * 当显示图片列表时，value值为空。
   * 
   * value值不支持包含转义字符'\'。
   *
   * @type { string } [since 8 - 9]
   * @type { string | string[] } [since 10]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value: string | string[];

  /**
   * 选中项在选择范围数组中的索引值，索引从0开始。（文本选择器显示多列时，index为数组类型。）
   *
   * @type { number } [since 8 - 9]
   * @type { number | number[] } [since 10]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  index: number | number[];
}

/**
 * 文本选择器弹窗的参数继承自[TextPickerOptions]{@link TextPickerOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TextPickerDialogOptions extends TextPickerOptions {

  /**
   * 设置选择器中选项的高度。number类型取值范围：[0, +∞)，string类型仅支持number类型取值的字符串形式，例如"56"。
   * 
   * 默认值：选中项56vp，非选中项36vp。设置该参数后，选中项与非选中项的高度均为所设置的值。
   *
   * @default 56 vp (selected) and 36 vp (unselected) [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  defaultPickerItemHeight?: number | string;

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
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  canLoop?: boolean;

  /**
   * 设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细。
   * 
   * 默认值：{ color: '#ff182431', font: { size: '14fp', weight: FontWeight.Regular } }
   *
   * @default { color: '#ff182431', font: { size: '14fp', weight: FontWeight.Regular } }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  disappearTextStyle?: PickerTextStyle;

  /**
   * 设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细。
   * 
   * 默认值：{ color: '#ff182431', font: { size: '16fp', weight: FontWeight.Regular } }
   *
   * @default { color: '#ff182431', font: { size: '16fp', weight: FontWeight.Regular } }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
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
   * [ROUNDED_RECTANGLE](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype枚举说明)，呈现
   * 效果依然是胶囊型按钮[Capsule]
   * (docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype枚举说明)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
   * [ROUNDED_RECTANGLE](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype枚举说明)，呈现
   * 效果依然是胶囊型按钮[Capsule]
   * (docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype枚举说明)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  cancelButtonStyle?: PickerDialogButtonStyle;

  /**
   * 设置选中项的文本颜色、字号、字体粗细。
   * 
   * 默认值：{ color: '#ff007dff', font: { size: '20fp', weight: FontWeight.Medium } }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  disableTextStyleAnimation?: boolean;

  /**
   * 设置关闭滑动过程中文本样式变化动效时的各个选项的文本样式，仅当disableTextStyleAnimation为true时生效。
   * 
   * 默认值：与[Text]{@link ./text}组件默认值相同。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  defaultTextStyle?: TextPickerTextStyle;

  /**
   * 点击弹窗中的“确定”按钮时触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onAccept?: (value: TextPickerResult) => void;

  /**
   * 点击弹窗中的“取消”按钮时触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onCancel?: () => void;

  /**
   * 滑动弹窗中的选择器后，选项归位至选中项位置时，触发该回调。
   * 
   * 回调会在滑动动画结束后触发，如果需要快速获取索引值变化，建议使用onEnterSelectedArea接口。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange?: (value: TextPickerResult) => void;

  /**
   * 滑动弹窗中的选择器的选择列停止时，触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  onScrollStop?: Callback<TextPickerResult>;

  /**
   * 滑动过程中，选项进入分割线区域内，触发该回调。与onChange事件的差别在于，该事件的触发时机早于onChange事件，
   * 当当前滑动列滑动距离超过选中项高度的一半时，选项此时已经进入分割线区域内，会触发该事件。
   * 
   * **说明：**
   * 
   * 在多列联动场景中，不建议使用该回调，由于该回调标识的是滑动过程中选项进入分割线区域内的节点，而跟随变化的选项并不涉及滑动，
   * 因此，回调的返回值中，仅当前滑动列的值会正常变化，其余未滑动列的值保持不变。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onEnterSelectedArea?: Callback<TextPickerResult>;

  /**
   * 弹窗遮蔽层区域，在遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。
   * 
   * 默认值：{ x: 0, y: 0, width: '100%', height: '100%' }
   *
   * @default { x: 0, y: 0, width: '100%', height: '100%' } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  maskRect?: Rectangle;

  /**
   * 弹窗在竖直方向上的对齐方式。
   * 
   * 默认值：DialogAlignment.Default
   *
   * @default DialogAlignment.Default [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  alignment?: DialogAlignment;

  /**
   * 弹窗相对alignment所在位置的偏移量。
   * 
   * 默认值：{ dx: 0 , dy: 0 }
   *
   * @default { dx: 0 , dy: 0 } [since 11]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
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
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
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
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * 背景模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 背景效果参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onWillDisappear?: () => void;

  /**
   * 设置弹窗背板的阴影。
   * 
   * 当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
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
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 18 dynamic
   */
  enableHapticFeedback?: boolean;

  /**
   * 设置选中项背景样式。
   * 
   * 默认值：{ color: $r('sys.color.comp_background_tertiary'), borderRadius: $r('sys.float.corner_radius_level12') }
   *
   * @default { color: $r('sys.color.comp_background_tertiary'), borderRadius: $r('sys.float.corner_radius_level12') }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 20 dynamic
   */
  selectedBackgroundStyle?: PickerBackgroundStyle;

  /**
   * 为对话框设置系统风格的材质。不同的材质具有不同的效果，可以影响对话框的背景颜色、边框、阴影等视觉属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  systemMaterial?: SystemUiMaterial;

  /**
   * 设置对话框的形变动画模式。
   *
   * 默认值：DistortionMode.DISTORTION_AUTO
   *
   * @default DistortionMode.DISTORTION_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  distortionMode?: DistortionMode;

  /**
   * 设置对话框的边缘光动画模式。
   *
   * 默认值：EdgeLightMode.EDGELIGHT_AUTO
   *
   * @default EdgeLightMode.EDGELIGHT_AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  edgeLightMode?: EdgeLightMode;
}

/**
 * 文本选择器弹窗的参数继承自[TextPickerOptions]{@link TextPickerOptions}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface TextPickerDialogOptionsExt extends TextPickerOptions {

  /**
   * 设置选择器中选项的高度。number类型取值范围：[0, +∞)，string类型仅支持number类型取值的字符串形式，例如"56"。
   * 
   * 默认值：选中项56vp，非选中项36vp。设置该参数后，选中项与非选中项的高度均为所设置的值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  defaultPickerItemHeight?: number | string;

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
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  canLoop?: boolean;

  /**
   * 设置边缘项（以选中项为基准向上或向下的第二项）的文本颜色、字号、字体粗细、最大字号、最小字号、超长文本截断方式。
   * 
   * 默认值：{ color: '#ff182431', font: { size: '14fp', weight: FontWeight.Regular }, minFontSize: 0, maxFontSize: 0,
   *    overflow: TextOverflow.CLIP }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  disappearTextStyle?: TextPickerTextStyle;

  /**
   * 设置待选项（以选中项为基准向上或向下的第一项）的文本颜色、字号、字体粗细、最大字号、最小字号、超长文本截断方式。
   * 
   * 默认值：{ color: '#ff182431', font: { size: '16fp', weight: FontWeight.Regular}, minFontSize: 0, maxFontSize: 0,
   *    overflow: TextOverflow.CLIP }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  textStyle?: TextPickerTextStyle;

  /**
   * 设置确认按钮显示样式、样式和重要程度、角色、背景色、圆角、文本颜色、字号、字体粗细、字体样式、字体列表、
   * 按钮是否默认响应Enter键。
   * 
   * 说明：
   * 
   * 1. acceptButtonStyle与cancelButtonStyle中最多只能有一个primary字段配置为true，如果同时设置为true，则primary字段不生效，
   *    保持默认值false。
   * 2. 按钮高度默认40vp，在关怀模式-大字体场景下高度不变，即使按钮样式设置为圆角矩形[ROUNDED_RECTANGLE]
   *    (docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype枚举说明)，呈现效果依然是胶囊型
   *    按钮[Capsule](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype枚举说明)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
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
   * 呈现效果依然是胶囊型按钮[Capsule]
   * (docroot://reference/apis-arkui/arkui-ts/ts-basic-components-button.md#buttontype枚举说明)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  cancelButtonStyle?: PickerDialogButtonStyle;

  /**
   * 设置选中项的文本颜色、字号、字体粗细、最大字号、最小字号、超长文本截断方式。
   * 
   * 默认值：{ color: '#ff007dff', font: { size: '20fp', weight: FontWeight.Medium }, minFontSize: 0, maxFontSize: 0,
   *    overflow: TextOverflow.CLIP }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
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
   * 说明：
   * 
   * 设置为true时，滑动过程中无字号、字重、字体颜色等变化动效，且文本均显示为defaultTextStyle属性设置的样式。
   * 如未设置defaultTextStyle，则显示为[Text]{@link ./text}组件默认样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  disableTextStyleAnimation?: boolean;

  /**
   * 设置关闭滑动过程中文本样式变化动效时的各个选项的文本样式，仅当disableTextStyleAnimation为true时生效。
   * 
   * 默认值：与[Text]{@link ./text}组件默认值相同。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  defaultTextStyle?: TextPickerTextStyle;

  /**
   * 点击弹窗中的“确定”按钮时触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onAccept?: Callback<TextPickerResult>;

  /**
   * 点击弹窗中的“取消”按钮时触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onCancel?: VoidCallback;

  /**
   * 滑动弹窗中的选择器后，选项归位至选中项位置时，触发该回调。
   * 
   * 回调会在滑动动画结束后触发，如果需要快速获取索引值变化，建议使用onEnterSelectedArea接口。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onChange?: Callback<TextPickerResult>;

  /**
   * 滑动弹窗中的选择器的选择列停止时，触发该回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onScrollStop?: Callback<TextPickerResult>;

  /**
   * 滑动过程中，选项进入分割线区域内，触发该回调。与onChange事件的差别在于，该事件的触发时机早于onChange事件，
   * 当当前滑动列滑动距离超过选中项高度的一半时，选项此时已经进入分割线区域内，会触发该事件。
   * 
   * **说明：**
   * 
   * 在多列联动场景中，不建议使用该回调，由于该回调标识的是滑动过程中选项进入分割线区域内的节点，而跟随变化的选项并不涉及滑动，
   * 因此，回调的返回值中，仅当前滑动列的值会正常变化，其余未滑动列的值保持不变。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onEnterSelectedArea?: Callback<TextPickerResult>;

  /**
   * 弹窗遮蔽层区域，在遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。
   * 
   * 默认值：{ x: 0, y: 0, width: '100%', height: '100%' }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  maskRect?: Rectangle;

  /**
   * 弹窗在竖直方向上的对齐方式。
   * 
   * 默认值：DialogAlignment.Default
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  alignment?: DialogAlignment;

  /**
   * 弹窗相对alignment所在位置的偏移量。
   * 
   * 默认值：{ dx: 0 , dy: 0 }
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * 背景模糊效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * 背景效果参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  onWillDisappear?: VoidCallback;

  /**
   * 设置弹窗背板的阴影。
   * 
   * 当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
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
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
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
   * @crossplatform [since 26.0.0]
   * @atomicservice
   * @since 20 dynamic
   */
  enableHapticFeedback?: boolean;

  /**
   * 设置选中项背景样式。
   * 
   * 默认值：{ color: $r('sys.color.comp_background_tertiary'), borderRadius: $r('sys.float.corner_radius_level12') }
   *
   * @default { color: $r('sys.color.comp_background_tertiary'), borderRadius: $r('sys.float.corner_radius_level12') }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice
   * @since 20 dynamic
   */
  selectedBackgroundStyle?: PickerBackgroundStyle;
}

/**
 * A text picker dialog box is a dialog box that allows users to select text from the given range.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class TextPickerDialog {

  /**
   * 定义文本滑动选择器弹窗并弹出。
   * 
   * > **说明：**
   * 
   * showTextPickerDialog需先获取[UIContext]{@link @ohos.arkui.UIContext}实例后再进行调用。
   * 
   * > 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [showTextPickerDialog](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#showtextpickerdialog)
   * > 来明确UI的执行上下文。
   *
   * @param { TextPickerDialogOptions } options - 配置文本选择器弹窗的参数。参数缺省时无法弹出弹窗。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.UIContext#showTextPickerDialog
   */
  static show(options?: TextPickerDialogOptions);
}

/**
 * 滑动选择文本、图片或图文混排内容的组件，用户可以按需创建单列数据选择器、多列非联动数据选择器和多列联动数据选择器。
 * 
 * > **说明：**
 * 
 * > - 该组件不建议开发者在动效过程中修改属性数据。
 * >
 * > - 最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置，未配置时默认显示为3行。可通过如下参数查看具体配置
 * > 值$r('sys.float.ohos_id_picker_show_count_landscape')。
 * >
 * > - 多列非联动数据选择器和多列联动数据选择器在下文中统称为多列数据选择器。
 * 
 * 子组件
 * 
 * 该组件为基础组件，不建议包含子组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const TextPicker: TextPickerInterface;

/**
 * 定义文本选择器组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare const TextPickerInstance: TextPickerAttribute;
