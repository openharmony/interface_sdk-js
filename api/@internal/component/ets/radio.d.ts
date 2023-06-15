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
 * Input parameter for creating a radio box.
 * @since 8
 */
/**
 * Input parameter for creating a radio box.
 * @form
 * @since 9
 */
/**
 * Input parameter for creating a radio box.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface RadioOptions {
  /**
   * Radio group name.
   * @since 8
   */
  /**
   * Radio group name.
   * @form
   * @since 9
   */
  /**
   * Radio group name.
   * @form
   * @crossplatform
   * @since 10
   */
  group: string;

  /**
   * Radio name.
   * @since 8
   */
  /**
   * Radio name.
   * @form
   * @since 9
   */
  /**
   * Radio name.
   * @form
   * @crossplatform
   * @since 10
   */
  value: string;
}

/**
 * Set radio Style.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface RadioStyle {
  /**
   * Set the background color when the radio box is checked.
   * @type { ResourceColor } checkedBackgroundColor - the background color when the radio box is checked.
   * @default #007DFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  checkedBackgroundColor?: ResourceColor;

  /**
   * Set the bolder color when the radio box is unchecked.
   * @type { ResourceColor } uncheckedBorderColor - the bolder color when the radio box is unchecked.
   * @default #182431
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  uncheckedBorderColor?: ResourceColor;

  /**
   * Set the indicator color when the radio box is checked.
   * @type { ResourceColor } indicatorColor - the indicator color when the radio box is checked.
   * @default #FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  indicatorColor?: ResourceColor;
}

/**
 * Provides an interface for creating a radio box.
 * @since 8
 */
/**
 * Provides an interface for creating a radio box.
 * @form
 * @since 9
 */
/**
 * Provides an interface for creating a radio box.
 * @form
 * @crossplatform
 * @since 10
 */
interface RadioInterface {
  /**
   * Called when a radio box is created.
   * @since 8
   */
  /**
   * Called when a radio box is created.
   * @form
   * @since 9
   */
  /**
   * Called when a radio box is created.
   * @form
   * @crossplatform
   * @since 10
   */
  (options: RadioOptions): RadioAttribute;
}

/**
 * Provides methods for radio method component.
 * @since 8
 */
/**
 * Provides methods for radio method component.
 * @form
 * @since 9
 */
/**
 * Provides methods for radio method component.
 * @form
 * @crossplatform
 * @since 10
 */
declare class RadioAttribute extends CommonMethod<RadioAttribute> {
  /**
   * Called when the radio box is selected.
   * @since 8
   */
  /**
   * Called when the radio box is selected.
   * @form
   * @since 9
   */
  /**
   * Called when the radio box is selected.
   * @form
   * @crossplatform
   * @since 10
   */
  checked(value: boolean): RadioAttribute;

  /**
   * Called when the radio box selection status changes.
   * @since 8
   */
  /**
   * Called when the radio box selection status changes.
   * @form
   * @since 9
   */
  /**
   * Called when the radio box selection status changes.
   * @form
   * @crossplatform
   * @since 10
   */
  onChange(callback: (isChecked: boolean) => void): RadioAttribute;

  /**
   * Set the radio style.
   * @param { RadioStyle } value - the radio style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  radioStyle(value?: RadioStyle): RadioAttribute;
}

/**
 * Defines Radio Component.
 * @since 8
 */
/**
 * Defines Radio Component.
 * @form
 * @since 9
 */
/**
 * Defines Radio Component.
 * @form
 * @crossplatform
 * @since 10
 */
declare const Radio: RadioInterface;

/**
 * Defines Radio Component instance.
 * @since 8
 */
/**
 * Defines Radio Component instance.
 * @form
 * @since 9
 */
/**
 * Defines Radio Component instance.
 * @form
 * @crossplatform
 * @since 10
 */
declare const RadioInstance: RadioAttribute;
