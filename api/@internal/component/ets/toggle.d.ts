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
 * Enumerates toggle types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum ToggleType {
  /**
   * Checkbox type.
   * 
   * **NOTE**
   * 
   * Since API version 11, the default style of the **Checkbox** component is changed from rounded square to circle.
   * 
   * The default value of the universal attribute [margin]{@link CommonMethod#margin} is as follows:
   * 
   * {
   * 
   *  top: '14px',
   * 
   *  right: '14px',
   * 
   *  bottom: '14px',
   * 
   *  left: '14px'
   * 
   * }.
   * 
   * Default size:
   * 
   * {width:'20vp', height:'20vp'}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Checkbox,

  /**
   * Switch type.
   * 
   * **NOTE**
   * 
   * The default value of the universal attribute [margin]{@link CommonMethod#margin} is as follows:
   * 
   * {
   * 
   *  top: '6px',
   * 
   *  right: '14px',
   * 
   *  bottom: '6px',
   * 
   *  left: '14px'
   * 
   * }.
   * 
   * Default size:
   * 
   * {width:'36vp', height:'20vp'}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Switch,

  /**
   * Status button type. If child content contains text, the text is displayed on the button. The default height is 28 
   * vp, and there is no default width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Button,
}

/**
 * Sets the style for the component of the **Switch** type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface SwitchStyle {
  /**
   * Radius of the circular slider when the component is of the **Switch** type. The unit is vp.
   * 
   * **NOTE**
   * 
   * Percentage values are not supported. The value specified is used only when it is greater than or equal to 0.
   * 
   * If the value is not specified or the specified one is less than 0, the radius is set using the following formula:
   * 
   * (Component height (in vp)/2) - (2 vp x Component height (in vp)/20 vp)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  pointRadius?: number | Resource;

  /**
   * Background color of the component when it is of the **Switch** type and is disabled.
   * 
   * Default value: **0x337F7F7F** (applies to both dark and light modes). Since API version 20, when 
   * [optimizing color mode switching overhead](docroot://ui/ui-dark-light-color-adaptation.md#optimizing-color-mode-switching-overhead)
   * is enabled, the default value is **0x19000000** (black with 10% opacity) in light mode and **0x19FFFFFF** (white 
   * with 10% opacity) in dark mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  unselectedColor?: ResourceColor;

  /**
   * Color of the circular slider when the component is of the **Switch** type.
   * 
   * Default value: **$r('sys.color.ohos_id_color_foreground_contrary')**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  pointColor?: ResourceColor;

  /**
   * Radius of the slider track border corners when the component is of the **Switch** type. The unit is vp.
   * 
   * **NOTE**
   * 
   * This parameter cannot be set in percentage. If the value specified is less than 0, the radius is set using the 
   * default value formula. If the value specified is greater than half of the component height, the latter is used. In 
   * other cases, the value specified is used.
   * 
   * If the value is not specified or the specified one is less than 0, the radius is set using the default value 
   * formula.
   * 
   * Default value formula: Component height (in vp)/2
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  trackBorderRadius?: number | Resource;
}

/**
 * You need a custom class to implement the **ContentModifier** API. This API inherits from 
 * [CommonConfiguration]{@link CommonConfiguration}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface ToggleConfiguration extends CommonConfiguration<ToggleConfiguration> {

  /**
   * Whether the toggle is turned on.
   * 
   * **true**: The toggle is turned on. **false**: The toggle is turned off.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  isOn: boolean;

  /**
   * Whether the toggle is enabled for state switching.
   * 
   * **true**: The state can be changed. **false**: The state cannot be changed.
   * 
   * Default value: **true**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  enabled: boolean;

  /**
   * Callback invoked when the toggle's state changes.
   * 
   * **true**: The toggle is turned on. **false**: The toggle is turned off.
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
 * Options of the toggle.
 * 
 * > **NOTE**
 * >
 * > To standardize anonymous object definitions, the element definitions here have been revised in API version 18. 
 * > While historical version information is preserved for anonymous objects, there may be cases where the outer element
 * > 's @since version number is larger than inner elements'. This does not affect interface usability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare interface ToggleOptions {
  /**
   * Type of the toggle.
   * 
   * Default value: **ToggleType.Switch**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  type: ToggleType;

  /**
   * Whether the toggle is turned on.
   * 
   * **true**: on. **false**: off.
   * 
   * Default value: **false**
   * 
   * This parameter supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   * 
   * This property supports two-way binding through 
   * [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  isOn?: boolean
}

/**
 * The **Toggle** component provides a clickable element of the checkbox, button, or switch type.
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
interface ToggleInterface {
  /**
   *
   * @param { object } options - Options of the toggle. [since 8 - 17]
   * @param { ToggleOptions } options - Options of the toggle. [since 18]
   * @returns { ToggleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options: ToggleOptions): ToggleAttribute;
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
declare class ToggleAttribute extends CommonMethod<ToggleAttribute> {
  /**
   * Triggered when the toggle status changes.
   *
   * @param { function } callback
   * @returns { ToggleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onChange(callback: (isOn: boolean) => void): ToggleAttribute;

  /**
   * Creates a content modifier.
   *
   * @param { ContentModifier<ToggleConfiguration> } modifier - Content modifier to apply to the current component.<br>
   *     **modifier**: content modifier. You need a custom class to implement the **ContentModifier** API.
   * @returns { ToggleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<ToggleConfiguration>): ToggleAttribute;

  /**
   * Sets the background color of the component when it is turned on.
   *
   * @param { ResourceColor } value - Background color of the component when it is turned on.<br>Default value:<br>When
   *     **ToggleType** is set to **Switch**, the default value is **$r('sys.color.ohos_id_color_emphasize')**.<br>When
   *     **ToggleType** is set to **Checkbox**, the default value is **$r('sys.color.ohos_id_color_emphasize')**.<br>
   *     When **ToggleType** is set to **Button**, the default value is **$r('sys.color.ohos_id_color_emphasize')** with
   *     the opacity of **$r('sys.float.ohos_id_alpha_highlight_bg')**.
   * @returns { ToggleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selectedColor(value: ResourceColor): ToggleAttribute;

  /**
   * Sets the color of the circular slider when the component is of the **Switch** type. This attribute is valid only 
   * when **type** is set to **ToggleType.Switch**.
   *
   * @param { ResourceColor } color - Color of the circular slider when the component is of the **Switch** type.<br>
   *     Default value: **$r('sys.color.ohos_id_color_foreground_contrary')**
   * @returns { ToggleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  switchPointColor(color: ResourceColor): ToggleAttribute;

  /**
   * Sets the style for the component of the **Switch** type. This attribute is valid only when **type** is set to 
   * **ToggleType.Switch**.
   *
   * @param { SwitchStyle } value - Style of the component of the **Switch** type.
   * @returns { ToggleAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  switchStyle(value: SwitchStyle): ToggleAttribute;
}

/**
 * The **Toggle** component provides a clickable element of the checkbox, button, or switch type.
 * 
 * > **NOTE**
 * 
 * ###### Child Components
 * 
 * This component can contain child components only when **ToggleType** is set to **Button**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare const Toggle: ToggleInterface;

/**
 * Defines Toggle Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare const ToggleInstance: ToggleAttribute;