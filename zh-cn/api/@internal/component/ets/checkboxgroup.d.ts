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
 * 多选框群组的选中状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum SelectStatus {
  /**
   * 群组多选择框全部选择。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  All,
  /**
   * 群组多选择框部分选择。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Part,
  /**
   * 群组多选择框全部没有选择。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  None,
}

/**
 * 多选框群组的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface CheckboxGroupOptions {
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
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  group?: string;
}

/**
 * 多选框群组的名称和状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface CheckboxGroupResult {
  /**
   * 群组内所有被选中的多选框名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  name: Array<string>;
  /**
   * 选中状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  status: SelectStatus;
}

/**
 * 多选框群组，用于控制多选框全选或者不全选状态。
 * 
 * > **说明：**
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface CheckboxGroupInterface {
  /**
   * 创建多选框群组，用于控制群组内Checkbox的全选或取消全选状态，具有相同group值的Checkbox和CheckboxGroup属于同一群组。
   * 
   * 在结合带缓存功能的组件使用时（如[List]{@link list}），未被创建的Checkbox选中状态需要应用手动控制。详细示例请参考
   * [示例4](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-checkboxgroup.md#示例4设置全选)。
   *
   * @param { CheckboxGroupOptions } options - 配置多选框群组参数。 <br/> 未设置时，按照CheckboxGroupOptions中各参数的默认值配置。
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options?: CheckboxGroupOptions): CheckboxGroupAttribute;
}

/**
 * 多选框群组的信息。
 *
 * @param { CheckboxGroupResult } value - 多选框群组的信息。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnCheckboxGroupChangeCallback = (value: CheckboxGroupResult) => void;

/**
 * 开发者必须自定义此类以实现ContentModifier接口，使用方法见[contentModifier]{@link CheckboxGroupAttribute#contentModifier}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 21 dynamic
 */
declare interface CheckBoxGroupConfiguration extends CommonConfiguration<CheckBoxGroupConfiguration> {
  /**
   * 当前多选框群组名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  name: string;

  /**
   * 表示多选框群组的选中状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  status: SelectStatus;

  /**
   * 触发多选框群组选中状态变化。true表示从部分选中或未选中变为全部选中，false表示从全部选中或部分选中变为全部未选中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  triggerChange: Callback<boolean>;
}

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
declare class CheckboxGroupAttribute extends CommonMethod<CheckboxGroupAttribute> {
  /**
   * 设置是否全选。若同组的[Checkbox]{@link checkbox}显式设置了select属性，则Checkbox的优先级高。
   * 
   * 在与带有缓存功能的组件（如[List]{@link list}）配合使用时，未创建的Checkbox选中状态需由开发者控制。
   * 
   * 从API version 10开始，该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   * 
   * 从API version 18开始，该属性支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
   *
   * @param { boolean } value - 是否全选。<br/>默认值：false<br/>值为true时，多选框群组将全部被选中；值为false时，多选框群组将全部取消选中。
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selectAll(value: boolean): CheckboxGroupAttribute;

  /**
   * 设置是否全选。若同组的[Checkbox]{@link checkbox}显式设置了select属性，则Checkbox的优先级高。与
   * [selectAll]{@link CheckboxGroupAttribute#selectAll(value: boolean)}相比，isAllSelected参数新增了对undefined类型的支持。
   * 
   * 在与带有缓存功能的组件（如[List]{@link list}）配合使用时，未创建的Checkbox选中状态需由开发者控制。
   * 
   * 该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)、
   * [!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
   *
   * @param { Optional<boolean> } isAllSelected - 是否全选。<br/>当isAllSelected的值为undefined时取默认值false。<br/>值为true时，多选框群组将全部被选
   *     中；值为false时，多选框群组将全部取消选中。
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */  
  selectAll(isAllSelected: Optional<boolean>): CheckboxGroupAttribute;

  /**
   * 设置被选中或部分选中状态的颜色。
   *
   * @param { ResourceColor } value - 被选中或部分选中状态的颜色。<br/>默认值：$r('sys.color.ohos_id_color_text_primary_activated')<br/>异常
   *     值按照默认值处理。
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selectedColor(value: ResourceColor): CheckboxGroupAttribute;

  /**
   * 设置被选中或部分选中状态的颜色。与[selectedColor]{@link CheckboxGroupAttribute#selectedColor(value: ResourceColor)}相比，resColor参数新增了对
   * undefined类型的支持。
   *
   * @param { Optional<ResourceColor> } resColor - 被选中或部分选中状态的颜色。<br/>当resColor的值为undefined时，默认值：$r('
   *     sys.color.ohos_id_color_text_primary_activated')<br/>异常值按照默认值处理。
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  selectedColor(resColor: Optional<ResourceColor>): CheckboxGroupAttribute;

  /**
   * 设置非选中状态边框颜色。
   *
   * @param { ResourceColor } value - 非选中状态边框颜色。<br/>默认值：$r('sys.color.ohos_id_color_switch_outline_off')。
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  unselectedColor(value: ResourceColor): CheckboxGroupAttribute;

  /**
   * 设置非选中状态边框颜色。与[unselectedColor]{@link CheckboxGroupAttribute#unselectedColor(value: ResourceColor)}<sup>10+</sup>相比，
   * resColor参数新增了对undefined类型的支持。
   *
   * @param { Optional<ResourceColor> } resColor - 非选中状态边框颜色。<br/>当resColor的值为undefined时，默认值：$r('
   *     sys.color.ohos_id_color_switch_outline_off')。
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  unselectedColor(resColor: Optional<ResourceColor>): CheckboxGroupAttribute;

  /**
   * 设置多选框内部图标样式。
   *
   * @param { MarkStyle } value - 多选框内部图标样式。
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  mark(value: MarkStyle): CheckboxGroupAttribute;

  /**
   * 设置多选框内部图标样式。与[mark]{@link CheckboxGroupAttribute#mark(value: MarkStyle)}<sup>10+</sup>相比，style参数新增了对undefined类型的支持。
   *
   * @param { Optional<MarkStyle> } style - 多选框内部图标样式。<br/>当style的值为undefined时，维持上次取值。
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  mark(style: Optional<MarkStyle>): CheckboxGroupAttribute;

  /**
   * CheckboxGroup的选中状态或群组内的Checkbox的选中状态发生变化时，触发回调。
   *
   * @param { function } callback - 多选框群组的信息。 [since 8 - 17]
   * @param { OnCheckboxGroupChangeCallback } callback - 多选框群组的信息。 [since 18]
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange(callback: OnCheckboxGroupChangeCallback): CheckboxGroupAttribute;

  /**
   * CheckboxGroup的选中状态或群组内的Checkbox的选中状态发生变化时，触发回调。与
   * [onChange]{@link CheckboxGroupAttribute#onChange(callback: OnCheckboxGroupChangeCallback)}相比，callback参数新增了对
   * undefined类型的支持。
   *
   * @param { Optional<OnCheckboxGroupChangeCallback> } callback - 多选框群组的信息。<br/>当callback的值为undefined时，不使用回调函数。
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  onChange(callback: Optional<OnCheckboxGroupChangeCallback>): CheckboxGroupAttribute;

  /**
   * 设置CheckboxGroup组件形状，包括圆形和圆角方形。
   *
   * @param { CheckBoxShape } value - 设置CheckboxGroup组件形状，包括圆形和圆角方形。<br/>默认值：CheckBoxShape.CIRCLE <br />**说明：**<br/>
   *     CheckboxGroup组件将按照设置的形状显示。<br/>CheckboxGroup内所有未单独设置shape类型的Checkbox，其形状将与CheckboxGroup保持一致。<br/>CheckboxGroup内
   *     已单独设置shape类型的Checkbox，其形状将优先于CheckboxGroup的设置，按照自身设置显示。
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  checkboxShape(value: CheckBoxShape): CheckboxGroupAttribute;

  /**
   * 设置CheckboxGroup组件形状，包括圆形和圆角方形。与[checkboxShape]{@link CheckboxGroupAttribute#checkboxShape(value: CheckBoxShape)}<
   * sup>12+</sup>相比，shape参数新增了对undefined类型的支持。
   *
   * @param { Optional<CheckBoxShape> } shape - 设置CheckboxGroup组件形状，包括圆形和圆角方形。<br/>当shape的值为undefined时，默认值为
   *     CheckBoxShape.CIRCLE。<br />**说明：**<br/>CheckboxGroup组件将按照设置的形状显示。<br/>CheckboxGroup内所有未单独设置shape类型的Checkbox，其形状
   *     将与CheckboxGroup保持一致。<br/>CheckboxGroup内已单独设置shape类型的Checkbox，其形状将优先于CheckboxGroup的设置，按照自身设置显示。
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */  
  checkboxShape(shape: Optional<CheckBoxShape>): CheckboxGroupAttribute;

  /**
   * 定制CheckboxGroup内容区的方法。设置该属性时，其他属性设置会失效。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { Optional<ContentModifier<CheckBoxGroupConfiguration>> } modifier - 在CheckboxGroup组件上，定制内容区的方法。<br/>
   *     modifier：内容修改器，开发者需要自定义类以实现ContentModifier接口。<br/>当modifier的值为undefined时，不使用内容修改器。
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */  
  contentModifier(modifier: Optional<ContentModifier<CheckBoxGroupConfiguration>>): CheckboxGroupAttribute;
}

/**
 * 多选框群组，用于控制多选框全选或者不全选状态。
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
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare const CheckboxGroup: CheckboxGroupInterface;

/**
 * Defines CheckboxGroup Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare const CheckboxGroupInstance: CheckboxGroupAttribute;