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
 * 多选框的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface CheckboxOptions {
  /**
   * 指定多选框名称。
   * 
   * 默认值：undefined，取值为undefined无效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  group?: string;

  /**
   * 配置多选框的选中样式为自定义组件。自定义组件与Checkbox组件为中心点对齐显示。indicatorBuilder设置为undefined/null时，默认为indicatorBuilder未设置状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  indicatorBuilder?: CustomBuilder;
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
declare interface CheckBoxConfiguration extends CommonConfiguration<CheckBoxConfiguration> {
  /**
   * 当前多选框名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  name: string;

  /**
   * 指示多选框是否被选中，值为true时，多选框被选中。值为false时，多选框未选中。</br>如果select属性没有设置默认值是false。</br>如果设置select属性，此值与设置select属性的值相同。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selected: boolean;

  /**
   * 触发多选框选中状态变化。true表示从未选中变为选中，false表示从选中变为未选中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  triggerChange: Callback<boolean>;
}

/**
 * 提供多选框组件，通常用于某选项的打开或关闭。
 * 
 * > **说明：**
 * >
 * > API version 11开始，Checkbox默认样式由圆角方形变为圆形。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface CheckboxInterface {
  /**
   * 多选框组件。
   *
   * @param { CheckboxOptions } options - 配置多选框的参数。
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options?: CheckboxOptions): CheckboxAttribute;
}

/**
 * 选中的状态。
 *
 * @param { boolean } value - 返回true表示已选中。返回false表示未选中。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnCheckboxChangeCallback = (value: boolean) => void;

/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 * 
 * 支持[通用事件]{@link common}外，还支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class CheckboxAttribute extends CommonMethod<CheckboxAttribute> {
  /**
   * 设置多选框选中状态。
   * 
   * 从API version 10开始，该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   * 
   * 从API version 18开始，该属性支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
   *
   * @param { boolean } value - 多选框是否选中。<br/>默认值：false<br/>值为true时，多选框被选中。值为false时，多选框未选中。
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  select(value: boolean): CheckboxAttribute;

  /**
   * 设置多选框选中状态。与[select]{@link CheckboxAttribute#select(value: boolean)}相比，isSelected参数新增了对undefined类型的支持。
   * 
   * 该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)、
   * [!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
   *
   * @param { Optional<boolean> } isSelected - 多选框是否选中。<br/>当isSelected的值为undefined时取默认值false。<br/>值为true时，多选框被选中。值为
   *     false时，多选框未选中。
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  select(isSelected: Optional<boolean>): CheckboxAttribute;

  /**
   * 设置多选框选中状态颜色。
   *
   * @param { ResourceColor } value - 多选框选中状态颜色。<br/>默认值：$r('sys.color.ohos_id_color_text_primary_activated')<br/>异常值按照默
   *     认值处理。
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selectedColor(value: ResourceColor): CheckboxAttribute;

  /**
   * 设置多选框选中状态颜色。与[selectedColor]{@link CheckboxAttribute#selectedColor(value: ResourceColor)}相比，resColor参数新增了对undefined
   * 类型的支持。
   *
   * @param { Optional<ResourceColor> } resColor - 多选框选中状态颜色。<br/>当resColor的值为undefined时取默认值$r('
   *     sys.color.ohos_id_color_text_primary_activated')。<br/>异常值按照默认值处理。
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  selectedColor(resColor: Optional<ResourceColor>): CheckboxAttribute;

  /**
   * 设置Checkbox组件形状，包括圆形和圆角方形。如果想要调整当前Checkbox的样式，需使用
   * [contentModifier]{@link CheckboxAttribute#contentModifier(modifier: ContentModifier<CheckBoxConfiguration>)}属性自定义
   * Checkbox样式。
   *
   * @param { CheckBoxShape } value - Checkbox组件形状，包括圆形和圆角方形。<br/>默认值：CheckBoxShape.CIRCLE
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  shape(value: CheckBoxShape): CheckboxAttribute;

   /**
   * 设置Checkbox组件形状，包括圆形和圆角方形。与[shape]{@link CheckboxAttribute#shape(value: CheckBoxShape)}<sup>11+</sup>相比，shape参数新增了对
   * undefined类型的支持。如果想要调整当前Checkbox的样式，需使用
   * [contentModifier]{@link CheckboxAttribute#contentModifier(modifier: ContentModifier<CheckBoxConfiguration>)}属性自定义
   * Checkbox样式。
   *
   * @param { Optional<CheckBoxShape> } shape - Checkbox组件形状，包括圆形和圆角方形。<br/>当shape的值为undefined时，默认值为
   *     CheckBoxShape.CIRCLE。
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  shape(shape: Optional<CheckBoxShape>): CheckboxAttribute;

  /**
   * 设置多选框非选中状态的边框颜色。
   *
   * @param { ResourceColor } value - 多选框非选中状态边框颜色。<br/>默认值：$r('sys.color.ohos_id_color_switch_outline_off')
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  unselectedColor(value: ResourceColor): CheckboxAttribute;

  /**
   * 设置多选框非选中状态的边框颜色。与[unselectedColor]{@link CheckboxAttribute#unselectedColor(value: ResourceColor)}<sup>10+</sup>相比，
   * resColor参数新增了对undefined类型的支持。
   *
   * @param { Optional<ResourceColor> } resColor - 多选框非选中状态边框颜色。<br/>当resColor的值为undefined时取默认值$r('
   *     sys.color.ohos_id_color_switch_outline_off')
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  unselectedColor(resColor: Optional<ResourceColor>): CheckboxAttribute;

  /**
   * 设置多选框内部图标的样式。
   *
   * @param { MarkStyle } value - 多选框内部图标样式。 从API version 12开始，设置了indicatorBuilder时，按照indicatorBuilder中的内容显示。<br/>默认值：{<
   *     br/>strokeColor : `$r('sys.color.ohos_id_color_foreground_contrary')`,<br/>strokeWidth:
   *     `$r('sys.float.ohos_id_checkbox_stroke_width')`,<br/>size: '20vp'<br/>}
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  mark(value: MarkStyle): CheckboxAttribute;

  /**
   * 设置多选框内部图标的样式。与[mark]{@link CheckboxAttribute#mark(value: MarkStyle)}<sup>10+</sup>相比，style参数新增了对undefined类型的支持。
   *
   * @param { Optional<MarkStyle> } style - 多选框内部图标样式。 设置了indicatorBuilder时，按照indicatorBuilder中的内容显示。<br/>当style的值为
   *     undefined时，默认值：{<br/>strokeColor : `$r('sys.color.ohos_id_color_foreground_contrary')`,<br/>strokeWidth:
   *     `$r('sys.float.ohos_id_checkbox_stroke_width')`,<br/>size: '20vp'<br/>}
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  mark(style: Optional<MarkStyle>): CheckboxAttribute;

  /**
   * 当选中状态发生变化时，触发该回调。
   *
   * @param { function } callback - 返回选中的状态。 [since 8 - 17]
   * @param { OnCheckboxChangeCallback } callback - 返回选中的状态。 [since 18]
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange(callback: OnCheckboxChangeCallback): CheckboxAttribute;

  /**
   * 当选中状态发生变化时，触发该回调。与[onChange]{@link CheckboxAttribute#onChange(callback: OnCheckboxChangeCallback)}相比，callback参数新增了对
   * undefined类型的支持。
   *
   * @param { Optional<OnCheckboxChangeCallback> } callback - 返回选中的状态。<br/>当callback的值为undefined时，不使用回调函数。
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  onChange(callback: Optional<OnCheckboxChangeCallback>): CheckboxAttribute;

  /**
   * 定制Checkbox内容区的方法。设置该属性时，会导致其他属性设置失效。
   *
   * @param { ContentModifier<CheckBoxConfiguration> } modifier - 在Checkbox组件上，定制内容区的方法。<br/>modifier：内容修改器，开发者需要自定义
   *     class实现ContentModifier接口。
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<CheckBoxConfiguration>): CheckboxAttribute;

  /**
   * 定制Checkbox内容区的方法。与
   * [contentModifier]{@link CheckboxAttribute#contentModifier(modifier: ContentModifier<CheckBoxConfiguration>)}<sup>12
   * +</sup>相比，modifier参数新增了对undefined类型的支持。设置该属性时，会导致其他属性设置失效。
   *
   * @param { Optional<ContentModifier<CheckBoxConfiguration>> } modifier - 在Checkbox组件上，定制内容区的方法。<br/>modifier：内容修改器，开发
   *     者需要自定义class实现ContentModifier接口。<br/>当modifier的值为undefined时，不使用内容修改器。
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  contentModifier(modifier: Optional<ContentModifier<CheckBoxConfiguration>>): CheckboxAttribute;
}

/**
 * 提供多选框组件，通常用于某选项的打开或关闭。
 * 
 * > **说明：**
 * >
 * > API version 11开始，Checkbox默认样式由圆角方形变为圆形。
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
 * @since 8 dynamic
 */
declare const Checkbox: CheckboxInterface;

/**
 * Defines Checkbox Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare const CheckboxInstance: CheckboxAttribute;