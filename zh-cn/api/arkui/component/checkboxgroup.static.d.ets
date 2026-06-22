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
 * 多选框群组，用于控制多选框全选或者不全选状态。
 *
 * @file
 * @kit ArkUI
 */
import { CommonMethod, Bindable } from './common';
import { ResourceColor, MarkStyle } from './units';
import { CheckBoxShape } from './enums';
import { ComponentBuilder, CustomBuilder } from './builder';
import { AttributeModifier, CommonMethod, ContentModifier, CommonConfiguration } from './common';
/**
 * 多选框群组的选中状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SelectStatus {
    /**
     * 群组多选择框全部选择。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    All,
    /**
     * 群组多选择框部分选择。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    Part,
    /**
     * 群组多选择框全部没有选择。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    None
}
/**
 * 多选框群组的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CheckboxGroupOptions {
    /**
     * 群组名称。
     * 
     * 默认值：undefined，默认状态下管理[CheckboxOptions]{@link CheckboxOptions}属性group信息为undefined的节点。 
     * 
     * **说明：** 
     * 
     * 具有相同群组名称的多个CheckboxGroup，仅第一个CheckboxGroup生效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    group?: string;
}
/**
 * 多选框群组的名称和状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CheckboxGroupResult {
    /**
     * 群组内所有被选中的多选框名称。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    name: Array<string>;
    /**
     * 选中状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    status: SelectStatus;
}
/**
 * CheckboxGroup的内容修饰器配置对象，用于配置CheckboxGroup的内容和样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CheckBoxGroupConfiguration extends CommonConfiguration<CheckBoxGroupConfiguration> {
    /**
     * 当前CheckboxGroup的群组名称。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    name: string;

    /**
     * CheckboxGroup的选中状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    status: SelectStatus;

    /**
     * 触发多选框群组选中状态变化。true表示从部分选中或未选中变为全部选中，false表示从全部选中或部分选中变为全部未选中。
     *
     * @param { boolean } isSelect - Whether the checkbox group is selected.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    triggerChange(isSelect: boolean): void;
}
/**
 * 多选框群组的信息。
 *
 * @param { CheckboxGroupResult } value - 多选框群组的信息。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type OnCheckboxGroupChangeCallback = (value: CheckboxGroupResult) => void;
/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CheckboxGroupAttribute extends CommonMethod {
    /**
     * 设置是否全选。若同组的[Checkbox]{@link checkbox}显式设置了select属性，则Checkbox的优先级高。
     * 
     * 在与带有缓存功能的组件（如[List]{@link list}）配合使用时，未创建的Checkbox选中状态需由开发者控制。
     * 
     * 该属性支持Bindable双向绑定变量。
     *
     * @param { boolean| undefined|Bindable<boolean> } isAllSelected - 是否全选。<br/>默认值：false<br/>值为true时，多选框群组将全部被选中；值为
     *     false时，多选框群组将全部取消选中。
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default selectAll(isAllSelected: boolean | undefined | Bindable<boolean>): this;
    /**
     * 设置被选中或部分选中状态的颜色。与[selectedColor]{@link selectedColor}相比，resColor参数新增了对undefined类型的支持。
     *
     * @param { ResourceColor | undefined } value - 被选中或部分选中状态的颜色。<br/>当resColor的值为undefined时，默认值：$r('
     *     sys.color.ohos_id_color_text_primary_activated')<br/>异常值按照默认值处理。
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default selectedColor(value: ResourceColor | undefined): this;
    /**
     * 设置非选中状态边框颜色。与
     * [unselectedColor](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-checkboxgroup copy.md#unselectedcolor10)
     * <sup>10+</sup>相比，resColor参数新增了对undefined类型的支持。
     *
     * @param { ResourceColor | undefined } value - 非选中状态边框颜色。<br/>当value的值为undefined时，默认值：$r('
     *     sys.color.ohos_id_color_switch_outline_off')。
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default unselectedColor(value: ResourceColor | undefined): this;
    /**
     * 设置多选框内部图标样式。
     *
     * @param { MarkStyle | undefined } value - 多选框内部图标样式。<br/>当style的值为undefined时，维持上次取值。
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default mark(value: MarkStyle | undefined): this;
    /**
     * CheckboxGroup的选中状态或群组内的Checkbox的选中状态发生变化时，触发回调。
     *
     * @param { OnCheckboxGroupChangeCallback | undefined } callback - 多选框群组的信息。
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default onChange(callback: OnCheckboxGroupChangeCallback | undefined): this;
    /**
     * 设置CheckboxGroup组件形状，包括圆形和圆角方形。与
     * [checkboxShape](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-checkboxgroup copy.md#checkboxshape12)
     * <sup>12+</sup>相比，shape参数新增了对undefined类型的支持。
     *
     * @param { CheckBoxShape | undefined } value - 设置CheckboxGroup组件形状，包括圆形和圆角方形。<br/>当shape的值为undefined时，默认值为
     *     CheckBoxShape.CIRCLE。<br />**说明：**<br/>CheckboxGroup组件将按照设置的形状显示。<br/>CheckboxGroup内所有未单独设置shape类型的Checkbox，其
     *     形状将与CheckboxGroup保持一致。<br/>CheckboxGroup内已单独设置shape类型的Checkbox，其形状将优先于CheckboxGroup的设置，按照自身设置显示。
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default checkboxShape(value: CheckBoxShape | undefined): this;
    /**
     * 设置CheckboxGroup的属性修饰器。
     *
     * @param { AttributeModifier<CheckboxGroupAttribute> | AttributeModifier<CommonMethod> | undefined } modifier -
     *     CheckboxGroup的属性修饰器。<br/>CheckboxGroupAttribute：当前组件的[属性]{@link CheckboxGroupAttribute}<br/>CommonMethod：
     *     [通用属性]{@link common}
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default attributeModifier(
        modifier: AttributeModifier<CheckboxGroupAttribute> | AttributeModifier<CommonMethod> | undefined): this;
    /**
     * 设置CheckboxGroup的内容修饰器。
     *
     * @param { ContentModifier<CheckBoxGroupConfiguration> | undefined } modifier - CheckboxGroup的内容修饰器。
     * @returns { CheckboxGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    default contentModifier(modifier: ContentModifier<CheckBoxGroupConfiguration> | undefined): this;
}

/**
 * Defines CheckboxGroup Component.
 *
 * @param { CheckboxGroupOptions } [options] - the options of CheckboxGroup.
 * @param { CustomBuilder } [content_] - container
 * @returns { CheckboxGroupAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@ComponentBuilder
export declare function CheckboxGroup(
    options?: CheckboxGroupOptions, 
    content_?: CustomBuilder,
): CheckboxGroupAttribute