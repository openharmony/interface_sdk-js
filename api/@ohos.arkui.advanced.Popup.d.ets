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
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export interface PopupTextOptions {
  /**
   * Text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  text: ResourceStr;

  /**
   * Font size of the text.
   *
   * Default value: `$r('sys.float.ohos_id_text_size_body2')`
   *
   * For the string type, the value can be a string that can be converted to a number (such as '10') or a string with a
   * length unit (such as '10px'). Setting a percentage string is not supported.
   *
   * For the number type, the value range is (0, +∞). When the type is number, the unit is fp.
   *
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
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export interface PopupButtonOptions {
  /**
   * Text of the button.
   *
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
   * Optional values of the string type: a string that can be converted to a number (for example, '10') or a string with
   * a length unit (for example, '10px'). Setting a percentage string is not supported.
   *
   * number: value range (0, +∞). When the type is number, the unit is fp.
   *
   * The default value is used when an abnormal value is set.
   *
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  image: ResourceStr;

  /**
   * Icon width. Unit: vp.
   *
   * Default value: **32vp**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  width?: Dimension;

  /**
   * Icon height. Unit: vp.
   *
   * Default value: **32vp**
   *
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  fillColor?: ResourceColor;

  /**
   * Icon corner radius. Unit: vp.
   *
   * Default value: `$r('sys.float.ohos_id_corner_radius_default_s')`
   *
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
   * Popup icon.
   *
   * **NOTE**
   *
   * The icon is not displayed when width and height are set to abnormal values or 0.
   *
   * Hidden by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon?: PopupIconOptions;

  /**
   * Popup title text.
   *
   * Hidden by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  title?: PopupTextOptions;

  /**
   * Popup content text.
   *
   * **NOTE**
   *
   * **fontWeight** setting is not supported for message.
   *
   * Hidden by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  message: PopupTextOptions;

  /**
   * Popup close button.
   *
   * The value **true** indicates to show the close button, and **false** indicates to hide the close button.
   *
   * **Resource**: displays the corresponding icon.
   *
   * Default value: **true**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  showClose?: boolean | Resource;

  /**
   * Popup close button callback.
   *
   * No close button callback is set by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  onClose?: () => void;

  /**
   * Popup action buttons. A maximum of two buttons can be set.
   *
   * Hidden by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  buttons?: [PopupButtonOptions?, PopupButtonOptions?];

  /**
   * Layout direction of the Popup content. For available enum values, see [Direction]{@link Direction}.
   *
   * Default value: **Direction.Auto**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  direction?: Direction;

  /**
   * Maximum width of the Popup. Custom width display is supported.
   *
   * **NOTE**
   *
   * 1. When a referenced resource type is used, its parameter type must be consistent with the type of the **maxWidth** attribute itself.
   * 2. **maxWidth** is of the [Dimension]{@link Dimension} type, which supports numeric and percentage string types. Numeric types support float and integer, for example, `$r('app.float.maxWidth')` and `$r('app.integer.maxWidth')`; percentage strings, for example, '50%'.
   * 3. When the type is Resource, if no unit is set, the default unit is px.
   *
   * Default value: **400vp**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  maxWidth?: Dimension;
}

/**
 * Build function of Popup.
 *
 * @param { PopupOptions } options - Configuration parameters of the **Popup** component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
@Builder
export declare function Popup(options: PopupOptions): void;