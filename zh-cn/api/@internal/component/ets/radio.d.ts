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
 * 单选框的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare enum RadioIndicatorType {
  /**
   * 选中样式为系统默认TICK图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  TICK = 0,
  /**
   * 选中样式为系统默认DOT图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  DOT = 1,
  /**
   * 选中样式为indicatorBuilder中的内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  CUSTOM = 2,
}

/**
 * 单选框的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface RadioOptions {
  /**
   * 当前单选框的所属群组名称，相同group的Radio只能有一个被选中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  group: string;

  /**
   * 当前单选框的值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value: string;
  /**
   * 配置单选框的选中样式。未设置时按照RadioIndicatorType.TICK进行显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  indicatorType?: RadioIndicatorType;
  /**
   * 配置单选框的选中样式为自定义组件。自定义组件与Radio组件为中心点对齐显示。indicatorBuilder设置为undefined时，按照RadioIndicatorType.TICK进行显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  indicatorBuilder?: CustomBuilder;
}

/**
 * 单选框的颜色。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RadioStyle {
  /**
   * 开启状态底板颜色。
   * 
   * 默认值：`$r('sys.color.ohos_id_color_text_primary_activated')`
   *
   * @default #007DFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  checkedBackgroundColor?: ResourceColor;

  /**
   * 关闭状态描边颜色。
   * 
   * 默认值：`$r('sys.color.ohos_id_color_switch_outline_off')`
   *
   * @default #182431
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  uncheckedBorderColor?: ResourceColor;

  /**
   * 开启状态内部圆饼颜色。从API version 12开始，indicatorType设置为RadioIndicatorType.TICK和RadioIndicatorType.DOT时，支持修改内部颜色。indicatorType
   * 设置为RadioIndicatorType.CUSTOM时，不支持修改内部颜色。
   * 
   * 默认值：`$r('sys.color.ohos_id_color_foreground_contrary')`
   *
   * @default #FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  indicatorColor?: ResourceColor;
}

/**
 * 单选框，提供相应的用户交互选择项。
 * 
 * > **说明：**
 * >
 * > - API version 12开始，Radio选中默认样式由RadioIndicatorType.DOT变为RadioIndicatorType.TICK。
 * 
 * > - 该组件默认有[margin]{@link CommonMethod#margin}间距，默认值为：{&nbsp;top: '14px',&nbsp;right: '14px',&nbsp;bottom: '14px',&
 * > nbsp;left: '14px' }。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface RadioInterface {
  /**
   * 创建单选框组件。
   *
   * @param { RadioOptions } options - 配置单选框的参数。
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options: RadioOptions): RadioAttribute;
}

/**
 * 单选框选中状态改变时触发的回调函数类型定义。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnRadioChangeCallback = (isChecked: boolean) => void;

/**
 * 除支持[通用属性]{@link common}外，还支持以下属性：
 * 
 * 除支持[通用事件]{@link common}外，还支持以下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class RadioAttribute extends CommonMethod<RadioAttribute> {
  /**
   * 设置单选框的选中状态。
   * 
   * 从API version 10开始，该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   * 
   * 从API version 18开始，该属性支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
   *
   * @param { boolean } value - 单选框的选中状态。<br/>默认值：false<br/>值为true时，单选框被选中。值为false时，单选框不被选中。
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  checked(value: boolean): RadioAttribute;

  /**
   * 设置单选框的选中状态。与[checked]{@link RadioAttribute#checked(value: boolean)}相比，isChecked参数新增了对undefined类型的支持。
   * 
   * 该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)、
   * [!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
   *
   * @param { Optional<boolean> } isChecked - 单选框的选中状态。<br/>当isChecked的值为undefined时取默认值false。<br/>值为true时，单选框被选中。值为false
   *     时，单选框不被选中。
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */  
  checked(isChecked: Optional<boolean>): RadioAttribute;

  /**
   * 单选框选中状态改变时触发的回调。
   *
   * @param { function } callback - 单选框选中状态改变时触发该回调。<br/>值为true时，表示从未选中变为选中。值为false时，表示从选中变为未选中。
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange(callback: (isChecked: boolean) => void): RadioAttribute;

  /**
   * 单选框选中状态改变时触发的回调。与[onChange]{@link RadioAttribute#onChange(callback: (isChecked: boolean) => void)}相比，callback参数新增了对
   * undefined类型的支持。
   *
   * @param { Optional<OnRadioChangeCallback> } callback - 单选框选中状态改变时触发该回调。<br/>当callback的值为undefined时，不使用回调函数。
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */  
  onChange(callback: Optional<OnRadioChangeCallback>): RadioAttribute;

  /**
   * 设置单选框选中状态和非选中状态的样式。 
   * 
   * 从API version 10开始，该接口支持在ArkTS组件中使用。
   *
   * @param { RadioStyle } value - 单选框选中状态和非选中状态的样式。 <br/> 未设置时，则按照RadioStyle中各参数的默认值配置。
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  radioStyle(value?: RadioStyle): RadioAttribute;

    /**
   * 定制Radio内容区的方法。
   *
   * @param { ContentModifier<RadioConfiguration> } modifier - 在Radio组件上，定制内容区的方法。<br/>modifier：内容修改器，开发者需要自定义class实现
   *     ContentModifier接口。
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<RadioConfiguration>): RadioAttribute;

    /**
   * 定制Radio内容区的方法。与
   * [contentModifier]{@link RadioAttribute#contentModifier(modifier: ContentModifier<RadioConfiguration>)}<sup>12+</sup
   * >相比，modifier参数新增了对undefined类型的支持。
   *
   * @param { Optional<ContentModifier<RadioConfiguration>> } modifier - 在Radio组件上，定制内容区的方法。<br/>modifier：内容修改器，开发者需要自定义
   *     class实现ContentModifier接口。<br/>当modifier的值为undefined时，不使用内容修改器。
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  contentModifier(modifier: Optional<ContentModifier<RadioConfiguration>>): RadioAttribute;
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
declare interface RadioConfiguration extends CommonConfiguration<RadioConfiguration> {
    /**
   * 当前单选框的值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  value: string;
  
    /**
   * 设置单选框的选中状态。
   * 
   * 默认值：false
   * 
   * 值为true时，单选框被选中。值为false时，单选框不被选中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  checked: boolean;

  /**
   * 触发单选框选中状态变化。
   * 
   * 值为true时，表示从未选中变为选中。值为false时，表示从选中变为未选中。
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
 * 单选框，提供相应的用户交互选择项。
 * 
 * > **说明：**
 * >
 * > - API version 12开始，Radio选中默认样式由RadioIndicatorType.DOT变为RadioIndicatorType.TICK。
 * 
 * > - 该组件默认有[margin]{@link CommonMethod#margin}间距，默认值为：{&nbsp;top: '14px',&nbsp;right: '14px',&nbsp;bottom: '14px',&
 * > nbsp;left: '14px' }。
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
declare const Radio: RadioInterface;

/**
 * Defines Radio Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare const RadioInstance: RadioAttribute;