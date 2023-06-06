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
 * CheckboxGroup SelectStatus
 * @since 8
 */
/**
 * CheckboxGroup SelectStatus
 * @form
 * @since 9
 */
/**
 * CheckboxGroup SelectStatus
 * @form
 * @crossplatform
 * @since 10
 */
declare enum SelectStatus {
  /**
   * All checkboxes are selected.
   * @since 8
   */
  /**
   * All checkboxes are selected.
   * @form
   * @since 9
   */
  /**
   * All checkboxes are selected.
   * @form
   * @crossplatform
   * @since 10
   */
  All,
  /**
   * Part of the checkbox is selected.
   * @since 8
   */
  /**
   * Part of the checkbox is selected.
   * @form
   * @since 9
   */
  /**
   * Part of the checkbox is selected.
   * @form
   * @crossplatform
   * @since 10
   */
  Part,
  /**
   * None of the checkbox is selected.
   * @since 8
   */
  /**
   * None of the checkbox is selected.
   * @form
   * @since 9
   */
  /**
   * None of the checkbox is selected.
   * @form
   * @crossplatform
   * @since 10
   */
  None,
}

/**
 * Defines the options of CheckboxGroup.
 * @since 8
 */
/**
 * Defines the options of CheckboxGroup.
 * @form
 * @since 9
 */
/**
 * Defines the options of CheckboxGroup.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface CheckboxGroupOptions {
  /**
   * Setting the group of CheckboxGroup.
   * @since 8
   */
  /**
   * Setting the group of CheckboxGroup.
   * @form
   * @since 9
   */
  /**
   * Setting the group of CheckboxGroup.
   * @form
   * @crossplatform
   * @since 10
   */
  group?: string;
}

/**
 * Defines the options of CheckboxGroupResult.
 * @since 8
 */
/**
 * Defines the options of CheckboxGroupResult.
 * @form
 * @since 9
 */
/**
 * Defines the options of CheckboxGroupResult.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface CheckboxGroupResult {
  /**
   * Checkbox name.
   * @since 8
   */
  /**
   * Checkbox name.
   * @form
   * @since 9
   */
  /**
   * Checkbox name.
   * @form
   * @crossplatform
   * @since 10
   */
  name: Array<string>;
  /**
   * Set the group of status.
   * @since 8
   */
  /**
   * Set the group of status.
   * @form
   * @since 9
   */
  /**
   * Set the group of status.
   * @form
   * @crossplatform
   * @since 10
   */
  status: SelectStatus;
}

/**
 * Provides an interface for the CheckboxGroup component.
 * @since 8
 */
/**
 * Provides an interface for the CheckboxGroup component.
 * @form
 * @since 9
 */
/**
 * Provides an interface for the CheckboxGroup component.
 * @form
 * @crossplatform
 * @since 10
 */
interface CheckboxGroupInterface {
  /**
   * Called when the CheckboxGroup component is used.
   * @since 8
   */
  /**
   * Called when the CheckboxGroup component is used.
   * @form
   * @since 9
   */
  /**
   * Called when the CheckboxGroup component is used.
   * @form
   * @crossplatform
   * @since 10
   */
  (options?: CheckboxGroupOptions): CheckboxGroupAttribute;
}

/**
 * Defines the attribute functions of CheckboxGroup.
 * @since 8
 */
/**
 * Defines the attribute functions of CheckboxGroup.
 * @form
 * @since 9
 */
/**
 * Defines the attribute functions of CheckboxGroup.
 * @form
 * @crossplatform
 * @since 10
 */
declare class CheckboxGroupAttribute extends CommonMethod<CheckboxGroupAttribute> {
  /**
   * setting whether all checkbox is selected.
   * @since 8
   */
  /**
   * setting whether all checkbox is selected.
   * @form
   * @since 9
   */
  /**
   * setting whether all checkbox is selected.
   * @form
   * @crossplatform
   * @since 10
   */
  selectAll(value: boolean): CheckboxGroupAttribute;

  /**
   * setting the display color of checkbox.
   * @since 8
   */
  /**
   * setting the display color of checkbox.
   * @form
   * @since 9
   */
  /**
   * setting the display color of checkbox.
   * @form
   * @crossplatform
   * @since 10
   */
  selectedColor(value: ResourceColor): CheckboxGroupAttribute;

  /**
   * Set the display border color of unselected checkbox.
   * @param { ResourceColor } value - The color of border when checkboxgroup unselected.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set the display border color of unselected checkbox.
   * @param { ResourceColor } value - The color of border when checkboxgroup unselected.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  unselectedColor(value: ResourceColor): CheckboxGroupAttribute;

  /**
   * Set the mark style of checkbox.
   * @param { MarkStyle } value - The style configuration of checkboxgroup mark.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set the mark style of checkbox.
   * @param { MarkStyle } value - The style configuration of checkboxgroup mark.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  mark(value: MarkStyle): CheckboxGroupAttribute;

  /**
   * Called when the selection status changes.
   * @since 8
   */
  /**
   * Called when the selection status changes.
   * @form
   * @since 9
   */
  /**
   * Called when the selection status changes.
   * @form
   * @crossplatform
   * @since 10
   */
  onChange(callback: (event: CheckboxGroupResult) => void): CheckboxGroupAttribute;
}

/**
 * Defines CheckboxGroup Component.
 * @since 8
 */
/**
 * Defines CheckboxGroup Component.
 * @form
 * @since 9
 */
/**
 * Defines CheckboxGroup Component.
 * @form
 * @crossplatform
 * @since 10
 */
declare const CheckboxGroup: CheckboxGroupInterface;

/**
 * Defines CheckboxGroup Component instance.
 * @since 8
 */
/**
 * Defines CheckboxGroup Component instance.
 * @form
 * @since 9
 */
/**
 * Defines CheckboxGroup Component instance.
 * @form
 * @crossplatform
 * @since 10
 */
declare const CheckboxGroupInstance: CheckboxGroupAttribute;
