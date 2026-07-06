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
 * Radio button style.
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
   * Default tick icon.
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
   * Default dot icon.
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
   * Custom component.
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
 * Radio button information.
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
   * Name of the group to which the radio button belongs. Only one radio button in a given group can be selected at a 
   * time.
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
   * Current value of the radio button.
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
   * Indicator type of the radio button. If no value is specified, the value of **RadioIndicatorType.TICK** is used.
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
   * Custom component to indicate that the radio button is selected. This custom component is center aligned with the 
   * radio button. If this parameter is set to **undefined**, the value of **RadioIndicatorType.TICK** is used as the 
   * indicator type.
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
 * Radio button color.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface RadioStyle {
  /**
   * Color of the background when the radio button is selected.
   * 
   * Default value: **$r('sys.color.ohos_id_color_text_primary_activated')**
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
   * Color of the border when the radio button is deselected.
   * 
   * Default value: **$r('sys.color.ohos_id_color_switch_outline_off')**
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
   * Color of the indicator when the radio button is selected. Since API version 12, this parameter takes effect only 
   * when **indicatorType** is set to **RadioIndicatorType.TICK** or **RadioIndicatorType.DOT**.  
   * 
   * Default value: **$r('sys.color.ohos_id_color_foreground_contrary')**
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
 * The **Radio** component allows users to select from a set of mutually exclusive options.
 * 
 * > **NOTE**
 * >
 * > Since API version 12, the default indicator type for the **Radio** component changes from 
 * > **RadioIndicatorType.DOT** to **RadioIndicatorType.TICK**.
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
   * Creates a radio button.
   *
   * @param { RadioOptions } options - Parameters of the radio button.
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
 * Defines the callback type for radio button selected state changes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type OnRadioChangeCallback = (isChecked: boolean) => void;

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
declare class RadioAttribute extends CommonMethod<RadioAttribute> {
  /**
   * Sets whether the radio button is selected.
   * 
   * Since API version 10, this attribute supports two-way binding through 
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   * 
   * Since API version 18, this attribute supports two-way binding through 
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   *
   * @param { boolean } value - Whether the radio button is selected.<br>Default value: **false**<br>**true**: The radio
   *     button is selected. **false**: The radio button is not selected.
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
   * Sets whether the radio button is selected. Compared with [checked]{@link RadioAttribute#checked(value: boolean)}, 
   * this API supports the **undefined** type for the **isChecked** parameter.
   * 
   * This attribute supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md) and 
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   *
   * @param { Optional<boolean> } isChecked - Whether the radio button is selected.<br>If **isChecked** is set to
   *     **undefined**, the default value **false** is used.<br>**true**: The radio button is selected. **false**: The
   *     radio button is not selected.
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
   * Triggered when the selected state of the radio button changes.
   *
   * @param { function } callback - Selected state of the radio button.<br>The value **true** means that the radio
   *     button changes from unselected to selected, and **false** means that the radio button changes from selected to
   *     unselected.
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
   * Triggered when the selected state of the radio button changes. Compared with 
   * [onChange]{@link RadioAttribute#onChange(callback: (isChecked: boolean) => void)}, this API supports the 
   * **undefined** type for the **callback** parameter.
   *
   * @param { Optional<OnRadioChangeCallback> } callback - Callback for radio button selection state changes.<br>If
   *     **callback** is set to **undefined**, the callback function is not used.
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
   * Sets the style of the radio button in selected or deselected state.
   * 
   * Since API version 10, this API is supported in ArkTS widgets.
   *
   * @param { RadioStyle } value - Style of the radio button in selected or deselected state.
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  radioStyle(value?: RadioStyle): RadioAttribute;

    /**
   * Creates a content modifier.
   *
   * @param { ContentModifier<RadioConfiguration> } modifier - Content modifier to apply to the current component.<br>
   *     **modifier**: content modifier. You need a custom class to implement the **ContentModifier** API.
   * @returns { RadioAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<RadioConfiguration>): RadioAttribute;

    /**
   * Creates a content modifier. Compared with 
   * [contentModifier]{@link RadioAttribute#contentModifier(modifier: ContentModifier<RadioConfiguration>)}<sup>12+</sup
   * >, this API supports the **undefined** type for the **modifier** parameter.
   *
   * @param { Optional<ContentModifier<RadioConfiguration>> } modifier - Content modifier to apply to the current
   *     component.<br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API.
   *     <br>If **modifier** is set to **undefined**, no content modifier is used.
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
 * You need a custom class to implement the **ContentModifier** API. Inherits from 
 * [CommonConfiguration]{@link CommonConfiguration}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface RadioConfiguration extends CommonConfiguration<RadioConfiguration> {
    /**
   * Current value of the radio button.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  value: string;
  
    /**
   * Whether the radio button is selected.
   * 
   * Default value: **false**
   * 
   * **true**: The radio button is selected. **false**: The radio button is not selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  checked: boolean;

  /**
   * Changes the selected state of the radio button.
   * 
   * The value **true** means that the radio button changes from unselected to selected, and **false** means that the 
   * radio button changes from selected to unselected.
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
 * The **Radio** component allows users to select from a set of mutually exclusive options.
 * 
 * > **NOTE**
 * >
 * > Since API version 12, the default indicator type for the **Radio** component changes from 
 * > **RadioIndicatorType.DOT** to **RadioIndicatorType.TICK**.
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