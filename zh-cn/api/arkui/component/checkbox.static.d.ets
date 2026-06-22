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
 * 提供多选框组件，通常用于某选项的打开或关闭。
 * 
 * > **说明：**
 * >
 * > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 * >
 * > - API version 11开始，Checkbox默认样式由圆角方形变为圆形。
 * >
 * > - 该组件默认有[margin]{@link CommonMethod#margin}间距，默认值为：{&nbsp;top: '14px',&nbsp;right: '14px',&nbsp;bottom: '14px',&
 * > nbsp;left: '14px' }。
 * 
 * ###### 子组件
 * 
 * 无
 * 
 * @file
 * @kit ArkUI
 */
import { CommonConfiguration, Callback, CommonMethod, ContentModifier, Bindable } from './common';
import { CustomBuilder } from './builder';
import { ResourceColor, MarkStyle } from './units';
import { CheckBoxShape } from './enums';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod } from './common';
/**
 * 多选框的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CheckboxOptions {
    /**
     * 指定多选框名称。
     * 
     * 默认值：undefined，取值为undefined无效果。 
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    name?: string;
    /**
     * 用于指定多选框所属群组的名称（即所属CheckboxGroup的名称）。
     * 
     * 默认值：undefined，默认状态下配合[CheckboxGroupOptions]{@link CheckboxGroupOptions}属性group信息为undefined的节点使用。 
     * 
     * **说明：** 
     * 
     * 未配合使用[CheckboxGroup]{@link checkboxgroup}组件时，此值无用。 
     * 
     * **卡片能力（仅ArkTS-Dyn）：** 从API version 9开始，该接口支持在ArkTS卡片中使用。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    group?: string;
    /**
     * 配置多选框的选中样式为自定义组件。自定义组件与Checkbox组件为中心点对齐显示。indicatorBuilder设置为undefined/null时，默认为indicatorBuilder未设置状态。
     * 
     * **原子化服务API（仅ArkTS-Dyn）：** 从API version 12开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    indicatorBuilder?: CustomBuilder;
}
/**
 * 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CheckBoxConfiguration extends CommonConfiguration<CheckBoxConfiguration> {
    /**
     * 当前多选框名称。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    name: string;
    /**
     * 指示多选框是否被选中，值为true时，多选框被选中。值为false时，多选框未选中。
     * 
     * 如果select属性没有设置默认值是false。
     * 
     * 如果设置select属性，此值与设置select属性的值相同。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    selected: boolean;
    /**
     * 触发多选框选中状态变化。true表示从未选中变为选中，false表示从选中变为未选中。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    triggerChange: Callback<boolean>;
}
/**
 * 选中的状态。
 *
 * @param { boolean } value - 返回true表示已选中。返回false表示未选中。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnCheckboxChangeCallback = (value: boolean) => void;
/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CheckboxAttribute extends CommonMethod {
    /**
     * 设置多选框选中状态。
     * 
     * 从API version 23开始，该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)、
     * [!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
     *
     * @param { boolean | undefined | Bindable<boolean> } isSelected - 多选框是否选中。取值为undefined时，按默认值处理。<br/>true：多选框被选中；
     *     false：多选框未选中。<br/>默认值：false
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default select(isSelected: boolean | undefined | Bindable<boolean>): this;
    /**
     * 设置多选框选中状态颜色。与[selectedColor]{@link selectedColor}相比，value参数新增了对undefined类型的支持。
     *
     * @param { ResourceColor | undefined } value - 多选框选中状态颜色。<br/>当value的值为undefined时取默认值$r('
     *     sys.color.ohos_id_color_text_primary_activated')。<br/>异常值按照默认值处理。
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default selectedColor(value: ResourceColor | undefined): this;
    /**
     * 设置CheckBox组件形状，包括圆形和圆角方形。如果想要调整当前CheckBox的样式，需使用
     * [contentModifier](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-checkbox copy.md#contentmodifier12)
     * 属性自定义CheckBox样式。
     *
     * @param { CheckBoxShape | undefined } value - CheckBox组件形状，包括圆形和圆角方形。<br/>当value的值为undefined时，默认值为
     *     CheckBoxShape.CIRCLE。
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default shape(value: CheckBoxShape | undefined): this;
    /**
     * 设置多选框非选中状态的边框颜色。与
     * [unselectedColor](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-checkbox copy.md#unselectedcolor10)
     * 相比，value参数新增了对undefined类型的支持。
     *
     * @param { ResourceColor | undefined } value - 多选框非选中状态边框颜色。<br/>当value的值为undefined时取默认值$r('
     *     sys.color.ohos_id_color_switch_outline_off')
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default unselectedColor(value: ResourceColor | undefined): this;
    /**
     * 设置多选框内部图标的样式。与[mark](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-checkbox copy.md#mark10)相比，value
     * 参数新增了对undefined类型的支持。
     *
     * @param { MarkStyle | undefined } value - 多选框内部图标样式。 从API version 12开始，设置了indicatorBuilder时，按照indicatorBuilder中的内容
     *     显示。取值为undefined时，按默认值处理。<br/>默认值：{<br/>strokeColor : `$r('sys.color.ohos_id_color_foreground_contrary')`,<br/
     *     >strokeWidth: `$r('sys.float.ohos_id_checkbox_stroke_width')`,<br/>size: '20vp'<br/>}
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default mark(value: MarkStyle | undefined): this;
    /**
     * 当选中状态发生变化时，触发该回调。与[onChange]{@link onChange}相比，callback参数新增了对undefined类型的支持。
     *
     * @param { OnCheckboxChangeCallback | undefined } callback - 返回选中的状态。<br/>当callback的值为undefined时，不使用回调函数。
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onChange(callback: OnCheckboxChangeCallback | undefined): this;
    /**
     * 定制CheckBox内容区的方法。与
     * [contentModifier](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-checkbox copy.md#contentmodifier12)
     * 相比，modifier参数新增了对undefined类型的支持。设置该属性时，会导致其他属性设置失效。
     *
     * @param { ContentModifier<CheckBoxConfiguration> | undefined } modifier - 在CheckBox组件上，定制内容区的方法。<br/>modifier：内容修改
     *     器，开发者需要自定义class实现ContentModifier接口。<br/>当modifier的值为undefined时，不使用内容修改器。
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<CheckBoxConfiguration> | undefined): this;
    /**
     * 设置多选框的属性修改器。
     *
     * @param { AttributeModifier<CheckboxAttribute> | AttributeModifier<CommonMethod> | undefined } modifier - 多选框的属性修改
     *     器。当modifier的值为undefined时，不使用属性修改器。
     * @returns { CheckboxAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(
        modifier: AttributeModifier<CheckboxAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * Defines Checkbox Component.
 *
 * @param { CheckboxOptions } [options] - the options of Checkbox.
 * @param { CustomBuilder } [content_] - container
 * @returns { CheckboxAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function Checkbox(
    options?: CheckboxOptions, 
    content_?: CustomBuilder,
): CheckboxAttribute