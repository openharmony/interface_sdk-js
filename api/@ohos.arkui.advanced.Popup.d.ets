/*
* Copyright (C) 2023 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit ArkUI
 */

/**
 * Provides text style settings.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */


export interface PopupTextOptions {
  /**
   * Text content.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  text: ResourceStr;

  /**
   * Text font size.
   * 
   * Default value: **$r('sys.float.ohos_id_text_size_body2')**
   * 
   * The string value must be convertible to a number (for example, **'10'**) or include a length unit (for example, 
   * **'10px'**); percentage-based strings are not supported.
   * 
   * Value range of number values: (0, +∞)
   *
   * @type { ?(number | string | Resource) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontSize?: number | string | Resource;

  /**
   * Text font color.
   * 
   * Default value: **$r('sys.color.ohos_id_color_text_secondary')**
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontColor?: ResourceColor;

  /**
   * Text font weight.
   * 
   * For the number type, the value ranges from 100 to 900, at an interval of 100. A larger value indicates a heavier 
   * font weight. The default value is **400**.
   * 
   * For the string type, only strings of the number type are supported, for example, **"400"**, **"bold"**, 
   * **"bolder"**, **"lighter"**, **"regular"**, and **"medium"**, which correspond to the enumerated values in 
   * **FontWeight**.
   * 
   * Default value: **FontWeight.Regular**
   * 
   * @type { ?(number | FontWeight | string) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontWeight?: number | FontWeight | string;
}

/**
 * Defines the button attributes and events.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export interface PopupButtonOptions {
  /**
   * Text of the button.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  text: ResourceStr;

  /**
   * Click callback of the button.
   * 
   * By default, no operation is performed.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  action?: () => void;

  /**
   * Font size of the button text.
   * 
   * Default value: **$r('sys.float.ohos_id_text_size_button2')**
   * 
   * The string value must be convertible to a number (for example, **'10'**) or include a length unit (for example, 
   * **'10px'**); percentage-based strings are not supported.
   * 
   * Invalid values are handled as default values.
   *
   * @type { ?(number | string | Resource) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontSize?: number | string | Resource;

  /**
   * Font color of the button text.
   * 
   * Default value: **$r('sys.color.ohos_id_color_text_primary_activated')**
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fontColor?: ResourceColor;
}

/**
 * Defines the icon options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export interface PopupIconOptions {
  /**
   * Icon content.
   *
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  image: ResourceStr;

  /**
   * Icon width.
   * 
   * Default value: **32VP**
   *
   * @type { ?Dimension }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  width?: Dimension;

  /**
   * Icon height.
   * 
   * Default value: **32VP**
   *
   * @type { ?Dimension }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  height?: Dimension;

  /**
   * Icon fill color. This property applies only to an SVG image.
   * 
   * By default, the icon color is not changed.
   *
   * @type { ?ResourceColor }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fillColor?: ResourceColor;

  /**
   * Rounded corner of the icon.
   * 
   * Default value: **$r('sys.float.ohos_id_corner_radius_default_s')**
   *
   * @type { ?(Length | BorderRadiuses) }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  borderRadius?: Length | BorderRadiuses;
}

/**
 * Defines the style parameters of the popup.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export interface PopupOptions {
  /**
   * Icon of the popup.
   * 
   * **NOTE**
   * 
   * The icon is not displayed when **width** and **height** are set to an invalid value or **0**.
   * 
   * By default, no icon is displayed.
    *
   * @type { ?PopupIconOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon?: PopupIconOptions;

  /**
   * Title of the popup.
   * 
   * By default, no title is displayed.
    *
   * @type { ?PopupTextOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  title?: PopupTextOptions;

  /**
   * Message of the popup.
   * 
   * **NOTE**
   * 
   * **fontWeight** is not available for messages.
   * 
   * By default, no message is displayed.
   *
   * @type { PopupTextOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  message: PopupTextOptions;

  /**
   * Whether to show the close button.
   * 
   * **true**: Show the close button. **false**: Do not show the close button.
   * 
   * **Resource**: Show the corresponding icon.
   * 
   * Default value: **true**
   *
   * @type { ?(boolean | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  showClose?: boolean | Resource;

  /**
   * Callback for the popup close button.
   * 
   * By default, the callback for the close button is not set.
   *
   * @type { ?() => void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onClose?: () => void;

  /**
   * Buttons of the popup. A maximum of two buttons can be set.
   * 
   * By default, no buttons are displayed.
   *
   * @type { ?[PopupButtonOptions?, PopupButtonOptions?] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  buttons?: [PopupButtonOptions?, PopupButtonOptions?];

  /**
   * Layout direction.
   * 
   * Default value: **Direction.Auto**
   *
   * @type { ?Direction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
   direction?: Direction;

  /**
   * Maximum width of the popup. This API allows the popup to display with a custom width.
   * 
   * **NOTE**
   * 
   * 1. When using resource references, ensure that the parameter type matches the attribute method type.
   * 2. **maxWidth** accepts numeric values (both floating-point and integer values), such as **$r('app.float.maxWidth')** and **$r('app.integer.maxWidth')**.
   * 3. When the type is Resource, values default to px units if no unit is explicitly specified.
   * 
   * Default value: **400vp**
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  maxWidth?: Dimension;
}

/**
 *
 * @param { PopupOptions } options - Parameters of the popup.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
@Builder
export declare function Popup(options: PopupOptions): void;