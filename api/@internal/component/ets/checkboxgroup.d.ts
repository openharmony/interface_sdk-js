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
 * Enumerates the selection states of check boxes in the check box group.
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
   * All check boxes in the group are selected.
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
   * Some check boxes in the group are selected.
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
   * None of the check boxes in the group are selected.
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
 * Information about the check box group.
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
   * Group name.
   * 
   * **NOTE**
   * 
   * Among multiple check box groups with the same group name, only the first one takes effect.
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
 * Name and status of a check box group.
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
   * Names of all the selected check boxes in the group.
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
   * Selected status.
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
 * The **CheckboxGroup** component is used to select or deselect all check boxes in a group.
 * 
 * > **NOTE**
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
   * Creates a check box group for controlling the select-all or deselect-all state of check boxes within the group. 
   * Check boxes and check box groups with the same **group** value belong to the same group.
   * 
   * When this API is used with components that come with the caching mechanism, such as the [List]{@link list} 
   * component, those check boxes that have not been created yet need to be manually selected or unselected. For 
   * details, see 
   * [Example 4](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-checkboxgroup.md#example-4-implementing-the-select-all-functionality).
   *
   * @param { CheckboxGroupOptions } options - Check box group parameters.
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
 * Information about the check box group.
 *
 * @param { CheckboxGroupResult } value - Information about the check box group.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnCheckboxGroupChangeCallback = (value: CheckboxGroupResult) => void;

/**
 * You must customize this class to implement the ContentModifier interface. For details, see 
 * [contentModifier]{@link CheckboxGroupAttribute#contentModifier}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 21 dynamic
 */
declare interface CheckBoxGroupConfiguration extends CommonConfiguration<CheckBoxGroupConfiguration> {
  /**
   * Name of the check box group.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  name: string;

  /**
   * Selected status of the check box group.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 21 dynamic
   */
  status: SelectStatus;

  /**
   * Triggers a change in the selection state of the check box group. The value true indicates that the selected status 
   * changes from partially selected or unselected to fully selected, and the value false indicates that the selected 
   * status changes from fully selected or partially selected to unselected.
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
 * In addition to the [universal attributes]{@link common}, the following attributes are supported.
 * 
 * In addition to the [universal events]{@link common}, the following events are supported.
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
   * Sets whether to select all check boxes in the group. If the **select** attribute is set for a 
   * [Checkbox]{@link checkbox} component in the same group, the setting of the **Checkbox** has a higher priority.
   * 
   * When used with components that have caching functionality (such as [List]{@link list}), the selection state of 
   * uncreated check boxes must be controlled by the developer.
   * 
   * Since API version 10, this attribute supports two-way binding through 
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   * 
   * Since API version 18, this attribute supports two-way binding through 
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   *
   * @param { boolean } value - Whether to select all.<br>Default value: **false**.<br>The value **true** means to
   *     select all check boxes in the group, and **false** means to deselect all check boxes in the group.
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
   * Sets whether to select all. If the **select** attribute is set for a [Checkbox]{@link checkbox} component in the 
   * same group, the setting of the **Checkbox** has a higher priority. Compared with 
   * [selectAll]{@link CheckboxGroupAttribute#selectAll(value: boolean)}, this API supports the **undefined** type for 
   * the **isAllSelected** parameter.
   * 
   * When used with components that have caching functionality (such as [List]{@link list}), the selection state of 
   * uncreated check boxes must be controlled by the developer.
   * 
   * This attribute supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md) and 
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   *
   * @param { Optional<boolean> } isAllSelected - Whether to select all.<br>If **isAllSelected** is set to
   *     **undefined**, the default value **false** is used.<br>The value **true** means to select all check boxes in
   *     the group, and **false** means to deselect all check boxes in the group.
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
   * Sets the color of the selected check box.
   *
   * @param { ResourceColor } value - Color of the selected check box.<br>Default value:
   *     **$r('sys.color.ohos_id_color_text_primary_activated')**<br>An invalid value is handled as the default value.
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
   * Sets the color of the selected check box. Compared with 
   * [selectedColor]{@link CheckboxGroupAttribute#selectedColor(value: ResourceColor)}, this API supports the 
   * **undefined** type for the **resColor** parameter.
   *
   * @param { Optional<ResourceColor> } resColor - Color of the selected check box.<br>If **resColor** is set to
   *     **undefined**, the default value **$r('sys.color.ohos_id_color_text_primary_activated')** is used.<br>An
   *     invalid value is handled as the default value.
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
   * Sets the border color of the check box when it is not selected.
   *
   * @param { ResourceColor } value - Border color of the check box when it is not selected.<br>Default value:
   *     **$r('sys.color.ohos_id_color_switch_outline_off')**
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  unselectedColor(value: ResourceColor): CheckboxGroupAttribute;

  /**
   * Sets the border color of the check box when it is not selected. Compared with 
   * [unselectedColor]{@link CheckboxGroupAttribute#unselectedColor(value: ResourceColor)}<sup>10+</sup>, this API 
   * supports the **undefined** type for the **resColor** parameter.
   *
   * @param { Optional<ResourceColor> } resColor - Border color of the check box when it is not selected.<br>If
   *     **resColor** is set to **undefined**, the default value **$r('sys.color.ohos_id_color_switch_outline_off')** is
   *     used.
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  unselectedColor(resColor: Optional<ResourceColor>): CheckboxGroupAttribute;

  /**
   * Sets the check mark style of the check box.
   *
   * @param { MarkStyle } value - Check mark style of the check box.
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  mark(value: MarkStyle): CheckboxGroupAttribute;

  /**
   * Sets the check mark style of the check box. Compared with 
   * [mark]{@link CheckboxGroupAttribute#mark(value: MarkStyle)}<sup>10+</sup>, this API supports the **undefined** type
   * for the **style** parameter.
   *
   * @param { Optional<MarkStyle> } style - Check mark style of the check box.<br>If **style** is set to **undefined**,
   *     the previous value is retained.
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */  
  mark(style: Optional<MarkStyle>): CheckboxGroupAttribute;

  /**
   * Triggered when the selected status of the check box group or any check box wherein changes.
   *
   * @param { function } callback - Information about the check box group. [since 8 - 17]
   * @param { OnCheckboxGroupChangeCallback } callback - Information about the check box group. [since 18]
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
   * Triggered when the selected status of the check box group or any check box wherein changes. Compared with 
   * [onChange]{@link CheckboxGroupAttribute#onChange(callback: OnCheckboxGroupChangeCallback)}, this API supports the 
   * **undefined** type for the **callback** parameter.
   *
   * @param { Optional<OnCheckboxGroupChangeCallback> } callback - Information about the check box group.<br>If
   *     **callback** is set to **undefined**, the callback function is not used.
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
   * Sets the check box shape of the check box group.
   *
   * @param { CheckBoxShape } value - Check box shape of the check box group.<br>Default value:
   *     **CheckBoxShape.CIRCLE**.<br>**NOTE**<br>The **CheckboxGroup** component is displayed according to the set
   *     shape.<br>All check boxes in the **CheckboxGroup** component that do not have their shape individually set will
   *     inherit the shape of the **CheckboxGroup**.<br>Check boxes in the **CheckboxGroup** component that have their
   *     shape individually set will prioritize their own shape setting over the shape of the **CheckboxGroup**.
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
   * Sets the check box shape of the check box group. Compared with 
   * [checkboxShape]{@link CheckboxGroupAttribute#checkboxShape(value: CheckBoxShape)}<sup>12+</sup>, this API supports 
   * the **undefined** type for the **shape** parameter.
   *
   * @param { Optional<CheckBoxShape> } shape - Check box shape of the check box group.<br>If **shape** is set to
   *     **undefined**, the default value **CheckBoxShape.CIRCLE** is used.<br>**NOTE**<br>The **CheckboxGroup**
   *     component is displayed according to the set shape.<br>All check boxes in the **CheckboxGroup** component that
   *     do not have their shape individually set will inherit the shape of the **CheckboxGroup**.<br>Check boxes in the
   *     **CheckboxGroup** component that have their shape individually set will prioritize their own shape setting over
   *     the shape of the **CheckboxGroup**.
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
   * Customize the CheckboxGroup content area. When this attribute is set, the settings of other attributes become 
   * invalid.
   * 
   * > **NOTE**
   * >
   * > This API cannot be called within [attributeModifier]{@link CommonMethod#attributeModifier}.
   *
   * @param { Optional<ContentModifier<CheckBoxGroupConfiguration>> } modifier - Content modifier to apply to the
   *     **TextTimer** component.<br>modifier: content modifier. You need to customize a class to implement the
   *     ContentModifier interface.<br>If **modifier** is set to **undefined**, no content modifier is used.
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
 * The **CheckboxGroup** component is used to select or deselect all check boxes in a group.
 * 
 * > **NOTE**
 * 
 * ###### Child Components
 * 
 * Not supported
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