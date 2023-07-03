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
 * Defines the options of Checkbox.
 * @since 8
 */
/**
 * Defines the options of Checkbox.
 * @form
 * @since 9
 */
/**
 * Defines the options of Checkbox.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface CheckboxOptions {
  /**
   * Current name of Checkbox.
   * @since 8
   */
  /**
   * Current name of Checkbox.
   * @form
   * @since 9
   */
  /**
   * Current name of Checkbox.
   * @form
   * @crossplatform
   * @since 10
   */
  name?: string;

  /**
   * Sets the group of Checkbox.
   * @since 8
   */
  /**
   * Sets the group of Checkbox.
   * @form
   * @since 9
   */
  /**
   * Sets the group of Checkbox.
   * @form
   * @crossplatform
   * @since 10
   */
  group?: string;
}

/**
 * Provides an interface for the Checkbox component.
 * @since 8
 */
/**
 * Provides an interface for the Checkbox component.
 * @form
 * @since 9
 */
/**
 * Provides an interface for the Checkbox component.
 * @form
 * @crossplatform
 * @since 10
 */
interface CheckboxInterface {
  /**
   * Construct the Checkbox component.
   * Called when the Checkbox component is used.
   * @since 8
   */
  /**
   * Construct the Checkbox component.
   * Called when the Checkbox component is used.
   * @form
   * @since 9
   */
  /**
   * Construct the Checkbox component.
   * Called when the Checkbox component is used.
   * @form
   * @crossplatform
   * @since 10
   */
  (options?: CheckboxOptions): CheckboxAttribute;
}

/**
 * Defines the attribute functions of Checkbox.
 * @since 8
 */
/**
 * Defines the attribute functions of Checkbox.
 * @form
 * @since 9
 */
/**
 * Defines the attribute functions of Checkbox.
 * @form
 * @crossplatform
 * @since 10
 */
declare class CheckboxAttribute extends CommonMethod<CheckboxAttribute> {
  /**
   * setting whether checkbox is selected.
   * @since 8
   */
  /**
   * setting whether checkbox is selected.
   * @form
   * @since 9
   */
  /**
   * setting whether checkbox is selected.
   * @form
   * @crossplatform
   * @since 10
   */
  select(value: boolean): CheckboxAttribute;

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
  selectedColor(value: ResourceColor): CheckboxAttribute;

  /**
   * Set the display border color of unselected checkbox.
   * @param { ResourceColor } value - The color of border when checkbox unselected.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set the display border color of unselected checkbox.
   * @param { ResourceColor } value - The color of border when checkbox unselected.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  unselectedColor(value: ResourceColor): CheckboxAttribute;

  /**
   * Set the mark style of checkbox.
   * @param { MarkStyle } value - The style configuration of checkbox mark.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set the mark style of checkbox.
   * @param { MarkStyle } value - The style configuration of checkbox mark.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  mark(value: MarkStyle): CheckboxAttribute;

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
  onChange(callback: (value: boolean) => void): CheckboxAttribute;
}

/**
 * Defines Checkbox Component.
 * @since 8
 */
/**
 * Defines Checkbox Component.
 * @form
 * @since 9
 */
/**
 * Defines Checkbox Component.
 * @form
 * @crossplatform
 * @since 10
 */
declare const Checkbox: CheckboxInterface;

/**
 * Defines Checkbox Component instance.
 * @since 8
 */
/**
 * Defines Checkbox Component instance.
 * @form
 * @since 9
 */
/**
 * Defines Checkbox Component instance.
 * @form
 * @crossplatform
 * @since 10
 */
declare const CheckboxInstance: CheckboxAttribute;
