/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 * 下拉菜单项的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare interface SelectOption {
  /**
   * 下拉选项内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value: ResourceStr;

  /**
   * 下拉选项图片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  icon?: ResourceStr;

  /**
   * 下拉选项Symbol图片。
   * 
   * symbolIcon优先级高于icon。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  symbolIcon?: SymbolGlyphModifier;
}

/**
 * 提供下拉选择菜单，让用户在多个选项间选择。
 * 
 * > **说明：**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface SelectInterface {
  /**
   *
   * @param { Array<SelectOption> } options - 设置下拉选项。
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options: Array<SelectOption>): SelectAttribute;
}

/**
 * 箭头的位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ArrowPosition {
  /**
   * 文字在前，箭头在后。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  END = 0,

  /**
   * 箭头在前，文字在后。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  START = 1
}

/**
 * 下拉菜单的对齐方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum MenuAlignType {
  /**
   * 按照语言方向起始端对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  START,
  /**
   * 居中对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CENTER,
  /**
   * 按照语言方向末端对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  END
}

/**
 * 下拉菜单避让模式的枚举选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare enum AvoidanceMode {
  /**
   * 目标组件下方无足够空间时，覆盖目标组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  COVER_TARGET,
  /**
   * 目标组件四周无足够空间时，在最大空间处压缩显示（可滚动）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  AVOID_AROUND_TARGET
}

/**
 * 下拉菜单选中某一项时触发的回调函数类型定义。
 *
 * @param {number} index - 选中项的索引，索引值从0开始。
 * @param {string} selectStr - 选中项的值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnSelectCallback = (index: number, selectStr: string) => void;

/**
 * 下拉菜单框的外描边参数对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface MenuOutlineOptions {
  /**
   * 设置外描边宽度，不支持百分比。
   * 
   * 默认值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  width?: Dimension | EdgeOutlineWidths;
 
  /**
   * 设置外描边颜色。
   * 
   * 默认值：#19ffffff
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  color?: ResourceColor | EdgeColors;
 }
 
/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class SelectAttribute extends CommonMethod<SelectAttribute> {
  /**
   * 设置下拉菜单初始选项的索引，第一项的索引为0。当不设置selected属性或设置为异常值时，默认选中值为-1，菜单项不选中；当设置为undefined、null时，选中第一项。
   * 
   * 从API version 10开始，该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   * 
   * 从API version 18开始，该属性支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
   *
   * @param { number } value - 下拉菜单初始选项的索引，索引值从0开始。 [since 8 - 10]
   * @param { number | Resource } value - 下拉菜单初始选项的索引，索引值从0开始。 [since 11]
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selected(value: number | Resource): SelectAttribute;

  /**
   * 设置下拉菜单初始选项的索引，第一项的索引为0。当不设置selected属性或设置异常值时，默认选择值为-1，菜单项不选中；当设置为undefined、null时，选中第一项。
   * 
   * 该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)、
   * [!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
   *
   * @param { Optional<number | Resource> } numCount - 下拉菜单初始选项的索引。<br/>当numCount的值为undefined时，选中第一项。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  selected(numCount: Optional<number | Resource>): SelectAttribute;

  /**
   * 设置下拉按钮的文本内容。选中菜单项后，按钮文本将自动更新为选中的菜单项文本。
   * 
   * 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   * 
   * 从API version 18开始，该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
   *
   * @param { string } value - 下拉按钮本身的文本内容。<br/>**说明：** 文本长度大于列宽时，文本被截断。 [since 8 - 10]
   * @param { ResourceStr } value - 下拉按钮本身的文本内容。<br/>**说明：** 文本长度大于列宽时，文本被截断。 [since 11]
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value(value: ResourceStr): SelectAttribute;

  /**
   * 设置下拉按钮的文本内容。选中菜单项后，按钮文本将自动更新为选中的菜单项文本。与[value]{@link SelectAttribute#value(value: ResourceStr)}相比，resStr参数新增了对
   * undefined类型的支持。
   * 
   * 该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)、
   * [!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
   *
   * @param { Optional<ResourceStr> } resStr - 下拉按钮本身的文本内容。<br/>当resStr的值为undefined时维持上次取值。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  value(resStr: Optional<ResourceStr>): SelectAttribute;

  /**
   * 设置下拉按钮本身的文本样式。当size为0时，文本不显示，当size为负值时，文本的size按照默认值显示。
   *
   * @param { Font } value - 下拉按钮本身的文本样式。<br/>API version 11及以前默认值：<br/>{<br/>size: 
   *     `$r('sys.float.ohos_id_text_size_button1')`,<br/>weight: FontWeight.Medium<br/>} <br/>API version 12以后，如果设置
   *     controlSize的值为：controlSize.SMALL，size默认值是`$r('sys.float.ohos_id_text_size_button2')`，否则为
   *     `$r('sys.float.ohos_id_text_size_button1')`。
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  font(value: Font): SelectAttribute;

  /**
   * 设置下拉按钮本身的文本样式。当size为0时，文本不显示，当size为负值时，文本的size按照默认值显示。与[font]{@link SelectAttribute#font(value: Font)}相比，selectFont
   * 参数新增了对undefined类型的支持。
   *
   * @param { Optional<Font> } selectFont - 下拉按钮本身的文本样式。<br/>如果设置controlSize的值为：controlSize.SMALL，size默认值是
   *     `$r('sys.float.ohos_id_text_size_button2')`，否则为`$r('sys.float.ohos_id_text_size_button1')`。<br/>当selectFont的值为
   *     undefined时，恢复为系统文本样式。
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  font(selectFont: Optional<Font>): SelectAttribute;

  /**
   * 设置下拉按钮本身的文本颜色。
   *
   * @param { ResourceColor } value - 下拉按钮本身的文本颜色。<br/>默认值：`$r('sys.color.ohos_id_color_text_primary')`混合
   *     `$r('sys.color.ohos_id_alpha_content_primary')`的透明度。
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fontColor(value: ResourceColor): SelectAttribute;

  /**
   * 设置下拉按钮本身的文本颜色。与[fontColor]{@link SelectAttribute#fontColor(value: ResourceColor)}相比，resColor参数新增了对undefined类型的支持。
   *
   * @param { Optional<ResourceColor> } resColor - 下拉按钮本身的文本颜色。<br/>当resColor的值为undefined时，默认值：
   *     `$r('sys.color.ohos_id_color_text_primary')`混合`$r('sys.color.ohos_id_alpha_content_primary')`的透明度。<br/>当value的值
   *     为undefined时，维持上次取值。
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  fontColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * 设置下拉菜单选中项的背景色。
   *
   * @param { ResourceColor } value - 下拉菜单选中项的背景色。<br/>默认值：`$r('sys.color.ohos_id_color_component_activated')`混合
   *     `$r('sys.color.ohos_id_alpha_highlight_bg')`的透明度。
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selectedOptionBgColor(value: ResourceColor): SelectAttribute;

  /**
   * 设置下拉菜单选中项的背景色。与[selectedOptionBgColor]{@link SelectAttribute#selectedOptionBgColor(value: ResourceColor)}相比，
   * resColor参数新增了对undefined类型的支持。
   *
   * @param { Optional<ResourceColor> } resColor - 下拉菜单选中项的背景色。<br/>当resColor的值为undefined时，默认值：
   *     `$r('sys.color.ohos_id_color_component_activated')`混合`$r('sys.color.ohos_id_alpha_highlight_bg')`的透明度。
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  selectedOptionBgColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * 设置下拉菜单选中项的文本样式。当size为0的时候，文本不显示，当size为负值的时候，文本的size按照默认值显示。
   *
   * @param { Font } value - 下拉菜单选中项的文本样式。<br/>默认值：<br/>{<br/>size: $r('sys.float.ohos_id_text_size_body1'),<br/>weight:
   *      FontWeight.Regular<br/>}
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selectedOptionFont(value: Font): SelectAttribute;

  /**
   * 设置下拉菜单选中项的文本样式。当size为0的时候，文本不显示，当size为负值的时候，文本的size按照默认值显示。与
   * [selectedOptionFont]{@link SelectAttribute#selectedOptionFont(value: Font)}相比，selectFont参数新增了对undefined类型的支持。
   *
   * @param { Optional<Font> } selectFont - 下拉菜单选中项的文本样式。<br/>当selectFont的值为undefined时，默认值：<br/>{<br/>size: $r('
   *     sys.float.ohos_id_text_size_body1'),<br/>weight: FontWeight.Regular<br/>}
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  selectedOptionFont(selectFont: Optional<Font>): SelectAttribute;

  /**
   * 设置下拉菜单选中项的文本颜色。
   *
   * @param { ResourceColor } value - 下拉菜单选中项的文本颜色。<br/>默认值：$r('sys.color.ohos_id_color_text_primary_activated')
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selectedOptionFontColor(value: ResourceColor): SelectAttribute;

  /**
   * 设置下拉菜单选中项的文本颜色。与[selectedOptionFontColor]{@link SelectAttribute#selectedOptionFontColor(value: ResourceColor)}相比，
   * resColor参数新增了对undefined类型的支持。
   *
   * @param { Optional<ResourceColor> } resColor - 下拉菜单选中项的文本颜色。<br/>当resColor的值为undefined时，默认值为$r('
   *     sys.color.ohos_id_color_text_primary_activated')。
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  selectedOptionFontColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * 设置下拉菜单项的背景色。
   *
   * @param { ResourceColor } value - 下拉菜单项的背景色。<br/>默认值：<br/>API version 11之前，默认值为Color.White。<br/>API version 11及之后，默认
   *     值为Color.Transparent。
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  optionBgColor(value: ResourceColor): SelectAttribute;

  /**
   * 设置下拉菜单项的背景色。与[optionBgColor]{@link SelectAttribute#optionBgColor(value: ResourceColor)}相比，resColor参数新增了对undefined类型
   * 的支持。
   *
   * @param { Optional<ResourceColor> } resColor - 下拉菜单项的背景色。<br/>当resColor的值为undefined时，下拉菜单项的背景色为Color.White。
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  optionBgColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * 设置下拉菜单项的文本样式。当size为0的时候，文本不显示，当size为负值的时候，文本的size按照默认值显示。
   *
   * @param { Font } value - 下拉菜单项的文本样式。<br/>默认值：<br/>{<br/>size: $r('sys.float.ohos_id_text_size_body1'),<br/>weight: 
   *     FontWeight.Regular<br/>}
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  optionFont(value: Font): SelectAttribute;

  /**
   * 设置下拉菜单项的文本样式。当size为0的时候，文本不显示，当size为负值的时候，文本的size按照默认值显示。
   * 
   * 与[optionFont]{@link SelectAttribute#optionFont(value: Font)}相比，selectFont参数新增了对undefined类型的支持。
   *
   * @param { Optional<Font> } selectFont - 下拉菜单项的文本样式。<br/>当selectFont的值为undefined时，默认值：<br/>{<br/>size: $r('
   *     sys.float.ohos_id_text_size_body1'),<br/>weight: FontWeight.Regular<br/>}
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  optionFont(selectFont: Optional<Font>): SelectAttribute;

  /**
   * 设置下拉菜单项的文本颜色。
   *
   * @param { ResourceColor } value - 下拉菜单项的文本颜色。<br/>默认值：$r('sys.color.ohos_id_color_text_primary')
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  optionFontColor(value: ResourceColor): SelectAttribute;

  /**
   * 设置下拉菜单项的文本颜色。与[optionFontColor]{@link SelectAttribute#optionFontColor(value: ResourceColor)}相比，resColor参数新增了对
   * undefined类型的支持。
   *
   * @param { Optional<ResourceColor> } resColor - 下拉菜单项的文本颜色。<br/>当resColor的值为undefined时，默认值：$r('
   *     sys.color.ohos_id_color_text_primary')
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  optionFontColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * 下拉菜单选中某一项时，会触发回调。
   *
   * @param { function } callback
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onSelect(callback: (index: number, value: string) => void): SelectAttribute;

  /**
   * 下拉菜单选中某一项时，会触发回调。与[onSelect]{@link SelectAttribute#onSelect(callback: (index: number, value: string) => void)}相比，
   * callback参数新增了对undefined类型的支持。
   *
   * @param { Optional<OnSelectCallback> } callback - 下拉菜单选中某一项的回调。<br/>当callback的值为undefined时，不使用回调函数。
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onSelect(callback: Optional<OnSelectCallback>): SelectAttribute;

  /**
   * 设置下拉菜单项的文本与箭头的间距。不支持设置百分比。将间距设置为null、undefined，或者小于等于8的值时，取默认值。
   *
   * @param { Length } value - 下拉菜单项的文本与箭头的间距。<br/>默认值：8<br/>**说明：** 设置string类型时，不支持百分比。
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  space(value: Length): SelectAttribute;

  /**
   * 设置下拉菜单项的文本与箭头的间距。不支持设置百分比。设置为null、undefined，或者小于等于8的值，取默认值。
   *
   * @param { Optional<Length> } spaceLength - 下拉菜单项的文本与箭头之间的间距。<br/>当spaceLength的值为undefined时，默认值：8
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  space(spaceLength: Optional<Length>): SelectAttribute;

  /**
   * 设置下拉菜单项的文本与箭头之间的对齐方式。
   *
   * @param { ArrowPosition } value - 下拉菜单项的文本与箭头之间的对齐方式。<br/>默认值：ArrowPosition.END
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  arrowPosition(value: ArrowPosition): SelectAttribute;

  /**
   * 设置下拉菜单项的文本与箭头之间的对齐方式。与[arrowPosition]{@link SelectAttribute#arrowPosition(value: ArrowPosition)}相比，position参数新增了对
   * undefined类型的支持。
   *
   * @param { Optional<ArrowPosition> } position - 下拉菜单项的文本与箭头之间的对齐方式。<br/>当position的值为undefined时，默认值：ArrowPosition.END
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  arrowPosition(position: Optional<ArrowPosition>): SelectAttribute;

  /**
   * 设置下拉按钮与下拉菜单间的对齐方式。
   *
   * @param { MenuAlignType } alignType - 对齐方式类型。<br/>默认值：MenuAlignType.START
   * @param { Offset } offset - 按照对齐类型对齐后，下拉菜单相对下拉按钮的偏移量。<br/> 默认值：{dx: 0, dy: 0}
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */ 
  menuAlign(alignType: MenuAlignType, offset?: Offset): SelectAttribute;

  /**
   * 设置下拉按钮与下拉菜单间的对齐方式。与[menuAlign]{@link SelectAttribute#menuAlign(alignType: MenuAlignType, offset?: Offset)}<sup>10+<
   * /sup>相比，alignType参数新增了对undefined类型的支持。
   *
   * @param { Optional<MenuAlignType> } alignType - 对齐方式类型。<br/>当alignType的值为undefined时，默认值：MenuAlignType.START
   * @param { Offset } offset - 按照对齐类型对齐后，下拉菜单相对下拉按钮的偏移量。<br/> 默认值：{dx: 0, dy: 0}
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  menuAlign(alignType: Optional<MenuAlignType>, offset?: Offset): SelectAttribute;

  /**
   * 设置下拉菜单项的宽度，不支持设置百分比。OptionWidthMode类型为枚举类型，OptionWidthMode决定下拉菜单是否继承下拉按钮宽度。
   * 
   * 当设置为异常值或小于最小宽度56vp时，属性无效，菜单项宽度设为默认值，即2栅格。
   * 
   * Select组件距屏幕边缘的左右间距为16vp，建议将组件本身及菜单项的宽度设置为小于等于`calc(100% - 32vp)`的值，以避免下拉菜单弹出时发生偏移。
   *
   * @param { Dimension | OptionWidthMode } value - 下拉菜单项的宽度。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  optionWidth(value: Dimension | OptionWidthMode ): SelectAttribute;

  /**
   * 设置下拉菜单项的宽度，不支持设置百分比。OptionWidthMode类型为枚举类型，OptionWidthMode决定下拉菜单是否继承下拉按钮宽度。与
   * [optionWidth]{@link SelectAttribute#optionWidth(value: Dimension | OptionWidthMode )}<sup>11+</sup>相比，width参数新增了对
   * undefined类型的支持。
   * 
   * 当设置为异常值或小于最小宽度56vp时，属性无效，菜单项宽度设为默认值，即2栅格。
   * 
   * Select组件距屏幕边缘的左右间距为16vp，建议将组件本身及菜单项的宽度设置为小于等于`calc(100% - 32vp)`的值，以避免下拉菜单弹出时发生偏移。
   *
   * @param { Optional<Dimension | OptionWidthMode> } width - 下拉菜单项的宽度。<br/>当width的值为undefined时，属性无效，菜单项宽度设为默认值，即2栅格。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  optionWidth(width: Optional<Dimension | OptionWidthMode> ): SelectAttribute;

  /**
   * 设置下拉菜单显示的最大高度，不支持设置百分比。默认最大高度是屏幕可用高度的80%，设置的菜单最大高度不能超过默认最大高度。
   * 
   * 当设置为异常值或零时，属性不生效。
   * 
   * 如果下拉菜单所有选项的实际高度没有设定的高度大，下拉菜单的高度按实际高度显示。
   *
   * @param { Dimension } value - 下拉菜单显示的最大高度。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  optionHeight(value: Dimension): SelectAttribute;

  /**
   * 设置下拉菜单显示的最大高度，不支持设置百分比。默认最大高度是屏幕可用高度的80%，设置的菜单最大高度不能超过默认最大高度。与
   * [optionHeight]{@link SelectAttribute#optionHeight(value: Dimension)}<sup>11+</sup>相比，height参数新增了对undefined类型的支持。
   * 
   * 当设置为异常值或零时，属性不生效。
   * 
   * 如果下拉菜单所有选项的实际高度小于设定的高度，下拉菜单的高度按实际高度显示。
   *
   * @param { Optional<Dimension> } height - 下拉菜单显示的最大高度。<br/>当height的值为undefined时，属性不生效，下拉菜单最大高度设为默认值，即下拉菜单最大高度默认值为屏幕可用
   *     高度的80%。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  optionHeight(height: Optional<Dimension>): SelectAttribute;

  /**
   * 设置下拉菜单的背景色。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { ResourceColor } value - 下拉菜单的背景色。<br/>默认值：<br/>API version 11之前，默认值为$r('sys.color.ohos_id_color_card_bg')。
   *     <br/>API version 11及之后，默认值为Color.Transparent。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  menuBackgroundColor(value: ResourceColor): SelectAttribute;

  /**
   * 设置下拉菜单的背景色。与[menuBackgroundColor]{@link SelectAttribute#menuBackgroundColor(value: ResourceColor)}<sup>11+</sup>相比，
   * resColor参数新增了对undefined类型的支持。
   *
   * @param { Optional<ResourceColor> } resColor - 下拉菜单的背景色。<br/>当resColor的值为undefined时，默认值为Color.Transparent。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  menuBackgroundColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * 设置下拉菜单的背景模糊材质。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { BlurStyle } value - 下拉菜单的背景模糊材质。<br/>默认值：BlurStyle.COMPONENT_ULTRA_THICK
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  menuBackgroundBlurStyle(value: BlurStyle): SelectAttribute;

  /**
   * 设置下拉菜单的背景模糊材质。与[menuBackgroundBlurStyle]{@link SelectAttribute#menuBackgroundBlurStyle(value: BlurStyle)}<sup>11+</
   * sup>相比，style参数新增了对undefined类型的支持。
   *
   * @param { Optional<BlurStyle> } style - 下拉菜单的背景模糊材质。<br/>当style的值为undefined时，默认值：BlurStyle.COMPONENT_ULTRA_THICK
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  menuBackgroundBlurStyle(style: Optional<BlurStyle>): SelectAttribute;

  /**
   * 设置Select组件的尺寸。
   *
   * @param { ControlSize } value - Select组件的尺寸。<br/>默认值：ControlSize.NORMAL
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  controlSize(value: ControlSize): SelectAttribute;

  /**
   * 设置Select组件的尺寸。与[controlSize]{@link SelectAttribute#controlSize(value: ControlSize)}<sup>12+</sup>相比，size参数新增了对
   * undefined类型的支持。
   *
   * @param { Optional<ControlSize> } size - Select组件的尺寸。<br/>当size的值为undefined时，默认值为ControlSize.NORMAL。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  controlSize(size: Optional<ControlSize>): SelectAttribute;

  /**
   * 定制Select下拉菜单项内容区的方法。在应用了menuItemContentModifier后，下拉菜单的内容将完全由开发者自定义，此时为Select组件设置的分割线、选项颜色及下拉菜单的字体颜色等属性将不再生效。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { ContentModifier<MenuItemConfiguration> } modifier - 在Select组件上，定制下拉菜单项内容区的方法。<br/>modifier：内容修改器，开发者需要自定义
   *     class实现ContentModifier接口。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  menuItemContentModifier(modifier: ContentModifier<MenuItemConfiguration>): SelectAttribute;

  /**
   * 定制Select下拉菜单项内容区的方法。与
   * [menuItemContentModifier]{@link SelectAttribute#menuItemContentModifier(modifier: ContentModifier<MenuItemConfiguration>)}
   * <sup>12+</sup>相比，modifier参数新增了对undefined类型的支持。在应用了menuItemContentModifier后，下拉菜单的内容将完全由开发者自定义，此时为Select组件设置的分割线、选项颜色
   * 及下拉菜单的字体颜色等属性将不再生效。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<ContentModifier<MenuItemConfiguration>> } modifier - 在Select组件上，定制下拉菜单项内容区的方法。<br/>modifier：内容修改
   *     器，开发者需要自定义class实现ContentModifier接口。<br/>当modifier的值为undefined时，不使用内容修改器。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  menuItemContentModifier(modifier: Optional<ContentModifier<MenuItemConfiguration>>): SelectAttribute;

  /**
   * 设置分割线样式，不设置该属性则按“默认值”展示分割线。
   *
   * @param { Optional<DividerOptions> | null } options - 1.设置DividerOptions，则按设置的样式显示分割线。<br/>默认值：<br/>{<br/>
   *     strokeWidth: '1px' , <br/>color: '#33182431'<br/>}<br/>2.设置为null时，不显示分割线。<br/>3.strokeWidth设置过宽时，会覆盖文字。分割线会从每一个
   *     Item底部开始，同时向上向下画分割线。<br/>4.startMargin和endMargin的默认值与不设置divider属性时的分割线样式保持一致。startMargin和endMargin的和与
   *     optionWidth的值相等时，不显示分割线。 startMargin和endMargin的和超过optionWidth的值时，按照默认样式显示分割线。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  divider(options: Optional<DividerOptions> | null): SelectAttribute;

  /**
   * 定制Select按钮文本样式的方法，在应用了textModifier之后，Select按钮的文本样式将完全由开发者自定义。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<TextModifier> } modifier - 在Select组件上，定制按钮文本样式的方法。 <br/> 当modifier的值为undefined时，不自定义文本样式。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  textModifier(modifier: Optional<TextModifier>): SelectAttribute;

  /**
   * 定制Select按钮下拉箭头图标样式的方法，在应用arrowModifier之后，Select按钮下拉箭头的图标样式将完全由开发者自定义。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<SymbolGlyphModifier> } modifier - 在Select组件上，定制Select按钮下拉箭头图标样式的方法。 <br/> 当modifier的值为undefined时，
   *     不自定义下拉箭头图标样式。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  arrowModifier(modifier: Optional<SymbolGlyphModifier>): SelectAttribute;
  
  /**
   * 定制Select下拉菜单未选中项文本样式的方法，在应用optionTextModifier之后，下拉菜单未选中项的文本样式将完全由开发者自定义。
   * 
   * 如果[optionFont]{@link SelectAttribute#optionFont(value: Font)}与optionTextModifier的Font属性同时设置，则优先使用
   * [optionFont]{@link SelectAttribute#optionFont(value: Font)}设置下拉菜单未选中项的文本样式；
   * [optionFont]{@link SelectAttribute#optionFont(value: Font)}中缺省的属性将设置为对应的默认值。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<TextModifier> } modifier - 在Select组件上，定制Select下拉菜单未选中项样式的方法。<br/> 当modifier的值为undefined时，不自定义下拉菜单
   *     未选中项的文本样式。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  optionTextModifier(modifier: Optional<TextModifier>): SelectAttribute;

  /**
   * 定制Select下拉菜单选中项文本样式的方法，在应用selectedOptionTextModifier之后，下拉菜单选中项的文本样式将完全由开发者自定义。
   * 
   * 如果[selectedOptionFont]{@link SelectAttribute#selectedOptionFont(value: Font)}与selectedOptionTextModifier的Font属性同时设
   * 置，则优先使用[selectedOptionFont]{@link SelectAttribute#selectedOptionFont(value: Font)}设置下拉菜单选中项的文本样式；若未设置
   * [selectedOptionFont]{@link SelectAttribute#selectedOptionFont(value: Font)}，则优先使用
   * [optionFont]{@link SelectAttribute#optionFont(value: Font)}设置下拉菜单选中项的文本样式。其中
   * [selectedOptionFont]{@link SelectAttribute#selectedOptionFont(value: Font)}或者
   * [optionFont]{@link SelectAttribute#optionFont(value: Font)}缺省的属性将设置为对应的默认值。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<TextModifier> } modifier - 设置下拉菜单项选中项的文本样式。<br/>开发者可以根据需要管理和维护文本的样式进行设置。 <br/> 当modifier的值为
   *     undefined时，不自定义下拉菜单项选中项的文本样式。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  selectedOptionTextModifier(modifier: Optional<TextModifier>): SelectAttribute;

  /**
   * 设置分割线样式，不设置该属性则按“默认值”展示分割线。该属性与divider互斥，按调用顺序生效。
   *
   * @param { Optional<DividerStyleOptions> } style - 1.设置DividerOptions，则按设置的样式显示分割线。<br/>默认值：<br/>{<br/>strokeWidth: '
   *     1px' , <br/>color: '#33182431'<br/>}<br/>2.设置为null或undefined时，展示默认分割线。<br/>3.当mode为FLOAT_ABOVE_MENU时，
   *     strokeWidth设置过宽时，会覆盖文字。分割线会从每一个Item底部开始，同时向上向下画分割线。当mode为EMBEDDED_IN_MENU时，分割线在Menu中展开，独立占用高度。<br/>4
   *     .startMargin和endMargin的默认值与不设置divider属性时的分割线样式保持一致。startMargin和endMargin的和与optionWidth的值相等时，不显示分割线。startMargin和
   *     endMargin的和超过optionWidth的值时，按照默认样式显示分割线。
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  dividerStyle(style: Optional<DividerStyleOptions>): SelectAttribute;

  /**
   * 设置下拉菜单的避让模式。
   *
   * @param { AvoidanceMode } mode - 设置下拉菜单的避让模式。<br/>默认值：AvoidanceMode.COVER_TARGET
   * @returns { SelectAttribute } Returns the chained object of Select component attributes
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  avoidance(mode: AvoidanceMode): SelectAttribute;

  /**
   * 设置下拉菜单框的外描边样式。
   *
   * @param { MenuOutlineOptions } outline - 下拉菜单框的外描边样式。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  menuOutline(outline: MenuOutlineOptions): SelectAttribute;
  
  /**
   * 设置下拉菜单是否显示在子窗中。未通过该接口设置时，下拉菜单默认不显示在子窗中。
   *
   * @param { Optional<boolean> } showInSubWindow - 设置下拉菜单是否显示在子窗中。<br>true代表下拉菜单显示在子窗中。<br>false代表下拉菜单不显示在子窗中。
   * @returns { SelectAttribute } The attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  showInSubWindow(showInSubWindow: Optional<boolean>): SelectAttribute;

  
  /**
   * 设置是否显示默认选择的图标。
   *
   * @param { boolean } show - 是否显示默认选定的图标。<br/>true：显示默认选择的图标；false：不显示默认选择的图标，通过突出显示背景色来表示选中。<br/>默认值：false<br/>当show为
   *     true时，若设置了selectedOptionBgColor选中项的背景色时，则同时显示选中项的背景色和默认选定的图标；若未通过selectedOptionBgColor设置选中项的背景色时，不突出显示背景色，只显示默认
   *     选定的图标。
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  showDefaultSelectedIcon(show: boolean): SelectAttribute;

  /**
   * 设置下拉菜单是否避让软键盘。未通过该接口设置时，默认不避让软键盘。
   *
   * @param { Optional<MenuKeyboardAvoidMode> } mode - 设置下拉菜单是否避让软键盘。取值为undefined时，按照MenuKeyboardAvoidMode.NONE处理，不避让软键
   *     盘。
   * @returns { SelectAttribute } - the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  keyboardAvoidMode(mode: Optional<MenuKeyboardAvoidMode>): SelectAttribute;

  /**
   * 设置Select的菜单避让软键盘的最小距离。未通过该接口设置，最小距离默认为8vp。仅当[keyboardAvoidMode]{@link SelectAttribute#keyboardAvoidMode}设置为避让软键盘时生
   * 效。
   *
   * @param { Optional<LengthMetrics> } distance - 设置下拉菜单避让软键盘的最小距离。设置为负数、undefined时，按照8vp处理。
   * @returns { SelectAttribute } - the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  minKeyboardAvoidDistance(distance: Optional<LengthMetrics>): SelectAttribute;

  /**
   * 设置Select下拉菜单的系统材质。不同系统材质对应不同的属性影响效果，该接口影响下拉菜单背景色
   * [menuBackgroundColor]{@link SelectAttribute#menuBackgroundColor(resColor: Optional<ResourceColor>)}、边框颜色
   * [borderColor]{@link CommonMethod#borderColor}、边框宽度[borderWidth]{@link CommonMethod#borderWidth}、阴影
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}等参数，不建议与上述接口一起使用。
   *
   * @param { Optional<SystemUiMaterial> } material - 设置下拉菜单系统材质。材质设置为非法值、undefined时，按照不设置系统材质处理。
   * @returns { SelectAttribute } - the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi [since 23 - 24]
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  menuSystemMaterial(material: Optional<SystemUiMaterial>): SelectAttribute;

  /**
   * 设置Select组件的背景模糊效果。
   *
   * @param { Optional<BackgroundBlurStyleOptions> } blurStyle - 设置Select组件的背景模糊效果。
   * @returns { SelectAttribute } - the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  menuBackgroundBlurStyleOptions(blurStyle: Optional<BackgroundBlurStyleOptions>): SelectAttribute;

  /**
   * 设置Select组件的背景属性。
   *
   * @param { Optional<BackgroundEffectOptions> } effect - 设置Select组件的背景属性，包括：模糊半径、亮度、饱和度和颜色。
   * @returns { SelectAttribute } - the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  menuBackgroundEffect(effect: Optional<BackgroundEffectOptions>): SelectAttribute;

  /**
   * Sets the distortion animation mode of the select with the new material.
   *
   * @param { DistortionMode } mode - Animation mode. The default value is DistortionMode.DISTORTION_AUTO.
   * @returns { SelectAttribute } - the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  menuDistortionMode(mode: DistortionMode): SelectAttribute;

  /**
   * Sets the edgelight animation mode of the select with the new material.
   *
   * @param { EdgeLightMode } mode - Animation mode. The default value is EdgeLightMode.EDGELIGHT_DISABLED.
   * @returns { SelectAttribute } - the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  menuEdgeLightMode(mode: EdgeLightMode): SelectAttribute;
}

/**
 * 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface MenuItemConfiguration extends CommonConfiguration<MenuItemConfiguration> {
  /**
   * 下拉菜单项的文本内容。
   * 
   * **说明：** 
   * 
   * 当文本字符的长度超过菜单项文本区域的宽度时，文本将会被截断。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  value: ResourceStr;

  /**
   * 下拉菜单项的图片内容。
   * 
   * **说明：** 
   * 
   * string格式可用于加载网络图片和本地图片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  icon?: ResourceStr;

  /**
   * 下拉选项Symbol图片。
   * 
   * symbolIcon优先级高于icon。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  symbolIcon?: SymbolGlyphModifier;

  /**
   * 下拉菜单项是否被选中。值为true表示选中，值为false表示未选中。
   * 
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selected: boolean;

  /**
   * 下拉菜单项的索引，索引值从0开始。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * 下拉菜单选中某一项的回调函数。
   * 
   * <br/>**说明：** 
   * 
   * <br/>index会赋值给事件[onSelect]{@link SelectAttribute#onSelect(callback: (index: number, value: string) => void)}
   * 回调中的索引参数； value会返回给Select组件显示，同时会赋值给事件
   * [onSelect]{@link SelectAttribute#onSelect(callback: (index: number, value: string) => void)}回调中的文本参数。
   *
   * @param { number } index - 选中菜单项的索引。
   * @param { string } value - 选中菜单项的文本。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  triggerSelect(index: number, value: string): void;
}
/**
 * 提供下拉选择菜单，让用户在多个选项间选择。
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
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare const Select: SelectInterface;

/**
 * Defines Select Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare const SelectInstance: SelectAttribute;