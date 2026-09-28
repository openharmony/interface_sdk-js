/*
* Copyright (C) 2026 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
* http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { TextModifier, ImageModifier } from './@ohos.arkui.modifier';

/**
 * @file
 * @kit ArkUI
 */

/**
 * Defines the related attributes and events of a button.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface PopupV2Button {
  /**
   * Button content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  text: ResourceStr;

  /**
   * Text properties of the button, such as the text color and font size.
   *
   * Default value: **undefined**
   *
   * When the value is **undefined**, the system button text properties are used by default.
   *
   * **Model constraint**: This API can only be used in the stage model.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  buttonTextModifier?: TextModifier;

  /**
   * Callback for the button click event.
   * No operation is performed by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  action?: Callback<void>;

}

/**
 * Defines the specific style parameters of **PopupV2**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface PopupV2InitInfo {
  /**
   * Callback for the **PopupV2** close button.
   * No close button callback is set by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onClose?: Callback<void>;

  /**
   * PopupV2 title text.
   *
   * **Note:** Default value: **''**, meaning no title text is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  title?: ResourceStr;

  /**
   * Title text properties, such as the title color, font size, and font weight.
   *
   * Default value: **undefined**, meaning the system title text properties are used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  titleModifier?: TextModifier;

  /**
   * PopupV2 close button. **true**: displays the close button; **false**: hides the close button. Resource type:
   * displays the corresponding icon.
   *
   * Default value: **true**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  showClose?: boolean | Resource;

  /**
   * PopupV2 action buttons. A maximum of two buttons can be set. No buttons are displayed by default.
   *
   * Default value: **[{ text: '' }, { text: '' }]**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  buttons?: [PopupV2Button?, PopupV2Button?];

  /**
   * PopupV2 content text.
   *
   * **Note:** Default value: **''**, meaning no content text is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  message: ResourceStr;

  /**
   * Content text properties, such as the content text color, font size, and font weight.
   *
   * Default value: **undefined**, meaning the system content text properties are used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  messageModifier?: TextModifier;

  /**
   * Maximum width of **PopupV2**, allowing **PopupV2** to be displayed with a custom width.
   *
   * Default value: **400vp**
   *
   * NOTE
   *
   * 1. When using a referenced resource type, the parameter type must be consistent with the attribute method type.
   * 2. **maxWidth** is of the [Dimension]{@link Dimension} type, which supports numbers, percentages, or strings with units (such as 400, '50%', '400vp'). When using a referenced resource type, the resource type supports float and integer, for example, `$r('app.float.maxWidth')` and `$r('app.integer.maxWidth')`.
   * 3. When the type is Resource, if no unit is set, the default unit is px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  maxWidth?: Dimension;

  /**
   * PopupV2 icon.
   *
   * **Note:** Default value: **''**, meaning no icon is displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  icon?: ResourceStr;

  /**
   * icon properties, such as the icon color, size, and border.
   *
   * Default value: **undefined**, meaning the system icon properties are used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  iconModifier?: ImageModifier;

  /**
   * Layout direction of **PopupV2**, which controls text arrangement and alignment. This is applicable to RTL (right-
   * to-left) layout in internationalization scenarios. For details about the enum values, see
   * [Direction]{@link Direction}.
   *
   * Default value: **Direction.Auto**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  direction?: Direction;

}

/**
 * Build function of PopupV2. This component is implemented based on state management V2
 * Compared with Popup, PopupV2 offers a higher level of observation and management over data objects.
 *
 * @param { PopupV2InitInfo } options - Configuration parameters of the PopupV2 component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
@Builder
export declare function PopupV2(options: PopupV2InitInfo): void;