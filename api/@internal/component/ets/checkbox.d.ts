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
 * Provides information about the check box.
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
   * Name of the check box.
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
   * Group name of the check box (that is, the name of the check box group to which the check box belongs).
   * 
   * **NOTE**
   * 
   * For the settings to take effect, this parameter must be used with the [CheckboxGroup]{@link checkboxgroup} 
   * component.
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
   * Custom component to indicate that the check box is selected. This custom component is center aligned with the check
   * box. When **indicatorBuilder** is set to **undefined** or **null**, it defaults to the state where it is not set.
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
 * You need a custom class to implement the **ContentModifier** API. Inherits from 
 * [CommonConfiguration]{@link CommonConfiguration}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface CheckBoxConfiguration extends CommonConfiguration<CheckBoxConfiguration> {
  /**
   * Name of the check box.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  name: string;

  /**
   * Whether the check box is selected.
   * 
   * **true**: The check box is selected. 
   * 
   * **false**: The check box is not selected.
   * 
   * If the **select** attribute is not set, the default value **false** is used.
   * 
   * If the **select** attribute is set, the attribute value is used here.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  selected: boolean;

  /**
   * Triggers a change in the check box selection state. 
   * 
   * The value **true** indicates a change from unselected to selected, and **false** indicates a change from selected 
   * to unselected.
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
 * **Checkbox** is a component that is used to enable or disable an option.
 * 
 * > **NOTE**
 * >
 * > Since API version 11, the default style of the **Checkbox** component is changed from rounded square to circle.
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
   * Creates a check box.
   *
   * @param { CheckboxOptions } options - Check box parameters.
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
 * Represents the callback invoked when the selected state of the check box changes.
 *
 * @param { boolean } value - Whether the check box is selected. The value **true** means that the check box is
 *     selected, and **false** means the opposite.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnCheckboxChangeCallback = (value: boolean) => void;

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
declare class CheckboxAttribute extends CommonMethod<CheckboxAttribute> {
  /**
   * Sets whether the check box is selected.
   * 
   * Since API version 10, this attribute supports two-way binding through 
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   * 
   * Since API version 18, this attribute supports two-way binding through 
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   *
   * @param { boolean } value - Whether the check box is selected.<br>Default value: **false**<br>**true**: The check
   *     box is selected. <br>**false**: The check box is not selected.
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
   * Sets whether the check box is selected. Compared with [select]{@link CheckboxAttribute#select(value: boolean)}, 
   * this API supports the **undefined** type for the **isSelected** parameter.
   * 
   * This attribute supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md) and 
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   *
   * @param { Optional<boolean> } isSelected - Whether the check box is selected.<br>If **isSelected** is set to
   *     **undefined**, the default value **false** is used.<br>**true**: The check box is selected. <br>**false**: The
   *     check box is not selected.
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
   * Sets the color of the check box when it is selected.
   *
   * @param { ResourceColor } value - Color of the check box when it is selected.<br>Default value:
   *     **$r('sys.color.ohos_id_color_text_primary_activated')**.<br>An invalid value is handled as the default value.
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
   * Sets the color of the check box when it is selected. Compared with 
   * [selectedColor]{@link CheckboxAttribute#selectedColor(value: ResourceColor)}, this API supports the **undefined** 
   * type for the **resColor** parameter.
   *
   * @param { Optional<ResourceColor> } resColor - Color of the check box when it is selected.<br>If **resColor** is set
   *     to **undefined**, the default value **$r('sys.color.ohos_id_color_text_primary_activated')** is used.<br>An
   *     invalid value is handled as the default value.
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
   * Sets the check box shape. To adjust the style of the current check box, use 
   * [contentModifier]{@link CheckboxAttribute#contentModifier(modifier: ContentModifier<CheckBoxConfiguration>)}.
   *
   * @param { CheckBoxShape } value - Shape of the check box.<br>Default value: **CheckBoxShape.CIRCLE**
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
   * Sets the check box shape. Compared with [shape]{@link CheckboxAttribute#shape(value: CheckBoxShape)}<sup>11+</sup>,
   * this API supports the **undefined** type for the **shape** parameter. To adjust the style of the current check box,
   * use [contentModifier]{@link CheckboxAttribute#contentModifier(modifier: ContentModifier<CheckBoxConfiguration>)}.
   *
   * @param { Optional<CheckBoxShape> } shape - Shape of the check box.<br>If **shape** is set to **undefined**, the
   *     default value **CheckBoxShape.CIRCLE** is used.
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
   * Sets the border color of the check box when it is not selected.
   *
   * @param { ResourceColor } value - Border color of the check box when it is not selected.<br>Default value:
   *     **$r('sys.color.ohos_id_color_switch_outline_off')**.
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  unselectedColor(value: ResourceColor): CheckboxAttribute;

  /**
   * Sets the border color of the check box when it is not selected. Compared with 
   * [unselectedColor]{@link CheckboxAttribute#unselectedColor(value: ResourceColor)}<sup>10+</sup>, this API supports 
   * the **undefined** type for the **resColor** parameter.
   *
   * @param { Optional<ResourceColor> } resColor - Border color of the check box when it is not selected.<br>If
   *     **resColor** is set to **undefined**, the default value **$r('sys.color.ohos_id_color_switch_outline_off')** is
   *     used.
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  unselectedColor(resColor: Optional<ResourceColor>): CheckboxAttribute;

  /**
   * Sets the check mark style of the check box.
   *
   * @param { MarkStyle } value - Check mark style of the check box. Since API version 12, if **indicatorBuilder** is
   *     set, the style is determined by **indicatorBuilder**.<br>Default value: {<br>strokeColor :
   *     `$r('sys.color.ohos_id_color_foreground_contrary')`,<br>strokeWidth:
   *     `$r('sys.float.ohos_id_checkbox_stroke_width')`,<br>size: '20vp'<br>}
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  mark(value: MarkStyle): CheckboxAttribute;

  /**
   * Sets the check mark style of the check box. Compared with [mark]{@link CheckboxAttribute#mark(value: MarkStyle)}<
   * sup>10+</sup>, this API supports the **undefined** type for the **style** parameter.
   *
   * @param { Optional<MarkStyle> } style - Check mark style of the check box. If **indicatorBuilder** is set, the style
   *     is determined by **indicatorBuilder**.<br>If **style** is set to **undefined**, the default value is used: {<br
   *     >strokeColor : `$r('sys.color.ohos_id_color_foreground_contrary')`,<br>strokeWidth:
   *     `$r('sys.float.ohos_id_checkbox_stroke_width')`,<br>size: '20vp'<br>}
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  mark(style: Optional<MarkStyle>): CheckboxAttribute;

  /**
   * Invoked when the selected state of the check box changes.
   *
   * @param { function } callback - Callback used to return the selected state. [since 8 - 17]
   * @param { OnCheckboxChangeCallback } callback - Callback used to return the selected state. [since 18]
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
   * Invoked when the selected state of the check box changes. Compared with 
   * [onChange]{@link CheckboxAttribute#onChange(callback: OnCheckboxChangeCallback)}, this API supports the 
   * **undefined** type for the **callback** parameter.
   *
   * @param { Optional<OnCheckboxChangeCallback> } callback - Callback used to return the selected state.<br>If
   *     **callback** is set to **undefined**, the callback function is not used.
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
   * Creates a content modifier for the **Checkbox** component. Setting this attribute will invalidate other attribute 
   * settings.
   *
   * @param { ContentModifier<CheckBoxConfiguration> } modifier - Content modifier to apply to the **Checkbox**
   *     component.<br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API.
   * @returns { CheckboxAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<CheckBoxConfiguration>): CheckboxAttribute;

  /**
   * Creates a content modifier for the **Checkbox** component. Compared with 
   * [contentModifier]{@link CheckboxAttribute#contentModifier(modifier: ContentModifier<CheckBoxConfiguration>)}<sup>12
   * +</sup>, this API supports the **undefined** type for the **modifier** parameter. Setting this attribute will 
   * invalidate other attribute settings.
   *
   * @param { Optional<ContentModifier<CheckBoxConfiguration>> } modifier - Content modifier to apply to the
   *     **Checkbox** component.<br>**modifier**: content modifier. You need a custom class to implement the
   *     **ContentModifier** API.<br>If **modifier** is set to **undefined**, no content modifier is used.
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
 * **Checkbox** is a component that is used to enable or disable an option.
 * 
 * > **NOTE**
 * >
 * > Since API version 11, the default style of the **Checkbox** component is changed from rounded square to circle.
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