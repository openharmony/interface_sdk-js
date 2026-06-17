'use static'
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
 * 提供下拉选择菜单，让用户在多个选项间选择。
 * 
 * > **说明：**
 * >
 * > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 * >
 * > -
 * 
 * ###### 子组件
 * 
 * 无
 * 
 * @file
 * @kit ArkUI
 */
import { CommonConfiguration, CommonMethod, ContentModifier, BlurStyle, Bindable, MenuKeyboardAvoidMode, DistortionMode, EdgeLightMode } from './common';
import { ControlSize } from './button';
import { LengthMetrics } from '../Graphics';
import { DividerOptions } from './textPicker';
import { ResourceStr, Dimension, EdgeOutlineWidths, ResourceColor, EdgeColors, Resource, Font, Length, Offset, DividerStyleOptions } from './units';
import { SymbolGlyphModifier } from '../SymbolGlyphModifier';
import { TextModifier } from '../TextModifier';
import { OptionWidthMode } from './enums';
import { ComponentBuilder,  CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod, SystemUiMaterial, BackgroundBlurStyleOptions, BackgroundEffectOptions } from './common';
/**
 * 下拉菜单项的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SelectOption {
    /**
     * 下拉选项内容。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: ResourceStr;
    /**
     * 下拉选项图片。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    icon?: ResourceStr;
    /**
     * 下拉选项Symbol图片。
     * 
     * symbolIcon优先级高于icon。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    symbolIcon?: SymbolGlyphModifier;
}
/**
 * 箭头的位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ArrowPosition {
    /**
     * 文字在前，箭头在后。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    END = 0,
    /**
     * 箭头在前，文字在后。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    START = 1
}
/**
 * 定义Select组件下拉菜单与Select组件本身的对齐方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MenuAlignType {
    /**
     * 菜单与Select组件左对齐。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    START,
    /**
     * 菜单与Select组件居中对齐。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    CENTER,
    /**
     * 菜单与Select组件右对齐。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    END
}
/**
 * 定义Select下拉菜单的避让模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AvoidanceMode {
    /**
     * 菜单覆盖目标组件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    COVER_TARGET,
    /**
     * 菜单在最大空间内显示（压缩滚动条）。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    AVOID_AROUND_TARGET
}
/**
 * Select组件选择项的回调函数类型。
 *
 * @param {int} index - 选中的项的索引。
 * @param {string} selectStr - 选中的项的文本内容。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnSelectCallback = (index: int, selectStr: string) => void;
/**
 * 菜单外描边选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MenuOutlineOptions {
    /**
     * 外描边宽度。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: Dimension | EdgeOutlineWidths;
    /**
     * 外描边颜色。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    color?: ResourceColor | EdgeColors;
}

/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SelectAttribute extends CommonMethod {
    /**
     * 设置下拉菜单初始选项的索引，第一项的索引为0。当不设置selected属性或设置异常值时，默认选择值为-1，菜单项不选中；当设置为undefined、null时，选中第一项。
     * 
     * 该属性支持Bindable双向绑定变量。
     *
     * @param { int | Resource | undefined | Bindable<int> | Bindable<Resource> } numCount - 下拉菜单初始选项的索引。<br/>当numCount的
     *     值为undefined时，选中第一项。
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default selected(numCount: int | Resource | undefined | Bindable<int> | Bindable<Resource>): this;
    /**
     * 设置下拉按钮的文本内容。选中菜单项后，按钮文本将自动更新为选中的菜单项文本。string和resource类型支持Bindable双向绑定变量。
     *
     * @param { ResourceStr | undefined | Bindable<string> | Bindable<Resource> } resStr - 下拉按钮本身的文本内容。<br/>当resStr的值为
     *     undefined时维持上次取值。
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default value(resStr: ResourceStr | undefined | Bindable<string> | Bindable<Resource>): this;
    /**
     * 设置下拉按钮本身的文本样式。当size为0时，文本不显示，当size为负值时，文本的size按照默认值显示。与[font]{@link font}相比，value参数新增了对undefined类型的支持。
     *
     * @param { Font | undefined } value - 下拉按钮本身的文本样式。<br/>如果设置controlSize的值为：controlSize.SMALL，size默认值是
     *     `$r('sys.float.ohos_id_text_size_button2')`，否则为`$r('sys.float.ohos_id_text_size_button1')`。<br/>当value的值为
     *     undefined时，恢复为系统文本样式。
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default font(value: Font | undefined): this;
    /**
     * 设置下拉按钮本身的文本颜色。与[fontColor]{@link fontColor}相比，value参数新增了对undefined类型的支持。
     *
     * @param { ResourceColor | undefined } value - 下拉按钮本身的文本颜色。<br/>当resColor的值为undefined时，默认值：
     *     `$r('sys.color.ohos_id_color_text_primary')`混合`$r('sys.color.ohos_id_alpha_content_primary')`的透明度。<br/>当value
     *     的值为undefined时，维持上次取值。
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default fontColor(value: ResourceColor | undefined): this;
    /**
     * 设置下拉菜单选中项的背景色。与[selectedOptionBgColor]{@link selectedOptionBgColor}相比，resColor参数新增了对undefined类型的支持。
     *
     * @param { ResourceColor | undefined } value - 下拉菜单选中项的背景色。<br/>当resColor的值为undefined时，默认值：
     *     `$r('sys.color.ohos_id_color_component_activated')`混合`$r('sys.color.ohos_id_alpha_highlight_bg')`的透明度。
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default selectedOptionBgColor(value: ResourceColor | undefined): this;
    /**
     * 设置下拉菜单选中项的文本样式。当size为0的时候，文本不显示，当size为负值的时候，文本的size按照默认值显示。与[selectedOptionFont]{@link selectedOptionFont}相比，
     * value参数新增了对undefined类型的支持。
     *
     * @param { Font | undefined } value - 下拉菜单选中项的文本样式。<br/>当value的值为undefined时，默认值：<br/>{<br/>size: $r('
     *     sys.float.ohos_id_text_size_body1'),<br/>weight: FontWeight.Regular<br/>}
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default selectedOptionFont(value: Font | undefined): this;
    /**
     * 设置下拉菜单选中项的文本颜色。与[selectedOptionFontColor]{@link selectedOptionFontColor}相比，resColor参数新增了对undefined类型的支持。
     *
     * @param { ResourceColor | undefined } value - 下拉菜单选中项的文本颜色。<br/>当resColor的值为undefined时，默认值为$r('
     *     sys.color.ohos_id_color_text_primary_activated')。
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default selectedOptionFontColor(value: ResourceColor | undefined): this;
    /**
     * 设置下拉菜单项的背景色。与[optionBgColor]{@link optionBgColor}相比，value参数新增了对undefined类型的支持。
     *
     * @param { ResourceColor | undefined } value - 下拉菜单项的背景色。<br/>当resColor的值为undefined时，默认值为Color.Transparent。
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default optionBgColor(value: ResourceColor | undefined): this;
    /**
     * 设置下拉菜单项的文本样式。当size为0的时候，文本不显示，当size为负值的时候，文本的size按照默认值显示。
     * 
     * 与[optionFont]{@link optionFont}相比，value参数新增了对undefined类型的支持。
     *
     * @param { Font | undefined } value - 下拉菜单项的文本样式。<br/>当value的值为undefined时，默认值：<br/>{<br/>size: $r('
     *     sys.float.ohos_id_text_size_body1'),<br/>weight: FontWeight.Regular<br/>}
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default optionFont(value: Font | undefined): this;
    /**
     * 设置下拉菜单项的文本颜色。与[optionFontColor]{@link optionFontColor}相比，resColor参数新增了对undefined类型的支持。
     *
     * @param { ResourceColor | undefined } value - 下拉菜单项的文本颜色。<br/>当value的值为undefined时，默认值：$r('
     *     sys.color.ohos_id_color_text_primary')
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default optionFontColor(value: ResourceColor | undefined): this;
    /**
     * 下拉菜单选中某一项时，触发回调。
     *
     * @param { OnSelectCallback | undefined } callback - 下拉菜单选中某一项的回调。<br/>当callback的值为undefined时，不使用回调函数。
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onSelect(callback: OnSelectCallback | undefined): this;
    /**
     * 设置下拉菜单项的文本与箭头的间距。不支持设置百分比。设置为null、undefined，或者小于等于8的值，取默认值。
     *
     * @param { Length | undefined } value - 下拉菜单项的文本与箭头之间的间距。<br/>当value的值为undefined时，默认值：8
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default space(value: Length | undefined): this;
    /**
     * 设置下拉菜单项的文本与箭头之间的对齐方式。与[arrowPosition]{@link ArrowPosition}相比，position参数新增了对undefined类型的支持。
     *
     * @param { ArrowPosition | undefined } value - 下拉菜单项的文本与箭头之间的对齐方式。<br/>当value的值为undefined时，默认值：ArrowPosition.END
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default arrowPosition(value: ArrowPosition | undefined): this;
    /**
     * 设置下拉按钮与下拉菜单间的对齐方式。
     *
     * @param { MenuAlignType | undefined } alignType - 对齐方式类型。<br/>当alignType的值为undefined时，默认值：MenuAlignType.START
     * @param { Offset | undefined } [offset] - 按照对齐类型对齐后，下拉菜单相对下拉按钮的偏移量。<br/> 默认值：{dx: 0, dy: 0}
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default menuAlign(alignType: MenuAlignType | undefined, offset?: Offset | undefined): this;
    /**
     * 设置下拉菜单项的宽度，不支持设置百分比。OptionWidthMode类型为枚举类型，OptionWidthMode决定下拉菜单是否继承下拉按钮宽度。与
     * [optionWidth](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-select copy.md#optionwidth11)<sup>11+</
     * sup>相比，width参数新增了对undefined类型的支持。
     * 
     * 当设置为异常值或小于最小宽度56vp时，属性无效，菜单项宽度设为默认值，即2栅格。
     *
     * @param { Dimension | OptionWidthMode | undefined } value - 下拉菜单项的宽度。<br/>当width的值为undefined时，属性无效，菜单项宽度设为默认值，即2栅
     *     格。
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default optionWidth(value: Dimension | OptionWidthMode | undefined): this;
    /**
     * 设置下拉菜单显示的最大高度，不支持设置百分比。默认最大高度是屏幕可用高度的80%，设置的菜单最大高度不能超过默认最大高度。与
     * [optionHeight](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-select copy.md#optionheight11)<sup>11+
     * </sup>相比，height参数新增了对undefined类型的支持。
     * 
     * 当设置为异常值或零时，属性不生效。
     * 
     * 如果下拉菜单所有选项的实际高度小于设定的高度，下拉菜单的高度按实际高度显示。
     *
     * @param { Dimension | undefined } value - 下拉菜单显示的最大高度。<br/>当height的值为undefined时，属性不生效，下拉菜单最大高度设为默认值，即下拉菜单最大高度默认值为屏
     *     幕可用高度的80%。
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default optionHeight(value: Dimension | undefined): this;
    /**
     * 设置下拉菜单的背景色。与
     * [menuBackgroundColor](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-select copy.md#menubackgroundcolor11)
     * <sup>11+</sup>相比，resColor参数新增了对undefined类型的支持。
     *
     * @param { ResourceColor | undefined } value - 下拉菜单的背景色。<br/>当resColor的值为undefined时，默认值为Color.Transparent。
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default menuBackgroundColor(value: ResourceColor | undefined): this;
    /**
     * 设置下拉菜单的背景模糊材质。
     *
     * @param { BlurStyle | undefined } value - 下拉菜单的背景模糊材质。<br/>当style的值为undefined时，默认值：BlurStyle.COMPONENT_ULTRA_THICK
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default menuBackgroundBlurStyle(value: BlurStyle | undefined): this;
    /**
     * 设置Select组件的尺寸。
     *
     * @param { ControlSize | undefined } value - Select组件的尺寸。<br/>当value的值为undefined时，默认值为ControlSize.NORMAL。
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default controlSize(value: ControlSize | undefined): this;
    /**
     * 定制Select下拉菜单项内容区的方法。
     *
     * @param { ContentModifier<MenuItemConfiguration> | undefined } modifier - 在Select组件上，定制下拉菜单项内容区的方法。<br/>modifier：内
     *     容修改器，开发者需要自定义class实现ContentModifier接口。<br/>当modifier的值为undefined时，不使用内容修改器。
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default menuItemContentModifier(modifier: ContentModifier<MenuItemConfiguration> | undefined): this;
    /**
     * 设置分割线样式，不设置该属性则按"默认值"展示分割线。
     *
     * @param { DividerOptions | null | undefined } options - 1.设置DividerOptions，则按设置的样式显示分割线。<br/>默认值：<br/>{<br/>
     *     strokeWidth: '1px' , <br/>color: '#33182431'<br/>}<br/>2.设置为null时，不显示分割线。<br/>3.取值为undefined时，按默认值处理。 <br/> 4
     *     .strokeWidth设置过宽时，会覆盖文字。分割线会从每一个Item底部开始，同时向上向下画分割线。<br/>5.startMargin和endMargin的默认值与不设置divider属性时的分割线样式保持一致。
     *     startMargin和endMargin的和与optionWidth的值相等时，不显示分割线。 startMargin和endMargin的和超过optionWidth的值时，按照默认样式显示分割线。
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default divider(options: DividerOptions | null | undefined): this;
    /**
     * 定制Select按钮文本样式的方法，在应用了textModifier之后，Select按钮的文本样式将完全由开发者自定义。
     *
     * @param { TextModifier | undefined } modifier - 在Select组件上，定制按钮文本样式的方法。取值为undefined时，则不使用文本修改器。
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default textModifier(modifier: TextModifier | undefined): this;
    /**
     * 定制Select按钮下拉箭头图标样式的方法，在应用arrowModifier之后，Select按钮下拉箭头的图标样式将完全由开发者自定义。
     *
     * @param { SymbolGlyphModifier | undefined } modifier - 在Select组件上，定制Select按钮下拉箭头图标样式的方法。取值为undefined时，则不使用箭头修改器。
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default arrowModifier(modifier: SymbolGlyphModifier | undefined): this;
    /**
     * 定制Select下拉菜单未选中项文本样式的方法，在应用optionTextModifier之后，下拉菜单未选中项的文本样式将完全由开发者自定义。
     * 
     * 如果[optionFont]{@link optionFont}与optionTextModifier的Font属性同时设置，则优先使用[optionFont]{@link optionFont}设置下拉菜单未选中项的文本样
     * 式；[optionFont]{@link optionFont}中缺省的属性将设置为对应的默认值。
     *
     * @param { TextModifier | undefined } modifier - 在Select组件上，定制Select下拉菜单未选中项样式的方法。取值为undefined时，则不使用此选项修改器。
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default optionTextModifier(modifier: TextModifier | undefined): this;
    /**
     * 定制Select下拉菜单选中项文本样式的方法，在应用selectedOptionTextModifier之后，下拉菜单选中项的文本样式将完全由开发者自定义。
     * 
     * 如果[selectedOptionFont]{@link selectedOptionFont}与selectedOptionTextModifier的Font属性同时设置，则优先使用
     * [selectedOptionFont]{@link selectedOptionFont}设置下拉菜单选中项的文本样式；若未设置[selectedOptionFont]{@link selectedOptionFont}，则
     * 优先使用[optionFont]{@link optionFont}设置下拉菜单选中项的文本样式。其中[selectedOptionFont]{@link selectedOptionFont}或者
     * [optionFont]{@link optionFont}缺省的属性将设置为对应的默认值。
     *
     * @param { TextModifier | undefined } modifier - 设置下拉菜单项选中项的文本样式。<br/>开发者可以根据需要管理和维护文本的样式进行设置。取值为undefined时，则不使用选中项
     *     文本修改器。
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default selectedOptionTextModifier(modifier: TextModifier | undefined): this;
    /**
     * 设置分割线样式，不设置该属性则按"默认值"展示分割线。该属性与divider互斥，按调用顺序生效。
     *
     * @param { DividerStyleOptions | undefined } style - 1.设置DividerOptions，则按设置的样式显示分割线。<br/>默认值：<br/>{<br/>
     *     strokeWidth: '1px' , <br/>color: '#33182431'<br/>}<br/>2.设置为null或undefined时，展示默认分割线。<br/>3.当mode为
     *     FLOAT_ABOVE_MENU时，strokeWidth设置过宽时，会覆盖文字。分割线会从每一个Item底部开始，同时向上向下画分割线。当mode为EMBEDDED_IN_MENU时，分割线在Menu中展开，独立占用
     *     高度。<br/>4.startMargin和endMargin的默认值与不设置divider属性时的分割线样式保持一致。startMargin和endMargin的和与optionWidth的值相等时，不显示分割线。
     *     startMargin和endMargin的和超过optionWidth的值时，按照默认样式显示分割线。
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default dividerStyle(style: DividerStyleOptions | undefined): this;
    /**
     * 设置下拉菜单的避让模式。
     *
     * @param { AvoidanceMode | undefined } mode - 设置下拉菜单的避让模式。取值为undefined时，按默认值处理。<br/>默认值：AvoidanceMode.COVER_TARGET
     * @returns { SelectAttribute } Returns the chained object of Select component attributes
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default avoidance(mode: AvoidanceMode | undefined): this;
    /**
     * 设置下拉菜单框的外描边样式。
     *
     * @param { MenuOutlineOptions | undefined } outline - 下拉菜单框的外描边样式。取值为undefined时，按各属性的默认值处理。
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default menuOutline(outline: MenuOutlineOptions | undefined): this;
    /**
     * 设置下拉菜单是否显示在子窗中。未通过该接口设置时，下拉菜单默认不显示在子窗中。
     *
     * @param { boolean | undefined } showInSubWindow - 设置下拉菜单是否显示在子窗中。<br>true代表下拉菜单显示在子窗中。<br>false代表下拉菜单不显示在子窗中。<br>默
     *     认值：2in1设备为true，其他设备为false。取值为undefined时，按默认值处理。
     * @returns { SelectAttribute } - The attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default showInSubWindow(showInSubWindow: boolean | undefined): this;
    /**
     * 设置是否显示默认选择的图标。
     *
     * @param { boolean | undefined } show - 是否显示默认选定的图标。取值为undefined时，按默认值处理。<br>默认值为false，true代表显示默认选择的图标，false代表不显示默认
     *     选择的图标。<br>当show为true，并且通过selectedOptionBgColor设置选中项的背景色时，同时显示所设置的选中项的背景色和默认选定的图标；当show为true，但未通过
     *     selectedOptionBgColor设置选中项的背景色时，不突出显示背景色，只显示默认选定的图标。false代表不显示默认选定的图标，通过突出显示背景色来表示选中。
     * @returns { SelectAttribute } - the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default showDefaultSelectedIcon(show:boolean | undefined): this
    /**
     * 设置Select组件的属性修改器。
     *
     * @param { AttributeModifier<SelectAttribute> | AttributeModifier<CommonMethod> | undefined } modifier - Select组件的属
     *     性修改器。<br/>当modifier的值为undefined时，不使用属性修改器。
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(
        modifier: AttributeModifier<SelectAttribute> | AttributeModifier<CommonMethod> | undefined): this;
    /**
     * 设置Select菜单避让键盘的模式。默认不避让。
     *
     * @param { MenuKeyboardAvoidMode | undefined } mode - Select菜单避让键盘的模式。<br/>当mode的值为undefined时，默认不避让键盘。
     * @returns { SelectAttribute } - The attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default keyboardAvoidMode(mode: MenuKeyboardAvoidMode | undefined): this;
    /**
     * 设置Select菜单与键盘之间的最小距离。
     *
     * @param { LengthMetrics | undefined } distance - Select菜单与键盘之间的最小距离。<br/>当distance的值为undefined时，使用默认距离。
     * @returns { SelectAttribute } - The attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default minKeyboardAvoidDistance(distance: LengthMetrics | undefined): this;
    /**
     * Set system-styled materials for select's menu. Different materials have different effects, which can influence
     * the backgroundColor, border, shadow, and other visual attributes of select's menu.
     * 
     * Device Behavior Differences:The effect of the same material may vary across different devices depending on
     * their computing power.
     *
     * @param { SystemUiMaterial | undefined } material - The select's menu material, undefined means
     *     retaining the original visual style of the select's menu.
     * @returns { SelectAttribute } - The attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi [since 23 - 24]
     * @stagemodelonly
     * @since 23 static
     */
    default menuSystemMaterial(material: SystemUiMaterial | undefined): this;
    /**
     * 设置Select组件的背景模糊效果。
     *
     * @param { BackgroundBlurStyleOptions | undefined } blurStyle - 设置Select组件的背景模糊效果。<br/>当blurStyle的值为undefined时，恢复默认
     *     值，默认值请参考BackgroundBlurStyleOptions类型说明。
     * @returns { SelectAttribute } - The attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default menuBackgroundBlurStyleOptions(blurStyle: BackgroundBlurStyleOptions | undefined): this;
    /**
     * 设置Select组件的背景属性。
     *
     * @param { BackgroundEffectOptions | undefined } effect - 设置Select组件的背景属性，包括：模糊半径、亮度、饱和度和颜色。<br/>当effect的值为
     *     undefined时，恢复默认值，默认值请参考BackgroundEffectOptions类型说明。
     * @returns { SelectAttribute } - The attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default menuBackgroundEffect(effect: BackgroundEffectOptions | undefined): this;
    /**
     * Sets the distortion animation mode of the select with the new material.
     *
     * @param { DistortionMode | undefined } mode - Animation mode. The default value is DistortionMode.DISTORTION_AUTO.
     * @returns { SelectAttribute } - the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default menuDistortionMode(mode: DistortionMode | undefined): this;
    /**
     * Sets the edgelight animation mode of the select with the new material.
     *
     * @param { EdgeLightMode | undefined } mode - Animation mode.
     *     The default value is EdgeLightMode.EDGELIGHT_DISABLED.
     * @returns { SelectAttribute } - the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    default menuEdgeLightMode(mode: EdgeLightMode | undefined): this;
}
/**
 * 菜单项配置接口，用于ContentModifier中。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MenuItemConfiguration extends CommonConfiguration<MenuItemConfiguration> {
    /**
     * 菜单项的文本内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    value: ResourceStr;
    /**
     * 菜单项的图标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    icon?: ResourceStr;
    /**
     * 下拉选项Symbol图片。
     * 
     * symbolIcon优先级高于icon。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    symbolIcon?: SymbolGlyphModifier;
    /**
     * 菜单项是否被选中。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    selected: boolean;
    /**
     * 菜单项的索引。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    index: int;
    /**
     * 下拉菜单选中某一项的回调函数。
     * <br/>index：选中菜单项的索引。
     * <br/>value：选中菜单项的文本。
     * <br/>**说明：** <br/>index会赋值给事件[onSelect]{@link OnSelectCallback}回调中的索引参数； 
     * value会返回给Select组件显示，同时会赋值给事件[onSelect]{@link OnSelectCallback}回调中的文本参数。
     *
     * @param { int } index - 菜单项的索引。
     * @param { string } value - 菜单项的文本内容。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    triggerSelect(index: int, value: string): void;
}
/**
 * Defines Select Component.
 *
 * @param { Array<SelectOptions> } options - the options of Select.
 * @param { CustomBuilder } [content_] - container
 * @returns { SelectAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function Select(
    options: Array<SelectOption>,
    content_?: CustomBuilder,
): SelectAttribute